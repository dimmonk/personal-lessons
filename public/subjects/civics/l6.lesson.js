// Civics, lesson 6: Who can stop it (part 6). The third reading move: which of the six checks the story shows at work (a veto and a vote to override it, a court,
// lawmakers passing a new law, a higher level's law over a lower one, the voters, an amendment). Each story has exactly one at work; a second one it names is far
// off or ruled out. One story is worked, six are practice (the second group mixed with lessons 4 and 5), the check is six new stories, 5 to pass.
FC.lesson("civics", {
  id: "l6", part: "6", title: "Who can stop it", rev: 1, status: "live",
  history: [{ rev: 1, date: "2026-10-22", change: "First version, built to the plan in docs/subjects/civics/plan.md. Not tried on a phone yet." }],
  why: [
    "A government act is not always the last word. Six things can stop or undo one. A story often names more than one, but only one is at work now: under way, or about to happen. Find it."
  ],
  flow: [
    { title: "Six ways to stop it",
      show: [{ kind: "document", form: "table", title: "The six checks", head: ["What", "How it stops it"], rows: [
        { id: "s-veto", cells: ["A veto, and a vote to override it", "A president, governor or mayor can refuse to sign. Lawmakers can pass it anyway with a large vote: in Congress, two-thirds of each house."] },
        { id: "s-court", cells: ["A court", "Once someone has sued, a court can block a law or order that breaks the Constitution or another law. No court sits above the Supreme Court."] },
        { id: "s-change", cells: ["A new law", "Lawmakers can pass a new law that changes or cancels an old one."] },
        { id: "s-higher", cells: ["A higher level’s law", "Federal law wins over a state or local law that clashes with it; state law wins over a city or county rule."] },
        { id: "s-voters", cells: ["The voters", "Voters can elect different lawmakers, governors, mayors or a different president."] },
        { id: "s-amend", cells: ["An amendment", "It changes the Constitution itself. Two-thirds of both houses of Congress must vote for it, and three-fourths of the states must approve it."] }] },
        { kind: "prose", text: "At work means under way or about to happen: a veto promised, a lawsuit filed, a vote planned, a higher level saying its law wins, an election coming on this question, an amendment begun." }] },
    { worked: "l6-pay" },
    { title: "A wrong idea",
      show: [{ kind: "prose", tone: "wrong", text: ["“The courts can fix anything.” A court acts only when someone brings it a dispute, and it cannot change the Constitution.",
        "Read for the check at work now. A lawsuit counts only once it is filed; an election only when it is coming and this is the question."] }] },
    { title: "Two ways to cancel a rule",
      show: [{ kind: "pair", a: { kind: "prose", text: "A judge cancels a rule after neighbors sue." }, b: { kind: "prose", text: "Lawmakers cancel a rule by passing a new one." },
        compare: "The first needs a lawsuit; the second needs a vote." }] },
    { set: { items: ["l6-farmers", "l6-gas", "l6-vendors"], order: "listed" } },
    { set: { items: ["l6-fee", "l6-banks", "l6-sheds"], order: "shuffle", mix: { from: ["l4", "l5"], share: 0.25 } } }
  ],
  check: {
    items: ["l6-spending", "l6-bikes", "l6-diapers", "l6-lines", "l6-pool", "l6-blowers"],
    order: "shuffle", feedback: "at-end",
    pass: [{ right: { min: 5 } }]
  }
});
