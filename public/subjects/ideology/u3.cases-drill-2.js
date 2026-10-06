// Political Ideologies, Unit Three: drill cases for the second stage: the whole route, clean cases.
// Every text is invented. No person, party, country or event is real.

FC.cases('ideology', 'u3', [

  { id: 'n-rt-coin', use: 'drill', tier: 'clean', setting: 'money', topic: 'a new national coin',
    text: "The treasurer of Aldmere, at the unveiling of a new national coin: 'Farmers, clerks and sailors, from every region: this coin will pass through all your hands, and each of you has made it worth something. We are one country, and it is our first loyalty. The government will answer for the coin at the election in the fall, and the opposition is free to say what it likes.'",
    outcome: 'nationalism', route: { D1: ['nation'], N1: ['whole'], N2: ['keep'] },
    cues: { D1: 'We are one country, and it is our first loyalty',
            N1: 'Farmers, clerks and sailors, from every region: this coin will pass through all your hands',
            N2: 'The government will answer for the coin at the election in the fall, and the opposition is free to say what it likes' },
    reason: { D1: 'The text puts one country first: {cue:D1}.',
              N1: 'The treasurer speaks for farmers, clerks and sailors from every region as one: {cue:N1}. Nobody is named as the other side.',
              N2: 'The government will answer at the election and the opposition is free to speak: {cue:N2}. The vote and the right to disagree stay.' },
    not: { outcome: 'fasc', why: '{o:fasc} would speak for everyone in the same way but would end the election and silence the opposition. Here both are left in place.' } },

  { id: 'n-rt-shipyard', use: 'drill', tier: 'clean', setting: 'work', topic: 'the opening of a shipyard',
    text: "From the Leader's address at the opening of a shipyard in Vessany: 'Vessany is one people with one will, and I am the voice of that will. The old parliament has talked itself to death and will not meet again. Papers that print the old parties' complaints will be closed, and the old parties' leaders will be watched.'",
    outcome: 'fasc', route: { D1: ['nation'], N1: ['whole'], N2: ['aside'] },
    cues: { D1: 'Vessany is one people with one will, and I am the voice of that will',
            N1: 'Vessany is one people with one will, and I am the voice of that will',
            N2: ['The old parliament has talked itself to death and will not meet again', "Papers that print the old parties' complaints will be closed"] },
    reason: { D1: 'The text puts one people first: {cue:D1}.',
              N1: 'The Leader speaks for the whole of Vessany as one people: {cue:N1}. Nobody is ranked by blood.',
              N2: 'Parliament will not meet again and the papers that print complaints will be closed: {cue:N2}. That takes away the vote and the say of those who disagree.' },
    not: { outcome: 'nationalism', why: '{o:nationalism} would leave parliament and the papers in place. Here the Leader ends them, so that his is the one voice.' } },

  { id: 'n-rt-theater', use: 'drill', tier: 'clean', setting: 'town', topic: 'a theater sold to a foreign chain',
    text: "From a poster of the Marren Stage list: 'The ministers and the arts officials have sold the old Marren theater to a foreign chain. Marren's stage should tell Marren's stories, in Marren's own voice. Vote Stage list on the fifth and the doors will open to our own again.'",
    outcome: 'natpop', route: { D1: ['nation'], N1: ['elitenation'], N2: ['keep'] },
    cues: { D1: "Marren's stage should tell Marren's stories, in Marren's own voice",
            N1: ['The ministers and the arts officials have sold the old Marren theater to a foreign chain', "Marren's stage should tell Marren's stories, in Marren's own voice"],
            N2: 'Vote Stage list on the fifth and the doors will open to our own again' },
    reason: { D1: 'The text puts one people first, marked out by its own stories and voice: {cue:D1}.',
              N1: 'It sets the town\'s people against an {t:elite}, the ministers and the officials, and wants the country\'s own culture put first: {cue:N1}.',
              N2: 'The remedy is a vote: {cue:N2}. Nobody\'s say is to be taken away.' },
    not: { outcome: 'pop', why: '{o:pop} would stop at the anger at the ministers and officials. This poster goes on to say that the stage should tell the people\'s own stories, which puts culture first.' } },

  { id: 'n-rt-pension', use: 'drill', tier: 'clean', setting: 'money', topic: 'a pension fund lost',
    text: "From a pamphlet: 'The fund managers and the ministers who sit with them lost the pension money and kept their bonuses. The ordinary people of this country were left with the bill. Next month's election is our chance to send every one of them home.'",
    outcome: 'pop', route: { D1: ['nation'], N1: ['eliteonly'], N2: ['keep'] },
    cues: { D1: 'The ordinary people of this country were left with the bill',
            N1: ['The fund managers and the ministers who sit with them lost the pension money and kept their bonuses', 'send every one of them home'],
            N2: "Next month's election is our chance to send every one of them home" },
    reason: { D1: 'The pamphlet speaks for the ordinary people of one country: {cue:D1}.',
              N1: 'It sets ordinary people against a few at the top and stops there: {cue:N1}. It names no borders, culture or industry to put first.',
              N2: 'The remedy is an election: {cue:N2}. The vote stays.' },
    not: { outcome: 'natpop', why: '{o:natpop} would say what the country\'s borders, culture or industry should be. The pamphlet says only that those at the top should be sent home.' } },

  /* ---------- Varied ---------- */
]);
