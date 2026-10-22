# Singing, lessons 7 to 12: what was fixed after the first reviews (2026-10-22)

The reviews: `review-learner-l7-12.md` (L) and `review-research-l7-12.md` (R). Each defect, then what was done.

## Facts

| Defect | Fix |
|---|---|
| R1, N1 doctor timing misread | Re-read the Plain Language Summary (Krouse et al. 2018) from the PDF; V19 now quotes its bullets as printed. Rule in l11, its items and the plan: rest; a doctor if not getting better in 7 to 10 days whatever started it, or with no cold to explain it (sooner if you smoke); an ear, nose and throat doctor by four weeks at the latest; right away with a warning sign. Sam's reason now says 7 to 10 days. Rest cases all have a cold and are under a week; no case sits on the 7 to 10 day line (this also closes L15, 10 to 14 days after a cold). |
| R2 warning signs incomplete | Trouble swallowing, uneasy breathing, losing the voice or a big change lasting more than a few days added to the screen, the `means` and the accepted answers. "Right away" is called the course's reading in V19. |
| R3, R4 airy tone | The fix is labelled a rough first try, not a tested fix; a new airy sound that does not clear counts as hoarse (the guideline: hoarseness is a change in voice quality), so rest and a doctor after 7 to 10 days. In l9, its items, and the l12 map. |
| R5 l10 fixes | Every fix is "a first try, not a tested cure"; nasal adds "if the change will not go away, a speech therapist can check it". The note's "Where the evidence is thin" says so. |
| P5 planning breaths | Called a sensible plan built on V13 in l9 and the note. |
| P1 pain | l11's why: pain while singing means stop singing; pain when speaking or swallowing means a doctor right away. |

## Questions with a wrong or arguable answer

| Defect | Fix |
|---|---|
| R6 `sound-ivan-friend` | "Sounds as if he is singing through his nose" ("as if he has a cold" is hyponasal; ASHA, added to the note). |
| R7, R8, L16 recall answers | `care-days` accepts 7 to 10 days, a week, ten days, a week and a half, one to two weeks; `care-four-weeks` four weeks, a month, 28 days; `care-warning` bare nouns (pain, blood, lump) and every sign; `care-avoid` is now "which quiet way of using your voice is not rest" (whispering: the one answer); `care-air` humidifier and steam. |
| R9 Paul's fix | Falling short in l7, l8 and their cases now says the note check's own fix, "check it against a steady note and move up to it"; "hear it first" is only the hearing check's. Paul's story says he heard it first, and the feedback on "hear it first" says why it is not the fix. |

## Lesson 12's map (L1, L2, L3, L4, P3)

- The tie-break is on the map: a note over only when loud and on when sung lighter passes the note check and goes to effort; a pair puts the
  two side by side ("sing it lighter and listen again"). The worked case walks every check, including the note check being cleared.
- Effort holds the three efforts at the top: pushing, squeezing, cracking. The `check` list's fourth text is now "Does it go sharp, strained or
  break only where the line climbs or gets loud?" (lesson 1's prose is unchanged and is a subset of it). New cases: Uma (cracking) and Rob
  (squeezing) in practice, Eli (cracking) held back.
- Feedback names what decided: each case carries `not` lines for the likely wrong picks, naming the fact in the story that rules them out,
  and `notFix` lines for the look-alike fixes (hear it first beside moving to the note; lighter beside moving the song).
- L3 (the second question is a lookup): kept, as the plan's test asks for the fix; its distractors now include the look-alike fixes with
  their own reasons, so it is a recall with a decision, not only a lookup.
- L5 (tune test from memory): the check's screen says each tune is played once before it is sung back. The test itself is the plan's.

## The tune test on two different days (R10), built at the root

- Engine: `retestInstances` (`schedule.js`) makes a check's sung tries again on new targets of their own task (before, a sung reference was
  dropped from a retest); the review's retest starts through `startQueueWithRange`, words its rules "on the note", and its intro says
  results show after each try when the check does. Logged in `shared-helper-changes.md`. No scoring or feedback code changed.
- Validator: V78 refuses a sung check's `retest` under one day; a seeded fault in `tests/lessons/controls-table.mjs`.
- Tests: `tests/engine-pure.mjs` (a sung retest asks as many new targets of its own task as the check, never a target already sung, and keeps
  the task's settings).
- Lesson standard: 6.4 says how a check with sung tries comes back; 3.10 no longer lists it as not built; a dated entry in section 11.
- Lesson 12's check has `retest: 7`: the whole check comes back once a week later on new stories and tunes, so the tune test is sung on two
  different days. Nine cases are held back for it (three returns, six for the retest; V77). Lesson 6 is not changed: its line "the last part
  of this course gives the tune test again on another day" is now true through lesson 12's retest. Plan updated.

## Other learner defects

| Defect | Fix |
|---|---|
| L6 loudness not said | l7 says the app measures the note and whether it was louder than the talking note, and that a too-loud try does not count. |
| L7, L9 keyword answers | Carlos and Omar (l7) are loud and under, so "loud" alone no longer means pushing; Ray (l8) cracks with "a break" and no "jolt". |
| L8 thin in both | Cracking is "a sudden break or flip, with a jolt or a gap"; the pair compares "changes suddenly". |
| L10 gasp or pressing on | Every empty story says the breath was full and unhurried; every gasp story says it was small, noisy and at the last moment. |
| L11 air left not measured | l9 says the app measures only the note held for 6 seconds; air left is the learner's to notice. |
| L12, L13 the nose check | A long "ah" as in "father", pinched and let go while singing; "a lot" means it turns blocked or buzzy. |
| L14 numbering | Not changed: it is the learner view's numbering of a lesson with no warm-up. |
| L17 swap two numbers | The cold/no-cold split is gone, so the two numbers are 7 to 10 days and four weeks, each with its own question. |

Not done: P4 (a source for the recording surprise; the lesson makes no claim about why), P7 (cracking "is not damage": no source in the note).

## Checks run

`node tests/validate-lessons.mjs`, `npm run lock`, validate again (845,215 passed); `npm test` (exit 0; 199 negative controls); browser
checks X8 X10 X11 X12 X16 X22 X29 X48 X51 with `E2E_SKIP_FAULTS=1` (458 passed). No browser check walks a sung retest in the review yet.

## After the final review (`review-final.md`)

- **Sung retest browser check:** X16 has a new `retestHalf`. Lesson 12's check is stored as done, comes due seven days later and not the day
  before, and its intro says the results show as you go. The three tunes are sung on new targets, scored, kept as retest tries and counted
  "on the note". Seeded fault: "a sung try left out of the retest of its check" (`tests/e2e-controls.mjs`). Applied by hand and run with
  `E2E_SKIP_FAULTS=1`, it turned X16 red on both asserts.
- **E1 to E3, one root:** `singHeldShape` now treats a note that started off (not slid) and never settled on the note as "off from the start",
  whatever side it ends on. It also reports `crossed` (ended on the other side) and `further` (ended further off on the same side).
  - The "From the first moment" line reads `start`. Then comes "Then it sank under" or "rose over" (crossed), or "sank" or "rose further"
    (further: new `SAY.singFurtherLine`, `FC.ENGINE` 16).
  - A tune's last note is named by `singLastKey`, which `singMeasured` uses too, so the mark and the "You said" line agree.
  - The reviewer's cases are in `tests/sing-pure.mjs`.
- **C1:** Raj, Kay and Tom are "a little husky" or "mildly rough" and can use their voice. The sign is now "a voice you have lost, or that has
  changed so much it is hard to use, for more than a few days".
- **C2:** l11's check asks the seven facts again in new words (6 of 7) plus three new cases (rest, doctor, right away; 2 of 3). Three more
  cases are held back. The recall questions use the ask `say`.
- **Polish:**
  - 1: "If singing hurts, stop" is now the course's reading in V19.
  - 2: the warning reason says "for more than a few days".
  - 3: V19 names the summary's 4-week line and why the course follows 7 to 10 days.
  - 4: one line on a voice that keeps you from your work.
  - 5: an l4 case for "wandered off and back".
  - 6: the `lighter` fix names the straw and sliding through a break.
  - 7: l12's range line names a rumble or air.
  - 9: l11's worked case comes before the recall questions.
  - 8 (the learner-view renderer) is not done.
- All twelve lessons are set `live`.

## After the confirmation review (`review-confirm.md`)

- **E4 and E5, fixed at the root:**
  - The lessons' outcomes are one table in code (`SING_OUTCOMES`, `public/app/lessons/sing-judge.js`). Each has its definition in words and
    the rule that decides it.
  - One function, `singJudge`, gives the mark, the "You said" reading and the direction lines.
  - A held note that started off and then found the note is "off from the start", then "Then you found the note", never "wandered off and
    back".
  - A tune's last note is marked and measured by the same outcome.
- **Property test:** `tests/sing-pure.mjs` walks 400 sung contours (start × middle × end × how long the start lasts; a hold and a tune's last
  note). Each must match the lessons' definition, and its mark, measured line, guess and direction line must agree. It passes, and the
  confirmation review's own cases are added.
- **Polish 1, 3, 4 done:**
  - 1: a hold's mark says "off the note from the start".
  - 3: a scoop into a tune's last note is named.
  - 4: l4's line for off from the start now says "whatever it does next".
- **Polish 2:** a hold's guess is now the plain "under, on or over"; the result says whether it measured the start or the end.
- **Polish 5:** the renderer is still not done.
- **Checks:** npm test exit 0 (847,150 lesson checks; 132 sung-question checks); browser X8 X10 X11 X12 X16 X22 X29 X48 X51: 465 passed.
  The lessons stay `live`.

## After the second confirmation review (`review-confirm-2.md`)

- **E1 to E5, at the root:** the judge now composes three parts of every note: how it began, what it did, where it ended. Each lesson's
  outcome is a named combination in one table.
  - E1, E2: a slide that did not settle is named where it sat, with the way to move.
  - E3: a note on the note that stopped early or broke is "stopped", not "wandered".
  - E4: a hold's guess is checked against where it ended, as l4 and l9 ask.
  - E5: seconds are floored, so a short hold never shows the seconds it needed.
- **Tests:** a property test runs a generator of composite contours (scoops landing on, off and past; early stops; breath breaks; late
  landings; drifts; wanders; crossings) on a hold of 2 s, one of 6 s and a tune's last note. The review's cases are fixed tests.
- **Lesson text:** unchanged; the engine now matches it.
- **Polish 5 and 6 done:** "1 second" is singular, and a note's number appears once.
- **Checks:** npm test exit 0 (139 sung-question checks, 16 faults); browser checks 465 passed. Lessons stay `live`.

## After the third confirmation review (`review-confirm-3.md`)

- **D1:**
  - "Stopped" is named only when the sound stopped or broke and the note's center never left the note.
  - A slip off the note and back, however brief, is "wandered off and back".
  - Held notes are judged by their center over 0.1 s either side, so a regular wobble is judged by its middle (a judgement call; the
    research note sets no window).
  - Tests: Y23, Y2 and Z11, plus 600 simulated beginner holds.
- **Polish:**
  - 1: a 0.2 s gap no longer breaks a hold.
  - 2: wobbles are no longer hunting.
  - 5: the release is left out of `end`.
  - 6: stray readings are absorbed by the center.
  - 7: the wording is "then the sound stopped", and the learner view says "ended higher" for a hold.
  - 3, 4 and 8 are left as they are.
- **Checks:** npm test exit 0; browser checks 465 passed.

## After the fourth confirmation review (`review-confirm-4.md`)

- **D2:** a guess about a tune's last note is now checked against where it ended, through the same function as a hold (`singEndReading`).
  The prompt and l12 say "ended". "Went both ways" is said only for a hunt.
- **Tests:** Z11 with a guess of On, and 150 simulated beginner tunes, added.
- **Polish:**
  - 1: l4 says "Often".
  - 2: a quick hunt still counts.
  - 5: no repeated outcome, and the wording for zero seconds is fixed.
  - 3, 4 and 6 are open.
- **Checks:** npm test exit 0; browser checks 465 passed.

## After the fifth confirmation review (`review-confirm-5.md`)

- **D3, at the root:** the judge now cleans the pitch track (drops slips of the pitch finder, counted in readings) and judges every note by
  its center over 0.1 s either side. Start and end are measured over a quarter of a second in time, and turns are counted on the centered
  track. A natural vibrato or a stray reading is therefore never hunting, at 50 or 66.7 ms between readings.
- **Tests:** every property test and every earlier fixed case now runs clean and under realistic noise at 50 ms, 66.7 ms and a mix: vibrato
  5–7 Hz up to ±50, jitter, 3% glitches, 3% dropouts. All agree.
- **Limits, stated:**
  - A slip only as wide as the vibrato (for example -80 cents for 0.2 s with ±50 vibrato) cannot be told from the vibrato.
  - A search faster than 0.25 s legs reads as steady.
  - Generator cases that sit on a definition's boundary (a 1.3-semitone start held 1.2 s) were removed, not fitted.
- **Checks:** npm test exit 0 (208 sung-question checks); browser checks below.

## After the sixth confirmation review (`review-confirm-6.md`)

- **D4, fixed at the root:** the release (the last 0.25 s before any stop or breath, where the pitch falls as the voice gives out) is part of
  stopping, and the center never reaches across a gap.
- **Slides:** a slide is told by where the voice went within half a second (`land`).
- **Simulator in the repo:** `tests/sing-sim.mjs`, the review's simulator rebuilt and run by `npm test`. It covers 43 taught outcomes, each
  sung 300 times at 50 ms, 66.7 ms and a mix.
- **Measured agreement** (mark, pass, guess, "You said", fix):
  - At least 95% on 39 of the 43 outcomes, including l9's breaths after a release and stops with a release (99–100%).
  - Lower, inherent:
    - l4's ±25 stretch group: steady 44%, stopped 78–82%. The simulated vibrato, up to ±50, is wider than that target.
    - A tune 70 off throughout: 75%. Each note sits only 20 past the line of "on", inside the vibrato's reach.
- **Checks:** npm test exit 0; browser checks below.

## The remaining rates (coordinator, after the sixth confirmation review)

- **Steadiness over full cycles:** held notes are judged on a 0.4 s center (two vibrato cycles at 5 Hz).
- **Note centers:** a note's center is an interquartile mean.
- **Starts:** a held start is read with its first half second, so the attack does not decide it.
- **l4, l5 and l6 stretch groups:** the closer target is now 35, not 25; ±25 cannot be judged reliably for a voice with natural vibrato, and
  the plan says so.
- **Measured (300 tries each, 50 ms, 66.7 ms and a mix):**
  - all 43 outcomes at least 95% on mark, pass, guess, "You said" and fix;
  - l4's closer steady hold 97–99%;
  - stopped 100%;
  - a tune 70 off throughout 98–100%.

## After the seventh confirmation review (`review-confirm-7.md`)

- **D5, at the root:** tunes and intervals are now split where the voice sang each note (fitted to the notes, pulled to the played rhythm at
  the singer's own tempo), not into fixed slots. A gap is a stop only when the voice was silent.
- **Measured** (`tests/sing-sim.mjs`, 58 outcomes × 300 tries × 4 conditions):
  - Tunes sung in the played rhythm (late, slower, faster, carry-over), slow tunes and two-note runs: 98–100% at every rate, the harsher voice
    included.
  - Every outcome at 50 ms, 66.7 ms and the mix: at least 95%.
  - The harsher voice, all at least 95% except these, each with a reason stated in the test:
    - the 35 stretch hold: 88%;
    - the shortest hunt: 92%;
    - a tune 70 off throughout: 92%;
    - 35 tunes: 93–94%.
- **Checks:** npm test exit 0; browser checks below.

## After the eighth confirmation review (`review-confirm-8.md`)

- **The fix, at the root:** sung runs are aligned to the played notes by dynamic programming, with a pitch cost, a duration prior at the
  singer's own tempo and lag (read from heard note changes) and the run's own octave. Every note gets a stretch; "Not heard" is used only for
  a silence.
- **Measured** (`tests/sing-sim.mjs`, 92 outcomes × 150 tries):
  - **A wrong note** (1.5–3 half-steps off, at the neighbour's pitch, held across, or left out), in a tune or a pair, in time or slower: named
    with its side at least 95% at 50 ms, 66.7 ms and the mix; at least 90% with the harsher voice.
  - **Right tunes:** at least 95% in every rhythm. The one exception is a carry-over of 0.35–0.6 s on every change: 91% (mix) and 88%
    (harsher voice). That floor is stated.
  - **Everything else:** at least 97%.
- **Checks:** npm test exit 0; browser checks below.

## After the ninth confirmation review (`review-confirm-9.md`)

- **D7, at the root:** silence is its own state between notes, never part of a note. A note's onset is the voice sounding again after a
  silence, or a step it sings on (legato half-steps included); the tempo (0.7–1.6×) and lag are tried wherever the onsets allow and the
  split's own cost picks; one common offset is read from the best split, then taken out; the held last note keeps its length; a middle
  note left out in a silence is as well explained as one begun at an onset. A run whose last note is held is listened to long enough for
  a singer 1.5× slower. Details: `shared-helper-changes.md`.
- **Every reviewer's scenario is permanent:** `tests/sing-sim.mjs` runs the taught outcomes, the ninth review's simulator widened to gaps of
  60–250 ms, tempos 0.75–1.5× and legato against detached, and every script the reviews wrote (`tests/sing-sim/reviews/`: 603 fixed cases
  locked, the statistical ones held to floors), with every scored answer checked against the rules every answer keeps.
- **Measured** (`SIM_SCALE=1 SIM_TABLE=1 node tests/sing-sim.mjs`, 11,132 rates):
  - clean voice: every rate at least 96.5%;
  - ordinary voice: every rate at least 95.5% (runs 96%, the eighth review's runs 95.5%), the lessons' outcomes at least 96.7%;
  - harsh voice, stated floors: runs 80% (lowest 82.8%), the eighth review's runs 70% (lowest 73%) and 55% on the 35 stretch (lowest
    59%; that review measured 22%), the seventh review's simulator 80% (lowest 83.5%), the lessons' outcomes 85–90% where stated.
- **Checks:** npm test exit 0; browser checks X8 X10 X11 X12 X16 X22 X29 X48 X51: 465 passed; learner views l1–l12 regenerated.
