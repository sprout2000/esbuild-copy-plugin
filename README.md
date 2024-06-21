# @sprout2000/esbuild-copy-plugin

![jest](./coverage/badge.svg)
![GitHub top language](https://img.shields.io/github/languages/top/sprout2000/esbuild-copy-plugin)
![npm](https://img.shields.io/npm/dt/@sprout2000/esbuild-copy-plugin)

An [esbuild](https://esbuild.github.io/) plugin to to efficiently copy static files from a source directory to a destination directory.

_\* This plugin is a typed and fully tested version of [@nickjj](https://github.com/nickjj)'s [esbuild-copy-static-files](https://github.com/nickjj/esbuild-copy-static-files)._

## Installation

```sh
npm install --save-dev @sprout2000/esbuild-copy-plugin
```

_You will need to have [Node.js](https://nodejs.org/) `>=16.7` installed._

## Usage

```js
import { build } from "esbuild";
import { copyPlugin } from "@sprout2000/esbuild-copy-plugin";

build({
  plugins: [
    copyPlugin({
      src: "./assets/icon.png",
      dest: "./dist/logo.png",
    }),
  ],
});
```

## API

```typescript
interface CopyPluginOptions extends fs.CopySyncOptions {
  src?: string;
  dest?: string;
}
```

| option                                | default     |
| :------------------------------------ | :---------- |
| `src?`: string                        | `"assets"`  |
| `dest?`: string                       | `"dist"`    |
| `dereference?`: boolean               | `false`     |
| `errorOnExist?`: boolean              | `false`     |
| `filter?`: (`src`, `dest`) => boolean | `undefined` |
| `force?`: boolean                     | `false`     |
| `preserveTimestamps?`: boolean        | `false`     |
| `recursive?`: boolean                 | `true`      |
| `verbatimSymlinks?`: boolean          | `false`     |

_See [fs.CopySyncOptions](https://nodejs.org/dist/latest-v18.x/docs/api/fs.html) in Node.js LTS for more details._

## Unit test

```sh
# clone this repo, and install devDependencies...
git clone https://github.com/sprout2000/esbuild-copy-plugin.git
cd esbuild-copy-plugin
npm install

# run the test
npm test
```
