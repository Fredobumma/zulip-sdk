import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		include: ['test/**/*.test.ts'],
		globalSetup: ['test/support/global-setup.ts'],
		testTimeout: 30_000,
		// Zulip's first start runs its database migrations.
		hookTimeout: 15 * 60_000,
	},
});
