# Civics L1 to L8: research review, round 2 (2026-10-22)

Read: `public/subjects/civics/` (l1 to l8 lessons, items-government, items-numbers, items-federal, items-shape, items-l4 to items-l8, subject.js),
the regenerated learner views, `docs/subjects/civics/plan.md`, `docs/research/civics.md`, `fixes-l1-8.md`, the build-subject skill,
`tests/civics-cues.mjs`, `tests/fixtures/uscis-m1778.json`. `npm run test:data` passes (1468 civics checks, 21 cue checks).
Extra predictors: `scratchpad/civ-r2/cues2.mjs` (outside the clone).

## Verdict

| Lesson | Verdict | Deciding defects |
|---|---|---|
| L1 | PASS | none |
| L2 | PASS | none |
| L3 | PASS | none |
| L4 | PASS | none |
| L5 | **FAIL** | F1 |
| L6 | **FAIL** | G1 |
| L7 | **FAIL** | G2 |
| L8 | **FAIL** | G1, G3, A1 |

Deciding defects by kind: wrong fact 1 (F1), guessable by a surface cue 3 (G1 to G3), arguable answer 1 (A1), departure from the way of thinking
0 beyond the root of G1, carried over from another subject 0. Polish 10.

## Sources checked on the web today

- C1b, USCIS "Check for Test Updates" (uscis.gov/citizenship/testupdates): names the President, Vice President, Speaker and Chief Justice; the
  three quoted "Visit senate.gov… / house.gov… / usa.gov/states-and-territories…" sentences are verbatim; no state capitals. L3 Step 4 is right.
- C18, Brodsky et al. 2021 (PMC8012470): the four moves' names, 230 students, 61.0% at posttest: all verbatim. L7's table uses them.
- Fixture: every L1 to L3 item checked against `uscis-m1778.json` (Q15, 16, 18, 20 to 26, 28, 30 to 38, 41, 42, 44, 46 to 49, 56 to 62): the
  wording and answers match. Round 1's P8 (Q117's bia.gov line) is fixed (`printed`).

## Round 1 fixes verified

F1 (bridges: spending bill, tax-and-spend line) done. A1 prompt now "Which check does the story show at work?" done. A2 (`l5-cars` theirs,
`l8-offices`), A3 (`l5-rent`, `l8-fee` genuine open questions before a judge), A4 (national park "federal land") done. D2 (higher level's law,
state over local) done. D3 ("Not settled" only for the president or an agency) done. G1 (papers spread over levels: the paper predicts the
level at 25% against 36% by chance) done. L7 tags removed and right result's place varied (1st to 4th) done. P1, P2, P8 done. L4 now tempts
the president lure in three stories (Items 3, 5, Check 12).

## Deciding defects

### Wrong fact

**F1. L5 Step 1, president row (l5.lesson.js, table "What lets them do it"), repeated in `l5-nine`'s reason (items-l5.js:23) and in the
items-shape.js rule (line 18): "A power of the states, such as schools: never theirs, whatever Congress said."** Overstated. Congress may
attach conditions to money it gives the states (Spending Clause; *South Dakota v. Dole*, 483 U.S. 203 (1987)), and the Education Department
enforces such conditions on schools every year (Title I, IDEA, Title IX). A learner who reads "Education Department tells schools to do X or
lose federal money" will answer "not theirs" by this row and be wrong. What holds is narrower: the federal government cannot simply order
states or school boards to act (anti-commandeering, *New York v. United States*, 1992; *Printz*, 1997). **Fix:** "A power of the states, such as
schools: the president cannot order it, with or without Congress; Congress can only attach conditions to money it gives." `l5-nine` stays
"not theirs" (a direct order on start times); reword its reason to "cannot order schools directly".

### Guessable by a surface cue (scripted in `cues2.mjs`)

**G1. L6 and L8: the check at work is the only check named on a line with no "no / not / never / none / cannot".** Predictor: skip every line
with a plain negation word, take the first check word left. **88% against 25% by chance (32 stories); L6 16 of 16, L8 12 of 16.** Of the 45
lines naming a check that is not at work, 41 are negated ("No one has sued", "The legislature is not up for election until 2028", "No one has
called for an amendment", "no bill has been written"); only one live check is phrased with a negation (`l8-fee`). The fix of round 1 (28 of 32
stories carry a line about a check not at work) added the cue: real stories do not list the checks that are absent, and the learner can
skip the reasoning "is it under way or far off?" by reading for the negation. **Fix:** state the checks not at work as positive talk or far-off
plans ("Shop owners said they might sue", "The next election is in 2029", "Some lawmakers want to look at the law next year"), drop most
"No one has sued" lines, and phrase some live checks with a negation ("The governor has not signed it and says she will veto it"); add this
predictor to `tests/civics-cues.mjs`.

**G2. L7 results pages: the right result is the course's own masthead or the original record.** Predictor: the result naming the Harbor Gazette,
Capital Sun, Valley Courier, Metro Post or Lakeview Times, a newsroom, Congress.gov or a transcript: **7 of 8 (88% against 25%)**; the course's
papers are right in all 4 pages where they appear and are never a lure (lures carry made-up names such as "The Freedom Herald", "The Patriot
Herald"). The existing test's "looks like a paper" regex catches the lures first, so it misses this. C15's finding is that looks deceive;
here a familiar name is always safe. **Fix:** one page where a known paper's result is an opinion column or a reprint of the group's own release
(a wrong pick), one where the right result is an unfamiliar outlet's reporting; script the predictor.

**G3. L7 and L8 take-or-check: "have I checked the source?" alone gets 83% (20 of 24, chance 58%), and the other half of the rule is signalled
by a start date.** The four stories that set a known source against an alarming claim are `l7-sudden` (end of Social Security) and three
L8 stories whose headlines carry "starting tonight", "within a week… starting at midnight tonight", "starting Monday" (`l8-sidewalk`,
`l8-airfares`, `l8-fireworks`). The existing test scored only the phrase "You looked up" (54%); with its synonyms ("checked", "looked into",
"for years") the cue is strong. **Fix:** more conflict cases in both directions, alarm carried by the claim's size, not by a timing word; add
the synonym predictor to the cue test.

### Arguable answer

**A1. L8 Check `l8-sidewalk` (items-l8.js:115-122), and practice `l8-airfares` (49-56).** (a) *Source:* marked "check" because "alarming and
sudden"; a mayor ticketing an already-banned practice, reported by a checked paper, is ordinary by L7's examples (bank freeze, end of Social
Security). "Take" is defensible; same for refunds on late flights. (b) *Verdict:* marked "theirs" because "A city rule already bans parking on
sidewalks"; but L5's table says of a city "The story has to show the state law", and nothing says the rule sets a $500 fine (fines are set by
ordinance, not by a mayor's order). "Not theirs" is defensible by L5's own row. The news test needs each story fully right, 5 of 6. **Fix:** say
the city rule sets the fine and the state law that lets cities ticket parking, or use an act the table settles; make the conflict stories
plainly alarming (G3); add to L5's city row that carrying out the city's own rule is theirs.

## Departures from the plan or the way of thinking

None deciding beyond G1's root (stories that announce which checks are absent, where the expert reads which check is live). The structure
(two axes, power, checks, source) is drawn from C5 to C7, C15, C18; nothing found carried over from another subject. The source rule and
"Not settled" for the federal executive only are marked judgement calls in the note, as round 1 asked.

## Polish

- P1. L6 Step 1 veto row names only the president and Congress; `l6` Item 3 and `l8-vending` turn on a mayor's veto. "A president, governor or mayor".
- P2. `civicsLevelAsk` (items-shape.js:68) writes "is" after a plural actor: "Inspectors from the federal Department of Transportation is", "Brookside firefighters is".
- P3. L5 worked example repeats `vwhy` in the answer line (render shows it twice).
- P4. L7 slip "own-word" text ends "instead of an outside check" on pages whose right result is the original record (Congress.gov, transcript, election office).
- P5. L7 Item 1 reason mentions "a blog that names no one"; Item 3 reason "the replies": neither is in the results.
- P6. L5 wrong-tap feedback is only "That is not the sentence"; give the Congress-silent line in `l5-cars` its reason.
- P7. L8 check screen: say each story counts only when all five answers are right (l8.lesson.js header says so; the screen does not).
- P8. L1 Step 1 never names the president's listed powers or the vice president's succession, asked in Items 7, 8, 11, 12.
- P9. L3 own-answers form: Q23, Q61, Q62 carry the list's D.C. and territory notes (no senators, no governor, no capital); the form and its reasons ("Each state has two senators. You entered yours.") assume a state.
- P10. Two scripted cues sit near the 15-point margin: the paper's name for take-or-check (71% vs 58%) and the line naming a law for the tap (50% vs 38%); fixing G2 and G3 should pull them down.
