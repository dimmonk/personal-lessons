// Strategy, lesson 2: Better, or different? (part 2). Question 1 of the way of thinking: is this a strategy problem, or a gap in running the
// business (research ST1, ST16)? The rule and why; the owner's wrong idea ("better equipment and best practice are my strategy") refuted (P29);
// a known pair, Southwest beside a copy of the full-service airlines' best practice (ST1, ST2; P12); one worked story (P10); a first group with
// the settling line marked, two running problems and two strategy problems each back to back (P12); a second group with nothing marked and
// lesson 1 mixed in (P22); the check: six new stories, 5 of 6, and the two kinds of problem shown side by side.
FC.lesson("strategy", {
  id: "l2", part: "2", title: "Better, or different?", rev: 1, status: "draft",
  history: [{ rev: 1, date: "2026-10-23", change: "First version, built to the plan: running the business better told apart from choosing a different position, by one question: would doing the same things as the rivals, only better, fix it?" }],
  why: [
    "Most of an owner’s week goes on running the business better: faster, cheaper, fewer mistakes. That work matters, but it is not strategy, and it cannot fix every problem.",
    "Strategy teachers first settle which kind of problem they are looking at. Here you learn to tell, from the facts of a story, whether a business needs to run better or to choose a different position."
  ],
  flow: [
    { title: "Running better, or a different position",
      show: [
        { kind: "prose", text: [
          "Running it better means doing the same things your rivals do, only better: on time, with less waste, with the tools they already use.",
          "A different position means doing different things from your rivals, or the same things in a different way, for customers who want that.",
          "To tell which a business needs, put one question to it: would doing the same things the rivals do, only better, fix it?",
          "Yes, when the business is behind its rivals at the same work, and the rivals show it can be done: late where they are on time, wasteful where they are not. Then run it better.",
          "No, when the business already runs as well as its rivals and is squeezed anyway, when every gain is copied within months, or when a rival’s cost is out of reach of any amount of running better. Then choose a different position.",
          "Why it matters: what one business does better, the others can buy or copy, so the gain ends up with customers as lower prices. Only being different keeps something for you."] },
        { kind: "prose", tone: "wrong", text: [
          "“Our strategy is to be the best-run shop in town: new equipment, best practice, lean.”",
          "That is running the business well. It is needed, but rivals can copy it, so it is not a strategy. A strategy is a choice to be different in a way that rivals cannot simply buy."] }
      ] },
    { title: "Two airlines",
      show: [
        { kind: "pair",
          a: { kind: "prose", text: "Southwest Airlines did not try to be a full-service airline run more cheaply. It chose to do different things from the full-service airlines, and gave up some of what they offer." },
          b: { kind: "prose", text: "Picture an airline that copies the best practice of the full-service airlines: the same service, run with fewer staff and newer software." },
          compare: "Which would a rival find hard to match? The second, anyone can match by buying the same software. To match the first, a full-service airline would have to give up what makes it full-service." }
      ] },
    { worked: "w-cleaning" },
    { set: { items: [["p-bistro", "p-books"], ["p-movers", "p-pizza"]], order: "listed", support: { shown: true } } },
    { set: { items: ["q-salon2", "q-gym2", "q-roofer", "q-cafe2", "q-press"], order: "shuffle", mix: { from: ["l1"], share: 0.3 } } }
  ],
  check: {
    items: ["k-dental", "k-florist", "k-courier", "k-heating", "k-bread", "k-taxi"],
    feedback: "at-end", order: "shuffle",
    pass: [{ right: { min: 5 } }, { slip: "better-not-different", max: 0 }]
  }
});
