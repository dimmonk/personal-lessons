// Civics, Unit Ten, part five: who won the vote and who did the work, how long the first promise took to become real, and then
// the first of the three groups of symbols, names and places (the flag, July 4 and the statue).

FC.cards('civics', 'u10', [

  /* ---------- group ten: who was behind the widenings ---------- */
  { id: 'con-who', kind: 'concept',
    h: 'Who was behind the widenings of the vote',
    link: 'The last group gave the five years. This one gives the people and the bodies behind the widenings, because a change does not happen by itself.',
    case: 'c10-who',
    plain: [
      'Ilse’s trouble is that she knows the dates but not the people. A widening of the vote did not happen by itself, and each one had people behind it.',
      'At the start, the people who could mostly vote were white men who owned property. The campaign for women’s right to vote began in 1848 and was led by Susan B. Anthony, Elizabeth Cady Stanton and others, most of whom did not live to see it succeed in 1920. In 1965 it was Congress that passed the Voting Rights Act, and after it federal examiners began registering Black voters across the South.',
      'The last two are worth setting side by side. The lawmakers wrote the law, and the examiners, who are federal officials, did the work of registering voters. Putting a law into practice is {o:execute}, and here it is applied to a right. The four facts below are the starting point, the campaigners, the lawmakers and the examiners.'
    ] },

  { id: 'facts-who', kind: 'facts',
    h: 'Four facts about who was behind the vote',
    link: 'These are the four facts about who was behind the vote, each with how it fits the idea that the vote was widened by people, step by step.',
    concept: 'con-who',
    rows: [
      { id: 'vw-founding', q: 'At the founding, who could mostly vote?', a: 'White men who owned property',
        relates: 'It is the starting point, and it left out many people. It means that the country was not a democracy in which everyone could vote from the start: each widening came later, and each was won against opposition.' },
      { id: 'vw-campaign', q: 'Who led the campaign for women’s right to vote, which began in 1848?', a: 'Susan B. Anthony and Elizabeth Cady Stanton, among others',
        relates: 'Most of its leaders did not live to see it succeed. It succeeded with the Nineteenth Amendment, in 1920.' },
      { id: 'vw-congress', q: 'Which body passed the Voting Rights Act in 1965?', a: 'Congress',
        relates: 'It is an Act of Congress, and not an amendment. It is Congress writing a law that puts the Fifteenth Amendment’s promise into practice.' },
      { id: 'vw-examiners', q: 'Who began registering Black voters across the South after the Voting Rights Act?', a: 'Federal examiners',
        relates: 'They are federal officials, and they did the work of registering the voters. Writing the law and doing the work are two different jobs.' }
    ] },

  { id: 'chk-vw-founding', kind: 'check', after: 'facts-who', ask: { type: 'fact', row: 'vw-founding' } },
  { id: 'chk-vw-campaign', kind: 'check', after: 'facts-who', ask: { type: 'fact', row: 'vw-campaign' } },
  { id: 'chk-vw-congress', kind: 'check', after: 'facts-who', ask: { type: 'fact', row: 'vw-congress' } },
  { id: 'chk-vw-examiners', kind: 'check', after: 'facts-who', ask: { type: 'fact', row: 'vw-examiners' } },

  { id: 'look-who', kind: 'lookalike', ledger: 'vw-congress~vw-examiners',
    h: 'The lawmakers and the examiners',
    link: 'Two of the four facts are about the Voting Rights Act: the body that passed it, and the people who put it into practice. They get swapped, so they go side by side.',
    facts: ['vw-congress', 'vw-examiners'],
    instruction: 'Compare the job: writing the law, or doing the work the law calls for.',
    prompt: { kind: 'which', answer: 'vw-examiners' },
    difference: [
      'Fact A is {f:vw-congress}. It passed the Act in 1965. That is the writing of the law.',
      'Fact B is {f:vw-examiners}. They began registering Black voters across the South after the Act. That is the doing.',
      'Both belong to the government of the whole country. What separates them is the job: the lawmakers wrote the rule, and the examiners carried it out.'
    ] },

  /* ---------- group eleven: a promise and how long it took ---------- */
  { id: 'con-gap', kind: 'concept',
    h: 'A promise, and ninety-five years',
    link: 'The last two groups were about when and who. This one is about how long: the time between a right written down and a right made real.',
    case: 'c10-gap',
    plain: [
      'Mateo’s teacher is asking him to notice something that is not in the words of the amendment: the time between writing a right down and making it real. The Fifteenth Amendment was written in 1870. The Voting Rights Act came in 1965. The gap is ninety-five years.',
      'The Fifteenth Amendment did not disappear in those years; it stayed in the Constitution. But for most Black Southerners it was not made real until the 1960s, and it took Congress and federal officials to do it. This is the fact that helps most in understanding arguments about voting today.',
      'Two more numbers belong with it: 1848, the year that the campaign for women’s right to vote began, and eighteen, the age to which the voting age was lowered in 1971. The three facts below are the gap and these two numbers.'
    ] },

  { id: 'facts-gap', kind: 'facts',
    h: 'Three numbers of the long struggle for the vote',
    link: 'These are the three numbers of the group, each with how it fits the idea of a right that took time to become real.',
    concept: 'con-gap',
    rows: [
      { id: 'vg-gap', q: 'How many years passed between the Fifteenth Amendment of 1870 and the Voting Rights Act of 1965?', a: 'Ninety-five years',
        relates: 'It is 1965 minus 1870. For most Black Southerners, a right written into the Constitution had not been made real in all that time, and it took Congress and federal officials to do it.' },
      { id: 'vg-start', q: 'In what year did the campaign for women’s right to vote begin?', a: '1848',
        relates: 'The campaign began in 1848 and succeeded in 1920 with the Nineteenth Amendment. Most of its leaders did not live to see it succeed.' },
      { id: 'vg-age', q: 'To what age did the Twenty-sixth Amendment lower the voting age?', a: 'Eighteen',
        relates: 'It was done in 1971. It is the widening that applies to Hadiya, who was eighteen and had just registered to vote.' }
    ] },

  { id: 'chk-vg-gap', kind: 'check', after: 'facts-gap', ask: { type: 'fact', row: 'vg-gap' } },
  { id: 'chk-vg-start', kind: 'check', after: 'facts-gap', ask: { type: 'fact', row: 'vg-start' } },
  { id: 'chk-vg-age', kind: 'check', after: 'facts-gap', ask: { type: 'fact', row: 'vg-age' } },

  /* ---------- group twelve: the flag, July 4 and the statue ---------- */
  { id: 'con-flag', kind: 'concept',
    h: 'What the flag, July 4 and the statue stand for',
    link: 'The last groups were about events and about the vote. The next three are the plain symbols, names and places that a newcomer is expected to know, starting with what three symbols stand for.',
    case: 'c10-flag',
    plain: [
      'Ravi’s daughter asked three things about three symbols, and each has a plain answer. The flag has 13 stripes and 50 stars. The stripes stand for the original colonies, and the stars stand for the states, one star for each.',
      'Independence Day is July 4. It marks the day that the Declaration of Independence was adopted, and the parade is on that day for that reason.',
      'The Statue of Liberty is a symbol too. It became a symbol of welcome in the years when millions of immigrants arrived. The numbers are the part that people swap: 13 is how the country began, with the original colonies, and 50 is what it is made of now, with the states. The four facts below are what each symbol stands for.'
    ] },

  { id: 'facts-flag', kind: 'facts',
    h: 'What four symbols stand for',
    link: 'These are the four facts of the group, each with how it fits the idea that a symbol stands for something that can be said.',
    concept: 'con-flag',
    rows: [
      { id: 'sy-stripes', q: 'What do the 13 stripes on the flag stand for?', a: 'The original colonies',
        relates: 'There are 13 stripes, one for each of the original colonies. They count how the country began.' },
      { id: 'sy-stars', q: 'What do the 50 stars on the flag stand for?', a: 'The states',
        relates: 'There are 50 stars, one for each state. They count what the country is made of now.' },
      { id: 'sy-july', q: 'What does Independence Day, July 4, mark?', a: 'The day the Declaration of Independence was adopted',
        relates: 'The Declaration explained why the colonies broke from Britain. July 4 is the day on which it was adopted, which is why that day is Independence Day.' },
      { id: 'sy-statue', q: 'What did the Statue of Liberty become a symbol of?', a: 'Welcome',
        relates: 'It was dedicated in 1886, in the years when millions of immigrants arrived, and it became a symbol of welcome.' }
    ] },

  { id: 'chk-sy-stripes', kind: 'check', after: 'facts-flag', ask: { type: 'fact', row: 'sy-stripes' } },
  { id: 'chk-sy-stars', kind: 'check', after: 'facts-flag', ask: { type: 'fact', row: 'sy-stars' } },
  { id: 'chk-sy-july', kind: 'check', after: 'facts-flag', ask: { type: 'fact', row: 'sy-july' } },
  { id: 'chk-sy-statue', kind: 'check', after: 'facts-flag', ask: { type: 'fact', row: 'sy-statue' } },

  { id: 'look-flag', kind: 'lookalike', ledger: 'sy-stripes~sy-stars',
    h: 'Thirteen stripes and fifty stars',
    link: 'Two of the four facts are the two counts on the flag. They get swapped, so they go side by side.',
    facts: ['sy-stripes', 'sy-stars'],
    instruction: 'Compare what each count is of: the country’s beginning, or what it is now.',
    prompt: { kind: 'which', answer: 'sy-stripes' },
    difference: [
      'Fact A is the stripes: {f:sy-stripes}. There are 13 of them, one for each of the first colonies.',
      'Fact B is the stars: {f:sy-stars}. There are 50 of them, one for each state there is now.',
      'The smaller number is the older thing: 13 stripes for how the country began, and 50 stars for what it has become.'
    ] }
]);
