// Wealth Preservation, Unit Two: cases shown inside cards, part two (income taxed every year in the wrong account, and
// a tax bill on a sale nobody needs to make).

FC.cases('wealth', 'u2', [

  /* ---------- Two cases that carry a word and no name ---------- */
  { id: 'e-t-shelter', use: 'teach', tier: 'clean', setting: 'retirement', topic: 'two accounts holding the same fund', name: 'Leila’s two accounts',
    text: "Leila, 45, has £40,000 in a pension and £40,000 in an ordinary investment account. Both hold the same fund, which pays out £1,600 of income a year. In the pension the law does not tax that income while the money stays in; it taxes what she takes out in old age. In the ordinary account she pays 25% of it, £400, every year." },

  { id: 'e-t-gain', use: 'teach', tier: 'clean', setting: 'home', topic: 'shares valued above their cost', name: 'Tomás and his shares',
    text: "Tomás bought 1,000 shares in a company for £10 each, £10,000 in all. Today each share is worth £16, so his 1,000 shares are worth £16,000. He has not sold any." },

  /* ---------- Right account for each investment ---------- */
  { id: 'e-m-loc', use: 'teach', tier: 'clean', setting: 'home', topic: 'a bond fund in the ordinary account', name: 'Ana and the bond fund',
    text: "Ana, 44, has £50,000 in a pension and £50,000 in an ordinary investment account. The pension holds a fund of shares that pays out very little. The ordinary account holds a bond fund that pays out £2,400 of interest a year, and Ana pays 25% tax on it, £600, every year.",
    outcome: 'location', route: { D1: ['erosion'], E1: ['incometax'] },
    cues: { E1: 'The ordinary account holds a bond fund that pays out £2,400 of interest a year, and Ana pays 25% tax on it, £600, every year' } },

  { id: 'e-a-loc', use: 'teach', tier: 'clean', setting: 'retirement', topic: 'a dividend fund in the ordinary account', name: 'Hana and the dividend fund',
    text: "Hana, 62, has £80,000 in a pension and £80,000 in an ordinary investment account. Her ordinary account holds a fund of shares in companies chosen because they pay generous dividends, which are the part of a company's profits that it pays out to its owners. They come to £3,600 a year, and she pays 25% tax on it, £900, every year. Her pension holds a fund of shares in young, fast-growing firms that pay out almost nothing.",
    outcome: 'location', route: { D1: ['erosion'], E1: ['incometax'] },
    cues: { E1: 'They come to £3,600 a year, and she pays 25% tax on it, £900, every year' },
    segments: [
      { text: 'Hana, 62, has £80,000 in a pension and £80,000 in an ordinary investment account.', note: 'That is what she has. It does not show which account holds which fund, and that is what settles this case.' },
      { text: "Her ordinary account holds a fund of shares in companies chosen because they pay generous dividends, which are the part of a company's profits that it pays out to its owners.", note: 'That says what the fund holds and where. It does not yet say what comes out of the money. The tax is in the words after it.' },
      { text: 'They come to £3,600 a year, and she pays 25% tax on it, £900, every year' },
      { text: 'Her pension holds a fund of shares in young, fast-growing firms that pay out almost nothing.', note: 'That is the other half of the picture: the account where tax would be small. The words that show tax being taken are in the sentences before.' }
    ] },

  { id: 'e-c-loc', use: 'check', tier: 'clean', setting: 'property', topic: 'a rent-income fund taxed annually', name: 'Femi and the office-rent fund',
    text: "Femi, 39, has £60,000 in an ordinary investment account, in a fund that owns office buildings and passes the rent on to its owners. It pays out £3,600 a year, and Femi pays 25% tax on it, £900, every year. His pension, £40,000, is in a fund of shares that pays out almost nothing.",
    outcome: 'location', route: { D1: ['erosion'], E1: ['incometax'] },
    cues: { E1: 'It pays out £3,600 a year, and Femi pays 25% tax on it, £900, every year' },
    reason: { E1: 'The investment that pays out the most sits in the account that is taxed in full, and the tax arrives every year without anything being sold: {cue:E1}. The pension holds the investment that pays out almost nothing, so it has room to spare.' },
    not: { outcome: 'defer', why: 'Nothing here is being sold. The tax is on income paid out every year, and it arrives whether or not Femi sells anything.' } },

  /* ---------- Delay the tax by not selling ---------- */
  { id: 'e-m-def', use: 'teach', tier: 'clean', setting: 'family', topic: 'locking in a profit with no use for the cash', name: 'Imogen and the profit',
    text: "Imogen, 57, bought a fund for £24,000 several years ago, and it is now worth £30,000. Her adviser says it has had a good run and suggests she 'lock in the profit' by selling it all and moving the money into another fund, which is much like the one she holds. Imogen has no bill to pay and no need for the cash. Selling would bring tax of 20% on the £6,000 gain, £1,200.",
    outcome: 'defer', route: { D1: ['erosion'], E1: ['needlesssale'] },
    cues: { E1: 'by selling it all and moving the money into another fund, which is much like the one she holds. Imogen has no bill to pay and no need for the cash. Selling would bring tax of 20% on the £6,000 gain, £1,200' } },

  { id: 'e-a-def', use: 'teach', tier: 'clean', setting: 'property', topic: 'selling a rental flat on a colleague’s remark', name: 'Marek and the flat',
    text: "Marek, 54, bought a rental flat for £120,000, and it is now worth £170,000. A colleague has told him flats are 'overpriced these days', so he is thinking of selling it and putting the money in a fund. The flat is a small part of what he owns. He owes nothing and needs no cash, and the rent covers the costs. Selling would bring tax of 20% on the £50,000 gain, £10,000.",
    outcome: 'defer', route: { D1: ['erosion'], E1: ['needlesssale'] },
    cues: { E1: 'so he is thinking of selling it and putting the money in a fund. The flat is a small part of what he owns. He owes nothing and needs no cash, and the rent covers the costs. Selling would bring tax of 20% on the £50,000 gain, £10,000' },
    segments: [
      { text: 'Marek, 54, bought a rental flat for £120,000, and it is now worth £170,000.', note: 'That shows there is {t:gain}. A rise in price is not a problem on its own: it is what the tax would be charged on if he sold.' },
      { text: "A colleague has told him flats are 'overpriced these days'", note: 'That is a remark. It is why he is thinking of selling, but it is not something the money needs.' },
      { text: 'so he is thinking of selling it and putting the money in a fund. The flat is a small part of what he owns. He owes nothing and needs no cash, and the rent covers the costs. Selling would bring tax of 20% on the £50,000 gain, £10,000' }
    ] },

  { id: 'e-c-def', use: 'check', tier: 'clean', setting: 'work', topic: 'a newsletter’s advice to bank profits', name: 'Priya and the newsletter',
    text: "Priya, 48, holds £45,000 of shares she bought for £30,000. A newsletter says 'take your profits before the summer', and she is about to sell them all. She needs no cash. The sale would bring tax of 20% on the £15,000 gain, £3,000.",
    outcome: 'defer', route: { D1: ['erosion'], E1: ['needlesssale'] },
    cues: { E1: 'she is about to sell them all. She needs no cash. The sale would bring tax of 20% on the £15,000 gain, £3,000' },
    reason: { E1: 'A sale is planned and it would bring a tax bill on {t:gain}: {cue:E1}. The case shows nothing that needs the sale. A newsletter telling people to take profits is a remark, not a bill or a need.' },
    not: { outcome: 'harvest', why: 'Nothing has been sold at {t:gain} this year, and no other investment in the case is worth less than it cost, so there is no loss to set against the gain.' } },

  /* ---------- The look-alike pair: income taxed every year, and a gain taxed on a sale ---------- */
  { id: 'e-l-loc-a', use: 'teach', tier: 'clean', setting: 'work', topic: 'a bond fund’s interest taxed annually', name: 'Imani’s interest',
    text: "Imani, 50, holds a fund of company bonds in her ordinary investment account. It pays out £2,000 of interest a year, and she pays 25% tax on it, £500, every year without selling anything.",
    outcome: 'location', route: { D1: ['erosion'], E1: ['incometax'] },
    cues: { E1: 'It pays out £2,000 of interest a year, and she pays 25% tax on it, £500, every year without selling anything' } },

  { id: 'e-l-loc-b', use: 'teach', tier: 'clean', setting: 'work', topic: 'a percentage fund Imani could sell', name: 'Imani’s shares',
    text: "Imani, 50, also holds a fund of shares in her ordinary investment account. She bought it for £20,000 and it is now worth £26,000. She is thinking of selling it all to switch to a similar fund. She needs no cash. Selling would bring tax of 20% on the £6,000 gain, £1,200.",
    outcome: 'defer', route: { D1: ['erosion'], E1: ['needlesssale'] },
    cues: { E1: 'thinking of selling it all to switch to a similar fund. She needs no cash. Selling would bring tax of 20% on the £6,000 gain, £1,200' } },

  /* ---------- Use a loss to cut tax ---------- */
  { id: 'e-m-har', use: 'teach', tier: 'clean', setting: 'work', topic: 'a gain taxed this season and a fund below its cost', name: 'Sam and the fund that fell',
    text: "Sam, 49, sold some shares in March for £5,000 more than he paid for them, so he will owe 20% tax on that gain, £1,000. In the same ordinary investment account he still holds a fund he has not sold. He paid £12,000 for it, and it is now worth £9,000.",
    outcome: 'harvest', route: { D1: ['erosion'], E1: ['gainloss'] },
    cues: { E1: 'so he will owe 20% tax on that gain, £1,000. In the same ordinary investment account he still holds a fund he has not sold. He paid £12,000 for it, and it is now worth £9,000' } },

  { id: 'e-a-har', use: 'teach', tier: 'clean', setting: 'retirement', topic: 'a retired woman’s autumn sale and a fallen fund', name: 'Wendy’s autumn sale',
    text: "Wendy, 70, sold a fund in October for £8,000 more than she paid, which will bring tax of £1,600 on that gain. Her ordinary account still holds a fund of shares she has not sold. She paid £15,000 for it and it is now worth £11,000.",
    outcome: 'harvest', route: { D1: ['erosion'], E1: ['gainloss'] },
    cues: { E1: 'which will bring tax of £1,600 on that gain. Her ordinary account still holds a fund of shares she has not sold. She paid £15,000 for it and it is now worth £11,000' },
    segments: [
      { text: 'Wendy, 70, sold a fund in October for £8,000 more than she paid,', note: 'That is the sale, and it is half of what settles the case. The other half is something she still holds, and it comes after the comma.' },
      { text: 'which will bring tax of £1,600 on that gain. Her ordinary account still holds a fund of shares she has not sold. She paid £15,000 for it and it is now worth £11,000' }
    ] },

  { id: 'e-c-har', use: 'check', tier: 'clean', setting: 'family', topic: 'two funds, one up and one down', name: 'Hugo’s two funds',
    text: "Hugo, 36, has two funds in an ordinary investment account. This year he sold one of them for £2,000 more than he paid, so he will owe tax of £400 on that gain. The other, which he has not sold, cost him £5,000 and is now worth £4,000.",
    outcome: 'harvest', route: { D1: ['erosion'], E1: ['gainloss'] },
    cues: { E1: 'so he will owe tax of £400 on that gain. The other, which he has not sold, cost him £5,000 and is now worth £4,000' },
    reason: { E1: 'A sale this year has made {t:gain} that will be taxed, and another investment he has not sold is worth less than it cost: {cue:E1}. The two together are what this answer needs.' },
    not: { outcome: 'defer', why: 'The sale has already happened this year, and nobody is planning an unnecessary one. The case shows an investment below what it cost that can be set against the gain.' } },

  /* ---------- The look-alike pair: a sale nobody needs, and a gain with a loss beside it ---------- */
  { id: 'e-l-def-a', use: 'teach', tier: 'clean', setting: 'home', topic: 'a fund up £6,000 and a sale planned', name: 'Noel and the fund that rose',
    text: "Noel, 55, holds a fund he bought for £20,000 that is now worth £26,000, and he has sold nothing this year. A friend says it has 'run too far', so he is thinking of selling it. He needs no cash. Selling would bring tax of 20% on the £6,000 gain, £1,200.",
    outcome: 'defer', route: { D1: ['erosion'], E1: ['needlesssale'] },
    cues: { E1: "thinking of selling it. He needs no cash. Selling would bring tax of 20% on the £6,000 gain, £1,200" } },

  { id: 'e-l-har-b', use: 'teach', tier: 'clean', setting: 'home', topic: 'a fund sold at a gain and one which fell', name: 'Noel and the fund that fell',
    text: "Noel, 55, sold one fund this year for £6,000 more than he paid, so he will owe tax of £1,200 on that gain. He still holds another fund in the same account that he has not sold. It cost him £15,000, and it is now worth £10,500.",
    outcome: 'harvest', route: { D1: ['erosion'], E1: ['gainloss'] },
    cues: { E1: 'so he will owe tax of £1,200 on that gain. He still holds another fund in the same account that he has not sold. It cost him £15,000, and it is now worth £10,500' } }
]);
