/**
 * Information about a license.
 */
export interface License {
  /**
   * The key of the license.
   */
  key: string;
  /**
   * The printable name of the license.
   */
  name: string;
  /**
   * Whether the license is considered free.
   */
  free: boolean;
}

/**
 * Information about the version of the CTAN JSON API.
 */
export interface ApiVersion {
  /**
   * The version string.
   */
  version: '1.1';
}

export * from '#/json/v1_0/responses';
