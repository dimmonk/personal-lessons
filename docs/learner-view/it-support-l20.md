# IT Help Desk: Which Windows tool for the job

Revision 2, draft (the screen carries the draft line). Part: Which Windows tool for the job. Where the subject ends up: Take a ticket you have never seen (a user's email, chat or call about a computer, phone, printer, network, account or security problem) and work it the way a help desk technician does: sort it and set its priority, get the user's story and what changed, try the known fix with a limit, then narrow it down with the cheapest test that splits what works from what does not, fix one thing at a time, confirm with the user and write it up, or hand it on with everything you found; and know every fact and scenario on both CompTIA A+ exams well enough to pass them.

## The why

Dean says the laptop has been slow since Monday and the fan is loud. Dean is sure it needs more memory. Windows has a tool that shows in ten seconds whether memory is the problem, and another that names the program using the processor.
A technician remembers the question each Windows tool answers: what is eating the processor, did a driver fail at start-up, which program starts with Windows. Here you learn those questions and the names you type to open the tools, so you can pick the tool from the symptom.

## Step 1: Pick the tool by the question

Every Windows tool answers a question on a ticket. Three kinds cover most:
1. What is happening right now? A live view: Task Manager and Resource Monitor.
2. What happened before, or what is this computer made of? A record: Event Viewer, Performance Monitor and System Information.
3. Change this part. A console or settings area for one job: drives, devices, accounts, rules, clock, power.
Look first, change second. Every tool here is a look before it is a change.
Words first. A process is a running program; a service (a background program with no window) shows as a process too. A driver is the software that lets Windows work with a device, such as a printer. A volume is a part of a drive with its own letter, such as C:; a partition is one slice of a disk. The Windows build is its exact version number.

## Step 2: Task Manager: five tabs, five questions

Task Manager is the live view. Open it with Ctrl+Shift+Esc, or right-click the taskbar.

A plain table, "Task Manager, tab by tab":

> Tab  |  The question it answers  |  What you can do there  (the column heads)
> Processes  |  What is eating the processor, memory, disk or network?  |  Lists everything running. Sort by a column to find the heaviest. End task closes one that is not responding
> Performance  |  Which part is the limit?  |  Read the graphs: a line at its top is the limit. “Open Resource Monitor” is at the bottom
> Startup  |  Which program starts with Windows?  |  Each program has a startup impact (low, medium, high). Disable one to stop it opening at sign-in
> Users  |  Who is signed in, and what does each use?  |  Sign a person out; shows leftover sign-ins on a shared computer
> Services  |  Is a background program running; can I restart it?  |  Start, stop or restart a service, such as print spooling

The exam covers these five. Details lists every process with its process ID (PID), a number the command-line tools print.

## Step 3: The consoles, and how to open them

A console is a window that manages one part of Windows. Each is a file ending in .msc, run in the Microsoft Management Console. Open one by name: press the Windows logo and R together for the Run box, type the name and press Enter. Two of the eight, lusrmgr.msc and gpedit.msc, are in Windows Pro, Enterprise and Education but not in Home, so a ticket states the edition.

A plain table, "The eight consoles":

> Type this  |  The tool  |  The ticket question it answers  (the column heads)
> eventvwr.msc  |  Event Viewer  |  What did Windows record? Did a driver fail at start-up, what happened at 3 AM? (most are in the System log)
> diskmgmt.msc  |  Disk Management  |  Does Windows see the new drive? Give it a letter, format it, shrink or extend a volume
> taskschd.msc  |  Task Scheduler  |  How do I run a program at a set time or when something happens?
> devmgmt.msc  |  Device Manager  |  Which device has a problem? Update, roll back or disable its driver. A yellow triangle marks a problem
> certmgr.msc  |  Certificate Manager  |  Which certificates (digital IDs that prove who a site or program is) are stored for this user?
> lusrmgr.msc  |  Local Users and Groups  |  Which accounts are on this one computer? Add a user or put one in a group (not in Home)
> perfmon.msc  |  Performance Monitor  |  How did it do over hours or days? Record counters, read the graph
> gpedit.msc  |  Local Group Policy Editor  |  What rules does this one computer follow? Password length, blocked drives, screen lock (not in Home)

The names are shortened words: eventvwr is “event viewer”, diskmgmt “disk management”, devmgmt “device management”, taskschd “task scheduler”, lusrmgr “local user manager”, perfmon “performance monitor”. Match the first part to the job.

## Step 4: Six more tools with their own names

A plain table, "Six more, each opened by name":

> Type this  |  The tool  |  The ticket question it answers  (the column heads)
> msinfo32  |  System Information  |  What is in this computer? Model, installed memory, firmware version, Windows build, on one screen
> resmon  |  Resource Monitor  |  Which program, file or network connection is using the disk, memory, processor or network? Deeper than Task Manager
> msconfig  |  System Configuration  |  How does Windows start? General picks a normal or diagnostic start, Boot has Safe boot, Services chooses which load. Its Startup tab now points to Task Manager
> cleanmgr  |  Disk Cleanup  |  How do I free space? It lists temporary files and the Recycle Bin, with sizes
> dfrgui  |  Defragment and Optimize Drives  |  Are files on a spinning drive in pieces? It joins them, on a schedule
> regedit  |  Registry Editor  |  A vendor’s note says to change one value in the registry (the database of Windows’ and programs’ settings). Export the part you will edit first

The registry has no undo, and a wrong edit can stop Windows from starting, so change it only on a written instruction, after exporting the part to a file.

## Step 5: Control Panel: the older settings screens

Control Panel is the older place for settings:

A plain table, "Control Panel areas":

> Area  |  The ticket question it answers  (the column heads)
> Internet Options  |  The browser’s proxy, security zones, home page, history
> Devices and Printers  |  Which devices and printers are attached; which printer is the default?
> Programs and Features  |  Uninstall or change a program; Windows features on or off
> Network and Sharing Center  |  Is the computer connected? Adapter settings and sharing
> System  |  The computer’s name, memory and processor; remote access and restore points
> Windows Defender Firewall  |  Allow a program through; firewall on or off
> Mail  |  Email profiles for Outlook
> Sound  |  The default speakers or headset for playing and recording sound
> Device Manager  |  The same tool as devmgmt.msc
> Indexing Options  |  Which places Windows searches; Rebuild when search misses files
> Administrative Tools  |  Shortcuts to many of the consoles above (Windows Tools in Windows 11)

## Step 6: Power Options and File Explorer Options

A plain table, "Power Options":

> Choice  |  What it does  |  A ticket that points at it  (the column heads)
> Power plan  |  A bundle of screen, sleep and speed choices (Balanced, Power saver, High performance)  |  Battery runs down too fast, or a desktop is slow
> Sleep (also suspend or standby)  |  Keeps open work in memory on little power; wakes in seconds  |  Work is lost when the battery runs out asleep
> Hibernate  |  Saves open work to the drive and powers off completely  |  Open work must survive days with no battery drain
> Lid close action  |  What closing a laptop’s lid does: nothing, sleep, hibernate or shut down, separately on battery and on power  |  A call drops when the lid closes
> Fast startup  |  Shut down saves the core of Windows, so the next start is quicker. Restart does a full start  |  A fault survives Shut down but goes away after Restart. The switch is under “Choose what the power buttons do”
> USB selective suspend  |  Lets Windows cut power to an idle USB port (advanced plan settings)  |  A USB mouse or drive freezes when idle, wakes slowly

A plain table, "File Explorer Options (Control Panel, or View then Options)":

> Tab  |  Choice  |  The ticket question it answers  (the column heads)
> General  |  Open File Explorer to… and privacy choices  |  Why does it open on Quick access, not This PC?
> View  |  Show hidden files, folders and drives  |  The folder a guide names is not in the list (AppData is hidden)
> View  |  Hide extensions for known file types  |  The real ending of a file name is hidden (invoice.pdf.exe shows as invoice.pdf)

## Step 7: The Settings app: ten areas

A plain table, "The Settings app, areas as the exam names them":

> Area  |  What it holds  (the column heads)
> Ease of Access  |  Text size, magnifier, narrator, captions
> Time and Language  |  Date, time, time zone, region, language
> Update and Security  |  Windows Update, Windows Security, backup, recovery
> Personalization  |  Background, colors, lock screen, taskbar
> Apps  |  Installed apps, default apps, startup apps
> Privacy  |  What each app may use: camera, microphone, location
> Devices  |  Bluetooth, printers and scanners, mouse, typing
> Network and Internet  |  Wi-Fi, Ethernet, VPN, airplane mode, proxy
> Gaming  |  Game bar, captures, game mode
> Accounts  |  Your account, sign-in options, other users, work or school accounts

Windows 11 renamed two: Ease of Access is now Accessibility, Update and Security is Windows Update. The exam uses the names above.

## Step 8: Open every tool and hope

A wrong idea, marked wrong: “The laptop is slow, so I will run Disk Cleanup and Defragment, then look in the registry for old entries, and see if it helps.”
The right line: That changes the computer before looking. A cleanup frees space, an optimize tidies a spinning drive, a registry edit can break Windows, and none was shown to be the cause. Task Manager’s Performance tab answers “which part is the limit?” in ten seconds and changes nothing. Look, then change one thing.

## Step 9: A worked example

A chat, with its history: "Dean, Design", Chat with the help desk.

> (Dean, Design, at the left) My laptop has been slow since Monday and the fan is loud all day. It is four years old, so I think it needs more memory.

A plain table, "Task Manager, Performance tab (what Dean reads out)":

> Line  |  Value  (the column heads)
> CPU (the processor)  |  96% in use
> Memory  |  5.1 of 16 GB in use
> Disk  |  3% in use
> Wi-Fi  |  Almost nothing sent or received

A plain table, "Task Manager, Processes tab, sorted by CPU":

> Name  |  CPU  |  Memory  (the column heads)
> PhotoSync Helper  |  71%  |  210 MB
> Chrome  |  14%  |  1.4 GB
> Windows Explorer  |  2%  |  90 MB

Before the working, the learner may commit to a choice (not scored, not stored):
**What do the Performance lines show?**
(the options come in an order that depends on the seed of the question)
- Memory is mostly free and the processor is busy, so memory is not the limit
- Memory is the problem: 5.1 GB is a lot to have in use at once
- The machine is healthy: the disk and the Wi-Fi are both nearly idle
- Open Disk Management to look for a drive fault on the slow laptop

The working, one step at a time:
1. Split the question first: what is happening now, or what was recorded earlier?: “Slow since Monday” with a loud fan is happening now, so the live view comes first: Task Manager. Event Viewer, which keeps records, is for questions about the past.
1. Name the favorite cause and look before buying: Task Manager’s Performance tab shows which part is the limit.: The favorite is memory. Memory is 5.1 of 16 GB, so it is ruled out. The processor is at 96%.
1. Cut in half: which program uses the processor? Open the Processes tab and sort by CPU.: PhotoSync Helper uses 71%. Chrome, with many tabs, uses 14%. One program is the suspect, and a list is not yet a fix.
1. Next question: does it start with Windows? Look at the Startup tab.: PhotoSync Helper is enabled at start with a High startup impact. It began on Monday when Dean installed a photo tool. That explains why it comes back after every restart.
1. Change one thing: disable PhotoSync Helper at start, then restart.: After the restart the processor idles and the fan is quiet. Ending the task alone would have helped only until the next sign-in.
1. Confirm with Dean and write it down.: Dean confirms after a day. The note says: slow, loud fan, memory 5.1 of 16 GB, processor 96%, PhotoSync Helper 71% and a High startup impact, disabled at start, fixed. Buying memory would have fixed nothing.

Then the answer: Memory is mostly free and the processor is busy, so memory is not the limit. The favorite cause was memory, and the Performance tab ruled it out in seconds. Processes named the program using the processor, and Startup showed why it came back. Each tab answered one question, and nothing was changed before the look.

## Step 10: Questions

4 questions, listed, with help (shown). A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 1

A chat, with its history: "Dariusz, Accounting", Chat with the help desk.

> (Dariusz, Accounting, at the left) **At start-up this morning a message flashed up saying a driver failed to load, and then everything seemed normal. I would like to know which driver, so I can tell you.**

Help on screen: the words that decide it are marked.

**Which tool shows what Windows recorded at start-up?**
(the options come in an order that depends on the seed of the question)
- Event Viewer, in the System log, which keeps what Windows recorded (right)
- Task Manager, and in it the Processes tab, which lists what is running — if chosen: Task Manager shows what is running now. A driver that failed to load during start-up is a record of the past.
- Task Scheduler, which lists the jobs that run at chosen times — if chosen: Task Scheduler runs programs on a timetable. It does not keep a record of what failed.
- System Information, which lists the hardware the computer has in it — if chosen: System Information describes the computer as it is. The failed load is an event, and events are in Event Viewer.

After the answer: the deciding words are marked. Reason: Windows writes down what happened as it started, including a driver that failed to load. The question is about the past, so the tool is a record: Event Viewer, in the System log. Task Manager answers questions about now.

#### Item 2

A chat, with its history: "Joyce, Warehouse", Chat with the help desk.

> (Joyce, Warehouse, at the left) **The label printer worked yesterday. This morning it is not listed, and in Device Manager I saw a yellow triangle next to its name.**

Help on screen: the words that decide it are marked.

**Which tool lists devices and flags one with a problem?**
(the options come in an order that depends on the seed of the question)
- Device Manager, where a yellow triangle marks a device with a problem (right)
- Disk Management, which lists the drives and divides them into volumes — if chosen: Disk Management is for drives and the space on them. A label printer is not a drive.
- Local Users and Groups, which lists the accounts on the computer — if chosen: That console is for accounts. The yellow triangle is about a device.
- Registry Editor, which can show the printer’s entry as raw values — if chosen: It is a risky place to start. Device Manager shows the same device with a plain warning, and changes nothing until you do.

After the answer: the deciding words are marked. Reason: The question is which device has a problem, and Device Manager answers it with a yellow triangle on the device. From there the driver can be updated, rolled back or the device disabled, one change at a time.

#### Item 3

A chat, with its history: "Brendan, Finance", Chat with the help desk.

> (Brendan, Finance, at the left) **I put a second drive in the desktop for the year-end files. It does not show up in File Explorer, but the BIOS (the first screen at power-on) lists it.**

Help on screen: the words that decide it are marked.

**Which tool shows a drive that Windows has not prepared yet?**
(the options come in an order that depends on the seed of the question)
- Disk Management, which lists a new drive that has no volume yet (right)
- Device Manager, then update the driver of the whole computer — if chosen: Device Manager can show the drive as a device, but it cannot give it a letter or a format. Updating the whole computer changes more than the cheap look.
- Disk Cleanup, which clears out temporary files to make room — if chosen: Disk Cleanup removes files from a drive that is already in use. This drive has no volume yet.
- Resource Monitor, which shows which program is reading the disk — if chosen: Resource Monitor shows activity on drives in use. Nothing can be reading a drive with no volume.

After the answer: the deciding words are marked. Reason: The firmware sees the drive, so it is installed. Windows has not prepared it yet, and Disk Management is the console that lists a drive with no volume and gives it a letter and a format.

#### Item 4

A chat, with its history: "Matthew, Reception", Chat with the help desk.

> (Matthew, Reception, at the left) **Our software guide says the settings file is in a folder called AppData in my user folder. I open my folder and there is no AppData. I can see everything else.**

Help on screen: the words that decide it are marked.

**Where does Windows hide this choice?**
(the options come in an order that depends on the seed of the question)
- File Explorer Options, View tab: show hidden files, folders and drives (right)
- Programs and Features, to see if the software installed all of its folders — if chosen: That list shows which programs are installed, not which folders are visible.
- Indexing Options, to rebuild the list of places Windows searches — if chosen: The index feeds search. It does not control which folders File Explorer shows.
- Device Manager, to see if the disk driver is hiding part of the folder — if chosen: Nothing is wrong with the drive: the rest of the user folder shows. This single folder is marked hidden.

After the answer: the deciding words are marked. Reason: The folder is hidden, and showing hidden files is a File Explorer Options choice on the View tab. The question is how File Explorer shows files, not which programs are installed or how search works.

Then a screen: you can stop here, your place is kept.

## Step 11: Questions

20 questions, shuffle. A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 5

A chat, with its history: "Marlon, Procurement", Chat with the help desk.

> (Marlon, Procurement, at the left) I am filling in a form for the insurer and it wants the computer’s model, how much memory is installed, the BIOS version and the Windows build. Where do I find all of that in one place?

**Which tool gives that in one list?**
(the options come in an order that depends on the seed of the question)
- System Information (msinfo32), which lists the hardware and the build (right)
- Task Manager, whose Performance tab shows the memory and the processor — if chosen: Task Manager gives live use and some hardware details, but not the model, the firmware version or the build in one place.
- Device Manager, which shows each device and the driver version it uses — if chosen: Device Manager lists devices and drivers. The form wants facts about the whole computer.
- Event Viewer, in which the System log keeps notes about the hardware — if chosen: Event Viewer holds records of what happened, not a list of what the computer is made of.

After the answer: the deciding words are marked. Reason: System Information answers “what is in this computer?” in one place: model, installed memory, firmware version and Windows build. Task Manager answers what is busy now.

#### Item 6

A chat, with its history: "Oswald, Operations", Chat with the help desk.

> (Oswald, Operations, at the left) Every night at 2 AM I need a small script to copy the shift report to the shared drive. I do not want to be there to start it. What do I use?

**Which console runs a program at a chosen time?**
(the options come in an order that depends on the seed of the question)
- Task Scheduler (taskschd.msc), which starts a program at a chosen time (right)
- Services tab in Task Manager, which starts background programs by hand — if chosen: The Services tab starts and stops programs when someone clicks it. It has no clock.
- Performance Monitor (perfmon.msc), which records numbers over time — if chosen: It records performance counters for later reading. It does not run a script.
- Group Policy Editor (gpedit.msc), which holds rules for the computer — if chosen: It holds rules for how Windows behaves. A timed copy is a job to run, not a rule.

After the answer: the deciding words are marked. Reason: Task Scheduler answers “how do I run a program at a time, or when something happens?”. Its trigger and action are the two parts of a job.

#### Item 7

A chat, with its history: "Sandro, Marketing", Chat with the help desk.

> (Sandro, Marketing, at the left) After the update I shut the laptop down every night, but a wrong display setting keeps coming back until I choose Restart. The vendor’s note says it may be “fast startup”.

**What does fast startup do, and where is it?**
(the options come in an order that depends on the seed of the question)
- A shutdown that keeps part of Windows saved to speed the next start, under “Choose what the power buttons do” in Power Options (right)
- Hibernate, which saves open work to the drive and powers off, chosen in Power Options — if chosen: Hibernate keeps your open work for the next start. Fast startup keeps part of Windows, and a Shut down still closes your programs.
- The High performance power plan, which makes every start quicker, chosen in Power Options — if chosen: A power plan controls speed and sleep. Fast startup is its own switch, and it is why a fault saved at Shut down comes back.
- A Task Manager Startup tab choice that makes programs open faster, turned off there — if chosen: Fast startup is about Windows itself, not about the programs on the Startup tab.

After the answer: the deciding words are marked. Reason: With fast startup on, Shut down keeps part of Windows saved, so a fault stored there survives a shutdown. Restart does a full start. The choice is in Power Options.

#### Item 8

A chat, with its history: "Marian, Sales", Chat with the help desk.

> (Marian, Sales, at the left) The C: drive says it has 2 GB free and Windows keeps warning me. I emptied nothing and I have no big files that I know of. Is there a quick way to clear the junk Windows keeps?

**Which tool clears temporary files and the Recycle Bin?**
(the options come in an order that depends on the seed of the question)
- Disk Cleanup (cleanmgr), which lists temporary files and the Recycle Bin (right)
- Defragment and Optimize Drives (dfrgui), which rearranges the files on the drive — if chosen: Optimizing arranges how files sit on the drive. It does not free any space.
- Registry Editor, to delete the entries that older programs left behind — if chosen: Registry entries take almost no space, and a wrong edit can break Windows. It does not fix a full drive.
- Disk Management, to shrink the drive and make a new volume from the room left — if chosen: Disk Management changes how the drive is divided. It cannot make room that is not free.

After the answer: the deciding words are marked. Reason: Disk Cleanup answers “how do I free space?” and shows how much each group of temporary files would free before it removes anything. Optimizing and Disk Management do not free space.

#### Item 9

A question the phone reads aloud, never by itself: a button "Hear the question" (then "Hear it again") reads it with a voice on the phone when the learner taps, and once they have tapped the next question in the run is read when they tap Next. A phone with no voice of its own shows the words and says so. Its words: **Windows keeps a record of errors, warnings and start-ups. The tool that reads it is Event Viewer.**

**Type the name that opens Event Viewer from the Run box (it ends in .msc).**
- One box and "Answer" (shut until something is typed; Enter sends it), and "Not yet", which answers with nothing and shows the answers. "Not sure? Tap Not yet to see the answers." Nothing is marked before the answer.
- What counts as the same: capital letters, punctuation, "a", "an", "the" and "and" do not matter; a number in words is the number ("twenty-seven" is 27); words in brackets are optional; one small misspelling in the whole answer is forgiven (a word that is one letter off, in words of four letters or more); parts of an answer said in any order. A word left out or added, or another word, is a miss.
- After: the mark (Right, Not this one, or "Not yet") with "You said: …", then the accepted answers, every one, the one given marked "You gave this one" (and "Words in brackets are optional." when some words are in brackets). After a miss with something typed: "If what you said means the same, say so. It counts this time, and the question comes back later to be sure." with the button "My answer means the same". It counts right in that sitting (shown as "Counted on your word"), is logged and listed under the result and in the results, and is not a good day for the schedule, so the question comes back.
- The accepted answers shown after (Accepted answers):
  - eventvwr.msc
  - eventvwr
  - eventvwr msc

After the answer: Reason: Event Viewer opens with eventvwr.msc. An easy way to remember: “event” and “viewer” with the vowels dropped, and .msc for a console.

#### Item 10

A chat, with its history: "Erica, Compliance", Chat with the help desk.

> (Erica, Compliance, at the left) My browser says the certificate for our new internal site is not trusted. Our security guide says to check whether the company’s certificate is in my personal certificates.

**Which console lists a person’s certificates?**
(the options come in an order that depends on the seed of the question)
- Certificate Manager (certmgr.msc), which lists certificates for the user (right)
- Local Users and Groups (lusrmgr.msc), which lists accounts and their groups — if chosen: It lists accounts and groups. A certificate is not an account.
- Device Manager (devmgmt.msc), which lists the computer’s devices — if chosen: It lists hardware. The certificate is stored data, not a device.
- Event Viewer (eventvwr.msc), which lists what Windows recorded — if chosen: It might hold a related error, but it is a record of events, not the place where certificates are stored.

After the answer: the deciding words are marked. Reason: Certificate Manager answers “which certificates are stored for this user?”. Certificates prove who a site or program is, and the other consoles hold accounts, devices or events.

#### Item 11

A chat, with its history: "Ria, Design", Chat with the help desk.

> (Ria, Design, at the left) My laptop’s USB mouse freezes if I leave it alone for a minute, and it takes a second or two to wake when I move it. The mouse is fine on my other computer.

**Which Power Options setting powers down idle USB devices?**
(the options come in an order that depends on the seed of the question)
- USB selective suspend, in the plan’s advanced settings; turn it off here (right)
- Hibernate, in the Power Options, which saves memory to the drive and shuts off — if chosen: Hibernate puts the whole computer off. Only the USB port is losing power here.
- The lid action, which picks what happens when the laptop is closed — if chosen: The lid is open. This is about the mouse’s port.
- Switch to the High performance power plan in Power Options — if chosen: A power plan changes many settings at once. This is one setting, and one change is tested alone.

After the answer: the deciding words are marked. Reason: USB selective suspend lets Windows cut power to an idle USB port, and a device on it wakes slowly. It is in the plan’s advanced settings under Power Options. One setting, changed alone.

#### Item 12

A chat, with its history: "Orson, IT", Chat with the help desk.

> (Orson, IT, at the left) The shared reception PC has 8 GB of memory and it is crawling at 9 AM. The front desk shows one person signed in, but I wonder if someone from last night stayed signed in too.

**Which Task Manager tab shows who is signed in and what each uses?**
(the options come in an order that depends on the seed of the question)
- The Users tab, which lists each signed-in person and what each one uses (right)
- The Startup tab, which lists the programs that open when Windows starts — if chosen: Startup shows what opens at sign-in, not who is signed in.
- The Services tab, which lists the background programs and their state — if chosen: Services lists background programs. They run for the computer as a whole and do not name the people signed in.
- The Performance tab, which graphs the processor and the memory over time — if chosen: Performance shows the totals. It cannot say who is using them.

After the answer: the deciding words are marked. Reason: The Users tab answers “who is signed in, and what does each person use?”. The other tabs show programs and totals, not people.

#### Item 13

A chat, with its history: "Julian, Workshop", Chat with the help desk.

> (Julian, Workshop, at the left) The workshop PC runs Windows 11 Pro and is not on a domain (it is a stand-alone computer). I need to add a new person as a local user and put them in the Users group, not Administrators.

**Which console manages the accounts on this one computer?**
(the options come in an order that depends on the seed of the question)
- Local Users and Groups (lusrmgr.msc), which manages accounts and groups (right)
- Certificate Manager (certmgr.msc), which stores digital IDs — if chosen: Certificates are digital IDs for sites and programs. They do not create people’s accounts.
- Task Scheduler (taskschd.msc), which runs jobs at chosen times — if chosen: It runs jobs. The need here is an account.
- Performance Monitor (perfmon.msc), which records how the computer is doing — if chosen: It records performance numbers. It cannot create an account.

After the answer: the deciding words are marked. Reason: Local Users and Groups answers “which accounts are on this computer, and in which groups?”. Putting a person in Users and not Administrators keeps their rights small.

#### Item 14

The question, read aloud as above: **The console that lists drives, partitions and volumes, and that formats a new drive, is Disk Management.**

**Type the name that opens Disk Management from the Run box.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - diskmgmt.msc
  - diskmgmt
  - diskmgmt msc

After the answer: Reason: Disk Management opens with diskmgmt.msc: “disk” and “management” shortened.

#### Item 15

A chat, with its history: "Serena, Admin", Chat with the help desk.

> (Serena, Admin, at the left) I need to remove an old program, and I also want to turn on the Windows feature called Telnet Client. The desk’s guide says both are in one place in Control Panel.

**Which Control Panel area does both?**
(the options come in an order that depends on the seed of the question)
- Programs and Features, which uninstalls programs and turns features on (right)
- Devices and Printers, which lists the hardware and the printers attached — if chosen: It lists hardware. Programs and Windows features live elsewhere.
- Indexing Options, which controls which places the search looks in — if chosen: It controls search. Programs and features are somewhere else.
- Network and Sharing Center, which shows the connections — if chosen: It is for connections. Telnet Client is a program, not a connection setting.

After the answer: the deciding words are marked. Reason: Programs and Features answers “uninstall a program, or turn a Windows feature on or off?”. Devices, search and connections each have their own areas.

#### Item 16

A chat, with its history: "Crystal, Legal", Chat with the help desk.

> (Crystal, Legal, at the left) The vendor’s guide for our scanner says to change one value in the registry to stop it from timing out. They gave me the exact path. I have never opened it.

**What does the technician do before editing?**
(the options come in an order that depends on the seed of the question)
- Open regedit and export that branch of the registry first, then edit it (right)
- Open regedit and change the value at once, then test the scanner afterward — if chosen: With no export there is no easy way back if the value is wrong. A backup costs a minute.
- Open Task Manager and look for the scanner’s process, then end it — if chosen: Ending a process does not change a stored value. The timeout is written in the registry.
- Open Programs and Features and reinstall the scanner program from scratch — if chosen: Reinstalling is a big step for a change the vendor has spelled out. It may not touch that value at all.

After the answer: the deciding words are marked. Reason: Regedit changes the registry, which has no undo. Export the part you will edit first, then make the one change the vendor gives and test. A written instruction and a backup make it safe. The registry has five top-level branches called hives; the two met most are HKEY_LOCAL_MACHINE (the computer’s settings) and HKEY_CURRENT_USER (the signed-in person’s).

#### Item 17

A chat, with its history: "Lea, Planning", Chat with the help desk.

> (Lea, Planning, at the left) Our reporting PC slows down every afternoon, but never while I am looking at it. I would like the disk and processor use logged for a week so we can see when it happens.

**Which console can record counters over time?**
(the options come in an order that depends on the seed of the question)
- Performance Monitor (perfmon.msc), which can log counters for days (right)
- Task Manager’s Performance tab, left open on the screen all week — if chosen: Its graph shows about the last 60 seconds and nothing when the window is closed. The slow period would be gone.
- Event Viewer, searching its logs for the word “slow” — if chosen: Windows does not write “slow” into its logs. Use numbers that were recorded over time.
- Resource Monitor (resmon), which shows details of what runs at that moment — if chosen: Resource Monitor is a live view. It will not have been open when the slowdown happens.

After the answer: the deciding words are marked. Reason: Performance Monitor answers “how did the computer do over hours or days?” by recording counters. Task Manager and Resource Monitor are live views and show only the present.

#### Item 18

A chat, with its history: "Sal, Sales", Chat with the help desk.

> (Sal, Sales, at the left) My video call app says it cannot find my camera. The camera works in the camera app. Windows says nothing is wrong with the device.

**Where do you check that apps are allowed to use the camera?**
(the options come in an order that depends on the seed of the question)
- The Settings app, in Privacy, where each app’s camera access is listed (right)
- Device Manager, and reinstall the camera driver — if chosen: The camera works in another app, so its driver is fine. A reinstall is a bigger step than the one setting.
- The Settings app, in Accounts, to sign in to the call app again — if chosen: Accounts holds sign-in options for Windows. Access to a camera is held in Privacy.
- The Settings app, in Time and Language, to match the call app’s region — if chosen: Time and Language is for the clock and the region. The camera is not tied to either.

After the answer: the deciding words are marked. Reason: The Privacy area of the Settings app holds what each app may use, such as the camera and the microphone. The camera works elsewhere, so the device and its driver are fine.

#### Item 19

A chat, with its history: "Nigel, HR", Chat with the help desk.

> (Nigel, HR, at the left) I cannot print. The spooler (the background program that lines up print jobs) is stuck. A colleague told me to restart it, but I do not know where that is.

**Where can a technician see and restart a background program?**
(the options come in an order that depends on the seed of the question)
- Task Manager’s Services tab, where a service can be restarted (right)
- Task Manager’s Processes tab, then End task on the spooler — if chosen: The Processes tab lists the spooler as a running process, but a service is restarted from the Services tab. End task only closes it.
- Device Manager, then remove and reinstall the printer’s entry — if chosen: Reinstalling the printer is more than a restart of the stuck program, and it changes the printer’s setup too.
- Task Scheduler, then run the print job again on a schedule — if chosen: Task Scheduler starts jobs by the clock. It does not restart a stuck background program.

After the answer: the deciding words are marked. Reason: A service is a background program, and the Services tab is where it is started, stopped or restarted. The Processes tab lists it too and can end it, but a service is stopped and restarted from the Services tab, and restarting is not the same as ending a task.

#### Item 20

A chat, with its history: "Amy, Field team", Chat with the help desk.

> (Amy, Field team, at the left) I am standing at a customer’s desk. I need to open Device Manager quickly. The customer shows me the Run box.

**Which name opens Device Manager?**
(the options come in an order that depends on the seed of the question)
- devmgmt.msc (right)
- diskmgmt.msc — if chosen: That one is Disk Management. The names look alike, and only one holds the devices.
- taskschd.msc — if chosen: That is Task Scheduler. “Task schedule” is about jobs at chosen times.
- lusrmgr.msc — if chosen: That is Local Users and Groups. “usr” is the clue: users.

After the answer: the deciding words are marked. Reason: The names are built from the tool’s own words: devmgmt is “device management”, diskmgmt is “disk management”, taskschd is “task scheduler”, lusrmgr is “local user manager”. Match the first part to the job, then the ending, .msc, shows it is a console.

#### Item 21

The question, read aloud as above: **The console that records how the computer does over hours or days, and graphs it, is Performance Monitor.**

**Type the name that opens Performance Monitor from the Run box.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - perfmon.msc
  - perfmon
  - perfmon msc

After the answer: Reason: Performance Monitor opens with perfmon.msc: “perf” and “mon”, short for performance and monitor.

#### Item 22

The question, read aloud as above: **The tool that lists the model, the installed memory, the firmware version and the Windows build on one screen is System Information.**

**Type the name that opens System Information from the Run box.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - msinfo32
  - msinfo32.exe

After the answer: Reason: System Information opens with msinfo32: “ms” for Microsoft, “info” for information, and 32 as part of the name.

#### Item 23

A chat, with its history: "Isabel, Records", Chat with the help desk.

> (Isabel, Records, at the left) Searching the Documents folder used to find my files in a second. Now it misses files I saved last week. I can open the folder and see them.

**Which area controls which places Windows searches?**
(the options come in an order that depends on the seed of the question)
- Indexing Options, which shows the places indexed and can rebuild them (right)
- Disk Cleanup, which clears out files that are no longer needed — if chosen: The files are fine and wanted. Clearing files would make them harder to find, not easier.
- Disk Management, to check the drive that holds Documents — if chosen: The drive opens and shows the files, so it is working. The search list is the part that is behind.
- Defragment and Optimize Drives, to speed up how fast files are found — if chosen: Optimizing sorts how files sit on a drive. It does not rebuild the search list.

After the answer: the deciding words are marked. Reason: Indexing Options answers “which places does Windows search, and is the list up to date?”. Files that exist but do not turn up in search call for a rebuild of the index.

#### Item 24

A chat, with its history: "Raphael, Travel", Chat with the help desk.

> (Raphael, Travel, at the left) I flew in from London and my meetings show the wrong times. My laptop’s clock is an hour out and the calendar uses the wrong time zone. Where do I fix this in Settings?

**Which area of the Settings app holds the clock and region?**
(the options come in an order that depends on the seed of the question)
- Time and Language, with the date, time zone and region (right)
- Network and Internet, where the Wi-Fi connection can change the clock — if chosen: It holds Wi-Fi, VPN and proxy choices. The time zone lives with the clock.
- Privacy, where location choices can change the time zone — if chosen: Location access sits in Privacy, but the time zone and region are chosen in Time and Language.
- Accounts, where the sign-in region is kept — if chosen: It holds sign-in options and users. The time zone is not among them.

After the answer: the deciding words are marked. Reason: Time and Language holds the date, the time, the time zone and the region. The ten areas each hold one family of choices, and the clock is in this one.

Then a screen: you can stop here, your place is kept.

## Step 12: Questions

3 questions, shuffle, with about 30% from earlier lessons mixed in, unlabeled. A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 25

Sunil in Sales calls the help desk: Sunil’s laptop is slow and the client demo is in an hour. You answer. Sunil is on the laptop now.

**Sunil calls about the slow laptop. What do you say?**
- An incoming call from "Sunil, Sales" (Incoming call · 1:10 PM). The turns arrive one after another; the learner picks a reply each time and the next turn follows the reply. Pick what you say. The call goes on from there. Nothing is marked until it ends, and a call is not on a clock.
- turn 1, the other side says: "My laptop is crawling. I think it needs more memory. Can you just send me a new one?" [pushes: Sunil wants the biggest step before anything was looked at.]
  - reply "I will put in an order for a new laptop today.": the call ends (not this one): Nothing has been looked at yet. A laptop order costs days, and Task Manager costs a minute. [slip: replaced a part before the cheap check]
  - reply "Press Ctrl, Shift and Esc. In Task Manager, open the Performance tab and read me memory and CPU.": goes on to turn 2, where the pressure comes back
  - reply "I am sorry, a slow laptop an hour before a demo is stressful. I will check what upgrade fits your model, order the memory, and send a technician to your desk to fit it before the demo.": the call ends (not this one): Polite, but nothing has been looked at. A memory order and a visit cost days and money, and Task Manager costs a minute. [slip: replaced a part before the cheap check]
  - reply "Restart it and see if the memory problem goes away on its own.": the call ends (not this one): A restart is cheap but it cuts nothing in half and loses the live view of what is using the processor. Look first. [slip: ran a test that does not split what works from what does not]
- turn 2, the other side says: "Memory says 6.2 of 16 GB. CPU says 98%. But I still think I need more memory." [pushes: Sunil holds to the first idea.]
  - reply "Memory cannot be the problem if it says 6.2 GB, so please stop saying that.": the call ends (not this one): The number is a fair answer, but telling Sunil to stop leaves no next step. Say it back, then give the next look. [slip: argued with the user or brushed off what they said]
  - reply "Memory is under half full, so the processor is the busy part. Open Processes, click the CPU heading, and read me the top name.": the call ends (right): The Performance tab ruled out memory with a number Sunil read out, and the next look is the Processes tab. The cheap look continues.
  - reply "Understood, I will order more memory for you.": the call ends (not this one): Memory is under half full, so it is not the limit. Ordering it would cost money and leave the slowness untouched. [slip: replaced a part before the cheap check]
  - reply "I completely understand, and I am sorry for the trouble this close to your demo. Let me restart your laptop from here, and we will look at the numbers again once it is back up.": the call ends (not this one): Kind words, but a restart ends the live view of what is using the processor, and the numbers just read already ruled memory out. [slip: ran a test that does not split what works from what does not]
- After it ends: the lines of every turn that pushed are marked and named ("It pushes:"), and the reply where it could have ended the right way is named ("You could have ended it at your first reply: “the reply”." or "You ended it as soon as you could.").

After the answer: Reason: A slow computer is a live question, so Task Manager comes first. Its Performance tab shows which part is the limit, and the user reads the number out. When Sunil holds to the guess, you say it back and give the next look.

#### Item 26

A chat, with its history: "Sarah, Lab", Chat with the help desk.

> (Sarah, Lab, at the left) Since the update on Tuesday my USB scanner stopped working. It showed a yellow triangle in Device Manager as soon as I plugged it in. It worked last week.

A plain table, "Device Manager, Scanners":

> Line  |  Value  (the column heads)
> Device  |  Flatbed Scanner 200
> Status  |  Yellow triangle: a problem
> Driver date  |  Tuesday, installed by the update
> Previous driver  |  Available to roll back to

**What is the one change to try first?**
(the options come in an order that depends on the seed of the question)
- Roll the driver back to the previous version, then test the scanner again (right)
- Update the driver, reinstall the scanner program and unplug it, all together — if chosen: Three changes at once: if the scanner works, nobody can say which one did it.
- Run Disk Cleanup and then open the registry to look for scanner entries — if chosen: Neither tool answers “what changed for the scanner?”. The table already names the new driver.
- Disable the scanner in Device Manager and plug it into another computer — if chosen: Disabling turns the device off here and teaches nothing about the new driver, which is the change.

After the answer: the deciding words are marked. Reason: Device Manager answers “is the driver the problem, and can I undo it?”. The change came with the update, so rolling the driver back is the cheapest one-change test. If it does not work, the next cause comes next.

#### Item 27

A chat, with its history: "Aaron, Finance", Chat with the help desk.

> (Aaron, Finance, at the left) When I close my laptop lid at my desk, it goes to sleep and drops the video call that I have on the big screen. I want the call to continue with the lid shut and the screen plugged in.

The laptop is plugged in to power and to the external screen.

**Where does the technician change this?**
(the options come in an order that depends on the seed of the question)
- Power Options, the lid action, choosing do nothing when plugged in (right)
- Task Manager, Startup tab, disabling the sleep program — if chosen: Sleep is not a program that opens at sign-in. It is a power setting.
- The Settings app, Devices, then the screen’s entry in the list — if chosen: The screen is fine. What closes the call is what the lid does.
- Device Manager, disabling the lid sensor under the system devices — if chosen: The lid action is a choice Windows offers in Power Options. Turning off a device is a rough way to reach it.

After the answer: the deciding words are marked. Reason: The lid action belongs to Power Options. It has its own choice for plugged in and for battery, so Aaron’s call can continue while plugged in and the laptop still sleeps on the move.

Then a screen: you can stop here, your place is kept.

## The check

8 new questions, no help. No answer is shown until the end. The questions come in mixed order.

To pass:
- At least 7 right

#### Check question 28

A chat, with its history: "Zachary, Billing", Chat with the help desk.

> (Zachary, Billing, at the left) After I sign in, my laptop is unusable for about four minutes while things open and the fan runs. Once it settles it is fine.

A plain table, "Task Manager, Startup tab":

> Name  |  Status  |  Startup impact  (the column heads)
> BackupAgent  |  Enabled  |  High
> Chat app  |  Enabled  |  Medium
> OneDrive  |  Enabled  |  Low
> Printer tray icon  |  Enabled  |  Low

**What is the first change?**
(the options come in an order that depends on the seed of the question)
- Disable BackupAgent at start, restart and time the sign-in (right)
- Disable all four programs at start and restart the laptop — if chosen: If the sign-in speeds up, nobody knows which program was the cause, and the ones that were fine are off for no reason.
- Run Disk Cleanup and Defragment and Optimize Drives, then sign in again — if chosen: Neither tool answers “what opens at sign-in?”, and the table already names the likely program.
- End BackupAgent in the Processes tab after each sign-in — if chosen: Ending it after it has started works only until the next sign-in. The Startup tab stops it from starting.

After the answer: the deciding words are marked. Reason: A slow minutes after sign-in is the question “which program starts with Windows?”, answered by the Startup tab. Disable one program, the High one, and restart. Ending a task helps only until the next sign-in.

#### Check question 29

A chat, with its history: "Bianca, Archive", Chat with the help desk.

> (Bianca, Archive, at the left) My PC stalls every few minutes. Task Manager shows the disk at 100% and I can see which program is busy, but I cannot tell which file it is reading.

A plain table, "Task Manager, Performance tab":

> Line  |  Value  (the column heads)
> CPU  |  12%
> Memory  |  7.8 of 16 GB
> Disk 0  |  100%

**Which tool shows which file the program is reading?**
(the options come in an order that depends on the seed of the question)
- Resource Monitor (resmon), on the Disk tab, which lists programs and files (right)
- Disk Management (diskmgmt.msc), to see how the drive is divided into volumes — if chosen: It shows how the drive is divided, not what is using it now.
- Disk Cleanup (cleanmgr), to clear temporary files off the busy drive — if chosen: Clearing files does not say what is using the disk. The look has to come before the change.
- Event Viewer (eventvwr.msc), to find the disk errors from last week — if chosen: The stall is happening now. Event Viewer holds what was recorded, not the files being read this minute.

After the answer: the deciding words are marked. Reason: The Performance tab told us the disk is the limit; the question “which program, and which file?” is Resource Monitor’s Disk tab. It is opened from the bottom of Task Manager’s Performance tab, or by typing resmon.

#### Check question 30

A chat, with its history: "Clayton, Training", Chat with the help desk.

> (Clayton, Training, at the left) The training laptop only shows its fault in safe mode. I need it to start in safe mode on the next restart, but the screen at power-on goes by too quickly for me to press a key in time.

**Which tool can make Windows start in safe mode next time?**
(the options come in an order that depends on the seed of the question)
- System Configuration (msconfig), Boot tab: tick Safe boot, then restart (right)
- Task Manager, on the Startup tab, with the whole list disabled and a restart — if chosen: The Startup tab controls programs that open at sign-in. It does not choose how Windows itself starts.
- Device Manager, with every device disabled and then a restart — if chosen: Disabling every device is many changes at once and does not start safe mode, which is a way of starting Windows.
- Registry Editor, adding a safe-mode value in the boot entry by hand — if chosen: A tick in msconfig writes that setting for you with a way back. Editing by hand risks an unbootable laptop.

After the answer: the deciding words are marked. Reason: System Configuration (msconfig) is the tool for how Windows starts: normal, diagnostic or safe. Tick Safe boot on the Boot tab for the next start, and untick it when the work is finished.

#### Check question 31

A chat, with its history: "Caleb, Server room", Chat with the help desk.

> (Caleb, Server room, at the left) The file server restarted by itself last night around 3 AM. Nobody was there, and it is fine now. My boss wants to know what happened.

**Where does the technician look first?**
(the options come in an order that depends on the seed of the question)
- Event Viewer, System log, around 3 AM, for the error before the restart (right)
- Task Manager, on the Processes tab, to see which program is using the most — if chosen: Task Manager shows the present. The server is fine now, and the cause is in what was recorded then.
- Task Scheduler, to see whether a job was scheduled to run at 3 AM — if chosen: This may be worth a look later, but it guesses a cause. The log shows what happened without guessing.
- Performance Monitor, starting a log of counters from now on — if chosen: A log starting now will miss last night. Event Viewer already holds what happened then.

After the answer: the deciding words are marked. Reason: Event Viewer answers “what happened, and when?” for the past. Task Manager answers the present. For a restart nobody saw, open the System log and read the entries around the time.

#### Check question 32

A chat, with its history: "Simon, Clinic", Chat with the help desk.

> (Simon, Clinic, at the left) The front-desk PC runs Windows 11 Pro and is a stand-alone computer, not on the company network. The owner wants Windows to require passwords at least 12 characters long and to block USB sticks.

**Which console holds rules like these for one computer?**
(the options come in an order that depends on the seed of the question)
- Local Group Policy Editor (gpedit.msc), which holds the computer’s rules (right)
- Local Users and Groups (lusrmgr.msc), which creates accounts and groups — if chosen: It manages who the accounts are. The rules for passwords and drives are policy.
- Certificate Manager (certmgr.msc), which stores digital IDs — if chosen: Certificates prove who a site or program is. They do not hold password rules.
- Task Scheduler (taskschd.msc), which runs jobs at chosen times — if chosen: It starts jobs. Neither rule is a job to run.

After the answer: the deciding words are marked. Reason: The rules for how Windows behaves belong to Group Policy, and on a stand-alone computer the editor is gpedit.msc. Local Users and Groups is for who has an account.

#### Check question 33

The question, read aloud as above: **The console that runs a program at a time you choose, or when something happens, is Task Scheduler.**

**Type the name that opens Task Scheduler from the Run box.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - taskschd.msc
  - taskschd
  - taskschd msc

After the answer: Reason: Task Scheduler opens with taskschd.msc: “task” and “schd” for scheduler.

#### Check question 34

A chat, with its history: "Samuel, Orders", Chat with the help desk.

> (Samuel, Orders, at the left) I got an email with “invoice.pdf”. I double-clicked it, a black window flashed and nothing opened. The icon looked like a PDF.

A plain table, "The file in the Downloads folder":

> Line  |  Shows  (the column heads)
> Name as File Explorer shows it  |  invoice.pdf
> Icon  |  A PDF icon
> Type column  |  Application

**Which setting shows the whole file name?**
(the options come in an order that depends on the seed of the question)
- File Explorer Options, View tab: show file name extensions (right)
- Programs and Features, to see whether a PDF reader is installed — if chosen: The Type column says Application, so a missing reader is not the issue. The question is what the file really is.
- Indexing Options, to rebuild the list of file names Windows searches — if chosen: The index is for search. It does not change how a name is shown.
- Disk Cleanup, to clear the Downloads folder of old files — if chosen: The file is a clue and should be looked at, not cleared. It may not even be a PDF.

After the answer: the deciding words are marked. Reason: The Type column says Application where a PDF would say a document type: the real ending, .exe, was hidden, and the name looked like a PDF. Showing extensions in File Explorer Options (View tab) shows the real name. A program named like a document is a warning sign, so do not open it again.

#### Check question 35

A chat, with its history: "Erica, Travel", Chat with the help desk.

> (Erica, Travel, at the left) I am taking my laptop on a week-long trip with no charger until I get there. I want all my open documents back exactly as they are when I open it, and I do not want the battery to drain on the way. Hibernate is on in this laptop’s power menu.

**Which power state fits?**
(the options come in an order that depends on the seed of the question)
- Hibernate: saves the open work to the drive, then powers off (right)
- Sleep: it keeps the open work in memory on a trickle of power — if chosen: Sleep uses a little power all the time. Over a week the battery could run out, and unsaved work would be lost.
- Shut down with fast startup on, so it starts quickly on the trip — if chosen: Shut down closes the programs. Fast startup only speeds up the next start; the open documents are not kept.
- Lock the screen with Windows and L and close the lid — if chosen: Lock keeps everything running behind the lock screen, so the battery keeps draining.

After the answer: the deciding words are marked. Reason: Hibernate saves what is open to the drive and powers off. Sleep keeps it in memory with a little power. Shut down closes everything. The need was “work kept” and “no drain”, and only hibernate does both.

## The result

For example "8 of 8: passed" or "6 of 8: not yet", each rule above shown as met or not met, then every answer with its feedback, the missed ones first.
