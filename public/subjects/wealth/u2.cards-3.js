// Wealth Preservation, Unit Two, part two (first half): income taxed every year in the wrong account, and its look-alike with the sound name.

FC.cards('wealth', 'u2', [

  { id: 'meet-location', kind: 'meet', outcome: 'location',
    link: 'The next three names are about tax. Start with the one where the tax comes every year and nothing has been sold.',
    case: 'e-m-loc', mark: 'E1',
    strip: [
      'There is one person, Ana, and two accounts with $50,000 in each: an IRA, which is {t:sheltered}, and an ordinary brokerage account, which is taxed every year.',
      'The investment that pays out the most is in the ordinary account: {t:bond} fund that pays out $2,400 of interest every year.',
      'Ana pays 25% tax on that interest, $600, every year, and she has sold nothing.',
      'The IRA, where income is not taxed, holds {t:fund} of shares that pays out very little.'
    ],
    explain: [
      'The tax here is on income: money an investment pays out to its owner each year, such as the interest on {t:bond} fund. It comes whether or not anything is sold, every year, for as long as the fund stays where it is.',
      'Both accounts are the same size, and either fund could sit in either. In the brokerage account the $2,400 of interest costs $600 a year in tax; in the IRA it would cost nothing. The fund of shares pays out about $500 a year, which would cost $75 in the brokerage account. So swapping them, the bond fund into the IRA and the fund of shares into the brokerage account, takes the yearly tax from $600 to $75, a saving of $525 a year.',
      'Why does it work? An investment that pays out a lot gives the IRS something to tax every year. One that pays out little mostly grows in price, and the tax on that comes only when it is sold. So the sheltered account does the most good for the investment that pays out the most. “Room to spare” means this year’s payments into the IRA have not reached its yearly limit.'
    ],
    feature: { step: 'E1', option: 'incometax' },
    name: 'The name for this is {o:location}.',
    act: 'List each investment, the account it is in and what it paid out last year; the 1099 form a brokerage sends shows it. If the one that pays out the most sits in the taxed account, swap what each account holds. Inside the sheltered account, switching funds is not taxed. In the ordinary account, ask what selling would cost in tax first, and if it is a lot, put each year’s new money into the sheltered account instead, up to its yearly limit.' },

  { id: 'check-location', kind: 'check', after: 'location',
    case: 'e-c-loc',
    ask: { type: 'option', step: 'E1', among: ['picking', 'nomore', 'incometax'] } },

  { id: 'look-location-nocut', kind: 'lookalike', ledger: 'location~nocut',
    link: 'One form of the sound name turns on the same thing as the last name: which account holds the income investment. The two are easy to mix up.',
    cases: ['e-l-nocut-a', 'e-l-nocut-b'],
    instruction: 'Ravi and his brother Sunil hold the same two funds, the other way round. Compare one thing: which account holds the fund that pays out the most.',
    prompt: { kind: 'which', option: 'E1.nomore', answer: 'e-l-nocut-b' },
    difference: [
      'In Case A Ravi’s bond fund pays out $3,000 a year and sits in the ordinary account, where he pays $750 on it every year. His IRA holds the fund that pays out almost nothing. The answer is {a:E1.incometax}, and the case is {o:location}.',
      'In Case B Sunil has the same two funds, and the bond fund is in his IRA. Its $3,000 is not taxed, and the fund of shares in his brokerage account costs him $90. That is already about as low as it can be, so nothing needs changing. The answer is {a:E1.nomore}, and the case is {o:nocut}.',
      'The brothers have the same funds, the same sums and the same accounts. Only which fund is in which account differs, and that turns $750 a year of tax into $90.'
    ] }
]);
