// Strategy, lesson 11: What would have to be true (part 11). Question 6 of the way of thinking, its first part: before betting, say what would
// have to be true for each move and test the condition least likely to hold first (research ST11). The rule and why; the owner's wrong idea
// ("write the full business plan first") refuted (P29); a pair, a condition resting on talk beside one with a fact against it (P12); one worked
// move with two conditions in doubt (P10); a first group,
// two moves whose doubt is the customers on different surfaces back to back, then a look-alike pair on one bike shop where the evidence moved,
// the deciding condition marked; a second group with nothing marked, the steps put in order once, what to do after a test fails or holds, and
// lessons 1 to 10 mixed in (P22); a line to write on how to test (unscored); the check: four new decisions (the order, two conditions to weigh,
// two tested moves to choose between), 3 of 4, and no full plan before the test.
FC.lesson("strategy", {
  id: "l11", part: "11", title: "What would have to be true", rev: 1, status: "draft",
  history: [{ rev: 1, date: "2026-10-23", change: "First version, built to the plan: the steps from the decision to the choice, and the condition with the least behind it tested first." }],
  why: [
    "Most owners decide a big move by gathering every reason for it, then spend months on numbers for a move that one phone call could have ruled out.",
    "Strategists turn it around: for each move, what would have to be true for it to work, and which of those do we have least reason to believe? Here you learn to find that condition and test it first."
  ],
  flow: [
    { title: "Test the condition least likely to hold",
      show: [
        { kind: "prose", text: [
          "Say the decision. List the possible moves. For each move, say what would have to be true for it to work: about customers, costs, the people who would do it, rivals. Each one must hold, or the move fails; something that would only help is not one of them.",
          "Then weigh what backs each condition. Something done, paid, signed or counted is evidence for it. People saying they like the idea, a friend’s praise, or the owner being sure is only talk: it costs nothing. A fact that points the other way is evidence against it.",
          "Test first the condition least likely to hold: one with a fact against it before one resting on talk or on nothing, and either of those before one with evidence behind it. Test it cheaply: a phone call, a week’s trial, a count.",
          "If the test fails, drop the move, or change it so it no longer needs that condition, and turn to the next move. If it holds, test the next least likely condition of the same move. Choose the move whose conditions held; the full plan with years of numbers comes after, for that move.",
          "Why it matters: a plan full of numbers feels certain, but it rests on its weakest condition. Testing that one first is the cheapest way to find out."] },
        { kind: "prose", tone: "wrong", text: [
          "“Before deciding anything, I will write the full business plan with five years of numbers.”",
          "Five years of numbers rest on conditions nobody has tested. Find the one least likely to hold, test it, and write the full plan only for the move that survives."] }
      ] },
    { title: "Two conditions for one move",
      show: [
        { kind: "pair",
          a: { kind: "prose", text: "“The planners would send couples to us: they said over coffee that they would be glad to.”" },
          b: { kind: "prose", text: "“The planners would do it with no fee: the bakery they use now pays them 10% of every cake.”" },
          compare: "Both are in doubt. The first rests on talk, which costs nothing. The second has a fact pointing against it, so it is the less likely to hold: test it first." }
      ] },
    { worked: "w11-planners" },
    { set: { items: [["p11-online", "p11-van"], ["p11-wheels", "p11-wheels2"]], order: "listed", support: { shown: true } } },
    { set: { items: ["q11-afternoons", "q11-drivers", "q11-courthouse", "q11-statewide", "q11-failed", "q11-passed"], order: "shuffle", mix: { from: ["l1", "l2", "l3", "l4", "l5", "l6", "l7", "l8", "l9", "l10"], share: 0.25 } } }
  ],
  check: {
    items: ["k11-secondsite", "k11-nights", "k11-secondtruck", "k11-compare"],
    feedback: "at-end", order: "shuffle",
    pass: [{ right: { min: 3 } }, { slip: "plan-first", max: 0 }]
  }
});
