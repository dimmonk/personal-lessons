// Strategy, lesson 3: Value created, and who keeps it (part 3). Question 3 of the way of thinking, first half: where the money comes from
// (research ST7, the value stick). The four numbers of one sale and the three shares, drawn as the value stick (P30); the owner's wrong idea
// ("raising my price makes more value") refuted (P29); one worked sale (P10); made sales with the first step shown, then none (4.2); a look-alike
// pair, a price rise beside a better cake (P12); moves to sort, the deciding line marked, then not; a mixed group with lessons 1 and 2 (P22); the
// check: three new sales (every number within $1) and three new moves, 5 of 6. The plan's estimate before the exact answer is left out: the
// sums are single subtractions of whole dollars, where a rough answer adds nothing (judgement call).
FC.lesson("strategy", {
  id: "l3", part: "3", title: "Value created, and who keeps it", rev: 1, status: "draft",
  history: [{ rev: 1, date: "2026-10-23", change: "First version, built to the plan: the four numbers of a sale and the three shares on the value stick, and a move that grows the value told apart from one that only moves it." }],
  why: [
    "Every sale creates some value: the gap between what the thing is worth to the customer and what it takes to make it. Price only decides who keeps which part.",
    "Business schools teach strategy from this one picture. Here you learn to work out the value of a sale and each side’s share, and to tell a move that makes more value from one that only takes it from someone else."
  ],
  flow: [
    { title: "Four numbers for one sale",
      show: [
        { kind: "prose", text: [
          "Line up four numbers for one sale, from the top down.",
          "The most a customer would pay: what it is worth to them. The price: what they do pay. The cost: what you pay your suppliers and staff to make it. The least your suppliers and staff would take: below that, they would not sell to you or work for you.",
          "The value created is the most a customer would pay less the least suppliers and staff would take. It is split three ways. The customer keeps the most they would pay less the price. The business keeps the price less the cost. Suppliers and staff keep the cost less the least they would take.",
          "Why it matters: a business that only fights over the split takes from its customers or its suppliers, and they notice. A business that makes the whole stick longer has more to share, and more to keep."] },
        { kind: "figure", type: "stick", data: { caption: "A birthday cake, one sale", wtp: 30, price: 24, cost: 14, wts: 10 } },
        { kind: "prose", tone: "wrong", text: [
          "“If I raise my price, I make more value.”",
          "A higher price makes you more money only by taking it from what the customer kept. The value is the same; you have moved it to your side. Value grows only when the customer would pay more, or suppliers and staff would take less."] }
      ] },
    { worked: "w-cake" },
    { set: { items: [{ gen: "g-stick", n: 3 }], order: "listed", support: { leave: 2 } } },
    { title: "Grows the value, or only moves it",
      show: [
        { kind: "prose", text: [
          "To judge a move, see which number it changes.",
          "If it raises the most a customer would pay, or lowers the least suppliers and staff would take, it moves an end of the stick. The value grows.",
          "If it changes only the price or the cost, and both ends stay where they were, it only moves value from one side to another."] },
        { kind: "pair",
          a: { kind: "prose", text: "Raise the price of the cake $5. Parents would pay at most what they always would." },
          b: { kind: "prose", text: "Print the child’s photo on the cake. Parents would now pay up to $15 more." },
          compare: "Both bring more money per cake. Only the second makes the cake worth more to the parent, so only it grows the value. The first takes $5 of what the parent kept." }
      ] },
    { set: { items: [["p-photo", "p-raise"], ["p-week", "p-squeeze"]], order: "listed", support: { shown: true } } },
    { set: { items: [{ gen: "g-stick", n: 2 }, "q-mill", "q-tuesday", "q-guarantee", "q-wage"], order: "shuffle", mix: { from: ["l1", "l2"], share: 0.25 } } }
  ],
  check: {
    items: [{ gen: "g-stick", n: 3 }, "k-trays", "k-fee", "k-schedule"],
    feedback: "at-end", order: "shuffle",
    pass: [{ right: { min: 5 } }, { slip: "price-as-value", max: 0 }]
  }
});
