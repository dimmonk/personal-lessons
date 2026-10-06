// Political Ideologies, Unit Three: fresh cases kept back for later days (first file).
// Every text is invented. No person, party, country or event is real.

FC.cases('ideology', 'u3', [

  { id: 'n-ret-flood', use: 'return', tier: 'varied', setting: 'town', topic: 'floods along the river',
    text: "The prime minister of Brevia, after the floods: 'Every town on the river lost something, and every town will be helped, because we are one people and none of us is left to carry this alone. The accounts of the relief fund will be published, and the opposition and the press may go through every line.'",
    outcome: 'nationalism', route: { D1: ['nation'], N1: ['whole'], N2: ['keep'] },
    cues: { D1: 'we are one people and none of us is left to carry this alone',
            N1: 'Every town on the river lost something, and every town will be helped, because we are one people and none of us is left to carry this alone',
            N2: 'The accounts of the relief fund will be published, and the opposition and the press may go through every line' },
    reason: { D1: 'The prime minister puts one people first: {cue:D1}.',
              N1: 'Every town on the river is spoken for together, as one: {cue:N1}. Nobody in the country is named as the other side.',
              N2: 'The accounts are open to the opposition and the press: {cue:N2}. The right to question is left in place.' },
    not: { outcome: 'fasc', why: '{o:fasc} would speak for everyone in the same way but would close the opposition and the press. Here they are invited in.' } },

  { id: 'n-ret-order', use: 'return', tier: 'varied', setting: 'health', topic: 'a medical society dissolved',
    text: "From the Leader's health order: 'The nation is one people with one will, and the Leader is its doctor. The medical society that wrote to criticize the order is dissolved, and its members will not practice.'",
    outcome: 'fasc', route: { D1: ['nation'], N1: ['whole'], N2: ['aside'] },
    cues: { D1: 'The nation is one people with one will',
            N1: 'The nation is one people with one will, and the Leader is its doctor',
            N2: 'The medical society that wrote to criticize the order is dissolved, and its members will not practice' },
    reason: { D1: 'The order puts one nation first: {cue:D1}.',
              N1: 'It speaks for the nation as a single people: {cue:N1}. Nobody is ranked by blood.',
              N2: 'The society that criticized the order is dissolved and its members barred: {cue:N2}. That takes away the say of those who disagree.' },
    not: { outcome: 'nationalism', why: '{o:nationalism} would leave the medical society and its letter alone. Here the society is dissolved for writing it.' } },

  { id: 'n-ret-ferry', use: 'return', tier: 'varied', setting: 'work', topic: 'island ferries sold abroad',
    text: "A leaflet from the Anchor list: 'The ministers and the shipping barons have sold the island ferries to a foreign firm. Island ferries should be run by islanders, for islanders. Put the Anchor list in the council on Sunday and we will bring them home.'",
    outcome: 'natpop', route: { D1: ['nation'], N1: ['elitenation'], N2: ['keep'] },
    cues: { D1: 'Island ferries should be run by islanders, for islanders',
            N1: ['The ministers and the shipping barons have sold the island ferries to a foreign firm', 'Island ferries should be run by islanders, for islanders'],
            N2: 'Put the Anchor list in the council on Sunday and we will bring them home' },
    reason: { D1: 'The leaflet puts one people first, marked out by its own islands: {cue:D1}.',
              N1: 'It sets the islanders against a few at the top, the ministers and the shipping barons, and wants the country\'s own industry put first: {cue:N1}.',
              N2: 'The remedy is a seat on the council: {cue:N2}. The vote stays.' },
    not: { outcome: 'pop', why: '{o:pop} would stop at the anger at those at the top. This leaflet says what the ferries should be: run by islanders, for islanders.' } },
]);
