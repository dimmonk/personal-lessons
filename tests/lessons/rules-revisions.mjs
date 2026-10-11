// Section 26.7, revisions and files: V45 (revisions and history), V46 (the lock), V47 (files), V58 (held findings).
import { subjectRule, siteRule, heldRule, checkEach } from './rule.mjs';
import { lockEntries } from './fingerprint.mjs';
import { anchorProblems } from './lockfile.mjs';
import { unique } from './text.mjs';

const FILE_LINE_LIMIT = 800;

/* ---------- V45: revisions are real fields with a history ---------- */
function historyProblems(history, rev, what) {
  if (!Array.isArray(history) || history.length !== rev) return [`${what} must hold exactly one entry for every revision from 1 to ${rev}`];
  return history.flatMap((h, i) => [
    ...(h.rev === i + 1 ? [] : [`${what} entry ${i + 1} has rev ${h.rev}`]),
    ...(h.date && h.change ? [] : [`${what} entry ${i + 1} needs a date and a change`])]);
}

function revisionProblems(record, what, maxStandard) {
  return [
    ...(Number.isInteger(record.rev) && record.rev >= 1 ? [] : [`${what} rev must be an integer of at least 1`]),
    ...(Number.isInteger(record.rev) ? historyProblems(record.history, record.rev, `${what} history`) : []),
    ...(record.standard === undefined ? [] : Number.isInteger(record.standard) && record.standard >= 2 && record.standard <= maxStandard ? [] : [`${what} standard must be from 2 to the standard version ${maxStandard}`])];
}

// a lesson is live only after the owner's own try of it on a phone: a date and their words
function liveProblems(lesson) {
  if (lesson.status !== 'live') return [];
  const t = lesson.tried;
  if (!t) return ['status live needs tried: the date and the owner\'s words from the try'];
  return [...(t.date ? [] : ['tried needs a date']), ...(t.words && t.words.trim() ? [] : ['tried needs the owner\'s words'])];
}

export const V45 = subjectRule('V45', (s, check) => {
  checkEach(check, 'subject', revisionProblems(s.meta, 'subject', s.data.standard));
  for (const l of s.lessonList) checkEach(check, `lesson ${l.id}`, [...revisionProblems(l, 'lesson', s.data.standard), ...liveProblems(l)]);
});

/* ---------- V46: the lock ---------- */
export const V46 = siteRule('V46', (input, check) => {
  const { data, lock, committedLock } = input;
  const now = lockEntries(data);
  const empty = Object.keys(now.subjects).length === 0;
  if (!lock) { check(empty, 'there is no lock file; run node tests/lessons/lock.mjs'); return; }
  check(lock.standard === now.standard, `the lock says standard ${lock.standard}, the app says ${now.standard}`);
  for (const group of ['subjects', 'lessons']) {
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
  files.forEach(f => check(f.lines <= FILE_LINE_LIMIT, `${f.path} has ${f.lines} lines, over the limit of ${FILE_LINE_LIMIT}; add another file`));
  for (const [what, list] of [['index.html script tags', indexScripts], ['sw.js SHELL', swShell]]) {
    if (list === null) continue;
    checkEach(check, what, [
      ...missingFrom(names, list).map(n => `${n} is on disk and not in the ${what}`),
      ...missingFrom(list, names).map(n => `${n} is in the ${what} and not on disk`)]);
  }
  if (indexScripts !== null && swShell !== null) check(sameSet(unique(indexScripts), unique(swShell)), 'index.html and sw.js list different scripts');
});

export const V58 = heldRule('V58');

export const RULES_REVISIONS = [V45, V46, V47, V58];
