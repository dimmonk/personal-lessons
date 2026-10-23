# IT Help Desk: Windows problems

Revision 2, draft (the screen carries the draft line). Part: Windows problems. Where the subject ends up: Take a ticket you have never seen (a user's email, chat or call about a computer, phone, printer, network, account or security problem) and work it the way a help desk technician does: sort it and set its priority, get the user's story and what changed, try the known fix with a limit, then narrow it down with the cheapest test that splits what works from what does not, fix one thing at a time, confirm with the user and write it up, or hand it on with everything you found; and know every fact and scenario on both CompTIA A+ exams well enough to pass them.

## The why

Dara says their computer blue-screens and restarts, and they are sure the memory is going. But the blue screen names what failed, and the log shows what was installed the evening before.
Windows fails on the way up or after sign-in. Here you place each sign, then work it with what changed, a cut in half, and the tool that shows it.

## Step 1: Two places a Windows fault can sit

On the way up, a computer climbs six links: power, start-up self-test, firmware, boot drive, Windows loading, sign-in and profile. Where it stops names the link.
After sign-in it is the running system: drivers (small programs that let Windows use a part), services (background programs with no window, such as the one that keeps the clock right), memory (RAM, the working space all open programs share), and the user’s programs.
A blue screen (BSOD) can come in either place. Its stop code names what failed.

A plain table, "Where each sign sits":

> What you see  |  Where  |  What it points at  (the column heads)
> Blue screen with a stop code  |  Link 5, or the running system  |  A driver, a file, memory or the drive; the code names it
> Restarts at the logo, or loops through the dots  |  Links 3 to 5  |  Damaged start-up files, a bad update or driver
> “No operating system found”  |  Link 3 or 4  |  Firmware screen decides: drive not listed, the drive or cable; listed, the boot order or damaged start-up files
> Sign-in takes minutes for one person  |  Link 6, the profile  |  Their profile: damaged, or so large that what changed copies over the network at every sign-in
> Slow all day (degraded performance)  |  The running system  |  What is using the processor, memory or drive; Task Manager shows it
> Shuts off by itself, repeatedly  |  Power, heat, or Windows crashing  |  No blue screen and a hot computer: heat or power
> A service will not start  |  The running system  |  Its startup type, a service it depends on, or its account
> A program keeps crashing  |  The running system  |  One: that program. Several: Windows files, memory or the drive
> “Low on memory” warning  |  The running system  |  Too much open, a growing program, or too little RAM
> A yellow triangle on a USB controller; “not enough USB controller resources”  |  The running system  |  Too many devices on one controller (a limited number, fewer behind a hub), or its driver
> Random freezes and odd errors (system instability)  |  The running system  |  Something added or changed, a damaged Windows file, or failing memory or drive
> The clock is wrong (time drift)  |  Link 3, or the running system  |  Reset to an odd date such as January 1: the motherboard battery. One hour off (daylight setting) or wrong zone: Date and time settings. Drifting while running: the time service

## Step 2: What changed, and the ways back

A fault usually follows something that began that day: a driver, update, program or new part. The user may not know it; the log often does.
Windows keeps ways back, smallest first. Startup Repair comes first when Windows will not start; when it starts, a driver, update or program comes out first. Before anything that rewrites system files, copy out the user’s files if not saved elsewhere. With two changes, undo the newer first and test. Safe mode is not a way back but a place to undo from.

A plain table, "The ways back, smallest first":

> Way back  |  What it undoes  |  What it leaves alone  (the column heads)
> Startup Repair, in the Windows Recovery Environment (WinRE)  |  Damaged or missing start-up files  |  The rest of Windows. WinRE is a repair mode that opens after failed starts or from a USB install drive; it holds System Restore, safe mode and a command prompt that can copy files off
> Roll back a driver (Device Manager, Driver tab)  |  The newest version of one driver  |  Everything else. The button is grayed out when no older version is kept
> Uninstall an update (Update history)  |  One Windows update  |  Everything else
> Uninstall a program  |  That program  |  Everything else, but its drivers and services may stay
> System Restore  |  Drivers, programs and settings changed since a restore point  |  The user’s documents; it removes programs installed after that point
> Reset this PC, or a repair installation (Setup run from a Windows that starts)  |  Reset: programs and settings, and files if you choose. Repair installation: damaged system files only  |  Repair installation keeps files and apps. Copy files off before either
> Clean install of Windows  |  Everything on the system  |  Nothing, unless files were copied first. The last step

## Step 3: Cutting a Windows fault in half

A plain table, "The cuts, and what each one splits":

> The cut  |  It splits  |  If the fault goes away  (the column heads)
> Safe mode  |  Windows and hardware, from the drivers and services Windows adds  |  The fault is in a driver, service or startup program. Bad memory can still fail in safe mode, so a clean hour is only some evidence
> Clean boot (msconfig for services, Task Manager for startup programs): only Microsoft services, no startup programs  |  Windows, from third-party services and startup programs  |  One of them is the cause. Turn half back on and keep halving
> A new test profile (a second user on the same computer)  |  The profile, from the computer  |  The old profile. If it stays: the computer or network
> One program or all programs?  |  That program, from Windows  |  One program: update or repair it. All: Windows, memory or the drive
> One user or all users? One computer or many?  |  The user, the computer or the company  |  Many computers: something shared

This assumes one fault at a time. Never request the user’s password to test a profile; use a test account the desk creates.

## Step 4: The tool that shows it

Each tool answers a different question; the cheap read comes before any change.

A plain table, "Which tool for which question":

> The question  |  The tool  (the column heads)
> What went wrong, when, and what was installed?  |  Event Viewer: its System and Application logs, with times
> What is using the processor, memory or drive now? What starts at sign-in?  |  Task Manager: Processes, Performance and Startup
> Which device has a warning, and which driver?  |  Device Manager: a yellow triangle, and the Driver tab
> Is this service running, how does it start, what does it need first?  |  The Services console (services.msc): status, startup type, Dependencies tab
> Safe mode, or only Microsoft’s services?  |  msconfig (System Configuration): safe boot and which services load. Startup programs go off in Task Manager
> Are Windows’s own files damaged?  |  sfc /scannow, in a command prompt opened as administrator

## Step 5: Blue screens and slowness mean reinstall

A wrong idea, marked wrong: “It blue-screens and is slow, so I will back up the files and reinstall Windows, and if that fails, order a new computer.”
The right line: A reinstall costs a day and every program, and hides the cause: if a bad driver did it, the fault comes back. The stop code, the log and the cuts take minutes and change nothing. The ways back come first, smallest first.

## Step 6: A worked example

A chat, with its history: "Dara, Design", Chat with the help desk.

> (Dara, Design, at the left) My computer shows a blue screen and restarts. It has done it three times today, since Tuesday morning. I think the memory is going, because my last computer did exactly this. I have not installed anything.

A plain table, "The blue screen, and the System log in Event Viewer":

> Where  |  What it says  (the column heads)
> Blue screen  |  Stop code: VIDEO_TDR_FAILURE. What failed: a display (graphics) driver file
> Event Viewer, System, Monday 5:10 PM  |  Information: a driver package for the display adapter was installed
> Event Viewer, System, Tuesday 9:41 AM  |  Critical: the system restarted without shutting down cleanly

Before the working, the learner may commit to a choice (not scored, not stored):
**What does the blue screen say about Dara’s memory guess?**
(the options come in an order that depends on the seed of the question)
- It names a display driver, not memory, so memory has no evidence behind it yet
- It confirms memory, so the memory sticks are replaced first
- It says nothing useful about memory, so the memory sticks should be tested before anything else
- It points at the hard drive, where the files Windows needs are kept

The working, one step at a time:
1. Place the fault: loading or running?: It happens three times a day, mid-work, after sign-in. That is the running system, not the boot chain. The cheapest read is on the screen already.
1. Name Dara’s favorite, and read the stop code before testing it.: Their guess is memory. The stop code names a display driver. Memory is not ruled out for good, but nothing points at it.
1. What changed? Dara says nothing, so let the computer’s log say.: Event Viewer, System log: on Monday at 5:10 PM a driver package for the display adapter was installed. A vendor updater did it by itself. The blue screens began the next morning.
1. Cut in half: start in safe mode, which loads only basic drivers.: In safe mode the computer runs an hour with no crash. Windows and the hardware are fine, and the fault is in a driver that normal start-up loads. A clean hour in safe mode is only some evidence against memory, which can still fail there, but the stop code and the log agree.
1. One change: in Device Manager, roll back the display driver, and nothing else. Restart normally.: The Driver tab offers Roll Back Driver. After it, no blue screen all afternoon. Had it failed, the next move was System Restore to a point before Monday.
1. Confirm with Dara after a full day, and write it up.: Dara confirms on Wednesday evening. The note: blue screen, stop code, new display driver Monday, safe mode fine, rolled back, fixed. Pause that driver’s automatic updates, and tell the desk, since others may have the same update.

Then the answer: It names a display driver, not memory, so memory has no evidence behind it yet. The favorite was memory. The stop code named a driver, the log showed one installed the evening before, and safe mode split Windows from it. One roll back fixed it. Ordering memory or reinstalling Windows would have cost a day and left the driver in place.

## Step 7: Questions

4 questions, listed, with help (shown). A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 1

A chat, with its history: "Pia, Finance", Chat with the help desk.

> (Pia, Finance, at the left) **My laptop shows the Windows dots, then a blue screen, then restarts, again and again. It started right after the graphics update ran last night. I cannot reach my desktop. My files are all on the company drive.**

A plain table, "The blue screen":

> Line  |  What it says  (the column heads)
> Stop code  |  DRIVER_IRQL_NOT_LESS_OR_EQUAL
> What failed  |  A display driver file  <- marked after the answer

Help on screen: the words that decide it are marked.

**What is the first move?**
(the options come in an order that depends on the seed of the question)
- Open WinRE, start in safe mode, and roll back the display driver (right)
- Reinstall Windows from a USB stick — if chosen: Nothing shows Windows itself is damaged. The code names one driver, and the ways back cost far less than a reinstall.
- Take out the memory sticks and put them back, then start the laptop — if chosen: The stop code names a display driver. Reseating memory touches a part that nothing points at.
- Restart the laptop a few more times to see whether it gets through — if chosen: It has failed the same way every time. Another try gives the same blue screen and tests nothing.

After the answer: the deciding words are marked. Reason: A blue screen at the Windows dots is link 5. The stop code names a display driver and the change came the night before, so the way back is safe mode and a roll back, one change. The files are on the company drive, so nothing needs protecting first.

#### Item 2

A chat, with its history: "Edwin, Warehouse", Chat with the help desk.

> (Edwin, Warehouse, at the left) **The screen says “Operating system not found” right after the logo. Nothing changed except a power cut last night, when the lights went out while I was working. All my files are on the company drive.**

A plain table, "The firmware screen, and the drive check":

> Line  |  Result  (the column heads)
> Drives listed  |  One drive, 500 GB  <- marked after the answer
> Boot order  |  That drive is first  <- marked after the answer
> Drive health check (S.M.A.R.T.)  |  Passed  <- marked after the answer

Help on screen: the words that decide it are marked.

**What is the next step?**
(the options come in an order that depends on the seed of the question)
- Run Startup Repair from WinRE, using the install USB if WinRE will not open (right)
- Order a new drive and leave the laptop with the stores until it arrives — if chosen: The drive is listed and passed its health check. The message is about the start-up files, not the drive.
- Change the boot order and put the network ahead of the drive — if chosen: The boot order is already right, with the drive first. Changing it tests nothing the table has not answered.
- Wipe the drive and install Windows again, so the files are fresh — if chosen: A mended start-up needs a repair, not a wipe. A wipe costs Edwin’s programs and setup to fix something that Startup Repair may fix alone.

After the answer: the deciding words are marked. Reason: No operating system found is the firmware not finding start-up files it can use. The drive is listed, first in the boot order and healthy, and the power cut explains damaged start-up files, so Startup Repair in WinRE is the smallest way back. Edwin’s files are on the company drive, so nothing needs copying first.

#### Item 3

A chat, with its history: "Rob, Shipping", Chat with the help desk.

> (Rob, Shipping, at the left) **I sign in and wait about eight minutes before my desktop appears. Once it shows, everything is quick. A co-worker signed in on this same computer yesterday and got to the desktop in under a minute.**

The chain: power, start-up self-test, firmware, the boot drive, Windows loading, sign-in and profile.

Help on screen: the words that decide it are marked.

**Which link, and which cheap test?**
(the options come in an order that depends on the seed of the question)
- Link 6, the profile: sign in as a new test user and compare the time (right)
- Link 4, the boot drive: run a full health scan on the whole drive today — if chosen: The same computer and drive are fast for the co-worker. The slow part is Rob’s sign-in.
- Link 5, Windows loading: uninstall the latest Windows update — if chosen: Windows loads fast for the co-worker on the same computer. An uninstall changes the whole computer to fix one person’s sign-in.
- Link 3, firmware: reset the firmware settings to their defaults — if chosen: Firmware runs before sign-in and is the same for both users. It cannot explain a slow profile.

After the answer: the deciding words are marked. Reason: One person slow and another quick on the same computer cuts the computer away and leaves the profile, link 6. A new test profile confirms it: quick means Rob’s profile is the cause. Back up Rob’s files before any repair.

#### Item 4

A chat, with its history: "Mary, Bookkeeping", Chat with the help desk.

> (Mary, Bookkeeping, at the left) My accounting program says it cannot connect to the database service. It worked yesterday, and I have not changed anything.

A plain table, "The Services console, and the System log":

> Where  |  What it shows  (the column heads)
> Services console  |  BookDB Service: stopped. Startup type: Automatic  <- marked after the answer
> Event Viewer, System log  |  The BookDB Service depends on the Data Store service, which failed to start  <- marked after the answer

Help on screen: the words that decide it are marked.

**What is the next move?**
(the options come in an order that depends on the seed of the question)
- Look at the Data Store service it depends on, and start that one first (right)
- Start BookDB again and keep restarting it until it stays running all day — if chosen: It cannot stay running while the service it needs is stopped. The log has already said why.
- Change BookDB’s startup type to Disabled and restart the computer — if chosen: Disabled stops it from ever starting, which is the opposite of what Mary needs.
- Reinstall the accounting program and its database from the company installer — if chosen: The program is not damaged. The log names a stopped service, which costs nothing to look at.

After the answer: the deciding words are marked. Reason: A service that will not start is read in the Services console and the System log. The log names the cause: a service it depends on. The Dependencies tab shows the same chain, and starting the first service in it is one change.

Then a screen: you can stop here, your place is kept.

## Step 8: Questions

12 questions, shuffle. A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 5

A chat, with its history: "Lydia, Sales", Chat with the help desk.

> (Lydia, Sales, at the left) My computer crawls every Monday morning between 9 and 11, and then it is fine. I think it needs more memory or a new drive.

A plain table, "Task Manager, Monday 9:30 AM":

> Reading  |  Value  (the column heads)
> Processor  |  12%
> Memory  |  41% used
> Disk  |  100% busy
> Top disk user  |  Antivirus full scan (the desk’s schedule: Mondays at 9)

**What is the finding?**
(the options come in an order that depends on the seed of the question)
- The scheduled full scan keeps the disk busy until it ends; move it after hours (right)
- Memory is the limit, so order more RAM to fit the workload — if chosen: Memory is at 41%, with plenty free. More RAM would change nothing the table shows.
- The drive is failing, so back it up and swap it for a new one before the next scan — if chosen: A failing drive would be slow all day, not only while the scan runs. The scan explains the hours.
- Windows is damaged, so run sfc /scannow every morning from now on — if chosen: sfc checks Windows’s own files. Nothing in the table shows damage, and the scan accounts for the slowness.

After the answer: the deciding words are marked. Reason: Degraded performance is read in Task Manager before any change. Disk at 100% with the antivirus scan on top, in the same hours as the slowness, is the cause. Moving the scan is one change to the desk’s schedule, not a repair.

#### Item 6

A chat, with its history: "Patricia, Marketing", Chat with the help desk.

> (Patricia, Marketing, at the left) A box says Windows is low on memory and I should close programs. It happens most afternoons. The computer has 16 GB.

A plain table, "Task Manager, Processes sorted by memory":

> Program  |  Memory at 9 AM  |  Memory at 3 PM  (the column heads)
> Layout Studio  |  2 GB  |  9.8 GB
> Browser, 12 tabs  |  2.9 GB  |  3.1 GB
> Windows and the rest  |  3 GB  |  3 GB

**What is the next step?**
(the options come in an order that depends on the seed of the question)
- Update Layout Studio and watch it again: one program keeps growing all day (right)
- Close the browser tabs each afternoon — if chosen: The browser barely grows, from 2.9 to 3.1 GB. Closing tabs frees a small part of the problem.
- Order 32 GB of memory so that the warning stops for good — if chosen: More memory only delays the warning if one program keeps growing. The table points at the program first.
- Raise the virtual memory (drive space used as extra memory) to its largest size and restart — if chosen: It hides the growth and leaves the program that causes it.

After the answer: the deciding words are marked. Reason: Task Manager shows memory by program and the growth over time. One program climbing all day is a program fault, so it is updated or reinstalled. Adding RAM is for a computer whose normal work needs more than it has.

#### Item 7

A chat, with its history: "Arlo, Engineering", Chat with the help desk.

> (Arlo, Engineering, at the left) My desktop switches itself off about once an hour while I run the big spreadsheets. There is no blue screen, it just goes dark. It is fine when idle. The fan roars before it goes, and boxes are stacked against the case.

A plain table, "Event Viewer, System log":

> Time  |  What it says  (the column heads)
> 10:42 AM  |  Critical: restarted without shutting down cleanly
> 11:44 AM  |  Critical: restarted without shutting down cleanly
> 12:51 PM  |  Critical: restarted without shutting down cleanly
> Bug check (blue screen) entries  |  None

**Where does this point?**
(the options come in an order that depends on the seed of the question)
- Heat: clear the vents, remove the dust, and watch the temperature (right)
- A bad update, so uninstall the newest Windows update and test again — if chosen: No update is mentioned, and a crash from Windows would leave a blue screen entry. Heat explains it.
- The power supply, so order a new one before doing any other check — if chosen: It may be, but heat is the cheaper explanation and blocked vents are shown. Clear it first, and the supply comes next if it still happens.
- Damaged Windows files, so run sfc /scannow and wait for it to finish — if chosen: sfc checks Windows files. A sudden power-off with a roaring fan under load is not what a damaged file looks like.

After the answer: the deciding words are marked. Reason: Many sudden shutdowns with no blue screen, under heavy work, with a roaring fan and blocked vents, point at heat. Event Viewer confirms it is sudden power loss rather than a crash. The cheap fix is airflow; the power supply is the next cut if it continues.

#### Item 8

A chat, with its history: "Sabrina, Accounts", Chat with the help desk.

> (Sabrina, Accounts, at the left) Tally Pro closes by itself when I open an invoice. Other programs are fine. The same happens on my colleague Maxwell’s computer.

A plain table, "Event Viewer, Application log":

> Line  |  What it says  (the column heads)
> Faulting application  |  tallypro.exe, version 4.2.1
> Faulting module  |  report.dll, a file of code the program loads; the same on both computers

**Which move fits?**
(the options come in an order that depends on the seed of the question)
- Update or repair Tally Pro: two computers fail the same way and nothing else does (right)
- Run sfc /scannow and then restart the computer to see what changed — if chosen: Other programs are fine, and Maxwell’s computer fails the same way. Windows files are not the suspect.
- Create a new profile for Sabrina and move Sabrina’s files over to it — if chosen: Maxwell’s computer and profile show the same fault. A profile cannot explain it.
- Restore Sabrina’s computer to last week with System Restore, to be safe, and then try the program again — if chosen: The log names the program’s own file. A restore is a big step that Maxwell’s computer would not share.

After the answer: the deciding words are marked. Reason: Applications crashing is cut by one program or all, and one user or all. One program on two computers is the program: the log names its own module. Update or repair it, and tell the desk, since others may have it.

#### Item 9

A chat, with its history: "Katarina, Records", Chat with the help desk.

> (Katarina, Records, at the left) My scanner stopped working this morning. I plugged a webcam, a card reader and a label printer into the same hub last week.

A plain table, "Device Manager":

> Line  |  What it shows  (the column heads)
> USB controller  |  Yellow triangle: not enough USB controller resources
> Devices on the hub  |  Scanner, webcam, card reader, label printer, mouse

**What is the cheapest cut?**
(the options come in an order that depends on the seed of the question)
- Unplug all the hub devices, then plug them in one at a time, testing after each (right)
- Reinstall Windows and add every device again from the start — if chosen: A resource warning on one controller is not damage to Windows. Unplugging devices is free.
- Update every driver on the computer and replace the hub in the same visit on Friday — if chosen: Two changes at once, so nothing would show which one mattered.
- Order a new motherboard — if chosen: The warning is about too many devices on a controller, not a dead part. The cheap test comes first.

After the answer: the deciding words are marked. Reason: A USB controller resource warning in Device Manager means the controller cannot serve what is plugged in. Unplug everything and add back one at a time: that is the cut. A powered hub or a driver update are the next steps if one device still fails.

#### Item 10

A chat, with its history: "Eugene, Legal", Chat with the help desk.

> (Eugene, Legal, at the left) My clock is exactly one hour behind since Sunday. It stays exactly one hour behind all day. It is 3 PM now and it shows 2 PM. Date and minutes are right, and it was fine last week.

This computer is not on the company domain. It was off the whole weekend; the firmware battery is a month old and fine.

**What do you check first?**
(the options come in an order that depends on the seed of the question)
- The time zone and daylight setting in Date and time, then press Sync now (right)
- The small battery on the motherboard, by swapping it for a new one — if chosen: A dead battery gives dates like January 1 and a reset after power-off, not exactly one hour. The minutes are right.
- The Windows system files, with sfc /scannow from an administrator prompt — if chosen: A damaged file would not leave the minutes exact and the hour off. A setting is the cheaper explanation.
- The Windows Time service, by changing its startup type to Disabled — if chosen: Disabling the service would stop the clock from being corrected at all. It would not fix an hour.

After the answer: the deciding words are marked. Reason: Time drift has two homes. Wrong after being off and reset to an odd date is the battery on the motherboard (firmware). A clean hour off while running is the time zone or daylight setting, and Sync now contacts the time server.

#### Item 11

A chat, with its history: "Iris, Video", Chat with the help desk.

> (Iris, Video, at the left) Since I installed the editing suite Monday, Windows stutters and two other programs crash. Windows made a restore point just before the install. I have my projects saved to the server.

The suite installed its own drivers and two background services as well. The vendor’s page says its uninstaller leaves the drivers and services behind.

**What is the smallest way back?**
(the options come in an order that depends on the seed of the question)
- Use System Restore to the point before the install, and tell Iris it removes the suite (right)
- Roll back one driver at a time until the stutter stops, then the next — if chosen: The suite installed drivers and services together. Rolling back one driver does not undo the rest.
- Reinstall Windows and then the programs they need, one by one, starting with the suite — if chosen: A restore point made just before the install is the smaller way back. A reinstall costs everything on the computer.
- Tell Iris to uninstall the suite from Apps, restart, and check whether the stutter stops — if chosen: The vendor’s page says the uninstaller leaves the drivers and services, so the stutter would stay.

After the answer: the deciding words are marked. Reason: When one install changed many things and a restore point from just before it exists, System Restore is the smallest way back that undoes them all. It leaves documents alone and removes programs installed after the point, which the user is told first.

#### Item 12

A chat, with its history: "Jan, Planning", Chat with the help desk.

> (Jan, Planning, at the left) My computer freezes about ten minutes after I sign in. It never freezes in safe mode. No blue screen, no error. About twelve things start when I sign in.

Safe mode ran for an hour without a freeze. Windows itself and the hardware looked fine.

**What is the next cut?**
(the options come in an order that depends on the seed of the question)
- Do a clean boot (msconfig for services, Task Manager for startup), then turn half back on (right)
- Turn off all twelve startup programs for good and tell Jan it is fixed — if chosen: Twelve changes at once. Nothing shows which one mattered, and programs they need are lost.
- Run sfc /scannow from an administrator prompt, then restart and wait to see if the freeze comes back — if chosen: Safe mode is fine, which points away from Windows’s own files. sfc does not split the added programs.
- Remove the memory sticks one at a time to find the one that freezes — if chosen: Nothing points at memory: safe mode ran an hour clean and the freeze waits ten minutes after sign-in. Pulling sticks tests a part the ticket gives no sign of.

After the answer: the deciding words are marked. Reason: Fine in safe mode, frozen in normal start: the fault is in a driver, service or startup program that safe mode leaves out. A clean boot removes the added services and startup programs, and turning half back on, restart, keep halving finds the one.

#### Item 13

A chat, with its history: "Nia, HR", Chat with the help desk.

> (Nia, HR, at the left) My laptop restarts at the logo over and over. A blue screen with a repair message came up, and now it says Startup Repair could not repair my PC. My files are only on this laptop.

WinRE opened by itself after failed starts. System Restore points exist from last week.

**What do you do next?**
(the options come in an order that depends on the seed of the question)
- Copy Nia’s files out first (command prompt in WinRE), then try System Restore to last week (right)
- Run Startup Repair a second time, and then try System Restore if that fails again — if chosen: It has just failed. Running the same repair again tests nothing new.
- Choose Reset this PC and keep the files when the reset offers it, then reinstall the programs — if chosen: It would remove programs and may remove files, and their files exist nowhere else. Smaller ways back are left.
- Order a new drive and wait for it before trying anything else — if chosen: Nothing has tested the drive. Failing Startup Repair does not mean a failed drive.

After the answer: the deciding words are marked. Reason: Boot issues are worked in order: copy files if they exist nowhere else, then the smallest way back that is left. Startup Repair failed once, so System Restore from WinRE is next. Reset and reinstall come last.

#### Item 14

A chat, with its history: "Cindy, Procurement", Chat with the help desk.

> (Cindy, Procurement, at the left) Since yesterday the Start menu will not open, Settings crashes, and three different programs close by themselves. Nothing was installed. No blue screen.

A plain table, "Event Viewer, Application log":

> Line  |  What it says  (the column heads)
> Faulting module  |  Different programs, the same Windows system file (a .dll, a shared file of code)
> Count since yesterday  |  31 errors

**Which tool fits?**
(the options come in an order that depends on the seed of the question)
- sfc /scannow in a command prompt opened as administrator (right)
- Device Manager, to roll back the drivers of every device one by one — if chosen: The log names a Windows file, not a driver, and rolling back many drivers is many changes at once.
- Task Manager, to end each program that crashes and open it again — if chosen: The programs close because the shared file is damaged. Restarting them just shows the same fault.
- The Services console, to restart every service marked Automatic — if chosen: No service is named. Restarting them all changes a lot and does not touch the damaged file.

After the answer: the deciding words are marked. Reason: Several programs and parts of Windows failing on the same system file is system instability from a damaged file. sfc /scannow checks the protected files and replaces damaged ones, and it changes nothing else.

#### Item 15

A question the phone reads aloud, never by itself: a button "Hear the question" (then "Hear it again") reads it with a voice on the phone when the learner taps, and once they have tapped the next question in the run is read when they tap Next. A phone with no voice of its own shows the words and says so. Its words: **The repair mode that opens by itself after Windows fails to start a few times, and holds Startup Repair, System Restore and safe mode, has a three-word name, shortened to WinRE.**

**Type the three-word name.**
- One box and "Answer" (shut until something is typed; Enter sends it), and "Not yet", which answers with nothing and shows the answers. "Not sure? Tap Not yet to see the answers." Nothing is marked before the answer.
- What counts as the same: capital letters, punctuation, "a", "an", "the" and "and" do not matter; a number in words is the number ("twenty-seven" is 27); words in brackets are optional; one small misspelling in the whole answer is forgiven (a word that is one letter off, in words of four letters or more); parts of an answer said in any order. A word left out or added, or another word, is a miss.
- After: the mark (Right, Not this one, or "Not yet") with "You said: …", then the accepted answers, every one, the one given marked "You gave this one" (and "Words in brackets are optional." when some words are in brackets). After a miss with something typed: "If what you said means the same, say so. It counts this time, and the question comes back later to be sure." with the button "My answer means the same". It counts right in that sitting (shown as "Counted on your word"), is logged and listed under the result and in the results, and is not a good day for the schedule, so the question comes back.
- The accepted answers shown after (Accepted answers):
  - windows recovery environment

After the answer: Reason: The Windows Recovery Environment (WinRE) is the repair mode. It opens by itself after failed starts, or from install media, and holds Startup Repair, System Restore and the way into safe mode.

#### Item 16

Wes in Operations calls the help desk. You answer.

**Wes calls about a blue screen. What do you say?**
- An incoming call from "Wes, Operations" (Incoming call · 10:05 AM). The turns arrive one after another; the learner picks a reply each time and the next turn follows the reply. Pick what you say. The call goes on from there. Nothing is marked until it ends, and a call is not on a clock.
- turn 1, the other side says: "My computer keeps blue-screening and restarting. It is a mess. Can you just wipe it and put Windows back on?" [pushes: Wes wants a reinstall and has given no details.]
  - reply "What does the blue screen say, and has anything been installed or changed since it began?": goes on to turn 2, where the pressure comes back
  - reply "Which model is the computer? Bring it to the desk and I will wipe it and reinstall Windows today.": the call ends (not this one): Nothing has been tested. A reinstall costs a day and Wes’s programs, and may bring back the same fault. The stop code and what changed come first. [slip: reinstalled or reset Windows before trying the smaller ways back]
  - reply "It sounds like the memory, Wes, and sorry for the trouble. I will order a new stick and fit it tomorrow.": the call ends (not this one): No test points at memory yet. Telling Wes a cause before knowing it sends both of you the wrong way. [slip: told the user a cause before knowing it]
- turn 2, the other side says: "It says something about a stop code. I wrote down the name. And the printer program updated itself on Monday, I think." [pushes: Wes has given a stop code and a change, and still wants it fixed today.]
  - reply "Read me the code. We start in safe mode and undo that update, and I call you at 2 PM to confirm.": the call ends (right): A stop code and a change from Monday point at one thing to undo. Safe mode and a roll back are the small way back, and the call at 2 PM confirms it held.
  - reply "Restart it a few more times, and I call you at 2 PM to see if it came back.": the call ends (not this one): Restarting repeats the same crash and tests nothing; the stop code and the Monday change are not used. [slip: ran a test that does not split what works from what does not]
  - reply "Then the printer program is the cause. I reinstall Windows tonight and call you at 8 AM.": the call ends (not this one): The update is one change, and a roll back undoes it. A reinstall would be the last step, and tonight is a guess. [slip: reinstalled or reset Windows before trying the smaller ways back]
- After it ends: the lines of every turn that pushed are marked and named ("It pushes:"), and the reply where it could have ended the right way is named ("You could have ended it at your first reply: “the reply”." or "You ended it as soon as you could.").

After the answer: Reason: The stop code and what changed come before any big step. Wes gave both, so the next move is the small way back, safe mode and undoing the Monday update. Every answer here gives a time to call; only this one acts on the evidence.

Then a screen: you can stop here, your place is kept.

## Step 9: Questions

3 questions, shuffle, with about 30% from earlier lessons mixed in, unlabeled. A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 17

A chat, with its history: "Lamar, Purchasing", Chat with the help desk.

> (Lamar, Purchasing, at the left) This morning I let Windows install an update, and I also installed a new label printer driver. Now my computer freezes every few minutes. Both changed today: the update ran first, the driver went on last, around noon.

Safe mode ran for an hour without a freeze.

**How do you undo them?**
(the options come in an order that depends on the seed of the question)
- Roll back the printer driver alone and test, and uninstall the update only if freezes remain (right)
- Roll back the printer driver and uninstall the update together, then restart and test both at once — if chosen: With both gone, a fix would not show which one caused it, and a change that was not needed stays out.
- Run sfc /scannow from an administrator prompt, then test again — if chosen: Safe mode is fine, which points away from Windows’s own files, and two recent changes are the better suspects.
- Reinstall Windows, which removes both changes in one step — if chosen: A reinstall removes everything, not just the two changes. Two small undos are left to try.

After the answer: the deciding words are marked. Reason: One change at a time has no exception: you cannot tell which change did it if you undo both, and a change that was not the cause comes out for nothing. Undo one, test, then the other.

#### Item 18

A chat, with its history: "Sadia, Reception", Chat with the help desk.

> (Sadia, Reception, at the left) My computer takes ages to sign in and, when it does, my desktop is empty. My co-worker signed in on the same computer and it was fine. My photos and documents are in my profile and nowhere else.

A new test profile signs in fast and shows an empty desktop. The plan is to move Sadia to a new profile.

**What is the order of the work?**
(the options come in an order that depends on the seed of the question)
- Copy their Documents, Desktop and Pictures folders first, then move them to the new profile (right)
- Delete the old profile folder, then let Windows build a new one for them — if chosen: Their photos and documents are only in that folder. Deleting it first loses them for good.
- Move them to the new profile now and copy the files over later if they request them — if chosen: The old profile stays in place at first, but nothing protects the files, and nobody has told them what happens next.
- Reinstall Windows, which gives a clean profile and clears the slow sign-in — if chosen: The computer is fine for the co-worker. A reinstall fixes nothing that the new profile does not and erases more.

After the answer: the deciding words are marked. Reason: The test profile showed the old profile is the fault. Their files are only there, so they are copied out before the profile is replaced: protect the data, then change one thing.

#### Item 19

A chat, with its history: "Maria, Facilities", Chat with the help desk.

> (Maria, Facilities, at the left) My laptop blue-screened twice this morning. There is a burning smell from the left side, the body is too hot to touch, and the base has started to bulge.

**What do you tell Maria first?**
(the options come in an order that depends on the seed of the question)
- Shut it down, unplug it, take it off their desk and do not power it on again (right)
- Run Event Viewer to read the stop code before the laptop restarts again — if chosen: The stop code is useful, but not before the laptop is safe. Powering it on again adds risk.
- Start it in safe mode to see whether the blue screen comes back — if chosen: Starting it up once more keeps a hot, bulging battery running. The safety stop comes before the cut.
- Let it cool for ten minutes, then plug it in again and watch the temperature — if chosen: A bulge and a burning smell are not a temperature problem that cooling fixes. Plugging it in feeds the battery.

After the answer: the deciding words are marked. Reason: Heat can cause trouble at any link, and a burning smell with a bulge means the computer is not powered on again. Unplug it, move it away, and follow the desk’s rule for a swollen battery. The blue screens wait.

Then a screen: you can stop here, your place is kept.

## The check

6 new questions, no help. No answer is shown until the end. The questions come in mixed order.

To pass:
- At least 5 right

#### Check question 20

A chat, with its history: "Max, Estimating", Chat with the help desk.

> (Max, Estimating, at the left) Since Friday, when I put a second memory stick in, my computer blue-screens at the Windows dots, most mornings. Before that it never did. I want it fixed, but please do not wipe it.

A plain table, "The blue screen":

> Line  |  What it says  (the column heads)
> Stop code  |  MEMORY_MANAGEMENT
> Changed on Friday  |  A second memory stick was added

**What is the smallest test?**
(the options come in an order that depends on the seed of the question)
- Take out the new memory stick alone and see whether the blue screens stop (right)
- Roll back the display driver to the one from before the last update — if chosen: No driver changed on Friday, and the code points toward memory. A roll back tests something nothing points at.
- Run sfc /scannow from a command prompt opened as administrator — if chosen: sfc checks Windows files. The code and the Friday change both point toward memory.
- Reinstall Windows with the new stick in, so everything starts fresh and the blue screens stop — if chosen: Max wanted no wipe, and a reinstall with the same stick in would repeat the fault.

After the answer: the deciding words are marked. Reason: A blue screen that began right after a new part was added is the what-changed move. The stop code points toward memory and the new stick is the only change, so removing it alone is one change that splits the cause. Reseating or swapping it comes after.

#### Check question 21

A chat, with its history: "Pat, Planning", Chat with the help desk.

> (Pat, Planning, at the left) It takes about twelve minutes to sign in, whichever company computer I use. After that all is fine. I have a lot of videos on my desktop.

A plain table, "The desk’s record":

> Line  |  Value  (the column heads)
> Profile type  |  Roaming: changes are copied between the server and the computer at every sign-in
> Profile size  |  14 GB, mostly a Videos folder
> Sign-in time on three other computers  |  About twelve minutes each

**What is the finding and the fix?**
(the options come in an order that depends on the seed of the question)
- The profile is large and is copied at each sign-in; move the videos to a network drive (right)
- This computer’s drive is slow, so replace it and reinstall Windows — if chosen: Three other computers are just as slow. The fault travels with Pat, not with one computer.
- Create a new test profile on this computer and see whether that signs in quickly for Pat — if chosen: A new profile has no videos and would be quick, but it only repeats what the table already says: the fault is in Pat’s profile.
- Roll back the newest Windows update on this computer, then sign in again — if chosen: Other computers are slow too, and an update on one computer cannot explain it. The size of the profile does.

After the answer: the deciding words are marked. Reason: Slow profile load for one person on every computer is the profile, link 6. The record says it is roaming and 14 GB, so it is copied at each sign-in. Moving the big files out of the profile is one change, with Pat’s files copied first.

#### Check question 22

A chat, with its history: "Dot, Archive", Chat with the help desk.

> (Dot, Archive, at the left) Every Monday my desktop says the date is January 1, and I fix it by hand. The rest of the week it is right. It is switched off and unplugged all weekend.

A plain table, "What the desk found":

> Test  |  Result  (the column heads)
> Firmware screen on Monday  |  Date and time missing; settings back to defaults
> Time zone and Sync now in Windows  |  Right all week once corrected
> Age of the computer  |  7 years

**Which link and which fix?**
(the options come in an order that depends on the seed of the question)
- Link 3, firmware: replace the small battery on the motherboard (right)
- Windows time: put the Windows Time service to Automatic and sync daily — if chosen: Windows time is right all week. What fails is the firmware losing its date while the power is off.
- Windows files: run sfc /scannow, if a clock file is damaged — if chosen: The firmware screen already shows the lost date, before Windows loads. Windows files cannot cause that.
- The time zone: change it to match the office and press Sync now each Monday — if chosen: The time zone and Sync now are already known to work. Fixing it by hand each week is what Dot is doing.

After the answer: the deciding words are marked. Reason: Wrong date after being off, with firmware settings back at defaults, is link 3: the small battery on the motherboard. Windows time is fine while it runs, which is the cut that splits the battery from the time service.

#### Check question 23

A chat, with its history: "Fay, Dispatch", Chat with the help desk.

> (Fay, Dispatch, at the left) My laptop clock drifts by a few minutes every week. I put in a new firmware battery last month. I correct it by hand each Friday and it drifts again.

A plain table, "What the desk found":

> Where  |  What it shows  (the column heads)
> Date and time settings  |  Time zone right; the last successful sync was nine weeks ago
> Services console  |  Windows Time: stopped; startup type: Disabled

**What is the fix?**
(the options come in an order that depends on the seed of the question)
- Change the Windows Time startup type to Automatic, start it, and press Sync now (right)
- Replace the firmware battery again and correct the clock once more — if chosen: The battery is a month old, and the clock holds its date while off. The service is what is stopped.
- Keep correcting the clock by hand each Friday, and tell Fay to do the same on the other laptops — if chosen: That is the workaround Fay already uses. It leaves the stopped service where it is.
- Run sfc /scannow and then restart the computer to see what changed — if chosen: The table already names the cause: a disabled service. sfc checks Windows files, which are not shown to be damaged.

After the answer: the deciding words are marked. Reason: Time that drifts while the computer runs is Windows keeping time, not the firmware. The Services console shows the Windows Time service disabled, so the fix is its startup type, a start and a sync.

#### Check question 24

A chat, with its history: "Norman, Estimating", Chat with the help desk.

> (Norman, Estimating, at the left) Three programs close by themselves in the afternoons, and Windows warns that memory is low. My computer has 8 GB. A big new project started last month, so I have more open than before.

A plain table, "Task Manager, Performance and Processes, 3 PM":

> Reading  |  Value  (the column heads)
> Memory in use  |  7.8 of 8 GB
> Browser  |  3 GB, the same all day
> Spreadsheet and Teams  |  2 GB and 1.5 GB, the same all day
> Any program growing through the day  |  None
> Event Viewer, Application log  |  Out of memory, at each crash

**What is the finding?**
(the options come in an order that depends on the seed of the question)
- Normal work now needs more than 8 GB; add memory (right)
- One program leaks, so update the spreadsheet program — if chosen: No program grows through the day, so there is no leak to update away.
- The computer is infected, so scan it before touching anything else — if chosen: Nothing in the table says so, and all the readings are steady. The memory is full from honest work.
- Windows is damaged, so run sfc /scannow and restart the computer — if chosen: The log says out of memory, not a damaged file. sfc will find nothing to explain it.

After the answer: the deciding words are marked. Reason: Memory full from steady, ordinary programs, with the work grown, is the situation where adding RAM is the right answer. The earlier tests ruled out a leak, so the part is no longer a guess.

#### Check question 25

A chat, with its history: "Luna, Training", Chat with the help desk.

> (Luna, Training, at the left) Since this morning my mouse, keyboard and headset all stopped working on the docking station. Windows installed a driver for the USB controller overnight.

A plain table, "Device Manager":

> Line  |  What it shows  (the column heads)
> USB controller  |  Yellow triangle: not enough USB controller resources. Driver installed last night
> Devices tried alone  |  A single mouse also fails on the docking station
> Roll Back Driver button  |  Available

**What is the smallest way back?**
(the options come in an order that depends on the seed of the question)
- Roll back the USB controller driver, restart, and test the devices (right)
- Unplug everything and plug the devices back in one at a time — if chosen: A single mouse already fails, so adding devices one by one cannot split anything. The new driver is the change.
- Replace the docking station with a new one and test the devices — if chosen: The warning followed a driver install, and a roll back is free. A new dock comes after that.
- Reinstall Windows and add the devices again from the start — if chosen: A resource warning after a driver install is not damage to Windows. The roll back is the small way back.

After the answer: the deciding words are marked. Reason: The warning can come from too many devices or from the driver. One mouse failing rules out too many, and the new driver the night before is the change, so the Roll Back Driver button is the first and smallest way back.

## The result

For example "6 of 6: passed" or "4 of 6: not yet", each rule above shown as met or not met, then every answer with its feedback, the missed ones first.
