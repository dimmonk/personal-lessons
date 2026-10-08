# Psychology - comprehension audit

Audited: `public/index.html` lines 688-1101 (data) plus engine lines 3565-3600, 3786-3800, 3900-4180 (how content is shown). Date 2026-10-04. Read as: an adult who has never studied psychology, on a 360px phone, one card at a time. Line numbers are `public/index.html`. Quotes are verbatim except that the source's em dashes and curly apostrophes are written here as `-` and `'`.

Method note: the course is 6 units / 24 cards / 1,798 words (counted from the card HTML). The practice layer is 29 quick-drill items, 6 faulty-claim items, 14 specimens (49 items). The practice scenarios alone are 1,315 words (drill stems 778 + specimen stems 537), and the feedback text is another 1,268 words (drill `w` 467, specimen `why` 312, `fals` 336, err `w` 153). The practice layer is as long as the entire teaching layer and carries most of the explanation.

## Verdict

Psychology does not teach-then-apply. The cards give a definition and a "tell" for each idea, with no complete worked scenario anywhere in 24 cards and no walk through the key, and then the drills and specimens ask the learner to use wording (R1/R2/T1/T2/P1/P2, "proportionate", "shame or inadequacy", "flat, strategic, unbothered") that the cards never introduced. Of 49 practice items, a card-only reader can answer and justify 27; 22 (45%) are WORDING-GAP (13) or UNSUPPORTED (9), and 5 of the 14 specimens cannot be routed from what the cards say. The owner's Unit Two complaint is verified and is the pattern, not an outlier: the course was written around one framework (five questions D1-D5, four dissonance moves, five defence mechanisms) and the key and drills around a different one (D1 gate, then R/T/P steps, with option sets of their own), and nobody reconciled them.

Root causes:
1. Two frameworks, never reconciled: the course promises "five diagnostic questions" and "four moves"; the key asks three different questions and the drills use a third option vocabulary. Only D1 is shared.
2. Compression: each concept gets 40-110 words, one definition, and a discriminating "tell" set in 11.5px mono. The idea that actually separates two outcomes is the smallest text on the card, and there is no example before the label.
3. No bridge to the key: the learner meets R1/R2/T1/T2/P1/P2 and their option text for the first time inside the scored determination. The written intro to the key (`determinationIntro`, line 1066) is never rendered.
4. The key and drills contradict the lessons in places: D1 has no "nothing here" option though Unit One teaches one; T2 says one instance means "not a tactic" though the DARVO card says one exchange is the signature; P2 asks about "challenged or criticized" on specimens that contain no challenge; two drill answers (U5 items 5 and 6) are keyed against the card's own criterion.

---

## Findings by unit

Tags: R1-R9 per the rubric, then HIGH / MED / LOW. "Reader needs" says what would fix it. IDs: W = whole-course / engine, then unit number.

### Whole course and engine (W)

**W1 [R1 · HIGH]** The authored introduction to the key is dead code. `determinationIntro` (lines 1066-1074: "Step 1 ... Steps 2-3 ... Step 4 ... The strip between the scenario and step 1 is a readout, not a control") and `intro` (line 1063) are never read by the engine; `grep -i intro` over lines 3480+ returns nothing. The subject screen also lets a learner press "Run the determination" at any time. So the only orientation to the key a learner can ever see is the single 137-word Unit Six card. Reader needs: a rendered, plain-words explanation of the key on the det screen itself (and a worked example), not only on the last card of a course they may never reach.

**W2 [R2 · HIGH]** Question codes are used as vocabulary but only D1 is ever shown as a question. Verbatim: "D2 exists specifically to stop you from taking one data point and naming a disorder." (941), "that's the point of D2" (774), "D2 satisfied" (798), "D2 fails on both counts" (802), "D2 fails cleanly" (820), "D3: the contradiction between her prior resolution..." (859), "Run D2 before you reach for any label in Lessons 3-5." (942). D2-D5 are never a step in the key (steps are D1, then R1/R2, T1/T2, or P1/P2). The reader is told to "run D2" and cannot find where. Reader needs: either teach the key's real steps by name, or drop the codes.

**W3 [R7 · MED]** The most important sentence on nearly every card is the smallest text on the screen. `.tell` is 11.5px monospace in the accent colour (CSS line 190) against 17.5px serif body (line 181). The discriminators, the actual teaching ("Tell: the stated reason points backward", "Tell: histrionic wants an audience. Narcissistic wants a mirror") live in `.tell` on 13 of 24 cards. On a phone these read as footnotes. Reader needs: the discriminating rule as body text with its own example.

**W4 [R8 · MED]** Nothing in the course ever shows the reader how to use this on their own situation. All practice is tidy third-person vignettes with the evidence pre-selected. There is no "what to look for / what to ask / what you cannot know from here" guidance for a real coworker, partner, or one's own thinking. The closest sentence is in the caveats screen (line 1097: "Watch your own motivated reasoning while using this key"), which sits behind a separate screen.

**W5 [R5 · MED]** Three of the sixteen outcomes have no specimen: `projection`, `notactic`, `hpd` (counted from `PSYCH_SPECIMENS`; the other 13 outcomes are covered, `traits` twice). So the key options for those outcomes (T1 ownfeeling, T1 singlemoment, T2 oneinstance, P1 attention, P2 dramatic) are never exercised on the determination, even though Unit Four teaches histrionic as a full card and Unit Five teaches projection.

**W6 [R3 · MED]** The word "key" means three things: the D1 branch ("decides which key you even need", 924; "D1 routes you to a key", 931), the whole determination ("Running the whole key", 1049), and the subject-screen header "Key 02". Also "diagnostic questions" (919), "determination", "the full sequence" (1051), "tools" (engine blurb: "3 questions narrow 16 tools to one", engine line 3900) for what the course calls patterns / outcomes / labels. Reader needs: one name for the 16 things, one for the procedure.

**W7 [R1 · MED]** The reader never sees the list of what they are learning. The 16 outcome names first appear as the grey "Readout" list on the first specimen (engine 4094-4096). No card says "this course teaches you to tell these 16 things apart: ...". Reader needs: a map at the start of Unit One (three families, sixteen names, one line each).

### Unit One - The diagnostic mindset (lines 916-944, 4 cards, 360 words)

**1.1 [R1 · HIGH]** The course opening is not honest about the questions the key asks. Card 1 (920): "It's a small set of questions about kind, pervasiveness, and function. This course teaches five of them, then drills them." Card 2 is titled "The five diagnostic questions" (922) and lists D1-D5. The key asks 3 questions (engine `detBlurb`: "3 questions narrow 16 tools to one"): D1, then R1+R2, or T1+T2, or P1+P2. D2 "Pervasive and stable, or situational and reactive?" is not asked as a step on any branch; D4 "nearest look-alike" and D5 "what would falsify this read" are never asked (D5 only exists as the post-answer `fals` text). The course never says that the questions it teaches are not the questions the key asks. Reader needs: a card saying "the key asks three questions: (1) what kind of thing... (2) and (3) depend on the branch", with the branch questions listed.

**1.2 [R1 · MED]** Orientation says what goes wrong, not what the reader will be able to do. Card 1 (919): "Most misreads in this territory happen because someone skips straight to a label." Nowhere in Unit One: "by the end you will be able to take a described situation and ...". No map of the six units. The aside shows only "Then: drill: pattern or moment".

**1.3 [R2 · HIGH]** Card 2's table is five abstract phrases with no example for any: "Pervasive and stable, or situational and reactive?" (925), "What need, fear, or contradiction does it resolve?" (926), "reveals the function, not just the behaviour" (926), "keeps the label falsifiable instead of sticky" (928), "decides which key you even need" (924). Undefined: pervasive, situational, reactive, function, contradiction, look-alike, falsify, falsifiable, "sticky", "key". Concept-before-label fails: the labels arrive first and the reader gets no scene to attach them to. Reader needs: for each question, one everyday case and what the answer would be.

**1.4 [R3 · HIGH]** D1's three options are phrased five different ways before the reader reaches the drill. Option 1: "a moment of reasoning" (924), "A mind justifying itself" (710, 763, 934, 859), "reasoning in the moment" (710 sub), "the reasoning / self-justification family" (934), "Reasoning family" (766). Option 3: "a stable way someone is" (924, 712, 763) vs "A stable way someone consistently is" (936) vs "an enduring pattern" (712) vs "the personality-pattern family" (936). "Personality-pattern" leans toward personality disorder, which is the thing Unit One says not to leap to. See the vocabulary map.

**1.5 [R3 · MED]** "pattern" carries four meanings in the first four cards and the drill title. (a) repetition across time: "Classify by pattern, never by a single moment" (918); (b) the third D1 family: "Pattern family" (770); (c) the tactic key's T2 answer "Repeats, escalates, or has a clear before/after arc" (739, id `pattern`); (d) a suffix on outcome names ("Borderline pattern", 703). The U1 drill title "Pattern or moment" (1077) offers a binary but D1 has three options and the drill has four. Also units are called "Unit One" in the UI while the text says "Lesson 2", "Lesson 5", "Lessons 3-5" (934-936, 942, 766, 768).

**1.6 [R4 · HIGH]** No bridge from card to drill. Card 3 (931-938) lists three kinds with a pointer each ("-> the tactics family (Lesson 5)") and then asserts "Conflating the three is the single most common error in casual psychological talk" with no example of the conflation. No case is shown being sorted into any kind. The first time the reader applies D1 is the scored drill.

**1.7 [R5 · HIGH]** The drill and the key disagree about D1, and the lessons teach the drill's version. U1 answer set (763): 'A mind justifying itself','A move in an interaction','A stable way someone is','None of these - a proportionate reaction'. The key's D1 (709-713) has only three options and no "none". Item 5 (773-774: "She's withdrawn and short-tempered this week. She just found out her father is sick.") is keyed 'None of these'. In the key, the two "nothing here" specimens (13 and 14, lines 905-912: "She cried ... once"; "He explains, calmly and specifically ...") must be routed D1 = "A stable way someone is" (`sub:{D1:['pattern'],...}`) even though the passage describes one occurrence. A learner who obeyed Unit One ("one bad night is a moment", 941) will pick a different D1 and be scored wrong on route. The word "proportionate" appears nowhere in the cards except inside "disproportionate" (1039).

**1.8 [R6 · MED]** Feedback in this drill introduces untaught terms and points forward instead of explaining. Item 1 w (766): "watch for this to resurface as dissonance reduction in Lesson 2." Item 2 w (768): "Watch for the reversal that would confirm DARVO in Lesson 5." Item 4 w (772): "Reasoning family, specifically sunk cost." Item 5 w (774): "that's the point of D2" for a question that is about D1. None explains what makes item 2 "a move in an interaction" rather than "a mind justifying itself" (a coworker denying a deadline is also someone justifying themselves).

**1.9 [R9 · HIGH]** D1 is the gate to everything and gets three one-line bullets. A newcomer still would not understand: what the unit of analysis is for each kind (one chain of thought / an exchange between two people / a person across years); what to do when a case could be two kinds (U1 item 2 can be read as either of the first two); or why one case-type is "in the moment" and another is "a move". Two of four cards (card 1, card 4; 160 words) say the same warning (don't label from a single moment) while the three kinds get 94 words and no example.

**1.10 [R7 · LOW]** Card 4 (939-942) and card 1 (918-921) duplicate the same idea; card 4's heading uses "pathologizing" (undefined) and card 3 uses "disorder" and "personality disorder" (936, 938) before any disorder is described.

**1.11 [R8 · MED]** No transfer: no instruction for what to do the next time a real exchange feels manipulative or a person feels "narcissistic". Card 1's note ("If you can't say which question decided it, you've recognised a vibe") tells the reader to name a question, but the questions the card lists (D2-D5) are not the ones the key asks.

### Unit Two - Cognitive dissonance & self-justification (lines 946-970, 5 cards, 359 words)

**2.1 [R3 · HIGH] (the owner's worked complaint, verified)** Card 1 (949-956) lists four moves: "Change the belief" / "Change the behaviour" / "Add a justifying cognition" / "Discredit the source". The next four cards are titled "Confirmation bias" (957), "Motivated reasoning" (960), "Sunk cost / escalation of commitment" (963), "Changing your mind is not a bias" (966). The key's R2 step (722-728) uses a third wording: 'A justification is added; belief and behavior stay the same' / 'New evidence gets scrutinized harder than confirming evidence' / 'Further commitment is justified by what's already been spent' / 'The belief itself updates, without defensiveness' / 'The conclusion was never really in doubt'. The drill options (777) are a fourth: 'Dissonance reduction','Confirmation bias','Motivated reasoning','Sunk cost / escalation','Genuine belief revision'. Where the four moves land: move 1 (change the belief) -> perhaps "Genuine belief revision" but in a different sense of "genuine" (2.3); move 2 (change the behaviour) -> nowhere in any card, drill item, option, or specimen; move 3 (add a justifying cognition) -> R2 'addstory' and the outcome "Cognitive dissonance reduction"; move 4 (discredit the source) -> collides with the Confirmation bias card (2.2). Motivated reasoning and sunk cost are not moves at all. No card says "the next four cards are four things this can look like". Reader needs: one explicit map from the four moves to the five outcomes, in the same words the key and drill use.

**2.2 [R3 · HIGH]** The same observable behaviour is assigned to two outcomes. Move 4 (954): "Discredit the source of the contradicting information". Confirmation bias (958): "disconfirming evidence gets picked apart or waved off as an exception". Drill item 2 (781-782): dismisses a study as "funded by industry" -> Confirmation bias. Specimen 3 (865-867): dismisses analysts as "not understanding the sector" -> confbias. By card 1, both are move 4 = dissonance reduction. No tie-breaker is taught. Reader needs: when the dismissal is a defence of a self-image or a behaviour already done (dissonance) versus a standing habit of lopsided checking (confirmation bias).

**2.3 [R3 · MED]** "genuine" is used in two senses and the card contradicts itself. Card 1 (949): "there are four moves, and only one of them is that [honestly changing your mind]", then lists two moves labelled "genuine" (951, 952). Move 1 is "Change the belief to match the behaviour - genuine, if it happens." In Festinger's own account, adjusting a belief to fit what you already did is the self-persuasion route to relief, not an evidence-driven update; the outcome "Genuine belief revision (not a bias)" (695, 967) means evidence-driven. A reader who takes move 1 as "genuine" has the wrong picture of both.

**2.4 [R2 · HIGH]** Concept after label, and the label is academic. Card 1 opens (949): "Cognitive dissonance (Festinger): the discomfort of holding two contradictory cognitions, and the drive to resolve it." Undefined: cognition, dissonance, "justifying cognition", "dissonance reduction" (first used in the tell, 956, never defined). No everyday case appears before the first use. The heading promises "not just 'hypocrisy'" but never shows a case of hypocrisy that this explains. The first concrete example is in the drill (the vegan sauce, 779).

**2.5 [R9 · HIGH]** The core mechanism is 112 words and four one-line moves. A newcomer still would not understand: why a contradiction produces discomfort that needs relief; what each move would sound like in someone's mouth; which of the four counts as the bias and which is healthy; and how to see from outside which move someone made. Each move needs a scene (e.g. someone who smokes: changes the belief / stops smoking / "I need it for stress" / "those studies are overblown").

**2.6 [R9 · MED]** Confirmation bias (51 words, 957-959) is a definition and a tell. "asymmetric scrutiny" is the only technical term and it is glossed only by "accepted lightly ... picked apart". No example of two pieces of evidence being treated unequally, no description of what equal scrutiny would look like, and nothing about how this differs from motivated reasoning two cards later.

**2.7 [R4 · HIGH]** Confirmation bias versus motivated reasoning is the pair the key actually separates, and the lessons never separate them. The key's R1 (717-721): 'before' keeps only `motivated`; confirmation bias must go through R1 'after' = "Belief or action came first; discomfort followed". Card 3 (961) warns that motivated reasoning is "the easiest thing in the family to confuse with dissonance reduction", the wrong pair. The confirmation-bias card says nothing about timing or discomfort, and specimen 3 (865) has neither. See 2.8.

**2.8 [R5 · MED]** U2 item 6 (789-790: the "data-driven" manager who "quietly stops checking the metric that turned negative") is keyed 'Confirmation bias'. The card defines confirmation bias as lopsided scrutiny ("picked apart or waved off"), not not-looking. The item reads equally as dissonance (self-image "data-driven" against behaviour; move 4, "Discredit the source" -> stop consulting it). The w introduces "selectively stops tracking ... self-image", a concept no card taught. UNSUPPORTED.

**2.9 [R6 · MED]** Most w texts restate the answer: "The conclusion preceded the evidence-gathering." (784); "Updated by external data, stated as such, no defensive move present." (788). They never say why the neighbours are wrong (item 3 also has "taking notes that supported that outcome", which is textbook confirmation bias; why is it not that?).

**2.10 [R4 · HIGH]** No bridge to R1/R2. The unit's tells are the right raw material ("shows up after the behaviour", 956; "asymmetric scrutiny", 958; "starts with the destination already chosen", 962; "points backward", 965; "did the evidence lead to the conclusion, or did the conclusion lead the search", 968) but they are never turned into two questions the reader asks: "when was the conclusion reached?" and "what gave?". The first time those questions appear is as R1 "Timing of the conclusion" and R2 "What gives, to relieve it" in the determination.

**2.11 [R7 · LOW]** Card 4 (964) uses a dangling example: "admitting the first four years were wasted is exactly the discomfort avoided by spending a fifth." There is no earlier "four years"; the reader has not been given the case. Also card 1 depends on card 5: two moves are called "genuine" and genuineness is only explained at the end.

**2.12 [R2 · MED]** Jargon without gloss: "asymmetric scrutiny", "disconfirming evidence" (958), "reverse-engineered" (961), "escalation of commitment" (963), "Festinger" (949), "cognition(s)" (949, 953).

**2.13 [R8 · MED]** The unit never turns the lens on the reader's own reasoning (these are errors of the reader as much as of "someone"), and gives no "what to ask yourself" step.

### Unit Three - The narcissism spectrum (lines 972-992, 4 cards, 277 words)

**3.1 [R3 · HIGH]** The unit frames itself three ways. Title "The narcissism spectrum" (972), first card "Not one dial" (974: "They are three different things"), drill "Where on the spectrum" / "Where does this fall?" (1079). The answers (793) mix degree, type and meta-answers: 'Healthy confidence/self-esteem','Narcissistic traits (non-clinical)','Grandiose narcissistic pattern','Vulnerable narcissistic pattern','Insufficient evidence','Not narcissism at all'. The key has one "nothing here" outcome for this branch ('Traits only - not a disorder', 706); this drill has four. "Narcissistic traits (non-clinical)", "Insufficient evidence", "Not narcissism at all" are never defined or distinguished.

**3.2 [R2 · HIGH]** Card 4 ("The actual clinical criteria, stated plainly", 988-990) is the densest sentence in the unit: "A pervasive pattern, present by early adulthood and across contexts, of: grandiosity, need for excessive admiration, and lack of empathy - typically alongside several of: entitlement, exploitation, envy, arrogance, fantasies of unlimited success, belief in being special." Nine abstract nouns and "present by early adulthood" with no example; "impairing" is bolded as one of "the two words that matter most" (990) and never defined. (The criteria list is a paraphrase; the DSM-5 set is "five of nine", not a fixed triad plus extras.) "stated plainly" is not true.

**3.3 [R3 · HIGH]** The grandiose/vulnerable discriminator is worded four ways and none is the key's. Cards: "the mask cracks outward, as aggression" (984) / "the mask cracks inward, as withdrawal" (987). Key P1 (745-746): 'Shame or inadequacy, defended by outward grandiosity' / 'Same shame, presenting as fragility or quiet resentment'. Unit Four table (999): "Core fear: Being ordinary / unadmired". Drill w and specimen why: "unrecognized specialness turned inward" (804), "organized around unrecognized specialness" (895). The word "shame" is never taught; "mask" is never defined; "fragility" is never taught.

**3.4 [R9 · HIGH]** The idea that makes grandiose and vulnerable the same thing is never said. Grandiose gets 41 words, vulnerable 70. "narcissistic injury" is a parenthetical (983); "still fundamentally organised around the self, still low in empathy for others' independent reality" (986) is the whole explanation of why a quiet, self-pitying person is "narcissistic". A newcomer would not understand why two opposite-looking people share one name. The key's P1 ("Same shame ...") depends on a concept (fragile self-worth defended by inflating or retreating) that no card states.

**3.5 [R4 · HIGH]** Descriptions then placement, no bridge. The reader reads a stereotype, a covert version and a criteria list, and is then asked to sort six cases onto six options. Nothing shows a case being weighed: how many of the three required features it has, whether it spans contexts, and which of "traits", "insufficient evidence", "not narcissism" it lands on (items 2, 4, 6).

**3.6 [R5 · MED]** Drill items overlap and name step codes the unit never taught. Item 6 (805-806: marathon pride called "such a narcissistic thing to say") is keyed 'Not narcissism at all'; item 1 (795-796: proud of promotion) is keyed 'Healthy confidence/self-esteem'. Both are healthy pride; the only difference is that item 6 is a claim about someone, a faulty-claim task dropped into a classification drill (w: "The faulty-claim case."). Item 2 w (798): "D2 satisfied"; item 4 w (802): "D2 fails on both counts: not pervasive, not unprovoked" - a two-part D2 that the course never stated ("Pervasive and stable, or situational and reactive?").

**3.7 [R6 · MED]** Item 2 w (798) introduces "criterion" and "reaction-to-threat" ("the evidence covers only one criterion - admiration-seeking. Empathy, entitlement, and reaction-to-threat aren't shown yet"), a list not matching card 4's (grandiosity, admiration, empathy + several others). Item 3 w (800) uses "Narcissistic injury" and "devaluing" with no explanation of why privately disparaging the winner is "outward" rather than covert.

**3.8 [R2 · MED]** Card 1 definition: "a self-concept organised around being exceptional, requiring external admiration, structurally low in empathy for anyone whose function isn't to supply that admiration" (979). "structurally", "whose function isn't to supply" are not plain English. The sentence is the unit's only definition of narcissism.

**3.9 [R1 · MED]** The unit opens well in plain words ("Confidence, self-esteem, and narcissism get used interchangeably", 975), then drifts to the three-card narcissism subtypes. It never says how this connects to the key: the key has no step separating confidence from self-esteem from narcissism; the pattern branch asks P1/P2 (core fear, response to criticism).

**3.10 [R8 · LOW]** No guidance on what evidence to collect (what a few weeks of watching would reveal about regard for others).

### Unit Four - Look-alikes and false friends (lines 994-1018, 5 cards, 320 words)

**4.1 [R7 · HIGH]** Three new disorders are introduced only as contrasts with a fourth. Cards 1-3 (996-1010) are "Narcissistic vs. borderline pattern", "vs. histrionic", "vs. antisocial". No card says in plain words what borderline, histrionic or antisocial patterns are; each is described by one table column or one paragraph relative to narcissism. 207 words carry three new concepts. A reader whose grasp of narcissism is shaky (Unit Three, 277 words) cannot use a contrast against it. Narcissism gets four cards; the other three get roughly half a card each, but in the key they have equal weight.

**4.2 [R2 · HIGH]** Jargon: "Instrumental - a supply of admiration" (1001), "Idealized, then devalued, then sometimes re-idealized" (1001), "suggestible" (1006), "totalizing absence of empathy" (1009), "impulsivity" (1009), "psychopathy" (1009), "a mirror" (1007: "histrionic wants an audience. Narcissistic wants a mirror"). "Mirror" is never explained, yet it is cited later as a named tell ("The 'mirror, not audience' tell", 818).

**4.3 [R2 · MED]** Cross-subject references to a lesson the reader may never have taken. "This is the psychological equivalent of the political-ideology horseshoe error" (1013); "the same warning the ideology course gives about 'fascist' and 'socialist.'" (1016); specimen 14 why: "This is the horseshoe error" (911). A learner who opened Psychology first has no referent.

**4.4 [R3 · HIGH]** The drill options and outcomes use different names for the same things. Drill (809): 'Narcissistic','Borderline','Histrionic','Antisocial/psychopathic','Not a disorder - a hard moment'. Outcomes (701-706): 'Grandiose narcissistic pattern'/'Vulnerable narcissistic pattern','Borderline pattern','Histrionic pattern','Antisocial pattern / psychopathy','Traits only - not a disorder'. Cards: "Narcissistic vs. borderline pattern" (996). 'Narcissistic' discards the grandiose/vulnerable split Unit Three just taught; "a hard moment" is a third wording of the nothing-here outcome.

**4.5 [R5 · HIGH]** U4 item 1 (811-812) asks the reader to name Borderline from one episode ("Ghosted after two dates ... texts eleven times in an hour, then sends one furious message"). The w itself says "inside one episode". Unit One (918): "Classify by pattern, never by a single moment." Item 5 (819) is a single episode keyed 'Not a disorder - a hard moment'. The difference between item 1 and item 5 is content, not duration, and the cards never teach that rule. Contradicts Units One and Three ("not their behaviour under stress", 990).

**4.6 [R4 · MED]** The Unit Four table rows ("Core fear", "Reaction to conflict", 999-1002) are almost the key's P1 ("Core fear or need being protected") and P2 ("Response when challenged or criticized"), so a partial bridge exists, but only for narcissistic vs borderline; histrionic and antisocial have no "core fear" or "reaction" row, and nowhere does the unit say "these two rows are the two questions the key asks".

**4.7 [R9 · HIGH]** Histrionic (64 words) and antisocial (75 words). Histrionic: two concepts in one clause: "often genuinely warm and suggestible, where narcissism resists influence that doesn't flatter it" (1006). Antisocial and psychopathy are one outcome but described as different things ("Psychopathy adds a more totalizing absence of empathy", 1009). A newcomer still would not understand what a histrionic person does in an ordinary day, or what routine deceit looks like in practice, or why "sociopath" is unclinical (1015) but "psychopathy" is acceptable (psychopathy is also not a DSM diagnosis).

**4.8 [R7 · MED]** Card 1 is a three-column table at 360px. Content width is 320px (`.pane` padding 20px each side, CSS line 41); the first column takes about 80px and the two comparison columns about 100px of text each, so the row "Idealized, then devalued, then sometimes re-idealized" wraps to about four lines. It does not overflow but it is dense, and the table is set in 14.5px sans where the rest of the card is serif.

**4.9 [R6 · MED]** U4 item 1 w (812): "Abandonment terror, rapid escalation, and the swing from self-blame to fury inside one episode is the classic shape." Introduces "classic shape" and "terror" with no card sentence, and leans on the one-episode feature the course says not to rely on.

**4.10 [R8 · LOW]** Card 4 (1012) is the nearest thing to transfer advice: "Diagnose the structure (self-other model, what's feared, what happens under threat)". "self-other model" is jargon and no case shows it being done.

### Unit Five - Manipulation tactics & defense mechanisms (lines 1020-1045, 5 cards, 345 words)

**5.1 [R3 · HIGH]** Projection is taught as a defence mechanism (unconscious, "Everyone does all five sometimes", 1031) but filed in the key under "A move in an interaction ... a specific tactic" (699, 711). The unit never separates a defence mechanism (unconscious, universal) from a tactic (a deliberate move), and the group name ("tactic") plus the unit title ("Manipulation tactics & defense mechanisms") do not say which is which.

**5.2 [R9 · HIGH]** Card 1 (1022-1031) is five one-line definitions (96 words). Only one (projection) is ever scored. Denial, displacement, intellectualization never reappear; rationalization is a second name for Unit Two's "Add a justifying cognition - a permission slip written after the fact" (953) vs "a plausible but false reason, built after the fact" (1027). Projection, a scored outcome and a drill item, gets: "attributing your own unacceptable feeling to someone else" and nothing else. A newcomer would not understand: what it looks like in a sentence; how it differs from an honest accusation; why a feeling would be "unacceptable".

**5.3 [R3 · MED]** "Denial - refusing to register a fact at all" (1025) collides with "Deny" in DARVO (1036) and "denying another person's memory" in gaslighting (1033). Three senses of denying, no distinction.

**5.4 [R5 · HIGH]** DARVO as taught contradicts the key. Card (1037): "All three parts, in that order, in one exchange, is the signature." Key T2 (738-741): 'One instance only' keeps `notactic` alone; DARVO survives only if T2 = 'Repeats, escalates, or has a clear before/after arc'. Specimen 7 (881-884) is one exchange with HR yet requires T2 = pattern. A learner following the card answers T2 = 'One instance only' and is blocked from DARVO.

**5.5 [R5 · HIGH]** U5 item 6 (835-836, "Caught lying about an expense, someone immediately brings up an unrelated mistake ...") is keyed DARVO, but its own w says: "Deny is implicit ... A DARVO-adjacent move - the honest call is 'attack and deflect,' missing an explicit reversal." The card's criterion is all three parts. The keyed answer contradicts the card, and no option 'attack and deflect' exists. UNSUPPORTED.

**5.6 [R5 · MED]** U5 item 5 (833-834, projection) is not a clean case: "Someone who is chronically jealous accuses their partner, unprompted and without evidence, of flirting with a coworker." The card's signature is "attributing your own unacceptable feeling to someone else"; the item shows jealousy producing an accusation, and does not say the accuser's own wish was disowned. It is one accusation, so by T2 and the trap card ("pattern + function, not a single uncomfortable moment", 1043) the card-faithful answer is 'Not a tactic'. UNSUPPORTED.

**5.7 [R9 · MED]** Gaslighting (71 words, 1032-1034): a definition and a tell. The best sentence in the unit ("A single 'that's not what happened' is not gaslighting. Years of it, until you stop trusting your own memory, is.") is set in the 11.5px tell. A newcomer would not understand how to tell honest memory disagreement from gaslighting beyond "repetition + escalation + the functional effect"; there is no scene with dialogue and the target's response.

**5.8 [R9 · MED]** Love-bombing (71 words): asserts "creates dependency" and "an investment called in later" (1039-1040) without showing the mechanism; the legitimate-enthusiasm contrast is a clause.

**5.9 [R2 · MED]** "Named and studied by psychologist Jennifer Freyd" (1036) is name-dropping with no use; "Festinger" in Unit Two likewise. "functional effect" (1034), "reality-distortion" (1023).

**5.10 [R4 · HIGH]** No walk through the tactic branch. T1's five options (732-736) never sit side by side on any card, and "What the move is doing" is never framed as a question. The unit hands over four tactic definitions and a trap card, and then the drill asks for five-way discrimination.

**5.11 [R6 · MED]** U5 item 5 w (834): "reads more as their own feeling than as a report about the partner" is a hedge, not a route; item 1 w (826) labels "twisting my words" as "Deny", a stretch (he does not deny saying it).

**5.12 [R8 · MED]** "The trap: everything becomes manipulation" (1041-1043) is the best transfer-adjacent card but gives no procedure for a real situation (what to note over weeks, what to ask, when it is worth getting help). The safety note lives on the caveats screen (1099).

### Unit Six - Mixed identification drill (lines 1047-1056, 1 card, 137 words, then 14 specimens)

**6.1 [R1 · HIGH]** The only orientation to the key is one card. It says (1051) "answer D1 (the domain), then the two questions specific to that domain, then name it", but does not list the six branch questions, their codes, or what the options look like. The reader sees "R1 · Timing of the conclusion" (engine 4056) for the first time inside a scored attempt. "D1 (the domain)" adds yet another noun for the first question.

**6.2 [R4 · HIGH]** No worked specimen. The unit explains scoring ("Your name and your route are counted separately", 1053), not method. There is no case walked through D1 -> R1 -> R2 -> name with the passage evidence for each answer.

**6.3 [R5 · HIGH]** The key steps' wording was never taught. Of 7 step labels, 1 was taught (D1); of 30 options, 14 were taught (near-verbatim), 12 partly, 4 not at all ('Shame or inadequacy ...', 'Same shame ...', 'Flat, strategic, unbothered', 'A normal, proportionate reaction'). See Key-wording coverage.

**6.4 [R5 · HIGH]** P2 asks about "Response when challenged or criticized" (752) but specimens 9, 12 and 13 contain no challenge or criticism (lines 889, 901, 905), so the option the key wants ('rage', 'flat', 'proportionate') is not observable in the passage. Specimen 9 has no rage ("it's always because the team executed poorly"); specimen 12 has "He doesn't seem angry" in response to an unreturned favour; specimen 13 says "She cried at her coworker's small mistake", and the key wants 'A normal, proportionate reaction' for crying at a small mistake. The reader must back-solve from the outcome they already guessed.

**6.5 [R5 · MED]** Specimens 13 and 14 are routed D1 = 'A stable way someone is' (906, 910) though each passage is one event. This contradicts Unit One (see 1.7). The only way a card-faithful reader reaches 'Traits only - not a disorder' is by an answer Unit One taught them is wrong.

**6.6 [R6 · HIGH]** Route is scored but never explained per step. The wrong-route screen (engine 4161-4165) prints "Step R1 wanted [option text]" and then the specimen `why`, which explains the name, not the steps. Example: specimen 3 `why` (867) explains scrutiny but not why R1 is 'after' (Belief or action came first; discomfort followed), which the passage does not show. `why` also leaks untaught terms: "D3" (859), "splitting" (899), "horseshoe error" (911), "instrumental warmth" (903).

**6.7 [R3 · MED]** The nothing-here outcome has six wordings across the app: "Traits only - not a disorder" (706), "Insufficient evidence" (793), "Not narcissism at all" (793), "Not a disorder - a hard moment" (809), "None of these - a proportionate reaction" (763), and the Unit Six card's "there isn't enough here to name a pattern at all" (1054). Plus "refuse the label" (907) and "withhold the label" (912).

**6.8 [R7 · MED]** Jump from five single-family drills to the full 16-outcome, 3-branch key with no intermediate (e.g. one branch with a worked case).

**6.9 [R8 · MED]** The key is only ever exercised on pre-digested vignettes; "a label you cannot derive from the questions will not survive an unfamiliar situation" (1053) is asserted but the learner is never given an unfamiliar one or told what to do when information is missing (the real-life version of the "traps").

---

## Learner simulation

Rule used: a reader who has read only the cards before the item (cards of earlier units, plus earlier cards of the same unit; drills come after their unit's cards) can answer AND justify using only card sentences.
SUPPORTED = a card sentence licenses it (near-verbatim or a close paraphrase). WORDING-GAP = the idea was taught, but under different words, or only by inference, or a competing card sentence licenses another answer. UNSUPPORTED = never taught, or the keyed answer contradicts the card. Specimen routes are checked step by step; a specimen is SUPPORTED only if every step is, WORDING-GAP if the worst step is a gap, UNSUPPORTED if any step is.

### Unit One drill: Pattern or moment (U1_DRILL, lines 764-775). Cards read: Unit One only.

| # | Item | Verdict | Licensing card sentence or what is missing |
|---|---|---|---|
| 1 | "I know I said I'd never date someone who does that again, but he's different" (765) -> A mind justifying itself | WORDING-GAP | Card 3 gives only the label: "A mind justifying itself -> the reasoning / self-justification family (Lesson 2)" (934). Card 4: "Everyone rationalizes sometimes." (940). No card describes what a mind justifying itself sounds like; answerable only by matching the option's plain words. |
| 2 | Coworker denies the deadline, then calls you disorganised (767) -> A move in an interaction | WORDING-GAP | Card 3: "A move in an interaction -> the tactics family (Lesson 5)" (935). No description of a "move". The coworker is also "justifying" themselves, so option 1 is equally plausible; no tie-breaker. w points forward to DARVO and Lesson 5. |
| 3 | "misunderstood genius" for ten years (769) -> A stable way someone is | SUPPORTED | "The same shape for five years, in every relationship, is a pattern." (941); "A stable way someone consistently is" (936). |
| 4 | "four years into this degree, I can't switch majors" (771) -> A mind justifying itself | WORDING-GAP | Same as item 1. w names "sunk cost", untaught until Unit Two card 4. |
| 5 | Withdrawn and short-tempered, father is sick (773) -> None of these - a proportionate reaction | WORDING-GAP | The idea is taught ("Separates a trait or disorder from an ordinary bad day", 925; "One bad night is a moment", 941). The option 'None of these - a proportionate reaction' is not among D1's three options as taught (924, 934-936) and "proportionate" is never taught. A reader following card 2 ("a moment of reasoning") could pick option 1. |

Tally: SUPPORTED 1, WORDING-GAP 4, UNSUPPORTED 0.

### Unit Two drill: Which distortion (U2_DRILL, 778-791). Cards read: Units One-Two.

| # | Item | Verdict | Licensing card sentence or what is missing |
|---|---|---|---|
| 1 | Vegan: "I already told everyone I was vegan, so I'm not going to make a big deal ..." (779) -> Dissonance reduction | SUPPORTED | "Add a justifying cognition without changing either - a permission slip written after the fact." (953). w adds "minimizing", an untaught word. Neighbour sunk cost ("already told everyone") is not excluded by any sentence. |
| 2 | Three studies read closely, one dismissed as "funded by industry" (781) -> Confirmation bias | WORDING-GAP | "asymmetric scrutiny ... disconfirming evidence gets picked apart or waved off" (958) licenses it; but move 4 "Discredit the source of the contradicting information" (954) licenses dissonance reduction equally. No tie-breaker taught. |
| 3 | Decided to promote her friend before the interviews (783) -> Motivated reasoning | SUPPORTED | "The conclusion is fixed before the reasoning starts" (961); "sometimes before any specific behaviour has even happened" (962). |
| 4 | "two years and forty thousand dollars ... we can't stop now" (785) -> Sunk cost / escalation | SUPPORTED | "the stated reason points backward ... not forward" (965); "by appeal to what's already been spent" (964). |
| 5 | "Turnout data ... changed my mind, even though I really wanted it to work" (787) -> Genuine belief revision | SUPPORTED | "updates a belief because the evidence genuinely warranted it" (967). |
| 6 | "Data-driven" manager quietly stops checking the negative metric (789) -> Confirmation bias | UNSUPPORTED | Card defines confirmation bias as lopsided scrutiny, "picked apart or waved off" (958), not not-looking. The case equally fits move 4 / dissonance (self-image vs behaviour). w introduces "selectively stops tracking" and "self-image", never taught. |

Tally: SUPPORTED 4, WORDING-GAP 1, UNSUPPORTED 1.

### Unit Three drill: Where on the spectrum (U3_DRILL, 794-807). Cards read: Units One-Three.

| # | Item | Verdict | Licensing card sentence or what is missing |
|---|---|---|---|
| 1 | Proud of promotion, thanks helpers, happy for colleague (795) -> Healthy confidence/self-esteem | SUPPORTED | "Self-esteem ... Compatible with genuine warmth and real empathy." (978); "what happens to the person's regard for other people" (981). |
| 2 | Redirects every conversation to own achievements within ninety seconds, for as long as anyone's known him (797) -> Narcissistic traits (non-clinical) | WORDING-GAP | "Most people show two or three of these sometimes. That is not the disorder." (990) points at it. The label 'Narcissistic traits (non-clinical)' is never taught and competes with 'Insufficient evidence' and 'Not narcissism at all'. w's "reaction-to-threat" is not in card 4's list. |
| 3 | Passed over for a role, says the company "isn't ready for someone like him" (799) -> Grandiose | WORDING-GAP | "reacts to criticism with contempt or rage (narcissistic injury)" (983); "the mask cracks outward, as aggression toward whoever threatened it" (984). The passage is private disparagement, which also fits "covert ... chronically feels under-appreciated and wronged" (986). The outward/inward test is not operational. |
| 4 | New employee snaps in first stressful week, apologises (801) -> Insufficient evidence | WORDING-GAP | "not their behaviour under stress, threat, or grief" (990). No card says when to answer "Insufficient evidence" rather than "Not narcissism at all" or "traits". |
| 5 | Never raises voice, fifteen years quietly certain nobody appreciated him, colder toward those doing better (803) -> Vulnerable | SUPPORTED | "covert, hypersensitive to any perceived slight, chronically feels under-appreciated and wronged" (986); "withdrawal, self-pity, and quiet resentment" (987). |
| 6 | "That's such a narcissistic thing to say" about marathon pride (805) -> Not narcissism at all | UNSUPPORTED | Nothing separates this from item 1's healthy confidence; it is a claim about someone (a faulty-claim task), and "Not narcissism at all" is never defined. |

Tally: SUPPORTED 2, WORDING-GAP 3, UNSUPPORTED 1.

### Unit Four drill: Which pattern (U4_DRILL, 810-821). Cards read: Units One-Four.

| # | Item | Verdict | Licensing card sentence or what is missing |
|---|---|---|---|
| 1 | Ghosted after two dates, spirals, eleven texts, one furious message (811) -> Borderline | WORDING-GAP | Table: "Panic, frantic repair, or sudden devaluation" (1002), "Being abandoned" (999), "'don't leave me' pulls toward borderline" (1004). But it is one episode, and "Classify by pattern, never by a single moment" (918). Two rules compete. |
| 2 | Salesman lies fluidly about safety at every job, "that's just business" (813) -> Antisocial/psychopathic | SUPPORTED | "disregard for rules and others' rights - impulsivity, routine deceit, no remorse for concrete harm" (1009). |
| 3 | Interrupts every meeting, dresses dramatically, delighted by any attention (815) -> Histrionic | SUPPORTED | "Histrionic is about being noticed ... theatrical in the moment" (1006); "histrionic wants an audience" (1007). |
| 4 | Warm while being praised, cold for days when partner is praised (817) -> Narcissistic | SUPPORTED | "narcissistic devalues whoever now has it" (1007); "Instrumental - a supply of admiration" (1001). |
| 5 | Snapped after an awful week, apologised, never before or since (819) -> Not a disorder - a hard moment | SUPPORTED | "One bad night is a moment." (941); "Unpleasantness is not a diagnosis" (1012). |

Tally: SUPPORTED 4, WORDING-GAP 1, UNSUPPORTED 0.

### Unit Five drill: Name the tactic (U5_DRILL, 824-839). Cards read: Units One-Five.

| # | Item | Verdict | Licensing card sentence or what is missing |
|---|---|---|---|
| 1 | "you're twisting my words like you always do" -> she apologises (825) -> DARVO | SUPPORTED | "deny the act happened, attack the accuser's credibility, reframe the accuser as the real aggressor" (1036); "All three parts, in that order, in one exchange" (1037). (w calls "twisting my words" a Deny, which is a stretch.) |
| 2 | Day three "not like anyone else", month two "used to be more fun" (827) -> Love-bombing / devaluation | SUPPORTED | "Rapid, intense idealization ... disproportionate ... followed by withdrawal or criticism once the attachment is secured" (1039). |
| 3 | Roommate forgets rent, says "I don't know why you're being so aggressive" (829) -> Not a tactic | SUPPORTED | "Most defensiveness in an argument is not a tactic." (1042); DARVO needs "All three parts" (1037). |
| 4 | Third year running insists it never happened, she checks her phone (831) -> Gaslighting | SUPPORTED | "repetition + escalation + the functional effect that the other person starts pre-emptively doubting themselves" (1034). |
| 5 | Chronically jealous partner accuses of flirting with no evidence (833) -> Projection | UNSUPPORTED | Card: "attributing your own unacceptable feeling to someone else" (1026). The item does not show an owned-then-disowned feeling, and it is one accusation; the card's own rule ("pattern + function, not a single uncomfortable moment", 1043; T2 for projection requires a pattern) routes to 'Not a tactic'. |
| 6 | Caught lying about expense, raises accuser's old unrelated mistake (835) -> DARVO | UNSUPPORTED | Card: "All three parts, in that order" (1037). The w itself says "missing an explicit reversal" and "the honest call is 'attack and deflect'" (836), an option that does not exist. Keyed against the card. |
| 7 | Friend cancels once, apologises, reschedules (837) -> Not a tactic | SUPPORTED | "A single 'that's not what happened' is not gaslighting." (1034); "Most disagreement is not gaslighting." (1042). |

Tally: SUPPORTED 5, WORDING-GAP 0, UNSUPPORTED 2.

### Faulty claims (PSYCH_ERR, 842-854). Cards read: Units One-Five. Note: not part of any unit; reached only from the subject screen's "Faulty claims" tile, shown as "unscored" (engine 3869). The prompt (engine 4022) says "Name which diagnostic question the claim fails to engage"; none of the w texts names a question.

| # | Claim | Verdict | Licensing card sentence or what is missing |
|---|---|---|---|
| E1 | "He disagreed with my version of events, that's such gaslighting." (842) | SUPPORTED | "not a single instance of being wrong, and not ordinary disagreement" (1033). |
| E2 | "She's a total narcissist, she posted a selfie." (844) | SUPPORTED | "One boastful moment becomes 'total narcissist.'" (919); "pervasive and impairing" (990). w's "Category error" is jargon. |
| E3 | "That's literally DARVO" about someone who calmly explained their side after being wrongly accused (846) | WORDING-GAP | Missing attack/reverse is licensed (1037). But the person did "deny the act"; the card never says the denial must be false for DARVO. w relies on "wrongly accused" without that rule. |
| E4 | "Everyone has narcissistic traits, so the word doesn't mean anything." (848) | SUPPORTED | "Most people show two or three of these sometimes. That is not the disorder." (990). (w's "pervasive/impairing distinction": "impairing" undefined.) |
| E5 | "My coworker is a sociopath" - one blunt email (850) | SUPPORTED | "'sociopath' (not a clinical term)" (1015); "disregard for rules and others' rights" (1009); one data point (941). |
| E6 | "He love-bombed me" - two years of consistent affection (852) | SUPPORTED | "disproportionate to how long or how well the person is actually known" (1039); "Genuine early enthusiasm is common" (1040). |

Tally: SUPPORTED 5, WORDING-GAP 1, UNSUPPORTED 0.

### Specimens / full determination (PSYCH_SPECIMENS, 856-913). Cards read: all of Units One-Six.

Per-step route verdicts (S = SUPPORTED, G = WORDING-GAP, U = UNSUPPORTED). "Option" is the key's option text the reader must pick.

| # | Specimen (outcome) | D1 | Step A | Step B | Overall | Reason |
|---|---|---|---|---|---|---|
| 1 | "this time really is different" (dissonance) | S | R1 'after' S | R2 'addstory' S | SUPPORTED | R1: "discomfort that arrives after a behaviour" (962); R2: "Add a justifying cognition ... permission slip" (953). why uses "D3" (859), not a step. |
| 2 | "already decided to invest before he asked anyone" (motivated) | S | R1 'before' S | R2 'fixed' G | WORDING-GAP | R1 near-verbatim (961). R2 'The conclusion was never really in doubt' vs "starts with the destination already chosen" (962); the R2 label "What gives, to relieve it" does not fit and R2 repeats R1. Passage also fits confirmation bias ("listening for agreement"). |
| 3 | six analysts back her thesis, two dismissed (confbias) | S | R1 'after' U | R2 'scrutiny' S | UNSUPPORTED | Nothing links confirmation bias to "Belief or action came first; discomfort followed"; the passage has no timing; 'before' is as defensible ("her thesis" came first) and would make the route wrong. |
| 4 | PhD, "can't have wasted three years" (sunkcost) | S | R1 'after' S | R2 'backward' S | SUPPORTED | "admitting the first four years were wasted is exactly the discomfort avoided" (964); "by what's already been spent" (964). |
| 5 | plant ran the numbers, "he was the first to say so" (revision) | S | R1 'evidence' S | R2 'updates' S | SUPPORTED | "updates a belief because the evidence genuinely warranted it" (967). |
| 6 | "it never happened ... she now records conversations" (gaslight) | S | T1 'denyreality' S | T2 'pattern' S | SUPPORTED | "denying another person's memory, perception, or feelings" (1033); "repetition + escalation" (1034). T2 label "How much evidence do you have" is never framed. |
| 7 | HR meeting, lied on expense report (darvo) | S | T1 'denyattackreverse' S | T2 'pattern' U | UNSUPPORTED | T1 verbatim from card (1036). T2: card says "in one exchange" (1037); key says one instance -> 'Not a tactic'. |
| 8 | soulmate in month one, "used to be more fun" by month three (lovebomb) | S | T1 'idealizewithdraw' S | T2 'pattern' S | SUPPORTED | "followed by withdrawal or criticism once the attachment is secured" (1039). |
| 9 | "never once, in twenty years, said 'I was wrong'" (narc_grand) | S | P1 'shame_out' G | P2 'rage' G | WORDING-GAP | P1: "shame or inadequacy" never taught; Unit Four says "Core fear: Being ordinary / unadmired" (999); "overt" (983). P2: "contempt or rage" taught (983) but the passage has no critic or rage. |
| 10 | "mental ledger for a decade ... stopped speaking to three" (narc_vuln) | S | P1 'shame_in' G | P2 'withdraw' S | WORDING-GAP | P1 "Same shame" untaught, "fragility" untaught; "quiet resentment" taught (987). P2 matches "withdrawal, self-pity, and quiet resentment" (987). |
| 11 | calls nonstop, "I'm the worst" / "you clearly don't care" (bpd) | S | P1 'abandonment' S | P2 'panic' S | SUPPORTED | "Being abandoned" (999); "Panic, frantic repair, or sudden devaluation" (1002). why uses "splitting", untaught (899). |
| 12 | warm, helpful, then mentions your private confidence, "entertained" (aspd) | G | P1 'norule' G | P2 'flat' U | UNSUPPORTED | Passage shows no deceit, rule-breaking or impulsivity (the card's markers, 1009). P2 'Flat, strategic, unbothered' is never taught; no challenge in the passage. D1 evidence of pervasiveness thin ("he'll"). |
| 13 | "She cried ... once"; called "obviously borderline" (traits) | U | P1 'normal' G | P2 'proportionate' U | UNSUPPORTED | One event, yet the key wants D1 = 'A stable way someone is' (906); contradicts "never by a single moment" (918). "proportionate" untaught, and crying at a small mistake reads as disproportionate. |
| 14 | calm, specific rebuttal, called "defensive" (traits) | U | P1 'normal' G | P2 'proportionate' G | UNSUPPORTED | One thread, D1 = 'A stable way someone is' (910) per the key. why uses "horseshoe error" (911), an Ideology-subject concept. |

Specimen tally: SUPPORTED 6 (1, 4, 5, 6, 8, 11), WORDING-GAP 3 (2, 9, 10), UNSUPPORTED 5 (3, 7, 12, 13, 14).
Step tally (42 route steps): SUPPORTED 27, WORDING-GAP 9, UNSUPPORTED 6. Naming step: all names are findable except 'Traits only - not a disorder' (706), which the cards never name (nearest: "Most people show two or three of these sometimes", 990).

### Totals

| Set | Items | SUPPORTED | WORDING-GAP | UNSUPPORTED |
|---|---|---|---|---|
| U1 drill | 5 | 1 | 4 | 0 |
| U2 drill | 6 | 4 | 1 | 1 |
| U3 drill | 6 | 2 | 3 | 1 |
| U4 drill | 5 | 4 | 1 | 0 |
| U5 drill | 7 | 5 | 0 | 2 |
| Faulty claims | 6 | 5 | 1 | 0 |
| Specimens | 14 | 6 | 3 | 5 |
| **All practice** | **49** | **27** | **13** | **9** |

Not answerable from the cards (WORDING-GAP + UNSUPPORTED): 22 of 49 (45%). The determination, the only place the key is exercised, is the weakest: 8 of 14 specimens are not fully supported. The best-aligned sets are the Unit Four drill, the Unit Five drill apart from items 5 and 6, and the faulty claims.

---

## Vocabulary map

One concept, every way it is named or described. Line numbers are `public/index.html`.

| Concept | Variants, verbatim | Where |
|---|---|---|
| The first question (D1) | "What kind of thing is this?" / "What kind of thing is this (D1)?" / "the domain" / "Step 1 - is this a moment of reasoning, a move in an interaction, or a stable pattern?" | 709, 924, 1077, 1051, 1069 (dead) |
| D1 option 1 | "A mind justifying itself" / "reasoning in the moment" / "a moment of reasoning" / "the reasoning / self-justification family" / "Reasoning family" / outcome group `reasoning` | 710, 763, 934, 924, 766 |
| D1 option 2 | "A move in an interaction" / "a specific tactic" / "the tactics family" / "Tactics family" / "Manipulation tactics" / "manipulation-tactics section" / "Name the tactic" | 711, 935, 768, 1020, 1099, 1081 |
| D1 option 3 | "A stable way someone is" / "A stable way someone consistently is" / "an enduring pattern" / "the personality-pattern family" / "Pattern family" / "a stable pattern" | 712, 936, 770, 1069 |
| D1 option 4 (drill only) | "None of these - a proportionate reaction" (not in the key's D1) | 763, 774 |
| "pattern" | repetition over time ("Classify by pattern, never by a single moment"); the third family; T2 answer "Repeats, escalates, or has a clear before/after arc"; suffix ("Borderline pattern"); drill title "Pattern or moment" | 918, 936, 739, 703, 1077 |
| The procedure | "diagnostic questions" / "five diagnostic questions" / "a key" / "which key you even need" / "the whole key" / "the full sequence" / "determination" / "the diagnostic key" / "Key 02" / "3 questions narrow 16 tools to one" | 919, 922, 924, 1049, 1051, 1066, engine 3802, 3900 |
| Unit vs lesson | "Unit One" (UI tag) vs "Lesson 2", "Lesson 5", "Lessons 3-4", "Lessons 3-5" | 916-1047 vs 766, 768, 934-936, 942 |
| Pervasiveness (D2) | "Pervasive and stable, or situational and reactive?" / "pervasive - across time, across relationships, across contexts" / "pervasive and impairing" / "Pervasiveness, early onset, and impairment" / "pervasive/impairing distinction" / "not pervasive, not unprovoked" / T2 "How much evidence do you have" | 925, 941, 990, 1093, 849, 802, 738 |
| What a case looks like when it is nothing | "Traits only - not a disorder" / "Insufficient evidence" / "Not narcissism at all" / "Narcissistic traits (non-clinical)" / "Not a disorder - a hard moment" / "None of these - a proportionate reaction" / "Not a tactic" / "there isn't enough here to name a pattern at all" / "refuse the label" / "withhold the label" | 706, 793, 793, 793, 809, 763, 700, 1054, 907, 912 |
| Dissonance | outcome "Cognitive dissonance reduction" / option "Dissonance reduction" / unit title "Cognitive dissonance & self-justification" / card "The mechanism, not just 'hypocrisy'" / "Cognitive dissonance (Festinger): the discomfort of holding two contradictory cognitions" / R2 "A justification is added; belief and behavior stay the same" / move "Add a justifying cognition without changing either - a permission slip written after the fact" / "Rationalization - a plausible but false reason, built after the fact" / w "resolved by minimizing" / specimen "exempting this instance" | 691, 777, 946, 948, 949, 723, 953, 1027, 780, 859 |
| The four dissonance moves vs what follows | "Change the belief" / "Change the behaviour" / "Add a justifying cognition" / "Discredit the source" vs cards "Confirmation bias" / "Motivated reasoning" / "Sunk cost / escalation of commitment" / "Changing your mind is not a bias" vs R2 options (five) vs drill options (five) | 951-954 vs 957-966 vs 723-727 vs 777 |
| Confirmation bias | "asymmetric scrutiny" / "accepted lightly ... picked apart or waved off as an exception" / "New evidence gets scrutinized harder than confirming evidence" / "confirming evidence sails through ... a standard never applied evenly" / "Unequal scrutiny" / "Selectively stops tracking the metric" / move 4 "Discredit the source" | 958, 958, 724, 782, 867, 790, 954 |
| Motivated reasoning | "The conclusion is fixed before the reasoning starts" / R1 "Conclusion fixed before the reasoning began" / R2 "The conclusion was never really in doubt" / "starts with the destination already chosen" / "The conclusion preceded the evidence-gathering" / "decision-before-reasoning timing" / "reverse-engineered" | 961, 718, 727, 962, 784, 863, 961 |
| Timing (R1) | "Timing of the conclusion" / "shows up after the behaviour, as a repair job. The decision came first; the story came second" / "Belief or action came first; discomfort followed" / "responds to discomfort that arrives after a behaviour" | 717, 956, 719, 962 |
| Genuine revision | outcome "Genuine belief revision (not a bias)" / "Changing your mind is not a bias" / R1 "Reasoning is honestly responding to new evidence" / R2 "The belief itself updates, without defensiveness" / move 1 "Change the belief to match the behaviour - genuine, if it happens" / "reasoning working correctly" | 695, 966, 720, 726, 951, 967 |
| Gaslighting | T1 "Denying the other person's memory or perception, repeatedly" / card "denying another person's memory, perception, or feelings in order to make them distrust their own judgment" / "repetition + escalation + the functional effect" / w "flat factual denial rather than a memory disagreement" / err "make someone doubt their own judgment generally" | 732, 1033, 1034, 832, 843 |
| DARVO | T1 "Deny the act, attack the accuser, reverse victim and offender" / card "deny the act happened, attack the accuser's credibility, reframe the accuser as the real aggressor" / "All three parts, in that order, in one exchange" / w "Deny is implicit ... the honest call is 'attack and deflect'" | 733, 1036, 1037, 836 |
| Love-bombing | outcome "Love-bombing -> devaluation" / option "Love-bombing / devaluation" / T1 "Fast idealization now, conditional withdrawal later" / card "followed by withdrawal or criticism once the attachment is secured" / w "conditional withdrawal once dependency was established" | 698, 823, 734, 1039, 828 |
| Projection | T1 "Placing an unacceptable feeling of their own onto the other person" / card "attributing your own unacceptable feeling to someone else" / w "reads more as their own feeling than as a report about the partner"; filed under "tactic" but taught under "defense mechanisms" | 735, 1026, 834, 699, 1022 |
| Grandiose vs vulnerable | "the mask cracks outward" / "the mask cracks inward" / P1 "Shame or inadequacy, defended by outward grandiosity" / P1 "Same shame, presenting as fragility or quiet resentment" / "Core fear: Being ordinary / unadmired" / "unrecognized specialness turned inward" / "belief in being special" / "being exceptional" | 984, 987, 745, 746, 999, 804, 989, 979 |
| Borderline | outcome "Borderline pattern" / option "Borderline" / P1 "Terror of abandonment" / table "Being abandoned" / why "Abandonment-driven, splitting" | 703, 809, 747, 999, 899 |
| Antisocial | outcome "Antisocial pattern / psychopathy" / option "Antisocial/psychopathic" / card "disregard for rules and others' rights" / P1 "No particular fear - rules and others' claims don't weigh much" / P2 "Flat, strategic, unbothered" / why "Instrumental warmth" / err "its real-world analogue" | 705, 809, 1009, 749, 757, 903, 851 |
| Not diagnostic | "pathologizing a moment" / "Unpleasantness is not a diagnosis" / "Words that are not diagnoses" / "Category error" / "horseshoe error" (Ideology course) / "Everyone has narcissistic traits, so the word doesn't mean anything" | 939, 1011, 1014, 845, 911, 1013, 848 |
| Falsification (D5) | "What would falsify this read?" / "keeps the label falsifiable instead of sticky" / the post-answer label "What would falsify this reading" | 928, 928, engine 4168 |

---

## Key-wording coverage

Every key step and option, and whether the lessons taught it before the determination needed it. yes = near-verbatim or clear paraphrase in a card; partly = idea taught under different words or by inference; no = never taught.

| Step / option | Text (line) | Taught before needed? | Where taught, or what is missing |
|---|---|---|---|
| D1 label | "What kind of thing is this?" (709) | yes | 924 |
| D1 'reasoning' | "A mind justifying itself" / "reasoning in the moment" (710) | partly | label only (934); what it looks like arrives in Unit Two |
| D1 'tactic' | "A move in an interaction" / "a specific tactic" (711) | partly | label only (935); described in Unit Five |
| D1 'pattern' | "A stable way someone is" / "an enduring pattern" (712) | partly | label only (936); and the one-event 'traits' specimens require it (906, 910) |
| R1 label | "Timing of the conclusion" (717) | no | idea scattered across 956, 962, 968; never a question |
| R1 'before' | "Conclusion fixed before the reasoning began" (718) | yes | 961 |
| R1 'after' | "Belief or action came first; discomfort followed" (719) | partly | 956, 962 for dissonance; nothing for confirmation bias, which is also keyed 'after' |
| R1 'evidence' | "Reasoning is honestly responding to new evidence" (720) | yes | 967 |
| R2 label | "What gives, to relieve it" (722) | no | "the drive to resolve it" (949) is the nearest |
| R2 'addstory' | "A justification is added; belief and behavior stay the same" (723) | partly | 953 ("Add a justifying cognition without changing either") |
| R2 'scrutiny' | "New evidence gets scrutinized harder than confirming evidence" (724) | yes | 958 |
| R2 'backward' | "Further commitment is justified by what's already been spent" (725) | yes | 964 |
| R2 'updates' | "The belief itself updates, without defensiveness" (726) | yes | 967 |
| R2 'fixed' | "The conclusion was never really in doubt" (727) | partly | 962 ("destination already chosen") |
| T1 label | "What the move is doing" (731) | no | never framed |
| T1 'denyreality' | "Denying the other person's memory or perception, repeatedly" (732) | yes | 1033 |
| T1 'denyattackreverse' | "Deny the act, attack the accuser, reverse victim and offender" (733) | yes | 1036 |
| T1 'idealizewithdraw' | "Fast idealization now, conditional withdrawal later" (734) | yes | 1039 |
| T1 'ownfeeling' | "Placing an unacceptable feeling of their own onto the other person" (735) | partly | one bullet, no example (1026) |
| T1 'singlemoment' | "A single defensive reaction, no larger sequence" (736) | partly | 1042 ("Most defensiveness in an argument is not a tactic") |
| T2 label | "How much evidence do you have" (738) | no | never framed as a question |
| T2 'pattern' | "Repeats, escalates, or has a clear before/after arc" (739) | partly | 1034, 1039; contradicted for DARVO (1037) |
| T2 'oneinstance' | "One instance only" (740) | yes | 1034 ("A single 'that's not what happened'") |
| P1 label | "Core fear or need being protected" (744) | partly | 926 (D3), 999 (table row "Core fear") |
| P1 'shame_out' | "Shame or inadequacy, defended by outward grandiosity" (745) | no | "shame" never taught; 999 says "Being ordinary / unadmired" |
| P1 'shame_in' | "Same shame, presenting as fragility or quiet resentment" (746) | no | "shame", "fragility" never taught; "quiet resentment" (987) |
| P1 'abandonment' | "Terror of abandonment" (747) | yes | 999, 1004 |
| P1 'attention' | "Need to be noticed - the center of attention" (748) | yes | 1006 |
| P1 'norule' | "No particular fear - rules and others' claims don't weigh much" (749) | partly | 1009 ("disregard for rules and others' rights") |
| P1 'normal' | "None of these dominate - normal-range behavior under stress" (750) | partly | 990 ("not their behaviour under stress") |
| P2 label | "Response when challenged or criticized" (752) | partly | 983 ("reacts to criticism"), 1002 ("Reaction to conflict") |
| P2 'rage' | "Rage or contempt toward the critic" (753) | yes | 983 |
| P2 'withdraw' | "Hurt withdrawal, covert resentment, self-pity" (754) | yes | 986-987 |
| P2 'panic' | "Panic, frantic repair attempts, or sudden devaluation" (755) | yes | 1002 (verbatim) |
| P2 'dramatic' | "Escalated dramatics aimed at an audience" (756) | partly | 1006-1007 ("theatrical", "wants an audience") |
| P2 'flat' | "Flat, strategic, unbothered - no emotional escalation" (757) | no | no card describes how an antisocial pattern reacts when challenged |
| P2 'proportionate' | "A normal, proportionate reaction" (758) | no | "proportionate" appears only inside "disproportionate" (1039) |
| Name step | "ID - Name it" (engine 4076) and the 16 outcome names | partly | most names taught; 'Traits only - not a disorder' (706) never |

Counts of the 30 options: yes 14, partly 12, no 4. Of 7 step labels: yes 1, partly 2, no 4. Not one of R1, R2, T1, T2, P1, P2 as a named question appears in any card; D2, which the course calls the question that does "most of the work" (930), is not a step.

---

## Under-explained ideas

R9. Each row is an idea given a phrase, a bullet or a one-line tell where it needs a paragraph and an example.

| Idea | What the lesson says now | What a newcomer still would not understand |
|---|---|---|
| The three kinds of thing (D1) | Three bullets with a lesson number each (934-936) | What each kind is made of (one thought process, an exchange, a person over years); what to do when a case fits two; what a case of each kind sounds like |
| "pervasive" (D2) | "Pervasive and stable, or situational and reactive?" (925); "across time, across relationships, across contexts" (941) | How much evidence counts as pervasive; who you can ask; what a real "situational" case looks like next to a pattern; why this question is not a step in the key |
| Cognitive dissonance | 112 words, a definition from Festinger, four moves (949-956) | Why a contradiction hurts; what each move sounds like; which move is the bias; why "change the behaviour" never appears again |
| Confirmation bias | "asymmetric scrutiny" + one tell (958-959) | What equal scrutiny would look like; how it differs from motivated reasoning; why "dismissing a study as funded by industry" is this and not dissonance |
| Motivated reasoning vs confirmation bias | Not compared; motivated is compared to dissonance (962) | The only pair the key's R1 separates; a rule for when a case with both is one or the other |
| Sunk cost | Definition + tell (964-965), with a dangling "four years ... a fifth" | What the forward-looking question is; how to tell it from honest commitment to a plan |
| Genuine revision | 71 words (967-968) | Why changing your mind can be a bias (move 1) and not-a-bias (card 5); what "can say what would have moved them the other way" looks like in a sentence |
| Narcissism definition | "a self-concept organised around being exceptional, requiring external admiration, structurally low in empathy for anyone whose function isn't to supply that admiration" (979) | Everyday meaning of every phrase; what low empathy looks like in a conversation |
| Grandiose vs vulnerable | 41 and 70 words; "the mask cracks outward / inward" (984, 987) | What the mask is; why a silent resentful person is "narcissistic"; the shared shame the key's P1 asks about |
| Clinical criteria | One sentence, nine nouns (989) | What "impairing" means; what any listed trait looks like; why they are not enough alone |
| Borderline | One table column and a tell (997-1004) | What it is in plain words; what the "swing" looks like in a week of a relationship; why it is not a mood disorder or "drama" |
| Histrionic | 64 words defined against narcissism (1005-1007) | What a histrionic day looks like; what "suggestible" means; why wanting attention is not the pattern |
| Antisocial / psychopathy | 75 words, one tell (1008-1010) | What routine deceit looks like in practice; the difference between antisocial pattern and psychopathy; why one is "not clinical" and the other is allowed |
| Defence mechanisms / projection | Five one-liners (1023-1031) | An example of projection; how it differs from an accusation; why it is a "tactic" in the key |
| Gaslighting | Definition + tell (1033-1034) | A scene; how to tell honest memory disagreement apart from it; what "the functional effect" feels like |
| DARVO | Acronym + "the sequence" (1036-1037) | That the denial must be false; how to tell it from defending yourself accurately; why one exchange is enough in the card and "pattern" in the key |
| Love-bombing | Definition + tell (1039-1040) | What counts as "disproportionate" to time known; how quickly is too quick |
| "Not a disorder" outcome | Scattered warnings (941, 990, 1012, 1054) | A positive description of what an ordinary hard moment or a mislabel looks like, so the reader can recognise it rather than only avoid the other 15 |
| How the key works | One 137-word card (1049-1054) | What the steps are, what each option means, how the readout works, how route is scored, with a case worked end to end |

---

## What a good version of this subject's units would contain

Pin the rewrite to the owner's constraint: there is no length limit. Add paragraphs and worked examples where a concept needs them. Use one vocabulary: the key's option wording is the controlling text, and cards, drill options and feedback should all use it.

Design principles to pin the rewrite to (the learning-science SSOT the owner asked about; a single reference doc should hold these):
- Worked examples before problems: every concept gets one fully worked case before the learner is asked to do one.
- Concreteness fading: scene first, then the plain-words rule, then the technical label.
- Contrasting cases: teach look-alikes in a side-by-side where the discriminator is the only difference.
- Retrieval practice with explanatory feedback: after each drill item, feedback names the step, the evidence in the passage and why the neighbours fail, in the key's words.
- Signalling and chunking: the discriminating rule is in body text, one concept per card.

**Course-wide**
- A "map" card at the start: the 16 things, in three families, one plain line each; the three questions the key asks, in the key's words.
- Rename or remove D2-D5, or make the key actually ask them. Decide whether pervasiveness is a step (a "how long, how often, in how many places" question) and use the same words everywhere.
- Add a "none of these / not enough here" option to the D1 gate, and one name for it everywhere.
- Render the key explanation on the determination screen and add a worked specimen there.

**Unit One - The diagnostic mindset**
- Open with what the reader will be able to do, in one paragraph, and show the three kinds of thing with one scene each (a thought process, an exchange, a person across years).
- A card on "what pattern means": time, places, relationships; a worked comparison of one bad night and one bad five years.
- A worked D1 on a case that could be two kinds, showing which question breaks the tie.
- Drill options match the key's D1 exactly (including the new "not enough here" option); no forward references in feedback.

**Unit Two - Cognitive dissonance & self-justification**
- One everyday case first (a smoker, a skipped gym session), then the discomfort, then the label "cognitive dissonance".
- Four moves, each with the smoker's sentence, and an explicit statement of which are honest and which are self-justification (and fix the "genuine" wording).
- A map card: "these four moves show up as the five patterns on the next cards", with the exact option wording the key uses.
- Confirmation bias and motivated reasoning as a contrast pair with the timing question ("when was the conclusion reached?") and one case each.
- A worked pass through R1 and R2 on one case before the drill.

**Unit Three - Narcissism**
- A plain definition in everyday words with an example, then the three required features, each with a scene.
- The shared idea (fragile self-worth defended by inflating or retreating) stated outright, with one grandiose and one vulnerable scene.
- A "traits vs pattern vs not enough evidence" card with a rule and three short cases, and consistent option names with the key.
- A worked P1/P2 on a narcissism case before the drill.

**Unit Four - Look-alikes**
- A standalone plain-words card each for borderline, histrionic and antisocial before any comparison.
- Then the comparisons, built on the same two rows the key asks (core fear, response when challenged), including histrionic and antisocial rows.
- Define the metaphors (mirror, audience, supply) or drop them; remove the cross-subject horseshoe references or teach the idea here.
- A drill whose item 1 is a pattern and not a single episode, with options in the key's names.

**Unit Five - Manipulation tactics & defense mechanisms**
- Separate "defence mechanisms (unconscious, everyone)" from "tactics (deliberate moves)" and say where projection goes and why.
- A paragraph and a dialogue scene each for gaslighting, DARVO, love-bombing and projection; state that DARVO's denial is false and that one exchange is enough (or change the key).
- A worked tactic branch: T1 then T2 on one case.
- Replace drill items 5 and 6 with cases that match the criterion the card teaches.

**Unit Six - The full key**
- A worked specimen end to end, with the passage evidence for each answer.
- At least one specimen each for projection, not a tactic, and histrionic.
- Specimen routes that match the lessons: a one-event case routes to a "not enough here" answer, and P2 is only asked where the passage shows a challenge.
- Per-step feedback: which step, which passage evidence, which neighbour is wrong and why.
- A short "your own case" card: what to look for, what to ask, and what you cannot know.
