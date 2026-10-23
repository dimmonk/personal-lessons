// Strategy, lesson 14: Run the six questions (part 14). The whole review: one decision taken through the six questions in order (research F;
// ST17, a few principles held accurately; P25, D6, D7, the whole task). The six questions on one screen; one worked decision (P10); a first group
// with the deciding lines marked, then a second with nothing marked (4.2); the check is the real-world test of the plan: ten questions drawn from
// every topic of lessons 1 to 13, 8 of 10, and none of the three costly errors (a goal taken for a strategy, growth for its own sake, a move that
// tries to serve everyone), each a pass rule with none allowed (the subject has no danger: the engine's danger is a baseline's).
FC.lesson("strategy", {
  id: "l14", part: "14", title: "Run the six questions", rev: 1, status: "draft",
  history: [{ rev: 1, date: "2026-10-23", change: "First version, built to the plan: one decision through all six questions, and a check of ten questions drawn from every topic." }],
  why: [
    "Each question so far was asked on its own. A real decision needs all of them, in order, and each answer feeds the next.",
    "Strategists work through the same short run of questions on any decision. Here you take whole decisions through all six, then face ten new questions from every topic, with no help."
  ],
  flow: [
    { title: "The six questions, in order",
      show: [
        { kind: "prose", text: [
          "1. Is it a strategy problem? If the business is behind rivals at the same work, run it better. If it already runs as well as they do and is squeezed anyway, it needs a different position.",
          "2. What is in the way, and why? A number that fell is not yet an answer.",
          "3. Where does the money come from? The line customers come for that earns the most after its costs, not the biggest seller, and who takes the rest.",
          "4. What makes the business different, what does that give it, and what stops a rival copying it?",
          "5. The choice: where to play and how to win, what it will not do, and activities that fit.",
          "6. Before betting: has this been done many times, with a record? Start from the record. If not, bet only what you can lose.",
          "Why it matters: each question catches a mistake the others miss. Skipping one is how a sensible-looking plan goes wrong."] }
      ] },
    { worked: "w14-bakery" },
    { set: { items: ["p14-gym", "p14-print"], order: "listed", support: { shown: true } } },
    { set: { items: ["q14-cafe", "q14-tutor"], order: "shuffle" } }
  ],
  check: {
    items: { draw: { strands: ["kernel", "better-different", "value-numbers", "value-moves", "squeeze", "core", "trade-offs", "fit", "lasts", "growth", "choice", "be-true", "outside-view", "afford"], n: 10 } },
    feedback: "at-end", order: "shuffle",
    pass: [{ right: { min: 8 } }, { slip: "goal-as-strategy", max: 0 }, { slip: "growth-for-growth", max: 0 }, { slip: "serve-everyone", max: 0 }]
  }
});
