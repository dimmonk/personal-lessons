// Political Ideologies, Unit Three: drill cases for the second stage: the whole route, varied cases.
// Every text is invented. No person, party, country or event is real.

FC.cases('ideology', 'u3', [

  { id: 'n-rt-frontier', use: 'drill', tier: 'varied', setting: 'borders', topic: 'land along the frontier',
    text: "From the program of the Frontier Guard of Dorn: 'The land along the frontier belongs to the old blood of Dorn, who held it for a thousand years, and not to the lower peoples who farm it for them. The Guard will take it back for the old blood. Anyone who says the peoples are equal will not be heard. There is one party, and it is ours.'",
    outcome: 'nazi', route: { D1: ['nation'], N1: ['blood'], N2: ['aside'] },
    cues: { D1: 'The land along the frontier belongs to the old blood of Dorn',
            N1: 'The land along the frontier belongs to the old blood of Dorn, who held it for a thousand years, and not to the lower peoples who farm it for them',
            N2: 'Anyone who says the peoples are equal will not be heard. There is one party, and it is ours' },
    reason: { D1: 'The program puts one people first, marked out by its blood: {cue:D1}.',
              N1: 'It sorts people into the old blood and "the lower peoples", with its own on top: {cue:N1}.',
              N2: 'Critics will not be heard and there is one party: {cue:N2}. That ends the vote, but the ranking still decides the name.' },
    not: { outcome: 'fasc', why: '{o:fasc} also pushes the vote aside, but ranks nobody by blood. This program does.' },
    wouldChange: 'If it asked the voters for power and left other parties alone, it would still be {o:nazi}. If it dropped the ranking and spoke for everyone as one, it would be {o:fasc}.' },

  { id: 'n-rt-drought', use: 'drill', tier: 'varied', setting: 'work', topic: 'a drought relief fund',
    text: "A radio appeal from the prime minister of Aldmere: 'The drought has hit the farms of the east, but this is everyone's drought. Every town, every trade, rich or poor, will pay into the relief fund, because we are one people and we do not leave our own to fall. I will answer for every dollar of it to parliament, and I expect the opposition to ask hard questions.'",
    outcome: 'nationalism', route: { D1: ['nation'], N1: ['whole'], N2: ['keep'] },
    cues: { D1: 'we are one people and we do not leave our own to fall',
            N1: 'Every town, every trade, rich or poor, will pay into the relief fund, because we are one people and we do not leave our own to fall',
            N2: 'I will answer for every dollar of it to parliament, and I expect the opposition to ask hard questions' },
    reason: { D1: 'The prime minister puts one people first: {cue:D1}.',
              N1: 'The appeal speaks for every town and every trade, rich and poor: {cue:N1}. Nobody is named as the other side.',
              N2: 'The prime minister will answer to parliament and expects hard questions: {cue:N2}. Nobody is silenced.' },
    not: { outcome: 'nazi', why: '{o:nazi} would rank peoples by blood. This appeal ranks nobody: rich and poor all pay and all are protected.' } },
]);
