// The readers of the design records, run on the real text they will read (docs/research/*.md, docs/subjects/*/reviews/*.md, the records):
// a seeded fault on an injected value proves the rule, not the reader. Run: node tests/design-pure.mjs
import { readFile } from 'node:fs/promises';
import { parseRecord, reviewVerdict, noteMarks, readLevel, collectDesigns, collectReviews, collectResearch } from './lessons/designs.mjs';
import { dropsToShow, screenText, GOAL_SCREEN_MAX_CHARS } from './lessons/design-shape.mjs';

const REPO = new URL('../', import.meta.url);
let checks = 0, failures = [];
const same = (a, b, what) => { checks += 1; if (JSON.stringify(a) !== JSON.stringify(b)) failures.push(`${what}: got ${JSON.stringify(a)}, wanted ${JSON.stringify(b)}`); };
const ok = (c, what) => { checks += 1; if (!c) failures.push(what); };

// read levels: the weakest source named sets the level
same(readLevel('x *Read: full text, pp. 3-4, 2026-10-12.*'), 'full', 'a full text');
same(readLevel('x *Read: full text (Ho) and the abstract (Lain).*'), 'abstract', 'a full text and an abstract');
same(readLevel('x *Read: abstract and secondary summaries.*'), 'summary', 'an abstract and summaries');
same(readLevel('x *Read: the WWC page.*'), 'summary', 'a record page');
same(readLevel('x *Read:\nfull text, broken across lines.*'), 'full', 'a Read line broken across lines');
same(readLevel('x no read line'), null, 'no Read line');

// the real notes: every finding carries a mark and a Read line; the ones the records rely on read as the records say
const research = await collectResearch(new URL('docs/research/', REPO));
for (const [note, { ids, marks }] of Object.entries(research)) {
  ok(ids.length > 0, `${note}: no findings found`);
  ids.forEach(id => { ok(marks[id].decides !== null, `${note} ${id}: no Decides or Supports mark`); ok(marks[id].read !== null, `${note} ${id}: no Read line`); });
}
same(research['scams-judging-and-acting'].marks.SC1, { decides: true, read: 'full' }, 'SC1 as its note reads');
same(research['scams-judging-and-acting'].marks.SC3.read, 'abstract', 'SC3 rests on an abstract too');
same(research['review-after-lessons'].marks.R8.decides, true, 'R8 decides the review');
same(research['reading-other-people'].marks.O1, { decides: true, read: 'full' }, 'O1');

// the real reviews: every verdict is read, and the disclosed ones are seen
const reviews = await collectReviews(new URL('docs/subjects/', REPO));
ok(Object.keys(reviews).length >= 7, 'fewer than seven subjects have reviews');
for (const [id, files] of Object.entries(reviews)) Object.entries(files).forEach(([f, v]) => ok(['passes', 'fails', 'disclosed'].includes(v), `${id} ${f}: verdict read as "${v}"`));
same(reviews.singing['reviews/l2.md'], 'disclosed', 'Singing l2 carries a Disclosure');
same(reviews.scams['reviews/l3.md'], 'fails', 'Scams l3 fails');
same(reviewVerdict('Verdict: passes\n\nReviewer: x, 2026-10-11\n'), 'passes', 'a bare passing review');
same(reviewVerdict('Verdict: passes\n\nReviewer: x\n'), 'unreadable', 'a reviewer line without a date');
same(reviewVerdict('Verdict: passes\n\nReviewer: x, 2026-10-11\nDisclosure: I read the record.\n'), 'disclosed', 'a disclosure');
same(reviewVerdict('# no verdict\nReviewer: x, 2026-10-11\n'), 'unreadable', 'no verdict line');

// the real records: every one parses, and the gate 2 screen of each fits one screen
const designs = await collectDesigns(new URL('docs/subjects/', REPO));
for (const [id, r] of Object.entries(designs)) {
  ok(!r.error, `${id}: ${r.error}`);
  if (r.error || !r.goal) continue;
  const n = screenText(r, 'goal').length;
  ok(n <= GOAL_SCREEN_MAX_CHARS, `${id}: the printed gate 2 screen is ${n} characters`);
  dropsToShow(r).forEach(d => ok(!r.asked.find(a => a.id === d.id).owner, `${id}: ${d.id} is shown as dropped although the owner spoke on it`));
}
same(parseRecord('no dashes').error, 'does not open with a line of three dashes', 'a record with no dashes');

if (failures.length) { console.error(`${failures.length} of ${checks} design reader checks failed:`); failures.forEach(f => console.error(`  - ${f}`)); process.exit(1); }
console.log(`✓ ${checks} design reader checks passed on the real notes, reviews and records`);
