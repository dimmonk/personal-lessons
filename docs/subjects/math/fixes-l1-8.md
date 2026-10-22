# Math L1–L8: fixes after the first reviews (2026-10-22)

Answers `review-learner-l1-8.md` (L) and `review-research-l1-8.md` (R). Each fix is at the root.

## Engine and validator
- **Three-number lists that became constants (R1).** The five math parameters are fixed: recipe servings (`si` index), tip tax [5, 8, 1],
  discount-then-tax [6, 8, 1], floor box coverage [18.5, 22.5, 2], mulch depth [2, 4, 1]; `number-pure.mjs` checks every math parameter.
  The validator rule for it comes from the Stats clone at integration (V75), not from this clone.
- **"None wild" (plan; R13).** A `number` question can name a slip, `wild`, for an answer more than double or less than half the right one. Every exact answer in Math carries it, and the checks of L3, L5–L8 and L4 pass only with `{ slip: 'wild', max: 0 }`. Pure tests cover it, and V74 has a seeded fault for an unknown slip name.
  - Limit: a typed number that matches a named slip (for example, the decimal point in the wrong place) gets that slip, not `wild`.
- **One rough-answer rule (L S1, R2).** Every rough answer is right within a fifth (`ROUGH_TOL`, kit.js). Every worked rough answer is within a fifth on 400 seeds; a test holds this.
- **Learner view.** The "You said" line now uses the answer's own unit (L S2). Count answers no longer have a unit that could say "1 cans" (L S3).

## Lessons
- **L1:**
  - "Subtotal" is defined.
  - The gap rule is stated: more than about $3 is a mistake. Some wrong bills now miss by $6–8.
  - The split rule now says "the nearest number" the group divides.
  - Check prompts no longer name the method to use (R14).
- **L2:**
  - Friendly totals are the nearest multiple.
  - Hour totals sit near one listed fraction.
  - A new "make the sum simpler" problem, four weekly bills (R12), is in the practice and the check.
  - Plain check prompts.
- **L3:**
  - The rule for which way a conversion goes is taught, with a worked currency example, before it is asked (L blocking).
  - Rough answers are friendly and nudged.
  - Unit changes have a figure.
  - The check has "none wild".
- **L4:**
  - The roast is gone (R6). Gym and coffee-beans stories replace it; the beans are seen only in the check (L).
  - Each question asks "Does the cost scale with the …?" for its own amount (R7).
  - Rough answer and a table from 0 up added (R8).
  - "Less than double" wording (L).
  - The check rule now says what it counts.
- **L5:**
  - The tip's rough answer is nudged (R10).
  - Rent-share percents stay where a benchmark is within a fifth.
  - A decimal-percent multiplier line (1.045) is added to the teaching.
- **L6:**
  - Benchmark rough answers for the price before tax and for up-then-down (R11).
  - Figures for all five kinds (R9).
  - A torn receipt replaces "tax included" on a card statement (R16).
  - Savings rates move by 1 point at most and carry no notice line (R15).
  - The teaching says tax is charged on the sale price.
  - "Less", not "a bit less".
- **L7:**
  - Workings are computed by the code and use only keys the calculator has: no brackets, the floor added with M+ (R5, L).
  - The picture shows the room, not the walls laid flat (L).
  - Two coats are taught.
  - Edging never has area equal to its distance around (R4).
  - What to buy is right only at the exact rounded-up count.
- **L8:**
  - Workings are unrounded, with depth as inches ÷ 12.
  - The mulch order must be the exact half yard (L).
  - The distance around a circle is named in the teaching.

## Not done (no source, or out of scope)
- A waste allowance for flooring (L7 point 4): no source in `docs/research/math.md`, so no fact was added.
- An L5 question that names no type, and an L4 question that gives two totals and no price list: not built. Noted for the next review.
- The five "owner must decide" topics: not built.

## Checks run
- Validator: 813,228 checks passed.
- `npm test`: exit 0, 198 seeded validator faults, 554 number checks.
- Browser checks X25, X13, X20, X48, X51 (run directly, `E2E_SKIP_FAULTS=1`): 335 passed.
- L1–L8 walked at 344, 752 and 1440 px, light and dark: 7,852 checks passed.
- Learner views regenerated.
