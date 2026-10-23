# IT Help Desk: What changed, and protect the data

Revision 2, live. Part: What changed, and protect the data. Where the subject ends up: Take a ticket you have never seen (a user's email, chat or call about a computer, phone, printer, network, account or security problem) and work it the way a help desk technician does: sort it and set its priority, get the user's story and what changed, try the known fix with a limit, then narrow it down with the cheapest test that splits what works from what does not, fix one thing at a time, confirm with the user and write it up, or hand it on with everything you found; and know every fact and scenario on both CompTIA A+ exams well enough to pass them.

## The why

Petra’s email says their laptop is slow, Excel crashes, and they say they changed nothing. They want you to wipe it, and the file they must send on Friday is on it.
A computer that worked and now does not has something different about it. Here you learn to find the difference, and to copy the user’s files before you touch anything that could lose them.

## Step 1: Find out what changed

It worked before, and now it does not, so something is different. The quickest way to the cause is to find the difference.
Look for three kinds of change. What the user did: a new program or add-in (a small extra program that adds a feature to Excel or Outlook), a new device such as a USB hub (a small box with extra sockets) or a docking station (a box a laptop plugs into for screens and other devices), a new password, a move to another desk or home. What the computer did: an update, a restart. What the company did: a new network switch (the box that connects the wires on a floor), a new Wi-Fi router (the box that gives out Wi-Fi and links the office to the internet), a moved server.
Users often say “nothing changed”. That means nothing they noticed. When the records show no change either, you have found nothing yet; you put particulars to the user (“a new program, an update message, a new password?”) and find out when it last worked. Check what the desk’s records show too.
A rule of thumb, not a law: when several people have the same fault from the same day, look at the company’s side first. When only one person has it, look at that person’s side first. In this course, a change made to one person’s account, such as a password reset or a new device handed to them, counts as that person’s side, even when the desk made it. And a change many people made themselves, such as the same program they all installed, is still the users’ side.

A wrong idea, marked wrong: “They say nothing changed, so I will start fixing.”
The right line: “Nothing” means nothing they noticed. Look at the records and put particulars to them first: the change is often there.

## Step 2: Copy the files before you touch anything

A backup is a second copy of the user’s files somewhere else, such as the company storage (the office’s shared file space, which is on a server, not on the user’s computer) or an external drive. Make one before any step that could change or erase their files, then open one file from the copy to check that it works. Until the files are safe, make no step that could change or erase them. Copying them and reading the log change nothing.
Steps that can lose files: a clean install of Windows (wiping the drive and putting Windows on fresh), resetting the computer to its factory state, replacing the hard drive or the whole computer, and deleting a user profile (the folder where Windows keeps a person’s files and settings). A repair tool that keeps files is different, but you do not rely on it: running a repair on a failing drive can make it worse, so copy first.
The hard drive (also called the disk) is the part inside the computer that holds the files. On a healthy computer, once you have the story and the changes, a restart is fine: it loses only what the user has not saved, so have them save first. Turning Wi-Fi off and on, or moving a cable, loses nothing. But if the disk is failing (the computer clicks, freezes, or sometimes will not start), every start is a risk to the files. Copy them first.
CompTIA’s older exam wording said to back up “if applicable”: only when the step could lose something. (The current exams keep its six steps as a recommended method, not as an objective.) This course’s reading: if the records already show a recent backup, you do not make another; you open one file from it to check that it works, and then go on.
Words these tickets use. Office is Microsoft’s group of programs, such as Word, Excel and Outlook; Outlook is its email program. A shared drive is a folder on a company server that many people open from their own computers.

A wrong idea, marked wrong: “They asked for a wipe, so I will wipe it.”
The right line: A wipe cannot be undone. Copy their files first, and check the copy opens.

## Step 3: When it comes and goes

Part of getting the story is having the user show you what they do just before the fault, or tell you the moment it happens. Write down the steps and the times.
Some faults will not happen on demand: a screen that goes black twice a day, a program that closes by itself. You do not wait for one. Work from what you can find: what changed, the computer’s log (the list of errors it keeps, each with a time), and the user’s notes of the time each one happened. Match the times to the log. If that points nowhere, you narrow the problem down, which is a later part.
Do not make a fault happen on purpose if that could cost files, as on a failing disk. Protect the files first.

## Step 4: A worked example

An email: "Petra Lund", Email · Tuesday 8:12 AM.

> Subject: **Laptop slow, Excel crashing**
>
> My laptop has been very slow since last week.
> Excel crashes whenever I open the month-end file, and that file goes out Friday.
> Could you wipe it and start over? A friend said that fixes everything.
> I haven’t changed anything on my end.

A plain table, "What the desk’s records show for this laptop":

> Record  |  What it says  (the column heads)
> Windows updates, last 30 days  |  None installed
> Programs added, last 30 days  |  PDF Toolbox add-in (an extra feature for Excel), installed Monday of last week
> Backup of their files  |  None found

Before the working, the learner may commit to a choice (not scored, not stored):
**What changed on this laptop?**
(the options come in an order that depends on the seed of the question)
- A Windows update, which could slow a laptop down
- A program added on Monday of last week
- Nothing, since they say they changed nothing on their end

The working, one step at a time:
1. Read their words.: Slow since last week, Excel crashes on one file, they want a wipe, and they say nothing changed.
1. Guess a change, and check it against the records.: First guess: a Windows update. The records show none in 30 days, so that guess is out.
1. Look at what else changed.: A PDF add-in went on Monday of last week. That fits “since last week”, so it is the lead.
1. Before you touch anything, protect their files.: A wipe would erase the month-end file and no backup exists. Copy their files, then open one from the copy.
1. Then have them show you.: They open the month-end file and Excel crashes while you watch. Now you can take the add-in out and see whether the crash is gone.

Then the answer: A program added on Monday of last week / Copy their files to the company storage first, then open one of them to check that the copy works. The records name a change they did not mention, the add-in. They also show no backup, and a wipe would erase the file they need on Friday. Find the change, then copy the files, then fix.

## Step 5: Questions

4 questions, listed, with help (shown). A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 1

An email: "Joseph Bell", Email · Monday 8:30 AM.

> Subject: **Label printer dead**
>
> **Yesterday afternoon I plugged a new USB hub (a small box with extra sockets) under the desk so I could charge my phone.**
> Now the label printer has stopped working.
> I need labels for the 10:30 shipments.

Help on screen: the words that decide it are marked.

**Tap the line that tells you what changed.**
- Tap a sentence in the text above. The lines of one block can be tapped; the rest cannot. Nothing is marked before the answer, and a tap is the answer.
- "Yesterday afternoon I plugged a new USB hub (a small box with extra sockets) under the desk so I could charge my phone." (right)
- "Now the label printer has stopped working." — if tapped: note: This is what is wrong, not what changed.
- "I need labels for the 10:30 shipments." — if tapped: note: This is how soon they need it, not what changed.

After the answer: the deciding words are marked. Reason: The printer worked until a new USB hub went in under the desk. A new device is a change, so that is where you look first.

#### Item 2

A plain table, "Ticket 4471":

> Field  |  Entry  (the column heads)
> User  |  Michael Ortiz, billing
> Problem  |  Outlook closes by itself several times a day
> What changed  |  Michael added a calendar add-in last Thursday and removed it Friday; the problem is still there
> Next step, approved by the senior technician  |  Reset the laptop to its factory state (this erases everything on it)  <- marked after the answer
> Backup of their files  |  None found  <- marked after the answer

Help on screen: the words that decide it are marked.

**What do you do before the reset?**
(the options come in an order that depends on the seed of the question)
- Make a copy of their files on the company storage, and open one (right)
- Start the reset; the senior technician has already approved it — if chosen: The approval is for the reset, not for losing their files. They are gone once it runs.
- Put the question to Michael again about what changed on their laptop — if chosen: The ticket already says: a calendar add-in, added Thursday and removed Friday. The next move is protecting their files.

After the answer: the deciding words are marked. Reason: The next step erases everything on the laptop and the ticket shows no backup. Copy the files first, and check the copy opens.

#### Item 3

A chat, with its history: "Lorenzo Ellery", Chat · Monday 8:40 AM.

> (Lorenzo Ellery, at the left) I can’t open the shared drive. Nothing changed on my end, it just stopped.

A plain table, "Tickets opened Monday":

> User  |  Floor  |  Opened  |  Problem  (the column heads)
> Lorenzo Ellery  |  2  |  8:40 AM  |  Cannot open the shared drive
> Levi Reyes  |  2  |  8:44 AM  |  Cannot open the shared drive  <- marked after the answer
> Chen Wu  |  2  |  8:51 AM  |  Cannot open the shared drive  <- marked after the answer
> Dale Frost  |  2  |  9:02 AM  |  Cannot open the shared drive  <- marked after the answer

A plain table, "The network team’s change log":

> When  |  Who  |  What  (the column heads)
> Sunday 11:00 PM  |  Network team  |  Replaced the floor 2 network switch (the box that connects the wires on that floor)  <- marked after the answer

Help on screen: the words that decide it are marked.

**Lorenzo says nothing changed on their end. What most likely changed?**
(the options come in an order that depends on the seed of the question)
- Something the company did on its side: the floor 2 switch was replaced late on Sunday night (right)
- Something on Lorenzo’s own laptop, like a setting or an update that only they would see from their side of things — if chosen: Three other people on the floor have the same fault, so it is not only their laptop.
- Nothing at all, because Lorenzo would have noticed if something had changed — if chosen: They may be right about their own side. The log shows a change they could not see.

After the answer: the deciding words are marked. Reason: The same fault on the same floor since the same morning points at a change the company made. The log names one, so that is where you look. This is a rule of thumb, which the next questions test.

#### Item 4

An incoming call, the caller's words as a transcript: "Francis Ito", Phone call · Wednesday 2:05 PM.

> My screen goes black sometimes, and then it comes back.
> **It did it twice this morning. I can’t say what I was doing.**

Help on screen: the words that decide it are marked.

**They cannot say what brings it on. What do you do?**
(the options come in an order that depends on the seed of the question)
- Have their message you the time it happens, then match the times to the computer’s log (right)
- Order them a new monitor right away, since the screen is the part that keeps going black on them — if chosen: Nothing yet says the monitor is at fault. A part bought on a guess is another guess.
- Tell them to call back the next time it goes black, and close the ticket for now — if chosen: You would close with nothing gathered and nothing for them. Their notes and the log are what you can use now.

After the answer: the deciding words are marked. Reason: A fault that comes and goes gives no steps to follow. You collect what you can: the times it happens and the log, plus what changed. Then you narrow it down.

Then a screen: you can stop here, your place is kept.

## Step 6: Questions

8 questions, shuffle. A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 5

A chat, with its history: "Ali Rahman", Chat · Monday 9:20 AM.

> (Ali Rahman, at the left) Can you fix it before my 10:00 meeting?
> (Ali Rahman, at the left) Outlook keeps asking me to sign in again and again. It started Saturday.
> (Ali Rahman, at the left) I changed my password Friday night, but I don’t think that matters.

**Tap the line that tells you what changed.**
- Tap a sentence in the text above. The lines of one block can be tapped; the rest cannot. Nothing is marked before the answer, and a tap is the answer.
- "Can you fix it before my 10:00 meeting?" — if tapped: note: This is how soon they need it, not a change.
- "Outlook keeps asking me to sign in again and again. It started Saturday." — if tapped: note: This is the symptom, not a change.
- "I changed my password Friday night, but I don’t think that matters." (right)

After the answer: the deciding words are marked. Reason: A password change the night before is a change, and Outlook keeps asking to sign in. The user did not think it mattered, which is why you put particulars to users.

#### Item 6

Penelope’s desktop is slow, but it starts and runs normally. You are choosing a fix.

**Tap each step that could erase Penelope’s saved files.** (choose every one that fits)
(the options come in an order that depends on the seed of the question)
- Restart the computer — if chosen: A restart does not erase saved files; it loses only what Penelope has not saved, so have them save first. Their files do not need a copy.
- Do a clean install of Windows (right)
- Turn Wi-Fi off and on — if chosen: It changes a connection, not their files.
- Replace the hard drive (right)
- Delete their user profile (the folder where Windows keeps their files and settings) so Windows builds a new one (right)
- Plug their monitor into another port — if chosen: It changes a cable, not their files.

After the answer: Reason: The steps that erase, replace or remove where their files live need a copy first. A restart of a healthy computer or a cable move does not. Save open work before a restart.

#### Item 7

A chat, with its history: "Victor Lang", Chat · Thursday 11:05 AM.

> (Victor Lang, at the left) Nothing changed. My printer just broke on Wednesday.
> (Victor Lang, at the left) The printer button now says “offline”.

A plain table, "What the desk’s records show for Victor’s computer":

> Record  |  What it says  (the column heads)
> Windows update installed  |  Tuesday 11:40 PM, restarted automatically
> Programs added, last 30 days  |  None

**They say nothing changed. What do you do?**
(the options come in an order that depends on the seed of the question)
- Check the desk’s records for changes, and put the update and the restart on Tuesday night to them (right)
- Take their word that nothing changed, and start by looking for a fault inside the printer itself — if chosen: You skipped a change that the records show.
- Tell them something must have changed and that they are forgetting what they did on Tuesday night — if chosen: Do not tell them they are wrong. Check the records and put particulars to them.

After the answer: the deciding words are marked. Reason: Users often cannot see the change. The record shows an update and a restart the night before the fault, so that is where you start.

#### Item 8

An email: "Binta Zhou", Email · Wednesday 9:05 AM.

> Subject: **Slow laptop**
>
> My laptop has been slow for about a week. I have not added or changed anything.

A plain table, "What the desk’s records show for Binta’s laptop":

> Record  |  What it says  (the column heads)
> Windows updates, last 30 days  |  None installed
> Programs added, last 30 days  |  None
> Other people with the same fault  |  None

**The records show no change. What do you do?**
(the options come in an order that depends on the seed of the question)
- Say nothing is found yet in the records, and put particulars to Binta about a week ago: a move, a new device, a new password (right)
- Decide that the hard drive is failing, since nothing on the software side has changed in the records — if chosen: No record points at the drive. That is a guess dressed up as a finding.
- Tell them that nothing has changed on their laptop and close the ticket as “no change found” for now — if chosen: The records show no change, but they still have a slow laptop and no one has asked them anything.

After the answer: the deciding words are marked. Reason: An empty record is not an answer. “Nothing found yet” sends you back to the user with particulars; it does not end the question.

#### Item 9

A plain table, "Ticket 5190":

> Field  |  Entry  (the column heads)
> User  |  Kofi Mensah, shipping
> Problem  |  Computer shows a hard drive warning and is very slow
> Next step  |  Replace the hard drive and do a clean install of Windows
> Backup of their files  |  The desk’s nightly backup ran today at 6:00 AM. They have saved no new files since yesterday.

**What do you do before the new drive goes in?**
(the options come in an order that depends on the seed of the question)
- Open one file from this morning’s backup to check that it works, then go on with the replacement (right)
- Start the replacement; the nightly backup has surely done its job, so there is no need to look at it — if chosen: A backup you have not opened is not yet a backup you can rely on. Open one file first.
- Copy all their files to the company storage again by hand before you do anything else with the drive — if chosen: The 6:00 AM backup already holds them, and they have saved nothing new. Open one file from it instead.

After the answer: the deciding words are marked. Reason: CompTIA backs up “if applicable”. A recent backup already holds their files, so the step is to check that it opens, not to make another.

#### Item 10

An incoming call, the caller's words as a transcript: "Greg Holt", Phone call · Thursday 10:15 AM.

> My computer freezes when I print, but not every time.
> I never know which time it will do it.

A plain table, "What the desk can see on Greg’s computer":

> Check  |  Result  (the column heads)
> Windows updates and programs added, last 30 days  |  None
> Error log  |  Two entries from the print program, Monday 10:02 AM and Wednesday 3:40 PM

**There is no way to make it freeze on demand. What do you do first?**
(the options come in an order that depends on the seed of the question)
- Put the log times to Greg and have them note the time of each freeze from now on (right)
- Reinstall the printer driver (the small program that lets the computer talk to the printer) on their computer, since it only freezes when they print — if chosen: It is a guess with nothing to say it is the cause, and a fault that comes and goes can look fixed by luck.
- Tell them to restart the computer now and call back if it freezes on them again — if chosen: You have gathered nothing, and they are left with the fault.

After the answer: the deciding words are marked. Reason: A fault that comes only some of the time gives no steps. You work from the log and their notes of the times, then narrow it down.

#### Item 11

A chat, with its history: "Dorian Diaz", Chat · Tuesday 9:10 AM.

> (Dorian Diaz, at the left) The shared drive won’t open since I got back from leave. I haven’t done anything.

A plain table, "What the desk found":

> Check  |  Result  (the column heads)
> Shared drive from three other computers on Dorian’s floor  |  Opens normally
> Dorian’s password  |  Reset by the desk on Monday, their first day back

**Where do you look for the change?**
(the options come in an order that depends on the seed of the question)
- At Dorian’s own side: their password reset on Monday and their laptop (right)
- At the company: a change to the network — if chosen: Three other computers on their floor open the drive. A change to the network would have reached them too.

After the answer: the deciding words are marked. Reason: Others on the floor are fine, so the change is theirs. As a rule of thumb, when many have the same fault from the same day, look at the company. When one does, look at their side.

#### Item 12

A chat, with its history: "Hugo Barr", Chat · Tuesday 8:50 AM.

> (Hugo Barr, at the left) Three of us on the sales team can’t open quotes in the price program since Monday. Nothing changed on our side.

A plain table, "What the desk found":

> Check  |  Result  (the column heads)
> Network team’s change log, last week  |  No changes
> Programs added, last 30 days, for all three people  |  The same “QuoteTidy” add-in (an extra feature for the price program), each installed Friday
> Other sales team members  |  Price program works normally

**Three people have the same fault. Where do you look for the change?**
(the options come in an order that depends on the seed of the question)
- At what the three people did themselves: the same add-in each of them installed on Friday (right)
- At what the company changed, since several people having the same fault points that way every time — if chosen: Several people having it is only a rule of thumb. The log shows no company change, and the others work.
- At nothing: Hugo says nothing changed on their side, so there is no change — if chosen: Users cannot see every change. The records show an add-in all three put on.

After the answer: the deciding words are marked. Reason: A change many people made themselves is still on the users’ side. The rule of thumb gives a place to start, and the records decide.

Then a screen: you can stop here, your place is kept.

## Step 7: Questions

5 questions, shuffle, with about 30% from earlier lessons mixed in, unlabeled. A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 13

A plain table, "Ticket 5120":

> Field  |  Entry  (the column heads)
> User  |  Elena Park, accounting
> Problem  |  Laptop clicks, freezes, and sometimes will not start
> Next step  |  Swap in a new laptop and recycle this one
> Files on the old laptop  |  Their Documents folder and Desktop
> Backup of their files  |  None found

**What do you do before the swap?**
(the options come in an order that depends on the seed of the question)
- Copy their files off the old laptop to the company storage, then open one file from the copy to check it (right)
- Swap the laptop now, and sort out where their files go once they have settled in with the new one — if chosen: Later may be never: the old laptop is going to be recycled.
- Restart the old laptop once more to see whether it starts up before the swap — if chosen: It already clicks and freezes, so each start is a risk to the files. Copy them now.

After the answer: the deciding words are marked. Reason: The old laptop is failing and is the only place their files live. Copy them first, with as few starts as it takes, and open one to check the copy.

#### Item 14

A chat, with its history: "Vasco Haddad", Chat · Tuesday 1:15 PM.

> (Vasco Haddad, at the left) I have a meeting at 2.
> (Vasco Haddad, at the left) My second monitor is blank.
> (Vasco Haddad, at the left) I moved to a new desk on Monday and plugged everything in myself.

**Tap the line that tells you what changed.**
- Tap a sentence in the text above. The lines of one block can be tapped; the rest cannot. Nothing is marked before the answer, and a tap is the answer.
- "I have a meeting at 2." — if tapped: note: This is how soon, not a change.
- "My second monitor is blank." — if tapped: note: This is the symptom, not a change.
- "I moved to a new desk on Monday and plugged everything in myself." (right)

After the answer: the deciding words are marked. Reason: A move to a new desk, with everything plugged in again by hand, is a change. A cable in the wrong port is the first thing to look at.

#### Item 15

A chat, with its history: "Cara Wen", Chat · Wednesday 3:50 PM.

> (Cara Wen, at the left) My email will not sync (keep itself matched with the mail server) on my phone.
> (Cara Wen, at the left) It is a new phone.
> (Cara Wen, at the left) I need it before I board my flight at 6.

**Tap the line that tells you what changed.**
- Tap a sentence in the text above. The lines of one block can be tapped; the rest cannot. Nothing is marked before the answer, and a tap is the answer.
- "My email will not sync (keep itself matched with the mail server) on my phone." — if tapped: note: This is the symptom, not a change.
- "It is a new phone." (right)
- "I need it before I board my flight at 6." — if tapped: note: This is how soon, not a change.

After the answer: the deciding words are marked. Reason: A new phone is a new device, and email stopped syncing on it. A change can be a short line.

#### Item 16

Umar has told you their story: since Monday they cannot print from the new laptop they were given on Friday. You have said their story back and searched the knowledge base, and nothing fits. You have not yet found out what changed, and you have not looked at the desk’s records.

**Which move comes next?**
- Get their words first, then search what the desk already knows — if chosen: You have their story, and the knowledge base is searched. The next move is finding what changed.
- Find out what changed, and protect their data before touching anything (right)
- Try the known fix, with a time limit — if chosen: A known fix comes after you know what changed and their files are safe.

After the answer: Reason: The story is in and the knowledge base had nothing. Finding what changed comes next, with their data kept safe before anything is tried.

#### Item 17

A chat, with its history: "Neville Menon", Chat · Tuesday 9:30 AM.

> (Neville Menon, at the left) My shared drive disappeared this morning.

**What do you say next?**
(the options come in an order that depends on the seed of the question)
- When did it last work, and what is different since: a move, a new program, an update, a new password? (right)
- Restart the computer first, since a restart might bring a missing drive back — if chosen: That is a fix tried before you know what changed.
- Drives do not just disappear on their own, so what did you delete or change this morning? — if chosen: That blames them and tells you nothing. Put particulars to them in a friendly way.

After the answer: the deciding words are marked. Reason: The question names the common changes and starts from the last time it worked. That finds the change without blaming them.

Then a screen: you can stop here, your place is kept.

## The check

6 new questions, no help. No answer is shown until the end. The questions come in mixed order.

To pass:
- At least 5 right
- None touched the machine before protecting data that has no other copy

#### Check question 18

An email: "Wesley Tan", Email · Thursday 7:55 AM.

> Subject: **Screen flickers**
>
> My laptop screen has flickered since yesterday.
> On Tuesday evening I started using the new docking station (a box my laptop plugs into for screens and other devices) the office gave me.
> I have a video call at 9.

**Tap the line that tells you what changed.**
- Tap a sentence in the text above. The lines of one block can be tapped; the rest cannot. Nothing is marked before the answer, and a tap is the answer.
- "My laptop screen has flickered since yesterday." — if tapped: note: This is the symptom, not a change.
- "On Tuesday evening I started using the new docking station (a box my laptop plugs into for screens and other devices) the office gave me." (right)
- "I have a video call at 9." — if tapped: note: This is how soon, not a change.

After the answer: the deciding words are marked. Reason: A new docking station is a new device, and the flicker began right after they started using it. That is the change to look at first.

#### Check question 19

A plain table, "Ticket 5188":

> Field  |  Entry  (the column heads)
> User  |  Magnus Siddiqui, warehouse office
> Problem  |  Laptop is very slow and its battery no longer holds a charge
> Next step  |  Give Magnus a new laptop and send this one back to the supplier
> Files on the computer  |  Order forms on the Desktop and in Documents
> Backup of their files  |  None found

**What do you do before the old laptop is sent back?**
(the options come in an order that depends on the seed of the question)
- Copy their order forms to the company storage first, then open one of them to check that the copy works (right)
- Get the new laptop ready and send the old one back with the supplier’s next pickup, since swapping laptops is routine work for the desk — if chosen: Their order forms are on the old laptop. Once it is gone, nobody can find them.
- Reset the old laptop to its factory state, so that none of Magnus’s data is left on it when it goes back — if chosen: A reset erases their order forms for good, and no copy exists.

After the answer: the deciding words are marked. Reason: Sending the laptop back takes the order forms with it, and no backup exists. Copy the order forms first, and check the copy opens.

#### Check question 20

A chat, with its history: "Kirsten Cole", Chat · Wednesday 8:50 AM.

> (Kirsten Cole, at the left) I can connect to the Wi-Fi at reception but no web pages open. I haven’t changed anything.

A plain table, "Tickets opened Wednesday":

> User  |  Where  |  Problem  (the column heads)
> Kirsten Cole  |  Reception  |  Wi-Fi connects, no web pages
> Nils Vega  |  Reception  |  Wi-Fi connects, no web pages
> Laura Park  |  Reception  |  Wi-Fi connects, no web pages

A plain table, "The office manager’s note":

> When  |  What  (the column heads)
> Tuesday afternoon  |  Replaced the reception Wi-Fi router with a new one

**Kirsten says they changed nothing. Where is the change?**
(the options come in an order that depends on the seed of the question)
- The reception Wi-Fi router that the office manager replaced on Tuesday afternoon (right)
- Something on Kirsten’s own laptop that only they would have been able to see from their side of things — if chosen: Two others at reception have the same fault, so it is not only their laptop.
- Nothing, because Kirsten would know if something had changed on their side — if chosen: They are probably right about their side. The note shows a change they did not do.

After the answer: the deciding words are marked. Reason: The same fault for three people in one place from the same day points at a change the company made. The note names one, a new router.

#### Check question 21

A chat, with its history: "Alina Greer", Chat · Friday 3:20 PM.

> (Alina Greer, at the left) My spreadsheet closes by itself sometimes.
> (Alina Greer, at the left) It happens once or twice a day, but I never see it coming.

A plain table, "The error log on Alina’s computer (the list of errors it keeps)":

> Time  |  Entry  (the column heads)
> Wednesday 11:15 AM  |  Spreadsheet program stopped working
> Thursday 9:48 AM  |  Spreadsheet program stopped working

**They cannot say what brings it on. What do you do?**
(the options come in an order that depends on the seed of the question)
- Have them note the time each time it closes, then match their times to the entries in the error log (right)
- Run the repair tool for Office (Microsoft’s group of programs, which includes the spreadsheet), since the spreadsheet keeps closing — if chosen: It is a guess with nothing to say it is the cause, and a fault that comes and goes can look fixed by luck.
- Close the ticket until it happens again, since there is nothing to go on yet — if chosen: You would close with nothing gathered, when the log and their notes could already tell you more.

After the answer: the deciding words are marked. Reason: A fault that comes and goes gives no steps to follow. You work from the log and the user’s notes of the times, then narrow it down.

#### Check question 22

An incoming call, the caller's words as a transcript: "Ian Frost", Phone call · Thursday 4:10 PM.

> Nothing changed. The shared drive just stopped opening.
> It was fine on Monday. Today is Thursday.

A plain table, "What the desk’s records show for Ian’s computer":

> Record  |  What it says  (the column heads)
> Password  |  Reset by the desk on Tuesday afternoon, at their request
> Programs added, last 30 days  |  None

**They say nothing changed. What do you do?**
(the options come in an order that depends on the seed of the question)
- Check the records, then find out about the password reset (right)
- Take their word that nothing changed, and start by looking at the shared drive’s own settings on the file server — if chosen: You skipped a change that the records show.
- Tell them that they must have changed something on Monday or Tuesday and have simply forgotten what it was — if chosen: Do not argue with them. Check the records and put particulars to them.

After the answer: the deciding words are marked. Reason: Users often cannot see a change. The record shows a password reset between the day it worked and the day it stopped.

#### Check question 23

A chat, with its history: "Pru Adler", Chat · Monday 2:10 PM.

> (Pru Adler, at the left) My desktop makes a clicking noise and froze twice today. Can you just restart it for me and see if it comes back?

A plain table, "What the desk’s records show for Pru’s computer":

> Record  |  What it says  (the column heads)
> Disk health  |  Warning: drive failing
> Backup of their files  |  None found

**What do you do first?**
(the options come in an order that depends on the seed of the question)
- Copy their files to the company storage while it is still running, then open one of them to check (right)
- Restart it as they want, since a restart loses nothing and gets them back to work — if chosen: On a healthy computer that is true. On a failing drive each start is a risk, and their files are not copied.
- Run the drive’s repair tool first, and see whether the warning clears afterwards, before anything else — if chosen: A repair on a failing drive can make things worse, and their files are not safe yet.

After the answer: the deciding words are marked. Reason: The clicking and the disk warning say the drive is failing, so even a restart is a risk to the files. Copy them first, and check the copy opens.

## The result

For example "6 of 6: passed" or "4 of 6: not yet", each rule above shown as met or not met, then every answer with its feedback, the missed ones first.
