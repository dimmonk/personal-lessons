// Section 8, revisions and files: V29, V45, V46, V47, V48, V58.
//
// V48 reads a committed list of the units still at standard 0, tests/lessons/standard0-units.json:
//     { "units": ["psychology/u1", "psychology/u3"] }
// "units" holds "<subject>/<unit>" ids in any order. The list may only shrink: every entry must be in the list at the last
// commit, every unit registered at standard 0 must be listed, and a unit rebuilt to standard 1 must be removed from it.
// A project with nothing at standard 0 keeps { "units": [] }.
import { unitRule, subjectRule, siteRule, heldRule, checkEach } from './rule.mjs';
import { lockEntries } from './fingerprint.mjs';
import { anchorProblems } from './lockfile.mjs';
import { unique } from './text.mjs';

const FILE_LINE_LIMIT = 800;
// The old data of a subject whose units are not all rebuilt is registered whole by FC.legacy, in the file the split of F6 step 2 made
// from it. It is deleted with the last unit that needs it (F5), is not split, and so is not held to the limit.
const isLegacyData = path => /^subjects\/[^/]+\/standard0\.js$/.test(path);

/* ---------- V45: revisions are real fields with a history ---------- */
function historyProblems(history, rev, what) {
  if (!Array.isArray(history) || history.length !== rev) return [`${what} must hold exactly one entry for every revision from 1 to ${rev}`];
  return history.flatMap((h, i) => [
    ...(h.rev === i + 1 ? [] : [`${what} entry ${i + 1} has rev ${h.rev}`]),
    ...(h.date && h.change ? [] : [`${what} entry ${i + 1} needs a date and a change`])]);
}

function revisionProblems(record, history, what, maxStandard) {
  return [
    ...(Number.isInteger(record.rev) && record.rev >= 1 ? [] : [`${what} rev must be an integer of at least 1`]),
    ...(Number.isInteger(record.rev) ? historyProblems(history, record.rev, `${what} history`) : []),
    ...(Number.isInteger(record.standard) && record.standard <= maxStandard ? [] : [`${what} standard must not be above the standard version ${maxStandard}`])];
}

function liveProblems(unit) {
  if (unit.status !== 'live') return [];
  const cold = unit.build.signoff.coldRead;
  if (!cold) return ['status live needs build.signoff.coldRead'];
  const since = unit.build.signoff.since || [];
  const covered = Array.from({ length: Math.max(unit.rev - cold.rev, 0) }, (_, i) => cold.rev + 1 + i).every(r => since.some(s => s.rev === r));
  return [
    ...(['novice', 'near-novice'].includes(cold.reader) ? [] : ['the cold read must be by a novice or near-novice']),
    ...(cold.date ? [] : ['the cold read needs a date']),
    ...(cold.restated === true && cold.drillAttempted === true ? [] : ['the cold read must record that every card was restated and the drill attempted']),
    ...(cold.rev === unit.rev || (cold.rev < unit.rev && covered) ? [] : ['the cold read is of an earlier revision and signoff.since does not list every later one'])];
}

export const V45_unit = unitRule('V45', (u, check) => {
  checkEach(check, 'unit', [...revisionProblems(u.unit, u.unit.build.history, 'unit', u.data.standard), ...liveProblems(u.unit)]);
});

export const V45_subject = subjectRule('V45', (s, check) => {
  checkEach(check, 'subject', revisionProblems(s.meta, s.meta.history, 'subject', s.data.standard));
  const stale = Object.values(s.subject.units).filter(u => u.standard === 0 && u.rev !== 0);
  checkEach(check, 'units not yet rebuilt', stale.map(u => `${u.id}: a unit of standard 0 has rev 0`));
});

/* ---------- V46: the lock ---------- */
export const V46 = siteRule('V46', (input, check) => {
  const { data, lock, committedLock } = input;
  const now = lockEntries(data);
  const empty = Object.keys(now.subjects).length === 0;
  if (!lock) { check(empty, 'there is no lock file; run node tests/lessons/lock.mjs'); return; }
  check(lock.standard === now.standard, `the lock says standard ${lock.standard}, the app says ${now.standard}`);
  for (const group of ['subjects', 'units']) {
    for (const [id, mine] of Object.entries(now[group])) {
      const theirs = (lock[group] || {})[id];
      check(Boolean(theirs), `${id}: no lock entry; run node tests/lessons/lock.mjs`);
      if (!theirs) continue;
      check(mine.fp === theirs.fp, `${id}: content differs from the lock; if it has been deployed raise its rev, then run node tests/lessons/lock.mjs`);
      check(mine.rev === theirs.rev, `${id}: rev is ${mine.rev} but the lock says ${theirs.rev}; run node tests/lessons/lock.mjs`);
    }
    Object.keys(lock[group] || {}).filter(id => !now[group][id]).forEach(id => check(false, `${id} is in the lock and not in the app`));
  }
  checkEach(check, 'history', anchorProblems(now, committedLock));
});

/* ---------- V47: every script is listed, and no file is too long ---------- */
const sameSet = (a, b) => a.length === b.length && a.every(x => b.includes(x));
const missingFrom = (names, list) => names.filter(n => !list.includes(n));

export const V47 = siteRule('V47', (input, check) => {
  const { files, indexScripts, swShell } = input.site;
  const names = files.map(f => f.path);
  files.filter(f => !isLegacyData(f.path)).forEach(f => check(f.lines <= FILE_LINE_LIMIT, `${f.path} has ${f.lines} lines, over the limit of ${FILE_LINE_LIMIT}; add another file`));
  for (const [what, list] of [['index.html script tags', indexScripts], ['sw.js SHELL', swShell]]) {
    if (list === null) continue;
    checkEach(check, what, [
      ...missingFrom(names, list).map(n => `${n} is on disk and not in the ${what}`),
      ...missingFrom(list, names).map(n => `${n} is in the ${what} and not on disk`)]);
  }
  if (indexScripts !== null && swShell !== null) check(sameSet(unique(indexScripts), unique(swShell)), 'index.html and sw.js list different scripts');
});

/* ---------- V48: the standard-0 list only shrinks, and units assume only standard-1 units ---------- */
const standardOf = (subject, unitId) => subject.units[unitId] ? subject.units[unitId].standard : null;

export const V48_unit = unitRule('V48', (u, check) => {
  for (const id of u.unit.assumes) {
    const standard = standardOf(u.subject, id);
    // a unit with no record at all is only a bank of cases (the exemplar's Unit One sample); the rule judges registered units
    check(standard === null || standard >= 1, `assumes ${id}, which is registered at standard ${standard}`);
  }
});

function standard0Problems(data, list, committed) {
  const registered = Object.entries(data.subjects).flatMap(([sid, s]) => Object.entries(s.units).map(([uid, unit]) => [`${sid}/${uid}`, unit.standard]));
  const listed = new Set(list.units);
  return [
    ...registered.filter(([id, standard]) => standard === 0 && !listed.has(id)).map(([id]) => `${id} is at standard 0 and is not in the committed list`),
    ...registered.filter(([id, standard]) => standard >= 1 && listed.has(id)).map(([id]) => `${id} is at standard 1 but is still in the list; remove it`),
    ...(committed ? list.units.filter(id => !committed.units.includes(id)).map(id => `${id} was added to the list; the list may only shrink`) : [])
  ];
}

export const V48_site = siteRule('V48', (input, check) => {
  if (!input.standard0) return;
  checkEach(check, 'standard-0 list', standard0Problems(input.data, input.standard0, input.committedStandard0));
});

/* ---------- V29: the validator holds no limit on how long anything may be ---------- */
// The patterns are assembled from pieces so that this file does not contain what it looks for.
const COUNTED = ['wor' + 'd', 'sen' + 'tence', 'para' + 'graph', 'ch' + 'ar', 'li' + 'ne'].join('|');
const UPPER_BOUND_ON_COUNT = new RegExp(`(?:${COUNTED})\\w*\\s*(?:\\.length|\\.size|\\.count)\\s*<=?\\s*\\d`, 'i');
const MAX_SETTING = new RegExp(`\\b[Mm]` + `ax\\w*(?:${COUNTED})s?\\b|\\b(?:${COUNTED})s?\\w*[Mm]` + `ax\\b`);
const LIMIT_PATTERNS = [UPPER_BOUND_ON_COUNT, MAX_SETTING];

export const V29 = siteRule('V29', (input, check) => {
  for (const [name, source] of Object.entries(input.validatorSources)) {
    source.split('\n').forEach((text, i) => check(!LIMIT_PATTERNS.some(re => re.test(text)), `${name}:${i + 1} holds a limit on the length of something: ${text.trim().slice(0, 60)}`));
  }
});

export const V58 = heldRule('V58');

export const RULES_REVISIONS = [V29, V45_unit, V45_subject, V46, V47, V48_unit, V48_site, V58];
