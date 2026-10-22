# Singing: tenth confirmation review before shipping (2026-10-22)

Fresh reviewer, both roles. It covers the fix for D7: silence between sung notes is now its own state, and tempos run from 0.75x to 1.5x.
Every earlier reviewer's scenario now lives in `tests/sing-sim/`. My scripts and outputs are in the scratchpad's `c10/`.

## What I ran

**Tests**
- **`node tests/sing-sim.mjs`** (default SIM_SCALE 0.25) passes:
  - 11,132 rates are at their floors;
  - 603 fixed cases match the lock;
  - no invariant breaks;
  - lowest rates: clean 93.3%, ordinary 94%, harsh 60%, each within chance of its floor at that scale.
- **`SIM_SCALE=1 SIM_TABLE=1 node tests/sing-sim.mjs runs.mjs`** (the ninth review's simulator, widened, at full tries) passes as measured.
  Its lowest rates are clean 96.5%, ordinary 96% and harsh 82.8% (the harsh floor is 80).
- **`sing-pure.mjs`:** 212 checks pass, and all 16 seeded faults turn red.
- **`audio-pure.mjs`:** 710 checks pass, and all 10 seeded faults turn red.

**My own simulator, `c10/sim10.mjs` (independent of sing-sim's code)**
- **RNG:** xoshiro128** with Box–Muller normals.
- **What it drives:** the app's own `singPlan`, `singAnswer`, `singJudge`, `singOk` and `singWordKey`.
- **The voice:**
  - a vibrato that sets in after 0.18–0.38 s;
  - a scoop at each onset;
  - at each release, a fall-off on half the notes or a flip up on 10%;
  - breath noise in the gaps, with stray pitched readings;
  - octave and fifth slips;
  - dropouts;
  - 15–45 ms of tracker latency.
- **Timing:** each note's gap is drawn on its own (legato, 40–120, 120–220 or 220–320 ms).
- **Eight timing bands:**
  - tempo 0.75–0.9x, 0.9–1.1x or 1.1–1.5x, each with tempo drift inside the tune;
  - onset jitter of SD 100 ms;
  - a late start of 0.5–0.9 s;
  - all legato;
  - all gaps 120–220 ms;
  - all gaps 220–320 ms.
- **Reading rates:** 50 and 66.7 ms.
- **Scenarios:**
  - the tune right;
  - the whole tune 30 flat;
  - one note 75–95, 115–170 or 200–350 off, at every position and on both sides;
  - a note re-sung at its neighbour's pitch;
  - the note before held across it;
  - a note left out.
- **Asks:** every sung run the lessons use: intervals 1–3, 2–7 and 4–9 (2–7 also at 35); tunes 3 slow, 4, 4 at 1.2 s and 5 (5 also at 35).
- **Tries:**
  - ordinary voice: 96 per wrong-note cell and 288 per right cell for tunes; 320 and 960 for intervals;
  - clean voice: tunes;
  - harsh voice: 5-note tunes and intervals.
- **What is checked:** marks against where the voice really sang (±15 near a line) and pass against the lesson's rule.

**`c10/single10.mjs`**, the same voice model on single notes:
- match: right, a shade under, well over, and a slide up;
- holds of 2, 4 and 6 s at 50, and 4 s at 35: held right, stopped at 60%, and sank from half-way;
- the app's words for each match outcome.

## D7: fixed

| 5-note tune sung right (l6, l12) | confirm-9 | now: my simulator | now: sing-sim runs (full tries) |
|---|---|---|---|
| ordinary voice, marks / pass | 87.9 / 90.8 | 99.7 / 100 at both rates | at least 96 on every row |
| sung faster, detached | 64–73 | worst band 97 | at least 96 |
| clean voice | 95.7 | 99.3 / 100 | at least 96.5 |
| harsh voice | 73.8 / 79.8 | 96.5–97.2 / 99.3–100 | at least 82.8 |

**Ordinary voice, every sung ask at 50, every scenario except the whole-tune-flat edge below:**
- marks right: 94.8–100% (all but one cell at least 95.8%);
- pass right: 96.9–100%;
- a wrong note named on its side: 96.9–100%;
- a left-out note reading "Not heard": 95.9–100%, now the first and the last note too (confirm-9: 0–2%).

**Intervals, ordinary voice:** marks 95.9–100% and pass 99.4–100% in every scenario and timing.

**Single notes, ordinary voice:**
- match and hold outcomes: pass right 100%;
- the mark is right 95.3–100% (a shade under 75–95 is read "well under" 3–5% of the time, at the 100 line).

## Earlier fixes hold

- **All reviewers' scenarios still score as before.** `tests/sing-sim/reviews/` (c2 to c9, rr, final) holds 603 fixed cases, all identical to the lock. That
  includes:
  - c9's D7 example (a 5-note tune detached 150 ms, 15% fast): now all on;
  - c8's "voice that does not move" and noise-free cases;
  - E1–E5 and D1–D6.
- **The statistical scripts** are all at their floors.
- **The example sounds score as labelled** at 50 and 66.7 ms, 0.15 and 0.4 s late:
  - l3: on, sliding up, a shade under or over, hunting;
  - l4: holding steady, sinking;
  - l5: small step on, on; big jump on, on; a jump that falls short reads on, a shade under, and fails.

## Learner views l1–l12 (re-read)

- **Lesson sources:** unchanged since confirm-9 (no lesson file is newer).
- **Views:** a fresh `--stdout` render of each matches the committed view, apart from one trailing newline.
- **Run windows:** they now include the listening that allows for a singer 1.5x slower, e.g. l6's 5-note tune is 1.2 × 4 + 3.52 s. That
  equals the plan's `totalMs`.
- **l2:** the way of deciding is to hear the note in your head, then aim at the note itself from the first moment. "On" is within half a
  half-step. The words match the app exactly:
  - "A shade under" and "Well under, about three half-steps: sing that much higher";
  - slide and hunt lines.
- **l5:** check the first note, then the far note against the jump's direction. Check stories 29–33, answered before looking: 5/5.
- **l6:** check each note and fix the first miss. Check stories 27–31: 5/5. The per-note words match the app.
- **l12:** go through the seven checks in order and stop at the first one that is not clear. Check stories 16–21: 6/6 on both questions.
- **l1, l3, l4, l7–l11:** unchanged, and their single-note scoring is confirmed above.
- **New text defects:** none.

## Verdicts

| Lesson | Verdict | Deciding |
|---|---|---|
| l1 | PASS | none |
| l2 Match a note | PASS | none |
| l3 | PASS | none |
| l4 Hold it steady | PASS | none |
| l5 Steps and jumps | PASS | none |
| l6 Short tunes | PASS | none (D7 fixed) |
| l7 | PASS | none |
| l8 | PASS | none |
| l9 | PASS | none |
| l10 | PASS | none |
| l11 | PASS | none |
| l12 Find the cause | PASS | none (D7 fixed) |

## Polish (does not decide a verdict)

1. **A whole tune sung about 30 flat** (a held last note near the 50 line):
   - Ordinary voice: marks are right 90.6–95.1% of the time, but the pass is right 97.4–100%. Vibrato and wander carry the long last
     note's centre past −50 for a moment, so it reads "wandered off and back", where the true mean was −33 to −43.
   - Harsh voice: the pass is right 61–77%.
   - Defensible near the line.
2. **The harsh voice:**
   - 5-note tunes at 50: marks 89.6–100% (mean 95.7), pass 91.3–100%;
   - intervals: 93–100%;
   - holds: 94–100%;
   - the 35 stretch hold: 69% ("wander"; its stated floor is 55);
   - 35-stretch tunes: 71–77%.
3. **The ordinary voice on the 35 stretch tunes:** 93.8–99% marks. A stretch, not the check.
4. **"Not heard" is still missing** from the views' per-note word lists (l5, l6, l12). The app now shows it for the first and last notes too.
5. **Older open items:** P2, P4 and P5 from confirm-7.

## Counts

- **Deciding:** 0.
- **D7:** fixed.
- **D1–D6, E1–E5:** hold (603 fixed cases locked).
- **Polish:** 5. Items 1 and 3 are new; item 2 restates the harsh-voice rates; items 4 and 5 are carried over.
- **Wrong facts:** 0. **Arguable answers:** 0. **Carried-over structures:** 0. **New learner-text defects:** 0.
