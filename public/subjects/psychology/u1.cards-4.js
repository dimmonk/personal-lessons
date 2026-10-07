// Psychology, Unit One, part four: the fourth kind (a passing moment) and the look-alike pair that matters most to it.
// The fourth kind is the key's answer for a case with nothing in it to name (lesson standard K2.9), and it is
// taught as a family like any other.

FC.cards('psychology', 'u1', [

  /* ---------- Just a one-off ---------- */
  { id: 'meet-none', kind: 'meet', family: 'none',
    link: 'Fourth: a one-off. Most of what you see in a single day is this.',
    case: 'g-amira', mark: 'D1',
    explain: [
      'Amira is not explaining a choice, and she is not targeting anyone: she is short with whoever asks her anything. And it is one week, with an obvious cause. She is having a hard week.',
      'The coworker’s word, "moody", sounds like it describes Amira. It really describes five days. A word like "unstable" is worse: a hard week shows nothing a diagnosis needs.'
    ],
    spot: [
      { do: 'Find how long it lasts: one week.', why: 'One occasion or one short stretch can’t show a pattern.' },
      { do: 'Look for a cause: her father’s illness.', why: 'A clear cause usually means it will pass.' },
      { do: 'Check there is no target and no reasons.', why: 'Then there is nothing more to name.' }
    ],
    feature: { step: 'D1', option: 'none' },
    name: 'This is {a:D1.none}. It is a real answer, and you will need it often.' },

  { id: 'check-none', kind: 'check', after: 'none',
    case: 'g-funeral',
    ask: { type: 'phrase', step: 'D1', say: 'Which words tie this to one occasion, with a cause? Tap them.',
           answer: "Two days after his mother's funeral" } },

  /* ---------- One evening taken for a lifetime ---------- */
  { id: 'look-pattern-none', kind: 'lookalike', ledger: 'pattern~none',
    link: 'These two can show the exact same behavior. Only how much of the person’s life you see tells them apart.',
    cases: ['g-retirement', 'g-thirty'],
    instruction: 'Both stories are about Desmond talking about his deals. Compare one thing: how much of his life each story shows.',
    prompt: { kind: 'which', option: 'D1.none', answer: 'g-retirement' },
    difference: [
      'Story A is one evening: his own retirement party, where talking about your career is normal. The guest has known him for twenty minutes. That is {a:D1.none}.',
      'Story B is thirty years, three places and his whole family. That is {a:D1.pattern}.',
      'One evening is never {a:D1.pattern}, however bad it was and whoever says "always".'
    ] }
]);
