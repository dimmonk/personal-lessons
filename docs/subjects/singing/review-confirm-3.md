# Singing: third confirmation review before shipping (2026-10-22)

Fresh reviewer, both roles, on the three-part judging of sung notes (`public/app/lessons/sing-judge.js`: `singParts` began / did / ended,
`SING_OUTCOMES`, `singJudge`), with `sing-score.js` (`singHoldMs`, the new `singLeftMs`) and the words in `sing-strip.js` and `view.js`.
Learner views read for the taught definitions: l2, l3, l4, l5, l6, l9, l12. The app's own functions (`singAnswer` -> `singOk`, `singJudge`,
`singMarksHtml`, `singMissHtml`, the Under/On/Over guess) were run through `tests/load-app.mjs` on about 100 new contours that the earlier
reviews did not use, sampled like the microphone (scratchpad `c3/`: `match.mjs`, `hold.mjs`, `mel.mjs`, `iv.mjs`, `release.mjs`,
`wobble.mjs`, `cadence.mjs`, `voice.mjs`). Those contours cover vibrato, two-step slides, noisy tracks with dropouts and octave or fifth
errors, late starts, notes in the last 200 ms, very short tries, an octave off, a wrong middle note, release fall-offs and Monte-Carlo
wobbly holds. I also ran the tracker (`detectPitch`) on made-up voices. `node tests/sing-pure.mjs` passed 139 checks (16 seeded faults
red), `audio-pure.mjs` passed 710 and `engine-pure.mjs` passed 150.

## Verdicts

| Lesson | Verdict | Deciding defects |
|---|---|---|
| l2 Match a note | PASS | none |
| l3 Check before you fix | PASS | none |
| l4 Hold it steady | FAIL | D1 |
| l5 Steps and jumps | PASS | none |
| l6 Short tunes | FAIL | D1 (the long last note) |
| l9 A breath that lasts the line | FAIL | D1 (its central case) |
| l12 Find the cause | FAIL | D1 (practice and check tunes) |

## What now works (re-run of review-confirm-2's cases)

The earlier defects E1 to E5 are fixed:
- E1: M4, M5, M6 and M7 are now marked where they sat ("A shade under" or "A shade over"), with "started under ... slid up, but did not settle
  on it" and the fix.
- E2: H13, H14 and T8 now read "off the note from the start" and no longer say "sank" or "rose".
- E3: B1, B3, B4, H18, H30, T11 and T12 now read "On the note, not long enough" with the breath advice, not "wandered".
- E4: the hold guess now measures where the note ended ("where did your note end"). H4 answered "On" agrees.
- E5: 1950 ms shows "1.9 of 2".

These new contours also read correctly:
- Vibrato up to +-50 on a match or hold. Vibrato +-40 around -70 reads a shade under.
- Two-step slides into the note (X6, X8, Y5, Z10), and those that stop off it (X7, Y6).
- Noisy matches with 20-40% dropouts or 10% octave errors.
- Late starts on a match.
- A note only in the last 200 ms: not counted, "I did not hear you".
- A very short on-note match.
- An octave off: folds to on, with or without a scoop.
- A wrong note a fourth, fifth or tritone away: well over or under by the right half-steps.
- A tune with one wrong, silent or octave-low middle note: 4 of 5, marked note by note, passes.
- Swapped notes 2 and 3.
- Intervals with scoops, late notes and noise.

**Every example sound still scores as labeled.** l3: On, A shade under, A shade over, Sliding up into it, On, Hunting (in the match window
and over its full length). l4: Steady for 2 seconds; "Sinking under" fails as "Steady for 1.5 of 2 seconds, then sank under". l5: small
step and big jump both on; the short jump has note 2 "A shade under".

## Deciding defect

**D1. A held note that never stopped, but slipped off the note for a moment, is told it stopped, and to breathe earlier (l4, l6, l9,
l12).** `singHoldMs` breaks the hold at any reading outside the tolerance. `singLeftMs` counts as "leaving" only an off stretch of 250 ms
(`SING_LEFT_MS`) or more. So a hold broken only by brief wobbles off the note falls to the `stopped` row, which the judge defines as "it
stopped early or broke, without leaving the note". It is told "Your voice stayed on the note, but only 1.4 seconds in one go ... if the air
runs out, breathe a little earlier and fuller next time", and marked "on the note but not in one go". The same 200 ms both breaks the hold
and is said not to have left the note.
- Y23: on 1.2 s, a dip to -80 for 0.2 s, back on to the end. The result is "Steady for 1.4 of 2 seconds, on the note but not in one go",
  with the stopped / air line. The voice never stopped, and it did leave the note. Z11 (a tune's last note) gets the same.
- Vibrato +-55 at 5.5 Hz (Y2, H8, Z9) gets "Steady for 0.3 of 2 seconds ... stayed on the note ... breathe a little earlier".
- Simulated continuous beginner holds (slow wander SD 20 cents, frame noise 10, `c3/wobble.mjs`, 400 tries each):
  - 2-s hold: 34% fail, and 126 of those 136 fails are told "stopped" with the air advice.
  - 6-s hold (l9): 77% fail, and 293 of 309 are told "stopped".
  - At wander SD 25 to 30, "stopped" stays the commonest story.

  Untrained voices are no steadier than this, so it is the result a beginner will see most.
- l4 teaches the cause as a drift or wander and says "If it drifts, nudge it back while you hold; do not stop". l9's whole point is to judge
  the air separately: "The app measures only the note ... Whether you had air left at the end is yours to notice." Telling a learner whose
  air was fine to breathe earlier sends them to the wrong fix, in the one lesson about air.

Fix: `stopped` should mean the sound stopped. Name a hold as stopped only when its longest on-note run ended at a gap in clear sound (no
reading for longer than a tracker dropout, see polish 1) or at the end of the sound. When the run ended at an off-note reading and the voice
came back, it left the note. Name it by where it went: the `wander` row ("wandered off and back"), with any brief excursion counting, and
`singLeftMs` measuring only off-note readings. Whether a single 50 ms reading off the note should break a hold at all is a separate scoring
choice. A median of 3 readings before the tolerance test would stop frame noise from breaking holds, but l4's "without a break" is the
owner's bar. Add Y23, Y2 and Z11 to `tests/sing-pure.mjs` with their expected rows.

## Learner role

The lesson text is the same as `review-confirm.md` and `review-confirm-2.md` passed, apart from three lines:
- l4 and l9 now say "say where your note ended".
- The hold prompt reads "where did your note end, under, on or over?".
- l12 says "Say where your last note landed".

These agree with what the engine measures: the end for a hold, and where the note settled for a tune's last note, as l3 uses "land". I could
state each lesson's way of deciding from its teaching screens. I re-read the teaching screens and the sung-question descriptions, not every
practice question (three rounds passed them). No new learner defect.

## Research role

No wrong or out-of-date fact in the re-read text. `SING_OUTCOMES.says` now matches the lessons' definitions row by row. The exception is
`stopped` ("without leaving the note"), which the code applies to holds that did leave the note: that gap is D1. Vibrato is not mentioned in
the research note, plan or design, so no source covers how a voice with natural vibrato is judged (polish 2). No arguable marked answer and
no carried-over structure in the screens re-read.

## Polish (does not decide a verdict, with why)

1. **Tracker dropouts and the reading rate.** `SING_RUN_GAP_S` (0.12 s) breaks a hold at any gap over 120 ms. Readings come from
   `requestAnimationFrame` whenever 50 ms have passed, so on a 60 Hz screen they often come every 66.7 ms, and every 66.7 ms in iOS Low
   Power Mode (30 fps). A single unclear reading then leaves a 133 ms gap, and the hold "stopped".
   - Simulated with single dropouts at 66.7 ms: on-note 2-s holds pass 46% with 3% dropouts. 6-s holds pass 8%.
   - Polish, not deciding: the tracker gave no unclear readings on made-up "oo" voices down to 6 dB signal-to-noise or with moderate breath
     noise (`c3/voice.mjs`). It drops readings only near the loudness floor (`PITCH_RMS_MIN`) or with very breathy sound, so a clear voice
     rarely meets this.
   - Fix: allow a gap of about 0.2 s (shorter than any breath) as unbroken, or measure the gap in readings rather than seconds.
2. **Vibrato.** A match with vibrato of +-55 or more is "Hunting for the note" (X3, X4). The same on a hold is the D1 "stopped" story.
   Polish because untrained adults rarely have a regular vibrato that wide. If the owner's voice does, judge a regular wobble by its middle,
   and count turns only beyond a wider swing or at an irregular rate.
3. **A slow glide in.** A match that glides from -250 over 1.2 s and then sits on the note for 0.6 s (X30) is marked "A shade under", with
   "slid up, but did not settle on it". It did settle, late. Polish because a beginner's scoop takes a few tenths of a second. Say
   "settled late" when its last stretch was on the note.
4. **Very short or very late.**
   - A 0.35 s scoop-and-stop match (X21) reads "A shade under".
   - A hold started 1.2 s late (Y14) gets the stopped line where "start sooner" is the fix.
   - Tune notes of 0.2 s (Z14) are "Not heard".
   - Notes sung 0.65-0.9 s late read well off (Z6, T14).

   Real tries rarely do these, since the screen says "Sing now" and the notes are 0.8 s.
5. **A release fall-off.** A passing hold, or a tune's last note, that falls 300 cents over its last 200-300 ms as the voice stops reads
   "Steady for 2 seconds, then sank under". The guess "On" is then told "ended lower" (`c3/release.mjs`, Z18). Releases faster than 150 ms
   are ignored, and a learner who sings until the screen moves on ends outside the window. Ignore the last 150-200 ms before the sound
   stops when finding `end`.
6. **Fifth errors from the tracker** (x1.5 readings, 5-8%) read as hunting on a match (X12) and break holds (Y10). McLeod's method rarely
   makes them, but a 3-reading median before `singTurns` would remove them.
7. **Wording.**
   - "On the note but not in one go" is odd for a single clean stop (B1, B4). Use "stopped after n seconds".
   - A tune's note 5 can show "Not heard" next to "Steady for 0.1 of 2 seconds" (Z8).
   - Note 5 "On the note, not long enough" and the line "Steady for 1 of 2 seconds, on the note but not in one go" say the same thing two
     ways.
   - The l4 and l9 learner views' guess example says "Your note was higher" where the app now says "Your note ended higher".
8. Still open from review-confirm-2:
   - A hold -70 for 0.8 s and then on passes silently (H3).
   - Tune notes other than the last get no slide or hunt check (T15, Z16).

## Counts

- Deciding: 1, engine feedback (D1: a brief wobble or vibrato is called "stopped" and given the air advice). It affects l4, l6, l9 and l12.
- Earlier E1 to E5: fixed and confirmed.
- Example sounds: 11 of 11 score as labeled.
- Wrong facts: 0. Arguable answers: 0. Carried-over structures: 0. New learner defects: 0.
- Polish: 8.
