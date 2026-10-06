// Psychology, Unit One, part four: the fourth kind (a passing moment) and the look-alike pair that matters most to it.
// The fourth kind is the key's answer for a case with nothing in it to name (lesson standard K2.9), and it is
// taught as a family like any other.

FC.cards('psychology', 'u1', [

  /* ---------- The fourth kind: a passing moment ---------- */
  { id: 'meet-none', kind: 'meet', family: 'none',
    link: 'Many cases are none of the first three, and there is an answer for them.',
    case: 'g-amira', mark: 'D1',
    strip: [
      'One person, Amira, and one short stretch: a week.',
      'Something real happened at the start: she learned her father is seriously ill. Since then she has been quiet and short with people. Most people would be.',
      'Nothing else: no reasons given, nothing said or done to anyone about them, nothing before Monday.'
    ],
    explain: [
      'There is no reasoning to judge. Being short with whoever asks a question is not about the person who asked. And there are no years. What is left is a person having a hard week for a reason you can see, and it will probably ease.',
      'The colleague’s word, "moody", sounds like a description of Amira. It is really a description of five days. A medical-sounding word such as "unstable" is no better: a hard week shows none of what a diagnosis needs.'
    ],
    feature: { step: 'D1', option: 'none' },
    name: 'The answer, and the name, is {a:D1.none}. "Moment" means one occasion or one short stretch, an evening or a hard week. "Passing" means it is not how the person is from year to year. Nothing more is asked after it: you looked, and there was nothing to name.' },

  { id: 'check-none', kind: 'check', after: 'none',
    case: 'g-funeral',
    ask: { type: 'phrase', step: 'D1', say: 'Which words tell you that this is one occasion, with something real behind it? Tap them.',
           answer: "Two days after his mother's funeral" } },

  /* ---------- The look-alike pair people get wrong most: one evening taken for a lifetime ---------- */
  { id: 'look-pattern-none', kind: 'lookalike', ledger: 'pattern~none',
    link: 'These two are the smallest and the largest claim you can make about a person, and the behavior in them can be exactly the same.',
    cases: ['g-retirement', 'g-thirty'],
    instruction: 'Both cases are about Desmond talking about his deals. Compare one thing: how much of his life does each case show?',
    prompt: { kind: 'which', option: 'D1.none', answer: 'g-retirement' },
    difference: [
      'In Case A it is one evening, a retirement party, where talking about your working life is what people do. The guest has had twenty minutes of him. The answer is {a:D1.none}.',
      'In Case B the same talk is shown across thirty years, three places and three relationships. The answer is {a:D1.pattern}.',
      'You cannot tell these apart by what the person does, only by how much of his life the case shows. One evening is never {a:D1.pattern}, however bad it was and whoever says "always".'
    ] }
]);
