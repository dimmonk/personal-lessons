Verdict: fails

# Record review: Geography (gate 5), third review
Reviewer: an independent record reviewer (Opus 5.5), 2026-10-13; opened: .claude/skills/build-subject/SKILL.md, docs/subjects/geography/design.md, docs/subjects/geography/reviews/design.md (the second review), docs/research/knowing-where-places-are.md, docs/research/review-after-lessons.md and docs/research/designing-a-subject.md (finding headings, marks and Read lines), docs/lesson-standard.md (sections 3 with 3.11, 4 and 10, and its heading list), tools/design/fp.mjs (run), tools/design/approve.mjs (run with `goal --show` only), tests/validate-lessons.mjs (run), git diff of the record and the research notes between bcd87e8 and HEAD
Reviewed: sha256:35d388d3845f66059d6b2871d8ab864ef9526fb1017b0d17e659a34b9562cf30

`node tools/design/fp.mjs geography` prints the fingerprint above. `node tests/validate-lessons.mjs` passes (48,527
checks). The research notes are unchanged since the second review. The gate 2 screen (`approve.mjs geography goal
--show`) is 3,541 characters and prints the reworded topic with "(not tested)".

## The second review's fixes

1. Gate 2, the one line per country: **done**, by the second exit. The owner's word "shown only, build the pilot"
   (chat, 2026-10-13) is on the `one-line` ask (and on `where-places-are`, whose kept topic was reworded), the earlier
   words kept in `previous`; the topic now reads "one line of what each country is, shown after each answer (not
   tested)" on every list and part; the changed screen carries the same words in `approved.goal`, the earlier approval
   in `approved.history`.
2. Gate 4, part 32's trap pairs: **done**, by the second exit. Part 32's check and l32's are word for word "10 places
   never practised ... at least 8 of the 10"; l32's `does` and the gate 5 prose say the traps are practice only and
   "measured by nothing". "Madrid and New York" was replaced by "Reno and Los Angeles".
3. Gate 3 `delivery`: **done** for what it asked. The trap item is "BUILT except its feedback's line and its cities",
   the map block's line of latitude or longitude and cities as places are marked NOT BUILT, and the statuses match
   3.7, 3.9, 3.10, 3.11 and 10.3 (map data for `world`, `us`, `europe-west`; the `place` ask and neighbor-and-water;
   the lit-map `text` ask; generators, cities, capitals and parts of a state not built). Read afresh, the list now
   says something the standard does not support (gate 3 below).

The l16 note of the second review is taken: part 16's check and l16's draw the microstates only among the five named
and tapped.

## Gate 0. What the owner asked for: passes

Four asks, none dropped; each item's `words`, `when` and `where` are unchanged since the last commit; each owner
entry carries words, date and where, and the replaced ones are kept in `previous`. Every `kept` topic is on the list
and in a part. `opened.asks` holds the worklist and chat. The first two reviews' doubt (whether "in the feedback" in
the `one-line` ask is the owner's) is now moot: the owner's own word on that ask is "shown only".

## Gate 1. The kind and the evidence: passes

Unchanged since the second review, and the notes unchanged. `facts` and `judging` fit the moment. G2, G5, D5 and D6
decide, each `*Read: full: ...*` and **Decides** in its note, each naming its choice with the note's limits; every
other principle claims no more than its note (R2 and R8 say less than their notes, which is allowed). Not every
principle supports; every principle is cited by a block. G1's flag point is overruled openly by the owner's ask.

## Gate 2. The end result: passes

The sentence is all doing; the real moment is a time and place; the test is done, not said, on places never
practised and pairs, with conventional bars (D15) and two sittings a week apart; its placing section names every list.
The one topic the test does not reach is the one line per country, and the topic itself now says "(not tested)" on the
screen the owner approved, with their word on the ask that it is shown only. The skill gives no written exemption for
an untested topic, but only the owner's word settles an ask, and the ask cannot leave the list without a drop the owner
did not give; their recorded word on the exact screen is the settlement the skill allows. Screen under 5,000
characters; approval fingerprint current (validator).

## Gate 3. The practice and delivery: rejected

Sound: the practice is the place itself; each kind opens shown; one look, then recall; feedback at once, the place
lit and the tap marked; `readingShare` 0.1 as a judgement call (D4); the practice approval is current. Nothing is
swapped in because it exists.

Rejected: **the pilot needs what the delivery list marks not built, while the list and the gate 3 prose say "The pilot
(l16) needs only what is built".** The skill: "Anything it cannot do yet is built before any lesson, or the subject
waits"; "Pass when ... every `delivery` item exists in the app or is planned before the first lesson."
- l16's check (as every fact check) reads "the split is fixed, and within each form the places are drawn at random,
  preferring ones last asked in another form; the five microstates are drawn only among the 5 named and tapped". What
  the standard builds (3.4) is a check of fixed items (not drawn), or one `draw: { strands, n }` that "picks n items of
  the named strands at random", preferring items "no earlier check or retest of the lesson asked". Neither fixes a
  split by form, and neither prefers a place last asked in another form; V76 does not read a drawn check (4.5), so not
  even the mix is held. The record's own generator line names this as not built: "one that makes a `place` or naming
  item from the map data (a place of the group, the form it was not last asked) is not (3.10)".
- The same line says "the review asks a strand on a generator, so each group of places is a strand with its
  generator": l16's places come back "on later days until right three times" (the approved practice) only through a
  generator that is not built.
So the pilot cannot be written to its block with what is built, and the delivery list does not plan that build before
it.

Also missing from `delivery`: **what "right" is for a coast, a strait and a canal.** The test places "coasts" and
"straits and canals", part 2's check names the coasts, parts 21 and 30 hold straits and canals; "What right is"
covers a state, country, sea, ocean, lake, range, region, river and microstate, and the map-data line lists straits
and canals only as places no region holds yet. Whether a coast is a shape, a band or its ocean, and whether a strait is
a shape or a dot, is neither said nor marked built or not built. (Deserts have a rule in 3.7 and are listed as data
not built, so they are covered.)

## Gate 4. The form and the parts: passes

`form` is this moment's. Every check is a smaller gate 2 test in the form's actions: part 32's check is now placing
only, the action the test's judging section asks; the traps are out of every check. Every topic and every kept ask is
in a part (the one-line topic on every country part, shown not tested); 33 parts, 33 blocks; the parts add up to the
test (placing, flags, naming, borders and water in parts 1 to 30 and 33; judging in 32; distance in 31). The order
builds from units (G4) and the owner's "the world first".

## Gate 5. Each lesson on paper: passes, apart from what gate 3 sends back

Every block's main activity is its part's action; most of each lesson is recall; every `check` is its part's word for
word; every `why` names a principle of the record. l32's traps are about 3 of 12 minutes, a different action from the
part's, labelled practice only and measured by nothing: they are not its main activity, so not a rejection. l16
shows one of each kind first, the typed name included; its microstates are asked and checked in one form only; its due
mix is said to start once an earlier lesson exists. "If the learner did only this, would they be closer to the end
result?" Yes for every block. The pilot, l16, is still the one whose failure teaches most. Its check, as written, waits
on gate 3's fix.

## Fixes needed

1. Gate 3, the pilot's needs. Either (a) add a delivery item for the draw the fact checks name (a fixed split by form,
   places drawn at random within each form, preferring those last asked in another form, a place restricted to the
   forms its lesson asked) and the place generator for the review strand, marked NOT BUILT and built before the pilot;
   or (b) reword the fact checks (every part 1 to 30 and its block, word for word) to what 3.4 builds, and say how
   l16's strand returns without a generator. Either way, correct "The pilot (l16) needs only what is built" in the
   delivery list and the gate 3 prose so it is true.
2. Gate 3, coasts, straits and canals: say in "What right is" how each is tapped and scored, and mark each built or not
   built (with where in the standard).

Then the record gets a fresh review for its new fingerprint.

## Notes

- Step 5 of gate 3 reads "Anything it cannot do yet is built before any lesson, or the subject waits." The record plans
  the other regions, cities, capitals, parts of a state and the trap line after the pilot ("every later lesson waits
  for what it names"). The second review read "planned before the first lesson" as satisfied by that plan, and the
  pilot exists to cap a wrong design at one lesson, so this review does not reject on it; the strict reading would.
  The owner or the skill should settle which reading holds.
- The prose is stale in three places: the gate 0 paragraph on `one-line` still argues "That is the ask's own scope, not
  a narrowing" and quotes the old owner word for `where-places-are`, where the record now rests on the owner's "shown
  only"; the gate 2 prose ends "the printed screen is asked again" and does not mention either 2026-10-13 approval.
- `approved.goal.where` says "on the one line per country, the last change to the gate 2 screen", and the asks' where
  says "asked whether the one line per country is shown only or tested". Neither says the printed screen was pasted, as
  the 2026-10-12 entry did ("on the printed gate 2 screen"). The skill binds the approval to the screen as printed; if
  it was the question alone, the screen should be pasted and their words asked on it.
- The same words, "shown only, build the pilot", are recorded on two asks and the approval. The validator allows it;
  it is one answer to one question, which reasonably covers the reworded topic under both asks and the screen.
- Carried over, not fixed: D6's choice says every practice item is answered with the place itself, but distance (two
  bands) and the traps (two directions) are not; the test's distance section says "10 pairs of places" without "never
  asked as a pair" while part 31 says so; the paragraph's "It starts with the world, then the United States and
  Canada, then each region" says how the lessons run.
- 3.10 lists "Alaska's Arctic coast as water" as not built; l3 asks Alaska's water. A tap on the Pacific is still
  right, but the feedback lights only part of Alaska's water. Worth a line in `delivery`.
- Part 12's "1 flag with the country tapped" can draw only from Canada, the United States and Mexico, the three flags
  l12 asks; fine, but the check is near-fixed.
- `designReview` is not in the record yet; it goes in when a review passes.
- Copying: no field names, quotes or follows another subject.
