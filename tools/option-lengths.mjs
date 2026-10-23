// How often a lesson's right option is the uniquely longest, or the uniquely shortest, of its choices (three or more options,
// one right). A learner can pick by length without reading: the right option uniquely longest in more than MAX_SHARE of a
// lesson's choices means the wrong ones are too short; uniquely shortest in more than MAX_SHARE, or almost never longest
// (below MIN_LONGEST with MIN_COUNT or more choices), means the length was evened out the other way and still gives it away.
// Run: node tools/option-lengths.mjs <subject>   (prints each lesson's count; exits 1 when a lesson is above MAX_SHARE)
import { loadFromPublic } from '../tests/lessons/load.mjs';

const MAX_SHARE = 0.4;
const MIN_LONGEST = 0.1;
const MIN_COUNT = 10;
const subjectId = process.argv[2];
if (!subjectId) { console.error('usage: node tools/option-lengths.mjs <subject>'); process.exit(2); }
const data = await loadFromPublic(new URL('../public', import.meta.url).pathname);
const subject = (data.subjects || data)[subjectId];
if (!subject) { console.error(`unknown subject "${subjectId}"`); process.exit(2); }

const lessonOf = new Map();
for (const lesson of Object.values(subject.lessons)) {
  const refs = [...lesson.flow.flatMap(step => step.set ? step.set.items.flat() : step.worked ? [step.worked] : []),
    ...(Array.isArray(lesson.check.items) ? lesson.check.items : [])];
  refs.filter(ref => typeof ref === 'string').forEach(id => lessonOf.set(id, lesson.id));
}
const counts = {};
for (const item of Object.values(subject.items)) {
  const lesson = lessonOf.get(item.id) || '(reserve)';
  for (const ask of item.asks || []) {
    if (ask.kind !== 'choose' || !ask.options || ask.options.length < 3) continue;
    const right = ask.options.filter(o => o.ok);
    if (right.length !== 1) continue;
    const lengths = ask.options.map(o => o.text.length);
    const max = Math.max(...lengths);
    const min = Math.min(...lengths);
    const longest = right[0].text.length === max && lengths.filter(n => n === max).length === 1;
    const shortest = right[0].text.length === min && lengths.filter(n => n === min).length === 1;
    const c = counts[lesson] || (counts[lesson] = { longest: 0, shortest: 0, all: 0, ids: [], shortIds: [] });
    c.all += 1;
    if (longest) { c.longest += 1; c.ids.push(item.id); }
    if (shortest) { c.shortest += 1; c.shortIds.push(item.id); }
  }
}
let over = false;
for (const [lesson, c] of Object.entries(counts).sort()) {
  const tooLong = c.longest / c.all > MAX_SHARE;
  const tooShort = c.shortest / c.all > MAX_SHARE;
  const neverLong = c.all >= MIN_COUNT && c.longest / c.all < MIN_LONGEST;
  const bad = tooLong || tooShort || neverLong;
  over = over || bad;
  const why = [tooLong && `longest: ${c.ids.join(', ')}`, tooShort && `shortest: ${c.shortIds.join(', ')}`,
    neverLong && 'almost never the longest: lengthen some right options'].filter(Boolean).join('; ');
  console.log(`${bad ? '✗' : '✓'} ${lesson}: right option longest in ${c.longest}, shortest in ${c.shortest}, of ${c.all}${bad ? ` (${why})` : ''}`);
}
process.exit(over ? 1 : 0);
