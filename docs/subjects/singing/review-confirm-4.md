# Singing: fourth confirmation review before shipping (2026-10-22)

Fresh reviewer, both roles, on the D1 fix from `review-confirm-3.md`. The fix has three parts:
- Held notes are judged by their center: the median of the readings within 0.1 s either side (`singCentered`, `SING_CENTER_S`).
- "Stopped" is used only when the sound stops (`singLeftMs` counts every off-note excursion; `SING_RUN_GAP_S` is now 0.2 s).
- The release is left out of `end`.

I ran the app's own functions (`singAnswer` -> `singOk`, `singJudge`, `singMarksHtml`, `singMissHtml`, `singGuessAgrees`) through
`tests/load-app.mjs` on the following (scratchpad `c4/`):
- every contour from review-confirm-2 (`c2/`) and review-confirm-3 (`c3/`);
- new beginner tries (`c4/new.mjs`): brief slips of 100 to 300 ms, real stops with gaps of 150 to 700 ms, a breath break, slides, drifts,
  vibrato with noise and dropouts, and hunts at three speeds;
- Monte-Carlo wobbly holds of 2 s and 6 s, and wobbly long last notes in tunes (`c4/melwob.mjs`, 400 tries each).

Test results: `node tests/sing-pure.mjs` passed 143 checks (16 seeded faults turned red), `audio-pure.mjs` passed 710 and
`engine-pure.mjs` passed 150.

## Verdicts

| Lesson | Verdict | Deciding defects |
|---|---|---|
| l2 Match a note | PASS | none |
| l3 Check before you fix | PASS | none |
| l4 Hold it steady | PASS | none (D1 fixed) |
| l5 Steps and jumps | PASS | none |
| l6 Short tunes | FAIL | D2 |
| l9 A breath that lasts the line | PASS | none (D1 fixed) |
| l12 Find the cause | FAIL | D2 |

## D1: fixed and confirmed

"Stopped", with its air advice, now appears only when the sound stopped.
- **Y23** (on 1.2 s, a -80 dip for 0.2 s, back on): "Steady for 1.4 of 2 seconds, wandered off and back", with the advice "keep the
  loudness even and your ear on the note". There is no air line.
- **Z11** (the same dip on a tune's last note): wander.
- **Y2, H8 and Z9** (vibrato +-55 at 5.5 Hz) pass as steady. So does vibrato of +-80 at 5 Hz, and +-50 with 15 cents of noise and 15%
  dropouts.

Brief slips:
- An excursion of 100 ms (-80 or +120) is absorbed by the center and passes. That is the intended judgement call.
- An excursion of 150 ms or more is "wandered off and back", and the measured hold is the longest stretch on the note.

Real stops (no sound):
- A gap of 150 ms is not a stop: the hold passes.
- Gaps of 250, 400 and 700 ms, a stop with no return, and B1 to B6, H18, H30, T11 and T12 are all "then the sound stopped", with the air
  advice. That is right.

Continuous wobbly beginner holds (`c3/wobble.mjs`) never get the "stopped" story now. Before the fix it was 126 of 136 fails.

| Hold, wander SD | Passed | Fails |
|---|---|---|
| 2 s, SD 20 | 92% | every fail "wandered off and back" |
| 2 s, SD 25 | 81% | wander 67, drift 4, off from the start 5 |
| 6 s, SD 20 | 78% | wander 87, off from the start 1 |
| 6 s, SD 25 | 45% | wander 204, drift 13, off from the start 5 |

Readings that arrive more slowly (`c3/cadence.mjs`) mostly pass now. That was polish 1 in confirm-3.
- Every 66.7 ms with 3% unclear readings: 98% of 2-s holds and 93% of 6-s holds pass (before the fix, 46% and 8%).
- Every 100 ms with dropouts, 6-s holds still fail often (36% pass with 3% unclear). That rate is rare (polish 4 below).

## Earlier cases: not broken

- **E1:** M4 to M7 are marked where they sat, with "slid up/down, but did not settle on it".
- **E2:** H13, H14 and T8 read "off the note from the start".
- **E3:** B1, B3, B4, H18, H30, T11 and T12 are "then the sound stopped".
- **E4:** H4 is "off from the start, then found it". The hold guess is still checked against where the note ended.
- **E5:** 1950 ms shows "1.9 of 2".

The rest of confirm-3's contours read as before:
- vibrato on a match;
- two-step slides (X6 to X8, Y5, Y6, Z10);
- noisy, octave-error and fifth-error tracks;
- late, short and last-200-ms notes;
- an octave off, and wrong notes a fourth, a fifth or a tritone away;
- tunes with one wrong, silent or octave-low middle note, and swapped notes;
- intervals.

The release fall-off (polish 5 there) is now left out:
- A passing hold that falls 300 cents over its last 100 to 250 ms reads steady and on.
- Z18 passes.

**Every example sound still scores as labeled** (11 of 11):
- l3: On, A shade under, A shade over, Sliding up into it, On, and Hunting (2 turns, in the match window and over its full 3.5 s).
- l4: "Holding steady" reads Steady for 2 seconds. "Sinking under" reads "Steady for 1.5 of 2 seconds, then sank under".
- l5: the small step and the big jump are on; the short jump has note 2 "A shade under".

## Deciding defect

**D2. A tune whose last note dipped and came back is told the learner's "On" was wrong, and that the note "went both ways" (l6, l12).**
This is new with the D1 fix. Those notes used to be "stopped", which measured as on. They are now `wander`.

What the code does:
- For a hold, `singJudge` checks the guess against where the note ended.
- For a tune, it checks the guess against the last note's mark.
- The `wander` mark has no side (`side: () => null`).
- So "You said: On" is marked as disagreeing, with `singGuessNeither`: "The app measured: wandered off and back. It went both ways, so it
  was neither under nor over."

Why this is wrong:
- l6 asks "was your last note under, on or over?", and l12 says "Say where your last note landed".
- A wander, by l4's definition and by `SING_OUTCOMES`, began and ended on the note. "On" is the right answer to what was asked.
- "It went both ways" is false for a dip on one side only, which is the usual case.

Examples:
- Z11 and `c4/new.mjs` "M last note slip -80 0.2s": all three guesses get the "neither" line, including the true "On".
- `c4/melwob.mjs`, a tune with a wobbly long last note:
  - At wander SD 20, 33 of the 34 failing tries end as wander. Every one ended on the note, and every "On" is rejected.
  - At SD 25, 78 of 83 fails end as wander.

This is the commonest failing tune a beginner will sing. In the two lessons whose guess trains the ear (l3's "check before you fix"), it
tells a learner who heard correctly that they did not. The guess is never scored, but the red mark and the false reason teach the wrong
thing about their own ear.

Fix: for a tune's last note, check the guess against where it ended, as a hold already does (`last.parts.endSide` when the last note was
held). Use `singGuessNeither` only for a hunt, where "both ways" is true. Add Z11 with the guess "On" agreeing to `tests/sing-pure.mjs`.

## Learner role

The learner views of l4, l6, l9 and l12 agree with what the app now says.

l4 and l9:
- They say "say where your note ended", and the prompt "where did your note end, under, on or over?" is the one the app shows.
- Their example line "Your note ended higher than it sounded to you" is what the app shows for a hold.
- l4's "If it drifts, nudge it back while you hold; do not stop" agrees with the wander line.
- l9's "The app measures only the note ... If the air ran out ... breathe a little earlier" now meets the air advice only when the sound
  stopped (B1 to B6).

l6 and l12:
- They ask about the last note "under, on or over", and their example line "Your note was higher" is what the app shows for a tune.
- The disagreement is D2.

I re-read the teaching screens and the sung-question descriptions only; the lesson text is otherwise unchanged since confirm-3. No new
learner defect.

## Research role

No wrong or out-of-date fact in the re-read text, and no arguable marked answer.
- `SING_OUTCOMES.says` for `stopped` ("the sound stopped or broke ... without the voice leaving the note") now matches the code.
- `SING_CENTER_S` (0.1 s) and `SING_RUN_GAP_S` (0.2 s) are labeled judgement calls; the research note sets neither, as confirm-3 noted.

## Polish (does not decide a verdict)

1. **l4 calls a wander occasional.** It says "Now and then it wanders off and comes back", but a wander is now the commonest failing
   hold a beginner sees (about 90% of fails above).
   - Polish because the definition and the fix are right; only "now and then" undersells it.
   - Fix: drop "Now and then", or say "Often it wanders off and comes back".
2. **A fast hunt is hidden by the center.** A match zigzagging +-150 cents in 150-ms legs, then settling (`c4/new.mjs`), now reads
   "On the note" with 0 turns. Legs of 200 and 300 ms still read as hunting.
   - Polish because a beginner's search is slower than three turns a second, and l3's example still hunts.
   - Fix: judge `singTurns` on the raw readings, or on a shorter window.
3. **A breath followed by an off note is called "sank under".** A hold that breaks for a 0.35-s breath and comes back 80 cents low is
   "then sank under", with the nudge advice. The break is not named.
   - Polish because the advice still points the right way.
4. **Readings every 100 ms with dropouts.** 6-s holds still fail often (36% pass with 3% unclear readings).
   - Polish because this needs a 20-fps screen and a weak signal.
5. **The same outcome said twice.** A tune's note 5 shows "Wandered off and back" and then "Steady for 1.6 of 2 seconds, wandered off and
   back" (polish 7 of confirm-3, now for wander too).
   - "Steady for 0 of 2 seconds, off the note from the start" (T8, H13) reads oddly.
6. **Still open from earlier reviews:**
   - H3 (-70 for 0.8 s, then on) passes silently.
   - Tune notes other than the last get no slide or hunt check.
   - X30 (a slow glide that settles late) reads "did not settle".

## Counts

- Deciding: 1, engine feedback (D2: a tune's last note that wandered and ended on is told the guess "On" was wrong, "went both ways").
  It affects l6 and l12, and it is new with the D1 fix.
- D1: fixed and confirmed. E1 to E5: still fixed.
- Example sounds: 11 of 11 score as labeled.
- Wrong facts: 0. Arguable answers: 0. Carried-over structures: 0. New learner defects: 0.
- Polish: 6.
