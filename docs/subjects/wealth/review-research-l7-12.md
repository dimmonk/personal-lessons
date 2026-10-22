# Wealth, lessons 7 to 12: research review (build-subject step 6, 2026-10-22)

Role "research". Read: `public/subjects/wealth/l7`-`l12.lesson.js`, `gen-mix`, `gen-cover`, `gen-foreign`, `gen-heirs`, `gen-rate`, `gen-year`,
`subject.js` refs, `public/app/lessons/own-work-later.js` (+ the SAY lines in `view.js`), the `repeat: 'year'` path (`own.js`, `own-run.js`,
`tests/lessons/rules-shape.mjs:325`), the learner views for l10-l12, `plan.md`, `docs/research/wealth.md` (W13-W33, W50-W61, W70-W71).
Every later work run over 27 hand-built sheets (`scratchpad/rr7/later.mjs`); the L12 cash line simulated over its parameter ranges
(`scratchpad/rr7/cash.mjs`, 200,000 draws). Nothing here is personalized advice.

## Checked against the source, and right

| Claim | Where | Source checked today |
|---|---|---|
| FBAR: over $10,000 aggregate at any time; FinCEN Form 114, BSA E-Filing, not with the return; April 15, automatic to October 15 | l9.lesson.js:18, refs `fbar` | fincen.gov "Report Foreign Bank and Financial Accounts" (quote matches W50); IRS FBAR page per W31 |
| Form 8938 lines $50k/$75k single, $100k/$150k joint, living in the US; RRSP counts in both totals | l9:19, refs `form8938`, gen-foreign | IRS comparison page (W31), Rev. Proc. 2014-55 s.5.01/s.7 (W51) |
| TFSA: kept as non-resident, not taxed in Canada, may be taxed where you live, 1% a month on non-resident contributions | l9:27 | canada.ca TFSA non-resident page: all four sentences match W52 verbatim |
| Estate tax filing threshold $15,000,000 for 2026 ($13,990,000 for 2025) | refs `estateTax`, gen-heirs | irs.gov "Estate Tax": both figures verbatim |
| Gift annual exclusion $19,000 for 2025 and 2026 | refs `gift` | irs.gov gift tax FAQ: both years $19,000 |
| Spending rate 3.9% for someone retiring in 2026, 30 years, 90% | refs `safeRate`, l11 | Morningstar's own page titles ("The State of Retirement Income for 2026", "What's a Safe Retirement Withdrawal Rate for 2026?") and Kiplinger/Boldin summaries: 3.9%, US, December 2025. (4.1% is Morningstar's UK figure, not a US update.) |
| LLC: sole owner personally liable; LLC protects "in most instances" | l8:20, W55 | sba.gov: both quotes verbatim |
| Margin: the firm can sell without contacting you; you cannot choose what is sold | l8:21, W56 | finra.org Rule 2264: both quotes verbatim |
| RRSP growth deferred automatically, no Form 8891; a Canadian fund outside an RRSP usually a PFIC | l9:26-28 | Rev. Proc. 2014-55 and Form 8621 instructions as quoted in W32/W33 (not refetched); a fund inside an RRSP correctly raises no PFIC flag (own work, run) |
| Rebalance at a 5-point band, checked yearly; a convention, not optimal | l7:19 | W15 (Vanguard 2010), said in the lesson |
| `repeat: 'year'`: RRULE:FREQ=YEARLY in the .ics, validator refuses it off a sheet step | own.js:198, rules-shape.mjs:325, lesson-standard 731-738 | read; correct |

No structure looks carried over from another subject: each lesson's decision rule is W61's, written from this note.

## Defects that decide the verdict

1. **L10, wrong fact and a wrong/arguable marked answer: "who would get it" after a divorce and a remarriage.**
   `l10.lesson.js:11-12` ("If Maya died today, Chris would get the 401(k)"), `gen-heirs.js:51-53` and `:108-113` (the `will` ask, marked
   "{ex}, the person on the page"), and every `g-heirs-ex` household (married ex, divorced, **married the new spouse two years later**).
   - For a **401(k)**: federal law gives a current spouse the account unless that spouse signed a notarized or plan-witnessed waiver
     (IRC 401(a)(11)(B)(iii), 417(a)(2); ERISA 205). Sam/Alex, married 4+ years, signed nothing, so Sam, not Chris, has the stronger claim
     in most plans. *Egelhoff* and *Kennedy* (W29) had no second spouse; the note never read the spousal-consent rule.
   - For an **IRA or individual life policy** (the generator puts the ex on either, `pageAt` 0-2): about half the states revoke an
     ex-spouse's designation on divorce by statute (Uniform Probate Code 2-804), upheld for a non-ERISA policy in *Sveen v. Melin* (2018).
     There the ex is treated as having died first and the backup takes it.
   So the marked answer is wrong or arguable in all three positions, and the slip `will-trusted` punishes a defensible answer.
   *Fix:* keep the action (fix the page; it is right everywhere) and drop the "who would get it" question, or make the ex's household
   **not remarried** (the will leaves everything to a sibling or child) and confine the question to a 401(k) or employer life insurance.
   Reword the why: "the plan may pay Chris, or a court may have to sort it out; the page decides first, not the will". Add W-entries for
   the spousal-consent rule and the revocation-on-divorce statutes.

2. **L8, wrong fact: "What a claim could reach: every account but a 401(k)".** `l8.lesson.js:32`, `gen-cover.js` header and step text
   (`:120`). An IRA is shielded in bankruptcy by federal law (11 U.S.C. 522(b)(3)(C) and (n), about $1.7 million for contributory IRAs,
   rollovers without a cap) and by many states outside bankruptcy; many states also shield part of a home (homestead). The app's own work
   already says "An IRA is counted: how far it is shielded from a lawsuit depends on your state" (`view.js:354`), so the lesson and the
   work disagree. No item's answer changes (the generators have no IRA). *Fix:* "a 401(k) is shielded by federal law; an IRA, and part of
   a home, may be shielded by your state; the check counts them, to be safe". W54 already flags the IRA as a judgement call.

3. **L12, arguable answer on the cash line: Canadian bank accounts are cash by lesson 2's own rule, and the line leaves them out.**
   `gen-year.js:32, 39-40, 60`. Lesson 2 (`l2.lesson.js:18`) defines cash as "checking, savings ... at a bank"; the L12 household shows a
   Canadian checking and savings account, and the cash line counts only the US "Bank savings". Simulated over the generator's ranges:
   **64%** of households marked "cash: change it" reach three months once the Canadian accounts are counted (100% when the foreign line is
   also flagged), and **68%** of households marked "leave it" pass six months, which lesson 2 calls "invest the rest". A learner applying
   lesson 2 exactly is marked wrong (`missed-flag` / `changed-sound`, and the pass rule allows no `changed-sound`). The own work agrees with
   the generator (`ownReachableCash` skips accounts abroad, own-work.js:97), so the rule exists; the lessons never state it.
   *Fix:* state it where the rule lives ("cash is a US bank account; money abroad is counted in lesson 9, not here") in L2 and L12, and
   label the L12 tab "Bank savings (US)"; or count the Canadian accounts in the cash line and redraw the ranges.

4. **L12, departure from the plan's test.** Plan "The test" (plan.md:15-20) asks for yearly cost per account, the largest holding and split
   in numbers, the match shortfall, months of cash, and flags for: switch, sell down, rebalance, raise the rate, buffer short, ruinous loss,
   foreign filing, **PFIC/TFSA**, beneficiary missing or stale, **papers missing**, **spending rate high**. `g-year` has eight change/leave
   lines and no numbers; placement (L5, "tax in the wrong place", in the end result), PFIC/TFSA, Form 8938, papers, idle cash, a bill held
   in stocks and the spending rate never appear; the check's extra items (`l12.lesson.js:33-34`) add numbers for cost, share, mix, match and
   cash only. The prose (`l12:19-21`) summarises lesson 2 as "under three months" alone, dropping its bills and over-six branches, while the
   own yearly work (`own-work-later.js:106`) runs placement and the rate. *Fix:* either add the missing lines (placement, a TFSA or
   Canadian fund flag, papers, bills) to `g-year` and the prose, with one number ask per line the plan names, or amend the plan's test
   with a recorded reason; make the prose's eight lines match the yearly work's eleven parts.

5. **L11, departure from how the field computes the rate: tax on withdrawals is left out.** `gen-rate.js:22, 33-35`, `l11:18`,
   `own-work-later.js:88`. Morningstar's 3.9% (W57) and Bengen's 4% (W28) are gross withdrawals; every dollar out of a 401(k) or IRA is
   taxed (W38), and the households hold mostly 401(k) and IRA money. "What Ruth spends" reads as spending, so the draw needed is larger;
   a `g-rate-low` household at 3.4% needs only a ~13% tax on its draw to pass 3.9%, so "leave it" is arguable. *Fix:* label the line
   "What {who} spends, tax on withdrawals included" and say so in the rule (one clause), and the own sheet's spending field likewise.

6. **Own work `drift` (lesson 7), wrong answer on a common sheet: a target-date fund is left out and the rest is called drifted.**
   Run: a 401(k) of $100,000 in a target-date fund and a brokerage fund of $50,000 in stocks, mix chosen 65% → "35 points off ... Moving
   about $17,500 from stocks to bonds". The target fund holds the bonds; the household is near its mix. `own-work-later.js:17-26`.
   *Fix:* when a target-date fund sits beside other funds, say the split cannot be settled without the fund's own split (mark the work
   `open`, or ask for its stock share), and never flag a move.

7. **Own work `drift`, a flag on incomplete data.** Run: a stock fund with no "What it holds" → "60 points off ... Moving about $12,000
   from bonds to stocks", plus "Some funds have no 'What it holds'". The yearly work then shows "Look at it", not "Not settled", because a
   flag wins (`own-work-later.js:113`). The file's own header promises to say nothing settled unless the typed data shows it.
   *Fix:* any unmarked fund in the invested accounts makes the work `open` with no move printed.

8. **Own work `heirs`, wrong fact: an "Other account outside the US" is "decided by its beneficiary page, under Canada's rules".**
   `own-work-later.js:73` (`foreign: 'abroad'`), `view.js:370`. A Canadian chequing or non-registered account has no beneficiary
   designation; it passes by the will (or to a joint owner). Only registered plans (RRSP, RRIF, TFSA) take one, and not in Quebec (except
   through an insurance contract); "Other account outside the US" need not be in Canada at all. *Fix:* `foreign` → "Your will, or a
   joint owner, under that country's rules"; RRSP/TFSA → "Its beneficiary page, where that province allows one".

## Polish (does not decide the verdict)

1. `drift` prints "Make the trade inside a 401(k) or an IRA" when the sheet has neither (run: brokerage-only sheet); say "in an account
   where a sale is not taxed, if you have one; in a brokerage account a sale may owe tax (lesson 5)".
2. `cover` prints "$-50,000" and a negative reach for an underwater home; floor the reach at 0 and format negatives.
3. `g-mix-fall` (`gen-mix.js:17`): a news fall of 15-30% beside a share 7-12 points under a 60-80% mix; from a mix on target that needs
   a 25-47% fall. Raise `fell` or say the household was already under before the fall.
4. `g-mix-fall` option "Buy more ... with the bank savings" is marked `bank-in-mix`; new money is a standard way to rebalance (W15's
   source names cash flows). Feedback: "the savings are the buffer; only money beyond it could go here".
5. L8 folds the matrix's "reduce" (loss control) into "take on less"; the plan names four answers (plan.md:86). Name it once.
6. L9 / `workForeignRrsp`: the RRSP deferral is federal; some states (California) do not follow the treaty. Add "federal".
7. Plan line 99-100 gives lesson 9 a trigger "before the first US tax year"; `l9.lesson.js` has none (lesson 4 has `job`, lesson 11 `retire`).
8. The `safeRate` text "lasted 30 years in 90 of 100 tries in the research" reads as history; Morningstar's figure is forward-looking
   simulations for a balanced mix. "would last 30 years in 90 of 100 simulated futures". Also the own `rate` work rounds 3.94% to 3.9% and
   calls it "at or under" (run); compare unrounded.
9. L10 prose and `g-papers-large`: "an estate lawyer who works on both sides of the border" for an estate with nothing abroad; say "an
   estate lawyer (one who works on both sides of the border if anything is in Canada or the spouse is not a citizen)".
10. `repeat: 'year'` puts every change saved in the L12 step on a yearly calendar repeat, including one-off fixes (a beneficiary page, a
   sell-down). Only the next check needs to repeat; let the learner mark which, or repeat only the action whose "what" is the yearly check.

## Verdict

| Lesson | Verdict | Deciding defects |
|---|---|---|
| L7 Mix and drift | FAIL (own work only) | 6, 7 |
| L8 A loss you could not pay | FAIL | 2 |
| L9 Foreign holdings | PASS | none (polish 6, 7) |
| L10 Who inherits | FAIL | 1, 8 |
| L11 The spending rate | FAIL | 5 |
| L12 The whole check | FAIL | 3, 4 |

Counts of deciding defects: wrong fact 3 (1, 2, 8); wrong or arguable marked answer 3 (1, 3, 5; 1 counted in both); departure from the
plan or the field's way of thinking 2 (4, 5); wrong answer from the app's own work 2 (6, 7); carried-over structure 0. Polish 10.
