// Stats, lesson 4: A test says yes (part D). Move 2 of the way of thinking, for a test: count 1,000 people through it (how many have it, how many of
// them the test finds, how many of the rest it flags anyway) and see how many of the positives are real. One worked example (a blood test "80% accurate"
// whose positives are 1 in 4 real); the wrong idea named; a first group of four with the numbers marked; a second group of six with questions of
// the earlier lessons mixed in; a third group with fresh numbers; and the check: four new questions, no help, 3 of 4 to pass and the one sound claim not turned down.
FC.lesson("stats", {
  id: "l4", part: "D", title: "A test says yes", rev: 1, status: "live",
  history: [{ rev: 1, date: "2026-10-22", change: "First version, built to the plan (1,000 people counted through a test; false alarms)." }],
  why: [
    "A test that is usually right can still be wrong most of the times it says yes. The headline says how well the test works. It does not say how many of the people who test positive really have it.",
    "People who study how doctors read tests found what works best: picture 1,000 people and count them through the test. You will do that here, and then you can see through a claim like “99% accurate” in a minute."
  ],
  flow: [
    { title: "Count 1,000 people",
      show: [
        { kind: "prose", text: [
          "To see what a positive result means, count 1,000 people through the test.",
          "First, how many of the 1,000 have it? Second, how many of those does the test find? Third, how many of the others does it flag anyway? Those are the false alarms. Fourth, add the two kinds of positives. How many of them are real?",
          "To take “5 in 100” of a number, divide by 100 and multiply by 5: 5 in 100 of 980 is 980 ÷ 100 × 5 = 49.",
          "For example, if 20 in 1,000 have it, and the test finds 8 in 10 of them (16), and flags 5 in 100 of the other 980 (49), then 65 test positive and 16 are real: about 1 in 4.",
          "Then judge the headline by that count, whatever its words (“90% accurate”, “usually right”). If most of the positives are real, “a positive most likely means you have it” holds up. If most are false alarms, it does not. If the text leaves out how common it is, or how often the test flags people who do not have it, you cannot tell, unless it says in words that most positives turned out wrong."] },
        { kind: "prose", tone: "wrong", text: [
          "“The test is 80% accurate, so a positive means an 80% chance I have it.”",
          "“Accurate” can mean several things. In these questions the text says which: it is how many of the people who have it the test finds. None of them tells you how many of the positives are real: count the 1,000, then see."] }
      ] },
    { worked: "w-test" },
    { set: { items: ["p-rapid", "p-screen", "p-quick", "p-delling"], order: "listed", support: { shown: true } } },
    { set: { items: ["q-drug", "q-strep", "q-fraud", "q-allergy", "q-rash", "q-hearing"], order: "shuffle", mix: { from: ["l2", "l3"], share: 0.3 } } },
    { set: { items: [{ gen: "g-test-low", n: 2 }, { gen: "g-test-high", n: 2 }, "q-leak"], order: "shuffle", mix: { from: ["l3"], share: 0.3 } } }
  ],
  check: {
    items: ["k-engine", "k-screen", "k-seed", "k-gym"],
    feedback: "at-end", order: "shuffle",
    pass: [{ right: { min: 3 } }, { slip: "doubted", max: 0 }]
  }
});
