// Statistical Claims: subject record (lesson standard 26.1). No lesson is built yet: the subject screen lists each part of the design
// record as not built yet. endResult and parts are the design record's, word for word (V80, V71).
FC.subject('stats', {
  name: "Statistical Claims",
  rev: 5,
  standard: 2,
  history: [
    { rev: 1, date: "2026-10-05",
      change: "First version under lesson standard 1: the whole key rewritten in plain words. The first question gains a fifth answer for a claim where nothing goes wrong, which has its own branch for the four sound kinds of claim; every branch asks one question; a claim of cause with nothing to compare it with moves to the cause branch. All six units are rebuilt to it, and 23 specimens run the whole key, clean first, with a sound claim for each of the four kinds that hold." },
    { rev: 2, date: "2026-10-05",
      change: "Plain words: the lesson machinery's own names (\"key\", \"route\" and so on) replaced with plain ones." },
    { rev: 3, date: "2026-10-05",
      change: "American English: US words and spelling." },
    { rev: 4, date: "2026-10-07",
      change: "Plain, concrete writing: the key, the subject notes and the whole stories rewritten in plain words, with plain short names and shorter definitions." },
    { rev: 5, date: "2026-10-10",
      change: "Rebuilt for the practice engine (lesson standard 26, standard 2): the old key, units and stories are gone. The record now holds the end result and the parts from the design record; lessons are added one at a time." }
  ],
  endResult: "When you meet a number on your phone (a headline and its article, a chart, an ad, a post or a report) and are about to believe, share or act on it, you can tell whether it shows what it is used to claim, point to what is wrong or missing when it does not, and say how big it is in plain terms (so many in 1,000).",
  parts: [
    { id: "A", title: "Find the claim and its number" },
    { id: "B", title: "Size it plainly" },
    { id: "C", title: "Compared with what" },
    { id: "D", title: "Who was counted, and how" },
    { id: "E", title: "Cause or just a link" },
    { id: "F", title: "Read the chart, not its shape" },
    { id: "G", title: "The whole item, unprompted" }
  ],
  lists: {},
  facets: {},
  mix: [],
  strands: [],
  readingShare: 0.33
});
