// Strategy, lesson 13: A bet you can afford (part 13). Question 6 of the way of thinking, its last part: can we afford to lose it? (research
// ST14: expert entrepreneurs start from the means at hand, bet what they can afford to lose and work with partners when the future cannot be
// known; reconciled with ST12's outside view where a record exists, a judgement call of the research note; the wider record of new businesses, ST20; and every stake, record or not, sized within what can be lost). The rule and why; the owner's wrong
// idea ("get a forecast, then go all in") refuted (P29); a pair, a kind of project people already buy beside one these customers have never been offered (P12); one worked idea
// (P10); a first group, two new markets on different surfaces back to back, then a look-alike pair on one gym, the deciding lines marked; a second
// group with nothing marked, where the right size is sometimes the whole project, sometimes not now, and one idea partly known, with lessons 1 to 12 mixed in (P22); the check: six new ideas, 5 of 6, and no bet bigger than can be lost.
FC.lesson("strategy", {
  id: "l13", part: "13", title: "A bet you can afford", rev: 1, status: "draft",
  history: [{ rev: 1, date: "2026-10-23", change: "First version, built to the plan: which way of judging a bet fits, the record of others like it or what can be lost, and the move that follows." }],
  why: [
    "Some ideas are things people already buy, and the record of many like them says how they go. Others have never been offered to these customers, and no one can say who would buy.",
    "Experienced founders judge the two differently, and size every bet to what they can afford to lose. Here you learn both."
  ],
  flow: [
    { title: "Can anyone see who would buy?",
      show: [
        { kind: "prose", text: [
          "First question: can anyone see yet whether people would buy it? A second shop, a branch, a new truck at a factory gate: people already buy these, and many like them have opened. Start from how they did, as in the tables of others like it.",
          "Something these customers have never been offered is different. The wider record (about half of new US businesses are still open after five years) is only a rough start: no table can say whether anyone here wants this. Try it small, with what you already have and partners who share the cost, and learn who buys.",
          "Second question, for every bet: what can you afford to lose? That is the most you could lose and still keep the business and your household going. The stake, what you would lose if it fails, stays within it, however good the record. Even a good record loses some.",
          "So size the bet. If the whole project fits within what you can lose and the record is sound, go ahead in full. If it costs more, put less at risk: rent instead of buy, start with a part, take a partner who pays a share. If no version fits, not now.",
          "Why it matters: a bet sized to what you can lose lets you try again; one bigger than that can end the business before you find out."] },
        { kind: "prose", tone: "wrong", text: [
          "“Get a forecast, and if it looks good, go all in.”",
          "A forecast cannot see buyers who have never been offered the thing, and even a good record loses some. Start from the record where there is one, try it small where there is not, and never stake more than you can lose."] }
      ] },
    { title: "Two ideas for one bakery",
      show: [
        { kind: "pair",
          a: { kind: "prose", text: "A second bakery in the next town. Bakeries open every year, and the state lists how long each lasted. A full fit-out would cost far more than Dana can lose; a market stall would not." },
          b: { kind: "prose", text: "Birthday cakes for dogs. Nobody in her town has been offered them, and nobody knows how many owners would pay." },
          compare: "The first has a record: start from it, and size the stake to what she can lose, the stall before the shop. The second has none here: try it with the ovens on a free day, inside what she can lose." }
      ] },
    { worked: "w13-pool" },
    { set: { items: [["p13-dogcakes", "p13-quizapp"], ["p13-secondgym", "p13-over70"]], order: "listed", support: { shown: true } } },
    { set: { items: ["q13-truck2", "q13-raceroom", "q13-salon2", "q13-eboats", "q13-daycare2", "q13-doggym"], order: "shuffle", mix: { from: ["l1", "l2", "l3", "l4", "l5", "l6", "l7", "l8", "l9", "l10", "l11", "l12"], share: 0.25 } } }
  ],
  check: {
    items: ["k13-branch", "k13-firstlook", "k13-shop2", "k13-kits", "k13-bakery2", "k13-storage"],
    feedback: "at-end", order: "shuffle",
    pass: [{ right: { min: 5 } }, { slip: "bet-too-big", max: 0 }]
  }
});
