// Stats, lesson 1: Find the claim and its number (part A). The pilot (docs/subjects/stats/design.md, gate 5). What to find; one worked
// example (a headline that says more than its story); a first group of three with the deciding words marked; a second group of five with
// nothing marked; and the check of part A: five new questions, no help, 4 of 5 to pass.
FC.lesson("stats", {
  id: "l1", part: "A", title: "Find the claim and its number", rev: 1, status: "draft",
  history: [{ rev: 1, date: "2026-10-11", change: "First version, built as the pilot of Stats under the practice engine. Not tried on a phone yet." }],
  why: [
    "A number on your phone comes with a claim: a headline, a post or an ad says what the number means. The text underneath often says something smaller.",
    "Here you find the claim, find the number it rests on, and check whether the text shows what the headline says."
  ],
  flow: [
    { title: "What to find",
      show: [
        { kind: "prose", text: [
          "Every headline, post, ad or report has three things to find. What it claims. The number it rests on. Whether the text shows what it claims.",
          "A claim is one of five kinds. A cause says one thing makes another happen (“cuts”, “boosts”, “leads to”). A comparison says one thing is more, less or better than another, or changed between two times. A size says how big or how common something is. A forecast says what will happen. A “most people” claim says what most people do or think.",
          "Then there are three answers. It holds up: the text shows what the headline says. It does not show it: the text says less than the headline does. You cannot tell from this: the text gives no number, or too little to check."] },
        { kind: "prose", tone: "wrong", text: [
          "“A headline with a number in it has been checked.”",
          "A headline is the writer’s short version. The facts are in the text under it, and the text sometimes says less. Where the two differ, go with the text."] }
      ] },
    { worked: "w-coffee" },
    { set: { items: ["p-tires", "p-crosswalk", "p-savings"], order: "listed", support: { shown: true } } },
    { set: { items: ["q-commute", "q-walking", "q-heater", "q-delivery", "q-housing"], order: "shuffle" } }
  ],
  check: {
    items: ["k-reading", "k-5k", "k-diner", "k-boarding", "k-shelter"],
    feedback: "at-end", order: "shuffle",
    pass: [{ right: { min: 4 } }, { slip: "doubted", max: 1 }]
  }
});
