// Stats, lesson 1: What it claims, and the number it rests on (part A). Move 1 of the way of thinking: say exactly what it claims (makes it
// happen, or only went together, and about whom), find the number it rests on, and see whether the text shows it. One worked example (a headline
// that says more than its story); a first group of three with the deciding words marked; a second group of six with nothing marked; and the
// check: five new questions, no help, 4 of 5 to pass.
FC.lesson("stats", {
  id: "l1", part: "A", title: "What it claims, and the number it rests on", rev: 2, status: "live",
  history: [
    { rev: 1, date: "2026-10-11", change: "First version, built as the pilot of Stats under the practice engine. Not tried on a phone yet." },
    { rev: 2, date: "2026-10-22", change: "Rebuilt to the plan: the five kinds of claim are gone; the first question gives the claim in plain wordings that differ on whether one thing makes another happen and on whom it is about." }
  ],
  why: [
    "A number on your phone comes with a claim: the headline, post or ad says what the number means. The text underneath often says less.",
    "People who check claims for a living first pin down exactly what is being said, and only then look at the number. Here you do the same: find the claim, find the number it rests on, and see whether the text shows it."
  ],
  flow: [
    { title: "What to find",
      show: [
        { kind: "prose", text: [
          "Every headline, post, ad or report has three things to find.",
          "What it claims: what a reader takes away from it, in plain words. Does it say one thing makes another happen (“cuts”, “boosts”, “causes”)? Or only that two things went together (“linked to”, “people who … had …”)? A headline that puts a change right after something (“fell after the new lights”) invites you to hear a cause: take it as claiming one. And who is it about?",
          "The number it rests on: the sentence with the count, the share or the change the claim stands on. If no sentence gives one, tap Not given.",
          "Then the verdict. It holds up: the text shows what it claims. It does not show it: the text itself shows the claim goes too far, because its numbers say less, it is about other people, or it names something else that could explain it. You cannot tell from this: something you would need is not in the text at all.",
          "So a missing number does not always mean you cannot tell: if the text says in words that the claim goes too far, it does not show it. And a number can be there while the one thing you need is missing."] },
        { kind: "prose", tone: "wrong", text: [
          "“A headline with a number in it has been checked.”",
          "A headline is the writer’s short version. The facts are in the text under it, and the text sometimes says less. Where the two differ, go with the text."] }
      ] },
    { worked: "w-coffee" },
    { set: { items: ["p-tires", "p-crosswalk", "p-savings"], order: "listed", support: { shown: true } } },
    { set: { items: ["q-commute", "q-walking", "q-delivery", "q-dentist", "q-tea", "q-rate"], order: "shuffle" } }
  ],
  check: {
    items: ["k-reading", "k-5k", "k-diner", "k-boarding", "k-shelter"],
    feedback: "at-end", order: "shuffle",
    pass: [{ right: { min: 4 } }, { slip: "doubted", max: 1 }]
  }
});
