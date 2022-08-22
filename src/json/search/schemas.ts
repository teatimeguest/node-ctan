import type { JSONSchemaType } from 'ajv';
import { keys } from 'ts-transformer-keys';

import type * as responses from '#/json/search/responses';
import type { OnlyRequired } from '#/types';

export const SearchHit: JSONSchemaType<responses.SearchHit> = {
  type: 'object',
  properties: {
    title: { type: 'string' },
    path: { type: 'string' },
    text: { type: 'string' },
  },
  required: keys<OnlyRequired<responses.SearchHit>>(),
  additionalProperties: true,
};

export const SearchResult: JSONSchemaType<responses.SearchResult> = {
  type: 'object',
  properties: {
    numberOfHits: { type: 'integer', minimum: 0 },
    offset: { type: 'integer', minimum: 0 },
    max: { type: 'integer', minimum: 0, maximum: 256 },
    phrase: { type: 'string' },
    hits: { type: 'array', items: SearchHit },
  },
  required: keys<OnlyRequired<responses.SearchResult>>(),
  additionalProperties: true,
};
