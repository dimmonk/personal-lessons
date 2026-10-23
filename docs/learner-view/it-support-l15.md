# IT Help Desk: Ports and protocols

Revision 2, live. Part: Ports and protocols. Where the subject ends up: Take a ticket you have never seen (a user's email, chat or call about a computer, phone, printer, network, account or security problem) and work it the way a help desk technician does: sort it and set its priority, get the user's story and what changed, try the known fix with a limit, then narrow it down with the cheapest test that splits what works from what does not, fix one thing at a time, confirm with the user and write it up, or hand it on with everything you found; and know every fact and scenario on both CompTIA A+ exams well enough to pass them.

## The why

Anita works at the branch office. Since this morning Remote Desktop, the program that shows them the screen of their computer at head office, says it cannot connect. Web pages and email work fine. The firewall list shows one line changed: a number, 3389, is blocked.
A technician who knows what 3389 is for finds the fault in a minute. One who does not, reinstalls things. Here you learn the numbers on the A+ exam by the job each one does, so you remember them by meaning, and you practice them from memory the way the exam tests them.

## Step 1: A port is a numbered door

Every computer on a network has an address, a number like 203.0.113.20. The address finds the computer. A port finds the program on that computer that should answer. Think of a building with numbered doors: the address is the street number, and the port is the door.
A program that answers at a door is a service. A protocol is the agreed way two computers talk to each other, and each service has one. The exam names a service by its protocol, such as HTTP.
A firewall is a program or a box that decides which doors stay open. It lets traffic through or blocks it by port number, and each rule has a direction: some rules cover traffic leaving the building, some cover traffic arriving from outside. So a blocked door stops one service and leaves the others alone. This is the last link of the chain you know from getting online: the cable or Wi-Fi, the address, the gateway, the name lookup, and then the service at its door. The numbers below are the standard ones, and the exam tests them from memory.

## Step 2: Learn them by the job

Fourteen services, each with its number, are too many to memorize one by one, so each is tied to a job. They fall into four kinds of job: the web and getting online, mail, moving files, and managing other computers.
Reading a list again feels like learning, but it is weak. Covering the answer and trying to recall it is what makes it stay, and coming back to it after a few days is better than doing it all at once. The questions here do that, and the weekly review brings each group back.

## Step 3: The web and getting online

A plain table, "The web and getting online":

> Port  |  Service  |  Its job  (the column heads)
> 53  |  DNS (Domain Name System)  |  Turns a name like example.com into the number address of the computer. A phone book for the network.
> 67 and 68  |  DHCP (Dynamic Host Configuration Protocol)  |  Hands an address to a device that has none when it joins. The server listens on 67, the device on 68.
> 80  |  HTTP (Hypertext Transfer Protocol)  |  Loads web pages. Everything travels as readable text.
> 443  |  HTTPS (HTTP Secure)  |  The same web pages, encrypted: scrambled so nobody on the way can read them. The padlock in the browser.

HTTP and HTTPS are a pair: the plain one on 80, the secure one on 443.

## Step 4: Mail

A plain table, "Mail: three services, three jobs":

> Port  |  Service  |  Its job  (the column heads)
> 25  |  SMTP (Simple Mail Transfer Protocol)  |  Sends mail out, and passes it from server to server. S is for sending. Mail programs usually hand outgoing mail to the server on port 587; the exam asks for 25.
> 110  |  POP3 (Post Office Protocol, version 3)  |  Receives mail by downloading it to one device, and usually removing it from the server. The older way.
> 143  |  IMAP (Internet Message Access Protocol)  |  Receives mail by leaving it on the server and showing it, so a phone and a laptop show the same mailbox and agree on what is read or deleted.

The mail trio: SMTP sends, POP3 and IMAP receive. The two receiving numbers are 110 and 143, the older one first.

## Step 5: Moving files

A plain table, "Moving and sharing files":

> Port  |  Service  |  Its job  (the column heads)
> 20 and 21  |  FTP (File Transfer Protocol)  |  Moves files to and from a server. Port 21 is the front door where you sign in and give commands; port 20 is the back door the file data comes through in the usual (active) mode. The password travels as readable text.
> 445  |  SMB (Server Message Block), also named CIFS (Common Internet File System)  |  Shared folders and shared printers on a Windows network. CIFS is the older name for the same job.
> 137, 138 and 139  |  NetBIOS over TCP/IP, also called NetBT (TCP is explained two steps on)  |  An older way for Windows computers to find each other by name and share files: 137 for names, 138 for short messages, 139 for the sharing session, in that order. Newer Windows shares go straight over 445.

## Step 6: Managing other computers

A plain table, "Reaching and looking up":

> Port  |  Service  |  Its job  (the column heads)
> 22  |  SSH (Secure Shell)  |  Type commands on another computer, over an encrypted link. The password cannot be read on the way. A common use is managing Linux servers, computers that run Linux instead of Windows.
> 23  |  Telnet  |  The same job as SSH, but everything, passwords included, travels as readable text. SSH replaced it.
> 3389  |  RDP (Remote Desktop Protocol)  |  Shows you the screen of another Windows computer and lets you use it as if you sat there.
> 389  |  LDAP (Lightweight Directory Access Protocol)  |  Looks up accounts, passwords and computers in the company directory, the central list of who and what is on the network. Microsoft’s directory is called Active Directory.

Two pairs help the memory. SSH is 22 and Telnet is 23, the secure one next to the plain one it replaced, as 443 is the secure partner of 80.

## Step 7: TCP and UDP: two ways to deliver

Every one of these services sends its data in one of two ways. TCP first opens a connection between the two computers, confirms that each piece arrived and sends again any piece that was lost. It is the careful way. UDP opens nothing, sends the pieces and does not check. It is the quick way, for short messages where asking again is cheaper than waiting.
Web pages, mail, files and remote sign-in must arrive whole, so they use TCP. DHCP is a device with no address yet, shouting for one, and there is no connection to open, so it uses UDP. A DNS lookup is one short question and one short answer, so it uses UDP; when an answer is too big for one short message, DNS uses TCP, so DNS uses both. The table gives the delivery for every number.

A plain table, "How each port delivers":

> Port  |  Service  |  Delivers by  (the column heads)
> 20 and 21  |  FTP  |  TCP
> 22  |  SSH  |  TCP
> 23  |  Telnet  |  TCP
> 25  |  SMTP  |  TCP
> 53  |  DNS  |  UDP for short answers, TCP for big ones
> 67 and 68  |  DHCP  |  UDP
> 80  |  HTTP  |  TCP
> 110  |  POP3  |  TCP
> 143  |  IMAP  |  TCP
> 137 and 138  |  NetBIOS names and short messages  |  UDP
> 139  |  NetBIOS sharing session  |  TCP
> 389  |  LDAP  |  TCP (a rarer UDP form exists)
> 443  |  HTTPS  |  TCP
> 445  |  SMB  |  TCP
> 3389  |  RDP  |  TCP (it can also use UDP)

The shortcut: UDP is DHCP, the short DNS answers, and NetBIOS names and messages. Of these services, everything else that you must get whole is TCP.

## Step 8: A working ping is not an open door

A wrong idea, marked wrong: “Web pages load and the computer answers a ping, so the network is fine and the problem must be on the user’s computer.”
The right line: A ping only checks whether a computer is there. Web pages show that the doors for the web are open. A firewall can block one door, such as 3389 or 25, and leave everything else working. When one service fails and the others work, find that service’s number and check that door. A firewall list can hold several blocked lines; only the one whose number matches the failing service explains the ticket.

## Step 9: A worked example

A chat, with its history: "Anita, Branch office", Chat with the help desk.

> (Anita, Branch office, at the left) Remote Desktop to my computer at head office says it cannot connect. It worked on Friday. Web pages and my email are fine.

A plain table, "The branch firewall: rules for traffic leaving the branch (changed this morning)":

> Port  |  Rule  (the column heads)
> 53  |  Allow
> 80  |  Allow
> 443  |  Allow
> 25  |  Allow
> 23  |  Block
> 3389  |  Block

Before the working, the learner may commit to a choice (not scored, not stored):
**Web pages and email work for Anita. What does that show?**
(the options come in an order that depends on the seed of the question)
- The link to head office works, so only one service is stuck.
- Remote Desktop must be working too, so they mistyped.
- Their computer at head office must be switched off.
- Restart their computer and try Remote Desktop again.

The working, one step at a time:
1. Write down every cause that fits “Remote Desktop cannot connect”.: The link between the branch and head office is down; the computer at head office is off; the password is wrong; the door for Remote Desktop is closed somewhere on the way.
1. Name your favorite cause and test it with the cheapest check.: The link to head office: it dropped last month. Open a web page and send an email. Both work, so the link is up and the name lookup works.
1. Match the symptom to a service and a number.: Remote Desktop is RDP, port 3389. One service fails while the web and mail work, so check that one door.
1. Read the firewall list for that number.: 53, 80, 443 and 25 are allowed. Two lines are blocked: 23 and 3389. Remote Desktop is 3389, so that is the line that matters; 23 is Telnet, which nobody should use anyway.
1. Act on the result.: The desk’s rule is that firewall changes belong to the network team, so hand them the number and the time: allow 3389 for the branch if the company allows it. The first guess cost a minute; the answer was one number.

Then the answer: The link to head office works, so only one service is stuck. Web pages and mail passing shows the link and the name lookup work. Remote Desktop uses port 3389, and the firewall list shows that number blocked, changed this morning. The other blocked line, 23, is Telnet and has nothing to do with it.

## Step 10: Questions

4 questions, listed, with help (shown). A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 1

A chat, with its history: "Gaspard, Network team", Chat with the help desk.

> (Gaspard, Network team, at the left) **I need to type commands on the new Linux server (a company computer that runs Linux, an operating system like Windows, and serves others) from my desk. The security rule says nothing typed, passwords included, may travel as readable text. Which service do I allow through the firewall?**

Help on screen: the words that decide it are marked.

**Which service?**
(the options come in an order that depends on the seed of the question)
- SSH, port 22 (right)
- Telnet, port 23 — if chosen: Telnet does the same job but sends everything, passwords too, as readable text. SSH replaced it.
- RDP, port 3389 — if chosen: RDP shows the screen of a Windows computer. The job here is typing commands.
- FTP, port 21 — if chosen: FTP moves files. It gives no place to type commands.

After the answer: the deciding words are marked. Reason: The job is typing commands on another computer, with nothing readable on the way. That is SSH on port 22. Telnet on 23 does the job in plain text.

#### Item 2

A chat, with its history: "Anika, Sales", Chat with the help desk.

> (Anika, Sales, at the left) **I read a message on my phone, but my laptop still shows it as new. A message I deleted on the laptop is still on the phone. How do I get them to agree?**

Help on screen: the words that decide it are marked.

**Which mail service should both be using to receive mail?**
(the options come in an order that depends on the seed of the question)
- IMAP, port 143 (right)
- POP3, port 110 — if chosen: POP3 downloads mail to one device and usually removes it from the server, so each device ends with its own copy.
- SMTP, port 25 — if chosen: SMTP sends mail out. It does not keep or show a mailbox.
- SMB, port 445 — if chosen: SMB shares folders and printers on a Windows network. It does not keep a mailbox.

After the answer: the deciding words are marked. Reason: Two devices that must agree on what is read and deleted need the mail kept on the server: IMAP, port 143. POP3 on 110 downloads it to one device, and SMTP on 25 only sends.

#### Item 3

A chat, with its history: "Eileen, Purchasing", Chat with the help desk.

> (Eileen, Purchasing, at the left) **I can open the supplier’s site by typing its address, 203.0.113.20, but not by typing its name. Other sites fail by name too.**

Help on screen: the words that decide it are marked.

**Which service is not doing its job?**
(the options come in an order that depends on the seed of the question)
- DNS, port 53 (right)
- DHCP, ports 67 and 68 — if chosen: DHCP hands out addresses. The computer has one, since the number address works.
- HTTP, port 80 — if chosen: HTTP loaded the page when Eileen typed the number, so it works.
- LDAP, port 389 — if chosen: LDAP looks up accounts in the company directory. It has nothing to do with website names.

After the answer: the deciding words are marked. Reason: The page loads by number and fails by name. Turning a name into a number is DNS, port 53.

#### Item 4

A chat, with its history: "Philip, Branch office", Chat with the help desk.

> (Philip, Branch office, at the left) **The new branch firewall lets web and mail through, but I cannot open the team folder on the head office file server. It is a Windows shared folder. Which port must it allow?**

Help on screen: the words that decide it are marked.

**Which port?**
(the options come in an order that depends on the seed of the question)
- 445, SMB (right)
- 21, FTP — if chosen: FTP moves files to a server as a transfer. A Windows shared folder opens through SMB instead.
- 389, LDAP — if chosen: LDAP looks up accounts in the directory. The folder itself is shared by SMB.
- 25, SMTP — if chosen: SMTP sends mail. Mail already works.
- 22, SSH — if chosen: SSH types commands on another computer. A Windows shared folder opens through SMB instead.

After the answer: the deciding words are marked. Reason: A Windows shared folder is SMB, port 445 (CIFS is its older name). Web and mail already pass, so the door left to open is 445.

Then a screen: you can stop here, your place is kept.

## Step 11: Questions

7 questions, shuffle. A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 5

A question the phone reads aloud, never by itself: a button "Hear the question" (then "Hear it again") reads it with a voice on the phone when the learner taps, and once they have tapped the next question in the run is read when they tap Next. A phone with no voice of its own shows the words and says so. Its words: **Which port number does HTTPS use? Type the number.**

**Type the number.**
- One box and "Answer" (shut until something is typed; Enter sends it), and "Not yet", which answers with nothing and shows the answers. "Not sure? Tap Not yet to see the answers." Nothing is marked before the answer.
- What counts as the same: capital letters, punctuation, "a", "an", "the" and "and" do not matter; a number in words is the number ("twenty-seven" is 27); words in brackets are optional; one small misspelling in the whole answer is forgiven (a word that is one letter off, in words of four letters or more); parts of an answer said in any order. A word left out or added, or another word, is a miss.
- After: the mark (Right, Not this one, or "Not yet") with "You said: …", then the accepted answers, every one, the one given marked "You gave this one" (and "Words in brackets are optional." when some words are in brackets). After a miss with something typed: "If what you said means the same, say so. It counts this time, and the question comes back later to be sure." with the button "My answer means the same". It counts right in that sitting (shown as "Counted on your word"), is logged and listed under the result and in the results, and is not a good day for the schedule, so the question comes back.
- The accepted answers shown after (Accepted answers):
  - 443

After the answer: Reason: HTTPS is HTTP made secure, so nobody on the way can read the page. The plain one is on 80 and the secure one is on 443.

#### Item 6

The question, read aloud as above: **Mail going out is sent by a service on port 25. Type its short name.**

**Type the short name.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - SMTP
  - Simple Mail Transfer Protocol

After the answer: Reason: SMTP, Simple Mail Transfer Protocol, sends mail out and passes it from server to server. S is for sending. POP3 and IMAP receive.

#### Item 7

A chat, with its history: "Ted, Reception", Chat with the help desk.

> (Ted, Reception, at the left) A visitor’s laptop just joined our Wi-Fi and has no address yet. Which service gives it one, and how does that service send its data?

**Which is right?**
(the options come in an order that depends on the seed of the question)
- DHCP, over UDP (right)
- DHCP, over TCP — if chosen: TCP first opens a connection and confirms every piece. The laptop has no address to open one from, so DHCP uses UDP.
- DNS, over UDP — if chosen: DNS turns names into addresses. It does not give the laptop its own address.
- LDAP, over TCP — if chosen: LDAP looks up accounts in the directory. It does not give out addresses.

After the answer: the deciding words are marked. Reason: A device with no address gets one from DHCP, on ports 67 and 68, and it uses UDP: one short message with no connection to open.

#### Item 8

The question, read aloud as above: **FTP moves files and uses two port numbers. Type both numbers.**

**Type both numbers.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - 20 21
  - 21 20

After the answer: Reason: FTP uses 21 for the commands and 20 for the file data. The password travels as readable text.

#### Item 9

A chat, with its history: "August, Security", Chat with the help desk.

> (August, Security, at the left) Our audit found an old switch (a box that joins office network cables) managed from a desk over port 23. The auditor says to stop. Why, and what do we use?

**Which is right?**
(the options come in an order that depends on the seed of the question)
- Port 23 is Telnet, which sends passwords as readable text. Use SSH. (right)
- Port 23 is Telnet, which is too slow. Use RDP. — if chosen: Speed is not the problem, and RDP shows a Windows screen. The fault is the readable password.
- Port 22 is Telnet, which sends passwords as readable text. Use SSH. — if chosen: Telnet is on 23. Port 22 is SSH, the encrypted one.
- Port 23 is SSH, which is secure. Leave it as it is. — if chosen: SSH is on 22. Port 23 is Telnet, the unencrypted one.

After the answer: the deciding words are marked. Reason: Port 23 is Telnet, which sends passwords as readable text. SSH on port 22 is the encrypted replacement for the same job.

#### Item 10

The question, read aloud as above: **Computers look up user accounts in the company directory over LDAP. Type its port number.**

**Type the number.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - 389

After the answer: Reason: LDAP, port 389, looks up accounts, passwords and computers in the company directory, such as Active Directory.

#### Item 11

A chat, with its history: "Robin, Network team", Chat with the help desk.

> (Robin, Network team, at the left) I am writing the firewall rule for name lookups on port 53. Most answers are short, and a few are too big for one short message. How does DNS deliver?

**Which is right?**
(the options come in an order that depends on the seed of the question)
- By UDP for short answers and by TCP for big ones (right)
- By UDP only, because every answer is short — if chosen: Some answers are too big for one short message, and those go by TCP.
- By TCP only, because lookups must arrive whole — if chosen: The usual short lookup goes by UDP. TCP is the second way, used for big answers.
- By TCP for short answers and by UDP for big ones — if chosen: It is the other way round: UDP for the short answers, TCP for the big ones.

After the answer: the deciding words are marked. Reason: Port 53 is used both ways: UDP for the short answers, TCP for the big ones.

Then a screen: you can stop here, your place is kept.

## Step 12: Questions

8 questions, shuffle, with about 30% from earlier lessons mixed in, unlabeled. A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 12

A chat, with its history: "Madhav, Security", Chat with the help desk.

> (Madhav, Security, at the left) Our firewall log shows hundreds of connection attempts from outside, all to port 3389 on our computers. What is someone trying to reach?

**What is on port 3389?**
(the options come in an order that depends on the seed of the question)
- Remote Desktop, the screens of our computers (right)
- Mail, our mail server — if chosen: Mail uses 25, 110 and 143.
- Shared folders on the file server — if chosen: Shared folders use SMB on port 445.
- The web server, our website — if chosen: A website uses 80 and 443.

After the answer: the deciding words are marked. Reason: Port 3389 is Remote Desktop. A log full of attempts on it is someone trying to reach the screens of the computers.

#### Item 13

A chat, with its history: "Shira, Finance", Chat with the help desk.

> (Shira, Finance, at the left) Since this morning nobody can open our bank’s login page, which starts with https://. Plain http:// pages and everything else work.

A plain table, "The office firewall (changed this morning)":

> Port  |  Rule  (the column heads)
> 53  |  Allow
> 80  |  Allow
> 443  |  Block
> 25  |  Block
> 23  |  Block

**Which blocked port explains it?**
(the options come in an order that depends on the seed of the question)
- 443 (right)
- 80 — if chosen: 80 is the plain HTTP door, and plain pages open, so 80 is working.
- 25 — if chosen: Port 25 is blocked, but it is the mail-sending service. Pages do not use it.
- 23 — if chosen: Port 23 is blocked, but it is Telnet, for typing commands on another computer. Pages do not use it.
- Clear the browser’s saved data and try again — if chosen: Clearing it is cheap, but the list already shows blocked ports, and plain pages open from the same browser.

After the answer: the deciding words are marked. Reason: Pages that start with https:// use port 443, the secure partner of 80. Of the three blocked lines, only 443 is a web door.

#### Item 14

A chat, with its history: "Marianne, Accounts", Chat with the help desk.

> (Marianne, Accounts, at the left) My mail program, set to send on SMTP’s own port, receives mail, but every message I send sits in the Outbox.

A plain table, "The office firewall (changed this morning)":

> Port  |  Rule  (the column heads)
> 25  |  Block
> 110  |  Allow
> 143  |  Allow
> 80  |  Allow
> 3389  |  Block
> 22  |  Block

**What is the likely cause?**
(the options come in an order that depends on the seed of the question)
- The blocked line for port 25 stops mail going out. (right)
- The blocked line for port 22 stops mail going out. — if chosen: Port 22 is blocked, but it is SSH, for typing commands on another computer.
- The blocked line for port 3389 stops mail going out. — if chosen: Port 3389 is blocked, but it is Remote Desktop, which shows another computer’s screen.
- The allowed line for port 143 stops mail going out. — if chosen: Port 143 is allowed, and it receives mail. Sending is the failing job.
- Reinstall the mail program and send again. — if chosen: Receiving works from the same program, so the program is not the fault, and the list already shows a blocked line that fits.

After the answer: the deciding words are marked. Reason: Receiving works and sending fails, so the sending service is the one to check. That is port 25. Of the blocked lines, 22 and 3389 are other jobs.

#### Item 15

A chat, with its history: "Alec, Lab", Chat with the help desk.

> (Alec, Lab, at the left) The old lab scanner saves scans to a shared folder it finds by the computer’s NetBIOS name. After this morning’s firewall change it says it cannot find the computer.

A plain table, "The lab firewall (changed this morning)":

> Port  |  Rule  (the column heads)
> 137, 138, 139  |  Block
> 445  |  Allow
> 389  |  Allow
> 3389  |  Block

**Which ports must be allowed again?**
(the options come in an order that depends on the seed of the question)
- 137, 138 and 139 (right)
- 445 only — if chosen: That door is already allowed, and the scanner still cannot find the computer. Finding it by NetBIOS name uses other numbers.
- 389 only — if chosen: 389 looks up accounts in the directory, and it is already allowed.
- 3389 only — if chosen: 3389 is blocked, but it is Remote Desktop. The scanner does not use it.

After the answer: the deciding words are marked. Reason: The scanner finds the computer by NetBIOS name, which uses ports 137, 138 and 139. They are the ones the new rule blocks.

#### Item 16

The question, read aloud as above: **A service delivers its data by TCP or by UDP. Which does NetBIOS use for its names on port 137? Type TCP or UDP.**

**Type TCP or UDP.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - UDP
  - User Datagram Protocol

After the answer: Reason: Port 137 looks up computer names with short messages, so it uses UDP. The sharing session on 139 uses TCP, because shared files must arrive whole.

#### Item 17

The question, read aloud as above: **Port 3389 lets you use another Windows computer’s screen. Type the short name of the service.**

**Type the short name.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - RDP
  - Remote Desktop
  - Remote Desktop Protocol

After the answer: Reason: RDP, Remote Desktop Protocol, is port 3389. It shows you another Windows computer’s screen and lets you use it.

#### Item 18

A chat, with its history: "Jaime, Network team", Chat with the help desk.

> (Jaime, Network team, at the left) I am writing a firewall rule that only needs TCP. Which of these lists has services that all deliver by TCP?

**Which list is all TCP?**
(the options come in an order that depends on the seed of the question)
- SMTP, POP3, IMAP and HTTPS (right)
- SMTP, POP3, IMAP and DHCP — if chosen: DHCP delivers by UDP; the other three are TCP.
- HTTPS, SSH, RDP and NetBIOS names on 137 — if chosen: NetBIOS names on 137 deliver by UDP; the others are TCP.
- SMB, FTP, SSH and DHCP — if chosen: DHCP delivers by UDP; the others are TCP.

After the answer: the deciding words are marked. Reason: Of these services, only DHCP, the short DNS answers and NetBIOS names and messages deliver by UDP. SMTP, POP3, IMAP and HTTPS are all TCP.

#### Item 19

A chat, with its history: "Dylan, Reception", Chat with the help desk.

> (Dylan, Reception, at the left) Nothing opens by name on the front desk computer, but typing the address 203.0.113.20 loads the supplier’s site. The firewall was changed this morning.

A plain table, "The office firewall (changed this morning)":

> Port  |  Rule  (the column heads)
> 53  |  Allow
> 80  |  Allow
> 443  |  Allow
> 3389  |  Block
> 23  |  Block
> 137, 138, 139  |  Block

**Which blocked line explains it?**
(the options come in an order that depends on the seed of the question)
- 3389 — if chosen: 3389 is Remote Desktop. It has nothing to do with looking up names.
- 23 — if chosen: 23 is Telnet. It has nothing to do with looking up names.
- 137, 138, 139 — if chosen: These are NetBIOS names inside Windows networks. Websites are looked up by DNS, port 53, which is allowed.
- None: port 53 is allowed, so the fault is not in this list (right)

After the answer: the deciding words are marked. Reason: Looking up a name is DNS, port 53, and it is allowed. The blocked lines are other jobs, so the list does not explain it.

Then a screen: you can stop here, your place is kept.

## The check

12 new questions, no help. No answer is shown until the end. The questions come in mixed order.

To pass:
- At least 10 right

#### Check question 20

The question, read aloud as above: **Which service uses port 443? Type its short name.**

**Type the short name.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - HTTPS
  - HTTP Secure
  - Hypertext Transfer Protocol Secure

After the answer: Reason: Port 443 is HTTPS, the web with its pages encrypted, the padlock in the browser. Plain HTTP is on port 80.

#### Check question 21

The question, read aloud as above: **DHCP uses two port numbers, one for the server and one for the device. Type both numbers.**

**Type both numbers.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - 67 68
  - 68 67

After the answer: Reason: DHCP, which hands out addresses, uses 67 for the server and 68 for the device.

#### Check question 22

A chat, with its history: "Lisbeth, Network team", Chat with the help desk.

> (Lisbeth, Network team, at the left) Our monitoring tool lists the services that deliver by UDP, the quick way with no connection. Which one of these should be on its list?

**Which service uses UDP?**
(the options come in an order that depends on the seed of the question)
- DHCP, handing out addresses (right)
- SMTP, sending mail — if chosen: Mail must arrive whole, so SMTP uses TCP, which confirms each piece.
- FTP, moving files — if chosen: A file must arrive whole, so FTP uses TCP.
- HTTPS, secure web pages — if chosen: Web pages must arrive whole, so HTTPS uses TCP.

After the answer: the deciding words are marked. Reason: DHCP uses UDP. Web, mail and file moving must arrive whole, so they use TCP.

#### Check question 23

The question, read aloud as above: **Type the port number for POP3.**

**Type the number.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - 110

After the answer: Reason: POP3 is port 110. It receives mail by downloading it to one device and usually removing it from the server.

#### Check question 24

A chat, with its history: "Josef, Sales", Chat with the help desk.

> (Josef, Sales, at the left) My mail program asks for an outgoing mail server. Which service is that, and which port does the exam give for it?

**Which is it?**
(the options come in an order that depends on the seed of the question)
- SMTP, port 25 (right)
- POP3, port 110 — if chosen: POP3 receives mail. The outgoing server is the one that sends.
- IMAP, port 143 — if chosen: IMAP receives mail and keeps it on the server. It does not send.
- HTTP, port 80 — if chosen: HTTP loads web pages. It is not a mail service.

After the answer: the deciding words are marked. Reason: Outgoing mail is sent by SMTP, port 25. POP3 on 110 and IMAP on 143 receive.

#### Check question 25

The question, read aloud as above: **Type the port number for SMB, the Windows shared folders and printers.**

**Type the number.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - 445

After the answer: Reason: SMB, also named CIFS, is port 445. It shares folders and printers on a Windows network.

#### Check question 26

The question, read aloud as above: **Which older Windows service uses ports 137 to 139? Type its name.**

**Type the name.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - NetBIOS
  - NetBT
  - NetBIOS over TCP/IP
  - NetBIOS over TCP IP
  - NetBIOS NetBT
  - Network Basic Input/Output System

After the answer: Reason: Ports 137, 138 and 139 are NetBIOS (NetBT): the older way for Windows computers to find each other by name and share files.

#### Check question 27

The question, read aloud as above: **Type the port number for SSH.**

**Type the number.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - 22

After the answer: Reason: SSH is port 22: typing commands on another computer over an encrypted link. Telnet is the unencrypted one next to it, on 23.

#### Check question 28

A chat, with its history: "Ivo, Security", Chat with the help desk.

> (Ivo, Security, at the left) We are blocking port 3389 on the firewall today. What will stop working for our staff?

**What stops working?**
(the options come in an order that depends on the seed of the question)
- Remote Desktop to the office computers (right)
- Receiving mail on the phone — if chosen: Receiving mail uses 110 or 143.
- Opening secure web pages — if chosen: Secure pages use 443.
- Opening shared folders — if chosen: Shared folders use SMB on 445.
- Nothing: a ping to each computer still works — if chosen: A ping only shows that a computer is there. Port 3389 is a door, and blocking it stops the service behind it.

After the answer: the deciding words are marked. Reason: Port 3389 is Remote Desktop. Blocking it stops that one service and leaves mail, web pages and shared folders alone.

#### Check question 29

The question, read aloud as above: **Telnet sends passwords as readable text. Which service replaced it? Type its short name.**

**Type the short name.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - SSH
  - Secure Shell

After the answer: Reason: SSH, Secure Shell, replaced Telnet. It does the same job of typing commands on another computer, but encrypted.

#### Check question 30

A chat, with its history: "Debra, Network team", Chat with the help desk.

> (Debra, Network team, at the left) The new firewall allows port 53 only for UDP. Short name lookups work, but a few lookups with big answers fail. What do we change?

**What do we change?**
(the options come in an order that depends on the seed of the question)
- Also allow port 53 for TCP (right)
- Also allow ports 67 and 68 — if chosen: Those are DHCP, which hands out addresses. They do not carry lookups.
- Allow port 443 for TCP — if chosen: Port 443 is HTTPS, the secure web. Lookups go through 53.
- Change port 53 to TCP only — if chosen: That would stop the short lookups, which go by UDP.

After the answer: the deciding words are marked. Reason: Short DNS answers go by UDP and big ones by TCP, both on port 53. Allowing only one way breaks the other.

#### Check question 31

A chat, with its history: "Pablo, Lab", Chat with the help desk.

> (Pablo, Lab, at the left) Our old NetBIOS rule says 137, 138 and 139 all use TCP. Is that right?

**Which is right?**
(the options come in an order that depends on the seed of the question)
- No: 137 and 138 use UDP, and 139 uses TCP (right)
- Yes: all three use TCP — if chosen: Only the sharing session on 139 uses TCP. Names and short messages use UDP.
- No: all three use UDP — if chosen: The sharing session on 139 moves files and must arrive whole, so it uses TCP.
- No: 137 uses TCP, and 138 and 139 use UDP — if chosen: It is the other way round: 137 and 138 are UDP, and 139 is TCP.

After the answer: the deciding words are marked. Reason: NetBIOS names (137) and short messages (138) are UDP. The sharing session (139) is TCP.

## The result

For example "12 of 12: passed" or "9 of 12: not yet", each rule above shown as met or not met, then every answer with its feedback, the missed ones first.
