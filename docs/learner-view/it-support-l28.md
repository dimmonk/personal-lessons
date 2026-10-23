# IT Help Desk: Policy, scripts, remote access, AI and the cloud

Revision 2, draft (the screen carries the draft line). Part: Policy, scripts, remote access, AI and the cloud. Where the subject ends up: Take a ticket you have never seen (a user's email, chat or call about a computer, phone, printer, network, account or security problem) and work it the way a help desk technician does: sort it and set its priority, get the user's story and what changed, try the known fix with a limit, then narrow it down with the cheapest test that splits what works from what does not, fix one thing at a time, confirm with the user and write it up, or hand it on with everything you found; and know every fact and scenario on both CompTIA A+ exams well enough to pass them.

## The why

It is 8 p.m. A user pastes a customer’s card details into a public AI chatbot. A new hire runs a script from a forum. A branch needs its Linux server restarted from home. Each is a small rule.
Six groups of those rules follow. Read a rule once, watch it used, then answer from memory.

## Step 1: Licenses, agreements, regulated data and policy

A plain table, "The term and what it means on a ticket":

> Term  |  What it means  (the column heads)
> Valid license  |  Permission to use software. Perpetual: pay once. Subscription: valid only while paid
> EULA  |  The end user license agreement, the terms you accept when you install
> DRM  |  Digital rights management: limits on copying content you bought
> Personal vs corporate  |  A personal license is for one person’s use. A company needs corporate (business or volume) licenses
> Open source  |  Its code is public and free to use, but it still has license terms
> NDA, MNDA  |  Nondisclosure agreement: a promise not to share the other side’s secrets. Mutual (MNDA): both sides promise
> Regulated data  |  Credit card numbers, government IDs (passport, Social Security number), PII (personally identifiable information, such as a name with an address) and healthcare records. Only people who need it handle it, in approved channels, never personal email; retention rules say how long to keep records
> AUP  |  Acceptable use policy: what staff may do with company computers and networks. A splash screen before sign-in makes people accept it

## Step 2: Scripts: a file that does the typing for you

A plain table, "Script file types":

> Ending  |  What it is  |  Runs on  (the column heads)
> .bat  |  A batch file: Command Prompt commands in a row  |  Windows
> .ps1  |  A PowerShell script  |  Windows
> .vbs  |  An older Windows scripting language, being retired  |  Windows
> .sh  |  A shell script  |  Linux and macOS
> .js  |  JavaScript, found in web pages  |  Web browsers and other hosts
> .py  |  A Python script  |  Any system with Python installed

Scripts automate restarting machines, remapping drives, installing apps, backups, gathering information and starting updates. Three risks: an unknown script can bring in malware; it can change settings nobody meant to change; a bad one can crash the machine by using up memory or leaving files open. Read it first and test it on one machine or in a sandbox.

## Step 3: Remote access: which tool reaches that machine

A plain table, "The remote tools":

> Tool  |  What it does  |  Watch out  (the column heads)
> RDP  |  Remote Desktop Protocol: the full Windows desktop of another computer  |  Never open it straight to the internet; use a VPN, strong sign-in and MFA (a second proof of identity)
> VPN  |  An encrypted tunnel into the company network, to the shares and servers. Not a screen tool  |  A hacked laptop on a VPN brings the attacker in
> VNC  |  Shows and controls the screen of another computer, on any system  |  Often weakly protected; run it inside a VPN or SSH tunnel
> SSH  |  Secure Shell: encrypted typed commands on a Linux server or network device, through port 22  |  Use strong sign-in
> RMM  |  Remote monitoring and management: an agent on each machine lets the desk patch, watch and control hundreds from one console  |  One account controls every machine, so protect it with MFA
> SPICE  |  A remote display for virtual machines  |  Turn on its encryption
> WinRM  |  Windows Remote Management: runs PowerShell commands on remote Windows machines (ports 5985, 5986)  |  Use the encrypted setup
> Third-party tools  |  Screen-sharing, video meeting, file transfer and desktop apps  |  The user agrees first; end the session when done; only approved tools

## Step 4: AI: what to paste, and what to trust

AI tools write text and code. Built into other software (application integration), such as email that drafts replies, they fall under company policy.
Plagiarism is handing in AI text, or anyone’s work, as your own. Three limits: bias (answers lean the way the training data leaned), hallucinations (a confident answer with invented facts or commands) and accuracy (it can be wrong, so check before you act). A public AI service may keep what you type, so never paste passwords, customer data or company secrets into it. A private one run by the company keeps data inside.

## Step 5: Virtual machines, containers and hypervisors

A virtual machine (VM) is a computer made of software inside a real one, the host; the VM is the guest. VMs serve as a sandbox (a sealed place to open a suspicious file, then delete), for test and development, for legacy software (an old program that needs an old Windows; keep that VM off the network or on a private virtual network) and for cross-platform use (Windows on a Mac). Application virtualization runs one app in its own sealed space.

A plain table, "What a VM host needs":

> Need  |  Why  (the column heads)
> Security  |  Its own updates and antivirus, kept apart from the other VMs
> Network  |  A virtual network card, on the real network or kept private
> Storage  |  Each VM’s disk is a large file on the host; it also needs memory, processor and the processor’s virtualization feature turned on in firmware

Desktop virtualization (VDI) runs people’s desktops as VMs on servers, so they sign in from any device. A container packs one app with what it needs and shares the host’s operating system, so it is small and starts in seconds. A hypervisor runs VMs. Type 1 runs on the hardware (bare metal), for servers. Type 2 runs as a program on an ordinary operating system, such as VirtualBox.

## Step 6: Cloud: where it lives and who runs what

A plain table, "Four cloud models":

> Model  |  Who uses it  (the column heads)
> Private  |  One organization only
> Public  |  Many customers, on a provider’s systems
> Hybrid  |  A private cloud and a public one working together
> Community  |  Organizations with the same needs share it, such as hospitals

A plain table, "Three service levels":

> Level  |  You get  |  You manage  (the column heads)
> IaaS  |  Infrastructure as a service: virtual servers, storage and network  |  The operating system and everything above it
> PaaS  |  Platform as a service: a place to build and run your app  |  Your app and its data
> SaaS  |  Software as a service: a finished app, such as email  |  Only your account and data

Traits: shared resources cost less; dedicated ones are reserved for you. Metered utilization: you pay for what you use; ingress is data in, egress is data out, priced differently. Elasticity: it grows and shrinks with demand. Availability: it stays up. File synchronization keeps the same files on every device. Multitenancy: many customers share the same systems, kept apart.

## Step 7: Running it first and reading it later

A wrong idea, marked wrong: “It looks harmless, and the forum says it fixes everything. I will run it now and read it later.”
The right line: The same shortcut hides in every group: a script run unread, a pasted customer detail, an open remote door. The damage is done before anyone knows what ran.

## Step 8: A worked example

A chat, with its history: "Eamon, Branch IT", Chat with the help desk.

> (Eamon, Branch IT, at the left) The Linux file server at the Dayton branch stopped sharing files. I need to restart its file service tonight. I am at home on my laptop.

A plain table, "From the desk’s notes on the Dayton branch":

> Note  (the column heads)
> The file server runs Linux with no desktop: it has only a text command line.
> Company computers outside the office must connect through the company VPN. The server has no direct line to the internet.
> Restarting a file service after hours is a standard change: no new approval is needed.

Before the working, the learner may commit to a choice (not scored, not stored):
**Which tools does Eamon use, in order?**
(the options come in an order that depends on the seed of the question)
- The VPN first, then SSH to the server
- RDP straight to the server’s address
- VNC straight to the server, with nothing in front of it
- A screen-sharing app, run by a user at the branch

The working, one step at a time:
1. Name the favorite tool, then test it against the server.: The first guess is RDP, because it is the tool most people know. But RDP is for a Windows desktop, and note 1 says this server has no desktop. RDP is ruled out.
1. Check how Eamon gets to the branch at all.: Note 2: the server is only reachable from the company network, so Eamon connects the VPN first. The VPN is not a screen tool; it is the way in.
1. Pick the tool that fits a Linux server with only a command line.: SSH, Secure Shell, on port 22. The sign-in uses the technician’s own account, and the typed command restarts the file service. Note 3 makes the restart a standard change, so it needs no new approval.
1. Check, then close properly.: Eamon, still at home on the VPN, opens a file from the share, and it works. The note lists the VPN, SSH, the account used and the service restarted. The VPN and SSH sessions are ended.

Then the answer: The VPN first, then SSH to the server. A Linux server with only a command line is reached with SSH, and from outside the company the way in is the VPN. RDP is for a Windows desktop and VNC would have left a door open to the internet.

## Step 9: Questions

5 questions, listed, with help (shown). A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 1

A chat, with its history: "Nora, Accounts", Chat with the help desk.

> (Nora, Accounts, at the left) **I am at home. I want the office file share to show up on my laptop, so that I can open a spreadsheet saved there.**

Help on screen: the words that decide it are marked.

**Which remote tool gets Nora onto the office network first?**
(the options come in an order that depends on the seed of the question)
- A VPN, which is an encrypted tunnel into the company network (right)
- RDP, which shows the Windows desktop of another computer — if chosen: RDP controls another computer’s desktop. Nora wants the share on Nora’s own laptop.
- SSH, which types encrypted commands on a Linux server — if chosen: SSH gives a command line on a server. It does not put a share on Nora’s laptop.
- VNC, which shows and controls the screen of another computer — if chosen: VNC shares another computer’s screen. It does not connect Nora’s laptop to the office network.

After the answer: the deciding words are marked. Reason: Reaching the office shares from home is the job of a VPN. RDP, SSH and VNC are used after you are on the network, to control a specific computer.

#### Item 2

A chat, with its history: "Ibrahim, Shop floor", Chat with the help desk.

> (Ibrahim, Shop floor, at the left) **An old time-clock program only runs on Windows 7. Our PCs have Windows 11, and we need that program every day.**

Help on screen: the words that decide it are marked.

**What lets a Windows 11 PC run that program?**
(the options come in an order that depends on the seed of the question)
- A virtual machine with Windows 7 inside, kept off the network (right)
- A container, which carries the program on the PC’s own system — if chosen: A container shares the host’s operating system, so it cannot give the program Windows 7.
- A PaaS account, which hosts new apps that people write — if chosen: PaaS is a platform for building and running apps. It does not run an old program on an old Windows.
- A VDI desktop running Windows 11 from a server — if chosen: VDI puts desktops on a server, but this desktop is Windows 11, and the program needs Windows 7.

After the answer: the deciding words are marked. Reason: An old program that needs an old system runs in a VM that holds that system. A container shares the host’s own operating system.

#### Item 3

A chat, with its history: "Mario, Shop owner", Chat with the help desk.

> (Mario, Shop owner, at the left) **I bought one copy of an office suite for myself, on a personal license. I want to install it on the five PCs in my shop.**

Help on screen: the words that decide it are marked.

**What is the problem?**
(the options come in an order that depends on the seed of the question)
- A personal license covers one person; a business needs corporate ones (right)
- Perpetual licenses expire after a year and must be bought again — if chosen: A perpetual license is paid once and used for good. A subscription is the kind that runs out.
- The DRM will block the second install, and only a new EULA lifts it — if chosen: DRM can limit how many installs there are, but a new EULA does not lift it. The real problem is the kind of license.
- There is none: a license bought once covers every PC in a building — if chosen: A license covers what its terms say. A personal one covers one person.

After the answer: the deciding words are marked. Reason: A personal license covers one person’s own use. Business PCs need corporate licenses.

#### Item 4

A chat, with its history: "Vera, Accounts", Chat with the help desk.

> (Vera, Accounts, at the left) **I found a .ps1 file on a forum that says it clears temp files and speeds things up. Can I run it on the accounting PC today?**

Help on screen: the words that decide it are marked.

**What do you tell Vera?**
(the options come in an order that depends on the seed of the question)
- Read it first and test it on a spare PC or in a sandbox (right)
- Run it now; it is only text, so it cannot harm the PC — if chosen: A script is text that does things. It can install malware or change settings, and it runs with the user’s rights.
- Rename it .bat first, because Windows trusts those more — if chosen: Renaming does not make it safe. It only changes how Windows tries to run the same lines.
- Run it as an administrator, so it finishes without errors — if chosen: More rights let a bad script do more damage. It does not make a script safe.

After the answer: the deciding words are marked. Reason: Scripts are read and tested on a safe machine before they reach a real one, and only from a trusted source.

#### Item 5

A chat, with its history: "Ellis, Customer service", Chat with the help desk.

> (Ellis, Customer service, at the left) **I pasted a customer’s name, address and card details into a public AI chatbot to help write a reply. The answer was good. Was that fine?**

Help on screen: the words that decide it are marked.

**What do you do about Ellis’s paste?**
(the options come in an order that depends on the seed of the question)
- Report the paste to the manager and stop it, since a public service may keep typed text, even card data (right)
- Tell Ellis the chatbot deletes everything once the window is closed, so nothing more is needed — if chosen: A public service makes no such promise. The text may be kept.
- Tell Ellis to run the reply through a plagiarism check, since that is the risk with AI text — if chosen: Plagiarism is about passing off work as your own. It has nothing to do with where customer data goes.
- Tell Ellis to keep using the tool, since the answer was good — if chosen: A good answer does not make the service safe. What matters is who keeps what is typed.

After the answer: the deciding words are marked. Reason: Private and regulated data stays out of a public AI service, whatever the quality of the answer, and a leak that already happened is reported to management.

Then a screen: you can stop here, your place is kept.

## Step 10: Questions

8 questions, shuffle. A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 6

A chat, with its history: "Brian, Office manager", Chat with the help desk.

> (Brian, Office manager, at the left) We want email, calendars and documents in a browser. We do not want to run servers or look after an operating system.

**Which service level is this?**
(the options come in an order that depends on the seed of the question)
- SaaS: a finished app that the provider runs for us (right)
- IaaS: virtual servers where we manage the operating system — if chosen: IaaS leaves the customer the operating system and everything above it, which is what Brian wants to avoid.
- PaaS: a platform where we build and run our own app — if chosen: PaaS is for building your own app. Brian wants finished tools.
- A community cloud: a model, not a level of service — if chosen: Community is a cloud model, about who shares it. The question is about what is provided.

After the answer: the deciding words are marked. Reason: Finished software used in a browser is SaaS. IaaS and PaaS leave more work with the customer.

#### Item 7

A question the phone reads aloud, never by itself: a button "Hear the question" (then "Hear it again") reads it with a voice on the phone when the learner taps, and once they have tapped the next question in the run is read when they tap Next. A phone with no voice of its own shows the words and says so. Its words: **A name together with an address and a birth date can point to one real person, and the company must protect it as regulated data.**

**What is this kind of data called? Type its short name.**
- One box and "Answer" (shut until something is typed; Enter sends it), and "Not yet", which answers with nothing and shows the answers. "Not sure? Tap Not yet to see the answers." Nothing is marked before the answer.
- What counts as the same: capital letters, punctuation, "a", "an", "the" and "and" do not matter; a number in words is the number ("twenty-seven" is 27); words in brackets are optional; one small misspelling in the whole answer is forgiven (a word that is one letter off, in words of four letters or more); parts of an answer said in any order. A word left out or added, or another word, is a miss.
- After: the mark (Right, Not this one, or "Not yet") with "You said: …", then the accepted answers, every one, the one given marked "You gave this one" (and "Words in brackets are optional." when some words are in brackets). After a miss with something typed: "If what you said means the same, say so. It counts this time, and the question comes back later to be sure." with the button "My answer means the same". It counts right in that sitting (shown as "Counted on your word"), is logged and listed under the result and in the results, and is not a good day for the schedule, so the question comes back.
- The accepted answers shown after (Accepted answers):
  - pii

After the answer: Reason: It is PII, personally identifiable information. Credit card numbers, government IDs and healthcare records are the other regulated kinds.

#### Item 8

A chat, with its history: "David, Systems", Chat with the help desk.

> (David, Systems, at the left) I am at my desk. I need to run the same PowerShell command on 20 Windows servers at once, with no screens to watch.

**Which remote tool fits?**
(the options come in an order that depends on the seed of the question)
- WinRM, which runs PowerShell on remote Windows machines (right)
- VNC, which shows and controls the screen of another computer — if chosen: VNC is for watching and clicking one screen. It would not run one command on 20 servers.
- SPICE, a remote display for virtual machines — if chosen: SPICE shows a VM’s screen. It does not run commands on many servers.
- A VPN, an encrypted tunnel into the company network — if chosen: A VPN is the way into the network, not the tool that runs the command.

After the answer: the deciding words are marked. Reason: Running PowerShell commands on remote Windows machines is the job of WinRM.

#### Item 9

A chat, with its history: "Farid, Retail", Chat with the help desk.

> (Farid, Retail, at the left) Our customer records stay in our own private cloud. For the holiday rush we rent web servers from a public cloud, and the two work together.

**Which cloud model is this?**
(the options come in an order that depends on the seed of the question)
- A hybrid cloud (right)
- A community cloud — if chosen: A community cloud is shared by several organizations. This is one company’s own mix.
- A private cloud — if chosen: Private means one organization’s own cloud alone. This one also uses a public cloud.
- A public cloud — if chosen: Public means a provider’s shared systems only. This company also runs its own.

After the answer: the deciding words are marked. Reason: A private cloud and a public one working together make a hybrid cloud.

#### Item 10

The question, read aloud as above: **Cloud services are metered. A company uploads a big backup and pays little for it, but is charged when it downloads data back out.**

**What is data coming into the cloud called? Type the word.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - ingress

After the answer: Reason: Data going in is ingress and data going out is egress. The two can be priced differently.

#### Item 11

The question, read aloud as above: **A support team uses a chatbot website that anyone can sign up for. The company runs a second AI tool of its own that keeps everything inside.**

**Which kind is the chatbot website that anyone can sign up for? Type public or private.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - public

After the answer: Reason: A public AI service may keep what is typed, so private and regulated data stays out. A private one run by the company keeps data inside.

#### Item 12

A chat, with its history: "Enrique, Legal", Chat with the help desk.

> (Enrique, Legal, at the left) We are about to show a partner company our product plans and see theirs. Both sides want to be bound to keep the other’s secrets.

**Which agreement is this?**
(the options come in an order that depends on the seed of the question)
- An MNDA, a mutual nondisclosure agreement that binds both (right)
- An NDA that only our side signs, covering our plans alone — if chosen: A one-way NDA binds only one party. Both want to be bound.
- An EULA, the terms a person accepts when installing software — if chosen: A EULA covers software use. It says nothing about secrets exchanged by two companies.
- An AUP, the rules for how staff use company computers — if chosen: An AUP governs the company’s own staff. It is not an agreement between two companies.

After the answer: the deciding words are marked. Reason: Two parties each protecting the other’s secrets is a mutual NDA (MNDA).

#### Item 13

The question, read aloud as above: **A batch file ends in .bat, and a shell script on Linux ends in .sh. A PowerShell script has its own ending.**

**What does a PowerShell script file end in? Type it with the dot.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - .ps1

After the answer: Reason: PowerShell scripts end in .ps1. A .bat is a batch file, .vbs is VBScript, .sh a shell script, .js JavaScript and .py Python.

Then a screen: you can stop here, your place is kept.

## Step 11: Questions

7 questions, shuffle, with about 30% from earlier lessons mixed in, unlabeled. A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 14

A chat, with its history: "Pamela, Help desk", Chat with the help desk.

> (Pamela, Help desk, at the left) A user on a Mac needs help. I want to see exactly what is on their screen and click for them, from my Windows PC.

**Which remote tool fits?**
(the options come in an order that depends on the seed of the question)
- VNC, which shows and controls a screen on any system (right)
- RDP, which shows the desktop of a Windows computer — if chosen: RDP is built for Windows desktops. A Mac user is not on one.
- SSH, which types encrypted commands on a server — if chosen: SSH gives a command line. It does not show their screen.
- WinRM, which runs PowerShell commands on Windows machines — if chosen: WinRM runs commands on Windows machines. It shows no screen, and their Mac is not one.

After the answer: the deciding words are marked. Reason: Seeing and controlling a screen on any system is a job for VNC, or a screen-sharing tool the company allows.

#### Item 15

A chat, with its history: "Loretta, Server team", Chat with the help desk.

> (Loretta, Server team, at the left) We are putting software straight on a new server, with no operating system underneath, to run twelve virtual machines.

**Which kind of hypervisor is this?**
(the options come in an order that depends on the seed of the question)
- Type 1, which runs directly on the server hardware (right)
- Type 2, which runs as a program on an operating system — if chosen: Type 2 needs an operating system under it, such as VirtualBox on a laptop. This server has none.
- A container engine, which shares the host’s operating system — if chosen: A container engine shares an operating system, and it does not run twelve machines of their own.
- VDI, which gives people their desktops from a server — if chosen: VDI delivers desktops to people. The question is about what runs the machines.

After the answer: the deciding words are marked. Reason: A hypervisor that runs straight on the hardware is Type 1. One that runs on an operating system is Type 2.

#### Item 16

A chat, with its history: "Benedict, Developer", Chat with the help desk.

> (Benedict, Developer, at the left) We write our own app. We want the provider to run the servers, the operating system and the software that runs the code, and we only upload our code.

**Which service level is this?**
(the options come in an order that depends on the seed of the question)
- PaaS: a platform to build and run our own app (right)
- IaaS: virtual servers where we look after the operating system — if chosen: With IaaS the customer manages the operating system and everything above it. Benedict wants the provider to do that.
- SaaS: a finished app that is used in a browser — if chosen: SaaS is software someone else wrote. Benedict is running their own code.
- A private cloud: a model for one organization only — if chosen: A private cloud is a model, about who uses it. The question is about the service level.

After the answer: the deciding words are marked. Reason: The provider running everything but your own app and data is PaaS.

#### Item 17

A chat, with its history: "Gareth, Help desk", Chat with the help desk.

> (Gareth, Help desk, at the left) An AI told me to run a command called repair-netstack --force. It sounds right, but I cannot find it in any manual or on any website.

**What most likely happened?**
(the options come in an order that depends on the seed of the question)
- A hallucination: the AI invented a command that sounds real (right)
- Bias: the AI leaned toward one system because of its training — if chosen: Bias skews answers toward some view. A command that does not exist is invented, which is a different limit.
- Plagiarism: the AI copied the command from a manual without credit — if chosen: Plagiarism is copying work without credit. A command found nowhere was not copied from anywhere.
- Multitenancy: other customers of the AI shared the command — if chosen: Multitenancy is many customers sharing a provider’s systems. It does not explain an invented command.

After the answer: the deciding words are marked. Reason: A confident answer that does not exist anywhere is a hallucination, which is why AI answers are checked before use.

#### Item 18

A chat, with its history: "Fox, Call center", Chat with the help desk.

> (Fox, Call center, at the left) Our agents sign in from any basic device and get their own Windows desktop, which actually runs on a server in the data center.

**What is this called?**
(the options come in an order that depends on the seed of the question)
- VDI, desktop virtualization with desktops on servers (right)
- A container, a package that shares the host’s operating system — if chosen: A container packs one app. Here each agent gets a whole desktop.
- A Type 2 hypervisor, a program running on an operating system — if chosen: A hypervisor type is about where the VM software runs, not about who gets the desktops.
- A sandbox, a sealed place to open suspicious files — if chosen: A sandbox is for safe testing. Agents use these desktops all day for work.

After the answer: the deciding words are marked. Reason: Desktops that run as VMs on servers and are used from any device are VDI.

#### Item 19

A chat, with its history: "Luke, Studio", Chat with the help desk.

> (Luke, Studio, at the left) A film I bought from an online store plays on my laptop but not on my tablet. The store says the film is protected so that it cannot be freely copied.

**What is the protection called?**
(the options come in an order that depends on the seed of the question)
- DRM, digital rights management for content (right)
- A EULA, the terms accepted when installing software — if chosen: A EULA is an agreement a person accepts. The limit on the film is built into the file.
- An AUP, the company’s rules for using its computers — if chosen: An AUP covers how staff use company computers, not the film.
- An MNDA, a promise by two sides to keep secrets — if chosen: An MNDA is an agreement between two parties and has nothing to do with a film.

After the answer: the deciding words are marked. Reason: Technology that limits copying or playing of content you bought is DRM.

#### Item 20

The question, read aloud as above: **SSH, Secure Shell, gives encrypted typed commands on a Linux server. Like every service, it listens on a numbered port.**

**Which port number does SSH use? Type the number.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - 22

After the answer: Reason: SSH uses port 22. RDP uses 3389.

Then a screen: you can stop here, your place is kept.

## The check

6 new questions, no help. No answer is shown until the end. The questions come in mixed order.

To pass:
- At least 5 right

#### Check question 21

A chat, with its history: "Mona, Clinic", Chat with the help desk.

> (Mona, Clinic, at the left) A nurse asked me to email a patient’s records to the nurse’s personal address so the nurse can finish notes at home.

**What does Mona do?**
(the options come in an order that depends on the seed of the question)
- Share the records only through an approved clinic channel, with people who need them (right)
- Email the records to the personal address, marked “private” in the subject line — if chosen: A label in the subject line protects nothing.
- Email the records to the personal address, since the nurse works at the clinic — if chosen: Working there does not make any address safe. The records leave the company’s control.
- Email the records to the personal address after taking out any card numbers — if chosen: Healthcare records are regulated as a whole. Credit cards are only one kind of regulated data.

After the answer: the deciding words are marked. Reason: Healthcare records are regulated data, kept inside approved channels and handled only by the people who need them.

#### Check question 22

A chat, with its history: "Edgar, Intern", Chat with the help desk.

> (Edgar, Intern, at the left) My cleanup script opened thousands of files and never closed them. The PC slowed down and then froze. Nothing was installed and no settings changed.

**Which risk of scripts is this?**
(the options come in an order that depends on the seed of the question)
- A crash from mishandled resources of the PC (right)
- Unintentionally introducing malware to the PC — if chosen: Nothing was installed, so no malware came in.
- Inadvertently changing system settings of the PC — if chosen: No settings changed. The problem was files left open.
- Running a script that came from an untrusted source — if chosen: The script was the intern’s own, and the problem was how it handled files.

After the answer: the deciding words are marked. Reason: Using up memory or leaving files open is the third risk of scripts: a crash from mishandled resources.

#### Check question 23

A chat, with its history: "Luke, IT contractor", Chat with the help desk.

> (Luke, IT contractor, at the left) I look after 300 PCs for clients. Each night I need to patch them, watch their health, and reach any of them quickly from one console.

**Which tool is built for this?**
(the options come in an order that depends on the seed of the question)
- RMM, remote monitoring and management with an agent on each PC (right)
- RDP, which opens the desktop of one Windows computer at a time — if chosen: RDP reaches one machine per connection. It does not patch or watch hundreds.
- A VPN, which is an encrypted tunnel into a network — if chosen: A VPN is the way in to a network. It does not manage the machines.
- SPICE, which shows a virtual machine’s screen — if chosen: SPICE is for virtual machines’ screens, not for patching 300 PCs.

After the answer: the deciding words are marked. Reason: One console to patch, watch and control many machines is RMM.

#### Check question 24

A chat, with its history: "Natalie, Manager", Chat with the help desk.

> (Natalie, Manager, at the left) An employee pasted a whole report written by an AI and handed it in as their own work, with no mention of the tool.

**Which issue is this?**
(the options come in an order that depends on the seed of the question)
- Plagiarism: passing off AI writing as their own (right)
- A hallucination: the AI made up facts in the report — if chosen: The story is about who wrote the report, not about whether the facts are invented.
- Bias: the report leans toward one view — if chosen: Nothing in the story is about the report leaning. It is about credit.
- Accuracy: the report could simply be wrong — if chosen: The accuracy of the report is a separate matter from who wrote it.

After the answer: the deciding words are marked. Reason: Presenting AI text as your own work is plagiarism, which a company policy on acceptable use names alongside what data may go in.

#### Check question 25

The question, read aloud as above: **A small package holds one app and what it needs, but it shares the host’s operating system instead of carrying a whole one. It starts in seconds.**

**What is this called? Type one word.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - container
  - containers

After the answer: Reason: This is a container. A VM carries a whole guest operating system, which is why it is bigger and slower to start.

#### Check question 26

A chat, with its history: "Yosef, Hospital IT", Chat with the help desk.

> (Yosef, Hospital IT, at the left) Several hospitals in our region share one cloud built for their common needs. They run it together, and it is closed to everyone else.

**Which cloud model is this?**
(the options come in an order that depends on the seed of the question)
- A community cloud, shared by several organizations with similar needs (right)
- A private cloud, used by one organization — if chosen: A private cloud serves one organization only. Several hospitals share this one.
- A public cloud, open to many customers — if chosen: A public cloud is open to many customers. This one is closed.
- A hybrid cloud, a private and a public cloud together — if chosen: Hybrid joins a private cloud and a public one. Nothing here is public.

After the answer: the deciding words are marked. Reason: A cloud shared by several organizations with the same needs, closed to others, is a community cloud.

## The result

For example "6 of 6: passed" or "4 of 6: not yet", each rule above shown as met or not met, then every answer with its feedback, the missed ones first.
