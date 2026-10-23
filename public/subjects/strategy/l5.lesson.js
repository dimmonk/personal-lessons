// Strategy, lesson 5: Find the core (part 5). Question 3 of the way of thinking, last part: which customers, products and ways of selling earn
// most (research ST4, ST8: the questions an established business asks of its own books first). The rule and why; the owner's wrong idea ("our
// biggest seller is our most important line") refuted (P29); one worked set of books (P10); a first group with the deciding rows marked in two pairs
// (P12: the biggest seller beside the core on two surfaces; a distinctive top earner beside a plain line that earns more), a second
// with nothing marked and lessons 1 to 4 mixed in (P22); the same work on the learner's own business, with a change and its day (P25, D6; the
// plan's engine gap 1, the work core); the check: four new sets of books, 3 of 4, and no line judged by its sales.
FC.lesson("strategy", {
  id: "l5", part: "5", title: "Find the core", rev: 1, status: "draft",
  history: [{ rev: 1, date: "2026-10-23", change: "First version, built to the plan: each line judged by what it earns after its direct cost, the core found and its share worked out, a line that loses money fixed or let go, and the same work on the learner's own business. After two reviews: the core is the line that is distinctive and earns the most, a direct cost one that stops with the line, every table one kind of line, the share counted of all the lines' earnings with losses taken off, pairs of tables, and the own work names the top line and asks of each losing line whether it comes with the core." }],
  why: [
    "Before growing a business, find out which of its lines really pay. In many businesses a few products, customers or ways of selling earn most of the profit, and a busy line can earn little or lose money.",
    "Strategists read the owner’s own books for this first. Here you learn to find the core in a table of lines, then do it on your own business."
  ],
  flow: [
    { title: "What each line earns",
      show: [
        { kind: "prose", text: [
          "A line is one product or service, one customer (or group of customers), or one way you sell: a shop, a website, a market stall. Compare lines of one kind at a time, and count each sale once.",
          "For each line, take its direct cost from what it brought in. A direct cost is one that would stop if the line stopped: its materials, the staff hours you would no longer pay, its delivery. Rent, and the other costs that stay whatever you drop, stay out.",
          "What is left is what the line earns. Judge every line by that, never by its sales.",
          "The core is the line that is both distinctive, what customers come to you for rather than to a rival, and earns the most. Usually that is the line that earns the most of all. But a line every rival sells the same way can earn well this year and still be competed away, as copied gains are: it is not the core. Then the core is the distinctive line that earns the most.",
          "Its share is what it earns divided by what all the lines of that kind earn together, the losses of losing lines taken off. With a losing line, the share can pass 100%: the part above 100% is what the losing lines cost the rest.",
          "Keep and grow the core before growing anything else; if it cannot grow, protect it.",
          "A line that loses money: if the core’s customers buy it along with the core, keep it, but fix its price or its cost. If nothing ties it to the core, let it go.",
          "Why it matters: growth spent on a line that earns little, or loses, takes time and money from the line that pays for everything. Rent and shared costs are paid from what the lines earn together, so a business can earn on most lines and still lose money overall; this step finds which lines pay, not whether the whole business does."] },
        { kind: "prose", tone: "wrong", text: [
          "“Bread is our biggest seller, so bread is our most important line.”",
          "Sales are not earnings. Dana’s bread brings in the most and earns the least of her lines that make money, once its flour and the baker’s hours are paid. Judge each line by what it earns after its direct cost."] }
      ] },
    { worked: "w-books" },
    { set: { items: [["p-crews", "p-printers"], ["p-tutors", "p-lube"]], order: "listed", support: { shown: true } } },
    { set: { items: ["q-stylists", "q-moves", "q-trays"], order: "shuffle", mix: { from: ["l1", "l2", "l3", "l4"], share: 0.25 } } },
    { own: "business", model: "w-books", work: "core" }
  ],
  check: {
    items: ["k-garage", "k-flowers", "k-pipes", "k-lunches"],
    feedback: "at-end", order: "shuffle",
    pass: [{ right: { min: 3 } }, { slip: "sales-not-profit", max: 0 }]
  }
});
