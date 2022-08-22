import type { JSONSchemaType } from 'ajv';
import { keys } from 'ts-transformer-keys';

import { Package as PackageV1_3 } from '#/json/v1_3/schemas';
import type * as responses from '#/json/v2_0/responses';
import type { OnlyRequired } from '#/types';

/**
 * JSON schema for {@link PackageAlias:interface | `PackageAlias`}.
 */
export const PackageAlias: JSONSchemaType<responses.PackageAlias> = {
  type: 'object',
  properties: { id: { type: 'string' }, name: { type: 'string' } },
  required: keys<OnlyRequired<responses.PackageAlias>>(),
  additionalProperties: true,
};

/**
 * JSON schema for {@link Package:interface | `Package`}.
 */
export const Package: JSONSchemaType<responses.Package> = {
  type: 'object',
  allOf: [PackageV1_3, {
    properties: {
      aliases: { type: 'array', items: PackageAlias, nullable: true },
    },
  }],
  required: keys<OnlyRequired<responses.Package>>(),
};

/**
 * JSON schema for {@link ApiVersion:interface | `ApiVersion`}.
 */
export const ApiVersion: JSONSchemaType<responses.ApiVersion> = {
  type: 'object',
  properties: { version: { type: 'string', const: '2.0' } },
  required: keys<OnlyRequired<responses.ApiVersion>>(),
  additionalProperties: true,
};

export * from '#/json/v1_3/schemas';
