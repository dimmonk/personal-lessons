// Statistical Claims: subject record (lesson standard 3). Only the pilot, lesson 1, is built: the subject screen lists every other part as not built
// yet.
FC.subject('stats', {
  name: "Statistical Claims",
  field: "numbers",
  rev: 7,
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
      change: "Rebuilt for the practice engine (lesson standard 26, standard 2): the old key, units and stories are gone. The record now holds the end result and the parts from the design record; lessons are added one at a time." },
    { rev: 6, date: "2026-10-11",
      change: "Step 5, articles and charts: the record holds what lesson 1 needs (the three answers, the five kinds of claim, the nine common slips, how a claim is sorted, and the one topic that comes back in the review), and lesson 1, Find the claim and its number, is added as the pilot." },
    { rev: 7, date: "2026-10-20", change: "Placed on a field of the library (numbers), one of the shelves Field, Subject, Unit, Lesson." }
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
  lists: {
    verdict: [
      { id: "holds", text: "Holds up" },
      { id: "not-shown", text: "Does not show it" },
      { id: "unclear", text: "Cannot tell from this" }
    ],
    claim: [
      { id: "cause", text: "One thing makes another happen" },
      { id: "compare", text: "One thing is more, less or better than another, or it changed" },
      { id: "size", text: "How big or how common something is" },
      { id: "forecast", text: "What will happen" },
      { id: "most", text: "What most people do or think" }
    ],
    slip: [
      { id: "doubted", text: "turned down a claim that holds up" },
      { id: "believed", text: "believed a claim the text does not show" },
      { id: "hedged", text: "said it cannot be told when the text shows what is wrong" },
      { id: "overreached", text: "called a claim wrong when the text does not say enough to tell" },
      { id: "took-cause", text: "took it for a claim that one thing makes another happen" },
      { id: "took-compare", text: "took it for a claim that one thing is more or less than another" },
      { id: "took-size", text: "took it for a claim about how big or how common something is" },
      { id: "took-forecast", text: "took it for a claim about what will happen" },
      { id: "took-most", text: "took it for a claim about what most people do or think" }
    ]
  },
  facets: {
    fit: { name: "What the text shows", values: [
      { id: "holds", text: "claims that hold up" },
      { id: "outruns", text: "claims the text does not show" },
      { id: "unclear", text: "claims that cannot be told" }
    ] }
  },
  mix: [{ facet: "fit", value: "holds", min: 1 }, { facet: "fit", value: "unclear", min: 1 }],
  strands: [{ id: "claim-number", title: "Find the claim and its number" }],
  readingShare: 0.33
});
