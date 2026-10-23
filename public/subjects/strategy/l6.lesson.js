// Strategy, lesson 6: What you say no to (part 6). Question 4 and 5 of the way of thinking: a position lasts only if it carries a trade-off, and
// the look-alike that fails is the straddle, keeping two ways that pull against each other (research ST2; the something-for-everyone trap,
// ST10). The rule and why; the owner's wrong idea ("why not offer both?") refuted (P29); the field's own pair, Southwest beside Continental Lite
// (ST2, p. 44-45; P12), then an owner pair on one bakery; one worked plan (P10); a first group, two straddles on different surfaces back to back
// and then three look-alikes on one print shop (a trade-off, a straddle, an addition that fits), the deciding lines marked; a second group with
// nothing marked and lessons 1 to 5 mixed in (P22); the check: six new plans, 5 of 6, and no straddle missed. Porter's test is the pull
// (activities that conflict), not whether anything is given up, so an addition with no pull fits (as lesson 1's snow removal and lesson 9's
// growth that deepens). No line to tap: the learner weighs what is added, kept and dropped.
FC.lesson("strategy", {
  id: "l6", part: "6", title: "What you say no to", rev: 1, status: "draft",
  history: [{ rev: 1, date: "2026-10-23", change: "First version, built to the plan: a real trade-off told apart from a straddle by one question, does the new work pull against the old, and which side goes? An addition with no pull fits and is neither (after the reviews, docs/subjects/strategy/fixes-l1-14.md)." }],
  why: [
    "When a rival does well, the easy move is to offer what it offers too and keep everything else. It feels safe.",
    "Strategists see it as the usual way a good position is lost. Here you learn to tell when new work pulls against the old, and a real choice from a move that tries to be two businesses at once."
  ],
  flow: [
    { title: "Does the new work pull against the old?",
      show: [
        { kind: "prose", text: [
          "When a business adds something, a new offer, a new kind of customer, a rival’s idea, put one question to it: does the new work pull against what the position needs?",
          "Two activities pull against each other when doing more of one means less of the other: the same people, hours, room or promise would have to serve opposite ends at once. A two-minute taco line and plates made to order need the same cook at the same noon. A quiet room for work and live music need the same tables on the same days.",
          "No pull: the new work serves the same customers the same way, or fills hours the core leaves idle. It fits beside the old work, and nothing has to go.",
          "A pull, and the business drops one side: a real trade-off. It serves the side it kept better, whatever the side it dropped was worth.",
          "A pull, and the business keeps both: a straddle. It pays for both ways and serves neither fully. Trying to serve every kind of customer at once is the same mistake. Trimming a piece here and there while still serving both is still a straddle.",
          "What does not decide it: whether the move copies a rival (a business can copy a rival and still choose), how much the dropped side was worth, and early sales from the new offer.",
          "This sorts the move; whether it is wise is judged later.",
          "Why it matters: a rival can copy anything you add without giving something up. What you chose not to do is what a rival would have to give up to copy you."] },
        { kind: "prose", tone: "wrong", text: [
          "“Why turn anyone away? We will offer both and keep everyone.”",
          "Where the two pull against each other, offering both means paying for both, and neither kind of customer gets your best. Where there is a pull, choose a side."] }
      ] },
    { title: "Two airlines",
      show: [
        { kind: "pair",
          a: { kind: "prose", text: "Southwest Airlines chose not to serve meals or assign seats, and to make little use of travel agents, so its planes could turn around fast and fly cheaply and often. Its choices fit together, and it did well." },
          b: { kind: "prose", text: "Continental, a full-service airline, started Continental Lite to copy Southwest on some of its flights. It cut meals and first class on those flights and added flights at lower fares, but kept the travel agents, the mix of planes, baggage checking and seat assignments it needed for the rest of the airline. It lost heavily." },
          compare: "Both cut something. Southwest dropped one side of the pull. Continental cut a few pieces but kept running both ways at once, so it paid for both and matched Southwest on neither cost nor service: a straddle." }
      ] },
    { title: "Two moves for one bakery",
      show: [
        { kind: "pair",
          a: { kind: "prose", text: "Dana stops selling everyday bread on price and moves her bread baker to cakes made to order. She keeps only three loaves for her regulars." },
          b: { kind: "prose", text: "Dana adds full catering for Saturday parties, with the same bakers who make the Saturday cakes, and every bread and cake still on offer." },
          compare: "Both reach for something new, and in both the new work pulls on the same bakers. The first drops most of the bread: a trade-off. The second keeps everything: a straddle." }
      ] },
    { worked: "w6-gym" },
    { set: { items: [["p6-florist", "p6-autoshop"], ["p6-printshop", "p6-printshop2"], "p6-printshop3"], order: "listed", support: { shown: true } } },
    { set: { items: ["q6-tacos", "q6-bikes", "q6-diner", "q6-movers", "q6-daycare", "q6-pool", "r6-cafe"], order: "shuffle", mix: { from: ["l1", "l2", "l3", "l4", "l5"], share: 0.25 } } }
  ],
  check: {
    items: ["k6-bookshop", "k6-plumber", "k6-salon", "k6-tutors", "k6-hardware", "k6-grooming"],
    feedback: "at-end", order: "shuffle",
    pass: [{ right: { min: 5 } }, { slip: "serve-everyone", max: 0 }]
  }
});
