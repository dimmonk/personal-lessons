// Scams & Social Engineering: subject record (lesson standard 26.1). Two lessons are built: the pilot, lesson 3 "Act, check or leave" (part C, the core
// decision), and lesson 0 "Before you start", the baseline built beside it (docs/subjects/scams/design.md, gate 5). The subject screen lists every other
// part of the design record as not built yet (V69 holds the rest back until the owner has tried the pilot). endResult and parts are the design record's,
// word for word (V80, V71).
FC.subject('scams', {
  name: "Scams & Social Engineering",
  rev: 6,
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
      change: "Step 8, pressure: the record holds what the pilot and the baseline need (the three actions, the slips, whether a message is real or a scam, what it wants and how it arrives, which slip is the failure, the one topic that comes back in the review, and a clock on every message), and lessons 3, Act, check or leave, and 0, Before you start, are added. The old baseline, which marked a real invoice and a code the learner had asked for as something wrong, is gone." }
  ],
  endResult: "When a message, call or offer asks you to act, you stop, see what it wants, and check it through a channel you already had before doing anything, while handling real messages normally; and if something already went out, you make the first calls at once.",
  parts: [
    { id: "A", title: "See the request" },
    { id: "B", title: "Your own way in" },
    { id: "C", title: "Act, check or leave, on mixed messages" },
    { id: "D", title: "Hold off when it pushes" },
    { id: "E", title: "Keep it" },
    { id: "F", title: "If it already went out" }
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
  strands: [{ id: "act-check-leave", title: "Act, check or leave" }],
  review: { gaps: [1, 7, 24], every: 60 },
  readingShare: 0.15
});
