// Wealth Preservation, Unit Two, part two (second half, second part): a loss used against a gain, and its look-alike with a sale nobody needs.

FC.cards('wealth', 'u2', [

  { id: 'meet-harvest', kind: 'meet', outcome: 'harvest',
    link: 'The last name was about a sale that nobody needs. This one is about a sale that has already happened, and {t:gain} that will be taxed this year.',
    case: 'e-m-har', mark: 'E1',
    strip: [
      'There is one person, Sam, and an ordinary investment account with two things in it.',
      'He sold some shares in March for £5,000 more than he paid. That gain will be taxed this year: 20% of £5,000 is £1,000.',
      'He still holds {t:fund} in the same account that he has not sold. He paid £12,000 for it and it is now worth £9,000, which is £3,000 below what he paid.',
      'So there is {t:gain} being taxed, and a loss sitting beside it, not yet sold.'
    ],
    explain: [
      'Tax on gains is worked out on the tax year’s gains and losses added together. A tax year is the twelve months over which the tax office adds up what you made, and it does not always match the calendar year. If he made £5,000 and nothing else, £5,000 is taxed. If he made £5,000 and also had a loss of £3,000, the net is £2,000, and only that is taxed. So a loss that is sold in the same year as {t:gain} lowers the tax on the gain.',
      'Sam’s fund is £3,000 below what he paid, but that is only a loss on paper until he sells it. If he sells it, the £3,000 loss counts against the £5,000 gain. The taxed gain falls to £2,000, and the tax from £1,000 to £400. He saves £600.',
      'He does not have to give up the investment. He can put the £9,000 into {t:fund} that is similar but not the same, so that his money stays invested in much the same way. Many countries have a waiting period before you may buy back the very same investment, so check yours.',
      'The saving is real, but it is not magic. The new fund starts at £9,000, so if prices come back, the gain to tax later will be bigger. What he gets is £600 now, and £600 kept in {t:pot} grows by {t:compounding}: at 4% for twenty years, about £1,315.',
      'Two things must both be in the case. One is a sale this year that made a profit, which will be taxed. The other is a second investment, still held, that is worth less than was paid for it and sits in an account where gains are taxed. Without the first, there is nothing to set the loss against. Without the second, there is no loss to use.'
    ],
    feature: { step: 'E1', option: 'gainloss' },
    name: 'The name for this is {o:harvest}. It says what to do: use a loss that is already there to cut the tax on the gain. A loss is only worth something for tax once the investment that fell is sold.' },

  { id: 'again-harvest', kind: 'again', outcome: 'harvest',
    link: 'Sam’s case gave you what to point to: {needs:harvest}. Here is a second case, at a different time of life.',
    first: 'e-m-har', second: 'e-a-har', step: 'E1',
    instruction: 'Find what the two cases share. Ignore the age and the sums. Look at one thing only: the words that show {t:gain} that will be taxed, and another investment, not sold, worth less than was paid.',
    prompt: { kind: 'phrase', answer: 'which will bring tax of £1,600 on that gain. Her ordinary account still holds a fund of shares she has not sold. She paid £15,000 for it and it is now worth £11,000' },
    shared: [
      'Both people have sold something this year at {t:gain}, £5,000 and £8,000, and will pay tax on it. Both still hold, in the same account, {t:fund} they have not sold that is worth less than they paid. Neither has decided to sell it.',
      'Their ages, their sums and their stories differ. What they share is the pair: {t:gain} taxed this year and a loss waiting beside it. That is what {o:harvest} names.'
    ] },

  { id: 'portrait-harvest', kind: 'portrait', outcome: 'harvest',
    link: 'You now know what to point to. This card fills in the rest of the picture, so that you can spot {o:harvest} in real life, where nobody marks the words for you.',
    typical: [
      'It comes after a sale in a good year, when a person has taken a profit and is looking at the tax.',
      'The other investment is one the person bought and that has since fallen. They have usually not sold it, because selling feels like admitting the loss.',
      'The loss must sit in an account where gains are taxed. In a pension, where nothing is taxed in this way, there is no tax for a loss to cut.',
      'How much the loss saves is the loss times the tax rate. A £3,000 loss at 20% saves £600. A loss bigger than the gain cannot wipe out more than the gain in that year, though many places let the rest be used later.',
      'The person can keep the money invested: sell the fallen investment and put the money into a similar one. There is often a waiting period before the very same investment may be bought back, and it differs from place to place.'
    ],
    not: 'A loss on its own is not this name: with no gain to be taxed, there is nothing to set it against. A profit made this year, with no other investment below what it cost, is not this name either: there is no loss to use. And it is not a way to make money. It only lowers a tax bill that the sale of something else has made.',
    wild: ['"I sold the winner. Now there\'s tax."', '"That fund is under what I paid, but I\'m not selling at a loss."', '"We should sell the losers before the end of the tax year."', '"Can I set one against the other?"', '"I\'ll wait for it to come back."'],
    self: 'In your own life you meet it near the end of the tax year, when the statement shows what you sold, what you made on it and what you still hold below what you paid for it. Put the two lists side by side.',
    ask: '"Have I sold anything this year at {t:gain}, and is anything I still hold worth less than I paid?"',
    act: [
      'First, list what you have sold this tax year and the gain on each.',
      'Second, list what you hold in an ordinary account that is worth less than you paid for it.',
      'Third, work out the tax saved: the loss times the tax rate, up to the size of the gain.',
      'Fourth, check your country’s waiting period before the same investment may be bought back. If there is one, choose a similar investment that is not identical.',
      'Fifth, sell the one that fell and buy the similar one before the tax year ends, and keep the paperwork that shows both.'
    ] },

  { id: 'check-harvest', kind: 'check', after: 'harvest',
    case: 'e-c-har',
    ask: { type: 'option', step: 'E1', among: ['picking', 'nomore', 'incometax', 'needlesssale', 'gainloss'] } },

  { id: 'look-defer-harvest', kind: 'lookalike', ledger: 'defer~harvest',
    link: 'The last name and the one before both involve a sale, tax on {t:gain} and {t:fund} Noel could sell, and they are easy to mix up. Here is the same person with each.',
    cases: ['e-l-def-a', 'e-l-har-b'],
    instruction: 'Both cases are about Noel and {t:fund}. Compare one thing: whether a sale has already made {t:gain} that will be taxed this year.',
    prompt: { kind: 'which', option: 'E1.gainloss', answer: 'e-l-har-b' },
    difference: [
      'In Case A Noel has sold nothing this year. A friend says his fund has run too far, and a sale is only a thought. It would bring £1,200 of tax, and nothing needs it. Holding off removes the tax. The key’s answer is {a:E1.needlesssale}, and the case is {o:defer}.',
      'In Case B the sale has been made: £6,000 more than he paid, so £1,200 of tax. And another fund in the same account is £4,500 below what he paid. Selling that one sets the loss against the gain: the taxed gain falls to £1,500 and the tax to £300, a saving of £900. The key’s answer is {a:E1.gainloss}, and the case is {o:harvest}.',
      'Both involve £1,200 and {t:fund} Noel could sell. In one, not selling is the answer. In the other, selling the second fund is. The words that decide are in the case: nothing sold yet and no need, or something sold already with a loss beside it.'
    ] }
]);
