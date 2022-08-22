/**
 * @module {@inheritDoc json}
 */

export * from '#/config';
export * from '#/errors';
export { Client, Client as default } from '#/json/client';
export {
  SearchHit,
  SearchPaginator,
  SearchParameters,
  SearchResult,
} from '#/json/search';
/**
 * Submodule for the CTAN JSON API v1.0.
 */
export * as v1_0 from '#/json/v1_0/index';
/**
 * Submodule for the CTAN JSON API v1.1.
 */
export * as v1_1 from '#/json/v1_1/index';
/**
 * Submodule for the CTAN JSON API v1.2.
 */
export * as v1_2 from '#/json/v1_2/index';
/**
 * Submodule for the CTAN JSON API v1.3.
 */
export * as v1_3 from '#/json/v1_3/index';
/**
 * Submodule for the CTAN JSON API v2.0.
 */
export * as v2_0 from '#/json/v2_0/index';
