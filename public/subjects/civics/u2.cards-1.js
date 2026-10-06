// Civics, Unit Two, part one: the opening card, then the first group of facts, the four dates.
// This is a FACT unit (lesson standard A12): facts to hold, not a skill to apply. Each group is a concept card (a case, then the
// idea in plain words), a facts card (one row per fact), and one check per fact. A row's question is asked from memory and its
// answer is one of the choices for every other row on the same card, so the answers on one card are all of one form.
// The app prints, and this file therefore does not contain: what a fact unit is, the groups of facts, the parts, the stakes
// line, the heading of a check and of a look-alike stem. Key wording is never typed here: tokens fill it in.

FC.cards('civics', 'u2', [

  { id: 'orient-const', kind: 'orient',
    h: 'Facts to hold, about the Constitution and the changes made to it',
    canDo: [
      'By the end of this unit you can say which founding documents are law, what the Constitution lets Congress do, what the Bill of Rights protects, how the Constitution is changed, and what four later amendments did.',
      'They are worth holding because the Constitution is the country’s highest law, the news says “the First Amendment” all the time, and the citizenship interview asks about these documents directly.'
    ],
    everyday: [
      'One friend says: “You can’t do that to me, it’s my First Amendment right.” Another says: “The Declaration of Independence promises me the pursuit of happiness, so a court has to give me a good life.” Both are using a founding document, but very different kinds. One limits what a government may do. The other is not law at all.',
      'The stories in Unit One ended on a decision by one of four kinds of decision-maker: {plain:congress}; {plain:president}; {plain:courts}; or {plain:states}. The Constitution builds the first three and says what each may do.'
    ],
    add: [
      'This unit holds the essentials, not everything: five of the first ten amendments, four of the seventeen later ones, and the first three of the seven articles. Where a right ends, and how far a power reaches, is argued in court for years. This unit holds the facts, not the arguments.'
    ] },

  /* ---------- group one: the four dates ---------- */
  { id: 'con-date', kind: 'concept',
    h: 'Four dates, and what happened in each',
    link: 'The founding story in four dates.',
    case: 'cn-timeline',
    plain: [
      'The student is right that the middle two sound alike. Hold each year together with what happened in it.',
      'In 1776 the colonies announced that they were separating from Britain: the Declaration of Independence, adopted on July 4. It announced a break and set up no government. The country’s first plan of government, the Articles of Confederation, left the government of the whole country almost powerless, so in 1787 delegates, people chosen to speak for their states, met in Philadelphia and wrote the Constitution to replace it. The government under it began in 1789. In 1791 the Bill of Rights was added.',
      '1787 and 1789 are both years of the Constitution, two years apart, and they are the pair that gets swapped: a document is written first, and a government begins to work under it afterwards.'
    ] },

  { id: 'facts-date', kind: 'facts',
    h: 'The four dates',
    link: 'The four dates, each with what happened in it.',
    concept: 'con-date',
    rows: [
      { id: 'date-decl', q: 'In which year did the colonies announce that they were separating from Britain?', a: '1776',
        relates: 'That is the Declaration of Independence, adopted on July 4, 1776. It announced a break with Britain and set up no government.' },
      { id: 'date-convention', q: 'In which year did delegates meet in Philadelphia to write the Constitution?', a: '1787',
        relates: 'The first plan was failing, so delegates met to write a replacement, eleven years after the Declaration.' },
      { id: 'date-start', q: 'In which year did the government under the Constitution begin?', a: '1789',
        relates: 'The Constitution was written in 1787 and the new government began two years later.' },
      { id: 'date-bor', q: 'In which year was the Bill of Rights added to the Constitution?', a: '1791',
        relates: 'It was added after the new government began, as the first ten amendments to the Constitution.' }
    ] },

  { id: 'chk-date-decl', kind: 'check', after: 'facts-date', ask: { type: 'fact', row: 'date-decl' } },
  { id: 'chk-date-convention', kind: 'check', after: 'facts-date', ask: { type: 'fact', row: 'date-convention' } },
  { id: 'chk-date-start', kind: 'check', after: 'facts-date', ask: { type: 'fact', row: 'date-start' } },
  { id: 'chk-date-bor', kind: 'check', after: 'facts-date', ask: { type: 'fact', row: 'date-bor' } },

  { id: 'look-date', kind: 'lookalike', ledger: 'date-convention~date-start',
    h: 'The year it was written, and the year it began',
    link: 'Two years of the Constitution, only two years apart.',
    facts: ['date-convention', 'date-start'],
    instruction: 'Compare what happened in each year: the Constitution being written, or the government under it beginning.',
    prompt: { kind: 'which', answer: 'date-start' },
    difference: [
      'Fact A is the year the delegates wrote the Constitution: {f:date-convention}.',
      'Fact B is the year the government under it began: {f:date-start}. A document is written first, and a government begins to work under it afterwards.'
    ] }
]);
