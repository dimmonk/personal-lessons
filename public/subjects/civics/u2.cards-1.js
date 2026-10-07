// Civics, Unit Two, part one: the opening card, then the first group of facts, the four dates.
// This is a FACT unit (lesson standard A12): facts to hold, not a skill to apply. Each group is a concept card (a case, then the
// idea in plain words), a facts card (one row per fact), and one check per fact. A row's question is asked from memory and its
// answer is one of the choices for every other row on the same card, so the answers on one card are all of one form.
// The app prints, and this file therefore does not contain: what a fact unit is, the groups of facts, the parts, the stakes
// line, the heading of a check and of a look-alike stem. Key wording is never typed here: tokens fill it in.

FC.cards('civics', 'u2', [

  { id: 'orient-const', kind: 'orient',
    h: 'Which founding documents are law, and what they cover',
    canDo: [
      'Next time someone says “that’s my First Amendment right” or “the Declaration of Independence promises me that”, you will know which documents are law, what each amendment protects, and what Congress can and cannot do.',
      'The news names amendments by number all the time, and the citizenship interview asks about these documents directly.'
    ],
    everyday: [
      'One friend says: “You can’t do that to me, it’s my First Amendment right.” Another says: “The Declaration of Independence promises me the pursuit of happiness, so a court has to give me a good life.” One of those documents limits what the government may do. The other is not law at all.',
      'Unit One ended every story on a decision by one of four: {plain:congress}; {plain:president}; {plain:courts}; or {plain:states}. The Constitution sets up the first three and says what each may do.'
    ],
    add: [
      'This is the short list that comes up most, not everything: five of the first ten amendments, four of the seventeen later ones, and the first three of the seven articles. Where a right ends and how far a power reaches gets argued in court for years, and this unit does not cover those arguments.'
    ] },

  /* ---------- group one: the four dates ---------- */
  { id: 'con-date', kind: 'concept',
    h: 'Four dates, and what happened in each',
    link: 'The founding story in four dates.',
    case: 'cn-timeline',
    plain: [
      'The student’s trouble is the middle two. Tie each year to one thing that happened in it.',
      'In 1776 the colonies announced they were leaving Britain. That is the Declaration of Independence, adopted on July 4. It announced a break, but it set up no government.',
      'The country’s first plan of government, the Articles of Confederation, left the government of the whole country almost powerless. So in 1787 delegates, people chosen to speak for their states, met in Philadelphia and wrote the Constitution to replace it. The government under it began in 1789. In 1791 the Bill of Rights was added.',
      '1787 and 1789 are the pair people swap. Remember the order: the document is written first (1787), and the government starts working under it two years later (1789).'
    ] },

  { id: 'facts-date', kind: 'facts',
    h: 'The four dates',
    link: 'Each year, and what happened in it.',
    concept: 'con-date',
    rows: [
      { id: 'date-decl', q: 'In which year did the colonies announce that they were separating from Britain?', a: '1776',
        relates: 'That is the Declaration of Independence, adopted on July 4, 1776. It announced a break with Britain and set up no government.' },
      { id: 'date-convention', q: 'In which year did delegates meet in Philadelphia to write the Constitution?', a: '1787',
        relates: 'The first plan of government was failing, so delegates met to write a new one, eleven years after the Declaration.' },
      { id: 'date-start', q: 'In which year did the government under the Constitution begin?', a: '1789',
        relates: 'The Constitution was written in 1787, and the new government began two years later.' },
      { id: 'date-bor', q: 'In which year was the Bill of Rights added to the Constitution?', a: '1791',
        relates: 'It came after the new government began, as the first ten amendments to the Constitution.' }
    ] },

  { id: 'chk-date-decl', kind: 'check', after: 'facts-date', ask: { type: 'fact', row: 'date-decl' } },
  { id: 'chk-date-convention', kind: 'check', after: 'facts-date', ask: { type: 'fact', row: 'date-convention' } },
  { id: 'chk-date-start', kind: 'check', after: 'facts-date', ask: { type: 'fact', row: 'date-start' } },
  { id: 'chk-date-bor', kind: 'check', after: 'facts-date', ask: { type: 'fact', row: 'date-bor' } },

  { id: 'look-date', kind: 'lookalike', ledger: 'date-convention~date-start',
    h: 'The year it was written, and the year it began',
    link: 'Two years of the Constitution, only two years apart.',
    facts: ['date-convention', 'date-start'],
    instruction: 'Ask what happened in each year: the Constitution being written, or the government starting to work under it.',
    prompt: { kind: 'which', answer: 'date-start' },
    difference: [
      'Fact A is the year the delegates wrote the Constitution: {f:date-convention}.',
      'Fact B is the year the government under it began: {f:date-start}. The document comes first, and the government starts working under it afterwards.'
    ] }
]);
