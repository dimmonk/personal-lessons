// Strategy, lesson 5: Find the core (part 5). Question 3 of the way of thinking, last part: which customers, products and ways of selling earn
// most (research ST4, ST8: the questions an established business asks of its own books first). The rule and why; the owner's wrong idea ("our
// biggest seller is our most important line") refuted (P29); one worked set of books (P10); a first group with the deciding rows marked, a second
// with nothing marked and lessons 1 to 4 mixed in (P22); the same work on the learner's own business, with a change and its day (P25, D6; the
// plan's engine gap 1, the work core); the check: four new sets of books, 3 of 4, and no line judged by its sales.
FC.lesson("strategy", {
  id: "l5", part: "5", title: "Find the core", rev: 1, status: "draft",
  history: [{ rev: 1, date: "2026-10-23", change: "First version, built to the plan: each line judged by what it earns after its direct cost, the core found and its share worked out, a line that loses money fixed or let go, and the same work on the learner's own business." }],
  why: [
    "Before growing a business, find out which of its lines really pay. In many businesses a few products, customers or ways of selling earn most of the profit, and a busy line can earn little or lose money.",
    "Strategists read the owner’s own books for this first. Here you learn to find the core in a table of lines, then do it on your own business."
  ],
  flow: [
    { title: "What each line earns",
      show: [
        { kind: "prose", text: [
          "A line is one product, one customer (or group of customers), or one way you sell: a shop, a website, a market stall. Compare lines of one kind at a time.",
          "For each line, take its direct cost from what it brought in. A direct cost is one the line causes: its materials, the staff time it takes, its delivery. Rent and the other costs every line shares stay out.",
          "What is left is what the line earns. Judge every line by that, never by its sales.",
          "The line that earns the most is the core. Keep it and grow it, before growing anything else. Its share is what it earns divided by what the lines that make money earn together; a line that loses money stays out of that sum.",
          "A line that loses money: if the core’s customers buy it along with the core, keep it, but fix its price or its cost. If nothing ties it to the core, let it go.",
          "Why it matters: growth spent on a line that earns little, or loses, takes time and money from the line that pays for everything."] },
        { kind: "prose", tone: "wrong", text: [
          "“Bread is our biggest seller, so bread is our most important line.”",
          "Sales are not earnings. Dana’s bread brings in the most and earns the least of her lines that make money, once its flour and the baker’s hours are paid. Judge each line by what it earns after its direct cost."] }
      ] },
    { worked: "w-books" },
    { set: { items: ["p-crews", "p-printers", "p-tutors"], order: "listed", support: { shown: true } } },
    { set: { items: ["q-stylists", "q-moves", "q-trays"], order: "shuffle", mix: { from: ["l1", "l2", "l3", "l4"], share: 0.25 } } },
    { own: "business", model: "w-books", work: "core" }
  ],
  check: {
    items: ["k-garage", "k-flowers", "k-pipes", "k-lunches"],
    feedback: "at-end", order: "shuffle",
    pass: [{ right: { min: 3 } }, { slip: "sales-not-profit", max: 0 }]
  }
});
