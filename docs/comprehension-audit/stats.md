# Statistical Claims - comprehension audit

Scope: `public/index.html` lines 1562-2022 (data), plus engine lines 3480-3600, 3786-3902 and 3900-4240 for how it is shown. Judged as a smart adult who has never studied statistics, reading one card at a time on a phone. Line numbers are `public/index.html`. Verdict labels in the simulation: SUPPORTED, WORDING-GAP (idea taught, but not in the words the option or step uses), UNSUPPORTED (never taught).

## Verdict

Statistical Claims does not teach and then apply. Eight of its 14 faults are taught by a single table row (a definition clause plus an 11.5px monospace "tell") and three of its four "sound" states by one clause, with no everyday example; no card ever walks a case through the key; and the key's wording (codes S1/A1/M2/K1, "frame", "n", the eight second-level question labels) is met for the first time inside the scored determination, in words the lessons never used. The practice then measures recall, not understanding: 10 of 26 drill items and 17 of 18 specimens re-tell a scenario the learner has already been shown with its answer, and the key itself contradicts the lessons in places (sound claims have no gate option; two keyed answers break the "earliest stage" rule). Root causes: compression (one-line explanations), two vocabularies (lesson words versus key words, with colliding codes), no bridge from idea to key, and recycled examples that make the scores look better than the learning is.

Measured result: 51 practice items checked, 26 not answerable from the cards that precede them (5 UNSUPPORTED, 21 WORDING-GAP). Of the 72 route-and-name decisions inside the 18 specimens, 31 are not taught in the words the learner must pick (28 WORDING-GAP, 3 UNSUPPORTED). Only 4 of 18 specimens are fully answerable from the cards. Findings below: 71 (33 HIGH, 32 MED, 6 LOW).

## Findings by unit

Format: **number [rubric tag · severity]** quote (line) - why it blocks learning - what the reader would need instead.

### Course-wide and key-level

**W1 [R3 · HIGH]** The course teaches stages "S1 Who got counted? / S2 What does the number count? / S3 What is it set against? / S4 What does it say caused what?" (1849-1852). The key then uses `S1` for something else: the gate "Where does the claim first break?" (1585), and the learner sees `S1 · Where does the claim first break?` on screen (engine 4056). The key's other codes are `A1 A2 M1 M2 C1 C2 K1 K2` (1598-1649), none of which any card introduces. Worse, the course reuses the letters A-D inside each unit's table with a different meaning each time: `A` is Survivorship (1873), Proxy failure (1897), No comparison group (1920) and Confounding (1943); `C` is Non-response (1875), Detection effect (1899), Base-rate neglect (1922) and Regression to the mean (1945). So "A1" in the key (the first sampling question) shares its letter with the table letter "A" of four different units, and "C1" (the first comparison question) with the table letter "C" of four different units. A reader cannot tell a stage, a fault and a question apart. They need no codes at all: say each question in words and use the same words in the lesson, the key and the drill.

**W2 [R1 · HIGH]** The course opening is not honest about what the key asks. Unit One says the course "walks the pipeline in order and asks one question at each stage" (1845). The key asks three questions per case: the gate, then two questions that change by stage (1596-1656); the app's own subject screen says "3 questions" (engine 3895-3902). The second-level questions are phrased "How did cases get into the data" (1598), "Picture who is missing - what changes" (1604), "What is the number a count of" (1613), "What would restore the picture" (1634), "What else could produce this exact pattern" (1643) and "What would settle it" (1649). Only two echo a card: `M2` repeats the Unit Three counterfactual question almost word for word (1894 / 1619) and `A2` echoes the Unit Two card title "The move: picture who is missing" (1868). The other six are first met in the drill. The only text that explains Step 1 to 4 and the readout, `determinationIntro` (1986-1995), is never displayed: it is defined for all seven subjects and referenced nowhere in the render code (grep of lines 3480+ finds no use of `determinationIntro`, `intro` or `tabs`). The reader needs, at the start of the course, a plain list of the three questions the key will ask and which unit teaches which.

**W3 [R4 · HIGH]** No card anywhere walks a case through the key. The nearest thing is Unit Seven, one card of three short paragraphs beginning "Now the stages come without labels." (1973). There were never labels. The reader's first experience of the key is 18 specimens scored on route (72 decisions). They need one complete worked example per stage, narrated: the claim, the gate answer and why, each question with the option chosen and why, the name.

**W4 [R4 · HIGH]** The gate asks the learner to name where the claim "first breaks" before any stage-specific question has been asked. To answer, the learner must already know which fault they are looking at, and no card teaches how to choose a stage from the claim's surface features (a list of surviving things; a number that was a target; a percentage with no baseline; a "so X causes Y"). The first-break rule itself (1855-1858) is never practised: nearly every drill item is written as a single-fault case, and where two faults are present (V1 item 3, 1664; specimens 12 and 17, see U7-2) the rule is shown only in the feedback ("Break at the earliest stage.", 1665) or contradicted by the keyed answer. They need stage cues per stage and two or three claims that are guilty at several stages with the earliest named and the others explained.

**W5 [R3 · HIGH]** Every fault is named in four different ways before the learner meets it in use: outcome name (1564-1583), the table label in the course (1873-1945), the Question 1 option (1599-1654) and the Question 2 option. For relative risk alone: "Relative risk without the absolute" (1575), "Relative risk alone -> supply the absolute numbers" (1921), "A change, given only as a percentage of itself" (1629), "The absolute numbers behind the percentage" (1636). Question 1 and Question 2 for a given fault are two descriptions of the same answer: 16 of the 18 outcomes are already uniquely identified by their Question 1 option (only "Everyone in the frame was counted", 1602, leaves two), so the second question adds no information and doubles the vocabulary to learn (the readout also shows the single remaining name after question one, engine 4094). The learner passes by matching the option phrase to the case, not by reasoning. They need one phrase per idea, used identically in the lesson, the key, the drill options and the feedback.

**W6 [R9 · HIGH]** Eight of the 14 faults are explained by one table row each, no everyday example, no worked numbers: Survivorship (1873), Self-selection (1874; card 4 covers only the sample-size misconception), Non-response (1875), Definition changed (1898), No comparison group (1920), Relative risk (1921), Confounding (1943), Reverse causation (1944). Three of the four sound states (sampling, measure, comparison) get one clause in Unit One (1862) and no row. The "tell" carrying the actual mechanism sits in `.tell` (CSS 190): 11.5px monospace, accent colour. For these ideas the smallest text on the card is the only explanation. They need a short paragraph and a concrete example per idea, in normal body type.

**W7 [R2 · HIGH]** Undefined jargon, codes and academic name-drops (each first appears at the cited line): "pipeline", "stage", "smell" (1845-1846); "specimen", "sound option", "clean" (1860); "random frame", "like-for-like contrast", "randomised assignment" (1862); "population", "window" (1873); "frame" (1875, 1602); "denominator", "rate", "league tables", "clusters ... expected clumping of random points" (1876, 1880); "n", "random error", "systematic error", "precise estimate of the wrong quantity" (1885); "counterfactual" (1892); "proxy", "Goodhart", "load-bearing approximations", "series", "ruler" (1897-1904); "incidence" (1692), "mortality", "downstream measure", "advanced-stage presentations" (1908); "indolent tumours" (1785); "baseline", "absolute", "relative risk" (1921); "prevalence" (1922); "conditional probability" (1926); "aggregate" (1923), "case mix" (1710, 1810), "severity bands" (1811); "dose-response" (1820, 1954), "ascertained", "differential dropout" (1836, 1953), "blinding", "allocation concealed" (1833), "arm", "placebo" (1670), "by construction" (1952), "observational" (1954); "instrumental variables", "inverse-probability weighting", "p-hacking", "garden of forking paths", "multiple comparisons" (2015, 2018). The reader needs each term replaced by a plain phrase or defined in one sentence with an example at first use.

**W8 [R8 · HIGH]** The practice repeats what the learner has just been shown. 10 of 26 quick-drill items reuse a card's own example (V3 items 1, 2, 5; V4 items 1-4; V5 items 3 and 5, plus item 1 whose answer variable the card tell names, "Income", 1943). 17 of 18 specimens re-tell a drill scenario (13 with the same numbers): funds 9.4% (1748 = 1676), 78% poll (1753 = 1678), 4,000/600/88% (1758 = 1680), labour survey (1768 = 1684), four-hour 95%/68% (1773 = 1690), recording standard 40% (1778 = 1694), thyroid fifteen-fold (1783 = 1692), reservoir (1788 = 1696), 99% test / 1 in 10,000 (1793 = 1704), bacon 18% (1798 = 1706), nine in ten / ninety percent improved (1803 = 1708), 3.1% vs 1.9% hospitals (1808 = 1710), both cities (1813 = 1712), music lessons (1818 = 1718), gym (1823 = 1720), worst-scoring clinic (1828 = 1726), 40,000 vaccine trial 8 vs 162 (1833 = 1724 = 1670). Only the kidney-cancer districts (1763) are new. High scores here prove recognition of seen cases, not ability on an unseen claim. Nowhere is the reader shown how to use this on something of their own: what to look for in a headline, an ad, a work metric, a post. The best application guidance in the subject sits in the hidden "Where this key stops" caveats (2012-2020): "Naming a fault is not refuting a claim" and "Applying the key selectively to claims you dislike is the failure mode this course is most likely to produce." They need fresh claims in the key, and a closing "what to ask when you meet a claim" card.

**W9 [R6 · HIGH]** Route feedback does not teach the route. When a step is wrong the engine says only "Step A1 wanted Only the ones that lasted are visible" (engine 4162, 4165): it names the option, never why this case maps to it. The specimen `why` text explains the fault in general, mostly in new words ("indolent tumours", "dose-response", "ascertained", "allocation concealed", 1785, 1820, 1833, 1836) and only occasionally echoing an option, and the errDrill feedback uses codes the lessons never introduced ("(K1)" 1734, "A1 and C1 both fail" 1742). The learner who misses a route learns the answer text but not how to reach it. They need feedback that quotes the case sentence, the option, and the card idea that links them.

**W10 [R5 · HIGH]** The key cannot express "nothing is wrong" at the gate, while the lessons promise it. Gate options are four stages only (1586-1593). V1's fifth option is "Nothing - the claim holds" (1658), Unit One says "Every stage in this course has a sound option" (1860), and the four sound specimens are routed through an arbitrary stage: sampling (1769), measure (1789), compare (1814), cause (1834). The same randomised-trial case is V1 item 6 (1670: answer "Nothing - the claim holds") and specimen 18 (1833: route S1 must be "What it says caused what"). A learner who is right by the lesson is wrong by the key. They need either a gate option for "no break found" or a taught rule for which stage to name for a clean claim.

**W11 [R3 · MED]** Simpson's paradox (compare) and confounding (cause) are separated by no taught criterion. The repair is the same operation in both: "Splitting the total back into its subgroups" (1637) and "Holding the third variable fixed" (1650). In specimen 13 severity is "something driving both sides at once" (the Unit Five option, 1644). Specimens 13 and 15 differ in topic, not in any kind of reasoning the cards teach. The reader needs the discriminating test stated: Simpson's is a reversal when the groups are split; confounding is an outside factor explaining an association.

**W12 [R1 · MED]** The subject screen says "3 questions narrow 18 tools to one." (engine 3895-3902). The 18 outcomes are faults and four sound states, not tools; "tools" is generic engine wording. "3 questions" contradicts the course's "one question at each stage" (1845).

**W13 [R2 · LOW]** British-flavoured vocabulary a US reader (the app also teaches US Civics) would have to decode: "trust" (1773), "constabulary" (1778), "force" (1694), "999 call" (1776), "pupils" (1682), "rashers" (1706), "labour force survey" (1684), "district general" (1808), "tuition" (1818), "league tables" (1880).

**W14 [R7 · LOW]** Table codes occupy a column on a 360px screen without informing: the `th` letters A-D, S1-S4 (CSS 196-199). Every table row packs a bold label, a definition and a monospace tell into one cell, so the card is a list of captions rather than an explanation.

### Unit One - The pipeline (cards 1842-1862; drill V1, 1664)

**U1-1 [R1 · HIGH]** The unit opens with a thesis, "Almost nobody lies with statistics by inventing a figure." (1843), not with what the reader will be able to do, and contains no claim example in any of its four cards. Four cards of framework before one concrete case. They need an opening that says "by the end you will ask these three questions of any claim" and a first claim audited in plain words.

**U1-2 [R3 · MED]** "Run them in that order. They are not a menu." (1854), but the key's first step is a menu: choose one of four stages (1585-1593). Both cannot be true; the reader is told to run stages in order, then asked to pick one.

**U1-3 [R9 · HIGH]** "Stop at the first break" (1855-1858) carries the key's central rule in two paragraphs and a warning, with no example. A newcomer still would not understand how a claim can be wrong at three stages at once, why downstream stages are "contaminated", or how to decide which stage is earliest when two both look broken.

**U1-4 [R5 · HIGH]** V1 tests classification into four stages after the unit has taught none of the fault content. Item 1 needs survivorship (Unit Two), item 2 needs the target/proxy idea (Unit Three, 1897-1905), item 4 needs a definition shift (Unit Three, 1898), item 6 needs the sound shape (one clause, 1862). Only items 3 and 5 can be answered from the four stage descriptions. The drill is testing later units' content.

**U1-5 [R6 · MED]** V1 item 5 feedback: "The counting and the comparison are fine." (1669) asserts earlier stages pass without a criterion; a coffee-drinkers-versus-non-drinkers comparison is not obviously like-for-like. V1 item 1 feedback uses "eligible" (1661), a new word.

**U1-6 [R7 · MED]** "specimen" (1860) and "roughly one specimen in five is clean" are forward references to the final unit; "sound option" (1860) is used before any outcome has been named.

**U1-7 [R9 · MED]** The stage table (1849-1852) is the only definition of each stage: "the definition, the instrument, the effort spent looking" and "the contrast, the denominator, the base rate" each contain three undefined nouns, in a table cell.

### Unit Two - Who got counted (cards 1868-1886; drill V2, 1676)

**U2-1 [R2 · HIGH]** Survivorship: "the population was defined at the end of the window / The failures were removed by the act of assembling the data." (1873). "Population" and "window" are undefined, and no everyday example appears in any card. A newcomer cannot picture it. They need one scenario told in full (for example, a list of companies that still exist today and what is missing from it) before the label.

**U2-2 [R3 · HIGH]** Non-response versus self-selection: "Self-selection - subjects put themselves in" (1874) and "Non-response - the frame was right, the returns were not" (1875). In both, people chose to answer. "Frame" is never defined (1862, 1875, option 1602), so the discriminator (a defined group was invited; versus an open call) is not available to the reader. The employee survey (1758 / 1680) fits both phrases.

**U2-3 [R2 · HIGH]** "increasing n reduces random error while leaving the systematic error exactly where it was. A large biased sample is a precise estimate of the wrong quantity." (1885). Five undefined terms in two sentences, in the card meant to correct the most common misconception. The idea is: asking many of the wrong people gives you a very confident wrong answer.

**U2-4 [R3 · MED]** Small-number volatility sits under "Who got counted" (gate sub: "which cases are in the data at all", 1586) while the card says "no bias at all, just arithmetic" (1878) and the compare gate's sub also claims "the denominator" (1590). Route scoring forces `S1 = sampling` for specimen 4 (1764).

**U2-5 [R2 · MED]** Card 3 (1880): "rate", "denominator", "league tables", "clusters ... the expected clumping of random points" unexplained; "Up 200%" (1882) is also exactly the Unit Four fault "a change, given only as a percentage of itself" (1629); the errDrill claim (1735) then says "small-number volatility", the opposite of what a Unit Four reader would answer.

**U2-6 [R4 · HIGH]** Card 1's "The move: picture who is missing" (1868-1870) is the unit's central skill and has no worked example: no one is ever pictured. "describe the cases that are not in front of you, then ask what they would do to the conclusion" (1870) does not say how. The A1/A2 question wording (1598, 1604) is first seen in the determination.

**U2-7 [R5 · MED]** V2 item 5 tests "Sampling is sound" (1684), which Unit Two never teaches (it appears only as a clause in Unit One, 1862, and as an option). The learner must also reconcile it with card 4's "Size does not fix selection" while the item has 40,000 households.

**U2-8 [R9 · MED]** Self-selection and non-response get one row each. Whether the reader can tell "answer rate" from "who chose to answer" is not addressed.

**U2-9 [R6 · LOW]** V2 item 5 feedback ends "learn the shape so you can miss it" (1685), unclear; V2 item 1 "The dead are exactly the bad ones" (1677) uses a metaphor for closed funds.

### Unit Three - What the number counts (cards 1892-1909; drill V3, 1690)

**U3-1 [R1 · LOW]** The best-aligned opening in the subject: the counterfactual question is stated and reappears word for word as `M2` (1894 / 1619). But `M1`, "What is the number a count of" (1613), is not taught as a question, and the unit says "One question does most of the work here" while the key asks two.

**U3-2 [R2 · HIGH]** The proxy idea is told in metaphor and name-drop: "Goodhart" (1897), "load-bearing approximations" (1902), "The improvement is real - as a measurement of the measurement." (1904). The plain version: when people are judged on a number, they work on the number, not the thing it was meant to show.

**U3-3 [R2 · MED]** Detection card (1908): "diagnoses", "deaths", "downstream measure", "advanced-stage presentations", "incidence" (the V3 item and specimen, 1692, 1783), "indolent" (1785). The card does not explain why flat deaths mean the extra cases were "mostly harmless" (1908); the idea of finding cases that would never have caused harm is not set up.

**U3-4 [R3 · HIGH]** "Definition or instrument changed" (1571, option 1688) is taught as "Definition changed - same word, new counting rule" (1898) and Question 1 as "The same word, counted under a new rule" (1615). The "instrument" half (a changed gauge, test or device) is never taught or exemplified in a card; "threshold" first appears in `M2` (1621); "series" is undefined.

**U3-5 [R9 · HIGH]** Definition change has one table row and no card. The mechanism (a rule that counts each victim separately turns one case into three) is only in the feedback. A newcomer still would not understand how the same crime can produce a bigger number, nor how to spot a rule change in a claim.

**U3-6 [R5 · MED]** V3 item 4 tests "The measure is sound" (1696); the unit never says what a sound measure looks like, and `M1`'s "The thing itself, counted the same way throughout" (1617) is untaught.

**U3-7 [R8 · MED]** V3 items 1, 2, 5 repeat card examples (waiting times, thyroid fifteen-fold, test scores: 1903, 1908; 1690, 1692, 1698).

**U3-8 [R6 · MED]** V3 item 1 feedback: "admissions cluster at the boundary and waiting moves to places where the clock has not started" (1691). No card teaches this mechanism; card 3 says only "effort flows to the number rather than the thing" (1904).

**U3-9 [R3 · LOW]** Outcome name "Proxy failure / Goodhart" (1570), drill option "Proxy failure" (1688), table "Proxy failure" (1897), question option "A stand-in for the thing anyone actually cares about" (1614).

### Unit Four - What it is set against (cards 1915-1932; drill V4, 1704)

**U4-1 [R9 · HIGH]** Relative versus absolute risk, the most useful idea in the subject, is one table row: "18% of a 6% baseline is one extra case per hundred." (1921) in the monospace tell. "Relative", "absolute", "baseline" are never defined and the arithmetic (6% plus 18% of 6%) is never shown, so a reader cannot apply it to a new percentage.

**U4-2 [R3 · HIGH]** Base rate has five names across the unit and key: "Base-rate neglect" (1574), "supply the prevalence" (1922), "A rate, without how common the thing is to begin with" (1630), "How common it is in the population to start with" (1637). `C1` calls test accuracy "a rate" though no card does, and "rate" in Unit Two means cases per population (1880).

**U4-3 [R9 · HIGH]** Simpson's paradox has no numbers: "Its combined mortality is worse than the district general even when it is better in every category." (1931). The base-rate card counts bodies; the Simpson card asserts a reversal. A newcomer cannot see how a total can reverse every subgroup, and "Both numbers are correct; only one answers the question a patient is asking" does not say which.

**U4-4 [R2 · MED]** Card 3 opens "Conditional probability defeats intuition" (1926) and then uses "99% accurate" (1927) without saying what that means (the test catches 99% of people who have it and wrongly flags 1% of those who do not). The specimen defines it (1793); the card does not.

**U4-5 [R5 · HIGH]** V4 item 5, "The comparison is fair" (1712), needs a definition of fair that no card gives: "like-for-like contrast" (1862) is a three-word mention, `C1`'s "A like-for-like group" (1632) is untaught, and the criteria the feedback gives ("Same denominator, same window, same definition", 1713) first appear after the answer.

**U4-6 [R3 · MED]** Four phrasings for the stage's question: "What is it set against" (1851, 1627), "What each one is missing" (1918), "What is missing from the contrast?" (V4 prompt, 2001), "What would restore the picture" (1634).

**U4-7 [R8 · HIGH]** V4 items 1-4 reuse the card's numbers and cases verbatim: 99% / 1 in 10,000 (1704 = 1927), 18% of 6% (1706 = 1921), ninety percent (1708 = 1916), referral hospital (1710 = 1931).

**U4-8 [R7 · MED]** The heaviest unit (four unrelated ideas, two of which are hard) has the thinnest explanation for two of them: no-comparison-group and relative-risk get a row each, base rate and Simpson's get a card each.

**U4-9 [R9 · MED]** "Most conditions improve on their own; that rate is the floor." (1920): why conditions improve on their own, and why that makes "ninety percent improved" meaningless, is the entire case for a control group and gets one line. "university admissions, batting averages, treatment success by clinic" (1930) are named as Simpson examples with nothing explained.

### Unit Five - What caused what (cards 1938-1954; drill V5, 1718)

**U5-1 [R2 · HIGH]** Confounding is explained by "a third thing drives both" (1943) and the fixed phrase "Name the variable. "Income" is an argument; "confound" is not." The only example is one word in a tell. Reverse causation is "the effect is producing the cause" (1944): abstract, no everyday example in any card, and a newcomer cannot tell which of two things is "the effect".

**U5-2 [R4 · HIGH]** `K2` "What would settle it" (1649) asks for the fix, which is untaught for two of three faults: "Holding the third variable fixed" (1650) never appears in a card ("adjusted for" appears once, 1954), and "Watching an equally extreme group left alone" (1652) is taught in no Unit Five card (Unit Four's "untreated group", 1920, is the nearest, and there it is the fix for a different fault). Only reverse causation has its fix ("Settled by sequence", 1944).

**U5-3 [R9 · MED]** Regression to the mean: "Measure again and that component averages out." (1948). A newcomer still would not understand why a second measurement would be less extreme; there is no small numeric example, and the pilots example is a warning box after the concept (1950).

**U5-4 [R2 · HIGH]** The randomisation card (1952-1954): "randomisation", "by construction", "unmeasured third variables", "arms", "blinding", "differential dropout", "ascertained more keenly", "observational", "dose-response". Nine undefined terms; "random assignment" is never explained in plain words (people sorted by a coin flip, so the two groups are alike on average).

**U5-5 [R5 · HIGH]** The vaccine case says "Forty thousand volunteers were randomly assigned" (1833; V5 item 4 at 1724; V1 item 6 at 1670). Unit Two teaches that people who put themselves in are a fault ("Self-selection - subjects put themselves in", 1874) and warns about "forty thousand" who "opted in" (1886). No card separates random sampling from random assignment, so a careful reader has a legitimate objection the key marks as wrong.

**U5-6 [R3 · MED]** The sound-cause state is four phrasings: "The causal claim is supported" (1582), "Nothing plausible - the design rules the alternatives out" (1647), "Already settled - randomised, or the alternatives are closed off" (1653), and the card's "closes off confounding and reverse causation by construction" (1952).

**U5-7 [R9 · MED]** The note "A named confound that has been measured and adjusted for, a dose-response relationship, and a plausible mechanism together can carry a causal claim." (1954) is the only guidance on observational claims that pass, and the key has no route for it (`K1`'s sound option requires "the design rules the alternatives out", 1647).

**U5-8 [R6 · MED]** V5 item 2 (gym, 1720): confounding fits equally well (health-conscious people go to the gym and miss fewer days), but the feedback names one answer only. V5 item 1 feedback gives an instruction rather than the reasoning: "Name the variable and say which way it pushes - do not just say confound." (1719).

**U5-9 [R8 · MED]** V5 items 1, 3, 5 reuse card cases: income (1943), pilots (1950), "we treated the worst cases and they improved" (1950 = 1726).

### Unit Six - Claims that engage nothing (cards 1960-1966; faulty-claims drill, 1731-1743)

**U6-1 [R5 · HIGH]** "Some claims cannot be run through the key at all." (1961). The key can run them: "Nine out of ten dentists recommend it." (1731) matches `C1`'s "Nothing - a single number with no contrast" (1628), and the diet claim's own feedback runs the key ("A1 and C1 both fail", 1742). The unit introduces a second category the key does not have, and the feedback contradicts the claim of the unit.

**U6-2 [R5 · HIGH]** Two items test ideas no card teaches: "The average household has 1.9 children, so most households have about two." (1737: "An average is not a typical case") and "It is a peer-reviewed study in a top journal, so the finding is settled." (1739: "Provenance is not design"). Neither appears in any lesson.

**U6-3 [R6 · MED]** Feedback uses untaught codes and idiom: "questions to ask (K1)" (1734), "A1 and C1 both fail" (1742), "small-number volatility wearing a suit" (1736). "Three incidents instead of one" (1736) is stated as fact; the claim says only "up 200%".

**U6-4 [R9 · MED]** "These are not hard cases. They are the most common ones" (1962) is asserted. The "two symmetrical errors" (credulous and corrosive, 1964-1966) get two paragraphs; the drill has no scoring (the learner is told "State the fault out loud or in writing", engine 4022; the app records only that the claim was seen).

**U6-5 [R8 · MED]** This is the nearest the subject comes to real-life claims, and it comes last and unscored. The useful questions ("Ten of whom, asked what, against which alternative?", 1732) are in the feedback, not a card.

### Unit Seven - Full determination (card 1972-1975; 18 specimens, 1748-1836)

**U7-1 [R4 · HIGH]** One card introduces the whole scored key: "Read the claim, decide where it first breaks, work the two questions under that stage, and name the fault." (1973). The key's wording, the readout and the route-scoring rule were never practised. 14 of 18 specimens contain at least one step not taught in the words the learner must pick (see simulation).

**U7-2 [R5 · HIGH]** The keyed answers break the lessons' "earliest stage" rule in at least two specimens. Specimen 12 says "Nine in ten of the patients who completed our twelve-week programme" (1803); only completers are counted (a survivorship fault at the first stage), yet the route demands `compare` (1804). Specimen 17 and V5 item 5 (1828, 1726) select the worst-scoring patients and treat them; the feedback says "Without an equally extreme untreated group the treatment cannot be credited" (1727), which is exactly the Unit Four fault "No comparison group -> supply an untreated group" (1920), an earlier stage than `cause`. `K2`'s "Watching an equally extreme group left alone" (1652) and `C2`'s "A group that did not get it" (1635) are the same repair under two outcomes.

**U7-3 [R5 · MED]** Specimens 15 and 16 (music, gym) route through `cause`, though whether the two groups are like-for-like (stage three) is exactly what is in question; the lessons give no criterion for deciding the comparison is fair (see U4-5).

**U7-4 [R4 · MED]** The readout lists all 18 outcome names before the first answer (engine 4094), including "Proxy failure / Goodhart" and "Relative risk without the absolute". After question one only one candidate remains for 16 of 18 outcomes, so question two and the naming step are formalities. The learner can score by phrase-matching.

**U7-5 [R3 · MED]** Three vocabularies for the same steps: the dead `determinationIntro` says "Step 1 ... Step 4 - now name it" (1989-1991), the screen shows "S1 / A1 / A2" and "ID · Name it" (engine 4056, 4076), the course says S1-S4 (1849). The verdict label is "What would falsify this reading" (engine 4168), a philosophy-of-science phrase the reader never met.

**U7-6 [R5 · MED]** Specimen 5 (labour survey, 1768) requires `A1 = "Everyone in the frame was counted"` (1769, option 1602), which is false of a 40,000-household sample. The sample is a part of the frame, and the option wording contradicts the case it must be chosen for.

**U7-7 [R6 · MED]** `fals` ("what would falsify this reading", e.g. 1751, 1756) is the most transferable thinking in the specimens ("what would change my mind"), but no card teaches it and it is rendered as an afterthought.

### Caveats and reference (2012-2020)

**C-1 [R8 · MED]** The most practical guidance in the subject is behind "Where this key stops": "Naming a fault is not refuting a claim." (2013), "This key is about validity, not magnitude." (2017), "Applying the key selectively to claims you dislike is the failure mode this course is most likely to produce." (2019). It belongs in a card inside the course, not a reference tab.

**C-2 [R2 · LOW]** Caveats dump names in a single sentence: "weighting, adjustment, instrumental variables, sensitivity analysis, inverse-probability weighting" (2015), "Publication bias, p-hacking, multiple comparisons and the garden of forking paths" (2018).

## Learner simulation

Method: a reader who has read only the cards before the item (Unit n's drill sees Units 1..n; the faulty-claims drill sees Units 1-6; the specimens see all seven units) must answer and justify using only what those cards said. A recycled card example is marked "repeat": the learner can answer it by remembering the card, which says nothing about whether they could do it on a new claim.

### V1 "Which stage" (after Unit One, 4 cards)

| # | Item (line) | Verdict | Licensing card sentence, or what is missing |
|---|---|---|---|
| 1 | Enduring-greatness book: same seven habits (1660) | WORDING-GAP | One clause: "If the sample was assembled out of survivors" (1856). "Survivors" is undefined; the claim is phrased as a cause ("follows the same seven habits"), which pulls toward the last stage. |
| 2 | Agents paid per ticket closed (1662) | UNSUPPORTED | Nothing in Unit One mentions targets, pay or incentives. The stage row (1850) offers "the definition, the instrument, the effort spent looking". |
| 3 | Sales rose 12%, the rebrand worked (1664) | SUPPORTED | "A number alone carries no information." (1851) plus the first-break rule (1857). |
| 4 | Hate crimes, new recording standard (1666) | SUPPORTED | "the definition, the instrument" (1850) and "Ask what would have to change in the world for this number to move." (1850). Thin: "recording standard" is not "definition". |
| 5 | Coffee drinkers live longer (1668) | SUPPORTED | "the leap from a pattern to an explanation" (1852). The feedback's "the counting and the comparison are fine" has no criterion (U1-5). |
| 6 | Randomised trial, 40,000 volunteers (1670) | WORDING-GAP | Only "randomised assignment" in a list (1862). "volunteers", "placebo arm", "absolute numbers", "like for like" (1671) are untaught; the key's gate has no "Nothing" option (W10). |

Totals: SUPPORTED 3, WORDING-GAP 2, UNSUPPORTED 1.

### V2 "Who got counted" (after Unit Two)

| # | Item (line) | Verdict | Licensing card sentence, or what is missing |
|---|---|---|---|
| 1 | Average of funds listed today (1676) | SUPPORTED | "The failures were removed by the act of assembling the data." (1873). Thin: "window" and "population" undefined, no example. |
| 2 | Front-page online poll, 78% oppose (1678) | SUPPORTED | "subjects put themselves in / Whatever motivated them to join also predicts their answer." (1874) |
| 3 | Survey to 4,000, 600 replied (1680) | WORDING-GAP | "the frame was right, the returns were not" (1875). "Frame" is undefined, and self-selection (1874) fits the same facts; no card separates them. |
| 4 | Three best-gain schools all small (1682) | SUPPORTED | "look at the other end of the same table. If small units dominate the top and the bottom, size is producing the ranking" (1881). |
| 5 | Labour force survey, random 40,000 (1684) | WORDING-GAP | Only "random frame with non-response chased" (1862). Unit Two has no row for the sound state, "±0.3 points" is untaught, and card 4 (1885) has just warned about large samples. |

Totals: SUPPORTED 3, WORDING-GAP 2, UNSUPPORTED 0.

### V3 "What it counts" (after Unit Three)

| # | Item (line) | Verdict | Licensing card sentence, or what is missing |
|---|---|---|---|
| 1 | Four-hour target 95% from 68% (1690) | SUPPORTED (repeat) | "Waiting times stand in for good emergency care." (1903) and "The tell is a target announced." (1905). |
| 2 | Thyroid cancer fifteen-fold, deaths flat (1692) | SUPPORTED (repeat) | "If diagnoses rise fifteen-fold and deaths are flat" (1908): the identical example. |
| 3 | Crime up 40%, each victim recorded separately (1694) | SUPPORTED | "same word, new counting rule" (1898). |
| 4 | Reservoir from the same gauge (1696) | WORDING-GAP | The counterfactual question (1894) lets the reader reason "no", but "The measure is sound" and its shape are not taught in the unit. |
| 5 | Teachers ranked on test scores (1698) | SUPPORTED (repeat) | "Test scores stand in for learning." (1903). |

Totals: SUPPORTED 4, WORDING-GAP 1, UNSUPPORTED 0.

### V4 "The comparison" (after Unit Four)

| # | Item (line) | Verdict | Licensing card sentence, or what is missing |
|---|---|---|---|
| 1 | 99% accurate test, 1 in 10,000 (1704) | SUPPORTED (repeat) | 1927-1928: the same numbers and the same conclusion. |
| 2 | Bacon, 18% (1706) | SUPPORTED (repeat) | "18% of a 6% baseline is one extra case per hundred." (1921). Only in the monospace tell; nothing generalises it. |
| 3 | Ninety percent said the cold cleared (1708) | SUPPORTED (repeat) | "Ninety percent improved." (1916) and "Most conditions improve on their own" (1920). |
| 4 | Hospital A vs B (1710) | SUPPORTED (repeat) | 1931: the same referral-hospital example. |
| 5 | Two cities, same standard (1712) | UNSUPPORTED | No card says what a fair comparison is; "like-for-like contrast" (1862) is a three-word mention. Answerable only by elimination; the criteria are in the feedback (1713). |

Totals: SUPPORTED 4, WORDING-GAP 0, UNSUPPORTED 1.

### V5 "Cause or pattern" (after Unit Five)

| # | Item (line) | Verdict | Licensing card sentence, or what is missing |
|---|---|---|---|
| 1 | Music lessons and test scores (1718) | SUPPORTED (repeat) | "a third thing drives both ... "Income" is an argument" (1943). |
| 2 | Gym and sick days (1720) | WORDING-GAP | "the effect is producing the cause" (1944) is abstract, with no everyday example; the reader cannot tell which is "the effect", and a third factor (health-consciousness) is also plausible. |
| 3 | Pilots, praise and reprimand (1722) | SUPPORTED (repeat) | 1950: "praise appears to backfire and criticism appears to work". |
| 4 | Vaccine vs placebo, 8 vs 162 (1724) | SUPPORTED | "Random assignment closes off confounding and reverse causation by construction" (1952). "volunteers" is unresolved (U5-5). |
| 5 | Clinic enrols the worst scores (1726) | SUPPORTED (repeat) | "'we treated the worst cases and they improved' is not evidence" (1950). The keyed answer contradicts the first-break rule (U7-2). |

Totals: SUPPORTED 4, WORDING-GAP 1, UNSUPPORTED 0.

Quick-drill total (26 items): SUPPORTED 18 (10 of them repeat a card example, 8 are on fresh cases), WORDING-GAP 6, UNSUPPORTED 2. Not answerable from the preceding cards: 8.

### Faulty claims (after Unit Six; the drill asks the learner to state the fault, unscored)

| # | Claim (line) | Verdict | Licensing card sentence, or what is missing |
|---|---|---|---|
| 1 | Nine out of ten dentists (1731) | SUPPORTED | "Nine out of ten dentists." (1964), "specificity is mistaken for evidence" (1964). The feedback says there is "nothing here to run the key on", yet the key's `C1` option fits (U6-1). |
| 2 | Correlation does not imply causation (1733) | SUPPORTED | 1939 and 1965. Feedback uses the untaught code "(K1)". |
| 3 | Crime up 200% (1735) | WORDING-GAP | "Up 200% is three cases where there was one." (1882), but Unit Four's "Relative risk alone -> supply the absolute numbers" (1921) fits equally and the feedback picks the earlier unit's label. |
| 4 | Average of 1.9 children (1737) | UNSUPPORTED | The mean versus a typical case is taught nowhere. |
| 5 | Peer-reviewed in a top journal (1739) | WORDING-GAP | Only the Unit One thesis "Audit the pipeline, not the number" (1842) points that way; authority and peer review are never discussed. |
| 6 | Diet worked for me and everyone I know (1741) | SUPPORTED | "subjects put themselves in" (1874) and "supply an untreated group" (1920). Feedback uses untaught "A1 and C1". |
| 7 | 97% at the rally support the movement (1743) | WORDING-GAP | "sampling frame" is undefined; "subjects put themselves in" (1874) does not quite fit people who were standing at a rally. |

Totals: SUPPORTED 3, WORDING-GAP 3, UNSUPPORTED 1.

### Specimens (after Unit Seven's one card; the route has 3 decisions plus the name)

Key to cells: S = taught in the option's words (or close paraphrase), W = idea taught but under different words, U = never taught. "first-break" marks a keyed stage the lessons' own rule contradicts.

| # | Specimen (line) | Gate S1 | Question 1 | Question 2 | Name | Worst | Where the wording breaks |
|---|---|---|---|---|---|---|---|
| 1 | Funds listed today (1748) | S | W | W | S | WORDING-GAP | "Only the ones that lasted are visible" vs "defined at the end of the window" (1873); "The failures would reverse the conclusion" vs "removed by the act of assembling" (1873). |
| 2 | Website questionnaire (1753) | S | S | S | S | SUPPORTED | Taught in the table's words (1874). |
| 3 | Wellbeing survey (1758) | S | W | S | S | WORDING-GAP | "Only those who answered were counted" vs "the frame was right, the returns were not" (1875); self-selection fits equally. |
| 4 | Kidney cancer by district (1763) | W | W | S | S | WORDING-GAP | Placed under "which cases are in the data at all" (1586) though the card says nobody is missing (1878); "Everyone in the frame was counted" vs "nobody is missing" (1876). |
| 5 | Labour force survey, sound (1768) | W | W | W | W | WORDING-GAP | No rule for choosing a stage for a clean claim (W10); "Everyone in the frame was counted" is false of a 40,000-household sample; "n is large" vs 1862; "Sampling is sound" never taught as a label. |
| 6 | Four-hour target (1773) | W | S | W | S | WORDING-GAP | Gate sub "the definition, the instrument, the effort" (1587) has no incentive word; "people optimising the number alone" vs "the measure became the target" (1897). |
| 7 | Recording standard (1778) | S | S | S | S | SUPPORTED | 1898 "same word, new counting rule"; "threshold" (1621) is a small extra. |
| 8 | Thyroid screening (1783) | S | W | S | S | WORDING-GAP | "Cases found - which depends on how hard anyone looked" vs "more looking, not more happening" (1899). |
| 9 | Reservoir gauge, sound (1788) | W | W | W | W | WORDING-GAP | Sound state not taught in Unit Three; "The thing itself, counted the same way throughout" (1617) and "No - this number moves only when the thing moves" (1623) are implied, never stated. |
| 10 | Screening test, positive result (1793) | S | W | W | S | WORDING-GAP | "A rate, without how common the thing is to begin with" and "How common it is in the population to start with" vs "supply the prevalence" (1922). |
| 11 | Bacon, 18% (1798) | S | W | S | S | WORDING-GAP | "A change, given only as a percentage of itself" vs "Relative risk alone" (1921); the repair "The absolute numbers behind the percentage" matches (1921). |
| 12 | Back pain programme (1803) | W (first-break) | S | W | S | WORDING-GAP | The claim counts only "patients who completed" (survivorship, first stage, 1857); the key demands the comparison stage. "A group that did not get it" vs "untreated group" (1920). |
| 13 | Hospital mortality (1808) | S | S | S | S | SUPPORTED | "lumped into one total" / "Splitting the total back into its subgroups" ~ 1923; taught. |
| 14 | Two cities, fair (1813) | W | U | U | W | UNSUPPORTED | "A like-for-like group" (1632) and "Nothing - the comparison already holds" (1639) are taught nowhere. |
| 15 | Music lessons (1818) | S | S | W | S | WORDING-GAP | "Holding the third variable fixed" (1650) is not in any card ("adjusted for", 1954). |
| 16 | Gym and sick days (1823) | S | S | S | S | SUPPORTED | "the effect is producing the cause" and "which one moved first?" (1944). |
| 17 | Clinic, worst patients (1828) | W (first-break) | S | U | S | UNSUPPORTED | No untreated comparison group is mentioned in the claim, so the comparison stage breaks earlier; "Watching an equally extreme group left alone" (1652) is taught nowhere in Unit Five. |
| 18 | Vaccine trial (1833) | W | W | W | S | WORDING-GAP | Sound claim (W10); "volunteers" (U5-5); "Nothing plausible - the design rules the alternatives out" and "Already settled - randomised, or the alternatives are closed off" vs "closes off ... by construction" (1952). |

Specimen decisions (72 = 18 x 4): SUPPORTED 41, WORDING-GAP 28, UNSUPPORTED 3. Specimens fully answerable from the cards: 4 (numbers 2, 7, 13, 16). Specimens with at least one non-S decision: 14 (12 WORDING-GAP, 2 UNSUPPORTED). By step, decisions not taught in the picked words: gate 8 of 18 (the four sound specimens plus 4, 6, 12, 17), question 1 10 of 18, question 2 10 of 18, name 3 of 18.

### Simulation totals

| Set | Items | SUPPORTED | WORDING-GAP | UNSUPPORTED | Not answerable |
|---|---|---|---|---|---|
| Quick drills V1-V5 | 26 | 18 | 6 | 2 | 8 |
| Faulty claims | 7 | 3 | 3 | 1 | 4 |
| Specimens (worst step per specimen) | 18 | 4 | 12 | 2 | 14 |
| **All practice items** | **51** | **25** | **21** | **5** | **26** |

Even the 25 SUPPORTED items are inflated by repetition: 10 quick-drill items repeat a card example, and the specimens that are fully supported (2, 7, 13, 16) all re-tell drill scenarios.

## Vocabulary map

Every variant is quoted as it appears (line numbers in `public/index.html`; "engine" = render code). A reader meets these in this order: course cards, then quick-drill options, then key questions and options, then specimen and drill feedback.

| Concept | Every variant, verbatim | Where |
|---|---|---|
| The four stages | "Who got counted?" "What does the number count?" "What is it set against?" "What does it say caused what?" | Unit One table 1849-1852 |
| | "Who got counted" "What the number counts" "What it’s set against" "What it says caused what" | key gate options 1586-1592 |
| | "The pipeline" / "Who got counted" / "What the number counts" / "What it is set against" / "What caused what" | unit titles 1840-1936 |
| | "Which stage" / "Who got counted" / "What it counts" / "The comparison" / "Cause or pattern" | drill titles and tabs 1998-2002, 2008-2009 |
| | "Where does this claim first break?" "Which sampling fault - if any?" "What happened to the measure?" "What is missing from the contrast?" "Which alternative to the causal reading?" | drill prompts 1998-2002 |
| Stage codes | "S1" = Who got counted; "S1" = the gate; "A" = four different faults; "C" = four different faults; "A1/A2/M1/M2/C1/C2/K1/K2"; "ID · Name it"; "Step 1 ... Step 4" | 1849-1852; 1585; 1873, 1897, 1920, 1943 / 1875, 1899, 1922, 1945; 1598-1649; engine 4076; 1989-1991 (unrendered) |
| What a stage's faults are called | "stages" "pipeline" (1845), "The four sampling faults" (1871), "Three ways a number detaches" (1895), "What each one is missing" (1918), "The three alternatives" (1941), "the fault" (1973), "tools" (engine 3895-3902) | course; subject screen |
| How many questions | "asks one question at each stage" (1845); "work the two questions under that stage" (1973); "the two questions specific to that stage" (1990, unrendered); "3 questions narrow 18 tools to one" (engine 3895-3902) | course; subject screen |
| A claim with nothing wrong | "Nothing - the claim holds" (1658); "No fault" is a real answer (1859); "a sound option" (1860); "clean" (1860); "Sampling is sound" (1569); "The measure is sound" (1573); "The comparison is fair" (1578); "The causal claim is supported" (1582); "Nothing important is missing, and n is large" (1609); "The thing itself, counted the same way throughout" (1617); "No - this number moves only when the thing moves" (1623); "A like-for-like group" (1632); "Nothing - the comparison already holds" (1639); "Nothing plausible - the design rules the alternatives out" (1647); "Already settled - randomised, or the alternatives are closed off" (1653) | outcomes, key, drills, cards |
| Survivorship | "Survivorship bias" (1565, 1674); "Survivorship - the population was defined at the end of the window" and "The failures were removed by the act of assembling the data" (1873); "Only the ones that lasted are visible" (1599); "The failures would reverse the conclusion" (1605); "assembled out of survivors" (1856); "were never eligible for the book" (1661); "The dead are exactly the bad ones" (1677); "the worst performers were removed from the average by the act of assembling it" (1750) | outcome; card; key; feedback |
| Self-selection | "Self-selection" (1566); "subjects put themselves in" (1874); "Subjects put themselves in" (1600); "The joiners differ from those who stayed out" (1606); "Respondents put themselves in. Angry people click" (1679); "Nobody drew this sample; it assembled itself" (1755); "self-selected website respondents" (1885); "opted in" (1886) | outcome; card; key; feedback |
| Non-response | "Non-response bias" (1567, 1674); "Non-response - the frame was right, the returns were not" (1875); "Only those who answered were counted" (1601); "The silent differ from the responders" (1607); "Eighty-five percent did not reply" (1681); "Everyone was invited, so the frame is right" (1760) | same |
| Small numbers | "Small-number volatility" (1568, 1674); "Small numbers deserve their own reflex" (1880); "nobody is missing, the denominator is tiny" (1876); "Everyone in the frame was counted" (1602); "Nobody is missing, but the denominator is tiny" (1608); "Tiny denominators swing hardest" (1683); "small units" (1881); "Small populations produce the extremes at both ends" (1765); "wearing a suit" (1736) | same |
| A good sample | "random frame with non-response chased" (1862); "Everyone in the frame was counted" (1602); "Nothing important is missing, and n is large" (1609); "Random draw from a full frame, non-response actively pursued" (1770); "Random frame, non-response actively pursued, uncertainty stated" (1685) | card; key; feedback |
| Proxy | "Proxy failure / Goodhart" (1570); "Proxy failure" (1688); "Proxy failure - the measure became the target" and "Goodhart: a measure that becomes a target stops being a good measure" (1897); "load-bearing approximations" (1902); "A stand-in for the thing anyone actually cares about" (1614); "Yes - people optimising the number alone would do it" (1620); "The tell is a target announced" (1905); "Scores stood in for learning until they became the object of effort" (1699); "the thing managed" (1775) | outcome; drill; card; key; feedback |
| Definition change | "Definition or instrument changed" (1571, 1688); "Definition changed - same word, new counting rule" and "The ruler was rewritten mid-series" (1898); "The same word, counted under a new rule" (1615); "a definition or threshold change" (1621); "A recording standard is a ruler" (1667); "The word "offence" survived the change; its definition did not" (1780) | outcome; card; key; feedback |
| Detection | "Detection effect" (1572); "more looking, not more happening" (1899); "Cases found - which depends on how hard anyone looked" (1616); "Yes - more looking alone would do it" (1622); "What rose is cases found, and finding depends on looking" (1785); "Detection: the mortality check" (1906) | same |
| Sound measure | "The measure is sound" (1573); "The thing itself, counted the same way throughout" (1617); "direct measurement of the thing itself" (1697); "direct measurement of the quantity itself" (1790) | outcome; key; feedback |
| Base rate | "Base-rate neglect" (1574); "supply the prevalence" (1922); "A rate, without how common the thing is to begin with" (1630); "How common it is in the population to start with" (1637); "The accuracy figure says nothing without the prevalence" (1705); "Accuracy is being read as if it were the answer to a different question" (1795); "Base rates: the hundred-people move" (1925) | outcome; card; key; feedback |
| Relative risk | "Relative risk without the absolute" (1575); "Relative risk alone -> supply the absolute numbers" (1921); "A change, given only as a percentage of itself" (1629); "The absolute numbers behind the percentage" (1636); "Eighteen percent of a small baseline" (1707); "a change expressed only as a proportion of itself" (1800); "The relative figure is not wrong, it is unreadable alone" (1801) | same |
| No comparison | "No comparison group" (1576); "supply an untreated group" (1920); "Nothing - a single number with no contrast" (1628); "A group that did not get it" (1635); "the people who took nothing" and "untreated group" (1709); "one number and nothing behind it" (1805); "A comparison arm" (1806) | same |
| Simpson's | "Simpson's paradox" (1577); "split the total back into subgroups" (1923); "Subgroups lumped into one total" (1631); "Splitting the total back into its subgroups" (1638); "The totals mix case mixes" (1711); "different case mixes" (1810) | same |
| Fair comparison | "The comparison is fair" (1578); "a like-for-like contrast" (1862); "A like-for-like group" (1632); "Nothing - the comparison already holds" (1639); "Same denominator, same window, same definition" (1713); "legitimate" (1815) | outcome; card; key; feedback |
| Confounding | "Confounding variable" (1579); "Confounding - a third thing drives both" (1943); "Something driving both sides at once" (1644); "Holding the third variable fixed" (1650); "Name the variable ... do not just say confound" (1719); "confounders" (1835) | same |
| Reverse causation | "Reverse causation" (1580); "the effect is producing the cause" (1944); "The effect could be producing the cause" (1645); "Knowing which one came first" (1651); "Settled by sequence: which one moved first?" (1944); "a precondition" (1721) | same |
| Regression | "Regression to the mean" (1581); "the group was selected for being extreme" (1945); "The group was picked for being extreme, and drifted back" (1646); "Watching an equally extreme group left alone" (1652); "part real signal and part noise on the day" (1948); "part real severity and part bad luck on the day" (1830) | same |
| Causal claim holds | "The causal claim is supported" (1582); "Nothing plausible - the design rules the alternatives out" (1647); "Already settled - randomised, or the alternatives are closed off" (1653); "closes off confounding and reverse causation by construction" (1952) | same |
| The people in the data | "cases" (1586), "subjects" (1599, 1874), "respondents" (1679), "joiners" (1605), "responders" (1607), "silent" (1607), "returns" (1875), "readers" (1755), "population" (1873), "units" (1881), "entries" (1880) | all layers |
| The number | "figure" (1843), "number" (1848), "measure" (1897), "metric" (1905), "series" (1898), "ruler" (1898), "proxy" (1897), "stand-in" (1614) | all layers |

## Key-wording coverage

Is each step and option taught in the course before the learner has to pick it? yes = in the card's words or a close paraphrase; partly = the idea is taught but the option is worded differently; no = not taught.

| Step | Wording (verbatim) | Taught where | Verdict |
|---|---|---|---|
| S1 gate | "Where does the claim first break?" | 1857 "where does it first break" | yes |
| S1 | "Who got counted" / "What the number counts" / "What it’s set against" / "What it says caused what" | 1849-1852 | yes (x4); no option for "nothing" (W10) |
| A1 | "How did cases get into the data" | 1849 "which cases made it into the data at all" | partly |
| A1 | "Only the ones that lasted are visible" | 1873 "defined at the end of the window" | partly |
| A1 | "Subjects put themselves in" | 1874 | yes |
| A1 | "Only those who answered were counted" | 1875 "the returns were not" | partly |
| A1 | "Everyone in the frame was counted" | 1876 "nobody is missing"; "frame" undefined | partly |
| A2 | "Picture who is missing - what changes" | 1868, 1870 | yes |
| A2 | "The failures would reverse the conclusion" | 1873 tell | partly |
| A2 | "The joiners differ from those who stayed out" | 1874 tell | partly |
| A2 | "The silent differ from the responders" | 1875 tell | yes |
| A2 | "Nobody is missing, but the denominator is tiny" | 1876 | yes |
| A2 | "Nothing important is missing, and n is large" | 1862 clause only; "n" undefined | partly |
| M1 | "What is the number a count of" | 1893 "still attached to the thing it is supposed to represent" | partly |
| M1 | "A stand-in for the thing anyone actually cares about" | 1903 | yes |
| M1 | "The same word, counted under a new rule" | 1898 | yes |
| M1 | "Cases found - which depends on how hard anyone looked" | 1899 "more looking, not more happening" | partly |
| M1 | "The thing itself, counted the same way throughout" | 1862 "a stable definition" | no |
| M2 | "If the underlying reality had not moved at all, would this number still have moved" | 1894 | yes |
| M2 | "Yes - people optimising the number alone would do it" | 1897 "became the target" | partly |
| M2 | "Yes - a definition or threshold change alone would do it" | 1898 ("threshold" is new) | yes |
| M2 | "Yes - more looking alone would do it" | 1899 | yes |
| M2 | "No - this number moves only when the thing moves" | implied by 1894 | partly |
| C1 | "What is it set against" | 1851 | yes |
| C1 | "Nothing - a single number with no contrast" | 1851, 1920 | yes |
| C1 | "A change, given only as a percentage of itself" | 1921 "Relative risk alone" | partly |
| C1 | "A rate, without how common the thing is to begin with" | 1922 "prevalence" | partly |
| C1 | "Subgroups lumped into one total" | 1923 | yes |
| C1 | "A like-for-like group" | 1862 three-word mention | no |
| C2 | "What would restore the picture" | 1918 "What each one is missing" | partly |
| C2 | "A group that did not get it" | 1920 "untreated group" | partly |
| C2 | "The absolute numbers behind the percentage" | 1921 | yes |
| C2 | "How common it is in the population to start with" | 1922 "prevalence" | partly |
| C2 | "Splitting the total back into its subgroups" | 1923 | yes |
| C2 | "Nothing - the comparison already holds" | none | no |
| K1 | "What else could produce this exact pattern" | 1940 "three specific alternatives to a causal reading" | partly |
| K1 | "Something driving both sides at once" | 1943 | yes |
| K1 | "The effect could be producing the cause" | 1944 | yes |
| K1 | "The group was picked for being extreme, and drifted back" | 1945, 1948 | yes |
| K1 | "Nothing plausible - the design rules the alternatives out" | 1952 | partly |
| K2 | "What would settle it" | 1944 for one fault only | partly |
| K2 | "Holding the third variable fixed" | 1954 "adjusted for" only | no |
| K2 | "Knowing which one came first" | 1944 | yes |
| K2 | "Watching an equally extreme group left alone" | none in Unit Five | no |
| K2 | "Already settled - randomised, or the alternatives are closed off" | 1952 | partly |
| Name | "ID · Name it" | course says "name the fault" (1973) | partly |
| Name | 12 of 18 outcome names match a taught label; "Definition or instrument changed", "Relative risk without the absolute" and "The causal claim is supported" are partial; "Sampling is sound", "The measure is sound" and "The comparison is fair" are never taught as labels | 1873-1954 | 12 yes, 3 partly, 3 no |

Totals: 9 question labels (4 yes, 5 partly); 39 options (19 yes, 15 partly, 5 no). So 25 of the 48 question and option wordings the learner must pick are not taught in the words the key uses.

## Under-explained ideas

| Idea | What the lesson says now | What a newcomer still would not understand |
|---|---|---|
| Survivorship bias | One table row (1873): "the population was defined at the end of the window / The failures were removed by the act of assembling the data." | What the "window" is, why the failures are missing, and how to spot a list built from what survived. No story, no picture of who is absent. |
| Self-selection versus non-response | Two rows (1874-1875) | The difference between an open call and an invitation that few answered; both look like "some people answered". |
| A big sample cannot fix a biased one | 1885: "increasing n reduces random error while leaving the systematic error exactly where it was." | What n, random error and systematic error are. The plain version: more of the wrong people gives a very sure wrong answer. No numbers. |
| Why small groups produce extreme rates | 1880: "it will swing violently on one or two cases." | Why one case moves a rate, with any numbers; what a rate is; why the best and the worst are both small. |
| Proxy failure | 1897-1905: "stand in", "Goodhart", "load-bearing approximations", "a measurement of the measurement" | What happens in practice when people are judged on a number: what they do differently, and what gets neglected. |
| Definition or instrument changed | One row (1898): "same word, new counting rule" | How a rule change makes a number rise with no change in the world; the "instrument" half is untaught. |
| Detection effect and "mostly harmless" | 1908 | Why scanning finds cases that would never have caused harm, and why deaths are the right check. |
| No comparison group | 1920: "Most conditions improve on their own; that rate is the floor." | Why people improve without treatment, and what a comparison group lets you subtract. |
| Relative versus absolute risk | One tell (1921): "18% of a 6% baseline is one extra case per hundred." | What "baseline" and "absolute" mean; the arithmetic; how to read a percentage change in a headline. |
| What "99% accurate" means | 1927: "wrongly flags 1% of the 9,999" | The two halves of accuracy (catching the sick, clearing the healthy); the card assumes the reader knows. |
| Simpson's paradox | 1931: "better in every category" while worse overall | How a total can reverse; no numbers at all. |
| A fair comparison | 1862: "a like-for-like contrast" | What like-for-like requires: same kind of group, same period, same definition. Not in any card. |
| Confounding and reverse causation | Two rows (1943-1944) | An everyday example of each; which of two things is "the effect". |
| Regression to the mean | 1948: "Measure again and that component averages out." | Why a second measurement is less extreme; a small example with numbers. |
| Random assignment | 1952: "closes off confounding and reverse causation by construction" | What random assignment is, why the groups are alike on average, and how it differs from random sampling. |
| The first-break rule | 1855-1858 | How to choose when a claim is wrong at two stages; no example. |
| What a sound claim looks like | One clause (1862) | A worked sound claim at each stage in the key's words. |
| Average versus typical | Not taught; tested at 1737 | That a mean is not a typical case. |
| Using this on a real claim | Hidden in caveats (2012-2020) | What to ask when you meet a claim in the news, an ad or a work metric. |

## What a good version of this subject's units would contain

Principles for every unit: open with what the reader will be able to do and the exact key questions that unit teaches, in the words the key shows. Explain each idea in plain words with an everyday example before its name. Show one worked example through the key for each stage, with each option text quoted. Put a short check inside the card. Drill in the unit's own words with fresh cases. Give the length each idea needs; two paragraphs are fine. Then delete every code (S1, A1 ...) and one-name each concept.

Key defects to settle before any rewrite (each needs an owner decision recorded in the key, not patched in the lessons): a gate option or rule for "nothing found" (W10); where small-number volatility lives (U2-4); the Simpson-versus-confounding discriminator (W11); specimens 12 and 17 against the first-break rule (U7-2); "volunteers" in the randomised trials (U5-5); the false "Everyone in the frame was counted" option for a sample (U7-6).

**Unit One - The four questions**
- Start with "by the end you will check any claim with these questions" and list the key's three questions in its own words, with one worked claim from the news walked through all of them (gate, two questions, name).
- Name the four stages once, with the exact gate phrases, and teach cues for choosing the stage from the claim's wording.
- Teach the first-break rule with a claim that is wrong at two stages and say why the earlier one is named.
- Say what a sound claim looks like at each stage in the options' words.
- Drill on stage choice only, with claims cued by what was taught, and include a claim with nothing wrong using the gate's real option.

**Unit Two - Who got counted**
- A short story per fault before its label: only the planes that came back, the phone-in poll, the survey few answered, the three-patient clinic.
- Side-by-side cards that separate self-selection (open call) from non-response (everyone invited, most silent), with "frame" replaced by "who was invited".
- Small numbers with arithmetic (1 case in 50 versus 100 in 5,000), "rate" and "denominator" defined, and a clear statement of which stage it belongs to.
- "A bigger sample does not fix a biased one" in plain words with numbers; drop n and random error.
- What a good sample looks like in the options' words, then one specimen walked through A1 and A2.
- Drill fresh cases with the options as the lessons worded them.

**Unit Three - What the number counts**
- Keep the counterfactual question verbatim and teach M1 as a question too.
- One everyday story per fault (a manager hitting a target, a shop that recounts what a sale is, more scans finding more disease) before the label; define "proxy" in a sentence and drop the metaphors.
- An example of an instrument change, or remove "instrument" from the outcome name.
- Detection: simple numbers showing why flat deaths mean the extra cases were found, not new; explain over-finding in one sentence.
- A card for the sound measure in the key's words ("counted the same way throughout"), then a worked walk through M1 and M2.
- Drill with cases that do not reuse the card examples.

**Unit Four - What it is set against**
- Split into two units: (a) nothing to compare with, and a percentage without the number behind it; (b) how common it is to begin with, and totals that hide groups.
- Relative versus absolute risk as a full card with arithmetic and a second example (a risk halved from 2 in 10,000 to 1 in 10,000).
- No comparison group: why people improve on their own, with the 90% versus 90% subtraction.
- Define "99% accurate" before the hundred-people walk; use one name for base rate everywhere.
- Simpson's with a small table showing the reversal, and the stated difference from confounding.
- A "what a fair comparison looks like" card in the options' words; one worked walk per fault.

**Unit Five - What caused what**
- An everyday story per alternative first: heat driving both ice cream sales and sunburn, a healthy person going to the gym, a hot streak that cools.
- Regression to the mean with a small numeric re-test example that shows why the worst group improves by chance.
- Teach K2 explicitly: hold the other factor fixed, check which came first, compare with an equally extreme untreated group.
- Random assignment in plain words (a coin flip), the difference from random sampling, and a rule for trials of volunteers.
- Turn the observational-evidence note (1954) into a card with a route for claims that pass.
- Drill fresh cases; walk the clinic and music cases through the key.

**Unit Six - Claims that engage nothing**
- Reframe: these claims skip questions; show how "nine out of ten dentists" fails in the key's own words (no contrast, who were the ten).
- Teach the two missing ideas (average versus typical; trust the design, not the source), or remove the two items.
- Replace the unscored "state it aloud" with a pick from the key's question wording.
- Add a closing card for use on real claims: the headline, the ad and the work metric, with the questions to ask.
- Move the caveats that matter (naming a fault is not refuting a claim; do not use the key only on claims you dislike) into this card.

**Unit Seven - Full determination**
- A preparation card showing the exact screen, the readout and one fully worked specimen using the key's own option text.
- Every key question and option taught earlier in the same words; a validator to prove zero WORDING-GAP and UNSUPPORTED.
- At least 18 specimens that are new cases (none reusing a drill scenario), including one wrong at two stages and sound ones that use the gate's real route.
- Route feedback that quotes the sentence in the case, the option, and the card idea that links them.
