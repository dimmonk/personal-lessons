// Strategy, lesson 4 "Who squeezes the profit": the worked report, the questions of the groups, the check and three held back for the review.
// The one rule (research ST6): find who takes the money, and why, and name the one force the facts show taking the most of it; do not list all
// five. Buyers are strong when a few big customers buy most of the output or can switch at will (a middleman that brings you your customers, such
// as a delivery app or a chain store, counts as a buyer); suppliers when a few that cannot be replaced set their price; newcomers when starting up
// is cheap and easy; substitutes when another way to meet the need caps the price; rivals when many alike fight on price. When two forces press,
// the facts say how much each takes, and the bigger one is named (Porter's pitfall: dig into the most important force). Growth goes to newcomers
// when starting up is easy, and stays with the businesses already there when it is hard. Every line but the settling one says why it does not
// settle. Trade reports on invented towns; the truck report is the known case of Paccar, with the facts research ST6 gives.
(() => {
  const FORCES = ["buyers", "suppliers", "entrants", "substitutes", "rivals"];
  const WHO = { buyers: "buyers", suppliers: "suppliers", entrants: "newcomers", substitutes: "a substitute", rivals: "rivals" };
  const none = (f, right) => `No line shows ${WHO[f]} taking money here. The settling line shows ${WHO[right]} taking it.`;
  const GROWTH = "That is growth. It says nothing yet about who takes the profit.";
  // who the growth goes to: newcomers when starting up is easy, the businesses already there when it is hard
  const GOES = {
    entrants: { text: "Newcomers: starting up is easy, so they arrive and cut prices to win the new customers",
      then: "Starting up here is hard, so no newcomers arrive to take the growth: it stays with the businesses already there." },
    stays: { text: "The businesses already there: starting up is hard, so no newcomers come for it",
      slip: "fast-growth-attractive", then: "Starting up here is easy, so the growth draws newcomers who cut prices, and it goes to them." }
  };
  // a report: lines [id, text, force or null, note]; the line that settles it and its force; an owner's claim about growth and who gets it
  function squeeze({ id, scale = "owner", source, headline, lines, settles, right, claim, growthTo, reason, steps, tapPrompt, forcePrompt, deciding }) {
    lines.forEach(([lid, , , note]) => { if (lid !== settles && !note) throw new Error(`strategy ${id}: line ${lid} has no note`); });
    const said = Object.fromEntries(lines.filter(l => l[2] && l[2] !== right).map(l => [l[2], l[3]]));
    return {
      id, strand: "squeeze", facets: { scale },
      blocks: [{ kind: "article", id: "report", form: "report", source, headline: { id: "h", text: headline },
        lines: lines.map(([lid, text, , note]) => ({ id: lid, text, ...(note && lid !== settles ? { note } : {}) })) }],
      asks: [
        { id: "line", kind: "tap", prompt: tapPrompt || "Tap the line that shows who takes the money.", in: "report", right: [settles] },
        { id: "force", kind: "choose", prompt: forcePrompt || "Which force squeezes the profit most?", from: "force", right,
          then: Object.fromEntries(FORCES.filter(f => f !== right).map(f => [f, said[f] || none(f, right)])) },
        ...(claim ? [{ id: "claim", kind: "choose", prompt: `${claim} Who will the growth go to?`, shuffle: true, options: ["entrants", "stays"].map(o =>
          o === growthTo ? { id: o, text: GOES[o].text, ok: true } : { id: o, text: GOES[o].text, then: GOES[o].then, ...(GOES[o].slip ? { slip: GOES[o].slip } : {}) }) }] : [])
      ],
      ...(steps ? { steps } : {}),
      deciding: deciding || [settles],
      reason
    };
  }

  FC.items("strategy", [
    // ----- the worked report: buyers -----
    squeeze({
      id: "w-pharmacy", source: "Valley Business Journal · Trade report", headline: "Small-town pharmacies: the year in review",
      lines: [
        ["c1", "There are four pharmacies in town, and none has opened or closed in ten years.", "rivals", "The four have been there ten years and nobody new arrives, so rivals and newcomers are calm."],
        ["c2", "Three big wholesalers sell nearly all the drugs, but they compete for each pharmacy’s account, and a pharmacy can move to another of them within a week.", "suppliers", "The wholesalers compete for each account and a pharmacy can move within a week, so suppliers have little hold."],
        ["c3", "Most prescriptions are paid for by three drug-benefit companies acting for the insurance plans, and they decide what they pay; a pharmacy that refuses their rate loses those customers.", "buyers"],
        ["c4", "Mail-order pharmacies fill a small share, mostly drugs taken for years.", "substitutes", "Mail order takes only a small share, so it caps little."]],
      settles: "c3", right: "buyers",
      steps: [
        { id: "line", does: "Find the line that shows who takes the money, and why.", working: "The third line: three drug-benefit companies pay for most prescriptions and decide what they pay, and a pharmacy that refuses their rate loses those customers.", ask: "line" },
        { id: "force", does: "Check the other forces are weak, then name the one that takes the money.", working: "No pharmacy has opened or closed in ten years, the wholesalers compete for each account, and mail order fills a small share. So the buyers, the three drug-benefit companies, take the money.", ask: "force" }],
      reason: "Three drug-benefit companies pay for most prescriptions and decide the rate, and a pharmacy cannot refuse it: the buyers take the money. The other forces are weak here, so the buyers are the one to dig into."
    }),


    // ----- the first group (the deciding line marked): growth that goes to newcomers beside growth that stays, then the known case -----
    squeeze({
      id: "p-yoga", source: "Brookfield Business Weekly · Trade report", headline: "Yoga studios: a boom year",
      lines: [
        ["c1", "Studio memberships in town grew 30% last year.", null, GROWTH],
        ["c3", "Teachers are easy to find and paid by the class.", "suppliers", "Teachers are easy to find, so suppliers have little hold."],
        ["c2", "A teacher can open a studio by renting an empty shop and buying mats, and four new studios opened this year, each starting with low prices to win students.", "entrants"]],
      settles: "c2", right: "entrants", growthTo: "entrants",
      claim: "Mia says: “Yoga is growing 30% a year, so a studio is a great business to be in.”",
      reason: "Opening a studio takes little more than a shop and mats, so newcomers keep arriving and cutting prices: they take the money. The 30% growth is what draws them, and it goes to them."
    }),
    squeeze({
      id: "p-lifts", source: "Metro Business Journal · Trade report", headline: "Elevator repair: a building boom",
      lines: [
        ["c1", "Elevator repair work in the city grew 25% last year as new towers went up.", null, GROWTH],
        ["c2", "A repair firm needs mechanics with a state license that takes four years of training on the job, and no new firm has opened in eight years.", "entrants", "Starting up is hard, so newcomers are not what takes the money."],
        ["c3", "Parts for each brand of elevator come only from the company that built it, which decides its own price.", "suppliers"],
        ["c4", "The three firms in the city are booked months ahead, and none cuts its price.", "rivals", "Three busy firms that do not cut prices: rivals are calm."]],
      settles: "c3", right: "suppliers", growthTo: "stays",
      claim: "Ben says: “Elevator repair grew 25% last year, so it is a great business to be in.”",
      reason: "Each brand’s parts come only from its builder, which decides the price: the suppliers take the most. Starting up takes years of licensed training, so the growth stays with the three firms already there, less what the parts makers take of each job: a trade is only as good as what its strongest force leaves."
    }),
    squeeze({
      id: "p-trucks", scale: "known", source: "Trade report", headline: "Heavy trucks: who makes the money",
      lines: [
        ["c2", "The truck makers fight hard on price, hardest when the economy slows and orders dry up.", "rivals", "Rivals do fight hard here, but every maker faces that alike; Paccar’s choice of customer was aimed at another force."],
        ["c3", "One maker, Paccar, chose to sell mainly to drivers who own their own truck: each buys one at a time, cares more about the truck than the last dollar, and pays about 10% more.", null, "That is Paccar’s answer. Find the line that shows the force it answers."],
        ["c1", "Big fleets and leasing companies buy many trucks at a time and use that clout to push the makers hard on price.", "buyers"]],
      settles: "c1", right: "buyers",
      tapPrompt: "Tap the line that shows the force Paccar stepped around.",
      forcePrompt: "Several forces press on truck makers. Which one did Paccar step around by choosing its customers?",
      reason: "Big fleets and leasing companies use their buying clout to push makers on price, and the makers fight each other hard as well. Paccar chose drivers who own their own truck, buyers with little clout who care less about price, so it found the place where the buyer force is weakest, and earns about 10% more."
    }),
    squeeze({
      id: "p-pool", source: "Tri-County Business News · Trade report", headline: "Pool services and the price of chlorine",
      lines: [
        ["c2", "One wholesaler sells all the bulk chlorine, and named its price.", "suppliers"],
        ["c1", "Homeowners sign up for the whole summer at about $150 a month, 9 in 10 sign up again each spring, and the pool service keeps a key to the yard.", "buyers", "Homeowners rarely switch, so buyers have little pull here."],
        ["c3", "Opening a pool service takes a state license and a truck of gear, and few new ones start.", "entrants", "Few new services start, so newcomers are not what takes the money."]],
      settles: "c2", right: "suppliers",
      reason: "The only bulk chlorine seller names its price, and a pool service has nowhere else to buy: the supplier takes the money. The other forces are weak here."
    }),
    squeeze({
      id: "p-prints", source: "Lakeview Business Review · Trade report", headline: "Photo printing shops: fewer orders every year",
      lines: [
        ["c1", "Of the 14 photo printing shops the city had in 2005, only two are left, and neither has changed its prices in four years.", "rivals", "Only two shops are left, and they do not cut prices, so rivals are not the problem."],
        ["c3", "Paper and ink are cheap and easy to buy.", "suppliers", "Paper and ink are easy to buy, so suppliers have little hold."],
        ["c2", "People now look at their photos on their phones and print almost none.", "substitutes"]],
      settles: "c2", right: "substitutes",
      reason: "Phones meet the same need, looking at photos, without a print: a substitute caps what a shop can sell and charge. The other forces are weak here."
    }),
    squeeze({
      id: "p-washes", source: "Eastside Business Weekly · Trade report", headline: "Car washes on Main Street",
      lines: [
        ["c1", "Main Street has six car washes within a mile, all with the same machines and the same three washes.", "rivals", "That says how many there are and how alike, not yet whether they fight on price."],
        ["c4", "No new car wash has opened in years: the land on Main Street is too costly.", "entrants", "Nobody new can find land, so newcomers are not the problem."],
        ["c2", "Each spring one cuts its price, and the rest match it within a week.", "rivals"],
        ["c3", "Soap and machines can be bought from any of several dealers.", "suppliers", "Several dealers sell the supplies, so suppliers have little hold."]],
      settles: "c2", right: "rivals",
      reason: "Six washes alike match every price cut within a week: the rivals already there fight away the profit. The other forces are weak here."
    }),

    // ----- the second group (nothing marked) -----
    squeeze({
      id: "q-apps", source: "Downtown Business Journal · Trade report", headline: "Takeout restaurants and the delivery apps",
      lines: [
        ["c1", "Food prices from the wholesalers rose 4% this year.", "suppliers", "Food costs rose 4%, a real squeeze, but far smaller than the apps’ 30% of every order."],
        ["c2", "Most takeout orders now come through two delivery apps, which keep 30% of each order and decide which restaurants diners see first.", "buyers"],
        ["c3", "Only one new takeout place opened this year.", "entrants", "One new place a year is not what takes the money."]],
      settles: "c2", right: "buyers",
      reason: "The apps bring most of the orders and keep 30% of each: as the middleman between the restaurant and its diners they count as buyers, and they take far more than the 4% rise in food costs."
    }),
    squeeze({
      id: "q-laundry", source: "Westfield Business Report · Trade report", headline: "Coin laundries: steady decline",
      lines: [
        ["c2", "Most new apartments now come with their own washer and dryer.", "substitutes"],
        ["c1", "There are three coin laundries in town, charging $3.50 a wash and $2 a dry, the same prices as in 2019, and none plans a cut.", "rivals", "Three laundries hold steady prices, so rivals are calm."],
        ["c3", "Any of several dealers will sell a laundry its machines and soap.", "suppliers", "Several dealers compete to sell supplies, so suppliers have little hold."]],
      settles: "c2", right: "substitutes",
      reason: "A washer in the apartment meets the same need without the laundry: that substitute takes the customers. The other forces are weak here."
    }),
    squeeze({
      id: "q-dogs", source: "Northside Business Weekly · Trade report", headline: "Dog walking: more dogs, more walkers",
      lines: [
        ["c1", "Demand for dog walking in the city grew 20% last year, as more people got dogs and went back to the office.", null, GROWTH],
        ["c2", "Most owners have used the same walker for over a year, and trust the walker with the house from the first visit.", "buyers", "Owners stay with one walker, so buyers have little pull here."],
        ["c3", "Anyone with a phone can walk dogs: 300 new walkers joined this year, and the going rate fell from $25 to $18.", "entrants"]],
      settles: "c3", right: "entrants", growthTo: "entrants",
      claim: "Leo says: “Dog walking grew 20% last year, so it is a great business to be in.”",
      reason: "Anyone with a phone can start, 300 newcomers joined, and the rate fell from $25 to $18: newcomers take the money. The growth is what drew them, and it goes to them."
    }),
    squeeze({
      id: "q-linens", source: "Harbor Business News · Trade report", headline: "Hotel laundries: a quote every week",
      lines: [
        ["c1", "The two laundries in town that take hotel work each run two shifts, and their prices sit within a dollar of each other’s.", "rivals", "Two laundries with prices close together, and no line shows them fighting: rivals are not what takes it."],
        ["c2", "Each of the four big hotels sends its sheets to whichever laundry quotes lowest that week.", "buyers"],
        ["c3", "Soap, water and machines cost what they did last year.", "suppliers", "Supplies cost the same, so suppliers have little hold."]],
      settles: "c2", right: "buyers",
      reason: "Four big hotels move their sheets every week to the lowest quote, at no cost to switch: the buyers push the price down and take the money."
    }),
    squeeze({
      id: "q-butter", source: "Mountain Business Journal · Trade report", headline: "Pastry shops squeezed on butter",
      lines: [
        ["c1", "Customers come back two or three times a week for the pastries, and most pay the $4.50 a croissant the shops charge without a word.", "buyers", "Customers pay what is asked, so buyers have little hold."],
        ["c3", "There are two pastry shops in the valley, and neither cuts prices.", "rivals", "Two shops that do not cut prices: rivals are calm."],
        ["c2", "Only one dairy delivers butter up here.", "suppliers"]],
      settles: "c2", right: "suppliers",
      reason: "Only one dairy delivers butter up the mountain, so the shops cannot buy elsewhere and pay what it charges: the supplier takes the money."
    }),
    squeeze({
      id: "q-nails", source: "Midtown Business Weekly · Trade report", headline: "Nail salons: price war on Second Avenue",
      lines: [
        ["c3", "Every month one salon cuts its price, and the others match it.", "rivals"],
        ["c1", "Fifteen nail salons now stand within two blocks, with the same menu.", "rivals", "That says how many there are; the line that settles it shows them fighting on price."],
        ["c2", "Polish and supplies come from many wholesalers.", "suppliers", "Supplies come from many wholesalers, so they have little hold."]],
      settles: "c3", right: "rivals",
      reason: "Fifteen salons with the same menu match every cut: the rivals already there fight away the profit."
    }),

    // ----- the check -----
    squeeze({
      id: "k-buses", source: "County Business Journal · Trade report", headline: "School bus companies bid again",
      lines: [
        ["c2", "One school district buys all the bus service in the county; every three years it takes bids and picks the lowest.", "buyers"],
        ["c1", "A bus costs about $90,000 and can be bought or leased from any of four dealers, and drivers with the right license answer every ad.", "suppliers", "Buses and drivers are easy to find, so suppliers have little hold."],
        ["c3", "No new bus company has started here in years.", "entrants", "No newcomers start, so they are not the problem."]],
      settles: "c2", right: "buyers",
      reason: "One district buys all the service and takes the lowest bid: the buyer takes the money. The other forces are weak here."
    }),
    squeeze({
      id: "k-detail", source: "Lakeshore Business Report · Trade report", headline: "Mobile car detailing: the fastest-growing trade in the county",
      lines: [
        ["c1", "Detailing jobs booked in the county grew 40% last year, as more people kept their cars longer instead of buying new ones.", null, GROWTH],
        ["c2", "Most car owners book the same detailer every spring and fall, and few get a second quote before they book.", "buyers", "Owners stay with one detailer, so buyers have little pull here."],
        ["c3", "Anyone with a van, a pressure washer and a phone can start; eleven new detailers began this year, each charging less.", "entrants"]],
      settles: "c3", right: "entrants", growthTo: "entrants",
      claim: "Rosa says: “Detailing grew 40% last year, so it is a great business to be in.”",
      reason: "A van, a pressure washer and a phone are enough to start, and eleven newcomers charge less: newcomers take the money. The growth is what drew them, and it goes to them."
    }),
    squeeze({
      id: "k-travel", source: "Harbor Business News · Trade report", headline: "Travel agents: fewer bookings",
      lines: [
        ["c2", "There are only three travel agents left in town.", "rivals", "Only three are left, so rivals are not the problem."],
        ["c1", "Travelers now book their own flights and hotels online in a few minutes.", "substitutes"],
        ["c3", "No new agency has opened in ten years.", "entrants", "No newcomers open, so they are not the problem."]],
      settles: "c1", right: "substitutes",
      reason: "Booking online meets the same need without an agent: the substitute takes the customers. The other forces are weak here."
    }),
    squeeze({
      id: "k-sandwich", source: "State Business Journal · Trade report", headline: "Sandwich franchises and their supplier",
      lines: [
        ["c2", "Lunch customers come back most weekdays, many from the offices nearby, and the menu price has gone up twice since they started coming.", "buyers", "Customers keep coming as the price rises, so buyers have little hold."],
        ["c3", "A new shop under the franchise needs the franchise owner’s say-so; the owner picks where each shop in the county goes.", "entrants", "Newcomers need the owner’s say-so, so they are not the problem."],
        ["c1", "Each shop’s contract makes it buy bread, meat and paper goods from the franchise owner, who raised prices 15% this year.", "suppliers"]],
      settles: "c1", right: "suppliers",
      reason: "Each shop must buy its supplies from the franchise owner at the prices it chooses, and it raised them 15%: the supplier takes the money."
    }),
    squeeze({
      id: "k-coffee", source: "Elm Street Business Weekly · Trade report", headline: "Cafes on Elm Street: a year of cheaper lattes",
      lines: [
        ["c1", "Bean prices rose 10% this year, which adds about 3 cents to each $4 cup, the cafes’ roaster says in its new price list.", "suppliers", "Beans cost more, but 3 cents a cup is small beside a 75-cent price cut."],
        ["c2", "Six cafes on Elm Street sell the same drinks; this year they cut a latte from $4 to $3.25, matching each other.", "rivals"],
        ["c3", "Every shop front on Elm Street is leased, most for ten years or more, to the same cafes and stores as three years ago.", "entrants", "No newcomer can get a lease, so they are not the problem."]],
      settles: "c2", right: "rivals",
      reason: "The six cafes cut a latte by 75 cents, matching each other, while dearer beans add only 3 cents a cup: the rivals take far more than the suppliers."
    }),
    squeeze({
      id: "k-boxes", source: "River Valley Business Journal · Trade report", headline: "Box makers and the supermarket chain",
      lines: [
        ["c1", "Cardboard from the mills rose 2% this year.", "suppliers", "Cardboard rose 2%, small beside the 8% the chain took off the price."],
        ["c2", "No box maker has opened in the valley since 2011: the machines cost about $4 million, and the three makers already here run them day and night.", "entrants", "No newcomers open, so they are not the problem."],
        ["c3", "One supermarket chain buys most of the boxes, and pushed the price down 8%.", "buyers"]],
      settles: "c3", right: "buyers",
      reason: "One chain buys most of the boxes and pushed the price down 8%, while cardboard rose only 2%: the buyer takes far more than the suppliers."
    }),

    // ----- held back for the review -----
    squeeze({
      id: "r-vets", source: "Prairie Business News · Trade report", headline: "Animal clinics and the medicine makers",
      lines: [
        ["c1", "Pet owners trust their vet and rarely compare prices.", "buyers", "Owners rarely compare prices, so buyers have little hold."],
        ["c2", "Two companies make the vaccines and flea medicines every clinic must stock, and both raised prices 20% this year.", "suppliers"]],
      settles: "c2", right: "suppliers",
      reason: "Two makers supply what every clinic must stock and raised prices 20%: the suppliers take the money."
    }),
    squeeze({
      id: "r-dvds", source: "Metro Business Report · Trade report", headline: "Video game shops: fewer boxes sold",
      lines: [
        ["c1", "Most players now download games straight to the console.", "substitutes"],
        ["c2", "Only one other game shop is left downtown.", "rivals", "Only one rival is left, so rivals are not the problem."]],
      settles: "c1", right: "substitutes",
      reason: "Downloading meets the same need without a shop: the substitute takes the customers."
    }),
    squeeze({
      id: "r-pizza", source: "College Town Business Weekly · Trade report", headline: "Pizza places near campus",
      lines: [
        ["c1", "Eleven pizza places near campus sell the same large pizza, and each week one of them runs a cheaper deal that the rest copy.", "rivals"],
        ["c2", "Cheese and flour come from many wholesalers.", "suppliers", "Many wholesalers compete, so suppliers have little hold."]],
      settles: "c1", right: "rivals",
      reason: "Eleven places with the same pizza copy every deal: the rivals already there fight away the profit."
    })
  ]);
})();
