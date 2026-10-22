# Civics L1 to L8: fixes after review (2026-10-22)

What the learner review (`review-learner-l1-8.md`) and the research review (`review-research-l1-8.md`) found, and what was done at the root.

## One rule per decision (A1 to A4, D2, D3; learner 8 to 10)

Each news question has one rule, written once in `items-shape.js` and stated on the screen of the lesson that teaches it; lesson 8's table
repeats each in the same words. `tests/civics-pure.mjs` checks that every item follows it.

- **Theirs to do?** Congress: listed powers. A state: what was not given away, never a federal-only power. City, county, school board: only what
  the state hands down. President or agency: own powers and the branch's own offices are theirs (new C7a, Art. II); outside the branch, what Congress
  said; a power of the states never, whatever Congress said. "Not settled" only for the federal executive (no source carries Jackson's zones to
  governors). "In court" only when a court has the lawsuit now, and only on stories the table cannot settle (a home-rule clause, a disputed statute).
  Fixed items: `l5-cars` is now theirs; `l8-electionday` became `l8-offices` (a governor running state offices: theirs); `l5-nine`'s reason rests on
  whose power it is; `l5-rent` and `l8-fee` are now genuine open questions before a judge; the national-park pair says "federal land"; a second pair
  contrasts the president's own offices with private stores.
- **Who can stop it?** "Which check does the story show at work?": the one under way or set to happen; a second check a story names is far off or
  ruled out. The sixth check is now "a higher level's law: federal over state and local, state over local" (`l6-blowers`, `l8-bags`).
- **Who is telling you?** One rule in L7 and L8: take it as it stands only with a source already checked (or the original record you reached
  yourself) and an ordinary claim; otherwise check. Marked a judgement call in the research note.

## Guessable answers (G1 to G4, D1; learner D1 to D3, 13, 14)

- Papers are handed out by level in turn (`civicsPress`); L8's known papers carry stories at every level, unknown sites have paper-like names.
- Deciding lines vary in place (first, second, third, fourth) and wording: some are the act alone (the table decides), "only" and "lets" appear in
  stories of either verdict, "no law" in a not-theirs story, a threatened lawsuit in a theirs story.
- Headlines tell the act, never the check; 28 of 32 stop stories carry a line about a check not at work, before or after the live one.
- L7: no "(own site)" tags; the right result stands 1st to 4th twice each; lures look official (.org, seal, "independent", "nonpartisan",
  "official") or like papers; take-or-check puts both halves of the rule against each other (a known paper with a sudden claim, the county's own
  page, an official-looking site you never checked).
- `tests/civics-cues.mjs` scripts all the reviewers' predictors; each now scores no better than chance plus 15 points (most at or below chance).

## Wrong fact (F1)

`l8-bridges`: Congress passes a spending bill; the deciding line is "the power to tax and spend". No budget veto anywhere.

## Learner stuck places (4 to 12) and polish

- L1: the table names the Cabinet, the federal departments and agencies, Congress's three listed powers and the courts; a line gives the list's
  reason for three branches before Q15 is asked. L2: Cabinet positions named, the Electoral College and the Great Compromise explained, every
  "why" in the list's own words (the app accepts only what the list prints), "a majority of five", "with the Senate's approval". L3: the federal-
  and state-only powers in the list's words; a screen says where to look up each own answer (USCIS's page, senate.gov, house.gov, usa.gov; C1b).
- L4: school board, public works and parks in the table; four local stories name the president, who did not act (the wrong idea tempted).
- L5: the president row now settles Item 1; L6/L8 "A court" after a ruling says the highest court has ruled; L6 Item 2 (gas tax) leaves only the
  voters live; amendment row "both houses"; one paragraph helper shared by prose and articles.

Not done: a Canada comparison in L1 (learner 18, optional); the strict 16 of 17 and 18 of 20 recall marks stay (plan: 9 in 10).
