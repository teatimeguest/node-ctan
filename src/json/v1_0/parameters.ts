import type { Package } from '#/json/v1_0/responses';

/**
 * Parameters for listing authors.
 */
export interface AuthorsParameters {
  /**
   * Retrieves only items
   * whose {@link Author#key | keys} start with the given string.
   */
  key?: string;
}

/**
 * Parameters for getting an author.
 */
export interface AuthorParameters {
  /**
   * Requests the list of the author's packages.
   *
   * @defaultValue `false`
   */
  ref?: boolean;
}

/**
 * Parameters for listing topics.
 */
export interface TopicsParameters {
  /**
   * Retrieves only items
   * whose {@link Topic#key | keys} start with the given string.
   */
  key?: string;
}

/**
 * Parameters for getting a topic.
 */
export interface TopicParameters {
  /**
   * Requests the list of packages in the topic.
   *
   * @defaultValue `false`.
   */
  ref?: boolean;
}

/**
 * Parameters for listing packages.
 */
export interface PackagesParameters {
  /**
   * Retrieves only items
   * whose {@link PackageSummary#key | keys} start with the given string.
   */
  key?: string;
}

/**
 * Parameters for getting a package.
 */
export interface PkgParameters {
  /**
   * List of field names to drop from the result.
   */
  drop?: Array<keyof Package>;
  /**
   * Always keeps valid URLs as attributes, instead of `ctan:`-prefixed ones.
   *
   * @defaultValue `false`
   * @see {@link Package#documentation | `Package#documentation`}
   */
  'keep-url'?: boolean;
}
