// Civics, Unit Seven, part three: who leads and who settles a tie, who is next in line, what it takes to be President, and the close.
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
      'Each of the three phrases in Kofi’s notebook names something that news stories take for granted. A bill, the word the summary uses, is a proposed law that has not yet become one.',
      'The first is where a bill to raise taxes must begin. It must begin in the House of Representatives, the chamber that answers to the voters every two years.',
      'The second is who leads the House. The House chooses its own leader, and the leader’s title is the Speaker of the House. The Speaker leads the House, not the Senate.',
      'The third is who settles a tied vote in the Senate. The Senate has 100 members, so a vote can split exactly in half. When it does, the person who settles it is not a senator. It is the Vice President, who presides over the Senate and votes only to break a tie.',
      'The three facts below say which of the three jobs belongs to whom. Who holds the offices changes with elections. This group holds the offices, so the answers stay true when the people change.'
    ] },

  { id: 'facts-lead', kind: 'facts',
    h: 'Where tax bills begin, who leads the House, and who settles a tie',
    link: 'These are the three answers, each with how it fits the idea that each job belongs to one place or one person.',
    concept: 'con-lead',
    rows: [
      { id: 'ld-tax', q: 'In which chamber must a bill to raise taxes begin?', a: 'The House of Representatives',
        relates: 'The House answers to the voters every two years, and tax bills must begin in the chamber that does. That is what Kofi read in the summary: the tax bill was introduced in the House.' },
      { id: 'ld-speaker', q: 'What is the title of the leader of the House of Representatives?', a: 'The Speaker of the House',
        relates: 'The House chooses its own leader, and the leader is called the Speaker. The Speaker leads the House, and not the Senate and not the whole of Congress.' },
      { id: 'ld-tie', q: 'Who settles a vote in the Senate when the senators split evenly?', a: 'The Vice President',
        relates: 'The Vice President presides over the Senate but is not a senator, and votes only to break a tie. That is why the summary says that the Vice President cast the deciding vote.' }
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
      'Mr. Okafor’s question is about the line of succession, which means the order in which people take over a job. The President’s job never stands empty. If the President dies in office, resigns or is removed, somebody takes over at once, and the order in which they would is fixed in advance.',
      'The first in line is the Vice President. The Vice President is elected along with the President and belongs to the President’s part of the government, not to Congress. So the Vice President has two jobs: to preside over the Senate, voting only to break a tie, and to be first in line to become President.',
      'After the Vice President, the next in line is the Speaker of the House, the leader of the House of Representatives.',
      'The order is the whole fact: the Vice President first, the Speaker of the House next. Each of the two has another job as well: the Vice President’s is the tie vote in the Senate, and the Speaker’s is leading the House. The two facts below are asked only about the order, and not about those other jobs.'
    ] },

  { id: 'facts-line', kind: 'facts',
    h: 'First in line, and next',
    link: 'These are the two places in the line, each with how it fits the idea that the President’s job never stands empty.',
    concept: 'con-line',
    rows: [
      { id: 'ln-first', q: 'If the President dies, resigns or is removed, who is first in line to take over?', a: 'The Vice President',
        relates: 'The Vice President is elected along with the President and belongs to the President’s part of the government, not to Congress. Being first in line is the Vice President’s second job, beside presiding over the Senate.' },
      { id: 'ln-next', q: 'Who is next in line after the Vice President?', a: 'The Speaker of the House',
        relates: 'If the Vice President cannot take over either, the next in line is the Speaker of the House, who leads the House of Representatives.' }
    ] },

  { id: 'chk-ln-first', kind: 'check', after: 'facts-line', ask: { type: 'fact', row: 'ln-first' } },
  { id: 'chk-ln-next', kind: 'check', after: 'facts-line', ask: { type: 'fact', row: 'ln-next' } },

  { id: 'look-line', kind: 'lookalike', ledger: 'ln-first~ln-next',
    h: 'First in line, and next in line',
    link: 'The two places in the line are the same question with two different answers, one after the other, so they go side by side.',
    facts: ['ln-first', 'ln-next'],
    instruction: 'Compare which place in the line each question asks about: the first, or the one after it.',
    prompt: { kind: 'which', answer: 'ln-next' },
    difference: [
      'Fact A asks who comes first. Its answer is “{f:ln-first}”, who is elected along with the President and takes over at once.',
      'Fact B asks who comes after that. Its answer is “{f:ln-next}”, who leads the House and would take over only if the first in line could not.',
      'Both offices have a second job that is easy to confuse with this one: the Vice President’s is the tie vote in the Senate, and the Speaker’s is leading the House. Neither of those is a place in the line.'
    ] },

  /* ---------- group seven: what it takes to be President ---------- */
  { id: 'con-pres', kind: 'concept',
    h: 'What a person must be to be President',
    link: 'The line of succession says who would take over. This last group is about who may hold the job at all.',
    case: 'c7-quiznight',
    plain: [
      'Rui and Vera each fail a different condition. There are four conditions to hold. Three of them are about what a person must be before they can be President: at least thirty-five years old, a citizen from birth, and a resident for fourteen years. The fourth is a limit once someone is in the job.',
      'Rui is old enough, and he has lived here for thirty years, but he became a citizen at thirty, so he was not a citizen from birth. A citizen from birth is called a natural-born citizen. Vera was a citizen from birth and has lived here all her life, but at twenty-eight she is not yet thirty-five. Each condition has to be met. Meeting two out of three is not enough.',
      'The retired teacher means the last two: the years of living here, which both of them meet, and the limit. The limit comes from the Twenty-second Amendment, which was added to the Constitution in 1951, after three-quarters of the states approved it. It says that no one may be elected President more than twice.',
      'Two of the four numbers are easy to swap: thirty-five, which is an age, and fourteen, which is a number of years of living in the country. The age is the bigger number, and the years of living here are the smaller.'
    ] },

  { id: 'facts-pres', kind: 'facts',
    h: 'What it takes to be President',
    link: 'These are the four conditions, each with how it fits the idea that Rui and Vera each fail a different one.',
    concept: 'con-pres',
    rows: [
      { id: 'pr-age', q: 'What age must a person have reached to be President?', a: 'Be at least thirty-five years old',
        relates: 'This is the condition Vera does not meet: at twenty-eight, she is too young. Rui is well past it. It is the biggest of the numbers in these conditions.' },
      { id: 'pr-born', q: 'How must a person have become a citizen to be President?', a: 'Be a citizen from birth',
        relates: 'This is the condition Rui does not meet. He became a citizen at thirty, so he could not be President however old he is or however long he has lived here. The usual name for it is a natural-born citizen.' },
      { id: 'pr-years', q: 'How long must a person have lived in the country as a resident to be President?', a: 'Have been a resident for fourteen years',
        relates: 'Both Rui and Vera meet this one: Rui has lived here thirty years, and Vera all her life. It is the smaller of the two numbers that are easy to swap.' },
      { id: 'pr-twice', q: 'How many times may one person be elected President?', a: 'Be elected no more than twice',
        relates: 'This is the limit that the Twenty-second Amendment added in 1951. It is a limit on the job and not a condition for getting it, which is why neither Rui nor Vera has had to think about it.' }
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
      'Fact A is about a person’s age: “{f:pr-age}”. It counts years of being alive.',
      'Fact B is about a person’s residence: “{f:pr-years}”. It counts years of living in the country, and a person can have lived there for many years and still be too young, as Vera is.',
      'The age is the bigger number and the residence is the smaller. A person who meets one of the two has not necessarily met the other.'
    ] },

  /* ---------- the close ---------- */
  { id: 'recap-nums', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now met every fact in the unit, in its group. This card puts them together, and then adds what to carry.',
    carry: [
      'The House is built on people and the Senate on states. The House is the big chamber and the Senate the small one, and in the Senate every state has the same two seats however many people live in it. The Supreme Court is neither: its number is set by Congress.',
      'The clocks are in order of length: the House’s two years, the President’s four, the Senate’s six, and a federal judge’s, which in practice is for life. The House is the short one and the Senate the long one.',
      'When there is an election, all of the House is up, about a third of the Senate, and no federal judge.',
      'Tax bills begin in the House, whose leader is the Speaker. A tie in the Senate is settled by the Vice President. If the President cannot serve, the Vice President is first in line and the Speaker of the House is next.',
      'To be President, a person must be at least thirty-five, a citizen from birth and a resident for fourteen years, and cannot be elected more than twice.',
      'Offices stay and people change. Look up who holds each office now.'
    ] }
]);
