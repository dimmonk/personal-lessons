# Critique: traceability and implementability

Adversarial review of `docs/lesson-standard.md` (version 1) and `docs/lesson-standard/exemplar/`, checked against `docs/learning-science.md`. Written 2026-10-04. Reviewer: Claude Fable 5.1, one agent, no subagents.

Lens: does every rule trace to a real principle; is any principle left out without a reason; does the exemplar obey every rule and every validator rule; does the revision scheme hold; can the schema be coded without guessing; is every validator rule machine-checkable; does `pl:` progress survive; is anything a length cap in disguise.

How it was checked: the standard and the evidence base's REQUIRES, FORBIDS and boundary lines were read in full. The exemplar's own checker was run (2374 checks pass). Then every rule of section 8, including the ones not marked ●, was re-run **as the standard words it** by separate scripts, and the lock was tested with seeded changes in a scratch copy. Nothing under `public/` or in the exemplar was edited. "Exemplar" below means the data files in `docs/lesson-standard/exemplar/public/`.

Tags: **SERIOUS** = the rebuild of 46 units would bake in a fault, or a coder or author would have to guess. **MINOR** = real, cheap to fix, low blast radius.

## Problems

### A. One vocabulary (the owner's second complaint)

**1. SERIOUS. K1, E1, S5, V2: the key's `needs`, `when` and term meanings are typed by hand in the cards, and four of five outcomes have already drifted.**
- Where: standard K1 ("exist once, in `key.js`"), S5 (tokens), V2; exemplar cards.
- What is wrong: S5 has tokens only for an outcome name, a question, an answer and a term. There is no way to print `needs`, `when`, `plain`, `purpose`, `why` or a term's `means` inside card text, and the `meet` card has no slot that prints `needs` (E2 lists none). So the author retypes them, and V2 only looks for names, questions and answers, so nothing sees the copies. Found by script:
  - `orient.reminders[0]` retypes `D1.reasoning.when` word for word.
  - `meet-dissonance.rule[3]` and `again-dissonance.link` retype `needs` for dissonance word for word.
  - Sunk cost has three wordings of its deciding feature: the key ("the spend given as the reason to take it"), `meet-sunkcost.rule[2]` ("the spend itself given as the reason"), `worked-longrun.hold.reason` ("what is already spent given as the reason to take it").
  - Confirmation bias: key `needs` is "a view already held, and a test set for evidence against it that evidence for it never had to pass"; `meet-confbias.rule[2]` and `again-confbias.link` teach "a view already held, evidence on both sides, and a harder test for the side that goes against the view".
  - Motivated reasoning: key "an answer chosen before the looking began, and a search that gathers support for it"; cards "an answer chosen before the looking starts, then a search that gathers support for it".
  - Honest change of mind: key "facts that arrived, a fair hearing for them, and a view or plan that changed to fit"; card "facts arrive, they get a fair hearing, and the person's view or plan changes to fit them".
  - `meet-sunkcost` retypes the `means` of both its terms.
  - The effect on the learner: the card teaches the "provisional rule" in one wording; feedback (E5 step 4: "«name» needs «needs»"), the recap and the reference screen print another. That is the fault the owner named: "you're using different language to explain and in the questionnaire".
- Fix: (a) add tokens `{needs:outcomeId}`, `{plain:outcomeId}`, `{when:STEP.optionId}`, `{means:termId}`; (b) the `meet` card's provisional rule line is printed by the engine from `outcome.needs` (new required line in E2, not an authored paragraph), and `again.link` uses `{needs:}`; (c) extend V2: no text field may contain, after lower-casing and stripping punctuation, any key `n`, `q`, `plain`, `needs`, `when`, `purpose`, `why` or term `means`; (d) add a near-copy check (three-quarters of a key line's content words inside one sentence fails unless the sentence carries the token); (e) fix the places listed above.

**2. SERIOUS. E5 step 4 and K2.8: the generated "This case does not show that" line is false on exactly the cases built to mislead.**
- Where: standard E5.4, K2.8; exemplar `key.js` (`R2.scrutiny.when`, `confbias.needs`), cases `dog`, `phone`, `ret-grant`, specimen `sp-invest`.
- What is wrong: K2.8 says a tie-break is written into `when`. The exemplar's tie-break ("when a case shows both, the answer chosen first decides it") is in the ledger rule and on `exc-both`, not in `when`. No case carries a `miss` line. So when a learner picks "Tests evidence against their view harder..." on `dog` (or on `phone`, which is in the first rung and tagged `clean`), the engine prints "Give that answer when evidence on both sides is in the case, and the side that goes against the person's view is asked questions the other side was never asked. This case does not show that." The case does show that; the case's own `not.why`, printed one line earlier (E5.3), says "She does set the unwelcome answer a harder test". Two feedback lines on one screen contradict each other.
- Fix: (a) put the tie-break in the key as data, for example `option.yieldsTo: [{ option: 'fixed', say: 'the case also shows an answer chosen before the looking began' }]`, and have E5.4 print "This case shows that too, and it also shows «say»; when a case shows both, the key's answer is «winner»"; (b) add a validator rule: for every case whose `not.outcome` is on the losing side of a tie-break, the generated line uses the tie-break form or the case has `miss`; (c) reword `scrutiny.when` and `confbias.needs` to include "and no answer chosen before the looking is shown".

**3. MINOR. A4 against A8 and V5: the unit has to state what the key asks before the question cards exist, so it retypes the questions and answers in other words.**
- Where: A4 (`lens`: "what the key asks about"), A8 ("printed from the key for the first time here"), V5; exemplar `lens.fixed`, `look-dissonance-confbias`, `q-r1.how`, `recap.carry`, `worked-*.steps[0].why`.
- What is wrong: `lens.fixed` is the two key questions in lower case without the question mark ("what the reasoning is about", "what the reasoning does"), 27 cards before `q-r1`. `q-r1.how` says "give the evidence answer" and "give the other answer" because the checker's V5 only counts a question card's answers as shown after that card's own text has been scanned, so the card that teaches an answer may not use its token. `recap.carry[0]` paraphrases both R1 answers ("something of the person's own that is already done, promised or spent, or evidence about a question") although every token is available by then and P6 requires 5 says the recap is in the key's wording. Both worked cases type "one person's reasoning" (the gate answer) in lower case; V2 is case-sensitive and misses it. A8's "for the first time here" is also untrue as written: the `orient` preview prints both questions and all seven answers on card 1.
- Fix: allow `{q:}` on the `lens` card and say so in A4 and V5; count a `question` card's own answers as shown for that card's `decides`, `how` and `whenBoth`; require `recap.carry` and worked `steps[].why` to use tokens; make V2 case- and punctuation-insensitive (problem 1c); reword A8 to "taught here; the `orient` preview has shown it once, with plain words".

### B. The key the exemplar chose

**4. SERIOUS. Section 12, K2.2, V42: the second question alone decides every case, which is the fault the scorecard used to reject another design's key.**
- Where: standard section 12 (explicit-instruction verdict: "its second question alone decides every case"; novice-reader graft: "every key question must do work"), K2.2, V31, V42; exemplar `key.js`.
- What is wrong: every answer of "What does the reasoning do?" keeps exactly one outcome (keeps sizes 1,1,1,1,1). No pair of outcomes is separated by the first question alone (script: pairs separated only by R1 = 0, only by R2 = 6). Consequences in the exemplar: (a) the `name` rung ("the route is shown, give the name") is matching an answer to its one name; (b) the `finish` rung's "then give the name" adds nothing after R2; (c) every separator item V42 allows has the answer R2, and both "which question did this claim skip" items have the answer R2, so "which question?" is never R1; (d) once the second question is answered the name is given away, so naming is not a separate act anywhere in the drill or the determination. No rule in K2 or section 8 tests whether a question does work, so the same shape can pass in all seven keys.
- Fix: add to K2.2 and section 8: "for every taught step there is at least one ledger pair that only that step separates, and no step has every answer keeping exactly one outcome unless it is the branch's only step". Then either rerun K2 on this branch so that R2's answers are shared across both sides of R1 (three answers by two sides covers five outcomes), or drop R1 and say plainly that this branch has one question; in that case remove the `name` rung's claim to be easier than `route` for this unit and drop the separator requirement (see problem 22).

### C. Length caps in disguise (the owner's seventh point)

**5. SERIOUS. A3, V11, V16, W4.3: the card grammar is closed and "exactly one `meet`" per outcome, so "as many cards as the explanation needs" cannot be done.**
- Where: A3 table ("`meet` (one per outcome)", "`again` (one per outcome)", "`portrait` (one per outcome)"), V11 ("exactly one `meet`"), V16 ("one `question` card"), W4.3 ("continues on the next card"), section 12 (free-form `idea` card rejected).
- What is wrong: P7 requires 1 says a whole outcome or a whole key question "is not one point; it takes several cards", P7 forbids "deciding card count ... in advance", and P4 requires 3 says a term is never taught inside the card that combines it with other terms. But the schema gives each outcome three teaching cards of fixed kinds (`meet`, `again`, `portrait`), has no continuation card, and offers `introduces` only on `meet`. So a prerequisite idea has nowhere to go except extra paragraphs in `meet.rule`. The exemplar shows it: `meet-dissonance` introduces the discomfort and its term, the excuse move, the key's fixed answer and the outcome name on one card; `meet-sunkcost` introduces two terms, the key's answer and the name. W4.3 promises a continuation that V11 would reject. This is a cap on the number of teaching cards per idea, written as a structure rule.
- Fix: (a) any card kind may be followed by cards of the same kind with `continues: cardId`; the engine carries the heading and requires an opening line restating the previous card (P7 requires 3); V11 and V16 read "one or more, as a chain"; (b) add a `term` card kind with required parts (link, case, plain words, then the term, `introduces`) usable before any `meet`, so K6's "introduced on exactly one card, in ordinary words with its case" has a card; (c) V-rule: a card introduces at most one of {a term, an outcome name}; (d) split `meet-dissonance` and `meet-sunkcost` accordingly.

**6. SERIOUS. S3, S4, S6: single-string fields are a one-paragraph limit on feedback, and `shared` is limited to "one sentence".**
- Where: S4 ("A text field is a string (one paragraph) or an array of strings ... The shapes below are exact"), S6 (`why: { [stepCode]: '...' }`, `not: { outcome, why }`, `miss`, `wouldChange`, `fault`, `corrected`, segment `note`), S3 (`shared: '...' // one sentence`, `rule: '...'`), S4 (`portrait.self`, `exception.setup`, `again.instruction`, `worked.intro`, choice `note`).
- What is wrong: the shape listing fixes which fields are arrays and which are strings, and says the shapes are exact. Every feedback reason is therefore one paragraph, and the one place a pair's difference is written is one string. P20's boundary line says "no cap on how much explanation a wrong answer may need". An author who needs two paragraphs to explain a miss has no legal shape for them.
- Fix: declare one type, `Text = string | string[]`, state that every prose field in S3, S4 and S6 is `Text`, delete "one sentence" from `shared`, and have the renderer and the checker accept both everywhere.

### D. Schema: where a coder or author has to guess

**7. SERIOUS. Sections 3, 4 and 8: gate units, fact units and procedure units (about 16 of the 46) have no defined shape and no stated set of validator rules.**
- Where: section 3 intro, A12, S2, S4, S6, V10 to V44, section 10 ("reference instance of every shape used by a classification unit").
- What is wrong:
  - **Gate units (7).** Evidence base 4.4 says the families the gate sorts into "are that unit's outcomes". In the schema an outcome is an entry of `key.outcomes` with `group` = a gate option. Nothing says how a family is modelled: what `teaches.outcomes`, `meet.outcome`, `meet.feature`, the ledger, V11, V14, V15, V39 and V44 refer to in Unit One, or how the `name` and `finish` rungs work when the route is one question long. F6.5 builds Unit One next, with nothing to code against.
  - **Fact units.** A12 says "one `meet` card per concept", but `meet` requires `outcome` and `feature: { step, option }` and a fact unit has no key step. A12 says each `facts` row "is its own item" but `drill.rungs[].items` has no form that names a row, and `ask` has no value for "asked from memory".
  - **Procedure units.** `solved` and `problem` shapes exist, but which rung `ask` values they use, what the ledger pairs, and what `route` means are not stated.
  - **Rules.** Section 8 says the rules "apply to units of standard 1" without saying which apply to kind `F` or `P`. V11, V14, V16, V18, V38, V39 and V42 cannot hold for a fact unit.
- Fix: before step 5 of F6, add to section 4 a worked shape for a gate unit (recommended: families are entries in a `key.families` list with `n`, `plain`, `needs`, and card fields take `outcome | family`), and to section 8 a table "rule by unit kind (C branch, C gate, F, P)". Build the three missing exemplars before any subject is rewritten, not as the first unit of a live subject.

**8. SERIOUS. E8: the one practice record cannot produce the figures E8, E9, E10 and E12 say are computed from it.**
- Where: E8 (`pl:<subject>:items`: `{ rev, first: [day, ok], tries: [[day, nameOk, routeOk, chosenName]] }`, "the only record of practice"), E10, E12, E3, V49.
- What is wrong: the try tuple does not record how the item was asked (name, piece, finish, route, check, return, mixed), which step was answered, or which answer was chosen at a step. Without those, none of these can be computed: accuracy by rung (E10); whole routes beside single questions (E10); first-met-today beside returned (E10); name and piece accuracy of an assumed unit (E12); accuracy per key question (E8); mixed against blocked (P22 requires 7). Items with no case id have no record at all: a `separator` item and a commit prompt ("recorded (first attempt)", E3). A claim, a reverse item and a single-question item have ids but do not fit `nameOk, routeOk, chosenName`. `rev` sits once on a record whose tries span revisions. The day format is not given. Case ids are unique per unit collection only, and the record's key is not stated, so `bus` in two units would collide.
- Fix: define the record fully: key `"<unitId>/<itemId>"` (item id = case id, or `sep:<ledgerId>`, or `commit:<cardId>`); `tries: [{ d: 'YYYY-MM-DD', rev, mode, steps: { [code]: chosenOptionId }, name: chosenOutcomeId | null, ok, context: 'unit' | 'return' | 'mixed' | 'skip' }]`; `first` derived, not stored. State that case ids are unique within a subject and add that to the validator.

**9. MINOR. S4 Commit: a "tap the words" prompt with no `answer` on a card with no `step` has no defined right answer.**
- Where: S4 (`Commit = { kind: 'phrase', ask, answer? }`, `exception` and `worked.hold` have no `step`); exemplar `exc-both.prompt`, `worked-tasting.hold.prompt`.
- What is wrong: on `again` the answer can be read from `step`; on these two cards nothing names it. The data relies on an unwritten convention (the one segment without a `note`).
- Fix: make `answer` required on every `phrase` prompt (exact words, checked by V30 to sit in exactly one segment), or add `step` to both shapes. Add the missing `answer` to the two cards.

**10. MINOR. E6 against A10 and V40: "pairs are shuffled" is undefined and collides with "clean before misleading".**
- Where: E6, A10 (`route`: "clean cases before cases whose story misleads"), V40; exemplar rungs `a` (five items) and `d`.
- What is wrong: nothing says what a pair is. Rung `a` has five cases chained by adjacency, so there is no partition into pairs. In rung `d` shuffling pairs would put a misleading pair before the clean one, against A10 and P22 requires 5.
- Fix: author the groups: `items: [[a, b], [c, d, e]]`. The engine shuffles groups within a tier band (clean groups, then varied, then misleading) and shuffles inside a group; V40 checks each group is ledger-connected and single-tier.

**11. MINOR. S6 against E6: an `earlier` item is both a fixed case and "drawn from that unit's bank, due ones first".**
- Fix: pick one. Recommended: `{ earlier: unitId }` with no `case`, drawn at run time; then the unit's fingerprint need not cover another unit's cases (see problem 26). If the case stays fixed, it must be in the fingerprint.

**12. MINOR. Further gaps in the shapes. Each needs one sentence in section 4 or 5.**
- (a) `branches: { [gateOptionId]: [Step, Step] }`: exactly two steps, or a list? The evidence base says two or three questions.
- (b) Pair tables: generated, but their rows and cells are specified nowhere. P30 requires 2 gives the content (rows = the key's questions in order, cells = each outcome's answer); say so in E2.
- (c) `Commit.which`: `plain?` is undefined (free text typed by the author? shown instead of the option?), and the generated stem when `option` is given is not worded.
- (d) `why` means three things: the key's `Step.why` (why the distinction decides), a case's `why[step]` (the reason for this case's answer), and a worked card's `steps[].why` (again the case's reason, held on the card, while a teach case may also carry `why`). Rename the worked field `reason` and say which copy wins.
- (e) `check.ask` `{ type: 'step' }` and `{ type: 'option', among: [all] }` are the same thing after the question card. Say that `step` means "all options".
- (f) `route`: "more than one where the key keeps the outcome under both" reads as a rule, but six of the eight honest-change cases, and the specimen, accept only one R1 answer. Say "where this case supports both".
- (g) Worked `steps`: A9 says "every key question taught so far"; V18 and the checker say the gate plus `teaches.steps`. A unit that assumes R1 from an earlier unit of the same branch gets different answers from the two.
- (h) `orient.map: { branch, mark: [stepCode] }`: what is drawn for an unmarked step, and what a gate unit passes as `branch`.
- (i) `terms[].means`: where the engine prints it (it is retyped on the card today, problem 1).
- (j) `parts`: may `drill: true` sit on a part that is not the last; may `close` sit on another part; how `course.card` indexes across part end screens, the drill and the close cards.
- (k) `pl:<subject>:notes`, `pl:<subject>:seen`, `pl:log`: no shapes; "a capped list" has no cap or eviction rule.
- (l) Returned sets: how many items are "short", where the learner starts one (its own tile, or the Mixed drill), and whether the ledger neighbour's case must also be unseen.
- (m) E6 re-queue: "asked again before the drill ends" (once?) against P24 requires 2 and `drill.note` ("until you get it right"); and whether its pair partner comes back with it.
- (n) E17 skip: whether skip attempts are stored as first attempts (they would pollute E12's under-taught signal); what "past the cards" skips (P2 requires 2 says the worked cases only); the route rung is then asked twice, against W5.4.
- (o) V2 exemptions: "quoted claims" has no field list. Name them: `case.text`, claim `text`, `refute.idea`, `portrait.wild[]`, reverse `options[].text`.
- (p) V31 "the outcome is offered at the naming step": the key has no naming step; say what list is offered when naming (the unit's outcomes? the branch's? all taught so far?).
- (q) `cues[step]` is one exact substring. A deciding feature made of two separated phrases (the two standards in confirmation bias) cannot be marked. Allow a list.
- (r) The legacy wrapper for `standard: 0` units (F5, F6.2) has no shape: where `determination`, `quickDrills`, `errDrill`, `reference` and the old card HTML live in the registry.
- (s) V15 and S3 "some answer in the key keeps together": the gate answer keeps all five outcomes together, so read literally ten ledger entries are required and the exemplar has seven (missing dissonance~motivated, sunkcost~confbias, sunkcost~motivated). Say "some answer of a step the unit teaches".
- (t) `taughtIn`: nothing checks that the named card teaches the pair. Require it to sit after both `meet` cards and to contain both `{o:}` tokens.
- (u) E5 "later meetings (returns, Mixed drill)": a return is asked on a case the learner has not seen (E9), which is a first meeting; P2 forbids hiding the full explanation then, and P21 requires 3 gives every wrong answer the full explanation. Define "first meeting" per case id, and never collapse feedback after a miss.
- (v) `title: { fromKey }`: two units that share one branch get the same title.
- (w) `assumes` lists steps only. Whether an earlier unit's outcome names and terms may be used by token without being listed (P2 requires 1 says yes; the checker's V7 says no, it seeds only the assumed steps), and what V10's "a reminder for each entry" then covers, is not stated.

### E. The validator

**13. SERIOUS. Section 8: no rule checks the shapes themselves, and two card kinds have no rule at all.**
- Where: section 8 as a whole; A4 (`lens`), A3 (`portrait`), section 12 (the free-form card was rejected because "a card with no required parts cannot be checked for completeness").
- What is wrong: section 3 gives each card kind a "complete when it contains" list, but section 8 checks required parts only for `orient`, `meet`, `again`, `lookalike`, `question`, `worked`, `refute`, `exception` and the close cards, and only some fields of each. No rule requires a `lens` card (seeded: turning the `lens` card into something else failed only incidentally). No rule looks inside a `portrait` (`typical`, `not`, `wild`, `self` may be empty). No rule rejects an unknown field, a wrong type or a wrong enum (`tier`, `use`, `kind`, `status`). So a unit can drop most of what P13 requires 1 and P14 requires 1 ask for and pass.
- Fix: add rule V0, run first: every subject, key, unit, ledger entry, card, case and specimen matches its S1 to S6 shape exactly (required fields present and non-empty, no unknown fields, enums valid, ids unique within the subject, every referenced id exists and every case is referenced). Add: exactly one `lens`, placed after the first `again` and before the second `meet` (A4).

**14. MINOR. The exemplar fails four of the standard's own rules when they are read as written.**
- V6 (not marked ●, so never run): the terms `sunk` and `fallacy` are never used by token after the card that introduces them. "The fallacy" is typed by hand in `portrait-sunkcost.not` and `refute-waste.link`; "sunk cost" never comes back as a term. P5 requires 2 is stricter still ("every taught target term is used in the key or a drill"): none of the three declared terms is. Fix: use the tokens, or drop the two terms from `key.terms` and explain the words inside the name's own sentence; make V6 say "in the key or a drill" or cite P4 requires 2 for the weaker form.
- V27 and W2 ("every card except `orient` and `check` has a link"): `recap` and `transfer` have none, their shapes in S4 have no `link` field, and the checker quietly exempts them. Fix: add `link` to both shapes and to the two cards (P3 requires 1 has no exemption), or write the exemption and its reason into V27 and W2.
- V35 ("`why` for each step it can be asked on"): all six `route`-rung cases, all five return cases and all five specimens are asked the gate question and have neither a gate cue nor a gate reason. See problem 15.
- V15 read literally (problem 12s).

**15. SERIOUS. E5 step 2 against V35, P19 requires 3 and P20 requires 1 and 3: on whole routes and specimens the gate answer is explained by a generic line, not by this case.**
- Where: E5.2 ("where a case carries no reason of its own for a step (usually the gate, in a branch unit), the reason is that answer's `when` line"), V30 (gate cue may be omitted), V35; exemplar `route` rung, `drill.returns`, `specimens.js`.
- What is wrong: P20 requires 1 says line two is "the reason tied to the cue in the case text (point to or quote it)", and requires 3 says a miss gets the reasoning from the learner's choice to the right answer. The determination is where the gate matters most (three branches are open), and there every gate answer, right or wrong, gets the same sentence with no words from the case. The rule that permits this (E5.2) cites P20 as its authority.
- Fix: every case used in a `finish` or `route` rung, every return case and every specimen has `cues.D1` and `why.D1` (V30 and V35 without the gate exception). Keep the `when` fallback only for `name` and `piece` items, where the gate is shown and not asked.

**16. MINOR. The checker does not do what section 8 says the ● rules do.**
- Where: section 8 ("`tools/check-exemplar.mjs` implements the rules marked ●"), section 12 ("the habit of seeing every validator rule fail once"), `tools/check-exemplar.mjs`.
- What is wrong, each confirmed by a seeded fault in a scratch copy unless noted:
  - V2: does not scan specimens or the subject record, and is case-sensitive (an outcome name typed into a specimen reason passed).
  - V3: the `{cue:}` half is not implemented (a cue token for a step with no cue was caught only by accident, by V35).
  - V4: only step codes; an id shown in card text passed.
  - V11: "exactly one `meet`" is not checked; a second `meet` card for one outcome was not reported by V11 (it tripped V20 by accident).
  - V13: "share the outcome" is not checked (an `again` card pairing a dissonance case with a sunk-cost case passed).
  - V16: placement after a `meet` on each side, "one" card, and "before the next question or worked card" are not checked (by reading).
  - V19 cannot fail: a check can only name one step, so the test is always true.
  - V22 and V45: `status: 'live'` with both sources `verified: false` and a cold read of `{ reader: 'novice' }` (no date, nothing restated) passed everything.
  - V30: "every route step has a cue" and "exactly one segment contains the answer" are not checked (by reading).
  - V35: "a `why` for each step it can be asked on" is not checked; `reason` prompts are checked only on worked cards.
  - Step codes `D1`, `R1`, `R2`, unit `u1` and the unit names in the V28 pattern are hard-coded, so the file cannot be lifted into `tests/validate-data.mjs`.
  - Of the 37 ● rules, three were seen to fail (section 8 says so). The graft the scorecard credits was not carried out.
- Fix: in F6 step 1, write each rule from the standard's text (not from this file), with one seeded-fault fixture per rule that must go red; change the sentence in section 8 to "implements a subset".

**17. MINOR. Rules that are not machine-checkable as stated.**
- V17, V13, V33, W5.5, P25 requires 3: `setting` is a free label. The exemplar uses 37 different settings across its 50 story cases (`house` and `home`; `food`, `diet`, `cafe`, `restaurant`; `work`, `office`, `business`, `workshop`, `hiring`, `software`). "Three settings" and "a different setting" are met by inventing a label. V17 fails or passes on R1's purpose ("working on") depending on whether "work" is matched as a word or as a substring. Fix: `subject.settings` is a short fixed list of areas of life; `case.setting` must be one of them (a free `topic` field can carry the detail); V17 matches whole words against `topic`.
- V48 ("may only shrink") and R5 need history, not data (see problem 23).
- V45 ("no revision is parsed from a label") and V49 ("no stored key other than those listed is written") are properties of engine code. Move both to the browser checks (X5: after a scripted session, the set of `pl:` keys in storage equals the E8 list).
- V29 is a ban, not a check. Make it one: the validator's own source contains no comparison against a count of words, sentences, cards or characters (a test that greps the validator).
- V28's pattern list is English phrasing; it will not see "further on" or "when you reach". Keep it, and say the cold read owns forward pointers.
- V21 checks tokens and the cue only, which is all a script can do; say so.

**18. MINOR. W5.4 and P13 requires 3 have no rule, and the exemplar breaks them twice.**
- What is wrong: "drill cases differ from the cards' cases in setting" is checked nowhere (V32 checks reuse and identical text; V33 counts settings). Drill case `dog` (motivated reasoning, family) shares outcome and setting with check case `holiday`; specimen `sp-phd` (sunk cost, education) with check case `classes`.
- Fix: new rule: no drill, return or specimen case shares both `outcome` and `setting` with a case used on a card. Change the two cases.

**19. SERIOUS. V44 against E9, P13 requires 5 and P24 requires 1: one held-back case per outcome cannot feed the schedule the standard sets.**
- Where: V44 ("at least one case for each taught outcome"), E9, section 10 ("5 fresh cases held back"); exemplar `drill.returns` (five cases).
- What is wrong: E9 brings every outcome back at 2, 7 and about 24 days, more after a miss, each time "on a case the learner has not seen" and "next to a case of the ledger neighbour". That is at least three unseen cases per outcome on the no-miss path, six counting the neighbour's. The bank has one per outcome, then one specimen per outcome (which spends the determination's material), then the drill's own cases again. From the second return on the learner is re-reading stories, which P13 requires 5 and P24 requires 1 exist to prevent. The standard calls the five "what this unit needed".
- Fix: V44 becomes "at least as many return cases per outcome as E9 schedules returns (three; four in action subjects)", specimens are never drawn for returns, and E9 says what happens when the bank is empty (reuse the least recently seen, logged as a repeat). Write ten more return cases for the exemplar. This adds content; it does not cap any.

**20. MINOR. V8 against P5 requires 3.** V8 bans an `aka` word from every text field, but P5 requires 3 wants feedback to map the real-life word back ("the case says X; that is the lesson's Y"). Fix: exempt `why` and `not.why` when the `aka` word is inside quotation marks or the cue.

**21. MINOR. V1 does not enforce K4.** K4 bans a name joined by "a slash, bracket, dash or arrow"; V1 tests " / ", "(" and "→" only, so "A/B" and "A - B" pass. Fix: test `/`, `(`, `[`, ` - `, `–`, `—`, `→`.

**22. MINOR. V42 and A10 force items that cannot be real in a one-question unit.** A unit that teaches one key question (every gate unit) must still carry a `separator` item ("which question tells these two apart?", one question to choose from) and a `finish` rung (nothing to finish). Fix: require a `separator` item only when the unit teaches two or more steps and at least two different steps are the sole separator of some pair; define `finish` for a one-step route or drop it there (part of problem 7).

### F. Revisions (section 13)

**23. SERIOUS. R5: the lock can be regenerated or edited to match, so "the only way ... is to raise its `rev`" is not true.**
- Where: R5, V46; `tools/check-exemplar.mjs` lines 233 to 244.
- What is wrong: tested in a scratch copy: change a card, leave `rev: 1`, delete `tests/lessons.lock.json`, run the lock writer. It writes a new lock at rev 1 and the check passes. Hand-editing the `fp` string does the same. The comparison is between the working tree and a file in the same working tree, written by the same person in the same commit. V48's "may only shrink" has the same weakness.
- Fix: anchor both to history. `npm run test:data` reads `git show HEAD:tests/lessons.lock.json` (and the deploy script reads the lock last deployed, published as `/lessons.lock.json`): for every entry in that older lock, a different fingerprint now requires a higher `rev`, the same fingerprint requires the same `rev`, and no entry may disappear. The lock writer refuses to create an entry that exists in `HEAD`. Add the seeded test "delete the lock and rewrite it" to the fixtures.

**24. SERIOUS. R1, F5, F6.2: units not yet rebuilt have no stated revision, and the two readings contradict each other.**
- What is wrong: R1 says every unit carries a `rev` "starting at 1 for this rebuild" and `standard` 0 until rebuilt. F6.2 wraps all 46 units as `standard: 0`. If a wrapped unit is `rev: 1` and locked, rebuilding it changes its fingerprint, so R5 forces `rev: 2`, and the rebuilt unit's first version is revision 2, against the owner's "make this new version the version 1". If wrapped units are not locked, R5's "for any unit" is false and old content can change unseen. The exemplar (rev 1, standard 1) was never a wrapped unit, so it does not show which is meant.
- Fix: say it in R1: a `standard: 0` unit has `rev: 0`, is in the lock with its fingerprint (so the old text cannot change silently), and the app shows no revision for it. The one permitted move without raising `rev` by one is `standard 0 -> 1` with `rev 0 -> 1`. Also say when the lock starts to bind a rebuilt unit: from the first deploy of that unit, so authoring commits before anyone has seen it do not turn "rev 1" into "rev 9".

**25. SERIOUS. A14, S2, V45, F6.7: `status` changes nothing in the app, and the cold read is not tied to the revision it read.**
- What is wrong: (a) No engine rule mentions `status`. F6.4 puts Unit Two in front of the learner on the live site while it is `draft`, and `npm run deploy` does not look at it. So the only human check in the standard (P27 requires 1b, "only (b) signs a unit off") gates a flag nobody reads, and V22's "sources verified before `live`" gates the same flag. (b) `build.signoff.coldRead` has no `rev`. `build` and `status` are outside the fingerprint, so a unit read cold at rev 1 stays `live` through any number of later rewrites. (c) V45 accepts a cold read with no date, `restated` unset and `drillAttempted` unset (seeded: passed).
- Fix: (a) E15: a `draft` unit shows "Draft: not yet read by a newcomer" beside its revision on the unit row and the top bar, and the deploy script prints the list of draft units and of unverified `wrongIdeas`; (b) `coldRead` gains `rev`; V45: `live` requires `coldRead.rev === unit.rev`, or every later revision listed in `build.signoff.since: [{ rev, change }]` as a correction that did not change the teaching, and a new cold read whenever a card or the key slice changed; (c) V45 requires `date`, `restated: true` and `drillAttempted: true`.

**26. SERIOUS. R3: the fingerprint covers the wrong slice, in both directions.**
- Where: R2, R3, R4; `check-exemplar.mjs` lines 223 to 230; `key.js` header comment.
- What is wrong, each tested in a scratch copy:
  - **Misses what the learner sees.** Unit Two's drill shows two Unit One cases. Changing the text of one changed no fingerprint and failed no check. Outcome names of earlier units that a later unit prints in "keeps" and "rules out" lists are also outside its slice.
  - **Includes what the learner does not see.** Filling the gate's `keeps` for another branch, which every later Psychology unit will do, changed Unit Two's fingerprint and forced a new revision. Under R4 a learner who finished Unit Two is then shown "Updated" and sent back to its first card, once per later unit, for a change that altered nothing on any Unit Two screen.
  - **Depends on file order.** Swapping the load order of the two teach-case files changed the fingerprint, although F2 says load order decides nothing.
  - The lock stores 16 hex characters under the label `sha256:`; R3 does not say the hash is cut.
- Fix: define the slice as "what this unit prints": its record, cards and cases (cases sorted by id); every case another unit lends it; and, from the key, only the fields it prints: for a step it teaches, everything; for a step it assumes, `q` and the `n` and `when` of each answer, and `keeps` restricted to outcomes this unit or earlier units teach. State the hash length. Add the three tests above as fixtures.

**27. MINOR. R4, E8: what happens to the learner when a revision lands is only half defined.**
- `pl:<subject>:course.card` is an index. A revision that inserts or reorders cards moves a mid-unit learner to a different card with no notice; E8 covers only "clamped when a revision shortened it". Fix: `pl:<subject>:seen` also stores `{ at: { unit, rev, cardId } }`; on a different `rev` the learner resumes at that card id if it still exists, otherwise at the start of that part.
- "Opens at its first card" on every higher revision is too blunt once problems 24 and 26 are fixed but still sends a finisher back for a typo. Fix: show "Updated", open at the first changed card when the old and new card lists can be compared by id, and never reset `done`.
- A practice record carries one `rev` for tries made under several (problem 8).
- Engine wording (the E5 sentences, fixed headings, E6's closing sentence) is seen by the learner and is in no fingerprint. Say that `FC.STANDARD` or an engine version covers it, and store that with each try.
- R6 ("the validator applies each unit's own version of the rules") means keeping every old rule set alive. Say instead that raising `FC.STANDARD` comes with a dated list of units still on the old version, checked the same way as the `standard: 0` list.

### G. Existing `pl:` progress

**28. SERIOUS. E8, R4, X4: old progress will load, but it will not mean what it meant.**
- Where: E8 ("keep their names, shapes and meanings"), R4, X4, section 11 (unit splits); current app `public/index.html` lines 3525 to 3541.
- What is wrong:
  - `pl:<subject>:course` holds `u` (a unit index) and `done` (an array by unit index). Section 11 splits units in at least four subjects (Math Unit Three by branch; Statistical Claims Unit Four in two; Scams' money table into paired units; Civics Unit Three into three) and reshapes Ideologies Unit Four. After a split every index from there on points at a different unit: finished units show as unfinished and the reverse. The current loader pads or cuts `done` by position, which hides the fault.
  - A unit finished under the old lessons stays `done` after its rebuild. `done` drives E13 (specimens offered), E14 ("Practise again", Mixed drill), E12 and E9. The learner is then tested in a key wording (rewritten by K2) that no card ever showed them, which is P5 requires 2 and P10 broken for exactly the person who complained.
  - R4's "Updated" notice depends on `pl:<subject>:seen`, which no existing learner has. What the app does for `done: true` with no `seen` entry is not stated.
  - X4 only asserts that old progress "still loads".
- Fix: a one-time, idempotent migration at load, specified in E8: `done` is re-keyed by unit id through a committed map `{ oldIndex: [newUnitIds] }` per subject (a split unit is done only if the map says so; default not done); `u` is mapped the same way; every unit that was `done` gets `seen[unit] = 0`, so it shows "Rebuilt: start again" and does not count as done for E9, E12, E13 and E14 until finished at standard 1. X4 asserts those outcomes on the captured fixture, including one subject whose unit count changed.

**29. SERIOUS. E8, E14: "nothing is stored twice" is contradicted two lines earlier.**
- What is wrong: E8 keeps `pl:<subject>:stats:<drill.key>` (`{ n, ok }`), `stats:det`, `stats:err` and `pl:mixed` as live counters, and also makes `pl:<subject>:items` "the only record of practice". Every drill answer is then written to both. The counters' meaning also changes without being defined: does a re-queued miss count again, does a `piece` item count as one, is a right name by a wrong route `ok`, does "Practise again" count. The progress screen (from counters) and the results screen (from records) will disagree, and the old totals describe the old quick drills the rebuild deletes.
- Fix: choose one owner. Recommended: the old counters are read once and kept as a frozen "before the rebuild" line on the progress screen; nothing writes them after migration; every figure shown is computed from `pl:<subject>:items`. If the owner wants the old keys to keep counting, say so, define each increment exactly, and delete the sentence "nothing is stored twice".

### H. Migration (section 9)

**30. SERIOUS. F6 steps 4 and 5: the exemplar goes live, and gets the owner's deciding read, before the unit it depends on exists.**
- Where: F6.4, F6.5, F5, V48, section 10 (last paragraph), worklist "Needs your decision"; exemplar `orient.reminders`, `u1.cases-1.js`, drill items `g-notes` and `g-genius`.
- What is wrong: Unit Two's first card says "Unit One taught the first question of the key, «What kind of thing is this?», and its three answers". At step 4 Unit One is still the old unit, which taught "A mind justifying itself" and the rest in other words. P2 forbids "using the one-line restatement for anything the earlier units did not teach in full"; evidence base 4.4 puts the gate first because "everything else depends on it". Two drill items then ask the gate in the new wording on cases from a placeholder bank registered for a `standard: 0` unit, which F5 forbids ("never mixes in items ... from a unit that has not been rebuilt") and V48 lets through by its `assumes` exception. The determination at that point has two keys in one subject (five specimens on the new gate wording, nine on the old); E13 and E20 do not say what the screen does. The owner's verdict on the whole format would be given on a unit that opens by using words they were never taught, which is their original complaint. Section 10's "can be copied into `public/` unchanged" is also not so: `key.js` holds one branch and a gate with two empty `keeps`, `subject.js` lists six units of which one is registered, and `limits` is cut down to three lines.
- Fix: swap the order: step 4 is "Psychology gate and Unit One, then Unit Two, live together", and the owner's read covers both. Until a subject's gate is rebuilt no branch unit of it may be `standard: 1`: make V48 say "every step in `assumes` is taught by a unit of standard 1" and remove the exception. Add to E13: while a subject mixes standards, the determination offers only specimens whose whole route is taught by standard-1 units.

**31. MINOR. F1, F2, V47: file naming and eager loading.**
- F1 names case files `u<N>.cases-<k>.js`; the exemplar uses `u2.cases-teach-1.js` and `u2.cases-drill-1.js`, and section 10 calls that "exactly as F1 prescribes". Pick one and write it in F1.
- The exemplar unit is about 110 KB in nine files. At that density the app is about 5 MB in more than 400 classic scripts, all parsed and deep-frozen at every launch and all re-fetched by the service worker on every deploy (the cache name changes each time). Nothing in the standard measures this. Fix: add a browser check for cold-start time on a mid-range phone profile after the first full subject is in, and decide then whether a subject's files load when the subject is opened.

### I. Principles left out, or pulled against, without a stated reason

Section 2 says "not adopted" is used only for optional lines, with the reason given. These are not optional in the evidence base, or are conditional and unaddressed, and section 2 does not mention them.

**32. MINOR. P2 requires 3 and its forbid: a one-line restatement must have "the full explanation one tap away".** The `orient` reminders (`{ step, text }`) and W2's one-line repeats have no link. E5 step 6 builds "Taught on: «card»" for feedback only. Fix: E2 prints the same computed link under each reminder, from `reminders[].step`.

**33. MINOR. P30 requires 1 and evidence base 4.4: the subject opens with the whole key as a preview map and a list of every outcome with a few plain words.** The standard draws a preview only per unit branch (E2) and a fixed-wording map on the reference screen (E14). Fix: add to E14 a subject opening screen generated from the key in the preview form; say what it shows while the subject mixes standards.

**34. MINOR. P30 requires 2: neighbours "are set side by side in a table".** Four of the seven ledger pairs have no table (dissonance~confbias, dissonance~revision, motivated~revision, sunkcost~revision), and no rule asks for one (V24 only limits where a table may sit). Fix: rule: every ledger entry is in some `tables` list or on a `lookalike` card with `table: true`, or carries `noTable` with a reason.

**35. MINOR. P22 requires 5: specimens alternate confusable outcomes within a clean-to-messy order.** E13 says nothing about order, and the exemplar's first specimen is its only `misleading` one. Fix: E13 orders specimens by tier, then alternates ledger neighbours; V40's rule is applied to the specimen list.

**36. MINOR. Smaller gaps.**
- P4 requires 2: "two vocabulary lists". Only the target list exists (`key.terms`). The words to avoid (section 6's own table names dozens) are in no data, so no rule can catch them. Fix: `key.avoid: [{ word, sayInstead }]` and a rule that no text field contains one.
- P11 requires 4: an analogy in card prose must state what maps to what and where it breaks. K2.6 bans figures of speech in the key only; nothing governs cards, where the old "mirror" and "audience" line failed. Fix: add the requirement to W3.
- P27 requires 5: every card is used by an item. `lens` feeds no item, and three of five portraits are never the answer of a reverse item (V42 asks for one reverse item, not one per outcome). Fix: one reverse item per outcome, and one item on the `lens` distinction.
- P26 requires 3c: the "short baseline knowledge check" that section 11 relies on for Scams has no card kind and no storage.
- P29 requires 3: wrong ideas are "found, not guessed", from sources "looked up ... not recalled from memory". Both exemplar `refute` cards are `verified: false`, and the first cites Festinger (1957), which is the theory, not an account of the everyday misuse. The template every unit will copy shows a guessed wrong idea with a placeholder citation. Fix: verify or remove the two cards before the exemplar is copied; V22 fails a `refute` card whose source is unverified at any `status` once problem 25 makes `draft` visible.
- P6 requires 5 describes the recap as "what to carry into the drill"; evidence base 4.3 puts it after the drill, and the standard follows 4.3. The evidence base contradicts itself here; by the standard's own authority rule it should be corrected there first.
- P15 requires 1: "the same wording every time" for the commit prompt. The standard fixes the heading over the model reason (E3) but every `ask` is free text. Fix: generate the stem for `worked.hold` and `lookalike` ("Why is this «X» and not «Y»?").
- E16 sets all key wording at weight 600, the marked words at weight 600 and a `refute` verdict at weight 600. P8 forbids "bolding many things on one card" and P8 requires 3 allows one highlighted cue. A `question` card would be mostly bold. Fix: give key wording a face or colour change without weight, and keep weight 600 for the one cue.
- A3 cites P25 requires 4 for `portrait.self`, which tells the learner where they would meet the outcome; that requirement is about asking them. Cite P14 requires 1 only.

### J. The app's own words

**37. MINOR. S6, A1, K9: instructions that are the same in every unit are typed once per unit.**
- Where: S6 (`drill.note`, `rungs[].say`), S4 (`orient.order`, `orient.skip`), K9; exemplar `u2.unit.js`, `orient`.
- What is wrong: "Stage one. The route is shown. Give the name.", the description of the five stages, "you can stop after any of them", the explanation of how checks differ from the drill and the skip offer are engine facts, yet each is an authored string in the unit. Forty-six units will word them forty-six ways, which is P5's fault at the level of the app. K9's list of fixed app words also stops short: the learner sees "stage" (the standard says "rung"), "part", "step", "route", "card" and "drill", and none is on the list.
- Fix: the engine owns the wording of every rung instruction, the stage list, the part-stop line and the skip offer, and fills in the counts ("two cases come from Unit One" is computed from the items). A unit may add one sentence that is specific to it. Complete K9's list and add a rule that authored text does not use "lesson", "rung", "step" or "screen" for these things.

**38. MINOR. R1, R4: a revision number with no record of what changed.**
- What is wrong: the owner asked for revisions "to keep track of each lesson". The scheme proves that something changed; nothing says what. A specimen's practice record is also told to carry "the unit's revision", but a specimen belongs to the subject.
- Fix: `build.history: [{ rev, date, change }]` on each unit and subject, with a rule that it has exactly one entry for every revision from 1 to the current one; a specimen's tries carry the subject's `rev`.

## Tally

38 numbered problems: 17 SERIOUS (1, 2, 4, 5, 6, 7, 8, 13, 15, 19, 23, 24, 25, 26, 28, 29, 30) and 21 MINOR. Problem 12 holds 23 separate schema gaps under one number; problems 14, 16, 17, 27 and 36 also group several findings each.

The order to fix them in, because later ones depend on earlier ones: the key and vocabulary (1, 2, 4), the shapes (5, 6, 7, 8, 12, 13), revisions and storage (23 to 29), then the migration order (30). None of the fixes shortens or caps any content; 5, 6 and 19 add room.

## What was checked and found sound

- **The exemplar's checker passes** (2374 checks), and `learner-view.md` regenerates byte for byte from the data, so the file the owner is asked to judge does say what the data says.
- **Schema fit.** Every card and every case in the exemplar uses exactly the fields of S4 and S6 for its kind: none missing, none extra. No field holds HTML. No case is referenced by nothing, and every `use` value matches where the case is used.
- **Rules re-run as the standard words them, and passed:** V1, V3 (no stray cue tokens exist), V4 (no code or id is shown), V5, V7, V9, V10, V11 (order), V12, V13 (including the shared outcome the checker does not test), V14, V16 (including placement), V18, V20, V21, V22 (structure), V23, V24, V25, V26, V28, V30 (including one segment per tap prompt wherever an answer is defined), V31, V32, V33, V34, V36, V38, V39, V40, V41, V42, V43, V44, V45.
- **Citations.** Every rule in sections 3 to 9 cites principle ids and requirement numbers that exist in the evidence base and say what the rule claims, apart from the cases named in problems 15, 20, 21 and 36. The three lines marked "not adopted" (P1 requires 3, P21 requires 4, P28 requires 5) are optional or conditional in the evidence base, as section 2 says.
- **Order.** A2's sequence matches evidence base 4.3 step for step, including the close cards after the drill and no question about a route before the first worked case. Look-alike cards come only after both outcomes have had their check; `refute` cards are never in the first three; misleading cases appear in cards only after their outcome's check and in the drill only in the last case rung.
- **No explicit length rule.** None of V1 to V49 limits words, sentences, cards or screens; every count in section 8 is a minimum. The limits that do exist come from the evidence base and are not caps on teaching: a one-line reminder of an earlier unit (P2 requires 1), a short recap after a right answer (P21 requires 1), "a few plain words" for a map label (P1, P30), a short returned set (P24 requires 6), files under 800 lines by adding files (owner). The caps in disguise are structural and are problems 5 and 6.
- **The lock does catch an honest mistake.** A changed card, case or key line with an unchanged `rev` fails; a changed `status` or build note does not disturb it; the lock writer refuses a changed fingerprint at the same revision when the lock file is present.
- **Storage key names.** The seven key patterns E8 calls unchanged are the ones the current app writes (`pl:app`, `pl:recent`, `pl:mixed`, `pl:<subject>:course`, `pl:<subject>:stats:det`, `pl:<subject>:stats:err`, `pl:<subject>:stats:<key>`), and the exemplar's `drill.key` (`u2`) is Psychology's existing key. Names and shapes survive; meanings are problems 28 and 29.
- **Registry.** `registry.js` deep-freezes what it is given, builds a new object for each registration and refuses a unit registered twice, as F4 says.
- **Counts in section 10** (38 cards, four parts, 25 drill items in five rungs, 5 return cases, 55 cases, 5 specimens) match the data, and every exemplar file is under 800 lines (largest 174).

