// Civics, Unit Six, part four: the exception "a city's own sidewalk", the look-alike pair that crosses into another
// branch (told apart by the key's first question), and the second question.
// A pair that crosses a branch names the other branch's name by its plain words, never by the name: the name belongs to the
// unit that teaches it, and the ledger prints it.

FC.cards('civics', 'u6', [

  { id: 'exc-councilmag', kind: 'exception', ledger: 'localgov~protected', looksLike: 'localgov', is: 'protected',
    h: 'A city’s own sidewalk, and a right that stops it',
    link: 'A city controls its own sidewalks and what is done on them. Here is a story that sounds exactly like that.',
    case: 'u6-councilmag',
    setup: 'This sounds like {o:localgov}: a city council decides who may set up on its own sidewalks, and newsstands stand on them. A city’s power over its sidewalks is real. Yet the answer here is {a:S2.right}, and it is {o:protected}.',
    prompt: { kind: 'phrase', answer: 'newsstands may not sell the magazine that makes fun of the mayor' },
    because: [
      'The council is using a real power. A rule that newsstands must stand six feet from the corner is about where, and would be {o:localgov}. But this rule is about what may be sold: it bans a magazine because it makes fun of the mayor. That takes away the right to publish, and a state has no power to take away a right, so it had none to hand down to the city.'
    ],
    take: 'A matter can sound local. Always ask the second question too: does a federal law or a right also cover it?' },

  { id: 'look-protected-beyondcong', kind: 'lookalike', ledger: 'protected~beyondcong',
    h: 'The same rally ban, made by Congress and by a city',
    link: 'A right can stop a rule whoever made it. Here is the same story with Congress as the maker.',
    cases: ['u6-rally-congress', 'u6-rally-city'],
    instruction: 'Both stories are about a ban on any group holding a political rally in a public park. Compare one thing: who made the rule.',
    prompt: { kind: 'which', option: 'D1.states', answer: 'u6-rally-city' },
    difference: [
      'In Story A both chambers of Congress passed the law. The first answer is {a:D1.congress}, so the two questions of this unit do not apply. It belongs in the unit on Congress, as {plain:beyondcong}. The right to gather peacefully stops this law too.',
      'In Story B a city council made the rule. The first answer is {a:D1.states}, and the right stops the rule. The answer to the second question is {a:S2.right}, and it is {o:protected}.',
      'The ban and the right are the same in both. Only who made the rule, the first question, tells the two names apart.'
    ] },

  /* ---------- The second question ---------- */
  { id: 'q-else', kind: 'question', step: 'S2',
    h: 'The second question: what else covers the matter',
    link: 'You have answered this at the end of each card. Here it is with its four answers in one place.',
    decides: [
      'Six pairs of names have no card of their own, and this question alone separates them. The list below puts each pair side by side.',
      'With {o:police} or {o:localgov}, nothing else covers the matter. With the other three, something does: a federal law that is the only rule, or a right, stops the rule, and a federal minimum lets it stand.'
    ],
    how: [
      { do: 'Start with what the rule is about.', why: 'A matter off the federal list, such as schools or licenses, usually has no federal law on it.' },
      { do: 'If a federal law is named, check that it covers the same matter.', why: 'A story can mention Congress or a federal tax in passing and then go on to something else.' },
      { do: 'Then read what that law says about the states: no state may add to it, or a state may ask for more.', why: 'The first is {a:S2.onlyrule} and the second is {a:S2.floor}.' },
      { do: 'Whatever you found, ask whether the rule takes away a right to speak, worship, publish or gather peacefully.', why: 'That is {a:S2.right}, and it needs no federal law.' },
      { do: 'If none of these covers it, the answer is {a:S2.nothing}.', why: 'Then who made the rule gives the name: {o:police} for a state, {o:localgov} for a city, town or county.' }
    ] },

  { id: 'check-else', kind: 'check', after: 'S2',
    case: 'u6-c-schools',
    ask: { type: 'step', step: 'S2' } }
]);
