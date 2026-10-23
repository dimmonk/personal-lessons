// Strategy, lesson 13 "A bet you can afford": the worked idea, the questions of the groups, the check and three held back for the review.
// The one rule (research ST14, reconciled with ST12 as a judgement call of the research note; ST20 for the wider record), two questions for every bet:
// (1) Can anyone see yet whether people would buy it? If people already buy this kind of thing and many like it have opened (a second shop, a
//     branch), there is a record: start from how they did (lesson 12). If nobody can see yet whether these customers would buy it (they have never
//     been offered it), the wider record (about half of new US shops and offices are open after five years) is only a rough start: no table says whether
//     anyone here wants it, so try it small, with what you have and partners, and learn.
// (2) Either way, size the bet. The affordable loss is the most the owner could lose and still keep the business and the household going; the stake
//     (what is lost if it fails) stays within it. If the project costs more, put less at risk (rent, not buy; start with a part; a partner who pays a
//     share); if no version fits, not now. If the whole stake is within it and the record is sound, going ahead in full is right.
// So the right move is not always the small one, and the wrong ones vary: the plan's own forecast, a loan for the full launch, a paid forecast of a
// demand nobody can see, friends' praise taken as evidence, a trial where the record already answers. Owner-run businesses, invented.
(() => {
  const JUDGE_THEN = {
    outside: { afford: "People already buy this, and many like it have opened: their record says how it goes. Start there, and keep the stake within what can be lost." },
    afford: { outside: "Nobody can see yet whether these customers would buy it, and no record answers that. Try it small, within what can be lost." }
  };
  // notes: lines; judge (or null for a bet that is partly both); moves [id, text, true | then, slip?]
  function bet({ id, from, detail, lines, judge, moves, deciding, reason, steps }) {
    return {
      id, strand: "afford", facets: { scale: "owner" },
      blocks: [{ kind: "message", id: "notes", form: "note", from, detail, lines: lines.map(([lid, text]) => ({ id: lid, text })) }],
      asks: [
        ...(judge ? [{ id: "judge", kind: "choose", prompt: "Which way of judging this bet fits?", from: "judge", right: judge, then: JUDGE_THEN[judge] }] : []),
        { id: "move", kind: "choose", prompt: "What should the owner do?", shuffle: true,
          options: moves.map(([oid, text, then, slip]) => then === true ? { id: oid, text, ok: true } : { id: oid, text, then, ...(slip ? { slip } : {}) }) }
      ],
      ...(steps ? { steps } : {}),
      deciding, reason
    };
  }

  FC.items("strategy", [
    // ----- the worked idea -----
    bet({
      id: "w13-pool", from: "Eve’s idea, with its numbers", detail: "Written in May",
      lines: [
        ["c1", "A swimming pool for dogs, for exercise and for dogs getting over an injury."],
        ["c2", "Dog pools do well in big cities, but nobody in our rural county has offered one, so nobody knows whether owners here would pay $25 a swim."],
        ["c3", "We already have the fenced acre, a used pool would cost $3,000, and a vet nearby would send dogs getting over surgery."],
        ["c4", "We could lose $5,000 and still keep the daycare and our home going; an indoor pool would cost $200,000."]],
      judge: "afford",
      moves: [
        ["small", "Put a $3,000 used pool on the acre, let the vet send dogs, and see who pays", true],
        ["study", "Pay for a market study of dog owners in the county, then build the $200,000 indoor pool if it says yes", "No study can see what owners here would do with something they have never been offered, and the pool would still risk $200,000.", "bet-too-big"],
        ["city", "Go by the city pools: they do well, so build the indoor pool", "City owners already buy swims; nobody knows whether owners here would. The city record is only a rough start.", "surface-analogy"]],
      deciding: ["c2", "c3", "c4"],
      steps: [
        { id: "record", does: "Can anyone see yet whether people here would buy it?", working: "No: dog pools exist in cities, but owners here have never been offered one. The wider record is a rough start; it cannot say whether anyone here would pay.", ask: "judge" },
        { id: "means", does: "Size the bet: what could be lost, and what is at hand?", working: "Eve can lose $5,000. The acre is hers, a used pool is $3,000 and the vet will send dogs: a small trial inside that, not a $200,000 pool.", ask: "move" }],
      reason: "Nobody can see yet whether owners here would pay, so no record or study settles it. Eve starts from her acre, a $3,000 pool and the vet as a partner, inside the $5,000 she can lose, and learns who pays."
    }),

    // ----- the first group (the deciding lines marked) -----
    // two ideas whose buyers nobody can see yet, on different surfaces, back to back
    bet({
      id: "p13-dogcakes", from: "Dana’s idea, with its numbers", detail: "Written in June",
      lines: [
        ["c1", "Birthday cakes for dogs. A few owners at Eve’s dog daycare asked for them."],
        ["c2", "Dog bakeries sell them in the city, but nobody in our town has ever been offered one, so nobody knows how many would pay."],
        ["c3", "Our ovens are free on Mondays, and Eve would sell the cakes at the daycare desk."],
        ["c4", "A shop for dog cakes would cost $90,000; we could lose $2,000 and be fine."]],
      judge: "afford",
      moves: [
        ["small", "Bake dog cakes on free Mondays and sell them at Eve’s desk, within $2,000", true],
        ["shop", "Borrow $90,000 for a dog-cake shop: owners have asked for them", "A few owners asking is talk, not buying, and $90,000 is far more than Dana can lose.", "bet-too-big"],
        ["friends", "Find out from friends and customers whether they like the idea, then decide on the shop", "People say yes to an idea that costs them nothing. Only selling some cakes shows who would pay.", "talk-as-evidence"]],
      deciding: ["c2", "c3", "c4"],
      reason: "Nobody here has been offered dog cakes, so nobody can see who would buy. Dana starts with free ovens and Eve’s desk as a partner, inside the $2,000 she can lose."
    }),
    bet({
      id: "p13-quizapp", from: "Kim’s idea, with its numbers", detail: "Written in July",
      lines: [
        ["c1", "A phone app that gives students one question from our state’s exam each day."],
        ["c2", "Apps like it exist for other tests; nobody knows whether students here would open one every day."],
        ["c3", "We could lose $3,000; a full app built by a firm would cost $120,000."],
        ["c4", "We have ten years of past papers, and a former student who builds apps would make a first version for a share of sales."]],
      judge: "afford",
      moves: [
        ["firm", "Hire the firm for $120,000, so the app is polished and ready for every student from the first day", "That risks $120,000 on students nobody has seen use it, forty times what Kim can lose.", "bet-too-big"],
        ["small", "Have the former student build a first version, within $3,000, and watch who uses it", true],
        ["forecast", "Pay for a forecast of how many students would use it, then decide", "No forecast can see what students do with an app they have never had; a first version shows it."]],
      deciding: ["c2", "c3", "c4"],
      reason: "Nobody can see yet whether students here would use it. Kim starts from her papers and a partner paid from sales, inside the $3,000 she can lose."
    }),
    // a look-alike on one gym: a project people already buy, and one nobody can see yet
    bet({
      id: "p13-secondgym", from: "Mark’s idea, with its numbers", detail: "Written in August",
      lines: [
        ["c1", "A second gym, in the next town."],
        ["c2", "Gyms open in this county every year; the county’s business office lists 42 that opened in three years, and 26 were still open three years later."],
        ["c3", "Buying the building and the racks would cost $250,000; we could lose $60,000 and keep this gym going."],
        ["c4", "A landlord there would rent us a floor, and the racks can be leased, for about $55,000 in the first year."]],
      judge: "outside",
      moves: [
        ["lease", "Start from how the county’s 42 gyms did, and rent the floor and lease the racks, so about $55,000 is at risk", true],
        ["buy", "Buy the building and racks for $250,000: the record of gyms is good", "A good record still loses four in ten, and $250,000 is far more than the $60,000 Mark can lose.", "bet-too-big"],
        ["trial", "Run free classes in the next town for a month first, to see whether people there want a gym at all, before deciding", "People already buy gym memberships, and the county’s record says how new gyms go; a trial adds little to it."]],
      deciding: ["c2", "c3", "c4"],
      reason: "Gyms open every year and the county lists how they did, so Mark starts from that record. The whole build would risk four times what he can lose, so he rents and leases, and keeps the stake near $55,000."
    }),
    bet({
      id: "p13-over70", from: "Mark’s idea, with its numbers", detail: "Written in September",
      lines: [
        ["c1", "Lifting classes for people over 70, sent to us by the hospital’s rehab staff."],
        ["c2", "A few city gyms run classes like it; nobody over 70 here has been offered one, and nobody knows whether they would pay $40 a month."],
        ["c3", "Our racks are empty in the mornings, and a coach wants to run the classes for a share of the fees."],
        ["c4", "A separate studio would cost $150,000; we could lose $4,000."]],
      judge: "afford",
      moves: [
        ["small", "Run morning classes on the empty racks with the coach, within $4,000, and see who comes", true],
        ["studio", "Build the separate studio for $150,000, so it is ready and looks right when the first people over 70 arrive", "That risks $150,000 on buyers nobody has seen, far more than Mark can lose.", "bet-too-big"],
        ["record", "Look up how the county’s new gyms did, and go by that", "That record is of gyms people already buy; it cannot say whether people over 70 here would pay for these classes."]],
      deciding: ["c2", "c3", "c4"],
      reason: "Nobody here over 70 has been offered these classes, so nobody can see who would pay. Mark starts from empty mornings and a coach paid from fees, inside the $4,000 he can lose."
    }),

    // ----- the second group (nothing marked) -----
    bet({
      id: "q13-truck2", from: "Carlos’s idea, with its numbers", detail: "Written in October",
      lines: [
        ["c1", "A second taco truck, at a factory across the river."],
        ["c2", "A used truck costs $40,000, and we could lose $50,000 and keep the first truck going."],
        ["c3", "Food trucks at factory gates are common; the county lists 30 that opened in five years, and 19 are still running."]],
      judge: "outside",
      moves: [
        ["table", "Try it with a folding table outside that factory for a summer first", "People already buy lunch outside factories, and the record says how trucks go; a summer at a table adds little and costs a season."],
        ["buy", "Start from how the 30 trucks did, and buy the used truck: the whole $40,000 is within what he can lose", true],
        ["own", "Go by his own forecast: his tacos are better than most", "Most owners in the record thought their food was better. Start from how the 30 did.", "inside-view"]],
      deciding: ["c2", "c3"],
      reason: "Trucks outside factories are common, and the record of 30 is sound. The whole $40,000 is within the $50,000 Carlos can lose, so buying the truck is the right size of bet."
    }),
    bet({
      id: "q13-raceroom", from: "Leo’s idea, with its numbers", detail: "Written in November",
      lines: [
        ["c1", "A winter training room where racers ride their own bikes against riders online."],
        ["c2", "We could lose $2,500; fitting out a full room would cost $60,000."],
        ["c3", "Rooms like it are common in big cities; racers here have never had one and have never been asked to pay for it."],
        ["c4", "The fitting room is empty in winter, and a racer with ten trainers would lend them for free rides."]],
      judge: "afford",
      moves: [
        ["savings", "Fit out the full room from savings: that way nothing is borrowed", "Savings lost are still lost: $60,000 is far more than the $2,500 Leo can lose.", "bet-too-big"],
        ["city", "Go by the city rooms: they do well, so racers here will come", "In the cities racers already pay for rooms; nobody knows whether racers here would. That is the thing to find out.", "surface-analogy"],
        ["small", "Put the lent trainers in the empty fitting room, within $2,500, and see who pays", true]],
      deciding: ["c2", "c3", "c4"],
      reason: "Racers here have never been offered such a room, so nobody can see who would pay. Leo starts from the empty room and lent trainers, inside the $2,500 he can lose."
    }),
    bet({
      id: "q13-salon2", from: "Grace’s idea, with its numbers", detail: "Written in January",
      lines: [
        ["c1", "A second salon across town."],
        ["c2", "The state board lists 200 salons opened near us in five years; 4 in 10 were still open three years later, fewer than most kinds of shop."],
        ["c3", "Clients from that side of town tell us they would come."],
        ["c4", "The full salon would cost $180,000, and even a small rented space with two chairs would put $40,000 at risk; we could lose $5,000."]],
      judge: "outside",
      moves: [
        ["small", "Rent the small space with two chairs: $40,000 is far less than a full salon", "Smaller is not small enough: $40,000 is eight times what Grace can lose, on a record where most close.", "bet-too-big"],
        ["not", "Not now: the record is poor, and even the smallest version risks far more than she can lose", true],
        ["clients", "Go by her clients from that side of town: they say they would come, and they have been loyal for years", "Clients saying yes cost them nothing, and owners in the record had friendly clients too. Start from the record.", "talk-as-evidence"]],
      deciding: ["c2", "c4"],
      reason: "The record is there, and it is poor: most new salons near her closed within three years. Even the smallest version would risk eight times the $5,000 Grace can lose, so the bet does not fit: not now."
    }),
    bet({
      id: "q13-eboats", from: "Joe’s idea, with its numbers", detail: "Written in February",
      lines: [
        ["c1", "Renting small electric boats on the lake by the hour."],
        ["c2", "Our lake has only ever had rowboats for rent, so nobody knows whether visitors here would pay $50 an hour for an electric one."],
        ["c3", "We have the only dock, and a boat maker would lend us two boats for the summer for a share of the rent."],
        ["c4", "A fleet of ten would cost $140,000; we could lose $3,000."]],
      judge: "afford",
      moves: [
        ["small", "Rent out the two lent boats from the dock this summer, within $3,000", true],
        ["fleet", "Buy the fleet of ten now, before a rival takes the idea", "That risks $140,000 on visitors nobody has seen pay, far more than Joe can lose.", "bet-too-big"],
        ["wait", "Wait until another lake nearby shows that visitors pay for electric boats, then copy what works there", "Waiting teaches Joe nothing about his lake, and a trial with lent boats costs less than he can lose."]],
      deciding: ["c2", "c3", "c4"],
      reason: "Nobody can see yet whether visitors here would pay for electric boats. Joe starts from his dock and two lent boats, inside the $3,000 he can lose."
    }),
    bet({
      id: "q13-daycare2", from: "Jill’s idea, with its numbers", detail: "Written in March",
      lines: [
        ["c1", "A second daycare, next to the other hospital."],
        ["c2", "Daycares open every year, and the state lists every one licensed and how long it stayed open: most last."],
        ["c3", "Fitting out a building would cost $300,000; we could lose $40,000."],
        ["c4", "The hospital would fit out a building it owns and rent it to us, if we keep places for its nurses’ children; our own stake would then be $35,000 for staff and toys."]],
      judge: "outside",
      moves: [
        ["own", "Go by the nurses: they say they need it, so fit out her own building", "Nurses saying they need it is talk; and her own building would risk $300,000, far more than she can lose.", "bet-too-big"],
        ["partner", "Start from the state’s record, and take the hospital’s offer, so her stake is $35,000", true],
        ["trial", "Run a free play morning there first, to see whether parents want daycare", "Parents already pay for daycare, and the state’s record says how new ones go; a play morning adds little."]],
      deciding: ["c2", "c3", "c4"],
      reason: "Daycares open every year and the state lists how they did, so Jill starts from that record. With the hospital paying for the building, her stake is $35,000, inside the $40,000 she can lose."
    }),
    // partly known: a kind of business with a record, and a new part nobody can see yet
    bet({
      id: "q13-doggym", from: "Ben’s idea, with its numbers", detail: "Written in April",
      lines: [
        ["c1", "A small gym where members may bring their dogs."],
        ["c2", "Small gyms open in the county every year, and the county lists how long each lasted."],
        ["c3", "Nobody has let dogs on a gym floor here, and nobody knows whether members would pay more for it."],
        ["c4", "A fenced dog area would cost $70,000; we could lose $8,000 beyond what the gym itself needs."]],
      judge: null,
      moves: [
        ["both", "Judge the gym by the county’s record, and try dog mornings once a week before building anything for dogs", true],
        ["build", "Build the $70,000 dog area now: small gyms have a sound record", "The record is of gyms, not of dogs on the floor; nobody has seen members pay for that part, and $70,000 is far more than Ben can lose.", "bet-too-big"],
        ["unknown", "Treat the whole idea as unknown, and put the county’s record aside", "The gym part has a record of many like it: use it. Only the dogs are unknown."]],
      deciding: ["c2", "c3", "c4"],
      reason: "The gym is a kind of business with a record: judge that part from it. The dogs are new, so nobody can see whether members would pay: try dog mornings within the $8,000 Ben can lose before building for them."
    }),

    // ----- the check -----
    bet({
      id: "k13-branch", from: "Ray’s idea, with its numbers", detail: "Written in April",
      lines: [
        ["c1", "A branch of the business in the next town."],
        ["c2", "Two restaurant owners there say they would call us."],
        ["c3", "Plumbing firms open branches all the time; the state plumbers’ group publishes how branches opened in the last five years did."],
        ["c4", "A full branch would cost $150,000 for vans, staff and a yard; we could lose $30,000. One van and a rented yard would cost $28,000 for the first year."]],
      judge: "outside",
      moves: [
        ["restaurants", "Go by the two restaurant owners who say they would call, and open the full branch with vans, staff and a yard", "Two owners saying they would call cost them nothing, and the full branch would risk five times what Ray can lose.", "bet-too-big"],
        ["van", "Start from how the trade group’s branches did, and begin with one van and a rented yard, about $28,000", true],
        ["forecast", "Go by his own forecast: his plumbers are the best in the state", "Most owners in the record thought their crews were the best. Start from how the branches did.", "inside-view"]],
      deciding: ["c3", "c4"],
      reason: "Branches open all the time and the trade group publishes how they did, so Ray starts there. The full branch would risk five times what he can lose; one van and a rented yard keeps the stake inside $30,000."
    }),
    bet({
      id: "k13-firstlook", from: "Nina’s idea, with its numbers", detail: "Written in May",
      lines: [
        ["c1", "A paid club where collectors see new rare books on a live video before anyone else."],
        ["c2", "We already film each book for our records, and a collectors’ society would tell its members."],
        ["c3", "Big bookshops stream new books for free; collectors of rare books have never been offered a paid look first, so nobody knows whether they would pay $20 a month."],
        ["c4", "A studio and a website would cost $50,000; we could lose $1,500."]],
      judge: "afford",
      moves: [
        ["small", "Show new books live with the camera she has, tell the society’s members, and stay within $1,500", true],
        ["studio", "Build the studio and website for $50,000 first, so the club looks right to collectors from the very first show", "That risks $50,000 on collectors nobody has seen pay, far more than Nina can lose.", "bet-too-big"],
        ["firm", "Hire a firm to forecast how many collectors would join, then decide", "No forecast can see what collectors do with an offer they have never had; a first month of shows will."]],
      deciding: ["c2", "c3", "c4"],
      reason: "Collectors have never been offered this, so nobody can see who would pay. Nina starts from her camera and the society as a partner, inside the $1,500 she can lose."
    }),
    bet({
      id: "k13-shop2", from: "Omar’s idea, with its numbers", detail: "Written in June",
      lines: [
        ["c1", "A second print shop, in the next city, with a used press."],
        ["c2", "Print shops open in the state every year, and the state’s business office lists how long each lasted: most were still open three years later."],
        ["c3", "The space and the used press would cost $60,000, and we could lose $80,000 and keep this shop going."]],
      judge: "outside",
      moves: [
        ["stall", "Run a print stall at a market there for a summer first, to see whether people buy printing", "People already buy printing, and the record says how new shops go; the whole $60,000 is within what Omar can lose, so a summer stall adds little and costs a season of the shop’s sales."],
        ["own", "Go by his own forecast: his shop runs better than most", "Most owners in the record thought so too. Start from how the others did.", "inside-view"],
        ["open", "Start from the state’s record and open the shop: the whole $60,000 is within what he can lose", true]],
      deciding: ["c2", "c3"],
      reason: "Print shops open every year and the state’s record is sound. The whole $60,000 is inside the $80,000 Omar can lose, so opening in full is the right size of bet."
    }),
    bet({
      id: "k13-kits", from: "Carlos’s idea, with its numbers", detail: "Written in July",
      lines: [
        ["c1", "Frozen taco kits shipped to workers who moved away and miss our tacos."],
        ["c2", "Meal kits sell everywhere, but nobody has offered our tacos by mail, so nobody knows whether those workers would pay $40 a box."],
        ["c3", "We have the recipes, the freezer is half empty, and a friend with a delivery van would ship them for a share."],
        ["c4", "A kitchen just for kits would cost $100,000; we could lose $2,000."]],
      judge: "afford",
      moves: [
        ["kitchen", "Borrow $100,000 for the kitchen: meal kits sell everywhere", "Other kits selling does not show that anyone would pay for these, and $100,000 is far more than Carlos can lose.", "bet-too-big"],
        ["small", "Make kits in the half-empty freezer, ship them with the friend’s van, and stay within $2,000", true],
        ["ask", "Poll the workers’ families and old friends on whether they like the idea, and build the kitchen if most say yes", "Families saying they like it cost them nothing. Only selling some boxes shows who would pay.", "talk-as-evidence"]],
      deciding: ["c2", "c3", "c4"],
      reason: "Nobody has offered these tacos by mail, so nobody can see who would pay. Carlos starts from his recipes, freezer and a partner’s van, inside the $2,000 he can lose."
    }),
    bet({
      id: "k13-bakery2", from: "Dana’s idea, with its numbers", detail: "Written in August",
      lines: [
        ["c1", "A second bakery in the next town."],
        ["c2", "Fitting it out would cost $200,000; we could lose $30,000."],
        ["c3", "Bakeries open in the state every year; the state’s small business office lists how long each lasted, and most lasted three years."],
        ["c4", "A stall at that town’s Saturday market, with our ovens doing the baking, would put $20,000 at risk in the first year."]],
      judge: "outside",
      moves: [
        ["full", "Fit out the full bakery for $200,000: the state’s record of new bakeries is good, so the bet is a safe one", "A good record still loses some, and $200,000 is far more than the $30,000 Dana can lose.", "bet-too-big"],
        ["stall", "Start from the state’s record, and begin with the market stall, $20,000 at risk", true],
        ["own", "Go by her own forecast: her cakes are the best in the county", "Most owners in the record thought their baking the best. Start from how the others did.", "inside-view"]],
      deciding: ["c2", "c3", "c4"],
      reason: "Bakeries open every year and the state lists how they did, so Dana starts from that record. The full bakery would risk far more than she can lose; the market stall keeps the stake at $20,000, inside $30,000."
    }),
    bet({
      id: "k13-storage", from: "Hal’s idea, with its numbers", detail: "Written in September",
      lines: [
        ["c1", "Storing pianos at an even temperature, for owners who move abroad for a year or two."],
        ["c2", "Owners here have only ever been offered ordinary storage, so nobody knows how many would pay $150 a month for this."],
        ["c3", "A new storage building would cost $400,000; we could lose $3,000."],
        ["c4", "Our warehouse has room for six pianos, and a piano store would send us its customers who are moving."]],
      judge: "afford",
      moves: [
        ["wait", "Do nothing until another mover shows it works", "Waiting teaches Hal nothing about his owners, and a trial in the warehouse risks less than he can lose."],
        ["small", "Store up to six pianos in the warehouse, take the store’s customers, and stay within $3,000", true],
        ["build", "Borrow $400,000 for a new storage building, so there is room for every owner who wants it when they come", "That risks $400,000 on owners nobody has seen pay, far more than Hal can lose.", "bet-too-big"]],
      deciding: ["c2", "c3", "c4"],
      reason: "Owners here have never been offered this, so nobody can see who would pay. Hal starts from his warehouse and the store as a partner, inside the $3,000 he can lose."
    }),

    // ----- held back for the review -----
    bet({
      id: "r13-office2", from: "Kim’s idea, with its numbers", detail: "Written in October",
      lines: [
        ["c1", "A second tutoring office in the next town; the county lists every tutoring office opened and how long it lasted, and most lasted."],
        ["c2", "The office would cost $25,000 for its first year, and we could lose $40,000."]],
      judge: "outside",
      moves: [
        ["open", "Start from the county’s record and open it: the whole $25,000 is within what she can lose", true],
        ["trial", "Tutor in the next town’s library for a term first, to see whether parents pay for tutoring", "Parents already pay for tutoring, and the record says how new offices go; the whole bet is within what Kim can lose."],
        ["own", "Go by her own forecast: her tutors are the best", "Most owners in the record thought so too. Start from the record.", "inside-view"]],
      deciding: ["c1", "c2"],
      reason: "Tutoring offices open every year and the county’s record is sound. The whole $25,000 is within the $40,000 Kim can lose, so opening is the right size of bet."
    }),
    bet({
      id: "r13-toollibrary", from: "Tom’s idea, with its numbers", detail: "Written in November",
      lines: [
        ["c1", "A tool library: builders pay a monthly fee to borrow big tools. Builders here have only ever rented tools by the day, so nobody knows whether they would pay by the month."],
        ["c2", "We have a dozen big tools in the back, could lose $2,000, and a full stock would cost $75,000."]],
      judge: "afford",
      moves: [
        ["small", "Lend out the dozen tools he has for a monthly fee, within $2,000", true],
        ["stock", "Buy the full $75,000 stock so builders find what they need", "That risks $75,000 on builders nobody has seen pay by the month, far more than Tom can lose.", "bet-too-big"],
        ["rent", "Look at how tool-rental shops did, and go by that", "Rental shops rent by the day; their record cannot say whether builders here would pay by the month."]],
      deciding: ["c1", "c2"],
      reason: "Builders here have never been offered tools by the month, so nobody can see who would pay. Tom starts from the tools he has, inside the $2,000 he can lose."
    }),
    bet({
      id: "r13-diner2", from: "Sam’s idea, with its numbers", detail: "Written in December",
      lines: [
        ["c1", "A second diner by the highway; the county lists how long new diners lasted, and only 3 in 10 lasted three years."],
        ["c2", "Even a leased diner would put $90,000 at risk; we could lose $10,000."]],
      judge: "outside",
      moves: [
        ["lease", "Lease the diner: $90,000 is far less than buying one", "Leasing still risks nine times what Sam can lose, on a record where most close.", "bet-too-big"],
        ["not", "Not now: the record is poor, and even the leased diner risks far more than he can lose", true],
        ["own", "Go by his own forecast: his first diner is full every morning", "Most owners in the record had a busy first place too. Start from the record.", "inside-view"]],
      deciding: ["c1", "c2"],
      reason: "The record is poor: only 3 in 10 new diners lasted three years. Even a leased diner risks nine times the $10,000 Sam can lose, so the bet does not fit: not now."
    })
  ]);
})();
