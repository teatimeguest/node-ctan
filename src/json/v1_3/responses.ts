import type { Author as AuthorV1_2 } from '#/json/v1_2/responses';

/** {@inheritDoc v1_2.Author} */
export interface Author extends AuthorV1_2 {
  /**
   * The title of the author.
   *
   * @remarks This attribute no longer seems to be available.
   */
  title?: string;
  /**
   * The von part of the author's name.
   * It is usually in lower case and has values like _von_, _van_, or _de_.
   *
   * @defaultValue `""`
   */
  von: string;
  /**
   * The junior part of the author's name.
   * It is usually an addition to the name like _jr._, _sr._,
   * or a numeral like _I_, _II_, _III_, _IV_.
   *
   * @defaultValue `""`
   */
  junior: string;
}

/**
 * Information about a pseudonymous author.
 */
export interface PseudonymousAuthor {
  /** {@inheritDoc Author#key} */
  key: string;
  /** {@inheritDoc Author#died} */
  died: boolean;
  /**
   * The alias name to protect the privacy of an author who requests it.
   */
  pseudonym: string;
  /** {@inheritDoc Author#pkgs} */
  pkgs?: Array<string>;
}

/**
 * Information about the version of the CTAN JSON API.
 */
export interface ApiVersion {
  /**
   * The version string.
   */
  version: '1.3';
}

export * from '#/json/v1_2/responses';
