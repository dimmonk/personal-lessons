// node tools/design/asked.mjs <subject> <item> --keep --words "<the owner's words>" --where "<where>"   the owner says keep it (the design still places it)
// node tools/design/asked.mjs <subject> <item> --drop --words "<the owner's words>" --where "<where>"   the owner drops it
// node tools/design/asked.mjs <subject> <item> --kept "<topic>" ["<topic>" ...]                          the design places it: the topics that cover it
// Records one thing the owner asked the subject to teach (build-subject skill, gate 0). Only their word drops an ask; V69 holds the
// subject's content while an ask is not dropped and not covered by topics that a part covers.
import { readRecord, writeRecord, ownerWordFrom } from './record.mjs';
import { sameWords } from '../../tests/lessons/design-shape.mjs';

function parse([subject, item, flag, ...rest]) {
  if (!subject || !item) return null;
  if (flag === '--kept') return rest.length ? { subject, item, patch: { kept: rest, dropped: false } } : null;
  const word = ownerWordFrom(rest);
  if (!word) return null;
  const { rest: _, ...owner } = word;
  if (flag === '--keep') return { subject, item, owner, patch: { dropped: false } };
  if (flag === '--drop') return { subject, item, owner, patch: { kept: null, dropped: true } };
  return null;
}
// a new word of the owner's keeps the one it replaces (and all before it) in its previous; the same words again are refused
function withOwner(a, owner) {
  const previous = a.owner ? [...(a.owner.previous || []), (({ previous, ...e }) => e)(a.owner)] : [];
  const earlier = previous.find(e => sameWords(e.words, owner.words)) || (a.owner && sameWords(a.owner.words, owner.words) ? a.owner : null);
  if (earlier) throw new Error(`"${owner.words}" is already the owner's word on "${a.id}" (${earlier.date})`);
  return { ...owner, previous };
}

async function main(argv) {
  const args = parse(argv);
  if (!args) throw new Error('usage: node tools/design/asked.mjs <subject> <item> --keep|--drop --words "<words>" --where "<where>" | --kept "<topic>" ...');
  const { record, prose } = await readRecord(args.subject);
  const asked = record.asked || [];
  if (!asked.some(a => a.id === args.item)) throw new Error(`the record of ${args.subject} has no asked item "${args.item}" (it has: ${asked.map(a => a.id).join(', ') || 'none'})`);
  if (args.patch.kept) {
    const missing = args.patch.kept.filter(t => !(record.topics || []).includes(t));
    if (missing.length) throw new Error(`not on ${args.subject}'s topics list: ${missing.map(t => `"${t}"`).join(', ')}`);
  }
  await writeRecord(args.subject, { ...record, asked: asked.map(a => a.id === args.item ? { ...a, ...args.patch, ...(args.owner ? { owner: withOwner(a, args.owner) } : {}) } : a) }, prose);
  console.log(`${args.subject}: "${args.item}" ${args.patch.kept ? `covered by ${args.patch.kept.length} topic(s)` : args.patch.dropped ? 'dropped on the owner\'s word' : 'the owner says keep; the design places it'}`);
}

main(process.argv.slice(2)).catch(error => { console.error(error.message); process.exit(1); });
