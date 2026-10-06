// Political Ideologies, Unit One, part four: the fourth answer (rights and fair treatment for everyone) and its look-alike pair
// with the second answer.
// The app prints "how to tell them apart", the side-by-side table and the key's tie-break; none of them is typed here.

FC.cards('ideology', 'u1', [

  /* ---------- The fourth answer: rights and fair treatment for everyone ---------- */
  { id: 'meet-rights', kind: 'meet', family: 'rights',
    link: 'The fourth answer asks something different of a text. Not who the people are, what they earn or what was handed down, but what a person is owed.',
    case: 'i-rights-meet', mark: 'D1',
    strip: [
      'One thing is put first: what each person is owed. Here it is the freedom to speak, to believe, to own and to trade.',
      '"Each person" is the unit. The text does not speak for workers, owners, one people or old ways. It speaks for any person at all.',
      'Nobody is set against anybody, and the text says this comes before any plan anyone has for the country.'
    ],
    explain: [
      'The text says what every person is owed and puts that first. Other texts of this kind name other things owed to everyone: a hearing before a decision is made about you, a doctor, a school, a fair start, or fair treatment whatever group you belong to. It speaks for all persons alike, so it has no side the way the first answer does.',
      'The answer does not say what people should be owed. One text can say everyone is owed freedom from a government that does too much, another that everyone is owed a school and a doctor. They disagree about a great deal, and both are this answer. Mentioning a school or a fair deal is not enough: a notice that the school opens at nine says nothing is owed to anyone.'
    ],
    feature: { step: 'D1', option: 'rights' },
    name: 'The answer is {a:D1.rights}. A "right" here means something a person is owed simply by being a person. "Fair treatment" means being treated the same however a person is described: by sex, race, income, belief or birthplace.' },

  { id: 'check-rights', kind: 'check', after: 'rights',
    case: 'i-rights-check',
    ask: { type: 'option', step: 'D1', among: ['class', 'nation', 'tradition', 'rights'] } },

  /* ---------- A look-alike pair ---------- */
  { id: 'look-nation-rights', kind: 'lookalike', ledger: 'nation~rights',
    link: 'These two are easy to mix up when a text speaks of race or of where people come from, because both can say that people are treated differently according to the group they were born into. Here are two texts that use the same noun and point opposite ways.',
    cases: ['i-race-above', 'i-race-held'],
    instruction: 'Both cases are about race. Compare one thing: is one people placed above the others, or is nobody placed above anybody?',
    prompt: { kind: 'which', option: 'D1.rights', answer: 'i-race-held' },
    difference: [
      'In Case A the text says that its own race is the best and that the others were born to serve it. It puts one people first and places it above the rest. The answer is {a:D1.nation}.',
      'In Case B the text says that no rule mentions race, and that rules treating every applicant alike still leave applicants of one race behind. It adds "Nobody is above anybody here", and asks for fair treatment for every applicant. The answer is {a:D1.rights}.',
      'The two share a word and nothing else. You cannot tell them apart by the word, or by how angry they sound, only by whether one people is placed above the others.'
    ] }
]);
