// Runs the validator rules marked ● in section 8 of docs/lesson-standard.md on the exemplar,
// and checks or writes the revision lock (section 13). Rule numbers are the standard's.
// In the app these rules live in tests/validate-data.mjs, each with a seeded-fault fixture; this is the exemplar's own copy.
// Run: node tools/check-exemplar.mjs            (check)
//      node tools/check-exemplar.mjs --write-lock
// A different data folder can be checked with --root=<dir> (used to seed faults in a scratch copy).
import { readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { pathToFileURL, fileURLToPath } from 'node:url';
import { loadSubject, unitView, FILES, ROOT } from './load.mjs';
import { checkVocab } from './check-vocab.mjs';
import { checkStructure } from './check-structure.mjs';

const SUBJECT = 'psychology', UNIT = 'u2';
const rootArg = process.argv.find(a => a.startsWith('--root='));
const base = rootArg ? pathToFileURL(rootArg.slice(7).replace(/\/?$/, '/')) : new URL('../', import.meta.url);
const LOCK = new URL('tests/lessons.lock.json', base);
const subject = await loadSubject(SUBJECT, FILES, new URL('public/', base));
const v = unitView(subject, UNIT);
const { unit, key } = v;
const failures = [];
let checks = 0;
const check = (ok, rule, msg) => { checks++; if (!ok) failures.push(`${rule}: ${msg}`); };

const cardOrder = unit.parts.flatMap(p => [...p.cards, ...(p.close || [])]);
const cards = cardOrder.map(id => v.cards[id]).filter(Boolean);
check(cards.length === cardOrder.length, 'V26', 'a part lists a card that does not exist');
const allCases = Object.values(v.cases);
// everything a learner can read that an author typed: cards, cases, the unit record's prose, the earlier-unit bank, specimens, the subject record
const unitText = { subtitle: unit.subtitle, ledger: unit.ledger.map(l => ({ shared: l.shared, rule: l.rule, test: l.test })), parts: unit.parts.map(p => p.title), add: unit.drill.add };
const scanned = [...cards.map(c => [c.id, c]), ...allCases.map(c => [c.id, c]), ['unit', unitText],
  ...Object.values(v.earlier).flatMap(bank => Object.values(bank)).map(c => [c.id, c]), ...subject.specimens.map(c => [c.id, c]),
  ['subject', { blurb: subject.meta.blurb, limits: subject.meta.limits }]];

const ctx = { subject, v, check, cards, cardOrder, allCases, scanned };
checkVocab(ctx);
checkStructure(ctx);

/* V29: the validator itself contains no rule about how long anything may be */
for (const file of ['check-vocab.mjs', 'check-structure.mjs']) {
  const source = await readFile(new URL(file, import.meta.url), 'utf8');
  check(!/(word|sentence|paragraph|char|line)\w*\)?\.(length|size)\s*<=?\s*\d|max(Words|Cards|Length|Chars|Lines)/i.test(source), 'V29', `${file} holds a limit on the length of something`);
}
/* V47 (the part that applies here): no data file over 800 lines */
for (const file of FILES) check((await readFile(new URL(file, new URL('public/', base)), 'utf8')).split('\n').length <= 800, 'V47', `${file} is over 800 lines; add another file`);

/* V45: revisions are real integer fields, each with a line of history; "live" needs a cold read of this revision */
const historyOk = (history, rev) => Array.isArray(history) && history.length === rev && history.every((h, i) => h.rev === i + 1 && h.date && h.change);
check(Number.isInteger(unit.rev) && unit.rev >= 1 && Number.isInteger(subject.meta.rev) && subject.meta.rev >= 1, 'V45', 'unit.rev and subject.rev must be integers of at least 1');
check(historyOk(unit.build.history, unit.rev) && historyOk(subject.meta.history, subject.meta.rev), 'V45', 'history must hold exactly one entry, with a date and a change, for every revision from 1 to the current one');
check(Number.isInteger(unit.standard) && unit.standard <= 1, 'V45', 'unit.standard must not be above the standard version');
const cold = unit.build.signoff.coldRead;
check(unit.status !== 'live' || (cold && ['novice', 'near-novice'].includes(cold.reader) && cold.date && cold.restated === true && cold.drillAttempted === true
  && (cold.rev === unit.rev || (unit.build.signoff.since || []).length === unit.rev - cold.rev)), 'V45', 'status live needs a dated cold read of this revision by a novice or near-novice, with every card restated and the drill attempted');

/* V46: the lock (section 13, R3 and R5) */
const canonical = x => Array.isArray(x) ? x.map(canonical) : x && typeof x === 'object'
  ? Object.fromEntries(Object.keys(x).sort().map(k => [k, canonical(x[k])])) : x;
const fingerprint = x => 'sha256:' + createHash('sha256').update(JSON.stringify(canonical(x))).digest('hex');
const byId = list => Object.fromEntries(list.map(x => [x.id, x]));
const order = subject.meta.units, upTo = order.slice(0, order.indexOf(UNIT) + 1);
const known = id => upTo.includes(key.outcomes.find(o => o.id === id).unit);
// R3: what this unit prints, and nothing else. Cards and cases are keyed by id, so file order cannot matter.
const { rev: _r, status: _s, build: _b, ...unitSeen } = unit;
const keySlice = {
  outcomes: byId(key.outcomes.filter(o => unit.teaches.outcomes.includes(o.id))),
  terms: byId((key.terms || []).filter(t => unit.teaches.terms.includes(t.id))),
  taught: v.unitSteps(),
  assumed: v.assumedSteps.map(s => ({ code: s.code, q: s.q, options: s.options.map(o => ({ id: o.id, n: o.n, when: o.when, keeps: o.keeps.filter(known) })) }))
};
const { rev: _sr, history: _sh, ...subjectSeen } = subject.meta;
const now = { standard: 1,
  subjects: { [SUBJECT]: { rev: subject.meta.rev, fp: fingerprint({ meta: subjectSeen, key, specimens: byId(subject.specimens) }) } },
  units: { [`${SUBJECT}/${UNIT}`]: { rev: unit.rev, standard: unit.standard, fp: fingerprint({ unit: unitSeen, cards: byId(cards), cases: byId(allCases), key: keySlice }) } } };
const lock = JSON.parse(await readFile(LOCK, 'utf8').catch(() => 'null'));
// R5: the lock is anchored to history. The lock in the last commit binds every entry that has been deployed.
let committed = null;
try { committed = JSON.parse(execFileSync('git', ['show', 'HEAD:./tests/lessons.lock.json'], { cwd: fileURLToPath(base), stdio: ['ignore', 'pipe', 'ignore'] }).toString()); } catch (e) { committed = null; }
const entries = [['subjects', SUBJECT], ['units', `${SUBJECT}/${UNIT}`]];
const anchored = entries.flatMap(([group, id]) => {
  const mine = now[group][id], theirs = committed && committed[group] && committed[group][id];
  if (!theirs || !theirs.deployed) return [];                 // not yet in front of a learner: edits stay at the same revision (R1)
  if (mine.fp !== theirs.fp && !(mine.rev > theirs.rev)) return [`${id}: content changed since it was deployed but rev is still ${mine.rev}; raise it first`];
  if (mine.fp === theirs.fp && mine.rev !== theirs.rev) return [`${id}: rev changed (${theirs.rev} -> ${mine.rev}) but content did not`];
  return [];
});
if (process.argv.includes('--write-lock')) {
  if (anchored.length) { console.error('lock not written:'); anchored.forEach(r => console.error('  - ' + r)); process.exit(1); }
  for (const [group, id] of entries) { const old = (committed && committed[group] && committed[group][id]) || (lock && lock[group] && lock[group][id]); if (old && old.deployed) now[group][id].deployed = old.deployed; }
  await writeFile(LOCK, JSON.stringify(now, null, 2) + '\n');
  console.log('lock written');
} else {
  anchored.forEach(r => check(false, 'V46', r));
  for (const [group, id] of entries) {
    const mine = now[group][id], theirs = lock && lock[group] && lock[group][id];
    check(!!theirs, 'V46', `${id}: no lock entry; run with --write-lock`);
    if (!theirs) continue;
    check(mine.fp === theirs.fp, 'V46', `${id}: content differs from the lock; if it has been deployed raise its rev, then run with --write-lock`);
    check(mine.rev === theirs.rev, 'V46', `${id}: rev is ${mine.rev} but the lock says ${theirs.rev}; run with --write-lock`);
  }
  if (committed) for (const group of ['subjects', 'units']) Object.keys(committed[group] || {}).forEach(id => check(!!(lock && lock[group] && lock[group][id]), 'V46', `${id} was in the committed lock and has disappeared`));
}

if (failures.length) { console.error(`${failures.length} of ${checks} checks failed:`); failures.forEach(f => console.error('  - ' + f)); process.exit(1); }
console.log(`${checks} checks passed (${cards.length} cards, ${allCases.length} cases, ${subject.specimens.length} specimens)`);
