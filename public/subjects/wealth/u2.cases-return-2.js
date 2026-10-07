// Wealth Preservation, Unit Two: fresh cases kept back for later days (second file: a sale nobody needs, a loss against a gain, and a
// fixed sum from a pot that has shrunk; two cases for each name).

FC.cases('wealth', 'u2', [

  /* ---------- Delay the tax by not selling ---------- */
  { id: 'e-ret-def-1', use: 'return', tier: 'clean', setting: 'family', topic: 'a cousin who says it is time to cash in',
    text: "Ulrike, 60, holds a fund she bought for $50,000 that is now worth $80,000. A cousin tells her it is 'time to cash in', and she is about to sell it all. She needs no cash. Selling would bring tax of 15% on the $30,000 gain, $4,500.",
    outcome: 'defer', route: { D1: ['erosion'], E1: ['needlesssale'] },
    cues: { D1: 'Selling would bring tax of 15% on the $30,000 gain, $4,500', E1: 'she is about to sell it all. She needs no cash. Selling would bring tax of 15% on the $30,000 gain, $4,500' },
    reason: { D1: 'A tax bill would come out of {t:pot}: {cue:D1}. There is no claim, no handover and no bill falling due.',
              E1: 'A sale is about to be made that would bring tax on {t:gain}, and nothing needs it: {cue:E1}. A cousin saying it is time to cash in is not a need.' },
    not: { outcome: 'harvest', why: 'Nothing has been sold yet, and nothing else in the story is worth less than it cost. So there is no loss to set against the gain.' } },

  { id: 'e-ret-def-4', use: 'return', tier: 'misleading', setting: 'work', topic: 'a sale to put the mix back after a strong spell', also: ['timing'],
    text: "Ingrid, 58, planned to keep her savings as 70% shares and 30% bonds. After a strong year her shares are worth $420,000 and her bonds $150,000, so shares are now about 74% of the whole. Her adviser says to sell $21,000 of shares and buy bonds to put the mix back. That sale would bring tax of 15% on a $10,000 gain, $1,500. Ingrid is about to pay in $30,000 of new money.",
    outcome: 'defer', route: { D1: ['erosion'], E1: ['needlesssale'] },
    cues: { D1: 'That sale would bring tax of 15% on a $10,000 gain, $1,500', E1: 'sell $21,000 of shares and buy bonds to put the mix back. That sale would bring tax of 15% on a $10,000 gain, $1,500. Ingrid is about to pay in $30,000 of new money' },
    reason: { D1: 'Her mix has moved from its plan, which can look like {a:D1.timing}. But the sale to fix it would bring a tax bill ({cue:D1}) that new money could avoid, so the first answer is {a:D1.erosion}.',
              E1: 'A sale is planned that would bring tax on {t:gain}, and nothing needs it: {cue:E1}. $30,000 of new money put into bonds makes them $180,000 of $600,000, which is 30%, so her mix is back with no sale.' },
    not: { outcome: 'harvest', why: 'There is no loss in the story, and no sale has been made this year. The story is about a sale being planned.' } },

  /* ---------- Use a loss to cut tax ---------- */
  { id: 'e-ret-har-1', use: 'return', tier: 'clean', setting: 'work', topic: 'a sale this season and a fund below cost, in one account',
    text: "Jamal, 45, sold a fund this year for $5,500 more than he paid, so he will owe tax of $825 on that gain. In the same brokerage account he holds a fund he has not sold, which cost $10,000 and is now worth $7,000.",
    outcome: 'harvest', route: { D1: ['erosion'], E1: ['gainloss'] },
    cues: { D1: 'he will owe tax of $825 on that gain', E1: 'so he will owe tax of $825 on that gain. In the same brokerage account he holds a fund he has not sold, which cost $10,000 and is now worth $7,000' },
    reason: { D1: 'Tax will come out of the money this year: {cue:D1}. There is no handover and no one thing that is most of what he owns.',
              E1: 'A sale this year made {t:gain} that will be taxed, and {t:fund} he has not sold is worth less than he paid: {cue:E1}. Selling it would set a $3,000 loss against the $5,500 gain and cut the tax by $450.' },
    not: { outcome: 'defer', why: 'The sale has been made, so there is nothing to hold off. What the story shows is a loss waiting beside the gain.' } },

  { id: 'e-ret-har-4', use: 'return', tier: 'misleading', setting: 'business', topic: 'a furious woman and an adviser’s fund which lost money',
    text: "Luz, 54, is furious with her adviser, who picked a fund that has lost $6,000 of the $20,000 she put in. She wants nothing more to do with it, but has not sold it. This year she sold a different fund for $7,000 more than she paid, so she will owe tax of $1,050. Both funds are in the same brokerage account.",
    outcome: 'harvest', route: { D1: ['erosion'], E1: ['gainloss'] },
    cues: { D1: 'she will owe tax of $1,050', E1: ['has lost $6,000 of the $20,000 she put in', 'she sold a different fund for $7,000 more than she paid, so she will owe tax of $1,050. Both funds are in the same brokerage account'] },
    reason: { D1: 'Tax will come out of the money this year: {cue:D1}. The quarrel with the adviser is not about a fee.',
              E1: 'A sale this year made {t:gain} that will be taxed, and {t:fund} she has not sold is worth less than she paid, in the same account: {cue:E1}. Selling it would set a $6,000 loss against the $7,000 gain and leave only $1,000 to tax.' },
    not: { outcome: 'defer', why: 'The sale has been made, so there is nothing to hold off. What the story shows is a loss in the same account as the gain, and her anger at the adviser does not settle it.' } },

  /* ---------- Spend a percentage of the pot ---------- */
  { id: 'e-ret-burn-1', use: 'return', tier: 'clean', setting: 'retirement', topic: 'a sum set at retirement and a loan to a friend',
    text: "Kofi, 66, retired with $600,000 and set his spending at $30,000 a year, which was 5%. He has never reset the figure. After he lent $100,000 to a friend who has not repaid it, his pot is $500,000, so the $30,000 is 6% of it.",
    outcome: 'burnrate', route: { D1: ['erosion'], E1: ['fixedsum'] },
    cues: { D1: 'set his spending at $30,000 a year', E1: 'set his spending at $30,000 a year, which was 5%. He has never reset the figure. After he lent $100,000 to a friend who has not repaid it, his pot is $500,000, so the $30,000 is 6% of it' },
    reason: { D1: 'A sum comes out of {t:pot} every year to spend: {cue:D1}. There is no fall in prices and no handover.',
              E1: 'The sum was fixed when {t:pot} was $100,000 bigger and has not been reset: {cue:E1}. It is now a bigger share of a smaller pot.' },
    not: { outcome: 'nocut', why: 'Spending is sound when it is reset each year as a percentage of {t:pot}. Kofi set a number of dollars and left it.' } },

  { id: 'e-ret-burn-4', use: 'return', tier: 'misleading', setting: 'family', topic: 'a very large pot which sounds too big to run out',
    text: "Reza, 73, set his spending at $200,000 a year when his pot was $4,000,000, which was 5%. Over the years the pot has become $2,900,000 after he gave large sums to his children, and he still takes $200,000, now about 6.9% of it. 'With this much money I can't run out,' he says.",
    outcome: 'burnrate', route: { D1: ['erosion'], E1: ['fixedsum'] },
    cues: { D1: 'he still takes $200,000', E1: 'set his spending at $200,000 a year when his pot was $4,000,000, which was 5%. Over the years the pot has become $2,900,000 after he gave large sums to his children, and he still takes $200,000, now about 6.9% of it' },
    reason: { D1: 'A sum comes out of {t:pot} every year to spend: {cue:D1}. There is no fall in prices and no handover.',
              E1: 'The sum was fixed when {t:pot} was $1,100,000 bigger and has not been reset: {cue:E1}. A very large pot does not change that the sum is a bigger share than before.' },
    not: { outcome: 'nocut', why: 'A very large pot can sound as if nothing needs cutting. But spending is only sound when it is reset as a percentage of what {t:pot} is worth, and Reza kept a number of dollars.' } }
]);
