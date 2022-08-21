# @sprout2000/esbuild-copy-plugin
![jest](./coverage/badge.svg)
![GitHub top language](https://img.shields.io/github/languages/top/sprout2000/esbuild-copy-plugin)
![npm](https://img.shields.io/npm/dt/@sprout2000/esbuild-copy-plugin)

An esbuild plugin to copy static files that changed from a source directory to a destination directory.

_* This plugin is a typed and fully tested version of [@nickjj](https://github.com/nickjj)'s [esbuild-copy-static-files](https://github.com/nickjj/esbuild-copy-static-files)._

## Installation

```sh
npm i -D @sprout2000/esbuild-copy-plugin
```

_or_

```sh
yarn add -D @sprout2000/esbuild-copy-plugin
```

## Usage

```js
import { build } from 'esbuild';
import { copyPlugin } from '@sprout2000/esbuild-copy-plugin';

build({
  plugins: [
    copyPlugin({
      src: './assets/icon.png',
      dest: './dist/logo.png',
    }),
  ],
});
```

## API

```js
copyPlugin: (options?: CopyPluginOptions) => Plugin;

CopyPluginOptions: {
  src?: string;   // default: './assets'
  dest?: string;  // default: './dist'
  dereference?: boolean;
  errorOnExist?: boolean;
  filter?: (src, dest) => boolean;
  force?: boolean;
  preserveTimestamps?: boolean;
  recursive?: boolean;
}
```
