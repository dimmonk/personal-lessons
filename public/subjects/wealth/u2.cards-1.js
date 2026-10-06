// Wealth Preservation, Unit Two, part one (first half): the opening card, the two words the first name leans on, and the first name.
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js.
// The app prints, and this file therefore does not contain: the reminder of Unit One, the preview map, the heading of a meet card,
// "what you must be able to point to", the key's question and answer on a meet card, the "also called" sentence, the stem of every
// commit prompt, and the heading of an again or portrait card.

FC.cards('wealth', 'u2', [

  { id: 'orient', kind: 'orient',
    h: 'Before any fix: what is taking the money out?',
    canDo: 'After this unit you can read a short account of someone whose savings have money taken out of them every year, say what is taking it out, and say what to do about it, which is sometimes to leave it alone. You will point to the words in the account that show it.',
    everyday: [
      'You have probably met all six of these, and not known they were different.',
      'A man reads his 401(k) statement and finds that the fund and an adviser together take 2% of his money every year. A woman pays an accountant $3,000 a year and has never thought about it. A couple find that the bond fund they keep outside their IRAs is taxed every year, though they have sold nothing. A man is about to sell {t:fund} that has gone up, because a newsletter said to, and has not asked what the tax will be. A woman has sold one fund at a profit and is angry about another that has fallen. And a couple take the same $40,000 a year that they chose when they retired, though their savings are much smaller now.',
      'All six are about money leaving {t:pot} every year. Each has a different cause and a different fix, and one of them needs no fix at all. A fix for one does nothing for another: cheaper funds do not lower a tax bill, and a tax move does not change how much is spent. This unit teaches you to tell the six apart before you touch anything.'
    ],
    map: { branch: 'erosion' } },         // the preview map is drawn from the key, with plain words beside each label

  /* ---------- Two words the first name is built on ---------- */
  { id: 'term-compounding', kind: 'term', term: 'compounding',
    h: 'Growth on growth',
    link: 'Several of the six things in this unit are small sums that come out of {t:pot} every year. A small sum taken every year costs far more than the sum, and one word explains why.',
    case: 'e-t-compound',
    plain: [
      'Look at what Jo’s fund did. In the first year it grew by $4,000, which is 4% of $100,000. In the second year it grew by $4,160, not $4,000, because the 4% was worked out on $104,000. The extra $160 is growth on last year’s growth. Each year the growth is added to money that already holds the earlier growth.',
      'Here is what $100,000 becomes at 4% a year if nothing is put in or taken out. After 10 years it is $148,024. After 20 years it is $219,112. After 30 years it is $324,340. The first ten years add $48,024. The last ten add $105,228, more than twice as much. The pile grows faster the bigger it gets.',
      'Now take a little out each year. Suppose a charge of 1% of {t:pot} is taken every year, so that about 3% is left to grow instead of 4%. After 10 years {t:pot} is $134,392, not $148,024. After 20 years it is $180,611, not $219,112. After 30 years it is $242,726, not $324,340. The 1% has cost $81,614, which is about a quarter of the pile, though 1% sounds like very little.',
      'It costs a quarter because 1% is a quarter of the 4% that grows each year, and the growth builds on itself. Each year’s 1% is gone, and so is everything it would have earned in every year after.'
    ],
    after: [
      'So a cost taken from {t:pot} every year costs more than the sum itself: it also costs everything that sum would have earned. That is why this unit takes a few percent a year seriously, and why the sums in the cases that follow are shown as dollars a year and, where it matters, as what they become.',
      'The 4% here is an example, chosen to show how the arithmetic works. It is not a promise, and nobody can promise a return.'
    ] },

  { id: 'term-indexfund', kind: 'term', term: 'indexfund',
    h: 'Funds where nobody picks the investments',
    link: 'The first of the six names is about paying someone to choose investments. To see what the alternative is, you need one more word.',
    case: 'e-t-index',
    plain: [
      'Both funds hold shares in about 500 companies, so on the surface they look alike. The difference is who decides what is in them. In the first, a team of managers decides every week, and the team has to be paid: that is most of the 1.1%. In the second, nobody decides anything. The published list says what is in it, and the fund copies the list. There is no team to pay for choosing, so the charge can be 0.1%.',
      'On $100,000, that is $1,100 a year for the first fund and $100 a year for the second, a difference of $1,000 every year.',
      'The second fund does what its list does, less its 0.1%. The first fund may do better than its list, or worse. Nobody can say in advance. What is certain is the charge.'
    ],
    after: 'Nothing about it is clever. It is cheap because it leaves out the one expensive step, choosing.' },

  /* ---------- A yearly charge for picking investments ---------- */
  { id: 'meet-feecore', kind: 'meet', outcome: 'feecore',     // heading is the outcome's plain words, from the key
    link: 'You now have two words: how a cost taken every year adds up, and what {t:fund} that copies a list costs. Here is the first of the six names, a case where the charge is for choosing and for nothing else.',
    case: 'e-m-fee', mark: 'E1',
    strip: [
      'There is one person, Mara, and one pot: $250,000 in an IRA, all in one fund.',
      'Two charges come out of it every year: 1.2% to the fund, whose managers pick the shares, and 0.8% to an adviser’s firm that recommended the fund.',
      'Both charges are for choosing: the managers choose the shares, and the adviser chose the fund. The case says the adviser has done nothing else since.',
      'Together they are 2% of {t:pot}, $5,000 a year. Funds that copy a published list charge about 0.1%, which here would be $250.'
    ],
    explain: [
      'A charge is a payment for something, so the first question to put to any charge is what it pays for. Here the answer is the same for both: choosing. The managers are paid to decide what the fund buys and sells. The adviser was paid to decide which fund Mara should hold. Neither is paid for anything else, and nobody does anything else for her.',
      'Now the numbers. $5,000 a year is 2% of $250,000, and the fund that copies a list would take $250. The difference, $4,750, comes out of Mara’s pot every year and goes to the people who choose. And as the card on growth on growth showed, money taken out does not grow. Suppose {t:pot} would grow 4% a year before any charge. After thirty years, at 3.9% after the index fund’s 0.1%, $250,000 becomes about $787,800. At 2% after both charges, it becomes about $452,800. The choosing costs about $335,000.',
      'Could the managers’ choices make up for it? To match the index fund they would have to beat the list by about 1.9 points every year, which is how much more Mara pays. Some managers do in some years. Nobody can say beforehand which will, and the charge is taken whether they do or not. The charge is certain. What it buys is a hope.',
      'That is why this is a problem to fix and not just a fact to note. The fix is to own the same kind of investments in a way that nobody is paid to choose.'
    ],
    feature: { step: 'E1', option: 'picking' },
    name: 'The name for this is {o:feecore}. It says what to do: move the money into funds that copy a published list, so that nobody is paid to choose. Such {t:fund} is {t:indexfund}. The name covers the problem and the way out together, and this unit uses it that way from now on.' },

  { id: 'again-feecore', kind: 'again', outcome: 'feecore',
    link: 'The last card gave you what to point to, from one case: {needs:feecore}. Here is a second case with a different story.',
    first: 'e-m-fee', second: 'e-a-fee', step: 'E1',
    instruction: 'Find what the two cases share. Ignore who is paid and ignore the sums. Look at one thing only: the words that show what the charge is for.',
    prompt: { kind: 'phrase', answer: "An adviser chose her funds and takes 1% of her pot every January, $3,100, for what the yearly letter calls 'selecting the right funds for you'. The funds take 1.1% on top." },
    shared: [
      'Both people are charged a percentage of {t:pot} every year, and in both the charge is for choosing: managers choosing shares, an adviser choosing funds. And in both the case says nothing else is done for the money after the choice was made. Mara’s adviser has done nothing else since; Rosa has not heard from hers since the first meeting.',
      'The stories differ in age, in size and in who is paid. What they share is a percentage of {t:pot} taken every year for choosing the investments and for nothing else. That is what {o:feecore} names.'
    ] }
]);
