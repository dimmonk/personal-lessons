# Wealth lessons 1-6: fixes after the first reviews (2026-10-22)

Answers `review-learner-l1-6.md` (L = learner, by lesson and number) and `review-research-l1-6.md` (R). New sources are W41-W49 in
`docs/research/wealth.md`; the plan's lessons 1-6 are rewritten to match (lessons 7-12 unchanged).

## Across lessons
| Defect | Fix |
|---|---|
| R X-1 dollar moves on own data read as advice | `ownWork` adds `SAY.workNotAdvice` ("This applies the rule's line to your numbers; it is not advice...") after any flagged line, in every work. |
| L "Change it" is only a label | Each rule now says what the change is: L1 move the part over to another bank or kind of ownership (and a `fix` ask), L2 the three moves, L3 switch to the cheaper same-kind fund, L4 raise the rate, L5 the swap / wait / move the purchase, L6 sell down and where first. |
| Generator ranges of three numbers (coordinator note) | `taxRate: [12, 22, 24]` (always 12%) and `share: [25, 50, 100]` (always 25 cents) were ranges; now drawn by index. own-pure checks every 3-number range of Wealth draws more than one value. |
| R L1 minor: "written to this phone only" vs "saved with your sign-in" | Learner-view renderer now says kept in the learner's account with their sign-in, a copy on this phone, shared with no one. |
| Sheet asked for what a step does not need (L1-4, L2-5) | A fund's yearly cost is optional (blank adds nothing, named by the cost work); sheet intro says so. |

## L1 Your list
| Defect | Fix |
|---|---|
| L1-1 remedy never taught | Rule: move the part over to another bank or kind of ownership; new `fix` ask (another bank / same bank, same name: `per-account-limit` / a stock fund: `fix-into-stocks`). |
| L1-2 401(k) cover unexplained | Rule and a `planGuard` field: neither; held in trust apart from the employer, papers say "Not FDIC insured" (W42, W41). |
| L1-3 kind of ownership | Rule explains; new look-alike `g-list-joint` (one name + joint, each under its limit: leave, slip `owners-added`). |
| L1-4 / R L1-1 sheet has no bank/owner; app checked each account alone | Sheet fields `institution` (bank, brokerage) and `owner` (bank: me / joint with one other / another way). `ownWorkList` adds bank accounts by bank and ownership (joint against twice the limit), brokerage by firm against SIPC; other ownership and unmarked accounts get a line. Tested, and checked against every L1 household's call. |
| L1-5 pattern (one bank, Nobody never right) | New `g-list-banks` (two banks, together over the limit: leave, slip `banks-added`); the check is one over, two look-alikes; "Nobody" is right for the fall event and "Neither" for the 401(k). |
| L1-6 jargon | Brokerage firm and holdings glossed; where "Member FDIC" / "Member SIPC" / "Not FDIC insured" print (12 CFR 328.6, W41). |

## L2 Money you need soon
| Defect | Fix |
|---|---|
| L2-1 bill money vs months | Rule: put the bill's money aside first, count months on the rest. New `g-cash-held` (bill soon already in savings: leave; counting it is the slip `bill-counted`). Own work puts bills due soon aside before the months. |
| L2-2 what counts as cash / a usual month | Rule: checking, savings, money market at a bank, not stocks or a 401(k); a yearly bill as a twelfth (sheet `how` too). |
| L2-3 edge cases | "five years or less"; "three to six: enough"; "invest the rest for the long run"; bill already in cash covered. |
| L2-4 pattern (bill always in "Index 500") | Bills sit in a stock fund or in their own savings; the held look-alike makes the "Kept in" column decide. |
| L2-5 cash you can reach | Defined in the rule and the work's row ("Bank accounts, and cash in a brokerage account"). |
| L2-6 / R L2-1 "loses every year" | Replaced: cash usually earns less than stocks over the long run, inflation is its risk (SEC, W43) in lesson, generator and `workCashIdle`. |
| L2-7 exact 3.0 / 6.0 | "Three to six months: enough." |
| R notes: past-year bills counted | `ownWorkCash` counts bills from this year to the limit; a past year is left out and named. |

## L3 What it costs
| Defect | Fix |
|---|---|
| L3-1 name decides | Plain made-up names per kind, which one is cheap drawn per seed; the costly fund held is either the stock or the bond fund. No "Index" in any Wealth name. |
| L3-2 "within 10%" | `tol: { abs: 1 }`, pass rule "to within a dollar". |
| L3-3 / R L3-1 switching free in a taxable account | Rule: not taxed inside a 401(k)/IRA, taxed at a gain in a brokerage account; worked step says so; the cost work adds `workCostTaxable` when a brokerage account holds funds. |
| L3-4 real-document words | Fee sheet column "Expense ratio", row "Administrative fee", notes say where each prints (DOL, W44). |
| L3-5 check near copies | Random names and costly-fund side make check items differ. |

## L4 The match and the order
| Defect | Fix |
|---|---|
| L4-1 tiered matches, vesting | Rule teaches both; new `g-match-steps` (IRS safe-harbor 100% of 3% + 50% of next 2%, slip `first-step-only`); vesting row on every match rule; sheet takes a second step (`share2`, `upTo2`) and the work counts it; `workMatchVest` line (vesting, true-up; W45). |
| L4-2 stub in dollars | Stubs show dollars per paycheck; new `mine` ask (slip `dollars-as-rate`); rule says the match rule is in the plan's summary; sheet `how` gives the conversion. |
| L4-3 why each rung | One reason each (HSA's three tax breaks, IRA's own fund choice as a judgement call, more 401(k), brokerage last). |
| L4-4 / R L4-1 order arguable | Order now: about a month of cash, match, card, cash to three months, HSA, IRA, more 401(k), brokerage; marked "versions differ" (W46). Households re-chosen so the taught order gives one answer (Mei: match, card, then cash). |
| L4-5 "the one that does not apply" | Prompt and rule: leave out what is done, owes nothing, or is not open; several steps may be left out. |
| L4-6 limits unused | "Fill" defined as up to the yearly limit shown. |
| R L4-2 ambiguous rule wording | Rows read "On what you put in: up to N% of your pay". |
| R L4-3 vesting / true-up | Own-step line `workMatchVest`. |

## L5 Taxes
| Defect | Fix |
|---|---|
| L5-1 own step gives nothing to act on | Sheet group `tax` (top bracket, last year's bond payouts; asked by the placement step); work prints the tax on those payouts; `workPlaceGains` says where to read cost basis and the day bought. Sell/wait and loss stay rules for the moment of a sale (step narrowed, said so in the plan). |
| L5-2 swap sells bonds, 401(k) too small, Roth, $211.20 overstated | Rule and working: selling the bonds is a sale, check its gain; swap "up to" the stocks there; ask is "tax paid on that payout now" and the reason says the swap saves most of it (dividends move the other way); Roth/HSA not counted (`workPlaceFree`). |
| L5-3 "wash sale" not named | Named in rule and feedback; loss added to the new shares' cost; Form 1099-B line (W48). |
| L5-4 / R L5-1 sell-now arguable | Over-a-year case removed. Wait case shows value and both expense ratios: tax saved vs what waiting costs (new `extra` ask); look-alike `g-sell-plan` inside a 401(k): switch now (slip `waited-in-plan`). Rule mentions keeping a big gain and putting new money in the cheaper fund (owner's "delay the tax"). |
| L5-5 placement pattern | New `g-place-full` (bonds in the brokerage, 401(k) all bonds: leave, slip `swapped-nothing`); the ask is now "is there a swap that keeps the mix?". |
| L5-6 wording | "Buy Globe Select Fund, N days before the sale". |
| R L5-2 "a few weeks" | "In N months"; slip text "a month or two short of a year". |
| R L5-3 "taxed only when you sell" | Own gain taxed on sale; payouts (interest, dividends, capital gain distributions) taxed every year in a brokerage account (Pub 550, W47). |
| R L5-4 Ruth's why | "Ruth's bonds sit in her brokerage account and her 401(k) holds only stocks." |
| R L5-5 Roth/HSA as swap candidates | Placement counts deferred accounts only. |

## L6 Biggest single bet
| Defect | Fix |
|---|---|
| L6-1 "everything" | Rule: the total of all your accounts, the whole list, not your home. |
| L6-2 / R L6-2 where to sell | Rule, new `from` ask (401(k) first; brokerage shares slip `sold-taxed-first`; the broad fund slip `fund-as-one-bet`), NUA caveat (W49); own work `workShareWhere` and the sell-down amount. |
| L6-3 two feedbacks for one number | Split 25-30% or 70-75%, so one account alone is never within a point of the other or the whole (tested on all three generators). |
| L6-4 "Index 500" unlabelled, "thousands" | Funds labelled "(500 companies)", "(about 3,500 companies)"; rule says hundreds or thousands. |
| L6-5 / R L6-1 grouping by exact name | Fund field `company`; the work groups by it (case and spaces ignored), a one-company holding without it stands for itself and is named. |
| L6-6 pattern | Cases near the line (12-30% over, 5-9% under). |

## Checks run
`node tests/validate-lessons.mjs`, `npm run lock`, validate again, `npm test` (all green; a new V70 control for a work's fund fields),
`E2E_SKIP_FAULTS=1 node tests/e2e.mjs X24 X26 X27 X48 X51` (350 passed), learner views l1-l6 regenerated.
