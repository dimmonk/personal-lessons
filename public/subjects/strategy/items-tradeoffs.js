// Strategy, lesson 6 "What you say no to": the worked notes, the questions of the groups, the check and three held back for the review.
// The one rule (research ST2, ST10): when a business reaches for what another kind of business offers, or for a new kind of customer, ask what
// it gives up to do it. A real trade-off chooses: it gives up the thing that pulls the other way, so it serves the customers it chose better,
// even when that costs it sales. A straddle keeps both ways at once, on the same people, floor or kitchen, so it carries the costs of both and
// serves neither fully; trying to serve every kind of customer at once is the same failure. Early sales from the added offer do not change the
// answer. No story has one line that settles it: the learner reads what is added, what is kept and what is dropped. Owner-run, invented.
(() => {
  const ONLY = ["tradeoff", "straddle"];
  const THEN = {
    tradeoff: "Something that pulls the other way is given up, so the business serves the customers it chose better, whatever it costs in sales.",
    straddle: "Nothing that pulls the other way is given up: both ways run at once on the same people and space, with the costs of both."
  };
  const SLIP = { tradeoff: { straddle: "missed-tradeoff" }, straddle: { tradeoff: "serve-everyone" } };
  // a story: whose notes, its lines ([id, text]), the verdict, the lines marked after the answer
  function story({ id, from, detail, lines, verdict, deciding, reason, then, steps }) {
    const other = ONLY.find(v => v !== verdict);
    return {
      id, strand: "trade-offs", facets: { scale: "owner" },
      blocks: [{ kind: "message", id: "notes", form: "note", from, detail, lines: lines.map(([lid, text]) => ({ id: lid, text })) }],
      asks: [
        { id: "verdict", kind: "choose", prompt: "What does this move give up, and so what is it?", from: "verdict", only: ONLY, right: verdict,
          then: { [other]: then || THEN[verdict] }, slips: SLIP[verdict] }
      ],
      ...(steps ? { steps } : {}),
      deciding, reason
    };
  }

  FC.items("strategy", [
    // ----- the worked notes: a straddle that sells well at first -----
    story({
      id: "w6-gym", from: "Mark’s notes on his gym", detail: "Written in February",
      lines: [
        ["c1", "Our gym is for serious lifters: heavy racks, coaches on the floor all day, $60 a month."],
        ["c2", "A $10-a-month budget gym opened down the road and 40 of our members left for it."],
        ["c3", "So we added a $15 plan with no coaching, for people who just want a cheap gym. 80 people joined in the first month."],
        ["c4", "The coaches, the $60 plan and every rack stay, and both kinds of member share the same floor at the same hours."]],
      verdict: "straddle", deciding: ["c3", "c4"],
      steps: [
        { id: "added", does: "Find what the move reaches for.", working: "The $15 plan with no coaching is the budget gym’s offer, for a new kind of customer: people who want a cheap gym." },
        { id: "given", does: "Find what it gives up to do it.", working: "Nothing: the coaches, the $60 plan and the racks all stay, on the same floor at the same hours. The 80 sign-ups say the plan sells, not that anything was chosen." },
        { id: "verdict", does: "Decide.", working: "The gym pays for coaches the $15 members do not use, and its lifters now share a crowded floor. It keeps both ways at once: a straddle.", ask: "verdict" }],
      reason: "The gym added the budget gym’s offer and gave up nothing of its own way: coaches, racks and the $60 plan stay on the same floor. It carries the costs of both and serves neither fully, so it is a straddle, however well the plan sold in its first month."
    }),

    // ----- the first group (the deciding lines marked) -----
    // two straddles on different surfaces, back to back
    story({
      id: "p6-florist", from: "Ana’s notes on her flower shop", detail: "Written in September",
      lines: [
        ["c1", "We do flowers for weddings, each one planned with the couple over months."],
        ["c2", "The supermarket sells cheap bunches, so we now sell $10 bunches by the door too."],
        ["c3", "The same two florists plan the weddings and make the bunches, in the same workroom."]],
      verdict: "straddle", deciding: ["c2", "c3"],
      reason: "Ana reached for the supermarket’s cheap bunches and gave up none of the wedding work: the same two florists now do both. That is a straddle."
    }),
    story({
      id: "p6-autoshop", from: "Ben’s notes on his repair shop", detail: "Written in January",
      lines: [
        ["c1", "We fix older cars that the dealers no longer want to work on."],
        ["c2", "We are adding a quick oil-change lane, like the chain shops, to win their drive-in customers."],
        ["c3", "Our three mechanics will take turns in the lane between their usual repairs."]],
      verdict: "straddle", deciding: ["c2", "c3"],
      reason: "The shop reached for the chain shops’ drive-in customers and gave up none of its repairs: the same mechanics run the lane between jobs. That is a straddle."
    }),
    // a look-alike on one surface: the same print shop, two moves
    story({
      id: "p6-printshop", from: "Omar’s notes on his print shop", detail: "Written in April",
      lines: [
        ["c1", "Three law firms earn us most of our profit; they need court papers printed the same day."],
        ["c2", "Walk-in jobs often tie up the press when a firm’s rush order comes in."],
        ["c3", "From May we no longer take walk-in jobs, about $40,000 a year, so the press is always free for the law firms."]],
      verdict: "tradeoff", deciding: ["c3"],
      reason: "Omar gives up the walk-in jobs, $40,000 a year, because they pull against the law firms’ rush orders. That is a real trade-off."
    }),
    story({
      id: "p6-printshop2", from: "Omar’s notes on his print shop", detail: "Written in October",
      lines: [
        ["c1", "Three law firms earn us most of our profit; they need court papers printed the same day."],
        ["c2", "Online printers have taken many of the town’s wedding invitations, so we will win them back with designs and cheaper prices."],
        ["c3", "The invitations will run on the same press, fitted in around the firms’ rush orders."]],
      verdict: "straddle", deciding: ["c2", "c3"],
      reason: "Omar reaches for the online printers’ customers and gives up nothing: the invitations share the press with the firms’ rush orders. That is a straddle."
    }),

    // ----- the second group (nothing marked) -----
    story({
      id: "q6-tacos", from: "Carlos’s notes on his taco truck", detail: "Written in May",
      lines: [
        ["c1", "We park outside the factories at lunch: five tacos, ready in two minutes."],
        ["c2", "Office workers walk past and say they want salads and wraps."],
        ["c3", "So we added burgers, salads and breakfast plates, and the same two of us cook everything in the one truck."],
        ["c4", "The line now takes about six minutes."]],
      verdict: "straddle", deciding: ["c3", "c4"],
      reason: "The truck added food for every kind of customer and gave up nothing, so the factory workers’ two-minute tacos now take six. That is a straddle."
    }),
    story({
      id: "q6-bikes", from: "Leo’s notes on his bike shop", detail: "Written in March",
      lines: [
        ["c1", "Our best customers are road racers who want their bikes fitted and tuned by hand."],
        ["c2", "We built a fitting room where the kids’ bikes and toys used to stand."],
        ["c3", "Parents who came in for a kids’ bike now shop elsewhere; that was about a fifth of our sales."]],
      verdict: "tradeoff", deciding: ["c2", "c3"],
      reason: "The fitting room took the place of kids’ bikes and toys, so Leo gave up the parents, a fifth of his sales, to serve the racers better. That is a real trade-off."
    }),
    story({
      id: "q6-diner", from: "Sam’s notes on his diner", detail: "Written in October",
      lines: [
        ["c1", "Since the steakhouse opened, some of our evening tables are empty."],
        ["c2", "So we added steaks and a wine list at dinner, like the steakhouse."],
        ["c3", "Breakfast is still served all day at the counter, by the same cook."]],
      verdict: "straddle", deciding: ["c2", "c3"],
      reason: "The diner reached for the steakhouse’s diners and gave up nothing: all-day breakfast and the same cook stay. That is a straddle."
    }),
    story({
      id: "q6-movers", from: "Hal’s notes on his moving company", detail: "Written in August",
      lines: [
        ["c1", "Piano owners pay us more than double our house-move rate."],
        ["c2", "We will move only pianos and other heavy, fragile things, with the special gear they need."],
        ["c3", "Ordinary house moves were about half of last year’s jobs."]],
      verdict: "tradeoff", deciding: ["c2", "c3"],
      reason: "Hal gives up ordinary house moves, half of last year’s jobs, to serve the piano owners he chose. That is a real trade-off."
    }),
    story({
      id: "q6-daycare", from: "Jill’s notes on her daycare", detail: "Written in June",
      lines: [
        ["c1", "Most of our families are nurses who work early and late shifts."],
        ["c2", "We will open at 5 a.m. and close at 9 p.m. to fit their shifts."],
        ["c3", "Our staff hours are full, so the half-day places most other families want are gone."]],
      verdict: "tradeoff", deciding: ["c2", "c3"],
      reason: "To cover the nurses’ shifts Jill gives up the half-day places most other families want. That is a real trade-off."
    }),

    // ----- the check -----
    story({
      id: "k6-bookshop", from: "Nina’s notes on her bookshop", detail: "Written in February",
      lines: [
        ["c1", "Our customers are collectors who come for rare first editions."],
        ["c2", "We will also stock this week’s best sellers at online prices, to win the shoppers who buy online."],
        ["c3", "The best sellers go on the front tables, and the rare books move to the back room with the same two staff."]],
      verdict: "straddle", deciding: ["c2", "c3"],
      reason: "Nina reaches for the online sellers’ shoppers and gives up nothing: the rare books and the same staff stay, only moved to the back. That is a straddle."
    }),
    story({
      id: "k6-plumber", from: "Ray’s notes on his plumbing business", detail: "Written in July",
      lines: [
        ["c1", "Our best work is fixing leaks fast for restaurants, at any hour."],
        ["c2", "Bathroom remodels tie a plumber up for weeks, and they paid well last year."],
        ["c3", "From now on we turn remodels down, so two plumbers are always free for a restaurant’s call."]],
      verdict: "tradeoff", deciding: ["c2", "c3"],
      reason: "Ray gives up remodels, though they paid well, because they pull plumbers away from the restaurants he chose. That is a real trade-off."
    }),
    story({
      id: "k6-salon", from: "Grace’s notes on her salon", detail: "Written in November",
      lines: [
        ["c1", "Our clients book a long color appointment months ahead."],
        ["c2", "We are adding $15 walk-in haircuts, like the chain salon in the mall."],
        ["c3", "The walk-ins will be fitted in between color clients, on the same chairs."]],
      verdict: "straddle", deciding: ["c2", "c3"],
      reason: "Grace reaches for the chain salon’s walk-ins and gives up nothing: they share the chairs with the color clients. That is a straddle."
    }),
    story({
      id: "k6-tutors", from: "Kim’s notes on her tutoring business", detail: "Written in August",
      lines: [
        ["c1", "Parents of students taking the state’s high school math exams say no one knows those exams as well as we do."],
        ["c2", "We will tutor only for those exams."],
        ["c3", "Reading, science and college-entrance tutoring end this summer, and so do those families’ fees."]],
      verdict: "tradeoff", deciding: ["c2", "c3"],
      reason: "Kim gives up every other kind of tutoring, and those families’ fees, to serve the exam students she chose. That is a real trade-off."
    }),
    story({
      id: "k6-hardware", from: "Tom’s notes on his hardware store", detail: "Written in April",
      lines: [
        ["c1", "Builders come to us for advice and for odd parts the big stores do not carry."],
        ["c2", "We are matching the big stores’ low prices on paint and lumber, to win their weekend shoppers."],
        ["c3", "The advice desk, every odd part and our early hours for builders all carry on."]],
      verdict: "straddle", deciding: ["c2", "c3"],
      reason: "Tom reaches for the big stores’ shoppers and gives up nothing he does for builders. That is a straddle."
    }),
    story({
      id: "k6-grooming", from: "Rosa’s notes on her grooming van", detail: "Written in June",
      lines: [
        ["c1", "Our customers own old or nervous dogs, groomed calmly at home."],
        ["c2", "We will groom four dogs a day, each for as long as it needs."],
        ["c3", "That leaves no room for the quick wash-and-go jobs, which were a third of our visits."]],
      verdict: "tradeoff", deciding: ["c2", "c3"],
      reason: "Rosa gives up the quick wash-and-go jobs, a third of her visits, to keep each visit calm for the dogs she chose. That is a real trade-off."
    }),

    // ----- held back for the review -----
    story({
      id: "r6-bakery", from: "Dana’s notes on her bakery", detail: "Written in March",
      lines: [
        ["c1", "Our cakes are made to order for birthdays and weddings."],
        ["c2", "We are adding full catering for parties, like the caterers in town, with the same three bakers and every cake still on offer."]],
      verdict: "straddle", deciding: ["c2"],
      reason: "Dana reaches for the caterers’ business and gives up nothing: the same bakers make every cake and the catering. That is a straddle."
    }),
    story({
      id: "r6-lawn", from: "Luis’s notes on his landscaping crew", detail: "Written in December",
      lines: [
        ["c1", "Our garden design customers want one crew that knows their garden."],
        ["c2", "We turn down cheap weekly mowing for new customers, so each crew keeps its own gardens."]],
      verdict: "tradeoff", deciding: ["c2"],
      reason: "Luis gives up cheap mowing for new customers so each crew keeps its own gardens. That is a real trade-off."
    }),
    story({
      id: "r6-cafe", from: "Priya’s notes on her cafe", detail: "Written in May",
      lines: [
        ["c1", "We are the quiet cafe where people work from home on Mondays and Fridays."],
        ["c2", "We will add live music on those days to draw the crowd from the bar next door, at the same tables."]],
      verdict: "straddle", deciding: ["c2"],
      reason: "Priya reaches for the bar’s crowd and gives up nothing: the music plays at the work tables on the work days. That is a straddle."
    })
  ]);
})();
