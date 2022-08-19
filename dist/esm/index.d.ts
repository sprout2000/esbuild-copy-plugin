/// <reference types="node" />
import fs from 'node:fs';
import { Plugin } from 'esbuild';
interface CopyPluginOptions extends fs.CopySyncOptions {
    src?: string;
    dest?: string;
}
export declare const copyPlugin: (options?: CopyPluginOptions) => Plugin;
export {};
//# sourceMappingURL=index.d.ts.map