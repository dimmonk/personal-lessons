// Political Ideologies, Unit One, part four: the fourth answer (rights for every person) and its look-alike pair
// with the second answer.
// The app prints "how to tell them apart" and the key's tie-break; neither is typed here.

FC.cards('ideology', 'u1', [

  /* ---------- The fourth answer: rights for every person ---------- */
  { id: 'meet-rights', kind: 'meet', family: 'rights',
    link: 'Fourth: a text that says what every person is owed.',
    case: 'i-rights-meet', mark: 'D1',
    explain: [
      'The pamphlet does not speak for workers, owners, one people or old customs. It speaks for any person at all, and says what each one is owed: the freedom to speak, believe, own and trade.',
      'A right is something you are owed just for being a person. Other texts name other things owed to everyone: a hearing before a decision is made about you, a school, a doctor, or fair treatment whatever your race, sex or income. Texts that disagree about a great deal can all be this answer. Mentioning a school is not enough: a notice that the school opens at nine says nothing is owed to anyone.'
    ],
    spot: [
      { do: 'Find what is owed: “the freedom to speak, to believe, to own and to trade”.', why: 'The text must say what a person gets just by being a person.' },
      { do: 'Check who it is owed to: “each person”.', why: 'It is not one group, one people or the workers: it is anyone at all.' },
      { do: 'Check it comes first: “that freedom comes before any plan anyone has for the country”.', why: 'The text must put it first, not just mention it.' }
    ],
    feature: { step: 'D1', option: 'rights' },
    name: 'This is {a:D1.rights}. It names no group to stand with and none to stand against.' },

  { id: 'check-rights', kind: 'check', after: 'rights',
    case: 'i-rights-check',
    ask: { type: 'option', step: 'D1', among: ['class', 'nation', 'tradition', 'rights'] } },

  /* ---------- A look-alike pair ---------- */
  { id: 'look-nation-rights', kind: 'lookalike', ledger: 'nation~rights',
    link: 'These two are easy to mix up when a text talks about race, because both say people are treated differently by the group they were born into. They point opposite ways.',
    cases: ['i-race-above', 'i-race-held'],
    instruction: 'Both stories are about race. Compare one thing: is one people placed above the others, or is nobody placed above anybody?',
    prompt: { kind: 'which', option: 'D1.rights', answer: 'i-race-held' },
    difference: [
      'In Story A, the text says its own race is the best and the others were born to serve it. It puts one people first, above the rest. That is {a:D1.nation}.',
      'In Story B, the text says no rule mentions race, yet applicants of one race are left at the back of the line. It says “Nobody is above anybody here” and asks for fair treatment for every applicant. That is {a:D1.rights}.',
      'They share a word and nothing else. The word and the anger do not tell them apart. Whether one people is placed above the others does.'
    ] }
]);
