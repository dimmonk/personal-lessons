# Singing: seventh confirmation review before shipping (2026-10-22)

Fresh reviewer, both roles. This review covers the last changes after D4:
- held notes are judged on a 0.4 s center (`SING_HOLD_CENTER_S`);
- the l4–l6 stretch target is now 35, not 25;
- tune and interval notes are scored by an interquartile mean;
- `tests/sing-sim.mjs` is the property test.

Harnesses and outputs are in scratchpad `c7/`.

## What I ran

**Tests**
- `tests/sing-sim.mjs`: 43 outcomes, 150 tries × 3 rates, all ≥95%.
- `sing-pure.mjs`: 212 checks, 16 seeded faults red.
- `audio-pure.mjs`: 710 checks.
- `engine-pure.mjs`: 150 checks.

**`c7/mysim.mjs`, my own simulator.** Its RNG, noise model and scenarios are all my own, and it drives the app's functions directly.
- **RNG:** mulberry32 with Box-Muller.
- **Rates:** every 50 ms, every 66.7 ms, a mix of the two, and a jittered 40–75 ms.
- **Vibrato:** 4.5–7 Hz, up to ±60, growing in over the first 0.3 s.
- **Wander:** AR(0.92) with SD 10, plus 10 cents of jitter.
- **Glitches:** 4% (a fifth, an octave, or a 2/3 jump), a quarter of them in pairs.
- **Dropouts:** 4%, sometimes in bursts.
- **Releases:** 60% of notes, lasting 80–300 ms. 80% fall 100–400 cents; the rest rise 100–200.
- **Scenarios:** every outcome on every task at 50, plus the 35 stretch on holds, intervals and tunes. sing-sim covers 35 for holds only.
- **Extra cases:** legato carry-over between notes, and singers who keep their own timing.

**Other runs**
- `c7/tempo.mjs` and `c7/tempo2.mjs`: tunes and intervals sung at the rhythm the app plays.
- Every earlier harness (`c2/` to `c6/`) rerun and diffed against confirm-6.
- `c7/offstart.mjs`: holds that start a shade off.

## Agreement rates

Five measures are scored on each try: mark, pass, guess, "You said" and fix.

**`tests/sing-sim.mjs`**
- All 43 outcomes are 97–100% on every measure at every rate. Two exceptions sit at 97%: l4 2-s "found it" at 50 ms, and the 4-s/35 steady hold at 50 ms.
- No lower floors are left.

**My simulator, notes sung inside their windows (48 scenarios × 4 rates)**
- 34 scenarios are at least 95% on every measure. All 48 are at least 85%.
- Guess and "You said" are 97–100% everywhere.
- The misses are almost all on the mark, from my harsher noise near band edges:

| Scenario | Worst rate | What the misses read |
|---|---|---|
| Match, a shade under or over (±60–95) | 90–95% | "well" or "on" |
| Match, quick scoops | 88–92% | "On" (known polish) |
| Match, hunts | 93.5–95% | some "slid down" |
| l4 4-s/35, steady (±12) | 85–92% | "wandered off and back" (stretch only, see P2) |
| l4 4-s/35, a breath mid-hold | 92.5–97% | "wandered off and back" |
| l9, steady | 94.5–96% | "stopped": two lost readings plus a paired glitch can open a gap over 0.28 s |
| Interval at 50, short or past by 70–95 | 89.5–95% | boundary cases |
| Tune at 35, all four outcomes | 87.5–94% | stretch only |

Every other scenario, at both 35 and 50, is at least 95%. That includes:
- off from the start;
- found it;
- sank and rose;
- wander;
- stopped;
- the mid-hold breath at 50.

**Rates I add, outside sing-sim's model**
- **Legato carry-over of 0.1–0.35 s** into the next note's window: intervals 97–100%, tunes 90–100%.
- **Carry-over of 0.35–0.6 s:**
  - intervals 46–70%, tunes 30–55%;
  - the same runs with a median in place of the interquartile mean: 83–95% and 78–94%. See P1.

## The 35 target

**Research note.** The note has no cents threshold ("The pass mark in cents is ours", "Where the evidence is thin"). The plan labels 35 a
judgement call, dated, with the reason (vibrato at 25), and it is never used in a check. That is consistent.

**Lessons.**
- l4, l5 and l6 each say "within about a third of a half-step. Off by up to half a half-step is called a little under or over here". That
  matches 35 and `SING_LITTLE_CENTS` 50.
- The app's words match too: "A little under ... within half a half-step: sing a touch higher".
- No lesson text, item or learner view still says 25 or "a quarter".
- `design.md` keeps 25 only in the historical "asked" record.

**Example sounds.** The example sounds (l4 −100 sink, l5 −75 short) belong to the 50 groups. sing-pure still scores them as labelled.

## Earlier fixed cases

**Unchanged:**
- D1, D2, D3 and E1 to E5;
- `c3/cadence` and `c5/cad`, identical to confirm-6.

**D4 fixed:**
- Y19 now reads "then the sound stopped".
- All nine `c6/det` fall-offs before a breath or a stop read "stopped", where five read "wandered off and back".

**Changed on purpose, as the shared-helper note states:**
- Slips under 0.3 s are now steady: Y23, Z11, S −80/200 ms, S −150/150 ms, and "M last note slip".
- M2, a −150 scoop over 0.3 s, is now caught as a slide (was "On").
- H22, −150 then found it, now reads "off the note from the start, then found it" (was a slide plus a stop). That is better.
- H25 and H11 end within 50 and now read plain steady, where they read "then sank".

**Changed for the worse:**
- I4: note 1 is held 0.5 s into note 2's window, and note 2 now reads "Well over", where it read "On". That is P1.
- I2 (c3), −200 held 0.4 s then on, now reads "A shade under", where it read "On". That is defensible, because it was off for 0.4 of a 1 s note.

## Learner views, l4 to l6 (re-read)

- **l4:** I can state the rule: check the start, then the end; name the first thing you hear. Check score 5/5 by reasoning.
- **l5:** I can state the rule: check the first note, then the far note against the direction of the jump. Check 5/5.
- **l6:** the rule is clear, and the check stories are 5/5.
- **Stretch screens:** clear, and they match the app.
- **No new text defect.**

## Verdicts

| Lesson | Verdict | Deciding |
|---|---|---|
| l1 (text) | PASS | none |
| l2, l3 | PASS | none |
| l4 Hold it steady | PASS | none (D4 fixed, 35 consistent) |
| l5 Steps and jumps | PASS | none (D5 does not reach two notes at the played rhythm; P1 only if note 1 carries over by more than 0.35 s) |
| l6 Short tunes | FAIL | D5 |
| l7, l8, l9 | PASS | none (D4 fixed) |
| l10, l11 (text) | PASS | none |
| l12 Find the cause | FAIL | D5 (its practice and check sing the same five-note tune) |

## Deciding defect

**D5. A tune sung back in the rhythm the app played is scored against windows that run 0.28 s per note slower. So correct notes 3 and 4
are judged against the next note (l6, l12, and the real-world test).**

This was already in the design before this round; earlier sims never modelled it, because they placed each note inside its window.

How the windows drift:
- The app plays each note with a 0.12 s gap (`SING_GAP_MS`).
- It judges each note in a window of the note plus 0.4 s (`SING_WINDOW_EXTRA_MS`), on a fixed clock.
- Only the first l6 group shows the bars. In every other tune group and in the checks, the strip is empty, with no cue for when the next
  note starts.

Noise-free (`c7/tempo.mjs`), a five-note tune sung perfectly in the played rhythm, starting 0.15–0.3 s late, reads:
- "Note 3: Well over" and "Note 4: Well under";
- with the fix lines "sing that much lower" and "sing that much higher";
- and the try fails.

`c7/tempo2.mjs`: notes pitched within ±10 and timing within ±5% of the played rhythm, 300 tries per row:

| Tune | Passes | Every note marked on |
|---|---|---|
| 5 notes at speed (l6 practice and check, l12, real-world test) | 26% | 0% |
| 4 notes at speed | 35% | 35% |
| 4 notes slowly | 79% | 79% |
| 3 notes slowly | 100% | 100% |
| 5 notes sung 5–20% slower than played | 96% | 66% |

With the median instead of the interquartile mean, these rows are only a little better, so the cause is the windows, not P1. A learner who
copies the tune correctly is told two notes were off by about two half-steps, and fails the check. That is often, and it is misleading.

**Fix, at the root:**
- Score the sung tune against the played rhythm, not against padded fixed windows. One way: start the windows at the voice's first onset,
  and space them by the heard spacing (`hear[i].atMs`), with the extra time only at the end. Better: split the sung track into notes where
  the voice moves to a new steady pitch, and pair those notes with the targets in order.
- Then add to `tests/sing-sim.mjs` tunes and intervals sung legato in the played rhythm (start 0.15–0.9 s, tempo ×0.9–1.3). Expect at least
  95%.

## Polish (does not decide a verdict)

1. **P1. The interquartile mean takes less carry-over than the median did.** It breaks when the previous note fills more than about a
   quarter of the middle of a window, about 0.35 s here. The median broke at about half. With D5 fixed, carry-over mostly goes away. If not,
   score the middle with the median, or trim the window by onset.
2. **P2. l4's 35 stretch with wide vibrato and wander:**
   - steady holds read "wandered off and back" 8–15% of the time in my noise (±60 vibrato, wander SD 10);
   - 0–3% in sing-sim's (±50, SD 8).

   It is a stretch, not the check, and its results are held to the end.
3. **P3. l9 6-s steady holds read "stopped" 4–5% of the time at 66.7 ms and jittered rates** when two dropped readings and a paired glitch
   fall together.
4. **P4. A start a shade off for 0.3–0.5 s, then on, then a sink at the end, reads "sank under",** not "off from the start" as l4 teaches
   ("name the first thing"). The fix line is still a valid one. The same start with no sink passes with the mark "Steady" (the earlier H3
   item).
5. **P5. The learner views' stretch tries (l4 try 25, l5 try 26, l6 try 25) list the result words without "A little under/over".** The app
   shows them, so this is a doc-render gap only.
6. **Still open from earlier reviews:**
   - quick scoops under 0.25 s;
   - a fast hunt with 150-ms legs;
   - a breath followed by an off note reads "sank under".

## Counts

- **Deciding:** 1, engine timing. D5: tune windows against the played rhythm. Already in the design; it reaches l6 and l12.
- **Polish:** 5 new, plus the earlier open items.
- **Wrong facts:** 0. **Arguable answers:** 0. **Carried-over structures:** 0. **New learner-text defects:** 0.
- **35 target:** consistent with the research note and the plan (a labelled judgement call), with the lesson text, the feedback words and
  the example sounds.
