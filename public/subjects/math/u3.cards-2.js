// Basic Math, Unit Three, part two: the second kind (a rate scaled to a new amount), and the exception in which a price for each
// unit comes with a charge on top (it looks like a rate and is a calculation). The worked example is in u3.cards-solved-*.js.

FC.cards('math', 'u3', [

  { id: 'meet-prop', kind: 'meet', outcome: 'prop',
    link: 'The second kind of problem has a few numbers too, and one of them is missing. What it gives is different, and it is what you do whenever you stretch a recipe.',
    case: 'm3-meet-prop', mark: 'A1',
    strip: [
      'The problem gives a rate: 250 g of flour for 10 pancakes, so much for so many.',
      'It gives a new amount of one of the two things in the rate: 24 pancakes.',
      'The missing number is what the other thing becomes at the new amount: how much flour.',
      'No calculation has been done and no result is given. All that is known is that the two numbers go together at that rate.'
    ],
    explain: [
      'What you are shown is a rate, so much of one thing for so many of another, and a new amount of one of them. The recipe was written for 10 pancakes, and you want 24. The question is what the other number becomes at the new amount.',
      'The steps: find how many times as big the new amount is as the amount in the rate, and make the other number that many times as big.'
    ],
    feature: { step: 'A1', option: 'rate' },
    name: 'A problem like this is {o:prop}. The name says what the steps keep: the two numbers stay in step, so that whatever happens to one happens to the other.' },

  { id: 'check-prop', kind: 'check', after: 'prop',
    case: 'm3-tap-prop',
    ask: { type: 'phrase', step: 'A1', say: 'Which words show the rate? Tap them.',
           answer: 'uses 2 ink cartridges for every 1,200 pages it prints' } },

  /* ---------- The exception: a price for each unit, with a charge on top ---------- */
  { id: 'exc-bill', kind: 'exception', ledger: 'rearr~prop', looksLike: 'prop', is: 'rearr',
    h: 'A price for each unit, with a charge on top',
    link: 'Real problems are less tidy. Here is a bill with a price for each unit in it, which is exactly what a rate looks like.',
    case: 'm3-exc-bill',
    setup: 'The bill gives 25 cents for each unit of electricity, which is so much for so many, and it asks for a number of units. That is what you point to for {a:A1.rate}. Yet the answer for this case is {a:A1.formula}.',
    prompt: { kind: 'phrase', answer: 'a standing charge of $8' },
    because: [
      'Look at what else the bill contains. There is a standing charge of $8 that does not depend on the number of units: it is paid whether 1 unit or 1,000 units are used. So the bill is not 25 cents multiplied by the units. It is 8 plus 0.25 times the units, a calculation with two parts.',
      'There is no new amount to scale a rate to. There is a result, the bill of $38, and the question is what number of units went into the calculation to produce it. When a price for each thing comes with a fixed amount on top, the answer is {a:A1.formula}.'
    ],
    take: 'Without the $8, a bill of 25 cents for each unit, asked for 120 units, would be a rate and a new amount, and the answer would be {a:A1.rate}.' }
]);
