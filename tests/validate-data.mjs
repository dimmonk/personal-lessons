// Structural checks on the page: every subject's list of parts, the offline shell, and the scripts' global names.
// The shape of the lessons themselves is checked by the lesson validator (tests/validate-lessons.mjs).
// Run: npm run test:data
import { readFile } from 'node:fs/promises';
import { loadApp, scriptList } from './load-app.mjs';

const app = await loadApp({ fixture: true });
const { SUBJECTS } = app;
const failures = [];
let checks = 0;
const check = (ok, msg) => { checks++; if (!ok) failures.push(msg); };

// What the page builds from a subject's record: its parts, its lessons in part order, its sums.
function checkSubject(s) {
  check(new Set(s.parts.map(p => p.id)).size === s.parts.length, `${s.id}: duplicate part ids`);
  check(s.parts.length > 0, `${s.id}: no parts`);
  check(typeof s.endResult === 'string' && s.endResult.length > 10, `${s.id}: no end result`);
  s.lessons.forEach(l => check(l.part === null || s.parts.some(p => p.id === l.part), `${s.id}/${l.id}: part "${l.part}" is not one of the subject's parts`));
  const order = s.lessons.filter(l => l.part !== null).map(l => s.parts.findIndex(p => p.id === l.part));
  check(order.every((x, i) => i === 0 || x >= order[i - 1]), `${s.id}: lessons are not in part order`);
}

check(SUBJECTS.length > 0, 'no subjects registered');
check(new Set(SUBJECTS.map(s => s.id)).size === SUBJECTS.length, 'duplicate subject ids');
SUBJECTS.forEach(checkSubject);

// The service worker must precache everything the page loads, or the app breaks offline.
async function checkOfflineShell() {
  const sw = await readFile(new URL('../public/sw.js', import.meta.url), 'utf8');
  const shell = new Set([...(sw.match(/const SHELL = \[([\s\S]*?)\];/) || ['', ''])[1].matchAll(/'([^']+)'/g)].map(m => m[1]));
  check(shell.size > 0, 'sw.js: SHELL list not found');
  const html = await readFile(new URL('../public/index.html', import.meta.url), 'utf8');
  const styles = [...html.matchAll(/<link rel="stylesheet" href="([^"]+)"/g)].map(m => m[1]);
  for (const path of [...await scriptList(), ...styles]) check(shell.has(path), `sw.js: SHELL is missing ${path}`);
  check(/const CACHE = 'fieldcraft-v\d+'/.test(sw), 'sw.js: no cache name');
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
console.log(`✓ ${checks} data checks passed across ${SUBJECTS.length - 1} subjects (and the test subject)`);
