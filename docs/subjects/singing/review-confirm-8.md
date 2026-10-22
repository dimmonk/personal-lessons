# Singing: eighth confirmation review before shipping (2026-10-22)

Fresh reviewer, both roles. This review covers D5's fix: `singRunParts` (sing-score.js) now splits a sung interval or tune into one
stretch per played note, at the singer's own tempo, and may leave a note out ("Not heard"). Harnesses and outputs are in scratchpad `c8/`.

## What I ran

**Tests**
- `tests/sing-sim.mjs`: 58 outcomes pass, each at least 95% or its stated floor (`c8/sing-sim-table.out`).
- `sing-pure.mjs`: 212 checks, 16 seeded faults red. `audio-pure.mjs`: 710 checks. `engine-pure.mjs`: 150 checks.

**`c8/d5sim.mjs`, my own simulator.** It has its own RNG (xorshift128+ with Box-Muller), its own voice and its own timing. It sings to the
rhythm the app *played* (`plan.hear`), never inside the scoring windows. It drives the app's own `singPlan`, `singAnswer`, `singJudge` and
`singOk`.
- **Voices:**
  - *ordinary*: vibrato up to ±40 at 5–6.5 Hz, wander SD 6, jitter 6, 2% slips, 3% dropouts, half the notes with a fall-off;
  - *harsh*: vibrato ±60 at 4.5–7 Hz, wander SD 10, 4% slips (some in pairs), 5% dropouts in bursts.
- **Reading rates:** 50 ms and 66.7 ms.
- **Timings:**
  - the played tempo, starting 0.15–0.4 s late;
  - natural lag (each onset ±70 ms SD);
  - 10–30% slower;
  - 10–20% faster;
  - a late start (0.5–0.9 s);
  - legato with 60–160 ms glides.
- **Errors:**
  - perfect (±10);
  - one note well off (±180–260);
  - one note off by ±120–160;
  - one note a shade off (±65–90);
  - the last note a shade off;
  - a note after the first sung short (−65 to −160);
  - drift flat or sharp by 25–35 per note.
- **Asks:** every interval and tune group of l5, l6 and l12, including the 35 stretch. 200 tries per cell.
- **Marks:** a note's mark is checked against where the voice really sang it, with ±15 measuring precision near a word's line.

**Noise-free probes:**
- `c8/nf.mjs`: one note off by 70 to 300, at every position, on 60 tunes and intervals.
- `c8/same.mjs`: a note sung at the previous note's pitch, so the voice did not move.
- `c8/show.mjs` and `c8/same2.mjs`: what the learner reads.
- `c8/ex.mjs`: l5's example sounds.

**Earlier harnesses:** `c7/mysim.mjs` and `c7/tempo2.mjs` rerun on the new code. The outputs are `c8/mysim7-rerun.out` and the console.

## D5: fixed for tunes sung right

| Case (ordinary voice, 50 and 66.7 ms) | Every note marked right | Pass right |
|---|---|---|
| 5-note tune (l6, l12, check): every timing | 100% | 100% |
| 4-note tune at speed and slowly, 3-note slowly: every timing | 99–100% | 99–100% |
| Intervals 1–3, 2–7, 4–9: every timing | 99–100% | 99–100% |
| `c7/tempo2.mjs`, every row (was 26–100%) | 100% | 100% |

- **The harsh voice, tunes sung right:**
  - 5-note tunes: 83.5–100% (mean 96.6), with the low end at 10–30% slower and 66.7 ms;
  - 4-note tunes: 93.5–100%;
  - the 35 stretch: 72.5–100%, which is a stretch on a harsh voice, so polish.
- **P1 carry-over is gone.** In `c7/mysim`, an interval whose first note carries 0.35–0.6 s into the second's window went from 46–70% to
  99–100%. A tune carrying 0.35–0.5 s went from 30–55% to 93.5–100%.

## Earlier fixes hold

The `c7/mysim` rerun matches confirm-7 or is better on every hold, match and tune scenario:
- l4 steady at 66.7 ms: 96% → 99%;
- l9 steady at 66.7 ms and mixed rates: 95–96% → 99–100%, so P3 is fixed by the voiced-reading stop rule;
- the l4 35 stretch at a steady hold: 85–93%, as before (P2, stretch only);
- D1 to D4 and E1 to E5 are unchanged.

**Example sounds score as labelled:**
- l5's "small step" and "big jump" both read on, on;
- l5's "jump that falls short" (−75) reads on, then a shade under, and fails;
- the results are the same at both reading rates and at 0.15 and 0.4 s lag;
- sing-pure's l3 and l4 example sounds pass.

## The new deciding defect

**D6. When a note of a tune or an interval is sung wrong, the split often leaves it out, and the learner is told "Not heard" for a note
they sang clearly. This is systematic, and the D5 fix brought it in.**

How the split goes wrong:
- `singRunParts` chooses its cuts by how well each stretch fits its *target* note, after taking out a common offset.
- It may skip a note for `SING_RUN_SKIP` (250) per expected reading, while each reading off its target costs up to `SING_RUN_CAP` (300).
- So a note sung well off is cheaper to skip, with its readings handed to a neighbour whose pitch is nearer. The neighbour is still marked
  on, because the interquartile mean keeps its own middle.

**The results:**
- **The voice does not move** (the second note sung at the first's pitch, the extreme of "fell short"): one of the two notes reads "Not
  heard" in **100%** of noise-free l5 intervals (1–3, 2–7 and 4–9), and in 98% of tunes.
  - Example: G#3 to C#4 sung as G#3 twice reads "Note 1: Not heard, Note 2: Well under".
  - The line is "That note was not heard.", which tells the learner the microphone missed them.
- **One note well off (±180–260), noise-free, 5-note tune:** the note is named on its side 49% of the time and reads "Not heard" 51%.
  - At ±120–150: 65% named, 35% Not heard.
  - Even a shade off (±70–90): 16% Not heard, where a neighbour is a half-step away.
- **Ordinary voice, by group:**

| Group | All marks right | Wrong note named on its side | "Not heard" |
|---|---|---|---|
| 5-note tune, a note ±180–260 | 26–50% | 32–60% | 38–68% |
| 5-note tune, a note ±120–160 | 48–78% | 53–78% | 22–47% |
| 5-note tune, a later note sung short (−65 to −160) | 55–86% | 56–88% | 12–44% |
| 4-note tune, a note ±180–260 | 22–39% | — | — |
| 3-note slow tune, a note ±180–260 | 15–61% | — | — |
| 5-note tune, drift 25–35 per note | 64–92% | — | often on note 1, which was sung on |
| l5 small steps (1–3), far note ±180–260 | 55–76% | 73–91% | — |
| l5 small steps (1–3), far note ±120–160 | 70–88% | — | — |
| l5 2–7 | 82.5–94.5% | — | — |
| l5 4–9 | 90–100% | — | — |

- **A catastrophic case, noise-free:** the tune F4 F#4 ending A#3 C4 D4 F4 F#4, with its last note 70 flat. It reads "Well over, Well over,
  Well over, Not heard, Not heard". The long last note dominates the common offset, and the whole split shifts.
- **Pass and fail are still right 90–100% of the time.** A "Not heard" note counts as off. But the per-note marks and fix lines are the
  feedback that l5, l6 and l12 teach the learner to read: check each note and find the one that went wrong, then move to it. For the most
  common real misses (a wrong note, a jump that fell well short, a voice that did not move), that feedback is wrong 25–85% of the time.
- **Why sing-sim did not catch it:**
  - it has no mid-tune wrong note;
  - it has no voice that does not move;
  - its intervals are only the 4–9 group;
  - its "falls short" is a shade.

**Fix, at the root:**
- **Split by what the voice did, not by how well it fits the targets.**
  - Find onsets where the voice moves to a new steady pitch, and its breaths.
  - Pair those segments with the played notes in order, with the rhythm at the singer's tempo as the tie-breaker.
  - Where no change is heard, as when two notes are sung at one pitch, cut at the rhythm's expected onset.
- **Keep "Not heard" for slots with no clear sound only.** A slot that holds clear voiced readings is never skipped.
- **Do not let one note set the common offset.** If an offset is kept at all, take it per note, or from the first note only.
- **Add to `tests/sing-sim.mjs`:**
  - one note off by ±120–300 at every position;
  - a later note sung short by −65 to −160;
  - a voice that does not move;
  - drift of 25–35 per note;
  - the l5 1–3 and 2–7 groups;
  - assert the wrong note is named on its side at least 95% of the time, and "Not heard" only for silence.

## Learner views, l5, l6 and l12 (re-read)

The lesson sources are unchanged since confirm-7; the views were regenerated.
- **l5:** the rule is to check the first note, then the far note against the jump's direction. Check stories 5/5 by reasoning.
- **l6:** the rule is to check each note and fix the first miss. The five patterns are clear. Check stories 27–31: 5/5.
- **l12:** the seven checks, in order. The check stories I answered match the marked answers.

**The text matches the app, except for "Not heard":**
- The views' per-note word lists do not include "Not heard", which the app shows.
- That gap is harmless once D6 is fixed, because "Not heard" then means silence only.

There is no new text defect.

## Verdicts

| Lesson | Verdict | Deciding |
|---|---|---|
| l1 (text), l2, l3 | PASS | none |
| l4 Hold it steady | PASS | none |
| l5 Steps and jumps | FAIL | D6 (a voice that does not move: 100% "Not heard"; small steps with a wrong note: 55–88% marks right) |
| l6 Short tunes | FAIL | D6 (a wrong note: 15–78% marks right; drift: 64–92%) |
| l7, l8, l9 | PASS | none (P3 fixed) |
| l10, l11 (text) | PASS | none |
| l12 Find the cause | FAIL | D6 (the same five-note tune in its practice and check) |

## Polish (does not decide a verdict)

1. **The harsh voice on tunes sung right:**
   - 83.5–93% at 66.7 ms, slower or faster;
   - the 35 stretch: 72.5–91% at the played tempo, fast, or with lag.
2. **P2:** the l4 35 stretch steady hold is 85–93% on a harsh voice, unchanged.
3. **P4, P5 and the older items** in confirm-7 are still open.

## Counts

- **Deciding:** 1, engine. D6: a sung wrong note is split away as "Not heard". It was brought in by D5's fix and reaches l5, l6 and l12.
- **D5:** fixed for tunes and intervals sung right, at every timing tested.
- **Polish:** 3 open, plus earlier items.
- **Wrong facts:** 0. **Arguable answers:** 0. **Carried-over structures:** 0. **New learner-text defects:** 0.
