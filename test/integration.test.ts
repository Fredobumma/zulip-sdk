import { describe, expect, inject, it } from 'vitest';
import { createClient, fetchApiKey, isZulipError, type ZulipEvent } from '../src/index.js';
import { testFetch } from './support/zulip.js';

const server = inject('zulip');

describe.skipIf(!server)('against Zulip 12.3', () => {
	// Vitest runs this body even when the tests are skipped, so the placeholders must be valid.
	const zulip = createClient({
		realm: server?.realm ?? 'http://localhost',
		email: server?.email ?? 'unused@example.com',
		apiKey: server?.apiKey ?? 'unused',
		headers: server?.headers,
		fetch: testFetch,
	});
	const topic = `zulip-sdk ${Date.now()}`;

	it('reads the server’s settings', async () => {
		const settings = await zulip.getServerSettings();
		expect(settings.zulip_version).toMatch(/^12\.3/);
		expect(settings.realm_name).toBe('SDK Test Realm');
	});

	it('sends, reads, edits and reacts to messages', async () => {
		const { id } = await zulip.sendMessage({
			type: 'channel',
			to: 'general',
			topic,
			content: 'Hello from **zulip-sdk**',
		});

		const { messages } = await zulip.getMessages({
			anchor: 'newest',
			num_before: 10,
			num_after: 0,
			narrow: [
				{ operator: 'channel', operand: 'general' },
				{ operator: 'topic', operand: topic },
			],
			apply_markdown: false,
		});
		expect(messages.map((message) => [message.id, message.content])).toEqual([[id, 'Hello from **zulip-sdk**']]);

		await zulip.updateMessage({ message_id: id, content: 'Edited by zulip-sdk' });
		await zulip.addReaction({ message_id: id, emoji_name: 'octopus' });
		const { message } = await zulip.getMessage({ message_id: id, apply_markdown: false });
		expect(message.content).toBe('Edited by zulip-sdk');
		expect(message.reactions.map((reaction) => reaction.emoji_name)).toEqual(['octopus']);
	});

	it('delivers typed events in real time, and cleans up its queue', async () => {
		let queueId = '';
		const seen: ZulipEvent[] = [];
		const iterator = zulip.events({
			event_types: ['message', 'reaction'],
			onRegister: (queue) => {
				queueId = String(queue.queue_id);
			},
		});
		const first = iterator.next();
		// Give the queue a moment to register before causing events.
		await new Promise((resolve) => setTimeout(resolve, 500));
		const { id } = await zulip.sendMessage({ type: 'channel', to: 'general', topic, content: 'Live!' });
		await zulip.addReaction({ message_id: id, emoji_name: 'tada' });

		const firstResult = await first;
		if (!firstResult.done) seen.push(firstResult.value);
		while (seen.length < 2) {
			const next = await iterator.next();
			if (next.done) break;
			seen.push(next.value);
		}
		await iterator.return();

		const [message, reaction] = seen;
		expect(message?.type === 'message' && message.message.content).toContain('Live!');
		expect(
			reaction?.type === 'reaction' && reaction.op === 'add' && [reaction.message_id, reaction.emoji_name],
		).toEqual([id, 'tada']);

		// The queue was deleted when iteration stopped.
		const gone = await zulip
			.getEvents({ queue_id: queueId, last_event_id: -1, dont_block: true })
			.catch((error) => error);
		expect(isZulipError(gone, 'BAD_EVENT_QUEUE_ID')).toBe(true);
	});

	it('creates channels and finds them by name', async () => {
		const name = `sdk-${Date.now()}`;
		await zulip.subscribe({ subscriptions: [{ name, description: 'Made by the zulip-sdk tests' }] });
		const { stream_id } = await zulip.getStreamId({ stream: name });
		const { stream } = await zulip.getStreamById({ stream_id });
		expect(stream.description).toBe('Made by the zulip-sdk tests');
	});

	it('uploads files', async () => {
		const upload = await zulip.uploadFile({ filename: new File(['notes'], 'notes.txt', { type: 'text/plain' }) });
		expect(upload.url).toMatch(/^\/user_uploads\/.+\/notes\.txt$/);
	});

	it('reports Zulip’s errors with their codes', async () => {
		const missing = await zulip
			.sendMessage({ type: 'channel', to: 'no-such-channel', topic, content: 'x' })
			.catch((error) => error);
		expect(isZulipError(missing, 'STREAM_DOES_NOT_EXIST')).toBe(true);

		const wrong = await fetchApiKey({
			realm: server?.realm ?? '',
			username: server?.email ?? '',
			password: 'wrong',
			headers: server?.headers,
			fetch: testFetch,
		}).catch((error) => error);
		expect(wrong).toMatchObject({ status: 401 });
	});
});
