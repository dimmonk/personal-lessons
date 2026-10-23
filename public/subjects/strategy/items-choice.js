// Strategy, lesson 10 "Where to play and how to win": the worked plans, the questions of the groups, the check and three held back for the review.
// The one rule (research ST10, ST5): a plan makes a choice when it names where to play (which customers, where) and how to win there (why those
// customers will pick this business over the rivals they have), and the two fit: the way to win is what those customers value. A plan fails in one
// of two ways. It never chooses, and falls into one of the six traps: do it all (many priorities, none dropped), head-on (going first at the
// strongest rival on its own ground), many fronts (several rivals, in several places, at once), something for everyone (every kind of customer at
// once), a dream (a mission that never says which customers or why they would choose you), copycat (what every business in the trade does, done
// again or done better: running better, lesson 2, is never a choice). Or it chooses both parts, but its way to win is not what those customers
// value (a misfit). Three kinds of item: two plans, one that chooses and one that fails in exactly one way; one plan alone, which may choose or
// fail. Plans are worded in many ways, and a failing plan may borrow the "where we play, how we win" form; which plan comes first changes.
(() => {
  // what the plan in front of the learner does wrong (or right): the second sentence of every note
  const IS = {
    doall: "This plan lists many priorities and drops none: do it all.",
    headon: "This plan goes first at the strongest rival, on the ground where it is strongest: head-on.",
    fronts: "This plan takes on several rivals, in several places, at once: many fronts.",
    everyone: "This plan reaches for every kind of customer at once: something for everyone.",
    dream: "This plan is a mission that never says which customers or why they would choose the business: a dream.",
    copycat: "This plan does what every business in the trade does, only better: copycat.",
    misfit: "This plan does choose its customers, but its way to win is not what those customers value: the two do not fit.",
    chooses: "This plan names its customers and a way to win that they value: it chooses."
  };
  // why a wrong pick does not describe the plan: the first sentence
  const NOT = {
    doall: "It does not pile up priorities.",
    headon: "It does not go at the strongest rival on that rival’s own ground.",
    fronts: "It does not take on several rivals at once.",
    everyone: "It does not reach for every kind of customer.",
    dream: "It names customers or moves, so it is more than a mission.",
    copycat: "It is not just the trade’s usual way.",
    misfit: "A misfit chooses its customers and wins with the wrong thing; this plan goes wrong before that."
  };
  // taking a plan that fails, in any of the seven ways, for a real choice: the costly error this lesson counts
  const NO_CHOICE = "no-choice";
  const SIX = ["doall", "headon", "fronts", "everyone", "dream", "copycat"];
  const FAULTS = [...SIX, "misfit"];
  const thenFor = (right, picks) => Object.fromEntries(picks.filter(t => t !== right).map(t => [t, t === "chooses" || right === "chooses" ? IS[right] : `${NOT[t]} ${IS[right]}`]));
  const plan = (pid, n, who, lines) => ({ kind: "message", id: pid, form: "note", from: `${who}: plan ${n} for the year`, detail: "A draft",
    lines: lines.map((text, i) => ({ id: `${pid}${i + 1}`, text })) });
  // two plans for one business: `good` chooses; `bad` fails with `fault` (one of the six traps, or misfit); `first` says which comes first
  function choice({ id, who, good, bad, first, fault, goodWhy, reason, steps }) {
    const goodId = first === "good" ? "a" : "b", badId = goodId === "a" ? "b" : "a";
    const blocks = first === "good" ? [plan("a", 1, who, good), plan("b", 2, who, bad)] : [plan("a", 1, who, bad), plan("b", 2, who, good)];
    return {
      id, strand: "choice", facets: { scale: "owner" },
      blocks,
      asks: [
        { id: "plan", kind: "choose", prompt: "Which plan makes a real choice of where to play and how to win?", options: [
          { id: "a", text: "Plan 1", ...(goodId === "a" ? { ok: true } : { slip: NO_CHOICE, then: goodWhy }) },
          { id: "b", text: "Plan 2", ...(goodId === "b" ? { ok: true } : { slip: NO_CHOICE, then: goodWhy }) }] },
        { id: "trap", kind: "choose", prompt: "What is wrong with the other plan?", from: "trap", only: FAULTS, right: fault, then: thenFor(fault, FAULTS) }
      ],
      ...(steps ? { steps } : {}),
      deciding: fault === "misfit" ? [`${goodId}2`, `${badId}2`] : [`${goodId}1`, `${goodId}2`, `${badId}1`],
      reason
    };
  }
  // one plan alone: `right` is a fault or "chooses"
  function alone({ id, who, lines, right, reason }) {
    const picks = [...FAULTS, "chooses"];
    return {
      id, strand: "choice", facets: { scale: "owner" },
      blocks: [plan("a", 1, who, lines)].map(b => ({ ...b, from: `${who}: the plan for the year` })),
      asks: [{ id: "trap", kind: "choose", prompt: "Does this plan make a real choice? If not, what is wrong with it?", from: "trap", only: picks, right,
        then: thenFor(right, picks), ...(right !== "chooses" ? { slips: { chooses: NO_CHOICE } } : {}) }],
      deciding: lines.map((_, i) => `a${i + 1}`),
      reason
    };
  }

  FC.items("strategy", [
    // ----- the worked plans -----
    choice({
      id: "w10-salon", who: "Grace’s salon", first: "bad", fault: "everyone",
      bad: ["Every client in town is ours: men, women and children, students and retirees, walk-ins and regulars.", "Prices from $15 to $200, so nobody is turned away."],
      good: ["Women in our part of town who color their hair and book months ahead are the clients we want.", "They will pick us for colorists who do nothing but color, and long appointments the chain salons cannot fit in.", "Walk-in cuts and nails stop, since they fill the chairs those appointments need."],
      goodWhy: "Plan 2 names one kind of client and why they will pick Grace; Plan 1 reaches for every client at once.",
      steps: [
        { id: "where", does: "Find where each plan plays: which customers, where.", working: "Plan 1: every client in town. Plan 2: women nearby who color their hair and book ahead." },
        { id: "how", does: "Find how each wins there, and whether the way to win is what those customers value.", working: "Plan 1 gives no reason anyone would pick Grace over the salon they use now. Plan 2 wins with color specialists and long appointments, which those clients value, and drops what gets in the way.", ask: "plan" },
        { id: "trap", does: "Name what is wrong with the plan that does not choose.", working: "Plan 1 reaches for every kind of client at once: something for everyone.", ask: "trap" }],
      reason: "Plan 2 chooses: one kind of client, a way to win them that they value, and what it stops doing. Plan 1 reaches for every kind of client at once, so it never says why any of them would pick Grace: something for everyone."
    }),

    // ----- the first group (the deciding lines marked) -----
    // two dreams on different surfaces, back to back
    choice({
      id: "p10-cafe", who: "Priya’s cafe", first: "good", fault: "dream",
      good: ["Students at the nursing college across the road, who study late, are who we serve.", "Open till midnight, quiet tables and refills at one flat price are why they will come here and not to the chain cafe that shuts at eight."],
      bad: ["Our mission: to be the heart of the neighborhood.", "A place where everyone feels at home and every cup is made with love."],
      goodWhy: "Plan 1 says which customers and why they will pick Priya; Plan 2 is a mission that says neither.",
      reason: "Plan 1 chooses: nursing students who study late, won with what the chain cafe lacks. Plan 2 is a mission that never says which customers or why they would come: a dream."
    }),
    choice({
      id: "p10-movers", who: "Hal’s moving company", first: "bad", fault: "dream",
      bad: ["We aim to be the most trusted name in moving.", "Known across the state for care and excellence."],
      good: ["Small law and doctors’ offices that cannot close on a weekday.", "We move them between Friday night and Monday morning, files in the same order, so they open as usual: the house movers will not work those hours."],
      goodWhy: "Plan 2 names its customers and why they will pick Hal; Plan 1 says neither.",
      reason: "Plan 2 chooses: small offices that cannot close, won with weekend moves house movers will not do. Plan 1 is an aim that never says which customers or why: a dream."
    }),
    // a look-alike on one hardware store: two plans that fail in different ways
    choice({
      id: "p10-headon", who: "Tom’s hardware store", first: "good", fault: "headon",
      good: ["Builders and repair crews in the county.", "Advice, odd parts the big home store does not carry, and doors open at 6 a.m. will bring them to us."],
      bad: ["We play for weekend shoppers buying paint, lumber and tools, the big home store’s best customers.", "We win by beating its prices on all three."],
      goodWhy: "Plan 1 picks customers the big store serves poorly; Plan 2 picks a fight where the big store is strongest.",
      reason: "Plan 1 plays where the big store is weak, for builders, with what it lacks. Plan 2 goes first at the strongest rival on its own ground, prices to weekend shoppers: head-on."
    }),
    choice({
      id: "p10-fronts", who: "Tom’s hardware store", first: "bad", fault: "fronts",
      bad: ["This year we open stores in the next two towns, against the hardware store in each.", "And we start selling lumber, against the lumber yard on the highway."],
      good: ["Builders and repair crews in the county.", "Advice, odd parts the big home store does not carry, and doors open at 6 a.m. will bring them to us."],
      goodWhy: "Plan 2 picks one place to play and a way to win there; Plan 1 starts fights with three rivals in three places.",
      reason: "Plan 2 chooses one place to play and a way to win. Plan 1 takes on a hardware store in each of two towns and a lumber yard, all at once: many fronts."
    }),
    // the two parts must fit: both plans choose customers, one wins with what they do not value
    choice({
      id: "p10-misfit", who: "Ana’s flower shop", first: "bad", fault: "misfit",
      bad: ["Couples marrying within an hour of town who want a wedding like no other.", "We win them with the lowest prices in the county and ready-made bouquets on the shelf."],
      good: ["Couples marrying within an hour of town who want a wedding like no other.", "We win them with three planning meetings, flowers ordered for each wedding, and Ana there on the day."],
      goodWhy: "Both plans choose the same couples; only Plan 2 wins them with what they value, flowers made for their wedding alone.",
      reason: "Both plans play for couples who want a wedding like no other. Plan 2 wins them with flowers planned for their wedding; Plan 1’s cheap ready-made bouquets are what those couples do not want: the two parts do not fit."
    }),
    alone({
      id: "p10-alone", who: "Ben’s garage",
      lines: ["Owners of cars built before 1980, across the county, who cannot find a mechanic who knows them.", "They will pick us for two mechanics trained on those cars, and parts from the salvage yards we know.", "We stop quick oil changes, which take the bays those cars need."],
      right: "chooses",
      reason: "The plan names its customers, owners of old cars, and a way to win that they value, mechanics who know those cars and the parts for them, and it drops oil changes: it chooses."
    }),

    // ----- the second group (nothing marked) -----
    choice({
      id: "q10-gym", who: "Mark’s gym", first: "bad", fault: "doall",
      bad: ["This year’s top priorities: more members, new classes, a smoothie bar, a phone app, longer hours, lower prices and a second site.", "Every one of them matters, and we will do them all."],
      good: ["Serious lifters within a short drive.", "Coaches on the floor all day and heavy racks with room to use them, which the budget gyms do not have, will bring them here."],
      goodWhy: "Plan 2 chooses its members and why they pick Mark; Plan 1 makes everything a priority.",
      reason: "Plan 2 chooses: serious lifters, won with what budget gyms lack. Plan 1 makes seven things top priority and drops none: do it all."
    }),
    choice({
      id: "q10-print", who: "Omar’s print shop", first: "good", fault: "copycat",
      good: ["Law firms in the county that need court papers the same day: those are our customers.", "A press kept free for their rush orders, and a driver who takes papers straight to the court, are why they will use us and not another shop."],
      bad: ["We play for homeowners and small offices in the county.", "We win with online ordering, a loyalty card and a discount on big orders, run more smoothly than the other print shops do."],
      goodWhy: "Plan 1 picks customers and a way to win them; Plan 2 names customers but wins with what every print shop has.",
      reason: "Plan 1 chooses law firms and wins with what they need. Plan 2 sounds like a choice, but its way to win is what every print shop already does, run better: copycat."
    }),
    choice({
      id: "q10-tacos", who: "Carlos’s taco truck", first: "bad", fault: "headon",
      bad: ["We play for the lunch crowd at the busiest corner downtown, next to the city’s biggest burger chain.", "We win by selling burgers cheaper than theirs."],
      good: ["Factory workers with a 30-minute lunch break.", "Five tacos ready in two minutes at the factory gates, ordered by text on the way out, so they eat and still rest."],
      goodWhy: "Plan 2 picks customers the chains do not serve well; Plan 1 takes on the biggest chain at its own game.",
      reason: "Plan 2 chooses workers with short breaks and a way to win them. Plan 1 goes first at the biggest chain, on burgers and price, its own ground: head-on."
    }),
    choice({
      id: "q10-tutors", who: "Kim’s tutoring business", first: "good", fault: "fronts",
      good: ["Students taking the state math exams in our county.", "Tutors who have graded those exams, and practice from ten years of past papers, are why their parents will choose us."],
      bad: ["This year we open in four towns at once, against the local tutors in each.", "And we start a summer camp, against the church camp that runs one every year."],
      goodWhy: "Plan 1 picks one place to play and a way to win; Plan 2 fights rivals in four towns and a camp besides.",
      reason: "Plan 1 chooses one kind of student and a way to win them. Plan 2 takes on the tutors of four towns and a camp, all at once: many fronts."
    }),
    choice({
      id: "q10-daycare", who: "Jill’s daycare", first: "bad", fault: "everyone",
      bad: ["Every family in town is our customer, from babies to 12-year-olds.", "Parents who work days, nights or weekends, and parents who stay home: all of them will find a place."],
      good: ["Parents who work hospital shifts.", "Care from 5 a.m. to 9 p.m., two blocks from the hospital, on days that follow the roster: that is why they will choose us."],
      goodWhy: "Plan 2 picks one kind of family and why they choose Jill; Plan 1 reaches for every family at once.",
      reason: "Plan 2 chooses hospital parents and a way to win them. Plan 1 reaches for every child and every kind of parent at once: something for everyone."
    }),
    choice({
      id: "q10-misfit", who: "Sam’s diner", first: "good", fault: "misfit",
      good: ["Truck drivers and shift workers, early in the day, on the highway.", "Breakfast from 5 a.m., served fast at the counter, with room to park a truck."],
      bad: ["Truck drivers and shift workers, early in the day, on the highway.", "A candlelit dinner menu with table service from 6 p.m."],
      goodWhy: "Both plans choose the same customers; only Plan 1 wins them with what they want, early and fast.",
      reason: "Both plans play for drivers and shift workers early in the day. Plan 1 wins them with fast breakfast from 5 a.m.; Plan 2’s candlelit dinners are not what those customers come for: the two parts do not fit."
    }),
    alone({
      id: "q10-dream", who: "Joe’s boat rentals",
      lines: ["We play for the future of the lake.", "We win with passion, quality and a smile."],
      right: "dream",
      reason: "It borrows the form of a choice, but names no customers and no reason anyone would pick Joe over the rental they use now: a dream."
    }),
    alone({
      id: "q10-tailor", who: "Paula’s tailoring shop",
      lines: ["Brides and grooms in the county who need their wedding clothes altered.", "Fittings at their home in the evening, and every job finished within ten days, are why they will come to us."],
      right: "chooses",
      reason: "The plan names its customers, couples with wedding clothes, and a way to win that they value, fittings at home and a fixed finish date: it chooses, even without naming what it stops."
    }),

    // ----- the check -----
    choice({
      id: "k10-detail", who: "Ali’s car-detailing shop", first: "good", fault: "copycat",
      good: ["Owners of new luxury cars in the county, who will not let a car wash touch the paint.", "Hand work by two detailers, done in the owner’s own garage while they are at work."],
      bad: ["Do what the big car-wash chains do: a monthly pass, an app and a free vacuum.", "Run all of it more smoothly than they do."],
      goodWhy: "Plan 1 picks customers and a way to win them; Plan 2 does what every car wash does, a little more smoothly.",
      reason: "Plan 1 chooses owners of new luxury cars and wins with what they value. Plan 2 is the trade’s usual way, run better: copycat."
    }),
    choice({
      id: "k10-music", who: "Lena’s music store", first: "bad", fault: "fronts",
      bad: ["This year we take on the guitar shop downtown, the piano dealer in the next town and the teachers who sell their own books.", "In three towns, all at once."],
      good: ["Parents of children starting school band in the county’s six schools.", "Instruments rented by the month, a free repair each term, and the band teacher’s list ready in September."],
      goodWhy: "Plan 2 picks one place to play and a way to win; Plan 1 fights three rivals in three towns.",
      reason: "Plan 2 chooses band parents and a way to win them. Plan 1 takes on three rivals in three towns at once: many fronts."
    }),
    choice({
      id: "k10-ledger", who: "Rita’s bookkeeping practice", first: "good", fault: "doall",
      good: ["Restaurants with one to three sites in the county.", "Books kept by someone who knows tips, food costs and the state’s meal tax, and closed by the 5th of each month."],
      bad: ["Priorities this year: tax returns, payroll, a website, new software, two hires, a second office and a newsletter.", "All of them by June."],
      goodWhy: "Plan 1 picks customers and a way to win them; Plan 2 starts seven priorities at once.",
      reason: "Plan 1 chooses small restaurants and wins with what they need. Plan 2 starts seven priorities at once and drops none: do it all."
    }),
    choice({
      id: "k10-pool", who: "Dan’s pool-cleaning firm", first: "bad", fault: "misfit",
      bad: ["Owners of holiday homes who are away for months at a time.", "We win them with the lowest price per visit; the owner must be home, or phone us, to let each visit happen."],
      good: ["Owners of holiday homes who are away for months at a time.", "We keep the pool clean while they are gone, send photos after every visit, and fix what breaks without being asked."],
      goodWhy: "Both plans choose the same owners; only Plan 2 wins them with what they value, a pool kept without them.",
      reason: "Both plans play for owners who are away for months. Plan 2 looks after the pool while they are gone; Plan 1 needs the owner home, or on the phone, for every visit, from owners who are away: the two parts do not fit."
    }),
    alone({
      id: "k10-shelves", who: "Nina’s bookshop",
      lines: ["Our customers: children, students, retirees, collectors, tourists and book clubs, every one of them.", "There is a shelf for each, so nobody leaves without a book.", "We close the reading corner to make room for more shelves."],
      right: "everyone",
      reason: "The plan names every kind of reader at once and no reason any of them would pick Nina over where they buy now: something for everyone. Closing the reading corner drops a corner, not a kind of customer."
    }),
    alone({
      id: "k10-sitter", who: "Kate’s pet-sitting service",
      lines: ["Cat owners who travel for work, in the three nearest neighborhoods.", "They will choose us because the same sitter visits twice a day and sends a photo each time.", "We turn down dog walking, which would take the sitters’ mornings."],
      right: "chooses",
      reason: "The plan names its customers, cat owners who travel, and a way to win that they value, the same sitter and a photo each visit, and drops dog walking: it chooses."
    }),

    // ----- held back for the review -----
    choice({
      id: "r10-bread", who: "Dana’s bakery", first: "bad", fault: "headon",
      bad: ["We win back bread buyers from the supermarket’s bakery.", "We will sell a loaf for less than the supermarket does."],
      good: ["Parents and couples who want a cake made for their party.", "Cakes made to order, which the supermarket cannot make, will bring them to us."],
      goodWhy: "Plan 2 plays where the supermarket is weak; Plan 1 fights it on bread price, where it is strongest.",
      reason: "Plan 2 chooses cakes made to order, where the supermarket is weak. Plan 1 fights the supermarket on bread price, its own ground: head-on."
    }),
    choice({
      id: "r10-lawn", who: "Luis’s landscaping crew", first: "good", fault: "copycat",
      good: ["Owners of designed gardens in the north of the county are who we serve.", "They pick us for one crew that knows each garden and keeps notes on its plants."],
      bad: ["We do what the big landscapers do: online quotes, a spring discount, branded trucks.", "And we do it more efficiently."],
      goodWhy: "Plan 1 picks customers and a way to win them; Plan 2 is the trade’s usual way, run more efficiently.",
      reason: "Plan 1 chooses garden owners and a way to win them. Plan 2 is the trade’s usual way, done again: copycat."
    }),
    alone({
      id: "r10-cleaning", who: "a small office-cleaning firm",
      lines: ["Medical offices, which must be cleaned to a strict standard.", "We win them with the cheapest hourly rate in town and cleaners who come whenever there is a free hour."],
      right: "misfit",
      reason: "The plan chooses medical offices, but what they need is cleaning to their standard, and it wins with the cheapest rate and whenever there is a free hour: the two parts do not fit."
    })
  ]);
})();
