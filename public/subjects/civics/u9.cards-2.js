// Civics, Unit Nine, part two: the group of facts about the quarrel with Britain (every answer is a name), then the founding in
// order (every answer is a year). A fact unit (lesson standard A12), a quick lesson (section 19): each group is a concept card, a
// facts card and a check per fact, with a look-alike card for the one pair that people really swap.
// A row's `q` and `a` carry no tokens: the app prints them as they are. Key wording is never typed here.

FC.cards('civics', 'u9', [

  /* ---------- group three: the quarrel with Britain ---------- */
  { id: 'con-hist-quarrel', kind: 'concept',
    h: 'The quarrel with Britain: taxed with no say',
    link: 'What came between the colonists and Britain, and how a group of colonies became a country.',
    case: 'c9-tea',
    plain: [
      'The baker’s complaint is the colonists’ complaint. It is not that the fee is large. It is that the people who set it are people the town never chose and cannot remove.',
      'The colonies were governed from Britain. Parliament, Britain’s body of lawmakers, taxed the colonists, who had elected nobody to it. They said that a tax needs the consent of the people who pay it, and put it in a short form: “no taxation without representation”. Representation means having someone you elected in the body that taxes you.',
      'In 1773, in Boston, colonists protested the tax on tea by throwing a ship’s whole cargo of tea into the harbor. This is the Boston Tea Party. It was not about the price of tea. It was about the body that had laid the tax.',
      'The same idea, that money is taken and spent only by people whom the public can vote out, is the history behind the name {o:purse}.'
    ] },

  { id: 'facts-hist-quarrel', kind: 'facts',
    h: 'Three parts of the quarrel',
    link: 'Who taxed, what the colonists said was missing, and the protest.',
    concept: 'con-hist-quarrel',
    rows: [
      { id: 'q-parl', q: 'Which body in Britain taxed the colonists, although they had elected nobody to it?', a: 'Parliament',
        relates: 'Britain’s body of lawmakers. The colonists had no one in it and no vote for it, which is the whole of the quarrel.' },
      { id: 'q-repr', q: 'The colonists’ short form of their complaint was “no taxation without …” what?', a: 'Representation',
        relates: 'Having someone you elected in the body that taxes you. The colonists said they did not have it, and so had not consented to the tax.' },
      { id: 'q-tea', q: 'In 1773 colonists in Boston threw a ship’s cargo of tea into the harbor. What is that protest called?', a: 'The Boston Tea Party',
        relates: 'A protest against the tax on tea, aimed at the body that had laid the tax, and not at the price of tea.' }
    ] },

  { id: 'chk-hist-q-parl', kind: 'check', after: 'facts-hist-quarrel', ask: { type: 'fact', row: 'q-parl' } },
  { id: 'chk-hist-q-repr', kind: 'check', after: 'facts-hist-quarrel', ask: { type: 'fact', row: 'q-repr' } },
  { id: 'chk-hist-q-tea', kind: 'check', after: 'facts-hist-quarrel', ask: { type: 'fact', row: 'q-tea' } },

  /* ---------- group four: the founding in order ---------- */
  { id: 'con-hist-chain', kind: 'concept',
    h: 'The founding as a chain of years',
    link: 'The quarrel led somewhere. This group is the same story as a row of years.',
    case: 'c9-wall',
    plain: [
      'Mei’s chart is the story in the order that it happened, and each event leads to the next. In 1773 came the Boston Tea Party. On July 4, 1776, the colonies adopted the Declaration of Independence, which announced the break with Britain. The war for independence ended in 1783.',
      'The country then needed a government. Its first plan, the Articles of Confederation, left the whole country almost powerless, so in 1787 delegates wrote a replacement: the Constitution. It took effect in 1789, and in that year George Washington, who had commanded the army, became the first President. He is known as the Father of Our Country. The Bill of Rights was added in 1791, and the capital moved to Washington, D.C., in 1800.',
      'Two things are easy to swap. The Declaration announced the break, in 1776, and the Constitution set up the government, in 1787. And the Constitution has two years: it was written in 1787 and took effect in 1789.'
    ] },

  { id: 'facts-hist-chain', kind: 'facts',
    h: 'Three years of the founding',
    link: 'The three years that people swap most.',
    concept: 'con-hist-chain',
    rows: [
      { id: 'yr-declare', q: 'In which year was the Declaration of Independence adopted, on July 4?', a: '1776',
        relates: 'It announced the break with Britain and explained why. It did not set up a government.' },
      { id: 'yr-written', q: 'In which year was the Constitution written?', a: '1787',
        relates: 'Delegates met in Philadelphia to replace the Articles of Confederation, the first plan of government, which was failing.' },
      { id: 'yr-effect', q: 'In which year did the Constitution take effect?', a: '1789',
        relates: 'The new government began to work, and George Washington became the first President. A plan can be written in one year and begin to govern in another.' }
    ] },

  { id: 'chk-hist-yr-declare', kind: 'check', after: 'facts-hist-chain', ask: { type: 'fact', row: 'yr-declare' } },
  { id: 'chk-hist-yr-written', kind: 'check', after: 'facts-hist-chain', ask: { type: 'fact', row: 'yr-written' } },
  { id: 'chk-hist-yr-effect', kind: 'check', after: 'facts-hist-chain', ask: { type: 'fact', row: 'yr-effect' } },

  { id: 'look-hist-chain-eff', kind: 'lookalike', ledger: 'yr-written~yr-effect',
    h: 'Written in one year, in effect from another',
    link: 'Two years of the Constitution, only two years apart.',
    facts: ['yr-written', 'yr-effect'],
    instruction: 'Compare what happened to the Constitution in each year: it was written, or it began to govern.',
    prompt: { kind: 'which', answer: 'yr-effect' },
    difference: [
      'Fact A is the year the Constitution was written: {f:yr-written}. That is when the delegates agreed on the plan.',
      'Fact B is the year the Constitution took effect: {f:yr-effect}. That is when the government it described began to work.'
    ] }
]);
