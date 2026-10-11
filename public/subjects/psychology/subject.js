// Psychology: subject record (lesson standard 26.1). No lesson is built yet: the subject screen lists each part of the design
// record as not built yet. endResult and parts are the design record's, word for word (V80, V71).
FC.subject('psychology', {
  name: "Psychology",
  rev: 7,
  standard: 2,
  history: [
    { rev: 1, date: "2026-10-04",
      change: "First version under lesson standard 1: the reasoning branch of the key rewritten in plain words, five specimens re-keyed." },
    { rev: 2, date: "2026-10-05",
      change: "Blurb reworded so it no longer types key answers by hand." },
    { rev: 3, date: "2026-10-05",
      change: "Whole key rewritten in plain words: the first question has four answers, including a passing moment; the branches for something one person does to another and for a lasting way someone is each ask one question, and each has a name for cases where nothing is wrong. Unit One rebuilt as the gate unit." },
    { rev: 4, date: "2026-10-05",
      change: "Plain words: the lesson machinery's own names (\"key\", \"route\" and so on) replaced with plain ones." },
    { rev: 5, date: "2026-10-05",
      change: "American English: dollars, US words and spelling." },
    { rev: 6, date: "2026-10-07",
      change: "Plain, concrete writing: the key, the subject notes and the whole stories rewritten in plain words, with plain short names and shorter definitions." },
    { rev: 7, date: "2026-10-10",
      change: "Rebuilt for the practice engine (lesson standard 26, standard 2): the old key, units and stories are gone. The record now holds the end result and the parts from the design record; lessons are added one at a time." }
  ],
  endResult: "When someone reaches for a word like \"narcissist\", \"gaslighting\" or \"manipulative\", check it against what the person actually did: say what they did, whether it shows one bad moment or a pattern, and what to do next.",
  parts: [
    { id: "A", title: "What they did" },
    { id: "B", title: "One moment or a pattern" },
    { id: "C", title: "Words about how someone treats you" },
    { id: "D", title: "Words about who someone is" },
    { id: "E", title: "A pattern of control" },
    { id: "F", title: "The whole check, mixed, and your own" }
  ],
  lists: {},
  facets: {},
  mix: [],
  strands: [],
  readingShare: 0.2
});
