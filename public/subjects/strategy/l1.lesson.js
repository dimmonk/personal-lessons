// Strategy, lesson 1: Goal, wish, or strategy? (part 1). Question 2 of the way of thinking, asked first (judgement call, plan.md: a learner must
// read a plan for its challenge before lesson 2 can ask what kind of challenge it is; the rule says a running gap is lesson 2's): what is the challenge, said plainly (research ST5; the dream and do-it-all traps, ST10). The rule and why; the owner's wrong idea ("my strategy
// is to grow 20%") refuted (P29); a look-alike pair: a number that fell against a challenge (P12); one worked plan (P10); a first group with the
// deciding lines marked, holding two strategies on different surfaces back to back (P12); a second group with nothing marked and one line to
// write (unscored); the check: six new owner plans, 5 of 6, and none taken for a strategy when it is a goal.
FC.lesson("strategy", {
  id: "l1", part: "1", title: "Goal, wish, or strategy?", rev: 1, status: "draft",
  history: [{ rev: 1, date: "2026-10-23", change: "First version, built to the plan: the three parts of a strategy, a goal and a to-do list told apart from one, and a number that fell told apart from a challenge. After two reviews: a step and a wish told apart, mission and vision named as wishes, a plan that only runs the business better kept out of strategy (lesson 2's question), and approach-like lines put in plans with no challenge. After the reviews of all fourteen: short challenges, long steps that give a reason and background lines in goals, so the challenge is found by what it says; the claim that every plan faces rivals dropped." }],
  why: [
    "Have an owner tell you their strategy and you often hear a number: “grow 20% this year.” That is where they want to be, not how they will get there.",
    "One of the field’s best-known teachers tests a plan with one question first: does it say what is in the way? Here you learn to read any plan, your own included, for that line, and to tell a strategy from a goal or a to-do list."
  ],
  flow: [
    { title: "The three parts of a strategy",
      show: [
        { kind: "prose", text: [
          "A strategy has three parts, and you can find each one on the page.",
          "The challenge: what is in the way, and why. “Since the supermarket opened its own bakery, our bread sales fell by a third: it sells a loaf for half our price.”",
          "One approach to it: the one way past that challenge. “We stop selling bread on price and sell what the supermarket cannot make: cakes to order.”",
          "Steps that follow from the approach: each one serves it. “Move a baker to cakes. Show the cakes in the window.”",
          "Read a plan in that order. First look for the challenge. It can be one short line, and a step can be long and give its own reason (“because …”): what makes a line the challenge is that it says what is in the way, not how long it is or where it sits.",
          "No challenge named? Then a plan that is only a target or a wish is a goal: a target is a number to reach (“$1 million in sales”); a wish is a quality you hope for (“the best gym in town”, “a great experience for every member”). A mission or a vision, a company’s statement of what it stands for, is a wish too.",
          "A step is something you can put on a calendar or buy: “Buy two plows”, “Open on Sundays”. A plan that lists steps with no challenge named is a to-do list, even with a target on top, and even with a line like “So we push harder on sales”: an approach to nothing.",
          "A challenge named, but the steps go off in different directions and none of them gets past it? That is a to-do list too.",
          "A challenge, one approach, and steps that serve it: that is a strategy. All three must be there; a challenge and an approach with no steps yet is a strategy not finished. Why it matters: a target tells your team where to end up, but only the challenge tells them what to work on.",
          "One limit: if the challenge is only that the business does the same work worse than its rivals (food comes out late, bills have mistakes), a plan to fix it is a plan to run the business better, not a strategy; telling the two apart comes next."] },
        { kind: "prose", tone: "wrong", text: [
          "“My strategy is to grow sales 20% this year.”",
          "That is a goal. It says where you want to be. A strategy starts from what stands in the way of the 20%, picks one way past it, and lists the steps that serve that way."] }
      ] },
    { title: "A number that fell is not yet a challenge",
      show: [
        { kind: "pair",
          a: { kind: "prose", text: "“Sales fell 15% last year.”" },
          b: { kind: "prose", text: "“Sales fell 15% last year because our two biggest office customers now order lunch through a delivery app.”" },
          compare: "Which line says what is in the way? Only the second. The first is a number that fell; until a plan says what made it fall, there is nothing to work on." }
      ] },
    { worked: "w-bakery" },
    { set: { items: [["p-landscape", "p-cafe"], "p-gym", "p-shop", "p-plumb"], order: "listed", support: { shown: true } } },
    { set: { items: ["q-salon", "q-print", "q-truck", "q-daycare", "q-heating"], order: "shuffle" } }
  ],
  check: {
    items: ["k-hardware", "k-kitchens", "k-dentist", "k-carwash", "k-tutor", "k-diner"],
    feedback: "at-end", order: "shuffle",
    pass: [{ right: { min: 5 } }, { slip: "goal-as-strategy", max: 0 }]
  }
});
