# IT Help Desk: Cut it in half

Revision 2, live. Part: Cut it in half. Where the subject ends up: Take a ticket you have never seen (a user's email, chat or call about a computer, phone, printer, network, account or security problem) and work it the way a help desk technician does: sort it and set its priority, get the user's story and what changed, try the known fix with a limit, then narrow it down with the cheapest test that splits what works from what does not, fix one thing at a time, confirm with the user and write it up, or hand it on with everything you found; and know every fact and scenario on both CompTIA A+ exams well enough to pass them.

## The why

Dana from Sales says the price list on the shared drive will not open, and they have a call at 2. The list of things it could be is long: their laptop, the Wi-Fi, their account, the server that holds the file, the file itself.
A new technician picks the one nearest, usually their laptop, and starts fixing. A good one tries one cheap test that cuts the list: can the person next to them open the same file? Here you learn to find that test, again and again, until one cause is left.

## Step 1: More than one cause

When the known fix has not worked, stop guessing and write down every cause that could produce what the user sees. Write at least two. Then pick the test, not the fix.
Dana’s price list: their laptop and its connection to the network, their account (it may not be allowed into that folder), the server that holds the shared drive (a company computer many people open files from), the file itself.
Your favorite cause goes on the list too, and it is often not the answer. A written list is what keeps the favorite from being the only thing you test. A restart or a reinstall of Windows (wiping the computer and putting the system back from scratch) is a fix, not a test.
A quick known fix, such as checking that Caps Lock is off before you call a password wrong, comes before the list, as a known fix does. The list is for when that did not work.

## Step 2: The cheapest test that splits

A test splits the list when one result points at some of the causes and the other result points at the others. A good one is cheap: it takes a minute, changes nothing in the user’s setup that you cannot put straight back, and needs no tools. Run it, read the result, and much of the list is gone.
Here are five cheap tests that split. A port is a socket on a computer that a cable plugs into. A swap puts a part you know works where the doubtful one was; it can be put back, so it is a test, not a fix. A company account works on any company computer, so a person can sign in on another one with their own account; for a person who is not there, use the desk’s test account (a made-up account kept for checks like this).

A plain table, "Five cheap tests":

> Test  |  One result points to  |  The other result points to  (the column heads)
> Another person tries it on the same computer  |  It works for them: this person’s account or settings  |  It fails for them too: the computer, the network, or what both reach
> The same person tries it on another computer  |  It works there: the first computer  |  It fails there too: the person’s account, or something both computers reach
> Swap in a part you know works (a cable, a charger, a mouse, a port)  |  It works: the old part was the fault  |  It still fails: not that part
> Does it fail before sign-in, or only after?  |  Before: the computer, its start-up or the network  |  Only after: the account, the person’s settings or a program
> Can the computer reach the internet? Open a web page.  |  A page opens: the Wi-Fi and the internet link work, so look at what is at the other end, or at the account. A company server needs its own check  |  Nothing opens: the connection itself, the Wi-Fi or a cable

## Step 3: Keep cutting

One test rarely finds the cause. It shrinks the list. Cut what is left the same way, and two or three cheap tests usually leave one cause.
A swap tells you more than whether it works. Put a part you know works where the doubtful one was, or move the doubtful one to a computer that works. If the trouble moves with the part, the part is the cause. If it stays where it was, it is not.
These tests assume one fault at a time. If two parts are bad, a swap can leave the trouble where it was and make you clear a part that is bad. When the results contradict each other, suspect a second fault.
A test only splits if its two results mean different things. A restart, or pressing Print once more, gives the same answer whichever cause is real. It is a fix or a repeat, not a test.

## Step 4: Whatever is nearest

A wrong idea, marked wrong: “The ticket says the printer, so I will reinstall the printer on their laptop. If that fails I will reinstall it again, then the printing program, then Windows.”
The right line: Work on whatever is nearest and each failed fix tells you nothing. A test that tells you which side to look on is worth more than a fix that may be on the wrong side. List the causes, run the cheapest test, which may or may not be the favorite’s, and fix only what is left.

## Step 5: A worked example

A chat, with its history: "Dana, Sales", Chat with the help desk.

> (Dana, Sales, at the left) The price list on the shared drive will not open. It just says it cannot open the file. I need it for a call at 2.

The shared drive is a folder on a company computer (a server) that many people open. The causes you can list: Dana’s laptop and its connection to the network, Dana’s account (it may not be allowed into that folder), the server that holds the folder, the file itself.

Before the working, the learner may commit to a choice (not scored, not stored):
**Dana signs in on their neighbor Tom’s computer and tries the price list. It fails there too. What does that show?**
(the options come in an order that depends on the seed of the question)
- The fault follows Dana’s account, not their laptop.
- The fault is Dana’s laptop.
- The fault is the server that holds the folder.

The working, one step at a time:
1. Write down every cause that fits, before testing any.: Dana’s laptop and its connection; Dana’s account and the folder it may not be allowed into; the server that holds the shared drive; the file itself.
1. Name your favorite, and keep it as the first thing to test, not the answer.: The Wi-Fi: three people on that floor complained about it last week.
1. Run the cheapest test of the favorite.: Dana opens a web page on their laptop. It opens. The laptop reaches the internet, so the Wi-Fi is working and is not the cause. One cause is gone.
1. Cut what is left with another person.: Tom, next to Dana, opens the price list on Tom’s computer. It opens. The server and the file are fine. Left: Dana’s laptop, or Dana’s account.
1. Cut again: the person or the computer?: Dana signs in on Tom’s computer. It fails there too. The fault goes with Dana, not their laptop.
1. Look at the one cause left.: Dana joined the sales team last week and the folder’s list of people does not have them yet. Have the folder’s owner add them.

Then the answer: The fault follows Dana’s account, not their laptop. Dana’s laptop reached a web page, so the Wi-Fi was ruled out. Tom opened the file, so the server and the file were ruled out. The same failure on Tom’s computer put the fault with Dana’s account. Three cheap tests, each cutting the list, instead of a fix on whatever was nearest.

## Step 6: Questions

4 questions, listed, with help (shown). A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 1

A chat, with its history: "Gilbert, Marketing", Chat with the help desk.

> (Gilbert, Marketing, at the left) **My report will not print on the second-floor printer. I pressed Print three times. The page never comes out.**

Causes you can list: Gilbert’s laptop, Gilbert’s connection to that printer, the printer itself.

Help on screen: the words that decide it are marked.

**Which test cuts the causes?**
(the options come in an order that depends on the seed of the question)
- Have Gilbert print the same report to the printer by the front desk. (right)
- Have a co-worker print their own report to the printer by the front desk. — if chosen: It tests the front-desk printer and the co-worker’s laptop. Whichever way it comes out, Gilbert’s laptop, their connection and the second-floor printer are all still in question.
- Have Gilbert print a one-line test page to the second-floor printer. — if chosen: It is the same laptop to the same printer, so a failure rules nothing out.
- Reinstall the printer’s software on Gilbert’s laptop and print the report again. — if chosen: That is a fix on the nearest cause. If it fails, you still do not know which side to look on.

After the answer: the deciding words are marked. Reason: Gilbert’s page leaves their laptop and never comes out of that printer, so the fault is on one side or the other. Printing the same report to a different printer is cheap, changes nothing, and its two results lead to different causes. The other choices test something else, repeat the same path, or fix one cause first.

#### Item 2

A chat, with its history: "Simone, Accounting", Chat with the help desk.

> (Simone, Accounting, at the left) **My second monitor has been black since I got in. The power light on it is on.**

Causes you can list: the monitor, the cable between them, the computer’s video connection.

Help on screen: the words that decide it are marked.

**Which test cuts the causes?**
(the options come in an order that depends on the seed of the question)
- Plug that monitor and its cable into a co-worker’s computer. (right)
- Have a co-worker look at the black monitor and say whether it is black for them too. — if chosen: Another person looking at the same black screen tells you nothing new. The monitor, the cable and the computer are all still in question.
- Turn Simone’s computer off and on with the monitor still plugged in. — if chosen: It is a fix, not a test: if the screen stays black, no cause is ruled out.
- Order a new monitor and swap it in when it arrives. — if chosen: That jumps to one cause before any test, and it costs money if the monitor was fine.

After the answer: the deciding words are marked. Reason: Moving the monitor and its cable to a computer that works cuts the list between the computer on one side and the monitor and cable on the other. It is cheap, and everything can be moved back. The other choices look at the same screen again, restart, or fix one cause before the list is cut.

#### Item 3

A chat, with its history: "Sheila, Legal", Chat with the help desk.

> (Sheila, Legal, at the left) **My email program says it cannot connect. It worked on Friday.**

Causes you can list: Sheila’s laptop cannot reach the internet at all, the company’s mail service is down or refusing them, the mail program on their laptop.

Help on screen: the words that decide it are marked.

**Which test cuts the causes?**
(the options come in an order that depends on the seed of the question)
- Have Sheila send themself a short message from the mail program again. — if chosen: The program already says it cannot connect, so this repeats the failure and rules nothing out.
- Have Sheila check that the date and time on their laptop are right. — if chosen: It checks something that is not on the list. Whichever way it comes out, the three causes are all still open.
- Have Sheila open a web page on the same laptop. (right)
- Delete their mail account from the program and add it again. — if chosen: That is a fix on the nearest cause, and it can lose what was stored in the program. If it fails, nothing is ruled out.

After the answer: the deciding words are marked. Reason: “Cannot connect” has two sides: the laptop does not reach the internet, or it does and something beyond it is wrong. A web page is the cheapest way to tell, and it changes nothing. The other choices repeat the failure, check something off the list, or work on the mail program, which is only one of the causes.

#### Item 4

A chat, with its history: "Arman, HR", Chat with the help desk.

> (Arman, HR, at the left) **My laptop says my password is wrong. I have not changed it. I checked that Caps Lock is off and typed it three times.**

Causes you can list: Arman’s account or password, Arman’s laptop. A company account works on any company computer.

Help on screen: the words that decide it are marked.

**Which test cuts the causes?**
(the options come in an order that depends on the seed of the question)
- Reset Arman’s password, then have them sign in on their laptop again. — if chosen: That is a fix on the nearest cause, and it changes the password they know. If the laptop was the problem, nothing is solved.
- Have Arman try the same sign-in on a co-worker’s computer. (right)
- Have Arman type their password once more, slowly, on the same laptop. — if chosen: They have already typed it three times with Caps Lock off. A fourth try gives the same answer and rules no cause out.
- Reinstall Windows (wipe the laptop and put the system back from scratch) and try again. — if chosen: That is a very large fix on one cause, and it is not shown to be the right one.

After the answer: the deciding words are marked. Reason: The same person on a second computer is a split between the person and the computer. It is cheap and changes nothing. The other choices change the password or the laptop before anyone knows which of the two is at fault, or repeat the try.

Then a screen: you can stop here, your place is kept.

## Step 7: Questions

6 questions, shuffle. A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 5

A chat, with its history: "Eli, Operations", Chat with the help desk.

> (Eli, Operations, at the left) I cannot open the timesheet page on the company website. It just spins.

A plain table, "What you tried":

> Test  |  Result  (the column heads)
> Eli’s laptop, other websites  |  Open fine
> Maya’s laptop, the timesheet page  |  Opens fine
> Eli signs in on Maya’s laptop, the timesheet page  |  Spins, will not open

**Where does this point?**
(the options come in an order that depends on the seed of the question)
- Eli’s account (right)
- Eli’s laptop — if chosen: Eli is on Maya’s laptop in the last test, and it still fails. Maya’s laptop works for them.
- The timesheet website — if chosen: The page opens for Maya, so the website is fine.
- The office network — if chosen: Other websites open on Eli’s laptop and the page opens on Maya’s, so the network is fine.

After the answer: the deciding words are marked. Reason: The page opens for Maya (the website and the network work) and fails for Eli on Maya’s computer as well (it is not Eli’s laptop). The only cause left that goes with Eli is their account.

#### Item 6

A chat, with its history: "Hal, Shipping", Chat with the help desk.

> (Hal, Shipping, at the left) My keyboard types nothing. The mouse works.

A plain table, "What you tried":

> Test  |  Result  (the column heads)
> Hal unplugged the keyboard and plugged it back into the same port  |  Still types nothing

A port is a socket on the computer that a cable plugs into. Causes left: the keyboard, the port it is in, Hal’s computer.

**Which test comes next?**
(the options come in an order that depends on the seed of the question)
- Plug the same keyboard into the same port once more, pushing it in firmly. — if chosen: Hal already did that, and it gave an answer. Doing it again rules nothing out.
- Have Hal click into a different program and type there. — if chosen: A keyboard that types nothing will type nothing in any program, so the result is the same for every cause.
- Plug a keyboard you know works into the same port. (right)
- Reinstall Windows on Hal’s computer and type again. — if chosen: That is a very large fix on one cause, and it is not shown to be the right one.

After the answer: Reason: A part known to work, put where the doubtful one was, cuts the list again: if it works, only the keyboard was at fault; if it does not, the keyboard is cleared. The other choices repeat a test already done, test nothing new, or fix one cause untested.

#### Item 7

A chat, with its history: "Hamza, Front desk", Chat with the help desk.

> (Hamza, Front desk, at the left) Only my report prints blank on the shared printer. Everybody else printed fine on it this morning.

**Which causes are still worth listing? Pick every one that fits.** (choose every one that fits)
(the options come in an order that depends on the seed of the question)
- The report file itself (right)
- The way Hamza’s laptop is configured to print to that printer (right)
- The printer is out of toner — if chosen: Everyone else printed fine on that printer this morning, so it has toner.
- The printer has lost its connection to the network — if chosen: Other people’s pages got to it this morning, so it is connected.

After the answer: the deciding words are marked. Reason: Everyone else printed fine on that printer, so the printer and its connection are cleared by what is already known. What is left is on Hamza’s side: their file, or how their laptop prints. List those two, then cut between them with a test.

#### Item 8

A chat, with its history: "Behrouz, Sales", Chat with the help desk.

> (Behrouz, Sales, at the left) The web page for our order system will not load for me. It is the Wi-Fi, I am sure, it is always the Wi-Fi.

You think it may be the Wi-Fi too.

**What do you do before you test it?**
(the options come in an order that depends on the seed of the question)
- Write down the Wi-Fi as the cause and test it first, because two of you already think so. — if chosen: If the Wi-Fi test comes back clean, you have no list and no next test.
- Add their laptop, their account and the order system to the list too, then run the cheapest test. (right)
- Replace the Wi-Fi card (the part inside their laptop that connects to Wi-Fi), then try the page again. — if chosen: That is a fix on one cause nobody has tested.

After the answer: the deciding words are marked. Reason: A favorite cause is the first thing to test, not the answer. Writing the other causes down first keeps one idea from being the only one, and the cheapest test is not always the favorite’s.

#### Item 9

Frank in Sales calls the help desk. You answer.

**Frank calls about the price list. You have their story. What do you say to cut the causes?**
- An incoming call from "Frank, Sales" (Incoming call · 10:05 AM). The turns arrive one after another; the learner picks a reply each time and the next turn follows the reply. Pick what you say. The call goes on from there. Nothing is marked until it ends, and a call is not on a clock.
- turn 1, the other side says: "My computer will not open the shared price list. It is old and it is broken. Just send me a new one." [pushes: They want a replacement before anything has been tested.]
  - reply "Can you restart your computer and tell me if it opens then?": the call ends (not this one): A restart is a fix, not a test. If it fails, you still do not know which side the fault is on. [slip: ran a test that does not split what works from what does not]
  - reply "I will put in the order for a new computer today.": the call ends (not this one): A new computer costs days and money, and nothing showed the old one was the cause. One person next to them trying the file would have shown whether it was. [slip: worked on whatever was nearest instead of testing to split the causes]
  - reply "Have the person next to you open the price list on their computer.": goes on to turn 2, where the pressure comes back
  - reply "How old is the computer, and which Windows does it have?": the call ends (not this one): Good to know later, but you already have their story, and the age and the system do not decide between their computer and what it reaches. Another computer trying the file would. [slip: ran a test that does not split what works from what does not]
- turn 2, the other side says: "Kim says it will not open on theirs either. Still, mine is old. Replace it anyway." [pushes: They still want the replacement, even though another computer fails the same way.]
  - reply "All right, I will order the new computer.": the call ends (not this one): Kim’s computer fails the same way, so a new computer for Frank would not fix it. [slip: worked on whatever was nearest instead of testing to split the causes]
  - reply "Could Kim try it once more, to be sure?": the call ends (not this one): Kim already tried and it failed. Trying it once more gives the same answer and rules nothing out. [slip: ran a test that does not split what works from what does not]
  - reply "Then it is not only your computer. I will check the shared folder itself.": the call ends (right): Two computers fail the same way, so the cause is something both share: the folder, the server or the network. One request cut the list without touching Frank’s computer.
- After it ends: the lines of every turn that pushed are marked and named ("It pushes:"), and the reply where it could have ended the right way is named ("You could have ended it at your first reply: “the reply”." or "You ended it as soon as you could.").

After the answer: Reason: Kim’s computer fails the same way as Frank’s, so the fault is not in Frank’s old computer. A second person on a second computer is the cheapest test that splits “this computer” from “what both computers reach”.

#### Item 10

A chat, with its history: "Sia, Records", Chat with the help desk.

> (Sia, Records, at the left) My laptop is very slow to be usable in the morning. Once I am in, programs open slowly for the first ten minutes.

Causes you can list: the laptop’s own start-up before anyone signs in, the programs that start for Sia’s account after they sign in.

**Which test cuts the causes?**
(the options come in an order that depends on the seed of the question)
- Have a co-worker time how long their own laptop takes to be usable in the morning. — if chosen: It times a different laptop. Sia’s start-up and their account’s programs are both still in question.
- Have Sia restart and watch whether the wait comes before the sign-in screen or after it. (right)
- Have Sia close every program they have open and sign in again. — if chosen: It is the same sign-in on the same laptop. The wait looks the same whichever cause is real.
- Add memory (the part a laptop holds its open programs in) to the laptop and check the morning again. — if chosen: That is a guess at one cause, and it costs money if the cause is elsewhere.

After the answer: the deciding words are marked. Reason: Failing or waiting before sign-in points at the laptop; only after sign-in points at the account and what starts for it. Watching where the wait comes is free and changes nothing. The other choices time another laptop, repeat the sign-in, or fix one cause first.

Then a screen: you can stop here, your place is kept.

## Step 8: Questions

5 questions, shuffle, with about 30% from earlier lessons mixed in, unlabeled. A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 11

A chat, with its history: "Adaeze, Design", Chat with the help desk.

> (Adaeze, Design, at the left) My mouse pointer jumps all over the screen.

A plain table, "What you tried":

> Test  |  Result  (the column heads)
> Adaeze’s mouse on Ben’s computer  |  The pointer jumps
> Ben’s mouse on Adaeze’s computer  |  Works fine

**What does swapping the mouse show?**
(the options come in an order that depends on the seed of the question)
- The mouse: the trouble moved with it. (right)
- Adaeze’s computer is the fault. — if chosen: Ben’s mouse works fine on Adaeze’s computer. If their computer were the cause, any mouse would jump.
- Ben’s computer is the fault. — if chosen: Ben’s own mouse works on their computer, so their computer is fine. The jumping followed Adaeze’s mouse there.
- The swaps cannot tell you anything. — if chosen: The trouble stayed in one place when the mice changed computers and followed the other mouse. That tells you a lot.

After the answer: the deciding words are marked. Reason: Adaeze’s mouse jumps on a computer where it was fine before, and Ben’s mouse is fine on the computer where Adaeze’s jumped. The problem moves with the mouse, so the mouse is the cause. If a problem stays in place when the part moves, the part is not the cause.

#### Item 12

A chat, with its history: "Asha, Billing", Chat with the help desk.

> (Asha, Billing, at the left) Nothing comes out of the printer when I print.

A plain table, "Three things you could do":

> Way  |  Takes  |  What it changes  (the column heads)
> A co-worker prints to the same printer from their computer  |  One minute  |  Nothing
> Reset the printer to its factory settings (the settings it had when it left the maker) and configure it again  |  30 minutes  |  Wipes the printer’s settings for everyone
> Asha presses Print again on the same page  |  One minute  |  Nothing

**Which do you do first?**
(the options come in an order that depends on the seed of the question)
- Reset the printer to its factory settings. — if chosen: It might tell you something, but it takes half an hour and wipes everyone’s settings. A test that changes nothing comes first.
- Have a co-worker print to the same printer. (right)
- Reinstall the printing program on Asha’s computer. — if chosen: That is a fix on one cause, and it splits nothing if it fails.
- Have Asha press Print again on the same page. — if chosen: It is as cheap, but it is the same try on the same path, so its result rules no cause out.

After the answer: the deciding words are marked. Reason: The cheapest test is the quickest one that changes the least and still splits the causes. Pressing Print again is just as cheap but splits nothing. A co-worker printing is cheap and splits. A reset is a fix to try after the cheap tests have narrowed the list.

#### Item 13

A chat, with its history: "Adrian, Purchasing", Chat with the help desk.

> (Adrian, Purchasing, at the left) My laptop will not start. I see the maker’s logo, then a black screen. I never get to the sign-in screen.

Causes you can list: Adrian’s account, the office network, Adrian’s laptop itself.

**Where does this point?**
(the options come in an order that depends on the seed of the question)
- Adrian’s laptop itself (right)
- Adrian’s account — if chosen: No account is used before the sign-in screen appears, so the account cannot be what stops it.
- The office network — if chosen: Nothing about the office network can matter before the sign-in screen even appears.

After the answer: the deciding words are marked. Reason: Failing before sign-in cuts out the account and the office network, which only come in afterward. The fault is on Adrian’s laptop.

#### Item 14

A chat, with its history: "Tia, Shipping", Chat with the help desk.

> (Tia, Shipping, at the left) My mouse does nothing. The pointer will not move.

A plain table, "What you tried":

> Test  |  Result  (the column heads)
> Tia’s mouse, unplugged and plugged back into the same port  |  Nothing
> A mouse known to work, in that port  |  Nothing

Causes left: the port, or Tia’s computer.

**Which test comes next?**
(the options come in an order that depends on the seed of the question)
- Plug the mouse into a different port on the same computer. (right)
- Plug a third mouse into the same port and move it. — if chosen: A mouse known to work already failed in that port, so a third one gives the same answer.
- Plug the mouse into the same port again, pushing it in firmly. — if chosen: That was done in the first test and gave an answer. Doing it again rules nothing out.
- Order Tia a new computer and have it delivered. — if chosen: That jumps to one cause before the port is tested, and it costs money if the port was the fault.

After the answer: the deciding words are marked. Reason: Two mice failed in the same port, so the mouse is cleared and the port or the computer is left. The same mouse in a different port splits those two. It is cheap, and the mouse moves back.

#### Item 15

A chat, with its history: "Nina, Legal", Chat with the help desk.

> (Nina, Legal, at the left) My monitor is black.

A plain table, "What you tried (Dee’s monitor and Dee’s computer work)":

> Test  |  Result  (the column heads)
> A cable known to work, in place of Nina’s cable, on Nina’s monitor and computer  |  Still black
> Nina’s monitor, with the cable known to work, on Dee’s computer  |  Black
> Nina’s cable, with Dee’s monitor, on Dee’s computer  |  Black

**What do the three results show?**
(the options come in an order that depends on the seed of the question)
- The cable is fine, because swapping it did not help in the first test. — if chosen: The third test shows Nina’s cable is bad as well. In the first test the monitor was bad too, so the new cable could not show a picture.
- Both Nina’s monitor and Nina’s cable are faulty. (right)
- Only Nina’s monitor is faulty, because it is black on Dee’s computer. — if chosen: The cable is black on Dee’s monitor, so it is faulty too.
- Nina’s computer is the fault. — if chosen: Nina’s monitor is black on Dee’s computer as well, and Nina’s computer was not in the second and third tests.

After the answer: the deciding words are marked. Reason: A swap that does not help clears the part only if there is one fault. Here the second and third tests move each part to a working setup, and both stay black, so two parts are faulty. When results contradict each other, suspect a second fault.

Then a screen: you can stop here, your place is kept.

## The check

6 new questions, no help. No answer is shown until the end. The questions come in mixed order.

To pass:
- At least 5 right

#### Check question 16

A chat, with its history: "Sherman, Finance", Chat with the help desk.

> (Sherman, Finance, at the left) My laptop says Connected to Wi-Fi but no website will open.

Causes you can list: Sherman’s laptop, or the office Wi-Fi and its link to the internet together.

**Which test cuts the causes?**
(the options come in an order that depends on the seed of the question)
- Have Sherman try the same website once more in a second browser on their laptop. — if chosen: It tests the browser, which is not on the list. Whichever way it comes out, the laptop and the Wi-Fi are both still in question.
- Restart the office router (the box that connects the office to the internet). — if chosen: That cuts everyone in the office off, and it is a fix, not a test.
- Have Sherman forget the Wi-Fi network on their laptop and join it again. — if chosen: That is a fix on the nearest cause. If it fails, nothing is ruled out.
- Have Sherman open a web page on their phone, on the same Wi-Fi. (right)

After the answer: the deciding words are marked. Reason: A second device on the same Wi-Fi cuts the laptop from the Wi-Fi and the internet link. It is cheap and changes nothing. The other choices test the browser, or fix one cause.

#### Check question 17

A chat, with its history: "Wen, Purchasing", Chat with the help desk.

> (Wen, Purchasing, at the left) My monitor is black.

A plain table, "What you tried":

> Test  |  Result  (the column heads)
> Wen’s monitor, with Wen’s cable, on Dee’s computer  |  Black
> Dee’s monitor, with Wen’s cable, on Dee’s computer  |  Shows a picture

**Where does this point?**
(the options come in an order that depends on the seed of the question)
- Wen’s monitor (right)
- Wen’s cable — if chosen: The same cable shows a picture with Dee’s monitor in the second test.
- Wen’s computer — if chosen: Neither test used Wen’s computer. The monitor is black on Dee’s.
- Dee’s computer — if chosen: Dee’s computer shows a picture on Dee’s monitor in the second test.

After the answer: the deciding words are marked. Reason: The cable and Dee’s computer are cleared by the picture in the second test. The black screen follows Wen’s monitor to a computer that works. The monitor is the fault.

#### Check question 18

A chat, with its history: "Lin, Planning", Chat with the help desk.

> (Lin, Planning, at the left) My laptop freezes for about five minutes after I sign in. The sign-in screen itself is fast.

Causes you can list: the laptop, Lin’s account and what starts for them when they sign in. The desk keeps a test account, a made-up account for checks like this.

**Which test cuts the causes?**
(the options come in an order that depends on the seed of the question)
- Reinstall Windows (wipe the laptop and put the system back from scratch) on Lin’s laptop. — if chosen: That is a very large fix on one cause, and it is not shown to be the right one.
- Have Lin sign in on their own laptop again and watch the freeze for the full five minutes. — if chosen: The same sign-in on the same laptop gives the same answer and rules nothing out.
- Sign in on Lin’s laptop with the desk’s test account and see whether it freezes. (right)
- Add memory (the part a laptop holds its open programs in) to Lin’s laptop and sign in again. — if chosen: That is a guess at one cause, and it costs money if the cause is elsewhere.

After the answer: the deciding words are marked. Reason: A different account on the same laptop splits the laptop from Lin’s account. The sign-in screen is fast, so the trouble comes after sign-in, which is where the account starts its own programs. The other choices repeat the sign-in or fix one cause untested.

#### Check question 19

A chat, with its history: "Curtis, Records", Chat with the help desk.

> (Curtis, Records, at the left) The company website opens fine on my laptop, but the shared drive will not open. My neighbor can open both.

**Which causes are still worth listing? Pick every one that fits.** (choose every one that fits)
(the options come in an order that depends on the seed of the question)
- Curtis’s account is not allowed into the shared drive (right)
- The way Curtis’s laptop is configured to reach the shared drive (right)
- The server that holds the shared drive is down — if chosen: Their neighbor opens the shared drive, so the server is up.
- The office network is down — if chosen: The company website opens on Curtis’s laptop, and their neighbor opens both, so the network is up.

After the answer: the deciding words are marked. Reason: Their neighbor opens the shared drive and their website opens, so the server and the network are cleared by what you already know. What is left is on Curtis’s side: their account, or how their laptop reaches the drive. List those two, then cut between them.

#### Check question 20

Carla in Accounting calls the help desk. You answer.

**Carla calls about their internet. You have their story. What do you say to cut the causes?**
- An incoming call from "Carla, Accounting" (Incoming call · 3:20 PM). The turns arrive one after another; the learner picks a reply each time and the next turn follows the reply. Pick what you say. The call goes on from there. Nothing is marked until it ends, and a call is not on a clock.
- turn 1, the other side says: "My internet is down. The whole building must be down. Please fix the building." [pushes: They want the whole building treated as the cause before any test.]
  - reply "Can you tell me whether anyone near you is online right now?": goes on to turn 2, where the pressure comes back
  - reply "I will check the building’s network right now.": the call ends (not this one): Nothing showed the building was the cause. Someone near them being online would have shown it was not. [slip: worked on whatever was nearest instead of testing to split the causes]
  - reply "When did it last work, and what were you doing then?": the call ends (not this one): You already have their story, and more of it does not tell the laptop from the building. Someone near them being online would. [slip: ran a test that does not split what works from what does not]
  - reply "Restart your laptop and call back if it is still down.": the call ends (not this one): A restart is a fix, not a test. If it fails, you still do not know which side the fault is on. [slip: ran a test that does not split what works from what does not]
- turn 2, the other side says: "Blair is on a video call right now. But I am sure it is the building." [pushes: They still blame the building, though someone near them is online.]
  - reply "I will restart the building’s router anyway.": the call ends (not this one): Blair is online, so the building is fine. Restarting the router would cut off the people who are working. [slip: stayed with a cause the test had ruled out]
  - reply "Then the building is up. Let us look at your laptop and its connection.": the call ends (right): Blair’s video call shows the building’s connection works, so the fault is on Carla’s laptop or their connection to the network. One question cut the list.
  - reply "Please try opening a page again, and tell me what it says.": the call ends (not this one): The same try gives the same answer and rules nothing out. [slip: ran a test that does not split what works from what does not]
- After it ends: the lines of every turn that pushed are marked and named ("It pushes:"), and the reply where it could have ended the right way is named ("You could have ended it at your first reply: “the reply”." or "You ended it as soon as you could.").

After the answer: Reason: Someone near Carla who is online shows the building’s connection works. A person on the same network is the cheapest test that splits “everyone” from “only Carla”.

#### Check question 21

A chat, with its history: "Isla, Reception", Chat with the help desk.

> (Isla, Reception, at the left) There is no sound in my headset on video calls.

A plain table, "What you tried":

> Test  |  Result  (the column heads)
> Isla’s headset plugged into a co-worker’s computer  |  Sound works

Causes left: Isla’s computer or its sound connection, or the video call program.

**Which test comes next?**
(the options come in an order that depends on the seed of the question)
- Reinstall the video call program and join a call. — if chosen: That is a fix on one cause. If it fails, nothing more is ruled out.
- Play a song on Isla’s computer through the headset, outside the video call program. (right)
- Plug Isla’s headset into the co-worker’s computer again and play a song. — if chosen: That test was already done and the headset worked. Doing it again rules nothing out.
- Have Isla join a second call and listen again. — if chosen: The same try gives the same answer and rules nothing out.

After the answer: the deciding words are marked. Reason: The headset works elsewhere, so the list is down to the computer and the call program. Playing a song outside the call program splits those two: it is cheap, and its two results lead to different causes.

## The result

For example "6 of 6: passed" or "4 of 6: not yet", each rule above shown as met or not met, then every answer with its feedback, the missed ones first.
