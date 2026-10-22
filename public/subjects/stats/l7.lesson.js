// Stats, lesson 7: Could anything else explain it? (part G). Move 5 of the way of thinking, Hill's question asked of one article: other differences
// between the groups, the arrow the other way, a bounce back after a picked extreme, nothing to compare with, or only luck because the groups were
// split by chance (with a dummy pill, a placebo), which leaves only luck. A fourth question names the other explanation. A contrast pair (a fair trial and a survey of people who
// chose, on the same numbers); one worked example (music lessons and math); the wrong idea named; a first group of four with the sentences marked; a
// second group of six with questions of the earlier lessons mixed in; and the check: six new questions, three of them trials (two sound), 5 of 6 to pass.
FC.lesson("stats", {
  id: "l7", part: "G", title: "Could anything else explain it?", rev: 1, status: "live",
  history: [{ rev: 1, date: "2026-10-22", change: "First version, built to the plan (what else could explain it: other differences, the arrow the other way, a bounce back, nothing to compare with, or only luck when the groups were split by chance)." }],
  why: [
    "“Coffee drinkers live longer” and “coffee makes you live longer” are different claims. The second needs much more.",
    "People who study what causes disease put one question first: is there any other way to explain these facts? Here you learn to put it to a headline, and to name the other explanation when there is one."
  ],
  flow: [
    { title: "What else could explain it",
      show: [
        { kind: "prose", text: [
          "When one group did better than another, or things changed after something new, put one question: could anything else explain it? Four answers come up again and again.",
          "Other differences between the groups. People who chose to drink tea may also exercise more or smoke less, and that could be what made the difference.",
          "The arrow the other way. Maybe the second thing caused the first: unhappy people may spend more time online, rather than the other way round.",
          "A bounce back. Something picked because it just had its worst year usually has a better one next, with or without a change.",
          "Nothing to compare with. A fall after a new rule may have happened anyway; you need places without the rule over the same years.",
          "Only luck is left when the groups were split by chance, by a coin toss or a lottery: then they are alike in everything but the thing tested and what chance gives each. With a few hundred people and a clear gap, luck is unlikely; with a handful of people or a tiny gap, it could be luck, as with a survey’s margin. A dummy pill that looks the same (a placebo) also takes care of people feeling better just from taking something."] }
      ] },
    { title: "Then the verdict",
      show: [
        { kind: "prose", text: [
          "A claim that one thing makes another happen holds up only when the groups were split by chance, there were enough of them for luck to be unlikely, and the numbers fit the size it gives.",
          "If the text shows people chose their group, gives only a before and after with nothing to compare with, picked something right after its worst year, or names another explanation, a claim that one thing makes another happen does not show it. So does a split by chance with too few people to rule out luck, and numbers that say less than the size the claim gives.",
          "A claim that two things only went together can hold up even when something else could explain it: it claims no more.",
          "If the text does not say how the groups were formed, you cannot tell."] },
        { kind: "pair",
          a: { kind: "article", form: "post", source: "A trial", lines: [{ id: "a1", text: "400 adults were split by coin toss: half drank Restwell tea each night, half a tea that looks and tastes the same with nothing in it. 20 in 100 of the Restwell group woke in the night, against 30 in 100 of the others." }] },
          b: { kind: "article", form: "post", source: "A survey", lines: [{ id: "b1", text: "400 adults said whether they drink Restwell tea each night. 20 in 100 of the tea drinkers woke in the night, against 30 in 100 of the others." }] },
          compare: "The same numbers. Which shows that the tea makes people sleep through? The first: a coin toss decided who drank it, so the groups were alike in everything else. In the second people chose, and tea drinkers may differ in other ways, such as going to bed earlier." },
        { kind: "prose", tone: "wrong", text: [
          "“A big study that followed thousands of people proves it.”",
          "Ten thousand people who chose their own coffee are still people who chose. Size does not split groups by chance; only a coin toss or a lottery does."] }
      ] },
    { worked: "w-music" },
    { set: { items: ["p-calmira", "p-cameras", "p-breakfast", "p-desks"], order: "listed", support: { shown: true } } },
    { set: { items: ["q-teens", "q-serenol", "q-pages", "q-brightmind", "q-dogs", "q-readers"], order: "shuffle", mix: { from: ["l1", "l2", "l3", "l4", "l5", "l6"], share: 0.3 } } }
  ],
  check: {
    items: ["k-insoles", "k-hens", "k-norwell", "k-hawks", "k-nutrapet", "k-focus"],
    feedback: "at-end", order: "shuffle",
    pass: [{ right: { min: 5 } }, { slip: "doubted", max: 1 }]
  }
});
