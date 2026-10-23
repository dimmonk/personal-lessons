# IT Help Desk: One change at a time

Revision 2, live. Part: One change at a time. Where the subject ends up: Take a ticket you have never seen (a user's email, chat or call about a computer, phone, printer, network, account or security problem) and work it the way a help desk technician does: sort it and set its priority, get the user's story and what changed, try the known fix with a limit, then narrow it down with the cheapest test that splits what works from what does not, fix one thing at a time, confirm with the user and write it up, or hand it on with everything you found; and know every fact and scenario on both CompTIA A+ exams well enough to pass them.

## The why

Joy’s laptop will not join the office Wi-Fi. The Wi-Fi was down last week, so you are sure it is the router (the box that connects the office to the internet). You restart the router, update their Wi-Fi software and clear their saved networks (the Wi-Fi names and passwords their laptop remembers). The laptop joins. What fixed it? Nobody knows, and if it breaks again nobody knows what to do.
You can cut a problem in half and still lose the answer by changing too much at once, or by staying with an idea the test already ruled out. Here you learn to change one thing, look, and cross off what the test rules out.

## Step 1: One change, then look

Work in rounds, always in this order. Write down the causes. Run a test, which changes nothing you cannot put straight back, and cross off any cause its result rules out. Then change one thing for the next cause, check whether the problem is gone, and write down what you changed and what happened.
Change two things at once and you cannot tell which one did it. If the problem goes away, you do not know the cause, and the next person cannot tell. If it stays, you cannot cross either one off. And a change you did not need stays in, so the computer is left different for no reason.
It costs a few minutes a round, and it keeps the cause known. The written note lets someone else pick up where you stopped. This is a working habit this course uses, not a sourced rule, and it has no exception: small changes go one at a time too.

## Step 2: Cross off what the test rules out

A test rules a cause out when its result could not happen if that cause were the one. Joy’s phone joins the office Wi-Fi, so the office Wi-Fi is working: that cause is ruled out. Cross it off and take the next cause on the list.
Which cause is next? Look at the causes still on the list and take the one with the cheapest test, as when you cut a list in half: the fewest minutes, and the easiest to put back. Ten seconds of looking at a switch comes before an hour of replacing a part.
A cause stays on the list when no test has touched it. The phone never used Joy’s laptop, so their laptop and its own Wi-Fi settings stay. Cross off only what a result rules out. As with the splitting tests before it, this assumes one fault at a time: if two parts are bad, a part that did not help can still be bad.
A part known to work is the clearest test, and a swap can be put back, so it is a test. Put it where the doubtful one was. If the problem stays, the old part is not the cause, even if you were sure it was: put the old part back and cross it off. If the problem goes, keep the new part: that swap is now your one change.

## Step 3: The idea that will not let go

A wrong idea, marked wrong: “I am sure it is the cable. A cable known to work did not help, so I will try another cable. And another one.”
The right line: The knowledge that makes an expert quick can also make the first idea hard to let go of. A test that came back clean ruled that cause out. Cross it off, and take the next cause on the list.

## Step 4: A worked example

A chat, with its history: "Joy, Accounting", Chat with the help desk.

> (Joy, Accounting, at the left) My laptop will not join the office Wi-Fi this morning. It worked on Friday. The Wi-Fi was down last week too.

A plain table, "Causes on the list":

> Cause  |  Cheapest test  |  Takes  (the column heads)
> The office Wi-Fi  |  Join it with a phone  |  One minute
> The Wi-Fi switch on Joy’s laptop  |  Look at the switch  |  Ten seconds
> The password Joy’s laptop saved for the office Wi-Fi  |  Forget the saved network and join again  |  Two minutes
> The Wi-Fi part inside Joy’s laptop  |  Swap in a working part  |  An hour

Before the working, the learner may commit to a choice (not scored, not stored):
**Joy’s phone joins the office Wi-Fi without trouble. What do you do next?**
(the options come in an order that depends on the seed of the question)
- Cross off the office Wi-Fi, because the phone joined it fine, and take the next cause on the list.
- Restart the office router anyway, in case it helps the laptop.
- Turn the Wi-Fi switch on and forget the saved network, then see if it joins.

The working, one step at a time:
1. Write down the causes before testing any.: The office Wi-Fi; the Wi-Fi switch on the laptop; the password the laptop saved for the office Wi-Fi; the Wi-Fi part inside the laptop.
1. Name your favorite and test it first.: The office Wi-Fi: it was down last week too.
1. Test it.: Joy’s phone joins the office Wi-Fi at once. The Wi-Fi works, so it is ruled out.
1. Cross it off, and do not go back to it.: The router is not restarted. The list is down to three.
1. Pick the next cause: the cheapest test among those left.: Looking at the switch takes ten seconds, the saved password two minutes, the part inside the laptop an hour. The switch is on, so that is ruled out too. The list is down to two.
1. Take the next cheapest and change one thing, then look.: Forget the saved network and join it again with the current password. The laptop joins. The office changed the Wi-Fi password over the weekend, and the laptop still had the old one saved. It was the saved password.

Then the answer: Cross off the office Wi-Fi, because the phone joined it fine, and take the next cause on the list. The phone joined the office Wi-Fi, so the favorite cause was ruled out and crossed off. Each next cause got one test or one change, so when the laptop joined, the change that did it was known: the saved password.

## Step 5: Questions

4 questions, listed, with help (shown). A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 1

A chat, with its history: "Sam, Legal", Chat with the help desk.

> (Sam, Legal, at the left) My page does not come out of the hallway printer.

A plain table, "Causes on the list":

> Cause  (the column heads)
> The hallway printer
> Sam’s laptop
> Sam’s account

A plain table, "Test":

> Test  |  Result  (the column heads)
> A co-worker prints to the hallway printer from their own computer  |  The page comes out  <- marked after the answer

Help on screen: the words that decide it are marked.

**Which cause does this result rule out?**
(the options come in an order that depends on the seed of the question)
- The hallway printer (right)
- Sam’s laptop — if chosen: The test never used Sam’s laptop, so it stays on the list.
- None of them: one test cannot rule a cause out. — if chosen: A page coming out of the same printer is exactly what rules the printer out.

After the answer: the deciding words are marked. Reason: A co-worker’s page came out of the printer, so the printer is ruled out and crossed off. The test did not use Sam’s laptop or Sam’s account, so both stay on the list.

#### Item 2

A chat, with its history: "Gia, Design", Chat with the help desk.

> (Gia, Design, at the left) My mouse pointer jumps around.

A plain table, "Causes on the list":

> Cause  (the column heads)
> Gia’s mouse
> The port it is plugged into
> Gia’s computer

A plain table, "Test":

> Test  |  Result  (the column heads)
> A mouse known to work, plugged into the same port  |  The pointer jumps around  <- marked after the answer

Help on screen: the words that decide it are marked.

**Which cause does this result rule out?**
(the options come in an order that depends on the seed of the question)
- Gia’s mouse, which was swapped for a good one (right)
- The port — if chosen: The pointer jumped in the same port, so the port is still on the list.
- None of them: the mouse still jumps. — if chosen: The mouse changed and the trouble stayed where it was, which rules the mouse out.

After the answer: the deciding words are marked. Reason: A part known to work, put in the same place, jumps just the same. The trouble stayed in place instead of moving with the part, so Gia’s mouse is ruled out. The port and the computer stay on the list.

#### Item 3

A chat, with its history: "Tariq, Sales", Chat with the help desk.

> (Tariq, Sales, at the left) My email program will not send. It says it cannot connect. It stopped right after I changed my password on Monday.

A plain table, "Causes on the list":

> Cause  |  Cheapest test  |  Takes  (the column heads)
> The Wi-Fi  |  Open a web page  |  One minute
> The password saved in the mail program  |  Type the new password in  |  One minute
> The mail program’s settings  |  Check them one by one  |  20 minutes

A plain table, "Test":

> Test  |  Result  (the column heads)
> Tariq opens a web page on the same laptop  |  The page opens  <- marked after the answer

Help on screen: the words that decide it are marked.

**The page opens. What do you do next?**
(the options come in an order that depends on the seed of the question)
- Restart the Wi-Fi router, then check whether the mail sends from the program. — if chosen: The web page opened, so the Wi-Fi works. The router is not the cause.
- Cross off the Wi-Fi and enter the new password in the mail program, then check. (right)
- Enter the new password, then reinstall the mail program, then check whether it sends. — if chosen: That is two changes before one look. If it works, you will not know which of the two did it.

After the answer: the deciding words are marked. Reason: The page opened, so the Wi-Fi is ruled out. The saved password has the cheapest test of the causes left, so the next move is one change on that cause, and a look at the result before anything else changes.

#### Item 4

A chat, with its history: "Vik, Technician", Note in the ticket.

> (Vik, Technician, at the left) **Monitor was black. In one visit I put in a new cable and turned off the monitor’s power-save mode (the setting that blanks the screen when it is idle). It shows a picture now.**

Help on screen: the words that decide it are marked.

**What can the ticket note say about the cause?**
(the options come in an order that depends on the seed of the question)
- The new cable went in and power-save was turned off; the cable is the likely cause, because the cable is the bigger repair. — if chosen: The power-save change happened at the same time, so the cable is a guess.
- Fixed on site. The monitor works now. The user is happy with the picture. — if chosen: The next technician cannot tell what was changed, so the note cannot be used if the screen goes black again.
- Cable replaced and power-save turned off in the same visit; either could be the cause, and it is not known which. (right)
- Power-save was turned off and the new cable went in; the setting is the likely cause, because the cable looked fine. — if chosen: The new cable went in at the same time, so the setting is a guess.

After the answer: the deciding words are marked. Reason: Two changes were made at once, so a fix cannot be credited to one of them. One change at a time would have shown which; the note lists both and says the cause is not known.

Then a screen: you can stop here, your place is kept.

## Step 6: Questions

4 questions, shuffle. A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 5

You have a ticket and a list of causes. Put one round of the work in order.

**Put one round in order.**
- Tap the six steps in the order you would do them. The steps are offered mixed (never already in the right order): "Write down the causes that fit what the user sees."; "Run a test that changes nothing."; "Cross off a cause the result rules out."; "Change one thing for the next cause."; "Check whether the problem is gone."; "Write down what you changed and what happened.". Each tapped step is numbered; "Start again" clears the taps; the answer is the order tapped once 6 are.
- Right: Write down the causes that fit what the user sees., then Run a test that changes nothing., then Cross off a cause the result rules out., then Change one thing for the next cause., then Check whether the problem is gone., then Write down what you changed and what happened.. After a miss: "You put: …" and why the order matters: The list comes first, so you test more than the favorite. A test comes before the change, because its result decides what to cross off. One change, then a look, shows what that change did, and the note lets another person pick up where you stopped.

After the answer: Reason: The list comes first so you test more than your favorite. A test changes nothing and its result decides what is crossed off. Then one change and a look shows what that change did. The note comes last and lets another person pick up where you stopped.

#### Item 6

A chat, with its history: "Ken, Operations", Chat with the help desk.

> (Ken, Operations, at the left) The company news page will not open on my laptop.

A plain table, "Causes on the list":

> Cause  (the column heads)
> The Wi-Fi
> The server that holds the news page
> The settings of the first browser Ken uses
> Ken’s account
> Ken’s laptop’s own network settings

A plain table, "Tests so far":

> Test  |  Result  (the column heads)
> A co-worker’s phone on the office Wi-Fi opens the news page  |  Opens
> Ken tries a second browser on their laptop  |  Will not open

**Which causes are still on the list? Pick every one.** (choose every one that fits)
(the options come in an order that depends on the seed of the question)
- Ken’s account (right)
- Ken’s laptop’s own network settings (right)
- The Wi-Fi — if chosen: The co-worker’s phone opened the page on the same Wi-Fi, so it is crossed off.
- The server that holds the news page — if chosen: The co-worker’s phone opened the page from that server, so it is crossed off.
- The settings of the first browser Ken uses — if chosen: A second browser fails the same way, so the first browser’s own settings are crossed off.

After the answer: the deciding words are marked. Reason: The phone opened the page, which rules out the Wi-Fi and the server. A second browser failed the same way, which rules out the first browser’s own settings. Ken’s account and their laptop’s own network settings are the causes no test has touched.

#### Item 7

A chat, with its history: "Reza, Finance", Chat with the help desk.

> (Reza, Finance, at the left) My laptop does not charge when it sits in its docking station.

A docking station is a stand the laptop sits in. It gives the laptop power and connects it to screens and cables.

A plain table, "Causes on the list":

> Cause  (the column heads)
> The docking station’s power adapter
> The docking station itself
> Reza’s laptop

A plain table, "Test":

> Test  |  Result  (the column heads)
> The tech puts a power adapter known to work on the docking station  |  The laptop still does not charge

The tech says: “I was sure it was the adapter. I will try a third adapter.”

**What should the tech do?**
(the options come in an order that depends on the seed of the question)
- Try a third power adapter from the cabinet on the docking station and see whether the laptop charges. — if chosen: An adapter known to work already ruled the adapter out. A third one repeats a test that has been answered.
- Replace the power adapter and the docking station together, then see whether the laptop charges. — if chosen: If it works, you will not know which one it was, and the adapter was already ruled out.
- Plug the laptop into its own charger, outside the docking station, and see whether it charges; that tests the next cause. (right)

After the answer: the deciding words are marked. Reason: A part known to work, in the old part’s place, did not help, so the old adapter is ruled out. The first idea has a hold on the tech, so the written list says what is next: the dock and the laptop.

#### Item 8

Hana in Operations calls the help desk about a slow computer. You answer. On this desk, one change and a look at the speed takes about five minutes.

**Hana calls about their slow computer. What do you say?**
- An incoming call from "Hana, Operations" (Incoming call · 1:40 PM). The turns arrive one after another; the learner picks a reply each time and the next turn follows the reply. Pick what you say. The call goes on from there. Nothing is marked until it ends, and a call is not on a clock.
- turn 1, the other side says: "My computer is crawling. Just do everything: updates, cleanup, restart, all of it, at once. I have a deadline at 4." [pushes: They want every fix at once.]
  - reply "I can do the updates and the cleanup together and leave the restart for later.": the call ends (not this one): Even two small changes together cannot be told apart if it works, and the one it did not need stays in. Neither is crossed off if it does not. [slip: changed more than one thing at once]
  - reply "Please call back tomorrow when it is quiet.": the call ends (not this one): Hana has a deadline at 4 and gets no help. One change then a look would have started right away. [slip: left the user not knowing what happens next and when]
  - reply "All right, I will do them all together now.": the call ends (not this one): If the computer speeds up, nobody will know which change did it, and changes it did not need stay in. If it does not, nothing is crossed off. [slip: changed more than one thing at once]
  - reply "I will make one change, then check whether it is faster, then the next.": goes on to turn 2, where the pressure comes back
- turn 2, the other side says: "One at a time sounds slow. I do not have time." [pushes: They push again for the fast way.]
  - reply "Fine, I will do three together.": the call ends (not this one): Three changes at once cannot be told apart if it works, and none is crossed off if it does not. [slip: changed more than one thing at once]
  - reply "One change takes about five minutes, then we look, so we know what helped and what to leave out.": the call ends (right): One change then a look: if the computer speeds up, you know what did it; if not, that change is crossed off and the next is tried. It can still end in a few minutes.
- After it ends: the lines of every turn that pushed are marked and named ("It pushes:"), and the reply where it could have ended the right way is named ("You could have ended it at your first reply: “the reply”." or "You ended it as soon as you could.").

After the answer: Reason: Hana is pressed for time, but one change and a look takes about five minutes and shows what worked. Doing them together leaves it unknown which did it and keeps changes that were not needed; if nothing helps, nothing is crossed off.

Then a screen: you can stop here, your place is kept.

## Step 7: Questions

3 questions, shuffle, with about 30% from earlier lessons mixed in, unlabeled. A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 9

A chat, with its history: "Marcus, Planning", Chat with the help desk.

> (Marcus, Planning, at the left) My phone does not get work email, but my laptop does.

A plain table, "Causes on the list":

> Cause  (the column heads)
> Marcus’s account
> The company’s mail service
> The mail app on Marcus’s phone
> The phone’s connection to the internet

A plain table, "Test":

> Test  |  Result  (the column heads)
> Marcus’s laptop, signed in as Marcus with the same mail account  |  Gets email all day

**Which causes does that result rule out? Pick every one.** (choose every one that fits)
(the options come in an order that depends on the seed of the question)
- Marcus’s account (right)
- The company’s mail service (right)
- The mail app on Marcus’s phone — if chosen: The laptop does not use the phone’s mail app, so the result says nothing about it.
- The phone’s connection to the internet — if chosen: The laptop does not use the phone’s connection, so the result says nothing about it.

After the answer: the deciding words are marked. Reason: The laptop gets Marcus’s email, so their account and the mail service work and are crossed off. The mail app and the phone’s connection never took part in that test, so both stay on the list.

#### Item 10

A chat, with its history: "Quinn, Operations", Chat with the help desk.

> (Quinn, Operations, at the left) My laptop will not join the office Wi-Fi. It stopped after the Wi-Fi password changed over the weekend. A co-worker’s laptop joins fine, next to mine.

A plain table, "Causes on the list":

> Cause  |  Cheapest test  |  Takes  (the column heads)
> The password Quinn’s laptop saved for the Wi-Fi  |  Forget the saved network and join again  |  Two minutes
> The Wi-Fi software on Quinn’s laptop  |  Update it  |  20 minutes
> The Wi-Fi part inside Quinn’s laptop  |  Swap in a working part  |  An hour

**What is your next move?**
(the options come in an order that depends on the seed of the question)
- Restart the office router, then check whether the laptop joins. — if chosen: The co-worker’s laptop joins, so the Wi-Fi works and is crossed off. The restart would also cut off everyone else.
- Update the Wi-Fi software, then forget the saved network, then check. — if chosen: That is two changes before one look. If the laptop joins, you will not know which of the two did it.
- Forget the saved network and join it again, which is one change, then check whether the laptop joins. (right)

After the answer: Reason: The Wi-Fi works for a co-worker, so it is crossed off. Of the causes left the saved password is the cheapest to test, so the next move is one change on that cause and a look at the result.

#### Item 11

A chat, with its history: "Emma, Design", Chat with the help desk.

> (Emma, Design, at the left) My screen flickers.

A plain table, "Causes on the list":

> Cause  (the column heads)
> The cable to the monitor
> The monitor
> Emma’s computer

A plain table, "Test":

> Test  |  Result  (the column heads)
> The tech puts in a cable known to work  |  The screen still flickers

The tech says: “I was sure it was the cable. Let me try one more cable.”

**What should the tech do?**
(the options come in an order that depends on the seed of the question)
- Try one more cable on the monitor, then look at the screen again. — if chosen: A cable known to work already ruled the cable out. Another one repeats a test that has been answered.
- Change the cable and move to another port together, then look. — if chosen: If it works, you will not know which one it was.
- Cross off the cable and try the monitor on another computer. (right)

After the answer: the deciding words are marked. Reason: The cable known to work did not help, so the old cable is ruled out. A first idea that will not let go is the trouble here; the written list says the monitor and the computer are next.

Then a screen: you can stop here, your place is kept.

## The check

5 new questions, no help. No answer is shown until the end. The questions come in mixed order.

To pass:
- At least 4 right

#### Check question 12

A chat, with its history: "Lila, Records", Chat with the help desk.

> (Lila, Records, at the left) I cannot open the shared folder on my laptop.

The shared folder is reached over the same Wi-Fi as the web.

A plain table, "Causes on the list":

> Cause  (the column heads)
> The Wi-Fi
> The server that holds the shared folder
> Lila’s account
> Lila’s laptop’s setup for the folder

A plain table, "Tests so far":

> Test  |  Result  (the column heads)
> A co-worker opens the shared folder on their laptop  |  Opens
> Lila opens a web page on their laptop  |  Opens

**Which causes do these two results rule out? Pick every one.** (choose every one that fits)
(the options come in an order that depends on the seed of the question)
- The Wi-Fi (right)
- The server that holds the shared folder (right)
- Lila’s account — if chosen: The co-worker opened the folder as themselves, not as Lila, so Lila’s account is untested.
- Lila’s laptop’s setup for the folder — if chosen: The web page tests the connection only, not how the laptop reaches the folder.

After the answer: the deciding words are marked. Reason: The web page opening rules out the Wi-Fi. The co-worker opening the folder rules out the server. Neither test used Lila’s account or the way their laptop reaches the folder, so both stay on the list.

#### Check question 13

A chat, with its history: "Lewis, Front desk", Chat with the help desk.

> (Lewis, Front desk, at the left) My desk phone is blank and gives no dial tone.

The desk phone gets its power and its calls through one network cable that runs to a network port in the wall.

A plain table, "Causes on the list":

> Cause  (the column heads)
> The cable from the phone to the wall
> The network port in the wall
> The phone

A plain table, "Test":

> Test  |  Result  (the column heads)
> The tech puts a cable known to work between the phone and the wall  |  The screen lights up and there is a dial tone

**What should the tech do?**
(the options come in an order that depends on the seed of the question)
- Leave the new cable in, write down that the old cable was the cause, and swap the phone for a new one too, to be safe. — if chosen: The phone is a second change nobody needed, and it stays in. The cable swap already showed the cause.
- Put the old cable back and try more cables from the cabinet, to be sure. — if chosen: The swap worked, so the old cable is the cause. Putting it back undoes the fix.
- Leave the new cable in, and write down that the old cable was the cause. (right)
- Leave the new cable in, and write down only that the phone works now. — if chosen: The next technician cannot tell what was changed, so the note is no use if the phone goes blank again.

After the answer: the deciding words are marked. Reason: A part known to work is a test, and when the trouble goes, keeping the part is the one change. Nothing else needs touching, and the note names the old cable as the cause.

#### Check question 14

A chat, with its history: "Cordelia, Front desk", Chat with the help desk.

> (Cordelia, Front desk, at the left) The scanner will not send scans to my email. It worked last week, until I typed a new email address into the scanner on Monday.

A plain table, "Causes on the list":

> Cause  |  Cheapest test  |  Takes  (the column heads)
> The email address saved on the scanner  |  Retype the address  |  One minute
> The scanner’s network cable  |  Look at the scanner’s network screen  |  One minute
> The scanner’s software  |  Update it  |  30 minutes

A plain table, "Test":

> Test  |  Result  (the column heads)
> The scanner’s screen shows its network connection  |  Connected

**What is your next move?**
(the options come in an order that depends on the seed of the question)
- Correct the address and update the scanner’s software, then send a test scan. — if chosen: If it works, you will not know which of the two did it.
- Replace the scanner’s network cable, then send a test scan. — if chosen: The scanner shows it is connected, so the cable is ruled out.
- Correct the email address on the scanner, then send a test scan. (right)
- Correct the address, restart the scanner, then send a test scan. — if chosen: Two changes at once cannot be told apart if it works.

After the answer: the deciding words are marked. Reason: The scanner is connected, so the cable is crossed off. The address is the cheapest test of the two causes left. One change on that cause, then a test scan, shows what it did and leaves the other cause untouched.

#### Check question 15

Toner is the powder a laser printer prints with; the cartridge holds it.

A chat, with its history: "Thomas, Technician", Note in the ticket.

> (Thomas, Technician, at the left) Printer printed gray streaks. I ran the printer’s cleaning routine and put in a new toner cartridge in the same visit. It prints clean now.

**What can the ticket note say about the cause?**
(the options come in an order that depends on the seed of the question)
- The cleaning and the new toner both went in; the toner is the likely cause, because the old cartridge had run low. — if chosen: The cleaning happened at the same time, so the toner is a guess.
- Cleaning run and toner cartridge replaced in the same visit; either could be the cause, and it is not known which. (right)
- Printer repaired on site. It prints clean now and the user was told. — if chosen: The next technician cannot tell what was changed, so the note is no use if the streaks come back.
- The toner went in and the cleaning was run; the cleaning is the likely cause, because streaks come from dirt. — if chosen: The new toner went in at the same time, so the cleaning is a guess.

After the answer: the deciding words are marked. Reason: Two changes at once, so a fix cannot be credited to one. One change at a time would have shown which; the note lists both and says the cause is not known.

#### Check question 16

A user’s laptop will not join the office Wi-Fi. You write down the causes: the office Wi-Fi, the saved password, the Wi-Fi switch on the laptop.

**Put the work in order.**
- Tap the six steps in the order you would do them. The steps are offered mixed (never already in the right order): "Write down the causes."; "Join the office Wi-Fi with a phone."; "Cross off the office Wi-Fi, because the phone joined."; "Forget the saved network and join it again."; "Check that the laptop is online."; "Write down what you changed and what happened.". Each tapped step is numbered; "Start again" clears the taps; the answer is the order tapped once 6 are.
- Right: Write down the causes., then Join the office Wi-Fi with a phone., then Cross off the office Wi-Fi, because the phone joined., then Forget the saved network and join it again., then Check that the laptop is online., then Write down what you changed and what happened.. After a miss: "You put: …" and why the order matters: The list first, then the test of the favorite, then crossing it off once the result is known, then one change on the next cause, a look at the result, and the note last.

After the answer: Reason: The list comes first. The test comes before the cross-off, because the result decides it. One change on the next cause comes after, then the look, and the note last.

## The result

For example "5 of 5: passed" or "3 of 5: not yet", each rule above shown as met or not met, then every answer with its feedback, the missed ones first.
