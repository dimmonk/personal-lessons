# Wealth Preservation: key rewrite and unit plan

Written 2026-10-05 for lesson standard 1. The key is `public/subjects/wealth/key.js`, the subject record `public/subjects/wealth/subject.js` (rev 1, standard 1, action: true). No unit is written yet. Old data: `public/subjects/wealth/standard0.js`. Audit: `docs/comprehension-audit/wealth.md` (its line numbers refer to an older index.html; the old wording it quotes was partly fixed in standard0.js since, and the fixes are noted where they matter).

## The key in brief

| Step | Question | Answers (outcome kept) |
|---|---|---|
| D1 (gate, u1) | What could lose this money? | Something taken out of it every year (6) · One thing most of it depends on (7) · A fall in prices it is not ready for (4) · The handover to other people (5) · Nothing in the case (legit, no branch) |
| E1 (u2) | What is taking money out of it? | A yearly charge for picking investments (Switch to index funds) · Yearly tax on income from investments in the taxable account (Right account for each investment) · Tax on a sale that does not have to happen (Delay the tax by not selling) · Tax on this year’s gain, while another investment sits below what it cost (Use a loss to cut tax) · The same sum taken out every year from a pot that has shrunk (Spend a percentage of the pot) · Nothing more than it should (Nothing to cut back, legit) |
| S1 (u3) | What one thing could take most of it? | One holding they can sell and do not run (Sell down on a schedule) · One holding they are not allowed to sell yet (Cap the loss without selling) · A business they run, with a support missing (Put the three supports in place) · A claim bigger than the insurance they hold (Insure the big loss) · Several properties or businesses, all in their own name (Separate companies for each property or business) · A loan the lender could use to force a sale (Borrow modestly, on safe terms) · Nothing: it is already made safe (Safe as it stands, legit) |
| T1 (u4) | Why would a fall in prices hurt this money now? | Living costs are paid by selling investments that can fall (Years of spending in cash) · A bill of a known size falls due on a known date, and the money for it can fall (A bond for each bill) · The mix has moved away from its plan (Rebalance by written rule) · It would not: what is needed is already safe from a fall (Already covered, legit) |
| H1 (u5) | What could go wrong when it is handed over? | The papers that say who gets it, or who can act, are out of date or missing (Update the basic paperwork) · Tax on an estate above the tax-free limit, with more than the owner needs (Give some away each year) · Tax on a sharp rise still to come in something the owner holds (Move it out of the estate before it grows) · The people who will receive it or run it (Family rules for the money) · Nothing: the papers are current and nothing else is in question (Nothing more needed, legit) |

22 outcomes (5 + 1 legit, 6 + 1 legit, 3 + 1 legit, 4 + 1 legit), plus the gate's legit family. Every branch asks one question (K2.2; V55 does not apply to a one-question branch). 19 terms, 32 avoid entries.

### Tie-breaks (yieldsTo), all data

| Where | When a case shows both | The key's answer | Why |
|---|---|---|---|
| D1 | A fall in prices it is not ready for + one thing most of it depends on | One thing most of it depends on | a cash buffer does not help a pot that one company can wipe out; old Unit 1 card "Don't confuse it with" |
| D1 | A fall in prices + the same sum taken out every year from a shrunk pot, or a sale planned to put the mix back that would bring a tax bill new money could avoid | Something taken out of it every year | old test "is the problem how much comes out, or that it had to come out on a bad day?"; old specimen 3 and drill X2 item 5 (the tax on the sale decides). The two "say" texts share one entry because they name the same answer |
| S1 | Several properties in one name + a claim bigger than the insurance | A claim bigger than the insurance they hold | insurance pays the claim and is the cheaper first fix; old worked example "Kofi and the stair" |
| S1 | A loan the lender could use to force a sale + a business they run with a support missing | A business they run, with a support missing | "no loan against its shares" is one of the three supports, so the loan is part of that answer |
| T1 | The mix has moved + living costs sold in a fall, or a dated bill in investments | the living costs or the bill | money needed soon decides first; old drill X4 item 6 (Raúl) has no need for money and stays a mix case |
| H1 | Tax on a large estate + tax on growth still to come | the growth | moving the fast-growing thing out does more than gifts; old pair trust/gifting |
| H1 | Papers out of date or missing + any other answer | the papers | old Unit 5 "Check the cheapest thing first", "Fix these first, before any structure"; old worked example "Hilary’s afternoon" |

Each tie-break is to be taught as a named `exception` card in the unit that teaches the losing answer's pair, and every case that shows both carries `also`.

## (a) Key changes and why (this becomes `build.keyChanges` in each unit's record)

Gate, all units:
- **D1 question.** was "What is the main danger to this money?"; now "What could lose this money?". Why: the old wording asserts a danger, so for the four leave-alone cases its answer was false (audit 4.5, C.4; section 11 asks for a stated rule for "nothing is threatening this"). "Could" makes the answer say where to look, which is true of sound cases too, and the gate's `why` says so.
- **D1 answers.** was "A slow leak" / "One event could wreck it" / "Bad timing" / "It is lost in the handover"; now "Something taken out of it every year" / "One thing most of it depends on" / "A fall in prices it is not ready for" / "The handover to other people". Why: K2.6 (no figure of speech: "a slow leak", "wreck"), K2.4 (an answer is what an observer can point to; "It is lost" asserts a loss that sound cases do not have), K2.5 (one grammatical form: four noun phrases). The old wordings survive once each as `aka` ("a slow leak", "bad timing"), and "concentration risk" is added as the real-life name for the second. Section 11 said to keep the gate wording because it matched the lessons; what is kept is the four-way split and the everyday ideas, not the metaphors.
- **D1 sub-lines.** was `sub` ("fees, extra tax, overspending", ...); now `when`, `plain` and `needs` on each answer, as A15 requires for families.
- **D1 fifth answer, new.** "Nothing in the case" (legit: true, keeps nothing, no branch). Why: A15 (a subject whose learner meets sound cases gives the gate a "nothing to name here" answer), K2.9, and V37 (the gate unit's drill stages need a case whose name is legit; in a gate unit the name is the family). It covers money put away that the case raises nothing about (a long-term saver who needs nothing from the pot for decades). The old "When nothing is wrong" card's own test is its rule: "Can you point to the problem in the words of the case? If you cannot, do not invent one."
- **The old timing family included drift.** kept, and the gate answer now fits it: "a fall in prices it is not ready for" covers living costs, a dated bill and a mix that has moved (audit 4.5: the old "forced to act" wording contradicted two of its four outcomes).
- **Codes.** P1 (gate) is now D1; old E1/E2, S1/S2, T1/T2, U1/U2 are now E1, S1, T1, H1, one per branch. Codes are never shown (K3); the old lessons' threat labels P1 to P4 that collided with the key are gone with the old lessons.

Every branch, all units:
- **Second questions removed.** was two questions per branch, the second asking what fix "is being done" or "fixes that leak", with every answer keeping one outcome; now one question per branch about what the case shows. Why: the old second question restated the outcome name as a sentence (audit C.2, 7.4) and could only be answered from a case that described the fix already applied (audit 7.6, section 11: 19 of 21 specimens). A key answer must be what the case shows (K2.4), and a second question whose answers each keep one name makes the first decide nothing (K2.2, V55). The first questions' groups (fees / tax / spending; holding / claim / loan) survive as the grouping of each unit's parts (A13), as in the psychology exemplar.
- **One leave-alone name per branch, broadened, with a stated rule.** Each branch's last answer and its legit name now cover every sound version of that kind, with the rule in `needs` and `when` ("the case shows it already taken care of: ..."), and each `when` ends "The case shows none of the other N". Why: K2.9 (a case where nothing is wrong must have an answer), section 11 and the brief (stated rule; names that do not read as their opposite).

Unit Two (E1):
- **E1 question.** was "Where is the money leaking out?" + "What fixes that leak?"; now "What is taking money out of it?". Why: metaphor (K2.6), and the second question removed (above).
- **feecore answer.** was "In fees: what the funds, adviser and platform charge" + "Swap costly funds for index funds that charge far less"; now "A yearly charge for picking investments". Why: the old answer fitted the sound case too (a flat fee is also a fee), so it could not separate the pair the branch exists to separate; the new answer names what the charge pays for, which is the difference (old test "if you stopped paying, what important thing would stop happening?").
- **One tax answer split in three.** was "In tax: paid sooner or more often than it had to be" for three names; now "Yearly tax on income from investments in the taxable account", "Tax on a sale that does not have to happen", "Tax on this year’s gain, while another investment sits below what it cost". Why: the old answer did not fit income taxed every year (audit 2.6), and three names under one answer left the old second question to do all the work.
- **burnrate answer.** was "In withdrawals: more is taken out than the pot can carry"; now "The same sum taken out every year from a pot that has shrunk". Why: "more than the pot can carry" cannot be pointed to; the fixed sum and the shrunk pot can.
- **acceptcost renamed and broadened.** was "A cost worth paying" (charges only) with answers "Nowhere: the charge pays for something real" / "Nothing: the charge pays for work that would not otherwise get done"; now `nocut` "Nothing to cut back" (legit), answer "Nothing more than it should", covering a charge for real work at a set price, income investments already in the sheltered account, and spending already reset each year as a share of the pot. Why: K2.9 (sound withdrawal and tax cases had no answer once the fix-already-applied specimens become situations); "a cost worth paying" kept as `aka`. Audit 2.13 (the key's leave-alone line contradicted the card) is fixed by printing one line from the key.
- **"realise", "basis", "wrapper", "core", "the draw", "burn rate".** Replaced or put on `avoid` ("sold" / "not sold", "what was paid for it"). Section 11, audit 2.3, 2.5, K6.
- **New terms:** an index fund, a sheltered account, a gain, compounding (audit 2.2, 2.3).

Unit Three (S1):
- **S1 question.** was "Where is the single weak point?" + "What is being done about it?"; now "What one thing could take most of it?".
- **Holding answer split by what the person can do.** was one answer "One holding is most of what you own" for three names, separated only by the old second question and a "choosing" card; now three answers: can sell and does not run / not allowed to sell yet / runs it. Why: the three facts that choose between them (old card "Choosing for one big holding") are what the case shows, so they are the answers.
- **Hedge narrowed.** was "unable to sell it, or the tax on selling would be so large that selling is not worth it"; now a rule that stops the sale for a set time. Why: "so large that selling is not worth it" cannot be pointed to, and a large tax on a free sale is the delay-the-tax case, not a reason for contracts.
- **New outcome `supports`, "Put the three supports in place".** Why: K2.9: a business the owner runs with a support missing (very common: the house loan against the company's shares) had no answer. The old card said "If one is missing ... fix that first. Without all three it is no longer a choice". New term "the three supports".
- **retain renamed and broadened.** was "Keep the big holding on purpose" (business with three supports); now `safe` "Safe as it stands" (legit), covering a business with all three supports, insurance well above any claim, properties already in separate companies, and a loan that is modest, fixed and cannot be demanded back. Why: K2.9 (old specimens 9, 10, 11 and drill X3 items 6, 8, 10 describe a fix already in place and, read as situations, are sound cases with no other honest answer).
- **Names.** "Separate companies for separate assets" is now "Separate companies for each property or business" ("assets" was one of nine words for the pot, audit 1.4). The others keep their names.
- **"liability", "leverage", "callable", "the tail", "entity", "exposure", "collateral".** Replaced or avoided (audit 3.3 to 3.6). New terms a holding, a limited company.

Unit Four (T1):
- **T1 question.** was "What could force a bad move with this money?" + "What takes the pressure off?"; now "Why would a fall in prices hurt this money now?". Why: "force" contradicted the drift and leave-alone answers (audit 4.5), and the second question was removed.
- **matched renamed and broadened.** id `matched` becomes `covered` (name "Already covered" kept), and now covers a mix within its plan's limits as well as money for a bill or living costs already safe. Why: K2.9 (old drill X4 item 5 and specimen 13, read as situations, are sound); "match" and "liability" were in no card (audit 4.4, 3.5).
- **New term sequence risk** (the old card "Why the order of returns matters" named it only in feedback, audit 4.1); the term "a bond" moves to Unit One because the gate's `when` for the mix needs it.

Unit Five (H1):
- **H1 question.** was "What is at risk when this money is passed on?" + "What has been put in place?"; now "What could go wrong when it is handed over?".
- **Tax answer split in two.** was "Tax on what is passed on, or on the growth still to come" for both gifts and trust, separated only by the second question (whose gifting answer reused the trust card's "while it is small", audit 5.2); now "Tax on an estate above the tax-free limit, with more than the owner needs" and "Tax on a sharp rise still to come in something the owner holds".
- **trust renamed.** was "A trust or holding company" (two names joined, K4); now "Move it out of the estate before it grows", with "putting it in a trust" and "a family holding company" as `aka`.
- **The leave-alone answer no longer matches the paperwork case.** was "Nothing new: the documents already in place cover it" beside "The will, beneficiary forms and power of attorney are brought up to date", which specimen 21 matched word for word (audit 5.3); now the paperwork answer requires papers out of date or missing, and the leave-alone answer requires them current. Names "Update the basic paperwork" and "Nothing more needed" kept: neither reads as its opposite (the audit's complaint was about the older "Basic documents current" / "No structure needed").
- **New terms** an estate, a beneficiary form, a power of attorney, a trust (audit 5.1, 5.6). The beneficiary form's meaning says only that it is separate from the will; "it usually overrides the will" is left to the cards, with "usually" and the local-rules limit, because it is not true in the same way everywhere.

Removed as unsourced (W5.7, section 11): the old caveat and card lines saying how second-generation family money is lost ("Most wealth that disappears ... through people", "Concentration built almost every fortune here and is the main way they end") and the claim that the "seventy percent" figure "comes from one consulting firm’s survey of its own clients". None is in the key or the subject record. The claim item that refutes "Seventy percent of wealthy families lose it" must be rewritten to rest on the question the claim skips and on asking who counted, not on an untraced story of where the figure came from (unless a unit author finds and verifies a source).

Subject record: blurb rewritten as a task (W7) with no key line in it (V2); limits rewritten from the old caveats with no outcome name typed in them (the old caveats named four fixes, which V2 would refuse), plus "The key does not replace advice".

## (b) Unit plan

Five classification units, one per question of the key. No fact or procedure unit: every number in this subject (a 1% charge over thirty years, a withdrawal as a share of the pot, the order of good and bad years, gifts over a decade) serves an outcome and is taught as a worked number on that outcome's `meet` card or a `term` card (section 11: "a worked number wherever the idea is a number"); none is a type of problem the key routes to, and none is a fact to hold apart from a case. Old Units Six (claims) and Seven (whole key) are not rebuilt as units: their claims become the `claim` stages and `refute` cards below, and the determination screen (E13), the `worked` cards and the close cards replace the rest. They stay in `subject.units` as standard 0 until u5 is rebuilt, then leave the list.

Every unit: kind C, standard 1, status draft, action subject (a `plan` card closes it; every case stage has a legit case; `drill.returns` holds four cases per name; V37, V44, V25).

### u1 (C, gate unit, A15). Title { text: 'What could lose the money' }
- Teaches: steps [D1]; families [erosion, shock, timing, handover, none]; terms [pot, share, fund, bond, mix, claim]; outcomes [].
- Assumes: nothing.
- Order: orient (the four ways money is lost, everyday stories: a pension fund charging 1.7% that nobody reads; a farmer sued over an accident; selling shares in a crash to pay university fees; a pension that went to an ex-wife). Terms before the card that needs them: pot first after orient; share and fund before "something taken out every year"; claim before "one thing most of it depends on"; bond and mix before "a fall in prices". Families in neighbour order: erosion, timing (pair: how much comes out vs having to sell in a fall), shock (pair with timing: one company falling vs the whole market falling), handover, none last (pairs with timing: money not needed for decades vs needed soon; and with erosion).
- Parts (A13), following the gate's answers: 1 money going out and the moment it is needed (erosion, timing); 2 one thing, and the handover (shock, handover); 3 nothing in the case, the question card, worked cases, drill, close.
- Ledger (families): erosion~timing, shock~timing, none~timing, none~erosion, handover~erosion (estate tax is once, at death; a yearly charge is every year). Exceptions: the two D1 tie-breaks (timing yields to shock; timing yields to erosion), one card each.
- Refute: "You need offshore structures and a private bank to do any of this" (names a fix before saying what could lose the money). Source: app-data (old WEALTH_ERR item 2), verified false until checked.
- Drill: piece, route, claim. Claims: offshore structures; "I don’t need a cash buffer. I’ll just sell when I need the money" (timing, asked as the gate question). Returns: four per family (20).
- Close: recap, transfer (a prompt per family), plan (example cues: "if someone offers me a product or a structure, then I ask what could lose my money that it answers, in numbers").
- Baseline (E21): six cases in u1's collection, half legit, listed in `subject.baseline` when they exist. Planned: (1) a pension fund at 1.4% plus 0.3% nobody has read (erosion, not legit); (2) a flat-fee tax adviser doing real work (erosion, Nothing to cut back, legit); (3) a builder's bill due in three months already in savings (timing, Already covered, legit); (4) 80% of what someone owns in their employer's shares (shock, not legit); (5) a will naming an ex-spouse (handover, not legit); (6) a 35-year-old paying into a pension she will not touch for thirty years (none, legit). Branch-level baseline cases carry their full route and outcome so E21 can score them by `legit`.
- Replaces: old Unit One (all cards: the four dangers, money words, keeping vs making, the four leave-alone names, Dev's worked example), drill X1, and claims 2 and 5.

### u2 (C, branch). Title { fromKey: 'D1.erosion' } ("Something taken out of it every year")
- Teaches: steps [E1]; outcomes [feecore, nocut, location, defer, harvest, burnrate]; terms [indexfund, compounding, sheltered, gain].
- Assumes: [u1].
- Order: compounding and index fund terms, then feecore, then nocut (the pair, P26: real against fake), lens, then the sheltered account and gain terms, location, defer, harvest (the three tax names side by side), then burnrate. Worked numbers: £100,000 at 4% for thirty years (about £324,000) against 3% (about £243,000); Ana's £600 a year of tax on bond interest in the wrong account; the £1,200 tax on a needless sale; Sam's £600 saved by a loss; £1,000,000 at 3.5% falling to £800,000.
- Parts: 1 charges (feecore, nocut); 2 tax (location, defer, harvest); 3 spending (burnrate), the question card, worked cases, drill, close.
- Ledger: feecore~nocut (lookalike, same person and adviser where possible), location~defer, defer~harvest, location~nocut (income already in the shelter), burnrate~nocut (a fixed sum against a sum reset each year).
- Refute: "A good adviser picks funds that beat the market, so a high fee is worth it" (testedBy a feecore drill case). Source: app-data, plus a published source on how many active funds trail their index after charges (to be found and verified; until then verified false).
- Claims: "It’s only a 1% fee" (demo), "Rich people don’t pay tax" (ask: option E1, answer needlesssale), "Whole-life insurance is a great investment" (ask: option E1, answer picking: part of the payment is a commission for what is sold).
- Returns: four per name (24).
- Replaces: old Unit Two (all cards and the Meera and Ken worked example), drill X2, claims 1, 7, 8, 10, and specimens 1 to 6.

### u3 (C, branch). Title { fromKey: 'D1.shock' } ("One thing most of it depends on")
- Teaches: steps [S1]; outcomes [diversify, hedge, supports, safe, insure, entity, deleverage]; terms [holding, threesupports, company].
- Assumes: [u1].
- Order: holding term; diversify; hedge (pair: free to sell or not); three supports term; supports; safe (pair: a support missing or all in place; then safe's again card in a different form, the safe loan); lens; claim names: insure, entity (pair, with the S1 tie-break as an exception); deleverage (pairs with safe and with supports, the second as an exception with its tie-break).
- Parts: 1 one holding (diversify, hedge); 2 a business they run (supports, safe); 3 a claim (insure, entity); 4 a loan (deleverage), the question card, worked cases, drill, close.
- Ledger: diversify~hedge, diversify~supports, supports~safe, insure~entity (exception, tie-break), insure~safe, deleverage~safe, deleverage~supports (exception, tie-break).
- Refute: "My house is my best investment" (one holding, usually bought with a large loan); "Diversification is protection against ignorance" (true of building, not keeping). Sources: app-data.
- Claims: both of those, and "Diversification is protection against ignorance" as the demo.
- Returns: four per name (28). This is the largest unit (seven names); the exemplar's 38 cards for five names suggest about 50 cards. No cap applies.
- Replaces: old Unit Three (all cards, the choosing card, Kofi's worked example), drill X3, claims 3 and 6, and specimens 7 to 12.

### u4 (C, branch). Title { fromKey: 'D1.timing' } ("A fall in prices it is not ready for")
- Teaches: steps [T1]; outcomes [cashbuffer, covered, ladder, rebalance]; terms [sequence].
- Assumes: [u1]. Also leans on u2 for the two cross-branch pairs below; it should assume [u1, u2] so that burnrate and defer can be printed by token (V5, V7).
- Order: sequence risk term (the £500,000 example, falls first against falls last); cashbuffer (with its use rule: spend from it in a down year, refill in an up year); covered (pair); lens; ladder (pair with covered: is the money already safe?); rebalance (pair with covered: within the limits or not).
- Parts: 1 living costs (cashbuffer, covered); 2 a bill and the mix (ladder, rebalance), the question card, worked cases, drill, close.
- Ledger: cashbuffer~covered, ladder~covered, rebalance~covered, cashbuffer~ladder; cross-branch, each an exception with the D1 tie-break: burnrate~cashbuffer, defer~rebalance (the old "Frank's bonus" pair).
- Claims: "I don’t need a cash buffer" was asked at the gate in u1; here a fresh claim item is needed (for example "Cash earns nothing, so keeping three years of it is a waste"), authored with a source.
- Returns: four per name (16).
- Replaces: old Unit Four (all cards, the Wus' worked example), drill X4, and specimens 13 to 16.

### u5 (C, branch). Title { fromKey: 'D1.handover' } ("The handover to other people")
- Teaches: steps [H1]; outcomes [basicdocs, simple, gifting, trust, governance]; terms [estate, benform, poa, trustword].
- Assumes: [u1].
- Order: beneficiary form and power of attorney terms; basicdocs; simple (pair: papers stale or current); lens; estate term; gifting; trust term; trust (pair with gifting, exception for the tie-break); governance (pair with trust: a trustee with a veto appears in both); the papers-first tie-break as an exception.
- Parts: 1 the papers (basicdocs, simple); 2 tax at death (gifting, trust); 3 the people (governance), the question card, worked cases, drill, close.
- Ledger: basicdocs~simple, gifting~trust (exception), trust~governance, basicdocs~governance (exception, papers first), gifting~simple.
- Refute: "I’ll sort out my will when I’m older" (a handover also starts with an illness). Source: app-data.
- Claims: "Seventy percent of wealthy families lose it by the second generation" (rewritten: it skips the key's question and names no way the money was lost; ask who counted; no counter-claim about where the figure came from unless sourced), and the will claim.
- Returns: four per name (20).
- Replaces: old Unit Five (all cards, Hilary's worked example), drill X5, claims 4 and 9, and specimens 17 to 21.

Retired at the end: old Unit Six's cards (two checks for any claim; each claim card) go into the refute cards and claim stages above; old Unit Seven's cards go: "The whole key on one page" to the subject's opening map (E14), "The four leave-alone names" to the legit outcomes' portraits, "When two names look alike" to the ledgers, "Words the cases use" to terms and `avoid` (case text may still use real words, which are exempt as quoting fields), "Frank's bonus" to u4's defer~rebalance exception, "Using the key on your own money" to the transfer and plan cards. Then standard0.js is deleted (F5).

## (c) Old specimens and drill items against the new key (K2.10)

Route notation: D1 answer → branch answer → name. "Situation" = the text shows a case to diagnose; "applied" = it describes the fix already in place (section 11). Every applied case either re-keys honestly to its kind's leave-alone name, or is rewritten as the situation before the fix.

### The 21 specimens

| # | Old name | D1 | Branch answer | New name | Verdict |
|---|---|---|---|---|---|
| 1 | Switch to index funds | erosion ("0.9% to the manager, 0.8% average fund charge") | E1 picking ("trailed it after costs") | Switch to index funds | Defensible. Rewrite: drop "The proposal is to ... move the core holdings to index funds", which is the fix applied |
| 2 | Right account for each investment | erosion (income "taxed every year") | E1 incometax (bonds and property trust in the taxable account; shares in the shelter) | Right account for each investment | Keep: a situation. Marked words for D1 and E1 |
| 3 | Delay the tax by not selling | erosion, also timing (14% against a 10% target) | E1 needlesssale (a sale of £180,000 would bring tax; new money is coming) | Delay the tax by not selling | Rewrite as the situation (the adviser proposes the sale; two years of new savings are about to be paid in), with `also: ['timing']` at D1 by the gate tie-break. Old `fals` threshold (40%) belongs to the shock family and is dropped |
| 4 | Use a loss to cut tax | erosion | E1 gainloss (gains sold this year; a fund £40,000 below cost) | Use a loss to cut tax | Rewrite: applied (sold and bought back the same afternoon); state the unsold loser instead |
| 5 | Spend a percentage of the pot | erosion, also timing (pot fell) | E1 fixedsum (£180,000 set at £3.1m, now 7.5% of £2.4m) | Spend a percentage of the pot | Rewrite: drop "The plan is to redefine the draw as 3.5%"; `also: ['timing']` |
| 6 | A cost worth paying | erosion (a flat yearly fee) | E1 nomore (flat £9,000, named work, no commission, index funds) | Nothing to cut back (legit) | Keep: a sound case. Audit C.4 said it points at three gate answers; under the new D1 the rebalance and estate papers are work the fee buys, not things in question, so only erosion fits |
| 7 | Sell down on a schedule | shock (68%) | S1 freeheld only if the case says she does not run the company; as written ("a founder's stake") ownrun is just as defensible | Sell down on a schedule | Rewrite: state she has left the company and is free to sell; drop the schedule, which is the fix applied |
| 8 | Cap the loss without selling | shock (70%) | S1 blocked ("cannot sell for two more years") | Cap the loss without selling | Rewrite: drop the puts and calls bought (the fix applied) |
| 9 | Insure the big loss | shock | as written: S1 madesafe (a £5m policy above £6m of assets is already in place) | as written: Safe as it stands | Rewrite as the situation (cover stops at £500,000; a pool and teenage drivers; a claim could be millions) → bigclaim → Insure the big loss |
| 10 | Separate companies | shock | as written: S1 madesafe (each property already in its own company) | as written: Safe as it stands | Rewrite as the situation (six rentals and the home all in one name) → onename → Separate companies for each property or business |
| 11 | Borrow modestly, on safe terms | shock | S1 madesafe (45%, fixed ten years, no clause to demand repayment, nothing against the investments) | Safe as it stands (legit) | Re-key, keep the text: an honest sound case. A new specimen for Borrow modestly, on safe terms is written (a broker loan of 60% against shares that can be demanded back) |
| 12 | Keep the big holding on purpose | shock (70% in a company she runs) | S1 madesafe (all three supports named) | Safe as it stands (legit) | Re-key, keep the text |
| 13 | Years of spending in cash | timing | as written: T1 ready (three years already held, with the use rule) | as written: Already covered | Rewrite as the situation (a retired couple selling shares each month to live on, nothing in cash) → livingcosts → Years of spending in cash |
| 14 | A bond for each bill | timing | as written: T1 ready (six bonds already held) | as written: Already covered | Rewrite as the situation (school fees each September for six years; the money is in shares) → datedbill → A bond for each bill |
| 15 | Rebalance by written rule | timing (drifted 60 to 71) | T1 drifted | Rebalance by written rule | Rewrite: drop "A written policy says ... executed without discussion" (the fix applied); the drift alone routes it |
| 16 | Already covered | timing (a deposit due in four months) | T1 ready ("instant-access savings account") | Already covered (legit) | Keep. Audit C.4: the old answer "A known bill lands on a known date" fitted it literally; datedbill now requires the money to be in investments that can fall, so only ready fits |
| 17 | A trust or holding company | handover | as written: no answer fits cleanly (the trust is already set up; no papers or people are shown) | none honestly | Rewrite as the situation (a founder's shares about to grow many times; estate above the limit) → growth → Move it out of the estate before it grows |
| 18 | Give some away each year | handover | as written: no answer fits cleanly (eleven years of gifts already made) | none honestly | Rewrite as the situation (an estate above the limit, more than the parents need, nothing given) → bigestate → Give some away each year |
| 19 | Family rules for the money | handover | as written: the fixes are in place (staged payouts, a veto, agreements) | none honestly | Rewrite as the situation (an heir about to marry, another who has left jobs, nothing agreed) → people → Family rules for the money |
| 20 | Update the basic paperwork | handover | H1 papers (will eleven years old, form names a former spouse, no power of attorney) | Update the basic paperwork | Keep: a situation |
| 21 | Nothing more needed | handover (an adviser proposes a trust) | H1 inorder (current wills, named beneficiaries, powers of attorney; no business or dependant) | Nothing more needed (legit) | Keep. Audit 5.3 is fixed: the paperwork answer now needs papers out of date or missing, so it no longer matches this text |

Totals: keep or re-key as written 7 (2, 6, 11, 12, 16, 20, 21); small rewrite of a defensible route 6 (1, 3, 4, 5, 8, 15); rewrite needed because the text routes to a different name or to none 8 (7, 9, 10, 13, 14, 17, 18, 19). New specimens needed: Borrow modestly, on safe terms (11 is re-keyed), Put the three supports in place (new name), and at least one for the gate's "Nothing in the case" if the determination can end a specimen at a gate answer (see gaps). Legit specimens after the rewrite: 6, 11, 12, 16, 21 (5 of 23), to be raised so that each kind has at least one and the list alternates sound and unsound look-alikes (E13).

### Old drill items (X1 to X5) and claims

These are bank material for the new units (all their cases are new under V32/W5.4 only if not reused as specimens). Each row: D1 → branch answer → name, and what has to change.

| Item | D1 | Branch → name | Change needed |
|---|---|---|---|
| X1.1 nurse, 1.4% + 0.3% | erosion | picking → Switch to index funds | none |
| X1.2 farmer, all in her own name, worker's claim | shock | onename or bigclaim: the insurance is not stated | state the cover for a full route |
| X1.3 £60,000 university bill, shares down | timing | datedbill → A bond for each bill | none |
| X1.4 landlord, no will, children not speaking | handover | papers, also people → Update the basic paperwork | mark `also: ['people']` |
| X1.5 £50,000 never changed, pot shrunk | erosion, also timing | fixedsum → Spend a percentage of the pot | mark `also` at D1 |
| X1.6 couple, £280,000 in one flat, one tenant | shock | freeheld (they can sell; do they run it?) | state that a letting agent runs it |
| X1.7 74% against 60%, retires in three years | timing | drifted → Rebalance by written rule | none |
| X1.8 pension form names the first wife | handover | papers → Update the basic paperwork | none |
| X2.1 three active funds 1.1 to 1.5% | erosion | picking → Switch to index funds | none |
| X2.2 moved to a 0.07% index fund | erosion | applied: nomore → Nothing to cut back | re-key as a legit case, or rewrite as the situation |
| X2.3 Hana, dividend fund in the taxable account | erosion | incometax → Right account for each investment | none |
| X2.4 income funds already in the pension | erosion | applied: nomore → Nothing to cut back | re-key legit |
| X2.5 Leila, 66% against 60%, adviser says sell | erosion, also timing | needlesssale → Delay the tax by not selling | mark `also` |
| X2.6 man declines a sale with £3,500 tax | erosion | needlesssale → Delay the tax by not selling | reword so the decision is not yet made |
| X2.7 Omar, £6,000 gain, a fund £8,000 down | erosion | gainloss → Use a loss to cut tax | none |
| X2.8 man sold a bank at a loss, bought a fund | erosion | applied; nothing left in question | rewrite as the situation |
| X2.9 £30,000 fixed, pot 600 to 450 | erosion, also timing | fixedsum → Spend a percentage of the pot | mark `also` |
| X2.10 3.8% each January | erosion | nomore → Nothing to cut back | re-key legit |
| X2.11 widow, flat £2,000 planner | erosion | nomore → Nothing to cut back | none (legit) |
| X2.12 flat £3,000 accountant | erosion | nomore → Nothing to cut back | none (legit) |
| X3.1 Tariq, 65%, free to sell | shock | freeheld → Sell down on a schedule | drop the adviser's plan sentence |
| X3.2 inherited 70%, does not work there | shock | freeheld → Sell down on a schedule | none |
| X3.3 engineer, cannot sell for 18 months | shock | blocked → Cap the loss without selling | none |
| X3.4 director barred, buys put and call | shock | blocked → Cap the loss without selling | drop the contracts bought |
| X3.5 pool, three teenage drivers, £500,000 limit | shock | bigclaim → Insure the big loss | none |
| X3.6 couple bought a £3m policy | shock | madesafe → Safe as it stands | re-key legit |
| X3.7 builder, two units and home in his name | shock | onename → Separate companies for each property or business | none |
| X3.8 restaurateur, separate companies already | shock | madesafe → Safe as it stands | re-key legit |
| X3.9 dentist, broker loan 60%, can be demanded | shock | riskyloan → Borrow modestly, on safe terms | none |
| X3.10 mortgage 150 on 400, fixed fifteen years | shock | madesafe → Safe as it stands | re-key legit |
| X3.11 Lucía runs it, three supports | shock | madesafe → Safe as it stands | re-key legit |
| X3.12 vet runs practice, supports | shock | madesafe → Safe as it stands | re-key legit |
| X4.1 man of 61, £2,000 a month from one fund | timing | livingcosts → Years of spending in cash | none |
| X4.2 Nina, adviser moving £90,000 into cash | timing | half applied: ready or livingcosts | rewrite one way or the other |
| X4.3 £35,000 tax bills, all in shares | timing | datedbill → A bond for each bill | none |
| X4.4 workshop, £70,000 bond already bought | timing | ready → Already covered | re-key legit |
| X4.5 Dara rebalanced back to 50/50 | timing | ready → Already covered (mix within its limits) | re-key legit |
| X4.6 Raúl 75% against 60% | timing | drifted → Rebalance by written rule | none |
| X4.7 Fatima, £8,000 in savings | timing | ready → Already covered | none (legit) |
| X4.8 £150,000 in the bank for six weeks | timing | ready → Already covered | none (legit) |
| X5.1 Marcus, will and form name his first wife | handover | papers → Update the basic paperwork | none |
| X5.2 stroke, no power of attorney | handover | papers → Update the basic paperwork | none |
| X5.3 Walter, £2.4m, never given | handover | bigestate → Give some away each year | drop the payment he sets up |
| X5.4 widow gave the allowance six years | handover | applied; nothing in question but papers not shown | rewrite |
| X5.5 Sunita, a daughter about to marry | handover | people → Family rules for the money | drop the terms the lawyer drafts |
| X5.6 three heirs deadlocked | handover | people → Family rules for the money | none |
| X5.7 Oluwaseun, £250,000 to £8m expected | handover | growth → Move it out of the estate before it grows | none |
| X5.8 Adeyemi holding company ten years ago | handover | applied; sound | rewrite, or re-key once papers are shown current |
| X5.9 single man, papers current, website says trust | handover | inorder → Nothing more needed | none (legit) |
| X5.10 retired couple below the limit, renewed | handover | inorder → Nothing more needed | none (legit) |

Claims (old WEALTH_ERR), now `claim` items: 1 rich people don’t pay tax → u2 (ask option E1 needlesssale); 2 offshore structures → u1 (ask option D1); 3 protection against ignorance → u3; 4 seventy percent → u5, rewritten without the untraced provenance; 5 no cash buffer → u1 (ask option D1, timing); 6 house → u3 (ask option S1, freeheld); 7 only a 1% fee → u2 demo; 8 whole-life → u2 (ask option E1, picking); 9 will when older → u5 (ask missing basicdocs); 10 adviser beats the market → u2 (ask missing nocut: what would you need to see before calling this a cost worth paying?).

## (d) Gaps this subject's units will hit

1. **Old course entries have no ids (blocks the first rebuilt unit).** `public/app/state.js` `legacyEntry` maps old units by position until one unit is rebuilt, then by `id`. Wealth's `WEALTH_COURSE` entries carry no `id` (Psychology's do), so the moment any wealth unit is registered the app throws "no old course entry for unit u2" and stops loading. The commit that registers the first wealth unit must add `id: 'u1'` to `id: 'u7'` to the old course entries in `standard0.js`.
2. **`subject.units` lists seven ids, not the five of the plan.** Until a unit is rebuilt the app maps old unit N to `units[N-1]`, and the E8 migration of old progress uses the same list as its map. Listing only u1 to u5 would hide old Units Six and Seven and lose their progress. u6 and u7 leave the list with the last rebuilt unit. There is no separate committed "old index to new id" map (E8 describes one; the engine uses the unit list).
3. **`subject.baseline` is left out** until Unit One's cases exist: V0 (`tests/lessons/rules-shape.mjs`) refuses a baseline id that names no case. The planned six are in (b). E21 scores a baseline case by `legit` on its name: the three branch-level legit cases need `outcome` in Unit One's collection, which A15 says gate cases do not carry. Either the baseline cases are allowed an `outcome` (they are in no card or drill, so nothing teaches the name early), or only gate-level cases are used and only one of them ("Nothing in the case") is sound. Standard decision needed; my pick is to allow `outcome` on `use: 'baseline'` cases.
4. **Cross-branch ledger pairs.** burnrate~cashbuffer and defer~rebalance are separated by the gate (D1), which u4 does not teach. S3's `step` ("the first question the unit teaches on which the two share no answer") is then T1 by default, the pair table (E2) has to draw the D1 row from an assumed unit, and the `exception` card's tie-break line has to find `yieldsTo` on the gate's options, not on the branch's. Check that the engine and V15/V23 handle a pair whose outcomes are in different groups.
5. **Two tie-breaks that name the same answer.** D1 `timing` yields to `erosion` for two different reasons; S1 says `yieldsTo` is a list of `{ option, say }`, and E5's line prints one `say`, so the two reasons share one `say` text. If the engine keyed tie-breaks by option the second would be lost; a single combined `say` avoids it but makes a long feedback line.
6. **A gate answer with no branch in the determination.** "Nothing in the case" ends the route at the gate, like Psychology's "A passing moment". A specimen of it has no `outcome`; S6 lists `outcome` on a specimen. Psychology faces the same question; settle it once for both.
7. **The gate unit's legit-case rule** is met by the "Nothing in the case" family. Without that answer, V37 and E6 would have refused every stage of u1's drill, because a gate case's name is its family; this is why the gate has a fifth answer. A subject whose sound cases all sit inside branches would hit the same wall (worth a line in A15).
8. **Gate options carry `aka`** here (three of them). Section 16 says the validator reads `aka` on gate answers; the exemplar's gate has none, so check that the `meet` card of a family prints it.
9. **Terms used only in the key.** Several terms appear only in `when`/`needs` text and cards (compounding, sequence risk, a trust). V6 needs each used by token in a later card and in a drill item or the key; unit authors must plan a drill-item use for those three.
10. **No fact or procedure unit.** If the cold read finds the arithmetic (compounding, withdrawal share, order of returns) is not learned from `meet` cards, the remedy under the standard is a procedure unit with its own key branch, which this key does not have. Not expected; noted.
11. **Wrong-idea sources.** Every refute and claim above comes from the old app's own claims (`app-data`), not from a published source or a cold reader. V22 blocks `live` until each is verified; E15's deploy list will show them.
12. **Lock.** V46 fires for wealth ("no lock entry") until `node tests/lessons/lock.mjs` is run; it was not run here because the lock file is under `tests/`.
