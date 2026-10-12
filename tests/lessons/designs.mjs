// The design records of the build-subject skill (.claude/skills/build-subject/SKILL.md, "The record"): docs/subjects/<id>/design.md, one per
// subject. A record opens with its machine-readable part between two lines of three dashes, as JSON; the gates' reasoning follows in prose.
// Read here once for V69 (rules-design.mjs), V71 and V80 (rules-shape.mjs): the working records, the records committed at HEAD (so a change
// to the owner's asks since the last commit can be seen), every stand-in review's verdict line and reviewer line, and every research note's
// findings with their marks (decides or supports) and what was read.
import { readdir, readFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';

export const RECORD_FILE = 'design.md';
export const REVIEWS_DIR = 'reviews';
export const VERDICTS = ['passes', 'fails'];
export const READ_LEVELS = ['full', 'abstract', 'summary'];
const VERDICT_LINE = /^Verdict: (passes|fails)\s*$/;
const REVIEWER_LINE = /^Reviewer: .+\d{4}-\d\d-\d\d/m;   // who, which model, the date
const DISCLOSURE_LINE = /^Disclosure: /m;
// a finding opens a paragraph as **SC1. …** or **R2. …**
const FINDING = /^\*\*([A-Z]{1,3}\d{1,2})\./gm;

// The JSON between the first two "---" lines of a record, or an error saying why it cannot be read.
export function parseRecord(text) {
  const lines = text.split('\n');
  if (lines[0].trim() !== '---') return { error: 'does not open with a line of three dashes' };
  const end = lines.indexOf('---', 1);
  if (end < 0) return { error: 'has no closing line of three dashes' };
  try { return { record: JSON.parse(lines.slice(1, end).join('\n')) }; }
  catch (error) { return { error: `its opening part is not JSON (${error.message})` }; }
}

// What a review file says: its verdict ('passes' or 'fails'), or why it cannot count: 'unreadable' (no verdict line, or no Reviewer line
// naming who reviewed and what they opened), 'disclosed' (the reviewer saw the record, the block or the evidence, so the review runs again).
export function reviewVerdict(text) {
  const m = text.split('\n')[0].match(VERDICT_LINE);
  if (!m || !REVIEWER_LINE.test(text)) return 'unreadable';
  if (DISCLOSURE_LINE.test(text)) return 'disclosed';
  return m[1];
}

export const findingIds = text => [...text.matchAll(FINDING)].map(m => m[1]);

// how far a finding was read, from its "*Read: …*" line. The clause before the first semicolon says how the finding's own source was
// read; companions come after it. Within that clause the weakest source named sets the level (a finding whose own clause names a full
// text and an abstract was read as an abstract); 'summary' when it names neither a full text nor an abstract.
export function readLevel(paragraph) {
  const m = paragraph.match(/\*Read:([^*]*)\*/);
  if (!m) return null;
  const s = m[1].replace(/\s+/g, ' ').split(';')[0].toLowerCase();
  const full = /full text|full-text|manuscript|read in full|in full/.test(s), abstract = /abstract/.test(s);
  const summary = /summar|press release|review of|secondary|record only|record page|wwc page|not reach|unreachable|not reachable/.test(s);
  if (summary) return 'summary';
  if (abstract) return 'abstract';
  return full ? 'full' : 'summary';
}

// { ids, marks: { [id]: { decides: true | false | null, read: level | null } } } for one note: a finding's paragraph runs to the next finding
export function noteMarks(text) {
  const matches = [...text.matchAll(FINDING)];
  const marks = {};
  matches.forEach((m, i) => {
    const paragraph = text.slice(m.index, i + 1 < matches.length ? matches[i + 1].index : undefined);
    const decides = /\*\*Decides:\*\*/.test(paragraph) ? true : /\*\*Supports\b/.test(paragraph) ? false : null;
    marks[m[1]] = { decides, read: readLevel(paragraph) };
  });
  return { ids: matches.map(m => m[1]), marks };
}

async function readIfPresent(url) {
  try { return await readFile(url, 'utf8'); }
  catch (error) { if (error.code === 'ENOENT') return null; throw error; }
}

async function subjectDirs(designsDir) {
  try { return (await readdir(designsDir, { withFileTypes: true })).filter(e => e.isDirectory()).map(e => e.name); }
  catch { return []; }
}

export async function collectDesigns(designsDir) {
  const out = {};
  for (const id of await subjectDirs(designsDir)) {
    const text = await readIfPresent(new URL(`${id}/${RECORD_FILE}`, designsDir));
    if (text === null) continue;
    const parsed = parseRecord(text);
    out[id] = parsed.error ? { error: parsed.error } : parsed.record;
  }
  return out;
}

// The records as committed at HEAD: { [id]: record } for every record that was committed and parses; a record never committed is absent.
export async function collectCommittedDesigns(designsDir) {
  const out = {};
  for (const id of await subjectDirs(designsDir)) {
    let text;
    try { text = execFileSync('git', ['show', `HEAD:./${id}/${RECORD_FILE}`], { cwd: designsDir, stdio: ['ignore', 'pipe', 'pipe'] }).toString(); }
    catch { continue; }
    const parsed = parseRecord(text);
    if (!parsed.error) out[id] = parsed.record;
  }
  return out;
}

// { [subjectId]: { 'reviews/l3.md': 'passes' | 'fails' | 'disclosed' | 'unreadable' } }
export async function collectReviews(designsDir) {
  const out = {};
  for (const id of await subjectDirs(designsDir)) {
    let names;
    try { names = (await readdir(new URL(`${id}/${REVIEWS_DIR}/`, designsDir))).filter(n => n.endsWith('.md')); }
    catch { continue; }
    const entries = await Promise.all(names.map(async n => [`${REVIEWS_DIR}/${n}`, reviewVerdict(await readFile(new URL(`${id}/${REVIEWS_DIR}/${n}`, designsDir), 'utf8'))]));
    out[id] = Object.fromEntries(entries);
  }
  return out;
}

// { [note]: { ids, marks } } for every docs/research/<note>.md
export async function collectResearch(researchDir) {
  let names;
  try { names = (await readdir(researchDir)).filter(n => n.endsWith('.md')); }
  catch { return {}; }
  const entries = await Promise.all(names.map(async n => [n.replace(/\.md$/, ''), noteMarks(await readFile(new URL(n, researchDir), 'utf8'))]));
  return Object.fromEntries(entries);
}
