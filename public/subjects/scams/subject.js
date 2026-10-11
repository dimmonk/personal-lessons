// Scams & Social Engineering: subject record (lesson standard 26.1). No lesson is built yet: the subject screen lists each part of the design
// record as not built yet. endResult and parts are the design record's, word for word (V80, V71).
FC.subject('scams', {
  name: "Scams & Social Engineering",
  rev: 5,
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
      change: "Rebuilt for the practice engine (lesson standard 26, standard 2): the old key, units and stories are gone. The record now holds the end result and the parts from the design record; lessons are added one at a time." }
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
  lists: {},
  facets: {},
  mix: [],
  strands: [],
  readingShare: 0.15
});
