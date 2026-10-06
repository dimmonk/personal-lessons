// Psychology, Unit One, part two: the second kind (something one person does to another) and the first look-alike pair.
// The app prints "how to tell them apart" and the side-by-side table; neither is typed here.

FC.cards('psychology', 'u1', [

  /* ---------- The second kind: something one person does to another ---------- */
  { id: 'meet-tactic', kind: 'meet', family: 'tactic',
    link: 'In the second kind there are two people, and you need both.',
    case: 'g-deadline', mark: 'D1',
    strip: [
      'Two people: Carla and Ben.',
      'Carla says something to Ben about what happened between them, then about Ben: that he is the disorganized one.',
      'It leaves Ben checking his own calendar. It is one conversation.'
    ],
    explain: [
      'Carla is not weighing a choice or explaining herself. What she says is pointed at Ben, and the case shows what it does to him: he came with a fair question and leaves doubting himself. Take Ben out and nothing is left.',
      'The kind is not a verdict. An apology or a word of praise is this kind too. Whether Carla’s words were fair is a later question.'
    ],
    feature: { step: 'D1', option: 'tactic' },
    name: 'The answer, and the name, is {a:D1.tactic}. "Another" means the other person: the one it is said or done to. "Does" covers saying as well as doing.' },

  { id: 'check-tactic', kind: 'check', after: 'tactic',
    case: 'g-phonecall',
    ask: { type: 'option', step: 'D1', among: ['reasoning', 'tactic'] } },

  /* ---------- The first look-alike pair ---------- */
  { id: 'look-reasoning-tactic', kind: 'lookalike', ledger: 'reasoning~tactic',
    link: 'In both of these kinds a person may be explaining themselves, and someone else may be in the room.',
    cases: ['g-birthday-brother', 'g-birthday-wife'],
    instruction: 'Both cases are about Dev and the birthday he forgot. Compare one thing: who his words are about, and who they are said to.',
    prompt: { kind: 'which', option: 'D1.tactic', answer: 'g-birthday-wife' },
    difference: [
      'In Case A Dev explains something he did, and the explanation is about Dev: his month at work. His brother only listens. Take the brother away and nothing changes. The answer is {a:D1.reasoning}.',
      'In Case B the same man says something to his wife about her: that she is too sensitive. It leaves her apologizing. Take her away and nothing is left. The answer is {a:D1.tactic}.',
      'What separates them is not how bad it sounds. It is who the words are about and who they are said to.'
    ] }
]);
