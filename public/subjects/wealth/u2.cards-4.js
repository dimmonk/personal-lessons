// Wealth Preservation, Unit Two, part two (first half): income taxed every year in the wrong account, and its look-alike with the sound name.

FC.cards('wealth', 'u2', [

  { id: 'meet-location', kind: 'meet', outcome: 'location',
    link: 'You have now met a charge that is a problem and a charge that is fine. The next three names are about tax. Start with the one where the tax comes every year and nothing has been sold.',
    case: 'e-m-loc', mark: 'E1',
    strip: [
      'There is one person, Ana, and two accounts with £50,000 in each: a pension, which is sheltered, and an ordinary account, which is taxed in full.',
      'The investment that pays out the most is in the ordinary account: {t:bond} fund that pays out £2,400 of interest every year.',
      'Ana pays 25% tax on that interest, £600, every year, and she has sold nothing.',
      'The pension, where income is not taxed, holds {t:fund} of shares that pays out very little.'
    ],
    explain: [
      'The tax here is on income: money an investment pays out to its owner each year, such as the interest on {t:bond} fund. It comes whether or not anything is sold, and it comes every year for as long as the fund stays where it is.',
      'Both accounts are the same size, and either fund could sit in either account. In the ordinary account, the £2,400 of interest is taxed: £600 a year. In the pension it would not be. The fund of shares pays out about £500 a year, which would cost £125 in tax in the ordinary account. So the swap, the bond fund into the pension and the fund of shares into the ordinary account, takes the yearly tax from £600 to £125, a saving of £475 a year. Money that stays in {t:pot} grows by {t:compounding}: £475 a year kept and growing at 4% is about £14,100 after twenty years.',
      'Why does it work? An investment that pays out a lot gives the tax office something to tax every year. An investment that pays out little mostly grows in price, and the tax on that growth comes only when it is sold. So the sheltered account does the most good for the investment that pays out the most.',
      'The line printed below says the sheltered account holds investments that pay out little, “or with room to spare”. Room to spare means the account is not yet full: some sheltered accounts limit how much can be paid in each year, and an account with space left can take more.',
      'The cost of the swap is small here. Inside the pension, switching funds is usually not taxed. In the ordinary account, selling the bond fund would bring tax only if it were worth much more than Ana paid for it, because tax then comes on the difference. Bond funds usually do not move much in price, so here it does not.'
    ],
    feature: { step: 'E1', option: 'incometax' },
    name: 'The name for this is {o:location}. It says what to do: put each investment in the account where it costs the least tax, which for an investment that pays out a lot is the sheltered account.' },

  { id: 'again-location', kind: 'again', outcome: 'location',
    link: 'Ana’s case gave you what to point to: {needs:location}. Here is a second case, with shares in place of bonds.',
    first: 'e-m-loc', second: 'e-a-loc', step: 'E1',
    instruction: 'Find what the two cases share. Ignore the kind of fund, bonds in one and shares in the other. Look at one thing only: the words that show tax coming every year on income the fund pays out.',
    prompt: { kind: 'phrase', answer: 'They come to £3,600 a year, and she pays 25% tax on it, £900, every year' },
    shared: [
      'Both people hold {t:fund} that pays out income in the ordinary account, and both pay tax on it every year: Ana’s £600 on interest, Hana’s £900 on dividends. In both, the pension holds {t:fund} that pays out very little, so it has room for the one that pays out more. Neither has sold anything.',
      'The funds are different kinds and the people are different ages. What they share is where the larger payout sits: in the taxed account. That is what {o:location} names.'
    ] },

  { id: 'portrait-location', kind: 'portrait', outcome: 'location',
    link: 'You now know what to point to. This card fills in the rest of the picture, so that you can spot {o:location} in real life, where nobody marks the words for you.',
    typical: [
      'It is income, not growth. The tax is on what the investment pays out: interest from bonds, dividends from shares (the part of a company’s profits that it pays out to its owners), and rent from {t:fund} that owns buildings.',
      'Some investments pay out a lot (bond funds, funds of shares chosen for high payouts, funds that pass on rent) and some pay out little (shares in firms that keep their profits to grow). The ones that pay out a lot are the ones that give the tax office something to tax every year.',
      'The tax comes without anyone doing anything. No sale is needed, so there is no moment to decide, and the person often does not know.',
      'It needs two kinds of account. A person with only one kind has nothing to move between, and the name does not apply.',
      'Nothing is spent or lost except tax. The same investments in swapped places do the same job at a lower yearly tax.'
    ],
    not: 'It is not tax on a sale. If the tax would come only if something were sold, this is not the name. And it is not a case where the investment that pays out the most is already in the sheltered account: then the tax is already about as low as it can be.',
    wild: ['"I never touch it, so why am I paying tax?"', '"The statement says interest taxed."', '"It\'s only the dividends that get taxed."', '"Put the bonds in the pension."', '"Which account should that go in?"'],
    self: 'In your own life you find it in the tax paperwork an investment account sends each year, and in the list of what each fund pays out. Look for the funds that pay out the most, and then for which account holds them.',
    ask: '"Which of my investments pays out the most each year, and which account is it in?"',
    act: [
      'First, list every investment you hold, the account it is in, and what it paid out last year.',
      'Second, mark the one or two that paid out the most. If they are in the ordinary account and {t:sheltered} holds investments that pay out little, you are probably looking at this name.',
      'Third, check how much room the sheltered account has: some accounts limit how much can be paid in.',
      'Fourth, to swap, move the income investments into the sheltered account first. Inside it, switching is usually not taxed. In the ordinary account, ask what selling would cost in tax before you sell.',
      'Fifth, if the swap would cost a lot of tax, use new money instead: put each new payment into the sheltered account until it holds what pays out the most.'
    ] },

  { id: 'check-location', kind: 'check', after: 'location',
    case: 'e-c-loc',
    ask: { type: 'option', step: 'E1', among: ['picking', 'nomore', 'incometax'] } },

  { id: 'look-location-nocut', kind: 'lookalike', ledger: 'location~nocut',
    link: 'The last name turned on where the income investments sit. The sound name had a form that turns on the same thing, and the two are easy to mix up, so here they are side by side.',
    cases: ['e-l-nocut-a', 'e-l-nocut-b'],
    instruction: 'Ravi and his brother Sunil hold the same two funds, the other way round. Compare one thing: which account holds the fund that pays out the most.',
    prompt: { kind: 'which', option: 'E1.nomore', answer: 'e-l-nocut-b' },
    difference: [
      'In Case A Ravi’s bond fund pays out £3,000 a year and sits in the ordinary account, where he pays £750 on it every year. His pension holds the fund that pays out almost nothing. The key’s answer is {a:E1.incometax}, and the case is {o:location}.',
      'In Case B Sunil has the same two funds, and the bond fund is in his pension. Its £3,000 is not taxed, and the fund of shares in his ordinary account costs him £150. That is already about as low as it can be, so nothing needs changing. The key’s answer is {a:E1.nomore}, and the case is {o:nocut}.',
      'The brothers have the same funds, the same sums and the same accounts. Only which fund is in which account differs, and that turns £750 a year of tax into £150. The first case needs a swap and the second needs nothing.'
    ] }
]);
