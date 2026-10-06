// Civics, Unit Ten, part six: the names and places a newcomer is expected to know, how many states there are and what a
// territory is, and the recap that closes the unit. This is a fact unit, so it has a recap and no plan card (the subject is not
// an action subject, A12).

FC.cards('civics', 'u10', [

  /* ---------- group thirteen: five names ---------- */
  { id: 'con-names', kind: 'concept',
    h: 'Five names a newcomer is expected to know',
    link: 'The last group was about what symbols stand for. This one is about their names: the capital, the anthem, the two major parties, and the statue.',
    case: 'c10-names',
    plain: [
      'Sofia’s four questions are four names, and a name is a fact that you either hold or do not. The capital of the United States is Washington, D.C. It became the capital in 1800. The national anthem is The Star-Spangled Banner, which was written during the War of 1812. The two major political parties are the Democratic Party and the Republican Party. And the Statue of Liberty, which stands in New York Harbor, was a gift from France.',
      'There is nothing to work out in these: each one is a name. What helps is attaching each to the place where you meet it. The capital is in the news, the anthem is sung before a game or on a holiday, the parties are at every election, and the statue is in the harbor where the arrivals landed. The word “major” matters in the parties: it says that these are the two big ones, and it does not say that there are no others.',
      'The five facts below are the five names: the capital, the anthem, the two parties, the country that gave the statue, and the harbor that it stands in.'
    ] },

  { id: 'facts-names', kind: 'facts',
    h: 'Five names',
    link: 'These are the five names of the group, each with where you meet it.',
    concept: 'con-names',
    rows: [
      { id: 'nm-capital', q: 'What is the capital of the United States?', a: 'Washington, D.C.',
        relates: 'It became the capital in 1800. You meet it in the news, wherever the government of the whole country is meant.' },
      { id: 'nm-anthem', q: 'What is the national anthem called?', a: 'The Star-Spangled Banner',
        relates: 'It was written during the War of 1812. You meet it when a choir or a crowd sings before a game or on a holiday.' },
      { id: 'nm-parties', q: 'Which are the two major political parties?', a: 'The Democratic Party and the Republican Party',
        relates: 'You meet them at every election. The word “major” says that they are the two big ones, and not that there are no others.' },
      { id: 'nm-france', q: 'Which country gave the Statue of Liberty to the United States?', a: 'France',
        relates: 'It was a gift from France, and it was dedicated in 1886. It is a large copper statue, and it became a symbol of welcome.' },
      { id: 'nm-harbor', q: 'In which harbor does the Statue of Liberty stand?', a: 'New York Harbor',
        relates: 'It stands in the same harbor as Ellis Island, where about twelve million immigrants passed through before it closed in 1954.' }
    ] },

  { id: 'chk-nm-capital', kind: 'check', after: 'facts-names', ask: { type: 'fact', row: 'nm-capital' } },
  { id: 'chk-nm-anthem', kind: 'check', after: 'facts-names', ask: { type: 'fact', row: 'nm-anthem' } },
  { id: 'chk-nm-parties', kind: 'check', after: 'facts-names', ask: { type: 'fact', row: 'nm-parties' } },
  { id: 'chk-nm-france', kind: 'check', after: 'facts-names', ask: { type: 'fact', row: 'nm-france' } },
  { id: 'chk-nm-harbor', kind: 'check', after: 'facts-names', ask: { type: 'fact', row: 'nm-harbor' } },

  /* ---------- group fourteen: how many states, and what is not a state ---------- */
  { id: 'con-states', kind: 'concept',
    h: 'Fifty states, and places that are not states',
    link: 'The names were about the symbols and the capital. This last group is about the country’s own map: how many states there are, and what a territory is.',
    case: 'c10-states',
    plain: [
      'Lucía’s question has a number in it and a name in it. The number is easy: there are 50 states.',
      'The name is territory. A territory is part of the United States without being a state. The five are Puerto Rico, Guam, the U.S. Virgin Islands, American Samoa and the Northern Mariana Islands. The people who live there live in the United States, and the political rights of people who live there differ from those of people in the states.',
      'This unit does not say how they differ, because this course holds nothing about it. If you ever live in one, check how. The three facts below are the count, what a territory is, and what is different for the people who live in one.'
    ] },

  { id: 'facts-states', kind: 'facts',
    h: 'The states and the territories',
    link: 'These are the three facts of the group, each with how it fits the map of the country.',
    concept: 'con-states',
    rows: [
      { id: 'st-count', q: 'How many states are there?', a: 'Fifty states',
        relates: 'There are 50 stars on the flag, one for each. The territories are not among them.' },
      { id: 'st-def', q: 'What is a territory of the United States, such as Guam?', a: 'Part of the United States that is not a state',
        relates: 'The five are Puerto Rico, Guam, the U.S. Virgin Islands, American Samoa and the Northern Mariana Islands. They belong to the United States and they are not among the 50 states.' },
      { id: 'st-rights', q: 'What differs for the people who live in a territory?', a: 'Their political rights',
        relates: 'The political rights of people who live in a territory differ from those of people in the states. This course does not say how, so if you ever live in one, check how.' }
    ] },

  { id: 'chk-st-count', kind: 'check', after: 'facts-states', ask: { type: 'fact', row: 'st-count' } },
  { id: 'chk-st-def', kind: 'check', after: 'facts-states', ask: { type: 'fact', row: 'st-def' } },
  { id: 'chk-st-rights', kind: 'check', after: 'facts-states', ask: { type: 'fact', row: 'st-rights' } },

  /* ---------- the close ---------- */
  { id: 'recap-since', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now met every fact in the unit, in its group. This card puts them together, and then adds what to carry.',
    carry: [
      'Hang each fact on a year and a name together. A date with no event is as hard to hold as an event with no date, and the line from 1917 to 2001 puts the landmarks in their order.',
      'In the story of who may come in, three different bodies acted, and they are easy to mix up: a court said that a state could not decide it, Congress wrote a law for the whole country, and the federal government ran the station on Ellis Island.',
      'The right to vote was won step by step, and a right written down is not always a right made real. The Fifteenth Amendment of 1870 and the Voting Rights Act of 1965 are ninety-five years apart, and it took Congress and federal officials to close the gap.',
      'A court’s ruling and a law of Congress are different jobs. Brown v. Board of Education in 1954 was a ruling, and the Civil Rights Act of 1964 was a law.',
      'The unit holds almost nothing from the years 1877 to 1900: only the dates 1882, 1886 and 1892. It does not claim to cover those years. The citizenship test asks little about them, and the interview wants the short answer held here.'
    ] }
]);
