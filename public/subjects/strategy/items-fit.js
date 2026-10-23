// Strategy, lesson 7 "Do the pieces fit?": the worked list, the questions of the groups, the check and three held back for the review.
// The one rule (research ST3): read the position first, who it serves and what it gives them. Then hold each activity against it: does it serve
// that position, and does it help the other activities? An activity that serves another position, or is the trade's usual way of working when
// that way pulls against this position, does not fit, however sensible it looks on its own; what should replace it is an activity that serves the
// position and helps the others: of two that both serve the position, the one that also helps the other activities (second-order fit). A costly
// or unusual activity that serves the position fits, and in a low-cost position the costly piece is the one that does not. Some lists fit
// throughout. The wrong replacements vary: another kind of customer, the usual way done harder, a piece that serves the position but works
// against or alone beside the others. Owner-run, invented.
(() => {
  const NONE = "Every activity fits";
  const FITS = "That one serves the position and helps the others.";
  // a list: whose business, the position, its activities ([id, text, note when it fits]), the one that does not fit (or null),
  // and what should replace it: the right activity and two others, each with its slip (or null) and its line
  function fit({ id, who, position, acts, misfit, fix, reason, steps }) {
    return {
      id, strand: "fit", facets: { scale: "owner" },
      blocks: [
        { kind: "prose", text: `${who}. The position: ${position}` },
        { kind: "message", id: "acts", form: "note", from: `How ${who.split(":")[0]} runs it: the list of what we do`, detail: "This year",
          lines: acts.map(([lid, text, note]) => ({ id: lid, text, note: note || FITS })) }],
      asks: [
        { id: "line", kind: "tap", prompt: "Tap the activity that does not fit the position.", in: "acts", right: misfit ? [misfit] : "none", none: NONE },
        ...(fix ? [{ id: "fix", kind: "choose", prompt: "What would fit the position instead?", shuffle: true, options: [
          { id: "fit", text: fix.right, ok: true },
          ...fix.others.map(([text, slip, then], i) => ({ id: `o${i}`, text, then, ...(slip ? { slip } : {}) }))] }] : [])
      ],
      ...(steps ? { steps } : {}),
      deciding: misfit ? [misfit] : [],
      reason
    };
  }
  const COPY = "That is the trade’s usual way, done harder; it pulls against the position just as before.";
  const OTHER = "That serves another kind of customer, which pulls against the position.";

  FC.items("strategy", [
    // ----- the worked list -----
    fit({
      id: "w7-movers", who: "Hal’s moving company: pianos and other heavy, fragile things", position: "nothing damaged, for owners who pay more than double the house-move rate for that.",
      acts: [
        ["a1", "Each crew has moved pianos together for years."],
        ["a2", "Ramps and padded dollies are made for each kind of piano."],
        ["a3", "We win jobs by quoting the lowest price in town."],
        ["a4", "Every job is insured for the piano’s full value."],
        ["a5", "Each crew does one job a day, so nobody rushes."]],
      misfit: "a3",
      fix: { right: "Get jobs through piano teachers and piano stores, whose buyers care",
        others: [["Fill the crews’ spare hours with ordinary house moves", "serve-everyone", OTHER],
          ["Quote as low as the cheapest mover, but move faster", "usual-way-as-fit", "Speed and a low price serve owners who want it cheap and quick; these owners pay double for care."]] },
      steps: [
        { id: "position", does: "Read the position: who it serves and what it gives them.", working: "Piano owners who pay double for nothing being damaged." },
        { id: "each", does: "Hold each activity against it.", working: "A crew that has worked together for years, gear made for each piano, full insurance and one job a day all serve care, and each makes the others work. The lowest quote in town serves owners who shop on price, and pulls crews toward rushing to make it pay.", ask: "line" },
        { id: "fix", does: "Find what would serve the position and help the other activities.", working: "Jobs from piano teachers and stores bring the owners who pay for care, which pays for the crews, the gear and the insurance.", ask: "fix" }],
      reason: "Owners pay double for care, and the crews, the gear, the insurance and one job a day all serve that. The lowest quote serves price shoppers and pulls against the rest; jobs sent by piano teachers and stores bring the owners who pay for care."
    }),

    // ----- the first group (the deciding line marked) -----
    // two lists with one that does not fit, on different trades, back to back
    fit({
      id: "p7-tutors", who: "Kim’s tutoring business: the state’s high school math exams", position: "students who must pass those exams, whose parents pay for tutors who know them.",
      acts: [
        ["a1", "Every session works from past exam papers."],
        ["a2", "Tutors are hired at the lowest hourly rate we can find, whatever subject they teach."],
        ["a3", "Parents get a short report each week on which exam topics are still weak."],
        ["a4", "Students sit a full practice exam a month before the real one."]],
      misfit: "a2",
      fix: { right: "Hire tutors who have taught or graded these exams, and pay them more",
        others: [["Keep cheap tutors busy with reading and science sessions too", "serve-everyone", OTHER],
          ["Hire top math graduates at the lowest rate, whatever their exam experience", null, "Strong math is not the same as knowing these exams, which is what parents pay for and what the past papers and reports lean on."]] },
      reason: "Parents pay for tutors who know the exams, and the past papers, reports and practice exam all lean on such tutors. Hiring the cheapest tutor of any subject pulls against that; tutors who have taught or graded these exams fit."
    }),
    fit({
      id: "p7-grooming", who: "Rosa’s grooming van: old and nervous dogs", position: "a calm groom at home for dogs that panic at a grooming shop.",
      acts: [
        ["a1", "The van parks at the owner’s home, so the dog never travels."],
        ["a2", "Each groomer is paid by the number of dogs done in a day."],
        ["a3", "A dog meets its groomer once before the first groom."],
        ["a4", "The same groomer sees the same dog every visit."]],
      misfit: "a2",
      fix: { right: "Pay each groomer by the day",
        others: [["Add a second van for quick wash-and-go jobs", "serve-everyone", OTHER],
          ["Keep pay by the dog, and fit out a quiet room at a shop for the most nervous dogs", null, "A quiet room brings the dog to a shop, which the home visits exist to avoid; pay by the day helps the home visits and the same groomer too."]] },
      reason: "Calm grooming needs time, and the home visits, the first meeting and the same groomer all serve it. Pay by the dog pushes groomers to hurry; pay by the day fits."
    }),
    // a look-alike on one cafe: one list with an activity that does not fit, one where a costly one fits
    fit({
      id: "p7-cafe", who: "Priya’s cafe: a place to work on Mondays and Fridays", position: "a quiet seat to work all day, for people who work from home on those days.",
      acts: [
        ["a1", "A plug and fast Wi-Fi at every table."],
        ["a2", "A weekday pass: coffee all day and a seat."],
        ["a3", "Loud music on those days, to make the room feel lively."],
        ["a4", "Small rooms that can be booked for calls."]],
      misfit: "a3",
      fix: { right: "Keep the room quiet, with soft or no music, on work days",
        others: [["Hold live music nights to bring in the crowd from the bar next door", "serve-everyone", OTHER],
          ["Play the same music as every other cafe on the street, only better chosen", "usual-way-as-fit", COPY]] },
      reason: "People pay to work in quiet, and the plugs, the pass and the call rooms serve that. Loud music pulls against it; a quiet room fits."
    }),
    fit({
      id: "p7-cafe2", who: "Priya’s cafe: a place to work on Mondays and Fridays", position: "a quiet seat to work all day, for people who work from home on those days.",
      acts: [
        ["a1", "A plug and fast Wi-Fi at every table."],
        ["a2", "No time limit: one pass keeps a seat all day, at $12.", "That looks costly, but a seat for the whole day is what these customers pay for."],
        ["a3", "Soft music or none, so calls can be taken at the table."],
        ["a4", "Small rooms that can be booked for calls."]],
      misfit: null,
      reason: "Every activity serves a quiet seat for the day. The all-day seat looks costly, but it is what these customers pay for, and the plugs, the quiet and the call rooms make it worth paying for."
    }),

    // ----- the second group (nothing marked) -----
    fit({
      id: "q7-racers", who: "Leo’s bike shop: road racers", position: "bikes fitted and tuned by hand for racers who pay for every second saved.",
      acts: [
        ["a1", "A fitting room where each rider is measured on their own bike."],
        ["a2", "Two mechanics who race themselves."],
        ["a3", "Most of the floor goes to last year’s bikes, which sell steadily."],
        ["a4", "Repairs done the same day before a race weekend."]],
      misfit: "a3",
      fix: { right: "Stock the parts and wheels racers want, fitted by the mechanics",
        others: [["Use the floor for kids’ bikes, which sell all year", "serve-everyone", OTHER],
          ["Rent the floor to someone else’s cafe", null, "The rent helps the books, but it serves none of the fitting and tuning racers pay for; parts and wheels the mechanics fit help both."]] },
      reason: "Racers pay for fitting and tuning, and the fitting room, the racing mechanics and the race-weekend repairs serve them. A floor of last year’s bikes serves shoppers after a bargain; parts and wheels racers want fit."
    }),
    fit({
      id: "q7-nurses", who: "Jill’s daycare: families who work hospital shifts", position: "care from 5 a.m. to 9 p.m., for parents whose shifts start early or end late.",
      acts: [
        ["a1", "Staff work in two shifts, early and late.", "It costs more than one shift, but it is how the long day gets covered."],
        ["a2", "Breakfast and dinner are served, so a child can arrive early and leave late."],
        ["a3", "Parents can change days each week to follow the hospital roster."],
        ["a4", "The daycare is two blocks from the hospital."]],
      misfit: null,
      reason: "Every activity serves parents on hospital shifts: the two staff shifts, the meals, the changing days and the place by the hospital each make the long day work, and help one another."
    }),
    fit({
      id: "q7-law", who: "Omar’s print shop: three law firms", position: "court papers printed the same day, for firms that cannot miss a court deadline.",
      acts: [
        ["a1", "The press is kept free for the firms’ rush orders."],
        ["a2", "Jobs are gathered up and run in one batch each evening."],
        ["a3", "A driver takes finished papers straight to the court."],
        ["a4", "Each firm has a direct line to the person running the press."]],
      misfit: "a2",
      fix: { right: "Print each job as soon as it comes in",
        others: [["Take walk-in jobs to fill the evening batch", "serve-everyone", OTHER],
          ["Run two batches a day, at noon and in the evening", "usual-way-as-fit", "Two batches still make a rush order wait for the next one; the firms pay for papers the same day."]] },
      reason: "Firms pay for papers the same day, and the free press, the driver and the direct line serve that. One evening batch is cheap but makes papers wait; printing each job as it comes in fits."
    }),
    fit({
      id: "q7-plumber", who: "Ray’s plumbing business: restaurants", position: "leaks fixed fast at any hour, for restaurants that lose money every hour the kitchen is shut.",
      acts: [
        ["a1", "Vans carry the parts restaurant kitchens use most."],
        ["a2", "Plumbers work Monday to Friday, day shifts."],
        ["a3", "Each restaurant gets one phone number that is always answered."],
        ["a4", "Plumbers learn each kitchen’s pipes on a visit before anything breaks."]],
      misfit: "a2",
      fix: { right: "Keep plumbers on call in shifts, each for his own kitchens",
        others: [["Use the quiet evenings for bathroom remodels", "serve-everyone", OTHER],
          ["Keep plumbers on call in shifts, and send whichever one is free, whatever kitchen it is", null, "Any hour fits, but a plumber who has never seen that kitchen wastes the visits that taught each one its pipes; covering his own kitchens helps both."]] },
      reason: "Restaurants need a fix at any hour, and the stocked vans, the phone line and the visits serve that. Office hours leave the kitchen shut at night and on weekends; plumbers on call for the kitchens they know fit, and help the visits pay off."
    }),
    fit({
      id: "q7-builders", who: "Tom’s hardware store: builders", position: "the odd part and good advice, early, for builders who lose money waiting.",
      acts: [
        ["a1", "An advice desk run by a retired builder."],
        ["a2", "Odd parts the big stores do not carry."],
        ["a3", "The store opens at 10 a.m."],
        ["a4", "Builders can phone an order in and find it bagged at the counter."]],
      misfit: "a3",
      fix: { right: "Open at 6 a.m., when builders pick up parts before work",
        others: [["Open late on weekends for home shoppers", "serve-everyone", OTHER],
          ["Open at 6 a.m., and close the advice desk to pay for the early staff", null, "The early hour serves builders, but it costs the advice they come for; opening early with the desk staffed helps both."]] },
      reason: "Builders need parts before work, and the advice desk, the odd parts and the phone orders serve them. Opening at 10 a.m. misses their morning; opening at 6 a.m. fits."
    }),

    // ----- the check -----
    fit({
      id: "k7-collectors", who: "Nina’s bookshop: rare first editions", position: "rare books found and valued for collectors who travel to buy them.",
      acts: [
        ["a1", "Staff are students hired for evenings and weekends."],
        ["a2", "Nina goes to estate sales across the state to find books."],
        ["a3", "Each book comes with a written note on its history and condition."],
        ["a4", "Collectors get a call when a book on their wish list comes in."]],
      misfit: "a1",
      fix: { right: "Hire staff who know old books and can value them",
        others: [["Hire staff to run a cafe corner for passers-by", "serve-everyone", OTHER],
          ["Train the students to look prices up in an online price guide", "usual-way-as-fit", "A price guide gives the going price, not the eye that finds and values a rare book; that eye is what collectors come for."]] },
      reason: "Collectors come for rare books found and valued, and the estate sales, the written notes and the wish-list calls serve them. Students who cannot tell one old book from another serve none of that; staff who can value old books fit."
    }),
    fit({
      id: "k7-weddings", who: "Ana’s flower shop: weddings", position: "flowers planned with each couple over months, for couples who want their wedding to look like no other.",
      acts: [
        ["a1", "Ana takes two weddings a weekend.", "That turns work away, but it keeps time for each couple’s planning."],
        ["a2", "Each couple gets three planning meetings and a sample table."],
        ["a3", "Flowers are ordered from growers for each wedding, not kept in stock."],
        ["a4", "Ana sets up the flowers herself on the day."]],
      misfit: null,
      reason: "Every activity serves weddings planned for each couple: the limit of two, the meetings, the flowers ordered for each wedding and Ana on the day all make the planning work."
    }),
    fit({
      id: "k7-tacos", who: "Carlos’s taco truck: factory workers at lunch", position: "five good tacos ready in two minutes, for workers with a 30-minute break.",
      acts: [
        ["a1", "The truck parks at the factory gates at noon."],
        ["a2", "Each taco is made to order with a choice of twelve toppings."],
        ["a3", "Workers can order by text on the way out of the building."],
        ["a4", "Exact-change prices: $3 a taco."]],
      misfit: "a2",
      fix: { right: "Make five fillings ahead, so tacos are filled in seconds",
        others: [["Add salads and wraps for the office workers nearby", "serve-everyone", OTHER],
          ["Keep twelve toppings, and have workers text the order ahead", null, "Text orders help, but twelve toppings made to order still slow the noon line; five fillings made ahead help the text orders and the exact prices too."]] },
      reason: "Workers have a short break, and parking at the factory, the text orders and the exact-change prices all save time. Twelve toppings made to order slow every taco; five fillings made ahead fit."
    }),
    fit({
      id: "k7-oldcars", who: "Ben’s repair shop: older cars", position: "repairs on cars the dealers no longer work on, for owners who want to keep them running.",
      acts: [
        ["a1", "Two mechanics trained on older engines."],
        ["a2", "Parts are stocked only for this year’s models."],
        ["a3", "Ben tells owners plainly when a repair is worth it on an old car."],
        ["a4", "Old shop manuals for each make are kept on a shelf."]],
      misfit: "a2",
      fix: { right: "Keep parts for older models, from salvage yards and old dealer stock",
        others: [["Stock this year’s parts and add an oil-change lane for new cars", "serve-everyone", OTHER],
          ["Stock this year’s parts, and order them faster than the dealers", "usual-way-as-fit", COPY]] },
      reason: "Owners of older cars need parts and know-how for them, and the trained mechanics, the plain advice and the old manuals serve that. Parts for this year’s models do not; parts for older models fit."
    }),
    fit({
      id: "r7-lifters", who: "Mark’s gym: serious lifters", position: "heavy training with a coach on hand, for lifters who pay $60 a month for it.",
      acts: [
        ["a1", "Coaches on the floor all day."],
        ["a2", "Heavy racks, and room on the floor to use them."],
        ["a3", "Members can book a coach to check their lifts each month."],
        ["a4", "Each coach must have competed or coached lifters."]],
      misfit: null,
      reason: "Every activity serves lifters who pay for coaching: coaches on the floor, the racks with room, the monthly checks and coaches who know lifting all help one another."
    }),

    fit({
      id: "k7-laundry", who: "Lena’s laundromat: the lowest price per load in the city", position: "the cheapest wash in the city, for renters who wash their own clothes.",
      acts: [
        ["a1", "Machines bought used, and kept running by Lena herself."],
        ["a2", "Open 6 a.m. to midnight, paid by card at each machine."],
        ["a3", "An attendant on duty all day, who folds clothes for free."],
        ["a4", "Large machines, so a family’s wash fits in one load."]],
      misfit: "a3",
      fix: { right: "No attendant; a phone number for breakdowns",
        others: [["Keep the attendant, and charge for folding", "serve-everyone", "Folding serves people who pay to have it done, another kind of customer; the cheap wash needs no staff at all."],
          ["Keep the attendant, and have her sell soap and snacks too", null, "She earns a little more, but every staffed hour still pushes up the price per load."]] },
      reason: "Renters come for the cheapest wash, and the used machines, the card readers and the large loads all keep the cost down. A free attendant all day costs more than anything else here; card readers and a phone number fit, and keep the long hours cheap."
    }),

    // ----- held back for the review -----
    fit({
      id: "r7-cakes", who: "Dana’s bakery: cakes made to order", position: "a cake made for each birthday or wedding, for parents and couples who want it to be their own.",
      acts: [
        ["a1", "Each order starts with a talk about the party."],
        ["a2", "Cakes are made in big batches each morning to cut cost."],
        ["a3", "Photos of past cakes in the window and on the website."]],
      misfit: "a2",
      fix: { right: "Make each cake for its own order",
        others: [["Sell the batch cakes to walk-in shoppers too", "serve-everyone", OTHER],
          ["Make bigger batches than the supermarket bakery does", "usual-way-as-fit", COPY]] },
      reason: "Customers pay for a cake made for their party, and the talk and the photos serve that. Morning batches make every cake alike; making each cake for its order fits."
    }),
    fit({
      id: "r7-gardens", who: "Luis’s landscaping crew: garden design", position: "one crew that knows each garden, for owners who want it looked after as it was designed.",
      acts: [
        ["a1", "Each garden has the same crew every visit."],
        ["a2", "Crews are moved to whichever job is nearest each day, to save driving."],
        ["a3", "Each crew keeps notes on the plants in its gardens."]],
      misfit: "a2",
      fix: { right: "Keep each crew on its own gardens, and plan the day around them",
        others: [["Use any crew’s spare hours for cheap weekly mowing", "serve-everyone", OTHER],
          ["Move crews to the nearest job, with better maps than other landscapers", "usual-way-as-fit", COPY]] },
      reason: "Owners pay for a crew that knows their garden, and the same crew and the plant notes serve that. Moving crews to the nearest job breaks it; keeping each crew on its own gardens fits."
    }),
    fit({
      id: "r7-restaurants", who: "Ray’s plumbing business: restaurants", position: "leaks fixed fast at any hour, for restaurants that lose money every hour the kitchen is shut.",
      acts: [
        ["a1", "Plumbers on call in shifts, day and night.", "That costs more, but it is what the restaurants pay for."],
        ["a2", "Vans carry the parts restaurant kitchens use most."],
        ["a3", "One phone number that is always answered."]],
      misfit: null,
      reason: "Every activity serves a fast fix at any hour: the shifts, the stocked vans and the phone line each make the others work."
    })
  ]);
})();
