# Wealth: changes to shared helpers (2026-10-22)

Two builders work in this clone at once: the L1-6 fixer and the L7-12 builder. Each logs here what it changed in a file the other
also touches, so neither undoes the other. L1-6 behavior must stay identical after any L7-12 change.

## L7-12 builder

- `public/app/lessons/own-work.js`: the four works of lessons 7-11 (`ownWorkDrift`, `ownWorkCover`, `ownWorkForeign`, `ownWorkRate`) are
  moved out to the new file `public/app/lessons/own-work-later.js` (loaded just before own-work.js in index.html, sw.js and
  tests/lessons/load.mjs), with the new works `heirs` (lesson 10) and `yearly` (lesson 12). `OWN_WORKS` is now
  `OWN_WORKS_EACH = { cost, list, cash, match, placement, share, ...OWN_WORKS_LATER }` and `OWN_WORKS = { ...OWN_WORKS_EACH, yearly }`.
  The L1-6 works and their entries are untouched (edit them freely; `yearly` reads their needs/reads at load, so a change there flows in).
  The header comment's list of works is updated.
- `rate` no longer reads the sheet limit `rateHigh` (4%, above the study's figure); it reads the dated ref `safeRate` (3.9% for 2026).
  `rateHigh` is removed from the sheet's `limits` in subject.js.
- `cover` leaves a 401(k) out of what a claim could reach (ERISA anti-alienation, research W54), as the round-1 research review noted.

## Lessons 1-6, round 2 (2026-10-22)

Shared engine changes made while fixing the round-2 reviews of lessons 1-6 (`fixes-l1-6-round2.md`).

- `own-work.js`
  - `ownCoverGroups(accounts, guard)` now returns every group `{ first, owner, balance, cash }`, keyed by bank or firm and owner. It no longer takes a limit function or filters. `ownWorkList` applies FDIC (one name; joint ×2) and SIPC per capacity ($500,000, and $250,000 of cash: the second number of ref `sipc`, now "$500,000; $250,000").
  - `ownWorkCash` reads `bills[].kept` (`cash`, `stocks`, `none`). Only bills kept in a bank are put aside. A bill in stocks or not put aside yet is flagged. Months are never below 0. Unmarked brokerage funds are named.
  - `ownWorkMatch` reads `next` (the second step covers the next N% of pay) in place of `upTo2`.
  - `ownWorkPlacement` says `workPlaceUnknown`, not "Nothing to move", when a fund has no kind.
  - `ownWorkShare` prints `workShareWhere` only when the company sits partly in a plan, and `workShareTaxed` when it sits only in a brokerage account.
- `own.js`: a sheet group may carry `together: [[fieldId]]`, optional fields filled all or none (`SAY.ownTogether`). The validator checks them (`rules-shape.mjs`, `shapes.mjs`).
- `view.js` SAY
  - Added: `workOverSipcCash`, `workCashBillStocks`, `workCashBillNone`, `workCashOverBills`, `workCashKeptUnknown`, `workPlaceUnknown`, `workShareTaxed`, `ownTogether`, `orderHintOpen`.
  - Changed: `workOverSipc` takes the owner; `workBillsHead` has a fourth column; `workListUnmarked` and `workListOther` cover firms too.
  - Removed: `workBillsSoon`, `workCashBills`.
- `order.js`, `order-run.js`, `order-view.js`: an order ask whose steps include one that belongs in no order no longer says how many to tap. The learner taps the steps and presses Answer (`orderOpen`). X38 and its control are updated.
- Subject record (`subject.js`)
  - Lists: `billKept`.
  - Sheet fields: brokerage accounts get `owner`; bills get `kept`; the match field `upTo2` becomes `next`, with `together`.
  - Slips: `gain-rate-wrong`, `waited-costly`, `year-not-months`, `gain-as-base`.
  - Ref `sipc`: new value and text.

## Lessons 1-6, round 3 (2026-10-22)

- `own-work.js`:
  - `ownWorkList`: a joint group over the FDIC limit gets `workListFixBank` (another bank only).
  - `ownWorkCash`: a month typed as 0 gives `workCashNoMonth` and no short or idle call.
  - `ownWorkPlacement`: bonds taxed with a 401(k)/IRA of bonds only gives `workPlaceNoStocks`; with a mixed (target) fund there, `workPlaceMixed`. "Nothing to move" is said only when true.
- `view.js` SAY: added `workListFixBank`, `workCashNoMonth`, `workPlaceNoStocks`, `workPlaceMixed`.
- `tests/e2e-wealth.mjs` (X26): the count of "Not built yet" parts is read from the subject, so lessons 7-12 landing do not break it.
- Research note: my SIPC/wash-sale entry is renumbered W70 (W50 is the FBAR entry); W71 added for the 2026 capital-gain thresholds.
- Later in the same build (L7-12):
  - `own-work-later.js`: a work may return `open: true` when the sheet lacks what it needs (drift with no marked fund, cover with no
    limits, rate with no invested account); `yearly` shows such a part as "not settled", also when an L1-6 work prints `workUnmarked`,
    `workPlaceUnknown`, `workListUnmarked`, `workCashKeptUnknown` or `workCostUntyped` (it reads those SAY strings: keep their names, or
    tell the L7-12 side). `cost` and `heirs` show "check by hand" unless they flag.
  - `view.js` SAY: drift/cover/foreign/rate strings rewritten (`workDriftUnder` now takes (band, points); `workDriftAside`,
    `workCoverOwned` removed); added `workDriftWhere/None/Target/Other/Bank`, `workCover*` (Accounts, Shielded, Other, Reach, Umbrella,
    Pays, Ways, NoLimits, Two, Plan, Ira, OtherMissing), `workForeignNoHighest`, `workHeirs*`, `workRateNext/Bank/NoIncome/NoPot`,
    `workYear*`, `workTitle/workHow` for heirs and yearly, `ownActionHowYear`, `ownEveryYear`. FBAR/8938/PFIC lines use the IRS names.
  - Own step `repeat: 'year'` (L12): `own.js` `ownActionFromDraft(..., repeat)`, `own-run.js` passes `OWN.step.repeat` and shows
    `ownActionHowYear`, `own-view.js` row shows "every year"; `shapes.mjs` STEPS.own takes `repeat`; `rules-shape.mjs` refuses any
    beat but 'year' or a non-sheet step (control added).
  - `rules-shape.mjs` support check: a set with `leave` where an asked ask's `when` names an ask the help gives is refused (that ask
    could never open; found on L7's first draft). Control added on till `t-leave`. No L1-6 lesson trips it.
  - `tests/own-pure.mjs`: the drift/cover/foreign/rate tests moved to the new `tests/own-later-pure.mjs` (in `test:data`); the works
    list now ends `heirs, rate, yearly`.
  - `docs/lesson-standard.md`: 3.3 (repeat), 5.3 (limits), 5.4 (works list), 10.3 (Wealth complete), a dated entry in 11.

## L7-12 after their first reviews (2026-10-22; the only agent in the clone)

- `own-work.js` `ownReachableCash`: an account outside the US with no funds in it (a bank account abroad) now counts as cash, as lesson 2's
  rule says (checking and savings at a bank). `SAY.workCashReach` says "(in the US or abroad)". L1-6 sheets without such an account are unchanged.
- `own-work-later.js`: `drift` is `open` with no move when a fund is unmarked or a target-date fund sits beside other funds; a target-date
  fund alone is "nothing to rebalance"; the trade line says a brokerage sale may be taxed when no 401(k)/IRA is held. `cover` uses the lower of
  the car and home limits, floors the reach at 0, prints a negative home as a minus, says the IRA and home are counted to be safe. `rate`
  adds the sheet's `retire.tax` (new optional field) and compares the unrounded rate. `heirs`: a foreign bank account goes by the will or a
  joint owner; an RRSP/TFSA by its page where the province allows one.
- `view.js` SAY: added `workDriftWhereTaxed/Open/TargetOnly/TargetBeside`, `workCoverHome`, `workRateTax/NoTax`; changed `workDriftTarget`
  (removed), `workCoverIra`, `workCoverTwo`, `workHeirsBy`, `workForeignRrsp` (federal), `workForeignFunds`, `workCashReach`.
- Subject record: lists `todo`, `fixPage` (replaces `heirPage`); slips `wrong-policy`, `tax-left-out`; ref texts `safeRate`, `form8938`;
  `retire` group field `tax`.
