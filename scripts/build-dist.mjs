import { cp, writeFile } from 'fs/promises';
import { createRequire } from 'module';
import path from 'path';

import { build as esbuild } from 'esbuild';
import glob from 'glob';

const require = createRequire(import.meta.url);
const rootdir = process.cwd();
const { target } = require(path.join(rootdir, 'tsconfig.json'));
const {
  devDependencies,
  'private': _private,
  overrides,
  scripts,
  ...config
} = require(process.env.npm_package_json);

const dist = path.join(rootdir, 'dist');
const cjs = path.join(dist, 'cjs');
const esm = path.join(dist, 'esm');

await esbuild({
  entryPoints: glob.sync(path.join(esm, '**', '*.js')),
  format: 'cjs',
  outdir: cjs,
  platform: 'node',
  target,
});

await cp(path.join(rootdir, 'src', 'fetch.cjs'), path.join(cjs, 'fetch.js'));

await writeFile(
  path.join(esm, 'package.json'),
  JSON.stringify({ type: 'module' }),
);

await writeFile(
  path.join(cjs, 'package.json'),
  JSON.stringify({ type: 'commonjs' }),
);

await writeFile(
  path.join(dist, 'package.json'),
  JSON.stringify(config, (key, value) => {
    if (value?.startsWith?.('./dist')) {
      return `./${path.posix.relative(dist, value)}`;
    } else {
      return value;
    }
  }, 2),
);

await cp('README.md', path.join(dist, 'README.md'));
await cp('LICENSE', path.join(dist, 'LICENSE'));
