import { keys } from 'ts-transformer-keys';

import { ClientBase, buildParams } from '#/client-base';
import type { ClientConfig } from '#/config';
import { SearchPaginator } from '#/json/search/paginator';
import type { SearchParameters } from '#/json/search/parameters';
import type { SearchResult } from '#/json/search/responses';
import { SearchResult as Schema } from '#/json/search/schemas';
import type { Derived } from '#/types';

export abstract class Searchable extends ClientBase {
  /**
   * Finds items via [`GET /search/json`](docs/api/json/2.0.md#searching).
   *
   * @param params -
   *   Parameters for searching. If `params` is a string,
   *   it specifies the {@link SearchParameters#phrase | search expression}.
   * @param config - An optional configuration for this request.
   */
  async search(
    params: string | Readonly<SearchParameters>,
    config?: Readonly<ClientConfig>,
  ): Promise<SearchPaginator> {
    params = typeof params === 'string' ? { phrase: params } : params;
    const result = await this.get<SearchResult>(
      '/search/json',
      buildParams(params, keys<SearchParameters>()),
      Schema,
      config,
    );
    return new SearchPaginator(result, this, params, config);
  }

  static mixin(derived: Readonly<Derived<typeof ClientBase>>): void {
    Object.defineProperty(
      derived.prototype,
      'search',
      Object.getOwnPropertyDescriptor(Searchable.prototype, 'search') ?? {},
    );
  }
}
