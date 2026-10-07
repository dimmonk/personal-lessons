// Basic Math, Unit Four: the look-alike pairs that a beginner really confuses, and the exception. Each look-alike card sets two
// problems with the same story side by side, one from each name of a pair; the ledger in u4.unit.js gives the question that tells
// them apart. The other three pairs are taught on the first question’s card (taughtIn).
// Key wording is never typed here: tokens are filled in from key.js.

FC.cards('math', 'u4', [

  /* ---------- Linear growth and Exponential growth: the same number each time, or a share of what there is ---------- */
  { id: 'look-lin-expg', kind: 'lookalike', ledger: 'lin~expg',
    link: 'Both follow an amount that changes again and again, and for a while the numbers are close. Here they are side by side.',
    cases: ['m4-la-visits-lin', 'm4-la-visits-expg'],
    instruction: 'Both problems have the same shop, the same 2,000 visitors and the same “every week”. Compare one thing: is the change the same number each time, or a share of what there is?',
    prompt: { kind: 'which', option: 'G1.multiplies', answer: 'm4-la-visits-expg' },
    difference: [
      'The first problem says the website gains 100 more visitors every week: the same number each time, so the answer is {a:G1.adds}. The second says its visitors grow by 5% every week: a share of what there is, so the answer is {a:G1.multiplies}.',
      'In week 1 they look the same, because 5% of 2,000 is 100. By week 6 the first has 2,000 + 6 × 100 = 2,600 visitors and the second has about 2,680. After 30 weeks it is 5,000 against about 8,644. What differs is whether next week’s rise is still 100, or 5% of a bigger amount.'
    ] },

  { id: 'exc-interest-out', kind: 'exception', ledger: 'lin~expg', looksLike: 'expg', is: 'lin',
    h: 'A percentage, and still the same number each year',
    link: 'Most percentages mean {o:expg}. This problem has a percentage and is {o:lin} all the same.',
    case: 'm4-ex-bond',
    setup: 'This problem has the usual signs of {o:expg}: 3% interest a year, money, years. But it is {o:lin}.',
    prompt: { kind: 'phrase', answer: 'The interest is paid out to him each year' },
    because: [
      'The words that settle it are “The interest is paid out to him each year, and the $5,000 itself never changes.” Every year the bond pays 3% of the same $5,000, which is $150. The total paid grows by the same $150 a year: after 8 years, 8 × 150 = $1,200.',
      'In the savings account the interest stayed in, so each year’s share was taken on more money. Here it is paid out, so every change is the same size.'
    ],
    take: 'When a problem has a percentage, ask what it is a percentage of. If the amount grows, it is {o:expg}. If the amount stays the same, every change is the same size, and it is {o:lin}.' },

  /* ---------- Exponential growth and Logarithm: the amount, or the time ---------- */
  { id: 'look-expg-logsolve', kind: 'lookalike', ledger: 'expg~logsolve',
    link: 'These two have the same amount, multiplied by the same number each time. They differ only in what the problem asks. Here they are side by side.',
    cases: ['m4-la-town-expg', 'm4-la-town-logsolve'],
    instruction: 'Both problems have the same town, the same 8,000 people and the same 3% a year. Compare one thing: does the problem give a time and ask for the amount, or give a target and ask how long?',
    prompt: { kind: 'which', option: 'G2.howlong', answer: 'm4-la-town-logsolve' },
    difference: [
      'The first problem gives a time, 10 years, and asks for the amount: 8,000 multiplied by 1.03 ten times is about 10,751 people. So the answer is {a:G2.willbe}. The second gives a target, 12,000 people, and asks how long: counting the multiplications by 1.03 that turn 8,000 into 12,000 gives about 13.7 years. So the answer is {a:G2.howlong}.',
      'The start, the 3% and the town are the same. The two answers are different kinds of number: people in one, years in the other. What is missing decides it.'
    ] },

  /* ---------- Linear growth and A one-time change: the change comes again, or it does not ---------- */
  { id: 'look-lin-oneoff', kind: 'lookalike', ledger: 'lin~oneoff',
    link: 'Both can start with the same plain figure: a price that goes up by $2. Here they are side by side.',
    cases: ['m4-la-phone-lin', 'm4-la-phone-oneoff'],
    instruction: 'Both phone plans start at $20 a month, and both are at $22 after one rise. Compare one thing: after the rise, does the price rise again, or stay put?',
    prompt: { kind: 'which', option: 'G1.once', answer: 'm4-la-phone-oneoff' },
    difference: [
      'The first problem says the price goes up by $2 every month: the change comes again, so the answer is {a:G1.adds}. After 6 months it is $20 + 6 × $2 = $32. The second says the price went up to $22 in January and has stayed at $22 since: the change happened once, so the answer is {a:G1.once}. After 6 months it is still $22.',
      'Both start at $20 and both rise by $2. “Every month” says the rise comes again, and “has stayed” says it does not.'
    ] }
]);
