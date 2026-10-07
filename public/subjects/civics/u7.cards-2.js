// Civics, Unit Seven, part two: who leads and who settles a tie, who is next in line, what it takes to be President, and the close.
// The answers on each table have one form: an office or a body ("The ...") in the first two, and a condition ("Be ..." or "Have
// been ...") in the third. The close prints every fact by group and is followed by nothing: a fact unit has no transfer card, and
// this subject is not an action subject, so it has no plan card.

FC.cards('civics', 'u7', [

  /* ---------- group five: who leads, and who settles a tie ---------- */
  { id: 'con-lead', kind: 'concept',
    h: 'Three jobs the news mentions without explaining',
    link: 'The groups so far were numbers. This one is about three jobs you hear in the news and are rarely told about. Each belongs to one place or one person.',
    case: 'c7-weekinhouse',
    plain: [
      'A bill is a proposed law that has not become a law yet. A bill to raise taxes must begin in the House of Representatives, the chamber that faces the voters every two years.',
      'The House chooses its own leader, called the Speaker of the House. The Speaker leads the House, not the Senate.',
      'The Senate has 100 members, so a vote can split exactly in half. The Vice President settles it. The Vice President is not a senator: the job is to preside over the Senate and to vote only to break a tie.'
    ] },

  { id: 'facts-lead', kind: 'facts',
    h: 'Where tax bills begin, who leads the House, and who settles a tie',
    link: 'The three answers, each with a reason to remember it.',
    concept: 'con-lead',
    rows: [
      { id: 'ld-tax', q: 'In which chamber must a bill to raise taxes begin?', a: 'The House of Representatives',
        relates: 'Tax bills begin in the chamber that faces the voters every two years.' },
      { id: 'ld-speaker', q: 'What is the title of the leader of the House of Representatives?', a: 'The Speaker of the House',
        relates: 'The House chooses its own leader. The Speaker leads the House, not the Senate and not all of Congress.' },
      { id: 'ld-tie', q: 'Who settles a vote in the Senate when the senators split evenly?', a: 'The Vice President',
        relates: 'The Vice President presides over the Senate, is not a senator, and votes only to break a tie.' }
    ] },

  { id: 'chk-ld-tax', kind: 'check', after: 'facts-lead', ask: { type: 'fact', row: 'ld-tax' } },
  { id: 'chk-ld-speaker', kind: 'check', after: 'facts-lead', ask: { type: 'fact', row: 'ld-speaker' } },
  { id: 'chk-ld-tie', kind: 'check', after: 'facts-lead', ask: { type: 'fact', row: 'ld-tie' } },

  /* ---------- group six: the line to the presidency ---------- */
  { id: 'con-line', kind: 'concept',
    h: 'If the President cannot serve',
    link: 'The Vice President and the Speaker both came up in the last group. They have a second job in common: they stand behind the President.',
    case: 'c7-teacher',
    plain: [
      'If the President dies, resigns or is removed, somebody takes over at once. The order is fixed in advance, and it is called the line of succession.',
      'First in line is the Vice President, who is elected along with the President. Next is the Speaker of the House.',
      'Each of them also has the job from the last group: the Vice President breaks Senate ties, and the Speaker leads the House. Here you are asked only who comes first and who comes next.'
    ] },

  { id: 'facts-line', kind: 'facts',
    h: 'First in line, and next',
    link: 'The first two places in the line, so the President’s job never stands empty.',
    concept: 'con-line',
    rows: [
      { id: 'ln-first', q: 'If the President dies, resigns or is removed, who is first in line to take over?', a: 'The Vice President',
        relates: 'Being first in line is the Vice President’s second job, besides presiding over the Senate.' },
      { id: 'ln-next', q: 'Who is next in line after the Vice President?', a: 'The Speaker of the House',
        relates: 'If the Vice President cannot take over either, the next person is the Speaker of the House, who leads the House of Representatives.' }
    ] },

  { id: 'chk-ln-first', kind: 'check', after: 'facts-line', ask: { type: 'fact', row: 'ln-first' } },
  { id: 'chk-ln-next', kind: 'check', after: 'facts-line', ask: { type: 'fact', row: 'ln-next' } },

  /* ---------- group seven: what it takes to be President ---------- */
  { id: 'con-pres', kind: 'concept',
    h: 'What a person must be to be President',
    link: 'The line of succession says who would take over. This last group is about who is allowed to hold the job at all.',
    case: 'c7-quiznight',
    plain: [
      'Three conditions are about the person: at least thirty-five years old, a citizen from birth (the usual name is a natural-born citizen), and a resident of the country for fourteen years. Each one must be met. Rui became a citizen at thirty, so he was not a citizen from birth. Vera, at twenty-eight, is not yet thirty-five.',
      'The fourth is a limit once someone has the job. The Twenty-second Amendment, added in 1951, says no one may be elected President more than twice.',
      'To keep the two numbers apart: thirty-five is an age, and fourteen is years of living in the country. The age is the bigger number.'
    ] },

  { id: 'facts-pres', kind: 'facts',
    h: 'What it takes to be President',
    link: 'The four conditions. Rui and Vera each fail a different one.',
    concept: 'con-pres',
    rows: [
      { id: 'pr-age', q: 'What age must a person have reached to be President?', a: 'Be at least thirty-five years old',
        relates: 'Vera does not meet this one: at twenty-eight, she is too young.' },
      { id: 'pr-born', q: 'How must a person have become a citizen to be President?', a: 'Be a citizen from birth',
        relates: 'Rui does not meet this one: he became a citizen at thirty. The usual name is a natural-born citizen.' },
      { id: 'pr-years', q: 'How long must a person have lived in the country as a resident to be President?', a: 'Have been a resident for fourteen years',
        relates: 'Rui and Vera both meet this one. It is the smaller of the two numbers that get swapped.' },
      { id: 'pr-twice', q: 'How many times may one person be elected President?', a: 'Be elected no more than twice',
        relates: 'The Twenty-second Amendment added this limit in 1951. It limits how long someone keeps the job. It is not a condition for getting it.' }
    ] },

  { id: 'chk-pr-age', kind: 'check', after: 'facts-pres', ask: { type: 'fact', row: 'pr-age' } },
  { id: 'chk-pr-born', kind: 'check', after: 'facts-pres', ask: { type: 'fact', row: 'pr-born' } },
  { id: 'chk-pr-years', kind: 'check', after: 'facts-pres', ask: { type: 'fact', row: 'pr-years' } },
  { id: 'chk-pr-twice', kind: 'check', after: 'facts-pres', ask: { type: 'fact', row: 'pr-twice' } },

  { id: 'look-pres', kind: 'lookalike', ledger: 'pr-age~pr-years',
    h: 'The age, and the years of living here',
    link: 'Two of the conditions are a number of years, and they get swapped, so here they are side by side.',
    facts: ['pr-age', 'pr-years'],
    instruction: 'Ask what each number counts: how old the person is, or how long the person has lived in the country.',
    prompt: { kind: 'which', answer: 'pr-years' },
    difference: [
      'The age is “{f:pr-age}”. It counts years of being alive.',
      'The residence is “{f:pr-years}”. It counts years of living in the country. Someone can have lived here for many years and still be too young, as Vera is.',
      'The age is the bigger number, and the residence is the smaller.'
    ] },

  /* ---------- the close ---------- */
  { id: 'recap-nums', kind: 'recap',
    h: 'What to carry away',
    link: 'Every fact in the unit, by group. Below them is the short version to carry.',
    carry: [
      'The House counts people and is the big chamber: 435. The Senate counts states, two each: 100 in all. The Supreme Court’s nine is set by Congress.',
      'Terms: the House two years, the President four, the Senate six, a federal judge for life. At an election all of the House is up, about a third of the Senate, and no judge.',
      'Tax bills begin in the House, whose leader is the Speaker. The Vice President settles a Senate tie, is first in line to be President, and the Speaker is next.',
      'To be President: at least thirty-five, a citizen from birth, a resident for fourteen years, and never elected more than twice.',
      'Offices stay and people change. Look up who holds each office now.'
    ] }
]);
