// Strategy, lesson 5 "Find the core": the worked books, the questions of the groups, the check and three held back for the review.
// The one rule (research ST4, ST8): take each line's direct cost from what it brought in, and judge the line by what is left, not by its sales.
// The line that earns the most is the core: keep it and grow it. Its share is its earnings over what the lines that make money earn together
// (a line that loses money is left out of that sum and dealt with on its own). A line that loses money: if the core's customers buy it along with
// the core, keep it but fix its price or cost; if not, let it go. The note under each table says which. A question about a row of a table is a
// choice that names the rows (a tap takes only the lines of a text). Invented owners; the numbers are worked out here from each table.
(() => {
  const money = n => (n < 0 ? "−$" : "$") + Math.abs(n).toLocaleString("en-US");
  const pct = n => `${Math.round(n * 10) / 10}%`;
  const VERDICTS = ["keep", "fix", "let-go"];
  function core({ id, who, detail, lines, loser, tied, fact, scale = "owner" }) {
    const rows = lines.map(([rid, name, revenue, cost]) => ({ rid, name, revenue, cost, earns: revenue - cost }));
    const top = rows.reduce((a, b) => (b.earns > a.earns ? b : a)), biggest = rows.reduce((a, b) => (b.revenue > a.revenue ? b : a));
    const lost = rows.find(r => r.rid === loser), earning = rows.filter(r => r.earns > 0);
    const made = earning.reduce((n, r) => n + r.earns, 0), net = rows.reduce((n, r) => n + r.earns, 0), sales = rows.reduce((n, r) => n + r.revenue, 0);
    const share = top.earns / made * 100, verdict = tied ? "fix" : "let-go";
    const slipBig = biggest.rid !== top.rid;
    return {
      id, strand: "core", facets: { scale },
      blocks: [{ kind: "document", form: "table", title: `${who}: last year, line by line`, head: ["Line", "Brought in", "Direct cost"],
        rows: rows.map(r => ({ id: r.rid, cells: [r.name, money(r.revenue), money(r.cost)] })), notes: [fact] }],
      asks: [
        { id: "core", kind: "choose", prompt: "Which line is the core: the one that earns the most after its direct cost?", shuffle: true,
          options: rows.map(r => r.rid === top.rid ? { id: r.rid, text: r.name, ok: true }
            : { id: r.rid, text: r.name, then: `${r.name} earns ${money(r.earns)} after its direct cost; ${top.name} earns ${money(top.earns)}.`,
              ...(slipBig && r.rid === biggest.rid ? { slip: "sales-not-profit" } : {}) }) },
        { id: "share", kind: "number", prompt: `What share of what the lines that make money earn together comes from ${top.name}?`, frame: "__%", answer: share, tol: { abs: 1 },
          traps: [
            { slip: "sales-not-profit", value: top.revenue / sales * 100, then: "That is its share of the sales. The share that counts is of what the lines earn after their direct costs." },
            { slip: "loser-counted", value: top.earns / net * 100, then: `That takes ${lost.name}’s loss off the total. Add up only the lines that make money.` }] },
        { id: "verdict", kind: "choose", prompt: `What should the owner do with ${lost.name}, which loses money?`, from: "verdict", only: VERDICTS, right: verdict,
          then: {
            keep: `${lost.name} loses ${money(-lost.earns)} after its direct cost; growing it would lose more.`,
            ...(verdict === "fix" ? { "let-go": "The note says the core’s customers buy it along with the core, so dropping it would cost the core too. Fix its price or cost." }
              : { fix: "The note says its customers do not buy the core, so nothing ties it to the core. Let it go." }) },
          slips: { keep: "growth-for-growth" } }],
      steps: [
        { id: "earns", does: "Take each line’s direct cost from what it brought in, and find the line that earns the most.", working: `${rows.map(r => `${r.name}: ${money(r.earns)}`).join("; ")}. ${top.name} earns the most${slipBig ? `, though ${biggest.name} brings in more` : ""}.`, ask: "core" },
        { id: "share", does: "Divide what it earns by what the lines that make money earn together.", working: `${money(top.earns)} ÷ ${money(made)} = ${pct(share)}. ${lost.name} loses money, so it is left out of the sum.`, ask: "share" },
        { id: "verdict", does: "Decide on the line that loses money: do the core’s customers buy it along with the core?", working: `${fact} So ${verdict === "fix" ? "keep it, but fix its price or cost" : "let it go"}.`, ask: "verdict" }],
      deciding: [top.rid, lost.rid],
      reason: `${top.name} earns ${money(top.earns)} after its direct cost, ${pct(share)} of what the lines that make money earn${slipBig ? `, more than ${biggest.name} with its bigger sales` : ""}: that is the core. ${lost.name} loses ${money(-lost.earns)}, and ${tied ? "the core’s customers buy it too, so fix its price or cost" : "nothing ties it to the core, so let it go"}.`
    };
  }

  FC.items("strategy", [
    // ----- the worked books -----
    core({ id: "w-books", who: "Dana’s bakery", lines: [["b1", "Bread", 60000, 52000], ["b2", "Wedding cakes", 48000, 18000], ["b3", "Birthday cakes", 30000, 18000], ["b4", "Catering", 20000, 26000]],
      loser: "b4", tied: true, fact: "Most couples who order a wedding cake also book our catering for the party." }),

    // ----- the first group (the deciding rows marked) -----
    core({ id: "p-crews", who: "Luis’s landscaping crew", lines: [["b4", "Tree work", 25000, 31000], ["b1", "Lawn mowing", 90000, 78000], ["b2", "Garden design", 40000, 14000], ["b3", "Snow removal", 30000, 26000]],
      loser: "b4", tied: false, fact: "Tree work comes mostly from one-off calls by people who are not our garden design customers." }),
    core({ id: "p-printers", who: "Omar’s print shop", lines: [["b1", "Walk-in customers", 70000, 62000], ["b3", "The school district", 35000, 21000], ["b4", "Restaurant menus", 18000, 22000], ["b2", "Three law firms", 50000, 22000]],
      loser: "b4", tied: false, fact: "The law firms order only legal papers from us; the restaurants buy nothing but their menus." }),
    core({ id: "p-tutors", who: "Kim’s tutoring business", lines: [["b1", "Sessions at the family’s home", 60000, 30000], ["b2", "Online sessions", 40000, 16000], ["b3", "Group classes at the library", 25000, 29000], ["b4", "Summer camp", 30000, 24000]],
      loser: "b3", tied: true, fact: "Most families who book sessions at home found us through the library classes, and keep their child in both." }),

    // ----- the second group (nothing marked) -----
    core({ id: "q-stylists", who: "Grace’s salon", lines: [["b2", "Color", 50000, 20000], ["b1", "Haircuts", 80000, 66000], ["b4", "Nail station", 15000, 19000], ["b3", "Hair products sold", 20000, 17000]],
      loser: "b4", tied: false, fact: "Nail clients are mostly walk-ins who never book a cut or color." }),
    core({ id: "q-moves", who: "Bea’s moving company", lines: [["b3", "Storage", 25000, 15000], ["b4", "Piano moves", 10000, 14000], ["b1", "Families moving house", 120000, 96000], ["b2", "Office moves", 60000, 30000]],
      loser: "b4", tied: false, fact: "Piano moves come from people who call only about the piano." }),
    core({ id: "q-trays", who: "Priya’s cafe", lines: [["b1", "The cafe itself", 90000, 70000], ["b2", "Catering trays for offices", 40000, 16000], ["b3", "Delivery app orders", 30000, 33000], ["b4", "Farmers market stall", 12000, 8000]],
      loser: "b3", tied: true, fact: "The offices that order catering trays place most of those orders through the delivery app." }),

    // ----- the check -----
    core({ id: "k-garage", who: "Ed’s auto repair shop", lines: [["b1", "Oil changes", 70000, 62000], ["b2", "Brake and engine repair", 80000, 40000], ["b3", "Tire sales", 50000, 42000], ["b4", "Car wash", 10000, 13000]],
      loser: "b4", tied: false, fact: "Car wash customers come only for the wash." }),
    core({ id: "k-flowers", who: "June’s flower shop", lines: [["b4", "Hotel lobbies", 15000, 20000], ["b1", "Walk-in shoppers", 70000, 60000], ["b3", "Funeral homes", 30000, 20000], ["b2", "Weddings", 45000, 18000]],
      loser: "b4", tied: true, fact: "The hotels whose lobbies we do send us most of our wedding couples." }),
    core({ id: "k-pipes", who: "Ray’s plumbing business", lines: [["b1", "Emergency calls", 60000, 30000], ["b2", "New bathrooms", 100000, 88000], ["b3", "Water heaters put in", 40000, 32000], ["b4", "Drain cleaning by the month", 15000, 19000]],
      loser: "b4", tied: true, fact: "The customers on monthly drain cleaning are the ones who call us first in an emergency." }),
    core({ id: "k-lunches", who: "Sam’s food truck", lines: [["b4", "Late-night stops", 12000, 15000], ["b3", "Private parties", 30000, 18000], ["b1", "Weekday office lunches", 70000, 45000], ["b2", "Weekend festivals", 50000, 42000]],
      loser: "b4", tied: false, fact: "The late-night crowd is not the office lunch crowd: different people, different days." }),

    // ----- held back for the review -----
    core({ id: "r-bikes", who: "Leo’s bike shop", lines: [["b1", "Repairs", 50000, 20000], ["b2", "New bikes", 90000, 81000], ["b3", "Rentals", 20000, 14000], ["b4", "Group rides", 5000, 8000]],
      loser: "b4", tied: true, fact: "Most repair customers first came to us on a group ride." }),
    core({ id: "r-grooming", who: "Rosa’s grooming van", lines: [["b2", "One-time visits", 40000, 34000], ["b1", "Monthly regulars", 60000, 30000], ["b4", "Show dogs", 10000, 14000], ["b3", "Pet stores", 25000, 19000]],
      loser: "b4", tied: false, fact: "Show dog owners are not among our monthly regulars." }),
    core({ id: "r-service", who: "Tom’s heating and cooling business", lines: [["b1", "Repair calls", 80000, 70000], ["b2", "Yearly service plans", 50000, 20000], ["b3", "New systems put in", 90000, 80000], ["b4", "Duct cleaning", 10000, 14000]],
      loser: "b4", tied: true, fact: "We sell duct cleaning only to service plan customers, on the plan’s yearly visit." })
  ]);
})();
