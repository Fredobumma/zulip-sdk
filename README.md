# zulip-sdk

A TypeScript SDK for the [Zulip](https://zulip.com) API. Every operation, parameter and response is typed. The types are generated from Zulip's own OpenAPI description, so they match the server.

```ts
import { createClient } from 'zulip-sdk';

const zulip = createClient({
  realm: 'https://chat.example.com',
  email: 'my-bot@chat.example.com',
  apiKey: process.env.ZULIP_API_KEY ?? '',
});

await zulip.sendMessage({ type: 'channel', to: 'general', topic: 'Deploys', content: 'Version 2.1 is live :rocket:' });

for await (const event of zulip.events({ event_types: ['message'] })) {
  if (event.type === 'message' && event.message.content.includes('ping')) {
    await zulip.sendMessage({ type: 'direct', to: [event.message.sender_id], content: 'pong' });
  }
}
```

- **The whole API.** All 160 operations of Zulip 12.3, named as in [Zulip's API documentation](https://zulip.com/api/): `send-message` is `sendMessage()`, and each method links to its page.
- **Typed real-time events.** `events()` yields all 89 kinds of event as one union, so `event.type === 'message'` narrows to the message's actual shape. The iterator registers the event queue, long-polls it, and registers again if Zulip expires it. It deletes the queue when you stop.
- **Encoded correctly.** Zulip takes some parameters JSON-encoded inside a form, such as `to`, `narrow` and `subscriptions`. The SDK knows which from the spec, so you pass plain values.
- **Runs anywhere `fetch` does.** Node 22+, Bun, Deno and browsers. It has no dependencies.

It is meant to succeed [zulip-js](https://github.com/zulip/zulip-js), which is untyped and covers only part of the API.

## Install

```sh
npm install zulip-sdk
```

You need the account's email and API key. For a bot, find them under **Settings → Bots**. For yourself, use **Settings → Account & privacy → API key**. In Node, you can read a downloaded `zuliprc` instead:

```ts
import { fromZuliprc } from 'zulip-sdk/node';

const zulip = createClient(await fromZuliprc()); // ~/.zuliprc
```

To sign people in with a password instead, exchange it for their key:

```ts
import { fetchApiKey } from 'zulip-sdk';

const { email, apiKey } = await fetchApiKey({ realm, username, password });
```

## Messages

```ts
const { id } = await zulip.sendMessage({ type: 'channel', to: 'general', topic: 'Lunch', content: 'Pizza?' });
await zulip.addReaction({ message_id: id, emoji_name: 'pizza' });
await zulip.updateMessage({ message_id: id, content: 'Pizza at 1?' });

const { messages } = await zulip.getMessages({
  anchor: 'newest',
  num_before: 50,
  num_after: 0,
  narrow: [{ operator: 'channel', operand: 'general' }, { operator: 'topic', operand: 'Lunch' }],
});
```

## Events

```ts
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
```

Pass `signal` to stop from elsewhere, or simply `break` out of the loop. `onRegister` receives Zulip's answer each time a queue is registered, including any initial state you asked for with `fetch_event_types`. Heartbeats are skipped unless you pass `heartbeats: true`.

## Errors

```ts
import { isZulipError } from 'zulip-sdk';

try {
  await zulip.sendMessage({ type: 'channel', to: 'missing', topic: 'x', content: 'x' });
} catch (error) {
  if (isZulipError(error, 'STREAM_DOES_NOT_EXIST')) console.log(error.message);
}
```

There are two error classes:

- `ZulipError` has Zulip's error `code`, the HTTP `status` and the full response in `data`.
- `ZulipRequestError` covers requests that didn't complete, such as a network failure or a timeout.

When Zulip rate-limits a request, the client waits as long as Zulip asks and retries, up to 3 times by default.

## Options

```ts
createClient({
  realm, email, apiKey,
  timeout: 30_000,             // per request; event polling waits up to two minutes
  retries: 3,                  // after rate limits
  userAgent: 'my-bot/1.0',     // Zulip asks clients to identify themselves
  headers: { … },              // for a proxy in front of Zulip
  fetch,                       // your own fetch
});
```

For an endpoint added after this release, use `zulip.request('GET', '/new/endpoint', params)`.

## How the types are made

`spec/zulip.yaml` is Zulip's OpenAPI description from the 12.3 release, and `pnpm generate` turns it into `src/generated/api.ts`. In requests, parameters follow the spec. Zulip's spec rarely says which response fields are always there; its documentation instead says when one is conditional ("Only present if…"). So a response field is typed as present unless the spec or its description says otherwise.

Fields added in recent releases may be missing from older servers. The documentation on each field says which release added it.

## Development

```sh
pnpm install
pnpm check            # types, lint and tests
ZULIP_KEEP=1 pnpm test  # keep the test server between runs
```

The integration tests run a real Zulip 12.3 in Docker, from `test/zulip/compose.yaml`. They're skipped when Docker or its image isn't available.

## License

MIT
