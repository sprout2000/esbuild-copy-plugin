import fs from"node:fs";import crypto from"node:crypto";const getDigest=e=>crypto.createHash("md5").update(e,"utf-8").digest("hex"),getFileDigest=e=>{return fs.existsSync(e)?fs.statSync(e).isDirectory()?null:(t=fs.readFileSync(e).toString(),crypto.createHash("md5").update(t,"utf-8").digest("hex")):null;var t},filter=(e,t)=>!fs.existsSync(t)||(!!fs.statSync(t).isDirectory()||getFileDigest(e)!==getFileDigest(t));export const copyPlugin=(e={})=>({name:"esbuild-copy-plugin",setup(t){const r=e.src||"./assets",s=e.dest||"../dist";t.onEnd((()=>fs.cpSync(r,s,{dereference:e.dereference||!0,errorOnExist:e.errorOnExist||!1,filter:e.filter||filter,force:e.force||!0,preserveTimestamps:e.preserveTimestamps||!0,recursive:e.recursive||!0})))}});