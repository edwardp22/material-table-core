import { build } from 'esbuild';
import { mkdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';

const outputDirectory = 'dist';
const external = [
  '@babel/runtime/*',
  '@emotion/*',
  '@hello-pangea/dnd',
  '@mui/*',
  'classnames',
  'date-fns',
  'deepmerge',
  'lodash.debounce',
  'prop-types',
  'react',
  'react-dom',
  'zustand'
];
const sharedOptions = {
  entryPoints: ['src/index.js'],
  bundle: true,
  external,
  loader: {
    '.js': 'jsx'
  },
  platform: 'browser',
  target: ['es2020'],
  alias: {
    '@components': path.resolve('src/components'),
    '@store': path.resolve('src/store'),
    '@utils': path.resolve('src/utils')
  }
};

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(`${outputDirectory}/esm`, { recursive: true });

await Promise.all([
  build({
    ...sharedOptions,
    format: 'cjs',
    outfile: `${outputDirectory}/index.cjs`
  }),
  build({
    ...sharedOptions,
    format: 'esm',
    outfile: `${outputDirectory}/esm/index.js`
  })
]);

await writeFile(
  `${outputDirectory}/package.json`,
  `${JSON.stringify({ type: 'commonjs', main: './index.cjs' }, null, 2)}\n`
);

await writeFile(
  `${outputDirectory}/esm/package.json`,
  `${JSON.stringify({ type: 'module' }, null, 2)}\n`
);
