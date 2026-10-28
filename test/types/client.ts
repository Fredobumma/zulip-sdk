/**
 * Compile-time tests: `pnpm typecheck` fails if an assertion stops holding
 * or a line marked `@ts-expect-error` starts compiling.
 */

import { createClient, type ZulipEvent } from '../../src/index.js';

type Same<A, B> = [A] extends [B] ? ([B] extends [A] ? true : false) : false;
function expect<T extends true>(): T | undefined {
	return undefined;
}

const zulip = createClient({ realm: 'https://chat.example.com', email: 'bot@example.com', apiKey: 'key' });

export async function messages() {
	const sent = await zulip.sendMessage({ type: 'channel', to: 'general', topic: 'Greetings', content: 'Hello' });
	expect<Same<typeof sent.id, number>>();

	// @ts-expect-error content is required
	await zulip.sendMessage({ type: 'channel', to: 'general', topic: 'Greetings' });
	// @ts-expect-error not a parameter
	await zulip.sendMessage({ type: 'channel', to: 'general', topic: 'x', content: 'x', contnet: 'x' });
	// @ts-expect-error not a message type
	await zulip.sendMessage({ type: 'email', to: 'general', topic: 'x', content: 'x' });

	const { messages } = await zulip.getMessages({
		anchor: 'newest',
		num_before: 20,
		num_after: 0,
		narrow: [{ operator: 'channel', operand: 'general' }],
	});
	expect<Same<(typeof messages)[number]['id'], number>>();
}

export async function noParameters() {
	const settings = await zulip.getServerSettings();
	expect<Same<typeof settings.zulip_version, string>>();
}

export async function events() {
	for await (const event of zulip.events({ event_types: ['message', 'reaction'] })) {
		expect<Same<typeof event, ZulipEvent>>();
		if (event.type === 'message') {
			expect<Same<typeof event.message.content, string>>();
		} else if (event.type === 'reaction' && event.op === 'add') {
			expect<Same<typeof event.message_id, number>>();
		}
	}
}
