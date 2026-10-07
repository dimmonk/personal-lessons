// Civics, Unit Eight, part two: the duties that fall on everyone here, the things kept for citizens, and what the Constitution
// does not promise. Same shapes as part one (lesson standard A12 and S4): a concept card, a facts card, one check per fact.
// Within each facts card every answer has one form ("The duty to ...", "The right to ...", a short noun phrase).

FC.cards('civics', 'u8', [

  /* ---------- group three: duties that fall on everyone here ---------- */
  { id: 'con-duty', kind: 'concept',
    h: 'A duty is something the law asks of you',
    link: 'The last two groups were about the government held back from you. The other half of living here is what the law asks of you.',
    case: 'c8-ravi',
    plain: [
      'Ravi’s story has no right in it. A right holds the government back. A duty goes the other way: the law asks something of you. The three in this group fall on everyone here, citizen or not, because of what a person does: lives here, earns wages here, or is a man between 18 and 25.',
      'Everyone here must obey the law. Everyone here must pay tax on income earned here. A man aged 18 to 25 who lives here must register for Selective Service. That is the list the country would use to call people up for the armed forces, which is called a draft, if one were ever ordered.',
      'Not knowing a requirement is no excuse for missing it. If you are unsure, ask the {t:agency} that runs the rule.'
    ] },

  { id: 'facts-duty', kind: 'facts',
    h: 'Three duties that fall on everyone here',
    link: 'These are the three duties in Ravi’s first year. Each comes with how it shows up in real life.',
    concept: 'con-duty',
    rows: [
      { id: 'du-obey', q: 'What does the law ask of everyone here, whatever their immigration status, in how they behave?', a: 'The duty to obey the law',
        relates: 'It falls on every person here, citizen or not. Ravi keeping to the speed limit on the way to work is one small example.' },
      { id: 'du-tax', q: 'A person on a work visa earns wages here. Which duty does that bring, as it does for a citizen?', a: 'The duty to pay tax on income earned here',
        relates: 'Tax follows the income, not the passport. Ravi pays tax on his wages and files a return each spring, as a citizen does.' },
      { id: 'du-draft', q: 'Which duty falls on men aged 18 to 25 who live here, citizens or not?', a: 'The duty to register for Selective Service',
        relates: 'It falls on every man of that age who lives here, citizen or not. Ravi, at 24, looked up the rule and registered.' }
    ] },

  { id: 'chk-du-obey', kind: 'check', after: 'facts-duty', ask: { type: 'fact', row: 'du-obey' } },
  { id: 'chk-du-tax', kind: 'check', after: 'facts-duty', ask: { type: 'fact', row: 'du-tax' } },
  { id: 'chk-du-draft', kind: 'check', after: 'facts-duty', ask: { type: 'fact', row: 'du-draft' } },

  /* ---------- group four: kept for citizens ---------- */
  { id: 'con-citizen', kind: 'concept',
    h: 'A few things are kept for citizens',
    link: 'Every right and every duty so far applies to everyone here. A few things do not: the law keeps them for citizens.',
    case: 'c8-amara',
    plain: [
      'Amara paid her taxes and obeyed the law for twenty years, and she still could not register to vote. After she took the oath she could, and a few months later she was summoned for a federal jury. Joao, still a permanent resident, never was.',
      'Three things are kept for citizens. Two are rights you may choose to use: voting in federal elections, and running for federal office. One is a duty the law requires: serving on a federal jury when you are summoned. A few cities let people who are not citizens vote in local elections, but federal elections are for citizens only.'
    ] },

  { id: 'facts-citizen', kind: 'facts',
    h: 'Three things kept for citizens',
    link: 'These are the three things in Amara’s story that need citizenship. Each comes with how it shows up in real life.',
    concept: 'con-citizen',
    rows: [
      { id: 'cz-vote', q: 'Which right lets a citizen help choose who holds federal office?', a: 'The right to vote in federal elections',
        relates: 'Only citizens may vote in federal elections. Voting when you are not a citizen is a crime and can ruin a citizenship application, so do not vote until you are one.' },
      { id: 'cz-run', q: 'Which right lets a citizen ask to be chosen for federal office?', a: 'The right to run for federal office',
        relates: 'It is a right you may use, not a duty, because no law makes anyone stand for office.' },
      { id: 'cz-jury', q: 'Which duty is a citizen carrying out when a letter summons them to the federal courthouse?', a: 'The duty to serve on a federal jury',
        relates: 'A summoned citizen must go, unless excused for a reason such as illness. If you cannot go, ask formally to be excused. Do not ignore the letter.' }
    ] },

  { id: 'chk-cz-vote', kind: 'check', after: 'facts-citizen', ask: { type: 'fact', row: 'cz-vote' } },
  { id: 'chk-cz-run', kind: 'check', after: 'facts-citizen', ask: { type: 'fact', row: 'cz-run' } },
  { id: 'chk-cz-jury', kind: 'check', after: 'facts-citizen', ask: { type: 'fact', row: 'cz-jury' } },

  { id: 'look-jury', kind: 'lookalike', ledger: 'ac-jury~cz-jury',
    h: 'A jury trial, and jury service',
    link: 'A jury comes up twice in this unit, once as a right and once as a duty. People mix them up, so they go side by side.',
    facts: ['ac-jury', 'cz-jury'],
    instruction: 'Ask who each question is about: the person on trial, or a person summoned to sit on the jury.',
    prompt: { kind: 'which', answer: 'cz-jury' },
    difference: [
      'Fact A is about the person accused of a crime: {f:ac-jury}. It is a right, and everyone here has it.',
      'Fact B is about a person summoned to sit on a federal jury: {f:cz-jury}. It is a duty, and it is for citizens.',
      'Every jury trial has both: one person is tried, and other people are summoned to decide.'
    ] },

  /* ---------- group five: what the Constitution does not promise ---------- */
  { id: 'con-promise', kind: 'concept',
    h: 'A right is not a promise to give you something',
    link: 'Rights hold the government back, and duties ask something of you. Many newcomers also expect a third thing: that the government will give them something.',
    case: 'c8-ines',
    plain: [
      'Ines went looking for a promise and found a list of limits. The Constitution mostly lists what the government may not do to you. It does not promise a job, a home or medical care, even though the constitution of her old country does.',
      'When the government does provide one of these, a law or a state or city program created it. Medicare exists because Congress passed a law, and what one law gives, a later law can change. A right in the Constitution is a limit on the government, not a program.'
    ] },

  { id: 'facts-promise', kind: 'facts',
    h: 'What the Constitution does not promise',
    link: 'These are the three facts from Ines’s search. Each comes with how it shows up in real life.',
    concept: 'con-promise',
    rows: [
      { id: 'np-kind', q: 'What does the Constitution mostly list?', a: 'What the government may not do to you',
        relates: 'A right is a limit on the government, and limits are what the Constitution mostly lists. Ines read it from start to finish and found long lists of them.' },
      { id: 'np-none', q: 'Which of a job, a home and medical care does the Constitution promise to give you?', a: 'None of them',
        relates: 'Each one is something the government would have to give you, and the Constitution makes no such promise.' },
      { id: 'np-source', q: 'Where does a help program such as Medicare or a housing program come from?', a: 'A law, or a decision by a state or a city',
        relates: 'Medicare exists because Congress passed a law. What one law gives, a later law can change.' }
    ] },

  { id: 'chk-np-kind', kind: 'check', after: 'facts-promise', ask: { type: 'fact', row: 'np-kind' } },
  { id: 'chk-np-none', kind: 'check', after: 'facts-promise', ask: { type: 'fact', row: 'np-none' } },
  { id: 'chk-np-source', kind: 'check', after: 'facts-promise', ask: { type: 'fact', row: 'np-source' } }
]);
