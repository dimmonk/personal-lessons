// node tools/vendor/firebase.mjs — writes public/vendor/firebase.js, one ES module with the parts of the Firebase SDK the app uses
// (tools/vendor/firebase-entry.mjs), at the version package.json pins. Run it again after changing that version or the entry.
import { build } from 'esbuild';
import { readFile } from 'node:fs/promises';

const { version } = JSON.parse(await readFile(new URL('../../node_modules/firebase/package.json', import.meta.url), 'utf8'));
await build({
  entryPoints: [new URL('./firebase-entry.mjs', import.meta.url).pathname],
  outfile: new URL('../../public/vendor/firebase.js', import.meta.url).pathname,
  bundle: true, format: 'esm', minify: true, target: 'es2022', legalComments: 'none',
  banner: { js: `// Firebase JS SDK ${version} (Apache-2.0), bundled by tools/vendor/firebase.mjs. Do not edit by hand.` }
});
console.log(`public/vendor/firebase.js: Firebase ${version}`);
