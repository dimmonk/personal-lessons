// Wealth Preservation, Unit Two, part two (second half, first part): the word for a profit on paper, tax on a sale nobody needs, and its
// look-alike with income taxed every year.

FC.cards('wealth', 'u2', [

  { id: 'term-gain', kind: 'term', term: 'gain',
    h: 'A profit on paper',
    link: 'The next two names are about tax on a sale. Before them, one word for what makes tax come with a sale.',
    case: 'e-t-gain',
    plain: [
      'Tomás paid $10,000 for his shares, and they are now worth $16,000. On paper he is $6,000 better off. But he has not sold anything. Nobody has paid him $6,000, and no money has changed hands.',
      'Nothing is due while Tomás holds the shares. If he sells them all, he has made $6,000 more than he paid, and tax is due on that $6,000. At 15%, that is $900. If he sells none, the tax is nothing. If the shares had fallen to $7,000 instead, he would be $3,000 below what he paid. That is a loss, not {t:gain}.'
    ],
    after: 'The cases that follow assume everything sold was held for more than a year, and use 15% on a gain and 25% on interest and rent. Rates change, so these are examples; the idea holds: what has not been sold has not been taxed.' },

  { id: 'meet-defer', kind: 'meet', outcome: 'defer',
    link: 'The tax in the last cards came every year without a sale. This tax comes only if something is sold.',
    case: 'e-m-def', mark: 'E1',
    strip: [
      'There is one person, Imogen, and one fund: she paid $24,000, and it is now worth $30,000. The gain is $6,000, on paper.',
      'A sale is planned: her adviser suggests selling it all to move into another fund, which is much like the one she holds.',
      'The sale would bring tax of 15% on the gain, $900.',
      'The case shows nothing that needs the sale: Imogen has no bill to pay and no need for the cash.'
    ],
    explain: [
      'Ask what the sale is for. Her adviser says to lock in the profit. But a profit on paper is already hers, and selling does not make it more hers; it only makes it taxable. The money would go into {t:fund} much like the one she sells, so nothing about her position changes except that $900 goes to the IRS.',
      'Sell: the $30,000 becomes $29,100 to invest after $900 of tax. Do not sell: $30,000 stays invested, and the $900 she did not pay keeps working with the rest.',
      'Not selling does not make the $6,000 free of tax for ever. If Imogen sells one day, the gain, which may be larger by then, will be taxed. What she gains is time: the tax is paid later, and the money she did not pay out has been working in the meantime.',
      'A sale can also be unneeded because new money could do the same job. Say a person chose a mix of 60% shares and 40% bonds, and after a good year shares have risen to 62%. An adviser says to sell some shares and buy bonds, to put it back. If the person is about to pay in new money, putting all of it into bonds does the same thing with no sale, and so no tax.'
    ],
    feature: { step: 'E1', option: 'needlesssale' },
    name: 'The name for this is {o:defer}.',
    act: 'Ask what the sale is for, and work out the tax in dollars: what it is worth now, minus what you paid, times the tax rate. If the reason is only a remark, a hunch or a wish to tidy up, do not sell. See whether new money could do the same job. If a sale is truly needed, sell the part with the smallest gain first.' },

  { id: 'check-defer', kind: 'check', after: 'defer',
    case: 'e-c-def',
    ask: { type: 'option', step: 'E1', among: ['picking', 'nomore', 'incometax', 'needlesssale'] } },

  { id: 'look-location-defer', kind: 'lookalike', ledger: 'location~defer',
    link: 'Both of the last two names are about tax on money held in an ordinary account, and they are easy to mix up. Here is the same person with each.',
    cases: ['e-l-loc-a', 'e-l-loc-b'],
    instruction: 'Both cases are about Imani and her ordinary account. Compare one thing: whether the tax arrives without a sale, or only if one is made.',
    prompt: { kind: 'which', option: 'E1.needlesssale', answer: 'e-l-loc-b' },
    difference: [
      'In Case A the tax is $500 a year on the interest of {t:bond} fund, and Imani sells nothing. It comes every year for as long as the fund stays where it is. The answer is {a:E1.incometax}, and the case is {o:location}.',
      'In Case B nothing is taxed yet. The tax of $900 would come only if she sold the fund of shares, and nothing needs her to. If she does not sell, there is nothing to pay. The answer is {a:E1.needlesssale}, and the case is {o:defer}.',
      'One tax comes every year whatever Imani does, and the other comes only if she acts. The fix for the first is to move {t:fund} to another account. The fix for the second is to leave the fund where it is.'
    ] }
]);
