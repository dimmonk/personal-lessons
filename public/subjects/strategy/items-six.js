// Strategy, lesson 14 "Run the six questions": one decision taken through all six questions in order, in one question (research F; P25, D6, D7).
// Each note holds the facts for every question: (1) is it a strategy problem (the business already runs as well as its rivals, so running better
// will not fix it: lesson 2); (2) the line that says what is in the way (lesson 1); (3) where the money comes from: the line customers come for
// that earns the most (lessons 3 to 5); (4) what stops a rival copying the difference (lesson 8's barrier); (5) the plan that chooses where to play
// and how to win, beside one that falls into a trap (lessons 6, 7, 10); (6) which way of judging the bet fits (lessons 12 and 13). Every item is a
// strategy problem, because the rest of the questions only apply to one; lesson 2's telling apart is in the check, drawn from every topic.
(() => {
  const BARRIER_THEN = {
    "only-us": "Only this business has it, and a rival cannot get one: the notes say why.",
    fit: "It rests on many activities that fit together, so a rival would have to copy them all.",
    nothing: "A rival can buy or copy it, so nothing stops a copy."
  };
  const JUDGE_THEN = {
    outside: "This kind of project has been done many times, and the record is there: use it.",
    afford: "Nobody has done this, so there is no record: cap the bet at what can be lost."
  };
  const OTHER_Q = "That line answers another of the six questions. What is in the way is what hurt the business, and why.";
  const TRAP_SLIP = { everyone: "serve-everyone", dream: "goal-as-strategy", copycat: "better-not-different", fronts: "rival-ignored", headon: "rival-ignored", doall: "list-not-choice" };
  function six({ id, from, detail, lines, challenge, money, barrier, plans, judge, reason, steps }) {
    const [good, bad, trap] = plans;
    return {
      id, strand: "six-questions", facets: { scale: "owner" },
      blocks: [{ kind: "message", id: "notes", form: "note", from, detail, lines: lines.map(([lid, text]) => ({ id: lid, text, ...(lid === challenge ? {} : { note: OTHER_Q }) })) }],
      asks: [
        { id: "problem", kind: "choose", prompt: "1. What does this business need?", from: "verdict", only: ["run-better", "position"], right: "position",
          then: { "run-better": "It already runs as well as its rivals, so doing the same things better would leave it where it is." }, slips: { "run-better": "running-as-strategy" } },
        { id: "challenge", kind: "tap", prompt: "2. Tap the line that says what is in the way.", in: "notes", right: [challenge] },
        { id: "money", kind: "choose", prompt: "3. Where does the money come from?", shuffle: true, options: money.map(([oid, text, ok, then, slip]) => ok ? { id: oid, text, ok: true } : { id: oid, text, then, ...(slip ? { slip } : {}) }) },
        { id: "barrier", kind: "choose", prompt: "4. What stops a rival copying what makes the business different?", from: "barrier", right: barrier,
          then: Object.fromEntries(["only-us", "fit", "nothing"].filter(b => b !== barrier).map(b => [b, BARRIER_THEN[barrier]])),
          ...(barrier === "nothing" ? { slips: { "only-us": "copyable-as-lasting", fit: "copyable-as-lasting" } } : {}) },
        { id: "plan", kind: "choose", prompt: "5. Which plan makes a real choice?", shuffle: true, options: [
          { id: "good", text: good, ok: true },
          { id: "bad", text: bad, slip: TRAP_SLIP[trap], then: "It falls into a trap: it never chooses where to play and how to win there." }] },
        { id: "judge", kind: "choose", prompt: "6. Before betting on the plan, which way of judging it fits?", from: "judge", right: judge,
          then: { [judge === "outside" ? "afford" : "outside"]: JUDGE_THEN[judge] } }
      ],
      ...(steps ? { steps } : {}),
      deciding: [challenge],
      reason
    };
  }

  FC.items("strategy", [
    // ----- the worked decision -----
    six({
      id: "w14-bakery", from: "Dana’s notes for the year ahead", detail: "Written in January",
      lines: [
        ["c1", "Our ovens, bakers and waste are as good as any bakery’s in the county."],
        ["c2", "Since the supermarket opened its own bakery, selling a loaf at half our price, our bread sales fell by a third."],
        ["c3", "Bread still brings in the most money; wedding cakes earn the most after their costs, and couples drive across the county for them."],
        ["c4", "Our cakes rest on a talk with each couple, bakers who make nothing else, and photos of every past cake: the supermarket would have to change how its bakery runs to match all of it."],
        ["c5", "Cake shops that make cakes to order have opened in many towns, and the state lists how long each lasted."]],
      challenge: "c2",
      money: [["cakes", "Wedding cakes, which couples come for and which earn the most", true], ["bread", "Bread, which brings in the most money", false, "Bread brings in the most, but cakes earn the most after their costs.", "sales-not-profit"], ["coffee", "Coffee sold with the bread", false, "The notes give coffee no part in what the bakery earns."]],
      barrier: "fit",
      plans: ["Play for couples and parents who want a cake made for their party; win with cakes made to order; keep only three loaves", "Win back the bread buyers by selling a loaf below the supermarket’s price", "headon"],
      judge: "outside",
      steps: [
        { id: "one", does: "1. Is it a strategy problem?", working: "Dana already runs as well as any bakery, and the supermarket sells at half her price. Running better will not fix that: she needs a different position.", ask: "problem" },
        { id: "two", does: "2. What is in the way?", working: "The supermarket’s bread at half the price, which cut her bread sales by a third.", ask: "challenge" },
        { id: "three", does: "3. Where does the money come from?", working: "Wedding cakes: they earn the most after their costs, and couples come from across the county for them. Bread only brings in the most.", ask: "money" },
        { id: "four", does: "4. What stops a copy?", working: "The cakes rest on several pieces that fit: the talk, the bakers, the photos. The supermarket would have to change all of it.", ask: "barrier" },
        { id: "five", does: "5. Which plan chooses?", working: "Cakes made to order for parties, with bread cut back. Cutting the bread price takes on the supermarket where it is strongest.", ask: "plan" },
        { id: "six", does: "6. How to judge the bet?", working: "Cake shops like it have opened in many towns and the state lists how they did: start from that record.", ask: "judge" }],
      reason: "Dana runs as well as any bakery, so the supermarket’s half-price bread is a strategy problem. Her money is in wedding cakes, which rest on pieces the supermarket would have to copy all at once; the plan that chooses plays for cake buyers and cuts bread back. Cake shops have a record, so she judges the bet from it."
    }),

    // ----- the first group (the deciding lines marked) -----
    six({
      id: "p14-gym", from: "Mark’s notes for the year ahead", detail: "Written in February",
      lines: [
        ["c1", "Three budget gyms opened nearby at $10 a month, and 40 of our members left for them."],
        ["c2", "Our gym is as clean and as well run as any of them, and our rent is as low as any gym’s in town."],
        ["c3", "Coached training for serious lifters earns the most, and they come from three towns for it."],
        ["c4", "It rests on coaches all day, heavy racks with room and monthly checks: a budget gym would have to change how it runs to match it."],
        ["c5", "Gyms for lifters have opened in many towns, and the county lists 42 with how long each lasted."]],
      challenge: "c1",
      money: [["coached", "Coached training for serious lifters", true], ["any", "As many members as possible, at any price", false, "More members at any price is growth for its own sake; the money is in coached training.", "growth-for-growth"], ["shakes", "Protein shakes at the desk", false, "The notes give the shakes no part in what the gym earns."]],
      barrier: "fit",
      plans: ["Play for serious lifters; win with coaches and racks the budget gyms do not have; drop the cheap plan", "Add a $15 plan, classes, a pool and a kids’ club so every kind of member finds something", "everyone"],
      judge: "outside",
      reason: "Mark runs as well as the budget gyms, so the $10 gyms are a strategy problem. Coached training earns the most and rests on pieces that fit; the plan that chooses plays for lifters. Gyms like it have a record, so he judges the bet from it."
    }),
    six({
      id: "p14-print", from: "Omar’s notes for the year ahead", detail: "Written in March",
      lines: [
        ["c1", "Our press runs as well as any shop’s, and every shop in town lost the same jobs."],
        ["c2", "Online printers now take the walk-in and invitation jobs, and our walk-in sales fell 40%."],
        ["c3", "Three law firms earn us the most, and they come to us for court papers the same day."],
        ["c4", "We hold the only contract to print for the county court’s filing office, for the next five years."],
        ["c5", "Same-day court printing for firms in the next city: nobody offers it there, and nobody knows whether those firms would pay."]],
      challenge: "c2",
      money: [["firms", "The three law firms and their same-day court papers", true], ["walkins", "Walk-in jobs, which fill the shop", false, "Walk-in jobs are the ones lost to online printers; the firms earn the most.", "sales-not-profit"], ["cards", "Business cards", false, "The notes give business cards no part in what the shop earns."]],
      barrier: "only-us",
      plans: ["Play for law firms; win with court papers the same day; stop walk-in jobs", "Our mission: to be the county’s favorite printer", "dream"],
      judge: "afford",
      reason: "Omar runs as well as any shop, and online printers took the walk-in jobs from all of them: a strategy problem. His money is the law firms, and only he holds the court contract. The plan that chooses plays for the firms. The next city has no record, so he bets only what he can lose."
    }),

    // ----- the second group (nothing marked) -----
    six({
      id: "q14-cafe", from: "Priya’s notes for the year ahead", detail: "Written in April",
      lines: [
        ["c1", "Since the office towers went to three days a week, the room is empty on Mondays and Fridays."],
        ["c2", "Our coffee and service are as good as any cafe’s on the street, and every cafe here lost the same customers."],
        ["c3", "Day passes for people working from home earn the most on those days, and no other cafe on the street sells them yet."],
        ["c4", "Any cafe could put plugs at its tables and sell a day pass next month."],
        ["c5", "Cafes built for people working from home have opened in many cities, and a trade group lists how they did."]],
      challenge: "c1",
      money: [["passes", "Day passes for people working from home", true], ["lunch", "Lunch on Tuesday to Thursday, when the room is full", false, "A full room is not the same as the most earned; the passes earn the most.", "sales-not-profit"], ["beans", "Bags of coffee beans", false, "The notes give the beans no part in what the cafe earns."]],
      barrier: "nothing",
      plans: ["Play for people working from home nearby on Mondays and Fridays; win with quiet, plugs and rooms for calls", "Do what the best cafes do: a loyalty app, oat milk and fresh pastries, done better than theirs", "copycat"],
      judge: "outside",
      reason: "Priya runs as well as any cafe, and every cafe lost the office crowd: a strategy problem. The passes earn the most, but any cafe could copy them, so the plan must lean on more than the pass. The plan that chooses plays for home workers; work cafes have a record to judge the bet by."
    }),
    six({
      id: "q14-tutor", from: "Kim’s notes for the year ahead", detail: "Written in May",
      lines: [
        ["c1", "Our tutors are as good as any in the state, and our fees are as low as a tutor’s can be."],
        ["c2", "An online app now sells state-exam practice for $10 a month, and our sign-ups fell by a quarter."],
        ["c3", "Tutoring students who must pass the math exam earns the most, and parents come for tutors who have graded it."],
        ["c4", "That rests on tutors who graded the exam, ten years of past papers with our notes and a report each week: the app would need all of it."],
        ["c5", "Tutoring for students who failed the exam once: nobody offers it, and nobody knows how many families would pay."]],
      challenge: "c2",
      money: [["exam", "Tutoring for students who must pass the math exam", true], ["volume", "As many students as possible, in every subject", false, "More students in every subject is growth for its own sake; the money is in exam tutoring.", "growth-for-growth"], ["books", "Selling practice books", false, "The notes give the books no part in what the business earns."]],
      barrier: "fit",
      plans: ["Play for students who must pass, starting with those who failed once; win with tutors who graded the exam", "Fight the app on price, the test-prep chain on hours and the schools’ free help, in four towns at once", "fronts"],
      judge: "afford",
      reason: "Kim runs as well as any tutor, and the app sells for far less than a tutor can: a strategy problem. Exam tutoring earns the most and rests on pieces that fit. The plan that chooses plays for students who must pass. Nobody offers tutoring for those who failed, so she bets only what she can lose."
    }),

    // ----- held back for the review -----
    six({
      id: "r14-tacos", from: "Carlos’s notes for the year ahead", detail: "Written in June",
      lines: [
        ["c1", "Our truck runs as fast and clean as any truck in town."],
        ["c2", "Two burger chains opened by the factory and took a third of our lunch customers."],
        ["c3", "Five tacos in two minutes for factory workers on a short break earn the most."],
        ["c4", "We hold the only permit to park at the factory gates, for three more years."],
        ["c5", "Food trucks at factories are common, and the county lists how long each one lasted."]],
      challenge: "c2",
      money: [["tacos", "Five fast tacos for workers on a short break", true], ["menu", "A full menu for every customer", false, "A full menu is a straddle; the money is in the five fast tacos.", "serve-everyone"]],
      barrier: "only-us",
      plans: ["Play for workers on a 30-minute break; win with five tacos in two minutes at the factory", "Sell burgers cheaper than the chains", "headon"],
      judge: "outside",
      reason: "Carlos runs as well as any truck, and the chains took his customers: a strategy problem. The fast tacos earn the most, and only he can park at the factory. The plan that chooses plays for workers on a short break; food trucks have a record to judge the bet by."
    })
  ]);
})();
