# IT Help Desk: Mac and Linux

Revision 2, live. Part: Mac and Linux. Where the subject ends up: Take a ticket you have never seen (a user's email, chat or call about a computer, phone, printer, network, account or security problem) and work it the way a help desk technician does: sort it and set its priority, get the user's story and what changed, try the known fix with a limit, then narrow it down with the cheapest test that splits what works from what does not, fix one thing at a time, confirm with the user and write it up, or hand it on with everything you found; and know every fact and scenario on both CompTIA A+ exams well enough to pass them.

## The why

A designer calls: the spreadsheet app on their Mac has frozen. Ten minutes later a server engineer wants to know which file tells Linux which name server to use. You have never used either, but nearly everything on a Mac or in Linux has a Windows counterpart.
Here you learn each Mac tool and Linux command by the Windows tool it matches, as the A+ exam pairs them, then practice the names and jobs.

## Step 1: The same jobs under other names

A Mac or Linux machine does the same jobs as Windows: install a program, find a file, stop a stuck app, back up, check the network. Only the names change.
macOS is the system on Apple’s Mac computers. Linux is a free system that runs most servers, in versions called distributions, such as Ubuntu and Fedora, mostly used by typing commands in a terminal.

## Step 2: Mac programs: on and off

A plain table, "Four ways a Mac program arrives":

> It comes as  |  What it is  |  What you do  |  In Windows  (the column heads)
> .dmg  |  A disk image: opens like a disc, app inside  |  Drag the app to Applications, then eject the image  |  Like a mountable ISO
> .pkg  |  An installer package: a setup program  |  Follow the steps; may need an admin password  |  An .msi installer
> .app  |  The application itself  |  Run it, or drag it into Applications  |  A portable program
> App Store  |  Apple’s store for Mac apps  |  Sign in with an Apple ID, click Get  |  The Microsoft Store

To remove an app, drag it from Applications to the Trash.

## Step 3: Where things live on a Mac

A plain table, "The Mac’s system folders":

> Folder  |  What is in it  |  In Windows  (the column heads)
> /Applications  |  Installed apps, for everyone  |  Program Files
> /Users  |  A home folder per person  |  C:\Users
> /Library  |  Settings for every user  |  ProgramData
> /System  |  macOS itself, protected  |  C:\Windows
> ~/Library  |  One person’s settings and app data, in their home folder  |  AppData

## Step 4: Apple ID, company rules, Mac care

An Apple ID is the account that signs a person in to the App Store, iCloud, iMessage and FaceTime. A company can manage its Macs and limit them, such as which apps and Apple IDs are allowed. A company Mac that refuses an install and names a company rule is not broken.
Care for a Mac is the usual list: backups (Time Machine), antivirus, updates and patches. Rapid Security Response is Apple’s quick security update between big updates; the A+ exam uses that name, and current Macs call it Background Security Improvements.

A plain table, "System Settings: the Mac’s Settings":

> Area  |  What it controls  (the column heads)
> Displays  |  Screens, brightness
> Network  |  Wi-Fi and wired
> Printers & Scanners  |  Printers, scanners
> Privacy & Security  |  Which apps may use camera, microphone, files
> Accessibility  |  Aids for sight and hearing
> General, then Time Machine  |  The backup drive

## Step 5: Mac tools by Windows counterpart

A plain table, "Tool by tool":

> On the Mac  |  In Windows  |  What it does  (the column heads)
> Spotlight  |  The taskbar search box  |  Finds files, apps and mail by name
> Force Quit  |  Task Manager, End task  |  Stops one frozen app
> Keychain  |  Credential Manager  |  Stores saved passwords and certificates (files that prove who a site or person is)
> Time Machine  |  File History  |  Backs up the Mac; restores older file copies
> Finder  |  File Explorer  |  Browses files
> Dock  |  The taskbar  |  App shortcuts
> Mission Control  |  Task View  |  Shows all open windows and desktops
> Disk Utility  |  Disk Management, chkdsk  |  Checks and repairs (First Aid), formats drives
> FileVault  |  BitLocker  |  Encrypts the startup drive
> Terminal  |  Command Prompt, PowerShell  |  A window for typing commands
> iCloud  |  OneDrive  |  Apple’s cloud, on the Apple ID
> Continuity  |  Phone Link, roughly  |  Links a Mac with an iPhone or iPad
> Gestures  |  Touchpad gestures  |  Trackpad swipes, pinches

## Step 6: Linux: files and folders

A plain table, "File commands, with the Windows command beside each":

> Linux  |  In Windows  |  What it does  (the column heads)
> ls  |  dir  |  Lists files and folders here
> pwd  |  cd on its own  |  Prints the current folder’s path
> mv  |  move and ren  |  Moves or renames a file
> cp  |  copy  |  Copies a file
> rm  |  del  |  Removes a file, no Recycle Bin
> chmod  |  icacls  |  Changes who may read, write or run a file
> chown  |  takeown  |  Changes a file’s owner
> grep  |  findstr  |  Finds lines with certain words in files
> find  |  dir /s  |  Finds files by name, size, date
> fsck  |  chkdsk  |  Checks, repairs a file system
> mount  |  Assigning a drive letter, roughly  |  Attaches a drive so its files show in a folder
> nano  |  Notepad  |  A terminal text editor

## Step 7: Linux: information and the network

A plain table, "The machine and the network":

> Linux  |  In Windows  |  What it does  (the column heads)
> top  |  Task Manager  |  Live list of running programs and how busy each is
> ps  |  tasklist  |  List of running programs at one moment
> df  |  The drive bars in This PC  |  Used and free space per drive
> du  |  A folder’s properties  |  Room one folder takes up
> cat  |  type  |  Prints a file’s contents
> man  |  The help for a command  |  Shows a command’s manual
> ip  |  ipconfig  |  Shows this machine’s addresses
> ping  |  ping  |  Tests if another computer answers
> dig  |  nslookup  |  Looks up a name in DNS
> traceroute  |  tracert  |  Lists each stop on the way to a computer
> curl  |  curl.exe, in Windows 10 and later  |  Fetches a web address

## Step 8: Linux: root, programs, config, start-up

Root is the account that can change anything on a Linux machine, like Administrator in Windows but with no limits. su switches to another account (root if none is named). sudo runs one command with root’s rights using your own password, like Run as administrator. Programs install with apt on Ubuntu and Debian, dnf on Fedora and Red Hat. On “Permission denied”, installing a program needs root, so put sudo in front; running your own file needs its run permission, so use chmod.

A plain table, "Files in /etc, where Linux keeps settings":

> File  |  What it holds  |  In Windows  (the column heads)
> /etc/passwd  |  Accounts (not the passwords)  |  The list of users
> /etc/shadow  |  Scrambled passwords; root only  |  No plain match
> /etc/hosts  |  Names and addresses checked before DNS  |  The hosts file, of the same name
> /etc/fstab  |  Drives to attach at start-up  |  No plain match
> /etc/resolv.conf  |  Name servers the machine uses  |  The network settings

Start-up extends the chain you know: power, start-up test, firmware, boot drive. On Linux the bootloader then loads the kernel, the core of the system. The kernel starts systemd, which starts the services. Then comes sign-in.

## Step 9: Using a Windows name on Mac or Linux

A wrong idea, marked wrong: “Open Task Manager and run ipconfig on the Linux machine.”
The right line: Neither exists there. Give the user the counterpart: Force Quit or top for Task Manager, ip for ipconfig.

## Step 10: Staying signed in as root

A wrong idea, marked wrong: “It keeps saying Permission denied, so I will stay signed in as root.”
The right line: “Permission denied” is Linux doing its job. Root can change or delete anything, so one typo becomes a disaster; sudo gives root’s rights to one command only.

## Step 11: A worked example

A chat, with its history: "Tomas, Engineering", Chat with the help desk.

> (Tomas, Engineering, at the left) My Linux workstation will not open intranet.example.com. Typing the number 10.0.4.20 into the browser opens the same page. Everyone else on my row is fine.

A plain table, "What Tomas typed at the terminal, and what came back":

> Command  |  What it printed  (the column heads)
> ping -c 2 10.0.4.20  |  2 packets transmitted, 2 received, 0% packet loss
> dig intranet.example.com  |  connection timed out; no servers could be reached
> cat /etc/resolv.conf  |  nameserver 10.0.4.9

A plain table, "From the desk’s network notes":

> Note  (the column heads)
> The company’s name servers are 10.0.4.2 and 10.0.4.3. The old one, 10.0.4.9, was switched off last week.

Before the working, the learner may commit to a choice (not scored, not stored):
**Typing the number opens the page. What does that show?**
(the options come in an order that depends on the seed of the question)
- The link and the address work, so only the name lookup is failing.
- The network is down for their machine, so check the cable first.
- The intranet server is broken, so wait for it to be fixed.
- The browser is damaged, so remove it and install it again.

The working, one step at a time:
1. Write down every cause that fits “this page will not open”.: The cable or Wi-Fi; no address; the gateway; the name lookup; the intranet server; the browser.
1. Name your favorite cause and test it with the cheapest check.: The network is down. Ping the number (-c 2 sends two test messages and stops): two replies, no loss. The cable, the address and the gateway are fine.
1. Test the next link: the name lookup.: dig is the Linux nslookup. It looks up the name and gets no answer: no server could be reached. The computer queries a server that is not answering.
1. Find which server the computer uses.: cat prints a file, as type does in Windows. /etc/resolv.conf lists the name servers. It lists 10.0.4.9, the one switched off last week.
1. Change one thing, then check it.: Point the computer at 10.0.4.2 (through the network settings that write the file), run dig again, and have Tomas open the page. The first guess cost one ping; the answer was one line in one file.

Then the answer: The link and the address work, so only the name lookup is failing. The ping by number worked, so the link, the address and the gateway are fine. dig failed and /etc/resolv.conf lists a name server that was switched off, so the name lookup is the broken link.

## Step 12: Questions

4 questions, listed, with help (shown). A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 1

A chat, with its history: "Dorothy, Accounts", Chat with the help desk.

> (Dorothy, Accounts, at the left) **The spreadsheet app on my Mac froze. The spinning wheel has been there for five minutes and nothing I click works. My email and browser are fine.**

Help on screen: the words that decide it are marked.

**In Windows you would use Task Manager and End task. What is the Mac’s way to close just that app?**
(the options come in an order that depends on the seed of the question)
- Force Quit, which lists the open apps and stops the frozen one (right)
- Restart the Mac, so the frozen app starts again from nothing — if chosen: A restart works but closes the email and the browser too, and loses what is not saved in them. Force Quit stops only the frozen app.
- Spotlight, searching for the app so that it opens a new window — if chosen: Spotlight finds and opens things. It cannot stop an app that is already running.
- Mission Control, dragging the frozen window off to another desktop — if chosen: Mission Control only shows windows and desktops side by side. It does not close an app.

After the answer: the deciding words are marked. Reason: A frozen app on a Mac that otherwise works is the job of Force Quit, the counterpart of End task in Task Manager. It stops that one app and leaves the rest running.

#### Item 2

A chat, with its history: "Leticia, HR", Chat with the help desk.

> (Leticia, HR, at the left) **I saved a file called “Offer letter template” on my Mac last week and I cannot remember which folder. I only know its name.**

Help on screen: the words that decide it are marked.

**Which Mac tool finds a file from its name?**
(the options come in an order that depends on the seed of the question)
- Spotlight, which finds files, apps and mail from a name typed (right)
- The Dock, which holds shortcuts to the apps used most often — if chosen: The Dock is the Mac’s taskbar: it holds apps. It does not search for a file.
- Keychain, which keeps the passwords and certificates saved — if chosen: Keychain keeps saved passwords. It does not look for files.
- Time Machine, which keeps older copies of the files on a drive — if chosen: Time Machine restores older copies from a backup. It is not a search by name.

After the answer: the deciding words are marked. Reason: Finding a file from its name is search: the counterpart of the Windows search box is Spotlight.

#### Item 3

A chat, with its history: "Evelyn, Server team", Chat with the help desk.

> (Evelyn, Server team, at the left) **I have a terminal open on a Linux machine. I want to see which files are in the folder I am in. In Windows I would type dir.**

Help on screen: the words that decide it are marked.

**Which Linux command does that?**
(the options come in an order that depends on the seed of the question)
- ls, which lists the files and folders in the folder you are in (right)
- pwd, which shows the path of the folder you are standing in — if chosen: pwd prints the name of the folder you are in, not what is inside it.
- cat, which prints the text that is inside one file you name — if chosen: cat shows the contents of one file. It does not list a folder.
- cp, which copies a file or folder from one place to another — if chosen: cp copies. It does not show anything.

After the answer: the deciding words are marked. Reason: dir lists a folder in Windows; ls lists a folder on Linux. pwd names the folder you are in, cat prints one file.

#### Item 4

A chat, with its history: "Jeanne, Build team", Chat with the help desk.

> (Jeanne, Build team, at the left) **Our Linux build machine feels slow. On Windows I would open Task Manager and sort by CPU. What do I type in the terminal to watch the busiest programs live?**

Help on screen: the words that decide it are marked.

**Which command?**
(the options come in an order that depends on the seed of the question)
- top, a list of running programs that updates as they use more or less (right)
- ps, a list of the running programs as they were at one moment — if chosen: ps lists the programs once and stops. It does not update, so you cannot watch it.
- df, a list of how much free space each drive has right now — if chosen: df is about disk space, not about running programs.
- du, a list of how much room each folder takes up on a drive — if chosen: du measures folders. It does not show running programs.

After the answer: the deciding words are marked. Reason: A live list of busy programs is top, the Linux counterpart of Task Manager. ps lists them once; df and du are about disk space.

Then a screen: you can stop here, your place is kept.

## Step 13: Questions

6 questions, shuffle. A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 5

A chat, with its history: "Yvonne, Design", Chat with the help desk.

> (Yvonne, Design, at the left) I saved over a logo file on my Mac on Tuesday and I need Monday’s copy. An external drive is plugged into the Mac and it has been backing the Mac up every hour.

**Which Mac tool brings back an older copy of a file?**
(the options come in an order that depends on the seed of the question)
- Time Machine, which keeps hourly copies on the drive (right)
- Disk Utility, which checks and repairs the drive itself — if chosen: Disk Utility looks after drives. It holds no older copies of files.
- FileVault, which scrambles the Mac’s drive so thieves cannot read it — if chosen: FileVault encrypts the drive. It does not keep older copies.
- Keychain, which stores the passwords the Mac has saved — if chosen: Keychain stores passwords, not files.

After the answer: the deciding words are marked. Reason: An older copy of a file comes from the backup. The Mac’s backup is Time Machine, the counterpart of File History.

#### Item 6

A chat, with its history: "Lionel, Purchasing", Chat with the help desk.

> (Lionel, Purchasing, at the left) Since my Mac was rebuilt, the supplier’s portal asks for my login every time. The old Mac filled it in for me. I want to see which logins this Mac has saved.

**Which Mac tool stores saved logins?**
(the options come in an order that depends on the seed of the question)
- Keychain, which holds saved passwords and certificates (right)
- Finder, which shows the files and folders on the Mac — if chosen: Finder is the Mac’s File Explorer. It browses files, not saved passwords.
- Continuity, which lets an iPhone and the Mac work together — if chosen: Continuity connects the Mac to an iPhone or iPad. It does not store passwords.
- Mission Control, which shows every open window and desktop — if chosen: Mission Control is for windows and desktops.

After the answer: the deciding words are marked. Reason: Saved passwords and certificates live in Keychain, the counterpart of Credential Manager.

#### Item 7

A chat, with its history: "Lisa, Marketing", Chat with the help desk.

> (Lisa, Marketing, at the left) I downloaded a program called Notes-Pro.dmg. When I double-click it, a small window opens with the app’s icon and an arrow pointing to a folder icon named Applications.

**What installs it?**
(the options come in an order that depends on the seed of the question)
- Drag the app’s icon onto Applications, then eject the disk image (right)
- Drag the .dmg file itself into the Applications folder and open it there — if chosen: The .dmg is only the container. The app inside it is what belongs in Applications.
- Keep the window open and start the app from the disk image each time — if chosen: It would run from the image, and stop working once the image is ejected or the Mac restarts. The app has to be copied into Applications.
- Look in the window for a setup.exe and run that to install it — if chosen: A Mac does not run Windows .exe files. The drag into Applications is the whole install.

After the answer: the deciding words are marked. Reason: A .dmg opens like a disk. The app inside is dragged into /Applications, which is the whole install. A .pkg runs an installer instead, and the App Store installs with the Apple ID.

#### Item 8

A chat, with its history: "Gloria, Support", Chat with the help desk.

> (Gloria, Support, at the left) On my Ubuntu laptop I typed apt install htop and it answered “Permission denied”. I was told never to stay logged in as root.

**What is the right way to run that one command?**
(the options come in an order that depends on the seed of the question)
- Put sudo in front of the command and give your own password (right)
- Log out and sign in as root, then stay in that account from now on — if chosen: Root can change or delete anything. Staying in it makes every typing mistake a disaster. sudo gives root’s rights for one command only.
- Run the command again from another folder, in case this one is locked — if chosen: The folder is not the problem. The command only needed root’s rights.
- Look for a downloadable installer to run, as you would on Windows — if chosen: Ubuntu installs programs with apt, and apt needs root’s rights, which sudo provides.

After the answer: the deciding words are marked. Reason: Installing programs changes the whole system, so it needs root’s rights. sudo gives them for one command: the counterpart of Run as administrator.

#### Item 9

A chat, with its history: "Meera, Office manager", Chat with the help desk.

> (Meera, Office manager, at the left) The Linux file server says “No space left on device” when I save. I want to see how full each drive is.

**Which command shows the free space on each drive?**
(the options come in an order that depends on the seed of the question)
- df, which prints the size, the used space and the free space of each drive (right)
- du, which adds up how much room one folder and what is in it take up — if chosen: du measures a folder. It is the next step once df shows a full drive, to find what is big.
- top, which lists the running programs and how busy each one is — if chosen: top is about running programs, not about space.
- ps, which lists the programs that are running at this moment — if chosen: ps lists programs, not drives.

After the answer: the deciding words are marked. Reason: df shows how full each drive is, like the drive bars in Windows. du then finds which folder takes the room.

#### Item 10

A chat, with its history: "Gulnara, Web team", Chat with the help desk.

> (Gulnara, Web team, at the left) Our site’s name stopped working this morning. On a Linux machine I want to ask DNS for the address behind www.example.com and see the answer, as nslookup does in Windows.

**Which command looks up the address of a name in DNS?**
(the options come in an order that depends on the seed of the question)
- dig, which queries a name server and prints what it answers (right)
- traceroute, which lists each stop on the way to a computer — if chosen: traceroute shows the path to a computer. It does not look up a name in DNS.
- ip, which shows this machine’s own connections and addresses — if chosen: ip shows this machine’s addresses, not what DNS answers for a name.
- curl, which fetches a web page and prints what it holds — if chosen: curl fetches a page. It would fail without the lookup it needs, and shows nothing about it.

After the answer: the deciding words are marked. Reason: Asking DNS for a name’s address is dig, the counterpart of nslookup.

Then a screen: you can stop here, your place is kept.

## Step 14: Questions

6 questions, shuffle, with about 30% from earlier lessons mixed in, unlabeled. A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 11

A chat, with its history: "Pilar, Engineering", Chat with the help desk.

> (Pilar, Engineering, at the left) The second drive on my Linux workstation is missing after every restart, and I have to mount it by hand each morning. I want Linux to attach it by itself at start-up.

**Which file lists the drives to attach at start-up?**
(the options come in an order that depends on the seed of the question)
- /etc/fstab (right)
- /etc/passwd — if chosen: /etc/passwd lists the accounts on the machine. It has nothing about drives.
- /etc/hosts — if chosen: /etc/hosts lists names and addresses that the computer checks before it queries DNS.
- /etc/resolv.conf — if chosen: /etc/resolv.conf lists the name servers the computer uses. It has nothing about drives.

After the answer: the deciding words are marked. Reason: /etc/fstab names the drives mounted at start-up. mount attaches one by hand; fstab does it every time the machine starts.

#### Item 12

A chat, with its history: "Isidro, Operations", Chat with the help desk.

> (Isidro, Operations, at the left) My boss is taking a company MacBook abroad. If it is lost, nobody must be able to read what is on its drive. Windows has BitLocker for this.

**What do you use on a Mac for that job?**
(the options come in an order that depends on the seed of the question)
- FileVault, which encrypts the whole startup drive (right)
- Disk Utility, which erases, partitions and checks drives — if chosen: Disk Utility looks after drives. It does not protect what is on them.
- Time Machine, which backs the Mac up to another drive — if chosen: A backup helps after a loss but does not stop anyone reading the lost Mac.
- Keychain, which holds the passwords the Mac has saved — if chosen: Keychain stores passwords. It does not encrypt the drive.

After the answer: the deciding words are marked. Reason: Making a lost laptop’s drive unreadable is encryption. The Mac’s counterpart of BitLocker is FileVault.

#### Item 13

A chat, with its history: "Claire, Design", Chat with the help desk.

> (Claire, Design, at the left) My new Ubuntu desktop needs the Vim text editor installed from the command line. A friend on Fedora says to use dnf.

**Which do I use on Ubuntu?**
(the options come in an order that depends on the seed of the question)
- apt, the package tool that Ubuntu uses (right)
- dnf, the one package tool that every Linux uses — if chosen: dnf belongs to Fedora and Red Hat. Ubuntu uses apt.
- mount, to attach the editor to the desktop — if chosen: mount attaches a drive to a folder. It installs nothing.
- A .dmg from the vendor’s site, opened by double-clicking — if chosen: A .dmg is a Mac file. Linux installs through apt or dnf.

After the answer: the deciding words are marked. Reason: Both apt and dnf install programs from a list kept by the distribution, the version of Linux in use. Ubuntu uses apt; Fedora uses dnf.

#### Item 14

A chat, with its history: "Rohan, Finance", Chat with the help desk.

> (Rohan, Finance, at the left) An external drive shows up gray in Disk Utility and will not open. I need to check it for errors. On Windows I would use chkdsk. The files on it are not backed up anywhere.

**What do I do first?**
(the options come in an order that depends on the seed of the question)
- In Disk Utility, try to mount the drive and copy off what can be read, then run First Aid (right)
- Erase the drive in Disk Utility, then put the files back from it — if chosen: Erase wipes what is on it. The files are not backed up, so an erase destroys the only copy.
- Restore the drive from Time Machine on the same screen — if chosen: The files on it are not backed up, so Time Machine holds nothing to restore.
- Run First Aid at once to check and repair the drive — if chosen: First Aid rewrites the drive, and nothing is copied off yet. The files are the only copy, so they come first.

After the answer: the deciding words are marked. Reason: A drive that will not open is checked with Disk Utility (First Aid), the counterpart of chkdsk. Because the drive will not open, copying may not work; whatever can be read is copied first, then First Aid, and an erase only once the files are copied or given up.

#### Item 15

A question the phone reads aloud, never by itself: a button "Hear the question" (then "Hear it again") reads it with a voice on the phone when the learner taps, and once they have tapped the next question in the run is read when they tap Next. A phone with no voice of its own shows the words and says so. Its words: **Linux keeps a short list of names and addresses that the computer reads before it queries DNS.**

**Type the name of the file.**
- One box and "Answer" (shut until something is typed; Enter sends it), and "Not yet", which answers with nothing and shows the answers. "Not sure? Tap Not yet to see the answers." Nothing is marked before the answer.
- What counts as the same: capital letters, punctuation, "a", "an", "the" and "and" do not matter; a number in words is the number ("twenty-seven" is 27); words in brackets are optional; one small misspelling in the whole answer is forgiven (a word that is one letter off, in words of four letters or more); parts of an answer said in any order. A word left out or added, or another word, is a miss.
- After: the mark (Right, Not this one, or "Not yet") with "You said: …", then the accepted answers, every one, the one given marked "You gave this one" (and "Words in brackets are optional." when some words are in brackets). After a miss with something typed: "If what you said means the same, say so. It counts this time, and the question comes back later to be sure." with the button "My answer means the same". It counts right in that sitting (shown as "Counted on your word"), is logged and listed under the result and in the results, and is not a good day for the schedule, so the question comes back.
- The accepted answers shown after (Accepted answers):
  - (etc) hosts

After the answer: Reason: It is /etc/hosts, the same job as the hosts file in Windows. /etc/resolv.conf is the other name file: it lists the name servers the computer uses.

#### Item 16

A chat, with its history: "Homer, IT", Chat with the help desk.

> (Homer, IT, at the left) A security hole in Safari is in the news. The company says the Macs get a fix “today”, but the next big macOS update is weeks away.

**What is Rapid Security Response, as the exam names it?**
(the options come in an order that depends on the seed of the question)
- Apple’s quick security update, sent between the big updates (right)
- A tool that finds and removes viruses on the Mac — if chosen: That is antivirus. Rapid Security Response installs fixes from Apple.
- A copy of the whole Mac kept on an external drive — if chosen: That is a backup, which Time Machine makes.
- A way to lock the Mac from far away when it is stolen — if chosen: It is about security fixes, not about locking a lost Mac.

After the answer: the deciding words are marked. Reason: Rapid Security Response is Apple’s quick security update between the big updates (now called Background Security Improvements): part of keeping the Mac updated, with antivirus and backups kept alongside.

Then a screen: you can stop here, your place is kept.

## The check

8 new questions, no help. No answer is shown until the end. The questions come in mixed order.

To pass:
- At least 7 right

#### Check question 17

A chat, with its history: "Pavan, Sales", Chat with the help desk.

> (Pavan, Sales, at the left) I have fourteen windows open across three desktops on my Mac and I have lost the budget spreadsheet.

**What shows every open window and desktop on a Mac?**
(the options come in an order that depends on the seed of the question)
- Mission Control, which spreads out all windows and desktops (right)
- Spotlight, which finds a file from the words in its name — if chosen: Spotlight searches for files and apps. It does not lay out the open windows.
- The Dock, which holds shortcuts to the apps used most often — if chosen: The Dock is the Mac’s taskbar. It shows apps, not every window and desktop.
- Force Quit, which lists the open apps that can be stopped — if chosen: Force Quit stops apps. It does not show windows or desktops.

After the answer: the deciding words are marked. Reason: Seeing every window and desktop together is Mission Control, the counterpart of Task View.

#### Check question 18

The question, read aloud as above: **On a Mac, which folder holds the apps that are installed for everyone?**

**Type the folder name.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - Applications

After the answer: Reason: Installed apps live in /Applications. /Users holds each person’s files, /Library holds settings shared by every user and /System holds macOS itself.

#### Check question 19

The question, read aloud as above: **What is the Mac’s own backup tool called, the one that keeps copies of files that can be brought back?**

**Type its name.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - Time Machine

After the answer: Reason: Time Machine is the Mac’s backup, the counterpart of File History. It keeps copies on a drive and lets you go back to an earlier one.

#### Check question 20

A chat, with its history: "Saul, Legal", Chat with the help desk.

> (Saul, Legal, at the left) I tried to install a game from the App Store on my company Mac with my personal Apple ID. A message says the company does not allow this. The Mac works normally.

**What is going on?**
(the options come in an order that depends on the seed of the question)
- The company manages the Mac and limits what is installed and which Apple ID is used (right)
- The App Store is broken on this Mac, so reinstall macOS to fix it — if chosen: The message names a company rule, and the Mac works normally. Reinstalling would erase their files to fix something that is not broken.
- FileVault is switched on, so it blocks every new app from loading — if chosen: FileVault encrypts the drive. It does not decide which apps may be installed.
- The Mac is out of date, so run the updates and try the game again — if chosen: An old macOS does not produce a message about company rules.

After the answer: the deciding words are marked. Reason: The message names a company rule. A company can manage its Macs, limiting what is installed and which Apple ID is used, so it is not a fault to repair.

#### Check question 21

A chat, with its history: "Conrad, Operations", Chat with the help desk.

> (Conrad, Operations, at the left) I own the file backup.sh on a Linux machine, but when I type ./backup.sh it says “Permission denied”. The file is not marked as allowed to run.

**Which command changes who may read, write or run a file?**
(the options come in an order that depends on the seed of the question)
- chmod, which changes the permissions of a file (right)
- chown, which changes the person who owns a file — if chosen: chown changes the owner. Conrad already owns the file; the permissions are what is wrong.
- mv, which moves a file or gives it a new name — if chosen: mv moves or renames the file. It does not change its permissions.
- grep, which searches the text inside files for a word — if chosen: grep searches inside files. It changes nothing.

After the answer: the deciding words are marked. Reason: chmod changes what a file allows (read, write, run); chown changes who owns it. The file is already theirs, so chmod is the fix.

#### Check question 22

The question, read aloud as above: **Linux keeps the scrambled passwords of its accounts in a file in /etc that only root can read. The list of the accounts themselves is /etc/passwd.**

**Type the name of the file.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - (etc) shadow

After the answer: Reason: /etc/shadow holds the scrambled passwords and only root reads it. /etc/passwd lists the accounts themselves, without their passwords.

#### Check question 23

A chat, with its history: "Whitney, Service desk", Chat with the help desk.

> (Whitney, Service desk, at the left) A Linux machine passes its start-up test and the firmware finds the boot drive, but nothing loads after that. I need to know which part comes next.

**Which part runs next and loads the kernel?**
(the options come in an order that depends on the seed of the question)
- The bootloader, the first program that starts from the boot drive (right)
- systemd, the program that starts the services — if chosen: systemd starts the services after the kernel is running, so it comes later.
- sudo, the command that grants root’s rights — if chosen: sudo is a command typed after sign-in. It has no part in starting the machine.
- fsck, the check that repairs the file system — if chosen: fsck checks a file system. It is not a stage of start-up.

After the answer: the deciding words are marked. Reason: The chain on Linux: firmware, the boot drive, the bootloader, the kernel, systemd (which starts the services), then sign-in. The bootloader loads the kernel.

#### Check question 24

The question, read aloud as above: **In Windows, tracert shows each stop on the way to another computer. What is the Linux command that does the same job?**

**Type the command.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - traceroute

After the answer: Reason: traceroute is the Linux tracert: it lists each stop on the path to a destination.

## The result

For example "8 of 8: passed" or "6 of 8: not yet", each rule above shown as met or not met, then every answer with its feedback, the missed ones first.
