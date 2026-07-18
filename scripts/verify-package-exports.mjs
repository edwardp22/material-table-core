import assert from 'node:assert/strict';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const commonJsModule = require('@edwardp22/material-table-core');
const esmModule = await import('@edwardp22/material-table-core');

assert.equal(typeof commonJsModule.default, 'function');
assert.equal(typeof esmModule.default, 'function');
