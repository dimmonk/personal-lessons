// Political Ideologies, Unit Three: fresh cases kept back for later days (second file).
// Every text is invented. No person, party, country or event is real.

FC.cases('ideology', 'u3', [

  { id: 'n-ret-parking', use: 'return', tier: 'varied', setting: 'town', topic: 'free parking for council members',
    text: "From a flyer: 'The council members voted themselves free parking and put the charge up for everyone else. They are laughing at the ordinary people of this country. Show them what you think at the polls.'",
    outcome: 'pop', route: { D1: ['nation'], N1: ['eliteonly'], N2: ['keep'] },
    cues: { D1: 'the ordinary people of this country',
            N1: ['The council members voted themselves free parking and put the charge up for everyone else', 'They are laughing at the ordinary people of this country'],
            N2: 'Show them what you think at the polls' },
    reason: { D1: 'The flyer speaks for the ordinary people of one country: {cue:D1}.',
              N1: 'It sets ordinary people against a few at the top, the council members, and stops there: {cue:N1}. No borders, culture or industry come first.',
              N2: 'The remedy is the polls: {cue:N2}.' },
    not: { outcome: 'natpop', why: '{o:natpop} would also say what the country should have, such as its industry first. The flyer only says the council members laugh at ordinary people.' } },

  { id: 'n-ret-stalls', use: 'return', tier: 'varied', setting: 'money', topic: 'market stalls reserved by descent',
    text: "From a poster of the Black Hand of Tolvar: 'Only the people of the high blood may hold a market stall. The lower peoples are made to serve, and not to sell. The Hand asks every citizen to vote for it on the twelfth, and promises to write this into the law.'",
    outcome: 'nazi', route: { D1: ['nation'], N1: ['blood'], N2: ['keep'] },
    cues: { D1: 'Only the people of the high blood may hold a market stall',
            N1: 'Only the people of the high blood may hold a market stall. The lower peoples are made to serve, and not to sell',
            N2: 'The Hand asks every citizen to vote for it on the twelfth' },
    reason: { D1: 'The poster puts one people first, marked out by its blood: {cue:D1}.',
              N1: 'It sorts people into "the high blood" and "the lower peoples", who are made to serve: {cue:N1}. That ranks people by blood.',
              N2: 'The Hand asks citizens to vote for it: {cue:N2}. The vote stays, and for this name that changes nothing.' },
    not: { outcome: 'nationalism', why: '{o:nationalism} would speak for everyone as equals. This poster divides people by blood and sets one people above the other.' } },
]);
