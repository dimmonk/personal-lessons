// Wealth Preservation, Unit Two: drill cases for the second stage, second part (a sale nobody needs, a loss against a gain, and a sum spent).
// None of these appears in a card.

FC.cases('wealth', 'u2', [

  /* ---------- A sale nobody needs, and a loss against a gain ---------- */
  { id: 'e-r-def-1', use: 'drill', tier: 'clean', setting: 'home', topic: 'a neighbor’s remark about a fund house',
    text: "Sofia, 56, holds a fund she bought for $80,000 that is now worth $100,000. A neighbor says the fund house has 'lost its touch', and Sofia plans to sell it and buy a different fund of the same kind. She needs no cash, and no bill is due. Selling would bring tax of 15% on the $20,000 gain, $3,000.",
    outcome: 'defer', route: { D1: ['erosion'], E1: ['needlesssale'] },
    cues: { D1: 'Selling would bring tax of 15% on the $20,000 gain, $3,000',
            E1: 'plans to sell it and buy a different fund of the same kind. She needs no cash, and no bill is due. Selling would bring tax of 15% on the $20,000 gain, $3,000' },
    reason: { D1: 'The case is about a tax bill that would come out of {t:pot}: {cue:D1}. It has no claim, no handover and no bill falling due.',
              E1: 'A sale is planned that would bring tax on {t:gain}, and nothing needs it: {cue:E1}. A remark from a neighbor is not a need, and the new fund would be much the same as the old one.' },
    not: { outcome: 'harvest', why: 'There is no loss in the case. Nothing she holds is worth less than it cost, so nothing could be set against the gain.' } },

  { id: 'e-r-har-1', use: 'drill', tier: 'clean', setting: 'business', topic: 'a café owner’s June sale and a fund below cost',
    text: "Dmitri, 57, a café owner, sold shares in June for $10,000 more than he paid, so he will owe tax of $1,500. In the same account a fund he has not sold cost $12,000 and is worth $7,000.",
    outcome: 'harvest', route: { D1: ['erosion'], E1: ['gainloss'] },
    cues: { D1: 'he will owe tax of $1,500',
            E1: 'so he will owe tax of $1,500. In the same account a fund he has not sold cost $12,000 and is worth $7,000' },
    reason: { D1: 'The case is about tax that will come out of the money this year: {cue:D1}. It has no one thing that is most of what he owns, and no handover.',
              E1: 'The case shows {t:gain} made this year that will be taxed, and {t:fund} he has not sold is worth less than he paid: {cue:E1}. Selling it would set a $5,000 loss against the $10,000 gain and halve the tax.' },
    not: { outcome: 'defer', why: 'The sale was made in June. There is no unneeded sale to hold off. What the case shows is a loss waiting beside the gain.' } },

  /* ---------- A fixed sum, and a sum reset each year ---------- */
  { id: 'e-r-burn-1', use: 'drill', tier: 'varied', setting: 'home', topic: 'two weddings and a kitchen out of a retirement pot',
    text: "Pat and Jo retired at 60 with $1,200,000 and set their spending at $48,000 a year, which was 4%. Over twelve years they have paid for two weddings and a new kitchen out of the pot, which is now $850,000. They still take $48,000 a year, which is now about 5.6% of it.",
    outcome: 'burnrate', route: { D1: ['erosion'], E1: ['fixedsum'] },
    cues: { D1: 'They still take $48,000 a year',
            E1: 'set their spending at $48,000 a year, which was 4%. Over twelve years they have paid for two weddings and a new kitchen out of the pot, which is now $850,000. They still take $48,000 a year, which is now about 5.6% of it' },
    reason: { D1: 'The case is about a sum that comes out of {t:pot} every year to live on: {cue:D1}. Nothing in it is a fall in prices, {t:claim} or a handover.',
              E1: 'The sum was fixed when {t:pot} was $350,000 bigger and has not been reset: {cue:E1}. It is now a bigger share of a smaller pot.' },
    not: { outcome: 'nocut', why: 'Spending is only sound when it is reset each year as a percentage of {t:pot}. Pat and Jo kept the same number of dollars.' } },

  { id: 'e-r-nocut-3', use: 'drill', tier: 'varied', setting: 'family', topic: 'a percentage taken on the first of January in good times',
    text: "Berta, 61, takes 4% of her pot on the first of January each year. A year ago the pot was $700,000 and she took $28,000. Now it is $770,000 after good returns, so she takes $30,800 and helps pay her granddaughter's college tuition.",
    outcome: 'nocut', route: { D1: ['erosion'], E1: ['nomore'] },
    cues: { D1: 'takes 4% of her pot on the first of January each year',
            E1: 'takes 4% of her pot on the first of January each year. A year ago the pot was $700,000 and she took $28,000. Now it is $770,000 after good returns, so she takes $30,800' },
    reason: { D1: 'The case is about a sum taken out of {t:pot} every year to spend: {cue:D1}. Nothing in it is a bill due on a date or one thing that is most of her money.',
              E1: 'The sum is worked out again each January from what {t:pot} is worth then: {cue:E1}. It is always the same share, so it can never be too large for {t:pot}.' },
    not: { outcome: 'burnrate', why: 'There is a sum taken every year, but it is a percentage of {t:pot}, not a fixed number of dollars. It rose with {t:pot} as it would have fallen with it.' } }
]);
