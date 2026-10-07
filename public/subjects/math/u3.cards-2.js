// Basic Math, Unit Three, part two: the second type (a rate scaled to a new amount), and the exception in which a price for each
// unit comes with a charge on top (it looks like a rate and is a calculation). The worked example is in u3.cards-solved-*.js.

FC.cards('math', 'u3', [

  { id: 'meet-prop', kind: 'meet', outcome: 'prop',
    link: 'Second: you know how much goes with how many, and you need the amount for a different number.',
    case: 'm3-meet-prop', mark: 'A1',
    explain: [
      'The recipe is written for 10 pancakes and you are making 24. So much flour goes with so many pancakes, and that stays true at any size: twice the pancakes needs twice the flour.',
      'To scale it, find how many times as big 24 is as 10, then make the flour that many times as big.'
    ],
    spot: [
      { do: 'Find the rate: 250 g of flour for 10 pancakes.', why: 'It says how two things go together: so much for so many.' },
      { do: 'Find the new amount: 24 pancakes.', why: 'It is a new number of one of the two things in the rate.' },
      { do: 'Find what you are asked for: the flour for 24 pancakes.', why: 'It is the other thing in the rate, at the new amount.' },
      { do: 'Check that nothing is added on top and no result is given.', why: 'A fixed charge, or a result to undo, would make it {o:rearr}.' }
    ],
    feature: { step: 'A1', option: 'rate' },
    name: 'This is {o:prop}. The two numbers stay in step: whatever happens to one happens to the other.' },

  { id: 'check-prop', kind: 'check', after: 'prop',
    case: 'm3-tap-prop',
    ask: { type: 'phrase', step: 'A1', say: 'Which words show the rate? Tap them.',
           answer: 'uses 2 ink cartridges for every 1,200 pages it prints' } },

  /* ---------- The exception: a price for each unit, with a charge on top ---------- */
  { id: 'exc-bill', kind: 'exception', ledger: 'rearr~prop', looksLike: 'prop', is: 'rearr',
    h: 'A price for each unit, with a charge on top',
    link: 'Real problems are less tidy. A price for each unit looks like a rate, so watch this bill.',
    case: 'm3-exc-bill',
    setup: 'The bill gives 25 cents for each unit of electricity, which is so much for so many, and it asks for a number of units. That looks like {a:A1.rate}. Yet the answer is {a:A1.formula}.',
    prompt: { kind: 'phrase', answer: 'a standing charge of $8' },
    because: [
      'Look at what else is in the bill: a standing charge of $8 that you pay whether you use 1 unit or 1,000. So the bill is not just 25 cents times the units. It is 8 plus 0.25 times the units.',
      'There is no new amount to scale a rate to. There is a result, the $38 bill, and you are asked what number of units produced it. A price for each thing with a fixed amount on top is {a:A1.formula}.'
    ],
    take: 'Take away the $8 and ask for the cost of 120 units at 25 cents each, and it would be {a:A1.rate}.' }
]);
