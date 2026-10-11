// Wealth Preservation: subject record (lesson standard 26.1). No lesson is built yet: the subject screen lists each part of the design
// record as not built yet. endResult and parts are the design record's, word for word (V80, V71).
FC.subject('wealth', {
  name: "Wealth Preservation",
  rev: 5,
  standard: 2,
  history: [
    { rev: 1, date: "2026-10-05",
      change: "First version under lesson standard 1: the whole key rewritten in plain words. The first question now asks what could lose the money and has a fifth answer for a case in which nothing could; each branch asks one question about what the case shows, not about the fix already chosen; every branch has a name for a case where nothing needs doing; the unsourced claims about lost family fortunes are gone. The old Units Six and Seven are folded into the drills and the full determination, and the old specimens are rewritten as situations to diagnose, with new ones for every name of the key." },
    { rev: 2, date: "2026-10-05",
      change: "Plain words: the lesson machinery's own names (\"key\", \"route\" and so on) replaced with plain ones." },
    { rev: 3, date: "2026-10-05",
      change: "American English: dollars, US accounts, rules and institutions, US spelling." },
    { rev: 4, date: "2026-10-07",
      change: "Plain, concrete writing: the key, the subject notes and the whole stories rewritten in plain words, with plain short names and shorter definitions." },
    { rev: 5, date: "2026-10-10",
      change: "Rebuilt for the practice engine (lesson standard 26, standard 2): the old key, units and stories are gone. The record now holds the end result and the parts from the design record; lessons are added one at a time." }
  ],
  endResult: "Run the yearly check on your own US accounts: work out what each costs you a year in dollars, your biggest single bet, how far your mix has drifted, whether you take the full employer match, which foreign holdings need a US filing, and who inherits each account; then make the changes it calls for and leave alone what it clears.",
  parts: [
    { id: "1", title: "The list" },
    { id: "2", title: "What it costs a year, in dollars" },
    { id: "3", title: "Your biggest single bet" },
    { id: "4", title: "Mix and drift" },
    { id: "5", title: "The full match" },
    { id: "6", title: "Foreign holdings under US rules" },
    { id: "7", title: "Who inherits, and who can act" },
    { id: "8", title: "The whole check, done and repeated" }
  ],
  lists: {},
  facets: {},
  mix: [],
  strands: [],
  readingShare: 0.15
});
