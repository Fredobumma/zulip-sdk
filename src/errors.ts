/** The request a failure belongs to. */
export interface FailedRequest {
	method: string;
	url: string;
}

/**
 * Zulip answered with an error. `code` is Zulip's error code, such as
 * `BAD_REQUEST`, `STREAM_DOES_NOT_EXIST` or `RATE_LIMIT_HIT`; `data` is the
 * whole response, which some errors add fields to.
 */
export class ZulipError extends Error {
	static {
		ZulipError.prototype.name = 'ZulipError';
	}

	readonly code: string;
	readonly status: number;
	readonly request: FailedRequest;
	readonly data: Record<string, unknown>;

	constructor(code: string, message: string, status: number, request: FailedRequest, data: Record<string, unknown>) {
		super(message);
		this.code = code;
		this.status = status;
		this.request = request;
		this.data = data;
	}
}

/** The request didn't complete: the network failed, it timed out, or it was aborted. */
export class ZulipRequestError extends Error {
	static {
		ZulipRequestError.prototype.name = 'ZulipRequestError';
	}

	readonly request: FailedRequest;
	readonly timedOut: boolean;

	constructor(message: string, request: FailedRequest, options: { cause?: unknown; timedOut?: boolean } = {}) {
		super(message, { cause: options.cause });
		this.request = request;
		this.timedOut = options.timedOut ?? false;
	}
}

/** `true` for an error Zulip sent, optionally with a specific code. */
export function isZulipError(error: unknown, code?: string): error is ZulipError {
	return error instanceof ZulipError && (code === undefined || error.code === code);
}
