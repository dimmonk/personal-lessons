// Strategy, lesson 14 "Run the six questions": whole decisions (research F; P25, D6, D7).
// Practice (w14, p14, q14, r14-tacos): one owner's plan for the year taken through all six questions in order. Each plan names its bet and
// holds the facts for every question, in an order that differs from plan to plan: (1) whether running better would fix it (lesson 2); (2) the
// line that says what is in the way (lesson 1); (3) where the money comes from, the line customers come for that earns the most (lessons 3 to 5);
// (4) what stops a rival copying the difference (lesson 8's common answers); (5) the plan that chooses where to play and how to win, beside one
// that falls into a trap (lessons 6, 7, 10); (6) how to judge the bet (lessons 12 and 13: people already buy this and there is a record, or
// nobody can see yet whether they would; either way the stake stays within what can be lost). A tapped line that is not the challenge names the
// question it answers.
// The check (k14) is the plan's real-world test: ten new one-screen cases an owner meets (a plan, a memo, an offer, a page of numbers), none
// seen in a lesson, each a whole decision: what kind of case it is by the lesson's own question, then the move that follows. Together they reach
// every lesson, and the three costly errors (a goal taken for a strategy, growth for its own sake, serving everyone or straddling) can each be
// made in at least two cases. Two more whole decisions (r14-rival, r14-wall) and r14-tacos are held back for the review. Owners invented.
(() => {
  const BARRIER_THEN = {
    "only-us": "Only this business has it, and a rival cannot get one: the plan says why.",
    fit: "It rests on many activities that fit together, so a rival would have to copy them all and change how it runs.",
    switching: "Trust built over years, or what customers keep here: they would lose by leaving.",
    nothing: "A rival can buy or copy it, so nothing stops a copy: the gain is a race."
  };
  const BARRIERS = ["only-us", "fit", "switching", "nothing"];
  const JUDGE_THEN = {
    outside: "People already buy this, and many like it have opened: start from how they did, and keep the stake within what can be lost.",
    afford: "Nobody can see yet whether people here would buy: try it small, within what can be lost, and learn who buys."
  };
  // what a tapped line answers instead of the challenge
  const ANSWERS = {
    run: "That line answers question 1: whether running better would fix it.",
    money: "That line answers question 3: where the money comes from.",
    barrier: "That line answers question 4: what stops a rival copying.",
    record: "That line answers question 6: how to judge the bet.",
    bet: "That line names the bet itself. What is in the way is what hurt the business, and why."
  };
  const TRAP = {
    everyone: ["serve-everyone", "It reaches for every kind of customer at once: something for everyone."],
    dream: ["goal-as-strategy", "It is a wish: no customer named, no reason they would switch."],
    copycat: ["better-not-different", "It does what every business in the trade does, only better: nothing a rival lacks."],
    fronts: ["rival-ignored", "It takes on several rivals in several places at once."],
    headon: ["rival-ignored", "It takes on the strongest rival where that rival is strongest."],
    doall: ["list-not-choice", "Everything is a priority, so nothing is chosen."]
  };
  // lines: [id, role, text]; the role "challenge" is the line to tap
  function six({ id, from, detail, lines, money, barrier, plans, judge, reason, steps }) {
    const [good, bad, trap] = plans;
    const challenge = lines.find(l => l[1] === "challenge")[0];
    return {
      id, strand: "six-questions", facets: { scale: "owner" },
      blocks: [{ kind: "message", id: "notes", form: "note", from, detail,
        lines: lines.map(([lid, role, text]) => ({ id: lid, text, ...(role === "challenge" ? {} : { note: ANSWERS[role] }) })) }],
      asks: [
        { id: "problem", kind: "choose", prompt: "1. What does this business need?", from: "verdict", only: ["run-better", "position"], right: "position",
          then: { "run-better": "It already runs as well as its rivals, so doing the same things better would leave it where it is." }, slips: { "run-better": "running-as-strategy" } },
        { id: "challenge", kind: "tap", prompt: "2. Tap the line that says what is in the way.", in: "notes", right: [challenge] },
        { id: "money", kind: "choose", prompt: "3. Where does the money come from?", shuffle: true, options: money.map(([oid, text, ok, then, slip]) => ok ? { id: oid, text, ok: true } : { id: oid, text, then, ...(slip ? { slip } : {}) }) },
        { id: "barrier", kind: "choose", prompt: "4. What stops a rival copying what makes the business different?", from: "barrier", right: barrier,
          then: Object.fromEntries(BARRIERS.filter(b => b !== barrier).map(b => [b, BARRIER_THEN[barrier]])),
          ...(barrier === "nothing" ? { slips: { "only-us": "copyable-as-lasting", fit: "copyable-as-lasting", switching: "copyable-as-lasting" } } : {}) },
        { id: "plan", kind: "choose", prompt: "5. Which plan makes a real choice?", shuffle: true, options: [
          { id: "good", text: good, ok: true },
          { id: "bad", text: bad, slip: TRAP[trap][0], then: TRAP[trap][1] }] },
        { id: "judge", kind: "choose", prompt: "6. How should the owner judge the bet?", from: "judge", right: judge,
          then: { [judge === "outside" ? "afford" : "outside"]: JUDGE_THEN[judge] } }
      ],
      ...(steps ? { steps } : {}),
      deciding: [challenge],
      reason
    };
  }

  // ----- a whole decision for the check and the review: a document, then asks in the order an owner would put them -----
  const owner = (id, blocks, asks, deciding, reason) => ({ id, strand: "six-questions", facets: { scale: "owner" }, blocks, asks, ...(deciding.length ? { deciding } : {}), reason });
  const note = (from, detail, lines) => ({ kind: "message", id: "notes", form: "note", from, detail, lines: lines.map(([lid, text, n]) => ({ id: lid, text, ...(n ? { note: n } : {}) })) });
  const pick = (id, prompt, right, others) => ({ id, kind: "choose", prompt, shuffle: true,
    options: [{ id: "ok", text: right, ok: true }, ...others.map(([text, then, slip], i) => ({ id: `o${i + 1}`, text, then, ...(slip ? { slip } : {}) }))] });
  const fromList = (id, prompt, list, only, right, then, slips) => ({ id, kind: "choose", prompt, from: list, ...(only ? { only } : {}), right, then, ...(slips ? { slips } : {}) });

  FC.items("strategy", [
    // ----- the worked decision -----
    six({
      id: "w14-bakery", from: "Dana’s plan for the year ahead", detail: "Written in January",
      lines: [
        ["c1", "run", "Our ovens, bakers and waste are as good as any bakery’s in the county."],
        ["c2", "challenge", "Since the supermarket opened its own bakery, selling a loaf at half our price, our bread sales fell by a third."],
        ["c3", "money", "Bread still brings in the most money; wedding cakes earn the most after their costs, and couples drive across the county for them."],
        ["c4", "barrier", "Our cakes rest on a talk with each couple, bakers who make nothing else, and photos of every past cake: the supermarket would have to change how its bakery runs to match all of it."],
        ["c5", "bet", "The bet: turn the bread room into a second cake kitchen for $40,000. We could lose $25,000 and keep going."],
        ["c6", "record", "Cake shops that make cakes to order have opened in many towns, and the state lists how long each lasted."]],
      money: [["cakes", "Wedding cakes, which couples come for and which earn the most", true], ["bread", "Bread, which brings in the most money of anything the bakery sells", false, "Bread brings in the most, but cakes earn the most after their costs.", "sales-not-profit"], ["coffee", "Coffee sold with the bread", false, "The plan gives coffee no part in what the bakery earns."]],
      barrier: "fit",
      plans: ["Play for couples and parents who want a cake made for their party; win with cakes made to order; keep only three loaves", "Win back the bread buyers by selling a loaf below the supermarket’s price", "headon"],
      judge: "outside",
      steps: [
        { id: "one", does: "1. Is it a strategy problem?", working: "Dana already runs as well as any bakery, and the supermarket sells at half her price. Running better will not fix that: she needs a different position.", ask: "problem" },
        { id: "two", does: "2. What is in the way?", working: "The supermarket’s bread at half the price, which cut her bread sales by a third.", ask: "challenge" },
        { id: "three", does: "3. Where does the money come from?", working: "Wedding cakes: they earn the most after their costs, and couples come from across the county for them. Bread only brings in the most.", ask: "money" },
        { id: "four", does: "4. What stops a copy?", working: "The cakes rest on several pieces that fit: the talk, the bakers, the photos. The supermarket would have to change all of it.", ask: "barrier" },
        { id: "five", does: "5. Which plan chooses?", working: "Cakes made to order for parties, with bread cut back. Cutting the bread price takes on the supermarket where it is strongest.", ask: "plan" },
        { id: "six", does: "6. How to judge the bet?", working: "Cake shops like it have opened in many towns and the state lists how they did: start from that record. The kitchen costs $40,000 against the $25,000 she can lose, so she does it in two steps, the ovens first.", ask: "judge" }],
      reason: "Dana runs as well as any bakery, so the supermarket’s half-price bread is a strategy problem. Her money is in wedding cakes, which rest on pieces the supermarket would have to copy all at once; the plan that chooses plays for cake buyers and cuts bread back. Cake shops have a record, so she starts from it, and keeps the stake within the $25,000 she can lose."
    }),

    // ----- the first group (the deciding lines marked) -----
    six({
      id: "p14-gym", from: "Mark’s plan for the year ahead", detail: "Written in February",
      lines: [
        ["c1", "money", "Coached training for serious lifters earns the most, and they come from three towns for it."],
        ["c2", "run", "Our gym is as clean and as well run as any of them, and our rent is as low as any gym’s in town."],
        ["c3", "challenge", "Three $15 gyms opened nearby. 40 members left."],
        ["c4", "record", "Gyms for lifters have opened in many towns, and the county lists 42 with how long each lasted."],
        ["c5", "barrier", "It rests on coaches all day, heavy racks with room and monthly checks: a budget gym would have to change how it runs to match it."],
        ["c6", "bet", "The bet: a second lifting room for $30,000, within the $35,000 we could lose."]],
      money: [["coached", "Coached training for serious lifters", true], ["any", "As many members as possible, at any price", false, "More members at any price is growth for its own sake; the money is in coached training.", "growth-for-growth"], ["shakes", "Protein shakes at the desk", false, "The plan gives the shakes no part in what the gym earns."]],
      barrier: "fit",
      plans: ["Play for serious lifters; win with coaches and racks the budget gyms do not have; drop the cheap plan", "Add a $15 plan, classes, a pool and a kids’ club so every kind of member finds something", "everyone"],
      judge: "outside",
      reason: "Mark runs as well as the budget gyms, so the $15 gyms are a strategy problem. Coached training earns the most and rests on pieces that fit; the plan that chooses plays for lifters. Lifting gyms have a record to start from, and the $30,000 room is within what he can lose."
    }),
    six({
      id: "p14-print", from: "Omar’s plan for the year ahead", detail: "Written in March",
      lines: [
        ["c1", "barrier", "We hold the only contract to print for the county court’s filing office, for five years: it is what lets us file the firms’ papers the same day."],
        ["c2", "money", "Three law firms earn us the most, and they come to us for court papers the same day."],
        ["c3", "challenge", "Online printers now take the walk-in and invitation jobs, and our walk-in sales fell 40%."],
        ["c4", "run", "Our press runs as well as any shop’s, and every shop in town lost the same jobs."],
        ["c5", "record", "Same-day court printing for firms in the next city: no printer there has offered it, so nobody can see yet whether those firms would pay."],
        ["c6", "bet", "The bet: a courier and a second press for the next city. A courier alone for three months would cost $6,000."]],
      money: [["firms", "The three law firms and their same-day court papers", true], ["walkins", "Walk-in jobs, which fill the shop and the counter all day long", false, "Walk-in jobs are the ones lost to online printers; the firms earn the most.", "sales-not-profit"], ["cards", "Business cards", false, "The plan gives business cards no part in what the shop earns."]],
      barrier: "only-us",
      plans: ["Play for law firms; win with court papers the same day; stop walk-in jobs", "Our mission: to be the county’s favorite printer", "dream"],
      judge: "afford",
      reason: "Omar runs as well as any shop, and online printers took the walk-in jobs from all of them: a strategy problem. His money is the law firms, and only he holds the court contract. The plan that chooses plays for the firms. Nobody can see yet whether the next city’s firms would pay, so he tries the courier alone first, a stake he can lose."
    }),

    // ----- the second group (nothing marked) -----
    six({
      id: "q14-cafe", from: "Priya’s plan for the year ahead", detail: "Written in April",
      lines: [
        ["c1", "run", "Our coffee and service are as good as any cafe’s on the street, and every cafe here lost the same customers."],
        ["c2", "record", "Cafes built for people working from home have opened in many cities, and a trade group lists how they did."],
        ["c3", "barrier", "Any cafe could put plugs at its tables and sell a day pass next month."],
        ["c4", "challenge", "The office towers went to three days a week, so the room is empty on Mondays and Fridays."],
        ["c5", "money", "Day passes for people working from home earn the cafe more than anything else it sells, and no other cafe on the street sells them yet."],
        ["c6", "bet", "The bet: booths for calls in the back room, $12,000, paid back within a year if the passes hold up."]],
      money: [["passes", "Day passes for people working from home", true], ["lunch", "Lunch on Tuesday to Thursday, when the room is full", false, "A full room is not the same as the most earned; the passes earn the most.", "sales-not-profit"], ["beans", "Bags of coffee beans", false, "The plan gives the beans no part in what the cafe earns."]],
      barrier: "nothing",
      plans: ["Play for people working from home nearby on Mondays and Fridays; win with quiet, plugs and rooms for calls", "Do what the best cafes do: a loyalty app, oat milk and fresh pastries, done better than theirs", "copycat"],
      judge: "outside",
      reason: "Priya runs as well as any cafe, and every cafe lost the office crowd: a strategy problem. The passes earn the most, but nothing stops another cafe selling them: a race, not a lasting position. Of the two plans only the first chooses customers and a way to win; work cafes have a record to start from."
    }),
    six({
      id: "q14-tutor", from: "Kim’s plan for the year ahead", detail: "Written in May",
      lines: [
        ["c1", "challenge", "An app sells exam practice for $10 a month. Our sign-ups fell by a quarter."],
        ["c2", "barrier", "That rests on tutors who graded the exam, ten years of past papers with our notes and a report each week: the app would need all of it."],
        ["c3", "run", "Our tutors are as good as any in the state, and our fees are as low as a tutor’s can be."],
        ["c4", "money", "Tutoring students who must pass the math exam earns the most, and parents come for tutors who have graded it."],
        ["c5", "bet", "The bet: a class for students who failed the exam once. One trial class costs us $800."],
        ["c6", "record", "Classes for students who failed once: nobody near us has offered them, so nobody can see yet how many families would pay."]],
      money: [["exam", "Tutoring for students who must pass the math exam", true], ["volume", "As many students as possible, in every subject", false, "More students in every subject is growth for its own sake; the money is in exam tutoring.", "growth-for-growth"], ["books", "Selling practice books", false, "The plan gives the books no part in what the business earns."]],
      barrier: "fit",
      plans: ["Play for students who must pass, starting with those who failed once; win with tutors who graded the exam", "Fight the app on price, the test-prep chain on hours and the schools’ free help, in four towns at once", "fronts"],
      judge: "afford",
      reason: "Kim runs as well as any tutor, and the app sells for far less than a tutor can: a strategy problem. Exam tutoring earns the most and rests on pieces that fit. The plan that chooses plays for students who must pass. Nobody can see yet whether families would pay for the class, so she runs one trial class for $800."
    }),

    // ----- the check: ten new whole decisions -----
    owner("k14-salon", [note("Tina’s plan for her hair salon", "Written in January", [
      ["s1", "This year we grow sales by a quarter, to $400,000."],
      ["s2", "We want every client to leave feeling like a star."],
      ["s3", "We will be the first name people think of for hair in town."],
      ["s4", "By December, every chair has a waiting list."]])],
    [fromList("verdict", "What is this plan?", "verdict", ["goal", "todo", "strategy"], "goal",
      { todo: "It lists no step anyone could put on a calendar; it only says where Tina wants to be.", strategy: "No line says what is in the way, so there is nothing for a plan to get past." },
      { strategy: "goal-as-strategy" }),
     pick("first", "What should Tina write first?", "Why clients who come once do not come back, or why new ones go elsewhere",
      [["A bigger target for the year, so that the whole team aims higher every month", "A bigger target is still a target: it says nothing about what is in the way.", "goal-as-strategy"],
       ["Ten things to try this year, from a loyalty card to opening late", "Steps with no challenge behind them are a to-do list.", "list-not-choice"]])],
    [], "Every line is a target or a wish: none says what is in the way, so it is a goal. The first thing to write is the challenge: why clients do not come back, or go elsewhere."),

    owner("k14-hvac", [note("Ben’s memo to his partner", "Heating and cooling installs, after the spring bids", [
      ["h1", "We lost six of the last ten install bids."],
      ["h2", "The two firms that won quote the same units, at the same price per unit as ours."],
      ["h3", "Their crews finish a house in one day and ours take two, so our labor costs more on every bid."],
      ["h4", "They use pre-built kits from the supplier we also buy from."],
      ["h5", "Customers say they like our follow-up calls."]])],
    [fromList("problem", "What does Ben’s business need?", "verdict", ["run-better", "position"], "run-better",
      { position: "The rivals do the same work in one day with kits anyone can order: catching up would fix the bids." }, { position: "running-as-strategy" }),
     pick("move", "What should Ben do?", "Order the same kits and train the crews to finish a house in a day",
      [["Stop bidding on new installs and offer only repairs to old systems instead", "That changes the position for a gap any crew can close.", "running-as-strategy"],
       ["Aim to win eight of the next ten bids, and push the crews to reach it", "A goal says where Ben wants to be, not how: the crews would still take two days.", "goal-as-strategy"],
       ["Cut every bid by a tenth and keep the two-day crews", "The cut comes out of the margin; the second day of labor stays."]])],
    ["h3"], "Rivals win with the same units at the same price, doing the work in one day with kits Ben can also buy: a gap in running the business. He catches up."),

    owner("k14-cleaner", [note("Rosa’s page of numbers", "Dry cleaning: a four-week trial of same-day shirts", [
      ["v1", "We offered same-day shirts at $4 more per order."],
      ["v2", "60 regular customers paid it; asked, most said $4.50 more was the most they would pay."],
      ["v3", "Same-day adds $1.50 of work per order: a second press run before 5 p.m."],
      ["v4", "Other cleaners in town charge what we charge for next-day shirts."]])],
    [fromList("value", "Does same-day service grow the value created?", "verdict", ["grows", "moves", "shrinks"], "grows",
      { moves: "It changes what customers would pay: up to $4.50 more, for $1.50 more work.", shrinks: "The added work, $1.50, is less than what customers would pay more, $4.50." },
      { moves: "grown-as-moved" }),
     pick("price", "Where must Rosa’s extra charge for same-day sit so that both she and her customers gain?", "Between $1.50 and $4.50 more per order",
      [["Above $4.50 more per order, to keep all the value for the shop", "Above $4.50 most would not buy, so little value is made at all."],
       ["Below $1.50 more per order, to win the most customers", "Below the $1.50 of added work, she loses on every order."]])],
    ["v2", "v3"], "Customers would pay up to $4.50 more and the work adds $1.50, so same-day grows the value by about $3 an order. Any price between the two splits it: the $4 she tried keeps $2.50 for Rosa and leaves 50 cents with the customer."),

    owner("k14-cleaning", [note("Ana’s memo for the year ahead", "Commercial cleaning", [
      ["q1", "We clean as well and as cheaply as any firm the hospitals have tried."],
      ["q2", "Cleaners are easy to hire at the wage we pay, and our supplies cost what everyone’s do."],
      ["q3", "Two hospital systems bring in 80% of our sales, and each has cut our price 5% at every yearly rebid for three years."],
      ["q4", "Clinics and dental offices need cleaning to the same medical rules, and pay list price."]])],
    [fromList("force", "Who takes the money from Ana’s business?", "force", null, "buyers",
      { suppliers: "Cleaners and supplies are easy to get at the usual price: suppliers take little.", entrants: "No line shows newcomers taking the money; the two hospitals cut the price.",
        substitutes: "Nothing else meets the hospitals’ need here; they press the price.", rivals: "The cuts come from the two buyers’ rebids, not from a price war among firms." }),
     pick("plan", "Which plan makes a real choice?", "Clinics and dental offices at list price for medical cleaning; hospitals kept under a third of sales",
      [["Win a third hospital system, so that no single hospital matters as much to us", "A third big buyer rebids too: more of the sales would sit with buyers who press the price.", "growth-for-growth"],
       ["Clean for everyone: hospitals, homes, offices and schools, so that no paying job anywhere is ever turned away", "Every kind of customer at once chooses nothing.", "serve-everyone"]])],
    ["q3"], "Two buyers hold 80% of the sales and cut the price at every rebid: the buyers squeeze. The plan that chooses moves toward customers who pay list price for what Ana already does well."),

    owner("k14-catering", [{ kind: "document", form: "table", title: "Lee’s catering: last year, by kind of customer", head: ["Customers", "Brought in", "Direct cost"],
      rows: [{ id: "r1", cells: ["Office lunches", "$120,000", "$105,000"] }, { id: "r2", cells: ["Weddings", "$90,000", "$50,000"] }, { id: "r3", cells: ["Festival stand", "$30,000", "$38,000"] }],
      notes: ["Couples book Lee for family recipes no other caterer in the county cooks; office lunches are the sandwiches every caterer makes.",
        "At the festival Lee charges $9 a plate; the other stands charge $14, and the food costs the same.",
        "Few of the festival’s buyers book anything else."] }],
    [pick("core", "Which customers are the core?", "Weddings",
      [["Office lunches", "They bring in the most, but earn $15,000 after their costs, and every caterer makes the same sandwiches.", "sales-not-profit"],
       ["Festival stand", "It loses $8,000 after its direct costs."]]),
     fromList("loser", "What should Lee do with the festival stand, which loses money?", "verdict", ["fix", "cut-loss", "let-go"], "fix",
      { "let-go": "Lee charges $9 where the other stands charge $14 for the same food: a price change could make it pay. Try that before dropping it.",
        "cut-loss": "A price change could make it pay, so its loss need not be kept: fix the price first." })],
    ["r2", "r3"], "Weddings earn $40,000, more than the office lunches’ $15,000, and couples come for recipes no one else cooks: the core. The stand loses $8,000, but at the $14 other stands charge it would pay: keep it and fix its price."),

    owner("k14-bikes", [note("Jo’s plan for the bike shop", "Written in February", [
      ["t1", "Parents keep asking us for the cheap kids’ bikes the big store sells."],
      ["t2", "We fit racing bikes to riders by appointment; riders drive an hour for it, and Saturdays are our full days."],
      ["t3", "The idea: on Saturdays, sell kids’ bikes and fix flats while you wait, with our two fitters, and keep every fitting slot."],
      ["t4", "Kids’ bikes would bring in about $30,000 a year."]])],
    [fromList("kind", "What kind of move is this?", "verdict", ["tradeoff", "straddle", "fits"], "straddle",
      { tradeoff: "Nothing is given up: every fitting slot stays.", fits: "The walk-in work needs the same two fitters on the same Saturdays the fittings fill: it pulls against them." },
      { fits: "serve-everyone" }),
     pick("move", "What should Jo do?", "Keep Saturdays for fittings, and send parents to the big store",
      [["Do both for a season and see which customers stay", "Both would run on the same fitters at once, so riders who drive an hour wait behind flats.", "serve-everyone"],
       ["Drop the fittings and sell kids’ bikes like the big store", "That gives up what riders drive an hour for, to meet the big store at its own game."]])],
    ["t2", "t3"], "The walk-in work and the fittings need the same fitters on the same Saturdays, and Jo keeps both: a straddle. The choice that keeps the position is the fittings."),

    owner("k14-vet", [{ kind: "prose", text: "Dr. Ruiz’s clinic. The position: emergency care for pets at night, when day clinics are closed." },
      note("How the clinic runs: the list of what we do", "This year", [
        ["f1", "Open from 6 p.m. to 8 a.m., every night of the year.", "Serves the position: open when day clinics are closed."],
        ["f2", "Vets and nurses trained for emergencies, with a surgery room always ready.", "Serves the position, and makes the night calls worth sending."],
        ["f3", "Day clinics send their night calls to us, and we send each pet back to its own vet in the morning.", "Serves the position and helps the others: the day clinics send the cases."],
        ["f4", "Cheap vaccination mornings on weekdays, to fill the rooms."],
        ["f5", "Prices posted at the door, above a day visit, paid before treatment.", "Fits: night care costs more to run, and owners in an emergency pay for it."]])],
    [{ id: "line", kind: "tap", prompt: "Tap the activity that does not fit the position.", in: "notes", right: ["f4"], none: "Every activity fits" },
     fromList("barrier", "What stops a day clinic copying the night clinic?", "barrier", null, "fit",
      { "only-us": "Nothing in the list is the only one of its kind; it is the whole group that is hard to copy.", switching: "Owners in an emergency go where the door is open; they keep nothing here that holds them.",
        nothing: "A day clinic would have to staff every night, keep a surgery ready and stop sending its own calls: it would have to change how it runs." },
      { nothing: "copyable-as-lasting" })],
    ["f4"], "Cheap weekday mornings serve another customer, at the hours the night staff sleep: they do not fit. The rest fit together, so a day clinic would have to copy all of them and change how it runs."),

    owner("k14-sauce", [note("Mel’s notes on the grocery chain’s offer", "Hot sauce in small batches, written in May", [
      ["g1", "The chain would pay within 30 days, and the deal would double our sales in a year."],
      ["g2", "We make small-batch sauces from peppers grown on two farms nearby; specialty shops sell them at $12 a bottle."],
      ["g3", "The chain wants a sauce under its own label at $3 a bottle, ten times our yearly volume."],
      ["g4", "To make it we would add a night shift and buy cheaper peppers from a broker: our farm peppers alone cost $2.50 a bottle."]])],
    [fromList("growth", "Does the chain’s deal deepen the core or blur it?", "verdict", ["deepens", "blurs"], "blurs",
      { deepens: "It needs a night shift, other peppers and a $3 buyer: new activities for another kind of customer." }, { deepens: "growth-for-growth" }),
     pick("move", "What should Mel do?", "Turn the chain down, and find more specialty shops for the farm sauces",
      [["Take it: doubling sales in a single year is a chance that rarely comes twice", "Doubled sales say nothing about the position: the deal runs on other peppers, other hours and a $3 buyer.", "growth-for-growth"],
       ["Take it, using the same farm peppers at $3 a bottle", "The farm peppers alone cost $2.50 a bottle: she would make almost nothing, or switch peppers after all.", "growth-for-growth"]])],
    ["g3", "g4"], "The deal needs a night shift, broker peppers and a $3 buyer: growth that blurs a business built on farm peppers at $12. Doubled sales do not change that."),

    owner("k14-groomer", [note("Ray’s plan for a grooming van", "Written in April", [
      ["b1", "The move: a van that grooms dogs at the owner’s door, for $25 more than at the shop."],
      ["b2", "Owners must pay the $25 more: 30 of them have paid a deposit."],
      ["b3", "The van must do six dogs a day to pay for itself: the van’s seller says it can."],
      ["b4", "In the shop each dog takes us 70 minutes, the van would drive 20 minutes between homes, and our groomers work an eight-hour day."],
      ["b5", "The city must let the van park on the street: the permit came last week."]])],
    [pick("first", "Which condition should Ray test first?", "That the van can do six dogs a day",
      [["That owners will pay $25 more", "Thirty deposits are money paid: evidence it holds."],
       ["That the city lets the van park on the street", "The permit came last week: it already holds."]]),
     pick("test", "How should he test it?", "Rent a van for two weeks and count the dogs done each day",
      [["Write the full plan with five years of numbers first", "Those numbers would rest on six dogs a day, the condition most in doubt.", "plan-first"],
       ["Get the van’s seller to put the six dogs in writing", "In writing it is still the seller’s word; a count of his own costs little.", "talk-as-evidence"]])],
    ["b3", "b4"], "Six dogs at 70 minutes each plus 20 minutes of driving between them is nearly nine hours, more than the eight-hour day: a fact against the seller’s word. The deposits and the permit already hold. Test the six dogs first, cheaply, with a rented van."),

    owner("k14-taqueria", [note("Lupe’s page of numbers for a second taqueria", "Written in July", [
      ["o1", "A full second shop would cost $300,000; we could lose $60,000 and keep the first shop and our home going."],
      ["o2", "Our taqueria has made money for six years, and our plan shows a second one paying back in 18 months."],
      ["o3", "A small rented counter in the next town, the same tacos with two staff, would cost $55,000 to fit out."],
      ["o4", "The county lists 140 restaurants opened in the last ten years; about four in ten were still open after five."]])],
    [fromList("judge", "How should Lupe judge the second taqueria?", "judge", null, "outside",
      { afford: "People already buy tacos in shops like hers, and the county lists how 140 did: the record is the start." }),
     pick("move", "What should she do?", "Open the small rented counter in the next town, and grow it only if it does well",
      [["Open the full shop: six good years and the plan say it pays back", "Her plan is her own story; the record says four in ten, and $300,000 is five times what she can lose.", "bet-too-big"],
       ["Pay a firm for a forecast of the next town’s market before deciding anything", "The county’s record is already there; a forecast is one more plan, and the rented counter keeps the stake within what she can lose.", "inside-view"]])],
    ["o1", "o4"], "Restaurants have a record: about four in ten last five years, whatever the plan says. A full shop stakes five times what Lupe can lose; the rented counter is the same project cut down to fit within it."),

    // ----- held back for the review -----
    six({
      id: "r14-tacos", from: "Carlos’s plan for the year ahead", detail: "Written in June",
      lines: [
        ["c1", "money", "Five tacos in two minutes for factory workers on a short break earn the most."],
        ["c2", "barrier", "We hold the only permit to park at the factory gates, for three more years."],
        ["c3", "run", "Our truck runs as fast and clean as any truck in town."],
        ["c4", "record", "Food trucks at factories are common, and the county lists how long each one lasted."],
        ["c5", "challenge", "Two burger chains opened by the factory and took a third of our lunch customers."],
        ["c6", "bet", "The bet: a second truck at the factory’s other gate, $45,000, within the $50,000 we could lose."]],
      money: [["tacos", "Five fast tacos for workers on a short break", true], ["menu", "A full menu for every customer", false, "A full menu reaches for every customer; the money is in the five fast tacos.", "serve-everyone"]],
      barrier: "only-us",
      plans: ["Play for workers on a 30-minute break; win with five tacos in two minutes at the factory", "Sell burgers cheaper than the chains", "headon"],
      judge: "outside",
      reason: "Carlos runs as well as any truck, and the chains took his customers: a strategy problem. The fast tacos earn the most, and only he can park at the factory. The plan that chooses plays for workers on a short break; food trucks have a record to start from, and the second truck is within what he can lose."
    }),
    owner("r14-rival", [note("Sam’s memo on a price cut", "Coffee cart at the train station, written in September", [
      ["m1", "The idea: cut our latte from $5 to $4 to win more commuters."],
      ["m2", "The chain cafe across the hall serves the same commuters, at $5, from the same 6 a.m. trains."],
      ["m3", "The chain sets prices for 300 cafes and has matched every cut on this line before."],
      ["m4", "Our oat lattes are made with beans roasted down the street, which commuters say they come for."]])],
    [pick("rival", "What will the chain do if Sam cuts to $4?", "Match the cut: the commuters are its own, and a price is easy to change",
      [["Let it go: a coffee cart at the station is too small for a chain of 300 cafes to notice", "The cut takes the chain’s own commuters, and it can match without changing how it runs.", "rival-ignored"],
       ["Close its cafe in the station", "Nothing in the memo says the cafe loses money; matching costs it little."]]),
     pick("move", "What should Sam do?", "Keep $5, and lean on the local beans commuters come for",
      [["Cut to $4 and hope the chain is slow to notice the cart’s new price", "It has matched every cut before; Sam would be left at $4 with the same share.", "rival-ignored"],
       ["Cut to $3 so the chain cannot follow", "A chain that prices 300 cafes can follow lower than a cart can.", "rival-ignored"]])],
    ["m2", "m3"], "The cut takes the chain’s own commuters, and it can follow without changing how it runs: it will answer. Sam’s difference is the local beans, which the chain would have to change how it buys to copy."),
    owner("r14-wall", [note("Nadia’s idea for her climbing gym", "Written in August", [
      ["w1", "A climbing wall on a trailer, for school fairs and town festivals."],
      ["w2", "No one here has offered one, so nobody can see yet whether fairs would book it."],
      ["w3", "Building our own would cost $90,000; we could lose $20,000 and keep going."],
      ["w4", "A rental wall can be had for $1,500 a weekend."],
      ["w5", "The fair organizers we know all said they love the idea."]])],
    [fromList("judge", "How should Nadia judge the bet?", "judge", null, "afford",
      { outside: "Nobody here has been offered one, so no table shows whether fairs would book it: try it small and learn." }),
     pick("move", "What should she do?", "Rent a wall for three fairs this fall and see who books it",
      [["Build the $90,000 wall: the organizers love the idea", "Liking an idea costs nothing, and $90,000 is far more than she can lose.", "bet-too-big"],
       ["Wait for a survey of the town’s parents to show there is enough demand", "A survey of people never offered it is talk; renting for three fairs shows who books, for $4,500.", "talk-as-evidence"]])],
    ["w2", "w3"], "Nobody can see yet whether fairs would book a wall, and building one costs far more than Nadia can lose. Renting for three fairs, $4,500, stays within it and shows who books.")
  ]);
})();
