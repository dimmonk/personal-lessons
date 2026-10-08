# US Civics & History - comprehension audit

Scope: `/Users/dim/Documents/PersonalLessons/public/index.html` lines 2971-3479 (data), engine lines 3480-3560 and 3900-4200 read for how content is shown. All line numbers below are lines of that file. Nothing under `public/` was edited.

How to read the tags: R1-R9 are the rubric items. HIGH = blocks learning the skill the app claims to train; MED = confuses or misleads a newcomer; LOW = polish. Verdicts in the simulation: SUPPORTED, WORDING-GAP (idea taught under different words than the option/step the reader must pick), UNSUPPORTED (never taught in any earlier card).

Reader model used throughout: a smart adult who has never studied US civics, on a phone, one card at a time, who has read only the cards before the item (not the drill feedback of later units, and not the key).

## Verdict

This subject does not teach-then-apply. The only unit that touches the key is Unit 1 (four cards, 457 words, no worked example); Units 2-5 teach four unrelated fact lists (documents, chambers, rights, eras) each drilled with its own option set that the key never uses; Unit 6 re-quizzes the card just read; and Unit 7 is one 103-word card that never lists the questions it then asks. The key's eight branch questions (L1 L2 X1 X2 J1 J2 F1 F2), their option wording and most of the 19 outcome names appear for the first time as locked steps inside the specimen drill. Of 76 route-and-name decisions across the 19 specimens, 31 are not licensed by any earlier card (12 UNSUPPORTED, 19 WORDING-GAP); the first question of the key ("Who has the authority here?") is cleanly supported in only 10 of 19.

Root causes: (1) the key is never taught, only tested; (2) four of the five content units are disconnected from the key; (3) the gate question is answered inconsistently by the specimens and the codes N1-N5 mean three different things; (4) every concept is compressed to one clause or a one-line "tell", and the real explanation lives in feedback shown after the learner has already guessed (about 2,730 words of feedback against 2,790 words in all 25 cards).

## Findings by unit

### Unit 0: course shell, key and engine (applies to every unit)

K1. [R4, HIGH] The key's questions are never taught. None of the nine step labels (`N1 Who has the authority here?` line 2995; `L1 What kind of act is this` 3008; `L2 What settles it` 3014; `X1 What is actually being done` 3023; `X2 Where the limit sits` 3030; `J1 What is the court being asked to do` 3039; `J2 What makes it the court's to answer — or not` 3045; `F1 What is the federal government's position` 3053; `F2 Where it lands` 3059) appears in any lesson card (the gate question is asked in other words at 3285, "who gets to decide this?"), and the 40 option texts under them never appear as the answers to a named question (26 of the 40 echo a card fact, see Key-wording coverage). The only place the reader meets the questions is as locked steps in the Unit 7 drill (4066-4072, "Answer the step above"). Why it blocks: the learner is asked to pick among options worded in a vocabulary that was never introduced, so a correct pick is a guess about which paraphrase matches; 31 of the 76 specimen decisions end in exactly this guess (see Learner simulation). Needed: each branch's two questions taught as questions, in these exact words, with a worked example, before any specimen.

K2. [R1, HIGH] The text that explains how to run the key is never shown. `determinationIntro` (3442-3452: "Step 1 — who has the say... Steps 2–3 — the two questions specific to that branch... Step 4 — now name it... The strip ... is a readout, not a control") and `intro` (3439) are dead data: grep of the engine (lines 3480+) finds no read of either; only `blurb` (3807) is rendered. So the learner reaches the determination with nothing but the 103-word Unit 7 card (3428-3431), which says "work the two questions under that branch" and never says what they are. Needed: a rendered walkthrough of the screen (what the readout strip is, why steps lock, what "Name it" means) before the first specimen.

K3. [R3, HIGH] The gate question cannot be answered consistently from the specimens. It is worded "Who has the authority here?" (2995) and the Unit 1 card says "when someone says the government has done something, ask which part" (3299), but the specimens key it three different ways: by who acts, by who holds the power, or by who is being asked.
- S10 (3230-3233): an executive order imposes a fee. Keyed `president`; the case's own why says "Taxing is an enumerated power of Congress, and an executive order cannot reach it" (3232), i.e. the authority is Congress's. A reader following 3290 ("Only powers listed in Article I") picks Congress and is marked wrong.
- S17 (3265-3268): a state immigration scheme. Keyed `states`; the cards say "Immigration and naturalisation are federal" (3303) and "Naturalisation is one of them [Congress's powers]" (3290), so the reader picks Congress.
- S18 (3270-3273): a federal minimum wage plus a higher state one. Keyed `states`, whose sub-label is "outside the federal government entirely" (3002).
- S2 (3190-3193): a federal speech-crime statute. Keyed `congress`; the cards teach "The states, or nobody ... rights that bind every level" (3293) and "where a right is at stake, neither may act" (3302), so the reader picks the fourth bin.
- S12 (3240-3243): arrest, lawyer, jury trial. Keyed `courts`; the cards say "most crime ... is state law" (3295) and describe these as rights that limit "what government may do" (3363), so the reader picks states or nobody.
- S14 (3250-3253): a tax-rate dispute brought to the courts. Keyed `courts`, but the answer to "who has the authority" is Congress (taxing), and the right answer is that the courts do not.
- S4 (3200-3203) and S8 (3220-3223) describe the same step (a treaty needing Senate consent) and are keyed `congress` and `president` respectively; no card says how to choose.
Why it blocks: the learner is trained to apply a rule the key itself does not follow, so a careful reader scores worse than a guesser. This is the strongest single cause of "confusing".

K4. [R3, HIGH] One code, three meanings. `N1` is the gate step (2995, shown to the learner as "N1 · Who has the authority here?"), the row label for Congress in the Unit 1 table (3290 `<th>N1</th>`), and the id of the "Who decides" drill (3455 `key:'n1'`). `N2` labels the President row (3291) and the "Founding documents" drill (3456). `N3` labels the courts row (3292) and "The chambers" drill (3457). `N4` labels the states row (3293) and "Who holds it" (3458). `N5` is "Which era" (3459). A reader who learns "N2 = the President" meets "N2" again as documents. The codes L, X, J, F (the branch step prefixes) are never explained at all. Needed: no codes in learner text; name every step by its question.

K5. [R5, HIGH] The 19 outcome names (2974-2992) are never listed, grouped or defined as a set. Terms of art that appear in no card: "enumerated" (2974), "power of the purse" (2975), "advice and consent" (2976), "Commander in chief" (2980), "preempts" (2990), "political question" (2987). "Delegated to local government" (2989) has no teaching at all: no card mentions a city, county or local government (grep of 3281-3434 for "city", "county", "local" is empty). The learner must pick one of five names at step 4 from words never seen.

K6. [R6, HIGH] Specimen feedback justifies the name, not the route, and carries as much teaching as the lessons. Across the 19 specimens `why` + `fals` is 1,508 words; add the quick-drill `w` (809) and err `w` (411) and feedback is about 2,730 words against 2,788 words in all 25 cards. The concepts the key depends on (floor vs ceiling 3272, "creatures of their state" 3262, executive agreement 3202, content-neutral rules 3278, the ten-day rule 3228) are explained only after the answer. And no `why` walks the route ("N1 is Congress because..., L1 is X because..., L2 is Y because..."), so a wrong step teaches nothing about that step. S10's why (3232) actively argues for the wrong gate answer.

K7. [R5, MED] The engine, not only the data, mismatches the lessons. (a) Quick drills score the answer only (`mountPick`, state.picked === ans) yet Unit 1 says "a right label reached by the wrong route counts as a miss" (3287); in Units 1-5 no route exists. (b) The err drill instructs "Name which diagnostic question the claim fails to engage" (4022) but only claims 1-3 correspond to any key question, there is no input, and the learner can never be marked wrong. (c) The subject index says "3 questions narrow 19 tools to one" (3900); civics outcomes are not tools. (d) Specimens are served in array order, unshuffled (4040-4041): S1-S5 are all Congress, S6-S10 President, S11-S14 courts, S15-S19 states, so the gate answer is predictable from position.

K8. [R1, HIGH] The subject sells one skill and delivers two products. The blurb (3438) says the course is "taught through the question underneath most of it: who actually has the authority here?"; Units 2, 4 (mostly) and 5 are exam-fact lists (documents, amendment numbers, dates, symbols) that the key cannot classify. The course never says so, so the learner cannot tell which parts are the skill and which are memorisation.

K9. [R9, HIGH] Every card is 74-146 words (25 cards, 2,788 words) and every concept gets a clause or a "tell". The owner's complaint is the structure: the one place each branch's limit is explained is a `.tell` line of 6-9 words (3290-3293). See the under-explained table below.

K10. [R8, MED] No transfer. The only real-world instruction is "ask which part" (3299) and "each correction makes a whole category of news reports readable" (3418), which is asserted, never shown. The 19 specimens are constructed so the stem narrates the answer (S4 "both go to the Senate, where the agreement needs the support of two-thirds"; S5 "The House votes articles by a simple majority; the Senate then holds a trial"; S8 "it binds nobody yet"), so the learner can match stem words to option words instead of applying the idea. There is no example of a messy real item (a headline, a paragraph from a news story) and no instruction on what to look for in one.

### Unit 1 - Who decides (4 cards, 457 words; drill: Who decides, 6 items)

U1-1. [R1, HIGH] Overpromise. Card 1 (3285): "Underneath almost every one of those questions is a single practical question: <b>who gets to decide this?</b> Learn to answer that and the list stops being a hundred unrelated facts." False for the document, rights-holder, history and symbols questions (Units 2, 4, 5), which "who decides" cannot answer. It also hides that the key asks four steps (gate, two branch questions, name) and eight different branch questions. Needed: say plainly what the course trains (a method for one family of questions) and what it only asks you to memorise.

U1-2. [R3, HIGH] The orienting note uses words the course has not taught: "Throughout, a right label reached by the wrong route counts as a miss. If you cannot say <i>which authority</i> decided it, you have memorised an answer rather than understood a system." (3287). "Label" and "route" are undefined; "route" does not exist in the Unit 1 drill (see K7a). Later the same idea is called "Right answer from the wrong branch" (3431) and, on screen, "Right name by the wrong route".

U1-3. [R2, HIGH] Card 2 "Three branches, and a fourth answer" (3288-3295): the table labels the rows N1-N4 (K4). The heading says three branches and a fourth answer, but the fourth bin is a different kind of thing: the tell for it is "The Tenth Amendment, and rights that bind every level" (3293) with "or nobody" never explained. Nothing here says what "nobody" means (that a right can stop every government), which is the idea S2, S12, S19 and N1 item 6 depend on.

U1-4. [R9, HIGH] Each branch is a bold name, a 4-word gloss and a tell: "<b>Congress</b> — writes the law<span class="tell">Only powers listed in Article I. Naturalisation is one of them.</span>" (3290). A newcomer still does not know: what Article I is; what is on the list (the card gives one item); how to tell whether a power is listed (the L2 decision "listed" vs "barred" depends on it); what "statute" (3291) means; what an "agency" is (3291, never defined anywhere); what "injured" means in a "live case brought by someone injured" (3292). Needed: a paragraph per branch with two everyday examples and one thing it cannot do.

U1-5. [R7, HIGH] Card 3 (3297) crams six mechanisms into one paragraph before the reader has met the institutions: "A bill must pass two chambers in identical form and survive a veto that takes two-thirds of both to override. Appointments and treaties need the Senate. Spending needs an appropriation. Courts can void what the other two agree on." Undefined at this point: chambers, veto, Senate, appointments, treaties, appropriation, void. The closing slogan "a government that cannot act quickly also cannot be captured quickly" (3298) is not an explanation. Each of these mechanisms is later a separate key outcome (purse, confirm, review) yet here it is one clause.

U1-6. [R2, MED] "an executive order frequently does not [outlive an administration]" (3299) is the course's only mention of executive orders and the whole "Beyond the President's reach" branch (X1 `newduty`, X2 `needslaw`, 3028, 3035; S10) rests on it. Neither "executive order" nor "administration" is defined.

U1-7. [R9, HIGH] Federalism (3300-3303) gives the entire states branch (five outcomes, two questions) four clauses: Tenth Amendment ("everything else was reserved to the states"), Supremacy Clause ("federal law controls any genuine conflict"), floor vs ceiling ("a state may go further"), and "where a right is at stake ... neither may act". None has an example. "Genuine conflict" is not explained; "floor rather than a ceiling" is not shown with a case (the minimum-wage example exists only in S18, 3270). Cities and counties never appear.

U1-8. [R4, HIGH] No bridge to application. After four cards the drill begins; the learner has never seen a case routed. The first time the gate is applied is an item with no scaffolding, and the first reasoning shown is the feedback after a wrong pick. Needed: two or three worked cases (what is being done, who is doing it, which of the four bins, why the others are wrong).

U1-9. [R5, HIGH] The N1 drill needs facts not yet taught (see simulation): item 5 (refusing money) needs "Congress appropriates", first stated in Unit 3 (3352); item 6 (a city permit for a religious congregation) needs religion as a protected right (3323, Unit 2; 3363, Unit 4) and the Fourteenth Amendment (3325, Unit 2), and a "city" pulls toward `states` since local government is never taught.

U1-10. [R3, MED] Four wordings of the one question: "who gets to decide this?" (3285), "Who has the authority here?" (2995), "Who holds the authority here?" (3455 drill prompt), "Who decides" (unit title 3282, drill title 3455, tab 3465), plus "who has the say" (3445, dead) and "decide who actually has the authority" (3429). And drill n4 is titled "Who holds it" (3458) for a different question (which people hold a right).

U1-11. [R6, MED] N1 feedback introduces untaught terms: item 5 `w` (3080) "Treasury", "power of the purse", "check", "legislature"; item 6 `w` (3082) "applies against the states through the Fourteenth"; item 2 `w` (3074) "the executive branch implements it" (the gate says "The President and the agencies"); item 3 `w` (3076) "Judicial review, established in Marbury v. Madison (1803)" (term and case first taught in Unit 3, 3345).

U1-12. [R8, LOW] The only transfer hint is the warn box (3299): "when someone says the government has done something, ask which part. The answer usually tells you how durable it is — a statute outlives an administration, an executive order frequently does not." Good instinct, one sentence, no example.

### Unit 2 - The founding documents (4 cards, 403 words; drill: Founding documents, 7 items)

U2-1. [R1, MED] No orientation. Card 1 opens "They are constantly confused, including by people born here, and the confusion matters because only one of them is law." (3310): no statement of what the reader will do, and no link to the key.

U2-2. [R3, HIGH] "Only one of them is law" is misleading and the drill depends on the confusion it creates. The Bill of Rights is the first ten amendments of the Constitution (3313), i.e. part of the law, yet it is taught as a third separate "document" and the drill (3085) offers "The Constitution" and "The Bill of Rights" as mutually exclusive choices. Item 5 (the First Amendment, 3095) is true of "The Constitution" as well as "The Bill of Rights", yet only the second is keyed. A careful reader is marked wrong for being right.

U2-3. [R2, MED] Undefined: "ratify/ratification" (3313, 3317, 3319, 3385), "unalienable" (3311), "houses of Congress" (3319, before Unit 3 introduces Congress), "commerce power" (3316).

U2-4. [R9, HIGH] The amendment table (3321-3329) is a one-line gloss per amendment. The Fourteenth, which carries the rights and states material of the key, reads "citizenship by birth, due process, equal protection, and the rest of the Bill of Rights applied against the states<span class="tell">Arguably the most consequential amendment ever added.</span>" (3325): "due process", "equal protection" and "applied against the states" are undefined, and the tell is an opinion, not an explanation. "Applied against the states" is the entire basis of outcome `protected` (S19) and N1 item 6.

U2-5. [R4, HIGH] Missed bridge. The Tenth Amendment is invoked in Unit 1 (3293, 3301), in N1 `w` (3078) and in S15 (3257) but the table of "the amendments that changed the country most" omits it, and the Fourth, Fifth, Sixth and Eighth (needed by S12, 3242) are never named in any card. Card 2 mentions "the taxing power, the commerce power, a single executive and a national judiciary" as answers to the Articles' failures (3316) without connecting them to "powers listed in Article I" (3290, L2 `listed`).

U2-6. [R5, LOW] Drill items echo the card sentences nearly verbatim (item 2 vs 3311; item 6 vs 3317; item 7 vs 3319): this tests recognition of the sentence just read. All 7 are answerable from the cards (see simulation) but nothing connects them to the key.

### Unit 3 - How the branches work (4 cards, 423 words; drill: The chambers, 8 items)

U3-1. [R1, HIGH] This unit holds the key's content for Congress, the President and the courts, but is organised by institution (House/Senate, President, courts, checks) rather than by the key's questions (what kind of act, what settles it; what is being done, where the limit sits; what is the court asked to do, what makes it the court's). No sentence says "this is what questions L1-L2 / X1-X2 / J1-J2 ask." The reader memorises in one structure and must apply in another.

U3-2. [R9, HIGH] The President card compresses X1 and X2 into two sentences (3340-3341): "Each has a limit worth memorising: agencies may not exceed their statute, only Congress declares war and funds it, treaties need two-thirds of the Senate, a veto falls to two-thirds of both chambers, and a pardon cannot touch a state conviction." That comma list covers four of the key's five X2 options (statute, declare, ratify, override) with no example of any; the fifth, `needslaw` (3035, the limit behind `beyondpres`), is absent.

U3-3. [R9, HIGH] The Congress card (3335-3338) says only how the chambers differ in size and term. What Congress does besides writing law (funding, consent to appointments and treaties, impeachment: the key's L1 `money`, `approve`, `remove`) appears only as bullets in the checks list (3349-3354), written as the other branches' checks, never as Congress's own powers.

U3-4. [R9, HIGH] The courts card (3343-3346) covers judicial review and its live-case limit. Three of the four courts outcomes (interpreting a statute, trial rights, political question) have no lesson content here. "Interpreting" is three words in Unit 1 ("say what it means", 3292) and "courts interpreting old text" in 3320 (about the Constitution); "precedent" is never taught; "political question" appears once, in a list, in Unit 7 (3430).

U3-5. [R9, HIGH] The checks list (3348-3355) is arrow-chains where the em dash does three different jobs: "Congress passes a law — the President can veto it — two-thirds of both chambers can override." (3349); "Courts may void acts of both — Congress and the states may amend the Constitution over them." (3353): "over them" (an amendment can reverse a court's constitutional ruling) is cryptic. The following instruction is "Memorise two or three of these as pairs" (3356): the lesson tells the reader to memorise rather than explaining.

U3-6. [R3, MED] One concept, five words: "chambers" (3297, 3338, 3341, 3349; drill title 3457), "houses" (3034, 3099, 3319), "bodies" (3337), "The House" as a name (3354), "Both chambers" (3103). "both houses" vs "The House" is ambiguous on a phone.

U3-7. [R2, MED] Undefined or untaught: "apportioned by population" (3336), "voting members" (3336), "Speaker of the House" and "line of succession" (3342), "Twenty-second Amendment" (3340, not in the Unit 2 table), "cabinet officers" (N3 item 3 stem, 3109; "cabinet" appears in no card), "impeach" (3354, never glossed as "bring the charge" outside the drill feedback at 3112).

U3-8. [R5, LOW] The drill is the best aligned in the course (8 of 8 answerable from the cards) but tests size, term length and who-does-which-act, not the key's questions.

U3-9. [R6, LOW] The clearest explanation of impeachment in the course is a single drill item's feedback: "Impeachment is the charge, not the removal — the two steps sit in different chambers on purpose." (3112). It belongs in the card.

### Unit 4 - Rights, duties and the oath (4 cards, 483 words; drill: Who holds it, 9 items)

U4-1. [R1, MED] "The most practically important thing on this list" (3363): there is no list. No orientation, no link to which key outcomes this feeds (`trialrights`, `protected`, `beyondcong`).

U4-2. [R9, HIGH] The card that carries three key outcomes names its subject in one sentence: "Speech, religion, due process, counsel in a criminal case, protection from unreasonable search — all are written as limits on what government may do to anyone present." (3363). It lists no trial right in detail (lawyer, silence, jury, public trial, speedy trial) and names no Amendment; those appear only inside S12's story and why (3240-3243). "Immigration proceedings are civil, not criminal" (3365): "civil" and "criminal" are undefined, and this is the sentence the audience most needs.

U4-3. [R3, HIGH] The drill's option set mixes two axes: who ("Everyone in the United States", "Citizens only") and what kind of thing ("A responsibility, not a right", "Not a constitutional right at all") (3123). The prompt says "Everyone, citizens only, or neither?" (3458): three choices, four options. Items collide: jury service (3131) and voting (3127) are in the citizens-only list (3364) and also in the duties list ("serve on a jury when summoned, and — for citizens — vote", 3370); item 4's own feedback says "treated as an obligation of citizenship rather than a privilege of it" (3132) while the keyed answer is not "A responsibility". Income tax (3135) "attaches to earning here" (3136), i.e. "Everyone", yet is keyed "A responsibility".

U4-4. [R3, MED] "persons" (3172, 3363), "anyone present" (3363), "everyone present" (3173), "persons present" (3134), "Everyone in the United States" (3123), "the people" (3126, 3134), "the accused" (3130), "a benefit of status" (3134), "benefits of status" (3173). Nine phrasings for one idea.

U4-5. [R9, MED] "What the Constitution does not promise" (3366-3368) is the best-explained idea in the course (a real contrast: duties vs guarantees) but is never connected to the key: "a list of things government may not do to you" is exactly what `protected` (S19) and `beyondcong` (S2) are, and the text does not say so.

U4-6. [R4, HIGH] Three key outcomes are "a right blocks government": `beyondcong` (L2 `barred`), `trialrights` (J1/J2), `protected` (F1/F2). No card tells the reader how to tell them apart, and Unit 4 never mentions the key. Taught only "rights are limits on government", a reader sees all three in S2, S12 and S19.

U4-7. [R7, MED] Card 4 (3373-3376) is test administration (oral, uscis.gov, which officials to look up), repeated at 3375, 3376, 3471 and in err 8 (3181), while the rights card above it gets one paragraph per ten concepts.

U4-8. [R2, LOW] Undefined: "Selective Service" (3370), "accommodations" (3374).

### Unit 5 - The history you are expected to know (6 cards, 730 words; drill: Which era, 8 items)

U5-1. [R1, MED] No orientation: what history the test expects, why these six cards, and no link to the key (although the Civil War amendments are the origin of `protected`, `preempted` and "persons, not citizens").

U5-2. [R7, MED] Card 5 (3403-3406, 146 words) covers the First World War, the Great Depression, the Second World War, the Cold War, the civil rights movement (Brown, King, 1964, 1965) and September 11 in three paragraphs, one clause each. "Brown v. Board of Education in 1954" (3405) is named without saying what it decided.

U5-3. [R9, HIGH] Three examples of a newcomer learning nothing. (a) "The Great Depression began in 1929 and reshaped what Americans expected government to do." (3404): what happened, and what did government start doing? (b) "The attacks of <b>September 11, 2001</b> are the modern event the test asks about, and reshaped security, surveillance and immigration policy..." (3406): the card never says what the attacks were. (c) "every compromise reached — 1820, 1850 — bought time without settling anything." (3388): what was compromised, between whom?

U5-4. [R2, HIGH] "Reconstruction" appears only in the card heading (3389) and as an option label (3145); the body never says what it was or when it ended, so the reader cannot say what the era label covers or when it ends. Also undefined: "franchise" (3394), "suffrage" (3175), "poll tax" (3398, 3175), "indentured servants" (3383), "containment" (3405), "seceded" (3390).

U5-5. [R3, MED] Era labels differ between lesson and drill: card "Colonies to independence" (3382) vs option "Colonial and founding (to 1791)" (3145); card "Expansion, and the question it forced" (3386) vs "The 1800s before the Civil War"; "The twentieth century" (3403) vs "The 20th century" (3145). The option list has no slot for 1877-1899 and no card ends "Reconstruction". The vote has four names: "the vote" (3326), "franchise" (3394), "suffrage" (3175), "the ballot" (3161).

U5-6. [R5, MED] Card 6 "Geography and symbols" (3407-3410: stripes, stars, capital, Statue of Liberty, anthem, territories, Independence Day, the two parties) is tested by zero drill items; the N5 drill covers only eras. Content with no practice.

U5-7. [R5, LOW] N5 stems echo card sentences nearly verbatim (item 5, 3155 vs 3391), so the drill tests recognition of the sentence, not understanding.

U5-8. [R9, MED] "onto land inhabited by Native nations, who were removed from it by treaty, by purchase and by force" (3387) is the whole treatment of westward expansion and Native dispossession.

### Unit 6 - What people get wrong (2 cards, 189 words; drill: Faulty claims, 8 items)

U6-1. [R5, MED] The drill re-quizzes the two cards just read. Card 1 lists four of the claims (3418); card 2 gives two more with their corrections (3420-3421). Claim 6 (states' rights, 3176) is taught only in Unit 5 (3392), and claim 8, "If you pass the civics test you have to know all of American history" (3180), only in Unit 4 (3374); claim 8 is also a claim nobody holds, not a misstatement of "their own system" as the unit frames the others.

U6-2. [R3, MED] Three different tasks are described: "Each is corrected by a single fact" (3418); "practice at saying exactly which fact corrects each claim" (3422); and on screen "Name which diagnostic question the claim fails to engage" (4022). The corrections are not single facts: claim 1's `w` (3167) states three (Congress makes law; the President signs/vetoes and executes; executive orders bind only the executive branch and cannot create obligations).

U6-3. [R6, MED] Fault text uses terms never taught: "binds the executive branch ... can be reversed by the next President with a signature" (3167); "no power to review laws in the abstract" (3169); "The Supremacy Clause settles conflicts within federal power" (3171, while the card teaches "federal law controls any genuine conflict", 3302; "and has acted" is new).

U6-4. [R8, MED] This is the unit closest to transfer ("Each correction makes a whole category of news reports readable", 3418) and it never shows one: no sentence from a news story, no demonstration of the claim being made and fixed.

U6-5. [R9, MED] "the expansion of the franchise against sustained opposition is the main plot of two centuries. Treating the current arrangement as the original one removes the reason for most of what followed." (3420) and "Knowing what it was written against is knowing what it is for." (3421): slogans. The Dred Scott decision is one clause; the reader is not told when it was or what the Court decided and why a court decision needed an amendment to undo.

U6-6. [R5, MED] The UI gives no input: "State the fault out loud or in writing before revealing it" (4022); the stat is "seen" (S.stats.err), so the learner cannot be wrong and the drill produces no signal.

### Unit 7 - Full determination (1 card, 103 words; drill: 19 specimens)

U7-1. [R4, HIGH] The whole bridge from knowledge to application is one card (3428-3431). It restates "decide who actually has the authority, work the two questions under that branch, and name what is going on" (3429) without listing the questions, names the four limit outcomes in one clause ("beyond Congress's reach, beyond the President's, a political question, or a protected right no government may touch", 3430) without explaining any, and repeats the scoring note (3431). No specimen is walked through.

U7-2. [R5, HIGH] 76 route-and-name decisions: 45 supported, 19 WORDING-GAP, 12 UNSUPPORTED (see simulation). The gate is supported cleanly in 10 of 19, step 2 in 14, step 3 in 12, the name in 9. Specimens S10, S12 and S14 have no supported decision at all, and S16 has one.

U7-3. [R3, MED] Scoring is described three ways: "Right answer from the wrong branch counts as a miss" (3431), "a right label reached by the wrong route" (3287), and on screen "Right name by the wrong route counts as a miss" (4108 hint). "Wrong branch" is inaccurate: the miss may be at step 2 or 3 under the right branch.

U7-4. [R6, HIGH] See K6. Examples of whys that do not teach the route: S1 (3187) never says why the gate is Congress; S10 (3232) argues for Congress; S12 (3242) lists four Amendments no card names; S14 (3252) "commits a choice to the elected branches and supplies no standard a court could apply" is the most abstract sentence in the course and is the only explanation of `notlegal`.

U7-5. [R7, MED] No build-up: 19 specimens, one per outcome, in branch order (K7d), each seen once, with no repeated practice of a route and no easy-to-hard progression. The first wrong step is never revisited.

## Learner simulation

Method: for each item, a reader who has read only the cards before that item (the unit's own cards and every earlier unit's cards; not any drill feedback, not the key) tries to answer and justify it using only those cards' sentences. Line numbers are the licensing sentence in the course cards. For specimens each decision (gate, step 2, step 3, name) is checked separately; a specimen counts as answerable only if all four are SUPPORTED.

### Drill n1 "Who decides" (after Unit 1, cards 3284-3303)

| Item | Verdict | Licensing card sentence, or what is missing |
|---|---|---|
| 1. Naturalisation requirements -> Congress (3071) | SUPPORTED | 3290: "Only powers listed in Article I. Naturalisation is one of them." |
| 2. Detailed regulations that put an immigration statute into operation -> President and agencies (3073) | WORDING-GAP | 3291: "carry it out. May go no further than a statute allows." The stem says "Writing the detailed regulations", which collides with 3290 "Congress — writes the law"; "regulations" and "agencies" are never defined; "put into operation" is not "carry it out". |
| 3. Statute vs Constitution in a case brought by someone harmed -> courts (3075) | SUPPORTED | 3292: "Only in a live case brought by someone injured." plus 3297 "Courts can void what the other two agree on." |
| 4. Driver's licence, marriage licence, practising law -> states (3077) | SUPPORTED | 3295: "driving, marriage, schools, most crime ... is state law." (practising law not named; licensing is the same family) |
| 5. Refusing money for a programme the President wants -> Congress (3079) | UNSUPPORTED | 3297 says only "Spending needs an appropriation." No card says who appropriates; "Congress ... controls the money" is first stated in Unit 3 (3352). |
| 6. A city requires a permit before a religious congregation meets -> states or nobody (3081) | UNSUPPORTED | Needs "religion is a protected right" (first in the Unit 2 table 3323 and Unit 4 3363) and the Fourteenth (3325). Up to this point 3293 and 3302 say "rights ... bind every level" without saying which rights. "A city" pulls to `states`; local government is never taught. |

Totals n1: 3 SUPPORTED, 1 WORDING-GAP, 2 UNSUPPORTED (of 6).

### Drill n2 "Founding documents" (after Unit 2)

| Item | Verdict | Licensing sentence |
|---|---|---|
| 1. July 4, 1776, Jefferson, separation -> Declaration (3087) | SUPPORTED | 3311: "announced separation from Britain ... written mainly by Thomas Jefferson". (July 4 is first in 3385.) |
| 2. Unalienable rights, consent of the governed -> Declaration (3089) | SUPPORTED | 3311, near verbatim. |
| 3. "We the People", three branches, supreme law -> Constitution (3091) | SUPPORTED | 3312: "opens 'We the People' and is the supreme law of the land." |
| 4. First ten amendments, 1791 -> Bill of Rights (3093) | SUPPORTED | 3313. |
| 5. Five freedoms in one amendment -> Bill of Rights (3095) | SUPPORTED | 3323 (First: speech, religion, press, assembly, petition) + 3313 (first ten amendments). Option overlap: "The Constitution" is equally true (U2-2). |
| 6. Hamilton, Madison, Jay, Publius -> Federalist Papers (3097) | SUPPORTED | 3317, near verbatim. |
| 7. Two-thirds of both houses then three-quarters of states -> Constitution (3099) | SUPPORTED | 3319, near verbatim. |

Totals n2: 7 SUPPORTED (of 7).

### Drill n3 "The chambers" (after Unit 3)

| Item | Verdict | Licensing sentence |
|---|---|---|
| 1. 435 members, population, two years -> House (3105) | SUPPORTED | 3336. |
| 2. 100 members, two per state, six years -> Senate (3107) | SUPPORTED | 3336. |
| 3. Confirms judges and cabinet officers, consents to treaties by two-thirds -> Senate (3109) | SUPPORTED | 3344 "confirmed by the Senate"; 3351 "two-thirds of the Senate consents". ("cabinet officers" is not in any card; 3350 says "judges and officers".) |
| 4. Brings impeachment charges by majority -> House (3111) | SUPPORTED | 3354: "The House impeaches; the Senate tries and needs two-thirds to remove." ("impeach" is never glossed; the pairing with "tries" lets the reader infer it.) |
| 5. Holds the trial after impeachment, two-thirds to remove -> Senate (3113) | SUPPORTED | 3354. |
| 6. Must pass a bill in identical form -> Both chambers (3115) | SUPPORTED | 3338 verbatim. |
| 7. Two-thirds of each to override a veto -> Both chambers (3117) | SUPPORTED | 3341, 3349. |
| 8. Presides over the Senate, casts the tie vote -> Vice President (3119) | SUPPORTED | 3342. |

Totals n3: 8 SUPPORTED (of 8).

### Drill n4 "Who holds it" (after Unit 4)

| Item | Verdict | Licensing sentence, or what is missing |
|---|---|---|
| 1. Freedom of speech -> Everyone (3125) | SUPPORTED | 3363: speech among protections "written as limits on what government may do to anyone present". |
| 2. Voting in a federal election -> Citizens only (3127) | SUPPORTED | 3364: "voting in federal elections, most elected office, and federal jury service". (3370 also lists voting under duties: "for citizens — vote".) |
| 3. Lawyer and silence if charged -> Everyone (3129) | SUPPORTED | 3363: "counsel in a criminal case". (silence not named) |
| 4. Serving on a federal jury when summoned -> Citizens only (3131) | WORDING-GAP | 3364 licenses "Citizens only"; 3370 licenses "A responsibility" ("serve on a jury when summoned"), and the item says "when summoned". The feedback (3132) says "obligation of citizenship", contradicting its own key. |
| 5. Protection against unreasonable searches -> Everyone (3133) | SUPPORTED | 3363. |
| 6. Paying income tax on money earned here -> A responsibility (3135) | SUPPORTED | 3370: "pay taxes on income earned here". (Also reads as "Everyone"; see U4-3.) |
| 7. State legislature of your state -> Citizens only (3137) | SUPPORTED | 3364: "most elected office". |
| 8. A job or home provided by government -> Not a constitutional right (3139) | SUPPORTED | 3367-3368. |
| 9. Practise your religion or none -> Everyone (3141) | SUPPORTED | 3363. |

Totals n4: 8 SUPPORTED, 1 WORDING-GAP (of 9).

### Drill n5 "Which era" (after Unit 5)

| Item | Verdict | Licensing sentence |
|---|---|---|
| 1. Tea shipment destroyed in Boston Harbor -> Colonial and founding (3147) | SUPPORTED | 3384: "the Boston Tea Party of 1773". |
| 2. Philadelphia delegates replace the Articles -> Colonial and founding (3149) | SUPPORTED | 3315 (convention of 1787); 3385 (Constitution written 1787). |
| 3. Purchase of territory from France doubled the country -> 1800s before the Civil War (3151) | SUPPORTED | 3387: "The Louisiana Purchase of 1803 roughly doubled the country’s size". (France not named in any card.) |
| 4. Proclamation freeing enslaved people in rebelling states -> Civil War and Reconstruction (3153) | SUPPORTED | 3390: Emancipation Proclamation of 1863. |
| 5. Three amendments: slavery, citizenship, vote regardless of race -> Civil War and Reconstruction (3155) | SUPPORTED | 3391, near verbatim. (Reader cannot place 1870 without a Reconstruction end date; 1868 and 1865 give the clue.) |
| 6. Women won the vote nationwide after seventy years -> 20th century (3157) | SUPPORTED | 3397: "1920 — the Nineteenth". |
| 7. World war after Pearl Harbor -> 20th century (3159) | SUPPORTED | 3404. |
| 8. Civil rights act and voting rights act -> 20th century (3161) | SUPPORTED | 3405, 3399 (1964, 1965). "devices" is not in any card. |

Totals n5: 8 SUPPORTED (of 8). This is the only drill where stems mirror card sentences almost word for word; it tests recognition of the sentence.

### Faulty claims (after Unit 6, cards 3416-3422)

| Item | Verdict | Licensing sentence, or what is missing |
|---|---|---|
| 1. The President makes the laws (3166) | SUPPORTED (core) | 3290-3291, 3339. The `w` (3167) adds executive-order facts no card teaches ("binds the executive branch", "can be reversed by the next President with a signature"). |
| 2. The Supreme Court can strike down any law it disagrees with (3168) | SUPPORTED | 3346 warn: "a court needs a live case ... cannot strike down a law for being unwise." |
| 3. Federal law always beats state law (3170) | WORDING-GAP | 3301-3302 license "the federal government holds the powers the Constitution lists" and "Where both have authority, federal law controls any genuine conflict". The fault's "and has acted" (3171) is never taught. |
| 4. The Bill of Rights protects citizens (3172) | SUPPORTED | 3363-3364. |
| 5. America has always been a democracy where everyone could vote (3174) | SUPPORTED | 3394-3402. |
| 6. The Civil War was about states’ rights, not slavery (3176) | SUPPORTED | 3392 warn, near verbatim. |
| 7. Everyone born here is a citizen — always the rule (3178) | SUPPORTED | 3421 (Unit 6 itself states the fault); 3325 (citizenship by birth, 1868). |
| 8. Passing the civics test means knowing all American history (3180) | SUPPORTED | 3374 (oral, published list). Not in any Unit 6 card. |

Totals err: 7 SUPPORTED, 1 WORDING-GAP (of 8). Note that "SUPPORTED" here means the fault can be stated, not that the learner has been asked to produce it: there is no input (K7b).

### Specimens (after Units 1-7, cards 3284-3431) - every decision checked

Key: S = SUPPORTED, WG = WORDING-GAP, U = UNSUPPORTED. Step wording ("What kind of act is this" etc.) is never taught in any card; the verdict is about whether the idea behind the chosen option is licensed in words a reader can match.

| Specimen / decision | Verdict | Licensing sentence, or what is missing |
|---|---|---|
| **S1 naturalisation statute (3185)** gate Congress | S | 3290 "Naturalisation is one of them." |
| S1 L1 "Writing a rule that binds the whole country" | S | 3290 "Congress — writes the law". |
| S1 L2 "The power is one of those listed in Article I" | S | 3290 "Only powers listed in Article I." Nothing teaches how to decide any other power is or is not listed. |
| S1 name "An enumerated power of Congress" | WG | Cards say "listed in Article I"; "enumerated" is in no card (first at 2974, 3232). |
| **S2 federal speech-crime statute (3190)** gate Congress | U | Contradicted: 3293 "The states, or nobody ... rights that bind every level", 3302 "where a right is at stake, neither may act". Literal answer to "Who has the authority here?" is nobody. |
| S2 L1 makelaw | S | 3290. |
| S2 L2 "No listed power reaches it, or a right forbids it" | WG | Both halves exist separately (3290; 3363 "limits on what government may do") but never as an either/or reason a Congress statute fails. |
| S2 name "Beyond Congress’s reach" | WG | Named only in a list at 3430; never explained. |
| **S3 President's programme, Congress will not fund (3195)** gate Congress | S | 3352 "Congress declares war and controls the money"; 3341 "only Congress declares war and funds it". (Needed earlier in n1 item 5.) |
| S3 L1 "Deciding what gets funded" | S | 3297 "Spending needs an appropriation." |
| S3 L2 "Only Congress can appropriate money from the Treasury" | WG | "appropriation" is never explained, "Treasury" appears in no card, and no card says only Congress does it. |
| S3 name "The power of the purse" | WG | Idiom in no card (first at 3080). |
| **S4 treaty and judge to the Senate (3200)** gate Congress | WG | 3297 "Appointments and treaties need the Senate." But S8 (the same Senate-consent step) is keyed President; no card says how to choose. |
| S4 L1 "Approving a person or an agreement the President proposes" | S | 3350 "The President nominates judges and officers — the Senate confirms or refuses." |
| S4 L2 "The Senate must consent — two-thirds for a treaty" | S | 3351 "two-thirds of the Senate consents, or they bind nothing." |
| S4 name "Senate advice and consent" | WG | Phrase is in no card (first at 3110, 3202). |
| **S5 impeachment of a judge (3205)** gate Congress | S | 3354 (both chambers belong to Congress, 3335). |
| S5 L1 "Removing a federal official for misconduct" | S | 3354 "to remove". |
| S5 L2 "The House brings the charge; the Senate tries it" | S | 3354 "The House impeaches; the Senate tries". |
| S5 name "Impeachment and removal" | S | 3354. |
| **S6 labelling statute, agency regulations (3210)** gate President and agencies | S | 3291 "carry it out"; 3340 "executes the laws through the agencies". |
| S6 X1 "Applying a law Congress already passed" | S | 3291, 3340. |
| S6 X2 "The agency may go no further than the statute allows" | S | 3291 "May go no further than a statute allows." (3341). |
| S6 name "Executing the law" | S | 3340. |
| **S7 forces abroad without a declaration (3215)** gate President | S | 3340 "commands the armed forces". The stem also gives Congress appropriating and debating; authority is split and the gate cannot say so. |
| S7 X1 "Directing the armed forces" | S | 3340. |
| S7 X2 "Only Congress declares war and funds it" | S | 3341 verbatim. |
| S7 name "Commander in chief" | WG | Title is in no card; cards say "commands the armed forces". |
| **S8 negotiated trade agreement, binds nobody yet (3220)** gate President | WG | 3340 "conducts relations with other countries" licenses President; 3297/3350/3351 license Congress for the same Senate-consent step (S4). No card says to choose by the actor. |
| S8 X1 "Dealing with another country" | S | 3340. |
| S8 X2 "A treaty binds nothing until the Senate consents" | S | 3351 "or they bind nothing". |
| S8 name "Foreign affairs and treaties" | S | 3340, 3351. |
| **S9 veto and pardon (3225)** gate President | S | 3339 "signs or vetoes bills, and pardons federal offences". |
| S9 X1 "Acting on a bill, or on a federal conviction" | WG | Neither "veto" nor "pardon" appears in the option; "veto" is never defined; the reader must decode "acting on a bill". |
| S9 X2 "A veto falls to two-thirds of both houses; a pardon reaches federal offences only" | S | 3341. |
| S9 name "Veto and pardon" | S | 3339. |
| **S10 executive order imposes a household fee (3230)** gate President | U | See K3: the case's why says taxing is Congress's (3232); 3290 points to Congress. "executive order" appears once (3299), undefined. |
| S10 X1 "Creating an obligation Congress never authorised" | U | In no card; only in err claim 1's feedback (3167). |
| S10 X2 "It needs legislation, and an order cannot substitute" | U | No card defines an executive order or says it cannot substitute for a statute. |
| S10 name "Beyond the President’s reach" | WG | Named only at 3430. |
| **S11 sued over a statute, court holds it unenforceable (3235)** gate Courts | S | 3292 "live case brought by someone injured"; 3297, 3345. |
| S11 J1 "Measure a law against the Constitution" | S | 3345 "refuse to apply a statute conflicting with the Constitution". |
| S11 J2 "Someone actually injured brought a live case" | S | 3346 warn; 3292. |
| S11 name "Judicial review" | S | 3345. |
| **S12 arrest to jury trial (3240)** gate Courts | U | Cards route this elsewhere: 3295 "most crime ... is state law"; 3363 rights as "limits on what government may do". Gate sub-label "the branch that says what it means" (3000) does not describe a trial. |
| S12 J1 "Protect someone’s rights inside a proceeding" | WG | Idea at 3363 ("due process, counsel in a criminal case"); step wording is new. |
| S12 J2 "The Constitution guarantees the procedure itself" | WG | 3363 (rights); "procedure" and "guarantees" absent. |
| S12 name "Trial and due-process rights" | WG | "due process" and "counsel" are in 3363; silence, jury, public trial, speedy trial and the Fourth/Fifth/Sixth/Eighth (3242) are in no card. |
| **S13 "vehicles" in a park and an e-bike (3245)** gate Courts | S | 3292 "say what it means". |
| S13 J1 "Settle what a statute’s words cover" | S | 3292. |
| S13 J2 "Text and precedent decide it, not preference" | U | "precedent" is in no card; "text" appears only for the Constitution (3320). |
| S13 name "Interpreting a statute" | S | 3292, 3320. |
| **S14 22% vs 28% tax rate asked of the courts (3250)** gate Courts | WG | 3346 teaches courts cannot decide what is unwise, but the gate asks who has authority; for a tax rate that is Congress. Keyed Courts only because the parties "ask the courts". |
| S14 J1 "Decide which policy would be wiser" | WG | 3346 "cannot strike down a law for being unwise" is the inverse phrasing. |
| S14 J2 "Nothing legal is in dispute — it belongs to the elected branches" | U | Not taught; "elected branches" is in no card. |
| S14 name "A political question, not a legal one" | U | Appears once, in the Unit 7 list (3430), undefined. |
| **S15 state sets licence age, marriage, schools (3255)** gate States | S | 3295, 3301. |
| S15 F1 "It has no listed power here" | S | 3301 "federal government holds the powers the Constitution lists; everything else was reserved to the states". |
| S15 F2 "Reserved to the states — the general police power" | S | 3301 "reserved to the states by the Tenth Amendment". "police power" is in no card. |
| S15 name "Reserved to the states" | S | 3301. |
| **S16 city council: parking, zoning, libraries (3260)** gate States | WG | 3301 "a state government and a national one". No card mentions cities, counties or local government; the stem's last sentence ("Its authority ... comes from the state") supplies the link. |
| S16 F1 "It has no listed power here" | S | 3301. |
| S16 F2 "Handed by the state to a city or county" | U | No card. |
| S16 name "Delegated to local government" | U | No card. |
| **S17 state immigration scheme (3265)** gate States | U | Cards say the opposite: 3303 "Immigration and naturalisation are federal"; 3290 naturalisation is Congress's. Gate sub-label 3002 "outside the federal government entirely" contradicts the outcome "Federal law preempts". |
| S17 F1 "It has authority and has already acted" | WG | 3302 "Where both have authority"; "already acted" never taught, and the stem does not say Congress has legislated (only the why, 3267, does). |
| S17 F2 "Federal law controls and the state rule gives way" | S | 3302 "federal law controls any genuine conflict — the Supremacy Clause". |
| S17 name "Federal law preempts" | WG | "preempt" is in no card; the card term is "Supremacy Clause". |
| **S18 federal minimum wage, higher state minimum (3270)** gate States | U | The stem contains a federal law; sub-label 3002 says "outside the federal government entirely"; no card says the states bin also holds shared-power cases. |
| S18 F1 "Both have authority, and both may act" | S | 3302 "Where both have authority". |
| S18 F2 "The federal rule is a floor a state may exceed" | S | 3302 "a floor rather than a ceiling, a state may go further". |
| S18 name "Both may act" | S | 3302. |
| **S19 permit for a religious service, newspaper approval (3275)** gate States | S | 3293 "rights that bind every level"; 3302. (Compare S2.) |
| S19 F1 "No government may act — a right protects it" | S | 3302 "where a right is at stake, neither may act"; 3323, 3363 (religion, press are protected). |
| S19 F2 "Neither may act at all" | S | 3302. |
| S19 name "Nobody may act — a protected right" | S | 3302. |

Specimen decision totals (76): SUPPORTED 45, WORDING-GAP 19, UNSUPPORTED 12.
By step: gate 10 S / 4 WG / 5 U; step 2 14 S / 4 WG / 1 U; step 3 12 S / 3 WG / 4 U; name 9 S / 8 WG / 2 U.
By specimen (answerable only if all four decisions are S): fully SUPPORTED S5, S6, S11, S15, S19 (5); WORDING-GAP only S1, S3, S4, S7, S8, S9 (6); at least one UNSUPPORTED S2, S10, S12, S13, S14, S16, S17, S18 (8).

### Grand totals (practice items)

| Set | Items | SUPPORTED | WORDING-GAP | UNSUPPORTED |
|---|---|---|---|---|
| n1 Who decides | 6 | 3 | 1 | 2 |
| n2 Founding documents | 7 | 7 | 0 | 0 |
| n3 The chambers | 8 | 8 | 0 | 0 |
| n4 Who holds it | 9 | 8 | 1 | 0 |
| n5 Which era | 8 | 8 | 0 | 0 |
| Faulty claims | 8 | 7 | 1 | 0 |
| Specimens (worst of four decisions) | 19 | 5 | 6 | 8 |
| **Total** | **65** | **46** | **9** | **10** |

19 of 65 practice items (29%) cannot be answered and justified from earlier cards: 10 UNSUPPORTED, 9 WORDING-GAP. The failures are not spread evenly: the four fact drills (n2, n3, n5, and most of n4) are almost fully supported because their stems mirror card sentences, while the two sets that exercise the key (n1 and the specimens) carry nearly all the gaps (n1: 3 of 6; specimens: 14 of 19).

## Vocabulary map

Every row is one concept; the variants are quoted verbatim from the cards, key, drills and feedback. A reader meets these in this order: cards, then drill option text, then key text, then feedback.

| Concept | Every variant, verbatim | Where |
|---|---|---|
| The one question the course answers | "who gets to decide this?"; "which part"; "Who has the authority here?"; "Who holds the authority here?"; "Who decides" (unit, drill, tab); "who has the say"; "decide who actually has the authority"; "N1" | 3285; 3299; 2995; 3455; 3282, 3455, 3465; 3445 (dead); 3429; 3290 |
| What the four bins are | "Three branches, and a fourth answer"; "the branch that writes the law" / "carries it out" / "says what it means"; "outside the federal government entirely"; "everything else" | 3288; 2996-3003; 3293 |
| Congress's core act | "writes the law"; "Writing a rule that binds the whole country"; "Congress makes them"; "Setting the requirements..."; "uniform Rule of Naturalization" | 3290; 3009; 3167; 3071; 3072 |
| The two halves of Congress | "chambers" (also drill title "The chambers"); "houses"; "bodies"; "The House"; "both" | 3297, 3338, 3341, 3349, 3457; 3034, 3099, 3319; 3337; 3354; 3115 |
| The executive | "The President and the agencies"; "the branch that carries it out"; "carry it out"; "Executing the law"; "executes the laws through the agencies"; "the executive branch implements it"; "Applying a law Congress already passed"; "put an immigration statute into operation"; "making it operable"; "ordinary execution of the law" | 2998, 3069, 3291; 2998; 3291; 2979; 3340; 3074; 3024; 3073; 3212; 3233 |
| What a statute is | "a law Congress already passed"; "a statute"; "the statute"; "a rule"; "the law"; "legislation"; "a bill"; "a law" (never defined as one family) | 3024; 3291, 3299, 3341; 3031; 3009; 3290; 3035; 3297; 3349 |
| Courts striking a law | "void"; "strike down"; "refuse to apply a statute"; "Measure a law against the Constitution"; "conflicts with the Constitution"; "holds the statute unenforceable"; "judicial review" | 3297, 3353; 3168, 3040; 3345; 3040; 3075, 3345; 3235; 3076, 3237, 3345 |
| Courts' limiting condition | "a live case brought by someone injured"; "Someone actually injured brought a live case"; "a live case brought by someone actually injured"; "in a case brought by someone it harmed"; "a live case brought by an injured party"; "a person actually penalised, bringing a real case"; "an injured plaintiff" | 3292; 3046; 3346; 3075; 3076; 3237; 3238 |
| Courts' main daily job | "say what it means"; "Settle what a statute’s words cover"; "Text and precedent decide it"; "courts interpreting old text"; "Interpreting a statute" | 3292, 3000; 3042; 3048; 3320; 2986 |
| What courts will not do | "A political question, not a legal one"; "Decide which policy would be wiser"; "Nothing legal is in dispute — it belongs to the elected branches"; "strike down a law for being unwise"; "an election, not a lawsuit"; "in the abstract" | 2987; 3043; 3049; 3346; 3252; 3169 |
| Money power | "Spending needs an appropriation"; "controls the money"; "declares war and funds it"; "Deciding what gets funded"; "Only Congress can appropriate money from the Treasury"; "The power of the purse"; "provide money"; "declining to fund it" | 3297; 3352; 3032, 3341; 3010; 3017; 2975; 3079; 3197 |
| Senate's role | "Appointments and treaties need the Senate"; "the Senate confirms or refuses"; "two-thirds of the Senate consents"; "Senate advice and consent"; "Approving a person or an agreement the President proposes"; "The Senate must consent"; "ratify" / "ratification" | 3297; 3350; 3351; 2976, 3110, 3202; 3011; 3018; 3033 (id), 3313, 3319 |
| Impeachment | "The House impeaches; the Senate tries"; "Brings impeachment charges"; "Impeachment and removal"; "Removing a federal official for misconduct"; "The House brings the charge; the Senate tries it"; "votes articles" | 3354; 3111; 2977; 3012; 3019; 3205 |
| Veto and pardon | "vetoes"; "a veto falls to two-thirds of both chambers"; "A veto falls to two-thirds of both houses"; "can override"; "Acting on a bill, or on a federal conviction"; "returns it unsigned with his objections"; "federal offences" / "federal offence" / "federal conviction"; "state conviction" | 3339; 3341; 3034; 3349; 3027; 3225; 3340, 3034, 3225, 3027; 3341 |
| The limit on the President | "May go no further than a statute allows"; "may not exceed their statute"; "go no further than the statute allows"; "cannot create an obligation Congress never authorised"; "Creating an obligation Congress never authorised"; "It needs legislation, and an order cannot substitute"; "exceeding what Congress authorised"; "gone past what Congress authorised"; "Beyond the President’s reach" | 3291; 3341; 3031; 3167; 3028; 3035; 3188; 3213; 2983 |
| State power | "reserved to the states"; "Reserved to the states — the general police power"; "everything not given to the federal government"; "everything else"; "It has no listed power here"; "The states, or nobody" | 2988, 3301; 3060; 3078; 3293; 3054; 2995 |
| Federal supremacy | "federal law controls any genuine conflict — the Supremacy Clause"; "Federal law preempts"; "Federal law controls and the state rule gives way"; "Federal law always beats state law"; "It has authority and has already acted"; "preemption" / "preempted" | 3302; 2990; 3062; 3170; 3055; 3258, 3273 |
| Shared power | "Both may act"; "Both have authority, and both may act"; "Where both have authority"; "The federal rule is a floor a state may exceed"; "a floor rather than a ceiling"; "set a floor rather than a ceiling"; "concurrent" (id only) | 2991; 3056; 3302; 3063; 3302; 3272; 2991 |
| A right blocks every government | "Nobody may act — a protected right"; "No government may act — a right protects it"; "Neither may act at all"; "where a right is at stake, neither may act"; "rights that bind every level"; "Nobody may —"; "Neither government may do this"; "No listed power reaches it, or a right forbids it"; "a protected right no government may touch" | 2992; 3057; 3064; 3302; 3293; 3082; 3277; 3016; 3430 |
| Who a right protects | "persons"; "anyone present"; "everyone present"; "persons present"; "Everyone in the United States"; "the people"; "the accused"; "a benefit of status" / "benefits of status" | 3172, 3363; 3363; 3173; 3134; 3123; 3126, 3134; 3130; 3134, 3173 |
| Duties | "Responsibilities" (heading); "The duties conventionally listed"; "A responsibility, not a right"; "an obligation of citizenship" | 3369; 3370; 3123; 3132 |
| Criminal procedure rights | "Trial and due-process rights"; "Protect someone’s rights inside a proceeding"; "The Constitution guarantees the procedure itself"; "due process, counsel in a criminal case"; "The right to a lawyer, and to remain silent"; "appointed counsel"; "counsel provided at public expense"; "a lawyer is appointed" | 2985; 3041; 3047; 3363; 3129; 3243; 3365; 3240 |
| The vote | "the vote"; "the franchise"; "suffrage"; "the ballot"; "voting in federal elections" | 3326-3327; 3394; 3175; 3161; 3364 |
| Historical eras | Cards: "Colonies to independence"; "Expansion, and the question it forced"; "Civil War and Reconstruction"; "The twentieth century". Options: "Colonial and founding (to 1791)"; "The 1800s before the Civil War"; "Civil War and Reconstruction"; "The 20th century". Drill: "Which era" / "When did this happen?" | 3382, 3386, 3389, 3403; 3145; 3459, 3466 |
| What the learner is doing in Unit 7 | "Full determination"; "the key"; "Running the whole key"; "the determination"; "specimen"; "situations"; "cases"; "unlabelled cases"; "Name it"; "name what is going on"; "Right answer from the wrong branch"; "a right label reached by the wrong route"; "Right name by the wrong route" | 3426, subject index; 3428; 3429; 4088; 3429; 3901; 3901; 4066-4072; 3429; 3431; 3287; 4108 |
| The outcome category | "tools" (subject index: "narrow 19 tools to one") | 3900 |
| The faulty-claims task | "practice at saying exactly which fact corrects each claim"; "Each is corrected by a single fact"; "Name which diagnostic question the claim fails to engage" | 3422; 3418; 4022 |
| Step codes | "N1"; "N2"; "N3"; "N4" (rows); "n1"-"n5" (drills); "L1/L2"; "X1/X2"; "J1/J2"; "F1/F2" (never explained) | 3290-3293; 3455-3459; 3008-3065 |

Mismatches inside a single lesson (lists that do not match what follows):
- Card 2 of Unit 1 is headed "Three branches, and a fourth answer" (3288) but the table's four rows are named N1-N4 and the drills named n1-n5 (K4); the "fourth answer" is also the place where `preempted` and `concurrent`, which involve the federal government, are filed (3002 vs 2990-2991).
- Unit 6 card 1 promises that "The commonest are structural: that the President makes law, that courts may strike down anything they dislike, that federal law always wins, that the Bill of Rights is a benefit of citizenship" (3418). Claims 1-4 follow in that order; claims 5 and 7 (democracy, birthright citizenship) are in card 2; claim 6 (states' rights) is taught only in Unit 5 (3392) and claim 8 (the civics test) only in Unit 4 (3374).
- Unit 4 card 3 lists the duties as "obey the law, pay taxes on income earned here, serve on a jury when summoned, and — for citizens — vote" (3370); the n4 drill's options make jury service and voting "Citizens only", not "A responsibility".
- The checks list (3349-3354) names six checks; N3 drill item 8 (the Vice President's tie vote, 3119) is a seventh mechanism taught only in a `.note` (3342).

## Key-wording coverage

Was each key step label and option text taught, in those words or an unmistakable equivalent, in a card before the learner must use it? yes / partly / no. "Partly" means the idea is present but the option wording, or the way the question is posed, differs.

### Step labels (9 of 9: 0 yes, 1 partly, 8 no)

| Step label (line) | Taught? | Note |
|---|---|---|
| N1 "Who has the authority here?" (2995) | partly | 3285 "who gets to decide this?" is the same question in other words; see K3 for where it breaks. |
| L1 "What kind of act is this" (3008) | no | Never posed as a question; the four kinds of act are scattered over 3290, 3297, 3350, 3354. |
| L2 "What settles it" (3014) | no | "settles" never used. |
| X1 "What is actually being done" (3023) | no | |
| X2 "Where the limit sits" (3030) | no | The limits are listed at 3341 but not as "where the limit sits". |
| J1 "What is the court being asked to do" (3039) | no | |
| J2 "What makes it the court’s to answer — or not" (3045) | no | |
| F1 "What is the federal government’s position" (3053) | no | |
| F2 "Where it lands" (3059) | no | |

### Gate options (4: 2 yes, 2 partly)

| Option | Taught? | Where, or what is missing |
|---|---|---|
| "Congress" / "the branch that writes the law" (2996) | yes | 3290. |
| "The President and the agencies" / "the branch that carries it out" (2998) | yes | 3291; "agencies" undefined. |
| "The courts" / "the branch that says what it means" (3000) | partly | 3292; "says what it means" fits statute interpretation, not striking down a law or protecting trial rights. |
| "The states, or nobody" / "outside the federal government entirely" (3002) | partly | 3293, 3301; "or nobody" is a hint; the sub-label contradicts `preempted` and `concurrent`. |

### Congress steps (L1 4 options; L2 5 options)

| Option | Taught? | Where, or what is missing |
|---|---|---|
| L1 "Writing a rule that binds the whole country" (3009) | yes | 3290 "writes the law". |
| L1 "Deciding what gets funded" (3010) | yes | 3297 "Spending needs an appropriation." (who is not said until 3352). |
| L1 "Approving a person or an agreement the President proposes" (3011) | yes | 3350, 3351. |
| L1 "Removing a federal official for misconduct" (3012) | yes | 3354. |
| L2 "The power is one of those listed in Article I" (3015) | yes | 3290; no list is given. |
| L2 "No listed power reaches it, or a right forbids it" (3016) | partly | Both halves in different cards, never as one reason. |
| L2 "Only Congress can appropriate money from the Treasury" (3017) | partly | "appropriation" 3297, unexplained; "Treasury" and "only Congress" absent. |
| L2 "The Senate must consent — two-thirds for a treaty" (3018) | yes | 3351. |
| L2 "The House brings the charge; the Senate tries it" (3019) | yes | 3354. |

### President steps (X1 5; X2 5)

| Option | Taught? | Where, or what is missing |
|---|---|---|
| X1 "Applying a law Congress already passed" (3024) | yes | 3291, 3340. |
| X1 "Directing the armed forces" (3025) | yes | 3340. |
| X1 "Dealing with another country" (3026) | yes | 3340. |
| X1 "Acting on a bill, or on a federal conviction" (3027) | partly | 3339 "signs or vetoes bills, and pardons federal offences"; the option names neither act. |
| X1 "Creating an obligation Congress never authorised" (3028) | no | Only in err claim 1 feedback (3167). |
| X2 "The agency may go no further than the statute allows" (3031) | yes | 3291, 3341. |
| X2 "Only Congress declares war and funds it" (3032) | yes | 3341. |
| X2 "A treaty binds nothing until the Senate consents" (3033) | yes | 3351. |
| X2 "A veto falls to two-thirds of both houses; a pardon reaches federal offences only" (3034) | yes | 3341. |
| X2 "It needs legislation, and an order cannot substitute" (3035) | no | "executive order" is mentioned once (3299), never explained. |

### Courts steps (J1 4; J2 4)

| Option | Taught? | Where, or what is missing |
|---|---|---|
| J1 "Measure a law against the Constitution" (3040) | yes | 3345 "refuse to apply a statute conflicting with the Constitution". |
| J1 "Protect someone’s rights inside a proceeding" (3041) | partly | 3363 names the rights, not the court's role. |
| J1 "Settle what a statute’s words cover" (3042) | yes | 3292 "say what it means". |
| J1 "Decide which policy would be wiser" (3043) | partly | 3346 states the inverse ("cannot strike down a law for being unwise"). |
| J2 "Someone actually injured brought a live case" (3046) | yes | 3292, 3346. |
| J2 "The Constitution guarantees the procedure itself" (3047) | partly | 3363 (rights); "procedure" absent. |
| J2 "Text and precedent decide it, not preference" (3048) | no | "precedent" is in no card. |
| J2 "Nothing legal is in dispute — it belongs to the elected branches" (3049) | no | Not taught. |

### States steps (F1 4; F2 5)

| Option | Taught? | Where, or what is missing |
|---|---|---|
| F1 "It has no listed power here" (3054) | yes | 3301. |
| F1 "It has authority and has already acted" (3055) | partly | "Where both have authority" 3302; "already acted" absent. |
| F1 "Both have authority, and both may act" (3056) | yes | 3302; no shared power is named in any card. |
| F1 "No government may act — a right protects it" (3057) | yes | 3302. |
| F2 "Reserved to the states — the general police power" (3060) | yes | 3301; "police power" is undefined. |
| F2 "Handed by the state to a city or county" (3061) | no | No card mentions cities or counties. |
| F2 "Federal law controls and the state rule gives way" (3062) | yes | 3302. |
| F2 "The federal rule is a floor a state may exceed" (3063) | yes | 3302. |
| F2 "Neither may act at all" (3064) | yes | 3302. |

Option totals (40): 26 yes, 9 partly, 5 no. Step labels: 0 of 9 taught as questions. The pattern: the option sentences largely restate card facts; what is missing is the question each option answers, which is the part the learner must carry into an unlabelled case.

### Outcome names (name step; term in a card?)

| Outcome (line) | Term used in a card? |
|---|---|
| An enumerated power of Congress (2974) | no ("listed in Article I", 3290) |
| The power of the purse (2975) | no (3297 "Spending needs an appropriation") |
| Senate advice and consent (2976) | no (3297, 3350, 3351 give the content) |
| Impeachment and removal (2977) | yes (3354) |
| Beyond Congress’s reach (2978) | named once at 3430, undefined |
| Executing the law (2979) | yes (3340) |
| Commander in chief (2980) | no ("commands the armed forces", 3340) |
| Foreign affairs and treaties (2981) | content yes (3340, 3351), phrase no |
| Veto and pardon (2982) | yes (3339) |
| Beyond the President’s reach (2983) | named once at 3430, undefined |
| Judicial review (2984) | yes (3345) |
| Trial and due-process rights (2985) | partly (3363 "due process, counsel in a criminal case") |
| Interpreting a statute (2986) | partly (3292 "say what it means"; 3320) |
| A political question, not a legal one (2987) | named once at 3430, undefined |
| Reserved to the states (2988) | yes (3301) |
| Delegated to local government (2989) | no |
| Federal law preempts (2990) | no (3302 "Supremacy Clause") |
| Both may act (2991) | yes (3302) |
| Nobody may act — a protected right (2992) | partly (3302 "neither may act") |

## Under-explained ideas

Each row is an idea the key or a drill depends on that the lesson gives a phrase, a clause or a one-line "tell" when a paragraph and an example is needed. "Says now" quotes the card.

| Idea | What the lesson says now | What a newcomer still would not understand |
|---|---|---|
| Article I and listed powers | "Only powers listed in Article I. Naturalisation is one of them." (3290) | What Article I is, what else is on the list (the card gives one item), how to tell whether a power is listed (the L2 choice `listed` vs `barred` turns on it), and what happens to a power that is not listed. |
| Statute | Used at 3291, 3299, 3341, 3345, 3368; never defined | That a statute is a law written and passed by Congress, and how it differs from a bill, a regulation and an order. |
| Agencies and regulations | "carry it out. May go no further than a statute allows." (3291); "executes the laws through the agencies" (3340) | What an agency is (the office that processes immigration forms is the lesson's own example, 3073), how an agency writes detailed rules without "writing the law", and what "go no further" looks like in a case. |
| Executive order | "an executive order frequently does not [outlive an administration]" (3299) | What it is, what it can and cannot do (it cannot create a tax), why the next President can undo it. The entire `beyondpres` branch depends on it. |
| Veto | "survive a veto that takes two-thirds of both to override" (3297); "signs or vetoes bills" (3339) | What a veto is, what happens to the bill, what happens if the President neither signs nor vetoes (the ten-day rule appears only in S9 fals, 3228). |
| Appropriation and the power of the purse | "Spending needs an appropriation." (3297) | What an appropriation is, who passes it, why refusing to fund a programme stops it, what the Treasury is. |
| Advice and consent; treaties | "Appointments and treaties need the Senate." (3297); "two-thirds of the Senate consents, or they bind nothing." (3351) | What "consent" means, why a treaty needs two-thirds but a judge needs a majority (3202 only), what an executive agreement is (3202 only), why S4 is "Congress" and S8 "President". |
| Impeachment | "The House impeaches; the Senate tries and needs two-thirds to remove." (3354) | That impeaching is accusing, not removing; what it is for; that criminal punishment is separate (3208). Clearest wording is a single drill item's feedback (3112). |
| Judicial review and standing | "a court needs a live case brought by someone actually injured. It cannot advise, cannot rule on a bill in advance" (3346) | Why the rule exists, what "injured" means in law (the S11 stem's "penalised" is the only concrete case), what a ruling does to the statute. |
| Interpreting a statute | "say what it means" (3292); "courts interpreting old text" (3320) | How a court decides what a law's words cover, what "precedent" is, why the judge's own preference is excluded. Courts' most common job has three words of teaching. |
| Political question | "a political question" (3430), in a list | What makes a dispute political rather than legal, an example, and who then decides (voters). |
| Trial rights | "due process, counsel in a criminal case, protection from unreasonable search" (3363) | What the specific rights are (silence, lawyer even if you cannot pay, jury, public trial, speedy trial), which Amendments hold them, what "due process" means. |
| Civil vs criminal proceedings | "Immigration proceedings are civil, not criminal, and several criminal protections ... do not apply there in the same way." (3365) | What civil and criminal mean, why that changes whether a lawyer is provided, and which protections do still apply. The audience most needs this. |
| Reserved powers; general police power | "everything else was reserved to the states by the Tenth Amendment" (3301); "the general police power" (3060) | What is reserved, examples beyond one line (3295), what "police power" means (health, safety, welfare), why the Tenth Amendment is not in the amendments table. |
| Local government | no card | What a city or county is, where its authority comes from, that the state can change it (S16 why only, 3262). |
| Supremacy Clause and preemption | "federal law controls any genuine conflict — the Supremacy Clause" (3302) | What a "genuine conflict" looks like, why the state rule gives way, how to tell Congress "has acted" (F1 `acted`, 3055, is untaught). |
| Shared powers; floor vs ceiling | "Where the federal rule is a floor rather than a ceiling, a state may go further." (3302) | Which powers both governments hold (taxing, courts: S18 why only, 3272), and an example of a floor (the minimum wage is only in S18, 3270). |
| "Applied against the states" | "the rest of the Bill of Rights applied against the states" (3325) | That the Bill of Rights first bound only the federal government, what changed in 1868, and the consequence (a city cannot ban a church). Basis of N1 item 6 and S19. |
| "Nobody": rights bind every government | "The Tenth Amendment, and rights that bind every level." (3293); "where a right is at stake, neither may act" (3302) | What it means for no government to have authority; how that differs from `beyondcong` (Congress may not) and `trialrights` (procedure the government must follow). Three outcomes, one sentence. |
| Checks and balances list | "Courts may void acts of both — Congress and the states may amend the Constitution over them." (3353) | What each arrow means, and what "over them" means. |
| Why the system is slow | "a government that cannot act quickly also cannot be captured quickly." (3298) | What was feared, with a case where slowness protects someone and a case where it fails them. |
| Apportionment and the 1787 compromise | "apportioned by population" (3336); "the central compromise of 1787" (3337) | What apportioned means; what the compromise was (two sentences) and why it still shapes who wins. |
| Articles of Confederation | "no power to tax and no power to regulate trade between the states" (3315) | What that meant in practice (no army pay, states taxing each other's goods), and how each failure became an Article I power. |
| Reconstruction | heading only (3389); option label (3145) | What it was, when it ended, what was done. |
| The 1820 and 1850 compromises | "every compromise reached — 1820, 1850 — bought time" (3388) | What each compromise was about and why it did not hold. |
| Native dispossession | "removed from it by treaty, by purchase and by force" (3387) | The whole story in one sentence: who, when, what happened. |
| Great Depression | "reshaped what Americans expected government to do" (3404) | What happened and which expectations changed (e.g., programmes that exist because of it). |
| Cold War | "containment of the Soviet Union" (3405) | What the Soviet Union was, why containment, how it ended in 1991. |
| September 11 | "the modern event the test asks about" (3406) | What the event was. The card never says. |
| Civil rights movement | "Brown v. Board of Education in 1954, Martin Luther King Jr. ... the Civil Rights Act of 1964 and the Voting Rights Act of 1965" (3405) | What each did; why a 1954 school case belongs to the same story. |
| Dred Scott | "put there in 1868 to overturn the Dred Scott decision, which had held that Black Americans could not be citizens at all." (3421) | When and what the Court decided, and why a court decision needed an amendment to reverse. |
| Bill of Rights vs Constitution | "only one of them is law" (3310) | That the Bill of Rights is the Constitution's first ten amendments and is law; the three-document framing is misleading. |
| What a "right" is (as the key uses it) | "rights" (3293, 3302, 3363) | A concrete list of the rights in play (speech, religion, press, assembly, petition, due process, counsel, search) and which of them the key tests. |

## What a good version of this subject's units would contain

Principles drawn from the evidence above, and from the owner's rules (no size limit; one vocabulary; teach so the learner can apply):
- The key is the spine. Each unit that touches a branch teaches that branch's questions in the exact words the key uses, with a worked case routed through them, before any drill uses them.
- Concept first, name second; the everyday case before "enumerated", "preemption", "advice and consent".
- Exam-fact units (documents, dates, symbols) are labelled as such and tied to the key wherever they truly connect.
- Drills use the words the unit taught; feedback names the card sentence that decides the answer and walks the route.
- Worked example, then partly completed example, then unaided case (the worked-example effect and fading from cognitive load research is the relevant evidence; Rosenshine's "Principles of Instruction" and retrieval practice with feedback say the same).
- One glossary of the course's own words, defined at first use, one name per concept (see the vocabulary map).

### Unit One - Who decides (becomes: the method and the four bins)
- Open with what the reader will be able to do ("read a sentence about the government and say who is acting, who has the authority, and which of 19 things is going on"), and state honestly that Units 2, 4 and 5 are facts to memorise rather than part of this method.
- One card per bin, each two or more paragraphs: what it does, two everyday examples (processing a naturalisation form; a state driver's licence; a labelling rule; a tax), what it cannot do, and the one question that tells you you are in this bin. Define statute, agency, regulation, executive order, chamber, veto, appropriation at first use.
- A separate card on the fourth bin that splits "the states" from "nobody": what it means for a right to stop every government, and which of the key's outcomes (Congress beyond reach, President beyond reach, protected right, trial rights) share that idea and how to tell them apart. Resolve the gate semantics (K3) before writing: either rename the question to "whose action is this?" and say so, or move S2/S10/S12/S14/S17/S18 so the question is true for all of them.
- Two fully worked cases in the key's words, one where the first instinct is wrong, each ending with the 19-outcome name.
- Rewrite n1 items 5 and 6 or move them after the unit that teaches their facts; each feedback line cites the sentence that decides it.

### Unit Two - The founding documents
- State what the reader will do (say which document a claim comes from and what authority it has) and why it matters for the key (Article I, the Tenth and Fourteenth Amendments are the key's authorities).
- Correct "only one of them is law": the Bill of Rights is the Constitution's first ten amendments. Fix N2's options so a careful reader is not marked wrong (U2-2).
- A full card on the Articles of Confederation failures with concrete examples, and a plain-words list of the Article I powers (tax, borrow, regulate trade, set naturalisation rules, coin money, run the mail, declare war, create lower courts), so the L2 decision `listed` has something to be decided against.
- One short card per amendment the key uses: First (each freedom with an example), Fourth to Sixth and Eighth (the trial rights), Tenth (what is reserved and the examples), Fourteenth in three parts (citizenship, due process and equal protection defined, "applied against the states" with the church-permit case).
- Define ratify, unalienable, houses.

### Unit Three - How the branches work (becomes three branch units)
- Congress: four kinds of act, each its own paragraph with an everyday case and the test that settles it (listed power; appropriation; Senate consent, majority for a judge and two-thirds for a treaty; House charges, Senate tries), plus a "beyond reach" case; then composition (House/Senate/435/100) as a separate card. Use L1/L2 wording and show them as questions.
- President and agencies: five things the executive does and five limits (X1/X2), with a case for each; what an agency and a regulation are; what an executive order can and cannot do (the household-fee case); treaty vs executive agreement.
- Courts: judicial review with the live-case rule explained and a walked example; interpreting a statute (the e-bike case, what precedent is); trial rights as a list; political question with the tax-rate example. J1/J2 wording.
- Rewrite the checks list as sentences or a small table ("Branch A does X; branch B can respond by Y; example"), explain "over them", move the Vice President out of a note.
- A worked case per branch walked through the key, then a drill that shows the step options in the key's words.

### Unit Four - Rights, duties and the oath
- Open with what the reader will be able to do ("say who a right protects and which key outcome it triggers") and name the three outcomes it feeds.
- List the trial rights one by one with the Amendment and one example; define civil vs criminal and what changes in immigration proceedings.
- Give the three "a right blocks government" outcomes a decision rule with three contrasting cases (a speech statute by Congress; a trial procedure; a state banning a church).
- Rebuild n4 on one axis (who is protected) and add a separate right-or-duty item set; fix items 2, 4, 6 and the prompt that offers four options for "Everyone, citizens only, or neither?".
- Use one phrase for who is protected and state it in the card, the options and the feedback.
- Keep test administration in a single "About the test" card; say it once.

### Unit Five - The history you are expected to know
- Open with what the test asks and why each era matters; link the Civil War amendments to "persons, not citizens" and to the protected and preempted outcomes.
- Each era: what happened, why, what changed, one cause-and-effect sentence, in two or more paragraphs; define Reconstruction (dates, what was done), the 1820 and 1850 compromises, the Great Depression, the Cold War, Brown, September 11.
- Use identical era names in cards and options; add the missing 1877-1899 slot or say the test skips it.
- Drill items that require using cause-and-effect, not recognising the card sentence; give geography and symbols their own items or cut the card.
- Replace "franchise", "suffrage", "ballot" with one word defined at first use.

### Unit Six - What people get wrong
- One segment per claim: the claim as people say it (a news-style sentence), the key question it skips, the fact that corrects it, and a one-sentence repair to say aloud.
- Map each claim to the key question it ignores, so the drill prompt is answerable; add input (pick the question, pick the fact) so a wrong answer is visible.
- Move claims 6 and 8 to the units that teach them, or teach them here; drop claim 8 as not a misstatement of the system.
- Show one real-world paragraph per claim being made and corrected, to deliver the promise "each correction makes a whole category of news reports readable".

### Unit Seven - Full determination
- Replace the single card with: a walkthrough of the screen (render `determinationIntro`), the nine questions listed by branch in the key's own words, and a rule for choosing the branch that is true for every specimen.
- Three fully worked specimens with the thinking shown (what is being done, who is acting, which branch, which two questions, which name, why the neighbours fail), including one confusable pair (S4 vs S8; S2 vs S19 vs S12).
- Faded practice: first specimen with step 1 supplied, then unaided; shuffle specimen order; repeat easily confused outcomes in a second pass.
- Specimen feedback that walks gate -> step 2 -> step 3 -> name and says why the wrong options fail, in taught words only; no new terms in feedback.
- End with a transfer card: three real-style paragraphs with no stems that narrate the answer, and an instruction on what to look for (who acts, is there a statute, is money involved, is a right in play).
