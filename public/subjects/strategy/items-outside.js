// Strategy, lesson 12 "How did others like it do?": the worked table, the rival and look-alike questions of the groups, the check's fixed questions
// and those held back for the review. The rule (research ST12, ST13), one question asked three ways before trusting a plan's own story:
// (1) how did ventures like it turn out? Start the forecast from the share in a table of many like it, and move from it only for a real
// difference (the made tables are gen-outside.js). (2) How will the rival answer? It answers when the move takes customers it serves and it can
// follow without giving up how it runs; it lets the move go when the customers are ones it does not serve, or following would cost it its own way
// of running (lesson 6's trade-off seen from the other side). (3) "It worked for them": find the reason it worked there, and check that reason
// holds here, not the look of it. Two more ways to go wrong with the record: starting from the wrong record (a few ventures you happen to know,
// or many of another kind, rather than many alike in what makes them work or fail; Lovallo, Clarke & Camerer in ST12), and moving off it for a
// difference that is not real (being sure, knowing the trade: every owner in the record had those) or not moving for one that is (customers who
// have already paid). The made tables sit near the national record (ST20). Owner-run businesses, invented.
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

  // which record to start from: `records` [id, text, kind] where kind is "alike" (the right one), "few" (the few the owner knows) or "other" (many
  // of another kind); the note says what the venture is
  const RECORD_THEN = {
    few: "A few ventures someone happens to know say little about how most turn out; many alike in what decides it say much more.",
    other: "Those ventures are many, but they win or fail for other reasons; the record must be of ventures alike in what makes them work or fail."
  };
  function record({ id, from, detail, lines, records, reason }) {
    return {
      id, strand: "outside-view", facets: { scale: "owner" },
      blocks: [{ kind: "message", id: "notes", form: "note", from, detail, lines: lines.map(([lid, text]) => ({ id: lid, text })) }],
      asks: [{ id: "record", kind: "choose", prompt: "Which record should the forecast start from?", shuffle: true,
        options: records.map(([rid, text, kind]) => kind === "alike" ? { id: rid, text, ok: true }
          : { id: rid, text, then: RECORD_THEN[kind], ...(kind === "few" ? { slip: "surface-analogy" } : {}) }) }],
      reason
    };
  }
  // how far to move from the record: `options` [id, text, kind]: "move" moves part way for a real difference, "stay" stays at the record,
  // "plan" jumps to the plan's own number; `real` says whether the note holds a real difference
  function adjust({ id, from, detail, lines, real, options, deciding, reason }) {
    const THEN = {
      move: "Nothing in the note is a fact the others lacked: every owner in the record was sure and knew the trade. Stay near the record.",
      stay: "The note holds a fact the others did not have, so the forecast moves part of the way from the record, not all of it.",
      plan: real ? "The difference is real, but it moves the forecast part of the way, not to the plan’s own number." : "Being sure is what every owner in the record had. Start near the record."
    };
    const right = real ? "move" : "stay";
    return {
      id, strand: "outside-view", facets: { scale: "owner" },
      blocks: [{ kind: "message", id: "notes", form: "note", from, detail, lines: lines.map(([lid, text]) => ({ id: lid, text })) }],
      asks: [{ id: "start", kind: "choose", prompt: "Where should the forecast start?", shuffle: true,
        options: options.map(([oid, text, kind]) => kind === right ? { id: oid, text, ok: true }
          : { id: oid, text, then: THEN[kind], ...(kind === "plan" ? { slip: "inside-view" } : {}) }) }],
      deciding, reason
    };
  }

  FC.items("strategy", [
    // ----- the worked table -----
    {
      id: "w12-gyms", strand: "outside-view", facets: { scale: "owner" },
      blocks: [
        { kind: "prose", text: "Mark’s plan for a second gym says it is sure to be open in three years. Here is how others like it did." },
        { kind: "document", form: "table", title: "New gyms in the county, and how many were still open three years later", head: ["Year opened", "Opened", "Still open after three years"],
          rows: [{ id: "y1", cells: ["2019", "14", "9"] }, { id: "y2", cells: ["2020", "16", "10"] }, { id: "y3", cells: ["2021", "12", "7"] }] }],
      asks: [
        { id: "est", kind: "number", prompt: "Roughly, what share of them were still open after three years?", frame: "__%", answer: 61.9, estimate: true },
        { id: "share", kind: "number", prompt: "Now work it out: what share were still open after three years?", frame: "__%", answer: 61.9, tol: { abs: 1 },
          traps: [{ slip: "counted-wrong-group", value: 38.1, then: "That is the share that closed. Count the ones still open over all that opened." }] },
        { id: "start", kind: "choose", prompt: "Where should Mark’s forecast for the new gym start?", shuffle: true, options: [
          { id: "table", text: "Near 61.9%, the share of others like it still open, moved only for a real difference", ok: true },
          { id: "plan", text: "Near 100%, as the plan says: Mark knows this business better than any table of other gyms does", slip: "inside-view", then: "Every owner in the table knew the business and had a plan, and 38.1% of them closed within three years. Start from how they did." },
          { id: "best", text: "Near 100%, like the one gym in town that Mark knows did well", slip: "surface-analogy", then: "One success that looks alike says little; the table shows how many like it did. Start from the share." }] }],
      steps: [
        { id: "est", does: "Read the table roughly: about how many of each year’s openings were still open?", working: "About 9 of 14, 10 of 16, 7 of 12: each year more than half, roughly six in ten.", ask: "est" },
        { id: "share", does: "Add those still open, add all that opened, and divide.", working: "9 + 10 + 7 = 26 still open; 14 + 16 + 12 = 42 opened; 26 ÷ 42 = 61.9%.", ask: "share" },
        { id: "start", does: "Start the forecast from that share, not from the plan.", working: "Begin near 62%. Move from it only for a real difference between Mark’s gym and the 42 others, such as members already signed up.", ask: "start" }],
      deciding: ["y1", "y2", "y3"],
      reason: "Of 42 gyms that opened, 26 were still open three years later: 61.9%. Mark’s forecast starts there and moves only for a real difference, however sure the plan sounds."
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
    // a rival that cut prices before, but the move is not on its customers
    rival({
      id: "q12-touchup", from: "Grace’s notes on a move", detail: "Written in July",
      lines: [
        ["c1", "The chain salon at the mall has matched every price cut in town for five years."],
        ["c2", "We plan a color clinic on Sunday evenings for women going gray who want it done slowly, over three visits."],
        ["c3", "The chain books 20-minute cuts for students and closes at 6 p.m. on Sundays; three visits of an hour each would empty its chairs of the cuts it lives on."]],
      right: "ignore", deciding: ["c3"],
      reason: "The chain matches price cuts, but this is not a price cut: the clients are not its own, and three long visits would cost it the quick cuts it runs on. It will most likely let the move go."
    }),
    // a rival with no record of answering, whose own customers the move takes
    rival({
      id: "q12-fitting", from: "Leo’s notes on a move", detail: "Written in August",
      lines: [
        ["c1", "We plan to sell kids’ bikes with a free trade-in when the child outgrows them."],
        ["c2", "The bike shop across town has never cut a price or run an offer in its twenty years."],
        ["c3", "Kids’ bikes are half of its sales, and a trade-in needs nothing but a shelf for the bikes that come back."]],
      right: "answer", deciding: ["c3"],
      reason: "A quiet past does not protect the move: it goes after half of the rival’s sales, and a shelf is all it needs to follow. Plan for an answer."
    }),
    like({
      id: "q12-texts", from: "Carlos’s notes on an idea", detail: "Written in September",
      lines: [
        ["c1", "Our customers work on a factory line, where phones are locked away until the break."],
        ["c2", "A taco truck downtown doubled its sales by taking orders by text."],
        ["c3", "It worked because office workers there order from their desks before walking out."]],
      right: "surface", deciding: ["c1", "c3"],
      reason: "Text orders worked there because people could order from their desks; here phones are locked away until the break. It only looks alike."
    }),
    like({
      id: "q12-kitchens", from: "Ray’s notes on an idea", detail: "Written in October",
      lines: [
        ["c1", "A plumber in the city made restaurants his main customers, and earns more than any plumber there."],
        ["c2", "Our town is a tenth the size of that city, with no big hotels and none of its tourists."],
        ["c3", "He did well because restaurants lose money every hour the kitchen is shut, and pay for a fast fix at any hour; our 40 restaurants have no plumber who answers at night."]],
      right: "holds", deciding: ["c3"],
      reason: "The town is smaller and has no tourists, but that is not why it worked there: restaurants losing money while the kitchen is shut is, and that is true here too. The reason holds."
    }),
    record({
      id: "q12-record", from: "Leo’s page of numbers for a second shop", detail: "Written in September",
      lines: [["c1", "A second bike shop, in the next town, selling and fixing bikes as we do."]],
      records: [
        ["alike", "The 120 bike shops that opened in the state in five years, and how many are still open", "alike"],
        ["friends", "The two bike shops Leo’s friends opened, both still open", "few"],
        ["cars", "The 300 car dealers that opened in the state in the same five years, and how many of them are still open", "other"]],
      reason: "The forecast starts from many ventures alike in what makes them work or fail: the state’s 120 new bike shops. Two friends’ shops are too few to say how most go, and car dealers live or die for other reasons."
    }),
    adjust({
      id: "q12-deposits", from: "Mark’s page of numbers for a second gym", detail: "Written in October",
      lines: [
        ["c1", "Of the new gyms in the county, 62% were still open three years later."],
        ["c2", "Mark’s plan says the new gym is sure to last: he knows gyms better than anyone."],
        ["c3", "Before signing the lease, 150 people in that town have paid a $50 deposit to join."]],
      real: true, deciding: ["c1", "c3"],
      options: [
        ["move", "Above 62%, but well short of certain: 150 paid deposits are a fact the others did not have", "move"],
        ["stay", "At 62% exactly: only the record counts", "stay"],
        ["plan", "Near 100%, as the plan says: Mark knows gyms better than anyone, and 150 people have already paid", "plan"]],
      reason: "The record starts it at 62%. Money paid by 150 people is a real difference, so the forecast moves up from there, but not to a certainty: Mark being sure is what every owner in the record had."
    }),

    // ----- the check -----
    rival({
      id: "k12-paint", from: "Tom’s notes on a move", detail: "Written in January",
      lines: [
        ["c1", "Paint for weekend shoppers is one of the big home store’s best sellers."],
        ["c2", "We plan to sell paint below the big store’s price, to win those shoppers."],
        ["c3", "It buys paint for 200 stores at once, so its cost is below ours."]],
      right: "answer", deciding: ["c1", "c3"],
      reason: "Paint is the big store’s own best seller, and buying for 200 stores lets it match any cut. Plan for an answer."
    }),
    like({
      id: "k12-parents", from: "Kim’s notes on an idea", detail: "Written in February",
      lines: [
        ["c1", "Here, the parents’ group has 30 members and gets a post about once a month."],
        ["c2", "A tutor in the city fills her classes by posting in a parents’ online group."],
        ["c3", "It worked because parents there read that group every day."]],
      right: "surface", deciding: ["c1", "c3"],
      reason: "The posts worked there because parents read the group daily; here hardly anyone reads it. It only looks alike."
    }),
    like({
      id: "k12-cakes", from: "Dana’s notes on an idea", detail: "Written in March",
      lines: [
        ["c1", "A bakery two counties over did well with cakes made to order after a supermarket opened next to it."],
        ["c2", "Our town is richer than that one, and our shop is twice the size."],
        ["c3", "It worked because the supermarket there sold cheap bread but made no cakes for parties; ours sells bread at half our price and has no cake counter."]],
      right: "holds", deciding: ["c3"],
      reason: "The town and the shop differ, but not in what made it work: a supermarket with cheap bread and no party cakes, which is true here too. The reason holds."
    }),
    adjust({
      id: "k12-sure", from: "Grace’s page of numbers for a second salon", detail: "Written in April",
      lines: [
        ["c1", "Grace has run her salon for twelve years and says the second will do even better than the first."],
        ["c2", "Of the new salons in the county, 58% were still open three years later."],
        ["c3", "Her clients say they would try the new one, and her plan shows it full by spring."]],
      real: false, deciding: ["c2"],
      options: [
        ["move", "Well above 58%: twelve years in the trade and her clients’ word count for a lot", "move"],
        ["stay", "Near 58%: nothing here is a fact the others lacked", "stay"],
        ["plan", "Near 100%, as the plan says", "plan"]],
      reason: "The record starts it at 58%. Years in the trade, being sure and friendly clients’ words are what most owners in the record had too, so they are not a real difference: the forecast stays near 58%."
    }),
    record({
      id: "k12-record", from: "Sam’s page of numbers for a second diner", detail: "Written in May",
      lines: [["c1", "A second diner by the highway, open from 5 a.m. for drivers and shift workers."]],
      records: [
        ["alike", "The 85 diners and breakfast places opened in the state in five years, and how many still are", "alike"],
        ["hotels", "The 40 highway motels that opened in the state in five years, which serve the same drivers at the same exits", "other"],
        ["uncle", "Sam’s uncle’s diner, open for thirty years", "few"]],
      reason: "The forecast starts from many ventures alike in what decides it: the state’s new diners and breakfast places. One uncle’s diner is a single case, and motels win or fail for other reasons."
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
