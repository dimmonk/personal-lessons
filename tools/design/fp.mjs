// node tools/design/fp.mjs <subject> [<lesson>]
// Prints the fingerprint a review names on its "Reviewed:" line: of a lesson as it is now (for reviews/<lesson>.md), or of the record's
// design (for reviews/design.md, gate 5). A review counts for that version only.
import { loadFromPublic } from '../../tests/lessons/load.mjs';
import { lessonFingerprint } from '../../tests/lessons/fingerprint.mjs';
import { designFingerprint } from '../../tests/lessons/design-shape.mjs';
import { readRecord, REPO } from './record.mjs';

async function main([subject, lesson]) {
  if (!subject) throw new Error('usage: node tools/design/fp.mjs <subject> [<lesson>]');
  if (!lesson) { const { record } = await readRecord(subject); console.log(designFingerprint(record)); return; }
  const data = await loadFromPublic(new URL('public/', REPO));
  if (!data.subjects[subject] || !data.subjects[subject].lessons[lesson]) throw new Error(`lesson ${lesson} of ${subject} is not in the app`);
  console.log(lessonFingerprint(data, subject, lesson));
}
main(process.argv.slice(2)).catch(error => { console.error(error.message); process.exit(1); });
