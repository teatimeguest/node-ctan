import type { Request, Response } from '#/fetch';

export abstract class CtanError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
    if (options?.cause !== undefined && this.cause === undefined) {
      this.cause = options.cause;
    }
  }
}

export interface CtanError {
  cause?: Error;
}

export interface ErrorOptions {
  cause?: Error;
}

/**
 * This exception is thrown when a request fails.
 */
export class CtanRequestError extends CtanError {
  readonly #request: Request;

  constructor(message: string, request: Request, options?: ErrorOptions) {
    super(message, options);
    this.#request = request;
  }

  /**
   * `node-fetch`'s request object.
   */
  get request(): Request {
    return this.#request;
  }

  override get name(): 'CtanRequestError' {
    return 'CtanRequestError';
  }

  get [Symbol.toStringTag](): 'CtanRequestError' {
    return this.name;
  }

  toJSON(this: void): object {
    return {};
  }
}

/**
 * This exception is thrown when recieving an unexpected response.
 */
export class CtanResponseError extends CtanError {
  readonly #request: Request;
  readonly #response: Response;

  constructor(
    message: string,
    request: Request,
    response: Response,
    options?: ErrorOptions,
  ) {
    super(message, options);
    this.#request = request;
    this.#response = response;
  }

  /**
   * `node-fetch`'s request object.
   */
  get request(): Request {
    return this.#request;
  }

  /**
   * `node-fetch`'s response object.
   */
  get response(): Response {
    return this.#response;
  }

  /**
   * The HTTP response status code.
   */
  get status(): number {
    return this.response.status;
  }

  override get name(): 'CtanResponseError' {
    return 'CtanResponseError';
  }

  get [Symbol.toStringTag](): 'CtanResponseError' {
    return this.name;
  }

  toJSON(this: void): object {
    return {};
  }
}
