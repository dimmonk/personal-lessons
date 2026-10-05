// Civics, Unit Ten, part four: September 11, 2001, and the five years in which the right to vote was widened.
// The earlier unit on the Constitution held what each amendment says; this one holds when it came and who made it happen.

FC.cards('civics', 'u10', [

  /* ---------- group eight: September 11, 2001 ---------- */
  { id: 'con-attack', kind: 'concept',
    h: 'September 11, 2001: what happened that day',
    link: 'The line gave 2001 as the last landmark. This group says what happened that day, and what the country changed after it.',
    case: 'c10-attack',
    plain: [
      'Tomás asked a fair question, and Adaeze’s answer was too short. September 11, 2001, is the most recent event that this course holds, and a short answer is not enough for it.',
      'On that day terrorists hijacked four airplanes and attacked the World Trade Center in New York and the Pentagon near Washington. Terrorists are people who use violence to frighten a country, and to hijack an airplane is to take it over by force. Nearly 3,000 people were killed.',
      'Afterward the country made new security rules, created a new federal department for homeland security, and changed how immigration is enforced. Adaeze was right that the rules changed afterward. The five facts below are what the terrorists did, what they attacked, how many people were killed, and what the country changed.'
    ] },

  { id: 'facts-attack', kind: 'facts',
    h: 'Five facts about September 11',
    link: 'These are the five facts of the group, each with how it fits what happened that day and after it.',
    concept: 'con-attack',
    rows: [
      { id: 'nn-planes', q: 'How many airplanes did the terrorists hijack on September 11, 2001?', a: 'Four airplanes',
        relates: 'The number is the first thing to hold about the day: four airplanes were taken over by force, and used in the attacks.' },
      { id: 'nn-targets', q: 'Which two places did the attacks hit?', a: 'The World Trade Center and the Pentagon',
        relates: 'The World Trade Center is in New York, and the Pentagon is near Washington. The attacks were on both cities.' },
      { id: 'nn-dead', q: 'About how many people were killed that day?', a: 'Nearly 3,000 people',
        relates: 'It is the number that shows how large the attacks were.' },
      { id: 'nn-dept', q: 'What new federal body was created afterward?', a: 'A department for homeland security',
        relates: 'It is one of the changes that followed. It is a new part of the government of the whole country, made in answer to the attacks.' },
      { id: 'nn-immig', q: 'Along with new security rules, what part of the government’s work did the country change afterward?', a: 'How immigration is enforced',
        relates: 'Changes in immigration enforcement followed too. It is why the story of September 11 also belongs with the story of who may come in and who decides, which the second group of this unit told.' }
    ] },

  { id: 'chk-nn-planes', kind: 'check', after: 'facts-attack', ask: { type: 'fact', row: 'nn-planes' } },
  { id: 'chk-nn-targets', kind: 'check', after: 'facts-attack', ask: { type: 'fact', row: 'nn-targets' } },
  { id: 'chk-nn-dead', kind: 'check', after: 'facts-attack', ask: { type: 'fact', row: 'nn-dead' } },
  { id: 'chk-nn-dept', kind: 'check', after: 'facts-attack', ask: { type: 'fact', row: 'nn-dept' } },
  { id: 'chk-nn-immig', kind: 'check', after: 'facts-attack', ask: { type: 'fact', row: 'nn-immig' } },

  /* ---------- group nine: the vote, in five years ---------- */
  { id: 'con-vote', kind: 'concept',
    h: 'The right to vote was widened five times: in what years',
    link: 'So far the groups were about events. This one and the next two are about one idea, the right to vote, and how it was widened by inches.',
    case: 'c10-vote',
    plain: [
      'Hadiya’s grandmother is right, and what she says is a fact about the whole country’s history. At the founding, the vote was mostly limited to white men who owned property. Each widening after that was won against opposition, and several of them needed an amendment or an Act of Congress. So the vote is a good way to see a long history as one story: five widenings, and five years to hold.',
      'An earlier unit held what each amendment says. This group holds when. In 1870 the Fifteenth Amendment said that the right to vote cannot be denied because of race. In 1920 the Nineteenth said that it cannot be denied because of sex. In 1964 the Twenty-fourth ended the poll tax, which is a fee to vote, in federal elections. In 1965 the Voting Rights Act put federal officials behind the Fifteenth Amendment’s promise. In 1971 the Twenty-sixth Amendment lowered the voting age to eighteen.',
      'Two of the five years are one year apart, 1964 and 1965, and one pair of them is easy to swap: 1870 and 1965, which are both about race and the vote. The look-alike card after the checks takes that pair apart.'
    ] },

  { id: 'facts-vote', kind: 'facts',
    h: 'Five years in which the vote was widened',
    link: 'These are the five years of the group, each with how it fits the story of the vote widened by inches.',
    concept: 'con-vote',
    rows: [
      { id: 'vy-race', q: 'In what year did the Fifteenth Amendment say that the right to vote cannot be denied because of race?', a: '1870',
        relates: 'It is the first of the five, and it came in the years just after the Civil War. It is an amendment, so it is part of the Constitution; but it was ninety-five years before the Voting Rights Act made its promise real.' },
      { id: 'vy-sex', q: 'In what year did the Nineteenth Amendment say that the right to vote cannot be denied because of sex?', a: '1920',
        relates: 'It came after a campaign for women’s right to vote that began in 1848. It is an amendment, like the Fifteenth, and it is the second of the five.' },
      { id: 'vy-poll', q: 'In what year did the Twenty-fourth Amendment end the poll tax, a fee to vote, in federal elections?', a: '1964',
        relates: 'A poll tax is a fee that a person had to pay in order to vote. The amendment ended it in federal elections. It came in the same year as the Civil Rights Act, and one year before the Voting Rights Act.' },
      { id: 'vy-vra', q: 'In what year did the Voting Rights Act put federal officials behind the Fifteenth Amendment’s promise?', a: '1965',
        relates: 'It is an Act of Congress and not an amendment. It made the promise of 1870 real, ninety-five years after it was written. The three amendments that followed the Civil War stayed in the Constitution, but for most Black Southerners they were not made real until the 1960s.' },
      { id: 'vy-age', q: 'In what year did the Twenty-sixth Amendment lower the voting age to eighteen?', a: '1971',
        relates: 'It is the last of the five, and the most recent widening of the vote that this course holds.' }
    ] },

  { id: 'chk-vy-race', kind: 'check', after: 'facts-vote', ask: { type: 'fact', row: 'vy-race' } },
  { id: 'chk-vy-sex', kind: 'check', after: 'facts-vote', ask: { type: 'fact', row: 'vy-sex' } },
  { id: 'chk-vy-poll', kind: 'check', after: 'facts-vote', ask: { type: 'fact', row: 'vy-poll' } },
  { id: 'chk-vy-vra', kind: 'check', after: 'facts-vote', ask: { type: 'fact', row: 'vy-vra' } },
  { id: 'chk-vy-age', kind: 'check', after: 'facts-vote', ask: { type: 'fact', row: 'vy-age' } },

  { id: 'look-vote', kind: 'lookalike', ledger: 'vy-race~vy-vra',
    h: 'The promise written down, and the promise made real',
    link: 'Two of the five years are about race and the vote, ninety-five years apart. They get swapped, so they go side by side.',
    facts: ['vy-race', 'vy-vra'],
    instruction: 'Compare what happened in each year: a promise written into the Constitution, or federal officials put behind it.',
    prompt: { kind: 'which', answer: 'vy-vra' },
    difference: [
      'Fact A is the Fifteenth Amendment: {f:vy-race}. It wrote the promise into the Constitution: the vote cannot be denied because of race.',
      'Fact B is the Voting Rights Act: {f:vy-vra}. It put federal officials behind that promise, so that it became real for the people who had been shut out.',
      'The first is an amendment, the second an Act of Congress. The first is about writing, the second about doing. Between them lie ninety-five years.'
    ] }
]);
