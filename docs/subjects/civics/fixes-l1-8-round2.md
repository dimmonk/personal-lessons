# Civics L1 to L8: fixes after review, round 2 (2026-10-22)

From `review-learner-l1-8-round2.md` and `review-research-l1-8-round2.md` (and `scratchpad/civ-r2/cues2.mjs`).

## Wrong fact (F1): states' powers and federal money
The president row of L5's table now says a power of the states (schools) cannot be ordered from Washington, with or without Congress, while
Congress can attach conditions to money it gives, and an agency enforcing them acts on a law that allows it. Source: new C6a in the research note
(*South Dakota v. Dole*; *New York* as quoted in *Printz*; *Printz* part V, read today). Taught by a third pair (a 9 a.m. order beside lunch money
with a fruit condition) and a review story, `l5-meals` (theirs), which replaces `l5-army`. `l5-nine`'s reason: "cannot order a state's schools".

## Guessable by a surface cue (G1 to G3)
- **The check that is not negated (G1).** Stories now name checks that are only talk in positive words ("some said they might sue", "one senator
  mused about an amendment", "the next election is in 2029"), and live checks are often said with "not" or "cannot" ("The president has not signed
  the bill and says she will veto it"). Talk stands before, after or on both sides of the live check. The reviewer's predictors now score 16% and
  22% against 25% by chance; first and last check word 38% and 34%.
- **The course's papers in the results (G2).** Known papers are now also wrong picks (an opinion column, a group's press release reprinted, a
  group's statement printed as sent); one right result is an unfamiliar outlet's named reporter, one the council's own minutes. The predictor
  scores 38% against 25% (3 of 8).
- **"Have I checked the source?" alone (G3).** Eight stories from papers the learner checked are alarming by what they claim (all trains banned,
  all soda banned, cash ended, every state park closed, federal rangers arrested, a $1,000 fine on shoppers, free emergency care ordered), never
  by a timing word; every known paper carries stories to take and to check, at every level. The reviewer’s script scores it 67% against 63% (the leave-one-out test, 29%).
- All these predictors are now in `tests/civics-cues.mjs` (38 checks, all within 15 points of chance).

## Arguable answer (A1): `l8-sidewalk`
The story now says the council's rule, made under a state law that lets cities make parking rules, bans sidewalk parking and sets a $50 fine; the
mayor orders tickets. Verdict theirs by L5's city row, which now also says carrying out a city rule already made under that power is theirs.
Source: an ordinary story from a checked paper, so take it. "Alarming or sudden" is defined in the rule L7 and L8 both print: a big change to many
people's lives, money or rights, out of nowhere; the usual work of government is ordinary even when it starts soon. No timing word marks any
story; `l8-airfares` became `l8-hospitals` (plainly alarming).

## Learner polish
L1 names the president's listed powers and the vice president's succession; L2 points out "citizens" for who elects senators; L4 "are" after a
plural actor; L5 worked step no longer repeats the reason, and `l5-cars`'s Congress-silent line explains itself when tapped; L6 veto row names a
president, governor or mayor; L7 reasons match the results shown, and the slip names the original record; L8 check says each story counts only
with all five answers right.

Not done (engine wording, not civics data): the generic "deciding words" line on recall steps and the "Level of government" results line on
lessons with no levels; the D.C. and territory notes on Q23, Q61 and Q62.

## Results
`node tests/validate-lessons.mjs`: 837385 passed after `npm run lock`. `npm test`: exit 0 (1473 Civics checks, 38 cue checks). X45: 96 browser
checks passed. Learner views l1 to l8 regenerated.
