# IT Help Desk: What kind of ticket, and how soon

Revision 2, live. Part: What kind of ticket, and how soon. Where the subject ends up: Take a ticket you have never seen (a user's email, chat or call about a computer, phone, printer, network, account or security problem) and work it the way a help desk technician does: sort it and set its priority, get the user's story and what changed, try the known fix with a limit, then narrow it down with the cheapest test that splits what works from what does not, fix one thing at a time, confirm with the user and write it up, or hand it on with everything you found; and know every fact and scenario on both CompTIA A+ exams well enough to pass them.

## The why

It is 8:20 on a Tuesday and three tickets are waiting. Billing cannot open the claims program, and the claims go out at noon. A new hire starts next Monday and needs a laptop. The wall screen in room 4B has lost its connection for the fifth time in five weeks.
Which one do you open first, and what does each one need from you? Here you learn to sort a ticket by kind, and to give it a priority from the desk's own table.

## Step 1: Three kinds of ticket

Every ticket at a help desk is one of three kinds. The kind decides what you do first.
An incident is something that worked and has stopped or got worse. "The printer worked yesterday and prints nothing today." You get the person working again, with a workaround if the real fix must wait (a workaround is a temporary way to keep working), and you write down what you did. An incident can hit many people at once, such as a program that is blank for a whole department. That is an incident with a high impact.
A request is a routine job that the desk has fixed steps for: access to a shared folder (a folder on the company's storage that a group uses together), a new account, a new device, software from the approved list. "Please get a laptop and a login ready for our new hire." A login is the username and password that let a person sign in. The user wants a service, not a fault repaired. You follow the desk's steps.
A problem is the same thing happening again and again. "The room 4B screen dropped again, the fifth time in five weeks." The desk's rule here: when two or more earlier reports show the same fault (in its records, or listed with dates by the user), the new ticket is sorted as a problem. A fault seen for the first time, or once before, is still an incident. You still get this person working. But the cause is the real work, so you hand on the pattern with the evidence: the dates, the room, what ended it each time. ITIL itself keeps the user's ticket an incident and tracks the cause as a separate problem. This desk sorts the ticket as a problem so that the pattern gets handed on.

## Step 2: The nine moves, and where they come from

Sorting the ticket is the first of nine moves. CompTIA (the group that runs the A+ exams) recommends six steps for solving a problem. The nine moves are those six steps with two things from ITIL (a widely used body of help desk practices) added: the desk's sorting of the ticket, and the hand-on to someone else. CompTIA's last step, documenting, is here split into the write-up that the next person can reuse, which comes from knowledge-centered service (a way of writing down fixes so the next person can reuse them). In this order:
1. Sort it.
2. Get the user's words, and search what the desk already knows.
3. Find out what changed, and protect their data.
4. Try the known fix, with a limit you decide first.
5. Cut the problem in half with the cheapest test.
6. Change one thing at a time.
7. Check that it works for them, and tell them what happens next.
8. Hand it on with everything you found, when the desk's own rule says to.
9. Write it up so the next person can reuse it. This comes last, after move 7 (it works) or move 8 (you handed it on).
CompTIA's current A+ exams do not test its six steps; it recommends them to training programs that prepare people for a first IT job (older exams did test them, and many study books still show them). So you will not be tested on the nine moves, and you will use them on every ticket here. The facts the exams do test come later, in the parts on the computer, networks and security.

## Step 3: How soon: impact and urgency

Two questions put a ticket in the line. Impact: how many people are affected, and how important is their work? Urgency: how long can it wait?
A desk has a table that turns the two answers into a priority. This is the table of the desk in this course; every desk has its own, with its own boxes and its own limits, so read the table you are given. A priority is a rating from the table, not by itself an order of work; the desk's own rules turn ratings into an order. This desk's rule: "Open the highest priority first." Back at 8:20: the claims program is an incident with impact high and urgency high, which is Critical, so you open it first. The laptop is a request, needed next Monday, and the room 4B screen is a problem, which you hand on with its dates. In the check at the end, a ticket counts as right only when both its kind and its priority are right, and five of six pass.

A plain table, "Alderwick Health help desk: priority table":

> How many, how important  |  Urgency high  |  Urgency medium  |  Urgency low  (the column heads)
> Impact high  |  Critical  |  High  |  Moderate
> Impact medium  |  High  |  Moderate  |  Low
> Impact low  |  Moderate  |  Low  |  Low
> (Impact: high is more than ten people affected, or a task done for patients (check-in, records) or billing stopped, for any number of people. Medium is two to ten people, or one person who cannot do any of their work. Low is one person who still has other work to do.)
> (Urgency: high is a deadline within 3 hours, or work stopped with no workaround. Medium is needed by the end of today, or work stopped but a workaround (paper, a cell phone, another screen) keeps it going. Low can wait several days. Work stopped means the person's main task cannot be done at all.)

A wrong idea, marked wrong: The ticket from the most important person, or the one in capital letters, goes first.
The right line: The table counts people and work, not titles or capital letters. A vice president's flickering monitor, with two other screens working, is a low-impact ticket. Read impact and urgency from the ticket, then read the priority from the table.

## Step 4: A worked example

An email: "Maren Holt", Sales · Tuesday 8:12 AM.

> Subject: **URGENT!!! monitor**
>
> URGENT!!! My left monitor flickers every so often since last week.
> I am the VP of Sales and I need it fixed TODAY.
> My laptop screen and my other monitor work fine.

A plain table, "Alderwick Health help desk: priority table":

> How many, how important  |  Urgency high  |  Urgency medium  |  Urgency low  (the column heads)
> Impact high  |  Critical  |  High  |  Moderate
> Impact medium  |  High  |  Moderate  |  Low
> Impact low  |  Moderate  |  Low  |  Low
> (Impact: high is more than ten people affected, or a task done for patients (check-in, records) or billing stopped, for any number of people. Medium is two to ten people, or one person who cannot do any of their work. Low is one person who still has other work to do.)
> (Urgency: high is a deadline within 3 hours, or work stopped with no workaround. Medium is needed by the end of today, or work stopped but a workaround (paper, a cell phone, another screen) keeps it going. Low can wait several days. Work stopped means the person's main task cannot be done at all.)

Before the working, the learner may commit to a choice (not scored, not stored):
**What kind of ticket is this?**
(the options come in an order that depends on the seed of the question)
- Broken now: get them working again
- Asked for: follow the steps set for it
- Keeps happening: hand on the pattern with the evidence

The working, one step at a time:
1. Sort the kind.: The monitor worked until last week and now flickers. Something that worked has got worse, so it is an incident.
1. Count who is affected.: First guess: a vice president, in capitals, must be Critical. The table has no box for a title. It counts people and work. One person is affected and Maren has two working screens, so impact is low.
1. Find how long it can wait.: Maren wants it fixed today. Nothing is stopped and no deadline is near, so urgency is medium.
1. Read the table.: Impact low with urgency medium is Low. The first guess is ruled out by the table, not by how the email sounds.

Then the answer: Broken now: get them working again / Low: one person who still has other work to do / Medium: needed by the end of today, or work stopped with a workaround / Low. The monitor worked until last week and now flickers, so something that worked has got worse. That makes it an incident. Impact is low: one person is affected, and Maren still has two working screens. Urgency is medium: Maren wants it fixed today, but nothing is stopped and nothing is due. The table gives Low for impact low with urgency medium.

## Step 5: Questions

4 questions, listed, with help (shown). A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 1

An email: "Winston Ortiz", Billing · Tuesday 8:20 AM.

> Subject: **Claims program is blank**
>
> **All 14 of us in billing get a blank window when we open the claims program. It started at 8.**
> **The insurance claims must go out by noon or the clinics do not get paid this week. We have no other way to send them.**

A plain table, "Alderwick Health help desk: priority table":

> How many, how important  |  Urgency high  |  Urgency medium  |  Urgency low  (the column heads)
> Impact high  |  Critical  |  High  |  Moderate  <- marked after the answer
> Impact medium  |  High  |  Moderate  |  Low
> Impact low  |  Moderate  |  Low  |  Low
> (Impact: high is more than ten people affected, or a task done for patients (check-in, records) or billing stopped, for any number of people. Medium is two to ten people, or one person who cannot do any of their work. Low is one person who still has other work to do.)
> (Urgency: high is a deadline within 3 hours, or work stopped with no workaround. Medium is needed by the end of today, or work stopped but a workaround (paper, a cell phone, another screen) keeps it going. Low can wait several days. Work stopped means the person's main task cannot be done at all.)

Help on screen: the words that decide it are marked.

**What kind of ticket is this?**
(the options come in an order that depends on the seed of the question)
- Broken now: get them working again (right)
- Asked for: follow the steps set for it — if chosen: Nobody is asking for something new. The claims program worked yesterday and opens blank today. Many people hit at once is still an incident, with a high impact, until the same fault keeps coming back. Something that worked has stopped or got worse, so it is an incident.
- Keeps happening: hand on the pattern with the evidence — if chosen: The claims program worked yesterday and opens blank today. Many people hit at once is still an incident, with a high impact, until the same fault keeps coming back. The desk sorts a ticket as a problem only when two or more earlier reports show the same fault.

**How big is the impact?**
- High: more than ten people, or the task for patients (right)
- Medium: two to ten people, or one who can do no work — if chosen: Impact is high here, not medium: 14 people are stopped, and the work is how the clinics get paid.
- Low: one person who still has other work to do — if chosen: Impact is high here, not low: 14 people are stopped, and the work is how the clinics get paid.

**How urgent is it?**
- High: a deadline within 3 hours, or work stopped with no workaround (right)
- Medium: needed by the end of today, or work stopped with a workaround — if chosen: Urgency is high here, not medium: work is stopped and there is no other way to send the claims.
- Low: can wait several days, with no deadline coming up soon — if chosen: Urgency is high here, not low: work is stopped and there is no other way to send the claims.

**What priority does the table give it?**
- Critical (right)
- High — if chosen: The table gives High only for impact high with urgency medium, or impact medium with urgency high. This ticket is impact high with urgency high, which is Critical.
- Moderate — if chosen: The table gives Moderate only for impact high with urgency low, or impact medium with urgency medium, or impact low with urgency high. This ticket is impact high with urgency high, which is Critical.
- Low — if chosen: The table gives Low only for impact medium with urgency low, or impact low with urgency medium, or impact low with urgency low. This ticket is impact high with urgency high, which is Critical.

After the answer: the deciding words are marked. Reason: The claims program worked yesterday and opens blank today. Many people hit at once is still an incident, with a high impact, until the same fault keeps coming back. That makes it an incident. Impact is high: 14 people are stopped, and the work is how the clinics get paid. Urgency is high: work is stopped and there is no other way to send the claims. The table gives Critical for impact high with urgency high.

#### Item 2

An email: "Anaya Webb", Intake · Tuesday 9:05 AM.

> Subject: **New hire next Monday**
>
> **Leona Park starts next Monday in intake.**
> **Please get a laptop and a login ready, with email and the intake shared folder.**

A plain table, "Alderwick Health help desk: priority table":

> How many, how important  |  Urgency high  |  Urgency medium  |  Urgency low  (the column heads)
> Impact high  |  Critical  |  High  |  Moderate
> Impact medium  |  High  |  Moderate  |  Low
> Impact low  |  Moderate  |  Low  |  Low  <- marked after the answer
> (Impact: high is more than ten people affected, or a task done for patients (check-in, records) or billing stopped, for any number of people. Medium is two to ten people, or one person who cannot do any of their work. Low is one person who still has other work to do.)
> (Urgency: high is a deadline within 3 hours, or work stopped with no workaround. Medium is needed by the end of today, or work stopped but a workaround (paper, a cell phone, another screen) keeps it going. Low can wait several days. Work stopped means the person's main task cannot be done at all.)

Help on screen: the words that decide it are marked.

**What kind of ticket is this?**
(the options come in an order that depends on the seed of the question)
- Broken now: get them working again — if chosen: The user wants a service, not a fault repaired. Anaya is asking for what the desk already prepares for every new hire. A routine job with fixed steps is a request, and the desk follows its steps.
- Asked for: follow the steps set for it (right)
- Keeps happening: hand on the pattern with the evidence — if chosen: The user wants a service, not a fault repaired. Anaya is asking for what the desk already prepares for every new hire. A routine job with fixed steps is a request.

**How big is the impact?**
- High: more than ten people, or the task for patients — if chosen: Impact is low here, not high: one person, and nothing of theirs is stopped yet.
- Medium: two to ten people, or one who can do no work — if chosen: Impact is low here, not medium: one person, and nothing of theirs is stopped yet.
- Low: one person who still has other work to do (right)

**How urgent is it?**
- High: a deadline within 3 hours, or work stopped with no workaround — if chosen: Urgency is low here, not high: it is needed next Monday, days away.
- Medium: needed by the end of today, or work stopped with a workaround — if chosen: Urgency is low here, not medium: it is needed next Monday, days away.
- Low: can wait several days, with no deadline coming up soon (right)

**What priority does the table give it?**
- Critical — if chosen: The table gives Critical only for impact high with urgency high. This ticket is impact low with urgency low, which is Low.
- High — if chosen: The table gives High only for impact high with urgency medium, or impact medium with urgency high. This ticket is impact low with urgency low, which is Low.
- Moderate — if chosen: The table gives Moderate only for impact high with urgency low, or impact medium with urgency medium, or impact low with urgency high. This ticket is impact low with urgency low, which is Low.
- Low (right)

After the answer: the deciding words are marked. Reason: Anaya is asking for what the desk already prepares for every new hire. That makes it a request. Impact is low: one person, and nothing of theirs is stopped yet. Urgency is low: it is needed next Monday, days away. The table gives Low for impact low with urgency low.

#### Item 3

An email: "Alicia Gomez", Admin · Tuesday 9:40 AM.

> Subject: **Room 4B screen again**
>
> The wall screen in room 4B lost its connection again.
> **I have a meeting for six people in there at 3 this afternoon.**

A plain table, "Tickets for room 4B in the last five weeks":

> Ticket  |  When  |  What was reported  |  What fixed it  (the column heads)
> 4101  |  Sep 22  |  Screen shows no signal  |  Restarted the screen  <- marked after the answer
> 4127  |  Oct 1  |  Screen shows no signal  |  Restarted the screen  <- marked after the answer
> 4150  |  Oct 9  |  Screen shows no signal  |  Restarted the screen  <- marked after the answer
> 4188  |  Oct 16  |  Screen shows no signal  |  Restarted the screen  <- marked after the answer

A plain table, "Alderwick Health help desk: priority table":

> How many, how important  |  Urgency high  |  Urgency medium  |  Urgency low  (the column heads)
> Impact high  |  Critical  |  High  |  Moderate
> Impact medium  |  High  |  Moderate  |  Low  <- marked after the answer
> Impact low  |  Moderate  |  Low  |  Low
> (Impact: high is more than ten people affected, or a task done for patients (check-in, records) or billing stopped, for any number of people. Medium is two to ten people, or one person who cannot do any of their work. Low is one person who still has other work to do.)
> (Urgency: high is a deadline within 3 hours, or work stopped with no workaround. Medium is needed by the end of today, or work stopped but a workaround (paper, a cell phone, another screen) keeps it going. Low can wait several days. Work stopped means the person's main task cannot be done at all.)

Help on screen: the words that decide it are marked.

**What kind of ticket is this?**
(the options come in an order that depends on the seed of the question)
- Broken now: get them working again — if chosen: Getting this person working is only part of it. The record shows four earlier tickets for the same screen with the same fault, each ended by a restart that did not last. The cause behind the repeats is what is left, and it goes on to be found.
- Asked for: follow the steps set for it — if chosen: The record shows four earlier tickets for the same screen with the same fault, each ended by a restart that did not last. The same fault keeps coming back, so it is a problem.
- Keeps happening: hand on the pattern with the evidence (right)

**How big is the impact?**
- High: more than ten people, or the task for patients — if chosen: Impact is medium here, not high: six people use the room, and a few people are affected.
- Medium: two to ten people, or one who can do no work (right)
- Low: one person who still has other work to do — if chosen: Impact is medium here, not low: six people use the room, and a few people are affected.

**How urgent is it?**
- High: a deadline within 3 hours, or work stopped with no workaround — if chosen: Urgency is medium here, not high: the meeting is at 3 this afternoon, more than 3 hours away, so it is needed today.
- Medium: needed by the end of today, or work stopped with a workaround (right)
- Low: can wait several days, with no deadline coming up soon — if chosen: Urgency is medium here, not low: the meeting is at 3 this afternoon, more than 3 hours away, so it is needed today.

**What priority does the table give it?**
- Critical — if chosen: The table gives Critical only for impact high with urgency high. This ticket is impact medium with urgency medium, which is Moderate.
- High — if chosen: The table gives High only for impact high with urgency medium, or impact medium with urgency high. This ticket is impact medium with urgency medium, which is Moderate.
- Moderate (right)
- Low — if chosen: The table gives Low only for impact medium with urgency low, or impact low with urgency medium, or impact low with urgency low. This ticket is impact medium with urgency medium, which is Moderate.

After the answer: the deciding words are marked. Reason: The record shows four earlier tickets for the same screen with the same fault, each ended by a restart that did not last. That makes it a problem. Impact is medium: six people use the room, and a few people are affected. Urgency is medium: the meeting is at 3 this afternoon, more than 3 hours away, so it is needed today. The table gives Moderate for impact medium with urgency medium.

#### Item 4

A chat, with its history: "Gerard Zhao", Finance · Tuesday 10:15 AM.

> (Gerard Zhao, at the left) **My slide deck says the file is damaged. It opened fine yesterday.**
> (Gerard Zhao, at the left) **I present it in 20 minutes. Everything else on my laptop works.**

A plain table, "Alderwick Health help desk: priority table":

> How many, how important  |  Urgency high  |  Urgency medium  |  Urgency low  (the column heads)
> Impact high  |  Critical  |  High  |  Moderate
> Impact medium  |  High  |  Moderate  |  Low
> Impact low  |  Moderate  |  Low  |  Low  <- marked after the answer
> (Impact: high is more than ten people affected, or a task done for patients (check-in, records) or billing stopped, for any number of people. Medium is two to ten people, or one person who cannot do any of their work. Low is one person who still has other work to do.)
> (Urgency: high is a deadline within 3 hours, or work stopped with no workaround. Medium is needed by the end of today, or work stopped but a workaround (paper, a cell phone, another screen) keeps it going. Low can wait several days. Work stopped means the person's main task cannot be done at all.)

Help on screen: the words that decide it are marked.

**What kind of ticket is this?**
(the options come in an order that depends on the seed of the question)
- Broken now: get them working again (right)
- Asked for: follow the steps set for it — if chosen: Nobody is asking for something new. The deck opened yesterday and is damaged today, so something that worked has stopped. Something that worked has stopped or got worse, so it is an incident.
- Keeps happening: hand on the pattern with the evidence — if chosen: The deck opened yesterday and is damaged today, so something that worked has stopped. The desk sorts a ticket as a problem only when two or more earlier reports show the same fault.

**How big is the impact?**
- High: more than ten people, or the task for patients — if chosen: Impact is low here, not high: one person is affected, and the rest of Gerard's work still runs.
- Medium: two to ten people, or one who can do no work — if chosen: Impact is low here, not medium: one person is affected, and the rest of Gerard's work still runs.
- Low: one person who still has other work to do (right)

**How urgent is it?**
- High: a deadline within 3 hours, or work stopped with no workaround (right)
- Medium: needed by the end of today, or work stopped with a workaround — if chosen: Urgency is high here, not medium: Gerard presents in 20 minutes, a deadline within a few hours.
- Low: can wait several days, with no deadline coming up soon — if chosen: Urgency is high here, not low: Gerard presents in 20 minutes, a deadline within a few hours.

**What priority does the table give it?**
- Critical — if chosen: The table gives Critical only for impact high with urgency high. This ticket is impact low with urgency high, which is Moderate.
- High — if chosen: The table gives High only for impact high with urgency medium, or impact medium with urgency high. This ticket is impact low with urgency high, which is Moderate.
- Moderate (right)
- Low — if chosen: The table gives Low only for impact medium with urgency low, or impact low with urgency medium, or impact low with urgency low. This ticket is impact low with urgency high, which is Moderate.

After the answer: the deciding words are marked. Reason: The deck opened yesterday and is damaged today, so something that worked has stopped. That makes it an incident. Impact is low: one person is affected, and the rest of Gerard's work still runs. Urgency is high: Gerard presents in 20 minutes, a deadline within a few hours. The table gives Moderate for impact low with urgency high.

Then a screen: you can stop here, your place is kept.

## Step 6: Questions

7 questions, shuffle. A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 5

An email: "Lowell Reyes", Marketing · Wednesday 9:55 AM.

> Subject: **Access to the Campaign folder**
>
> Please give me access to the Campaign shared folder. I have never had access to it.
> I present from it at the 10:30 meeting. The rest of my work is fine.

A plain table, "Alderwick Health help desk: priority table":

> How many, how important  |  Urgency high  |  Urgency medium  |  Urgency low  (the column heads)
> Impact high  |  Critical  |  High  |  Moderate
> Impact medium  |  High  |  Moderate  |  Low
> Impact low  |  Moderate  |  Low  |  Low
> (Impact: high is more than ten people affected, or a task done for patients (check-in, records) or billing stopped, for any number of people. Medium is two to ten people, or one person who cannot do any of their work. Low is one person who still has other work to do.)
> (Urgency: high is a deadline within 3 hours, or work stopped with no workaround. Medium is needed by the end of today, or work stopped but a workaround (paper, a cell phone, another screen) keeps it going. Low can wait several days. Work stopped means the person's main task cannot be done at all.)

**What kind of ticket is this?**
(the options come in an order that depends on the seed of the question)
- Broken now: get them working again — if chosen: The user wants a service, not a fault repaired. Lowell wants access that has never been given, a routine job the desk has fixed steps for. A routine job with fixed steps is a request, and the desk follows its steps.
- Asked for: follow the steps set for it (right)
- Keeps happening: hand on the pattern with the evidence — if chosen: The user wants a service, not a fault repaired. Lowell wants access that has never been given, a routine job the desk has fixed steps for. A routine job with fixed steps is a request.

**How big is the impact?**
- High: more than ten people, or the task for patients — if chosen: Impact is low here, not high: one person, who has other work to do.
- Medium: two to ten people, or one who can do no work — if chosen: Impact is low here, not medium: one person, who has other work to do.
- Low: one person who still has other work to do (right)

**How urgent is it?**
- High: a deadline within 3 hours, or work stopped with no workaround (right)
- Medium: needed by the end of today, or work stopped with a workaround — if chosen: Urgency is high here, not medium: the meeting is in 35 minutes.
- Low: can wait several days, with no deadline coming up soon — if chosen: Urgency is high here, not low: the meeting is in 35 minutes.

**What priority does the table give it?**
- Critical — if chosen: The table gives Critical only for impact high with urgency high. This ticket is impact low with urgency high, which is Moderate.
- High — if chosen: The table gives High only for impact high with urgency medium, or impact medium with urgency high. This ticket is impact low with urgency high, which is Moderate.
- Moderate (right)
- Low — if chosen: The table gives Low only for impact medium with urgency low, or impact low with urgency medium, or impact low with urgency low. This ticket is impact low with urgency high, which is Moderate.

After the answer: the deciding words are marked. Reason: Lowell wants access that has never been given, a routine job the desk has fixed steps for. That makes it a request. Impact is low: one person, who has other work to do. Urgency is high: the meeting is in 35 minutes. The table gives Moderate for impact low with urgency high.

#### Item 6

A chat, with its history: "Ingrid Reid", North clinic front desk · Wednesday 8:30 AM.

> (Ingrid Reid, at the left) The three check-in screens in the lobby say Cannot reach server (the server is the central computer that holds the patient records). They worked when we locked up last night.
> (Ingrid Reid, at the left) We are checking patients in on paper, which is slow. Please have them back by 1 PM.

A plain table, "Alderwick Health help desk: priority table":

> How many, how important  |  Urgency high  |  Urgency medium  |  Urgency low  (the column heads)
> Impact high  |  Critical  |  High  |  Moderate
> Impact medium  |  High  |  Moderate  |  Low
> Impact low  |  Moderate  |  Low  |  Low
> (Impact: high is more than ten people affected, or a task done for patients (check-in, records) or billing stopped, for any number of people. Medium is two to ten people, or one person who cannot do any of their work. Low is one person who still has other work to do.)
> (Urgency: high is a deadline within 3 hours, or work stopped with no workaround. Medium is needed by the end of today, or work stopped but a workaround (paper, a cell phone, another screen) keeps it going. Low can wait several days. Work stopped means the person's main task cannot be done at all.)

**What kind of ticket is this?**
(the options come in an order that depends on the seed of the question)
- Broken now: get them working again (right)
- Asked for: follow the steps set for it — if chosen: Nobody is asking for something new. The check-in screens worked last night and show an error this morning. Something that worked has stopped or got worse, so it is an incident.
- Keeps happening: hand on the pattern with the evidence — if chosen: The check-in screens worked last night and show an error this morning. The desk sorts a ticket as a problem only when two or more earlier reports show the same fault.

**How big is the impact?**
- High: more than ten people, or the task for patients (right)
- Medium: two to ten people, or one who can do no work — if chosen: Impact is high here, not medium: check-in is a task done for patients, and it is stopped for the whole clinic.
- Low: one person who still has other work to do — if chosen: Impact is high here, not low: check-in is a task done for patients, and it is stopped for the whole clinic.

**How urgent is it?**
- High: a deadline within 3 hours, or work stopped with no workaround — if chosen: Urgency is medium here, not high: paper is a workaround that keeps check-in going, and they want the screens back by 1 PM, more than 3 hours away.
- Medium: needed by the end of today, or work stopped with a workaround (right)
- Low: can wait several days, with no deadline coming up soon — if chosen: Urgency is medium here, not low: paper is a workaround that keeps check-in going, and they want the screens back by 1 PM, more than 3 hours away.

**What priority does the table give it?**
- Critical — if chosen: The table gives Critical only for impact high with urgency high. This ticket is impact high with urgency medium, which is High.
- High (right)
- Moderate — if chosen: The table gives Moderate only for impact high with urgency low, or impact medium with urgency medium, or impact low with urgency high. This ticket is impact high with urgency medium, which is High.
- Low — if chosen: The table gives Low only for impact medium with urgency low, or impact low with urgency medium, or impact low with urgency low. This ticket is impact high with urgency medium, which is High.

After the answer: the deciding words are marked. Reason: The check-in screens worked last night and show an error this morning. That makes it an incident. Impact is high: check-in is a task done for patients, and it is stopped for the whole clinic. Urgency is medium: paper is a workaround that keeps check-in going, and they want the screens back by 1 PM, more than 3 hours away. The table gives High for impact high with urgency medium.

#### Item 7

An email: "Mehmet Brandt", HR · Wednesday 11:10 AM.

> Subject: **Disk almost full**
>
> Three of us in HR got a message today that the disk (the storage inside the laptop where files are kept) is almost full on our laptops. We got no such message yesterday.
> Everything still works. Could someone look at it this week?

A plain table, "Alderwick Health help desk: priority table":

> How many, how important  |  Urgency high  |  Urgency medium  |  Urgency low  (the column heads)
> Impact high  |  Critical  |  High  |  Moderate
> Impact medium  |  High  |  Moderate  |  Low
> Impact low  |  Moderate  |  Low  |  Low
> (Impact: high is more than ten people affected, or a task done for patients (check-in, records) or billing stopped, for any number of people. Medium is two to ten people, or one person who cannot do any of their work. Low is one person who still has other work to do.)
> (Urgency: high is a deadline within 3 hours, or work stopped with no workaround. Medium is needed by the end of today, or work stopped but a workaround (paper, a cell phone, another screen) keeps it going. Low can wait several days. Work stopped means the person's main task cannot be done at all.)

**What kind of ticket is this?**
(the options come in an order that depends on the seed of the question)
- Broken now: get them working again (right)
- Asked for: follow the steps set for it — if chosen: Nobody is asking for something new. The laptops showed no such message yesterday and show it today, so something that worked has got worse. Something that worked has stopped or got worse, so it is an incident.
- Keeps happening: hand on the pattern with the evidence — if chosen: The laptops showed no such message yesterday and show it today, so something that worked has got worse. The desk sorts a ticket as a problem only when two or more earlier reports show the same fault.

**How big is the impact?**
- High: more than ten people, or the task for patients — if chosen: Impact is medium here, not high: three people are affected, and none is stopped.
- Medium: two to ten people, or one who can do no work (right)
- Low: one person who still has other work to do — if chosen: Impact is medium here, not low: three people are affected, and none is stopped.

**How urgent is it?**
- High: a deadline within 3 hours, or work stopped with no workaround — if chosen: Urgency is low here, not high: Mehmet says this week is fine.
- Medium: needed by the end of today, or work stopped with a workaround — if chosen: Urgency is low here, not medium: Mehmet says this week is fine.
- Low: can wait several days, with no deadline coming up soon (right)

**What priority does the table give it?**
- Critical — if chosen: The table gives Critical only for impact high with urgency high. This ticket is impact medium with urgency low, which is Low.
- High — if chosen: The table gives High only for impact high with urgency medium, or impact medium with urgency high. This ticket is impact medium with urgency low, which is Low.
- Moderate — if chosen: The table gives Moderate only for impact high with urgency low, or impact medium with urgency medium, or impact low with urgency high. This ticket is impact medium with urgency low, which is Low.
- Low (right)

After the answer: the deciding words are marked. Reason: The laptops showed no such message yesterday and show it today, so something that worked has got worse. That makes it an incident. Impact is medium: three people are affected, and none is stopped. Urgency is low: Mehmet says this week is fine. The table gives Low for impact medium with urgency low.

#### Item 8

An email: "Grace Liu", Intake · Wednesday 8:45 AM.

> Subject: **Install the signing app**
>
> Please install the approved PDF signing app on the five laptops in intake.
> The team starts using it today with the new forms.

A plain table, "Alderwick Health help desk: priority table":

> How many, how important  |  Urgency high  |  Urgency medium  |  Urgency low  (the column heads)
> Impact high  |  Critical  |  High  |  Moderate
> Impact medium  |  High  |  Moderate  |  Low
> Impact low  |  Moderate  |  Low  |  Low
> (Impact: high is more than ten people affected, or a task done for patients (check-in, records) or billing stopped, for any number of people. Medium is two to ten people, or one person who cannot do any of their work. Low is one person who still has other work to do.)
> (Urgency: high is a deadline within 3 hours, or work stopped with no workaround. Medium is needed by the end of today, or work stopped but a workaround (paper, a cell phone, another screen) keeps it going. Low can wait several days. Work stopped means the person's main task cannot be done at all.)

**What kind of ticket is this?**
(the options come in an order that depends on the seed of the question)
- Broken now: get them working again — if chosen: The user wants a service, not a fault repaired. The team wants an app installed that the desk installs by its steps. A routine job with fixed steps is a request, and the desk follows its steps.
- Asked for: follow the steps set for it (right)
- Keeps happening: hand on the pattern with the evidence — if chosen: The user wants a service, not a fault repaired. The team wants an app installed that the desk installs by its steps. A routine job with fixed steps is a request.

**How big is the impact?**
- High: more than ten people, or the task for patients — if chosen: Impact is medium here, not high: five people are affected.
- Medium: two to ten people, or one who can do no work (right)
- Low: one person who still has other work to do — if chosen: Impact is medium here, not low: five people are affected.

**How urgent is it?**
- High: a deadline within 3 hours, or work stopped with no workaround — if chosen: Urgency is medium here, not high: they start using it today.
- Medium: needed by the end of today, or work stopped with a workaround (right)
- Low: can wait several days, with no deadline coming up soon — if chosen: Urgency is medium here, not low: they start using it today.

**What priority does the table give it?**
- Critical — if chosen: The table gives Critical only for impact high with urgency high. This ticket is impact medium with urgency medium, which is Moderate.
- High — if chosen: The table gives High only for impact high with urgency medium, or impact medium with urgency high. This ticket is impact medium with urgency medium, which is Moderate.
- Moderate (right)
- Low — if chosen: The table gives Low only for impact medium with urgency low, or impact low with urgency medium, or impact low with urgency low. This ticket is impact medium with urgency medium, which is Moderate.

After the answer: the deciding words are marked. Reason: The team wants an app installed that the desk installs by its steps. That makes it a request. Impact is medium: five people are affected. Urgency is medium: they start using it today. The table gives Moderate for impact medium with urgency medium.

#### Item 9

A chat, with its history: "Pavel Novak", Accounting · Thursday 2:10 PM.

> (Pavel Novak, at the left) My laptop camera shows a black picture in video calls. It worked on Monday. Two people on my team have the same.
> (Pavel Novak, at the left) Please look at it today. The call with the auditors is tomorrow at 10.

A plain table, "Tickets from accounting in the last five weeks":

> Ticket  |  When  |  What was reported  |  What fixed it  (the column heads)
> 4120  |  Sep 25  |  Keyboard keys sticking  |  Replaced the keyboard
> 4165  |  Oct 12  |  Password expired  |  Reset the password
> 4177  |  Oct 15  |  Scanner jam  |  Cleared the jam

A plain table, "Alderwick Health help desk: priority table":

> How many, how important  |  Urgency high  |  Urgency medium  |  Urgency low  (the column heads)
> Impact high  |  Critical  |  High  |  Moderate
> Impact medium  |  High  |  Moderate  |  Low
> Impact low  |  Moderate  |  Low  |  Low
> (Impact: high is more than ten people affected, or a task done for patients (check-in, records) or billing stopped, for any number of people. Medium is two to ten people, or one person who cannot do any of their work. Low is one person who still has other work to do.)
> (Urgency: high is a deadline within 3 hours, or work stopped with no workaround. Medium is needed by the end of today, or work stopped but a workaround (paper, a cell phone, another screen) keeps it going. Low can wait several days. Work stopped means the person's main task cannot be done at all.)

**What kind of ticket is this?**
(the options come in an order that depends on the seed of the question)
- Broken now: get them working again (right)
- Asked for: follow the steps set for it — if chosen: Nobody is asking for something new. The camera worked on Monday and shows a black picture today. The earlier tickets from accounting are for other faults, so nothing repeats. Something that worked has stopped or got worse, so it is an incident.
- Keeps happening: hand on the pattern with the evidence — if chosen: The camera worked on Monday and shows a black picture today. The earlier tickets from accounting are for other faults, so nothing repeats. The desk sorts a ticket as a problem only when two or more earlier reports show the same fault.

**How big is the impact?**
- High: more than ten people, or the task for patients — if chosen: Impact is medium here, not high: three people are affected.
- Medium: two to ten people, or one who can do no work (right)
- Low: one person who still has other work to do — if chosen: Impact is medium here, not low: three people are affected.

**How urgent is it?**
- High: a deadline within 3 hours, or work stopped with no workaround — if chosen: Urgency is medium here, not high: Pavel wants it looked at today, and the call is tomorrow.
- Medium: needed by the end of today, or work stopped with a workaround (right)
- Low: can wait several days, with no deadline coming up soon — if chosen: Urgency is medium here, not low: Pavel wants it looked at today, and the call is tomorrow.

**What priority does the table give it?**
- Critical — if chosen: The table gives Critical only for impact high with urgency high. This ticket is impact medium with urgency medium, which is Moderate.
- High — if chosen: The table gives High only for impact high with urgency medium, or impact medium with urgency high. This ticket is impact medium with urgency medium, which is Moderate.
- Moderate (right)
- Low — if chosen: The table gives Low only for impact medium with urgency low, or impact low with urgency medium, or impact low with urgency low. This ticket is impact medium with urgency medium, which is Moderate.

After the answer: the deciding words are marked. Reason: The camera worked on Monday and shows a black picture today. The earlier tickets from accounting are for other faults, so nothing repeats. That makes it an incident. Impact is medium: three people are affected. Urgency is medium: Pavel wants it looked at today, and the call is tomorrow. The table gives Moderate for impact medium with urgency medium.

#### Item 10

A chat, with its history: "Mei Tanaka", Records office · Wednesday 10:40 AM.

> (Mei Tanaka, at the left) Could you please help? The document scanner says Not connected again. It did the same once before, on Oct 8.
> (Mei Tanaka, at the left) Two of us use it to scan old paper files into the archive, which is due by 5 PM. This is not patient care. We can still scan on the slow scanner in room 2, so the work goes on.

A plain table, "Tickets for the document scanner in the last five weeks":

> Ticket  |  When  |  What was reported  |  What fixed it  (the column heads)
> 4146  |  Oct 8  |  Scanner says Not connected  |  Restarted the scanner

A plain table, "Alderwick Health help desk: priority table":

> How many, how important  |  Urgency high  |  Urgency medium  |  Urgency low  (the column heads)
> Impact high  |  Critical  |  High  |  Moderate
> Impact medium  |  High  |  Moderate  |  Low
> Impact low  |  Moderate  |  Low  |  Low
> (Impact: high is more than ten people affected, or a task done for patients (check-in, records) or billing stopped, for any number of people. Medium is two to ten people, or one person who cannot do any of their work. Low is one person who still has other work to do.)
> (Urgency: high is a deadline within 3 hours, or work stopped with no workaround. Medium is needed by the end of today, or work stopped but a workaround (paper, a cell phone, another screen) keeps it going. Low can wait several days. Work stopped means the person's main task cannot be done at all.)

**What kind of ticket is this?**
(the options come in an order that depends on the seed of the question)
- Broken now: get them working again (right)
- Asked for: follow the steps set for it — if chosen: Nobody is asking for something new. The scanner worked until today and says Not connected. The record shows one earlier ticket for the same fault, and the desk sorts a problem only when two or more earlier reports show it. A polite request for help does not make a fault a request. Something that worked has stopped or got worse, so it is an incident.
- Keeps happening: hand on the pattern with the evidence — if chosen: The scanner worked until today and says Not connected. The record shows one earlier ticket for the same fault, and the desk sorts a problem only when two or more earlier reports show it. A polite request for help does not make a fault a request. The desk sorts a ticket as a problem only when two or more earlier reports show the same fault.

**How big is the impact?**
- High: more than ten people, or the task for patients — if chosen: Impact is medium here, not high: two people use the scanner, and the archive scans are not work done for patients.
- Medium: two to ten people, or one who can do no work (right)
- Low: one person who still has other work to do — if chosen: Impact is medium here, not low: two people use the scanner, and the archive scans are not work done for patients.

**How urgent is it?**
- High: a deadline within 3 hours, or work stopped with no workaround — if chosen: Urgency is medium here, not high: the archive is due by 5 PM, more than 3 hours away, so it is needed today, and the slow scanner in room 2 is a workaround that keeps the work going.
- Medium: needed by the end of today, or work stopped with a workaround (right)
- Low: can wait several days, with no deadline coming up soon — if chosen: Urgency is medium here, not low: the archive is due by 5 PM, more than 3 hours away, so it is needed today, and the slow scanner in room 2 is a workaround that keeps the work going.

**What priority does the table give it?**
- Critical — if chosen: The table gives Critical only for impact high with urgency high. This ticket is impact medium with urgency medium, which is Moderate.
- High — if chosen: The table gives High only for impact high with urgency medium, or impact medium with urgency high. This ticket is impact medium with urgency medium, which is Moderate.
- Moderate (right)
- Low — if chosen: The table gives Low only for impact medium with urgency low, or impact low with urgency medium, or impact low with urgency low. This ticket is impact medium with urgency medium, which is Moderate.

After the answer: the deciding words are marked. Reason: The scanner worked until today and says Not connected. The record shows one earlier ticket for the same fault, and the desk sorts a problem only when two or more earlier reports show it. A polite request for help does not make a fault a request. That makes it an incident. Impact is medium: two people use the scanner, and the archive scans are not work done for patients. Urgency is medium: the archive is due by 5 PM, more than 3 hours away, so it is needed today, and the slow scanner in room 2 is a workaround that keeps the work going. The table gives Moderate for impact medium with urgency medium.

#### Item 11

A chat, with its history: "Wayne Lindholm", Warehouse office · Tuesday 1:20 PM.

> (Wayne Lindholm, at the left) The label printer jammed again. That is the third time: Oct 6, Oct 13 and today. Each time we pulled the paper out and it worked for a week.
> (Wayne Lindholm, at the left) Two of us print the labels, and we need them for the 4 PM truck.

A plain table, "Alderwick Health help desk: priority table":

> How many, how important  |  Urgency high  |  Urgency medium  |  Urgency low  (the column heads)
> Impact high  |  Critical  |  High  |  Moderate
> Impact medium  |  High  |  Moderate  |  Low
> Impact low  |  Moderate  |  Low  |  Low
> (Impact: high is more than ten people affected, or a task done for patients (check-in, records) or billing stopped, for any number of people. Medium is two to ten people, or one person who cannot do any of their work. Low is one person who still has other work to do.)
> (Urgency: high is a deadline within 3 hours, or work stopped with no workaround. Medium is needed by the end of today, or work stopped but a workaround (paper, a cell phone, another screen) keeps it going. Low can wait several days. Work stopped means the person's main task cannot be done at all.)

**What kind of ticket is this?**
(the options come in an order that depends on the seed of the question)
- Broken now: get them working again — if chosen: Getting this person working is only part of it. Wayne lists two earlier jams themself, with dates, each ended by pulling out the paper, and the jam is back today. The cause behind the repeats is what is left, and it goes on to be found.
- Asked for: follow the steps set for it — if chosen: Wayne lists two earlier jams themself, with dates, each ended by pulling out the paper, and the jam is back today. The same fault keeps coming back, so it is a problem.
- Keeps happening: hand on the pattern with the evidence (right)

**How big is the impact?**
- High: more than ten people, or the task for patients — if chosen: Impact is medium here, not high: two people use the printer.
- Medium: two to ten people, or one who can do no work (right)
- Low: one person who still has other work to do — if chosen: Impact is medium here, not low: two people use the printer.

**How urgent is it?**
- High: a deadline within 3 hours, or work stopped with no workaround (right)
- Medium: needed by the end of today, or work stopped with a workaround — if chosen: Urgency is high here, not medium: the labels are needed for the 4 PM truck, under 3 hours away.
- Low: can wait several days, with no deadline coming up soon — if chosen: Urgency is high here, not low: the labels are needed for the 4 PM truck, under 3 hours away.

**What priority does the table give it?**
- Critical — if chosen: The table gives Critical only for impact high with urgency high. This ticket is impact medium with urgency high, which is High.
- High (right)
- Moderate — if chosen: The table gives Moderate only for impact high with urgency low, or impact medium with urgency medium, or impact low with urgency high. This ticket is impact medium with urgency high, which is High.
- Low — if chosen: The table gives Low only for impact medium with urgency low, or impact low with urgency medium, or impact low with urgency low. This ticket is impact medium with urgency high, which is High.

After the answer: the deciding words are marked. Reason: Wayne lists two earlier jams themself, with dates, each ended by pulling out the paper, and the jam is back today. That makes it a problem. Impact is medium: two people use the printer. Urgency is high: the labels are needed for the 4 PM truck, under 3 hours away. The table gives High for impact medium with urgency high.

Then a screen: you can stop here, your place is kept.

## Step 7: Questions

4 questions, listed, with each inner pair asked one after the other, in a random order. A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 12

A chat, with its history: "Hui Tran", Pharmacy · Thursday 9:20 AM.

> (Hui Tran, at the left) The pharmacy printer printed fine yesterday. Today it says Offline and nothing comes out.
> (Hui Tran, at the left) I need the weekly stock report by the end of the day. I can print it on the floor 2 printer if I have to, and the rest of my work is fine.

A plain table, "Alderwick Health help desk: priority table":

> How many, how important  |  Urgency high  |  Urgency medium  |  Urgency low  (the column heads)
> Impact high  |  Critical  |  High  |  Moderate
> Impact medium  |  High  |  Moderate  |  Low
> Impact low  |  Moderate  |  Low  |  Low
> (Impact: high is more than ten people affected, or a task done for patients (check-in, records) or billing stopped, for any number of people. Medium is two to ten people, or one person who cannot do any of their work. Low is one person who still has other work to do.)
> (Urgency: high is a deadline within 3 hours, or work stopped with no workaround. Medium is needed by the end of today, or work stopped but a workaround (paper, a cell phone, another screen) keeps it going. Low can wait several days. Work stopped means the person's main task cannot be done at all.)

**What kind of ticket is this?**
(the options come in an order that depends on the seed of the question)
- Broken now: get them working again (right)
- Asked for: follow the steps set for it — if chosen: Nobody is asking for something new. The pharmacy printer worked yesterday and says Offline today. Something that worked has stopped or got worse, so it is an incident.
- Keeps happening: hand on the pattern with the evidence — if chosen: The pharmacy printer worked yesterday and says Offline today. The desk sorts a ticket as a problem only when two or more earlier reports show the same fault.

**What priority does the table give it?**
- Critical — if chosen: The table gives Critical only for impact high with urgency high. This ticket is impact low with urgency medium, which is Low.
- High — if chosen: The table gives High only for impact high with urgency medium, or impact medium with urgency high. This ticket is impact low with urgency medium, which is Low.
- Moderate — if chosen: The table gives Moderate only for impact high with urgency low, or impact medium with urgency medium, or impact low with urgency high. This ticket is impact low with urgency medium, which is Low.
- Low (right)

After the answer: the deciding words are marked. Reason: The pharmacy printer worked yesterday and says Offline today. That makes it an incident. Impact is low: one person is affected, with other work to do. Urgency is medium: Hui needs the report by the end of today, and the floor 2 printer is a workaround. The table gives Low for impact low with urgency medium.

#### Item 13

An email: "Hui Tran", Pharmacy · Thursday 9:25 AM.

> Subject: **New printer on floor 2**
>
> Please add the new color printer on floor 2 to my laptop.
> Whenever you get to it. The old floor 2 printer still works for me.

A plain table, "Alderwick Health help desk: priority table":

> How many, how important  |  Urgency high  |  Urgency medium  |  Urgency low  (the column heads)
> Impact high  |  Critical  |  High  |  Moderate
> Impact medium  |  High  |  Moderate  |  Low
> Impact low  |  Moderate  |  Low  |  Low
> (Impact: high is more than ten people affected, or a task done for patients (check-in, records) or billing stopped, for any number of people. Medium is two to ten people, or one person who cannot do any of their work. Low is one person who still has other work to do.)
> (Urgency: high is a deadline within 3 hours, or work stopped with no workaround. Medium is needed by the end of today, or work stopped but a workaround (paper, a cell phone, another screen) keeps it going. Low can wait several days. Work stopped means the person's main task cannot be done at all.)

**What kind of ticket is this?**
(the options come in an order that depends on the seed of the question)
- Broken now: get them working again — if chosen: The user wants a service, not a fault repaired. Hui is asking for a printer to be added, which the desk does by its steps. A routine job with fixed steps is a request, and the desk follows its steps.
- Asked for: follow the steps set for it (right)
- Keeps happening: hand on the pattern with the evidence — if chosen: The user wants a service, not a fault repaired. Hui is asking for a printer to be added, which the desk does by its steps. A routine job with fixed steps is a request.

**What priority does the table give it?**
- Critical — if chosen: The table gives Critical only for impact high with urgency high. This ticket is impact low with urgency low, which is Low.
- High — if chosen: The table gives High only for impact high with urgency medium, or impact medium with urgency high. This ticket is impact low with urgency low, which is Low.
- Moderate — if chosen: The table gives Moderate only for impact high with urgency low, or impact medium with urgency medium, or impact low with urgency high. This ticket is impact low with urgency low, which is Low.
- Low (right)

After the answer: the deciding words are marked. Reason: Hui is asking for a printer to be added, which the desk does by its steps. That makes it a request. Impact is low: one person, whose old floor 2 printer works. Urgency is low: Hui says whenever you get to it. The table gives Low for impact low with urgency low.

#### Item 14

A chat, with its history: "Ines Duarte", Lab · Thursday 10:05 AM.

> (Ines Duarte, at the left) My laptop dropped the Wi-Fi at 9 and will not reconnect.
> (Ines Duarte, at the left) I need it for the results I send by 3 PM. Until then I have paperwork to do.

A plain table, "Tickets from the lab in the last five weeks":

> Ticket  |  When  |  What was reported  |  What fixed it  (the column heads)
> —  |  —  |  No earlier ticket about Wi-Fi from the lab  |  —

A plain table, "Alderwick Health help desk: priority table":

> How many, how important  |  Urgency high  |  Urgency medium  |  Urgency low  (the column heads)
> Impact high  |  Critical  |  High  |  Moderate
> Impact medium  |  High  |  Moderate  |  Low
> Impact low  |  Moderate  |  Low  |  Low
> (Impact: high is more than ten people affected, or a task done for patients (check-in, records) or billing stopped, for any number of people. Medium is two to ten people, or one person who cannot do any of their work. Low is one person who still has other work to do.)
> (Urgency: high is a deadline within 3 hours, or work stopped with no workaround. Medium is needed by the end of today, or work stopped but a workaround (paper, a cell phone, another screen) keeps it going. Low can wait several days. Work stopped means the person's main task cannot be done at all.)

**What kind of ticket is this?**
(the options come in an order that depends on the seed of the question)
- Broken now: get them working again (right)
- Asked for: follow the steps set for it — if chosen: Nobody is asking for something new. The Wi-Fi worked until 9 and the record shows no earlier ticket for it, so this is the first time the desk has seen it. Something that worked has stopped or got worse, so it is an incident.
- Keeps happening: hand on the pattern with the evidence — if chosen: The Wi-Fi worked until 9 and the record shows no earlier ticket for it, so this is the first time the desk has seen it. The desk sorts a ticket as a problem only when two or more earlier reports show the same fault.

**What priority does the table give it?**
- Critical — if chosen: The table gives Critical only for impact high with urgency high. This ticket is impact low with urgency medium, which is Low.
- High — if chosen: The table gives High only for impact high with urgency medium, or impact medium with urgency high. This ticket is impact low with urgency medium, which is Low.
- Moderate — if chosen: The table gives Moderate only for impact high with urgency low, or impact medium with urgency medium, or impact low with urgency high. This ticket is impact low with urgency medium, which is Low.
- Low (right)

After the answer: the deciding words are marked. Reason: The Wi-Fi worked until 9 and the record shows no earlier ticket for it, so this is the first time the desk has seen it. That makes it an incident. Impact is low: one person is affected, and Ines has paperwork to do meanwhile. Urgency is medium: the results are due at 3 PM, more than 3 hours away, so they are needed today. The table gives Low for impact low with urgency medium.

#### Item 15

A chat, with its history: "Roberta Haddad", Lab · Thursday 10:20 AM.

> (Roberta Haddad, at the left) The Wi-Fi in the lab dropped again at 10. Same as the other times.
> (Roberta Haddad, at the left) Four of us need it to send results by 4 PM.

A plain table, "Tickets from the lab in the last five weeks":

> Ticket  |  When  |  What was reported  |  What fixed it  (the column heads)
> 4108  |  Sep 23  |  Wi-Fi drops around 10 AM  |  Reconnected the laptop
> 4131  |  Oct 2  |  Wi-Fi drops around 10 AM  |  Reconnected the laptop
> 4166  |  Oct 12  |  Wi-Fi drops around 10 AM  |  Reconnected the laptop
> 4192  |  Oct 17  |  Wi-Fi drops around 10 AM  |  Reconnected the laptop

A plain table, "Alderwick Health help desk: priority table":

> How many, how important  |  Urgency high  |  Urgency medium  |  Urgency low  (the column heads)
> Impact high  |  Critical  |  High  |  Moderate
> Impact medium  |  High  |  Moderate  |  Low
> Impact low  |  Moderate  |  Low  |  Low
> (Impact: high is more than ten people affected, or a task done for patients (check-in, records) or billing stopped, for any number of people. Medium is two to ten people, or one person who cannot do any of their work. Low is one person who still has other work to do.)
> (Urgency: high is a deadline within 3 hours, or work stopped with no workaround. Medium is needed by the end of today, or work stopped but a workaround (paper, a cell phone, another screen) keeps it going. Low can wait several days. Work stopped means the person's main task cannot be done at all.)

**What kind of ticket is this?**
(the options come in an order that depends on the seed of the question)
- Broken now: get them working again — if chosen: Getting this person working is only part of it. The record shows four earlier tickets from the lab for Wi-Fi dropping at about the same time, each ended by reconnecting. The cause behind the repeats is what is left, and it goes on to be found.
- Asked for: follow the steps set for it — if chosen: The record shows four earlier tickets from the lab for Wi-Fi dropping at about the same time, each ended by reconnecting. The same fault keeps coming back, so it is a problem.
- Keeps happening: hand on the pattern with the evidence (right)

**What priority does the table give it?**
- Critical — if chosen: The table gives Critical only for impact high with urgency high. This ticket is impact medium with urgency medium, which is Moderate.
- High — if chosen: The table gives High only for impact high with urgency medium, or impact medium with urgency high. This ticket is impact medium with urgency medium, which is Moderate.
- Moderate (right)
- Low — if chosen: The table gives Low only for impact medium with urgency low, or impact low with urgency medium, or impact low with urgency low. This ticket is impact medium with urgency medium, which is Moderate.

After the answer: the deciding words are marked. Reason: The record shows four earlier tickets from the lab for Wi-Fi dropping at about the same time, each ended by reconnecting. That makes it a problem. Impact is medium: four people in the lab are affected. Urgency is medium: the results are due at 4 PM, more than 3 hours away, so they are needed today. The table gives Moderate for impact medium with urgency medium.

Then a screen: you can stop here, your place is kept.

## The check

6 new questions, no help. No answer is shown until the end. The questions come in mixed order.

To pass:
- At least 5 right

#### Check question 16

A chat, with its history: "Priti Shah", Eastgate clinic front desk · Monday 8:40 AM.

> (Priti Shah, at the left) Nobody here can sign in to the patient records system. There are eleven of us. It worked when we opened at 8.
> (Priti Shah, at the left) Patients are waiting at the desk, and we have no other way to look anyone up.

A plain table, "Alderwick Health help desk: priority table":

> How many, how important  |  Urgency high  |  Urgency medium  |  Urgency low  (the column heads)
> Impact high  |  Critical  |  High  |  Moderate
> Impact medium  |  High  |  Moderate  |  Low
> Impact low  |  Moderate  |  Low  |  Low
> (Impact: high is more than ten people affected, or a task done for patients (check-in, records) or billing stopped, for any number of people. Medium is two to ten people, or one person who cannot do any of their work. Low is one person who still has other work to do.)
> (Urgency: high is a deadline within 3 hours, or work stopped with no workaround. Medium is needed by the end of today, or work stopped but a workaround (paper, a cell phone, another screen) keeps it going. Low can wait several days. Work stopped means the person's main task cannot be done at all.)

**What kind of ticket is this?**
(the options come in an order that depends on the seed of the question)
- Broken now: get them working again (right)
- Asked for: follow the steps set for it — if chosen: Nobody is asking for something new. The records system worked at 8 and nobody can sign in at 8:40. Eleven people at once is still an incident, with a high impact, until the same fault keeps coming back. Something that worked has stopped or got worse, so it is an incident.
- Keeps happening: hand on the pattern with the evidence — if chosen: The records system worked at 8 and nobody can sign in at 8:40. Eleven people at once is still an incident, with a high impact, until the same fault keeps coming back. The desk sorts a ticket as a problem only when two or more earlier reports show the same fault.

**What priority does the table give it?**
- Critical (right)
- High — if chosen: The table gives High only for impact high with urgency medium, or impact medium with urgency high. This ticket is impact high with urgency high, which is Critical.
- Moderate — if chosen: The table gives Moderate only for impact high with urgency low, or impact medium with urgency medium, or impact low with urgency high. This ticket is impact high with urgency high, which is Critical.
- Low — if chosen: The table gives Low only for impact medium with urgency low, or impact low with urgency medium, or impact low with urgency low. This ticket is impact high with urgency high, which is Critical.

After the answer: the deciding words are marked. Reason: The records system worked at 8 and nobody can sign in at 8:40. Eleven people at once is still an incident, with a high impact, until the same fault keeps coming back. That makes it an incident. Impact is high: eleven people are stopped, and records are a task done for patients. Urgency is high: work is stopped now, with no workaround. The table gives Critical for impact high with urgency high.

#### Check question 17

An email: "Joanna Okafor", Accounting · Monday 9:10 AM.

> Subject: **Second monitor**
>
> Please order a second monitor for my desk. Ergonomics approved it last week.
> Sometime this month is fine.

A plain table, "Alderwick Health help desk: priority table":

> How many, how important  |  Urgency high  |  Urgency medium  |  Urgency low  (the column heads)
> Impact high  |  Critical  |  High  |  Moderate
> Impact medium  |  High  |  Moderate  |  Low
> Impact low  |  Moderate  |  Low  |  Low
> (Impact: high is more than ten people affected, or a task done for patients (check-in, records) or billing stopped, for any number of people. Medium is two to ten people, or one person who cannot do any of their work. Low is one person who still has other work to do.)
> (Urgency: high is a deadline within 3 hours, or work stopped with no workaround. Medium is needed by the end of today, or work stopped but a workaround (paper, a cell phone, another screen) keeps it going. Low can wait several days. Work stopped means the person's main task cannot be done at all.)

**What kind of ticket is this?**
(the options come in an order that depends on the seed of the question)
- Broken now: get them working again — if chosen: The user wants a service, not a fault repaired. Joanna is asking the desk to order equipment, which it does by its steps. A routine job with fixed steps is a request, and the desk follows its steps.
- Asked for: follow the steps set for it (right)
- Keeps happening: hand on the pattern with the evidence — if chosen: The user wants a service, not a fault repaired. Joanna is asking the desk to order equipment, which it does by its steps. A routine job with fixed steps is a request.

**What priority does the table give it?**
- Critical — if chosen: The table gives Critical only for impact high with urgency high. This ticket is impact low with urgency low, which is Low.
- High — if chosen: The table gives High only for impact high with urgency medium, or impact medium with urgency high. This ticket is impact low with urgency low, which is Low.
- Moderate — if chosen: The table gives Moderate only for impact high with urgency low, or impact medium with urgency medium, or impact low with urgency high. This ticket is impact low with urgency low, which is Low.
- Low (right)

After the answer: the deciding words are marked. Reason: Joanna is asking the desk to order equipment, which it does by its steps. That makes it a request. Impact is low: one person, who has a working screen. Urgency is low: Joanna says sometime this month. The table gives Low for impact low with urgency low.

#### Check question 18

An email: "Anthony Mendes", Floor 2 admin · Monday 8:50 AM.

> Subject: **Floor 2 printer jammed again**
>
> The floor 2 printer jammed again. There are three of us who use it.
> We must print today's schedule for the 9:30 meeting.

A plain table, "Tickets for the floor 2 printer in the last three weeks":

> Ticket  |  When  |  What was reported  |  What fixed it  (the column heads)
> 4140  |  Oct 5  |  Paper jam in tray 2  |  Cleared the jam
> 4155  |  Oct 9  |  Paper jam in tray 2  |  Cleared the jam
> 4171  |  Oct 14  |  Paper jam in tray 2  |  Cleared the jam
> 4180  |  Oct 16  |  Paper jam in tray 2  |  Cleared the jam
> 4199  |  Oct 19  |  Paper jam in tray 2  |  Cleared the jam

A plain table, "Alderwick Health help desk: priority table":

> How many, how important  |  Urgency high  |  Urgency medium  |  Urgency low  (the column heads)
> Impact high  |  Critical  |  High  |  Moderate
> Impact medium  |  High  |  Moderate  |  Low
> Impact low  |  Moderate  |  Low  |  Low
> (Impact: high is more than ten people affected, or a task done for patients (check-in, records) or billing stopped, for any number of people. Medium is two to ten people, or one person who cannot do any of their work. Low is one person who still has other work to do.)
> (Urgency: high is a deadline within 3 hours, or work stopped with no workaround. Medium is needed by the end of today, or work stopped but a workaround (paper, a cell phone, another screen) keeps it going. Low can wait several days. Work stopped means the person's main task cannot be done at all.)

**What kind of ticket is this?**
(the options come in an order that depends on the seed of the question)
- Broken now: get them working again — if chosen: Getting this person working is only part of it. The record shows five tickets for the same jam in tray 2, each ended by clearing it, and it keeps coming back. The cause behind the repeats is what is left, and it goes on to be found.
- Asked for: follow the steps set for it — if chosen: The record shows five tickets for the same jam in tray 2, each ended by clearing it, and it keeps coming back. The same fault keeps coming back, so it is a problem.
- Keeps happening: hand on the pattern with the evidence (right)

**What priority does the table give it?**
- Critical — if chosen: The table gives Critical only for impact high with urgency high. This ticket is impact medium with urgency high, which is High.
- High (right)
- Moderate — if chosen: The table gives Moderate only for impact high with urgency low, or impact medium with urgency medium, or impact low with urgency high. This ticket is impact medium with urgency high, which is High.
- Low — if chosen: The table gives Low only for impact medium with urgency low, or impact low with urgency medium, or impact low with urgency low. This ticket is impact medium with urgency high, which is High.

After the answer: the deciding words are marked. Reason: The record shows five tickets for the same jam in tray 2, each ended by clearing it, and it keeps coming back. That makes it a problem. Impact is medium: three people use the printer. Urgency is high: the schedule is needed for the 9:30 meeting, within a few hours. The table gives High for impact medium with urgency high.

#### Check question 19

A chat, with its history: "Yusuf Aziz", Accounting · Monday 9:30 AM.

> (Yusuf Aziz, at the left) My second monitor went black this morning. It was fine on Friday.
> (Yusuf Aziz, at the left) My laptop screen is fine, and I am in meetings all day, so no rush.

A plain table, "Alderwick Health help desk: priority table":

> How many, how important  |  Urgency high  |  Urgency medium  |  Urgency low  (the column heads)
> Impact high  |  Critical  |  High  |  Moderate
> Impact medium  |  High  |  Moderate  |  Low
> Impact low  |  Moderate  |  Low  |  Low
> (Impact: high is more than ten people affected, or a task done for patients (check-in, records) or billing stopped, for any number of people. Medium is two to ten people, or one person who cannot do any of their work. Low is one person who still has other work to do.)
> (Urgency: high is a deadline within 3 hours, or work stopped with no workaround. Medium is needed by the end of today, or work stopped but a workaround (paper, a cell phone, another screen) keeps it going. Low can wait several days. Work stopped means the person's main task cannot be done at all.)

**What kind of ticket is this?**
(the options come in an order that depends on the seed of the question)
- Broken now: get them working again (right)
- Asked for: follow the steps set for it — if chosen: Nobody is asking for something new. The monitor worked on Friday and is black today. Something that worked has stopped or got worse, so it is an incident.
- Keeps happening: hand on the pattern with the evidence — if chosen: The monitor worked on Friday and is black today. The desk sorts a ticket as a problem only when two or more earlier reports show the same fault.

**What priority does the table give it?**
- Critical — if chosen: The table gives Critical only for impact high with urgency high. This ticket is impact low with urgency low, which is Low.
- High — if chosen: The table gives High only for impact high with urgency medium, or impact medium with urgency high. This ticket is impact low with urgency low, which is Low.
- Moderate — if chosen: The table gives Moderate only for impact high with urgency low, or impact medium with urgency medium, or impact low with urgency high. This ticket is impact low with urgency low, which is Low.
- Low (right)

After the answer: the deciding words are marked. Reason: The monitor worked on Friday and is black today. That makes it an incident. Impact is low: one person is affected, and the laptop screen works. Urgency is low: Yusuf says there is no rush. The table gives Low for impact low with urgency low.

#### Check question 20

An email: "Helen Cho", HR · Monday 9:45 AM.

> Subject: **Logins for four temporary workers**
>
> Four temporary workers start tomorrow at 8.
> Please have their logins and email addresses ready by the end of today. Their names are attached.

A plain table, "Alderwick Health help desk: priority table":

> How many, how important  |  Urgency high  |  Urgency medium  |  Urgency low  (the column heads)
> Impact high  |  Critical  |  High  |  Moderate
> Impact medium  |  High  |  Moderate  |  Low
> Impact low  |  Moderate  |  Low  |  Low
> (Impact: high is more than ten people affected, or a task done for patients (check-in, records) or billing stopped, for any number of people. Medium is two to ten people, or one person who cannot do any of their work. Low is one person who still has other work to do.)
> (Urgency: high is a deadline within 3 hours, or work stopped with no workaround. Medium is needed by the end of today, or work stopped but a workaround (paper, a cell phone, another screen) keeps it going. Low can wait several days. Work stopped means the person's main task cannot be done at all.)

**What kind of ticket is this?**
(the options come in an order that depends on the seed of the question)
- Broken now: get them working again — if chosen: The user wants a service, not a fault repaired. Helen wants logins created, a routine job the desk has fixed steps for. A routine job with fixed steps is a request, and the desk follows its steps.
- Asked for: follow the steps set for it (right)
- Keeps happening: hand on the pattern with the evidence — if chosen: The user wants a service, not a fault repaired. Helen wants logins created, a routine job the desk has fixed steps for. A routine job with fixed steps is a request.

**What priority does the table give it?**
- Critical — if chosen: The table gives Critical only for impact high with urgency high. This ticket is impact medium with urgency medium, which is Moderate.
- High — if chosen: The table gives High only for impact high with urgency medium, or impact medium with urgency high. This ticket is impact medium with urgency medium, which is Moderate.
- Moderate (right)
- Low — if chosen: The table gives Low only for impact medium with urgency low, or impact low with urgency medium, or impact low with urgency low. This ticket is impact medium with urgency medium, which is Moderate.

After the answer: the deciding words are marked. Reason: Helen wants logins created, a routine job the desk has fixed steps for. That makes it a request. Impact is medium: four people cannot start work without them. Urgency is medium: they are needed by the end of today. The table gives Moderate for impact medium with urgency medium.

#### Check question 21

An email: "Lawrence Silva", Scheduling · Monday 10:00 AM.

> Subject: **Shared calendar times are off**
>
> The shared calendar for all 40 staff shows next week's shifts one hour late. It showed the right times last week.
> No one has missed a shift yet. The new shifts start next Monday.

A plain table, "Alderwick Health help desk: priority table":

> How many, how important  |  Urgency high  |  Urgency medium  |  Urgency low  (the column heads)
> Impact high  |  Critical  |  High  |  Moderate
> Impact medium  |  High  |  Moderate  |  Low
> Impact low  |  Moderate  |  Low  |  Low
> (Impact: high is more than ten people affected, or a task done for patients (check-in, records) or billing stopped, for any number of people. Medium is two to ten people, or one person who cannot do any of their work. Low is one person who still has other work to do.)
> (Urgency: high is a deadline within 3 hours, or work stopped with no workaround. Medium is needed by the end of today, or work stopped but a workaround (paper, a cell phone, another screen) keeps it going. Low can wait several days. Work stopped means the person's main task cannot be done at all.)

**What kind of ticket is this?**
(the options come in an order that depends on the seed of the question)
- Broken now: get them working again (right)
- Asked for: follow the steps set for it — if chosen: Nobody is asking for something new. The calendar showed the right times last week and shows them an hour late today. Something that worked has stopped or got worse, so it is an incident.
- Keeps happening: hand on the pattern with the evidence — if chosen: The calendar showed the right times last week and shows them an hour late today. The desk sorts a ticket as a problem only when two or more earlier reports show the same fault.

**What priority does the table give it?**
- Critical — if chosen: The table gives Critical only for impact high with urgency high. This ticket is impact high with urgency low, which is Moderate.
- High — if chosen: The table gives High only for impact high with urgency medium, or impact medium with urgency high. This ticket is impact high with urgency low, which is Moderate.
- Moderate (right)
- Low — if chosen: The table gives Low only for impact medium with urgency low, or impact low with urgency medium, or impact low with urgency low. This ticket is impact high with urgency low, which is Moderate.

After the answer: the deciding words are marked. Reason: The calendar showed the right times last week and shows them an hour late today. That makes it an incident. Impact is high: all 40 staff use the calendar for their shifts. Urgency is low: the new shifts start next Monday, days away. The table gives Moderate for impact high with urgency low.

## The result

For example "6 of 6: passed" or "4 of 6: not yet", each rule above shown as met or not met, then every answer with its feedback, the missed ones first.
