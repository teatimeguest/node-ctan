import { ClientBase } from '#/client-base';
import type { ClientConfig } from '#/config';
import { Searchable } from '#/json/search/mixin';
import { Client as ClientV1_0 } from '#/json/v1_0/client';
import { Client as ClientV1_1 } from '#/json/v1_1/client';
import { Client as ClientV1_2 } from '#/json/v1_2/client';
import { Client as ClientV1_3 } from '#/json/v1_3/client';
import { Client as ClientV2_0 } from '#/json/v2_0/client';

export class Client extends ClientBase {
  #v1_0: ClientV1_0 | undefined;
  #v1_1: ClientV1_1 | undefined;
  #v1_2: ClientV1_2 | undefined;
  #v1_3: ClientV1_3 | undefined;
  #v2_0: ClientV2_0 | undefined;

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
   * Subclient for the CTAN JSON API v1.0.
   */
  get v1_0(): ClientV1_0 {
    return this.#v1_0 ??= new ClientV1_0(this);
  }

  /**
   * Subclient for the CTAN JSON API v1.1.
   */
  get v1_1(): ClientV1_1 {
    return this.#v1_1 ??= new ClientV1_1(this);
  }

  /**
   * Subclient for the CTAN JSON API v1.2.
   */
  get v1_2(): ClientV1_2 {
    return this.#v1_2 ??= new ClientV1_2(this);
  }

  /**
   * Subclient for the CTAN JSON API v1.3.
   */
  get v1_3(): ClientV1_3 {
    return this.#v1_3 ??= new ClientV1_3(this);
  }

  /**
   * Subclient for the CTAN JSON API v2.0.
   */
  get v2_0(): ClientV2_0 {
    return this.#v2_0 ??= new ClientV2_0(this);
  }

  static {
    Searchable.mixin(Client);
  }
}

export interface Client extends Searchable {}
