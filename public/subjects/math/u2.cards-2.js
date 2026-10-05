// Basic Math, Unit Two, part two: the second kind (breaking one number into the primes that make it, or into every way it
// splits), the word "factor" it leans on, and the look-alike card that sets it beside the first kind.
// The worked examples (kind solved) are in u2.cards-solved-*.js.

FC.cards('math', 'u2', [

  /* ---------- A word the second kind leans on ---------- */
  { id: 'term-factor', kind: 'term', term: 'factor',
    h: 'A number that shares another out exactly',
    link: 'The second kind of problem takes one number apart, and it needs a word for the numbers that share it out exactly. Here it is first, in a situation you can hold in your hands.',
    case: 'wd-boxes',
    plain: [
      'The baker’s 12 rolls can be packed in boxes of 3, and they fill 4 boxes exactly. They can be packed in boxes of 4, and they fill 3 boxes exactly. Boxes of 5 will not do, because they leave 2 rolls over. The numbers that share 12 out exactly, with nothing left over, are 1, 2, 3, 4, 6 and 12, and they come in pairs that multiply to give 12: 1 × 12, 2 × 6 and 3 × 4.'
    ],
    after: [
      'So 3 and 4 are a pair of {t:factor}s of 12, and so are 2 and 6. Every number has at least two, 1 and itself, and a {t:prime} is a number that has no others. That is another way of saying what a {t:prime} is, and the next kind of problem is about the {t:factor}s that are themselves {t:prime}s.'
    ] },

  /* ---------- The second kind: breaking one number into primes ---------- */
  { id: 'meet-factor', kind: 'meet', outcome: 'factor',
    link: 'The first kind of problem asked only whether a number splits. The second asks what the number is made of, and that needs a list, not a yes or a no.',
    case: 'wd-puzzle', mark: 'W1',
    strip: [
      'There is one whole number to work with: 60.',
      'The question asks for the prime numbers that multiply together to give it.',
      'The answer is a list of numbers, not a yes or a no.',
      'Nothing changes as time passes, and there is no second number to compare it with.'
    ],
    explain: [
      'What you are shown is one whole number and a question about what it is built from. The building blocks are the {t:prime}s, and every whole number above 1 that is not itself a {t:prime} is built from them. 60 is built from 2, 2, 3 and 5, because 2 × 2 × 3 × 5 = 60. There is only one list that works, whichever order you find the numbers in.',
      'The wording for this kind has two halves. One is “the prime numbers that make it”, as in the puzzle. The other is “every way it splits”: how many ways 28 tables can be set out in equal rows, or which sizes of equal team 24 players allow. They are one kind because the second is built from the first. Every way of sharing a number out evenly uses some of its primes multiplied together, so once you know the primes you can list every way.',
      'What separates this kind from the first is the size of the answer. The first kind answers a yes or a no. This one answers with a list, or with a count made from a list.'
    ],
    feature: { step: 'W1', option: 'parts' },
    name: 'A problem like this is {o:factor}: the {t:factor}s of the number that are {t:prime}s, written as a product. A whole number above 1 that is not a {t:prime} is built from them in only one way.' },

  { id: 'again-factor', kind: 'again', outcome: 'factor',
    link: 'The puzzle gave you what to point to: {needs:factor}. Here is a second problem with a different story and the other wording of the same kind: every way to set tables out in rows.',
    first: 'wd-puzzle', second: 'wd-tables', step: 'W1',
    instruction: 'Find what the two problems share. Ignore the story (a cereal box, a wedding) and ignore the numbers. Look at one thing only: which words show that the problem asks what the number is made of, or every way it splits?',
    prompt: { kind: 'phrase', answer: 'every way to set them out in equal rows' },
    shared: [
      'Both problems give one whole number and ask for more than a yes or a no. The puzzle asks directly for the prime numbers that make 60. The planner asks for every way to set 28 tables out in equal rows, and every one of those ways is a product of some of the primes of 28.',
      'So they are one kind, and both are answered from the primes of the number. That is what {o:factor} names.'
    ] },

  { id: 'portrait-factor', kind: 'portrait', outcome: 'factor',
    link: 'You know what to point to for {o:factor}. This card fills in the rest of the picture, so that you can spot it where nobody marks the words for you.',
    typical: [
      'One whole number, often between 20 and a few hundred.',
      'A request for a list: the primes that multiply to give it, or every size of equal group it can be split into, or how many sizes there are.',
      'The answer is a list or a count, and it can always be checked by multiplying back.',
      'A prime may be needed more than once: 84 needs its 2 twice, because 84 = 2 × 2 × 3 × 7.'
    ],
    not: [
      'A yes or a no about whether one number splits is the first kind, {o:prime}, and it has no list to give. If the problem asks only whether the number can be shared out, this is not the kind.',
      'Two numbers are not this kind. A problem that gives two numbers and asks for a piece that fits both is a different kind: this one takes a single number apart.'
    ],
    wild: ['"What is it made of?"', '"Write it as a product of primes."', '"Every way to lay them out in equal rows."', '"List every size of group that works."'],
    self: 'In your own life you meet this when you want every way to arrange or pack a number of things, when you break a number down to simplify a fraction, and in puzzles and codes that ask what a number is made of.',
    ask: '"Is there one whole number, and does the problem ask what it is made of, or every way it splits?" If you can say yes, you are probably looking at this kind.' },

  { id: 'check-factor', kind: 'check', after: 'factor',
    case: 'wd-museum',
    ask: { type: 'phrase', step: 'W1', say: 'Which words show that the problem asks what one number is made of? Tap them.',
           answer: 'which prime numbers multiply together to give 45' } },

  { id: 'check-factor-last', kind: 'check', after: 'factor', case: 'ck-factor-last', ask: { type: 'solve', solve: 'last' } },
  { id: 'check-factor-whole', kind: 'check', after: 'factor', case: 'ck-factor-whole', ask: { type: 'solve', solve: 'whole' } },

  /* ---------- The look-alike pair: whether one number splits, or what it is made of ---------- */
  { id: 'look-prime-factor', kind: 'lookalike', ledger: 'prime~factor',
    link: 'The first two kinds are easy to mix up when a problem is about one number, because the working for one finds things that the other needs. This card puts them side by side.',
    cases: ['la-patrols-prime', 'la-patrols-factor'],
    instruction: 'Both problems are about the same scout leader and the same 57 scouts. Compare one thing: does the problem ask only whether the number splits, or does it ask what the number is made of?',
    prompt: { kind: 'which', option: 'W1.parts', answer: 'la-patrols-factor' },
    difference: [
      'In Case A the leader asks whether the 57 scouts can be split into equal patrols, with more than one patrol and more than one scout in each. The answer is a yes or a no, and the answer is {a:W1.split}.',
      'In Case B the same leader asks which prime numbers multiply together to give 57. The answer is a list, and the answer is {a:W1.parts}.',
      'Both are about the same 57, and the working for one contains what the other needs: testing 57 finds that 3 fits, and 57 = 3 × 19. That is why they are easy to mix up. What differs is only what is asked, a verdict or a list.'
    ] }
]);
