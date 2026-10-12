// node tools/design/approve.mjs <subject> goal --show
//   prints the one screen the owner signs off at gate 2: the paragraph, the list of what the subject teaches, the sentence, the test,
//   and "What you asked for that this design drops" (every ask not covered, not dropped, with no word from them yet). Paste it as is.
// node tools/design/approve.mjs <subject> practice --show
//   prints the practice, the three lines the owner signs off at gate 3.
// node tools/design/approve.mjs <subject> goal|practice --words "<the owner's reply, quoted>" --where "<where they said it>"
//   records the approval: the date, their words, where, the fingerprint of the exact screen as the record holds it now, and (goal) the
//   ids shown as dropped. A later change to that screen makes V69 ask again. The words are theirs, quoted; the tool cannot check that,
//   and V69 refuses the same words on two subjects.
import { fingerprint } from '../../tests/lessons/fingerprint.mjs';
import { approvedText, screenText, dropsToShow, GOAL_SCREEN_MAX_CHARS, PRACTICE_MAX_CHARS } from '../../tests/lessons/design-shape.mjs';
import { readRecord, writeRecord, ownerWordFrom } from './record.mjs';

const FIELDS = ['goal', 'practice'];

async function main([subject, field, ...rest]) {
  if (!subject || !FIELDS.includes(field)) throw new Error('usage: node tools/design/approve.mjs <subject> goal|practice --show | --words "<the owner\'s words>" --where "<where>"');
  const { record, prose } = await readRecord(subject);
  if (field === 'goal' && !(record.goal && Array.isArray(record.topics) && record.endResult && record.test)) throw new Error(`the record of ${subject} has not reached gate 2 (goal, topics, endResult, test)`);
  if (field === 'practice' && !record.practice) throw new Error(`the record of ${subject} has no practice to approve`);
  const n = field === 'goal' ? screenText(record, 'goal').length : record.practice.length, max = field === 'goal' ? GOAL_SCREEN_MAX_CHARS : PRACTICE_MAX_CHARS;
  if (n > max) throw new Error(`the ${field} screen is ${n} characters; the owner reads one screen, under ${max}: shorten it before asking`);
  if (rest[0] === '--show') { console.log(screenText(record, field)); return; }
  const word = ownerWordFrom(rest);
  if (!word) throw new Error('an approval needs --words "<the owner\'s reply, quoted>" and --where "<where they said it>"');
  const { rest: _, ...w } = word;
  const entry = { ...w, fp: fingerprint(approvedText(record, field)), ...(field === 'goal' ? { shown: dropsToShow(record).map(d => d.id) } : {}) };
  await writeRecord(subject, { ...record, approved: { ...record.approved, [field]: entry } }, prose);
  console.log(`${subject}: ${field} approved on ${entry.date}, "${entry.words}" (${entry.where})${field === 'goal' ? `; shown as dropped: ${entry.shown.join(', ') || 'nothing'}` : ''}`);
}

main(process.argv.slice(2)).catch(error => { console.error(error.message); process.exit(1); });
