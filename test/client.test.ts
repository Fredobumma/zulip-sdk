import { describe, expect, it } from 'vitest';
import { createClient, isZulipError, ZulipError, type ZulipEvent } from '../src/index.js';
import { parseZuliprc } from '../src/node.js';

type Handler = (request: Request) => Response | Promise<Response>;

function fakeZulip(handler: Handler) {
	const requests: Request[] = [];
	const fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
		const request = new Request(input, init);
		requests.push(request.clone());
		return handler(request);
	};
	const zulip = createClient({
		realm: 'https://chat.example.com/',
		email: 'bot@example.com',
		apiKey: 'secret',
		fetch: fetch as typeof globalThis.fetch,
	});
	return { zulip, requests };
}

const ok = (body: Record<string, unknown> = {}, init: ResponseInit = {}) =>
	Response.json({ result: 'success', msg: '', ...body }, init);
const error = (
	status: number,
	code: string,
	msg: string,
	extra: Record<string, unknown> = {},
	headers: Record<string, string> = {},
) => Response.json({ result: 'error', code, msg, ...extra }, { status, headers });

describe('requests', () => {
	it('authenticates with the email and API key', async () => {
		const { zulip, requests } = fakeZulip(() => ok({ zulip_version: '12.3' }));
		await zulip.getServerSettings();
		expect(requests[0]?.url).toBe('https://chat.example.com/api/v1/server_settings');
		expect(requests[0]?.headers.get('authorization')).toBe(`Basic ${btoa('bot@example.com:secret')}`);
	});

	it('sends writes as a form, JSON-encoding what Zulip expects as JSON', async () => {
		const { zulip, requests } = fakeZulip(() => ok({ id: 42 }));
		const sent = await zulip.sendMessage({ type: 'direct', to: [7, 8], content: 'Hi', read_by_sender: true });
		expect(sent.id).toBe(42);
		expect(requests[0]?.method).toBe('POST');
		expect(Object.fromEntries(new URLSearchParams(await requests[0]?.text()))).toEqual({
			type: 'direct',
			to: '[7,8]',
			content: 'Hi',
			read_by_sender: 'true',
		});
	});

	it('puts GET parameters in the query, JSON-encoding narrows', async () => {
		const { zulip, requests } = fakeZulip(() => ok({ messages: [] }));
		await zulip.getMessages({
			anchor: 'newest',
			num_before: 5,
			num_after: 0,
			narrow: [{ operator: 'channel', operand: 'general' }],
		});
		const query = new URL(requests[0]?.url ?? '').searchParams;
		expect(Object.fromEntries(query)).toEqual({
			anchor: 'newest',
			num_before: '5',
			num_after: '0',
			narrow: '[{"operator":"channel","operand":"general"}]',
		});
	});

	it('fills path parameters', async () => {
		const { zulip, requests } = fakeZulip(() => ok());
		await zulip.updateMessage({ message_id: 9, content: 'Edited' });
		expect(requests[0]?.method).toBe('PATCH');
		expect(requests[0]?.url).toBe('https://chat.example.com/api/v1/messages/9');
		expect(await requests[0]?.text()).toBe('content=Edited');
	});

	it('uploads files as multipart', async () => {
		const { zulip, requests } = fakeZulip(() =>
			ok({ uri: '/user_uploads/1/ab/notes.txt', url: '/user_uploads/1/ab/notes.txt', filename: 'notes.txt' }),
		);
		await zulip.uploadFile({ filename: new File(['hello'], 'notes.txt', { type: 'text/plain' }) });
		const form = await requests[0]?.formData();
		const file = form?.get('filename') as File;
		expect([file.name, await file.text()]).toEqual(['notes.txt', 'hello']);
	});
});

describe('errors', () => {
	it('throws ZulipError with Zulip’s code and message', async () => {
		const { zulip } = fakeZulip(() =>
			error(400, 'STREAM_DOES_NOT_EXIST', "Channel 'nowhere' does not exist", { stream: 'nowhere' }),
		);
		const failure = await zulip
			.sendMessage({ type: 'channel', to: 'nowhere', topic: 't', content: 'x' })
			.catch((e) => e);
		expect(failure).toBeInstanceOf(ZulipError);
		expect(isZulipError(failure, 'STREAM_DOES_NOT_EXIST')).toBe(true);
		expect(failure).toMatchObject({
			status: 400,
			message: "Channel 'nowhere' does not exist",
			data: { stream: 'nowhere' },
		});
	});

	it('waits out rate limits and retries', async () => {
		let calls = 0;
		const { zulip } = fakeZulip(() =>
			++calls === 1
				? error(429, 'RATE_LIMIT_HIT', 'API usage exceeded rate limit', { 'retry-after': 0 }, { 'retry-after': '0' })
				: ok({ zulip_version: '12.3' }),
		);
		expect((await zulip.getServerSettings()).zulip_version).toBe('12.3');
		expect(calls).toBe(2);
	});

	it('explains a URL that isn’t Zulip', async () => {
		const { zulip } = fakeZulip(() => new Response('<html>nope</html>', { status: 404 }));
		const failure = await zulip.getServerSettings().catch((e) => e);
		expect(failure.message).toBe(
			"https://chat.example.com/api/v1/server_settings doesn't exist. Is https://chat.example.com/ a Zulip server?",
		);
	});
});

describe('events', () => {
	it('registers, polls, re-registers an expired queue, and deletes it when done', async () => {
		const log: string[] = [];
		let queues = 0;
		let polls = 0;
		const { zulip } = fakeZulip(async (request) => {
			const url = new URL(request.url);
			log.push(`${request.method} ${url.pathname}${request.method === 'GET' ? `?${url.searchParams}` : ''}`);
			if (url.pathname.endsWith('/register')) return ok({ queue_id: `q${++queues}`, last_event_id: -1 });
			if (request.method === 'DELETE') return ok();
			polls++;
			if (polls === 1)
				return ok({
					events: [
						{ id: 0, type: 'heartbeat' },
						{ id: 1, type: 'typing', op: 'start' },
					],
				});
			if (polls === 2) return error(400, 'BAD_EVENT_QUEUE_ID', 'Bad event queue ID: q1', { queue_id: 'q1' });
			return ok({ events: [{ id: 0, type: 'message', message: { id: 5 }, flags: [] }] });
		});

		const seen: ZulipEvent[] = [];
		const registered: string[] = [];
		for await (const event of zulip.events({
			event_types: ['message', 'typing'],
			onRegister: (queue) => registered.push(String(queue.queue_id)),
		})) {
			seen.push(event);
			if (seen.length === 2) break;
		}

		expect(seen.map((event) => event.type)).toEqual(['typing', 'message']);
		expect(registered).toEqual(['q1', 'q2']);
		expect(log).toEqual([
			'POST /api/v1/register',
			'GET /api/v1/events?queue_id=q1&last_event_id=-1',
			'GET /api/v1/events?queue_id=q1&last_event_id=1',
			'POST /api/v1/register',
			'GET /api/v1/events?queue_id=q2&last_event_id=-1',
			'DELETE /api/v1/events',
		]);
	});
});

describe('zuliprc', () => {
	it('reads the [api] section', () => {
		expect(parseZuliprc('[api]\nemail=bot@example.com\nkey = abc123\nsite=https://chat.example.com\n')).toEqual({
			realm: 'https://chat.example.com',
			email: 'bot@example.com',
			apiKey: 'abc123',
		});
		expect(() => parseZuliprc('[api]\nemail=x')).toThrow('needs email, key and site');
	});
});
