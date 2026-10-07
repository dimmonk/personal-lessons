// Wealth Preservation, Unit Two, part two (second half, first part): the word for a profit on paper, tax on a sale nobody needs, and its
// look-alike with income taxed every year.

FC.cards('wealth', 'u2', [

  { id: 'term-gain', kind: 'term', term: 'gain',
    h: 'A profit on paper',
    link: 'Two of the next names are about tax on a sale. First, one word for the profit that triggers it.',
    case: 'e-t-gain',
    plain: [
      'Tomás paid $10,000 for his shares, and they are now worth $16,000. On paper he is $6,000 better off. But he has sold nothing, so nobody has paid him that $6,000.',
      'Nothing is due while he holds the shares. If he sells them all, he has made $6,000 more than he paid, and tax is due on that $6,000: at 15%, $900. If he sells none, the tax is nothing. If the shares had fallen to $7,000 instead, he would be $3,000 below what he paid. That is a loss, not {t:gain}.'
    ],
    after: 'The stories that follow assume everything sold was held for more than a year, and use 15% on a gain and 25% on interest and rent. Rates change, so these are examples. The idea holds: what has not been sold has not been taxed.' },

  { id: 'meet-defer', kind: 'meet', outcome: 'defer',
    link: 'The last tax came every year without a sale. This one comes only if you sell.',
    case: 'e-m-def', mark: 'E1',
    explain: [
      'Imogen’s adviser says to “lock in the profit”. But a profit on paper is already hers. Selling does not make it more hers, it only makes it taxable. She would move the money into a very similar fund, so nothing changes except that $900 goes to the IRS. Sell, and $30,000 becomes $29,100 to invest. Do not sell, and the full $30,000 keeps working.',
      'Not selling does not make the $6,000 tax-free for ever. If she sells one day, the gain, maybe larger by then, is taxed. What she gains is time: she pays later, and the $900 keeps working in the meantime.'
    ],
    spot: [
      { do: 'Check that something has gone up: Imogen paid $24,000 and it is now worth $30,000.', why: 'With no gain there is no tax.' },
      { do: 'Find the planned sale: her adviser wants her to sell it all and move into a similar fund.', why: 'The tax comes only if the sale happens.' },
      { do: 'Work out the tax: a $6,000 gain at 15% is $900.', why: 'That is the price of the sale.' },
      { do: 'Ask what the sale is for: Imogen has no bill to pay and no need for the cash.', why: 'A remark, a hunch or a wish to tidy up is not a reason.' }
    ],
    feature: { step: 'E1', option: 'needlesssale' },
    name: 'This is {o:defer}. If nothing needs the sale, do not make it.',
    act: [
      { do: 'If the reason is only a remark, a hunch or a wish to tidy up, do not sell.', why: 'The tax you do not pay keeps working for you.' },
      { do: 'See whether new money could do the same job: if shares have drifted from 60% to 62% of your mix, put your next payments into bonds.', why: 'That restores your 60/40 split with no sale and no tax.' },
      { do: 'If a sale is truly needed, sell the part with the smallest gain first.', why: 'That part brings the smallest tax bill.' }
    ] },

  { id: 'check-defer', kind: 'check', after: 'defer',
    case: 'e-c-def',
    ask: { type: 'option', step: 'E1', among: ['picking', 'nomore', 'incometax', 'needlesssale'] } },

  { id: 'look-location-defer', kind: 'lookalike', ledger: 'location~defer',
    link: 'Both are tax on money in an ordinary account. One arrives every year, and the other only if you sell.',
    cases: ['e-l-loc-a', 'e-l-loc-b'],
    instruction: 'Both stories are about Imani and her ordinary account. Compare one thing: whether the tax arrives without a sale, or only if one is made.',
    prompt: { kind: 'which', option: 'E1.needlesssale', answer: 'e-l-loc-b' },
    difference: [
      'In Story A, Imani pays $500 a year in tax on the interest of her bond fund, and sells nothing. It comes every year while the fund stays where it is. The answer is {a:E1.incometax}, so this is {o:location}.',
      'In Story B, nothing is taxed yet. The $900 would come only if she sold the fund of shares, and nothing needs her to. The answer is {a:E1.needlesssale}, so this is {o:defer}.',
      'One tax comes every year whatever Imani does. The other comes only if she acts. The fix for the first is to move {t:fund} to another account. The fix for the second is to leave the fund where it is.'
    ] }
]);
