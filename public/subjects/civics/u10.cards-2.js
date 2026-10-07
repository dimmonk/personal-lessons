// Civics, Unit Ten, part two: civil rights, September 11, and the right to vote.

FC.cards('civics', 'u10', [

  /* ---------- the civil rights movement ---------- */
  { id: 'con-civil', kind: 'concept',
    h: 'The civil rights movement: a court, a law and many people',
    link: 'The movement, from 1954 to 1965, to end segregation.',
    case: 'c10-civil',
    plain: [
      'Amir’s daughter already has the three parts of the answer in her question: a court, a law and people. They are the three big parts of the civil rights movement. It pushed to end segregation (keeping people of different races apart, as in separate public schools for Black and white children) and discrimination (treating people worse because of their race).',
      'The court: in 1954 the Supreme Court ruled, in Brown v. Board of Education, that separate public schools for Black and white children are unequal. A court checking a law against the Constitution is {o:review}.',
      'The people: Martin Luther King Jr. and thousands of others led marches and boycotts. A boycott is when a group refuses to use or buy something, to press for a change.',
      'The law: the Civil Rights Act of 1964, passed by Congress, outlaws segregation and discrimination.'
    ] },

  { id: 'facts-civil', kind: 'facts',
    h: 'Four names of the civil rights movement',
    link: 'The ruling, the leader, the law and what the movement pushed to end.',
    concept: 'con-civil',
    rows: [
      { id: 'cr-brown', q: 'Which 1954 ruling of the Supreme Court said that separate public schools for Black and white children are unequal?', a: 'Brown v. Board of Education',
        relates: 'A court checked a law against the Constitution, which is called {o:review}. It came ten years before the law of 1964.' },
      { id: 'cr-king', q: 'Which leader, with thousands of others, led the marches and boycotts of the movement?', a: 'Martin Luther King Jr.',
        relates: 'The movement was the work of many people. He is the leader this course names.' },
      { id: 'cr-act', q: 'Which 1964 law, passed by Congress, outlawed discrimination?', a: 'The Civil Rights Act of 1964',
        relates: 'Congress wrote this law. That is a different job from the court’s ruling in 1954.' },
      { id: 'cr-end', q: 'What did the civil rights movement push to end?', a: 'Segregation',
        relates: 'The court ruled against it in schools, and the 1964 law outlawed it.' }
    ] },

  { id: 'chk-cr-brown', kind: 'check', after: 'facts-civil', ask: { type: 'fact', row: 'cr-brown' } },
  { id: 'chk-cr-king', kind: 'check', after: 'facts-civil', ask: { type: 'fact', row: 'cr-king' } },
  { id: 'chk-cr-act', kind: 'check', after: 'facts-civil', ask: { type: 'fact', row: 'cr-act' } },
  { id: 'chk-cr-end', kind: 'check', after: 'facts-civil', ask: { type: 'fact', row: 'cr-end' } },

  { id: 'look-civil', kind: 'lookalike', ledger: 'cr-brown~cr-act',
    h: 'A court’s ruling and a law of Congress',
    link: 'One came from a court and one from Congress, and people swap them.',
    facts: ['cr-brown', 'cr-act'],
    instruction: 'Compare who acted: a court that ruled, or lawmakers who passed a law.',
    prompt: { kind: 'which', answer: 'cr-act' },
    difference: [
      'Fact A is {f:cr-brown}: a Supreme Court ruling in 1954, in a court case about separate public schools.',
      'Fact B is {f:cr-act}: a law passed by Congress in 1964. It outlaws segregation and discrimination.'
    ] },

  /* ---------- September 11, 2001 ---------- */
  { id: 'con-attack', kind: 'concept',
    h: 'September 11, 2001: what happened that day',
    link: 'The most recent event in this course, and what changed after it.',
    case: 'c10-attack',
    plain: [
      'On September 11, 2001, terrorists hijacked four airplanes and attacked the World Trade Center in New York and the Pentagon near Washington. Nearly 3,000 people were killed.',
      'Terrorists are people who use violence to frighten a country. To hijack an airplane is to take it over by force.',
      'Afterward the country made new security rules, like the ones in Adaeze’s line, and created a new federal department for homeland security.'
    ] },

  { id: 'facts-attack', kind: 'facts',
    h: 'Four facts about September 11',
    link: 'What the terrorists did, what they attacked, how many were killed, and what the country created.',
    concept: 'con-attack',
    rows: [
      { id: 'nn-planes', q: 'How many airplanes did the terrorists hijack on September 11, 2001?', a: 'Four airplanes',
        relates: 'The terrorists took over four airplanes by force and used them in the attacks.' },
      { id: 'nn-targets', q: 'Which two places did the attacks hit?', a: 'The World Trade Center and the Pentagon',
        relates: 'The World Trade Center is in New York. The Pentagon is near Washington.' },
      { id: 'nn-dead', q: 'About how many people were killed that day?', a: 'Nearly 3,000 people',
        relates: 'The number shows how large the attacks were.' },
      { id: 'nn-dept', q: 'What new part of the federal government was created afterward?', a: 'A department for homeland security',
        relates: 'It is a new part of the national government, made in answer to the attacks.' }
    ] },

  { id: 'chk-nn-planes', kind: 'check', after: 'facts-attack', ask: { type: 'fact', row: 'nn-planes' } },
  { id: 'chk-nn-targets', kind: 'check', after: 'facts-attack', ask: { type: 'fact', row: 'nn-targets' } },
  { id: 'chk-nn-dead', kind: 'check', after: 'facts-attack', ask: { type: 'fact', row: 'nn-dead' } },
  { id: 'chk-nn-dept', kind: 'check', after: 'facts-attack', ask: { type: 'fact', row: 'nn-dept' } },

  /* ---------- the vote, in five years ---------- */
  { id: 'con-vote', kind: 'concept',
    h: 'The right to vote was widened five times: in what years',
    link: 'The vote was widened one group at a time. These are the five years.',
    case: 'c10-vote',
    plain: [
      'Hadiya’s grandmother is right. At the founding, the vote was mostly limited to white men who owned property, and each widening after that was won against opposition. An earlier unit covers what each amendment says. This group is about when.',
      '1870: the Fifteenth Amendment said the right to vote cannot be denied because of race.',
      '1920: the Nineteenth Amendment said it cannot be denied because of sex.',
      '1964: the Twenty-fourth Amendment ended the poll tax, a fee to vote, in federal elections.',
      '1965: the Voting Rights Act put federal officials behind the Fifteenth Amendment’s promise.',
      '1971: the Twenty-sixth Amendment lowered the voting age to eighteen.'
    ] },

  { id: 'facts-vote', kind: 'facts',
    h: 'Five years in which the vote was widened',
    link: 'Five years, from 1870 to 1971.',
    concept: 'con-vote',
    rows: [
      { id: 'vy-race', q: 'In what year did the Fifteenth Amendment say that the right to vote cannot be denied because of race?', a: '1870',
        relates: 'The first of the five, just after the Civil War. An amendment is part of the Constitution.' },
      { id: 'vy-sex', q: 'In what year did the Nineteenth Amendment say that the right to vote cannot be denied because of sex?', a: '1920',
        relates: 'It came after a campaign for women’s right to vote that began in 1848.' },
      { id: 'vy-poll', q: 'In what year did the Twenty-fourth Amendment end the poll tax, a fee to vote, in federal elections?', a: '1964',
        relates: 'A poll tax was a fee a person had to pay to vote. It came in the same year as the Civil Rights Act.' },
      { id: 'vy-vra', q: 'In what year did the Voting Rights Act put federal officials behind the Fifteenth Amendment’s promise?', a: '1965',
        relates: 'This is an Act of Congress, not an amendment. It made the promise of 1870 real, ninety-five years after it was written.' },
      { id: 'vy-age', q: 'In what year did the Twenty-sixth Amendment lower the voting age to eighteen?', a: '1971',
        relates: 'The most recent widening of the vote in this course.' }
    ] },

  { id: 'chk-vy-race', kind: 'check', after: 'facts-vote', ask: { type: 'fact', row: 'vy-race' } },
  { id: 'chk-vy-sex', kind: 'check', after: 'facts-vote', ask: { type: 'fact', row: 'vy-sex' } },
  { id: 'chk-vy-poll', kind: 'check', after: 'facts-vote', ask: { type: 'fact', row: 'vy-poll' } },
  { id: 'chk-vy-vra', kind: 'check', after: 'facts-vote', ask: { type: 'fact', row: 'vy-vra' } },
  { id: 'chk-vy-age', kind: 'check', after: 'facts-vote', ask: { type: 'fact', row: 'vy-age' } },

  { id: 'look-vote', kind: 'lookalike', ledger: 'vy-race~vy-vra',
    h: 'The promise written down, and the promise made real',
    link: 'Two years about race and the vote, ninety-five years apart, get swapped.',
    facts: ['vy-race', 'vy-vra'],
    instruction: 'Compare what happened in each year: a promise written into the Constitution, or federal officials put behind it.',
    prompt: { kind: 'which', answer: 'vy-vra' },
    difference: [
      'Fact A is the Fifteenth Amendment: {f:vy-race}. It wrote the promise into the Constitution.',
      'Fact B is the Voting Rights Act: {f:vy-vra}. It put federal officials behind that promise, so it became real for the people who had been shut out.'
    ] }
]);
