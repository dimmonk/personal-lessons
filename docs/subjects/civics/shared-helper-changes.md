# Civics: changes to shared helpers and tests

## From the builder of lessons 9 to 16 (2026-10-22)

- `public/app/lessons/recall.js` (`recallVariants`): two names of one thing joined by a slash ("(Battle of) Antietam/Sharpsburg", Q93) may be said
  as either name or both; before, only "antietam sharpsburg" together matched. The rule is added to docs/lesson-standard.md 3.7 and tested in
  tests/civics-pure.mjs (q93). No other subject's accepted answers hold a slash.
- `tests/fixtures/uscis-m1778.json`: two lines the PDF prints beside the answers were read into them by the extraction script. Q117's last answer
  is now "Tuscarora" (the pointer to bia.gov kept as `printed`); Q120's answers are "New York (Harbor)" and "Liberty Island", with the bracket's
  places in `alsoAcceptable` (and the bracket kept as `printed`). civics-pure compares an item's accepted answers with answers + alsoAcceptable.
- `tests/civics-pure.mjs`: a "name n" question is checked with n official answers together (it checked two, which fails for Q65, Q81, Q126) and
  one short of n refused; lessons l1 to l16 and `complete: true`; the timeline and past-story topics; checks for lessons 9 to 16; the news-story
  block reads only checks with a fixed list (lesson 16's check is drawn).
- `public/subjects/civics/subject.js`: rev 9 with its history entry, `complete: true`, the slip `out-of-time`, topics `t-votes`, `t-colonies`,
  `t-1800s`, `t-1900s` and `past`. No other line of the record was touched.
- `public/index.html`, `public/sw.js`: the fifteen new files, after l8.lesson.js.
- `docs/research/civics.md`: section F (C23), the dates and causes the history lessons rest on, each quoted from the page read today.
- `public/app.css` (`.block-ref p`): `overflow-wrap: anywhere`, so a looked-up value's source link (a long URL) wraps instead of pushing a 344 px
  screen 129 px sideways (found walking lesson 16 on a Fold's outer screen; every subject's `ref` block benefits).

## From the fixer of lessons 1 to 8 (2026-10-22)

Lessons 9 to 16 use none of these helpers (checked by grep); their output is unchanged.

- `public/subjects/civics/items-shape.js`: the one rule for each news question is written once at the top (and `CIVICS_SOURCE_RULE`, printed by
  lessons 7 and 8); `civicsPress` hands out papers by level in turn; a story's `also` lines (a check not at work) are placed by `civicsPlaced`;
  `vthen`/`sthen`/`cthen` let a story give its own line for a wrong pick; the tap prompt is "Tap the line that decides it", the stop prompt "Which
  check does the story show at work?"; the stop id `federal` is now `higher` (a higher level's law: federal over state and local, state over local).
- `public/subjects/civics/subject.js` lists: `verdict.unsettled`, `stop.higher` (was `federal`), `source.check`, slips `court-default` and `own-word`
  reworded. No other line of the record was touched.
- `public/app/lessons/item-view.js` and `article-view.js`: one helper, `segmentGroups`, groups lines into paragraphs for a prose block and an article
  (the copy in `articleParagraphs` is gone).
- `tests/civics-cues.mjs` (new, in `npm run test:data`): scripts the surface cues and fails when one predicts a news answer above chance.
- `tests/civics-pure.mjs`: the news block's counts (80 stories), the new item ids, and checks that each rule is applied the same everywhere.

## From the fixes after the reviews of lessons 9 to 16 (2026-10-22)

- `public/app/lessons/recall.js`: the slash rule is for words of letters only (`\p{L}+/\p{L}+`).
- `public/app/lessons/player.js`, `view.js`, `registry.js`: under each miss of a drawn check, the lesson whose check holds its topic
  (`homeLessonOf`, `homeLessonHtml`, `SAY.homeLesson`); `FC.ENGINE` 15 to 16. `tests/load-app.mjs` exports `homeLessonOf`.
- `tools/learner-view/render-learner-view.mjs`: a compared facet is printed only when the check's questions carry two or more of its values.
- `tests/civics-cues.mjs`: section 7, lesson 13's stories (tap-line and cause cues).
- `tests/civics-pure.mjs`: recall checks at about 9 in 10 (0.88); l11 16 of 18; l13 five check stories, 4 to pass; l16 has no own step and names
  the lesson for a miss; the slash rule never splits a number.

## From the fixer of lessons 1 to 8, round 2 (2026-10-22)

Lessons 9 to 16 still use none of these; the L9-16 builder's lesson 13 predictors in `tests/civics-cues.mjs` are kept as they are.

- `items-shape.js`: `CIVICS_SOURCE_RULE` is now two sentences (the rule, then what "alarming or sudden" means); lesson 7 spreads it, lesson 8 joins
  it. New spec fields `many` (a plural actor: "are part of"), `vstep` (a worked step that does not repeat the reason), `lnotes` (why a tapped line is
  not the deciding one). The `also` field of round 1 is gone (no story uses it: the lines are written in the stories).
- `subject.js`: slip `own-word` reworded. No other line of the record was touched.
- `tests/civics-cues.mjs`: the round 2 review's predictors (the check not said with "no"/"not", with put-off words, from the first line; "have I
  checked the source?" in any words; a timing word; the course's own papers or the record in the results).
- `tests/civics-pure.mjs`: the source-rule check reads the rule's two sentences; `l5-army` (gone) replaced by `l5-water` in the list-power check.
