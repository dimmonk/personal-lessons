# Research review, round 3: Scams, lessons 0 to 6 (build-subject step 6, role "research")

Reviewer: a fresh agent that did not build these lessons (Opus 5.5), 2026-10-22. I read `docs/research/scams.md` (S1 to S31), `plan.md` (the
rule and the round-2 lines), the learner views `docs/learner-view/scams-l0.md` to `scams-l6.md` and the data files where a line number was needed
(`items-build.js`, `items-check.js`, `items-*.js`). I read `fixes-l0-6-round2.md` only to check that the claimed fixes landed. I judged the lessons
fresh. Lessons 7 to 12 were ignored. The clone's working tree, with its uncommitted round-2 edits, is what I reviewed.
"LV lN:x" means line x of that lesson's learner view.

Checked on the web today, all confirmed word for word:
- **FTC, government impersonation (S31):** "Government agencies will never call, email, text, or message you on social media to ask for money or
  personal information"; no agency demands wire, gift cards, crypto or a payment app; "Hang up the phone and call the government agency directly at a
  number you know is correct". To find the number, the page points to the agency's official website. It names warrant calls from a "sheriff's office
  or court" as "most likely a scam" and says "look up the real number". This backs L2's worked example.
- **FTC, job scams (S30):** "No honest potential employer will ever send you a check to deposit and then tell you to send on part of the money", and
  "paying for starter kits, so-called training, or certifications".
- **FTC, how to avoid a scam (S3):** "They use technology to change the phone number that appears on your caller ID"; "Don’t call a number they gave
  you or the number from your caller ID"; "a request that you didn’t expect"; "Honest businesses will give you time".

## Verdict

| Lesson | Verdict | Deciding defect |
|---|---|---|
| L0 Before you start | PASS | none (ungraded; polish only) |
| L1 What does it want? | PASS | none |
| L2 Your own way in | PASS | none (polish only) |
| L3 Act, check or leave | **FAIL** | D1: check 25 offers the same wrong move twice |
| L4 Your device | PASS | none (polish only) |
| L5 Your accounts | **FAIL** | D2: check 19 marks "Leave it" wrong on an unrequested code, where leaving is defensible |
| L6 Money to strangers | PASS | none (polish only) |

## Round-2 fixes: do they hold?

These held:
- A1: L5 now says "someone is trying to get into that account, often with your password" (LV l5:41, 175, 462).
- A2: the family word now leads to a call back on the number you have (LV l2:21).
- A3: the Android wording (LV l5:47, 51, 323).
- A4: L6 no longer says "settles it", and the FTC's second move is added (LV l6:42-45, 373).
- A5: L0 Q10 now says you read out the code, so the password step is earned (LV l0:193).
- A6: the price-change text (LV l4:249).
- A7: the driver is reached at the address on the box (LV l4:206).
- B1: the government ruling is in the rule and on the L3 screen (LV l3:14). It agrees with the FTC page above.
- B3: the Norvale item (LV l4:223-241).
- D1: every round-2 item listed now has three different moves.
- D3: Eli's chat now gives a number (LV l2:223).
- D4: "Call back the number my phone shows for the call" (LV l2:302).
- D2: the "my" cue is gone. Wrong options are worded as the learner's own act ("My reply to the text", "The number I find by searching… on my
  phone"), and some right options carry no "my" ("Penhallow’s app", "The number printed on the card").

C1 (the "Real or a scam" facet on the L1 and L2 results) still shows (LV l1:561, l2:394). It was accepted in round 1.

One regression was introduced by root fix 1. It is D1 below.

## A. Wrong, out-of-date or unsupported facts

None that decides a verdict. Every rule line, "never" line and outcome I checked traces to a finding: S3, S4, S11, S13, S23 to S31. Small points:

1. **L2 step 2 and worked example** (`l2.lesson.js`; LV l2:23, 37-46): "A government office: its own website, typed." The lesson does not say where
   a learner would get a county's web address to type, and it bans searching. The FTC says to use the agency's official website.
   **Fix:** "its own website, at the address on a letter from it (most end in .gov)".
2. **L4 item 7, "do it" outcome** (`items-l4.js`; LV l4:193): "On your Android phone" appears in the outcome, but the stem never says Android.
   **Fix:** put "on your Android phone" in the context, or say "on an Android phone" in the outcome.
3. **L6 check 15, "do it" outcome** (LV l6:364): "a stolen phone or a copied voice looks the same". A copied voice plays no part in a text.
   **Fix:** "a stolen phone sends the same text".
4. **The search option's feedback** (`items-build.js:28`): "so that their number is the one a search shows". This line is attached to options
   that are a site, not a number (LV l2:99, 117, 287, 370; the similar ones in L3 to L5). **Fix:** "so that their page or number is the one a
   search shows".

## B. Departures from the way of thinking or the plan

1. **Some L2 "how" sets still carry two copies of the message's own channel.** This goes against the plan's round-2 paragraph: "the third option is a
   look-alike of a way you had …, never a second copy of the message's own channel". The items:
   - item 7 Ms. Ivers: "reply to her new number" and "call her on the new number" (LV l2:173-174)
   - item 8 Dunmore: "number on the link's page" and "pay on the link's page" (LV l2:189-191)
   - item 10 Eli: "chat message" and "the new number he gave in the chat" (LV l2:226-227)
   - check 15 Ms. Tran: "number the email gave" and "reply to the email" (LV l2:336-338)

   The right answer stays unique and the reasoning still decides it, so this is polish, not a verdict defect. **Fix:** replace one of each pair with a
   look-alike: "the number my phone shows the text came from", or "a number found by searching".

## C. Structures carried over rather than drawn from this research

1. **The fixed "What else do you do?" set** (`items-build.js:59-63`): "Tell the friend from the same group, who knows them too" is offered in every
   online-only case. In three of them there is no group, so it is a non-option a learner discards without reasoning:
   - L3 check 27 Ioana, on a language app (LV l3:604)
   - L6 item 1 Daniel, on a dating site (LV l6:92)
   - L6 item 11 Tom, who wrote out of the blue on a social app (LV l6:276)

   It fits Theo (gardening group) and Sam (forum friend). **Fix:** let a spec give its own third distractor. For example, "Ask the dating site to
   check him", or "Ask him for a video call", which S27 and the FTC romance page say scammers dodge.
2. **C1, the "Real or a scam" facet:** accepted, unchanged.

## D. Questions with a wrong, arguable or guessable marked answer

1. **L3 check 25, grandson call: two options are the same move** (`items-check.js:92`; LV l3:557-559). The options are "Calling back the number my
   phone shows for the call" (the item's `theirs`) and "Call back the number my phone shows for the call" (the default look-alike), with different
   feedback. The cause is in `items-build.js`:
   - `theirsHow` (line 37) classifies "Calling back the number my phone shows…" as `number`, because its regex looks for "calling me", not
     "calling back".
   - `scamLookAlike` (line 47) then adds the `callerid` look-alike for a call.

   A learner sees two identical options and can set both aside as a pair. In effect the question has two choices, and a check question decides
   the pass. The same misclassification gives the caller-ID option the wrong reason ("The number came with the message…") in L3 item 14 (LV l3:324),
   L4 item 3 (LV l4:121) and L5 item 3 (LV l5:134). **Fix (root):**
   - Classify caller-ID wording as `callerid` in `theirsHow` (match "phone shows").
   - Give s-grandson a different `theirs`, for example "Ask him for his new number and call that", so the look-alike is the caller ID.
   - Have `pressure-pure.mjs` compare option texts after normalising verb forms, or compare the `how` kinds of all three options, so a repeat of a
     kind fails the test.
2. **L5 check 19, an unrequested sign-in code: "Leave it" is defensible** (`items-l5.js`, the check item with the Marlowe & Finch code; LV
   l5:444-462). The context says "You are not signing in to anything". The text is real ("This time the link was real") and says "If you did not ask
   for it, secure your account at the link". The marked answer is check, by changing the password in the app. Leaving is marked as a real message
   mishandled, which counts against the check's "at most 1 wrong among real messages". Leaving is a defensible action, for three reasons:
   - Real services commonly tell you to ignore a code you did not request. The lesson's own real reset email says exactly that: "If you did not ask
     for this, ignore this email" (LV l3:276).
   - S26 shows a code can be made to come with no password at all.
   - The note does not support "an unrequested code, so change your password". S13's password advice covers a password already given away. S29 covers
     a push that follows a typed password.

   A careful learner can therefore leave it and be marked wrong. The other approval items stand: L5 item 5, the 3 AM pushes, is grounded in S29 and
   is not affected. **Fix, either one:**
   - Make the context carry the evidence, for example "a minute ago you also got an email that your Marlowe & Finch password was changed" or "this is
     the third code tonight", so check is the only defensible action.
   - Or replace the item with an unrequested *approval* push, which S29 grounds.

## Polish (does not decide a verdict)

- **L0 Q10, after-miss line** (LV l0:197): "the caller is the last person to contact". The caller is never to be contacted. **Fix:** "and the caller
  is never contacted".
- **L4 check 24** (LV l4:524): the call you made yourself is drawn as "An incoming call … (You called)". **Fix:** an outgoing-call label.
- **L6 item 6** (LV l6:172): "the staff app the manager made for you". **Fix:** "the staff app the manager set up for you".
- **L2 items 3 and 5, check 12** (LV l2:102, 144, 289): the reasons mention "the reply address" or "a reply", but no reply option is offered.
  **Fix:** drop "and a reply".

## Counts by kind

| Kind | Deciding | Polish |
|---|---|---|
| Wrong, out-of-date or unsupported facts | 0 | 4 (A1 to A4) |
| Departures from the way of thinking or the plan | 0 | 1 group (B1, four items) |
| Carried-over structures | 0 | 2 (C1 three items; C2 accepted) |
| Wrong, arguable or guessable questions | 2 (D1 L3 check 25, with a shared-helper root that also mislabels 3 items; D2 L5 check 19) | — |
| Other | — | 4 |
