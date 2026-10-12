// Read and write the JSON that opens a design record (docs/subjects/<id>/design.md), leaving the prose after it untouched; and the
// shape of an owner's word (their words quoted, the date, where they said them) that every tool writes.
import { readFile, writeFile } from 'node:fs/promises';
import { parseRecord } from '../../tests/lessons/designs.mjs';

export const REPO = new URL('../../', import.meta.url);
export const recordUrl = subject => new URL(`docs/subjects/${subject}/design.md`, REPO);
// today in local time (an evening in New York is not the next day)
export const today = () => new Date().toLocaleDateString('en-CA');

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

// --words "<quoted>" --where "<chat, 2026-10-12>" from an argument list; both are required for anything recorded as the owner's
export function ownerWordFrom(args) {
  const opt = {};
  for (let i = 0; i < args.length; i += 2) opt[args[i]] = args[i + 1];
  if (!opt['--words'] || !opt['--words'].trim() || !opt['--where'] || !opt['--where'].trim()) return null;
  return { date: today(), words: opt['--words'].trim(), where: opt['--where'].trim(), rest: opt };
}
