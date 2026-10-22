// Stats, lesson 8: Read the chart's numbers (part H). The chart form of moves 2 and 3: read where the scale starts, work out the real change from the
// numbers (typed, as a percent of where it started), look at the time the chart covers, then the verdict by the numbers, never by the picture. One
// worked example (a cut scale that makes 4% look like a doubling); the wrong idea named; a first group of four with the sentences marked; a second group
// of five with questions of the earlier lessons mixed in; and the check: five new charts, no help, 4 of 5 right and the real change right on 4.
FC.lesson("stats", {
  id: "l8", part: "H", title: "Read the chart’s numbers", rev: 1, status: "live",
  history: [{ rev: 1, date: "2026-10-22", change: "First version, built to the plan (where the scale starts, the real change typed from the numbers, the time the chart covers; fair charts mixed in)." }],
  why: [
    "A chart can make a small change look huge, or a return to normal look like a boom, without a single wrong number.",
    "Studies of charts found that knowing the trick does not stop it working: people still judge by how tall the bars look. What works is reading the numbers. Here you learn to do that every time."
  ],
  flow: [
    { title: "Read the numbers, not the picture",
      show: [
        { kind: "prose", text: [
          "First, look where the scale on the side starts. If it starts above zero, the bars or the line show only the top part of each number, so a small change looks big.",
          "Second, work out the real change from the numbers: the change, divided by where it started, times 100. From 200 to 210 is a change of 10; 10 ÷ 200 × 100 = 5, so up 5%. A fall works the same way: from 200 to 150 is down 50, and 50 ÷ 200 × 100 = 25, so down 25%. The box takes the size of the change, up or down, so you type 25 for both; read which way it went off the chart. No change is 0.",
          "Third, look at the time the chart covers. A line that starts at a low year shows a rise from the low, not from the usual level. Measure from a usual year, and look for earlier years where the claim needs them.",
          "Then check the claim against the numbers, as you did with a risk: “doubles” needs about 100% more and “triples” about 200% more; “by half” is about 50%, “by a third” about 33%, “by a quarter” about 25%, “by a fifth” about 20% and “by a tenth” about 10%, up or down. If the numbers fit, it holds up, even when the scale starts above zero. If they show less, it does not show it. If the chart and the text leave out what the claim needs, such as earlier years for “highest ever” or the size of each town for a total, you cannot tell; a chart that covers all the years there are can show “ever”.",
          "Tap the sentence that gives the numbers the claim rests on. If only the chart gives them, tap Not given."] },
        { kind: "prose", tone: "wrong", text: [
          "“If one bar is three times as tall, the number is three times as big.”",
          "Only when the scale starts at zero. On a scale that starts at 98, the numbers 100 and 104 make bars 2 and 6 steps tall: three times as tall, and only 4% bigger."] }
      ] },
    { worked: "w-basket" },
    { set: { items: ["p-fares", "p-westgate", "p-solar", "p-bayrent"], order: "listed", support: { shown: true } } },
    { set: { items: ["q-glenwood", "q-cedarhill", "q-water", "q-harbor", "q-stepup"], order: "shuffle", mix: { from: ["l2", "l3", "l5", "l6", "l7"], share: 0.3 } } }
  ],
  check: {
    items: ["k-crowds", "k-northstar", "k-adopt", "k-techmart", "k-pinelake"],
    feedback: "at-end", order: "shuffle",
    pass: [{ right: { min: 4 } }, { ask: "size", right: { min: 4 }, of: "the real change, to the nearest whole percent" }, { slip: "doubted", max: 1 }]
  }
});
