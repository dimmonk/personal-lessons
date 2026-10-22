# Civics L1 to L8: research review (build-subject step 6, role "research", round 1, 2026-10-22)

Reviewer: fresh agent, read-only except this file. Read: `public/subjects/civics/` (l1 to l8, items-government, items-numbers,
items-federal, items-shape, items-l4 to items-l8, subject.js), `docs/research/civics.md`, `docs/subjects/civics/plan.md`, the
build-subject skill, the `para` diff in `public/app/lessons/item-view.js`, `tests/fixtures/uscis-m1778.json`. L9 to L16 ignored.

## Verdict

| Lesson | Verdict | Deciding defects |
|---|---|---|
| L1 Who does what | **PASS** | none |
| L2 In numbers, and why | **PASS** | none (polish P1, P2) |
| L3 Federal, state, local | **PASS** | none |
| L4 Who acted | **FAIL** | G1 |
| L5 Theirs to do? | **FAIL** | G2, A2, A3, A4 |
| L6 Who can stop it | **FAIL** | A1, G3, D2 |
| L7 Who is telling you | **FAIL** | G4, D1 |
| L8 Whole stories | **FAIL** | A1, A2, A3, G1, G2, G3, G4, D2, D3, F1 |

Counts of deciding defects: wrong fact 1 (F1); arguable answer 4 (A1 to A4); guessable by a surface cue 4 (G1 to G4, scripted);
departure from the way of thinking 3 (D1 to D3); carried over from another subject 0. Polish: 8.

## Sources checked against the web

- **M-1778 fixture**: fetched the official PDF from uscis.gov today, extracted its text with pypdf and compared every question and
  answer to `tests/fixtures/uscis-m1778.json` by script (`scratchpad/tools/cmp.py`): **128 of 128 questions and all answers match**,
  but one: Q117's last answer is stored as `"Tuscarora For a complete list of tribes, please visit bia.gov."`; the PDF prints the bia.gov
  sentence as a footnote under the list, not as part of "Tuscarora" (P8). Every q-item in L1 to L3 carries the list's wording and answers.
- **C1** (USCIS "Study for the Test"): all quoted sentences found verbatim (20 of 128, 12 to pass, stop at 12 right or 9 wrong, Oct. 20,
  2025 filing date, 65/20).
- **C16, Trump v. Barbara** (CRS LSB11468, published 2026-08-13): confirmed. Decided June 30, 2026; the Court held EO 14160 violates the
  Citizenship Clause; the sidebar quotes the Court that the 14th Amendment "guarantees citizenship to children born on U.S. soil, including
  children born of parents temporarily or unlawfully present in the United States", and that *Wong Kim Ark*'s holding grants citizenship to
  "nearly all children born in the United States", with "no reason to depart from that view today". Majority by Roberts with Sotomayor,
  Kagan, Barrett, Jackson; Kavanaugh concurred in the judgment in part; Thomas (with Gorsuch) and Alito dissented. The note's claim holds
  (for L13, outside this review).
- C5 (Federalist 51) and C7 (Jackson in *Youngstown*) quotes match the texts as commonly published; not re-fetched.

## Surface-cue script (tools/cues.mjs, run over the 64 story specs of L4, L5, L6, L8)

| Cue | Predicts the marked answer |
|---|---|
| Newspaper name → level (Gazette/Times = local, Sun = federal, Courier = state) | **63 / 64** |
| Verb in "did" (voted/passed → writes, ruled → judges, else carries) → branch | 32 / 32 |
| Words in the deciding line ("lets/gives" → theirs; "only/not/cannot/may not" → not; "no law that allows or forbids" → not settled; "judge will hear" → in court) → verdict | **31 / 32** |
| Deciding line is the one with "law/Constitution/court/judge" in it | 29 / 32 (14 other lines carry those words) |
| One keyword in the headline or the stop line (veto, amendment, federal/clash, sue/court, election/ballot, new law/undo) → stop | ≥ 29 / 32 |
| Headline alone names the stop | 15 / 32 |
| L8 "seen" line opening "You looked up…" → take, else check | 16 / 16 |
| L8 newspaper name (known four → take; Civic Daily Wire, Capitol Insider Online, Statehouse Whispers, City Hall Buzz, Brookside Truth Now, Valley Voice Daily → check) | 16 / 16 |

## Deciding defects

### Wrong fact

**F1. L8 `l8-bridges` (items-l8.js:22-28): the president vetoing "the federal budget".** Congress's budget resolution is not sent to
the president and cannot be vetoed; what the president signs or vetoes is an appropriations (spending) bill. The line "The Constitution
gives Congress the power to make the federal budget" also has no such clause (the power is taxing and spending, Art. I §8, and
appropriations, Art. I §9); Q20's "Makes the federal budget" is the list's plain wording and fine as an answer, not as a quoted
constitutional grant. **Fix:** "passed a spending bill with $5 billion for bridges"; deciding line "The Constitution gives Congress the
power to tax and spend for the country" (keep `fact: "q20"`).

### Arguable answers (a second option is defensible)

**A1. L6 and L8, every story: the prompt "Which of these could stop it?"** (items-shape.js:69). Read literally, the voters, a new law and
a court can stop almost any act, so more than one option is defensible on most items. Clearest: `l6-banks`, `l6-airlines`, `l6-planes`,
`l8-trains`, `l8-rangers`, `l8-fireworks` (marked "federal law"): preemption is enforced by a court, so "a court" is also right (the real
case behind `l6-planes`, *City of Burbank v. Lockheed* (1973), was a lawsuit); `l8-bags` (marked "new law"): the state law that already
forbids the ban is the real stop, enforced in court; `l6-bikes` (marked "amendment"): the Court can also overrule itself. The wrong-answer
lines ("No court case is open in the story", "No election … is about to be held") show the intended question is "which does the
story point to?". **Fix:** prompt "Which check does the story point to?" and the lesson-6 table title to match; keep the `then` lines.

**A2. Orders that run the actor's own branch marked "Not settled": `l5-cars` (items-l5.js:45), `l8-forms` (items-l8.js:44),
`l8-electionday` (items-l8.js:79).** A president telling federal offices which cars to buy or to drop paper forms, and a governor setting
state offices' hours, are the clearest cases of a chief executive's own power to run the executive branch (Art. II's vesting and
take-care clauses; state constitutions likewise); an expert would answer "theirs to do". Jackson's zone 2 (C7) matters when the
executive reaches outside its own branch (private parties, other levels) with no statute. The three "Not settled" items are all
inside-the-branch cases, so the lesson teaches zone 2 on the examples where it least applies. This also clashes with `l5-nine`, whose
reason says "With no law behind it, the order has nothing to stand on" (items-l5.js:20), the opposite rule for the same "no law of
Congress" fact. **Fix:** zone-2 stories where the order reaches outside the branch and the story reports a real dispute (e.g. "The
president ordered companies that sell to the government to … ; no law of Congress speaks to it; lawyers disagree"); rewrite `l5-nine`'s
reason to rest on whose power it is ("Running schools is a state power; the president has no power over it at all"), not on silence.

**A3. "In court" as the verdict where the lesson's own rule gives the answer: `l5-rent` (items-l5.js:57), and the same pattern in
`l8-fee` (items-l8.js:72).** L3 and L5 teach that a city has "only what its state hands down", so a state law taking back the cities'
rent power is, by the lesson's own rule, "theirs to do"; Congress taxing online sales sits on its listed taxing and commerce powers.
Both "theirs" and "in court" are defensible. **Fix:** use "in court" only for a story whose power question the lesson cannot settle
(e.g. a state law the story says may break the state constitution's home-rule clause, or a federal rule whose statute is disputed), or
make "in court" a fact asked separately from the verdict (see D3).

**A4. L5's pair "Same act, different power" (l5.lesson.js:30): "The governor closed a national park, and no state law gives the governor
that power."** The decider is that a national park is federal land, not the absence of a state law; with the clause as written a learner
can reason "a state law could give it to him", which is wrong (no state law could). **Fix:** b = "The governor closed a national park,
which is federal land."

### Guessable by a surface cue (scripted above)

**G1. Newspaper name predicts the level in 63 of 64 stories (L4, L5, L6, L8).** The Gazette and the Times only ever report local
stories, the Sun federal ones, the Courier state ones. A learner who meets the same papers across 60 items learns the masthead, not the
level. **Fix:** spread each paper across all three levels (a real metro daily covers city hall, the statehouse and Washington), and
check by script that no paper predicts the level above chance.

**G2. The deciding line states the legal conclusion in its own words (L5, L8: 31 of 32).** "Only the federal government can print money,
and the Constitution does not let a state do it", "State law lets…", "A state law says only the state may…". The verdict is read off
the verb ("lets" vs "only/not"), so no item asks the learner to place the power from L5's table, which is the expert's step (C6: "'theirs
to make?' is answered from this table first"). Real stories rarely say whether the act is allowed; they name a law, a topic or an actor.
**Fix:** in at least half the stories, cut the conclusion from the line and leave the fact the table decides on (e.g. `l5-dollars`:
"The state legislature voted to print state dollars." with no rule line; `l5-water`: "The governor signed a water treaty with Mexico.");
the tap then asks for the line naming the act or the topic. Keep the "law lets/forbids" lines for the city and president stories, where
the story must supply the state law or the statute.

**G3. The headline names the stop (15 of 32) and one keyword in the headline or stop line gives it (about 29 of 32), L6 and L8.**
"President to veto spending bill", "Court strikes down law; senators propose amendment", "State airline law clashes with federal rules",
"Parents sue…", "Board faces voters…", "Council to undo parking fee". **Fix:** headlines on the act, not the check ("Congress passes
spending bill"), and at least two stories per set where a second check is mentioned but is not the live one (e.g. an election far off
while a veto is pending), so the learner has to read which check is in play.

**G4. Source decisions are decided by a template sentence (L7, L8).** Take/check: the `seen` line ("You looked up X last month…" →
take; "You have never heard…" → check) decides all 16 L8 items and all 6 L7 source items, and the paper's name agrees in 16 of 16. Results
pages: the right result is always the only outside newspaper or official record; every wrong one is tagged "(the group's own site)", a
blog, a comment, a meme or an ad. Nothing tests the field's central finding, that experts were fooled by "official-looking logos and domain
names" (C15). **Fix:** add lures that look official (a ".org" with a seal, "National Voter Guide"-type names among the results, a
think-tank page that looks like a news report), a known paper reporting something alarming (the L7 rule says check), and an unfamiliar
but checkable local outlet whose outside coverage is good; vary which result is right by kind.

### Departures from the way of thinking (note and plan)

**D1. L7 tests none of the conditions its own rule names.** L7 says check "when you cannot place the source, or when the story is alarming
or sudden" (l7.lesson.js:22), but every item has both conditions pointing the same way (known paper + ordinary vote; unknown account +
alarming claim). The decision fact checkers make (C15: leave the page because looks deceive) is never tested against a source that looks
trustworthy. L8's table then drops the alarming-claim condition ("Take … only if you have already checked the source", l8.lesson.js:17),
so the two lessons teach different rules. The take-as-it-stands rule itself has no passage in the note (click restraint, C15, is about
search results, not about skipping the check); it is a judgement call and should be marked so in the plan. **Fix:** one rule in both
lessons; add the contrast items in G4.

**D2. The six checks leave out state law over local law** (l6.lesson.js:13-19, subject.js:100-107). C6's hierarchy (local power is what
the state hands down) is the check that decides `l5-wage`, `l8-bags` and real stories like them (state preemption of city minimum wages,
bag bans, rent rules), yet the stop list has only "federal law over a state or local law". `l8-bags` is forced to "the council will pass a
new rule that drops the ban" (an odd story: a council voting a ban and then promising to repeal it) because the real check has no option.
**Fix:** widen "Federal law" to "A higher level's law: federal over state and local, state over local" (one option), and rewrite `l8-bags`'s
stop line to the state stepping in.

**D3. "Not settled" is applied to a governor (`l8-electionday`) and offered as a verdict for state legislatures.** Jackson's zones (C7) are
the federal test of a president against Congress; the note gives no source for carrying them to state executives, and for a state
legislature "no law allows it" is not a doubt at all (states hold every power not given away, C6, the 10th Amendment L3 teaches).
The verdict list's text "Not settled: no law allows it or forbids it" (subject.js:97) invites "not settled" for any state act whose story
names no grant. **Fix:** word the option "Not settled: a president or agency acting where Congress has said nothing", and keep zone-2
stories federal.

## Polish (does not decide the verdict)

- **P1.** L2 table (l2.lesson.js:17): "9 justices; 5 decide a case": all nine decide; five is the majority needed. → "9 justices; a
  majority of 5 decides".
- **P2.** L2 table "Who picks them" for the Supreme Court: "The president appoints them" omits Senate confirmation, which q45's own
  reason states (items-government.js:45). → "The president, with the Senate's approval".
- **P3.** L6 amendment row (l6.lesson.js:19): omits the convention route; fine for a beginner, but "Two-thirds of both houses of Congress"
  reads clearer than "two-thirds of Congress".
- **P4.** L5 table, Congress row (l5.lesson.js:12): no mention of spending or the necessary-and-proper clause (C6), though L8 stories rest
  on Congress's budget power. Add "spending" to the list.
- **P5.** L6 `l6-farmers`: an agency issuing a rule is marked `br: "carries"`; harmless while only "stop" is asked, but if the story is
  ever asked "what did they do", L4's wording ("write a rule") makes "writes" defensible.
- **P6.** L4: the president-default lure appears only as the slip on a wrong pick; no state or local story mentions the president, so the
  named wrong idea is never tempted. A few local stories with a federal echo ("…as the president urged schools to…") would test it (C8).
- **P7.** `para` change (item-view.js:21-25): correct and immutable, but the grouping reduce is copied from
  `article-view.js:16` (`articleParagraphs`); share one helper instead of two copies (single source of truth).
- **P8.** Fixture Q117 (tests/fixtures/uscis-m1778.json): split "For a complete list of tribes, please visit bia.gov." out of the
  "Tuscarora" answer (into the question's note or drop it) before L14 builds an item on it.

## What holds

- All 51 interview items in L1 to L3 carry the list's exact wording and answers; every "why" item carries the list's reason (C21).
- Every reason line about government in L1 to L3 is correct (checked: branches, terms, counts, 22nd and 10th Amendments, Cabinet,
  Electoral College, federal-only and state powers).
- The invented stories are realistic in kind; specific checks: `l5-oil` (emergency stockpile release under a statute), `l8-storm`
  (federal disaster help on a governor's request), `l6-planes` (federal control of airspace over a city curfew), `l8-trains` (federal
  railroad preemption), `l8-fireworks` (USPS ban on mailing fireworks), `l5-factory` (*Youngstown*'s zone 3) all match how these play out.
- The structure (two axes, power, checks, source) is drawn from C5 to C7 and C15/C18; nothing found carried over from another subject.
