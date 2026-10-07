// Civics, Unit Two, part two: two groups about the best-known founding documents. Which of them is law, and what the
// Declaration says. The Bill of Rights is not one of the answers on any card here, so no row offers it and the Constitution as
// rival answers (audit U2-2): the Constitution is the original text and every amendment, and the Bill of Rights is the first
// ten of those amendments (its own group, in part four).

FC.cards('civics', 'u2', [

  /* ---------- group two: which documents are law ---------- */
  { id: 'con-law', kind: 'concept',
    h: 'Which documents are law',
    link: 'Can a court make anyone obey it?',
    case: 'cn-claims',
    plain: [
      'The woman is right: the Declaration is not law. Law means a court can order people to obey it. Some documents only explain or argue, and a court cannot order anything because of them.',
      'The Constitution is law, and it is the highest law: it outranks every other law. In this unit “the Constitution” means the original text of 1787 plus every amendment added since. An amendment is a change added to the Constitution.',
      'The Declaration of Independence, mainly written by Thomas Jefferson, is not law. It explains why the colonies were leaving Britain and sets up no government. No court can order anyone to give you “the pursuit of happiness” because of it.',
      'The Federalist Papers are not law either. Alexander Hamilton, James Madison and John Jay wrote them as essays urging New York to approve the Constitution. A judge may quote one to see what the founders had in mind, but does not have to follow it.'
    ] },

  { id: 'facts-law', kind: 'facts',
    h: 'Law, or not law',
    link: 'Law is what a court can make people obey.',
    concept: 'con-law',
    rows: [
      { id: 'law-decl', q: 'Is the Declaration of Independence law?', a: 'Not law: it explains why the colonies were leaving Britain',
        relates: 'It gives reasons for leaving Britain and sets up no government, so no court can order anything because of it.' },
      { id: 'law-const', q: 'Is the Constitution law?', a: 'Law: it is the supreme law of the land, above every other law',
        relates: 'It is the 1787 text plus every amendment added since. That includes the Bill of Rights, so the Bill of Rights is law too.' },
      { id: 'law-fed', q: 'Are the Federalist Papers law?', a: 'Not law: they are essays urging people to approve the Constitution',
        relates: 'They explain the Constitution but are not part of it. A judge may read them and does not have to follow them.' }
    ] },

  { id: 'chk-law-decl', kind: 'check', after: 'facts-law', ask: { type: 'fact', row: 'law-decl' } },
  { id: 'chk-law-const', kind: 'check', after: 'facts-law', ask: { type: 'fact', row: 'law-const' } },
  { id: 'chk-law-fed', kind: 'check', after: 'facts-law', ask: { type: 'fact', row: 'law-fed' } },

  { id: 'look-law', kind: 'lookalike', ledger: 'law-decl~law-fed',
    h: 'Two documents that are not law',
    link: 'Both get quoted as if the founders had settled the matter.',
    facts: ['law-decl', 'law-fed'],
    instruction: 'Ask what each was written to do: explain a break with Britain, or argue for approving the Constitution.',
    prompt: { kind: 'which', answer: 'law-fed' },
    difference: [
      'Fact A is the Declaration of Independence: {f:law-decl}. It looks back at a break that had already happened and gives the reasons.',
      'Fact B is the Federalist Papers: {f:law-fed}. They were written while the plan of government was still waiting for approval, and they argue that it should get it.'
    ] },

  /* ---------- group three: what the Declaration says ---------- */
  { id: 'con-decl', kind: 'concept',
    h: 'What the Declaration of Independence says',
    link: 'The Declaration is not law, but it is quoted constantly.',
    case: 'cn-consent',
    plain: [
      'The voter is repeating the two ideas from the Declaration that people still quote, even though it is not law.',
      'The first is that people have unalienable rights, which means rights that cannot be taken away. It names three: life, liberty and the pursuit of happiness.',
      'The second is that a government gets its power from the consent of the governed, which means from the people agreeing to be governed. That is why Americans vote: when power comes from the people’s agreement, the people get a say in who runs the government.',
      'The rest of the Declaration is a long list of complaints against the king of Britain: the reasons it gives for leaving him.'
    ] },

  { id: 'facts-decl', kind: 'facts',
    h: 'The two ideas',
    link: 'The two ideas the Declaration is quoted for.',
    concept: 'con-decl',
    rows: [
      { id: 'decl-rights', q: 'Which rights does the Declaration say cannot be taken away?', a: 'Among them, life, liberty and the pursuit of happiness',
        relates: 'The Declaration’s word for rights that cannot be taken away is “unalienable”. It states the idea. It is not a law that gives you any of them.' },
      { id: 'decl-consent', q: 'Where does the Declaration say that a government gets its power?', a: 'From the consent of the governed: the people agreeing to be governed',
        relates: 'Power that comes from the people’s agreement means the people get a say in who runs the government.' }
    ] },

  { id: 'chk-decl-rights', kind: 'check', after: 'facts-decl', ask: { type: 'fact', row: 'decl-rights' } },
  { id: 'chk-decl-consent', kind: 'check', after: 'facts-decl', ask: { type: 'fact', row: 'decl-consent' } }
]);
