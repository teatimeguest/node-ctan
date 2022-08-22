import type { ClientConfig } from '#/config';
import type { Searchable } from '#/json/search/mixin';
import type { SearchParameters } from '#/json/search/parameters';
import type { SearchHit, SearchResult } from '#/json/search/responses';
import type { MarkRequired, MarkWritable } from '#/types';

/**
 * Paginator for searching.
 */
export class SearchPaginator implements SearchResult {
  #response: Readonly<SearchResult>;
  readonly #client: Readonly<Searchable>;
  readonly #parameters: MarkWritable<
    Readonly<MarkRequired<SearchParameters, 'offset' | 'max'>>,
    'offset'
  >;
  readonly #config: Readonly<ClientConfig> | undefined;

  /** @internal */
  constructor(
    response: Readonly<SearchResult>,
    client: Readonly<Searchable>,
    params: Readonly<SearchParameters>,
    config?: Readonly<ClientConfig>,
  ) {
    this.#response = response;
    this.#client = client;
    this.#parameters = {
      offset: response.offset,
      max: response.max,
      ...params,
    };
    this.#config = config;
  }

  get numberOfHits(): number {
    return this.#response.numberOfHits;
  }

  get offset(): number {
    return this.#response.offset;
  }

  get max(): number {
    return this.#response.max;
  }

  get phrase(): string {
    return this.#parameters.phrase;
  }

  get hits(): SearchResult['hits'] {
    return this.#response.hits;
  }

  done(): boolean {
    return this.numberOfHits <= this.offset + this.max;
  }

  async next(): Promise<this> {
    const nextpage = await this.#client.search({
      ...this.#parameters,
      offset: this.offset + this.max,
    }, this.#config);
    this.#response = nextpage.#response;
    this.#parameters.offset += this.max;
    return this;
  }

  async *[Symbol.asyncIterator](): AsyncGenerator<
    Readonly<SearchHit>,
    void,
    undefined
  > {
    yield* this.hits;
    while (!this.done()) {
      await this.next(); // eslint-disable-line no-await-in-loop
      yield* this.hits;
    }
  }

  get [Symbol.toStringTag](): 'SearchPaginator' {
    return 'SearchPaginator';
  }

  toJSON(): Readonly<SearchResult> {
    return this.#response;
  }
}
