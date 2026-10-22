# Research review: Scams, lessons 1 to 6 (build-subject step 6, role "research")

Reviewer: a fresh agent that did not build these lessons (Opus 5.5), 2026-10-22. Read: `docs/research/scams.md`, `docs/subjects/scams/plan.md`,
the build-subject skill, the learner views `docs/learner-view/scams-l1.md` to `scams-l6.md`, `public/subjects/scams/l1..l6.lesson.js`,
`items-l1/l2/l4/l5/l6.js`, `items-practice.js`, `items-check.js`, `items-build.js`, `subject.js`, and the earlier `reviews/l3.md`.
Checked on the web: FTC prize scams, FTC tech-support scams, FTC advance-fee loans (search), FTC Google Voice verification-code alert (search),
FBI IC3 crypto investment PSAs (search), FTC app-permission guidance (search).

Line numbers: "LV" = the learner view of that lesson; data files by name.

## Verdict

| Lesson | Verdict | Main reason |
|---|---|---|
| L1 What does it want? | FAIL | the asking line is almost always the last line, so the tap is answerable by position |
| L2 Your own way in | FAIL | asks "how do you check" of messages that want nothing, contradicting L3; the right option is always the only one not from the message |
| L3 Act, check or leave | FAIL | four defects from `reviews/l3.md` still present; boss gift-card and unrequested-code answers arguable |
| L4 Your device | FAIL | wrong reason on the refund call; implausible invented outcomes; "nothing wanted" answers arguable |
| L5 Your accounts | FAIL | the "Allow" rule is unsourced and practised only on impossible cases; the code rule's wording is self-contradicting; invented outcome wrong against FTC |
| L6 Money to strangers | FAIL | family money requests marked "do it" though not started (contradicts L3's rule); "a prize you never entered does not exist" and "a real loan never makes you pay first" overstate the FTC; "tell someone" only reachable through a wrong answer |

## A. Wrong, overstated or unsupported facts

1. **L6 "A prize you never entered does not exist"** (`items-l6.js:53`; LV l6:130). Not what the source says. FTC, "Fake Prize, Sweepstakes,
   and Lottery Scams": "Real prizes are free" and "If you have to pay to get your prize, it's a scam." Not having entered is a sign, but a
   prize you did not knowingly enter can be real (an automatic entry with a purchase, a raffle at an event), so the absolute claim is false and
   is not the thing that settles it. **Fix:** "A real prize never makes you pay to get it" (FTC wording); keep "you entered nothing" as the
   context, not the rule. Also add the FTC prize page to the research note (it is not there; S11 has no prize line).
2. **L6 "A real prize, loan or job does not make you pay first"** (`l6.lesson.js:25`; LV l6:28). True for prizes and jobs (FTC); false as
   stated for loans. FTC's advance-fee loan guidance says real lenders may charge application, appraisal or credit-report fees; the tells are
   a fee before the lender has your application, a "guaranteed" loan, and fees called "insurance" or "processing" (the lesson's own g-loan-fake
   uses "insurance", which is the right tell). **Fix:** "A real prize or job never makes you pay first. A loan you never applied for, or one
   that wants an up-front fee for 'insurance' before you get it, is the trick." Source it in the note.
3. **L5 "A code is only for the person who requested it"** (`l5.lesson.js:25`; `items-l5.js:17,20,51,107,166,193,246`; L3 `items-practice.js:39`
   "A code belongs to whoever asked for it"). In these scams the person who requested the code *is* the scammer: he triggers it to your phone.
   Read literally, the rule tells the learner the code belongs to him. The FTC's line (Google Voice alert, 2021) is: never share a
   verification code with someone if you did not contact them first. **Fix:** "A code is only for you to type, on the page or app you just
   opened yourself. Never read it to anyone." Use the same words in L3 and L5.
4. **L5 the "Allow" cases cannot happen as drawn** (WallPix `l5.lesson.js:29`, `items-l5.js:64`; ClearView `items-l5.js:138`). A web page
   cannot ask for or get access to your messages and contacts; browsers only offer location, camera, microphone and notifications. The real
   "Allow" scams a beginner meets are: a web page saying "tap Allow to prove you are not a robot" (notification spam), an app installed from
   a link that asks for Accessibility or SMS access (the Android banking-trojan route), a "Sign in with Google/Microsoft: allow this app to
   read your email" consent screen, and a sign-in approval push you did not start. **Fix:** replace both with real forms (see C2).
5. **L5 exchange outcome "They used the code to take over your account and listed things for sale in your name"** (`items-l5.js:164`).
   The FTC alert on exactly this marketplace script says the code is used to set up a Google Voice number linked to your phone, then used to
   cheat others under your number. **Fix:** "They used the code to set up a phone number in your name and used it to cheat other people."
6. **L4 refund call reason** (`items-l4.js:51`; LV l4:129). The call is "Kestrel Billing" saying you overpaid and asking for screen access;
   the reason given is "A real company does not call you first about a problem with your computer", which is about a different script. The
   FTC's refund-scam line (S11) is the one that fits: nobody honest needs your screen, or money, to send a refund. **Fix:** "A real refund goes
   back to your card or account. Nobody sending you money needs to see your screen."
7. **Implausible invented outcomes** (the builder's flag). Consequence lines are well grounded in S12 and R7, and most are realistic. These are not:
   - `items-l4.js:139` "The banner installed an app that watched what you typed": tapping a banner does not install an app on a current phone.
     Use what a tap leads to: a page that asks you to install a "cleaner" or to pay.
   - `items-l4.js:227` "The page installed a program that read what you typed" (shared-document email): the real outcome is a copied sign-in
     page that keeps your password. Say that; it also links L4 to L5.
   - `items-l5.js:66,140` "read your messages and contacts, and sent them away": impossible from a web page (A4).
   - `items-practice.js` (L3 Q10) "the money cannot be traced": contradicts S13 and L12 (FTC: contact the gift card issuer at once, keep the card
     and receipt). Use "the cards were emptied in minutes."
   - `items-l6.js:145` "the messages stopped when you stopped answering" and `items-l6.js:154` "Sam stopped answering" after you paid: romance
     and investment scammers usually come back for more (the lesson's own Daniel line says "then he needed more"). Use that.
8. **L6 "you could not take any of it out"** (`items-l6.js:16,216`). Accurate (FBI IC3 PSA230314: when victims try to withdraw they are told to
   pay a fee or taxes, and do not get the money back even if they pay), but the research note has no source for investment-scam mechanics.
   **Fix:** add the IC3 PSA to the note; optionally sharpen to "The app showed big gains. To take money out it wanted a fee, and nothing came back."
9. **L1 "People who are good at spotting scams start there ... and not with how the message looks"** (`l1.lesson.js:14`). S1 (Wash) says
   experts first notice that the message does not fit and things look off, and the trigger is a request to act. The lesson's rule (look at
   the request, not the looks) is right for a lay learner (S9, S12), but the claim about experts overstates S1. **Fix:** "People who are good at
   this get suspicious when a message asks them to do something. How it looks cannot settle it, because a scam can copy all of it."
10. **L2 "The police station is in the phone book"** (`items-l2.js:17`). Out of date for 2026. **Fix:** "on its website or the town's website, which you look up yourself."

## B. Departures from the way of thinking or the plan

1. **L6 family money requests marked "Do what it says" though the learner did not start them** (`p-brother-real` items-l6.js:37, `g-friend-real`
   :93, `k-sister-real` :157, `k-lunch-real` :199; LV l6 items 2, 8, 15, 21). The way of thinking (plan 2, L3 Step 1: "Do what it says only when
   you started it") gives "check first" here: it is money, you did not start it, and you have a way of your own. L2 teaches that a name and
   number on screen can be faked, and L4 check Q20 (Marcus) says a friend's account can be taken over so a message from it is checked with the
   friend. A friend's chat asking you to open a link is "check first" in L4, while the same chat asking for money is "do it" in L6. **Fix:**
   either make the context show the learner started it ("You and Luis agreed in person that you would cover the pizza") so "do it" follows from
   the rule, or mark "check first" right. Do the same for the L3 Fenwick bill (`items-check.js:19`), which `reviews/l3.md` already flagged.
2. **L2 asks "How do you check it?" of messages that want nothing** (LV l2 items 4, 6, 8, check 12, 18; `items-l2.js:49` "Even a real shipping
   notice is checked your own way when it matters"). L3 Q3 shows the same shipping notice and says "there is nothing to act on and nothing to
   check" (`items-practice.js`). The plan's goal is "handling real messages normally", and S20 warns that training first makes people
   suspicious of genuine messages. **Fix:** in L2, use only messages that want something (a link, a number, a reply to act on); move the
   "nothing wanted" cases to L3 where "leave it" is an answer.
3. **"Tell someone you know in person" is only reachable through a wrong answer** (L6 every scam with `own: "Telling someone I know in person"`;
   L3 Ioana). The follow-up "How do you check?" opens only on "check" (`items-build.js:25`), so the learner who rightly picks "Leave it" never
   chooses the move S15 and the plan give for this case, and the one who wrongly picks "check" is then marked right for "telling someone" as a
   way to check. `reviews/l3.md` flagged this on Ioana; it is now in eight L6 items. **Fix:** for the no-channel case, make the right action
   itself say it ("Send nothing, and tell someone I know in person", as the L6 exchanges already do), or open a follow-up "What else?" on "leave".
4. **L6 Step 1 pair has no real counterpart** (`l6.lesson.js`, first `pair`: Mei beside Daniel, two scams). The plan says each script is shown
   "side by side with the real thing they copy (pair)" (S20, P12). **Fix:** pair the online friend with a friend you know in person asking for
   money in your usual chat after you agreed it.
5. **L3 boss gift-card text marked "check first", "leave it" marked wrong-ish** (`items-practice.js:109-114`; LV l3 Q10). Plan way-of-thinking 4
   says a gift-card demand settles it outright: end it (S3, S11). Checking on her saved number is FBI BEC advice too (S4), so both are
   defensible. **Fix:** accept both, with feedback that gift cards settle it and a call to her saved number is a good extra.
6. **L3 unrequested code marked "leave it"; "check first" told "there is nothing to check"** (`items-practice.js:39`; LV l3 Q2). A code you did
   not ask for usually means someone has your password and is signing in; the expert move is to go into that account your own way and change
   the password. **Fix:** make "check first" right (own way: "the account's own app or site, and change the password"), "leave it" safe.
7. **L5's rule "Allow something only when you just started it and it wants only what it needs"** (`l5.lesson.js:32`). The builder flagged it.
   It is sensible and matches how phones design permission prompts (asked at the moment of use) and FTC advice that sensitive requests such
   as reading texts are a red flag, but: (a) no finding in the research note supports it, so it is a judgement call that is not marked as one;
   (b) "just started it" is necessary, not sufficient: an app you installed yourself from a scam text (L4 g "tracking app") passes it; (c) the
   practice never tests "only what it needs" on a hard case: every wrong case is a wallpaper or filter wanting all your messages. **Fix:**
   "Allow only inside an app you got from the app store yourself, right after you tapped something that needs it (the camera to take a photo).
   Never tap Allow because a web page tells you to, and never approve a sign-in you did not start." Add a source to the note (FTC on app
   permissions; CISA on sign-in approval fatigue) and practise on the real forms in A4.
8. **Owner's ask "allow an app" vs sign-in approvals.** The plan row for L5 covers "Sign in, give a code, or allow an app". Approving a
   sign-in push you did not start is the account version of "allow" and a common real attack; it is missing. **Fix:** add one pair (a push you
   triggered vs. one at 3 a.m.) and one check item.
9. **"Nothing wanted" genuine messages: "Do what it says" marked wrong though it does the same thing as "Leave it"** (L3 Q3, Q11; L4 items 2, 10,
   14, check 19, 21; L5 item 10, check 19, 23; L6 item 4, check 17, 19). The feedback itself says "There was nothing to do, so nothing
   happened." In each check two such items count as "wrong among real messages", so a learner who reads "No action needed" and picks "Do what
   it says" twice fails the check while acting correctly. **Fix:** accept "do what it says" and "leave it" both on messages that ask nothing,
   or drop "nothing wanted" cases from the action checks (L1 already teaches them).
10. **L3 still carries four defects from `reviews/l3.md`**: Q3 is a text but the options say "The details in the email" and "the same news the
    email did" (`items-practice.js:46,48`); Q14 never says Calderwood is your bank yet the answer is "the number on the back of my card"; the
    dentist call (check 20) marks a safe check as wrong; Ioana (see B3).
11. **L6 recovery call: "check first" told it is unneeded** (LV l6 item 7, check 20). The caller cites your report, which is about your money,
    so L3's rule gives "check first"; S13 says the offer is itself a scam. Both are safe and the check does not fail it, but the feedback
    "Your bank has no such service" is invented. **Fix:** accept both; feedback "Your bank confirmed it never called. The offer was the scam."

## C. Structures carried over rather than drawn from this research

1. **The result screen's "Real or a scam" facet on L1 and L2** (LV l1:535, l2:389). Neither lesson asks real-or-scam; L1 asks what it wants,
   L2 asks how to check. The engine's default facet is shown where it measures nothing. **Fix:** facet L1 by request kind and L2 by channel, or none.
2. **The fixed "How do you check?" follow-up on every item** (`items-build.js:21-25`). Two of its three options are always from the message
   ("Reply and check with them" plus a second near-synonym such as "A reply to the text"), so the right one is always the only option with
   "my", "I already", "saved" or "typed in myself". This is a template applied to every item, not a distinction from S4. It also produces
   meaningless right answers ("A friend I do know" to check a stranger's file, L4 items 5, 11, check 22; "My phone's own settings" for a web
   pop-up). **Fix:** draw the distractors from real failures the note names: the caller-ID number (S3), "search the web for their number"
   (scam ads), "the number on the website the message links to" (CISA, S4), "let him transfer me" (L2 already has it).

## D. Questions with a wrong, arguable or pattern-answerable marked answer

1. **L1 tap by position.** In 18 of 20 items with two lines, the asking line is the second line (LV l1 items 2-7, 10, check 12-18, 20); the
   only exceptions are "nothing" items. A learner can tap the last line and pass the check. **Fix:** put the request first in at least a third
   of the items ("Pay $3.20 at the link. Your order is on hold.") and add three-line messages with the request in the middle.
2. **L1 item 8** (battery "damaged by a virus. Tap to fix it", `items-l1.js`): marked "your phone or computer" with the reason "a banner like
   this is a way to get you to install it", which the message does not say. "Nothing" is defensible on the text alone. **Fix:** make the line
   say "Install the fix" or move the item to L4.
3. **L2 right answer always the only option not from the message** (see C2); L2 check 12 is the practice item 4 with names changed.
4. **L3 Q2, Q10; L6 item 7, check 20; L3/L4/L5/L6 "nothing wanted" items; L6 family items**: arguable, see B1, B5, B6, B9, B11.
5. **L4 check 20 (Marcus video)**: "leave it" is also safe and defensible; the check does not fail it, but the practice marks it wrong.
   Accept both, with "a word to Marcus on his number warns him his account was taken" as the better move.

## Counts by kind

- Wrong, overstated or unsupported facts: 10 (A1 to A10)
- Departures from the way of thinking or the plan: 11 (B1 to B11)
- Carried-over structures: 2 (C1, C2)
- Wrong, arguable or pattern-answerable questions: 5 groups (D1 to D5), about 30 items

## Spot checks of the research note against sources

- S11 FTC tech-support quotes: confirmed word for word ("Real security pop-up warnings and messages will never ask you to call a phone
  number"; "Legitimate tech companies won't contact you by phone, email, or text message to tell you there's a problem with your computer").
- FTC prize page: "Real prizes are free" and "If you have to pay to get your prize, it's a scam" confirmed; nothing there says a prize you did
  not enter cannot exist (A1).
- FTC advance-fee loans: real lenders may charge application or appraisal fees (A2).
- FTC Google Voice alert: the code is used to make a number linked to yours; do not share a code with someone you did not contact first (A3, A5).
- FBI IC3 PSA230314: withdrawals blocked by fees or taxes (A8).
