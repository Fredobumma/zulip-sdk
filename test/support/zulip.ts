/**
 * Starts the throwaway Zulip in test/zulip, creates an organization, and
 * signs in as its owner. Set ZULIP_KEEP=1 to leave it running between test
 * runs; its first start takes a few minutes.
 */

import { execFile } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';
import { fetchApiKey } from '../../src/index.js';

const run = promisify(execFile);
const compose = fileURLToPath(new URL('../zulip/compose.yaml', import.meta.url));

// Zulip needs a domain name. `.test` is reserved for testing, and the fetch
// below sends it to the container's port on this machine.
export const realm = 'http://zulip.test:9991';

/**
 * A fetch that reaches zulip.test without DNS or /etc/hosts: it connects to
 * the container's port here and names the host in the Host header.
 */
export const testFetch: typeof globalThis.fetch = (input, init) => {
	const url = new URL(input instanceof Request ? input.url : String(input));
	const host = url.host;
	url.host = '127.0.0.1:9991';
	const headers = new Headers(init?.headers);
	headers.set('host', host);
	return globalThis.fetch(url, { ...init, headers });
};
export const email = 'admin@example.com';
const password = 'zulip-sdk-tests';
/** What a reverse proxy would add; Zulip refuses plain HTTP without it. */
export const headers = { 'x-forwarded-for': '127.0.0.1', 'x-forwarded-proto': 'https' };

const env = {
	...process.env,
	ZULIP__POSTGRES_PASSWORD: 'postgres-password',
	ZULIP__MEMCACHED_PASSWORD: 'memcached-password',
	ZULIP__RABBITMQ_PASSWORD: 'rabbitmq-password',
	ZULIP__REDIS_PASSWORD: 'redis-password',
	ZULIP__SECRET_KEY: 'zulip-sdk-tests-not-secret',
	ZULIP__EMAIL_PASSWORD: 'unused',
};

const docker = (...args: string[]) =>
	run('docker', ['compose', '-f', compose, ...args], { env, maxBuffer: 10 * 1024 * 1024 });

export async function dockerReady(): Promise<boolean> {
	try {
		await run('docker', ['image', 'inspect', 'ghcr.io/zulip/zulip-server:12.3-0']);
		return true;
	} catch {
		return false;
	}
}

async function healthy(): Promise<boolean> {
	try {
		const { stdout: id } = await docker('ps', '-q', 'zulip');
		if (!id.trim()) return false;
		const { stdout } = await run('docker', ['inspect', '--format', '{{.State.Health.Status}}', id.trim()]);
		return stdout.trim() === 'healthy';
	} catch {
		return false;
	}
}

export async function startZulip(): Promise<{ apiKey: string; stop(): Promise<void> }> {
	const keep = process.env.ZULIP_KEEP === '1';
	const reused = keep && (await healthy());
	if (!reused) {
		await docker('up', '-d');
		const deadline = Date.now() + 10 * 60_000;
		while (!(await healthy())) {
			if (Date.now() > deadline) throw new Error('Zulip did not become healthy within 10 minutes.');
			await new Promise((resolve) => setTimeout(resolve, 5000));
		}
		await docker(
			'exec',
			'-u',
			'zulip',
			'zulip',
			'/home/zulip/deployments/current/manage.py',
			'create_realm',
			'SDK Test Realm',
			email,
			'SDK Tester',
			'--password',
			password,
		);
	}
	const { apiKey } = await fetchApiKey({ realm, username: email, password, headers, fetch: testFetch });
	return {
		apiKey,
		async stop() {
			if (!keep) await docker('down', '-v').catch(() => {});
		},
	};
}
