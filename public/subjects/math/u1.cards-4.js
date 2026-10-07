// Basic Math, Unit One, part four: the fourth kind (counting ways, and chance) and its look-alike pair with the first kind.
// The pair unknown~chance is taught on the question card (ledger taughtIn).

FC.cards('math', 'u1', [

  /* ---------- The fourth kind: counting ways, and chance ---------- */
  { id: 'meet-chance', kind: 'meet', family: 'chance',
    link: 'Fourth: counting the different ways something can turn out.',
    case: 'gt-outfits', mark: 'M1',
    explain: [
      'Zara picks one top, one pair of pants and one pair of shoes, each from its own list. The problem is not about what an outfit costs or weighs. It asks how many different outfits there are.',
      'This kind has two halves. One is counting ways: how many different results you get when you choose, pick or order things. The other is chance: how likely it is that something happens, or that a test result can be trusted. Zara’s problem is the counting half.',
      'Many problems ask “how many”. What marks this one is that you are counting the different results of a choice.'
    ],
    spot: [
      { do: 'Find the separate choices: a top, pants and shoes.', why: 'Each is picked from its own list.' },
      { do: 'Check the question counts results: “How many different outfits can she make?”', why: 'It asks how many different results the choices give, not what any one of them is.' },
      { do: 'If it asks how likely something is instead, look for “at least one”, or for a test result that may be wrong.', why: 'Those are the two chance problems this course covers.' },
      { do: 'Check nothing is split into equal groups, measured or followed over time.', why: 'Here the numbers only say how many things there are to choose from.' }
    ],
    feature: { step: 'M1', option: 'chance' },
    name: 'This is {a:M1.chance}. The numbers 5, 4 and 3 only say how long each list is.' },

  { id: 'check-chance', kind: 'check', after: 'chance',
    case: 'gt-trains',
    ask: { type: 'option', step: 'M1', among: ['whole', 'unknown', 'growth', 'chance'] } },

  /* ---------- The look-alike pair: counts that split, or the results of a choice ---------- */
  { id: 'look-whole-chance', kind: 'lookalike', ledger: 'whole~chance',
    link: 'Both use whole counts of friends, and both ask “in how many different ways”.',
    cases: ['gt-photo-rows', 'gt-photo-order'],
    instruction: 'Both are about Hana and a photo of friends. Compare one thing: is she cutting a count into equal rows, or choosing an order?',
    prompt: { kind: 'which', option: 'M1.chance', answer: 'gt-photo-order' },
    difference: [
      'The photo of 24 friends is one fixed group, and the question is how the number 24 splits into equal rows. That is {a:M1.whole}.',
      'The photo of four friends in a row splits nothing. The question is about who stands where: each different order is a different result. That is {a:M1.chance}.',
      'Both ask “in how many different ways”. What differs is what you count: the ways a number splits, or the ways a choice can come out.'
    ] }
]);
