// Structural checks on every subject's key, specimens, drills and course.
// Run: npm run test:data
import { readFile } from 'node:fs/promises';
import { loadApp, scriptList } from './load-app.mjs';

// Political Ideologies narrows to a family by design, so it is exempt from "isolates exactly one".
const FAMILY_KEYS = new Set(['ideology']);

const app = await loadApp();
const { SUBJECTS, detCandidates, nameOptions, correctSteps, answerOf } = app;
const failures = [];
let checks = 0;
const check = (ok, msg) => { checks++; if (!ok) failures.push(msg); };

const sameSet = (a, b) => a.length === b.length && [...a].sort().join('|') === [...b].sort().join('|');

// Every combination of one option per step.
function* combos(steps, i = 0, acc = {}) {
  if (i === steps.length) { yield { ...acc }; return; }
  for (const opt of steps[i].options) yield* combos(steps, i + 1, { ...acc, [steps[i].code]: opt.id });
}
// Every combination of one acceptable answer per step code.
function* subCombos(sub, codes, i = 0, acc = {}) {
  if (i === codes.length) { yield { ...acc }; return; }
  for (const id of sub[codes[i]] || []) yield* subCombos(sub, codes, i + 1, { ...acc, [codes[i]]: id });
}

function allSteps(d) {
  return [...d.steps, ...(d.stepsByGate ? Object.values(d.stepsByGate).flat() : [])];
}

function checkKeys(s) {
  const ids = new Set(s.outcomes.map(o => o.id));
  check(ids.size === s.outcomes.length, `${s.id}: duplicate outcome ids`);
  for (const step of allSteps(s.determination)) {
    for (const opt of step.options) {
      for (const k of opt.keeps || []) check(ids.has(k), `${s.id}: ${step.code}/${opt.id} keeps unknown outcome "${k}"`);
    }
  }
}

function checkGate(s) {
  const d = s.determination;
  if (!d.gateCode) return;
  const gate = d.steps.find(st => st.code === d.gateCode);
  check(!!gate, `${s.id}: gate step ${d.gateCode} missing from steps`);
  if (!gate) return;
  for (const opt of gate.options) {
    const members = s.outcomes.filter(o => o.group === opt.id).map(o => o.id);
    check(sameSet(opt.keeps || [], members), `${s.id}: gate ${opt.id} keeps [${opt.keeps}] != group members [${members}]`);
    check(Array.isArray(d.stepsByGate[opt.id]), `${s.id}: no stepsByGate for gate option ${opt.id}`);
  }
  for (const o of s.outcomes) check(gate.options.some(g => g.id === o.group), `${s.id}: outcome ${o.id} has no gate group`);
}

function checkIsolation(s) {
  if (FAMILY_KEYS.has(s.id)) return;
  const d = s.determination;
  for (const o of s.outcomes) {
    const steps = [...d.steps, ...(d.gateCode ? d.stepsByGate[o.group] || [] : [])];
    let isolated = false;
    for (const answers of combos(steps)) {
      if (d.gateCode && answers[d.gateCode] !== o.group) continue;
      const live = detCandidates(s, { answers });
      if (live.length === 1 && live[0] === o.id) { isolated = true; break; }
    }
    check(isolated, `${s.id}: no route isolates outcome "${o.id}"`);
  }
}

function checkSpecimens(s) {
  const ids = new Set(s.outcomes.map(o => o.id));
  s.specimens.forEach((sp, n) => {
    const tag = `${s.id}: specimen #${n + 1} (${sp.outcome})`;
    check(ids.has(sp.outcome), `${tag}: unknown outcome`);
    const steps = correctSteps(s, sp);
    const codes = steps.map(st => st.code);
    check(sameSet(Object.keys(sp.sub), codes), `${tag}: sub codes [${Object.keys(sp.sub)}] != route [${codes}]`);
    for (const step of steps) {
      const want = sp.sub[step.code] || [];
      check(want.length > 0, `${tag}: no accepted answer for ${step.code}`);
      for (const id of want) check(step.options.some(o => o.id === id), `${tag}: ${step.code} answer "${id}" is not an option`);
    }
    for (const answers of subCombos(sp.sub, codes)) {
      const live = detCandidates(s, { answers });
      const route = JSON.stringify(answers);
      if (FAMILY_KEYS.has(s.id)) check(live.includes(sp.outcome), `${tag}: route ${route} rules out the answer`);
      else check(live.length === 1 && live[0] === sp.outcome, `${tag}: route ${route} leaves [${live}]`);
      check(nameOptions(s, { answers }).some(o => o.id === sp.outcome), `${tag}: answer missing from Name-it options for ${route}`);
    }
  });
}

function checkQuickDrills(s) {
  for (const q of s.quickDrills) {
    const answers = new Set(q.items.map(it => answerOf(q, it)));
    q.items.forEach((it, n) => check(q.opts.includes(answerOf(q, it)), `${s.id}/${q.key}: item #${n + 1} answer "${answerOf(q, it)}" not in opts`));
    for (const opt of q.opts) check(answers.has(opt), `${s.id}/${q.key}: opt "${opt}" is never an answer`);
  }
}

function checkCourse(s) {
  check(new Set(s.course.map(u => u.id)).size === s.course.length, `${s.id}: duplicate unit ids in the course`);
  const drillKeys = new Set(s.quickDrills.map(q => q.key));
  s.course.forEach((u, n) => {
    const tag = `${s.id}: course unit #${n + 1}`;
    check(u.cards && u.cards.length > 0, `${tag}: no lesson cards`);
    // a rebuilt unit (standard 1) has no old drill: its drill and cards are checked by the lesson validator
    if (u.standard === 1) { check(Number.isInteger(u.rev) && u.rev >= 1, `${tag}: rebuilt unit without a revision`); return; }
    const k = u.drill && u.drill.kind;
    if (k === 'pick') check(drillKeys.has(u.drill.key), `${tag}: drill key "${u.drill.key}" does not exist`);
    else if (k === 'err') check(s.errDrill && s.errDrill.length > 0, `${tag}: err drill but no errDrill items`);
    else check(k === 'det', `${tag}: unknown drill kind "${k}"`);
  });
}

check(SUBJECTS.length > 0, 'no subjects registered');
check(new Set(SUBJECTS.map(s => s.id)).size === SUBJECTS.length, 'duplicate subject ids');
for (const s of SUBJECTS) {
  checkKeys(s); checkGate(s); checkIsolation(s); checkSpecimens(s); checkQuickDrills(s); checkCourse(s);
}

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
