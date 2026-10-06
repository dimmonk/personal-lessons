// Political Ideologies, Unit Three: cases shown inside cards (the word the unit leans on, the first two names).
// Every text is invented. No person, party, country or event is real.

FC.cases('ideology', 'u3', [

  { id: 'n-term-quarry', use: 'teach', tier: 'clean', setting: 'town', topic: 'a quarry town and its three families', name: 'The quarry town',
    text: "In the town of Brack, three families own the quarry, the only bank and the newspaper. Between them they decide who gets a loan, which stories are printed and who is hired. The other four thousand people in Brack have no say in any of it, unless one of the three families happens to take their side." },

  /* ---------- Nationalism ---------- */

  { id: 'n-anniversary', use: 'teach', tier: 'clean', setting: 'town', topic: 'a founding day speech', name: 'The anniversary speech',
    text: "From a speech on Founding Day in the market square of Vessany: 'Farmers and clerks, nurses and bakers, those who voted for us and those who did not: today we are one country, with one flag and one future. Nothing that divides us is as strong as what holds us together, and our first loyalty is to this nation. In October the voters will choose who governs it, and every party is free to stand against us.'",
    outcome: 'nationalism', route: { D1: ['nation'], N1: ['whole'], N2: ['keep'] },
    cues: { D1: 'our first loyalty is to this nation',
            N1: ['today we are one country, with one flag and one future', 'Nothing that divides us is as strong as what holds us together'],
            N2: 'In October the voters will choose who governs it, and every party is free to stand against us' } },

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

  { id: 'n-gazette', use: 'check', tier: 'clean', setting: 'money', topic: 'a notice in the official gazette',
    text: "From the official gazette of Brevia: 'The people of Brevia are one body, and the Committee is its single voice. Taxes will be paid to the Committee's office from the first of May. The election due in March is canceled, and speeches against the Committee are an offense.'",
    outcome: 'fasc', route: { D1: ['nation'], N1: ['whole'], N2: ['aside'] },
    cues: { N2: 'The election due in March is canceled, and speeches against the Committee are an offense' },
    segments: [
      { text: 'The people of Brevia are one body, and the Committee is its single voice', note: 'That says whom the text speaks for. The words that take away anyone\'s say are in the last sentence.' },
      { text: "Taxes will be paid to the Committee's office from the first of May", note: 'That says where the taxes go. It does not take away anyone\'s say.' },
      { text: 'The election due in March is canceled, and speeches against the Committee are an offense' }
    ],
    reason: { N2: 'The text wants an election canceled and speeches against the Committee made an offense: {cue:N2}. That takes away the vote and the right to object, so that the Committee is the single voice.' } }
]);
