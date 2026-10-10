// The design records of the build-subject skill (~/.claude/skills/build-subject): docs/subjects/<id>/design.md, one per subject.
// A record opens with its machine-readable part between two lines of three dashes, as JSON; the gates' reasoning follows in prose.
// Read here once, into { [subjectId]: record } or { [subjectId]: { error } }, for V69 (rules-design.mjs).
import { readdir, readFile } from 'node:fs/promises';

export const RECORD_FILE = 'design.md';

// The JSON between the first two "---" lines of a record, or an error saying why it cannot be read.
export function parseRecord(text) {
  const lines = text.split('\n');
  if (lines[0].trim() !== '---') return { error: 'does not open with a line of three dashes' };
  const end = lines.indexOf('---', 1);
  if (end < 0) return { error: 'has no closing line of three dashes' };
  try { return { record: JSON.parse(lines.slice(1, end).join('\n')) }; }
  catch (error) { return { error: `its opening part is not JSON (${error.message})` }; }
}

export async function collectDesigns(designsDir) {
  let ids;
  try { ids = (await readdir(designsDir, { withFileTypes: true })).filter(e => e.isDirectory()).map(e => e.name); }
  catch { return {}; }
  const out = {};
  for (const id of ids) {
    let text;
    try { text = await readFile(new URL(`${id}/${RECORD_FILE}`, designsDir), 'utf8'); }
    catch { continue; }
    const parsed = parseRecord(text);
    out[id] = parsed.error ? { error: parsed.error } : parsed.record;
  }
  return out;
}
