// IT Support: subject record (lesson standard 3.2). The plan is docs/subjects/it-support/plan.md; the research behind it is
// docs/research/it-support.md (how support technicians work a ticket) and docs/research/it-support-aplus.md (the A+ exam map).
// Twenty-eight parts in eight units: unit 1 teaches the way a help desk technician works any ticket (nine moves, plan "The way of
// thinking"); units 2 to 7 teach each system as a chain of what each part does, with the exam's facts asked from memory; unit 8 is
// the whole ticket and a mock exam. Lists are worded once here and drawn on by every lesson.
FC.subject('it-support', {
  name: "IT Help Desk",
  field: "work",
  rev: 1,
  standard: 2,
  history: [
    { rev: 1, date: "2026-10-23",
      change: "First version, built to the plan from the field's own research: the nine moves a help desk technician makes on a ticket, the kinds of ticket and their priority, and the parts of both A+ exams in eight units. Lessons are added unit by unit." }
  ],
  endResult: "Take a ticket you have never seen (a user's email, chat or call about a computer, phone, printer, network, account or security problem) and work it the way a help desk technician does: sort it and set its priority, get the user's story and what changed, try the known fix with a limit, then narrow it down with the cheapest test that splits what works from what does not, fix one thing at a time, confirm with the user and write it up, or hand it on with everything you found; and know every fact and scenario on both CompTIA A+ exams well enough to pass them.",
  parts: [
    { id: "kind", title: "What kind of ticket, and how soon" },
    { id: "story", title: "Getting the story" },
    { id: "changed", title: "What changed, and protect the data" },
    { id: "known", title: "The known fix, and when to stop" },
    { id: "half", title: "Cut it in half" },
    { id: "one", title: "One change at a time" },
    { id: "finish", title: "Finishing: confirm, hand on, write it up" },
    { id: "upset", title: "When the user is upset" },
    { id: "boot", title: "From the power button to the desktop" },
    { id: "parts", title: "The parts inside" },
    { id: "storage", title: "Storage and RAID" },
    { id: "cables", title: "Cables, connectors and screens" },
    { id: "printers", title: "Printers" },
    { id: "online", title: "How a computer gets online" },
    { id: "ports", title: "Ports and protocols" },
    { id: "gear", title: "Network hardware, connections and tools" },
    { id: "wireless", title: "Wireless and the small office network" },
    { id: "mobile", title: "Phones, tablets and laptops" },
    { id: "mobile-fix", title: "Mobile problems" },
    { id: "tools", title: "Which Windows tool for the job" },
    { id: "commands", title: "Windows at the command line" },
    { id: "install", title: "Installing and upgrading" },
    { id: "windows-fix", title: "Windows problems" },
    { id: "mac-linux", title: "Mac and Linux" },
    { id: "access", title: "Accounts and access" },
    { id: "malware", title: "Malware and attacks" },
    { id: "procedures", title: "Changes, backups, safety and the rules" },
    { id: "whole", title: "The whole ticket, and the mock exam" }
  ],
  units: [
    { id: "ticket", title: "Working a ticket", parts: ["kind", "story", "changed", "known", "half", "one", "finish", "upset"] },
    { id: "computer", title: "The computer itself", parts: ["boot", "parts", "storage", "cables", "printers"] },
    { id: "network", title: "Networks", parts: ["online", "ports", "gear", "wireless"] },
    { id: "mobile", title: "Phones, tablets and laptops", parts: ["mobile", "mobile-fix"] },
    { id: "os", title: "Operating systems", parts: ["tools", "commands", "install", "windows-fix", "mac-linux"] },
    { id: "security", title: "Security", parts: ["access", "malware"] },
    { id: "desk", title: "The desk's procedures", parts: ["procedures"] },
    { id: "ready", title: "Ready for the job and the exam", parts: ["whole"] }
  ],
  lists: {
    // the three kinds of work at a desk (ITIL 4, IT10 and IT11)
    kind: [
      { id: "incident", text: "Broken now: get them working again" },
      { id: "request", text: "Asked for: follow the steps set for it" },
      { id: "problem", text: "Keeps happening: hand on the pattern with the evidence" }
    ],
    // a desk's priority, read from its own table of impact and urgency (IT12: the table is the company's, the sample is ServiceNow's)
    priority: [
      { id: "critical", text: "Critical" },
      { id: "high", text: "High" },
      { id: "moderate", text: "Moderate" },
      { id: "low", text: "Low" }
    ],
    // the nine moves on a ticket, in order (plan, "The way of thinking")
    move: [
      { id: "sort", text: "Sort it: what kind, and how soon" },
      { id: "story", text: "Get their words first, then search what the desk already knows" },
      { id: "changed", text: "Find out what changed, and protect their data before touching anything" },
      { id: "known", text: "Try the known fix, with a time limit" },
      { id: "half", text: "Cut the problem in half with the cheapest test" },
      { id: "one", text: "Change one thing at a time, and drop a cause the test rules out" },
      { id: "confirm", text: "Check it works for them, and tell them what happens next" },
      { id: "handon", text: "Hand it on with everything you found" },
      { id: "write", text: "Write it so the next person can reuse it" }
    ],
    // what went wrong in a wrong answer; lessons add their own below the shared ones
    slip: [
      { id: "wrong-kind", text: "sorted the ticket as the wrong kind of work" },
      { id: "too-high", text: "gave it a higher priority than the desk's table does" },
      { id: "too-low", text: "gave it a lower priority than the desk's table does" },
      { id: "fixed-first", text: "started changing things before getting the story" },
      { id: "no-backup", text: "touched the machine before protecting the user's data" },
      { id: "kept-guessing", text: "kept trying fixes past the time limit" },
      { id: "no-split", text: "ran a test that does not split what works from what does not" },
      { id: "two-changes", text: "changed more than one thing at once" },
      { id: "kept-ruled-out", text: "stayed with a cause the test had ruled out" },
      { id: "closed-early", text: "closed the ticket before the user confirmed it works" },
      { id: "empty-handon", text: "handed it on without what was found and tried" },
      { id: "jargon", text: "used words the user may not know" },
      { id: "argued", text: "argued with the user or brushed off what they said" }
    ]
  },
  facets: {},
  mix: [],
  strands: [
    { id: "kind", title: "What kind of ticket, and how soon" },
    { id: "story", title: "Getting the story" },
    { id: "changed", title: "What changed, and protect the data" },
    { id: "known", title: "The known fix, and when to stop" },
    { id: "half", title: "Cut it in half" },
    { id: "one", title: "One change at a time" },
    { id: "finish", title: "Finishing: confirm, hand on, write it up" },
    { id: "upset", title: "When the user is upset" }
  ],
  readingShare: 0.4
});
