// Basic Math: subject record (lesson standard 26.1). Only the pilot, lesson 1, is built: the subject screen lists every other part of the
// design record as not built yet (V69 holds the rest back until the owner has tried the pilot). endResult and parts are the design
// record's, word for word (V80, V71).
FC.subject('math', {
  name: "Basic Math",
  rev: 6,
  standard: 2,
  history: [
    { rev: 1, date: "2026-10-05",
      change: "First version under lesson standard 1: the whole key rewritten in plain words. The first question keeps five answers, each now saying what the problem gives; each answer leads to one question, or to two where the second does work of its own. One kind of problem was split into two, one was added for an amount that changed once, and one became a taught word instead of a kind. All six units are rebuilt, the old course data is removed, and the old Unit Seven, “Running the whole key”, is replaced by the full determination on thirty-five new specimens, one or more for every name." },
    { rev: 2, date: "2026-10-05",
      change: "Plain words: the lesson machinery's own names (\"key\", \"route\" and so on) replaced with plain ones." },
    { rev: 3, date: "2026-10-05",
      change: "American English: US words and spelling." },
    { rev: 4, date: "2026-10-07",
      change: "Plain, concrete writing: the key, the subject notes and the whole stories rewritten in plain words, with plain short names and shorter definitions." },
    { rev: 5, date: "2026-10-10",
      change: "Rebuilt for the practice engine (lesson standard 26, standard 2): the old key, units and stories are gone. The record now holds the end result and the parts from the design record; lessons are added one at a time." },
    { rev: 6, date: "2026-10-10",
      change: "Step 3, numbers: the record holds what lesson 1 needs (the right and wrong list for a printed total, the six common slips, the three kinds of question, and the two topics that come back in the review), and lesson 1, Ballpark and check, is added as the pilot." }
  ],
  endResult: "Work out the number an everyday situation needs (a scaled amount, a percent, an area and how much to buy, the cost of a loan or the growth of savings), set up from the situation, with a calculator for the arithmetic, and tell whether the answer is sensible.",
  parts: [
    { id: "1", title: "Ballpark and check" },
    { id: "2", title: "Rates and scaling" },
    { id: "3", title: "Percents forward" },
    { id: "4", title: "Percents backward and stacked" },
    { id: "5", title: "Areas, volumes and how much to buy" },
    { id: "6", title: "Money over time" },
    { id: "7", title: "Two steps and mixed" }
  ],
  lists: {
    verdict: [{ id: "right", text: "The total is right" }, { id: "wrong", text: "The total is wrong" }],
    slip: [
      { id: "missed-line", text: "left a line out of the total" },
      { id: "decimal-point", text: "put the decimal point in the wrong place" },
      { id: "forgot-quantity", text: "added the prices without multiplying by how many" },
      { id: "multiplied-not-divided", text: "multiplied the bill by the number of people instead of dividing" },
      { id: "trusted-total", text: "trusted the printed total without checking it" },
      { id: "doubted-total", text: "called a correct total wrong" }
    ]
  },
  facets: {
    kind: { name: "Kind of problem", values: [
      { id: "estimate", text: "rough totals" },
      { id: "right-total", text: "receipts with the right total" },
      { id: "wrong-total", text: "receipts with a wrong total" }
    ] }
  },
  mix: [{ facet: "kind", value: "wrong-total", max: 0.5 }],
  strands: [
    { id: "ballpark", title: "A rough total, then the exact one" },
    { id: "check-total", title: "Checking a printed total" }
  ],
  readingShare: 0.25
});
