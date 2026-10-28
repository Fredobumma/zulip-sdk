import { ZulipError, ZulipRequestError } from './errors.js';
import {
	OPERATIONS,
	type Operations,
	type RegisterQueueParams,
	type RegisterQueueResponse,
	type ZulipEvent,
} from './generated/api.js';

export const VERSION = '0.1.1';

export interface ClientOptions {
	/** The organization's address, such as `https://chat.zulip.org` or `https://example.zulipchat.com`. */
	realm: string;
	/** The account's Zulip API email. Bots have one under Settings → Bots. */
	email: string;
	/** The account's API key. */
	apiKey: string;
	/** A `fetch` to use instead of the global one. */
	fetch?: typeof globalThis.fetch;
	/** Milliseconds before a request is abandoned. Defaults to 30 seconds; event polling waits longer. */
	timeout?: number;
	/** How many times to retry after hitting a rate limit, waiting as Zulip asks. Defaults to 3. */
	retries?: number;
	/** Identifies your client to the server, as Zulip asks clients to. */
	userAgent?: string;
	/** Headers sent with every request, for a proxy in front of Zulip. */
	headers?: HeadersInit;
}

export interface RequestOptions {
	signal?: AbortSignal;
	/** Overrides the client's `timeout` for this call. */
	timeout?: number;
}

/** `[params?, options?]`, with `params` required when the operation has required parameters. */
// biome-ignore lint/complexity/noBannedTypes: `{} extends P` asks whether every parameter is optional.
type Args<P> = {} extends P ? [params?: P, options?: RequestOptions] : [params: P, options?: RequestOptions];

export interface EventsOptions extends Omit<RegisterQueueParams, 'event_queue_longpoll_timeout_seconds'> {
	signal?: AbortSignal;
	/** Also yield the heartbeats Zulip sends while nothing happens. */
	heartbeats?: boolean;
	/** Called with Zulip's answer each time a queue is registered, which includes the initial state you asked for. */
	onRegister?: (queue: RegisterQueueResponse) => void;
}

/** A Zulip client: every API operation as a method, plus `events()` and `request()`. */
export type ZulipClient = {
	[K in keyof Operations]: (...args: Args<Operations[K]['params']>) => Promise<Operations[K]['response']>;
} & {
	/**
	 * Real-time events, for as long as you iterate: registers an event queue,
	 * long-polls it, registers a new one if Zulip expires it, and deletes it
	 * when you stop.
	 */
	events(options?: EventsOptions): AsyncGenerator<ZulipEvent, void, undefined>;
	/** Any endpoint, untyped, such as one added by a newer Zulip. */
	request<T = unknown>(
		method: string,
		path: string,
		params?: Record<string, unknown>,
		options?: RequestOptions,
	): Promise<T>;
};

interface Encoding {
	method: string;
	path: string;
	query: readonly string[];
	json: readonly string[];
	multipart: boolean;
}

function base64(text: string): string {
	let binary = '';
	for (const byte of new TextEncoder().encode(text)) binary += String.fromCharCode(byte);
	return btoa(binary);
}

function sleep(ms: number, signal?: AbortSignal): Promise<void> {
	return new Promise((resolve, reject) => {
		if (signal?.aborted) return reject(signal.reason);
		const timer = setTimeout(resolve, ms);
		signal?.addEventListener(
			'abort',
			() => {
				clearTimeout(timer);
				reject(signal.reason);
			},
			{ once: true },
		);
	});
}

/** How a value travels in a form or query string: JSON for anything that isn't a plain string or number. */
function encodeValue(value: unknown, json: boolean): string {
	if (json || (typeof value === 'object' && value !== null)) return JSON.stringify(value);
	return String(value);
}

export function createClient(options: ClientOptions): ZulipClient {
	if (!options.realm || !options.email || !options.apiKey) {
		throw new TypeError('createClient() needs the realm URL, the account email and its API key.');
	}
	return buildClient(options, `Basic ${base64(`${options.email}:${options.apiKey}`)}`);
}

/**
 * Exchanges a username and password for the account's API key, so an app can
 * sign people in without asking them to find their key.
 */
export async function fetchApiKey(
	options: Omit<ClientOptions, 'email' | 'apiKey'> & { username: string; password: string },
): Promise<{ email: string; apiKey: string /** Missing from servers older than Zulip 7.0. */; userId?: number }> {
	const { username, password, ...rest } = options;
	const client = buildClient({ ...rest, email: '', apiKey: '' }, null);
	const response = await client.fetchApiKey({ username, password });
	return { email: response.email, apiKey: response.api_key, userId: response.user_id };
}

function buildClient(options: ClientOptions, authorization: string | null): ZulipClient {
	const realm = new URL(options.realm);
	const root = `${realm.origin}${realm.pathname.replace(/\/+$/, '')}/api/v1`;
	const doFetch = options.fetch ?? ((input, init) => globalThis.fetch(input, init));
	const timeout = options.timeout ?? 30_000;
	const retries = options.retries ?? 3;

	async function call<T>(
		encoding: Encoding,
		params: Record<string, unknown> = {},
		init: RequestOptions = {},
	): Promise<T> {
		const rest = { ...params };
		const path = encoding.path.replace(/\{(\w+)\}/g, (_, name: string) => {
			const value = rest[name];
			if (value === undefined || value === null || value === '') {
				throw new TypeError(`${encoding.method} ${encoding.path} needs the "${name}" parameter.`);
			}
			delete rest[name];
			return encodeURIComponent(String(value));
		});

		const query = new URLSearchParams();
		const fields: Array<[string, string | Blob]> = [];
		for (const [name, value] of Object.entries(rest)) {
			if (value === undefined) continue;
			if (encoding.method === 'GET' || encoding.query.includes(name)) {
				query.append(name, encodeValue(value, encoding.json.includes(name)));
			} else {
				fields.push([name, value instanceof Blob ? value : encodeValue(value, encoding.json.includes(name))]);
			}
		}

		const url = `${root}${path}${query.size ? `?${query}` : ''}`;
		const request = { method: encoding.method, url };
		let body: BodyInit | undefined;
		if (fields.length > 0) {
			if (encoding.multipart || fields.some(([, value]) => value instanceof Blob)) {
				const form = new FormData();
				for (const [name, value] of fields) {
					if (typeof value === 'string' || value instanceof File) form.append(name, value);
					else form.append(name, value, 'file');
				}
				body = form;
			} else {
				body = new URLSearchParams(fields as Array<[string, string]>);
			}
		}

		for (let attempt = 0; ; attempt++) {
			const limit = AbortSignal.timeout(init.timeout ?? timeout);
			const signal = init.signal ? AbortSignal.any([init.signal, limit]) : limit;
			let response: Response;
			try {
				const headers = new Headers(options.headers);
				if (authorization) headers.set('authorization', authorization);
				headers.set('accept', 'application/json');
				headers.set('user-agent', options.userAgent ?? `zulip-sdk/${VERSION}`);
				response = await doFetch(url, { method: encoding.method, headers, body, signal });
			} catch (error) {
				if (limit.aborted) {
					throw new ZulipRequestError(`Timed out after ${init.timeout ?? timeout} ms`, request, {
						cause: error,
						timedOut: true,
					});
				}
				if (init.signal?.aborted) throw init.signal.reason;
				throw new ZulipRequestError(`Request failed: ${(error as Error).message}`, request, { cause: error });
			}

			const text = await response.text();
			let data: Record<string, unknown>;
			try {
				data = JSON.parse(text) as Record<string, unknown>;
			} catch {
				throw new ZulipError(
					'NOT_JSON',
					response.status === 404
						? `${url} doesn't exist. Is ${options.realm} a Zulip server?`
						: `Expected JSON but got HTTP ${response.status}: ${text.slice(0, 160)}`,
					response.status,
					request,
					{},
				);
			}

			if (response.status === 429 && attempt < retries) {
				// Zulip says how long to wait, in seconds, in the header and the body.
				const wait = Number(response.headers.get('retry-after') ?? data['retry-after'] ?? 1);
				await sleep(Math.min(Math.max(wait, 0), 60) * 1000, init.signal);
				continue;
			}
			if (!response.ok || data.result === 'error') {
				throw new ZulipError(
					typeof data.code === 'string' ? data.code : 'BAD_REQUEST',
					typeof data.msg === 'string' ? data.msg : `HTTP ${response.status}`,
					response.status,
					request,
					data,
				);
			}
			return data as T;
		}
	}

	const client: Record<string, unknown> = {
		request<T>(method: string, path: string, params?: Record<string, unknown>, init?: RequestOptions) {
			const encoding = { method: method.toUpperCase(), path, query: [], json: [], multipart: false };
			return call<T>(encoding, params, init);
		},

		async *events(eventOptions: EventsOptions = {}): AsyncGenerator<ZulipEvent, void, undefined> {
			const { signal, heartbeats = false, onRegister, ...registration } = eventOptions;
			const register = async () => {
				const queue = await call<RegisterQueueResponse>(OPERATIONS.registerQueue, { ...registration }, { signal });
				onRegister?.(queue);
				return queue;
			};
			let queue = await register();
			let lastEventId = queue.last_event_id ?? -1;
			let failures = 0;
			try {
				while (!signal?.aborted) {
					let events: ZulipEvent[];
					try {
						// Zulip holds the request open until there's an event, or for about 90 seconds.
						({ events } = await call<{ events: ZulipEvent[] }>(
							OPERATIONS.getEvents,
							{ queue_id: queue.queue_id, last_event_id: lastEventId },
							{ signal, timeout: 120_000 },
						));
						failures = 0;
					} catch (error) {
						if (signal?.aborted) return;
						if (error instanceof ZulipError && error.code === 'BAD_EVENT_QUEUE_ID') {
							// The queue expired while nobody was polling. Start a new one.
							queue = await register();
							lastEventId = queue.last_event_id ?? -1;
							continue;
						}
						if (error instanceof ZulipRequestError || (error instanceof ZulipError && error.status >= 500)) {
							failures++;
							await sleep(Math.min(1000 * 2 ** failures, 30_000), signal);
							continue;
						}
						throw error;
					}
					for (const event of events) {
						lastEventId = Math.max(lastEventId, Number(event.id));
						if (event.type === 'heartbeat' && !heartbeats) continue;
						yield event;
					}
				}
			} finally {
				if (queue.queue_id) {
					await call(OPERATIONS.deleteQueue, { queue_id: queue.queue_id }, { timeout: 5000 }).catch(() => {});
				}
			}
		},
	};

	for (const [name, encoding] of Object.entries(OPERATIONS)) {
		client[name] = (params?: Record<string, unknown>, init?: RequestOptions) => call(encoding, params, init);
	}
	return client as unknown as ZulipClient;
}
