/**
 * Release notes (ADR-0192): what staff can see of a release, in their words.
 *
 * Two files, one direction of travel, both named by a release line's `notes: { next, history }` in deploy.config.mjs:
 *   - `next` (e.g. release-notes/next.md) collects the notes for the NEXT release. A change that staff can see or feel
 *     adds its bullet in the same commit as the change; a change only developers see adds nothing.
 *   - `history` (e.g. public/release-notes.json) is the history, `[{ revision, date, notes: [..] }]`, newest first. The
 *     app fetches it for System Info and the update banner's "What's new".
 *
 * release-file.mjs `cutRelease` is the only code that moves notes from the first to the second: it cuts the release,
 * puts the bullets under the new revision (or QUIET_RELEASE_NOTE when there are none) and empties next.md, so the
 * history never has a revision the release file does not, and next.md never holds a released note.
 *
 * This module is pure (parse, validate, cut, serialize) plus the two file readers; release-file.mjs writes.
 */
import { readFileSync } from 'node:fs';

/** The one note of a release nobody on staff can see. */
export const QUIET_RELEASE_NOTE = 'Fixes and improvements behind the scenes.';
/** The history entry's keys, in the order it is written. */
export const NOTES_ENTRY_KEYS = Object.freeze(['revision', 'date', 'notes']);
/** The longest a note may be: a note is read at a glance, in a modal, on a phone. */
export const MAX_NOTE_LENGTH = 280;
/** An em-dash is an AI tell in staff-facing copy (the owner's rule), so a note may not carry one. */
const EM_DASH = '—';

/** next.md with no notes: what a cut leaves behind. The comment is the only instruction a writer sees. */
export const NEXT_NOTES_TEMPLATE = [
  '<!--',
  'Staff-facing notes for the NEXT release. One bullet per change a staff member can see or feel, on one line, in plain',
  'words, written in the same commit as the change. A change only developers see adds nothing. No em-dashes.',
  '`npm run deploy` moves these bullets into the release history when it cuts the release, and empties this file',
  '(ADR-0192).',
  '-->',
  '',
].join('\n');

/** @typedef {{ revision: number, date: string, notes: string[] }} NotesEntry */

/** A calendar day, YYYY-MM-DD (the shape; release-file.mjs holds the same date to a real day). */
const ISO_DAY = /^(\d{4})-(\d{2})-(\d{2})$/;

/** @param {unknown} date */
function isCalendarDay(date) {
  const match = typeof date === 'string' ? ISO_DAY.exec(date) : null;
  if (!match) return false;
  const [year, month, day] = [Number(match[1]), Number(match[2]), Number(match[3])];
  const real = new Date(Date.UTC(year, month - 1, day));
  return real.getUTCFullYear() === year && real.getUTCMonth() === month - 1 && real.getUTCDate() === day;
}

/**
 * What is wrong with one note, or null.
 * @param {unknown} note
 * @returns {string | null}
 */
export function noteProblem(note) {
  if (typeof note !== 'string' || note.trim() === '') return 'is not a sentence';
  if (note !== note.trim()) return 'has spaces around it';
  if (note.includes('\n')) return 'runs over more than one line';
  if (note.includes(EM_DASH)) return 'has an em-dash (use a comma, a colon or a new sentence)';
  if (note.length > MAX_NOTE_LENGTH) return `is ${note.length} characters, over the ${MAX_NOTE_LENGTH} a glance can hold`;
  return null;
}

/**
 * What is wrong with a release history: an array of `{ revision, date, notes }`, newest first (strictly descending
 * revisions), each with a real day and at least one valid note.
 * @param {unknown} value
 * @returns {string[]}
 */
export function releaseNotesProblems(value) {
  if (!Array.isArray(value)) return ['is not a JSON array'];
  /** @type {string[]} */
  const problems = [];
  let previous = Infinity;
  value.forEach((entry, index) => {
    const where = `entry ${index}`;
    if (entry === null || typeof entry !== 'object' || Array.isArray(entry)) {
      problems.push(`${where} is not an object`);
      return;
    }
    const keys = Object.keys(entry);
    if (keys.join(',') !== NOTES_ENTRY_KEYS.join(',')) problems.push(`${where} has keys [${keys.join(', ')}], not [${NOTES_ENTRY_KEYS.join(', ')}]`);
    const { revision, date, notes } = entry;
    if (!Number.isSafeInteger(revision) || revision < 1) problems.push(`${where} revision ${JSON.stringify(revision)} is not a positive integer`);
    else if (revision >= previous) problems.push(`${where} revision ${revision} is not below the one before it (${previous}): newest first, one entry per release`);
    if (Number.isSafeInteger(revision)) previous = revision;
    if (!isCalendarDay(date)) problems.push(`${where} date ${JSON.stringify(date)} is not a YYYY-MM-DD day`);
    if (!Array.isArray(notes) || notes.length === 0) {
      problems.push(`${where} has no notes`);
      return;
    }
    notes.forEach((note, i) => {
      const problem = noteProblem(note);
      if (problem) problems.push(`${where} note ${i + 1} ${problem}`);
    });
  });
  return problems;
}

/**
 * The release history, parsed and valid, or the reasons it is not.
 * @param {string} file
 * @returns {{ history: NotesEntry[] } | { problems: string[] }}
 */
export function readReleaseNotesFile(file) {
  let parsed;
  try { parsed = JSON.parse(readFileSync(file, 'utf8')); } catch (error) {
    return { problems: [`unreadable (${/** @type {Error} */ (error).message})`] };
  }
  const problems = releaseNotesProblems(parsed);
  return problems.length > 0 ? { problems } : { history: parsed };
}

/** The bytes of the history, in the shape `npm run deploy` commits. @param {NotesEntry[]} history */
export const serializeReleaseNotes = (history) => `${JSON.stringify(history, null, 2)}\n`;

/**
 * The bullets of next.md, or the reasons the file cannot be read: a line that is neither a `- ` bullet, blank nor
 * inside the comment would be lost at the cut, so it is a problem, not an omission.
 * @param {string} text
 * @returns {{ notes: string[] } | { problems: string[] }}
 */
export function parseNextNotes(text) {
  const body = text.replace(/<!--[\s\S]*?-->/g, '');
  /** @type {string[]} */
  const notes = [];
  /** @type {string[]} */
  const problems = [];
  for (const line of body.split('\n')) {
    if (line.trim() === '') continue;
    const bullet = /^- (\S.*)$/.exec(line.trimEnd());
    if (!bullet) {
      problems.push(`"${line.trim().slice(0, 60)}" is not a "- " bullet on one line`);
      continue;
    }
    const problem = noteProblem(bullet[1]);
    if (problem) problems.push(`"${bullet[1].slice(0, 60)}" ${problem}`);
    else notes.push(bullet[1]);
  }
  return problems.length > 0 ? { problems } : { notes };
}

/**
 * next.md read from disk: its bullets, or the reasons it is not readable.
 * @param {string} file
 * @returns {{ notes: string[] } | { problems: string[] }}
 */
export function readNextNotesFile(file) {
  let text;
  try { text = readFileSync(file, 'utf8'); } catch (error) {
    return { problems: [`unreadable (${/** @type {Error} */ (error).message})`] };
  }
  return parseNextNotes(text);
}

/**
 * The history with `revision` cut on top of it, carrying `bullets` (or the quiet note when there are none). Throws when
 * the result would not be a valid history (a revision that is not above the newest, a note that is not valid).
 * @param {NotesEntry[]} history @param {{ revision: number, date: string }} release @param {string[]} bullets
 * @returns {NotesEntry[]}
 */
export function cutReleaseNotes(history, release, bullets) {
  const notes = bullets.length > 0 ? bullets : [QUIET_RELEASE_NOTE];
  const cut = [{ revision: release.revision, date: release.date, notes }, ...history];
  const problems = releaseNotesProblems(cut);
  if (problems.length > 0) throw new Error(`cannot cut the notes of release ${release.revision}: ${problems.join('; ')}`);
  return cut;
}
