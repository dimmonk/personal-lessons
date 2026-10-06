// Wealth Preservation, Unit Two, part one (first half): the opening card, the word the first name leans on, and the first name.
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js.
// The app prints, and this file therefore does not contain: the reminder of Unit One, the preview map, the heading of a meet card,
// "what you must be able to point to", the question and its answer on a meet card, the "also called" sentence, and the stem of every
// commit prompt.

FC.cards('wealth', 'u2', [

  { id: 'orient', kind: 'orient',
    h: 'Before any fix: what is taking the money out?',
    canDo: 'After this unit you can read a short account of someone whose savings have money taken out of them every year, say what is taking it out, and say what to do about it, which is sometimes to leave it alone. You will point to the words in the account that show it.',
    everyday: [
      'You have probably met all six of these, and not known they were different.',
      'A man reads his 401(k) statement and finds that the fund and an adviser together take 2% of his money every year. A woman pays an accountant $3,000 a year and has never thought about it. A couple find that the bond fund they keep outside their IRAs is taxed every year, though they have sold nothing. A man is about to sell {t:fund} that has gone up, because a newsletter said to, and has not asked what the tax will be. A woman has sold one fund at a profit and is angry about another that has fallen. And a couple take the same $40,000 a year that they chose when they retired, though their savings are much smaller now.',
      'Each has a different cause and a different fix, and one of them needs no fix at all. Cheaper funds do not lower a tax bill, and a tax move does not change how much is spent. This unit teaches you to tell the six apart before you touch anything.'
    ],
    map: { branch: 'erosion' } },         // the preview map is drawn from the key, with plain words beside each label

  /* ---------- The word the first name is built on ---------- */
  { id: 'term-indexfund', kind: 'term', term: 'indexfund',
    h: 'Funds where nobody picks the investments',
    link: 'The first of the six names is about paying someone to choose investments. To see what the alternative is, you need one word.',
    case: 'e-t-index',
    plain: [
      'Both funds hold shares in about 500 companies. In the first, a team of managers decides every week what to buy and sell, and the team has to be paid: that is most of the 1.1%. In the second, nobody decides anything. The fund copies a published list, so there is no team to pay for choosing, and the charge can be 0.1%.',
      'On $100,000, that is $1,100 a year for the first fund and $100 for the second. The first fund may do better than its list, or worse, and nobody can say in advance. What is certain is the charge.'
    ] },

  /* ---------- A yearly charge for picking investments ---------- */
  { id: 'meet-feecore', kind: 'meet', outcome: 'feecore',     // heading is the outcome's plain words, from the key
    link: 'Here is the first of the six names: a charge that is for choosing investments and for nothing else.',
    case: 'e-m-fee', mark: 'E1',
    strip: [
      'There is one person, Mara, and one pot: $250,000 in an IRA, all in one fund.',
      'Two charges come out of it every year: 1.2% to the fund, whose managers pick the shares, and 0.8% to an adviser’s firm that recommended the fund.',
      'Both charges are for choosing: the managers choose the shares, and the adviser chose the fund. The case says the adviser has done nothing else since.',
      'Together they are 2% of {t:pot}, $5,000 a year. With {t:indexfund} it would be about 0.1%, $250.'
    ],
    explain: [
      'A charge is a payment for something, so the first question to put to any charge is what it pays for. Here the answer is the same for both: choosing. Neither is paid for anything else, and nobody does anything else for Mara. A letter may call it “selection”, “research” or “our team”: all of those mean choosing.',
      'Now the numbers. $5,000 a year is 2% of $250,000, against $250 for {t:indexfund}, so $4,750 a year goes to the people who choose. Money taken out does not grow. Say {t:pot} would grow 4% a year before any charge. After thirty years, $250,000 becomes about $787,800 at the index fund’s 0.1%, and about $452,800 at 2%. The choosing costs about $335,000.',
      'Could the managers make up for it? They would have to beat the list by about 1.9 points every year. Some do in some years, and nobody can say beforehand which. The charge is taken whether they do or not. The charge is certain. What it buys is a hope.'
    ],
    feature: { step: 'E1', option: 'picking' },
    name: 'The name for this is {o:feecore}.',
    act: 'Add up every charge (the fund’s, the account’s and the adviser’s) as a percentage and as dollars a year, and ask what each one pays for. If it is only choosing, move the money into {t:indexfund}. In an ordinary brokerage account, ask what selling would cost in tax before you sell.' },

  { id: 'check-feecore', kind: 'check', after: 'feecore',
    case: 'e-c-fee',
    ask: { type: 'phrase', step: 'E1', say: 'Which words show what the charge pays for? Tap them.',
           answer: "The bank's yearly letter says the charge is 'for selecting the investments' and lists nothing else" } }
]);
