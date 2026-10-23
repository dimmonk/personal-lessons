// Strategy, lesson 9: Growth that keeps the position (part 9). The growth trap (research ST4: Maytag; ST6: a narrow focus on growth), answered
// from the core of lesson 5 (ST4's box: most distinctive and most profitable). The rule and why; the owner's wrong idea ("more sales is always
// good") refuted with the field's own example, Maytag (P29); a pair, an offer that grows the core beside one that pulls away from it (P12); one
// worked offer (P10); a first group, two offers that blur on different surfaces back to back, then a look-alike pair on one bike shop, the
// deciding lines marked; a second group with nothing marked and lessons 5 and 6 mixed in, as the plan asks (P22); the check: six new offers,
// 5 of 6, and no growth that blurs taken for growth that deepens.
FC.lesson("strategy", {
  id: "l9", part: "9", title: "Growth that keeps the position", rev: 1, status: "live",
  history: [{ rev: 1, date: "2026-10-23", change: "First version, built to the plan: an offer to grow judged against the core, the same customers with the same activities, or different ones; after the reviews, Maytag's dates as the source gives them, and offers where new hires deepen and the same people blur (docs/subjects/strategy/fixes-l1-14.md)." }],
  why: [
    "Sooner or later a business is offered growth: a big contract, a second shop, a new line. Saying no to more sales feels wrong.",
    "Strategists check first whether the growth serves the core or pulls away from it, because growth that pulls away can cost a business what made it worth growing. Here you learn to tell the two apart."
  ],
  flow: [
    { title: "Does it deepen the core, or blur it?",
      show: [
        { kind: "prose", text: [
          "Start from the core: what the business does that customers come to it for, and that earns it the most. A line that earns well but that customers could get anywhere is not the core.",
          "Then put one question to the offer: does it serve the same kind of customer, with the same activities?",
          "Yes: the same kind of customer in a new place, more of what the core’s customers already want, done by the same people the same way. It deepens the core.",
          "No: it needs different activities (a night shift, a factory line, other hours, other skills) or a different kind of customer. It blurs the position: the business stops being clearly one thing, and the core gets less of everyone’s time.",
          "Count kinds, not heads. A new van or a new hire doing the same work for the same kind of customer still deepens; the same people doing other work for another kind of customer still blurs.",
          "The money in the offer does not decide it. Deepens means the offer is worth pricing and testing, as the next lessons show; blurs means turn it down, or reshape it until it serves the core. Why it matters: once a business is two things, each new offer looks like the last, and the core that earned the money gets crowded out."] },
        { kind: "prose", tone: "wrong", text: [
          "“More sales is always good. We can sort out the rest later.”",
          "Maytag, the appliance maker, grew its sales about five times between 1985 and 1994 by adding product lines and buying other brands. Its profit on each dollar of sales, 8 to 12 cents in the 1970s and 1980s, averaged under 1 cent from 1989 to 1995. Judge growth by what it does to the core, not by the sales it adds."] }
      ] },
    { title: "Two offers to a bakery",
      show: [
        { kind: "pair",
          a: { kind: "prose", text: "A wedding planner wants Dana to make the cakes for all of its weddings. Same couples, same bakers, same cakes made for each couple." },
          b: { kind: "prose", text: "A supermarket wants 2,000 plain sheet cakes a week, made on a mixer line by a night shift." },
          compare: "Both bring more sales. The first brings more of the customers the core serves, done the same way: it deepens. The second needs new activities for a new customer: it blurs." }
      ] },
    { worked: "w9-sheetcakes" },
    { set: { items: [["p9-parks", "p9-homework"], ["p9-wheels", "p9-toys"]], order: "listed", support: { shown: true } } },
    { set: { items: ["q9-secondvan", "q9-airport", "q9-fourthfirm", "q9-mall", "q9-hospital"], order: "shuffle", mix: { from: ["l5", "l6"], share: 0.3 } } }
  ],
  check: {
    items: ["k9-franchise", "k9-online", "k9-newhouses", "k9-newpianos", "k9-buffet", "k9-carclub"],
    feedback: "at-end", order: "shuffle",
    pass: [{ right: { min: 5 } }, { slip: "growth-for-growth", max: 0 }]
  }
});
