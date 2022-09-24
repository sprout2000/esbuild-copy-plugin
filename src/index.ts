import fs from 'node:fs';
import crypto from 'node:crypto';

import { Plugin, PluginBuild } from 'esbuild';

interface CopyPluginOptions extends fs.CopySyncOptions {
  from?: string;
  to?: string;
}

export const getDigest = (string: string) => {
  const hash = crypto.createHash('md5');
  const data = hash.update(string, 'utf-8');

  return data.digest('hex');
};

export const getFileDigest = (path: string) => {
  if (!fs.existsSync(path)) return null;
  if (fs.statSync(path).isDirectory()) return null;

  return getDigest(fs.readFileSync(path).toString());
};

export const filter = (src: string, dest: string) => {
  if (!fs.existsSync(dest)) return true;
  if (fs.statSync(dest).isDirectory()) return true;

  return getFileDigest(src) !== getFileDigest(dest);
};

export const copyPlugin = (options: CopyPluginOptions = {}): Plugin => ({
  name: 'esbuild-copy-plugin',
  setup(build: PluginBuild) {
    const src = options.from || './assets';
    const dest = options.to || './dist';

    build.onEnd(() =>
      // https://nodejs.org/api/fs.html#fscpsyncsrc-dest-options
      fs.cpSync(src, dest, {
        dereference: options.dereference || true,
        errorOnExist: options.errorOnExist || false,
        filter: options.filter || filter,
        force: options.force || true,
        preserveTimestamps: options.preserveTimestamps || true,
        recursive: options.recursive || true,
      })
    );
  },
});
