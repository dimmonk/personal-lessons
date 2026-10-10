# Fieldcraft lesson standard, version 1

## The core (owner-confirmed, 2026-10-05; it governs everything below)

Fieldcraft is pragmatic knowledge for someone who is not specializing. The bar for every unit: **a beginner reads it once and can explain the idea and use it.** There is no word count, range or target. Every unit keeps the light core of the research, and only that:

1. **A real example first.** Each idea starts from one everyday case, before any rule or name.
2. **Answer before you see the reason.** The learner commits to an answer, then the reasoning is shown.
3. **Quick questions with an explanation for each answer.** Short practice, and every answer, right or wrong, is explained at once.
4. **Questions come back on later days.** The returns already built.

Everything else in this standard (second stories, "what it is like" cards, extra look-alike chains, long drill ramps, lens and transfer cards) stays only where it is what makes the idea understandable; otherwise it goes. Where any rule below asks for more than the core needs, the core wins.


Status: standard version 1, written 2026-10-04 and revised the same day after two adversarial reviews (section 14 lists every change and every rejected point). It was judged from three independent designs (section 12) and is the one standard every subject is rebuilt to. It is still version 1: no unit has shipped under it.

Authority: `docs/learning-science.md` (the evidence base, principles P1 to P30) is the single source of truth for how lessons are built. This document operationalises it and nothing else. Every rule below cites the principle id(s) it implements; a rule that cites none has no authority and must be deleted. Rules that only carry out an owner requirement (revisions, file size, offline, storage keys, the visual rule) say "owner" and are kept apart from lesson-design rules. Where the evidence base marks something a judgement call, the rule here carries **(JC)**. To change how lessons are built, change the evidence base first, then this document, then the lessons.

Words used here as the evidence base defines them: case, outcome, key, key question, gate question, route, card, check, drill, specimen, determination. Additions: a **look-alike pair** is two outcomes a learner will confuse; a **chain** is a card followed by cards of the same kind that continue it (S4).

Rule ids: **A** anatomy (section 3), **S** schema (4), **E** engine (5), **K** key and vocabulary (6), **W** writing (7), **V** validator (8), **X** browser checks (8), **F** files and migration (9), **R** revisions (13).

## 1. The standard in one paragraph

Every unit guarantees the learner seven things. (1) Before anything is taught, they are told in plain words what they will be able to do with a real case, and they see the part of the key the unit covers as a map (P1, P30). (2) Every idea is met first in an everyday case, then stripped to what decides it, then stated in general words, and only then given its name; the name is then used unchanged everywhere (P11, P4, P5). (3) Every explanation is complete: each link is written out, nothing points forward, and nothing is shortened to fit a screen. There is no length cap anywhere in this standard, on a card, on the number of cards an idea gets, or on a line of feedback; length is whatever the explanation needs (P3, P6, P7, evidence base section 5). (4) Look-alikes are put side by side and the one difference between them is stated in the key's own words. Everything the key words (names, questions, answers, what each name needs, when each answer is given, how to tell a pair apart) is typed once and printed from there into every card, option, feedback line and verdict, so the lesson and the questionnaire cannot use different words (P12, P9, P5). (5) The learner answers something at the end of every step, sees a complete case worked through the key before being asked to run it, and then practises on a ramp that ends with whole cases alone (P16, P10, P17). (6) Every answer, right or wrong, is explained at once as reasoning tied to the words of the case; a right name reached by a wrong route is a miss; every name comes back on later days with a different case (P19, P20, P21, P24). (7) The unit carries a revision number the learner can see, a draft is labelled as a draft, and no unit is called finished until a person who does not know the subject has read that revision cold (P27; owner).

## 2. Traceability

Every principle, and the rules that implement it. "Not adopted" is used only for a line the evidence base itself makes optional or conditional, and the reason is given.

| Id | Principle | Implemented by |
|---|---|---|
| P1 | Orient first | A1 `orient`; E2 preview map drawn from the key; E14 the subject's opening map; V10. Requires 3 (ungraded preview questions) is optional in the evidence base and its weakest-supported element: **not adopted in version 1**, so nothing is asked before it is taught |
| P2 | Beginner default; support shrinks | A1 (what the earlier units taught is printed from the key in one place, with a link to the card that taught it, and never re-taught); A9, A10 worked cases then ramp; E5 (full feedback at the first meeting of a case and after every miss; shorter only when a case already seen is answered right again, with the rest one tap away); W8; V10. Requires 2 (a "check what you know" shortcut) governs shortcuts if one is offered: **none is offered in version 1** (E17) |
| P3 | Every connection spelled out; no forward pointers | W1, W2 (completeness list, link line, one referent, order of dependence); S4 `link` on every card; E5 (a pair's rule is never shown in feedback before the card that teaches it); V5, V27, V28. Fact units: A12 |
| P4 | Ordinary words, then the term; parts before the whole; two vocabulary lists | A3 (`meet`: case, stripped case, plain explanation, what to point to, the key's answer, then the name); A3 `term` (a word the unit leans on gets its own card, case first, before the card that needs it); K4 (`plain` is the heading of the card that introduces a name); K6 (the target list is `key.terms`; the avoid list is `key.avoid`); K2 (plain-language test for key wording); V7, V12, V50. No glossary card exists as a kind |
| P5 | One name per concept | K1 to K9; S5 tokens for every line of the key and the ledger; E1 (all key wording printed from the key); E6, K9 (the app's own instructions are worded once, by the app); V1 to V9, V50 |
| P6 | Cut what does not help; never what does | W3 (every sentence has a job; what is cut); A11 recap is an addition **(JC)**; V29 (no length rule may exist). Requires 5 calls the recap "what to carry into the drill", while section 4.3 of the evidence base places it after the drill; this standard follows 4.3, the explicit sequence, and the wording of requires 5 is reported for correction there (section 14) |
| P7 | One point per card; learner-paced; as many cards as needed | A2 to A11 (one kind per point); S4 chains (`continues`: any card may run on to further cards of its kind); A13 parts; E2 (worked case as consecutive screens with the case restated; long cards scroll); E11 (no timers, no auto-advance); K4, W2 (headings); S4 (`Text`: every prose field may hold as many paragraphs as it needs) |
| P8 | Show where to look; keep together what belongs together | S6 `cues` (the deciding words for each question are data, one phrase or several); E16 one mark style in all subjects, and weight used for nothing else; A5 (both cases of a pair on one card); A3 (`again` restates the first case in a line); E2 (top bar shows part and position); V30 |
| P30 | Key as a map; look-alikes in a table | A1, E2 (preview map with plain words); E14 (the subject opens on the whole key as a preview map); E2 (a side-by-side table for every ledger pair, drawn from the key, on the card that teaches the pair); E13 (map in fixed wording where the key is run); E14 (reference screen is the map) |
| P9 | Why each key question is asked, in the key's words | K2 (`purpose`, `why`, `when` live in the key); A8 `question` card; A9 (each worked step says why it is asked); A10 single-question items and "which question do you put to the case" items use the rationale; K2.2, V55 (every question must do work); V16, V17, V42 |
| P10 | Complete worked case before the route | A9 (two worked cases, clean then misleading); A10 (the claim stage opens with a claim worked for the learner); E2; V18, V43 |
| P11 | Case, then feature, then rule | A3 (`meet`: clean case, stripped case, what you must be able to point to, stated as coming from one case; `again`: second story confirms it; `check`: new case) **(JC for the four-step order)**; K4 `needs`; W3 (an analogy says what maps to what and where it stops); V11, V12 |
| P12 | Teach by contrast | A2 (order), A3 (`again` is the same-outcome pair), A5 (`lookalike` is the look-alike pair), S3 the look-alike ledger; same-outcome pair first **(JC)**; V13, V14, V15 |
| P13 | Vary the story, fix the feature; clean before messy | A4 `lens`; W5 cases (tier, setting, topic, named cases, no reuse); A6 `exception`; A9 second worked case; S6 `returns` bank sized to the schedule; V32, V33, V34, V44, V51, V52 |
| P14 | What each outcome is like; exceptions; key answer against overall impression | A3 `portrait`; A6 `exception` with a commit prompt; A9 second look **(JC)**, practised by `echo` cases in the drill (E5, V54); A10 a reverse item for every outcome; V11, V18, V23, V39. No card may consist of "be careful" advice (W3) |
| P29 | Name the wrong idea, mark it wrong, correct it | A7 `refute`; S2 `build.wrongIdeas`; E15 (an unverified source is listed with the draft); V22 |
| P15 | Commit to a reason before the model reason | E3 (commit prompts on `again`, `lookalike`, `exception`, `worked.hold`; the stem of each is the app's wording, the same every time; the model reason follows at once; tap by default, typed sentence as a setting) **(JC on format)**; V13, V14, V18, V23 |
| P16 | Answer from memory | A3, A8 (a check after each outcome and each key question); A10 drill with cards out of view; E4; E14 (review is answering, never re-showing cards); V16, V20, V21 |
| P17 | Drill as a ramp | A10 (name, piece, finish, route); E6; E8 first-attempt accuracy per item; E12 soft prompt, no gate **(JC)**; V38, V39 |
| P18 | Wrong options only with feedback, after the right reasoning | K1, V9 (options are the key's own answers, names or lines, generated); A7; A10 (claims last, commit first, the claim put right last); W6; V22, V43 |
| P19 | Immediate explanation for every answer | E4, E5; W6; V35 |
| P20 | Feedback is reasoning, decisive sentence first | E5 (assembly order; every question a case is asked gets a reason that quotes that case's own words, the first question included); W6; E8 (log of feedback left early); V30, V35, V36 |
| P21 | Right answer unproven until the route is checked | E7 (name and route marked separately; right name by a wrong route is a miss with the full route explanation); E5; E9 (misses return). Requires 4 (capturing confidence) is conditional in the evidence base and untested: **not adopted**; every miss already returns |
| P22 | Mix confusables once introduced | A2; A10 (items authored in groups of look-alikes, groups shuffled, earlier-unit items unlabelled); E6; E9 (returns beside the look-alike most often taken for it); E13 (specimens alternate look-alikes inside a clean-to-messy order); E14 (Mixed drill described as spacing and retrieval); E8 (mixed against single-question accuracy logged) **(JC)**; V40, V41 |
| P23 | Judge by results; the app decides what returns | E10 results screen; E11 (no control removes an item or declares a unit finished); E6 (the drill's opening words say mixed practice is meant to feel harder, and why); E9 |
| P24 | Returns over days | E8 (one record per item; everything else derived); E9 (schedule, a fresh case for each return, short sets) **(JC, starting values)**; S6 `returns`; V44. Fact units: A12 |
| P28 | Learner controls pace and stopping; persistence measured | A13 (parts end on a visible stopping point); E11; E19; E10. Requires 5 (streaks, affirming messages): **not adopted and not banned**; to be tried one at a time against E19 |
| P25 | Near transfer in real-life format; no general-thinking claims | A3 (`portrait.wild`, `portrait.self`, `portrait.ask`); A11 `transfer` **(JC)**; W5 (cases as things people say, areas of life as a fixed list, sound cases mixed in); K5, K8; W7; V25, V33 |
| P26 | Action subjects: cases where nothing is wrong beside cases where something is, reminders, optional plan | Applies when `subject.action` is true (Scams, Wealth Preservation, Statistical Claims): A10, V37 (legitimate cases in every case stage); E9 (a late return, and a fourth return case per outcome); A11 `plan` and E18 **(JC)**; `portrait.act`, what to do when you meet each name, V59; E21 (the short baseline check); E8 (accuracy split by sound and unsound). **N/A to the Psychology exemplar** (`action: false`); it has no plan card, and its drill still mixes in the one outcome where nothing went wrong (P25 requires 5) |
| P27 | Test on a true novice | A14 (two checks; only the cold read signs a unit off, and it is tied to the revision read); S2 `status`, `build.signoff`; E15 (a draft is labelled a draft); section 8 as the automated coverage half; V45; E8 (first-attempt accuracy tied to a revision); A10 and V39, V54 (every card is used by an item) |

## 3. Unit anatomy

A unit teaches one part of the subject's key: usually one branch, meaning its key questions and its outcomes. The first unit of a subject teaches the gate question (A15); each later unit teaches a branch and uses the gate without re-teaching it (evidence base 4.4). A branch has one, two or three questions.

**There is no cap on the number of cards, the length of a card, or the length of a unit** (P6 forbids, P7 requires 2, evidence base section 5). Each card kind below has a statement of what makes it complete. A card is finished when it is complete, at whatever length that takes. A card that makes two points is split; a card that makes one point is never shortened to fit a screen (P7 requires 3). **Nor is there a cap on the number of cards an idea gets.** Any card may be followed by further cards of the same kind that continue it (a chain, S4): the heading is carried over and the continuing card opens with a line restating what the card before it established (P7 requires 1 and 3). "One `meet` card per outcome" below means one chain, of as many cards as the outcome needs.

### A1 to A11: the sequence of a classification unit

The order is the one in section 4.3 of the evidence base and is fixed. A step is one card or several.

| Rule | Card kind | Purpose | Principles | Complete when it contains |
|---|---|---|---|---|
| A1 | `orient` (one, first) | Say what the learner will be able to do and how the parts fit | P1, P2, P30 | The skill as a task on a real case. An everyday situation the learner has met, in everyday words. Then, printed by the app from the key: each earlier question this unit builds on, with every one of its answers and when each is given, the one this unit covers marked, and a link to the card that taught it; the unit's part of the key as a preview map, each answer with the plain words of what it leads to, the names listed after, and a line saying the learner is not expected to follow it yet; the unit's parts in order. It is more general than what follows and is never the explanation |
| A3 | `term` (one per taught word that is not key wording) | Teach a word the unit leans on, before the card that needs it | P4 requires 2 and 3, P11 | A link line. A case that shows the thing. The thing in ordinary words. Then the word and its meaning, printed from the key. Placed before the first card that uses the word, and never the unit's first card. A card introduces at most one new name: one term, or one outcome name |
| A3 | `meet` (one per outcome) | Introduce one outcome on its own | P11, P4, P8, P3, P5 | A link line from the previous card. One clean case with the deciding words marked. The same case stripped to what decides it. The explanation in plain words: whatever a beginner needs to see why people do it and what the alternative would have been. Then, printed by the app from the key: what you must be able to point to (`needs`), marked as coming from one case so far; the key's question; and the answer this outcome gets. Then the name and what the name means (words that occur only inside the name are explained in that sentence). Then the other words real life uses, said once. The heading is the outcome's plain words, never the name |
| A3 | `again` (one per outcome) | Same outcome, different story | P12 requires 1(a) and 2, P13, P11 requires 3, P15 | The first case restated in a line. A second case of the same outcome in a different area of life. An instruction naming the one thing to compare. A commit prompt. Then the sameness in plain words, confirming that what the first case showed holds in general |
| A4 | `lens` (one per unit, after the first `again`, before the second `meet`) | Say what is story and what is structure in this subject | P13 requires 1 | What stays the same from case to case (what the key asks about; it may print the question) and what changes on purpose (topic, people, stakes) |
| A3 | `portrait` (one per outcome) | What the outcome is like beyond what decides it | P14 requires 1, P25 requires 2 | Its typical features and logic. What it is not (the ordinary thing it must not be confused with). `wild`: the words it arrives in. `self`: where the learner would meet it in their own life. `ask`: the question to ask when you spot it, in someone else or in yourself. In an action subject, `act`: what to do when you meet it, as steps a person can take on the spot (P26, V59) |
| A3, A8 | `check` (after each outcome; after each key question) | Use the one point just taught, from memory, on a new case | P16 requires 2 and 3, P19, P20, P11 requires 1(d), P10 requires 5 | One new case. One question about one point: tap the deciding words, or choose among the key's answers met so far, or answer one key question. The reason for the right answer, and, after an outcome's cards, a line joining the words in the case, the key's answer and the name. It never asks for the route |
| A5 | `lookalike` (at least one per outcome) | A look-alike pair, side by side | P12 requires 1(b), 2 and 4, P15, P22 requires 1, P30 requires 2 | Shown only after both outcomes have had `meet`, `again`, `portrait` and `check`. Two cases on one card, one from each outcome, alike in story wherever possible (the same person and topic is best, so that only the deciding words differ). An instruction naming the one thing to compare. A commit prompt. Then the difference, case by case, in the key's words. Then, printed from the ledger and the key: how to tell them apart (`test`), and the pair side by side in a table. It names its ledger entry (S3) |
| A6 | `exception` | A named messy case: looks like Y, is X | P14 requires 3, P13 requires 4 | A case whose surface points to the wrong outcome. The statement that it has what usually means Y and is X. A commit prompt before the reason. The reason. Then, printed: how to tell them apart, and the key's tie-break where the key has one for this pair. Exceptions are taught here, never appended to another card |
| A7 | `refute` | A wrong idea the learner is likely to bring | P29, P18 requires 3 and 5 | The idea as people say it. A plain statement that it is wrong. The correct reasoning in the key's words, last on the card. `testedBy`: the later item that tests exactly this. A source in the build notes. Never among the first three cards of a unit |
| A8 | `question` (one per key step the unit teaches) | Teach the key question as what separates neighbors | P9, P30 requires 2 and 3, P3 requires 1 | Placed after an outcome on each side of the question has been met and, where the unit has one, after the `lookalike` card for a pair it separates. Printed from the key: the question, what it sorts (`purpose`), each answer with when to give it (`when`) and the outcomes it keeps and rules out, and why that distinction decides (`why`). Authored: what the card adds to `why`, and how to answer the question from a case, including what to do when evidence for two answers is in the case. Then, printed from the ledger: for every pair taught so far that this question separates, the question to put to the case. The learner has seen the question's words before this card (on the preview and on each `meet` card); this is the card that teaches what it separates |
| A9 | `worked` (at least two, after every `question` card and before the drill) | Complete routes, watched | P10, P8 requires 1, P9 requires 3, P13 requires 2, P15, P14 requires 4 | A new case. Every key question on the case's route, in the key's order, starting at the gate: why it is asked, the answer in the key's words, the marked words, the reason, what is still possible and what is ruled out. The name. Held back until the learner commits: why this name and not its nearest neighbor. A second look: which named case it looks like, and what to do when the key and the likeness disagree. The first worked case is a clean one; the last is one in which the most noticeable thing in the story is not what decides it, and in which the likeness points at the wrong named case, so that the disagreement is shown and not only described. Worked cases are always correct (P10 requires 4) |
| A10 | the drill (S6) | Practice as a ramp | P17, P16, P22, P21, P18, P14 requires 2, P9 requires 4, P27 requires 5 | Five stages in this order. `name`: the key's answers are shown, the name is asked (where every answer of the last question leads to one name this practises the pairing of answer and name, and the app says so). `piece`: one key question at a time on a new case; "which question do you put to the case" for a ledger pair; a reverse item for every taught outcome (the name is given, what would you expect to hear or find); from the second unit on, gate items from earlier units, unlabelled. `finish`: the first answers are shown, the learner finishes the route and names it. `route`: the whole route alone, at least two cases for every taught outcome, clean cases before cases whose story misleads, name and route marked separately, and at least one case built to look like a named teaching case of a different outcome. `claim`: faulty claims, the first worked for the learner, then commit first, then the fault, then the claim put right. All cases are new. Items are authored in groups of look-alikes. In action subjects every case stage contains a legitimate case. The drill is where most of the learner's time goes; a unit with full cards and a token drill fails this rule, and the remedy is more items, never shorter cards (P16 requires 4) |
| A11 | `recap`, `transfer`, `plan` (close, after the drill) | Carry it out of the app | P6 requires 5, P25 requires 4, P26 requires 4 | `recap` **(JC)**: printed from the key and the portraits, the unit's part of the key in its own words and, for each outcome, what the learner must be able to point to and the question to ask when they spot it; then the authored lines to carry away. An addition, never the teaching. `transfer` **(JC)**: the learner names an occasion of their own; a prompt is supplied for every outcome; nothing on the card says the skill is useful. `plan` **(JC)**: action subjects only, optional for the learner: "if I see X, then I will do Y", with example cues; a reminder is scheduled (E18) |

**A2. Order.** Outcomes are taught in the order that puts each next to its nearest neighbor in the key, so a `lookalike` card can follow as soon as the second of a pair has had its check (P12 requires 1, P22 requires 1). Within an outcome the order is fixed: `meet`, `again`, `portrait`, `check` (P11 requires 1, P12 requires 3). A `term` card comes before the first card that uses its word (P4 requires 3). A `question` card comes after the outcomes it separates and before the first `worked` card (P9, P10). Before its `question` card a question's words may be printed (the preview, each `meet` card, the `lens`), and a check may offer the answers met so far; a check that offers all of a question's answers comes only after its `question` card, and nothing asks for a route before the first `worked` card (P10 requires 5). The close cards come after the drill, as in evidence base 4.3, so the drill is answered from memory and not from a summary just read (P16 requires 1 and 3).

**A13. Parts.** A unit's cards are grouped into parts. Each part ends on a screen that says the learner can stop and where the next part starts (P28 requires 2). Parts organise a unit; they never limit it. The last part holds the worked cases, the drill and the close cards. Where the key allows, the parts follow the answers of the unit's first question, so the unit's own structure repeats the key's (P1, P30); where the branch has one question, the parts group its outcomes by what a learner will notice first (in the exemplar: reasoning about something the person did or spent, reasoning about evidence).

### A15: gate units

The first unit of every subject teaches the gate question, and evidence base 4.4 says the families the gate sorts cases into are that unit's outcomes. A gate unit is a classification unit with these differences, and Psychology Unit One is built as its exemplar before Unit Two goes live (F6).

- **The families are the gate's answers.** Each gate option carries `plain` and `needs` as an outcome does (S1). In a gate unit `teaches.families` lists the option ids, and every card field that takes an `outcome` takes a `family` in its place (`meet`, `again`, `portrait`, a check's `after`, a `transfer` prompt). `meet.feature` is the gate step and that option. A family's name is its answer text, printed by `{a:}`; it has no second name.
- **The ledger pairs families** (S3), and `lookalike`, `exception` and `refute` cards work unchanged.
- **Cases** carry `route: { <gate>: [optionId] }` and no `outcome`. They become the bank from which later units draw their earlier-unit items.
- **The drill has three stages**: `piece` (the gate question on new cases, a reverse item for every family, "which question do you put to the case" items), `route` (the gate question on mixed cases, clean before misleading, at least two per family) and `claim`. `name` and `finish` do not exist where the route is one question long, because the answer is the name, and no gate item ever asks for a name. A `separator` item cannot be asked in a gate unit: it teaches one question, so there is nothing to choose between (S6). The name a learner takes a family for is the answer they gave to the gate question, which is stored with the route (E8), so returns, results and "the pair you mixed up most" read it from there. The checks after a family's cards read "The key's answer for this case is …" and do not add a second line joining an answer to a name, because the answer is the name.
- **Worked cases** are one question long and keep the hold-back prompt and the second look.
- A subject whose learner will meet sound cases gives the gate an answer for "nothing to name here", taught as a family like any other (K2.9).

### A12: fact units and procedure units

The same registry and engine serve the other two unit kinds (evidence base section 2 and 4.3). Both are built on small fixture units (`tests/fixtures/fact-unit.mjs`, `procedure-unit.mjs`) and played through the real unit player by `tests/e2e-kinds.mjs`, and the shapes in S4 and S6 are the ones that build confirmed or corrected (section 15). Neither has an exemplar read cold yet: one of each is still built in real subject data and read cold before any subject that needs it is rewritten (F6).

- **Fact units (`kind: 'F'`)** (P3 requires 5, P24 requires 7, P11, P30, P16, P19). `orient` says plainly that this unit is facts to hold, not a skill to apply, and why they are worth holding (`canDo`); the app prints the sentence that says what a fact unit is, the groups of facts the unit holds, the parts and the stakes line, and `orient` has no `map`. Facts are grouped under the concept they serve: one `concept` card per group (a case, then the concept in plain words), then a `facts` card with one row per fact (S4). A `check` per fact follows it, asking that one fact from memory (`ask: { type: 'fact', row }`, S4): the question is the row's `q`, the choices are the answers of every row on the same `facts` card, and after the answer come the right answer, how it fits the concept (`relates`), and, after a miss, the other fact the chosen answer belongs to; if the two facts are a ledger pair whose card has been read, the pair's `shared`, `rule` and `test` follow (E5). The drill has one stage, `fact`: every fact asked the same way, a missed fact asked again at least three items later (E6). `lookalike` cards are used where two facts are commonly swapped, and the ledger pairs facts by row id (S3). A fact unit closes with a `recap` that prints every fact by group, then `carry`. It has no worked route, no `question` card, no `transfer` and no key questions: a subject made only of fact units has a key with no gate and no branches. What the unit holds is derived from its `facts` cards and is never listed twice. Every fact returns on the schedule (E9): the row is asked again from memory, beside the fact it is most often swapped with, with its choices in a new order.
- **Procedure units (`kind: 'P'`)** (P10 requires 6, P9, P11, P12, P13, P17, P22 requires 8). The key's outcomes are the types of problem, and its questions tell which procedure applies. `orient` names the kind of problem in a real situation. `meet` gives the idea behind the procedure with a concrete problem, and is the same card as in a classification unit. `solved` is a worked example with real numbers: the problem, then every step with its working and named by its purpose, with the reason for each; there are two per procedure, in different areas of life, and one commit prompt on the step that carries the idea. That step's reason, every later step and the result are not on the screen until the learner has answered (E3). A `check` after a procedure may ask the learner to finish a problem (`ask: { type: 'solve', solve: 'last' | 'whole' }`). Once a neighboring procedure is taught, a `lookalike` card sets two look-alike problems that need different procedures side by side with what tells them apart, and the ledger pairs problem types. The drill's stages are `last` (the working is shown up to its last step, which is left to the learner), `whole` (the problem alone, worked by the learner, who chooses the result) and `route` (problem types mixed: the learner answers the key's questions in order, names the kind of problem, and then solves it), and from the second unit on it carries earlier types unlabelled. A wrong choice is the number a named slip produces, and the slip is named after the answer (E5). Returns on later days carry less of the load than the worked examples and the mixed drill do (P24 boundary conditions): a due problem type comes back as a `route` item on a fresh problem.

### A14: sign-off

A unit has two checks and neither stands in for the other (P27 requires 1). The **coverage check** is the validator (section 8); it shows that every word asked was shown first and that every item can be routed, never that a person understood. The **comprehension check** is a person with no background in the subject, or failing that someone who learned it recently, who reads the unit cold, says back what each card said, and attempts the drill. Only the second sets `status: 'live'`, and it signs off the revision that was read: a later revision that changes a card or the key wording the unit prints needs a new cold read, while a correction that changes no teaching is listed with its reason (S2 `build.signoff.since`). The author's own reading and a subject expert's reading never do. Until then the app shows the unit as a draft (E15). A learner's report that a card is confusing is treated as a defect report (P27 requires 4).

## 4. Data schema

Subject data is plain JavaScript object literals in classic script files, registered through one global, `FC`. No modules, no build step, no dependencies (owner). The registry deep-freezes everything it is given and builds a new object for every registration, so no file can change another's content. Cards are structured data: **no field holds HTML**.

**`Text`.** Every prose field in S2 to S6 has one type, `Text = string | string[]`: one paragraph, or as many as the explanation needs. That includes every feedback field (`reason`, `not.why`, `miss`, `note`, `fault`, `corrected`, `wouldChange`) and every ledger field: no field is limited to a sentence or a paragraph (P7 requires 2, P20: no cap on how much explanation a wrong answer may need). The renderer and the validator accept both forms everywhere. Text may contain only the tokens of S5 (P5, P6 requires 2, P8 forbids decorative emphasis).

The shapes below are exact: the validator rejects a missing required field, an unknown field and a value outside an enum (V0). `?` marks an optional field. Ids are unique within a subject, case ids included. The exemplar files (section 10) are the reference instance of every shape used by a branch unit of kind `C`; the shapes for gate, fact and procedure units are confirmed by their own exemplars (A12, A15).

### S1. Subject and key

```js
FC.subject('psychology', {
  name: 'Psychology',
  rev: 1,            // integer, a real field (it used to be parsed out of the "eyebrow" label); R1
  standard: 1,       // lesson-standard version the key was written to
  action: false,     // true: the learner acts on this subject (P26); turns on the plan card, legitimate cases, the late return, the baseline check
  blurb: Text,       // a task on cases of this kind; never a claim about thinking in general (W7)
  units: ['u1', 'u2', ...],                 // course order
  settings: ['work', 'home', 'money', ...], // the areas of life a case can be set in: a short fixed list (W5.3)
  baseline?: [caseId],                      // action subjects: the short check asked once before Unit One (E21); the cases have use 'baseline' and live in Unit One's case collection
  limits: [{ h, text: Text }],              // "where this key stops", shown on the reference screen
  history: [{ rev, date, change }]          // one entry for every revision from 1 to rev (R1)
});

FC.key('psychology', {
  outcomes: [{ id, group, unit,             // group = gate option id; unit = the unit that teaches it
               n,                           // the one fixed name
               plain,                       // a few ordinary words: preview map, and heading of its meet card
               needs,                       // what you must be able to point to in a case before the name can be used
               aka: [],                     // other words real life uses; shown once, on its meet card
               legit?: true }],             // action subjects: nothing is wrong in a case of this name (a real bill, a fair offer); also allowed on a gate answer
  terms:    [{ id, unit, n, means }],       // taught words that are not key wording; unit = the unit whose term card introduces it
  avoid:    [{ word, sayInstead }],         // words this subject's authored text must not use (P4 requires 2, V50)
  gate:     Step,                           // its options also carry plain and needs: they are Unit One's families (A15)
  branches: { [gateOptionId]: [Step] }      // one, two or three questions per branch, in the order they are asked
});
// Step   = { code, unit, q, purpose, why, options: [Option] }
// Option = { id, n, when, keeps: [outcomeId], yieldsTo?: [{ option, say }] }
```

- `q` is the question exactly as asked, and ends in a question mark. `purpose` says what the question sorts (P9 requires 2). `why` says why that distinction decides (P9 requires 1). `n` is the answer exactly as shown. `when` says what a case must show for that answer to be given; it is printed on the `question` card and reused in feedback (P9, P20 requires 3).
- `yieldsTo` is the key's tie-break, as data: when a case shows this answer and also the one named, the named one is the key's answer, and `say` is what the case also shows, in words that complete "it also shows ...". A tie-break exists nowhere else (K2.8).
- `plain` and `needs` belong to the outcome, `purpose`, `why` and `when` to the question, so the card that teaches them, the feedback, the recap and the reference screen all print one copy (P5 requires 5).
- Codes and ids are never shown (K3). An outcome may be kept by more than one answer of a question; a case then lists every answer that this case supports, and an item accepts each of them.
- A subject made only of fact units has a key with no `gate` and no `branches` (`{ outcomes: [], terms: [], avoid: [], branches: {} }`); nothing in the engine requires a gate until a unit asks a question.
- `legit: true` marks the names of cases where nothing is wrong. It is the one place the app learns which cases are sound: the drill refuses to run a case stage of an action subject that has none (E6), the results split first-try accuracy by it (E8, E10) and the baseline check is scored against it (E21).
- This shape replaces the existing `determination.steps` / `stepsByGate` / `label` / `sub`: `label` becomes `q`, an option's `sub` becomes `when`, and a specimen's `sub` becomes `route`.

### S2. Unit

```js
FC.unit('psychology', 'u2', {
  kind: 'C',                         // 'C' classification | 'F' facts | 'P' procedure
  rev: 1,                            // integer, shown in the app (R2)
  standard: 1,                       // lesson-standard version the unit was built to (R1, R6)
  status: 'draft',                   // 'draft' | 'live'; live only with build.signoff.coldRead for this revision (A14); a draft is shown as one (E15)
  tag: 'Two',
  title: { fromKey: 'D1.reasoning' } | { text },   // a branch unit is titled with the gate answer it teaches; { text } where two units share a
                                     // branch, and for gate, fact and procedure units. Titles are unique within a subject
  subtitle: Text,
  teaches: { steps: [stepCode], outcomes: [outcomeId], terms: [termId], families?: [gateOptionId] },   // a fact unit: steps, outcomes and terms are empty; what it holds is every row of its facts cards
  assumes: [unitId],                 // earlier units of this subject, all of standard 1. Everything they teach (questions, answers,
                                     // names, terms) may be used by token. The orient card prints, from the key, every assumed
                                     // question that this unit's routes pass through
  ledger:  [ ...S3 ],
  parts:   [{ id, title, cards: [cardId], drill?: true, close?: [cardId] }],   // drill and close only on the last part
  drill:   { ...S6 },
  build:   { history: [{ rev, date, change }],                     // one entry for every revision from 1 to rev (R1)
             keyChanges?: [{ step | outcome, was, now, why }],     // what the K2 rewrite changed in the key, and why
             wrongIdeas: [{ card, about, source: { kind: 'published' | 'cold-reader' | 'app-data', ref, verified } }],
             signoff: { coverage: null | { date, by },
                        coldRead: null | { rev, date, reader: 'novice' | 'near-novice', restated: true, drillAttempted: true, notes },
                        since?: [{ rev, change }] } }               // later revisions that changed no teaching (A14)
});
```

`build` is never shown to a learner and is left out of the fingerprint (R3). The learner's place is a card id, not a number: the flattened list is every part's `cards` in order, then the drill, then `close`, and part-end screens are generated between parts and are not cards (E8).

### S3. The look-alike ledger

```js
ledger: [{
  id: 'dissonance~sunkcost',
  pair: [outcomeId, outcomeId],      // in a gate unit, two families; in a fact unit, two fact row ids
  step: 'R1',            // the first question the unit teaches on which the two share no answer (checked against keeps); absent in a fact unit
  shared: Text,          // what makes them look alike
  rule: Text,            // the one difference, in the key's words; names both outcomes by token (in a fact unit, both answers by {f:rowId})
  test: Text,            // the question to put to a case to tell them apart; contains no name
  taughtIn?: cardId      // for an entry with no lookalike or exception card of its own
}]
```

One entry per pair of outcomes that some answer of a question this unit teaches keeps together, plus every other pair learners confuse (P12, P22 requires 2). The difference between two look-alikes is written once, here, and that entry is the single source for: "how to tell them apart" on the `lookalike` and `exception` cards, the pair's side-by-side table, the list on the `question` card, the feedback when one of the pair is picked for the other (E5), the choices of a "which question do you put to the case" item, what counts as a group of drill items (E6), what returns together on later days (E9), and the "you most often take X for Y" line on the results screen (E10). An entry is taught by the `lookalike` or `exception` card that names it, or by the card in `taughtIn`, which must come after both outcomes' `meet` cards and name both.

### S4. Cards

Every card: `{ id, kind, h?, link, continues? }`. `link` is the sentence that says why this card follows the last (P3 requires 1); only `orient` and `check` have none. `h` may use tokens for names already introduced. `continues: cardId` makes this card the next in a chain: it names the card directly before it, has the same kind (and the same outcome or step), takes that card's heading, and its `link` restates what that card established. A continuing card carries only the fields it needs.

```js
{ kind: 'orient',   h, canDo: Text, everyday: Text, map: { branch }, add?: Text }
{ kind: 'term',     term: termId, h, link, case: caseId, plain: Text, after?: Text }
{ kind: 'meet',     outcome, link, case, mark: stepCode, strip: [Text], explain: Text,
                    feature: { step, option }, name: Text }                          // no h: the heading is outcome.plain
{ kind: 'again',    outcome, h?, link, first: caseId, second: caseId, step, instruction: Text, prompt: Commit, shared: Text }
{ kind: 'lens',     h, link, body: Text, fixed: Text, varies: [string] }
{ kind: 'portrait', outcome, h?, link, typical: [Text], not: Text, wild: [string], self: Text, ask: Text, act?: Text }   // act: action subjects (P26, V59)
{ kind: 'check',    after: outcomeId | stepCode, case,
                    ask: { type: 'phrase', step, say: Text, answer: 'exact words' }
                       | { type: 'option', step, among: [optionId] }     // some of the question's answers: those met so far
                       | { type: 'step', step }                          // all of the question's answers; only after its question card
                       | { type: 'solve', solve: 'last' | 'whole' } }    // procedure units: finish a problem (`case` is a problem, S6)
{ kind: 'check',    after: factsCardId, ask: { type: 'fact', row: rowId } }    // fact units: no `case`; one fact from the card before it, asked from memory
{ kind: 'lookalike', ledger, h?, link, cases: [caseId, caseId], instruction: Text, prompt: Commit, difference: Text }
{ kind: 'lookalike', ledger, h, link, facts: [rowId, rowId], instruction: Text, prompt: { kind: 'which', answer: rowId }, difference: Text }   // fact units: the two questions are shown, the answer of one is given, and the learner says which fact has it
{ kind: 'exception', ledger, looksLike: outcomeId, is: outcomeId, h, link, case, setup: Text, prompt: Commit, because: Text, take?: Text }
{ kind: 'refute',   about: outcomeId | stepCode, h, link, idea, verdict, right: Text, testedBy: [caseId] }
{ kind: 'question', step, h, link, decides: Text, how: Text, whenBoth?: Text }
{ kind: 'worked',   h, link, case, steps: [{ step, reason: Text }],
                    hold: { neighbor: outcomeId, prompt: Commit, reason: Text },
                    impression: { resembles: caseId, first?: caseId, text: Text } }
{ kind: 'recap',    h, link, carry: [Text] }
{ kind: 'transfer', h, link, ask: Text, prompts: [{ outcome, occasion }], places: [string] }
{ kind: 'plan',     optional: true, h, link, intro: Text, cues: [{ cue, then }] }    // only when subject.action; the cues are examples to start from (E18)
{ kind: 'concept',  h, link, case, plain: Text }                                     // fact units (A12); `case` is a case with text only
{ kind: 'facts',    h, link, concept: cardId, columns?: [string],                    // fact units; q is asked, a is the answer, relates how it fits the concept
                    rows: [{ id, q, a, cells?: [string], relates: Text }] }          // a table of q, a and, where the facts share attributes, one cell per column
{ kind: 'solved',   outcome, h, link, problem: caseId, result: Text,                 // procedure units (A12)
                    steps: [{ does, working, why?: Text }],                          // does = the step's purpose; working = the numbers; why on every step but the held one
                    hold: { step: index, prompt: Commit, reason: Text } }            // the step that carries the idea; its reason is hold.reason, so there is one copy

// Commit: the learner answers before the explanation exists on the screen (E3). The app words the question (E3).
Commit = { kind: 'phrase', answer: 'exact words' }                        // tap the deciding words: exactly one of the case's segments holds them
       | { kind: 'which',  option: 'STEP.optionId', answer: caseId }      // which of the two cases gives this answer
       | { kind: 'reason', lead?: Text, choices: [{ id, text, note? }], answer: id }   // which of several TRUE statements settles it;
                                                                          // every choice but the answer has a note
```

- `worked.steps` are, in the key's order, every question on the case's route that this unit or a unit it assumes teaches. `reason` is the reason for this case's answer; the case used by a worked card carries no `reason` of its own, so there is one copy. `impression.resembles` is the named teaching case of the same outcome that the case should bring back; `first` is a named teaching case of a different outcome that its story brings back first, and is required on the last worked card (A9).
- `again.prompt` and `exception.prompt` are `phrase`; `lookalike.prompt` is `which`; `worked.hold.prompt` and `solved.hold.prompt` are `reason`. A `which` prompt in a fact unit names a row in `answer` and has no `option`.
- `transfer.prompts` are `{ outcome, occasion }`, or `{ family, occasion }` in a gate unit. A fact unit has no `transfer`. `orient.map` is omitted in a fact unit.
- A `check` after a `facts` card holds one row: `after` is the `facts` card and `ask.row` is one of its rows. Every row of a card has its own check, so each fact is asked on its own. In a `facts` card no two rows have the same `a`, because the choices of a fact are the other rows' answers (the app refuses the item).
- In a `solved` card the held step has no `why` of its own. The card shows the problem, then the steps up to and including the held one with its working and not its reason, then the prompt; after the answer it shows that step's reason (`hold.reason`), every later step with its `why`, and `result`.
- `orient.map.branch` is the gate option whose branch is drawn (in a gate unit, the gate itself). The preview draws every question of that branch.

**Not fields, because the app prints them (E2, E3):** on `orient`, the earlier questions with their answers, the preview map, the parts list and the stakes line; the heading of a `meet` card, its "what you must be able to point to" line, the key's question and answer, and the "also called" sentence; the heading of an `again` or `portrait` card and of a `lookalike` card with no `h`; the stem of every commit prompt; on `lookalike` and `exception`, "how to tell them apart", the tie-break and the side-by-side table; on a `question` card, the question, `purpose`, each answer with `when` and what it keeps and rules out, `why`, and the list of pairs it separates; on a `worked` card, each question's `purpose` and `why`, the "still possible / ruled out" lines and the heading of the second look; on a `term` card, the word and its meaning; on the recap, the key, each `needs` line and each portrait's `ask`.

### S5. Tokens

The only way text refers to key wording, taught terms or a ledger line (P5 requires 1):

| Token | Prints | May appear |
|---|---|---|
| `{o:outcomeId}` | the outcome's name | from its `meet` card on |
| `{plain:outcomeId}` | its plain words | anywhere |
| `{needs:outcomeId}` | what you must be able to point to | from its `meet` card on |
| `{q:STEP}` | the question | where the question has been printed: after a `meet` card of an outcome it leads to, on the `lens`, or from its `question` card on |
| `{a:STEP.optionId}` | the answer | from the `meet` card of an outcome it keeps, or its `question` card, on |
| `{when:STEP.optionId}` | when that answer is given | as `{a:}` |
| `{t:termId}` | the taught term | from its `term` card on |
| `{means:termId}` | the term's meaning | as `{t:}` |
| `{test:ledgerId}` | the question that tells the pair apart | from the `meet` card of the pair's second outcome on |
| `{cue:STEP}` | the marked words of the case this text belongs to, in quotation marks | in a field of a case, or of the card that shows it, that has marked words for that step |
| `{f:rowId}` | a fact's answer, as written in its `facts` row | in a fact unit, anywhere (a ledger's `rule`, a `difference`) |

Fields that quote what people say are free text and are not scanned for key wording (V2): a case's `text`, a claim's `text`, `refute.idea`, `portrait.wild`, and a reverse item's `options[].text`.

### S6. Cases, drill, specimens

```js
// one collection per unit (FC.cases); a case id is unique within its subject
{ id, use: 'teach' | 'check' | 'drill' | 'return' | 'baseline',
  tier: 'clean' | 'varied' | 'misleading',
  setting,                                   // one of subject.settings: the area of life (V33)
  topic,                                     // the story, in a few words; no two cases of one outcome share a topic (V52)
  name?,                                     // a title the learner can remember a teaching case by
  text,
  outcome?,                                  // absent on a gate unit's cases and on a case used only by a term card
  route: { [stepCode]: [optionId] },         // the accepted answers per question: more than one only where THIS case supports both
  cues:  { [stepCode]: 'exact words in text' | ['exact words', ...] },   // one phrase, or several where what decides it is in two places
  segments?: [{ text, note?: Text }],        // tappable pieces for "tap the words"; note = shown if that piece is tapped in error
  reason?: { [stepCode]: Text },             // why this case gets that answer; quotes the marked words with {cue:STEP}
  not?:  { outcome, why: Text },             // the nearest wrong name (a ledger neighbor), and why it fails for this case
  also?: [optionId],                         // answers this case shows as well as its own, which lose to its own by the key's tie-break
  echo?: caseId,                             // a named teaching case of a DIFFERENT outcome whose story this one is built to bring back
  miss?: { [optionId | outcomeId]: Text },   // an authored line for one particular wrong answer, where the generated line (E5) would not do
  wouldChange?: Text }                       // what would make it a different name (shown after a route item or a specimen)
{ id, use: 'drill', kind: 'reverse', outcome, expect: 'hear' | 'find', options: [{ text, voice: outcomeId }], why: Text }
{ id, use: 'claim', text, context?: Text,
  ask: { type: 'missing', name: outcomeId }          // "what would you need to see before this name could be used?" (choices: the needs lines)
     | { type: 'option', step, answer: optionId },   // the key's question, asked of the reasoning in the claim itself
  fault: Text, corrected: Text }
// a problem (procedure units) is an ordinary case (the first shape, with tier, route, cues, reason, not, echo and wouldChange, so that the
// route stage can ask the key's questions of it) with kind: 'problem' and, when it is asked (use check, drill or return), these three:
{ ...case, kind: 'problem',
  steps: [{ does, working }],                  // the whole working, shown after the answer (and, in a 'last' item, up to the last step before it)
  answer: { choices: [{ id, text, slip? }], right: id },   // slip is required on every wrong choice: it completes "That is the answer you get when ..."
  why: Text }                                  // why the procedure works; a problem used by a `solved` card carries only the case fields and the problem text

drill: {
  key,                                       // the old quick-drill counter this unit replaces (E8); unique within the subject
  add?: Text,                                // anything about this unit's drill that the app's own instructions do not say
  rungs: [{ ask: 'name' | 'piece' | 'finish' | 'route' | 'claim',        // fact units: 'fact'; procedure units: 'last' | 'whole' | 'route'
            demo?: caseId,                   // 'claim': the claim worked for the learner before any is asked (required)
            items: [ Group ] }],
  returns: [caseId]                          // fresh cases for later days: as many per outcome as E9 schedules returns
}
// Group = [ Item, ... ]: cases that share ledger entries and one tier. The app shuffles groups inside a tier band
//         (clean, then varied, then misleading) and shuffles inside a group; it never moves an item out of its group.
// Item  = caseId                              a case, asked as the stage says; in 'piece', a reverse case; in 'claim', a claim
//       | { case, step }                      'piece': one key question only
//       | { tell: ledgerId }                  'piece': "which question do you put to the case?" for that pair
//       | { separator: ledgerId }             'piece', only in a unit that teaches two or more questions and only for a pair
//                                             exactly one of them separates: "which of the key's questions tells these two apart?"
//                                             The choices are the unit's own questions; the right one is the question on which the pair
//                                             share no answer, worked out from the key, so it is not typed anywhere. The app refuses any other pair
//       | { earlier: unitId }                 a case drawn at run time from that earlier unit's bank, due ones first, unlabelled,
//                                             asked only as far as the learner has been taught
//       | { fact: rowId }                     fact units: the row asked from memory; the other rows of its card are the choices; items are grouped by ledger pair
//                                             (a problem is listed by its case id like any case: in 'last' and 'whole' it is asked as the stage says, in 'route' with the key's questions)

FC.specimens('psychology', [{ id, tier, setting, topic, text, outcome, route, cues, reason, not, also?, wouldChange }]);
```

- **Which cases need what.** A case carries marked words and a `reason` for every question it can be asked: the unit's own questions for `check`, `name`, `piece` and `finish` items, and every question on the route, the gate included, for `route` items, return cases and specimens. Only where a question is shown and not asked may the reason fall back to the answer's `when` (E5). Every case that can be asked for its name carries `not`.
- A stage's `ask` decides what its case items show and ask. A stage that would have nothing to ask is left out: a gate unit has no `name` or `finish` stage (A15).
- A fact unit has no cases of its own beyond the text-only case each `concept` card shows: each `facts` row is an item (`q` asked, `a` the answer, the other rows of the same card as the choices offered, `relates` as the explanation). In a `problem`, a wrong `choices` entry is the number a named slip produces, and `slip` says which (P18 requires 1 and 2). A baseline case (`use: 'baseline'`) is an ordinary case with a route and marked words, listed in `subject.baseline`, and is in no drill, check or card.
- Specimens are listed clean, then varied, then misleading, with look-alikes next to each other (E13), and are never used for returns.

### S7. Revisions and the lock file

Fields: `FC.STANDARD` (1), `FC.ENGINE` (an integer that goes up when the app's own wording changes, E8), `subject.rev`, `subject.standard`, `subject.history`, `unit.rev`, `unit.standard`, `unit.build.history`. The lock file is `tests/lessons.lock.json`. Section 13 gives the rules.

## 5. Engine behaviour

Behaviour only; the engine code is not written here. Wherever a sentence is the same in every unit (a heading, the stem of a prompt, a stage instruction, the stakes line), the app owns its wording and no unit types it (K9). The exemplar's `tools/render-cards.mjs` holds those sentences in one object, `APP`, and the learner view prints them; the engine takes its wording from there.

**E1. Everything worded by the key is printed from the key** (P5 requires 1, 2 and 5). The renderer fills tokens at display time and throws on one it cannot resolve. Option buttons, question text, outcome names, maps, tables, and every `plain`, `needs`, `purpose`, `why`, `when` and `means` line come from `key.js`; every "how to tell them apart" line comes from the ledger; no card, case or engine string contains them. A step is shown as "Question 2 of 3" and its `q`; codes never appear (K3).

**E2. One card on screen at a time; what each kind does** (P7, P8, P30).
- Top bar on every card: "Unit Two · rev 1 · Part 2 of 4 · Card 15 of 38", with "Draft: not yet read by a newcomer" after the revision while the unit is a draft (R4, E15; P8 requires 2: the place in the unit's structure is visible on every card). The card's kind is data and is never shown.
- `orient`: `canDo`, `everyday`; then for each question of an assumed unit that this unit's routes pass through, the question and every one of its answers with `when`, the answer this unit covers marked, and a link to the card that taught it (P2 requires 3); in a branch unit, the fixed sentence that name and route are marked separately; then the preview map for the unit's branch, with a line saying it is a preview that the learner is not expected to follow yet: each question, each answer with the plain words of the outcomes it keeps, then the list of plain words with the name each will get; then the parts in order, how the unit teaches, and the stakes line (K9). Where a whole map would not be legible it is shown one branch at a time, same layout (P30 requires 1).
- `term`: link, the case, `plain`, then "The word for this." with the term and its meaning from the key, then `after`.
- `meet`: link, case (the existing `.passage` block) with the `mark` question's marked words highlighted, the stripped list, `explain`; then "What you must be able to point to." with `needs` and the fixed sentence that this comes from one case so far; then "The key asks:" with the question and "Its answer for a case like this one, in the key's fixed words:" with the answer; then `name`; then the generated "You may also hear this called ..." sentence from `aka`, which ends by saying which single name is used from then on. Heading from `outcome.plain`.
- `again`: the first case as one line (its name and marked words), the second case, the instruction, the commit prompt (E3), then `shared`. Heading, where none is authored: "«name»: the same thing in a different story".
- `portrait`: "What it is usually like", "What it is not", "Where you will hear it" (`wild`, then `self`), "The question to ask when you spot it" (`ask`), and in an action subject "What to do when you meet it" (`act`). Heading, where none is authored: "«name»: what it is like".
- `lookalike`: the two cases stacked as Case A and Case B on one scrolling card, never on separate cards (P12 requires 4, P8 requires 4); instruction; commit prompt; then `difference`, which refers to the cases as Case A and Case B; then "How to tell them apart" with the entry's `test`; then, the first time the pair is shown, its table.
- **Pair tables** (P30 requires 2 and 3). Only two facts get a side-by-side table, drawn once, on the pair's first `lookalike` card. Two names get none: the card's two stories, its difference paragraphs and the pair's one-line `test` already show the difference (section 20: one card, one idea, nothing repeated).
- `exception`: link, the case, `setup`, the commit prompt, the reason under the heading "Why this is X and not Y", "How to tell them apart", then the key's tie-break where `yieldsTo` holds one for the pair's answers ("When a case shows both «answer» and «say», the key's answer is «answer»."), then `take`.
- `question`: the question and its `purpose` from the key; each answer with `when` and its "keeps" and "rules out" lists computed from `keeps`, limited to outcomes this unit and earlier units teach (where every answer keeps exactly one outcome the app says so once and prints "It leads to «name»" under each); then "Why it decides": the key's `why` followed by the card's `decides`; then `how`; then, under "When two answers both seem to fit", `whenBoth` and one line for every ledger pair already taught that this question separates: the two names, the pair's `test`, and its tie-break if it has one.
- `worked`: consecutive screens, one per key question, each restating the whole case with that question's marked words highlighted (P10 requires 2), laid out with the existing `.stepdone` / `.stepopen` rows and the `.cands` readout, so the worked case looks like the determination screen the learner will use. Each shows the question, what it is for (from the key: `purpose` and `why` in the unit's first worked case, `purpose` alone after that, because the rationale fades, P9 requires 5), the answer, the reason, and what is still possible and ruled out. Then the name, the hold-back prompt (E3), the reason, and the second look under the fixed heading "Does it look like a case you know?". Nothing is asked before the hold-back prompt.
- `refute`: the idea in a tinted block labelled as a wrong idea, the verdict, the correction always last on the card (P18 requires 3).
- `recap`: link; the unit's questions and answers with the names they lead to; for each outcome its `needs` and its portrait's `ask`; then `carry`. `lens`, `transfer`, `plan`: sections in the order of their fields.
- A card longer than the screen scrolls. Nothing is truncated, collapsed or paged to make it fit (P7 requires 3). A chain is shown as consecutive cards under one heading.
- Between parts: a generated end screen ("End of part 1. You can stop here; your place is kept. Next: ...") (P28 requires 2).

**E3. Commit prompts** (P15 requires 1 to 4). `again`, `lookalike`, `exception` and `worked.hold` each stop before their explanation. The explanation is not in the page until the learner has answered, and it appears at once after; there is no "show me" control. The question is the app's wording and is the same every time (P15 requires 1): `again`: "In «first case», these words show it: «its marked words». Which words show the same thing in this case? Tap them."; `lookalike`: "Which case gives the answer «answer»?"; `exception`: "This looks like «Y». Before you read why it is «X», tap the words in the case that settle it."; `worked.hold`: the card's optional `lead`, then "Why is this «X» and not «Y»? Every statement below is true of the case. Before you read the reason, choose the one that settles it." The heading over the model reason is always "Why this one and not the other" or "Why this is X and not Y". A wrong tap shows that piece's or choice's `note`. Commit prompts are recorded (first attempt) and never scored. `solved.hold`: the app's stem is "This step carries the idea. Every statement below is true of the problem. Before you read the reason, choose the one that explains why this step is done." and a fact-unit `lookalike` asks "Which of these two facts has the answer «answer»?". The setting "type my reason first" adds a one-sentence text box before the tap; the typed text stays on the device and is not marked **(JC: tap is the default because of typing cost on a phone; the evidence for tap-to-choose prompts is weak, so first-attempt accuracy on the item after each commit prompt is read against it)**.

**E4. Checks** (P16 requires 2 and 3, P19, P10 requires 5). A `check` is its own screen: a new case and one question. An `option` check prints "The key asks:" and the question, then "Which of the answers you have met so far fits this case?", and offers `among`, which may list only answers already shown (V5). A `step` check prints the question and all its answers. The case stays on screen; the cards do not. After a check that follows an outcome's cards, the feedback ends by joining the three things the learner now has for it: the words in the case, the key's answer, and the name. In a fact unit a check is one fact: the row's question, with the other rows of its card as the choices and the heading "A question from memory". In a procedure unit a `solve` check is a problem with its working shown up to the last step (`last`) or not at all (`whole`). A check is recorded for first-attempt accuracy and for returns, and a miss never blocks the next card.

**E5. Feedback is short: right or wrong, the reason, and after a miss one line** (P19, P20, P21, P18 requires 2, P2 requires 4). Nothing else is pasted in; the link to the card that taught it is there for anyone who wants more.
1. A neutral mark and the right answer ("Right: ..." or "The answer is ..."). No praise strings and no bare "Incorrect".
2. The case's `reason` for the question, quoting the marked words, now highlighted in the case. Every question a case is asked has one (S6). Only for a question that was shown and not asked may the line be that answer's `when`.
3. After a miss, ONE line on the learner's own choice (P20 requires 3), the first that applies: the `note` of a tapped piece; `miss[choice]`; for an answer the case lists in `also`, the tie-break form ("You chose «answer». This case does show that. It also shows «say», and when a case shows both, the answer is «right answer»."); for the nearest wrong name (`not`), or the answer that leads only to it, `not.why`; else a line from the key's wording ("You chose «answer». Give that answer when «its when». This case shows something else: «the right answer's when»." or, for a name, "«name» needs «its needs». This case shows something else: «the right name's needs»."). The comparison card's lines (`shared`, `rule`, `test`) are never pasted into a miss.
4. On a `finish` or `route` item, after a miss: the reason for every question answered, the first wrong one first. A right name with a wrong answer on the way is shown as "Right name, wrong answer on the way" and counted as a miss (P21 requires 2). Then `wouldChange` where the case has one: it is written only on the few cases where it teaches something the cards did not.
5. Last, "Taught on: «card heading»", a link to the card that taught it. It opens the card for looking something up; it is never a review step.

For a fact: the right answer; how it fits (`relates`); after a miss, "You chose «answer». That is the answer to a different fact: «its question»"; then "Taught on". For a problem: the right answer (and for a `route` item the name and route marks); the working and `why`; after a wrong choice, "You chose «text». That is the answer you get when «slip»"; then the lines for a wrong route or name as in a `route` item; then "Taught on". For a `tell` or `separator` item: the right question and the pair's `rule` (a separator adds each name's answers to it); after a miss, one line on the question chosen; then "Taught on". `echo` shapes the drill (V54) but prints no line. A meeting is "first" per case id. Nothing is behind a tap at the first meeting of a case, nor after any miss. Only when a case already seen is answered right again (Mixed, "Practice again") are lines 1 and 2 shown with "Show the reasoning" opening the rest. The engine records when the learner moves on before the later lines have been on screen (P20 requires 1).

**E6. The drill** (P17, P22, P23 requires 2, P24 requires 2). **In an action subject every stage that asks about cases holds at least one case whose name is `legit`; the app refuses to start a drill (and a "Practise again") that has none, naming the unit and the stage (A10, V37).** Stages run in order. Within a stage the authored groups (S6) are shuffled inside their tier band, clean groups first, then varied, then misleading, and the items inside a group are shuffled; a group is never split, so look-alikes stay next to each other and no misleading case comes before a clean one. A missed item goes back into the queue at least three items later and is asked again until it has been answered right once in that sitting; its group partners do not come back with it. An item answered right the first time is not asked again that day. An `earlier` item is drawn from that unit's bank, due ones first, is not labelled by unit, is asked only the questions the learner has been taught for that case, and ends with a fixed sentence saying the case stops there. The names offered at a naming step are every outcome taught so far in the case's branch (in the determination, every outcome taught so far in the subject), so a name is never given away by the answers before it.

The app's words, the same in every unit: the opening ("The cards are out of view from here, and every case is new. The drill has «n» stages. Cases that are easy to mix up are placed next to each other on purpose. This is meant to feel harder than the questions between the cards: telling look-alikes apart side by side is what makes the difference stick. «k» of the cases come from an earlier unit, without being labelled. Nothing here is graded. A miss only decides what comes back. What you miss is asked again before the drill ends, and every name comes back on later days with a new case."), with the counts computed from the items; then `drill.add`; and one instruction per stage: `name`: "The key's answers are shown for each case. Give the name that goes with them." (and, where every answer of the last question leads to one name, "This stage practises one thing: which name goes with which answer."); `piece`: "One question at a time."; `finish`: "The first answers are shown. Answer the rest, then give the name. From here on your route is marked as well as the name: a right name reached by a wrong answer on the way counts as a miss." (it opens "The first answer is shown." where only one is); `route`: "No help. Answer every question in the key’s order, then give the name." (in a procedure unit: "No help. First answer the key's questions in order and give the kind of problem it is. Then work the problem with that procedure and choose the answer."); `last`: "Each problem is worked up to its last step. The last step is yours: choose what it gives. Every wrong choice is the answer one particular slip produces, and after you answer the slip is named."; `whole`: "The whole problem is yours. Work it out, then choose the answer." and the same sentence about slips; `fact`: "Each fact is asked from memory. The other facts from its card are the choices. Facts that are easy to swap are placed next to each other on purpose."; `claim`: "Each of these is something a person might say that uses one of this unit's names, or reasons in one of its ways. Each has a fault. The first is worked for you. For the rest, answer before the fault is shown." The `demo` claim is then shown whole, with its question, the answer, the fault and the claim put right, and nothing is asked of it (P10 requires 5).

**E7. Scoring** (P21). On `route` items and specimens, name and route are marked separately, as now. On `finish` items the asked questions and the name are marked the same way.

**E8. What is stored** (P24 requires 1, P17 requires 4, P22 requires 7, P28 requires 4; owner for the old keys). One record of practice, and every figure the app shows is computed from it. Nothing is stored twice.

| Key | Holds |
|---|---|
| `pl:app`, `pl:recent` | unchanged |
| `pl:<subject>:course` | the place and done marks of the lessons before standard 1 (`{u, card, phase, done}`, by unit index). Read once by the migration below and never written again: the learner's place and what they have finished live in `seen`, by unit id |
| `pl:<subject>:stats:det`, `:stats:err`, `:stats:<drill.key>`, `pl:mixed` | the counters of the old quick drills. The old format was removed on 2026-10-05 (F5): nothing reads or writes them. They may still sit in a browser's storage, unread, and are never shown or added to a figure computed from the practice record |
| `pl:<subject>:items` | the only record of practice. An object keyed by `"<unitId>/<itemId>"`, where the item id is a case id, a fact's row id, `tell:<ledgerId>`, `separator:<ledgerId>`, `commit:<cardId>` or a specimen id under the unit `"spec"`. Value: `{ tries: [Try] }`, the last twelve. `Try = { d: 'YYYY-MM-DD', rev, engine, mode, context, steps: { [stepCode]: chosenOptionId }, name: chosenOutcomeId or null, ok }`. `mode` is how it was asked: `check`, `commit`, `name`, `piece`, `finish`, `route`, `claim`, `reverse`, `tell`, `separator`, `fact`, `last`, `whole`, `spec`, `baseline`. `context` is `unit`, `return`, `mixed`, `again` (Practise again, and the faulty-claims tile of E14) or `baseline`. In a fact unit the item is the row id and `name` is the row the learner chose; in a gate unit the answer to the gate question is the name chosen and is read from `steps`. `rev` is the unit's revision (the subject's, for a specimen) and `engine` is `FC.ENGINE`, so every try is tied to the text and the app wording that produced it. `ok` is true only when the name and every question asked were right. "First attempt" is the first try in the list and is not stored separately |
| `pl:<subject>:notes` | `{ [unitId]: { transfer?: { outcome, place, text }, plan?: { cue, then, saved: 'YYYY-MM-DD', shown?: 'YYYY-MM-DD' }, baseline?: { [caseId]: 'what the learner wrote' } } }` |
| `pl:<subject>:seen` | `{ [unitId]: { rev, done: true or false, at: cardId or 'drill' or 'close' } }`: the revision the learner last had open, whether they finished it at standard 1, and their place as a card id (R4) |
| `pl:log` | a list of at most 500 entries, oldest dropped first: `{ d, type: 'start' | 'part' | 'set' | 'return' | 'left-feedback' | 'confused' | 'repeat', subject?, unit?, rev?, card? }` |

What the learner has to tell apart (each outcome, each key question, each ledger pair) is not a second store: accuracy, confusions and due dates per outcome, per question and per pair are computed from `items` through each case's `outcome`, `route` and `not`, and accuracy by stage, on whole routes beside single questions, and on mixed against single-question items is computed from `mode` and `context`. A session is a calendar day on the device. Records are replaced, never edited in place.

**Migration of old progress**, run once at load and safe to run again (owner: existing progress keeps working; P5 requires 2, P10). It is kept after the old format was removed (F5) because progress saved under it can still be in a browser's storage. A subject's `units` list, in order, is the map from every old unit index to the unit id that replaced it. `done` is re-keyed through it, and an old index with no unit now (a subject that has fewer units than it had) is dropped. A unit finished under the old lessons, all of which have since been rebuilt, gets `seen[unit] = { rev: 0, done: false, at: null }`: its row says "Rebuilt: start again", and it does not count as done for E9, E12, E13 or E14 until it is finished at standard 1, because the learner was never shown the key wording those screens now ask in. Any other old mark, such as the place in a unit that was only open, is dropped. It runs only while a subject has no `seen` record, and never writes `course` again. X4 asserts these outcomes on a captured copy of real progress, including a subject whose number of units changed.

**E9. Returns** (P24, P22, P21 requires 3, P26 requires 2, P13 requires 5) **(JC, starting values to tune on results)**. What is scheduled is the discrimination (an outcome, with the ledger pairs it belongs to), not the case. Every taught outcome returns, not only the missed ones. Computed from the records: an outcome's level is the number of separate later days, since its last miss, on which a case of it was answered right, name and route, at the first try. It is due 2 days after the unit's drill or after a miss, then 7 days after the first such day, then about 24 days after the second; after the third it leaves the active schedule. A miss sets the level back to zero. Action subjects add one return at about 12 weeks (84 days after the third good day, so a name has four levels, and the bank holds four cases for it). A due outcome is asked on a case from `drill.returns` that the learner has not seen, as a whole route, next to a case of the ledger neighbor the learner has most often taken it for (a return case of the neighbor if one is unseen, otherwise its least recently seen drill case). The bank holds one case per outcome for each scheduled return (V44); when a learner's misses have used it up, the least recently seen case of that outcome is asked and the repeat is logged, so that a short bank shows up in the log and not as a learner re-reading stories. A fact comes back as its row, asked again from memory next to the row it is most often swapped with (read from the choices the learner made, else the ledger), with its choices in a new order, because a fact has no case to vary; a problem type comes back as a `route` item on a fresh problem. Specimens are never drawn. A returned set is at most six items, is started from the "Due today" tile on the home screen, and ends on the results screen. An item the learner skipped counts as not learned and stays due.

**E10. Results** (P23 requires 3, P28 requires 3, P20 requires 2). After a drill or a returned set the learner sees their own numbers: first-try accuracy by stage, accuracy on whole routes beside single questions, accuracy on cases first met today beside returned ones, in an action subject accuracy on cases where nothing was wrong beside the others, the pair they most often confuse, and what comes back when. No grade, no comparison with anyone.

**E11. What the learner controls** (P28 requires 1, P23 requires 1, P7 requires 4). Pace, stopping, which subject and unit to open, opening a unit's drill without reading its cards, skipping an item for now, the optional plan card. Nothing removes an item from review or marks a unit finished, and no confidence or ease rating is collected. No timers and no auto-advance. Back is always available on cards and inside a drill. **What Back does inside a drill:** in a unit's drill it goes back to the cards, to the unit's last card, and the drill keeps its place (the stage and the item), so Next comes back to where the learner was; in a returned set, in "Practise again" and in the faulty-claims tile it goes back to the subject, and the set is built again next time.

**E12. No hard gate** (P17 requires 4 and 5 **(JC)**, P27 requires 3). A unit is done when its cards are read and its drill and close cards have been gone through once. The next unit is never locked. If first-attempt accuracy on the `name` and `piece` stages of a unit this one `assumes` was at or below half, **on at least four first tries** (a `name` item, or a single-question item: the `piece` stage's case, `tell`, reverse and `separator` items; fewer than four is too few to say anything), the app shows "Review these first" with that unit's due items and lets the learner continue. The same figure marks the unit as under-taught for its author: the remedy is clearer cards, not more drill.

**E13. The determination** (P10, P30, P21, P22 requires 5, evidence base 4.4). A specimen is offered by default only when the unit that teaches its outcome is done; the rest are behind "try anyway", and the screen says how many more open with later units. **"Try anyway" offers every name in the key** as a choice, taught or not, because the specimen's own name may not have been taught yet and a shorter list would give it away; the screen says the names are not all taught yet. Specimens come clean first, then varied, then misleading, and inside a tier look-alikes alternate. The map is shown in the key's fixed wording. Questions are headed by number and text, never codes. Before the first scored specimen in a subject, one complete worked determination is shown. The verdict follows E5 and E7. The old "What would falsify this reading" becomes "What would make it a different name" (`wouldChange`). The never-rendered `intro` and `determinationIntro` strings are deleted; the `question` and `worked` cards do their job.

**E14. Existing screens, and one new one.**
- *The subject's opening screen* is new (P1, P30 requires 1, evidence base 4.4): the whole key as a preview map generated from the key, every question and answer with the plain words of what it leads to, then every outcome with its plain words and the unit that teaches it.
- *Per-unit quick drills* (`quickDrills`, typed `opts`) are replaced by the unit drill of S6. Their tabs become "Practise again" for each finished unit: the drill from the `piece` stage on, with the least recently seen cases (P16, P24).
- *Faulty claims* (`errDrill`) move into the unit drills as the last stage, with a commit before the fault is shown (P18 requires 4). The standalone tile, "Faulty claims" on the subject screen, runs the claims of the finished units of the subject the same way: every claim their `claim` stages ask (the claim worked for the learner there is not asked), in a random order, the learner answering before the fault is shown, then the results screen. Its tries are stored with `context: 'again'` and `mode: 'claim'`. It appears only where a finished unit has claims.
- *Mixed drill* stays. It draws due items first, then single-question and name items from finished units, each with its own subject's generated options, never from a unit the learner has not finished, and is described on screen as spacing and retrieval practice, not as training in telling look-alikes apart (P22 requires 6 and forbids). Its "Lifetime" figure is computed from the practice record (every try with `context: 'mixed'`).
- *Reference* stops re-showing cards. It is generated: the key as a map in fixed wording, and for each outcome its name, plain words, `needs`, other names, named cases and ledger lines, plus `limits`. It is a lookup; it is never scheduled and never counts as review (P16).
- *Search* indexes headings, outcome names, key questions and case text from the new fields.

**E15. Revisions and drafts are shown** (owner; P27 requires 1; R4). A unit shows its revision. While its `status` is `draft`, its row and its top bar say "Draft: not yet read by a newcomer". The deploy script prints the list of draft units and of `wrongIdeas` whose source is not verified, so neither goes in front of a learner unnoticed.

**E16. Look** (P8 requires 1 and 3 and forbids bolding many things; the owner's visual rule). One highlight style for marked words in every subject: `mark.cue`, a low-alpha tint of the accent behind the phrase, text in `--text`, weight 600, no border. Weight 600 is used for nothing else inside a card's text. Key wording quoted in a card is set in the sans face at normal weight, so it is recognisable as the key's voice wherever it appears without a `question` card turning mostly bold. Callouts are a background tint, type weight and spacing only: `.note` and `.warn` lose their coloured top border, and no card or callout has a coloured border on one side. The 11.5px `.tell` style is deleted: a deciding line is body text. Commit prompts and checks reuse `.stepopen` and `.opt`; cases reuse `.passage`; feedback reuses `.vblock` and `.marks`; tables reuse `table.k`; the candidate strip reuses `.cands`; card text stays `.lesson` (17.5px serif).

**E17. No skip test in version 1** (P2 requires 2 **(JC)**). The evidence base makes a "check what you know" shortcut conditional: if one is offered it must be opt-in. Version 1 offers none. A learner who already knows a unit can open its drill from the unit screen (E11); the cards stay the default path and stay open.

**E18. Plan reminder** (P26 requires 4). In action subjects a saved plan is shown back with the next returned set, once, with the option to keep, change or drop it. The plan card is optional and never holds back Next. The learner starts from one of the card's example cues or writes their own two lines ("If I see …", "then I will …") and presses "Save my plan"; nothing is saved before that. The saved plan is `notes[unitId].plan`. `records.js` owns what the returned set needs: `plansToShowBack(subjectId)` lists `[{ unitId, text }]` for plans not yet shown back, `savedPlanText(subjectId, unitId)` returns one plan's text ("If I see …, then I will ….") or null, and `keepPlan`, `changePlan(subjectId, unitId, cue, then)` and `dropPlan` record the learner's choice, each of which stops the plan being listed again (keeping and changing stamp `shown`; dropping removes it).

**E19. Persistence is measured, not assumed** (P28 requires 4 and 5, P27 requires 4). Session starts, completed parts, completed sets and days returned are logged in `pl:log` and shown on the progress screen beside first-attempt accuracy. A "this card confused me" control on every card writes to the same log with the unit's revision. The log stays on the device and can be exported as a file; the site has no backend. **The export is one JSON file, `fieldcraft-log-<date>.json`**: `{ exported, standard, engine, log, subjects }`, where `log` is `pl:log` as it is and `subjects` holds, for every subject, its `items` (the practice record), `seen` (places and done marks) and `notes`. Nothing else the device holds is in it, and nothing in it is derived: it is the stored data, so it can be read back.

**E20. (Removed.)** Units not yet rebuilt, and the old card renderer that showed them, were removed on 2026-10-05 (F5).

**E21. Baseline check** (P26 requires 3c). An action subject lists a few cases in `subject.baseline`, half of them legitimate. They are asked once, before the subject's first unit, as "is something wrong here, or is it fine, and why?": one screen per case, "It is fine" or "Something is wrong", and an optional line of the learner's own words (kept in `notes[unitId].baseline`, on this device). A screen says only that the answer is kept, and nothing about it is shown until the unit is finished: no marks and no right answer are on the page. The tries are stored with `context: 'baseline'` and `mode: 'baseline'`, are never scored or counted by the schedule, and let later accuracy on cases where nothing was wrong against cases where something was be read against where the learner started. A case answered is never asked again, so a learner who stops part-way is asked only the rest. When the unit is finished, its complete screen shows each case, what the learner said, and what it was, with the case's reason for the first question: that is the only place the answers come back. The words say nothing of a story being real or fake, so they fit every action subject (section 22).

## 6. Vocabulary and plain language

**K1. The key is the only place wording is typed** (P5 requires 1 and 5). Outcome names, question text, answer text, the `plain`, `needs`, `purpose`, `why` and `when` lines and each term's meaning exist once, in `key.js`; the one difference between two look-alikes and the question that tells them apart exist once, in the ledger. Cards, checks, drill options, feedback, tables, the recap, the reference screen and the verdict refer to them by token (S5) and are printed from that one copy. A learner therefore cannot meet a question, an option or the line that says what a name needs in different words from the card that taught it, because there is only one copy. This covers the explanation as well as the labels: the line a `meet` card teaches as "what you must be able to point to" is the same data the feedback, the recap and the claim items print (V2 catches a retyped or nearly retyped copy). Drill options that name outcomes or answers are generated, never retyped (V9).

**K2. The key has to earn that place** (P5 requires 5, P4, P9, P27). Before any unit is written against it, each branch of the key is rewritten by this procedure:
1. For each question, write down what it separates: which outcomes sit on each side (from `keeps`). From the old cards and feedback, collect the sentence that actually told them apart (in the old app this was usually in a "tell" or in post-answer feedback).
2. **Every question must do work.** If two answers cannot be told apart from what a case shows, or a question repeats an earlier one, or a question cannot be answered for one of its own outcomes, or no pair of outcomes is first separated by it, the question is **restructured or removed, not reworded**. In a branch of two or more questions, no question may have every answer keep exactly one outcome, because the questions before it would then decide nothing (V55). A branch whose outcomes are each defined by one thing has one question, and says so. (The exemplar's branch went through this twice: the first rewrite kept a first question, "What is the reasoning about?", that separated no pair the second did not; it was removed, and what it sorted survives as the grouping of the unit's parts.)
3. Write the question as a question a person could ask out loud about a case, ending in a question mark. A topic label ("Timing of the conclusion") is not a question.
4. Write each answer as what an observer can point to in a case, in ordinary words. An answer that names a hidden motive or a diagnosis cannot be read off a case and is rewritten. The only technical terms allowed in the key are outcome names and declared `terms`.
5. Give the answers of one question the same grammatical form, so the difference between them is the content.
6. No analogy, metaphor or figure of speech in a question or an answer (P5 forbids, P11).
7. Write `when` for each answer (what the case must show), `purpose` for each question (what it sorts, in terms of the outcomes and never of an example) and `why` (why that distinction decides). Write `needs` for each outcome so that it holds for every case the unit will call by that name, the exceptions included: if a taught case breaks the line, the line is wrong.
8. Where real cases show two answers at once, write the tie-break into the key as data (`yieldsTo` on the answer that gives way, S1), teach it as a named `exception` (P14 requires 3), mark each such case (`also`, S6), and say plainly in the unit that it is the key's decision where the field itself does not draw the line in one place.
9. Check that every outcome can be reached, that each accepted route isolates it (V31), and that sound reasoning has somewhere to go: wherever a learner will meet a case in which nothing went wrong, some answer must fit it, including the case where a person tests their view fairly and keeps it (P25 requires 5, P26 requires 1).
10. Run every existing specimen and drill case against the new wording, one question at a time. Each case must have a defensible answer to every question; where it does not, either the wording is still loose or the case does not show what the question needs. Fix whichever it is.
11. Read the key cold, as a card: every word in it is ordinary or is a target term (P27). Record what changed and why in `build.keyChanges`.
A fault that wording cannot fix (an outcome no route reaches honestly, a kind of case no answer fits) is recorded against the key and settled there. It is never patched in a lesson.

**K3. Codes are ids** (P4 requires 2, P5). `D1`, `R1` and every id are for the data. Nothing shown to the learner contains one, the card kinds included. The lesson never teaches a numbered question that the key does not ask.

**K4. Outcome names** (P4, P5 requires 3, P11 requires 3). A name the learner will meet in real life is a target term and stays; it is what they are learning to use. A name that is only the app's own coinage is put in plain words. A name never holds two names joined by a slash, a bracket, a dash or an arrow (V1). Each outcome has `plain`, a few ordinary words that serve as its label on the preview map and as the heading of the card that introduces it, so the preview and the teaching use the same words; and `needs`, what you must be able to point to in a case before the name can be used.

**K5. Other words for the same thing** (P5 requires 3, P25 requires 2). `aka` lists what else real life calls the outcome, everyday or textbook. It is shown once, on the `meet` card, in a generated sentence ("You may also hear this called ...") that ends by saying which single name is used from then on. This is the owner's own alternative: either stay consistent, or match all the ways of saying it in one place. Elsewhere an `aka` word may appear only inside quotation marks or the marked words of a case, where feedback maps it back to the fixed name (V8).

**K6. Two lists of words** (P4 requires 2 and 3). *Target words* that are not key wording are the key's `terms`, each with a plain meaning. Each has one `term` card (A3), in ordinary words with its case, before the first card that needs it; afterwards it is referred to by `{t:id}`, and it is used again in at least one later card and one drill item (V6). A word that occurs only inside an outcome's name is explained in the sentence that gives the name and is not a term. *Words to avoid* are the key's `avoid` list, each with what to say instead: the old lessons' jargon, and any word the unit's own drafts used for two things. Everything else that is technical is replaced by ordinary words or cut: codes, abbreviations, researchers' names, a second technical word for something already named (P6 requires 2).

**K7. Unit titles** (P1 forbids, P4 forbids). A branch unit is titled with the gate answer it teaches, drawn from the key, so the title is something the learner has already been taught. No unit title is a term the learner has not met, and no two units of a subject share a title.

**K8. Variation lives in the cases** (P5 requires 4, P13, P20 requires 4). Case text is free to use any wording people really use. Feedback maps it back by quoting the marked words and then giving the key's answer. Labels never vary.

**K9. One meaning per word in the lesson's own prose, and one wording for the app's own instructions** (P5, P3 requires 2).
- *The unit's prose.* A unit fixes the everyday words it uses for the things the key asks about and uses each for one thing. Three things in particular have one label each, used on every card of every subject: **"what you must be able to point to"** (an outcome's `needs`), **"how to tell them apart"** (a ledger pair's `test`), and the key's own question for what a case does or shows. A unit does not call these a rule, a provisional rule, a deciding feature, a sign, a mark or a test to take away; those words go on the `avoid` list.
- *The app's words.* "unit" (never "lesson"), "question", "answer", "name" (the learner's word for an outcome; "outcome" is for maintainers), "case", "card", "part" (a group of cards with a stopping point), "the drill", "stage" (a rung of the drill). Authored text does not use "lesson", "rung" or "this screen" at all (V50), and does not call a question a "step".
- *Maintainers' words never shown* (revised 2026-10-05, after the owner's cold read found "the key" opaque). The names this standard uses for the lesson machinery are for maintainers and the data only. A learner never reads them outside a case's own story or a quotation; the shared list `tests/plain-words.mjs` is checked by V50 on every unit, key line and subject record, and by the browser tests on every screen as shown. Say instead:
  - "the key" (a subject's set of questions) → "the questions", or name the question meant; "the key's first question" → "the first question"; "the key's answer" → "the answer"; "the key asks" → "the question is"; "in the key's own words" → leave it out;
  - the key's tie-break ("the key decides", "the key gives") → "when a case shows both, the answer is …";
  - "key question" → "question"; "key" meaning important → "main";
  - "route" (the answers given on the way to a name) → "your answers on the way"; "right name, wrong route" → "right name, wrong answer on the way". No unit teaches "route" as a word;
  - "gate", "gate question" → "the first question"; "branch" → "the questions for that kind of case";
  - "family" (an answer to the first question, in a gate unit) → "kind";
  - "specimen" → "case"; "determination" → "Name a case"; "ledger" → leave it out.
  Where one of these words is ordinary English in a subject (a bank's branch, a house key), use another word in authored text; a case may say anything.
- *The app's instructions.* Every sentence that is the same in all units is worded once, by the app: headings of `again`, `portrait` and `lookalike` cards, the labels inside a card ("What you must be able to point to", "The key asks", "How to tell them apart", "Does it look like a case you know?"), the stem of every commit prompt (E3), the drill's opening and every stage instruction (E6), the part-end line, and the stakes line. The stakes line is one sentence wherever it appears: "Nothing here is graded. A miss only decides what comes back."
- The validator catches the listed words (V50). It cannot check that a unit's everyday words each mean one thing; the cold read does (A14).

### The worst wording the audits found, and what the rules do to it

The Psychology rows are the real rewrite used by the exemplar. For the other subjects the left column is quoted from the audit and the right column is the rule that applies; the final wording is written when that subject's key goes through K2.

| Before (as the learner met it) | After | Rule |
|---|---|---|
| Psychology step label "R1 · Timing of the conclusion" | removed: timing could not place confirmation bias, and no rewording of a first question separated any pair the second did not | K2.2, K3 |
| Psychology step label "R2 · What gives, to relieve it" | "What does the reasoning do?" (the branch's one question) | K2.3 |
| "A justification is added; belief and behavior stay the same" | "Adds a reason why what they did is fine after all" | K2.4, K2.5 |
| "New evidence gets scrutinized harder than confirming evidence" / card: "asymmetric scrutiny" | "Tests evidence against their view harder than evidence for it" | K2.4, K6 |
| "The conclusion was never really in doubt" (an answer that repeated the question before it) | "Chooses the answer first, then searches for support" | K2.2, K2.4 |
| "The belief itself updates, without defensiveness" | "Gives every fact the same test, and goes where the facts point" | K2.4, K2.9 |
| Outcome "Genuine belief revision (not a bias)" | "Fair reasoning" (you may also hear: keeping an open mind); it covers a view fairly tested and kept as well as a view changed | K4, K2.9 |
| Outcome "Sunk cost / escalation of commitment" | "Sunk cost fallacy" (you may also hear: throwing good money after bad; escalation of commitment) | K4, K5 |
| Gate answer "A mind justifying itself" (five wordings across the app; does not fit fair reasoning) | "One person's reasoning" | K2.4, K9 |
| "Add a justifying cognition"; "Cognitive dissonance (Festinger): the discomfort of holding two contradictory cognitions" | a card for the feeling, case first, then the word; then a case of the excuse; then the name | A3, K6 |
| "D2 satisfied", "Run D2 before you reach for any label" (D2 is not a question the key asks) | removed; the lessons teach the key's own questions and no others | K3 |
| "Tell: histrionic wants an audience. Narcissistic wants a mirror." (11.5px type) | not a wording fix: a case of each, the two side by side, the key question, a check | A3, A5, A8, E16 |
| Six wordings of "nothing here" ("Traits only", "Insufficient evidence", "Not a tactic", "a hard moment" ...) | one outcome name per branch, one meaning, reachable from the gate | K4, K2.9 |
| Ideology: "Private + heavy redistribution"; "Race or identity, egalitarian valence"; "primary unit of analysis" | an answer an observer can point to; the question asked out loud ("Whose side is this text on?" is the audit's suggestion) | K2.3, K2.4 |
| Statistical Claims: "frame", "n", codes "S1 / A1 / M2 / K1" | ordinary words ("who was invited"); codes never shown | K2.4, K3 |
| Scams: "What story carries the ask" (asked straight after the unit said to ignore the story); option rows labelled G1 to G4 | a question that agrees with what the cards taught; no codes | K2.2, K3 |
| Wealth Preservation: "realise", "basis", "callable", "the cost of the wrapper"; lesson codes P1 to P4 that collide with the key's P1 | each either declared as a term and taught on its own card, or replaced ("sold" / "not sold") | K6, K3 |
| Civics: "enumerated", "preemption", "advice and consent"; "franchise", "suffrage" and "ballot" for one idea | the everyday case first, then the term once; one word for one idea | A3, K6, K9 |
| Basic Math: "tool / question / method / rule" for one thing; "factor" as divisor and as multiplier | one name per thing; two names where there are two things | K9 |
| Every subject: "What would falsify this reading" | "What would make it a different name" | E13 |
| Every subject: "Unit One" in the interface, "Lesson 2" in the text | "Unit" everywhere | K9 |

## 7. Writing rules for explanations

**W1. Completeness, not length** (P3, P4, P9, P10, P11, P12, P13, P14, P5, P15, P16; evidence base section 5). The test for the explanation of one idea is the list below. Whatever applies must be present, spread over the cards of section 3, never packed onto one. An explanation gets as much room as understanding needs: an idea that needs two paragraphs gets two paragraphs, and an idea that needs three cards gets three (a chain, S4). The same holds for feedback: every feedback field is `Text` and takes the paragraphs it needs.

| An explanation must contain | Where it lives |
|---|---|
| The link back: why this idea follows the last | `link` on every card |
| One concrete case showing the feature, with the deciding words marked | `meet` |
| How to recognise it: what you must be able to point to, in general words | `meet.strip`, then `needs`, printed from the key |
| The idea in ordinary words, then the name; a word the idea leans on gets its own card first | `meet.explain`, then `meet.name`; `term` |
| A second case in a different story | `again` |
| What the outcome is like in general, with its exceptions | `portrait`, `exception` |
| The nearest neighbor, the exact difference, and the question that tells them apart | `lookalike`, the ledger (`rule`, `test`) |
| What it decides in the key: which question, which outcomes each answer keeps and rules out | `meet.feature`, `question` |
| What a result means ("so you can rule out X") | `question`, `worked` |
| The other names real life uses | `aka` on `meet` |
| What to do with it: the question to ask when you spot it | `portrait.ask`, the recap |
| A check, so the explanation is used | `check` after each outcome and each question |

**W2. Sentences** (P3 requires 1, 2 and 6, P4 requires 1, P7 requires 5). Every card except `orient` and `check` opens with a link line. Each "this" and "it" has one referent. The learner is "you". A term is used only after the card that introduces it; when a later card relies on an earlier definition it repeats the definition in a line. Nothing points forward to a later card or unit for something the learner needs now. After the card that introduces a name, headings use the name. The two cases on a `lookalike` card are called Case A and Case B in its text, as they are labelled on the card. A because-chain is never split into short sentences with the "because" deleted (P4 forbids).

**W3. Every sentence has a job** (P6 requires 1 to 3, P14 forbids, P11 requires 4). The jobs are: define, explain why or how, connect to an earlier card or to a key question, illustrate, separate from the nearest neighbor. A sentence with none of these is cut, however short. **What is cut:** anecdote, trivia, history, name-dropping (a researcher's name the learner will never use), jokes, a detail in a case that is more vivid than the deciding words, chatty filler, a second synonym for a term already taught, a point already made on the same card. **What is never cut to save room:** a connecting step, a definition, a case, a near-miss, an exception. A card whose teaching is "slow down" or "watch for bias" is not a card. An analogy or comparison in a card says what stands for what and where the likeness stops; one that does neither is cut (the old "wants an audience, wants a mirror" line failed exactly this).

**W4. How long is long enough** (evidence base section 5; P27, P3, P6, P7, P17). Length is an output, not an input.
1. A person with no background reads the unit cold, says in their own words what each card said, and passes the check on a new case.
2. If they cannot, the explanation is missing something. Add it. Do not add drill repetitions instead.
3. If a card makes two points, split it at the boundary between them. If it makes one point and runs past a screen, it scrolls, or continues on the next card with a line restating what the previous card established (`continues`, S4). It is never shortened to fit.
4. If a sentence has no job, cut it.
No rule in this standard, in the validator or in review may take the form "under N words", "at most N cards" or "fits one screen" (P6 forbids, P7 forbids, V29).

**W5. Cases** (P11, P13 requires 1 to 5, P25 requires 1 to 3 and 5, P26 requires 1, P8 requires 1).
1. A case is something a person could say or a short account of what they did, in the form real life uses: a remark, a message, a decision described.
2. For every key question an item asks, the case contains the words that decide it, and those words are its `cues`. If no words can be marked, the case cannot be answered and is rewritten.
3. Each case has a `tier` (clean, varied, misleading), a `setting` (one of the subject's fixed list of areas of life, so that "a different setting" is something a script can check) and a `topic` (its story in a few words). Inside a unit the cases run clean first, then the same feature in a different setting, then cases whose story misleads. Messy cases the learner should remember have a `name`.
4. No case appears twice as a question. A case shown in a card is never used in the drill, and no two cases of one outcome in a unit, nor a specimen of that outcome, share a `topic` (V52). An `exception` card may return to a case the learner already knows, to read it again for a different reason.
5. Stories move across areas of life (work, family, money, health, leisure) while the deciding feature stays the same. In rule-based subjects (Statistical Claims, Basic Math, Scams) a rule is taught in two areas of life and drilled in a third.
6. Subjects made of errors or frauds mix in cases where nothing is wrong, in every drill.
7. People, firms and studies in cases are invented and generic. A case does not assert a contested fact about the real world.
8. A case that shows two of the key's answers at once says so in data (`also`), and the key says which wins (K2.8). A case meant to be clean shows one.

**W6. Feedback and choices** (P18 requires 1 to 3, P19, P20 requires 1 to 5, P13 requires 3, P21 requires 1, P15 requires 2).
- `reason` gives the structural feature and quotes the marked words with `{cue:STEP}`; it does not retell the case. It is written for every question the case can be asked, the first question of the key included (S6). `not` names the nearest wrong name and says why it fails for this case. No praise, no "not quite", no exclamation, no comparison with anyone.
- The rule that separates a ledger pair is written once, in the ledger, never per item.
- In classification questions the choices are the key's own answers or outcome names; in a claim item they are the key's own `needs` lines or the key's answers. In a `reason` commit prompt every choice is a true statement about the case and exactly one is the deciding one. In a reverse item every choice is what one of the taught outcomes sounds like. The learner is never asked to pick out a false statement.
- A wrong idea appears in a card only on a `refute` card, marked wrong, with the correction last.

**W7. What the app may claim** (P25 forbids). Blurbs, `canDo` lines and recaps promise a task on cases of this kind. Nothing says a unit improves thinking in general.

**W8. Later units restate, they do not thin** (P2 requires 1 and 3, P3 requires 2). A unit that relies on an earlier question has it printed on its `orient` card from the key, every answer with when it is given, with a link to the card that taught it (A1, E2; P2 requires 3: the full explanation is one tap away). An earlier term is restated in a line where it is next used. Anything new to the learner is written in full. A later unit may always re-explain an earlier link at greater length when the new material leans on it.

## 8. Validator rules

For `tests/validate-data.mjs`, which already loads the subjects in node and walks each key. Its existing checks (duplicate ids, `keeps` point at real outcomes, gate groups, every outcome isolated by some route, specimen routes) stay. Each rule is machine-checkable as stated and fails the run naming the unit, card and field. None limits the length of anything; every count below is a minimum. Rule numbers are stable: a number that is retired is not reused.

**What the exemplar's checker does and does not prove.** `tools/check-exemplar.mjs` (with `check-vocab.mjs` and `check-structure.mjs`) implements the rules marked ●, written to this section's wording, and the exemplar passes them. It is the exemplar's own copy and a subset: rules without ● are stated here and not yet coded. Each ● rule except V29, V47 and V55 was seen to go red on a fault seeded for it in a scratch copy of the exemplar (47 rules); V2, V35 and V46 also caught real faults while the exemplar was being revised. V29, V47 and V55 have only been seen to pass. In F6 step 1 every rule is written into `tests/validate-data.mjs` from this text, each with a committed seeded-fault fixture that must go red, because a guard is not coverage until it has been seen to fail.

**Where the rules live now.** They are written in `tests/lessons/`, run by `npm run test:lessons` (part of `npm test`) on the app's own data, and each has a seeded-fault control that must turn exactly its own rule red (`tests/lessons/negative-controls.mjs`; the exemplar in `docs/lesson-standard/exemplar/` is the baseline for a classification unit). A fact unit, a procedure unit and a gate unit have no exemplar yet, so their kind-specific rules are shown on the fixture units of `tests/fixtures`, each against the rules it meets (`tests/lessons/kind-fixtures.mjs` lists them, and says why a fixture does not meet the others). The rules of a gate unit are written only as far as V0, V10, V25 and V38; V11 to V15, V20 to V24, V35, V39 and V44 for families are not written yet.

**Which rules apply to which kind of unit.** A rule applies to every unit of standard 1 unless this table says otherwise.

| Rules | C, branch unit | C, gate unit (A15) | F, fact unit | P, procedure unit |
|---|---|---|---|---|
| V0 to V9, V50; V26 to V29; V30, V32, V33, V35, V36; V45 to V47 | apply | apply (read "family" for "outcome") | apply | apply |
| V10, V11 to V15, V20 to V25, V51, V52 | apply | apply | V10, V25 to V27 only; `concept` then `facts` then a check per group | apply, with `solved` in place of `worked` |
| V16, V17, V55 (question cards) | apply | apply to the gate question | do not apply | apply |
| V18, V54 (worked cases, echo) | apply | apply, one question long | do not apply | two `solved` cards per procedure |
| V31 (routes isolate) | apply | the route is the gate answer | does not apply | apply |
| V38 to V44 (drill) | apply | stages `piece`, `route`, `claim`; V39 and V44 per family | one stage `fact`; every row asked; every row returns | stages `last`, `whole`, `route`; V40, V41, V44 apply |
| V37, V53 | where `subject.action` / where the key has a tie-break | the same | do not apply | do not apply |
| V57 | does not apply | does not apply | applies | does not apply |

**Shape**
- V0 ●. Every subject, key, unit, ledger entry, card, case and specimen matches its S1 to S6 shape exactly: required fields present and not empty, no unknown field, every enum value valid (`kind`, `status`, `use`, `tier`, `ask`, a check's `type`, a prompt's `kind`), ids unique within the subject (case ids included), and every id referred to exists. Because the shapes hold no form for it, this rule also guarantees that no check asks more than one question (formerly V19), that a card introduces at most one new name, and that every tap prompt names its answer. (S4 "the shapes are exact"; P10 requires 5; P4 requires 3)

**Vocabulary**
- V1 ●. Every outcome has `n`, `plain`, `needs`, `aka`, `group`, `unit`; every step has `q` ending in "?", `purpose` and `why`; every option has `n`, `when` and `keeps`, and any `yieldsTo` names an answer of the same question and has `say`. No two outcomes and no two options of one step share `n`. No `n` contains `/`, `(`, `[`, ` - `, an en or em dash, or `→`. `subject.settings` lists at least three areas of life. (P5, P9, K2, K4)
- V2 ●. No authored text in the subject (cards, cases, the ledger, the unit record's prose, the subject record, specimens, an earlier unit's cases) contains a line of the key as literal text: an outcome's `n`, `plain` or `needs`, a step's `q`, `purpose` or `why`, an option's `n` or `when`, a term's `n` or `means`. The comparison ignores capitals and punctuation. Nor may one sentence contain three quarters or more of the distinct words of four letters or more of any such line that has at least six of them (a near-copy), unless the line is there by token. The quoting fields of S5 are exempt. (P5 requires 1 and 5; K1)
- V3 ●. Every token resolves; `{cue:STEP}` appears only where S5 allows, in a field belonging to a case that has marked words for that step; there is no token of an unknown kind. (P5)
- V4 ●. No learner-facing text contains a step code, or an id that is not an ordinary word (one containing a digit, `_`, `-` or `~`). (K3, P4 requires 2)
- V5 ●. Shown before asked: walking a unit in learner order, every answer and outcome name used as a prompt or an option by a check, a commit prompt or a drill item has been taught by an earlier card (the `meet` card of an outcome it keeps, its `question` card, or an assumed unit); a `{q:}` token appears only where S5 allows; and a `step` check comes only after its `question` card. The `orient` preview does not count as teaching. (P5 requires 2, P3 requires 6, P12, P16 forbids, P27 requires 1a)
- V6 ●. Used after taught: every outcome in `teaches` and every answer of every taught step is the right answer of at least one check or drill item; every term in `teaches` has exactly one `term` card, is used by token on a later card, and is used by token in at least one drill item or in the key. (P5 requires 2, P4 requires 2)
- V7 ●. No `{t:}` or `{means:}` before that term's `term` card; no `{o:}` or `{needs:}` before that outcome's `meet` card (the `orient` card excepted). (P4 requires 1 and 3, P7 requires 5)
- V8 ●. `aka` strings appear in no authored text outside the quoting fields of S5 (they are printed only by the `meet` card). (P5 requires 3)
- V9 ●. No check or drill item carries its own list of names or answers; `among` holds option ids only. (P5 requires 1, P18 requires 1)
- V50 ●. No authored text outside the quoting fields contains, as a whole word or phrase, an entry of `key.avoid` or one of the app's own words to avoid (K9: "lesson", "rung", "screen", "provisional", "deciding feature"). (P4 requires 2, P5, K6, K9)

**Anatomy and order**
- V10 ●. The first card is `orient`, with `canDo`, `everyday` and a `map` of a real branch. (P1 requires 1, P2 requires 1)
- V11 ●. Each outcome in `teaches.outcomes` has exactly one `meet` chain, then an `again`, then a `portrait`, then a `check` with `after` set to it, in that order and before any `lookalike` or `exception` that involves it. (P11 requires 1, P12 requires 1 and 3, P14 requires 1, P16 requires 2, P22 requires 1)
- V12 ●. A `meet` card has no typed heading; its case is `clean`; `strip` has at least two entries; `feature.option` keeps its outcome; `name` contains `{o:<its outcome>}`. (P11, P13 requires 2, P4 requires 1)
- V13 ●. An `again` card's two cases both have its outcome and differ in `setting`; it has `instruction` and a `phrase` prompt. (P12 requires 1a and 2, P13)
- V14 ●. Every taught outcome is in at least one `lookalike` card; the card's two cases belong one to each outcome of its ledger entry; it has `instruction` and a `which` prompt whose answer is one of its cases; it comes after both outcomes' checks. (P12 requires 1b, 2 and 4, P15)
- V15 ●. For every two outcomes that some answer of a step the unit teaches keeps together, a ledger entry exists. For each entry, `step` is the first taught step on which the two outcomes have no answer in common; `rule` contains both outcomes as tokens; `shared` and `test` are present and `test` contains no outcome token; and the entry is named by a `lookalike` or `exception` card, or has a `taughtIn` card that comes after both `meet` cards and names both outcomes. (P12, P22 requires 2, P30 requires 2, P3)
- V16 ●. Every step in `teaches.steps` has one `question` chain with `decides` and `how`, placed after at least one `meet` card for an outcome kept by each of its answers, and followed by a `check` with `after` set to the step before the next `question` or `worked` card. (P9 requires 1 and 4, P16 requires 2)
- V17. No step's `purpose` contains a whole word of any `topic` used by the unit's cases. (P9 requires 2)
- V18 ●. At least two `worked` cards sit after every `question` card and before the drill; the first one's case is `clean` and the last one's is `misleading`. Each card's `steps` are, in the key's order, every question on its case's route; each has a `reason` and marked words. `hold.neighbor` shares a ledger entry with the case's outcome, and `hold.prompt` is a `reason` prompt with exactly one answer and a note on every other choice. `impression.resembles` is a named teaching case of the same outcome; `impression.first`, required on the last worked card, is a named teaching case of a different outcome. (P10 requires 1 to 3, P13 requires 2, P8 requires 1, P15, P14 requires 4)
- V19. Retired: the check shape has no form that asks more than one question, so V0 enforces it.
- V20 ●. No two `meet` or `question` chains occur without a `check` between them. (P16 requires 2)
- V21 ●. The `link` of the card after a check contains neither the check's right answer as a token nor its marked words. A script can see only those two; whether the link gives the answer away in other words is on the cold-read sheet. (P16 requires 3)
- V22 ●. A `refute` card has `idea`, `verdict` and `right`; every id in `testedBy` is a drill item; `build.wrongIdeas` has a source for it; it is not in the first three cards; and the source is `verified` before the unit's `status` is `live`. (P29, P18 requires 3 and 5)
- V23 ●. An `exception` card's `looksLike` and `is` are the two outcomes of its ledger entry, its case's outcome is `is`, and it has a `phrase` prompt. (P14 requires 3, P13 requires 4)
- V24. A card with `continues` names the card directly before it, of the same kind and the same outcome or step. (P7 requires 3)
- V25 ●. The last part holds the drill and closes, after it, with `recap` then `transfer` (a fact unit: `recap` only); `transfer.prompts` covers every taught outcome (every family in a gate unit). A `plan` card closes the unit if and only if `subject.action` is true, and has `optional: true`. (P6 requires 5, P25 requires 4, P26 requires 4)
- V26 ●. Every card belongs to exactly one part, and `parts` lists every card once. (P28 requires 2)
- V27 ●. Every card except `orient` and `check` has a `link`. (P3 requires 1)
- V28 ●. No text field names a later unit or matches a forward-pointer pattern ("later card", "next unit", "in Unit <later>", "you will meet this in", "Lesson <n>"). The list is English phrasing and will miss others ("further on", "when you reach"): the cold read owns forward pointers, and this rule catches the common ones early. (P3 requires 6, K9)
- V29 ●. The validator's own source contains no comparison that puts an upper limit on a count of words, sentences, paragraphs, characters or lines, and no "max" setting for one; a test reads the source and fails if it finds one. (P6 forbids, P7 requires 2)
- V51 ●. Exactly one `lens` card, after the first `again` card and before the second `meet` card. (P13 requires 1)

**Cases and feedback**
- V30 ●. Every marked phrase and every `segments[].text` is an exact substring of the case's `text`. A case has marked words for every question it can be asked (S6: the unit's own questions for `check`, `name`, `piece` and `finish` items; every question on the route, the gate included, for `route` items, return cases and specimens). For a "tap the words" prompt, exactly one segment contains the answer, and every other segment has a `note`. (P8 requires 1, P20 requires 1)
- V31 ●. A route covers the gate and the branch's questions; every accepted combination of answers leaves exactly the case's outcome. (P21; existing check, kept)
- V32 ●. No case with `use` `teach` or `check` is listed in the drill or in `returns`; every case listed there exists and has `use` `drill`, `return` or `claim`; every case is used by something; no two cases have the same `text`. (P13 forbids, P16)
- V33 ●. Every case's `setting` is one of `subject.settings`. For each taught outcome, its cases across all uses span at least three settings. (P13 requires 1 to 3, P25 requires 1 and 3)
- V34 ●. Each outcome's `meet` case is `clean`; a `misleading` case appears in a card only after that outcome's `check`, and in the drill only in the `route` stage. (P13 requires 2)
- V35 ●. Every case has a `reason` for each question it can be asked (as in V30), containing `{cue:<that step>}` (a "tap the words" check quotes the tapped piece itself and is exempt), and every case that can be asked for its name has a `not` whose outcome is a ledger neighbor of its own. A `reason` prompt has exactly one answer among its choices and a `note` for every other choice. (P19 requires 1 and 3, P20 requires 1 and 3, P18 requires 2, P15 requires 2)
- V36 ●. No feedback field begins with, or consists of, praise or a bare verdict ("great", "well done", "good job", "not quite", "oops", "correct", "incorrect"). (P20 requires 2)
- V37 ●. In an action subject the key marks at least one outcome or gate answer `legit: true`, and every drill stage of a branch or gate unit that asks about cases (`reverse` items and claims apart) contains at least one case whose name is marked `legit`. The app enforces the same rule when a drill starts (E6); the validator catches it before a learner can. Fact and procedure units are not held to it. (P26 requires 1)
- V52 ●. Within a unit no two cases of the same outcome share a `topic`, and no specimen shares a `topic` with a unit case of the same outcome. A script can only catch a repeated label; whether two stories are really different is on the cold-read sheet. (P13 requires 3, W5.4)
- V53 ●. Every answer a case lists in `also` loses to one of the case's own answers by a `yieldsTo` in the key. (P20 requires 3; K2.8)
- V54 ●. At least one `route`-stage case has `echo`, and every `echo` names a named teaching case of a different outcome. (P14 requires 4, P27 requires 5)
- V55 ●. Every taught step is the `step` of at least one ledger entry, and in a branch of two or more questions no step has every answer keep exactly one of the unit's outcomes. (K2.2; P9 requires 1)

**Drill**
- V38 ●. Stages come in the order `name`, `piece`, `finish`, `route`, then `claim` last when there is one; each stage that exists has at least one item. (P17 requires 1 to 3, P16 requires 5, P18 requires 4) The stages of the other kinds: a gate unit `piece`, `route`, then `claim` last where there is one; a fact unit `fact` only; a procedure unit `last`, `whole`, `route`.
- V39 ●. Every taught outcome is the answer of at least one `name` item and at least two `route` items, and has one reverse item in the `piece` stage; every taught step is asked alone at least once in the `piece` stage. (P17, P16 requires 5, P14 requires 2, P27 requires 5) A fact unit: every row of its `facts` cards is the `{ fact }` item of the `fact` stage once. A procedure unit: every taught procedure is the problem of at least one `last` item, one `whole` item and two `route` items, and every item of those stages is a problem.
- V40 ●. In the `name`, `finish` and `route` stages, items are authored in groups; each group of cases has at least two, is of one tier, and is connected by ledger entries (every case shares an entry with another case of the group, and the group cannot be split into two parts with no entry between them); groups are listed clean, then varied, then misleading. (P22 requires 2 and 5, P13 requires 2)
- V41 ●. A unit that assumes an earlier unit has at least one `earlier` item naming a unit it assumes, with no fixed case. (P22 requires 3 and 4, P22 forbids)
- V42 ●. The `piece` stage has at least one `tell` item, for a ledger entry that has a card of its own. A `separator` item, where a unit has one, names a pair that exactly one of the unit's questions separates. (P9 requires 4, P16 forbids an item that cannot be answered from what was taught)
- V43 ●. A claim has `ask` (`missing` with a taught outcome, or `option` with a real answer), `fault` and `corrected`. The `claim` stage has a `demo` claim that is not also asked. (P18 requires 4, P10 requires 5)
- V44 ●. `drill.returns` holds, for each taught outcome, at least as many cases as E9 schedules returns: three, and four in an action subject. (P24 requires 1, P13 requires 5) A fact unit holds no cases for later days (a fact returns as its row), and the two rows of each ledger pair are asked in one group of the `fact` stage, so the pair can come back together (E9).

**Revisions and files**
- V45 ●. `unit.rev` and `subject.rev` are integers of at least 1; `build.history` and `subject.history` hold exactly one entry, with a date and a change, for every revision from 1 to the current one; `unit.standard` and `subject.standard` are from 1 to `FC.STANDARD`; `status: 'live'` requires `build.signoff.coldRead` with `reader` `novice` or `near-novice`, a `date`, `restated: true`, `drillAttempted: true`, and `rev` equal to the unit's revision or every later revision listed in `signoff.since`. (owner; P27 requires 1b)
- V46 ●. The lock check of R5. (owner; P27 requires 3: results must be attributable to the text that produced them)
- V47. Every `.js` under `public/app/` and `public/subjects/` is in `index.html`'s script tags and in `sw.js`'s `SHELL`, and the three lists are equal; no file exceeds 800 lines (● for the line count). (owner; P28: the app works offline, so stopping and resuming is free)
- V48. Removed on 2026-10-05 with the old card format (F5). It held the committed list of `standard: 0` units to shrinking, and required every unit named in `assumes` to be of standard 1; with no unit of standard 0 there is nothing for it to hold. V0 now requires every unit in `subject.units` to have a unit record, so a unit a subject lists is always one the app can run.
- V49. `drill.key` is unique within its subject. (owner)
- V56. No two units of a subject have the same title. (K7)
- V57 ●. A fact unit is a `concept` card followed by the `facts` card that names it, and every row of a `facts` card has its own `check` after the card (`ask: { type: 'fact', row }`); no two rows of one card have the same `a`. (A12; P16, P19)
- V58 ●. A finding that the validator reports on data the project has not yet been allowed to change may be held in `tests/lessons/held-findings.json` with the reason. The list may only shrink: an entry that no longer fires has to be removed, and an entry that was not in the list of the last commit is refused. It is a record of work not done, not a way to pass: the final report of every pass names what is held. (owner)
- V60. Every string a learner can read, case stories included, is American English with dollars: no form on the list in `tests/american.mjs`. The reader is moving to the United States; the browser tests check the same list on every screen as shown. (owner)
- V59. In an action subject every `portrait` of a branch or procedure unit has `act`, what to do when you meet it; the recap prints it beside `ask`. (P26; section 11, Scams: the counter-move per pattern)

**Checks that run in the browser** (for `tests/e2e.mjs`):
- X1. A card has no timer and never advances by itself (P7 requires 4).
- X2. A check or commit prompt has no feedback or model text in the page before a choice is made (P15 requires 3, P16 forbids).
- X3. At 360px no card scrolls sideways and no text is cut off (P7 requires 3; owner).
- X4. On a captured copy of real `pl:` progress, the migration of E8 produces the stated outcomes: a unit finished under the old lessons shows "Rebuilt: start again" and is not counted as done, any other old mark is dropped, a subject whose unit count changed maps through its `units` list, and running the migration twice changes nothing (owner).
- X5. After a scripted session through a unit, a drill, a returned set and the Mixed drill, the `pl:` keys in storage are all in the list in E8; no revision is read from a label (owner; P24 requires 1).
- X6. A `draft` unit shows the draft line on its row and its top bar, and every unit shows its revision (owner; P27).
- X7. Cold start on a mid-range phone profile is measured once the first whole subject is in standard 1, and again per subject. The exemplar unit is about 135 KB in fourteen files; at that density the app is several megabytes in a few hundred classic scripts, all parsed and frozen at launch. If the measured time is poor, a subject's files load when the subject is opened, and F2 is changed to say so (owner).

**What no script can check, and who checks it instead:** that a novice can restate a card; that every choice of a `reason` prompt is true; that a `reason` reasons instead of retelling; that a unit's everyday words each mean one thing; that two cases with different `topic` labels are really different stories; that no sentence points forward in words V28 does not list; that the answers a case lists in `also` are all the answers it really shows. These are on the cold-read sheet (A14), not in the validator (P27 requires 1).

## 9. File layout and migration

These are engineering constraints set by the owner (static site, no build step, no dependencies, works offline, files under about 800 lines, existing `pl:` progress keeps working). They cite a principle only where one applies.

**F1. Layout.** Subject data, the engine and the styles leave the 4,500-line `public/index.html`.

```
public/
  index.html                         the shell: markup and the <script> tags, in load order
  app.css                            the existing styles, moved out, with the E16 changes
  app/registry.js                    FC.subject / key / unit / cards / cases / specimens (deep-frozen)
  app/<concern>.js                   the engine, split by concern (state, key walk, text and tokens, cards, checks and commits,
                                     feedback, drill, returns, screens), each file under 800 lines
  subjects/<subject>/subject.js      the subject record (S1)
  subjects/<subject>/key.js          outcomes, terms, gate, branch questions: the one vocabulary (S1, K1)
  subjects/<subject>/u<N>.unit.js    the unit record: meta, ledger, parts, drill, build notes (S2, S3, S6)
  subjects/<subject>/u<N>.cards-<k>.js   the unit's cards, in as many files as their length needs (S4)
  subjects/<subject>/u<N>.cases-<use>-<k>.js   the unit's cases, by use: teach, drill, return (S6)
  subjects/<subject>/specimens.js    specimens for the full determination (S6)
  sw.js                              SHELL lists every file above
tests/
  lessons.lock.json                  unit id -> revision and content fingerprint (section 13)
  validate-data.mjs  load-app.mjs  e2e.mjs
```

**F2. Loading.** `index.html` lists every file in an ordinary `<script src>` tag: the registry, then for each subject its `subject.js`, `key.js`, each unit's files in unit order and `specimens.js`, then the engine. `public/sw.js` lists the same paths in `SHELL`, and its cache name changes on every deploy, as now. `tests/load-app.mjs` reads the `src` values out of `index.html` and evaluates the same files in the same order, so the list is written once and checked once (V47). The order in which files load never decides the order of cards; `unit.parts` does.

**F3. File size.** Every file stays under 800 lines. A unit that outgrows a file adds another `cards-<k>` or `cases-<k>` file; nothing is shortened to fit a file (P7 requires 2).

**F4. One registry, frozen.** Data files only call the registry. They never read or change each other, and the registry returns new frozen objects (the project's immutability rule).

**F5. The old card format (removed 2026-10-05).** While the subjects were being rebuilt, a unit not yet rewritten kept its free-text cards, registered whole by `FC.legacy` as `standard: 0`, `rev: 0`, and an old card renderer, with its quick drills, faulty-claims drill, old determination, old reference sections and old progress counters, showed them; the list of `standard: 0` units was committed and could only shrink (V48). Every subject is now rebuilt and every old data file is deleted, so all of that was deleted too, with no compatibility layer left behind: `FC.legacy`, the old screens (`public/app/lesson.js`, `drills.js` and the old branches of the others), `quickDrills`, `errDrill`, the standard-0 list and V48, the standard-0 allowances in the validator (V45, V47, the registry and the fingerprint), the mixed-standards test fixture, and the written card pattern. Every unit is registered at standard 1 and runs on the one engine (`public/app/lessons/*.js`). What stays is the migration of old progress (E8), because progress saved under the old lessons can still be in a browser's storage. The old data can be read in git (`docs/HANDOFF.md`, section 5).

**F6. Migration order** (done; kept as the record of the order the rebuild followed). Each step was its own commit, and the tests passed at every step.
1. **Tests first.** Write the section 8 rules into `tests/validate-data.mjs` from the text of that section (they apply to units of standard 1, by kind), each with a seeded-fault fixture that must go red; add the lock tooling (`npm run lock`, R5, with its history check), and the browser checks X1 to X6. Capture a snapshot of real `pl:` progress as a fixture for X4.
2. **Split the files with no change in content.** Styles to `app.css`, engine to `app/*.js`, each subject's data to `subjects/<id>/` in the old shapes as `standard: 0`, script tags and `SHELL` updated, `load-app.mjs` reading the tag list. Every subject gets `rev: 1` as a real field and the label parse is deleted (R1). Existing tests and old progress still pass.
3. **Build the engine for standard 1** beside the old renderer: registry, tokens, each card kind, commit prompts, checks, feedback assembly, the five stages, the close phase, results, the practice record and returns, the revision display, the reference screen as a generated map.
4. **Psychology's gate and Unit One are rebuilt first, and Unit Two goes live with them.** The gate goes through K2; Unit One is built as the exemplar of a gate unit (A15) and read cold; Unit Two comes from the exemplar files (section 10), with the five reasoning specimens re-keyed. No branch unit is of standard 1 before its subject's gate unit is, because a branch unit opens by restating what the gate unit taught, in the key's new words, and its drill asks the gate question. The owner reads both units cold; this is the first comprehension check (A14) and the decision point on the worklist.
5. **Psychology, the rest**: the other branches, each key branch through K2 before its unit is written.
6. **Then one subject at a time, in an order that proves each remaining part of the standard early:** Scams & Social Engineering (the first action subject: legitimate twins, the plan card, the late return); Basic Math (the first procedure units, built as the exemplar of that kind); US Civics & History (the first fact units, built as the exemplar of that kind); Statistical Claims; Wealth Preservation; Political Ideologies (last, because its key needs the largest restructure). The first unit of each new kind (action subject, procedure, fact) is read cold and its shapes in S4 and S6 confirmed before the rest of that subject is written (A12). Within a subject: key through K2; Unit One; branch units in key order; faulty claims folded into unit drills; specimens re-keyed and rewritten as new cases; then the subject's old data file is deleted.
7. **Every rebuilt unit**: validator green, lock updated, `status: 'draft'`; a cold read by a novice or near-novice; then `status: 'live'`. A unit's first-attempt accuracy and "this card confused me" reports are read against its revision from then on (E19).

## 10. The exemplar

Psychology Unit Two, rebuilt to this standard as real, complete content, is in `docs/lesson-standard/exemplar/`, laid out as F1 prescribes:

- `public/app/registry.js`: the registry (F4).
- `public/subjects/psychology/subject.js`: the subject record, `rev: 1`, with its fixed list of settings and its history.
- `public/subjects/psychology/key.js`: the vocabulary. The gate as far as Unit Two prints it; the five outcome names of the reasoning branch with their `plain`, `needs` and `aka` lines; one term; the words to avoid; and the branch's one question, **"What does the reasoning do?"**, with its five answers, each with its `when`, and the one tie-break the branch has, as data.
- `public/subjects/psychology/u2.unit.js`: the unit record (`rev: 1`, `standard: 1`, `status: 'draft'`), the look-alike ledger (seven pairs, each with what they share, the one difference and the question that tells them apart), the four parts, the drill and the build notes, including what the K2 rewrite changed in the key and why.
- `public/subjects/psychology/u2.cards-1.js` to `u2.cards-5.js`: every card.
- `public/subjects/psychology/u2.cases-teach-1.js` to `-3.js`, `u2.cases-drill-1.js` to `-3.js`, `u2.cases-return-1.js` and `-2.js`: every case, with its marked words and all feedback.
- `public/subjects/psychology/u1.cases-1.js`: two sample cases standing in for Unit One's bank, so the drill can show how earlier-unit items appear. Unit One's rebuild replaces them.
- `public/subjects/psychology/specimens.js`: the five existing reasoning specimens, re-keyed to the new answers, each with marked words and a reason for the first question as well.
- `tests/lessons.lock.json`: the lock (section 13).
- `learner-view.md`: **the whole unit as plain text in the order a learner meets it. This is the file to judge.** It is printed from the data files by `tools/render-learner-view.mjs`, so it cannot say anything the data does not, and every sentence the app owns (E2, E3, E6) is printed from `tools/render-cards.mjs`, where the engine will take it from.
- `tools/`: the loader, the renderer and `check-exemplar.mjs` (with `check-vocab.mjs` and `check-structure.mjs`), which runs the ● rules of section 8 on the exemplar and checks or writes the lock. They are helpers for this folder; in the app their rules live in `tests/validate-data.mjs`.

What the files are not: a drop-in for `public/`. The key holds one branch and a gate whose other two answers keep nothing yet; the subject record lists six units of which one is registered; `limits` is cut down to three lines. They become copyable when Unit One and the gate are rebuilt, which F6 puts first.

The unit's size (38 cards in four parts; 34 drill items in five stages, plus one claim worked for the learner; 15 fresh cases held back for later days, three for each name; 76 cases in all; and the 5 specimens) is what this unit needed, not a template for any other. It shows every card kind a branch unit uses, including a `term` card, an `exception` with a tie-break and one without, and look-alike pairs that keep the same person and story.

Its status is `draft`: no person has read it cold, and A14 says nothing else signs a unit off. Two further things are open and are stated in the data, not hidden. Its two `refute` cards rest on sources that have not been confirmed online, and the first cites the theory itself, not an account of how people misuse the phrase (`build.wrongIdeas`, `verified: false`): V22 blocks `live` until they are confirmed or replaced by what cold readers actually get wrong (P29 requires 3), and E15 lists them with every deploy of the draft. And Unit One is assumed to have taught the gate question and the word "route"; the first card prints both from the key, but the unit does not go live before Unit One does (F6).

## 11. Per-subject rewrite notes

What each subject needs beyond applying the template, from its audit in `docs/comprehension-audit/`. In every subject the first job is K2 on the key, because the audits found that the key's wording, not only the lessons', is what the learner could not follow.

**Psychology** (22 of 49 practice items not answerable from the lessons)
- Delete the second framework. The course teaches "five diagnostic questions" (D1 to D5) and "four moves"; the key asks none of D2 to D5. Teach the key's own questions and no others. If "how long, how often, in how many places" is needed to separate a pattern from a moment, it becomes a real key question in the pattern branch; otherwise it goes.
- Give the gate a way to reach "nothing to name here", with one name for it everywhere (six wordings today). Specimens 13 and 14 route a single event through "A stable way someone is", against what Unit One teaches.
- Restructure the tactic branch by K2.2: the DARVO card says one exchange is the signature while the key's second question sends one instance to "Not a tactic"; projection is taught as an unconscious defence and filed as a tactic.
- In the pattern branch, each of borderline, histrionic and antisocial gets its own `meet`, `again`, `portrait` and `check` before any `lookalike`; today they exist only as contrasts with narcissism. The second question asks how the person responds to criticism on specimens that contain none; rewrite the question or the specimens. "Shame", "fragility" and "proportionate" are asked and never taught.
- Add specimens for the three outcomes that have none (projection, not a tactic, histrionic). Remove references to other subjects ("the horseshoe error").
- Settled in the reasoning branch: it has one question, and its fifth outcome, Fair reasoning, covers a view fairly tested and kept as well as a view changed (K2.2, K2.9). The gate still needs its own "nothing to name here" answer for cases that are not reasoning, a tactic or a pattern at all.

**Political Ideologies** (14 of 37)
- The key is flat: two questions that leave 2 to 6 outcomes standing on 8 of 12 specimens, so the name is decided by knowledge the key never asks, and specimen 3's literal answer leaves none. Restructure it (K2.2) into a gate and branch questions, using the tie-break questions the feedback already cites, until every accepted route isolates its outcome; then remove the validator's family-key exemption.
- The course teaches five questions and the key asks two, in the opposite order. Teach the key's questions, in the key's order.
- Teach when "not stated in the passage" is the right answer, as an answer with its own cases.
- One running example treated every way (the audit's bakery, owned six ways) is the natural `lookalike` material for the class-based family; fascism's markers need grouping, with a card on which behaviours all dictatorships share (an `exception`).
- Split Unit Four: words that are not ideologies become `refute` cards and faulty claims; the two modern mixtures are outcomes taught in full.
- The subject is contested. Keep the existing subject matter, use invented passages, assert no contested fact (W5.7), and keep the caveats.

**Basic Math** (20 of 53)
- These are procedure units. Only 5 of 27 procedures have a worked numeric example and 15 have none: every procedure gets two `solved` cards with every number shown being computed.
- 32 of 53 practice items replay a card's own example. Every drill case is new (W5.4), in a different setting.
- The course announces five questions (M1 to M5) the key never asks. Teach the key's gate and branch questions; the learner's main skill is choosing the procedure, so the `piece` and `route` rungs mix problem types (P22 requires 8) and look-alike problems get `lookalike` cards (adds against multiplies; one unknown, two different asks).
- Split Unit Three by branch (unknowns; shapes).
- Fix the routes that mark a defensible answer wrong (the gears, the shoebox), and teach or remove the answer "Neither - a one-off jump".
- One word each for tool, question, method and rule; "factor" is used as divisor and as multiplier.

**Statistical Claims** (26 of 51; action subject)
- Settle these in the key before any lesson is written (K2, last line): a gate answer for a claim with nothing wrong; where small-number volatility lives; what separates Simpson's reversal from confounding; specimens 12 and 17, which break the key's own earliest-stage rule; the answer "Everyone in the frame was counted", which is false for a sample.
- Eight of 14 faults are taught by one table row. Each fault and each sound state is an outcome with the full sequence; the sound states are the legitimate cases P26 requires in every case stage.
- 10 of 26 drill items and 17 of 18 specimens retell a card's example. All practice cases and specimens are new.
- Show the arithmetic wherever a rule is about numbers (relative against absolute risk; the base-rate table), and teach each rule in two areas of life and drill it in a third (P25 requires 3).
- Split Unit Four in two. Fold the unscored "state it aloud" drill into scored claim items.

**Scams & Social Engineering** (21 of 52; action subject)
- The four legitimate twins are 4 of 19 outcomes and are never taught, and the course calls the thing it scores optional. Teach each as an outcome and pair it with its fraud in a `lookalike` card: the skill is telling the real from the fake, not suspecting everything (P26 requires 1).
- The key asks "What story carries the ask" straight after Unit One teaches the learner to ignore the story, and its second question is redundant in three of four branches. Restructure by K2.2, and say which question can be answered at the moment of the ask and which only afterwards.
- Each pattern has about 21 words of teaching and the real explanation arrives as feedback. Move it into the cards as the scam told in sequence, as it unfolds (P26 requires 3b), with a worked route.
- Split the seven-row money table into paired units (slow relationships; release fees; pressure and routine payments).
- Move "if it has already happened" out of the caveats into a card, and give the counter-move as a per-pattern script.
- Log first-attempt accuracy on legitimate against fraudulent cases, split by a short baseline check (P26 requires 3c).

**Wealth Preservation** (28 of 56; action subject)
- Ten of 21 practices get one table row, and mechanisms, numbers and the rules separating neighbors appear only in feedback. Every practice is an outcome with the full sequence and a worked number wherever the idea is a number.
- The key is a second vocabulary: none of its eight follow-up questions is taught, 23 of 40 answers are only partly taught, and the lessons' codes P1 to P4 collide with the key's P1. K2, then K3.
- 19 of 21 specimens describe the practice already applied, so "diagnosis" is recognising a label. Rewrite specimens as situations to diagnose.
- Teach the four "leave it alone" outcomes with a stated rule for "nothing is threatening this"; rename "Basic documents current" and "No structure needed" so they do not read as their opposite; fix the two answers that let specimen 21 match the wrong option.
- Remove or source the unsourced second-generation claims (W5.7).
- Keep what the audit found working: the gate wording, and the three cards that already explain with a reason (draw as a percentage, order of returns, the beneficiary form).

**US Civics & History** (19 of 65)
- The subject mixes kinds. Unit One and the branch units are classification units; Units Two, Four (mostly) and Five are fact units and say so on their `orient` cards (A12, P24 requires 7), with facts grouped under the concept they serve and every fact on the return schedule.
- Only Unit One touches the key. Unit Three becomes three branch units (Congress; the President and agencies; the courts), each teaching its own key questions with worked cases.
- The gate question is cleanly supported in 10 of 19 specimens, and the codes N1 to N5 mean three things. Restructure the gate by K2.2 (the audit's suggestion: ask whose action it is) or move the specimens, before any unit is written.
- Correct "only one of them is law" (the Bill of Rights is part of the Constitution) and the option set that marks a careful reader wrong.
- Unit Six re-quizzes the card just read. Its claims become claim items mapped to the key question each one skips.
- Where the material has a hole (the years 1877 to 1899), say the test skips it; do not fill it with new claims.

## 12. Scorecard of the three designs

Each design was judged on its exemplar's learner view, not on its claims: (a) would a newcomer understand each idea and then be able to apply it; (b) is every idea explained fully; (c) is there exactly one vocabulary, with the key's words taught before they are asked; (d) fidelity to the evidence base; (e) can the app enforce it mechanically. Authoring effort and implementation time were not criteria. All three taught far better than the current lessons; the differences are in the key they chose and in a small number of structural decisions.

| Design | (a) understand, then apply | (b) fully explained | (c) one vocabulary | (d) fidelity | (e) enforceable | Verdict |
|---|---|---|---|---|---|---|
| **Cases and contrast** | Strongest. Look-alike pairs keep the same person and topic and change only the deciding feature (Rosa and her two concert tickets; Sam and his builders; Vic and his smoking), so the difference is the only thing left to see | Full | Strongest. Short, plain answers an observer can point to; the first question is literally about what is visible in the case; a stated tie-break | Strong. Departed from section 4.3 in three places (below) | Strong. The ledger makes the one difference per pair a single piece of data | **Base** for the schema, the key and the exemplar |
| **Explicit instruction** | Strong. Two worked cases, the second one misleading; the widest drill | Fullest. Every `meet` card says why people do it and what the honest way out was | Good, with the heaviest key wording: "What led the reasoning?", "A commitment led: ...", "the thing that does not fit". Two coined abstractions carry the whole unit, and its second question alone decides every case | Strongest on order: the question is named only after its contrast; close after the drill | Strongest. 33 rules implemented and each seen to fail | **Base** for the order, the rungs and the validator's rigour |
| **Novice reader** | Most readable prose; the best opening (facts that do not fit: change or hold on) | Full | Good, with one fault in the key: "What is the person defending?" has two defensible answers whenever someone has acted on a view (a doctor who has prescribed a treatment for ten years and waves away a trial), so a careful learner is marked wrong | Weakest of the three: every look-alike pair is held back until all five outcomes are taught; the recap sits before the drill; one worked case | Good | Source of several grafts |

**Taken from cases and contrast (the base).** The data layout (unit record, cards by part, cases apart from cards, a returns bank). The look-alike ledger. The key structure and wording. Same-person look-alike pairs. The `lens` card. Parts with visible stopping points. Tap-the-words commit prompts. Checks that offer the key's answers taught so far. Fresh cases held back for later days.

**Grafted from explicit instruction.** The fixed order with the question first named on its `question` card, after the contrast that shows what it separates (each `meet` card shows only that outcome's answer). Close cards after the drill. Five rungs with single questions before part-routes (`name`, `piece`, `finish`, `route`, `claim`). Two worked cases, the second one misleading. The `reason` commit prompt whose choices are all true statements. Gate items that leave the unit's branch. The plain-language test for key wording and the re-keying step (K2). The habit of seeing every validator rule fail once (carried into F6 step 1; in the exemplar's own checker only some rules have been seen to fail, section 8).

**Grafted from novice reader.** `purpose`, `why` and `when` living in the key, printed on the `question` card and reused in feedback, so the reason for a question exists once. A generated line for every wrong choice, so no answer is ever left unexplained. "Taught on: card" in feedback. One stored record of practice with everything else computed from it. The rule that every key question must do work, which is why the old first question was restructured and not reworded. The browser checks for timers and for feedback present before an answer.

**Rejected, with reasons.**
- *From explicit instruction:* its key wording (coined abstractions fail P4 and the cold read it would get); a `term` card for two words the key itself coined (the cleaner fix is a key that needs no coined words); a gloss on every answer button (the answer is one phrase; `when` is taught on the question card and returned in feedback); a second, per-skill store beside the per-item one (two records of one thing drift); retiring the `stats:err` key (the owner's existing keys keep working).
- *From cases and contrast:* naming the key question on the first `meet` card (the evidence base teaches the question at the contrast, P12 and 4.3 step 2); a single worked case (the drill's last case stage asks for misleading cases, and nothing is asked before it is shown, P10 requires 5); a plan card in a subject the evidence base does not treat as an action subject (P26); `needs` and `terms` kept in the unit (one copy, in the key).
- *From novice reader:* its first key question; holding every contrast to the end (P12 requires 1, 4.1: contrast as soon as both are taught); the recap before the drill (it turns the first drill items into rereading, P16); short "handles" beside the full answers (two wordings for one answer, P5); a free-form `idea` card kind (a card with no required parts cannot be checked for completeness); the per-card "In the key: ..." line (it has to hide names until they are taught, and the maps, the parts and the top bar already show the structure, P8).
- *From all three, as all three agreed:* preview questions before teaching (P1 requires 3), confidence ratings (P21 requires 4), streaks and affirming messages (P28 requires 5), a hard gate between units (P17 requires 5), learner-drawn maps, highlighting and notes (P30 requires 4, P8 requires 5), and any length, card-count or accuracy target (P6, P7, P17 forbid). Each is optional or a judgement call in the evidence base; none is in version 1.

**After the judgement.** Two adversarial reviews of the judged standard found faults this scorecard missed (section 14). The largest was in the key taken as the base. It had the fault the scorecard held against the explicit-instruction key: its second question alone decided every case, and nothing in K2 or in the validator tested whether a question does work. The base key's first question has been removed (K2.2 and V55 now carry the rule), and its fifth outcome widened to cover a view fairly tested and kept. So "the key structure and wording" in the list above describes the starting point, not the exemplar as it stands. Three rejections above also read differently now. A `term` card kind exists (for a real word the unit leans on, never for a word the key coined). The old counters are kept but frozen, with one record of practice behind every figure shown (E8). And the `meet` card now prints the key's question above the one answer it shows, because the review found four checks asking for "the key's answers" to a question the learner had seen once; the question is still taught, with what it separates and why, on its `question` card after the contrast, as the evidence base orders (4.3 step 2).

## 13. Revisions

Owner requirement: "add revision number to keep track of each lesson. just make this new version the version 1 since we're only establishing a standard right now". The lesson-design reason it also serves: first-attempt accuracy and reports of confusion are only usable when they are tied to the text that produced them (P27 requires 3 and 4).

**R1. Fields.** The standard is version 1: `FC.STANDARD = 1`. Every subject carries `rev`, an integer, as a real field on its record, reset to 1 for this rebuild (today it is parsed out of the `eyebrow` label, and that parse is deleted), `standard`, the version its key was written to, and `history`. Every unit carries its own `rev`, its `standard`, and `build.history`: one line, with a date, saying what changed at each revision, so the number keeps track of something a person can read.
- **The rebuild is revision 1.** A unit's first revision is 1; no unit is of standard 0 or has `rev: 0` (the old card format was removed on 2026-10-05, F5).
- **Revision 1 means the first version a learner could open.** The lock binds a unit from its first deploy (R5). Edits made before that, while it is being written, reviewed and read cold, stay revision 1, so authoring does not turn "rev 1" into "rev 9".

**R2. When a revision goes up.** After a unit's first deploy, its `rev` goes up by one whenever anything a learner can see or be marked on in that unit changes: a card, a case, a feedback line, the ledger, the drill, or key wording the unit prints. A subject's `rev` goes up whenever its record, its key or its specimens change. A change of wording in the key therefore raises the subject's revision and the revision of every unit that prints that wording, and of no other unit. Each raise adds a line to the history.

**R3. Fingerprints.** A fingerprint is the full SHA-256 (64 hex characters, stored as `sha256:...`) of the canonical JSON (object keys sorted) of what the learner can see or be marked on. A unit's covers **what that unit prints, and nothing else**:
- the unit record without `rev`, `status` and `build`;
- its cards and its cases, each as a map by id, so the order of files and of registration cannot change it;
- from the key: its own outcomes and terms in full; the questions it teaches in full; and for a question it only assumes, `q` and each answer's `n` and `when`, with `keeps` cut down to the outcomes this unit or an earlier unit teaches. Filling in another branch of the gate therefore does not change this unit's fingerprint.
- Earlier-unit items are drawn at run time from the earlier unit's bank (S6), so their text is that unit's content and is covered by that unit's fingerprint.
A subject's fingerprint covers its record without `rev` and `history`, its key and its specimens. The app's own wording (E2, E3, E5, E6) is seen by the learner and is in no fingerprint: `FC.ENGINE` goes up when it changes, and every stored try carries that number (E8).

**R4. Where the app shows it, and what a new revision does to a learner** (E15). The top bar on every card: "Unit Two · rev 1 · Part 2 of 4 · Card 15 of 38". Each unit row on the subject screen: "rev 1". The subject screen: the subject's `rev`, in place of the old "Rev." label. `pl:<subject>:seen` stores, per unit, the revision the learner last had open, whether they finished it, and their place as a card id. When the current revision is higher:
- a learner part-way through resumes at the same card id if it still exists, otherwise at the first card of that part;
- a learner who had finished keeps the done mark and their practice records; the row says "Updated · rev 2" and opens at the first card whose content differs from the revision they saw (the two card lists are compared by id), not at the start of the unit;
- a learner who finished the unit under the old lessons, before it was rebuilt, is handled by the migration of E8, not by this rule.
Every stored try and every "this card confused me" report carries the unit's revision; a specimen's tries carry the subject's (E8, E19).

**R5. The lock file and the validator rule (V46).** `tests/lessons.lock.json` is committed:

```json
{ "standard": 1,
  "subjects": { "psychology": { "rev": 1, "fp": "sha256:...", "deployed": "2026-10-20" } },
  "units":    { "psychology/u2": { "rev": 1, "standard": 1, "fp": "sha256:...", "deployed": "2026-10-20" } } }
```

`deployed` is stamped by the deploy script on the first deploy that includes the entry, and that lock is committed and also published as `/lessons.lock.json`. The check is anchored to history, because a lock that is only compared with the working tree can be deleted or edited to match:
- `npm run test:data` fails when any unit's or subject's fingerprint or revision differs from the working lock (content changed, or the lock was not regenerated).
- It also reads the lock of the last commit (`git show HEAD:tests/lessons.lock.json`), and the deploy script reads the published one. For every entry there that has `deployed`: a different fingerprint now requires a higher `rev`; the same fingerprint requires the same `rev`; and the entry may not disappear.
- `npm run lock` rewrites the working lock and refuses under the same three conditions. It keeps `deployed` and never invents it.
So after a unit has been in front of a learner, the only way to change its content and pass the tests is to raise its `rev`, add the history line and regenerate the lock in the same commit. Deleting the lock and writing a fresh one does not get round it, and that case is one of the seeded-fault fixtures.

**R6. Changing the standard.** A change to this document that changes what a unit must contain raises `FC.STANDARD` and comes with a dated, committed list of the units still on the older version, which may only shrink (the list and rule for standard 0, V48, were removed on 2026-10-05 once it was empty; a later version brings its own). The validator applies the current rules to units of the current version and only the shape and lock rules to the listed ones, so old rule sets are not kept alive. Revising this document before any unit has shipped under it, as on 2026-10-04, does not raise the version.

## 14. Revision log

Revision of 2026-10-04, made from two adversarial reviews: `docs/lesson-standard/critique-newcomer.md` (44 problems, cited below as N1 to N44) and `docs/lesson-standard/critique-traceability.md` (38 problems, cited as T1 to T38). Every point was checked against this document, the exemplar and the evidence base before it was accepted or rejected. The standard stays version 1 and the exemplar stays `rev: 1`, because no unit has shipped under either (R1, R6). Nothing under `public/` was touched. The exemplar's data, its learner view, its checker and its lock were all brought into step: the checker passes, and the learner view is regenerated from the data.

### The decisions that changed the most

- **The reasoning branch of the Psychology key now has one question, not two** (T4, N23, N24, N36). "What is the reasoning about?" is removed as a key question. It separated no pair of names that "What does the reasoning do?" did not already separate, and it was marked on a judgement (evidence is in the case but the person never weighs it) that no card demonstrated and that never changed the name. What it taught is kept as teaching: the unit's first two parts are still grouped by what the reasoning is about, and the question card says how that narrows the answers. The alternative the review offered, sharing the second question's answers across both sides of the first, was rejected: no wording was found that an observer could point to in a case, so it would have brought back coined abstractions (K2.4). K2.2 and V55 now make "every question does work" a rule for all seven keys.
- **The fifth name is widened and renamed "Fair reasoning"** (N22, N43). The cards said four times that sound reasoning can end with the view kept, and the key had no answer for it. The review suggested "Honest reasoning"; "Fair" was chosen because the unit also teaches that people doing the other four are usually sincere, so "honest" would call them dishonest by contrast. Its second teaching case is a view fairly tested and kept, and the drill, the returns and a new look-alike pair (the same person carries on, for two different reasons) practise it.
- **Every line of explanation that the key or the ledger owns is now printed, not typed** (T1, T3, N3, N16, N19). New tokens print `needs`, `plain`, `when`, a term's meaning and a pair's test. The `meet` card's "what you must be able to point to" is printed from the key, so the card, the feedback, the recap and the claim items cannot drift apart, and V2 now catches a retyped line whatever its capitals, and a near-copy of one.
- **One label per thing** (N3, N4, N25, N42, T37). "What you must be able to point to", "how to tell them apart" and the key's own question replace nine labels (rule, provisional rule, deciding feature, test, sign, mark, move ...). The app owns the wording of every instruction that is the same in all units, and each subject keeps a list of words to avoid (V50).
- **No structural length caps** (T5, T6). Any card can continue as a chain; a `term` card kind exists; every prose field, feedback included, takes as many paragraphs as it needs.
- **Practice sized to the skill** (N37, T19, T36). Two or more unaided whole cases for every name, three fresh return cases for every name (one per scheduled return), a reverse item for every name, and cases built to look like the wrong teaching case so the "does it look like a case you know?" second look is practised and not only described.
- **Revisions anchored to history and to what the learner sees** (T23 to T27). The lock binds from first deploy, is checked against the last commit, covers exactly what a unit prints, and each revision has a line saying what changed.

### Newcomer review: every point

| # | Decision | What was done |
|---|---|---|
| N1 | Accepted, both fixes | The two cases that teach the first name now have the act over before the reason is given (Maya, Tom). The test for the first pair no longer depends on "finished or still open", which failed for a habit that is still going on (Vic's smoking): it asks what the reason itself says. Ledger `test`, the answer's `when`, the portrait and the first worked case all use it |
| N2 | Accepted | The rule of thumb is now "from where I stand today, is what I still have to put in worth what I will get for it?", with the renovation's sum worked. It is the sunk-cost portrait's `ask` and the `refute` card reuses it |
| N3 | Accepted | Three fixed labels (K9); `needs` printed by the app on every `meet` card; the other words are on `key.avoid` and V50 fails a card that uses them |
| N4 | Accepted | "Move" is used only in the gate answer that contains it; the question's `purpose` and all headings reworded; on the avoid list |
| N5 | Accepted | The first card says each sentence "can be the sound of" one of the five and that one sentence is never enough; the recap returns to two of the sentences and says what else must be seen |
| N6 | Accepted | The first card prints all three answers of the first question with when each is given, from the key (A1, E2) |
| N7 | Accepted (second option) | The preview is kept, smaller now that the branch has one question, with the app's line "You are not expected to follow it yet" |
| N8 | Accepted | "Clash" is not used; "does not fit" throughout; on the avoid list |
| N9 | Accepted | The excuse is one marked run of two sentences; marked words may also be a list (S6) |
| N10 | Accepted | After a check that follows an outcome's cards, the app joins the words in the case, the key's answer and the name (E4) |
| N11 | Accepted | The `refute` card lists the two ways ("First ... Second ..."); the overlap with the portrait's "what it is not" is trimmed |
| N12 | Accepted | The app's sentence is "You may also hear this called ..." (E2, K5) |
| N13 | Accepted | "Feeling" removed; what is spent is money, time or effort, as in the key |
| N14 | Accepted | Every `meet` card prints the key's question above its answer, and checks before the question card print it too (A2, E4, V5 reworded). Section 12 records that this reverses part of a rejection |
| N15 | Accepted | Look-alike explanations say "In Case A ... In Case B" (W2) |
| N16 | Accepted | The difference is now what the person is doing: evidence turns up and is judged, or the person sets out on a search and the answer was chosen before it began. `needs`, the answer text, the ledger `rule` and `test`, the `meet` card (which says that Greg too had his view first) and both later cards use the same two questions, printed from one place |
| N17 | Accepted | "Wanting an answer is not Motivated reasoning" |
| N18 | Accepted | The two compressed questions are written out, and the open searcher's question corrected |
| N19 | Accepted | Covered by T1: the line is printed from the key |
| N20 | Accepted | The generated line now ends with what the case shows instead (the right answer's `when`, or the right name's `needs`) (E5.4) |
| N21 | Accepted | The answer's `when` no longer says the belief stays as it was; it says no new fact arrived and the act is not undone or admitted wrong. The convert card bridges back to the "honest ways out", and the fifth name's link line no longer says "ends exactly where they began" |
| N22 | Accepted, name changed | See above. The review's "Honest reasoning" was not used, for the reason given |
| N23 | Accepted, different fix | The question that was marked on this judgement is gone. The judgement itself is now taught: the sunk-cost portrait and the question card both say that evidence the person's reasoning never touches does not make a case about evidence, with the renovation as the example |
| N24 | Accepted | Parts are titled in the words the cards use ("reasoning about something the person did or spent", "reasoning about evidence"), and "is about" is the only phrase used for it |
| N25 | Accepted | "A harder test for one side" everywhere; "uneven" and "scrutiny" are on the avoid list |
| N26 | Accepted | The compressed clause is replaced by an example in the portrait, and the full case follows on its own card |
| N27 | Accepted | The ambiguous "a quote" went with the removed card; prices are called prices |
| N28 | Accepted | Where every answer leads to one name the app says so once and drops the "rules out" lists; the three repeated tables are replaced by one line per pair, each with its test, printed from the ledger; a pair's table is drawn once, on its own card (E2) |
| N29 | Accepted | Through N12 and N22 |
| N30 | Accepted (first option, plus a demonstration) | Claims that misuse a name now ask "what would you need to see in the case before that name could be used?", with the key's `needs` lines as choices, which the cards license; the claim stage opens with one claim worked for the learner (S6, E6, V43) |
| N31 | Accepted (first option) | The app says what stage one practises: which name goes with which answer |
| N32 | Accepted | The words marked for the first question are the person's own account or reason; every whole-route case has them |
| N33 | Accepted | The second worked case asks a `reason` prompt (three true statements), not a tap on words just marked |
| N34 | Accepted (first option) | One label ("Does it look like a case you know?"), the second worked case shows a real disagreement and how to settle it, and three drill cases are built to echo the wrong teaching case, with feedback that says so (S6 `echo`, E5.5, V54) |
| N35 | Accepted | The drill case no longer repeats the March and April of the worked case |
| N36 | Accepted | The bus case now has evidence on both sides in it |
| N37 | Accepted | 11 unaided whole cases (two or three per name) and 15 return cases; V39 and V44 require it |
| N38 | Accepted | Replaced by "which question do you put to the case?" for a named pair, with the ledger's tests as choices (`tell` item) |
| N39 | Accepted | One stakes sentence, owned by the app (K9) |
| N40 | Accepted (second option) | Each portrait ends with the question to ask when you spot it, and the recap prints all five; the first card promises exactly that |
| N41 | Accepted | Each listed sentence reworded or replaced by app wording |
| N42 | Accepted | The key's nouns are used ("what they believe or have said", "a next step still to be decided", "the search"), and the motivated-reasoning `again` card says once that research, interviews and quotes are all "the search" |
| N43 | Accepted | Through N22: the answer's `when` no longer requires the facts to go against the person |
| N44 | Accepted | The card kind is never shown (E2, K3); the learner view prints it on a separate line marked for reviewers |

### Traceability review: every point

| # | Decision | What was done |
|---|---|---|
| T1 | Accepted | Tokens `{needs:}`, `{plain:}`, `{when:}`, `{means:}`, `{test:}` (S5); `needs` printed by the app on the `meet` card; V2 extended to every key line, any capitals, plus the near-copy test; every drifted copy in the exemplar replaced by a token |
| T2 | Accepted, with one change | The tie-break is data in the key (`yieldsTo`), printed on the exception card and in the question card's list. The review's wording for feedback ("this case shows that too") would have been false on a clean case, so a case that really shows both says so (`also`) and only then gets the tie-break line (E5.4, V53). The clean first-stage case no longer shows both |
| T3 | Accepted | The question's words may be printed by a `meet` card and the `lens` (A2, S5, V5); the recap and worked reasons use tokens; A8 reworded |
| T4 | Accepted (second option) | See "decisions". The first option was rejected for the reason given there |
| T5 | Accepted | Chains (`continues`) for every card kind; a `term` card kind; one new name per card (A3, S4, V0, V24). The first name's card is split: the feeling and its word first, then the excuse. The second name's card was not split: "sunk cost" and "fallacy" occur only inside the name and are explained in the sentence that gives it, so they are no longer declared terms (K6) |
| T6 | Accepted | `Text = string or string[]` for every prose field; "one sentence" removed from the ledger (S4) |
| T7 | Accepted in the standard; exemplars not built here | A15 defines gate units; A12, S4 and S6 give fact and procedure units their card kinds, item forms and drill stages; section 8 has a rule-by-kind table. F6 now builds the gate exemplar before Unit Two goes live and one unit of each other kind before its subject is written. Building those three exemplars is the next job, not part of this revision |
| T8 | Accepted | The practice record is defined in full (E8): key, item ids for items with no case, per-try date, revision, engine version, mode, context, chosen answers and name |
| T9 | Accepted | `answer` is required on every tap prompt (S4, V0, V30) |
| T10 | Accepted | Items are authored in groups; the app shuffles groups inside a tier band and inside a group (S6, E6, V40) |
| T11 | Accepted | `{ earlier: unitId }` with no case, drawn at run time (S6, E6, V41) |
| T12 a | Accepted | A branch is a list of one to three questions (S1) |
| T12 b | Accepted | Pair tables specified (E2) |
| T12 c | Accepted | `which` has one form and an app-worded question; `plain` removed (S4, E3) |
| T12 d | Accepted | A case's field is `reason`; a worked card's is `reason` and the case it uses carries none; the key's `why` keeps its name (S4, S6) |
| T12 e | Accepted | `step` means all the question's answers; `option` means some (S4) |
| T12 f | Accepted | "more than one only where this case supports both" (S6) |
| T12 g | Accepted | Worked steps are every question on the case's route taught by this unit or one it assumes (S4, V18) |
| T12 h | Accepted | `orient.map` is `{ branch }`; what is drawn is stated (S4, E2) |
| T12 i | Accepted | A term's meaning is printed by its `term` card and by `{means:}` |
| T12 j | Accepted | Drill and close only on the last part; the place is a card id (S2, E8) |
| T12 k | Accepted | Shapes for `notes`, `seen` and `log`, with the cap and what is dropped (E8) |
| T12 l | Accepted | Returned sets: at most six, from the "Due today" tile, neighbor's case stated (E9) |
| T12 m | Accepted | A miss is asked again until right once in that sitting, at least three items later; partners do not come back (E6) |
| T12 n | Rejected as posed; the feature is removed | The skip test raised three questions (how attempts are stored, what is skipped, cases asked twice) that the evidence base does not answer, and it makes the shortcut itself optional (P2 requires 2, a judgement call). Version 1 has no skip test; a learner can open a unit's drill directly (E11, E17) |
| T12 o | Accepted | The quoting fields are named (S5) |
| T12 p | Accepted | The names offered at a naming step are stated (E6); V31 reworded |
| T12 q | Accepted | Marked words may be a list (S6); used in the exemplar |
| T12 r | Accepted | `FC.legacy` (S6, F5) |
| T12 s | Accepted | "some answer of a question this unit teaches" (S3, V15) |
| T12 t | Accepted | `taughtIn` must come after both `meet` cards and name both outcomes (V15) |
| T12 u | Accepted | "First meeting" is per case id; a return is a first meeting; nothing is collapsed after a miss (E5) |
| T12 v | Accepted | `{ text }` titles where two units share a branch; titles unique (S2, K7, V56) |
| T12 w | Accepted | `assumes` lists units; everything they teach may be used; the first card prints the assumed questions the unit's routes pass through (S2, A1) |
| T13 | Accepted | V0 (shapes, enums, unknown fields, ids); V51 (the `lens`); the `portrait` fields are required |
| T14 | Accepted | The one remaining term is used by token on a later card and in a drill item (V6); `recap` and `transfer` have link lines (V27); the first question has marked words and a reason wherever it is asked (see T15); V15 reworded |
| T15 | Accepted | Every case asked the whole route (11 drill cases, 15 return cases, 5 specimens) has marked words and its own reason for the first question; the `when` fallback is limited to a question shown and not asked (S6, E5.2, V30, V35) |
| T16 | Accepted in part | The checker was rewritten to this section's wording and now covers the faults listed (specimens and the subject record scanned, case-blind matching, `{cue:}`, ids, "exactly one", shared outcome, placement, `live`, segments, per-question reasons). 47 rules were each seen to go red on a seeded fault in a scratch copy. Not done here: the per-rule fixtures and the port to `tests/validate-data.mjs`, which are F6 step 1; section 8 now says "a subset" and lists what was seen to fail |
| T17 | Accepted | `subject.settings` is a fixed list and `topic` carries the story (S1, S6, V33, V52); V48 and R5 are anchored to the last commit; the code-level halves of V45 and V49 moved to X5; V29 is a test of the validator's own source; V28 and V21 say what they cannot see |
| T18 | Accepted, on `topic` | With a fixed list of seven areas of life, "no shared outcome and setting" could not be met by a unit with 76 cases, so the rule is on the story: no two cases of one outcome share a `topic` (V52). The two pairs the review named no longer clash under it |
| T19 | Accepted | Three return cases per outcome (four in action subjects), specimens never drawn, a used-up bank is logged as a repeat (E9, V44); ten return cases written |
| T20 | Accepted | An `aka` word may appear in quotation marks or marked words, where feedback maps it back (K5, V8) |
| T21 | Accepted | V1 tests every joiner K4 names |
| T22 | Accepted | A `separator` item is optional and only for units that teach two or more questions; a gate unit has no `name` or `finish` stage (S6, A15, V42) |
| T23 | Accepted | The lock is checked against the last commit and the published copy; an entry may not disappear; deleting and rewriting the lock is a fixture (R5). In this folder the history check has nothing to compare with yet, because `docs/` is not committed |
| T24 | Accepted | Standard-0 units are `rev: 0` and locked; the rebuild is revision 1; the lock binds from first deploy (R1, R5) |
| T25 | Accepted | A draft is shown as a draft and listed at deploy (E15, X6); the cold read carries the revision it read; `live` needs date, restated and drill attempted (S2, A14, V45) |
| T26 | Accepted | The fingerprint covers what the unit prints: maps by id, the assumed question cut down to what is printed, earlier-unit items outside it, the full hash (R3). Implemented in the exemplar's checker |
| T27 | Accepted | Place is a card id; "Updated" opens at the first changed card; tries carry revision and engine version; `FC.ENGINE`; R6 no longer keeps old rule sets alive (R3, R4, R6, E8) |
| T28 | Accepted | A one-time, repeatable migration through a committed map; a rebuilt unit reads "Rebuilt: start again" and is not counted as done; X4 asserts it (E8) |
| T29 | Accepted (the recommended option) | One owner: the old counters are read and never written, shown as one "before the rebuild" line; every figure comes from the one record (E8). The owner's own rule against storing one thing twice decides this |
| T30 | Accepted | The gate and Unit One are rebuilt first and Unit Two goes live with them; no branch unit before its gate unit (F6, V48); the determination offers only standard-1 routes while a subject is mixed (E13); section 10 no longer says the files can be copied in unchanged |
| T31 | Accepted | File naming written as the exemplar uses it (F1); cold start is measured and lazy loading decided on the measurement (X7) |
| T32 | Accepted | The first card's reminder links to the card that taught it (A1, E2, W8) |
| T33 | Accepted | The subject's opening map (E14) |
| T34 | Accepted | Every ledger pair has a table, drawn once on the card that teaches it (E2); no `table` flag to forget |
| T35 | Accepted | Specimen order (E13, S6); the exemplar's five are reordered |
| T36, two lists | Accepted | `key.avoid` (S1, K6, V50) |
| T36, analogies | Accepted | W3 |
| T36, every card used | Accepted | A reverse item for every name (V39); `echo` cases exercise the `lens` and the second look (V54) |
| T36, baseline check | Accepted | E21, `subject.baseline` |
| T36, guessed wrong ideas | Accepted in part | See "rejected" below |
| T36, recap wording in the evidence base | Noted, not changed here | Section 2, row P6. The evidence base is the source of truth and was not edited in this task; its P6 requires 5 ("what to carry into the drill") and its section 4.3 (recap after the drill) disagree, and the standard follows 4.3 |
| T36, same wording for prompts | Accepted | The app words every commit prompt (E3) |
| T36, weight 600 | Accepted | Weight is for the marked words only (E16) |
| T36, citation on `portrait.self` | Accepted | A3 cites P14 requires 1 and P25 requires 2 |
| T37 | Accepted | The app owns every instruction that is the same in all units (E2, E3, E6, K9); `drill.note`, `rungs[].say`, `orient.order` and `orient.skip` are gone from the schema; K9's list of the app's words is complete |
| T38 | Accepted | `history` on every unit and subject, one line per revision (S1, S2, R1, V45); a specimen's tries carry the subject's revision (E8) |

### Rejected, or accepted only in part, with the reason

- **N22, the name "Honest reasoning".** The widening was accepted; the name was not, because the unit teaches that people doing the other four are usually sincere.
- **T4, first option (share the second question's answers across the first).** No answer wording was found that an observer can point to in a case; the branch has one question.
- **T2, the feedback sentence as proposed.** Printing "this case shows that too" for every case of the pair would be false on a clean case. It is printed only for a case that lists the losing answer in `also`.
- **T12 n, specifying the skip test.** Removed instead; see the table.
- **T18, as worded (outcome and setting).** Not satisfiable with a fixed list of settings; the rule is on `topic`, and the cold read owns whether two stories are really different.
- **T36, failing a `refute` card with an unverified source at any status.** Not adopted. P29 requires 3 allows two sources for a wrong idea, a published account or what cold readers get wrong, and the second cannot exist before the draft is read. A draft may therefore carry a card whose source is still open, visibly: V22 blocks `live`, and E15 lists every unverified source at each deploy. The exemplar's two sources were not checked online in this revision and are still marked `verified: false`; the first also cites the theory, not evidence of the misuse, and its note now says so.
- **T16, proving every ● rule here.** 47 were seen to fail on a seeded fault; V29, V47 and V55 have only been seen to pass, and V17, V24, V37, V48, V49 and V56 are stated and not yet coded. The fixtures belong in the app's test suite (F6 step 1).
- **T7, building the gate, fact and procedure exemplars.** Outside this revision; the standard now orders them before the work that depends on them.

### The read-through after the fixes

The regenerated learner view was read from the first card to the recap as a newcomer would, and the drill, the claims and a sample of the returns were read item by item. What that reading changed:

- Two phrasings for the fifth name's idea ("follows the facts" in titles, "goes where the facts point" in the key) were made one.
- The app's stem for the `again` prompt ended in a doubled full stop after a quoted sentence; reworded.
- A sentence on the `refute` card began with a term in lower case; reworded.
- The exception card that follows its pair's look-alike card repeated the pair's table word for word, and the look-alike card printed the tie-break one card before the card that teaches it. The table is now drawn once and the tie-break appears first on the exception card (E2).
- The question card said the same thing twice under "Why it decides" (the key's `why` and the card's `decides`); the key's line was shortened.
- A check after an outcome's cards repeated the answer it had just named; it now adds only the name.
- The unit's subtitle was a near-copy of the question's `purpose` (the new V2 caught it); rewritten.
- A recap line said "before the looking began" where every card says "before the search began".

### Still open

- The exemplar has not been read cold by a person. Nothing in this log changes that: `status` is `draft`.
- The two `refute` sources are unverified (above).
- The gate unit, a fact unit and a procedure unit have no exemplar yet (A12, A15, F6).
- The evidence base's P6 requires 5 and section 4.3 disagree about where the recap sits; the correction belongs in `docs/learning-science.md`.

## 15. Revision of 2026-10-05: the other unit kinds, confirmed by a build

The shapes A12, A15, S4, S6 and E4 to E21 left to be "confirmed or corrected by the build" were built on four small fixture units (`tests/fixtures/gate-unit.mjs`, `fact-unit.mjs`, `procedure-unit.mjs`, `action-unit.mjs`), registered in the page and never in `public/`, and played through the real unit player by `tests/e2e-kinds.mjs` (every card kind, every drill stage, every item kind, with a seeded fault for each group that turns exactly its own check red). The standard stays version 1: no unit has shipped. What the build corrected or added, in the order it appears above:

1. **A12, fact units.** Spelled out: `concept` then `facts` then one `check` per fact; the item is the row; the choices are the other rows' answers; `relates` is the explanation; a fact returns as its row (E9). There is no `transfer`, no `question` card, no `orient.map`, and a subject made only of fact units has a key with no gate and no branches (S1).
2. **A12, procedure units.** `solved.hold` is required, not optional: one commit prompt on the step that carries the idea, and that step's reason, the later steps and the result stay off the screen until it is answered. The held step's reason is `hold.reason` (so a step has `why` on every step but that one). `solved.result` is `Text`. The `last` stage shows the working up to the last step; `whole` shows the problem alone; `route` asks the key's questions and the name first and then the solving. Checks may ask a problem (`solve`).
3. **S6, a problem.** A problem is an ordinary case (`tier`, `route`, `cues`, `reason`, `not`, `echo`, `wouldChange`) with `kind: 'problem'` and, when it is asked, `steps`, `answer` and `why`. The S6 shape listed only the last three, which would have left the `route` stage nothing to ask the key's questions of. A wrong choice must carry a `slip` that completes "That is the answer you get when …"; the app refuses a problem item without one.
4. **S4, `check`.** Two new `ask` types: `{ type: 'fact', row }` (no `case`; `after` is the `facts` card) and `{ type: 'solve', solve: 'last' | 'whole' }`.
5. **S4, `lookalike`.** Fact units use `facts: [rowId, rowId]` and `prompt: { kind: 'which', answer: rowId }` in place of `cases` and an `option`; `h` is required. The ledger pairs row ids and has no `step` (S3).
6. **S4, `plan`.** The cues are examples to start from, not a fixed list: the learner may write both lines. Saved with `saveNote`; nothing is saved until the button is pressed; the card never holds back Next.
7. **S4, `transfer`.** Prompts take `family` in a gate unit, as A15 said and the shape did not.
8. **S5.** One new token, `{f:rowId}`, prints a fact's answer, so a ledger `rule` or a `difference` never retypes it.
9. **S1, `legit`.** The key had no way to say which outcomes are cases where nothing is wrong, though A10, V37, E8 and E21 all rely on it. Outcomes and gate answers take `legit: true`.
10. **S6, `use: 'baseline'`.** The baseline cases (E21) are cases with their own use; they are in no card or drill and are listed in `subject.baseline`.
11. **S6, `separator`.** The choices are the unit's own questions, and the right one is worked out from the key (the question on which the pair share no answer). A unit that teaches one question, or a pair that two questions separate, is refused with a message naming the item. A gate unit therefore cannot have one.
12. **E6, the legitimate-case rule** is enforced by the app when a drill starts, as well as by V37 in the validator.
13. **E8.** New `mode` values `separator`, `last`, `whole`, `baseline`; new item ids (a fact's row id, `separator:<ledgerId>`); `notes` gains `plan.shown` and `baseline`. In a gate unit the name a learner chose is the answer given to the gate question, read from the stored route, so returns and results work without a name stage.
14. **E9.** The 12-week return of action subjects is `84` days after the third good day, a fourth level, with a bank of four cases per name.
15. **E18.** The functions that give the next returned set what it needs are named: `plansToShowBack`, `savedPlanText`, `keepPlan`, `changePlan`, `dropPlan` (`records.js`).
16. **E21.** The baseline is one screen per case before the subject's first unit, "Real" or "Something is wrong", with an optional line of the learner's own words; no marks and no right answer are on the page; the answers come back on the first unit's complete screen.

## 16. Revision of 2026-10-05, second part: the pieces joined, and what the join decided

The engine and the screens were built by two separate passes and then joined and reviewed against this document. What the join changed, and what it settled where the document was silent:

1. **The validator is part of `npm test`** (`npm run test:lessons`, and `npm run lock` for the revision lock). It now reads the section 15 shapes: `legit` on outcomes and gate answers (and `plain`, `needs`, `aka` on gate answers), `use: 'baseline'`, the `fact` and `solve` checks, the fact `lookalike`, `family` on `meet`, `again`, `portrait` and `transfer`, a problem as an ordinary case with its working, choices and `slip`, `solved.hold` required with no `why` on the held step, a ledger entry with no `step` in a fact unit, a key with no gate. A subject with only an old-format record is skipped.
2. **V37 can be evaluated** (the key marks `legit`), V47 exempts the legacy `standard0.js` files from the line limit, V57 and V58 are new, and V10, V18, V25, V38, V39, V44 have the rows of the kinds in them (section 8). Each rule added or changed has a control. The lock for Psychology Unit Two is `tests/lessons.lock.json`; nothing in it is stamped `deployed`, because no script stamps it yet.
3. **Held findings (V58).** Running the validator on the real data found three faults in Psychology's `subject.blurb` (it types two of the gate's answers, and uses "move", which the key's own avoid list forbids). They are held in `tests/lessons/held-findings.json`, which may only shrink, until the gate and its wording are rewritten with Unit One (F6 step 4).
4. **Back inside a drill, the minimum for "Review these first", "try anyway", and the log export** are settled in E11, E12, E13 and E19.
5. **The faulty-claims tile** (E14) is built, and runs the finished units' claims with the commit before the fault. Its tries carry `context: 'again'`.
6. **The progress screen** shows first-try accuracy per subject from the practice record; the old counters are labelled "Old lessons", count only the subjects that still have old units, and are not added to anything. Mixed's "Lifetime" is computed from the record, with the old counter beside it (E8, E14).
7. **`FC.ENGINE` is 2**: the app's own wording changed (Back in drills, the claims tile, the Progress screen, the facts table).
8. **Not built yet, from section 5:** E3's setting "type my reason first" (there is no settings screen); E10's accuracy on cases first met today beside returned ones (a drill and a returned set never meet on one screen, and Progress does not split them); E12's figure that marks a unit as under-taught for its author (no author-facing report exists); E15's deploy-time list of draft units and unverified `wrongIdeas` (the deploy script does not print it). Everything else in E1 to E21 is built and has a browser check.

## 17. Revision of 2026-10-05, third part: what the first real gate unit and the rebuild of Psychology decided

Psychology was rebuilt whole (a gate unit and three branch units) and six more keys were rewritten. Building on real data, not fixtures, settled these:

- **Gate units in the validator.** A gate case has no `outcome`; what it is a case of is the family its gate answer names. V31 (routes), V35 ("not" is a ledger neighbor), V54 (echo) and V7 (a family is introduced by its own `meet` card) read it that way. A gate answer's plain words and what it needs are printed by `{plain:optionId}` and `{needs:optionId}` (S5: the id is the family's id), never `{needs:D1.optionId}`.
- **The earlier questions a unit prints are the ones on its own routes.** The `orient` card, the side-by-side table and the `finish` stage print the assumed questions that the unit's outcomes pass through (the gate, and earlier questions of their own branch), not every question an assumed unit taught (S2 `assumes`). The app calls these `priorSteps`.
- **A look-alike pair may span two branches** (S3). Its `step` is the first question on the two routes on which they share no answer, which for two names from different branches is the gate; that question must be taught by the unit or by a unit it assumes.
- **Key wording is matched as whole words** (V2, V8): the term "rate" is not typed inside "separate". **Other names may be quoted** (V8, K5): outside the `meet` card an `aka` word may stand inside quotation marks, as words someone says.
- **What to do** (P26): an action subject's portraits carry `act`, printed after `ask` and in the recap (V59).
- **Old course entries are numbered by position** (F5): an old unit with no `id` is unit `u<position>`, both before and after the first unit of its subject is rebuilt.
- **What an assumed unit taught may be used from the first card** (V7, S2 `assumes`): its terms by `{t:}` and its names by `{o:}` (and the gate's families once the gate unit is assumed). They are not taught again.
- **A side-by-side table shows every question on the pair's routes that the learner has been taught**, in the key's order; where a question is not on one name's route its cell says "Not asked on its route" (E2, S3).
- **Fact units on real data.** V54 (echo) applies to branch and gate units only, as the section 8 table says. An action subject's fact unit closes with the plan card as well as the recap (V25).
- **Words are compared without a possessive "’s"** (V2, V8, V50), so "House’s" is not read as "houses".
- **Procedure units on real data.** Earlier problem types come back unlabelled: a later unit's `{ earlier }` items and the Mixed drill draw a procedure unit's drill and return problems too, and ask them as `route` items (choose the procedure, then solve), A12. A solved step's `does` and `working` take tokens, so a step may name a key term by `{t:}` or `{o:}`.
- **The names a drill offers** at a naming step are every name of the case's branch taught by this unit, by a unit it assumes, or by a unit already done, and always include the case's own name (E6).
- **A card read before some names are taught** (a `question` card, the line after a check) shows a name not yet met by its plain words, never by its name (P3).
- **One branch, one unit.** A question's teaching card prints all its answers, so one question's names are taught in one unit; Psychology went from six units to four for this reason (A13 parts organise a large branch).

## 18. Revision of 2026-10-05, fourth part: the old card format removed

No subject used the old card format any more, and the owner said to delete it. The one way is now the standard: every unit is registered at standard 1 and run by `public/app/lessons/*.js`.

- **Deleted:** `FC.legacy` and the standard-0 shape; the old course reader, quick drills, faulty-claims drill, old determination, old reference sections and old progress counters (`app/lesson.js`, `app/drills.js` and the old branches of `state.js`, `subject.js`, `library.js`, `reference.js`, `search.js`, `mixed.js`, `progress.js`); the `-new` suffix of the files that replaced them (`mixed.js`, `progress.js`, `search.js` now hold the one version); the rules for a subject whose units are not all registered (the key map no longer holds back branches, the reference has no "Units not yet rewritten" section); the standard-0 list and V48; the standard-0 allowances in V45 (a unit of standard 0 with `rev: 0`) and V47 (the line-limit exemption); the validator's skip of subjects and units below standard 1; the mixed-standards fixture; and the written card pattern.
- **Added:** V0 requires every unit a subject lists in `units` to have a unit record (the app builds a subject from that list), and V45 requires `standard` from 1 to `FC.STANDARD`.
- **Kept:** the migration of old progress (E8, X4), the `pl:` key names, and the "Rebuilt: start again" status it produces. Old counters in storage (`stats:*`, `pl:mixed`) are left unread.

## 19. Revision of 2026-10-05, fifth part: quick lessons (overrides every rule above where they conflict)

The owner's first look at the rebuilt units: they read like a course for a specialist. A median unit carried about 12,000 words on its cards, 45 drill items and 80 cases, eight times the old units, well over an hour before the drill. That is not what Fieldcraft is for. **Fieldcraft is pragmatic knowledge for someone who is not specializing in the subject: quick reads, the most value per minute.** "No length limit on any explanation" (section 1 and P6, P7) means an explanation is never cut below what a beginner needs to understand it. It never means write more, and it never licenses a card, a case or a drill item that does not change what the reader can do.

**The rule: understand and remember, nothing else.** A beginner reads the unit once and can explain the idea and use it. Every card, case and drill item earns its place toward that. Cut repetition, restatement, extra cases that teach nothing new, and machinery for its own sake. There is no word count, range or target, and no test enforces one: a number becomes something to fill (the owner: "word count is not the goal. easy to understand and remember the knowledge is the goal"). Never add words to reach anything; never cut what a beginner needs to understand. `tools/measure.mjs` reports how long one read-through of each unit is, as information only.

**What a unit holds.** For each name: a `meet` card (one short everyday case, what to point to, the answer and the name, and in an action subject what to do) and a `check`. `again`, `portrait`, `lens`, `transfer`, a `name` or `finish` stage and reverse items are optional: use one only where it is the cheapest way to make a point stick. `lookalike` cards only for the pairs people really confuse; every ledger pair is still taught somewhere (a `lookalike`, an `exception` or `taughtIn`). One `question` card per question, one `worked` case (one `solved` card per procedure). The drill: the stages that carry the skill (`piece` and `route`; `fact`; `route` for procedures), each name the answer of at least one whole case, one return case per name (two in an action subject). A fact unit keeps the facts most worth knowing, not every fact the material supports.

**How to write to it.** Lead with the point. One case per idea, the shortest that shows it. Say a thing once. Cut every sentence that a reader would not miss.

**Engine wording cut to what the learner needs** (`FC.ENGINE` 3). Feedback is right or wrong, the reason, and after a miss one line (E5); the comparison card's lines are never pasted into a miss, and `echo` prints no "likeness" line. The `meet` card no longer prints "Stripped of its story" or restates the question and its answer; in a gate unit no card or line says the answer is also the name, and a gate's worked case has no "Still possible" readout or "Name it" line. Stage instructions say what the learner does, in a few words; the drill intro says the cards are out of view, look-alikes sit together, and misses come back. `wouldChange` is written only on the few cases where it teaches something the cards did not.

## 20. Revision of 2026-10-07: plain, concrete writing (overrides every rule above where they conflict)

The trim fixed the length, but the writing was still abstract ("one person, something that is theirs, and the reasons they give"). The owner approved a standard on the TMV coach course (`docs/product/coaching-course/lexicon.md` in the TMV Training App), and every unit is rewritten to it.

1. **Who reads it.** The owner, a beginner, who wants the most useful practical knowledge on the subject in one quick read. Every card answers "what do I do with this, or how do I spot it in real life?"
2. **One plain word per idea, and banned words.** The subject's words live in its key: the names, the answers, the terms, and `avoid` (each banned word with what to say instead). The abstract summary words banned in every subject ("kind of thing", "case", "point to", "what it is made of", textbook words) are one list, `ABSTRACT` in `tests/plain-words.mjs`, checked by V62 on every unit, key line and subject note, and by the browser tests on every screen. The learner's word for a short real-life example is "story".
3. **Order inside a card.** A real, everyday story first, then the idea. Wherever a card explains how to tell, decide or do something, use numbered steps: each a clear action in bold, with its example built in, then ONE short sentence of why. Never cram an example, a counter-case or a quote into the why line. Steps are a field of their own: a meet card's `spot` ("How to spot it", required), and `act` and a question card's `how` (steps or text).
4. **One card, one idea.** A meet card is its story, the idea in a short paragraph or two, how to spot it, and the name. It has no stripped-down summary list (`strip` is gone) and no "what you must be able to point to" line (the steps replace it; the `needs` line stays only where two names are compared, as "What to look for"). Two names compared get no side-by-side table.
5. **Questions.** One question tests one idea in a real situation; each wrong answer is a mistake a real person makes; the answers are about the same length.
6. **The payoff plainly, up front.** The orient card says what the unit is for in the reader's life (Psychology Unit One: before you call someone manipulative or a narcissist, check what you are looking at). Names are plain and short and still mean exactly one thing ("Something one person does to another" became "Something done to someone").
7. **No word targets.** As many words as understanding needs, and nothing else.
8. **One name per idea.** A meet card is titled with the name itself. Its plain one-line description appears beside the name only where the answers are listed (the orient card).
9. **Feedback is short.** A story's reason, its `not.why`, a `miss` line, a tappable piece's note, `wouldChange`, a claim's `fault` and a prompt choice's note are each at most two sentences, quoting the words that decide it (V63). The app's own closing line is one short sentence ("That makes it «answer».").
10. **The orient card shows the question and its answers, nothing about them.** No preamble: the question, then each answer with its one-line meaning (a gate unit) or the names it leads to, then each name in one line.
11. **The bar is the owner's read, more than the validator.** Before a unit ships, read its learner view as the owner would, and fix any card that takes a second read to understand.
12. **A pair taught on its own question's card is named by the app.** That card prints every such pair by name under "When two answers both seem to fit", so V15 accepts it without the card's prose listing the names again.


## 21. Revision of 2026-10-09: sound (adds to sections 4, 5 and 8; changes no earlier rule)

Singing is taught through the learner's own voice, and a note is something you hear, not something you read. The app can make a note and listen for one with no sound files, so a unit can let the learner hear what a note a shade under sounds like, and check their own voice against a note. The assessment and the plan are in `docs/singing-audio.md`. This section is the rule for sound in any subject.

1. **What it is.** A card may carry one optional `audio` block. It is allowed on `term`, `meet` and `question` cards only. It is never allowed on a card that waits for an answer (`check`, `again`, `lookalike`, `exception`, `worked`): sound there would give the answer away before the learner commits (X2). The block is card content like any other field, so adding or changing one raises the unit's `rev` and the lock (R2, R5).
2. **Two kinds, and nothing else yet (S4).**
   ```js
   // a few buttons, each plays one short made-up sound
   audio: { kind: 'tones', says: Text, examples: [{ label: str, play: [Tone] }] }
   // pick a note, hear it, sing it; the app says whether you are under it, on it or over it
   audio: { kind: 'notecheck', says: Text, notes?: ['C4','D4','E4','F4','G4','A4','B4'],
            answers: { under: 'P1.under', on: 'P1.match', over: 'P1.over' } }
   // a Tone is one steady note, or one note that moves
   Tone = { note: 'D4', at?: 0, cents?: 0, ms: 3000 }                                // steady: note plus cents, for ms
        | { note: 'D4', at?: 0, path: [[0, -30], [1800, -30], [2800, 0], [4500, 0]] } // moving: [ms, cents] points, straight lines between them
   ```
   - `says`: one to three plain sentences saying what the learner will hear and what to listen for, or what the tool is for. It is shown above the buttons, and the learner view prints it in place of the sound, so the lesson reads the same without sound.
   - `label` is plain words and may carry an answer token (`{a:STEP.option}`, under the usual order rule V5). An example of a note a shade under is labeled with the key's own answer for it, so the words on the button, the question and the drill are the same words.
   - `note` is a letter A to G, an optional `#` or `b`, and an octave from 2 to 6 (A4 is 440 Hz, equal temperament). `cents` and path offsets are hundredths of a half-step between -1200 and 1200, positive being higher. `at` is when the tone starts, in milliseconds after the tap. A `path` starts at time 0 and its times rise. Limits: at most 4 examples per block, 4 tones per example, 4000 ms per tone and 6000 ms from the tap to the end of an example. The tones of an example sound together.
   - `notecheck.answers` names, as `STEP.option` of the key, the three answers of the one question the unit teaches that the tool reports. The tool prints the key's own wording for them, so it never has a second vocabulary. The three must be different answers of a step the unit teaches.
3. **Where it sits (E2).** `term`: after the card's last paragraph. `meet`: after `explain`, before the steps. `question`: after `how`. A `tones` block is headed "Hear it" and a `notecheck` block "Try it" (app wording).
4. **Sound plays only on a tap (E22).** Nothing sounds, and no sound context is created, when a card, a unit or a drill screen opens, when the learner answers, or when anything moves. Each example button starts its sound; tapping it again stops it; starting another stops the first; the button shows that its sound is playing and goes back when the sound ends. The sounds are plain, soft tones made by the app, with a quick fade in and out. Any repaint of the unit, Back, Next, a jump in the card list, leaving the unit, closing a card sheet and the page being hidden stop every sound and switch the microphone off. The app uses no timers for any of it (X1): sound is scheduled on the sound system's own clock, and the live reading redraws on the browser's frame loop.
5. **The note tool (E23).**
   1. *Pick a note.* One button per note in `notes`. A tap plays that note for about 1.5 seconds and makes it the target. The same note can be tapped again to hear it again.
   2. *Sing it.* A "Start the microphone" button is the only thing that asks for the microphone, and only when tapped. While it is on, the tool shows one line and a needle: "Listening..." until it hears a steady note, then the key's answer for what it hears (`under`, `on` or `over`), with a needle that moves from under (left) through on (middle) to over (right). Stop turns the microphone off.
   3. *How it decides.* The sung pitch is found from the microphone's sound with a standard method (McLeod, the normalized square difference function) between 70 and 1100 Hz. A reading counts only when the sound is steady and clear enough, and the verdict uses the middle of the last five readings, so a wobble does not flicker. The learner may sing the note in any octave: the distance is measured to the nearest octave of the picked note. The tool says `on` within 30 cents of the note, `under` below that and `over` above it, and the needle is full at 100 cents. These numbers are named constants in one place (`public/app/lessons/audio-notes.js`).
   4. *No echo.* While the app's own note plays, and for a quarter second after, the microphone is ignored, so the tool never hears itself.
   5. *Not available.* If the microphone is refused or missing, one plain line says so and the notes still play.
   6. *Private and unscored.* Sound from the microphone is analyzed on the device and thrown away: never recorded, stored or sent anywhere, and a line on the tool says so. Nothing from the tool is written to `localStorage`, scored, counted in progress or logged (X5).
6. **Words.** Every sentence the app prints around sound is app wording in `SAY` (`public/app/lessons/view.js`), in plain words a beginner can follow with no music jargon (no octave, cents, hertz, semitone, frequency or pitch), and the learner view prints it from `SAY` too. `FC.ENGINE` goes up to 4 because app wording changed.
7. **Learner view.** In place of the sound, the learner view prints the block's `says`, then each button's label (tokens resolved), and for a `notecheck` the notes the learner can pick and the three sentences the tool can answer with, so a unit can be read without sound.
8. **Validator.** New rules, V64 to V68 (free when they were written), each with a seeded fault that turns exactly its own rule red. V64: `audio` only on `term`, `meet` and `question` cards (the shape of V0 allows the field on those three only, so on any other card V0 reports first and V64 states the rule). V65: `says` is present and at most three sentences. V66: labels are present and not repeated within a block, and the counts stay inside the limits above. V67: note names and numbers stay inside the limits above (a note is A to G with an optional `#` or `b` and an octave from 2 to 6; `cents` and path offsets within 1200; `at` 0 or more; `ms` above 0; a path of at least two `[ms, cents]` points that starts at 0 and whose times rise; a tone at most 4000 ms; an example ending at most 6000 ms after the tap; a `notes` list with no note twice). V68: a `notecheck` names three different answers of one question the unit teaches. The plain-words (V50, V62), token-order (V5), key-wording (V2), token (V3), step-code (V4) and American-English (V60) rules apply to `says` and `label` as to any card text; note names, numbers, `kind`, `notes`, `answers` and `play` are structural and are not read as prose.
9. **Browser checks.** X8: before a tap, on every card of every unit that has audio, no sound context exists, nothing sounds and the microphone has not been requested. X9: a tap on an example plays the notes the data names, read back from the sound system, and Next, Back and leaving stop them. X10: a known note fed in as the microphone is reported `under`, `on` or `over` correctly, an octave away still counts, and the microphone is released on Stop and on leaving. X11: nothing audio-related is stored. X12: no overflow and no clipped text at 360 and 390 px.
10. **Not built.** Recorded clips of a real voice: pushing, cracking, squeezing, an airy tone, a nasal sound and a muffled sound cannot be made by the app. The list of clips to record is `docs/singing-clips.md`. A `clip` kind is built when the clips exist, in a later revision; until then those cards teach those names in words.

**What the build settled** (2026-10-09, the lesson side: the validator, the learner view, Singing Unit Four and the documents).

1. **V64 to V68 were free.** No id was taken, so the section numbers stand. V64 to V68 are in `tests/lessons/rules-audio.mjs`.
2. **One set of numbers.** The limits of item 2 (examples, tones, milliseconds, cents, the note pattern) are the app's `AUDIO_LIMITS` and `AUDIO_NOTE_PATTERN` in `public/app/lessons/audio-notes.js`. `tests/lessons/audio-limits.mjs` reads them out of that file, so the validator and the app cannot disagree. Only the limit on `says` (three sentences) is the validator's own, named in `rules-audio.mjs`.
3. **A design that went past the limit was shortened.** The first design for the flat and sharp sounds ran 4500 ms, and item 2 limits a tone to 4000 ms (the app refuses a longer one). The limit stands and the two sounds were shortened to 4000 ms: the second note's path is `[[0, -30], [1600, -30], [2500, 0], [4000, 0]]` (`+30` for sharp), so it still starts a shade off, wobbles against the first note, and slides into it, with a second and a half of one steady note at the end.
4. **Prose and structure.** `says` and every `label` are prose. A seeded fault proves each of these reads them: a word the app avoids in `says` (V50), an abstract word in `says` (V62), key wording typed in a label (V2), a token that names nothing (V3), a step code in `says` (V4), British spelling in a label (V60), and an answer used before its card in a label or in `says` (V5). `text.mjs` marks `audio.notes`, `audio.answers` and `play` structural, and a control with valid note names, numbers, `kind` and `answers` in two blocks goes green; without those three patterns the same control goes red (V4 reads `D4` as a step code), which is how it was seen to bite.
5. **The note tool's answers are not checked for order.** `answers` names the three answers by id, and the app prints the key's own wording for them as the tool's feedback. On Singing Unit Four the tool sits on the note-check card, ahead of the cards that teach those names, so a learner sees "A shade under the song's note" on the tool before the meet cards teach it. V5 reads prose and `answers` is structural, so it does not object. If the owner reads that card cold and finds the wording confusing there, the tool moves to a card after the names are taught.
6. **Labels are compared as written.** V66 compares labels by their text with the tokens unresolved, so two buttons that print the same words through different tokens would pass; two tokens print two different answers, so this cannot happen.
7. **Learner view.** `tools/learner-view/render-audio.mjs` prints the block in the order the app shows it, and reads every sentence the app prints around the sound from `SAY` in `view.js` through `tools/learner-view/say.mjs`, which cuts the object literal out of the source and stops, naming the key, when one is missing. A unit with no sound needs none of it. The note buttons are printed as letters, as the app shows them.
8. **Singing Unit Four is at rev 2**: the note tool on the note-check card (and one added sentence on that card), and example sounds on `meet-onnote`, `meet-flat`, `meet-sharp`, `meet-scooping` and `meet-guessing`. Nothing else in the unit changed. The key and the subject record did not change.
9. **The clips.** The names sound cannot make are listed, with what to record and how, in `docs/singing-clips.md`.

## 22. Revision of 2026-10-10: the baseline question (changes E21 and the title of P26; `FC.ENGINE` 5)

The screen before an action subject's first unit asked "Is this real, or is something wrong with it?", and its buttons were "Real" and "Something is wrong". That was written for Scams, where a message is real or fake, and it was shared by every action subject. It read wrongly everywhere else: a choir habit in Singing, a retirement-account practice in Wealth Preservation and a survey in Statistical Claims are not real or fake, and a newcomer to Singing could not see what "real" had to do with singing.

1. **The words.** The question is "Is something wrong here, or is it fine?", the buttons are "It is fine" and "Something is wrong", the one-line intro says "say whether something is wrong or it is fine", and the feedback shown when the unit is finished says "It was fine." or "Something was wrong with it." They are the app's own wording (`SAY` in `public/app/lessons/view.js`), the same for every action subject.
2. **The rule behind them.** The baseline asks only whether something is wrong with what the story describes. It never asks whether a story is real, fake, true or legitimate: those words belong to one subject and do not carry to the others.
3. **What did not change.** The stories, the answers, the marks and the storage (E21): a sound case is still the one `v.isLegit` says it is, the tries are still stored with `context: 'baseline'` and never scored, and the feedback still comes back only on the finished unit's complete screen. No unit's content changed, so no unit revision, no fingerprint and no lock entry changed.
4. **Checked in the browser.** `tests/e2e-kinds.mjs`: the question and the two button labels are read off the first baseline screen (`baselineWords`), and a seeded fault that puts the old question back turns exactly that check red.

## 23. Revision of 2026-10-10: subjects are designed through the build-subject gates (overrides every rule above where they conflict)

Singing was built as stories to sort, the Scams template, and was useless for learning to sing. Every check passed,
because every check asked whether a lesson was well built and none asked whether it teaches. The cause was the process:
the design started from the engine that existed, and even `docs/learning-science.md` fixed the task ("diagnostic
classification") before looking at any evidence. From now on:

1. **The one goal** is that the learner efficiently learns the subject: after it, they can do the thing in real life.
   Every earlier rule in this standard is an input to that goal, kept where it serves it and overruled where it does not.
2. **Every subject is designed through the global `build-subject` skill** (`~/.claude/skills/build-subject/SKILL.md`): the
   kind of learning and its evidence; the end result, the real moment and a real-world test (the owner approves); the
   practice method and whether the app can deliver it (the owner approves); the parts of the end result; each lesson's
   design; one pilot lesson the owner tries; then the rest.
3. **The design record** is `docs/subjects/<id>/design.md`: its opening JSON holds `kinds` (facts, judging, procedure,
   body, habit), `endResult`, `realMoment`, `test`, `practice` and `approved` (`endResult`, `practice`, `pilot`: a date
   or null); the gates' reasoning follows in prose.
4. **V69** (`tests/lessons/rules-design.mjs`): every subject has a valid record; no lesson content (a unit, the subject
   record, the key, the specimens) is written or changed, measured against the last commit's lock, before the owner has
   approved the end result and the practice method; and no unit past the first is written before the owner has approved
   the pilot. Content that matches the last commit predates the gates and waits for its audit (gates 4 and 5, designed
   blind). Seeded faults: four that turn V69 red and one that must stay green (the pilot unit, once approved).

## 24. Revision of 2026-10-10: the weekly review (replaces "Due today" and the Mixed drill; changes E9, E10, E14)

The evidence is `docs/research/review-after-lessons.md` (R1 to R9). The schedule of E9 already follows it: a name comes back
on a story not seen before, next to the name it is most often taken for (R8, R9), a miss sets it back (R2, R7), the app and
never the learner decides what returns (R3), and it retires after three separate good days at gaps of 2, 7 and 24 days (84
more in an action subject) (R2, R4, R6). What changes is how it is met: one review a week across every subject, in place of
a per-subject "Due today" set of at most six and a Mixed drill that drew random items (R3: the app decides, by the record).

1. **One review.** "Due today" (the per-subject tiles, the `due` screen, the set of at most six) and the Mixed drill (the
   tab, `mixed.js`, its random pool and its "Lifetime" figure) are deleted. The tab is "Review". Earlier tries with
   `context: 'return'` or `'mixed'` stay in the record and count as before; new review tries have `context: 'review'`.
2. **What it holds.** Every name and fact that E9 makes due on or before the end of the current week (weeks run Monday to
   Sunday, local time), in every subject, each asked with its E9 pairing. No size cap and nothing random: the length is
   whatever is due.
3. **How it runs.** Only questions: no cards. Subject by subject, each part run as a returned set is (the whole route on a
   new story, or the fact from memory), with the answer and the reason after each item (R7) and every miss asked again at
   least three items later until it is answered right (R2). A subject's saved plan (E18) is shown once at the start of its
   part. Back leaves the review; it is built again from the record next time.
4. **The tile.** On the library: "This week's review", with the number of questions due this week and the subjects they
   come from; when nothing is due this week: "Done for this week" and the date the next item falls due; before any unit is
   finished it says that the review starts when one is.
5. **Results** (E10): at the end, first-try accuracy per subject and in all, the names missed, and when the next review
   has something due.
6. "Review these first" (E12) and "Practice again" (E14) are unchanged: one is a hint before a unit, the other practice the
   learner chooses, and neither removes anything from the schedule.

## 25. Revision of 2026-10-10: practice units, where the learner does the skill (adds a unit kind; a subject may have no key)

Built for Singing (`docs/subjects/singing/design.md`, gates 3 to 5; evidence `docs/research/learning-to-sing.md`, S1–S6),
and general enough for any body skill the app can measure through the microphone.

1. **Kind `S`.** A practice unit: `{ id, kind: 'S', tag, title: { text }, subtitle, rev, standard, status, part, why,
   exercises, check, history }`. `part` is the gate 4 part it serves (an integer); `why` is Text of at most 90 words (a
   minute of reading, S6); `exercises` is a list run in order; `check` is the part's check. No cards, cases, key or drill.
2. **Exercise types**, each `{ id, type, withLine, withoutLine, ...params }` (`withLine` and `withoutLine`: tries with
   the pitch line shown, then hidden, S3):
   - `range`: two easy slides, up then down; sets the learner's range (lowest and highest steady note reached). No params.
   - `match`: one note, heard then sung. Notes are drawn at random from the middle of the range.
   - `hold`: a matched note held; `seconds` (2 to 6).
   - `slide`: two notes heard, then a slide from one to the other that lands; `maxSemitones`.
   - `interval`: two notes heard, then sung back; `minSemitones`, `maxSemitones`.
   - `melody`: `notes` (3 to 5) heard, then sung back; `maxStep` in semitones; the last note is long.
   - `light`: a loud note and a talking-loudness note set the scale, then notes from the top fifth of the range at no
     more than talking loudness.
   Every target lies inside the learner's range (S1). Without a range the unit opens the range exercise first.
3. **Turn-taking.** The app plays the target (the learner listens; the microphone is ignored while it plays and for a
   quarter second after, as in section 21), then the learner sings in a window sized to the target (each note's length plus
   0.4 s; a hold's seconds plus 1 s). Timing runs on the audio clock and animation frames, never timers.
4. **Scoring.** Pitch readings come from the section 21 finder. A note's sung pitch is the median of the middle 60% of the
   readings in its window, folded to the octave nearest the target; it is on when within `check.cents` (25 by default) of
   the target. A hold is the longest run within the tolerance; a slide is scored on its last 0.4 s; `light` compares the
   median loudness with the learner's own talking note (at most 15% above it) as well as the pitch.
5. **The pitch line.** A strip shows time across and pitch up, the target notes as bars and the learner's voice as a line
   drawn as they sing (S2). In the `withoutLine` tries neither is drawn while singing; the result is shown after (S3).
   Results are words: "On the note", "A shade under", "A shade over", "Well under", "Well over"; never cents or hertz.
   Instructions name the sound and the line, not the body (S4).
6. **The check** (`{ type, tries, pass, cents?, holdMs? }`) is the part's check from gate 4, always without the line. Its
   result is shown as "4 of 5 on the note: passed" or "3 of 5: not yet". A unit is done when its check has been tried once.
7. **What is stored** (E8): the range as `notes[<range unit id>].range = { low, high, set }` in `pl:<subject>:notes`; each
   try as a practice-record entry on item `<unitId>/<exerciseId>` or `<unitId>/check` with `mode: 'sing'` and an optional
   `cents` (the median error, rounded). No sound is stored or sent.
8. **The weekly review** (section 24) asks a practice unit's check again, by the E9 schedule applied to `<unitId>/check`:
   the review of a skill is doing it (R8).
9. **A subject with no key.** When every unit of a subject is kind `S`, `FC.key` and specimens are absent; the subject
   screen lists its lessons and has no map, reference or determination; key rules (V1 to the drill rules) do not apply to
   it. A subject mixing kinds is not allowed until a subject needs it.
10. **Validator and browser checks.** V70: the shape and limits of a kind `S` unit (types, params in range, `why` length,
    `check` fields, `part` matching the design record's gate 4 map). Browser checks feed known pitches as the
    microphone (the section 21 recorder): a sung note within and outside the tolerance is scored on and off, octave folding
    holds, the line is drawn only in `withLine` tries, the range is stored once and every target lies inside it, nothing
    sounds or listens before a tap, and nothing but numbers is stored. Each check has a seeded fault.
7. **As built** (`public/app/lessons/review.js`; `reviewItems`, `weekEnd` and `nextReturnDate` in `records.js`; `reviewRun` in `drill.js`).
   Nothing in 1 to 6 changed; what the build settled: Back (the arrow or "Back to the library") leaves the review for the library
   and records nothing. A finished part is still logged as `return` for its subject, so the Progress count of days returned keeps
   its meaning. With no cap, a name that is the usual confusion of several others is asked beside each of them, so its stories can
   run out inside one review; the story asked again is then one the learner has seen, and the repeat is logged as E9 says. The
   results give the date of the earliest question still to come after today, or say that skipped questions are still due.

## 26. Revision of 2026-10-10: the practice engine (overrides every rule above where they conflict)

All eight subjects went through the `build-subject` gates and all eight came back "rebuild from scratch"
(`docs/subjects/<id>/design.md`). The engine of sections 1 to 22 (a key, routes, stories sorted into names, choice drills)
was built for one task and then forced on every subject. This section is the one engine for all eight designs: one set of
building blocks, no per-subject code. **A lesson is a short why, a sequence of practice items, and the end check of its
gate 4 part.** It replaces sections 1 to 22 and 25 where they conflict, and the drawing of questions in section 24 (26.4).
`FC.STANDARD` becomes 2 and `FC.ENGINE` 6.

### 26.1 The data model

Files (F1 to F4 still hold: classic scripts, one frozen registry, every file under 800 lines and listed in `index.html` and
`SHELL`):

```
public/subjects/<id>/subject.js       FC.subject   the record: lists, rules, facets, strands, review, private forms
public/subjects/<id>/l<N>.lesson.js   FC.lesson    one lesson
public/subjects/<id>/items-<k>.js     FC.items     fixed items, in as many files as needed
public/subjects/<id>/gen-<k>.js       FC.gen       items made with fresh numbers (Math, Wealth)
```

**Subject.**
```js
FC.subject('stats', {
  name, rev, standard: 2, history,
  endResult: Text,                         // the design record's endResult, word for word (V80)
  lists: { verdict: [{ id, text }], slip: [{ id, text }], ... },   // option lists worded once, printed by the app
  rules?: { [ruleId]: { name, needs: [{ id, text }] } },          // what a label or a word requires (Ideology, Psychology)
  facets: { [facetId]: { name, values: [{ id, text }] } },        // how results and pass rules count items apart
  mix: [{ facet, value, min?, max? } | { facet, equal: true }],   // what every set and check must hold (V76)
  strands: [{ id, title }],                // what the review schedules (26.4)
  review?: { gaps?: [2, 7, 24], every?: days, dateField?: 'answers.interviewDate' },
  readingShare: 0.25,                      // the most of a lesson that may be reading, from the design's gate 3 (V73)
  timed?: true,                            // only a subject whose design times its items (Scams)
  refs?: [{ id, text, value, asOf, source }],     // dated values looked up, not memorized (Wealth's reporting threshold)
  own?: { [formId]: Form }                 // the learner's private data forms (26.3)
});
```

**Lesson.**
```js
FC.lesson('stats', {
  id: 'l2', part: 'B', role?: 'baseline',  // part is a gate 4 part id; only a baseline has part: null
  title, rev, status: 'draft' | 'live', history, tried?: { date, words },
  why: Text,                               // one screen
  flow: [Step],
  check: Check });
Step  = { show: [Block], title }           // a teaching screen: a rule, a wrong idea, a contrast pair, a map
      | { worked: itemId }                 // an item shown answered, step by step (one optional choice to commit to first)
      | { set: Set }
      | { own: formId, model?: itemId }    // the same step on the learner's own data (26.3)
Set   = { items: [ItemRef | [ItemRef, ItemRef]],   // an inner pair is asked one after the other, its order random
          order: 'listed' | 'shuffle', support?: Support, seconds?: 15 | 20,
          mix?: { from: [lessonId], share }, over?: 'busy', plan?: true }   // plan: the saved plan shown before the set
ItemRef = itemId | { gen: genId, n, with?: params } | { sing: SingTask, n }
Check = { items: [ItemRef] | { draw: { strands, n } }, feedback: 'at-end' | 'after-each',
          pass: [PassRule], spoken?: true, seconds?, retest?: days }
PassRule = { ask?: askId, where?: { facet: value }, right?: { min }, wrong?: { max }, slip?: slipId, max? }
```
A check is written in the design's terms: "8 of 10, no control pattern missed, at most one ordinary moment labeled" is
`[{ right: { min: 8 } }, { where: { kind: 'control' }, wrong: { max: 0 } }, { where: { kind: 'ordinary' }, wrong: { max: 1 } }]`;
"no scam acted on" is `{ slip: 'acted', max: 0 }`; "4 of 5 on each side" is two rules with `where: { side }`.

**Item.** Every item in every subject has one shape: what is shown, what is asked, and why.
```js
{ id, strand, facets: { [facetId]: valueId },
  blocks: [Block],                         // what the learner sees
  asks: [Ask],                             // answered in order on one screen; each opens when the one before is answered
  steps?: [{ id, does: Text, working: Text, ask?: askId }],   // the working: shown in worked items and feedback, left to
                                           // the learner by `support.leave`
  reason: Text,                            // why the right answers are right, quoting the deciding words
  deciding?: [segmentId | rowId],          // highlighted in the blocks after the answer
  need?: Text,                             // what you would need to see for it to hold; the fair comparison (Stats)
  has?: { [needId]: segmentId | null },    // each requirement found (where) or missing (Ideology, Psychology)
  fact?: itemId,                           // the interview question a news answer rests on (Civics), printed from that item
  redraw?: 'from-zero', figure?: Block }   // pictures added to the feedback
```
**A generator** (`FC.gen`) is an item whose numbers are made fresh each time: `{ id, strand, facets, params: { name: [min,
max, step] | [choice, ...] }, make(pick, params) { return { name: number, ... } }, ...the item fields }`. `make` is a pure
function: the same seed gives the same numbers. Text in blocks, asks and steps fills `{name}` slots from its values; an
ask's `answer` and each slip's `value` name a value; a household of documents (Wealth) is one generator. A try stores the
seed, never the numbers (26.3), so the exact problem can be rebuilt.

**Asks**: the responses, each defined once.

| Kind | Shown as | The learner | Scored | After a miss, one line from |
|---|---|---|---|---|
| `choose` | buttons: `options: [{ id, text, ok, slip?, then }]`, or `from: listId` with `right` (and `only`) | taps one (`many`: several) | right if every tapped option is `ok` | the chosen option's `then`: the consequence or the slip |
| `tap` | the `lines` of block `in` become tappable; `none` adds "Not given" or "No demand here" | taps one segment (`pick: n`: n) | right if the tapped set is `right` | the tapped segment's `note` |
| `number` | a `frame` with slots ("from __ in 1,000 to __ in 1,000"), the `unit`; `estimate` puts an estimate box first; a calculator button except on the estimate | types numbers | each slot within `tol` (`abs`, `rel`, or the stated `round`); an estimate within half to double | the slip whose value it matches: "That is the answer you get when …"; else the working |
| `text` | a question (read, or `spoken`) and a "Not yet" button | types words | matches an `accept` entry after normalizing: case, punctuation, one small misspelling, words in brackets optional, number words equal digits; `count: n` needs n distinct accepted answers; `accept: { own: 'answers.q23' }` reads the learner's own entry; `model` in place of `accept` is shown after for the learner to compare, not scored | every accepted answer, and the `meaning` line |
| `order` | `steps` to arrange | taps them in order | `first` (the first step) and/or the whole order | why the order matters |
| `sing` | the pitch strip (26.1.1) | sings after the target plays | 26.1.1 | the result in words |
| `exchange` | a call or chat whose turns arrive: `turns: { id: { lines: [Segment], push?, options: [{ text, goto } | { text, end }] } }`, `ends: { id: { ok, slip? } }` | picks a reply each turn; the next turn follows the reply | right if it reaches an `ok` end | at the end: the lines that pushed marked, and the turn where it could have ended |
| `form` | rows of fields (choose, number, text, date) | fills them in | when the item states answers, field by field as `number` and `choose`; with `into` (own data) never scored, saved (26.3) | the right value and the line of the document it comes from |

- **A verdict** is a `choose` drawing on the subject's `verdict` list, so its words are typed once and are the same in
  every lesson, check and result: Stats "holds up / does not show it / cannot tell from this"; Ideology "earned / not earned /
  too little to tell"; Psychology "the word fits / an ordinary moment / can't tell yet / a pattern of control"; Scams
  "risky / nothing risky"; Wealth "change it / leave it"; Civics "theirs to make / not theirs / being challenged in court";
  Math "right / wrong" for a shown total. `only` offers part of the list where a lesson teaches part of it (Psychology L2).
- **A fixed sequence of steps** is an item with several asks: Psychology (tap the act, what else would explain it, verdict,
  next step), Stats (verdict, deciding line or "not given", plain size), Civics news (who decided, theirs to make, who can
  stop it), Ideology (verdict, then the name the words earn, then the deciding words). `when: { ask, is: [optionIds] }`
  opens an ask only after that answer (Ideology's name after "not earned"; Scams' channel after "check it first"). An item
  is right when every scored ask is right; a pass rule may count one ask.
- **Wrong answers are named.** A wrong option, a number slip, a wrong exchange end or a tapped segment may carry `slip`,
  an id of the subject's `slip` list (Scams `acted`: did what a scam asked; Math `upside-down`, `wrong-whole`,
  `added-percents`, `rounded-down`). Results and pass rules count them.
- **Timeout** (a timed set): the item stops at zero and records `timeout`, a miss that is not a slip.

#### 26.1.1 Singing: the `sing` ask (absorbs section 25)

- **Tasks**: `warmup` (a hum or straw slide with the line, unscored, skippable; opens every lesson and the Singing part of
  the review, S5), `range` (two easy slides up and down; the lowest and highest steady notes become the range), `match`,
  `hold` (`seconds` 2 to 6), `slide` (`maxSemitones`), `interval` (`minSemitones`, `maxSemitones`), `melody` (`notes` 3 to
  5, `maxStep`, the last note long), `light` (a loud and a talking-loudness note sung first set the scale).
- **Targets are made fresh** from the learner's range, so every sung item is generated: `match` and `interval` from the
  middle of the range, `light` from its top fifth, and every target inside it (S1). A lesson whose learner has no range
  opens with the `range` task. In general: **a lesson that needs private data an earlier lesson makes opens that form
  first when it is empty** (Singing's range, Wealth's sheet).
- **Turn-taking, timing, scoring and words**: section 25 items 3 to 5, unchanged. The microphone is ignored while the
  target plays and for 0.25 s after; the window is each note plus 0.4 s, a hold plus 1 s; audio clock and frames, no
  timers; a note is the median of the middle 60% of its readings, folded to the nearest octave, "on" within `cents` (25);
  a hold is the longest run on; a slide is scored on its last 0.4 s; `light` also needs median loudness at most 15% above
  the talking note. Results are words ("On the note", "A shade under", "A shade over", "Well under", "Well over"), never
  cents or hertz.
- **The line** is drawn live only while the set's support has `line`; without it the strip shows the result after the try.

#### 26.1.2 Presentation blocks, each defined once

| Block | What it shows | Fields |
|---|---|---|
| `prose` | a short text: the why, a rule, a map in words; `tone: 'wrong'` shows a wrong idea marked wrong, the right line last | text |
| `message` | a message as it arrives on a phone. `form`: `sms`; `email` (display name, subject, link text); `popup`; `chat` (a marketplace or friend thread, with history); `call` (the incoming-call screen, the caller's lines as a transcript); `note` (your own note after an argument); `notification` (a banner over a busy task) | from, detail, subject?, lines: [Segment], link? |
| `article` | `form`: `news` (headline, body, source line), `post` (a label and the commenter's words over quoted words or a policy, with who said it), `ad`, `report` | headline: Segment, lines, source, label?: { text, by, side } |
| `chart` | a chart drawn as SVG from data: bars or a line, real axes (a cut axis allowed), a time window | type, title, x, y: { from, to, step, unit }, series, source |
| `document` | a statement or table: 401(k) statement, fee disclosure, IRA or brokerage statement, pay stub with the match rule, beneficiary page, foreign account summary, receipt, recipe card, price tag, loan or savings offer, plain table. A household's documents are tabs | form, title, rows: [{ id, cells }], notes? |
| `figure` | a fixed picture filled with numbers: the rate table (two rows), the 100% bar, a room plan with measurements, a year-by-year table, 1,000 people | type, data |
| `spoken` | a question spoken by the phone's own speech synthesis, with "Hear it again"; its words shown, or behind "Show the words" in the mock interview | text, show |
| `pitch` | the strip of a `sing` ask: time across, pitch up, targets as bars, the voice as a line | drawn from the ask |
| `panel` | what a label or word requires, printed from `subject.rules`, beside the item while support lasts | rules: [ruleId] |
| `pair` | two blocks side by side (stacked on a phone) and the one thing to compare | a, b, compare |

A `Segment` is `{ id, text, note? }`: every line or sentence that can be tapped or highlighted is one.

### 26.2 Feedback, fading and order

**Feedback after each item** (R7, M6, P19), in this order: each ask's mark (right, or the right answer); the deciding
words highlighted in the blocks (a document's line, a chart redrawn from zero, a figure filled with the item's and the
learner's numbers); `reason`; after a miss, one line on the learner's own choice; then what the item has of: the
consequence of the right action, `need`, each requirement found or missing (`has`), the working with the learner's own
numbers and the estimate beside the answer, the interview `fact` with its accepted answers. It opens only when the last
ask is answered, so no answer gives a later one away (X2). No praise (V36) and no length rule: feedback holds what the
design names and nothing else. Section 20's two-sentence cap (V63) is retired; the designs ask for more (Stats two to four
sentences, Math the full working).

**Fading: support fades, feedback after the answer does not.** Support is help during the attempt; the evidence for
fading (S3, the guidance hypothesis; M2; P17) is about that. Feedback after an answer stays (R7, M6), except where a test
holds it to the end.
- Support: `line` (Singing, the live pitch line), `panel` (Ideology, Psychology: the requirements beside the item),
  `shown` (Stats: the question shown, or the deciding line pre-marked to confirm), `leave: n` (Math, Wealth, Stats: a
  worked item with its last n steps left to the learner: last step, then last two, then the whole problem),
  `estimateCheck` (Math: "your answer and your estimate disagree; look again" before scoring).
- In a lesson, a set with support is followed by a set of the same strand with less or none (V79). Checks, the review and
  retests never have support.
- Checks give feedback `at-end` by default (one result screen, then every item's feedback, misses first); Singing's checks
  are `after-each` (the result word after a try is the faded form, S3). The baseline (Scams L0) and the mock interview
  (Civics) show nothing per item; the baseline ends with the design's one line.
- **Timed sets** (only where `subject.timed`, Scams: 15 or 20 seconds an item): a countdown drawn on the frame clock;
  nothing ever moves on by itself (X1). The design calls timing a judgement call (SC5); first-try accuracy timed against
  the end check is what tests it.

**Order and difficulty**, from the designs:
1. A new strand alone first, then mixed, unlabelled, with earlier ones (M4, R9): `mix.from` and `share` (Stats a third
   from lesson 3; Math three items from lesson 3; Civics the due items of earlier lessons).
2. Contrast pairs before mixed items (Civics, Scams L3, Psychology L3, Ideology): an inner pair is asked back to back.
3. Ramps are successive sets: Singing 2 then 4 second holds, steps then leaps, 3 then 4 then 5 notes; Math last step,
   last two, whole; Stats question shown, then alone; Psychology L3 each word pair, then mixed.
4. A missed item comes back at least three items later in the same set until right (R2); a generated or sung one comes
   back with fresh numbers or targets. Not in checks, baselines or retests: a miss there makes its strand due.
5. Every set and check holds the subject's `mix` (V76): Scams about half genuine; Stats sound and "cannot tell" items in
   every set; Ideology earned, unearned and too-little items, labels thrown from each side in equal number; Psychology about
   half ordinary, control in every set from L5; Wealth one item to leave alone in every set.
6. Scams exchanges raise the pressure on a hesitant reply (the branch); `over: 'busy'` runs a simple busy task in the app
   (sorting a shopping list by taps) while messages arrive as banners, and scores only the messages.

### 26.3 The record and the learner's private data

The storage key names do not change (owner).

| Key | Holds |
|---|---|
| `pl:<s>:items` | **the only practice record**: `{ [itemId or genId]: { tries: [Try] } }`, the last twelve per item |
| `pl:<s>:notes` | the learner's private data for the subject (below) |
| `pl:<s>:seen` | `{ [lessonId]: { rev, at } }`: the lesson's revision last opened and the place (a step index). Nothing else |
| `pl:log`, `pl:app`, `pl:recent` | unchanged (E19: sessions, "this confused me" reports, the export) |

`Try = { d, run, lesson, rev, engine, context, sup, seed?, a: { [askId]: answer }, r: { [askId]: 'ok' | 'no' | slipId | 'timeout' | 'claimed' }, ok, ms? }`.
`context` is `practice`, `check`, `review`, `retest`, `again` or `baseline`; `sup` says whether support was on; `run`
groups one sitting, so a check's result is computed from its run; `ms` is time to answer in a timed set. `a` holds what
was chosen, tapped or typed; a sung answer is numbers only (`{ cents: [...], holdMs?, loud? }`). Every figure the app shows
(done marks, check results, accuracy by facet, slips, due dates) is computed from `items`; nothing is stored twice. A
lesson is done when its check has one complete run. `claimed` is Civics' "my answer means the same": counted right in
that run and listed as "counted on your word", not a good session for the schedule, so the question returns.

**Private data**, in `pl:<s>:notes` only, never scored against a truth, never sent anywhere:
- `range: { low, high, set }` (Singing; measured, not typed);
- `sheet: { accounts: [{ id, type, balance, holdings: [{ name, value, kind, expense }], fees, matchRule?, beneficiary }], mix }`
  (Wealth). No field holds an account number, login or password, and a field refuses a run of 8 or more digits (V81, X24);
- `answers: { q23: '…', …, interviewDate? }` (Civics: the eight answers that depend on where and when, looked up by the
  learner at uscis.gov/citizenship/testupdates; read by `text` asks through `accept.own`);
- `plan: { cue, then, saved, shown? }`, one per subject (Scams, Psychology; optional in Stats); `setup: { [stepId]: date }`
  (Scams: own channels saved, marked by the learner); `lines: [{ d, text }]` (Psychology: a real label rewritten as what
  the person did);
- `actions: [{ id, what, where, when, done?, repeat? }]` (Wealth: every change dated; the yearly check is an action with
  `repeat: 'year'`); `triggers: { [id]: date }` (Wealth: a US job started, an account opened, a yearly statement came).

An own step shows the app's arithmetic on what was typed, warns outside the field's plausible range (an expense ratio over
2%, a share over 100%), and shows the matching line of a sample document as the model. The E19 export includes `notes`,
so the sheet leaves the phone only in a file the learner saves. Records of the old lessons stay in storage untouched and
unread (as E8 left the old counters) and stay in the export; nothing is computed from them.

### 26.4 Review (section 24's week, tile, screen and results stay; what it asks is new)

- **What is scheduled is a strand**: one thing that comes back as a new instance. A Civics question (the question
  itself), a Civics news question, a Scams kind of request, a Stats part, an Ideology label family, a Psychology word or
  judgment, a Math or Wealth kind of problem (fresh numbers), a Singing lesson's check (fresh targets).
- **Until right in three separate sessions** (R2, R4, R6): a strand is due 2 days after its lesson's check or after a miss,
  then 7 days after its first good session, then 24 days after the second, and leaves the schedule after the third. A good
  session is a day on which the strand's first item was right at the first try, in any context but `baseline`; a miss
  resets it. `review.every` keeps it coming back after that (Scams: 60 days, its principle 9); `review.dateField` adds
  rounds about a week apart in the six weeks before the learner's interview date (Civics principle 4).
- **In its real form** (R8): a due strand is asked on an item of it the learner has not seen, with fresh numbers, or with
  fresh targets; a Civics question is asked as itself. Singing's review is singing: a warm-up, then each due lesson's check,
  without the line. Scams: new messages and exchanges; Math: new problems, estimate first; Wealth: new sample documents for
  parts 2 to 7; Civics: due questions typed (and spoken), plus a news story per due news strand. Each subject's part is
  mixed (R9), with feedback after each item, and a miss is asked again at least three items later until right (R2). A
  saved plan is shown once at the start of its subject's part.
- **Retests**: a check with `retest: n` comes back once, whole, on new items, n days after its first complete run, as its
  own block of the review with its pass rules and no warning (Scams and Stats 28; Psychology 21; Math 14; Civics' second
  mock interview 7).
- When a strand's unseen items run out, the least recently seen one is asked and the repeat is logged (E9's rule, kept).

### 26.5 Screens (what is shown)

- **Library**: the subject tiles and "This week's review" (section 24).
- **A subject**: its end result in one sentence; its lessons in part order, each with title, revision, the draft line
  (E15) and its state (not started; step n of m; check passed or "not yet", with date and score; waiting for a trigger);
  the learner's own data (your range; your accounts and dated actions; your eight answers and interview date; your plan
  and saved channels); results; "Practice again" on a done lesson (its sets again, on unseen items, fresh numbers or fresh
  targets, `context: 'again'`). No map, reference, determination or specimens.
- **A lesson**: a top bar (title, rev, draft line, step n of m); the why; then each step: a show screen; a worked item
  answered step by step; a set, one item a screen (the blocks, the asks in order, the support while it lasts, the
  countdown if timed, then the feedback and Next); an own step (the form on the learner's own data, the model line, then
  "Done now" or a date with what and where). Between sets a screen says the learner can stop and the place is kept (P28).
  Back is always there and keeps the place.
- **The end check**: one screen naming the check in plain words ("6 new items: verdict and deciding line, 5 to pass");
  the items, without support; then the result: "8 of 10: passed" or "6 of 10: not yet", each pass rule with met or not met
  ("No scam acted on: met"), then each item's feedback, misses first; then the next lesson.
- **Results** (E10's purpose): first-try accuracy per lesson and per facet value side by side (genuine beside scam, sound
  rejected beside problems found, left beside right, ordinary beside control, per channel and kind of request), the slips
  made most, the check history, and what comes back when. No grade, no comparison with anyone.

### 26.6 What is deleted

One commit, a clean break, no shim and no compatibility layer (owner rules):
- **The model**: the key (`FC.key`: gate, branches, steps, options, outcomes, terms, `keeps`, `yieldsTo`, `avoid`), routes,
  the look-alike ledger, tokens (S5), unit kinds `C`, `F`, `P` and `S`, every card kind (`orient`, `term`, `meet`,
  `again`, `lens`, `portrait`, `check`, `lookalike`, `exception`, `refute`, `question`, `worked`, `solved`, `concept`,
  `facts`, `recap`, `transfer`, `plan`), cases and their `use`, `tier`, `cues`, `segments`, `not`, `also`, `echo`, `miss`,
  `wouldChange`; the drill (rungs, stages `name`, `piece`, `finish`, `route`, `claim`, `fact`, `last`, `whole`; groups,
  `earlier`, `tell`, `separator`, reverse items, claims, `drill.key`, `drill.returns`); specimens and the determination
  (E13, "try anyway"); `subject.baseline`, `settings`, `action`, `example`; card `audio` blocks (`tones`, `notecheck`).
- **The engine rules**: sections 1 to 19 as rules for lessons (A, S, E1 to E7, E9, E12 to E14, E16 to E18, E20, E21, K, W),
  section 21's card sound (the sound files stay as infrastructure), section 22, section 25 (absorbed in 26.1.1), section
  24's drawing of names and facts, the E8 migration of pre-standard progress.
- **The code**: `public/app/lessons/` `ask.js`, `cards.js`, `determination.js`, `drill.js`, `key-map.js`,
  `key-reference.js`, `practice.js`, `taught.js`, `unit-flow.js`, `unit.js`, `review-first.js`, `audio-card.js`, and
  `records.js`, `review.js`, `view.js` as written (rewritten for 26.3 and 26.4; `SAY` keeps only the new wording).
  `audio-synth.js`, `audio-pitch.js`, `audio-notes.js` and `audio-meter.js` stay.
- **The data**: every file in `public/subjects/<id>/` but `subject.js` (rewritten); `docs/learner-view/*` (regenerated for
  lessons by a rewritten `tools/learner-view/`); `docs/rebuild/*-plan.md`; `docs/lesson-standard/exemplar/`;
  `tests/fixtures/`; the old entries of `tests/lessons.lock.json`.
- **Nothing of the old lesson data is kept.** The commit before the deletion is tagged `old-lessons`; an author may read
  any story, number or line there (`git show old-lessons:<path>`) and reuse it as raw material for an item, once it fits
  the lesson's gate 5 block. Nothing is migrated.

### 26.7 Validator rules and browser checks

**Kept**: V4 (no codes or ids in learner text), V36 (no praise), V45 (revisions and history; `live` needs `tried` with a
date and the owner's words), V46 (the lock: a lesson's fingerprint covers the lesson, its items and its generators' text
and parameters; a subject's covers its record), V47 (files), V50 and V62 (plain words; the list gains the engine's own
words: strand, facet, ask, item, set, generator, support), V56 (titles), V58 (held findings), V60 (American English), V69
(revised below). **Every other rule from V0 to V68 is retired**; numbers are not reused. Section 25's V70 was never coded
and is replaced by the V70 below.

**Tying each lesson to its gate 4 part.** The design record's front matter gains `parts: [{ id, title }]` (the gate 4
table, its ids as written there: numbers or letters), `pilot: lessonId` and `tried: { pilot: { date, words } | null }`.
V69 then refuses a lesson written before `approved.endResult` and `approved.practice`, and **any lesson but the pilot (and
a baseline) before `tried.pilot` holds the owner's words from the phone try** (gate 6: the advance approval of 2026-10-10
let the pilot be built; it does not stand in for the try). V71 holds the map both ways.

| Rule | Checks | Seeded fault that turns exactly it red |
|---|---|---|
| V70 | Shape: every subject, lesson, step, set, item, block, ask, generator and pass rule matches 26.1 exactly; ids unique in the subject; every reference exists; `seconds` only where `subject.timed` | an ask with an unknown `kind` |
| V71 | Every lesson's `part` is a part of the design record; every part has exactly one lesson; only a `role: 'baseline'` lesson has no part; lessons are in part order; the pilot is a lesson | a part with no lesson |
| V72 | A check is its part's: none of its fixed items appears in the lesson's sets; it has no support; every pass rule names an ask, facet value or slip that exists; no `min` exceeds the number of items it counts | a check item also in a set |
| V73 | Most of the lesson is doing: words of the why and show screens at 200 a minute, against the doing time (a default time per ask kind, named once in the validator; a timed set its seconds), stay within `subject.readingShare` | a why padded past the share |
| V74 | Every ask can be scored and explained: a `choose` has an `ok` option and a `then` or slip on each wrong one; a `tap`'s `right` are segments of its block; a `number` has `tol`; a `text` has `accept` or `model`, and `count` no more than its distinct answers; every item has `reason`, and its `deciding` ids exist | a wrong option with no `then` |
| V75 | Generators: each run on 200 seeds gives finite values inside `params`, fills every slot, keeps every slip outside the answer's tolerance, and the same seed gives the same item | a slip equal to the answer |
| V76 | Every set and check holds the subject's `mix` | a Scams set with no genuine message |
| V77 | Banks: each strand has enough unseen items for its scheduled returns and its retest (generators and sung tasks always do; a Civics question returns as itself) | a strand one item short |
| V78 | Singing limits: tasks and parameters inside 26.1.1; checks without `line`; the warm-up first in every lesson | a hold of 9 seconds |
| V79 | Fading: a set with support is followed by a set of the same strand with less or none; no support in a check | a lesson whose last set has the panel |
| V80 | The subject's `endResult` equals the design record's, word for word (one is the mirror of the other) | one word changed |
| V81 | Private forms: no field for an account number, login, password or Social Security number; every `into` is a slot of 26.3 | a field named "Account number" |

**Browser checks.** Kept: X1 (nothing advances by itself; a timed item stops, it does not move on), X2 (no feedback before
the last ask is answered), X3 (360 px), X5 (the stored keys are those of 26.3), X6 (draft line), X7, X8 (no sound, no
microphone before a tap), X10, X11, X12. Deleted: X4 (the migration), X9 (card sounds). New, each with a seeded fault that
must turn it red:

| Check | What | Seeded fault |
|---|---|---|
| X13 | `number`: in and out of tolerance scored right and wrong; a slip's value shows its line; the estimate box comes first and has no calculator; "disagree" shows in practice, never in a check | the prompt left on in a check |
| X14 | `text`: case, punctuation, one misspelling, brackets, "27" for "twenty-seven" and two distinct answers for "name two" are right; a near miss is wrong; "Not yet" records a try; a claim is logged and the question returns | a repeated answer counted twice |
| X15 | `tap`: the deciding line, "Not given", and nothing highlighted before the answer | the highlight shown early |
| X16 | `sing`: known pitches fed as the microphone are scored on and off at 25 cents; an octave away counts; a hold is timed; each melody note scored; the line drawn only with `line`; the range stored once, every target inside it; the microphone released | the line drawn in a check |
| X17 | Timed sets: the countdown runs on the frame clock; at zero the try is `timeout` and the screen waits for Next | auto-advance at zero |
| X18 | `exchange`: the turns follow the replies; the pushing lines are marked at the end | a branch that skips its pressure turn |
| X19 | `spoken`: speech starts only after the learner's tap to begin; only an on-device voice is used; with none, the words are shown | speech on screen open |
| X20 | `chart` and `figure`: the drawn axis start, values and bar heights match the data; the redraw from zero in feedback | a bar drawn from zero on a cut axis |
| X21 | The record: after a scripted session through practice, a check, a review and a retest, every try has exactly the 26.3 fields, sung answers hold numbers only, and **no network request leaves the app** beyond its own files | one request to another host |
| X22 | Review: due strands are asked on unseen items (fresh numbers, fresh targets), Singing's review sings, a retest appears after its days (clock set ahead), a miss returns three items later | a seen item asked while unseen ones exist |
| X23 | Checks: an `at-end` check shows nothing between items; the result lists each pass rule met or not | feedback shown between items |
| X24 | Own data: a run of 8 digits is refused; a dated action writes a calendar file; a done mark sticks; nothing private appears outside the subject's own screens and the export | an 8-digit balance accepted |

### 26.8 Build order: one capability at a time, Singing first

Each step is its own commits; tests (validator, seeded faults, browser checks) pass at every step; each subject's pilot
lesson is built, checked, deployed and tried by the owner cold on the phone (gate 6, recorded in `design.md`) before any
other lesson of that subject; every later lesson gets the same try before it is `live` (gate 7).

0. **Records.** Each design record gains `parts`, `pilot` and `tried`. Pilots: Singing L2, Math L1, Wealth L2, Stats L1,
   Ideology L2, Psychology L1, Scams L3 (with L0, the baseline, built beside it), Civics L1. Scams and Stats named no
   pilot; L3 is Scams' core decision, L1 is Stats' first whole item.
1. **The core, and the deletion** (26.6, same commit). Registry, the record, the lesson player (why, show, worked, set,
   check, result), `choose` with lists and slips, feedback, support and fading, order rules, pass rules, results, the
   review on strands, `prose` and `pair` blocks, the learner view, V70 to V77, V79 to V81, X1 to X3, X5, X21 to X23.
   Subject screens list each design part as "not built yet".
2. **Sound: Singing.** `sing` with every task, the `pitch` block, the range, loudness; V78, X16. Pilot L2 (it opens with
   the range) → owner try → L1, L3 to L7 → Singing's review.
3. **Numbers: Math.** `number` (frames, tolerance, estimate, slips, calculator), generators, `document` (receipt, recipe,
   tag, offer), `figure` (rate table, 100% bar, plan, year table), `worked` and `leave`; V75, X13, X20. Pilot L1 → L2 to L7.
4. **Documents and own data: Wealth.** Household documents, `form`, the private sheet, dated actions with calendar files,
   triggers, `refs`; V81, X24. Pilot L2 (opens the sheet form when empty) → L1, L3 to L8.
5. **Articles and charts: Stats.** `article`, `tap` with "Not given" and the pre-marked line, `chart`, the 1,000-people
   figure; X15. Pilot L1 → L2 to L7.
6. **Labels: Ideology.** The `post` form with label and side, `panel` and `rules`, per-side results. Pilot L2 → L1, L3 to L6.
7. **Accounts: Psychology.** `message` forms friend, thread and note; four-ask items; `text` with `model`. Pilot L1 → L2 to L6.
8. **Pressure: Scams.** `message` channels, timed sets, `exchange`, the busy task, `order`, plan and setup; X17, X18. L0
   and pilot L3 → L1, L2, L4 to L6.
9. **Recall and speech: Civics.** `text`, `spoken`, the mock interview (a check drawing 20 of the 128, `at-end`), the
   eight own answers and the interview date; X14, X19. Content: the 128 with their accepted answers (M-1778, 09/25) and
   about 70 news stories. Pilot L1 → L2 to L14.

### 26.9 Capabilities and the subjects that need them

| Capability | Singing | Scams | Stats | Civics | Ideology | Psychology | Math | Wealth |
|---|---|---|---|---|---|---|---|---|
| `choose` (actions, channel, next step, name, why this step) | | ● | ● | ● | ● | ● | ● | ● |
| verdict (a `choose` on the subject's list) | | ● | ● | ● | ● | ● | ● | ● |
| `tap` (one or more segments, "Not given") | | ● | ● | | ● | ● | ● | |
| `number` (tolerance, slots, slips) | | | ● | | | | ● | ● |
| estimate first, calculator | | | | | | | ● | (calculator) |
| `text` (accepted answers; `model` unscored) | | | ● (L7 recall) | ● | | ● (model) | | |
| `order` | | ● | | | | | | |
| `sing` and `pitch` | ● | | | | | | | |
| `exchange` | | ● | | | | | | |
| `form` scored on samples | | | | | | | | ● |
| `form` into private data (Singing's range is stored by `sing`) | | ● (plan, setup) | ● (plan) | ● (answers) | | ● (plan, line) | | ● (sheet, actions) |
| several asks in one item | | ● | ● | ● | ● | ● | ● | ● |
| `message` | | ● | | | | ● | | |
| `article` | | | ● | ● | ● (post) | | | |
| `chart` | | | ● | | | | | |
| `document` | | | | ● (map table) | | | ● | ● |
| `figure` | | | ● (1,000 people) | | | | ● | |
| `spoken` | | (calls, later) | | ● | | | | |
| `panel` and `rules` | | | | | ● | ● | | |
| `pair` | | ● | ● | ● | ● | ● | | |
| generators (fresh numbers or targets) | ● | | | | | | ● | ● |
| support fading | ● line | | ● shown, leave | | ● panel | ● panel | ● leave, estimateCheck | ● leave |
| timed sets, busy task | | ● | | | | | | |
| facets and per-facet results | | ● genuine, channel, request | ● sound | ● level | ● side, sound | ● ordinary, control | ● kind | ● leave alone |
| retest | | 28 | 28 | 7 (second mock) | | 21 | 14 | yearly action |
| baseline lesson | | ● L0 | | | | | | |

**What a static, offline phone app cannot do, and the nearest it can:**

| A design asks for | Why not | The nearest |
|---|---|---|
| Hearing a spoken answer (Civics mock interview, "wanted") | Browser speech recognition sends the voice to a server (Chrome) or is missing in an installed iPhone web app; nothing may be sent | Say it aloud, then type it |
| Reminders on a date (Wealth actions and the yearly check; returns as reminders in Scams) | No notification without a push server | A calendar file (.ics) the app writes for the learner's own calendar; the review tile; the app icon badge where the phone supports it |
| Offering a lesson at its trigger (Wealth: a new job) | The app cannot know | The learner marks the trigger; the own step waits for it |
| A real voice on calls (Scams, "later") | No recordings; the phone's synthetic voice only | The caller's lines as a transcript, read by an on-device voice where one exists |
| A message arriving while busy in another app (Scams L4) | No notifications from outside the app | The busy task inside the app, with banners |
| Seeing that a change was really made (Scams setup, Wealth changes) | The app cannot see a bank's site | The learner's done mark and date |
| Measuring "no pushing" exactly (Singing L7) | Phone microphones differ; some keep automatic gain on | Loudness compared only with the learner's own talking note in the same sitting |
| Knowing the question list changed (Civics) | Offline | Content carries its date and source; before a mock interview a line asks the learner to check uscis.gov |

**Conflicts between designs, and what this section decided:**
1. Fading (Singing S3, Ideology, Stats, Math) against feedback after every answer (Civics, Psychology, Scams; R7): support
   fades, feedback after the answer stays; only checks, the baseline and the mock interview hold it to the end.
2. Scams' time limits against "no timers" (E11, X1, P28): a visible countdown in subjects whose design times items;
   nothing moves on by itself.
3. Feedback length (V63's two sentences) and reading caps against "no length rule" (V29): the designs win; V63 and V29 are
   retired; reading is held to each design's share (V73).
4. What returns: E9 scheduled names; the designs bring back a request kind, a part, a label, a word, a problem kind, a
   question or a sung check. One idea, the strand, with each design's gaps (Scams' every 60 days, Civics' interview date,
   the retests).
5. Each subject's verdict words differ (two, three or four answers): one mechanism, words typed once per subject.
6. Pilots that are not the first lesson (Singing, Ideology, Wealth L2) need data an earlier lesson makes: the lesson opens
   that form first. Scams and Stats named no pilot: L3 and L1 chosen (26.8).
7. Civics' "my answer means the same": counted in that sitting, still returns.
8. The pre-approval of every pilot (2026-10-10) against gate 6's try: the try is still required before the rest is built
   (V69).
9. Old learner data: kept untouched and unread rather than deleted, because it is the learner's and costs nothing.
