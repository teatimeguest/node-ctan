/**
 * @packageDocumentation
 *
 * [[include:README.md]]
 */

export { Client, Client as default } from '#/client';
export { ClientConfig } from '#/config';
export {
  CtanError,
  CtanRequestError,
  CtanResponseError,
  ErrorOptions,
} from '#/errors';
/**
 * Submodule for the CTAN JSON API.
 */
export * as json from '#/json/index';
