# Wealth lessons 1-6: fixes after the round-3 reviews (2026-10-22)

Answers `review-research-l1-6-round3.md` (R) and `review-learner-l1-6-round3.md` (L). Shared-file changes are in `shared-helper-changes.md`.

## Deciding defect
| Defect | Fix |
|---|---|
| R L5-1: a 12% rate on interest paired with 15% on long-term gains | Placement households now draw the top rate from 22% or 24% only (`GAIN_RATES`). At those rates a single filer's taxable income is above $49,450, so 15% is the 2026 long-term rate. 12% stays only in the loss cases, where no long-term gain is taxed. The `gain-rate-wrong` feedback now reads "the long-term rate on the note, 15%, lower than the {rate}% on interest". The 2026 thresholds are cited as W71: Rev. Proc. 2025-32, as read in summaries; 0% up to $49,450 single and $98,900 joint. own-pure asserts the placement rates are {22, 24} and the loss rates are {12, 22, 24}. |

## Polish
| Item | Fix |
|---|---|
| R P1 / L8: the bond gain never decides | The rule and working now say it plainly: a one-time tax under one year's saving always favors the swap. |
| R P2 / L10: wash-sale remedy direction | "Buy more than 30 days before or more than 30 days after the sale". |
| R P3 / L12: the NUA caution reads as contradicting "sell there first" | "One exception: if your employer's stock in the 401(k) has grown a lot... check with a tax preparer before selling it there. Otherwise, sell there first." |
| R P4 / L3: "do both" taught, never practised | Removed from the L2 rule. The own step still flags both. |
| R P5 / L4: no fee line on the statement | The statement has "Administrative fee taken this quarter" (a quarter of the yearly fee; worked example $24.00). |
| R P6 / L6, L13: lenient pass rules | L4 `left` is 3 of 3; L6 `share` is 3 of 3. |
| R P8: placement "Nothing to move" when false | New lines for a 401(k)/IRA of bonds only (`workPlaceNoStocks`) and a mixed fund there (`workPlaceMixed`). Tested. |
| R P9: joint told to use "another kind of ownership" | A joint group over the limit is told "another bank" only. Tested. |
| R P10: a month of 0 | No months worked out and no short or idle call; one line asks for the month. Tested. |
| R P11: a space before the comma in the cost line | Checked `own-view.js`: `<b>…</b>` is followed directly by ", …", with no space in the HTML. The space came from the reviewer's text extraction. No change. |
| R P12: two W50 entries | Mine renumbered to W70 (plan, gen-tax comment); W50 stays the FBAR entry. |
| R P7, P13; L1, L2, L5, L7, L11 | Left as rated (no answer affected). |

## Checks run
- `npm run lock`, then `node tests/validate-lessons.mjs`: 841,870 passed.
- `npm test`: all green, including own-pure (610) and the negative controls (198).
- `E2E_SKIP_FAULTS=1 node tests/e2e.mjs X24 X26 X27 X38 X48 X51`: 370 of 371 passed on the first run. The one failure was X26 counting "Not built yet" parts, which changed when lessons 7-12 landed. After the fix X26 was rerun alone: 104 passed. The other five specs were not rerun.
- Learner views l1-l6 regenerated.
