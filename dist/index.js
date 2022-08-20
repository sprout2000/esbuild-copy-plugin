"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.copyPlugin=exports.filter=exports.getFileDigest=exports.getDigest=void 0;const node_fs_1=__importDefault(require("node:fs")),node_crypto_1=__importDefault(require("node:crypto")),getDigest=e=>node_crypto_1.default.createHash("md5").update(e,"utf-8").digest("hex");exports.getDigest=getDigest;const getFileDigest=e=>node_fs_1.default.existsSync(e)?node_fs_1.default.statSync(e).isDirectory()?null:(0,exports.getDigest)(node_fs_1.default.readFileSync(e).toString()):null;exports.getFileDigest=getFileDigest;const filter=(e,t)=>!node_fs_1.default.existsSync(t)||(!!node_fs_1.default.statSync(t).isDirectory()||(0,exports.getFileDigest)(e)!==(0,exports.getFileDigest)(t));exports.filter=filter;const copyPlugin=(e={})=>({name:"esbuild-copy-plugin",setup(t){const s=e.src||"./assets",r=e.dest||"../dist";t.onEnd((()=>node_fs_1.default.cpSync(s,r,{dereference:e.dereference||!0,errorOnExist:e.errorOnExist||!1,filter:e.filter||exports.filter,force:e.force||!0,preserveTimestamps:e.preserveTimestamps||!0,recursive:e.recursive||!0})))}});exports.copyPlugin=copyPlugin;