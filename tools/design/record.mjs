// Read and write the JSON that opens a design record (docs/subjects/<id>/design.md), leaving the prose after it untouched.
import { readFile, writeFile } from 'node:fs/promises';
import { parseRecord } from '../../tests/lessons/designs.mjs';

export const REPO = new URL('../../', import.meta.url);
export const recordUrl = subject => new URL(`docs/subjects/${subject}/design.md`, REPO);
export const today = () => new Date().toISOString().slice(0, 10);

export async function readRecord(subject) {
  const text = await readFile(recordUrl(subject), 'utf8');
  const parsed = parseRecord(text);
  if (parsed.error) throw new Error(`docs/subjects/${subject}/design.md ${parsed.error}`);
  const lines = text.split('\n');
  return { record: parsed.record, prose: lines.slice(lines.indexOf('---', 1) + 1).join('\n') };
}

export async function writeRecord(subject, record, prose) {
  await writeFile(recordUrl(subject), `---\n${JSON.stringify(record, null, 2)}\n---\n${prose}`);
}
