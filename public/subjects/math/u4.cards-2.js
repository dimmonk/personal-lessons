// Basic Math, Unit Four, Exponential growth (an amount multiplied by the same number each time, asked for after a given time),
// with the word it leans on: the number the amount is multiplied by.
// A meet card is the story first, then the idea (explain), then how to spot it (spot: numbered steps), then the name (lesson standard section 20).
// Key wording is never typed here: tokens are filled in from key.js.

FC.cards('math', 'u4', [

  /* ---------- A word Exponential growth leans on ---------- */
  { id: 'term-multiplier', kind: 'term', term: 'multiplier',
    h: 'Going up 5% means multiplying by 1.05',
    link: 'A percentage change needs one word, for the number you multiply by. Here it is first, with a price.',
    case: 'm4-wd-novel',
    plain: [
      'Going up 5% leaves a price at 105% of what it was, which is 1.05 times as much. Going down 15% leaves 85%, which is 0.85 times as much. Doubling is multiplying by 2, and halving is multiplying by 0.5.',
      'To find the number, start from 100%. Add the percentage if the amount goes up, or take it away if it goes down, then write the result as a decimal: 100% + 5% = 105% = 1.05, and 100% − 15% = 85% = 0.85.'
    ],
    after: [
      'The number you multiply by is called the {t:multiplier}. Above 1 it makes the amount bigger, and below 1 it makes it smaller.'
    ] },

  /* ---------- Exponential growth: an amount multiplied each time, asked for after a given time ---------- */
  { id: 'meet-expg', kind: 'meet', outcome: 'expg',
    link: 'Next: an amount that changes by a percentage of itself each time.',
    case: 'm4-wd-savings', mark: 'G1',
    explain: [
      'In year 1 the interest is 4% of $2,000, which is $80, so the account holds $2,080. In year 2 it is 4% of $2,080, which is $83.20, so the account holds $2,163.20. The second year’s interest is bigger because it is taken on more money.',
      'So each change is a share of what the amount is now, and going up 4% means multiplying by 1.04, once for each year. A doubling works the same way, and so does an amount that halves. The word “percent” does not decide it, and neither does “interest” or money. What decides it is that each change is a share of the amount.'
    ],
    spot: [
      { do: 'Find the one amount that changes: the money in the account.', why: 'Everything else in the problem is about this one amount.' },
      { do: 'Find the change each time: 4% a year.', why: 'A percentage or a doubling is a share of the amount, not a fixed number.' },
      { do: 'Check the share is taken on what the account holds now: the interest is left in.', why: 'That is why each change is bigger than the one before.' },
      { do: 'Find what it asks: the amount after 3 years.', why: 'A time and a missing amount means multiplying that many times.' }
    ],
    feature: { step: 'G1', option: 'multiplies' },
    name: 'This is {o:expg}. “Exponential” means growing by repeated multiplying: the amount is multiplied again, once for each time it changes.' },

  { id: 'check-expg', kind: 'check', after: 'expg',
    case: 'm4-wd-dose',
    ask: { type: 'phrase', step: 'G1', say: 'Which words show how the amount changes each time? Tap them.',
           answer: 'falls to half of what it was' } }
]);
