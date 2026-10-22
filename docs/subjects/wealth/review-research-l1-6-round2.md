# Wealth, lessons 1-6: research review, round 2 (build-subject step 6, role "research", 2026-10-22)

Fresh reviewer; judged the current files, then compared against `fixes-l1-6.md`. Read: `public/subjects/wealth/` (subject.js, l1-l6,
items-*, gen-*), `public/app/lessons/own-work.js` and its `work*` strings in `app/lessons/view.js`, learner views
`docs/learner-view/wealth-l1..l6.md`, `plan.md`, `docs/research/wealth.md` (W1-W49), the build-subject skill. Lessons 7-12 ignored.

Every number in the six learner views (worked examples, practice and check items) was recomputed by hand: all correct. The generators'
parameter ranges were read to see what answers they can produce. The own-step works for lessons 1-6 (`list`, `cash`, `cost`, `match`,
`placement`, `share`) were run headless (`tests/load-app.mjs`, script kept outside the clone) on 20 varied sheets, including each lesson's
own worked household typed as a learner would.

## New facts W41-W49 checked against the sources (2026-10-22)

| Note | Source fetched | Result |
|---|---|---|
| W41 FDIC per depositor/bank/category, category list, joint "ownership interest", investments not covered | fdic.gov Understanding Deposit Insurance | Quotes match word for word |
| W42 401(k) assets kept apart from employer, held in trust | DOL FAQ page now 404; IRS "Retirement topics - Bankruptcy of employer" says the same (kept separate, held in trust or insurance) | Supported; re-point the citation to the IRS page |
| W43 SEC: cash safest, lowest return, inflation risk | investor.gov refused (403) | Not re-checked; wording is standard SEC text |
| W44 DOL *A Look at 401(k) Plan Fees* | not re-fetched | Terms used ("expense ratio", administrative fee) are the standard ones |
| W45 vesting, 3-year cliff, 6-year graded, forfeiture; safe-harbor 100% of 3% + 50% of next 2% | irs.gov Retirement topics - Vesting (match); safe harbor via secondary sources only | Vesting quotes match; safe-harbor formula correct |
| W46 order of saving, versions differ on first rung | r/Bogleheads mirror, Money Crashers | Supported (starter buffer, match, high-rate debt, full fund) |
| W47 capital gain distributions, 1099-DIV box 2a, long-term regardless of holding | irs.gov Pub 550 (curl) | Quotes match |
| W48 wash sale, "add the disallowed loss to the cost of the new stock" | Pub 550 | Quotes match. Note: the rule is "substantially identical stock or securities", not only "the same fund" (see L5-2) |
| W49 NUA on employer securities | irs.gov Pub 575 (curl) | Quote matches |
| Limits: 401(k) $24,500, IRA $7,500, catch-ups | IR-2025-111 | Correct. Also found: 2026 IRA deduction phase-out (single, covered by a plan) $81,000-$91,000; Roth $153,000-$168,000 (see polish P4) |
| SIPC $500,000 incl. $250,000 cash | sipc.org What SIPC Protects; sipc.org Investors with multiple accounts | Correct, but SIPC counts per **separate capacity** (individual, joint, IRA each to $500,000), not per firm (see L1-1) |

## Personalized advice

None. No real security is named; every case is invented; thresholds are marked "a common rule, not a law". On the learner's own numbers
every flagged line is now followed by `workNotAdvice` (verified in the runs). Pass.

## Carried-over structure

None found. The lesson skeleton is the app's lesson standard; the change/leave call rests on W2; the order of saving and its reasons rest on
W24/W46 and are labelled a judgement call.

## Defects that decide the verdict

### L1 Your list: FAIL (1, minor)
1. **Wrong number on own data: SIPC is grouped per firm, not per separate capacity.** `own-work.js:80` (`ownCoverGroups(accounts, 'sipc', ...)`,
   key = firm only). Run: an individual brokerage account of $300,000 and a joint one of $300,000 at one firm print "At Granite: $600,000,
   $100,000 over SIPC's limit". SIPC protects each separate capacity (individual, joint, IRA) up to $500,000 (sipc.org, Investors with multiple
   accounts). The SIPC sub-limit of $250,000 for cash is also never checked ($450,000 of cash at one firm: no line). *Fix:* ask `owner` for
   brokerage accounts too and key SIPC groups by firm + owner; flag cash over $250,000 per group; correct the comment at own-work.js:63.

### L2 Money you need soon: FAIL (1)
1. **The own step contradicts the lesson's way of deciding.** `own-work.js:97-105` subtracts every bill due within five years from the cash,
   wherever the bill's money sits. Typing the worked household (Leo: $18,000-$18,900 in the bank, $4,000-$4,200 a month, $45,000 down payment
   in a stock fund) gives "Left for spending $-27,000", "Months of spending -6.7" and "Short by $39,000 of 3 months of spending". The lesson
   on the same numbers teaches "4.5 months: enough; move the bill's money out of stocks". A negative month count is also a wrong-looking
   number. *Fix:* add "Kept in" (savings / stocks / not saved yet) to the bills group; subtract only bills kept in cash; flag a bill kept in
   stocks with the lesson's move ("move it out of stocks") and one not saved yet as a gap; never print negative months (show 0 and the gap).

### L4 The match and the order: FAIL (1)
1. **Wrong number on own data: a second match step typed the way plans write it is silently dropped.** `own-work.js:114` uses the second step
   only when `upTo2 > upTo`. Plans (and this lesson's own rule rows: "On the next 2% of pay you put in") state the step as "the next 2%". A
   learner who types 2 there gets "Your employer would add at 3%" and "You take the whole match" while leaving $270 a year (run: $54,000 pay,
   4%, 100 cents to 3%, 50 cents on the next 2%). Also `share2` typed with `upTo2` blank is dropped without a word. That is the
   `first-step-only` slip, made by the app. *Fix:* label the field "The second step covers the next ___% of pay" and add it to `upTo`, or
   refuse `upTo2 <= upTo` with a line; refuse a half-filled second step.

### L5 Taxes: FAIL (3)
1. **Guessable answer: in a brokerage account "wait" is always right.** `gen-tax.js:88-91`: gain >= $4,000 at a short rate >= 22% gives
   tax saved >= $280; the dearer fund's cost over the wait is at most about $108. So the taught comparison ("wait when the tax saved is more
   than the dearer fund costs meanwhile") never decides: brokerage = wait, 401(k) = sell, by place alone. W2 (compare against the named
   alternative) is not practised. *Fix:* add a `g-sell-now` variant (small gain, wide fee gap, large value, e.g. gain $300-900, fee gap
   0.8-1.2%, value $60,000-150,000, 2-3 months left) where selling now is right, and put one of each in practice and check.
2. **The wash-sale rule is taught narrower than the law, and its remedy breaks the lesson's own mix rule.** `l5.lesson.js:32` "unless you buy
   the same fund"; `gen-tax.js:147,151,153` "or buy a fund of another kind". Pub 550: "substantially identical stock or securities". And a
   fund of another kind (bonds for stocks, in this subject's vocabulary from L3) changes the mix that L5 says to hold across all accounts;
   practitioners keep the exposure with a similar fund that is not substantially identical (a fund tracking a different index). *Fix:* "the
   same fund, or one nearly identical to it"; remedy "wait past 30 days, or buy a similar fund that follows a different index"; one line in
   the rule that the 30 days also count purchases in your IRA or 401(k) is optional.
3. **Own step gives false reassurance when "What it holds" is blank.** `own-work.js:123-138`: unmarked funds count as neither stocks nor
   bonds, and the work prints "No bonds sit where they are taxed every year ... Nothing to move" (run: Ruth's household typed without kinds).
   The `share` work warns with `workUnmarked`; `placement` does not. *Fix:* add the `workUnmarked` line to `placement` (and to `cash` for brokerage cash).

## Polish (does not decide the verdict)

- P1 (L1) "A 401(k) has neither": usually right for the core funds, but a plan's brokerage window can sit under SIPC. "Usually neither" is safer.
- P2 (L2) "In 1 years" (gen-cash `held` uses soon [1,4]); write "In 1 year". The rule's cash list (bank only) differs from the work's row
  "Bank accounts, and cash in a brokerage account": add brokerage cash to the rule or drop it from the work.
- P3 (L3) The rule implies switching for any cost gap (0.04% vs 0.03%). One clause such as "a gap worth the trouble" would match how planners weigh it; no case is near the edge, so no answer is affected.
- P4 (L4) "Fill an IRA" never says when an IRA is not open: a Roth IRA closes, and a traditional IRA's deduction fades, with income
  (2026: Roth $153,000-$168,000 single; deduction $81,000-$91,000 single with a workplace plan, IR-2025-111). A `ref` beside the IRA rung
  would let "not open to you" be checked.
- P5 (L4) The order ask says "Tap the six steps", which tells how many to leave out. "Tap the steps that apply" removes the cue.
- P6 (L4) Rosa (four months of cash, $2,100 card at 22%) and Carlos (five months, $1,500 at 19%): a planner would clear the card from the cash
  over three months at once. The marked order is still right by the taught rule; a household with cash just at three months would avoid the doubt.
- P7 (L6) `workShareWhere` says "Sell first inside a 401(k) or an IRA" even when the company sits only in a brokerage account; `plan` is
  computed at own-work.js:149 and never used. Use it to print the line only when part of the holding is in a plan.
- P8 (W42) the DOL FAQ URL now returns 404; cite IRS "Retirement topics - Bankruptcy of employer", which says the same.

## Claimed fixes from round 1, verified

All round-1 research defects are fixed as claimed: L1 bank/owner grouping (FDIC part correct in runs: one name + joint, two banks, joint
against $500,000); L2 "loses every year" gone; L3 taxable-switch rule and `workCostTaxable`; L4 order with a starter buffer, rule wording "On
what you put in: up to", vesting/true-up line; L5 sell-now case removed, "In N months", payouts taxed yearly, Ruth's why, Roth/HSA excluded
from the swap; L6 `company` field (grouping verified, case and spaces ignored), where-to-sell ask and NUA caveat; X-1 not-advice line.

## Verdict

| Lesson | Verdict | Deciding defects |
|---|---|---|
| L1 | FAIL | 1 (own-data SIPC number) |
| L2 | FAIL | 1 (own step contradicts the lesson, negative months) |
| L3 | PASS | none (P3 polish) |
| L4 | FAIL | 1 (own-data match number) |
| L5 | FAIL | 3 (guessable sell/wait, wash-sale rule and remedy, false "nothing to move") |
| L6 | PASS | none (P7 polish) |

Counts by kind: wrong facts or numbers 3 (L1-1, L4-1, L5-2 fact part); departures from the way of thinking 3 (L2-1, L5-2 remedy, L5-3);
guessable answers 1 (L5-1); carried-over structure 0; personalized advice 0. Polish 8. Every number in the learner views and every 2026
figure checked is correct.
