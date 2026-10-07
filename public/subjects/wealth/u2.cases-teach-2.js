// Wealth Preservation, Unit Two: cases shown inside cards, part two (the sheltered account, income taxed every year in the wrong account,
// a tax bill on a sale nobody needs to make, and a loss used against a gain).

FC.cases('wealth', 'u2', [

  /* ---------- A word: the sheltered account, and a gain ---------- */
  { id: 'e-t-shelter', use: 'teach', tier: 'clean', setting: 'retirement', topic: 'two accounts holding the same fund', name: 'Leila’s two accounts',
    text: "Leila, 45, has $40,000 in an IRA and $40,000 in an ordinary brokerage account. Both hold the same fund, which pays out $1,600 of income a year. In the IRA the law does not tax that income while the money stays in; it taxes what she takes out in retirement. In the brokerage account she pays 25% of it, $400, every year." },

  { id: 'e-t-gain', use: 'teach', tier: 'clean', setting: 'home', topic: 'shares valued above their cost', name: 'Tomás and his shares',
    text: "Tomás bought 1,000 shares in a company for $10 each, $10,000 in all. Today each share is worth $16, so his 1,000 shares are worth $16,000. He has not sold any." },

  /* ---------- Right account for each investment ---------- */
  { id: 'e-m-loc', use: 'teach', tier: 'clean', setting: 'home', topic: 'a bond fund in the ordinary account', name: 'Ana and the bond fund',
    text: "Ana, 44, has $50,000 in an IRA and $50,000 in an ordinary brokerage account. The IRA holds a fund of shares that pays out very little. The brokerage account holds a bond fund that pays out $2,400 of interest a year, and Ana pays 25% tax on it, $600, every year.",
    outcome: 'location', route: { D1: ['erosion'], E1: ['incometax'] },
    cues: { E1: 'The brokerage account holds a bond fund that pays out $2,400 of interest a year, and Ana pays 25% tax on it, $600, every year' } },

  { id: 'e-c-loc', use: 'check', tier: 'clean', setting: 'property', topic: 'a rent-income fund taxed annually', name: 'Femi and the office-rent fund',
    text: "Femi, 39, has $60,000 in an ordinary brokerage account, in a fund that owns office buildings and passes the rent on to its owners. It pays out $3,600 a year, and Femi pays 25% tax on it, $900, every year. His 401(k), $40,000, is in a fund of shares that pays out almost nothing.",
    outcome: 'location', route: { D1: ['erosion'], E1: ['incometax'] },
    cues: { E1: 'It pays out $3,600 a year, and Femi pays 25% tax on it, $900, every year' },
    reason: { E1: 'The fund that pays out the most sits in the fully taxed account, and the tax arrives every year without a sale: {cue:E1}. His 401(k) holds shares that pay out almost nothing.' },
    not: { outcome: 'defer', why: 'Nothing here is being sold. The tax is on income paid out every year, and it arrives whether or not Femi sells.' } },

  /* ---------- Delay the tax by not selling ---------- */
  { id: 'e-m-def', use: 'teach', tier: 'clean', setting: 'family', topic: 'locking in a profit with no use for the cash', name: 'Imogen and the profit',
    text: "Imogen, 57, bought a fund for $24,000 several years ago, and it is now worth $30,000. Her adviser says it has had a good run and suggests she 'lock in the profit' by selling it all and moving the money into another fund, which is much like the one she holds. Imogen has no bill to pay and no need for the cash. Selling would bring tax of 15% on the $6,000 gain, $900.",
    outcome: 'defer', route: { D1: ['erosion'], E1: ['needlesssale'] },
    cues: { E1: 'by selling it all and moving the money into another fund, which is much like the one she holds. Imogen has no bill to pay and no need for the cash. Selling would bring tax of 15% on the $6,000 gain, $900' } },

  { id: 'e-c-def', use: 'check', tier: 'clean', setting: 'work', topic: 'a newsletter’s advice to bank profits', name: 'Priya and the newsletter',
    text: "Priya, 48, holds $45,000 of shares she bought for $30,000. A newsletter says 'take your profits before the summer', and she is about to sell them all. She needs no cash. The sale would bring tax of 15% on the $15,000 gain, $2,250.",
    outcome: 'defer', route: { D1: ['erosion'], E1: ['needlesssale'] },
    cues: { E1: 'she is about to sell them all. She needs no cash. The sale would bring tax of 15% on the $15,000 gain, $2,250' },
    reason: { E1: 'A sale is planned, it would bring tax on {t:gain}, and nothing needs it: {cue:E1}. A newsletter’s tip is a remark, not a bill or a need.' },
    not: { outcome: 'harvest', why: 'Nothing has been sold yet, and nothing else Priya holds is worth less than it cost. So there is no loss to set against the gain.' } },

  /* ---------- The look-alike pair: income taxed every year, and a gain taxed on a sale ---------- */
  { id: 'e-l-loc-a', use: 'teach', tier: 'clean', setting: 'work', topic: 'a bond fund’s interest taxed annually', name: 'Imani’s interest',
    text: "Imani, 50, holds a fund of company bonds in her ordinary brokerage account. It pays out $2,000 of interest a year, and she pays 25% tax on it, $500, every year without selling anything.",
    outcome: 'location', route: { D1: ['erosion'], E1: ['incometax'] },
    cues: { E1: 'It pays out $2,000 of interest a year, and she pays 25% tax on it, $500, every year without selling anything' } },

  { id: 'e-l-loc-b', use: 'teach', tier: 'clean', setting: 'work', topic: 'a percentage fund Imani could sell', name: 'Imani’s shares',
    text: "Imani, 50, also holds a fund of shares in her ordinary brokerage account. She bought it for $20,000 and it is now worth $26,000. She is thinking of selling it all to switch to a similar fund. She needs no cash. Selling would bring tax of 15% on the $6,000 gain, $900.",
    outcome: 'defer', route: { D1: ['erosion'], E1: ['needlesssale'] },
    cues: { E1: 'thinking of selling it all to switch to a similar fund. She needs no cash. Selling would bring tax of 15% on the $6,000 gain, $900' } },

  /* ---------- Use a loss to cut tax ---------- */
  { id: 'e-m-har', use: 'teach', tier: 'clean', setting: 'work', topic: 'a gain taxed this season and a fund below its cost', name: 'Sam and the fund that fell',
    text: "Sam, 49, sold some shares in March, which he had held for years, for $5,000 more than he paid for them, so he will owe 15% tax on that gain, $750. In the same brokerage account he still holds a fund he has not sold. He paid $12,000 for it, and it is now worth $9,000.",
    outcome: 'harvest', route: { D1: ['erosion'], E1: ['gainloss'] },
    cues: { E1: 'so he will owe 15% tax on that gain, $750. In the same brokerage account he still holds a fund he has not sold. He paid $12,000 for it, and it is now worth $9,000' } },

  { id: 'e-c-har', use: 'check', tier: 'clean', setting: 'family', topic: 'two funds, one up and one down', name: 'Hugo’s two funds',
    text: "Hugo, 36, has two funds in an ordinary brokerage account. This year he sold one of them for $2,000 more than he paid, so he will owe tax of $300 on that gain. The other, which he has not sold, cost him $5,000 and is now worth $4,000.",
    outcome: 'harvest', route: { D1: ['erosion'], E1: ['gainloss'] },
    cues: { E1: 'so he will owe tax of $300 on that gain. The other, which he has not sold, cost him $5,000 and is now worth $4,000' },
    reason: { E1: 'A sale this year made {t:gain} that will be taxed, and {t:fund} he has not sold is worth less than it cost: {cue:E1}. This answer needs both.' },
    not: { outcome: 'defer', why: 'The sale has already happened, so there is no needless sale to hold off. What the story shows is a loss that can be set against the gain.' } },

  /* ---------- The look-alike pair: a sale nobody needs, and a gain with a loss beside it ---------- */
  { id: 'e-l-def-a', use: 'teach', tier: 'clean', setting: 'home', topic: 'a fund up $6,000 and a sale planned', name: 'Noel and the fund that rose',
    text: "Noel, 55, holds a fund he bought for $20,000 that is now worth $26,000, and he has sold nothing this year. A friend says it has 'run too far', so he is thinking of selling it. He needs no cash. Selling would bring tax of 15% on the $6,000 gain, $900.",
    outcome: 'defer', route: { D1: ['erosion'], E1: ['needlesssale'] },
    cues: { E1: "thinking of selling it. He needs no cash. Selling would bring tax of 15% on the $6,000 gain, $900" } },

  { id: 'e-l-har-b', use: 'teach', tier: 'clean', setting: 'home', topic: 'a fund sold at a gain and one which fell', name: 'Noel and the fund that fell',
    text: "Noel, 55, sold one fund this year for $6,000 more than he paid, so he will owe tax of $900 on that gain. He still holds another fund in the same account that he has not sold. It cost him $15,000, and it is now worth $10,500.",
    outcome: 'harvest', route: { D1: ['erosion'], E1: ['gainloss'] },
    cues: { E1: 'so he will owe tax of $900 on that gain. He still holds another fund in the same account that he has not sold. It cost him $15,000, and it is now worth $10,500' } }
]);
