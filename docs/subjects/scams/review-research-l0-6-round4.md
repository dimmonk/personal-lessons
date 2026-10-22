# Research review, round 4: Scams, lessons 0 to 6 (build-subject step 6, role "research")

Reviewer: a fresh agent that did not build these lessons (Opus 5.5), 2026-10-22. Read: `docs/research/scams.md` (S1 to S36), `plan.md`, the
learner views `docs/learner-view/scams-l0.md` to `scams-l6.md` (regenerated this round), the data files where a line was needed, and
`fixes-l0-6-round3.md` to verify the claimed fixes. "LV lN:x" is line x of that lesson's learner view.

Checked on the web today:
- **S23, FTC fake emergencies:** "Use a phone number you know is right to call or message the family member or friend who (supposedly) contacted
  you"; "Call someone else in your family or circle of friends"; "don't trust the voice on the line"; "try asking a question only the real person
  would know the answer to". Confirmed. The page says nothing about a stolen phone, or about whether an answered call settles it.
- **S11/S28, FTC tech support:** "Real security pop-up warnings and messages will never ask you to call a phone number"; "Legitimate tech companies
  won't contact you by phone, email, or text message…"; search results; "refunded you too much money". Confirmed. One misquote in the note: S28 has
  "using a number you already know is real"; the page says "a phone number you know is real" (no effect on any lesson).
- **S26, FTC Google Voice alert:** "real person", the Google Voice number tied to yours, "No matter what the story is", never share a code with
  someone "you didn't contact first". Confirmed; it backs L5 item 15 and the worked example.

## Verdict

| Lesson | Verdict | Deciding defect |
|---|---|---|
| L0 Before you start | PASS | none (ungraded; polish only) |
| L1 What does it want? | PASS | none |
| L2 Your own way in | PASS | none (one claimed fix not landed, polish) |
| L3 Act, check or leave | PASS | none (polish only) |
| L4 Your device | PASS | none (one plan departure, polish) |
| L5 Your accounts | PASS | none |
| L6 Money to strangers | **FAIL** | D1: x-rosa turn 1 feedback states something false; D2 (B1): Step 4 and x-rosa disagree on what the call settles |

## Round-3 fixes: do they hold?

These held:
- D1 duplicate caller-ID option: L3 check 25 now has saved number / "Get his new number and call that" / caller ID (LV l3:557-559). L3 item 14,
  L4 item 3 and L5 item 3 now give the caller-ID option the caller-ID reason (LV l3:324, l4:121, l5:134).
- D2 L5 check 19 (now 20): the third code in ten minutes, and you have not signed in (LV l5:461, 472). Check is now the one defensible answer, matching
  S29's bombing pattern.
- "As you asked" premises (LV l3:481, l4:184, l3:309); the L3 call-back is now a call you made (LV l3:366); the raffle context (LV l6:132);
  the "What else" position varies (LV l3:347, 602; l6:91, 274, 364); the real exchanges in L5 (item 16) and L6 (item 14).
- A1 (.gov letter, LV l2:23), A2 (Android, LV l4:184), A3 ("a stolen phone sends the same text", LV l6:381), A4 ("page or number").
- B1: Ms. Ivers, Dunmore and Ms. Tran now have a look-alike (LV l2:172-174, 189-191, 336-338).
- C1: tellAlt gives "Report the profile to the site…" and "Block him, and keep it to yourself…" where there is no group (LV l3:605, l6:93, 277).
- Polish: L0 "the caller is never contacted" (LV l0:197).

Not landed:
- **"L2 reasons no longer mention a reply that is not offered"**: L2 check 15 still says "A reply goes to the new address, which is the sender's"
  (`items-l2.js:133`; LV l2:340), and no reply option is offered.
- **"The staff app wording is fixed"**: it now reads "the staff app the manager opened with you at the interview" (`items-l6.js:78`; LV l6:172),
  still awkward ("set up with you").

## A. Wrong, out-of-date or unsupported facts

None that decides a verdict. Every rule line and "never" line sampled traces to S3, S4, S11, S13, S23 to S31.

1. **L6 Step 3** (`l6.lesson.js:36`; LV l6:38): "Nobody honest wants money to get your money back." S11's wording is narrower: "legitimate
   organizations will never ask for money to help you get a refund" and "Never pay upfront for a refund". A lawyer one hires is paid; the lesson's
   claim is broader than the source. **Fix:** "Nobody honest who calls you wants a fee up front to get your money back." (The item reasons at
   `items-l6.js:93, 217` are already close to the FTC.)
2. **L2 item 8 reason** (`items-l2.js:82`; LV l2:193) and the shared `page` reason (`items-build.js:28`): "The page the link opens is the sender's
   page, so its number is the sender's too." No option in item 8 is a number on the page; the sentence answers a distractor that is not there.
   **Fix:** drop the second sentence in item 8.

## B. Departures from the way of thinking or the plan

1. **L6 Step 4 against L6 item 14 x-rosa (deciding, see D2).** The plan (step 3, "Family") and Step 4 (`l6.lesson.js:39-42`; LV l6:42-45) say "a
   stolen phone answers too; if unsure, also call someone else in the family". x-rosa (`items-l6.js:152-166`; LV l6:320-333) marks "Stop replying
   anyway" wrong after Rosa answers and offers no "call someone else in the family" move. The marked answer (send) is defensible by S23, because you
   called her number and she answered in her own voice. But the screen the learner has just read tells them an answer is not enough, so following it
   is marked wrong. **Fix:** say on Step 4 what settles it ("When she answers on the number you have, in her own voice, and the story fits, that
   settles it. If anything is off, call someone else in the family", which is S23's order of moves), or add "Call someone else in the family too" at
   turn 2 as a second right ending.
2. **L4 check 20, Marcus** (`items-l4.js:209`; LV l4:458-461): the "How do you check?" set is "Open the link…", "My reply in the chat", and the right
   one, which is two copies of the message's own channel. The plan's round-2 paragraph says the third option is "a look-alike of a way you had …, never
   a second copy of the message's own channel". The right answer stays unique, so this is polish. **Fix:** replace "Open the link…" with "The number I
   find by searching for him on my phone", or "Call back the number my phone shows for the chat".

## C. Structures carried over rather than drawn from this research

None new. The "Real or a scam" facet on the L1 and L2 results (LV l1:561, l2:394) was accepted in round 1 and is unchanged.

## D. Questions with a wrong, arguable or guessable marked answer, or wrong feedback

1. **L6 item 14 x-rosa, turn 1 "Stop replying"** (`items-l6.js:158, 164`; LV l6:327). It shares the `dropped` ending with turn 2's "Stop replying
   anyway", so at turn 1 the learner reads "Rosa was real and needed the money; the check had already settled it". No check has happened at turn 1, so
   the feedback is false, and it does not name the step that decided (a person you know asks for money you had not agreed, so you check; the plan:
   "feedback that names the step that decided"). **Fix:** a separate ending for turn 1, e.g. `droppedEarly`: "Rosa was real and needed the money. She is
   someone you know, so a call to her saved number would have settled it; dropping it costs her, not a scammer."
2. **L6 item 14 x-rosa, turn 2**: see B1. With Step 4 as written, "Stop replying anyway" is not defensible, but the screen invites it. B1's fix
   removes the conflict.

## Polish (does not decide a verdict)

- **L0 Q1** (`items-baseline.js:10-12`; LV l0:26): "The tickets were $30 each, so $30 from you." reads oddly. Use "Your ticket was $30."
- **L3 item 2** (`items-practice.js:36-37`; LV l3:66-68): "You are cooking dinner" with the text at 9:04 AM.
- **L4 check 17, Quillon** (`items-l4.js:178-185`; LV l4:387-400): a genuine text built with `scamSms` that carries a link and also says "Install it
  from your app store". "Do what it says" is open to tapping the texted link, which L2 says belongs to the sender. **Fix:** drop the link, or say "Open
  your app store and search for Quillon Pharmacy".
- **L4 Step 3 compare** (`l4.lesson.js:37`; LV l4:39): "Rosa's you did, at lunch", where the lunch is in no table cell.
- **L5 item 10 and check 20** (`items-l5.js:112, 214`): the right answer is the company's app, but the context says only "You have an … account".
  Add "and its app", as the other items do.
- **L3 check 21, L4 check 19** (`items-check.js:59`; LV l3:470, l4:434): the "Leave it" outcome is harmless, so it does not show why leaving a real
  message from someone you deal with is wrong. Name the cost (a copy using their name goes unchecked; the real request goes unanswered).
- **L2 check 15** and **L6 item 6**: the two round-3 fixes not landed (above).
- **The note, S28**: correct the quote to "a phone number you know is real".

## Counts by kind

| Kind | Deciding | Polish |
|---|---|---|
| Wrong, out-of-date or unsupported facts | 0 | 2 (A1, A2) |
| Departures from the way of thinking or the plan | 1 (B1, L6) | 1 (B2, L4) |
| Carried-over structures | 0 | 0 |
| Wrong, arguable or guessable answers, or wrong feedback | 1 (D1, L6; D2 is B1) | — |
| Other polish (wording, claimed fixes not landed, note quote) | — | 8 |
