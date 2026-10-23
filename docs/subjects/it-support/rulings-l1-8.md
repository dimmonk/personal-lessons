# IT Help Desk lessons 1 to 8: rulings on the first reviews (2026-10-23)

Reviews: `review-learner-l1-4.md`, `review-learner-l5-8.md`, `review-research-l1-8.md`. Every finding in them is fixed. Where a
finding crosses lessons, the ruling below decides it, so every lesson says the same thing.

1. **The time limit (lessons 4, 7).** IT3 says the skill is "knowing when to stop" a quick fix; it gives no number. So: decide your
   own limit before you start, in tries or minutes; no fixed number is taught as a rule ("two tries or ten minutes" goes). When the
   known fix fails or the limit is reached, **stop guessing and narrow it down (move 5)**. Handing on (move 8) comes when the
   **desk's own rule** says so (a time box or a criterion the desk sets, IT13); a ticket that names such a rule shows it in a quoted
   block ("This desk's rule: hand on after 20 minutes on one ticket"). No feedback says "hand on" just because the known fix failed.
2. **Reproducing the fault (lesson 3).** No source read makes it a precondition. It is dropped as a required step. "Ask them to show
   you" stays as part of getting the story (IT19: the user as a partner who describes, shows, tries one thing). A fault that cannot be
   made to happen again is still worked: what changed, what the logs or the user's notes say, then move 5.
3. **Problem vs incident (lesson 1).** ITIL 4 (IT10): a problem is the cause behind one or more incidents; a ticket is sorted as a
   problem when the **same thing keeps happening** (a pattern over time). One outage that hits many people at once is an
   **incident with high impact**, never a problem. Lesson text and every question follow this.
4. **Service request (lesson 1).** A routine ask the desk has a fixed procedure for (access, a new account, a new device, software from
   the approved list). Drop "nothing is broken" as the test; a question never relies on a fact the ticket does not state.
5. **The priority table (lesson 1).** It is this desk's own table, shown on every priority question; the lesson says a real desk
   has its own. Every question is marked by the table and the table's notes exactly; no note is contradicted by a mark.
6. **Who is asking (lessons 7, 8, and any reset or unlock).** Before a password reset, an unlock or access, the technician confirms
   the caller is who they say, by the desk's own check (A+ Core 2 2.5 social engineering, impersonation). Add it where a lesson resets
   or unlocks.
7. **Closing (lesson 7).** Close only when the user confirms it works (IT11, plan). A silent user gets a follow-up; drop "close by
   the desk's rule after three days".
8. **No answer by pattern (all).** The right option is not the longest, not the only one with a person, time or "sorry", not always
   phrased the same. Wrong options are what a novice would really do, same length and tone; options shuffled.
9. **Single fault.** Where lessons 5 and 6 teach that one test rules a cause out, say once that this assumes one fault at a time
   (IT4: swap "assumes that the problem is with a single component").
10. **Facts.** A print head is an inkjet part, toner a laser part: never one printer with both. Every unexplained IT word the
    learner reviews list gets a one-line explanation the first time it appears.

## Round 2 (2026-10-23, after `review-learner-l1-4-round2.md`, `review-learner-l5-8-round2.md`, `review-research-l1-8-round2.md`)

11. **Identity is checked by something the caller did not supply**: the number on file, the directory, the manager looked up in
    the directory, the desk's own verification questions. Never a number or name the caller gives.
12. **One change at a time has no exception.** Drop the "trivial changes may go together" caveat everywhere; the reason given is
    the one the lesson teaches (you cannot tell which change did it, and a change you did not need stays in), never an unsourced
    claim such as "only feels faster".
13. **Every ticket states what its answer depends on**: the time when urgency turns on hours, whether the desk has a hand-on rule,
    whether the setup works for others. A question never needs a fact the learner has to invent, and no right option states a fact
    the ticket does not give.
14. **Unsourced generalizations go** ("these five come up most", "careful technicians", "leave out insults" as a rule): say what
    the lesson's source says, or say it is this desk's rule in a quoted block.
15. **CompTIA recommends its six-step method**; the nine moves are those six steps with the desk's sorting, hand-on and write-up
    added from ITIL 4 and KCS. Lesson 1 says exactly that.

## Round 3 (2026-10-23)

16. **Ruling 7 stands, no exception.** A silent user's ticket stays open: the desk's quoted follow-up schedule runs, and when it
    runs out the technician notes "no answer" and tells the desk lead; the ticket is never closed without the user's confirmation
    (IT11, plan move 9, the real-world test). Lesson 7's day-5 close goes.
17. **Order at the end**: confirm with the user, write the note, then close (the note is part of closing, IT11 and IT14); every
    worked ticket and question uses that order.
18. **Ruling 15 corrected**: CompTIA's six steps already end with documenting; the nine moves add the desk's sorting (ITIL 4
    triage) and the hand-on (ITIL 4 escalation), and split CompTIA's documenting into the reusable write-up (KCS).
19. **Priority is a rating, not the order of work** (IT12): lessons say the desk's rules turn the rating into an order; no tie
    rule is taught unless a quoted desk rule gives it.

## Later lessons (2026-10-23)

20. **No recurring clause marks an option.** Wrong options must not be the only ones with a "since…" or "because…" tail (or any
    other repeated shape); give reasons to right and wrong options alike, or to neither.
21. **Erasing is taught exactly**: a quick format and `diskpart clean` remove the way to find the files, not the files (they can
    be recovered); a drive leaving the company is wiped with a full overwrite (`format` without `/q` writes zeros, `clean all`) or
    destroyed (lesson 26's disposal rules).
22. **People**: each name has one job across the subject, and lessons refer to people by name or "they", never a guessed pronoun.
23. **The final test is two lessons** (research review of l25-29): lesson 29 "The whole ticket" has the ten mixed tickets as its
    graded check (pass 8 of 10, and none that touches data before protecting it or closes before the user confirms); lesson 30
    "The mock exam" draws 40 questions weighted by the A+ domain weights: Core 1 mobile 3, networking 5, hardware 5,
    virtualization and cloud 2, hardware and network troubleshooting 5; Core 2 operating systems 6, security 5, software
    troubleshooting 5, operational procedures 4 (unit 1's ticket and communication strands count here, A+ Core 2 4.1 and 4.7).
