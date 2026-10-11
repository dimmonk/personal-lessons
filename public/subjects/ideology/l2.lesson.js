// Ideology, lesson 2: Socialist, or not? (part 2, Economy labels). The pilot (docs/subjects/ideology/design.md, gate 5). The wrong idea about the
// word first, then what the four labels need, one label on two sets of words; one worked example (a label on a plan that pays a benefit and leaves
// the companies alone); a first group of four with what the label needs beside the words; a second group of eight with nothing beside them; and the
// check of part 2: six new labels, three thrown from each side, 5 of 6 to pass and at least 2 of 3 on each side.
FC.lesson("ideology", {
  id: "l2", part: "2", title: "Socialist, or not?", rev: 1, status: "draft",
  history: [{ rev: 1, date: "2026-10-11", change: "First version, built as the pilot of Ideology under the practice engine. Not tried on a phone yet." }],
  why: [
    "A label like “socialist” is a claim about what some words want done. People throw it from every side, and often it does not fit.",
    "Here you check a label against the words it is pinned on. You find what the words say, compare that with what the label needs, and decide: earned, not earned, or too little to tell."
  ],
  flow: [
    { title: "Check the label, not the mood",
      show: [
        { kind: "prose", tone: "wrong", text: [
          "“Socialist means the government pays for things.”",
          "People use “socialist” in many ways. Here it means one thing you can check: the public or the workers own the main businesses. Paying for services with taxes is a different idea."] },
        { kind: "prose", text: [
          "A label pinned on words is a claim. You can check it in three steps.",
          "1. Find what the words say should be done. Leave out the tone, the insults and who is speaking.",
          "2. Read what the label needs. Each label needs a few things, and the words have to show every one.",
          "3. Decide. Earned: the words show every need. Not earned: they show something that does not fit, and you say which name fits instead. Too little to tell: the words are too vague to show the label or rule it out."] }
      ] },
    { title: "What the four labels need",
      show: [
        { kind: "panel", rules: ["market", "socdem", "socialist", "communist"] },
        { kind: "prose", text: [
          "These are the plain meanings used here. People argue about the edges, so the words you judge sit well inside them.",
          "A socialist idea takes a few main industries into public or worker hands. A communist idea takes nearly everything. Each label is judged on its own needs, whichever side throws it."] }
      ] },
    { title: "One label, different words",
      show: [
        { kind: "pair",
          a: { kind: "article", form: "post", source: "Comment · @ray_w · 1h", label: { text: "Socialist! The state is running medicine now.", by: "On a right-leaning news page", side: "right" },
            lines: [{ id: "a1", text: "Every resident would get health insurance paid for by a payroll tax." }, { id: "a2", text: "Doctors and hospitals would stay private and send their bills to the plan." }] },
          b: { kind: "article", form: "post", source: "Comment · @ray_w · 1h", label: { text: "Socialist! The state is running medicine now.", by: "On a right-leaning news page", side: "right" },
            lines: [{ id: "b1", text: "The county would buy every hospital in it and put the doctors on its payroll." }, { id: "b2", text: "Care would be free to patients." }] },
          compare: "Both posts say socialist. In the first, a tax pays the bills and the hospitals stay private. In the second, the county owns the hospitals. Only the second has the public owning a main industry." }
      ] },
    { worked: "w-power" },
    { set: { items: [["p-fares", "p-bus"], "p-jobs", "p-fortunes"], order: "listed", support: { panel: true } } },
    { set: { items: ["q-sell", "q-farms", "q-coops", "q-utilities", "q-economy", "q-steel", "q-ordinary", "q-banks"], order: "shuffle" } }
  ],
  check: {
    items: ["k-water", "k-rents", "k-drugs", "k-wage", "k-unleash", "k-city"],
    feedback: "at-end", order: "shuffle",
    pass: [{ right: { min: 5 } }, { where: { side: "left" }, right: { min: 2 } }, { where: { side: "right" }, right: { min: 2 } }]
  }
});
