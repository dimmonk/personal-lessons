// Strategy, lesson 4 "Who squeezes the profit": the worked report, the questions of the groups, the check and three held back for the review.
// The one rule (research ST6): find who takes the money, and why, and name the one force the facts show taking the most of it; do not list all
// five. Buyers are strong when a few big customers buy most of the output or can switch at will; suppliers when a few that cannot be replaced
// set their price; newcomers when starting up is cheap and easy; substitutes when another way to meet the need caps the price; rivals when many
// alike fight on price. A fast-growing trade is not a good one for that alone. Every report states the other forces as weak, so one settles it.
// Trade reports on invented towns; the truck report is the known case of Paccar, as research ST6 gives it.
(() => {
  const FORCES = ["buyers", "suppliers", "entrants", "substitutes", "rivals"];
  const NONE = "The report gives no sign that this force takes much of the money here.";
  // a report: lines [id, text, force or null, note]; the force of the line that settles it; an owner's claim about growth, judged after
  function squeeze({ id, scale = "owner", source, headline, lines, settles, right, claim, reason, steps }) {
    const said = Object.fromEntries(lines.filter(l => l[2] && l[2] !== right).map(l => [l[2], l[3]]));
    return {
      id, strand: "squeeze", facets: { scale },
      blocks: [{ kind: "article", id: "report", form: "report", source, headline: { id: "h", text: headline },
        lines: lines.map(([lid, text, , note]) => ({ id: lid, text, ...(note && lid !== settles ? { note } : {}) })) }],
      asks: [
        { id: "line", kind: "tap", prompt: "Tap the line that shows who takes the money.", in: "report", right: [settles] },
        { id: "force", kind: "choose", prompt: "Which force squeezes the profit most?", from: "force", right,
          then: Object.fromEntries(FORCES.filter(f => f !== right).map(f => [f, said[f] || NONE])) },
        ...(claim ? [{ id: "claim", kind: "choose", prompt: `${claim} Is that enough to call it a good trade to be in?`, shuffle: true, options: [
          { id: "yes", text: "Yes: a trade that grows that fast is a good one", slip: "fast-growth-attractive", then: "Growth says nothing about who takes the profit, and when starting up is easy it draws newcomers who cut prices." },
          { id: "no", text: "No: first see who takes the profit", ok: true }] }] : [])
      ],
      ...(steps ? { steps } : {}),
      deciding: [settles],
      reason
    };
  }

  FC.items("strategy", [
    // ----- the worked report: buyers -----
    squeeze({
      id: "w-pharmacy", source: "Valley Business Journal · Trade report", headline: "Small-town pharmacies: the year in review",
      lines: [
        ["c1", "There are four pharmacies in town, and none has opened or closed in ten years.", "rivals", "The four have been there ten years and nobody new arrives, so rivals and newcomers are calm."],
        ["c2", "Drug wholesalers are many, and a pharmacy can switch from one to another within a week.", "suppliers", "Wholesalers are many and easy to switch, so suppliers have little hold."],
        ["c3", "Most prescriptions are paid for by three big insurance plans, which decide what they pay per prescription; a pharmacy that refuses their rate loses those customers.", "buyers"],
        ["c4", "Mail-order pharmacies fill a small share, mostly drugs taken for years.", "substitutes", "Mail order takes only a small share, so it caps little."]],
      settles: "c3", right: "buyers",
      steps: [
        { id: "line", does: "Find the line that shows who takes the money, and why.", working: "The third line: three insurance plans pay for most prescriptions and decide what they pay, and a pharmacy that refuses their rate loses those customers.", ask: "line" },
        { id: "force", does: "Check the other forces are weak, then name the one that takes the money.", working: "No pharmacy has opened or closed in ten years, wholesalers are many and easy to switch, and mail order fills a small share. So the buyers, the three plans, take the money.", ask: "force" }],
      reason: "Three insurance plans pay for most prescriptions and decide the rate, and a pharmacy cannot refuse it: the buyers take the money. The other forces are weak here, so the buyers are the one to dig into."
    }),

    // ----- the first group (the deciding line marked) -----
    squeeze({
      id: "p-trucks", scale: "known", source: "Trade report", headline: "Heavy trucks: who makes the money",
      lines: [
        ["c1", "A handful of makers build heavy trucks; a new maker would need huge factories to start.", "entrants", "Starting up needs huge factories, so newcomers are few."],
        ["c2", "Steel and parts come from many suppliers.", "suppliers", "Parts come from many suppliers, so none has much hold."],
        ["c3", "Big fleets buy many trucks at a time, and they use that clout to push the makers on price.", "buyers"]],
      settles: "c3", right: "buyers",
      reason: "Fleets buying many trucks at a time push the makers on price: the buyers take the money. Paccar’s answer was to sell to drivers who own their own truck, who have little such clout, and it earns a higher price for it."
    }),
    squeeze({
      id: "p-yoga", source: "Brookfield Business Weekly · Trade report", headline: "Yoga studios: a boom year",
      lines: [
        ["c1", "Studio memberships in town grew 30% last year.", null, "That is growth. It says nothing about who takes the profit."],
        ["c2", "A teacher can open a studio by renting an empty shop and buying mats, and four new studios opened this year, each starting with low prices to win students.", "entrants"],
        ["c3", "Teachers are easy to find and paid by the class.", "suppliers", "Teachers are easy to find, so suppliers have little hold."]],
      settles: "c2", right: "entrants",
      claim: "Mia says: “Yoga is growing 30% a year, so a studio is a great business to be in.”",
      reason: "Opening a studio takes little more than a shop and mats, so newcomers keep arriving and cutting prices: they take the money. The 30% growth is what draws them."
    }),
    squeeze({
      id: "p-hearing", source: "Tri-County Business News · Trade report", headline: "Hearing aid shops face rising costs",
      lines: [
        ["c1", "Customers pick a shop for its fitting and advice, and few compare prices.", "buyers", "Customers choose on advice and rarely compare prices, so buyers have little hold."],
        ["c2", "Three companies make almost all hearing aids; they decide the price a shop pays, and raised it 15% this year.", "suppliers"],
        ["c3", "A new shop needs a licensed fitter, and only two opened in the region in five years.", "entrants", "Few new shops open, so newcomers are few."]],
      settles: "c2", right: "suppliers",
      reason: "Three makers supply nearly every hearing aid and raised their price 15%, and a shop has nowhere else to buy: the suppliers take the money. The other forces are weak here."
    }),
    squeeze({
      id: "p-prints", source: "Lakeview Business Review · Trade report", headline: "Photo printing shops: fewer orders every year",
      lines: [
        ["c1", "There are only two photo printing shops left in the city.", "rivals", "Only two shops are left, so rivals are not the problem."],
        ["c2", "People now look at their photos on their phones and print almost none.", "substitutes"],
        ["c3", "Paper and ink come from many suppliers.", "suppliers", "Paper and ink come from many suppliers, so they have little hold."]],
      settles: "c2", right: "substitutes",
      reason: "Phones meet the same need, looking at photos, without a print: a substitute caps what a shop can sell and charge. The other forces are weak here."
    }),
    squeeze({
      id: "p-washes", source: "Eastside Business Weekly · Trade report", headline: "Car washes on Main Street",
      lines: [
        ["c1", "Six car washes stand within a mile of each other on Main Street, all with the same machines and the same three washes.", "rivals"],
        ["c2", "Each spring one cuts its price, and the rest match it within a week.", "rivals"],
        ["c3", "Soap and machines come from many suppliers.", "suppliers", "Supplies come from many suppliers, so they have little hold."],
        ["c4", "No new car wash has opened in years: the land on Main Street is too costly.", "entrants", "No newcomers can find land, so newcomers are not the problem."]],
      settles: "c2", right: "rivals",
      reason: "Six washes alike match every price cut within a week: the rivals already there fight away the profit. The other forces are weak here."
    }),

    // ----- the second group (nothing marked) -----
    squeeze({
      id: "q-apps", source: "Downtown Business Journal · Trade report", headline: "Takeout restaurants and the delivery apps",
      lines: [
        ["c1", "Most takeout orders in town now come through two delivery apps, which keep 30% of each order and decide which restaurants diners see first.", "buyers"],
        ["c2", "Food comes from several wholesalers that compete for each restaurant.", "suppliers", "Wholesalers compete for the restaurants, so suppliers have little hold."],
        ["c3", "Only one new takeout place opened this year.", "entrants", "Few newcomers open, so they are not the problem."]],
      settles: "c1", right: "buyers",
      reason: "Two apps bring most of the orders, keep 30% and decide who is seen: they are the buyer every restaurant depends on, and they take the money."
    }),
    squeeze({
      id: "q-laundry", source: "Westfield Business Report · Trade report", headline: "Coin laundries: steady decline",
      lines: [
        ["c1", "There are three coin laundries in town, and their prices have not changed in years.", "rivals", "Three laundries hold steady prices, so rivals are calm."],
        ["c2", "Most new apartments now come with their own washer and dryer.", "substitutes"],
        ["c3", "Machines and soap come from many suppliers.", "suppliers", "Supplies come from many suppliers, so they have little hold."]],
      settles: "c2", right: "substitutes",
      reason: "A washer in the apartment meets the same need without the laundry: that substitute takes the customers. The other forces are weak here."
    }),
    squeeze({
      id: "q-dogs", source: "Northside Business Weekly · Trade report", headline: "Dog walking: more dogs, more walkers",
      lines: [
        ["c1", "Demand for dog walking in the city grew 20% last year.", null, "That is growth. It says nothing about who takes the profit."],
        ["c2", "Dog owners book through phone apps and can switch walkers with one tap.", "buyers", "Owners can switch, but the report shows walkers arriving faster than owners push."],
        ["c3", "Anyone with a phone can sign up to walk dogs; 300 new walkers joined this year, and the going rate fell from $25 to $18 a walk.", "entrants"]],
      settles: "c3", right: "entrants",
      claim: "Leo says: “Dog walking grew 20% last year, so it is a great business to be in.”",
      reason: "Anyone with a phone can start, 300 newcomers joined, and the rate fell from $25 to $18: newcomers take the money. The growth is what drew them."
    }),
    squeeze({
      id: "q-butter", source: "Mountain Business Journal · Trade report", headline: "Pastry shops squeezed on butter",
      lines: [
        ["c1", "Customers come back for the pastries and pay what the shops charge.", "buyers", "Customers pay what is asked, so buyers have little hold."],
        ["c2", "One dairy is the only one that delivers butter this far up the mountain, and it raised its price 40% this year.", "suppliers"],
        ["c3", "There are two pastry shops in the valley, and neither cuts prices.", "rivals", "Two shops that do not cut prices: rivals are calm."]],
      settles: "c2", right: "suppliers",
      reason: "The only dairy that delivers up there raised butter 40%, and the shops cannot buy elsewhere: the supplier takes the money."
    }),
    squeeze({
      id: "q-nails", source: "Midtown Business Weekly · Trade report", headline: "Nail salons: price war on Second Avenue",
      lines: [
        ["c1", "Fifteen nail salons now stand within two blocks, with the same menu.", "rivals"],
        ["c2", "Polish and supplies come from many wholesalers.", "suppliers", "Supplies come from many wholesalers, so they have little hold."],
        ["c3", "Every month one salon cuts its price, and the others match it.", "rivals"]],
      settles: "c3", right: "rivals",
      reason: "Fifteen salons with the same menu match every cut: the rivals already there fight away the profit."
    }),

    // ----- the check -----
    squeeze({
      id: "k-buses", source: "County Business Journal · Trade report", headline: "School bus companies bid again",
      lines: [
        ["c1", "Buses and drivers are easy to find in the county.", "suppliers", "Buses and drivers are easy to find, so suppliers have little hold."],
        ["c2", "One school district buys all the bus service in the county; every three years it takes bids and picks the lowest.", "buyers"],
        ["c3", "No new bus company has started here in years.", "entrants", "No newcomers start, so they are not the problem."]],
      settles: "c2", right: "buyers",
      reason: "One district buys all the service and takes the lowest bid: the buyer takes the money. The other forces are weak here."
    }),
    squeeze({
      id: "k-solar", source: "Sunbelt Business Report · Trade report", headline: "Solar installers: the fastest-growing trade in the state",
      lines: [
        ["c1", "Home solar installs in the state grew 40% last year.", null, "That is growth. It says nothing about who takes the profit."],
        ["c2", "Panels come from many makers, and their prices keep falling.", "suppliers", "Panels come from many makers, so suppliers have little hold."],
        ["c3", "Anyone with an electrician’s license and a van can start, and nine new installers opened this year, each bidding low to win jobs.", "entrants"]],
      settles: "c3", right: "entrants",
      claim: "Rosa says: “Solar grew 40% last year, so it is a great business to be in.”",
      reason: "A license and a van are enough to start, and nine newcomers bid low: newcomers take the money. The growth is what drew them."
    }),
    squeeze({
      id: "k-travel", source: "Harbor Business News · Trade report", headline: "Travel agents: fewer bookings",
      lines: [
        ["c1", "Travelers now book their own flights and hotels online in a few minutes.", "substitutes"],
        ["c2", "There are only three travel agents left in town.", "rivals", "Only three are left, so rivals are not the problem."],
        ["c3", "No new agency has opened in ten years.", "entrants", "No newcomers open, so they are not the problem."]],
      settles: "c1", right: "substitutes",
      reason: "Booking online meets the same need without an agent: the substitute takes the customers. The other forces are weak here."
    }),
    squeeze({
      id: "k-dealers", source: "State Business Journal · Trade report", headline: "Car dealers and the maker",
      lines: [
        ["c1", "A dealer can sell only one maker’s brand, and the maker decides how many cars each dealer gets and what the dealer pays for them.", "suppliers"],
        ["c2", "Buyers shop around, but each dealer is the only one for its brand in its town.", "buyers", "Each dealer is the only one for its brand nearby, so buyers have limited hold."],
        ["c3", "A new dealer needs the maker’s say-so, and none has opened in years.", "entrants", "No newcomers open, so they are not the problem."]],
      settles: "c1", right: "suppliers",
      reason: "The maker decides how many cars a dealer gets and what it pays, and the dealer can sell no other brand: the supplier takes the money."
    }),
    squeeze({
      id: "k-gas", source: "Interstate Business Weekly · Trade report", headline: "Gas stations at Exit 12",
      lines: [
        ["c1", "Fuel comes from several wholesalers.", "suppliers", "Several wholesalers compete, so suppliers have little hold."],
        ["c2", "Five gas stations stand at Exit 12, selling the same fuel, with prices on big signs.", "rivals"],
        ["c3", "When one lowers its price, the others match it within the hour.", "rivals"]],
      settles: "c3", right: "rivals",
      reason: "Five stations with the same fuel match every cut within the hour: the rivals already there fight away the profit."
    }),
    squeeze({
      id: "k-boxes", source: "River Valley Business Journal · Trade report", headline: "Box makers and the supermarket chain",
      lines: [
        ["c1", "Cardboard comes from several mills.", "suppliers", "Several mills compete, so suppliers have little hold."],
        ["c2", "One supermarket chain buys about 80% of the boxes the valley’s box makers make, and pushes each year for a lower price.", "buyers"],
        ["c3", "A new box maker needs costly machines, and none has opened in years.", "entrants", "No newcomers open, so they are not the problem."]],
      settles: "c2", right: "buyers",
      reason: "One chain buys 80% of the boxes and pushes the price down each year: the buyer takes the money."
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
