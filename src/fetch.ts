import nodeFetch, {
  Request,
  type RequestInfo,
  type RequestInit,
  type Response,
} from 'node-fetch';

export async function fetch(url: RequestInfo, init?: RequestInit): Promise<
  | { request: Request; response: Response; error: never }
  | { request: Request; response: never; error: unknown }
> {
  const request = new Request(url, init);
  type T = Awaited<ReturnType<typeof fetch>>;
  try {
    return { request, response: await nodeFetch(request) } as T;
  } catch (error) {
    return { request, error } as T;
  }
}

export type { Request, RequestInfo, RequestInit, Response };
