import type { TestProject } from 'vitest/node';
import { dockerReady, email, headers, realm, startZulip } from './zulip.js';

declare module 'vitest' {
	export interface ProvidedContext {
		zulip: { realm: string; email: string; apiKey: string; headers: Record<string, string> } | null;
	}
}

/** Starts Zulip for the integration tests, or skips them when Docker or the image isn't there. */
export default async function setup(project: TestProject) {
	if (process.env.ZULIP_SKIP === '1' || !(await dockerReady())) {
		project.provide('zulip', null);
		return;
	}
	const zulip = await startZulip();
	project.provide('zulip', { realm, email, apiKey: zulip.apiKey, headers });
	return () => zulip.stop();
}
