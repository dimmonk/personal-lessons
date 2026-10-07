// Civics, Unit Ten, part three: who won the vote, the flag, the names a newcomer is expected to know, and the recap.

FC.cards('civics', 'u10', [

  /* ---------- who won the vote, and how long it took ---------- */
  { id: 'con-who', kind: 'concept',
    h: 'Who won the vote, and how long it took',
    link: 'A widening of the vote never happened by itself.',
    case: 'c10-who',
    plain: [
      'At the founding, the people who could mostly vote were white men who owned property.',
      'The campaign for women’s right to vote began in 1848. Susan B. Anthony, Elizabeth Cady Stanton and others led it, and most of them did not live to see it succeed in 1920.',
      'A right written down is not always a right made real. The Fifteenth Amendment of 1870 stayed in the Constitution, but for most Black Southerners it did not become real until the Voting Rights Act of 1965: ninety-five years later. It took Congress and federal officials to close the gap.'
    ] },

  { id: 'facts-who', kind: 'facts',
    h: 'Three facts about the long struggle for the vote',
    link: 'The starting point, the campaigners and the length of the wait.',
    concept: 'con-who',
    rows: [
      { id: 'vw-founding', q: 'At the founding, who could mostly vote?', a: 'White men who owned property',
        relates: 'It left out many people. Each widening came later, against opposition.' },
      { id: 'vw-campaign', q: 'Who led the campaign for women’s right to vote, which began in 1848?', a: 'Susan B. Anthony and Elizabeth Cady Stanton, among others',
        relates: 'Most of its leaders did not live to see it succeed in 1920, with the Nineteenth Amendment.' },
      { id: 'vg-gap', q: 'How many years passed between the Fifteenth Amendment of 1870 and the Voting Rights Act of 1965?', a: 'Ninety-five years',
        relates: 'It is 1965 minus 1870. For most Black Southerners, a right written into the Constitution was not real in all that time.' }
    ] },

  { id: 'chk-vw-founding', kind: 'check', after: 'facts-who', ask: { type: 'fact', row: 'vw-founding' } },
  { id: 'chk-vw-campaign', kind: 'check', after: 'facts-who', ask: { type: 'fact', row: 'vw-campaign' } },
  { id: 'chk-vg-gap', kind: 'check', after: 'facts-who', ask: { type: 'fact', row: 'vg-gap' } },

  /* ---------- the flag ---------- */
  { id: 'con-flag', kind: 'concept',
    h: 'What the flag and July 4 stand for',
    link: 'The answers Ravi needed at the parade.',
    case: 'c10-flag',
    plain: [
      'The flag has 13 stripes and 50 stars. The 13 stripes stand for the original colonies. The 50 stars stand for the states, one star for each, so there are 50 states.',
      'People swap the two numbers. Remember it this way: 13 is how the country began, and 50 is what the country is now.',
      'Independence Day is July 4. It marks the day the Declaration of Independence was adopted.'
    ] },

  { id: 'facts-flag', kind: 'facts',
    h: 'The flag, July 4 and the states',
    link: 'What each part of the flag stands for, and what July 4 marks.',
    concept: 'con-flag',
    rows: [
      { id: 'sy-stripes', q: 'What do the 13 stripes on the flag stand for?', a: 'The original colonies',
        relates: 'One stripe for each of the original colonies. They count how the country began.' },
      { id: 'sy-stars', q: 'What do the 50 stars on the flag stand for?', a: 'The states',
        relates: 'One star for each state. They count what the country is now.' },
      { id: 'sy-july', q: 'What does Independence Day, July 4, mark?', a: 'The day the Declaration of Independence was adopted',
        relates: 'The Declaration explained why the colonies broke away from Britain.' },
      { id: 'st-count', q: 'How many states are there?', a: 'Fifty states',
        relates: 'One star on the flag for each.' }
    ] },

  { id: 'chk-sy-stripes', kind: 'check', after: 'facts-flag', ask: { type: 'fact', row: 'sy-stripes' } },
  { id: 'chk-sy-stars', kind: 'check', after: 'facts-flag', ask: { type: 'fact', row: 'sy-stars' } },
  { id: 'chk-sy-july', kind: 'check', after: 'facts-flag', ask: { type: 'fact', row: 'sy-july' } },
  { id: 'chk-st-count', kind: 'check', after: 'facts-flag', ask: { type: 'fact', row: 'st-count' } },

  { id: 'look-flag', kind: 'lookalike', ledger: 'sy-stripes~sy-stars',
    h: 'Thirteen stripes and fifty stars',
    link: 'The two counts on the flag get swapped.',
    facts: ['sy-stripes', 'sy-stars'],
    instruction: 'Compare what each count is of: how the country began, or what it is now.',
    prompt: { kind: 'which', answer: 'sy-stripes' },
    difference: [
      'Fact A is the stripes: {f:sy-stripes}. There are 13, one for each of the first colonies.',
      'Fact B is the stars: {f:sy-stars}. There are 50, one for each state there is now.'
    ] },

  /* ---------- four names ---------- */
  { id: 'con-names', kind: 'concept',
    h: 'Four names a newcomer is expected to know',
    link: 'The capital, the anthem, the two major parties and the statue.',
    case: 'c10-names',
    plain: [
      'There is nothing to work out here. Each one is a name, and it helps to link each name to where you meet it.',
      'The capital of the United States is Washington, D.C. You hear it in the news whenever the government of the whole country is meant.',
      'The national anthem is The Star-Spangled Banner. It is sung before a game or on a holiday.',
      'The two major political parties are the Democratic Party and the Republican Party. You meet them at every election. “Major” means the two big ones, not that there are no others.',
      'The Statue of Liberty was a gift from France.'
    ] },

  { id: 'facts-names', kind: 'facts',
    h: 'Four names',
    link: 'The four names from Sofia’s questions.',
    concept: 'con-names',
    rows: [
      { id: 'nm-capital', q: 'What is the capital of the United States?', a: 'Washington, D.C.',
        relates: 'You hear it in the news whenever the government of the whole country is meant.' },
      { id: 'nm-anthem', q: 'What is the national anthem called?', a: 'The Star-Spangled Banner',
        relates: 'You hear it when a choir or a crowd sings before a game or on a holiday.' },
      { id: 'nm-parties', q: 'Which are the two major political parties?', a: 'The Democratic Party and the Republican Party',
        relates: 'You meet them at every election.' },
      { id: 'nm-france', q: 'Which country gave the Statue of Liberty to the United States?', a: 'France',
        relates: 'A large copper statue in New York Harbor, dedicated in 1886.' }
    ] },

  { id: 'chk-nm-capital', kind: 'check', after: 'facts-names', ask: { type: 'fact', row: 'nm-capital' } },
  { id: 'chk-nm-anthem', kind: 'check', after: 'facts-names', ask: { type: 'fact', row: 'nm-anthem' } },
  { id: 'chk-nm-parties', kind: 'check', after: 'facts-names', ask: { type: 'fact', row: 'nm-parties' } },
  { id: 'chk-nm-france', kind: 'check', after: 'facts-names', ask: { type: 'fact', row: 'nm-france' } },

  /* ---------- the close ---------- */
  { id: 'recap-since', kind: 'recap',
    h: 'What to carry away',
    link: 'The facts of the unit, and what to carry.',
    carry: [
      'Learn each date together with its event. A date with no event is as hard to hold as an event with no date.',
      'A right written down is not always a right made real. The Fifteenth Amendment of 1870 and the Voting Rights Act of 1965 are ninety-five years apart.',
      'A court’s ruling and a law of Congress are different. Brown v. Board of Education in 1954 was a ruling, and the Civil Rights Act of 1964 was a law.',
      'On the flag, 13 is how the country began (the stripes) and 50 is what it is now (the stars).'
    ] }
]);
