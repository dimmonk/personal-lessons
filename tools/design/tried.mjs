// node tools/design/tried.mjs <subject> <lesson> --owner --words "<their words>" --where "<where>" --passed yes|no --confused "<…>" --waste "<…>" --come-back yes|no
// node tools/design/tried.mjs <subject> <lesson> --stand-in reviews/<lesson>.md --words "<the owner's words for going on without their try>" --where "<where>"
// Writes one lesson's entry into the design record's `tried` (build-subject skill, gates 6 and 7). An owner's try replaces a stand-in's.
// The stand-in's verdict is read by V69 from the review file's first line; a review with a Disclosure line does not count. The entry
// carries the fingerprint of the lesson as it was tried; once the lesson changes, the entry no longer passes.
import { readRecord, writeRecord, ownerWordFrom, REPO } from './record.mjs';
import { loadFromPublic } from '../../tests/lessons/load.mjs';
import { lessonFingerprint } from '../../tests/lessons/fingerprint.mjs';

const yes = v => v === 'yes' ? true : v === 'no' ? false : null;

function parse([subject, lesson, flag, ...rest]) {
  if (!subject || !lesson) return null;
  if (flag === '--owner') {
    const word = ownerWordFrom(rest);
    if (!word) return null;
    const { rest: opt, ...w } = word;
    const passed = yes(opt['--passed']), comeBack = yes(opt['--come-back']);
    if (passed === null || comeBack === null || !opt['--confused'] || !opt['--waste']) return null;
    return { subject, lesson, entry: { by: 'owner', ...w, passed, confused: opt['--confused'], waste: opt['--waste'], comeBack } };
  }
  if (flag === '--stand-in' && rest[0]) {
    const word = ownerWordFrom(rest.slice(1));
    if (!word) return null;
    const { rest: _, ...waived } = word;
    return { subject, lesson, entry: { by: 'stand-in', date: waived.date, review: rest[0], waived } };
  }
  return null;
}

async function main(argv) {
  const args = parse(argv);
  if (!args) throw new Error('usage: see the head of tools/design/tried.mjs');
  const { record, prose } = await readRecord(args.subject);
  if (!record.lessons || !(args.lesson in record.lessons)) throw new Error(`the record of ${args.subject} has no block for lesson ${args.lesson}`);
  // the entry is for the lesson as it is now: its fingerprint goes with it, and a rewritten lesson is tried again
  const data = await loadFromPublic(new URL('public/', REPO));
  if (!data.subjects[args.subject] || !data.subjects[args.subject].lessons[args.lesson]) throw new Error(`lesson ${args.lesson} of ${args.subject} is not in the app: a try is of a built lesson`);
  const fp = lessonFingerprint(data, args.subject, args.lesson);
  await writeRecord(args.subject, { ...record, tried: { ...record.tried, [args.lesson]: { ...args.entry, fp } } }, prose);
  console.log(`${args.subject}/${args.lesson}: tried by ${args.entry.by} on ${args.entry.date}`);
}

main(process.argv.slice(2)).catch(error => { console.error(error.message); process.exit(1); });
