import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const commonJsModule = require('@edwardp22/material-table-core');
const esmModule = await import('@edwardp22/material-table-core');

assert.equal(typeof commonJsModule.default, 'function');
assert.equal(typeof esmModule.default, 'function');

const outputs = await Promise.all([
  readFile('dist/index.cjs', 'utf8'),
  readFile('dist/esm/index.js', 'utf8')
]);

for (const output of outputs) {
  assert.doesNotMatch(output, /\bprocess\.env\b/);
}
