// Strategy, lesson 3 "Value created, and who keeps it": the worked sale (the numbers of gen-value.js, fixed), and the moves: does a move grow the
// value, shrink it, or only move it from one side to another? The one rule (research ST7): the value is the gap between the customers' end of the
// stick (the most a customer would pay) and the suppliers' end (the least suppliers and staff would take, which includes what a move adds to the
// work: materials, staff time). A move grows the value when it raises what customers would pay by more than it adds to what it takes to make, or
// lowers what suppliers and staff would take; it shrinks the value when it adds more than customers would pay for it; a move that changes only the
// price or the cost paid, with both ends where they were, only moves value. Every move that changes worth says what it adds to the work, so the
// verdict rests on facts given. No tap: the deciding lines are two numbers weighed, not one line found (marked in the first group). Invented owners.
(() => {
  const ONLY = ["grows", "moves", "shrinks"];
  const THEN = {
    grows: { moves: "It does more than change the price or the cost paid: customers would pay more by more than the move adds to the work, or suppliers and staff would take less, so the stick gets longer.",
      shrinks: "What customers would pay rises by more than the move adds to the work, so the stick gets longer, not shorter." },
    // grown at the suppliers' end: nothing added to the work, and the least suppliers or staff would take fell
    "grows-suppliers": { shrinks: "Nothing was added to the work, and the least suppliers or staff would take fell: that end of the stick moved down, so it got longer, not shorter." },
    moves: { grows: "Only the price or the cost paid changed; what customers would pay and the least suppliers and staff would take stayed where they were, so the value is the same and has gone to another side.",
      shrinks: "Nothing was added to the work and what customers would pay is the same: the value has only moved to another side." },
    shrinks: { grows: "Customers would pay more, but the move adds more than that to what it takes to make, so the stick gets shorter.",
      moves: "The move changes what customers would pay and adds to the work, so it does more than move value: it adds more cost than it is worth to them." }
  };
  const SLIP = { grows: { moves: "grown-as-moved" }, moves: { grows: "moved-as-grown" }, shrinks: { grows: "added-cost-missed" } };
  // a move: whose notes, its lines, the verdict ("grows-suppliers": grown because the least suppliers or staff would take fell)
  function move({ id, from, detail, lines, verdict, reason, deciding, then = {} }) {
    const right = verdict === "grows-suppliers" ? "grows" : verdict;
    const said = { ...THEN[right], ...(THEN[verdict] || {}), ...then };
    return {
      id, strand: "value-moves", facets: { scale: "owner" },
      blocks: [{ kind: "message", id: "notes", form: "note", from, detail,
        lines: lines.map(([lid, text]) => ({ id: lid, text })) }],
      asks: [
        { id: "verdict", kind: "choose", prompt: "What does the move do to the value created?", from: "verdict", only: ONLY, right,
          then: Object.fromEntries(ONLY.filter(v => v !== right).map(v => [v, said[v]])), ...(SLIP[right] ? { slips: SLIP[right] } : {}) }],
      deciding,
      reason
    };
  }

  FC.items("strategy", [
    // ----- the worked sale -----
    {
      id: "w-cake", strand: "value-numbers", facets: { scale: "owner" },
      blocks: [{ kind: "document", form: "table", title: "Dana’s bakery: a birthday cake, one sale", head: ["For one sale", "Dollars"],
        rows: [
          { id: "wtp", cells: ["The most a customer would pay", "$30"] },
          { id: "price", cells: ["The price", "$24"] },
          { id: "cost", cells: ["The cost: what suppliers and staff are paid for it", "$14"] },
          { id: "wts", cells: ["The least suppliers and staff would take", "$10"] }] }],
      asks: [
        { id: "value", kind: "number", prompt: "How much value does one sale create?", frame: "$__", answer: 20, tol: { abs: 1 },
          traps: [{ slip: "price-as-value", value: 24, then: "That is the price. The value created runs from the least suppliers and staff would take up to the most a customer would pay." }] },
        { id: "customer", kind: "number", prompt: "How much of it does the customer keep?", frame: "$__", answer: 6, tol: { abs: 1 },
          traps: [{ slip: "share-swapped", value: 10, then: "That is what the business keeps. The customer keeps the most they would pay less the price." }] },
        { id: "business", kind: "number", prompt: "How much does the business keep?", frame: "$__", answer: 10, tol: { abs: 1 },
          traps: [{ slip: "share-swapped", value: 14, then: "That counts what suppliers and staff keep as the business’s. Take the price less the cost." }] }],
      steps: [
        { id: "value", does: "The value created: the most a customer would pay less the least suppliers and staff would take.", working: "$30 − $10 = $20. That is what one cake is worth beyond what it takes to make it.", ask: "value" },
        { id: "customer", does: "The customer’s share: the most they would pay less the price.", working: "$30 − $24 = $6. The customer gets a cake worth $30 to them for $24.", ask: "customer" },
        { id: "business", does: "The business’s share: the price less the cost.", working: "$24 − $14 = $10. The other $4 ($14 − $10) is what suppliers and staff keep.", ask: "business" }],
      deciding: ["wtp", "price", "cost", "wts"],
      reason: "One cake creates $20, the $30 a customer would pay less the $10 suppliers and staff would take. The customer keeps $6, Dana $10, and suppliers and staff $4.",
      figure: { kind: "figure", type: "stick", data: { caption: "A birthday cake, one sale", wtp: 30, price: 24, cost: 14, wts: 10 } }
    },

    // ----- the first group of moves (the deciding lines marked): grows beside shrinks, then grows beside only moves -----
    move({
      id: "p-photo", from: "Notes on Dana’s bakery", detail: "Written in May",
      lines: [
        ["c1", "We started printing the child’s own photo on birthday cakes, in icing."],
        ["c2", "Parents tell us they would now pay up to $15 more for a cake like that."],
        ["c3", "The edible ink and ten more minutes of decorating add about $3 a cake."],
        ["c4", "We have not changed our price yet."]],
      verdict: "grows", deciding: ["c2", "c3"],
      reason: "Parents would pay up to $15 more, and the photo adds about $3 to the work, so the stick is $12 longer. The move grows the value, before Dana decides how much of it to take in her price."
    }),
    move({
      id: "p-gold", from: "Notes on Dana’s bakery", detail: "Written in July",
      lines: [
        ["c1", "We started putting gold leaf on every birthday cake."],
        ["c2", "Parents say it makes a cake worth about $4 more to them."],
        ["c3", "The gold leaf and the half hour it takes to lay it add about $9 a cake."]],
      verdict: "shrinks", deciding: ["c2", "c3"],
      reason: "Parents would pay about $4 more, but the gold leaf adds about $9 to the work, so the stick is $5 shorter. The move shrinks the value, whatever price Dana charges."
    }),
    move({
      id: "p-week", from: "Notes on our cleaning business", detail: "Written in July",
      lines: [
        ["c1", "Our cleaners asked for a fixed four-day week, and we started it."],
        ["c2", "Two cleaners who were about to leave for jobs with fixed hours now say they will stay, at the same pay."],
        ["c3", "The same hours of cleaning get done, so the new week costs us nothing extra."]],
      verdict: "grows-suppliers", deciding: ["c2", "c3"],
      then: { moves: "The pay did not change, but the least staff would take did: they now stay at a pay they would have left. That end of the stick moved down, so the value grows." },
      reason: "Cleaners who would have left at this pay now stay at it, so the least they would take fell, and the week adds nothing to the work. The suppliers’ end of the stick moved down, so the value grows."
    }),
    move({
      id: "p-squeeze", from: "Notes on Dana’s bakery", detail: "Written in June",
      lines: [
        ["c1", "We told our flour mill we would leave unless it cut its price by $20 a ton, and it did."],
        ["c2", "The mill’s own costs did not change, and it still sells to us; it just earns $20 less on each ton."]],
      verdict: "moves", deciding: ["c2"],
      reason: "The mill would have taken the same as before; it was pushed to take less. The $20 a ton moved from the mill to the bakery, and the value is the same."
    }),
    move({
      id: "p-raise", from: "Notes on Grace’s salon", detail: "Written in March",
      lines: [
        ["c1", "We raised the price of a haircut from $30 to $35."],
        ["c2", "Nothing about the haircut changed, and clients would pay at most what they always would, about $40."]],
      verdict: "moves", deciding: ["c2"],
      reason: "The haircut and what clients would pay are the same, so the value did not change. The $5 moved from what the client keeps to what the salon keeps."
    }),

    // ----- the second group (nothing marked) -----
    move({
      id: "q-mill", from: "Notes on Dana’s bakery", detail: "Written in September",
      lines: [
        ["c1", "We agreed to buy all our flour from one mill on a fixed weekly order."],
        ["c2", "The mill says the steady order saves it so much that it would sell to us for $20 a ton less and be just as well off."],
        ["c3", "The order adds nothing to our work: the flour comes on the same truck."],
        ["c4", "Our bread price has not changed."]],
      verdict: "grows-suppliers", deciding: ["c2", "c3"],
      reason: "The steady order lowers the least the mill would take, and adds nothing to the work, so the suppliers’ end of the stick moved down. The move grows the value."
    }),
    move({
      id: "q-tuesday", from: "Notes on Leo’s bike shop", detail: "Written in April",
      lines: [
        ["c1", "We started Half-Price Tuesdays: the same repairs, at half the price."],
        ["c2", "Same mechanics, same parts, same work; a repair is worth to customers just what it was."],
        ["c3", "The same customers come on Tuesdays as before; no new ones."]],
      verdict: "moves", deciding: ["c2", "c3"],
      reason: "What customers would pay and what the work takes are the same, and no new customers come. Half the price moves value from the shop to the customer on Tuesdays."
    }),
    move({
      id: "q-guarantee", from: "Notes on Leo’s bike shop", detail: "Written in August",
      lines: [
        ["c1", "Every repair now comes with a six-month guarantee."],
        ["c2", "Our price is the same."],
        ["c3", "Fixing the few repairs that come back costs us about $2 a repair, spread over all of them."],
        ["c4", "Customers say a repair with a guarantee is worth about $10 more to them."]],
      verdict: "grows", deciding: ["c4", "c3"],
      reason: "A repair with a guarantee is worth about $10 more to customers and adds about $2 to the work, so the stick is $8 longer. The move grows the value."
    }),
    move({
      id: "q-polish", from: "Notes on Leo’s bike shop", detail: "Written in October",
      lines: [
        ["c1", "We now wash and polish every bike after a repair."],
        ["c2", "It takes a mechanic about 20 minutes, which costs us about $8 a bike."],
        ["c3", "Customers say a clean bike is a nice touch, worth about $3 to them."]],
      verdict: "shrinks", deciding: ["c3", "c2"],
      reason: "Customers would pay about $3 more, and the polishing adds about $8 to the work, so the stick is $5 shorter. The move shrinks the value."
    }),
    move({
      id: "q-wage", from: "Notes on our cleaning business", detail: "Written in February",
      lines: [
        ["c1", "We cut the cleaners’ pay by $1 an hour."],
        ["c2", "The work and the hours are the same, and the other cleaning jobs nearby pay what they did, so nothing changed what the cleaners would accept."]],
      verdict: "moves", deciding: ["c2"],
      reason: "Nothing changed what the cleaners would accept; only their pay was cut, so $1 an hour moved from the staff to the business."
    }),

    // ----- the check -----
    move({
      id: "k-trays", from: "Notes on our catering business", detail: "Written in March",
      lines: [
        ["c1", "We now deliver every order on trays the office can throw away, so nobody has to clean up."],
        ["c2", "The trays cost us about $6 a party."],
        ["c3", "Office managers say they would pay $40 more a party for that."],
        ["c4", "Our price has not changed yet."]],
      verdict: "grows", deciding: ["c3", "c2"],
      reason: "Office managers would pay $40 more a party, and the trays add about $6, so the stick is $34 longer. The move grows the value."
    }),
    move({
      id: "k-fee", from: "Notes on Rosa’s grooming van", detail: "Written in May",
      lines: [
        ["c1", "We added a $5 booking fee to every visit."],
        ["c2", "The visit is the same, and owners would pay at most what they always would."]],
      verdict: "moves", deciding: ["c2"],
      reason: "The visit and what owners would pay are the same, so the value did not change. The $5 moved from the owner to Rosa."
    }),
    move({
      id: "k-schedule", from: "Notes on Kim’s tutoring business", detail: "Written in October",
      lines: [
        ["c1", "Our tutors now pick their own hours each week."],
        ["c2", "Our price per hour is the same, and the booking takes the office no more time."],
        ["c3", "Three tutors told us that with hours they choose, they would teach for $4 an hour less than we pay."]],
      verdict: "grows-suppliers", deciding: ["c3", "c2"],
      then: { moves: "The pay did not change, but the least the tutors would take did: $4 an hour less. That end of the stick moved down, so the value grows." },
      reason: "With hours they choose, tutors would take $4 an hour less, and nothing is added to the work, so the suppliers’ end of the stick moved down. The move grows the value."
    }),
    move({
      id: "k-bandana", from: "Notes on Rosa’s grooming van", detail: "Written in December",
      lines: [
        ["c1", "Every dog now leaves with a new bandana and a printed photo."],
        ["c2", "Owners say it is cute, worth about $2 to them."],
        ["c3", "The bandana, the print and the minutes they take add about $5 a visit."]],
      verdict: "shrinks", deciding: ["c2", "c3"],
      reason: "Owners would pay about $2 more, and the bandana and photo add about $5 to the work, so the stick is $3 shorter. The move shrinks the value."
    }),

    // ----- held back for the review -----
    move({
      id: "r-delivery", from: "Notes on Dana’s bakery", detail: "Written in November",
      lines: [
        ["c1", "We started delivering cakes to the party, free."],
        ["c2", "Driving each cake over costs us about $5 in time and gas."],
        ["c3", "Parents say a cake brought to the door is worth $12 more to them than one they pick up."]],
      verdict: "grows", deciding: ["c3", "c2"],
      reason: "Parents would pay $12 more for a delivered cake, and the drive adds about $5, so the stick is $7 longer. The move grows the value."
    }),
    move({
      id: "r-supplier", from: "Notes on Ray’s plumbing business", detail: "Written in January",
      lines: [
        ["c1", "We got our parts supplier to cut its prices 10% by threatening to switch."],
        ["c2", "The supplier’s own costs are the same; it is simply earning less on what it sells us."]],
      verdict: "moves", deciding: ["c2"],
      reason: "The supplier would have taken what it took before and was pushed to take less. The 10% moved from the supplier to Ray, and the value is the same."
    }),
    move({
      id: "r-raise2", from: "Notes on Kim’s tutoring business", detail: "Written in June",
      lines: [
        ["c1", "We raised the hourly price from $50 to $60."],
        ["c2", "The tutoring is the same, and parents would pay at most what they always would."]],
      verdict: "moves", deciding: ["c2"],
      reason: "The tutoring and what parents would pay are the same, so the value did not change. The $10 moved from the parents to Kim."
    })
  ]);
})();
