// Structural checks on the page: every subject's course, the offline shell, and the scripts' global names.
// Run: npm run test:data
import { readFile } from 'node:fs/promises';
import { loadApp, scriptList } from './load-app.mjs';

const app = await loadApp();
const { SUBJECTS } = app;
const failures = [];
let checks = 0;
const check = (ok, msg) => { checks++; if (!ok) failures.push(msg); };

// A subject's key, routes, specimens and drills are checked by the lesson validator (tests/validate-lessons.mjs);
// here, only what the page builds from them.
function checkCourse(s) {
  check(new Set(s.course.map(u => u.id)).size === s.course.length, `${s.id}: duplicate unit ids in the course`);
  s.course.forEach((u, n) => {
    const tag = `${s.id}: course unit #${n + 1}`;
    check(u.cards && u.cards.length > 0, `${tag}: no lesson cards`);
    check(Number.isInteger(u.rev) && u.rev >= 1, `${tag}: no revision`);
  });
}

check(SUBJECTS.length > 0, 'no subjects registered');
check(new Set(SUBJECTS.map(s => s.id)).size === SUBJECTS.length, 'duplicate subject ids');
SUBJECTS.forEach(checkCourse);

// The service worker must precache everything the page loads, or the app breaks offline.
async function checkOfflineShell() {
  const sw = await readFile(new URL('../public/sw.js', import.meta.url), 'utf8');
  const shell = new Set([...(sw.match(/const SHELL = \[([\s\S]*?)\];/) || ['', ''])[1].matchAll(/'([^']+)'/g)].map(m => m[1]));
  check(shell.size > 0, 'sw.js: SHELL list not found');
  const html = await readFile(new URL('../public/index.html', import.meta.url), 'utf8');
  const styles = [...html.matchAll(/<link rel="stylesheet" href="([^"]+)"/g)].map(m => m[1]);
  for (const path of [...await scriptList(), ...styles]) check(shell.has(path), `sw.js: SHELL is missing ${path}`);
}
await checkOfflineShell();

// Scripts share one global scope, so two top-level declarations of one name silently replace each other
// (a later file's paintResults once replaced the search screen's). Every top-level name is declared once.
async function checkUniqueGlobals() {
  const owners = new Map();
  for (const src of (await scriptList()).filter(f => f.startsWith('app/'))) {
    const text = await readFile(new URL(`../public/${src}`, import.meta.url), 'utf8');
    for (const m of text.matchAll(/^(?:async\s+)?(?:function\s+|const\s+|let\s+)([A-Za-z_$][\w$]*)/gm)) {
      check(!owners.has(m[1]), `${src}: "${m[1]}" is already declared in ${owners.get(m[1])}`);
      owners.set(m[1], src);
    }
  }
}
await checkUniqueGlobals();

if (failures.length) {
  console.error(`✗ ${failures.length} of ${checks} data checks failed:`);
  failures.forEach(f => console.error('  - ' + f));
  process.exit(1);
}
console.log(`✓ ${checks} data checks passed across ${SUBJECTS.length} subjects`);
