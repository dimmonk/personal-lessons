Verdict: passes

# Record review: Geography (gate 5), fourth review
Reviewer: an independent record reviewer (Opus 5.5), 2026-10-13; opened: .claude/skills/build-subject/SKILL.md, docs/subjects/geography/design.md, docs/subjects/geography/reviews/design.md (the third review), docs/research/knowing-where-places-are.md, docs/research/review-after-lessons.md and docs/research/designing-a-subject.md (their Read lines and marks, by search), docs/lesson-standard.md (sections 3 with 3.4, 3.5, 3.7, 3.10, 3.11; 4; 6; 10; the revision log of 11), public/app/lessons/place-gen.js, place-draw.js and gen.js (by search, only to confirm what the delivery claims, as briefed), public/maps/europe-west.js and us.js (by search, for the strait, the coasts and the microstates), tools/design/fp.mjs and tools/design/approve.mjs (run, `goal --show` only), tests/validate-lessons.mjs (run), git log -14 and the diff of ec7b6fe
Reviewed: sha256:bb57a5cedc804e04fdb4b1748c77fd37eb00fab7452009ed549181a519d3814d

`node tools/design/fp.mjs geography` prints the fingerprint above. `node tests/validate-lessons.mjs` passes (48,529
checks). The research notes and the skill are unchanged since 08ee6a6, before the third review. The gate 2 screen is
3,541 characters. The record's only change since the third review (ec7b6fe) is `delivery` and the gate 3 prose.

## The third review's fixes

1. Gate 3, the pilot's needs: **done**, by way (a). What the fact checks name is now built and in the standard:
   - the place group, a `FC.gen` with `places` in four forms (`tap`, `name`, `flag`, `border`), the seed naming a
     (place, form) pair (3.5; a58aead, with the validator and tests in ca9bef4 and b9fa794);
   - the check drawn from it, `draw: { gen, split, only? }`, holding the split exactly, drawing at random within a form,
     preferring a place not yet used and one last met in another form, with `only` keeping a place to one form (3.4;
     `placeDraw` in place-gen.js, called through schedule.js);
   - V76 reading a drawn check's mix from its split (4.5; 935860d);
   - the review asking a place group on the place missed last time, else the one met longest ago, in another form, and
     honouring `only` (6.3; `placeReviewPick`, called through schedule.js);
   - each place filed as its own item, `<generator>|<place>` (5.1).

   The delivery list names each one with its commit and section. "The pilot (l16) needs only what is built" is now true
   (gate 3 below).
2. Gate 3, coasts, straits and canals: **done**. "What right is" now covers a coast (a band of 4% around its shore line)
   and a strait (water, with a dot at its middle). A separate item covers the canal (a line held within 2%). Each is
   marked BUILT with its commit (b62995b) and sections 3.7 and 3.11. What is not built is marked NOT BUILT: the Suez and
   Panama canals (no data until their regions are built); Bering, Hormuz, the Bosphorus and the Dardanelles (no outline
   in the data); other regions' coasts. All of this matches 3.7, 3.10 and 3.11. `us.js` holds the three coasts and
   `europe-west.js` holds the Strait of Gibraltar with its dot.

## Gate 0. What the owner asked for: passes

Four asks, none dropped and none reworded since the last commit. Every owner entry carries words, a date and where;
replaced words are kept in `previous`. Every `kept` topic is on the list and in a part. `opened.asks` holds the
worklist and chat, and nothing gate 0 may not open. The one-line ask is covered by its topic, which now reads
"(not tested)" on the owner's word "shown only".

## Gate 1. The kind and the evidence: passes

Nothing has changed since the third review: neither the record's principles nor the notes. `facts` and `judging` fit
the moment. G2, G5, D5 and D6 decide; each is read in full in its note and names its choice, with the note's limits
stated. The other principles claim no more than their notes. Not every principle only supports. Each principle is
cited by a block.

## Gate 2. The end result: passes

The sentence is all doing. The real moment is a time and place. The test is done, not said, on:
- places never practised;
- pairs;
- a second sitting a week later.

Its bars are conventions (D15). Its placing section names every list. The one topic the test does not reach is the one
line per country. That topic says "(not tested)" on the approved screen, and the owner's word on the ask is "shown
only". The screen is under 5,000 characters, and the approval fingerprint is current (the validator passes).

## Gate 3. The practice and delivery: passes

What the practice gets right:
- the answer is the place itself: a tap, a typed name, a flag to its country, a neighbor and the water;
- each kind opens shown;
- one look, then recall;
- feedback comes at once: the place lit, the tap marked, one line;
- `readingShare` is 0.1, as a judgement call (D4);
- the practice approval is current;
- nothing is swapped in because it exists.

Every item of `delivery` is marked BUILT, with its commit and its section of the standard, or NOT BUILT. I checked the
built ones against 3.4, 3.5, 3.7, 3.9, 3.11, 6.3 and 10.3, and against the code named above. Each says what the
standard says. I found no delivery item the record needs that is missing from the list.

The pilot, l16, reads as written against what is built:
- **Shown step:** fixed worked items on `europe-west` (a `place` ask, the neighbor-and-water mode with Landlocked, a
  `text` ask under a lit map).
- **The look:** a `map` block with `labels`.
- **Sets:** made from the group in each form. The microstates are kept to `tap` by `only`, which 3.4 applies to the
  group's returns in a lesson and in the review. "Austria and Switzerland back to back" is an inner pair of
  `{ gen, n: 1, with: { place } }` references (3.3, 3.5). A missed place comes back as itself three questions on (3.5).
- **Check:** `draw: { gen, split: { tap: 5, name: 3, flag: 2, border: 2 }, only: { tap: [the five microstates] } }`.
- **Data:** `europe-west` has the countries, the five microstates as dots, the seas and the Alps.
- **Flags:** emoji text.
- **The one line:** each place's `reason`.

The not-built items (other regions, cities, capitals, parts of a state, the line of latitude or longitude, straits with
no outline) are named, and the record says each later lesson waits for what it names. The rejection is "a delivery
item is missing because the app cannot do it yet", and none is missing. How to read "planned before the first lesson"
is a note, as in the two reviews before this one.

## Gate 4. The form and the parts: passes

`form` is this moment's. Every check is a smaller gate 2 test, in the form's actions, on a draw. Part 32's check asks
only what the test's judging section asks. Every topic and every kept ask is in a part. There are 33 parts and 33
blocks. The parts add up to the test:
- placing, flags, naming, and borders and water: parts 1 to 30 and 33;
- judging: part 32;
- distance: part 31.

The order builds from units (G4) and from the owner's "the world first".

## Gate 5. Each lesson on paper: passes

In every block:
- the main activity is the part's action;
- most of the time is recall;
- the `check` is its part's, word for word;
- every `why` names a principle of the record.

l32's traps take about 3 of 12 minutes. They are labelled practice only, so they are not its main activity. l16 shows
one of each kind first, the typed name included. Its microstates are asked and checked in one form only. Its due mix
starts once an earlier lesson exists.

"If the learner did only this, would they be closer to the end result?" Yes, for every block. The pilot, l16, is still
the lesson whose failure teaches most, and everything it names is now built. `designReview` goes into the record now
that a review passes.

## Fixes needed

None.

## Notes

- **How often a place comes back on later days.** The approved practice says "Places come back both ways, then on later
  days until right three times". The gate 3 prose reads this as the group returning (2, 7 and 24 days), and that is
  what is built. The review asks a place group strand on one place per due day (3.5, 6.3), and the strand leaves after
  three good days. So in a group the size of l16's (about 15 places), most places do not come back on later days
  through the review. They come back only through later lessons' due fifth and through l33. This fits the record's own
  reading and is the designer's call (smaller groups, or one strand per few places, would return each place more
  often). The pilot's try should show whether it holds.
- **Planned before the first lesson.** Gate 3 step 5 reads "Anything it cannot do yet is built before any lesson, or the
  subject waits", and its Pass line reads "planned before the first lesson". The record instead plans the other
  regions, cities, capitals, parts of a state and the trap line after the pilot. The strict reading of the Pass line
  would reject that. The rejection clause does not, and the pilot exists to cap a wrong design at one lesson. The owner
  or the skill should settle which reading holds. (Carried over.)
- **Labels in the delivery list.**
  - The item headed "The review asking place groups" describes a lesson's `{ gen, n, with }` reference. The review's
    pick is in the place-generator item.
  - The place-generator item cites 3.10 ("Not built") among its sections.

  Neither is wrong about what is built.
- **Stale prose.** The gate 0 paragraph on `one-line` still argues "That is the ask's own scope, not a narrowing", and
  quotes the owner's 2026-10-12 word for `where-places-are`. The record now rests on their "shown only" of 2026-10-13.
  The gate 2 prose ends "the printed screen is asked again" and mentions neither 2026-10-13 approval. (Carried over.)
- **Where the approval was given.** `approved.goal.where` does not say that the printed screen was pasted to the owner,
  as the 2026-10-12 entry does. (Carried over.)
- **The test against the practice.**
  - The test's borders section says "10 places lit". The practice's `border` form shows the name (3.5), so the test
    and the practice differ in the prompt but not in the answer.
  - The test's distance section says "10 pairs of places" without "never asked as a pair", while part 31 says so.
  - D6's choice says every practice item is answered with the place itself, but distance (two bands) and the traps (two
    directions) are not.
  - The paragraph's "It starts with the world, then the United States and Canada, then each region" says how the
    lessons run.

  (Carried over.)
- **Alaska's Arctic coast.** 3.10 lists Alaska's Arctic coast as water that is not built, and l3 asks Alaska's water.
  `delivery` still does not say so. It matters for l3, not for the pilot. (Carried over.)
- **Part 12's flag.** Part 12's single flag can only be drawn from Canada, the United States and Mexico, so that part
  of the check is close to fixed.
- **Copying.** No field names, quotes or follows another subject.
