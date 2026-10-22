// Stats, lesson 5: Compared with what (part E). Move 3 of the way of thinking: what is the number compared with, and is it fair (like with like, the
// same period, the same way of counting, rates when sizes differ, the same mix inside the totals). A contrast pair on one topic (fair, unfair); one
// worked example (compared with one odd year), the same mix inside the totals shown on two hospitals; a first group that opens with a fair and an unfair
// comparison asked back to back, with the sentences marked; a second group of six with questions of the earlier lessons mixed in; and the check: six new questions, no help, 5 of 6 to pass.
FC.lesson("stats", {
  id: "l5", part: "E", title: "Compared with what", rev: 1, status: "live",
  history: [{ rev: 1, date: "2026-10-22", change: "First version, built to the plan (a fair comparison against a picked start, totals for rates, a different mix, a new way of counting, a rate people are paid to raise)." }],
  why: [
    "“Up 55%”, “twice as much”, “the best in the county”: each one is a comparison, and a comparison is only as good as what it compares with.",
    "A number with nothing to compare it to tells you little. A number compared with the wrong thing can tell you the opposite of the truth. People who check claims first find what the number is compared with, then check that it is fair."
  ],
  flow: [
    { title: "Compared with what",
      show: [
        { kind: "prose", text: [
          "First say what the claim means: “up 55%” says things are worse than before; “twice as much” says one does more than the other. Then find the comparison: tap the sentence that gives the two numbers the headline compares (this year and an earlier one, one town and another). If no sentence gives both, tap Not given.",
          "Then check that the comparison is fair. Same period: this June against last June, not against a quiet month, and not against one odd year. Same way of counting at both ends. Rates, not totals, when the sizes differ: crimes per 1,000 people, not crimes. The same mix inside the totals: compare groups of the same kind.",
          "A number people are paid or praised for raising can rise without anything getting better. Look at what was counted.",
          "Then the verdict. A fair comparison that shows the claim: it holds up. One the text itself shows is unfair, or that shows less: it does not show it. If what you would need is missing, such as the size of each town, you cannot tell."] },
        { kind: "prose", tone: "wrong", text: [
          "“If the numbers are right, the comparison is right.”",
          "The numbers can all be true and still compare the wrong things. A true count compared with an unfair starting point can say the opposite of what happened."] }
      ] },
    { title: "Fair and unfair",
      show: [
        { kind: "pair",
          a: { kind: "article", form: "post", source: "Lantern Bakery · 1d", lines: [{ id: "a1", text: "Lantern Bakery sold 2,100 loaves in June, up from 1,900 in June last year. Same store, same hours." }] },
          b: { kind: "article", form: "post", source: "Lantern Bakery · 1d", lines: [{ id: "b1", text: "Lantern Bakery sold 2,100 loaves in June, up from 700 in January." }] },
          compare: "The same bakery and the same 2,100 loaves. Which compares like with like? The first compares June with June. The second starts from January, the slowest month, so any later month looks like a jump." }
      ] },
    { title: "The same mix inside the totals",
      show: [
        { kind: "prose", text: [
          "Two hospitals treat patients who are mildly ill and patients who are badly ill. Northside sends home 905 of its 1,000 patients, about 90%. Southside sends home 676 of its 1,000, about 68%. Northside looks better.",
          "Now compare like with like. Of the mildly ill, Southside sends home 98% and Northside 95%. Of the badly ill, Southside sends home 60% and Northside 50%. Southside does better with each kind of patient.",
          "Its total is lower only because most of its patients are badly ill: 800 of its 1,000, against 100 of Northside’s. When two groups hold a different mix, compare them kind by kind."] }
      ] },
    { worked: "w-lakeview" },
    { set: { items: [["p-recycle-fair", "p-recycle-unfair"], "p-nocomp", "p-calls"], order: "listed", support: { shown: true } } },
    { set: { items: ["q-bikes", "q-schools", "q-passrate", "q-books", "q-hotel", "q-fires"], order: "shuffle", mix: { from: ["l1", "l2", "l3", "l4"], share: 0.3 } } }
  ],
  check: {
    items: ["k-tickets", "k-farm", "k-mills", "k-bus", "k-train", "k-burger"],
    feedback: "at-end", order: "shuffle",
    pass: [{ right: { min: 5 } }, { slip: "doubted", max: 1 }]
  }
});
