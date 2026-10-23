# Research review: Strategy lessons 1 to 5 (round 1)

Reviewer role "research" (build-subject step 6), 2026-10-23. Read: `public/subjects/strategy/` (subject.js, l1-l5.lesson.js,
items-kernel.js, items-better.js, items-value.js, gen-value.js, items-squeeze.js, items-core.js), `docs/learner-view/strategy-l1..l5.md`
(spot checks), `docs/subjects/strategy/plan.md`, `docs/research/strategy.md`, the build-subject skill.

**Sources checked on the web.** Porter (2008), the Paccar passage: a search on the passage confirmed that Porter describes heavy
trucks with powerful fleet and leasing buyers, stiff price competition, fierce rivalry in downturns, and unions with "considerable
supplier power". Paccar chose owner-operators because they have little clout and are less price sensitive. That bears on defect 12.
US rule for defect 17: the IRS FAQ on P.L. 119-21 (July 4, 2025) says the 25D residential clean energy credit "will not be allowed for any
expenditures made after December 31, 2025". I could not open a full text of Porter 1996, Porter 2008's pitfalls box, or Rumelt. The PDF
copy found would not render here. So the note's other quotations are unchecked by me. They match the widely quoted wording I know.

Kinds: **F** wrong or out-of-date fact, **D** departs from the note's way of thinking or from the plan, **C** structure carried
over rather than drawn from this field's research, **A** marked answer wrong or arguable.

## Verdicts

| Lesson | Verdict | Defects |
|---|---|---|
| 1 Goal, wish, or strategy? | FAIL | 1 D (substantive), 2 minor (D, F) |
| 2 Better, or different? | PASS once the two minor fixes are made | 1 C, 1 A (both minor) |
| 3 Value created, and who keeps it | FAIL | 2 F, 1 D (substantive), 1 C, 1 D (minor, documented) |
| 4 Who squeezes the profit | FAIL | 3 F, 2 D, 2 A |
| 5 Find the core | FAIL | 2 D, 2 A (and the missing pair of defect 14) |

## Lesson 1

1. **D, substantive. The kernel rule is taught without lesson 2's question, so a plan that only runs the business better counts
   as "a strategy".** Files: `l1.lesson.js:17-24`, `items-kernel.js:2-5`. Rumelt's kernel (ST5) asks only for a challenge, one
   approach and coherent steps. A plan like "Food comes out cold because tickets have no order; we fix the ticket order; steps..."
   passes that test, yet lesson 2 (ST1, ST16, Porter) says it is a running problem and not strategy. The note's section F puts
   "is it a strategy problem?" first to settle exactly this, and neither the note nor the lesson reconciles Rumelt with Porter.
   Lesson 1's own items happen to avoid the clash, because every "strategy" in them is a change of position. But lesson 2 mixes lesson 1
   items in unlabelled (`l2.lesson.js:36`), and lesson 14 will run both questions on one case. **Fix:** add one line to
   lesson 1's rule: this lesson checks that a plan has the shape of a strategy, and lesson 2 asks whether the challenge needs one.
   Add a sentence to research F stating the reconciliation as a judgement call. In lesson 2, add one look-alike pair: a well-formed
   kernel plan for a running gap beside one for a change of position.
2. **D, minor.** `l1.lesson.js:1-2` teaches question 2 before question 1 "because every later question needs it". The plan
   table orders the lessons this way, but its own "way of thinking" (plan.md:26-27) and research F put question 1 first, and no
   source is given for the swap. **Fix:** mark it in the plan as a judgement call with its reason, or swap the lesson order. The
   reconciliation in defect 1 makes the swap safe either way.
3. **F, minor (overclaim).** `l1.lesson.js:11`: "People who teach strategy test a plan with one question first: does it say what is
   in the way?" This is Rumelt's test (ST5); the note gives no survey of teachers. **Fix:** "One of the field's best-known
   teachers tests a plan with one question first…"

No marked answer in lesson 1 is wrong or arguable; I checked all 20 plans against the rule.

## Lesson 2

4. **C, minor. "Tap the line that settles it", with each story written so that exactly one line decides.** Files:
   `items-better.js:21`, `items-better.js:5`. The plan (plan.md:63) asks lesson 2 for a verdict `choose`, a `pair` and the
   `problem` facet, and asks for no tap. The tap-then-verdict shape is the one used across other subjects
   (`debating/items-l1.js`, `scams/items-l9.js`, `wealth/gen-heirs.js`). The note gives no source for single deciding lines: ST15 and ST16
   describe experts weighing more of the problem's information, not finding one line. Combined with the stock wording ("as quick and careful as
   any", "the other ... do the same work"), the verdict can be read off the phrasing. **Fix:** either cite a reason in the plan,
   or keep the tap only on items where finding the deciding fact is the skill. Write 2 of the 6 check stories with two
   facts that pull in opposite directions, so the learner has to weigh them.
5. **A, minor.** `items-better.js:100-106` (q-gym2): "members still leave for the $10 places, which our rent cannot let us match".
   Rent is a cost the owner can work on (move, sublet, renegotiate), so "run it better" is arguable. **Fix:** make the gap
   structural and out of reach, as in p-pizza: the chains' scale buying, or "our rent is already as low as any gym's in town".

## Lesson 3

6. **F and D, substantive. "A move that raises what customers would pay grows the value" leaves out what the move costs to make.**
   Files: `l3.lesson.js:31-34`, `items-value.js:2-4`, `THEN.grows` at `items-value.js:8`. On the value stick (ST7; Oberholzer-Gee,
   via the note), value created is WTP minus WTS. A move that raises WTP usually also adds cost: ink and staff time, trays, delivery
   driving, repairs under guarantee. It grows the value only if WTP rises by more than that cost. The "grows" items state the WTP
   rise and are silent on the added cost: p-photo (`:55-61`, whose c3 even says "We have not changed ... our costs yet"),
   q-guarantee (`:107-114`), k-trays (`:126-133`), and r-delivery (`:154-160`, delivery "free"). So the marked answer rests on an
   assumption the learner is never given, and the rule teaches the novice error the stick exists to prevent. **Fix:** reword the rule
   to "the value grows when the move raises what customers would pay by more than it adds to the cost of making it (or lowers what
   suppliers and staff would take)". Give each "grows" item its added cost in one line (for example, "the trays cost us $6 a party").
   Add one look-alike where the added cost is larger than the rise, so the value shrinks.
7. **F, minor.** `l3.lesson.js:24-25` (the wrong idea): "A higher price makes you more money only by taking it from what the customer
   kept. The value is the same." That holds only while every customer still buys; customers priced out lose the value their sale
   created. **Fix:** add "as long as every customer still buys".
8. **F, overclaim.** `l3.lesson.js:12`: "Business schools teach strategy from this one picture." The note supports one HBS course
   built on the stick (Oberholzer-Gee, secondhand) and IESE's value creation and capture framing (ST18). It does not support all
   business schools using one picture. **Fix:** "Harvard Business School's strategy course is built on this picture."
9. **C, minor.** `items-value.js:19` uses the same tap-the-settling-line shape as defect 4, which the plan does not ask for in lesson 3
   (plan.md:65). Every move note has one line that names the WTP or WTS change outright ("would pay up to $15 more"), so the verdict
   is read off the words. The real skill is inferring whether a move changes what the thing is worth. **Fix:** in the second group
   and the check, describe the move and its effect on customers or staff without naming the number, and let the learner judge
   which end moved.
10. **D, minor, documented.** The plan's `estimate` before the exact answer is dropped (`l3.lesson.js:5-6`), and the lesson records this
    as a judgement call. That is acceptable; no fix is needed beyond noting it in the plan's row for lesson 3.

The generator (`gen-value.js`) is arithmetically sound: the shares sum to the value created, and no trap value falls within $1 of
its answer.

## Lesson 4

11. **D. No pair anywhere in lessons 4 and 5.** Files: `l4.lesson.js:13-31`, `l5.lesson.js:13-31`. The plan's "How every lesson runs"
    (plan.md:45-46) and research G (Loewenstein, Thompson & Gentner; P12) call for a pair of cases with the same deciding feature on
    different surfaces, then a look-alike pair. Lessons 1 to 3 have them; lessons 4 and 5 have none, neither as a `pair` block nor as
    bracketed item pairs in the first group. **Fix:**
    - Lesson 4: pair two buyer cases on different surfaces (the insurance plans and the school district). Add a look-alike pair on growth:
      yoga (easy to start) beside a fast-growing trade with high entry barriers, where growth does pay.
    - Lesson 5: pair the biggest seller beside the core on two tables.
12. **F, the known case misstates its source.** File: `items-squeeze.js:49-55` (p-trucks, `scale: "known"`, with Paccar named in the
    reason). The item says that steel and parts come from many suppliers so "none has much hold", and that buyers are the one force.
    Porter (2008) describes heavy trucks as a hard industry on several forces at once: buyers with leverage (fleets and leasing
    companies), stiff price competition, fierce rivalry in downturns, and unions with "considerable supplier power". **Fix:** keep the
    big-fleet buyers as the force Paccar positioned against, but drop the "suppliers are weak" line or replace it with Porter's own
    facts. Then let the reason say that Paccar chose the segment where the buyer force is weakest. That is Porter's point, and the
    item also becomes a case of weighing forces (defect 13).
13. **D. Every report states the other forces as weak, so one line decides; the learner never digs into a trade where several
    forces are active.** Files: `items-squeeze.js:5`, the stock lines "come from many suppliers" or "wholesalers compete" in 13 of the 17
    reports. Porter's pitfalls box (ST6) warns against "paying equal attention to all of the forces rather than digging deeply into
    the most important ones". The expert move is to judge which active force bites most. In these reports the other forces are
    switched off, and the stock filler lets the learner find the answer by elimination of wording. **Fix:** in the second group and the
    check, write 2 or 3 reports where two forces are active and the facts (how much each takes: a 30% fee against a 5% price rise)
    decide which is stronger, and vary the wording of the weak forces.
14. **A.** `items-squeeze.js:98-104` (q-apps). The delivery apps "keep 30% of each order and decide which restaurants diners see
    first". Under the lesson's own definitions (`l4.lesson.js:18-19`), suppliers are equally defensible: the restaurant pays the apps for
    a service it cannot replace, and the apps push their price up. Porter counts channels among buyers, but the lesson never teaches
    that, and the "suppliers" feedback talks about food wholesalers, not the apps. **Fix:** add to the buyers line that a middleman who
    brings you your customers (a delivery app, a chain store) counts as a buyer. Make the suppliers feedback address the apps.
15. **A.** `items-squeeze.js:115-123` (q-dogs). "Dog owners ... can switch walkers with one tap" is the lesson's own sign of strong
    buyers (`l4.lesson.js:18`, "can switch at will"). The falling rate is explained by both forces, so "buyers" is defensible. **Fix:**
    drop c2, or make owners loyal to a walker they trust.
16. **F, out of date (US, October 2026).** `items-squeeze.js:154-163` (k-solar), a check item: "Solar installers: the
    fastest-growing trade in the state", with installs up 40% "last year". The federal 25D residential solar credit ended for systems
    installed after December 31, 2025 (P.L. 119-21; IRS FAQ). Growth in 2025 was a deadline rush, which is the "cyclical or transient
    change" Porter's pitfalls box warns against, and a learner who knows this meets a confusing case. **Fix:** use another trade (for
    example, an invented home-service trade with no tax-credit history).
17. **F, minor.** `items-squeeze.js:67-74` (p-hearing): "Three companies make almost all hearing aids". In the real trade, five large
    makers hold most of the market. Since the FDA's over-the-counter hearing aid rule (in force October 2022), drugstore hearing aids are
    a live US substitute, and the report leaves them out. **Fix:** say "a handful of companies", and either add OTC aids as a stated weak
    force or move the case to a trade without that complication.

## Lesson 5

18. **D, substantive. The core is reduced to the single line with the most profit after direct cost; distinctiveness is dropped.**
    Files: `l5.lesson.js:20`, `items-core.js:3`, the core ask at `:23`. Porter's box (ST4, ST8) asks which varieties, customers and
    channels are "the most distinctive" and "the most profitable", and which activities are "the most different and effective". The
    plan (plan.md:67) says "most distinctive and most profitable". The lesson teaches only profitability, so "the core" here means "the
    best-paying line", not Porter's core of uniqueness. **Fix:** either rename the idea in this lesson ("the line that pays most") and
    leave "core" for lessons 6 to 8, or add the distinctive question to the rule and to 1 or 2 items, where the best-paying line is a
    commodity and a smaller line is what customers come to this business for.
19. **A. The `loser-counted` trap marks a defensible answer as a slip.** File: `items-core.js:30`, with the rule at
    `l5.lesson.js:20`. The lesson counts the share over the money-making lines only, and marks the share of total (net) profit as an
    error. In customer and product profitability practice, cumulative profit is usually shown as a share of total profit, which can
    exceed 100%. That is exactly how it shows what the losing lines cost, and it is Porter's point. The note gives no source for
    either denominator, so this is a judgement call graded as a rule. The own-business work (learner view l5, line 291) also reports a
    group of lines ("2 of your 5 lines make more than half"), not the single line the lesson grades. **Fix:** accept either denominator,
    or teach share of total profit and drop the slip. Make the lesson's core and the own-work core the same idea.
20. **D, no source.** `l5.lesson.js:21`, `items-core.js:4-5`: "if the core's customers buy it along with the core, keep it but fix its
    price or cost; if nothing ties it to the core, let it go." Nothing in the note supports this rule. Also, "let it go" is right only
    when the direct costs would stop with the line, but the lesson counts "the staff time it takes" (`l5.lesson.js:18`) as direct,
    and a salaried person's time does not stop. **Fix:** mark the rule as a judgement call in the plan, or source it. Define a direct
    cost as "one that would stop if the line stopped".
21. **A.** `items-core.js:64` (q-trays) mixes kinds of line: a place (the cafe), a product (catering trays) and two ways of selling
    (the delivery app, the market stall). This breaks the lesson's own rule, "Compare lines of one kind at a time" (`l5.lesson.js:17`).
    Its note says the tray orders come through the app, so a reader cannot tell whether those sales sit in one row or in both.
    **Fix:** make the four lines one kind, for example four ways of selling with trays counted under the app.

Lesson 5 also lacks the pair (defect 11).

## Count by kind

F 7 (3, 6, 7, 8, 12, 16, 17; substantive: 6, 12, 16), D 7 (1, 2, 10, 11, 13, 18, 20; substantive: 1, 18), C 2 (4, 9),
A 5 (5, 14, 15, 19, 21). Total: 21 numbered defects. Defect 6 is both F and D and is counted once, as F.
