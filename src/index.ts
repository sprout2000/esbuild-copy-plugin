import fs from "node:fs";
import crypto from "node:crypto";

import { Plugin, PluginBuild } from "esbuild";

interface CopyPluginOptions extends fs.CopySyncOptions {
  src?: string;
  dest?: string;
}

export const getDigest = (string: string) => {
  const hash = crypto.createHash("md5");
  const data = hash.update(string, "utf-8");

  return data.digest("hex");
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
  name: "esbuild-copy-plugin",
  setup(build: PluginBuild) {
    const src = options.src || "./assets";
    const dest = options.dest || "./dist";

    build.onEnd(() =>
      // https://nodejs.org/dist/latest-v18.x/docs/api/fs.html
      fs.cpSync(src, dest, {
        dereference: options.dereference || false,
        errorOnExist: options.errorOnExist || false,
        filter: options.filter || filter,
        force: options.force || true,
        preserveTimestamps: options.preserveTimestamps || false,
        recursive: options.recursive || true,
        verbatimSymlinks: options.verbatimSymlinks || false,
      }),
    );
  },
});
