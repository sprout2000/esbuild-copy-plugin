/// <reference types="node" />
import fs from 'node:fs';
import { Plugin } from 'esbuild';
interface CopyPluginOptions extends fs.CopySyncOptions {
    src?: string;
    dest?: string;
}
export declare const getDigest: (string: string) => string;
export declare const getFileDigest: (path: string) => string | null;
export declare const filter: (src: string, dest: string) => boolean;
export declare const copyPlugin: (options?: CopyPluginOptions) => Plugin;
export {};
//# sourceMappingURL=index.d.ts.map