# Wealth, lessons 1-6: research review (build-subject step 6, role "research", 2026-10-22)

Reviewer: fresh, did not write these lessons. Read: `public/subjects/wealth/` (subject.js, l1-l6, items-*, gen-*),
`public/app/lessons/own-work.js` (and the `work*` strings in `app/lessons/view.js`), the learner views `docs/learner-view/wealth-l1..l6.md`,
`docs/subjects/wealth/plan.md`, `docs/research/wealth.md`, and the build-subject skill. Every own-work calculation was traced by hand.

## Figures checked against the agencies' own pages (2026-10-22)

| Figure in the lessons (subject.js `refs`) | Source checked | Result |
|---|---|---|
| FDIC $250,000 per depositor, per bank, per ownership category; single-name checking + savings combined; stocks/funds not covered | fdic.gov, Understanding Deposit Insurance | Correct |
| SIPC $500,000 incl. $250,000 cash; "does not protect against the decline in value" | sipc.org, What SIPC Protects | Correct |
| 401(k) employee limit 2026 $24,500; IRA $7,500 (catch-up $8,000 / $1,100; 60-63 $11,250, not used) | IRS IR-2025-111 | Correct |
| HSA 2026 $4,400 self-only / $8,750 family | IRS Pub 969 | Correct |
| Net capital loss against other income $3,000 ($1,500 MFS); long-term = held more than one year | IRS Tax Topic 409 | Correct |
| FBAR: aggregate over $10,000 at any time | IRS FBAR / 8938 comparison page | Correct |
| Form 8938, living in US: $50k last day / $75k any time; MFJ $100k / $150k | IRS Comparison of Form 8938 and FBAR | Correct |
| Gen-tax uses 22-24% short-term against 15% long-term | Tax Topic 409 brackets (15% band starts about $48-49k single) | Consistent: a 22%+ ordinary bracket sits in the 15% LTCG band |

Research-note quotes sampled (W22, W26, W37, W39): match the pages. Practitioners' order of saving (W24) re-checked by search: the common
versions put a *small starter* buffer first, then the match, then high-interest debt, then the *full* 3-6 month fund (see L4-1).

## Personalized advice

No lesson names a real security or tells the learner what to buy or sell; fund names are generic and every case is a made-up household.
The rules are general rules of thumb, each marked "a common rule, not a law" (L2, L4, L6). Borderline only on the learner's own data, where
the app prints a dollar move: drift "Moving about $X from stocks to bonds", placement "Swapping up to $X", L6 rule "sell down to it",
cash "invest the rest". See X-1.

## Defects

### L1 Your list, and what could lose it: FAIL (1)
1. **Own step contradicts the lesson.** `own-work.js:56-59` (`ownWorkList`) tests each account's balance against $250,000 by itself.
   L1 teaches that FDIC adds up every account in one name at one bank; the check flags exactly that slip (`per-account-limit`). The sheet
   has no bank/firm field, so two accounts at one bank are never added together. *Fix:* add an optional "Bank or firm" field to the sheet
   and sum FDIC balances by institution (SIPC per firm) before comparing; until then, print a line saying that accounts at one bank are counted together.
   (Minor, not a fact: the learner view's own-step line "written to this phone only" (wealth-l1.md:251) contradicts the form text "saved with your
   Google sign-in". Make them agree.)

### L2 Money you need soon: FAIL (1, minor)
1. **Overstated fact.** `gen-cash.js:79` "The cash past six months loses to rising prices every year"; also `l2.lesson.js:18`, `gen-cash.js:61`,
   `view.js:277`. Not true every year: in 2024-2026 high-yield savings paid at or above inflation. W27 (money illusion) does not support the
   claim. *Fix:* "Cash past that usually earns less than stocks over the long run, and after tax often barely keeps up with prices."

### L3 What it costs a year, in dollars: FAIL (1)
1. **Departs from W2 (weigh the current course against the alternative).** `l3.lesson.js:17`: "Leave it alone when nothing of its kind costs
   less: switching only costs you time." So the rule implies that switching is free. That holds inside a 401(k), where every practice case
   sits, but the own step (`work: 'cost'`) covers brokerage accounts too, where selling a fund with a gain is taxed (L5 teaches this two lessons later).
   *Fix:* in the rule, add "In a 401(k) or IRA a switch costs no tax; in a brokerage account, check the gain first (lesson 5)". In the
   own step, add the line `workPlaceSell` (or similar) when a brokerage account holds a costly fund.

### L4 The full match, then the order of saving: FAIL (3)
1. **Marked order is arguable against the field's own consensus.** `items-order.js:8-16, 29-42`: the first rung is a full three months of cash,
   ahead of the match and a 24-26% card. Practitioner versions of the order (Bogleheads/r/Bogleheads getting-started, "financial order of
   operations") put a *starter* buffer first, then the match, then high-interest debt, then the full 3-6 months. For o-1 (Jamal: one month, 24%
   card), o-4 (Mei: two months, 26% card, in the check), o-6, and o-3/o-7 (match before topping up), "match, card, then fill cash" is equally or more
   defensible. *Fix:* split the rung into "a starter buffer (about a month)" and "fill cash to three months" (after the card), and choose
   households whose answer is unambiguous; update THEN and the rule text at `l4.lesson.js:30`.
2. **Ambiguous match document.** `gen-match.js:31-32` (and w-match): "The employer adds 50 cents for each dollar you put in / Up to 6% of your
   pay" can be read as the employer adding up to 6% of pay, which would need 12% from the learner. Real plan documents say "on the first 6% of
   pay you contribute". *Fix:* row 2 reads "On what you put in, up to 6% of your pay".
3. **A condition the expert checks is missing (minor).** Vesting and a mid-year stop at the $24,500 limit (no true-up) can make "the whole match"
   less than the formula shows. *Fix:* one line in the own step: "Check your plan's vesting and whether it trues up if you reach the yearly limit early."

### L5 Taxes: FAIL (5)
1. **Arguable marked answer, and a departure from the owner's ask "delay the tax by not selling".** `gen-tax.js:82,90` (g-sell-now, also in the check):
   "the tax is the same now or later, and the cheaper fund starts saving now", so "Sell now and switch" is marked right. Deferring a gain
   has value (the tax money keeps working, and a step-up in basis at death can erase it), and whether the fee saving beats paying tax now
   depends on the balance and the fee gap, which the case does not show. "Wait" is not defensible here, but "keep it, switch new money only" is,
   and the claim "the same now or later" is wrong. *Fix:* show the balance and both fees, and make the call "the yearly fee saved against the tax
   paid now". Or drop the "same now or later" sentence and say that only the rate difference is decided here.
2. **Wrong wording.** `gen-tax.js:79` "a few weeks more and it is 15%" (also slip `sold-short-term`, subject.js:86). The case holds the fund 10-11
   months (`held: [10, 11, 1]`), so long-term status is 1-2+ months away. *Fix:* "In {left} months it is 15%"; slip text "sold a gain a few months short of a year".
3. **Prose overstates.** `l5.lesson.js:29` "A gain is taxed only when you sell." In a brokerage account, a mutual fund's capital-gain distributions
   and every fund's dividends are taxed each year without a sale. *Fix:* "Your own gain on a fund is taxed when you sell it (the fund's
   yearly payouts are taxed each year)."
4. **The "why" contradicts the worked example.** `l5.lesson.js:10` says Ruth holds "the same mix ... in her brokerage account and in her
   401(k)", but `items-tax.js:7-10` gives her 401(k) only stocks. *Fix:* change the why to "Ruth's bonds sit in her brokerage account and her
   401(k) holds only stocks."
5. **Own-work placement departs from the placement research.** `own-work.js:96` counts stocks in Roth IRAs and HSAs (`tax: 'free'`) as
   candidates to swap for taxable bonds. The tax-location reasoning (W25) puts the highest expected growth in the tax-free account, so the swap
   belongs first with traditional (tax-deferred) accounts. *Fix:* count `deferred` accounts only, or count them first and say so.
   (Minor, no fix needed: the "$211.20 saved" ignores the new dividend tax on stocks moved into the brokerage account; the prompt's "on that
   interest" keeps it correct.)

### L6 Your biggest single bet: FAIL (2)
1. **The own step cannot do what the lesson teaches.** `own-work.js:106-108` groups one-company holdings by exactly the same fund name. The
   lesson's own case labels the same company "Acme Corp Stock Fund" (401(k)) and "Acme Corp shares, from work" (brokerage). Typed like that on
   the sheet, they stay apart and can each fall under 10%: the `one-account-share` slip, made by the app. *Fix:* a "Which company" field for
   `one-company` holdings, and group on it. Or at least tell the learner on the form to type the company's name the same way in every account.
2. **Where to sell is missing (departs from W2 and from L5).** `gen-share.js:50,62` and w-share: "Selling about $18,500" with no account named.
   An expert sells first inside the 401(k) (no tax), and checks the special tax treatment for employer stock held in a 401(k) (net unrealized
   appreciation) before selling it there. Shares from work in the brokerage account are taxed on sale. *Fix:* one working line: "Sell in the
   401(k) first: no tax there. Shares in the brokerage account may owe tax on the gain (lesson 5)."

### Other own-work calculations (lessons 7-11, in the same file)
Checked and correct: cost (value × percent ÷ 100 + fees), match (pay × min(rate, cap) × cents), drift (share of stocks+bonds+cash, move =
drift × base), foreign (FBAR on the sum of each account's highest, which is the FinCEN rule; 8938 on now/highest against both threshold pairs;
TFSA flag, RRSP no flag, PFIC flag on funds outside an RRSP). Notes for when L7-L11 are reviewed: `ownWorkCover` (own-work.js:133) counts
401(k)/IRA balances as exposed to a liability claim, although ERISA plans are largely protected from creditors; `rateHigh: 4` is above Morningstar's 3.7% (W28).
`ownWorkCash` counts bills whose year has already passed among the "due soon" bills (filter `b.year <= lastYear` with no lower bound).

### X. Across lessons
1. **Advice framing on own data.** Where the app prints a dollar move on the learner's own accounts (drift, placement swap, L6 "sell down to it",
   cash "invest the rest"), add one standing line in the own step: "This is the rule's line, not advice for you. Weigh tax and your plans
   before acting." The plan already promises "Not personalized advice" (plan.md:4); the learner never sees it.

## Carried-over structure
None found. The lesson skeleton (rule, worked, support, set, own, check) is the shared lesson standard. The change/leave call rests on W2,
and the thresholds are marked as conventions (W40). The fund names echo common index-fund names but are generic.

## Verdict
FAIL for all six (L2 on one minor wording). Counts by kind: wrong or overstated facts 5 (L2-1, L5-2, L5-3, L5-1 claim, L5-4);
departures from the field's reasoning or the plan 5 (L3-1, L4-3, L5-5, L6-2, X-1); arguable or ambiguous marked answers 3 (L4-1, L4-2,
L5-1 call); own-work calculations that contradict the lesson 2 (L1-1, L6-1). All 2026 US figures verified correct.
