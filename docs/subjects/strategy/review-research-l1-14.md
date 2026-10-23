# Strategy, lessons 1 to 14: research review

Reviewer role "research" (build-subject step 6), 2026-10-23. Read: the data files in `public/subjects/strategy/`, the learner views
`docs/learner-view/strategy-l1..l14.md`, `docs/subjects/strategy/plan.md`, `docs/research/strategy.md` and the build-subject skill.
I did not read the earlier reviews or the new learner review. I ran nothing: no validator, tests or renderer.

Web checks on the note's sources:
- **BLS establishment survival.** BLS research papers (2004, 2006) find about two-thirds of new establishments still open after two
  years and 44% after four (https://www.bls.gov/osmr/research-papers/2006/pdf/st060040.pdf;
  https://www.bls.gov/opub/ted/2024/34-7-percent-of-business-establishments-born-in-2013-were-still-operating-in-2023.htm).
- **Continental Lite.** Continental's 1994 10-K (sec.gov) confirms the fast build-up of flights; press from 1995 confirms meals were cut.
  Porter's own wording on the cuts (no meals, no first class, more departures, lower fares, faster turns, while travel agents, the mixed
  fleet, baggage checking and seat assignments stayed) is from my own reading of Porter 1996, p. 44-45. The search did not return the
  article text.
- **Maytag and Paccar.** The figures are as I know Porter's 1996 and 2008 texts. The note's quotes match.

Where a finding says "defensible", a second answer can also be argued.

## Verdict

**FAIL.** Twenty-six defects:
- 6 factual
- 10 departures from the field's way of thinking or from the plan
- 1 carried-over structure
- 9 answer or pattern problems: 6 answers that are arguable or have a weak reason, and 3 where the form gives the answer away. Each of
  these is filed under the kind that most limits it.

| Lesson | Verdict | Defects |
|---|---|---|
| 1 | PASS with a minor fix | 10, 26 |
| 2 | PASS | (26) |
| 3 | FAIL | 3, 21, 22 |
| 4 | FAIL | 4, 5 |
| 5 | FAIL | 13 |
| 6 | FAIL | 1, 8, 19, 24 |
| 7 | PASS with a pattern fix | 20 |
| 8 | FAIL | 9 |
| 9 | FAIL (minor) | 2, 23 |
| 10 | FAIL | 11, 25 |
| 11 | FAIL | 14 |
| 12 | FAIL | 6 |
| 13 | FAIL | 6, 7, 15, 16 |
| 14 | FAIL | 12, 17, 18 |

## Factual: wrong, out of date or not supported

1. **Continental Lite is misdescribed** (l6.lesson.js:32-33; learner view l6, Step 2).
   - The card says Continental kept "its full service" on the Lite flights. The compare line says "Continental gave up nothing".
   - In Porter (p. 44-45), Continental Lite **did** give things up on those routes: meals, first class, and slower turns at the gate.
     It also added flights and cut fares. What it kept, because it stayed full-service elsewhere, was the travel agents, the mixed fleet,
     baggage checking and seat assignments.
   - Porter's point is that the straddler pays for activities that conflict. It is not that the straddler gives up nothing. The lesson's
     main example teaches a false fact, and it is the root of defect 8.
   - **Fix:** "Continental Lite cut meals and first class on those flights, but kept the travel agents, the mixed fleet, baggage checking
     and seat assignments it needed for the rest of the airline, so it paid for both ways and matched Southwest on neither."
2. **Maytag dates** (l9.lesson.js:25). The lesson says "By 1995 its profit on each dollar of sales had fallen from 8 to 12 cents to
   under 1 cent."
   - Porter: 8% to 12% was the return in the 1970s and 1980s. Under 1% was the **average** for 1989-1995, not the 1995 figure. The note
     (line 58-59) repeats this loosely.
   - **Fix:** "...from 8 to 12 cents in the 1970s and 1980s to under 1 cent on average from 1989 to 1995."
3. **"Harvard Business School's strategy course is built on this picture"** (l3.lesson.js:13).
   - The note (ST7, ST18) supports only this: Oberholzer-Gee's book is "based on [his] strategy course". It also rests only on publisher
     text. That does not make it the school's course.
   - **Fix:** "A Harvard strategy professor built his course on this picture."
4. **US car dealers** (items-squeeze.js:202; l4 check question 15). "A dealer can sell only one maker's brand" is wrong as a US fact.
   - Many dealers hold several franchises, and dealer groups run many brands.
   - State franchise laws give dealers strong protection against the maker. US dealers are a weak example of supplier power.
   - **Fix:** use a case where the supplier's hold is plain, for example a franchise whose franchisor sets the price of the supplies
     every shop must buy. Or word it as one dealer's contract, not as a fact about the trade.
5. **US pharmacies** (items-squeeze.js:48; l4 worked example). In the US, reimbursement per prescription is set mostly by three pharmacy
   benefit managers (PBMs), acting for the insurance plans. Calling them "three big insurance plans" is a simplification.
   - Minor. It does not change the force (buyers).
   - **Fix:** "three drug-benefit companies that pay for most prescriptions on behalf of the insurance plans".
6. **Survival base rates are far below US reality** (gen-outside.js:18; items-outside.js:44-60; l12 throughout, and l13 by reference).
   - Openings run 12-20 a year with 2-5 still open, so three-year survival comes out between 10% and 42%, usually about 20%.
   - BLS data: about two-thirds of new establishments survive two years and 44% survive four. Three-year survival is therefore around
     half.
   - The lesson teaches the outside view with numbers that repeat the myth that "four in five new businesses close in three years".
   - **Fix:** set the kept range so three-year survival falls around 40-65%, or label the tables plainly as made up. The method does not
     change.
7. **"No record" ventures that do have one** (l13: dog pool, electric boat rentals, frozen taco kits; items-afford.js). Dog
   hydrotherapy pools, electric-boat rentals and shipped frozen tacos (for example Goldbelly) all exist as US businesses. "Nobody in the
   state runs one" is unlikely, and "no record" does not follow from it in any case (see defect 16).
   - **Fix:** choose ideas where the demand truly cannot be seen yet, or reframe the line as "no record for this demand here".

## Departures from the field's way of thinking or from the plan

8. **Lesson 6's straddle test contradicts lessons 1, 9 and the reserves** (l6.lesson.js:21, "A straddle gives up nothing").
   - Lesson 1 item 1 (Luis adds snow removal and keeps everything) is marked a strategy.
   - So is r-movers (items-kernel.js:240: storage and office moves added, nothing dropped).
   - So are lesson 9's second van and second site.
   - By lesson 6's rule, each of these "gives up nothing" and so is a straddle.
   - Porter's test is whether the new activities **conflict** with the existing position: a straddler imitates a rival's position while
     keeping its own, and the two need activities that pull against each other. Giving something up is the result of a real
     trade-off. It is not the test.
   - **Fix:** ask "do the new activities pull against the ones the position needs?" Add one look-alike: an addition that fits and
     drops nothing, which is **not** a straddle.
9. **Lesson 8's barrier list is presented as complete** (l8.lesson.js:19 "One of three answers"; subject.js:73-77).
   - ST9 rests on Helmer's seven powers: scale, network effects, counter-positioning, switching costs, brand, cornered resource and
     process power. Barney's indicators include path dependence and social complexity, such as reputation and culture.
   - The list keeps only a cornered resource ("only we have it") and fit. So the learner is taught that a 20-year reputation, or
     customers locked in by switching costs, mean "Nothing stops a copy".
   - **Fix:** say "three common answers", and add "customers would lose too much by switching, or trust built over years" as an option
     with one item each. Or keep it to three and drop the claim that the list is complete.
10. **Lesson 1's stated limit is false for some of its own cases** (l1 Step 1: "Every plan here faces a challenge from rivals or the
    market").
    - Sam's food truck (selling out, a long line), Mike's car wash (wages in rainy weeks) and r-garage (a three-week wait) are capacity
      or running problems.
    - Their verdicts are right (to-do list). The claim is not.
    - **Fix:** drop the sentence, or give those plans market challenges.
11. **Lesson 10 never tests whether where-to-play and how-to-win fit together**, though Step 1 teaches "The two are one choice"
    (Lafley & Martin, ST10).
    - Every pair sets a plan that chooses against one that does not, so the skill tested is only "is there a choice?".
    - **Fix:** add pairs where both plans choose, but one plan's way to win does not fit its customers. For example: "We play for weekend
      DIY shoppers; we win with an advice desk run by a retired builder and doors open at 6 a.m."
12. **Lesson 14's check is not the plan's real-world test** (l14.lesson.js:30, draw from the whole pool).
    - The plan says "ten new one-screen cases ... never seen in a lesson".
    - The draw includes worked examples (w-), practice items (p-, q-) and earlier checks (k-), all answered before with feedback.
      Only the r- reserves are unseen.
    - **Fix:** draw only from items the learner has not met (reserves). Write at least one reserve per strand beyond what each check
      needs, so the draw of 10 can be all-new.
13. **Lesson 5's losing-line rule goes against the source it cites** (l5.lesson.js, Step 1; plan line 91-94 calls the rule ours).
    - The whale-curve literature (Kaplan & Narayanan, ST19) advises first making unprofitable customers pay, through price and
      cost-to-serve, before dropping them.
    - The lesson lets go of every loser not tied to the core, even when a price fix might make it pay. "Fix" is offered only when the
      core's customers buy the line.
    - Also, the share passing 100%, which is ST19's teaching point, is stated but never appears in any item.
    - **Fix:** decide on "can a price or cost change make it pay?" first and on the tie to the core second, with notes that give both
      facts. Add one table where the core's share passes 100%.
14. **Lesson 11 practises spotting evidence, not weighing doubt** (items-be-true; l11 items 1-12).
    - In every item exactly one condition lacks evidence, marked by "nobody has asked", "none has said" or "no X has". The rest say
      "agreed", "measured" or "did it".
    - Lafley, Martin, Rivkin & Siggelkow test the condition the team **most doubts**: it is often one of several weak ones, and the one
      that would kill the move.
    - Each item also has only one move, so "choose the move whose conditions held up" is never practised.
    - **Fix:** include items with two weak conditions, where the one to test first is the one that would kill the move, or the cheaper
      one to test. Add one item comparing two moves.
15. **Lesson 13's record cases ignore affordable loss in the same note.**
    - Mark: a $250,000 second gym, but he "could lose $10,000". Grace: $180,000 against $5,000. Dana: $200,000 against $6,000. Ray:
      $150,000 against $8,000.
    - In each, the marked move is "size the bet from the record" with no limit, while the check's pass rule is "None bet more than you
      could afford to lose".
    - Dew et al. (ST14) find that experts limit to affordable loss as a general habit. The note's split between record cases and
      affordable-loss cases is its own judgement call, and the lesson makes it either/or.
    - **Fix:** in record cases, the right move is to start from the record **and** keep the stake within the affordable loss (lease,
      phase it, take a partner). Or take the affordable-loss line out of record cases.
16. **Lesson 13's "no record" contradicts lesson 12's reference class** (l13.lesson.js:20; items-afford.js:4).
    - Lesson 12 says to find ventures "alike in what makes them work or fail". Lovallo, Clarke & Camerer (ST12) find that a wide
      reference class beats a few close analogies.
    - Lesson 13 treats "nobody here does exactly this" as "no record".
    - **Fix:** define the unknown case as demand nobody can observe yet, and say a wider class (boat rentals, meal kits) usually exists
      and sets a starting point even there.
17. **Lesson 14's sixth question has no bet to judge in two cases.**
    - In the worked example (Dana) and item 3 (Priya), the notes describe a business already running. Question 6 asks how to judge "the
      bet", but no new bet is named. Dana already sells cakes.
    - Item 3 also marks the barrier "Nothing", yet question 5's right plan rests on the same bundle any cafe could copy.
    - **Fix:** name the bet in the note (for example "open a second, work-only cafe"), and make question 5's plan lean on something the
      note shows a rival cannot copy, or say why it does not need to.

## Structure carried over from another subject

18. **Every case is framed as "Your own note, written after an argument"** (the `message` form `note`,
    public/app/lessons/message-view.js:8; used by every item in l1, l2, l6-l14).
    - That label comes from the engine's note form, made for argument-based subjects. Here it frames owner plans, trade reports read as
      notes, offers, and "Plan 1 / Plan 2" drafts, none of which come after an argument.
    - It is a structure carried over, not drawn from this field. Practice in the form of real use (D6) wants the case to look like what
      an owner holds: a plan, a memo, a page of the books.
    - **Fix:** give the note form a label set by each subject, for example "Dana's plan, January", or use prose or document blocks for
      these cases.

## Answers that are arguable, and patterns that give the answer away

19. **Lesson 6: wording gives the answer** (items-tradeoffs.js). Every trade-off item states the sales given up as a number (about
    $40,000, a fifth, half, a third). Every straddle says "like the X" or "the same staff". The cue can be read without the reasoning.
    - **Fix:** add a straddle that states a lost slice, and a trade-off whose cost is not stated as a number.
20. **Lesson 7: the replacement question always has the same three roles** (items-fit.js). The right answer serves the position. One
    distractor is "another kind of customer". The other is "done harder", marked by "but ..." or "faster or better than". The form gives
    it away.
    - **Fix:** vary the roles. Sometimes offer two options that both serve the position, one of which also helps the other activities.
21. **Lesson 3 item 15 has a non-sequitur reason** ("The work is the same, so the least the cleaners would take did not fall").
    - **Fix:** "Nothing changed what the cleaners would accept; only their pay was cut, so $1 an hour moved to the business."
22. **Lesson 3 item 12, Half-Price Tuesdays.** A real half-price day brings new buyers who value the repair between half and full price,
    which **creates** value. "Only moves" holds only if the same customers come.
    - **Fix:** add "The same customers come; no new ones" to the note.
23. **Lesson 9 check 13 (Hal and the piano maker) is defensible both ways.** The paying customer is a manufacturer buying delivery in
    bulk: a powerful buyer (lesson 4) that will press on price, so "blurs" can be argued.
    - **Fix:** say the maker pays Hal's own rate per piano and that the deliveries go to piano owners, or swap in a piano store sending
      its buyers.
24. **Lesson 6 check 10 (Nina's bookshop)** says "gives up nothing", but the rare books lose the front of the shop. The answer is
    defensible both ways.
    - **Fix:** keep the rare books where they are and add the best-seller table in the same space and staff hours.
25. **Lesson 10: the right plan is always recognisable without reasoning.** It uses the "We play for ... We win with ..." form most of
    the time, and it is always the position the learner already knows for that business from lessons 6-9. "Do it all" and "Something
    for everyone" also overlap in Rosa's and Jill's Plan 1, which list both every customer and every service.
    - **Fix:** vary the wording. Use businesses and positions not seen before. Make "something for everyone" plans name customer kinds
      only.
26. **Patterns in lessons 1, 2, 11 and 13** (minor, for the next pass):
    - Lesson 1: goals are always 3-4 lines with no steps.
    - Lesson 2: "with the same ... rarely/never" always means run it better.
    - Lesson 11: covered in defect 14.
    - Lesson 13: the right move is always the small, partnered option; the distractors are always "forecast then spend" and "borrow".
    - Each needs one item that breaks its pattern.

## What holds up

- Lesson 2's operational-effectiveness line, lesson 4's force question with Paccar, lesson 3's value arithmetic and lesson 7's Vanguard
  all match their passages in the note (ST1, ST6, ST7, ST3). All generated numbers I checked add up.
- The mix of owner and well-known cases follows the plan, and every lesson names and corrects a wrong idea.
- Lesson 12's rule on how a rival will answer, and its analogy test, are faithful to ST12 and ST13.
