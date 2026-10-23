// Strategy, lesson 11 "What would have to be true": the worked notes, the questions of the groups, the check and three held back for the review.
// The one rule (research ST11): say the decision, list the possible moves, and for each move say what would have to be true for it to work (every
// such condition must hold, or the move fails; something that would only help is not one). Then weigh each condition by what backs it: something
// done, paid, signed or counted is evidence for it; people saying they like the idea, a friend's praise or the owner being sure is only talk, which
// costs nothing; a fact pointing the other way is evidence against. Test first the condition least likely to hold: one with a fact against it before
// one resting on talk or nothing, and either before one backed by evidence. Test it cheaply. If it fails, drop the move or change it so it no
// longer needs that condition, and turn to the next move; if it holds, test the next least likely condition of the same move; choose the move
// whose conditions held. A full plan with years of numbers comes after the tests, never before. The deciding fact sits in different places and
// different words from item to item; the options are short labels with no evidence words. Owner-run businesses, invented.
(() => {
  const THEN = {
    backed: "Something done, paid or counted already backs that one, so it is likely to hold; testing it first would tell you little.",
    talk: "Only talk backs that one, so it is in doubt; but another condition has a fact pointing against it, which makes that one less likely still.",
    none: "Nothing backs that one yet; but another condition has a fact pointing against it, which makes that one less likely to hold.",
    extra: "The move would work without it, so it is not something that has to be true."
  };
  // a move and what would have to be true: conds [id, text, label, kind]; kind backed | talk | none | against | extra; `right` is the least likely
  function cond({ id, from, detail, move, conds, right, reason, write, steps, why = {} }) {
    return {
      id, strand: "be-true", facets: { scale: "owner" },
      blocks: [{ kind: "message", id: "notes", form: "note", from, detail,
        lines: [{ id: "m", text: `The move: ${move}` }, ...conds.map(([cid, text]) => ({ id: cid, text }))] }],
      asks: [
        { id: "first", kind: "choose", prompt: "Which condition should be tested first?", shuffle: true,
          options: conds.map(([cid, , label, kind]) => cid === right ? { id: cid, text: label, ok: true } : { id: cid, text: label, then: why[cid] || THEN[kind] }) },
        ...(write ? [{ id: "test", kind: "text", prompt: "How could the owner test it cheaply, this month? Write one line.", model: write }] : [])
      ],
      ...(steps ? { steps } : {}),
      deciding: [right], reason
    };
  }
  // what to do after a test, or which tested move to choose: options [id, text, true | then, slip?]
  function next({ id, from, detail, lines, prompt, options, deciding, reason }) {
    return {
      id, strand: "be-true", facets: { scale: "owner" },
      blocks: [{ kind: "message", id: "notes", form: "note", from, detail, lines: lines.map(([lid, text]) => ({ id: lid, text })) }],
      asks: [{ id: "next", kind: "choose", prompt, shuffle: true,
        options: options.map(([oid, text, then, slip]) => then === true ? { id: oid, text, ok: true } : { id: oid, text, then, ...(slip ? { slip } : {}) }) }],
      deciding, reason
    };
  }
  // the steps of the method put in order, for one business’s decision; `extra` belongs in no order and is chosen to sound like a real step
  function order({ id, who, decision, moves, test, extra, reason }) {
    const steps = [
      { id: "s1", text: `Say the decision: ${decision}` },
      { id: "s2", text: `List the possible moves: ${moves}` },
      { id: "s3", text: "For each move, say what would have to be true for it to work" },
      { id: "s4", text: "Pick the condition least likely to hold" },
      { id: "s5", text: `Test that condition cheaply: ${test}` },
      { id: "s6", text: "Choose the move whose conditions held up" },
      { id: "x", text: extra }];
    return {
      id, strand: "be-true", facets: { scale: "owner" },
      blocks: [{ kind: "prose", text: `${who} has a decision to make: ${decision}` }],
      asks: [{ id: "order", kind: "order", prompt: "Tap the steps you would take, in order, then Answer.", steps,
        right: ["s1", "s2", "s3", "s4", "s5", "s6"],
        then: "Say the decision, list the moves, say what would have to be true for each, pick the condition least likely to hold, test it, then choose. The step left over belongs nowhere in that order." }],
      reason
    };
  }

  FC.items("strategy", [
    // ----- the worked notes: two conditions in doubt, one with a fact against it -----
    cond({
      id: "w11-planners", from: "Dana’s memo on a move", detail: "Written in January",
      move: "sell wedding cakes through the three wedding planners in town.",
      conds: [
        ["c1", "The planners plan enough weddings: their calendars show about 150 a year between them.", "The planners plan enough weddings", "backed"],
        ["c2", "The planners would send couples to us: they said over coffee that they would be glad to.", "The planners would send couples", "talk"],
        ["c3", "Our bakers can make three more cakes a week: they made that many every week last June.", "The bakers can make three more a week", "backed"],
        ["c4", "The planners would do it with no fee: the bakery they use now pays them 10% of every cake.", "The planners would take no fee", "against"]],
      right: "c4",
      write: "Phone each planner this week to find out whether they would send couples with no fee, and if not, what fee they would want.",
      steps: [
        { id: "conds", does: "Weigh what backs each condition.", working: "The weddings: counted on the calendars. The bakers: done last June. The planners sending couples: only said over coffee, which costs nothing. No fee: the bakery they use now pays them 10%, a fact pointing the other way." },
        { id: "first", does: "Test first the one least likely to hold.", working: "Two are in doubt, but the fee has a fact against it, so it is the least likely. If it fails, the move fails, whatever else holds.", ask: "first" }],
      reason: "Two conditions are counted or done already. The planners sending couples rests on talk, but no fee has a fact against it: their bakery pays 10%. That is the least likely to hold, so it is tested first."
    }),

    // ----- the first group (the deciding condition marked) -----
    // two moves where the customers are the doubt, on different surfaces, back to back
    cond({
      id: "p11-online", from: "Nina’s memo on a move", detail: "Written in March",
      move: "sell our rare books online to collectors in other states.",
      conds: [
        ["c1", "We can ship books insured: the post office quoted $18 a book.", "Books can be shipped insured", "backed"],
        ["c2", "Each book can be photographed well: we did it for last year’s printed list.", "Each book can be photographed well", "backed"],
        ["c3", "Collectors would pay for a rare book they have not held: our regulars say they would.", "Collectors would buy a book unseen", "talk"],
        ["c4", "A write-up in the collectors’ magazine would bring more buyers: we have not asked the editor.", "The magazine would write about us", "extra"]],
      right: "c3",
      reason: "Shipping has a quote and the photos were done last year. Collectors buying unseen rests only on the regulars’ word, which costs them nothing, and the move fails without it; the magazine would only help. Test the collectors first."
    }),
    cond({
      id: "p11-van", from: "Rosa’s memo on a move", detail: "Written in May",
      move: "run a second grooming van in the next town.",
      conds: [
        ["c1", "Owners there will pay our price: I am sure of it, though the shops there charge $20 less.", "Owners there will pay our price", "against"],
        ["c2", "There are enough nervous dogs there: the vet there gave us a list of 60 owners who asked her for a groomer.", "There are enough nervous dogs in that town", "backed"],
        ["c3", "The bank will lend for the van: it approved the loan last week.", "The bank will lend", "backed"]],
      right: "c1",
      reason: "The owners are on a list and the loan is approved. Rosa being sure is not evidence, and the shops there charge $20 less, a fact against her price: test the price first."
    }),
    // a look-alike: the same move for one bike shop, with the doubt in different places
    cond({
      id: "p11-wheels", from: "Leo’s memo on a move", detail: "Written in April",
      move: "become the local dealer for a maker of race wheels.",
      conds: [
        ["c1", "The maker’s dealer price leaves us a margin: it sent us its price list, with 30% off.", "The dealer price leaves a margin", "backed"],
        ["c2", "Racers would buy the wheels from us rather than online: two of our riders think so.", "Racers would buy from us", "talk"],
        ["c3", "Our mechanics can fit the wheels: they fit this maker’s wheels every week for racers who bring them in.", "The mechanics can fit them", "backed"]],
      right: "c2",
      reason: "The price list shows the margin and the mechanics already fit these wheels. Racers buying from Leo rests on two riders’ opinion, so test that first."
    }),
    cond({
      id: "p11-wheels2", from: "Leo’s memo on a move", detail: "Written in June",
      move: "become the local dealer for a maker of race wheels.",
      conds: [
        ["c1", "Racers would buy the wheels from us: 20 have paid a deposit for a set.", "Racers would buy from us", "backed"],
        ["c2", "Our mechanics can fit the wheels: they fit this maker’s wheels every week.", "The mechanics can fit them", "backed"],
        ["c3", "The maker’s dealer price leaves us a margin: its rep said the price would be good, and online shops sell the wheels for less than we expected.", "The dealer price leaves a margin", "against"]],
      right: "c3",
      reason: "This time racers have paid deposits, and the mechanics fit these wheels already. The rep’s word is talk, and online prices below what Leo expected point against a margin: test the margin first."
    }),

    // ----- the second group (nothing marked) -----
    order({
      id: "q11-afternoons", who: "Mark’s gym", decision: "how to fill the gym’s empty afternoons.",
      moves: "classes for retired lifters, a team from the college, renting the floor to a physical therapist.",
      test: "run one free afternoon class for retired lifters and count who comes.",
      extra: "Test first the condition that is quickest to check",
      reason: "The method runs from the decision to the moves, to what would have to be true, to the condition least likely to hold, to a cheap test of it, and then to a choice. The quickest condition to check is often one already likely to hold, so testing it first tells little."
    }),
    cond({
      id: "q11-drivers", from: "Sam’s memo on a move", detail: "Written in July",
      move: "open the diner at 5 a.m. for truck drivers.",
      conds: [
        ["c1", "Drivers would come off the highway for us: the exit is a mile away, and the truck stop at the exit serves breakfast from 4 a.m.", "Drivers would come off the highway", "against"],
        ["c2", "The cook will start at 5 a.m.: he agreed in writing, for $2 more an hour.", "The cook will start at 5 a.m.", "backed"],
        ["c3", "A sign at the exit would bring more drivers: the county has not said whether we may put one up.", "The county would allow a sign", "extra"],
        ["c4", "Trucks can park: we measured the lot, and it fits six.", "Trucks can park", "backed"]],
      right: "c1",
      reason: "The cook agreed in writing and the lot was measured. A sign would only help. Drivers already have breakfast at the exit from 4 a.m., a fact against them driving a mile for Sam: test that first."
    }),
    cond({
      id: "q11-courthouse", from: "Omar’s memo on a move", detail: "Written in September",
      move: "print same-day court papers for a law firm in the next city.",
      conds: [
        ["c1", "The firm will pay our same-day price: it signed a letter saying so.", "The firm will pay the price", "backed"],
        ["c2", "The firm would send work all year: its partner expects so.", "The firm would send work all year", "talk"],
        ["c3", "The driver can reach that courthouse before it closes at 5 p.m.: the drive is 40 minutes at noon, and the bridge on the way is jammed from 4 p.m. every weekday, and the rush papers are ready only at 4.", "The driver can reach the courthouse in time", "against"],
        ["c4", "The press is free for its rush orders: we turn down walk-in jobs already.", "The press is free", "backed"]],
      right: "c3",
      write: "Drive from the shop to that courthouse at 4 p.m. on three weekdays and time it.",
      reason: "Two conditions are signed or done. Work all year rests on the partner’s word, but the drive has a fact against it: the bridge is jammed from 4 p.m. That is the least likely to hold, so test the drive first."
    }),
    cond({
      id: "q11-statewide", from: "Kim’s memo on a move", detail: "Written in November",
      move: "tutor students for the state math exams online, across the state.",
      conds: [
        ["c1", "Our tutors can teach well online: two have done it for a year, with the same exam results.", "The tutors can teach as well online", "backed"],
        ["c2", "The past papers can be shared online: they are already on our computers.", "The past papers can be shared", "backed"],
        ["c3", "Families will pay the same for online sessions: our families like the idea.", "Families will pay the same online", "talk"]],
      right: "c3",
      reason: "Two tutors have taught online with the same results and the papers are ready. Families liking the idea costs them nothing: whether they would pay the same is the one to test."
    }),
    next({
      id: "q11-failed", from: "Leo’s memo after a test", detail: "Written in July",
      lines: [
        ["c1", "The move: become the local dealer for a maker of race wheels."],
        ["c2", "Racers have paid deposits, and our mechanics fit these wheels every week."],
        ["c3", "We tested the margin: the maker’s price list came, and after shipping it leaves 4%, less than the shop’s rent on the space the wheels would take."]],
      prompt: "The test failed. What should Leo do next?",
      options: [
        ["drop", "Drop the dealer move, or change it so it no longer needs that margin, and turn to the next move", true],
        ["plan", "Write the full plan anyway: two of the three conditions held, and twenty racers have paid deposits", "Every condition has to hold; one that failed sinks the move however many others held.", "plan-first"],
        ["go", "Go ahead: the racers’ deposits show the demand is there", "Demand was never the doubt. The margin was, and the test showed it is not there."]],
      deciding: ["c3"],
      reason: "The margin was the condition least likely to hold, and the test showed it does not: the move fails as it stands. Leo drops it, or changes it so it no longer needs that margin, and turns to the next move."
    }),
    next({
      id: "q11-passed", from: "Priya’s memo after a test", detail: "Written in March",
      lines: [
        ["c1", "The move: rent the back room in the evening for classes."],
        ["c2", "We tested whether people would come to our quiet street at 7 p.m.: a free evening class drew 25."],
        ["c3", "The landlord confirmed in writing that the lease allows classes."],
        ["c4", "Teachers would pay $40 an evening for the room: three asked about it, and none has heard the price."]],
      prompt: "The test held. What should Priya do next?",
      options: [
        ["plan", "Write the five-year plan now: the hardest test passed", "One condition still rests on talk; a plan now would rest on it too.", "plan-first"],
        ["teachers", "Test the next least likely condition: quote the three teachers $40 and see who books", true],
        ["choose", "Choose the move now and start the classes: 25 people came to a quiet street at 7 p.m.", "People coming was one condition. Whether teachers would pay $40 is still untested."]],
      deciding: ["c4"],
      reason: "The test held, so the move survives so far. The teachers paying $40 rests only on their asking, so it is now the least likely to hold: test it next, then choose."
    }),

    // ----- the check -----
    order({
      id: "k11-secondsite", who: "Jill’s daycare", decision: "how to take more children next year.",
      moves: "a second daycare by the other hospital, a bigger building here, a night room.",
      test: "put the question to the other hospital’s nurses: would they move their children, and how many?",
      extra: "Poll friends and parents on whether they like each move",
      reason: "Decision, moves, what would have to be true, the condition least likely to hold, a cheap test, then the choice. Asking friends whether they like the moves gathers talk, which tests nothing."
    }),
    cond({
      id: "k11-nights", from: "Ray’s memo on a move", detail: "Written in June",
      move: "keep plumbers on call every night for restaurants.",
      conds: [
        ["c1", "Our plumbers will take night shifts: Ray believes they will, for the extra pay.", "The plumbers will take night shifts", "talk"],
        ["c2", "Restaurants will pay the night rate: two paid it 12 times last year.", "Restaurants will pay the night rate", "backed"],
        ["c3", "The night rate covers the plumbers’ night pay: the rate was set last year, before the union’s new rule added half again to night pay.", "The rate covers night pay", "against"],
        ["c4", "The vans can be stocked for kitchens: we did it in the spring.", "The vans can be stocked", "backed"]],
      right: "c3",
      reason: "Restaurants have paid the rate and the vans were stocked. The plumbers taking nights rests on Ray’s belief, but the rate covering their pay has a fact against it: the union’s rule added half again. Test that first."
    }),
    cond({
      id: "k11-secondtruck", from: "Carlos’s memo on a move", detail: "Written in August",
      move: "run a second taco truck at the factory across the river.",
      conds: [
        ["c1", "We can park at its gates: the manager agreed in writing.", "The truck can park there", "backed"],
        ["c2", "My cousin can run the truck: he has worked ours for two years.", "Someone can run the truck", "backed"],
        ["c3", "The union’s newsletter would tell workers about us: nobody has asked its editor.", "The newsletter would mention us", "extra"],
        ["c4", "Its workers will buy tacos at lunch: a food cart sold lunch at those gates for a year, and closed last spring.", "The workers will buy at lunch", "against"]],
      right: "c4",
      reason: "The parking is agreed and the cousin has two years on the truck; the newsletter would only help. A cart at that factory closed after a year, a fact against the workers buying: test that first."
    }),
    next({
      id: "k11-compare", from: "Jill’s memo after two tests", detail: "Written in October",
      lines: [
        ["c1", "Move 1, a bigger building here: its plan shows the most income of any move."],
        ["c2", "We tested its least likely condition, that the city would let us take 40 more children here: the city said no."],
        ["c3", "Move 2, a night room: we tested its least likely condition, that nurses would use it: 14 signed up and paid a deposit."],
        ["c4", "Its other conditions were tested next and hold too: two of our staff signed for night shifts, and the state approved night hours."]],
      prompt: "Which move should Jill choose?",
      options: [
        ["night", "The night room: its conditions held", true],
        ["building", "The bigger building: its plan shows the most income", "That income rests on a condition the city has turned down; the plan’s numbers cannot make it hold.", "inside-view"],
        ["neither", "Neither yet: first write a full five-year plan for both", "The tests have already ruled one move out; a full plan comes now, for the move that held.", "plan-first"]],
      deciding: ["c2", "c3", "c4"],
      reason: "The city turned down the bigger building. The night room’s least likely condition held, and so did the others, tested next, so Jill chooses the night room and plans it in full."
    }),

    // ----- held back for the review -----
    cond({
      id: "r11-club", from: "Ben’s memo on a move", detail: "Written in October",
      move: "become the repair shop of the old-car club.",
      conds: [
        ["c1", "We can get parts for their cars: our salvage yards have them.", "The parts can be had", "backed"],
        ["c2", "Members will drive an hour to us: the club’s president says they will.", "Members will drive an hour", "talk"]],
      right: "c2",
      reason: "The salvage yards have the parts. Members driving an hour rests on the president’s word, which costs nothing, so test it first."
    }),
    cond({
      id: "r11-maker", from: "Hal’s memo on a move", detail: "Written in December",
      move: "deliver every new piano for a piano maker.",
      conds: [
        ["c1", "The maker will pay our rate: its present mover charges a third less.", "The maker will pay the rate", "against"],
        ["c2", "Our crews can do the extra work: they had two free days a week all year.", "The crews have the time", "backed"]],
      right: "c1",
      reason: "The crews had free days all year. The maker’s present mover charges a third less, a fact against it paying Hal’s rate, so test the rate first."
    }),
    order({
      id: "r11-hours", who: "Tom’s hardware store", decision: "how to win more of the builders’ trade.",
      moves: "opening at 6 a.m., a delivery van, a trade counter for phone orders.",
      test: "open at 6 a.m. for two weeks and count the builders who come.",
      extra: "Work out each move’s profit for the next five years",
      reason: "Decision, moves, what would have to be true, the condition least likely to hold, a cheap test, then the choice. Five years of profit for every move is the full plan, and it comes after the tests."
    })
  ]);
})();
