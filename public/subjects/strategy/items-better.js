// Strategy, lesson 2 "Better, or different?": the worked notes, the questions of the groups, the check and three held back for the review.
// The one rule (research ST1, ST16): would doing the same things the rivals do, only better, fix it? If the business is behind rivals at the same
// work (late, slow, wasteful, full of mistakes) and the rivals show it can be done, yes: run it better. If it already runs as well as its rivals and
// is squeezed anyway, or every gain is copied, or rivals' costs are out of reach of any amount of running better, no: choose a different position.
// Every story states the facts that settle it in one line, the line to tap. Owner-run businesses, invented.
(() => {
  const ONLY = ["run-better", "position"];
  const THEN = {
    "run-better": "Rivals doing the same work show it can be done better: closing that gap fixes it, and no new position is needed.",
    position: "It already runs as well as its rivals, or they copy each gain, so running it better would leave it the same as them."
  };
  const SLIP = { "run-better": { position: "running-as-strategy" }, position: { "run-better": "better-not-different" } };
  // a story: whose notes, its lines ([id, text, note?]), the line that settles it, the verdict
  function story({ id, from, detail, lines, settles, verdict, reason, then, steps, deciding }) {
    const other = ONLY.find(v => v !== verdict);
    return {
      id, strand: "better-different", facets: { scale: "owner", problem: verdict === "position" ? "strategic" : "running" },
      blocks: [{ kind: "message", id: "notes", form: "note", from, detail,
        lines: lines.map(([lid, text, note]) => ({ id: lid, text, ...(note ? { note } : {}) })) }],
      asks: [
        { id: "line", kind: "tap", prompt: "Tap the line that settles it.", in: "notes", right: [settles] },
        { id: "verdict", kind: "choose", prompt: "What does this business need?", from: "verdict", only: ONLY, right: verdict,
          then: { [other]: then || THEN[verdict] }, slips: SLIP[verdict] }
      ],
      ...(steps ? { steps } : {}),
      deciding: deciding || [settles],
      reason
    };
  }
  const BACK = "That is background. Look for the line that says whether rivals do the same work better.";

  FC.items("strategy", [
    // ----- the worked notes: a gain copied at once -----
    story({
      id: "w-cleaning", from: "Notes on our office-cleaning business", detail: "Written in November",
      lines: [
        ["c1", "Three other cleaning firms in town bid for the same office contracts. All four of us use the same products, schedules and checklists.", BACK],
        ["c2", "This year we bought faster floor machines and cut our time per office by 15%.", "That is running it better. Look at what happened next."],
        ["c3", "Within months the other three bought the same machines, and every firm’s bids dropped by about 15%."],
        ["c4", "Our profit is lower now than before we bought the machines.", "That is the result. The line before it says why."]],
      settles: "c3", verdict: "position",
      steps: [
        { id: "settle", does: "Would doing the same things as the rivals, only better, fix it? Find the line that answers.", working: "The third line: the firm did run better, and the rivals copied the machines within months, so every bid fell.", ask: "line" },
        { id: "verdict", does: "Decide.", working: "Running better was copied at once, so more of it would leave the firm where it is. It needs to be different from the other three, not faster than them.", ask: "verdict" }],
      reason: "The firm did run better, and the rivals copied the machines within months, so the gain went to customers as lower bids. Running better cannot fix that; it needs a different position."
    }),

    // ----- the first group (the deciding line marked): two problems of running, then two of strategy, each pair back to back -----
    story({
      id: "p-bistro", from: "Notes on our bistro", detail: "Written in March",
      lines: [
        ["c1", "Our food gets good reviews, about the same as the two bistros nearby.", BACK],
        ["c2", "A third of our reviews say the food came out cold or late, and the two bistros nearby, with the same dishes and prices, get no such complaints."],
        ["c3", "Our kitchen has no fixed order for which tickets get cooked first.", "That is the cause of the gap. The line before it shows rivals doing the same work better."]],
      settles: "c2", verdict: "run-better",
      reason: "Two bistros with the same dishes and prices serve them hot and on time, so the gap is in running the kitchen. Running it better fixes it."
    }),
    story({
      id: "p-books", from: "Notes on our bookkeeping firm", detail: "Written in June",
      lines: [
        ["c1", "We keep the books for about 60 small businesses.", BACK],
        ["c2", "This year 9 clients left us, and every one gave the same reason: our monthly reports came late and had mistakes."],
        ["c3", "The two firms they moved to do the same work for the same fee and send their reports on time.", ],
        ["c4", "We still type the numbers in by hand; both of those firms pull them straight from the bank.", "That is how the gap arose. Find the line that shows rivals doing the same work better."]],
      settles: "c3", verdict: "run-better",
      reason: "The firms the clients moved to do the same work for the same fee, only on time. Closing that gap is running it better."
    }),
    story({
      id: "p-movers", from: "Notes on our moving company", detail: "Written in April",
      lines: [
        ["c1", "Every moving company in our area quotes the same hourly rate, give or take $5.", BACK],
        ["c2", "We are already as quick and careful as any of them, and customers still pick whoever quotes lowest on the day."],
        ["c3", "Each spring somebody cuts the rate, and the rest of us follow.", "That is what the squeeze looks like. The line that settles it says whether running better would help."]],
      settles: "c2", verdict: "position",
      reason: "The company already runs as well as any rival, and customers still choose on price alone. Running better leaves it the same as everyone else, so it needs a different position."
    }),
    story({
      id: "p-pizza", from: "Notes on our pizza shop", detail: "Written in September",
      lines: [
        ["c1", "Two national chains opened within a mile of us this year.", BACK],
        ["c2", "They sell a large pizza for $8, buying their cheese and flour for 3,000 stores at a time."],
        ["c3", "A large pizza costs us $7 to make, and our kitchen wastes as little as anyone’s.", "That shows the shop runs well. The line that settles it says what no amount of running better can reach."],
        ["c4", "Our regulars still come on Fridays.", BACK]],
      settles: "c2", verdict: "position",
      deciding: ["c2", "c3"],
      reason: "The chains buy for 3,000 stores, a cost no single shop reaches by running its kitchen better, and this kitchen already wastes little. Competing on the same pizza at their price cannot work, so it needs a different position."
    }),

    // ----- the second group (nothing marked) -----
    story({
      id: "q-salon2", from: "Notes on our hair salon", detail: "Written in May",
      lines: [
        ["c1", "Our bookings are kept in a paper diary at the front desk.", "That is the cause. Find the line that shows rivals doing the same work better."],
        ["c2", "Twice a week a stylist is double-booked, and clients walk out after waiting 40 minutes."],
        ["c3", "The salon across the street, with the same prices and services, books online and its clients never wait."]],
      settles: "c3", verdict: "run-better",
      reason: "The salon across the street offers the same thing and books without waits, so the gap is in running the front desk. Running it better fixes it."
    }),
    story({
      id: "q-gym2", from: "Notes on our gym", detail: "Written in January",
      lines: [
        ["c1", "Three budget gyms opened within a mile this year, at $10 a month.", BACK],
        ["c2", "Our gym is as clean and as well run as any of them, and members still leave for the $10 places, which our rent cannot let us match."],
        ["c3", "We charge $45 a month for the same machines and classes.", "That is the price gap. The line that settles it says whether running better would close it."]],
      settles: "c2", verdict: "position",
      reason: "The gym already runs as well as the budget gyms and still cannot reach $10 with its rent. Selling the same machines and classes better will not fix it, so it needs a different position."
    }),
    story({
      id: "q-roofer", from: "Notes on our roofing company", detail: "Written in July",
      lines: [
        ["c1", "We bid on the same jobs as four other roofers, at about the same price.", BACK],
        ["c2", "Our jobs take 30% longer than theirs because our crew drives back to the yard for materials twice a day, while theirs have materials delivered to the site."],
        ["c3", "So we fit fewer jobs into the season.", "That is the result. The line before it says why."]],
      settles: "c2", verdict: "run-better",
      reason: "The other roofers do the same jobs faster by having materials delivered. That is a gap in running the work, and closing it is running it better."
    }),
    story({
      id: "q-cafe2", from: "Notes on our cafe", detail: "Written in October",
      lines: [
        ["c1", "Every cafe on our street now has the same espresso machine, the same oat milk and the same pastries from the same bakery.", BACK],
        ["c2", "Our coffee is as good and as quick as theirs.", "That shows the cafe runs well. Find what happens to each new thing."],
        ["c3", "Each time one of us adds something new, the others have it within a month, and our prices keep sliding."]],
      settles: "c3", verdict: "position",
      reason: "Every new thing is copied within a month and prices slide. Running the same cafe better would be copied too, so it needs a different position."
    }),
    story({
      id: "q-press", from: "Notes on our print shop", detail: "Written in February",
      lines: [
        ["c1", "Our old press breaks down about once a week, and we lose the rush orders that were on it.", "That is the problem. Find the line that shows whether rivals do the same work better."],
        ["c2", "Every other shop in town runs a newer press for the same kind of work, and none of them misses rush orders."],
        ["c3", "Our prices are the same as theirs.", BACK]],
      settles: "c2", verdict: "run-better",
      reason: "Shops doing the same work with a newer press do not miss rush orders, so the gap is in the equipment. Running it better fixes it."
    }),

    // ----- the check -----
    story({
      id: "k-dental", from: "Notes on our dental office", detail: "Written in March",
      lines: [
        ["c1", "Patients complain that our bills are wrong: one bill in five needs fixing.", "That is the problem. Find the line that shows whether rivals do the same work better."],
        ["c2", "The other dental offices in town fill in the same insurance forms and rarely get a bill wrong."],
        ["c3", "Our patients like the dentists.", BACK]],
      settles: "c2", verdict: "run-better",
      reason: "Other offices fill in the same forms and get the bills right, so the gap is in running the billing. Running it better fixes it."
    }),
    story({
      id: "k-florist", from: "Notes on our flower shop", detail: "Written in February",
      lines: [
        ["c1", "Supermarkets now sell a dozen roses for $12.", BACK],
        ["c2", "A dozen roses costs us $15, and our buying and our waste are already as low as any florist’s."],
        ["c3", "Valentine’s Day sales fell by half this year.", "That is the result. The line that settles it says whether running better would help."]],
      settles: "c2", verdict: "position",
      reason: "The shop already buys and wastes as little as any florist and still cannot get a dozen roses under $15. Selling the same roses better cannot win, so it needs a different position."
    }),
    story({
      id: "k-courier", from: "Notes on our delivery business", detail: "Written in August",
      lines: [
        ["c1", "Our vans drive about 25% more miles a day than they need to.", "That is the problem. Find the line that shows whether rivals do the same work better."],
        ["c2", "Our drivers plan their own stops on paper.", "That is the cause. Find the line that shows rivals doing the same work better."],
        ["c3", "The other couriers in town use software that plans the stops, and deliver the same parcels with fewer miles."]],
      settles: "c3", verdict: "run-better",
      reason: "Rivals deliver the same parcels with fewer miles by planning the stops with software. That is a gap in running the business, so running it better fixes it."
    }),
    story({
      id: "k-heating", from: "Notes on our heating company", detail: "Written in November",
      lines: [
        ["c1", "Every heating company in town now offers the same $79 tune-up and the same 10-year warranty."],
        ["c2", "When one of us adds a new offer, the rest copy it within a season, and prices keep falling."],
        ["c3", "Our technicians are as quick and as well trained as anyone’s.", "That shows the company runs well. Find what happens to each new offer."]],
      settles: "c2", verdict: "position",
      deciding: ["c2", "c3"],
      reason: "Every new offer is copied within a season and prices fall, while the company already runs as well as its rivals. Running better would be copied too, so it needs a different position."
    }),
    story({
      id: "k-bread", from: "Notes on our bakery", detail: "Written in June",
      lines: [
        ["c1", "We bake the same amount of bread every day of the week.", "That is the cause. Find the line that shows whether rivals do the same work better."],
        ["c2", "At closing we throw away about a quarter of it."],
        ["c3", "The other bakeries in town bake more on busy days and less on quiet ones, and throw away very little."]],
      settles: "c3", verdict: "run-better",
      deciding: ["c3", "c1"],
      reason: "Other bakeries do the same work and waste very little by baking to the day. Closing that gap is running it better."
    }),
    story({
      id: "k-taxi", from: "Notes on our taxi company", detail: "Written in April",
      lines: [
        ["c1", "Ride apps now take most short trips in town.", BACK],
        ["c2", "Our cars are as clean and our drivers as quick as any app driver."],
        ["c3", "The apps charge riders less per mile than it costs us to run a car, and every price we have cut they have matched."]],
      settles: "c3", verdict: "position",
      deciding: ["c3", "c2"],
      reason: "The apps charge less per mile than a taxi costs to run and match every cut, while the company already runs well. Running the same short trips better cannot win, so it needs a different position."
    }),

    // ----- held back for the review -----
    story({
      id: "r-tires", from: "Notes on our tire shop", detail: "Written in May",
      lines: [
        ["c1", "Only one of our two lifts works.", "That is the cause. Find the line that shows whether rivals do the same work better."],
        ["c2", "Customers wait two hours for a tire change; at the other shops in town, for the same price, they wait 30 minutes."]],
      settles: "c2", verdict: "run-better",
      reason: "Other shops do the same tire change for the same price in 30 minutes. Fixing the lift is running it better."
    }),
    story({
      id: "r-photo", from: "Notes on our wedding photography business", detail: "Written in January",
      lines: [
        ["c1", "Every photographer in our area offers the same three packages, with the same cameras and the same albums."],
        ["c2", "Our photos are as good as anyone’s, and couples still choose whoever is cheapest; prices fell each of the last three years."]],
      settles: "c2", verdict: "position",
      reason: "The photos are already as good as anyone’s, and couples still choose on price. Doing the same packages better leaves it the same as the rest, so it needs a different position."
    }),
    story({
      id: "r-lawn", from: "Notes on our lawn care business", detail: "Written in June",
      lines: [
        ["c1", "One customer in ten is not home or forgot when our crew arrives, so the visit is wasted."],
        ["c2", "The other lawn companies text each customer the day before and almost never waste a visit."]],
      settles: "c2", verdict: "run-better",
      reason: "Other lawn companies doing the same work send a reminder and waste almost no visits. Copying that is running it better."
    })
  ]);
})();
