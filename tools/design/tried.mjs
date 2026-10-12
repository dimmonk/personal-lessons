// node tools/design/tried.mjs <subject> <lesson> --owner "<their words>"
// node tools/design/tried.mjs <subject> <lesson> --stand-in reviews/<lesson>.md --waived "<the owner's words for going on>"
// Writes one lesson's entry into the design record's `tried` (build-subject skill, gates 6 and 7). An owner's try replaces a stand-in's.
import { readRecord, writeRecord, today } from './record.mjs';

function parse(argv) {
  const [subject, lesson, ...rest] = argv;
  const opt = {};
  for (let i = 0; i < rest.length; i += 2) opt[rest[i]] = rest[i + 1];
  if (!subject || !lesson) return null;
  if (opt['--owner']) return { subject, lesson, entry: { by: 'owner', date: today(), words: opt['--owner'] } };
  if (opt['--stand-in'] && opt['--waived']) return { subject, lesson, entry: { by: 'stand-in', date: today(), review: opt['--stand-in'], waived: opt['--waived'] } };
  return null;
}

async function main(argv) {
  const args = parse(argv);
  if (!args) throw new Error('usage: node tools/design/tried.mjs <subject> <lesson> --owner "<words>" | --stand-in reviews/<lesson>.md --waived "<words>"');
  const { record, prose } = await readRecord(args.subject);
  if (!record.lessons || !(args.lesson in record.lessons)) throw new Error(`the record of ${args.subject} has no block for lesson ${args.lesson}`);
  await writeRecord(args.subject, { ...record, tried: { ...record.tried, [args.lesson]: args.entry } }, prose);
  console.log(`${args.subject}/${args.lesson}: tried by ${args.entry.by} on ${args.entry.date}`);
}

main(process.argv.slice(2)).catch(error => { console.error(error.message); process.exit(1); });
