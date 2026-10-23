# Strategy, lessons 1 to 14: research review, round 2

Fresh reviewer, role "research" (brief: scratchpad review-brief.md). Read: all fourteen learner views
(`docs/learner-view/strategy-l1..l14.md`), the plan, the research note `docs/research/strategy.md`, the build-subject skill, and
the data files where a view raised a question (`items-core.js`, `items-six.js`, `l7.lesson.js`, `l14.lesson.js`). Earlier
reviews and fixes files not read. Nothing run (no validator, tests or renderer).

Web checks on the note's sources:
- BLS Business Employment Dynamics Table 7 (ST20): fetched. Matches the note exactly (2013 openings 79.6 / 68.9 / 61.4 / 55.3 /
  50.6%; 1995, 2005, 2018 three- and five-year rates as quoted). Lesson 12 "about six in ten after three years, about half after
  five" is supported.
- Porter (1996) Maytag figures (ST4, lesson 9): could not reach the original text in a search; the arithmetic in the lesson
  ($684M to $3.4B is about five times) is consistent with the note. Not independently confirmed.
- Not checked again: Rumelt, Lafley and Martin, Helmer (the note already marks them "via quotations").

Overall: the way of thinking in every lesson follows section F of the note and the plan; I found no structure that looks carried
over from another subject (the six questions, the value stick, the forces-as-one-question, the barrier list, the traps and
"what would have to be true" all come from the field's sources and are cited). The defects are wrong keys, two out-of-date or wrong
facts, a few arguable items, and some rules with no passage in the note.

## Verdicts

| Lesson | Verdict | Defects |
|---|---|---|
| 1 Goal, wish, or strategy? | PASS | 1 minor (D21) |
| 2 Better, or different? | FAIL | D8, D9, D20 |
| 3 Value created | PASS | none of substance (D22 note only) |
| 4 Who squeezes the profit | FAIL | D3, D16 |
| 5 Find the core | FAIL | D1, D19 |
| 6 What you say no to | FAIL | D4, D17 |
| 7 Do the pieces fit? | FAIL | D5, D6, D10 |
| 8 Will it last? | FAIL | D7, D11 |
| 9 Growth that keeps the position | PASS | (D18 is a note-strength item, no lesson change) |
| 10 Where to play and how to win | PASS | none |
| 11 What would have to be true | FAIL | D2 |
| 12 How did others like it do? | FAIL | D15 |
| 13 A bet you can afford | PASS | D23 minor |
| 14 Run the six questions | FAIL | D12, D13, D14 |

## Defects

### Wrong or contradicted marked answers

**D1. Lesson 5: the right answer contradicts the lesson's own rule on three or more questions.** `items-core.js` line 45 offers only
`fix` ("Keep it, but fix its price or cost") and `let-go`, and keys `fix` whenever `canFix || tied`. When a line is tied to the core
but *no* price or cost change could make it pay (`canFix: false, tied: true`), the marked answer reads "fix its price or cost" while
the feedback says "no change would make it pay ... keep it and cut its loss". Affected: practice item 3 (Kim, library classes,
view l5 line 161-165), item 8 (Priya, delivery app, line 349-353), check question 10 (June, hotel lobbies, line 469-473), and the
items at `items-core.js` lines 122 and 126 if they are used. A learner who applies the rule ("no change would make it pay") must
pick an option that says the opposite. The rule (step 1, ST19 Kaplan order, plan line 92-96) has three outcomes; the ask has two.
**Fix:** add the third verdict "Keep it, and cut its loss as far as you can" (list `verdict` in `subject.js`, `only` in
`items-core.js` line 45), key it when `tied && !canFix`, and give `fix` a "then" for those items ("The notes say no price or
cost change would make it pay"). Also fix the typo in step 1, line 18: "could a change of price ... could make it pay".

**D2. Lesson 11, check question 14: marked answer contradicts the lesson.** Step 1 (line 15) and practice item 10 teach that when
a test holds you "test the next least likely condition of the same move", and item 10 marks "Choose the move now" wrong. Check 14
marks "The night room: its least likely condition held" right after one condition was tested. **Fix:** say in the note that the
night room's other conditions were already tested or are backed by evidence (e.g. "its other conditions are signed or counted"),
or reword the right option to "Go on with the night room: test its next condition, then plan it in full".

**D3. Lesson 4 worked example: a wrong fact about the US trade.** "Drug wholesalers are many, and a pharmacy can switch from one to
another within a week" (view l4 line 30, step 2 working line 34). In the US three wholesalers (McKesson, Cencora, Cardinal Health)
hold over 90% of drug distribution (Morningstar, IBISWorld). The learner leaves believing the supplier force on pharmacies is
weak because suppliers are many, which is false. **Fix:** "Three big wholesalers compete for each pharmacy's account, and a
pharmacy can move to another of them within a week", and the working: "the wholesalers compete for the account". The answer
(buyers, the drug-benefit companies) still stands.

**D4. Lesson 6 step 2 and lesson 2 step 2: Southwest is described in the present-day sense, but it has since dropped two of the
choices the lesson names.** From 27 January 2026 Southwest assigns seats, and since May 2025 it charges for checked bags. The
lesson's Southwest ("chose not to serve meals or assign seats", l6 line 28) is Porter's 1996 Southwest, and the learner, in
October 2026, may know Southwest now assigns seats and conclude the lesson is wrong. **Fix:** date it: "In the 1990s Southwest
Airlines chose ..." (l6 step 2, l2 step 2), as Porter did. Optional: a line that Southwest gave up some of these choices in
2025-26, which is itself the lesson's point (a position changes when its trade-offs are dropped).

**D5. Lesson 7, item 2 (Vanguard, step 2) and lesson 8 item 5: Vanguard is described in the present tense from Porter's 1996
account.** Today most Vanguard ETF buyers buy through other brokerages and Vanguard advertises. **Fix:** "As Porter described it in
the 1990s, Vanguard ..." in l7 step 2 and the l8 item 5 report.

**D6. Lesson 7 check: the pass rule does not match the lesson.** `l7.lesson.js` line 42 sets `{ slip: "better-not-different",
max: 0 }`, shown as "None thought running the business better would fix what needs a different position" (view l7 line 304), the
lesson 2 error. Lesson 7's costly wrong move is taking an activity that serves another kind of customer (serve-everyone, ST2 and
ST10) or the trade's usual way (Porter's "best practice" error, ST1). Only one check option (check 13, "order them faster than the
dealers") carries the lesson 2 slip naturally. **Fix:** name a slip for the trade's usual way taken for a fit (the lesson file's own
comment says "the trade's usual way never taken for a fit") and word the rule so; or use serve-everyone, which every check
question's "another kind of customer" option already offers.

**D7. Lesson 8 item 5 (Vanguard): the wrong-option feedback is factually wrong.** For "A higher price than rivals get" it says "The
price is the same as rivals'; what changed is the cost of making it" (view l8 line 161). Vanguard's price (its fees) is far *lower*
than rivals'. The generic text of the cost items does not fit this case. **Fix:** a "then" for this item: "Vanguard charges less,
not more: its benefit is a cost below rivals', passed on as low fees."

### Arguable answers (a second option defensible)

**D8. Lesson 2, item 7 (roofing):** the tap's target is "the line that shows rivals doing the same work better". "Our jobs take
30% longer than theirs" shows exactly that, yet it is marked wrong ("That is the result"). **Fix:** accept both lines, or reword the
30% line so it does not compare with rivals ("Our jobs run long, so we fit fewer into the season").

**D9. Lesson 2, check question 12 (delivery):** the right line "Rival couriers let software plan their stops" does not say rivals
do better, and the reason claims they "drive fewer miles", a fact not in the text. **Fix:** "Rival couriers let software plan their
stops, and their vans drive no more miles than they need."

**D10. Lesson 7, item 8 (Ray, plumbing):** "Keep plumbers on call in shifts, and send whichever one is nearest" is defensible for a
position whose first word is *fast*. The feedback's reason (the visits taught each plumber his kitchens) is real but not decisive.
**Fix:** make the wrong option clearly worse, e.g. "send whichever one is free, whatever kitchen it is", or state in the position
that speed comes from knowing the kitchen.

**D11. Lesson 8, check question 18 (Hal, pianos):** the marked barrier is "Customers would lose by leaving". Piano owners booking a
move have usually never used Hal: they lose nothing by going elsewhere. What protects Hal is a 25-year record and the stores'
referrals, a reputation with a unique history (Barney's path dependence, Helmer's branding, ST9), which a learner can fairly read
as "Only we have it, and a rival cannot get or make one". The note calls the merge of switching costs and reputation a judgement
call; this item is where that merge fails. **Fix:** reword the option to "Trust built over years that a newcomer cannot buy, or
customers' records and setup here" (reputation first), and give "only we have it" a feedback that names why a record is not a
single thing a rival cannot get; or replace the case with one where customers really would lose by leaving.

**D12. Lesson 14, check question 14 (Lupe):** Q1 marks "People already buy this: start from the record"; Q2 marks "Run the truck in
the next town first, and open a shop there if it does well", which the reason justifies as showing "whether the next town buys": a
trial, the other way of judging. Lesson 13 marks trials wrong for a known kind (items 3, 5, check 13). The truck is also a
different kind of business from the shop the record describes. **Fix:** make the smaller stake a part of the same project (rent a
small space, a partner who pays a share, as l13 step 1 says), or justify the truck as "put less at risk" without the "shows whether
the town buys" line.

**D13. Lesson 14, item 3 (Priya):** Q4 says nothing stops a copy (the day pass is a race), yet Q5 marks as "the plan that chooses"
a position built on that same copyable pass, and the reason adds a rule not taught anywhere ("keep the booths cheap enough to pay
back before rivals follow"). Lesson 8 says a copyable difference is "a race, not a position". **Fix:** give the position a barrier
in the note (e.g. the only back room on the street for calls, or a fit of quiet, rooms and passes) or have Q5's reason say plainly
that the choice is right but will be copied, so the bet must be small, and name that in step 1 of lesson 14 or lesson 8.

### Departures from the plan

**D14. Lesson 14 check: "goal taken for a strategy" can be made in only one of the ten questions.** Plan line 113-114 and the
`l14.lesson.js` comment promise each costly error "possible in at least two of the ten". In `items-six.js` the slip
`goal-as-strategy` appears in the k14 items only in `k14-salon` (lines 173, 175). Growth-for-growth (k14-cleaning, k14-sauce) and
serve-everyone (k14-cleaning, k14-bikes) meet the promise. **Fix:** give a second check question a goal-or-wish option (e.g. in
k14-catering or k14-taqueria Q2, "Set a target of $500,000 next year and push sales" tagged `goal-as-strategy`).

### Claims or rules with no passage in the note

**D15. Lesson 12, step 1: the rule for when a rival answers** ("It answers when your move takes customers it serves and it can follow
without changing how it runs ... What it did in the past is a clue, not the test") has no source in ST12 or ST13, and the note does
not mark it as a judgement call. It is close to Porter's trade-off logic (ST2: a rival does not follow when following would make it
give up its own position) and Helmer's counter-positioning (ST9). **Fix:** add the passage to the note (ST2 p. 44-45 and Helmer's
counter-positioning, via summaries) or mark the rule a judgement call; Lovallo and Kahneman's "competitor neglect" supports only
that rivals must be considered, not when they answer.

**D16. Lesson 4, step 1: "A middleman that brings you your customers, such as a delivery app or a chain store, counts as a buyer"**
is right in Porter (2008), who says intermediate customers such as distribution channels "can be analyzed the same way as other
buyers", but the note (ST6) quotes no such passage. Items 7, and lesson 5 item 8, rest on it. **Fix:** add the Porter (2008) passage
on intermediate customers to ST6.

**D17. Lesson 6, step 1: the definition of a pull is narrower than Porter's.** Porter (1996, p. 43-44) names three sources of
trade-offs: inconsistent image or reputation, different activity configurations (equipment, staff, skills), and limits on internal
coordination. The lesson's test is mostly shared capacity ("the same people, hours, room or promise ... at once"), and its "no pull"
case ("fills hours the core leaves idle") would pass an addition that harms the image even with idle hours. "Promise" covers image
only by implication. The note's ST2 entry quotes the definition but not the three sources, so the narrowing is not recorded. **Fix:**
add Porter's three sources to ST2 and one line to step 1: "or customers would stop believing the promise (a luxury shop selling
cheap goods)"; or mark the narrower test a judgement call in the plan.

**D18. Lesson 9 (no lesson change): the Maytag figures** rest on the note's reading of Porter p. 51-52, which I could not reach to
re-check. Keep, but the note could record the reprint page it was read from (it does) and a second source.

### Minor

**D19. Lesson 5 step 1 typo** (see D1): "first, could a change of price or of what it costs to serve could make it pay".

**D20. Lesson 2, item 6 (gym): "$10 a month" budget gyms** is dated for October 2026 (Planet Fitness's classic plan has been $15
since 2024). The same $10 appears in lessons 6 and 14. Harmless as a made case; "$15 a month" would read as current.

**D21. Lesson 1, check question 15 feedback:** "free videos took the market for recorded classes" where the plan line says "recorded
packs". Match the words.

**D22. Lesson 3, item 6 (four-day week, "costs us nothing extra"):** in a few states (California) a 10-hour day triggers daily
overtime unless an alternative workweek is adopted. The note says "same hours of cleaning", so no change needed; mention only if the
case is ever placed in a named state.

**D23. Lesson 13 step 1** says "about half of new US businesses are still open after five years"; the BLS record (ST20) counts
establishments (one location), which lesson 12 correctly calls "shops and offices". Use the same words in both lessons.

## Counts by kind

- Wrong or contradicted marked answer: 2 (D1, D2)
- Wrong or out-of-date fact: 5 (D3, D4, D5, D7, D20)
- Rule or pass rule not matching the lesson or plan: 2 (D6, D14)
- Arguable answer, second option defensible: 6 (D8, D9, D10, D11, D12, D13)
- Claim or rule with no passage in the note, or narrower than the source: 3 (D15, D16, D17)
- Note strength / not re-checkable: 1 (D18)
- Minor wording or typo: 4 (D19, D21, D22, D23)
- Structures carried over from another subject: 0
