// Wealth Preservation, Unit One: drill cases, second stage (the key's first question on mixed cases: clean, then varied). The
// misleading cases of this stage are in u1.cases-drill-3.js. Field guide: see u1.cases-drill-1.js.

FC.cases('wealth', 'u1', [

  { id: 'd-r-fund-fees', use: 'drill', tier: 'clean', setting: 'work', topic: 'a fund charge and an adviser’s charge, added up',
    text: "Imran, 52, has $320,000 in his 401(k). The funds in it cost 1.1% a year and his adviser takes a further 0.8%, which together come to $6,080 every year.",
    route: { D1: ['erosion'] },
    cues: { D1: 'The funds in it cost 1.1% a year and his adviser takes a further 0.8%, which together come to $6,080 every year' },
    reason: { D1: 'Two fees come out of the money every year and add up: {cue:D1}. Nothing is said about a fall in prices or a bill on a date.' },
    not: { outcome: 'timing', why: 'Nothing says prices fell or money is needed on a date. The fees come out every year whatever prices do.' } },

  { id: 'd-r-old-will', use: 'drill', tier: 'clean', setting: 'family', topic: 'an IRA form that names a late husband',
    text: "Beatrix, 69, has an IRA whose beneficiary form names her late husband and nobody else. He died in 2018, and she has never filled out a new one. The IRA is worth $210,000.",
    route: { D1: ['handover'] },
    cues: { D1: ['names her late husband and nobody else', 'she has never filled out a new one'] },
    reason: { D1: 'The form is out of date: {cue:D1}. A man who has died cannot receive the IRA.' },
    not: { outcome: 'erosion', why: 'Nothing comes out of the IRA every year. What is at stake is who gets the money, once, when she dies.' } },

  { id: 'd-r-rental-flat', use: 'drill', tier: 'clean', setting: 'property', topic: 'an apartment building that is most of the money',
    text: "Sven, 55, has $600,000. $480,000 of it is a single building of four apartments that he rents out, and the rest is in a savings account. A property manager runs the building.",
    route: { D1: ['shock'] },
    cues: { D1: '$480,000 of it is a single building of four apartments that he rents out' },
    reason: { D1: 'One building is most of {t:pot}: {cue:D1}. That is 80%, so a quarter off its value would cost $120,000, a fifth of everything.' },
    not: { outcome: 'timing', why: 'No general fall in prices, bill on a date or living costs appear. What the story shows is how much rests on one building.' } },

  { id: 'd-r-tuition', use: 'drill', tier: 'clean', setting: 'family', topic: 'four years of tuition, paid from falling funds',
    text: "Priscilla's son starts college in September. Tuition is $12,000 a year for four years, paid at the start of each year, and her savings of $48,000 are all in funds of shares. Prices have fallen by 15% since the spring.",
    route: { D1: ['timing'] },
    cues: { D1: ['Tuition is $12,000 a year for four years, paid at the start of each year', 'her savings of $48,000 are all in funds of shares'] },
    reason: { D1: 'Bills fall due on set dates, with the money for them in {t:fund} that can fall: {cue:D1}. A fall of 15% takes $7,200 off $48,000.' },
    not: { outcome: 'erosion', why: 'The tuition is money going out, but what matters is the dates it falls due and what the money for it is held in. It is not a sum that leaves whatever prices do.' } },

  { id: 'd-r-mixdrift', use: 'drill', tier: 'varied', setting: 'work', topic: 'a split that moved before retirement',
    text: "Magda, 61, planned to keep 40% of her money in shares and 60% in bonds, because she stops work in two years. After a long run of rises, $350,000 of her $500,000 is in shares, which is 70%.",
    route: { D1: ['timing'] },
    cues: { D1: ['planned to keep 40% of her money in shares and 60% in bonds', '$350,000 of her $500,000 is in shares, which is 70%'] },
    reason: { D1: 'The story shows {t:mix} drifting well away from its plan: {cue:D1}. A 30% fall in shares would now take $105,000, which is 21% of everything, where her plan allowed 12%.' },
    not: { outcome: 'none', why: 'A story with nothing to name shows no drifted plan and no money needed soon. Here she stops work in two years and her split is far from the one she chose.' } },

  { id: 'd-r-fine-papers', use: 'drill', tier: 'varied', setting: 'family', topic: 'wills and forms renewed in January',
    text: "Tess, 66, and her husband renewed their wills and the beneficiary forms for their 401(k)s in January. Each names the other, then their daughter. The power of attorney was signed at the same time. Their home and savings come to $320,000.",
    route: { D1: ['handover'] },
    cues: { D1: ['renewed their wills and the beneficiary forms for their 401(k)s in January', 'The power of attorney was signed at the same time'] },
    reason: { D1: 'This is about what happens to the money when its owners die or cannot act: {cue:D1}. Everything is in order, but that does not change the answer.' },
    not: { outcome: 'none', why: '{a:D1.none} is for a story that says nothing about a death, a will or an illness. This one is about all three, even though nothing is wrong.' } },

  { id: 'd-r-spread-pot', use: 'drill', tier: 'varied', setting: 'property', topic: 'money spread over four places',
    text: "Wendell, 60, has $460,000 spread over a 401(k) fund of thousands of companies ($150,000), savings ($120,000), a second fund of bonds ($100,000) and the small condo he lives in ($90,000), with nothing owed. He has a steady income, and does not expect to need any of the money until he is 67.",
    route: { D1: ['none'] },
    cues: { D1: ['does not expect to need any of the money until he is 67', 'with nothing owed'] },
    reason: { D1: 'The money is spread over four places, with nothing owed and nothing needed for seven years: {cue:D1}. No one thing is most of it, and nothing suggests {t:claim} against him.' },
    not: { outcome: 'shock', why: 'The 401(k) is the biggest piece, but it is spread over thousands of companies and is only 33% of the total. No one thing is most of it.' } }
]);
