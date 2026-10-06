// Lists every British form (tests/american.mjs) in a subject's data files or the app's code, by file and line, comments left out.
// Run: node tools/american-check.mjs <subject>   or   node tools/american-check.mjs app
import { readFile, readdir } from 'node:fs/promises';
import { britishIn } from '../tests/american.mjs';

const which = process.argv[2];
if (!which) { console.error('usage: node tools/american-check.mjs <subject> | app'); process.exit(1); }
const dirs = which === 'app' ? ['public/app/', 'public/app/lessons/'] : [`public/subjects/${which}/`];
let total = 0;
for (const dir of dirs) {
  for (const name of (await readdir(new URL(`../${dir}`, import.meta.url))).filter(n => n.endsWith('.js')).sort()) {
    const lines = (await readFile(new URL(`../${dir}${name}`, import.meta.url), 'utf8')).split('\n');
    lines.forEach((line, i) => {
      if (/^\s*\/\//.test(line)) return;
      // only the text inside quotes: field names such as neighbour: are code, never shown
      const strings = [...line.matchAll(/'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)"|`([^`]*)`/g)].map(m => m[1] ?? m[2] ?? m[3]).join(' ');
      const found = britishIn(strings);
      if (found.length) { total++; console.log(`${dir}${name}:${i + 1}: ${found.join(', ')}`); }
    });
  }
}
console.log(total ? `${total} lines with British forms` : 'no British forms');
