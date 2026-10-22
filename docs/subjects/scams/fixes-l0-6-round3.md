# Scams, lessons 0 to 6: round 3 fixes (2026-10-22)

Reviews: `review-learner-l0-6-round3.md` (D1 to D6, polish) and `review-research-l0-6-round3.md` (A1 to A4, B1, C1, D1, D2, polish).
L0 to L6 are now at rev 4. Changes to the shared helpers are logged in `shared-helper-changes.md`.

## Deciding defects

| Defect | Root fix |
|---|---|
| Research D1 / learner D1: two identical options in L3 check 25; wrong caller-ID reason in L3 item 14, L4 item 3, L5 item 3 | `theirsHow` in `items-build.js` reads caller-ID wording ("phone shows", "called from") first. s-grandson's own wrong way is now "Get his new number and call that". `pressure-pure.mjs` now fails any question in any item whose options repeat a text (verb forms normalised) or a reason. |
| Research D2: L5 check 19, unrequested code | The context now carries the evidence: the third code in ten minutes, and you have not tried to sign in. That is the push-bombing pattern (S29), so checking (change the password in the app) is the one right answer. The leave line says one stray code can be ignored. |
| Learner D2: "as you asked" scams | Each such situation states what you remember: "You have not been in touch with them", "You have not asked them anything", "You have not called it today". L3's rule adds: a message that says "as you asked" is only its word; what counts is what you remember doing. |
| Learner D3: L3 Q16 call-back | Now a call you made to the number on your insurance card ("You called"). The same change is made to L4's real Kestrel call and its teaching pair. |
| Learner D5: L6 raffle | The context says you often eat at the café and wrote your number on the ticket for the draw, so you started it. |
| Learner D6: "What else" right answer always last | Its place now varies with the item id (first to last). The test asserts at least three different places. New `tellAlt` gives a fitting wrong answer where there is no group (report the profile to the site; block him and keep it to yourself). This also fixes research C1. |
| Learner D4: hanging up always right in calls and chats | Two real exchanges are added to practice. L5 x-callbank: you call your credit union on the number from its letter, give your date of birth and confirm your address (reading a code is still wrong). L6 x-rosa: your sister's chat asks for money; you call her saved number, she answers, and you send it (stopping is wrong, sending unchecked is the habit slip). The test asserts real exchanges in L4 to L6 whose right end is not hanging up. |

## Minor items

| Item | Done |
|---|---|
| Research A1 | The government address comes from a letter from the office ("most end in .gov"). |
| Research A2 | The mug item's context says Android. |
| Research A3 | Now "a stolen phone sends the same text". |
| Research A4 | The search reason now reads "their page or number". |
| Research B1 | Ms. Ivers, Dunmore and Ms. Tran each have a look-alike in place of a second copy of the message's channel. Eli keeps two chat-given options, because a look-alike there would be contrived. |
| Research polish | The L0 caller is "never contacted"; the staff app wording is fixed; L2 reasons no longer mention a reply that is not offered. |
| Research polish: L4 "You called" call | It is drawn by the engine as a call form. The detail says "You called". |
| Learner polish: L5 camera wording | Fixed. |
| Learner polish: L2 family word | Said in full. |
| Learner polish: L1 courier text | It now says trusting a sender comes later. |
| Not done: L1 timing (15 s) | Kept. The plan sets it. |
| Not done: L3 items 5 and 6 lead-in | The reason already says "word for word, on purpose". |

## Tests

- **My part passes.** `validate-lessons` passed after `npm run lock`, and `pressure-pure` passes for every L0–L6 item. All other unit tiers pass.
- **Not mine:** since then a V46 lock mismatch has appeared, from the other builder's later edits.
- **Browser checks** X41, X42, X48 and X51 (run with `E2E_SKIP_FAULTS=1`): 255 of 256 pass.
- **Failures from the other builder's L7 to L10 work-in-progress:**
  - `pressure-pure`: the lesson list, plus "my"-wording failures on 17 L7–L10 items and one L8 consequence (l8r-quote-real).
  - X41: the count of parts not built yet.
- **Learner views** l0 to l6 regenerated.
