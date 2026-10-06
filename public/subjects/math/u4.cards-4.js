// Basic Math, Unit Four: the look-alike pairs that a beginner really confuses, and the exception. Each look-alike card sets two
// problems of the same story side by side, one from each kind of a pair; the ledger in u4.unit.js gives the question that tells
// them apart. The other three pairs are taught on the first question’s card (taughtIn).
// Key wording is never typed here: tokens are filled in from key.js.

FC.cards('math', 'u4', [

  /* ---------- the first and second kinds: the same number each time, or a share of what there is ---------- */
  { id: 'look-lin-expg', kind: 'lookalike', ledger: 'lin~expg',
    link: 'The first and second kinds both follow an amount that changes again and again, and for a while their numbers are close. This card puts them side by side.',
    cases: ['m4-la-visits-lin', 'm4-la-visits-expg'],
    instruction: 'Both problems are about the same shop, the same 2,000 visitors and the same “every week”. Compare one thing: is the change the same number each time, or a share of what there is?',
    prompt: { kind: 'which', option: 'G1.multiplies', answer: 'm4-la-visits-expg' },
    difference: [
      'Case A says the website gains 100 more visitors every week: the same number each time, so the answer is {a:G1.adds}. Case B says its visitors grow by 5% every week: a share of what there is, so the answer is {a:G1.multiplies}.',
      'In the first week the two look the same, because 5% of 2,000 is 100. By week 6 Case A has 2,000 + 6 × 100 = 2,600 visitors and Case B has about 2,680, and after 30 weeks it is 5,000 against about 8,644. What differs is whether next week’s rise is still 100, or 5% of a bigger amount.'
    ] },

  { id: 'exc-interest-out', kind: 'exception', ledger: 'lin~expg', looksLike: 'expg', is: 'lin',
    h: 'A percentage, and still the same number each year',
    link: 'You have met {o:expg} with a percentage and {o:lin} with a plain figure. This card has a problem that carries a percentage and is the first kind all the same.',
    case: 'm4-ex-bond',
    setup: 'This problem has what usually means {o:expg}: a percentage, 3% interest a year, in a problem about money over years. But it is {o:lin}.',
    prompt: { kind: 'phrase', answer: 'The interest is paid out to him each year' },
    because: [
      'The words that settle it are “The interest is paid out to him each year, and the $5,000 itself never changes.” Every year the bond pays 3% of the same $5,000, which is $150, so the total paid goes up by the same $150 each year: after 8 years, 8 × 150 = $1,200.',
      'In the savings account the interest was left in, so each year’s share was taken on a bigger amount. Here it is taken out, so every change is the same size. A percentage tells you how big a change is. The words about whether the interest stays in tell you whether that size changes.'
    ],
    take: 'When a problem has a percentage, ask what the percentage is taken of. If it is taken of an amount that grows, it is {o:expg}. If it is taken of an amount that stays the same, the change is the same size every time, and it is {o:lin}.' },

  /* ---------- the second and third kinds: the amount, or the time ---------- */
  { id: 'look-expg-logsolve', kind: 'lookalike', ledger: 'expg~logsolve',
    link: 'The second and third kinds have the very same sort of amount, multiplied by the same number each time, and they differ only in what the problem asks. This card puts them side by side.',
    cases: ['m4-la-town-expg', 'm4-la-town-logsolve'],
    instruction: 'Both problems are about the same town, the same 8,000 people and the same 3% a year. Compare one thing: does the problem give a length of time and ask for the amount, or give a target and ask how long?',
    prompt: { kind: 'which', option: 'G2.howlong', answer: 'm4-la-town-logsolve' },
    difference: [
      'Case A gives a time, 10 years, and asks for the amount at the end of it: 8,000 multiplied by 1.03 ten times is about 10,751 people. The answer is {a:G2.willbe}. Case B gives a target, 12,000 people, and asks how long until the town gets there: counting the multiplications by 1.03 that turn 8,000 into 12,000 gives about 13.7 years. The answer is {a:G2.howlong}.',
      'The start, the 3% and the story are the same, and the two answers are very different kinds of number: people in Case A, years in Case B. Which one is missing, the amount or the time, is what decides.'
    ] },

  /* ---------- the first and fourth kinds: the change comes again, or it does not ---------- */
  { id: 'look-lin-oneoff', kind: 'lookalike', ledger: 'lin~oneoff',
    link: 'The first and fourth kinds can both be given with the same plain figure, a price that goes up by $2. This card puts them side by side.',
    cases: ['m4-la-phone-lin', 'm4-la-phone-oneoff'],
    instruction: 'Both phone plans start at $20 a month, and both are at $22 after one rise. Compare one thing: after the rise, does the price rise again, or stay where it reached?',
    prompt: { kind: 'which', option: 'G1.once', answer: 'm4-la-phone-oneoff' },
    difference: [
      'Case A says the price goes up by $2 every month: the change comes again each time, so the answer is {a:G1.adds}. After 6 months it is $20 + 6 × $2 = $32. Case B says the price went up to $22 in January and has stayed at $22 since: the change was made one time, so the answer is {a:G1.once}. After 6 months it is still $22.',
      'Both start at $20 and both have risen by $2. What differs is whether the rise comes again: the words “every month” say that it does, and “has stayed” says that it does not.'
    ] }
]);
