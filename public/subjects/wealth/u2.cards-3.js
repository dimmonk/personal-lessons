// Wealth Preservation, Unit Two, part two (first half): income taxed every year in the wrong account, and its look-alike with the sound name.

FC.cards('wealth', 'u2', [

  { id: 'meet-location', kind: 'meet', outcome: 'location',
    link: 'Now tax. This one comes every year, and nothing has been sold.',
    case: 'e-m-loc', mark: 'E1',
    explain: [
      'Ana pays tax every year on the income her bond fund pays out, whether or not she sells anything. In her ordinary account the $2,400 of interest costs $600 a year. In her IRA, which is {t:sheltered}, the same interest would cost nothing.',
      'Her two funds could swap places. The fund of shares pays out about $500 a year, which costs $75 in the ordinary account. Put the bond fund in the IRA and the shares in the ordinary account, and her yearly tax drops from $600 to $75. That saves $525 a year. An investment that pays out a lot gives the IRS something to tax every year. One that pays out little mostly grows in price, and that is taxed only when you sell.'
    ],
    spot: [
      { do: 'List each investment, its account and what it paid out last year: Ana’s bond fund paid out $2,400.', why: 'The 1099 form your brokerage sends shows it.' },
      { do: 'Find the investment that pays out the most: her bond fund.', why: 'Its payouts are what get taxed every year.' },
      { do: 'See which account holds it: the ordinary account, where Ana pays $600 a year on it.', why: 'In an IRA the same payout is not taxed that year.' },
      { do: 'Check the IRA holds something that pays out little: Ana’s IRA holds shares that pay almost nothing.', why: 'That leaves room for the bond fund to move in.' }
    ],
    feature: { step: 'E1', option: 'incometax' },
    name: 'This is {o:location}. The fix is to swap which account holds what.',
    act: [
      { do: 'Swap what the two accounts hold: the bond fund into the IRA, the shares into the ordinary account.', why: 'Switching funds inside an IRA is not taxed.' },
      { do: 'In the ordinary account, work out the tax on selling before you sell.', why: 'If the tax is large, the next step avoids it.' },
      { do: 'If the tax is large, pay each year’s new money into the sheltered account instead, up to its yearly limit.', why: 'New money shifts the balance with no sale.' }
    ] },

  { id: 'check-location', kind: 'check', after: 'location',
    case: 'e-c-loc',
    ask: { type: 'option', step: 'E1', among: ['picking', 'nomore', 'incometax'] } },

  { id: 'look-location-nocut', kind: 'lookalike', ledger: 'location~nocut',
    link: 'The same two funds can be a problem or fine. It depends on which account holds which.',
    cases: ['e-l-nocut-a', 'e-l-nocut-b'],
    instruction: 'Ravi and his brother Sunil hold the same two funds, the other way round. Compare one thing: which account holds the fund that pays out the most.',
    prompt: { kind: 'which', option: 'E1.nomore', answer: 'e-l-nocut-b' },
    difference: [
      'In Story A, Ravi’s bond fund pays out $3,000 a year and sits in his ordinary account, where he pays $750 a year on it. His IRA holds the fund that pays out almost nothing. The answer is {a:E1.incometax}, so this is {o:location}.',
      'In Story B, Sunil has the same two funds the other way round. His bond fund is in the IRA, so its $3,000 is not taxed, and his fund of shares costs him $90 in the ordinary account. That is already about as low as it gets. The answer is {a:E1.nomore}, so this is {o:nocut}.',
      'Same funds, same sums, same accounts. Only which fund sits in which account differs, and it turns $750 of tax a year into $90.'
    ] }
]);
