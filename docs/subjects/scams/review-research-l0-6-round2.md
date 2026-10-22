# Research review, round 2: Scams, lessons 0 to 6 (build-subject step 6, role "research")

Reviewer: a fresh agent that did not build these lessons (Opus 5.5), 2026-10-22. Read: `docs/research/scams.md` (S1 to S30), `plan.md`
(including the new rule), `fixes-l1-6.md`, the round-1 `review-research-l1-6.md`, the learner views `docs/learner-view/scams-l0.md` to
`scams-l6.md`, and the data files where a line number was needed (`l*.lesson.js`, `items-*.js`, `items-build.js`). Lessons 7 to 12 ignored.
Checked on the web today: FTC "Scammers use fake emergencies" (S23), FTC tech-support scams (S11, S28), FTC Google Voice code alert (S26).
"LV lN:x" = line x of that lesson's learner view.

## Verdict

| Lesson | Verdict | Main reason |
|---|---|---|
| L0 Before you start | PASS | two small fixes (E3, A5); ungraded, so nothing mis-scores a learner |
| L1 What does it want? | PASS | position cue fixed; the "Real or a scam" facet still shows (C1, accepted in round 1) |
| L2 Your own way in | FAIL | the secret-word line overstates the FBI; the worked case is a government caller the rule does not cover; the right "how" is always the only option phrased as yours |
| L3 Act, check or leave | FAIL | two items offer the same wrong move twice in "How do you check?" (template remnant); otherwise sound against the rule |
| L4 Your device | PASS | minor realism notes only (A6, A7, B3) |
| L5 Your accounts | FAIL | "an approval/code you did not ask for means someone has your password" is false, and the lesson's own buyer-code case (S26) shows why |
| L6 Money to strangers | FAIL | "a call to the number you have settles it" fails when the message came from that same number; duplicate "how" options |

## Round-1 fixes: do they hold?

Held: A1 to A10 (prize, loan, code wording, Allow cases, buyer outcome, refund reason, outcomes, IC3 in note, L1 experts line, phone book),
B1 to B6, B8, B9, B10, B11, D1 (asking line now first, middle or last), D2, D5. The rule in `plan.md` is applied consistently in every item
I read: no wants-nothing message is asked act/check/leave; every "started it" item is do; every name-you-deal-with item is check; every
stranger is leave; "What else?" follows every online-only money item.

Partly held:
- **C2 / D3 (template "how" options)**: varied in L2, but L3 to L6 still use the default third option "Reply and check with them"
  (`items-build.js:47`), which duplicates the item's own wrong option whenever that is also a reply (D1 below). And the cue remains (D2).
- **B7 (Allow)**: rule sourced as a judgement call (S30); the platform caveat is missing (A3).

Not fixed, as declared: C1 (facet).

## A. Wrong, overstated or unsupported facts

1. **L5 "An approval comes only after someone has typed your password"** (`l5.lesson.js:37`; LV l5:41), item 5 reason "someone else is,
   with your password" (`items-l5.js:71`), check 19 reason "A code you did not request means someone is signing in with your password" and
   its leave line "Whoever made the code come still has your password" (`items-l5.js:203-204`; LV l5:455, 462). Not true as stated:
   passwordless sign-in (a push or a texted code from only your email or phone number) is common, and "Forgot password" sends a code with no
   password. The lesson's own worked case contradicts it: the Bramblecote buyer makes a code come with no password (FTC Google Voice alert,
   confirmed today: the code is used "to create a Google Voice number linked to your phone number"). S29 only shows CISA's password-then-push
   flow; it does not say a push can come only that way. **Fix:** "An approval or code you did not ask for means someone is trying to get into
   that account, often with your password. Deny it, and change the password in the app, opened yourself." Same softening in the two
   reasons and the leave line ("Whoever made the code come may try again").
2. **L2 "Someone who calls as family in trouble and cannot say it is not family"** (`l2.lesson.js:28`; LV l2:21). Goes past the FBI line
   (S4: create a word "to verify their identity") and FTC S23, which also says to call the person on the number you know and to call
   someone else in the family. A real grandson who panics or forgets the word is still family. **Fix:** "If they cannot say it, hang up and
   call them on the number you have."
3. **L5 "An app that reads your texts can read the codes your bank sends you"** (`l5.lesson.js:44`; item 13, LV l5:323-336; L4 item 7 do-it
   line LV l4:193). Only Android lets an app ask to read texts; an iPhone app cannot, and on Android an app from an ad link means a sideload.
   The note marks this a judgement call (S30) but not the platform. **Fix:** say "On an Android phone, an app that reads your texts…", and
   give PicGlow's context as an Android phone.
4. **L6 Step 4 "Phones and chat accounts can be taken over, and voices copied. A call to the number you have settles it."**
   (`l6.lesson.js:40`; LV l6:45) and check 15 (Rosa texts "from the number you have saved", the do-it line says "a stolen phone… looks the
   same", and the right check is "Calling Rosa on her saved number", `items-l6.js:161-162`; LV l6:353-370). If her phone was stolen, a call
   to it reaches the thief, and the lesson itself says voices can be copied. FTC S23 (confirmed today) gives the second move: "Call someone
   else in your family or circle of friends." **Fix:** keep "call her number" (it beats spoofed texts), drop "settles it", and add the FTC's
   second move: "If you are still unsure, ask someone else in the family, or ask for the family word."
5. **L0 Q10 order "Call my bank → Change my password on the real site → Report it"** (`items-baseline.js:102`; LV l0:196-199). The case is money
   sent to a caller; nothing says a password or code was given, so S13 does not put a password change second. Only the first step counts, so
   no score is wrong. **Fix:** context "…and you gave him your sign-in code" or replace the step with "Report it at ReportFraud.ftc.gov".
6. **L4 item 10, real Kestrel "settings update… Install it at the link"** (`items-l4.js:112`; LV l4:244-249, do-it line "This time the link was
   real"). Carriers do not ship settings by a link in a text; the "real" outcome is implausible. The right answer (check) is unaffected.
   **Fix:** make the real version "Update your phone's software in Settings" with no link, or drop "This time the link was real".
7. **L4 item 8, Ravenscroft driver** (`items-l4.js:93`; LV l4:206-220). "Do what it says" is right only if the printer page is the maker's,
   reached your own way. Fake driver sites come from search ads (S28, FTC confirms "show up in online search results"). Also, a site emailing
   "open the file you just downloaded" is odd. **Fix:** context "on the Ravenscroft site, at the address on the printer's box, which you typed",
   and make the message the download page itself, not an email.

## B. Departures from the way of thinking or the plan

1. **L2 worked example is a government caller** (`items-l2.js:13-20`; LV l2:27-45). The rule's step 3 test is "an account with them, or know
   the person" (bank, phone company, shop, boss, grandson). A county police caller is neither, so the rule says leave it, yet the lesson's one
   worked case shows check through the county's website. FTC guidance supports both (hang up; contact the agency your own way if worried).
   The plan weights government imposters (S16, $789 million in 2024), and lessons 0 to 6 never ask act/check/leave on one, so the learner has
   no ruling. **Fix:** state in the rule where government falls ("an agency that has your records, such as Social Security or the IRS, counts
   as one you deal with: check on its own number, never pay a caller") and use the same ruling in lesson 7; or swap the worked case for a
   sender the rule plainly covers.
2. **L5 approval feedback teaches "a code or push = someone has your password"** (A1). This reads the rule's step 3 action correctly (change
   the password) but grounds it in a fact the research does not give.
3. **L4 never practises the commonest real tech-support form**: a pop-up or call using a big brand's name. FTC (confirmed today) names "Geek
   Squad, McAfee, and Norton". Every L4 scam uses a name you have never heard of (Security Desk, Pinecrest Help, Tech Care, Ravenscroft
   Security, SecurePhone), so the learner never applies step 3 to "a security company I do pay" saying my computer is infected. **Fix:** add
   one item: a pop-up "Norvale Antivirus: your subscription found 5 viruses, call…" where you do have Norvale → check in the Norvale app (and
   the pop-up's number is never the way).

## C. Structures carried over rather than drawn from this research

1. **"Real or a scam" facet on L1 and L2 results** (LV l1:552, l2:392). Still the engine default where neither lesson asks it. Accepted in
   round 1; noted only so it is not lost.
2. **The default third "how" option** (`items-build.js:47`): "Reply and check with them" is appended to every check item that does not set
   `alt`. It is a template, not a failure named in S4, S5 or S28, and in six items it repeats the item's own wrong option (D1).

## D. Questions with a wrong, arguable or pattern-answerable marked answer

1. **Two options are the same move in "How do you check?"** (the default reply plus the item's own reply wrong option), leaving one real
   distractor:
   - L0 Q8 Joel: "A reply to this number" + "Reply and check with them" (`items-baseline.js:75`; LV l0:164-166)
   - L3 item 10 Priya (`items-practice.js:112`; LV l3:244-246)
   - L3 check 21 Kestrel Dental (`items-check.js:56`; LV l3:469-471)
   - L5 item 9 Linden Mutual (`items-l5.js:105`; LV l5:255-257)
   - L6 item 8 Dana (`items-l6.js:97`; LV l6:217-219)
   - L6 check 15 Rosa (`items-l6.js:161`; LV l6:366-368)
   - L3 item 8 Femi: "The number or address in the email" (the email has neither a number nor an address) + "Reply and check with them"
     (`items-practice.js:94`; LV l3:206-208)

   **Fix:** set `alt` on each to a different real failure: the number the caller ID showed (S3), a web search (S28), "ask him to call you
   back", "a video call" (S23 copied voices), "the number in his email signature".
2. **The right "how" is always the only option worded as yours.** In all 18 L2 items and every L3 to L6 "how", the right option, and only
   it, carries "my", "I already have", "saved" or "myself" ("The Penhallow app on my phone", "Ms. Ivers' number that I already have"); the
   wrong ones are "the link", "a reply", "the number in the text", "a web search" (exceptions: L2 check 12 "Reply with my address", L2 check
   13 "Let him transfer me"). A learner can pass the L2 check on the word "my". **Fix:** word some wrong options as the learner's own act
   ("The number I find by searching on my phone", "My reply to the text", "The number my phone shows for the call") and some right ones
   without "my" ("Penhallow's app", "the number printed on the card").
3. **L2 item 10 "Call the number he gives in the chat"** (`items-l2.js:95`; LV l2:225): the chat gives no number. **Fix:** add a line
   "My phone broke, call me on 555-0190" or change the option to "Ask him in the chat for a number to call".
4. **L2 check 13 "Trust it, because the caller ID says Calderwood Bank"** (LV l2:300) is not a way to check, so it is eliminated without
   reasoning. **Fix:** "Call back the number the caller ID shows".

## Spot checks of the research note against sources (today)

- S23 FTC fake emergencies: all four quoted lines confirmed word for word, including "Call someone else in your family or circle of friends"
  (which the lesson does not yet use, A4).
- S11/S28 FTC tech support: "Real security pop-up warnings and messages will never ask you to call a phone number", "show up in online search
  results for tech support", "refunded you too much money" confirmed. The page names Geek Squad, McAfee and Norton as names used (B3).
- S26 FTC Google Voice: confirmed; the code is used to make a Google Voice number linked to yours, which needs no password (A1).

## Counts by kind

- Wrong, overstated or unsupported facts: 7 (A1 to A7; A1, A2, A4 matter, the rest minor)
- Departures from the way of thinking or the plan: 3 (B1 to B3)
- Carried-over structures: 2 (C1 accepted, C2)
- Wrong, arguable or pattern-answerable questions: 4 groups (D1: 7 items; D2: subject-wide cue; D3; D4)
