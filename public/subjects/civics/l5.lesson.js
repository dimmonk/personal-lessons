// Civics, lesson 5: Theirs to do? (part 5). The second reading move: what lets them? A power the Constitution lists (federal), a power left to the states, the power a
// state hands a city or county, and, for the president or an agency, its own powers and its own branch, and outside the branch what Congress said (a law that allows
// it, silence: not settled, a law against it). "In court" only when a court has the lawsuit now. The rule is the one in items-shape.js, stated once on the first
// screen. One story is worked, six are practice, the check is six new stories, 5 to pass.
FC.lesson("civics", {
  id: "l5", part: "5", title: "Theirs to do?", rev: 1, status: "live",
  history: [{ rev: 1, date: "2026-10-22", change: "First version, built to the plan in docs/subjects/civics/plan.md. Not tried on a phone yet." }],
  why: "Once you know who acted, put the next question to yourself: was it theirs to do? Each level has only some powers. Find the line that decides it: a law the story names, or the act itself when the table settles it.",
  flow: [
    { title: "Where each power comes from",
      show: [
        { kind: "document", form: "table", title: "What lets them do it", head: ["Who", "Where their power comes from"], rows: [
          { id: "p-congress", cells: ["Congress", "The powers the Constitution lists: taxes and spending, the army, war, coining money, trade between states and with other countries"] },
          { id: "p-state", cells: ["A state", "Everything not given to the federal government (the 10th Amendment). Never a power only for the federal government, such as printing money or making treaties."] },
          { id: "p-local", cells: ["A city, county or school board", "Only what its state hands down: the story has to show the state law. Carrying out a city rule already made under that power is theirs too."] },
          { id: "p-president", cells: ["The president or an agency", "The president’s own powers (leading the military, vetoing bills, appointing judges) and running the executive branch’s own offices: theirs. Reaching outside the branch, to companies, people or states, needs a law of Congress: a law that allows it, theirs; Congress silent, not settled; a law against it, not theirs. A power of the states, such as schools: the president cannot order it, with or without Congress. Congress can only attach conditions to money it gives the states, and an agency enforcing those conditions acts on a law that allows it."] },
          { id: "p-clash", cells: ["When two levels clash", "The higher level’s law wins: federal over state and local, state over local."] }] },
        { kind: "prose", text: "Put one question to the story: what lets them? A line may name the law, or only the act is told and the table decides." }
      ] },
    { title: "Four answers",
      show: [{ kind: "document", form: "table", title: "What to say", head: ["Say", "When"], rows: [
        { id: "v-theirs", cells: ["Theirs to do", "The power is theirs by the table, and nothing stands against it"] },
        { id: "v-not", cells: ["Not theirs to do", "A law stands against it, or the power belongs to another level"] },
        { id: "v-unsettled", cells: ["Not settled", "Only for the president or an agency: reaching outside the executive branch, into something Congress could allow, where Congress has said nothing"] },
        { id: "v-court", cells: ["In court", "A court has the lawsuit now and has not ruled"] }] }] },
    { worked: "l5-oil" },
    { title: "A wrong idea",
      show: [{ kind: "prose", tone: "wrong", text: ["“A judge will sort it out.” A court only steps in when someone has brought it a lawsuit.",
        "Say “in court” only when a court has the lawsuit now. Someone saying they might sue has not brought one."] }] },
    { title: "Same act, different power",
      show: [
        { kind: "pair", a: { kind: "prose", text: "The governor closed a state park during a fire, as state law allows." }, b: { kind: "prose", text: "The governor closed a national park, which is federal land." },
          compare: "Both are a governor closing a park. A state park is the state’s; a national park is federal land, and no state law can hand the governor power over it." },
        { kind: "pair", a: { kind: "prose", text: "The president ordered federal offices to close at 5 p.m." }, b: { kind: "prose", text: "The president ordered every private store to close at 5 p.m., and Congress has said nothing." },
          compare: "Federal offices are the president’s own branch to run: theirs. Private stores are outside it, and with Congress silent the order is not settled." },
        { kind: "pair", a: { kind: "prose", text: "The president ordered every public school to start at 9 a.m." }, b: { kind: "prose", text: "A law of Congress gives schools lunch money if they serve fresh fruit, and the Education Department checks that they do." },
          compare: "No one in Washington can order a state’s schools. Congress can attach conditions to money it gives, so the first is not theirs and the second is." }] },
    { set: { items: ["l5-nine", "l5-rent", "l5-bus"], order: "listed" } },
    { set: { items: ["l5-prices", "l5-dollars", "l5-licenses"], order: "shuffle", mix: { from: ["l4"], share: 0.25 } } }
  ],
  check: {
    items: ["l5-trucks", "l5-factory", "l5-recycle", "l5-civics", "l5-wage", "l5-sales"],
    order: "shuffle", feedback: "at-end",
    pass: [{ right: { min: 5 } }]
  }
});
