import type { Package as PackageV1_3 } from '#/json/v1_3/responses';

/**
 * Information about an alias of a package.
 */
export interface PackageAlias {
  /**
   * The id of the alias.
   *
   * @see {@link PackageSummary#key | `PackageSummary#key`}
   */
  id: string;
  /**
   * The name of the alias.
   */
  name: string;
}

/** {@inheritDoc v1_3.Package} */
export interface Package extends PackageV1_3 {
  /**
   * List of aliases for the package.
   */
  aliases?: Array<PackageAlias>;
}

/**
 * Information about the version of the CTAN JSON API.
 */
export interface ApiVersion {
  /**
   * The version string.
   */
  version: '2.0';
}

export * from '#/json/v1_3/responses';
