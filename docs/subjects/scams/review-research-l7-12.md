# Scams, lessons 7 to 12: research review (2026-10-22)

Role "research" (build-subject step 6). Read: `public/subjects/scams/l7..l12.lesson.js`, `items-l7..l12.js`, `items-l11r.js`, the learner views
`docs/learner-view/scams-l7..l12.md`, `plan.md`, `docs/research/scams.md` (S1 to S36, with S32 to S36 in full) and the build-subject skill.
Every item's marked answer was run against the plan's rule (steps 1 to 6). Sources checked on the web today: FTC "What To Do if You Were Scammed",
FTC "Lost or Stolen Credit, ATM, and Debit Cards", FTC fake checks, FTC unpaid-toll alert, AARP online quizzes (all S32 to S36 quotes match the
pages word for word), and the FTC/IdentityTheft.gov recovery steps (search; the live IdentityTheft.gov page did not render as text).

Line refs are to the learner views (`docs/learner-view/scams-lN.md`) unless a file is named.

## Verdicts

| Lesson | Verdict | Defects that decide | Polish |
|---|---|---|---|
| L7 Bills and payments | FAIL | 2 (D1, D2) | 2 |
| L8 About you | PASS | 0 | 1 |
| L9 What looks prove nothing | FAIL | 2 (D2, D3) | 2 |
| L10 When it pushes | PASS | 0 | 2 |
| L11 Your plan + `items-l11r` | PASS | 0 | 3 |
| L12 The first hour | FAIL | 5 (D4 to D8) | 3 |

No structure looks carried over from another subject: the pairs, the exchanges, the busy-task banners and the first-hour first-step/next-two
form each trace to S7, S10, S6, S19 and S13/S34 as the plan says.

## Defects that decide the verdict

**D1. The overpaying buyer falls inside "someone known only online who wants money", but the items skip the "tell someone" move.** (departure from
the rule.) L3's rule screen (scams-l3.md:15) and the plan's step 4 say: someone known only online is not someone you know, and "If they want money, I
also tell someone I know in person." The marketplace buyer in L7 items 5, 14 and check 19 (scams-l7.md:160, 345, 455) is known only online and wants
$450 / $450 / $650 back, yet the items end at "Leave it" with no "What else do you do?" ask. A learner who applies the rule word for word expects
it. *Fix:* the cheaper and truer fix is in the rule: say who "known only online" means: someone you have been talking with online (a friend, a match,
a contact from a forum or a game), not a stranger you are dealing with once; keep the three items as they are. Change that wording in plan step 4,
L3 Step 1 and L11 Step 1 (scams-l11.md:15). Otherwise add the "What else" ask to the three items.

**D2. "Exactly what I agreed beforehand (the amount and the way to pay)" marks "Do it" right where the amount was not agreed.** (arguable answer.)
L9 item 2 (scams-l9.md:105): you agreed only that Mateo "would text the amount each month"; $60 was never agreed, so by the rule as written
(plan step 2) "check" is defensible. L7 item 8 (scams-l7.md:225) is the same pattern: the split was agreed, the $42 was not and you have not seen the
bill. Nia ($15 an hour, five hours you were there for), Rosa ($90) and Leah ($60) are fine. *Fix:* give Mateo a set price in the context ("$60 a
mow, paid in PayLane"), and either word the rule "the amount, or how it is worked out, and the way to pay" or have Ana's text show the bill (it is
in the shared folder you both see).

**D3. "Being friendly and sounding like a real company are what scammers do most."** (wrong fact.) L9 Step 2 (scams-l9.md:33). The note's support
(S33, from S7) does not say that: in the NASD tapes the commonest tactics were dangling wealth (248), scarcity (168) and source credibility (121);
Friendship came later. *Fix:* "Sounding like a real company is one of the commonest tricks, and being friendly is part of the script."

**D4. L12 item 8 marks the FTC's own first step wrong.** (wrong answer.) scams-l12.md:190: a store card you never opened shows on your credit
report. FTC/IdentityTheft.gov recovery steps, Step 1: "Call the companies where you know fraud occurred": call the fraud department, say your
identity was stolen, ask them to close or freeze the account; the FTC report comes after. The lesson marks "Call the bank or company the money went
through" wrong with "No money went out yet", although $1,200 has been charged in your name. *Fix:* either make the right first step "Call the store
card's fraud department, on a number from your credit report or its own site" (with IdentityTheft.gov and the freeze as the next two), or replace
the case with one that has no company to call yet (a number given away, as in items 4 and 7).

**D5. "What you owe for a stolen card depends on how fast you tell them" is true for a debit card only.** (wrong fact.) L12 item 2 reason
(scams-l12.md:91), situation "Your wallet was stolen... two charges". FTC: for a credit card the most you owe is $50 whenever you report; for a
debit card it rises from $50 (two business days) to $500 to everything (after 60 days). *Fix:* make it "your Penhallow debit card" in the
situation, or say "for a debit card, what you owe..." in the reason.

**D6. "Get them to reverse it" promises what the sources only let you ask.** (wrong fact; departs from the note.) L12 Step 1 (scams-l12.md:13),
the worked example (:47, :49), the next-step options (items-l12.js `MONEY_NEXT`, "get a refund", "get it reversed") and check 9. The FTC says
"Ask them to reverse the payment and refund your money"; S13 in the note itself says the lesson "says 'ask', never 'you will get it back'".
*Fix:* "ask them to reverse it" / "ask for a refund" everywhere in L12.

**D7. A device someone got into: "make a new password" first is marked wrong for a reason that assumes you type it on that device.** (arguable
answer, and one is a check question.) L12 item 5 (scams-l12.md:136) and check 11 (:256). The feedback says scan first "so nothing left on the device
sees the new ones"; changing passwords at once from a different, clean device (a phone) is just as defensible and is what the plan itself asked
for ("change passwords from another device", plan.md:134). The check fails on any wrong first step, so this can fail a learner who reasons well.
*Fix:* word the option "Change my passwords on that computer" (wrong, for the reason given), or set the situation so it is the only device, and add
"from another device" to Step 2's device line.

**D8. "Then which two come next?" can be passed without knowing the steps.** (guessable.) In all 16 items (L12 and the three in reserve) the two
wrong options are waiting, contacting the scammer, or an obvious harm ("Throw the used cards away", "Post your number online", "Pay the $1,200",
"Reply with the password"). Any adult picks the two sensible ones. It is practice-only (the check scores the first step), but it is meant to teach
the next two. *Fix:* make at least one wrong option a real step from another kind of loss (for a password: "Run a scan"; for a number: "Make a new
password" or "Call the bank"; for money: "Freeze my credit"), with feedback naming the kind of loss it belongs to.

## Polish (does not decide)

1. L7 Step 3 (scams-l7.md:38): "No government office or honest company makes you pay in gift cards, crypto or a wire". Honest firms do take wires
   (a home closing). The FTC wording is "insists that you can only pay with". Suggest "insists you pay in".
2. L7 item 6 / L10 item 8 (lamp, desk seller): correct under the rule (step 2 first), but plan step 5 lists "money to someone met only online" as
   settling a scam without that order. Add "(asked of you)" in the plan so it does not read against these items.
3. L8 check 19 (scams-l8.md:442), L9 check 15 (:392), L10 item 22 (:464): reply-type distractors ("Reply STOP", "Reply... with my card number",
   "My reply to the new number") get the stock line "You would be asking the sender, who answers its own question", which does not fit.
4. L9 item 11 and check 20, L10 items 4, 16 and check 27: five "was this you? Reply Y/N" bank alerts with the same answer; L9's check one is
   practically item 11 again, so it is not a new case. Swap one for a different real-message shape.
5. L10 item 15: a card-payment code usually comes from your bank or card issuer, not the shop. Make the banner come from the bank.
6. L11 item 13 (scams-l11.md:272): the "Install the app" outcome at turn 1 talks about "the $810 you sent", which was never asked for at that point.
   Give turn 1 and 2 their own outcome.
7. `items-l11r.js:72` (l11r-books-real): "send it to the account below" but no account is shown.
8. plan.md "Real-world test" still says two calls "that push" and "both exchanges ended without giving a code, money or access"; L11's check (rightly,
   as the L11 line records) has one placed call where giving details is right. Update the top paragraph.
9. L12 is missing the plan's "keep every message" (plan.md:136; FTC asks you to keep records). One line in Step 4.
10. L12 Step 3: the FTC sends a number that "wasn't used or you're unsure" to IdentityTheft.gov/databreach, and a used one to the report and
    recovery plan. "It gives you a plan for your situation" fits only the second. Suggest "IdentityTheft.gov tells you the steps; when the number
    has been used, it gives you a recovery plan".
11. L12 check 11: the "Message whoever took it" option's feedback ("Calling him back gives him another way in") does not match its text.

## Count by kind

Wrong fact 3 (D3, D5, D6) · departure from the way of thinking/rule 1 (D1) · wrong or arguable answer 3 (D2, D4, D7) · guessable 1 (D8) ·
carried-over structure 0 · polish 11.
