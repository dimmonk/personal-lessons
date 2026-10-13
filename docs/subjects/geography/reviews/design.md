Verdict: fails

# Record review: Geography (gate 5)
Reviewer: an independent record reviewer (Opus 5.5), 2026-10-12; opened: .claude/skills/build-subject/SKILL.md, docs/subjects/geography/design.md, docs/research/knowing-where-places-are.md, docs/research/review-after-lessons.md, docs/research/designing-a-subject.md, docs/lesson-standard.md (sections 3, 4 and 10), tools/design/approve.mjs (run with `--show` only), tools/design/fp.mjs (run), tests/validate-lessons.mjs (run)
Reviewed: sha256:775c71e49f0f226af6bd2c8274bded0a08c62524e57565c505e2ffd48b344602

`node tools/design/fp.mjs geography` printed the fingerprint above. Checked by script: every block's `check` equals its
part's word for word; every `why` id is a principle of the record and every principle is cited by a block; every topic
is in a part and every ask's `kept` topics are on the list and in a part; 33 parts, 33 blocks, one per part; the
practice is 564 characters; the gate 2 screen prints at 3,402 characters. `node tests/validate-lessons.mjs` passes.
Those are shape; what follows is the design.

## Gate 0. What the owner asked for: passes, with one doubt

The skill asks for every request in the owner's words, with a source, each placed or settled by their word. Four asks;
none dropped; each `kept` is on the list and covered by parts. `opened.asks` holds only the worklist and chat.

Doubt, not a rejection (the source is not mine to open): the ask `one-line` reads "one line of what the country is, in
the feedback", while the quote in its `owner` is "one line of what the country is". If the owner never said "in the
feedback", the item was narrowed from a thing taught into a feedback feature, and that narrowing is why nothing tests
it (gate 2 below). The ask `where-places-are` gives its `where` as "(docs/research/knowing-where-places-are.md)", which
the prose calls "the cloud session's plan, not the owner's words". Asks cannot be reworded, and both are covered, so
nothing here holds the content; gate 2 has to answer the first doubt.

## Gate 1. The kind and the evidence: passes

The skill asks for kinds, and principles that each name a finding in a note, are marked no stronger than the note, and
(where they decide) were read in full and name a choice. `"kinds": ["facts", "judging"]` fits the moment (a named place
recalled; an unknown place placed from clues, and a distance). Four decide, all marked full in their notes: G2
(Carpenter & Pashler, `*Read: full: …*`), G5 (Tversky, full), D5 and D6 (full). Their choices are honest and carry the
notes' own limits: G2's "the one-minute length itself, the overt tap and the days-long returns are judgement calls
beyond this study"; G5's "That one fixed north-up frame reduces the errors is the design's bet, not this paper's
result"; D6's "the tap rather than another input is a judgement call". Every other principle claims no more than its
note (R2, R4, R8 and D4 decide in their notes and only support here, which the skill allows; G4 is "abstract" in the
note and "summary" here, which claims less). Not every principle supports. G1's "recognizing … a flag is never the
practice" is overruled openly by gate 0 in the gate 3 prose, which is right.

Missing: no current prose section for gate 1 (see "The prose" below).

## Gate 2. The end result: rejected

The skill asks for a sentence of doing, a real moment, and a test of doing on new cases "that reaches every group of
topics on the list"; "Reject when … the test … leaves a group of the topics untested".

Sound: the sentence is all doing ("put a named place on a map …, say what it borders …, name a place that is lit, tell
a country by its flag, and say roughly how far"); the real moment is a time and place ("A place named in a news story,
in a conversation or in a travel plan, with no map in sight"); the test is done, not said, with stated bars (34 of 40,
8 of 10), two sittings a week apart, and new cases where new cases exist (10 places never practised, 10 pairs). That a
fact test draws its places from the taught lists is forced by a fact subject, and gate 4's prose says so.

Rejected:
1. **The topic "one line of what each country is, in the feedback when you place it" is reached by no part of the
   test.** No section of the test asks for it, and no part's check does: it is shown, never asked. The topic list is
   "everything the subject teaches", so either the test asks it in the moment's form (a news line such as "the Gulf
   state that hosted the World Cup", the country tapped, is exactly a place named in a story), or the owner's word
   says the line is feedback only and not something the subject teaches.
2. **The placing test's lists leave groups of topics out, or are ambiguous about them.** "40 names drawn at random
   from every list of the subject (states and provinces, cities, countries, oceans and seas, rivers, mountain ranges,
   deserts)" names no continents, world regions, US regions or coasts, lakes (the Great Lakes, Lake Victoria), or
   straits and canals (Gibraltar, Hormuz, Suez, Panama), all of which parts 1, 2, 20, 21, 24 and 30 teach. Either the
   parenthesis is only examples (then say "every list", or name them all) or those topics are untested.

Both change the printed screen, so the owner is asked again. Noted, not rejected: the flag clause has no real moment
of its own (nothing in `realMoment` shows a flag); the paragraph's "It starts with the world, then the United States
and Canada, then each region" says how the lessons run, beside (not instead of) what the learner can do; the approval's
words ("I only want to do a single one. Do the geography …") pick the subject rather than say "on track", which is the
owner's to judge, not this review's.

## Gate 3. The practice and delivery: rejected

The skill asks for the real moment's own action, a shown first item of each kind, reading under `readingShare`,
feedback as fast as the moment allows, and "Reject when … a delivery item is missing because the app cannot do it yet".

Sound: the practice is the place itself ("a name shown, you tap the place; a place lit, you type its name"), never
"a choice among names"; each kind opens shown ("Each new kind of question starts with one done for you"); feedback is
at once with the right place lit and the tap marked; `readingShare` 0.1 is honest (one minute's look in a twelve-minute
lesson, about 0.08; the shown items count as practice under D5), and called a judgement call. The delivery list is
candid: the `place` ask, the `map` block, the map data, the place generators and borders-and-water are marked
"NOT BUILT", to be built before the pilot. Nothing was swapped in because it exists: the distance `choose` is a band,
not a name.

Rejected, delivery items missing:
1. **The trap items have no ask.** G5 decides that the subject has "contrast items for the known traps … with the true
   map shown after the answer", and l32 spends three minutes on "Reno against San Diego, Rome against New York, Europe
   against the United States, South America against North America, the size of Africa", but neither the practice, the
   form, the block nor `delivery` says what the learner answers (a tap of one place on a blank map of the other? a
   direction? a size?). Whatever it is, it goes on `delivery` if the app cannot take it.
2. **Naming a lit place is not quite built.** `delivery` says "BUILT except the map", but `docs/lesson-standard.md`
   3.7 builds an answer from memory "under a `spoken` block that holds the question"; a `text` ask whose question is a
   lit shape on a `map` block is a new item shape, and belongs on the list as such.

## Gate 4. The form and the parts: passes, with corrections

The skill asks for the form first, parts that build on each other, each with a smaller gate 2 test in that form, all
topics and asks in parts, one lesson per part, and parts that add up.

Sound: `form` is this moment's ("A tap on a blank, north-up map with no names … never a choice among names") and owes
nothing to another subject's checks. Units come before the places in them, "the world first" is part 1, and the order
argument cites G4. Every check is a smaller gate 2 test in the same actions with a pass bar (10 of 12; 8 of 10 new
pairs or places; 25 of 30). Every topic and every kept ask is in a part; 33 parts, 33 blocks. Adds up: parts 1 to 30
reach every list in the four fact forms, 31 and 32 are the two judging sections, 33 is the whole. The exception, the
one line per country, is gate 2's finding and is cured there. The checks' 10 of 12 (83%) sits just under the test's
34 of 40 (85%); thresholds are a convention (D15), so it is noted only.

Corrections (not rejections):
- Every fact check says both "each in the form its last set did not use" and a fixed split ("8 named and tapped, 4 lit
  and named"). These can disagree: when the last set asked a place by tap, the place must be named, whatever the
  split says. The writer needs one rule: the split, with the form of each place chosen inside it.
- The gate 4 prose says "the new cases are the other form and the draw", but every lesson asks each place both ways
  in its sets ("named and tapped, then lit and named"), so no form is new to the check. Say what is true: a fact check
  is a recall of the part's places, drawn fresh; the new cases are part 32's, part 31's and the test's week-later
  sitting (D1).

## Gate 5. Each lesson on paper: rejected

The skill asks, per block, that the main activity is the part's real action, most of the time is doing, the check is
the part's word for word, `why` cites real principles, and the answer to "If the learner did only this, would they be
closer to the end result?" is a clear yes; then a pilot whose failure teaches most.

Sound: 31 of 33 blocks pass every test. Each fact block is "Shown first, half a minute … One look … about a minute …
Recall only, about 8 minutes … The check, about 2 minutes": the doing is the bulk and is the part's action. The loads
are plausible (l16: 15 places asked about 40 times in 8 minutes). The checks match word for word. The `why` lists are
honest: R9 appears only where a block mixes in due places ("a fifth of each set is due places of earlier lessons"),
G5 only on l32, G7 only on l31, R8 on the unseen-place blocks. The pilot is well chosen: "Lesson 16 carries every one of
these": small shapes, zoom, microstates, the flag, Landlocked (Switzerland, Austria), the one line, and the load of
four forms in twelve minutes. Its failure sends back the part size or a delivery item before 32 lessons depend on it.
That is the lesson whose failure teaches the most, and it is a clear yes.

Rejected:
1. **l32: the trap items.** "(3) The traps as contrast items, about 3 minutes" does not say what the learner does, and
   no worked trap is shown first (gate 3's "the first item of a kind is not shown and worked before the learner tries
   one"). They are also not part 32's action (placing a place never heard of) and not in its check. "The size of
   Africa" has no action and no cited principle (G4 and G5 are about direction and alignment, not size). Say the ask,
   show one first, and say why the traps sit in this part, or give them a part and a check of their own.
2. **l16, the pilot, does not show the typed name.** The record says "It needs no earlier lesson", and the pilot will
   be tried cold, yet its shown step ("Belgium named and tapped, its flag shown …, then a neighbor and its water tapped;
   then Switzerland's Landlocked shown") has no lit place named by typing. The learner's first typed name is then
   tried unshown, against D5's own choice (the kinds listed include "a name typed"). Add one lit country named for the
   learner to l16's shown step.

## The prose, and copying

The skill wants "one `##` section per gate in prose: what was decided and why, with sources; the prose of an earlier
design stays below under History". The record has current prose for gates 3, 4 and 5 only. Gates 0, 1 and 2 are
explained only by the first plan's text, which is not under a History heading and contradicts the record: it says
"V69 refuses this record until the design pass replaces it", "Gates 2 and 3 are drafts", "The pilot, lesson 1", puts
"flags" under Out, and numbers its principles 1 to 9 with `learning-science.md` P-ids that no block cites. The line
"The record stops at gate 2" is also stale. `out` refers to "Canada's provinces are in (part 9)", which is now part 12
(`out` is not on the printed screen, so that fix needs no new approval).

Copying: no field names, quotes or follows another subject. The one inherited channel is stated openly: "The region
lists below are facts reused from the first plan under History", a plan written with the Civics record open. Region
lists are facts of geography, and the accepted-spellings rule in `delivery` is the app's own (`lesson-standard.md`
3.7), not Civics'. Whether more came through that plan cannot be checked without opening Civics, which this review may
not do.

## Fixes needed

1. Gate 2: make the test reach "one line of what each country is" (for example, a story's description of a country,
   the country tapped), or record the owner's word that the line is feedback only. Make the placing section name every
   list it draws from (continents, world and US regions, coasts, lakes, straits and canals), or say they are drawn too.
   Then print the screen and ask the owner again.
2. Gate 3 `delivery`: add the trap item's ask, and the `text` ask answered under a `map` block instead of a `spoken`
   one.
3. Gate 5 l32: say what a trap item asks, show one done first, cite a principle for "the size of Africa" or cut it,
   and either tie the traps to part 32's check or give them a part.
4. Gate 5 l16: add a lit place named for the learner to the shown step.
5. Gate 4: give the fact checks one rule for form and split, word for word in parts and blocks; correct the "new
   cases" sentence of the gate 4 prose.
6. The prose: write current sections for gates 0, 1 and 2; put the first plan under a `## History` heading with its
   stale status lines marked as past; drop "The record stops at gate 2"; change "(part 9)" in `out` to part 12.

Then the record gets a fresh review for its new fingerprint.
