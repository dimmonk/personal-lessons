// Strategy, lesson 3 "Value created, and who keeps it": the worked sale (the numbers of gen-value.js, fixed), and the moves: does a move grow the
// value, or only move it from one side to another? The one rule (research ST7): a move grows the value when it raises the most a customer would pay
// or lowers the least suppliers and staff would take (the two ends of the stick); a move that changes only the price or the cost, with both ends
// where they were, only moves value from one side to another. Every story says in one line which number moved, the line to tap. Invented owners.
(() => {
  const ONLY = ["grows", "moves"];
  const THEN = {
    grows: "It moves one end of the stick: what customers would pay, or what suppliers and staff would take. The stick gets longer, so the value grows.",
    moves: "Only the price or the cost changed, and both ends stayed where they were, so the value is the same and has gone to another side."
  };
  const SLIP = { grows: { moves: "grown-as-moved" }, moves: { grows: "moved-as-grown" } };
  function move({ id, from, detail, lines, settles, verdict, reason, deciding }) {
    const other = ONLY.find(v => v !== verdict);
    return {
      id, strand: "value-moves", facets: { scale: "owner" },
      blocks: [{ kind: "message", id: "notes", form: "note", from, detail,
        lines: lines.map(([lid, text, note]) => ({ id: lid, text, ...(note ? { note } : {}) })) }],
      asks: [
        { id: "line", kind: "tap", prompt: "Tap the line that settles it.", in: "notes", right: [settles] },
        { id: "verdict", kind: "choose", prompt: "What does the move do?", from: "verdict", only: ONLY, right: verdict, then: { [other]: THEN[verdict] }, slips: SLIP[verdict] }],
      deciding: deciding || [settles],
      reason
    };
  }
  const WHAT = "That is the move itself. The line that settles it says which number it changed.";

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

    // ----- the first group of moves (the deciding line marked): two that grow, two that only move -----
    move({
      id: "p-photo", from: "Notes on Dana’s bakery", detail: "Written in May",
      lines: [
        ["c1", "We started printing the child’s own photo on birthday cakes, in icing.", WHAT],
        ["c2", "Parents tell us they would now pay up to $15 more for a cake like that."],
        ["c3", "We have not changed our price or our costs yet.", "That says the price and the cost stayed put. The line that settles it says what moved."]],
      settles: "c2", verdict: "grows",
      reason: "Parents would now pay up to $15 more, so the top of the stick rose. The move grows the value, before Dana decides how much of it to take in her price."
    }),
    move({
      id: "p-raise", from: "Notes on Grace’s salon", detail: "Written in March",
      lines: [
        ["c1", "We raised the price of a haircut from $30 to $35.", WHAT],
        ["c2", "Nothing about the haircut changed, and clients would pay at most what they always would, about $40."]],
      settles: "c2", verdict: "moves",
      reason: "The haircut and what clients would pay are the same, so the value did not change. The $5 moved from what the client keeps to what the salon keeps."
    }),
    move({
      id: "p-week", from: "Notes on our cleaning business", detail: "Written in July",
      lines: [
        ["c1", "Our cleaners asked for a fixed four-day week, and we set it up.", WHAT],
        ["c2", "Two of them told us that with that week they would stay for $1 an hour less than now."],
        ["c3", "We have not changed anyone’s pay.", "That says the cost stayed put. The line that settles it says what moved."]],
      settles: "c2", verdict: "grows",
      reason: "With the new week, staff would take less to do the same work, so the bottom of the stick fell. The move grows the value, even before anyone’s pay changes."
    }),
    move({
      id: "p-squeeze", from: "Notes on Dana’s bakery", detail: "Written in June",
      lines: [
        ["c1", "We told our flour mill we would leave unless it cut its price by $20 a ton, and it did.", WHAT],
        ["c2", "The mill’s own costs did not change, and it still sells to us; it just earns $20 less on each ton."]],
      settles: "c2", verdict: "moves",
      reason: "The mill would have taken the same as before; it was pushed to take less. The $20 a ton moved from the mill to the bakery, and the value is the same."
    }),

    // ----- the second group (nothing marked) -----
    move({
      id: "q-mill", from: "Notes on Dana’s bakery", detail: "Written in September",
      lines: [
        ["c1", "We agreed to buy all our flour from one mill on a fixed weekly order.", WHAT],
        ["c2", "The mill says the steady order saves it so much that it would sell to us for $20 a ton less and be just as well off."],
        ["c3", "Our bread price has not changed.", "That is the price. The line that settles it says what moved."]],
      settles: "c2", verdict: "grows",
      reason: "The steady order lowers the least the mill would take, so the bottom of the stick fell. The move grows the value."
    }),
    move({
      id: "q-tuesday", from: "Notes on Leo’s bike shop", detail: "Written in April",
      lines: [
        ["c1", "We started Half-Price Tuesdays: the same repairs, at half the price.", WHAT],
        ["c2", "Customers would pay at most what they always would for a repair, and our parts and wages are the same."]],
      settles: "c2", verdict: "moves",
      reason: "What customers would pay and what suppliers and staff would take are the same. Half the price moves value from the shop to the customer on Tuesdays."
    }),
    move({
      id: "q-guarantee", from: "Notes on Leo’s bike shop", detail: "Written in August",
      lines: [
        ["c1", "Every repair now comes with a six-month guarantee.", WHAT],
        ["c2", "Our price is the same.", "That is the price. The line that settles it says what moved."],
        ["c3", "Customers say a repair with a guarantee is worth about $10 more to them."]],
      settles: "c3", verdict: "grows",
      reason: "A repair with a guarantee is worth about $10 more to customers, so the top of the stick rose. The move grows the value."
    }),
    move({
      id: "q-wage", from: "Notes on our cleaning business", detail: "Written in February",
      lines: [
        ["c1", "We cut the cleaners’ pay by $1 an hour.", WHAT],
        ["c2", "The work and the hours are the same; the cleaners are less happy, but all of them stayed."]],
      settles: "c2", verdict: "moves",
      reason: "The work is the same, so the least the cleaners would take did not fall; their pay was cut. The $1 an hour moved from the staff to the business."
    }),

    // ----- the check -----
    move({
      id: "k-trays", from: "Notes on our catering business", detail: "Written in March",
      lines: [
        ["c1", "We now deliver every order on trays the office can throw away, so nobody has to clean up.", WHAT],
        ["c2", "Office managers say they would pay $40 more a party for that."],
        ["c3", "Our price has not changed yet.", "That is the price. The line that settles it says what moved."]],
      settles: "c2", verdict: "grows",
      reason: "Office managers would pay $40 more a party, so the top of the stick rose. The move grows the value."
    }),
    move({
      id: "k-fee", from: "Notes on Rosa’s grooming van", detail: "Written in May",
      lines: [
        ["c1", "We added a $5 booking fee to every visit.", WHAT],
        ["c2", "The visit is the same, and owners would pay at most what they always would."]],
      settles: "c2", verdict: "moves",
      reason: "The visit and what owners would pay are the same, so the value did not change. The $5 moved from the owner to Rosa."
    }),
    move({
      id: "k-schedule", from: "Notes on Kim’s tutoring business", detail: "Written in October",
      lines: [
        ["c1", "Our tutors now pick their own hours each week.", WHAT],
        ["c2", "Our price per hour is the same.", "That is the price. The line that settles it says what moved."],
        ["c3", "Three tutors told us that with hours they choose, they would teach for $4 an hour less than we pay."]],
      settles: "c3", verdict: "grows",
      reason: "With hours they choose, tutors would take $4 an hour less, so the bottom of the stick fell. The move grows the value."
    }),

    // ----- held back for the review -----
    move({
      id: "r-delivery", from: "Notes on Dana’s bakery", detail: "Written in November",
      lines: [
        ["c1", "We started delivering cakes to the party, free.", WHAT],
        ["c2", "Parents say a cake brought to the door is worth $12 more to them than one they pick up."]],
      settles: "c2", verdict: "grows",
      reason: "Parents would pay $12 more for a delivered cake, so the top of the stick rose. The move grows the value."
    }),
    move({
      id: "r-supplier", from: "Notes on Ray’s plumbing business", detail: "Written in January",
      lines: [
        ["c1", "We got our parts supplier to cut its prices 10% by threatening to switch.", WHAT],
        ["c2", "The supplier’s own costs are the same; it is simply earning less on what it sells us."]],
      settles: "c2", verdict: "moves",
      reason: "The supplier would have taken what it took before and was pushed to take less. The 10% moved from the supplier to Ray, and the value is the same."
    }),
    move({
      id: "r-raise2", from: "Notes on Kim’s tutoring business", detail: "Written in June",
      lines: [
        ["c1", "We raised the hourly price from $50 to $60.", WHAT],
        ["c2", "The tutoring is the same, and parents would pay at most what they always would."]],
      settles: "c2", verdict: "moves",
      reason: "The tutoring and what parents would pay are the same, so the value did not change. The $10 moved from the parents to Kim."
    })
  ]);
})();
