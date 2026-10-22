// Scams & Social Engineering: subject record (lesson standard 3). The plan (docs/subjects/scams/plan.md) has twelve lessons in four units; each part
// below is one of them, in order, and part C is the pilot, lesson 3 "Act, check or leave". Lesson 0, "Before you start", is the baseline. Every part
// has its lesson, so the subject is complete.
FC.subject('scams', {
  name: "Scams & Social Engineering",
  field: "communication",
  rev: 10,
  complete: true,
  standard: 2,
  history: [
    { rev: 1, date: "2026-10-05",
      change: "First version under lesson standard 1: the whole key rewritten in plain words. The first question has five answers, listed in the order that wins when a request asks for two, including one for a message that asks for nothing. Every part of the key after it ends in a name for the real thing as well as the scams that copy it, and every question can be answered at the moment the request is made. The old Unit Seven (putting it all together) is folded into the six rebuilt units and the full determination, which has 27 specimens covering every name in the key, the real ones included." },
    { rev: 2, date: "2026-10-05",
      change: "Plain words: the lesson machinery's own names (\"key\", \"route\" and so on) replaced with plain ones." },
    { rev: 3, date: "2026-10-05",
      change: "American English: dollars, US institutions and payments, US spelling." },
    { rev: 4, date: "2026-10-07",
      change: "Plain, concrete writing: the key, the subject notes and the whole stories rewritten in plain words, with plain short names and shorter definitions." },
    { rev: 5, date: "2026-10-10",
      change: "Rebuilt for the practice engine (lesson standard 26, standard 2): the old key, units and stories are gone. The record now holds the end result and the parts from the design record; lessons are added one at a time." },
    { rev: 6, date: "2026-10-11",
      change: "Step 8, pressure: the record holds what the pilot and the baseline need (the three actions, the slips, whether a message is real or a scam, what it wants and how it arrives, which slip is the failure, the one topic that comes back in the review, and a clock on every message), and lessons 3, Act, check or leave, and 0, Before you start, are added. The old baseline, which marked a real invoice and a code the learner had asked for as something wrong, is gone." },
    { rev: 7, date: "2026-10-20", change: "Placed on a field of the library (communication), one of the shelves Field, Subject, Unit, Lesson." },
    { rev: 8, date: "2026-10-22", change: "Rewritten to the plan built from the research on how fraud investigators, consumer agencies and bank fraud teams decide: twelve parts in four units (the move, the scripts, under pressure, if it already went out), one topic for each lesson, the kinds of request, the first steps after a loss, and the learner’s own setup and plan. Lessons 1 to 6 are built beside the pilot and the baseline." },
    { rev: 9, date: "2026-10-22", change: "One rule for every lesson, after the two reviews of lessons 1 to 6: do what it says when you started it; check first, a way you already had, when you did not and it uses the name of a company you have an account with or a person you know; leave it when neither, and tell someone you know in person when someone known only online wants money. The reading share is a fifth, not a sixth, because each lesson of the scripts now names the wrong idea it corrects beside the rule." },
    { rev: 10, date: "2026-10-22", change: "Lessons 7 to 12 built on the one rule, so every part has its lesson and the subject is complete: bills and payments, your details, what looks prove nothing, calls and chats that push (with real calls you placed, where staying is right, and messages over the busy task), your plan with the real-world test and its four-week retest, and the first hour after a loss. The first steps after a loss are now one per kind of loss (money, a password, your device, your Social Security number), worded as the FTC gives them, with the wrong first moves beside them." }
  ],
  endResult: "When a message, call or offer asks you to act, you stop, see what it wants, and check it through a channel you already had before doing anything, while handling real messages normally; and if something already went out, you make the first calls at once.",
  parts: [
    { id: "A", title: "What does it want?" },
    { id: "B", title: "Your own way in" },
    { id: "C", title: "Act, check or leave" },
    { id: "D", title: "Your device" },
    { id: "E", title: "Your accounts" },
    { id: "F", title: "Money to strangers" },
    { id: "G", title: "Bills and payments" },
    { id: "H", title: "About you" },
    { id: "I", title: "What looks prove nothing" },
    { id: "J", title: "When it pushes" },
    { id: "K", title: "Your plan, and all of it" },
    { id: "L", title: "The first hour" }
  ],
  units: [
    { id: "move", title: "The move", parts: ["A", "B", "C"] },
    { id: "scripts", title: "Know the scripts", parts: ["D", "E", "F", "G", "H"] },
    { id: "pressure", title: "Under pressure", parts: ["I", "J", "K"] },
    { id: "after", title: "If it already went out", parts: ["L"] }
  ],
  timed: true,
  lists: {
    action: [
      { id: "act", text: "Do what it says" },
      { id: "check", text: "Check first, a way I already had" },
      { id: "leave", text: "Leave it" }
    ],
    slip: [
      { id: "acted", text: "did what a scam asked" },
      { id: "their-way", text: "checked through the link, number or reply the message gave" },
      { id: "habit", text: "did what a real message said, the way it said, when you had not started it" }
    ],
    want: [
      { id: "money", text: "Money" },
      { id: "login", text: "A sign-in or a code" },
      { id: "details", text: "Your details" },
      { id: "device", text: "Your phone or computer" },
      { id: "none", text: "Nothing" }
    ],
    first: [
      { id: "mover", text: "Call the bank or company the money went through, on its own number" },
      { id: "password", text: "Make a new password, in the app or on the site I open myself" },
      { id: "scan", text: "Update my security software and run a scan" },
      { id: "idtheft", text: "Go to IdentityTheft.gov and follow its steps" },
      { id: "report", text: "Report it at ReportFraud.ftc.gov" },
      { id: "wait", text: "Wait a day to see what happens" },
      { id: "caller", text: "Message whoever took it and tell them to send it back" },
      { id: "recover", text: "Pay someone who offers to get it back" }
    ]
  },
  facets: {
    genuine: { name: "Real or a scam", compare: true, values: [{ id: "genuine", text: "real messages" }, { id: "scam", text: "scams" }] },
    channel: { name: "How it arrives", values: [
      { id: "sms", text: "a text" }, { id: "email", text: "an email" }, { id: "popup", text: "a pop-up" }, { id: "chat", text: "a chat" },
      { id: "call", text: "a call" }, { id: "banner", text: "a banner" }] },
    request: { name: "What it wants", values: [
      { id: "money", text: "money" }, { id: "login", text: "a sign-in or a code" }, { id: "details", text: "your details" },
      { id: "device", text: "your phone or computer" }, { id: "none", text: "nothing risky" }] }
  },
  mix: [{ facet: "genuine", value: "genuine", min: 0.4, max: 0.6 }],
  danger: { slip: "acted", facet: "genuine", risky: "scam", real: "genuine" },
  strands: [
    { id: "want", title: "What does it want?" },
    { id: "own-way", title: "Your own way in" },
    { id: "act-check-leave", title: "Act, check or leave" },
    { id: "device", title: "Your device" },
    { id: "accounts", title: "Your accounts" },
    { id: "strangers", title: "Money to strangers" },
    { id: "bills", title: "Bills and payments" },
    { id: "about-you", title: "About you" },
    { id: "looks", title: "What looks prove nothing" },
    { id: "pushes", title: "When it pushes" },
    { id: "all", title: "All of it together" },
    { id: "first-hour", title: "The first hour" }
  ],
  own: {
    setup: { into: "setup", fields: [
      { id: "bank", label: "Save my bank’s number from the back of my card", type: "date" },
      { id: "apps", label: "Check that my bank’s and my main shops’ apps are on my phone", type: "date" },
      { id: "word", label: "Agree a secret word with my family", type: "date" }] },
    plan: { into: "plan", fields: [
      { id: "cue", label: "When this happens", type: "text", hint: "someone I did not call asks for a code, money or my sign-in" },
      { id: "then", label: "Then I will", type: "text", hint: "end it and call back on the number I have" }] }
  },
  review: { gaps: [1, 7, 24], every: 60 },
  readingShare: 0.2
});
