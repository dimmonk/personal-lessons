// Wealth Preservation, Unit One: cases shown inside cards, part three (the fifth family and its look-alike pairs, the worked case),
// then the six BASELINE cases of lesson standard E21.
// A case used by a worked card carries no reason of its own: the card's steps hold it, so there is one copy.
// The baseline cases (use 'baseline') are asked once, before the unit, as "real, or is something wrong?", and are listed in
// subject.baseline. They are in no card and no drill. Where a baseline case is a sound case that belongs to a branch of the key
// (a charge worth paying, a bill already saved for), it carries its outcome and its full route, so that the check can tell from the
// key's own `legit` mark which cases are sound. The other baseline cases carry the gate answer only.
// Field guide: see u1.cases-teach-1.js.

FC.cases('wealth', 'u1', [

  { id: 'w-saver', use: 'teach', tier: 'clean', setting: 'work', topic: 'a 401(k) for thirty years', name: 'Aisha and the 401(k)',
    text: "Aisha, 35, pays $400 a month into a 401(k), and she will not touch it for thirty years. She also keeps six months of her pay in a savings account. She asks a friend, 'Is there something I should be doing about all this?'",
    route: { D1: ['none'] },
    cues: { D1: 'pays $400 a month into a 401(k), and she will not touch it for thirty years' } },

  { id: 'w-nurse', use: 'check', tier: 'clean', setting: 'health', topic: 'a nurse and a leaflet',
    text: "Nia, 52, is a nurse. She has a condo that she owns outright, $35,000 in savings and a 401(k) at work that she will not touch until she retires at 67. She has no debts. Last week a leaflet arrived from a firm offering to review her finances for a fee.",
    route: { D1: ['none'] },
    cues: { D1: 'a 401(k) at work that she will not touch until she retires at 67' },
    segments: [
      { text: 'Nia, 52, is a nurse. She has a condo that she owns outright, $35,000 in savings and ', note: 'That says what she has. It says nothing about when she needs it.' },
      { text: 'a 401(k) at work that she will not touch until she retires at 67' },
      { text: '. She has no debts. Last week a leaflet arrived from a firm offering to review her finances for a fee.', note: 'The leaflet is a firm offering a service. Nothing in these words says her money could be lost.' }
    ],
    reason: { D1: 'She will not touch it for fifteen years, and nothing in the story comes out of it, rests on one thing or changes hands.' },
    not: { outcome: 'erosion', why: 'The leaflet mentions a fee, but that is a firm’s price for a review it hopes to sell her. It is not taken out of her money.' } },

  { id: 'w-la-quiet', use: 'teach', tier: 'clean', setting: 'work', topic: 'a 401(k) that will not be touched for decades',
    text: "Prices have fallen by 20% this year, and Ines, 38, has noticed it on her 401(k) statement. She will not need any of the $30,000 in it for twenty-five years, and she is not selling anything.",
    route: { D1: ['none'] },
    cues: { D1: ['She will not need any of the $30,000 in it for twenty-five years', 'she is not selling anything'] } },

  { id: 'w-la-deposit', use: 'teach', tier: 'clean', setting: 'property', topic: 'a down payment due in a falling market',
    text: "Prices have fallen by 20% this year, and Ines, 38, has noticed it on the statement for her savings. She needs a $30,000 down payment for a condo on June 1, four months away, and the $30,000 she set aside is in a fund of shares.",
    route: { D1: ['timing'] },
    cues: { D1: ['She needs a $30,000 down payment for a condo on June 1, four months away', 'the $30,000 she set aside is in a fund of shares'] } },

  { id: 'w-la-inorder', use: 'teach', tier: 'clean', setting: 'family', topic: 'wills and forms already updated, a small estate',
    text: "Priya, 40, and her husband updated their wills and the beneficiary forms for their 401(k)s last month. Each now names the other, and then their two children. Everything they own is worth $250,000, far below the tax-free limit for estate tax.",
    route: { D1: ['handover'] },
    cues: { D1: ['updated their wills and the beneficiary forms for their 401(k)s last month', 'far below the tax-free limit for estate tax'] } },

  { id: 'w-la-nothing', use: 'teach', tier: 'clean', setting: 'work', topic: 'a 401(k) paid into for decades, nothing else said',
    text: "Priya, 40, pays $300 a month into a 401(k) that she will start using at 67. She has a steady job, rents her apartment and has no debts.",
    route: { D1: ['none'] },
    cues: { D1: 'pays $300 a month into a 401(k) that she will start using at 67' } },

  { id: 'w-wk-2', use: 'teach', tier: 'misleading', setting: 'work', topic: 'a loud fall and nothing waiting for the money', name: 'Ronan and the phone call',
    text: "Ronan, 63, will keep working until he is 70. In March prices fell by 30%, and his 401(k) of $340,000 dropped to $238,000. He phones his adviser: 'Should I sell everything before it gets worse?' He draws nothing from the 401(k), and his pay covers all his bills.",
    route: { D1: ['none'] },
    cues: { D1: ['will keep working until he is 70', 'He draws nothing from the 401(k), and his pay covers all his bills'] } },

  { id: 'b-fund-fees', use: 'baseline', tier: 'clean', setting: 'retirement', topic: 'an IRA fund and an adviser, both charging',
    text: "Rob, 49, has $180,000 in a fund in his IRA. The fund company takes 1.4% of it every year, and the adviser who set it up takes another 0.3%. Rob has never read the statement that says so.",
    outcome: 'feecore', route: { D1: ['erosion'], E1: ['picking'] },
    cues: { D1: 'The fund company takes 1.4% of it every year, and the adviser who set it up takes another 0.3%', E1: 'The fund company takes 1.4% of it every year, and the adviser who set it up takes another 0.3%' },
    reason: { D1: 'Two sums come out of his money every year, one to the fund company and one to the adviser: {cue:D1}. He has never read the statement, so nobody has asked whether the fees are worth it.',
              E1: 'Both sums are fees for choosing investments, taken whatever the fund does: {cue:E1}.' } },

  { id: 'b-flat-fee', use: 'baseline', tier: 'clean', setting: 'work', topic: 'a flat fee for tax work, taking nothing from the investments',
    text: "Elena, 61, pays her tax adviser a flat $2,400 a year to file her returns and plan her retirement savings. The fee has been the same for six years, the work is done in writing, and the adviser takes nothing from what she invests.",
    outcome: 'nocut', route: { D1: ['erosion'], E1: ['nomore'] },
    cues: { D1: 'pays her tax adviser a flat $2,400 a year', E1: ['The fee has been the same for six years', 'the adviser takes nothing from what she invests'] },
    reason: { D1: 'Something comes out of her money every year: {cue:D1}. Whether the fee is fair does not change that.',
              E1: 'The fee is a flat price for work that is done, and it does not grow with her money: {cue:E1}. Nothing here needs cutting back.' } },

  { id: 'b-bill-saved', use: 'baseline', tier: 'clean', setting: 'home', topic: 'a roof bill already saved for in cash',
    text: "Joe has a $22,000 bill for a new roof from his roofer, due in three months. He has the $22,000 in a savings account, and it is earning interest.",
    outcome: 'covered', route: { D1: ['timing'], T1: ['ready'] },
    cues: { D1: 'a $22,000 bill for a new roof from his roofer, due in three months', T1: 'He has the $22,000 in a savings account' },
    reason: { D1: 'This is about money needed on a date: {cue:D1}. That fits {a:D1.timing}, even though here the money is already safe in cash.',
              T1: 'The money for the bill is already in cash, not in anything that can fall: {cue:T1}. A fall would force no sale.' } },

  { id: 'b-company-shares', use: 'baseline', tier: 'clean', setting: 'work', topic: 'most of the money in an employer’s shares',
    text: "Dan, 44, sells car parts for a living. $400,000 of the $500,000 he owns is shares in the company he works for, and he could sell them any day. He does not run the company.",
    outcome: 'diversify', route: { D1: ['shock'], S1: ['freeheld'] },
    cues: { D1: '$400,000 of the $500,000 he owns is shares in the company he works for', S1: ['he could sell them any day', 'He does not run the company'] },
    reason: { D1: 'One thing is most of what he owns: {cue:D1}. If that company did badly, nearly everything he has would go with it.',
              S1: 'He is free to sell and has no part in running the company: {cue:S1}.' } },

  { id: 'b-old-will', use: 'baseline', tier: 'clean', setting: 'family', topic: 'a will that still names a former husband',
    text: "Moira, 59, has not changed her will since her divorce nine years ago. It still leaves her house and savings, $450,000, to her former husband.",
    outcome: 'basicdocs', route: { D1: ['handover'], H1: ['papers'] },
    cues: { D1: 'still leaves her house and savings, $450,000, to her former husband', H1: 'has not changed her will since her divorce nine years ago' },
    reason: { D1: 'This is about who gets the money when she dies, and these words show the problem: {cue:D1}.',
              H1: 'The paper is out of date: {cue:H1}.' } },

  { id: 'b-long-saver', use: 'baseline', tier: 'clean', setting: 'work', topic: 'a 401(k) that will not be touched for thirty years',
    text: "Kim, 35, pays $350 a month into a 401(k) that she will not touch for thirty years. She has a steady job, no debts and three months of pay in savings.",
    route: { D1: ['none'] },
    cues: { D1: 'pays $350 a month into a 401(k) that she will not touch for thirty years' },
    reason: { D1: 'Money is being put away for decades: {cue:D1}. Nothing in the story comes out of it, rests on one thing, falls due on a date or changes hands, so there is nothing that could lose the money.' } }
]);
