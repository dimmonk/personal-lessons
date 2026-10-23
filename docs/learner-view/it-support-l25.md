# IT Help Desk: Accounts and access

Revision 2, live. Part: Accounts and access. Where the subject ends up: Take a ticket you have never seen (a user's email, chat or call about a computer, phone, printer, network, account or security problem) and work it the way a help desk technician does: sort it and set its priority, get the user's story and what changed, try the known fix with a limit, then narrow it down with the cheapest test that splits what works from what does not, fix one thing at a time, confirm with the user and write it up, or hand it on with everything you found; and know every fact and scenario on both CompTIA A+ exams well enough to pass them.

## The why

Priya started in Finance on Monday. Priya chats the desk: every file in the Budget folder on the shared drive opens, but every time Priya saves, Windows says there is no permission. Resetting the password would feel like the obvious move. It would change nothing, because the password is not what is wrong.
Here you learn the chain between a person and a file: who you are, what you are allowed, and the policy over both, with the door of the building in front. Each “access denied” ticket belongs on one link, and you find it before you change anything.

## Step 1: The chain of access

Before a person reaches a file there are three checks, in order. Link 1, who you are: the account and the way you sign in. Link 2, what you are allowed: the groups the account is in and the permissions on the folder. Link 3, the policy over it: rules the company applies to many accounts and computers at once. In front of all three is the door: a badge, a lock, a reader.
The cheapest test is what the user already did. Signed in: link 1 works. Opened the file: link 2 gives something, and the question is how much. Works on one PC but not another: look at link 3, or at an account that exists on only one PC.

## Step 2: The door: physical security

A plain table, "Physical measures":

> Measure  |  What it does  (the column heads)
> Bollards  |  Strong posts that stop a vehicle
> Access control vestibule  |  Two doors; the second opens only after the first shuts, so nobody follows close behind (tailgating)
> Badge reader  |  Opens a door for a card and records who went in
> Video, alarm, motion sensor  |  Record or warn; they stop nobody
> Lock, fence, guard  |  Keep people out; an equipment lock holds a laptop or server in place
> Lighting, magnetometer  |  Light shows people; a magnetometer is a metal detector
> Key fob, smart card, mobile digital key  |  Carried: a fob is held near a reader, a smart card has a chip, the phone is the key. All can be lent
> Biometrics  |  Fingerprint, palm, retina, face, voice. The body is the proof, so it cannot be lent

## Step 3: Link 1: who you are

A plain table, "Accounts and ways to sign in":

> Name  |  What it is  (the column heads)
> Local account  |  On one PC only; no other PC knows it
> Microsoft account  |  An email address; settings and OneDrive follow the person
> Domain account  |  Made by the company in Active Directory; works on any PC joined to the domain
> Username and password  |  The account name and its secret. Passwordless sign-in uses Windows Hello, a hardware token or an app instead of typing a password
> PIN  |  A short code tied to one PC
> Windows Hello  |  Face or fingerprint (or PIN) with no password
> SSO (single sign-on)  |  One sign-in that opens many apps

## Step 4: Proving who you are: MFA

There are three kinds of proof: something you know (password, PIN), something you have (card, phone, token) and something you are (fingerprint, face). Multifactor authentication, MFA, means two or more different kinds. A password and a PIN are the same kind, so not MFA. A password and a phone code are.

A plain table, "Second checks":

> Check  |  How it works  (the column heads)
> Authenticator app, TOTP  |  The app shows a code made from the clock, new about every 30 seconds
> Hardware token  |  A small device that shows a code, or a USB device the person plugs in
> SMS, voice call, email  |  A code sent to the number or address on file
> OTP  |  Any code that works once

## Step 5: The exam’s names for access ideas

A plain table, "Access ideas":

> Name  |  What it means  (the column heads)
> Least privilege  |  Only the access the job needs
> Zero Trust  |  No trust for being on the office network; every request is checked again
> ACL (access control list)  |  A list on a file or folder of who may do what
> Directory services  |  A central database of accounts and computers; Active Directory is Microsoft’s
> IAM  |  Identity and access management: creating accounts, giving and removing access
> SAML  |  The standard that tells an app who is signed in; it makes SSO work between services
> Just-in-time access, PAM  |  Privileged access management: administrator rights for the time a task needs, then removed
> MDM  |  Mobile device management: rules on phones and tablets, such as screen lock and remote wipe
> DLP  |  Data loss prevention: spots sensitive data, such as card numbers, and blocks it leaving

## Step 6: Link 2: users, groups and permissions

A plain table, "User types":

> Type  |  Can do  (the column heads)
> Standard user  |  Run programs and change its own settings
> Administrator  |  Install software, change any setting, manage accounts
> Guest  |  Temporary, limited, off by default
> Power user  |  Older group between standard and administrator

A security group is a list of accounts. Give a permission to the group once, and move people in and out as jobs change. A folder on a file server has two layers: NTFS permissions on the folder itself, and share permissions that apply only across the network. A person on the network meets both, and the more restrictive wins: share Full Control with NTFS Read gives Read.

A plain table, "Levels and more":

> Name  |  What it means  (the column heads)
> Share levels  |  Read, Change, Full Control
> NTFS levels  |  Read, Write, Read & execute, List folder contents, Modify, Full control. Modify saves and deletes; Write adds and saves but cannot delete
> Inheritance  |  A folder passes its permissions to what is inside; turned off on a subfolder, it keeps its own
> Attributes  |  Labels on one file. Read-only will not save, whatever the permissions say

## Step 7: UAC and Run as administrator

User Account Control, UAC, dims the screen and checks before anything needing administrator rights runs. An administrator clicks Yes; a standard user must type an administrator’s name and password. It is not a fault. Run as administrator, by right-clicking a program, starts it with full rights after that prompt. sfc /scannow, a command that checks Windows’ own files, needs it.

## Step 8: Link 3: Active Directory and Group Policy

A company keeps its accounts in one domain, run by a domain controller, a server that holds the accounts and checks every sign-in. Windows Home cannot join a domain; Pro and above can.

A plain table, "Parts of Active Directory":

> Part  |  What it does  (the column heads)
> Domain join  |  Lets domain accounts sign in on a PC
> OU (organizational unit)  |  A folder in the domain holding accounts and computers; moving one in puts it under that OU’s policies
> Group Policy  |  Rules mostly linked to OUs: password rules, blocked USB drives, locked settings
> Login script  |  Runs at sign-in, for example to connect shared drives
> Home folder, folder redirection  |  A personal folder on a server, so files follow the person to any PC

gpupdate /force applies policy now, and gpresult /r shows which policies applied.

## Step 9: Protecting what is on the machine

A plain table, "Windows protections":

> Protection  |  What it does  (the column heads)
> Defender Antivirus  |  Looks for malware; its definitions (the list of known malware) must stay updated. It can be turned on or off in Windows Security: keep it on
> Defender Firewall  |  Blocks or allows traffic by port (a numbered door that one kind of traffic uses) and by program
> BitLocker  |  Encrypts the Windows drive (Pro and above). The TPM, a small security chip on the board, holds the code; save the recovery password, since a changed board locks the data without it
> BitLocker To Go  |  The same for a USB stick, opened with a password
> EFS  |  Encrypts single files for one account; if its certificate is lost, so are the files

## Step 10: Hardening a workstation

A plain table, "Hardening steps":

> Step  |  What it stops  (the column heads)
> Password rules: length, complexity, uniqueness, expiration  |  Easy guesses and reuse
> BIOS/UEFI password  |  Changing the boot order or starting from a USB stick
> Screen lock, log off  |  Use of a PC someone walked away from
> Failed-attempt lockout  |  Guessing: the account locks after a chosen number of wrong passwords
> Login times, account expiration  |  Use outside working hours or after a contractor’s end date
> Disable Guest; change the default administrator name and password  |  An account anyone can use; attackers who know the factory login
> Disable AutoRun, unused services  |  A USB program starting by itself; extra ways in
> Encrypt data at rest, lock laptops, protect PII, use a password manager  |  A lost laptop or drive being read; personal data (PII) on shared drives; weak or reused passwords

## Step 11: Making everyone an administrator

A wrong idea, marked wrong: “Nothing keeps being refused for Priya, so I will make Priya an administrator, or give Everyone Full Control on the folder.” It clears the ticket and breaks least privilege: anything Priya runs, or is tricked into running, now has full rights.
The right line: Fix the link that failed: Modify for the Finance group on that one folder.

## Step 12: Resetting on the caller’s word

A wrong idea, marked wrong: “The caller says who they are and sounds sure, so I will reset the account.” Anyone can say a name, and a number the caller reads out proves nothing, because the caller supplied it.
The right line: Check the caller by something the caller did not supply: call the number on the directory record, or look up the manager in the directory.

## Step 13: A worked example

A chat, with its history: "Priya, Finance", Chat with the help desk.

> (Priya, Finance, at the left) I started in Finance on Monday. I can open every file in the Budget folder on the shared drive, but when I save one it says I do not have permission. Can you reset my password?

A plain table, "The Budget folder on the file server":

> Layer  |  Who  |  Level  (the column heads)
> Share permission  |  Finance group  |  Change
> NTFS permission  |  Finance group  |  Read & execute

A plain table, "Priya’s account in the directory":

> Check  |  Result  (the column heads)
> Signed in today at 8:12 AM  |  Success
> Member of  |  Finance

A plain table, "From the desk’s rules":

> Rule  (the column heads)
> A change to a shared folder’s permissions needs the folder owner’s approval written in the ticket.

Before the working, the learner may commit to a choice (not scored, not stored):
**Priya signs in and opens the files, but cannot save. Where does the fault sit?**
(the options come in an order that depends on the seed of the question)
- Link 2: what Priya is allowed; the folder’s level is too low to save
- Link 1: who Priya is, because the password is wrong, so reset it
- Link 3: the policy, because Group Policy blocks saving on Priya’s computer
- Priya’s computer is not on the domain, so join it to the domain again

The working, one step at a time:
1. Write down every place a “no permission” could sit.: Account and sign-in; the group Priya is in; the share level; the NTFS level; a policy; a Read-only label on one file.
1. Name the favorite cause, the password, and test it with what Priya already did.: Priya signed in at 8:12 and opened the files. The account and the password work, so link 1 is cleared. Resetting the password would change nothing.
1. Check link 2: Priya’s group.: Priya is in Finance, and Finance has both a share level and an NTFS level on the folder. That is why the files open.
1. Read both layers; the more restrictive one wins.: The share gives Change. NTFS gives Read & execute. Across the network the lower one wins, so Priya gets Read & execute: the files open but do not save. Saving needs Write or Modify; Modify is the least that also deletes.
1. Change one thing, with the owner’s approval, then check it.: Get the owner’s approval in the ticket, then raise the NTFS level for the Finance group to Modify, not Full Control, because the job needs Modify and no more. Priya saves a file and confirms. The note says which layer was low.

Then the answer: Link 2: what Priya is allowed; the folder’s level is too low to save. Priya signed in and opened the files, so link 1 works. The share allows Change but the folder’s NTFS level is Read & execute, and the more restrictive layer wins. The fault is on link 2, and the fix is one level on one layer.

## Step 14: Questions

4 questions, listed, with help (shown). A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 1

A chat, with its history: "Vesna, Facilities", Chat with the help desk.

> (Vesna, Facilities, at the left) **Twice this week a person walked into the data room right behind an employee, before the door closed. We want a way in that lets only one person through at a time.**

Help on screen: the words that decide it are marked.

**Which measure stops that?**
(the options come in an order that depends on the seed of the question)
- An access control vestibule: a second door opens only after the first shuts (right)
- Video surveillance on the data room door, recording every person who enters — if chosen: A camera records who followed. It does not stop anyone from getting in.
- Bollards outside the entrance, so no vehicle gets near the door — if chosen: Bollards stop vehicles. A person on foot walks past them.
- A badge reader on the door that logs every badge held up to it — if chosen: A reader logs the badge, not the person behind it. Two people can still pass on one badge.

After the answer: the deciding words are marked. Reason: Following close behind is tailgating. A measure that stops it has to let one person through at a time, and that is the access control vestibule.

#### Item 2

A chat, with its history: "Omar, Sales", Chat with the help desk.

> (Omar, Sales, at the left) **Our sign-in wants my password and then a six-digit code from an app on my phone. The code changes every thirty seconds or so.**

Help on screen: the words that decide it are marked.

**Which second check is the code?**
(the options come in an order that depends on the seed of the question)
- An authenticator app, whose TOTP code comes from the clock (right)
- A hardware token, a small device that shows the code — if chosen: A token is a separate physical device. Omar uses an app on Omar’s phone.
- An SMS code, sent to Omar’s phone number in a text message — if chosen: Nothing is sent to Omar. The app makes the code on the phone itself.
- A voice call that reads the code out loud to Omar — if chosen: No call is made. The code comes from the app on the phone.

After the answer: the deciding words are marked. Reason: A code from an app that changes about every thirty seconds is made from the clock: a TOTP, made by an authenticator app.

#### Item 3

A chat, with its history: "Jo, Sales", Chat with the help desk.

> (Jo, Sales, at the left) **I can open the price list folder on the shared drive and add new files, but when I try to delete an old one it says I need permission. I signed in fine this morning.**

Help on screen: the words that decide it are marked.

**Which link of the chain is the fault on?**
(the options come in an order that depends on the seed of the question)
- Link 2: Jo’s level on the folder is below the one that allows deleting (right)
- Link 1: Jo’s sign-in is broken, so reset the password — if chosen: Jo signed in this morning and opened the folder. The sign-in works.
- Link 3: a policy blocks Jo’s computer from the network — if chosen: Jo reaches the folder and adds files. A policy cutting Jo off would stop that too.
- The door: Jo needs a badge before the shared drive can be used — if chosen: A badge opens a building. Jo is already working on the drive.

After the answer: the deciding words are marked. Reason: Jo signed in and can open and add, so links 1 and 3 give Jo what is needed. The level on the folder (share or NTFS) decides whether Jo can also delete, and it is too low: link 2.

#### Item 4

A chat, with its history: "Emre, Marketing", Chat with the help desk.

> (Emre, Marketing, at the left) **Every time I install a program, the screen goes dark and a box wants an administrator’s name and password. My account is a standard user. Is my computer broken?**

Help on screen: the words that decide it are marked.

**What is the box?**
(the options come in an order that depends on the seed of the question)
- User Account Control, making a standard user get an administrator to approve the install (right)
- A virus warning from the antivirus, so scan the whole computer before installing anything else — if chosen: A virus warning names a threat. This box names no threat and only wants administrator rights.
- The firewall blocking the program, so open its port — if chosen: The firewall controls network traffic. It does not call for an administrator before an install.
- A damaged profile, so build Emre a new one — if chosen: A damaged profile shows errors and odd settings. A dark screen with a request for administrator rights is UAC.

After the answer: the deciding words are marked. Reason: A dimmed screen and a request for an administrator’s name and password is UAC. A standard user cannot approve it alone, and nothing is broken.

Then a screen: you can stop here, your place is kept.

## Step 15: Questions

13 questions, shuffle. A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 5

A plain table, "The Archive folder":

> Layer  |  For the Staff group  |  Level  (the column heads)
> Share permission  |  Full Control
> NTFS permission  |  Read

A chat, with its history: "Rebecca, Staff", Chat with the help desk.

> (Rebecca, Staff, at the left) I am in Staff and I open the Archive folder through the shared drive on my laptop. What can I do in it?

**What can Rebecca do through the share?**
(the options come in an order that depends on the seed of the question)
- Read only, because the more restrictive layer wins (right)
- Anything, because the share gives Full Control — if chosen: The share is one layer. The folder’s own NTFS level is Read, and the lower one wins.
- Change, the middle between the two levels — if chosen: The layers are not averaged. The more restrictive one decides.
- Nothing, because two different layers cancel each other — if chosen: They do not cancel. Both allow something, and the lower level wins.

After the answer: the deciding words are marked. Reason: A person reaching a folder through its share meets both the share permission and the NTFS permission, and the more restrictive of the two wins. Full Control and Read give Read.

#### Item 6

A chat, with its history: "Barney, Legal", Chat with the help desk.

> (Barney, Legal, at the left) I can save every file in the Contracts folder except one, the quarterly plan. It opens, but saving says the file is read-only. All the other files in the same folder save fine.

**What is the cheapest check?**
(the options come in an order that depends on the seed of the question)
- Look at that file’s Read-only attribute in its properties (right)
- Move Barney into a different group and try saving again — if chosen: Group membership and folder permissions are the same for every file in the folder. The others save, so this is not it.
- Reset Barney’s password in the directory and have Barney sign in again — if chosen: Barney’s sign-in works, since the other files save.
- Turn User Account Control off and restart the computer — if chosen: UAC prompts for administrator rights. It does not mark one file read-only.

After the answer: the deciding words are marked. Reason: Same folder, same permissions, and only one file fails. A label on the file itself fits: the Read-only attribute, which stops saving whatever the permissions say.

#### Item 7

A chat, with its history: "Phyllis, Consulting", Chat with the help desk.

> (Phyllis, Consulting, at the left) I carry client files on a USB stick. If I lose it, I do not want anyone to read what is on it.

**Which protection fits?**
(the options come in an order that depends on the seed of the question)
- BitLocker To Go, which locks a removable drive and opens with a password (right)
- BitLocker on the C: drive, which locks the drive Windows is on — if chosen: BitLocker on the Windows drive protects that drive. The stick is a different drive and stays open.
- A BIOS or UEFI password, which guards starting this computer — if chosen: A firmware password guards one computer’s start-up. The stick is read on any other computer.
- Windows Hello, which signs a person in with a face or a fingerprint — if chosen: Windows Hello signs in to Windows. It does not encrypt a stick.

After the answer: the deciding words are marked. Reason: Encrypting a removable drive so a lost one cannot be read is BitLocker To Go. The other tools protect the Windows drive, the start-up or the sign-in.

#### Item 8

A chat, with its history: "Marisol, Security", Chat with the help desk.

> (Marisol, Security, at the left) Someone is guessing passwords for the same account all night. I want the account to stop taking tries after a few wrong ones.

**Which hardening step is this?**
(the options come in an order that depends on the seed of the question)
- Failed-attempt lockout, locking the account after a chosen number of wrong passwords (right)
- Password expiration, forcing everyone to choose a new password every few weeks or months — if chosen: Expiration changes passwords on a schedule. A guesser keeps guessing until the password changes.
- Account expiration, ending the account on a chosen date — if chosen: That ends an account on a date, for a contractor. It does not slow a guesser.
- Disabling AutoRun, so nothing starts from a plugged-in drive — if chosen: AutoRun is about drives and discs. It has nothing to do with sign-in tries.

After the answer: the deciding words are marked. Reason: Stopping a guesser means limiting the tries. Failed-attempt lockout locks the account after a chosen number of wrong passwords.

#### Item 9

A chat, with its history: "Hamish, Reception", Chat with the help desk.

> (Hamish, Reception, at the left) My USB drive is blocked on PC-12 at reception but works on PC-15 in the lab. It is the same sign-in on both.

A plain table, "Where each computer sits in the directory":

> Computer  |  OU  |  Policy linked to the OU  (the column heads)
> PC-12  |  Reception  |  Block USB storage
> PC-15  |  Lab  |  None

**Where does the difference come from?**
(the options come in an order that depends on the seed of the question)
- PC-12 sits in an OU that has a policy blocking USB drives, and PC-15 does not (right)
- Hamish’s domain account is damaged on PC-12, so it must be rebuilt for that computer only — if chosen: Hamish’s sign-in works on both computers. The block is a rule on the computer, not on who Hamish is.
- Hamish’s folder permissions differ between the two PCs — if chosen: Folder permissions belong to a folder. They do not decide whether a USB drive is accepted.
- PC-12 is missing BitLocker, which blocks USB drives — if chosen: BitLocker encrypts drives. Blocking USB storage is a Group Policy setting.

After the answer: the deciding words are marked. Reason: The same account behaves differently on two computers, so look at link 3. The computers sit in different OUs, and only the Reception OU has the policy that blocks USB storage.

#### Item 10

A caller reaches the help desk. You answer.

**Aurora calls about a locked account. What do you say?**
- An incoming call from "Aurora, Finance" (Incoming call · 8:40 AM). The turns arrive one after another; the learner picks a reply each time and the next turn follows the reply. Pick what you say. The call goes on from there. Nothing is marked until it ends, and a call is not on a clock.
- turn 1, the other side says: "Hi, this is Aurora in Finance. My account is locked and I have a meeting in five minutes. Please unlock it now." [pushes: Aurora is in a hurry and wants an unlock.]
  - reply "I can help. First I will check it is you by calling the number on your directory record, then unlock it.": goes on to turn 2, where the pressure comes back
  - reply "Of course, I understand the hurry, so I will unlock the account right now and you can get into your meeting without any delay.": the call ends (not this one): Anyone can say a name and a hurry. The unlock waits until the caller is checked by something Aurora did not give. [slip: reset or unlocked an account before confirming who was asking]
  - reply "Sure. Read me your employee number and the name of your manager, and I will unlock the account as soon as both match what you tell me.": the call ends (not this one): An employee number the caller reads out is something Aurora supplied, and others can find it. The check has to come from a record the desk holds, such as a call to the number on file. [slip: reset or unlocked an account before confirming who was asking]
- turn 2, the other side says: "That is my desk phone, yes. While you are in there, can you make me an administrator on the Finance share? It would save waiting." [pushes: Aurora is verified, and now wants more access than an unlock.]
  - reply "I will unlock you now. More access needs your manager’s approval on a ticket, which I will open and update.": the call ends (right): The number on the directory record is something Aurora did not supply, so it checks who Aurora is. An unlock is one job; extra access is another, and it goes through the approval, so Aurora keeps only what the job needs.
  - reply "Done: I have made you an administrator on the Finance share, so you will not have to wait for anyone.": the call ends (not this one): Administrator rights on a share are far above what the job needs. Extra access goes through the manager’s approval in a ticket. [slip: gave more access than the job needs]
  - reply "Unlocked. For the Finance share, get a colleague on the team to add you to their group; that is quicker than a ticket.": the call ends (not this one): Access added by a colleague skips the approval. Extra access goes through the manager’s approval in a ticket, so there is a record and Aurora keeps only what the job needs. [slip: gave more access than the job needs]
- After it ends: the lines of every turn that pushed are marked and named ("It pushes:"), and the reply where it could have ended the right way is named ("You could have ended it at your first reply: “the reply”." or "You ended it as soon as you could.").

After the answer: Reason: Before an unlock the desk checks the caller by something Aurora did not supply: here, a call to the number on the directory record. Extra access is a separate change that needs approval, because least privilege gives only what the job needs.

#### Item 11

A question the phone reads aloud, never by itself: a button "Hear the question" (then "Hear it again") reads it with a voice on the phone when the learner taps, and once they have tapped the next question in the run is read when they tap Next. A phone with no voice of its own shows the words and says so. Its words: **A stranger gets through a secure door right after an employee, before it shuts.**

**Type the one-word name for this.**
- One box and "Answer" (shut until something is typed; Enter sends it), and "Not yet", which answers with nothing and shows the answers. "Not sure? Tap Not yet to see the answers." Nothing is marked before the answer.
- What counts as the same: capital letters, punctuation, "a", "an", "the" and "and" do not matter; a number in words is the number ("twenty-seven" is 27); words in brackets are optional; one small misspelling in the whole answer is forgiven (a word that is one letter off, in words of four letters or more); parts of an answer said in any order. A word left out or added, or another word, is a miss.
- After: the mark (Right, Not this one, or "Not yet") with "You said: …", then the accepted answers, every one, the one given marked "You gave this one" (and "Words in brackets are optional." when some words are in brackets). After a miss with something typed: "If what you said means the same, say so. It counts this time, and the question comes back later to be sure." with the button "My answer means the same". It counts right in that sitting (shown as "Counted on your word"), is logged and listed under the result and in the results, and is not a good day for the schedule, so the question comes back.
- The accepted answers shown after (Accepted answers):
  - tailgating
  - tailgate

After the answer: Reason: Following close behind someone through a door is tailgating. An access control vestibule stops it with two doors.

#### Item 12

The question, read aloud as above: **A code that works once and is then useless, such as one sent in a text message.**

**Type its short name.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - otp

After the answer: Reason: A code that works once is an OTP, a one-time password. A TOTP is an OTP made from the clock.

#### Item 13

The question, read aloud as above: **The desk changed a Group Policy rule and wants it to reach a computer now instead of waiting.**

**Type the command, with its switch.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - gpupdate /force

After the answer: Reason: gpupdate /force applies Group Policy now. gpresult /r shows which policies applied.

#### Item 14

The question, read aloud as above: **A PC is not following a policy. The desk wants a list of the policies that actually applied to it.**

**Type the command, with its switch.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - gpresult /r

After the answer: Reason: gpresult /r shows which policies applied. gpupdate /force applies them again.

#### Item 15

A chat, with its history: "Kai, Design", Chat with the help desk.

> (Kai, Design, at the left) I sign in to my own laptop with a four-digit PIN. On the shared studio PC I typed the same PIN and it was refused, though my account is fine.

**Why was the PIN refused?**
(the options come in an order that depends on the seed of the question)
- The PIN belongs to Kai’s laptop only, so the studio PC does not know it (right)
- Kai’s account is locked, because the studio PC counted the PIN as a wrong password — if chosen: A locked account would be refused on Kai’s laptop too.
- The studio PC needs a hardware token before any PIN works — if chosen: A token is a second check. Nothing in the ticket says one is required.
- The studio PC treats a PIN as a password, so Kai must make it longer — if chosen: A PIN is not a short password. It is tied to the one PC it was made on, so length is not the problem.

After the answer: the deciding words are marked. Reason: A PIN is a short code tied to the one PC it was made on, so the same PIN means nothing on another PC.

#### Item 16

A chat, with its history: "Asma, Sales", Chat with the help desk.

> (Asma, Sales, at the left) In the office my Documents folder shows my files on every PC I sit at, but they are not on the laptop itself. How does that work?

**Which feature is it?**
(the options come in an order that depends on the seed of the question)
- A home folder or folder redirection, which keeps the files on a server (right)
- EFS, which encrypts the files so any PC can open them — if chosen: EFS encrypts files for one account. It does not move them to a server.
- A login script that copies the files to each PC at sign-in — if chosen: A login script runs a small program at sign-in, such as connecting drives. Here the files are kept on the server.
- A local account, which stores a copy of the files on every PC — if chosen: A local account exists on one PC only, and its files stay there.

After the answer: the deciding words are marked. Reason: A personal folder kept on a server, shown on any PC, is a home folder; redirecting Documents to the server does the same.

#### Item 17

A chat, with its history: "Ira, Facilities", Chat with the help desk.

> (Ira, Facilities, at the left) The new laptops came with Windows Home. I tried to join one to the company domain and the option is missing.

**What is the cause?**
(the options come in an order that depends on the seed of the question)
- Windows Home cannot join a domain; Pro and above can (right)
- The domain controller is down, so it should be restarted — if chosen: A domain controller that was down would give an error. The option itself is missing.
- Group Policy blocks domain joins in that OU — if chosen: A policy applies to computers already in the domain. This one is not yet.
- Ira’s account has no permission, so make Ira an administrator — if chosen: An administrator still sees no option on Home.

After the answer: the deciding words are marked. Reason: The join option is missing because the edition is Home. Pro and above can join a domain.

Then a screen: you can stop here, your place is kept.

## Step 16: Questions

6 questions, shuffle, with about 30% from earlier lessons mixed in, unlabeled. A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 18

A chat, with its history: "Andile, HR", Chat with the help desk.

> (Andile, HR, at the left) Every morning I sign in to the payroll site, the benefits site and the training site, each with its own password. Surely there is a way to sign in once.

**Which feature lets one sign-in open all three?**
(the options come in an order that depends on the seed of the question)
- SSO, where the company’s sign-in service vouches for Andile to each site, using a standard such as SAML (right)
- MFA, adding a second check such as a code from Andile’s phone to every one of the three separate sign-ins — if chosen: MFA makes each sign-in stronger. It adds a step; it does not remove the other sign-ins.
- IAM, creating and removing accounts for the three sites — if chosen: IAM is the job of managing accounts and access. It does not join three sign-ins into one.
- Zero Trust, checking every request from the three sites again — if chosen: Zero Trust is the idea of checking each request. It does not give one sign-in.

After the answer: the deciding words are marked. Reason: One sign-in that opens several apps is SSO. The company’s sign-in service tells each app who the person is, and SAML is a standard way to do that.

#### Item 19

A chat, with its history: "Tarek, Audit", Chat with the help desk.

> (Tarek, Audit, at the left) The audit found an account on our laptops that anyone can use with no personal settings, and it has limited rights. It is turned off on most machines but on for a few.

**Which account is it, and what is the fix?**
(the options come in an order that depends on the seed of the question)
- The Guest account; disable it on the laptops where it is on (right)
- The default Administrator account; rename it and change its password — if chosen: The default Administrator has full rights, not limited ones. The account in the audit is Guest.
- A power user account; move it to the standard group — if chosen: Power user is an older group between standard user and administrator. The audit describes an account anyone can use.
- A Microsoft account; remove the email address from it — if chosen: A Microsoft account belongs to a person with an email address. It is not an account anyone can use.

After the answer: the deciding words are marked. Reason: An account anyone can use, with limited rights and no personal settings, is Guest. Hardening disables it so nobody can sign in with it.

#### Item 20

A chat, with its history: "Nicholas, Legal", Chat with the help desk.

> (Nicholas, Legal, at the left) Last year I encrypted a folder of contracts with EFS under my account. IT rebuilt my profile this week and gave me a new account, and now I cannot open the folder.

**What happened?**
(the options come in an order that depends on the seed of the question)
- EFS ties the files to the old account’s certificate, and the new account does not have it (right)
- BitLocker has locked the whole drive since the profile rebuild, and it needs its recovery password — if chosen: BitLocker locks a drive at start-up, and the rest of Nicholas’s files open. This one folder was encrypted by EFS.
- The share permission for the new account is Read only — if chosen: A low permission would let Nicholas open and read the files. Nicholas cannot open them at all.
- User Account Control is blocking the folder — if chosen: UAC calls for administrator rights. It does not encrypt or hide a folder.

After the answer: the deciding words are marked. Reason: One folder cannot be opened after the account changed, and it was encrypted by that account: EFS. The certificate is needed, so it should have been backed up before the rebuild.

#### Item 21

A chat, with its history: "Cole, Server team", Chat with the help desk.

> (Cole, Server team, at the left) An engineer needs administrator rights on the billing server for one hour tonight to install a patch. We do not want them to keep them afterward.

**Which approach fits?**
(the options come in an order that depends on the seed of the question)
- Just-in-time access, which removes the rights after the hour (right)
- Make them a permanent administrator and trust them to be careful — if chosen: Permanent rights are far more than one hour of work needs.
- Give them the default administrator password, written on a note — if chosen: A shared default password gives full rights to anyone who reads the note, and nothing is ever taken back.
- Add their account to the Guest group for the night so it is limited — if chosen: Guest has limited rights. It cannot install a patch.

After the answer: the deciding words are marked. Reason: Rights for one task, then removed, is just-in-time access, which is what privileged access management does.

#### Item 22

A chat, with its history: "Raj, Accounts", Chat with the help desk.

> (Raj, Accounts, at the left) I sign in to my desk PC fine. On the spare PC in the meeting room my name and password are rejected, though they are the same ones.

A plain table, "From the desk’s records":

> Computer  |  Joined to the domain  (the column heads)
> Raj’s desk PC  |  Yes
> Meeting-room PC  |  No

**Why is the sign-in rejected on one PC?**
(the options come in an order that depends on the seed of the question)
- The meeting-room PC is not on the domain, so it has no account for Raj (right)
- Raj’s password expired overnight, on one PC only — if chosen: A password belongs to the account, not to a PC. It would fail on Raj’s desk PC too.
- A Group Policy has locked Raj’s account out of that one computer, though not out of Raj’s desk PC — if chosen: A policy that blocked Raj would apply to computers in a domain. This PC is not in it.
- The firewall on the meeting-room PC blocks the sign-in — if chosen: The firewall controls network traffic. It does not reject a name that the PC does not have an account for.

After the answer: the deciding words are marked. Reason: The same sign-in works on one PC and not another, and the records show one is joined to the domain and one is not. The domain account is unknown to a PC outside the domain: link 1 differs per computer.

#### Item 23

A chat, with its history: "Fatima, Reception", Chat with the help desk.

> (Fatima, Reception, at the left) A visitor plugged a USB stick into the front desk PC and a program started by itself before anyone opened anything. How do we stop that?

**Which hardening step is it?**
(the options come in an order that depends on the seed of the question)
- Disable AutoRun, so nothing on a plugged-in drive starts by itself (right)
- A BIOS or UEFI password, so that nobody can change the boot order or other start-up settings — if chosen: A firmware password guards start-up settings. The program started after Windows was running.
- A shorter screen lock timeout for the reception PC — if chosen: A lock stops a person using a PC left alone. The program ran by itself.
- Disabling the Guest account on every computer — if chosen: Guest is a sign-in account. The USB program did not sign in to anything.

After the answer: the deciding words are marked. Reason: A program that starts by itself from a plugged-in drive is AutoRun. Disabling it is the hardening step.

Then a screen: you can stop here, your place is kept.

## The check

8 new questions, no help. No answer is shown until the end. The questions come in mixed order.

To pass:
- At least 7 right

#### Check question 24

A chat, with its history: "Kathleen, Pharmacy", Chat with the help desk.

> (Kathleen, Pharmacy, at the left) The door to our drug store room opens with a card. Staff lend their cards to each other, and we cannot tell who went in. We want the door to open only for the person themselves.

**Which way of opening the door fits?**
(the options come in an order that depends on the seed of the question)
- A fingerprint reader, since the body cannot be lent (right)
- A fob held near the reader, since each one is numbered — if chosen: A fob is carried, like a card. It can be lent in the same way.
- A smart card with a chip, since it is harder to copy — if chosen: A smart card is still a thing someone holds. Lending it is exactly the problem.
- A digital pass on the phone, since people keep their phones — if chosen: A phone can also be lent, and it can open the door for someone else.

After the answer: the deciding words are marked. Reason: Cards, fobs and phones are things a person has, so they can be lent. Biometrics, such as a fingerprint, is who the person is, so only they can open the door.

#### Check question 25

A chat, with its history: "Caller, by chat", Chat with the help desk.

> (Caller, by chat, at the left) I am Chris Bell, the CFO’s assistant. The CFO is traveling and needs the password reset now. My employee number is 40718 and my manager is Olga Ward, who will confirm it.

**What do you do first?**
(the options come in an order that depends on the seed of the question)
- Look Chris up in the directory and call the number on that record (right)
- Check the employee number Chris gave against the directory records — if chosen: Chris read out the number personally. Matching it proves Chris knows a number, not who Chris is.
- Call Olga Ward on the number Chris gave you and check whether Chris is genuine — if chosen: Anyone can give the number of a friend. The manager has to be looked up in the directory.
- Reset it and force a new password at the next sign-in — if chosen: The reset still hands the account to whoever is typing. The check comes before it.

After the answer: the deciding words are marked. Reason: Before a reset the desk checks the caller by something the caller did not supply: the directory record and the number on it. A number, a name or a manager the caller gives proves nothing.

#### Check question 26

A chat, with its history: "Ismael, Compliance", Chat with the help desk.

> (Ismael, Compliance, at the left) Staff keep emailing spreadsheets with customer card numbers to their personal addresses. I want the system to spot the card numbers and stop the email leaving.

**Which control is that?**
(the options come in an order that depends on the seed of the question)
- DLP, which spots sensitive data and blocks it from leaving (right)
- MDM, which enforces rules such as screen locks and remote wipe on phones and tablets — if chosen: MDM manages mobile devices: screen lock, encryption, remote wipe. It does not read email contents.
- IAM, which creates accounts and removes their access — if chosen: IAM manages who has accounts and access. It does not look at what is sent out.
- An ACL, which lists who may use a folder — if chosen: An ACL decides who may open a file or folder. It does not stop its contents being emailed once someone may open it.

After the answer: the deciding words are marked. Reason: Spotting sensitive data in what is sent and blocking it is DLP, data loss prevention.

#### Check question 27

A chat, with its history: "Steven, Planning", Chat with the help desk.

> (Steven, Planning, at the left) I have Modify on the Projects folder, but in its subfolder Budget I can only read. My manager says it should be the same.

A plain table, "Security of the Budget subfolder":

> Check  |  Value  (the column heads)
> Inheritance from Projects  |  Turned off
> Steven  |  Read

**Why can Steven only read in Budget?**
(the options come in an order that depends on the seed of the question)
- Inheritance is off on Budget, so it keeps its own level and no longer takes Projects’ Modify (right)
- Steven’s sign-in works only on the Projects folder and is not accepted on its subfolder called Budget — if chosen: A sign-in belongs to the account and works for every folder Steven can reach.
- The share permission on Projects is lower than the NTFS level — if chosen: The ticket shows no share permission at all. The difference is inside the folder: Projects against Budget.
- User Account Control is blocking the change in Budget — if chosen: UAC prompts for administrator rights on a change. It does not lower a permission.

After the answer: the deciding words are marked. Reason: Permissions flow down from a folder to what is inside it, unless inheritance is turned off on the subfolder. Budget has it off and its own level for Steven is Read.

#### Check question 28

A chat, with its history: "Gus, Field team", Chat with the help desk.

> (Gus, Field team, at the left) The company replaced my laptop’s motherboard. Now it stops before Windows loads and shows a strange screen.

A plain table, "What the screen says":

> Line  (the column heads)
> BitLocker recovery
> Enter the recovery password to unlock this drive.
> Recovery password ID: 4F2A-9C10

A plain table, "From the desk’s records":

> Laptop  |  Recovery password stored  (the column heads)
> Gus’s laptop  |  Yes, in the directory under ID 4F2A-9C10

**What gets Gus in?**
(the options come in an order that depends on the seed of the question)
- The recovery password stored in the directory, found by the ID on the screen (right)
- Gus’s Windows sign-in password, typed in at that screen, since it is the same account as before — if chosen: BitLocker unlocks the drive before Windows loads. Windows’ own password is not what it wants.
- A new PIN made in Windows Hello and typed in at that screen — if chosen: Windows Hello is for signing in once Windows runs. The drive is still locked.
- Clear the TPM in the firmware settings to remove the lock — if chosen: Clearing the TPM removes the code it holds, and the drive then opens only with the recovery password. The stored password opens it with the data kept.

After the answer: the deciding words are marked. Reason: BitLocker locks the drive and, after a hardware change, wants its recovery password. The desk’s records show the password is stored in the directory, and the ID on the screen finds it. Without it the data stays locked.

#### Check question 29

The question, read aloud as above: **In a company domain, rules are applied to the accounts and computers in an OU: password rules, blocked USB drives, locked settings.**

**Type the two-word name of the feature.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - group policy
  - group policies

After the answer: Reason: Group Policy applies rules to the accounts and computers in an OU. Security groups hold permissions and a login script only runs a program at sign-in.

#### Check question 30

A chat, with its history: "Quentin, Kiosk team", Chat with the help desk.

> (Quentin, Kiosk team, at the left) Someone at a shared kiosk changed the boot order and started the PC from their own USB stick. I need to stop people changing start-up settings.

**Which single step does that?**
(the options come in an order that depends on the seed of the question)
- A BIOS or UEFI password (right)
- A screen lock after two minutes — if chosen: A lock stops use of a signed-in PC. The visitor changed the firmware before Windows.
- Failed-attempt lockout on the accounts — if chosen: Lockout limits password tries inside Windows. The change was made before Windows started.
- Disabling the Guest account — if chosen: Guest is a Windows account. The boot order is not in Windows.

After the answer: the deciding words are marked. Reason: Start-up settings and the boot order live in the BIOS or UEFI. A password on them is the step that stops people changing them.

#### Check question 31

A chat, with its history: "Sophie, Imaging", Chat with the help desk.

> (Sophie, Imaging, at the left) The new PC image still has the standard Administrator account with the password it came with. Everyone who builds PCs knows that name and password.

**What do you do?**
(the options come in an order that depends on the seed of the question)
- Change the default administrator name and password (right)
- Leave it, because nobody outside the building knows about it — if chosen: The standard name and password are public knowledge. Leaving them is leaving the door open.
- Turn off password expiration for that account so it never changes — if chosen: That keeps the factory password forever. It does the opposite of the fix.
- Move the account to the Guest group so it has fewer rights — if chosen: An administrator account moved to Guest stops working for its job and still has the known password. Change the password.

After the answer: the deciding words are marked. Reason: A default administrator account with a known password is a way in. Hardening changes the name and the password.

## The result

For example "8 of 8: passed" or "6 of 8: not yet", each rule above shown as met or not met, then every answer with its feedback, the missed ones first.
