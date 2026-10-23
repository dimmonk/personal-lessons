# IT Help Desk: The known fix, and when to stop

Revision 2, live. Part: The known fix, and when to stop. Where the subject ends up: Take a ticket you have never seen (a user's email, chat or call about a computer, phone, printer, network, account or security problem) and work it the way a help desk technician does: sort it and set its priority, get the user's story and what changed, try the known fix with a limit, then narrow it down with the cheapest test that splits what works from what does not, fix one thing at a time, confirm with the user and write it up, or hand it on with everything you found; and know every fact and scenario on both CompTIA A+ exams well enough to pass them.

## The why

Mildred’s printer says offline. A technician who has seen this before tries the fix at once. A beginner tries things until one works, and an hour later still does not know why.
Here you learn what the experts do: try the fix that is already known, decide beforehand how long you will try, and stop guessing when the limit is reached.

## Step 1: Try the fix that is already known

This move comes after the story, what changed and the backup of the last two parts. A technician who has seen a symptom before often makes a change after a short look, to see whether it fixes it. That is not random. It rests on knowing the usual causes of that symptom, and it often works. If you have seen the symptom yourself, your own memory is a source of the known fix.
When you have not, the desk’s knowledge base holds what others have seen: a library of articles written by the people who solved the same symptom before. Search it with the user’s own words, then check the article’s “applies to” line against the user’s device and system. Follow its steps as written. That is the known fix. A restart is also a fair first try, if the user has not already done one.
When you use an article you also check it. If a step is out of date, fix it or tell the person who owns it, so the next technician is not slowed.
While you try, think about the user. If they are stopped from working, offer a workaround (a temporary way to keep going, such as printing on another printer). It does not count as a try.

## Step 2: Decide the limit before you start

If a quick fix does not work, you are no closer to the cause. Each failed guess teaches you almost nothing. So before the first try, decide your own limit: so many tries, or so many minutes, whichever runs out first. No exam or study gives a number, and this two-part limit is a working habit, not a sourced rule. A quick fix is a few tries and a few minutes, and a user who cannot work needs a shorter limit than one who can. Tries are your own: a restart the user already did before they called is not one of yours.
Some desks have a rule of their own, such as a time on one ticket. If yours does, you follow it as well.
A quick try takes minutes, loses nothing and is easy to undo. An article may also hold a step that erases files, such as deleting a profile or resetting the computer to its factory state. Copy the files first, as in the last part; that step is not a quick try, and it does not belong inside the limit.

A wrong idea, marked wrong: “That did not work, so I will try the next thing I can think of.”
The right line: Each failed guess leaves you no closer to the cause. At the limit, stop guessing.

## Step 3: When the limit is reached

Stop. Write one line for each try: what you did, how long, what happened. Then narrow the problem down, which is the next part.
Written tries let you pick up where you left off. If the desk’s own rule says to hand the ticket on at this point, the next person can start from your lines without repeating your work. A failed known fix is not a reason to hand on by itself.
Do not close the ticket as “cannot reproduce” (closing because you cannot make the fault happen again). That is not the same as fixed, and the user still has the fault.

Words these tickets use. A print queue is the list of documents waiting to print. A driver is the small program that lets Windows talk to a device; the graphics driver runs the screen. A cache is a store of saved copies that a program keeps to run faster. Toner is the powder a laser printer prints with. Office is Microsoft’s group of programs, such as Word, Excel and Outlook. A shared drive is a folder on a company server that many people open. A troubleshooter is a Windows tool that checks for common faults and tries fixes. A profile is the folder where Windows keeps a person’s files and settings. A portal is the company’s web page for things like password resets. A sign-in loop is the sign-in screen coming back again and again.

## Step 4: A worked example

A chat, with its history: "Mildred Barrett", Chat · Tuesday 10:02 AM.

> (Mildred Barrett, at the left) The second-floor printer says offline and my report won’t print.
> (Mildred Barrett, at the left) I’m on a Windows 11 PC. I already restarted it this morning.

You have their story and what changed, and no step here can lose files. This desk has no rule about handing on.

A plain table, "Knowledge base search: “printer offline”":

> Article  |  Applies to  |  What it says  (the column heads)
> Printer shows Offline  |  Windows 11 PC  |  Turn the printer off for 10 seconds and on again. On the PC, cancel all print jobs, then print a test page.
> Printer shows Offline  |  Mac  |  Open System Settings, remove the printer, and add it again.
> Printer prints blank pages  |  Windows 11 PC  |  Replace the toner and print a test page.

Before the working, the learner may commit to a choice (not scored, not stored):
**Before you start trying fixes, what do you decide?**
(the options come in an order that depends on the seed of the question)
- A number of tries and a number of minutes, picked now, whichever runs out first
- Nothing yet: I will see how the first try goes and decide on a limit after that
- Which senior technician I will hand it to if the first try does not work out

The working, one step at a time:
1. Decide the limit before you try anything.: Mildred cannot print, so I pick a short one: two tries or ten minutes. That is my own choice for this ticket; no book gives the number.
1. Check what has already been tried.: A restart is a fair first try, but they already restarted their PC this morning with no change. That try is theirs, not mine, so it is spent and I do not count it as one of my tries.
1. Search the knowledge base with their words, and check what the article applies to.: Two articles say Offline. One is for a Mac. The other is for a Windows 11 PC, which is theirs.
1. Follow the article exactly as written.: Printer off for 10 seconds and on, jobs canceled on the PC, a test page printed. It prints, about 7 minutes in: the first try worked.
1. Say what you would have done at the limit.: Two tries or ten minutes with no fix means stopping, writing down the tries, and narrowing it down. No third guess.

Then the answer: A number of tries and a number of minutes, picked now, whichever runs out first / Printer shows Offline, Windows 11 PC. The article is the known fix, and it applies to their symptom and their setup. The limit was decided first, so you knew when to stop and what to do if the fix failed.

## Step 5: Questions

4 questions, listed, with help (shown). A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 1

A chat, with its history: "Trevor Rao", Chat · Wednesday 9:12 AM.

> (Trevor Rao, at the left) **My Mac keeps dropping off the office Wi-Fi every few minutes.**

You have their story and what changed, and no step here can lose files.

A plain table, "Knowledge base search: “wi-fi drops”":

> Article  |  Applies to  |  What it says  (the column heads)
> Wi-Fi drops every few minutes  |  Mac  |  Turn Wi-Fi off and on, then forget the office network and join it again.  <- marked after the answer
> Wi-Fi drops every few minutes  |  Windows 11 PC  |  Run the network troubleshooter, then forget the office network and join it again.
> Wi-Fi password not accepted  |  Mac  |  Reset the Wi-Fi password from the portal.

Help on screen: the words that decide it are marked.

**Which article is the known fix?**
(the options come in an order that depends on the seed of the question)
- Wi-Fi drops every few minutes, Mac (right)
- Wi-Fi drops every few minutes, Windows 11 PC — if chosen: The symptom matches, but the steps are for a Windows PC.
- Wi-Fi password not accepted, Mac — if chosen: It is their Mac, but a different symptom: their Wi-Fi connects, then drops.

After the answer: the deciding words are marked. Reason: The symptom and the setup both have to match. Only the first article covers drops on a Mac.

#### Item 2

Hattie Rao says Excel is frozen. The knowledge base has an article for it. You are about to follow it. This desk has no rule about handing on.

Help on screen: the words that decide it are marked.

**Before you follow it, what do you decide?**
(the options come in an order that depends on the seed of the question)
- A cut-off for this ticket: so many tries or so many minutes, whichever comes first (right)
- Nothing until I see what the article does; I can always try more fixes after it — if chosen: Without a cut-off before the first try, a failed fix slides into the next guess.
- To pass it on at once, so the senior technician sees it before I try anything — if chosen: The article costs a few minutes. If it fails you narrow the problem down; you hand on when the desk’s rule says so.

After the answer: Reason: Decide the number of tries and the minutes before you begin. Then a fix that fails does not turn into another guess and another.

#### Item 3

A plain table, "Article: “Printer shows Offline, Windows 11 PC”":

> What the article says  (the column heads)
> 1. Turn the printer off for 10 seconds and on again.
> 2. On the PC, open the print queue (the list of documents waiting to print).
> 3. Click “Reset printer” and print a test page.  <- marked after the answer

It worked. But step 3 names a button that now reads “Clear queue”. You found it by guessing.

Help on screen: the words that decide it are marked.

**What do you do about the article?**
(the options come in an order that depends on the seed of the question)
- Fix the step, or flag it to the person who owns the article (right)
- Leave it as it is, since it worked for me and nobody has complained — if chosen: The next person will hit the same wrong step.
- Take the article down, since one of its steps is wrong — if chosen: Only one word is out of date. The rest fixed the fault, so the article should be corrected, not removed.

After the answer: the deciding words are marked. Reason: Using an article is also a check on it. A step that has gone out of date is fixed or flagged, so the next person is not slowed.

#### Item 4

A plain table, "Your tries so far (the limit you picked: two tries or ten minutes)":

> What you did  |  Minutes  |  Result  (the column heads)
> 1. Restarted their PC  |  3  |  No change  <- marked after the answer
> 2. Followed the article “Printer shows Offline”  |  6  |  Still offline  <- marked after the answer
> Time used so far  |  9  |  Total

Help on screen: the words that decide it are marked.

**The limit is reached and it still fails. What now?**
(the options come in an order that depends on the seed of the question)
- Write one line for each try, then start narrowing the problem down (right)
- Try one more fix that could work — if chosen: A third guess is past the limit. Each failed guess so far left you no closer to the cause.
- Close the ticket as “cannot reproduce” (closing because you cannot make it happen again) — if chosen: The user still has the fault and has not confirmed anything. Closing it now leaves their problem unsolved.

After the answer: the deciding words are marked. Reason: The limit was two tries or ten minutes, whichever comes first. Both tries are used, so the tries ran out first, with a minute to spare. Stop, write the tries down, and narrow it down.

Then a screen: you can stop here, your place is kept.

## Step 6: Questions

6 questions, shuffle. A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 5

A chat, with its history: "Hailey Cole", Chat · Thursday 9:40 AM.

> (Hailey Cole, at the left) Outlook keeps asking me for my password again and again.
> (Hailey Cole, at the left) I’m on a Windows 11 PC.

The knowledge base has an article “Outlook keeps asking for the password” for Windows PCs. You have their story and what changed, and no step in it can lose files. This desk has no rule about handing on.

**What do you do first?**
(the options come in an order that depends on the seed of the question)
- Search the knowledge base with their words and follow the matching article, within a limit (right)
- Start testing causes: another account, another computer, a new profile, a repaired Office — if chosen: That is the work to do after the known fix fails. It takes longer than a few minutes.
- Pass it to the senior technician right now, since they have seen this fault before — if chosen: The known fix costs a few minutes. If it fails you narrow the problem down; you hand on when the desk’s rule says so.

After the answer: the deciding words are marked. Reason: A symptom the desk has already solved is a known fix, and the article is where it is written down. Try it first.

#### Item 6

Davina’s laptop will not connect to the Wi-Fi at their desk. Other people’s laptops connect fine.

**Which of these is cheap enough to try within a limit?**
(the options come in an order that depends on the seed of the question)
- Turn off the laptop’s Wi-Fi, wait a few seconds, and turn it back on (right)
- Reset their laptop to its factory state, which clears every software fault — if chosen: It takes hours and erases their files. It is not a quick try.
- Replace the Wi-Fi card (the part inside the laptop that connects to Wi-Fi) — if chosen: It means opening the laptop and costs far more than a few minutes.

After the answer: Reason: A quick fix takes minutes, loses nothing and is easy to undo. Anything bigger is a plan, not a try.

#### Item 7

A plain table, "What Ugo tried in 40 minutes":

> What they did  |  Result  (the column heads)
> 1. Restarted the PC  |  Screen still flickers
> 2. Pulled out and re-plugged the monitor cable  |  Still flickers
> 3. Reinstalled the graphics driver (the program that runs the screen)  |  Still flickers
> 4. Updated the app  |  Still flickers

**The screen still flickers. What did the four failed tries tell them about the cause?**
(the options come in an order that depends on the seed of the question)
- Very little: each failed try rules out only itself (right)
- That the cause must be the hardware, not the software — if chosen: Nothing in the four tries points at the hardware.
- That a fifth guess is now much more likely to work — if chosen: Each failed guess made the next one no more likely.

After the answer: the deciding words are marked. Reason: A guess that fails brings you no closer. Ugo should have stopped at their limit and cut the problem in half.

#### Item 8

A chat, with its history: "Judith Reid", Chat · Friday 1:05 PM.

> (Judith Reid, at the left) In Teams I can’t hear anyone when I use my headset. My laptop is Windows 11.

You have their story and what changed, and no step here can lose files.

A plain table, "Knowledge base search: “teams no sound”":

> Article  |  Applies to  |  What it says  (the column heads)
> Teams has no sound  |  The meeting room speakers  |  Check that the room’s speaker is chosen as the sound device in the meeting.
> Teams has no sound  |  A headset on a Windows PC  |  Open the audio settings in Teams, choose the headset as the speaker, and run a test call.
> Teams has no sound  |  A phone  |  Check the phone’s volume and silent switch.

**Which article is the known fix?**
(the options come in an order that depends on the seed of the question)
- Teams has no sound, a headset on a Windows PC (right)
- Teams has no sound, the meeting room speakers — if chosen: Same symptom, but the steps are for a room’s speakers.
- Teams has no sound, a phone — if chosen: Same symptom, but the steps are for a phone.

After the answer: the deciding words are marked. Reason: Several articles share a symptom. The “applies to” line decides which one is theirs.

#### Item 9

A plain table, "Your tries so far (the limit you picked: three tries or fifteen minutes)":

> What you did  |  Minutes  |  Result  (the column heads)
> 1. Restarted the app  |  4  |  No change
> 2. Followed the article: clear the app’s cache (its store of saved copies)  |  11  |  No change
> Time used so far  |  15  |  Total

**It still fails. What now?**
(the options come in an order that depends on the seed of the question)
- Stop trying fixes, note each try with its minutes, and narrow it down (right)
- Use the third try, since only two of the three are used — if chosen: The minutes ran out first. The limit ends at whichever comes first.
- Close the ticket, since two reasonable tries did not reproduce a fault — if chosen: The user still has the fault and has not confirmed anything.

After the answer: the deciding words are marked. Reason: The limit is three tries or fifteen minutes, whichever comes first. The minutes are used, so stop.

#### Item 10

A plain table, "Your tries so far (the limit you picked: three tries or fifteen minutes)":

> What you did  |  Minutes  |  Result  (the column heads)
> 1. Restarted the laptop  |  3  |  No change
> Time used so far  |  3  |  Total

The knowledge base has an article for this symptom, and you have not tried it yet. This desk has no rule about handing on.

**What do you do next?**
(the options come in an order that depends on the seed of the question)
- Follow the article as your second try; the limit is not reached (right)
- Stop and write up the tries, then start narrowing the problem down — if chosen: The limit is not reached and the article is untried. Narrowing it down waits until the known fix fails.
- Pass it on to the next level, since the restart did not work — if chosen: One failed restart is not a reason to pass it on. Try the article within the limit.

After the answer: the deciding words are marked. Reason: A limit is for stopping when it is reached, not before. The known fix comes first.

Then a screen: you can stop here, your place is kept.

## Step 7: Questions

4 questions, shuffle, with about 30% from earlier lessons mixed in, unlabeled. A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 11

A plain table, "Article: “Outlook will not open (Windows 11 PC)”":

> What the article says  (the column heads)
> 1. Close Outlook and open it again.
> 2. Delete the user profile (the folder where Windows keeps a person’s files and settings) and let Windows build a new one.
> 3. Sign in and open Outlook.

Step 1 did not help. Nobody has copied this user’s files.

**What do you do before step 2?**
(the options come in an order that depends on the seed of the question)
- Copy the user’s files to the company storage and open one to check the copy (right)
- Follow step 2 as written, since it is the desk’s own article and has worked before — if chosen: The article does not know that nothing is copied. Step 2 removes the files.
- Leave the article alone and start testing other causes of the fault instead — if chosen: The article is fine. It just needs a copy of the files before step 2.

After the answer: the deciding words are marked. Reason: A step that removes where the files live needs a copy first, article or not. Then step 2 can be followed.

#### Item 12

Roxanne’s story is in. You found what changed, and their files are safe. The knowledge base has an article for exactly their symptom.

**Which move comes next?**
- Find out what changed, and protect their data before touching anything — if chosen: You already did that. The next move is the known fix.
- Try the known fix, with a time limit (right)
- Cut the problem in half with the cheapest test — if chosen: Cutting the problem in half is for when the known fix fails.

After the answer: Reason: The known fix comes after the story, the change and the backup. The article is tried within a limit, and narrowing it down waits for that to fail.

#### Item 13

A plain table, "This desk’s rule":

> Rule  (the column heads)
> Hand on after 20 minutes on one ticket

A plain table, "Your tries so far (the limit you picked: three tries or twenty minutes)":

> What you did  |  Minutes  |  Result  (the column heads)
> 1. Restarted the PC  |  3  |  No change
> 2. Followed the article “Printer shows Offline”  |  6  |  Still offline
> 3. Unplugged the printer’s cable and plugged it back in  |  11  |  Still offline
> Time used so far  |  20  |  Total

**The desk’s rule says to hand it on now. Which note helps the next person?**
(the options come in an order that depends on the seed of the question)
- Restarted the PC, 3 min, no change. Followed “Printer shows Offline”, 6 min, still offline. Unplugged and replugged the cable, 11 min, no change. (right)
- Restarted the PC, then followed the article “Printer shows Offline”, then unplugged and replugged the cable; none of them worked out. — if chosen: The next person cannot tell how long each took or what happened, and will try them again.
- Followed the article “Printer shows Offline” all the way through and it did not help, so someone should look for another cause. — if chosen: It does not say what else was tried, and the next person will repeat it.

After the answer: the deciding words are marked. Reason: The desk’s rule, not the failed fix, is what says to hand on. One line for each try, with the result, lets someone pick it up where you left off.

#### Item 14

A chat, with its history: "Veronica Hale", Chat · Monday 3:45 PM.

> (Veronica Hale, at the left) My second monitor shows nothing since I moved desks on Friday.

The knowledge base has an article for this symptom.

**You have their story and know what changed. What do you do next?**
(the options come in an order that depends on the seed of the question)
- Search the knowledge base for the symptom, and follow the article that fits, within a limit (right)
- Swap in a different monitor to see whether the fault is in the monitor or in the laptop — if chosen: That is how you narrow a fault down. Try the known fix first.
- Go back to them and check once more what changed, in case something was missed in the story — if chosen: You already know: the move on Friday.

After the answer: the deciding words are marked. Reason: After the story and the change come the known fix and its limit. Narrowing it down is the step after.

Then a screen: you can stop here, your place is kept.

## The check

6 new questions, no help. No answer is shown until the end. The questions come in mixed order.

To pass:
- At least 5 right
- None kept trying fixes past the time limit

#### Check question 15

A chat, with its history: "Regina Ames", Chat · Monday 10:30 AM.

> (Regina Ames, at the left) My camera shows a black picture in Teams. I’m on a Windows 11 laptop.

You have their story and what changed, and no step here can lose files.

A plain table, "Knowledge base search: “teams camera”":

> Article  |  Applies to  |  What it says  (the column heads)
> Camera not found in Teams  |  Mac  |  Open System Settings, allow Teams to use the camera, and restart Teams.
> Teams video is black  |  Windows 11 laptop  |  Close every other program using the camera, then pick the camera again in the Teams device settings.
> Teams has no sound  |  Windows 11 laptop  |  Open the audio settings in Teams and choose the speaker again.

**Which article is the known fix?**
(the options come in an order that depends on the seed of the question)
- Teams video is black, Windows 11 laptop (right)
- Teams cannot find the camera, Mac laptop — if chosen: It is for a Mac, and it is for a camera that is not found rather than a black picture.
- Teams has no sound in calls, Windows 11 laptop — if chosen: It is their setup, but a different symptom: sound, not video.

After the answer: the deciding words are marked. Reason: The symptom and the setup both have to match. Only the second article is about a black picture on a Windows 11 laptop.

#### Check question 16

Shirin cannot open a shared spreadsheet. The knowledge base has an article for it. You are about to follow it. This desk has no rule about handing on.

**Before you follow it, what do you decide?**
(the options come in an order that depends on the seed of the question)
- A number of tries and a number of minutes for this ticket, whichever runs out first (right)
- A number of tries and a number of minutes, which I will pick after the first try, once I see how long it takes — if chosen: A limit picked after the first try is not a limit: one more guess follows another. Decide it before you start.
- Which senior technician I will pass it to when the article does not work — if chosen: The article costs minutes. If it fails you narrow the problem down; you hand on when the desk’s rule says so.

After the answer: Reason: A known fix is tried within a limit decided first, so there is no sliding from one guess into the next.

#### Check question 17

A plain table, "Your tries so far (the limit you picked: three tries or twelve minutes)":

> What you did  |  Minutes  |  Result  (the column heads)
> 1. Closed and reopened the program  |  2  |  No change
> 2. Restarted the PC  |  4  |  No change
> 3. Followed the article “Program will not start”  |  5  |  No change
> Time used so far  |  11  |  Total

**It still fails. What now?**
(the options come in an order that depends on the seed of the question)
- Note each try and its result on the ticket, then move to narrowing it down (right)
- Try one more fix; there is a minute left — if chosen: Three tries are used. The limit says stop, whatever minutes remain.
- Note each try, then close the ticket as “cannot reproduce” (closing because you cannot make it happen again) — if chosen: The user still has the fault and has not confirmed anything.

After the answer: the deciding words are marked. Reason: Three tries are used with no fix. That is the limit, so you stop and write down what you tried.

#### Check question 18

This desk has no rule about handing on.

A plain table, "Your tries so far (the limit you picked: three tries or twenty minutes)":

> What you did  |  Minutes  |  Result  (the column heads)
> 1. Closed the program and opened it again  |  5  |  No change
> 2. Followed the article “Shared drive will not open”  |  15  |  No change
> Time used so far  |  20  |  Total

**It still fails. What now?**
(the options come in an order that depends on the seed of the question)
- Stop trying, write what each try did in one line, and narrow it down (right)
- Take the third try anyway, since only two of the three tries are used up — if chosen: The minutes ran out first. The limit says stop, whatever tries remain.
- Pass it to the next level now, since the article did not work out — if chosen: A failed article does not by itself hand the ticket on. You narrow it down, and you hand on when the desk’s rule says so.

After the answer: the deciding words are marked. Reason: The limit was tries or minutes, whichever came first. The minutes are used, so you stop, whatever tries are left.

#### Check question 19

Vivian’s printer shows “offline”. You restarted their PC, and the printer still shows “offline”.

**What does the failed restart tell you about the cause?**
(the options come in an order that depends on the seed of the question)
- Very little: only that a restart is not the fix (right)
- That the problem is inside the printer itself — if chosen: A restart of their PC does not test the printer, so it shows nothing about it.
- That they did something wrong before it went offline — if chosen: Nothing in the restart points at anything they did.

After the answer: Reason: A failed quick fix rules out only itself. To learn the cause you need a test that splits the possibilities, which is the next step after the limit.

#### Check question 20

A plain table, "Article: “Laptop sign-in loop (Windows 11 PC)”":

> What the article says  (the column heads)
> 1. Restart the laptop and sign in again.
> 2. If the loop continues, reset the laptop to its factory state.
> 3. Sign in and restore the user’s files from backup.

A sign-in loop is the sign-in screen coming back again and again. Step 1 did not help. The user’s files have not been backed up.

**What do you do before step 2?**
(the options come in an order that depends on the seed of the question)
- Copy the user’s files to the company storage and open one to check the copy (right)
- Follow step 2 as written, since it is the desk’s known fix and has worked before — if chosen: The article assumes a backup. None exists, so the reset would erase the files.
- Leave the article alone and start testing other causes of the fault instead — if chosen: The article is the known fix. It needs the backup first.

After the answer: the deciding words are marked. Reason: An article can carry a step that erases files without a backup step of its own, so a known fix still protects the user’s data. Step 3 depends on a backup that has not been made.

## The result

For example "6 of 6: passed" or "4 of 6: not yet", each rule above shown as met or not met, then every answer with its feedback, the missed ones first.
