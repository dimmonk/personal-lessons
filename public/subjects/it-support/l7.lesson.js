// IT Help Desk, lesson 7: Finishing: confirm, hand on, write it up (part finish). Moves 7 to 9 of the way of thinking.
// Findings: IT11 (closure needs the user's confirmation; a problem is the cause behind tickets that keep coming), IT13 (hand on with everything found; the desk's rule decides when),
// IT14 (KCS: their words, the environment, the resolution, the cause; complete thoughts), IT15 (ticket content). A+ Core 2 objectives 4.1
// (ticketing: user and device information, description, severity, escalation, progress notes, resolution; knowledge base) and 4.7 (set and
// meet expectations, offer repair or replacement options, follow up). Confirming who is asking before a reset is the desk’s own rule against impersonation (A+ Core 2 2.5 lists impersonation as an attack; it gives no procedure for the check). Rulings 1, 3, 6, 7, 8 of rulings-l1-8.md. One worked ticket whose first guess a second user's laptop rules out;
// a first group with the deciding words marked; a second with none; a third of new tickets; a check of six new tickets, no help.
FC.lesson("it-support", {
  id: "l7", part: "finish", title: "Finishing: confirm, hand on, write it up", rev: 2, status: "live",
  history: [{ rev: 1, date: "2026-10-23", change: "First version, built to the plan: closing only when the user confirms, handing on with what they saw, what was tried and what each test showed, and the ticket note in four fields." }, { rev: 2, date: "2026-10-23", change: "Names made unique across the subject and people called by name or they; wording kept to the plain-words list." }],
  why: [
    "You re-add Thabo’s shared drive and it opens on your screen. You close the ticket. At 2:55 they write: it still shows a red X on their laptop, and their work is due at 3.",
    "The last three moves: close only when the user says it works, hand it on when the desk’s rule says so with everything you found, and write the note the next technician can search for and use."
  ],
  flow: [
    { title: "Close when the user says it works",
      show: [
        { kind: "prose", text: [
          "A fix is done when the user can do the thing they could not do, not when it works on your screen. So before you close, tell them what you changed and what to try, then have them try it themselves, on their own computer, with the work they were doing.",
          "Tell them how to reach you if it comes back, and how to keep working meanwhile if the fix must wait (a workaround).",
          "Close the ticket as fixed only after they say yes. When they do, write the note, then close the ticket: the note is part of closing. A “thanks” before they have tried it is not a yes. If they stay silent, your own test does not close it: you follow up on the desk’s schedule, by a different way each time if you can, saying again what you changed and how to check it. Until the user says it works, the ticket stays open. The desk’s rule gives the schedule and what happens at its end, in a quoted block like the one below. No ticket is closed without the user’s yes.",
          "ITIL 4 (a guide to running IT services) makes the user’s confirmation part of closing; the A+ objectives (CompTIA’s list for entry-level technicians) add a follow-up after the fix."] },
        { kind: "document", form: "table", title: "This desk’s rule", head: ["Rule"], rows: [{ id: "q1", cells: ["After a fix, follow up on day 1, day 3 and day 5, a different way each time (chat, email or phone). The ticket stays open until the user says it works. With no answer after day 5, write “no answer” in the note and tell the desk lead; the ticket stays open."] }] }
      ] },
    { title: "Hand it on with everything you found",
      show: [
        { kind: "prose", text: [
          "Some tickets are not yours to finish. The desk’s own rule says so: it sends this kind of ticket to a team, or it gives a time box (the most time you may spend on one ticket), or you lack the access the fix needs. A known fix that fails does not send a ticket on by itself; you narrow the problem down first. When the rule says to hand on, you pass the ticket to the next person, often a more senior technician. Desks also call this escalating; here both words mean only this. Handing on takes the place of closing the ticket yourself; either way you write the note.",
          "Four things go with it. What the user saw, in their words. What you tried, in order. What each test showed, including the ones that ruled something out. And the device and setup. Without them the next person starts over.",
          "Tell the user who has the ticket now and when they will hear. Handing on does not end your part: a handed-on ticket still closes when the user says it works."] }
      ] },
    { title: "The note the next technician can use",
      show: [
        { kind: "prose", text: [
          "A ticket note is not “fixed”. The next time a user describes the same trouble, a technician searches the desk’s knowledge base (its collection of past fixes) for it. Your note is the answer they find. A published standard for help desks, called knowledge-centered service, keeps four things:",
          "Their words: what the user saw, as they said it, shortened but not relabelled; this course leaves out insults and keeps the facts (“since the update”, “only that spreadsheet”). The setup: the device, the system, the network and the account. What fixed it. What caused it, if you know; say so when it is a likely cause and not a proved one.",
          "Write complete thoughts, not necessarily full sentences. A ticket record also holds the user, the device, a category, how serious it is, your progress notes, and how it ended.",
          "An incident is one ticket: one person cannot do something. A problem is the cause behind tickets that keep coming, the same thing happening again and again. When it does, close this user’s ticket as usual and hand the pattern on with the tickets as evidence, so someone looks for the cause. How many repeats make a pattern is the desk’s rule. One outage that hits many people at once is not a problem; it is one incident with a big impact."] },
        { kind: "message", form: "email", from: "Desk ticket", subject: "A ticket note", detail: "Thabo Nair, the S: drive", lines: [
          { id: "e1", text: "Their words: “red X on S:, cannot open the month-end folder.”" },
          { id: "e2", text: "Setup: Windows 11 laptop, office Wi-Fi, signed in as pnair." },
          { id: "e3", text: "Fixed by: disconnecting S: and connecting it again." },
          { id: "e4", text: "Cause: not known; it began after their password change on Monday." }] }
      ] },
    { title: "The common mistake",
      show: [
        { kind: "prose", tone: "wrong", text: [
          "“It worked on my test, so I close it.”",
          "“I know what I did, so a note that says ‘fixed’ is enough.”",
          "“They have not answered in a day, so I close it.”",
          "Your test is not the user’s work, silence is not a yes, and “fixed” tells the next technician nothing. Have the user try it, follow up when they do not answer, then write their words, the setup, the fix and the cause."] }
      ] },
    { worked: "l7-w-drive" },
    { set: { items: ["l7-p-printer", "l7-p-wait", "l7-p-limit", "l7-p-pair"], order: "listed", support: { shown: true } } },
    { set: { items: ["l7-q-field", "l7-q-pick", "l7-q-tap", "l7-q-problem", "l7-q-order"], order: "shuffle" } },
    { set: { items: ["l7-r-quiet", "l7-r-three", "l7-r-tell", "l7-r-cause", "l7-r-words"], order: "shuffle", mix: { from: ["l5", "l6"], share: 0.3 } } }
  ],
  check: {
    items: ["l7-k-sam", "l7-k-pick", "l7-k-hand", "l7-k-none", "l7-k-problem", "l7-k-quiet"],
    feedback: "at-end", order: "shuffle",
    pass: [{ right: { min: 5 } }, { slip: "closed-early", max: 0 }]
  }
});
