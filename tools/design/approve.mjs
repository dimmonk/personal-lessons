// node tools/design/approve.mjs <subject> goal|practice "<the owner's words>"
// Writes the owner's approval into the design record: the date, their words and a fingerprint of the exact text approved (the paragraph with the
// topics list, or the practice), so a later change to that text makes V69 ask for the approval again (build-subject skill, gates 2 and 3).
import { fingerprint } from '../../tests/lessons/fingerprint.mjs';
import { approvedText } from '../../tests/lessons/rules-design.mjs';
import { readRecord, writeRecord, today } from './record.mjs';

const FIELDS = ['goal', 'practice'];

async function main([subject, field, words]) {
  if (!subject || !FIELDS.includes(field) || !words || !words.trim()) throw new Error('usage: node tools/design/approve.mjs <subject> goal|practice "<the owner\'s words>"');
  const { record, prose } = await readRecord(subject);
  if (typeof record[field] !== 'string' || !record[field].trim()) throw new Error(`the record of ${subject} has no ${field} to approve`);
  const approved = { ...record.approved, [field]: { date: today(), words: words.trim(), fp: fingerprint(approvedText(record, field)) } };
  await writeRecord(subject, { ...record, approved }, prose);
  console.log(`${subject}: ${field} approved on ${approved[field].date}, "${approved[field].words}"`);
}

main(process.argv.slice(2)).catch(error => { console.error(error.message); process.exit(1); });
