// Strategy, lesson 11: What would have to be true (part 11). Question 6 of the way of thinking, its first part: before betting, say what would
// have to be true for each move and test the condition most in doubt first (research ST11). The rule and why; the owner's wrong idea ("write the
// full business plan first") refuted (P29); a pair, a condition with evidence beside one with none (P12); one worked move (P10); a first group,
// two moves whose doubt is the customers on different surfaces back to back, then a look-alike pair on one bike shop where the evidence moved,
// the deciding condition marked; a second group with nothing marked, the steps put in order once, and lessons 1 to 10 mixed in (P22); a line to
// write on how to test (unscored); the check: four new decisions, 3 of 4.
FC.lesson("strategy", {
  id: "l11", part: "11", title: "What would have to be true", rev: 1, status: "draft",
  history: [{ rev: 1, date: "2026-10-23", change: "First version, built to the plan: the steps from the decision to the choice, and the condition with the least behind it tested first." }],
  why: [
    "Most owners decide a big move by gathering every reason for it, then spend months on numbers for a move that one phone call could have ruled out.",
    "Strategists turn it around: for each move, what would have to be true for it to work, and which of those do we have least reason to believe? Here you learn to find that condition and test it first."
  ],
  flow: [
    { title: "Test the doubtful condition first",
      show: [
        { kind: "prose", text: [
          "Say the decision. List the possible moves. For each move, say what would have to be true for it to work: about customers, about costs, about the people who would do it, about rivals.",
          "Then look at what backs each condition. Something someone has said, signed, paid, measured or done already is evidence. A guess, a hope, or nobody having asked is not.",
          "Test first the condition with the least behind it. Test it cheaply: a phone call, a week’s trial, a count. If it fails, the move fails, and nothing more needs working out.",
          "Choose the move whose conditions held up. A full plan with years of numbers comes after the tests, for the move that survived.",
          "Why it matters: a plan full of numbers feels certain, but it rests on its weakest condition. Testing that one first is the cheapest way to find out."] },
        { kind: "prose", tone: "wrong", text: [
          "“Before deciding anything, I will write the full business plan with five years of numbers.”",
          "Five years of numbers rest on conditions nobody has tested. Find the condition you have least reason to believe, test it, and write the full plan only for the move that survives."] }
      ] },
    { title: "Two conditions for one move",
      show: [
        { kind: "pair",
          a: { kind: "prose", text: "“The bakers can make three more cakes a week: they made that many last June with the same staff.”" },
          b: { kind: "prose", text: "“The planners would send couples to a bakery that pays them no fee: none has said, and the bakery they use now pays 10%.”" },
          compare: "Both have to be true. The first is backed by what the bakers did. Nothing backs the second, so test it first." }
      ] },
    { worked: "w11-planners" },
    { set: { items: [["p11-online", "p11-van"], ["p11-wheels", "p11-wheels2"]], order: "listed", support: { shown: true } } },
    { set: { items: ["q11-afternoons", "q11-drivers", "q11-courthouse", "q11-statewide"], order: "shuffle", mix: { from: ["l1", "l2", "l3", "l4", "l5", "l6", "l7", "l8", "l9", "l10"], share: 0.25 } } }
  ],
  check: {
    items: ["k11-secondsite", "k11-classes", "k11-nights", "k11-secondtruck"],
    feedback: "at-end", order: "shuffle",
    pass: [{ right: { min: 3 } }]
  }
});
