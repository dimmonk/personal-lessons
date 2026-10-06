// Wealth Preservation, Unit One: fresh cases held back for later days (lesson standard E9, V44), part one: erosion, timing, shock.
// Four for each family: one for each scheduled return (an action subject adds the fourth, at about twelve weeks). A family that is
// due comes back as a case the learner has not seen, beside a case of the family they most often take it for. These are also part of
// the bank that later units draw their earlier-unit items from. Field guide: see u1.cases-drill-1.js.

FC.cases('wealth', 'u1', [

  /* ---------- Something taken out of it every year ---------- */
  { id: 'x-erosion-1', use: 'return', tier: 'clean', setting: 'work', topic: 'an online investing service’s charge on top of the funds’ charge',
    text: "Joyce, 58, holds $90,000 through an online investing service. It takes 0.45% a year for managing it, on top of 0.6% for the funds, which together is $945 every year.",
    route: { D1: ['erosion'] },
    cues: { D1: 'It takes 0.45% a year for managing it, on top of 0.6% for the funds' },
    reason: { D1: 'Two charges come out of her money every year: {cue:D1}. Together they are 1.05% of $90,000, which is $945.' },
    not: { outcome: 'none', why: 'A case with nothing to name raises no charge, tax or sum spent. This one names two charges and gives their size.' },
    wouldChange: 'If the service took nothing, and the case said only that Joyce checks the balance once a year and will use the money at 67, it would be {a:D1.none}.' },

  { id: 'x-erosion-2', use: 'return', tier: 'varied', setting: 'retirement', topic: 'a yearly sum of five percent to live on',
    text: "Moses, 67, retired three years ago with $450,000. Each year he takes out $22,500 to spend, and each year he adds up what is left. The balance is still about $450,000, because his funds have grown by about as much as he has spent.",
    route: { D1: ['erosion'] },
    cues: { D1: 'Each year he takes out $22,500 to spend' },
    reason: { D1: 'A sum comes out of the money every year, to spend: {cue:D1}. $22,500 is 5% of $450,000. The balance is not falling, and the case is still about something that comes out every year.' },
    not: { outcome: 'timing', why: 'The case does not say that prices have fallen or that a bill is due on a date. What it shows is a sum that comes out every year.' },
    wouldChange: 'If the case said only that Moses has $450,000 that he will not need for decades, it would be {a:D1.none}.' },

  { id: 'x-erosion-3', use: 'return', tier: 'varied', setting: 'home', topic: 'tax on the payouts of shares, every year',
    text: "Alana, 36, holds $80,000 of shares in an ordinary brokerage account. They pay her $2,800 a year in payouts, and every year she pays $420 tax on those payouts.",
    route: { D1: ['erosion'] },
    cues: { D1: 'every year she pays $420 tax on those payouts' },
    reason: { D1: 'A tax bill comes out of what the investments pay out, every year: {cue:D1}. $420 is 15% of $2,800.' },
    not: { outcome: 'none', why: 'The case is not silent about what comes out of her money. It names a tax bill and gives the amount.' },
    wouldChange: 'If the shares paid nothing out and the case said only that Alana holds $80,000 she will not need for thirty years, it would be {a:D1.none}.' },

  { id: 'x-erosion-4', use: 'return', tier: 'misleading', setting: 'retirement', topic: 'a fixed sum, and the market blamed', echo: 'w-couple-fall',
    also: ['timing'],
    text: "Pavel, 69, set himself $30,000 a year when his money was $500,000, which was 6%. Prices have since fallen, and he now has $340,000. He still takes $30,000 a year, which is now 8.8% of what is left, and he says the market is to blame.",
    route: { D1: ['erosion'] },
    cues: { D1: 'He still takes $30,000 a year, which is now 8.8% of what is left' },
    reason: { D1: 'A fixed sum comes out of money that has shrunk: {cue:D1}. The fall in prices is in the case and it explains the shrinking, but the case is about the sum. When a case shows both, the answer is {a:D1.erosion}.' },
    not: { outcome: 'timing', why: 'The fall is in the case, so Pavel’s own explanation points to prices. But the sum was set for money that no longer exists, and that is what the case raises.' },
    wouldChange: 'If the sum he took out had always been a fair share of whatever his money was worth, and the only fact were that prices fell, it would be {a:D1.timing}.' },

  /* ---------- A fall in prices it is not ready for ---------- */
  { id: 'x-timing-1', use: 'return', tier: 'clean', setting: 'family', topic: 'a wedding paid for from a fund',
    text: "Hannah's wedding is on June 14 and will cost $30,000, which she has put in a fund of shares. In March the fund fell by 12%.",
    route: { D1: ['timing'] },
    cues: { D1: ['will cost $30,000, which she has put in a fund of shares', 'In March the fund fell by 12%'] },
    reason: { D1: 'The case shows a bill on a date, with the money for it in funds that can fall: {cue:D1}. A fall of 12% takes $3,600 off $30,000.' },
    not: { outcome: 'erosion', why: 'The wedding is money going out, but the case is about the day it falls due and what the money for it is held in, not about a sum that comes out every year.' },
    wouldChange: 'If the case said only that Hannah has $30,000 that she will not need for fifteen years, it would be {a:D1.none}.' },

  { id: 'x-timing-2', use: 'return', tier: 'varied', setting: 'retirement', topic: 'half in shares at fifty, and far more now',
    text: "Barry, 62, chose to keep half of his money in shares when he was 50. Now $300,000 of his $360,000 is in shares, which is 83%, and he stops work in eighteen months.",
    route: { D1: ['timing'] },
    cues: { D1: ['chose to keep half of his money in shares when he was 50', '$300,000 of his $360,000 is in shares, which is 83%'] },
    reason: { D1: 'The case shows a split that has moved well away from the one he chose: {cue:D1}. A fall of 30% in shares would now take $90,000, which is 25% of everything, where his plan allowed 15%.' },
    not: { outcome: 'none', why: 'A case with nothing to name shows no plan that has drifted. Here the split is far from the plan, and he needs the money in eighteen months.' },
    wouldChange: 'If the case said nothing about his plan, only that Barry has $360,000 that he will not need for twenty years, it would be {a:D1.none}.' },

  { id: 'x-timing-3', use: 'return', tier: 'varied', setting: 'business', topic: 'a shop sold, and the money in falling funds',
    text: "Leona, 54, sold her shop and lives on the $280,000 she got, which is all in funds of shares. She sells $2,200 a month for her bills and has no cash set aside. Prices have fallen by 17% in the last two months.",
    route: { D1: ['timing'] },
    cues: { D1: ['She sells $2,200 a month for her bills and has no cash set aside', 'Prices have fallen by 17% in the last two months'] },
    reason: { D1: 'The case shows bills paid by selling holdings that can fall, with nothing set aside: {cue:D1}. Each sale now takes place at a price 17% lower than before.' },
    not: { outcome: 'erosion', why: 'No sum is described as too large for her money, or as fixed when her money was bigger. The case is about having to sell in a fall.' },
    wouldChange: 'If her bills were paid from a salary and the $280,000 were being kept untouched for twenty years, it would be {a:D1.none}.' },

  { id: 'x-timing-4', use: 'return', tier: 'misleading', setting: 'work', topic: 'a firm’s panic, and a down payment to make', echo: 'w-employer',
    text: "Everyone at Quentin's firm is panicking because the company's own price has fallen by half. Quentin, 45, owns only $5,000 of its shares. His money is $400,000 in a fund spread over thousands of companies, and he needs $40,000 for a down payment on a house on June 1, three months away, and the fund has dropped by 20%.",
    route: { D1: ['timing'] },
    cues: { D1: ['he needs $40,000 for a down payment on a house on June 1, three months away', 'the fund has dropped by 20%'] },
    reason: { D1: 'The panic about one company brings back a case about too much in one place. Read on: {cue:D1}. Only $5,000 of Quentin’s money is in that company, and no one thing is most of it. What a fall would catch is the $40,000 he must pay on a date, and it is held in funds that can fall.' },
    not: { outcome: 'shock', why: 'One company has fallen by half, but only $5,000 of $400,000 is in it, so the harm is not coming through one thing.' },
    wouldChange: 'If $340,000 of his $400,000 were shares in that company, and nothing were due on a date, it would be {a:D1.shock}.' },

  /* ---------- One thing most of it depends on ---------- */
  { id: 'x-shock-1', use: 'return', tier: 'clean', setting: 'business', topic: 'one hotel that is most of the money',
    text: "Dolores, 52, has $700,000. $550,000 of it is one hotel that she owns and runs, and the rest is in a savings account.",
    route: { D1: ['shock'] },
    cues: { D1: '$550,000 of it is one hotel that she owns and runs' },
    reason: { D1: 'One thing is most of what she has: {cue:D1}. $550,000 out of $700,000 is about 79%, and it is a business she runs.' },
    not: { outcome: 'timing', why: 'No fall in prices in general, bill on a date or living costs appear. What the case raises is how much rests on one hotel.' },
    wouldChange: 'If her money were spread over many things, and she owned no hotel, it would be {a:D1.none}.' },

  { id: 'x-shock-2', use: 'return', tier: 'varied', setting: 'business', topic: 'a roofer and a fall from a ladder',
    text: "Marek is a roofer. A man fell from a ladder at one of his jobs, and his lawyer is demanding $1,500,000. Marek's insurance pays up to $300,000, and he owns his house and his van in his own name, worth $500,000.",
    route: { D1: ['shock'] },
    cues: { D1: ["his lawyer is demanding $1,500,000", "Marek's insurance pays up to $300,000"] },
    reason: { D1: 'The case shows {t:claim} that could be far bigger than the insurance: {cue:D1}. $1,200,000 of it would be left over, which is more than everything he owns.' },
    not: { outcome: 'timing', why: 'No fall in prices and no bill on a date appear. What could take most of what he has is a single demand, all at once.' },
    wouldChange: 'If the demand were $200,000 and the insurance paid up to $300,000, there would be nothing left to find, and the case would raise none of the four.' },

  { id: 'x-shock-3', use: 'return', tier: 'varied', setting: 'home', topic: 'employer shares that cannot be sold yet',
    text: "Yasmin, 48, was given shares in her employer as part of her pay for ten years. They are now $330,000 of the $400,000 she owns, and the company's rules say she cannot sell them for another two years.",
    route: { D1: ['shock'] },
    cues: { D1: 'They are now $330,000 of the $400,000 she owns' },
    reason: { D1: 'One company is most of what she has: {cue:D1}. $330,000 out of $400,000 is about 83%. That she cannot yet sell them does not change what the case raises, which is how much rests on one company.' },
    not: { outcome: 'timing', why: 'No fall in prices in general and no bill on a date appear. What the case raises is one company that is most of what she has.' },
    wouldChange: 'If the shares were only $20,000 of her $400,000, with the rest spread out, it would be {a:D1.none}.' },

  { id: 'x-shock-4', use: 'return', tier: 'misleading', setting: 'work', topic: 'thirty years to wait, and one startup', echo: 'w-saver',
    text: "Gabriela, 31, will not need her money for thirty years. $280,000 of her $320,000 is shares in the startup where she works, and the startup has not yet made a profit.",
    route: { D1: ['shock'] },
    cues: { D1: '$280,000 of her $320,000 is shares in the startup where she works' },
    reason: { D1: 'A long wait before the money is needed brings back a case with nothing to name. Read on: {cue:D1}. $280,000 out of $320,000 is about 88%, in one company. Time to wait does not remove that risk: if the startup failed, most of what she has would go with it.' },
    not: { outcome: 'none', why: 'The long wait is true, and it is why a fall in prices would not catch her. But the fifth answer is for a case that raises none of the four, and this one raises one thing that is nearly all of her money.' },
    wouldChange: 'If her $320,000 were spread over many things, and the startup were only a small part of it, nothing would raise one of the four, and it would be {a:D1.none}.' }
]);
