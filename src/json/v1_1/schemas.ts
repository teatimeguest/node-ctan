import type { JSONSchemaType } from 'ajv';
import { keys } from 'ts-transformer-keys';

import type * as responses from '#/json/v1_1/responses';
import type { OnlyRequired } from '#/types';

/**
 * JSON schema for {@link License:interface | `License`}.
 */
export const License: JSONSchemaType<responses.License> = {
  type: 'object',
  properties: {
    key: { type: 'string' },
    name: { type: 'string' },
    free: { type: 'boolean' },
  },
  required: keys<OnlyRequired<responses.License>>(),
  additionalProperties: true,
};

/**
 * JSON schema for `Array<License>`.
 */
export const Licenses: JSONSchemaType<Array<responses.License>> = {
  type: 'array',
  items: License,
};

/**
 * JSON schema for {@link ApiVersion:interface | `ApiVersion`}.
 */
export const ApiVersion: JSONSchemaType<responses.ApiVersion> = {
  type: 'object',
  properties: { version: { type: 'string', const: '1.1' } },
  required: keys<OnlyRequired<responses.ApiVersion>>(),
  additionalProperties: true,
};

export * from '#/json/v1_0/schemas';
