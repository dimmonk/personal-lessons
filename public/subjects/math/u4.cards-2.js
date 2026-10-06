// Basic Math, Unit Four, the second kind (an amount multiplied by the same number each time, asked for after a given time),
// with the word it leans on: the number the amount is multiplied by.
// Key wording is never typed here: tokens are filled in from key.js.

FC.cards('math', 'u4', [

  /* ---------- A word the second kind leans on ---------- */
  { id: 'term-multiplier', kind: 'term', term: 'multiplier',
    h: 'What an amount is multiplied by when it goes up 5%',
    link: 'The second kind of problem is about an amount that changes by a percentage, and it needs one word, for the number that does the multiplying. Here it is first, in a situation you can hold in your hands.',
    case: 'm4-wd-novel',
    plain: [
      'A price that goes up 5% becomes 105% of what it was, which is 1.05 times as much. So going up 5% is the same as multiplying by 1.05. Going down 15% leaves 85% of what it was, which is 0.85 times as much. Doubling is multiplying by 2, and halving is multiplying by 0.5.',
      'To find the number in a problem about a percentage, start from 100%, add the percentage if the amount goes up, or take it away if it goes down, and write the result as a decimal: 100% + 5% = 105% = 1.05, and 100% − 15% = 85% = 0.85.'
    ],
    after: [
      'A {t:multiplier} above 1 makes the amount bigger and one below 1 makes it smaller.'
    ] },

  /* ---------- The second kind: an amount multiplied each time, asked for after a given time ---------- */
  { id: 'meet-expg', kind: 'meet', outcome: 'expg',
    link: 'The first kind changed the amount by the same number each time. The second kind changes it by the same share of itself each time, and the difference only shows up after a while.',
    case: 'm4-wd-savings', mark: 'G1',
    strip: [
      'There is one amount to follow: the money in the account. It starts at $2,000.',
      'Every year it changes by 4%, and 4% of what? Of what the account holds at that moment. The interest is left in, so next year’s 4% is taken on a bigger amount.',
      'The question gives a time, 3 years, and asks for the amount at the end of it.'
    ],
    explain: [
      'In year 1 the interest is 4% of $2,000, which is $80, so the account holds $2,080. In year 2 it is 4% of $2,080, which is $83.20, so the account holds $2,163.20. The interest in year 2 is bigger, because it is taken on more money. That is the difference from the first kind, in which every change was the same size.',
      'A change that is a percentage of what the amount is now is the same as multiplying the amount by the same number each time: going up 4% is multiplying by 1.04, once for each year. What decides the kind is not the word “percent”, or “interest”, or money. It is that each change is a share of what the amount has reached, so each change is bigger than the one before when the amount is growing, and smaller when it is shrinking. A doubling is the same kind, and so is an amount that halves.'
    ],
    feature: { step: 'G1', option: 'multiplies' },
    name: 'A problem like this is {o:expg}. The word “exponential” is the mathematician’s word for “by repeated multiplying”: the amount is multiplied again and again, once for each time it changes.' },

  { id: 'check-expg', kind: 'check', after: 'expg',
    case: 'm4-wd-dose',
    ask: { type: 'phrase', step: 'G1', say: 'Which words show how the amount changes each time? Tap them.',
           answer: 'falls to half of what it was' } }
]);
