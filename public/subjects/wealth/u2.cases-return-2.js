// Wealth Preservation, Unit Two: fresh cases kept back for later days (second file: a sale nobody needs, a loss against a gain, and a
// fixed sum from a pot that has shrunk; four cases for each name).

FC.cases('wealth', 'u2', [

  /* ---------- Delay the tax by not selling ---------- */
  { id: 'e-ret-def-1', use: 'return', tier: 'clean', setting: 'family', topic: 'a cousin who says it is time to cash in',
    text: "Ulrike, 60, holds a fund she bought for £50,000 that is now worth £80,000. A cousin tells her it is 'time to cash in', and she is about to sell it all. She needs no cash. Selling would bring tax of 20% on the £30,000 gain, £6,000.",
    outcome: 'defer', route: { D1: ['erosion'], E1: ['needlesssale'] },
    cues: { D1: 'Selling would bring tax of 20% on the £30,000 gain, £6,000', E1: 'she is about to sell it all. She needs no cash. Selling would bring tax of 20% on the £30,000 gain, £6,000' },
    reason: { D1: 'The case is about a tax bill that would come out of {t:pot}: {cue:D1}. It has no claim, no handover and no bill falling due.',
              E1: 'A sale is about to be made that would bring tax on {t:gain}, and nothing needs it: {cue:E1}. A cousin saying it is time to cash in is not a need.' },
    not: { outcome: 'harvest', why: 'Nothing has been sold at {t:gain} yet, and nothing else in the case is worth less than it cost, so there is no loss to set against the gain.' } },

  { id: 'e-ret-def-2', use: 'return', tier: 'varied', setting: 'business', topic: 'a colleague’s remark about shares in summer',
    text: "Hoang, 47, holds £21,000 of shares he bought for £12,000. A colleague says shares like these 'tend to give back their gains in the summer', so Hoang is about to sell them all. He has no bill to pay and no need for the cash. Selling would bring tax of 20% on the £9,000 gain, £1,800.",
    outcome: 'defer', route: { D1: ['erosion'], E1: ['needlesssale'] },
    cues: { D1: 'Selling would bring tax of 20% on the £9,000 gain, £1,800', E1: 'so Hoang is about to sell them all. He has no bill to pay and no need for the cash. Selling would bring tax of 20% on the £9,000 gain, £1,800' },
    reason: { D1: 'The case is about a tax bill that would come out of {t:pot}: {cue:D1}. It has no claim, no handover and no one thing that is most of his money.',
              E1: 'A sale is about to be made that would bring tax on {t:gain}, and nothing needs it: {cue:E1}. A remark about the summer is not a bill or a need.' },
    not: { outcome: 'harvest', why: 'There is no loss in the case and nothing has been sold yet this year, so nothing could be set against the gain.' } },

  { id: 'e-ret-def-3', use: 'return', tier: 'clean', setting: 'retirement', topic: 'selling the two funds which rose, to tidy up six',
    text: "Fergus, 68, has six small funds in his ordinary account and wants to 'tidy up' by selling the two that have risen, which cost £20,000 and are now worth £31,000. He needs no cash, and the money would go into one of the other four. Selling would bring tax of 20% on the £11,000 gain, £2,200.",
    outcome: 'defer', route: { D1: ['erosion'], E1: ['needlesssale'] },
    cues: { D1: 'Selling would bring tax of 20% on the £11,000 gain, £2,200', E1: "wants to 'tidy up' by selling the two that have risen, which cost £20,000 and are now worth £31,000. He needs no cash, and the money would go into one of the other four. Selling would bring tax of 20% on the £11,000 gain, £2,200" },
    reason: { D1: 'The case is about a tax bill that would come out of {t:pot}: {cue:D1}. It has no claim and no handover.',
              E1: 'A sale is planned that would bring tax on {t:gain}, and the only reason is tidiness: {cue:E1}. Tidiness is a wish, not a need for cash.' },
    not: { outcome: 'harvest', why: 'No sale has been made at {t:gain} this year, and none of the six funds is described as worth less than it cost.' } },

  { id: 'e-ret-def-4', use: 'return', tier: 'misleading', setting: 'work', topic: 'a sale to put the mix back after a strong spell', also: ['timing'],
    text: "Ingrid, 58, planned to keep her savings as 70% shares and 30% bonds. After a strong year her shares are worth £420,000 and her bonds £150,000, so shares are now about 74% of the whole. Her adviser says to sell £21,000 of shares and buy bonds to put the mix back. That sale would bring tax of 20% on a £10,000 gain, £2,000. Ingrid is about to pay in £30,000 of new money.",
    outcome: 'defer', route: { D1: ['erosion'], E1: ['needlesssale'] },
    cues: { D1: 'That sale would bring tax of 20% on a £10,000 gain, £2,000', E1: 'sell £21,000 of shares and buy bonds to put the mix back. That sale would bring tax of 20% on a £10,000 gain, £2,000. Ingrid is about to pay in £30,000 of new money' },
    reason: { D1: 'In this case {t:mix} has moved from its plan, which can look like {a:D1.timing}. But the sale that would put it back brings a tax bill, {cue:D1}, and new money paid in could do the same job. When a case shows both, the answer is the one about what is taken out.',
              E1: 'A sale is planned that would bring tax on {t:gain}, and the case shows it is not needed: {cue:E1}. £30,000 of new money put into bonds would make them £180,000 of £600,000, which is 30%, so {t:mix} would be back with no sale.' },
    not: { outcome: 'harvest', why: 'There is no loss in the case, and no sale has been made this year. The case is about a sale being planned.' },
    wouldChange: 'It would be a different name if the shares had to be sold, for example because the money was needed for a bill.' },

  /* ---------- Use a loss to cut tax ---------- */
  { id: 'e-ret-har-1', use: 'return', tier: 'clean', setting: 'work', topic: 'a sale this season and a fund below cost, in one account',
    text: "Jamal, 45, sold a fund this year for £5,500 more than he paid, so he will owe tax of £1,100 on that gain. In the same ordinary account he holds a fund he has not sold, which cost £10,000 and is now worth £7,000.",
    outcome: 'harvest', route: { D1: ['erosion'], E1: ['gainloss'] },
    cues: { D1: 'he will owe tax of £1,100 on that gain', E1: 'so he will owe tax of £1,100 on that gain. In the same ordinary account he holds a fund he has not sold, which cost £10,000 and is now worth £7,000' },
    reason: { D1: 'The case is about tax that will come out of the money this year: {cue:D1}. It has no handover and no one thing that is most of what he owns.',
              E1: 'The case shows {t:gain} made this year that will be taxed, and {t:fund} he has not sold is worth less than he paid: {cue:E1}. Selling it would set a £3,000 loss against the £5,500 gain and cut the tax by £600.' },
    not: { outcome: 'defer', why: 'The sale has been made. There is no sale to hold off; there is a loss waiting beside {t:gain}.' } },

  { id: 'e-ret-har-2', use: 'return', tier: 'varied', setting: 'retirement', topic: 'two unsold funds, one up and one down',
    text: "Thelma, 74, sold a fund in the spring for £3,000 more than she paid, which will bring tax of £600. Her ordinary account still holds two funds she has not sold: one cost £8,000 and is now worth £10,000, and the other cost £12,000 and is now worth £9,500.",
    outcome: 'harvest', route: { D1: ['erosion'], E1: ['gainloss'] },
    cues: { D1: 'which will bring tax of £600', E1: 'which will bring tax of £600. Her ordinary account still holds two funds she has not sold: one cost £8,000 and is now worth £10,000, and the other cost £12,000 and is now worth £9,500' },
    reason: { D1: 'The case is about tax that will come out of the money this year: {cue:D1}. It has no handover and no one thing that is most of what she owns.',
              E1: 'The case shows {t:gain} made this year that will be taxed, and one of the two funds she has not sold is worth less than she paid: {cue:E1}. Selling that one would set a £2,500 loss against the £3,000 gain. The one that rose is not part of it.' },
    not: { outcome: 'defer', why: 'The sale has been made. The fund that rose is not being sold, and the one that fell is the one that matters.' } },

  { id: 'e-ret-har-3', use: 'return', tier: 'clean', setting: 'home', topic: 'old shares sold in the spring and a fund which lost nearly half',
    text: "Anders, 39, sold his old shares in the spring for £12,000 more than he paid, so he will owe tax of £2,400. In the same account he holds a fund he has not sold. He paid £14,000 for it and it is now worth £8,000.",
    outcome: 'harvest', route: { D1: ['erosion'], E1: ['gainloss'] },
    cues: { D1: 'he will owe tax of £2,400', E1: 'so he will owe tax of £2,400. In the same account he holds a fund he has not sold. He paid £14,000 for it and it is now worth £8,000' },
    reason: { D1: 'The case is about tax that will come out of the money this year: {cue:D1}. It has no handover and no claim.',
              E1: 'The case shows {t:gain} made this year that will be taxed, and {t:fund} he has not sold is worth less than he paid: {cue:E1}. Selling it would set a £6,000 loss against the £12,000 gain and halve the tax.' },
    not: { outcome: 'defer', why: 'The sale was made in the spring, so there is no sale left to hold off. A loss is sitting beside the gain.' } },

  { id: 'e-ret-har-4', use: 'return', tier: 'misleading', setting: 'business', topic: 'a furious woman and an adviser’s fund which lost money',
    text: "Luz, 54, is furious with her adviser, who picked a fund that has lost £6,000 of the £20,000 she put in. She wants nothing more to do with it, but has not sold it. This year she sold a different fund for £7,000 more than she paid, so she will owe tax of £1,400. Both funds are in the same ordinary account.",
    outcome: 'harvest', route: { D1: ['erosion'], E1: ['gainloss'] },
    cues: { D1: 'she will owe tax of £1,400', E1: ['has lost £6,000 of the £20,000 she put in', 'she sold a different fund for £7,000 more than she paid, so she will owe tax of £1,400. Both funds are in the same ordinary account'] },
    reason: { D1: 'The case is about tax that will come out of the money this year: {cue:D1}. The quarrel with the adviser is not about a charge.',
              E1: 'The case shows {t:gain} made this year that will be taxed, and {t:fund} she has not sold is worth less than she paid, in the same account: {cue:E1}. Selling it would set a £6,000 loss against the £7,000 gain and leave only £1,000 to tax.' },
    not: { outcome: 'defer', why: 'The sale has been made, so there is nothing to hold off. What the case shows is a loss in the same account as {t:gain}, and her anger about the adviser is not what settles it.' } },

  /* ---------- Spend a percentage of the pot ---------- */
  { id: 'e-ret-burn-1', use: 'return', tier: 'clean', setting: 'retirement', topic: 'a sum set at retirement and a loan to a friend',
    text: "Kofi, 66, retired with £600,000 and set his spending at £30,000 a year, which was 5%. He has never reset the figure. After he lent £100,000 to a friend who has not repaid it, his pot is £500,000, so the £30,000 is 6% of it.",
    outcome: 'burnrate', route: { D1: ['erosion'], E1: ['fixedsum'] },
    cues: { D1: 'set his spending at £30,000 a year', E1: 'set his spending at £30,000 a year, which was 5%. He has never reset the figure. After he lent £100,000 to a friend who has not repaid it, his pot is £500,000, so the £30,000 is 6% of it' },
    reason: { D1: 'The case is about a sum taken out of {t:pot} every year to spend: {cue:D1}. It has no fall in prices and no handover.',
              E1: 'The sum was fixed when {t:pot} was £100,000 bigger and has not been reset: {cue:E1}. It is now a bigger share of a smaller pot.' },
    not: { outcome: 'nocut', why: 'Spending is sound when it is reset each year as a percentage of {t:pot}. Kofi set a number of pounds and left it.' } },

  { id: 'e-ret-burn-2', use: 'return', tier: 'varied', setting: 'business', topic: 'a sum set when a company was sold and a loan to a nephew',
    text: "Sibusiso sold his company at 55 and set himself £75,000 a year, 5% of the £1,500,000 he received. The next year he lent £300,000 to a nephew's new firm, which has not repaid it, and the pot is now £1,100,000. He still takes £75,000, which is about 6.8% of it.",
    outcome: 'burnrate', route: { D1: ['erosion'], E1: ['fixedsum'] },
    cues: { D1: 'He still takes £75,000', E1: 'set himself £75,000 a year, 5% of the £1,500,000 he received. The next year he lent £300,000 to a nephew\'s new firm, which has not repaid it, and the pot is now £1,100,000. He still takes £75,000, which is about 6.8% of it' },
    reason: { D1: 'The case is about a sum taken out of {t:pot} every year to spend: {cue:D1}. It has no claim and no handover.',
              E1: 'The sum was fixed when {t:pot} was £400,000 bigger and has not been reset: {cue:E1}. It is now a bigger share of a smaller pot.' },
    not: { outcome: 'nocut', why: 'The sum was never reset as a percentage of what {t:pot} is worth, and the loan made {t:pot} smaller under it.' } },

  { id: 'e-ret-burn-3', use: 'return', tier: 'clean', setting: 'health', topic: 'a widow’s sum after years of care costs',
    text: "Marguerite, 77, has taken £20,000 a year from £400,000 since her husband died, which was 5%. Care costs have since taken the pot down to £280,000, and she still takes £20,000, which is now about 7.1% of it.",
    outcome: 'burnrate', route: { D1: ['erosion'], E1: ['fixedsum'] },
    cues: { D1: 'she still takes £20,000', E1: 'has taken £20,000 a year from £400,000 since her husband died, which was 5%. Care costs have since taken the pot down to £280,000, and she still takes £20,000, which is now about 7.1% of it' },
    reason: { D1: 'The case is about a sum taken out of {t:pot} every year to spend: {cue:D1}. Nothing in it is a fall in prices or a handover.',
              E1: 'The sum was fixed when {t:pot} was £120,000 bigger and has not been reset: {cue:E1}. It is now a bigger share of a smaller pot.' },
    not: { outcome: 'nocut', why: 'Spending is sound when it is reset each year as a percentage of {t:pot}. Marguerite set a number of pounds and left it.' } },

  { id: 'e-ret-burn-4', use: 'return', tier: 'misleading', setting: 'family', topic: 'a very large pot which sounds too big to run out',
    text: "Reza, 73, set his spending at £200,000 a year when his pot was £4,000,000, which was 5%. Over the years the pot has become £2,900,000 after he gave large sums to his children, and he still takes £200,000, now about 6.9% of it. 'With this much money I can't run out,' he says.",
    outcome: 'burnrate', route: { D1: ['erosion'], E1: ['fixedsum'] },
    cues: { D1: 'he still takes £200,000', E1: 'set his spending at £200,000 a year when his pot was £4,000,000, which was 5%. Over the years the pot has become £2,900,000 after he gave large sums to his children, and he still takes £200,000, now about 6.9% of it' },
    reason: { D1: 'The case is about a sum taken out of {t:pot} every year to spend: {cue:D1}. It has no fall in prices and no handover.',
              E1: 'The sum was fixed when {t:pot} was £1,100,000 bigger and has not been reset: {cue:E1}. The size of {t:pot} does not change that the sum is a bigger share than before.' },
    not: { outcome: 'nocut', why: 'A very large pot can sound as if nothing needs cutting. But spending is only sound when it is reset as a percentage of what {t:pot} is worth, and Reza kept a number of pounds.' } }
]);
