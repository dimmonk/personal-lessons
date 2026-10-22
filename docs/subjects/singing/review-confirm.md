# Singing: confirmation review before shipping (2026-10-22)

Fresh reviewer, both roles, on the lessons `review-final.md` failed: l4, l6, l9, l11, l12. Learner views regenerated first
(`node tools/learner-view/render-learner-view.mjs singing`); read in full as a learner: l4, l6, l9, l11, l12. Research: the fixes in
`fixes-l7-12.md`, the changed engine (`sing-task.js` `singHeldShape`, `singLastKey`, `singMeasured`; `sing-strip.js` `singHoldLines`,
`singAfterStart`, `singMarksHtml`), V19 of the note, and the l11 data (`items-care.js`). The app's own functions were run on the final
review's cases and on 20 new edge cases (scratchpad `fx-confirm.mjs`, `fx-recall.mjs`, via `tests/load-app.mjs`).
`node tests/sing-pure.mjs` 127 pass (15 faults red), `node tests/engine-pure.mjs` 150 pass, `node tests/validate-lessons.mjs` 847,149 pass.

## Verdicts

| Lesson | Verdict | Deciding defects |
|---|---|---|
| l4 Hold it steady | FAIL | E4 |
| l6 Short tunes | FAIL | E5 |
| l9 A breath that lasts the line | FAIL | E4 (the 6-second holds) |
| l11 Looking after your voice | PASS | none |
| l12 Find the cause | FAIL | E5 (the practice tunes before the tune test) |

As a learner I could state each lesson's way of deciding before the first question and got every practice and check question right
by reasoning (l4 5/5, l6 5/5, l9 6/6, l11 7/7 recall and 3/3 cases, l12 6/6 both parts). The prose, stories and questions pass. The
failures are engine feedback only, one root (below).

## The final review's defects, re-run

| Defect | Case | App now says | Fixed? |
|---|---|---|---|
| E1 hold | +70 for 1 s, then -80 | "From the first moment your voice sat a shade over ... Then it sank under the note" | yes |
| E1 hold | -70, then +70 | "From the first moment ... a shade under ... Then it rose over the note" | yes |
| E2 hold | -70 for 1 s, then -144 | "From the first moment ... a shade under ... Then it sank further under" | yes |
| E1 tune | last note +70, then -80 | Note 3 "A shade over" (was "On the note"); "You said" measures the start, same word | yes |
| E3 tune | last note -70, then -145 | Note 3 "A shade under"; "The app measured: a shade under" | yes |
| C1 l11 | Raj, Kay | "a little husky", "mildly rough", can use the voice; the sign is "lost, or changed so much it is hard to use" | yes |
| C2 l11 | check | 7 recall in new words (6 of 7) plus 3 held-back cases, Lee, Ron, Gia (2 of 3) | yes |

New edges that came out right: on then rose (+120) and on then sank, pass and fail; a scoop down then rose; +70 throughout; +70 rising
further to +160 ("rose further over"); on, then over, then under ("then sank under", named by the end as it started on); a scoop up that
crossed to +90; a closer target (cents 25) crossing +35 to -35 ("a little over ... then sank under"); a tune ending on for 2.5 s then rose;
a tune's last note +60 throughout; a 0.4 s ordinary start from -70 (passes silently). `care-days` refuses "two weeks", "about two weeks",
"14 days", "a month"; accepts "a week", "10 days", "one to two weeks". `care-warning` refuses "hoarse".

## Deciding defects (one root: a note that starts off and then comes onto the note)

`singHeldShape` sets `off` only when the start is off and the end is off too (`end !== 0`). A note that starts off (not by a slide) and
then comes onto the note is neither off, nor a slide, nor a drift, and two places then name it wrong.

**E4. A hold that starts off and then finds the note is called "wandered off and back".** Sung (hold, 2 s): -70 for 1 s, then on
(N6): "Steady for 1.8 of 2 seconds" and "It wandered off the note and back: keep the loudness even and your ear on the note." Same on a
6-second hold (l9: -70 for 1.5 s, then on: 5.3 of 6 s, "wandered off and back"), and for -80, flip to +80, then on. l4 defines the
answer it names: "Wandered off and back would mean it starts and ends on the note but leaves it for a while in between", and teaches "a
note off from the start is off from the start, whatever it does next". Starting a shade flat and creeping up is the commonest beginner
hold, so the learner is told the wrong fault and the wrong fix (loudness, not aiming the start). Cause: `singHoldLines` adds
`SAY.singDriftLine(0)` whenever `shape.end === 0` and the hold fell short, without asking where it started.
Fix: in `singHeldShape`, a start that is off (not slid) is off from the start whatever the end (the final review's own words); when the
end is on, say the start line, then a new line such as "Then you found the note: aim at it from the start next time." `singDriftLine(0)`
only when `start === 0`. Add N6 and the 6-second case to `tests/sing-pure.mjs`.

**E5. A tune's last note that starts off and then finds the note: its mark and the "You said" line still use two readings.** Sung:
a five-note tune, last note -70 for 1.2 s, then on for 1.2 s (N18; also -60 for 1.6 s then on, N19). The mark says "Note 3: A shade
under" (`singLastKey`: the median, -61), but `singMeasured` names the end ("on"): "You said: On" gets "The app measured it the same
way" beside "A shade under"; "You said: Under" gets "The app measured: on the note. Your note ended higher than it sounded to you."
This is E3 again; the fix covered only a start off and an end off. The code comment ("One function, so the note's mark and the measured
line never disagree") is not true for this shape. Fix with E4: once the shape names this note off from the start, `singLastKey` and
`singMeasured` both read the start (side and word); more generally, for a melody's last note, `singMeasured` returns
`singLastKey`'s word and that word's side in every case, so the two can never part. Add N18 to `tests/sing-pure.mjs` with a guess of
"On" and of "Under".

l12's check tunes ask no guess, so E5 reaches its practice tunes (Step 7), not the check; it still decides, as feedback that
contradicts itself on one screen, the standard the final review applied.

## Research role

No wrong or out-of-date fact found in the changed text. l11 against V19 (AAO-HNS 2018 Plain Language Summary, as the note quotes it,
verified against the PDF by the final review): 7 to 10 days whatever started it, sooner if you smoke; no cold to explain it; four weeks
for an ear, nose and throat doctor; warning signs including "loss or severe changes ... longer than a few days" (now "lost, or changed so
much it is hard to use"), uneasy breathing; the work and performer bullets as one line. "If singing hurts, stop" is labelled the
course's reading in V19. No question with an arguable marked answer, no departure from the plan, no carried-over structure in the
re-read lessons.

## Polish (does not decide a verdict)

1. A hold that crossed: the mark reads "Steady for 0.5 of 2 seconds, then sank under" for a note that started over; the lines under it
   name the start, the mark does not. Let the mark say "off from the start" when the shape is off.
2. A tune's guess asks "was your last note under, on or over?", but for a last note off from the start the reply measures its start
   ("Your note started higher"). Ask "where did your last note start" for tunes, or have l6 say which part is judged.
3. A tune's last note that scooped up and then sank is marked "On the note" with no word on the scoop (a single note names it).
4. l4's distractor line for "Off the note from the start" says "... and stays there", while Hugo (low, then lower) is marked that answer.
   Say "whatever it does next".
5. Learner-view renderer (final review's polish 8) is still not done.

## Counts

Deciding: 2 engine feedback (E4, E5, one root: an off start that then finds the note), affecting l4, l9 (E4) and l6, l12 (E5).
Final review's E1, E2, E3 (as reported), C1, C2: fixed and confirmed. Wrong facts: 0. Arguable answers: 0. Carried-over structures: 0.
Polish: 5.
