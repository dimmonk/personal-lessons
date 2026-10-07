// Civics, Unit Two, part five (second half): the amendments that ended slavery and widened the vote, then the close. A fact unit
// closes with a recap and no transfer (A12, V25). The card prints every fact by group, and these lines add what to carry; a fact
// that the lines repeat is printed by token ({f:row}), never typed a second time.

FC.cards('civics', 'u2', [

  /* ---------- group ten: slavery, and the right to vote ---------- */
  { id: 'con-vote', kind: 'concept',
    h: 'Ending slavery, and widening the vote',
    link: 'Three more amendments, two of them about who may vote.',
    case: 'cn-vote',
    plain: [
      'The clerk’s question has an exact answer: the Nineteenth Amendment, from 1920, which says the right to vote cannot be denied because of sex.',
      'The Thirteenth Amendment, from 1865, ended slavery. The Fifteenth, from 1870, says the right to vote cannot be denied because of race. The Nineteenth, from 1920, says it cannot be denied because of sex. Each voting amendment takes away one reason for keeping a person from voting.'
    ] },

  { id: 'facts-vote', kind: 'facts',
    h: 'Three amendments, and what each did',
    link: 'One ended slavery, and two took away reasons for keeping people from voting.',
    concept: 'con-vote',
    rows: [
      { id: 'vote-slavery', q: 'Which amendment ended slavery?', a: 'The Thirteenth Amendment',
        relates: 'It was adopted in 1865, the first of the three amendments added after the Civil War.' },
      { id: 'vote-race', q: 'Which amendment says that the right to vote cannot be denied because of race?', a: 'The Fifteenth Amendment',
        relates: 'It was adopted in 1870, the third of the three amendments added after the Civil War.' },
      { id: 'vote-sex', q: 'Which amendment says that the right to vote cannot be denied because of sex?', a: 'The Nineteenth Amendment',
        relates: 'It was adopted in 1920, four years before the woman in the story voted.' }
    ] },

  { id: 'chk-vote-slavery', kind: 'check', after: 'facts-vote', ask: { type: 'fact', row: 'vote-slavery' } },
  { id: 'chk-vote-race', kind: 'check', after: 'facts-vote', ask: { type: 'fact', row: 'vote-race' } },
  { id: 'chk-vote-sex', kind: 'check', after: 'facts-vote', ask: { type: 'fact', row: 'vote-sex' } },

  { id: 'look-vote', kind: 'lookalike', ledger: 'vote-race~vote-sex',
    h: 'Race, and sex',
    link: 'Both say that the right to vote cannot be denied because of who you are.',
    facts: ['vote-race', 'vote-sex'],
    instruction: 'Ask which reason each one forbids: race, or sex.',
    prompt: { kind: 'which', answer: 'vote-sex' },
    difference: [
      'Fact A is about race: {f:vote-race}. It was adopted in 1870, soon after the Civil War.',
      'Fact B is about sex: {f:vote-sex}. It was adopted in 1920. The earlier amendment is about race, and the later one is about sex.'
    ] },

  /* ---------- the close ---------- */
  { id: 'recap-const', kind: 'recap',
    h: 'What to carry away',
    link: 'Every fact in the unit, by group, and what to carry.',
    carry: [
      'The Constitution is law, the highest law in the country: the original text of 1787 plus every amendment added since, twenty-seven so far. The Bill of Rights is the first ten of those amendments, so it is part of the Constitution. The Declaration of Independence and the Federalist Papers are not law: one explains why the colonies left Britain, and the other argues for approving the Constitution.',
      'Hold each date with what happened in it: {f:date-decl} for the Declaration, {f:date-convention} for the Constitution being written, {f:date-start} for the government under it beginning, and {f:date-bor} for the Bill of Rights.',
      'Congress has only the powers listed in Article I, plus the power to pass the laws needed to carry them out. A power that is not on the list belongs to the states, or is something no government may do.',
      'Changing the Constitution takes two steps: {f:chg-propose} of both chambers of Congress must vote to propose the change, and {f:chg-approve} of the states must approve it.',
      'The Bill of Rights first limited only the federal government. After the Civil War the courts read the Fourteenth Amendment to bring its limits to the states, so they stop a state or a city too.'
    ] }
]);
