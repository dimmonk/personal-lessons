// Civics, Unit Two, part five (second half): the amendments that ended slavery and widened the vote, then the close. A fact unit
// closes with a recap and no transfer (A12, V25). The card prints every fact by group, and these lines add what to carry; a fact
// that the lines repeat is printed by token ({f:row}), never typed a second time.

FC.cards('civics', 'u2', [

  /* ---------- group twelve: slavery, and the right to vote ---------- */
  { id: 'con-vote', kind: 'concept',
    h: 'Ending slavery, and widening the vote',
    link: 'The Fourteenth Amendment is one of the three amendments added after the Civil War. This group holds another of the three and four later ones about the right to vote, five amendments in all.',
    case: 'cn-vote',
    plain: [
      'The clerk’s question has a precise answer. It is the Nineteenth Amendment, from 1920, which says that the right to vote cannot be denied because of sex. It is one of five amendments in this group, and the facts below hold what each one says.',
      'The Thirteenth Amendment, from 1865, ended slavery. The Fifteenth, from 1870, says that the right to vote cannot be denied because of race. The Nineteenth, from 1920, says that it cannot be denied because of sex. The Twenty-fourth, from 1964, says that there can be no poll tax in federal elections. A poll tax is a fee that a person has to pay in order to vote. The Twenty-sixth, from 1971, lowered the voting age to eighteen.',
      'Four of the five are about the right to vote. Each one takes away a reason for which a person could be kept from voting: race, sex, a fee, or a voting age higher than eighteen. The years are in the explanations because they help you place each amendment. The questions ask which amendment, and not which year.'
    ] },

  { id: 'facts-vote', kind: 'facts',
    h: 'Five amendments, and what each did',
    link: 'These are the five facts, each with how it fits the idea that these amendments ended slavery and took away reasons for keeping people from voting.',
    concept: 'con-vote',
    rows: [
      { id: 'vote-slavery', q: 'Which amendment ended slavery?', a: 'The Thirteenth Amendment',
        relates: 'It was adopted in 1865. It is the first of the three amendments added after the Civil War.' },
      { id: 'vote-race', q: 'Which amendment says that the right to vote cannot be denied because of race?', a: 'The Fifteenth Amendment',
        relates: 'It was adopted in 1870. It is the third of the three amendments added after the Civil War.' },
      { id: 'vote-sex', q: 'Which amendment says that the right to vote cannot be denied because of sex?', a: 'The Nineteenth Amendment',
        relates: 'It was adopted in 1920. It is the amendment that the woman in the story meant: it was adopted four years before she voted.' },
      { id: 'vote-poll', q: 'Which amendment says that there can be no poll tax, a fee to vote, in federal elections?', a: 'The Twenty-fourth Amendment',
        relates: 'It was adopted in 1964. A poll tax is a fee that a person has to pay in order to vote, and the amendment covers federal elections.' },
      { id: 'vote-age', q: 'Which amendment lowered the voting age to eighteen?', a: 'The Twenty-sixth Amendment',
        relates: 'It was adopted in 1971. It is the last of the five.' }
    ] },

  { id: 'chk-vote-slavery', kind: 'check', after: 'facts-vote', ask: { type: 'fact', row: 'vote-slavery' } },
  { id: 'chk-vote-race', kind: 'check', after: 'facts-vote', ask: { type: 'fact', row: 'vote-race' } },
  { id: 'chk-vote-sex', kind: 'check', after: 'facts-vote', ask: { type: 'fact', row: 'vote-sex' } },
  { id: 'chk-vote-poll', kind: 'check', after: 'facts-vote', ask: { type: 'fact', row: 'vote-poll' } },
  { id: 'chk-vote-age', kind: 'check', after: 'facts-vote', ask: { type: 'fact', row: 'vote-age' } },

  { id: 'look-vote', kind: 'lookalike', ledger: 'vote-race~vote-sex',
    h: 'Race, and sex',
    link: 'Two of the five amendments both say that the right to vote cannot be denied because of who you are. They get swapped, so they go side by side.',
    facts: ['vote-race', 'vote-sex'],
    instruction: 'Compare the reason that each one forbids: race, or sex.',
    prompt: { kind: 'which', answer: 'vote-sex' },
    difference: [
      'Fact A is about race: {f:vote-race}. It was adopted in 1870, soon after the Civil War.',
      'Fact B is about sex: {f:vote-sex}. It was adopted in 1920.',
      'Both say that the right to vote cannot be denied, and both widened who could vote. What differs is the reason that each one forbids, and the year. The earlier amendment is about race, and the later one is about sex.'
    ] },

  /* ---------- the close ---------- */
  { id: 'recap-const', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now met every fact in the unit, in its group. This card puts them together, and then adds what to carry.',
    carry: [
      'The Constitution is law, and it is the highest law the country has. It is the original text of 1787 together with every amendment added since, twenty-seven so far. The Bill of Rights is the first ten of those amendments, so it is part of the Constitution, and it is law. The Declaration of Independence and the Federalist Papers are not law: one says why the colonies were leaving Britain, and the other argues for approving the Constitution.',
      'Hold each date with what happened in it: {f:date-decl} for the Declaration, {f:date-articles} for the Articles of Confederation taking effect, {f:date-convention} for the Constitution being written, {f:date-start} for the government under it beginning, and {f:date-bor} for the Bill of Rights. The year it was written comes before the year it began.',
      'Congress has only the powers that the Constitution lists, in Article I, and the power to pass the laws that are necessary and proper to carry them out. A power that is not on the list belongs to the states, or is something that no government may do.',
      'To change the Constitution takes two steps. The first is a vote in Congress: {f:chg-propose} of both chambers must vote to propose the change. The second is approval by the states: {f:chg-approve} of the states must approve it. The smaller fraction is in Congress, and the larger is among the states.',
      'The Bill of Rights was first written to limit only the federal government. After the Civil War the courts read the Fourteenth Amendment to bring its limits to the states, so that they stop a state or a city as well.',
      'This unit holds only part of the Constitution: six of the first ten amendments, six of the seventeen that came later, and the work of the first three of its seven articles. For the rest, look it up.'
    ] }
]);
