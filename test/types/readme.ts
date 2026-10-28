/** The README's examples, so they keep compiling. */

import { createClient, fetchApiKey, isZulipError } from '../../src/index.js';
import { fromZuliprc } from '../../src/node.js';

declare const realm: string;
declare const username: string;
declare const password: string;

export async function intro() {
	const zulip = createClient({
		realm: 'https://chat.example.com',
		email: 'my-bot@chat.example.com',
		apiKey: process.env.ZULIP_API_KEY ?? '',
	});
	await zulip.sendMessage({
		type: 'channel',
		to: 'general',
		topic: 'Deploys',
		content: 'Version 2.1 is live :rocket:',
	});
	for await (const event of zulip.events({ event_types: ['message'] })) {
		if (event.type === 'message' && event.message.content.includes('ping')) {
			await zulip.sendMessage({ type: 'direct', to: [event.message.sender_id], content: 'pong' });
		}
	}
}

export async function credentials() {
	createClient(await fromZuliprc());
	const { email, apiKey } = await fetchApiKey({ realm, username, password });
	return { email, apiKey };
}

export async function messages(zulip: ReturnType<typeof createClient>) {
	const { id } = await zulip.sendMessage({ type: 'channel', to: 'general', topic: 'Lunch', content: 'Pizza?' });
	await zulip.addReaction({ message_id: id, emoji_name: 'pizza' });
	await zulip.updateMessage({ message_id: id, content: 'Pizza at 1?' });
	await zulip.getMessages({
		anchor: 'newest',
		num_before: 50,
		num_after: 0,
		narrow: [
			{ operator: 'channel', operand: 'general' },
			{ operator: 'topic', operand: 'Lunch' },
		],
	});
}

export async function events(zulip: ReturnType<typeof createClient>) {
	for await (const event of zulip.events({ event_types: ['message', 'reaction', 'subscription'] })) {
		switch (event.type) {
			case 'message':
				console.log(event.message.sender_full_name, event.message.content);
				break;
			case 'reaction':
				if (event.op === 'add') console.log(event.emoji_name, 'on', event.message_id);
				break;
		}
	}
}

export async function errors(zulip: ReturnType<typeof createClient>) {
	try {
		await zulip.sendMessage({ type: 'channel', to: 'missing', topic: 'x', content: 'x' });
	} catch (error) {
		if (isZulipError(error, 'STREAM_DOES_NOT_EXIST')) console.log(error.message);
	}
	await zulip.request('GET', '/new/endpoint', {});
}
