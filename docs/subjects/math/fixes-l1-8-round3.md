# Math L1–L8: fixes after the third reviews (2026-10-22)

Answers `review-learner-l1-8-round3.md` and `review-research-l1-8-round3.md`. Changes to the shared engine are logged in `shared-helper-changes.md`.

## L4: the deciding defect
- **The earlier cost is now on the price list itself**, in a bold last line such as "Your last ride, 3 miles: $11.25". The "does it scale" choice can now be decided from what is on screen, including on a list that does not show the fixed part. The teaching and the two hidden-list questions in the check use that line.
- **Only real lines are named:** the "does not matter" line in the working now says "The other lines do not matter", instead of naming a row that may not be shown.

## Other defects
- **L7, paint:**
  - Rooms are drawn so that one coat rounded up never equals two coats rounded down. The "one coat" slip and the "rounded down" slip are therefore each caught and named right; a test checks this on 400 seeds.
  - Coverage is now 250–300 square feet a can, so rooms need 2 to 4 cans. The document title is now "Room walls".
- **L8, check:** the check's rugs and round bed come from sizes the practice never draws (`pool: 'check'`: quarter feet for a rug, half feet across for a bed). A check question is never one already answered in the sitting. The round bed may now use bags of 1.5 or 2 cubic feet, so a fraction under a half is always reachable.
- **L2, the nudge:**
  - For the four weekly bills, the nudge is shown only when it can be seen (all four amounts above, or all four below, the friendly amount). It is sized by the rounding: about $X each, so $4X more or less.
  - When some are above and some below, no nudge.
  - "One up, one down: they roughly cancel" is now taught on the teaching screen.
- **L5 and L6, rough answers and the lessons' own slips:**
  - **Engine:** a rough answer's band may hold a named slip; when the typed number is nearer the slip, the slip is named. V75 refuses such a trap within 4% of the answer, where a rough answer cannot tell the two apart. Seeded fault and pure tests added.
  - **Named slips added to rough answers:** tip on the total; change over the new rent; percent of the price after (L6 before the sale and the "more" sign); up and down cancelling.
  - **Ranges changed** so the slips sit at least 4% from the answer: discount 25/40/50%; "more" signs 25/50%; up and down 25/30/50%.
  - **Raise and sale:** the rough answer is now asked of the part that changes (the raise, the amount off), so "change nothing" is far outside the band. Neither is in the group with the disagree line any longer.
  - **Tax off the total and percents added** land within about 1% of the right answer, where no rough answer can tell them apart. Their look-back now multiplies back, and L6's teaching says so, with the backward rules (÷ 0.75 is plus a third, and so on).
- **Half-cent answers:** an answer exactly half a cent (for example $121.35 ÷ 6) is now right rounded either way (engine `withinTol`, with a pure test). The split, share and tip answers stay unrounded so this applies.
- **L3, recipe:** recipes now always scale up, so "more people need more" holds and adding the difference is a real number of cups. Scaling down is the same move, met in money and units.
- **L3, currency:** rough answers are whole dollars. The capitalized "The Price" in the unit-change working is fixed.

## Not changed
- L6's band stays one fifth. It is the one rule taught; the close slips are caught by the exact answer and the look-back instead.
- Two check rugs could still draw the same size: 1 in 11 per check.
- The five topics marked "owner must decide": not built.

## Checks
These were run in the clone, with the L9–L15 builder's files present and listed.
- Validator: 837,054 checks passed across 101 lessons.
- `npm test`: exit 0, 200 seeded validator faults, 887 number checks.
- Browser checks X25, X13, X20, X48, X51, run directly with `E2E_SKIP_FAULTS=1`: 336 passed.
- L1–L8 walked at 344, 752 and 1440 px, light and dark: 7,972 checks passed.
- Learner views regenerated.
