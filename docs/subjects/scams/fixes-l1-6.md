# Scams, lessons 0 to 6: what was done about the two reviews (2026-10-22)

Reviews: `review-learner-l1-6.md` (numbered 1 to 29) and `review-research-l1-6.md` (A1 to A10, B1 to B11, C1 to C2, D1 to D5).

## The root fix: one rule

Most defects came from five loose lines that each lesson read its own way. They are replaced by one rule, stated once in `plan.md` ("The way of
thinking: the rule", dated change line) and on lesson 3's first screen, and every item of lessons 0 to 6 was rewritten to it:

1. What does it want? (money, a sign-in or code, your details, your phone or computer). Wanting none of these: nothing to decide. Such messages are
   asked only in lesson 1, never as act/check/leave, because doing and leaving them are the same.
2. Did I start it? (it answers something I just did through my own way, or is exactly what I agreed beforehand) → do what it says.
3. If not: do I have an account with them, or know the person? (the name it uses decides; the FTC's own test, S2) → check first, a way I already had.
   Holds for real messages and for family and friends (S23).
4. Neither → leave it. Someone known only online does not count as known (S27); if they want money, also tell someone you know in person.
5. The settling requests never make "do it" right; the action is still 3 or 4.

The question forms follow it: "How do you check?" exists only on items whose right answer is check; "What else do you do?" (tell someone in person)
only after leaving someone known only online who wants money. `tests/pressure-pure.mjs` now asserts all of this on every item.

## Learner review

| # | Defect | Done |
|---|---|---|
| 1 | L1 wanting line always last | Lines moved: first, middle (three-line messages) and last; test asserts each at least three times. |
| 2 | "Verify your identity" arguable | Worked text now "Sign in at the link now". |
| 3 | Real bill "wants money" unexplained | L1 first screen: naming comes first; a real bill wants money too, deciding comes later. |
| 4 | L2 right option always the only one not from the message | Wrong ways now include a number a web search shows (S28) and the page a link opens (S4); test asserts at least four such items. |
| 5 | L2 checks real shipping notice, L3 leaves it | No message that wants nothing is checked or left anywhere; all L2 messages are ones the rule says to check. |
| 6 | Secret word untaught | L2 screen: agree it face to face; a caller as family who cannot say it is not family (S4). |
| 7 | Leave vs check on real wants-nothing | Root rule step 1; such items removed from L3, L4, L5, L6, L0. |
| 8 | Dentist call arguable | Replaced by a dentist text wanting your member number: your dentist, not started → check. |
| 9 | "Of mine" undefined (pop-up about my computer) | Rule step 3 names the sender test: an account with them or knowing the person. |
| 10 | Same "how" distractors; unclear when it appears | Third option varies (reply, search, transfer, link, page); the "how" question exists only when checking is right. |
| 11 | Online-only case untaught before L3 check | Rule step 4 on L3's first screen; practice item g-online (with "What else") before the check. |
| 12 | Checking penalised | Kept only where the rule says "started it"; feedback names the step ("Not needed: you asked for this code a moment ago"). |
| 13 | Absolute claims in L4 | Kept, scoped to the FTC's exact words ("A real security pop-up never asks you to call a phone number"; tech companies won't call you first about your computer), S11/S28. |
| 14 | Leave items offer an own way to check | Leave items have no "how" question. |
| 15 | Call-back marked right with no identity check | Context now says you called the number on your bill and asked for the call back. |
| 16, 21 | "Hold" replies in calls read as right endings | Hold replies now stay on the line (ask his company, get a number from him, offer a photo), all wrong by the rule. |
| 17 | "A person I know" for unknown senders | Removed with the leave items' "how" question. |
| 18 | L5 courier: "nothing of mine", then an order page | Leave items have no "how" question; context says you never used Quillfeather. |
| 19 | Same code request, two answers | Rule step 3 explains it: your bank's name → check; a stranger → leave. Stated on L3's screen and in each reason. |
| 20 | "New phone" message both scam and safe | Wants-nothing version removed; the real one is now a sign-in approval you just started (act). |
| 22 | Family money "do it" though not started | Agreed-beforehand family payments are act (context shows the agreement); unagreed ones (k-sister, g-friend, r-roommate, L2 b-eli) are check, S23. |
| 23 | Fund recovery: leave, yet bank offered | No "how" question; feedback: you have no account with Fund Recovery, the offer itself is the scam. |
| 24 | Mutual friend | L6 screen and k-crypto-fake: a friend in common met online changes nothing. |
| 25 | Job reply via sender's channel | Replaced by entering pay details in the staff app you opened yourself (started it). |
| 26 | "Already went out" not taught | By the plan it is lesson 12 (not yet built); unchanged. |
| 27 | L2 8 of 8 | Now 7 of 8 and none through the message's channel (plan updated). |
| 28 | No wrong-idea screen after L2 | Added in L3, L4, L5 and L6 (P29). |
| 29 | Sender names as cues | Quillfeather, Thistlewick, Calderwood, Penhallow, Marlowe & Finch and others now appear both real and fake; "Delivery Notice" removed. |

## Research review

| # | Defect | Done |
|---|---|---|
| A1 | "A prize you never entered does not exist" | Now "Real prizes are free: if you have to pay to get a prize, it is a scam" (S24, quoted). |
| A2 | Loans overstated | Now "A fee called 'insurance' before you get a loan is the trick" (S25, quoted); a real application fee is never called a scam. |
| A3 | "A code is only for the person who requested it" | Now "A code is only for you to type, on a page or app you opened yourself. Never read it to anyone" in L3 and L5 (S26). |
| A4 | Web pages asking to read messages | Replaced by a sign-in approval you did not start (S29) and an app from an ad asking for your texts, in-app (S30, judgement call marked). |
| A5 | Buyer's code outcome | Now the FTC's: a phone number made in your name, used to cheat others (S26). |
| A6 | Refund call reason | Now: a real refund goes back to your card; nobody sending money needs your screen; check on the number on your bill (S28). |
| A7 | Implausible outcomes | Banner → a page selling an app; shared document → copied sign-in page; web-page "Allow" → removed; gift cards "cannot be traced" → "emptied within minutes"; romance/investment → they come back for more, gains you cannot take out. |
| A8 | IC3 missing from the note | S27 added with quoted passages; outcomes reworded to it. |
| A9 | L1 overstated experts | Now "People who are good at this get suspicious when a message wants them to do something. How it looks cannot settle it." |
| A10 | Phone book | Now the county's website, address typed yourself. |
| B1 | Family money do-it | See learner 22. |
| B2 | L2 checks wants-nothing | See learner 5. |
| B3 | "Tell someone" only via a wrong answer | Its own question after leaving, on every online-only money item (L3, L6), plus the exchanges' ending. |
| B4 | L6 pair with no real counterpart | Mei paired with a payment to your brother agreed at dinner. |
| B5 | Boss gift cards arguable | Rule step 5: settlers never change the action; it uses someone you know → check. Leave's feedback names that step. |
| B6 | Unrequested code | Split by the rule: a stranger wanting it → leave; a code from a company you deal with that you did not request → check, change the password in the app (k-pw-real). |
| B7 | "Allow" rule unsourced | Rule unchanged for Allow: do it when it answers what you just tapped; otherwise leave. S30 added, judgement call marked. |
| B8 | Approval push missing | Added: pair p-push-fake / p-push-real, k-newphone-real, a teaching screen (S29). |
| B9 | "Do it" on wants-nothing marked wrong | Wants-nothing items removed from all action questions (rule step 1). |
| B10 | L3 email/text slip, Calderwood not your bank, dentist, Ioana | Fixed: texts say text; contexts say Calderwood is your bank; dentist replaced; Ioana has "What else". |
| B11 | Recovery call, invented "no such service" | Feedback now: no account with Fund Recovery; the offer is the scam (S11). |
| C1 | "Real or a scam" facet on L1, L2 | Not changed: the facet is subject-wide and the engine has no per-lesson facet. It still measures something real in L1 and L2 (whether real messages are read as well as scams; S20). |
| C2 | Fixed "how" template | Asked only where the rule says check; distractors drawn from S4, S5, S28 and varied. |
| D1 | Tap by position | See learner 1. |
| D2 | Battery banner | Now "Install Battery Doctor to fix it" (device). |
| D3 | L2 pattern | See learner 4. |
| D4 | Arguable groups | Each now has one right answer by the rule (B1, B5, B6, B9, B11). |
| D5 | Marcus video | Check is the one right answer by step 3 (a friend's name); leave's feedback names it. |

## Not fixed

- C1 (above): needs a per-lesson facet choice in the engine; judged not worth it.
- Learner 26: lesson 12's subject.
- Reading share raised from 15% to 20% of each lesson (subject record) for the rule screen and the wrong-idea screens; the skill says a reading limit never cuts the way of thinking.

## Tests

`node tests/validate-lessons.mjs` (before and after `npm run lock`), `npm test` (all tiers), and browser checks X41 X42 X48 X51 run directly
(`E2E_SKIP_FAULTS=1 node tests/e2e.mjs X41 X42 X48 X51`): all pass. Learner views `docs/learner-view/scams-l0.md` to `scams-l6.md` regenerated.
