// Civics, Unit Seven, part two: who leads and who settles a tie, who is next in line, what it takes to be President, and the close.
// The answers on each table have one form: an office or a body ("The ...") in the first two, and a condition ("Be ..." or "Have
// been ...") in the third. The close prints every fact by group and is followed by nothing: a fact unit has no transfer card, and
// this subject is not an action subject, so it has no plan card.

FC.cards('civics', 'u7', [

  /* ---------- group five: who leads, and who settles a tie ---------- */
  { id: 'con-lead', kind: 'concept',
    h: 'Three jobs that each belong to one place or one person',
    link: 'The groups so far were numbers. This group is about three jobs in Congress that news stories mention without explaining, each of which belongs to one place or one person.',
    case: 'c7-weekinhouse',
    plain: [
      'A bill is a proposed law that has not yet become one. A bill to raise taxes must begin in the House of Representatives, the chamber that answers to the voters every two years.',
      'The House chooses its own leader, whose title is the Speaker of the House. The Speaker leads the House, not the Senate.',
      'The Senate has 100 members, so a vote can split exactly in half. The person who settles it is not a senator: it is the Vice President, who presides over the Senate and votes only to break a tie.'
    ] },

  { id: 'facts-lead', kind: 'facts',
    h: 'Where tax bills begin, who leads the House, and who settles a tie',
    link: 'These are the three answers, each with how it fits the idea that each job belongs to one place or one person.',
    concept: 'con-lead',
    rows: [
      { id: 'ld-tax', q: 'In which chamber must a bill to raise taxes begin?', a: 'The House of Representatives',
        relates: 'Tax bills must begin in the chamber that answers to the voters every two years.' },
      { id: 'ld-speaker', q: 'What is the title of the leader of the House of Representatives?', a: 'The Speaker of the House',
        relates: 'The House chooses its own leader. The Speaker leads the House, not the Senate and not the whole of Congress.' },
      { id: 'ld-tie', q: 'Who settles a vote in the Senate when the senators split evenly?', a: 'The Vice President',
        relates: 'The Vice President presides over the Senate but is not a senator, and votes only to break a tie.' }
    ] },

  { id: 'chk-ld-tax', kind: 'check', after: 'facts-lead', ask: { type: 'fact', row: 'ld-tax' } },
  { id: 'chk-ld-speaker', kind: 'check', after: 'facts-lead', ask: { type: 'fact', row: 'ld-speaker' } },
  { id: 'chk-ld-tie', kind: 'check', after: 'facts-lead', ask: { type: 'fact', row: 'ld-tie' } },

  /* ---------- group six: the line to the presidency ---------- */
  { id: 'con-line', kind: 'concept',
    h: 'If the President cannot serve',
    link: 'The Vice President and the Speaker are both in the last group. This group puts them in order, because they have a second job in common: they stand behind the President.',
    case: 'c7-teacher',
    plain: [
      'The line of succession is the order in which people take over a job. If the President dies, resigns or is removed, somebody takes over at once, and the order is fixed in advance.',
      'First in line is the Vice President, who is elected along with the President. Next is the Speaker of the House.',
      'Each of the two has another job as well, the tie vote in the Senate and leading the House. These two facts are asked only about the order.'
    ] },

  { id: 'facts-line', kind: 'facts',
    h: 'First in line, and next',
    link: 'These are the two places in the line, each with how it fits the idea that the President’s job never stands empty.',
    concept: 'con-line',
    rows: [
      { id: 'ln-first', q: 'If the President dies, resigns or is removed, who is first in line to take over?', a: 'The Vice President',
        relates: 'Being first in line is the Vice President’s second job, beside presiding over the Senate.' },
      { id: 'ln-next', q: 'Who is next in line after the Vice President?', a: 'The Speaker of the House',
        relates: 'If the Vice President cannot take over either, the Speaker of the House, who leads the House of Representatives, is next.' }
    ] },

  { id: 'chk-ln-first', kind: 'check', after: 'facts-line', ask: { type: 'fact', row: 'ln-first' } },
  { id: 'chk-ln-next', kind: 'check', after: 'facts-line', ask: { type: 'fact', row: 'ln-next' } },

  /* ---------- group seven: what it takes to be President ---------- */
  { id: 'con-pres', kind: 'concept',
    h: 'What a person must be to be President',
    link: 'The line of succession says who would take over. This last group is about who may hold the job at all.',
    case: 'c7-quiznight',
    plain: [
      'Three conditions are about what a person must be: at least thirty-five years old, a citizen from birth, and a resident for fourteen years. Each must be met. Rui became a citizen at thirty, so he was not a citizen from birth. A citizen from birth is called a natural-born citizen. Vera, at twenty-eight, is not yet thirty-five.',
      'The fourth is a limit once someone is in the job. The Twenty-second Amendment, added in 1951, says no one may be elected President more than twice.',
      'Thirty-five is an age and fourteen is years of living in the country. The age is the bigger number.'
    ] },

  { id: 'facts-pres', kind: 'facts',
    h: 'What it takes to be President',
    link: 'These are the four conditions, each with how it fits the idea that Rui and Vera each fail a different one.',
    concept: 'con-pres',
    rows: [
      { id: 'pr-age', q: 'What age must a person have reached to be President?', a: 'Be at least thirty-five years old',
        relates: 'The condition Vera does not meet: at twenty-eight, she is too young.' },
      { id: 'pr-born', q: 'How must a person have become a citizen to be President?', a: 'Be a citizen from birth',
        relates: 'The condition Rui does not meet: he became a citizen at thirty. The usual name for it is a natural-born citizen.' },
      { id: 'pr-years', q: 'How long must a person have lived in the country as a resident to be President?', a: 'Have been a resident for fourteen years',
        relates: 'Both Rui and Vera meet this one. It is the smaller of the two numbers that are easy to swap.' },
      { id: 'pr-twice', q: 'How many times may one person be elected President?', a: 'Be elected no more than twice',
        relates: 'The limit the Twenty-second Amendment added in 1951. It limits the job, and is not a condition for getting it.' }
    ] },

  { id: 'chk-pr-age', kind: 'check', after: 'facts-pres', ask: { type: 'fact', row: 'pr-age' } },
  { id: 'chk-pr-born', kind: 'check', after: 'facts-pres', ask: { type: 'fact', row: 'pr-born' } },
  { id: 'chk-pr-years', kind: 'check', after: 'facts-pres', ask: { type: 'fact', row: 'pr-years' } },
  { id: 'chk-pr-twice', kind: 'check', after: 'facts-pres', ask: { type: 'fact', row: 'pr-twice' } },

  { id: 'look-pres', kind: 'lookalike', ledger: 'pr-age~pr-years',
    h: 'The age, and the years of living here',
    link: 'Two of the four conditions are about a number of years, and they are the two that are easy to swap, so they go side by side.',
    facts: ['pr-age', 'pr-years'],
    instruction: 'Compare what each number counts: how old the person is, or how long the person has lived in the country.',
    prompt: { kind: 'which', answer: 'pr-years' },
    difference: [
      'The age is “{f:pr-age}”. It counts years of being alive.',
      'The residence is “{f:pr-years}”. It counts years of living in the country: a person can have lived there for many years and still be too young, as Vera is.',
      'The age is the bigger number and the residence is the smaller.'
    ] },

  /* ---------- the close ---------- */
  { id: 'recap-nums', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now met every fact in the unit, in its group. This card puts them together, and then adds what to carry.',
    carry: [
      'The House is built on people and is the big chamber, 435. The Senate is built on states, two each, 100 in all. The Supreme Court’s nine is set by Congress.',
      'Terms: the House two years, the President four, the Senate six, a federal judge for life. At an election all of the House is up, about a third of the Senate, and no judge.',
      'Tax bills begin in the House, whose leader is the Speaker. The Vice President settles a Senate tie, is first in line to be President, and the Speaker is next.',
      'To be President: at least thirty-five, a citizen from birth, a resident for fourteen years, and never elected more than twice.',
      'Offices stay and people change. Look up who holds each office now.'
    ] }
]);
