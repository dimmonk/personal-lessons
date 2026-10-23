// Strategy, lesson 11 "What would have to be true": the worked notes, the questions of the groups, the check and three held back for the review.
// The one rule (research ST11): before analysing, say the decision, list the possible moves, and for each move say what would have to be true for
// it to work. Then find the condition you have the least reason to believe, and test that one first, cheaply; only then choose the move whose
// conditions held up. A full plan with years of numbers comes after the tests, never before them. The condition to test first is the one the
// notes give the least evidence for: what someone has said, signed, measured or done already counts as evidence; a guess, a hope, or nobody
// having asked does not. Some items put the steps in order, with one step that belongs in no order. Owner-run businesses, invented.
(() => {
  const DOUBT = "That one already has evidence behind it, so testing it first would tell you little.";
  // a move and what would have to be true: conditions [id, text, evidence?]; the one with the least evidence is `right`
  function cond({ id, from, detail, move, conds, right, reason, write, steps, why }) {
    return {
      id, strand: "be-true", facets: { scale: "owner" },
      blocks: [{ kind: "message", id: "notes", form: "note", from, detail,
        lines: [{ id: "m", text: `The move: ${move}` }, ...conds.map(([cid, text]) => ({ id: cid, text }))] }],
      asks: [
        { id: "first", kind: "choose", prompt: "Which condition should be tested first?", shuffle: true,
          options: conds.map(([cid, text, label]) => cid === right ? { id: cid, text: label, ok: true } : { id: cid, text: label, then: why?.[cid] || DOUBT }) },
        ...(write ? [{ id: "test", kind: "text", prompt: "How could the owner test it cheaply, this month? Write one line.", model: write }] : [])
      ],
      ...(steps ? { steps } : {}),
      deciding: [right], reason
    };
  }
  // the steps of the method put in order, for one business’s decision; `extra` belongs in no order
  function order({ id, who, decision, moves, test, extra, reason }) {
    const steps = [
      { id: "s1", text: `Say the decision: ${decision}` },
      { id: "s2", text: `List the possible moves: ${moves}` },
      { id: "s3", text: "For each move, say what would have to be true for it to work" },
      { id: "s4", text: "Pick the condition there is least reason to believe" },
      { id: "s5", text: `Test that condition cheaply: ${test}` },
      { id: "s6", text: "Choose the move whose conditions held up" },
      { id: "x", text: extra }];
    return {
      id, strand: "be-true", facets: { scale: "owner" },
      blocks: [{ kind: "prose", text: `${who} has a decision to make: ${decision}` }],
      asks: [{ id: "order", kind: "order", prompt: "Tap the steps you would take, in order, then Answer.", steps,
        right: ["s1", "s2", "s3", "s4", "s5", "s6"],
        then: "Say the decision, list the moves, say what would have to be true for each, pick the condition you doubt most, test it, then choose. A full plan with years of numbers belongs after the tests, not before them." }],
      reason
    };
  }

  FC.items("strategy", [
    // ----- the worked notes -----
    cond({
      id: "w11-planners", from: "Dana’s notes on a move", detail: "Written in January",
      move: "sell wedding cakes through the three wedding planners in town.",
      conds: [
        ["c1", "The planners plan enough weddings: about 150 a year between them, they told us.", "The planners plan enough weddings"],
        ["c2", "Our bakers can make three more cakes a week: we made that many last June with the same staff.", "The bakers can make three more cakes a week"],
        ["c3", "The planners would send couples to a bakery that pays them no fee: none has said, and the bakery they use now pays them 10%.", "The planners would send couples with no fee"],
        ["c4", "Couples would pay our price: our wedding cakes sell at that price now.", "Couples would pay our price"]],
      right: "c3",
      write: "Phone each planner this week and find out whether they would send couples to us with no fee, and if not, what fee they would want.",
      steps: [
        { id: "conds", does: "Read what would have to be true, and what backs each.", working: "The number of weddings: the planners said so. The bakers: they did it last June. The price: cakes sell at it now. The planners sending couples with no fee: nobody has said, and the rival pays 10%." },
        { id: "first", does: "Test first the one with the least behind it.", working: "The fee is the one nobody has said yes to, and the rival pays one. If it fails, the move fails, whatever else holds.", ask: "first" }],
      reason: "Three conditions already have something behind them: what the planners said, what the bakers did, what couples pay now. Nothing backs the planners sending couples with no fee, and the bakery they use pays 10%, so that is the one to test first."
    }),

    // ----- the first group (the deciding condition marked) -----
    // two moves where the customers’ side is the doubt, on different surfaces, back to back
    cond({
      id: "p11-online", from: "Nina’s notes on a move", detail: "Written in March",
      move: "sell our rare books online to collectors in other states.",
      conds: [
        ["c1", "Collectors would pay for a rare book they have not held: every sale we have made was in the shop.", "Collectors would buy a rare book unseen"],
        ["c2", "We can ship books insured: the post office has quoted us.", "Books can be shipped insured"],
        ["c3", "We can photograph each book well: we did it for last year’s printed list.", "Each book can be photographed well"]],
      right: "c1",
      reason: "Shipping has a quote and the photos were done last year. Nothing yet says collectors will pay for a book they have not held, so test that first."
    }),
    cond({
      id: "p11-van", from: "Rosa’s notes on a move", detail: "Written in May",
      move: "run a second grooming van in the next town.",
      conds: [
        ["c1", "There are enough nervous dogs there: the vet gave us a list of 60 owners who asked her for a groomer.", "There are enough nervous dogs there"],
        ["c2", "The bank will lend for the van: it approved the loan last week.", "The bank will lend for the van"],
        ["c3", "Owners there will pay our price: owners here pay it, but nobody there has been asked, and the shops there charge $20 less.", "Owners there will pay our price"]],
      right: "c3",
      reason: "The owners are on a list and the loan is approved. Nobody in the next town has been asked about the price, and the shops there charge $20 less, so test the price first."
    }),
    // a look-alike: the same move for one bike shop, with the evidence in different places
    cond({
      id: "p11-wheels", from: "Leo’s notes on a move", detail: "Written in April",
      move: "become the local dealer for a maker of race wheels.",
      conds: [
        ["c1", "Racers would buy the wheels from us rather than online: nobody has asked them.", "Racers would buy the wheels from us"],
        ["c2", "The maker’s dealer price leaves us a margin: it sent us its price list, with 30% off.", "The dealer price leaves a margin"],
        ["c3", "Our mechanics can fit the wheels: they fit this maker’s wheels every week for racers who bring them in.", "The mechanics can fit them"]],
      right: "c1",
      reason: "The price list shows the margin and the mechanics already fit these wheels. Nobody has asked racers whether they would buy from Leo, so test that first."
    }),
    cond({
      id: "p11-wheels2", from: "Leo’s notes on a move", detail: "Written in June",
      move: "become the local dealer for a maker of race wheels.",
      conds: [
        ["c1", "Racers would buy the wheels from us: 20 have paid a deposit for a set.", "Racers would buy the wheels from us"],
        ["c2", "The maker’s dealer price leaves us a margin: it has not sent its prices, and online shops sell the wheels for less than we expected.", "The dealer price leaves a margin"],
        ["c3", "Our mechanics can fit the wheels: they fit this maker’s wheels every week.", "The mechanics can fit them"]],
      right: "c2",
      why: { c1: "Twenty racers have paid deposits, so that one already has evidence." },
      reason: "This time racers have paid deposits, and the mechanics fit these wheels already. The maker has sent no prices and online shops sell for less than expected, so the margin is the one to test first."
    }),

    // ----- the second group (nothing marked) -----
    order({
      id: "q11-afternoons", who: "Mark’s gym", decision: "how to fill the gym’s empty afternoons.",
      moves: "classes for retired lifters, a team from the college, renting the floor to a physical therapist.",
      test: "run one free afternoon class for retired lifters and count who comes.",
      extra: "Write a full three-year plan with member numbers for every move",
      reason: "The method runs from the decision to the moves, to what would have to be true, to the one condition most in doubt, to a cheap test, and only then to a choice. A three-year plan before any test is analysis that the tests may make useless."
    }),
    cond({
      id: "q11-drivers", from: "Sam’s notes on a move", detail: "Written in July",
      move: "open the diner at 5 a.m. for truck drivers.",
      conds: [
        ["c1", "The cook will start at 5 a.m.: he agreed, for $2 more an hour.", "The cook will start at 5 a.m."],
        ["c2", "Trucks can park: we measured the lot, and it fits six.", "Trucks can park"],
        ["c3", "Drivers would come off the highway for us: the exit is a mile away, and no driver has come in yet.", "Drivers would come off the highway"]],
      right: "c3",
      reason: "The cook agreed and the lot was measured. Nothing says drivers will come a mile off the highway, so test that first."
    }),
    cond({
      id: "q11-courthouse", from: "Omar’s notes on a move", detail: "Written in September",
      move: "print same-day court papers for a law firm in the next city.",
      conds: [
        ["c1", "The firm will pay our same-day price: it signed a letter saying so.", "The firm will pay the price"],
        ["c2", "The press is free for its rush orders: we turn down walk-in jobs already.", "The press is free"],
        ["c3", "The driver can reach that courthouse before it closes at 5 p.m.: nobody has driven it in rush hour.", "The driver can reach the courthouse in time"]],
      right: "c3",
      write: "Drive from the shop to that courthouse at 4 p.m. on three weekdays and time it.",
      reason: "The firm signed and the press is kept free. Nobody has driven to that courthouse in rush hour, so test the drive first."
    }),
    cond({
      id: "q11-statewide", from: "Kim’s notes on a move", detail: "Written in November",
      move: "tutor students for the state math exams online, across the state.",
      conds: [
        ["c1", "Our tutors can teach well online: two have done it for a year, with the same exam results.", "The tutors can teach well online"],
        ["c2", "Families will pay the same for online sessions: no family has tried them with us, and online apps charge half.", "Families will pay the same online"],
        ["c3", "The past papers can be shared online: they are already on our computers.", "The past papers can be shared"]],
      right: "c2",
      reason: "Two tutors have taught online with the same results and the papers are ready. No family has paid for online sessions with Kim, and the apps charge half, so test the price first."
    }),

    // ----- the check -----
    order({
      id: "k11-secondsite", who: "Jill’s daycare", decision: "how to take more children next year.",
      moves: "a second daycare by the other hospital, a bigger building here, a night room.",
      test: "put the question to the other hospital’s nurses: would they move their children, and how many?",
      extra: "Hire a firm to forecast the town’s child numbers for ten years",
      reason: "Decision, moves, what would have to be true, the condition most in doubt, a cheap test, then the choice. A ten-year forecast first is analysis before anyone knows which condition matters."
    }),
    cond({
      id: "k11-classes", from: "Priya’s notes on a move", detail: "Written in February",
      move: "rent the back room in the evening for classes.",
      conds: [
        ["c1", "Teachers want the room: three have asked for it.", "Teachers want the room"],
        ["c2", "The lease allows evening classes: the landlord confirmed it in writing.", "The lease allows it"],
        ["c3", "People will come to a cafe on a quiet street at 7 p.m.: we have never been open then.", "People will come at 7 p.m."]],
      right: "c3",
      reason: "Three teachers asked and the landlord confirmed. Nothing says people will come to the street at 7 p.m., so test that first."
    }),
    cond({
      id: "k11-nights", from: "Ray’s notes on a move", detail: "Written in June",
      move: "keep plumbers on call every night for restaurants.",
      conds: [
        ["c1", "Restaurants will pay the night rate: two paid it 12 times last year.", "Restaurants will pay the night rate"],
        ["c2", "Our plumbers will take night shifts at the pay we can offer: none has been asked, and two have said they would not work nights.", "The plumbers will take night shifts"],
        ["c3", "The vans can be stocked for kitchens: we did it in the spring.", "The vans can be stocked"]],
      right: "c2",
      reason: "Restaurants have paid the night rate and the vans were stocked in the spring. No plumber has agreed to nights, and two have said no, so test that first."
    }),
    cond({
      id: "k11-secondtruck", from: "Carlos’s notes on a move", detail: "Written in August",
      move: "run a second taco truck at the factory across the river.",
      conds: [
        ["c1", "We can park at its gates: the manager agreed in writing.", "The truck can park there"],
        ["c2", "Its workers will buy tacos at lunch: a food cart there closed last year, and nobody knows why.", "The workers will buy at lunch"],
        ["c3", "My cousin can run the truck: he has worked ours for two years.", "Someone can run the truck"]],
      right: "c2",
      reason: "The parking is agreed and the cousin has two years on the truck. A food cart closed there and nobody knows why, so test whether the workers will buy first."
    }),

    // ----- held back for the review -----
    cond({
      id: "r11-club", from: "Ben’s notes on a move", detail: "Written in October",
      move: "become the repair shop of the old-car club.",
      conds: [
        ["c1", "Members will drive an hour to us: nobody has asked them.", "Members will drive an hour"],
        ["c2", "We can get parts for their cars: our salvage yards have them.", "The parts can be had"]],
      right: "c1",
      reason: "The salvage yards have the parts. Nobody has asked members whether they would drive an hour, so test that first."
    }),
    cond({
      id: "r11-maker", from: "Hal’s notes on a move", detail: "Written in December",
      move: "deliver every new piano for a piano maker.",
      conds: [
        ["c1", "Our crews can do the extra work: they had two free days a week all year.", "The crews have the time"],
        ["c2", "The maker will pay our rate: it has not said, and its present mover charges less.", "The maker will pay the rate"]],
      right: "c2",
      reason: "The crews had free days all year. The maker has said nothing about the rate, and its mover charges less, so test the rate first."
    }),
    order({
      id: "r11-hours", who: "Tom’s hardware store", decision: "how to win more of the builders’ trade.",
      moves: "opening at 6 a.m., a delivery van, a trade counter for phone orders.",
      test: "open at 6 a.m. for two weeks and count the builders who come.",
      extra: "Redesign the whole store before deciding anything",
      reason: "Decision, moves, what would have to be true, the condition most in doubt, a cheap test, then the choice. Redesigning the store first spends the money before the tests."
    })
  ]);
})();
