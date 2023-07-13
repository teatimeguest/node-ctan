import { ClientBase } from '#/client-base';
import type { ClientConfig } from '#/config';
import { Client as ClientJson } from '#/json/client';

/**
 * Client for CTAN APIs.
 */
export class Client extends ClientBase {
  #json: ClientJson | undefined;

  /**
   * @param config - Default configuration for this client instance.
   */
  constructor(config?: Readonly<ClientConfig>);
  /** @internal */
  constructor(base: ClientBase);
  constructor(base?: Readonly<ClientConfig> | ClientBase) {
    super(base);
  }

  /**
   * Subclient for the CTAN JSON API.
   */
  get json(): ClientJson {
    return this.#json ??= new ClientJson(this);
  }
}
