# Singing: changes to shared helpers and the engine (for the lessons 7 to 12 builder)

Logged by the lessons 1 to 6 fixer. `public/subjects/singing/items-shape.js` (`sgCase`) is **unchanged**: any item built with it keeps working.

## 2026-10-22, round 2 of the reviews of lessons 1 to 6 (`public/app/lessons/`)

- **A sung answer may carry `turns`** (match and light notes): how many times the note turned back by more than a shade. Two or more is a hunt:
  "Hunting for the note", not on the note (`singHunted`, `SING_HUNT_TURNS`). A `light` question in lesson 7 is judged the same way as a match:
  on the note, not slid, not hunted, and no louder than talking.
- **A hold stores `start` as well as `end`**: off from the start, or on at the start and then sank or rose. A melody stores `end` for its long
  last note, and a last note that did not hold says which way it went.
- **One reading of what was measured** (`singMeasured`): the "You said" line always agrees with the note's own mark. A hold is asked where it
  ended ("where did your note end, under, on or over?"), and a hold shows the "You said" line too.
- **`SAY.singGuessAsk` now takes the task name** (`'match'`, `'hold'`, `'melody'`...), not a true/false for a run.
- New words: `SAY.singWord.hunt`, `.sank`, `.rose`, `SAY.singHuntLine`, `SAY.singStartLine`, `SAY.singGuessHunt`; `SAY.singGuessOther`
  takes a third argument, `'started'` or `'ended'`.
- Unchanged: the case shape, the lists' form, mixed checks (`{ ask: 'sing', ... }`), `feedback: 'at-end'` on a sung group with `guess`.

## 2026-10-22, by the lessons 7 to 12 builder: the retest of a check with sung tries

- `public/app/lessons/schedule.js`, `retestInstances`: a `{ sing, n }` reference in a check is made again n times from its own task, each on a
  seed no try of that task has used (`freshSeed`). Before, a sung reference fell through to the topic lookup and was dropped from a retest.
- `public/app/lessons/review.js`, `runRetest`: starts through `startQueueWithRange` (the range exercise first when none is stored);
  `paintRetestResult` words its rules with `rightWord` ("on the note"); the intro of a retest whose check shows results after each try says so
  (`REVIEW_TEXT.retestIntroEach`).
- No scoring, feedback or sung-run code changed. Validator: V78 refuses a sung check's `retest` under 1 day. Test: `tests/engine-pure.mjs`.

## 2026-10-22, round 3 of the reviews of lessons 1 to 6 (scoring and feedback only)

- **`singHeldShape(ask, answer)`** names a held note (a hold, or a melody's long last note) one way everywhere: `{ slid, end, off }`. Off
  from the start only when it began off (not by sliding in) and ended off on the same side; otherwise sank or rose by its end. A melody's
  last window now also stores `start` (`onset` on the melody plan). A melody's guess is measured at its last note's end, like a hold's.
- **`singSlid(answer, note)`** takes the note to compare with (default: the first; a held note passes its own).
- **`singWordKey`** says "A little under/over" (`littleUnder`, `littleOver`) for a note off by up to half a half-step when a task's `cents` is
  under 50 (`SING_LITTLE_CENTS`); "a shade" is always more than half a half-step. New SAY words: `singWord.littleUnder/littleOver`,
  `singVoice.littleUnder/littleOver`, `singThen` (", then sank under" after a hold or a tune's long note that held and then drifted).
- Nothing in the retest path was touched.


## 2026-10-22, after the confirmation review: one table of outcomes

- New `public/app/lessons/sing-judge.js` (in `index.html` and `sw.js` after `sing-task.js`). `SING_OUTCOMES` is the lessons' definitions of
  each outcome of a sung note, as rules:
  - missed, hunt, slid;
  - steady, held then drift;
  - off from the start, drift, wandered off and back;
  - sat.
- `singJudge` walks that table and returns each note's mark, the outcome a guess is about, and the lines to say. Moved here:
  `singMeasured`, `singMeasuredSide`, `singGuessAgrees`.
- Removed: `singHeldShape` and `singLastKey` (sing-task.js); `singShapeKey`, `singHoldLines` and `singAfterStart` (sing-strip.js).
- `singMarksHtml` and `singMissHtml` read only `singJudge`.
- A held note that did not stay on long enough is off from the start whenever it started off (not slid), whatever it does next. It is then
  followed by crossed, further or found (`SAY.singFoundLine`).
- New `SAY` texts:
  - `singHeldHow` names a hold's outcome after "Steady for n seconds", replacing `singThen`.
  - `singWord.wander`.
  - `singGuessNeither` replaces `singGuessHunt`.
  - `singGuessAsk('hold')` is now the plain "was your note under, on or over?". The result says whether it measured the start or the end.
- `FC.ENGINE` stays 16.
- `tests/sing-pure.mjs` has the confirmation review's cases and a grid of 400 sung contours. Each is checked against the lessons' definitions
  and for agreement between the mark, the "You said" line and the direction lines.

## 2026-10-22, after the second confirmation review: three parts of a note

`sing-judge.js` now judges a note in three parts and names each lesson's outcome as a combination of them in `SING_OUTCOMES`:
- **Begin:** on, slid in (with where it landed) or off.
- **Middle:** steady, drift, wander, stopped; or, after an off start, found, crossed, further or stayed.
- **End:** on, under or over.

The changes:
- A slide that did not settle on the note is named where it sat (`SAY.singSlidOffLine` plus the way to move).
- A hold that stayed on the note but stopped or broke is `stopped` (`SAY.singStoppedLine`, `singWord.stopped`), never "wandered".
  - `singAnswer` stores `left`: how long a held note left the note between two stretches on it (X11's number fields include it).
- A hold's guess is checked against where it ended, as l4 and l9 ask, and the prompt asks that again. `singHeldHow` reads the parts.
- Seconds are shown floored to tenths, and "1 second" is singular. A note's lines carry its number once.
- `FC.ENGINE` is 17.
- `tests/sing-pure.mjs` adds:
  - a generator of composite contours, about 135 held notes (hold 2 s, hold 6 s, a tune's last note), each checked against the definitions
    and for agreement;
  - the review's cases;
  - a seeded fault.

## 2026-10-22, after the third confirmation review: stopped means the sound stopped

`sing-score.js` now judges a held note's readings by their center: the median within 0.1 s either side, a judgement call. So a regular
wobble or a stray reading is judged by its middle, including for `singTurns`. More:
- A gap over 0.2 s, not 0.12 s, breaks a hold.
- `left` is the total time the center was off the note between two stretches on it, every excursion counted.
- `end` leaves out the last 0.15 s (the release).
- `stopped` is named only when `left` is 0: the sound stopped or broke and the voice never left the note. Any slip off and back is "wandered
  off and back".
- Words: "On the note, then stopped" and ", then the sound stopped". `FC.ENGINE` is 18.
- Tests: Y23, Y2 and Z11, and 600 simulated beginner holds (continuous ones never told "stopped"; ones whose sound stops always are).

## 2026-10-22, after the fourth confirmation review: a tune's last note is asked where it ended

- `singJudge` checks a guess about any held note (a hold, a tune's long last note) against where it ended, through one function,
  `singEndReading`. The tune's prompt asks "where did your last note end". "It went both ways" is now reached only by a hunt.
- `singTurns` reads a shorter center (0.05 s), so a quick search still counts as hunting.
- A tune's long-note mark no longer repeats what the note's own mark says.
- "Steady for 0 of n seconds" now reads "Not steady on the note for any of the n seconds".
- l4 says "Often it wanders off and comes back"; l12 says "where your last note ended".
- `FC.ENGINE` is 19.
- Tests: Z11 with a guess of On, and 150 simulated beginner tunes (a brief dip, a dip at the end, a drift).

## 2026-10-22, after the fifth confirmation review: the real signal

`sing-score.js` now cleans and centers every note's track before judging (`singCentered`):
- **Cleaning:** a reading more than 300 cents from the median of itself and its three neighbours each side (counted in readings) is a slip
  of the pitch finder and is dropped.
- **Centering:** each reading becomes the mean of the cleaned readings within 0.1 s either side (at least one either side). So a 5–7 Hz
  vibrato of up to ±50 averages to its middle at 50 or 66.7 ms between readings, while a 0.2 s slip still shows.
- **Start and end:** the track's middle over its first or last quarter of a second (V23), measured in time, not in readings. The end
  leaves out the release.
- **Turns** are counted on the same track (`SING_TURN_CENTER_S` is removed).
- **Gaps:** a gap over 0.28 s breaks a hold.
- **`left`:** counts from the first on reading up to the release.

All constants are labelled judgement calls.

`tests/sing-pure.mjs`: the words checks from the first confirmation review onward now run four times:
- clean;
- realistic, every 50 ms;
- realistic, every 66.7 ms;
- realistic, a mix of the two.

"Realistic" means a 5–7 Hz vibrato up to ±50, jitter, 3% fifth-errors and 3% dropouts. The runs cover:
- the composite contours and the fixed cases;
- the beginner holds and tunes;
- a new D3 check: 60 steady matches never hunt, and searches in 0.25 and 0.3 s legs still do.

## 2026-10-22, after the sixth confirmation review: the release, and the simulator in the repo

- **The release is part of stopping.**
  - `SING_RELEASE_S` is now 0.25 s: the fall or rise as the voice gives out, a judgement call (beginners' fall-offs last about 0.1 to 0.3 s).
  - `singLeftMs` skips the release, plus the center's reach, before every gap in clear sound and before the end. A fall-off before a
    breath or a stop is never "wandered".
  - The center never averages across a gap.
- **A slide is told by where the voice went within a moment.**
  - `singAnswer` stores `land`: the middle of the centered track 0.5 to 0.75 s after the first reading, a judgement call (X11's number
    fields include it).
  - `singSlid` compares the start with `land`. A start that is off and takes longer to move is "off from the start", and a slide's landing
    side is `land`'s.
  - A note's start is read over its first 0.15 s, so a quarter-second scoop is still seen.
- **`tests/sing-sim.mjs`** (run by `npm test`) is the sixth review's simulator rebuilt in the repo. It covers:
  - 43 taught outcomes from l2 to l9, l5, l6 and l12, each sung 150 times at 50 ms, 66.7 ms and a mix;
  - realistic starts, vibrato up to ±50, wander, jitter, 3% glitches and dropouts, and releases before stops and breaths.

  It asserts that the mark, the pass, the guess, the "You said" line and the fix each agree at least 95% of the time. Two lower floors are
  stated with their reasons: l4's ±25 stretch group, and a tune sung 70 off throughout.

## 2026-10-22, after the coordinator's note on the remaining rates

- **Held notes judged over full cycles:** a held note's steadiness, `left` and `end` are read on a center 0.2 s either side
  (`SING_HOLD_CENTER_S`, two cycles of a 5 Hz vibrato). A slip shorter than about 0.3 s is judged by that center too.
- **A note's error** is the interquartile mean of the middle of its cleaned readings, so a vibrato counts by its middle and a scoop's tail
  does not.
- **Where a held note began:** if its start and `land` are within a shade, it began at their middle, so the attack does not decide it;
  otherwise it began at its start.
- **l4, l5 and l6's stretch group is now 35 (about a third of a half-step), not 25.** The plan explains why, and the lessons say so.
- **`tests/sing-sim.mjs`:** every one of the 43 outcomes is at least 95% on every measure at every reading rate, with no lower floors. The
  other notes of a tune are checked against where the voice really sang them, within the stated measuring precision of ±15.

## 2026-10-22, after the seventh confirmation review: tunes found where they were sung

- **D5.** `singRunParts` (sing-score.js) splits a sung interval or tune into one stretch per played note:
  - a split that fits each stretch to its note, after the run's common offset is taken out;
  - a pull toward the played rhythm at the singer's own tempo, read from the span sung, then again from where the last note starts;
  - a note may be left out ("Not heard");
  - each stretch's leading glide from the note before is trimmed (up to 0.3 s).

  The fixed windows remain only as the bounds of the run and the fallback when too little was sung.
- **Stops.** A gap in clear sound is a stop only when no reading in it was voiced: unclear pitch, but at least 0.3 of the note's loudness.
  So dropped readings, even three in a row, never break a hold. A breath, with no voiced readings, still does.
- **`tests/sing-sim.mjs`** now has 58 outcomes. It runs at 50 ms, 66.7 ms and a mix, plus the seventh review's harsher voice (readings
  every 40–75 ms, vibrato ±60 growing in, wander SD 10, 4% slips some in pairs, 4% dropouts in bursts, rising releases).
  - **New scenarios:**
    - tunes and intervals sung in the played rhythm: at speed, 10–30% slower, 10–20% faster, late, legato, carry-over of 0.35–0.6 s;
    - matches 60–95 off;
    - the l4 35 stretch with a breath;
    - l6 tunes at 35.
  - **Marks:** a note's mark is checked against where the voice really sang it, with ±15 measuring precision near a word's line.
  - **Lower floors:** only on the harsher voice, each with its reason.

## 2026-10-22, after the eighth confirmation review: alignment, not splitting by change

`singRunParts` now aligns the whole sung run to the played notes by dynamic programming:
- **Octave:** the run is moved into its own octave, found from the first note, so a note more than half an octave off keeps its side.
- **Pitch:** each reading costs how far it sits from its note, after the common offset (the median of the notes' own medians).
- **Duration:** each note but the last lasts about its played length at the singer's tempo, within a band. The last note starts near where
  the rhythm puts it.
- **Tempo and lag:** read from where the voice changes to a new steady note. Releases into a breath and slides are not counted as changes.
- **Snapping:** a stretch that begins at such a change is preferred.
- **Every note gets a stretch.** "Not heard" is used only when the voice was silent for at least three quarters of the note's time.
- **Speed:** the DP is bounded and runs on typed arrays, about 4 ms per tune.

`tests/sing-sim.mjs` adds a wrong note at every position:
- 1.5–3 half-steps off;
- at the pitch of the note before;
- the note before held across;
- left out.

It also adds intervals where the voice does not move. All run in time and slower, at every reading rate and with the harsher voice. In all,
92 outcomes, each checked on the right note named with the right side and the fix.

## 2026-10-22, after the ninth confirmation review: silence between notes, any tempo from 0.75x to 1.5x

`singRunParts` (sing-score.js), now in small parts (`singRunOctave`, `singRunQuiet`, `singRunOnsets`, `singRunStep`, `singRunTempos`,
`singRunChoose`, `singRunSplit`, `singRunTiming`, `singRunSilent`, `singRunTrimmed`):
- **Octave.** The run's octave is the one in which its readings sit closest to the notes of the windows they fall in, so a long last
  note sung near another note an octave away no longer moves the whole run an octave.
- **Silence is its own state.** Only voiced readings make up a note; a silence between notes is never part of a note's cost or length. The
  voice sounding again after two or more unvoiced readings always begins a note. A gap in clear readings counts as a stop only when
  nothing in it was voiced.
- **Onsets.** The voice sounding again after an unvoiced reading begins a note. A change must be sung on, up to the next silence, for at
  least 0.3 s (a release before the voice stops is not one), and one change is found once.
  A second detector finds legato steps of a half-step under a vibrato: the middles of 0.25 s either side of a glide, more than 70 apart.
- **Tempo.** The tempos that fit the onsets best are split (0.7–1.6×, lag −0.2–0.8 s, the first note left out); when the onsets do not
  decide, one tempo in each 0.15 band is split too, and the split's own cost picks.
- **Offset.** Read once, from the best split against the true notes, then the split is made again with it taken out (one offset for every
  tempo: an offset fitted to each let a split one note out of step fit the wrong notes to each other).
- **The last note is held.** Shorter than its played length at the singer's tempo (or the end of the listening) costs an eighth as much as
  a note too long. Every voiced reading belongs to a note: no sound is set aside as "after the tune".
- **"Not heard"** needs a silence over three quarters of the note's time inside the listening, and that time must hold three quarters of
  the note's own (a held last note: of its hold): a rhythm that puts a note mostly past the end of the listening does not count. A middle
  note left out in a silence is as well explained as one begun at an onset (it gets the onset's bonus too); the first and the last are not,
  since the silence before and after a run is there anyway.

`runPlan` (sing-task.js): a run whose last note is held is listened to long enough for a singer 1.5 times slower than played
(`SING_SLOWEST`), so a slow singer's last note is not cut off as "stopped".

`tests/sing-sim.mjs` is now a runner over `tests/sing-sim/`, each part in its own worker:
- `taught.mjs`: the lessons' outcomes (the former sing-sim);
- `runs.mjs`: the ninth review's simulator, widened to tempos 0.75–1.5× sung legato, with 60–120 ms gaps and with 160–250 ms gaps, by a
  clean, an ordinary and a harsh voice, with one wrong, repeated, held-over or left-out note at every position;
- `reviews/`: every script any review wrote to try this scoring, ported. Fixed cases are kept in `tests/sing-cases.lock.json` (rewritten
  by `npm run lock`); statistical runs are held to floors, judged against where the voice really went.
- Every scored answer is also checked against the rules every answer keeps (`harness.mjs` `invariants`), with a seeded fault to show
  they catch one.
- npm test runs a quarter of the reviews' tries (`SIM_SCALE` 0.25), each rate held to its floor within what chance allows at its number of
  tries; `SIM_SCALE=1` runs them all and holds every rate as measured.
