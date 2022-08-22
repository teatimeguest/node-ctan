import type { JSONSchemaType } from 'ajv';
import { keys } from 'ts-transformer-keys';

import { Author as AuthorV1_2 } from '#/json/v1_2/schemas';
import type * as responses from '#/json/v1_3/responses';
import type { OnlyRequired } from '#/types';

/**
 * JSON schema for {@link Author:interface | `Author`}.
 */
export const Author: JSONSchemaType<responses.Author> = {
  type: 'object',
  allOf: [AuthorV1_2, {
    type: 'object',
    properties: {
      title: { type: 'string', nullable: true },
      von: { type: 'string' },
      junior: { type: 'string' },
    },
  }],
  required: keys<OnlyRequired<responses.Author>>(),
};

/**
 * JSON schema for {@link PseudonymousAuthor:interface | `PseudonymousAuthor`}.
 */
export const PseudonymousAuthor: JSONSchemaType<
  responses.PseudonymousAuthor
> = {
  type: 'object',
  properties: {
    key: { type: 'string' },
    died: { type: 'boolean' },
    pseudonym: { type: 'string' },
    pkgs: { type: 'array', items: { type: 'string' }, nullable: true },
  },
  required: keys<OnlyRequired<responses.PseudonymousAuthor>>(),
  additionalProperties: true,
};

/**
 * JSON schema for `Array<Author | PseudonymousAuthor>`.
 */
export const Authors: JSONSchemaType<
  Array<responses.Author | responses.PseudonymousAuthor>
> = {
  type: 'array',
  items: {
    type: 'object',
    'if': {
      properties: { pseudonym: { type: 'string' } },
      required: ['pseudonym'],
    },
    then: PseudonymousAuthor,
    'else': Author,
    required: [],
  },
};

/**
 * JSON schema for {@link ApiVersion:interface | `ApiVersion`}.
 */
export const ApiVersion: JSONSchemaType<responses.ApiVersion> = {
  type: 'object',
  properties: { version: { type: 'string', const: '1.3' } },
  required: keys<OnlyRequired<responses.ApiVersion>>(),
  additionalProperties: true,
};

export * from '#/json/v1_2/schemas';
