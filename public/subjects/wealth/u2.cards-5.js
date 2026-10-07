// Wealth Preservation, Unit Two, part two (second half, second part): a loss used against a gain, and its look-alike with a sale nobody needs.

FC.cards('wealth', 'u2', [

  { id: 'meet-harvest', kind: 'meet', outcome: 'harvest',
    link: 'The last name was about a sale nobody needs. This one starts after a sale has already happened.',
    case: 'e-m-har', mark: 'E1',
    explain: [
      'Sam will pay tax on a $5,000 gain: 15% is $750. But tax on gains is worked out on the year’s gains and losses added together, and Sam has a loss waiting. The fund he has not sold cost $12,000 and is now worth $9,000. If he sells it, that $3,000 loss cancels part of the gain. The taxed gain falls to $2,000, the tax from $750 to $300, and he saves $450 ($3,000 at 15%).',
      'He does not have to give up the investment. He can put the $9,000 into a similar fund that is not the same one. Under the wash-sale rule, if he buys the same investment, or one almost identical, within 30 days before or after the sale, the loss does not count. In the US the tax year ends on December 31.'
    ],
    spot: [
      { do: 'Find a sale this year at a profit: Sam sold shares in March for $5,000 more than he paid.', why: 'Without a taxed gain, a loss has nothing to cancel.' },
      { do: 'Find an unsold investment worth less than was paid: Sam’s fund cost $12,000 and is worth $9,000.', why: 'Without a loss, there is nothing to use.' },
      { do: 'Check the fund sits in an ordinary account: Sam holds it in his brokerage account.', why: 'A loss inside an IRA cannot be set against the gain.' }
    ],
    feature: { step: 'E1', option: 'gainloss' },
    name: 'This is {o:harvest}. Sell the fund that fell, and its loss cancels part of the gain.',
    act: [
      { do: 'Before December 31, list what you sold this year and the gain on each.', why: 'That is the gain you can cancel.' },
      { do: 'List what you hold in an ordinary account that is worth less than you paid.', why: 'Each one is a loss you could use.' },
      { do: 'Sell the one that fell and buy a similar fund that is not identical.', why: 'You stay invested, and the wash-sale rule does not cancel the loss.' },
      { do: 'Keep the paperwork for both sales.', why: 'You need it to show the loss on your tax return.' }
    ] },

  { id: 'check-harvest', kind: 'check', after: 'harvest',
    case: 'e-c-har',
    ask: { type: 'option', step: 'E1', among: ['picking', 'nomore', 'incometax', 'needlesssale', 'gainloss'] } },

  { id: 'look-defer-harvest', kind: 'lookalike', ledger: 'defer~harvest',
    link: 'Both involve a sale and tax on {t:gain}. The difference is whether the sale has already happened.',
    cases: ['e-l-def-a', 'e-l-har-b'],
    instruction: 'Both stories are about Noel and his funds. Compare one thing: whether a sale has already made {t:gain} that will be taxed this year.',
    prompt: { kind: 'which', option: 'E1.gainloss', answer: 'e-l-har-b' },
    difference: [
      'In Story A, Noel has sold nothing this year. A friend says his fund has “run too far”, and a sale is only a thought. It would bring $900 of tax, and nothing needs it. Holding off removes the tax. The answer is {a:E1.needlesssale}, so this is {o:defer}.',
      'In Story B, the sale has been made: $6,000 more than he paid, so $900 of tax. Another fund in the same account is $4,500 below what he paid. Selling that one cancels part of the gain: the taxed gain falls to $1,500, the tax to $225, and he saves $675. The answer is {a:E1.gainloss}, so this is {o:harvest}.',
      'In one, not selling is the answer. In the other, selling the second fund is. Look for the words: nothing sold yet and no need, or a sale already made with a loss beside it.'
    ] }
]);
