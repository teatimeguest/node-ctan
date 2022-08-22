import type { JSONSchemaType } from 'ajv';
import { keys } from 'ts-transformer-keys';

import {
  Author as AuthorV1_1,
  Package as PackageV1_1,
} from '#/json/v1_1/schemas';
import type * as responses from '#/json/v1_2/responses';
import type { OnlyRequired } from '#/types';

/**
 * JSON schema for {@link Author:interface | `Author`}.
 */
export const Author: JSONSchemaType<responses.Author> = {
  type: 'object',
  allOf: [AuthorV1_1, {
    type: 'object',
    properties: { female: { type: 'boolean' }, died: { type: 'boolean' } },
  }],
  required: keys<OnlyRequired<responses.Author>>(),
};

/**
 * JSON schema for `Array<Author>`.
 */
export const Authors: JSONSchemaType<Array<responses.Author>> = {
  type: 'array',
  items: Author,
};

/**
 * JSON schema for {@link Package:interface | `Package`}.
 */
export const Package: JSONSchemaType<responses.Package> = {
  type: 'object',
  allOf: [PackageV1_1, {
    type: 'object',
    properties: {
      support: { type: 'string', nullable: true },
      announce: { type: 'string', nullable: true },
      bugs: { type: 'string', nullable: true },
      repository: { type: 'string', nullable: true },
      development: { type: 'string', nullable: true },
    },
  }],
  required: keys<OnlyRequired<responses.Package>>(),
};

/**
 * JSON schema for {@link ApiVersion:interface | `ApiVersion`}.
 */
export const ApiVersion: JSONSchemaType<responses.ApiVersion> = {
  type: 'object',
  properties: { version: { type: 'string', const: '1.2' } },
  required: keys<OnlyRequired<responses.ApiVersion>>(),
  additionalProperties: true,
};

export * from '#/json/v1_1/schemas';
