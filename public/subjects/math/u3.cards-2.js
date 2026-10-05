// Basic Math, Unit Three, part two: the second kind (a rate scaled to a new amount), its look-alike with the first kind, and the
// exception in which a price for each unit comes with a charge on top (it looks like a rate and is a calculation).
// The worked examples are in u3.cards-solved-*.js.

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
      'What you are shown is a rate, so much of one thing for so many of another, and a new amount of one of them. The rate says how the two numbers go together, and the question is what the other number becomes at the new amount. The recipe was written for 10 pancakes, and you want 24.',
      'The procedure scales the rate. It finds how many times as big the new amount is as the amount in the rate, and makes the other number that many times as big. You could also work out the flour for one pancake and multiply, but that needs a tidy number for one pancake, and the procedure here works with whatever numbers the rate has.',
      'Notice what decides the kind. It is not the recipe or the grams. It is that the problem gives so much for so many and a new amount of what the rate is for, and nothing is added on top. If a fixed charge were added on top of the rate, the problem would give a calculation instead, and that is a different kind, with a different procedure.'
    ],
    feature: { step: 'A1', option: 'rate' },
    name: 'A problem like this is {o:prop}. The name says what the procedure keeps: the two numbers stay in step, so that whatever happens to one happens to the other.' },

  { id: 'again-prop', kind: 'again', outcome: 'prop',
    link: 'The recipe gave you what to point to: {needs:prop}. Here is a second problem with a different story, a school trip instead of a recipe.',
    first: 'm3-meet-prop', second: 'm3-again-prop', step: 'A1',
    instruction: 'Find what the two problems share. Ignore the story (pancakes, a school trip) and ignore the numbers. Look at one thing only: which words give the rate?',
    prompt: { kind: 'phrase', answer: 'needs 4 adults for every 24 children' },
    shared: [
      'Both problems give so much for so many, 250 g of flour for 10 pancakes and 4 adults for every 24 children, and then a new amount of one of the two things, 24 pancakes and 60 children. In both, the missing number is what the other thing becomes, and nothing is added on top.',
      'That is all you point to, and it is why one name covers a recipe and a school trip. The story differs. What is given is the same.'
    ] },

  { id: 'portrait-prop', kind: 'portrait', outcome: 'prop',
    link: 'You know what to point to for {o:prop}. This card fills in the rest of the picture, so that you can spot it where nobody marks the words for you.',
    typical: [
      'A rate: so much for so many of something, such as 9 rolls for €4, 12 eggs for 3 cakes or 250 g of flour for 10 pancakes.',
      'A new amount of one of the two things in the rate, bigger or smaller than the amount in the rate.',
      'The missing number is the other thing, at the new amount. It can be the one that comes second in the sentence or the one that comes first.',
      'Words such as “for every”, “for each”, “per” and “at that rate” are common, but often the problem just says “so much for so many”.'
    ],
    not: [
      'A rate alone is not enough: a problem needs the new amount as well. And a fixed charge added on top of a price for each thing turns the problem into a calculation with a result to undo, which is a different kind. You will meet that pair side by side in this unit.',
      'A rate for each hour, day, month or year is not this kind either. It follows an amount over time, and Unit One taught that it belongs to a different family of problems.'
    ],
    wild: ['"It says 250 g for 10 pancakes. I am making 24."', '"Twelve eggs make 3 cakes, and I want 7 cakes."', '"Nine rolls cost €4, so what do 27 cost?"', '"The recipe serves 4 and I have 10 guests."'],
    self: 'In your own life you meet this when you stretch or shrink a recipe, when you work out what a bigger or smaller amount of something should cost at the shop’s price, and when you convert between units at a fixed rate.',
    ask: '"Is something given as so much for so many, is there a new amount of one of the two, and is nothing added on top?" If you can say yes, you are probably looking at this kind.' },

  { id: 'check-prop', kind: 'check', after: 'prop',
    case: 'm3-tap-prop',
    ask: { type: 'phrase', step: 'A1', say: 'Which words show the rate? Tap them.',
           answer: 'uses 2 ink cartridges for every 1,200 pages it prints' } },

  { id: 'check-prop-last', kind: 'check', after: 'prop', case: 'm3-ck-prop-last', ask: { type: 'solve', solve: 'last' } },
  { id: 'check-prop-whole', kind: 'check', after: 'prop', case: 'm3-ck-prop-whole', ask: { type: 'solve', solve: 'whole' } },

  /* ---------- The look-alike pair: a calculation with a result, or a rate with a new amount ---------- */
  { id: 'look-rearr-prop', kind: 'lookalike', ledger: 'rearr~prop',
    link: 'The first two kinds are easy to mix up, because both have a few numbers and a price in them, and in both one number is missing. This card puts them side by side.',
    cases: ['m3-la-loaf-rearr', 'm3-la-loaf-prop'],
    instruction: 'Both problems are at the same bakery and have a loaf and a price in them. Compare one thing: is there a calculation with a result it came to, or only a rate and a new amount?',
    prompt: { kind: 'which', option: 'A1.rate', answer: 'm3-la-loaf-prop' },
    difference: [
      'In Case A Jon buys three loaves and a pastry, and pays €11 in all. The loaves and the pastry are put together in one calculation, and the question is what one loaf cost. There is a result to undo, and the answer is {a:A1.formula}.',
      'In Case B the bakery sells four loaves for €12, and the question is what ten loaves cost. There is a rate and a new amount, and nothing else, and the answer is {a:A1.rate}.',
      'Both have a loaf, a price and a few small numbers, and the working for one can look like the working for the other. What differs is what is given: a calculation and its result, or a rate and a new amount.'
    ] },

  /* ---------- The exception: a price for each unit, with a charge on top ---------- */
  { id: 'exc-bill', kind: 'exception', ledger: 'rearr~prop', looksLike: 'prop', is: 'rearr',
    h: 'A price for each unit, with a charge on top',
    link: 'The last card kept the two kinds apart with a loaf in each. Real problems are less tidy. Here is a bill with a price for each unit in it, which is exactly what a rate looks like.',
    case: 'm3-exc-bill',
    setup: 'The bill gives 25 cents for each unit of electricity, which is so much for so many, and it asks for a number of units. That is what you point to for {a:A1.rate}. Yet the answer for this case is {a:A1.formula}.',
    prompt: { kind: 'phrase', answer: 'a standing charge of €8' },
    because: [
      'Look at what else the bill contains. There is a standing charge of €8 that does not depend on the number of units: it is paid whether 1 unit or 1,000 units are used. So the bill is not 25 cents multiplied by the units. It is 8 plus 0.25 times the units, a calculation with two parts.',
      'And look at what the problem gives. There is no new amount to scale a rate to. There is a result, the bill of €38, and the question is what number of units went into the calculation to produce it. That is working backwards from a result.',
      'So the problem shows both: a price for each thing, which looks like a rate, and a fixed amount added on top, which makes it a calculation. When it shows both, the answer is {a:A1.formula}.'
    ],
    take: [
      'This is a decision made for the questions, and the line it draws is a fine one. A fixed amount on top of a rate, such as a call-out fee or a standing charge, makes a calculation. Without the €8, the same bill would be a rate, 25 cents for each unit, and the question would need a number of units to scale it to.',
      'If the problem had said only that 25 cents is charged for each unit, and asked for the cost of 120 units, there would be a rate and a new amount, and nothing else, and the answer would be {a:A1.rate}.'
    ] }
]);
