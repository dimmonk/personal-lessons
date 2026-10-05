# Political Ideologies: key rewrite and unit plan

Written 2026-10-05 for lesson standard 1. Files written: `public/subjects/ideology/subject.js`, `public/subjects/ideology/key.js` (wired into `public/index.html` and `public/sw.js` straight after `standard0.js`). No unit is written. Sources: `docs/lesson-standard.md` (sections 3, 4 S1, 6, 11, 15, 16), `public/subjects/ideology/standard0.js` (the old course, its key, drills, claims and 15 specimens), `docs/comprehension-audit/ideology.md`.

## The key in one view

| Step | Question | Answers (keeps) |
|---|---|---|
| D1 (gate, u1) | Who or what does the text put first? | class: Working people, against those who own the businesses (7) · nation: The nation, or its ordinary people (5) · tradition: Old ways of faith, family and custom (2) · rights: Rights and fair treatment for everyone (3) · none: No side named (0, the key ends) |
| C1 (u2) | What does the text say about the farms, factories, shops and banks? | keep → Social democracy · public → Democratic socialism, Marxism-Leninism · workers → Democratic socialism, Marxism-Leninism, Anarchism · market → Market socialism · explain → Marxism, Marxism-Leninism · none ("The text does not say") → Class politics with nothing attached, Marxism-Leninism, Anarchism |
| C2 (u2) | What does the text want done with the government? | seize → Marxism-Leninism · vote → Social democracy, Class politics…, Democratic socialism, Market socialism · gone → Anarchism · none ("The text does not say") → Social democracy, Class politics…, Democratic socialism, Market socialism, Marxism |
| N1 (u3) | Who does the text speak for, and against whom? | whole → Nationalism, Fascism · elitenation → National populism, Fascism · eliteonly → Populism with nothing attached · blood → Nazism |
| N2 (u3) | What does the text want done with elections and with those who disagree? | aside → Fascism, Nazism · keep → Nationalism, National populism, Populism with nothing attached, Nazism |
| T1 (u4) | What does the text want done with the old ways? | keep → Conservatism · restore → Reactionary conservatism |
| R1 (u5) | What does the text want done for people? | leave → Classical liberalism · start → Modern liberalism · rules → Group equality |

17 names (13 old, 4 new). Terms: ideology (u1), surplus value (u2), elite (u3), equity (u5). Tie-breaks (`yieldsTo`): D1 `nation` and `rights` yield to `class` and to `tradition`; C1 `keep` yields to `public`, `workers`, `market`; C1 `workers` yields to `market`; C1 `explain` yields to any plan for the businesses; N1 `whole` yields to `elitenation` and `blood`; N1 `elitenation` yields to `blood`; R1 `start` yields to `rules`.

Every branch was walked cell by cell (every combination of one answer per question): no combination leaves two names, every name is reached, and the 47 routes assigned in part (c) each leave exactly their name (scratch script; the same survivors rule as V31). `node tests/validate-data.mjs` passes.

## (a) Every key change, and why (becomes `build.keyChanges`)

Each line is `step | outcome`, was, now, why. The unit that teaches the step or outcome carries its lines.

### The structure

| Step / outcome | Was | Now | Why |
|---|---|---|---|
| whole key | two flat questions asked of every text, in the order Q2 ("Who or what does the text put first?", 7 answers) then Q1 ("Who should own the farms, factories, shops and banks?", 6 answers); no gate; names decided after both by "three extra checks" the key never asked or scored | a gate (D1, 5 answers) and four branches of one or two questions each; every accepted route isolates one name | K2.2, section 11: the old key left 2 to 6 names standing on 8 of 12 audited specimens, so the name was decided by knowledge the key never asked (audit C3). The tie-break questions the old feedback cited (what to do with elections; restore or build; is anything attached; does the party rule) are now key questions, so they are taught, asked and scored. `tests/validate-data.mjs` still exempts `ideology` from "isolates exactly one" (`FAMILY_KEYS`), for the old determination in `standard0.js`; the exemption goes when that file goes (part d) |
| old Q1 (ownership) | asked of every text, with "The text does not say" leaving every name | asked only in the working-people branch (C1), where it decides; the nation, tradition and rights branches ask what decides there instead | K2.2: on a text that puts the nation, old ways or rights first the ownership question was usually answered "does not say" and crossed nothing off (audit C3, U5 item 2). The faulty claim "He talks only about the nation and never mentions business…" is re-homed to the working-people branch (part c) |
| "three extra checks (not part of the key)" | what went wrong; what to do with elections, courts and a free press; the goal at the end | N2 (elections and those who disagree), T1 (bring back or keep), C2 (seize, elections, or no government), N1 `eliteonly` (nothing attached) | K2.2, K3: the lessons now teach the key's questions and no others (section 11: "the course teaches five questions and the key asks two") |

### The gate (u1)

| Step / outcome | Was | Now | Why |
|---|---|---|---|
| D1 | old Q2 "Who or what does the text put first?" (code shown as "Q2", asked first) | same question, code D1, asked first and only first | K2.3: it is already a question a person asks out loud; K3: the code collision (step 1 labelled Q2) is gone because codes are never shown |
| D1.class | "Workers against owners" / sub "people who work for wages vs people who own the businesses" | "Working people, against those who own the businesses" | K2.4: names both sides an observer can point to. `when` requires the text to take the workers' side, so a text that names classes only to deny them (old drill item 6, specimen 8) is not here |
| D1.nation, D1.people, D1.race-h | three answers: "The nation", "Ordinary people against an elite", "One race ranked above the others"; National populism kept by two of them, Nazism and Fascism by two, Reactionary conservatism by two | one answer, "The nation, or its ordinary people", keeping Nationalism, Fascism, National populism, Populism with nothing attached and Nazism; what separates them is N1 and N2 | K2.2: the three old answers overlapped (one name under two answers on 4 of 13 names; specimen 11 accepted two first answers that left 1 or 3 names, audit U5 item 8). The confusions the course exists to fix (fascist or populist or patriotic; fascist or Nazi) now sit inside one branch, where a key question tells them apart |
| D1.race-e, D1.indiv | two answers: "Groups held back by unfair systems" (one name), "The individual" (one name) | one answer, "Rights and fair treatment for everyone", keeping Classical liberalism, Modern liberalism and Group equality; R1 separates them | K2.2: an answer that keeps one name with no question after it leaves nothing to teach as a question (S1 requires a branch to have at least one question); the three names differ on one thing, what the text wants done for people. The "same noun, opposite direction" pair (Nazism and Group equality) becomes a pair of families in Unit One (ranking one people above others against rules said to hold groups back) |
| D1.trad | "Tradition and faith" / sub "the old order of church, crown and family" (one name) | "Old ways of faith, family and custom", keeping Conservatism and Reactionary conservatism | K2.9: ordinary conservatism (which the old cards described only as what Reactionary conservatism is not) had nowhere to go; it is the sound case of this branch |
| D1.none | none; "Just a dictatorship (authoritarianism)" was a drill answer that was not a name of the key | "No side named" (keeps nothing; no branch) | K2.9, A15: a text about who holds power, or about one practical matter, that speaks for no side, is a case the learner meets (the dictator texts, the bus-lane plan called "communism"). The behaviours every dictatorship shares are taught as an `exception` in Unit One (section 11) |
| D1 tie-breaks | none | `nation` and `rights` yield to `class` (working people set against owners) and to `tradition` (old ways held up as what should guide the country) | K2.8: a left text that blames "the rich" and a conservative text that says "our country" both show two answers; the key decides, and Unit One teaches each as an exception |
| D1 (all five) | `n`, `sub`, `keeps` | `n`, `plain`, `needs`, `when`, `keeps` | A15, S1 |

### Working people, against those who own the businesses (u2)

| Step / outcome | Was | Now | Why |
|---|---|---|---|
| C1 | old Q1 "Who should own the farms, factories, shops and banks?" | "What does the text say about the farms, factories, shops and banks?" | K2.2: the answer for Marxism is an explanation, not an owner; a question about what the text says has an answer for every case in the branch |
| C1.keep | "Private owners, with the state evening things out" (and earlier "Private + heavy redistribution") | "Their owners keep them, and taxes and public services even out what people get" | Audit U1 item 5, U5 item 4: the old wording made specimen 3 ("Business will continue to be privately owned") answer literally to an option that left no name. The answer now says what the text says |
| C1.public | "The state or the public" | "They should pass to the government, to be run for everyone" | K9: "the government" is the key's one word for it ("the state" goes on the avoid list) |
| C1.workers | "The workers themselves" | "They should pass to the people who work in each one" | K2.5: same form as the other answers |
| C1.market | (Market socialism was kept by "The workers themselves" and by "evening things out") | "They should pass to the people who work in each one, and compete for customers"; `workers` yields to it | K2.2: Market socialism is defined by firms that compete; the old key could not tell it from Anarchism, Democratic socialism or Marxism (audit U2 item 12) |
| C1.explain | none (Marxism was kept by "The text does not say" and recognised by a check) | "It explains how their owners gain from what workers make" | K2.2: what decides Marxism is now an answer the learner gives |
| C1.none | "The text does not say" (kept every name) | "The text does not say", keeping Class politics with nothing attached, Marxism-Leninism and Anarchism | Section 11: "teach when 'not stated in the passage' is the right answer, as an answer with its own cases" |
| C1.private | "Private owners, left alone" | removed from this branch; a text that wants owners left alone puts each person's freedom first (R1 `leave`) | K2.2: in the working-people branch it kept no name |
| C1.directed | "Private owners, steered by the state" | removed | It only ever served the nation names, which no longer ask about ownership; how the government steers owners is portrait material for Fascism and National populism |
| C2 | none (a check on each name's card: party, elections, no state) | "What does the text want done with the government?": seize / vote / gone / none | K2.2: separates Marxism-Leninism from Democratic socialism (both keep `public`) and Anarchism from Democratic socialism (both keep `workers`) |
| C2.seize | "A party leads and decides for the workers" (check) | "Seize power and hold it for the workers, with no rivals allowed" | K2.4: a party that rules alone, or workers who take power by force, is something a text says. The key's decision: a call for the workers themselves to take power by force, with no party named, is filed here too (the field calls it revolutionary socialism; everyday speech, communism) |
| C2.none | none | "The text does not say" | Most texts that keep owners and tax them, or that only explain, say nothing about the government; that is a real answer |
| demsoc | kept by `public` and `workers`; decided by a check (elections) | needs: the businesses to pass to the public or their workers, no party seizing power, no getting rid of government, the change through elections "or the text does not say how" | K2.8: the key's decision. Public ownership with no word on how is filed under Democratic socialism, not left as "one of three" (old U5 card "When the text cannot settle it"); the unit says plainly that this is the key's line |
| ml | "Marxism–Leninism" | "Marxism-Leninism" | V1: a name may not hold an en dash |
| classonly (new) | none; a text that only takes the workers' side had no answer | "Class politics with nothing attached" (plain: working people against owners, and nothing more said) | K2.9: the commonest text in this branch says nothing about the businesses or the government; it needs a name, parallel to Populism with nothing attached |
| all seven | outcome `n` only | `n`, `plain`, `needs`, `aka` | S1, K4, K5 |

### The nation, or its ordinary people (u3)

| Step / outcome | Was | Now | Why |
|---|---|---|---|
| N1 | none (first-answer choice among nation / people / race) | "Who does the text speak for, and against whom?": the whole nation / ordinary people against an elite with the nation put first / ordinary people against an elite and nothing more / one people by blood, ranked above the others | K2.2: who the people is set against separates Nationalism, National populism, Populism with nothing attached and Nazism |
| N1.eliteonly | "is anything attached?" (check) | an answer of N1 | The old drill's withholding case (specimen 9) is now answered by a key question |
| N1.blood | "One race ranked above the others" (first answer) | an answer of N1; Nazism needs any ranking of peoples by blood, and N1 decides it alone | K2.8: the old rule ("Nazism when race ranking is the centre, Fascism when race comes in only in passing") could not be read off a short text. The key's decision: ranking by blood decides Nazism; Unit Three says plainly that historians draw the line elsewhere |
| N2 | check 2 "What does the text want done with elections, courts and a free press?" (four free-prose options) | "What does the text want done with elections and with those who disagree?": aside / keep | K2.2, K2.4: what separates Fascism from Nationalism and from National populism, as the old cards said (marks from groups 1 and 2 together), is now a question with two answers an observer can point to |
| fasc | needs a "cluster" of ten markers, no threshold (audit U3 item 4) | needs: the nation as one people (or its people against an elite with the nation first), and elections, parties or those who disagree done away with, silenced or broken, so one leader or movement speaks for everyone | K2.7: one line that holds for every case the unit calls Fascism. The rebirth story, mass marches and the steered economy are `portrait.typical`, not what decides |
| nationalism (new) | "Nationalism" was a card in Unit Four, "not a name the key can lead to" | "Nationalism" (aka patriotism): the nation first, no elite named, no ranking by blood, elections left alone | K2.9: a text that loves its country and keeps the vote is the sound case of this branch, and the most common target of the insult "fascist" (faulty claim 5) |
| natpop | kept by "The nation" and by "Ordinary people against an elite"; "works through elections" in prose | needs: ordinary people against an elite, the nation's borders, culture or industry first, elections left in place | K2.7 |
| pop | "Populism with nothing attached" | same name; needs written | Kept: it is the old app's own plain name, and its "nothing attached" is now the model for Class politics with nothing attached |
| nazi | kept by "The nation" (no) and "One race ranked above the others" | needs: peoples ranked by blood, its own above the others | K2.7 |

### Old ways of faith, family and custom (u4)

| Step / outcome | Was | Now | Why |
|---|---|---|---|
| T1 | check 3 "What is the goal at the end?" / "restore, not revolution" in card prose | "What does the text want done with the old ways?": keep / restore | K2.2 |
| conserv (new) | described only as what Reactionary conservatism is not ("the ordinary conservative who accepts elections, slow change and a free press") | "Conservatism": keep the old ways, and change slowly | K2.9: the sound case of this branch; without it every text that values faith and family would be named Reactionary conservatism |
| react | "Reactionary conservatism" | same; needs: an old order said to be wrongly torn down, and the text asking for it back | K2.7 |

### Rights and fair treatment for everyone (u5)

| Step / outcome | Was | Now | Why |
|---|---|---|---|
| R1 | none (each name had its own first answer; "is formal equality enough?" in prose) | "What does the text want done for people?": leave / start / rules | K2.2: one question, three answers, each one name |
| modlib (new) | the American "liberal" appeared only in a caveat and a faulty claim ("'Liberal' always means left-wing") | "Modern liberalism" (aka social liberalism; liberal, as Americans use the word) | K2.9, K4: the commonest centre-left text (rights first, plus schooling, health care, fair rules for business) had nowhere to go but Social democracy, which needs working people set against owners. Specimen 10 is such a text |
| idegal | "Group equality" (aka identity-egalitarianism); first answer "Groups held back by unfair systems" | same name; reached by R1 `rules` | K4: the old plain name is kept |
| clib | first answer "The individual"; second "Private owners, left alone" | R1 `leave` | K2.2 |

### Words

| Item | Was | Now | Why |
|---|---|---|---|
| terms | none | ideology (u1), surplus value (u2), elite (u3, used in N1's answers), equity (u5) | K6: each is a word a card must lean on. "the state" and "class" are deliberately not terms: the key says "the government", and "class" occurs only inside one name (explained in the sentence that gives the name). Single short words were avoided as terms because V2 matches key lines as substrings ("class" would forbid "classical") |
| avoid | none | 21 entries: unit of analysis, means of production, productive assets, the state, redistribution, valence, palingenetic, corporatism, statism, horseshoe, host, unresolved, egalitarian, family, formation, passage, specimen, extra check, tie-breaker, the rule, falsify | K6, K9, from the audit's vocabulary map: "family" meant three things, "passage" and "text" one thing, "the state" and "government" one thing |
| aka | none | on every name; short common words left out because V8 matches aka as substrings ("populism" alone would forbid "National populism" typed anywhere) | K5 |

## (b) The unit plan

Five units, all kind C (no fact or procedure units: every name is reached by a question). The order: the gate first (A15), then the biggest branch, which teaches "The text does not say"; then the branch with the most-used insults; then the two small branches. Five units is also the number of old units, which keeps the app working before any unit is rebuilt (part d, gap 1).

| Id | Kind | Title | Teaches | Assumes | Replaces |
|---|---|---|---|---|---|
| u1 | C, gate unit (A15) | `{ text }`, e.g. "Who or what a text puts first" (must not contain the gate question's words) | steps [D1]; families [class, nation, tradition, rights, none]; terms [ideology] | none | Old Unit One's first-question cards ("What this unit is for", "The first question", the seven answer cards, "The first question, side by side"); old Unit Three's "Just a dictatorship" card (becomes the `none` family and the exception below); old Unit Four's "When a name is used as an insult" (the `none` family's portrait and the transfer card); old drill `D_UNIT` (16 items, re-keyed in part c) |
| u2 | C, branch | `{ fromKey: 'D1.class' }` | steps [C1, C2]; outcomes [socdem, classonly, demsoc, ml, anarch, mktsoc, marx]; terms [surplus] | u1 | Old Unit Two "The socialist family" (all cards; "One bakery, six futures" becomes the lens and the look-alike material); old Unit One's second-question cards (the six ownership answers, "The text does not say", "Try the second question", "Two whole texts"); old drill `D_SOC` (12 items); faulty claims 1, 6, 11, 13 |
| u3 | C, branch | `{ fromKey: 'D1.nation' }` | steps [N1, N2]; outcomes [nationalism, fasc, natpop, pop, nazi]; terms [elite] | u1, u2 (the horseshoe refute and the "Nazis were socialists" refute name Marxism-Leninism and C1's answers) | Old Unit Three "Fascism and its look-alikes" (Fascism, the cluster card, Nazism, National populism, side by side, "But the Nazis were socialists", worked example); old Unit Four's Populism, Nationalism, Statism and horseshoe cards; old drill `D_FASC` items 1-5, 9-11; faulty claims 2, 3, 4, 5, 7, 8, 12 |
| u4 | C, branch | `{ fromKey: 'D1.tradition' }` | steps [T1]; outcomes [conserv, react] | u1 | Old Unit Three's Reactionary conservatism card; old Unit One's "Tradition and faith" card; old `D_FASC` items 6-8; specimen 5 |
| u5 | C, branch | `{ fromKey: 'D1.rights' }` | steps [R1]; outcomes [clib, modlib, idegal]; terms [equity] | u1, u2 (the Modern liberalism and Social democracy look-alike names a u2 outcome) | Old Unit Four's Classical liberalism, Group equality and "The three side by side" cards; old Unit One's "The individual" and "Groups held back by unfair systems" cards; old `D_UNIT` items 9-12; faulty claims 9, 10 |

Old Unit Five "Running the key" is absorbed, not rebuilt: its walk-throughs become each unit's `worked` cards; "Step 1 / Step 2 with the traps" become `exception` cards (u1, u2); "When the text cannot settle it" becomes the two "with nothing attached" names and the two "The text does not say" answers; "How the drill scores you" is the app's own wording (E6, E7); "Using the key on your own reading" becomes the `transfer` cards; the 15 specimens move to `specimens.js` (part c) for the determination (E13).

### What each unit needs, beyond the A1 to A11 sequence

- **u1.** Five families, each with `meet`, `again`, `portrait`, `check`. Family look-alike pairs for the ledger (step D1), at least one per family: class~rights (a text for working families against employers, beside a text for everyone's fair start: the Social democracy / Modern liberalism boundary), nation~rights (the same noun, race, pointing opposite ways: one people ranked above others, or rules said to hold groups back), nation~tradition ("our country" beside "the faith of our fathers"), nation~none (exception: a ruler's methods (closed papers, banned parties, a secret police, praise of the ruler) look like the nation answer and name no side; the behaviours every dictatorship shares, section 11), class~nation (exception: a text that mentions classes only to deny them is the nation answer, old drill item 6 and specimen 8), tradition~rights (exception: low taxes and old values together; the key's tie-break gives old ways). A refute card: "a name thrown as an insult is a description" (about D1). The `none` family is where the learner meets a plain policy called "communism".
- **u2.** Parts follow C1's answers (A13): owners kept or nothing said (Social democracy, Class politics with nothing attached); the businesses to the government (Democratic socialism, Marxism-Leninism); the businesses to their workers (Anarchism, Market socialism); an explanation (Marxism, with the term card for surplus value and the worked bakery numbers, audit U2 item 4). The one bakery owned six ways is the lens and the look-alike thread (section 11). Two question cards (C1, C2), each with the cases where "The text does not say" is the right answer. The key's decision on Democratic socialism (public ownership with no word on how) is said plainly on the C2 question card. V15 needs a ledger entry for every pair some answer keeps together: 16 pairs (all but socdem~ml, socdem~anarch, mktsoc~ml, mktsoc~anarch, marx~anarch); most are first separated by C1 and can be `taughtIn` the C1 question card; the ones that need their own `lookalike` card are socdem~demsoc, demsoc~ml, anarch~mktsoc, classonly~socdem, marx~ml. Refute: "A government that taxes the rich heavily must be Marxist" (C1 keep).
- **u3.** Parts follow N1's answers: the whole nation (Nationalism, Fascism); ordinary people against an elite (National populism, Populism with nothing attached); blood (Nazism). Fascism's portrait groups the old ten markers into what is typical (a story of fall and rebirth, one people with one will, marches, a steered economy) and says none of them decides alone; N2 is what decides. Exception: a fascist text that blames an elite (looks like National populism; N2 decides). Refutes: "Anyone who wants strong borders is a fascist" (Nationalism), "Fascism is when the government does a lot" (how much a government does is not an answer of the key), "Communism and fascism are the same, both ban parties" (they answer the first question differently), "The Nazis were socialists" (Nazism is reached by N1, not by an ownership answer; historical facts need a published source in `build.wrongIdeas`). 9 ledger pairs from keeps.
- **u4.** Small: two names, one question. Look-alike: the same church school story told by a text that wants it kept and one that wants the old church courts back.
- **u5.** Three names, one question. Look-alikes: clib~modlib (the word "liberal", section 11 caveat), modlib~idegal (a fair start for each person, against rules changed for groups; the tie-break gives `rules`), clib~idegal (the same rules for everyone is enough, or is not). The cross-family pair modlib~socdem is taught in u1 (as class~rights) and repeated here as an `earlier` drill item.

## (c) Every old specimen and drill case, run against the new key one question at a time (K2.10)

Route notation: D1 answer, then the branch's answers. "also" lists an answer the case also shows that loses by a tie-break (S6 `also`). All routes below were checked by script to leave exactly the name shown.

### The 15 specimens (`IDEOLOGY_SPECIMENS`)

| # | Old name | D1 | Branch | New name | Verdict |
|---|---|---|---|---|---|
| 1 "soil of the fatherland… We do not ask for votes; we ask for obedience" | Fascism | nation ("a nation your grandchildren will die for") | N1 whole; N2 aside ("We do not ask for votes") | Fascism | keeps; cues are new |
| 2 "Wages appear to be payment… the ordinary functioning of the system" | Marxism | class ("The worker produces more value… the remainder is taken") | C1 explain; C2 none | Marxism | keeps |
| 3 "national minimum wage, union bargaining… Business will continue to be privately owned" | Social democracy | class ("union bargaining with employers"); also rights (free university), which yields to class | C1 keep (now the literal reading); C2 none | Social democracy | keeps; the audit's fault (literal answer left no name) is gone |
| 4 "The state… a machine for coercion… we will dissolve it… assemblies of those who do the producing" | Anarchism | class ("those who do the producing"; the owners are implied, not named) | C1 workers; C2 gone ("we will dissolve it") | Anarchism | keeps, but D1 is weak: add one phrase naming owners before it is used |
| 5 "Order requires that men know their place… We seek restoration, not revolution" | Reactionary conservatism | tradition | T1 restore | Reactionary conservatism | keeps |
| 6 "The masses cannot arrive at revolutionary consciousness… a disciplined party to lead them" | Marxism-Leninism | class only weakly (no owners named) | C1 none; C2: "a party to lead them" does not say it takes power or rules alone → none | would be Class politics with nothing attached | **rewrite**: the text shows a party leading, not what the party does with power; add owners and "take power and keep it" (then C2 seize → Marxism-Leninism) |
| 7 "Government's role is to enforce contracts, defend the borders, and otherwise leave people alone…" | Classical liberalism | rights ("free individuals trade without permission"; "defend the borders" is one of the government's few jobs, not a people put first) | R1 leave | Classical liberalism | keeps |
| 8 "There are no classes in a healthy nation… will be dealt with as such" | Fascism | nation (classes named only to deny them) | N1 whole; N2 aside ("will be dealt with") | Fascism | keeps; **rewrite the nationalities** ("Germans, or Italians, or Frenchmen") as invented ones (W5.7) |
| 9 "Real people… sold out by a corrupt establishment. We will take the country back for them." | Populism with nothing attached | nation (ordinary people against a few at the top) | N1 eliteonly ("take the country back" names no borders, culture or industry); N2 keep | Populism with nothing attached | keeps |
| 10 "We accept the market. We reject that a worker's wages should decide whether their family gets medicine, education and shelter…" | Social democracy | rights: what every person is owed comes first; no owners or employers are named, so the tie-break to class does not apply | R1 start | Modern liberalism | **re-keyed, then rewrite**: as written the key gives Modern liberalism (the audit found its old route unsupported). Either keep it as a Modern liberalism specimen and drop "a worker's wages", or add employers against working families to make it Social democracy. Recommended: rewrite it as the Social democracy half of the socdem~modlib look-alike |
| 11 "The old parties are finished. Only a movement that speaks for the forgotten majority… Private enterprise will be directed toward national goals." | National populism | nation | N1 elitenation (forgotten majority against global finance and bureaucratic elites; borders and culture); N2: "The old parties are finished. Only a movement…" can be read as aside (→ Fascism) or as keep (→ National populism) | ambiguous | **rewrite**: N2 has no defensible single answer; add "and we will win it at the ballot box" (keep) or remove "Only a movement" |
| 12 "Structural barriers rooted in race, gender… outcomes are equitable" | Group equality | rights | R1 rules; also start (resources redistributed), which yields to rules | Group equality | keeps; "equitable" in the text is fine (case text is quoted) |
| 13 "History is a ledger of blood… every owner answers to the leader, and the leader answers to the race" | Nazism | nation | N1 blood; N2 aside ("every owner answers to the leader") | Nazism | keeps |
| 14 "…bring all three into public ownership by an act of parliament… face the voters" | Democratic socialism | class | C1 public; C2 vote | Democratic socialism | keeps |
| 15 "The factory should be ours, not the shareholders'… let customers decide which factories survive" | Market socialism | class | C1 market (also workers, which yields); C2 none | Market socialism | keeps |

No specimen exists for Nationalism, Class politics with nothing attached, Conservatism or Modern liberalism (specimen 10, re-keyed, would cover Modern liberalism if kept as written). Write one each before the determination is offered (E13).

### Old drill `D_UNIT` (first question, 16 items)

| Items | Old answer | New D1 | Note |
|---|---|---|---|
| 1, 2, 3 | Workers against owners | class | 3 ("national minimum wage… won from their employers") is the u1 exception material: "national" does not make it the nation answer |
| 4, 5, 6 | The nation | nation | 6 names rich and poor only to deny them: u1 exception class~nation |
| 7, 8 | One race ranked above the others | nation (N1 blood) | gate items now; the ranking is asked in u3 |
| 9, 10 | Groups held back by unfair systems | rights (R1 rules) | |
| 11, 12 | The individual | rights (R1 leave) | |
| 13, 14 | Tradition and faith | tradition (13 says "country": nation yields to tradition) | |
| 15, 16 | Ordinary people against an elite | nation (N1 eliteonly / elitenation) | 15 never names the country ("this place"); fine under "its ordinary people" |

All 16 have one defensible D1 answer. They become u1 `piece` and `route` items or `earlier` items in later units.

### Old drill `D_SOC` (12 items) and `D_FASC` (13 items)

| Item | Old name | New route | New name |
|---|---|---|---|
| SOC 1, 2 | Marxism | class; C1 explain; C2 none | Marxism |
| SOC 3 | Marxism-Leninism | class; C1 public; C2 seize ("it will not hand power back") | Marxism-Leninism |
| SOC 4 | Marxism-Leninism | class (weak: "the working class", no owners named); C1 none; C2 seize ("no rival parties") | Marxism-Leninism; add owners to firm up D1 |
| SOC 5, 6 | Democratic socialism | class; C1 public; C2 vote | Democratic socialism |
| SOC 7 | Social democracy | class ("no employer may go below", "working families"); also rights, which yields; C1 keep; C2 none | Social democracy; a good misleading case for the socdem~modlib pair |
| SOC 8 | Social democracy | class; C1 keep; C2 none | Social democracy |
| SOC 9, 10 | Anarchism | class; C1 workers; C2 gone | Anarchism |
| SOC 11, 12 | Market socialism | class; C1 market; C2 none | Market socialism |
| FASC 1, 2, 3 | Fascism | nation; N1 whole; N2 aside | Fascism |
| FASC 4 | Nazism | nation; N1 blood; N2 keep (says nothing about elections) | Nazism |
| FASC 5 | Nazism | nation; N1 blood; N2 aside | Nazism |
| FASC 6, 7, 8 | Reactionary conservatism | tradition; T1 restore | Reactionary conservatism |
| FASC 9, 10, 11 | National populism | nation; N1 elitenation; N2 keep ("let the voters judge", "give us a mandate", "free election") | National populism |
| FASC 12, 13 | Just a dictatorship (authoritarianism) | none | No side named |

All 25 keep a defensible single route. None of them may be reused as a teaching case and as a drill item (W5.4); the cards' own examples become teaching cases, these become drill and return cases.

### Old faulty claims (`IDEOLOGY_ERR`, 13) as claim items (S6 `use: 'claim'`)

| # | Claim | New `ask` | Unit | Note |
|---|---|---|---|---|
| 1 | "Sweden is a socialist country." | option C1 keep | u2 | **rewrite** with an invented country (W5.7) |
| 2 | "Anyone who brawls in the street… is a fascist." | missing fasc | u3 | |
| 3 | "Fascism is when the government does a lot of stuff." | missing fasc | u3 | also a refute card (how much a government does is not an answer of the key) |
| 4 | "Communism and fascism are the same thing, because both ban opposition parties." | option D1 (they give different first answers) | u3 | horseshoe refute; u3 assumes u2 |
| 5 | "Anyone who wants strong borders is a fascist." | option N2 keep | u3 | now has a name to land on: Nationalism |
| 6 | "A government that taxes the rich heavily must be Marxist." | option C1 keep | u2 | |
| 7 | "She says a small elite is robbing ordinary people, so she must be a socialist." | option N1 eliteonly | u3 | |
| 8 | "Anyone who puts the country first and distrusts the establishment is basically a fascist." | option N2 keep | u3 | |
| 9 | "A speech about how racial groups are held back is no different from Nazism…" | option D1 rights | u5 (or u1) | the valence pair |
| 10 | "'Liberal' always means left-wing." | missing clib | u5 | Modern liberalism now names the American usage |
| 11 | "Social democracy and democratic socialism are the same thing with two names." | option C1 keep | u2 | |
| 12 | "The Nazi government controlled the whole economy, so it must have been socialist." | option N1 blood | u3 | the old correction leaned on the ownership question, which the nation branch no longer asks; the correction is now "the key reaches this name by ranking peoples by blood, not by anything about the businesses" |
| 13 | "He talks only about the nation and never mentions business, so he must want the government to stay out of the economy." | **re-home** | u2 | the nation branch asks nothing about business. Rewrite as a working-people claim: "The leaflet never says who should own the factories, so it must want the owners left alone" (ask: option C1 none) |

### Old course examples

The old walk-throughs run as follows: U1 "Text A" (licences to cut hair) → rights, R1 leave, Classical liberalism; U1 "Text B" (public ownership of the plant, no word on how) → class, C1 public, C2 none, Democratic socialism (the old card's "one of these three" is now the key's decision, and is the u2 question card's example); U2 worked (ferry crews) → Democratic socialism; U3 worked → Fascism; U4 worked → Populism with nothing attached; U5 "A whole case" (the church back where it stood) → tradition, T1 restore, Reactionary conservatism. All isolate.

## (d) Gaps this subject's units will hit

1. **The old course has no unit ids, and the app maps old units by position only while nothing is rebuilt.** `public/app/state.js` `legacyEntry` takes `legacy.course[position]` when no unit is rebuilt, and looks entries up by `id` once one is. Today `subject.units` is five ids and the old course has five entries, so the app loads and shows the old units in their places (checked: `node tests/validate-data.mjs` builds every subject). The moment u1 is rebuilt, every old entry is looked up by id, finds none, and the app throws at load. The first unit build must add `id: 'u2'` … `id: 'u5'` to the old course entries in `standard0.js` in the same commit (Psychology's old course carries ids for this reason). The positions do not all match: old Unit Four ("The other names") will stand in for u4 (old ways) and old Unit Five ("Running the key") for u5 (rights) until those are rebuilt.
2. **Two keys at once.** With a key registered, the subject screen's "The key at a glance" (`keyGlance`, `public/app/subject.js`) prints the new key, while the old units, the old drills and the old full-determination screen still teach and ask the two old questions. Psychology has the same state (`docs/HANDOFF.md`). It ends unit by unit; E13 already keeps the new determination off until every unit is rebuilt.
3. **The lock.** `node tests/validate-lessons.mjs` reports `V46 ideology: no lock entry; run node tests/lessons/lock.mjs`. This pass may not touch `tests/`, so the lock is not written; whoever integrates runs `node tests/lessons/lock.mjs`.
4. **The family-key exemption.** `tests/validate-data.mjs` exempts `ideology` (`FAMILY_KEYS`) from "isolates exactly one" for the old flat key in `standard0.js`. It stays while that file exists and must be deleted with it (section 11). The new key needs no exemption: every route isolates.
5. **Gate unit rules are partly unwritten.** Section 8: the family versions of V11 to V15, V20 to V24, V35, V39 and V44 are not coded. u1 has five families, more than Psychology's four, so its ledger and look-alike coverage will be checked only by hand until they are.
6. **V15 in u2.** C1's and C2's "The text does not say" answers keep several names each, so 16 of the 21 pairs in the branch need a ledger entry. The standard allows `taughtIn` for entries with no card of their own; expect most to be `taughtIn` the C1 or C2 question card. If that proves unreadable, the alternative is to split u2 into two units sharing the branch (S2 allows `{ text }` titles for that), which the engine has not yet run (no exemplar of a branch split across units, and a unit that teaches no question has never been validated).
7. **V2 and V8 match as substrings, not whole words.** A key line or `aka` that is a short common word forbids every word that contains it. This shaped the key (no term "class" or "state"; no `aka` "populism" or "restoration"), and unit writers must use tokens for every name, including inside words like "classical". Worth a validator fix to whole-word matching (tests are out of scope here).
8. **Nazism sits under both answers of N2.** N1 alone decides it. The question card must say why it appears under "Leave them in place" (a text that says nothing about elections) as well as under "Push them aside"; the engine's "keeps and rules out" lines will show it twice.
9. **Two questions share one answer wording.** C1 and C2 both have "The text does not say" (`{a:C1.none}`, `{a:C2.none}`). The tokens are distinct; a route shown to the learner will print the same words twice, which is intended.
10. **Contested content (W5.7).** Specimen 8 and claim 1 name real countries; the "Nazis were socialists" refute states historical facts (privatisations, banned unions) that need a published source with `verified: true` before u3 can be live (V22). The subject's `limits` carry the old caveats.
11. **Engine settings for a reading subject.** `subject.settings` is a new fixed list (work, money, housing, health, schooling, town, borders, faith); every old case needs one assigned. Nothing in the engine is known to depend on the values.
