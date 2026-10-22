# Wealth lessons 7-12: fixes after the first reviews (2026-10-22)

Answers `review-research-l7-12.md` (R) and `review-learner-l7-12.md` (L). New sources W62-W65 in `docs/research/wealth.md`.

| Lesson | Defect | Fix |
|---|---|---|
| L7 | R6 a target-date fund beside others gave a false move; R7 an unmarked fund gave a move | `drift` is `open` (not settled), no move, in both; a target-date fund alone is "nothing to rebalance". Tested. |
| L7 | R polish 1, 3, 4; L 1, 3 | Trade line names the tax when no 401(k)/IRA; fall news 25-40% so the drift is plausible; bank-savings feedback; "1 point"; one-decimal shares; target-date fund explained in the rule. |
| L8 | R2 "every account but a 401(k)" wrong for IRA/home | Rule: a 401(k) is shielded by federal law (W54); an IRA in bankruptcy up to a federal cap and a home by state rules, both counted to be safe (W64); the work says the same. |
| L8 | L1 story type decided keep/pass/avoid | The same eight stories come small (1-8% of savings: keep) and large (pass if insurable, avoid if not); "about a tenth of savings" stated as a rule of thumb; tested that every large story also comes small. |
| L8 | L2 car and home limits always equal | Limits differ (one twice the other); the claim's story names the policy; new look-alike `g-cover-which` and trap `wrong-policy`; the own work uses the lower limit and says why. LLC spelled out, "reduce" named, the yardstick sentence added. |
| L9 | L1 Dec-31 and highest totals always on one side | Form 8938 drawn in four cases (neither, December 31 only, highest only, both), each a tenth or more from its line; tested all four occur. |
| L9 | L2 8938 lines hard to read; L3, L4, R polish 6 | A table of the four lines on the rule screen and plainer ref text; "Book a preparer" / "Nothing is due" in place of change/leave; FinCEN glossed; PFIC consequence said; RRSP deferral "federal". |
| L10 | R1 "Chris would get it" wrong/arguable (ERISA spousal rights, revocation-on-divorce statutes, Sveen v. Melin) | No item asks who would get the money. The rule: the page decides first, exceptions exist (W62, W63), fix the page. The ex item asks whether the will takes care of it (one answer in every state: no). |
| L10 | L1 odd-one-out page | A form: each page fix or leave; one, two or three pages faulty, of any fault type; tested. |
| L10 | L2 pass bar; L3, L4 | Check covers all four faults and three paper questions; "missing" needs 3 of 3, pages 4 of 5; blank page, "estate", calendar day explained. |
| L10 | R8 foreign account "beneficiary page under Canada's rules" | Foreign bank account: the will or a joint owner; RRSP/TFSA: its page where the province allows one. |
| L11 | R5 tax on withdrawals left out | Items show the tax on withdrawals; draw = spending + tax − income (W65); trap `tax-left-out`; sheet field `retire.tax`; the work says when it is missing and compares unrounded (polish 8); "plain rule" defined; ref text says simulated futures. |
| L12 | R3 cash line vs L2 | Canada holds an RRSP and a TFSA (not bank cash); the tab reads "Bank savings (US)"; the cash work now counts a bank account abroad as cash, as L2's rule says. Cash flags short or idle. |
| L12 | R4 plan's lines missing; L1, L2 | Ten lines: added where the bonds sit, a TFSA flag, papers; the full cash rule and the 10% denominator in Step 1; the check adds placement, a TFSA, a missing paper and a spending rate item. |

Not done (polish): a repeat only on the yearly-check action (every change saved in the L12 step repeats); L9 waiting for a "first US tax
year" moment (the app has no such moment); an L7 item where the over-weight side sits only in a brokerage account.

## Checks run
Validate, lock, validate: 845,244 pass. `npm test` green (own-later-pure 66, own-pure 663, 199 seeded faults). X24 X26 X27 X48 X51:
350 passed. Walk of l7-l12 answering right at 344 dark/light, 752 dark, 1200 light: every check passed, no overflow, cut text or banned
words. Learner views l7-l12 regenerated.

## After the final review (review-final.md)
- L8: liability stories (crash, guest fall, tenant injury) are only ever "pass it on"; small "keep" items draw only bounded losses (a kitchen
  repair, one's own car, a loan, a co-signature, a stake). Step 1 says a claim from hurting someone has no top. Tested over 2,000 seeds.
- Polish: the rate work prints two decimals when a tenth would equal the line; a joint bank account "usually the other owner"; L5's loss
  working names the loss against the $3,000 limit.
- Every Wealth lesson set `live`; X26 now asserts no draft line on the subject screen.
