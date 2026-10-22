# Civics: research review of lessons 9 to 16 (build-subject step 6, role "research", 2026-10-22)

Scope: `l9`-`l16.lesson.js`, `items-principles/-rights/-colonies/-1800s/-past/-1900s/-symbols.js`, the slash change in
`public/app/lessons/recall.js`, `tests/fixtures/uscis-m1778.json` (Q117, Q120), research note section F (C23). Read against
`docs/subjects/civics/plan.md`, `docs/research/civics.md` and the build-subject skill. L1-8 not reviewed (a fixer is on them).

## What was checked, and how

- **Interview answers.** The official M-1778 (09/25) PDF was fetched from uscis.gov today and its text extracted (PDFKit). A script
  compared all 128 questions and answer lists with `tests/fixtures/uscis-m1778.json`: every difference is a line wrap or a section
  heading in the PDF. The fixture matches the official list word for word. `node tests/civics-pure.mjs` passes (1468 checks), and it
  holds every `q<n>` item's question and accepted answers to the fixture in order, so every accepted answer in lessons 9-16 is an
  official one, and none is missing. The multi-answer questions (Q10 two, Q65 three, Q67 two, Q69 two, Q81 five, Q126 three) carry the
  right `count`; the PDF has no other "name two/three/five" question in 63-128.
- **Q117.** The fixture now keeps "For a complete list of tribes, please visit bia.gov." as `printed`, not as an answer. That matches the PDF,
  where it is a pointer line under the bullets. Correct.
- **Q120.** The PDF prints "Liberty Island [Also acceptable are New Jersey, near New York City, and on the Hudson (River).]". The fixture
  keeps the two bullets as `answers` and the bracket as `alsoAcceptable` (three entries, same words), and the item accepts all five. Correct.
- **recall.js slash.** Q93's "(Battle of) Antietam/Sharpsburg" is the only slash in the official answers. The change accepts either name
  or both, and the tests cover this. No other subject's `accept` list contains a slash (grep of debating, geography), so no other answer changes.
- **Note section F, sampled against the sources today:** the National Archives amendments page (all six ratification dates match), NPS Fort
  Sumter (quote matches word for word), Office of the Historian WWI (April 2, April 4, "two days later" match), the National Archives VRA page
  (the note's quote matches) and CRS LSB11468 (June 30, 2026, *Trump v. Barbara*, both quoted phrases match). No discrepancy in the note.
- **Surface cues in l13.** Scripted over all 11 `past-*` stories: see defect 4.

## Verdict per lesson

| Lesson | Verdict | Deciding defects |
|---|---|---|
| l9 Principles | FAIL | 1 (wrong claim) |
| l10 Rights | PASS | none |
| l11 Colonies | PASS | none (polish only) |
| l12 1800s | FAIL | 1 (plan / way of thinking) |
| l13 1877-1900 | FAIL | 4 (surface cue, story kind and check off topic, 2 wrong facts) |
| l14 1900s | FAIL | 1 (wrong fact) |
| l15 Symbols | PASS | none |
| l16 Interview | PASS | none |
| recall.js slash, fixture Q117/Q120, note F | PASS | none |

## Deciding defects

1. **l9, `l9.lesson.js:16` (row `i-supreme`), wrong claim that contradicts the subject's way of thinking.** "What it explains: Why there are
   three branches and three levels, each with its own powers." The Constitution creates the federal government and recognises the states. Local
   governments get their powers from their state (plan, way of thinking 2: "Local: what the state hands down", C6), not from the Constitution.
   **Fix:** "Why there are three branches, and why the federal government and the states each have their own powers."
2. **l12, `l12.lesson.js:1-2, 9-10, 15-21`: the cause move is promised but never taught for the lesson's central event.** The header says "the
   Civil War cause by cause", and the why tells the learner to "find what led to it". The plan's line is "expansion, slavery, war", and way of
   thinking 5 places each event "in its chain of cause and effect" (C11). But the table lists 1803, 1812, 1846, 1861 with no link between them,
   and nothing says what led to the Civil War (the spread of slavery into the new western lands, Lincoln's election in 1860, secession). C23
   gives no source for a cause of the war, so the builder left it out, which is right as far as it goes, but the lesson still claims the move.
   **Fix:** add a sourced cause to C23 (for example the National Archives or NPS on the secession crisis of 1860-61 and slavery), add one row,
   "1860-61: Lincoln is elected; eleven southern states leave the Union to protect slavery", and link 1846-48 (new land, and whether it would
   allow slavery) to it. Otherwise, drop "cause by cause" from the header and the why.
3. **l13, `l13.lesson.js:26` ("A wrong idea"), wrong fact.** "The Voting Rights Act... outlawed those practices", where "those practices"
   are poll taxes and literacy tests. The National Archives page the note cites says the Act outlawed literacy tests and "directed the Attorney
   General to challenge the use of poll taxes". The 24th Amendment (1964) had ended poll taxes in federal elections, and *Harper* (1966) ended
   them in state elections. Repeated in a softer form at `items-past.js:77` ("answered the voting tests and taxes"). **Fix:** "...outlawed
   literacy tests, 95 years after the 15th Amendment; the 24th Amendment had already ended poll taxes in federal elections in 1964."
4. **l13, `items-past.js` (all 11 stories): the line to tap can be predicted without any reasoning.** In 11 of 11 stories the deciding line is
   the only line that names anything historical (a year before 2000, an Amendment, an Act, a ruling, the Declaration). In 10 of 11 it is the
   only line with a four-digit year. Every other line is filler ("Lemonade will be free.", "Tickets are free.", "The exhibit is free.").
   `tests/civics-cues.mjs` covers lessons 4-8 only, so nothing catches this. In real news the older ruling competes with recent references
   (last year's law, today's order, an earlier hearing). The worked 2026 story shows this, but no practice or check story does. **Fix:** give
   each story at least one other line with a date or a named law or event that the story does not rest on (a 2019 county rule, last
   spring's vote, a 1990s renovation), and add an l13 predictor to `tests/civics-cues.mjs` ("the only line with a year or a named past thing").
5. **l13, `l13.lesson.js:38` and `items-past.js:72-96`: the practice and check stories are not the kind the plan names, and the check does not
   test the lesson's years.** The plan (l13, C16) asks for a news story that rests on an older ruling, read "the historian's way (what earlier
   law, from when?)". Only `past-citizens` (worked) and `past-fee` are stories whose decision today rests on older law. The others are
   events about history (a plaque, a podcast, a play, an exhibit), so the task becomes "recall what caused the event named". The three check
   stories cover 1774, 1870 and 1965. None tests 1877-1900 (*Plessy*, *Wong Kim Ark*, the Exclusion Acts), which is what the lesson teaches.
   Meanwhile `past-cityhall` (*Wong Kim Ark*) is held back for review. **Fix:** make at least two of the three check stories present-day
   decisions that rest on 1877-1900 law or rulings (for example a school board citing *Plessy*'s reversal, or a passport office citing
   *Wong Kim Ark*), with the competing dated lines from defect 4.
6. **l13, `l13.lesson.js:22`, wrong fact.** "Susan B. Anthony, Elizabeth Cady Stanton and Lucy Stone kept up their work... through the 1890s."
   Lucy Stone died in October 1893. The note's C3 says only that their work "ran through the 1890s", without a source for each name. **Fix:**
   "Susan B. Anthony and Elizabeth Cady Stanton kept up their work through the 1890s", or "into the 1890s" for all three.
7. **l14, `l14.lesson.js:20` (row `x-terror`), wrong or arguable fact.** The column "Why the United States went in" gives "Terrorists attacked
   the United States" for "the wars in Afghanistan and Iraq". That holds for Afghanistan (2001). The Iraq war (2003) was argued mainly on Iraq's
   supposed weapons of mass destruction, and the 9/11 Commission found no operational link between Iraq and the attacks. M-1778 gives no reason
   for Q116, so this reason is the lesson's own, with no source. **Fix:** split the row: "October 2001, War in Afghanistan: terrorists attacked
   the United States"; "2003, War in Iraq" with no reason given (or a sourced one).

## Polish (does not decide the verdict)

- **l11 `l11.lesson.js:9`, l12 `:10`:** "You will use the same three moves in each of the next lessons." l14 and l15 use none of them, and
  "find where a claim comes from" is practised only in l13. Say "in lessons 12 and 13".
- **l11 `:31-32`:** Sugar Act (1764), Stamp Act (1765), quartering and the Boston Massacre (1770) have no dates or C23 source. Only the 1765
  petition, 1767, 1773 and 1774 are sourced. Add them to C23 or leave the dates out (as now), but source the order.
- **l12 `:29` and `items-1800s.js:34-36`:** the table says flatly "All men got the right to vote after the Civil War". The "law on paper"
  correction comes only in Q98's reason and in l13. One clause in the table would keep the lesson consistent with C17.
- **l13 `items-past.js:69`:** "Poll taxes came after the Civil War" as an absolute is not right: tax-paying conditions on the vote existed
  in the early 1800s. Say "The poll taxes used to keep Black citizens from voting came after the war."
- **l13 `:17`, `items-symbols.js:14`:** "dedicated in 1886" (true) has no source in the note (C3 cites only M-1778). The same holds for the
  late-1800s dating of the light bulb and skyscrapers (`items-1900s.js:66`). Add NPS Statue of Liberty to C23.
- **l13 options:** "The Louisiana Purchase" is a wrong option in 6 of 11 stories and "The 26th Amendment" in 4 of 11, so learners learn to
  drop them on sight. In 3 of 11 stories (`past-reading`, `past-festival`, and the check item `past-podcast`) every wrong option is later in time,
  so date elimination alone answers. That is the taught rule, but it never makes the learner weigh two causes from the right time.
- **l13 check:** 2 of 3, against 9 in 10 in every recall lesson. With defect 5 fixed, consider 3 of 4.
- **l13 plan drift:** the plan's l13 check is "Recall + 1 story". The lesson has no recall in its check (Q91, Q99, Q118, Q120 are checked
  in l12, l14, l15). This is fine; update the plan's row to match.
- **l14 `:18-19`:** Vietnam and the Gulf War are dated only "In the 1900s", against the lesson's own "every event put in its time". Add
  dates (US combat 1965-1973; Gulf War 1991) with a source.
- **l14 `:29`:** "all women get the right to vote" (1920) is the same "law on paper" claim that l13 corrects for 1870. Add "on paper" or
  one clause.
- **Historians' reasoning, overall:** contextualization is practised as chronological order (`order` items) and "a cause comes before its
  effect". The note marks both as judgement calls (C11, section "Not settled"), so this is not a defect. Corroboration (C11's third
  heuristic) is not taught anywhere in 9-16, and the plan does not ask for it.
- **recall.js `:77-79`:** the slash rule applies to any `\S+/\S+`, so a future answer like "1/2" or "24/7" would accept "1" or "24" alone.
  No current answer is affected. Consider limiting the rule to letters (`[A-Za-z]+/[A-Za-z]+`).

## Not carried over from another subject

The recall-plus-timeline form follows C1, C2, C19 and C21, and the story form in l13 follows C16. Nothing in 9-16 looks borrowed from
another subject's structure. The `story` helper and `slip` labels mirror lessons 4-8 of this same subject.
