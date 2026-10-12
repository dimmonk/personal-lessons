// The readers of the design records, run on the real text they will read (docs/research/*.md, docs/subjects/*/reviews/*.md, the records):
// a seeded fault on an injected value proves the rule, not the reader. Run: node tests/design-pure.mjs
import { readFile } from 'node:fs/promises';
import { parseRecord, reviewVerdict, noteMarks, readLevel, collectDesigns, collectCommittedDesigns, collectReviews, collectResearch } from './lessons/designs.mjs';
import { dropsToShow, screenText, sameWords, GOAL_SCREEN_MAX_CHARS } from './lessons/design-shape.mjs';

const REPO = new URL('../', import.meta.url);
let checks = 0, failures = [];
const same = (a, b, what) => { checks += 1; if (JSON.stringify(a) !== JSON.stringify(b)) failures.push(`${what}: got ${JSON.stringify(a)}, wanted ${JSON.stringify(b)}`); };
const ok = (c, what) => { checks += 1; if (!c) failures.push(what); };

// read levels: stated as the first word of the Read line, never inferred; unstated reads as summary
same(readLevel('x *Read: full: the paper, pp. 3-4, 2026-10-12.*'), 'full', 'a stated full read');
same(readLevel('x *Read: abstract: Crossref and the abstract; a section named Abstract of another paper.*'), 'abstract', 'a stated abstract read');
same(readLevel('x *Read: summary: a press release.*'), 'summary', 'a stated summary');
same(readLevel('x *Read: full text, Rohrer, Abstract, Results.*'), 'summary', 'an unstated level reads as summary, whatever the words');
same(readLevel('x *Read:\nfull: broken across lines.*'), 'full', 'a Read line broken across lines');
same(readLevel('x no read line'), 'summary', 'no Read line reads as summary');

// the real notes: every finding carries a mark and a Read line; the ones the records rely on read as the records say
const research = await collectResearch(new URL('docs/research/', REPO));
for (const [note, { ids, marks }] of Object.entries(research)) {
  ok(ids.length > 0, `${note}: no findings found`);
  ids.forEach(id => { ok(marks[id].decides !== null, `${note} ${id}: no Decides or Supports mark`); ok(['full', 'abstract', 'summary'].includes(marks[id].read), `${note} ${id}: no read level`); });
}
same(research['scams-judging-and-acting'].marks.SC1, { decides: true, read: 'full' }, 'SC1 as its note reads');
same(research['scams-judging-and-acting'].marks.SC3.read, 'abstract', 'SC3 rests on an abstract too');
same(research['review-after-lessons'].marks.R8.decides, true, 'R8 decides the review');
same(research['reading-other-people'].marks.O1, { decides: true, read: 'full' }, 'O1');
same(research['reading-other-people'].marks.O8.read, 'full', 'O8 was read in full (a section named Abstract is not an abstract read)');
same(research['learning-everyday-math'].marks.M4.read, 'full', 'M4 was read in full');

// the real reviews: every verdict is read, and the disclosed ones are seen
const reviews = await collectReviews(new URL('docs/subjects/', REPO));
ok(Object.keys(reviews).length >= 7, 'fewer than seven subjects have reviews');
for (const [id, files] of Object.entries(reviews)) Object.entries(files).forEach(([f, v]) => { ok(['passes', 'fails', 'disclosed'].includes(v.verdict), `${id} ${f}: verdict read as "${v.verdict}"`); ok(/^sha256:[0-9a-f]{64}$/.test(v.reviewed || ''), `${id} ${f}: no Reviewed fingerprint`); });
same(reviews.singing['reviews/l2.md'].verdict, 'fails', 'Singing l2, reviewed again on 2026-10-12, fails');
same(reviews.scams['reviews/l3.md'].verdict, 'fails', 'Scams l3 fails');
const FP = 'sha256:' + 'a'.repeat(64);
same(reviewVerdict(`Verdict: passes\n\nReviewer: a stand-in (Sonnet 5.5), 2026-10-11; opened: the learner view\nReviewed: ${FP}\n`), { verdict: 'passes', reviewed: FP, date: '2026-10-11' }, 'a passing review');
same(reviewVerdict(`Verdict: passes\n\nReviewer: x (Sonnet 5.5); opened: the learner view\nReviewed: ${FP}\n`).verdict, 'unreadable', 'a reviewer line without a date');
same(reviewVerdict(`Verdict: passes\n\nReviewer: x (Sonnet 5.5), 2026-10-11\nReviewed: ${FP}\n`).verdict, 'unreadable', 'a reviewer line that does not say what it opened');
same(reviewVerdict('Verdict: passes\n\nReviewer: x (Sonnet 5.5), 2026-10-11; opened: the learner view\n').verdict, 'unreadable', 'no Reviewed line');
same(reviewVerdict(`Verdict: passes\n\nReviewer: x (Sonnet 5.5), 2026-10-11; opened: the learner view\nReviewed: ${FP}\nDisclosure: I read the record.\n`).verdict, 'disclosed', 'a disclosure');
same(reviewVerdict(`# no verdict\nReviewer: x (Sonnet 5.5), 2026-10-11; opened: the learner view\nReviewed: ${FP}\n`).verdict, 'unreadable', 'no verdict line');
same(reviews.psychology['reviews/l1.md'].verdict, 'passes', 'Psychology l1, reviewed again on 2026-10-12');
same(reviewVerdict(`Verdict: passes\n\nReviewer: x (model not recorded), 2026-10-12; opened: the learner view\nReviewed: ${FP}\n`).verdict, 'unreadable', 'an unrecorded model on any date but 2026-10-11');
same(reviewVerdict(`Verdict: fails\n\nReviewer: x (model not recorded; an agent), 2026-10-11; opened: the learner view\nReviewed: ${FP}\n`).verdict, 'fails', 'the one exception: 2026-10-11');
const committed = await collectCommittedDesigns(new URL('docs/subjects/', REPO));
ok(Object.keys(committed).length >= 9 && 'geography' in committed, `the committed records are listed from git: ${Object.keys(committed).length} found`);

// the real records: every one parses, and the gate 2 screen of each fits one screen
const designs = await collectDesigns(new URL('docs/subjects/', REPO));
for (const [id, r] of Object.entries(designs)) {
  ok(!r.error, `${id}: ${r.error}`);
  if (r.error || !r.goal) continue;
  const n = screenText(r, 'goal').length;
  ok(n <= GOAL_SCREEN_MAX_CHARS, `${id}: the printed gate 2 screen is ${n} characters`);
  dropsToShow(r).forEach(d => ok(!r.asked.find(a => a.id === d.id).owner, `${id}: ${d.id} is shown as needing the owner's word although they spoke on it`));
}
same(parseRecord('no dashes').error, 'does not open with a line of three dashes', 'a record with no dashes');
ok(sameWords('On track.', 'on track'), 'the same words with other punctuation');
ok(!sameWords('👍', '✅'), 'two replies with no letters are two replies');
ok(sameWords('Très bien, continue.', 'tres bien continue') === false && sameWords('Très bien, continue.', 'très bien continue'), 'letters of any script count');

if (failures.length) { console.error(`${failures.length} of ${checks} design reader checks failed:`); failures.forEach(f => console.error(`  - ${f}`)); process.exit(1); }
console.log(`✓ ${checks} design reader checks passed on the real notes, reviews and records`);
