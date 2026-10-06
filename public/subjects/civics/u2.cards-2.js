// Civics, Unit Two, part two: two groups about the best-known founding documents. Which of them is law, and what the
// Declaration says. The Bill of Rights is not one of the answers on any card here, so no row offers it and the Constitution as
// rival answers (audit U2-2): the Constitution is the original text and every amendment, and the Bill of Rights is the first
// ten of those amendments (its own group, in part four).

FC.cards('civics', 'u2', [

  /* ---------- group two: which of the three is law ---------- */
  { id: 'con-law', kind: 'concept',
    h: 'Which of the three is law',
    link: 'Can a court make anyone obey it?',
    case: 'cn-claims',
    plain: [
      'Some documents are law, which means that a court can order people to obey them. Others explain or argue, and a court cannot order anything on their strength. The woman at the meeting is right about the Declaration.',
      'The Constitution is law. It is the supreme law of the land, which means that it outranks every other law. By “the Constitution” this unit means the original text of 1787 together with every amendment added to it since. An amendment is a change added to the Constitution.',
      'The Declaration of Independence, mainly written by Thomas Jefferson, is not law. It says why the colonies were leaving Britain and sets up no government. A court cannot order anyone to give you “the pursuit of happiness” because of it.',
      'The Federalist Papers are not law either. Alexander Hamilton, James Madison and John Jay wrote them as essays arguing that New York should approve the Constitution. A judge may quote one to understand what the founders had in mind, but it does not bind her.'
    ] },

  { id: 'facts-law', kind: 'facts',
    h: 'Law, or not law',
    link: 'Only a document a court can enforce is law.',
    concept: 'con-law',
    rows: [
      { id: 'law-decl', q: 'Is the Declaration of Independence law?', a: 'Not law, because it says why the colonies were leaving Britain',
        relates: 'It gives reasons for a break and sets up no government, so a court cannot order anyone to do anything on its strength.' },
      { id: 'law-const', q: 'Is the Constitution law?', a: 'Law, because it is the supreme law of the land, and it outranks every other law',
        relates: 'It is the original text of 1787 and every amendment added since. That includes the Bill of Rights, the first ten amendments, so the Bill of Rights is law too.' },
      { id: 'law-fed', q: 'Are the Federalist Papers law?', a: 'Not law, because they are essays that argued for approving the Constitution',
        relates: 'They explain the Constitution and are not part of it. A judge may read them and is not bound by them.' }
    ] },

  { id: 'chk-law-decl', kind: 'check', after: 'facts-law', ask: { type: 'fact', row: 'law-decl' } },
  { id: 'chk-law-const', kind: 'check', after: 'facts-law', ask: { type: 'fact', row: 'law-const' } },
  { id: 'chk-law-fed', kind: 'check', after: 'facts-law', ask: { type: 'fact', row: 'law-fed' } },

  { id: 'look-law', kind: 'lookalike', ledger: 'law-decl~law-fed',
    h: 'Two documents that are not law',
    link: 'Both are quoted as if the founders had settled something.',
    facts: ['law-decl', 'law-fed'],
    instruction: 'Compare what each one was written to do: explain a break with Britain, or argue for approving the Constitution.',
    prompt: { kind: 'which', answer: 'law-fed' },
    difference: [
      'Fact A is the Declaration of Independence: {f:law-decl}. It looks back at a break that had happened and gives the reasons for it.',
      'Fact B is the Federalist Papers: {f:law-fed}. They look forward to a plan of government that had been written but not yet approved, and argue that it should be.'
    ] },

  /* ---------- group three: what the Declaration says ---------- */
  { id: 'con-decl', kind: 'concept',
    h: 'What the Declaration of Independence says',
    link: 'The Declaration is not law, but it is quoted constantly.',
    case: 'cn-consent',
    plain: [
      'The voter is repeating two ideas from the Declaration. They are why it is still quoted, though it is not law. The first is that people have unalienable rights, which means rights that cannot be taken away. It names three of them: life, liberty and the pursuit of happiness. The second is that a government gets its power from the consent of the governed, which means from the people agreeing to be governed. That is why Americans vote: where power comes from the people’s agreement, the people get a say in who runs it.',
      'The rest of the Declaration is a long list of complaints against the king of Britain, the reasons it gives for separating from him.'
    ] },

  { id: 'facts-decl', kind: 'facts',
    h: 'The two ideas',
    link: 'The two ideas the Declaration is quoted for.',
    concept: 'con-decl',
    rows: [
      { id: 'decl-rights', q: 'Which rights does the Declaration say cannot be taken away?', a: 'Among them, life, liberty and the pursuit of happiness',
        relates: 'The Declaration’s word for rights that cannot be taken away is “unalienable”. It states the idea. It is not a law that gives you any of them.' },
      { id: 'decl-consent', q: 'Where does the Declaration say that a government gets its power?', a: 'From the consent of the governed, which means from the people agreeing to be governed',
        relates: 'A government whose power comes from the people’s agreement is one in which the people have a say in who runs it.' }
    ] },

  { id: 'chk-decl-rights', kind: 'check', after: 'facts-decl', ask: { type: 'fact', row: 'decl-rights' } },
  { id: 'chk-decl-consent', kind: 'check', after: 'facts-decl', ask: { type: 'fact', row: 'decl-consent' } }
]);
