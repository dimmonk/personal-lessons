# Research review: stats L6 to L9 (build-subject step 6, role "research")

Reviewer: a fresh agent (Opus 5.5) that did not build these lessons, 2026-10-22. Read-only except this file. Read: `plan.md`,
`docs/research/stats.md`, `l6`–`l9.lesson.js`, `items-build.js`, `items-asks.js`, `items-counted*.js`, `items-cause*.js`,
`items-charts*.js`, `items-whole*.js`, `subject.js`, the learner view of L9 (and greps of l0–l8 views), the engine diff
(`plan.js`, `plan-run.js`, `review.js`, `view.js`, `recall.js`, the V84 and shape rules). Every number, margin, percent, axis
height and test table was recomputed by hand. Scripts in the session scratchpad: `cues.cjs` (verdict against form, "Not given",
small print, trial, random, margin, "ever/record", cut scale, line position, claim-option length, over 88 items of L6–L9 and their
reserves) and `recall-test*.cjs` (the six-questions answer run through the app's own `recallMatch`). `tests/stats-late-pure.mjs`
(476 checks) and `tests/stats-lessons-pure.mjs` (5,820) both pass.

## Source spot-checks (note against the web)

| Note | Checked against | Result |
|---|---|---|
| T11 Yang et al. 2021: 83.5% showed a truncation effect; it "persisted after viewers were taught" | Duke record 1474486 | Match |
| T8 Gal: "Was a sample used? How was it sampled? Is the sample large enough?"; "Is a given graph drawn appropriately…" | Dartmouth Chance page | Verbatim match |
| T9 Hill via Wakeford 2015 | PMC4291331 | Match; the article also says chance is one concern "alongside bias and confounding". Hill's own opening (quoted in secondary sources) starts from an association "beyond what we would care to attribute to the play of chance" before his question is asked. The note leaves this out; see defect 1. |

## Numbers: all consistent

Every margin follows about 100/√n (400→5, 600→4, 700→4, 1,000→3, 1,200→3) and every range in a reason is right (p-sundays,
p-mayor, q-schooltax, k-lanes, k-greenfield, r-weston, r-lakeport). Every chart change, every "looks N times as tall" (w-basket 3×,
p-fares 2×, q-glenwood a fifth, k-crowds 3.4×, k-ebikes 4×, r-gas 2.5×, r-milk 3×) and every trap value is right. The test tables are
right (q-ridge 450 of 475; k-kessel 30 of 78). The rates are right (q-elmwood 3 in 1,000; r-dunmore 5; r-northfield 0.5 against 1).
The relative cuts are right (q-brightmind and q-pravel a quarter, not half; k-novira and r-mintel a third). No wrong number found.

## Defects that decide the verdict

### A departure from the field's way of thinking

1. **L7: a split by chance is taught as leaving "nothing else", and luck is dropped** (l7.lesson.js:22, :27; items-asks.js:8;
   items-cause.js:139; items-whole.js:46, :133; items-whole-check.js:16). L6 has just taught that a result "can be a little off by
   luck" and turns down a 52–48 poll for it. L7 then says that when groups are split by chance "nothing else explains it", and
   q-brightmind's reason says "the coin toss rules out other explanations, so the app did make a difference". In the field, chance is
   the first other explanation (Hill begins from an association beyond what chance would give; Wakeford names chance beside bias
   and confounding; Spiegelhalter's T2 "Don't report uncertainties"). The subject teaches luck for surveys and forgets it for trials.
   **Fix:** one sentence on the L7 screen: "A split by chance leaves only luck. With a few hundred people and a clear gap, luck is
   unlikely; with a handful of people or a tiny gap, it could be luck." Give every trial its size (q-pravel has none) and reword
   q-brightmind's reason ("the app most likely made a difference").

### A wrong or arguable marked answer

2. **L9 q-moves: right answers marked wrong, and the six questions were never taught as a list** (items-whole.js:12–18). No
   lesson's screen lists six questions (grep of l0–l8 learner views); the learner must build them from nine lesson titles. Run through
   `recallMatch`, the item's own reason wording fails: "how big is it, out of how many, over how long", "what it claims, and the number
   it rests on". So do L7's screen title "What else could explain it", Tufte's own "compared to what" (T7), "who counted", "is it fair"
   and "what is the verdict". One unmatched phrase fails the whole answer. ("My answer means the same" softens this but does not fix it.)
   `taught: true` says the answers are "the subject's own lessons' words", which they are not yet. **Fix:** name the six questions as
   a numbered list at a point the learner meets before L9 (L1's why screen, with each later lesson's why saying "question N of six").
   Then widen the accepts to the wordings used on screen: "compared (with or to) what", "(what or anything or something) else (could)
   explain it", "who (was) counted", "how big (is it) (really) (out of how many) (over how long)", "(what it claims or …) (and the
   number it rests on)", "(what is) the verdict".
3. **The line to tap when the claim rests on two sentences.** items-whole.js:4 says "where a claim rests on several numbers, they
   stand in one sentence, so the line to tap is one". q-elmwood (items-whole.js:29–30) and r-dunmore (items-whole-reserve.js:90–91)
   break that rule: "twice the usual" rests on the count (s1) and on the usual rate (s2), and tapping s2 is marked wrong as "the usual
   level, not the count". q-harbor (items-charts.js:145–146) is worse: the verdict rests on the small print f1 ("Last June we sold
   500"), and tapping it gets the note "That is last June's sales, not this June's". **Fix:** put both numbers in one sentence, as the
   file's own rule says (or accept both lines).
4. **L9 q-fairfield: the post claims a cause and is marked "holds"** (items-whole.js:104). "Recycling is working: the trash we send
   to the dump fell by a tenth." Under the plan's rule, the claim is what a reader takes away (plan.md:32), and here that is "recycling
   did it". The `need` line even says the numbers cannot show it. A learner who applies L7 (nothing to compare with) answers "Does not
   show it" and is marked wrong. **Fix:** drop "Recycling is working:" (for example "The trash we send to the dump fell by a tenth this
   year"), or make the cause the claim and the verdict "Does not show it".
5. **L6 q-limits: two of the lesson's own rules give different verdicts** (items-counted.js:124–135; l6.lesson.js:29). L6's verdict
   screen says "You cannot tell when the text does not say how many were counted or how they were picked". q-limits says neither ("Not
   given" is the tap) and is marked "Does not show it" for the leading question. Both answers follow a sentence of the lesson. **Fix:**
   add who was counted ("The poll called 800 drivers picked at random"), so the leading question alone decides it, or say on the
   screen that a fault the text shows outweighs a detail it leaves out.

### An answer that can be guessed without the reasoning

6. **Surface words predict the verdict in the checks.**
   - Every trial in the L7 and L9 checks holds: k-insoles, k-hens, k-novira (3 of 3); in the reserve, 2 of 3. Practice has trials
     that fail on size (q-brightmind, q-pravel), but the checks never test that.
   - In L8, every "cannot tell" item is an "ever/record/never busier" claim: p-bayrent, q-stepup, k-phoneprice, r-pool (4 of 4). Of the
     five "ever" items, four are "cannot tell" and none holds.

   **Fix:** in the L7 check, swap a sound trial for one whose numbers fall short of the headline (and add one to the L9 check). In L8,
   add an "ever" chart that holds (a long run of years ending at the top) and one "cannot tell" item of another kind. Assert both in
   `stats-late-pure.mjs`.
7. **The length of the claim options gives the answer away** (all L6–L9 claim asks). The right option is the longest in 48 of 88
   items (55%, against 33% by chance) and in 14 of the 24 check items (58%). Length also tracks the verdict: when the right option is
   the longest, the item holds in 26 of 48; when it is the shortest, it does not show it in 11 of 15. Sound claims get a precise, long
   right wording; overreaching ones get a short right wording beside a longer, careful heard-link distractor. **Fix:** even out the
   lengths, then add a length test next to the existing closeness-to-headline test (stats-late-pure.mjs:56–60), for example "the
   longest is right in under 40%".
8. **Check items that copy practice items, and false "new area" claims.**
   - k-fenmore copies p-desks: the same outlet ("Work Life Weekly"), the same two-groups-at-one-company shape, the same "worst week /
     flu season" distractor. k-corliss is a third copy, in the L9 check.
   - k-pike ("New principal turns Pike around", worst year, usual range) copies k-hawks ("New coach turns the Hawks around").
   - k-phoneprice copies p-bayrent: January to June, "record".
   - k-adopt copies p-westgate: "closed part of the year, up X% since".
   - The file headers say the checks use "areas of life the lesson's groups did not use". But office work (items-cause-check.js:2) is
     p-desks' area, and the L9 check's health and school items (k-novira, k-erwait, k-pike) share areas with q-pravel, q-zentra,
     q-ridge and q-phones.

   A check of near-twins measures recognition, not transfer (plan "the check in a third" area; T15, P25). **Fix:** rewrite these
   check items in other areas and other shapes (a different headline form, a different source of the hidden explanation), and correct
   the headers.

## Polish (does not decide)

- q-office (items-counted.js:104): s1 ("emailed … to all 2,000 of its workers") also says which people; the note calling it wrong is
  arguable. Fold the 150 into s1.
- r-fallguard: the distractor "keep a quarter of residents from falling" is labelled `mixed-who`; it is L3's `percent-as-people`.
- Reused or near-identical product names: Restwell (tea in L7, mattresses in L6), Calmira (L7) and Calmora (L7), ClearView (L3) and
  Clearview (L9 reserve, with a different claim).
- L6 says "could really be anywhere from 42% to 48%". A margin is a likely range, not a hard bound, and it covers luck only, not who
  was picked. Write "most likely between 42% and 48%".
- `need` lines (p-cameras, q-pages, k-pike) say places without the change "would" settle it, while L7's rule says a cause claim holds
  only with a split by chance. Hill's own framework infers cause from studies without one (smoking). The single-article simplification
  is defensible, but the need lines should say "would narrow it; a split by chance would settle it".
- The `report` form holds in 3 of 3 L6–L9 items (q-readers, k-hens, q-ridge). Give one report that fails.
- research note T9: add Hill's starting point (an association beyond chance) so that the lesson's account of chance has a source.

## The way of thinking, the plan, and carried-over structure

- L6 follows T8 and T2 (who was counted, how many, how picked, how asked, by whom, the margin) and the plan's list. L7 asks Hill's one
  question with the four answers the note names. L8 reads the numbers and the time window (T11). L9 mixes all six without labels
  (T21). Apart from defect 1, the lessons follow the note.
- Nothing looks carried over from another subject. The if-then plan step started in Scams, but the plan keeps it as the owner's ask,
  optional, and labelled as having no evidence (P26). Its words now live in the subject (see below).

## Engine changes: PASS

- **The plan's words now belong to each subject** (`planWordsOf`, `form.words`). The Scams words are gone from `SAY`. Every
  call site reads `words` (plan-run.js:16–23, :61; review.js:120), and the shape rule requires `words` on a form into "plan" and
  refuses it elsewhere (rules-shape.mjs). Stats' "saved" line ("at the start of this subject's weekly review") matches review.js. The
  fixture moved its words over.
- **`taught: true` on a text ask** skips V84's source requirement only for a text ask whose answers are the subject's own words.
  It is scoped correctly; the claim it makes about q-moves is only true once defect 2 is fixed.
- **V75 note** on a range whose step passes its max: correct and tested (rules-lesson.mjs).

## Verdict

**FAIL.**

- L6 fails on defects 5 and 7.
- L7 fails on defects 1, 6 and 8.
- L8 fails on defects 3 (q-harbor) and 6.
- L9 fails on defects 2, 3, 4, 6 and 8.
- The engine changes pass.

Defects by kind: way of thinking 1, wrong or arguable answer 4 (2, 3, 4, 5), guessable answer 3 (6, 7, 8), wrong fact or number 0.
Polish: 7.
