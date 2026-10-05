// Political Ideologies, Unit Three: cases shown inside cards, part one (the word for the unit, the first two names).
// use: 'teach' = shown in a card with its reasoning; 'check' = asked between cards. Neither may appear in the drill.
// Every text here is invented. No person, party, country or event is real, and no text says what any real person believes.
// A branch case carries route: { D1, N1, N2 } and an outcome. cues[STEP] is the exact phrase in the text that decides that
// question (or a list of phrases); the app marks it, always in the same style. segments are the tappable pieces for
// "tap the words" prompts; note is shown if that piece is tapped in error. reason[STEP] is the reason for this case's answer.

FC.cases('ideology', 'u3', [

  /* ---------- The word the unit leans on (shown by the term card; asked of nothing) ---------- */
  { id: 'n-term-quarry', use: 'teach', tier: 'clean', setting: 'town', topic: 'a quarry town and its three families', name: 'The quarry town',
    text: "In the town of Brack, three families own the quarry, the only bank and the newspaper. Between them they decide who gets a loan, which stories are printed and who is hired. The other four thousand people in Brack have no say in any of it, unless one of the three families happens to take their side." },

  /* ---------- Nationalism ---------- */
  { id: 'n-anniversary', use: 'teach', tier: 'clean', setting: 'town', topic: 'a founding day speech', name: 'The anniversary speech',
    text: "From a speech on Founding Day in the market square of Vessany: 'Farmers and clerks, nurses and bakers, those who voted for us and those who did not: today we are one country, with one flag and one future. Nothing that divides us is as strong as what holds us together, and our first loyalty is to this nation. In October the voters will choose who governs it, and every party is free to stand against us.'",
    outcome: 'nationalism', route: { D1: ['nation'], N1: ['whole'], N2: ['keep'] },
    cues: { D1: 'our first loyalty is to this nation',
            N1: ['today we are one country, with one flag and one future', 'Nothing that divides us is as strong as what holds us together'],
            N2: 'In October the voters will choose who governs it, and every party is free to stand against us' } },

  { id: 'n-schoolbooks', use: 'teach', tier: 'clean', setting: 'schooling', topic: 'a history textbook', name: 'The history textbook',
    text: "The education minister of Calder, launching a new history textbook: 'Children in every town and every valley will read the same story, because they belong to the same people. A country that knows itself is stronger than any party in it. If parents think the book gets something wrong, they may write to their representatives, and parliament will take up the complaints in the spring.'",
    outcome: 'nationalism', route: { D1: ['nation'], N1: ['whole'], N2: ['keep'] },
    cues: { D1: 'A country that knows itself is stronger than any party in it',
            N1: 'Children in every town and every valley will read the same story, because they belong to the same people',
            N2: 'they may write to their representatives, and parliament will take up the complaints in the spring' },
    segments: [
      { text: 'Children in every town and every valley will read the same story, because they belong to the same people' },
      { text: 'A country that knows itself is stronger than any party in it', note: 'That puts the country above any party. It says how much the country matters. The words that speak for everyone as one people are in the first sentence.' },
      { text: 'they may write to their representatives, and parliament will take up the complaints in the spring', note: 'That says what happens to parents who disagree with the book. It does not say whom the text speaks for.' }
    ] },

  { id: 'n-savings', use: 'check', tier: 'clean', setting: 'money', topic: 'a savings bond poster',
    text: "A poster for the Vessan Savings Bond: 'Whatever your trade, whatever your town, put in what you can. When the whole country saves together, the whole country stands taller. Ask each party what it thinks of this bond, and vote for the one that answers best.'",
    outcome: 'nationalism', route: { D1: ['nation'], N1: ['whole'], N2: ['keep'] },
    cues: { N1: 'When the whole country saves together, the whole country stands taller', N2: 'vote for the one that answers best' },
    segments: [
      { text: 'A poster for the Vessan Savings Bond', note: 'That says what the poster is for. It does not say whom the poster speaks for.' },
      { text: 'When the whole country saves together, the whole country stands taller' },
      { text: 'Ask each party what it thinks of this bond, and vote for the one that answers best', note: 'That is about parties and voting, and it leaves the vote in place. It does not speak for everyone as one.' }
    ],
    reason: { N1: 'The poster speaks for everyone in the country together: {cue:N1}. It names nobody in the country as the other side, and it says nothing about ranking anyone.' } },

  /* ---------- Fascism ---------- */
  { id: 'n-rally', use: 'teach', tier: 'clean', setting: 'town', topic: 'a rally in the main square', name: 'The rally speech',
    text: "From a speech at a rally in the main square of Tolvar: 'We are one people, with one will, and I am its voice. The old parties have talked for thirty years and the country has gone nowhere. From tomorrow there is one movement, and the other parties will be closed. Newspapers that print their complaints will be shut. A nation does not need an argument. It needs a leader.'",
    outcome: 'fasc', route: { D1: ['nation'], N1: ['whole'], N2: ['aside'] },
    cues: { D1: 'We are one people, with one will, and I am its voice',
            N1: 'We are one people, with one will, and I am its voice',
            N2: ['From tomorrow there is one movement, and the other parties will be closed', 'Newspapers that print their complaints will be shut'] } },

  { id: 'n-factory-letter', use: 'teach', tier: 'clean', setting: 'work', topic: 'a letter to every workshop', name: 'The letter to the workshops',
    text: "From a letter sent by the Leader's office to every workshop in Merrow: 'Merrow is one people and it has one will. Every association and every party other than the Movement is dissolved from the first of the month. Anyone who calls a meeting against the Movement will be arrested.'",
    outcome: 'fasc', route: { D1: ['nation'], N1: ['whole'], N2: ['aside'] },
    cues: { D1: 'Merrow is one people and it has one will',
            N1: 'Merrow is one people and it has one will',
            N2: ['Every association and every party other than the Movement is dissolved from the first of the month', 'Anyone who calls a meeting against the Movement will be arrested'] },
    segments: [
      { text: "From a letter sent by the Leader's office to every workshop in Merrow", note: 'That says where the words came from. It does not say what they do to anyone.' },
      { text: 'Merrow is one people and it has one will', note: 'That says whom the text speaks for. It is the same as the answer to the first question in the rally speech. The words that take away the say of others are in the next sentences.' },
      { text: 'Every association and every party other than the Movement is dissolved from the first of the month. Anyone who calls a meeting against the Movement will be arrested' }
    ] },

  { id: 'n-gazette', use: 'check', tier: 'clean', setting: 'money', topic: 'a notice in the official gazette',
    text: "From the official gazette of Brevia: 'The people of Brevia are one body, and the Committee is its single voice. Taxes will be paid to the Committee's office from the first of May. The election due in March is cancelled, and speeches against the Committee are an offence.'",
    outcome: 'fasc', route: { D1: ['nation'], N1: ['whole'], N2: ['aside'] },
    cues: { N2: 'The election due in March is cancelled, and speeches against the Committee are an offence' },
    segments: [
      { text: 'The people of Brevia are one body, and the Committee is its single voice', note: 'That says whom the text speaks for. The words that take away anyone\'s say are in the last sentence.' },
      { text: "Taxes will be paid to the Committee's office from the first of May", note: 'That says where the taxes go. It does not take away anyone\'s say.' },
      { text: 'The election due in March is cancelled, and speeches against the Committee are an offence' }
    ],
    reason: { N2: 'The text wants an election cancelled and speeches against the Committee made an offence: {cue:N2}. That takes away the vote and the right to object, so that the Committee is the single voice.' } }
]);
