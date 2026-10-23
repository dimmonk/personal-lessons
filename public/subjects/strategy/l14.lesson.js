// Strategy, lesson 14: Run the six questions (part 14). The whole review: one decision taken through the six questions in order (research F;
// ST17, a few principles held accurately; P25, D6, D7, the whole task). The six questions on one screen; one worked decision (P10); a first group
// with the deciding lines marked, then a second with nothing marked (4.2); the check is the real-world test of the plan: ten new one-screen
// decisions (a plan, a memo, an offer, a page of numbers) never seen in a lesson, each reaching across lessons 1 to 13 and ending in the move,
// 8 of 10, and none of the three costly errors (a goal taken for a strategy, growth for its own sake, serving everyone or straddling), each a
// pass rule with none allowed and each possible in at least two of the ten (the subject has no danger: the engine's danger is a baseline's).
FC.lesson("strategy", {
  id: "l14", part: "14", title: "Run the six questions", rev: 1, status: "draft",
  history: [{ rev: 1, date: "2026-10-23", change: "First version, built to the plan: one decision through all six questions, and a check of ten new whole decisions from every topic (after the reviews, docs/subjects/strategy/fixes-l1-14.md)." }],
  why: [
    "Each question so far was asked on its own. A real decision needs all of them, in order, and each answer feeds the next.",
    "Strategists work through the same short run of questions on any decision. Here you take whole decisions through all six, then face ten new decisions, each ending in what the owner should do, with no help."
  ],
  flow: [
    { title: "The six questions, in order",
      show: [
        { kind: "prose", text: [
          "1. Is it a strategy problem? If the business is behind rivals at the same work, run it better. If it already runs as well as they do and is squeezed anyway, it needs a different position.",
          "2. What is in the way, and why? A number that fell is not yet an answer.",
          "3. Where does the money come from, and who takes the rest? The line customers come for that earns the most after its costs, not the biggest seller; and buyers, suppliers, newcomers, substitutes or rivals who squeeze it.",
          "4. What makes the business different, what does that give it, and what stops a rival copying it?",
          "5. The choice: where to play and how to win, and the two must fit; what it will not do (no straddle); activities that fit; growth that deepens the core, not growth for its own sake.",
          "6. Before betting: what would have to be true, and which condition is least likely? Can anyone see people buying this already? Then start from how similar projects did. If nobody can see yet, try it small and learn. Either way, keep the stake within what you can afford to lose, and expect rivals to answer.",
          "Why it matters: each question catches a mistake the others miss. Skipping one is how a sensible-looking plan goes wrong."] }
      ] },
    { worked: "w14-bakery" },
    { set: { items: ["p14-gym", "p14-print"], order: "listed", support: { shown: true } } },
    { set: { items: ["q14-cafe", "q14-tutor"], order: "shuffle" } }
  ],
  check: {
    items: ["k14-salon", "k14-hvac", "k14-cleaner", "k14-cleaning", "k14-catering", "k14-bikes", "k14-vet", "k14-sauce", "k14-groomer", "k14-taqueria"],
    feedback: "at-end", order: "shuffle",
    pass: [{ right: { min: 8 } }, { slip: "goal-as-strategy", max: 0 }, { slip: "growth-for-growth", max: 0 }, { slip: "serve-everyone", max: 0 }]
  }
});
