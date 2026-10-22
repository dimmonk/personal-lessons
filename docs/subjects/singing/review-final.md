# Singing: final review before shipping (2026-10-22)

Fresh reviewer, both roles. Learner views l1 to l12 regenerated first (`node tools/learner-view/render-learner-view.mjs singing`; only
l2 differed from the committed copy, as it already did in the working tree). Read in full as a learner: l4, l6, l7 to l12. Quick pass:
l1, l2, l3, l5. Research: data files, plan, note (V8 to V20), build-subject skill, the AAO-HNS Plain Language Summary PDF, and the
engine run on the example sounds and on sung tries built for the edge cases (scripts in the session scratchpad, `fx-score.mjs`,
`fx-text.mjs`, using `tests/load-app.mjs`). `node tests/sing-pure.mjs` (122 pass, 15 faults red), `node tests/engine-pure.mjs` (150 pass),
`node tests/validate-lessons.mjs` (845,215 pass).

## Verdicts

| Lesson | Verdict | Deciding defects |
|---|---|---|
| l1 Range | PASS | none (quick pass) |
| l2 Match a note | PASS | none (quick pass) |
| l3 On, under, over | PASS | none (quick pass) |
| l4 Hold it steady | FAIL | E1, E2 |
| l5 Steps and leaps | PASS | none (quick pass) |
| l6 Short tunes | FAIL | E1, E3 (the tunes' long last note) |
| l7 Lighter, not louder | PASS | none |
| l8 What happens at the top | PASS | none |
| l9 A breath that lasts the line | FAIL | E1, E2 (the 6-second holds) |
| l10 Odd sound, right notes | PASS | none |
| l11 Looking after your voice | FAIL | C1, C2 |
| l12 Find the cause | FAIL | E1, E3 (the tune test's last note) |

The stories, questions and prose of l4, l6, l9 and l12 pass on their own: I could state each lesson's way of deciding before the first
question and got every practice and check question right by reasoning (l4 5/5, l6 5/5, l7 5/5, l8 6/6, l9 6/6, l10 6/6, l11 7/7,
l12 6/6 both parts). They fail only on the engine defects below, which sit in one shared function, so one fix clears all four.

## Deciding defects

### Engine feedback that disagrees with what was sung (one root: `singHeldShape` / `singHoldLines`, `public/app/lessons/sing-task.js`, `sing-strip.js`)

**E1. A held note that starts off on one side and ends off on the other is called "sank" or "rose", never "off from the start".**
Sung (hold, 2 s, cents 50): +70 for a full second, then down to -80. The app says "Steady for 0.5 of 2 seconds, then sank under" and
"Then it sank under the note"; nothing says it started over. l4 teaches the opposite: "a note off from the start is off from the start,
whatever it does next" (and the Hugo case). Same for -70 then +70 ("then rose over"). `singHeldShape` sets `off` only when the start
and end are on the same side. In a melody's last note the same try is also marked "On the note" (median -38) though it was on for 0.5 s.
Fix: `off` whenever the start is off the note and was not a slide, whatever the end; name the start first ("From the first moment your
voice sat a shade over"), then the end ("then it sank under"); a last note that was never on for its hold is never marked "On the note".
Add the two crossing tries to `tests/sing-pure.mjs`.

**E2. "From the first moment" describes the end, not the start.** Sung: -70 for a second, then sinking to -144. The app says "From the
first moment your voice sat well under the note, about one half-step: sing that much higher." It started a shade under (0.7 of a
half-step), so the line is wrong about the first moment and tells the learner to move a full half-step from the start. Cause:
`singHoldLines` passes `answer.end` to `singStartLine` (sing-strip.js line 131). Fix: the start line uses `answer.start`; when the end is
further off on the same side, add "and it sank further" (or "rose further").

**E3. A tune's last note: the note's mark and the "You said" line use two readings.** Sung last note: -70, sinking to -145. The note's
mark says "A shade under" (the median); the guess line, measured at the end, says "The app measured: well under". The code comment says
the two always agree. Fix with E2: a last note that was off from the start is named by one reading in both places.

### l11

**C1. Two answers are defensible in Raj (item 9) and Kay (item 12).** Step 1 defines hoarse as "any change in how your voice sounds",
and lists as a do-not-wait sign "a voice that is lost or badly changed for more than a few days". Raj has been hoarse three weeks and Kay
two: a beginner can read that as a changed voice for more than a few days and pick "See a doctor right away"; only the unstated word
"badly" separates them. Fix: say the voice is "a little husky" or "mildly rough" in both stories, and in Step 1 make the sign "a voice you
have lost, or that has changed so much it is hard to use, for more than a few days" (the guideline's "loss or severe changes").

**C2. The check can be passed without the decision the lesson teaches.** The check is "the same seven questions again", all recall
of the parts, asked minutes earlier; none of the rest / see a doctor / right away cases (items 8 to 13) is checked, and no new case is
held back. The skill asks for "a check on new cases"; the plan's "6 of 7 from memory" keeps the recall but drops the judgement. Fix:
keep the seven recall questions and add three held-back cases (one each: rest, see a doctor, right away), passing at 2 of 3 on them.

## Fixes verified

- AAO-HNS 2018 timing (R1, N1): read in the Plain Language Summary PDF (dysphonia.org). The bullets are as V19 quotes them: "does not
  go away or get better in 7 to 10 days, especially if you smoke"; "You do not have a cold or flu"; the warning bullets; "persists ... after
  4 weeks or has no clear cause ... evaluated by an otolaryngologist". l11's Step 1, Sam's case, the items and `care-days` (7 to 10 days, a
  week; "two weeks" and "a month" are refused, tested with the app's scorer) and `care-four-weeks` match.
- Warning signs (R2): all on the screen, in `means` and accepted.
- Sung retest (R10): `retestInstances` makes the check's sung tries again on fresh seeds of the same task; l12's check has `retest: 7`; the
  engine tests (retest due on day 7, partial retest does not clear it, a sung retest asks new targets) pass; the screen says the tunes are
  played once, and the engine has no replay before singing.
- R6 Ivan ("singing through his nose"), R9 Paul's fix, L6 loudness (the app does say "That was louder than your talking voice" and fails a
  try at twice talking level, checked), L7 to L13 wording, the l12 map's tie-break and the effort trio: present and right.
- Round 3 (l1 to l6): a tune a shade under throughout has no "sank"; a 250 ms ordinary onset holds; scoop then sink names the slide and
  the sink; a last note held 2 s then sinking says "Steady for 2 seconds, then sank under"; closer targets say "a little under, within half a
  half-step"; "Wandered off and back" is named by the app ("It wandered off the note and back"). All confirmed by running the app's own
  functions.

## Example sounds, scored with the app's functions (all agree with the words on screen)

| Sound | App's result |
|---|---|
| l3 On the note | On the note |
| l3 A shade under, then moving up (-75 held) | A shade under |
| l3 A shade over, then moving down | A shade over |
| l3 Sliding up into it | Sliding up into it (not on) |
| l3 Landing on it | On the note |
| l3 Hunting | Hunting for the note (3 turns; 2 in a 1.9 s window) |
| l4 Holding steady | Steady for 2 seconds |
| l4 Sinking under | Steady for 1.5 of 2 seconds, then sank under (ends at -100: "a shade", on the edge) |
| l5 A big jump / A jump that falls short | both on / note 2 a shade under |

l2's Jaws sound (E3 to F3) is a half-step, as said.

## Polish (does not decide a verdict)

1. l11 why: "Pain while you sing means stop singing" has no source in the note (only pain when speaking or swallowing, V19). Add a source
   or a "course's reading" line to V19.
2. `care-warning` accepts bare "losing your voice" / "lost my voice"; the sign is a voice lost for more than a few days. Accept it, but have
   the reason say "for more than a few days".
3. V19 does not mention the PLS's own sentence in "What Causes Hoarseness": "See your health care provider if your hoarseness does not go
   away or get better in 4 weeks." Name it and say why the course follows the 7 to 10 day bullet.
4. V19's last two bullets (hoarseness that makes work hard; a vocal performer who cannot do the job) are not in l11; one line would fit a
   singing course.
5. l4: "Wandered off and back" is an option on every question but no story, worked case or check uses it. One practice case.
6. l12 Uma (cracking): the marked fix is "Sing it lighter and softer, on 'oo' first"; l8 teaches "slide up through that spot on 'oo' or a
   straw". Word the option or the reason to name the slide.
7. l12 range feedback says "or comes out only as a rumble or air"; the l12 map's range line names only a note that will not come.
8. Learner-view renderer: l7/l8 try lines omit the too-loud line the app shows; closer-target groups list "A shade" words rather than "A
   little"; at-end groups still print "After the try". The app is right; the view under-describes it.
9. l11: the worked case comes after the recall questions (Step 5); placing it before Step 3 would show the decision before it is drilled.

## Counts

Deciding: 3 engine feedback (E1 to E3, one root, affecting l4, l6, l9, l12), 1 arguable answer (C1), 1 departure from the skill (C2).
Wrong facts: 0. Carried-over structures: 0 found. Polish: 9.
