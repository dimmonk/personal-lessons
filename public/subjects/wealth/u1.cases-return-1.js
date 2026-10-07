// Wealth Preservation, Unit One: fresh cases held back for later days (lesson standard E9, V44), part one: erosion, timing, shock.
// Two for each family: an action subject returns each name twice. A family that is due comes back as a case the learner has not
// seen, beside a case of the family they most often take it for. These are also part of the bank that later units draw their
// earlier-unit items from. Field guide: see u1.cases-drill-1.js.

FC.cases('wealth', 'u1', [

  { id: 'x-erosion-1', use: 'return', tier: 'clean', setting: 'work', topic: 'an online investing service’s charge on top of the funds’ charge',
    text: "Joyce, 58, holds $90,000 through an online investing service. It takes 0.45% a year for managing it, on top of 0.6% for the funds, which together is $945 every year.",
    route: { D1: ['erosion'] },
    cues: { D1: 'It takes 0.45% a year for managing it, on top of 0.6% for the funds' },
    reason: { D1: 'Two fees come out of her money every year: {cue:D1}. Together they are 1.05% of $90,000, which is $945.' },
    not: { outcome: 'none', why: 'A story with nothing to name raises no fee, tax or sum spent. This one names two fees and gives their size.' } },

  { id: 'x-erosion-3', use: 'return', tier: 'varied', setting: 'home', topic: 'tax on the payouts of shares, every year',
    text: "Alana, 36, holds $80,000 of shares in an ordinary brokerage account. They pay her $2,800 a year in payouts, and every year she pays $420 tax on those payouts.",
    route: { D1: ['erosion'] },
    cues: { D1: 'every year she pays $420 tax on those payouts' },
    reason: { D1: 'A tax bill comes out of what the investments pay out, every year: {cue:D1}. $420 is 15% of $2,800.' },
    not: { outcome: 'none', why: 'It is not silent about what comes out of her money. It names a tax bill and gives the amount.' } },

  { id: 'x-timing-1', use: 'return', tier: 'clean', setting: 'family', topic: 'a wedding paid for from a fund',
    text: "Hannah's wedding is on June 14 and will cost $30,000, which she has put in a fund of shares. In March the fund fell by 12%.",
    route: { D1: ['timing'] },
    cues: { D1: ['will cost $30,000, which she has put in a fund of shares', 'In March the fund fell by 12%'] },
    reason: { D1: 'The wedding bill is due on a date, with the money for it in {t:fund} that can fall: {cue:D1}. A fall of 12% takes $3,600 off $30,000.' },
    not: { outcome: 'erosion', why: 'The wedding is money going out, but what matters is the day it falls due and what the money for it is held in. It is not a sum that comes out every year.' } },

  { id: 'x-timing-2', use: 'return', tier: 'varied', setting: 'retirement', topic: 'half in shares at fifty, and far more now',
    text: "Barry, 62, chose to keep half of his money in shares when he was 50. Now $300,000 of his $360,000 is in shares, which is 83%, and he stops work in eighteen months.",
    route: { D1: ['timing'] },
    cues: { D1: ['chose to keep half of his money in shares when he was 50', '$300,000 of his $360,000 is in shares, which is 83%'] },
    reason: { D1: 'The story shows {t:mix} drifting far from the one he chose: {cue:D1}. A 30% fall in shares would now take $90,000, which is 25% of everything, where his plan allowed 15%.' },
    not: { outcome: 'none', why: 'A story with nothing to name shows no drifted plan. Here the split is far from the plan, and he needs the money in eighteen months.' } },

  { id: 'x-shock-1', use: 'return', tier: 'clean', setting: 'business', topic: 'one hotel that is most of the money',
    text: "Dolores, 52, has $700,000. $550,000 of it is one hotel that she owns and runs, and the rest is in a savings account.",
    route: { D1: ['shock'] },
    cues: { D1: '$550,000 of it is one hotel that she owns and runs' },
    reason: { D1: 'One thing is most of what she has: {cue:D1}. That is about 79% of $700,000, and it is a business she runs.' },
    not: { outcome: 'timing', why: 'No general fall in prices, bill on a date or living costs appear. What the story shows is how much rests on one hotel.' } },

  { id: 'x-shock-2', use: 'return', tier: 'varied', setting: 'business', topic: 'a roofer and a fall from a ladder',
    text: "Marek is a roofer. A man fell from a ladder at one of his jobs, and his lawyer is demanding $1,500,000. Marek's insurance pays up to $300,000, and he owns his house and his van in his own name, worth $500,000.",
    route: { D1: ['shock'] },
    cues: { D1: ["his lawyer is demanding $1,500,000", "Marek's insurance pays up to $300,000"] },
    reason: { D1: 'The story shows {t:claim} that could be far bigger than the insurance: {cue:D1}. $1,200,000 would be left over, more than everything he owns.' },
    not: { outcome: 'timing', why: 'No fall in prices and no bill on a date appear. What could take most of what he has is one demand, all at once.' } }
]);
