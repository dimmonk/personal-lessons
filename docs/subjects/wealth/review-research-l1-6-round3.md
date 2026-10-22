# Wealth, lessons 1-6: research review, round 3 (build-subject step 6, role "research", 2026-10-22)

Fresh reviewer. What I read: `public/subjects/wealth/` (subject.js, l1-l6.lesson.js, gen-list, gen-cash, gen-cost, gen-match, gen-tax,
gen-share, items-*), `public/app/lessons/own-work.js` and its `work*` strings in `app/lessons/view.js`, the regenerated learner views
`docs/learner-view/wealth-l1..l6.md`, `plan.md`, `docs/research/wealth.md`, the build-subject skill, and `fixes-l1-6-round2.md` to verify
its claims. L7-L12 ignored.

Every number in the six learner views (worked examples, practice and check items) was recomputed: all correct. The generators' parameter
ranges were read to see every answer they can produce. The own-step works for L1-L6 were run headless (`scratchpad/wcheck/ownwork3.mjs`,
updated from round 2's script to the new `kept` and `next` fields) on 37 sheets, including each lesson's worked household typed as a
learner would: Maya (L1: $416,900, $12,400 over at Harbor Bank), Leo (L2: 4.5 months, move the down payment), Lakeside (L3: $469.62),
Nina and Tom (L4: $960 and $270 left), Ruth (L5: swap $24,000, $211.20), Owen (L6: 26.1%, sell about $18,500). Each matches its lesson.

## Sources re-checked on the web (2026-10-22)

| Claim | Source fetched | Result |
|---|---|---|
| FDIC $250,000 per depositor, per bank, per ownership category; joint "ownership interest" (W41) | fdic.gov Understanding Deposit Insurance | Quotes match word for word |
| SIPC separate capacity, $500,000 incl. $250,000 cash, same capacity combined (W50, second entry) | sipc.org Investors with multiple accounts | All three quotes match |
| 401(k) $24,500 and IRA $7,500 for 2026 (W37) | IR-2025-111 | Match |
| 2026 long-term gain rate 0% up to $49,450 taxable income (single) | Rev. Proc. 2025-32 via Kiplinger and others | Confirms L5-1 below |

## Personalized advice

None. Every case is invented, no real security is named, thresholds are labelled common rules, and every flagged own-step line is followed by
`workNotAdvice` (seen in every flagged run). Pass.

## Carried-over structure

None found. The case forms (statements, fee sheet, pay stub and match rule, the order of saving) come from the field's own papers (W41,
W44, W45, W46).

## Defects that decide the verdict

### L5 Taxes: FAIL (1)
1. **Wrong fact: a 12% tax rate on interest paired with a 15% rate on long-term gains.** `gen-tax.js:19` `RATES = [12, 22, 24]` feeds the
   placement households, whose tax note always prints "Tax rate on a gain held more than a year: 15%" (`gen-tax.js:48-49`). In 2026 a single
   filer pays 0% on long-term gains up to $49,450 of taxable income and the 12% bracket runs to $50,400 (Rev. Proc. 2025-32); joint
   filers $98,900 and $100,800. So someone whose top rate is 12% almost always pays 0%, not 15%, on a long-term gain. The research note
   itself says the long-term rate is "0%, 15% or 20% by taxable income" (W39). The case also contradicts L5's own rule, "Held more than a
   year, it is taxed at a lower rate" (l5.lesson.js:31). And the `gain-rate-wrong` feedback ("taxed at 15%, not at the rate on interest")
   marks the learner wrong for using the lower rate. Seen in the views: item 11 ($180 × 15% = $27.00 against interest at 12%) and check 13.
   *Fix:* draw the placement rates from `[22, 24]` only (as `WHEN_COMMON.shortRate` already does), or pair 12% with a 0% long-term rate and
   make the gain tax $0 in that case.

### L1, L2, L3, L4, L6: no deciding defect.

## Polish (does not decide the verdict)

- P1 (L5) The bonds' gain never decides the swap: `bondGain` [100, 250] × 15% ≤ $37.50, while the yearly saving is at least $42
  (`gen-tax.js:26`). The rule asks the learner to "check its gain first", but every working ends "the swap is worth it". Either say a
  one-time tax under one year's saving always favours the swap, or add one case with a large gain weighed over several years (W2).
- P2 (L5) The wash-sale remedy for a buy made *before* the sale ("Move the purchase past 30 days", `gen-tax.js:176`) should name both
  directions. Optional: Rev. Rul. 2008-5 (a buy in your IRA within the 30 days also triggers a wash sale).
- P3 (L6) The NUA caution (l6.lesson.js:19) reads as contradicting "sell first inside a 401(k)". Say it applies when the company stock in
  the plan has grown a lot, and that otherwise the 401(k) is where to sell first (W49).
- P4 (L2) "If cash is short and a bill's money sits in stocks, do both" (l2.lesson.js:20) is in the rule, but no generator makes the case
  and the `cash` list has no "both" option. The own step handles it (run: $7,000 cash, $3,900 a month, a bill in stocks gives both flags).
- P5 (L3) The fee sheet's note and the rule say the administrative fee is also on the quarterly statement (W44: right), but the sample
  statement (`gen-cost.js:65-67`) shows no fee line. Round 2's fix changed the wording, not the statement; add a fee line.
- P6 (L4) Check pass rules `mine` and `left` need only 2 of 3 right (l4.lesson.js:48, 50): one wrong match calculation still passes. The
  plan's test wants the match shortfall within 10% on every household.
- P7 (L4, carried from round 2 P6, left as rated) Rosa (four months of cash, $2,100 card at 22%) and Carlos: a planner would clear the card
  from the cash above three months at once.
- P8 (own step, L5) `workPlaceFine` (view.js:312) prints "No bonds sit where they are taxed every year ... Nothing to move" when bonds *do*
  sit in the brokerage account but the 401(k) holds only bonds (run: $24,000 of bonds in brokerage, 401(k) all bonds). The sentence reads
  as false. Split it: "Your 401(k) or IRA holds no stocks to swap with" for that case. Also a 401(k) holding only a target-date fund
  (mostly stocks) gets "Nothing to move"; say the app cannot weigh a mixed fund.
- P9 (own step, L1) `workListFix` suggests "another kind of ownership, such as a joint account" even when the flagged group is already joint
  (run: $520,000 joint at one bank). Name another bank only, or pick the example by the group's owner.
- P10 (own step, L2) A month's spending typed as 0 prints "Months of spending 0" and flags all the cash as more than six months
  (run). Refuse 0 in the `monthly` field, or skip the call when it is 0.
- P11 (own step, L3) The cost line renders "$469.62 a year , 0.92% of what is in them": a space before the comma (`own-work.js:56`, the
  `text` starts with ", "). Check how own-view joins `strong` and `text`.
- P12 (note) Two entries are both numbered **W50** (`docs/research/wealth.md:457` FBAR, `:561` SIPC and wash sale). L1/L5 and the plan cite
  W50 for SIPC; L9's lines cite W50 for the FBAR. Renumber one.
- P13 (refs) `limitHsa` cites "IRS Publication 969" for 2026 figures; the figures ($4,400 / $8,750) are right, and the primary source is
  Rev. Proc. 2025-19. Optional.

## Round-2 fixes, verified

| Claimed fix | Verified how | Result |
|---|---|---|
| L1-1 SIPC by firm + capacity, cash limit | own-work.js:67-85; runs: individual $300k + joint $300k at one firm not flagged; $450k cash flagged $200k over | Fixed |
| L2-1 own step follows the lesson; months never negative | own-work.js:101-120; runs: Leo gives 4.5 months + "move it"; held bill set apart; bill "not put aside" flagged; short + stocks gives both | Fixed |
| L4-1 second step as "the next __%" | own-work.js:127; subject.js:188-189 `together`; runs: $54,000, 4%, 3%+next 2% gives $270 left | Fixed |
| L5-1 sell/wait decides both ways | gen-tax.js:98-101: wait saves ≥ $280 vs cost ≤ $108; now saves ≤ $63 vs cost ≥ $81; both in practice and check | Fixed |
| L5-2 wash sale "or one nearly the same"; remedy keeps the mix | l5.lesson.js:33; gen-tax.js:172-178 | Fixed |
| L5-3 "nothing to move" with unmarked funds | run: kinds blank gives `workPlaceUnknown` | Fixed |
| P8 W42 re-pointed | note line 378 cites the IRS page | Fixed |
| Learner L15-L18, L10, L4/P2, L1/L2, L11, L24/P7 | read in the views and code | Fixed; L8 only reworded (see P5) |

## Verdict

| Lesson | Verdict | Deciding defects |
|---|---|---|
| L1 | PASS | none (P9) |
| L2 | PASS | none (P4, P10) |
| L3 | PASS | none (P5, P11) |
| L4 | PASS | none (P6, P7) |
| L5 | FAIL | 1 (12% on interest paired with 15% on long-term gains) |
| L6 | PASS | none (P3) |

Counts by kind: wrong facts or numbers 1 (L5-1); departures from the way of thinking 0; guessable or arguable answers 0 (L5-1 also makes
the `gain-rate-wrong` feedback wrong at 12%); carried-over structure 0; personalized advice 0. Polish 13. Every round-2 deciding defect is fixed.
