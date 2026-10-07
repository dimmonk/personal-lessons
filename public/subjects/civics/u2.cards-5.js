// Civics, Unit Two, part five (first half): how the Constitution is changed, and the Fourteenth Amendment. The Fourteenth is held in
// its three parts (a citizen, due process and equal protection, and the limits brought to the states). All of it is from the old
// Unit Two and the Fourteenth Amendment lines of the old Unit One.

FC.cards('civics', 'u2', [

  /* ---------- group eight: how the Constitution is changed ---------- */
  { id: 'con-chg', kind: 'concept',
    h: 'How the Constitution is changed',
    link: 'How any change is made, and how many have been.',
    case: 'cn-change',
    plain: [
      'Sam’s friend is right: it is meant to be hard. There are two steps. First, two-thirds of both chambers of Congress, the House of Representatives and the Senate, must vote to propose the change. Second, three-quarters of the states must approve it. The word for the states’ approval is “ratify”. A change made this way is an amendment, and it becomes part of the Constitution.',
      'Because it is so hard, thousands of changes have been proposed and only twenty-seven adopted. Ten of those were added together in 1791: that is the Bill of Rights. Seventeen came after it.'
    ] },

  { id: 'facts-chg', kind: 'facts',
    h: 'Two fractions and a number',
    link: 'Changing the Constitution is hard, and has rarely been done.',
    concept: 'con-chg',
    rows: [
      { id: 'chg-propose', q: 'What share of both chambers of Congress must vote to propose an amendment?', a: 'Two-thirds',
        relates: 'Two-thirds of the House of Representatives and two-thirds of the Senate. This is the first of the two steps.' },
      { id: 'chg-approve', q: 'What share of the states must approve a proposed amendment?', a: 'Three-quarters',
        relates: 'This is the second of the two steps, and the bigger fraction.' },
      { id: 'chg-total', q: 'How many amendments does the Constitution have so far?', a: 'Twenty-seven',
        relates: 'Thousands have been proposed. Only twenty-seven have been adopted.' }
    ] },

  { id: 'chk-chg-propose', kind: 'check', after: 'facts-chg', ask: { type: 'fact', row: 'chg-propose' } },
  { id: 'chk-chg-approve', kind: 'check', after: 'facts-chg', ask: { type: 'fact', row: 'chg-approve' } },
  { id: 'chk-chg-total', kind: 'check', after: 'facts-chg', ask: { type: 'fact', row: 'chg-total' } },

  { id: 'look-chg', kind: 'lookalike', ledger: 'chg-propose~chg-approve',
    h: 'Two-thirds, and three-quarters',
    link: 'Two fractions that must both say yes before the Constitution changes.',
    facts: ['chg-propose', 'chg-approve'],
    instruction: 'Ask who is voting: Congress proposing a change, or the states approving it.',
    prompt: { kind: 'which', answer: 'chg-approve' },
    difference: [
      'Fact A is the vote in Congress: {f:chg-propose}, in both chambers. It comes first.',
      'Fact B is the approval of the states: {f:chg-approve}. It comes second. The smaller fraction is in Congress, and the bigger one is among the states.'
    ] },

  /* ---------- group nine: the Fourteenth Amendment ---------- */
  { id: 'con-fth', kind: 'concept',
    h: 'The Fourteenth Amendment',
    link: 'The amendment that answers: does the Bill of Rights stop a state?',
    case: 'cn-permit',
    plain: [
      'The lawyer asks a good question. The Bill of Rights was first written to limit only the federal government. The First Amendment begins “Congress shall make no law”, and it never mentions a state.',
      'The answer is the Fourteenth Amendment, adopted in 1868, after the Civil War. It did three things.',
      'First, anyone born in the United States is a citizen.',
      'Second, no state may take a person’s life, liberty or property without due process, which means fair legal steps, or deny anyone equal protection of the laws, which means equal treatment in the same situation.',
      'Third, the courts later read it to bring the limits in the Bill of Rights to the states, so that they protect you against your state and your city as well. That third one answers the lawyer.'
    ] },

  { id: 'facts-fth', kind: 'facts',
    h: 'The three parts of the Fourteenth Amendment',
    link: 'The Fourteenth Amendment limits a state, and brings the Bill of Rights to it.',
    concept: 'con-fth',
    rows: [
      { id: 'fth-citizen', q: 'What does the Fourteenth Amendment make of anyone born in the United States?', a: 'A citizen of the United States',
        relates: 'This is the first part, and it was adopted after the Civil War.' },
      { id: 'fth-process', q: 'What does the Fourteenth Amendment require of a state that wants to take a person’s life, liberty or property?', a: 'Due process: fair legal steps',
        relates: 'It is the same idea as in the Fifth Amendment, here as a limit on a state.' },
      { id: 'fth-equal', q: 'What does the Fourteenth Amendment forbid a state to deny anyone?', a: 'Equal protection of the laws: equal treatment in the same situation',
        relates: 'Two people in the same situation must be treated the same way by a state.' },
      { id: 'fth-states', q: 'What did the courts later read the Fourteenth Amendment to bring to the states?', a: 'The limits in the Bill of Rights, so they stop a state or a city too',
        relates: 'This answers the lawyer’s question: today those limits protect you against your state and your city as well.' }
    ] },

  { id: 'chk-fth-citizen', kind: 'check', after: 'facts-fth', ask: { type: 'fact', row: 'fth-citizen' } },
  { id: 'chk-fth-process', kind: 'check', after: 'facts-fth', ask: { type: 'fact', row: 'fth-process' } },
  { id: 'chk-fth-equal', kind: 'check', after: 'facts-fth', ask: { type: 'fact', row: 'fth-equal' } },
  { id: 'chk-fth-states', kind: 'check', after: 'facts-fth', ask: { type: 'fact', row: 'fth-states' } }
]);
