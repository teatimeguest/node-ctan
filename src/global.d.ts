declare global {
  interface ErrorConstructor {
    new(message: string, options?: ErrorOptions): Error;
  }

  interface ErrorOptions {
    cause?: Error;
  }

  interface URLSearchParams {
    append(name: string, value: unknown): void;
  }
}

export {};
