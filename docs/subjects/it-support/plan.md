# IT Support: plan (2026-10-23)

Research: `docs/research/it-support.md` (IT1 to IT29, how support technicians reason and how to teach it) and
`docs/research/it-support-aplus.md` (the A+ 220-1201 and 220-1202 exam map, cited here as "A+ map" with its objective
numbers, e.g. "C1 2.1" for Core 1 objective 2.1). General learning findings: `docs/learning-science.md` (P),
`docs/research/designing-a-subject.md` (D), `docs/research/review-after-lessons.md` (R).

## What the owner asked for (thread of 2026-10-23, their words)

- Learning that gets them ready for an entry-level job at a large company, lanes "IT support / help desk / desktop support"
  first; business systems / application support and operations coordinator later, as their own subjects.
- "CompTIA A+ identified as a practical near-term credential"; "I need some type of formal training"; they let me decide,
  and I decided the subject covers both A+ exams in full.
- Context kept in memory (`career-move-goals.md`): remote work welcome; on-call 24/7 work only for very high pay.

## After this you can

**…take a ticket you have never seen (a user's email, chat or call about a computer, phone, printer, network, account or
security problem) and work it the way a help desk technician does: sort it and set its priority, get the user's story and what
changed, try the known fix with a limit, then narrow it down with the cheapest test that splits what works from what does not,
fix one thing at a time, confirm with the user and write it up, or hand it on with everything you found; and you know every
fact and scenario on both CompTIA A+ exams well enough to pass them.**

**Real-world test** (pass mark ours, from IT21 and P26): (1) the job: 10 new tickets in their real form across all systems,
mixed, no help; pass when the first move is right on 8 and no ticket loses a user's data or is closed without the user's
confirmation (lesson 28's check, part one); (2) the exam: a 40-question mock drawn from every exam topic in proportion to
the domain weights (A+ map section 1), pass at 80%, a margin over CompTIA's 675/700 of 900 because our questions are easier to
guess than the real ones (judgement call).

## The way of thinking (IT-way, steps 1 to 9 of the research note)

What the subject teaches, in the learner's words. Every ticket in every lesson is answered with these moves.

1. **What kind of ticket, and how soon?** Broken now (an incident: get them working), asked for (a request: follow the
   procedure), or the same thing breaking again and again (a problem: hand on the pattern with evidence). How many people and
   how important the work that is stopped (impact); how long it can wait (urgency). (IT10, IT11, IT12)
2. **Their words first, then what the desk already knows.** Let them describe it, ask open questions to narrow it, say it back.
   Search the knowledge base for the same symptom. (IT17, IT18, IT14)
3. **What changed? Protect their data before you touch anything.** An update, a new device, a move, a password change. Can it be
   made to happen again? Back up first. (IT2, IT17)
4. **The known fix, with a time limit.** A restart, the article's fix. Decide before you start how long you will try; if it does
   not work, stop guessing. (IT3, IT11)
5. **Cut the problem in half.** List more than one possible cause. Run the cheapest test that splits the system into a part that
   works and a part that does not: another user, another machine, another cable, can it reach the network, does it fail before or
   after sign-in. Keep cutting. Swap in a known-good part or compare with a working machine where it fits. (IT4, IT5, IT8)
6. **One change at a time; drop a cause the test rules out.** (IT9, IT3)
7. **Check that it works for them, and tell them what happens next.** Follow change rules; offer a workaround when the fix must
   wait. (IT2, IT10, IT15, IT17)
8. **Hand it on with everything you found** when the time limit or the desk's rule says so: what they saw, what you tried, what
   each test showed, the device. (IT13)
9. **Write it so the next person can reuse it**: their words, the device and setup, what fixed it, what caused it. Close only
   when the user confirms. (IT11, IT14, IT15)

**The method is not on the exam.** CompTIA removed the six-step method from the V15 exams but tells first-job learners to use it
(IT1, IT2). The lessons say so once, in lesson 1, and never present the steps as exam content. Steps 1 to 9 above are the six steps
with the desk's own steps (sorting, hand-on, write-up) put in their places by ITIL 4 and KCS (IT11, IT14).

**Systems are taught as chains of what each part does.** Structured troubleshooting, a general strategy plus a few levels of "what
does this part do for the whole", doubled faults solved in less training time (IT5); theory alone does not train troubleshooters
(IT7). So each system lesson teaches its chain (power to desktop; cable to Wi-Fi to address to gateway to name to service; app to
queue to driver to printer to paper; account to password to permission), puts each exam symptom on a link of it, and names the
cheapest test that tells which side of a link the fault is on. The chains themselves are my cut of the A+ objectives (judgement
call; no source gives a desktop chain, research note "Open questions").

**Exam facts are recalled, not reread.** Ports, cables, RAID, wireless, commands, malware and attack names are asked from memory
with the answer explained after each, and come back in the weekly review (IT25, IT26, IT27; P16, R2). The scenario objectives
("Given a scenario") are asked as tickets (IT24).

## How the lessons are shaped, and why

- **Each lesson opens with a ticket**, then the move or the chain, then one worked ticket with the technician's reasoning shown,
  including a wrong first guess that the test rules out (IT28, IT9; P core 1).
- **Tickets arrive in their real form**: an email or chat (the message block), a ticket record or command output (a table
  document), a user on the phone (the exchange: the learner picks what to say next, and the user answers) (IT16, IT19, D6).
- **Practice fades**: a first group with the deciding words marked or the move named, then groups with none (IT29, 4.2).
- **Every answer is explained**, naming the move that decides it (IT25, P16).
- **Look-alikes side by side**: incident against request, a cable fault against an address fault, NTFS against share
  permissions, incremental against differential (P12).
- **Later lessons mix in earlier topics unlabelled** so the learner must choose the move or the chain, not reuse the last one
  (IT25 interleaving; 4.5).
- **A check on new tickets or new questions** ends every lesson, with no help.

## Topics, parts and lessons

28 lessons in 8 units. Weight follows the job (unit 1) and the exam's domain weights (A+ map section 1). Each line: the lesson,
what it teaches, its check, and the A+ objectives it covers.

### Unit 1, Working a ticket (the way of thinking; C2 4.1, 4.2 part, 4.7; IT1 to IT20)
1. **What kind of ticket, and how soon** (move 1). Incident, request or problem; impact and urgency to priority. Check: 6 new
   tickets, kind and priority. (IT10, IT11, IT12; C2 4.1 categories, severity)
2. **Getting the story** (move 2). Open questions, saying it back, plain words, searching the knowledge base. Calls as exchanges.
   Check: 5 new, 2 calls. (IT17, IT18, IT19; C2 4.7)
3. **What changed, and protect the data** (move 3). The first questions; back up before touching; reproduce it. Check: 5 new.
   (IT2)
4. **The known fix, and when to stop** (move 4). A known fix with a time limit; what a guess that fails costs. Check: 5 new. (IT3, IT11)
5. **Cut it in half** (move 5). Listing causes; the cheapest test that splits; another user, another machine, a known-good part.
   Check: 6 new. (IT4, IT5, IT8)
6. **One change at a time** (move 6). Dropping a ruled-out cause; the first idea that will not let go. Check: 5 new. (IT9)
7. **Finishing: confirm, hand on, write it up** (moves 7 to 9). Confirm with the user, hand on with everything found, the ticket
   note and the article. Check: 5 new. (IT11, IT13, IT14, IT15; C2 4.1)
8. **When the user is upset** (move 2 under pressure). Do not argue, dismiss or judge; say what happens next and when; follow up.
   Check: 4 calls. (IT17, IT20; C2 4.7)

### Unit 2, The computer itself (C1 3.x, 5.1 to 5.3; 25% + part of 28% of Core 1)
9. **From the power button to the desktop** (the boot chain). Power, the start-up test, firmware, the boot drive, Windows, sign-in;
   each symptom on its link. Check: 6 new tickets. (C1 5.1, 5.2; C2 1.2 boot methods; IT5)
10. **The parts inside** (recall plus choosing): power supply voltages and wattage, motherboard form factors and slots, CPU and
    firmware settings, memory. Check: 8 questions. (C1 3.3, 3.5, 3.6)
11. **Storage and RAID**: drive kinds and interfaces, RAID 0, 1, 5, 6, 10, drive symptoms. Check: 8 questions. (C1 3.4, 5.2)
12. **Cables, connectors and screens**: which cable and connector for the job, display kinds and screen symptoms. Check: 8. (C1 3.1,
    3.2, 5.3)
13. **Printers**: the print path from app to paper; laser, inkjet, thermal and impact; each printer symptom on its link; setup and
    maintenance. Check: 6 tickets. (C1 3.7, 3.8, 5.6)

### Unit 3, Networks (C1 2.x, 5.5; C2 1.5 network commands, 1.7; 23% of Core 1)
14. **How a computer gets online** (the connection chain): link, address (DHCP, the 169.254 address), gateway, name lookup,
    service; ipconfig, ping, nslookup, tracert read. Check: 6 tickets with command output. (C1 2.4, 2.6, 5.5; C2 1.5, 1.7)
15. **Ports and protocols** (recall): the 14 port groups, TCP and UDP. Check: 10 from memory. (C1 2.1)
16. **Network hardware, connections and tools**: router, switch, access point, firewall, PoE, modem kinds, connection and network
    types, server roles, the technician's tools. Check: 8. (C1 2.3, 2.5, 2.7, 2.8)
17. **Wireless and the small office network**: bands and standards, WPA2 and WPA3, setting up and securing a router. Check: 8.
    (C1 2.2; C2 2.3, 2.10)

### Unit 4, Phones, tablets and laptops (C1 1.x, 5.4; C2 2.8, 3.2, 3.3; 13% of Core 1)
18. **Mobile devices**: parts and replacements, connections, accounts, sync and company management (MDM); securing them. Check: 6.
    (C1 1.1 to 1.3; C2 2.8)
19. **Mobile problems**: hardware, app and security symptoms on their links. Check: 6 tickets. (C1 5.4; C2 3.2, 3.3)

### Unit 5, Operating systems (C2 1.x, 3.1; 28% of Core 2)
20. **Which Windows tool for the job**: Task Manager, the consoles (Event Viewer, Disk Management, Device Manager and the rest),
    Control Panel and Settings areas. Check: 8. (C2 1.4, 1.6)
21. **Windows at the command line**: navigation, network, disk, file, information and management commands. Check: 8. (C2 1.5)
22. **Installing and upgrading**: editions, requirements, installation kinds, partitions and file systems, apps' requirements,
    cloud office tools. Check: 8. (C2 1.1 to 1.3, 1.10, 1.11)
23. **Windows problems**: blue screens, slowness, boot failures, services, slow profiles; each on its link. Check: 6 tickets. (C2 3.1)
24. **Mac and Linux**: the Mac's tools and folders, Linux commands and files. Check: 8. (C2 1.8, 1.9)

### Unit 6, Security (C2 2.x, 3.4; 28% of Core 2)
25. **Accounts and access**: least privilege, sign-in and MFA kinds, users and groups, NTFS against share permissions, UAC,
    BitLocker, Active Directory and Group Policy; hardening a workstation. Check: 8. (C2 2.1, 2.2, 2.7)
26. **Malware and attacks**: malware kinds, social engineering and attacks by their signs, the ten-step removal in order, PC and
    browser security symptoms, browser settings, wiping and destroying drives. Check: 8. (C2 2.4, 2.5, 2.6, 2.9, 2.11, 3.4)

### Unit 7, The desk's procedures (C2 4.x; C1 4.x; 21% of Core 2, 11% of Core 1)
27. **Changes, backups, safety and the rules**: change management, backup kinds and 3-2-1, safety and the environment, licenses and
    regulated data, evidence and chain of custody, scripts, remote access, AI; then virtual machines and cloud models. Check: 10.
    (C2 4.2 to 4.6, 4.8 to 4.10; C1 4.1, 4.2)

### Unit 8, Ready for the job and the exam
28. **The whole ticket, and the mock exam**: tickets from every system, unlabelled, with every move; then a mock exam drawn from
    every topic. Check: the real-world test above. (IT24, IT25)

## Build notes

- Subject id `it-support`, field `work` (a new shelf, "Work", for job subjects; the owner's later lanes go there too).
- Strands: one per lesson topic; recall lessons have one strand per fact group so the weekly review brings each back on its own.
- Built a unit at a time; each lesson passes the learner review and the research check before it is `live` (build-subject 6).
- Not built: an exam-date countdown for the review (the civics interview rounds are civics-only in the engine); the weekly review
  spaces every fact already (IT27). Revisit if the owner books a date.
