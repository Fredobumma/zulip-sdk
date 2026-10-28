/**
 * Generates `src/generated/api.ts` from Zulip's OpenAPI description
 * (`spec/zulip.yaml`, pinned to a Zulip release): a type for every
 * operation's parameters and response, every event the events API can
 * deliver, and the table the client uses to encode requests.
 *
 *   pnpm generate
 */

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { parse } from 'yaml';

interface Schema {
	$ref?: string;
	type?: string;
	format?: string;
	description?: string;
	enum?: unknown[];
	nullable?: boolean;
	allOf?: Schema[];
	oneOf?: Schema[];
	anyOf?: Schema[];
	items?: Schema;
	properties?: Record<string, Schema>;
	required?: string[];
	additionalProperties?: boolean | Schema;
	deprecated?: boolean;
	[key: string]: unknown;
}

interface Parameter {
	$ref?: string;
	name: string;
	in: 'query' | 'path' | 'header' | 'cookie';
	required?: boolean;
	description?: string;
	deprecated?: boolean;
	schema?: Schema;
	content?: Record<string, { schema: Schema }>;
}

interface Operation {
	operationId: string;
	summary?: string;
	description?: string;
	deprecated?: boolean;
	parameters?: Parameter[];
	requestBody?: {
		$ref?: string;
		content?: Record<string, { schema: Schema; encoding?: Record<string, { contentType?: string }> }>;
	};
	responses: Record<string, { $ref?: string; content?: Record<string, { schema: Schema }> }>;
	'x-requires-administrator'?: boolean;
	'x-requires-owner'?: boolean;
}

const spec = parse(readFileSync('spec/zulip.yaml', 'utf8')) as {
	info: { version: string };
	paths: Record<string, Record<string, Operation | Parameter[]>>;
	components: {
		schemas: Record<string, Schema>;
		parameters: Record<string, Parameter>;
		requestBodies: Record<string, Operation['requestBody']>;
		responses: Record<string, Operation['responses'][string]>;
	};
};

const DOCS = 'https://zulip.com';
const IDENTIFIER = /^[A-Za-z_$][A-Za-z0-9_$]*$/;

function pascal(value: string): string {
	return value
		.split(/[^A-Za-z0-9]+/)
		.filter(Boolean)
		.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
		.join('');
}

function camel(value: string): string {
	const name = pascal(value);
	return name.charAt(0).toLowerCase() + name.slice(1);
}

function key(name: string): string {
	return IDENTIFIER.test(name) ? name : JSON.stringify(name);
}

function resolve<T>(value: T & { $ref?: string }): T {
	if (!value?.$ref) return value;
	const path = value.$ref.replace(/^#\//, '').split('/');
	let target: unknown = spec;
	for (const part of path) target = (target as Record<string, unknown>)[part];
	return resolve(target as T & { $ref?: string });
}

/**
 * The first paragraph of a description, with Zulip's site-relative links
 * made absolute, for JSDoc. Release notes ("**Changes**") are left out.
 */
function summary(text: string | undefined): string[] {
	if (!text) return [];
	const paragraph = text
		.split(/\n\s*\n/)
		.map((part) => part.trim())
		.find((part) => part && !part.startsWith('**Changes**') && !part.startsWith('[') && !part.startsWith('<'));
	const lines = paragraph
		? paragraph
				.replace(/\]\((\/[^)]+)\)/g, `](${DOCS}$1)`)
				.replaceAll('*/', '*\\/')
				.split('\n')
				.map((line) => line.trimEnd())
		: [];
	// Which release added it, since older servers won't send or accept it.
	const added = /New in Zulip ([\d.]+) \(feature level (\d+)\)/.exec(text);
	if (added) lines.push(...(lines.length ? [''] : []), `New in Zulip ${added[1]} (feature level ${added[2]}).`);
	return lines;
}

function jsdoc(lines: string[], pad: string): string {
	if (lines.length === 0) return '';
	if (lines.length === 1) return `${pad}/** ${lines[0]} */\n`;
	return `${pad}/**\n${lines.map((line) => `${pad} *${line ? ` ${line}` : ''}`).join('\n')}\n${pad} */\n`;
}

function union(parts: string[]): string {
	const unique = [...new Set(parts)];
	if (unique.includes('unknown')) return 'unknown';
	return unique.length === 0 ? 'never' : unique.join(' | ');
}

/** `true` if `type` has a `|` or `&` outside brackets and quotes, so it needs parentheses before `[]` or `&`. */
function compound(type: string): boolean {
	let depth = 0;
	let quote = '';
	for (let i = 0; i < type.length; i++) {
		const char = type.charAt(i);
		if (quote) {
			if (char === '\\') i++;
			else if (char === quote) quote = '';
			continue;
		}
		if (char === '"' || char === "'") quote = char;
		else if ('{([<'.includes(char)) depth++;
		else if ('})]>'.includes(char)) depth--;
		else if (depth === 0 && (char === '|' || char === '&')) return true;
	}
	return false;
}

function wrap(type: string): string {
	return compound(type) ? `(${type})` : type;
}

/**
 * Whether a schema describes something sent (\`request\`) or received
 * (\`response\`). Zulip's spec rarely lists required response fields; its
 * documentation instead says when a field is conditional. So a response
 * field counts as present unless the schema says otherwise, or its
 * description does.
 */
type Mode = 'request' | 'response';

const CONDITIONAL =
	/\b(only (be )?present|present only|present if|if present|not present|omitted|only included|not included|only sent|will not be (present|included|sent))\b/i;

/** Component schemas are emitted as named types; everything else is inlined. */
function typeOf(schema: Schema | undefined, indent: number, mode: Mode = 'response'): string {
	if (!schema) return 'unknown';
	if (schema.$ref?.startsWith('#/components/schemas/')) {
		const name = schema.$ref.split('/').pop() ?? 'unknown';
		return schema.nullable ? `${name} | null` : name;
	}
	if (schema.$ref) return typeOf(resolve(schema), indent, mode);

	let type: string;
	if (schema.allOf?.length) {
		const parts = schema.allOf.map((part) => typeOf(part, indent, mode)).filter((part) => part !== 'unknown');
		type = parts.length === 0 ? 'unknown' : parts.map(wrap).join(' & ');
	} else if (schema.oneOf?.length || schema.anyOf?.length) {
		type = union((schema.oneOf ?? schema.anyOf ?? []).map((part) => typeOf(part, indent, mode)));
	} else if (schema.enum?.length) {
		type = union(schema.enum.map((value) => (value === null ? 'null' : JSON.stringify(value))));
	} else {
		switch (schema.type) {
			case 'string':
				type = schema.format === 'binary' ? 'Blob' : 'string';
				break;
			case 'integer':
			case 'number':
				type = 'number';
				break;
			case 'boolean':
				type = 'boolean';
				break;
			case 'array':
				type = `${wrap(typeOf(schema.items, indent, mode))}[]`;
				break;
			case 'object':
				type = objectType(schema, indent, mode);
				break;
			default:
				type = schema.properties ? objectType(schema, indent, mode) : 'unknown';
		}
	}
	return schema.nullable && type !== 'unknown' ? `${type} | null` : type;
}

function objectType(schema: Schema, indent: number, mode: Mode): string {
	const properties = Object.entries(schema.properties ?? {});
	const extra =
		schema.additionalProperties && schema.additionalProperties !== true
			? typeOf(schema.additionalProperties, indent + 1, mode)
			: schema.additionalProperties === true
				? 'unknown'
				: null;
	if (properties.length === 0) return extra ? `Record<string, ${extra}>` : 'Record<string, unknown>';
	const pad = '\t'.repeat(indent + 1);
	const lines = properties.map(([name, property]) => {
		const resolved = property.$ref ? resolve(property) : property;
		const description = resolved.description ?? property.description ?? '';
		const required = schema.required
			? schema.required.includes(name)
			: mode === 'response' && !CONDITIONAL.test(description) && !isPlaceholder(property);
		const docs = summary(description);
		if (property.deprecated || resolved.deprecated) docs.push('@deprecated');
		return `${jsdoc(docs, pad)}${pad}${key(name)}${required ? '' : '?'}: ${typeOf(property, indent + 1, mode)};`;
	});
	if (extra) lines.push(`${pad}[key: string]: unknown;`);
	return `{\n${lines.join('\n')}\n${'\t'.repeat(indent)}}`;
}

/** \`{}\` in an \`allOf\` part: a field declared elsewhere, listed again only to allow it. */
function isPlaceholder(schema: Schema): boolean {
	return Object.keys(schema).length === 0;
}

function declare(name: string, type: string, docs: string[] = []): string {
	const body = type.startsWith('{\n') ? `export interface ${name} ${type}` : `export type ${name} = ${type};`;
	return `${jsdoc(docs, '')}${body}`;
}

/** A schema's own properties together with those of its \`allOf\` parts. */
function propertiesOf(schema: Schema): Record<string, Schema> {
	const merged: Record<string, Schema> = {};
	for (const part of schema.allOf ?? []) Object.assign(merged, propertiesOf(resolve(part)));
	return Object.assign(merged, schema.properties);
}

// The events the events API delivers, each named from its `type` and `op`.
const eventNames = new Map<Schema, string>();
const eventDeclarations: string[] = [];
{
	const getEvents = spec.paths['/events']?.get as Operation;
	const response = resolve(getEvents.responses['200'] ?? {}).content?.['application/json']?.schema;
	const parts = response?.allOf ?? [response];
	const events = parts.map((part) => part?.properties?.events).find(Boolean);
	const taken = new Set<string>();
	for (const variant of events?.items?.oneOf ?? []) {
		const literal = (field: string) => {
			const property = propertiesOf(variant)[field];
			const values = property?.enum ?? property?.allOf?.find((part) => part.enum)?.enum;
			return values?.length === 1 ? String(values[0]) : '';
		};
		const base = `${pascal(literal('type'))}${pascal(literal('op'))}`;
		let name = `${base}Event`;
		// Some events differ only in which setting changed.
		if (taken.has(name) && literal('property')) name = `${base}${pascal(literal('property'))}Event`;
		for (let n = 2; taken.has(name); n++) name = `${base}Event${n}`;
		taken.add(name);
		eventNames.set(variant, name);
		// Zulip always sends these, and requiring them makes \`event.type\` narrow the union cleanly.
		const type = typeOf(variant, 0).replace(/^\t(id|type|op)\?:/gm, '\t$1:');
		eventDeclarations.push(declare(name, type, summary(variant.description)));
	}
}

interface Encoding {
	method: string;
	path: string;
	/** Parameters sent in the query string. */
	query: string[];
	/** Parameters sent JSON-encoded, wherever they go. */
	json: string[];
	/** The body is multipart, for file uploads. */
	multipart: boolean;
}

/** Component schemas used in requests, directly or through other components. */
function requestComponents(): Set<string> {
	const found = new Set<string>();
	const visit = (value: unknown) => {
		if (Array.isArray(value)) value.forEach(visit);
		else if (value && typeof value === 'object') {
			for (const [field, item] of Object.entries(value)) {
				if (field === '$ref' && typeof item === 'string' && item.startsWith('#/components/schemas/')) {
					const name = item.split('/').pop() ?? '';
					if (!found.has(name)) {
						found.add(name);
						visit(spec.components.schemas[name]);
					}
				} else visit(item);
			}
		}
	};
	for (const item of Object.values(spec.paths)) {
		for (const [method, value] of Object.entries(item)) {
			if (method === 'parameters') visit(value);
			else visit([(value as Operation).parameters, (value as Operation).requestBody]);
		}
	}
	visit(spec.components.parameters);
	visit(spec.components.requestBodies);
	return found;
}

const requestSide = requestComponents();
const componentDeclarations = Object.entries(spec.components.schemas).map(([name, schema]) =>
	declare(name, typeOf(schema, 0, requestSide.has(name) ? 'request' : 'response'), summary(schema.description)),
);
const operationDeclarations: string[] = [];
const operationEntries: string[] = [];
const encodings: Record<string, Encoding> = {};
const taken = new Set(Object.keys(spec.components.schemas));

for (const [path, item] of Object.entries(spec.paths)) {
	const shared = (item.parameters as Parameter[] | undefined) ?? [];
	for (const [method, value] of Object.entries(item)) {
		if (method === 'parameters') continue;
		const operation = value as Operation;
		// `POST /real-time` only documents the event format; it isn't an endpoint.
		if (!operation.operationId) continue;
		const name = camel(operation.operationId);
		const typeName = pascal(operation.operationId);
		for (const suffix of ['Params', 'Response']) {
			if (taken.has(`${typeName}${suffix}`)) throw new Error(`Name clash: ${typeName}${suffix}`);
			taken.add(`${typeName}${suffix}`);
		}

		const encoding: Encoding = { method: method.toUpperCase(), path, query: [], json: [], multipart: false };
		const fields: string[] = [];
		for (const raw of [...shared, ...(operation.parameters ?? [])]) {
			const parameter = resolve(raw);
			if (parameter.in === 'header' || parameter.in === 'cookie') continue;
			const json = parameter.content?.['application/json']?.schema;
			if (parameter.in === 'query') encoding.query.push(parameter.name);
			if (json) encoding.json.push(parameter.name);
			const docs = summary(parameter.description);
			if (parameter.deprecated) docs.push('@deprecated');
			const optional = parameter.in === 'path' || parameter.required ? '' : '?';
			fields.push(
				`${jsdoc(docs, '\t')}\t${key(parameter.name)}${optional}: ${typeOf(json ?? parameter.schema, 1, 'request')};`,
			);
		}

		const body = resolve(operation.requestBody ?? {}).content;
		const form = body?.['application/x-www-form-urlencoded'] ?? body?.['multipart/form-data'];
		if (body?.['multipart/form-data']) encoding.multipart = true;
		if (form) {
			const schema = resolve(form.schema);
			const required = new Set(schema.required ?? []);
			for (const [field, property] of Object.entries(schema.properties ?? {})) {
				if (form.encoding?.[field]?.contentType === 'application/json') encoding.json.push(field);
				const docs = summary(resolve(property).description);
				if (property.deprecated) docs.push('@deprecated');
				fields.push(
					`${jsdoc(docs, '\t')}\t${key(field)}${required.has(field) ? '' : '?'}: ${typeOf(property, 1, 'request')};`,
				);
			}
		}
		encodings[name] = encoding;

		const success = resolve(operation.responses['200'] ?? {}).content?.['application/json']?.schema;
		let response = typeOf(success, 0);
		// The events response refers to every event by name.
		if (path === '/events' && method === 'get') {
			response =
				'JsonSuccessBase & {\n\t/** The events, oldest first. */\n\tevents: ZulipEvent[];\n\t/** The ID of the queue the events came from. */\n\tqueue_id?: string;\n}';
		}

		const docs = [
			...summary(operation.summary),
			...(operation.description ? ['', ...summary(operation.description)] : []),
		];
		if (operation['x-requires-administrator']) docs.push('', 'Needs an organization administrator.');
		if (operation['x-requires-owner']) docs.push('', 'Needs an organization owner.');
		docs.push('', `@see ${DOCS}/api/${operation.operationId}`);
		if (operation.deprecated) docs.push('@deprecated');

		operationDeclarations.push(
			fields.length
				? `export interface ${typeName}Params {\n${fields.join('\n')}\n}`
				: `// biome-ignore lint/complexity/noBannedTypes: this operation takes no parameters\nexport type ${typeName}Params = {};`,
			declare(`${typeName}Response`, response),
		);
		operationEntries.push(
			`${jsdoc(docs, '\t')}\t${name}: { params: ${typeName}Params; response: ${typeName}Response };`,
		);
	}
}

const source = `// Generated from Zulip ${spec.info.version === '1.0.0' ? '' : `${spec.info.version} `}OpenAPI (spec/zulip.yaml) by scripts/generate.ts. Do not edit by hand.
/* eslint-disable */

${componentDeclarations.join('\n\n')}

${eventDeclarations.join('\n\n')}

/** Any event the events API can deliver. Narrow it by \`type\`, and by \`op\` where there is one. */
export type ZulipEvent =\n${[...eventNames.values()].map((name) => `\t| ${name}`).join('\n')};

${operationDeclarations.join('\n\n')}

/** Every operation of the Zulip API, by its name in Zulip's documentation, in camelCase. */
export interface Operations {
${operationEntries.join('\n')}
}

/** How each operation's parameters are sent. */
export const OPERATIONS = ${JSON.stringify(encodings, null, '\t')} as const satisfies Record<keyof Operations, { method: string; path: string; query: readonly string[]; json: readonly string[]; multipart: boolean }>;
`;

mkdirSync('src/generated', { recursive: true });
writeFileSync('src/generated/api.ts', source);
console.log(
	`${operationEntries.length} operations, ${eventNames.size} events and ${componentDeclarations.length} schemas written to src/generated/api.ts (${Math.round(source.length / 1024)} KB)`,
);
