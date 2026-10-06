// Wealth Preservation, Unit One: cases shown inside cards, part three (the fifth family and its look-alike pairs, the check after
// the question card, the two worked cases), then the six BASELINE cases of lesson standard E21.
// A case used by a worked card carries no reason of its own: the card's steps hold it, so there is one copy.
// The baseline cases (use 'baseline') are asked once, before the unit, as "real, or is something wrong?", and are listed in
// subject.baseline. They are in no card and no drill. Where a baseline case is a sound case that belongs to a branch of the key
// (a charge worth paying, a bill already saved for), it carries its outcome and its full route, so that the check can tell from the
// key's own `legit` mark which cases are sound. The other baseline cases carry the gate answer only.
// Field guide: see u1.cases-teach-1.js.

FC.cases('wealth', 'u1', [

  /* ---------- The fifth family: nothing in the case ---------- */
  { id: 'w-saver', use: 'teach', tier: 'clean', setting: 'work', topic: 'a 401(k) for thirty years', name: 'Aisha and the 401(k)',
    text: "Aisha, 35, pays $400 a month into a 401(k), and she will not touch it for thirty years. She also keeps six months of her pay in a savings account. She asks a friend, 'Is there something I should be doing about all this?'",
    route: { D1: ['none'] },
    cues: { D1: 'pays $400 a month into a 401(k), and she will not touch it for thirty years' } },

  { id: 'w-friend', use: 'teach', tier: 'clean', setting: 'home', topic: 'an article about trusts and offshore accounts', name: 'Tomás and the article',
    text: "Tomás, 44, has $60,000 in a savings account, a steady job and no debts. He does not expect to need the money for fifteen years. He has read an article about trusts and offshore accounts and asks a colleague, 'Am I missing something?'",
    route: { D1: ['none'] },
    cues: { D1: 'He does not expect to need the money for fifteen years' },
    segments: [
      { text: 'Tomás, 44, has $60,000 in a savings account, a steady job and no debts.', note: 'That tells you what he has. It says nothing about what could lose it.' },
      { text: 'He does not expect to need the money for fifteen years' },
      { text: "He has read an article about trusts and offshore accounts and asks a colleague, 'Am I missing something?'", note: 'That is where the idea of a cure comes from, and a cure is not a reason. The case does not say what could lose his money.' }
    ] },

  { id: 'w-nurse', use: 'check', tier: 'clean', setting: 'health', topic: 'a nurse and a leaflet',
    text: "Nia, 52, is a nurse. She has a condo that she owns outright, $35,000 in savings and a 401(k) at work that she will not touch until she retires at 67. She has no debts. Last week a leaflet arrived from a firm offering to review her finances for a fee.",
    route: { D1: ['none'] },
    cues: { D1: 'a 401(k) at work that she will not touch until she retires at 67' },
    segments: [
      { text: 'Nia, 52, is a nurse. She has a condo that she owns outright, $35,000 in savings and ', note: 'That tells you what she has. It does not say anything about when she needs it, or what could lose it.' },
      { text: 'a 401(k) at work that she will not touch until she retires at 67' },
      { text: '. She has no debts. Last week a leaflet arrived from a firm offering to review her finances for a fee.', note: 'The leaflet is somebody offering a service. Nothing in these words says that her money could be lost.' }
    ],
    reason: { D1: 'The case shows money being kept, and when it will be needed: {cue:D1}. Nothing comes out of it every year, no one thing is most of it, and nothing is said about a death or a will. The leaflet is a firm offering a service, and it raises nothing about her money.' },
    not: { outcome: 'erosion', why: 'The leaflet mentions a fee, but that is a firm’s price for a review it hopes to sell her. It is not something taken out of her money, and nothing comes out of it.' } },

  /* ---------- The look-alike pair: nothing in the case, or a fall in prices ---------- */
  { id: 'w-la-quiet', use: 'teach', tier: 'clean', setting: 'work', topic: 'a 401(k) that will not be touched for decades',
    text: "Prices have fallen by 20% this year, and Ines, 38, has noticed it on her 401(k) statement. She will not need any of the $30,000 in it for twenty-five years, and she is not selling anything.",
    route: { D1: ['none'] },
    cues: { D1: ['She will not need any of the $30,000 in it for twenty-five years', 'she is not selling anything'] } },

  { id: 'w-la-deposit', use: 'teach', tier: 'clean', setting: 'property', topic: 'a down payment due in a falling market',
    text: "Prices have fallen by 20% this year, and Ines, 38, has noticed it on the statement for her savings. She needs a $30,000 down payment for a condo on June 1, four months away, and the $30,000 she set aside is in a fund of shares.",
    route: { D1: ['timing'] },
    cues: { D1: ['She needs a $30,000 down payment for a condo on June 1, four months away', 'the $30,000 she set aside is in a fund of shares'] } },

  /* ---------- The look-alike pair: nothing in the case, or something taken out every year ---------- */
  { id: 'w-la-april', use: 'teach', tier: 'clean', setting: 'work', topic: 'a 401(k) statement filed unread',
    text: "Mei, 45, pays into a 401(k) that she will not touch until she is 67. Her yearly statement arrives every January, and every January she files it away without reading it.",
    route: { D1: ['none'] },
    cues: { D1: ['will not touch until she is 67', 'files it away without reading it'] } },

  { id: 'w-la-statement', use: 'teach', tier: 'clean', setting: 'work', topic: 'a 401(k) statement read at last',
    text: "Mei, 45, pays into a 401(k) that she will not touch until she is 67. Her yearly statement arrives every January, and this January she reads it and finds that the fund takes 1.6% of her money every year.",
    route: { D1: ['erosion'] },
    cues: { D1: 'the fund takes 1.6% of her money every year' } },

  /* ---------- The look-alike pair: nothing in the case, or the handover ---------- */
  { id: 'w-la-inorder', use: 'teach', tier: 'clean', setting: 'family', topic: 'wills and forms already updated, a small estate',
    text: "Priya, 40, and her husband updated their wills and the beneficiary forms for their 401(k)s last month. Each now names the other, and then their two children. Everything they own is worth $250,000, far below the tax-free limit for estate tax.",
    route: { D1: ['handover'] },
    cues: { D1: ['updated their wills and the beneficiary forms for their 401(k)s last month', 'far below the tax-free limit for estate tax'] } },

  { id: 'w-la-nothing', use: 'teach', tier: 'clean', setting: 'work', topic: 'a 401(k) paid into for decades, nothing else said',
    text: "Priya, 40, pays $300 a month into a 401(k) that she will start using at 67. She has a steady job, rents her apartment and has no debts.",
    route: { D1: ['none'] },
    cues: { D1: 'pays $300 a month into a 401(k) that she will start using at 67' } },

  /* ---------- The look-alike pair: nothing in the case, or one thing most of it depends on ---------- */
  { id: 'w-la-spread', use: 'teach', tier: 'clean', setting: 'property', topic: 'money spread over three places',
    text: "Owen, 50, has $500,000: $150,000 in savings, $220,000 in a 401(k) held in a fund of shares in thousands of companies, and a condo he lives in worth $130,000, with nothing owed on it. He has no loans and no business.",
    route: { D1: ['none'] },
    cues: { D1: ['$150,000 in savings, $220,000 in a 401(k) held in a fund of shares in thousands of companies, and a condo he lives in worth $130,000', 'He has no loans and no business'] } },

  { id: 'w-la-flat', use: 'teach', tier: 'clean', setting: 'property', topic: 'one rental condo that is most of the money',
    text: "Owen, 50, has $500,000. $400,000 of it is one condo that he rents out, and the other $100,000 is in a savings account.",
    route: { D1: ['shock'] },
    cues: { D1: '$400,000 of it is one condo that he rents out' } },

  /* ---------- The check after the question card ---------- */
  { id: 'w-kind', use: 'check', tier: 'clean', setting: 'work', topic: 'an investment that pays its seller',
    text: "Fatima, 58, was sold an investment by an adviser. Each year the product takes 2.1% of her $150,000, $3,150, and the adviser is paid a share of it.",
    route: { D1: ['erosion'] },
    cues: { D1: 'Each year the product takes 2.1% of her $150,000, $3,150' },
    reason: { D1: 'The case shows a charge that comes out of the money every year: {cue:D1}. The adviser is paid from it. The case does not say that prices have fallen, that a bill is due, or that one thing is most of what she has.' },
    not: { outcome: 'none', why: 'The case is not silent about what comes out of her money. It names a charge and says how much it is, so there are words to point to.' } },

  /* ---------- The two worked cases ---------- */
  { id: 'w-wk-1', use: 'teach', tier: 'clean', setting: 'work', topic: 'most of the money in one company, whose price fell', name: 'Beth and the company price',
    text: "Beth, 52, has $700,000. $560,000 of it is shares in the company where she has worked for twenty-eight years, and the rest is in a savings account and a small 401(k). She does not expect to need any of it for twenty years. This year the company's price has fallen by 35%, while prices elsewhere have hardly moved.",
    route: { D1: ['shock'] },
    cues: { D1: '$560,000 of it is shares in the company where she has worked for twenty-eight years' } },

  { id: 'w-wk-2', use: 'teach', tier: 'misleading', setting: 'work', topic: 'a loud fall and nothing waiting for the money', name: 'Ronan and the phone call',
    text: "Ronan, 63, will keep working until he is 70. In March prices fell by 30%, and his 401(k) of $340,000 dropped to $238,000. He phones his adviser: 'Should I sell everything before it gets worse?' He draws nothing from the 401(k), and his pay covers all his bills.",
    route: { D1: ['none'] },
    cues: { D1: ['will keep working until he is 70', 'He draws nothing from the 401(k), and his pay covers all his bills'] } },

  /* ---------- The baseline check (E21): six cases, half of them sound ---------- */
  { id: 'b-fund-fees', use: 'baseline', tier: 'clean', setting: 'retirement', topic: 'an IRA fund and an adviser, both charging',
    text: "Rob, 49, has $180,000 in a fund in his IRA. The fund company takes 1.4% of it every year, and the adviser who set it up takes another 0.3%. Rob has never read the statement that says so.",
    outcome: 'feecore', route: { D1: ['erosion'], E1: ['picking'] },
    cues: { D1: 'The fund company takes 1.4% of it every year, and the adviser who set it up takes another 0.3%', E1: 'The fund company takes 1.4% of it every year, and the adviser who set it up takes another 0.3%' },
    reason: { D1: 'Two sums come out of the money every year, one to the fund company and one to the adviser: {cue:D1}. Rob has not read the statement, so nobody has asked whether the charges are worth it.',
              E1: 'Both sums are charges for choosing investments, taken whatever the fund does: {cue:E1}.' } },

  { id: 'b-flat-fee', use: 'baseline', tier: 'clean', setting: 'work', topic: 'a flat fee for tax work, taking nothing from the investments',
    text: "Elena, 61, pays her tax adviser a flat $2,400 a year to file her returns and plan her retirement savings. The fee has been the same for six years, the work is done in writing, and the adviser takes nothing from what she invests.",
    outcome: 'nocut', route: { D1: ['erosion'], E1: ['nomore'] },
    cues: { D1: 'pays her tax adviser a flat $2,400 a year', E1: ['The fee has been the same for six years', 'the adviser takes nothing from what she invests'] },
    reason: { D1: 'Something comes out of her money every year: {cue:D1}. Whether the charge is fair does not change what kind of case this is: it is about something coming out every year.',
              E1: 'The charge is a flat price for work that is done, and it does not grow with her money: {cue:E1}. Nothing here needs cutting back.' } },

  { id: 'b-bill-saved', use: 'baseline', tier: 'clean', setting: 'home', topic: 'a roof bill already saved for in cash',
    text: "Joe has a $22,000 bill for a new roof from his roofer, due in three months. He has the $22,000 in a savings account, and it is earning interest.",
    outcome: 'covered', route: { D1: ['timing'], T1: ['ready'] },
    cues: { D1: 'a $22,000 bill for a new roof from his roofer, due in three months', T1: 'He has the $22,000 in a savings account' },
    reason: { D1: 'The case is about money needed on a date: {cue:D1}. That is the kind of case the answer about a fall in prices is for, even though here the money is already safe in cash.',
              T1: 'The money for the bill is already in cash, not in anything whose price can fall: {cue:T1}. A fall would force no sale.' } },

  { id: 'b-company-shares', use: 'baseline', tier: 'clean', setting: 'work', topic: 'most of the money in an employer’s shares',
    text: "Dan, 44, sells car parts for a living. $400,000 of the $500,000 he owns is shares in the company he works for, and he could sell them any day. He does not run the company.",
    outcome: 'diversify', route: { D1: ['shock'], S1: ['freeheld'] },
    cues: { D1: '$400,000 of the $500,000 he owns is shares in the company he works for', S1: ['he could sell them any day', 'He does not run the company'] },
    reason: { D1: 'One thing is most of what he owns: {cue:D1}. If that company did badly, nearly everything he has would do badly with it.',
              S1: 'He is free to sell and has no part in running the company: {cue:S1}.' } },

  { id: 'b-old-will', use: 'baseline', tier: 'clean', setting: 'family', topic: 'a will that still names a former husband',
    text: "Moira, 59, has not changed her will since her divorce nine years ago. It still leaves her house and savings, $450,000, to her former husband.",
    outcome: 'basicdocs', route: { D1: ['handover'], H1: ['papers'] },
    cues: { D1: 'still leaves her house and savings, $450,000, to her former husband', H1: 'has not changed her will since her divorce nine years ago' },
    reason: { D1: 'The case is about who gets the money when she dies, and the words that show the problem are these: {cue:D1}.',
              H1: 'The paper is out of date: {cue:H1}.' } },

  { id: 'b-long-saver', use: 'baseline', tier: 'clean', setting: 'work', topic: 'a 401(k) that will not be touched for thirty years',
    text: "Kim, 35, pays $350 a month into a 401(k) that she will not touch for thirty years. She has a steady job, no debts and three months of pay in savings.",
    route: { D1: ['none'] },
    cues: { D1: 'pays $350 a month into a 401(k) that she will not touch for thirty years' },
    reason: { D1: 'The case shows money being put away for decades: {cue:D1}. It says nothing about what comes out of it, one thing most of it rests on, a bill, or a death, so nothing in what it says could lose the money.' } }
]);
