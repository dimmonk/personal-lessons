# Civics: fixes after the reviews of lessons 9 to 16 (2026-10-22)

From `review-learner-l9-16.md` and `review-research-l9-16.md`. New sources for the fixes are in `docs/research/civics.md` C24, quoted from the
pages read today.

## Wrong facts
- **Poll taxes (l13):** the Voting Rights Act is no longer said to have ended poll taxes. l13 now teaches: the 24th Amendment ended them in
  federal elections (1964); *Harper v. Virginia State Board of Elections* (1966) ended any fee in state elections; the Voting Rights Act (1965)
  outlawed literacy tests. The stories that rest on these facts follow them (`past-fee`, `past-statefee`, `past-quiz`).
- **Lucy Stone (l13):** the line on women's rights leaders in the 1890s is gone.
- **Iraq (l14):** the 9/11 reason now covers only the war in Afghanistan (October 2001). The war in Iraq has a row with no reason, because the
  list gives none and no source read gives one. Q116's line says the same.
- **Three levels (l9):** the Constitution explains the three branches and the powers of the federal government and the states; a city or
  county gets its powers from its state, as the plan's way of thinking 2 says.

## The way of thinking where it was promised
- **l12, cause by cause:** the table now goes from new land (1803, and 525,000 square miles from Mexico in 1848) to the dispute over slavery in the
  territories, then Lincoln's election in 1860 and the secession of seven slave states, then Fort Sumter (C24). The 15th Amendment row now says "on
  paper".
- **l13, rebuilt:** every story is a decision of today that rests on a law, ruling or event of 1877 to 1900: Wong Kim Ark, the Chinese Exclusion
  Act, *Plessy*, the Statue of Liberty, the war with Spain, poll taxes and literacy tests. Each story has other lines with years and named laws, so
  you cannot tap by year. The cause has two tests, both taught on one screen: a cause comes before, and it is about the same thing. Wrong causes mix
  earlier ones on another subject with later ones on the same subject. No story is answered by dates alone, and no wrong cause appears in more than
  half the stories (the Louisiana Purchase appears once, as a look-alike for the French gift). The check is five new stories, 4 to pass.
  `tests/civics-cues.mjs` now covers lesson 13 too: the tapped line by first, last or only year and by named law; the longest option as the right
  cause; all-later wrong causes; overused wrong causes.

## The learner's stalls
- **l11** now passes at 16 of 18. Many answers are phrases that must be typed as the list words them; the real interview needs 12 of 20.
  civics-pure holds recall checks to about 9 in 10 (at least 0.88).
- **Untaught terms are now taught:**
  - l9: natural rights, limited government, social contract and popular sovereignty.
  - l14: the Allied, Central and Axis Powers, with the members the list gives.
- **Wars are dated:** Vietnam (1964 resolution, 1965 ground combat troops), the Gulf War (August 1990, January 1991), Korea (June 1950).
- **Phrasing to type (l14):** the Great Depression and civil rights rows say "in the list's words" and show those words.
- **Statue of Liberty (l15, Q120):** the line now explains why New Jersey is accepted (the island is near both shores, and the park's address is in
  Jersey City, New Jersey).
- **l10:** the rights table says these are the rights *the list* gives everyone.
- **Result facet:** the learner view prints the "Level of government" comparison only when the check's questions carry two levels.
  `facetSplits` already does this in the app.
- **l16 own-answers gate:** l16 has no answers form now. It points to "Your answers and interview date" on the subject screen. The draw leaves out
  any question about the learner's own answers until it is entered, so nothing blocks the mock.
- **l16 misses:** under each question missed in a drawn check, the app names the lesson whose check holds that question's topic
  (`homeLessonOf`, `SAY.homeLesson`, `FC.ENGINE` 16; lesson standard 4.3; tested in civics-pure).
- **Slash rule:** it applies only to words of letters, so 1/2 or 24/7 is never split (lesson standard 3.7; tested).

## After the final review (review-final.md)
- D1 l5: the check now holds a "not settled" story (`l5-trucks`) and an "in court" story (`l5-recycle`), in place of `l5-cars` and `l5-parks`,
  which join the review. The review also gains a "not settled" story for lesson 5 (`l5-drones`) and one for lesson 8 (`l8-colleges`). Wording
  in two old stories was varied, so a deciding line's words still predict no verdict above chance.
- D2 l7: four results pages have a wrong result that asks or inspects in the source's own voice, or as a paid result. The predictor "the
  result that asks or inspects is right" is in tests/civics-cues.mjs (now 25% against 25%).
- D3 l10: separate rows for Q69 (civic participation) and Q70 (serving the country), each with only its own accepted answers.
- D4 l13: the cause of the Chinese Exclusion Act is now other workers' resentment over jobs plus anti-Chinese pressure from the West (Office of the
  Historian, C24). The law's preamble is shown as the law's own words.
- Polish: l11 quartering, l12 "1860 and 1861", l13 Wong Kim Ark row reworded, the plan's check rows, the stale fixture name in e2e-civics, the
  renderer's step labels. P1, P2 and P9 (l8 feedback, l7 repeated slip line) were left as they were.
- Every Civics lesson is set live. X45 now asserts that the draft line is gone.
