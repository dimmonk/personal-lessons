// Strategy: subject record (lesson standard 3.2), written to docs/subjects/strategy/plan.md from docs/research/strategy.md. The way of thinking is
// the six questions the field's schools agree on (research F): is it a strategy problem; what is the challenge; where the money comes from and who
// takes the rest; what we do differently and what stops a copy; the choice and what we will not do; and, before betting, what would have to be true.
// Fourteen parts in five units; lessons 1 to 5 (units A and B) are built, 6 to 14 are planned and show as "Not built yet" until their lessons land.
// The lists are worded once here; a lesson offers the part of a list it has taught (`only`).
FC.subject('strategy', {
  name: "Strategy",
  field: "business",
  rev: 1,
  standard: 2,
  history: [
    { rev: 1, date: "2026-10-23",
      change: "First version, to the plan of 2026-10-22: fourteen parts in five units, the lists, the way questions are sorted and the topics for all fourteen; lessons 1 to 5 built (what a strategy is, better or different, value created and who keeps it, who squeezes the profit, find the core), with the value stick drawn as a figure and the learner's own business lines worked out in lesson 5. Notes for whoever builds lessons 6 to 14: (1) every question carries the facet scale, owner or known, and every group of questions and every check holds at least 0.6 owner questions (the mix); (2) a tap takes the lines of a prose, message or article block, never a document's rows, so a question about a row of a table is a choose that names the rows (lesson 5 does this; lesson 12 should too); (3) the lists benefit, trap, judge and the verdicts of lessons 6, 9 and 13 are worded here from the plan, but the barrier list of lesson 8 is left for its builder to word from research ST9 and ST3; (4) the subject has no danger: the engine's danger is one slip read only by a baseline, and the plan's three costly errors (goal-as-strategy, growth-for-growth, serve-everyone) belong in lesson 14's check as pass rules, each with max 0; (5) the strategy lessons' private form business and its action form are used by lesson 5 and may be read again by lesson 9 or 14 (the work core)." }
  ],
  endResult: "After this you can look at a business decision (expand, add a product, chase a big customer, answer a rival, invest) and tell whether it is a strategy, say where the business makes its money and why, and pick the move that keeps it different in a way rivals cannot copy, when you face that decision in your own business.",
  parts: [
    { id: "1", title: "Goal, wish, or strategy?" },
    { id: "2", title: "Better, or different?" },
    { id: "3", title: "Value created, and who keeps it" },
    { id: "4", title: "Who squeezes the profit" },
    { id: "5", title: "Find the core" },
    { id: "6", title: "What you say no to" },
    { id: "7", title: "Do the pieces fit?" },
    { id: "8", title: "Will it last?" },
    { id: "9", title: "Growth that keeps the position" },
    { id: "10", title: "Where to play and how to win" },
    { id: "11", title: "What would have to be true" },
    { id: "12", title: "How did others like it do?" },
    { id: "13", title: "A bet you can afford" },
    { id: "14", title: "Run the six questions" }
  ],
  units: [
    { id: "what", title: "What a strategy is", parts: ["1", "2"] },
    { id: "money", title: "Where the money is", parts: ["3", "4", "5"] },
    { id: "lasts", title: "An advantage that lasts", parts: ["6", "7", "8", "9"] },
    { id: "bet", title: "Choosing and betting", parts: ["10", "11", "12", "13"] },
    { id: "whole", title: "The whole review", parts: ["14"] }
  ],
  lists: {
    // each lesson's answers (a lesson offers its own with `only`)
    verdict: [
      { id: "goal", text: "A goal or a wish" },
      { id: "todo", text: "A to-do list" },
      { id: "strategy", text: "A strategy" },
      { id: "run-better", text: "Run it better" },
      { id: "position", text: "Choose a different position" },
      { id: "grows", text: "It grows the value" },
      { id: "moves", text: "It only moves value from one side to another" },
      { id: "keep", text: "Keep it and grow it" },
      { id: "fix", text: "Keep it, but fix its price or cost" },
      { id: "let-go", text: "Let it go" },
      { id: "tradeoff", text: "A real trade-off" },
      { id: "straddle", text: "A straddle: copying while keeping the old way" },
      { id: "deepens", text: "It deepens the core" },
      { id: "blurs", text: "It blurs the position" }
    ],
    // lesson 4: who takes the money (research ST6)
    force: [
      { id: "buyers", text: "Buyers: customers who can push the price down" },
      { id: "suppliers", text: "Suppliers: the ones you buy from can push their price up" },
      { id: "entrants", text: "Newcomers: it is easy for new businesses to start up" },
      { id: "substitutes", text: "Substitutes: another way to meet the same need" },
      { id: "rivals", text: "Rivals: the businesses already there fight on price" }
    ],
    // lesson 8: what the difference gives you (research ST9, the benefit)
    benefit: [
      { id: "price", text: "A higher price than rivals get" },
      { id: "cost", text: "A lower cost than rivals have" },
      { id: "none", text: "Neither: it gives nothing a rival lacks" }
    ],
    // lesson 8: what stops a rival getting the same (research ST9: rare and hard to copy, no ready substitute; ST3: fit)
    barrier: [
      { id: "only-us", text: "Only we have it, and a rival cannot get or make one" },
      { id: "fit", text: "It rests on many activities that fit together: a rival would have to copy them all" },
      { id: "nothing", text: "Nothing: a rival can buy it, copy it, or get the same result another way" }
    ],
    // lesson 10: the six ways a plan fails to choose (research ST10)
    trap: [
      { id: "doall", text: "Do it all: everything is a priority" },
      { id: "headon", text: "Head-on: taking on the strongest rival first, at its own game" },
      { id: "fronts", text: "Many fronts: fighting several rivals at once" },
      { id: "everyone", text: "Something for everyone: every kind of customer at once" },
      { id: "dream", text: "A dream: a mission that never says where or how" },
      { id: "copycat", text: "Copycat: the plan every business in the trade has" }
    ],
    // lesson 13: which way of judging the bet fits (research ST12, ST14)
    judge: [
      { id: "outside", text: "Look at how similar projects turned out" },
      { id: "afford", text: "Bet only what you can afford to lose, and learn as you go" }
    ],
    // the kinds of line in the learner's own business (lesson 5)
    lineKind: [
      { id: "product", text: "A product or service" },
      { id: "customer", text: "A customer or group of customers" },
      { id: "channel", text: "A way you sell (a shop, a website, a market)" }
    ],
    slip: [
      { id: "goal-as-strategy", text: "took a goal or a wish for a strategy" },
      { id: "list-not-choice", text: "took a list of things to do for a strategy" },
      { id: "missed-strategy", text: "missed a real strategy: a challenge, one approach, and actions that fit it" },
      { id: "better-not-different", text: "took running the business better for a strategy" },
      { id: "running-as-strategy", text: "took a gap in running the business for a strategy problem" },
      { id: "price-as-value", text: "took the price for the value created" },
      { id: "share-swapped", text: "mixed up whose share is whose" },
      { id: "moved-as-grown", text: "took value moved from one side to another for value created" },
      { id: "grown-as-moved", text: "missed that the move changes what customers would pay or what suppliers would take" },
      { id: "fast-growth-attractive", text: "took a fast-growing market for a good one" },
      { id: "sales-not-profit", text: "judged a line by its sales, not by what it earns" },
      { id: "loser-counted", text: "took a losing line off the total that shares are counted from" },
      { id: "growth-for-growth", text: "grew for the sake of growing" },
      { id: "serve-everyone", text: "tried to serve everyone, or to copy a rival while keeping your own way" },
      { id: "copyable-as-lasting", text: "took something a rival can buy or copy for an advantage that lasts" },
      { id: "missed-tradeoff", text: "took a real choice of what not to do for a straddle" },
      { id: "counted-wrong-group", text: "counted the wrong group in the table" },
      { id: "inside-view", text: "trusted the plan's own story over how similar bets turned out" },
      { id: "rival-ignored", text: "forgot that rivals will answer" },
      { id: "surface-analogy", text: "copied a success that only looks alike" },
      { id: "bet-too-big", text: "bet more than you could afford to lose" }
    ]
  },
  facets: {
    // whose decision the question is: an owner's like yours, or a well-known company the field's own writers use (plan: owner at least 0.6)
    scale: { name: "Whose business", values: [
      { id: "owner", text: "A small owner-run business" },
      { id: "known", text: "A well-known company" }
    ] },
    // lesson 2: what kind of problem it is, shown side by side at the end of its check
    problem: { name: "Kind of problem", compare: true, values: [
      { id: "running", text: "A problem of running the business" },
      { id: "strategic", text: "A strategy problem" }
    ] }
  },
  mix: [{ facet: "scale", value: "owner", min: 0.6 }],
  strands: [
    { id: "kernel", title: "Goal, to-do list or strategy" },
    { id: "better-different", title: "Run it better, or choose a different position" },
    { id: "value-numbers", title: "The value created and each side's share" },
    { id: "value-moves", title: "A move that grows value, or only moves it" },
    { id: "squeeze", title: "Who squeezes the profit" },
    { id: "core", title: "Finding the core in the numbers" },
    { id: "trade-offs", title: "A real trade-off, or a straddle" },
    { id: "fit", title: "Activities that fit the position" },
    { id: "lasts", title: "What it gives, and what stops a copy" },
    { id: "growth", title: "Growth that deepens or blurs" },
    { id: "choice", title: "Where to play and how to win" },
    { id: "be-true", title: "What would have to be true" },
    { id: "outside-view", title: "How others like it did, and the rival's reply" },
    { id: "afford", title: "A bet you can afford" },
    { id: "six-questions", title: "The six questions on one decision" }
  ],
  // the learner's own business, line by line, and the change made on it (lesson 5; lesson standard 5.3). No field holds an account number.
  own: {
    business: {
      into: "business",
      fields: [
        { id: "name", label: "The line: a product, a customer or a way you sell", type: "text", hint: "For example: wedding cakes" },
        { id: "kind", label: "What kind of line it is", type: "choose", list: "lineKind" },
        { id: "revenue", label: "What it brought in last year", type: "number", unit: "dollars" },
        { id: "cost", label: "What it cost you directly last year", type: "number", unit: "dollars" }
      ]
    },
    actions: {
      into: "actions",
      fields: [
        { id: "what", label: "What will you do?", type: "text" },
        { id: "where", label: "Where?", type: "text" },
        { id: "when", label: "On which day?", type: "date" }
      ]
    }
  },
  readingShare: 0.35
});
