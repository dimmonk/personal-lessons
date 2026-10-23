// Strategy, lesson 12: How did others like it do? (part 12). Question 6 of the way of thinking, its second part: the outside view and the
// rival's answer (research ST12), and an example tested on its reason, not its look (ST13). The rule and why; the owner's wrong idea ("our plan
// is solid, so it will work") refuted (P29); one worked table, an estimate before the exact share (P10); a first group, a look-alike pair on one
// diner (the rival answers, or lets it go) and one on one cafe (the reason holds, or only the look does), then a made table, the deciding lines
// marked (P12); a second group of made tables and new stories with nothing marked, which record to start from and how far a real difference moves
// it, and lessons 1 to 11 mixed in (P22); the check: two new tables and five new stories, 6 of 7, and no plan's story trusted over the record.
// The made tables sit near the national record (research ST20).
FC.lesson("strategy", {
  id: "l12", part: "12", title: "How did others like it do?", rev: 1, status: "live",
  history: [{ rev: 1, date: "2026-10-23", change: "First version, built to the plan: the share of ventures like it that worked as the start of a forecast, the rival’s likely answer, and an example tested on its reason." }],
  why: [
    "A plan written by its owner nearly always looks likely to work. That is the trouble: it is built from the owner’s hopes, and it forgets that rivals move too.",
    "Strategists check a plan against how others like it did, and against how the rival will answer. Here you learn to start from the record, read a rival, and test an example on its reason."
  ],
  flow: [
    { title: "Start from how others did",
      show: [
        { kind: "prose", text: [
          "First, find the record: many ventures like this one, alike in what makes them work or fail (the same kind of business, for the same kind of customer), and see what share of them worked. Not the two you happen to know, and not many of another kind. Across the US, about six in ten new shops and offices are still open three years after opening, and about half after five.",
          "Start your forecast from that share. Move from it only for a real difference: a fact the others did not have, such as customers who have already paid. Being sure, a convincing plan or friends saying they would come is not one: most owners in the record had those too. Years in the same trade count, but for little: owners who have them last a little more often. A real difference moves the forecast part of the way, never to the plan’s own number.",
          "Second, work out how the rival will answer. It answers when your move takes customers it serves and it can follow without changing how it runs. It lets the move go when those customers are not its own, or following would cost it its own way of running. What it did in the past is a clue, not the test.",
          "Third, when someone says “it worked for them”, find the reason it worked there, and check that the reason is true here. Looking alike is not enough.",
          "Why it matters: owners who judge a plan by its own story expect too much, and a rival’s answer can take the gain away in weeks."] },
        { kind: "prose", tone: "wrong", text: [
          "“Our plan is solid and we know this business, so it will work.”",
          "Most owners in the record had a plan and were sure of it, and the record shows how many made it. Knowing the business moves that a little, not to a sure thing; and plan for the rival’s answer."] }
      ] },
    { worked: "w12-gyms" },
    { set: { items: [["p12-cheaper", "p12-early"], ["p12-pass", "p12-pass2"], { gen: "g-base", n: 1 }], order: "listed", support: { shown: true } } },
    { set: { items: [{ gen: "g-base", n: 2 }, "q12-touchup", "q12-fitting", "q12-texts", "q12-kitchens", "q12-record", "q12-deposits"], order: "shuffle", mix: { from: ["l1", "l2", "l3", "l4", "l5", "l6", "l7", "l8", "l9", "l10", "l11"], share: 0.25 } } }
  ],
  check: {
    items: [{ gen: "g-base", n: 2 }, "k12-paint", "k12-parents", "k12-cakes", "k12-sure", "k12-record"],
    feedback: "at-end", order: "shuffle",
    pass: [{ right: { min: 6 } }, { slip: "inside-view", max: 0 }]
  }
});
