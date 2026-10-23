// Strategy, lesson 3 "Value created, and who keeps it": one sale's four numbers made fresh (lesson standard 3.5, a generator). The value stick
// (research ST7): the most a customer would pay, the price, the cost (what the business pays its suppliers and staff for it) and the least those
// suppliers and staff would take. The learner works out the value created (the most a customer would pay less the least suppliers and staff would
// take), what the customer keeps (the most they would pay less the price) and what the business keeps (the price less the cost).
// Whole dollars only. The three shares are drawn from three ranges a clear gap apart (small 2 to 4, middle 6 to 9, big 11 to 16), and which share
// gets which range is drawn too, so a trap (one share for another, the price for the value) is never within a dollar of the answer, and the big
// share is not always the business's. The least suppliers would take starts at 18, above any share, so the price is never the value created.
(() => {
  const money = n => '$' + n.toLocaleString('en-US');
  const THINGS = [
    { what: "A birthday cake", who: "Dana’s bakery" },
    { what: "A haircut", who: "Grace’s salon" },
    { what: "A bike repair", who: "Leo’s bike shop" },
    { what: "An hour of tutoring", who: "Kim’s tutoring business" },
    { what: "A dog grooming visit", who: "Rosa’s grooming van" },
    { what: "A plumbing call", who: "Ray’s plumbing business" }
  ];
  // which range each share takes: [suppliers and staff, the business, the customer]
  const SHAPES = [["small", "mid", "big"], ["small", "big", "mid"], ["mid", "small", "big"], ["mid", "big", "small"], ["big", "small", "mid"], ["big", "mid", "small"]];

  FC.gen("strategy", [{
    id: "g-stick", strand: "value-numbers", facets: { scale: "owner" },
    params: { thing: [0, 5, 1], shape: [0, 5, 1], small: [2, 4, 1], mid: [6, 9, 1], big: [11, 16, 1], wts: [18, 40, 1] },
    make: pick => {
      const t = THINGS[pick("thing")], [s, b, c] = SHAPES[pick("shape")].map(range => pick(range));
      const wts = pick("wts"), cost = wts + s, price = cost + b, wtp = price + c;
      return {
        what: t.what, who: t.who, wts, cost, price, wtp,
        wtsText: money(wts), costText: money(cost), priceText: money(price), wtpText: money(wtp),
        value: wtp - wts, customer: c, business: b, supplier: s,
        valueText: money(wtp - wts), customerText: money(c), businessText: money(b), supplierText: money(s),
        // the traps: the price taken for the value; the value counted from the cost, leaving out what suppliers and staff keep;
        // the business's share and the customer's swapped; the business's share counted from the least suppliers would take
        priceTrap: price, fromCost: wtp - cost, fromWts: price - wts
      };
    },
    blocks: [{ kind: "document", form: "table", title: "{who}: {what}, one sale", head: ["For one sale", "Dollars"],
      rows: [
        { id: "wtp", cells: ["The most a customer would pay", "{wtpText}"] },
        { id: "price", cells: ["The price", "{priceText}"] },
        { id: "cost", cells: ["The cost: what suppliers and staff are paid for it", "{costText}"] },
        { id: "wts", cells: ["The least suppliers and staff would take", "{wtsText}"] }] }],
    asks: [
      { id: "value", kind: "number", prompt: "How much value does one sale create?", frame: "$__", answer: "value", tol: { abs: 1 },
        traps: [
          { slip: "price-as-value", value: "priceTrap", then: "That is the price. The value created runs from the least suppliers and staff would take up to the most a customer would pay." },
          { slip: "share-swapped", value: "fromCost", then: "That starts from the cost and leaves out what suppliers and staff keep. Start from the least they would take." }] },
      { id: "customer", kind: "number", prompt: "How much of it does the customer keep?", frame: "$__", answer: "customer", tol: { abs: 1 },
        traps: [{ slip: "share-swapped", value: "business", then: "That is the price less the cost, what the business keeps. The customer keeps the most they would pay less the price." }] },
      { id: "business", kind: "number", prompt: "How much does the business keep?", frame: "$__", answer: "business", tol: { abs: 1 },
        traps: [
          { slip: "share-swapped", value: "customer", then: "That is what the customer keeps. The business keeps the price less the cost." },
          { slip: "share-swapped", value: "fromWts", then: "That counts what suppliers and staff keep as the business’s. Take the price less the cost." }] }],
    steps: [
      { id: "value", does: "The value created: the most a customer would pay less the least suppliers and staff would take.", working: "{wtpText} − {wtsText} = {valueText}", ask: "value" },
      { id: "customer", does: "The customer’s share: the most they would pay less the price.", working: "{wtpText} − {priceText} = {customerText}", ask: "customer" },
      { id: "business", does: "The business’s share: the price less the cost.", working: "{priceText} − {costText} = {businessText}", ask: "business" }],
    deciding: ["wtp", "price", "cost", "wts"],
    reason: "One sale creates {valueText}, the {wtpText} a customer would pay less the {wtsText} suppliers and staff would take. The customer keeps {customerText}, the business {businessText}, and suppliers and staff the other {supplierText}.",
    figure: { kind: "figure", type: "stick", data: { caption: "{what}, one sale", wtp: "{wtp}", price: "{price}", cost: "{cost}", wts: "{wts}" } }
  }]);
})();
