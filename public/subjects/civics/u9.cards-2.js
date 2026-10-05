// Civics, Unit Nine, part two: the group of facts about the quarrel with Britain (every answer is a name), then the groups about the founding. The eight years of the founding, in the order they happened
// (every answer on that card is a year), then the man and the city that share a name (every answer is a name). A fact unit (lesson
// standard A12): each group is a concept card, a facts card and a check per fact, with a look-alike card where two facts are swapped.
// A row's `q` and `a` carry no tokens: the app prints them as they are. Key wording is never typed here.

FC.cards('civics', 'u9', [

  /* ---------- group three: the quarrel with Britain ---------- */
  { id: 'con-hist-quarrel', kind: 'concept',
    h: 'The quarrel with Britain: taxed with no say',
    link: 'The first two groups are about who came to the colonies. The third is about what came between the colonists and Britain, which is how a group of colonies became a country.',
    case: 'c9-tea',
    plain: [
      'Hold the baker’s complaint, because it is the colonists’ complaint. It is not that the fee is large. It is that the people who set it are people the town never chose and cannot remove.',
      'The colonies were governed from Britain. Parliament, Britain’s body of lawmakers, taxed the colonists, and the colonists had elected nobody to it. They said that this was wrong, and their reason has a name: consent. Consent is the agreement of the people who are taxed. The colonists’ short form of the idea was “no taxation without representation”. Representation here means having someone you elected in the body that taxes you.',
      'So the quarrel with Britain was about consent, and the slogan says what was missing: representation. A tax laid by a body that had no one of theirs in it was a tax that they had not agreed to.',
      'In 1773, in Boston, colonists protested the tax on tea by throwing a ship’s whole cargo of tea into the harbour. This is the Boston Tea Party. The point of it was not the price of tea. It was that the tax had been laid by a body that would not listen to them.',
      'The same idea, that money is taken and spent only by people whom the public can vote out, is the history behind the name {o:purse}.',
      'The four facts below are the parts of the quarrel: who taxed, what the colonists said was missing, the short form of their complaint, and the protest.'
    ] },

  { id: 'facts-hist-quarrel', kind: 'facts',
    h: 'Four parts of the quarrel',
    link: 'These are the four parts of the quarrel, each with how it fits the idea that a tax needs the consent of the people who pay it.',
    concept: 'con-hist-quarrel',
    rows: [
      { id: 'q-parl', q: 'Which body in Britain taxed the colonists, although they had elected nobody to it?', a: 'Parliament',
        relates: 'Parliament was Britain’s body of lawmakers. The colonists had no one in it and no vote for it, which is the whole of the quarrel.' },
      { id: 'q-consent', q: 'The colonists said that a tax laid on people who had not agreed to it was wrong. What is that agreement called?', a: 'Consent',
        relates: 'Consent is the agreement of the people who are taxed. The quarrel with Britain was about consent, and not about the size of any tax.' },
      { id: 'q-repr', q: 'The colonists’ short form of their complaint was “no taxation without …” what?', a: 'Representation',
        relates: 'Representation is having someone you elected in the body that taxes you. The short form says that this was what the colonists did not have.' },
      { id: 'q-tea', q: 'In 1773 colonists in Boston threw a ship’s cargo of tea into the harbour. What is that protest called?', a: 'The Boston Tea Party',
        relates: 'It was a protest against the tax on tea, and it was about the body that had laid the tax, not about the price of tea.' }
    ] },

  { id: 'chk-hist-q-parl', kind: 'check', after: 'facts-hist-quarrel', ask: { type: 'fact', row: 'q-parl' } },
  { id: 'chk-hist-q-consent', kind: 'check', after: 'facts-hist-quarrel', ask: { type: 'fact', row: 'q-consent' } },
  { id: 'chk-hist-q-repr', kind: 'check', after: 'facts-hist-quarrel', ask: { type: 'fact', row: 'q-repr' } },
  { id: 'chk-hist-q-tea', kind: 'check', after: 'facts-hist-quarrel', ask: { type: 'fact', row: 'q-tea' } },

  { id: 'look-hist-quarrel', kind: 'lookalike', ledger: 'q-consent~q-repr',
    h: 'Agreeing to a tax, and having someone in the room',
    link: 'Two of the four facts both describe what the colonists said was missing, and they sound like one idea. They get swapped, so they go side by side.',
    facts: ['q-consent', 'q-repr'],
    instruction: 'Compare what each one is: an agreement, or a seat held by someone you elected.',
    prompt: { kind: 'which', answer: 'q-repr' },
    difference: [
      'Fact A is about the agreement of the people who are taxed: {f:q-consent}. It is what the quarrel was about.',
      'Fact B is about having someone you elected in the body that taxes you: {f:q-repr}. It is the word in the colonists’ short form.',
      'The two belong together. The colonists’ argument was that a tax needs consent, and the short form says that what they lacked was representation. The first is the idea, and the second is the word that they used for what was missing.'
    ] },

  /* ---------- group four: the founding in order ---------- */
  { id: 'con-hist-chain', kind: 'concept',
    h: 'The founding as a chain of years',
    link: 'The quarrel with Britain led somewhere. This group is the same story as a row of years, each one leading to the next.',
    case: 'c9-wall',
    plain: [
      'Mei’s chart is the story in the order that it happened. Holding the years as a chain, where each event leads to the next, is easier than holding eight separate numbers. Here is the chain.',
      'From 1619, many people were brought to the colonies as enslaved people. In 1773 the colonists in Boston protested the tax on tea. On July 4, 1776, the colonies adopted the Declaration of Independence, which announced the break with Britain. The war for independence ended in 1783.',
      'The country then needed a government. Its first plan, the Articles of Confederation, left the government of the whole country almost powerless, and within a few years it was plainly failing. In 1787 delegates wrote a replacement: the Constitution. It took effect in 1789, and in that year George Washington, who had commanded the army, became the first President. In 1791 the Bill of Rights was added to it. In 1800 the capital moved to Washington, D.C.',
      'Two pairs of years are easy to swap. The Declaration and the Constitution are both founding documents, but one announced the break, in 1776, and the other set up the government, in 1787. And the Constitution itself has two years: it was written in 1787, and it took effect in 1789.',
      'The eight facts below are the eight years in the chain.'
    ] },

  { id: 'facts-hist-chain', kind: 'facts',
    h: 'Eight years of the founding',
    link: 'These are the eight years, each with how it fits the chain from the quarrel to the new government.',
    concept: 'con-hist-chain',
    rows: [
      { id: 'yr-slavery', q: 'From which year were many people brought to the colonies as enslaved people?', a: '1619',
        relates: 'It is the earliest year in the chain, well before any quarrel with Britain.' },
      { id: 'yr-tea', q: 'In which year was the Boston Tea Party?', a: '1773',
        relates: 'Colonists protested a tax laid by a body they had not elected. The Declaration followed three years later.' },
      { id: 'yr-declare', q: 'In which year was the Declaration of Independence adopted, on July 4?', a: '1776',
        relates: 'It announced the break with Britain and explained why the colonies were breaking away. It did not set up a government.' },
      { id: 'yr-warend', q: 'In which year did the war for independence end?', a: '1783',
        relates: 'The war ended seven years after the Declaration. After it, the country had to decide how to govern itself.' },
      { id: 'yr-written', q: 'In which year was the Constitution written?', a: '1787',
        relates: 'Delegates, who were people chosen to speak for their states, met in Philadelphia to replace the Articles of Confederation, the first plan of government, which was failing.' },
      { id: 'yr-effect', q: 'In which year did the Constitution take effect?', a: '1789',
        relates: 'The new government began to work in 1789, and in that year George Washington became the first President. A plan can be written in one year and begin to govern in another.' },
      { id: 'yr-rights', q: 'In which year was the Bill of Rights added to the Constitution?', a: '1791',
        relates: 'The Bill of Rights is the first ten amendments. It was added four years after the Constitution was written and two years after it took effect.' },
      { id: 'yr-capital', q: 'In which year did the capital move to Washington, D.C.?', a: '1800',
        relates: 'It is the last year in the chain: the new government had its own city.' }
    ] },

  { id: 'chk-hist-yr-slavery', kind: 'check', after: 'facts-hist-chain', ask: { type: 'fact', row: 'yr-slavery' } },
  { id: 'chk-hist-yr-tea', kind: 'check', after: 'facts-hist-chain', ask: { type: 'fact', row: 'yr-tea' } },
  { id: 'chk-hist-yr-declare', kind: 'check', after: 'facts-hist-chain', ask: { type: 'fact', row: 'yr-declare' } },
  { id: 'chk-hist-yr-warend', kind: 'check', after: 'facts-hist-chain', ask: { type: 'fact', row: 'yr-warend' } },
  { id: 'chk-hist-yr-written', kind: 'check', after: 'facts-hist-chain', ask: { type: 'fact', row: 'yr-written' } },
  { id: 'chk-hist-yr-effect', kind: 'check', after: 'facts-hist-chain', ask: { type: 'fact', row: 'yr-effect' } },
  { id: 'chk-hist-yr-rights', kind: 'check', after: 'facts-hist-chain', ask: { type: 'fact', row: 'yr-rights' } },
  { id: 'chk-hist-yr-capital', kind: 'check', after: 'facts-hist-chain', ask: { type: 'fact', row: 'yr-capital' } },

  { id: 'look-hist-chain-doc', kind: 'lookalike', ledger: 'yr-declare~yr-written',
    h: 'The year of the break, and the year of the plan',
    link: 'Two of the eight years belong to the two best-known founding documents, so they get swapped, and they go side by side.',
    facts: ['yr-declare', 'yr-written'],
    instruction: 'Compare what each year is the year of: announcing a break, or writing a plan of government.',
    prompt: { kind: 'which', answer: 'yr-written' },
    difference: [
      'Fact A is the year of the break: {f:yr-declare}. The Declaration of Independence said that the colonies were separating from Britain, and it did not set up a government.',
      'Fact B is the year of the plan: {f:yr-written}. The Constitution was the new plan of government, written after the first plan had failed.',
      'The break came first, then a war, then a failing first plan, and then the new one. Eleven years separate the two documents.'
    ] },

  { id: 'look-hist-chain-eff', kind: 'lookalike', ledger: 'yr-written~yr-effect',
    h: 'Written in one year, in effect from another',
    link: 'Two of the eight years are both years in the life of the Constitution, and only two years apart. They get swapped, so they go side by side.',
    facts: ['yr-written', 'yr-effect'],
    instruction: 'Compare what happened to the Constitution in each year: it was written, or it began to govern.',
    prompt: { kind: 'which', answer: 'yr-effect' },
    difference: [
      'Fact A is the year the Constitution was written: {f:yr-written}. That is when the delegates agreed on the plan.',
      'Fact B is the year the Constitution took effect: {f:yr-effect}. That is when the government it described began to work, and when Washington became the first President.',
      'The plan was written first and began to govern two years later.'
    ] },

  /* ---------- group five: the man and the city ---------- */
  { id: 'con-hist-wash', kind: 'concept',
    h: 'One name, a man and a city',
    link: 'The chain ends with a city, and the chain has a man in it. They share a name, and the fifth group is about keeping them apart.',
    case: 'c9-two',
    plain: [
      'Ana’s answer is right twice, which makes her a good person to learn from. Washington is the name of a man and of a city, and a person can be asked about either.',
      'The man is George Washington. He commanded the army in the war for independence, and in 1789, when the Constitution took effect, he became the first President. He is known by a title: the Father of Our Country.',
      'The city is Washington, D.C. It became the capital in 1800.',
      'The three facts below are the man, the city and the title. Keep the first two apart: one is a person, and one is a place.'
    ] },

  { id: 'facts-hist-wash', kind: 'facts',
    h: 'The man, the city and the title',
    link: 'These are the three facts, each with how it fits the idea that one name can belong to a person and to a place.',
    concept: 'con-hist-wash',
    rows: [
      { id: 'wash-man', q: 'Who commanded the army in the war for independence and became the first President?', a: 'George Washington',
        relates: 'He is the man. He commanded the army in the war for independence, and in 1789, the year the Constitution took effect, he became the first President.' },
      { id: 'wash-city', q: 'Which city became the capital of the United States in 1800?', a: 'Washington, D.C.',
        relates: 'It is the city. The capital moved there in 1800, which is the last year in the chain of the founding.' },
      { id: 'wash-title', q: 'By what title is the first President known?', a: 'Father of Our Country',
        relates: 'The title belongs to the man, George Washington, and not to the city.' }
    ] },

  { id: 'chk-hist-wash-man', kind: 'check', after: 'facts-hist-wash', ask: { type: 'fact', row: 'wash-man' } },
  { id: 'chk-hist-wash-city', kind: 'check', after: 'facts-hist-wash', ask: { type: 'fact', row: 'wash-city' } },
  { id: 'chk-hist-wash-title', kind: 'check', after: 'facts-hist-wash', ask: { type: 'fact', row: 'wash-title' } },

  { id: 'look-hist-wash', kind: 'lookalike', ledger: 'wash-man~wash-city',
    h: 'A person called Washington, and a place called Washington',
    link: 'Two of the three facts have a name in common. They get swapped, so they go side by side.',
    facts: ['wash-man', 'wash-city'],
    instruction: 'Compare what each one is: a person who led, or a place where the government sits.',
    prompt: { kind: 'which', answer: 'wash-city' },
    difference: [
      'Fact A is about a person: {f:wash-man}. He commanded the army and became the first President.',
      'Fact B is about a place: {f:wash-city}. It is the capital, and it became the capital in 1800.',
      'The word is the same in both, and the questions are not. One asks who, and the other asks which city.'
    ] }
]);
