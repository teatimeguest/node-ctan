import type { RequestInit } from '#/fetch';

export interface ClientConfig extends RequestInit {
  /**
   * @defaultValue `'https://ctan.org'`
   */
  baseUrl?: string | URL;
  /**
   * @defaultValue `true`
   */
  validate?: boolean;
}
