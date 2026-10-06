// Wealth Preservation, Unit Three: drill cases for the first two stages. None of these appears in a card.
// Stage one: the key's answers are shown and the learner gives the name. Stage two: this unit's question alone, on a new case.
// reason[STEP] is the reason tied to the marked words; it is shown after the answer, decisive sentence first. not names the most
// tempting wrong name for this case and says why it fails. Every case carries its full route; a case asked only this unit's question
// needs marked words and a reason for that question alone.

FC.cases('wealth', 'u3', [

  /* ---------- Stage one: the answers are shown, the learner gives the name ---------- */
  { id: 'w3-n-div', use: 'drill', tier: 'clean', setting: 'home', topic: 'energy shares held for a brother',
    text: "Marisol, 60, owns 3,000 shares in the energy company where her brother works, worth $350,000, which is most of the $430,000 she has. She has never worked there, and her broker says she may sell any or all of them whenever she likes.",
    outcome: 'diversify', route: { D1: ['shock'], S1: ['freeheld'] },
    cues: { S1: ['She has never worked there', 'her broker says she may sell any or all of them whenever she likes'] },
    reason: { S1: 'Marisol is free to sell and takes no part in running the company: {cue:S1}. $350,000 out of $430,000 is 81%. That is how large {t:holding} can be.' },
    not: { outcome: 'hedge', why: 'A rule that stopped her selling would make it the answer for shares that cannot be sold yet. Her broker says she may sell whenever she likes, so nothing stands in the way.' } },

  { id: 'w3-n-hdg', use: 'drill', tier: 'clean', setting: 'work', topic: 'game studio signing shares',
    text: "Aaron, 33, was given shares in the game studio where he works as part of a signing deal. They are worth $280,000 of the $310,000 he has. The studio’s rules say he may not sell any of them for the next four years.",
    outcome: 'hedge', route: { D1: ['shock'], S1: ['blocked'] },
    cues: { S1: 'The studio’s rules say he may not sell any of them for the next four years' },
    reason: { S1: 'A rule stops him selling for a set time: {cue:S1}. $280,000 out of $310,000 is 90%, all in one company.' },
    not: { outcome: 'diversify', why: 'Shares that are most of what a person has are often ones they are free to sell. Here the studio’s rule stops him, so a schedule of sales cannot begin.' } },

  { id: 'w3-n-sup', use: 'drill', tier: 'clean', setting: 'business', topic: 'a courier firm and a van loan',
    text: "Olu, 50, runs the courier firm he started, worth $700,000, which is most of the $760,000 he owns. His other $60,000 is savings, which would cover the household’s $40,000 a year for about eighteen months. The firm’s vans were bought with a loan, and the bank holds his shares in the firm as security.",
    outcome: 'supports', route: { D1: ['shock'], S1: ['ownrun'] },
    cues: { S1: ['His other $60,000 is savings, which would cover the household’s $40,000 a year for about eighteen months', 'the bank holds his shares in the firm as security'] },
    reason: { S1: 'Olu runs a business that is most of what he owns, and the case shows gaps round it: {cue:S1}. $60,000 ÷ $40,000 is a year and a half, which is not several years, and the loan gives a bank the right to take his shares.' },
    not: { outcome: 'safe', why: 'The same business could be safe if everything round it were in place. Here the savings are short and the bank holds the shares, so something is missing.' } },

  { id: 'w3-n-saf-biz', use: 'drill', tier: 'clean', setting: 'work', topic: 'an engineering firm with reserves',
    text: "Pilar, 55, runs the engineering firm she built, worth $950,000, which is most of the $1,400,000 she owns. $300,000 is in funds that hold thousands of companies and $150,000 is in savings, which covers her household’s $45,000 a year for more than three years. Nothing is borrowed against her shares in the firm.",
    outcome: 'safe', route: { D1: ['shock'], S1: ['madesafe'] },
    cues: { S1: ['$300,000 is in funds that hold thousands of companies and $150,000 is in savings', 'Nothing is borrowed against her shares in the firm'] },
    reason: { S1: 'Pilar runs a business that is most of what she owns, and the case shows all three things in place: {cue:S1}. $150,000 ÷ $45,000 is more than three years, the rest is spread, and nothing is borrowed against her shares.' },
    not: { outcome: 'supports', why: 'She runs a business that is most of what she owns, which is why the case looks like a business with a gap. But nothing is missing, so there is no gap to name.' } },

  { id: 'w3-n-ins', use: 'drill', tier: 'clean', setting: 'business', topic: 'a riding school and a rider’s injury',
    text: "Colm, 44, owns a small riding school on land worth $600,000, with $150,000 in savings. His insurance pays up to $300,000 if a rider is hurt, and a lawyer says a rider who can never walk again could be awarded $4,000,000.",
    outcome: 'insure', route: { D1: ['shock'], S1: ['bigclaim'] },
    cues: { S1: ['His insurance pays up to $300,000 if a rider is hurt', 'a rider who can never walk again could be awarded $4,000,000'] },
    reason: { S1: 'The riding school could bring {t:claim}, and the insurance has a limit: {cue:S1}. $4,000,000 less $300,000 leaves $3,700,000, far more than the $750,000 Colm owns.' },
    not: { outcome: 'entity', why: 'The case does not say that several properties are held in one name. It shows one business and a gap between {t:claim} and its coverage.' } },

  { id: 'w3-n-ent', use: 'drill', tier: 'clean', setting: 'property', topic: 'three stores and a home in one name',
    text: "Nadia, 52, owns three stores that she rents to different businesses, and the house she lives in, worth $1,150,000 in all, with every one of them in her own name. A customer who is badly hurt in any of the stores could bring a claim against her.",
    outcome: 'entity', route: { D1: ['shock'], S1: ['onename'] },
    cues: { S1: ['with every one of them in her own name', 'A customer who is badly hurt in any of the stores could bring a claim against her'] },
    reason: { S1: 'Several properties could each bring {t:claim}, and they are all in one name: {cue:S1}. A demand on one store could reach the other two and her home.' },
    not: { outcome: 'insure', why: 'The case does not say what any insurance pays, or how big {t:claim} could be. It shows only how the properties are held.' } },

  { id: 'w3-n-del', use: 'drill', tier: 'clean', setting: 'work', topic: 'shares bought on a brokerage’s top-up rule',
    text: "Gwen, 49, owns shares worth $400,000, bought partly with a $260,000 margin loan from her brokerage. The brokerage can ask her to pay in more money, within two days, whenever the loan is more than 70% of the shares’ value; at the moment it is 65%.",
    outcome: 'deleverage', route: { D1: ['shock'], S1: ['riskyloan'] },
    cues: { S1: 'The brokerage can ask her to pay in more money, within two days, whenever the loan is more than 70% of the shares’ value' },
    reason: { S1: 'The brokerage’s power is in the contract: {cue:S1}. At 65% the loan is five points from the limit, and a fall of about 7% in the shares would take it over ($260,000 ÷ 0.7 is about $371,000).' },
    not: { outcome: 'safe', why: 'A safe loan could not be topped up at the lender’s request. This one can, and the margin before the brokerage acts is small.' } },

  { id: 'w3-n-saf-loan', use: 'drill', tier: 'clean', setting: 'home', topic: 'a house with a small ten-year fixed loan',
    text: "Idris, 38, owns a house worth $350,000, which is most of what he owns, and owes $120,000 on it. The rate is fixed for ten years, and the bank cannot demand the money back as long as he pays the $700 due each month. His pay after tax is $3,800 a month.",
    outcome: 'safe', route: { D1: ['shock'], S1: ['madesafe'] },
    cues: { S1: ['The rate is fixed for ten years', 'the bank cannot demand the money back as long as he pays the $700 due each month'] },
    reason: { S1: 'The loan is small against the house ($120,000 ÷ $350,000 is 34%), and its terms leave the bank no power: {cue:S1}.' },
    not: { outcome: 'deleverage', why: 'There is a loan against the thing that is most of what he owns, which is why it can look like a loan the lender could use. But the rate cannot jump and the bank cannot demand the money back.' } },

  /* ---------- Stage two: the key's question alone, on a new case ---------- */
  { id: 'w3-p-ent', use: 'drill', tier: 'clean', setting: 'family', topic: 'three rented farms in one name',
    text: "Sandra, 57, owns three farms that she rents to tenant farmers, each worth about $300,000, and the house she lives in, worth $500,000. All four are in her own name. A farm worker who is badly hurt on any of the farms could bring a claim against her.",
    outcome: 'entity', route: { D1: ['shock'], S1: ['onename'] },
    cues: { S1: ['All four are in her own name', 'A farm worker who is badly hurt on any of the farms could bring a claim against her'] },
    reason: { S1: 'Several properties could each bring {t:claim}, and they are all held in her own name: {cue:S1}. A demand on one farm could reach the other two farms and her home, $1,400,000 in all.' },
    not: { outcome: 'safe', why: 'The case does not say that any farm is held in a company of its own. All four are in one name, so {t:claim} on one is not stopped at its edge.' } },

  { id: 'w3-p-saf', use: 'drill', tier: 'varied', setting: 'property', topic: 'five condos in five companies',
    text: "Ye-jin, 61, owns five rental condos, each held in a separate LLC that she owns, and her own home, which is in her own name. Each condo is worth $240,000. A tenant who is hurt in one condo can claim only against the LLC that owns it.",
    outcome: 'safe', route: { D1: ['shock'], S1: ['madesafe'] },
    cues: { S1: ['each held in a separate LLC that she owns', 'A tenant who is hurt in one condo can claim only against the LLC that owns it'] },
    reason: { S1: 'Several condos could each bring {t:claim}, and the case shows each in {t:company} of its own, already held apart: {cue:S1}. A demand on one condo could reach $240,000 and no more, not the other four condos or her home.' },
    not: { outcome: 'entity', why: 'Five condos could bring claims, which is why the case can look like several properties in one name. The case says each is in a company of its own, so {t:claim} on one stops there.' } },

  { id: 'w3-p-hdg', use: 'drill', tier: 'varied', setting: 'business', topic: 'payment for a shop in the buyer’s shares',
    text: "Lucas, 36, sold his shop to a larger chain and was paid in the chain’s shares, now worth $260,000, which is most of what he has. The sale contract says he may not sell any of them for three years.",
    outcome: 'hedge', route: { D1: ['shock'], S1: ['blocked'] },
    cues: { S1: 'The sale contract says he may not sell any of them for three years' },
    reason: { S1: 'One company’s shares are most of what he has, and a contract stops him selling them for a set time: {cue:S1}.' },
    not: { outcome: 'diversify', why: 'He is not running the chain, and the shares are most of what he has, but he is not free to sell. A schedule of sales cannot start until the three years are over.' } },

  { id: 'w3-p-sup', use: 'drill', tier: 'varied', setting: 'health', topic: 'a dental practice and a condo nearby',
    text: "Dr. Okafor, 59, owns and runs a dental practice worth $780,000, which is most of the $900,000 she owns. Her savings are $30,000, and her household spends $60,000 a year. Everything else she owns is a $90,000 share in a condo in the same town as the practice.",
    outcome: 'supports', route: { D1: ['shock'], S1: ['ownrun'] },
    cues: { S1: ['Her savings are $30,000, and her household spends $60,000 a year', 'Everything else she owns is a $90,000 share in a condo in the same town as the practice'] },
    reason: { S1: 'She runs a business that is most of what she owns, and at least one thing is missing round it: {cue:S1}. $30,000 covers six months of $60,000 a year, and nothing is spread across many investments.' },
    not: { outcome: 'safe', why: 'The business is the same shape as a safe one, but the savings are six months and not years, and the rest is one condo nearby.' } }
]);
