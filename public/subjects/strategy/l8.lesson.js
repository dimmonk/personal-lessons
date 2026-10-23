// Strategy, lesson 8: Will it last? (part 8). Question 4 of the way of thinking, its last part: what the difference gives, and what stops a copy
// (research ST9, the benefit and the barrier; ST3, fit as a barrier). The rule and why; the owner's wrong idea ("we were first, so we are ahead")
// refuted (P29); a contrast pair, a better oven beside the only land by town (P12); one worked story (P10); a first group, two differences nothing
// protects on different surfaces back to back, then a look-alike pair on one grooming van, and the field's own example, Vanguard, the deciding
// lines marked; a second group with nothing marked and lessons 1 to 7 mixed in (P22); the check: six new stories, 5 of 6, and nothing a rival can
// buy taken for an advantage that lasts.
FC.lesson("strategy", {
  id: "l8", part: "8", title: "Will it last?", rev: 1, status: "draft",
  history: [{ rev: 1, date: "2026-10-23", change: "First version, built to the plan: two questions, what the difference gives (a higher price, a lower cost, or neither) and what stops a rival getting the same; after the reviews, the barriers given as the common answers, not the whole list, with what customers would lose by leaving added (docs/subjects/strategy/fixes-l1-14.md)." }],
  why: [
    "Most things that make a business different this year are copied by next year: a new machine, a new dish, a new look.",
    "Strategists test an advantage with two questions: what does it give you, and what stops a rival getting it too? Here you learn to put both to any difference, your own included."
  ],
  flow: [
    { title: "What it gives, and what stops a copy",
      show: [
        { kind: "prose", text: [
          "First: what does the difference give the business? Either customers pay more here than at rivals for the same work, or it costs less here than at rivals to make it. If customers pay the same and nothing costs less, it gives nothing, however different it looks.",
          "Then, only if it gives something: what stops a rival getting the same? These are the common answers for a business like yours; there are others, such as being far bigger than any rival can soon become.",
          "Only this business has it, and a rival cannot get or make one: the last plot of land, a deal no one else can sign, a dock the rules allow no one else to build. Hard to get is not enough: a machine with a long waiting list reaches the rivals in the end.",
          "It rests on many activities that fit together, so a rival would have to copy all of them at once, and give up how it runs now. That stops only a rival that runs another way; one that already runs the same way has nothing to change.",
          "Customers would lose by leaving: their records and setup live with you, or you hold trust built over years. A rival can buy the same tools and still not have those.",
          "Or nothing: a rival can buy it, copy it, or get the same result another way.",
          "A lower cost can last too, when it comes from know-how built over years or from being much bigger than any rival; a saving any rival can buy does not.",
          "It lasts only with both: something it gives, and something that stops a copy. Why it matters: a difference a rival can buy is worth having, but it is a race, not a position. Plan as if it will be gone."] },
        { kind: "prose", tone: "wrong", text: [
          "“We were the first in town to get one, so we are ahead.”",
          "Being first stops no one. If a rival can buy the same thing from the same maker, the lead lasts only until it does. Look for what a rival cannot get."] }
      ] },
    { title: "Two differences",
      show: [
        { kind: "pair",
          a: { kind: "prose", text: "A bakery buys an oven that cuts the cost of each cake by $2. The maker sells it to anyone." },
          b: { kind: "prose", text: "A dog daycare owns the last open land in town, and the town allows no new dog businesses elsewhere. Owners pay $15 a day more for the grass." },
          compare: "Both give something: a lower cost, a higher price. Only the second has a barrier. The oven’s gain lasts until the other bakeries order one." }
      ] },
    { worked: "w8-kennel" },
    { set: { items: [["p8-oven", "p8-menu"], ["p8-calm", "p8-shampoo"], "p8-funds", "p8-records"], order: "listed", support: { shown: true } } },
    { set: { items: ["q8-fittings", "q8-software", "q8-color", "q8-exams", "q8-tortillas", "q8-espresso"], order: "shuffle", mix: { from: ["l1", "l2", "l3", "l4", "l5", "l6", "l7"], share: 0.25 } } }
  ],
  check: {
    items: ["k8-wifi", "k8-dock", "k8-vans", "k8-shifts", "k8-sign", "k8-pianos"],
    feedback: "at-end", order: "shuffle",
    pass: [{ right: { min: 5 } }, { slip: "copyable-as-lasting", max: 0 }]
  }
});
