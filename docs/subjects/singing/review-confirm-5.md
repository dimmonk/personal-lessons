# Singing: fifth confirmation review before shipping (2026-10-22)

Fresh reviewer, both roles, on the D2 fix from `review-confirm-4.md`: a tune's last note is now asked where it ended, by the same path as a
hold (`singEndReading` in `sing-judge.js`). Since confirm-4 the clone also changed:
- hunt turns are now read on a shorter center (`SING_TURN_CENTER_S`, 0.05 s);
- a hold with no time on the note now reads "Not steady on the note for any of the 2 seconds";
- a tune's long-note line no longer repeats the last note's outcome;
- l4 now says "Often it wanders off and comes back".

I ran the app's own functions (`singAnswer`, `singOk`, `singJudge`, `singMarksHtml`, `singMissHtml`, `singGuessAgrees`) through
`tests/load-app.mjs` (scratchpad `c5/`):
- every earlier harness (`c2/`, `c3/`, `c4/new.mjs`, `c4/melwob.mjs`), diffed line by line against confirm-4's outputs;
- `c5/mc.mjs`, a sweep of 3,000 holds and tunes with random beginner faults on the held note: dips, drifts, vibrato, slides, real stops and
  an off start that finds the note. It checks four things:
  - the guess agrees exactly when it equals where the note ended;
  - "both ways" never appears outside a hunt;
  - each fix line points the right way;
  - the mark agrees with the pass;
- `c5/mc.mjs` and `c5/cad.mjs`: matches with vibrato, slow wander and detector glitches, with readings every 50 ms, every 66.7 ms, and a
  mix of the two.

Tests: `node tests/sing-pure.mjs` passed 145 checks (16 seeded faults turned red). `audio-pure.mjs` passed 710 and `engine-pure.mjs`
passed 150.

## Verdicts

| Lesson | Verdict | Deciding defects |
|---|---|---|
| l2 Match a note | FAIL | D3 |
| l3 Check before you fix | FAIL | D3 |
| l4 Hold it steady | PASS | none |
| l5 Steps and jumps | PASS | none |
| l6 Short tunes | PASS | none (D2 fixed) |
| l9 A breath that lasts the line | PASS | none |
| l12 Find the cause | PASS | none (D2 fixed) |

## D2: fixed and confirmed

- **Z11 and "M last note slip -80 0.2s":**
  - The mark reads "Wandered off and back".
  - Guess "On": "The app measured it the same way."
  - Guess "Under": "The app measured: on the note. Your note ended higher than it sounded to you."
- **`c4/melwob.mjs`:** among tunes whose wobbly last note ended on the note, guess "On" is rejected 0 times at wander SD 15, 20 and 25. At
  confirm-4 that was 33 of 33 and 78 of 78.
- **A tune's last note that stopped** now reads "measured: on the note ... ended", not "on the note, then stopped".
- **A tune's last note that started off and found the note** ("R tune last -70 then on"):
  - Guess "On" agrees.
  - The mark still says "A shade under", and the long-note line says "off the note from the start, then found it".
  - This is the same as the hold case E4, and it fits l6 and l12's question "where did your last note end".
- **A tune whose last note sat off throughout** is now told "Your note ended lower", where it used to say "started lower". That is true,
  and it is what the question asks.
- **The 3,000-try sweep:**
  - "both ways" appears 0 times.
  - The guess agrees exactly when it equals the end side, every time.
  - The end side is never missing on a heard note.
  - Every drift line points the right way: "nudge it back up" after sinking, "ease it back down" after rising.
- **"both ways" now appears only on hunts:** M12, and hunts with 200-ms and 300-ms legs. That is true for a hunt.

## Earlier cases: not broken

- **E1 to E5, and confirm-3's D1:** unchanged since confirm-4 (`c3-hold`, `c3-match`, `c3-iv`, `c3-wobble`, `c3-cadence`, `c2-l9`, and
  `c4/new.mjs`).
  - Brief slips of 150 ms or more read "wandered off and back".
  - Gaps of 250 ms or more read "then the sound stopped", with the air advice.
  - No line says "stopped" when the voice left the note.
- **Other output changes since confirm-4**, all improvements:
  - "Not steady on the note for any of the N seconds" (confirm-4 polish 5).
  - The duplicate tune line is gone.
  - M12 (-200, +100, -100, +60, then on) now reads "Hunting for the note". It was "On the note".
- **Every example sound still scores as labeled** (12 of 12):
  - l3: On, A shade under, A shade over, Sliding up into it, Landing on it, and Hunting (in the match window and over its whole 3.5 s).
  - l4: Holding steady; Sinking under ("Steady for 1.5 of 2 seconds, then sank under").
  - l5: the small step, the big jump, and the jump that falls short (note 2 "A shade under").

## Deciding defect

**D3. On a phone that reads the voice every 66.7 ms, a steady match is often called "Hunting for the note" (l2, l3; also l7 and l8's
light notes).** This is new with the shorter hunt center.

What changed:
- `singTurns` now reads its turns on a center of ±0.05 s (`SING_TURN_CENTER_S`).
- At readings every 50 ms that center holds three readings, and a single stray reading is smoothed away.
- But readings come from `requestAnimationFrame` whenever 50 ms have passed (`audio-meter.js`). On a 60 Hz screen they often come every
  66.7 ms, and in iOS Low Power Mode always. confirm-3 established this.
- At 66.7 ms the ±0.05 s center holds only the reading itself. Every glitch and every vibrato swing counts as a turn.

Measured (`c5/cad.mjs` and `c5/mc.mjs`, 200 to 300 tries each; "mix" is a 60 Hz screen giving 50 or 66.7 ms at random):

| Steady, on-note match | 50 ms | 66.7 ms | mix |
|---|---|---|---|
| 3% fifth-errors from the pitch detector | 1% hunt | 16% hunt | 25% hunt |
| 5% fifth-errors | 3% | 36% | 47% |
| vibrato ±55 cents at 5.5 Hz | 0% | 98% | 9% |
| vibrato ±55 at 5 Hz / 6 Hz (200 tries) | 0% | 86% / 96% | n/a |
| plain jitter, octave errors or 10% unclear readings | 0% | 0% | 0% |

Why it misleads a real learner:
- A beginner who sang the note steadily fails the try and is told "Your voice wandered up and down before it settled. Hear the note in your
  head before you sing; if it still wanders, slow down."
- The try then comes back.
- l3 teaches hunting as a fault of the ear. This tells a learner whose ear was right that it was wrong, on the lessons that build the habit
  of checking.
- With a guess, the line "It went both ways, so it was neither under nor over" also overrules a correct "On".

Fix:
- Count the hunt center in readings (the reading and one neighbour each side), not in seconds.
- Or set `SING_TURN_CENTER_S` to at least one reading interval at 30 frames a second (about 0.07 s).
- Add 66.7-ms copies of X12 (fifth errors) and of the vibrato match to `tests/sing-pure.mjs`. Keep M12 and the 200-ms hunt reading as
  hunts.

## Learner role

The learner views agree with what the app now says.
- **l4:** "Often it wanders off and comes back" (confirm-4 polish 1, fixed).
- **l6 and l12:** they now ask "where did your last note end, under, on or over?". l12 says "Say where your last note ended". Their example
  "Your note ended higher than it sounded to you" is what the app shows for a tune.
- **l4 and l9:** unchanged, and in agreement.
- No new learner defect.

## Research role

- No wrong or out-of-date fact in the changed text, and no arguable marked answer.
- `SING_TURN_CENTER_S` is labeled a judgement call. The research note sets no window; D3 is about what that window does at a real reading
  rate, not about a source.

## Polish (does not decide a verdict)

1. **A fast hunt is still hidden at 50 ms.** Legs of 150 ms still read "On the note" with 0 turns (confirm-4 polish 2, still open). The fix
   for D3 should keep the 200-ms hunt and M12 as hunts.
2. **A passing hold that ended off has a green mark.** It reads "Steady for 2 seconds, then sank under", and the try passes, while the
   outcome's own `good` is false. This matches l4's "held, then sank under" and earlier rounds; it is noted only so it stays intended.
3. **Still open from earlier reviews:**
   - Readings every 100 ms with dropouts fail 6-s holds.
   - A breath followed by an off note reads "sank under".
   - H3 passes silently.
   - Tune notes other than the last get no slide or hunt check.
   - X30 reads "did not settle".

## Counts

- Deciding: 1, engine feedback (D3: hunt turns depend on the reading rate). It affects l2 and l3, and outside this review l7 and l8. It is
  new since confirm-4.
- D2: fixed and confirmed. D1 and E1 to E5: still fixed.
- Example sounds: 12 of 12 score as labeled.
- Wrong facts: 0. Arguable answers: 0. Carried-over structures: 0. New learner defects: 0.
- Polish: 3.
