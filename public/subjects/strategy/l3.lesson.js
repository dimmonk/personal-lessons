// Strategy, lesson 3: Value created, and who keeps it (part 3). Question 3 of the way of thinking, first half: where the money comes from
// (research ST7, the value stick). The four numbers of one sale and the three shares, drawn as the value stick (P30); the owner's wrong idea
// ("raising my price makes more value") refuted (P29); one worked sale (P10); made sales with the first step shown, then none (4.2); a look-alike
// pair, a price rise beside a better cake (P12); moves to sort (grows, shrinks, only moves), a look-alike pair first (a photo worth more than it
// costs beside gold leaf worth less), the deciding lines marked, then not; a mixed group with lessons 1 and 2 (P22); the check: three new sales
// (every number within $1) and four new moves, 6 of 7. The plan's estimate before the exact answer is left out: the
// sums are single subtractions of whole dollars, where a rough answer adds nothing (judgement call).
FC.lesson("strategy", {
  id: "l3", part: "3", title: "Value created, and who keeps it", rev: 1, status: "live",
  history: [{ rev: 1, date: "2026-10-23", change: "First version, built to the plan: the four numbers of a sale and the three shares on the value stick, and a move that grows the value told apart from one that only moves it. After two reviews: a move judged by what it adds to the work as well as what customers would pay, so a move can shrink the value; the cost told apart from the least staff would take; the moves judged without a tap. After the reviews of all fourteen: the Harvard line made exact, where an owner gets the two ends in real life, a supplier pushed told apart from one whose least fell, and the pay cut and half-price day worded so one reading holds." }],
  why: [
    "Every sale creates some value: the gap between what the thing is worth to the customer and what it takes to make it. Price only decides who keeps which part.",
    "A Harvard strategy professor built his course on this picture. Here you learn to work out the value of a sale and each side’s share, and to tell a move that makes more value from one that only takes it from someone else, or costs more than it is worth."
  ],
  flow: [
    { title: "Four numbers for one sale",
      show: [
        { kind: "prose", text: [
          "Line up four numbers for one sale, top down, on a bar we call the value stick.",
          "The most a customer would pay: what it is worth to them. The price: what they do pay. The cost: what you pay your suppliers and staff to make it. The least your suppliers and staff would take: below that, they would not sell to you or work for you.",
          "The cost and the least they would take are not the same: a cleaner paid $20 an hour who would have worked for $17 keeps $3 an hour more than she needed.",
          "In real life you estimate the two ends. For the most a customer would pay, put the question to customers, watch what they pay a rival for something like it, or try a higher price on a few. For the least staff would take, look at what the same work pays nearby; for a supplier, at what its other buyers pay.",
          "The value created is the most a customer would pay less the least suppliers and staff would take. It is split three ways. The customer keeps the most they would pay less the price. The business keeps the price less the cost. Suppliers and staff keep the cost less the least they would take. So a price above the cost and below the most the customer would pay leaves both the customer and the business a share.",
          "Why it matters: a business that only fights over the split takes from its customers or its suppliers, and they notice. A business that makes the whole stick longer has more to share, and more to keep."] },
        { kind: "figure", type: "stick", data: { caption: "A birthday cake, one sale", wtp: 30, price: 24, cost: 14, wts: 10 } },
        { kind: "prose", tone: "wrong", text: [
          "“If I raise my price, I make more value.”",
          "As long as every customer still buys, a higher price makes you more money only by taking it from what the customer kept. The value is the same; you have moved it to your side. Value grows only when the customer would pay more, by more than it costs to give them that, or suppliers and staff would take less."] }
      ] },
    { worked: "w-cake" },
    { set: { items: [{ gen: "g-stick", n: 3 }], order: "listed", support: { leave: 2 } } },
    { title: "Grows the value, or only moves it",
      show: [
        { kind: "prose", text: [
          "To judge a move, see which ends of the stick it moves, and by how much. The customers’ end is the most a customer would pay. The suppliers’ end is the least suppliers and staff would take, and it includes whatever the move adds to the work: more materials, more staff time.",
          "It grows the value when it raises what customers would pay by more than it adds to the work, or when it lowers what suppliers and staff would take.",
          "It shrinks the value when it adds more to the work than customers would pay for it.",
          "If it changes only the price or the cost paid, and both ends stay where they were, it only moves value from one side to another.",
          "A supplier paid less is the place to look twice. If you pushed it to take less, it would still have taken the old amount: its end of the stick did not move, and the value only moved. If something changed for it (a steady order saves it costs, a schedule staff like), so that it is now as well off with less, its end moved down, and the value grew."] },
        { kind: "pair",
          a: { kind: "prose", text: "Raise the price of the cake $5. Parents would pay at most what they always would." },
          b: { kind: "prose", text: "Print the child’s photo on the cake. Parents would now pay up to $15 more, and the ink and ten minutes of work add $3." },
          compare: "Both can bring more money per cake. Only the second makes the cake worth more to the parent than it adds to the work ($15 against $3), so only it grows the value. The first takes $5 of what the parent kept." }
      ] },
    { set: { items: [["p-photo", "p-gold"], ["p-week", "p-squeeze"], "p-raise"], order: "listed", support: { shown: true } } },
    { set: { items: [{ gen: "g-stick", n: 2 }, "q-mill", "q-tuesday", "q-guarantee", "q-polish", "q-wage"], order: "shuffle", mix: { from: ["l1", "l2"], share: 0.25 } } }
  ],
  check: {
    items: [{ gen: "g-stick", n: 3 }, "k-trays", "k-fee", "k-schedule", "k-bandana"],
    feedback: "at-end", order: "shuffle",
    pass: [{ right: { min: 6 } }, { slip: "price-as-value", max: 0 }]
  }
});
