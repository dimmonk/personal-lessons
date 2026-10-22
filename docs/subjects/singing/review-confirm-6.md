# Singing: sixth confirmation review before shipping (2026-10-22)

Fresh reviewer, both roles, on the D3 fix from `review-confirm-5.md`. The judge now cleans the pitch track and judges by its center
(`singCentered` in `sing-score.js`):
- it drops readings more than 300 cents from the median of their 3 neighbours each side;
- it judges each reading as the mean of the readings within ±0.1 s;
- a gap over 0.28 s breaks a hold;
- turns, start, end and `left` all come from that track.

What I ran, all through the app's own functions (`singAnswer`, `singOk`, `singJudge`, `singMarksHtml`, `singMissHtml`,
`singGuessAgrees`) via `tests/load-app.mjs`. Harnesses are in scratchpad `c6/`.
- Every earlier harness (`c2/`, `c3/`, `c4/new.mjs`, `c4/melwob.mjs`, `c5/cad.mjs`, `c5/mc.mjs`), diffed line by line against
  confirm-5's outputs.
- `c6/real.mjs`, a realistic beginner on the app's real plans (`singPlan`, lesson tolerances).
  - Each try has:
    - vibrato at 5–7 Hz, ±0–50 cents, random phase;
    - slow wander (SD 8 cents), plus reading jitter (SD 8 cents);
    - 3% pitch-finder slips (a fifth, or an octave either way) and 3% dropouts;
    - a natural attack, a reaction delay of 150–350 ms, and an end that comes early;
    - half the notes end with a fall-off (100–200 ms, down 150–300 cents).
  - Three reading rates:
    - every 50 ms;
    - every 66.7 ms (a 30 fps screen, or iOS Low Power Mode);
    - "mix": 50 or 66.7 ms at random, which is what a 60 Hz screen gives.
  - 200 tries per outcome per rate, covering every outcome each lesson teaches.
  - Four things are scored per try:
    - **mark:** the note's outcome and word are the intended ones;
    - **guess:** the guess agrees exactly when it is the intended side;
    - **"You said":** the line points from the guess toward the intended side;
    - **direction:** the fix line names the intended fault and direction.
- `c6/det.mjs`: noise-free single cases for the defect below.
- `c6/scoop.mjs`: a sweep of scoop depth by duration.

Tests: `sing-pure.mjs` passed 208 checks (16 seeded faults turned red), `audio-pure.mjs` passed 710 and `engine-pure.mjs` passed 150.

## Verdicts

| Lesson | Verdict | Deciding defects |
|---|---|---|
| l1 Find your voice (text) | PASS | none |
| l2 Match a note | PASS | none (D3 fixed) |
| l3 Check before you fix | PASS | none (D3 fixed) |
| l4 Hold it steady | FAIL | D4 |
| l5 Steps and jumps | PASS | none |
| l6 Short tunes | PASS | none (D4 reaches it at 7%, see below) |
| l7, l8 Light high notes | PASS | none (D3 fixed) |
| l9 A breath that lasts the line | FAIL | D4 |
| l10, l11 (text) | PASS | none |
| l12 Find the cause | PASS | none (D4 reaches it at 7%) |

## D3: fixed and confirmed

**Steady on-note matches, `c5/cad.mjs`, 300 tries per row.** Every row reads "On the note" and passes, 300 of 300, at 50 ms, 66.7 ms and
mix:
- jitter 8 and jitter 15;
- 3% fifth errors;
- 5% octave errors;
- 10% unclear readings;
- vibrato ±40 and ±55.

The one exception is 5% fifth errors: 300 of 300 at 66.7 ms and mix, and 299 of 300 at 50 ms. The miss is a single try read "Sliding
up into it". At confirm-5, 5% fifth errors read as hunting 36% of the time at 66.7 ms and 47% at mix.

**Vibrato sweep, `c5/mc.mjs`.** Vibrato of ±40 to ±80 at 5 or 6 Hz, at 50 or 66.7 ms, is called a hunt 0 times in 200. At confirm-5,
±55 at 66.7 ms was a hunt 86–98% of the time.

**`c6/real.mjs`, realistic match on the note:** mark, pass, guess, "You said" and direction all 100% at every rate.

**Hunts are still hunts:**
- Realistic hunts (legs of ±130–180 cents, 220–320 ms each, then on the note) read "Hunting for the note" 99–100% of the time.
- The "both ways" line appears with them, and with nothing else.
- The 200-ms and 300-ms hunts and M12 are still hunts.

## Outcomes by lesson (`c6/real.mjs`; % of tries matching the intended outcome; rates 50 ms / 66.7 ms / mix)

| Outcome | mark | guess | direction |
|---|---|---|---|
| Match: on (l2, l3, l7, l8) | 100 / 100 / 100 | 100 | 100 |
| Match: a shade under or over (±65–90) | 97–100 | 98–100 | 98–100 |
| Match: well under (2 half-steps) | 100 | 100 | 100 |
| Match: slid in (−200 to −300 over 250–400 ms) | 82 / 91 / 83 | same | same (P1) |
| Match: hunting | 99–100 | 99–100 | 99–100 |
| Hold 2 s, 50 c: steady | 100 | 100 | 100 |
| Hold 2 s, 50 c: off from the start (stays, or found it) | 97–100 | 100 | 97–100 |
| Hold 2 s, 50 c: sank, rose | 99–100 | 99–100 | 99–100 |
| Hold 2 s, 50 c: wandered off and back | 100 | 100 | 100 |
| Hold 2 s, 50 c: stopped (half with a fall-off) | **94** / 100 / 99 | 100 | **94** / 100 / 99 (D4) |
| Hold 4 s, 25 c: steady | 56 / 51 / 45 | 97–100 | 99–100 (P2) |
| Hold 4 s, 25 c: stopped (half with a fall-off) | **64 / 72 / 72** | 99–100 | **64 / 72 / 72** (D4) |
| Hold 4 s, 25 c: off from the start, sank, rose, wandered | 99–100 | 99–100 | 98–100 |
| Hold 6 s (l9): steady, off from the start, sank, rose, wandered | 96–100 | 100 | 96–100 |
| Hold 6 s (l9): stopped (half with a fall-off) | **92** / 100 / 95 | 100 | **92** / 100 / 95 (D4) |
| Interval: both on; falls short; overshoots (l5) | 93–100 | 98–100 | 98–100 |
| Tune: all on; last note sank, rose, wandered, slid in then on | 100 | 100 | 100 |
| Tune drift (0, −20, −40, −60, last −80) | 100 | 100 | 100 |
| Tune off throughout (+70 each) | 81–85 | 99–100 | 97–99 |
| Tune: last note stopped at 1.2 s | **93** / 100 / 97 | 100 | **93** / 100 / 97 (D4) |

Two rows are not defects:
- **Tune off throughout.** Its misses are one of notes 1–4 read "On the note". +70 with wander sits 20 cents from the edge, so that is
  my scenario sitting near the line, not the app.
- **Shade and interval rows.** Their 1–7% misses are boundary cases near ±50 and ±100 cents.

**Guess and "You said" lines.** In every row, the guess agrees exactly when it is the intended side 97–100% of the time. When they
disagree, the "You said" line points the right way (higher or lower) 99–100% of the time.

## Deciding defect

**D4. When the voice falls in pitch as it stops, the app calls it "Wandered off and back" instead of "then the sound stopped" (l4, l9).**

The fall can come before the sound ends early, or before a breath taken mid-hold. Either way, the learner gets the wrong fix: "It
wandered off the note and back: keep the loudness even and your ear on the note." The right fix, from the stopped line and l9's own
teaching screen, is "if the air runs out, breathe a little earlier and fuller next time". The mark is also false on its face: after the
fall, the voice never came back.

Why it happens:
- `singLeftMs` counts every off-note reading on the centered track as leaving the note.
- It skips only the last `SING_RELEASE_S` (0.15 s) of the whole try.
- The ±0.1 s center then smears a fall-off up to 0.1 s further back. So a fall of about 150–200 ms spills past the 0.15 s that is
  skipped.
- Before a gap in the middle of a hold, nothing is skipped at all.

Once `left` is above 0, a note that began and ended on the note is judged "wander", not "stopped".

The end-stop half of this is new with the center:
- confirm-5's Y19 (on 1.6 s, then a fall-off to −300 over its last 250 ms) read "then the sound stopped".
- It now reads "wandered off and back", `left` 50.

Measured:

| Case | 50 ms | 66.7 ms | mix |
|---|---|---|---|
| l9 6-s hold, breath of 0.4 s mid-hold, fall-off 100–200 ms / 150–300 cents before it | 90% wander | 85% | 91% |
| same breath, fall-off 100–150 ms / 100–200 cents | 45% | 48% | 54% |
| same breath, slight fall-off ≤100 ms / ≤120 cents | 2% | 3% | 4% |
| l9 6-s hold, voice ends at 3.6 s with a fall-off (100–200 ms / 150–300 cents) | 12% | 0% | 5% |
| l4 2-s hold, 50 c, ends at 1.2 s with that fall-off | 10% | 0% | 3% |
| l4 4-s hold, 25 c, ends at 2.4 s with that fall-off | 68% | 29% | 36% |
| l6/l12 tune, last note ends at 1.2 s with that fall-off | 14% | 0% | 5% |

Noise-free, at 50 ms (`c6/det.mjs`):
- A breath after a fall-off of −150/200 ms, −250/200 ms or −300/150 ms reads "wandered off and back".
- A breath after −150/100 ms or −250/100 ms reads "stopped".

A fall in pitch as the air or the note gives out is ordinary for beginners. l9 asks learners to notice exactly this case: "If the air
ran out before 6 seconds...". A learner in l9 who breathes mid-hold is told the wrong fault most of the time. One who runs out at the end
is told the wrong fault about 1 time in 8 on a 50-ms phone. On l4's 25-cent set, it is wrong most of the time even without a breath.

l6 and l12 meet D4 only when a tune's last note stops early: 7% of the time with fall-offs in half the tries, 14% when every stop falls
off, and 2–5% at mix. I count that as below "often", but the same fix covers them.

Fix, at the root:
- Treat the moments just before every gap in clear sound like the release at the end. Skip the last `SING_RELEASE_S` plus the center
  half-width (0.1 s) before each gap and before the end, so `left` measures only time the voice left the note while it was still sounding.
- Do not average the center across a gap.
- Add Y19, and a mid-hold breath after a −250/200 ms fall-off, to `tests/sing-pure.mjs`. Run each at 50 ms, 66.7 ms and mix, and expect
  "stopped".
- Keep the confirm-4 and confirm-5 cases that are not stops:
  - Z11 and "M last note slip −80 0.2 s" stay "wandered off and back";
  - "R breath 0.35 s, back −80" stays "sank under".

## Earlier fixed cases: rerun

**D1, D2 and E1 to E5:** the outcomes are unchanged, except where noted below. Only seconds in tenths and the stored numbers differ:
- Z11 now reads 1.7 of 2 seconds, where it was 1.6.
- `c4/melwob`: guess "On" is rejected 0 times when the end was on the note, at wander SD 15, 20 and 25.

**Changed on purpose, all in the shared-helper note:**
- H30 and T12 (a breath gap of 0.2 s) now pass, because a gap must be over 0.28 s to break a hold.
- A slip of −80 for 150 ms now reads "Steady"; 200 ms and over still read "wandered off and back".
- At confirm-5, Y19 read "then the sound stopped"; it now reads "wandered off and back". That is D4, above.

**Every example sound still scores as labeled, 12 of 12.** The l4 "Sinking under" sound now reads "Steady for 1.4 of 2 seconds, then
sank under", which matches the learner view's "1.4 seconds".

**The 3,000-try sweep (`c5/mc.mjs`):**
- "both ways" appears 0 times.
- The guess agrees exactly when it equals the end side.
- The end side is never missing.
- No line says "stopped" when `left` > 0.
- The `fixdir` flags it prints are a string artifact of that harness: it looks for "higher"/"lower", but the drift lines say "nudge it
  back up" or "ease it back down". `c6/real.mjs` checks those words, and they are 99–100% right.

**Holds with unclear readings (`c3/cadence`) are much better.** At 66.7 ms with 10% unclear readings, 6-s holds pass 99% of the time
(was 44%). At 100 ms they pass 61–94% (was 3–36%).

## Learner role (quick pass on text, l1 to l12)

The learner views were regenerated since confirm-5, and they agree with what the app now says:
- **l4 and l9:** their "1.4 seconds" example matches the sinking example sound.
- **l3:** it defines a slide as one that "arrives ... within a moment, late" (Omar: about half a second). That fits the app.
- **l6 and l12:** they ask where the last note ended, which is the same path as a hold.
- **l9:** its "If the air ran out before 6 seconds ... breathe a little earlier" is what the stopped line says. D4 is where the app
  departs from it.

No new learner defect.

## Research role

- No wrong or out-of-date fact in changed text, and no arguable marked answer.
- The new constants (`SING_CENTER_S`, `SING_GLITCH_CENTS`, `SING_RUN_GAP_S`, `SING_RELEASE_S`) are labeled judgement calls. The research
  note sets no values.
- D4 is about how two of them interact (the release skip is narrower than a fall-off plus the center), not about a source.

## Polish (does not decide a verdict)

1. **Quick scoops read "On the note."** Measured at mix:
   - −300 over 150 ms: 88%;
   - −200 over 250 ms: 77%;
   - −150 over 400 ms: 74%.

   Scoops over 400 ms from −200 or more are caught 91–100% of the time. This is the 0.25-s start window (V23), and the ±0.1 s center
   slightly shrinks the measured start (H12 −225 → −206). l3's definition and its example (half a second) fit, so it is a limit, not a
   contradiction.
2. **25-cent holds with wide vibrato read "wandered off and back".** With vibrato ±50 alone (no wander), a steady 4-s hold fails 7% of
   the time at 50 ms and 21–22% at 66.7 ms and mix. At ±30, it fails 1–4%. This affects only l4's at-end set of three holds, and few
   beginners have ±50 vibrato. With ordinary slow wander (SD 8) and no vibrato, 18–28% fail. That is the 25-cent band doing its job.
3. **A 150-ms slip of −80 is now invisible.** At confirm-5 it read "wandered off and back". The shared-helper note states this as a
   limit.
4. **A 250-ms gap at 66.7 ms passes 21% of the time** (mix: 7%). At 50 ms, it always breaks the hold. confirm-5 said "gaps of 250 ms or
   more read stopped"; at 66.7 ms that now holds only for 300 ms and over.
5. **The l3 "Hunting" example sound reads exactly 2 turns** (was 3), the least that counts as a hunt. It still scores as labeled, with
   no margin.
6. **Still open from earlier reviews:**
   - A fast hunt (150-ms legs) reads as steady.
   - A passing hold that ended off has a green mark (intended).
   - A breath followed by an off note reads "sank under".
   - H3 passes silently.
   - Tune notes other than the last get no slide or hunt check.
   - X30 reads "did not settle".

## Counts

- **Deciding: 1, engine feedback.** D4: a fall-off before a stop or a breath is called "wandered off and back".
  - l9: 85–91% of mid-hold breaths with a real fall-off, and 12% of early stops at 50 ms.
  - l4's 25-cent set: 29–68% of early stops.
  - It also reaches l6 and l12 at 7%.
  - The end-stop half is new with the ±0.1 s center.
- **D3:** fixed and confirmed. D1, D2 and E1 to E5: still fixed.
- **Example sounds:** 12 of 12 score as labeled.
- **Wrong facts:** 0. **Arguable answers:** 0. **Carried-over structures:** 0. **New learner defects:** 0.
- **Polish:** 5 new, plus the earlier open items.
