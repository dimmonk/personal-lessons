// Civics, Unit Two, part two: three groups about the three best-known founding documents. Who wrote each, which of them is
// law, and what the Declaration says. The Bill of Rights is not one of the answers on any card here, so no row offers it and
// the Constitution as rival answers (audit U2-2): the Constitution is the original text and every amendment, and the Bill of
// Rights is the first ten of those amendments (its own group, in part four).

FC.cards('civics', 'u2', [

  /* ---------- group three: who wrote each ---------- */
  { id: 'con-wrote', kind: 'concept',
    h: 'Three documents, three kinds of writer',
    link: 'The dates told you when. This group is about who wrote each of the three best-known documents, because the writer is a good way to hold them apart.',
    case: 'cn-writers',
    plain: [
      'Ana’s cousin has the pattern right: each of the three has a different kind of writer. The Declaration of Independence was adopted on July 4, 1776, and was mainly written by one man, Thomas Jefferson. The Constitution was written in 1787 by delegates who met in Philadelphia, a whole room of them. The Federalist Papers were written by three men, Alexander Hamilton, James Madison and John Jay. They were published as eighty-five essays in the newspapers of New York, in 1787 and 1788.',
      'The three men of the Federalist Papers did not sign their own names. They signed every essay with the same made-up name, “Publius”. A made-up name that a writer signs in place of their own is called a pen name.',
      'So the three can be held apart by the size of the group. The Declaration is one man’s writing, the Constitution is a room of delegates’, and the Federalist Papers are three men’s, signed with one pen name.'
    ] },

  { id: 'facts-wrote', kind: 'facts',
    h: 'Who wrote what',
    link: 'These are the four facts about who wrote the three documents, each with how it fits the idea that the writer tells you which document it is.',
    concept: 'con-wrote',
    rows: [
      { id: 'wrote-decl', q: 'Who mainly wrote the Declaration of Independence?', a: 'Thomas Jefferson',
        relates: 'The Declaration was adopted on July 4, 1776, and it is mostly the work of one writer.' },
      { id: 'wrote-const', q: 'Who wrote the Constitution?', a: 'The delegates who met in Philadelphia in 1787',
        relates: 'Many delegates wrote it together. They had come to Philadelphia to write a replacement for the Articles of Confederation.' },
      { id: 'wrote-fed', q: 'Who wrote the Federalist Papers?', a: 'Alexander Hamilton, James Madison and John Jay',
        relates: 'Three writers produced eighty-five essays, published in New York in 1787 and 1788.' },
      { id: 'wrote-pen', q: 'What name did the writers of the Federalist Papers sign in place of their own?', a: 'Publius',
        relates: 'Every essay was signed with the same pen name. If you meet a newspaper essay from those years signed “Publius”, it is one of the Federalist Papers.' }
    ] },

  { id: 'chk-wrote-decl', kind: 'check', after: 'facts-wrote', ask: { type: 'fact', row: 'wrote-decl' } },
  { id: 'chk-wrote-const', kind: 'check', after: 'facts-wrote', ask: { type: 'fact', row: 'wrote-const' } },
  { id: 'chk-wrote-fed', kind: 'check', after: 'facts-wrote', ask: { type: 'fact', row: 'wrote-fed' } },
  { id: 'chk-wrote-pen', kind: 'check', after: 'facts-wrote', ask: { type: 'fact', row: 'wrote-pen' } },

  /* ---------- group four: which of them is law ---------- */
  { id: 'con-law', kind: 'concept',
    h: 'Which of the three is law',
    link: 'The last group told you who wrote each document. This group asks the question that matters more: can a court make anyone obey it?',
    case: 'cn-claims',
    plain: [
      'Some documents are law, which means that a court can order people to obey them. Others explain, or argue, and a court cannot order anything on their strength. The woman at the meeting is right about the Declaration, and the third person asks the right question about the other two.',
      'The Constitution is law. It opens with the words “We the People”, and it is the supreme law of the land, which means that it outranks every other law. By “the Constitution” this unit means the original text of 1787 together with every amendment added to it since. An amendment is a change added to the Constitution.',
      'The Declaration of Independence is not law. It says why the colonies were leaving Britain, and it set up no government. It is easy to take it for law, because it is so well known. It is not: the law of the land is the Constitution. The Declaration is the source of ideas, and a court cannot order anyone to give you “the pursuit of happiness”, because the Declaration is not a law.',
      'The Federalist Papers are not law either. They are the writers’ own argument for why the Constitution is built the way it is, written to persuade New York to approve it. A judge may quote one of them to understand what the founders had in mind, but the essay does not bind her. If someone says “the Federalist Papers require this”, they have made a mistake: the papers explain the Constitution and are not part of it.'
    ] },

  { id: 'facts-law', kind: 'facts',
    h: 'Law, or not law',
    link: 'These are the three facts, each with how it fits the idea that only a document a court can enforce is law.',
    concept: 'con-law',
    rows: [
      { id: 'law-decl', q: 'Is the Declaration of Independence law?', a: 'Not law, because it says why the colonies were leaving Britain',
        relates: 'It gives reasons for a break, and it sets up no government. A court cannot order anyone to do anything on its strength, including to give you “the pursuit of happiness”.' },
      { id: 'law-const', q: 'Is the Constitution law?', a: 'Law, because it is the supreme law of the land, and it outranks every other law',
        relates: 'It is the founding law: the original text of 1787 and every amendment added since. That includes the Bill of Rights, which is the first ten of those amendments, so the Bill of Rights is law too, and is part of the Constitution.' },
      { id: 'law-fed', q: 'Are the Federalist Papers law?', a: 'Not law, because they are essays that argued for approving the Constitution',
        relates: 'They explain the Constitution and are not part of it. A judge may read them to understand what the founders meant, and is not bound by them.' }
    ] },

  { id: 'chk-law-decl', kind: 'check', after: 'facts-law', ask: { type: 'fact', row: 'law-decl' } },
  { id: 'chk-law-const', kind: 'check', after: 'facts-law', ask: { type: 'fact', row: 'law-const' } },
  { id: 'chk-law-fed', kind: 'check', after: 'facts-law', ask: { type: 'fact', row: 'law-fed' } },

  { id: 'look-law', kind: 'lookalike', ledger: 'law-decl~law-fed',
    h: 'Two documents that are not law',
    link: 'Two of the three facts are about documents that are not law, and both are quoted as if the founders had settled something. They get swapped, so they go side by side.',
    facts: ['law-decl', 'law-fed'],
    instruction: 'Compare what each one was written to do: explain a break with Britain, or argue for approving the Constitution.',
    prompt: { kind: 'which', answer: 'law-fed' },
    difference: [
      'Fact A is the Declaration of Independence: {f:law-decl}. It looks back at a break that had happened, and gives the reasons for it.',
      'Fact B is the Federalist Papers: {f:law-fed}. They look forward to a plan of government that had been written but not yet approved, and they argue that it should be.',
      'Neither is law, and the reason is the same: a court cannot order anyone to do anything because an argument or an explanation said so. What differs is the subject. One explains why the colonies left, and the other argues for the Constitution.'
    ] },

  /* ---------- group five: what the Declaration says ---------- */
  { id: 'con-decl', kind: 'concept',
    h: 'What the Declaration of Independence says',
    link: 'The Declaration is not law, but it says things that are quoted constantly. This group holds what it says.',
    case: 'cn-consent',
    plain: [
      'The voter in the story is repeating two ideas from the Declaration of Independence. They are why the Declaration is still quoted, though it is not law.',
      'The Declaration is mainly a long list of complaints against the king of Britain, and the list is the reasons it gives for separating from him. It also states two ideas that shaped everything after it. The first is that people have unalienable rights. “Unalienable” is the Declaration’s own word, and it means that the rights cannot be taken away. It names three of them, and says that they are among those rights: life, liberty and the pursuit of happiness. The second idea is that a government gets its power from the consent of the governed, which means from the people agreeing to be governed.',
      'The voter’s words show how the second idea works in life. A government whose power comes from the people’s agreement is one in which the people get a say in who runs it. That is the Declaration’s idea of consent, and it is why Americans vote.',
      'The Declaration is still not law. Use it for the “why”, such as why power comes from the people, and not as a rule that a court must follow.'
    ] },

  { id: 'facts-decl', kind: 'facts',
    h: 'The reasons and the two ideas',
    link: 'These are the three facts about what the Declaration says, each with how it fits the idea that the Declaration explains why and does not rule.',
    concept: 'con-decl',
    rows: [
      { id: 'decl-reasons', q: 'What reasons does the Declaration give for separating from Britain?', a: 'A long list of complaints against the king',
        relates: 'The list is most of the document. It argues that a break was justified, and it builds nothing.' },
      { id: 'decl-rights', q: 'Which rights does the Declaration say cannot be taken away?', a: 'Among them, life, liberty and the pursuit of happiness',
        relates: 'The Declaration’s word for rights that cannot be taken away is “unalienable”. It says these three are among them. It states the idea. It is not a law that gives you any of them.' },
      { id: 'decl-consent', q: 'Where does the Declaration say that a government gets its power?', a: 'From the consent of the governed, which means from the people agreeing to be governed',
        relates: 'This is the idea that the voter was repeating. A government that has its power from the people’s agreement is one in which the people have a say in who runs it.' }
    ] },

  { id: 'chk-decl-reasons', kind: 'check', after: 'facts-decl', ask: { type: 'fact', row: 'decl-reasons' } },
  { id: 'chk-decl-rights', kind: 'check', after: 'facts-decl', ask: { type: 'fact', row: 'decl-rights' } },
  { id: 'chk-decl-consent', kind: 'check', after: 'facts-decl', ask: { type: 'fact', row: 'decl-consent' } }
]);
