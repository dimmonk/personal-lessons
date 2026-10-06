// Wealth Preservation, Unit One: drill cases, first stage (the key's first question on its own, on clean cases). Every drill case
// is new: none of them appears in a card. Each carries the words that decide the first question (cues.D1), the reason for its answer
// (reason.D1), and not: the nearest wrong family and why it fails here.
// These cases, with the route-stage cases and the return cases, are the bank that later units draw their earlier-unit items from.

FC.cases('wealth', 'u1', [

  { id: 'd-p-adviser', use: 'drill', tier: 'clean', setting: 'retirement', topic: 'two yearly charges on an IRA',
    text: "Rosa, 47, has $250,000 in an IRA. Each year her adviser's firm takes 1.3% of it, $3,250, and the funds she holds take another 0.9%.",
    route: { D1: ['erosion'] },
    cues: { D1: ["Each year her adviser's firm takes 1.3% of it, $3,250", 'the funds she holds take another 0.9%'] },
    reason: { D1: 'Two charges come out of her money every year: {cue:D1}. Nothing is said about a fall in prices, a sale or a death.' },
    not: { outcome: 'timing', why: 'The case does not say that prices fell or that anything has to be sold. It is about sums that come out every year, whatever prices do.' } },

  { id: 'd-p-newjob', use: 'drill', tier: 'clean', setting: 'work', topic: 'a first 401(k) at a new job',
    text: "Kofi, 29, started a new job in March and signed up for the company’s 401(k). $200 a month goes in, and he has not looked at the statement. He will not touch the money until he is in his sixties.",
    route: { D1: ['none'] },
    cues: { D1: ['$200 a month goes in', 'He will not touch the money until he is in his sixties'] },
    reason: { D1: 'The case shows money being put away for decades: {cue:D1}. Nothing in it comes out every year, no one thing is most of it, and no bill or death is mentioned. There are no words to point to for any of the four, so there is nothing to name.' },
    not: { outcome: 'erosion', why: 'The statement may well show a charge, but the case does not say so, and there are no words to point to.' } },

  { id: 'd-p-will', use: 'drill', tier: 'clean', setting: 'family', topic: 'a will that names a brother who has died',
    text: "Arvid, 76, has a will that he wrote in 1998. It leaves everything to his brother, who died in 2019. Arvid has two grown children.",
    route: { D1: ['handover'] },
    cues: { D1: 'It leaves everything to his brother, who died in 2019' },
    reason: { D1: 'The case is about who gets the money when Arvid dies, and the paper is out of date: {cue:D1}. A brother who has died cannot receive it, and the children are not named.' },
    not: { outcome: 'erosion', why: 'Nothing comes out of his money every year in the case. What it raises is who gets the money, once, when he dies.' } },

  { id: 'd-p-sellmonthly', use: 'drill', tier: 'clean', setting: 'retirement', topic: 'monthly sales to live on, after a fall',
    text: "Hilda, 71, lives on shares from her $300,000: she sells $1,500 of them each month, with nothing in cash. Last October prices fell by 28%.",
    route: { D1: ['timing'] },
    cues: { D1: ['she sells $1,500 of them each month, with nothing in cash', 'prices fell by 28%'] },
    reason: { D1: 'The case shows bills met by selling holdings whose prices swing, with nothing set aside, in a falling market: {cue:D1}. Each sale takes place at a lower price than before.' },
    not: { outcome: 'erosion', why: 'The case does not say that the sum is too big for her money, or that it was fixed when her money was bigger. It says that prices fell while she must keep selling.' } },

  { id: 'd-p-startup', use: 'drill', tier: 'clean', setting: 'business', topic: 'a sale paid for in the buyer’s shares',
    text: "Tomasz sold his software firm and kept $700,000, but $560,000 of it is still shares in the buyer's company. The other $140,000 is in the bank.",
    route: { D1: ['shock'] },
    cues: { D1: "$560,000 of it is still shares in the buyer's company" },
    reason: { D1: 'One thing is most of what he has: {cue:D1}. $560,000 out of $700,000 is 80%, and the price of shares in one company can move a long way in either direction.' },
    not: { outcome: 'timing', why: 'No fall in prices and no bill on a date are in the case. What it raises is that most of what he has rests on one company.' } }
]);
