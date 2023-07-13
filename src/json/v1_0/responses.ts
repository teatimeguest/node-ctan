/**
 * Information about an author.
 */
export interface Author {
  /**
   * The key of the author.
   */
  key: string;
  /**
   * The given name of the author.
   */
  givenname: string;
  /**
   * The family name of the author.
   */
  familyname: string;
  /**
   * List of ids of packages mentioning the author.
   * This attribute is included
   * if the parameter {@link AuthorParameters#ref | `ref`} is set to `true`.
   */
  pkgs?: Array<string>;
}

/**
 * Summary of a package.
 */
export interface PackageSummary {
  /**
   * The key of the package.
   *
   * @see {@link Package#id | `Package#id`}
   */
  key: string;
  /**
   * The name of the package.
   */
  name: string;
  /**
   * A short descriptive text about the content of the package.
   */
  caption: string;
}

/**
 * Information about a package author.
 */
export interface PackageAuthor {
  /**
   * The {@link Author#key | key} of the author.
   */
  id: string;
  active: boolean;
}

/**
 * Copyright.
 */
export interface Copyright {
  /**
   * The name of the copyright holder.
   */
  owner: string;
  /**
   * The year or years of the copyright.
   */
  year?: string | null;
}

/**
 * Information about a version of a package.
 */
export interface PackageVersion {
  /**
   * The version number.
   */
  number?: string;
  /**
   * The version date.
   */
  date?: string;
}

export interface PackageDescription {
  /**
   * The longer description of the package, which may include HTML markup.
   * An inner tag `<ref>` is used to reference a package with attribute `refid`.
   *
   * @see {@link PackageSummary#key | `PackageSummary#key`}
   */
  text?: string;
  /**
   * The ISO code for the language of the description.
   * Alternately it may be null to indicate the default language, i.e. English.
   */
  language?: string | null;
}

export interface PackageDocumentation {
  /**
   * The ISO code for the language of the description.
   */
  language?: string | null;
  /**
   * The (English) text describing the documentation item.
   */
  details?: string;
  /**
   * A reference to the documentation.
   * The prefix `ctan:` indicates a reference to a directory on CTAN.
   * If the parameter {@link PkgParameters#"keep-url" | `keep-url`} is `true`
   * then this attribute contains always a valid URL without the `ctan:` prefix.
   */
  href?: string;
}

/**
 * Information about a package.
 */
export interface Package {
  /**
   * The unique id of the package.
   *
   * @see {@link PackageSummary#key | `PackageSummary#key`}
   */
  id: string;
  /**
   * The print representation of the package name.
   */
  name: string;
  /**
   * A short description of the package.
   */
  caption: string;
  /**
   * The list of authors.
   */
  authors: Array<PackageAuthor>;
  /**
   * The information about the copyright.
   */
  copyright?: Array<Copyright>;
  /**
   * The {@link v1_1.License#key | keys} of licenses.
   */
  license?: string | Array<string>;
  /**
   * Information about the version of the package.
   */
  version?: PackageVersion;
  /**
   * Long descriptions of the package.
   */
  descriptions?: Array<PackageDescription>;
  /**
   * List of references to documentation.
   */
  documentation: Array<PackageDocumentation>;
  /**
   * The location of the package in the CTAN tree.
   */
  ctan?: {
    /**
     * The relative path of the package in the CTAN tree.
     */
    path: string;
    /**
     * The indicator that this package consists of a single file only.
     */
    file?: boolean;
  };
  /**
   * The location of the package on CTAN
   * relative to the CTAN directory `/install`
   * in form of an installable TDS-compliant zip archive.
   *
   * @defaultValue `false`
   */
  install?: string;
  /**
   * The name of the package in MiKTeX.
   */
  miktex?: string;
  /**
   * The name of the package in TeX Live.
   */
  texlive?: string;
  /**
   * List of extra terms to be indexed for the search.
   */
  index?: Array<string>;
  /**
   * List of topics keys for this entry.
   *
   * @see {@link Topic#key | `Topic#key`}
   */
  topics?: Array<string>;
  /**
   * The URL of the home page of the package.
   */
  home?: string;
  also?: Array<string>;
}

/**
 * Information about a topic.
 */
export interface Topic {
  /**
   * The key of the topic.
   */
  key: string;
  /**
   * A short description text about the meaning of the topic.
   */
  details: string;
  /**
   * The list of ids of packages referring to the topic.
   * This attribute is included
   * if the parameter {@link TopicParameters#ref | `ref`} is set to `true`.
   */
  packages?: Array<string>;
}
