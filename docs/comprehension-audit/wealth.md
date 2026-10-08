# Wealth Preservation - comprehension audit

Source: `/Users/dim/Documents/PersonalLessons/public/index.html`, lines 2486-2969 (subject data), plus engine lines 3480-3640, 3786-3902, 3904-4260 and lesson CSS 181-200. Line numbers below refer to that file. Audited against rubric R1-R9 plus a per-item learner simulation. Nothing under `public/` was edited.

## Verdict

It does not teach-then-apply. Each unit is a framing card, a table that lists the unit's practices as a label plus a one-sentence "tell" (set in 11.5px monospace, CSS line 190), one or two real explanations for the practices the author found easiest to argue, and then a drill that asks the reader to match a described practice back to its label. Ten of the 21 practices get a single table row or a fragment of fewer than about 35 words; the mechanisms, the numbers and the rules that separate neighbouring practices appear only in specimen and drill feedback (1,908 words of `why`/`fals` plus 589 of drill `w`, shown after the learner has answered) against 2,431 words for the whole course. The determination key is written in a second vocabulary that the lessons never teach: none of its 8 follow-up questions is posed in any card, 23 of its 40 option texts are only partly or not at all in the cards, the lesson's threat codes P1-P4 collide with the key's own P1, and the text that would explain the key (`determinationIntro`, lines 2933-2943) is never rendered.

Root causes: (1) the lessons are an outline of the label list, not an explanation, and jargon is used as if defined (realise, estate, basis, liability, leverage, hedge, rebalance, callable, target, bands); (2) the key, the drill options, the outcome names and the lessons each use different words for the same idea, and the final determination is the first time the learner meets the key's wording; (3) there is no bridge, no worked example and no transfer, and 19 of 21 specimens describe the practice already applied, so "diagnosis" is recognising a described label; (4) discriminating rules between neighbouring practices live only in post-answer feedback.

Method and counts used below: simulation covered 27 quick-drill items, 8 faulty claims and 21 specimens (each specimen checked step by step: gate, question 2, question 3, name). 56 items checked; 28 are not answerable-and-justifiable from earlier cards (9 quick-drill WORDING-GAP, 1 faulty-claim WORDING-GAP + 2 UNSUPPORTED, 16 specimens with at least one gap). Details in "Learner simulation".

What works, so it is not lost in a rewrite: the gate (Unit 1 card 2, X1 options and gate options share wording almost verbatim); Unit 3 and Unit 4 tables line up in count with the key's two questions; Unit 2 card 3 (draw as a percentage), Unit 4 card 1 (order of returns) and Unit 5 card 3 (beneficiary form beats the will) are genuine explanations with a reason in them; Unit 5 card 3 is the one real transfer instruction ("Check every beneficiary nomination you have ever completed").

## Findings by unit

Severity: HIGH = the reader cannot connect the lesson to what they are later asked, or is taught something contradictory; MED = slows or misdirects understanding; LOW = polish.

### Unit One - Keeping is not making (cards 2787-2814, drill X1 at 2586-2600)

1.1 **[R1 - HIGH]** The unit opens with a hook, not an orientation. 2790: "Almost every large fortune was built by concentration ... Almost every large fortune that disappears, disappears the same way." Nothing says what the reader will be able to do, that a three-question key exists, or what the questions are. The text that does explain the key's steps and the readout strip is `determinationIntro` (2933-2943); no code reads it (the subject screen shows only `blurb`, line 3807; `intro` is also unreferenced). The learner reaches the scored determination (Unit 7) with no explanation of what they are about to do. Reader needs: a first card that says "By the end you will read a money situation and answer three questions: what is the main threat, where exactly is the weak point, which practice answers it", followed by one full example.

1.2 **[R3 - HIGH]** The course gives three different answers to "how do fortunes end". 2790: concentration ("disappears the same way"); 2965 (caveats): "Concentration built almost every fortune here and is the main way they end."; 2886: "Not usually to markets or to tax. It goes through divorce, through a business run by someone who was never prepared ... and through documents nobody updated." The four-threat card (2796-2799) then treats concentration as one quarter of one threat. A reader cannot tell which story the course believes.

1.3 **[R2/R3 - HIGH]** Codes collide and the key's codes are never taught. The lesson table labels the four threats `P1`-`P4` (2796-2799: `<th>P1</th> ... A leak that compounds`). In the key, `P1` is the first question (`WEALTH_GATE code:'P1'`, 2512, label "What threatens the capital here?") and the determination UI prints "P1 · What threatens the capital here?" (4056). So "P1" means "a leak" in the lesson and "the threat question" in the key. The other codes (E1, E2, S1, S2, T1, T2, U1, U2, 2525-2576) are never mentioned in a card, and the lesson tables use local letters A-E (2825-2829) so "E" in Unit 2 means "Spending" while "E1" in the key means "Where is the leak". The reader cannot decode a code in the key from anything they were taught.

1.4 **[R2 - HIGH]** The key's subject word is never defined. The gate asks "What threatens the capital here?" (2512). "Capital" is not explained; the course alternates capital (2512), money (2519, 2799), wealth (2928), fortune (2790), portfolio (2822), balance sheet (2542), net worth (2590, 2710), assets (2610), estate (2894). Also undefined in this unit: "compounds" (2796, "A leak that compounds"), "the arrangement" (2799, "The money outliving the arrangement"), "solvent" (gate sub, 2517), "forced seller" (2812).

1.5 **[R9 - HIGH]** "The four threats" (2794-2801, 108 words) is the most important card in the course because it is the gate question, and it gives each threat a three-word list and a ten-word tell: "Never urgent, which is why it runs for thirty years." / "Fine every year until the one year it is not." / "Solvent the whole time, and permanently poorer afterwards." / "The market risk was never the problem." There is no worked example for any threat. A newcomer still would not understand: what a leak looks like in numbers; how a "single event" differs from an ordinary market fall; why "forced to act" is a different problem from "a single event"; or what "the arrangement" is. The examples that would answer these are in drill X1 (2588-2598), which the reader meets only after the card.

1.6 **[R4 - HIGH]** No rule for sorting overlapping cases. "Spending" is listed under the leak (2796: "fees, tax paid earlier than required, spending") and "selling into a fall to fund a bill" under forced timing (2798). X1 item 3 (2592, retiree selling equities monthly in a 30% fall) and item 5 (2596, business owner taking 9% a year to live on) are the same household behaviour with different answers. The lesson never says what to look at to separate them ("is the problem the size of the draw, or the fact that a fall forces the sales?"). Nor does it say how to classify a case whose cues point at three threats; see specimen 6 below.

1.7 **[R4 - HIGH]** Card 4 "What actually does the work" (2806-2814) lists four practices that "survive at every level of wealth" and never says which threat each answers, immediately after 2801 promised "Every practice in this course answers exactly one of these." Fees and spending map to threat 1, the reserve to threat 3, documents to threat 4, and threat 2 gets no practice at all. The reader is asked to do the mapping the course says is the whole skill, with no example of it being done.

1.8 **[R5 - HIGH]** X1 practises only the gate, with options copied from the gate (2586 matches 2513-2519), which is good, but three of six items rest on cues the unit never gave: item 4 stale will (2594) - threat 4 is described as "transfer, heirs, control" (2799), none of which appear in the item; item 5 9% draw (2596) - no benchmark exists in Unit 1 (the 3-4% return arrives in 2821, 3.5% in 2700); item 6 landlord (2598) - "liability" is a bare word in a list (2797) and no card says "a claim can reach everything you own" (that arrives in Unit 3, 2850). See simulation.

1.9 **[R6 - MED]** X1 `w` texts pull in ideas from later units and never say why the neighbouring options are wrong. Item 1 w (2589) uses "3.5% real return" (introduced as 3-4% in Unit 2, 2821); item 2 w (2591) uses "Correlated exposures that look like three things are one thing" (Unit 3 card 1, 2844); item 3 w (2593) and item 5 w (2597) are not set against each other (see 1.6).

1.10 **[R3 - MED]** Card 3's promise "Every category in this course contains an outcome meaning 'nothing is needed here.' Four of the twenty-one specimens resolve that way." (2805) never says which four, and "specimen" is app vocabulary the reader has not been given. The key does not make them recognisable: the shock branch has no option starting "Nothing" (S2, 2547-2552; its equivalent is `eyesopen`, "Kept - it is the thing they actually run", 2549), and "Concentration held deliberately" actually requires three supports (2856), so it is "do nothing" only in the sense of "do not sell". The four are `acceptcost`, `retain`, `matched`, `simple`.

1.11 **[R9 - MED]** Card 1's central claim "Building and keeping are different activities with opposite rules" (2791) shows only the building half (concentration). What the keeping rules are is not said until Unit 3, and "starting again at fifty-five" has no number behind it.

1.12 **[R2 - MED]** "Throughout, a right label reached by the wrong route counts as a miss." (2793) uses the app's own words (label, route) before the reader has seen a key; the same note recurs at 2922. The reader does not know what a "route" is.

1.13 **[R3 - LOW]** One-word drift in the only place the lesson and key nearly match: lesson "tax paid earlier than required" (2796) vs gate sub "tax paid early" (2513); "selling into a fall to fund a bill" (2798) vs "solvent, but selling into a fall" (2517); "A single event that could end it" (2797) vs "A single event could end it" (2515, 2586); "The money outliving the arrangement" (2799) vs "The money outlives the arrangement" (2519). X1 item 2 q (2590) is garbled: "the mortgage is on a margin loan against it".

### Unit Two - Leaks that compound (cards 2820-2838, drill X2 at 2602-2616)

2.1 **[R1 - MED]** The opening card is titled "The arithmetic that makes this the first unit" (2820): it justifies the unit's position instead of saying what the reader will be able to do. The unit never says "the key will first ask where the leak is (fees, tax, spending, or nothing), then what answers it". It teaches five leaks (A-E, 2825-2829) while the key's first question has four options (E1, 2525-2530) and collapses three of the five tax leaks into one: `taxnow`, "Tax paid sooner than it had to be".

2.2 **[R9 - HIGH]** "A leak that compounds" is never shown compounding. 2821-2822 assert a 3-4% real return and that a 1% fee is "a quarter to a third of the return, taken every year", but there is no worked example of what that does over time. A newcomer still would not understand "compounds", "real return" (after inflation; undefined at 2821), or how 1% turns into "a quarter to a third". What they would need: £100,000 growing at 4% for thirty years is about £324,000; at 3% (4% minus a 1% fee) about £243,000, a quarter less. Without this ERR item 7 (2673, "It's only a 1% fee") and X1 w (2589) are assertions. Also 3-4% is stated as "a reasonable planning assumption" with no source, in a course whose Unit 6 attacks unsourced figures.

2.3 **[R2 - HIGH]** Undefined jargon in the table (2825-2829) that the key then uses as option wording: "a low-cost core" (core never defined; the word "index" occurs zero times in any card, though the key says "something costing a tenth as much", 2532, and drills say "index fund"), "asset location", "Tax realised early", "Unrealised gains", "Gains already realised", "loss harvesting", "repurchase rules", "burn rate". "Realised/unrealised" (sold / not yet sold) is the hinge of rows C and D and of key option `dontsell`, "Stop realising gains that did not need realising" (2534); no card in the course defines it. "The shelter" (2826) is never explained as a type of account.

2.4 **[R9 - HIGH]** Three tax practices get one table row each (about 16 words each): B 2826 "Same portfolio, arranged so the taxed parts sit in the shelter."; C 2827 "Unrealised gains keep compounding on the untaxed amount."; D 2828 "Bank the loss, keep the exposure, watch the repurchase rules." A newcomer still would not understand: which holdings are "the taxed parts" and why; what a shelter is; why paying tax later is better when the tax is still owed; how a loss reduces a tax bill and why you may buy something similar straight back; what the repurchase rules are. The mechanisms are first stated in specimen feedback (2687, 2692, 2697), after the learner has been asked to choose.

2.5 **[R3 - HIGH]** One concept, ten names, one of them contradictory. The "draw" idea appears as: "Define spending as a share of capital" (2810); "Spending -> a fixed burn rate" (2829); "Spend a share of capital, not a number" (2831); "Defining the draw as a percentage" (2832); "withdrawals" (key E1 2528 "Withdrawals running ahead of the capital"; key E2 2536 "Fix withdrawals as a share of capital, reviewed yearly"); outcome "Fixed burn rate" (2493, 2602); specimen "redefine the draw as 3.5%" (2700); ERR "a fixed burn rate" (2664); Unit 6 "a defined burn rate" (2912). "Burn rate" (start-up slang) is never defined. "Fixed" is the bad thing in 2832 ("A withdrawal fixed in pounds does its worst damage") and the good thing in the outcome name; it means a third thing in the key ("modest, fixed and not callable", 2552).

2.13 **[R3 - HIGH]** The cost-worth-paying route contradicts the lesson. Card 4 (2836): "A flat fee for work that genuinely would not otherwise happen". X2 item 6 w (2615): "A charge that buys work you would genuinely not do is not a leak." Key E2 `nothing_e` (2537): "Nothing - you would have to do the work regardless." The key option says the work would be done anyway, the lesson says it would not. A reader who has learned the card will find the key option false.

2.6 **[R3 - MED]** Key E1 `taxnow` "Tax paid sooner than it had to be" (2527) describes deferral (row C) and, loosely, loss harvesting (row D), but not asset location, which is about income taxed every year in the wrong account (row B "Tax on income", 2826; specimen 2, 2685-2687, says nothing about timing). Three leaks, one option whose wording fits one of them. The lesson's own names for the three differ again: "Tax on income" (2826), "Tax realised early" (2827), "Gains already realised" (2828).

2.7 **[R4 - HIGH]** The unit never shows the reader how to pick. There is no case walked through E1 then E2; the table maps a leak to a practice but never tells the reader which cues in a real situation select a row, and the reader will not see the E1/E2 wording until Unit 7.

2.8 **[R5 - MED]** X2 prompt "Which leak is being answered?" (2947) but every option is a practice (2602), and item 6's answer ("A cost worth paying") is not a leak. Item 3 (2608) uses "rebalanced", "allocation" and "contributions", and rebalancing is not taught until Unit 4 (forward reference). Item 1 (2604) uses "property trust" (undefined) and "tax-sheltered account".

2.9 **[R9 - MED]** Card 3's numbers are asserted, not derived: "a household that adjusts by 8% for one uncomfortable year and one that sells a third of its assets over three" (2833). The 3.5% rate used in the specimen (2700) and drill (2612) is never given in a card or justified. No worked example: £3m at 3.5% is £105,000; after a 20% fall the same rule gives £84,000 (spending falls 20%), whereas a fixed £105,000 is then 4.4% of the smaller pot.

2.10 **[R7 - MED]** Card 2 is a five-row table carrying five separate ideas, ordered A-E without a simple-to-hard progression (the three tax ideas are packed in the middle). On a phone the only explanation of each leak is the `.tell` line set at 11.5px monospace in accent colour (CSS 190-191), the smallest type on the page.

2.11 **[R8 - MED]** One transfer instruction ("Ask any adviser how they are paid", 2838); nothing on how to find your own fee on a statement, how to turn a quoted percentage of capital into a share of return (the rule at 2822), or how to compute your own draw rate.

2.12 **[R3 - LOW]** Key E2 `indexcore` "a tenth as much" (2532) is not in any card, and specimens move 1.7% to 0.07% (2680) and 1.4% to 0.07% (2606), which are about a twenty-fourth and a twentieth. The course also teaches "do not realise gains that need not be realised" (row C) while telling the reader to move the core to an index fund in a taxable account, which realises gains; the tension is not addressed.

### Unit Three - The single event (cards 2844-2860, drill X3 at 2618-2632)

3.1 **[R1 - MED]** Opens with a story. The unit's table "Three failure points, six responses" (2847) matches the key's S1 (3 options) and S2 (6 options), the one place where lesson structure and key structure coincide, but the unit never says so, so the alignment is accidental and the reader is not told these are the two questions they will be asked.

3.2 **[R9 - HIGH]** Hedging is taught in three words. The only mention is "cap the downside" (2849). The outcome name "Hedging without selling" (2496) occurs in no card ("hedg" appears zero times). Puts and calls are never mentioned, though X3 item 2 (2622) and specimen 8 (2715) depend on them. A newcomer still would not understand: what capping the downside means in practice; why anyone would give up the upside too; why not simply sell; who cannot sell and why (lockup, restricted award); what it costs. The only answers are in feedback (2623, 2717, 2718).

3.3 **[R9 - HIGH]** Entity separation is one sentence plus two words: "Entity separation does the structural version of the same job." (2860); "separate the entities" (2850). "Entity" is never defined or linked to "limited company" (2725). Why a separate company stops a claim, what it costs, and the three failure terms in the same sentence ("commingled accounts, personal guarantees, one insurance policy stretched across everything") are unexplained.

3.4 **[R9 - HIGH]** Leverage discipline is one table row (2851): "Borrowing can force the outcome -> modest, fixed, not callable. The rate is not the risk. The call is the risk." "Callable" and "the call" are undefined (first explained in specimen 2730: "no clause allowing the lender to demand repayment while payments are current"); "modest" is never quantified (45% of value appears only in 2628/2730); "force the outcome" does not say which outcome; "collateral" (2845), "pledged" (2845) and "margin loan" (2590, 2732) are undefined; the word "leverage" (outcome 2499) appears in no card.

3.5 **[R3 - HIGH]** "Liability" means two different things in adjacent units. Unit 3: a legal claim (2797 "concentration, liability, borrowing"; 2859 "umbrella liability policy"; key id `liability` 2543). Unit 4 and the outcome list: a future bill (outcome "Liability matching" 2502; T1 `nothing_t` 2560 "the money is already where the liability is"; card 2875). Neither is defined.

3.6 **[R3 - HIGH]** Five of the six shock-group outcome names are never used by the lessons, which describe the same practice in other words, and the key uses a third wording:
- "Staged diversification" (2495, X3 option 2618) vs lesson "Diversify mechanically" (2853) / "sell down on a schedule" (2849) vs key "Sold down on a schedule, accepting the tax" (2547).
- "Concentration held deliberately" (2500) vs "retain it deliberately" (2849) vs "The exception is the business you actively run" (2856) vs key "Kept - it is the thing they actually run" (2549).
- "Risk transfer by insurance" (2497) vs "Insure the tail, self-insure the rest" (2857) vs "transfer the tail to an insurer" (2850) vs "The tail is handed to an insurer for a premium" (2550). "The tail" is never defined (2850, 2857, 2550, 2627, 2722). The cost of insurance is called a "premium" first in Unit 4 (2878), not here.
- "Hedging without selling" (2496) vs "cap the downside" (2849) vs "Downside capped without selling" (2548).
- "Leverage discipline" (2499) vs "Borrowing ... modest, fixed, not callable" (2851) vs "Borrowing kept modest, fixed and not callable" (2552).

3.7 **[R4 - HIGH]** The rules that choose between hedge, diversify and retain are in feedback only. The table says "Which one depends on whether you control the asset." (2849); the real rule (hedge only when a sale is blocked or the tax is prohibitive) is in 2623 and 2718, and the rule for diversify vs retain ("if she still ran the company day to day", 2713) is in specimen feedback. All three share the same key answer for S1 (`oneasset`), so the lesson gives the reader one criterion for a three-way choice and the others after they have answered.

3.8 **[R5 - MED]** X3 prompt "Which response to concentration or liability?" (2949) omits borrowing, though "Leverage discipline" is an option and item 5 (2628) is about a mortgage. Item 5 needs a benchmark for "modest" (45%) that no card gives.

3.9 **[R6 - MED]** Feedback introduces untaught terms and rules: w5 (2629) "The failure mode of leverage is not the rate - it is being required to settle at the moment of maximum stress" ("failure mode", "settle", "leverage"); w2 (2623) "Used where selling is restricted or the tax is prohibitive"; the specimen `why` texts add "collateral values and incomes fall together" (2732) and "a margin loan against a portfolio is the opposite on every count" (2732).

3.10 **[R7 - MED]** Card 3 (2853-2856) packs the diversify method, the price-blind principle, and the retain exception with its three supports into one card; card 4 (2857-2860) packs insurance, self-insurance, entity separation and its failure modes into 138 words. Card 1 (2844-2846) is the clearest card in the unit (70 words, one vivid example) but also uses "pledged as collateral" and "exposure" without definition.

3.11 **[R3 - MED]** The single-point idea has four names: "single point of failure" (key S1 2541), "failure points" (2847), "The single event" (unit title 2842, drill title "Single events" 2948), "A single event could end it" (2515). "One holding dominates" (2849) vs key "One holding is most of the balance sheet" (2542; "balance sheet" appears in no card) vs specimen "net worth" (2710).

### Unit Four - Forced at the wrong moment (cards 2866-2879, drill X4 at 2634-2644)

4.1 **[R9 - MED]** Card 1 (2866-2868) is a real explanation (sell more units to raise the same sum; the units are gone from the recovery) but it is asserted, not shown. "Two portfolios with identical average returns ... end in very different places" has no numbers. The name "sequence risk" appears only in feedback (2637, 2742). A newcomer would need a two-line example: a year-one fall then recovery vs recovery then fall, with a fixed £20,000 withdrawal.

4.2 **[R9 - HIGH]** Liability matching, rebalancing and "already matched" each get one row or one sentence (2872, 2873, 2875). Undefined in cards: "drift" (2873), "rebalancing", "target" (zero occurrences in cards, yet key T2 says "trades back to target at set bands", 2565), "bands", "asset class", "instrument", "maturing", "short bonds" (2871), "ladder" (outcome id; the word is in no card). A newcomer still would not understand why a bond maturing in August pays a September bill without market risk, what "rebalance" does, or why selling what has done well is the right move.

4.3 **[R3 - HIGH]** One idea (the cash reserve), eight names: "Spending reserve" (outcome 2501, X4 option 2634; Unit 1 2812, Unit 3 2856); "The reserve" (2876); "the buffer" (2877); "cash buffer" (ERR 2669; Unit 6 2912; caveats 2961); "two to five years of costs in cash and short bonds" (2871); key "Years of spending held in cash and short bonds" (2563); specimen "three years of living costs" (2740). Size is "two to five years" in the lesson and three in every example, with no reason for either.

4.4 **[R3 - HIGH]** The word "match" appears in no card, yet it names two outcomes ("Liability matching" 2502, "Already matched" 2504) and a key option ("Nothing - the match already holds", 2566). The lesson says "the money is already where the liability is" (2875), and key T1 `nothing_t` (2560) repeats that wording, but the outcome name and T2 use "matched/match".

4.5 **[R3 - HIGH]** The gate label for this branch contradicts two of its four outcomes. The gate says "Being forced to act at the wrong moment" (2517); T1 says "Nothing forces it - the mix has simply drifted" (2559) and "Nothing - the money is already where the liability is" (2560). The card is titled "Remove the requirement" (2869) while row C is "Drift, with nothing forcing action" (2873). A reader following the gate on specimen 15 (2750, drift from 60% to 71%) has no reason to choose "forced to act"; they can reach it only by knowing that rebalancing is filed under timing.

4.6 **[R9 - HIGH]** The operating rule of the reserve is in no card. Specimen 13 (2740): "replenished from equities only in years the market finished higher. In the two years it did not, they spent from the reserve and sold nothing." X4 item 1 (2636): "equities are sold only in years the market is up." Card 2 row A says only "two to five years of costs in cash and short bonds" (2871). Without the spend-in-down-years, refill-in-up-years rule the reserve is a static pile and the reader cannot say what they would do in a falling market.

4.7 **[R5 - MED]** X4 prompt "What removes the forcing?" (2949): "Already matched" removes nothing. Item 4 (2642) (a deposit in a savings account) is easily taken for "Spending reserve" (cash for a known need); the one sentence that separates them, "the correct action is none" (2875), trails the table, and card 3's warning licenses the item (2879 "A deposit needed in four months belongs somewhere that cannot fall") without naming the outcome.

4.8 **[R6 - MED]** X4 w1 (2637) "It is the single answer to sequence risk" introduces a new term and calls it "single" in a unit that teaches three answers; w3 (2641) "Its value is behavioural before it is mathematical".

4.9 **[R3 - LOW]** The forcing idea has seven phrasings: "forced seller" (2812), "Forced at the wrong moment" (2864), "the requirement to act on a date you did not choose" (2868), "Remove the requirement" (2869), "What could force the decision" (2556), "What removes the force" (2562), "What removes the forcing?" (2949), "Forced moments" (2949, tab 2957).

4.10 **[R7 - LOW]** The fourth case ("already matched") is a trailing paragraph under the table (2875), not a row, so the reader must infer a fourth outcome and its key labels from one sentence.

4.11 **[R8 - MED]** No transfer: no "list your dated bills for the next five years", no "work out how many years of spending you hold in cash", no description of what a short-bond fund is or where it is held.

### Unit Five - The handover (cards 2885-2901, drill X5 at 2646-2658)

5.1 **[R2 - HIGH]** "Estate" is never defined (2836, 2894, 2900), yet the unit's tax logic depends on it. Specimens and feedback use "accrues outside the founder's estate" (2649, 2760), "settled into a trust" (2648, 2760), "across the line" (2762), "the other side of the line" (2649). No card says what an estate is, that value in it is taxed at death, or that moving value out early is how a trust or a gift avoids that. The unit even says "Not usually to markets or to tax" (2886), then the key's U1 `taxdeath` (2571) "Tax on the transfer, or the growth that will be taxed" is the route to both trust and gifting. The reader has never been told the tax problem exists.

5.2 **[R3 - HIGH]** The key's gifting option reuses the trust row's phrase. Lesson row D, trust (2893): "value moved across while it is small". Key U2 `giveearly`, gifting (2578): "Value moved out during life, while it is still small". Key U2 `structure`, trust (2577): "Ownership moved into a structure with a trustee and terms". Specimen 17 (2760) says "Before a private company's value grew, the founder settled his shares into a trust": both `structure` and `giveearly` are literally true of it, and the lesson attaches "while it is small" to the trust. Route-miss trap.

5.3 **[R3 - HIGH]** The names invert the cases. Outcome "Basic documents current" (2508, lesson row 2890) is the answer when documents are not current (specimen 20, 2775; X5 item 4, 2654); "No structure needed" (2509) is the answer when they are current (specimen 21, 2780). Key U2 `basics` (2580), "A current will, named beneficiaries, a power of attorney", describes specimen 21 word for word ("They have current wills, named beneficiaries on both pensions, and powers of attorney") but the correct answer is `nothing_u2` (2581), "Nothing - a will already covers it" (which itself understates what that couple has).

5.4 **[R9 - HIGH]** Lifetime gifting is one row (2891): "allowances used every year, starting early / The allowance does not accumulate; a skipped year is gone." "Allowance" is a UK-style annual exemption and is not explained; the amount, the rule that gifts close to death are pulled back into the estate (specimen 2768, untaught), and why a gift reduces tax (estate undefined, 5.1) are all missing. The outcome name (2506) and X5 option say "Lifetime gifting"; the card says "allowances used every year".

5.5 **[R9 - HIGH]** Family governance is a row of fragments (2892): "staged distributions, an outside trustee, prenuptial agreements, heirs in the room". "Heirs in the room" is an idiom (specimen: children in the annual review, 2770); "staged distributions" has its ages (25, 30, 35) only in the specimen; the trustee's veto is only in the specimen. Key U2 `rules` (2579) says "Agreements, staged distributions, a named decision-maker"; "a named decision-maker" is not "an outside trustee", and "trustee" also appears in the trust option (2577), so specimen 19 (2770, "non-family trustee holding a veto") looks like a trust specimen.

5.6 **[R9 - MED]** "Power of attorney" appears three times (2811, 2890, 2898) and is never explained; the consequence of not having one ("the one that bites while the person is still alive", specimen 2777) is not in a card.

5.7 **[R3 - MED]** The course's own claims are unsourced while it teaches the reader to distrust unsourced claims. Unit 5 card 1 (2886), spec 19 `why` (2772) and X5 w3 (2653, "Most wealth that disappears in the second generation disappears through people, not rates") state as fact how second-generation wealth is lost. Unit 6 (2913) tells the reader to stop repeating "Seventy percent of families lose it in the second generation" because it comes from one consulting survey.

5.8 **[R4 - HIGH]** No route. Key U1 (2570-2575) asks "What is at risk in the handover" with four options; the lesson never poses that question. The lesson is organised by practice (A-E, 2890-2894), the key by problem then action, so the reader must reverse-engineer: if the risk is tax, which of trust or gifting? The only discriminators in the cards are "allowances used every year" (gifting) and "value moved across while it is small ... costs real money to run" (trust).

5.9 **[R3 - LOW]** Beneficiary documents have five names: "beneficiary forms" (2811, 2890), "beneficiary nomination" (2897, 2898), "named beneficiaries" (key 2580), "beneficiary form" (2655, 2777), "current beneficiary forms" (2912). "Five answers, in order of cost" (2888) lists "Nothing" last (E) though it is the cheapest.

5.10 **[R5 - MED]** X5 is the only drill whose options are the lesson's table headings (2890-2894), so all five items can be matched to a row (see simulation). That makes it a recognition test: a reader can pass it without knowing what an estate, a trustee or a trust is.

5.11 **[R6 - MED]** X5 w1 (2649) "the growth happens on the other side of the line" (the line is undefined); w3 (2653) unsourced claim; spec 18 `fals` (2768) and spec 17 `why` (2762) add untaught rules ("pulled back into the estate in most jurisdictions", "structures are used in places with no estate tax at all").

5.12 **[R8 - MED]** Card 3 (2897-2898) is the best transfer instruction in the course ("Check every beneficiary nomination you have ever completed. It costs nothing, takes an hour") but does not say where to find them, which accounts carry one, or what to do when the named person has died or divorced.

### Unit Six - What people believe instead (cards 2907-2913, drill err at 2660-2677)

6.1 **[R1 - MED]** Opens with a thesis ("The folklore is expensive in both directions", 2908), not a skill. The drill instruction (4022) says "Name which diagnostic question the claim fails to engage", but none of the eight claims is mapped to any key question (P1, E1, ...), so the instruction cannot be followed.

6.2 **[R5 - HIGH]** Only four of eight claims are taught in matching words by the cards that precede them: "Rich people don't pay tax" (2911), "You need offshore structures" (2912), "Seventy percent" (2913), and "It's only a 1% fee" (Unit 2, 2821-2822). "My house is my best investment" (2671) and "Whole-life insurance is a great investment" (2675) have no card at all. "Diversification is protection against ignorance" (2665) depends on Unit 1 card 1 and is not obviously faulty to a newcomer (the `w` calls it "a real quotation, applied to the wrong job").

6.3 **[R6 - MED]** Feedback introduces untaught terms: "step-up regimes" and "the basis resets at death" (2662), "leveraged, illiquid, undiversified" (2672), "term insurance" (2676). "Whole-life" appears in a card only as a warning in Unit 7 (2921), after the drill and unexplained.

6.4 **[R9 - HIGH]** "Mostly they defer it and locate it ... Gains never realised are never taxed as income." (2911) is the plainest-stated claim in the unit and the most jargon-dense: "locate" (asset location as a verb), "realised", and "never taxed" (a simplification; in most systems the tax is delayed, and is avoided only at death where a step-up applies, which no card mentions).

6.5 **[R3 - LOW]** `w` 4 (2668) sends the reader to "the sampling questions - who got counted, and who did the counting", and card 2913 to "The Statistical Claims course"; a learner who has not done that subject has no sampling concept.

6.6 **[R8 - MED]** "They name no mechanism, so they cannot be checked" (2909) is the transferable rule, stated once, with no example of asking for a mechanism.

### Unit Seven - Full determination (card 2919-2922, drill det)

7.1 **[R1 - HIGH]** One card (124 words) is the entire onboarding for a scored key: "Read the situation, decide what is actually threatening the capital, work the two questions under it, and name the practice that answers it." (2920). The two questions are never shown or named. The text that explains steps 1-4 and the readout (2933-2943) is unreferenced. The determination screen then shows all 21 outcome names crossed off as the learner answers (4092-4096) with no explanation.

7.2 **[R4 - HIGH]** No worked example. The learner is not shown a case, the three answers, why each option was chosen and what the name step adds. On a miss the screen says only "Step E1 wanted X" (4162-4165) with no reason.

7.3 **[R5 - HIGH]** This is the first time the learner sees the 9 question labels (the gate's is only implied by Unit 1's "Start with the threat") and the 40 option texts (gate 4, E1 4, E2 6, S1 3, S2 6, T1 4, T2 4, U1 4, U2 5). Only 17 of the 40 options are taught clearly beforehand (see Key-wording coverage). The unit drills X2-X5 ask a different, one-step question ("name the practice"), so the learner never practises the route.

7.4 **[R3 - HIGH]** Step 3 of every branch restates the outcome in a different vocabulary, then step 4 asks for the outcome name. See the Vocabulary map. And the name step carries no information: `detCandidates` filters by `keeps` (3578-3585) and after step 3 the readout (4094-4095) shows one uncrossed outcome, so the learner reads the name off the screen. The key therefore rewards paraphrase matching at step 3 and never makes the learner recall a name.

7.5 **[R6 - MED]** Verdict screen (4148-4169): the label "What would falsify this reading" (default `falsLabel`, 4168) is academic jargon. Specimen `why`/`fals` texts are where first-time explanations live, so the learner is taught after being scored (see Under-explained ideas).

7.6 **[R8 - HIGH]** 19 of 21 specimens describe the practice already adopted or proposed ("The proposal is to ... index funds", 2680; "The plan is to redefine the draw", 2700; "She sets a schedule", 2710; "A written policy says", 2750; "They hold index funds", 2705). Only two present a situation for which the learner supplies the fix (2 `location`, 20 `basicdocs`). The task is "which named practice is this" rather than "what is wrong here and what answers it". The course never shows how to use the key on the reader's own money.

7.7 **[R3 - MED]** Card 2921 mentions "a trust, a whole-life policy" - whole-life is untaught. "Four of the twenty-one specimens resolve to 'nothing is needed here'" (2921) repeats 2805 without saying which.

### Cross-unit - outcome names, key wording and specimens (2488-2584, 2679-2784)

C.1 **[R3 - HIGH]** Ten of the 21 outcome names appear in no lesson card. Never used: "A cost worth paying" (card says "a cost buying something real", 2836), "Staged diversification" (card: "Diversify mechanically", 2853), "Hedging without selling" (card: "cap the downside", 2849), "Risk transfer by insurance" (card: "Insure the tail", 2857), "Leverage discipline" (card: "Borrowing", 2851), "Concentration held deliberately" (card: "retain it deliberately", 2849), "Liability matching" (card: "an instrument maturing on that date", 2872), "Mechanical rebalancing" (card: "a written rebalancing rule", 2873), "Already matched" (card: "already where the liability is", 2875), "No structure needed" (card: "Nothing", 2894). "Deferral of gains" is partly there ("deferral", 2827). A reader choosing between names in drills X2-X5 is choosing between labels they were never given.

C.2 **[R3/R5 - HIGH]** Question 3 of every branch (E2, S2, T2, U2) is the outcome name rewritten as a sentence, so the learner names the practice twice in two vocabularies. Pairs are listed in the Vocabulary map. The drills use the outcome-name vocabulary, the key uses the sentence vocabulary, the cards use a third.

C.3 **[R5 - HIGH]** The unit drills do not rehearse the key. X1 practises question 1 alone. X2-X5 ask for the practice name directly (6, 6, 4 and 5 options) and skip the second-level questions entirely. The eight second-level questions (E1, E2, S1, S2, T1, T2, U1, U2) and their 36 option texts are met for the first time in the scored determination.

C.4 **[R4 - HIGH]** Specimen cues point at several gate options and the lessons give no rule for choosing. Specimen 6 (2705-2708) is meant to route "A leak that compounds" -> "Nothing is leaking", but it also mentions the rebalance and "talked them out of selling in two separate falls" (timing) and "keeps the estate documents current" (succession). Specimen 8 (2715) never states how large the holding is, so "One holding is most of the balance sheet" must be assumed. Specimen 15 (2750), drift from 60% to 71%, has no cue for "Being forced to act at the wrong moment". Specimen 16 (2755), a deposit needed in four months, literally fits T1 `datefixed` "A known bill lands on a known date" (2558) as well as the correct `nothing_t`; the separating half-sentence is 2875. Specimen 21 (2780) fits U2 `basics` exactly (see 5.3).

C.5 **[R6 - HIGH]** The rules that separate neighbouring practices are in the post-answer `fals` text, not in the cards: specimen 3 `fals` (2693) - deferral stops being free when one position becomes 40% of net worth (a threshold no card gives; the case itself is a 14% holding); specimen 7 `fals` (2713) - diversify vs retain turns on running the company; specimen 15 `fals` (2753) - in a taxable account rebalance by directing new contributions, which is exactly what specimen 3 does (2690-2692) and what X2 item 3 does (2608), so deferral and rebalancing are indistinguishable on the description; specimen 17 `fals` (2763) and 18 `fals` (2768) hold the real trust and gifting limits. These texts are what makes the answer unambiguous and they arrive after the answer.

C.6 **[R6 - MED]** None of the 27 drill `w` texts names a rival option or the cue that separates the answer from it; they explain why the answer is right. Two come close (X2 w6, 2615 "is not a leak"; X3 w6, 2631 "pretending otherwise is not preservation"). A learner who picked the wrong option is told the right reason, not why their reason failed.

C.7 **[R2 - MED]** Jurisdiction is mixed without warning. £ amounts, "limited company" (2725), "instant-access savings account" (2755), "annual tax-free allowance" (2650, 2765) are UK-flavoured; "basis step-up" (2662, 2692), "IPO lockup" (2620, 2710) and "umbrella liability policy" are US-flavoured; spelling is British ("realise", "organised"). The caveats say the detail is local (2963) but only after the course. A reader in either country meets rules that are not theirs with no marker.

C.8 **[R2 - MED]** Undefined terms inside the drill items themselves (the learner cannot recover them from any card): "all-in" (2588), "margin loan" (2590), "tranche", "lockup" (2620), "puts and calls" (2622), "umbrella liability" (2626), "equities", "asset class", "five points" (2640), "underweight" (2690), "tracked the benchmark" (2680), "property trust" (2604), "settled into a trust" (2648).

C.9 **[R3 - LOW]** The outcome type is called "practice" (2930, 2933), "tool" (subject-screen text "narrow 21 tools to one", 3900), "response" (2847, 2949), "answer" (2823, 2888, 2531 "What answers it") and "outcome". Unit-drill prompts ("Which leak is being answered?", "Which response to concentration or liability?", "What removes the forcing?", "Which succession practice - if any?", 2946-2950) each use a different frame for the same task.

C.10 **[R2 - LOW]** Feedback headings use academic words the owner has already objected to: "What would falsify this reading" (default `falsLabel`, 4168), "diagnostic question" (4022).

## Learner simulation

Rule applied: a reader who has read only the cards before the drill, using only what those cards said, must be able to (a) pick the answer and (b) justify it. SUPPORTED = a card sentence licenses both. WORDING-GAP = the idea is in a card but under different words from the option or step text, or the card gives only a fragment, or a needed cue is absent from the item. UNSUPPORTED = the cards never taught it. For each item the second column states the verdict; "w imports" notes feedback that uses untaught material (it does not change the verdict).

### Drill X1 "Which threat" (after Unit 1, cards 2789-2814)

| # | Item (line) | Verdict | Licensing card sentence, or what is missing |
|---|---|---|---|
| 1 | £3m at 1.6% all-in, tracks the index (2588) | SUPPORTED | 2796 "A leak that compounds - fees, tax paid earlier than required, spending" + tell "runs for thirty years". w imports "3.5% real return" (2821, Unit 2). "all-in" undefined. |
| 2 | 80% in employer stock, margin loan (2590) | SUPPORTED | 2797 "A single event that could end it - concentration, liability, borrowing". "margin loan" undefined; w imports "Correlated exposures" (2844, Unit 3). |
| 3 | Retiree selling equities in a 30% fall (2592) | SUPPORTED | 2798 "selling into a fall to fund a bill" + "Solvent the whole time". Competes with threat 1 "spending" (item 5); no separating rule. |
| 4 | Widowed parent, stale will, nobody knows the accounts (2594) | WORDING-GAP | Threat 4 is described as "transfer, heirs, control" (2799); the item contains none of those. "Documents" appears only in card 4's bullet (2811), unmapped to a threat. "the arrangement" undefined. |
| 5 | Owner takes 9% a year to live on (2596) | WORDING-GAP | "spending" is in 2796, but no card says 9% is too much (3-4% return arrives in Unit 2; 3.5% draw in 2700); the cue "assumed the business would be sold" points elsewhere; competes with threat 3. |
| 6 | Landlord, six properties, tenant claim (2598) | WORDING-GAP | "liability" is a bare word in 2797; no card says a claim can reach everything you own (first said at 2850, Unit 3). |

X1 totals: 3 SUPPORTED, 3 WORDING-GAP, 0 UNSUPPORTED.

### Drill X2 "Leaks" (after Units 1-2, cards to 2838)

| # | Item (line) | Verdict | Licensing card sentence, or what is missing |
|---|---|---|---|
| 1 | Index fund in taxable, bonds and property trust in the sheltered account (2604) | SUPPORTED | 2826 "Tax on income -> asset location. Same portfolio, arranged so the taxed parts sit in the shelter." ("property trust", "tax-sheltered" not defined.) |
| 2 | Moved 1.4% active fund to 0.07% index fund (2606) | SUPPORTED | 2825 "Fees -> a low-cost core. A cost avoided is kept in full; outperformance is a hope." ("index fund" undefined.) |
| 3 | Hold large unrealised gains, fix drift with new contributions (2608) | WORDING-GAP | 2827 "Unrealised gains keep compounding on the untaxed amount", but the item turns on "rebalanced through sales" and "new contributions", and rebalancing is first taught in Unit 4; "realised" never defined. |
| 4 | Sold the loser, booked loss against gains, bought similar fund (2610) | SUPPORTED | 2828 "Bank the loss, keep the exposure, watch the repurchase rules." (mechanism is only that phrase.) |
| 5 | Withdrawals set at 3.5% each January, spending adjusts (2612) | SUPPORTED | 2832 "Defining the draw as a percentage - reset annually against the actual value." Label "Fixed burn rate" appears only at 2829, undefined, and "fixed" clashes with "fixed in pounds" (2832). |
| 6 | Flat annual fee for tax planning, rebalance, estate paperwork (2614) | SUPPORTED | 2836 "A flat fee for work that genuinely would not otherwise happen - the tax filings, the rebalance nobody executes, the estate documents ..." The label "A cost worth paying" is not in the card. |

X2 totals: 5 SUPPORTED, 1 WORDING-GAP, 0 UNSUPPORTED.

### Drill X3 "Single events" (after Units 1-3, cards to 2860)

| # | Item (line) | Verdict | Licensing card sentence, or what is missing |
|---|---|---|---|
| 1 | Fixed tranche each quarter for three years after the lockup (2620) | SUPPORTED | 2855 "a fixed schedule, executed regardless of price, with the tax accepted as it falls due." ("tranche", "lockup" undefined; the name "Staged diversification" is not in a card.) |
| 2 | Buys puts, sells calls around founder stake (2622) | WORDING-GAP | Only licence is "cap the downside" (2849). Hedging, puts, calls, why not sell, and the cost are never taught; the answer is reachable by the keyword "capping", the justification is not. |
| 3 | Each rental in its own limited company, home outside (2624) | WORDING-GAP | 2860 "Entity separation does the structural version of the same job." "Entity" is never tied to "limited company"; why a company stops a claim is never said. |
| 4 | £5m umbrella policy for a few hundred a year (2626) | SUPPORTED | 2859 "no umbrella liability policy, which costs a few hundred a year and is the one that stops a single accident reaching everything." |
| 5 | Mortgage fixed 10 years at 45%, nothing against the portfolio (2628) | WORDING-GAP | 2851 "modest, fixed, not callable" matches in meaning, but the option is "Leverage discipline" (word in no card), "modest" has no benchmark for 45%, "callable" is undefined and not stated in the item. |
| 6 | Founder keeps 70% in the company she runs, rest diversified, three years' spending outside (2630) | SUPPORTED | 2856 "The exception is the business you actively run ... diversified non-business assets, a spending reserve held outside the company, and no borrowing secured on the stock." |

X3 totals: 3 SUPPORTED, 3 WORDING-GAP, 0 UNSUPPORTED.

### Drill X4 "Forced moments" (after Units 1-4, cards to 2879)

| # | Item (line) | Verdict | Licensing card sentence, or what is missing |
|---|---|---|---|
| 1 | Three years in cash and short bonds, equities sold only in up years (2636) | SUPPORTED | 2871 "two to five years of costs in cash and short bonds. So no month's spending depends on that month's price." The "sold only in up years" rule is not in any card (4.6). |
| 2 | School fees each September met by bonds maturing each August (2638) | WORDING-GAP | 2872 "A known bill on a known date -> an instrument maturing on that date" matches in meaning; the option "Liability matching" uses two words absent from every Unit 4 card. |
| 3 | Written rule trades back to target if drift exceeds five points (2640) | SUPPORTED | 2873 "Drift ... -> a written rebalancing rule. Decide in advance, when nobody is frightened." ("target", "asset class", "points" untaught.) |
| 4 | £70k deposit due in four months sits in savings (2642) | WORDING-GAP | 2875 "the money is already where the liability is, and the correct action is none" and 2879 "A deposit needed in four months belongs somewhere that cannot fall". The label "Already matched" is in no card, and cash held for a known need resembles "Spending reserve". |

X4 totals: 2 SUPPORTED, 2 WORDING-GAP, 0 UNSUPPORTED.

### Drill X5 "The handover" (after Units 1-5, cards to 2901)

| # | Item (line) | Verdict | Licensing card sentence, or what is missing |
|---|---|---|---|
| 1 | Shares settled into a trust before the growth, outside the estate (2648) | SUPPORTED | 2893 "Trust or holding structure - value moved across while it is small. Timing is the technique." (reader still does not know what the estate or the line is.) |
| 2 | Annual tax-free allowance to each child for eleven years (2650) | SUPPORTED | 2891 "Lifetime gifting - allowances used every year, starting early. The allowance does not accumulate; a skipped year is gone." |
| 3 | Distributions at 25/30/35, non-family trustee veto, kids at reviews (2652) | SUPPORTED | 2892 "Family governance - staged distributions, an outside trustee, prenuptial agreements, heirs in the room." |
| 4 | Will 11 years old, beneficiary form names ex-spouse, no power of attorney (2654) | SUPPORTED | 2890 "Basic documents current - will, beneficiary forms, power of attorney" and 2897 "that nomination generally overrides whatever the will says." |
| 5 | Couple in their thirties, current wills and beneficiaries (2656) | SUPPORTED | 2894 "Nothing - the estate is simple and current" and 2901 "Below that line they are a product". Trap: the name "Basic documents current" also reads as true of the item. |

X5 totals: 5 SUPPORTED, 0 WORDING-GAP, 0 UNSUPPORTED. This unit passes because its options are the table headings, which is recognition, not comprehension (5.10).

### Faulty claims (after Units 1-6, cards to 2913)

| # | Claim (line) | Verdict | Licensing card sentence, or what is missing |
|---|---|---|---|
| 1 | "Rich people don't pay tax." (2661) | SUPPORTED | 2911 "Mostly they defer it and locate it ... Gains never realised are never taxed as income." w imports "step-up regimes", "basis" (untaught). |
| 2 | "You need offshore structures and a private bank..." (2663) | SUPPORTED | 2912 "Below a few million, structures cost more in fees and filing than they save." |
| 3 | "Diversification is protection against ignorance." (2665) | WORDING-GAP | Idea is Unit 1 card 1 (2790-2791, building vs keeping), not revisited in Unit 6; nothing in the claim signals a fault to a newcomer ("a real quotation" is not taught). |
| 4 | "Seventy percent of wealthy families lose it by the second generation." (2667) | SUPPORTED | 2913 "traces to a single consulting firm's survey of its own clients". The "sampling questions" in w belong to another course. |
| 5 | "I don't need a cash buffer - I'll just sell when I need the money." (2669) | SUPPORTED | 2867-2868 and 2877-2878 (the card says "buffer"; the outcome says "Spending reserve"). |
| 6 | "My house is my best investment." (2671) | UNSUPPORTED | No card discusses a home as an investment; w uses "leveraged, illiquid, undiversified" (none taught). |
| 7 | "It's only a 1% fee." (2673) | SUPPORTED | 2821-2822 "a quarter to a third of the return ... Convert every charge into a share of expected return before judging it." |
| 8 | "Whole-life insurance is a great investment." (2675) | UNSUPPORTED | No card on whole-life, bundling or term insurance; Unit 3's insurance card (2858-2860) covers the opposite point (insure the tail only). |

Faulty-claim totals: 5 SUPPORTED, 1 WORDING-GAP, 2 UNSUPPORTED. The drill prompt "Name which diagnostic question the claim fails to engage" (4022) cannot be answered for any claim: none maps to a key question.

### Specimens (after all units; correct route = gate, question 2, question 3, then name)

Verdicts per step. S = SUPPORTED, W = WORDING-GAP, U = UNSUPPORTED. "Name" is the outcome name chosen from the group.

| # | Specimen (line) | Gate | Q2 | Q3 | Name | Where the gaps are |
|---|---|---|---|---|---|---|
| 1 | feecore (2680) | S | S | S | S | none ("wrapper", "spreads", "a tenth" are untaught but the cues are in the item) |
| 2 | location (2685) | S | W | W | S | E1 `taxnow` "Tax paid sooner than it had to be" (2527) does not fit income taxed every year (2.6); E2 "tax-inefficient ... sheltered account" (2533) vs card "taxed parts ... shelter" (2826) |
| 3 | defer (2690) | W | S | W | S | gate: a 14%-vs-10% drift could be read as concentration; threshold only in `fals` (2693). E2 "Stop realising gains" (2534): "realising" untaught; "directing new money" untaught |
| 4 | harvest (2695) | S | W | S | S | E1 `taxnow` ("sooner") fits loss harvesting loosely; `fals` (2698) says it "moves tax forward in time by lowering the basis" (untaught) |
| 5 | burnrate (2700) | S | W | S | W | E1 "Withdrawals running ahead of the capital" (2528) vs card "Spending" (2829); name "Fixed burn rate": "burn rate" undefined, "fixed" clash |
| 6 | acceptcost (2705) | W | S | W | W | gate: item has cues for threats 1, 3 and 4 and no rule picks threat 1 (C.4); E2 `nothing_e` (2537) contradicts card 2836; name not in a card |
| 7 | diversify (2710) | S | S | S | W | name "Staged diversification" vs card "Diversify mechanically" |
| 8 | hedge (2715) | W | W | S | W | gate and S1: item never states the stake is large (C.4); hedging untaught (3.2) |
| 9 | insure (2720) | S | S | S | S | none |
| 10 | entity (2725) | S | S | S | S | none (entity untaught as a concept but "separate the entities" and the card match) |
| 11 | deleverage (2730) | S | S | S | W | name "Leverage discipline"; "callable" defined only inside the item |
| 12 | retain (2735) | S | S | S | S | none |
| 13 | cashbuffer (2740) | S | S | S | S | none |
| 14 | ladder (2745) | S | S | S | W | name "Liability matching" (2502) not in a card; "ladder" never taught |
| 15 | rebalance (2750) | W | S | W | S | gate "forced to act" contradicts "nothing forces it" (4.5); T2 "set bands", "target" untaught |
| 16 | matched (2755) | W | W | W | W | gate; T1 `datefixed` also fits literally; T2 "the match already holds" (2566) and the name use "match", absent from every card |
| 17 | trust (2760) | S | U | S | S | U1 `taxdeath` "Tax on the transfer, or the growth that will be taxed" (2571): the item never mentions tax and no card explains estate tax (5.1) |
| 18 | gifting (2765) | S | S | W | S | U2 `giveearly` (2578) reuses the trust row's "while it is small" (5.2) |
| 19 | governance (2770) | S | S | W | S | U2 "a named decision-maker" (2579) vs card "an outside trustee" (2892); "trustee" also in the trust option |
| 20 | basicdocs (2775) | W | S | S | S | gate: threat 4 sub-line "transfer, heirs, control" (2799) has no document cue |
| 21 | simple (2780) | W | S | W | W | gate: nothing threatens; U2 `basics` (2580) matches the item exactly but `nothing_u2` (2581) is correct (5.3); name "No structure needed" vs "Nothing" (2894) |

Step totals over the 84 checks (21 specimens x 4): 55 SUPPORTED, 28 WORDING-GAP, 1 UNSUPPORTED. Route steps only (63): 42 S, 20 W, 1 U. Names only (21): 13 S, 8 W.
Specimens fully answerable and justifiable from the cards (all four steps S): 1, 9, 10, 12, 13 = 5 of 21. Specimens with a fully supported route but an untaught name: 7, 11, 14 = 3. Specimens with at least one route gap: 2, 3, 4, 5, 6, 8, 15, 16, 17, 18, 19, 20, 21 = 13.

### Totals

| Set | Items | SUPPORTED | WORDING-GAP | UNSUPPORTED |
|---|---|---|---|---|
| X1 Which threat | 6 | 3 | 3 | 0 |
| X2 Leaks | 6 | 5 | 1 | 0 |
| X3 Single events | 6 | 3 | 3 | 0 |
| X4 Forced moments | 4 | 2 | 2 | 0 |
| X5 The handover | 5 | 5 | 0 | 0 |
| Faulty claims | 8 | 5 | 1 | 2 |
| Specimens (an item is SUPPORTED only if all four steps are) | 21 | 5 | 15 | 1 |
| **All** | **56** | **28** | **25** | **3** |

The one UNSUPPORTED specimen is 17 (trust), counted by its U1 step; specimens that also contain W steps are counted once, under WORDING-GAP. Not answerable-and-justifiable from the cards: 28 of 56 (25 WORDING-GAP + 3 UNSUPPORTED).

## Vocabulary map

One concept per row, every wording found, verbatim, with line numbers. "Key" = determination step text. Where a concept has a lesson wording, an outcome name, a key wording and a drill wording that all differ, the reader has to treat them as four things.

### The thing being protected and the four threats

| Concept | Variants (verbatim) | Where |
|---|---|---|
| What is protected | "the capital" / "the money" / "wealth" / "fortune" / "portfolio" / "balance sheet" / "net worth" / "assets" / "estate" | 2512 gate; 2519, 2799; 2928; 2790; 2822; 2542; 2590, 2710; 2610; 2894, 2900 |
| Threat 1 | "A leak that compounds" / "Leaks that compound" (unit title) / "Leaks" (drill, tab) / "The five leaks and their answers" / "Where is the leak" / "Which leak is being answered?" | 2513, 2796; 2818; 2947, 2956; 2823; 2525; 2947 |
| Threat 2 | "A single event could end it" / "A single event that could end it" / "The single event" (unit) / "Single events" (drill, tab) / "Where is the single point of failure" / "Three failure points, six responses" | 2515, 2586; 2797; 2842; 2948, 2956; 2541; 2847 |
| Threat 3 | "Being forced to act at the wrong moment" / "Forced at the wrong moment" (unit) / "Forced moments" (drill, tab) / "What could force the decision" / "What removes the force" / "What removes the forcing?" / "forced seller" / "the requirement to act on a date you did not choose" / "Remove the requirement" | 2517, 2798; 2864; 2949, 2957; 2556; 2562; 2949; 2812; 2868; 2869 |
| Threat 4 | "The money outlives the arrangement" / "The money outliving the arrangement" / "The handover" (unit, drill) / "What is at risk in the handover" | 2519; 2799; 2883, 2950; 2570 |
| Threat code | "P1" = a leak (lesson table); "P1" = the first question (key) | 2796-2799; 2512, 4056 |
| What the outcomes are | "practice" / "tool" / "response" / "answer" | 2930, 2933; 3900; 2847, 2949; 2823, 2888, 2531 |

### The 21 outcomes (outcome name / lesson wording / key question-3 wording / specimen or drill wording)

| Outcome name (line) | Lesson wording (line) | Key wording (line) | Other wording (line) |
|---|---|---|---|
| Low-cost core (2489) | "a low-cost core" (2825) | "Move the core to something costing a tenth as much" (2532) | "index funds at 0.07%" (2681); "Pay less in fees" (2809); "lower fees" (2912) |
| Asset location (2490) | "asset location" (2826) | "Put the tax-inefficient assets in the sheltered account" (2533) | "the taxed parts sit in the shelter" (2826); "defer it and locate it" (2911) |
| Deferral of gains (2491) | "deferral" (2827) | "Stop realising gains that did not need realising" (2534) | "Tax realised early" (2827); "Tax paid sooner than it had to be" (2527) |
| Loss harvesting (2492) | "loss harvesting" (2828) | "Realise losses deliberately, to offset gains" (2535) | "Bank the loss, keep the exposure, watch the repurchase rules" (2828); "similar but not identical" (2610) |
| Fixed burn rate (2493) | "a fixed burn rate" (2829); "Spend a share of capital, not a number" (2831); "the draw as a percentage" (2832); "Define spending as a share of capital" (2810) | "Fix withdrawals as a share of capital, reviewed yearly" (2536) | "redefine the draw as 3.5%" (2700); "a defined burn rate" (2912) |
| A cost worth paying (2494) | "Not every cost is a leak" (2835); "a cost buying something real" (2836) | "Nothing - you would have to do the work regardless" (2537); "Nothing is leaking - the charge buys something real" (2529) | "A charge that buys work you would genuinely not do is not a leak" (2615) |
| Staged diversification (2495) | "Diversify mechanically" (2853); "sell down on a schedule" (2849) | "Sold down on a schedule, accepting the tax" (2547) | "a fixed tranche each quarter" (2620) |
| Hedging without selling (2496) | "cap the downside" (2849) | "Downside capped without selling" (2548) | "buy puts and sell calls" (2622) |
| Risk transfer by insurance (2497) | "Insure the tail, self-insure the rest" (2857); "transfer the tail to an insurer" (2850) | "The tail is handed to an insurer for a premium" (2550) | "umbrella liability policy" (2859, 2626) |
| Entity separation (2498) | "Entity separation" (2860); "separate the entities" (2850) | "Assets separated so one claim cannot reach the rest" (2551) | "each ... in its own limited company" (2725); "ring-fenced" (2737) |
| Leverage discipline (2499) | "Borrowing ... modest, fixed, not callable" (2851) | "Borrowing kept modest, fixed and not callable" (2552); "Borrowed money can force the outcome" (2544) | "margin loan" (2590) |
| Concentration held deliberately (2500) | "retain it deliberately" (2849); "the business you actively run" (2856) | "Kept - it is the thing they actually run" (2549) | "ring-fenced" (2737) |
| Spending reserve (2501) | "a spending reserve" (2812, 2856); "The reserve" (2876); "the buffer" (2877); "two to five years of costs in cash and short bonds" (2871) | "Years of spending held in cash and short bonds" (2563) | "cash buffer" (2669, 2912, 2961); "three years of living costs" (2740) |
| Liability matching (2502) | "an instrument maturing on that date" (2872); "A known bill on a known date" (2872) | "An instrument that matures when the bill arrives" (2564); "A known bill lands on a known date" (2558) | "bonds maturing that August" (2638) |
| Mechanical rebalancing (2503) | "a written rebalancing rule" (2873); "Drift, with nothing forcing action" (2873) | "A written rule that trades back to target at set bands" (2565); "Nothing forces it - the mix has simply drifted" (2559) | "more than five points from its weight" (2640) |
| Already matched (2504) | "the money is already where the liability is" (2875) | "Nothing - the money is already where the liability is" (2560); "Nothing - the match already holds" (2566) | "Recognising the cases that need no action" (2643) |
| Trust or holding structure (2505) | "Trust or holding structure" (2893); "Trusts and holding companies" (2900); "value moved across while it is small" (2893) | "Ownership moved into a structure with a trustee and terms" (2577) | "settled ... into a trust" (2648, 2760) |
| Lifetime gifting (2506) | "Lifetime gifting" (2891); "allowances used every year, starting early" (2891) | "Value moved out during life, while it is still small" (2578) | "annual tax-free allowance" (2650, 2765) |
| Family governance (2507) | "Family governance" (2892); "staged distributions, an outside trustee, prenuptial agreements, heirs in the room" (2892) | "Agreements, staged distributions, a named decision-maker" (2579) | "non-family trustee holding a veto" (2652, 2770) |
| Basic documents current (2508) | "Basic documents current - will, beneficiary forms, power of attorney" (2890) | "A current will, named beneficiaries, a power of attorney" (2580); "Nothing complex - the basic documents are stale or missing" (2573) | "beneficiary nomination" (2897); "beneficiary form" (2655, 2777) |
| No structure needed (2509) | "Nothing - the estate is simple and current" (2894) | "Nothing - the estate is simple and current" (2574); "Nothing - a will already covers it" (2581) | "Most people are sold structure long before they need it" (2657) |

### Words that mean two or three things

| Word | Senses | Where |
|---|---|---|
| fixed | bad: "A withdrawal fixed in pounds"; good: outcome "Fixed burn rate"; a loan's rate: "modest, fixed and not callable" | 2832; 2493; 2552, 2851 |
| liability | a legal claim (Unit 3 / key S1); a future bill ("Liability matching", "where the liability is") | 2797, 2859, 2543; 2502, 2560, 2875 |
| forced | a forced sale in a fall (threat 3); "Nothing forces it" in two of its four outcomes | 2517; 2559, 2560 |
| staged | selling down a position ("Staged diversification"); paying out heirs ("staged distributions") | 2495; 2892, 2579 |
| reserve / buffer / cash | see Spending reserve row; "reserve" is also "a spending reserve held outside the company" (a shock-unit support) | 2501, 2856 |
| real | "real return" (after inflation, undefined); "a cost buying something real" | 2821; 2836, 2529 |
| match | "matched/matching" in two outcome names and key T2; never in a card | 2502, 2504, 2566 |
| premium | a premium on insurance (Unit 4 metaphor); key S2 "for a premium"; Unit 3 (insurance) never uses it | 2878; 2550 |

## Key-wording coverage

Each key step label and option text (lines 2512-2582), checked against the cards that come before the determination. yes = the words and enough of the idea are in a card; partly = the idea is there under different words, or the words are there without the idea; no = not taught. Step labels are "yes" only if a card poses the question.

| Step | Label / option (verbatim) | Line | Taught before needed? | Evidence |
|---|---|---|---|---|
| P1 | What threatens the capital here? | 2512 | partly | Unit 1 teaches the four answers (2796-2799) and "Start with the threat" (2802) but never poses the question; "capital" undefined; lesson calls the answers P1-P4 |
| P1 | A leak that compounds / fees, tax paid early, spending | 2513 | yes | 2796 (compounding never shown) |
| P1 | A single event could end it / concentration, liability, borrowing | 2515 | yes | 2797 |
| P1 | Being forced to act at the wrong moment / solvent, but selling into a fall | 2517 | yes | 2798, though two of its four outcomes have nothing forcing anything (4.5) |
| P1 | The money outlives the arrangement / transfer, heirs, control | 2519 | partly | 2799 "outliving the arrangement"; "arrangement" undefined; documents not in the sub-line |
| E1 | Where is the leak | 2525 | no | question never posed |
| E1 | The cost of the wrapper - fees and spreads | 2526 | partly | "Fees" (2825); "wrapper" appears once as a product word (2803); "spreads" never |
| E1 | Tax paid sooner than it had to be | 2527 | partly | fits row C (2827) and loosely D; not B (2826) |
| E1 | Withdrawals running ahead of the capital | 2528 | partly | card says "Spending" (2829) and "withdrawal fixed in pounds" (2832) |
| E1 | Nothing is leaking - the charge buys something real | 2529 | yes | 2836 "a cost buying something real" |
| E2 | What answers it | 2531 | no | question never posed |
| E2 | Move the core to something costing a tenth as much | 2532 | partly | "a low-cost core" (2825); "core", "a tenth", "index" untaught |
| E2 | Put the tax-inefficient assets in the sheltered account | 2533 | partly | "the taxed parts sit in the shelter" (2826); "tax-inefficient" untaught |
| E2 | Stop realising gains that did not need realising | 2534 | partly | "Unrealised gains keep compounding" (2827); "realising" undefined |
| E2 | Realise losses deliberately, to offset gains | 2535 | partly | "Bank the loss ... Gains already realised" (2828) |
| E2 | Fix withdrawals as a share of capital, reviewed yearly | 2536 | yes | 2831 "Spend a share of capital"; 2832 "reset annually" |
| E2 | Nothing - you would have to do the work regardless | 2537 | no | contradicts 2836 "would not otherwise happen" |
| S1 | Where is the single point of failure | 2541 | no | question never posed (card: "Three failure points", 2847) |
| S1 | One holding is most of the balance sheet | 2542 | partly | "One holding dominates" (2849); "balance sheet" untaught |
| S1 | One event could create a claim against everything | 2543 | yes | 2850 "One event creates a claim on everything" |
| S1 | Borrowed money can force the outcome | 2544 | yes | 2851 "Borrowing can force the outcome" ("the outcome" unspecified) |
| S2 | What is actually done about it | 2546 | no | question never posed |
| S2 | Sold down on a schedule, accepting the tax | 2547 | yes | 2849, 2855 |
| S2 | Downside capped without selling | 2548 | partly | "cap the downside" (2849), three words |
| S2 | Kept - it is the thing they actually run | 2549 | partly | 2856 "the business you actively run"; "Kept" appears nowhere |
| S2 | The tail is handed to an insurer for a premium | 2550 | yes | 2850, 2857-2858 ("tail" never defined; "premium" used only in Unit 4) |
| S2 | Assets separated so one claim cannot reach the rest | 2551 | partly | "separate the entities" (2850) |
| S2 | Borrowing kept modest, fixed and not callable | 2552 | partly | words in 2851; "callable" undefined, "modest" unquantified |
| T1 | What could force the decision | 2556 | no | question never posed |
| T1 | Spending has to come out during a fall | 2557 | yes | 2871 |
| T1 | A known bill lands on a known date | 2558 | yes | 2872 |
| T1 | Nothing forces it - the mix has simply drifted | 2559 | partly | 2873 "Drift, with nothing forcing action"; "the mix" untaught |
| T1 | Nothing - the money is already where the liability is | 2560 | yes | 2875 near-verbatim |
| T2 | What removes the force | 2562 | no | question never posed |
| T2 | Years of spending held in cash and short bonds | 2563 | yes | 2871 |
| T2 | An instrument that matures when the bill arrives | 2564 | yes | 2872 |
| T2 | A written rule that trades back to target at set bands | 2565 | partly | "a written rebalancing rule" (2873); "target", "bands" untaught |
| T2 | Nothing - the match already holds | 2566 | no | "match" in no card |
| U1 | What is at risk in the handover | 2570 | no | question never posed |
| U1 | Tax on the transfer, or the growth that will be taxed | 2571 | no | Unit 5 says "Not usually to ... tax" (2886); estate tax never explained |
| U1 | The heirs, or the people around them | 2572 | partly | 2886 divorce, unprepared successor, unilateral control |
| U1 | Nothing complex - the basic documents are stale or missing | 2573 | yes | 2890, 2897 |
| U1 | Nothing - the estate is simple and current | 2574 | yes | 2894 verbatim |
| U2 | What is put in place | 2576 | no | question never posed |
| U2 | Ownership moved into a structure with a trustee and terms | 2577 | partly | 2893, 2900; "trustee" appears in the governance row too |
| U2 | Value moved out during life, while it is still small | 2578 | partly | gifting card says "allowances used every year" (2891); "while it is small" is the trust card's phrase (2893) |
| U2 | Agreements, staged distributions, a named decision-maker | 2579 | partly | 2892 "an outside trustee, prenuptial agreements" |
| U2 | A current will, named beneficiaries, a power of attorney | 2580 | yes | 2890 (beneficiary "forms" vs "named beneficiaries"); also true of specimen 21 |
| U2 | Nothing - a will already covers it | 2581 | no | never taught; understates specimen 21 |

Tally. Step labels (9): 0 yes, 1 partly (P1), 8 no (E1, E2, S1, S2, T1, T2, U1, U2). Option texts (40): 17 yes, 19 partly, 4 no (E2 `nothing_e`, T2 `nothing_t2`, U1 `taxdeath`, U2 `nothing_u2`). So 23 of the 40 options the learner is scored on were taught only partly or not at all, and every one of the eight follow-up question labels is new.

## Under-explained ideas (R9)

Measured coverage: the course is 22 cards and 2,431 words (all seven units), against 1,908 words of specimen `why`/`fals` and 589 of drill `w` shown after answers. Ten practices are taught in a table row or fragment of roughly 35 words or fewer: asset location, deferral, loss harvesting, hedging, entity separation, leverage discipline, liability matching, mechanical rebalancing, "already matched", lifetime gifting. The three table cards that carry them are 88 (Unit 2), 79 (Unit 3) and 91 (Unit 4) words each.

| Idea | What the lesson says now (line) | What a newcomer still would not understand |
|---|---|---|
| "A leak that compounds" | "Never urgent, which is why it runs for thirty years." (2796); a 1% fee is "a quarter to a third of the return" (2821) | What compounding is, what 1% does over thirty years in pounds, what "real" return means, how 1% becomes "a quarter to a third" |
| Low-cost core | "Fees -> a low-cost core. A cost avoided is kept in full; outperformance is a hope." (2825) | What a "core" is, what an index fund is, why one costs a tenth, how to switch, whether switching triggers tax (it can, which cuts against row C) |
| Asset location | "Same portfolio, arranged so the taxed parts sit in the shelter." (2826) | Which assets are "the taxed parts", what a shelter (sheltered account) is, why bonds and property trusts go in and equities do not |
| Deferral | "Unrealised gains keep compounding on the untaxed amount." (2827) | That unrealised means not yet sold, that the tax is still owed later, why later is better, how contributions rather than sales fix drift (the method is only in 2609) |
| Loss harvesting | "Bank the loss, keep the exposure, watch the repurchase rules." (2828) | How a loss reduces tax, why buying a similar fund keeps the exposure, what the repurchase rule says, when it is not worth doing |
| Fixed burn rate | "Spending -> a fixed burn rate" (2829); card 3 (2831-2834) | What "burn rate" means, where 3.5% comes from, how to compute the year's amount, what the lifestyle does in a bad year in numbers |
| A cost worth paying | Card 4 (2835-2838) | How to tell a flat fee from a percentage in a real quote, and what each costs on a £1m portfolio |
| Correlated exposures | One example (2845) | How to find "the single event that would move them together" in your own holdings |
| Staged diversification | Card 3 (2853-2856) | How big each tranche is, over what period, what the tax bill looks like, what a lockup is |
| Hedging | "cap the downside" (2849) | What a put and a call are, why capping both sides, why not sell, what it costs, who can do it |
| Insurance for the tail | Card 4 (2857-2859) | What "the tail" is, what "self-insure" means in practice, which losses count as "unrecoverable" for a given household |
| Entity separation | "Entity separation does the structural version of the same job." (2860) | What an entity is, how a company limits a claim, what it costs to run, why commingling or a guarantee defeats it |
| Leverage discipline | "modest, fixed, not callable" (2851) | What "callable" means, what "modest" is (45%?), what a margin loan is, why a margin loan is the opposite |
| Concentration held deliberately | Note at 2856 | How to test whether your case qualifies (three supports), what the reserve must be (three years in the specimen) |
| Spending reserve | "two to five years of costs in cash and short bonds" (2871); cost-as-premium (2878) | Why two to five years, how it is spent and refilled (rule only in 2740), what a short bond is, where it is held |
| Liability matching | "A known bill on a known date -> an instrument maturing on that date" (2872) | What a bond is, why a bond held to maturity has no price risk, how to size and time it |
| Mechanical rebalancing | "Drift ... -> a written rebalancing rule" (2873) | What drift is, what a target and a band are, why selling what rose is correct, when selling is too costly (2753) |
| Already matched | One sentence (2875) | What "already matched" looks like (money needed soon is in cash), how it differs from a spending reserve |
| Trust or holding structure | "value moved across while it is small ... Timing is the technique. Costs real money to run." (2893); card 4 (2900-2901) | What an estate is, why value in it is taxed, what a trust is and who the trustee is, why moving value early helps, what "irrevocable in substance" means for the person |
| Lifetime gifting | "allowances used every year, starting early" (2891) | What the allowance is and how large, why it does not accumulate, the rule that late gifts are pulled back |
| Family governance | "staged distributions, an outside trustee, prenuptial agreements, heirs in the room" (2892) | What each does, what a veto is for, how to start the conversation (the specimen says "since their mid-teens", 2770) |
| Power of attorney | Named three times, never explained (2811, 2890, 2898) | What it is and what goes wrong without one |
| No structure needed | Row E (2894); card 4 (2900-2901) | What "large enough" means ("Where the estate is large enough", 2900) |
| The key itself | Unit 7 card (2919-2922) | That there are three questions, what they are, what the readout is, what "route" means, what a miss shows |

## What a good version of this subject's units would contain

Applies to every unit: one vocabulary. Each practice gets a single name, and that exact string is the outcome name, the lesson heading, the key option and the drill option, with plain words and an everyday example the first time it appears. A drift test that fails when any outcome name or key option string is missing from a lesson card (the same device the project uses for client/server constants) would make the current mismatches impossible to author. Every concept is explained in a paragraph with an example before it is named; tables are summaries after the explanation, not the explanation.

### Unit One - Keeping is not making
- First card: what the reader will be able to do ("read a money situation, say what is threatening it, say where, say what answers it") and one worked case through the key with its real wording on screen, for example the £4m portfolio paying 1.7% walked through "a leak that compounds" -> "the cost of the wrapper" -> "move the core to something costing a tenth as much" -> "Low-cost core".
- Define capital (the savings and investments you are trying to keep), compounding (£100,000 growing at 4% for thirty years is about £324,000; at 3% it is about £243,000), and real return (after inflation).
- One card per threat: plain description, an everyday example, the words to look for, and the nearest look-alike with the test that separates them (spending too much vs forced to sell in a fall: "is the problem how much you take out, or that you had to sell on a bad day?").
- One consistent thesis about how fortunes are lost, and a card that maps the four "practices that survive at every size" to their threats.
- A stated rule for "nothing is threatening this", and the names of the four outcomes that mean "leave it alone".
- Drop the lesson's P1-P4 codes (or rename the key's), and give the reader the key's step wording in plain terms before any drill.

### Unit Two - Leaks that compound
- Open with the two questions this unit answers: where is the leak, and what answers it.
- One card per practice, each a paragraph with an example: fees (what an index fund is, why it costs a tenth, what switching costs in tax), the three tax leaks (what a sheltered account is; what "sold" versus "not sold" means, which is what realised means; asset location with a worked two-account example; deferral with the £180,000 sale; loss harvesting with a £40,000 loss and the repurchase rule), the percentage draw (£3m at 3.5% is £105,000; after a 20% fall it is £84,000; where 3.5% comes from or that it is illustrative), and cost worth paying (a flat £9,000 versus 1% versus commission on £1m).
- Show the percentage-of-capital to percentage-of-return conversion as a calculation the reader can repeat.
- One name for the draw idea; if "burn rate" stays, define it; do not use "fixed" for both the bad and the good version.
- Make key E2 for "a cost worth paying" say what the card says ("buys work you would not otherwise do").
- A walked case through E1 and E2 using the key's exact option text.

### Unit Three - The single event
- Open with the two questions (where is the single point of failure; what is done about it) and note that this unit's table matches them.
- Add the missing cards: hedging (what a put and a call are in plain words, why capping both sides, why not just sell, the cost, who can do it), entity separation (what a limited company is and how it limits a claim, and what defeats it), leverage (what borrowing against shares or property can do, what "callable" and "margin loan" mean, what "modest" looks like).
- A decision card for the one-large-holding case: can you sell it? yes -> a schedule; blocked or prohibitively taxed -> cap the downside; do you run it day to day -> keep it with three supports. This replaces the one-line "depends on whether you control the asset".
- Define the tail, liability (legal claim), collateral, self-insure; state that insurance is bought with a premium here, not in Unit 4.
- Use the key's wording in the cards ("One holding is most of what you own", "Kept - it is the thing they actually run") or change the key to the cards' wording.
- State the size cue in specimen 8 and the case for each shock outcome.

### Unit Four - Forced at the wrong moment
- A two-line numeric example of order of returns (a fall then a recovery versus the reverse, with a fixed withdrawal), then name it "sequence risk".
- The reserve as a method: how many years and why, spend it in down years, refill it in up years, what a short bond is, where it sits.
- The bond ladder as a method with an example (six bonds for six September bills), with "liability" defined as a bill with a date.
- Rebalancing as a method: define target, drift and band with 60/40 drifting to 71/29, the tax caveat and the contributions alternative, and one paragraph on how this differs from deferral.
- "Already matched" as a rule: money needed in months sits in cash, nothing to do; and how it differs from a spending reserve.
- Fix the gate wording so drift and "already matched" fit it, or move them; add the word "match" to a card before the name uses it.

### Unit Five - The handover
- Explain the estate, why value in it is taxed at death, and what moving value out early does, with a number; then trust (who the trustee is, why the terms matter) and the line.
- Gifting with sums over a decade, whose allowance this is, and the rule that late gifts are pulled back.
- Governance with what each device does and an example family; power of attorney defined; a beneficiary-nomination walk-through.
- A choosing card: tax -> trust or gifting (and what separates them); people -> governance; paperwork -> documents; none -> nothing.
- Rename "Basic documents current" and "No structure needed" so the names do not read as the opposite state, and fix key U2 `basics` and `nothing_u2` so specimen 21 does not match the wrong option.
- Remove or source the unsourced second-generation claims (2886, 2653, 2772).

### Unit Six - What people believe instead
- A card for each claim the drill tests: a home as an investment (illiquid, borrowed against, undiversified, pays no income - each defined), whole-life insurance (bundles cover with an investment; term plus index is the unbundled version), "protection against ignorance" (building versus keeping, revisited).
- Teach the check itself with one example each: ask for the mechanism; ask who counted.
- Define "defer", "locate" and "realised" before using them; explain step-up in two sentences.
- Either map each claim to the key question it fails or drop the instruction at 4022.

### Unit Seven - Full determination
- Render the explanation (`determinationIntro`) on the determination screen, or fold it into a first card: three questions, the readout, what "route" and "name" mean.
- One fully worked specimen with the reason each option was chosen or rejected.
- A transfer card: the three questions to ask of the reader's own money and where to find each number (fund fee on a statement, draw as a percentage of balance, beneficiary forms).
- Specimens that present a situation without naming the practice already applied, at least half of them, so the reader diagnoses before naming.
- Verdict feedback that says why the neighbouring options were wrong for this case, and plain wording in place of "falsify".

