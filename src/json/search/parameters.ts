/**
 * Query parameters for searching.
 */
export interface SearchParameters {
  /**
   * The words or search expressions to query for.
   */
  phrase: string;
  /**
   * The offset for paging.
   * The accompanying parameter max contains the page size.
   * This parameter contains the first hit to be returned.
   * If a negative number is passed in then it is replaced by `0`.
   * If the offset is larger than the number of actual hits
   * then the list of hits will be empty.
   *
   * @see {@link max | `SearchParameters#max`}
   */
  offset?: number;
  /**
   * The number of hits maximally returned.
   * Larger values will be reduced to `256`.
   * Lower values will be replaced by the default value.
   *
   * @defaultValue `16`
   */
  max?: number;
  /**
   * Whether the sections are requested explicitly.
   * If the value is `false` then all default sections are searched.
   * Otherwise the sections to be searched
   * have to be specified with additional parameters.
   *
   * @defaultValue `false`
   * @see {@link PKG | `SearchParameters#PKG`}
   * @see {@link AUTHORS | `SearchParameters#AUTHORS`}
   * @see {@link TOPICS | `SearchParameters#TOPICS`}
   * @see {@link FILES | `SearchParameters#FILES`}
   * @see {@link PORTAL | `SearchParameters#PORTAL`}
   */
  ext?: boolean;
  /**
   * Whether the package section should be included into the search.
   * The package section contains
   * the text fields of a package entry in the Catalogue.
   *
   * @defaultValue `false`
   */
  PKG?: boolean;
  /**
   * Whether the author section should be included into the search.
   * The author section contains the names of the contributors in the Catalogue.
   *
   * @defaultValue `false`
   */
  AUTHORS?: boolean;
  /**
   * Whether the topics section should be included into the search.
   * The topics section contains the text fields of the topics in the Catalogue.
   *
   * @defaultValue `false`
   */
  TOPICS?: boolean;
  /**
   * @defaultValue `false`
   */
  FILES?: boolean;
  /**
   * Whether the portal section should be included into the search.
   * The portal section contains the text of the portal pages.
   *
   * @defaultValue `false`
   */
  PORTAL?: boolean;
  /**
   * @defaultValue `false`
   */
  wildcard?: boolean;
}
