import { fileURLToPath } from 'url';
import { buildSync as esbuild } from 'esbuild';

//
// Config
//

const config = {
  clearMocks: true,
  coveragePathIgnorePatterns: ['<rootDir>/src/fetch'],
  globals: {
    'ts-jest': {
      compiler: "ttypescript",
      tsconfig: '<rootDir>/tsconfig.tests.json',
    },
  },
  moduleFileExtensions: ['js', 'cjs', 'ts'],
  moduleNameMapper: {
    '^#/(.*)': '<rootDir>/src/$1',
  },
  modulePathIgnorePatterns: ['<rootDir>/src/fetch.js'],
  resetModules: true,
  rootDir: process.cwd(),
  testEnvironment: 'node',
  testMatch: ['<rootDir>/__tests__/**/*.test.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    // Currently dynamic imports do not work with jest
    // (https://github.com/nodejs/node/issues/35889),
    // so use esbuild to transpile them.
    '^.+\\.cjs$': fileURLToPath(import.meta.url),
  },
  verbose: false,
};

//
// Transformer
//

Object.defineProperty(config, 'process', {
  value: (contents, sourcefile) => {
    const { outputFiles } = esbuild({
      bundle: true,
      format: 'cjs',
      minify: true,
      platform: 'node',
      stdin: { contents, sourcefile, resolveDir: process.cwd() },
      write: false,
    });
    return { code: outputFiles[0].text };
  },
});

export default config;
