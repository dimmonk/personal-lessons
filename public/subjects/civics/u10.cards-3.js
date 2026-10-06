// Civics, Unit Ten, part three: the Great Depression and the New Deal, the Cold War, and the civil rights movement.
// In each group the answers on the facts card are all names, so an answer cannot be guessed from its shape.

FC.cards('civics', 'u10', [

  /* ---------- group five: hard times and the answer to them ---------- */
  { id: 'con-hard', kind: 'concept',
    h: 'Hard times, and what was done about them',
    link: 'The line gave the year the Depression began. This group says what it was, what the President did about it, and what it left behind.',
    case: 'c10-hard',
    plain: [
      'Ines’s card is one small piece of a very large change, and the change began with a crash. In 1929 the Great Depression began: banks failed, and about a quarter of workers lost their jobs. That is one worker in four.',
      'The President’s answer was a set of new programs called the New Deal, and the President was Franklin D. Roosevelt. Social Security, the program named on Ines’s card, is the example that this course holds. New programs such as Social Security were run by new federal offices, and an office of that kind is called an {t:agency}.',
      'The result was that the federal government took a far larger role in daily life. The name for what these new offices did is {o:execute}: putting laws into practice, at a scale that the founders never saw. The four facts below are the trouble, the answer, the President and the example.'
    ] },

  { id: 'facts-hard', kind: 'facts',
    h: 'The Depression and the New Deal',
    link: 'These are the four names of the group, each with how it fits the idea of hard times and what was done about them.',
    concept: 'con-hard',
    rows: [
      { id: 'hd-depression', q: 'What is the long stretch that began in 1929, when banks failed and about a quarter of workers lost their jobs, called?', a: 'The Great Depression',
        relates: 'It is the trouble. Everything else in this group is what was done about it, who did it, and an example of what it left behind.' },
      { id: 'hd-newdeal', q: 'What is the President’s set of new programs, begun in answer to the hard times of the 1930s, called?', a: 'The New Deal',
        relates: 'It is the answer to the trouble, and not the trouble itself. Its programs were run by new federal offices, and the federal government took a far larger role in daily life.' },
      { id: 'hd-roosevelt', q: 'Which President began the programs that answered the hard times of the 1930s?', a: 'Franklin D. Roosevelt',
        relates: 'The New Deal is his: it was President Franklin D. Roosevelt’s answer to the Depression.' },
      { id: 'hd-security', q: 'Which program, one of the new ones begun in answer to the hard times of the 1930s, is the example to remember?', a: 'Social Security',
        relates: 'It is the program named on the card that Ines found. It was run by a new federal office, one of the new offices that the New Deal added to the federal government.' }
    ] },

  { id: 'chk-hd-depression', kind: 'check', after: 'facts-hard', ask: { type: 'fact', row: 'hd-depression' } },
  { id: 'chk-hd-newdeal', kind: 'check', after: 'facts-hard', ask: { type: 'fact', row: 'hd-newdeal' } },
  { id: 'chk-hd-roosevelt', kind: 'check', after: 'facts-hard', ask: { type: 'fact', row: 'hd-roosevelt' } },
  { id: 'chk-hd-security', kind: 'check', after: 'facts-hard', ask: { type: 'fact', row: 'hd-security' } },

  { id: 'look-hard', kind: 'lookalike', ledger: 'hd-depression~hd-newdeal',
    h: 'The trouble and the answer to it',
    link: 'Two of the four names are for the same years: one for the trouble, and one for the answer. They get swapped, so they go side by side.',
    facts: ['hd-depression', 'hd-newdeal'],
    instruction: 'Compare what each name is for: the trouble itself, or what was done about it.',
    prompt: { kind: 'which', answer: 'hd-newdeal' },
    difference: [
      'Fact A is {f:hd-depression}. It is the trouble: banks failing, and about a quarter of workers losing their jobs.',
      'Fact B is {f:hd-newdeal}. It is the answer: new programs, begun by the President, run by new federal offices.',
      'If the story is about banks that failed and people who lost work, it is the trouble. If it is about programs such as Social Security that were started in answer to it, it is the answer.'
    ] },

  /* ---------- group six: the Cold War ---------- */
  { id: 'con-cold', kind: 'concept',
    h: 'A long standoff, and the wars in it',
    link: 'The line gave the two years that the Cold War ran between. This group says what it was, who was on the other side, and what it shaped.',
    case: 'c10-cold',
    plain: [
      'The man on the bench gave Lena the right idea: the two names on the stone belong to one long standoff, which is a contest in which neither side gives way. It was between the United States and the Soviet Union, and it ran from about 1947 to 1991, after the Second World War. It is called the Cold War.',
      'It included wars in Korea and Vietnam, and it shaped American foreign policy for decades. Foreign policy means what a government does and says in its dealings with other countries.',
      'Notice what the facts below do not hold: how the standoff began, why each war was fought, or how the standoff ended. This course holds only what is written above, and so does this unit. The four facts below are its name, the other side, the wars and what it shaped.'
    ] },

  { id: 'facts-cold', kind: 'facts',
    h: 'The Cold War in four names',
    link: 'These are the four names of the group, each with how it fits the idea of a long standoff.',
    concept: 'con-cold',
    rows: [
      { id: 'cw-name', q: 'What is the long standoff of about 1947 to 1991 called?', a: 'The Cold War',
        relates: 'It came after the Second World War, and it lasted about forty-four years. It is a standoff, which means that neither side gave way.' },
      { id: 'cw-rival', q: 'The standoff was between the United States and which other country?', a: 'The Soviet Union',
        relates: 'It is the other side of the standoff. The course holds this name and nothing more about it, so this is all the unit holds.' },
      { id: 'cw-wars', q: 'Which two places had wars that were part of the standoff?', a: 'Korea and Vietnam',
        relates: 'These are the two wars that this course names as part of the Cold War.' },
      { id: 'cw-policy', q: 'What did the standoff shape for decades?', a: 'American foreign policy',
        relates: 'Foreign policy is what a government does and says in its dealings with other countries. The standoff with the Soviet Union shaped it for decades.' }
    ] },

  { id: 'chk-cw-name', kind: 'check', after: 'facts-cold', ask: { type: 'fact', row: 'cw-name' } },
  { id: 'chk-cw-rival', kind: 'check', after: 'facts-cold', ask: { type: 'fact', row: 'cw-rival' } },
  { id: 'chk-cw-wars', kind: 'check', after: 'facts-cold', ask: { type: 'fact', row: 'cw-wars' } },
  { id: 'chk-cw-policy', kind: 'check', after: 'facts-cold', ask: { type: 'fact', row: 'cw-policy' } },

  /* ---------- group seven: the civil rights movement ---------- */
  { id: 'con-civil', kind: 'concept',
    h: 'The civil rights movement: a court, a law and many people',
    link: 'The Cold War was about other countries. This group is about the country at home: the movement, from 1954 to 1965, to end segregation.',
    case: 'c10-civil',
    plain: [
      'Amir’s daughter has the three parts of the answer in her question already: a court, a law and people. They are the three landmarks of the civil rights movement, which ran from 1954 to 1965 and pushed to end segregation.',
      'Segregation means keeping people of different races apart, as when Black and white children were kept in separate public schools. The movement pushed to end that, and to end discrimination, which means treating people worse because of their race.',
      'The court was the Supreme Court. In 1954 it ruled, in a case called Brown v. Board of Education, that separate public schools for Black and white children are unequal. That is called {o:review}: a court checking a law against the Constitution. The people included Martin Luther King Jr. and thousands of others, who led marches and boycotts. A boycott is a refusal, by a group, to use or buy something, in order to press for a change. The law was the Civil Rights Act of 1964, passed by Congress, which outlaws segregation and discrimination. And in March 1965 marchers set out from Selma, Alabama, toward the state capital to demand the right to vote. The Voting Rights Act, which Congress passed months later, belongs to the groups on the vote, a little further on.',
      'The five facts below are the ruling, the leader, the law, the town and what the movement pushed to end.'
    ] },

  { id: 'facts-civil', kind: 'facts',
    h: 'Five names of the civil rights movement',
    link: 'These are the five names of the group, each with how it fits the movement to end segregation.',
    concept: 'con-civil',
    rows: [
      { id: 'cr-brown', q: 'Which 1954 ruling of the Supreme Court said that separate public schools for Black and white children are unequal?', a: 'Brown v. Board of Education',
        relates: 'A court was asked about a law and checked it against the Constitution, which is called {o:review}. It is the court landmark of the movement, ten years before the law of 1964.' },
      { id: 'cr-king', q: 'Which leader, together with thousands of others, led the marches and boycotts of the movement?', a: 'Martin Luther King Jr.',
        relates: 'The movement was the work of many people, and he is the leader that this course names. Marches and boycotts are two of the ways in which the movement pushed.' },
      { id: 'cr-act', q: 'Which 1964 law, passed by Congress, outlawed discrimination?', a: 'The Civil Rights Act of 1964',
        relates: 'It outlaws segregation and discrimination. It is Congress writing the rules, which is a different job from the court’s ruling in 1954.' },
      { id: 'cr-selma', q: 'From which Alabama town did marchers set out in March 1965 to demand the right to vote?', a: 'Selma, Alabama',
        relates: 'The marchers set out toward the state capital. Months later Congress passed the Voting Rights Act, and federal examiners began registering Black voters across the South.' },
      { id: 'cr-end', q: 'What did the civil rights movement push to end?', a: 'Segregation',
        relates: 'It is what the court ruled against in the schools, what the 1964 law outlawed, and what the marches pressed to end.' }
    ] },

  { id: 'chk-cr-brown', kind: 'check', after: 'facts-civil', ask: { type: 'fact', row: 'cr-brown' } },
  { id: 'chk-cr-king', kind: 'check', after: 'facts-civil', ask: { type: 'fact', row: 'cr-king' } },
  { id: 'chk-cr-act', kind: 'check', after: 'facts-civil', ask: { type: 'fact', row: 'cr-act' } },
  { id: 'chk-cr-selma', kind: 'check', after: 'facts-civil', ask: { type: 'fact', row: 'cr-selma' } },
  { id: 'chk-cr-end', kind: 'check', after: 'facts-civil', ask: { type: 'fact', row: 'cr-end' } },

  { id: 'look-civil', kind: 'lookalike', ledger: 'cr-brown~cr-act',
    h: 'A court’s ruling and a law of Congress',
    link: 'Two of the five names are landmarks aimed at the same thing: one is a ruling of 1954, the other a law of 1964. They get swapped, so they go side by side.',
    facts: ['cr-brown', 'cr-act'],
    instruction: 'Compare who acted: a court that ruled, or lawmakers who passed a law.',
    prompt: { kind: 'which', answer: 'cr-act' },
    difference: [
      'Fact A is {f:cr-brown}. It is a ruling by the Supreme Court in 1954, in answer to a case about separate public schools.',
      'Fact B is {f:cr-act}. It is a law passed by Congress in 1964. It outlaws segregation and discrimination.',
      'Both are landmarks of the same movement, and both are against segregation. What separates them is who acted, and when: a court, in 1954, or Congress, in 1964.'
    ] }
]);
