import type { JSONSchemaType } from 'ajv';
import { keys } from 'ts-transformer-keys';

import type * as responses from '#/json/v1_0/responses';
import type { OnlyRequired } from '#/types';

/**
 * JSON schema for {@link Author:interface | `Author`}.
 */
export const Author: JSONSchemaType<responses.Author> = {
  type: 'object',
  properties: {
    key: { type: 'string' },
    givenname: { type: 'string', default: '' },
    familyname: { type: 'string', default: '' },
    pkgs: {
      type: 'array',
      items: { type: 'string' },
      uniqueItems: true,
      nullable: true,
    },
  },
  required: keys<OnlyRequired<responses.Author>>(),
  additionalProperties: true,
};

/**
 * JSON schema for `Array<Author>`.
 */
export const Authors: JSONSchemaType<Array<responses.Author>> = {
  type: 'array',
  items: Author,
};

/**
 * JSON schema for {@link PackageSummary:interface | `PackageSummary`}.
 */
export const PackageSummary: JSONSchemaType<responses.PackageSummary> = {
  type: 'object',
  properties: {
    key: { type: 'string' },
    name: { type: 'string' },
    caption: { type: 'string' },
  },
  required: keys<OnlyRequired<responses.PackageSummary>>(),
  additionalProperties: true,
};

/**
 * JSON schema for `Array<PackageSummary>`.
 */
export const Packages: JSONSchemaType<Array<responses.PackageSummary>> = {
  type: 'array',
  items: PackageSummary,
};

/**
 * JSON schema for {@link PackageAuthor:interface | `PackageAuthor`}.
 */
export const PackageAuthor: JSONSchemaType<responses.PackageAuthor> = {
  type: 'object',
  properties: { id: { type: 'string' }, active: { type: 'boolean' } },
  required: keys<OnlyRequired<responses.PackageAuthor>>(),
  additionalProperties: true,
};

/**
 * JSON schema for {@link Copyright:interface | `Copyright`}.
 */
export const Copyright: JSONSchemaType<responses.Copyright> = {
  type: 'object',
  properties: {
    owner: { type: 'string' },
    year: { type: 'string', nullable: true },
  },
  required: keys<OnlyRequired<responses.Copyright>>(),
  minProperties: 1,
  additionalProperties: true,
};

/**
 * JSON schema for {@link PackageVersion:interface | `PackageVersion`}.
 */
export const PackageVersion: JSONSchemaType<responses.PackageVersion> = {
  type: 'object',
  properties: {
    number: { type: 'string', nullable: true },
    date: { type: 'string', nullable: true },
  },
  minProperties: 1,
  required: keys<OnlyRequired<responses.PackageVersion>>(),
  additionalProperties: true,
};

/**
 * JSON schema
 * for {@link PackageDescription:interface | `PackageDescription`}.
 */
export const PackageDescription: JSONSchemaType<responses.PackageDescription> =
  {
    type: 'object',
    properties: {
      text: { type: 'string', nullable: true },
      language: { type: 'string', nullable: true },
    },
    required: keys<OnlyRequired<responses.PackageDescription>>(),
    additionalProperties: true,
  };

/**
 * JSON schema
 * for {@link PackageDocumentation:interface | `PackageDocumentation`}.
 */
export const PackageDocumentation: JSONSchemaType<
  responses.PackageDocumentation
> = {
  type: 'object',
  properties: {
    language: { type: 'string', nullable: true },
    details: { type: 'string', nullable: true },
    href: { type: 'string', nullable: true },
  },
  required: keys<OnlyRequired<responses.PackageDocumentation>>(),
  additionalProperties: true,
};

/**
 * JSON schema for {@link Package:interface | `Package`}.
 */
export const Package: JSONSchemaType<responses.Package> = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
    caption: { type: 'string' },
    authors: { type: 'array', items: PackageAuthor },
    copyright: { type: 'array', items: Copyright, nullable: true },
    license: {
      type: ['string', 'array'],
      oneOf: [{ type: 'string' }, { type: 'array', items: { type: 'string' } }],
      nullable: true,
    },
    version: { ...PackageVersion, nullable: true },
    descriptions: { type: 'array', items: PackageDescription, nullable: true },
    documentation: { type: 'array', items: PackageDocumentation },
    ctan: {
      type: 'object',
      properties: {
        path: { type: 'string' },
        file: { type: 'boolean', nullable: true },
      },
      required: ['path'],
      nullable: true,
      additionalProperties: true,
    },
    install: { type: 'string', nullable: true },
    miktex: { type: 'string', nullable: true },
    texlive: { type: 'string', nullable: true },
    index: { type: 'array', items: { type: 'string' }, nullable: true },
    topics: { type: 'array', items: { type: 'string' }, nullable: true },
    home: { type: 'string', nullable: true },
    also: { type: 'array', items: { type: 'string' }, nullable: true },
  },
  required: keys<OnlyRequired<responses.Package>>(),
  additionalProperties: true,
};

/**
 * JSON schema for {@link Topic:interface | `Topic`}.
 */
export const Topic: JSONSchemaType<responses.Topic> = {
  type: 'object',
  properties: {
    key: { type: 'string' },
    details: { type: 'string' },
    packages: { type: 'array', items: { type: 'string' }, nullable: true },
  },
  required: keys<OnlyRequired<responses.Topic>>(),
  additionalProperties: true,
};

/**
 * JSON schema for `Array<Topic>`.
 */
export const Topics: JSONSchemaType<Array<responses.Topic>> = {
  type: 'array',
  items: Topic,
};
