// Strategy: subject record (lesson standard 3.2), written to docs/subjects/strategy/plan.md from docs/research/strategy.md. The way of thinking is
// the six questions the field's schools agree on (research F): is it a strategy problem; what is the challenge; where the money comes from and who
// takes the rest; what we do differently and what stops a copy; the choice and what we will not do; and, before betting, what would have to be true.
// Fourteen parts in five units, every part built (complete).
// The lists are worded once here; a lesson offers the part of a list it has taught (`only`).
FC.subject('strategy', {
  name: "Strategy",
  field: "business",
  rev: 1,
  standard: 2,
  history: [
    { rev: 1, date: "2026-10-23",
      change: "First version, to the plan of 2026-10-22: fourteen parts in five units, the lists, the way questions are sorted and the topics for all fourteen; lessons 1 to 5 built (what a strategy is, better or different, value created and who keeps it, who squeezes the profit, find the core), with the value stick drawn as a figure and the learner's own business lines worked out in lesson 5. Notes for whoever builds lessons 6 to 14: (1) every question carries the facet scale, owner or known, and every group of questions and every check holds at least 0.6 owner questions (the mix); (2) a tap takes the lines of a prose, message or article block, never a document's rows, so a question about a row of a table is a choose that names the rows (lesson 5 does this; lesson 12 should too); (3) the lists benefit, trap, judge and the verdicts of lessons 6, 9 and 13 are worded here from the plan, but the barrier list of lesson 8 is left for its builder to word from research ST9 and ST3; (4) the subject has no danger: the engine's danger is one slip read only by a baseline, and the plan's three costly errors (goal-as-strategy, growth-for-growth, serve-everyone) belong in lesson 14's check as pass rules, each with max 0; (5) the strategy lessons' private form business and its action form are used by lesson 5 and may be read again by lesson 9 or 14 (the work core). Then lessons 6 to 14 built (what you say no to, do the pieces fit, will it last, growth that keeps the position, where to play and how to win, what would have to be true, how others like it did, a bet you can afford, run the six questions), with the barrier list worded from research ST9 and ST3, the base-rate tables made fresh, and lesson 14's check drawn from every topic with the three costly errors as pass rules; the subject is complete. Lessons 1 to 5 after two reviews (docs/subjects/strategy/fixes-l1-5.md): the verdict shrinks and the slip added-cost-missed for lesson 3, where a move is judged by what it adds to the work; the verdict keep and the slip loser-counted taken out, since lesson 5 now asks only fix or let go of a losing line and counts the core's share of all the lines' earnings, losses taken off (research ST19); its opposite, loss-left-out, named instead. All fourteen lessons after two more reviews (docs/subjects/strategy/fixes-l1-14.md): the verdict fits (lesson 6 decides by whether the new work pulls against the old), the barrier switching (lesson 8's list is the common answers, not all), the traps misfit and chooses (lesson 10 tests that where to play and how to win fit), the judge answers reworded (can anyone see people buying it yet; either way the stake stays within what can be lost), the slips plan-first and talk-as-evidence; lesson 14's check is ten new whole decisions, not a draw from items already answered." }
  ],
  complete: true,
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
      { id: "shrinks", text: "It shrinks the value" },
      { id: "fix", text: "Keep it, but fix its price or cost" },
      { id: "let-go", text: "Let it go" },
      { id: "tradeoff", text: "A real trade-off: one side of the pull given up" },
      { id: "straddle", text: "A straddle: both sides of the pull kept at once" },
      { id: "fits", text: "No pull: the new work fits beside the old" },
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
    // lesson 8: the common answers to what stops a rival getting the same (research ST9: rare and hard to copy, switching costs and trust built
    // over years; ST3: fit). Not the whole list: being far bigger than any rival, or a network, are others a small business rarely has.
    barrier: [
      { id: "only-us", text: "Only we have it, and a rival cannot get or make one" },
      { id: "fit", text: "It rests on many activities that fit together: a rival would have to copy them all" },
      { id: "switching", text: "Customers would lose by leaving: their setup and records here, or trust built over years that a newcomer cannot buy" },
      { id: "nothing", text: "Nothing: a rival can buy it, copy it, or get the same result another way" }
    ],
    // lesson 10: the six ways a plan fails to choose (research ST10)
    trap: [
      { id: "doall", text: "Do it all: everything is a priority" },
      { id: "headon", text: "Head-on: taking on the strongest rival first, at its own game" },
      { id: "fronts", text: "Many fronts: fighting several rivals at once" },
      { id: "everyone", text: "Something for everyone: every kind of customer at once" },
      { id: "dream", text: "A dream: a mission that never says where or how" },
      { id: "copycat", text: "Copycat: the plan every business in the trade has" },
      // not one of the six: a plan that chooses both parts, but whose way to win is not what those customers value (ST10: the two are one choice)
      { id: "misfit", text: "No trap, but the way to win does not fit those customers" },
      { id: "chooses", text: "Nothing: it chooses where to play and a way to win that fits" }
    ],
    // lesson 13: which way of judging the bet fits (research ST12, ST14, ST20); either way the stake stays within what can be lost
    judge: [
      { id: "outside", text: "People already buy this: start from how similar projects turned out" },
      { id: "afford", text: "Nobody can see yet whether people would buy: try it small and learn" }
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
      { id: "better-not-different", text: "thought running the business better would fix what needs a different position" },
      { id: "running-as-strategy", text: "took a gap in running the business for a strategy problem" },
      { id: "price-as-value", text: "took the price for the value created" },
      { id: "share-swapped", text: "mixed up whose share is whose" },
      { id: "moved-as-grown", text: "took value moved from one side to another for value created" },
      { id: "grown-as-moved", text: "missed that the move changes what customers would pay or what suppliers would take" },
      { id: "added-cost-missed", text: "counted what customers would pay more, and forgot what the move adds to the work" },
      { id: "fast-growth-attractive", text: "took a fast-growing market for a good one" },
      { id: "sales-not-profit", text: "judged a line by its sales, not by what it earns" },
      { id: "loss-left-out", text: "left a losing line's loss out of the total a share is counted from" },
      { id: "growth-for-growth", text: "grew for the sake of growing" },
      { id: "serve-everyone", text: "tried to serve everyone at once, or kept two ways that pull against each other" },
      { id: "copyable-as-lasting", text: "took something a rival can buy or copy for an advantage that lasts" },
      { id: "missed-tradeoff", text: "missed a real choice of what not to do" },
      { id: "counted-wrong-group", text: "counted the wrong group in the table" },
      { id: "inside-view", text: "trusted the plan's own story over how similar bets turned out" },
      { id: "rival-ignored", text: "forgot that rivals will answer" },
      { id: "surface-analogy", text: "copied a success that only looks alike" },
      { id: "bet-too-big", text: "bet more than you could afford to lose" },
      { id: "plan-first", text: "worked out the full plan before testing the condition most in doubt" },
      { id: "talk-as-evidence", text: "took people saying they like an idea for evidence that they would act on it" }
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
