// Strategy, lesson 13 "A bet you can afford": the worked notes, the questions of the groups, the check and three held back for the review.
// The one rule (research ST14, reconciled with ST12 as a judgement call of the research note): first ask whether this kind of project has been
// done many times, with a record of how they turned out. If it has, look at how similar projects did (lesson 12) and size the bet from that. If
// it has not (nobody sells it yet, so nobody can know who would buy), no forecast can say; start from what you already have, bring in partners,
// and bet only what you can afford to lose, learning as you go. Borrowing for a full launch is the wrong move either way. Each note says whether a
// record exists, what the owner already has, and what they could lose. Owner-run businesses, invented.
(() => {
  const JUDGE_THEN = {
    outside: { afford: "This kind of project has been done many times, and the record is there: use it before betting." },
    afford: { outside: "Nobody has done this here, so there is no record of others like it to look at: cap the bet at what can be lost." }
  };
  // notes: lines; judge; the move options: `ok` (the right move), `big` (the sum a full launch would take), and for outside items `record`
  function bet({ id, from, detail, lines, judge, ok, big, who, deciding, reason, steps }) {
    const moves = judge === "afford"
      ? [{ id: "small", text: ok, ok: true },
         { id: "study", text: `Pay for a market forecast, then spend ${big} if it says yes`, then: `No forecast can say how a market nobody has tried will go, and it would still bet ${big}.` },
         { id: "borrow", text: `Borrow ${big} and launch in full now`, slip: "bet-too-big", then: `That bets ${big} on a market nobody has tried, far more than can be lost.` }]
      : [{ id: "record", text: ok, ok: true },
         { id: "story", text: `Go by ${who}’s own forecast: this one will do better than the others`, slip: "inside-view", then: "Every owner in the record had a forecast like it. Start from how the others did." },
         { id: "borrow", text: `Borrow ${big} and launch in full now, before a rival does`, slip: "bet-too-big", then: `That bets ${big} without looking at how projects like it turned out.` }];
    return {
      id, strand: "afford", facets: { scale: "owner" },
      blocks: [{ kind: "message", id: "notes", form: "note", from, detail, lines: lines.map(([lid, text]) => ({ id: lid, text })) }],
      asks: [
        { id: "judge", kind: "choose", prompt: "Which way of judging this bet fits?", from: "judge", right: judge, then: JUDGE_THEN[judge] },
        { id: "move", kind: "choose", prompt: "What should the owner do?", shuffle: true, options: moves }
      ],
      ...(steps ? { steps } : {}),
      deciding, reason
    };
  }

  FC.items("strategy", [
    // ----- the worked notes -----
    bet({
      id: "w13-pool", from: "Eve’s notes on an idea", detail: "Written in May",
      lines: [
        ["c1", "A swimming pool for dogs, for exercise and for dogs getting over an injury."],
        ["c2", "Nobody in the state runs one; owners at the daycare say it sounds fun, but nobody knows whether they would pay $25 a swim."],
        ["c3", "We already have the fenced acre, and a used pool would cost $3,000; a vet nearby says she would send dogs getting over surgery."],
        ["c4", "We could lose $5,000 without hurting the daycare; an indoor pool would cost $200,000."]],
      judge: "afford", big: "$200,000",
      ok: "Put a $3,000 used pool on the acre, let the vet send dogs, and see who pays",
      deciding: ["c2", "c3", "c4"],
      steps: [
        { id: "record", does: "Has this kind of project been done many times, with a record?", working: "No: nobody in the state runs one, and nobody knows whether owners would pay. There is no record to look at.", ask: "judge" },
        { id: "means", does: "Start from what is already there, with partners, and cap the bet.", working: "The acre is hers, a used pool is $3,000, the vet will send dogs, and she can lose $5,000. So a small trial, not a $200,000 pool.", ask: "move" }],
      reason: "Nobody in the state runs a dog pool, so there is no record and no forecast can say who would pay. Eve starts from her acre, a $3,000 pool and the vet as a partner, inside the $5,000 she can lose, and learns who pays."
    }),

    // ----- the first group (the deciding lines marked) -----
    // two new markets on different surfaces, back to back
    bet({
      id: "p13-dogcakes", from: "Dana’s notes on an idea", detail: "Written in June",
      lines: [
        ["c1", "Birthday cakes for dogs: no bakery in the region makes them."],
        ["c2", "A few owners at Eve’s dog daycare asked for them; nobody knows how many would pay."],
        ["c3", "Our ovens are free on Mondays, and Eve would sell them at the daycare desk."],
        ["c4", "A shop for dog cakes would cost $90,000; we could lose $2,000 and be fine."]],
      judge: "afford", big: "$90,000",
      ok: "Bake dog cakes on free Mondays and sell them at Eve’s desk, within $2,000",
      deciding: ["c1", "c2", "c3"],
      reason: "No one makes dog cakes here, so there is no record to judge by. Dana starts with free ovens and Eve’s desk as a partner, inside the $2,000 she can lose."
    }),
    bet({
      id: "p13-quizapp", from: "Kim’s notes on an idea", detail: "Written in July",
      lines: [
        ["c1", "A phone app that gives students one state-exam question a day."],
        ["c2", "No app does this for our state’s exam, and nobody knows whether students would open it."],
        ["c3", "We have ten years of past papers, and a former student who builds apps would make a first version for a share of sales."],
        ["c4", "A full app built by a firm would cost $120,000; we could lose $3,000."]],
      judge: "afford", big: "$120,000",
      ok: "Have the former student build a first version from the past papers, within $3,000, and watch who uses it",
      deciding: ["c2", "c3", "c4"],
      reason: "No app like it exists for this exam, so there is no record. Kim starts from her papers and a partner paid from sales, inside the $3,000 she can lose."
    }),
    // a look-alike on one gym: a kind of project done many times, and one never done
    bet({
      id: "p13-secondgym", from: "Mark’s notes on an idea", detail: "Written in August",
      lines: [
        ["c1", "A second gym, in the next town."],
        ["c2", "Gyms open in this county every year; the county’s business office lists 42 that opened in three years, and how many lasted."],
        ["c3", "The second gym would cost $250,000 to fit out."],
        ["c4", "Our members say friends in that town would join; we could lose $10,000 without hurting this gym."]],
      judge: "outside", big: "$250,000", who: "Mark",
      ok: "Find how the 42 gyms in the county’s list did, and size the bet from that",
      deciding: ["c2"],
      reason: "Gyms open every year and the county lists how they did, so there is a record. Mark starts from it and sizes the bet from it."
    }),
    bet({
      id: "p13-over70", from: "Mark’s notes on an idea", detail: "Written in September",
      lines: [
        ["c1", "Lifting classes for people over 70, sent to us by the hospital’s rehab staff."],
        ["c2", "No gym in the region offers them, and nobody knows whether people over 70 would pay $40 a month."],
        ["c3", "Our racks are empty in the mornings, and a coach wants to run the classes for a share of the fees."],
        ["c4", "A separate studio would cost $150,000; we could lose $4,000."]],
      judge: "afford", big: "$150,000",
      ok: "Run morning classes on the empty racks with the coach, within $4,000, and see who comes",
      deciding: ["c2", "c3", "c4"],
      reason: "No gym here offers this, so there is no record to look at. Mark starts from empty mornings and a coach paid from fees, inside the $4,000 he can lose."
    }),

    // ----- the second group (nothing marked) -----
    bet({
      id: "q13-truck2", from: "Carlos’s notes on an idea", detail: "Written in October",
      lines: [
        ["c1", "A second taco truck, at a factory across the river."],
        ["c2", "Food trucks at factory gates are common; the county lists 30 that opened in five years, and how long each lasted."],
        ["c3", "The truck would cost $80,000."]],
      judge: "outside", big: "$80,000", who: "Carlos",
      ok: "Find how the 30 trucks in the county’s list did, and size the bet from that",
      deciding: ["c2"],
      reason: "Trucks at factories are common and the county lists how they did, so there is a record to start from."
    }),
    bet({
      id: "q13-raceroom", from: "Leo’s notes on an idea", detail: "Written in November",
      lines: [
        ["c1", "A winter training room where racers ride their own bikes against riders online."],
        ["c2", "Nobody in the region has one, and racers have never been asked to pay for it."],
        ["c3", "The fitting room is empty in winter, and a racer with ten trainers would lend them for free rides."],
        ["c4", "Fitting out a full room would cost $60,000; we could lose $2,500."]],
      judge: "afford", big: "$60,000",
      ok: "Put the lent trainers in the empty fitting room, within $2,500, and see who pays",
      deciding: ["c2", "c3", "c4"],
      reason: "Nobody here has such a room, so there is no record. Leo starts from the empty room and lent trainers, inside the $2,500 he can lose."
    }),
    bet({
      id: "q13-salon2", from: "Grace’s notes on an idea", detail: "Written in January",
      lines: [
        ["c1", "A second salon across town."],
        ["c2", "Salons open and close here every month; the state board lists every license opened and closed for ten years."],
        ["c3", "Fitting it out would cost $180,000, and we could lose $5,000 and be fine."],
        ["c4", "Clients from that side of town tell us they would come."]],
      judge: "outside", big: "$180,000", who: "Grace",
      ok: "Find from the state board’s list how new salons did, and size the bet from that",
      deciding: ["c2"],
      reason: "Salons open every month and the state lists how they did, so there is a record to start from."
    }),
    bet({
      id: "q13-eboats", from: "Joe’s notes on an idea", detail: "Written in February",
      lines: [
        ["c1", "Renting small electric boats on the lake by the hour."],
        ["c2", "Nobody rents them anywhere in the state, and nobody knows whether visitors would pay $50 an hour."],
        ["c3", "We have the only dock, and a boat maker would lend us two boats for the summer for a share of the rent."],
        ["c4", "A fleet of ten would cost $140,000; we could lose $3,000."]],
      judge: "afford", big: "$140,000",
      ok: "Rent out the two lent boats from the dock this summer, within $3,000",
      deciding: ["c2", "c3", "c4"],
      reason: "Nobody rents electric boats in the state, so there is no record. Joe starts from his dock and two lent boats, inside the $3,000 he can lose."
    }),
    bet({
      id: "q13-daycare2", from: "Jill’s notes on an idea", detail: "Written in March",
      lines: [
        ["c1", "A second daycare, next to the other hospital."],
        ["c2", "Daycares open every year in the state, and the state keeps a list of every one licensed and how long it stayed open."],
        ["c3", "The building would cost $300,000 to fit out."]],
      judge: "outside", big: "$300,000", who: "Jill",
      ok: "Find from the state’s list how new daycares did, and size the bet from that",
      deciding: ["c2"],
      reason: "Daycares open every year and the state lists how they did, so there is a record to start from."
    }),

    // ----- the check -----
    bet({
      id: "k13-branch", from: "Ray’s notes on an idea", detail: "Written in April",
      lines: [
        ["c1", "A branch of the business in the next town."],
        ["c2", "Plumbing firms open branches all the time; the state plumbers’ group publishes how branches opened in the last five years did."],
        ["c3", "A branch would cost $150,000 for vans, staff and a yard."],
        ["c4", "Two restaurant owners there say they would call us, and we could lose $8,000."]],
      judge: "outside", big: "$150,000", who: "Ray",
      ok: "Find from the plumbers’ group how new branches did, and size the bet from that",
      deciding: ["c2"],
      reason: "Branches open all the time and the trade group publishes how they did, so there is a record to start from."
    }),
    bet({
      id: "k13-firstlook", from: "Nina’s notes on an idea", detail: "Written in May",
      lines: [
        ["c1", "A paid club where collectors see new rare books on a live video before anyone else."],
        ["c2", "No rare bookshop does this, and nobody knows whether collectors would pay $20 a month."],
        ["c3", "We already film each book for our records, and a collectors’ society would tell its members."],
        ["c4", "A studio and a website would cost $50,000; we could lose $1,500."]],
      judge: "afford", big: "$50,000",
      ok: "Show new books live with the camera we have, tell the society’s members, and stay within $1,500",
      deciding: ["c2", "c3", "c4"],
      reason: "No shop does this, so there is no record. Nina starts from her camera and the society as a partner, inside the $1,500 she can lose."
    }),
    bet({
      id: "k13-shop2", from: "Omar’s notes on an idea", detail: "Written in June",
      lines: [
        ["c1", "A second print shop, in the next city."],
        ["c2", "Print shops open in the state every year, and the state’s business office lists how long each one lasted."],
        ["c3", "The shop and a press would cost $220,000."]],
      judge: "outside", big: "$220,000", who: "Omar",
      ok: "Find from the state’s list how new print shops did, and size the bet from that",
      deciding: ["c2"],
      reason: "Print shops open every year and the state lists how they did, so there is a record to start from."
    }),
    bet({
      id: "k13-kits", from: "Carlos’s notes on an idea", detail: "Written in July",
      lines: [
        ["c1", "Frozen taco kits shipped to workers who moved away and miss our tacos."],
        ["c2", "Nobody sells kits like these, and nobody knows how many would order."],
        ["c3", "We have the recipes, the freezer is half empty, and a friend with a delivery van would ship them for a share."],
        ["c4", "A kitchen just for kits would cost $100,000; we could lose $2,000."]],
      judge: "afford", big: "$100,000",
      ok: "Make kits in the half-empty freezer, ship them with the friend’s van, and stay within $2,000",
      deciding: ["c2", "c3", "c4"],
      reason: "Nobody sells such kits, so there is no record. Carlos starts from his recipes, freezer and a partner’s van, inside the $2,000 he can lose."
    }),
    bet({
      id: "k13-bakery2", from: "Dana’s notes on an idea", detail: "Written in August",
      lines: [
        ["c1", "A second bakery in the next town."],
        ["c2", "Bakeries open in the state every year; the state’s small business office lists how long each lasted."],
        ["c3", "Our wedding planner friends there say couples would come to us."],
        ["c4", "Fitting it out would cost $200,000; we could lose $6,000."]],
      judge: "outside", big: "$200,000", who: "Dana",
      ok: "Find from the state’s list how new bakeries did, and size the bet from that",
      deciding: ["c2"],
      reason: "Bakeries open every year and the state lists how they did, so there is a record to start from."
    }),
    bet({
      id: "k13-storage", from: "Hal’s notes on an idea", detail: "Written in September",
      lines: [
        ["c1", "Storing pianos, at an even temperature, for owners who move abroad for a year or two."],
        ["c2", "Nobody in the state offers it, and nobody knows how many owners would pay $150 a month."],
        ["c3", "Our warehouse has room for six pianos, and a piano store would send us its customers who are moving."],
        ["c4", "A new storage building would cost $400,000; we could lose $3,000."]],
      judge: "afford", big: "$400,000",
      ok: "Store up to six pianos in the warehouse, take the store’s customers, and stay within $3,000",
      deciding: ["c2", "c3", "c4"],
      reason: "Nobody offers this in the state, so there is no record. Hal starts from his warehouse and the store as a partner, inside the $3,000 he can lose."
    }),

    // ----- held back for the review -----
    bet({
      id: "r13-office2", from: "Kim’s notes on an idea", detail: "Written in October",
      lines: [
        ["c1", "A second tutoring office in the next town."],
        ["c2", "Tutoring offices open every year, and the county’s business office lists how long each lasted."]],
      judge: "outside", big: "$90,000", who: "Kim",
      ok: "Find from the county’s list how new tutoring offices did, and size the bet from that",
      deciding: ["c2"],
      reason: "Tutoring offices open every year and the county lists how they did, so there is a record to start from."
    }),
    bet({
      id: "r13-toollibrary", from: "Tom’s notes on an idea", detail: "Written in November",
      lines: [
        ["c1", "A tool library: builders pay a monthly fee to borrow big tools. Nobody runs one in the state, and nobody knows who would pay."],
        ["c2", "We have a dozen big tools in the back, and could lose $2,000."]],
      judge: "afford", big: "$75,000",
      ok: "Lend out the dozen tools we have for a monthly fee, within $2,000",
      deciding: ["c1", "c2"],
      reason: "Nobody runs one in the state, so there is no record. Tom starts from the tools he has, inside the $2,000 he can lose."
    }),
    bet({
      id: "r13-diner2", from: "Sam’s notes on an idea", detail: "Written in December",
      lines: [
        ["c1", "A second diner by the highway."],
        ["c2", "Diners open every year in the county, and the county lists how long each lasted."]],
      judge: "outside", big: "$250,000", who: "Sam",
      ok: "Find from the county’s list how new diners did, and size the bet from that",
      deciding: ["c2"],
      reason: "Diners open every year and the county lists how they did, so there is a record to start from."
    })
  ]);
})();
