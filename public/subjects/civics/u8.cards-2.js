// Civics, Unit Eight, part two: the duties that fall on everyone here, the things kept for citizens, and what the Constitution
// does not promise. Same shapes as part one (lesson standard A12 and S4): a concept card, a facts card, one check per fact.
// Within each facts card every answer has one form ("The duty to ...", "The right to ...", a short noun phrase).

FC.cards('civics', 'u8', [

  /* ---------- group three: duties that fall on everyone here ---------- */
  { id: 'con-duty', kind: 'concept',
    h: 'A duty is the law asking something of you',
    link: 'The last two groups were about the government held back from you. The other half of living here is what the law asks of you.',
    case: 'c8-ravi',
    plain: [
      'Ravi’s story has no right in it. His tax is taken out of his pay, he keeps to the speed limit, and he registers because the law says that he must. That is the difference between a right and a duty. A right is the government held back from you. A duty is the law asking something of you.',
      'The first thing to learn about a duty is whom it falls on. The three in this group fall on everyone here, citizen or not, and none of them asks for citizenship. The law asks them of Ravi because of what he does here: he lives here, he earns his wages here, and he is a man in the age range that the law names.',
      'The three are these. Everyone here must obey the law. Everyone here must pay tax on income earned here. And a man aged 18 to 25 who lives here, citizen or not, must register for Selective Service. Selective Service is the list that lets the country organise a draft if one were ever called, and a draft means calling people up to serve in the armed forces.',
      'Not knowing a requirement does not excuse missing it. So the useful habit is to find out what the law asks of you: file taxes on time, follow the rules, and ask the {t:agency} that runs the rule when you are unsure.'
    ] },

  { id: 'facts-duty', kind: 'facts',
    h: 'Three duties that fall on everyone here',
    link: 'These are the three duties of Ravi’s year, each with how it fits the idea that a duty is the law asking something of you.',
    concept: 'con-duty',
    rows: [
      { id: 'du-obey', q: 'What does the law ask of everyone here, whatever their immigration status, in how they behave?', a: 'The duty to obey the law',
        relates: 'The law asks it of every person here, so it is a duty that does not depend on citizenship. Not knowing a requirement does not excuse missing it.' },
      { id: 'du-tax', q: 'A person on a work visa earns wages here. Which duty does that bring, as it does for a citizen?', a: 'The duty to pay tax on income earned here',
        relates: 'Tax follows the income, not the passport. A person on a work visa who earns wages here pays tax on them and files a tax return each year, just as a citizen does.' },
      { id: 'du-draft', q: 'Which duty falls on men aged 18 to 25 who live here, citizens or not?', a: 'The duty to register for Selective Service',
        relates: 'It falls on men who live here whether or not they are citizens. Registering is what lets the country organise a draft if one were ever called.' }
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
      'Amara’s story is the other side. For twenty years she lived here as a permanent resident, paying her taxes and obeying the law, and until she became a citizen she could not register to vote. After she took the oath she could, and she was also summoned to serve on a jury, which her neighbour Joao, still a permanent resident, was not.',
      'Three things are kept for citizens. Two are rights, which means that a person may choose to use them: voting in federal elections, and running for federal office. One is a duty, which means that the law requires it: serving on a federal jury when summoned. Each office has conditions of its own on top of being a citizen, and this group holds only the citizenship part.',
      'A few cities let people who are not citizens vote in local elections. Federal elections are for citizens only. On the citizenship test, voting may be given as a responsibility that only citizens have. This unit calls it a right, because no law makes anyone vote.',
      'Jury service is a duty and a privilege together, because a person cannot be kept off a jury on grounds of race.'
    ] },

  { id: 'facts-citizen', kind: 'facts',
    h: 'Three things kept for citizens',
    link: 'These are the three things in Amara’s story that need citizenship, each with how it fits the idea that some things are kept for citizens.',
    concept: 'con-citizen',
    rows: [
      { id: 'cz-vote', q: 'Which right lets a citizen help choose who holds federal office?', a: 'The right to vote in federal elections',
        relates: 'Only citizens may vote in federal elections. A permanent resident of twenty years cannot until she becomes a citizen, and after she takes the oath she can register. Voting while not a citizen is a crime and can ruin both a citizenship application and a residence permit, so do not vote until you are a citizen.' },
      { id: 'cz-run', q: 'Which right lets a citizen ask to be chosen for federal office?', a: 'The right to run for federal office',
        relates: 'It is kept for citizens, and each office adds conditions of its own. It is a right and not a duty, because it is something that a person may choose to do, and no law makes anyone stand for office.' },
      { id: 'cz-jury', q: 'Which duty is a citizen carrying out when a letter summons them to the federal courthouse?', a: 'The duty to serve on a federal jury',
        relates: 'When a citizen is summoned to serve on a federal jury, she must go, unless she is excused for a reason such as illness or hardship. If you cannot go, ask formally to be excused, and do not ignore the letter. Only citizens may serve on federal juries, which is why Joao has never had a letter like Amara’s.' }
    ] },

  { id: 'chk-cz-vote', kind: 'check', after: 'facts-citizen', ask: { type: 'fact', row: 'cz-vote' } },
  { id: 'chk-cz-run', kind: 'check', after: 'facts-citizen', ask: { type: 'fact', row: 'cz-run' } },
  { id: 'chk-cz-jury', kind: 'check', after: 'facts-citizen', ask: { type: 'fact', row: 'cz-jury' } },

  { id: 'look-jury', kind: 'lookalike', ledger: 'ac-jury~cz-jury',
    h: 'A jury trial, and jury service',
    link: 'A jury has come up twice in this unit, once as a right and once as a duty. The two get swapped, so they go side by side.',
    facts: ['ac-jury', 'cz-jury'],
    instruction: 'Compare who each question is about: the person who is on trial, or a person who is summoned to sit on the jury.',
    prompt: { kind: 'which', answer: 'cz-jury' },
    difference: [
      'Fact A is about the person accused of a crime: {f:ac-jury}. It is a right, it protects the person on trial, and it belongs to everyone here.',
      'Fact B is about a person summoned to sit on a federal jury: {f:cz-jury}. It is a duty, the law requires it, and it is for citizens.',
      'A jury trial has both. One person is tried, and other people are summoned to decide. The person on trial has a right whatever their immigration status, and the people who decide have a duty and must be citizens.'
    ] },

  /* ---------- group five: what the Constitution does not promise ---------- */
  { id: 'con-promise', kind: 'concept',
    h: 'A right is not a promise to give you something',
    link: 'Rights hold the government back, and duties ask something of you. People also expect a third thing, that the government will give them something, and that is a different matter.',
    case: 'c8-ines',
    plain: [
      'Ines went looking for a promise and found a list of limits. That is how the Constitution is mostly written: it lists what government may not do to you. It makes few promises about what government must give you.',
      'There is no promise in the Constitution of a job, a home or medical care. A newcomer from a country whose constitution does promise one of them may expect the same here, so it is worth knowing before you look for it.',
      'Where government does provide one of them, it is because a law, or a state or local programme, created it. Medicare is one: it exists because Congress passed a law. What one law gives, a later law can change, which is why such programmes are argued over and altered at every election. A right in the Constitution is a limit on government, and that is a different thing from a programme.',
      'State constitutions are separate from this one, and they do promise public schooling.'
    ] },

  { id: 'facts-promise', kind: 'facts',
    h: 'What the Constitution does not promise',
    link: 'These are the four facts of Ines’s search, each with how it fits the idea that a right is not a promise to give you something.',
    concept: 'con-promise',
    rows: [
      { id: 'np-kind', q: 'What does the Constitution mostly list?', a: 'What government may not do to you',
        relates: 'A right is a limit on government, and the Constitution mostly lists limits. That is why the rights in this unit all say what government may not do, and why a promise to give you something is a different thing.' },
      { id: 'np-none', q: 'Which of a job, a home and medical care does the Constitution promise to give you?', a: 'None of them',
        relates: 'Each of them is something that government would have to give you, and the Constitution makes no such promise. There is no right to a job or a home in it. Where such help exists, it exists because of a law or a programme.' },
      { id: 'np-source', q: 'Where does a programme that gives people help, such as Medicare or a housing programme, come from?', a: 'A law, or a decision by a state or a city',
        relates: 'Medicare exists because Congress passed a law, and a housing programme exists because of a law or a state or local decision. What one law gives, a later law can change.' },
      { id: 'np-change', q: 'How can people change what such a programme gives?', a: 'By votes, petitions and the people who write the laws',
        relates: 'Because a programme comes from a law, the way to change it is the political process. To find out who qualifies for one, find the law or programme that provides it and read its conditions.' }
    ] },

  { id: 'chk-np-kind', kind: 'check', after: 'facts-promise', ask: { type: 'fact', row: 'np-kind' } },
  { id: 'chk-np-none', kind: 'check', after: 'facts-promise', ask: { type: 'fact', row: 'np-none' } },
  { id: 'chk-np-source', kind: 'check', after: 'facts-promise', ask: { type: 'fact', row: 'np-source' } },
  { id: 'chk-np-change', kind: 'check', after: 'facts-promise', ask: { type: 'fact', row: 'np-change' } }
]);
