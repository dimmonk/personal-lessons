// IT Help Desk, lesson 1: What kind of ticket, and how soon (part kind, strand kind). Move 1 of the nine moves.
// Sources: research it-support.md IT10 (incident, problem and request are three kinds of work, handled differently), IT11 (the desk sorts and
// registers a ticket first), IT12 (impact and urgency, read through the desk's own table; the table is the company's, the sample is ServiceNow's),
// IT1 and IT2 (the method is not on the A+ exam; CompTIA recommends it for a first IT job), and the A+ 220-1202 objective 4.1 (a ticket has
// categories and severity). Judgement calls: the definition of a request (the AXELOS request guide was not read), five of the nine boxes of the
// desk's table (IT12 prints four of them; the rest follow its pattern), and every limit in the table's notes (ten people, 3 hours, two earlier
// tickets make a problem): they are this desk's own, as the lesson says a real desk has its own. Rulings 3, 4 and 5 of rulings-l1-8.md decide the kinds and the table.
// Shape: a ticket that opens it, the three kinds, the nine moves and what CompTIA says of them, the table, the common error (the loudest ticket
// first), one worked ticket whose first guess the table rules out, a first group with the deciding words marked, a second with none, two pairs of
// look-alikes, and a check of six new tickets.
FC.lesson("it-support", {
  id: "l1", part: "kind", title: "What kind of ticket, and how soon", rev: 1, status: "live",
  history: [{ rev: 1, date: "2026-10-23", change: "First version, built to the plan: the three kinds of ticket, the nine moves and what CompTIA says of them, and a priority read from a desk's table of impact and urgency." }],
  why: [
    "It is 8:20 on a Tuesday and three tickets are waiting. Billing cannot open the claims program, and the claims go out at noon. A new hire starts next Monday and needs a laptop. The wall screen in room 4B has lost its connection for the fifth time in five weeks.",
    "Which one do you open first, and what does each one need from you? Here you learn to sort a ticket by kind, and to give it a priority from the desk's own table."
  ],
  flow: [
    { title: "Three kinds of ticket",
      show: [
        { kind: "prose", text: [
          "Every ticket at a help desk is one of three kinds. The kind decides what you do first.",
          "An incident is something that worked and has stopped or got worse. \"The printer worked yesterday and prints nothing today.\" You get the person working again, with a workaround if the real fix must wait (a workaround is a temporary way to keep working), and you write down what you did. An incident can hit many people at once, such as a program that is blank for a whole department. That is an incident with a high impact.",
          "A request is a routine job that the desk has fixed steps for: access to a shared folder (a folder on the company's storage that a group uses together), a new account, a new device, software from the approved list. \"Please get a laptop and a login ready for our new hire.\" A login is the username and password that let a person sign in. The user wants a service, not a fault repaired. You follow the desk's steps.",
          "A problem is the same thing happening again and again. \"The room 4B screen dropped again, the fifth time in five weeks.\" The desk's rule here: when two or more earlier reports show the same fault (in its records, or listed with dates by the user), the new ticket is sorted as a problem. A fault seen for the first time, or once before, is still an incident. You still get this person working. But the cause is the real work, so you hand on the pattern with the evidence: the dates, the room, what ended it each time. ITIL itself keeps the user's ticket an incident and tracks the cause as a separate problem. This desk sorts the ticket as a problem so that the pattern gets handed on."] }
      ] },
    { title: "The nine moves, and where they come from",
      show: [
        { kind: "prose", text: [
          "Sorting the ticket is the first of nine moves. CompTIA (the group that runs the A+ exams) recommends six steps for solving a problem. The nine moves are those six steps with two things from ITIL (a widely used body of help desk practices) added: the desk's sorting of the ticket, and the hand-on to someone else. CompTIA's last step, documenting, is here split into the write-up that the next person can reuse, which comes from knowledge-centered service (a way of writing down fixes so the next person can reuse them). In this order:",
          "1. Sort it.",
          "2. Get the user's words, and search what the desk already knows.",
          "3. Find out what changed, and protect their data.",
          "4. Try the known fix, with a limit you decide first.",
          "5. Cut the problem in half with the cheapest test.",
          "6. Change one thing at a time.",
          "7. Check that it works for them, and tell them what happens next.",
          "8. Hand it on with everything you found, when the desk's own rule says to.",
          "9. Write it up so the next person can reuse it. This comes last, after move 7 (it works) or move 8 (you handed it on).",
          "CompTIA's current A+ exams do not test its six steps; it recommends them to training programs that prepare people for a first IT job (older exams did test them, and many study books still show them). So you will not be tested on the nine moves, and you will use them on every ticket here. The facts the exams do test come later, in the parts on the computer, networks and security."] }
      ] },
    { title: "How soon: impact and urgency",
      show: [
        { kind: "prose", text: [
          "Two questions put a ticket in the line. Impact: how many people are affected, and how important is their work? Urgency: how long can it wait?",
          "A desk has a table that turns the two answers into a priority. This is the table of the desk in this course; every desk has its own, with its own boxes and its own limits, so read the table you are given. A priority is a rating from the table, not by itself an order of work; the desk's own rules turn ratings into an order. This desk's rule: \"Open the highest priority first.\" Back at 8:20: the claims program is an incident with impact high and urgency high, which is Critical, so you open it first. The laptop is a request, needed next Monday, and the room 4B screen is a problem, which you hand on with its dates. In the check at the end, a ticket counts as right only when both its kind and its priority are right, and five of six pass."] },
        { kind: "document", form: "table", title: "Alderwick Health help desk: priority table",
          head: ["How many, how important", "Urgency high", "Urgency medium", "Urgency low"],
          rows: [
            { id: "imp-high", cells: ["Impact high", "Critical", "High", "Moderate"] },
            { id: "imp-medium", cells: ["Impact medium", "High", "Moderate", "Low"] },
            { id: "imp-low", cells: ["Impact low", "Moderate", "Low", "Low"] }],
          notes: [
            "Impact: high is more than ten people affected, or a task done for patients (check-in, records) or billing stopped, for any number of people. Medium is two to ten people, or one person who cannot do any of their work. Low is one person who still has other work to do.",
            "Urgency: high is a deadline within 3 hours, or work stopped with no workaround. Medium is needed by the end of today, or work stopped but a workaround (paper, a cell phone, another screen) keeps it going. Low can wait several days. Work stopped means the person's main task cannot be done at all."] },
        { kind: "prose", tone: "wrong", text: [
          "The ticket from the most important person, or the one in capital letters, goes first.",
          "The table counts people and work, not titles or capital letters. A vice president's flickering monitor, with two other screens working, is a low-impact ticket. Read impact and urgency from the ticket, then read the priority from the table."] }
      ] },
    { worked: "l1-w-monitor" },
    { set: { items: ["l1-p-claims", "l1-p-newhire", "l1-p-room", "l1-p-deck"], order: "listed", support: { shown: true } } },
    { set: { items: ["l1-q-folder", "l1-q-kiosk", "l1-q-disk", "l1-q-install", "l1-q-unrelated", "l1-q-again", "l1-q-dates"], order: "shuffle" } },
    { set: { items: [["l1-g-print-inc", "l1-g-print-req"], ["l1-g-wifi-once", "l1-g-wifi-again"]], order: "listed" } }
  ],
  check: {
    items: ["l1-k-records", "l1-k-monitor", "l1-k-jam", "l1-k-second", "l1-k-temps", "l1-k-calendar"],
    feedback: "at-end", order: "shuffle",
    pass: [{ right: { min: 5 } }]
  }
});
