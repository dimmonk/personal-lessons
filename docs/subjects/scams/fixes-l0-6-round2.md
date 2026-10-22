# Scams, lessons 0 to 6: round 2 fixes (2026-10-22)

Reviews: `review-learner-l0-6-round2.md` (by lesson, numbered) and `review-research-l0-6-round2.md` (A1 to A7, B1 to B3, C1 to C2, D1 to D4).
Lessons L0 to L6 are at rev 3. Plan: "The rule", step 3, has a round-2 line (government agencies, no card or bill, family) and a paragraph on how
questions are written. Research note: S31 (FTC government impersonation) and notes on codes, approvals and Android. Helper changes for the
L7 to L12 builder: `shared-helper-changes.md`.

## Root fixes

1. **"How do you check?" answered by elimination or by "my"** (learner L2-1, research D1, D2, C2). In `items-build.js` the default third option is
   no longer "Reply and check with them" (it repeated six items' own wrong move). It is now a way that looks like yours and is not: the number your
   phone shows for the call, or a number you find by searching on your phone (S3, S28). Every wrong option in L0 to L6 is worded as the learner's
   own act ("My reply to the text", "The page the link opens on my phone"), and some right ones have no "my" ("Penhallow’s app", "The number
   printed on the card"). Lesson 2 has a look-alike in 12 of its 18 questions. `pressure-pure.mjs` asserts no two options are the same move and that
   a wrong option is also worded as the learner's own.
2. **Stems that state the answer, and real messages that always echo you** (learner L3-1, L3-2, L4-1). Situations say only what the learner would
   know: what they did, which accounts they hold, who is in their phone. "You did not start this" and "You did not buy anything today" are gone
   ("You have been at home all day", "You are cooking dinner"). Seven real messages lost their echo ("as you asked", "like you said"), and four
   scams now echo (g-call "calling you back as you asked", s-held, g-mug-fake, k-crypto-fake).
3. **Government callers** (research B1). The rule now says a government office counts as one you deal with: hang up and call it at a number you
   know, from a letter or its own website (S31, FTC, quoted). L2's police worked example follows from that, and its working says so.

## Learner review

| Item | Done |
|---|---|
| L0-1 | Leaving the real alert now says "If the card really was declined, you would not find out until it is declined again." |
| L0-2 | The prompt says "Only your first step counts." |
| L1-1 | Not changed: the list is five separate lines in the app. The learner view's markdown runs them together. |
| L1-2 | The first screen now says "A code works like a password." |
| L1-3 | "What does it want?" comes first. The tap opens only when the message wants something. |
| L1-4 | The salon "nothing" message has a link and a date. |
| L1-5, L1-6 | Removed "Same sender name" and the "matters later" lines. |
| L1-7 | Noted. The second line names no payment. |
| L2-1 | See root fix 1. |
| L2-2 | Own-ways list rewritten: the family word is "agreed face to face. A caller who cannot say it: hang up, call the number you have." The reserve grandson question now uses it. |
| L2-3, L2-4 | The list says where each way comes from (card, bill, letter, the app from your own app store). With no card or bill: the company's app; for a government office, its own website, typed. |
| L2-5 | Covered by L2's first screen: a number your phone shows can be faked. |
| L2-6 | The "may well be real" suffix is removed from every option and said once on the first screen. |
| L2-7 | Not changed (low priority). The family word is now used in a question. |
| L2-8 | The Dunmore stem says you have an account on its website, with the address on your bills. |
| L2-9 | The screen says "In the check, one pick of what the message gave you fails it." |
| L3-1, L3-2 | See root fix 2. |
| L3-3 | The fake alert's reason says it is "word for word the real alert, on purpose". |
| L3-4 | The rule screen says why checking beats leaving when the name is one you know. |
| L3-5 | The dentist now asks through a link in an email. |
| L3-6 | The rule screen says why an online-only friend does not count: "their name, photos and story all came from them". |
| L3-7 | The pop-up line is removed from L3 (L4 teaches it). |
| L3-9 | Changed to "Many of them are real." |
| L3-10 | Changed to "The Lumenfall app." |
| L4-1 | See root fix 2. |
| L4-2 | The rule decides it: the company is named and you have an account, so you check. The bank-app check is now "the Penhallow app already on my phone". |
| L4-3 | Screen 2 says pressing Allow hands the caller your screen. |
| L4-4 | Screen 3 says the file you requested, from that person, in the form you expected, is safe enough. |
| L4-5 | Not changed. Replies already rotate by turn in `exItem`, a shared helper I left alone. |
| L4-7 | Kept as the FTC's own words, scoped to "about a problem with your computer". |
| L5-1, L5-2 | A `howPrompt` ("How do you check, and put it right?") is added where checking means denying and changing the password. The L5 screen says this is "checking first". |
| L5-3 | The screen says "Approve lets whoever is signing in through." |
| L5-4 | Not added. PicGlow and GameZone are mismatched permissions already. |
| L6-1 | Covered by k-course-real (a real, unrequested offer you leave). |
| L6-2 | The job email's odd request now comes first. |
| L6-3 | The reason says an employer needs your bank number for pay, inside its own app. |
| L6-4 | Screen 1 says crypto sent to their wallet has none of a card's protections. |
| L6-5 | "What else?" has a wrong "tell" option: "the friend from the same group". |

## Research review

| Item | Done |
|---|---|
| A1 | Changed to "someone is trying to get into that account, often with your password" (L5 screen, two reasons, the leave line). |
| A2 | Family word: hang up and call them on the number you have. The line no longer says such a caller cannot be family. |
| A3 | PicGlow, GameZone and the mug app are now on an Android phone, and the screen says "On an Android phone". |
| A4 | "Settles it" is dropped. The FTC's second move (check with someone else in the family) is added to the screen and to k-sister-real. |
| A5 | The baseline case now says you read the caller your sign-in code. |
| A6 | The carrier "settings update by link" is replaced by a price-change text. |
| A7 | The driver now comes from the maker's site, at the address on the box, as an on-page pop-up. |
| B1 | Government ruling added to the rule (S31). |
| B2 | See A1. |
| B3 | g-security-fake is now a pop-up using the name of Norvale Antivirus, which you pay for. Right answer: check in its own app. |
| C1 | Not changed (the engine's subject-wide result split, accepted in round 1). |
| C2, D1, D2 | See root fix 1. |
| D3 | Eli's chat now gives a number. |
| D4 | That option is now "Call back the number my phone shows for the call". |

## Tests

- **My part passes.** `validate-lessons` before and after `npm run lock`, every other unit tier, and `pressure-pure` for L0 to L6 all pass.
- **The other builder's in-progress L7 files fail**, and I did not edit them:
  - V47: `items-l7.js` is not in `index.html` or `sw.js`.
  - V50: "sets" in l7x-power.
  - V62: "case" in l7p-sheriff-fake and l7x-warrant.
  - `pressure-pure`: the lesson list now includes l7, and five l7 "how" questions fail the new "my" assertion.
  - X41: the subject screen now shows five parts not built yet, because L7 exists.
- **Browser checks** X41, X42, X48 and X51, run directly: 255 of 256 pass. The one failure is the X41 subject-screen count above.
- **Learner views** l0 to l6 regenerated.

The lock now also covers the in-progress L7. Re-run `npm run lock` when L7 settles.
