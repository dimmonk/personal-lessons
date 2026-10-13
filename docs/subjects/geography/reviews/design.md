Verdict: passes

# Record review: Geography (gate 5), sixth review
Reviewer: an independent record reviewer (Opus 5.5), 2026-10-13; opened: .claude/skills/build-subject/SKILL.md, docs/subjects/geography/design.md (by search and by `git diff fb56bf1` of it), docs/subjects/geography/reviews/design.md (the fifth review), docs/subjects/geography/reviews/l16.md (the stand-in review, its head), docs/lesson-standard.md (3.5, 3.9, 3.10, 3.11, 10.1 and 10.3 by search; V70, V73 and V74 in 9.2 by search), tests/lessons/rules-lesson.mjs and controls-table.mjs (by search: the flags rules V73 and V74), tools/design/fp.mjs (run), tests/validate-lessons.mjs (run), git log fb56bf1..HEAD
Reviewed: sha256:a36c9ebb687359891ecdc420789735272de415d4a4fae745ced730f730a15422

`node tools/design/fp.mjs geography` prints the fingerprint above. `node tests/validate-lessons.mjs` reports one fault of
55,410 checks: V69, lesson 16 changed while the record has no passing review of this design. That fault is this
review's subject. No other rule fails, V73 (reading) on lesson 16 included.

## The fifth review's fixes

1. **Gate 3, `delivery`: done.**
   - **The flags item** now says what 3.5 and 3.9 say. A `flags` block shows flags about 64 pixels wide. When a flag is
     the question, the flag is bare and a `place` ask sits under it. V74 refuses a flag asked with its name beside it
     (rules-lesson.mjs 170 to 172, with a control). With `names`, each flag has its name beside it on the look. A flag
     question's feedback shows the flag with the name and opens with the place's `flagLine`. V73 counts the names a
     flags block prints (rules-lesson.mjs 83 to 87). The item cites commits 0df30e6, 7cc9dcf and f9eea81.
   - **The `map` block item** now names the things 3.9 lists:
     - the `view` panels;
     - names 12 pixels tall at every zoom;
     - a microstate's name on a `lead` line from its dot;
     - water in its own colors.
   - **The map-data sizes** match 3.11's measurement of 2026-10-13: 235 KB in all, `world` 85.2, `us` 88.5,
     `europe-west` 61.7. The item adds 3.11's line that the map data sets no name size.
   - **The gate 3 prose** now says the same. Its "flags (emoji)" names the `flags` block and `flagLine`. A dated
     sentence says what was "built after the first stand-in review", and it comes before "The pilot (l16) needs only
     what is built".
2. **Gate 5: done.**
   - **l16's `feedback`** now says a flag item opens with the country's `flagLine`, "the one line that tells its flag
     from the look-alike it is mistaken for". That is what `does` promises.
   - **The gate 5 prose** has a new paragraph, dated by the stand-in review of 2026-10-13 (`reviews/l16.md`, verdict
     fails, under the waiver of 2026-10-12). It says the review sent lesson 16 back for flags asked but never taught and
     for a look a phone could not read. It says what the block now does about each, with the commits. It also says the
     microstates' flags are not taught, and how the look's minute is to be measured.

The record also gained `tried.l16`, which holds the failing stand-in review with its fingerprint and waiver (the fifth
review's note on an empty `tried`). It also gained a statement in the l16 block that the microstates' flags are
neither taught nor asked (the fifth review's note).

## Gate 0. What the owner asked for: passes

Unchanged. The asks are unchanged, each with words, date and where. Every `kept` topic is in a part. Flags of the
microstates: the ask "flags as a third form of each country" keeps its words and its topic. The l16 block now says
outright that the five microstates' flags are left out. This leaves the ask covered by a topic that parts cover, so no
rejection fires. See the notes.

## Gate 1. The kind and the evidence: passes

Unchanged. The principles, their marks and their choices are the same as in the fourth review. Each principle is cited
by a block.

## Gate 2. The end result: passes

Unchanged. The sentence is about doing, and the moment is real. The test reaches every group of topics on new cases.
The approval is current.

## Gate 3. The practice and delivery: passes

`practice`, `feedback` and `readingShare` (0.1) are unchanged. Against "Reject when":
- **The input and action are the real moment's.** The practice is a tap on a blank map, a typed name, and a flag
  tapped to its country.
- **Reading is not most of the time.** V73 holds it on the built pilot.
- **The first item of each kind is shown and worked.** That is D5, kept.
- **The feedback is immediate and is the app's.**
- **Nothing the pilot needs is missing.** Every capability lesson 16's block uses is in a delivery item marked BUILT,
  with the standard's section and the commit:
  - the `place` ask and the place group;
  - the drawn check;
  - the `map` block with `labels`, `lit` and `view`;
  - names in pixels and `lead`;
  - water colors;
  - the `flags` block and `flagLine`.

  Each delivery item now says what sections 3 and 10 say. What is not built is marked NOT BUILT and is held for later
  lessons. The gate 3 fields changed under the existing `approved.goal`, as the record rules allow.

## Gate 4. The form and the parts: passes

Unchanged: 33 parts and 33 blocks. Each check is a smaller gate 2 test in the form's actions, and the parts add up to
the end result.

## Gate 5. Each lesson on paper: passes

The l16 block holds against "Reject when":
- **The main activity is the part's action.** The look and the feedback carry the flags and the readable views.
  Recall is still the place itself: a tap, a typed name, a flag to its country, a neighbor and the water.
- **Most of the time is doing.** About 8 of 12 minutes are recall, 1 minute is the shown items (practice, D5) and 2
  minutes are the check. The look keeps its one minute.
- **The check is its part's, word for word.** It is unchanged.
- **`why` names only gate 1 principles.** The list is unchanged.
- **"Would the learner be closer?" Yes.** Flags are now taught before they are asked, and the look can be read.

`feedback` and `does` now agree. Every other block is unchanged and passes, as in the fourth review. The pilot is
named (l16).

## Fixes needed

None.

## Notes

- **`tried.l16` is stale by design.** Its `fp` is the lesson the stand-in read. Lesson 16 has changed since, so gate 6
  needs a fresh stand-in review of the lesson as it is now. That review should be by a new reviewer, under a waiver
  quoted again with its source. Recording the failing try is right.
- **The look's minute.** The gate 5 prose now commits the second stand-in review to timing the look. If the look runs
  much over a minute, the block cuts the look or `readingShare` is raised as a gate 3 change. That keeps the judgement
  call honest. Hold to it.
- **The microstates' flags.** The record now says plainly that they are left out. Andorra, Monaco, San Marino, Vatican
  City and Liechtenstein are countries, and the ask says "each country". The cut is a design judgement on an owner's
  ask. It is not a dropped ask, because the topic is still covered, but the owner has not seen it on a screen. Whether
  to put it to them (`asked.mjs`, or a line in `out` on the next gate 2 screen) is the designer's call. Saying so is
  better than leaving it implied.
- **The wording of the views.** "the Alps and Italy with the five microstates, the Alps and the seas" names the Alps
  twice. It also does not say which view holds Austria and Switzerland, though they are asked back to back.
- **The flag contrast** (look-alikes asked back to back, with a `flagLine`) is a judgement call. Neither G2 nor G5 is
  about contrasting pictures, and the block does not claim that either is.
- **Microstate taps are cued.** The stand-in found that a microstate tap is a choice among five visible dots. Within
  the record's "named and tapped only", that is a lesson-level matter for the writer, not a design fault.
- **Part 12's check** still asks "1 flag with the country tapped" on Canada's provinces and territories, which have no
  flags in the delivery list. It is carried over from earlier reviews and must be settled before part 12 is built.
- **Carried over from the fourth review, still true:**
  - a place's later-day returns go through one strand per group;
  - "planned before the first lesson" against the rejection clause;
  - the stale gate 0 and gate 2 prose;
  - `approved.goal.where`;
  - the test against the practice;
  - Alaska's Arctic coast for l3.
- **Copying.** No field names, quotes or follows another subject.
