# Singing: ninth confirmation review before shipping (2026-10-22)

Fresh reviewer, both roles. This review covers D6's fix: `singRunParts` (sing-score.js) now aligns a sung interval or tune to the played
notes by dynamic programming, using onsets where the voice changes note, a tempo fitted to them, and a duration prior. Harnesses and
outputs are in scratchpad `c9/`.

## What I ran

**Tests**
- `tests/sing-sim.mjs`: 92 outcomes pass, each at least 95% or its stated floor (`c9/sing-sim.out`).
- `sing-pure.mjs`: 212 checks, 16 seeded faults red. `audio-pure.mjs`: 710 checks, 10 seeded faults red. `engine-pure.mjs`: 150 checks.

**`c9/sim9.mjs`, my own simulator.**
- **RNG:** its own (mulberry32 with a Marsaglia polar normal).
- **What it drives:** the app's own `singPlan`, `singAnswer`, `singJudge` and `singOk`.
- **Rhythm:** the voice sings to the rhythm the app *played* (`plan.hear`), at its own tempo.
- **Voices:**
  - *clean*: no noise at all;
  - *ordinary*: vibrato 10–45 at 4.8–6.6 Hz, wander SD 7, jitter 6, 2% slips, 3% dropouts, a scoop of −40 to +20 at each onset,
    and a fall-off on half the notes;
  - *harsh*: vibrato 30–65, wander SD 11, 4.5% slips, 5% dropouts in bursts, scoops of −90 to +40, and fall-offs on 65% of notes.
- **Reading rates:** 50 ms and 66.7 ms, each with ±7% jitter.
- **Timings,** each a sixth of the tries:
  - *played*: the played tempo, starting 0.15–0.4 s late;
  - *lagged*: each onset ±80 ms SD;
  - *slow*: 12–35% slower;
  - *fast*: 10–22% faster;
  - *late*: a late start of 0.55–0.95 s;
  - *legato*.
  - Outside legato, notes are detached by a silence of 50–160 ms, as the app plays them (120 ms gaps); 30% of the other tries are
    legato.
- **Scenarios,** each at every position of the run, both sides where a side applies:
  - every note right (±12);
  - one note a shade off (70–95);
  - one note off by 120–170;
  - one note well off (180–300);
  - a later note sung short (−65 to −160);
  - a note sung at its neighbour's pitch, re-sung;
  - the note before held across it, with no break;
  - a note left out (silence).
- **Asks:** l5's intervals 1–3, 2–7 and 4–9; l6's tunes (3 slow, 4 at 1.2 s, 4 and 5); l12's 5-note tune.
- **Tries:** 240 per cell (40 per timing).
- **What is checked:**
  - a mark is checked against where the voice really sang it, with ±15 measuring precision near a line;
  - pass and fail are checked against the lesson's rule applied to the truth.

**Reruns:**
- **Confirm-8 probes:** `c8/nf.mjs`, `c8/same.mjs` and `c8/ex.mjs`.
- **Confirm-7 simulators:** `c7/mysim.mjs` and `c7/tempo2.mjs`.
- **Earlier harnesses:** `c2/*` and `c3/*`, `c4/melwob`, `c4/new` and `c5/cad`, diffed against the confirm-7 outputs.

## D6: fixed

- **A wrong note is named on its side,** ordinary voice, at every position and size:
  - intervals: 99.2–100%;
  - tunes: 93–98% (mean 96–99%).
- **"Not heard" for a note that was sung** is 0.0% on the ordinary voice and at most 0.1% on the harsh one, against 22–68% in confirm-8.
- **A voice that does not move:**
  - `c8/same.mjs`: named 100% on 1–3, 2–7, 4–9 and the 5-note tune, where it was 0–2%;
  - `c8/nf.mjs`, one note off by 70–300 noise-free: named 99–100%, with no "Not heard".
- **Intervals are right on every outcome.** Ordinary voice:
  - marks and pass 99.2–100% in every scenario and timing;
  - re-sung at the same pitch, or held across: 100%.
  - Harsh voice: 95–100%.
- **A note left out of the middle of a tune** reads "Not heard" 81–99% of the time.

## The new deciding defect

**D7. A tune sung right, with the notes detached as the app plays them, is often given a wrong note. This is worst when the tune is
sung a little fast. It is systematic, and it shows on a clean voice.**

**The figures** (all marks right / pass right):

| 5-note tune (l6, l12), every note right | clean voice | ordinary voice | harsh voice |
|---|---|---|---|
| all timings | 95.7 / 98.9 | **87.9 / 90.8** | 73.8 / 79.8 |
| sung 10–22% faster | 74 | **64–73** | 53 |
| played tempo, detached | 100 | 87–95 | 66–78 |
| legato | 100 | 98–100 | 85–98 |

- The 4-note tune at speed, ordinary voice: 93.2% (fast 79). At 1.2 s notes: 94.0% (fast 85). The slow 3-note tune: 95.2%.
- A wrong note sung in these tunes has all its marks right only 78–93% of the time (ordinary voice), though the wrong note itself is
  named. The other notes take the error.
- **It depends on the silence between notes.** Clean voice, 5-note tune, all timings mixed:

| Silence between notes | 0 | 60–90 ms | 100–130 ms | 140–180 ms | 250–300 ms |
|---|---|---|---|---|---|
| Marks right | 100% | 94–98% | 94–95% | 92–93% | 99% |
| Sung 10–22% faster | 100% | 68–88% | 65–75% | 50–60% | 95% |

**Example, noise-free:** the tune A#3 G#3 E3 C#3 A#2, every note within ±11, sung about 20% fast with 90–130 ms between notes. It
reads "On, On, On, Well under (−133), On".

**Why** (instrumented in `c9/dbg.mjs`):
- **Most onsets are never seen.** A change of note is counted only in two cases:
  - at least two readings in the 0.15 s before it, unbroken;
  - a silence longer than `SING_RUN_GAP_S` (0.28 s).
  
  A re-onset after a silence of about 0.1–0.28 s meets neither. That covers every detached note sung the way the app plays them.
  In the example, no changes at all were found.
- **The tempo then falls back to 1.0.** It is chosen only by how well the played onsets line up with the changes found.
- **The timing priors then override the pitch.** The length prior and the last note's pull toward its expected onset
  (`SING_RUN_LENGTH` × 20,000 per second) cost more than the pitch can save (at most 300 per reading). So note 4 takes in the start of
  note 5.
- **With noise it also happens at the played tempo.** A fall-off before a breath can be counted as a change, and a dropout before an
  onset hides one. In one example the fit chose tempo 1.14 with lag 0.6 s:
  - that split cost +3,960;
  - the split at tempo 1.0 and lag 0 cost −4,317;
  - the split's own cost never takes part in choosing the tempo.

**Why sing-sim did not catch it:**
- its `rhythm` and `wrongRun` scenarios end each note exactly at the next onset (legato, no silence);
- its other tune scenarios sing inside the windows.

**Fix, at the root:**
1. **Count every re-onset as a candidate change.** That is a voiced reading after an unvoiced stretch of two readings or more. Compare
   its pitch with the last steady stretch before the silence, not only the 0.15 s before it.
2. **Let the pitch fit help choose the tempo and lag.** For example, run the split at the best few tempo and lag candidates and keep
   the cheapest, so that a fallback tempo cannot override clear pitch evidence.
3. **Add to `tests/sing-sim.mjs`** detached notes with 60–250 ms silences:
   - at the played tempo, 10–25% faster and slower;
   - with right tunes and one wrong note at every position;
   - asserting at least 95% marks and pass.

## Earlier fixes hold

- **E1 to E5 and D1 to D4:** the `c2/*`, `c3/*`, `c4/melwob`, `c4/new` and `c5/cad` outputs are identical to confirm-7, except
  `c3/cadence`, which is better. Holds read every 100 ms with unclear readings pass 100%, where they passed 61–98%. These harnesses use
  plans without `hear`, so they do not reach the new split.
- **`c7/mysim`:**
  - the hold, match and l9 rows are identical to confirm-8;
  - the interval and tune rows are within a few points of it.
  
  The 35-stretch tune rows went down: "all on" 89 → 83.5 min, "stopped at 1.2 s" 87 → 83.5. That is a stretch, so polish.
- **`c7/tempo2`:** 100% on every row.
- **D5:** tunes sung legato at every tempo and lag are 98–100%. The detached case is D7.
- **Example sounds score as labelled:**
  - l5's "small step" and "big jump" read on, on;
  - "a jump that falls short" (−75) reads on, then a shade under, and fails;
  - the results are the same at 50 and 66.7 ms, and at 0.15 and 0.4 s lag;
  - sing-pure's l3 and l4 example sounds pass.

## Learner views, l2 to l6, l9 and l12 (re-read)

The lesson sources are unchanged since confirm-8. The views were regenerated.
- **l2:** the way of deciding is to hear the note first, then sing on it from the first moment. The words match `singWordKey`.
- **l3:** the outcomes are a slide and a hunt. The text matches what the app says.
- **l4:** a hold has three parts. The texts match.
- **l5:** check the first note, then check the far note against the jump's direction. My answers to check stories 29–33, given
  before looking: 5/5. The per-note words match the app on the outcomes I simulated.
- **l6:** check each note and fix the first miss. The five patterns are clear, and the words match the app.
- **l9:** holds, and a stories-only check.
- **l12:** the seven checks in order. Its tune feedback matches the app's words.

**What the app says against the text:**
- The app's words match the text wherever the marks are right.
- For a right tune affected by D7, the learner is told a note was "Well under", with a line to "sing that much higher". That is wrong
  feedback on a skill l6 and l12 teach the learner to read.
- There is no new text defect.

## Verdicts

| Lesson | Verdict | Deciding |
|---|---|---|
| l1 (text), l2, l3 | PASS | none |
| l4 Hold it steady | PASS | none |
| l5 Steps and jumps | PASS | none (D6 fixed; 99–100% on every outcome) |
| l6 Short tunes | FAIL | D7 (5-note tune sung right: 87.9% marks, 90.8% pass; sung faster: 64–73%; 4-note at speed sung faster: 79%) |
| l7, l8, l9 | PASS | none (their single-window scoring is unchanged) |
| l10, l11 (text) | PASS | none |
| l12 Find the cause | FAIL | D7 (the same 5-note tune in its practice and its check) |

## Polish (does not decide a verdict)

1. **A left-out first or last note never reads "Not heard"** (0–2%).
   - The first note left out: the tune is read from the second note on and shifted. "Note 1: a shade over … Note 4: a shade under"
     appears, and the pass is right only 13–20% of the time on the 5-note tune.
   - The last note left out: it is named at its neighbour's pitch.
   - In an interval with one note sung, the missing note reads "Well under, about five half-steps".
   - This is rarer than a wrong pitch, and the learner knows they left it out.
2. **The harsh voice:**
   - tunes sung right: 74–89%, most of it D7;
   - intervals: 95–100%.
3. **The 35 stretch on tunes** (`c7/mysim`): 83.5–94%.
4. **"Not heard" is missing from the views' per-note word lists** (l5, l6, l12). The app shows it for a left-out middle note.
5. **P2, P4, P5 and the older items** in confirm-7 are still open.

## Counts

- **Deciding:** 1, engine. D7: detached notes hide the onsets, and the timing priors override the pitch. It reaches l6 and l12.
- **D6:** fixed.
- **D1 to D5, E1 to E5:** hold.
- **Polish:** 4 new, plus earlier items.
- **Wrong facts:** 0. **Arguable answers:** 0. **Carried-over structures:** 0. **New learner-text defects:** 0.
