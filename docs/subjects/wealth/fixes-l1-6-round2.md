# Wealth lessons 1-6: fixes after the round-2 reviews (2026-10-22)

This answers `review-research-l1-6-round2.md` (R) and `review-learner-l1-6-round2.md` (L, by item number). The new source is W50, and W42 now points to the IRS page. Changes to shared engine files are logged in `shared-helper-changes.md`.

## Research defects (verdict-deciding)
| Defect | Fix |
|---|---|
| R L1-1: SIPC grouped per firm; cash limit not checked | Brokerage accounts now ask whose name they are in. SIPC groups by firm and capacity against $500,000, and each group's cash against $250,000 (ref `sipc` now "$500,000; $250,000"). The rule teaches capacities (W50). Tests: individual + joint at one firm are not flagged; two in one capacity are flagged; $450,000 of cash is flagged. |
| R L2-1: the own step contradicts the lesson; negative months | Bills now carry `kept` (bank / stocks / not put aside yet). Only money kept in a bank is put aside. A bill in stocks gets the lesson's move. A bill not put aside yet is flagged and its cash is never called idle. Months are never below 0, and balances that cannot hold the bills are questioned. A pure test types the worked household Leo: 4.5 months and "move it out of stocks", as the lesson says. |
| R L4-1: the second match step silently dropped | The field is now "The second step covers the next __% of pay" (`next`), added to the first step's cap. A new group rule, `together`, refuses a half-filled second step ("Fill this in too, or leave both blank."). The validator checks it. Tests: $54,000 at 4% with 100¢ to 3% and 50¢ on the next 2% gives $270 left; a half-filled step is refused. |
| R L5-1: "wait" always right in a brokerage account | New `g-sell-now`: a small gain on a big fund with a wide fee gap, so waiting costs more than it saves and switching now is right. It is paired with `g-sell-wait` in practice and both are in the check. A test asserts the comparison decides both ways. |
| R L5-2: wash sale too narrow; remedy breaks the mix rule | Now "the same fund, or one nearly the same". The remedy is "wait past 30 days, or buy a similar fund that follows a different index", which keeps the mix (judgement call, W50). |
| R L5-3: "Nothing to move" when funds have no kind | `placement` now says the app cannot tell (`workPlaceUnknown`). `cash` names unmarked brokerage funds. Tested on Ruth's household typed without kinds. |
| R P8: W42 cites a 404 page | Re-pointed to IRS "Retirement topics - Bankruptcy of employer". |

## Polish and learner fix-first items
| Item | Fix |
|---|---|
| L15 (M): the 3-month wait unexplained | Rule: more than a year means a year and a day, so count to month 13. The working says so. |
| L16 (M): no cost-of-waiting formula, no feedback | The formula is in the rule. The `extra` ask has traps for a whole year of the gap (`year-not-months`) and the gap on the gain (`gain-as-base`). |
| L17 (M): "check the bond gain first" never used | Swap households show the bonds' gain (held over a year). A new `gainTax` ask (slip `gain-rate-wrong`) compares the one-time tax with the yearly saving. Worked example: $180 × 15% = $27. |
| L18, L19 | The rule says the swap saves most of the tax, not all, and that a loss first cuts gains, then up to $3,000. |
| L8 (M): fee-sheet footnote | "It is shown here, and on your quarterly statement"; the rule says the same. |
| L10 / R P5: step count in the order prompt | Engine change: an order ask with a step that belongs in no order no longer shows the count. The learner taps steps and presses Answer (`orderOpen`, `SAY.orderHintOpen`). X38, its control, pressure-pure and the learner view are updated. |
| L4 / R P2: "In 1 years"; cash list | `{yearsText}` gives "1 year"; brokerage cash is added to the rule's list of cash; the working line is reworded; a clause covers short cash plus a bill in stocks. |
| L1, L2 / R P1 | The joint account is covered for each owner; "a trust, a pot held for you"; "usually neither". |
| L11 | "A credit card at a high rate, far above what savings pay." |
| L24 / R P7 | L6 rule: the sale's money stays on the list. `workShareWhere` prints only when the company sits partly in a plan; otherwise `workShareTaxed`. |
| R P3, P4, P6; L6, L13, L14, L20-23, L25 | Left as the reviewers rated them (no answer affected). P4 (IRA income limits) is noted for lesson 12's yearly check. |

## Checks run
- `node tests/validate-lessons.mjs` after `npm run lock`: the only failures are 4 V47 lines for the other builder's in-progress L7 files (`l7.lesson.js` and `gen-mix.js` are not yet in `index.html` / `sw.js`).
- `own-pure`: every Wealth L1-6 check passes. The suite currently stops at the other builder's `rate` work (`unknown ref safeRate`), and its "works built" list is theirs to update.
- `pressure-pure`: 515 passed; the other pure tiers pass.
- `E2E_SKIP_FAULTS=1 node tests/e2e.mjs X24 X26 X27 X38 X48 X51`: 371 passed.
- Negative controls cannot run green until V47 is clear.
- Learner views l1-l6 regenerated.
