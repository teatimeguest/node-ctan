import type { JSONSchemaType } from 'ajv';
import { keys } from 'ts-transformer-keys';

import type { OnlyRequired } from '#/types';

export interface Errors {
  errors: Array<string>;
}

export const Errors: JSONSchemaType<Errors> = {
  type: 'object',
  properties: { errors: { type: 'array', items: { type: 'string' } } },
  required: keys<OnlyRequired<Errors>>(),
  additionalProperties: true,
};

export interface NotFound extends Errors {
  errors: ['Not found'];
}

export const NotFound: JSONSchemaType<NotFound> = {
  type: 'object',
  properties: {
    errors: {
      type: 'array',
      items: [{ type: 'string', const: 'Not found' }],
      minItems: 1,
      maxItems: 1,
    },
  },
  required: keys<OnlyRequired<NotFound>>(),
  additionalProperties: true,
};
