# Political Ideologies - comprehension audit

Scope: `/Users/dim/Documents/PersonalLessons/public/index.html` lines 353-687 (subject data), plus the engine that shows it (renderLesson, mountPick, mountErr, mountDet, mountVerdict, detBlurb, determination helpers). Line numbers below are lines of that file. Audit date 2026-10-04. Judged as an adult who has never studied politics, on a 360px phone, one card at a time.

Card map used throughout (18 cards, about 1,956 words in total, about 109 words per card):

| Code | Line | Card |
|---|---|---|
| U1C1 | 477 | Classify by content, never by method |
| U1C2 | 482 | The five key characters |
| U1C3 | 491 | Q2 routes you to a family |
| U1C4 | 502 | The valence trap |
| U2C1 | 516 | Ownership, not taxation |
| U2C2 | 521 | Marxism and Marxism-Leninism |
| U2C3 | 532 | Democratic socialism vs social democracy |
| U2C4 | 540 | Anarchism and market socialism |
| U3C1 | 551 | A definition with actual content |
| U3C2 | 555 | The ten markers - look for the cluster |
| U3C3 | 569 | Three things fascism is not |
| U3C4 | 576 | "But the Nazis were socialists" |
| U4C1 | 587 | Terms that are not ideologies |
| U4C2 | 599 | The horseshoe error |
| U4C3 | 603 | National populism |
| U4C4 | 614 | Identity-egalitarianism |
| U4C5 | 626 | Both of these are also insults |
| U5C1 | 635 | Running the whole key |

Drills: Unit 1 = `D_UNIT` (383-392, 7 items), Unit 2 = `D_SOC` (394-401, 5), Unit 3 = `D_FASC` (403-412, 7), Unit 4 = `IDEOLOGY_ERR` (414-421, 6), Unit 5 = `IDEOLOGY_SPECIMENS` (423-472, 12). 37 practice items in all.

## Verdict

It does not teach-then-apply; it lists-then-quizzes. The course teaches five questions, the key asks two (in the opposite order), and the feedback talks about a third and fourth that the learner is never asked, so the learner meets the instrument they will actually be scored on for the first time inside the final specimens. Four root causes: (1) the lessons give labels and option lists with no plain-words concept, no everyday example and no worked walk through the key; (2) the key's own wording ("Private + heavy redistribution", "Not stated in the passage", "Race or identity, egalitarian valence", the Q2/Q1 step order) is never taught; (3) the flat two-question key ends with 2 to 6 survivors on 8 of 12 specimens, so the name is decided by marker knowledge the key never asks and never scores; (4) every idea is compressed to a phrase or a bullet (about 110 words per card for 13 ideologies), and the drills mostly match keywords and then give feedback that restates the answer or uses untaught terms. Of 37 practice items, 14 cannot be answered and justified from the preceding cards alone.

## Findings by unit

Severity guide: HIGH = a newcomer cannot learn or apply the idea as presented. MED = the idea is reachable but the card makes it harder or inconsistent. LOW = polish.

### Course-level (cross-unit)

C1. [R1 HIGH] Three different instruments are presented as one. The course teaches "five of them" (line 480: "This course teaches five of them, then drills them.") as Q1-Q5 (lines 484-488). The key asks two steps, labelled `Q2` first and `Q1` second (lines 651-654), shown on screen as "1 / Q2 - Primary unit of analysis", "2 / Q1 - Ownership of the means of production", "3 / ID - Name it". The specimen feedback then speaks in Q3 and Q4 ("Q2 is the nation; Q3 is decline followed by rebirth; Q4 openly abolishes electoral legitimacy", line 426; "Q3 is restoration of a divine-traditional order", line 442; "Q4 defend-and-limit", line 450) although nothing ever asks Q3, Q4 or Q5. Blocks learning because: the reader cannot tell which questions are "the key", why the step number and the Q number disagree (step 1 is Q2), or what to do with the other three. This is the same naming drift the owner found in Psychology. Needed instead: one honest statement up front ("the key you will use asks two questions, in this order; three more questions are tie-breakers you will meet in Units 3 and 4") and one numbering used everywhere.

C2. [R1 HIGH] The text that would orient the learner at the key is never shown. `intro` (line 649) and `determinationIntro` (lines 655-663) are defined, but grep over the whole file finds no code that renders either (only the definitions). So the sentences "the way you would identify a plant", "Pick Not stated when the passage genuinely doesn't say", "The strip ... is a readout, not a control" never reach the learner. The only place the course says anything about "Not stated" as an answer is inside that unrendered block. The Q1 option "Not stated in the passage" (line 380) is therefore never taught.

C3. [R3 HIGH] The key narrows to "a family", not "one answer", and the app says otherwise. `detBlurb` renders "2 questions narrow 13 tools to one." (engine, line 3900) - an ideology is called a "tool", and the sentence is false for 8 of 12 specimens. Computed from the `keeps` arrays on the accepted route: specimens 1 and 8 end with 4 survivors (react, fasc, nazi, natpop); 2 and 6 with 6; 4 with 4; 3 and 10 with 2 (socdem, mktsoc); 9 with 2 (natpop, pop). Only 5, 7, 12 and 11 (via "People vs elite") end with one. U1C3 promises "In practice two questions are often enough to get to one answer, and you will see that happen in the final unit" (line 501): that is 4 of 12. And `nameOptions` returns all 13 outcomes regardless of survivors (gateCode is null), so nothing stops the learner naming an outcome the readout has crossed off. The final choice among 2 to 6 survivors rests on knowledge (rebirth myth, vanguard, anti-statism) the key neither asks nor scores.

C4. [R9 HIGH] The whole subject is compressed. 18 cards and 1,956 words cover 13 outcomes, 7 unit-of-analysis options, 6 ownership options and 5 questions. Coverage per outcome: Classical liberalism has no card (only "Individual -> the liberal family", line 496, and a caveat at 681); Reactionary conservatism has one contrast paragraph (575); Nazism one paragraph (571); Market socialism one paragraph (545); Marxism half a card (522-528); Populism one table row (593); Democratic socialism and Social democracy one paragraph each; Anarchism one paragraph. Fascism, one outcome of 13, gets four cards. Two outcomes are specimen answers with no teaching of their own (Classical liberalism, specimen 7; Reactionary conservatism, specimen 5).

C5. [R8 HIGH] There is no transfer anywhere on the learner path. No card shows how to approach a real article, speech or manifesto (what to look for, what to ask the speaker). The only statement that the key does not give verdicts on living cases ("Applying this to current parties is contested terrain", line 683) sits in `caveats`, reachable only from the optional "Where this key stops" row on the subject screen.

C6. [R4 HIGH] The lessons never walk a passage through the key. The only walk-throughs are in specimen feedback after the learner has already answered (line 466, "Watch the two questions work together") and in the single objection card U3C4 (line 577, "Resolve it with Q1 and Q2, not the party name"), which is about a slogan, not a method.

C7. [R3 MED] The subject's own descriptors disagree: blurb (line 647) says "ownership, allegiance, purpose"; the five question names are ownership, unit of analysis, engine of history, attitude to liberal democracy, end state; `topics` (line 648) says "The five questions - Socialist family - Fascism - Look-alikes" and omits Unit Five; the unit is titled "The socialist family" (514) but U1C3 calls it "the Marxist and socialist family" (494). "Allegiance" and "purpose" map to no named question.

### Unit One - The five questions (lines 475-512)

1. [R1 HIGH] The unit opens with a diagnosis of a common error, not a goal. Quote (478): "Most misidentification happens because people classify by how a movement behaves rather than what it claims." It never says what the reader will be able to do at the end (read a short text, say whose side it speaks for and who it says should own the economy, and use that to narrow the possibilities), nor that the key will ask only two of the five questions. The reader finishes card 1 not knowing what the next 17 cards are for.

2. [R1 HIGH] The course opening is not honest about the key (see C1). Quote (480): "This course teaches five of them, then drills them." The drills never drill Q3, Q4 or Q5 and Q1 is never drilled on its own (see item 9). U5C1 later says "Everything so far has drilled one character at a time" (636), which is false: the drills were Q2, family names, marker sorting and faulty claims.

3. [R2 HIGH] The two phrases that title the key's two steps are never explained in plain words or by example. "means of production" (484) appears twice in all cards (484, 517); "unit of analysis" (485) once. Nothing says what a means of production is (a bakery, a farm, a railway, a bank) or what it means for a text to treat a class or a nation as its "primary unit of analysis". "key characters" (480, 482, 636) is botanical jargon; the plant analogy that would explain it lives only in the unrendered determinationIntro (655).

4. [R2 HIGH] Q2 is a list of six bare nouns. Quote (485): "class / nation / race or identity / individual / tradition & faith / people vs elite". The glosses that make them usable ("owners vs sellers of labour", "organic people / homeland", "self-directing person", "throne and altar", "real majority vs the few", lines 365-371) exist only as small print under the key's option buttons, so the learner meets the first definition of "Individual" on the first screen of the final drill. A newcomer cannot tell what it means for a passage to have "the individual" as its unit as opposed to "the people".

5. [R3 HIGH] The Q1 option list in the card does not match the key. Card (484): "private / state / worker-collective / private-but-state-directed" (four options). Key (374-381): "Private, untouched", "Private but state-directed", "State or public ownership", "Worker-collective", "Private + heavy redistribution", "Not stated in the passage" (six). Two options the learner must use ("Private + heavy redistribution", "Not stated in the passage") are taught nowhere. "Private + heavy redistribution" is also not an ownership answer, and U2C1 has just said "Ownership. Not taxation, not regulation, not spending." (518). Needed: the card lists the six options exactly as the key words them, with when to use each, and the key stops mixing redistribution into an ownership question.

6. [R3 MED] "Race or identity" is three different things. Card list (485, 499): "race or identity". Key: two options both named "Race or identity", told apart only by small print "hierarchical valence" / "egalitarian valence" (367-368). Unit-1 drill option (392): "Race / blood" (a third name), with no egalitarian counterpart. U1C4 orders "Run the valence check every time before assigning a family" (510) and then supplies a drill on which the check cannot be run.

7. [R4 HIGH] Card 3 (491-501) says Q2 "routes you to a family" and ends: "In practice two questions are often enough to get to one answer, and you will see that happen in the final unit." That is a deferral, not a demonstration. No card shows one passage, the words in it that answer Q2, the Q1 choice, and the crossed-off list that results. The reader's first contact with the key's wording is the final unit.

8. [R2 MED] Card 3 introduces at least seven undefined names before any is taught: "the Marxist and socialist family", "fascism", "national populism", "reactionary conservatism", "the liberal family", "populism, and whatever host it has attached to" (host is never explained, line 498). It is concept-after-label for the whole subject: the schema comes first, the content comes later.

9. [R5 HIGH] The unit's drill tests one of five taught questions, with keyword matching. `D_UNIT` (383-392) asks only Q2. Items 1, 3, 4, 7 are solved by spotting the noun in the sentence ("class struggles", "The nation", "Each person", "betrayed by a small elite"). Items 2 and 5 need knowledge nobody taught: "blood and soil" is never tied to race, and "The workers of the world have no country" requires knowing workers = class and that class outranks the word "country". No item exercises Q1, the valence check, or the egalitarian side of "Race or identity". The drill options (392) are the only Q2 wording the learner has seen at that point.

10. [R6 MED] Drill `w` text restates or answers a different question. Item 1: "Marxist family." (384). Item 4: "Classical liberalism." (387). Item 3: "Fascism. The rebirth language is decisive." (386) - the question was "which unit", the explanation names a family and cites a cue (rebirth) not taught until Unit 3. Item 2: "Hierarchical valence - the Nazi variant of fascism." (385) never says which words signal race (the sentence says "a people", "blood and soil", nothing about rank). Item 7: "a thin ideology that still needs a host" (390) uses two terms not explained until Unit 4.

11. [R7 MED] Card 2 (482-490) is a five-row table packing 25+ option names into 137 words, with Q3-Q5 getting only option lists ("transcend", "pluralist competition", "engine of history"). Sentence 490, "Q1 and Q2 do most of the work. The other three usually confirm rather than decide.", is the only justification for ignoring Q3-Q5 in the key, and it is contradicted by U3C2/U4C3 where Q3/Q4-type content (rebirth myth, attitude to elections) is what separates fascism from national populism from reactionary conservatism.

12. [R3 HIGH] Card 1 contradicts later cards. Quote (479): "Rallies, censorship, secret police, purges and personality cults appear across regimes with completely opposite beliefs. They travel freely. They tell you almost nothing about ideology." Then U3C2 lists "Mass mobilisation - uniforms, rallies, paramilitaries, youth wings" (563) and "Leader principle" (562) as fascist markers; U3C3 says "repression is shared, mobilisation is not" (573); U4C2 says Leninism and fascism share "leader cult, secret police, mobilised masses" (600). A reader holding all four cannot tell whether rallies and leader cults are diagnostic. The drill item "National youth movement with uniforms and mandatory membership" (405) is marked a fascist marker.

13. [R9 MED] Each of six units of analysis gets one phrase; Q3-Q5 get option lists only. A newcomer still would not understand: what "unit of analysis" is, how to find it in a text, why "class" and "nation" are rival answers to the same question, or what the other three questions would ask of a passage.

14. [R7 LOW] The valence table (503-510) renders at 360px as three columns of about 100px each, 450px tall (measured in the browser at 360 wide): readable, but each cell is five or six words wide, and the "Family" column already uses "Identity-egalitarianism", which nothing has taught yet.

15. [R8 MED] Nothing in the unit shows how to use the questions on something the reader brings (what to look for in a speech: whose side is it on, who owns what, who is the enemy).

### Unit Two - The socialist family (lines 514-547)

1. [R1 MED] The unit opens with a definition, not a goal. Quote (517): "Socialism is social ownership or democratic control of the means of production." It does not say this unit teaches Q1 (that appears only on card 3, line 533: "the difference is exactly Q1"), nor that all six socialist-family outcomes answer Q2 with "Class". The count is also off: "The word covers at least four incompatible things. The next cards separate them." (520). The next three cards name six outcomes: Marxism, Marxism-Leninism, democratic socialism, social democracy (said to be not socialism), anarchism, market socialism.

2. [R2 HIGH] The core test has no concrete content. Quote (519): "Always ask Q1: did ownership of productive assets actually change hands?" "productive assets" (518, 519, 535) is a synonym of "means of production", neither is exemplified except "utilities, rail, banks" (535), buried in democratic socialism. The card does give the contrast set ("Public roads, central banks, militaries and food inspection", 519), which is good, but never the positive set (factories, farms, shops, banks). The reader cannot apply the test to a passage that says "a bakery".

3. [R2 HIGH] The Marxism card (521-531) is 95 words and at least nine undefined terms: "Historical materialism", "owners of capital", "Surplus value", "modes of production", "material conditions", "contradictions", "democratic centralism", "dictatorship of the proletariat", "vanguard party of professionals". "An analytical framework more than a programme" (523) is itself unexplained.

4. [R9 HIGH] Surplus value, the idea specimen 2 depends on, is one line. Quote (526): "Surplus value: profit is unpaid labour, extracted as a matter of system rather than malice". A newcomer still would not understand how profit can be "unpaid labour" (no numbers, no worked example), or why "system rather than malice" matters, although specimen 2's decisive tell is exactly "systemic framing, not moral" (430).

5. [R3 HIGH] Marxism is said to end "classless, stateless, moneyless" (527) and anarchism is distinguished by "anti-capitalist and anti-statist at the same time. No other family holds both." (543). Marxism is also anti-capitalist and, by its stated end state, stateless. The card never says the difference is the route (a transitional state) rather than the destination, and the key has no step for it (the anarchist specimen's why, 438, relies on "Refusing to capture the state rules out every parliamentary and vanguard route").

6. [R3 MED] The anarchist branch has five names: card heading "Anarchism and market socialism" (540), h3 "Anarchism / libertarian socialism / syndicalism" (541), outcome "Anarchism / libertarian socialism" (357), drill option "Anarcho-syndicalism" (401), and "Worker-collective" as the key's ownership option (378) against "workers' councils, communes or unions" (542). "Anarcho-syndicalism" never appears in a card and "syndicalism" is never defined.

7. [R3 HIGH] Social democracy is "not socialism" in two incompatible senses. The card says "Not socialism under the ownership definition" (537) and the drill gives a separate option "Not socialist" (401) for item 5, whose explanation is "Supply-side liberalism." (399). A reader following U2C1/U2C3 ("If productive assets stay privately owned ... that is a welfare state", 518) has two defensible answers for item 5. Also U1C3 sends "Class" to "the Marxist and socialist family" (494) while social democracy is "not socialism", yet the key requires Q2 = Class for social democracy (specimens 3 and 10): nothing says social democracy still answers "class".

8. [R4 HIGH] The unit never says which key option each ideology picks. The key gives democratic socialism Q1 = "State or public ownership" or "Worker-collective" (377-378), social democracy Q1 = "Private + heavy redistribution" (379), anarchism "Worker-collective", market socialism "Worker-collective" or "Private + heavy redistribution", Marxism-Leninism "State or public ownership". None of this mapping is in the unit. The learner is told "Ownership. Not taxation" and then meets an ownership answer that contains the word "redistribution".

9. [R5 HIGH] The drill (394-401) does not test what the unit taught, in the words it taught. Options "Anarcho-syndicalism" and "Not socialist" were never taught; there is no Marxism option and no Market socialism option although two cards teach them. Item 4 (398) is a near-paraphrase of the card ("utilities, rail, banks ... elections"), so it tests recall of a sentence. Item 1 uses "top marginal rate" and "tertiary education", item 5 "deregulate" and "corporate tax", none of which the course defines.

10. [R6 MED] Drill feedback `w`: item 3 "Vanguard language is the giveaway." (397) names a cue without saying what vanguard means; item 5 "Supply-side liberalism." (399) names a family the course never teaches; item 1 "Ownership untouched. Transfers are not socialism." (395) introduces "transfers" where the cards say "redistribution".

11. [R7 MED] Six ideologies in three cards (about 80-124 words each), two per card, then a single 5-item drill. Card 3 (532-539) fits two ideologies, a definitional dispute note and a "Tell" into 124 words; card 4 (540-545) pairs anarchism with market socialism, the hardest pair for the key. There is no build-up from one concrete case (one business, treated six ways) to the abstractions.

12. [R9 HIGH] Market socialism: "Worker-owned or socially-owned firms competing in real markets at real prices. Coherent in theory, rare in durable practice - but it matters for classification, because it is the answer whenever someone accepts markets while moving ownership." (545) A newcomer still would not understand how it differs from social democracy (which also "Accepts private ownership and markets", 537) or from democratic socialism, and has no example of what such a firm is. Specimens 3 and 10 hinge on this pair ("market socialism stays live until you ask who owns those sectors", 462), yet market socialism is never an answer anywhere in the drills or specimens.

13. [R9 MED] Democratic socialism vs social democracy, the unit's central contrast, is two short paragraphs with no same-policy-different-owner example, though the card itself says "These two get conflated constantly" (533).

14. [R8 MED] No transfer: nothing shows what to look for in a real manifesto to tell an ownership change from a tax change.

### Unit Three - Fascism (lines 549-583)

1. [R1 MED] No orientation or link to the key. The unit never says where fascism sits in the key (Q2 = Nation; Q1 = Private but state-directed or not stated; tie-breakers Q3/Q4) or what the reader should be able to do afterwards (tell a fascist text from an authoritarian, reactionary or populist one).

2. [R2 HIGH] The opening card is a single 70-word sentence of undefined terms. Quote (552): "A mass, anti-liberal, anti-Marxist movement organised around a myth of national decline and rebirth, pursuing regeneration through unity, discipline and often violence, led by a leader who embodies the popular will, in which the individual exists to serve the organic nation." Undefined: "anti-liberal" (liberalism is never defined, and Q4 uses "liberal democracy" at 487), "myth" (as founding story), "regeneration", "embodies the popular will", "organic nation". The heading "A definition with actual content" promises the opposite of what it delivers for a newcomer. Concept should come first (what a fascist movement looks like in plain words), the compressed definition after.

3. [R2 MED] Jargon and name-dropping. "Palingenetic ultranationalism" (557), a coined academic phrase, is the first marker; the plain gloss ("the nation is decadent and will be reborn") comes after it. "Paxton emphasises process and stages, Griffin the rebirth myth, Eco a family-resemblance list" (554; repeated at 679) gives three surnames a newcomer has never met and no way to use them.

4. [R9 HIGH] Ten markers in 123 words, about 12 words each (555-568). Example: "Enemies both weak and strong - contemptible yet about to overwhelm you." "Mythic past - a lost golden age, usually historically fictional." "Nation as organism - a body with one will; the individual is a cell." Each is a label plus a half-line, with no sentence of how it sounds in a speech. "No single item is decisive. The cluster is." (568) gives no threshold, no method for weighing, no worked cluster. A newcomer still would not understand how many markers make a fascist text, or how a marker looks in an ordinary paragraph.

5. [R3 HIGH] The cards contradict each other on what is diagnostic. (a) Rallies and personality cults "travel freely" (479) vs "Mass mobilisation - uniforms, rallies" and "Leader principle" are markers (562-563) vs "repression is shared, mobilisation is not" (573) vs "mobilised masses" and "leader cult" shared by Leninism and fascism (600). (b) Palingenesis is "The ideological core." (557), anti-liberal and anti-Marxist is "Critical." (564), and "No single item is decisive." (568). (c) What separates "leader cult" (not diagnostic) from "leader principle" (diagnostic) is only explained in a drill explanation after the answer: "Not merely a dictator, but a claim about representation itself." (410).

6. [R3 HIGH] The fascist economic answer has seven names: "Corporatism - private ownership retained under state-directed bodies" (565); "state-directed capitalism" and "directed private industry through contracts and controls" (578); "directed private ownership" (601, and in the err drill 418); "Private but state-directed" (376, the key option); "state-recognised blocs of labour and capital" (594); "Compulsory state-run bodies" (409); "Private, retained - but directed toward national ends" (606). And "corporatism" is a fascist marker (565) and also a "term that is not an ideology" (594).

7. [R3 MED] Nested vs flat. "All Nazism is fascist; not all fascism is Nazi." (571) but the key lists Fascism and Nazism as separate exclusive answers, and "Race or identity - hierarchical valence" keeps both (367). When both survive, nothing says how to choose; there is no Nazism specimen, so the path is never exercised. U1C4's "Nazism, racialist fascism" (506) adds a third label.

8. [R4 HIGH] No bridge from markers to key. The markers are answers to Q3 ("national decline & rebirth", 486) and Q4 ("abolish", 487), but the card never says so, and the key never asks them. On specimens 1 and 8 the route (Q2 nation, Q1 not stated) leaves react, fasc, nazi, natpop; the learner picks fascism by running the marker cluster in their head with no step to record it and no score for it.

9. [R2 MED] Reactionary conservatism, an outcome and a specimen answer, exists only as a contrast. Quote (575): "The reactionary wants to restore throne, altar and hierarchy." "throne, altar" is never defined; "reactionary" is a neutral technical label here and an insult in everyday speech, and the card does not say so.

10. [R4 MED] U3C4 (576-581) is the course's only worked use of Q1 and Q2, and it is good in intent ("Resolve it with Q1 and Q2, not the party name"). But it asserts facts the reader cannot check or retain ("privatised major state holdings in the 1930s, banned independent trade unions", 578), and it answers Q1 as "It stayed private", while the key option for this answer is "Private but state-directed".

11. [R5 HIGH] The drill (403-412) tests the wrong skill. The unit says "No single item is decisive. The cluster is." and then asks for a verdict on single items. Items 2, 4, 6, 7 are near-verbatim card bullets; items 1, 3, 5 rest on a sentence in U1C1 or U3C3. Six of ten markers are never drilled. No item asks the learner to weigh several markers together, or to separate fascism from reactionary conservatism or national populism.

12. [R6 MED] `w` for item 4 (407): "Palingenesis plus the cult of purifying struggle. The ideological core." reuses the coined word. The item says "the current generation is degenerate" while the card says "the nation is decadent" (557): generation and nation are different units.

13. [R7 MED] No build-up: the unit starts with the most abstract definition, then ten markers, then three negations (authoritarian, Nazi, reactionary) that each depend on a concept met for the first time there.

14. [R8 MED] No transfer: "look for the cluster" is never turned into questions to ask of a real speech (who is the enemy, what is the promised future, who decides, how are ordinary people expected to take part).

### Unit Four - Look-alikes (lines 585-631)

1. [R1 MED] The unit does five different jobs under one title with no orientation: a vocabulary table (U4C1), a logical error (U4C2), two new key outcomes (U4C3 national populism, U4C4 identity-egalitarianism), and a warning about insults (U4C5). Title "Look-alikes" (585) describes none of the two new outcomes, which are real key answers (360-361) and the answers to specimens 11 and 12 (specimen 9 turns on the thin-populism contrast).

2. [R2 HIGH] Terms used as labels. "horseshoe" is the title of U4C2 (599) and is never defined. "Populism: A thin ideology ... Attaches to hosts on left and right" (593) uses "thin" and "host" with no gloss; the same words are in the key outcome "Populism (thin - unresolved)" (361), in U1C3 (498) and in drill feedback (390). Totalitarianism, statism and technocracy (592, 596, 597) are single-line entries that nothing later uses except statism in err item 3.

3. [R3 HIGH] The Q1-Q5 table format breaks on first real use. U4C3's rows are free prose, not options from U1C2: Q4 for national populism is "Works inside elections; attacks courts, press and bureaucracy as unrepresentative without abolishing the vote" (609), and none of the four Q4 options in U1C2 ("fulfil & expand / transcend / abolish / defend or restore", 487) says that. Q5 "A sovereign, culturally cohesive nation - restored, not transfigured" (610) is not a Q5 option (488); Q3 "Formally neutral institutions reproduce inherited disadvantage" (619) is not a Q3 option (486). Specimen feedback adds a fifth wording for Q4: "defend-and-limit" (450).

4. [R3 MED] "Real people vs elite" has six wordings: "real majority vs the few" (371), "ordinary decent majority ... a small elite" (390), "pure people vs corrupt elite" (593), "The 'real people' against a cosmopolitan elite" (607), "Real people ... a corrupt establishment" (456), "forgotten majority ... global finance and bureaucratic elites" (464). The reader is never told these are one idea, and specimen 9 depends on deciding whether "take the country back" (456) is a host.

5. [R3 MED] The horseshoe card: "They give opposite answers on both decisive questions. Q1: state ownership versus directed private ownership. Q2: class versus race or nation." (601). Fascism's Q2 is Nation (552, 559) and Nazism's is Race (571, 579); here they are merged. "both decisive questions" repeats the claim that Q1 and Q2 decide, which the specimen routes do not bear out (C3).

6. [R9 HIGH] Identity-egalitarianism (614-625): 134 words of abstract phrases. "structurally positioned groups", "Formally neutral institutions reproduce inherited disadvantage", "structural, systemic, disparate outcomes, equity distinct from equality, colour-blindness as insufficient" (624), and "critical-theory lineage" (625). A newcomer who has not read this literature gets a vocabulary list: no example case, no sentence explaining equity versus equality, no demonstration of the valence mirror the card says it was "built for" (615).

7. [R9 MED] National populism's four absences (612): "no palingenetic rebirth myth, no leader-as-embodied-will replacing elections, no paramilitary mobilisation, no cult of purifying violence" - each is a fascism term from Unit 3, listed without a contrasting example of what natpop sounds like when it stays inside elections. And nothing separates national populism from thin populism (specimen 9 vs 11): the only difference the key can express is Q1 "directed" vs "not stated".

8. [R5 HIGH] The unit's drill does not test the unit. Cards teach seven terms, the horseshoe, national populism and identity-egalitarianism; the six faulty claims (414-421) cover Sweden (Unit 2), "Antifa ... fascist" (Unit 3), statism, horseshoe, nationalism, and healthcare/Marxism (Unit 2). No claim concerns populism, national populism or identity-egalitarianism. U4C5 says "The drill you are about to do is six statements that fail as analysis - most of them because they never engage Q1 or Q2 at all." (628). Only 4 of the 6 explanations mention Q1/Q2 (415, 417, 418, 420); items 2 and 5 (416, 419) name markers, not a question.

9. [R6 MED] The drill is reveal-only (engine `mountErr`): "State the fault out loud or in writing before revealing it" - nothing records the learner's answer, so a wrong diagnosis is never seen, and the unit completes with "All 6 faults reviewed". U4C5 asks the learner to "Name the question the claim skipped" (629), but for items 2 and 5 the explanation never says which question (the answer is Q3/Q4-type content that the key never asks).

10. [R7 MED] Five cards, about 538 words, seven table terms (Authoritarianism, Totalitarianism, Populism, Corporatism, Nationalism, Statism, Technocracy; two already met), two new outcomes (National populism, Identity-egalitarianism) and a logical error (the horseshoe). The two real outcomes arrive in the last two content cards, as composites, with no drill of their own.

11. [R1 MED] U4C5 says "The two formations you just learned are, in live political speech, more often used to condemn than to describe" (627) but no claim in the drill is about either formation, and "formations" is a new word for what the rest of the course calls "family", "branch", "outcome", "tool".

12. [R8 MED] A unit about insults never shows what to do when someone says "fascist" or "socialist" at you or in a headline (which question to ask them back).

### Unit Five - Full determination (lines 633-642)

1. [R1 HIGH] One card of 134 words introduces the instrument the learner will be scored on, and gets the facts wrong. Quote (636): "Everything so far has drilled one character at a time." The drills were Q2, family names, markers and faulty claims (see Unit One item 2). Quote (640): "Two of the twelve are traps for over-classification." Only specimen 9 has the withhold answer ("Populism (thin - unresolved)", 457); specimen 10 (462) is named "Social democracy". A reader told to expect two withholding traps will hunt for a second and may withhold wrongly.

2. [R4 HIGH] No worked example, no rule for the step the specimens hinge on. "Not stated in the passage" is the correct Q1 on 6 of 12 specimens (1, 2, 5, 6, 8, 9) but is only a withhold on one; the learner is never told when silence means "not stated" (specimens 1, 2, 5, 6, 8, 9), when it means "private" (specimen 7: "Prosperity is what happens when free individuals trade", line 448) and when an explicit "Business will continue to be privately owned" (432) means "Private + heavy redistribution".

3. [R3 MED] Step numbering collides with question numbering (see C1). U5C1 says "answer Q2, then Q1" (637) after four units that presented Q1 first (484, 533).

4. [R5 HIGH] Specimen design defeats the stated scoring rule. Specimen 3 (432-435): the passage says "Business will continue to be privately owned"; the literal answer is "Private, untouched" (375). Class + "Private, untouched" leaves zero outcomes: the readout shows "0 of 13 left" (verified by running it in the browser pane), then the verdict says "Right name, wrong route ... Step Q1 wanted Private + heavy redistribution. A label you cannot derive from the key will not survive an unfamiliar case." The label cannot be derived from the key: the learner's literal answers eliminated every outcome. The explanation (434) says "Q1 is answered explicitly and in the negative: ownership does not move", which describes "Private, untouched". Specimen 10 (460-463): the passage names no group and no owner; accepted Q2 = Class, Q1 = "Private + heavy redistribution"; its own why says it "does not settle Q1 for production as a whole".

5. [R6 HIGH] Specimen `why` and `fals` use untaught terms and unasked questions: "Q3", "Q4" (426, 442, 450); "fiscal orthodoxy" (434); "Decommodifying" (462); "council communism" (447); "labour reformism" (431); "fusionist or national conservatism" (451); "critical-theory lineage" (471); "the populist pair" and "the state-directing trio" (466); "over-classification" (458). Only some `why` text justifies the route steps (2: "Surplus value stated almost verbatim" explains the name, not Q2 or Q1; 4: explains the name, not the route).

6. [R7 MED] The readout lists all 13 outcome names at once ("13 OF 13 LEFT"), including three that are never an answer (Nazism, Democratic socialism, Market socialism). Newcomers see 13 unfamiliar labels, 7 of which were met in a single paragraph or less.

7. [R8 MED] Nothing follows the specimens about doing this off the app. The only transfer line is "Withholding is a skill, not a failure." (640).

8. [R5 LOW] Specimen 11 accepts either "People vs elite" or "Nation" for Q2 (465), and the two routes leave 1 or 3 survivors. The learner is never told which is preferred or why, and the `why` (466) describes only the "People vs elite" route ("Q2 narrows to the populist pair").

## Learner simulation

Method: for each practice item, "could a reader who has read only the cards before it answer AND justify it using only what those cards said?" Cards read before each drill: Unit 1 drill: U1C1-U1C4; Unit 2: + U2C1-4; Unit 3: + U3C1-4; Unit 4 (faulty claims): + U4C1-5; Unit 5: all 18 cards. SUPPORTED = a card sentence licenses it. WORDING-GAP = the idea was taught under different words than the option/step text. UNSUPPORTED = never taught. "(keyword)" means the answer is reachable by matching a noun in the item to an option name, which licenses the answer but not the idea.

### Unit 1 drill (D_UNIT, Q2 "Which unit of analysis is primary?")

| Item | Verdict | Licensing card sentence, or what is missing |
|---|---|---|
| 1 "The history of all hitherto existing society is the history of class struggles." -> Class | SUPPORTED (keyword) | U1C3 "Class -> the Marxist and socialist family"; the word "class" is in the item. The idea (class as the unit) is never explained. |
| 2 "A people that has forgotten its blood and soil ..." -> Race / blood | WORDING-GAP | Race taught as "Race or identity" (485, 499) and "The group has an inherent nature and a rightful rank" (506); the option is "Race / blood", and nothing ties "blood and soil" to race. The sentence has "a people" (reads as Nation) and no rank language. Specimen 1 later uses "soil of the fatherland" for Nation. |
| 3 "The nation, humiliated and betrayed, will be reborn ..." -> Nation | SUPPORTED (keyword) | U1C3 "Nation -> fascism, national populism, reactionary conservatism". The `w` answers a different question (the family). |
| 4 "Each person is the best judge of their own interest ..." -> Individual | SUPPORTED (keyword) | U1C3 "Individual -> the liberal family". No card says what "Individual" as unit means. |
| 5 "The workers of the world have no country." -> Class | WORDING-GAP | "Class" is never glossed in Unit 1 (the gloss "owners vs sellers of labour" is only on the key buttons, 365). Reader must map "workers" to class and ignore the word "country" (a Nation cue). |
| 6 "Kings rule by the grace of God, and the Church teaches ..." -> Tradition & faith | SUPPORTED (keyword) | U1C3 "Tradition & faith -> reactionary conservatism"; plain English kings/Church. `w` uses "Throne and altar", undefined. |
| 7 "The ordinary decent majority has been betrayed by a small elite ..." -> People vs elite | SUPPORTED (keyword) | U1C3 "People vs elite -> populism". `w` adds "thin ideology", "host" (untaught). |

Totals: 5 SUPPORTED, 2 WORDING-GAP, 0 UNSUPPORTED.

### Unit 2 drill (D_SOC, "Which branch - if any?")

| Item | Verdict | Licensing card sentence, or what is missing |
|---|---|---|
| 1 "raise the top marginal rate to 62% ... Firms remain private." -> Social democracy | SUPPORTED | U2C3 "Accepts private ownership and markets; constrains capitalism through the welfare state, labour rights, progressive taxation" and "Tell: redistribution, floors and rights". |
| 2 "Federated worker councils will run the mills. We recognize no parliament and no state." -> Anarcho-syndicalism | WORDING-GAP | U2C4 teaches "Anarchism / libertarian socialism / syndicalism" and "anti-capitalist and anti-statist"; the option "Anarcho-syndicalism" is never named in any card and "syndicalism" is undefined. |
| 3 "The party, as the conscious vanguard ... through the transitional period." -> Marxism-Leninism | SUPPORTED | U2C2 "a vanguard party of professionals ... the dictatorship of the proletariat as a transitional stage" and "the party, not the class, is the acting subject". |
| 4 "win a legislative majority and transfer the utilities, rail, and major banks ..." -> Democratic socialism | SUPPORTED | U2C3 "social ownership of major productive assets - utilities, rail, banks - but pursues it through elections". Near-verbatim. |
| 5 "deregulate labor markets and cut corporate tax ..." -> Not socialist | WORDING-GAP | U2C1 "If productive assets stay privately owned ... that is a welfare state" and U2C3 "Not socialism under the ownership definition" fit social democracy equally; nothing teaches that deregulation and tax cuts are the opposite of redistribution, and "Not socialist" is not a taught option. `w` "Supply-side liberalism" is untaught. |

Totals: 3 SUPPORTED, 2 WORDING-GAP, 0 UNSUPPORTED. Marxism and Market socialism are never an option.

### Unit 3 drill (D_FASC, "Specifically fascist, or merely authoritarian?")

| Item | Verdict | Licensing card sentence, or what is missing |
|---|---|---|
| 1 Censorship of the press -> Merely authoritarian | SUPPORTED | U1C1 "Rallies, censorship, secret police, purges and personality cults appear across regimes ... They travel freely." |
| 2 National youth movement with uniforms and mandatory membership -> Fascist marker | SUPPORTED (conflict) | U3C2 "Mass mobilisation - uniforms, rallies, paramilitaries, youth wings"; U3C3 "mobilisation is not [shared]". Conflicts with U1C1 (rallies travel freely) and U4C2 (mobilised masses are a shared method), which the reader may weigh. |
| 3 Torture of political prisoners -> Merely authoritarian | SUPPORTED | U3C3 "repression is shared"; U1C1 "secret police, purges". |
| 4 "current generation is degenerate and must be purified through struggle" -> Fascist marker | SUPPORTED | U3C2 "Cult of action and violence - struggle purifies"; "the nation is decadent and will be reborn". Wording drifts (generation / nation, degenerate / decadent). |
| 5 Ban on opposition parties -> Merely authoritarian | SUPPORTED | U3C3 "repression is shared"; reader must infer a party ban is repression. |
| 6 "Compulsory state-run bodies replacing independent unions, while employers still own the firms" -> Fascist marker | SUPPORTED | U3C2 "Corporatism - private ownership retained under state-directed bodies; independent unions abolished". |
| 7 "Leader who says parliament cannot represent the people because he already is the people's will" -> Fascist marker | SUPPORTED (conflict) | U3C2 "Leader principle - the leader intuits the true will; parliaments are theatre". U1C1 says personality cults travel freely; the distinction appears only in the answer's `w`. |

Totals: 7 SUPPORTED (two with conflicts), 0 WORDING-GAP, 0 UNSUPPORTED. Six of seven are near-verbatim card bullets: this drill tests matching, not discrimination.

### Unit 4 faulty claims (IDEOLOGY_ERR, reveal-only)

| Item | Verdict | Licensing card sentence, or what is missing |
|---|---|---|
| 1 "Sweden is a socialist country." | SUPPORTED | U2C1 "did ownership of productive assets actually change hands?" The fact that Sweden has private ownership is not in any card, but the skipped question (Q1) is. |
| 2 "Antifa is just as fascist as the fascists." | SUPPORTED | U1C1 "classify by how a movement behaves rather than what it claims"; U4C1 "Totalitarianism ... A degree of control, not a content". Needs outside knowledge of who Antifa is; the "name the question skipped" instruction (629) is not answerable from `w`. |
| 3 "Fascism is when the government does a lot of stuff." | SUPPORTED | U4C1 "Statism - A large, active state. A dial, not a doctrine." |
| 4 "The USSR and Nazi Germany were basically the same ideology." | SUPPORTED | U4C2 "They give opposite answers on both decisive questions." |
| 5 "Anyone who wants strong borders is a fascist." | SUPPORTED | U4C1 "Nationalism - ... Necessary but far from sufficient for fascism." `w` adds "border control exists in every state including socialist ones", a fact no card gives. |
| 6 "Universal healthcare is Marxism." | SUPPORTED | U2C1 "Public roads, central banks, militaries and food inspection exist in every capitalist state"; U2C2 "An analytical framework more than a programme". |

Totals: 6 SUPPORTED, 0 WORDING-GAP, 0 UNSUPPORTED. Caveat: nothing about populism, national populism or identity-egalitarianism (the unit's own content) is tested, and the drill records no answer.

### Unit 5 specimens (full determination; each step of the correct route checked)

"Survivors" = outcomes left after the accepted route, computed from the `keeps` arrays.

| # | Q2 (accepted) | Q1 (accepted) | Name | Survivors | Item verdict |
|---|---|---|---|---|---|
| 1 "soil of the fatherland ... ask for obedience" | Nation: SUPPORTED ("fatherland", "nation"; trap: "soil" taught as Race in item 2) | Not stated: WORDING-GAP (idea hinted only at U5C1 640 and in unrendered 659) | Fascism: SUPPORTED (U3C2 anti-liberal cluster, "parliaments are theatre", "struggle purifies") | 4 | WORDING-GAP |
| 2 "Wages appear to be payment for a day's work ..." | Class: SUPPORTED (U2C2 "sellers of labour", "surplus value") | Not stated: WORDING-GAP | Marxism: SUPPORTED (U2C2 "profit is unpaid labour, extracted as a matter of system rather than malice") | 6 | WORDING-GAP |
| 3 "national minimum wage, sectoral bargaining ... Business will continue to be privately owned" | Class: UNSUPPORTED (U2C3 calls social democracy "Not socialism"; no card says it answers "Class") | Private + heavy redistribution: UNSUPPORTED (never taught; passage literally says ownership stays private; literal "Private, untouched" leaves 0 survivors) | Social democracy: SUPPORTED (U2C3 "Tell: redistribution, floors and rights") | 2 | UNSUPPORTED |
| 4 "The state ... machine for coercion. We will not capture it ... assemblies" | Class: WORDING-GAP ("those who do the producing" = class, never glossed) | Worker-collective: SUPPORTED (U2C4 "workers' councils, communes or unions") | Anarchism: SUPPORTED (U2C4 "anti-capitalist and anti-statist at the same time") | 4 (marx, demsoc, anarch, mktsoc) | WORDING-GAP |
| 5 "Order requires that men know their place. The monarchy, the church ..." | Tradition & faith: SUPPORTED (U1C3) | Not stated: WORDING-GAP | Reactionary conservatism: SUPPORTED (U3C3 "restore throne, altar and hierarchy") | 1 | WORDING-GAP |
| 6 "The masses cannot arrive at revolutionary consciousness ... a disciplined party" | Class: WORDING-GAP ("masses" reads as People vs elite; "trade-union consciousness" untaught) | Not stated: WORDING-GAP | Marxism-Leninism: SUPPORTED (U2C2 vanguard party) | 6 | WORDING-GAP |
| 7 "Government's role is to enforce contracts, defend the borders ... free individuals trade" | Individual: SUPPORTED (keyword; U1C3) | Private, untouched: WORDING-GAP (nothing in the passage says "private"; silence in specimens 1, 2, 5, 6, 8, 9 means "Not stated") | Classical liberalism: WORDING-GAP (no card defines it; only "the liberal family", and the readout leaves one name) | 1 | WORDING-GAP |
| 8 "There are no classes in a healthy nation ..." | Nation: SUPPORTED (U3C2 "class struggle denounced as foreign and divisive, replaced by national unity"; trap: "classes" appears twice) | Not stated: WORDING-GAP ("arranged in their proper function" can read as corporatism) | Fascism: SUPPORTED | 4 | WORDING-GAP |
| 9 "Real people ... sold out by a corrupt establishment. We will take the country back" | People vs elite: SUPPORTED | Not stated: WORDING-GAP | Populism (thin): UNSUPPORTED (nothing says what counts as a visible host; "sold out ... take the country back" matches U4C3's national-populism Q3 row "The nation was sold out from above and outside; recover its strength") | 2 | UNSUPPORTED |
| 10 "We accept the market. We reject that the market should decide who receives medicine, education, and shelter." | Class: UNSUPPORTED (no group named, no card) | Private + heavy redistribution: UNSUPPORTED (passage states neither; own why says Q1 not settled) | Social democracy: UNSUPPORTED ("decommodified" untaught; U2C4 "the answer whenever someone accepts markets while moving ownership" points at Market socialism) | 2 | UNSUPPORTED |
| 11 "The old parties are finished ... Private enterprise will be directed toward national goals." | People vs elite or Nation: SUPPORTED (U4C3 Q2 row) | Private but state-directed: SUPPORTED (U4C3 Q1 row "directed toward national ends") | National populism: SUPPORTED (U4C3 four absences) | 1 (people) or 3 (nation) | SUPPORTED |
| 12 "Structural barriers rooted in race, gender ... equitable" | Race or identity, egalitarian: SUPPORTED (U1C4, U4C4) | Private + heavy redistribution or Private: SUPPORTED (U4C4 Q1 row "the demand is on distribution") | Identity-egalitarianism: SUPPORTED (U4C4 tell list, near-verbatim) | 1 | SUPPORTED |

Step-level totals across the 36 specimen steps (12 specimens x Q2, Q1, Name): Q2 steps 8 SUPPORTED, 2 WORDING-GAP, 2 UNSUPPORTED; Q1 steps 3 SUPPORTED, 7 WORDING-GAP, 2 UNSUPPORTED; Name steps 9 SUPPORTED, 1 WORDING-GAP, 2 UNSUPPORTED. In all: 20 SUPPORTED, 10 WORDING-GAP, 6 UNSUPPORTED.

Item-level specimen totals (an item counts as answerable only if every step is supported): 2 SUPPORTED (11, 12), 7 WORDING-GAP (1, 2, 4, 5, 6, 7, 8), 3 UNSUPPORTED (3, 9, 10). If "Not stated in the passage" is credited as answerable by plain reading of the option, specimens 1, 2, 5 and 8 also become SUPPORTED (6 SUPPORTED, 3 WORDING-GAP, 3 UNSUPPORTED).

### Totals

| Set | Items | SUPPORTED | WORDING-GAP | UNSUPPORTED |
|---|---|---|---|---|
| Unit 1 drill | 7 | 5 | 2 | 0 |
| Unit 2 drill | 5 | 3 | 2 | 0 |
| Unit 3 drill | 7 | 7 | 0 | 0 |
| Unit 4 faulty claims | 6 | 6 | 0 | 0 |
| Unit 5 specimens | 12 | 2 | 7 | 3 |
| All | 37 | 23 | 11 | 3 |

14 of 37 items (38%) cannot be answered and justified from the preceding cards alone. The distribution is the finding: the unit drills that sit next to a card pass because they match keywords or restate card bullets (21 of 25 pass), and the one set that uses the key's own wording fails (10 of 12). Teaching and testing use two different vocabularies.

## Vocabulary map

| Concept | Every variant, verbatim | Where (line) |
|---|---|---|
| The set of questions | "a small set of questions about ownership, allegiance and purpose"; "the key characters"; "The five key characters"; "one character at a time"; "The five questions" (unit title); "the key" | 480, 480, 482, 636, 475, 637 |
| Question order | "Q1" first in table; "answer Q2, then Q1"; step labels "1 Q2", "2 Q1", "3 ID"; "Step 1 ... (Q2)" (unrendered) | 484, 637, engine mountDet, 658 |
| Ownership question (Q1) | "Who owns the means of production?"; "Ownership of the means of production"; "social ownership or democratic control of the means of production"; "productive assets"; "who owns the factory"; "did ownership of productive assets actually change hands?" | 484, 653, 517, 518, 538, 519 |
| Q1 answers | "private / state / worker-collective / private-but-state-directed"; "Private, untouched", "Private but state-directed", "State or public ownership", "Worker-collective", "Private + heavy redistribution", "Not stated in the passage" | 484; 375-380 |
| Fascist/directed-private answer | "private-but-state-directed"; "Private but state-directed"; "Corporatism - private ownership retained under state-directed bodies"; "state-directed capitalism"; "directed private ownership"; "state-recognised blocs"; "Compulsory state-run bodies"; "Private, retained - but directed toward national ends" | 484, 376, 565, 578, 601, 594, 409, 606 |
| Social democracy | "Social democracy"; "welfare state"; "Not socialism under the ownership definition"; "Private + heavy redistribution"; "Transfers are not socialism"; "Not socialist"; "Floors, rights and transfers plus fiscal orthodoxy"; "Decommodifying" | 357, 518, 537, 379, 395, 401, 434, 462 |
| Anarchism | "Anarchism / libertarian socialism" (outcome); "Anarchism / libertarian socialism / syndicalism"; "Anarcho-syndicalism"; "Worker-collective"; "workers' councils, communes or unions"; "Federated worker councils"; "assemblies of those who do the producing" | 357, 541, 401, 378, 542, 396, 436 |
| Marxist family | "the Marxist and socialist family"; "Marxist family."; "Marxism"; "Marxist internationalism"; "the socialist family" | 494, 384, 356, 388, 514 |
| Unit of analysis (Q2) | "What is the primary unit of analysis?"; "Primary unit of analysis"; "Which unit of analysis is primary?"; "Primary unit" (tab); "primary unit" | 485, 652, 666, 666, 571, 579 |
| Race option | "race or identity"; "Race or identity" (x2 in key, with "hierarchical valence" / "egalitarian valence"); "Race / blood"; "Hierarchical", "Egalitarian" | 485, 367-368, 392, 506-507 |
| Nation option | "Nation"; "organic people / homeland"; "Nation as organism"; "organic nation"; "nation-as-organism" | 366, 559, 552, 416 |
| Individual option | "Individual"; "self-directing person"; "the liberal family"; "Classical liberalism" | 369, 496, 358 |
| Tradition option | "Tradition & faith"; "throne and altar"; "Throne and altar. Divine-traditional order"; "divine order"; "restored order"; "restoration" | 370, 575, 389, 486, 488, 442 |
| People vs elite | "People vs elite"; "real majority vs the few"; "ordinary decent majority ... small elite"; "pure people vs corrupt elite"; "Real people ... cosmopolitan elite"; "forgotten majority"; "corrupt establishment" | 371 (x2), 390, 593, 607, 464, 456 |
| Populism label | "Populism (thin - unresolved)"; "populism, and whatever host it has attached to"; "A thin ideology"; "thin populism onto a nationalist host"; "the populist pair" | 361, 498, 593, 604, 466 |
| What the answers are | "ideology"; "family"; "branch"; "formation"; "tool"; "outcome"; "specimen"; "case"; "passage" | 478, 494, 667, 627, engine detBlurb |
| Fascism's core | "Palingenetic ultranationalism"; "Palingenesis"; "myth of national decline and rebirth"; "rebirth myth"; "rebirth language"; "regeneration"; "purified through struggle"; "rebirth-through-violence"; "national decline & rebirth"; "regenerated nation"; "decadent"; "degenerate" | 557, 407, 552, 427, 386, 552, 407, 443, 486, 488, 557, 407 |
| Leader | "personality cults"; "Leader principle"; "leader who embodies the popular will"; "leader cult"; "leader-as-embodied-will"; "The leader principle. Not merely a dictator" | 479, 562, 552, 600, 466, 410 |
| Mobilisation | "Rallies ... They travel freely"; "Mass mobilisation - uniforms, rallies, paramilitaries, youth wings"; "mobilisation is not [shared]"; "mobilised masses"; "paramilitary mobilisation" | 479, 563, 573, 600, 466 |
| Authoritarian | "Not ordinary authoritarianism"; "authoritarian"; "Authoritarianism - A method of rule"; "Merely authoritarian"; "auth" | 572, 573, 591, 412, 404 |
| Q3/Q4/Q5 wordings | Q4 options "fulfil & expand / transcend / abolish / defend or restore"; "Q4 openly abolishes electoral legitimacy"; "Q4 defend-and-limit"; "Works inside elections; attacks courts, press and bureaucracy ..."; "Fulfil and expand it" | 487, 426, 450, 609, 620 |
| Which-error vocabulary | "Faulty claims"; "faults"; "statements that fail as analysis"; "category error"; "Classification by method" | 676, 628, 416, 418 |

## Key-wording coverage

Each key step and option, with whether the course taught that wording before the learner needs it (the key appears first at the end of Unit Four's drill, in Unit Five).

| Key element (line) | Taught before needed? | Evidence |
|---|---|---|
| Step label "Primary unit of analysis" (652) | partly | Asked at 485, never explained. |
| Option "Class" / "owners vs sellers of labour" (365) | partly | U2C2 525 "owners of capital and sellers of labour"; not glossed in Unit 1 where it is introduced. |
| Option "Nation" / "organic people / homeland" (366) | partly | U3C2 559 "Nation as organism"; "homeland" never. |
| Option "Race or identity" / "hierarchical valence" (367) | yes | U1C4 506. |
| Option "Race or identity" / "egalitarian valence" (368) | yes (late) | U1C4 507; U4C4 gives the first example, in Unit 4. |
| Option "Individual" / "self-directing person" (369) | no | Only "the liberal family" (496); no card explains it. |
| Option "Tradition & faith" / "throne and altar" (370) | partly | U3C3 575 uses "throne, altar" without defining. |
| Option "People vs elite" / "real majority vs the few" (371) | partly | U1C3 498, U4C1 593 (thin, host undefined). |
| Step label "Ownership of the means of production" (653) | partly | 484, 517; never exemplified. |
| Option "Private, untouched" (375) | no | Card says "private"; "untouched" and its contrast with "redistribution" are never taught. |
| Option "Private but state-directed" (376) | partly | 484 label; 565, 578, 601, 606 each explain it in a different words; first full explanation in Unit 3. |
| Option "State or public ownership" (377) | partly | 484 "state"; 517 "social ownership"; 398 "public and cooperative ownership". |
| Option "Worker-collective" (378) | yes | 484, 542. |
| Option "Private + heavy redistribution" (379) | no | Never taught as a Q1 option; contradicts 518 "Ownership. Not taxation". |
| Option "Not stated in the passage" (380) | no | Instruction only in unrendered 659; hinted at 640. |
| Step 3 "ID - Name it" and 13 names | partly | Marxism, Marxism-Leninism, Democratic socialism, Social democracy, Anarchism, Fascism, National populism, Identity-egalitarianism: yes. Market socialism: partly (one paragraph). Nazism: partly. Reactionary conservatism: partly (contrast only). Classical liberalism: no card. "Populism (thin - unresolved)": partly; "unresolved" unexplained. |
| Readout "13 of 13 left" strip | no | The explanation lives in unrendered 662; U5C1 (637) explains it in one sentence. |
| Scoring "name" vs "route" | yes (U1C1 481, U5C1 639) | But specimen 3 shows route can be unreachable (see Unit Five item 4). |

## Under-explained ideas

| Idea | What the lesson says now | What a newcomer still would not understand |
|---|---|---|
| Primary unit of analysis | A question and six nouns (485, 494-499) | What it means for a text to "take" a unit as primary, how to find it in a paragraph, and why class and nation are rival answers. |
| Means of production / ownership | Two uses of the phrase, "productive assets" (484, 517-519, 535) | What things count (factories, farms, shops, banks), who "owns" them in each system, and why ownership rather than taxes decides. |
| Q3, Q4, Q5 | One-line questions with option lists (486-488); table rows in U4C3/U4C4 | What "engine of history", "transcend", "pluralist competition" mean, when to ask them, why the key ignores them. |
| Valence | Two-row table (504-508); "in which direction" (503) | What each looks like in a real sentence; why the same noun "race" gives opposite families; the egalitarian side is not drilled until the final unit. |
| Surplus value / Marxism | One bullet (526) in a card with eight other undefined terms | How profit is "unpaid labour" with a number, and why this makes the critique about the system not a bad boss. |
| Democratic socialism vs social democracy | Two paragraphs and a note (535-539) | A same-policy-different-owner example; which Q1 option each picks. |
| Anarchism vs Marxism | "anti-capitalist and anti-statist ... No other family holds both" (543) vs "stateless" (527) | Why Marxism, which also ends stateless, is not anarchism (the route). |
| Market socialism | One paragraph (545) | What a worker-owned firm competing in a market is, and how it differs from social democracy. |
| Classical liberalism | Nothing; "the liberal family" (496) | What the ideology believes, in what sense "classical", and that "liberal" in US usage differs (681 caveat only). |
| Fascism as a cluster | A 70-word sentence (552) and ten 12-word bullets (557-566) | How the markers sound in a speech, how many make a text fascist, how fascism sits in the key. |
| Nazism vs fascism | "variant where biological race ... is the primary unit" (571) | How to choose between them when both survive; why Nation and Race can be the unit of analysis for what is "one" ideology. |
| Reactionary conservatism | One contrast sentence (575); "throne, altar" | What "restore" means in practice, how it differs from ordinary conservatism, why "reactionary" is a neutral label. |
| Corporatism | Three one-liners (565, 594, 409) | What it looks like in daily life (a state union replacing independent unions) and why it is "not rule by corporations". |
| Populism as "thin" with a "host" | One table row (593); "host" used at 498, 604 | What thin means, an example of a left and a right host, how to tell a host is present (specimen 9). |
| National populism | Q1-Q5 table and four absences (605-612) | What it sounds like when it stays inside elections; how it differs from thin populism and from fascism. |
| Identity-egalitarianism | A table of abstract phrases (616-624) | A concrete example of a structural barrier, the meaning of equity vs equality, and what "critical theory" is. |
| Horseshoe | A card title (599); the error is described but not named | What the "horseshoe" theory says, and why it is attractive. |
| Withholding (over-classification) | One note (640), one specimen why (458), one fals (459) | When silence means "not stated" vs "private", what evidence is enough to name a family, and why withholding is correct. |
| Why route is scored | "a label you cannot derive from the key will not survive an unfamiliar case" (verdict text) | What the route is for, given 8 of 12 routes do not narrow to one outcome. |
| How to use this on your own text | Nothing on the learner path (683 in caveats only) | What to look for in a real speech, what to ask, what you cannot conclude. |

## What a good version of this subject's units would contain

Evidence base applied: concept before label, a worked example before practice, practice in the same words as teaching, feedback that names the reasoning, one vocabulary. No length limit: the owner has set none, so each idea gets the paragraph or two it needs.

### Unit One - What an ideology claims (rework)
- Opening card: what you will be able to do ("read a short passage, say whose side it speaks for and who it says should own the economy, and use those two answers to narrow the field") and one honest line that the key asks two questions in the order Q2 then Q1, with three more questions used later as tie-breakers.
- A card on the first question in plain words ("Whose side is this text on?") built from one event told five ways (for example, a factory closing described as workers vs owners, as an attack on the nation, as an individual's bad choice, as a loss of tradition, as the people betrayed by elites), with the cue words highlighted and the technical name ("primary unit of analysis") given after.
- A card on the second question: what a "means of production" is (factory, farm, shop, bank, railway), four possible owners, and the key's six option names exactly as the key words them, including when "Not stated in the passage" is the correct answer and why redistribution is a separate question.
- A worked example: one passage walked through Q2, Q1, the crossed-off readout, and what is left; plus one passage where the key stops at several survivors and what the reader does next.
- Valence with two short passages about race pointing opposite ways and the cue words in each; then a drill with both.
- Drill rebuilt with Q2 items, Q1 items and valence items; options use the key's own wording ("Race or identity, hierarchical valence"); each explanation quotes the cue words in the passage and names the option, with no untaught terms.

### Unit Two - Same bakery, six answers
- Open with what the unit teaches: all six outcomes answer Q2 with "Class"; Q1 and a second question separate them. Fix the count ("six", not "at least four").
- One running example (a bakery or a rail line) treated six ways: left private and taxed (social democracy), voted into public ownership (democratic socialism), run by the party (Marxism-Leninism), run by an assembly of bakers with no state (anarchism), run as a worker co-op that competes in the market (market socialism), explained as profit from unpaid labour (Marxism).
- Surplus value with numbers; definitions of vanguard, democratic centralism and dictatorship of the proletariat, one sentence each.
- Resolve the Marxism/anarchism overlap (same destination, different route) and say which Q1 option each picks.
- Rewrite the key so Q1 is only about ownership, add "Private + heavy redistribution" only if it is taught, or remove it.
- Drill uses the taught names (Anarchism, not "Anarcho-syndicalism"), includes Marxism and Market socialism, and has a "none of these" option whose meaning is taught.

### Unit Three - Fascism and its look-alikes
- Start with what a fascist movement looks like in plain words and a short example passage; give the one-sentence definition after.
- Group the ten markers into four paragraphs (what it says about the nation; how it treats democracy and opponents; how it organises people; the economy), each with an example sentence and a plain gloss, dropping or deferring "palingenetic" and the academic surnames.
- Settle the contradictions explicitly: which behaviours all dictatorships share (censorship, secret police, party bans) and which are specific (rebirth myth, active mass participation, the leader as the people's will), so rallies and leader cults stop being both diagnostic and not.
- Say where fascism sits in the key (Q2 Nation; Q1 directed or not stated) and teach the tie-break against national populism and reactionary conservatism with a three-way comparison and an example each.
- Keep the "Nazis were socialists" card, but write Q1 in the key's words ("Private but state-directed") and say how to choose Nazism over fascism when Race survives.
- Drill: cluster items ("this speech has these three features; fascist or not, and why") and three-way tie-break items, in addition to the marker sort.

### Unit Four - Words that are not ideologies, and two modern mixtures
- Split into two units. First: the seven terms, each with a plain sentence and an everyday example, including a definition of the horseshoe idea.
- Second: national populism and identity-egalitarianism, each with a passage, the words that answer Q2 and Q1, a worked key walk-through, how it differs from its neighbours (fascism, thin populism, Marxism, classical liberalism), and "thin"/"host" explained with a left and a right example.
- Faulty claims: choose the fault from options before the reveal, include claims about populism and identity-egalitarianism, and have each explanation say which question or marker was skipped in the key's words.
- A transfer card: when you hear "fascist", "socialist", "woke" or "globalist", the two or three questions to ask back.

### Unit Five - Running the key
- Honest orientation: the two steps in order, what survives, how to break ties with the same Q3/Q4 questions the unit taught, when silence means "not stated", and when the right answer is "unresolved".
- A fully worked specimen on screen before the first attempt.
- Specimens rebuilt so every accepted route is derivable from the taught rules: remove or fix specimens 3 and 10 (the literal answer must survive), add specimens for Nazism, democratic socialism and market socialism, and make the name step offer only the survivors.
- State the right number of withholding specimens, and add feedback that explains why "Not stated" is right or wrong in each case.
- Render the existing `intro` and `determinationIntro` text, rewritten, where the learner reaches the key.
- Close with a transfer exercise: take a paragraph of your own (a speech or article), answer the two questions, say what you cannot tell.
