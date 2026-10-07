// Wealth Preservation, Unit Two, part one (first half): the opening card, the word the first name leans on, and the first name.
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js.
// The app prints, and this file therefore does not contain: the reminder of Unit One, the preview map, the heading of a meet card,
// the question and its answer on a meet card, the "also called" sentence, and the stem of every commit prompt.
// A meet card: the story first, then the idea (explain), then how to spot it (spot: numbered steps, a bold action and one short
// sentence of why), then the name, then what to do (act: steps) (lesson standard section 20).

FC.cards('wealth', 'u2', [

  { id: 'orient', kind: 'orient',
    h: 'Before you fix it, find out what is taking the money',
    canDo: 'When money goes out of someone’s savings every year, find out what is taking it before you try to fix it. A fee, a tax bill and a spending habit each need a different fix, and sometimes the right fix is to leave it alone.',
    everyday: [
      'You have probably met all six of these without knowing they were different.',
      'A man reads his 401(k) statement and finds that the funds and an adviser together take 2% of his money every year. A woman pays her accountant $3,000 a year and has never asked what it buys. A couple find that the bond fund in their ordinary account is taxed every year, though they have sold nothing. A man is about to sell {t:fund} that has gone up, because a newsletter said to, and has not asked what the tax will be. A woman sold one fund at a profit and is angry about another that has fallen. A couple still take the $40,000 a year they chose when they retired, though their savings are much smaller now.',
      'Each has a different cause and a different fix, and one needs no fix at all. Cheaper funds do not lower a tax bill, and a tax move does not change how much is spent. Find out which one you are looking at before you touch anything.'
    ],
    map: { branch: 'erosion' } },         // the preview map is drawn from the key, with plain words beside each label

  /* ---------- The word the first name is built on ---------- */
  { id: 'term-indexfund', kind: 'term', term: 'indexfund',
    h: 'Funds that copy a list',
    link: 'The first name is about paying someone to pick investments. To see the alternative, you need one word.',
    case: 'e-t-index',
    plain: [
      'In the first fund, a team of managers decides every week what to buy and sell, and the team has to be paid. That is most of the 1.1%. In the second, nobody decides anything: the fund copies a published list, so there is no team to pay and the fee can be 0.1%.',
      'On $100,000 that is $1,100 a year against $100. The first fund may beat its list or fall behind it, and nobody can say which in advance. The fee is the one thing that is certain.'
    ] },

  /* ---------- A yearly fee for picking investments ---------- */
  { id: 'meet-feecore', kind: 'meet', outcome: 'feecore',     // heading is the outcome's name, from the key
    link: 'The first of the six: a yearly fee that pays for picking investments and nothing else.',
    case: 'e-m-fee', mark: 'E1',
    explain: [
      'Mara pays two fees, and both pay for the same thing: picking. The fund’s managers pick the shares, and the adviser picked the fund and has done nothing since. Together that is 2% of {t:pot}, $5,000 a year, against $250 for {t:indexfund}.',
      'Over thirty years the gap is huge. If the money grows 4% a year before fees, $250,000 becomes about $452,800 at 2% and about $787,800 at 0.1%. The picking costs Mara about $335,000, and the managers would have to beat the list by 1.9 points every year to earn it back. The fee is certain. What it buys is a hope.'
    ],
    spot: [
      { do: 'Add up every fee on the money: Mara pays 1.2% to the fund and 0.8% to the adviser, 2% in all.', why: 'Fees stack, and statements often show them on separate lines.' },
      { do: 'Ask what each fee pays for: the fund’s managers pick shares, and the adviser picked the fund.', why: 'If the answer is only picking, you are paying for a hope.' },
      { do: 'Check whether anything else is done for the money: for Mara, nothing.', why: 'A fee that also pays for real work is a different story, met next.' },
      { do: 'Compare with {t:indexfund}: 0.1%, which is $250 a year instead of $5,000.', why: 'The gap is what the picking costs you.' }
    ],
    feature: { step: 'E1', option: 'picking' },
    name: 'This is {o:feecore}. The fix is an index fund, where nobody is paid to pick.',
    act: [
      { do: 'If the fees pay only for picking, move the money into {t:indexfund}.', why: 'Mara would keep about $4,750 a year.' },
      { do: 'In an ordinary account, work out the tax on selling before you sell.', why: 'A sale can cost more in tax than the fee saves in a year or two.' }
    ] },

  { id: 'check-feecore', kind: 'check', after: 'feecore',
    case: 'e-c-fee',
    ask: { type: 'phrase', step: 'E1', say: 'Which words show what the fee pays for? Tap them.',
           answer: "The bank's yearly letter says the fee is 'for selecting the investments' and lists nothing else" } }
]);
