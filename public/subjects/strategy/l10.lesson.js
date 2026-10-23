// Strategy, lesson 10: Where to play and how to win (part 10). Question 5 of the way of thinking: the choice (research ST10: where to play and how
// to win are one choice, and the six traps are failures to choose; ST5: a goal is not a strategy). The rule and why, with the six traps named; the
// owner's wrong idea ("keep every door open") refuted (P29); a pair, two plans for one shop (P12); one worked pair of plans (P10); a first group,
// two dreams on different surfaces back to back, then a look-alike pair on one hardware store failing two different ways, the deciding lines
// marked, then two plans that both choose where a way to win does not fit its customers, and one plan judged alone; a second group with nothing
// marked and lessons 1 to 9 mixed in (P22); the check: six new businesses (three pairs, one misfit, two plans alone), 5 of 6, and no plan for
// every customer taken for a choice.
FC.lesson("strategy", {
  id: "l10", part: "10", title: "Where to play and how to win", rev: 1, status: "live",
  history: [{ rev: 1, date: "2026-10-23", change: "First version, built to the plan: a plan that chooses where to play and how to win told apart from the six ways of not choosing." }],
  why: [
    "Owners’ plans often fail without a single wrong move in them. They fail because they never choose: every customer, every idea, every fight at once.",
    "Strategists read a plan for two choices made together: where to play, and how to win there. Here you learn to find them, and to name the trap when they are missing."
  ],
  flow: [
    { title: "One choice, in two parts",
      show: [
        { kind: "prose", text: [
          "Where to play: which customers, and where. How to win: why those customers will pick you over the rivals they already have.",
          "The two are one choice, and they must fit: the way to win has to be what those customers value. Fast breakfasts win truck drivers; candlelit dinners do not, however well they are done.",
          "A plan that never chooses falls into one of six traps; a seventh failure, the misfit, chooses both parts but they do not fit. Do it all: many priorities, none dropped. Head-on: going first at the strongest rival, on the ground where it is strongest. Many fronts: taking on several rivals, in several places, at once.",
          "Something for everyone: every kind of customer at once. A dream: a mission that never says which customers or why they would choose you. Copycat: what every business in the trade already does, done again or done better.",
          "Words do not decide it: a plan can say “we play for” and “we win with” and still choose nothing, and a plan in plain words can choose well. Look for who, why they would pick you, and whether the two fit.",
          "Why it matters: money and hours spent on everything at once are spent on nothing in particular, and the customers you could have won go to a rival who chose them."] },
        { kind: "prose", tone: "wrong", text: [
          "“I don’t want to choose yet. Keep every door open.”",
          "Keeping every door open is the choice not to win anywhere. Pick the customers you can win and how, and say what you will not chase."] }
      ] },
    { title: "Two plans for one shop",
      show: [
        { kind: "pair",
          a: { kind: "prose", text: "“Builders in the county. Advice, odd parts the big store does not carry, and doors open at 6 a.m. will bring them to us.”" },
          b: { kind: "prose", text: "“We aim to be the best hardware store in the state, with great service and great prices for everyone.”" },
          compare: "Only the first says who and why, and builders value exactly what it offers. The second is a dream: no customer named, no reason to switch." }
      ] },
    { worked: "w10-salon" },
    { set: { items: [["p10-cafe", "p10-movers"], ["p10-headon", "p10-fronts"], "p10-misfit", "p10-alone"], order: "listed", support: { shown: true } } },
    { set: { items: ["q10-gym", "q10-print", "q10-tacos", "q10-tutors", "q10-daycare", "q10-misfit", "q10-dream", "q10-tailor"], order: "shuffle", mix: { from: ["l1", "l2", "l3", "l4", "l5", "l6", "l7", "l8", "l9"], share: 0.25 } } }
  ],
  check: {
    items: ["k10-detail", "k10-music", "k10-ledger", "k10-pool", "k10-shelves", "k10-sitter"],
    feedback: "at-end", order: "shuffle",
    pass: [{ right: { min: 5 } }, { slip: "no-choice", max: 0 }]
  }
});
