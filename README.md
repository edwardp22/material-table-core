# @edwardp22/material-table-core

A maintained fork of [`@material-table/core`](https://github.com/material-table-core/core), focused on predictable browser compatibility, modern package exports, and carefully reviewed dependency upgrades.

> This is an independent fork and is not an official distribution of `@material-table/core`.

## Credits and project lineage

This package builds on the work of:

- The [`@material-table/core` maintainers and contributors](https://github.com/material-table-core/core), whose project is the direct upstream of this fork.
- [Mehmet Baran](https://github.com/mbrn) and contributors to the original [`material-table`](https://github.com/mbrn/material-table) project.

Their work remains the foundation of this package. Changes maintained here are intended to preserve compatibility, integrate useful upstream fixes, and support the needs of applications that cannot immediately adopt every major dependency upgrade.

## Why this fork exists

The fork currently provides:

- React 18 and React 19 support.
- Material UI 7 compatibility without requiring a migration to a newer MUI major.
- Explicit ESM and CommonJS package exports for Vite 8, Node.js, and traditional bundlers.
- Browser and bundler compatibility fixes for applications with established dependency constraints.
- Selected upstream bug fixes that can be integrated without breaking the supported MUI line.

Upstream changes are reviewed before being merged. Release commits, publishing workflows, dependency upgrades to unsupported MUI majors, and changes that regress the dual-package build are not copied automatically.

## Improvements compared with upstream `master`

The following comparison was reviewed against `material-table-core/core@9f132317`. It documents behavior maintained by this fork, not a claim that the upstream project is unsupported or uncredited.

| Area | Upstream `master` | This fork |
| --- | --- | --- |
| Package exports | Declares ESM and CommonJS entry points, with separate Babel and esbuild paths | Builds and verifies bundled ESM and CommonJS outputs from the same source entry point |
| Browser globals | Some development warnings read `process.env` directly | Uses a browser-safe environment check without requiring a global `process` object |
| React compatibility | Declares React 19.2 or newer | Supports React 18.3 and React 19 |
| Material UI compatibility | Dependency ranges are not bounded to one MUI major | Intentionally supports MUI 7, Emotion 11, and MUI X Date Pickers 8 |
| MUI component APIs | Contains a mixture of legacy and current input/picker props | Keeps the `slotProps` and date-adapter APIs used by the supported MUI versions |
| Data processing | Uses defensive array copies throughout filtering, searching, sorting, and paging | Preserves defensive copies before mutations while avoiding unnecessary copies when a stage is inactive |
| Row editing | Can retain the supplied row object directly in edit state | Creates an isolated edit value so cancelling an edit does not mutate the supplied row |
| Icon loading | Uses broader icon imports in parts of the package | Uses direct icon entry points to reduce bundler scanning and improve tree shaking |
| Dependency maintenance | Tracks upstream release requirements | Uses current compatible tooling while treating MUI and lint/build major migrations separately |

### Upstream improvements retained

This fork includes or adaptively reimplements the useful upstream changes for:

- Scroll sizing, overflow behavior, fixed-column layout, and forwarded scrollbar refs.
- Correct `exportAllData` data selection.
- Correct clearing of multi-column sorting through `clearCriteria`.
- Passing the public `id` prop to the table container.
- Default expanded tree rows.
- MUI Grid, theme-variable, and date-picker adapter compatibility.
- Development-only diagnostics without introducing a browser dependency on Node.js globals.
- Vite 8 package resolution.

The fork does not copy upstream release commits, changelog-only commits, repository ownership files, or publishing workflows because those must remain specific to each repository. Upstream implementations that conflict with the supported MUI line or the verified dual-package build are adapted rather than reverted.

## Installation

```bash
npm install @edwardp22/material-table-core \
  @mui/material@^7 @mui/icons-material@^7 @mui/system@^7 \
  @emotion/react@^11 @emotion/styled@^11
```

If a change has not been published to npm yet, install a reviewed commit explicitly:

```bash
npm install github:edwardp22/material-table-core#<commit-sha>
```

Pinning a commit SHA is recommended over a branch name for reproducible builds.

## Compatibility

| Package | Supported line |
| --- | --- |
| React | 18.3 or 19.x |
| React DOM | 18.3 or 19.x |
| Material UI | 7.x |
| Emotion | 11.x |
| MUI X Date Pickers | 8.x |
| Vite | Includes explicit ESM support, tested with Vite 8 |
| CommonJS | Supported through `require()` package exports |

MUI major upgrades are intentionally handled separately because they can require application-level compatibility changes.

## Basic usage

```jsx
import MaterialTable from '@edwardp22/material-table-core';

export default function UsersTable() {
  return (
    <MaterialTable
      title="Users"
      columns={[
        { title: 'Name', field: 'name' },
        { title: 'Age', field: 'age', type: 'numeric' }
      ]}
      data={[
        { name: 'Ada', age: 36 },
        { name: 'Grace', age: 40 }
      ]}
      options={{ sorting: true, filtering: true }}
    />
  );
}
```

The upstream [documentation](https://material-table-core.github.io/docs) and [demos](https://material-table-core.github.io/demos/) remain the primary references for the shared API. Fork-specific behavior should be documented in this README or the release notes.

## Package outputs

The published package exposes:

- `dist/esm/index.js` for ESM consumers.
- `dist/index.cjs` for CommonJS consumers.
- `types/index.d.ts` for TypeScript.

Both `import MaterialTable from '@edwardp22/material-table-core'` and `require('@edwardp22/material-table-core')` are verified as part of the build tests.

## Development

Use Node.js 22.15 or newer for the current development toolchain.

```bash
npm install
npm run lint
npm test -- --runInBand
npm run test:build
```

Before publishing, also run:

```bash
npm pack --dry-run
node scripts/verify-package-exports.mjs
```

## Maintaining the fork

Recommended update process:

1. Fetch and compare `upstream/master` with the fork.
2. Cherry-pick or reimplement functional fixes individually so their impact remains reviewable.
3. Keep fork metadata, package name, README, publishing workflows, and dual ESM/CommonJS build owned by this repository.
4. Update dependencies to their latest compatible versions; treat MUI major upgrades as dedicated migrations.
5. Validate lint, tests, package exports, the packed artifact, and at least one consuming application before release.
6. Credit upstream commits in pull requests and preserve original authorship when cherry-picking.

## Contributing

Bug reports and pull requests should target the [fork repository](https://github.com/edwardp22/material-table-core). If a problem also affects upstream and is not fork-specific, consider reporting it to [`material-table-core/core`](https://github.com/material-table-core/core) as well.

## License

Licensed under the [MIT License](LICENSE). Copyright and attribution from the upstream projects remain applicable.
