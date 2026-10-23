# IT Help Desk: Finishing: confirm, hand on, write it up

Revision 2, live. Part: Finishing: confirm, hand on, write it up. Where the subject ends up: Take a ticket you have never seen (a user's email, chat or call about a computer, phone, printer, network, account or security problem) and work it the way a help desk technician does: sort it and set its priority, get the user's story and what changed, try the known fix with a limit, then narrow it down with the cheapest test that splits what works from what does not, fix one thing at a time, confirm with the user and write it up, or hand it on with everything you found; and know every fact and scenario on both CompTIA A+ exams well enough to pass them.

## The why

You re-add Thabo’s shared drive and it opens on your screen. You close the ticket. At 2:55 they write: it still shows a red X on their laptop, and their work is due at 3.
The last three moves: close only when the user says it works, hand it on when the desk’s rule says so with everything you found, and write the note the next technician can search for and use.

## Step 1: Close when the user says it works

A fix is done when the user can do the thing they could not do, not when it works on your screen. So before you close, tell them what you changed and what to try, then have them try it themselves, on their own computer, with the work they were doing.
Tell them how to reach you if it comes back, and how to keep working meanwhile if the fix must wait (a workaround).
Close the ticket as fixed only after they say yes. When they do, write the note, then close the ticket: the note is part of closing. A “thanks” before they have tried it is not a yes. If they stay silent, your own test does not close it: you follow up on the desk’s schedule, by a different way each time if you can, saying again what you changed and how to check it. Until the user says it works, the ticket stays open. The desk’s rule gives the schedule and what happens at its end, in a quoted block like the one below. No ticket is closed without the user’s yes.
ITIL 4 (a guide to running IT services) makes the user’s confirmation part of closing; the A+ objectives (CompTIA’s list for entry-level technicians) add a follow-up after the fix.

A plain table, "This desk’s rule":

> Rule  (the column heads)
> After a fix, follow up on day 1, day 3 and day 5, a different way each time (chat, email or phone). The ticket stays open until the user says it works. With no answer after day 5, write “no answer” in the note and tell the desk lead; the ticket stays open.

## Step 2: Hand it on with everything you found

Some tickets are not yours to finish. The desk’s own rule says so: it sends this kind of ticket to a team, or it gives a time box (the most time you may spend on one ticket), or you lack the access the fix needs. A known fix that fails does not send a ticket on by itself; you narrow the problem down first. When the rule says to hand on, you pass the ticket to the next person, often a more senior technician. Desks also call this escalating; here both words mean only this. Handing on takes the place of closing the ticket yourself; either way you write the note.
Four things go with it. What the user saw, in their words. What you tried, in order. What each test showed, including the ones that ruled something out. And the device and setup. Without them the next person starts over.
Tell the user who has the ticket now and when they will hear. Handing on does not end your part: a handed-on ticket still closes when the user says it works.

## Step 3: The note the next technician can use

A ticket note is not “fixed”. The next time a user describes the same trouble, a technician searches the desk’s knowledge base (its collection of past fixes) for it. Your note is the answer they find. A published standard for help desks, called knowledge-centered service, keeps four things:
Their words: what the user saw, as they said it, shortened but not relabelled; this course leaves out insults and keeps the facts (“since the update”, “only that spreadsheet”). The setup: the device, the system, the network and the account. What fixed it. What caused it, if you know; say so when it is a likely cause and not a proved one.
Write complete thoughts, not necessarily full sentences. A ticket record also holds the user, the device, a category, how serious it is, your progress notes, and how it ended.
An incident is one ticket: one person cannot do something. A problem is the cause behind tickets that keep coming, the same thing happening again and again. When it does, close this user’s ticket as usual and hand the pattern on with the tickets as evidence, so someone looks for the cause. How many repeats make a pattern is the desk’s rule. One outage that hits many people at once is not a problem; it is one incident with a big impact.

An email: "Desk ticket", Thabo Nair, the S: drive.

> Subject: **A ticket note**
>
> Their words: “red X on S:, cannot open the month-end folder.”
> Setup: Windows 11 laptop, office Wi-Fi, signed in as pnair.
> Fixed by: disconnecting S: and connecting it again.
> Cause: not known; it began after their password change on Monday.

## Step 4: The common mistake

A wrong idea, marked wrong: “It worked on my test, so I close it.” “I know what I did, so a note that says ‘fixed’ is enough.” “They have not answered in a day, so I close it.”
The right line: Your test is not the user’s work, silence is not a yes, and “fixed” tells the next technician nothing. Have the user try it, follow up when they do not answer, then write their words, the setup, the fix and the cause.

## Step 5: A worked example

A shared drive is a folder on a company server that shows up on your computer as a letter, here S:.

An email: "Thabo Nair, Accounts", Email · 9:02 AM.

> Subject: **S: drive has a red X**
>
> Since this morning the S: drive on my laptop has a red X and I cannot open the month-end folder.
> I changed my password on Monday.
> Closing is due at 3 and I need that folder.

A plain table, "Your log for Thabo’s ticket":

> Time  |  What you did  |  What it showed  (the column heads)
> 9:05  |  Restarted their laptop  |  Red X still there
> 9:10  |  Had Margaret, at the next desk, open S: on their laptop  |  It opens, so the file server is up
> 9:15  |  Disconnected S: on Thabo’s laptop and connected it again  |  S: opens and the month-end folder is there

Before the working, the learner may commit to a choice (not scored, not stored):
**The drive opens on your screen. What do you do before closing?**
(the options come in an order that depends on the seed of the question)
- Have Thabo open the folder themself, then write the note and close once they say it opens
- Close the ticket, since S: opened on your screen and the server is up
- Tell them what you changed, close the ticket, and tell them to write back if the red X returns

The working, one step at a time:
1. Start from your first guess.: Your first guess was that the file server was down, since the drive lives on it. Margaret opened the same drive on their laptop, so the server is up. That test ruled the guess out: the fault is on Thabo’s laptop, so you connected the drive again there.
1. Check that it works for them.: The drive opened on your screen, but that is your test. Thabo needs the month-end folder. Have them open it themself and tell you what they see. They say it opens. Next you write the note, and then the ticket closes.
1. Write what the next tech needs.: Their words: “red X on S:, cannot open the month-end folder.” Setup: Thabo’s Windows 11 laptop, office Wi-Fi, signed in as pnair. Fixed by: disconnecting S: and connecting it again. Cause: not known; it began after their password change on Monday, so the drive may have kept the old sign-in. Now the ticket closes.

Then the answer: Have Thabo open the folder themself, then write the note and close once they say it opens. The drive opening on your screen is your test, not Thabo’s work. The ticket closes when they say the month-end folder opens for them, after you write the note that gives the next tech their words, their setup, the fix, and the cause as far as you know it.

## Step 6: Questions

4 questions, listed, with help (shown). A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 1

You fixed the shared printer by adding it again. A test page printed from the printer’s own screen.

A chat, with its history: "Harriet Okafor", Chat · 10:40 AM.

> (Harriet Okafor, at the left) I am in meetings until 3, but the printer was dead at 9.
> (Harriet Okafor, at the left) **Did you fix it?**

Help on screen: the words that decide it are marked.

**What do you do?**
(the options come in an order that depends on the seed of the question)
- Tell them what you changed, have them print one page from their own laptop after their meetings, and keep the ticket open until they say it printed (right)
- Close the ticket, since the test page printed, and tell them to write back after their meetings if their own laptop still cannot print to it — if chosen: The test page came from the printer, not from Harriet’s laptop. If their laptop still cannot print, they learn it with the ticket closed.
- Reply that the printer is fixed and they can try it from their laptop after their meetings, then leave the ticket open and wait for them to write — if chosen: They do not know what you changed, what to try, or how to reach you if it fails. “Fixed” leaves their guessing.

After the answer: the deciding words are marked. Reason: Your test page came from the printer, not from Harriet’s laptop, and their laptop is where it broke. Tell them what you changed and what to try, and close when they say it printed.

#### Item 2

Meredith’s docking station (the box that connects their laptop to two monitors) is broken. The new one arrives Thursday. The desk has one loaner dock free.

A chat, with its history: "Meredith Patel", Chat · 2:15 PM.

> (Meredith Patel, at the left) So do I just wait?
> (Meredith Patel, at the left) **I need both screens for the budget review on Wednesday.**

Help on screen: the words that decide it are marked.

**What do you tell Meredith?**
(the options come in an order that depends on the seed of the question)
- The new one arrives Thursday; close the ticket now since the part is ordered, and they can write back on Thursday if it does not work — if chosen: Nothing works for them yet, and their review is a day before the part comes.
- The new one arrives Thursday; until then a loaner dock if there is one, or the laptop screen alone, and the ticket stays open until the new one works (right)
- The new one arrives Thursday; you will write them as soon as it is in, and until then there is nothing more you can do about their review — if chosen: They still have no way to work on Wednesday.

After the answer: the deciding words are marked. Reason: The real fix cannot happen until Thursday, but their work is on Wednesday. Say what happens next and when, and give them a workaround (a way to keep working until the fix). The ticket stays open until the new dock works for them.

#### Item 3

Lena Ortiz works from home and cannot reach the company through the VPN (the private connection from their laptop to the company’s network). You started at 2:00 and it is now 2:20.

A plain table, "Your log, 20 minutes in":

> Time  |  What you did  |  What it showed  (the column heads)
> 2:00  |  Restarted their laptop  |  Same message: it cannot reach the server
> 2:08  |  Reinstalled the VPN app  |  Same message
> 2:15  |  Tried their phone’s hotspot (its internet connection, shared with the laptop) instead of their home Wi-Fi  |  Same message, so their home network is not the cause

A plain table, "This desk’s rule":

> Rule  (the column heads)
> Hand on any VPN problem to the network team after 20 minutes on one ticket.  <- marked after the answer

Help on screen: the words that decide it are marked.

**What do you do now?**
(the options come in an order that depends on the seed of the question)
- Try a fourth fix, such as reinstalling the Wi-Fi driver (the software that runs their Wi-Fi card), since you still have ideas — if chosen: The desk’s rule says to hand on at 20 minutes. More guesses cost Lena more hours.
- Tell Lena it is a network problem, give them the network team’s number, and have them call the team themself — if chosen: Lena has to explain everything again, and the team gets none of your tests.
- Hand it to the network team with their words, their laptop, the three tries and what each showed, and tell Lena who has it now (right)

After the answer: the deciding words are marked. Reason: The desk’s rule sends VPN problems to the network team after 20 minutes, and the 20 minutes are up. You hand it on with everything you found, and tell Lena who has it.

#### Item 4

An email: "Desk ticket", To the network team.

> Subject: **Hand-on note A**
>
> **Lena Ortiz says: “It says it cannot reach the server.”**
> **Their work laptop, Windows 11, at home on their own Wi-Fi.**
> **Tried: restarted the laptop; reinstalled the VPN app. Same message both times.**
> **Same message on their phone’s hotspot, so their home network is not the cause.**

An email: "Desk ticket", To the network team.

> Subject: **Hand-on note B**
>
> Lena can’t get on the VPN from home. I restarted their laptop, reinstalled the VPN app and tried their hotspot. Nothing worked. Please look into it as soon as you can.

Help on screen: the words that decide it are marked.

**Which one can the network team use without calling Lena again?**
(the options come in an order that depends on the seed of the question)
- Note A (right)
- Note B — if chosen: It lists what was tried but not their words, their device or what each test showed. The team has to go back to Lena.

After the answer: the deciding words are marked. Reason: Note A carries their words, their device, what you tried and what each test showed. Note B says what was done, but not what happened after each try, so the next person cannot use it.

Then a screen: you can stop here, your place is kept.

## Step 7: Questions

5 questions, shuffle. A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 5

An email: "Desk ticket", Excel freezes.

> Subject: **Ticket note**
>
> Their words: “Excel freezes whenever I open the budget file.”
> Fixed by: repairing Microsoft Office from the Settings app, then restarting.
> Cause: likely a damaged Office file after an update; not proved.

**A ticket note should hold four things: their words, the setup, what fixed it, and what caused it. Which one is missing here?**
(the options come in an order that depends on the seed of the question)
- What fixed it: what you did that made it work — if chosen: The second line has it.
- The setup: which computer and what it runs on (right)
- Their words: what the user saw — if chosen: The first line has them, in quotation marks.
- What caused it: why it happened — if chosen: The third line has it.

After the answer: Reason: The note has the user’s words, the fix and the cause, but not which computer, which version of Windows or which network. The setup is what lets the next tech tell whether the same fix fits.

#### Item 6

An email: "Desk ticket", Wi-Fi in meeting room 3.

> Subject: **Note A**
>
> Their words: “The Wi-Fi keeps dropping me in meeting room 3.”
> Setup: Dell laptop, Windows 11, office Wi-Fi, second floor.
> Fixed by: forgetting the office Wi-Fi network and joining it again.
> Cause: not known. It began after Tuesday’s update.

An email: "Desk ticket", Wi-Fi in meeting room 3.

> Subject: **Note B**
>
> Wi-Fi problem fixed after an hour with Jun.
> Looked at the router, checked the cable, then the driver (the software that runs a part), and in the end it worked again. Jun was happy.
> Closed.

**The same complaint comes in next month. Which note will the next tech use?**
(the options come in an order that depends on the seed of the question)
- Note B — if chosen: It is longer and tells the story of the hour, but not what the user saw, which computer it was, or what fixed it.
- Note A (right)

After the answer: the deciding words are marked. Reason: Note A has the four things: the user’s words, the setup, what fixed it, and what caused it, as far as known. Note B tells the story of the hour but not what to try next time.

#### Item 7

An email: "Desk ticket", Teams shows offline.

> Subject: **Ticket note**
>
> Their words: “Teams shows me offline all morning but my email works.”
> Setup: MacBook Air, home Wi-Fi, the company Teams app.
> Tried: restarted the laptop. No change.
> Tried: Teams on their phone works, so their account is fine.
> Tried: cleared the app’s saved temporary files (its cache). Still offline.
> Signed out of Teams and back in. It shows online.
> Cause: not known.

**Tap the line that tells the next tech what fixed it.**
- Tap a sentence in the text above. Nothing is marked before the answer, and a tap is the answer.
- "Their words: “Teams shows me offline all morning but my email works.”" — if tapped: That is not the sentence.
- "Setup: MacBook Air, home Wi-Fi, the company Teams app." — if tapped: note: That is the setup, not the fix.
- "Tried: restarted the laptop. No change." — if tapped: note: That was tried, and it did not fix it.
- "Tried: Teams on their phone works, so their account is fine." — if tapped: note: That test ruled out the account. It did not fix anything.
- "Tried: cleared the app’s saved temporary files (its cache). Still offline." — if tapped: note: That was a change, and it did not fix it.
- "Signed out of Teams and back in. It shows online." (right)
- "Cause: not known." — if tapped: That is not the sentence.

After the answer: the deciding words are marked. Reason: The fix is the one change that changed the symptom: signing out and back in. The restart and the cleared files changed nothing, and the phone test only showed the account was fine.

#### Item 8

A plain table, "Printer tickets this week":

> Day  |  Who  |  Ticket  |  What fixed it  (the column heads)
> Mon  |  Douglas  |  Third floor printer offline  |  Restarted the printer
> Tue  |  Ronan  |  Third floor printer offline  |  Restarted the printer
> Wed  |  Chloe  |  Third floor printer offline  |  Restarted the printer
> Thu  |  Leah (yours)  |  Third floor printer offline  |  Not yet

A plain table, "This desk’s rule":

> Rule  (the column heads)
> The same fault on three tickets in a week is raised as a problem.

**You restart the printer for Leah and it prints. What do you do?**
(the options come in an order that depends on the seed of the question)
- Close Leah’s ticket after they confirm, and write in the note that restarting the printer fixed it, as it did last time — if chosen: The note is right, but nobody sees that four people lost time to one printer. The cause is never looked for.
- Tell Leah to restart the printer themself whenever it goes offline in the future, and close their ticket once they confirm it works again — if chosen: That hides the pattern. The desk never learns that four people lost time to one printer.
- Close Leah’s ticket after they confirm, and hand on the pattern as a problem: four tickets, one printer, the same fix each time (right)

After the answer: the deciding words are marked. Reason: The same fault on the same printer four times in a week meets the desk’s rule for a problem: something keeps happening. Fix Leah’s, then hand on the pattern with the tickets as evidence.

#### Item 9

You have just fixed a user’s laptop. Put the end of the ticket in order.

**Tap the steps in the order you do them.**
- Tap the four steps in the order you would do them. The steps are offered mixed (never already in the right order): "Tell the user what you did, what to try and how to reach you"; "The user tries it and says it works"; "Write the note: their words, the setup, what fixed it, what caused it"; "Close the ticket". Each tapped step is numbered; "Start again" clears the taps; the answer is the order tapped once 4 are.
- Right: Tell the user what you did, what to try and how to reach you, then The user tries it and says it works, then Write the note: their words, the setup, what fixed it, what caused it, then Close the ticket. After a miss: "You put: …" and why the order matters: The user’s yes comes before the note and the note before the close, so the note says what really fixed it and the ticket is not closed on your test.

After the answer: Reason: The ticket closes last, after the user says it works. The note comes just before it, once you know what fixed it.

Then a screen: you can stop here, your place is kept.

## Step 8: Questions

5 questions, shuffle, with about 30% from earlier lessons mixed in, unlabeled. A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 10

You fixed the calendar on Kendall Cole’s phone on Monday. On Tuesday, day 1, you emailed them what you changed and how to check it. It is now Thursday, day 3. They have not answered.

A plain table, "This desk’s rule":

> Rule  (the column heads)
> After a fix, follow up on day 1, day 3 and day 5, a different way each time (chat, email or phone). The ticket stays open until the user says it works. With no answer after day 5, write “no answer” in the note and tell the desk lead; the ticket stays open.

**What do you do today?**
(the options come in an order that depends on the seed of the question)
- Close it as “fixed”: they have had two days, and they can write back if the calendar fails — if chosen: They have not said it works, and the desk’s rule does not allow “fixed” without a yes.
- Write “no answer” in the note and tell the desk lead, since they have not replied in two days — if chosen: The rule has you do that only after day 5. Today is day 3, and the follow-up comes first.
- Leave the ticket open with a note that it is fixed, and wait for them to write back — if chosen: The rule calls for a follow-up today, and a note saying “fixed” is not them yes.
- Write them on chat this time: what you changed, and how to check the calendar (right)

After the answer: the deciding words are marked. Reason: Silence is not a yes. The desk’s rule says to follow up on day 3 by another way, and the ticket stays open until they say it works. If day 5 passes in silence, the note says so and the desk lead is told.

#### Item 11

An email: "Desk ticket", To the network team.

> Subject: **Hand-on A**
>
> Lena Ortiz cannot reach the VPN from home. I restarted their laptop and reinstalled the VPN app. It did not work. They say it started after they changed their password. Please look.

An email: "Desk ticket", To the network team.

> Subject: **Hand-on B**
>
> Lena Ortiz says: “It says it cannot reach the server.” Their work laptop, Windows 11, at home on their own Wi-Fi. They say it started after they changed their password.
> Restarted and reinstalled the VPN app: same message. Same message on their phone’s hotspot, so their home network is not the cause.

An email: "Desk ticket", To the network team.

> Subject: **Hand-on C**
>
> Lena Ortiz says: “It says it cannot reach the server.” Their work laptop, Windows 11, at home on their own Wi-Fi. They have been without the VPN since 2:00 and have a deadline.

**Which one can the network team use without going back to Lena?**
(the options come in an order that depends on the seed of the question)
- Hand-on A — if chosen: It says what you did, but not their words, their device or what each try showed. The team may repeat the restart and the reinstall.
- Hand-on B (right)
- Hand-on C — if chosen: It has their words and their device but nothing you tried. The team repeats the restart and the reinstall.

After the answer: the deciding words are marked. Reason: Only B has everything the next person needs: the words, the device, what was tried and what each test showed. A and C each leave out half of it.

#### Item 12

You handed Lena’s ticket to the network team. The desk’s table says that team answers within 4 working hours. It is 2:30 PM.

**What do you tell Lena?**
(the options come in an order that depends on the seed of the question)
- The network team has the ticket with everything you tried, and they will get back to you soon, so there is nothing more for them to do — if chosen: “Soon” gives them nothing to plan on, and they do not know whether to explain it again.
- It is out of your hands now that the network team has the ticket, and they can call them themself if they want news or have anything to add — if chosen: They are left to chase it themself, and do not know what was passed on.
- The network team has the ticket with everything you tried, they answer within 4 working hours, and you will write them at 5:00 with where it stands (right)

After the answer: Reason: Handing on does not end your part with the user. Tell them who has it now, what has been passed on and when they will hear.

#### Item 13

Kendall’s calendar stopped syncing on their phone the day after they changed their company password. You had them sign out of the calendar on the phone and back in, and it syncs again. You are writing the “caused by” line.

**Which line goes in the note?**
(the options come in an order that depends on the seed of the question)
- Caused by: the calendar app on the phone was out of date, so it stopped syncing with their account — if chosen: Nothing you saw shows an old app. It sends the next tech to update the app first.
- Caused by: Kendall changed their password and did not sign in again on the phone afterwards, which is their mistake — if chosen: It puts the blame on Kendall, and it states a guess as a fact.
- Cause: not confirmed; it began the day after their password change, so the phone probably kept the old password (right)

After the answer: Reason: A cause line says what the next tech can check, and says so when it is a likely cause rather than a proved one.

#### Item 14

A chat, with its history: "Sanjay Reyes", Chat · 11:20 AM.

> (Sanjay Reyes, at the left) It is just slow, you know, since the update, mostly when I open the big spreadsheet from the sales folder. Your update ruined my laptop.

This course leaves insults out of the note and keeps the facts.

**Which line goes under “their words” in the note?**
(the options come in an order that depends on the seed of the question)
- “It has been slow for ages, you know, and it is driving me up the wall at work.” — if chosen: It is their wording, but it drops the clues: since the update, and only that spreadsheet.
- Performance problem with a large spreadsheet file after the latest update — if chosen: That is your label. A search for their words would never find it.
- “Slow since the update, mostly when I open the big spreadsheet from the sales folder.” (right)

After the answer: the deciding words are marked. Reason: The first field is what the user said, shortened but not relabelled. Leave out the insult and keep details such as “since the update”, which a later search will match.

Then a screen: you can stop here, your place is kept.

## The check

6 new questions, no help. No answer is shown until the end. The questions come in mixed order.

To pass:
- At least 5 right
- None closed the ticket before the user confirmed it works

#### Check question 15

Gunnar Idowu said their email stopped receiving new mail. You repaired their mail profile (the saved settings that connect their mail program to their account), and new mail arrived on your test.

A chat, with its history: "Gunnar Idowu", Chat · 4:50 PM.

> (Gunnar Idowu, at the left) I am leaving in ten minutes.
> (Gunnar Idowu, at the left) Is it done?

**What do you do?**
(the options come in an order that depends on the seed of the question)
- Tell them what you changed and close the ticket now, since new mail arrived on your test and they are about to leave — if chosen: Gunnar has not seen their own mail arrive.
- Tell them it is done and tell them to write back tomorrow if new mail is still missing — if chosen: They do not know what changed or how to reach you. If it fails, they find out tomorrow, with the ticket closed.
- Tell them what you changed, have them check for new mail before they leave, and close once they say they see it (right)

After the answer: Reason: Their mail arriving on your test is not their mail arriving. They have ten minutes: use them to have them check, then close.

#### Check question 16

An email: "Desk ticket", Word closes on its own.

> Subject: **Note A**
>
> Their words: Word instability when saving large documents.
> Setup: HP laptop.
> Fixed by: moved the file.
> Cause: the shared drive is slow.

An email: "Desk ticket", Word closes on its own.

> Subject: **Note B**
>
> Their words: “Word closes by itself when I save a long file.”
> Setup: HP laptop, Windows 11, Office 365, files on the S: drive.
> Fixed by: moving the file to the desktop, saving there, moving it back.
> Cause: not known; the shared drive may be slow.

**Which note will help the next tech who gets the same complaint?**
(the options come in an order that depends on the seed of the question)
- Note A — if chosen: It relabels what the user said, leaves out the system and the program version, says only “moved the file”, and states a guess about the drive as the cause.
- Note B (right)

After the answer: the deciding words are marked. Reason: Note B has the four things: the user’s own words, the full setup, the exact fix and a hedged cause. Note A has the same four headings but relabels their words and states a guess as the cause.

#### Check question 17

Pedro Alves can print from Excel but not from Word. You restarted the print service (the part of Windows that sends pages to the printer), then added the printer again; Word still fails and Excel still works.

A plain table, "This desk’s rule":

> Rule  (the column heads)
> Hand on any Office problem to the software team after 20 minutes on one ticket.

Your 20 minutes are up.

An email: "Desk ticket", To the software team.

> Subject: **Draft X**
>
> Pedro Alves can’t print from Word. I restarted the print service and added the printer again, and it did not help. Please look.

An email: "Desk ticket", To the software team.

> Subject: **Draft Y**
>
> Pedro Alves says: “Word does nothing when I press print, but Excel prints fine.” Windows 11, Office 365, the second floor printer.
> Restarted the print service: no change. Added the printer again: no change. Excel still prints, so the printer and the connection to it work.

An email: "Desk ticket", To the software team.

> Subject: **Draft Z**
>
> Pedro Alves says: “Word does nothing when I press print, but Excel prints fine.” Windows 11, Office 365, the second floor printer. They need it printed today.

**Which draft do you send?**
(the options come in an order that depends on the seed of the question)
- Draft X — if chosen: It has your tries but not what they saw, their setup, or the Excel test that points at Word.
- Draft Z — if chosen: It has their words and their setup, but nothing you tried, so the team repeats it.
- Draft Y (right)

After the answer: the deciding words are marked. Reason: Draft Y has their words, the setup, what you tried and what each test showed. The Excel result is the most useful line, because it tells the software team where to look.

#### Check question 18

An email: "Desk ticket", To the network team.

> Subject: **Hand-on note**
>
> Russell Moreau says: “The VPN window just spins and spins.”
> Their work laptop, Windows 11, at home on their own Wi-Fi.
> Tried: restarted the laptop and reinstalled the VPN app.
> Handed on at 3:10 because the desk’s 20 minutes were up.

**Tap the line that says what your tests showed. If the note has none, tap Not given.**
- Tap a sentence in the text above. Nothing is marked before the answer, and a tap is the answer.
- "Russell Moreau says: “The VPN window just spins and spins.”" — if tapped: That is not the sentence.
- "Their work laptop, Windows 11, at home on their own Wi-Fi." — if tapped: That is not the sentence.
- "Tried: restarted the laptop and reinstalled the VPN app." — if tapped: note: That says what was tried, not what it showed.; slip: handed it on without what was found and tried
- "Handed on at 3:10 because the desk’s 20 minutes were up." — if tapped: note: That says when and why, not what the tests showed.
- A button: "Not given" (right)

After the answer: Reason: The note says what was tried and why it was handed on, but never what happened after each try. The team cannot tell whether the restart changed anything, so they may repeat it.

#### Check question 19

A plain table, "Meeting room tickets this month":

> Date  |  Who  |  What they said  |  What fixed it  (the column heads)
> 3rd  |  Jun  |  Wi-Fi drops in room 3  |  Joined the Wi-Fi again
> 10th  |  Tucker  |  Wi-Fi drops in room 3  |  Joined the Wi-Fi again
> 17th  |  Kevin (yours)  |  Wi-Fi drops in room 3  |  Not yet

A plain table, "This desk’s rule":

> Rule  (the column heads)
> The same fault on three tickets in a month is raised as a problem.

**You fix Kevin’s the same way and they say it works. What else do you do?**
(the options come in an order that depends on the seed of the question)
- Close their ticket after they confirm and note that joining the Wi-Fi again fixed it, the same as for Jun and Tucker — if chosen: The note is right, but three people in one room is a pattern, and no one is looking for the cause.
- Close their ticket after they confirm, and hand on the pattern with all three tickets as a problem about room 3 (right)
- Tell Kevin to join the Wi-Fi again whenever it drops in room 3, and close their ticket once they confirm it works — if chosen: That fixes Kevin’s next time but hides the pattern from the desk.

After the answer: the deciding words are marked. Reason: The same fault in the same place three times meets the desk’s rule for a problem, not three separate incidents. Fix Kevin’s, then hand on the pattern with the tickets as evidence.

#### Check question 20

You fixed the scan-to-email on Eunice Adeyemi’s office printer on Monday of last week. You emailed them on day 1, wrote on chat on day 3 and left a voicemail on day 5. It is day 6. They have not answered.

A plain table, "This desk’s rule":

> Rule  (the column heads)
> After a fix, follow up on day 1, day 3 and day 5, a different way each time (chat, email or phone). The ticket stays open until the user says it works. With no answer after day 5, write “no answer” in the note and tell the desk lead; the ticket stays open.

**What do you do today?**
(the options come in an order that depends on the seed of the question)
- Close it as “fixed”: they had three chances to say it failed, and nothing came back — if chosen: Nobody has said it works. “Fixed” needs them yes.
- Note “no answer” with the three follow-ups, tell the desk lead, and leave the ticket open (right)
- Send a fourth message and keep going every day until they answer, however long that takes, since silence may only mean they are busy — if chosen: The desk’s rule ends the follow-ups at day 5 and sends the ticket to the desk lead.
- Close it as “no answer, not confirmed”, since the follow-ups are used up — if chosen: No ticket closes without the user’s yes, even with a different label.

After the answer: the deciding words are marked. Reason: Silence is never a yes, so the ticket is not closed, under any label. After day 5 with no answer, the desk’s rule is to write “no answer” in the note and tell the desk lead.

## The result

For example "6 of 6: passed" or "4 of 6: not yet", each rule above shown as met or not met, then every answer with its feedback, the missed ones first.
