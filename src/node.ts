/** Node helpers: read credentials from a `zuliprc` file, as Zulip's other clients do. */

import { readFile } from 'node:fs/promises';
import { homedir } from 'node:os';
import { join } from 'node:path';
import type { ClientOptions } from './client.js';

/** The `[api]` section of a zuliprc file: `email`, `key` and `site`. */
export function parseZuliprc(text: string): Pick<ClientOptions, 'realm' | 'email' | 'apiKey'> {
	const values: Record<string, string> = {};
	let section = '';
	for (const raw of text.split(/\r?\n/)) {
		const line = raw.trim();
		if (!line || line.startsWith('#') || line.startsWith(';')) continue;
		const header = /^\[(.+)\]$/.exec(line);
		if (header?.[1]) {
			section = header[1].trim();
			continue;
		}
		const separator = line.search(/[=:]/);
		if (section === 'api' && separator > 0) values[line.slice(0, separator).trim()] = line.slice(separator + 1).trim();
	}
	const { email, key, site } = values;
	if (!email || !key || !site) throw new Error('A zuliprc needs email, key and site in its [api] section.');
	return { realm: site, email, apiKey: key };
}

/**
 * Credentials from a zuliprc, by default `~/.zuliprc`. Download one from
 * Zulip under Settings → Account & privacy → API key, or from a bot's settings.
 */
export async function fromZuliprc(
	path = join(homedir(), '.zuliprc'),
): Promise<Pick<ClientOptions, 'realm' | 'email' | 'apiKey'>> {
	return parseZuliprc(await readFile(path, 'utf8'));
}
