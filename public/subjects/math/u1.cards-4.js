// Basic Math, Unit One, part four: the fourth kind (counting ways, and chance) and its look-alike pair with the first kind.
// The pair unknown~chance is taught on the question card (ledger taughtIn).

FC.cards('math', 'u1', [

  /* ---------- The fourth kind: counting ways, and chance ---------- */
  { id: 'meet-chance', kind: 'meet', family: 'chance',
    link: 'The first three kinds use numbers to split, to fit or to follow. The fourth kind uses numbers to count the different ways something can turn out.',
    case: 'gt-outfits', mark: 'M1',
    strip: [
      'Something can turn out in different ways: an outfit. It is made by several separate choices: a top, a pair of pants and a pair of shoes, each chosen from its own list.',
      'The question is how many different results there are: how many different outfits.',
      'Nothing is measured, nothing changes as time passes, and no calculation has a number missing. The question counts possibilities.'
    ],
    explain: [
      'What you are shown is a set of choices and a question about how many different results they give. The problem is about the choices themselves: how many different outfits there are, not what any one of them costs or weighs.',
      'This kind has two halves. The first is counting ways: how many different results there are when you choose, pick or order things. The second is chance: how likely it is that something happens, or that a test result can be trusted. They sit together because a chance is a share of the ways something can turn out. Zara’s problem is the counting half.',
      'Every kind can ask “how many”. What marks this kind is that what you are counting is the different results of a choice.'
    ],
    feature: { step: 'M1', option: 'chance' },
    name: 'This kind of problem is {a:M1.chance}. “Turn out” means end up, as a result of choices or of luck. Counting the ways is one half of the kind, and how likely something is, is the other.' },

  { id: 'check-chance', kind: 'check', after: 'chance',
    case: 'gt-trains',
    ask: { type: 'option', step: 'M1', among: ['whole', 'unknown', 'growth', 'chance'] } },

  /* ---------- The look-alike pair: counts that split, or the results of a choice ---------- */
  { id: 'look-whole-chance', kind: 'lookalike', ledger: 'whole~chance',
    link: 'The first kind and the fourth are both made of whole counts, and both can ask “in how many different ways”. Here they are side by side.',
    cases: ['gt-photo-rows', 'gt-photo-order'],
    instruction: 'Both problems are about Hana and a photo of friends. Compare one thing: is the question about cutting a count into equal piles, or about the different results of a choice?',
    prompt: { kind: 'which', option: 'M1.chance', answer: 'gt-photo-order' },
    difference: [
      'In Case A the 24 friends are one fixed group, and the question is about how the number 24 splits into equal rows. The answer is {a:M1.whole}.',
      'In Case B nothing is being split. The question is about the different results of a choice: who stands first, who second, and so on. Each different order is a different result. The answer is {a:M1.chance}.',
      'Both are about friends in rows, and both ask “in how many different ways”. What differs is what is counted: the ways a number splits, or the ways a choice can come out.'
    ] }
]);
