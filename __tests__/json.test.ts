import {
  getHttpOperationsFromSpec,
} from '@stoplight/prism-cli/dist/operations.js';
import { createLogger } from '@stoplight/prism-core';
import { createServer } from '@stoplight/prism-http-server';
import glob from 'glob';

import { Client } from '#/json/index';

let server: ReturnType<typeof createServer> | null = null;

beforeAll(async () => {
  const specs = glob.sync('openapi/*/*.yml').map(getHttpOperationsFromSpec);
  const operations = (await Promise.all(specs)).flat();
  server = createServer(operations, {
    components: { logger: createLogger('json', { level: 'silent' }) },
    config: {
      checkSecurity: false,
      errors: false,
      isProxy: false,
      mock: { dynamic: true },
      upstreamProxy: undefined,
      validateRequest: true,
      validateResponse: true,
    },
    cors: false,
  });
  await server.listen(8080);
});

afterAll(() => server?.close());

const json = new Client({ baseUrl: 'http://localhost:8080' });

describe.each(
  [['v1_0'], ['v1_1'], ['v1_2'], ['v1_3'], ['v2_0']] as const,
)('%s', (version) => {
  test.each(
    [['authors'], ['packages'], ['topics']] as const,
  )('%s', async (method) => {
    await expect(json[version][method]()).resolves.not.toThrow();
  });

  test.each(
    [['author'], ['pkg'], ['search'], ['topic']] as const,
  )('%s', async (method) => {
    await expect(json[version][method]('test')).resolves.not.toThrow();
  });
});

describe.each(
  [['v1_1'], ['v1_2'], ['v1_3'], ['v2_0']] as const,
)('%s', (version) => {
  test.each([['licenses'], ['version']] as const)('%s', async (method) => {
    await expect(json[version][method]()).resolves.not.toThrow();
  });
});
