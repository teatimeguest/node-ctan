/**
 * Search hit.
 */
export interface SearchHit {
  /**
   * The page title of the hit.
   */
  title: string;
  /**
   * The absolute path on CTAN Portal of the hit.
   */
  path: string;
  /**
   * Some additional text to display.
   */
  text: string;
}

/**
 * Search result.
 */
export interface SearchResult {
  /**
   * The total number of hits found.
   */
  numberOfHits: number;
  /**
   * The offset at which the hits start.
   * It is a repetition of the input argument `offset`
   * which might have been adapted.
   *
   * @see {@link SearchParameters#offset | `SearchParameters#offset`}
   */
  offset: number;
  /**
   * The maximal number of hits in this junk.
   * It is a repetition of the input argument `max`
   * which might have been adapted.
   *
   * @see {@link SearchParameters#max | `SearchParameters#max`}
   */
  max: number;
  /**
   * The search phrase.
   * It is a repetition of the input argument `phrase`
   * which might have been adapted.
   *
   * @see {@link SearchParameters#phrase | `SearchParameters#phrase`}
   */
  phrase: string;
  /**
   * The list of hits in this junk.
   */
  hits: Array<SearchHit>;
}
