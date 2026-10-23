// Strategy, lesson 6: What you say no to (part 6). Question 4 and 5 of the way of thinking: a position lasts only if it carries a trade-off, and
// the look-alike that fails is the straddle, matching a rival's offer while keeping your own way (research ST2; the something-for-everyone trap,
// ST10). The rule and why; the owner's wrong idea ("why not offer both?") refuted (P29); the field's own pair, Southwest beside Continental Lite
// (ST2; P12), then an owner pair on one bakery; one worked story (P10); a first group, two straddles on different surfaces back to back and then a
// look-alike pair on one print shop, the deciding lines marked; a second group with nothing marked and lessons 1 to 5 mixed in (P22); the check:
// six new stories, 5 of 6, and no straddle taken for a trade-off. No line to tap: the learner weighs what is added, kept and dropped.
FC.lesson("strategy", {
  id: "l6", part: "6", title: "What you say no to", rev: 1, status: "draft",
  history: [{ rev: 1, date: "2026-10-23", change: "First version, built to the plan: a real trade-off told apart from a straddle by one question, what does the move give up?" }],
  why: [
    "When a rival does well, the easy move is to offer what it offers too, and keep everything you already do. It feels safe: nobody is turned away.",
    "Strategists see it as the usual way a good position is lost. Here you learn to find what a move gives up, and to tell a real choice from a move that tries to be two businesses at once."
  ],
  flow: [
    { title: "What does the move give up?",
      show: [
        { kind: "prose", text: [
          "Some things pull against each other. A gym full of coaches cannot also be the cheapest gym; a shop that waits for rush orders cannot fill its press with walk-in jobs.",
          "So when a business reaches for what another kind of business offers, or for a new kind of customer, put one question to it: what does it give up to do it?",
          "A real trade-off gives up the thing that pulls the other way, so the business serves the customers it chose better. It costs some sales, and the notes say which.",
          "A straddle gives up nothing. Both ways run at once on the same people, floor or kitchen, so the business pays the costs of both and serves neither fully. Trying to serve every kind of customer at once is the same mistake.",
          "Early sales from the new offer do not change the answer: they show it sells, not that anything was chosen.",
          "Why it matters: a rival can copy anything you add without giving something up. What you chose not to do is what a rival would have to give up to copy you."] },
        { kind: "prose", tone: "wrong", text: [
          "“Why turn anyone away? We will offer both and keep everyone.”",
          "Offering both means paying for both, on the same people and space, so neither kind of customer gets the best of you. A strategy chooses, and says what it will not do."] }
      ] },
    { title: "Two airlines",
      show: [
        { kind: "pair",
          a: { kind: "prose", text: "Southwest Airlines chose not to offer some of what full-service airlines offer, to fly cheaply and often. Its choices fit together, and it did well." },
          b: { kind: "prose", text: "Continental, a full-service airline, started Continental Lite to copy Southwest on some of its flights, while keeping its travel agents, its mix of planes and its full service. It did not work." },
          compare: "What did each give up? Southwest gave up parts of full service. Continental gave up nothing, so it paid for both ways at once and matched Southwest on neither cost nor service." }
      ] },
    { title: "Two moves for one bakery",
      show: [
        { kind: "pair",
          a: { kind: "prose", text: "Dana stops selling everyday bread on price and moves her bread baker to cakes made to order. She keeps only three loaves for her regulars." },
          b: { kind: "prose", text: "Dana adds full catering for parties, like the caterers in town, with the same bakers and every bread and cake still on offer." },
          compare: "Both reach for something new. The first gives up most of the bread to do cakes well: a trade-off. The second gives up nothing: a straddle." }
      ] },
    { worked: "w6-gym" },
    { set: { items: [["p6-florist", "p6-autoshop"], ["p6-printshop", "p6-printshop2"]], order: "listed", support: { shown: true } } },
    { set: { items: ["q6-tacos", "q6-bikes", "q6-diner", "q6-movers", "q6-daycare"], order: "shuffle", mix: { from: ["l1", "l2", "l3", "l4", "l5"], share: 0.25 } } }
  ],
  check: {
    items: ["k6-bookshop", "k6-plumber", "k6-salon", "k6-tutors", "k6-hardware", "k6-grooming"],
    feedback: "at-end", order: "shuffle",
    pass: [{ right: { min: 5 } }, { slip: "serve-everyone", max: 0 }]
  }
});
