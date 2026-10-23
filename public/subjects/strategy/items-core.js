// Strategy, lesson 5 "Find the core": the worked books, the questions of the groups, the check and three held back for the review.
// The one rule (research ST4, ST8, ST19): compare lines of one kind, each sale counted once; take each line's direct cost (one that would stop if
// the line stopped) from what it brought in, and judge the line by what is left, not by its sales. The core is the line that is both distinctive
// (what customers come here for rather than to a rival) and earns the most: Porter's box asks which lines are "the most distinctive" and "the most
// profitable". Usually that is the line that earns the most of all; a line every rival sells the same way is not the core, however much it earns
// this year, since its profit can be competed away (ST1). The core's share is of what all the lines of the kind earn together, losses taken off
// (the cumulative-profit view of ST19, which can pass 100%). A line that loses money: if the core's customers buy it along with the core, keep it
// but fix its price or cost; if nothing ties it to the core, let it go (judgement call, plan.md). The notes under each table give the facts on
// what is distinctive and what is tied. A question about a row is a choice that names the rows. Invented owners; the numbers are worked out here.
(() => {
  const money = n => (n < 0 ? "−$" : "$") + Math.abs(n).toLocaleString("en-US");
  const pct = n => `${Math.round(n * 10) / 10}%`;
  const KIND = { product: "product by product", customer: "customer by customer", channel: "way of selling by way of selling" };
  function core({ id, who, kind, lines, coreId, loser, tied, distinct, fact, scale = "owner" }) {
    const rows = lines.map(([rid, name, revenue, cost]) => ({ rid, name, revenue, cost, earns: revenue - cost }));
    const top = rows.reduce((a, b) => (b.earns > a.earns ? b : a)), biggest = rows.reduce((a, b) => (b.revenue > a.revenue ? b : a));
    const theCore = rows.find(r => r.rid === (coreId || top.rid)), plain = theCore.rid !== top.rid;
    const lost = rows.find(r => r.rid === loser), earning = rows.filter(r => r.earns > 0);
    const made = earning.reduce((n, r) => n + r.earns, 0), net = rows.reduce((n, r) => n + r.earns, 0), sales = rows.reduce((n, r) => n + r.revenue, 0);
    const share = theCore.earns / net * 100, onlyEarning = theCore.earns / made * 100, ofSales = theCore.revenue / sales * 100;
    [onlyEarning, ofSales].forEach(t => { if (Math.abs(t - share) <= 1) throw new Error(`strategy ${id}: a trap within 1 of the share`); });
    const why = r => r.rid === top.rid && plain
      ? `${r.name} earns the most, ${money(r.earns)}, but every rival sells it the same way, so its profit can be competed away; ${theCore.name} is what customers come here for, and earns ${money(theCore.earns)}.`
      : `${r.name} ${r.earns < 0 ? `loses ${money(-r.earns)}` : `earns ${money(r.earns)}`} after its direct cost; ${theCore.name} earns ${money(theCore.earns)} and is what customers come here for.`;
    return {
      id, strand: "core", facets: { scale },
      blocks: [{ kind: "document", form: "table", title: `${who}: last year, ${KIND[kind]}`, head: ["Line", "Brought in", "Direct cost"],
        rows: rows.map(r => ({ id: r.rid, cells: [r.name, money(r.revenue), money(r.cost)] })), notes: [distinct, fact] }],
      asks: [
        { id: "core", kind: "choose", prompt: "Which line is the core: what customers come here for rather than to a rival, and earns the most after its direct cost?", shuffle: true,
          options: rows.map(r => r.rid === theCore.rid ? { id: r.rid, text: r.name, ok: true }
            : { id: r.rid, text: r.name, then: why(r), ...(r.rid === biggest.rid && biggest.rid !== theCore.rid ? { slip: "sales-not-profit" } : {}) }) },
        { id: "share", kind: "number", prompt: `What share of what all these lines earn together, losses taken off, comes from ${theCore.name}?`, frame: "__%", answer: share, tol: { abs: 1 },
          traps: [
            { slip: "sales-not-profit", value: ofSales, then: "That is its share of the sales. The share that counts is of what the lines earn after their direct costs." },
            { slip: "loss-left-out", value: onlyEarning, then: `That leaves out the loss on ${lost.name}. Take it off the total: the share then shows what the losing line costs the rest.` }] },
        { id: "verdict", kind: "choose", prompt: `What should the owner do with ${lost.name}, which loses money?`, from: "verdict", only: ["fix", "let-go"], right: tied ? "fix" : "let-go",
          then: tied ? { "let-go": "The notes say the core’s customers buy it along with the core, so dropping it would cost the core too. Fix its price or cost." }
            : { fix: "The notes say nothing ties it to the core, so fixing it keeps a loss the core does not need. Let it go." } }],
      steps: [
        { id: "core", does: "Take each line’s direct cost from what it brought in. Then find the line customers come here for, and check it earns the most.",
          working: `${rows.map(r => `${r.name}: ${money(r.earns)}`).join("; ")}. ${plain ? `${top.name} earns the most, but rivals sell it the same way; ${theCore.name} is what customers come here for` : `${theCore.name} earns the most${biggest.rid !== theCore.rid ? `, though ${biggest.name} brings in more` : ""}, and it is what customers come here for`}.`, ask: "core" },
        { id: "share", does: "Divide what the core earns by what all the lines earn together, losses taken off.", working: `${money(theCore.earns)} ÷ ${money(net)} = ${pct(share)}. The loss on ${lost.name} is taken off the total.`, ask: "share" },
        { id: "verdict", does: "Decide on the line that loses money: do the core’s customers buy it along with the core?", working: `${fact} So ${tied ? "keep it, but fix its price or cost" : "let it go"}.`, ask: "verdict" }],
      deciding: [theCore.rid, lost.rid, ...(plain ? [top.rid] : [])],
      reason: `${theCore.name} is what customers come here for and earns ${money(theCore.earns)}, ${pct(share)} of what the lines earn together${plain ? `; ${top.name} earns more, but rivals sell it the same way` : biggest.rid !== theCore.rid ? `, more than ${biggest.name} with its bigger sales` : ""}: that is the core. ${lost.name} loses ${money(-lost.earns)}, and ${tied ? "the core’s customers buy it too, so fix its price or cost" : "nothing ties it to the core, so let it go"}.`
    };
  }

  FC.items("strategy", [
    // ----- the worked books -----
    core({ id: "w-books", who: "Dana’s bakery", kind: "product", lines: [["b1", "Bread", 60000, 52000], ["b2", "Wedding cakes", 48000, 18000], ["b3", "Birthday cakes", 30000, 18000], ["b4", "Catering", 20000, 26000]],
      loser: "b4", tied: true, distinct: "Couples drive in from three towns for our wedding cakes; no other bakery nearby makes them.",
      fact: "Most couples who order a wedding cake also book our catering for the party." }),

    // ----- the first group (the deciding rows marked): the biggest seller beside the core twice, then the core that earns less than a plain line -----
    core({ id: "p-crews", who: "Luis’s landscaping crew", kind: "product", lines: [["b4", "Tree work", 25000, 31000], ["b1", "Lawn mowing", 90000, 78000], ["b2", "Garden design", 40000, 14000], ["b3", "Snow removal", 30000, 26000]],
      loser: "b4", tied: false, distinct: "Clients ask for our garden designer by name; our designs win the county’s prize most years.",
      fact: "Tree work comes mostly from one-off calls by people who are not our garden design clients." }),
    core({ id: "p-printers", who: "Omar’s print shop", kind: "customer", lines: [["b1", "Walk-in customers", 70000, 62000], ["b3", "The school district", 35000, 21000], ["b4", "Six restaurants", 18000, 22000], ["b2", "Three law firms", 50000, 22000]],
      loser: "b4", tied: false, distinct: "The law firms use us because we print court papers to the court’s rules overnight, which no other shop in town does.",
      fact: "The restaurants buy nothing from us but their menus, and none of them sends us any other work." }),
    core({ id: "p-tutors", who: "Kim’s tutoring business", kind: "product", lines: [["b1", "Sessions at the family’s home", 60000, 30000], ["b2", "Online sessions", 40000, 16000], ["b3", "Group classes at the library", 25000, 29000], ["b4", "Summer camp", 30000, 24000]],
      loser: "b3", tied: true, distinct: "Families tell us they pick us because the tutor comes to the house; no other tutoring service in town does.",
      fact: "Most families who book sessions at home found us through the library classes, and keep their child in both." }),
    core({ id: "p-lube", who: "Nina’s auto repair shop", kind: "product", coreId: "b2", lines: [["b1", "Oil changes", 120000, 80000], ["b2", "Brake and engine repair", 80000, 48000], ["b3", "Tire sales", 50000, 44000], ["b4", "Car wash", 10000, 13000]],
      loser: "b4", tied: false, distinct: "Every quick-lube in town does oil changes the same way at the same price; drivers come from across town for our brake and engine work, and the chains send their hard cases to us.",
      fact: "Car wash customers come only for the wash." }),

    // ----- the second group (nothing marked) -----
    core({ id: "q-stylists", who: "Grace’s salon", kind: "product", lines: [["b2", "Color", 50000, 20000], ["b1", "Haircuts", 80000, 66000], ["b4", "Nail station", 15000, 19000], ["b3", "Hair products sold", 20000, 17000]],
      loser: "b4", tied: false, distinct: "Clients come from across town for our color work.",
      fact: "Nail clients are mostly walk-ins who never book a cut or color." }),
    core({ id: "q-moves", who: "Bea’s moving company", kind: "product", coreId: "b2", lines: [["b3", "Storage", 25000, 15000], ["b4", "Piano moves", 10000, 14000], ["b1", "House moves", 120000, 90000], ["b2", "Office moves", 60000, 34000]],
      loser: "b4", tied: false, distinct: "Every mover in the area does house moves the same way; offices pick us because we move them over a single weekend, which no other mover here does.",
      fact: "Piano moves come from people who call only about the piano." }),
    core({ id: "q-trays", who: "Priya’s cafe", kind: "channel", lines: [["b1", "The counter", 90000, 70000], ["b2", "Catering orders by phone", 40000, 16000], ["b3", "The delivery app", 30000, 33000], ["b4", "Farmers market stall", 12000, 8000]],
      loser: "b3", tied: true, distinct: "Offices order our catering for the pastries we bake ourselves, which no other cafe near the towers does. Each order is counted once, under the way it came in.",
      fact: "Most of the offices that phone in catering first tried us through the delivery app." }),

    // ----- the check -----
    core({ id: "k-garage", who: "Ed’s auto repair shop", kind: "product", lines: [["b1", "Oil changes", 70000, 62000], ["b2", "Brake and engine repair", 80000, 40000], ["b3", "Tire sales", 50000, 42000], ["b4", "Car wash", 10000, 13000]],
      loser: "b4", tied: false, distinct: "Drivers come to Ed for brake and engine work because he finds faults the dealers miss.",
      fact: "Car wash customers come only for the wash." }),
    core({ id: "k-flowers", who: "June’s flower shop", kind: "customer", lines: [["b4", "Hotel lobbies", 15000, 20000], ["b1", "Walk-in shoppers", 70000, 60000], ["b3", "Funeral homes", 30000, 20000], ["b2", "Wedding couples", 45000, 18000]],
      loser: "b4", tied: true, distinct: "Couples choose June for wedding flowers no other florist in town arranges.",
      fact: "The hotels whose lobbies we do send us most of our wedding couples." }),
    core({ id: "k-pipes", who: "Ray’s plumbing business", kind: "product", lines: [["b1", "Emergency calls", 60000, 30000], ["b2", "New bathrooms", 100000, 88000], ["b3", "Water heaters put in", 40000, 32000], ["b4", "Drain cleaning by the month", 15000, 19000]],
      loser: "b4", tied: true, distinct: "People call Ray first in an emergency because he answers at night, which the other plumbers in town do not.",
      fact: "The customers on monthly drain cleaning are the ones who call us first in an emergency." }),
    core({ id: "k-lunches", who: "Sam’s food truck", kind: "channel", coreId: "b3", lines: [["b4", "Late-night stops", 12000, 15000], ["b3", "Private parties", 30000, 14000], ["b1", "Weekday office lunches", 70000, 45000], ["b2", "Weekend festivals", 50000, 42000]],
      loser: "b4", tied: false, distinct: "At the office park we sell tacos beside five other taco trucks, at the same price; party hosts book us for our smoked brisket, which no other truck in town makes.",
      fact: "The late-night crowd is not the party crowd: different people, different nights." }),

    // ----- held back for the review -----
    core({ id: "r-bikes", who: "Leo’s bike shop", kind: "product", lines: [["b1", "Repairs", 50000, 20000], ["b2", "New bikes", 90000, 81000], ["b3", "Rentals", 20000, 14000], ["b4", "Group rides", 5000, 8000]],
      loser: "b4", tied: true, distinct: "Riders bring their bikes to Leo because he repairs what the big stores will only replace.",
      fact: "Most repair customers first came to us on a group ride." }),
    core({ id: "r-grooming", who: "Rosa’s grooming van", kind: "customer", lines: [["b2", "One-time customers", 40000, 34000], ["b1", "Monthly regulars", 60000, 30000], ["b4", "Show dog owners", 10000, 14000], ["b3", "Pet stores", 25000, 19000]],
      loser: "b4", tied: false, distinct: "Regulars stay because Rosa grooms each dog at home, the same way every month.",
      fact: "Show dog owners are not among our monthly regulars." }),
    core({ id: "r-service", who: "Tom’s heating and cooling business", kind: "product", lines: [["b1", "Repair calls", 80000, 70000], ["b2", "Yearly service plans", 50000, 20000], ["b3", "New systems put in", 90000, 80000], ["b4", "Duct cleaning", 10000, 14000]],
      loser: "b4", tied: true, distinct: "Plan customers pick Tom because the same technician comes every year.",
      fact: "We sell duct cleaning only to service plan customers, on the plan’s yearly visit." })
  ]);
})();
