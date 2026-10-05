// Wealth Preservation, Unit Two, part one (second half): what is story and what is structure, what the first name is like, a wrong
// idea about it, and the word the second name leans on.

FC.cards('wealth', 'u2', [

  { id: 'lens', kind: 'lens',
    h: 'The story never decides the answer',
    link: 'The last card asked you to ignore the story. That instruction holds for the whole unit, so here it is once in full.',
    body: [
      'Every case in this unit has two layers. The top layer is the story: a pension, a flat, a retirement, a shop. The layer underneath is what is taking money out of {t:pot} every year, and that is the only layer the key asks about.',
      'The six names belong to the layer underneath. A pension can carry any of them, and so can a rented flat. Size is part of the story too: a charge of £250 and a charge of £25,000 can be the same name, and a charge of £3,000 can be a problem in one case and fine in the next.',
      'Two more things change on purpose. One is who is paid: {t:fund}, an adviser, the tax office, or the person themselves. The other is whether anything is wrong at all. In some cases what comes out is worth it, or already as low as it can be, and one of the six names is for those. Seeing that is part of the skill, and not looking for a problem the case does not show is part of seeing it.'
    ],
    fixed: ['what is taking money out of {t:pot} every year, which is what the key asks about: {q:E1}'],
    varies: ['the kind of account', 'the people', 'the size of the sums', 'who is paid', 'whether anything is wrong at all'] },

  { id: 'portrait-feecore', kind: 'portrait', outcome: 'feecore',
    link: 'You now know what to point to. This card fills in the rest of the picture, so that you can spot {o:feecore} in real life, where nobody marks the words for you.',
    typical: [
      'The charge is a percentage of {t:pot}, so it grows when {t:pot} does. A pot that doubles pays twice as much for the same choosing.',
      'It is usually split into layers: the fund’s own charge, the charge of the platform, which is the firm or website that holds the account, and the adviser’s. Each is a small percentage, and the total is what counts.',
      'It comes out of the fund’s price or out of the account without a bill. Nobody is asked to pay; the balance is simply a little lower than it would have been.',
      'The letter that describes it uses words like “selection”, “research”, “our team” or “our house view”. Those words all name choosing. A charge for choosing is the same thing whatever it is called.',
      'The person is often content. They do not know what {t:fund} that copies a published list charges, so they have nothing to compare it with.'
    ],
    not: 'A charge is not this name just because it is large, or because it is a percentage. What decides it is what the charge pays for. If the case shows named work that would not otherwise get done, at a set price, then the charge is not for choosing alone, and this name does not apply, however large the price looks. Nor does a good record change the name: two good years do not change what the charge pays for.',
    wild: ['"It\'s only 1% a year."', '"The fund takes its charge out of the price, so you never see it."', '"Our research team selects the best funds for you."', '"My adviser looks after all that."', '"The fund has beaten the market, so it has earned its charge."'],
    self: 'In your own life you find it in the line of a statement headed “ongoing charges” or “total expense”, in the letter that says what the adviser is paid, and in the fund’s own fact sheet. Add up every layer before you decide whether the total is small.',
    ask: '"What does this charge pay for, and how much is it every year in pounds?" If the answer is "choosing the investments" and nothing else, you are probably looking at this name.',
    act: [
      'First, find every charge and add them up: the fund’s yearly charge, the platform’s, and the adviser’s. Write the total as a percentage and as pounds a year on your pot.',
      'Second, ask what each charge pays for. Ask the adviser in writing what they have done for you since they recommended the funds.',
      'Third, find what {t:fund} that copies a published list charges, and work out the difference in pounds a year.',
      'Fourth, find out what switching would cost. In a pension, selling the old fund and buying the new one usually brings no tax. In an ordinary account, selling can bring tax on any profit you have made, so ask for that figure before you sell.',
      'Fifth, if nothing else is paid for, move the money into funds that copy a published list. Write down the date and the old and new charges, so that you can check later that the change did what you expected.'
    ] },

  { id: 'check-feecore', kind: 'check', after: 'feecore',
    case: 'e-c-fee',
    ask: { type: 'phrase', step: 'E1', say: 'Which words show what the charge pays for? Tap them.',
           answer: "The bank's yearly letter says the charge is 'for selecting the investments' and lists nothing else" } },

  { id: 'refute-adviser', kind: 'refute', about: 'feecore',
    h: 'A wrong idea: “a good adviser picks winners, so a high fee is worth it”',
    link: 'The picture of {o:feecore} said that the charge is certain and that what it buys is a hope. That hope is what keeps many people paying, and it rests on an idea nearly everyone holds.',
    idea: '"A good adviser picks funds that beat the market, so a high fee is worth it."',
    verdict: 'This is wrong, in two ways.',
    right: [
      'First, the fee and the winning are not the same kind of thing. The fee is certain: it is taken every year whatever happens. Beating the list is a hope, and it has to cover the fee before it is worth anything. If {t:fund} charges 1.9% and {t:fund} that copies its list charges 0.1%, the managers must beat the list by about 1.8 points every year just to leave you where you would have been.',
      'Second, a few years of winning do not show that winning will go on. A manager who has beaten the list for two years has not shown that the next two will go the same way. What the charge pays for is the attempt to choose, and the attempt is paid for whether it works or not.',
      'So when someone says a high fee is worth it because of what the adviser can pick, ask what the charge pays for besides picking, and what the price would be if you simply took the list. If there is no other work, the charge is for choosing, and the case is {o:feecore}.'
    ],
    testedBy: ['e-p-fee', 'e-r-fee-2'] },

  /* ---------- A word the second name leans on ---------- */
  { id: 'term-sheltered', kind: 'term', term: 'sheltered',
    h: 'Two kinds of account',
    link: 'The next name is about a cost that is already worth paying or already as low as it can be. One of the ways a cost can be as low as it can be depends on the kind of account the investments sit in, so first a word for it.',
    case: 'e-t-shelter',
    plain: [
      'Leila holds the same fund in two places, and she pays different tax on it. In the pension, the law does not tax the £1,600 the fund pays out each year; it taxes what she takes out in old age. In the ordinary account, the £1,600 is taxed in full every year, and she pays 25% of it, £400. The fund, the amount and the income are the same. Only the place differs.',
      'Which accounts are taxed less, and how, differs from country to country and changes often, so the cases in this unit use a general version: a pension is the sheltered account, and an ordinary investment account is not. The key’s own name for an ordinary investment account, taxed in full, is a taxable account, and the cases may use either. The tax rate of 25% on income is an example to show how the idea works.'
    ],
    after: [
      'So a person who has both kinds of account has a choice about which investment goes where. Over the years that choice decides how much tax is paid on the income. An investment that pays out little costs almost nothing to hold in an ordinary account, and one that pays out a lot costs the most there.',
      'Where things are held is the one thing about tax that a person controls without selling anything.'
    ] }
]);
