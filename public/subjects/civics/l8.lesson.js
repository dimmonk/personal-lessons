// Civics, lesson 8: Whole stories (part 8). The four questions together, in order, on one story: who acted and at which level, was it theirs to do, which check
// is at work, and who is telling you. Each row states the same rule its own lesson teaches (items-shape.js holds them). One story is worked, six are practice (the second group mixed with lessons 4 to 7), and the check is the news test: six new
// stories, two from each level, each fully right (all five answers) to count, 5 of 6 to pass.
FC.lesson("civics", {
  id: "l8", part: "8", title: "Whole stories", rev: 1, status: "live",
  history: [{ rev: 1, date: "2026-10-22", change: "First version, built to the plan in docs/subjects/civics/plan.md. Not tried on a phone yet." }],
  why: [
    "A real story puts all four questions to you at once. Put them in this order, every time: who acted and at which level, was it theirs to do, which check is at work, and who is telling you.",
    "Then you can say what happened, whether it was allowed, what comes next, and how far to trust the story."
  ],
  flow: [
    { title: "The four questions",
      show: [{ kind: "document", form: "table", title: "In this order", head: ["Question", "What to do"], rows: [
        { id: "f-who", cells: ["1. Who acted?", "Name the level (federal, state, local) and what they did (wrote it, carried it out, judged it)."] },
        { id: "f-theirs", cells: ["2. Was it theirs to do?", "Find what lets them: a power the Constitution lists for Congress, a state power, what the state hands down to a city, or for the president their own powers and branch, and outside it what Congress said. Not settled only for the president or an agency; in court only when a court has the lawsuit now."] },
        { id: "f-stop", cells: ["3. Which check is at work?", "The one under way or set to happen: a veto, a lawsuit in court, a new law, a higher level’s law, the voters, an amendment. Not one the story calls far off."] },
        { id: "f-source", cells: ["4. Who is telling you?", CIVICS_SOURCE_RULE.join(" ")] }] }] },
    { worked: "l8-storm" },
    { set: { items: ["l8-bridges", "l8-coastroad", "l8-trains"], order: "listed" } },
    { set: { items: ["l8-hospitals", "l8-rangers", "l8-vending"], order: "shuffle", mix: { from: ["l4", "l5", "l6", "l7"], share: 0.3 } } }
  ],
  check: {
    items: ["l8-ruling", "l8-fee", "l8-offices", "l8-soda", "l8-bags", "l8-sidewalk"],
    order: "shuffle", feedback: "at-end",
    pass: [{ right: { min: 5 }, of: "stories with all five answers right" }]
  }
});
