// Strategy, lesson 6 "What you say no to": the worked plan, the questions of the groups, the check and four held back for the review.
// The one rule (research ST2, Porter's test): when a business adds something, ask whether the new work pulls against what its position needs,
// that is, whether the same people, hours, room or promise would have to serve opposite ends at once. If it pulls and the business drops one
// side, it is a real trade-off (whether it copies a rival or not, and whatever it costs). If it pulls and the business keeps both, it is a
// straddle: it pays for both and serves neither fully (serving every kind of customer at once is the same failure). If it does not pull (the
// same customers served the same way, or hours the core leaves idle), it fits beside the old work and is neither. Whether a rival is copied,
// whether a lost slice of sales is named, and early sales do not decide it. Every plan is an owner's own; invented businesses.
(() => {
  const ONLY = ["tradeoff", "straddle", "fits"];
  // what follows a wrong pick, by the right answer and then the pick
  const THEN = {
    tradeoff: {
      straddle: "One side of the pull is dropped, so the business no longer pays for both.",
      fits: "The new work does pull against the old, and that is why one side had to go."
    },
    straddle: {
      tradeoff: "Nothing on either side of the pull is dropped: both run at once on the same people, hours or space.",
      fits: "The new work pulls against the old: the same people, hours or space would have to serve both at once."
    },
    fits: {
      tradeoff: "Nothing pulls, so nothing had to be dropped: the new work fits beside the old.",
      straddle: "Nothing pulls: the new work uses hours the core leaves idle or serves the same customers the same way."
    }
  };
  const SLIP = { tradeoff: { straddle: "missed-tradeoff", fits: "missed-tradeoff" }, straddle: { tradeoff: "serve-everyone", fits: "serve-everyone" } };
  // a plan: whose, its lines ([id, text]), the verdict, the lines marked after the answer
  function story({ id, from, detail, lines, verdict, deciding, reason, then = {}, steps }) {
    const wrong = ONLY.filter(v => v !== verdict);
    return {
      id, strand: "trade-offs", facets: { scale: "owner" },
      blocks: [{ kind: "message", id: "notes", form: "note", from, detail, lines: lines.map(([lid, text]) => ({ id: lid, text })) }],
      asks: [
        { id: "verdict", kind: "choose", prompt: "Does the new work pull against the old, and if so, which side goes?", from: "verdict", only: ONLY, right: verdict,
          then: Object.fromEntries(wrong.map(w => [w, then[w] || THEN[verdict][w]])), ...(SLIP[verdict] ? { slips: SLIP[verdict] } : {}) }
      ],
      ...(steps ? { steps } : {}),
      deciding, reason
    };
  }

  FC.items("strategy", [
    // ----- the worked plan: a straddle that sells well at first -----
    story({
      id: "w6-gym", from: "Mark’s plan for his gym", detail: "Written in February",
      lines: [
        ["c1", "Our gym is for serious lifters: heavy racks, coaches on the floor all day, $60 a month."],
        ["c2", "A $15-a-month budget gym opened down the road and 40 of our members left for it."],
        ["c3", "So we added a $15 plan with no coaching, for people who just want a cheap gym. 80 people joined in the first month."],
        ["c4", "The coaches, the $60 plan and every rack stay, and both kinds of member share the same floor at the same hours."]],
      verdict: "straddle", deciding: ["c3", "c4"],
      steps: [
        { id: "added", does: "Find the new work.", working: "A $15 plan with no coaching, for people who want a cheap gym." },
        { id: "pull", does: "Does it pull against what the position needs?", working: "Yes. Lifters pay for room at the racks and a coach’s eye; a cheap plan pays only if the floor is packed and nobody is paid to coach. The same floor and the same hours would have to do both." },
        { id: "verdict", does: "Which side goes?", working: "Neither: the coaches, the racks and the $60 plan all stay beside the $15 plan. The 80 sign-ups say the plan sells, not that anything was chosen. Both sides kept: a straddle.", ask: "verdict" }],
      reason: "A packed cheap floor and coached lifting need the same floor at the same hours for opposite ends, and Mark kept both. He pays for coaches the $15 members do not use and crowds his lifters: a straddle, however well the plan sold in its first month."
    }),

    // ----- the first group (the deciding lines marked) -----
    // two straddles on different surfaces, back to back
    story({
      id: "p6-florist", from: "Ana’s plan for her flower shop", detail: "Written in September",
      lines: [
        ["c1", "We do flowers for weddings, each one planned with the couple over months."],
        ["c2", "The supermarket sells cheap bunches, so we now sell $10 bunches by the door too."],
        ["c3", "The same two florists plan the weddings and make the bunches, in the same workroom, on the same Saturdays."]],
      verdict: "straddle", deciding: ["c2", "c3"],
      reason: "Cheap bunches pay only in volume; weddings need the florists’ slow attention, and the same two people and Saturdays must serve both. Ana dropped neither: a straddle."
    }),
    story({
      id: "p6-autoshop", from: "Ben’s plan for his repair shop", detail: "Written in January",
      lines: [
        ["c1", "We fix older cars that the dealers no longer want to work on; a hard repair can take a mechanic a whole day."],
        ["c2", "Drivers keep asking for oil changes while they wait, so we are adding a quick oil-change lane."],
        ["c3", "Our three mechanics will take turns in the lane, stopping their repairs whenever a car pulls in."]],
      verdict: "straddle", deciding: ["c2", "c3"],
      reason: "A quick lane needs a mechanic free the moment a car pulls in; a hard repair needs a mechanic who does not stop. The same three mechanics would do both, and Ben drops neither: a straddle, though he copies no rival."
    }),
    // a look-alike on one surface: the same print shop, three moves
    story({
      id: "p6-printshop", from: "Omar’s plan for his print shop", detail: "Written in April",
      lines: [
        ["c1", "Three law firms earn us most of our profit; they need court papers printed the same day."],
        ["c2", "Walk-in jobs often tie up the press when a firm’s rush order comes in."],
        ["c3", "From May we no longer take walk-in jobs, so the press is always free for the law firms."]],
      verdict: "tradeoff", deciding: ["c2", "c3"],
      reason: "Walk-in jobs and rush orders need the same press at the same moment, and Omar drops the walk-ins. One side of the pull given up: a real trade-off."
    }),
    story({
      id: "p6-printshop2", from: "Omar’s plan for his print shop", detail: "Written in October",
      lines: [
        ["c1", "Three law firms earn us most of our profit; they need court papers printed the same day."],
        ["c2", "Online printers have taken many of the town’s wedding invitations, so we will win them back with our own designs."],
        ["c3", "The invitations will run on the same press, fitted in around the firms’ rush orders."]],
      verdict: "straddle", deciding: ["c2", "c3"],
      reason: "Invitations and rush orders need the same press at the same moment, and Omar keeps both. Both sides of the pull kept: a straddle."
    }),
    story({
      id: "p6-printshop3", from: "Omar’s plan for his print shop", detail: "Written in November",
      lines: [
        ["c1", "Three law firms earn us most of our profit; they need court papers printed the same day."],
        ["c2", "The firms ask us to file the papers at the court for them as well, for a fee."],
        ["c3", "Our driver already takes their papers to the court; the press and the walk-in ban stay as they are."]],
      verdict: "fits", deciding: ["c2", "c3"],
      reason: "Filing serves the same firms, done by the driver already on the way to the court, and takes nothing from the press. Nothing pulls, so nothing has to go: it fits beside the old work."
    }),

    // ----- the second group (nothing marked) -----
    story({
      id: "q6-tacos", from: "Carlos’s plan for his taco truck", detail: "Written in May",
      lines: [
        ["c1", "We park outside the factories at lunch: five tacos, ready in two minutes, for workers with a 30-minute break."],
        ["c2", "Office workers walk past and say they want salads and wraps."],
        ["c3", "So we added salads, wraps and breakfast plates, and the same two of us cook everything in the one truck."]],
      verdict: "straddle", deciding: ["c1", "c3"],
      reason: "A two-minute line needs a short menu made ahead; salads and plates made to order need time at the same noon, from the same two cooks. Carlos kept both: a straddle."
    }),
    story({
      id: "q6-bikes", from: "Leo’s plan for his bike shop", detail: "Written in March",
      lines: [
        ["c1", "Our best customers are road racers who want their bikes fitted and tuned by hand."],
        ["c2", "We built a fitting room where the kids’ bikes and toys used to stand."],
        ["c3", "Parents who came in for a kids’ bike now shop elsewhere; that was about a fifth of our sales."]],
      verdict: "tradeoff", deciding: ["c2", "c3"],
      reason: "The floor could hold the fitting room or the kids’ bikes, not both, and Leo let the kids’ bikes go. One side of the pull given up: a real trade-off."
    }),
    story({
      id: "q6-diner", from: "Sam’s plan for his diner", detail: "Written in October",
      lines: [
        ["c1", "Since the steakhouse opened, some evening tables are empty; evenings were about a fifth of our sales."],
        ["c2", "So we added steaks and a wine list at dinner."],
        ["c3", "Breakfast is still served all day at the counter, by the same cook on the same grill, and breakfast orders keep that grill full until we close."]],
      verdict: "straddle", deciding: ["c2", "c3"],
      reason: "Steaks and all-day breakfast need the same cook and grill at the same dinner hour, and Sam dropped neither. The fifth of sales is what he lost, not what he gave up: a straddle."
    }),
    story({
      id: "q6-movers", from: "Hal’s plan for his moving company", detail: "Written in August",
      lines: [
        ["c1", "Piano owners pay us more than double our house-move rate."],
        ["c2", "We will move only pianos and other heavy, fragile things, with the special gear they need."],
        ["c3", "From now on we turn down ordinary house moves, which kept the crews rushing from job to job."]],
      verdict: "tradeoff", deciding: ["c2", "c3"],
      reason: "Rushed house moves and careful piano moves pull on the same crews, and Hal drops the house moves. One side given up: a real trade-off."
    }),
    story({
      id: "q6-daycare", from: "Jill’s plan for her daycare", detail: "Written in June",
      lines: [
        ["c1", "The hospital’s own daycare across town opens 5 a.m. to 9 p.m. and has a waiting list of nurses."],
        ["c2", "We will do the same: open 5 a.m. to 9 p.m. for nurses on shifts."],
        ["c3", "Our staff hours are full, so the half-day places most other families want are gone."]],
      verdict: "tradeoff", deciding: ["c2", "c3"],
      reason: "Long shift days and half-day places need the same staff hours, and Jill drops the half-days. She copies the hospital’s daycare, but she gives up one side of the pull: a real trade-off."
    }),
    story({
      id: "q6-pool", from: "Gus’s plan for his pool-cleaning business", detail: "Written in October",
      lines: [
        ["c1", "Homeowners pay us to keep their pools clean from May to September."],
        ["c2", "From November to March our two techs have almost no work."],
        ["c3", "We will add hot-tub care in those months, for the same homeowners, most of whom have one."]],
      verdict: "fits", deciding: ["c2", "c3"],
      reason: "Hot-tub care uses the techs in months the pools leave idle, for the same homeowners, and takes nothing from the summer work. Nothing pulls: it fits beside the old work."
    }),

    // ----- the check -----
    story({
      id: "k6-bookshop", from: "Nina’s plan for her bookshop", detail: "Written in February",
      lines: [
        ["c1", "Our customers are collectors who come for rare first editions and an hour of talk about them."],
        ["c2", "We will also stock this week’s best sellers at online prices."],
        ["c3", "The rare books stay where they are; a best-seller table goes in the middle of the same room, and the same two staff ring up both."]],
      verdict: "straddle", deciding: ["c1", "c3"],
      reason: "Best sellers at online prices pay only with quick, busy sales; collectors pay for slow talk with the same two staff. Nina keeps both in one room: a straddle."
    }),
    story({
      id: "k6-plumber", from: "Ray’s plan for his plumbing business", detail: "Written in July",
      lines: [
        ["c1", "Our best work is fixing leaks fast for restaurants, at any hour."],
        ["c2", "Bathroom remodels tie a plumber up for weeks, and they paid well last year."],
        ["c3", "From now on we turn remodels down, so two plumbers are always free for a restaurant’s call."]],
      verdict: "tradeoff", deciding: ["c2", "c3"],
      reason: "Remodels hold plumbers for weeks that the restaurants need free, and Ray drops the remodels though they paid well. One side given up: a real trade-off."
    }),
    story({
      id: "k6-salon", from: "Grace’s plan for her salon", detail: "Written in November",
      lines: [
        ["c1", "Our clients book a long color appointment months ahead; last year we sent away walk-ins worth about $40,000."],
        ["c2", "People ask at the door for a quick cut, so we will take $15 walk-in haircuts."],
        ["c3", "The walk-ins will be fitted in between color clients, on the same chairs."]],
      verdict: "straddle", deciding: ["c2", "c3"],
      reason: "Walk-ins need a chair free at any moment; long color work keeps the chairs booked months ahead. Grace keeps both on the same chairs: a straddle, though no rival is copied."
    }),
    story({
      id: "k6-tutors", from: "Kim’s plan for her tutoring business", detail: "Written in August",
      lines: [
        ["c1", "The exam-prep chain in the city tutors only for the state math exams, and it is full."],
        ["c2", "We will do the same and tutor only for those exams, with tutors who have graded them."],
        ["c3", "Our reading, science and college-entrance tutors go part-time elsewhere, and so do their families."]],
      verdict: "tradeoff", deciding: ["c2", "c3"],
      reason: "Tutors who know one exam deeply and tutors for every subject pull on the same hours and hiring, and Kim drops every other subject. She copies the chain, but she gives up one side: a real trade-off."
    }),
    story({
      id: "k6-hardware", from: "Tom’s plan for his hardware store", detail: "Written in April",
      lines: [
        ["c1", "Builders come to us at 6 a.m. for advice and for odd parts the big stores do not carry."],
        ["c2", "We are matching the big stores’ low prices on paint and lumber, to win their weekend shoppers."],
        ["c3", "To pay for the low prices we will clear one short shelf of odd parts; every other odd part, the advice desk and the 6 a.m. opening stay."]],
      verdict: "straddle", deciding: ["c2", "c3"],
      reason: "Low prices for weekend shoppers and odd parts with advice for builders pull on the same shelves and staff. Tom clears one shelf but keeps serving builders: both sides kept, each weaker. A straddle, though something was cut."
    }),
    story({
      id: "k6-grooming", from: "Rosa’s plan for her grooming van", detail: "Written in June",
      lines: [
        ["c1", "Our customers own old or nervous dogs, groomed calmly at home, four dogs a day."],
        ["c2", "Owners ask where to buy the calming shampoo and brush we use."],
        ["c3", "We will sell them in the van after each groom, to the same owners."]],
      verdict: "fits", deciding: ["c2", "c3"],
      reason: "Selling the shampoo serves the same owners at the end of a visit that happens anyway, and takes no time from the dogs. Nothing pulls: it fits beside the old work."
    }),

    // ----- held back for the review -----
    story({
      id: "r6-bakery", from: "Dana’s plan for her bakery", detail: "Written in March",
      lines: [
        ["c1", "Our cakes are made to order for birthdays and weddings, mostly for Saturdays."],
        ["c2", "We are adding full catering for Saturday parties, with the same three bakers and every cake still on offer."]],
      verdict: "straddle", deciding: ["c2"],
      reason: "Catering and cakes made to order need the same three bakers on the same Saturdays, and Dana keeps both: a straddle."
    }),
    story({
      id: "r6-lawn", from: "Luis’s plan for his landscaping crew", detail: "Written in December",
      lines: [
        ["c1", "Our garden design customers want one crew that knows their garden."],
        ["c2", "We turn down cheap weekly mowing for new customers, so each crew keeps its own gardens."]],
      verdict: "tradeoff", deciding: ["c2"],
      reason: "Mowing rounds and one crew per garden pull on the same crews’ days, and Luis drops the mowing: a real trade-off."
    }),
    story({
      id: "r6-cafe", from: "Priya’s plan for her cafe", detail: "Written in May",
      lines: [
        ["c1", "We are the quiet cafe where people work from home on Mondays and Fridays."],
        ["c2", "We will add live music on those days to draw the crowd from the bar next door, at the same tables."]],
      verdict: "straddle", deciding: ["c2"],
      reason: "Music for a crowd and quiet for work need the same tables on the same days, and Priya keeps both: a straddle."
    }),
    story({
      id: "r6-movers", from: "Hal’s plan for his moving company", detail: "Written in January",
      lines: [
        ["c1", "We move pianos for owners who pay double for nothing damaged."],
        ["c2", "Piano owners ask us to store their pianos over the winter; our warehouse has room, and the same crews would move them in and out."]],
      verdict: "fits", deciding: ["c2"],
      reason: "Storage serves the same piano owners with the same crews and care, and takes nothing from the moves: it fits beside the old work."
    })
  ]);
})();
