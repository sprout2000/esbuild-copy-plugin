# @sprout2000/esbuild-copy-plugin
![jest](./coverage/badge.svg)
![GitHub top language](https://img.shields.io/github/languages/top/sprout2000/esbuild-copy-plugin)
![npm](https://img.shields.io/npm/dt/@sprout2000/esbuild-copy-plugin)

An [esbuild](https://esbuild.github.io/) plugin to copy static files that changed from a source directory to a destination directory.

_* This plugin is a typed and fully tested version of [@nickjj](https://github.com/nickjj)'s [esbuild-copy-static-files](https://github.com/nickjj/esbuild-copy-static-files)._

## Installation

```sh
npm i -D @sprout2000/esbuild-copy-plugin
```

_or_

```sh
yarn add -D @sprout2000/esbuild-copy-plugin
```

_You will need to have [Node.js](https://nodejs.org/) `>=16.7` installed._

## Usage

```js
import { build } from 'esbuild';
import { copyPlugin } from '@sprout2000/esbuild-copy-plugin';

build({
  plugins: [
    copyPlugin({
      from: './assets/icon.png',
      to: './dist/logo.png',
    }),
  ],
});
```

## API

```js
copyPlugin: (options?: CopyPluginOptions) => Plugin;

CopyPluginOptions: {
  from?: string;   // default: './assets'
  to?: string;  // default: './dist'
  dereference?: boolean;
  errorOnExist?: boolean;
  filter?: (src, dest) => boolean;
  force?: boolean;
  preserveTimestamps?: boolean;
  recursive?: boolean;
}
```

## Test

```sh
# clone this repo, and install devDependencies...
git clone https://github.com/sprout2000/esbuild-copy-plugin.git
cd esbuild-copy-plugin
npm install

# run the test
npm test
```
