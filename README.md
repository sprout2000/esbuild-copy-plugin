# @sprout2000/esbuild-copy-plugin
![jest](./coverage/badge.svg)
![GitHub top language](https://img.shields.io/github/languages/top/sprout2000/esbuild-copy-plugin)
![npm](https://img.shields.io/npm/dt/@sprout2000/esbuild-copy-plugin)

An esbuild plugin to copy static files.

## Usage

```typescript
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

## License

Copyright (c) 2022 sprout2000  
[MIT](https://github.com/sprout2000/esbuild-copy-plugin/blob/master/LICENSE.md) Licensed
