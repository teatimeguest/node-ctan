/**
 * Parameters for listing authors.
 */
export interface LicensesParameters {
  /**
   * Retrieves only items
   * whose {@link License#key | keys} start with the given string.
   */
  key?: string;
}

export * from '#/json/v1_0/parameters';
