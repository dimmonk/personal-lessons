# Singing: second confirmation review before shipping (2026-10-22)

Fresh reviewer, both roles, on the rewritten judging of sung notes (`public/app/lessons/sing-judge.js`: `SING_OUTCOMES`, `singJudge`,
read by `sing-strip.js` marks, the "You said" line and the lines after a miss). Learner views regenerated
(`node tools/learner-view/render-learner-view.mjs singing`); read for the taught definitions: l2, l3, l4, l5, l6, l9, l12. The app's own
functions (`singAnswer` -> `singOk`, `singJudge`, `singMarksHtml`, `singMissHtml`, the guess line for Under/On/Over) were run through
`tests/load-app.mjs` on 77 adversarial contours sampled every 50 ms like the microphone (scratchpad `c2/match.mjs`, `hold.mjs`, `mel.mjs`,
`l9.mjs`, `iv.mjs`, `ex.mjs`). `node tests/sing-pure.mjs` 132 pass (15 faults red), `engine-pure.mjs` 150 pass, `validate-lessons.mjs`
847,150 pass.

## Verdicts

| Lesson | Verdict | Deciding defects |
|---|---|---|
| l2 Match a note | FAIL | E1 |
| l3 Check before you fix | FAIL | E1 (the slide it defines) |
| l4 Hold it steady | FAIL | E2, E3, E4, E5 |
| l5 Steps and jumps | PASS | none |
| l6 Short tunes | FAIL | E2, E3, E5 (the long last note) |
| l9 A breath that lasts the line | FAIL | E3 (its central case), E4, E2, E5 |
| l12 Find the cause | FAIL | E2, E3, E5 (practice and check tunes) |

Learner role: the lesson text is unchanged since `review-confirm.md` passed it, apart from l4's distractor ("whatever it does next", that
review's polish 4: fixed). The definitions the engine must match are stated plainly and I could state each lesson's way of deciding. The
failures are all engine feedback.

## What now works (re-run)

The previous E4 and E5 are fixed: a hold -70 for 1.2 s then on, and the 6-second version, now say "From the first moment ... a shade under.
Then you found the note"; a tune's last note -70 then on is marked "A shade under", and Under/On/Over all agree with that mark. Also right:
steady holds; on-then-sank and on-then-rose, pass and fail; -70 and +70 throughout; -70 sinking further; a dip and return (wander); a closer
4-second hold at +35 ("a little over"); a scoop then on (pass, "after sliding into it"); tunes -70, +70, three half-steps low, drifting
further off; one jump short; last note sank after 2.5 s; intervals including the closer target and overshoot; on, shade, well, scoop, hunt
on a match; an octave low folds to on.

**Every example sound scores as labeled** (as the learner's part, sung into the matching window): l3 "On the note" -> On; "A shade under,
then moving up" -> A shade under; "A shade over, then moving down" -> A shade over; "Sliding up into it" -> Sliding up into it; "Landing on
it" -> On; "Hunting for the note" -> Hunting (2 turns in a match window, 3 over its full length); l4 "Holding steady" -> Steady for 2
seconds; "Sinking under" -> fails, "Steady for 1.5 of 2 seconds, then sank under" (as its screen says); l5 "A small step", "A big jump" ->
both on; "A jump that falls short" -> note 2 A shade under.

## Deciding defects

**E1. A slide that does not arrive is still called "Sliding up into it", and where it sat is never said (l2, l3).** The `slid` row wins
whenever the start was more than a shade off and moved more than a shade, wherever the note then sat.
- Match, scoop from -250 landing at -70 and staying (M4): mark "Sliding up into it"; only line "...slid up into it. Aim at the note
  itself". Never told it sat a shade under. Same for landing at -130 (M5, well under) and from +250 landing at +70 (M7).
- Scoop from -250 overshooting to +80 (M6): mark "Sliding up into it"; "You said: Over" (right about where it sat) gets "The app measured:
  sliding up into it. Your note started lower than it sounded to you." No word to sing lower.
- l3 defines it: "Sliding up into it: starts low, then arrives on the note by itself within a moment, late." Scooping and landing flat is
  the commonest beginner onset, so the learner is told the wrong whole story.
Fix: `slid` names the note only when it sat on the note (`singOnNote(ask, f.note)`). When it slid and sat off, name where it sat (`sat`,
its word and side) and add the slide line worded for it ("Your voice started under and slid up, but stopped a shade under: aim at the note
itself"); the guess then measures where it sat. Add M4, M6, M7 to `tests/sing-pure.mjs` with each guess.

**E2. A held note that scooped and landed off is told it "sank" or "rose" (l4, l6, l9, l12).** `singAfter` treats a slid start as if it
arrived on the note (`from = 0`), so any off ending reads as a drift.
- Hold 2 s, scoop -300 landing at -70 and staying (H13): "Steady for 0 of 2 seconds, after sliding into it"; "...slid up into it." then
  "Then it sank under the note: keep listening, and nudge it back up as soon as you hear it drop." It never sank; it landed under. From
  +300 to +70 (H14): "Then it rose over the note". Tune's last note the same (T8): "Then it sank under".
- l4: sank under "starts on the note and slips lower as it goes on". The fix given (nudge when it drops) is the wrong fix.
Fix: with E1, a slid hold that never reached the note is `offStart`-like by where it landed ("From the first moment it settled a shade
under"); `singAfter` takes `from` from where it landed, not 0. Add H13, H14, T8.

**E3. A hold that stayed on the note but stopped early, or broke for a breath, is called "wandered off and back" (l4, l6, l9, l12).**
The `wander` row fires on any short hold whose start and end were on, without asking whether the voice ever left the note.
- l9, 6-second hold, on the note until the air ran out at 4.5 s (B1): "Steady for 4.5 of 6 seconds, wandered off and back"; "It wandered
  off the note and back: keep the loudness even and your ear on the note"; any guess gets "It went both ways, so it was neither under nor
  over." l9's own screen says that case is the point: "If the air ran out before 6 seconds, do not squeeze: breathe a little earlier and a
  little fuller next time." Same for a quick breath mid-hold (B3, H30), a 4-second hold stopped at 3 s (B4), a 2-second hold sung 0.6 s
  (H18) or started 1 s late (H19).
- Tune's long last note on but stopped after 1 s (T11), or broken by a breath (T12): Note 5 marked "Wandered off and back". l6: "The last
  note is long: keep it steady for 2 seconds."
- l4 defines wander: "starts and ends on the note but leaves it for a while in between". These notes never left it.
Fix: store whether the hold left the note (e.g. the longest off-note stretch, or sung time vs on time, in `singAnswer`), and add an outcome
before `wander`: on the note but stopped or broke ("Your voice stayed on the note but stopped after 4.5 seconds. Keep going until the screen
moves on; if the air runs out, breathe a little earlier and fuller"). Its guess side is 0. Add B1, B3, T11.

**E4. l4 and l9 tell the learner to say where the note ended; the app answers about where it started (l4, l9).** l4: "Without the line you
say where your note ended, under, on or over, before you see it." l9: "saying where your note ended before you see it." But `singMeasured`
uses the start for `offStart` and `slid`.
- Hold -70 for 1.2 s, then on (H4, the fixed E4 case): a learner who answers "On" (it ended on) gets "The app measured: a shade under.
  Your note started lower than it sounded to you." +70 then on (H23), scoop then on (H12, a pass): the same.
- The learner did exactly what the lesson asked and is told they heard wrong.
Fix: pick one. Either the hold guess measures the end in every case (`endSide`, part 'ended'), or l4 and l9 (and the prompt for a hold)
ask "where did your note start", matching "name the first thing you hear". The prompt, the lesson line and `singMeasured` must say the
same thing.

**E5. A hold 50 ms short reads "Steady for 2 seconds" and "You stayed on the note for 2 seconds. This one needs 2." on a failed mark (l4,
l6, l9, l12).** `tenths` rounds 1950 ms to 2.0 and `SAY.singHeld` then prints the full-seconds wording (H16, B5); the same at 5950 of 6.
Fix: floor to tenths for display (`Math.floor(ms / 100) / 10`) so a short hold never shows the needed seconds. Add B5.

## Research role

No wrong or out-of-date fact in the re-read text. The judge's own table (`SING_OUTCOMES.says`) quotes the lessons, but the `slid` row's
wording ("moved more than a shade to where it sat, arriving late") is not l3's ("arrives on the note"): that gap is E1. No arguable marked
answer and no carried-over structure found in the screens re-read.

## Polish (does not decide a verdict)

1. A steady vibrato of about +-60 around the note is called "Hunting for the note" on a match (M10) and "wandered off and back" on a hold
   (H8); +-60 around -70 (M11) gets "neither under nor over". Rare in beginners; a centred wobble could be judged by its middle.
2. A hold -70 for 0.8 s then on passes silently as "Steady for 2 seconds" (H3), against l4's "off from the start is off from the start".
   Defensible by the pass rule; say "after a late start" when the start was off.
3. A match that glides slowly from -80 to +80 through the note scores "On the note" (M23); a start at -90 that then sits on is "On" (M21).
   The slide threshold (more than a shade) is a judgement call; worth naming in l3.
4. Notes of a tune other than the last get no onset or hunt check: each scooping note is "On" (T15), a hunting note 3 is "On" (T16).
   Notes sung 0.65 s late read as well off (T14) with "sing that much higher".
5. "You stayed on the note for 1 seconds" (T11): singular.
6. The tune's lines repeat "Note 5." before each line of the same note (T2, T8, T10).
7. A tune's guess asks "was your last note under, on or over?"; l12 says "where your last note landed". With E4 settled, use the same word.

## Counts

Deciding: 5 engine feedback (E1 slide that misses, E2 slide then "sank", E3 stopped or breathed called "wandered", E4 guess start vs end,
E5 rounding), affecting l2, l3 (E1); l4, l9 (E2-E5); l6, l12 (E2, E3, E5). Previous E4, E5: fixed and confirmed. Example sounds: 11 of 11
score as labeled. Wrong facts: 0. Arguable answers: 0. Carried-over structures: 0. Polish: 7.
