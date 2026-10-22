# Learner review, wealth lessons 1 to 6, round 3 (2026-10-22)

Role: cold beginner (an adult project manager, no finance background). I regenerated the learner views first
(`node tools/learner-view/render-learner-view.mjs wealth l1` … `l6`) and read only `docs/learner-view/wealth-l1..l6.md`. I answered every
practice and check question before reading its marked answer.

## Verdicts

| Lesson | Verdict | Check score (my own reasoning) |
|---|---|---|
| L1 Your list, and what could lose it | PASS | 3 of 3 |
| L2 Money you need soon | PASS | 5 of 5 |
| L3 What it costs a year, in dollars | PASS | 3 of 3 |
| L4 The full match, then the order of saving | PASS | 4 of 4 |
| L5 Taxes: where each fund sits, sell or wait, a loss used | PASS | 5 of 5 |
| L6 Your biggest single bet | PASS | 3 of 3 |

No defect below would make a beginner stall, or let one pass without the reasoning. All items are polish; (M) marks the ones worth fixing first.

## The way of deciding, in my own words (written before the first practice question of each lesson)

- **L1**: List every account and its total, add them all. Mark each by the line on its paper: Member FDIC (bank), Member SIPC (brokerage),
  neither (401(k), held in a trust). Add the accounts in one name at one bank; a second bank and a joint account are counted apart. Over
  $250,000 in one group: move the extra to another bank. A fall in prices is paid by nobody.
- **L2**: Find a big bill due within five years. If its money is in stocks, move it to savings. Leave out money already set aside for a bill,
  add the rest of the cash, divide by a month of spending: under 3 build up, 3 to 6 leave, over 6 (bills set aside) invest the rest.
- **L3**: Each fund's percent × what you hold ÷ 100, plus the plan's flat fee. Change a fund only if another fund of the same Kind on the
  same sheet costs less; switch to the cheapest of that kind.
- **L4**: Stub dollars ÷ gross pay × 100 = my rate. The match stops where the (last) step ends. Left = match at that rate − match at mine.
  Below it: raise; at or above: leave. Order of saving: strike what is done, owed nothing or not open, keep the fixed order.
- **L5**: Bonds belong in the 401(k), stocks in the brokerage account, swapped only if the 401(k) holds stocks. Sell or wait: inside a
  401(k) switch now; in a brokerage account compare gain × (short − long rate) with value × fee gap × months ÷ 12. A loss does not count if
  the same fund is bought within 30 days either side.
- **L6**: Add one company across every account (index funds do not count), divide by the whole list, compare with 10%. Over: sell
  company − 10% of total, in the 401(k) first.

## Defects (all polish)

### L1
1. SIPC's limit ($500,000, of it $250,000 cash, per capacity) is taught in Step 1 but no item ever puts a brokerage account near it. No
   stall; one look-alike over SIPC's cash limit would make the paragraph earn its place, or the sentence could be shortened.
2. "Change it / Leave it" is always in that fixed order. Harmless (binary, answer varies).

### L2
3. (M) Step 1 says "If cash is short and a bill's money sits in stocks, do both", but no option says "both" and no household has that
   case. A learner who meets it on their own sheet is fine (the app flags both), but in the lesson the sentence is untested. Fix: add a
   household with both and a "Do both" option, or drop the sentence from the rule and let the own step carry it.

### L3
4. (M, carried from round 2 item 8) The rule says the administrative fee shows "on your quarterly statement", but the sample statement
   has no fee line, only balances. A beginner who checks the statement does not find it. Fix: add a "Fees taken this quarter" line to
   the sample statement.
5. The brokerage-account rule ("selling a fund at a gain is taxed, and that tax weighs against the switch") is never practised here;
   every L3 account is a 401(k). L5 covers it. Cosmetic.

### L4
6. The check passes with 2 of 3 right on "share of pay" and 2 of 3 on "money left". A learner can get one whole match calculation wrong
   and pass. Fix: 3 of 3 on "money left" (the lesson's core number), tolerance already allows rounding.
7. Every order question (o-2, o-3, o-4) has exactly six steps in the right answer. The screen no longer says the count, so no stall,
   but a second check household with five or seven steps would remove the regularity.

### L5
8. (M) The swap's "check its gain first" never decides anything: in every item the one-time tax on the bonds' gain ($15-$40) is far below
   one year's saving, and the working always says "the swap is worth it". A learner computes it and can ignore it. Fix: say plainly that
   a one-time tax smaller than a year's saving always favours the swap (so the check is quick), or add one swap with a large gain where
   the learner must weigh it over several years.
9. Placement tax notes at 12% show "Tax rate on a gain held more than a year: 15%", higher than the 12% on interest, while Step 5 says a
   gain held over a year is taxed "at a lower rate". I noticed the clash on item 11 and check 13 and had to re-read. (The research review
   rates this as a wrong fact.)
10. Item 9 / check 16: when the planned buy is 22 days *before* the sale, "Move the purchase past 30 days" does not say which way. Fix:
    "buy more than 30 days before, or more than 30 days after, the sale".
11. Step 5's third route ("Not selling at all puts the tax off ... put new money into the cheaper one") is never offered as an option.
    No ambiguity; just unused.

### L6
12. (M) Step 1 says "Sell first inside a 401(k)" and, in the next sentence, "Employer stock that has grown a lot in a 401(k) ... check with
    a tax preparer before you sell it there". "There" reads as "in the 401(k)", which is where every item says to sell first. A careful
    beginner hesitates on "Where would X sell first?". The papers never show a gain on the 401(k) stock, so the right answer is still
    reachable. Fix: one clause, e.g. "If your 401(k)'s company stock has grown a lot since it was bought, ask a tax preparer before selling
    it there; otherwise sell there first."
13. Check passes with 2 of 3 right on the company's share. Same comment as item 6; less important since the call itself needs 3 of 3.

## Counts by kind

- Taught but never practised: 4 (items 1, 3, 5, 11)
- Papers that do not match the rule: 2 (items 4, 9)
- Wording needing a second read: 2 (items 10, 12)
- Computed step that never decides: 1 (item 8)
- Lenient pass rule: 2 (items 6, 13)
- Mild regularity: 2 (items 2, 7)

Total 13; none decides a verdict. Fix first: 12 (L6), 8 and 9 (L5), 3 (L2), 4 (L3).
