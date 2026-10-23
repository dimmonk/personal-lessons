# IT Help Desk: Installing and upgrading

Revision 1, draft (the screen carries the draft line). Part: Installing and upgrading. Where the subject ends up: Take a ticket you have never seen (a user's email, chat or call about a computer, phone, printer, network, account or security problem) and work it the way a help desk technician does: sort it and set its priority, get the user's story and what changed, try the known fix with a limit, then narrow it down with the cheapest test that splits what works from what does not, fix one thing at a time, confirm with the user and write it up, or hand it on with everything you found; and know every fact and scenario on both CompTIA A+ exams well enough to pass them.

## The why

Dev in Finance has a four-year-old laptop that runs fine. He has the memory and the disk, so he thinks it can take Windows 11.
Here you learn operating systems, file systems, Windows editions and requirements, ways to install, what a program needs, and cloud office tools, so you can answer before anything is changed.

## Step 1: Operating systems and when they end

A plain table, "Kinds of operating system":

> Operating system  |  Where you meet it  (the column heads)
> Windows  |  Office computers
> macOS  |  Apple laptops and desktops
> Linux  |  Free; servers and some desktops
> Chrome OS  |  Chromebooks; web apps
> iOS and iPadOS  |  iPhone and iPad
> Android  |  Most other phones and tablets

At its end of life (EOL) a version gets no more security fixes, so flaws stay open. Windows 10 reached it in October 2025. A program made for one operating system does not run on another, and a drive formatted for one may not open on another.

## Step 2: File systems

A plain table, "File systems and where each fits":

> File system  |  Where it is used  |  What to know  (the column heads)
> NTFS  |  Windows drives  |  The Windows default. Permissions, encryption, compression. A Mac reads it but cannot write to it without extra software.
> ReFS  |  Windows Server  |  Very large storage that repairs itself.
> FAT32  |  Small USB drives, cameras  |  Opens on almost everything. A file must be under 4 GB.
> exFAT  |  USB drives and memory cards  |  Opens on Windows and macOS; holds files over 4 GB.
> ext4  |  Linux  |  The usual default on Ubuntu and Debian.
> XFS  |  Linux servers  |  Fast with very large files.
> APFS  |  Macs, iPhones and iPads  |  Apple’s own. Windows cannot read it without extra software.

Formatting puts a file system on a drive and erases what was there. Copy the files off first.

## Step 3: Windows editions

A plain table, "What each Windows edition has":

> Edition  |  What it has  (the column heads)
> Home  |  No domain join, Remote Desktop host, BitLocker or gpedit.msc (some Home laptops have a simpler lock called device encryption). Up to 128 GB of memory.
> Pro  |  Adds domain join, Remote Desktop host, BitLocker and gpedit.msc. Up to 2 TB of memory.
> Pro for Workstations  |  Pro plus up to 6 TB of memory and ReFS.
> Enterprise  |  Pro plus extras for managing many computers. Up to 6 TB of memory.

A workgroup is a few computers sharing with no central sign-in. A domain has one central list of accounts. Home joins only a workgroup.
Any edition can connect out with Remote Desktop; only Pro and above can be connected to.
N versions are sold without media features such as Media Player; a free Media Feature Pack adds them.

## Step 4: Windows 11: requirements and upgrade paths

A plain table, "What Windows 11 needs":

> Part  |  Minimum  (the column heads)
> Processor  |  64-bit, 1 GHz or faster, 2 or more cores, on Microsoft’s list
> Memory (RAM)  |  4 GB
> Storage  |  64 GB
> Firmware  |  UEFI firmware that is Secure Boot capable. Secure Boot lets only trusted start-up code run; it can be turned on once the firmware is in UEFI mode
> TPM  |  Version 2.0, a security chip that stores encryption keys. A TPM that cannot be found may only be turned off in the firmware
> Graphics  |  DirectX 12 compatible, with a WDDM 2.0 driver

Check the list line by line. The PC Health Check app does it; msinfo32 shows the BIOS Mode and Secure Boot State, tpm.msc the TPM version.
An in-place upgrade (Windows 10 to 11, Home to Pro) keeps files, apps and settings. Going down from Pro to Home, or from 32-bit to 64-bit, needs a clean install.

## Step 5: Ways to install Windows

A plain table, "Installation kinds":

> Kind  |  What happens  (the column heads)
> Clean install  |  The drive is erased and Windows put on fresh.
> Upgrade (in place)  |  The new version goes over the old. Files, apps and settings stay.
> Image deployment  |  One prepared copy of Windows and apps goes on many computers.
> Remote network installation  |  Setup runs from a server.
> Zero-touch  |  The computer is ready at the user’s first sign-in; no technician touches it.
> Recovery partition  |  A hidden part of the drive holds the maker’s copy; using it returns the computer to how it shipped.
> Repair installation  |  Setup, run from inside a Windows that still starts, replaces the system files; the user’s files and apps stay.

The installer can start from a USB drive, the network, an external drive, the internet or another partition. Two operating systems with a start-up menu is multiboot. The firmware’s boot order picks what is tried first.
If setup shows no drives, load the maker’s drive-controller driver from a second USB drive.
Recovery goes smallest first: Startup Repair, then System Restore or uninstalling the latest update, then a reset or repair installation, then a clean install. Copy files off first whenever they may be lost.

## Step 6: Partitions and upgrading safely

A plain table, "MBR against GPT":

> Style  |  What to know  (the column heads)
> MBR  |  Older. Disks to 2 TB, four main partitions, Legacy start-up.
> GPT  |  Newer. Disks over 2 TB, 128 partitions, UEFI start-up. A new empty drive can simply be set up as GPT; Windows’s mbr2gpt tool converts a system disk without erasing it.

A quick format wipes the list of files; a full format also checks the drive for bad spots and takes far longer.
Before an upgrade: back up the files and note the preferences; check that apps and drivers work with the new version; check the hardware. A feature update comes about yearly; smaller updates each month close flaws.

## Step 7: It runs now, so it will run Windows 11

A wrong idea, marked wrong: “It runs Windows 10 fine and it has plenty of memory, so start the upgrade.”
The right line: Run the requirements line by line, and back up first. Memory and disk are two lines: the firmware mode and the TPM can fail while the rest pass.

## Step 8: What an application needs

A plain table, "Reading a program’s requirements":

> Requirement  |  What it means  (the column heads)
> 32-bit or 64-bit  |  64-bit Windows runs both kinds of program; 32-bit Windows runs only 32-bit ones and reaches at most 4 GB. On 64-bit Windows, 32-bit programs go in Program Files (x86).
> Integrated or dedicated graphics  |  Integrated graphics shares the main memory; dedicated is a separate card with its own.
> VRAM  |  The graphics card’s memory. Video and 3D programs list a minimum.
> RAM and CPU  |  The least it needs.
> Storage  |  Free space.
> External hardware token  |  A USB dongle the program looks for.
> Operating system  |  The versions it runs on.

## Step 9: Getting a program onto the computers

A plain table, "Ways to distribute a program":

> Way  |  What to know  (the column heads)
> Physical media  |  A disc or USB drive, one computer at a time.
> Mountable ISO  |  A copy of a disc as a file. Open it and Windows shows a virtual drive.
> Downloadable package  |  An installer file or app store; many downloads at once load the network.
> Image deployment  |  The program is already in the image.

Before a program goes out, weigh its impact on the device (space, memory, other programs), the network (a big download to many at once), operation (down time, training, other tools) and the business (cost, licenses, security, help-desk time).

## Step 10: Cloud office tools

A plain table, "Cloud productivity tools":

> Tool  |  What to know  (the column heads)
> Email system  |  A hosted mailbox.
> Storage with sync  |  A folder kept the same as the cloud copy; its settings choose which folders stay on the computer. A delete there deletes the cloud copy too, though deleted files usually sit in the cloud recycle bin for a time.
> Collaboration  |  Documents, spreadsheets, slides, meetings and messaging, with several people in one file.
> Identity synchronization  |  The office directory’s accounts are copied to the cloud, so one sign-in works in both. If it stops, a changed password is unknown in the other place.
> License assignment  |  Each person needs a license assigned in the admin console; without one the app may open view-only (the wording varies by vendor). Remove it when someone leaves.

## Step 11: A worked example

A chat, with its history: "Dev, Finance", Chat with the help desk.

> (Dev, Finance, at the left) My laptop is four years old and runs fine. Can it take Windows 11? It has 8 GB of memory and plenty of disk, so I think yes.

A plain table, "System information on Dev’s laptop (msinfo32)":

> Field  |  Value  (the column heads)
> OS Name  |  Windows 10 Pro, 64-bit
> Processor  |  Intel Core i5-8250U, 4 cores, 1.60 GHz (on Microsoft’s supported list)
> Installed memory (RAM)  |  8.00 GB
> BIOS Mode  |  Legacy
> Secure Boot State  |  Unsupported

A plain table, "Your notes from the desk":

> Check  |  Result  (the column heads)
> Disk Management  |  The 256 GB system disk is MBR, with 150 GB free
> Firmware screen  |  A start-up mode choice of Legacy or UEFI, and a Secure Boot setting that is off
> tpm.msc  |  A TPM, specification version 2.0

Before the working, the learner may commit to a choice (not scored, not stored):
**Memory, disk and processor all meet Windows 11. What does the BIOS Mode line show?**
(the options come in an order that depends on the seed of the question)
- The laptop starts in Legacy mode from an MBR disk. Windows 11 needs UEFI firmware that is Secure Boot capable, so the start-up mode must change first.
- Legacy mode is only a label. Windows 11 will install on it once the TPM is turned off, because the TPM is what blocks setup on older laptops.
- The processor is too old, because only newer chips can run Windows 11.
- Legacy mode can stay if the 8 GB of memory is raised to 16 GB.

The working, one step at a time:
1. List what Windows 11 needs, so no line is skipped.: A 64-bit processor on the supported list, 4 GB of memory, 64 GB of storage, UEFI firmware that is Secure Boot capable, TPM 2.0, and DirectX 12 graphics.
1. Name the favorite answer and test it against the list.: Dev points at memory and disk. Both pass (8 GB and 150 GB free), and the processor is on the list. Those lines do not settle it.
1. Read the lines still unchecked: firmware and TPM.: The TPM is 2.0, which passes. BIOS Mode is Legacy and the disk is MBR, so the start-up mode is the one failing line.
1. Back up before changing how the disk starts.: Dev’s files are copied to the company storage first. Converting a disk changes its first sectors, and a backup is the way back.
1. Change one thing at a time.: Windows includes a tool, mbr2gpt, that changes an MBR disk to GPT without erasing it. That is done first. Then the firmware is switched to UEFI and Secure Boot is turned on, which is good practice. The laptop is checked to start.
1. Check again and write it up.: The PC Health Check app now says the laptop meets Windows 11. The note: Legacy mode and MBR disk blocked the upgrade; converted to GPT, switched to UEFI; files backed up first.

Then the answer: The laptop starts in Legacy mode from an MBR disk. Windows 11 needs UEFI firmware that is Secure Boot capable, so the start-up mode must change first. Dev named memory and disk. Both pass, and the TPM does too. The failing line is BIOS Mode Legacy with an MBR disk, which also leaves Secure Boot unavailable. The disk was backed up, then converted to GPT, then the firmware was switched, one change at a time.

## Step 12: Questions

4 questions, listed, with help (shown). A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 1

A chat, with its history: "Maya, Sales", Chat with the help desk.

> (Maya, Sales, at the left) **I just got a new laptop with Windows 11 Home. IT says I must join the company domain to reach the shared drives, but I find no way to join one in Settings.**

Help on screen: the words that decide it are marked.

**What does her laptop need?**
(the options come in an order that depends on the seed of the question)
- The Pro edition, the lowest one that can join a domain, upgraded in place with her files kept (right)
- A setting changed in Home. Domain join is hidden until Remote Desktop is turned on in the System page of Settings and the laptop restarted — if chosen: No setting adds domain join to Home. The edition decides it.
- The N version of Home. N is the edition that is made for company networks — if chosen: N means the media features are left out, as in Europe. It has nothing to do with domains.
- A clean install of Home, since the first install must have been faulty — if chosen: A clean install of Home gives the same edition and erases her files. Home has no domain join however it is installed.

After the answer: the deciding words are marked. Reason: The deciding words are Windows 11 Home and join the company domain. Home has no domain join; Pro and above do. An upgrade from Home to Pro keeps files.

#### Item 2

A chat, with its history: "Gina, Marketing", Chat with the help desk.

> (Gina, Marketing, at the left) **I need one USB drive that my Windows PC and my coworker’s Mac can both read and write. I will put 6 GB video files on it.**

Help on screen: the words that decide it are marked.

**Which file system do you format it with?**
(the options come in an order that depends on the seed of the question)
- exFAT (right)
- FAT32 — if chosen: FAT32 works on both, but one file must stay under 4 GB. The 6 GB videos will not fit.
- NTFS — if chosen: A Mac reads an NTFS drive but, without extra software, cannot write to it.
- APFS — if chosen: APFS is Apple’s own. Windows cannot read it without extra software.

After the answer: the deciding words are marked. Reason: The deciding words are Windows PC and Mac, both read and write, and 6 GB files. Only exFAT is read and written by both and holds a file over 4 GB.

#### Item 3

A chat, with its history: "Priya, Design", Chat with the help desk.

> (Priya, Design, at the left) **The Windows 11 upgrade says my PC does not qualify. Everything else about it is new: 16 GB of memory, a 512 GB drive, a recent chip.**

A plain table, "From msinfo32 and tpm.msc":

> Field  |  Value  (the column heads)
> BIOS Mode  |  UEFI
> Secure Boot State  |  On (so the firmware is capable)
> tpm.msc  |  Compatible TPM cannot be found  <- marked after the answer

Help on screen: the words that decide it are marked.

**What do you do about the failing line?**
(the options come in an order that depends on the seed of the question)
- Look in the firmware for a TPM setting that is turned off, and turn it on (right)
- Restart and run the PC Health Check app again, to see whether it changes its answer — if chosen: Nothing has changed, so it gives the same answer. The tpm.msc line already says what fails.
- Switch to Legacy mode so that the TPM check is skipped — if chosen: Legacy mode breaks the other requirement: Windows 11 needs UEFI, which Priya already has.
- Reinstall Windows 10 to see if the TPM comes back — if chosen: A reinstall erases her files and cannot create a TPM. The firmware is the place the TPM is turned on.

After the answer: the deciding words are marked. Reason: The deciding line is Compatible TPM cannot be found, with UEFI already in use and Secure Boot on. The TPM is the one requirement failing, and the firmware setting is the cheapest place to look.

#### Item 4

A chat, with its history: "Rosa, Video", Chat with the help desk.

> (Rosa, Video, at the left) **The new editing program lists “dedicated graphics with 4 GB of VRAM” as its minimum. My laptop has integrated graphics. It has 16 GB of main memory, so that should cover it.**

Help on screen: the words that decide it are marked.

**What do you tell her?**
(the options come in an order that depends on the seed of the question)
- Integrated graphics borrows main memory and has no VRAM of its own, so it falls short; she needs a dedicated graphics card with 4 GB (right)
- Main memory counts as VRAM, so her 16 GB of main memory more than meets the 4 GB minimum and the program will run without trouble — if chosen: VRAM is the graphics card’s own memory. The 16 GB of main memory is a different pool.
- The program needs a faster processor instead, since graphics work is done by the CPU — if chosen: The listing names the graphics hardware. A faster processor does not add VRAM.
- The program will run if she installs the 32-bit version — if chosen: The bit width is not the problem. The graphics minimum applies to both versions.

After the answer: the deciding words are marked. Reason: The deciding words are dedicated graphics, 4 GB of VRAM and integrated graphics. VRAM is the card’s own memory, and integrated graphics has none of its own.

Then a screen: you can stop here, your place is kept.

## Step 13: Questions

7 questions, shuffle. A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 5

A chat, with its history: "Abe, Accounting", Chat with the help desk.

> (Abe, Accounting, at the left) My laptop passed the Windows 11 check and I want the upgrade tonight. It keeps my files, so I can skip the copying step, right?

**What do you do first?**
(the options come in an order that depends on the seed of the question)
- Back up his files and note his settings, then run the in-place upgrade (right)
- Run the in-place upgrade and copy files off only if it fails — if chosen: If the upgrade fails halfway, the files may not be reachable to copy. Back up first.
- Format the drive so the new version starts clean, then restore from the copy — if chosen: A format is a clean install, not the upgrade he asked for. His apps and settings would be gone.
- Check the apps and drivers work with Windows 11, and back up afterward — if chosen: The app check is right, but the copy comes before anything changes. Backing up afterward leaves the changes unprotected.

After the answer: the deciding words are marked. Reason: Before an upgrade the order is: back up files and preferences, then check that the apps, drivers and hardware work with the new version, then upgrade.

#### Item 6

A chat, with its history: "Cal, Facilities", Chat with the help desk.

> (Cal, Facilities, at the left) I put a new 4 TB drive in the office PC. Disk Management shows only 2 TB, and the rest says Unallocated. Its properties give the partition style as MBR. The drive is not broken; it tests fine.

**Why is that?**
(the options come in an order that depends on the seed of the question)
- The drive uses MBR, which cannot address more than 2 TB; it needs GPT (a new empty drive can simply be made GPT) (right)
- NTFS cannot hold a drive larger than 2 TB, so it must be formatted again as ReFS, the file system made for the biggest drives — if chosen: NTFS handles volumes far larger than 2 TB. The partition style is the limit here.
- The drive needs to be formatted again as FAT32 to see all of it — if chosen: FAT32 is no better. It is the older format and has its own limits.
- Half the drive is bad, so it should be returned — if chosen: The drive tests fine. A 2 TB limit appearing on a 4 TB drive is the sign of MBR.

After the answer: the deciding words are marked. Reason: The deciding words are 4 TB, shows only 2 TB and partition style MBR. That 2 TB ceiling belongs to MBR; GPT lifts it.

#### Item 7

A chat, with its history: "Tom, Engineering", Chat with the help desk.

> (Tom, Engineering, at the left) The installer for the new design program says “64-bit only”. My laptop has 8 GB of memory but Windows only shows 3.2 GB usable.

A plain table, "System type, from msinfo32":

> Field  |  Value  (the column heads)
> System Type  |  x86-based PC

**What is the cause, and what changes it?**
(the options come in an order that depends on the seed of the question)
- Windows is the 32-bit version, which reaches at most 4 GB and cannot run 64-bit programs; moving to 64-bit means a clean install (right)
- The installer is faulty, and a fresh download from the company’s own site will let the program use all 8 GB of memory with no other change — if chosen: The limit is in the operating system, not the installer.
- The memory is damaged, so replacing the sticks will bring back the missing 4.8 GB — if chosen: The memory is fine. A 32-bit Windows reaches no more than 4 GB, and some of that is held for the system.
- An in-place upgrade to 64-bit keeps his files and programs and fixes both — if chosen: An upgrade cannot change from 32-bit to 64-bit. That change is a clean install, with a backup first.

After the answer: the deciding words are marked. Reason: The deciding lines are 64-bit only, 3.2 GB usable of 8 GB, and System Type x86-based PC (a 64-bit Windows says x64-based PC). A 32-bit Windows reaches at most 4 GB and runs only 32-bit programs, and the only way to 64-bit is a clean install.

#### Item 8

A chat, with its history: "Ben, Events", Chat with the help desk.

> (Ben, Events, at the left) My camera supports exFAT. Its memory card is FAT32, and a 5 GB video from my PC will not copy onto it. I want the video as one file. The card holds today’s photos, not yet backed up.

**What do you do?**
(the options come in an order that depends on the seed of the question)
- Copy the photos off first, then format the card as exFAT (right)
- Format the card as exFAT now, since the photos are also on the camera — if chosen: The ticket does not say the photos are anywhere else. Formatting erases the card.
- Format the card as NTFS, since it is the Windows file system — if chosen: The ticket says his camera reads exFAT, which is the one made for cards and flash drives. A camera may not read NTFS.
- Keep FAT32 and split the video into pieces under 4 GB — if chosen: That works around the limit, but the limit stays and he wants one file.

After the answer: the deciding words are marked. Reason: The deciding words are FAT32, a 5 GB video as one file, and photos not yet backed up. exFAT lifts the 4 GB limit, and the photos are copied off before the format erases the card.

#### Item 9

A chat, with its history: "Hana, IT manager", Chat with the help desk.

> (Hana, IT manager, at the left) Fifty identical laptops arrive on Monday. Each needs the same Windows, the same twelve programs and the same settings. We would like it built once and copied.

**Which installation kind fits?**
(the options come in an order that depends on the seed of the question)
- Image deployment: build one reference computer, capture it as an image, and copy it to all fifty (right)
- Upgrade installation on each laptop, to keep what the maker installed — if chosen: An upgrade keeps old files, apps and settings. These laptops are new and need the company’s own programs and settings.
- Recovery partition on each laptop, which restores the maker’s copy — if chosen: The recovery partition restores how the laptop shipped, without the twelve programs or the company’s settings.
- A clean install of Windows on each, with the twelve programs added by hand, one laptop at a time through Monday and Tuesday — if chosen: It gives a clean start, but the work is done fifty times and small differences creep in.

After the answer: the deciding words are marked. Reason: The deciding words are fifty identical laptops and built once and copied. That is image deployment.

#### Item 10

A chat, with its history: "Lena, New hire", Chat with the help desk.

> (Lena, New hire, at the left) It is my first day. I can sign in to the company web apps, but Word online says something like “you need a license to edit” and only lets me view.

**What do you check first?**
(the options come in an order that depends on the seed of the question)
- Whether a license is assigned to her account in the admin console (right)
- Whether Word needs reinstalling on her laptop, since it is the web app that fails — if chosen: Word online runs in the browser. Reinstalling anything on her laptop changes nothing.
- Whether her password needs to be reset, since sign-in must be partly working — if chosen: The sign-in works. A reset fixes a password problem, not a missing license.
- Whether her mailbox is full, which can block editing — if chosen: A mailbox limit has nothing to do with editing a document online.

After the answer: the deciding words are marked. Reason: The deciding words are I can sign in and you need a license to edit. Sign-in works, so the missing piece is the license assigned to her account.

#### Item 11

A chat, with its history: "Omar, Consultant", Chat with the help desk.

> (Omar, Consultant, at the left) I want to connect from my office computer to my Windows 11 Home laptop at home using Remote Desktop. The laptop is on, both computers are on the company VPN, and the laptop answers a ping, but the connection is refused.

**What is the cause?**
(the options come in an order that depends on the seed of the question)
- Windows Home can connect out with Remote Desktop but cannot be the computer that is connected to; that needs Pro or above (right)
- The laptop’s memory is too small, because Home allows only 4 GB for hosting — if chosen: Home’s limit is 128 GB, and memory is not what blocks hosting.
- The N version of Windows must be installed first, because N adds the remote connections that Home leaves out of the laptop — if chosen: N only leaves out media features. It does not add remote connections.
- The home router is the cause, so you swap it — if chosen: Both computers reach each other over the VPN and the laptop answers a ping, so the network path works. Home cannot host, whatever the router does.

After the answer: the deciding words are marked. Reason: The deciding words are Windows 11 Home and connected to. Home can start a Remote Desktop session but cannot host one.

Then a screen: you can stop here, your place is kept.

## Step 14: Questions

8 questions, shuffle. A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 12

A chat, with its history: "Sam, Finance", Chat with the help desk.

> (Sam, Finance, at the left) I deleted a folder from my OneDrive folder on my laptop, and now it is gone from my phone and the web page too. I only wanted it off the laptop.

**What happened, and what do you do?**
(the options come in an order that depends on the seed of the question)
- The sync folder mirrors the cloud copy, so the deletion synced everywhere; restore it from the cloud recycle bin (right)
- The phone app is faulty and shows the folder as missing, so the phone must be signed out of the account and signed back in again — if chosen: The web page also lost the folder. That points at the sync, not the phone.
- The laptop’s disk is corrupt, so the files must be recovered from the disk — if chosen: The disk did what it was asked. The delete was real and synced.
- The folder is lost for good, since cloud storage has no way to bring files back — if chosen: Cloud storage usually keeps deleted files for a time. Look there first.

After the answer: the deciding words are marked. Reason: The deciding words are deleted from my OneDrive folder and gone from my phone and the web page too. A synced folder shares its deletions.

#### Item 13

A chat, with its history: "Ines, Operations", Chat with the help desk.

> (Ines, Operations, at the left) We hire forty remote staff. Nobody on the desk will touch their laptops. The laptops ship from the maker straight to their homes.

**Which installation kind fits?**
(the options come in an order that depends on the seed of the question)
- Zero-touch: the laptop configures itself from the company account when the user first signs in (right)
- Remote network installation from a server in the office, started on each laptop once it is plugged into the office network — if chosen: It runs over the office network, so the laptop would have to be there, or on a VPN, to start.
- Image deployment, carried out on each laptop before it ships — if chosen: An image copied by the desk means someone handles each laptop, which the ticket rules out.
- Repair installation on each, which fixes Windows after it arrives — if chosen: A repair fixes a damaged Windows. The new laptops are not damaged.

After the answer: the deciding words are marked. Reason: The deciding words are nobody on the desk will touch and ship straight to their homes. That is zero-touch.

#### Item 14

A chat, with its history: "Vic, Studio", Chat with the help desk.

> (Vic, Studio, at the left) Our old Windows 11 Home workstation has 192 GB of memory fitted, and Windows reports 192 GB installed but only 128 GB usable. The memory tests clean.

**Why is that?**
(the options come in an order that depends on the seed of the question)
- Windows 11 Home is limited to 128 GB of memory, so Pro or above is needed to use more (right)
- It is a 32-bit Windows, which is limited to 4 GB — if chosen: He sees 128 GB, far above any 32-bit limit. The figure of 128 GB is the Home edition’s.
- Windows holds the other 64 GB back for its start-up files and the pages it swaps to the drive — if chosen: Windows does not hold memory back like that. The 128 GB figure is the Home edition’s limit.
- Two of the sticks are bad, so they are swapped one at a time — if chosen: The memory tests clean, and a bad pair would not land on exactly 128 GB.

After the answer: the deciding words are marked. Reason: The deciding words are Windows 11 Home and 192 GB installed with 128 GB usable. The memory limit belongs to the edition.

#### Item 15

A question the phone reads aloud, never by itself: a button "Hear the question" (then "Hear it again") reads it with a voice on the phone when the learner taps, and once they have tapped the next question in the run is read when they tap Next. A phone with no voice of its own shows the words and says so. Its words: **Which file system is the usual default on Ubuntu and Debian Linux? Type its name.**

**Type your answer.**
- One box and "Answer" (shut until something is typed; Enter sends it), and "Not yet", which answers with nothing and shows the answers. "Not sure? Tap Not yet to see the answers." Nothing is marked before the answer.
- What counts as the same: capital letters, punctuation, "a", "an", "the" and "and" do not matter; a number in words is the number ("twenty-seven" is 27); words in brackets are optional; one small misspelling in the whole answer is forgiven (a word that is one letter off, in words of four letters or more); parts of an answer said in any order. A word left out or added, or another word, is a miss.
- After: the mark (Right, Not this one, or "Not yet") with "You said: …", then the accepted answers, every one, the one given marked "You gave this one" (and "Words in brackets are optional." when some words are in brackets). After a miss with something typed: "If what you said means the same, say so. It counts this time, and the question comes back later to be sure." with the button "My answer means the same". It counts right in that sitting (shown as "Counted on your word"), is logged and listed under the result and in the results, and is not a good day for the schedule, so the question comes back.
- The accepted answers shown after (Accepted answers):
  - ext4

After the answer: Reason: ext4 is the usual default on Ubuntu and Debian. It keeps a log of changes (journaling) so a crash does not leave the drive in a mess, and it has file permissions. XFS is the Linux choice for very large files and volumes on servers.

#### Item 16

A chat, with its history: "Pam, Training", Chat with the help desk.

> (Pam, Training, at the left) We will push a 3 GB program to all 400 computers on Monday at 9. Everyone is online then. I need a plan.

**What is the main risk to deal with?**
(the options come in an order that depends on the seed of the question)
- The network: 400 downloads at once will slow everything for everyone, so the push is spread out in groups or sent from a server in each office (right)
- The license count, since 400 users each need a license — if chosen: Licenses matter, but nothing in the ticket suggests that they are short. The timing is what she asked about.
- The device, because a program of 3 GB will not fit on any of the computers that are online at that hour on a Monday morning — if chosen: Storage is worth checking, but 3 GB fits on almost every computer. The shared line is the larger risk.
- Nothing, since a download package has no effect on the network — if chosen: Every download uses the network. This one is 1.2 TB in total, all in the same hour.

After the answer: the deciding words are marked. Reason: The deciding words are 3 GB to all 400 computers at 9 and everyone is online. That is the network impact of distribution, and spreading it out is the answer.

#### Item 17

A chat, with its history: "Tess, Legal", Chat with the help desk.

> (Tess, Legal, at the left) The firm now requires BitLocker on every laptop. Mine is the only one on Windows 11 Home, and the encryption page offers me nothing but device encryption (a simpler lock that some Home laptops have).

**What does her laptop need?**
(the options come in an order that depends on the seed of the question)
- An upgrade to Pro, the lowest of the editions that has BitLocker (right)
- Device encryption left on, since it is the same lock under another name — if chosen: Device encryption is a simpler lock. The firm requires BitLocker, which Home does not have.
- A different file system, since BitLocker works on exFAT only — if chosen: BitLocker encrypts an NTFS drive in Windows. The file system is not the missing piece.
- The N version of Home, which adds the security tools — if chosen: N leaves out media features. It adds no security tools.

After the answer: the deciding words are marked. Reason: The deciding words are BitLocker and Windows 11 Home. The edition has to be raised to Pro.

#### Item 18

A chat, with its history: "Jon, Lab", Chat with the help desk.

> (Jon, Lab, at the left) The lab PC shows a menu at start-up with Windows 11 and Ubuntu, and the user picks one each time. Both live on the one computer.

**What is this arrangement called?**
(the options come in an order that depends on the seed of the question)
- Multiboot, two operating systems on one computer with a start-up menu (right)
- Image deployment, a copy of a system placed on one computer — if chosen: Image deployment copies one built system to many computers. It has no start-up menu.
- Zero-touch, where the company account chooses the system — if chosen: Zero-touch prepares a laptop on its first sign-in. It gives no menu.
- A repair installation, where the second system fixes the first — if chosen: A repair replaces Windows files. It does not add a second system.

After the answer: the deciding words are marked. Reason: The deciding words are a menu at start-up and both live on the one computer. That is multiboot.

#### Item 19

The question, read aloud as above: **What do we call the memory on a graphics card itself, as a program’s requirements list it? Type the short name.**

**Type your answer.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - VRAM
  - video RAM
  - video memory

After the answer: Reason: VRAM is the graphics card’s own memory. Integrated graphics has none of its own and shares the main memory.

Then a screen: you can stop here, your place is kept.

## The check

8 new questions, no help. No answer is shown until the end. The questions come in mixed order.

To pass:
- At least 7 right

#### Check question 20

A chat, with its history: "Dora, Sales", Chat with the help desk.

> (Dora, Sales, at the left) My Windows 11 Home laptop needs BitLocker for a customer contract. Our IT person says to wipe it and put Windows on again from scratch.

**What is the better way?**
(the options come in an order that depends on the seed of the question)
- Upgrade the edition in place to Pro, which keeps her files, apps and settings and adds BitLocker (right)
- Wipe it, as the technician said, since an edition can only be changed by a clean install, which also gives her a clean Windows 11 to start from — if chosen: Home to Pro is changed in place. Going down from Pro to Home is the one that needs a clean install.
- Turn BitLocker on in Home, in the same Settings page as device encryption — if chosen: Home has no BitLocker. Pro and above have it.
- Install the N version, which adds the security features that Home lacks — if chosen: N leaves out media features. It does not add security features.

After the answer: the deciding words are marked. Reason: BitLocker is a Pro feature, so the edition must rise to Pro. Home to Pro is an in-place upgrade and keeps everything.

#### Check question 21

A chat, with its history: "Fred, Marketing", Chat with the help desk.

> (Fred, Marketing, at the left) My new laptop says Windows 11 Pro N. I cannot play the training videos, and the Camera and Media Player apps are missing.

**What is the cause?**
(the options come in an order that depends on the seed of the question)
- N versions leave out the media features; the Media Feature Pack adds them back (right)
- The laptop is faulty, so it goes back for replacement — if chosen: Nothing is broken. The edition was sold without those features.
- Pro N is a smaller edition, so it needs more memory to play video — if chosen: N is not about memory. It is about which media features come with Windows.
- The videos use the wrong file system, so they need to be copied to exFAT — if chosen: Media features are missing from Windows itself. A file system does not decide whether a video plays.

After the answer: the deciding words are marked. Reason: The deciding words are Pro N and media apps are missing. N versions come without media features, and the pack adds them back.

#### Check question 22

The question, read aloud as above: **A single file of what size or larger will not fit on a FAT32 drive? Type the size with its unit.**

**Type your answer.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - 4 GB
  - 4GB
  - 4 gigabytes

After the answer: Reason: FAT32 stops a single file at 4 GB, so a bigger file needs exFAT or NTFS.

#### Check question 23

A chat, with its history: "Isla, Design", Chat with the help desk.

> (Isla, Design, at the left) My external drive came from my old Mac, where Disk Utility called it APFS. On my work PC, Windows says the drive needs formatting. My photos are on it, with no other copy.

**What do you do?**
(the options come in an order that depends on the seed of the question)
- Do not format it. Windows cannot read APFS; read it on a Mac, or add software that reads it (right)
- Click Format, since Windows always offers that to fix an unreadable drive — if chosen: Formatting erases everything on the drive, and the photos have no other copy.
- Format it as NTFS so that Windows can use it, and then copy the photos back from the old Mac when it is free — if chosen: The format erases the photos first, so there is nothing left to restore.
- Run chkdsk until the drive is repaired, since the drive is damaged — if chosen: The drive is fine. Windows simply does not know the file system.

After the answer: the deciding words are marked. Reason: The deciding words are came from my old Mac and Windows says the drive needs formatting. Windows cannot read APFS, and formatting would erase the photos.

#### Check question 24

The question, read aloud as above: **Windows 11 needs a TPM. Which version of the TPM does it need? Type the number.**

**Type your answer.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - 2.0
  - 2
  - TPM 2
  - TPM 2.0
  - version 2
  - version 2.0

After the answer: Reason: Windows 11 needs TPM 2.0, along with UEFI firmware that is Secure Boot capable.

#### Check question 25

A chat, with its history: "Gus, Warehouse", Chat with the help desk.

> (Gus, Warehouse, at the left) After a failed update Windows still starts, but Settings and several programs crash, and sfc could not repair the files. The update was uninstalled and no restore points exist. I have no recent backup and the files on it matter. The programs took days to set up.

**The smaller repairs are used up. Which installation kind fits, once his files are copied off?**
(the options come in an order that depends on the seed of the question)
- A repair installation, which replaces the Windows system files and keeps his files and programs (right)
- A clean install, which gives a fresh Windows without the failed update — if chosen: A clean install erases the drive and the programs that took days to put in, when a repair installation keeps them.
- The recovery partition, which brings back the computer the way it shipped — if chosen: It returns the maker’s copy, so his added programs and, usually, files go.
- An image deployment from another computer that works, so that this one matches it and has the same Windows and programs — if chosen: An image replaces everything on the drive, and his files and programs would be gone.

After the answer: the deciding words are marked. Reason: The deciding words are Windows still starts, smaller repairs used up and programs took days. A repair installation fixes Windows and keeps files and apps; the other kinds erase them. His files are copied off first all the same.

#### Check question 26

A chat, with its history: "Jess, Engineering", Chat with the help desk.

> (Jess, Engineering, at the left) Our costing program started on my old PC and now says “Security dongle not found”. I am on the new PC, and the program is installed fine.

**What is the next step?**
(the options come in an order that depends on the seed of the question)
- Plug in the small USB dongle that came with the program, since it needs that token to run (right)
- Reinstall the program, since the install is the part that failed — if chosen: The program installed fine. It is asking for a device, not for files.
- Add graphics memory, since the program needs more VRAM to start — if chosen: The message names the dongle, not the graphics.
- Switch to the 32-bit version of the program, since the 64-bit version is the one that looks for the dongle — if chosen: The bit width does not change the need for the token.

After the answer: the deciding words are marked. Reason: The deciding words are Security dongle not found and the program is installed fine. The program needs its external hardware token.

#### Check question 27

A chat, with its history: "Noor, HR", Chat with the help desk.

> (Noor, HR, at the left) I changed my password at my desk this morning. The office computer takes the new one, but my cloud mail and apps still want the old one.

**What do you check?**
(the options come in an order that depends on the seed of the question)
- Whether identity synchronization from the office directory to the cloud is running (right)
- Whether the cloud mail license has been assigned to her account in the admin console, since the old password still works — if chosen: The ticket gives no sign of a license problem: the apps open and only the password differs. Licenses decide what you can do, not which password the cloud accepts.
- Whether her mailbox is full, since a full mailbox blocks the password — if chosen: A full mailbox does not control which password the cloud accepts.
- Whether the sync folder on her laptop is paused — if chosen: The folder sync moves files. Passwords belong to identity synchronization.

After the answer: the deciding words are marked. Reason: The deciding words are office computer takes the new one and cloud still wants the old one. That is identity synchronization between the two places.

## The result

For example "8 of 8: passed" or "6 of 8: not yet", each rule above shown as met or not met, then every answer with its feedback, the missed ones first.
