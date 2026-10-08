# Basic Math - comprehension audit

Scope: `public/index.html` lines 1103-1561 (Basic Math data), plus the engine that shows it (renderLesson 3906, mountPick 3971, mountErr 4011, mountDet 4038, mountVerdict 4140) and lesson CSS (181-200). Nothing under `public/` was edited. Phone check: rendered at 360 px wide in the browser pane; tables do not overflow (page scrollWidth 360) but see C-6.

Method note: "card before the item" means the cards of the units the learner has finished, in course order (Unit One to Seven). Line numbers are `public/index.html`.

## Verdict

Basic Math does not teach then apply. It names 21 tools in 22 cards and 2,336 words (mean 106 words a card, longest 138), gives a worked numeric example for only 5 of 27 procedures and none for 15 of them, and then practises the learner by replaying the cards' own examples (32 of 53 practice items reuse a situation from the lessons). Root causes: (1) the course teaches a five-question method (M1-M5) that the key does not use, so the key's real step wording (W1, A2, G2...) is met for the first time inside the scored specimens; (2) every tool is compressed to one table cell with no formula and no numbers, which is exactly "two phrases where two paragraphs are needed"; (3) the drills are recall of the cards' examples, over flat option lists and an untaught third option, not practice of the two-question route; (4) the same idea has different names in cards, key, drills and verdicts (tool / question / method / rule, Lesson / Unit, factor as divisor and as multiplier, scale in four senses). Of 53 practice items, 20 cannot be answered and justified from the preceding cards alone (6 UNSUPPORTED, 14 WORDING-GAP); of the 56 route-step checks across the 14 specimens, 9 fail.

Totals: 65 findings (25 HIGH, 35 MED, 5 LOW). Details below.

## Findings by unit

Each finding: `ID [rubric tag][severity]`, then the verbatim evidence with line numbers, why it blocks learning, and what the reader needs instead.

### Course-wide (C)

**C-1 [R1][HIGH]** No unit opens by saying what the reader will be able to do or which key questions it prepares. Unit One opens with "The complaint is almost always true about the procedure..." (1370); Two with "A prime is a whole number above 1..." (1402); Three with "An equation says: whatever this number is, it satisfies this." (1427); Four with "This is the distinction that matters most..." (1456); Five with a table (1476); Six with "Almost none of the numerical errors..." (1500). Only Unit Seven orients ("Now you run the full sequence", 1509). The reader never learns "after this unit you can answer W1 and W2 for whole-number questions". Needed: a first card per unit that states the skill ("you will be able to look at a question about a number and say which of five things is being asked"), names the key questions the unit teaches in the key's own words, and says what the drill will ask.

**C-2 [R8][HIGH]** There is no transfer. The course explicitly disclaims application: "Naming the tool is where this stops. Executing it is a lookup, and always was." (1513) and "Executing the method ... is a separate skill and mostly a lookup." (1552). The reader finishes able to match a textbook scenario to a name, but is never shown how to take their own situation (a loan offer, a recipe, a quote with a percentage) and find the numbers, ask the two questions, and get an answer; no card shows the formula for Pythagoras, a GCD, an LCM, a logarithm or a quadratic, and nothing says where to look them up. Owner: "are you presenting information so that the reader actually learns the info and then learns how to apply it". Needed: per tool, a "use it on your own case" block: what to look for, which two numbers to write down, the arithmetic, and a check that the answer is sensible.

**C-3 [R9][HIGH]** Total teaching text is 2,336 words for 5 branches, 21 outcomes and an 11-question key: about 111 words per outcome, about 8 printed pages. Per card: 136, 138, 115, 88 | 136, 99, 104, 110 | 130, 107, 84, 120 | 104, 99, 75, 106 | 93, 96, 100, 93 | 84 | 119. No card exceeds 138 words. Four geometry tools (Pythagoras, trig, similar triangles, square-cube) share one 84-word card (1439-1445); four whole-number outcomes (GCD, LCM, mod, irrational) share one 110-word card (1413-1420); log scales get 106 words including five name-dropped examples. Needed: length follows the idea, not a card-size habit: one concept, plain explanation (a paragraph or two), one worked numeric example, a second example that contrasts it with its look-alike, then a check.

**C-4 [R5][HIGH]** 17 situations are recycled across lesson, drill, errDrill and specimen, so a learner can pass by recognising the story instead of the question. Pizza 16 vs 8: card 1447, M1 1223, ERR 1301, specimen 1360. Shoebox EUR 200: card 1457, M4 1262, ERR 1295, specimen 1332. 99% test: card 1487, M5 1286, ERR 1297, specimen 1348. Rumour: M1 1217, M4 1272, specimen 1336. 23 birthdays: card 1484, M5 1284, specimen 1344. Lottery: card 1479, M5 1280, specimen 1352. Also ladder, paint, fifteen notes, gears, 91, Tuesday, stone, padlock, 7% doubling, 1-in-4, red six times. 32 of 53 practice items replay a card example (table below). This is the pattern Unit One warns against: "you have pattern-matched a school exercise" (1372). Needed: the first meeting of an idea uses one worked example; practice uses new situations that share the structure, including look-alikes that need a different tool.

**C-5 [R3][MED]** "scale" has four senses and the reader must pick between them: the M1 option "Growth & scale" means orders of magnitude (1137); the proportion row says "recipe scaling" (1431) and the key id for proportion is `scale` (1166); "scaling laws" is the Shape gloss (1389); "Scale a length by n" is square-cube (1444); "Log scales" is Unit Four (1466). A pizza question ("scale") is therefore a trap for "Growth & scale" and the Shape branch. Needed: one meaning per word; rename the M1 branch.

**C-6 [R7][MED]** The examples that make the table cards usable sit in `.tell`, 11.5 px monospace in the accent colour (190-191), and the table cards put the label in a nowrap column. Measured at 360 px: Unit Three card 3 label column 137 px of 320 (43%), text column 182 px, each tool a 123-144 px tall cell of 7-9 lines (one screen holds the whole of Pythagoras, trig, similar triangles and square-cube); Unit Three card 1 label 103 px, text 216 px, cells 123-165 px. Nothing overflows horizontally, but the only examples are in the smallest, lowest-contrast type on the card. Needed: examples in body type under their own "Worked example" heading, not in a tell line; tables only for look-alike comparisons, not for first teaching.

**C-7 [R7][MED]** One-idea-per-card is broken in six cards: Unit Two card 4 (GCD, LCM, mod, irrational: 1414-1419), Unit Three card 1 (four algebra tools plus "undoing operations": 1426-1434) and card 3 (four geometry tools: 1440-1445), Unit Five card 1 (three counting rules: 1476-1480), Unit Three card 2 (discriminant plus an unrelated "underdetermined" note: 1436-1438), Unit One card 2 (five questions). Each is a table of one-line definitions. Needed: one card per tool for any tool the key can name.

**C-8 [R2][LOW]** "Tell" is a label the app invents ("Tell: a question about what a number is built from...", 1404; "Tell: ask what happens between two consecutive periods", 1458) and is used for two different things: a rule of thumb and a list of example nouns. A newcomer does not read "tell" as "how to recognise it". Needed: "How to spot it" and "Where you meet it", as separate labelled lines.

**C-9 [R2][MED]** Notation is used with no introduction: x² and n² (1161, 1444), the superscript in "1.07ⁿ = 2" (1464), "√91" (1406), "log 2 / log(1 + r)" (1462), "b² − 4ac" and "ax² + bx + c" (1436), "49!/(6!·43!)" (1354), "P(positive given ill)" then "P(positive | ill)" (1489, 1298), "tan 30°" (1251), "3¹⁴" (1338). Each is needed to read a "why". Needed: a plain-word line the first time each appears ("n² means n times n").

### Unit One - Why none of it stuck (4 cards, drill: Which branch)

**U1-1 [R1][HIGH]** The course opening misdescribes the key. Card 2 "The five questions" (1373-1381) tells the learner the key asks M1-M5, "M1 and M2 do most of the work. M3 catches the most common live error. The last two are what stop a tool being used past the edge" (1381). The key (1134-1210) asks M1 and then two branch questions (W1/W2, A1/A2, G1/G2, C1/C2, S1/S2). M2 "What exactly is unknown, and what is given?", M3 "Does it change by adding, or by multiplying?", M4 "What is the nearest look-alike tool", M5 "What would make this the wrong tool?" are never steps; the closest are G1 (1172) and the post-answer label "What would change the tool" (1523). Unit Six repeats it: "usually M3 (adding versus multiplying)" (1501). Why it blocks: the reader builds a mental model of five questions, then meets "W1 · What is being asked of the number" (4056) with none of them. Needed: an honest card: "The key has three moves: sort (M1), answer two questions that belong to that branch, name the tool", with the 11 questions listed once, in the key's words.

**U1-2 [R2][HIGH]** Card 3 glosses every branch with a list of technical names the reader cannot use to sort: "exponentials and logarithms" (1387), "combinatorics and probability" (1388), "Pythagoras, trig, similarity, scaling laws" (1389), "algebra: one relationship, or two, pinning a number down" (1386). The plain glosses exist in the key (1135-1139: "what divides what", "pinned down by constraints", "possibilities, or odds", "lengths, angles, areas") but differ. Needed: one plain gloss per branch with two everyday questions that land in it, identical to the key's `sub` text.

**U1-3 [R4][HIGH]** The sort is drilled before any branch is taught. Card 4: "So M1 is drilled first, on its own, before any tool at all." (1395). But deciding that a gear question is "Whole numbers" needs to know that LCM is a whole-number idea, and that a pizza price is "Shape & distance" needs the square-cube law (taught two units later). Result in the drill (1214-1227): 3 of 6 items UNSUPPORTED, 2 WORDING-GAP, 1 SUPPORTED. The learner meets the key's wording for the first time inside a scored drill. Needed: teach one branch, then sort between the branches learned so far (interleaved), or show five fully worked sorts first, each with the reasoning "what is being asked -> which branch".

**U1-4 [R6][MED]** M1 drill feedback introduces four untaught terms and credits a word that is not in the item. "The answer is the lowest common multiple of 12 and 18" (1216); "proportion" (1220); "the square-cube law" (1224); "modular arithmetic" (1226). Rumour: "That single word - multiplied - decides the whole branch." (1218): the item says "each person telling two new people a day" (1217); the word "multiplied" is not there, and "multiplied by three" is asserted with no derivation (why three? each person plus two new). Also the adding-versus-multiplying distinction belongs to G1, not M1. Needed: feedback in the lesson's words, with the missing step written out ("each knower adds two new people, so every day the group grows to three times its size").

**U1-5 [R3][MED]** "Lesson" versus "Unit" and two meanings of "key". Card 3 sends the reader to "Lesson Two ... Lesson Five" (1385-1389); the app calls them "Unit Two" (renderLesson shows `Unit ${u.tag}`, 3913) and "Lesson Three" is given for both "An unknown quantity" and "Shape & distance" (1386, 1389). "M1 routes you to a key" and "it decides which key you even need" (1375, 1382) use "key" for a branch, while the subject screen and Unit Seven use "the key" / "Running the whole key" for the whole determination (1508). Needed: one word each: unit, the key, a branch.

**U1-6 [R3][MED]** What the reader is meant to produce changes name from card to card: "which question it is" and "the procedure is looked up" (1371), "a method looking for a problem" (1371), "the tool the wording resembles" (1393), "name the tool" (1510), drill prompts "Which kind of question is this (M1)?" (1537), "Which tool settles it?" (1539), "Which counting rule applies?" (1541), engine step "ID · Name it" (4076). Outcome names are tests ("Primality test" 1106), laws ("Square-cube law" 1131), rules ("Complement rule" 1125), a growth pattern ("Linear growth" 1117) and a non-tool ("Irrational - no fraction" 1110). Needed: one frame ("the key sorts a question into one of 21 kinds; each kind has a standard method") and the same noun in prompt, step and verdict.

**U1-7 [R2][MED]** Card 1's first sentence refers to a complaint that has not been stated ("The complaint is almost always true about the procedure and almost always false about the question", 1370), and uses "Nobody completes the square at the supermarket" as the example of what the reader supposedly knows. A newcomer does not know the phrase. Needed: state the complaint ("I never use any of this") before answering it; no academic names as shared ground.

**U1-8 [R9][MED]** Cards 1 and 4 (136 + 88 words) argue about school ("Two trains leave a station triggers a method", 1394) and teach no sorting. The only how-to for the sort is five one-line bullets (1385-1389). The core skill of the course, deciding what kind of question you are looking at, receives no worked demonstration. Needed: five narrated sorts, each showing how the question's wording leads to the branch, plus two near-miss pairs (shoebox vs rumour; pizza vs recipe).

**U1-9 [R2][LOW]** "a right answer reached by the wrong route counts as a miss" (1372): "route" is undefined here (it means the key steps, taught only in Unit Seven). Needed: define the route when the key is first shown.

### Unit Two - Primes and what divides what (4 cards, drill: Prime or not)

**U2-1 [R9][HIGH]** Four concepts in one 110-word table card with no number worked (1413-1420). GCD: "The largest number dividing both. Reducing a fraction; cutting a 96 x 60 cm sheet into the largest equal squares." (1415) - the result (12) is never given, the method never shown. LCM: "The smallest number both divide. When two meshed gears realign" (1416) - 36 appears only in a specimen's why (1313) after the learner has answered. mod: "Divide and keep only the remainder." (1417) - no example; 100 ÷ 7 appears only in the specimen why (1318). Irrational: "Some quantities are no fraction at all ... the proof ... is two lines long" (1418) - "fraction" is not defined as a ratio of whole numbers and the proof is not shown. The unit's drill ignores all four ("The drill next is primality only", 1420). The key's W1/W2 then ask about all of them (1144-1156), and both non-primality whole-number specimens (gears, Tuesday) rely on them. Needed: one card each, with a numeric worked example (GCD of 12 and 18 by listing divisors and by prime ingredients; LCM 36; 100 ÷ 7 = 14 remainder 2 so Thursday) and a contrast (GCD vs LCM: "split into equal pieces" vs "line up again").

**U2-2 [R3][HIGH]** Step W1/W2 wording is not taught anywhere. W1 `parts` "What it is built out of" (1146) is the route for gears, but the only "built from" in the cards belongs to factorisation (1404); for gears the natural pick is W1 `cycle` "Where it lands after something repeats" (1147) because the gears repeat. W2 `shared` "Comparing two numbers' prime ingredients" (1153): no card connects GCD or LCM to prime factors, and "ingredients" appears nowhere else. W1 `exact` "Whether an exact value exists at all" (1148) vs the card's "no fraction at all" (1418) vs the outcome "Irrational - no fraction" (1110). Needed: teach GCD/LCM via prime ingredients (12 = 2×2×3, 18 = 2×3×3), and use "built out of / ingredients / shared" in the lessons exactly as the key does.

**U2-3 [R2][HIGH]** Undefined terms that the drill and cards depend on. "factor": "primes, factors, remainders" (1385), "a factor above √n" (1407), "factorisation" (1404, 1403), never defined. "composite" is an answer option (1229) and appears in no card. "√": "√91 ≈ 9.5" (1406) with no way to get 9.5 (9×9 = 81, 10×10 = 100). "divisibility" (1216). Needed: define factor with a pair (12 = 3 × 4, so 3 and 4 are factors); composite = whole number above 1 that is not prime; square root by bracketing.

**U2-4 [R4][MED]** The trial-division card never performs a division. "To test 91 you try 2, 3, 5, 7 - and stop, because √91 ≈ 9.5." (1406). It does not say why 4, 6, 8, 9 are skipped, never writes 91 ÷ 7 = 13, and "91 = 7 × 13" appears first in the drill's feedback (1231). The reason for the stop is one sentence: "If n has a factor above √n, it must also have the matching one below it." (1407) with no example (13 above 9.5, 7 below). "ninety divisions into four" (1408). Needed: walk 97 (prime) and 91 (composite) line by line with the actual divisions, the factor pair 7 × 13, and the square-root estimate.

**U2-5 [R4][MED]** Prime factorisation is shown only as an answer: "60 is 2 × 2 × 3 × 5 and there is no second route to it" (1403). No card shows how to find it (divide by 2, 2, 3, then 5 is prime), so the outcome "Prime factorisation" and key W2 `unique` "Breaking one number into primes - one unique way" (1152) have no procedure behind them.

**U2-6 [R7][MED]** Card 3 (RSA, HTTPS, hash tables, cicadas; 104 words, 1409-1412) is motivation, one of four cards, in a unit where GCD/LCM/mod/irrational get one table row each. It uses undefined "RSA", "HTTPS", "hash tables", "collisions", "300-digit primes", and an unexplained claim: "cicadas emerge on 13- and 17-year cycles, which are prime precisely because that minimises coincidence with predator cycles" (1412), which needs LCM, taught one card later and never linked. Needed: one sentence of motivation per card at most; the space goes to the tools the key names.

**U2-7 [R5][MED]** The drill tests executing primality (7 numbers), while the course says execution is a lookup (1513) and the key's skill is naming. It does not test GCD/LCM/mod/irrational/factorisation or the wording of W1/W2. The number 91 appears in card 2 (1406), drill (1231) and specimen 1 (1308).

**U2-8 [R2][MED]** "Irrational" is never defined, and the outcome sits inside the branch "Whole numbers - what divides what" (1110, 1135), though irrational numbers are not whole numbers and nothing divides anything. There is no drill item and no specimen for it. W1 `exact` and W2 `proof` are unreachable in practice.

**U2-9 [R3][MED]** "factor" means divisor here (1407, 1385) and multiplier in Unit Four: "the same factor multiplies it each period" (1456), G1 "The same factor multiplies it each step" (1174), "Multiplied by a fixed factor" (1265). Same word, two meanings, neither defined.

**U2-10 [R6][LOW]** Drill feedback adds untaught rules: "Digit sum 5 + 1 = 6, divisible by 3" (1235); "the fundamental theorem of arithmetic would collapse" (1233, a rhetorical step beyond card 1's explanation).

### Unit Three - Unknowns and shapes (4 cards, drill: Which tool)

**U3-1 [R9][HIGH]** Four algebra tools in a four-row table (1429-1434), each one phrase plus a list of example nouns, no numbers worked. "Solving is not cleverness - it is undoing the operations in reverse order until the unknown stands alone." (1427) has no example (68 = 9C/5 + 32: subtract 32, multiply by 5, divide by 9, C = 20). Proportion: "One ratio holding across the problem." (1431) - "ratio" is never defined or computed (12 m² per litre, 30 m² needs 2.5 litres: 30 ÷ 12). Simultaneous: "Two unknowns, two independent facts ... Either fact alone leaves many answers." (1432) - never shows that two facts pin down one answer (6 fives and 9 tens). Quadratic: "The unknown multiplied by itself." (1433). A newcomer cannot tell what any of these feel like to do.

**U3-2 [R9][HIGH]** Three geometry tools, one sentence each (1441-1443): "Two sides around a right angle give the third." / "An angle and one side give any other side." / "Same shape, different size - matching ratios give the missing length." No formula (a² + b² = c² appears nowhere), no diagram, no definition of "right angle" or "hypotenuse", sin/cos/tan never named although the drill answer says "tan 30° × 4" (1251), no worked ratio for the shadow (12 × 1.7 / 1.8 = 11.3 m). The whole teaching of three tools fits one phone screen (see C-6).

**U3-3 [R4][HIGH]** The cards do not say how to choose between Rearrange and Proportion. Both are "one unknown, entering once" (1160 in the key; 1430-1431 in the card). The key separates them in A2: `isolate` "The same formula, solved for a different letter" vs `scale` "A fourth number, given a ratio that holds" (1165-1166). The card has the first wording (1430) but not "a fourth number" or "a ratio that holds"; the reader meets it in the specimen for paint (1328). Needed: a contrast card: same "one unknown" appearance, two different asks, with a pair of worked examples.

**U3-4 [R9][HIGH]** The discriminant card (1435-1438) gives "ax² + bx + c = 0" and "b² − 4ac ... positive means two, zero means one, negative means none" with a, b, c undefined, no numeric example (x² − 5x + 6: 25 − 24 = 1, two solutions; x² + 1: −4, none), and "real solution" undefined. The key's A2 option is "Where a quantity hits zero - or whether it ever does" (1168); the card says "whether any real solution exists at all" (1436); the drill says "roots" (1253). The note "Two unknowns and one fact is underdetermined" (1438) is a simultaneous-equations idea parked in a quadratic card.

**U3-5 [R3][MED]** The Pythagoras wording does not describe its own example. Card: "Two sides around a right angle give the third." (1441). Key S1: "Two sides around a right angle, no angles given" (1200). Drill (1245) and specimen (1358) repeat it. The ladder item gives the ladder (the long side, opposite the right angle) and the base; the computation is "√(25 − 2.25)" (1358), a subtraction. A reader following the card would add the squares. "no angles given" is self-contradictory (a right angle is an angle). Needed: "any two sides of a right triangle give the third", with both the add case (3 and 4 give 5) and the subtract case (5 and 1.5 give 4.77).

**U3-6 [R5][HIGH]** The drill (1240-1258) is one flat list of eight tools over items from two different branches (Unknown, Shape), so the two-question route (A1/A2, S1/S2) is never practised. Seven of eight items are the card's own tell examples (thermostat 1430, ladder 1441, tree shadow 1443, fifteen notes 1432, roof pitch 1442, paint 1431, pot 1447), so the drill can be passed by example matching.

**U3-7 [R6][MED]** Feedback errors and mismatches: "Either fact alone leaves infinitely many answers" (1249) - for whole banknotes the options are finite (the card says "many", 1432); "The whole of it is a single multiplication" (1255) for paint while the specimen divides "30 ÷ 12 = 2.5" (1330); "tan 30° × 4" (1251); "Two roots come out; one is negative and gets discarded on physical grounds" (1253) - "roots" and "physical grounds" untaught; "ridge ... eaves" (1250) are roofing words.

**U3-8 [R4][MED]** The one numeric example in the square-cube card is wrong: "A 65-inch TV has about 45% more screen than a 55-inch, though the number on the box rose by 18%." (1447). (65/55)² = 1.397, about 40% more. A learner who checks with a phone loses trust in the card. (Pizza 4x and pot 8x are correct.)

**U3-9 [R7][MED]** Phone readability: the shape card is four 3-line cells with a 137 px label column at 360 px width (see C-6), and the examples are in 11.5 px mono.

**U3-10 [R8][MED]** For none of the eight tools does a card say what to look for in your own situation beyond example nouns ("Ladders, diagonals, whether the sofa clears the corner", 1441). Needed: "what are the two numbers you have, what one number do you want".

**U3-11 [R7][MED]** The unit merges two M1 branches ("Unknowns and shapes") that Unit One says are "genuinely different kinds of question" (1391), and card 3 is titled "four things worth keeping" (1439). The reader is told in Unit One that the branches route to "Lesson Three" twice (1386, 1389).

**U3-12 [R2][LOW]** "cross-sectional area" (1448), "bone strength", "underdetermined" (1438) are used without definition.

### Unit Four - Growth you cannot picture (4 cards, drill: Growth check)

**U4-1 [R4][HIGH]** The central distinction has no numbers. "Linear: the same amount is added each period. Exponential: the same factor multiplies it each period, so the increase itself grows." (1456). No side-by-side sequence (0, 200, 400, 600 vs 100, 107, 114.5, 122.5), so "the increase itself grows" is asserted, not seen. The percent-to-multiplier step is never taught: "7%" becomes "×1.07" without comment (1464), "multiplication by 1.19" appears in the drill answer (1269). "tells two new people" is never converted to "×3" anywhere.

**U4-2 [R9][HIGH]** The log-scale card (1466-1469) gives a definition ("A log scale gives each ×10 the same width."), then five name-dropped examples: "Richter (7.0 releases about 32× the energy of 6.0), decibels, pH, star magnitudes, film speed" (1468). The 32× does not follow from "each ×10" (amplitude versus energy is never mentioned); the other four are not explained. The warning "a log axis makes explosive growth look like a gentle straight line" (1469) is the one idea a reader must keep and it has no picture or table. "orders of magnitude" is used as known (1467; key G1 `spread` 1175).

**U4-3 [R5][HIGH]** The drill's three options (1260) include "Neither - a one-off jump", which no card, key step (G1 has add / mult / spread, 1173-1175) or outcome teaches; the rent item (1266) is UNSUPPORTED. The unit also teaches logarithm-solve and log scale, which have no drill item, and log scale has no specimen either.

**U4-4 [R7][MED]** Sequencing: card 2 (rule of 72) uses "log 2 / log(1 + r)" in its note (1462) before card 3 defines a logarithm (1463-1465), and teaches the shortcut before what it is a shortcut for. The unit never tests the rule of 72 at all.

**U4-5 [R3][MED]** "each period" (1456) / "each step" (key 1173-1174) / "a day" (1217) / "each year" (1269) are all the same idea; G2 `total` "A running total that grows by a fixed amount" (1178) and `size` "The size after a known number of steps" (1179) both describe the shoebox, and no card teaches which to pick.

**U4-6 [R6][MED]** Feedback adds or distorts: "exponential decay" (1271) untaught; "Doubling every 20 minutes is a thousandfold in about three hours" (1265): three hours is 512×, 1000× takes three hours twenty; "single most common maths error in ordinary conversation" (1263); "After 20 days it exceeds the population of most countries" (1273) holds only if every knower tells two new people every day, while the item says "tells two new people the next day" (1272), which read literally is doubling.

**U4-7 [R9][MED]** The logarithm card is 75 words (1463-1465): "what exponent gets me there?" with "exponent" and the superscript n undefined, no computation ("1.07ⁿ = 2": try n = 10 gives 1.97, n = 11 gives 2.10, so between), and "n is the logarithm" with no way to get n. The pairing "Exponentials answer 'how big after n steps'. Logarithms answer 'how many steps to reach that size'" (1465) is the best sentence in the unit and matches key G2; it needs a worked pair of questions.

### Unit Five - Counting and chance (4 cards, drill: Counting rule)

**U5-1 [R9][HIGH]** The counting card (1475-1481) states answers with no derivation: "8 × 7 × 6 = 336" (why 8, 7, 6: each place has one fewer runner left); "13,983,816. Order irrelevant to whether you won, so divide out the 720 orderings." (1479) - where 720 comes from (6 × 5 × 4 × 3 × 2 × 1) and how 13,983,816 arises (49×48×47×46×45×44 ÷ 720) is never shown. The specimen's feedback introduces factorial notation "49!/(6!·43!)" (1354), untaught.

**U5-2 [R5][HIGH]** Five of six drill items are the card's own examples (lottery 1479/1280, runners 1478/1282, birthdays 1484/1284, test 1487/1286, menu 1477/1288); only the padlock (1278) is new. The five options (1276) mix C1-type ideas (complement, base rate) with C2-type ones (slots, order), so the key's two-step route is not practised.

**U5-3 [R9][MED]** The complement card prints a truncated chain: "365/365 × 364/365 × …" (1484); the reader cannot see there are 23 factors or reproduce 0.493. A small case (three people) would show the structure. Independence card: "Four independent draws at 1/4 gives about a 68% chance of at least one" (1492) with (3/4)⁴ = 0.316 never shown.

**U5-4 [R9][MED]** The base-rate card (1486-1489) is the best worked example in the course, but still silently reads "99% accurate" as "wrong 1% of the time for healthy people too" (needed for 9,999 = 1% of 999,900), puts five numbers into two sentences instead of a table, and the err drill then writes "P(positive | ill)" (1298), a notation the card (1489) renders as "given".

**U5-5 [R2][MED]** "independent" is used for two things and never defined: "Independent slots" / "independent choices" (1191, 1477) and "each spin is independent", "independent draws" (1491-1492). The only test offered is "say whether the events are independent. If you cannot say, you cannot multiply." (1493). "The wheel has no memory" (1491) appears with no roulette context.

**U5-6 [R3][MED]** Complement: card heading "The complement trick" (1482), outcome and option "Complement rule" (1125, 1276), err "complement-rule calculation" (1304). Base rate: card "Base rates" (1486), option "Base rate" (1276), outcome "Base rate / conditional" (1126), key C1 `given` "A chance revised after a test result or a clue" (1188), Unit One "conditional-probability" (1391). The learner is asked for a name that the card did not use.

**U5-7 [R1][MED]** Key step C1 "What the question turns on" (1185) is never taught as a question; the card order (counting, at least one, base rate) silently mirrors its three options without saying so.

**U5-8 [R3][LOW]** "mirror": "The mirror error: '1 in 4 people are X...'" (1492) mirrors independence; the err drill calls the gambler's fallacy "the mirror image of the base-rate error" (1294). Two different pairs under one word.

### Unit Six - Faulty claims (1 card, drill: 6 claims, unscored)

**U6-1 [R5][HIGH]** The instruction cannot be followed in the key's words. Card: "Each fails at a specific question - usually M3 (adding versus multiplying) or the base rate" (1501); "Name the question the claim skipped." (1502); engine: "Name which diagnostic question the claim fails to engage." (4022). M3 is not a key step (G1 is), "base rate" is an outcome, the gambler's fallacy fails independence (no key step), and "Prime numbers are the textbook example of maths you never use" (1299) is not a numerical error and engages no key question.

**U6-2 [R1][MED]** The card says the usual failure is "mis-sorts at M1, or a tool applied past its edge" (1500). None of the six claims is an M1 mis-sort in the key's terms.

**U6-3 [R5][MED]** All six claims restate a card (reds 1491, savings 1457, 99% 1487, primes 1411, pizza 1447, 1-in-4 1492) and the drill is a self-reveal ("Show the fault", 4024) that scores nothing (`stats.err.seen`, 4030).

**U6-4 [R6][MED]** Feedback adds untaught phrases: "treating a probability as a physical force rather than a bookkeeping ratio" (1294), "P(positive | ill)" (1298), "the asymmetry between multiplying two large primes and factorising the product" (1300).


### Unit Seven - Full determination (1 card, the key on 14 specimens)

**U7-1 [R4][HIGH]** The reader goes from six units of cards straight to scored specimens after one 119-word card (1509-1513). No specimen is walked through the key step by step; the 43 step options (1134-1210) are met for the first time in the specimens. See Key-wording coverage: 23 options taught, 16 partly, 4 not at all; 7 of 11 step labels not taught.

**U7-2 [R1][HIGH]** The orientation text written for the key is never shown. `determinationIntro` (1526-1534) is defined for every subject and is not referenced anywhere else in the engine, so the learner sees only the Unit Seven card, a hint line ("Right name by the wrong route counts as a miss", 4108) and "Readout · nothing to tap" (4093).

**U7-3 [R5][HIGH]** 8 of the 21 outcomes have no specimen: factor, irrat, rearr, logscale, multprin, perm, trig, similar (compare 1105-1131 with 1307-1364). The key lists them as candidates and the learner is never asked to identify them. Distribution of the 14 specimens: whole 3, unknown 3, growth 3, chance 3, shape 2.

**U7-4 [R4][HIGH]** The key can mark a defensible route wrong. Specimen 2 (gears) accepts only W1 `parts` "What it is built out of" (1313), while gears repeat and W1 `cycle` "Where it lands after something repeats" (1147) is the natural pick. Specimen 7 (shoebox) accepts only G2 `total` (1333) although `size` "The size after a known number of steps" (1179) describes it too, and the item states no unknown. The verdict then says "Step W1 wanted ..." (4162), penalising the learner under "Right name, wrong route. Scored as a miss."

**U7-5 [R6][MED]** Verdict text introduces untaught cases: "a probabilistic primality test" (1311), "a leap-year boundary" (1319), "the cosine rule" (1359); and the verdict names the wanted option in wording the cards never used (e.g. "Comparing two numbers' prime ingredients", 1153).

**U7-6 [R3][MED]** Specimen 5's "why" says "where the quantity reaches zero ... the other root, t = −2" (1326); Unit Three taught "any real solution" (1436). Specimen 6's "one ratio, holding across the problem: 30 ÷ 12" (1330) vs the drill's "single multiplication" (1255).

### Subject-specific check: is every procedure or formula shown with a worked numeric example before the learner must use it?

27 procedures or formulas, in the order the learner meets them. YES = a worked numeric example in a card before use; PARTLY = numbers given but the method or a step missing; NO = no numbers worked before the learner must name or use it.

| # | Procedure / formula | Card (line) | Worked before use? | What is missing |
|---|---|---|---|---|
| 1 | Prime factorisation | U2 c1 (1403) | PARTLY | answer 60 = 2×2×3×5 shown; how to find it is not |
| 2 | Trial division | U2 c2 (1406) | PARTLY | no division written; no 91 = 7×13; skipped divisors unexplained |
| 3 | Square-root bound / estimating √n | U2 c2 (1406-1407) | NO | "√91 ≈ 9.5" asserted |
| 4 | GCD | U2 c4 (1415) | NO | no numbers; 96 and 60 never reduced |
| 5 | LCM | U2 c4 (1416) | NO | 36 appears only in specimen why (1313) |
| 6 | mod / remainder | U2 c4 (1417) | NO | 100 ÷ 7 appears only in specimen why (1318) |
| 7 | Irrational (√2) | U2 c4 (1418) | NO | proof not shown; "fraction" undefined |
| 8 | Rearranging a formula | U3 c1 (1427, 1430) | NO | "undoing in reverse order" with no example |
| 9 | Proportion | U3 c1 (1431) | NO | 30 ÷ 12 first in specimen why (1330) |
| 10 | Simultaneous equations | U3 c1 (1432) | NO | 6 fives and 9 tens first in specimen why (1322); method never |
| 11 | Quadratic solving | U3 c1 (1433) | NO | no step |
| 12 | Discriminant | U3 c2 (1436) | NO | formula, no numbers |
| 13 | Pythagoras | U3 c3 (1441) | NO | formula never stated; √(25 − 2.25) first in specimen why (1358) |
| 14 | Trig ratio | U3 c3 (1442) | NO | tan never defined; tan 30° × 4 first in drill feedback (1251) |
| 15 | Similar triangles | U3 c3 (1443) | NO | no ratio written; 11.3 m never computed |
| 16 | Square-cube law | U3 c4 (1447) | YES | pizza 4×, pot 8×; the TV 45% is wrong (should be about 40%) |
| 17 | Linear vs exponential | U4 c1 (1456-1458) | PARTLY | no sequence of numbers |
| 18 | Percent as a multiplier (7% = ×1.07) | U4 c3 (1464) | NO | never taught; first used in passing |
| 19 | Rule of 72 | U4 c2 (1461) | YES | 7% about 10, 3% about 24, 19% under 4 |
| 20 | Solving 1.07ⁿ = 2 (logarithm) | U4 c3 (1464) | NO | n ≈ 10.2 first in specimen why (1342) |
| 21 | Log scale | U4 c4 (1467-1468) | PARTLY | only the Richter 32× |
| 22 | Multiplication principle | U5 c1 (1477) | YES | 4 × 6 × 3 = 72 |
| 23 | Permutations | U5 c1 (1478) | YES | 8 × 7 × 6 = 336 (why the numbers fall is not said) |
| 24 | Combinations | U5 c1 (1479) | PARTLY | answer given; 720 and the product not shown |
| 25 | Complement rule | U5 c2 (1484) | PARTLY | product truncated "…" |
| 26 | Base rate | U5 c3 (1488) | YES | million-person count; the 1% false-positive assumption silent |
| 27 | Independence / 68% | U5 c4 (1492) | PARTLY | (3/4)⁴ not shown |

Count: YES 5, PARTLY 7, NO 15.

### Situation reuse (C-4 evidence)

| Situation | Where it appears |
|---|---|
| Pizza 16 vs 8 | U3 card 4 (1447), M1 item 5 (1223), ERR 5 (1301), specimen 14 (1360) |
| Shoebox EUR 200 | U4 card 1 (1457), M4 item 1 (1262), ERR 2 (1295), specimen 7 (1332) |
| 99% test, 1 in 10,000 | U5 card 3 (1487), M5 item 5 (1286), ERR 3 (1297), specimen 11 (1348) |
| Rumour, tell two people | M1 item 2 (1217), M4 item 6 (1272), specimen 8 (1336) |
| 23 birthdays | U5 card 2 (1484), M5 item 4 (1284), specimen 10 (1344) |
| Lottery 6 from 49 | U5 card 1 (1479), M5 item 2 (1280), specimen 12 (1352) |
| Ladder 5 m, 1.5 m | U3 card 3 tell (1441), M3 item 2 (1244), specimen 13 (1356) |
| Paint 12 m² per litre | U3 card 1 tell (1431), M3 item 7 (1254), specimen 6 (1328) |
| Fifteen notes, EUR 120 | U3 card 1 tell (1432), M3 item 4 (1248), specimen 4 (1320) |
| Gears 12 and 18 | U2 card 4 (1416), M1 item 1 (1215), specimen 2 (1312) |
| 91 | U2 card 2 (1406), M2 item 1 (1231), specimen 1 (1308) |
| Tuesday + 100 days | M1 item 6 (1225), specimen 3 (1316) |
| Stone 20 − 5t² | M3 item 6 (1252), specimen 5 (1324) |
| Padlock four dials | M1 item 4 (1221), M5 item 1 (1278) |
| 7% account doubling | U4 cards 2-3 (1461, 1464), specimen 9 (1340) |
| 1 in 4 of us | U5 card 4 (1492), ERR 6 (1303) |
| Six reds in a row | U5 card 4 (1491), ERR 1 (1293) |

## Learner simulation

Question asked of every item: could a reader who has read only the cards before it answer it AND justify it using only what those cards said? SUPPORTED = a card sentence licenses the answer and the option wording is that card's (or an obvious paraphrase). WORDING-GAP = the idea was taught but not under the words of the option or step. UNSUPPORTED = the lessons never taught it. "Repeats card" = the same situation appears in a card the learner has already read (Y/N).

### Drill 1 - Which branch (after Unit One cards 1-4: the five questions, the branch list, the trap)

| # | Item | Answer | Status | Licensing sentence, or what is missing | Repeats card |
|---|---|---|---|---|---|
| 1 | Gears 12 and 18 teeth, when do the marks meet again (1215) | Whole numbers | UNSUPPORTED | No card mentions gears, multiples or "meet again". Card 3 says only "primes, factors, remainders. What divides what." (1385). LCM first appears in the feedback (1216) and in Unit Two (1416). | N |
| 2 | Rumour, two new people a day (1217) | Growth & scale | WORDING-GAP | Card 2 M3 row "Does it change by adding, or by multiplying?" (1377) and card 3 "exponentials and logarithms" (1387); nothing says repeated telling is repeated multiplication. Feedback credits the word "multiplied" which is not in the item (1218). | N |
| 3 | Recipe 300 g for four, cooking for seven (1219) | An unknown quantity | UNSUPPORTED | Card 3: "algebra: one relationship, or two, pinning a number down" (1386). No card links scaling a recipe to this; "proportion" (1220) is taught in Unit Three. | N |
| 4 | Padlock, four dials 0-9 (1221) | Counting & chance | SUPPORTED | Card 1 "how many ways can this go?" (1370) and card 3 "Counting & chance" (1388). Thin. | N |
| 5 | 16-inch pizza twice the price of 8-inch (1223) | Shape & distance | UNSUPPORTED | Only hook is "scaling laws" (1389), undefined until Unit Three (1444). Reads as a price ratio. Feedback names the square-cube law (1224) before it exists. | N |
| 6 | Tuesday, what day in 100 days (1225) | Whole numbers | WORDING-GAP | Card 3 lists "remainders" (1385); nothing says a calendar cycle is a remainder question. mod is explained in Unit Two (1417). | N |

Totals: 1 SUPPORTED, 2 WORDING-GAP, 3 UNSUPPORTED.

### Drill 2 - Prime or not (after Unit Two cards 1-4)

| # | Item | Answer | Status | Licensing sentence, or what is missing | Repeats card |
|---|---|---|---|---|---|
| 1 | 91 (1231) | Composite | SUPPORTED | Card 2: try 2, 3, 5, 7 and "declare it prime - having stopped one divisor early" (1406-1408). "Composite" never defined; 91 = 7 × 13 never written. | Y |
| 2 | 97 (1232) | Prime | SUPPORTED | Card 2 "Trial division, stopping at the square root" (1406). Reader must estimate √97 and divide by 7; neither shown. | N |
| 3 | 1 (1233) | Neither | WORDING-GAP | Card 1 "A prime is a whole number above 1 ... 1 is deliberately excluded" (1402-1403) shows 1 is not prime; "Composite" and "Neither" are never defined, so the reader cannot tell 1 is not composite. | N |
| 4 | 2 (1234) | Prime | SUPPORTED | Card 1 "divisible only by 1 and itself" (1402). | N |
| 5 | 51 (1235) | Composite | SUPPORTED | Card 2 trial division, 51 ÷ 3 = 17 (digit-sum rule in feedback is untaught but not required). | N |
| 6 | 143 (1236) | Composite | SUPPORTED | Card 2; reader must extend 2, 3, 5, 7 to 11 (√143 ≈ 12) without being told. | N |
| 7 | 101 (1237) | Prime | SUPPORTED | Card 2. | N |

Totals: 6 SUPPORTED, 1 WORDING-GAP, 0 UNSUPPORTED. Note this drill executes a procedure; the other four drills name a tool.

### Drill 3 - Which tool (after Unit Three cards 1-4)

| # | Item | Answer | Status | Licensing sentence, or what is missing | Repeats card |
|---|---|---|---|---|---|
| 1 | Thermostat, F = 9C/5 + 32, 68 °F to Celsius (1242) | Rearranging a formula | SUPPORTED | Card 1 row: "You have the relationship and want it solved for a different letter. °F to °C" (1430). How to solve is not taught. | Y |
| 2 | 5 m ladder, base 1.5 m from the wall (1244) | Pythagoras | WORDING-GAP | Tell "Ladders" (1441) licenses it, but the card's route sentence "Two sides around a right angle give the third" does not describe a long side plus one short side. | Y |
| 3 | Tree shadow 12 m, you 1.7 m / 1.8 m (1246) | Similar triangles | SUPPORTED | Tell "Measuring a tree by its shadow" (1443); "matching ratios give the missing length". | Y |
| 4 | Fifteen notes, EUR 120 (1248) | Simultaneous equations | SUPPORTED | "Fifteen notes worth €120. Either fact alone leaves many answers." (1432). | Y |
| 5 | Roof 30°, run 4 m, ridge height (1250) | Trig ratio | SUPPORTED | "An angle and one side give any other side ... roof pitch" (1442). "tan" and "ridge/eaves" untaught. | Y |
| 6 | Stone, 20 − 5t² (1252) | Quadratic | SUPPORTED | "The unknown multiplied by itself ... Anything under gravity" (1433); t² is the cue. | N |
| 7 | Paint 12 m² per litre, wall 30 m² (1254) | Proportion | SUPPORTED | Tell "Paint coverage" (1431). | Y |
| 8 | Saucepan, double every dimension (1256) | Square-cube law | SUPPORTED | "A pot with every dimension doubled holds eight times as much" (1447). | Y |

Totals: 7 SUPPORTED, 1 WORDING-GAP, 0 UNSUPPORTED. 7 of 8 items are the card's own tell example.

### Drill 4 - Growth check (after Unit Four cards 1-4)

| # | Item | Answer | Status | Licensing sentence, or what is missing | Repeats card |
|---|---|---|---|---|---|
| 1 | Shoebox, EUR 200 a month (1262) | Linear | SUPPORTED | "€200 a month into a shoebox is linear" (1457). | Y |
| 2 | Bacteria divide every 20 minutes (1264) | Exponential | WORDING-GAP | Card: "the same factor multiplies it each period" (1456); the item says "divides". Nothing says splitting is doubling. | N |
| 3 | Rent jumped 900 to 1,400 then flat (1266) | Neither - a one-off jump | UNSUPPORTED | No card, key step or outcome teaches a step change; the option text exists only in 1260 and the feedback (1267). | N |
| 4 | 19% APR debt, interest on interest (1268) | Exponential | SUPPORTED | "a balance rising 7% a year is exponential ... a debt at 19% merely expensive" (1457). "APR" undefined. | Y |
| 5 | Car loses EUR 1,500 a year (1270) | Linear | SUPPORTED | "If the difference is constant, it is linear." (1458). | N |
| 6 | Rumour, each tells two new people (1272) | Exponential | WORDING-GAP | "If the ratio is constant, it is exponential" (1458); "tells two new people" is never converted to ×3, and read literally (tell once) it is doubling. | N |

Totals: 3 SUPPORTED, 2 WORDING-GAP, 1 UNSUPPORTED.

### Drill 5 - Counting rule (after Unit Five cards 1-4)

| # | Item | Answer | Status | Licensing sentence, or what is missing | Repeats card |
|---|---|---|---|---|---|
| 1 | Padlock, four dials (1278) | Multiplication principle | SUPPORTED | "independent choices, each with its own menu ... picking one thing never removes an option elsewhere" (1477). | N |
| 2 | Six numbers from 49 (1280) | Combinations | SUPPORTED | "6 lottery balls from 49 ... Order irrelevant to whether you won" (1479). | Y |
| 3 | Eight runners, gold-silver-bronze (1282) | Permutations | SUPPORTED | "gold, silver, bronze from 8 runners: 8 × 7 × 6 = 336" (1478). | Y |
| 4 | 23 people, two share a birthday (1284) | Complement rule | SUPPORTED | Card 2 same example (1484); the item does not say "at least one"; card calls it "trick". | Y |
| 5 | 99% test, 1 in 10,000, positive (1286) | Base rate | SUPPORTED | Card 3 same example (1487-1489). | Y |
| 6 | 4 starters, 6 mains, 3 desserts (1288) | Multiplication principle | SUPPORTED | Card 1 same numbers (1477). | Y |

Totals: 6 SUPPORTED. 5 of 6 are the card's own example.

### Drill 6 - Faulty claims (after Unit Six card 1; all earlier cards read)

The reader is asked to state the fault and "Name which diagnostic question the claim fails to engage" (4022).

| # | Claim | Status | Licensing sentence, or what is missing | Repeats card |
|---|---|---|---|---|
| 1 | "Red has come up six times in a row, so black is due." (1293) | WORDING-GAP | Fault taught (1491 "Six reds in a row does not make black due"). No key question is "independence"; "name the question skipped" has no answer in key words. | Y |
| 2 | "My savings are growing exponentially" - fixed EUR 200 (1295) | SUPPORTED | 1457; question = G1 (card says "M3", 1501). | Y |
| 3 | "99% accurate ... 99% likely to have it" (1297) | SUPPORTED | 1489 "P(positive given ill)" vs "P(ill given positive)"; err text uses "|" notation. | Y |
| 4 | "Prime numbers are the textbook example of maths you never use." (1299) | WORDING-GAP | Fault taught (1410-1411) but this is not a numerical error and engages no key question. | Y |
| 5 | "16-inch pizza is twice the price ... same value" (1301) | SUPPORTED | 1447; question = S2 `areavol`. | Y |
| 6 | "1 in 4 ... four of us, so one of us is" (1303) | SUPPORTED | 1492; the 68% / 32% is asserted, (3/4)⁴ not shown. | Y |

Totals: 4 SUPPORTED, 2 WORDING-GAP, 0 UNSUPPORTED.

### Full determination - the 14 specimens (after Unit Six; all cards read)

Each step of the correct route is checked separately. S = SUPPORTED, WG = WORDING-GAP, U = UNSUPPORTED. Item status is the worst of the four checks.

| # | Specimen (line) | M1 | Step 2 | Step 3 | Name | Item |
|---|---|---|---|---|---|---|
| 1 | 91 prime? (1308) | S | W1 `split` S: card "breaks apart at all" (1404) | W2 `divtest` S: "Trial division, stopping at the square root" (1406) | S | SUPPORTED |
| 2 | Gears 12/18 (1312) | S: gears listed under LCM (1416) | W1 `parts` WG: "built out of" taught only for factorisation (1404); the natural pick for repeating gears is `cycle` | W2 `shared` U: "Comparing two numbers' prime ingredients" (1153); no card ties GCD/LCM to prime factors | S: "GCD / LCM" (1415-1416) | UNSUPPORTED |
| 3 | Tuesday + 100 days (1316) | S: "Weekdays" under mod (1417) | W1 `cycle` WG: "where it lands after something repeats"; card only says "Weekdays, clock arithmetic" | W2 `remainder` S: "Divide and keep only the remainder" (1417) | S | WORDING-GAP |
| 4 | 15 notes, EUR 120 (1320) | S: 1386 + 1432 | A1 `two` S: "Two unknowns, two independent facts" (1432) | A2 `crossing` WG: "The one place where both conditions hold at once" (1167); card never says "crossing" or "conditions" | S | WORDING-GAP |
| 5 | Stone 20 − 5t² (1324) | S | A1 `sq` S: "The unknown multiplied by itself" (1433) | A2 `roots` WG: "Where a quantity hits zero" (1168); card says "any real solution exists at all" (1436); "lands" must be read as "height = 0" | S | WORDING-GAP |
| 6 | Paint 12 m²/litre (1328) | S | A1 `once` S (thin): "One unknown, entering once" (1430); "linearly" untaught | A2 `scale` WG: "A fourth number, given a ratio that holds" (1166); card says "One ratio holding across the problem" (1431) | S | WORDING-GAP |
| 7 | Shoebox claim (1332) | S | G1 `add` S: "the same amount is added each period" (1456) | G2 `total` U: "A running total that grows by a fixed amount" (1178) is taught nowhere and overlaps `size` for this item; the item states no unknown | S | UNSUPPORTED |
| 8 | Rumour two weeks (1336) | S | G1 `mult` WG: "tells two new people" is never mapped to "same factor multiplies" | G2 `size` S: "how big after n steps" (1465) | S | WORDING-GAP |
| 9 | 7% doubling, ten years (1340) | S | G1 `mult` S: "growth is ×1.07 a year" (1464) | G2 `steps` S: "how many steps to reach that size" (1465) | S: "n is the logarithm" (1464) | SUPPORTED |
| 10 | 23 birthdays bet (1344) | S | C1 `atleast` S: "chance of at least one" (1483) | C2 `none` S: "none at all is usually a single product" (1483) | S (card says "trick") | SUPPORTED |
| 11 | 99% test (1348) | S | C1 `given` S (thin): "P(ill given positive)" (1489) | C2 `rare` S: "99% accurate ... 1 in 10,000" (1487) | S | SUPPORTED |
| 12 | Six from 49 (1352) | S | C1 `arrange` S (thin): "Count the slots, then ask whether order matters" (1475) | C2 `group` S: "Order doesn't ... Order irrelevant to whether you won" (1479) | S | SUPPORTED |
| 13 | Ladder (1356) | S | S1 `twosides` WG: card "Two sides around a right angle" (1441) does not describe a long side plus a short side | S2 `third` S: "give the third" (1441) | S | WORDING-GAP |
| 14 | Pizza (1360) | S: pizza in Unit Three (1447) | S1 `samesh` S: "Same shape, different size" (1443) | S2 `areavol` S: "area scales by n²" (1444) | S | SUPPORTED |

Specimen item totals: 6 SUPPORTED (1, 9, 10, 11, 12, 14), 6 WORDING-GAP (3, 4, 5, 6, 8, 13), 2 UNSUPPORTED (2, 7).
Route-step totals (14 × 4 = 56 checks): 47 S, 7 WG, 2 U.

### Totals across all practice items

| Set | Items | SUPPORTED | WORDING-GAP | UNSUPPORTED | Repeats a card example |
|---|---|---|---|---|---|
| Drill 1 Which branch | 6 | 1 | 2 | 3 | 0 |
| Drill 2 Prime or not | 7 | 6 | 1 | 0 | 1 |
| Drill 3 Which tool | 8 | 7 | 1 | 0 | 7 |
| Drill 4 Growth check | 6 | 3 | 2 | 1 | 2 |
| Drill 5 Counting rule | 6 | 6 | 0 | 0 | 5 |
| Faulty claims | 6 | 4 | 2 | 0 | 6 |
| Specimens | 14 | 6 | 6 | 2 | 11 |
| **Total** | **53** | **33** | **14** | **6** | **32** |

20 of 53 items (38%) cannot be answered and justified from the cards before them. Of the 33 SUPPORTED items, 24 are SUPPORTED because the item is the card's own example or near it, which tests recall, not whether the reader can sort a new case.

## Vocabulary map

Every concept that is named or described differently across lesson cards, outcome names, key steps and options, drill options and feedback, specimen why/fals, and the faulty-claims text. Quotes are verbatim.

| Concept | Variants verbatim | Where |
|---|---|---|
| The course's parts | "Unit Two" (UI, 3913) / "Lesson Two ... Lesson Five" | 1385-1389 |
| The sorting step vs the whole key | "M1 routes you to a key" / "it decides which key you even need" / "Running the whole key" / "Full determination" / "The key" | 1382, 1375, 1508, 1546 (tab), subject screen |
| What the learner produces | "which question it is" / "a method looking for a problem" / "the procedure is looked up" / "the tool the wording resembles" / "name the tool" / "Which tool settles it?" / "Which counting rule applies?" / "ID · Name it" | 1371, 1371, 1393, 1510, 1539, 1541, 4076 |
| Sort question label | "M1 What kind of question is this?" / drill "Which kind of question is this (M1)?" / drill title "Which branch" / "M2 What exactly is unknown, and what is given?" (not a key step) | 1375-1376, 1537, 1134 |
| Adding vs multiplying | card "M3 Does it change by adding, or by multiplying?" / Unit Four "Linear: the same amount is added each period. Exponential: the same factor multiplies it each period" / tell "If the difference is constant ... If the ratio is constant" / key G1 "The same amount is added each step" / "The same factor multiplies it each step" / outcomes "Linear growth", "Exponential growth" / drill "Linear, exponential, or neither?" / Unit Six "M3 (adding versus multiplying)" | 1377, 1456, 1458, 1173-1174, 1117-1118, 1540, 1501 |
| The time slice | "each period" / "each step" / "a day" / "each year" / "the next day" / "the following day" | 1456, 1173, 1217, 1269, 1272, 1336 |
| "factor" | divisor: "primes, factors, remainders" / "a factor above √n" / "has 2 as a factor"; multiplier: "the same factor multiplies it" / "The same factor multiplies it each step" / "Multiplied by a fixed factor each period" | 1385, 1407, 1234; 1456, 1174, 1265 |
| "scale" | "Growth & scale" (orders of magnitude) / `scale` "A fourth number, given a ratio that holds" / "recipe scaling" / "scaling laws" / "Scale a length by n" / "Log scales" | 1137, 1166, 1431, 1389, 1444, 1466 |
| Primality | outcome "Primality test" / "a primality question" / W1 "Whether it breaks apart at all" / W2 "Trying divisors up to its square root" / card "Trial division, stopping at the square root" / drill "Prime, composite, or neither?" | 1106, 1404, 1145, 1151, 1406, 1538 |
| Factorisation | outcome "Prime factorisation" / W1 "What it is built out of" / W2 "Breaking one number into primes - one unique way" / card "a product of primes in exactly one way" / "what a number is built from" / "the fundamental theorem of arithmetic" | 1107, 1146, 1152, 1402, 1404, 1402 |
| GCD / LCM | outcome "GCD / LCM" / W2 "Comparing two numbers' prime ingredients" / card "The largest number dividing both" / "The smallest number both divide" / feedback "the lowest common multiple" / specimen "what they share" / "meet again" (item) vs "realign" (card) | 1108, 1153, 1415-1416, 1216, 1313, 1215, 1416 |
| Remainders | outcome "Remainders (mod)" / W1 "Where it lands after something repeats" / W2 "Dividing and keeping only the remainder" / card "Divide and keep only the remainder" / feedback "A cycle of seven and a remainder - modular arithmetic" | 1109, 1147, 1154, 1417, 1226 |
| Irrational | outcome "Irrational - no fraction" / W1 "Whether an exact value exists at all" / W2 "A proof that no fraction can equal it" / card "Some quantities are no fraction at all" | 1110, 1148, 1155, 1418 |
| Unknown quantity | M1 "An unknown quantity" "pinned down by constraints" / card "algebra: one relationship, or two, pinning a number down" / "how many unknowns there are, and how they enter" / A1 "How the unknown appears" / feedback "Nothing is unknown in the sense of hidden" | 1136, 1386, 1428, 1159, 1243 |
| Rearranging | outcome "Rearranging a formula" / A2 "The same formula, solved for a different letter" / card "Rearrange ... solved for a different letter" / "undoing the operations in reverse order" / feedback "Inverse operations, in reverse order" | 1112, 1165, 1430, 1427, 1243 |
| Proportion | outcome "Proportion" / A2 "A fourth number, given a ratio that holds" / card "One ratio holding across the problem" / feedback "One unknown, one ratio that holds across it. The whole of it is a single multiplication" / specimen "30 ÷ 12 = 2.5" | 1113, 1166, 1431, 1255, 1330 |
| Simultaneous | outcome "Simultaneous equations" / A1 "tied together by two facts" / card "two independent facts" / A2 "The one place where both conditions hold at once" / feedback "Either fact alone leaves infinitely many answers" vs card "many answers" / "underdetermined" | 1114, 1162, 1432, 1167, 1249, 1432, 1438 |
| Quadratic | outcome "Quadratic / discriminant" / A1 "multiplied by itself - an x² is in there" / card "The unknown multiplied by itself" / A2 "Where a quantity hits zero - or whether it ever does" / card "whether any real solution exists at all" / feedback "Two roots come out" / specimen "the other root" | 1115, 1161, 1433, 1168, 1436, 1253, 1326 |
| Pythagoras | S1 "Two sides around a right angle, no angles given" / card "Two sides around a right angle give the third" / feedback "no angle given" / S2 "The remaining side of a right triangle" | 1200, 1441, 1245, 1205 |
| Trig | S1 "An angle and a side" / card "An angle and one side give any other side" / S2 "A length you cannot measure directly, from an angle" / tell "Heights you cannot climb" / feedback "wanting a length you would need a ladder to measure" | 1201, 1442, 1206, 1442, 1251 |
| Similar triangles | outcome "Similar triangles" / M1 gloss "similarity" / card "Same shape, different size - matching ratios give the missing length" / S2 "A missing length, from a matching ratio" | 1131, 1389, 1443, 1207 |
| Square-cube | outcome "Square-cube law" / S2 "How area or volume changed when length changed" / card "Scale a length by n: area scales by n², volume by n³" / "the quoted number is understating the difference" | 1131, 1208, 1444, 1449 |
| Logarithm | outcome "Logarithm - solve for n" / G2 "The number of steps to reach a known size" / card "what exponent gets me there?" / "how many steps to reach that size" / "n is the logarithm" / "doubling time" | 1119, 1180, 1464, 1465, 1464, 1460 |
| Log scale | outcome "Log scale" / G1 "the numbers just span orders of magnitude" / G2 "How to plot or compare the numbers at all" / card "When numbers span orders of magnitude, plotting them raw is useless" / M1 gloss "exponentials and logarithms" | 1120, 1175, 1181, 1467, 1387 |
| The rumour's growth | items "tells two new people" ×3 / feedback "Multiplied by three each day" ×3 | 1217/1218, 1272/1273, 1336/1338 |
| Not growth | option "Neither - a one-off jump" vs G1 `spread` "It isn't changing" | 1260, 1175 |
| Counting slots | outcome "Multiplication principle" / C2 "Independent slots, each with its own menu" / card "independent choices, each with its own menu" / "picking one thing never removes an option elsewhere" / feedback "Nothing is being removed from a pool" | 1122, 1191, 1477, 1477, 1279 |
| Order | C2 "The same items in another order counts as different" / card "Order matters" / feedback "a different order is a different result"; C2 "A group picked out, and order is irrelevant" / card "Order doesn't" / "Order irrelevant to whether you won" / specimen "the order of the draw does not affect whether you won" | 1193, 1478, 1283; 1192, 1479, 1479, 1354 |
| Complement | outcome and option "Complement rule" / card "The complement trick" / C1 "The chance that at least one of many things happens" / C2 ""None of them" is far easier to count than "at least one"" / err "complement-rule calculation" | 1125, 1276, 1482, 1187, 1194, 1304 |
| Base rate | outcome "Base rate / conditional" / option "Base rate" / card "Base rates" / C1 "A chance revised after a test result or a clue" / C2 "A rare condition and an imperfect test" / Unit One "a conditional-probability question" / card "P(positive given ill)" / err "P(positive | ill)" | 1126, 1276, 1486, 1188, 1195, 1391, 1489, 1298 |
| Independence | "Independent slots" / "independent choices" / "each spin is independent" / "independent draws" / "say whether the events are independent" | 1191, 1477, 1491, 1492, 1493 |
| "mirror" | "The mirror error" (quota fallacy mirrors independence) / "the mirror image of the base-rate error" (gambler's fallacy) | 1492, 1294 |
| Wrong-tool step | Unit One "M5 What would make this the wrong tool?" / key post-answer label "What would change the tool" / specimen field `fals` | 1379, 1523, 4168 |
| "Tell" | "Tell: a question about what a number is built from ..." (rule) / "Ladders, diagonals, whether the sofa clears the corner" (examples) | 1404, 1441 |

### Undefined or early-used terms, codes and name-dropping (R2)

- Codes: M1-M5 (five questions, only M1 is a step), W1/W2, A1/A2, G1/G2, C1/C2, S1/S2 (first met in Unit Seven), "ID" (4076). None of W/A/G/C/S is explained as a code.
- Never defined: factor, composite, divisibility, square root (√), "no fraction", irrational (as a term), real solution, root(s), a/b/c, underdetermined, exponent (and the superscript n), logarithm as a button, orders of magnitude, independent, conditional, factorial (!), P(A | B), tan, hypotenuse-type words (the card uses "the third" side), APR, "exponential decay", cross-sectional area, ridge, eaves, "ratio", "period".
- Academic or technical name-dropping with no explanation: "complete the square" (1370), fundamental theorem of arithmetic (named, then explained: acceptable), RSA, HTTPS, hash tables, collisions, 300-digit primes, cicadas and predator cycles (1410-1412), IBAN and ISBN check digits (1417), Richter, decibels, pH, star magnitudes, film speed (1468), "DNA matches, security screening" (1489), "cosine rule" (1359), "probabilistic primality test" (1311), "combinatorics" (1388), "similarity" (1389).
- Used before taught: "lowest common multiple" (1216), "proportion" (1220), "square-cube law" (1224), "modular arithmetic" (1226) in the Unit One drill; "log 2 / log(1 + r)" (1462) one card before logarithms; "conditional-probability" (1391) in Unit One; "complement rule" first appears as a name inside the independence card (1492) after the card headed "complement trick".

## Key-wording coverage

Is each key step and option taught, in the key's words or an obvious paraphrase, in a card before the learner must pick it (Unit Seven)? yes / partly / no.

| Step | Label taught? | Option | Taught before needed? | Evidence |
|---|---|---|---|---|
| M1 What kind of question is this? (1134) | yes (1375) | Whole numbers | yes | 1385 "What divides what" |
| | | An unknown quantity | partly | name taught; sub "pinned down by constraints" vs card "algebra ... pinning a number down" |
| | | Growth & scale | partly | name taught; sub "changing, or spanning orders of magnitude" vs "exponentials and logarithms" |
| | | Counting & chance | partly | sub "possibilities, or odds" vs "combinatorics and probability" |
| | | Shape & distance | partly | sub "lengths, angles, areas" vs "Pythagoras, trig, similarity, scaling laws" |
| W1 What is being asked of the number (1144) | no | split "Whether it breaks apart at all" | yes | 1404 "whether it breaks apart at all" |
| | | parts "What it is built out of" | partly | 1404 for factorisation only; GCD/LCM never |
| | | cycle "Where it lands after something repeats" | partly | 1417 "Weekdays, clock arithmetic"; "repeats" never |
| | | exact "Whether an exact value exists at all" | no | card says "no fraction at all" (1418) |
| W2 What actually settles it (1150) | no | divtest "Trying divisors up to its square root" | yes | 1406 |
| | | unique "Breaking one number into primes - one unique way" | yes | 1402-1403 |
| | | shared "Comparing two numbers' prime ingredients" | no | never |
| | | remainder "Dividing and keeping only the remainder" | yes | 1417 |
| | | proof "A proof that no fraction can equal it" | partly | 1418 mentions it, never shown |
| A1 How the unknown appears (1159) | partly | once "One unknown, entering once and linearly" | partly | 1430 "entering once"; "linearly" never |
| | | sq "One unknown, multiplied by itself" | yes | 1433 |
| | | two "Two unknowns, tied together by two facts" | yes | 1432 |
| A2 What you want out of it (1164) | no | isolate "The same formula, solved for a different letter" | yes | 1430 |
| | | scale "A fourth number, given a ratio that holds" | partly | "ratio" 1431; "fourth number" never |
| | | crossing "The one place where both conditions hold at once" | no | card says "two independent facts" |
| | | roots "Where a quantity hits zero - or whether it ever does" | partly | 1436 "whether any real solution exists"; "hits zero" never |
| G1 How the quantity changes each step (1172) | partly | add "The same amount is added each step" | yes | 1456 |
| | | mult "The same factor multiplies it each step" | yes | 1456 ("factor" ambiguous) |
| | | spread "It isn't changing - the numbers just span orders of magnitude" | partly | 1467 span; "isn't changing" never |
| G2 What is unknown (1177) | partly | total "A running total that grows by a fixed amount" | no | never |
| | | size "The size after a known number of steps" | yes | 1465 |
| | | steps "The number of steps to reach a known size" | yes | 1465 |
| | | display "How to plot or compare the numbers at all" | partly | 1467 |
| C1 What the question turns on (1185) | no | arrange "How many ways something can be chosen or arranged" | partly | 1475 |
| | | atleast "The chance that at least one of many things happens" | yes | 1483 |
| | | given "A chance revised after a test result or a clue" | partly | 1487-1489 |
| C2 The decisive detail (1190) | no | slots "Independent slots, each with its own menu" | yes | 1477 |
| | | group "A group picked out, and order is irrelevant" | yes | 1479 |
| | | order "The same items in another order counts as different" | yes | 1478 |
| | | none ""None of them" is far easier to count than "at least one"" | yes | 1483 |
| | | rare "A rare condition and an imperfect test" | yes | 1487 |
| S1 What you have to work with (1199) | no | twosides "Two sides around a right angle, no angles given" | partly | 1441, misdescribes the ladder |
| | | angleside "An angle and a side" | yes | 1442 |
| | | samesh "Two objects of the same shape, different size" | yes | 1443-1444 |
| S2 What you want (1204) | no | third "The remaining side of a right triangle" | yes | 1441 |
| | | unreach "A length you cannot measure directly, from an angle" | partly | 1442 tell "Heights you cannot climb" |
| | | ratiolen "A missing length, from a matching ratio" | yes | 1443 |
| | | areavol "How area or volume changed when length changed" | yes | 1444 |

Tally. Step labels (11): taught yes 1 (M1), partly 3 (A1, G1, G2), no 7 (W1, W2, A2, C1, C2, S1, S2). Options (43): yes 23, partly 16, no 4 (exact, shared, crossing, total).

## Under-explained ideas

| Idea | What the lesson says now | What a newcomer still would not understand |
|---|---|---|
| Why trial division stops at the square root | "If n has a factor above √n, it must also have the matching one below it." (1407) | What a "matching" factor is; no example of a pair (7 × 13: one above, one below 9.5); how to find √91 without a calculator |
| How to factorise | "60 is 2 × 2 × 3 × 5" (1403) | How anyone gets that; why the order does not matter; why it is the only way |
| GCD | "The largest number dividing both." (1415) | How to find it; how 96 × 60 turns into "largest equal squares" (12 cm); what "dividing both" means |
| LCM | "The smallest number both divide." (1416) | How to find 36 from 12 and 18; why gears line up at a common multiple; why the smallest |
| Remainders / mod | "Divide and keep only the remainder." (1417) | What a remainder is; how 100 ÷ 7 leaves 2; why that gives Thursday |
| Irrational | "Some quantities are no fraction at all." (1418) | What "no fraction" means (not a ratio of whole numbers); what √2 has to do with a square; why a proof is needed |
| Rearranging a formula | "undoing the operations in reverse order" (1427) | A single step of it: 68 = 9C/5 + 32 means subtract 32, multiply by 5, divide by 9 |
| Proportion | "One ratio holding across the problem." (1431) | What the ratio is (12 m² per litre) and which operation to do (30 ÷ 12) |
| Two equations, two unknowns | "Two unknowns, two independent facts." (1432) | How two facts become one answer (substitute); why one fact is not enough |
| Quadratic | "The unknown multiplied by itself." (1433) | What to do once you see t²; why two answers come out; why one is discarded |
| Discriminant | "b² − 4ac ... positive means two, zero means one, negative means none." (1436) | What a, b, c are; a numeric case; why the sign counts solutions |
| Pythagoras | "Two sides around a right angle give the third." (1441) | The formula; which side is longest; add vs subtract |
| Trig ratio | "An angle and one side give any other side." (1442) | What sin, cos, tan are; why "tan 30° × 4" gives the height |
| Similar triangles | "matching ratios give the missing length" (1443) | Which lengths match; how 12 × 1.7 ÷ 1.8 gives 11.3 m |
| Square-cube law | "area scales by n², volume by n³" (1444) | Why (a doubled square is four squares); card 4 gives examples but not the reason |
| "The increase itself grows" | "so the increase itself grows" (1456) | What that looks like in numbers; why 7% a year is exponential and EUR 200 a month is not |
| Percent as a multiplier | "growth is ×1.07 a year" (1464) | Why 7% means multiply by 1.07; what 19% or −10% become |
| Rule of 72 | "Divide 72 by the percentage rate" (1461) | Why 72; fine as a recipe, but "rounded logarithm" is not explained |
| A logarithm | "what exponent gets me there? ... n is the logarithm" (1464) | What an exponent is; how to compute n for 1.07ⁿ = 2; what the "log" key does |
| Log scale | "A log scale gives each ×10 the same width." (1467) | What it looks like; why Richter is 32× not 10×; why it hides explosive growth |
| Permutations | "8 × 7 × 6 = 336" (1478) | Why each factor is smaller; why three factors |
| Combinations | "divide out the 720 orderings" (1479) | Where 720 comes from; how 13,983,816 is built |
| Complement trick | "365/365 × 364/365 × …" (1484) | How many factors; why "no match" is one product; where 0.493 comes from |
| Base rate | "roughly 9,999 test positive anyway" (1488) | That "99% accurate" means 1% of healthy people also test positive; why a table is easier |
| Independence | "say whether the events are independent" (1493) | What independent means; how to tell; why you cannot multiply otherwise |
| Why 1 is not prime | "admit it, and every number would have infinitely many factorisations" (1403) | A single line of the argument (60 = 2×2×3×5 = 1×2×2×3×5 = ...) |
| RSA | "easy one way, hard the other ... is the whole of RSA" (1410) | What the two directions are in plain words |

## What a good version of this subject's units would contain

Principle for the rebuild: a unit card = plain-words explanation of one idea (a paragraph or two, no limit), one fully worked numeric example, a contrast with the nearest look-alike, then a check in the key's own words. Every number in an example is shown being computed. The key's step labels and option texts are the vocabulary of the lessons, verbatim.

### Unit One - what the key is and how to sort
- Opening card: "By the end you can look at any question about numbers and say which of five kinds it is, then answer two more questions and name the standard method." State the three moves (sort, two branch questions, name) and list all eleven questions once.
- One card per branch with plain gloss identical to the key's `sub`, and two or three everyday questions that land in it (Whole numbers: can this be shared out evenly, when do two cycles line up, what day will it be; An unknown quantity: how much paint, how many of each note).
- Five narrated sorts, one per branch, each showing "what is being asked" -> branch, with the gear problem run through the whole key as the model (M1, W1, W2, name), one line of reasoning per step.
- Near-miss pairs: shoebox vs rumour (adds vs multiplies), pizza price vs recipe (shape vs unknown), padlock vs lottery.
- Drill the sort only on branches already demonstrated, and add branches as units finish (interleave); feedback uses only taught words.

### Unit Two - whole numbers
- Define factor with pairs (12 = 3 × 4), prime, composite, and why 1 is neither. Square roots by bracketing (9 × 9 = 81, 10 × 10 = 100).
- Primality: walk 97 and 91 with every division written; show the factor pair 7 × 13 and why testing past √n repeats pairs.
- Factorisation: 60 by repeated division; why the answer is unique.
- GCD and LCM by prime ingredients: 12 = 2×2×3, 18 = 2×3×3; GCD takes what they share (6), LCM takes each prime the most times it appears (36); then both stories (96 × 60 sheet cut into 12 cm squares; gears realigning after 36 teeth, three turns of the small gear).
- Remainders: 100 ÷ 7 = 14 remainder 2, so Thursday; clock arithmetic with 5 + 9 hours.
- Irrational: what "no fraction" means; √2's decimal never ends or repeats; the two-line proof written out; label W1/W2 in the key's words.
- Drill covers all five outcomes with the key's W1/W2 steps, new situations, plus 91-type traps.

### Unit Three - unknowns and shapes
- Split into two units, or two clearly separated halves, one per M1 branch.
- Rearranging: 68 = 9C/5 + 32 solved line by line (C = 20). Proportion: 12 m² per litre, 30 m², 30 ÷ 12 = 2.5 litres; 300 g for four, seven people. A contrast card: same "one unknown" look, two different asks (A2 `isolate` vs `scale`), in the key's words.
- Simultaneous: f + t = 15 and 5f + 10t = 120 solved by substitution (6 fives, 9 tens); show why one fact leaves several answers.
- Quadratic: 20 − 5t² = 0 solved (t = 2, discard −2); discriminant with a, b, c named: x² − 5x + 6 gives 1 (two answers), x² + 1 gives −4 (none).
- Shape: Pythagoras with both cases (3, 4 -> 5; 5 and 1.5 -> 4.77); trig defined as a ratio with tan 30° ≈ 0.577 and 4 × 0.577 = 2.31 m; similar triangles as 12 × 1.7 ÷ 1.8 = 11.3 m; square-cube with the pizza, the pot and the corrected TV (about 40%) and the reason (a doubled square holds four squares).
- Practice: a drill for each branch with its two steps (A1/A2, S1/S2), new situations (not the cards' ladder, paint, notes), look-alikes that need a different tool.

### Unit Four - growth and scale
- Show sequences side by side: +200 each month (0, 200, 400, 600) against ×1.07 each year (100, 107, 114.5, 122.5) and a 19% debt (1,000, 1,190, 1,416, 1,685).
- Percent as a multiplier: 7% = ×1.07, 19% = ×1.19, −10% = ×0.90; "tells two new people" = ×3 only if everyone keeps telling, otherwise doubling: write both versions.
- Rule of 72 after logarithms, with the reason (why 72), then the logarithm as "how many steps": 1.07ⁿ = 2 by trial (n = 10 gives 1.97, n = 11 gives 2.10) then by the log button (10.24).
- Log scale: a table of 1, 10, 100, 1000, 10000 spaced equally; Richter (10× ground motion, about 32× energy per step); a doubling quantity drawn on a linear and a log axis, with the warning in words.
- Teach or remove "Neither - a one-off jump" and add logarithm-solve and log-scale items; use the key's G1/G2 wording, with "total" and "size" separated or merged.

### Unit Five - counting and chance
- Permutations: 8 choices for gold, 7 for silver, 6 for bronze = 336, with the shrinking menu explained; combinations: 49×48×47×46×45×44 = 10,068,347,520, divided by 720 (= 6 × 5 × 4 × 3 × 2 × 1) = 13,983,816, why dividing removes the orderings; define factorial before it is used.
- Complement: three people first (1 − 364/365 × 363/365), then 23 with all 23 factors shown (0.493), then 1 − 0.493 = 50.7%.
- Base rate as a table: 1,000,000 people, 100 ill (99 positive, 1 negative), 999,900 healthy (9,999 positive, 989,901 negative); "99% accurate" explained as wrong 1% for both groups; 99 of 10,098 is about 1%.
- Independence defined (one result does not change the odds of the next) with a test, one fair and one unfair example; (3/4)⁴ = 0.316 shown for the 1-in-4 claim.
- Drill: new situations for each of the five outcomes; the key's C1/C2 steps practised, not a flat five-way list.

### Unit Six - faulty claims
- Each claim mapped to the key question it skips, in key words (G1, C1/C2, S2, W2...); add claims that are real M1 mis-sorts ("prices rose 50% then fell 50%, so back to where they started": ×1.5 × ×0.5 = ×0.75).
- Make the drill scored: the learner picks the skipped question from the key's options before the fault is revealed.
- Drop or relabel claims that are not numerical errors (the primes claim).

### Unit Seven - full determination
- Before scoring, three fully narrated specimens (one whole-number, one growth, one chance) showing every step, the readout narrowing, and the verdict's "why" in the same words.
- First specimens guided (hints on the step wording), then unguided; every one of the 21 outcomes gets at least one specimen.
- Fix the routes that mark defensible answers wrong (gears W1, shoebox G2) or reword the options so only one fits; show `determinationIntro` or merge its content into the first specimen screen.
- End with a "your own case" card: write the question in one sentence, find which of the five kinds it is, answer the two questions, name the method, and where to look up how to run it.
