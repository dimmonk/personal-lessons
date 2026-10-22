# Statistical Claims, lessons 6 to 9: fixes after the first reviews (2026-10-22)

Answers `review-research-l6-9.md` (ids 1–8 and the polish) and `review-learner-l6-9.md` (D1–D18). No L0–L5 file was touched; shared changes
are logged in `shared-helper-changes.md`.

| Defect | What was done |
|---|---|
| R1, luck dropped for trials | The shared option is now "Only luck: the groups were split by chance". L7's screen: a split by chance leaves only luck, unlikely with a few hundred people and a clear gap, likely with a handful (as with L6's margin); the verdict list adds too few to rule out luck and numbers that say less (D6). Every trial states its size (q-pravel 2,000); reasons say "most likely". Research note T9 gains Hill's starting point (chance) and Wakeford. |
| R2 / D15, the six questions never listed; paraphrases refused | L9's first screen lists the six in the words the answer accepts, with the four ways to size (the 1,000 people for a test, D17). The recall moves to the end of the group. Accepts widened (compared to what, is it fair, who counted, who was asked, what else could explain it, over how long, what is the verdict…); a test runs 15 lesson wordings through `recallMatch`. |
| R3, claims resting on two sentences | q-elmwood and r-dunmore put the count and the usual in one sentence; q-harbor's small print holds this June and last June and is the right tap. |
| R4, q-fairfield's cause | "Recycling is working:" removed. |
| R5, q-limits rule conflict | L6's screen: a fault the text shows decides it even when it leaves something else out. |
| R6, trials always hold in checks; "ever" always cannot tell | L7 check: k-focus (12 students, luck) replaces k-trees; L9 check: k-growmax (6 plants, luck). L8: q-stepup and L9's k-ferry are "ever" claims that hold (the chart covers every year there is); q-water (totals, no sizes) and k-techmart (no other store) cannot be told for other reasons. Tests assert each. |
| R7, the right wording is the longest | 27 distractors lengthened: the right wording is now longest in 19 of 88 (was 48); a test holds it under 40%. Closeness to the headline: 44 of 88. |
| R8, near-copies in checks | Replaced: k-fenmore → k-nutrapet (dog food, a news story), k-phoneprice → k-techmart, k-adopt reshaped (from-zero, by half), k-pike → k-ferry, k-corliss → k-bikeshare, k-novira → k-lockwell (an ad that holds), k-erwait → k-growmax. Headers name the real areas. |
| D1, D2 | q-gym's scanner line has a note; q-office puts the 2,000 and the 150 in one sentence. |
| D4 | L6's screen: a lead holds only when bigger than the two margins together, with an example. |
| D5 | Each cause question has its own specific wrong explanation; the two shared options are right and wrong about equally often. |
| D7 | k-hawks: the tapped sentence holds 3 wins and 8. |
| D8, D9 | The change box is "__%" with "up or down" in the prompt; prompts ask first-to-last or plain A-to-B, never the fair start, and no "Type 0". |
| D10, D14 | Lines that only repeat the claim say so; the height trap says "how big the change looks". |
| D11 | L8 lists triples (200%), a third, a fifth, a tenth. |
| Polish | Restwell mattress → Dreamway, Calmora → Serenol, Clearview → Lensguard; "most likely between 42% and 48%"; need lines "would narrow it; a split by chance would settle it"; q-teens is a report that fails. |

Kept: D16, the size box only where a claim gives a count, a risk, a test or a change, as the plan's real-world test asks (q-zentra now
types its change); D13 and D18 (feedback already decides them). r-fallguard's distractor stays `mixed-claim`: the claim question's
slips are the claim's own.

Checks run: validator, `npm run lock`, validator (856,084 pass); `npm test` exit 0 (Stats 7,847 + 535; 194 seeded faults); X30 and X39 with
`E2E_SKIP_FAULTS=1` (196 pass); learner views l6–l9 regenerated.

## After the final review (`review-final.md`), 2026-10-22

| Defect | What was done |
|---|---|
| D2–D5, the luck call (root) | `tests/stats-lessons-pure.mjs` now reads every fixed trial in every lesson and in reserve (any text with a coin toss or a lottery fails until listed): shares need two standard errors at the stated group size, averages 100 or more in each group and a 5% gap, luck items 10 or fewer, and trials with no size may not call luck unlikely. Fixed: k-hens 360 hens (180 each), k-lockwell 12,000 homes, q-pravel 10,000 adults, r-fallguard 120 homes with about 9,000 residents. |
| D1, k-tickets | The fair-reading option is replaced by "Bayside sells more season tickets than the other stadiums in its league". |
| P1 | gen-risk prints its counts with commas (`aText`, `bText`). |
| P2 | "went" in q-gym's option. |
| P3 | k-saturday, k-growmax and q-phones split their claim sentence from the number sentence (with "That repeats the claim"). |
| P5 | The bar-height trap is rounded to a whole percent. |
| P7 | q-pravel's distractor says "half". |
| Kept | P4 (q-westgate's feedback states the fixed claim); P6 and the headline-overlap cue (mild, not deciding, the reviewer's own call). |

All ten Stats lessons are now `live`. Validator 856,099 pass after the lock; `npm test` exit 0 (Stats 7,911 + 535); X30 and X39 (196), X48 (30), X51 (26)
with `E2E_SKIP_FAULTS=1`; learner views l0–l9 regenerated.
