// Strategy, lesson 4: Who squeezes the profit (part 4). Question 3 of the way of thinking, second half: who takes the rest (research ST6). The
// five forces taught as one question, who takes the money and why, and the one to dig into; the owner's wrong idea ("it grows fast, so it is a
// good business to be in") refuted (P29, ST6's pitfall) and tested again on three reports; one worked report (P10); a first group with the line
// marked, a known case among them (Paccar, ST6); a second group with nothing marked and lessons 1 to 3 mixed in (P22); the check: six new
// reports, 5 of 6, and no fast growth taken for a good trade.
FC.lesson("strategy", {
  id: "l4", part: "4", title: "Who squeezes the profit", rev: 1, status: "draft",
  history: [{ rev: 1, date: "2026-10-23", change: "First version, built to the plan: the five forces as one question, who takes the money and why, with the strongest one named and fast growth not taken for a good trade." }],
  why: [
    "Two businesses can work equally hard and earn very different profits, because of who else gets a share: big customers, the suppliers they depend on, newcomers, other ways to meet the need, and the rivals already there.",
    "Strategists start a trade’s story by finding which of those takes the money. Here you learn to read a report on a trade and name the one that squeezes it most."
  ],
  flow: [
    { title: "Who takes the money, and why",
      show: [
        { kind: "prose", text: [
          "Five forces can take the profit out of a trade. Read the facts for the one that takes the most.",
          "Buyers: a few big customers buy most of what you sell, or can switch at will, so they push the price down.",
          "Suppliers: you depend on a few suppliers you cannot replace, so they push their price up.",
          "Newcomers: starting up is cheap and easy, so new businesses keep arriving and cut prices to win customers.",
          "Substitutes: another way to meet the same need (a phone instead of a printed photo) caps what customers will pay, or takes them away.",
          "Rivals: many businesses alike, already there, fight on price.",
          "Find the line that shows who takes the money, and why. Then name that one force and dig into it; a list of all five tells you nothing. Why it matters: you can only defend against the force that is actually taking your profit."] },
        { kind: "prose", tone: "wrong", text: [
          "“This trade is growing 30% a year, so it is a great business to be in.”",
          "Growth says nothing about who takes the profit. When starting up is easy, fast growth draws newcomers who cut prices, and the growth goes to them. Judge a trade by who takes the money."] }
      ] },
    { worked: "w-pharmacy" },
    { set: { items: ["p-trucks", "p-yoga", "p-hearing", "p-prints", "p-washes"], order: "listed", support: { shown: true } } },
    { set: { items: ["q-apps", "q-laundry", "q-dogs", "q-butter", "q-nails"], order: "shuffle", mix: { from: ["l1", "l2", "l3"], share: 0.25 } } }
  ],
  check: {
    items: ["k-buses", "k-solar", "k-travel", "k-dealers", "k-gas", "k-boxes"],
    feedback: "at-end", order: "shuffle",
    pass: [{ right: { min: 5 } }, { slip: "fast-growth-attractive", max: 0 }]
  }
});
