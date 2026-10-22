// Stats, lesson 3: A risk, before and after (part C). Move 2 of the way of thinking, for a change in risk: from "cuts your risk by half" to the risk
// before and after, in so many in 1,000 over the time stated, and then whether each size in the headline fits it. One worked example (a pill that "spares half
// of patients" and spares 2 in 1,000); the wrong idea named; a first group of four with the numbers marked; a second group of six with questions of
// the earlier lessons mixed in; a third group with fresh numbers; and the check: five new questions, no help, 4 of 5 to pass.
FC.lesson("stats", {
  id: "l3", part: "C", title: "A risk, before and after", rev: 1, status: "live",
  history: [{ rev: 1, date: "2026-10-22", change: "First version, built to the plan (a change in risk turned into before and after in 1,000 over the stated time)." }],
  why: [
    "“Cuts your risk by half” is a change, and a change is only as big as the risk it started from. Half of a big risk is a lot; half of a tiny risk is a few people in a thousand.",
    "People who read health numbers for a living always want the risk before and after, in so many in 1,000, over a stated time. You learn to work it out from a headline and a line of the story."
  ],
  flow: [
    { title: "Before and after",
      show: [
        { kind: "prose", text: [
          "When a headline gives a change in risk, work out the risk before and after, in so many in 1,000 over the time stated.",
          "First, find how common it was without the pill (or before the change): for example, 4 in 1,000 over five years. If the text gives counts out of another number, turn them into 1,000 as you did for a count: 150 of 500 is 150 ÷ 500 × 1,000 = 300 in 1,000. Second, if the text gives only the change as a percent, take it off: a 50% cut takes half off 4, which leaves 2; a 25% cut takes a quarter off. Third, say it as before and after: from 4 in 1,000 to 2 in 1,000 over five years, 2 fewer in every 1,000. Keep the time: “over five years” is part of the size.",
          "Then check each size in the headline against that. A share of the risk (“halves”, “by a third”, “by 25%”) holds up when the before and after drop by that share. A number of people (“spares 1 in 1,000”, “keeps half of patients from …”) holds up when that many fewer people have it. A strong word with no number (“slashes”, “dramatically”) decides nothing: the numbers do. And a claim that the pill makes the difference stands only when a coin toss (or a lottery) split the groups; otherwise the text shows only that the two went together.",
          "If the text does not give the risk before and after (or the start and the change), you cannot tell, unless it says in words that the claim cannot be right, such as that hardly anyone had it to begin with."] },
        { kind: "prose", tone: "wrong", text: [
          "“50% less risk means half of the people are spared.”",
          "It means the risk is half as big. If 4 in 1,000 people would have a stroke and the pill cuts that to 2, the pill spares 2 in every 1,000 people. A big percent of a small risk is still small."] }
      ] },
    { worked: "w-stroke" },
    { set: { items: ["p-nasal", "p-heart", "p-falls", "p-serum"], order: "listed", support: { shown: true } } },
    { set: { items: ["q-hip", "q-statin", "q-fish", "q-helmet", "q-mats", "q-kelp"], order: "shuffle", mix: { from: ["l1", "l2"], share: 0.3 } } },
    { set: { items: [{ gen: "g-risk-fair", n: 2 }, { gen: "g-risk-over", n: 2 }, "q-eyes"], order: "shuffle", mix: { from: ["l2"], share: 0.3 } } }
  ],
  check: {
    items: ["k-warmup", "k-seat", "k-tutor", "k-training", "k-paste"],
    feedback: "at-end", order: "shuffle",
    pass: [{ right: { min: 4 } }, { slip: "doubted", max: 1 }]
  }
});
