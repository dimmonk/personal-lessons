# Wealth: final review before shipping (2026-10-22)

Fresh reviewer, both roles. Learner role: the regenerated learner views `docs/learner-view/wealth-l1.md` to `-l12.md`
(regenerated with `tools/learner-view/render-learner-view.mjs wealth l1..l12`), each question answered before reading its mark.
Research role: data files in `public/subjects/wealth/`, the plan, `docs/research/wealth.md` (W20, W54-W65, W71), the fix logs
`fixes-l7-12.md` and `fixes-l1-6-round3.md`, and the app's works run on varied sheets including each lesson's worked household
(`scratchpad/wcheck/later-final.mjs`, `yearly-final.mjs`, `ownwork3.mjs`; output beside them). `own-later-pure` 66 and `own-pure` 663 pass.
Read in full: L5, L7-L12. Quick pass: L1-L4, L6 (rule screens, check rules, no change since their round-3 PASS except L2's view).

## Verdicts

| Lesson | Learner | Research | Deciding defects |
|---|---|---|---|
| L1 Your list | PASS | PASS | 0 |
| L2 Money you need soon | PASS | PASS | 0 |
| L3 What it costs a year | PASS | PASS | 0 |
| L4 The match, the order | PASS | PASS | 0 |
| L5 Taxes | PASS (5 of 5) | PASS | 0 |
| L6 One big bet | PASS | PASS | 0 |
| L7 Mix and drift | PASS (5 of 5) | PASS | 0 |
| L8 A loss you could not pay | PASS (7 of 7) | **FAIL** | 1 |
| L9 Foreign holdings | PASS (4 of 4) | PASS | 0 |
| L10 Who inherits | PASS (8 of 8) | PASS | 0 |
| L11 The spending rate | PASS (4 of 4) | PASS | 0 |
| L12 The whole check | PASS (12 of 12) | PASS | 0 |

## Claimed fixes: verified

- **Creditor protection (L8):** the rule now says a 401(k) is shielded by federal law, an IRA in bankruptcy up to a federal cap, a home
  by some states' rules, and that the IRA and home are counted to be safe (W54, W64). The items, the worked example and the `cover` work all
  leave only the 401(k) out. The car and home limits differ in every item, the story names the policy, and the `wrong-policy` feedback
  is there. The `cover` work on Grace's household gives $335,000, $300,000 and $35,000 exposed, as the lesson does.
- **Ex-spouse and beneficiary law (L10):** no item asks who would get the money any more. The rule cites the Supreme Court holding, the
  spousal-waiver rule and the state revocation statutes (W62, W63) and ends in "fix the page". The will question has one answer in every state.
  Pages fail in one, two or three places and with every fault type.
- **Form 8938 (L9):** the drawn cases include neither, December 31 only (items 3 and 7), the highest only (items 1 and 5) and both (check 8).
  The four-line table is on the rule screen. The thresholds ($50k/$75k single, $100k/$150k joint, living in the US) and the FBAR rules
  ($10,000 aggregate maximum; April 15, extended to October 15) are correct.
- **Withdrawal tax (L11):** draw = spending + tax − income in every item, the `tax-left-out` trap exists, and the sheet has a `retire.tax`
  field. The work says when tax is missing and holds the unrounded rate against the line. The 3.9% value (Morningstar, December 2025, for
  2026 retirees, 90% over 30 years) matched what I found on the web.
- **Cash lines (L12):** Canada holds an RRSP and a TFSA, not bank cash. The tab reads "Bank savings (US)". The `cash` work counts a bank account
  abroad as cash ("Bank accounts (in the US or abroad)"), as L2's rule says.
- **Target-date funds (L7):** a target-date fund alone gives "Nothing to rebalance" in the lesson and the work. Beside other funds, or with a
  fund that has no kind marked, the work is `open` and suggests no move (tested).
- **L5 round-3 fix:** placement items draw only 22% or 24% on interest with 15% long-term. That is correct for 2026: a single filer at 22%
  has income above $49,450.
- 2026 values: an estate tax line of $15,000,000 and a $19,000 annual gift exclusion. Both matched what I found on the web.

## Deciding defect

1. **L8, the "keep" items draw liability stories. The answer marked right is wrong and contradicts the lesson's own Step 4.**
   `gen-cover.js:5-7, 36, 42`: `g-risk-keep` draws any of the eight stories at 1-8% of savings. That includes "{who} causes a crash that
   hurts another driver, who sues her for {cost}", the guest who slips, and the tenant hurt in a rental. Learner view l8, item 1 drew
   "Leah causes a crash that hurts another driver, who sues her for $9,200" and marks "Keep it: pay it yourself" right. Three reasons this
   is wrong:
   - The research's own framework (W20, Baranoff et al. table 4.4) classes an exposure by its severity: a crash that injures someone is the
     textbook case of low frequency and high severity, so the loss is transferred.
   - Step 4 of the same lesson says such a claim "can be far larger than your car or your home".
   - Car liability insurance is required by law in almost every state, so "keep it" would teach a learner to go without legally required
     cover.

   The fix log's intent (stop the kind of story from deciding the answer) is right, but a liability claim's size is not known in advance.
   *Fix:* draw small "keep" stories only where the stated amount really is the worst case: the four avoid-type stories (a loan, a
   co-signature, a stake, a margin loan, each capped at its amount), plus bounded property losses such as a kitchen fire repair or damage
   to your own car. Draw liability stories (crash, guest, tenant) only as `pass`. Add one sentence to Step 1: a claim from hurting someone
   has no top, so it is never small. The avoid-type stories still come small and large, so the kind of story still does not give the
   answer away.

## Polish (does not decide a verdict)

- L11 `rate` work: at 3.94% it prints "3.9% is above the 3.9% starting rate". Show two decimals when the rounded rate equals the line
  (`own-work-later.js` ownWorkRate).
- L5 items 5 and 10 working: "$1,300 × 22% = $286.00, under the $3,000 a year limit" reads as if the tax is held against the limit. Say "the
  $1,300 loss is under the $3,000 limit".
- L10: the `heirs` work labels a joint bank account "a beneficiary page if you added one; else your will". A joint account usually passes to
  the other owner.
- L10: Step 5 could say that a return may be worth filing below the line, to carry a spouse's unused exemption (portability). This is not
  needed for the decision.
- L7 `drift`: "Make the trade inside a 401(k) or an IRA" shows whenever any sheltered account exists, even when it does not hold the side
  that is over (already logged as polish).
- L12 own work: Nora's household shows the fund cost and the beneficiary page as "Check by hand" where the lesson says "Change". This is
  by design (the sheet cannot see the plan's list or the page), and the step says so.

## Counts

Deciding defects: 1 (research: a marked answer wrong or arguable, L8). Learner-role defects: 0. Carried-over structures: none found.
Departures from the research: the same L8 item (W20 severity). Polish: 6.
