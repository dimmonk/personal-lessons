// Civics, Unit Nine, part two: the group of facts about the quarrel with Britain (every answer is a name), then the founding in
// order (every answer is a year). A fact unit (lesson standard A12), a quick lesson (section 19): each group is a concept card, a
// facts card and a check per fact, with a look-alike card for the one pair that people really swap.
// A row's `q` and `a` carry no tokens: the app prints them as they are. Key wording is never typed here.

FC.cards('civics', 'u9', [

  /* ---------- group three: the quarrel with Britain ---------- */
  { id: 'con-hist-quarrel', kind: 'concept',
    h: 'The quarrel with Britain: taxed with no say',
    link: 'What came between the colonists and Britain.',
    case: 'c9-tea',
    plain: [
      'The baker’s complaint was the colonists’ complaint. The size of the fee was not the problem. The problem was that the people who set it were never chosen by the town, and the town could not remove them.',
      'The colonies were ruled from Britain. Parliament, Britain’s lawmakers, taxed the colonists, but the colonists had never voted for anyone in it. They said a tax needs the agreement of the people who pay it, and shortened that to “no taxation without representation”. Representation means that someone you voted for sits in the group that taxes you.',
      'In 1773, in Boston, colonists protested the tax on tea by throwing a ship’s whole cargo of tea into the harbor. This is the Boston Tea Party. Like the baker, they were upset about who set the tax, not about the price of tea.',
      'The same idea, that money is taken and spent only by people the public can vote out, is the history behind the name {o:purse}.'
    ] },

  { id: 'facts-hist-quarrel', kind: 'facts',
    h: 'Three parts of the quarrel',
    link: 'Who taxed, what the colonists said was missing, and the protest.',
    concept: 'con-hist-quarrel',
    rows: [
      { id: 'q-parl', q: 'Which group in Britain taxed the colonists, although they had voted for nobody in it?', a: 'Parliament',
        relates: 'Britain’s lawmakers. The colonists had no one in it and no vote for it, and that was the whole quarrel.' },
      { id: 'q-repr', q: 'The colonists’ short complaint was “no taxation without …” what?', a: 'Representation',
        relates: 'Having someone you voted for in the group that taxes you. The colonists had none, so they said they had never agreed to the tax.' },
      { id: 'q-tea', q: 'In 1773 colonists in Boston threw a ship’s cargo of tea into the harbor. What is that protest called?', a: 'The Boston Tea Party',
        relates: 'A protest against the tax on tea. It was aimed at who set the tax, not at the price of tea.' }
    ] },

  { id: 'chk-hist-q-parl', kind: 'check', after: 'facts-hist-quarrel', ask: { type: 'fact', row: 'q-parl' } },
  { id: 'chk-hist-q-repr', kind: 'check', after: 'facts-hist-quarrel', ask: { type: 'fact', row: 'q-repr' } },
  { id: 'chk-hist-q-tea', kind: 'check', after: 'facts-hist-quarrel', ask: { type: 'fact', row: 'q-tea' } },

  /* ---------- group four: the founding in order ---------- */
  { id: 'con-hist-chain', kind: 'concept',
    h: 'The founding as a chain of years',
    link: 'The quarrel led somewhere: the same story as a row of years.',
    case: 'c9-wall',
    plain: [
      'Mei’s chart puts the story in the order it happened, each event leading to the next. In 1773 came the Boston Tea Party. On July 4, 1776, the colonies adopted the Declaration of Independence, which announced the break with Britain. The war for independence ended in 1783.',
      'Then the new country needed a government. Its first plan, the Articles of Confederation, left the country almost powerless, so in 1787 delegates wrote a better one: the Constitution. It took effect in 1789, and George Washington, who had led the army, became the first President. He is called the Father of Our Country. The Bill of Rights was added in 1791, and the capital moved to Washington, D.C., in 1800.',
      'Two swaps trip people up. The Declaration (1776) announced the break, and the Constitution (1787) set up the government. And the Constitution has two years: it was written in 1787, and it took effect in 1789. A plan is written first and starts working later.'
    ] },

  { id: 'facts-hist-chain', kind: 'facts',
    h: 'Three years of the founding',
    link: 'The three years that people swap most.',
    concept: 'con-hist-chain',
    rows: [
      { id: 'yr-declare', q: 'In which year was the Declaration of Independence adopted, on July 4?', a: '1776',
        relates: 'It announced the break with Britain and said why. It did not set up a government.' },
      { id: 'yr-written', q: 'In which year was the Constitution written?', a: '1787',
        relates: 'Delegates met in Philadelphia to replace the Articles of Confederation, the first plan, which was not working.' },
      { id: 'yr-effect', q: 'In which year did the Constitution take effect?', a: '1789',
        relates: 'The new government started to work, and George Washington became the first President.' }
    ] },

  { id: 'chk-hist-yr-declare', kind: 'check', after: 'facts-hist-chain', ask: { type: 'fact', row: 'yr-declare' } },
  { id: 'chk-hist-yr-written', kind: 'check', after: 'facts-hist-chain', ask: { type: 'fact', row: 'yr-written' } },
  { id: 'chk-hist-yr-effect', kind: 'check', after: 'facts-hist-chain', ask: { type: 'fact', row: 'yr-effect' } },

  { id: 'look-hist-chain-eff', kind: 'lookalike', ledger: 'yr-written~yr-effect',
    h: 'Written in one year, in effect from another',
    link: 'Two years for the Constitution, two years apart.',
    facts: ['yr-written', 'yr-effect'],
    instruction: 'Ask what happened to the Constitution that year: was it written, or did it start to govern?',
    prompt: { kind: 'which', answer: 'yr-effect' },
    difference: [
      'Fact A is the year the Constitution was written: {f:yr-written}. The delegates agreed on the plan.',
      'Fact B is the year the Constitution took effect: {f:yr-effect}. The government it described started to work.'
    ] }
]);
