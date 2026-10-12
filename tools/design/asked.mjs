// node tools/design/asked.mjs <subject> <item> --keep "<the owner's words>"      the owner says keep it; the design still has to place it in a part
// node tools/design/asked.mjs <subject> <item> --drop "<the owner's words>"      the owner drops it
// node tools/design/asked.mjs <subject> <item> --kept <partId>                   the design places it in a part
// Records one thing the owner asked the subject to teach (build-subject skill, gate 0). Nothing but their word drops an ask, and V69
// holds the subject's content while an ask is in no part and not dropped.
import { readRecord, writeRecord, today } from './record.mjs';

function parse([subject, item, flag, value]) {
  if (!subject || !item || !value) return null;
  if (flag === '--keep') return { subject, item, patch: { owner: { date: today(), words: value }, dropped: false } };
  if (flag === '--drop') return { subject, item, patch: { owner: { date: today(), words: value }, kept: null, dropped: true } };
  if (flag === '--kept') return { subject, item, patch: { kept: value, dropped: false } };
  return null;
}

async function main(argv) {
  const args = parse(argv);
  if (!args) throw new Error('usage: node tools/design/asked.mjs <subject> <item> --keep "<words>" | --drop "<words>" | --kept <partId>');
  const { record, prose } = await readRecord(args.subject);
  const asked = record.asked || [];
  if (!asked.some(a => a.id === args.item)) throw new Error(`the record of ${args.subject} has no asked item "${args.item}" (it has: ${asked.map(a => a.id).join(', ') || 'none'})`);
  if (args.patch.kept && !(record.parts || []).some(p => p.id === args.patch.kept)) throw new Error(`"${args.patch.kept}" is not a part of ${args.subject}`);
  await writeRecord(args.subject, { ...record, asked: asked.map(a => a.id === args.item ? { ...a, ...args.patch } : a) }, prose);
  console.log(`${args.subject}: "${args.item}" ${args.patch.kept ? `kept by part ${args.patch.kept}` : args.patch.dropped ? 'dropped on the owner\'s word' : 'the owner says keep; no part yet'}`);
}

main(process.argv.slice(2)).catch(error => { console.error(error.message); process.exit(1); });
