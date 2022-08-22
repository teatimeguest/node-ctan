import { keys } from 'ts-transformer-keys';

import { ClientBase, buildParams } from '#/client-base';
import type { ClientConfig } from '#/config';
import { Searchable } from '#/json/search/mixin';
import type {
  AuthorParameters,
  AuthorsParameters,
  LicensesParameters,
  PackagesParameters,
  PkgParameters,
  TopicParameters,
  TopicsParameters,
} from '#/json/v1_1/parameters';
import type {
  ApiVersion,
  Author,
  License,
  Package,
  PackageSummary,
  Topic,
} from '#/json/v1_1/responses';
import * as schemas from '#/json/v1_1/schemas';

/**
 * Client for the CTAN JSON API v1.1.
 */
export class Client extends ClientBase {
  /**
   * @param config - The default configuration for this client instance.
   */
  constructor(config?: Readonly<ClientConfig>);
  /** @internal */
  constructor(base: ClientBase);
  constructor(base?: Readonly<ClientConfig> | ClientBase) {
    super(base);
  }

  /**
   * Gets a list of authors via
   * [`GET /json/1.1/authors`](docs/api/json/1.1.md#list-of-authors).
   *
   * @param params - Parameters for listing authors.
   * @param config - An optional configuration for this request.
   * @returns
   *   If {@link AuthorsParameters#key | `params.key`} is set,
   *   only items with keys starting with the given string will be returned.
   */
  async authors(
    params?: Readonly<AuthorsParameters>,
    config?: Readonly<ClientConfig>,
  ): Promise<Array<Author>> {
    return await this.get<Array<Author>>(
      `/json/1.1/authors`,
      buildParams(params, keys<AuthorsParameters>()),
      schemas.Authors,
      config,
    );
  }

  /**
   * Gets an author information via
   * [`GET /json/1.1/author/{key}`](docs/api/json/1.1.md#author).
   *
   * @param key - The {@link Author#key | key} of the author as used by CTAN.
   * @param params - Parameters for getting an author.
   * @param config - An optional configuration for this request.
   * @returns
   *   If {@link AuthorParameters#ref | `params.ref`} is set to `true`,
   *   the {@link Author#pkgs | package list} of the author
   *   will be included in the response.
   */
  async author(
    key: string,
    params?: Readonly<AuthorParameters>,
    config?: Readonly<ClientConfig>,
  ): Promise<Author> {
    return await this.get<Author>(
      `/json/1.1/author/${key}`,
      buildParams(params, keys<AuthorParameters>()),
      schemas.Author,
      config,
    );
  }

  /**
   * Gets a list of topics via
   * [`GET /json/1.1/topics`](docs/api/json/1.1.md#list-of-topics).
   *
   * @param params - Parameters for listing topics.
   * @param config - An optional configuration for this request.
   * @returns
   *   If {@link TopicsParameters#key | `params.key`} is set,
   *   only items with keys starting with the given string will be returned.
   */
  async topics(
    params?: Readonly<TopicsParameters>,
    config?: Readonly<ClientConfig>,
  ): Promise<Array<Topic>> {
    return await this.get<Array<Topic>>(
      '/json/1.1/topics',
      buildParams(params, keys<TopicsParameters>()),
      schemas.Topics,
      config,
    );
  }

  /**
   * Gets a topic information via
   * [`GET /json/1.1/topic/{key}`](docs/api/json/1.1.md#topic).
   *
   * @param key - The {@link Topic#key | key} of the topic as used by CTAN.
   * @param params - Parameters for getting a topic.
   * @param config - An optional configuration for this request.
   * @returns
   *   If {@link TopicParameters#ref | `params.ref`} is set to `true`,
   *   the {@link Topic#packages | package list} of the topic
   *   will be included in the response.
   */
  async topic(
    key: string,
    params?: Readonly<TopicParameters>,
    config?: Readonly<ClientConfig>,
  ): Promise<Topic> {
    return await this.get<Topic>(
      `/json/1.1/topic/${key}`,
      buildParams(params, keys<TopicParameters>()),
      schemas.Topic,
      config,
    );
  }

  /**
   * Gets a list of packages via
   * [`GET /json/1.1/packages`](docs/api/json/1.1.md#list-of-packages).
   *
   * @param params - Parameters for listing packages.
   * @param config - An optional configuration for this request.
   * @returns
   *   If {@link PackagesParameters#key | `params.key`} is set,
   *   only items with keys starting with the given string will be returned.
   */
  async packages(
    params?: Readonly<PackagesParameters>,
    config?: Readonly<ClientConfig>,
  ): Promise<Array<PackageSummary>> {
    return await this.get<Array<PackageSummary>>(
      '/json/1.1/packages',
      buildParams(params, keys<PackagesParameters>()),
      schemas.Packages,
      config,
    );
  }

  /**
   * Gets a package information via
   * [`GET /json/1.1/pkg/{key}`](docs/api/json/1.1.md#package).
   *
   * @param key -
   *   The {@link PackageSummary#key | key} of the package as used by CTAN.
   * @param params - Parameters for getting a package.
   * @param config - An optional configuration for this request.
   * @returns
   *   - You can drop some of the {@link Package | fields}
   *     by using {@link PkgParameters#drop | `params.drop`}.
   *
   *   - By default, the {@link PackageDocumentation#href | `href`} field of
   *     {@link Package#documentation | `Package#documentation[]`}
   *     is a URI string with `ctan` scheme,
   *     representing the file path of documentation on CTAN, for example:
   *     ```uri
   *     ctan:/systems/texlive/Images/README.md
   *     ```
   *     Setting {@link PkgParameters#keep-url | `params['keep-url']`}
   *     to `true`, you can get normal URLs like:
   *     ```url
   *     http://mirrors.ctan.org/systems/texlive/Images/README.md
   *     ```
   */
  async pkg(
    key: string,
    params?: Readonly<PkgParameters>,
    config?: Readonly<ClientConfig>,
  ): Promise<Package> {
    const urlparams = buildParams(params, keys<PkgParameters>());
    urlparams.delete('drop'); // Currently `drop` is not supported.
    return await this.get<Package>(
      `/json/1.1/pkg/${key}`,
      urlparams,
      schemas.Package,
      config,
    );
  }

  /**
   * Lists licenses recognized by CTAN via
   * [`GET /json/1.1/licenses`](docs/api/json/1.1.md#list-of-licenses).
   *
   * @param params - Parameters for listing licenses.
   * @param config - An optional configuration for this request.
   * @returns
   *   If {@link LicensesParameters#key | `params.key`} is set,
   *   only items with keys starting with the given string will be returned.
   */
  async licenses(
    params?: Readonly<LicensesParameters>,
    config?: Readonly<ClientConfig>,
  ): Promise<Array<License>> {
    return await this.get<Array<License>>(
      '/json/1.1/licenses',
      buildParams(params, keys<LicensesParameters>()),
      schemas.Licenses,
      config,
    );
  }

  /**
   * Gets the CTAN JSON API version via
   * [`GET /json/1.1/version`](docs/api/json/1.1.md#version).
   *
   * @param config - An optional configuration for this request.
   */
  async version(config?: Readonly<ClientConfig>): Promise<ApiVersion> {
    return await this.get<ApiVersion>(
      '/json/1.1/version',
      null,
      schemas.ApiVersion,
      config,
    );
  }

  static {
    Searchable.mixin(Client);
  }
}

export interface Client extends Searchable {}
