// Wealth Preservation, Unit Two, part two (second half, second part): a loss used against a gain, and its look-alike with a sale nobody needs.

FC.cards('wealth', 'u2', [

  { id: 'meet-harvest', kind: 'meet', outcome: 'harvest',
    link: 'The last name was about a sale that nobody needs. This one is about a sale that has already happened, and {t:gain} that will be taxed this year.',
    case: 'e-m-har', mark: 'E1',
    strip: [
      'There is one person, Sam, and an ordinary brokerage account with two things in it.',
      'He sold some shares in March, which he had held for years, for $5,000 more than he paid. That gain will be taxed this year: 15% of $5,000 is $750.',
      'He still holds {t:fund} in the same account that he has not sold. He paid $12,000 for it and it is now worth $9,000, which is $3,000 below what he paid.',
      'So there is {t:gain} being taxed, and a loss sitting beside it, not yet sold.'
    ],
    explain: [
      'Tax on gains is worked out on the tax year’s gains and losses added together. In the US the tax year is the calendar year, so it ends on December 31. Sam made $5,000, so $5,000 would be taxed. Sam’s fund is $3,000 below what he paid, but that is only a loss on paper until he sells it. If he sells it, the $3,000 loss counts against the $5,000 gain. The taxed gain falls to $2,000, and the tax from $750 to $300. He saves $450.',
      'He does not have to give up the investment. He can put the $9,000 into {t:fund} that is similar but not the same. Under the wash-sale rule, if he buys the same investment, or one substantially identical, within 30 days before or after the sale, the loss does not count.',
      'Two things must both be in the case: a sale this year that made a profit, and a second investment, still held, that is worth less than was paid for it and sits in an account where gains are taxed. Without the first, there is nothing to set the loss against. Without the second, there is no loss to use.'
    ],
    feature: { step: 'E1', option: 'gainloss' },
    name: 'The name for this is {o:harvest}.',
    act: 'Before December 31, list what you sold this year and the gain on each, and what you hold in an ordinary account that is worth less than you paid. The loss saves its size times the tax rate, up to the size of the gain. Sell the one that fell and buy a similar one that is not identical, and keep the paperwork for both.' },

  { id: 'check-harvest', kind: 'check', after: 'harvest',
    case: 'e-c-har',
    ask: { type: 'option', step: 'E1', among: ['picking', 'nomore', 'incometax', 'needlesssale', 'gainloss'] } },

  { id: 'look-defer-harvest', kind: 'lookalike', ledger: 'defer~harvest',
    link: 'The last name and the one before both involve a sale and tax on {t:gain}, and they are easy to mix up. Here is the same person with each.',
    cases: ['e-l-def-a', 'e-l-har-b'],
    instruction: 'Both cases are about Noel and {t:fund} he could sell. Compare one thing: whether a sale has already made {t:gain} that will be taxed this year.',
    prompt: { kind: 'which', option: 'E1.gainloss', answer: 'e-l-har-b' },
    difference: [
      'In Case A Noel has sold nothing this year. A friend says his fund has run too far, and a sale is only a thought. It would bring $900 of tax, and nothing needs it. Holding off removes the tax. The answer is {a:E1.needlesssale}, and the case is {o:defer}.',
      'In Case B the sale has been made: $6,000 more than he paid, so $900 of tax. And another fund in the same account is $4,500 below what he paid. Selling that one sets the loss against the gain: the taxed gain falls to $1,500 and the tax to $225, a saving of $675. The answer is {a:E1.gainloss}, and the case is {o:harvest}.',
      'In one, not selling is the answer. In the other, selling the second fund is. The words that decide are in the case: nothing sold yet and no need, or something sold already with a loss beside it.'
    ] }
]);
