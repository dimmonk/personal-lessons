// Strategy, lesson 8 "Will it last?": the worked notes, the questions of the groups, the check and three held back for the review.
// The one rule (research ST9, with ST3): an advantage lasts only if it has both a benefit and a barrier. The benefit: does the difference let the
// business charge more than rivals for the same work, or cost it less than rivals to make it? If neither, there is nothing to keep. The
// barrier: what stops a rival getting the same? Only this business has it and a rival cannot get or make one (rare and hard to copy); or it rests
// on many activities that fit together, so a rival would have to copy them all (fit); or nothing does, because a rival can buy it, copy it, or
// get the same result another way. Being first, or proud of it, is not a barrier. The barrier question opens only once a benefit is named.
(() => {
  const BENEFIT_THEN = {
    price: { cost: "The notes show customers paying more than at rivals, not a cost below theirs.", none: "Customers pay more here than at rivals for the same work: that is a benefit." },
    cost: { price: "The price is the same as rivals’; what changed is the cost of making it.", none: "It costs less here than at rivals to make the same thing: that is a benefit." },
    none: { price: "Customers pay the same as at rivals, so the difference earns no higher price.", cost: "The costs did not change, so the difference saves nothing." }
  };
  const BARRIER_THEN = {
    "only-us": { fit: "It is one thing only this business has, not many activities working together.", nothing: "A rival cannot get or make one: the notes say why." },
    fit: { "only-us": "Any one piece could be had by a rival; what stops a copy is that it would need all of them.", nothing: "A rival would have to copy every piece at once, and give up how it runs now." },
    nothing: { "only-us": "A rival can buy it, copy it or get the same result another way, so it is not only this business’s.", fit: "It is one piece a rival can buy or copy on its own; nothing else has to come with it." }
  };
  const BARRIER_SLIP = { "only-us": "copyable-as-lasting", fit: "copyable-as-lasting" };
  // notes: whose, lines ([id, text]), the benefit, the barrier, the lines marked after the answer
  function lasts({ id, from, detail, lines, benefit, barrier, deciding, reason, scale = "owner", steps }) {
    return {
      id, strand: "lasts", facets: { scale },
      blocks: [{ kind: "message", id: "notes", form: "note", from, detail, lines: lines.map(([lid, text]) => ({ id: lid, text })) }],
      asks: [
        { id: "benefit", kind: "choose", prompt: "What does the difference give the business?", from: "benefit", right: benefit, then: BENEFIT_THEN[benefit] },
        { id: "barrier", kind: "choose", prompt: "What stops a rival getting the same?", from: "barrier", right: barrier, when: { ask: "benefit", is: ["price", "cost"] },
          then: BARRIER_THEN[barrier], ...(barrier === "nothing" ? { slips: BARRIER_SLIP } : {}) }
      ],
      ...(steps ? { steps } : {}),
      deciding, reason
    };
  }

  FC.items("strategy", [
    // ----- the worked notes -----
    lasts({
      id: "w8-kennel", from: "Eve’s notes on her dog daycare", detail: "Written in March",
      lines: [
        ["c1", "We are the only dog daycare in town with a fenced acre of grass; the others are indoor rooms."],
        ["c2", "Owners pay us $45 a day; the indoor places charge $30."],
        ["c3", "Two indoor places have said they want to add outdoor space."],
        ["c4", "We own the last open land at the edge of town, and the town will allow no new dog businesses anywhere else."]],
      benefit: "price", barrier: "only-us", deciding: ["c2", "c4"],
      steps: [
        { id: "benefit", does: "What does the difference give? Compare the price or the cost with rivals’.", working: "Owners pay $45 here against $30 at the indoor places: a higher price.", ask: "benefit" },
        { id: "barrier", does: "What stops a rival getting the same?", working: "The rivals want outdoor space, but Eve owns the last open land and the town allows no new dog businesses elsewhere. Only she has it, and they cannot get it.", ask: "barrier" },
        { id: "verdict", does: "Both a benefit and a barrier?", working: "Yes, so the advantage should last." }],
      reason: "Owners pay $15 a day more for the grass, and the rivals who want to copy it cannot: Eve owns the last open land and the town allows no more. A benefit and a barrier, so it lasts."
    }),

    // ----- the first group (the deciding lines marked) -----
    // two differences that nothing protects, on different surfaces, back to back
    lasts({
      id: "p8-oven", from: "Dana’s notes on her bakery", detail: "Written in May",
      lines: [
        ["c1", "Our new oven bakes with half the gas, so each cake costs us $2 less to make."],
        ["c2", "We were the first bakery in the county to get one."],
        ["c3", "The maker sells the same oven to any bakery that orders it."]],
      benefit: "cost", barrier: "nothing", deciding: ["c1", "c3"],
      reason: "The oven lowers the cost of each cake, but any bakery can buy the same one; being first does not stop them. A benefit with no barrier, so it will not last."
    }),
    lasts({
      id: "p8-menu", from: "Sam’s notes on his diner", detail: "Written in June",
      lines: [
        ["c1", "Our new brunch dishes let us charge $4 more a plate than the diner across the street."],
        ["c2", "The dishes need no special cook, kitchen or supplier."],
        ["c3", "Customers love them, and the reviews say so."]],
      benefit: "price", barrier: "nothing", deciding: ["c1", "c2"],
      reason: "The dishes earn $4 more a plate, but they need nothing a rival lacks, so the diner across the street can serve the same next week. A benefit with no barrier, so it will not last."
    }),
    // a look-alike on one grooming van: the same higher price, one with a barrier and one without
    lasts({
      id: "p8-calm", from: "Rosa’s notes on her grooming van", detail: "Written in July",
      lines: [
        ["c1", "Owners of nervous dogs pay us $20 more a groom than the grooming shops charge."],
        ["c2", "They pay for a calm groom at home, by the same groomer, paid by the day, four dogs a day."],
        ["c3", "A grooming shop would have to give up its fast, crowded days and change how it pays and books, all at once, to do the same."]],
      benefit: "price", barrier: "fit", deciding: ["c1", "c3"],
      reason: "Owners pay $20 more, and the calm groom rests on home visits, the same groomer, pay by the day and four dogs a day. A shop would have to change all of it at once: a benefit and a barrier, so it lasts."
    }),
    lasts({
      id: "p8-shampoo", from: "Rosa’s notes on her grooming van", detail: "Written in August",
      lines: [
        ["c1", "Owners pay us $10 more a groom for our blueberry shampoo treatment."],
        ["c2", "We found the shampoo first, at a trade show."],
        ["c3", "Its maker sells it to any groomer who asks."]],
      benefit: "price", barrier: "nothing", deciding: ["c1", "c3"],
      reason: "Owners pay $10 more for the shampoo, but any groomer can buy it from the maker; finding it first is not a barrier. A benefit with no barrier, so it will not last."
    }),
    lasts({
      id: "p8-funds", scale: "known", from: "About Vanguard, the fund company", detail: "Written for this question",
      lines: [
        ["c1", "Vanguard’s funds cost investors very little to own."],
        ["c2", "It can charge so little because its costs are low: it trades rarely, pays no star managers, sells straight to investors and spends little on advertising."],
        ["c3", "A rival that sells through brokers and pays star managers would have to change all of that at once to match it."]],
      benefit: "cost", barrier: "fit", deciding: ["c2", "c3"],
      reason: "Vanguard’s low cost comes from many activities that fit together, and a rival would have to change all of them at once. A benefit and a barrier, so it lasts."
    }),

    // ----- the second group (nothing marked) -----
    lasts({
      id: "q8-fittings", from: "Tom’s notes on his hardware store", detail: "Written in January",
      lines: [
        ["c1", "The pipe fittings most builders here use are sold through one store per county, and the maker has signed with us for ten years."],
        ["c2", "We charge 10% more for them than stores two counties away do."],
        ["c3", "Builders grumble about the price but buy here; the next nearest dealer is an hour’s drive."]],
      benefit: "price", barrier: "only-us", deciding: ["c1", "c2"],
      reason: "Tom gets 10% more for the fittings, and no other store in the county can sell them for ten years. A benefit and a barrier, so it lasts as long as the deal does."
    }),
    lasts({
      id: "q8-software", from: "Ray’s notes on his plumbing business", detail: "Written in April",
      lines: [
        ["c1", "Our new scheduling software cut our driving by a fifth, so each call costs us $15 less."],
        ["c2", "No other plumber in town uses it yet."],
        ["c3", "It is sold to any plumber for $50 a month."]],
      benefit: "cost", barrier: "nothing", deciding: ["c1", "c3"],
      reason: "The software lowers the cost of each call, but any plumber can buy it for $50 a month. A benefit with no barrier, so it will not last."
    }),
    lasts({
      id: "q8-color", from: "Grace’s notes on her salon", detail: "Written in September",
      lines: [
        ["c1", "We repainted the salon in a color no other salon in town uses, with a new logo to match."],
        ["c2", "Clients still pay what they pay at the other salons."],
        ["c3", "The paint and the logo did not change what anything costs us."]],
      benefit: "none", barrier: "nothing", deciding: ["c2", "c3"],
      reason: "The new color is different, but clients pay no more and nothing costs less. With no benefit, there is nothing to keep."
    }),
    lasts({
      id: "q8-exams", from: "Kim’s notes on her tutoring business", detail: "Written in October",
      lines: [
        ["c1", "Parents pay us $20 an hour more than other tutors charge."],
        ["c2", "They pay for tutors who have graded the state exams, ten years of past papers with our notes, a report each week and a practice exam."],
        ["c3", "Another tutoring business could hire one of our tutors, but it would need all of it, and to stop tutoring everything else, to match us."]],
      benefit: "price", barrier: "fit", deciding: ["c1", "c3"],
      reason: "Parents pay $20 an hour more, and that rests on several pieces that fit; a rival could hire one tutor but would need all of them. A benefit and a barrier, so it lasts."
    }),
    lasts({
      id: "q8-tortillas", from: "Carlos’s notes on his taco truck", detail: "Written in May",
      lines: [
        ["c1", "We now buy tortillas together with two other trucks, so they cost us 10% less."],
        ["c2", "We sell our tacos at the same $3 as the other trucks."],
        ["c3", "Any truck can join a buying group like ours, and several have."]],
      benefit: "cost", barrier: "nothing", deciding: ["c1", "c3"],
      reason: "Buying together lowers the cost of tortillas, but any truck can do the same, and several have. A benefit with no barrier, so it will not last."
    }),

    // ----- the check -----
    lasts({
      id: "k8-wifi", from: "Priya’s notes on her cafe", detail: "Written in February",
      lines: [
        ["c1", "We put in the fastest internet on the street, and people pay $2 more for our day pass than at cafes with slow Wi-Fi."],
        ["c2", "It took us months to choose it."],
        ["c3", "Any cafe can order the same line from the same company."]],
      benefit: "price", barrier: "nothing", deciding: ["c1", "c3"],
      reason: "The fast internet earns $2 more a pass, but any cafe can order the same line; months of choosing are not a barrier. A benefit with no barrier, so it will not last."
    }),
    lasts({
      id: "k8-dock", from: "Notes on Joe’s boat repair shop", detail: "Written in June",
      lines: [
        ["c1", "Ours is the only dock on the lake where a boat can be lifted out of the water."],
        ["c2", "Boat owners pay us 30% more than shops that must take the boat away on a trailer."],
        ["c3", "The lake’s rules allow no new docks."]],
      benefit: "price", barrier: "only-us", deciding: ["c2", "c3"],
      reason: "Owners pay 30% more to have the boat lifted at the lake, and no rival can build a dock. A benefit and a barrier, so it lasts."
    }),
    lasts({
      id: "k8-robots", from: "Notes on our office-cleaning business", detail: "Written in August",
      lines: [
        ["c1", "Robot vacuums now do our floors at night, so each office costs us $8 less a week to clean."],
        ["c2", "We charge offices what the other cleaning firms charge."],
        ["c3", "The robots are sold online to anyone."]],
      benefit: "cost", barrier: "nothing", deciding: ["c1", "c3"],
      reason: "The robots lower the cost of each office, but any firm can buy them online. A benefit with no barrier, so it will not last."
    }),
    lasts({
      id: "k8-shifts", from: "Jill’s notes on her daycare", detail: "Written in November",
      lines: [
        ["c1", "Parents on hospital shifts pay us $50 a week more than other daycares charge."],
        ["c2", "They pay for care from 5 a.m. to 9 p.m., two staff shifts, meals, days that follow the hospital roster, and a place two blocks from the hospital."],
        ["c3", "A daycare built around a 9-to-5 day would have to change its staff, meals, booking and site, all at once, to do the same."]],
      benefit: "price", barrier: "fit", deciding: ["c1", "c3"],
      reason: "Parents pay $50 a week more, and the long day rests on pieces that fit; a rival would have to change all of them at once. A benefit and a barrier, so it lasts."
    }),
    lasts({
      id: "k8-sign", from: "Ben’s notes on his repair shop", detail: "Written in March",
      lines: [
        ["c1", "We put up the biggest sign on the road and painted the shop bright blue."],
        ["c2", "Customers pay what they pay at the other repair shops."],
        ["c3", "Our costs for each repair did not change."]],
      benefit: "none", barrier: "nothing", deciding: ["c2", "c3"],
      reason: "The sign and the paint make the shop stand out, but customers pay no more and nothing costs less. With no benefit, there is nothing to keep."
    }),
    lasts({
      id: "k8-wheat", from: "Dana’s notes on her bakery", detail: "Written in October",
      lines: [
        ["c1", "Customers pay $3 a loaf more for our old-variety wheat bread than for the bread at other bakeries."],
        ["c2", "Only one mill in the state grows that wheat."],
        ["c3", "The mill has signed to sell it to no bakery but ours for ten years."]],
      benefit: "price", barrier: "only-us", deciding: ["c1", "c3"],
      reason: "Customers pay $3 a loaf more, and for ten years no other bakery can get the wheat. A benefit and a barrier, so it lasts as long as the deal does."
    }),

    // ----- held back for the review -----
    lasts({
      id: "r8-lift", from: "Ben’s notes on his repair shop", detail: "Written in July",
      lines: [
        ["c1", "A second lift lets one mechanic do twice the brake jobs, so each costs us $20 less."],
        ["c2", "Lifts like it are sold to any shop."]],
      benefit: "cost", barrier: "nothing", deciding: ["c1", "c2"],
      reason: "The lift lowers the cost of each brake job, but any shop can buy one. A benefit with no barrier, so it will not last."
    }),
    lasts({
      id: "r8-lobby", from: "Priya’s notes on her second cafe", detail: "Written in December",
      lines: [
        ["c1", "Our second cafe is the only one in the lobby of the city’s biggest office tower, and the lease runs ten years with no other cafe allowed."],
        ["c2", "We charge 50 cents more a coffee than the cafes down the street."]],
      benefit: "price", barrier: "only-us", deciding: ["c1", "c2"],
      reason: "The lobby cafe charges more, and for ten years no other cafe may open there. A benefit and a barrier, so it lasts as long as the lease does."
    }),
    lasts({
      id: "r8-coaches", from: "Mark’s notes on his gym", detail: "Written in May",
      lines: [
        ["c1", "Lifters pay us $60 a month, double what the other gyms charge."],
        ["c2", "They pay for coaches on the floor all day, racks with room to use them and monthly checks; a budget gym would have to rebuild how it runs to match all of that."]],
      benefit: "price", barrier: "fit", deciding: ["c1", "c2"],
      reason: "Lifters pay double, and that rests on pieces that fit; a budget gym would have to change all of them. A benefit and a barrier, so it lasts."
    })
  ]);
})();
