# IT Help Desk: Windows at the command line

Revision 2, draft (the screen carries the draft line). Part: Windows at the command line. Where the subject ends up: Take a ticket you have never seen (a user's email, chat or call about a computer, phone, printer, network, account or security problem) and work it the way a help desk technician does: sort it and set its priority, get the user's story and what changed, try the known fix with a limit, then narrow it down with the cheapest test that splits what works from what does not, fix one thing at a time, confirm with the user and write it up, or hand it on with everything you found; and know every fact and scenario on both CompTIA A+ exams well enough to pass them.

## The why

Rubina in Accounting says the D: drive, where last year’s invoices are, will not open. Rubina’s cousin says to type format D: and start clean. Format would erase every invoice.
Here you learn the Windows commands the exam tests: the job each does, its switches, how to read what it prints, and which destroy data.

## Step 1: The command window

Command Prompt is a window where you type a command and press Enter. The line before your cursor, such as C:\Users\dana>, is the prompt; it shows your folder.
A switch is an extra word after the command, starting with a slash, such as dir /a.
Commands that change disks or Windows’ own files need an administrator window: right-click Command Prompt in the Start menu, choose Run as administrator. In an ordinary window they print “Access is denied”.

## Step 2: Moving around: cd and dir

A plain table, "Navigation commands":

> Command  |  What it does  (the column heads)
> cd C:\Users  |  Change to that folder (cd is change directory; a directory is a folder)
> cd ..  |  Go up one folder
> cd \  |  Go to the top of the drive
> cd /d D:\Data  |  Change folder and drive at once. Plain cd D:\Data at a C: prompt only remembers the folder on D: and stays on C:
> D:  |  Switch drive by typing its letter and a colon
> dir  |  List the files and folders in the current folder
> dir /a  |  Include hidden and system files
> dir /s  |  Include subfolders too
> dir /w  |  List the names across the screen

In a dir listing, <DIR> marks a folder, and the last two lines count the files and folders and give the free space on the drive in bytes.

## Step 3: Checking a drive: chkdsk

A plain table, "chkdsk checks a drive’s file system (the list of what is where)":

> Command  |  What it does  (the column heads)
> chkdsk D:  |  Reads only
> chkdsk D: /f  |  Fixes the errors it finds
> chkdsk D: /r  |  Also looks for bad sectors (damaged spots) and recovers what it can read. Includes /f; takes a long time

chkdsk needs an administrator window. On the drive Windows runs from, it prints “Cannot lock current drive” and offers to run at the next restart: answer Y and restart; the check runs before Windows loads. A plain chkdsk that finds errors prints “Errors found. CHKDSK cannot continue in read-only mode.”: rerun it with /f.

## Step 4: Erasing a drive: format and diskpart

A plain table, "Two commands that prepare a drive":

> Command  |  What it does  (the column heads)
> format D: /q  |  Writes a new file system, so the drive looks empty (/fs:ntfs picks it). With /q (quick) the old data stays where recovery tools can find it; without /q the drive is overwritten with zeros. Windows warns “ALL DATA ... WILL BE LOST!”
> diskpart  |  Opens its own prompt, DISKPART>, for whole disks and their partitions (slices of a disk)

A plain table, "Inside diskpart":

> Type  |  What it does  (the column heads)
> list disk  |  Lists disks by number and size
> select disk 2  |  Aims later commands at disk 2
> clean  |  Removes the partition information from the selected disk, so Windows sees nothing; tools can still recover the data. clean all writes zeros over every sector
> create partition primary  |  Makes one partition of the whole disk
> format fs=ntfs quick  |  Writes the file system on it
> assign letter=E  |  Gives it a drive letter. exit leaves diskpart

Tell disks apart by size, not position.

## Step 5: Commands that cannot be undone

A plain table, "What each destroys":

> Command  |  What goes  (the column heads)
> format  |  Everything on the drive, as far as Windows can see; the wrong letter erases the wrong drive
> diskpart, clean  |  Every partition on the selected disk, so every file vanishes; the wrong disk number is the usual mistake
> rmdir /s  |  A folder and everything in it; deletes here skip the Recycle Bin
> robocopy /mir  |  Anything in the destination that is not in the source
> net user name /delete  |  The account; a new one with the same name is a different account

Before any of these, copy the files somewhere that works, read the drive letter or disk number twice (by size) and change one thing at a time. A drive that clicks is failing: copy what matters off and replace it; chkdsk /r reads every sector, so it is not the next step.

## Step 6: Folders and files

A plain table, "File commands":

> Command  |  What it does  (the column heads)
> md C:\Reports\2026  |  Make a folder (md is make directory); it makes missing folders on the way too
> rmdir C:\OldReports  |  Remove an empty folder. A full one gets “The directory is not empty.”
> rmdir /s /q C:\OldReports  |  Remove the folder and everything in it (/s) without asking (/q)
> robocopy C:\Docs E:\Backup /e  |  Copy a folder with all its subfolders, empty ones too
> robocopy C:\Docs E:\Backup /mir  |  Mirror: copy, and delete from the destination what the source lacks
> copy a.txt E:\Backup /v /y  |  The older command, for one folder’s files. /v checks the copy was written correctly; /y overwrites without asking

A plain table, "robocopy against copy":

> Compared on  |  copy  |  robocopy  (the column heads)
> Subfolders  |  One folder’s files only  |  Subfolders too, with /e
> A failure  |  Has no retry setting  |  Retries, moves on, counts what failed
> Next run  |  Copies everything again  |  Skips files already the same: copies only changes

robocopy retries a failed file a million times by default; /r:3 /w:5 limits that to three retries, five seconds apart. Its summary counts Copied, Skipped, FAILED and Extras (files only in the destination).

## Step 7: Network: netstat and net use

A plain table, "Two more network commands":

> Command  |  What it does  (the column heads)
> netstat -an  |  Lists connections and the ports waiting for one (-a is all, -n shows numbers, not names)
> netstat -ano  |  Adds each program’s process ID (PID); find it on Task Manager’s Details tab
> net use  |  Lists the drive letters mapped to shared folders
> net use Z: \\fileserver\Sales  |  Map Z: to the Sales folder on the server fileserver
> net use Z: /delete  |  Remove the mapping

In netstat, LISTENING means the computer is waiting for connections on that port and ESTABLISHED means a conversation is open now. In net use, Unavailable means the mapping is still there but the share does not answer. Port 3389 is Remote Desktop.

## Step 8: Who and what

A plain table, "Information commands":

> Command  |  What it does  (the column heads)
> hostname  |  Prints the computer’s name
> whoami  |  Prints the account you are signed in as, such as corp\dana. /groups lists its groups
> winver  |  Opens a window with the Windows edition, version and build number
> net user  |  Lists the accounts on this computer
> net user dana  |  Shows one account: active or not, when its password last changed, its groups
> net user dana /active:no  |  Turns the account off (/active:yes on). net user dana * prompts for a new password. Needs an administrator window
> command /?  |  Prints a command’s switches, such as robocopy /?

Before turning an account on or choosing a new password, confirm the caller by the desk’s own check (the number on file, the directory), never by what the caller supplies.

## Step 9: Managing Windows

Group Policy is the rules a company keeps on a central server for its computers and users, such as a screen lock or blocked USB drives.

A plain table, "Management commands":

> Command  |  What it does  (the column heads)
> gpupdate  |  Refreshes Group Policy now, applying what has changed
> gpupdate /force  |  Reapplies every policy, changed or not
> gpresult /r  |  Reports which policies applied to this computer and user, and lists those filtered out with the reason, such as Denied (Security). Changes nothing
> sfc /scannow  |  System File Checker: replaces damaged protected system files with a stored good copy. Needs an administrator window

A plain table, "What sfc /scannow can say":

> It prints  |  It means  (the column heads)
> Windows Resource Protection did not find any integrity violations.  |  No damaged files
> Windows Resource Protection found corrupt files and successfully repaired them.  |  Fixed; restart
> Windows Resource Protection found corrupt files but was unable to fix some of them.  |  Some remain. The log, CBS.log, names them; scanning again changes nothing, so replace the file by hand or hand the ticket on with the log

sfc checks Windows’ own files; chkdsk checks a drive’s file system.

## Step 10: Unreadable, so format it

A wrong idea, marked wrong: “D: will not open, so I will format it. That clears whatever is wrong.”
The right line: It clears the files too, and deletes from Command Prompt skip the Recycle Bin. A drive that will not open may have a damaged file system, which chkdsk repairs. Copy off what you can read first, run chkdsk with no switches, then change one thing.

## Step 11: A worked example

A chat, with its history: "Rubina, Accounting", Chat with the help desk.

> (Rubina, Accounting, at the left) My D: drive, where all of last year’s invoices are, will not open. It says the file or directory is corrupted and unreadable. I have no other copy. My cousin says to just format it and start clean.

Commands you can use: robocopy, chkdsk, format. A working USB drive, E:, is plugged in with plenty of room.

Before the working, the learner may commit to a choice (not scored, not stored):
**Which step comes first?**
(the options come in an order that depends on the seed of the question)
- Copy off what can still be read, to the working USB drive
- Format D: so the drive is clean, then start the year’s invoices again
- Run chkdsk D: /r first, which repairs the drive and recovers the data
- Tell Rubina the drive is dead and order a new one

The working, one step at a time:
1. Take the story and the guess. Rubina has the only copy, and Rubina’s cousin’s guess is format.: Format erases the drive and is aimed at the files that matter most. The guess is put aside until the files are safe.
1. Protect the data first: robocopy D:\ E:\Rescue /e /r:1 /w:1 in an administrator window.: robocopy copies every folder it can read, and with one retry and one second of waiting it does not stall on a bad file. The report says 1,904 files copied, 0 failed. A drive failing under the read would have shown failed files. System Volume Information and $RECYCLE.BIN may show as failures; they are not Rubina’s files.
1. Test the other favorite cause, a failing drive, with the cheapest read-only check: chkdsk D: with no switches.: It prints “Errors found. CHKDSK cannot continue in read-only mode.” The file system has errors, and every file still read, so the drive itself is not shown to be failing. Replacing it is not supported by anything seen.
1. One change: chkdsk D: /f, in the administrator window.: chkdsk fixes the file system errors it found and reports it is done. Nothing else was changed at the same time.
1. Check with Rubina, then write it up.: D: opens and the invoices are there. Rubina confirms. The note holds Rubina’s words, the error text, the copy to E:, the read-only report and the /f repair; the rescue copy stays until Rubina is happy.

Then the answer: Copy off what can still be read, to the working USB drive. The only copy of the invoices was on the drive, so the files were protected before anything else, and the favorite fix, format, was kept out. A read-only chkdsk then showed file system errors rather than a failing drive, and a single /f repair, one change at a time, fixed them.

## Step 12: Questions

4 questions, listed, with help (shown). A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 1

A chat, with its history: "Marcel, Operations", Chat with the help desk.

> (Marcel, Operations, at the left) My second drive, E:, keeps saying files are unreadable. I copied my work off it this morning.

A plain table, "C:\> chkdsk E:":

> What the computer prints  (the column heads)
> The type of the file system is NTFS.
> Stage 1: Examining basic file system structure ...
> Errors found.  CHKDSK cannot continue in read-only mode.  <- marked after the answer

Help on screen: the words that decide it are marked.

**The work is copied off. Which command fixes the errors?**
(the options come in an order that depends on the seed of the question)
- Run chkdsk E: /f, which fixes the file system errors it finds (right)
- Run chkdsk E: again; a second read-only pass may fix them — if chosen: A read-only pass changes nothing, so it will print the same report.
- Run format E: /q, which clears the errors by erasing the drive — if chosen: The drive can be repaired, so erasing it does more than the job needs.
- Run sfc /scannow, which repairs the files on every drive it finds — if chosen: sfc checks Windows’ own system files, not another drive’s file system.

After the answer: the deciding words are marked. Reason: Errors found in read-only mode is chkdsk saying it saw damage and was not allowed to fix it. chkdsk E: /f, in an administrator window, repairs the file system. The files were copied off first, so a repair is safe to try.

#### Item 2

A chat, with its history: "Elias, Sales", Chat with the help desk.

> (Elias, Sales, at the left) **I need the Sales folder on the file server to show up as drive Z: on my laptop. The server is called fileserver and the shared folder is Sales.**

Help on screen: the words that decide it are marked.

**Which command does that?**
(the options come in an order that depends on the seed of the question)
- Type net use Z: \\fileserver\Sales (right)
- Type cd Z: \\fileserver\Sales to move to the folder — if chosen: cd moves around folders the computer already has. It does not create a drive letter.
- Type dir \\fileserver\Sales to open it as drive Z: — if chosen: dir lists a folder but gives it no drive letter.
- Type netstat Z: \\fileserver\Sales to list the connection — if chosen: netstat lists connections and ports. It does not make one.

After the answer: the deciding words are marked. Reason: Mapping a drive letter to a shared folder is the job of net use. The pattern is net use, the letter, then the server and share name; net use alone lists what is mapped and /delete removes one.

#### Item 3

A chat, with its history: "Jocelyn, Design", Chat with the help desk.

> (Jocelyn, Design, at the left) **Each evening I must copy my whole Projects folder, with all its subfolders, to the server share. The Wi-Fi drops now and then, and the copy I use gives me no list of what got there.**

Help on screen: the words that decide it are marked.

**Which command fits?**
(the options come in an order that depends on the seed of the question)
- robocopy C:\Projects \\fileserver\Backup /e /r:3 /w:5 (right)
- copy C:\Projects \\fileserver\Backup /v, then check the result — if chosen: copy takes the files of one folder, not the subfolders, and has no retry setting or summary.
- md \\fileserver\Backup\Projects, then drop the files in — if chosen: md only makes an empty folder. Nothing would be copied into it.
- dir C:\Projects /s, then copy what it lists by hand — if chosen: dir only lists what is there. It copies nothing.

After the answer: the deciding words are marked. Reason: The job is a whole folder tree, over a connection that sometimes drops. robocopy does this: /e includes subfolders, /r:3 /w:5 limits retries to three, five seconds apart, and its report names any file that failed.

#### Item 4

A chat, with its history: "Scott, Reception", Chat with the help desk.

> (Scott, Reception, at the left) **The help desk form wants the name of my computer. I have no idea where to find that.**

Help on screen: the words that decide it are marked.

**Which command prints it?**
(the options come in an order that depends on the seed of the question)
- hostname (right)
- whoami — if chosen: whoami prints the signed-in account, not the computer.
- winver — if chosen: winver shows the Windows edition and version, not the computer’s name.
- net user — if chosen: net user lists the accounts on the computer.

After the answer: the deciding words are marked. Reason: The ticket needs the name of the machine, and hostname prints exactly that. whoami names the account and winver names the Windows version, which are different facts.

Then a screen: you can stop here, your place is kept.

## Step 13: Questions

15 questions, shuffle. A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 5

A chat, with its history: "Joaquim, Intern", Chat with the help desk.

> (Joaquim, Intern, at the left) A tech guide told me to type format D: to fix a drive that is slow. I typed it, and Windows now asks me a question. I have not answered.

A plain table, "C:\> format D:":

> What the computer prints  (the column heads)
> The type of the file system is NTFS.
> WARNING, ALL DATA ON NON-REMOVABLE DISK
> DRIVE D: WILL BE LOST!
> Proceed with Format (Y/N)?

**What do you tell Joaquim?**
(the options come in an order that depends on the seed of the question)
- Answer N and close the window; a format cannot be undone (right)
- Answer Y; the warning is only Windows being extra careful — if chosen: The warning is exact: the format erases everything on D:.
- Answer Y, then restore the files from the Recycle Bin afterward — if chosen: A format does not send files to the Recycle Bin. They are gone from the drive.
- Wait until the drive is no longer slow, then answer Y at last — if chosen: Waiting does not change what the question does. A slow drive and an erase are separate matters.

After the answer: the deciding words are marked. Reason: The prompt says ALL DATA ON DRIVE D: WILL BE LOST. A command-line format has no undo and no Recycle Bin. Answering N cancels it; then find why the drive is slow with a read-only check, after the files are safe.

#### Item 6

A chat, with its history: "Maia, Facilities", Chat with the help desk.

> (Maia, Facilities, at the left) Please clear the USB stick from the old training room so the next person gets an empty one. Its owner says nothing on it is needed. File Explorer shows the stick as 58 GB. It is plugged into a laptop with one internal drive.

A plain table, "DISKPART> list disk":

> What the computer prints  (the column heads)
>   Disk ###  Status         Size     Free     Dyn  Gpt
>   --------  -------------  -------  -------  ---  ---
>   Disk 0    Online          476 GB      0 B        *
>   Disk 1    Online           58 GB      0 B

**What do you do before typing clean?**
(the options come in an order that depends on the seed of the question)
- Type select disk 1, then check its size and volumes again (right)
- Type select disk 0, because the first disk listed is the removable one — if chosen: Disk 0 is 476 GB and holds Windows. Position does not say which disk is the stick; size does.
- Type clean now; diskpart picks the removable disk on its own — if chosen: clean works on the selected disk only. With none selected it stops with an error.
- Type format C: /q on it; new disks are always called C: — if chosen: C: is the laptop’s own drive, not the stick, so the command is aimed at the wrong thing.

After the answer: the deciding words are marked. Reason: clean removes the partitions from whichever disk is selected, so the number matters more than the command. Tell the disks apart by size: 58 GB is the stick, and 476 GB is the laptop’s drive. Select it, check with detail disk or list volume, and only then clean.

#### Item 7

A chat, with its history: "Callum, Finance", Chat with the help desk.

> (Callum, Finance, at the left) Windows said my computer’s main drive has errors. I ran chkdsk C: /f in an administrator window and it printed a question I do not understand.

A plain table, "C:\> chkdsk C: /f":

> What the computer prints  (the column heads)
> The type of the file system is NTFS.
> Cannot lock current drive.
> Chkdsk cannot run because the volume is in use by another process.
> Would you like to schedule this volume to be checked
> the next time the system restarts? (Y/N)

**What does the question mean, and what do you tell Callum?**
(the options come in an order that depends on the seed of the question)
- The drive is in use, so copy the important files off, answer Y and restart (right)
- The drive is too damaged for chkdsk to read, so answer N and replace it — if chosen: Nothing here says the drive is damaged beyond repair. It only says the drive is in use.
- The command needs a different switch, so type chkdsk C: /r and try again — if chosen: /r includes /f and would stop at the same question.
- The window is not running as administrator, so open it again as one — if chosen: That error reads “Access is denied”. This message is about the drive being in use.

After the answer: the deciding words are marked. Reason: “Cannot lock current drive” means the volume is in use, and the drive Windows runs from always is. Answering Y schedules the check for the next start-up. This is a different message from the one an ordinary window gives for a command that needs an administrator.

#### Item 8

A chat, with its history: "Celeste, Records", Chat with the help desk.

> (Celeste, Records, at the left) My laptop has been clicking and slow since this morning, and some files will not open. I have not backed anything up.

**What do you do first?**
(the options come in an order that depends on the seed of the question)
- Copy the important files off now, then replace the drive (right)
- Run chkdsk C: /r first to recover whatever it can read — if chosen: It would read a failing drive for hours and may be the last thing it does. The copy comes first, and /r is not the fix for a clicking drive.
- Format the drive and reinstall Windows, to start with a clean one — if chosen: A format erases the files that have not been backed up.
- Run sfc /scannow; clicking means damaged Windows files — if chosen: Clicking is a sound the drive makes. sfc checks Windows’ files, not the drive.

After the answer: the deciding words are marked. Reason: Clicking and unreadable files point at the drive, and there is no backup. Move 3 comes first: protect the data. A clicking drive is replaced, not repaired, and chkdsk /r is a long read of a drive that is failing.

#### Item 9

A chat, with its history: "Ricardo, IT manager", Chat with the help desk.

> (Ricardo, IT manager, at the left) A user’s Windows keeps crashing since an update. I ran sfc /scannow and pasted what it printed.

A plain table, "C:\Windows\system32> sfc /scannow":

> What the computer prints  (the column heads)
> Beginning system scan.  This process will take some time.
> Beginning verification phase of system scan.
> Verification 100% complete.
> Windows Resource Protection found corrupt files but was unable to fix some of them.
> Details are included in the CBS.Log windir\Logs\CBS\CBS.log.

**What does this tell you?**
(the options come in an order that depends on the seed of the question)
- Some system files stay damaged; put the CBS.log name on the ticket, then replace the named file by hand or hand it on (right)
- The scan did not finish, so run sfc /scannow again until it says no problems at all — if chosen: It finished: verification reached 100 percent. A repeat is likely to say the same, and the log already has the names.
- Windows is fine; the corrupt files message is only a warning that can be ignored — if chosen: It says some files are damaged and unrepaired, and that is the finding.
- The hard drive is failing under the scan, so replace it now — if chosen: sfc checks system files. Damaged ones do not show the drive is at fault.

After the answer: the deciding words are marked. Reason: sfc /scannow has three endings, and this is the third: damage it could not fix. The scan completed. Writing the CBS.log name on the ticket keeps the evidence, and the named files are replaced by hand or the ticket goes on, because the same scan is unlikely to change.

#### Item 10

A chat, with its history: "Ina, HR", Chat with the help desk.

> (Ina, HR, at the left) The Finance mapped drives policy should give every Finance computer the drive F:. This user is in Finance and has no F:.

A plain table, "C:\> gpresult /r":

> What the computer prints  (the column heads)
> USER SETTINGS
>     Applied Group Policy Objects
>         Default Domain Policy
>     The following GPOs were not applied because they were filtered out
>         Finance Mapped Drives
>             Filtering:  Denied (Security)

**What does it show?**
(the options come in an order that depends on the seed of the question)
- It was filtered out for this user; check who the policy is allowed to cover (right)
- The policy has not refreshed yet, so gpupdate /force will apply it to this user — if chosen: A refresh would not help: the report says the policy was denied to this user, not that it was late.
- The computer never reached the server, so no policy applied at all to anyone — if chosen: The Default Domain Policy did apply, so the computer did reach the server.
- The policy applied, but F: is already taken by a USB stick plugged in — if chosen: The policy is listed as filtered out, not as applied.

After the answer: the deciding words are marked. Reason: gpresult /r lists the policies that applied and the ones filtered out, with the reason. Finance Mapped Drives is under “not applied”, with the filtering denied by security, so the fix is in who the policy covers.

#### Item 11

A chat, with its history: "Rodney, Web team", Chat with the help desk.

> (Rodney, Web team, at the left) Staff say the web page on the server SRV2 will not open. I am on SRV2. Is the web service even waiting for visitors?

A plain table, "C:\> netstat -an":

> What the computer prints  (the column heads)
>   Proto  Local Address          Foreign Address        State
>   TCP    0.0.0.0:135            0.0.0.0:0              LISTENING
>   TCP    0.0.0.0:445            0.0.0.0:0              LISTENING
>   TCP    0.0.0.0:3389           0.0.0.0:0              LISTENING
>   TCP    192.168.1.20:3389      192.168.1.55:50412     ESTABLISHED

**What does this show about the web service?**
(the options come in an order that depends on the seed of the question)
- Nothing is listening on port 80 or 443 on SRV2 (right)
- It is running: a connection shows as ESTABLISHED in the list — if chosen: The established connection is on port 3389, remote desktop, not the web.
- The firewall on SRV2 is blocking port 443 for every visitor — if chosen: netstat shows what the computer is doing, not what a firewall does. No firewall evidence is on the screen.
- The server has no network connection at all, so nothing can reach it — if chosen: The list shows a live connection from 192.168.1.55, so the network works.

After the answer: the deciding words are marked. Reason: netstat -an lists each port the computer is waiting on (LISTENING) and each open conversation (ESTABLISHED). The web uses port 80 or 443 and neither is listed, so the service may be stopped or listening elsewhere, and the next step is to look at the service.

#### Item 12

A chat, with its history: "Nalini, Sales", Chat with the help desk.

> (Nalini, Sales, at the left) The Y: drive on my laptop shows a red X. Z: works fine.

A plain table, "C:\> net use":

> What the computer prints  (the column heads)
> Status       Local   Remote                     Network
> -------------------------------------------------------------
> OK           Z:      \\fileserver\Sales         Microsoft Windows Network
> Unavailable  Y:      \\fileserver\Archive       Microsoft Windows Network

**What does it show?**
(the options come in an order that depends on the seed of the question)
- The Archive share does not answer, while Z: on the same server works; look at that share first (right)
- The laptop has lost the network connection, so restart the laptop — if chosen: Z: is OK on the same server. The network is working.
- The mapping was deleted from the laptop, so map the drive again — if chosen: Y: is still listed. It is marked Unavailable, which is different from missing.
- The whole file server is down, so restart the server for everyone — if chosen: Z: reaches the same server, and a restart would cut off everyone using it.

After the answer: the deciding words are marked. Reason: Z: is OK and Y: is Unavailable on the same server, which cuts the problem in half: the laptop and the server are fine and the Archive share is the one that does not answer. Check that share’s state and permissions.

#### Item 13

A chat, with its history: "Liam, Facilities", Chat with the help desk.

> (Liam, Facilities, at the left) I typed rmdir C:\OldReports to clear it out and got an error. How do I make it go?

A plain table, "C:\> rmdir C:\OldReports":

> What the computer prints  (the column heads)
> The directory is not empty.

**What does the message mean, and what next?**
(the options come in an order that depends on the seed of the question)
- Something is inside it; look with dir first, then use rmdir /s only if it can all go (right)
- Windows has locked the folder for now, so restart the computer and try again — if chosen: The message says the folder has contents, not that it is locked.
- Run rmdir /s /q right away; the folder is old and nobody uses it — if chosen: Old does not mean unneeded. /s /q deletes everything inside without asking, and without the Recycle Bin.
- Use md C:\OldReports again to make the folder empty first — if chosen: md makes a new folder. It does not empty an existing one.

After the answer: the deciding words are marked. Reason: “The directory is not empty” is rmdir refusing to remove a folder that still holds files. dir shows what is inside. rmdir /s would remove it all at once and skip the Recycle Bin, so it comes after a look.

#### Item 14

A chat, with its history: "Sue, Archive", Chat with the help desk.

> (Sue, Archive, at the left) I run robocopy C:\Docs E:\Backup /mir every Friday. Last Wednesday I deleted a folder from C:\Docs by mistake, and after the Friday run it is also gone from the backup. This is that Friday’s output.

A plain table, "C:\> robocopy C:\Docs E:\Backup /mir":

> What the computer prints  (the column heads)
>                Total    Copied   Skipped  Mismatch    FAILED    Extras
>     Dirs :        41         0        41         0         0         1
>    Files :      1260         0      1260         0         0       212

**What happened?**
(the options come in an order that depends on the seed of the question)
- /mir makes the backup an exact mirror, so it deleted what the source lacked (right)
- robocopy lost the files while copying them, so run it again with /z — if chosen: /z lets a copy resume. It would not bring back files the mirror removed.
- The drive E: is failing and dropped the folder on its own — if chosen: FAILED is 0 and nothing read badly. The Extras line shows the removal.
- Windows moved them to the Recycle Bin, so restore them from there — if chosen: Command-line deletes skip the Recycle Bin.

After the answer: the deciding words are marked. Reason: /mir copies and then deletes from the destination anything not in the source. 212 files and 1 folder in the Extras column are exactly what Sue deleted from C:\Docs. /e would have copied without deleting.

#### Item 15

A chat, with its history: "Roland, Intern", Chat with the help desk.

> (Roland, Intern, at the left) I am in C:\Users\wes. I typed cd D:\Data and the prompt still says C:. Where am I?

A plain table, "C:\Users\wes> cd D:\Data":

> What the computer prints  (the column heads)
> C:\Users\wes>

**How does Roland get to D:\Data?**
(the options come in an order that depends on the seed of the question)
- Type cd /d D:\Data to switch the drive too (right)
- Type dir D:\Data, which takes Roland into the folder — if chosen: dir lists a folder. It never moves the prompt.
- Type D:\Data on its own line — if chosen: A path alone is not a command. To switch drives, type the letter and a colon.
- Type cd .. twice, to go up to the top of the tree — if chosen: Going up stays on C:, so it cannot reach D:.

After the answer: the deciding words are marked. Reason: Each drive remembers its own current folder, and plain cd only changes that memory. cd /d D:\Data moves the prompt there. Typing D: and then cd \Data does the same in two steps.

#### Item 16

A chat, with its history: "Fern, Warehouse", Chat with the help desk.

> (Fern, Warehouse, at the left) Hi, it is Fern. My sign-in has not worked since Monday. Please turn my account back on right now, I have a delivery to log.

A plain table, "C:\> net user fern":

> What the computer prints  (the column heads)
> User name                    fern
> Full Name                    Fern Ortiz
> Account active               No
> Account expires              Never
> Password last set            10/5/2026 7:41:12 AM
> Local Group Memberships      *Users

**What do you do?**
(the options come in an order that depends on the seed of the question)
- Confirm Fern by the number on file and read the ticket history for why it is off (right)
- Request the employee number from Fern, and if it matches, run net user fern /active:yes — if chosen: A number the caller supplies proves nothing about who is calling. The check must use something the caller did not supply.
- Run net user fern * and give Fern a new password once the old one is read out — if chosen: A password reset for an unchecked caller is worse. The caller must be confirmed first.
- Run net user fern /delete, then make Fern a new account and move the files — if chosen: Deleting the account loses its identity, and the old files would not belong to the new one.

After the answer: the deciding words are marked. Reason: The fault is plain: Account active: No. But before an unlock, a reset or access, the technician confirms the caller by something the caller did not supply, such as the number on file or the directory. Then net user fern /active:yes is one change.

#### Item 17

Guinevere in Purchasing calls the help desk. You answer.

**Guinevere’s D: drive will not open. What do you say?**
- An incoming call from "Guinevere, Purchasing" (Incoming call · 2:40 PM). The turns arrive one after another; the learner picks a reply each time and the next turn follows the reply. Pick what you say. The call goes on from there. Nothing is marked until it ends, and a call is not on a clock.
- turn 1, the other side says: "My D: drive says it is unreadable. My nephew says just format it and the problem goes away." [pushes: Guinevere wants the quickest fix and has a plan ready.]
  - reply "Is there a copy of what is on D: anywhere else?": goes on to turn 2, where the pressure comes back
  - reply "Your nephew is right. Type format D: and press Y.": the call ends (not this one): Format erases the drive, and it holds the only copy of two years of orders. [slip: ran a command that erases data before the data was safe or needed erasing]
  - reply "What exact error words does the drive show, and did it start after a power cut or a bump?": the call ends (not this one): The exact words are worth having later, but the question that decides the order is whether the files exist anywhere else. [slip: replaced a part before the cheap check]
  - reply "I am sorry, that must be worrying. Let me connect to your computer now and run chkdsk D: /r on it, and I will tell you what it finds.": the call ends (not this one): A repair run changes the drive, and a long scan of a damaged one can lose files. Nothing was copied off first. [slip: touched the machine before protecting data that has no other copy]
- turn 2, the other side says: "No. It is all on D:. Two years of purchase orders." [pushes: Guinevere is worried now.]
  - reply "I will copy off what can be read first, then run chkdsk with no switches.": the call ends (right): The only copy is protected before anything is changed, and the read-only check shows what is wrong without touching it.
  - reply "Then format will have to do after all.": the call ends (not this one): Format erases the drive, and it holds the only copy of two years of orders. [slip: ran a command that erases data before the data was safe or needed erasing]
  - reply "I understand, two years of orders is a lot to lose. We will run chkdsk /f first, which repairs a drive without erasing anything, and see whether the orders open.": the call ends (not this one): A repair run changes the drive, and a long scan of a damaged one can lose files. Nothing was copied off first. [slip: touched the machine before protecting data that has no other copy]
- After it ends: the lines of every turn that pushed are marked and named ("It pushes:"), and the reply where it could have ended the right way is named ("You could have ended it at your first reply: “the reply”." or "You ended it as soon as you could.").

After the answer: Reason: Move 3: protect their data before touching anything. One question, whether the files exist anywhere else, decides the order: copy, then a read-only check, then at most one repair.

#### Item 18

A question the phone reads aloud, never by itself: a button "Hear the question" (then "Hear it again") reads it with a voice on the phone when the learner taps, and once they have tapped the next question in the run is read when they tap Next. A phone with no voice of its own shows the words and says so. Its words: **Which command checks a drive’s file system for errors and, with /f, fixes them?**

**Type the command.**
- One box and "Answer" (shut until something is typed; Enter sends it), and "Not yet", which answers with nothing and shows the answers. "Not sure? Tap Not yet to see the answers." Nothing is marked before the answer.
- What counts as the same: capital letters, punctuation, "a", "an", "the" and "and" do not matter; a number in words is the number ("twenty-seven" is 27); words in brackets are optional; one small misspelling in the whole answer is forgiven (a word that is one letter off, in words of four letters or more); parts of an answer said in any order. A word left out or added, or another word, is a miss.
- After: the mark (Right, Not this one, or "Not yet") with "You said: …", then the accepted answers, every one, the one given marked "You gave this one" (and "Words in brackets are optional." when some words are in brackets). After a miss with something typed: "If what you said means the same, say so. It counts this time, and the question comes back later to be sure." with the button "My answer means the same". It counts right in that sitting (shown as "Counted on your word"), is logged and listed under the result and in the results, and is not a good day for the schedule, so the question comes back.
- The accepted answers shown after (Accepted answers):
  - chkdsk

After the answer: Reason: chkdsk reads a drive’s file system. With no switch it only reports, /f fixes the errors it finds, and /r also hunts for bad sectors.

#### Item 19

The question, read aloud as above: **Which command, with the /force switch, reapplies every Group Policy setting on a computer right now?**

**Type the command.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - gpupdate /force

After the answer: Reason: gpupdate refreshes Group Policy. /force reapplies every policy, not only the ones that changed.

Then a screen: you can stop here, your place is kept.

## Step 14: Questions

5 questions, shuffle, with about 30% from earlier lessons mixed in, unlabeled. A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 20

A chat, with its history: "Beatriz, Support", Chat with the help desk.

> (Beatriz, Support, at the left) The intranet site moved to a new server this morning. nslookup gives me the new address, but my browser still goes to the old one. Everyone else is fine.

**Which command empties the saved name answers?**
(the options come in an order that depends on the seed of the question)
- ipconfig /flushdns (right)
- ipconfig /release, then ipconfig /renew — if chosen: That gives the address back and requests another. The saved name answers stay.
- gpupdate /force — if chosen: That refreshes Group Policy, not the name answers.
- netstat -an — if chosen: netstat lists connections and ports. It changes nothing.

After the answer: the deciding words are marked. Reason: The fresh lookup is right and the browser is wrong, so the computer is holding an old saved answer. ipconfig /flushdns empties that DNS cache, one change that can be undone by simply looking up again.

#### Item 21

A chat, with its history: "Lemuel, Marketing", Chat with the help desk.

> (Lemuel, Marketing, at the left) A guide gave me five commands to try. Which of them will refuse to run in my ordinary Command Prompt window?

**Pick every command that needs an administrator window.** (choose every one that fits)
(the options come in an order that depends on the seed of the question)
- sfc /scannow (right)
- diskpart (right)
- hostname — if chosen: hostname only prints the computer’s name and runs in an ordinary window.
- dir C:\Users — if chosen: dir only lists a folder and runs in an ordinary window.
- whoami — if chosen: whoami only prints the account and runs in an ordinary window.

After the answer: Reason: sfc /scannow changes protected system files and diskpart changes disks, so both need an administrator window. hostname, dir and whoami only read, and an ordinary window runs them.

#### Item 22

A chat, with its history: "Gemma, Intern", Chat with the help desk.

> (Gemma, Intern, at the left) My guide lists commands. Which of these make files vanish with no Recycle Bin and no undo in Windows?

**Pick every command that can.** (choose every one that fits)
(the options come in an order that depends on the seed of the question)
- format D: /q (right)
- rmdir /s /q C:\OldReports (right)
- diskpart, then clean (right)
- robocopy C:\Docs E:\Backup /mir (right)
- dir C:\Docs /s — if chosen: dir only lists files.
- gpresult /r — if chosen: gpresult only reports which policies applied.

After the answer: Reason: format erases a drive, rmdir /s removes a folder and everything in it, diskpart clean wipes a disk’s partitions, and robocopy /mir deletes from the destination what the source no longer has. Special recovery tools may bring back some files after a quick format or a clean, but Windows has no undo. dir and gpresult only read.

#### Item 23

A chat, with its history: "Nadine, Sales", Chat with the help desk.

> (Nadine, Sales, at the left) Since last night’s update, two of my programs crash on start. The drive is fine. I want Windows to check and repair its own files.

**Which command does that, in an administrator window?**
(the options come in an order that depends on the seed of the question)
- sfc /scannow (right)
- chkdsk C: /f — if chosen: chkdsk repairs the drive’s file system, not Windows’ files.
- gpupdate /force — if chosen: That reapplies Group Policy, not the system files.
- format C: /q — if chosen: That would erase the drive. Nothing needs to be erased to check Windows’ files.

After the answer: the deciding words are marked. Reason: The drive is fine and Windows’ own files are suspected, so the job is sfc /scannow. chkdsk checks the drive and sfc checks the files Windows depends on.

#### Item 24

A chat, with its history: "Imani, Legal", Chat with the help desk.

> (Imani, Legal, at the left) I need a list of everything in C:\Contracts, including files someone marked hidden. Which command prints it?

**Which command?**
(the options come in an order that depends on the seed of the question)
- dir C:\Contracts /a (right)
- dir C:\Contracts /w — if chosen: /w only lays the names out across the screen; hidden files stay hidden.
- dir C:\Contracts /s — if chosen: /s adds the subfolders, but hidden files are still left out.
- cd C:\Contracts /a — if chosen: cd changes folder. It prints no list.

After the answer: the deciding words are marked. Reason: dir lists a folder, and each switch changes one thing about the listing. /a adds hidden and system files, /s the subfolders and /w the layout.

Then a screen: you can stop here, your place is kept.

## The check

8 new questions, no help. No answer is shown until the end. The questions come in mixed order.

To pass:
- At least 7 right

#### Check question 25

A chat, with its history: "Dennis, Security", Chat with the help desk.

> (Dennis, Security, at the left) A manager saw a strange program send data out. One connection on this computer goes to 203.0.113.99. Which program is behind it?

A plain table, "C:\> netstat -ano":

> What the computer prints  (the column heads)
>   Proto  Local Address          Foreign Address        State           PID
>   TCP    192.168.1.42:50188     203.0.113.99:443       ESTABLISHED     5124
>   TCP    192.168.1.42:50201     203.0.113.20:443       ESTABLISHED     3380

**What is the next step to name the program?**
(the options come in an order that depends on the seed of the question)
- Look up process ID 5124 on Task Manager’s Details tab, the one on that line (right)
- Run tracert 203.0.113.99, where each router on the way names the program — if chosen: tracert lists the routers on the way. It says nothing about which program on this computer is talking.
- Run ipconfig /all, where the adapter lists the program using each connection — if chosen: ipconfig /all prints the adapter’s settings, not the programs that use the connection.
- Look up process ID 3380 on Task Manager’s Details tab, the last to connect — if chosen: The row to 203.0.113.99 ends in 5124. 3380 belongs to the other connection.

After the answer: the deciding words are marked. Reason: The PID column ties each connection to a running program. The line to 203.0.113.99 ends in 5124, so that process is the one to look up in Task Manager; the other line is a different program.

#### Check question 26

The question, read aloud as above: **Which command connects a drive letter, such as Z:, to a shared folder on a server?**

**Type the command.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - net use

After the answer: Reason: net use maps a drive letter to a shared folder: net use Z: \\fileserver\Sales. net use alone lists the mappings.

#### Check question 27

A chat, with its history: "Osman, Depot", Chat with the help desk.

> (Osman, Depot, at the left) The USB stick for installs held client contracts on its last job, and its owner agrees the contents can go. I ran select disk 2, the 58 GB one, then clean, and Windows now shows the stick as empty. Is it wiped for the next job?

**Is the stick wiped?**
(the options come in an order that depends on the seed of the question)
- Not fully: clean only removed the partitions, so tools can still recover the contracts (right)
- Yes: Windows sees nothing on it, so nothing is left to recover — if chosen: Windows sees nothing because the partition information is gone. The data is still on the disk until it is written over.
- Not fully: run format E: /q, which overwrites every file on the stick — if chosen: A quick format also leaves the data in place. Only a format without /q, or clean all, writes zeros.
- Yes, once the stick is unplugged and plugged in again to refresh it — if chosen: Plugging it in again changes nothing on the disk.

After the answer: the deciding words are marked. Reason: clean removes the partitions from the selected disk, so Windows sees an empty disk, but the contracts can be recovered with tools. A real wipe is clean all (zeros every sector) or destroying the stick.

#### Check question 28

A chat, with its history: "Mirela, Logistics", Chat with the help desk.

> (Mirela, Logistics, at the left) One file on my D: drive will not open, but the other files do. I ran chkdsk D: and pasted what it said.

A plain table, "C:\> chkdsk D:":

> What the computer prints  (the column heads)
> The type of the file system is NTFS.
> Stage 1: Examining basic file system structure ...
> Windows has scanned the file system and found no problems.
> No further action is required.

**What does this tell you, and what next?**
(the options come in an order that depends on the seed of the question)
- The file system is sound (bad sectors were not tested); test the file, its program and its permissions (right)
- Run chkdsk D: /f anyway; there must be something wrong with the drive — if chosen: /f repairs errors it finds. It found none, so the repair has nothing to change.
- Format D: to be sure the drive is clean, then copy the file back — if chosen: The other files on D: open, and a format would erase them for a problem with one file.
- Run sfc /scannow, which also checks the files on the D: drive — if chosen: sfc checks Windows’ own files, not the files on another drive.

After the answer: the deciding words are marked. Reason: “Found no problems” is the all-clear for D:’s file system. One file that will not open while the rest do points at that file, the program opening it or the permissions on it, so test those next with the cheapest test.

#### Check question 29

A chat, with its history: "Raymond, Studio", Chat with the help desk.

> (Raymond, Studio, at the left) I want my E: backup to hold everything in C:\Work, including subfolders. A file I delete from C:\Work must never disappear from E:\Backup.

**Which command fits?**
(the options come in an order that depends on the seed of the question)
- robocopy C:\Work E:\Backup /e (right)
- robocopy C:\Work E:\Backup /mir — if chosen: /mir deletes from the backup whatever is no longer in C:\Work, the opposite of Raymond’s rule.
- copy C:\Work E:\Backup — if chosen: copy takes the files of one folder, not the subfolders.
- rmdir /s E:\Backup, then copy C:\Work to it — if chosen: That deletes the old backup first, then copies. Nothing is kept from before.

After the answer: the deciding words are marked. Reason: The two needs are subfolders included and nothing deleted from the backup. robocopy /e does both; /mir deletes extras, copy skips subfolders, and deleting the backup first loses it.

#### Check question 30

A chat, with its history: "Wyatt, Studio", Chat with the help desk.

> (Wyatt, Studio, at the left) I need to put a 300 GB video backup on C:. Does it fit? I ran dir in the folder where I want to put it.

A plain table, "C:\> dir C:\Contracts":

> What the computer prints  (the column heads)
>  Directory of C:\Contracts
> 10/02/2026  09:14 AM    <DIR>          .
> 10/02/2026  09:14 AM    <DIR>          ..
> 10/02/2026  09:14 AM    <DIR>          2026
> 10/02/2026  09:15 AM            48,210 notes.txt
>                1 File(s)         48,210 bytes
>                3 Dir(s)  412,318,203,904 bytes free

**Does it fit?**
(the options come in an order that depends on the seed of the question)
- Yes: the last line shows about 384 GB free on the drive (right)
- Yes: the line before it shows 48,210 bytes free, which is plenty — if chosen: 48,210 bytes is the size of the files in this folder, not the free space. Free space is the last line.
- No: dir counts only 1 file and 3 folders, so little more fits — if chosen: The counts are what is inside C:\Contracts. They do not limit the drive.
- It cannot be told from dir; run chkdsk to find the free space — if chosen: dir already prints the free space, and chkdsk checks a drive’s file system.

After the answer: the deciding words are marked. Reason: dir ends with a count of the files and folders in that directory and the free space left on the drive. 412,318,203,904 bytes is 384 GB, more than the 300 GB backup needs.

#### Check question 31

A chat, with its history: "Brenda, Help desk", Chat with the help desk.

> (Brenda, Help desk, at the left) The new Block USB Storage policy went out on October 23 at 10:00. A user says it is not blocking their laptop. I ran gpresult /r on it at noon the same day.

A plain table, "C:\> gpresult /r":

> What the computer prints  (the column heads)
> Last time Group Policy was applied: 10/21/2026 at 8:03:15 AM
> COMPUTER SETTINGS
>     Applied Group Policy Objects
>         Default Domain Policy
>         Workstation Lockdown

**What does it show, and what next?**
(the options come in an order that depends on the seed of the question)
- It last refreshed two days ago, before the change; run gpupdate /force and look again (right)
- The policy is wrong: it is missing from the list of applied ones — if chosen: It is missing because this laptop has not refreshed since before the policy was made, not because the policy is wrong.
- The policy was filtered out for this user, so change who it applies to — if chosen: Nothing in the report says filtered out. Filtered policies are listed separately.
- Reinstall Windows on the laptop so it picks up the policy — if chosen: No test has shown anything wrong with Windows. A refresh costs a minute.

After the answer: the deciding words are marked. Reason: Last time Group Policy was applied is two days before the policy existed, and the list shows no Block USB Storage. The cheapest change is gpupdate /force, then gpresult /r again to see whether the policy is listed.

#### Check question 32

The question, read aloud as above: **What is the full command that scans Windows’ protected system files and replaces damaged ones?**

**Type the command with its switch.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - sfc /scannow

After the answer: Reason: sfc /scannow runs System File Checker in an administrator window. It replaces damaged protected system files from a stored good copy.

## The result

For example "8 of 8: passed" or "6 of 8: not yet", each rule above shown as met or not met, then every answer with its feedback, the missed ones first.
