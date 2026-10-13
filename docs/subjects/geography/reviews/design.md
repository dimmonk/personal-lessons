Verdict: fails

# Record review: Geography (gate 5), second review
Reviewer: an independent record reviewer (Opus 5.5), 2026-10-13; opened: .claude/skills/build-subject/SKILL.md, docs/subjects/geography/design.md, docs/subjects/geography/reviews/design.md (the first review), docs/research/knowing-where-places-are.md, docs/research/review-after-lessons.md (finding headings, marks and Read lines), docs/research/designing-a-subject.md (finding headings, marks and Read lines), docs/lesson-standard.md (sections 3, 4 and 10), docs/lesson-rebuild-todo.md (a search for the three changes only), tools/design/fp.mjs (run), tools/design/approve.mjs (run with `--show` only), tests/validate-lessons.mjs (run), git log and diff of the record between 4d4175b and bcd87e8
Reviewed: sha256:b47f5cdb5127ca8590973a3cd830eb6b96b9371951817b0e90bc526aac5bc4e1

`node tools/design/fp.mjs geography` printed the fingerprint above. `node tests/validate-lessons.mjs` passes (48,527
checks). The diff of the record since the first review shows that, of the gate 2 screen, only `test` changed, so the
owner's "Approve the test line, build the pilot" (2026-10-13) is on the exact change it names. What follows is the
design.

## The first review's fixes

1. Gate 2, the placing lists: **done.** The test now names every list (continents and big regions of the world and of
   the United States, oceans and seas, coasts, lakes, rivers, straits and canals, ranges, deserts, states and provinces,
   cities and state capitals, countries), and the changed screen was approved in the owner's words.
   Gate 2, the one line per country: **not done as asked.** Neither exit was taken: the test does not reach it, and no
   word of the owner's says the line is feedback only. The record argues instead (gate 0 prose) that "The ask puts the
   line in the feedback ... That is the ask's own scope, not a narrowing". See gate 2 below.
2. Gate 3 `delivery`: **done.** The trap item's ask is stated (two `choose` asks from a `direction` list, no map) and
   naming a lit place is listed as a new item shape (now built, 3.7: "a `text` ask with `accept` under a `map` block
   with `lit`").
3. Gate 5 l32: **done.** It says what a trap asks, shows one first (San Diego and Reno, correct: Reno is north and
   west), cuts "the size of Africa", and puts four trap pairs in part 32's check. That last choice opens a new gap at
   gate 4 (below).
4. Gate 5 l16: **done.** "then France lit and its name typed, shown done with its line."
5. Gate 4: **done.** Every fact check carries one rule, word for word in part and block: "the split is fixed, and within
   each form the places are drawn at random, preferring ones last asked in another form"; the gate 4 prose's "new cases"
   sentence is corrected.
6. The prose: **done.** Current sections for gates 0, 1 and 2; the first plan under `## History` with its status lines
   marked "Past"; "The record stops at gate 2" is gone; `out` says part 12.

## Gate 0. What the owner asked for: passes

Four asks, none dropped, each with `words`, `when`, `where` and an `owner` entry with its source; every `kept` topic is
on the list and in a part. `opened.asks` holds the worklist and chat, both allowed. No ask is gone or reworded since the
last commit (the validator compares).

The first review's doubt stands and cannot be settled from the record: the ask `one-line` reads "one line of what the
country is, in the feedback", while its owner quote is "one line of what the country is". The worklist (the session's
own words) says "one line of what the country is in the feedback". If "in the feedback" is the owner's, the ask is as
asked; if it is the session's, the ask was narrowed from a thing taught to a feedback feature. This review does not
reject on it, because gate 2 holds the same point on firmer ground.

## Gate 1. The kind and the evidence: passes

`"kinds": ["facts", "judging"]` fits the moment. Four principles decide, each read in full in its note and naming its
choice: G2 (note: `*Read: full: ...*`, **Decides**), G5 (full, **Decides**), D5 and D6 (full, **Decides**). Their choices
carry the notes' limits ("the one-minute length itself, the overt tap and the days-long returns are judgement calls";
"That one fixed north-up frame reduces the errors is the design's bet, not this paper's result"). Every other principle
claims no more than its note: R2 and R8 are full and decide in their note, abstract and summary and supports here; R4
and D4 full, supports; G4 abstract in the note, summary here; G1, G7, R1, R7, R9 summary; G3 abstract. Not every
principle supports. G1's "recognizing ... a flag is never the practice" is overruled openly by gate 0's flags ask
(gate 1 and gate 3 prose), which is right. Every principle is cited by a block.

## Gate 2. The end result: rejected

The skill: the test "reaches every group of topics on the list"; "Reject when ... the test ... leaves a group of the
topics untested (... the record's review checks it)".

Sound: the sentence is all doing; the real moment is a time and place; the test is done, not said, with bars stated as
conventions (D15) and two sittings a week apart; the placing section now reaches every list. Approval is on the
current screen (`approved.goal`, fingerprint matches; the validator passes).

Rejected: **the topic "one line of what each country is, in the feedback when you place it" is reached by no section of
the test, by no part's check and by no practice item.** The gate 2 prose says so outright: "The one line per country is
feedback by the owner's ask (gate 0) and is not tested." The skill gives no exemption for a listed topic left untested,
and the first review's second exit (the owner's word that the line is feedback only) was not taken: the owner's words on
the screen are "Approve the test line, build the pilot", about the placing list. The point is not only literal: a line
shown after each answer and never recalled is a well-written card, which the skill's goal says does not count (R1 in
this record's own evidence: recall, not rereading). The moment the ask serves is real: a country named in a story by
what it is ("the Gulf state that hosted the World Cup") is exactly a place named in the news.

Noted, not rejected: the distance section says "10 pairs of places" without "never asked as a pair", while part 31's
check and the gate 2 prose ("the pairs never asked") say new pairs; the field the owner approved is the weaker one. The
flag clause still has no real moment of its own (the owner's ask; their call). The paragraph's "It starts with the
world, then the United States and Canada, then each region" says how the lessons run, beside what the learner can do.

## Gate 3. The practice and delivery: rejected (one delivery item)

Sound: the practice is the place itself, never a choice among names; each new kind opens shown; one look, then recall
only; feedback at once with the place lit and the tap marked; `readingShare` 0.1 is honest (one minute of twelve) and
called a judgement call (D4); the practice approval is on the current screen. Nothing was swapped in because it exists.

Rejected: **the trap item is marked "BUILT except the map", and the map is now built, yet its feedback is not.** The
item's feedback is "the true map with both places lit and the line of latitude or longitude through the first". Section
3.9's `map` block has `region`, `labels` and `lit` and draws no line; section 3.10 and 10.3 list "cities and capitals as
places" as not built, and every trap pair is two cities (Reno, San Diego, Rome, Philadelphia). Read now, the delivery
list says the trap item is ready; it is not, and the line through the first place is on no list to be built.

Noted, not rejected: the rest of `delivery` predates the build of 2026-10-12 and now misstates it. Built since (3.7, 3.9,
3.11, 10.3): the `place` ask, the `map` block, the map data for `world`, `us` and `europe-west`, the neighbor-and-water
form, and the typed name under a lit map; still not built: the other regions (Canada's provinces among them: `us` holds
Canada and Mexico whole), place generators, cities, capitals and parts of a state as places. The statuses should say so,
since the record is the single source the pilot's writer reads.

## Gate 4. The form and the parts: rejected (part 32)

The skill: "A check for each part: a small version of gate 2's test, in the form of step 1"; "Pass when: the form is
written, every part has a check in that form".

Sound: `form` is this moment's; the order (units first, G4; the owner's "the world first") builds; every fact check is a
smaller gate 2 test in its actions under one rule now; every topic and every kept ask is in a part; 33 parts, 33 blocks;
the parts add up, except as gate 2 says for the one line. The "new cases" prose is now true.

Rejected: **part 32's check holds "4 trap pairs never asked as a pair, north or south and east or west chosen with no
map", an action that is in neither `form` nor the gate 2 test.** `form` lists taps, a typed name and the two bands, and
says "Every check is these same actions"; the test has no trap section. So part 32's check is not a smaller gate 2
test in the form, and the pass bar "3 of the 4 pairs" measures something the end result is never tested on. The first
review's fix 3 offered this route without seeing that it needed the test and the form to follow.

## Gate 5. Each lesson on paper: passes, apart from what gate 4 sends back

Every block's main activity is its part's action and most of its time is doing (fact lessons: about a minute shown, a
minute's look, about 8 minutes of recall, the check); every `check` is its part's word for word; every `why` names a
principle of the record. l16 now shows one of each kind it asks, the typed name included, so a cold try meets nothing
unshown; l32 says what a trap asks, shows one done, and gives each step a time (1 + 4 + 3 + 4 minutes). "If the learner
did only this, would they be closer to the end result?" Yes for every block. The pilot, l16, is still the lesson whose
failure teaches most (small shapes, zoom, five microstates, flags, Landlocked, four forms in twelve minutes), and it now
runs on map data that exists (`europe-west`: 34 countries, 5 dots, the Alps). l32's check changes with gate 4's fix.

## Fixes needed

1. Gate 2: make the one line per country something the subject asks, or settle that it is not taught. Either (a) the
   test reaches it in the moment's form (for example, some placing or judging items give a country by its one line, as
   a story does, and the country is tapped), with the country parts' practice and checks asking it too; or (b) the
   owner's recorded word on the `one-line` ask (`tools/design/asked.mjs`) that the line is shown and never asked, and
   the topic line reworded so the list no longer says the subject teaches it. Either changes the gate 2 screen: print
   it and ask the owner again (one ask, together with fix 2 if it touches the test).
2. Gate 4: part 32's trap pairs. Either (a) add the trap action to `form` and a trap section to the gate 2 test (a
   screen change, asked with fix 1), or (b) take the four pairs out of part 32's check and l32's, keep the traps as
   practice items for G5, and say in the gate 5 prose that they are measured by nothing.
3. Gate 3 `delivery`: mark the trap item's map line (latitude or longitude through the first place) and cities as
   places as not built, and bring the other statuses up to date with `docs/lesson-standard.md` 3.10, 3.11 and 10.3.

Then the record gets a fresh review for its new fingerprint.

## Notes

- D6's choice says "every practice item is answered with the place itself (a tap on it, or its name typed)", but the
  distance item (two bands) and the trap item (two directions) are not. The prose says why ("a direction, never a name,
  as the distance item is a band"); the choice's wording should match it.
- l32's trap list includes "Madrid and New York". Madrid (about 40.4 N) is just south of New York (40.7 N), as an
  aligned map would also say, and the gap is a third of a degree: it is a coin toss, not a trap. The others (Rome and
  Philadelphia, Santiago and New York, Lima and Miami, Paris and Seattle) are real.
- l16 asks the microstates "named and tapped only" (no name typed, no flag, no neighbor), but its check draws "western
  Europe's countries" in four forms at random. The writer should keep the microstates out of the forms the lesson did
  not ask them in, or the check asks what was not practised.
- The gate 2 prose ends "the printed screen is asked again"; it has been answered (`approved.goal`, 2026-10-13).
- `designReview` is not yet in the record; it goes in when a review passes.
- The map budget ("about 600 KB in all") was measured at 228 KB for three regions (61.7 to 85.4 KB each); some fifteen
  more regions at that rate pass it. It is a design number to be measured when built, so only noted.
- The engine (the `place` ask and the `map` block) was built between the first review and this record's fix, and
  `opened.design` lists no engine file, which is consistent with the stale delivery statuses; whether the record's
  editor opened engine code cannot be checked from here.
- Copying: no field names, quotes or follows another subject. The History plan was written with the Civics record open
  and says so; nothing of it is in the record's fields beyond region lists, which are facts.
