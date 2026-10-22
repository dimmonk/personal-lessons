# Scams, final round: what was done about the reviews (2026-10-22)

Reviews: `review-learner-l0-6-round4.md`, `review-research-l0-6-round4.md`, `review-learner-l7-12.md`, `review-research-l7-12.md`.

## Root fixes (the rule, plan.md and the rule screens)

- **"Known only online" defined** (research L7-12 D1): a friend, a match or a contact from a forum or game never met in person; not a stranger dealt
  with once, such as a buyer. In plan step 4, L3's rule screen and L11's. The overpaying buyers stay "leave it" with no "What else".
- **"Exactly what I agreed" includes how the amount is worked out** (D2): plan step 2, L3 and L11 screens. Mateo now has a set $60 a month; Ana's
  context shows the bill you both see.
- **Family check** (round 4 D1, D2): plan step 3 and L6 Step 4 now say what the call settles: the person answering on the number you have, in their
  own voice, with a story that fits; if anything is off, call someone else in the family (S23). L6 x-rosa turn 1 "Stop replying" has its own ending.
- **Real-world test paragraph** matches L11 as built (one call that pushes, one you placed yourself).

## Lessons 7 to 12

| Finding | Done |
|---|---|
| D3 friendly claim | L9: "Sounding like a real company is one of the commonest tricks, and being friendly is part of the script." |
| D4 store-card case | Replaced by a leak at your health insurer (number out, not used). Note S34 records why used-number cases are left out. |
| D5 credit vs debit | Wallet item says debit card; L12 Step 1 gives both ($50 cap on credit). |
| D6 "get them to reverse" | "request that they reverse it" / "request a refund" everywhere in L12 ("ask" is a word the app refuses). |
| D7 device first step | "Make a new password" is no longer offered as a first step on device losses. |
| D8 guessable next two | Each item now offers a real step from another kind of loss, with feedback naming the kind. |
| Polish | "insists you pay in"; plan step 5 "asked of you"; reply-type options with stock reasons swapped; L9's check alert replaced by a new-card email; L10 code banner from the bank; L11 refund chat outcome no longer mentions $810; reserve account line; Step 3 IdentityTheft.gov wording; L12 check 11 feedback. |
| Learner stalls | L9 "you made the purchase, but did not start this text"; "in writing" taught in Step 1; crypto receipt number; phone mentioned in L12 check 12. |
| Learner pattern | Scenario-specific wrong ways (invoice number, tenant page, jail number, IRS payment line), with their own reasons through a new optional `alt.then` (items-build.js; no other output changed); L10 right replies worded differently; L10 buyer's hold reply weakened; no-group "What else" option for dating and photo-app contacts. |

## Lessons 0 to 6 polish (round 4)

L0 "Your ticket was $30"; L2 check 15 and item 8 reasons; L3 item 2 time; L4 Quillon text without a link; L4 Step 3 detail "after you asked at
lunch"; L3/L4 "Leave it" outcomes name the cost; L4 Marcus third option; L5 contexts say the app is on the phone; L6 staff-app wording; L6 refund lines
"who calls you wants a fee up front"; the note's S28 quote corrected.

## Not done

- "Keep every message" in L12: the source quoted is for gift cards and receipts only, so only that is taught.
- The learner-view tool labels calls you made as "An incoming call"; it is the review tool, not the app.
- No revs raised: none of these lessons has been deployed since its last rev.

## Checks

`node tests/validate-lessons.mjs` before and after `npm run lock`: 898,008 passed. `npm test`: exit 0 (4,116 pressure checks). `E2E_SKIP_FAULTS=1 node
tests/e2e.mjs X41 X42 X48 X51`: 256 passed. Learner views l0 to l12 regenerated.
