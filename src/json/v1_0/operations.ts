import type { ClientConfig } from '#/config';
import type { SearchPaginator, SearchParameters } from '#/json/search';
import { Client } from '#/json/v1_0/client';
import type {
  AuthorParameters,
  AuthorsParameters,
  PackagesParameters,
  PkgParameters,
  TopicParameters,
  TopicsParameters,
} from '#/json/v1_0/parameters';
import type {
  Author,
  Package,
  PackageSummary,
  Topic,
} from '#/json/v1_0/responses';

/**
 * Convenience function for one-off requests.
 *
 * @see {@link Client#authors | `Client#authors`}
 */
export async function authors(
  params?: Readonly<AuthorsParameters>,
  config?: Readonly<ClientConfig>,
): Promise<Array<Author>> {
  return await (new Client(config).authors(params));
}

/**
 * Convenience function for one-off requests.
 *
 * @see {@link Client#author | `Client#author`}
 */
export async function author(
  key: string,
  params?: Readonly<AuthorParameters>,
  config?: Readonly<ClientConfig>,
): Promise<Author> {
  return await (new Client(config).author(key, params));
}

/**
 * Convenience function for one-off requests.
 *
 * @see {@link Client#topics | `Client#topics`}
 */
export async function topics(
  params?: Readonly<TopicsParameters>,
  config?: Readonly<ClientConfig>,
): Promise<Array<Topic>> {
  return await (new Client(config).topics(params));
}

/**
 * Convenience function for one-off requests.
 *
 * @see {@link Client#topic | `Client#topic`}
 */
export async function topic(
  key: string,
  params?: Readonly<TopicParameters>,
  config?: Readonly<ClientConfig>,
): Promise<Topic> {
  return await (new Client(config).topic(key, params));
}

/**
 * Convenience function for one-off requests.
 *
 * @see {@link Client#packages | `Client#packages`}
 */
export async function packages(
  params?: Readonly<PackagesParameters>,
  config?: Readonly<ClientConfig>,
): Promise<Array<PackageSummary>> {
  return await (new Client(config).packages(params));
}

/**
 * Convenience function for one-off requests.
 *
 * @see {@link Client#pkg | `Client#pkg`}
 */
export async function pkg(
  key: string,
  params?: Readonly<PkgParameters>,
  config?: Readonly<ClientConfig>,
): Promise<Package> {
  return await (new Client(config).pkg(key, params));
}

/**
 * Convenience function for one-off requests.
 *
 * @see {@link Client#search | `Client#search`}
 */
export async function search(
  params: string | Readonly<SearchParameters>,
  config?: Readonly<ClientConfig>,
): Promise<SearchPaginator> {
  return await (new Client(config).search(params));
}
