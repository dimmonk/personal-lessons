// Strategy, lesson 10 "Where to play and how to win": the worked plans, the questions of the groups, the check and three held back for the review.
// The one rule (research ST10, ST5): a plan makes a choice when it names one place to play (which customers, where) and one way to win there (why
// those customers will pick this business over the rivals there), and the two fit. Each of the six traps is a way of not choosing: do it all
// (many priorities, none dropped), head-on (going first at the strongest rival on its own ground), many fronts (several rivals, in several places,
// at once), something for everyone (every kind of customer at once), a dream (a mission that never says which customers or why they would choose
// you), copycat (what every business in the trade does, done again: running better, lesson 2, is never a choice). Each item holds two plans for
// one business: one that chooses and one that falls into exactly one trap. Which plan comes first changes from item to item.
(() => {
  const NOT = {
    doall: "It does not list many priorities with none dropped.",
    headon: "It does not go first at the strongest rival on that rival’s own ground.",
    fronts: "It does not take on several rivals in several places at once.",
    everyone: "It does not reach for every kind of customer at once.",
    dream: "It is more than a mission: it names moves, even if they are the wrong ones.",
    copycat: "It is not just what every business in the trade already does."
  };
  const PICK_SLIP = { doall: "list-not-choice", everyone: "serve-everyone", dream: "goal-as-strategy", copycat: "better-not-different", headon: "rival-ignored", fronts: "rival-ignored" };
  const TRAPS = Object.keys(NOT);
  // two plans for one business: `good` and `bad` are [lines]; `first` says which comes first; `trap` is the bad plan's trap
  function choice({ id, who, good, bad, first, trap, goodWhy, reason, steps }) {
    const plans = first === "good" ? [["a", good], ["b", bad]] : [["a", bad], ["b", good]];
    const goodId = first === "good" ? "a" : "b", badId = goodId === "a" ? "b" : "a";
    const block = ([pid, lines], n) => ({ kind: "message", id: pid, form: "note", from: `Plan ${n + 1} for ${who}`, detail: "A draft",
      lines: lines.map((text, i) => ({ id: `${pid}${i + 1}`, text })) });
    return {
      id, strand: "choice", facets: { scale: "owner" },
      blocks: plans.map(block),
      asks: [
        { id: "plan", kind: "choose", prompt: "Which plan makes a real choice of where to play and how to win?", options: [
          { id: "a", text: "Plan 1", ...(goodId === "a" ? { ok: true } : { slip: PICK_SLIP[trap], then: goodWhy }) },
          { id: "b", text: "Plan 2", ...(goodId === "b" ? { ok: true } : { slip: PICK_SLIP[trap], then: goodWhy }) }] },
        { id: "trap", kind: "choose", prompt: "Which trap does the other plan fall into?", from: "trap", right: trap,
          then: Object.fromEntries(TRAPS.filter(t => t !== trap).map(t => [t, NOT[t]])) }
      ],
      ...(steps ? { steps } : {}),
      deciding: [`${goodId}1`, `${goodId}2`, `${badId}1`],
      reason
    };
  }

  FC.items("strategy", [
    // ----- the worked plans -----
    choice({
      id: "w10-salon", who: "Grace’s salon", first: "bad", trap: "everyone",
      bad: ["Serve every client in town: walk-in cuts, children, men’s barbering, color, nails and brows.", "Prices from $15 to $200, so nobody is turned away.", "Open seven days, early and late."],
      good: ["We play for women in our part of town who color their hair and plan it months ahead.", "We win with colorists who do nothing but color, and long appointments the chain salons cannot fit in.", "We stop walk-in cuts and nails, which fill the chairs those appointments need."],
      goodWhy: "Plan 2 names one kind of client and why they will pick Grace; Plan 1 reaches for every client at once.",
      steps: [
        { id: "where", does: "Find where each plan plays: which customers, where.", working: "Plan 1: every client in town. Plan 2: women nearby who color their hair and plan ahead." },
        { id: "how", does: "Find how each wins there, and whether the two fit.", working: "Plan 1 gives no reason anyone would pick Grace over the salon they use now. Plan 2 wins with color specialists and long appointments, which fit those clients, and drops what gets in the way.", ask: "plan" },
        { id: "trap", does: "Name the trap of the plan that does not choose.", working: "Plan 1 reaches for every kind of client at once: something for everyone.", ask: "trap" }],
      reason: "Plan 2 chooses: one kind of client, a way to win them that fits, and what it stops doing. Plan 1 reaches for every kind of client at once, so it never says why any of them would pick Grace: something for everyone."
    }),

    // ----- the first group (the deciding lines marked) -----
    // two dreams on different surfaces, back to back
    choice({
      id: "p10-cafe", who: "Priya’s cafe", first: "good", trap: "dream",
      good: ["We play for people who work from home on Mondays and Fridays, within a mile of us.", "We win with a quiet seat all day, plugs at every table and rooms for calls, which the busy cafes on the main street do not offer."],
      bad: ["Our mission: to be the heart of the neighborhood.", "A place where everyone feels at home and every cup is made with love."],
      goodWhy: "Plan 1 says which customers and why they will pick Priya; Plan 2 is a mission that says neither.",
      reason: "Plan 1 chooses: people working from home nearby, won with what the busy cafes lack. Plan 2 is a mission that never says which customers or why they would come: a dream."
    }),
    choice({
      id: "p10-movers", who: "Hal’s moving company", first: "bad", trap: "dream",
      bad: ["We aim to be the most trusted name in moving.", "Known across the state for care and excellence."],
      good: ["We play for owners of pianos and other heavy, fragile things in the state.", "We win with crews that have moved pianos together for years, gear made for each piano and full insurance, which house movers do not have."],
      goodWhy: "Plan 2 names its customers and why they will pick Hal; Plan 1 says neither.",
      reason: "Plan 2 chooses: piano owners, won with crews, gear and insurance house movers lack. Plan 1 is an aim that never says which customers or why: a dream."
    }),
    // a look-alike on one hardware store: two plans that fail in different ways
    choice({
      id: "p10-headon", who: "Tom’s hardware store", first: "good", trap: "headon",
      good: ["We play for the builders and repair crews in the county.", "We win with advice, odd parts the big store does not carry, and doors open at 6 a.m."],
      bad: ["We play for weekend shoppers buying paint, lumber and tools, the big home store’s best customers.", "We win by beating its prices on all three."],
      goodWhy: "Plan 1 picks customers the big store serves poorly; Plan 2 picks a fight where the big store is strongest.",
      reason: "Plan 1 plays where the big store is weak, for builders, with what it lacks. Plan 2 goes first at the strongest rival on its own ground, prices to weekend shoppers: head-on."
    }),
    choice({
      id: "p10-fronts", who: "Tom’s hardware store", first: "bad", trap: "fronts",
      bad: ["This year we fight the big home store for weekend shoppers, the lumber yard for builders’ wood, and the online sellers for parts.", "We open a second store in the next town to do the same there."],
      good: ["We play for the builders and repair crews in the county.", "We win with advice, odd parts the big store does not carry, and doors open at 6 a.m."],
      goodWhy: "Plan 2 picks one place to play and a way to win there; Plan 1 starts fights with three rivals in two towns.",
      reason: "Plan 2 chooses one place to play and a way to win. Plan 1 takes on three rivals in two towns at once: many fronts."
    }),

    // ----- the second group (nothing marked) -----
    choice({
      id: "q10-gym", who: "Mark’s gym", first: "bad", trap: "doall",
      bad: ["This year’s top priorities: more members, new classes, a smoothie bar, a phone app, longer hours, lower prices and a second site.", "Every one of them matters, and we will do them all."],
      good: ["We play for serious lifters within a short drive.", "We win with coaches on the floor all day and heavy racks with room to use them, which the budget gyms do not have."],
      goodWhy: "Plan 2 chooses its members and why they pick Mark; Plan 1 makes everything a priority.",
      reason: "Plan 2 chooses: serious lifters, won with what budget gyms lack. Plan 1 makes seven things top priority and drops none: do it all."
    }),
    choice({
      id: "q10-print", who: "Omar’s print shop", first: "good", trap: "copycat",
      good: ["Law firms in the county that need court papers the same day: those are our customers.", "A press kept free for their rush orders, and a driver who takes papers straight to the court, are why they will use us and not another shop."],
      bad: ["We do what the best print shops do: online ordering, a loyalty card and a discount on big orders.", "And we run all of it more smoothly than they do."],
      goodWhy: "Plan 1 picks customers and a way to win them; Plan 2 does what every print shop does, only more smoothly.",
      reason: "Plan 1 chooses law firms and wins with what they need. Plan 2 is what every print shop already does, run better: copycat."
    }),
    choice({
      id: "q10-tacos", who: "Carlos’s taco truck", first: "bad", trap: "headon",
      bad: ["We play for the lunch crowd at the busiest corner downtown, next to the city’s biggest burger chain.", "We win by selling burgers cheaper than theirs."],
      good: ["We play for factory workers on a 30-minute lunch break.", "We win with five tacos ready in two minutes at the factory gates, ordered by text on the way out."],
      goodWhy: "Plan 2 picks customers the chains do not serve well; Plan 1 takes on the biggest chain at its own game.",
      reason: "Plan 2 chooses workers with short breaks and a way to win them. Plan 1 goes first at the biggest chain, on burgers and price, its own ground: head-on."
    }),
    choice({
      id: "q10-tutors", who: "Kim’s tutoring business", first: "good", trap: "fronts",
      good: ["We play for students taking the state math exams in our county.", "We win with tutors who have graded those exams and practice from ten years of past papers."],
      bad: ["This year we compete with the big test-prep chain, the online tutoring apps and the schools’ free help.", "In four towns at once."],
      goodWhy: "Plan 1 picks one place to play and a way to win; Plan 2 fights three kinds of rival in four towns.",
      reason: "Plan 1 chooses one kind of student and a way to win them. Plan 2 takes on three kinds of rival in four towns at once: many fronts."
    }),
    choice({
      id: "q10-daycare", who: "Jill’s daycare", first: "bad", trap: "everyone",
      bad: ["We play for every family in town, with children from babies to age 12.", "We win by offering full days, half days, nights, weekends and drop-ins."],
      good: ["We play for parents who work hospital shifts.", "We win with care from 5 a.m. to 9 p.m., two blocks from the hospital, with days that follow the roster."],
      goodWhy: "Plan 2 picks one kind of family and why they choose Jill; Plan 1 reaches for every family at once.",
      reason: "Plan 2 chooses hospital parents and a way to win them. Plan 1 reaches for every child and every family at once: something for everyone."
    }),

    // ----- the check -----
    choice({
      id: "k10-florist", who: "Ana’s flower shop", first: "good", trap: "dream",
      good: ["Our customers: couples marrying within an hour of town who want their wedding to look like no other.", "They will choose us for three planning meetings, flowers ordered for each wedding, and Ana on the day."],
      bad: ["Our vision is to bring beauty to every life.", "Flowers that speak from the heart."],
      goodWhy: "Plan 1 names the couples and why they choose Ana; Plan 2 is a vision that says neither.",
      reason: "Plan 1 chooses couples and a way to win them. Plan 2 is a vision that never says which customers or why: a dream."
    }),
    choice({
      id: "k10-plumber", who: "Ray’s plumbing business", first: "bad", trap: "copycat",
      bad: ["We follow what the top plumbing firms do: online booking, uniforms, a $49 inspection offer.", "And we answer the phone faster than they do."],
      good: ["We play for restaurants, which lose money every hour the kitchen is shut.", "We win with plumbers on call at any hour and vans stocked with kitchen parts."],
      goodWhy: "Plan 2 picks customers and a way to win them; Plan 1 does what every plumbing firm does, a little faster.",
      reason: "Plan 2 chooses restaurants and wins with what they need. Plan 1 is the trade’s usual way, done faster: copycat."
    }),
    choice({
      id: "k10-bikes", who: "Leo’s bike shop", first: "good", trap: "headon",
      good: ["We play for road racers in the region.", "We win with fitting by hand and mechanics who race, which the chain stores do not offer."],
      bad: ["We play for families buying cheap bikes, the national bike chain’s best sellers.", "We win by pricing them below the chain’s."],
      goodWhy: "Plan 1 picks racers the chain serves poorly; Plan 2 fights the chain on its strongest ground.",
      reason: "Plan 1 plays where the chain is weak. Plan 2 goes first at the strongest rival on its own best sellers and price: head-on."
    }),
    choice({
      id: "k10-diner", who: "Sam’s diner", first: "bad", trap: "doall",
      bad: ["Our priorities for the year: new menu, delivery, catering, a bar, a patio, longer hours and a loyalty app.", "All of them start this spring."],
      good: ["Shift workers and truck drivers on the highway, early in the day, are our customers.", "Breakfast all day from 5 a.m., fast, at the counter, with parking for trucks, is why they stop here."],
      goodWhy: "Plan 2 picks customers and a way to win them; Plan 1 starts seven priorities at once.",
      reason: "Plan 2 chooses the early crowd and a way to win them. Plan 1 starts seven priorities at once and drops none: do it all."
    }),
    choice({
      id: "k10-books", who: "Nina’s bookshop", first: "good", trap: "fronts",
      good: ["We play for collectors of rare first editions across the state.", "We win with books found at estate sales and a written note on each book’s history."],
      bad: ["This year we take on the online sellers on price, the chain bookstore on best sellers, and the library sale on used books.", "In our town and the two next to it."],
      goodWhy: "Plan 1 picks one place to play and a way to win; Plan 2 fights three rivals in three towns.",
      reason: "Plan 1 chooses collectors and a way to win them. Plan 2 takes on three rivals in three towns at once: many fronts."
    }),
    choice({
      id: "k10-grooming", who: "Rosa’s grooming van", first: "bad", trap: "everyone",
      bad: ["We groom every dog and cat, any size, any temper.", "Quick washes, show cuts and nail trims, at home or at the curb, any day."],
      good: ["We play for owners of old and nervous dogs in the county.", "We win with a calm groom at home by the same groomer, four dogs a day."],
      goodWhy: "Plan 2 picks one kind of owner and why they choose Rosa; Plan 1 takes every pet at once.",
      reason: "Plan 2 chooses owners of nervous dogs and a way to win them. Plan 1 takes every kind of pet and job at once: something for everyone."
    }),

    // ----- held back for the review -----
    choice({
      id: "r10-bread", who: "Dana’s bakery", first: "bad", trap: "headon",
      bad: ["We win back bread buyers from the supermarket’s bakery.", "We will sell a loaf for less than the supermarket does."],
      good: ["We play for parents and couples who want a cake made for their party.", "We win with cakes made to order, which the supermarket cannot make."],
      goodWhy: "Plan 2 plays where the supermarket is weak; Plan 1 fights it on bread price, where it is strongest.",
      reason: "Plan 2 chooses cakes made to order, where the supermarket is weak. Plan 1 fights the supermarket on bread price, its own ground: head-on."
    }),
    choice({
      id: "r10-lawn", who: "Luis’s landscaping crew", first: "good", trap: "copycat",
      good: ["Owners of designed gardens in the north of the county are who we serve.", "They pick us for one crew that knows each garden and keeps notes on its plants."],
      bad: ["We do what the big landscapers do: online quotes, a spring discount, branded trucks.", "And we do it more efficiently."],
      goodWhy: "Plan 1 picks customers and a way to win them; Plan 2 is the trade’s usual way, run more efficiently.",
      reason: "Plan 1 chooses garden owners and a way to win them. Plan 2 is the trade’s usual way, done again: copycat."
    }),
    choice({
      id: "r10-cleaning", who: "a small office-cleaning firm", first: "bad", trap: "doall",
      bad: ["Priorities: more clients, new machines, a website, window cleaning, carpets, staff training and a second van.", "All of them this quarter."],
      good: ["We play for medical offices, which need cleaning to a strict standard.", "We win with cleaners trained to that standard and a signed record of each visit."],
      goodWhy: "Plan 2 picks customers and a way to win them; Plan 1 starts seven priorities at once.",
      reason: "Plan 2 chooses medical offices and a way to win them. Plan 1 starts seven priorities at once: do it all."
    })
  ]);
})();
