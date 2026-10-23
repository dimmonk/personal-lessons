// Strategy, lesson 12 "How did others like it do?": the worked table, the rival and look-alike questions of the groups, the check's fixed questions
// and those held back for the review. The rule (research ST12, ST13), one question asked three ways before trusting a plan's own story:
// (1) how did ventures like it turn out? Start the forecast from the share in a table of many like it, and move from it only for a real
// difference (the made tables are gen-outside.js). (2) How will the rival answer? It answers when the move takes customers it serves and it can
// follow without giving up how it runs; it lets the move go when the customers are ones it does not serve, or following would cost it its own way
// of running (lesson 6's trade-off seen from the other side). (3) "It worked for them": find the reason it worked there, and check that reason
// holds here, not the look of it. Owner-run businesses, invented.
(() => {
  const ANSWER = ["answer", "ignore"], LIKE = ["holds", "surface"];
  const RIVAL_OPTS = [{ id: "answer", text: "It will answer: expect it to match the move within weeks" }, { id: "ignore", text: "It will most likely let the move go" }];
  const LIKE_OPTS = [{ id: "holds", text: "The reason it worked there holds here" }, { id: "surface", text: "It only looks alike: the reason it worked there does not hold here" }];
  const RIVAL_THEN = {
    answer: "The move takes customers the rival serves, and the rival can follow without changing how it runs, so plan for its answer.",
    ignore: "The customers are not ones the rival serves, or following would cost it its own way of running, so it has little reason to answer."
  };
  const LIKE_THEN = {
    holds: "The reason it worked there is a fact here too, so the example is worth learning from.",
    surface: "The example looks the same, but the reason it worked there is missing here."
  };
  function rival({ id, from, detail, lines, right, deciding, reason }) {
    return {
      id, strand: "outside-view", facets: { scale: "owner" },
      blocks: [{ kind: "message", id: "notes", form: "note", from, detail, lines: lines.map(([lid, text]) => ({ id: lid, text })) }],
      asks: [{ id: "rival", kind: "choose", prompt: "How will the rival most likely answer?",
        options: RIVAL_OPTS.map(o => o.id === right ? { ...o, ok: true } : { ...o, then: RIVAL_THEN[right], ...(right === "answer" ? { slip: "rival-ignored" } : {}) }) }],
      deciding, reason
    };
  }
  function like({ id, from, detail, lines, right, deciding, reason }) {
    return {
      id, strand: "outside-view", facets: { scale: "owner" },
      blocks: [{ kind: "message", id: "notes", form: "note", from, detail, lines: lines.map(([lid, text]) => ({ id: lid, text })) }],
      asks: [{ id: "like", kind: "choose", prompt: "Will it work here for the same reason?",
        options: LIKE_OPTS.map(o => o.id === right ? { ...o, ok: true } : { ...o, then: LIKE_THEN[right], ...(right === "surface" ? { slip: "surface-analogy" } : {}) }) }],
      deciding, reason
    };
  }

  FC.items("strategy", [
    // ----- the worked table -----
    {
      id: "w12-gyms", strand: "outside-view", facets: { scale: "owner" },
      blocks: [
        { kind: "prose", text: "Mark’s plan for a second gym says it will surely still be open in three years. Here is how others like it did." },
        { kind: "document", form: "table", title: "New gyms in the county, and how many were still open three years later", head: ["Year opened", "Opened", "Still open after three years"],
          rows: [{ id: "y1", cells: ["2019", "14", "4"] }, { id: "y2", cells: ["2020", "16", "3"] }, { id: "y3", cells: ["2021", "12", "5"] }] }],
      asks: [
        { id: "est", kind: "number", prompt: "Roughly, what share of them were still open after three years?", frame: "__%", answer: 28.6, estimate: true },
        { id: "share", kind: "number", prompt: "Now work it out: what share were still open after three years?", frame: "__%", answer: 28.6, tol: { abs: 1 },
          traps: [{ slip: "counted-wrong-group", value: 71.4, then: "That is the share that closed. Count the ones still open over all that opened." }] },
        { id: "start", kind: "choose", prompt: "Where should Mark’s forecast for the new gym start?", shuffle: true, options: [
          { id: "table", text: "From 28.6%, the share of others like it still open, then adjust only for real differences", ok: true },
          { id: "plan", text: "From the plan: Mark knows this business better than any table does", slip: "inside-view", then: "Every owner in the table knew their business and had a plan; most were not open three years later. Start from how they did." },
          { id: "best", text: "From the one gym in town that Mark knows did well", slip: "surface-analogy", then: "One success that looks alike says little; the table shows how many like it did. Start from the share." }] }],
      steps: [
        { id: "est", does: "Read the table roughly: about how many of each year’s openings were still open?", working: "About 4 of 14, 3 of 16, 5 of 12: each year well under half, roughly a quarter to a third.", ask: "est" },
        { id: "share", does: "Add those still open, add all that opened, and divide.", working: "4 + 3 + 5 = 12 still open; 14 + 16 + 12 = 42 opened; 12 ÷ 42 = 28.6%.", ask: "share" },
        { id: "start", does: "Start the forecast from that share, not from the plan.", working: "Begin near 29%. Move from it only for a real difference between Mark’s gym and the 42 others, such as members already signed up.", ask: "start" }],
      deciding: ["y1", "y2", "y3"],
      reason: "Of 42 gyms that opened, 12 were still open three years later: 28.6%. Mark’s forecast starts there and moves only for a real difference, however sure the plan sounds."
    },

    // ----- the first group (the deciding lines marked) -----
    // a look-alike on one diner: the same rival, two moves
    rival({
      id: "p12-cheaper", from: "Sam’s notes on a move", detail: "Written in March",
      lines: [
        ["c1", "We plan lunch specials 20% cheaper, to win the office crowd."],
        ["c2", "The diner across the street lives on that same office crowd at lunch."],
        ["c3", "Its rent is lower than ours, and it matched the last two price cuts on this street within a week."]],
      right: "answer", deciding: ["c2", "c3"],
      reason: "The specials go after the rival’s own lunch crowd, and with lower rent it can match them; it has matched every cut so far. Plan for it to answer within weeks."
    }),
    rival({
      id: "p12-early", from: "Sam’s notes on a move", detail: "Written in April",
      lines: [
        ["c1", "We plan to open at 5 a.m. for truck drivers."],
        ["c2", "The diner across the street opens at 10 a.m.; its customers are office workers who come at noon."],
        ["c3", "Its owner would need a second cook and a breakfast menu to open early, and has said for years that mornings do not pay."]],
      right: "ignore", deciding: ["c2", "c3"],
      reason: "The drivers are not customers the rival serves, and following would mean a second cook and a new menu for mornings its owner thinks do not pay. It will most likely let the move go."
    }),
    // a look-alike on one cafe: the same example, the reason there or not
    like({
      id: "p12-pass", from: "Priya’s notes on an idea", detail: "Written in May",
      lines: [
        ["c1", "A cafe in the next town doubled its weekday sales with a work-from-home day pass."],
        ["c2", "It worked because the offices there went to three days a week, so people worked from home nearby on the other two."],
        ["c3", "Here, the two biggest offices went to three days a week this spring."]],
      right: "holds", deciding: ["c2", "c3"],
      reason: "The pass worked there because people worked from home on the off days, and the same is now true here. The reason holds."
    }),
    like({
      id: "p12-pass2", from: "Priya’s notes on an idea", detail: "Written in June",
      lines: [
        ["c1", "A cafe in the next town doubled its weekday sales with a work-from-home day pass."],
        ["c2", "It worked because the offices there went to three days a week, so people worked from home nearby on the other two."],
        ["c3", "Here, the biggest employers are the hospital and the factory, where everyone works on site every day."]],
      right: "surface", deciding: ["c2", "c3"],
      reason: "The pass worked there because people worked from home, and nobody here does. It only looks alike."
    }),

    // ----- the second group (nothing marked) -----
    rival({
      id: "q12-touchup", from: "Grace’s notes on a move", detail: "Written in July",
      lines: [
        ["c1", "We plan a $10 color touch-up between appointments, to win clients from the salon two doors down."],
        ["c2", "That salon’s clients come for color too, and its chairs sit empty midweek."],
        ["c3", "When a new salon opened last year, it cut its prices within a month."]],
      right: "answer", deciding: ["c2", "c3"],
      reason: "The touch-up goes after the rival’s own color clients, it has empty chairs to offer the same, and it answered the last newcomer within a month. Plan for an answer."
    }),
    rival({
      id: "q12-fitting", from: "Leo’s notes on a move", detail: "Written in August",
      lines: [
        ["c1", "We plan to fit and tune race bikes by hand."],
        ["c2", "The national chain’s store here sells family bikes and has no fitting room."],
        ["c3", "Fitting by hand would take its staff off the sales floor for an hour a rider."]],
      right: "ignore", deciding: ["c2", "c3"],
      reason: "Racers are not the chain’s customers, and fitting by hand would take its staff off the floor its business runs on. It will most likely let the move go."
    }),
    like({
      id: "q12-texts", from: "Carlos’s notes on an idea", detail: "Written in September",
      lines: [
        ["c1", "A taco truck downtown doubled its sales by taking orders by text."],
        ["c2", "It worked because office workers there order from their desks before walking out."],
        ["c3", "Our customers work on a factory line, where phones are locked away until the break."]],
      right: "surface", deciding: ["c2", "c3"],
      reason: "Text orders worked there because people could order from their desks; here phones are locked away until the break. It only looks alike."
    }),
    like({
      id: "q12-kitchens", from: "Ray’s notes on an idea", detail: "Written in October",
      lines: [
        ["c1", "A plumber in the city made restaurants his main customers, and earns more than any plumber there."],
        ["c2", "It worked because restaurants lose money every hour the kitchen is shut, so they pay for a fast fix at any hour."],
        ["c3", "Our town has 40 restaurants, and no plumber here answers at night."]],
      right: "holds", deciding: ["c2", "c3"],
      reason: "Restaurants here lose money the same way, and nobody serves them at night. The reason it worked holds here."
    }),

    // ----- the check -----
    rival({
      id: "k12-paint", from: "Tom’s notes on a move", detail: "Written in January",
      lines: [
        ["c1", "We plan to sell paint below the big home store’s price, to win its weekend shoppers."],
        ["c2", "Paint for weekend shoppers is one of the big store’s best sellers."],
        ["c3", "It buys paint for 200 stores at once, and has matched every local price cut on paint so far."]],
      right: "answer", deciding: ["c2", "c3"],
      reason: "Paint is the big store’s own best seller, and buying for 200 stores lets it match any cut, as it always has. Plan for an answer."
    }),
    like({
      id: "k12-parents", from: "Kim’s notes on an idea", detail: "Written in February",
      lines: [
        ["c1", "A tutor in the city fills her classes by posting in a parents’ online group."],
        ["c2", "It worked because parents there read that group every day."],
        ["c3", "Here, the parents’ group has 30 members and gets a post about once a month."]],
      right: "surface", deciding: ["c2", "c3"],
      reason: "The posts worked there because parents read the group daily; here hardly anyone reads it. It only looks alike."
    }),
    like({
      id: "k12-cakes", from: "Dana’s notes on an idea", detail: "Written in March",
      lines: [
        ["c1", "A bakery two counties over did well with cakes made to order after a supermarket opened next to it."],
        ["c2", "It worked because the supermarket sold cheap bread but made no cakes for a party."],
        ["c3", "The supermarket here sells bread at half our price and has no cake counter."]],
      right: "holds", deciding: ["c2", "c3"],
      reason: "The supermarket here, like the one there, sells cheap bread and makes no party cakes. The reason holds."
    }),

    // ----- held back for the review -----
    rival({
      id: "r12-calm", from: "Rosa’s notes on a move", detail: "Written in April",
      lines: [
        ["c1", "We plan to groom nervous dogs at home, four a day."],
        ["c2", "The grooming chain’s shops do 30 dogs a day each, and their pay is by the dog; to match us they would have to slow down every shop."]],
      right: "ignore", deciding: ["c2"],
      reason: "Matching Rosa would cost the chain its own way of running, 30 dogs a day paid by the dog. It will most likely let the move go."
    }),
    like({
      id: "r12-pianos", from: "Hal’s notes on an idea", detail: "Written in May",
      lines: [
        ["c1", "A mover in the next state grew fast with pianos."],
        ["c2", "It worked because a piano maker there sends it every delivery; there is no piano maker in our state."]],
      right: "surface", deciding: ["c2"],
      reason: "The mover grew on a maker’s deliveries, and there is no maker here. It only looks alike."
    }),
    rival({
      id: "r12-lunch", from: "Carlos’s notes on a move", detail: "Written in June",
      lines: [
        ["c1", "We plan to sell tacos for $2.50, 50 cents below the other truck at our factory gate."],
        ["c2", "The other truck serves the same workers at the same hour, buys tortillas in the same buying group as we do, and cut its price the last time we did."]],
      right: "answer", deciding: ["c2"],
      reason: "The other truck serves the same workers, has the same costs and cut last time. Plan for it to answer."
    })
  ]);
})();
