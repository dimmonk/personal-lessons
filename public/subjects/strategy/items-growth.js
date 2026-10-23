// Strategy, lesson 9 "Growth that keeps the position": the worked notes, the questions of the groups, the check and three held back for the review.
// The one rule (research ST4, ST6): before saying yes to growth, name the core, what the business does that customers come to it for and that
// earns it the most (most distinctive and most profitable, ST4's box). Then ask of the offer: does it serve the same kind of customer with the
// same activities, so the core gets bigger? It deepens the core. Does it need different activities, or a different kind of customer, so the
// business stops being clearly one thing? It blurs the position, however much it would add to sales. Every note names the core, the offer, what
// the offer needs, and the money, so the learner weighs them. "Same" and "new" do not decide alone: an offer that deepens may need one more hire
// or van of the same kind, and one that blurs may use the same people for another kind of customer. Owner-run businesses, invented.
(() => {
  const ONLY = ["deepens", "blurs"];
  const THEN = {
    deepens: "It serves the same kind of customer with the same activities, so it makes the core bigger rather than pulling away from it.",
    blurs: "It needs different activities or a different kind of customer, so it pulls the business away from its core, whatever it adds to sales."
  };
  const SLIP = { blurs: { deepens: "growth-for-growth" } };
  // notes: whose, lines ([id, text]), the verdict, the lines marked after the answer
  function growth({ id, from, detail, lines, verdict, deciding, reason, steps }) {
    const other = ONLY.find(v => v !== verdict);
    return {
      id, strand: "growth", facets: { scale: "owner" },
      blocks: [{ kind: "message", id: "notes", form: "note", from, detail, lines: lines.map(([lid, text]) => ({ id: lid, text })) }],
      asks: [{ id: "verdict", kind: "choose", prompt: "Does this growth keep the position?", from: "verdict", only: ONLY, right: verdict,
        then: { [other]: THEN[verdict] }, ...(SLIP[verdict] ? { slips: SLIP[verdict] } : {}) }],
      ...(steps ? { steps } : {}),
      deciding, reason
    };
  }

  FC.items("strategy", [
    // ----- the worked notes -----
    growth({
      id: "w9-sheetcakes", from: "Dana’s memo on an offer", detail: "Written in April",
      lines: [
        ["c1", "Wedding cakes are what couples come to us for, and they earn the most of anything we make."],
        ["c2", "A supermarket chain wants to buy 2,000 plain sheet cakes a week for its stores."],
        ["c3", "We would need a night shift, a mixer line for one standard cake, and a delivery van."],
        ["c4", "It would double our sales."]],
      verdict: "blurs", deciding: ["c1", "c3"],
      steps: [
        { id: "core", does: "Name the core: what customers come for, and what earns the most.", working: "Wedding cakes, made for each couple." },
        { id: "needs", does: "Does the offer serve the same kind of customer with the same activities?", working: "No: a supermarket buying one standard cake by the thousand, made on a mixer line by a night shift. Different customer, different activities." },
        { id: "money", does: "Leave the money out of it.", working: "Doubling sales does not change what the offer needs. It would pull the bakery toward a cake factory.", ask: "verdict" }],
      reason: "The core is wedding cakes made for each couple. The offer needs a mixer line, a night shift and a van to make one standard cake for a supermarket: different activities for a different customer. It blurs the position, though it would double sales."
    }),

    // ----- the first group (the deciding lines marked) -----
    // two offers that blur, on different surfaces, back to back
    growth({
      id: "p9-parks", from: "Luis’s memo on an offer", detail: "Written in January",
      lines: [
        ["c1", "Garden design, with one crew that knows each garden, earns us the most, and it is why customers pick us."],
        ["c2", "The power company has asked us to bid on clearing trees along its lines, a three-year contract worth $900,000."],
        ["c3", "The lowest bid wins; we would need climbing crews and bucket trucks, and our designers would run the crews."]],
      verdict: "blurs", deciding: ["c1", "c3"],
      reason: "The core is garden design by crews who know each garden. Clearing trees for the power company is won on the lowest bid, with climbing crews and bucket trucks, run by the designers: different activities for a different customer. It blurs the position."
    }),
    growth({
      id: "p9-homework", from: "Kim’s memo on an offer", detail: "Written in August",
      lines: [
        ["c1", "Tutoring for the state math exams is what parents come to us for, and it earns the most."],
        ["c2", "A chain of private schools wants us to run its after-school homework club, every subject, ages 6 to 12."],
        ["c3", "It pays $120,000 a year, and we would hire twelve helpers who are not math tutors."]],
      verdict: "blurs", deciding: ["c1", "c2", "c3"],
      reason: "The core is exam tutoring by tutors who know the exams. A homework club for every subject and young children, run by helpers, serves a different customer with different activities. It blurs the position."
    }),
    // a look-alike on one bike shop: two offers, one that deepens and one that blurs
    growth({
      id: "p9-wheels", from: "Leo’s memo on an offer", detail: "Written in March",
      lines: [
        ["c1", "Fitting and tuning race bikes by hand is why racers come to us, and it earns the most."],
        ["c2", "A maker of race wheels wants us to sell its wheels here, ordered for each racer, not kept in stock; our racers already want them."],
        ["c3", "Our two mechanics would fit them, in the fitting room, as part of a tune."],
        ["c4", "It would add about $200,000 a year in sales."]],
      verdict: "deepens", deciding: ["c2", "c3"],
      reason: "The racers already want the wheels, and the same mechanics fit them in the same room. Same customer, same activities: it deepens the core."
    }),
    growth({
      id: "p9-toys", from: "Leo’s memo on an offer", detail: "Written in May",
      lines: [
        ["c1", "Fitting and tuning race bikes by hand is why racers come to us, and it earns the most."],
        ["c2", "A toy chain wants to rent half our floor for kids’ bikes and scooters, run by its own staff."],
        ["c3", "It would pay us $8,000 a year in rent."]],
      verdict: "blurs", deciding: ["c2"],
      reason: "Half the floor would go to kids’ bikes for families, a different customer, in the shop racers come to for fitting. It blurs the position, whatever the rent."
    }),

    // ----- the second group (nothing marked) -----
    growth({
      id: "q9-secondvan", from: "Rosa’s memo on a plan", detail: "Written in June",
      lines: [
        ["c1", "Calm grooming at home for old and nervous dogs is what owners come to us for, and it earns the most."],
        ["c2", "A vet in the next town says many of her clients have nervous dogs and no groomer will take them."],
        ["c3", "A second van there would run our way: home visits, one groomer per dog, paid by the day, four dogs a day."],
        ["c4", "The van costs $60,000, and four dogs a day would bring in about $150,000 a year."]],
      verdict: "deepens", deciding: ["c2", "c3"],
      reason: "The new town has the same kind of customer, nervous dogs, and the van would run the same way. It deepens the core, in a new place."
    }),
    growth({
      id: "q9-airport", from: "Carlos’s memo on an offer", detail: "Written in September",
      lines: [
        ["c1", "Five tacos in two minutes for factory workers at lunch is what we are known for, and it earns the most."],
        ["c2", "The airport offers us a counter in the main hall, open 18 hours a day."],
        ["c3", "Travelers want a full menu; the airport wants at least 30 dishes and seats for 40, for a $2,000 yearly fee."]],
      verdict: "blurs", deciding: ["c1", "c3"],
      reason: "A 30-dish menu and seats for 40, open 18 hours for travelers, need different activities for a different customer from five fast tacos at lunch. It blurs the position."
    }),
    growth({
      id: "q9-fourthfirm", from: "Omar’s memo on an offer", detail: "Written in February",
      lines: [
        ["c1", "Same-day court papers for law firms are why firms use us, and they earn the most."],
        ["c2", "A law firm in the next city wants the same service, and the courthouse there is 20 minutes from our shop."],
        ["c3", "Our driver would add one run a day; the press stays kept free for rush orders."]],
      verdict: "deepens", deciding: ["c2", "c3"],
      reason: "Another law firm wants the same same-day papers, served by the same press and driver. Same customer, same activities: it deepens the core."
    }),
    growth({
      id: "q9-mall", from: "Tom’s memo on an offer", detail: "Written in October",
      lines: [
        ["c1", "Advice and odd parts for builders, from 6 a.m., are why builders come to us, and they earn the most."],
        ["c2", "A developer offers us a big store in a new mall, open 10 a.m. to 9 p.m., for people fixing up their homes."],
        ["c3", "The rent is low for the first two years, and the mall expects 20,000 visitors a week."]],
      verdict: "blurs", deciding: ["c1", "c2"],
      reason: "Mall hours and home shoppers are a different customer and a different way of running a store from early parts and advice for builders. It blurs the position, cheap rent or not."
    }),
    growth({
      id: "q9-hospital", from: "Jill’s memo on a plan", detail: "Written in July",
      lines: [
        ["c1", "Care from 5 a.m. to 9 p.m. for parents on hospital shifts is what families come to us for, and it earns the most."],
        ["c2", "A second hospital across town has 600 nurses and no daycare near it."],
        ["c3", "We would open next to it with the same hours and meals, and hire eight new staff for the early and late shifts; it would double our sales, to $1.2 million."]],
      verdict: "deepens", deciding: ["c2", "c3"],
      reason: "The second hospital has the same kind of parent, and the new place would run the same way; the new hires do the same shift work. It deepens the core, in a new place."
    }),

    // ----- the check -----
    growth({
      id: "k9-franchise", from: "Mark’s memo on an offer", detail: "Written in January",
      lines: [
        ["c1", "Heavy training with coaches on the floor is why lifters pay us $60 a month, and it earns the most."],
        ["c2", "A budget gym chain offers to make us one of its gyms, with its sign and its $15 plan."],
        ["c3", "It says members would triple; it would need machines in place of half the racks, and fewer coaches."]],
      verdict: "blurs", deciding: ["c2", "c3"],
      reason: "The chain’s $15 plan needs machines in place of racks and fewer coaches, for a different member. It blurs the position, though members would triple."
    }),
    growth({
      id: "k9-online", from: "Nina’s memo on a plan", detail: "Written in March",
      lines: [
        ["c1", "Finding and valuing rare first editions for collectors is why they travel to us, and it earns the most."],
        ["c2", "Collectors in other states write to ask what we have."],
        ["c3", "We would list our rare books online, each with the same written note on its history and condition, ship them insured, and hire a second book valuer."]],
      verdict: "deepens", deciding: ["c2", "c3"],
      reason: "The online buyers are collectors too, served with the same finding, valuing and notes. Same customer, same activities: it deepens the core."
    }),
    growth({
      id: "k9-newhouses", from: "Ray’s memo on an offer", detail: "Written in May",
      lines: [
        ["c1", "Fast leak fixes for restaurants at any hour are why restaurants call us, and they earn the most."],
        ["c2", "A home builder wants us to plumb its 300 new houses a year, at a fixed price per house."],
        ["c3", "We would need two new crews working weekdays on a building schedule, and the vans stocked for houses."]],
      verdict: "blurs", deciding: ["c2", "c3"],
      reason: "Plumbing new houses on a builder’s schedule, at a fixed price, needs different crews and stock for a different customer. It blurs the position."
    }),
    growth({
      id: "k9-newpianos", from: "Hal’s memo on an offer", detail: "Written in August",
      lines: [
        ["c1", "Moving pianos with nothing damaged is why owners pay us double, and it earns the most."],
        ["c2", "Three piano stores want us to deliver what their customers buy, each owner paying our own rate."],
        ["c3", "Our crews, ramps and insurance would do the work as they do now; we would add one truck."]],
      verdict: "deepens", deciding: ["c2", "c3"],
      reason: "The stores’ buyers are piano owners paying Hal’s own rate, served by the same careful crews, gear and insurance; the extra truck does the same work. It deepens the core."
    }),
    growth({
      id: "k9-buffet", from: "Priya’s memo on an offer", detail: "Written in November",
      lines: [
        ["c1", "A quiet seat to work all day on Mondays and Fridays is why people come to us, and it earns the most."],
        ["c2", "The hotel next door wants us to run its breakfast buffet for 200 guests, every morning."],
        ["c3", "We would need a cook, four servers and a second kitchen; it pays $150,000 a year."]],
      verdict: "blurs", deciding: ["c2", "c3"],
      reason: "A hotel buffet needs a cook, servers and a kitchen for hotel guests: different activities for a different customer. It blurs the position, though it pays well."
    }),
    growth({
      id: "k9-carclub", from: "Ben’s memo on an offer", detail: "Written in June",
      lines: [
        ["c1", "Repairing older cars the dealers will not touch is why owners come to us, and it earns the most."],
        ["c2", "A delivery company wants us to service its 60 new vans, each in and out within a day, at a fixed price per van."],
        ["c3", "The same mechanics would do it, between our usual repairs; we would stock parts for this year’s vans."]],
      verdict: "blurs", deciding: ["c2", "c3"],
      reason: "The same mechanics would do it, but for a fleet of new vans on a fixed price and a one-day turn: a different customer and different work from older cars kept running. It blurs the position."
    }),

    // ----- held back for the review -----
    growth({
      id: "r9-catering", from: "Dana’s memo on an offer", detail: "Written in July",
      lines: [
        ["c1", "Wedding cakes made for each couple are what couples come to us for, and they earn the most."],
        ["c2", "A hotel wants us to cater all its conferences: lunches for 300, three days a week, with servers."]],
      verdict: "blurs", deciding: ["c2"],
      reason: "Conference lunches with servers need different activities for a different customer. It blurs the position."
    }),
    growth({
      id: "r9-statewide", from: "Kim’s memo on a plan", detail: "Written in December",
      lines: [
        ["c1", "Tutoring for the state math exams is what parents come to us for, and it earns the most."],
        ["c2", "Families across the state ask for it; we would tutor them online, with the same tutors, past papers and weekly reports."]],
      verdict: "deepens", deciding: ["c2"],
      reason: "The families want the same exam tutoring, given the same way. It deepens the core."
    }),
    growth({
      id: "r9-carclub", from: "Ben’s memo on an offer", detail: "Written in June",
      lines: [
        ["c1", "Repairing older cars the dealers will not touch is why owners come to us, and it earns the most."],
        ["c2", "An old-car club wants us as its members’ repair shop, and would send owners from three counties; the same mechanics and parts would do the work."]],
      verdict: "deepens", deciding: ["c2"],
      reason: "The club’s members own older cars too, served by the same mechanics and parts. It deepens the core."
    }),
    growth({
      id: "r9-kiosk", from: "Grace’s memo on an offer", detail: "Written in September",
      lines: [
        ["c1", "Long color appointments booked months ahead are what clients come to us for, and they earn the most."],
        ["c2", "A mall offers us a kiosk for $15 walk-in haircuts, staffed by new hires, open seven days."]],
      verdict: "blurs", deciding: ["c2"],
      reason: "Fast walk-in cuts at a kiosk serve a different client with different activities. It blurs the position."
    })
  ]);
})();
