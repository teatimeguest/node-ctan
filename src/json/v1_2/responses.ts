import type * as v1_1 from '#/json/v1_1/responses';

/** {@inheritDoc v1_1.Author} */
export interface Author extends v1_1.Author {
  /**
   * Whether the author is female.
   *
   * @defaultValue `true`
   */
  female: boolean;
  /**
   * Whether the author is deceased.
   */
  died: boolean;
}

/** {@inheritDoc v1_1.Package} */
export interface Package extends v1_1.Package {
  /**
   * The URL of the support for the package.
   */
  support?: string;
  /**
   * The URL of the announcements for the package.
   */
  announce?: string;
  /**
   * The URL of the bug tracker for the package.
   */
  bugs?: string;
  /**
   * The URL of the source code repository for the package.
   */
  repository?: string;
  /**
   * The URL of the developer community for the package.
   */
  development?: string;
}

/**
 * Information about the version of the CTAN JSON API.
 */
export interface ApiVersion {
  /**
   * The version string.
   */
  version: '1.2';
}

export * from '#/json/v1_1/responses';
