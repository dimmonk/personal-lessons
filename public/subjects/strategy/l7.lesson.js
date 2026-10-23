// Strategy, lesson 7: Do the pieces fit? (part 7). Question 5 of the way of thinking, its last part: actions that fit the position and help one
// another, so a rival must copy the whole set, not one piece (research ST3, first- and second-order fit). The rule and why; the owner's wrong
// idea ("each part should follow the trade's best practice") refuted (P29, ST1); the field's own example, Vanguard, worked through (ST3; P10);
// one worked owner list; a first group, two lists with an activity that does not fit on different trades back to back, then a look-alike pair on
// one cafe where a costly activity fits (P12), the deciding line marked; a second group with nothing marked and lessons 1 to 6 mixed in (P22);
// the check: five new lists, 4 of 5, and the trade's usual way never taken for a fix.
FC.lesson("strategy", {
  id: "l7", part: "7", title: "Do the pieces fit?", rev: 1, status: "live",
  history: [{ rev: 1, date: "2026-10-23", change: "First version, built to the plan: each activity held against the position, the one that does not fit found, and what would fit chosen; after the reviews, the replacement also judged by whether it helps the other activities, and a low-cost position where the costly piece is the misfit (docs/subjects/strategy/fixes-l1-14.md)." }],
  why: [
    "A position is not one clever idea. It is the way the whole business runs: who you hire, how you sell, what you stock, when you open.",
    "Strategists check that every piece serves the position and helps the others, because a rival can copy one piece but rarely all of them. Here you learn to find the piece that pulls the other way."
  ],
  flow: [
    { title: "Every piece serves the position",
      show: [
        { kind: "prose", text: [
          "First read the position: who the business serves, and what it gives them that others do not.",
          "Then hold each activity against it. Does it serve that position? Does it help the other activities do their part?",
          "An activity that serves another kind of customer does not fit. Nor does the trade’s usual way of working when it pulls against this position, however sensible it looks on its own.",
          "An activity can look costly or odd and still fit: a tailor who sees one client an hour, a hotel with no restaurant so its rooms stay cheap. Judge it by the position, not by what it costs. In a business whose position is the lowest price, the costly piece is the one that does not fit.",
          "To replace a piece that does not fit, pick the activity that serves the position and helps the others. Two choices can both serve the position; the better one also helps the pieces already there, and one that works against them, or stands alone beside them, does not.",
          "Why it matters: a rival can copy one piece in a month. To copy pieces that fit together, it has to copy them all, and give up whatever its own pieces serve."] },
        { kind: "prose", tone: "wrong", text: [
          "“Each part of the business should follow the trade’s best practice: the cheapest supplier, the usual hours, the standard pay.”",
          "The trade’s usual way serves the trade’s usual customers. Check each piece against your position, and choose the one that does, even when the usual way is cheaper."] }
      ] },
    { title: "One fund company",
      show: [
        { kind: "prose", text: [
          "In the 1990s, Vanguard’s position was funds that cost investors very little, for people who hold them for years.",
          "Its funds bought and sold shares rarely, which kept trading costs down. It did not pay for star fund managers. It sold straight to investors, not through brokers. It spent little on advertising. Staff bonuses were tied to saving costs.",
          "Each piece served low cost, and each helped the others: investors who hold for years do not need star managers or constant trading, and selling direct needed less advertising. A rival would have had to change all of them at once to match it."] }
      ] },
    { worked: "w7-movers" },
    { set: { items: [["p7-tutors", "p7-grooming"], ["p7-cafe", "p7-cafe2"]], order: "listed", support: { shown: true } } },
    { set: { items: ["q7-racers", "q7-nurses", "q7-law", "q7-plumber", "q7-builders"], order: "shuffle", mix: { from: ["l1", "l2", "l3", "l4", "l5", "l6"], share: 0.25 } } }
  ],
  check: {
    items: ["k7-collectors", "k7-weddings", "k7-tacos", "k7-oldcars", "k7-laundry"],
    feedback: "at-end", order: "shuffle",
    pass: [{ right: { min: 4 } }, { slip: "usual-way-as-fit", max: 0 }]
  }
});
