// IT Help Desk, lesson 1 "What kind of ticket, and how soon" (part kind): the questions. Move 1 of the way of thinking (plan, "The way of thinking"):
// sort the ticket (incident, request or problem; IT10, IT11) and give it a priority from the desk's own table of impact and urgency (IT12).
// Every ticket is invented (Alderwick Health, a group of clinics). One table, written once below, is the document block of every priority
// question; each question's priority is read from that table by the code, so a question can never disagree with the table. The kind, the
// impact and the urgency of each ticket are written once, in its spec; the wording of every wrong answer comes from the spec and the table.
// Five-box layout: the worked ticket, the first group (four asks, so the reading of impact and urgency is shown), the second group and the
// pairs (kind and priority), the check (six new tickets) and a reserve of three.
(() => {
const STRAND = "kind";
const LEVELS = ["high", "medium", "low"];
const LEVEL_NAME = { high: "high", medium: "medium", low: "low" };
// the desk's table (impact down, urgency across); the four boxes IT12 prints are High/High, High/Medium, Medium/Medium and Low/Low, the other five are this desk's own
const TABLE = {
  high: { high: "critical", medium: "high", low: "moderate" },
  medium: { high: "high", medium: "moderate", low: "low" },
  low: { high: "moderate", medium: "low", low: "low" } };
const PRIORITY_NAME = { critical: "Critical", high: "High", moderate: "Moderate", low: "Low" };
const PRIORITY_RANK = { critical: 3, high: 2, moderate: 1, low: 0 };
const priorityTable = () => ({ kind: "document", form: "table", title: "Alderwick Health help desk: priority table",
  head: ["How many, how important", "Urgency high", "Urgency medium", "Urgency low"],
  rows: LEVELS.map(imp => ({ id: `imp-${imp}`, cells: [`Impact ${imp}`, ...LEVELS.map(urg => PRIORITY_NAME[TABLE[imp][urg]])] })),
  notes: [
    "Impact: high is more than ten people affected, or a task done for patients (check-in, records) or billing stopped, for any number of people. Medium is two to ten people, or one person who cannot do any of their work. Low is one person who still has other work to do.",
    "Urgency: high is a deadline within 3 hours, or work stopped with no workaround. Medium is needed by the end of today, or work stopped but a workaround (paper, a cell phone, another screen) keeps it going. Low can wait several days. Work stopped means the person's main task cannot be done at all."] });
// the boxes of the table that give a priority, in words
const boxesOf = priority => LEVELS.flatMap(imp => LEVELS.filter(urg => TABLE[imp][urg] === priority).map(urg => `impact ${imp} with urgency ${urg}`)).join(", or ");

const KIND_NAME = { incident: "an incident", request: "a request", problem: "a problem" };
const KIND_RIGHT = {
  incident: "You get the person working again first, with a workaround if the real fix must wait, and write down what you did.",
  request: "You follow the steps the desk has for this kind of job, and write down when it was done.",
  problem: "You still get this person working, and you hand on the pattern with the evidence so that someone can look for the cause." };
// what a wrong kind says, by the kind chosen and the kind it is; `tell` is the ticket's own sentence about what decides it
const kindMiss = (chosen, actual, tell) => ({
  "incident/request": `The user wants a service, not a fault repaired. ${tell} A routine job with fixed steps is a request, and the desk follows its steps.`,
  "incident/problem": `Getting this person working is only part of it. ${tell} The cause behind the repeats is what is left, and it goes on to be found.`,
  "request/incident": `Nobody is asking for something new. ${tell} Something that worked has stopped or got worse, so it is an incident.`,
  "request/problem": `${tell} The same fault keeps coming back, so it is a problem.`,
  "problem/incident": `${tell} The desk sorts a ticket as a problem only when two or more earlier reports show the same fault.`,
  "problem/request": `The user wants a service, not a fault repaired. ${tell} A routine job with fixed steps is a request.` }[`${chosen}/${actual}`]);

const kindAsk = s => ({ id: "kind", kind: "choose", prompt: "What kind of ticket is this?", from: "kind", right: s.kind, shuffle: true,
  then: Object.fromEntries(["incident", "request", "problem"].map(k => [k, k === s.kind ? KIND_RIGHT[k] : kindMiss(k, s.kind, s.tell)])),
  slips: Object.fromEntries(["incident", "request", "problem"].filter(k => k !== s.kind).map(k => [k, "wrong-kind"])) });
// each level is offered with the table note that defines it, so no option is the longest by its word alone
const LEVEL_GLOSS = {
  Impact: { high: "High: more than ten people, or the task for patients", medium: "Medium: two to ten people, or one who can do no work", low: "Low: one person who still has other work to do" },
  Urgency: { high: "High: a deadline within 3 hours, or work stopped with no workaround", medium: "Medium: needed by the end of today, or work stopped with a workaround", low: "Low: can wait several days, with no deadline coming up soon" } };
const levelAsk = (id, prompt, right, why, label) => ({ id, kind: "choose", prompt,
  options: LEVELS.map(l => l === right
    ? { id: l, text: LEVEL_GLOSS[label][l], ok: true, then: `${label} is ${l}: ${why}` }
    : { id: l, text: LEVEL_GLOSS[label][l], then: `${label} is ${right} here, not ${l}: ${why}` }) });
const priorityAsk = s => {
  const right = TABLE[s.imp][s.urg], ids = Object.keys(PRIORITY_NAME);
  return { id: "prio", kind: "choose", prompt: "What priority does the table give it?", from: "priority", right,
    then: Object.fromEntries(ids.map(p => [p, p === right
      ? `The table's box for impact ${s.imp} with urgency ${s.urg} is ${PRIORITY_NAME[right]}.`
      : `The table gives ${PRIORITY_NAME[p]} only for ${boxesOf(p)}. This ticket is impact ${s.imp} with urgency ${s.urg}, which is ${PRIORITY_NAME[right]}.`])),
    slips: Object.fromEntries(ids.filter(p => p !== right).map(p => [p, PRIORITY_RANK[p] > PRIORITY_RANK[right] ? "too-high" : "too-low"])) };
};
const line = (id, text) => ({ id, text });
// one ticket: its message, anything the desk's records add (a history of tickets), and the desk's table
const ticket = s => {
  const message = { kind: "message", form: s.form || "email", from: s.from, detail: s.detail, ...(s.subject ? { subject: s.subject } : {}), lines: s.lines.map(l => line(l[0], l[1])) };
  const asks = [kindAsk(s),
    ...(s.full ? [levelAsk("impact", "How big is the impact?", s.imp, s.impWhy, "Impact"), levelAsk("urgency", "How urgent is it?", s.urg, s.urgWhy, "Urgency")] : []),
    priorityAsk(s)];
  const prio = PRIORITY_NAME[TABLE[s.imp][s.urg]];
  return { id: s.id, strand: STRAND, facets: {}, blocks: [message, ...(s.history ? [s.history] : []), priorityTable()], asks,
    deciding: [...s.dec, `imp-${s.imp}`],
    reason: `${s.tell} That makes it ${KIND_NAME[s.kind]}. Impact is ${s.imp}: ${s.impWhy} Urgency is ${s.urg}: ${s.urgWhy} The table gives ${prio} for impact ${s.imp} with urgency ${s.urg}.`,
    ...(s.steps ? { steps: s.steps } : {}) };
};
// the records of earlier tickets that a problem shows in
const history = (title, rows) => ({ kind: "document", form: "table", title, head: ["Ticket", "When", "What was reported", "What fixed it"],
  rows: rows.map((r, i) => ({ id: `h${i + 1}`, cells: r })) });

FC.items("it-support", [
  // ----- the worked ticket: the first guess is that a Vice President writing in capitals is Critical -----
  ticket({ id: "l1-w-monitor", full: true, kind: "incident", imp: "low", urg: "medium",
    from: "Maren Holt", subject: "URGENT!!! monitor", detail: "Sales · Tuesday 8:12 AM",
    lines: [["a1", "URGENT!!! My left monitor flickers every so often since last week."], ["a2", "I am the VP of Sales and I need it fixed TODAY."], ["a3", "My laptop screen and my other monitor work fine."]],
    tell: "The monitor worked until last week and now flickers, so something that worked has got worse.",
    impWhy: "one person is affected, and Maren still has two working screens.", urgWhy: "Maren wants it fixed today, but nothing is stopped and nothing is due.",
    dec: ["a2", "a3"],
    steps: [
      { id: "kind", does: "Sort the kind.", working: "The monitor worked until last week and now flickers. Something that worked has got worse, so it is an incident.", ask: "kind" },
      { id: "impact", does: "Count who is affected.", working: "First guess: a vice president, in capitals, must be Critical. The table has no box for a title. It counts people and work. One person is affected and Maren has two working screens, so impact is low.", ask: "impact" },
      { id: "urgency", does: "Find how long it can wait.", working: "Maren wants it fixed today. Nothing is stopped and no deadline is near, so urgency is medium.", ask: "urgency" },
      { id: "prio", does: "Read the table.", working: "Impact low with urgency medium is Low. The first guess is ruled out by the table, not by how the email sounds.", ask: "prio" }] }),

  // ----- the first group (four questions each, so the reading of impact and urgency is shown) -----
  ticket({ id: "l1-p-claims", full: true, kind: "incident", imp: "high", urg: "high",
    from: "Winston Ortiz", subject: "Claims program is blank", detail: "Billing · Tuesday 8:20 AM",
    lines: [["a1", "All 14 of us in billing get a blank window when we open the claims program. It started at 8."], ["a2", "The insurance claims must go out by noon or the clinics do not get paid this week. We have no other way to send them."]],
    tell: "The claims program worked yesterday and opens blank today. Many people hit at once is still an incident, with a high impact, until the same fault keeps coming back.",
    impWhy: "14 people are stopped, and the work is how the clinics get paid.", urgWhy: "work is stopped and there is no other way to send the claims.",
    dec: ["a1", "a2"] }),
  ticket({ id: "l1-p-newhire", full: true, kind: "request", imp: "low", urg: "low",
    from: "Anaya Webb", subject: "New hire next Monday", detail: "Intake · Tuesday 9:05 AM",
    lines: [["a1", "Leona Park starts next Monday in intake."], ["a2", "Please get a laptop and a login ready, with email and the intake shared folder."]],
    tell: "Anaya is asking for what the desk already prepares for every new hire.",
    impWhy: "one person, and nothing of theirs is stopped yet.", urgWhy: "it is needed next Monday, days away.",
    dec: ["a1", "a2"] }),
  ticket({ id: "l1-p-room", full: true, kind: "problem", imp: "medium", urg: "medium",
    from: "Alicia Gomez", subject: "Room 4B screen again", detail: "Admin · Tuesday 9:40 AM",
    lines: [["a1", "The wall screen in room 4B lost its connection again."], ["a2", "I have a meeting for six people in there at 3 this afternoon."]],
    history: history("Tickets for room 4B in the last five weeks", [
      ["4101", "Sep 22", "Screen shows no signal", "Restarted the screen"], ["4127", "Oct 1", "Screen shows no signal", "Restarted the screen"],
      ["4150", "Oct 9", "Screen shows no signal", "Restarted the screen"], ["4188", "Oct 16", "Screen shows no signal", "Restarted the screen"]]),
    tell: "The record shows four earlier tickets for the same screen with the same fault, each ended by a restart that did not last.",
    impWhy: "six people use the room, and a few people are affected.", urgWhy: "the meeting is at 3 this afternoon, more than 3 hours away, so it is needed today.",
    dec: ["a2", "h1", "h2", "h3", "h4"] }),
  ticket({ id: "l1-p-deck", full: true, kind: "incident", imp: "low", urg: "high", form: "chat",
    from: "Gerard Zhao", detail: "Finance · Tuesday 10:15 AM",
    lines: [["a1", "My slide deck says the file is damaged. It opened fine yesterday."], ["a2", "I present it in 20 minutes. Everything else on my laptop works."]],
    tell: "The deck opened yesterday and is damaged today, so something that worked has stopped.",
    impWhy: "one person is affected, and the rest of Gerard's work still runs.", urgWhy: "Gerard presents in 20 minutes, a deadline within a few hours.",
    dec: ["a1", "a2"] }),

  // ----- the second group (kind and priority, nothing marked) -----
  ticket({ id: "l1-q-folder", full: true, kind: "request", imp: "low", urg: "high",
    from: "Lowell Reyes", subject: "Access to the Campaign folder", detail: "Marketing · Wednesday 9:55 AM",
    lines: [["a1", "Please give me access to the Campaign shared folder. I have never had access to it."], ["a2", "I present from it at the 10:30 meeting. The rest of my work is fine."]],
    tell: "Lowell wants access that has never been given, a routine job the desk has fixed steps for.",
    impWhy: "one person, who has other work to do.", urgWhy: "the meeting is in 35 minutes.",
    dec: ["a1", "a2"] }),
  ticket({ id: "l1-q-kiosk", full: true, kind: "incident", imp: "high", urg: "medium", form: "chat",
    from: "Ingrid Reid", detail: "North clinic front desk · Wednesday 8:30 AM",
    lines: [["a1", "The three check-in screens in the lobby say Cannot reach server (the server is the central computer that holds the patient records). They worked when we locked up last night."], ["a2", "We are checking patients in on paper, which is slow. Please have them back by 1 PM."]],
    tell: "The check-in screens worked last night and show an error this morning.",
    impWhy: "check-in is a task done for patients, and it is stopped for the whole clinic.", urgWhy: "paper is a workaround that keeps check-in going, and they want the screens back by 1 PM, more than 3 hours away.",
    dec: ["a1", "a2"] }),
  ticket({ id: "l1-q-disk", full: true, kind: "incident", imp: "medium", urg: "low",
    from: "Mehmet Brandt", subject: "Disk almost full", detail: "HR · Wednesday 11:10 AM",
    lines: [["a1", "Three of us in HR got a message today that the disk (the storage inside the laptop where files are kept) is almost full on our laptops. We got no such message yesterday."], ["a2", "Everything still works. Could someone look at it this week?"]],
    tell: "The laptops showed no such message yesterday and show it today, so something that worked has got worse.",
    impWhy: "three people are affected, and none is stopped.", urgWhy: "Mehmet says this week is fine.",
    dec: ["a1", "a2"] }),
  ticket({ id: "l1-q-install", full: true, kind: "request", imp: "medium", urg: "medium",
    from: "Grace Liu", subject: "Install the signing app", detail: "Intake · Wednesday 8:45 AM",
    lines: [["a1", "Please install the approved PDF signing app on the five laptops in intake."], ["a2", "The team starts using it today with the new forms."]],
    tell: "The team wants an app installed that the desk installs by its steps.",
    impWhy: "five people are affected.", urgWhy: "they start using it today.",
    dec: ["a1", "a2"] }),
  ticket({ id: "l1-q-unrelated", full: true, kind: "incident", imp: "medium", urg: "medium", form: "chat",
    from: "Pavel Novak", detail: "Accounting · Thursday 2:10 PM",
    lines: [["a1", "My laptop camera shows a black picture in video calls. It worked on Monday. Two people on my team have the same."], ["a2", "Please look at it today. The call with the auditors is tomorrow at 10."]],
    history: history("Tickets from accounting in the last five weeks", [
      ["4120", "Sep 25", "Keyboard keys sticking", "Replaced the keyboard"], ["4165", "Oct 12", "Password expired", "Reset the password"], ["4177", "Oct 15", "Scanner jam", "Cleared the jam"]]),
    tell: "The camera worked on Monday and shows a black picture today. The earlier tickets from accounting are for other faults, so nothing repeats.",
    impWhy: "three people are affected.", urgWhy: "Pavel wants it looked at today, and the call is tomorrow.",
    dec: ["a1", "a2", "h1", "h2", "h3"] }),
  ticket({ id: "l1-q-again", full: true, kind: "incident", imp: "medium", urg: "medium", form: "chat",
    from: "Mei Tanaka", detail: "Records office · Wednesday 10:40 AM",
    lines: [["a1", "Could you please help? The document scanner says Not connected again. It did the same once before, on Oct 8."], ["a2", "Two of us use it to scan old paper files into the archive, which is due by 5 PM. This is not patient care. We can still scan on the slow scanner in room 2, so the work goes on."]],
    history: history("Tickets for the document scanner in the last five weeks", [["4146", "Oct 8", "Scanner says Not connected", "Restarted the scanner"]]),
    tell: "The scanner worked until today and says Not connected. The record shows one earlier ticket for the same fault, and the desk sorts a problem only when two or more earlier reports show it. A polite request for help does not make a fault a request.",
    impWhy: "two people use the scanner, and the archive scans are not work done for patients.", urgWhy: "the archive is due by 5 PM, more than 3 hours away, so it is needed today, and the slow scanner in room 2 is a workaround that keeps the work going.",
    dec: ["a1", "h1"] }),
  ticket({ id: "l1-q-dates", full: true, kind: "problem", imp: "medium", urg: "high", form: "chat",
    from: "Wayne Lindholm", detail: "Warehouse office · Tuesday 1:20 PM",
    lines: [["a1", "The label printer jammed again. That is the third time: Oct 6, Oct 13 and today. Each time we pulled the paper out and it worked for a week."], ["a2", "Two of us print the labels, and we need them for the 4 PM truck."]],
    tell: "Wayne lists two earlier jams themself, with dates, each ended by pulling out the paper, and the jam is back today.",
    impWhy: "two people use the printer.", urgWhy: "the labels are needed for the 4 PM truck, under 3 hours away.",
    dec: ["a1", "a2"] }),

  // ----- the pairs: an incident beside a request, an incident beside a problem -----
  ticket({ id: "l1-g-print-inc", kind: "incident", imp: "low", urg: "medium", form: "chat",
    from: "Hui Tran", detail: "Pharmacy · Thursday 9:20 AM",
    lines: [["a1", "The pharmacy printer printed fine yesterday. Today it says Offline and nothing comes out."], ["a2", "I need the weekly stock report by the end of the day. I can print it on the floor 2 printer if I have to, and the rest of my work is fine."]],
    tell: "The pharmacy printer worked yesterday and says Offline today.",
    impWhy: "one person is affected, with other work to do.", urgWhy: "Hui needs the report by the end of today, and the floor 2 printer is a workaround.",
    dec: ["a1", "a2"] }),
  ticket({ id: "l1-g-print-req", kind: "request", imp: "low", urg: "low",
    from: "Hui Tran", subject: "New printer on floor 2", detail: "Pharmacy · Thursday 9:25 AM",
    lines: [["a1", "Please add the new color printer on floor 2 to my laptop."], ["a2", "Whenever you get to it. The old floor 2 printer still works for me."]],
    tell: "Hui is asking for a printer to be added, which the desk does by its steps.",
    impWhy: "one person, whose old floor 2 printer works.", urgWhy: "Hui says whenever you get to it.",
    dec: ["a1", "a2"] }),
  ticket({ id: "l1-g-wifi-once", kind: "incident", imp: "low", urg: "medium", form: "chat",
    from: "Ines Duarte", detail: "Lab · Thursday 10:05 AM",
    lines: [["a1", "My laptop dropped the Wi-Fi at 9 and will not reconnect."], ["a2", "I need it for the results I send by 3 PM. Until then I have paperwork to do."]],
    history: history("Tickets from the lab in the last five weeks", [["—", "—", "No earlier ticket about Wi-Fi from the lab", "—"]]),
    tell: "The Wi-Fi worked until 9 and the record shows no earlier ticket for it, so this is the first time the desk has seen it.",
    impWhy: "one person is affected, and Ines has paperwork to do meanwhile.", urgWhy: "the results are due at 3 PM, more than 3 hours away, so they are needed today.",
    dec: ["a1", "h1"] }),
  ticket({ id: "l1-g-wifi-again", kind: "problem", imp: "medium", urg: "medium", form: "chat",
    from: "Roberta Haddad", detail: "Lab · Thursday 10:20 AM",
    lines: [["a1", "The Wi-Fi in the lab dropped again at 10. Same as the other times."], ["a2", "Four of us need it to send results by 4 PM."]],
    history: history("Tickets from the lab in the last five weeks", [
      ["4108", "Sep 23", "Wi-Fi drops around 10 AM", "Reconnected the laptop"], ["4131", "Oct 2", "Wi-Fi drops around 10 AM", "Reconnected the laptop"],
      ["4166", "Oct 12", "Wi-Fi drops around 10 AM", "Reconnected the laptop"], ["4192", "Oct 17", "Wi-Fi drops around 10 AM", "Reconnected the laptop"]]),
    tell: "The record shows four earlier tickets from the lab for Wi-Fi dropping at about the same time, each ended by reconnecting.",
    impWhy: "four people in the lab are affected.", urgWhy: "the results are due at 4 PM, more than 3 hours away, so they are needed today.",
    dec: ["a1", "h1", "h2", "h3", "h4"] }),

  // ----- the check: six new tickets -----
  ticket({ id: "l1-k-records", kind: "incident", imp: "high", urg: "high", form: "chat",
    from: "Priti Shah", detail: "Eastgate clinic front desk · Monday 8:40 AM",
    lines: [["a1", "Nobody here can sign in to the patient records system. There are eleven of us. It worked when we opened at 8."], ["a2", "Patients are waiting at the desk, and we have no other way to look anyone up."]],
    tell: "The records system worked at 8 and nobody can sign in at 8:40. Eleven people at once is still an incident, with a high impact, until the same fault keeps coming back.",
    impWhy: "eleven people are stopped, and records are a task done for patients.", urgWhy: "work is stopped now, with no workaround.",
    dec: ["a1", "a2"] }),
  ticket({ id: "l1-k-monitor", kind: "request", imp: "low", urg: "low",
    from: "Joanna Okafor", subject: "Second monitor", detail: "Accounting · Monday 9:10 AM",
    lines: [["a1", "Please order a second monitor for my desk. Ergonomics approved it last week."], ["a2", "Sometime this month is fine."]],
    tell: "Joanna is asking the desk to order equipment, which it does by its steps.",
    impWhy: "one person, who has a working screen.", urgWhy: "Joanna says sometime this month.",
    dec: ["a1", "a2"] }),
  ticket({ id: "l1-k-jam", kind: "problem", imp: "medium", urg: "high",
    from: "Anthony Mendes", subject: "Floor 2 printer jammed again", detail: "Floor 2 admin · Monday 8:50 AM",
    lines: [["a1", "The floor 2 printer jammed again. There are three of us who use it."], ["a2", "We must print today's schedule for the 9:30 meeting."]],
    history: history("Tickets for the floor 2 printer in the last three weeks", [
      ["4140", "Oct 5", "Paper jam in tray 2", "Cleared the jam"], ["4155", "Oct 9", "Paper jam in tray 2", "Cleared the jam"],
      ["4171", "Oct 14", "Paper jam in tray 2", "Cleared the jam"], ["4180", "Oct 16", "Paper jam in tray 2", "Cleared the jam"], ["4199", "Oct 19", "Paper jam in tray 2", "Cleared the jam"]]),
    tell: "The record shows five tickets for the same jam in tray 2, each ended by clearing it, and it keeps coming back.",
    impWhy: "three people use the printer.", urgWhy: "the schedule is needed for the 9:30 meeting, within a few hours.",
    dec: ["a1", "a2", "h1", "h2", "h3", "h4", "h5"] }),
  ticket({ id: "l1-k-second", kind: "incident", imp: "low", urg: "low", form: "chat",
    from: "Yusuf Aziz", detail: "Accounting · Monday 9:30 AM",
    lines: [["a1", "My second monitor went black this morning. It was fine on Friday."], ["a2", "My laptop screen is fine, and I am in meetings all day, so no rush."]],
    tell: "The monitor worked on Friday and is black today.",
    impWhy: "one person is affected, and the laptop screen works.", urgWhy: "Yusuf says there is no rush.",
    dec: ["a1", "a2"] }),
  ticket({ id: "l1-k-temps", kind: "request", imp: "medium", urg: "medium",
    from: "Helen Cho", subject: "Logins for four temporary workers", detail: "HR · Monday 9:45 AM",
    lines: [["a1", "Four temporary workers start tomorrow at 8."], ["a2", "Please have their logins and email addresses ready by the end of today. Their names are attached."]],
    tell: "Helen wants logins created, a routine job the desk has fixed steps for.",
    impWhy: "four people cannot start work without them.", urgWhy: "they are needed by the end of today.",
    dec: ["a1", "a2"] }),
  ticket({ id: "l1-k-calendar", kind: "incident", imp: "high", urg: "low",
    from: "Lawrence Silva", subject: "Shared calendar times are off", detail: "Scheduling · Monday 10:00 AM",
    lines: [["a1", "The shared calendar for all 40 staff shows next week's shifts one hour late. It showed the right times last week."], ["a2", "No one has missed a shift yet. The new shifts start next Monday."]],
    tell: "The calendar showed the right times last week and shows them an hour late today.",
    impWhy: "all 40 staff use the calendar for their shifts.", urgWhy: "the new shifts start next Monday, days away.",
    dec: ["a1", "a2"] }),

  // ----- the reserve: three new tickets for the returns -----
  ticket({ id: "l1-r-once", kind: "incident", imp: "medium", urg: "medium", form: "chat",
    from: "Howard Kim", detail: "Billing office · Friday 10:30 AM",
    lines: [["a1", "The printer on floor 3 says Offline again. It did that once before, on Oct 14."], ["a2", "Three of us print the weekly rota there, and we need it by the end of today."]],
    history: history("Tickets for the floor 3 printer in the last five weeks", [["4172", "Oct 14", "Printer shows Offline", "Restarted the printer"]]),
    tell: "The record shows one earlier ticket for the same fault, and the desk sorts a problem only when two or more earlier reports show it.",
    impWhy: "three people are affected.", urgWhy: "the rota is needed by the end of today.",
    dec: ["a1", "h1"] }),
  ticket({ id: "l1-r-nurses", kind: "request", imp: "medium", urg: "high",
    from: "Dr. Amir Kaplan", subject: "Add six nurses to the scheduling group", detail: "Vaccine clinic · Friday 8:20 AM",
    lines: [["a1", "Please add the six vaccine clinic nurses to the scheduling group."], ["a2", "They need to see next week's rota at the 9:00 team meeting, 40 minutes from now."]],
    tell: "Dr. Kaplan wants people added to a group, a routine job the desk has fixed steps for.",
    impWhy: "six people are affected.", urgWhy: "the meeting is in 40 minutes.",
    dec: ["a1", "a2"] }),
  ticket({ id: "l1-r-phone", kind: "incident", imp: "low", urg: "medium", form: "chat",
    from: "Hiro Rahman", detail: "Purchasing · Friday 1:15 PM",
    lines: [["a1", "The phone on my desk has had no dial tone since lunch. It worked this morning."], ["a2", "I am using my cell phone, but I would like it back today."]],
    tell: "The phone worked this morning and has no dial tone now.",
    impWhy: "one person is affected, and Hiro has a cell phone.", urgWhy: "Hiro would like it back today.",
    dec: ["a1", "a2"] }),
  ticket({ id: "l1-r-badge", kind: "problem", imp: "high", urg: "high", form: "chat",
    from: "Security desk", detail: "Main entrance · Friday 7:50 AM",
    lines: [["a1", "The badge readers at the main entrance failed again. About 60 staff are waiting at the door and cannot get in."], ["a2", "We need them reliable by tonight's shift change."]],
    history: history("Tickets for the main entrance readers this week", [
      ["4201", "Mon", "Badge readers not reading", "Restarted the readers"], ["4208", "Wed", "Badge readers not reading", "Restarted the readers"]]),
    tell: "The record shows two earlier tickets this week for the same readers, each ended by a restart, and a third failure today.",
    impWhy: "about 60 staff are affected, more than ten.", urgWhy: "staff cannot get in now, with no workaround, and the shift change is tonight.",
    dec: ["a1", "a2", "h1", "h2"] })
]);
})();
