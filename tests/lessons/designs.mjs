// The design records of the build-subject skill (.claude/skills/build-subject/SKILL.md, "The record"): docs/subjects/<id>/design.md, one per
// subject. A record opens with its machine-readable part between two lines of three dashes, as JSON; the gates' reasoning follows in prose.
// Read here once, into { [subjectId]: record } or { [subjectId]: { error } }, for V69 (rules-design.mjs), V71 and V80 (rules-shape.mjs).
// Beside the records: the verdict line of every stand-in review (docs/subjects/<id>/reviews/<lesson>.md) and the finding ids of every
// research note (docs/research/<note>.md), which V69 reads a record's `tried` and `principles` against.
import { readdir, readFile } from 'node:fs/promises';

export const RECORD_FILE = 'design.md';
export const REVIEWS_DIR = 'reviews';
export const VERDICTS = ['passes', 'fails'];
const VERDICT_LINE = /^Verdict: (passes|fails)\s*$/;
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

// The verdict a review file opens with: 'passes', 'fails', or 'unreadable' when its first line is neither.
export function reviewVerdict(text) {
  const m = text.split('\n')[0].match(VERDICT_LINE);
  return m ? m[1] : 'unreadable';
}

export const findingIds = text => [...text.matchAll(FINDING)].map(m => m[1]);

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

// { [subjectId]: { 'reviews/l3.md': 'passes' | 'fails' | 'unreadable' } }
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

// { [note]: ['SC1', 'SC2', ...] } for every docs/research/<note>.md
export async function collectResearch(researchDir) {
  let names;
  try { names = (await readdir(researchDir)).filter(n => n.endsWith('.md')); }
  catch { return {}; }
  const entries = await Promise.all(names.map(async n => [n.replace(/\.md$/, ''), findingIds(await readFile(new URL(n, researchDir), 'utf8'))]));
  return Object.fromEntries(entries);
}
