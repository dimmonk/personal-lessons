// Strategy, lesson 4: Who squeezes the profit (part 4). Question 3 of the way of thinking, second half: who takes the rest (research ST6). The
// five forces taught as one question, who takes the money and why, and the one to dig into; the owner's wrong idea ("it grows fast, so it is a
// good business to be in") refuted (P29, ST6's pitfall) and tested on four reports, one where growth stays because starting up is hard; one
// worked report (P10); the same force in two trades (P12); a first group with the line marked, a look-alike pair on growth first, the known
// case of Paccar (ST6) among them; reports where two forces press and the facts say which takes more (ST6: dig into the most important force); a second group with nothing marked and lessons 1 to 3 mixed in (P22); the check: six new
// reports, 5 of 6, and no fast growth taken for a good trade.
FC.lesson("strategy", {
  id: "l4", part: "4", title: "Who squeezes the profit", rev: 1, status: "live",
  history: [{ rev: 1, date: "2026-10-23", change: "First version, built to the plan: the five forces as one question, who takes the money and why, with the strongest one named and fast growth not taken for a good trade. After two reviews: a middleman counted as a buyer, reports where two forces press and the facts say which takes more, growth that stays where starting up is hard beside growth that goes to newcomers, the same force shown in two trades, the Paccar case with the forces its source gives, and the solar and hearing aid reports replaced. After the reviews of all fourteen: stepping around a force taught before Paccar asks it, the settling line no longer the longest or the one with the number, every wrong force answered with what the report shows, buyers who switch at will practised, the car dealers replaced by a franchise whose owner sets the price of supplies, and the pharmacies’ buyers named as the drug-benefit companies." }],
  why: [
    "Two businesses can work equally hard and earn very different profits, because of who else gets a share: big customers, the suppliers they depend on, newcomers, other ways to meet the need, and the rivals already there.",
    "Strategists start a trade’s story by finding which of those takes the money. Here you learn to read a report on a trade and name the one that squeezes it most."
  ],
  flow: [
    { title: "Who takes the money, and why",
      show: [
        { kind: "prose", text: [
          "Five forces can take the profit out of a trade. Read the facts for the one that takes the most.",
          "Buyers: a few big customers buy most of what you sell, or can switch at will, so they push the price down. A middleman that brings you your customers, such as a delivery app or a chain store, counts as a buyer: it takes its cut between you and the people who use what you make.",
          "Suppliers: you depend on a few suppliers you cannot replace, so they push their price up.",
          "Newcomers: starting up is cheap and easy, so new businesses keep arriving and cut prices to win customers.",
          "Substitutes: another way to meet the same need (cooking at home instead of eating out) caps what customers will pay, or takes them away.",
          "Rivals: many businesses alike, already there, fight on price.",
          "Find the line that shows who takes the money, and why. Often more than one force presses: then compare how much each takes (a 30% cut of every order against a 4% rise in food prices) and name the bigger one. Dig into that force; a list of all five tells you nothing.",
          "The answer also points to a move: a business can choose customers or suppliers on whom the strongest force presses least, and so step around it. Why it matters: you can only defend against the force that is actually taking your profit."] },
        { kind: "prose", tone: "wrong", text: [
          "“This trade is growing 30% a year, so it is a great business to be in.”",
          "Growth says nothing about who takes the profit. When starting up is easy, fast growth draws newcomers who cut prices, and the growth goes to them. When starting up is hard, the growth can stay with the businesses already there. Judge a trade by who takes the money."] }
      ] },
    { worked: "w-pharmacy" },
    { title: "The same force in two trades",
      show: [
        { kind: "pair",
          a: { kind: "prose", text: "Pharmacies: three drug-benefit companies, acting for the insurance plans, pay for most prescriptions and decide the rate; a pharmacy that refuses it loses those customers." },
          b: { kind: "prose", text: "A sign maker: one hardware chain buys 70% of its signs, and each year names the price it will pay or goes elsewhere." },
          compare: "Medicine and signs look nothing alike, but the force is the same: a few big buyers take most of the output and decide the price. That is what to look for, whatever the trade sells." }
      ] },
    { set: { items: [["p-yoga", "p-lifts"], "p-trucks", "p-pool", "p-prints", "p-washes"], order: "listed", support: { shown: true } } },
    { set: { items: ["q-apps", "q-laundry", "q-linens", "q-dogs", "q-butter", "q-nails"], order: "shuffle", mix: { from: ["l1", "l2", "l3"], share: 0.25 } } }
  ],
  check: {
    items: ["k-buses", "k-detail", "k-travel", "k-sandwich", "k-coffee", "k-boxes"],
    feedback: "at-end", order: "shuffle",
    pass: [{ right: { min: 5 } }, { slip: "fast-growth-attractive", max: 0 }]
  }
});
