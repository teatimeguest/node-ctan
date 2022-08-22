import { type JSONSchemaType, default as Ajv } from 'ajv';

import type { ClientConfig } from '#/config';
import { CtanRequestError, CtanResponseError } from '#/errors';
import { fetch } from '#/fetch';

export abstract class ClientBase {
  readonly #defaults: ClientConfig;
  readonly #validator: Validator;

  constructor(base?: Readonly<ClientConfig> | ClientBase) {
    if (base instanceof ClientBase) {
      this.#defaults = base.#defaults;
      this.#validator = base.#validator;
    } else {
      this.#defaults = { baseUrl: 'https://ctan.org', validate: true, ...base };
      this.#validator = new Validator();
    }
  }

  /**
   * The default configuration for this client instance.
   */
  get defaults(): ClientConfig {
    return this.#defaults;
  }

  protected async get<Response>(
    endpoint: string,
    params: Readonly<URLSearchParams> | null,
    schema: Readonly<JSONSchemaType<Response>>,
    config?: Readonly<ClientConfig>,
  ): Promise<Response> {
    const { body, size, ...init } = {
      ...this.defaults,
      ...config,
      method: 'GET',
    };
    const url = new URL(endpoint, init.baseUrl);
    if (params !== null) {
      url.search = params.toString();
    }
    const { request, response, error } = await fetch(url.href, init);
    if (error !== undefined) {
      throw new CtanRequestError('Failed to request', request, {
        cause: error instanceof Error ? error : new Error(`${error}`),
      });
    }
    if (!response.ok) {
      throw new CtanResponseError(response.statusText, request, response);
    }
    try {
      const json: unknown = await response.json();
      if (config?.validate ?? false) {
        return json as Response;
      } else {
        return this.#validator.validate(schema, json);
      }
    } catch (error) { // eslint-disable-line @typescript-eslint/no-shadow
      throw new CtanResponseError('Invalid response data', request, response, {
        cause: error instanceof Error ? error : new Error(`${error}`),
      });
    }
  }
}

class Validator {
  #ajv?: Ajv;

  validate<Response>(
    schema: Readonly<JSONSchemaType<Response>>,
    data: unknown,
  ): Response {
    this.#ajv ??= new Ajv({ allowUnionTypes: true });
    if (!this.#ajv.validate(schema as JSONSchemaType<Response>, data)) {
      throw new Ajv.ValidationError(this.#ajv.errors ?? []);
    }
    return data;
  }
}

export function buildParams<T extends object>(
  data: Readonly<T> | undefined | null,
  keys: ReadonlyArray<keyof T & string>,
  coerce: {
    [K in keyof T]?: (from: T[K]) => unknown;
  } = {
    AUTHORS: Boolean,
    FILES: Boolean,
    PKG: Boolean,
    PORTAL: Boolean,
    TOPICS: Boolean,
    drop: Array.from,
    ext: Boolean,
    'keep-url': Boolean,
    max: Number,
    offset: Number,
    ref: Boolean,
    wildcard: Boolean,
  } as object,
): URLSearchParams {
  const params = new URLSearchParams();
  if (data instanceof Object) {
    for (const key of keys) {
      if (key in data) {
        params.append(key, coerce[key]?.(data[key]) ?? data[key]);
      }
    }
  }
  return params;
}

export default ClientBase;
