// Strategy, lesson 13: A bet you can afford (part 13). Question 6 of the way of thinking, its last part: can we afford to lose it? (research
// ST14: expert entrepreneurs start from the means at hand, bet what they can afford to lose and work with partners when the future cannot be
// known; reconciled with ST12's outside view where a record exists, a judgement call of the research note). The rule and why; the owner's wrong
// idea ("get a forecast, then go all in") refuted (P29); a pair, a kind of project done many times beside one never done (P12); one worked idea
// (P10); a first group, two new markets on different surfaces back to back, then a look-alike pair on one gym, the deciding lines marked; a second
// group with nothing marked and lessons 1 to 12 mixed in (P22); the check: six new ideas, 5 of 6, and no bet bigger than can be lost.
FC.lesson("strategy", {
  id: "l13", part: "13", title: "A bet you can afford", rev: 1, status: "draft",
  history: [{ rev: 1, date: "2026-10-23", change: "First version, built to the plan: which way of judging a bet fits, the record of others like it or what can be lost, and the move that follows." }],
  why: [
    "Some ideas have been tried a thousand times, and the record says how they go. Others have never been tried, and no one can say.",
    "Experienced founders judge the two differently. Here you learn to tell which kind of bet you face, and to keep a bet on the unknown to what you can afford to lose."
  ],
  flow: [
    { title: "Is there a record?",
      show: [
        { kind: "prose", text: [
          "First, one question: has this kind of project been done many times, with a record of how it went? A second shop, a branch, a new truck: yes, and a county or state list often shows how long each lasted.",
          "If there is a record, do what you did with the tables of others like it: start from how the others did, and size the bet from that.",
          "If there is not (nobody sells it yet, so nobody can know who would buy), no forecast can tell you. Start from what you already have: your space, your skills, your customers. Bring in partners who share the risk. Bet only what you could lose without hurting the business, and learn from what happens.",
          "Either way, borrowing for a full launch on a hope is the wrong move. Why it matters: a small bet on the unknown can teach you what the market is; a big one can end the business before you find out."] },
        { kind: "prose", tone: "wrong", text: [
          "“Get a market forecast, and if it looks good, go all in.”",
          "Where nobody has sold the thing before, a forecast is a guess with numbers on it. Try it small, with what you have and a partner, inside what you can lose."] }
      ] },
    { title: "Two ideas for one bakery",
      show: [
        { kind: "pair",
          a: { kind: "prose", text: "A second bakery in the next town. Bakeries open every year, and the state lists how long each lasted." },
          b: { kind: "prose", text: "Birthday cakes for dogs. No bakery in the region makes them, and nobody knows how many owners would pay." },
          compare: "The first has a record: start from it. The second has none: try it with the ovens on a free day, inside what Dana could lose." }
      ] },
    { worked: "w13-pool" },
    { set: { items: [["p13-dogcakes", "p13-quizapp"], ["p13-secondgym", "p13-over70"]], order: "listed", support: { shown: true } } },
    { set: { items: ["q13-truck2", "q13-raceroom", "q13-salon2", "q13-eboats", "q13-daycare2"], order: "shuffle", mix: { from: ["l1", "l2", "l3", "l4", "l5", "l6", "l7", "l8", "l9", "l10", "l11", "l12"], share: 0.25 } } }
  ],
  check: {
    items: ["k13-branch", "k13-firstlook", "k13-shop2", "k13-kits", "k13-bakery2", "k13-storage"],
    feedback: "at-end", order: "shuffle",
    pass: [{ right: { min: 5 } }, { slip: "bet-too-big", max: 0 }]
  }
});
