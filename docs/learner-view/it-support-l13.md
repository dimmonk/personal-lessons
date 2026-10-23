# IT Help Desk: Printers

Revision 1, live. Part: Printers. Where the subject ends up: Take a ticket you have never seen (a user's email, chat or call about a computer, phone, printer, network, account or security problem) and work it the way a help desk technician does: sort it and set its priority, get the user's story and what changed, try the known fix with a limit, then narrow it down with the cheapest test that splits what works from what does not, fix one thing at a time, confirm with the user and write it up, or hand it on with everything you found; and know every fact and scenario on both CompTIA A+ exams well enough to pass them.

## The why

Galen in Accounts has sent an invoice to the printer by the kitchen four times, and nothing comes out. The printer’s screen says Ready. Between her program and the paper sit a queue, a driver, a link to the printer, the printer, and its paper and toner.
A new technician reinstalls something. A good one prints a test page from the printer’s own screen, and half the chain is cleared in a minute. Here you learn the print path, the seven steps inside a laser printer, and how each kind of printer is put in and looked after.

## Step 1: The print path

A print job passes through these links, in order. The driver is software that turns the job into the printer’s own language, PCL (from HP) or PostScript (from Adobe). The print spooler is the Windows service that holds the queue of waiting jobs.

A plain table, "The print path":

> Link  |  What it does  |  When it fails  (the column heads)
> The program  |  Where you press Print and choose pages and orientation (upright or sideways)  |  Only one program fails; pages come out sideways
> The print queue  |  The list of waiting jobs, kept by the print spooler  |  Jobs pile up; a stuck job at the front holds back the rest
> The driver  |  Turns the job into PCL or PostScript  |  Rows of strange symbols
> The connection from this computer  |  Its USB port, network cable or wireless, and the address it sends to: the printer’s IP address (its number on the network). A print server, one machine that holds the queue for many people, may sit between  |  Offline on this computer only; began when a cable, port or address changed
> The printer  |  Its own network link, its screen, and the parts that mark the page  |  Offline on every computer; an error on its screen; its test page fails
> Paper path, toner or ink  |  Rollers pull the paper; toner or ink marks it  |  Jams, faded pages, lines, specks, echoes, grinding

## Step 2: Cut the path with a test page

Run the cheapest test that cuts the causes in half. On a printer that is a test page, and where it starts decides what it tests. These tests assume one fault at a time; if two show up, fix them one at a time.

A plain table, "Three cheap tests on the print path":

> Test  |  It skips  |  One result points to  (the column heads)
> A test page from the printer’s own screen  |  This computer, its link to the printer, and the network  |  It prints well: look earlier. It fails: the printer, paper or toner.
> A test page from Windows (the printer’s properties)  |  The program  |  It prints: the program. It does not: queue, driver, connection or printer.
> The same job from another person’s computer  |  This computer’s program, queue, driver and own link to the printer  |  It prints: this computer’s side. It fails too: the printer or its network link.

## Step 3: Inside a laser printer

Toner is the fine powder a laser printer uses. The drum is a roller that holds the page as a pattern of electric charge. The fuser is the hot roller that bakes the toner on. Every page takes seven steps, and each defect comes from one of them.

A plain table, "The seven steps of a laser printer":

> Step  |  What happens  |  When it fails  (the column heads)
> 1 Processing  |  The printer reads the job and builds the page as a picture of dots  |  Rows of strange symbols, when it cannot read the language the driver sent
> 2 Charging  |  A wire or roller gives the drum an even electric charge  |  Lines down the pages: a dirty charging wire or roller, or a scratched drum
> 3 Exposing  |  A laser draws the page on the drum, wiping away the charge where it is dark  |  Pale or blurred print from a weak laser
> 4 Developing  |  Toner sticks to the drum where the laser drew  |  Faded prints when toner runs low; blank pages when the cartridge is empty or its sealing tape is on; specks from loose toner
> 5 Transferring  |  The paper is charged and pulls the toner off the drum  |  Pale or half-printed pages, when the toner stays on the drum
> 6 Fusing  |  The hot fuser bakes the toner into the paper  |  Toner that rubs off or smears, when the fuser is too cool or worn; echo images (a faint copy of the last page), when the drum or fuser is worn
> 7 Cleaning  |  A blade wipes leftover toner off the drum, and a lamp erases its charge  |  Echo images, when the drum or the cleaning blade is worn or dirty; dark marks

## Step 4: Every other symptom

An inkjet sprays ink from the nozzles of its printhead. A finisher is the add-on that staples or punches holes.

A plain table, "More symptoms inside the printer":

> Symptom  |  Likely cause and first fix  (the column heads)
> Lines or white streaks in the text (inkjet)  |  Clogged printhead. Run the printhead cleaning.
> Grinding noise  |  Paper caught, or a worn gear or roller. Switch off and look for a jam.
> Paper jams  |  Wrong, damp or overfilled paper first; then worn rollers.
> Paper not feeding; several sheets at once (multipage misfeed)  |  Damp or stuck paper, or worn rollers. Fan the stack and reload.
> Staple jams, hole punch trouble  |  The finisher. Clear it.

A plain table, "On the computer’s side (the printer’s own test page is fine)":

> Symptom  |  Likely cause and first fix  (the column heads)
> Garbled print  |  The wrong driver, so the wrong language. Install the right one.
> Many jobs pending, frozen queue  |  A stuck job. Cancel the jobs and restart the print spooler.
> Incorrect page orientation  |  The setting in the program or the driver.
> Tray not recognized  |  Tray not pushed in, or not listed as installed in the printer’s properties.
> Connectivity issues (Offline)  |  Cable, port, wireless, a changed address or the print server. Try a cable known to work.

## Step 5: Whatever is nearest

A wrong idea, marked wrong: “It is a printer ticket, so I will replace the toner. If that fails, I will reinstall the driver, then the printer, then Windows.”
The right line: None of those tells you whether you are on the right link. A test page from the printer’s own screen takes a minute and cuts the chain in half. Cut first, then fix only what is left.

## Step 6: Putting a printer in, and securing it

Unbox it, take off all the packing tape, and stand it on a stable surface near a socket and the network, with room for paper and air. Install the right driver (PCL for everyday office work, PostScript for exact layout and graphics) and update its firmware, the built-in software. Connect it by USB (one computer), network cable or wireless. A network printer needs an address that never changes: give it a fixed IP address, or have the network reserve one. To share it, use a printer share on a computer that stays on, or a print server. Then choose the defaults: duplex (both sides), orientation, tray and quality (draft saves toner).
A multifunction printer also scans: to email, to a shared folder (SMB, the way Windows shares folders) or to the cloud (online storage). Loose sheets go through the automatic document feeder, which can scan both sides; a book, a stapled booklet or a fragile page goes on the flatbed glass.

A plain table, "Printer security":

> Setting  |  What it does  (the column heads)
> User authentication  |  Only people who sign in can print
> Badging  |  Signing in by scanning a card at the printer
> Secured print  |  A job waits inside the printer until its owner signs in with a PIN or badge
> Audit logs  |  A record of who printed what and when, read afterward

## Step 7: Care by kind of printer

A plain table, "Care by kind of printer":

> Kind  |  How it marks  |  Care  (the column heads)
> Laser  |  Toner baked on by a hot fuser  |  Replace toner; apply the maintenance kit (the worn parts, such as the fuser and rollers, replaced together at the maker’s page count; the drum is separate); the kit is scheduled maintenance by page count, not a test, so it replaces several parts on purpose; calibrate (adjust so colors and lines match up); clean the inside
> Inkjet  |  Ink sprayed from a printhead  |  Replace cartridges; clean the printheads; clean the feed rollers; calibrate (line up the heads); clear jams
> Thermal  |  A heating element darkens special paper (receipts, labels); no ink or toner  |  Replace the paper; clean the heating element; remove debris
> Impact (dot matrix)  |  Pins strike an inked ribbon; the only kind that prints multipart carbon-copy forms  |  Replace the ribbon, printhead and paper

Used toner is not household waste: its safety data sheet (called MSDS on the exam) says how to dispose of it.

## Step 8: A worked example

A chat, with its history: "Galen, Accounts", Chat with the help desk.

> (Galen, Accounts, at the left) I sent the invoice to the printer by the kitchen four times and nothing comes out. The printer’s screen says Ready.

The links you can list: the program Galen printed from, the print queue on her computer, the driver, her computer’s connection to the printer, the printer itself, and its paper and toner.

Before the working, the learner may commit to a choice (not scored, not stored):
**Galen prints a test page from the printer’s own screen. It comes out sharp. What does that rule out?**
(the options come in an order that depends on the seed of the question)
- The printer, its paper and its toner.
- Galen’s print queue and driver.
- Nothing: a test page says little about a real job.

The working, one step at a time:
1. Write down the links of the print path before testing any.: The program, the queue, the driver, the connection from her computer, the printer, its paper and toner.
1. Name your favorite, and keep it as the first test, not the answer.: Out of toner: the last person to use it said the pages were faint.
1. Run the cheapest test of the favorite: a test page from the printer’s own screen.: It comes out sharp. The printer, its paper and its toner are ruled out, and the favorite goes with them. Half the chain is gone.
1. Cut what is left in half with another person.: Ruben prints the same invoice to the same printer from his computer, and it comes out. The printer and its network link are fine. Left: Galen’s program, her queue, her driver, and her own link to the printer (port, cable, address).
1. Look at the queue, the list of jobs waiting on Galen’s computer.: Her computer shows the printer as Ready, not Offline, so her link is up. Four copies of the invoice wait. The first is marked Error, and a stuck job at the front holds back all the ones behind it.
1. Now change one thing, and check it.: Cancel the four jobs, restart the print spooler (the Windows service that holds the queue), print once. It comes out. Then check with Galen that it works for her.

Then the answer: The printer, its paper and its toner. The printer’s own test page ruled out the printer, its paper and its toner, so the favorite (toner) was wrong. Ruben’s page ruled out the printer’s network link. The queue was the link left, and it showed the stuck job. Two cheap tests cut the chain; the fix came last.

## Step 9: Questions

4 questions, listed, with help (shown). A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 1

A chat, with its history: "Hester, Design", Chat with the help desk.

> (Hester, Design, at the left) **A dark line runs down every page, in the same place. I printed a test page from the printer’s own screen and the line is on that too.**

It is a laser printer.

Help on screen: the words that decide it are marked.

**Where does the fault sit?**
(the options come in an order that depends on the seed of the question)
- Charging: a dirty charging wire or roller, or a scratched drum. (right)
- Fusing: the fuser is not hot enough. — if chosen: A cool fuser leaves toner that rubs off. It does not draw a line in the same place on every page.
- The driver that the computer uses for this printer. — if chosen: The printer’s own test page skips the driver, and the line is on it.
- The print queue on the computer that sent the job to the printer. — if chosen: The printer’s own test page skips the queue, and the line is on it.

After the answer: the deciding words are marked. Reason: The line is on the test page made inside the printer, so everything before the printer is cleared. A mark that repeats in the same place on every page is made by a part that touches every page: on a laser printer the charging wire or roller, or the drum; on an inkjet the printhead.

#### Item 2

A chat, with its history: "Aiden, Sales", Chat with the help desk.

> (Aiden, Sales, at the left) **Everything I print comes out as rows of strange symbols and letters. The printer’s own test page looks normal.**

The printer is new: the office bought it last week.

Help on screen: the words that decide it are marked.

**Which link holds the fault?**
(the options come in an order that depends on the seed of the question)
- The driver, which sends the job in the wrong language. (right)
- The print queue, with a stuck job at the front. — if chosen: A stuck job keeps pages from coming out. It does not change their letters.
- The program’s page setup, turned to landscape. — if chosen: Orientation turns the page. It does not change the letters.
- The USB cable that runs between the computer and the printer. — if chosen: A bad cable shows as Offline or nothing printing, not as symbols.

After the answer: the deciding words are marked. Reason: The clean test page clears the printer. Garbled print means the printer was sent the job in a language it does not read (the processing step fails). The driver translates the job, so the fix is the right driver for that printer, in the right language (PCL or PostScript).

#### Item 3

A chat, with its history: "Ilya, Reception", Chat with the help desk.

> (Ilya, Reception, at the left) My print jobs say Printing but nothing comes out. The printer says Ready.

A plain table, "Ilya’s print queue":

> Job  |  Status  (the column heads)
> Invoice.pdf  |  Error - Printing  <- marked after the answer
> Letter.docx  |  Printing  <- marked after the answer
> Menu.docx  |  Printing  <- marked after the answer

Help on screen: the words that decide it are marked.

**Which link holds the fault?**
(the options come in an order that depends on the seed of the question)
- The print queue, with a stuck job at the front. (right)
- The driver installed on Ilya’s computer for this printer. — if chosen: A wrong driver garbles a page that does come out. Here the jobs never leave the queue.
- Ilya’s own link to the printer: its cable or port. — if chosen: A broken link shows the printer as Offline. Here it shows Ready, and the jobs sit in Ilya’s queue.
- The printer itself, which has stopped working. — if chosen: The printer says Ready, and the jobs never reached it.

After the answer: the deciding words are marked. Reason: The queue shows one job in error with two behind it, and the printer is ready and idle. The jobs are stuck before they reach the printer, so the link is the queue. The fix is to clear it and restart the print spooler.

#### Item 4

The copy room has a laser printer that is far past the maker’s page count for its maintenance kit. It jams more and more often.

Help on screen: the words that decide it are marked.

**What is the maintenance kit?**
(the options come in an order that depends on the seed of the question)
- The parts that wear out, such as the fuser and rollers, replaced together. (right)
- A fresh toner cartridge and a new drum, replaced together. — if chosen: Toner is replaced when it runs low. It is not a worn part of the paper path.
- A cleaning cloth, a small vacuum and a soft brush for cleaning the inside of the printer. — if chosen: Cleaning is part of care, but it does not replace a roller that has worn smooth.
- The newest driver and firmware update, installed together. — if chosen: A driver does not wear out, and it does not change how the paper is picked up.

After the answer: Reason: Jams that grow more frequent past the maker’s page count come from worn rollers. The maintenance kit replaces the parts that wear on a laser printer (the fuser and rollers; the drum is replaced separately), and the desk applies it on a schedule by page count.

Then a screen: you can stop here, your place is kept.

## Step 10: Questions

7 questions, shuffle. A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 5

A chat, with its history: "Jonah, Purchasing", Chat with the help desk.

> (Jonah, Purchasing, at the left) Nothing I print comes out of the printer on the third floor.

A plain table, "What you tried":

> Test  |  Result  (the column heads)
> A test page from the printer’s own screen  |  Prints fine
> Gita prints the same file to that printer from her computer  |  Prints fine
> Jonah prints it again from his computer  |  Nothing comes out

**Where does this point?**
(the options come in an order that depends on the seed of the question)
- Jonah’s computer: his program, queue, driver or link (right)
- The printer on the third floor and its paper — if chosen: It printed a test page and Gita’s file.
- The printer’s own link to the network — if chosen: Gita’s computer reaches the printer over the same link.
- Gita’s computer, which prints differently from Jonah’s — if chosen: Gita’s file printed, so her side works. The one that fails is Jonah’s.

After the answer: the deciding words are marked. Reason: The printer prints (its own page, and Gita’s file), so the printer, its paper and its network link are cleared. What is left is what only Jonah’s computer has: his program, his queue, his driver and his own link to the printer (port, cable, address).

#### Item 6

A chat, with its history: "Keira, Records", Chat with the help desk.

> (Keira, Records, at the left) My prints have been getting paler all week, and now they are very pale. The printer’s own test page is pale too.

It is a laser printer.

**What is the cheapest next step?**
(the options come in an order that depends on the seed of the question)
- Look at the toner level, and replace the cartridge if low. (right)
- Reinstall the driver on Keira’s computer and test the page again. — if chosen: The pale page came from the printer’s own screen, so Keira’s driver is not involved.
- Restart the print spooler on Keira’s computer. — if chosen: The spooler holds jobs. The pale test page never went through it.
- Take out the charging wire and the fuser and clean them. — if chosen: Nothing shows those parts are dirty. The screen shows the toner level in a minute, so the other parts wait.

After the answer: Reason: Fading on the test page made inside the printer is the printer’s own side. Checking the toner level costs a minute and changes nothing; the driver and the queue are cleared by the test page.

#### Item 7

Lazar in Planning calls the help desk. You answer.

**Lazar calls about the printer. What do you say?**
- An incoming call from "Lazar, Planning" (Incoming call · 11:15 AM). The turns arrive one after another; the learner picks a reply each time and the next turn follows the reply. Pick what you say. The call goes on from there. Nothing is marked until it ends, and a call is not on a clock.
- turn 1, the other side says: "The printer is broken. I print and nothing happens. Please send somebody to swap it." [pushes: She wants the printer replaced before anything has been tested.]
  - reply "I will send someone to swap the printer today.": the call ends (not this one): A swap costs a day, and nothing showed the printer was the cause. A test page from its own screen would have shown whether it was. [slip: worked on whatever was nearest instead of testing to split the causes]
  - reply "Before anyone is sent, let us try one thing: a test page from the printer’s own screen. It takes a minute.": goes on to turn 2, where the pressure comes back
  - reply "Let me reinstall the printer on your computer from here.": the call ends (not this one): That is a fix on the nearest cause. If it fails, you still do not know which side to look on. [slip: worked on whatever was nearest instead of testing to split the causes]
- turn 2, the other side says: "It printed a page that says Test Page, and it looks fine. But I still want a new printer. This is the third time this month!" [pushes: She is frustrated and still wants the swap.]
  - reply "The printer works, so a new one would not fix this. Let me have a colleague print the same job, and then we look at the waiting jobs on your computer. I will note that it keeps happening.": the call ends (right): The test page came from inside the printer, so the printer, its paper and its toner work. The same job from a colleague’s computer is the next cut: it clears this computer or the printer’s network link. Noting the repeats lets someone look for the pattern.
  - reply "Three times is too many. I will order a new printer today.": the call ends (not this one): The printer just printed a clean test page. A new one would cost money and fix nothing, however many times she has called. [slip: gave in to a demand the tests did not support]
  - reply "Then the fault is on your computer, so it is not a printer matter.": the call ends (not this one): It may be, but telling her so and stopping leaves her with nothing. Look at the waiting jobs with her. [slip: blamed or judged the user]
  - reply "Try printing your file again.": the call ends (not this one): The same job gives the same answer and rules nothing out. [slip: ran a test that does not split what works from what does not]
- After it ends: the lines of every turn that pushed are marked and named ("It pushes:"), and the reply where it could have ended the right way is named ("You could have ended it at your first reply: “the reply”." or "You ended it as soon as you could.").

After the answer: Reason: A test page from the printer’s own screen is the cheapest test that splits the printer from everything before it. It printed, so the printer is cleared and the fault is on the way. A caller who is frustrated still gets the tested answer, said kindly.

#### Item 8

A desk keeps a list of printer symptoms and the link of the print path each one sits on.

**Which of these show a fault on the computer’s side of the path (the program, queue or driver) and not in the printer itself? Pick every one that fits.** (choose every one that fits)
(the options come in an order that depends on the seed of the question)
- Rows of strange symbols on the page (right)
- Many jobs waiting and none printing (right)
- Pages from one program come out sideways (right)
- Small dark specks of toner on the page — if chosen: Specks come from loose toner inside the printer.
- Toner that rubs off the page on a finger — if chosen: That is a fuser that is too cool, inside the printer.

After the answer: Reason: Garbled symbols are a driver problem, a waiting queue is the queue, and one program printing sideways is an orientation setting in that program or the driver. Specks and toner that rubs off are made inside the printer.

#### Item 9

A chat, with its history: "Mateo, Finance", Chat with the help desk.

> (Mateo, Finance, at the left) I print payroll on the shared printer in the hall, and the pages sit in the tray until I walk there. Anyone could pick them up.

**Which printer feature fixes this?**
(the options come in an order that depends on the seed of the question)
- Secured print: the job waits in the printer until she signs in there. (right)
- User authentication, so only signed-in people can send jobs to the printer. — if chosen: That limits who can send. Once Mateo’s pages print, they still sit in the tray for anyone.
- The audit log, to record who sends each job. — if chosen: A log records who printed, afterward. The pages still sit in the tray for anyone.
- Duplex printing, to use half as much paper. — if chosen: Duplex prints on both sides of the paper. It does not hold pages back.

After the answer: the deciding words are marked. Reason: The trouble is that finished pages sit in the open. Secured print holds the job inside the printer and releases it when the owner signs in at it, with a PIN or a badge (a card the reader scans).

#### Item 10

A chat, with its history: "Noemi, Print Room", Chat with the help desk.

> (Noemi, Print Room, at the left) The pages look fine, but the black comes off on my fingers and smears when I touch it. The printer’s own test page does the same.

It is a laser printer, far past the maker’s page count for its maintenance kit.

**What fixes it?**
(the options come in an order that depends on the seed of the question)
- Apply the maintenance kit, which includes a new fuser. (right)
- Turn the print quality down to draft in the driver on Noemi’s computer. — if chosen: Draft quality changes how much toner goes on. It does not make the fuser bake it in.
- Reinstall the driver on Noemi’s computer. — if chosen: The test page from the printer’s own screen smears too, so the driver is not involved.
- Replace the toner cartridge and print again. — if chosen: The toner reaches the page; it is the baking that fails.

After the answer: the deciding words are marked. Reason: The smear is on the test page made inside the printer, and the fusing step is the one that bakes the toner in. With the page count far past the maker’s figure, the worn fuser is replaced at once through the kit: here the bigger step is the right one.

#### Item 11

A chat, with its history: "Osric, Planning", Chat with the help desk.

> (Osric, Planning, at the left) Nothing came out of the printer on four when I printed. I printed a test page from its own screen: it came out, but with a dark line down the middle. Windows shows my jobs stuck, the first marked Error.

It is a laser printer.

**What is going on?**
(the options come in an order that depends on the seed of the question)
- Two faults: a stuck queue, and a marked drum or dirty charging wire. Fix and test one at a time. (right)
- Only the printer: the line on the page is why the jobs stuck. — if chosen: A line on a page does not hold jobs back. The Error job in the queue is its own fault.
- Only the queue: the line on the test page can wait. — if chosen: The line is real and will be on every page once the queue is cleared.
- Both: clear the queue and replace the drum, then print once. — if chosen: Two changes at once leave you not knowing which one fixed the printing.

After the answer: the deciding words are marked. Reason: The tests assume one fault at a time, so two faults showing means treat them as two. The stuck job in the queue stops the printing; the line is a fault inside the printer that shows as soon as pages print. Fix one, check it, then the other.

Then a screen: you can stop here, your place is kept.

## Step 11: Questions

7 questions, shuffle, with about 30% from earlier lessons mixed in, unlabeled. A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 12

A chat, with its history: "Phoebe, Facilities", Chat with the help desk.

> (Phoebe, Facilities, at the left) The wireless printer on two says Offline since Monday morning. Nobody on the floor can print. IT changed the office Wi-Fi password on Sunday night.

A plain table, "What you tried":

> Test  |  Result  (the column heads)
> A test page from the printer’s own screen  |  Prints fine
> Three computers on two print to it  |  None can

**Where does the fault sit?**
(the options come in an order that depends on the seed of the question)
- The printer’s own wireless link, still on the old password. (right)
- The toner and drum loaded in the printer. — if chosen: The test page printed, so the toner works.
- The driver installed on each of the three computers that cannot print. — if chosen: Three drivers do not fail at once on the day the password changes. The shared link does.
- Each computer’s own cable or port to the network. — if chosen: Three separate links do not break together on the day the password changes.

After the answer: the deciding words are marked. Reason: What changed was the Wi-Fi password. The printer prints and every computer fails, so the fault is the link they share: the printer’s own wireless link, which still holds the old password.

#### Item 13

A chat, with its history: "Rafael, Sales", Chat with the help desk.

> (Rafael, Sales, at the left) Nothing comes out when I print from my spreadsheet program.

A plain table, "What you tried":

> Test  |  Result  (the column heads)
> A test page from the printer’s own screen  |  Prints fine

**Which test comes next?**
(the options come in an order that depends on the seed of the question)
- A test page from Windows, in the printer’s properties. (right)
- Print the same spreadsheet again with fewer pages. — if chosen: It uses the same program, queue, driver and connection, so it rules nothing out.
- Replace the toner cartridge and print again. — if chosen: The printer’s own test page just printed fine, so the toner is not the cause.
- Reinstall the spreadsheet program on the computer and print again. — if chosen: That is a fix on the nearest cause. If it fails, nothing is ruled out.

After the answer: the deciding words are marked. Reason: The first test cleared the printer. A test page from Windows travels through the queue, the driver and the connection but skips the program, so it splits the program from everything else on the way.

#### Item 14

A chat, with its history: "Sabine, Operations", Chat with the help desk.

> (Sabine, Operations, at the left) The printer pulls two or three sheets through at once, and then it says Paper jam. It is two months old. I just opened a ream that sat in the damp storeroom.

**Which first fix fits?**
(the options come in an order that depends on the seed of the question)
- Fan the stack so the sheets part, and load dry paper. (right)
- Apply the maintenance kit and new feed rollers. — if chosen: The kit replaces worn parts. A printer this new has none, and the paper is the likelier cause.
- Install a new driver for this printer model. — if chosen: A driver does not change how paper is picked up.
- Restart the print spooler and send the job again. — if chosen: The spooler holds jobs. This fault is paper being pulled through.

After the answer: the deciding words are marked. Reason: Several sheets at once is a multipage misfeed, and it sits on the paper path. On a new printer with damp paper, the paper is the cheap first fix.

#### Item 15

A chat, with its history: "Teodor, Mailroom", Chat with the help desk.

> (Teodor, Mailroom, at the left) The mailroom printer often pulls two sheets together, or none at all. I fanned the paper and loaded a fresh ream. No change.

It is a laser printer, far past the maker’s page count for its maintenance kit.

**What now?**
(the options come in an order that depends on the seed of the question)
- Apply the maintenance kit, which has new feed rollers. (right)
- Fan the stack again and reload it. — if chosen: Fanning and a fresh ream have been tried and did not help.
- Try a different brand of paper for a week. — if chosen: A fresh ream already answered the paper question, and a week is a slow test.
- Install a new driver for this printer model. — if chosen: A driver does not change how paper is picked up.

After the answer: the deciding words are marked. Reason: Fanning and fresh paper have been tried, and the page count is far past the maker’s figure. The feed rollers are worn, and the maintenance kit replaces them. Here replacing is right, because the cheaper steps are done.

#### Item 16

A chat, with its history: "Valdis, Shipping", Chat with the help desk.

> (Valdis, Shipping, at the left) I canceled a stuck print job an hour ago and it still sits in the list as Deleting. Nothing else prints either.

**What do you do?**
(the options come in an order that depends on the seed of the question)
- Restart the print spooler and print a page. (right)
- Replace the toner cartridge and print again. — if chosen: Nothing has reached the printer, so its toner is not in question.
- Change the paper size in the print window. — if chosen: Paper size does not unfreeze a queue.
- Order a new printer for the shipping desk. — if chosen: The jobs never left the computer, so nothing shows the printer is at fault.

After the answer: the deciding words are marked. Reason: A job that will not delete, with everything behind it stuck, is a frozen queue. Restarting the print spooler frees it; then print one page to check.

#### Item 17

An inkjet printer prints white streaks across the text. The ink levels on its screen show full.

**What is the care?**
(the options come in an order that depends on the seed of the question)
- Run the printer’s printhead cleaning. (right)
- Apply the maintenance kit from the maker. — if chosen: That is the kit of worn parts for laser printers.
- Replace the cartridges with new ones. — if chosen: The ink levels are full. The ink is not the problem.
- Calibrate the printer from its settings menu. — if chosen: Calibrating lines up the heads and colors. It does not clear a blocked nozzle.

After the answer: Reason: White streaks with full ink come from clogged nozzles on the printhead. The care for an inkjet is cleaning the printhead; replacing cartridges is for when the ink runs out.

#### Item 18

A chat, with its history: "Adela, Legal", Chat with the help desk.

> (Adela, Legal, at the left) The big copier prints my reports fine, but every time I ask for stapled sets it stops with a staple jam.

A plain table, "What you tried":

> Test  |  Result  (the column heads)
> A test page from the printer’s own screen  |  Prints fine
> The same report, stapling turned off  |  Prints fine

**Where does the fault sit?**
(the options come in an order that depends on the seed of the question)
- The finisher: clear the jammed staple and check the staple cartridge. (right)
- The fuser, which is too cool for the paper. — if chosen: A cool fuser makes toner rub off. It does not jam staples.
- The driver, which sends the job in the wrong language. — if chosen: Reports print fine without stapling, so the language is understood.
- The print queue, with a stuck job at the front. — if chosen: Jobs leave the queue and print. Only the stapled ones stop.

After the answer: the deciding words are marked. Reason: Everything works until the staple is asked for, so the fault is the finisher, the add-on that staples or punches. Clear the jam and look at the staple cartridge.

Then a screen: you can stop here, your place is kept.

## Step 12: Questions

10 questions, shuffle. A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 19

The office of twelve people has a new laser printer. Everyone must be able to print to it, and nobody should need Clara’s computer to be switched on.

**How should it be connected?**
(the options come in an order that depends on the seed of the question)
- On the network, so no one’s computer has to be on. (right)
- By a USB cable to Clara’s computer, and shared from there. — if chosen: It prints only while Clara’s computer is on.
- By a USB cable to each person’s computer in turn. — if chosen: A USB cable reaches one computer at a time.
- Everyone emails the files to Clara to print. — if chosen: That does not give the office a printer.

After the answer: Reason: The need is a printer everyone reaches without one person’s computer being on. A network connection meets it, with a print server or direct to the printer’s address; USB reaches one computer.

#### Item 20

After a weekend power cut, the printer says Offline on every computer. Someone fixes it by typing in the number now on the printer’s screen, which differs from last week’s. This has happened four times.

**What is the lasting fix?**
(the options come in an order that depends on the seed of the question)
- Give the printer a fixed IP address, or have the network reserve one. (right)
- Reinstall the driver on every computer. — if chosen: The driver is not what changed. The printer’s number did.
- Swap the printer’s network cable for a new one. — if chosen: The printer answered on its screen. Nothing shows the cable is bad.
- Restart the print spooler on each computer after a power cut. — if chosen: The spooler is fine. Restarting it hides nothing and fixes nothing here.

After the answer: Reason: A network printer that gets a new number after each power cut leaves every computer sending to the old one. Giving it a fixed IP address, or reserving one for it, removes the cause rather than correcting the symptom each time.

#### Item 21

A new office laser printer arrives in its box. It is heavy and gives off heat. The office has a spare table by the network socket, a shelf above a desk, and a cupboard.

**Where should it go, and what comes first?**
(the options come in an order that depends on the seed of the question)
- On the sturdy table by the socket, with room around it, after taking off all packing tape. (right)
- In the cupboard with the door shut, to keep it quiet. — if chosen: A printer needs air around it, and the paper trays need room.
- On the shelf above the desk, tape left on until it jams. — if chosen: The shelf is not stable for something heavy, and the tape has to come off.
- On the floor behind the door, out of the way. — if chosen: The floor puts it out of reach and gets paper dust and knocks.

After the answer: Reason: A new printer goes on a stable surface near a socket and the network, with room for paper and airflow. Packing tape comes off before it is switched on.

#### Item 22

A chat, with its history: "Ayo, Operations", Chat with the help desk.

> (Ayo, Operations, at the left) The new printer prints fine, but the scan-to-folder button gives an error. The maker’s support page says a firmware update fixes it.

**What do you update?**
(the options come in an order that depends on the seed of the question)
- The printer’s firmware, from the maker’s page. (right)
- The driver on each computer. — if chosen: A driver is for printing from a computer. The scan button runs on the printer.
- Windows on every computer. — if chosen: Nothing points to Windows; the fault is in the printer’s scan feature.
- The cartridge, with a new one. — if chosen: A cartridge does not run the scan feature.

After the answer: Reason: The scan feature runs on the printer, so the fix is the printer’s own software, its firmware, from the maker.

#### Item 23

Accounts wants every report to print on both sides of the paper by default.

**Which setting puts a report on both sides of the sheet?**
(the options come in an order that depends on the seed of the question)
- Duplex. (right)
- Orientation. — if chosen: Orientation turns the page upright or sideways.
- Tray. — if chosen: The tray picks which paper to use.
- Quality. — if chosen: Quality decides how dark and fine the print is.

After the answer: Reason: Duplex prints both sides. The defaults are chosen once on the printer so every job starts with them.

#### Item 24

Accounts wants proofs to use less toner.

**Which setting makes a proof use less toner?**
(the options come in an order that depends on the seed of the question)
- Draft quality. (right)
- Duplex. — if chosen: Duplex saves paper, not toner.
- Tray. — if chosen: The tray picks which paper to use.
- Orientation. — if chosen: Orientation turns the page.

After the answer: Reason: Draft quality lays down less toner. The defaults are chosen once on the printer so every job starts with them.

#### Item 25

Reception wants to scan paper contracts and have them land in a shared folder on the office file server, with no email involved.

**Which network scan destination fits?**
(the options come in an order that depends on the seed of the question)
- Scan to a shared folder, over SMB. (right)
- Scan to email, to each person’s inbox. — if chosen: That sends a message. They want a file in a folder.
- Scan to a cloud account on the internet. — if chosen: That puts the file outside the office file server.
- Scan to a USB stick in the printer. — if chosen: That puts the file on a stick, not on the file server.

After the answer: Reason: Scanning into a shared folder on the file server is the SMB destination.

#### Item 26

One contract is a single 100-year-old page, torn at the edge, to be scanned.

**Which part of the scanner takes it?**
(the options come in an order that depends on the seed of the question)
- The flatbed glass, laid flat. (right)
- The automatic document feeder. — if chosen: The feeder pulls pages through rollers and would tear it.
- The feeder with the two-sided scan turned on. — if chosen: Two-sided scanning still pulls the page through rollers.
- Either one, since they work the same way. — if chosen: They do not: one pulls paper through, the other holds it still.

After the answer: Reason: A fragile single page goes on the flatbed glass, which holds it still; the automatic document feeder pulls pages through rollers.

#### Item 27

A technician has swapped the toner cartridge and holds the empty one. The bin by the printer is the ordinary rubbish.

**Where does she find how to dispose of the used toner?**
(the options come in an order that depends on the seed of the question)
- In its safety data sheet (called MSDS on the exam). (right)
- In the printer’s audit log. — if chosen: The audit log records who printed what, not how to dispose of toner.
- In the driver’s settings on the computer. — if chosen: The driver turns jobs into the printer’s language. It holds nothing about disposal.
- Nowhere: it goes in the ordinary rubbish. — if chosen: Used toner is not household waste.

After the answer: Reason: The safety data sheet for the toner says how to dispose of it. The ordinary rubbish is not the answer.

#### Item 28

A law firm wants staff to sign in at the printer by tapping their ID card, with no password to type.

**Which security setting is that?**
(the options come in an order that depends on the seed of the question)
- Badging, signing in by scanning a card. (right)
- Secured print, holding the job until a PIN. — if chosen: That holds a job until its owner signs in; it is about when pages come out, not how people sign in.
- The audit log, listing who printed. — if chosen: A log records afterward. It does not sign anyone in.
- Duplex, to print on both sides. — if chosen: Duplex is a print default, not a sign-in.

After the answer: Reason: Signing in at the printer by scanning a card is badging. Secured print is the hold on a job, and the audit log is the record kept afterward.

Then a screen: you can stop here, your place is kept.

## The check

6 new questions, no help. No answer is shown until the end. The questions come in mixed order.

To pass:
- At least 5 right

#### Check question 29

A chat, with its history: "Pri, Legal", Chat with the help desk.

> (Pri, Legal, at the left) Pages come out of the printer completely blank. The printer’s own test page is blank too.

It is a laser printer, and the cartridge was changed this morning.

**Where does the fault sit?**
(the options come in an order that depends on the seed of the question)
- Developing: the cartridge is empty, or its sealing tape is still on. (right)
- Fusing: the fuser is too cool to bake the toner in. — if chosen: A cool fuser leaves toner on the page that rubs off. A blank page has none.
- The driver that the computer uses to print. — if chosen: The printer’s own test page skips the driver, and it is blank.
- The print queue holding the waiting jobs. — if chosen: The printer’s own test page skips the queue.

After the answer: the deciding words are marked. Reason: The blank test page is made inside the printer, so the program, queue, driver and connection are cleared. In the developing step toner sticks to the drum; with an empty cartridge or the sealing tape still on, none does, and the cartridge is what changed this morning.

#### Check question 30

A chat, with its history: "Dalia, Marketing", Chat with the help desk.

> (Dalia, Marketing, at the left) Reports from our design program come out sideways. Everything I print from other programs is upright.

**Which link holds the fault?**
(the options come in an order that depends on the seed of the question)
- The orientation in that program’s print window. (right)
- The connection from that computer to the printer. — if chosen: Other programs print through the same connection.
- The driver installed for the whole printer. — if chosen: Other programs print upright through the same driver.
- The toner level in the printer’s cartridge. — if chosen: Toner does not change which way a page is turned.

After the answer: the deciding words are marked. Reason: Only one program prints sideways, so the printer, the driver and the connection are cleared. Orientation (portrait or landscape) is chosen in the program’s print window or its page setup.

#### Check question 31

A chat, with its history: "Ennis, Warehouse", Chat with the help desk.

> (Ennis, Warehouse, at the left) The printer makes a loud grinding noise when it pulls the paper in, and then it stops. Nothing comes out.

**What do you do first?**
(the options come in an order that depends on the seed of the question)
- Switch it off, then look for caught paper. (right)
- Keep printing for a while to see if it stops. — if chosen: Running it on can strip a gear or tear the paper into the rollers.
- Reinstall the driver and print a test page. — if chosen: A driver does not make a noise inside the printer.
- Replace the toner cartridge and try again. — if chosen: Toner does not drive the rollers.

After the answer: the deciding words are marked. Reason: A grinding noise as paper is pulled in sits on the paper path inside the printer. Stop the machine and look for a jam before anything else; worn gears or rollers come after.

#### Check question 32

A chat, with its history: "Farah, Billing", Chat with the help desk.

> (Farah, Billing, at the left) A faint copy of the text sits just below the real text on every page. It does this on the printer’s own test page too.

It is a laser printer.

**Where does the fault sit?**
(the options come in an order that depends on the seed of the question)
- Cleaning or fusing: leftover toner stays on the drum, or the fuser is worn. (right)
- Developing: the cartridge is nearly out of toner. — if chosen: Low toner makes pages faint. It does not copy the last page onto this one.
- The driver that the computer uses to print. — if chosen: The printer’s own test page skips the driver, and has the echo.
- The print queue of jobs waiting to print. — if chosen: The printer’s own test page skips the queue.

After the answer: the deciding words are marked. Reason: The echo is on the page made inside the printer, so the fault is in the printer. A double or echo image on a laser printer comes from the cleaning step not wiping the drum, or a worn fuser; the table of the seven steps lists echo images under both. The fuser is in the maintenance kit; the drum is replaced separately.

#### Check question 33

The shop’s receipt printer prints pale stripes. It has no ink and no toner. It uses a roll of special paper.

**What is the care?**
(the options come in an order that depends on the seed of the question)
- Clean the heating element and any debris. (right)
- Replace the ink cartridge and clean the head. — if chosen: A thermal printer uses no ink.
- Replace the ribbon and check the printhead. — if chosen: That is an impact printer’s care.
- Apply the maintenance kit and calibrate it. — if chosen: That is the kit of worn parts for laser printers.

After the answer: Reason: No ink and no toner, and special paper: this is a thermal printer. Its care is a clean heating element, free of debris, and the right paper.

#### Check question 34

A chat, with its history: "Hollis, Finance manager", Chat with the help desk.

> (Hollis, Finance manager, at the left) Who printed 400 pages of the staff salary list last Friday afternoon? The desk lead has approved this lookup.

**Which printer feature answers this?**
(the options come in an order that depends on the seed of the question)
- The audit log kept by the printer. (right)
- Secured print, with a PIN at the printer. — if chosen: It holds a job until its owner signs in. It does not by itself tell you afterward who printed.
- Duplex printing, on both sides of the paper. — if chosen: Duplex prints on both sides of the paper.
- The printer’s page counter. — if chosen: It counts total pages. It does not record who printed them.

After the answer: the deciding words are marked. Reason: The question is about what already happened. Audit logs record who printed what, and when; secured print and sign-in at the printer limit what happens next.

## The result

For example "6 of 6: passed" or "4 of 6: not yet", each rule above shown as met or not met, then every answer with its feedback, the missed ones first.
