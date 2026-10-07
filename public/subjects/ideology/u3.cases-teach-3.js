// Political Ideologies, Unit Three: cases shown inside cards (the last name, the exception, the two questions, the worked case).
// Every text is invented. No person, party, country or event is real.

FC.cases('ideology', 'u3', [

  { id: 'n-x-elitefasc', use: 'teach', tier: 'misleading', setting: 'money', topic: 'a broadcast about the bankers', name: 'The broadcast against the bankers', also: ['whole'],
    text: "From a broadcast by the leader of the Black Lantern movement in Calder: 'The bankers and ministers in the capital have sold this country's farms and mills to foreigners and left our people poor. Calder is one people with one will, and the movement is its voice. When we take power, there will be no more elections to be bought by the rich, the other parties will be closed, and any paper that defends the bankers will be shut.'",
    outcome: 'fasc', route: { D1: ['nation'], N1: ['elitenation'], N2: ['aside'] },
    cues: { D1: 'Calder is one people with one will, and the movement is its voice',
            N1: "The bankers and ministers in the capital have sold this country's farms and mills to foreigners",
            N2: 'there will be no more elections to be bought by the rich, the other parties will be closed' },
    segments: [
      { text: "The bankers and ministers in the capital have sold this country's farms and mills to foreigners and left our people poor", note: 'That is half of {o:natpop}: a few at the top blamed, and the country\'s own industry put first. It says nothing about the vote.' },
      { text: 'Calder is one people with one will, and the movement is its voice', note: 'That speaks for the whole nation as one. It still says nothing about the vote.' },
      { text: 'When we take power, there will be no more elections to be bought by the rich, the other parties will be closed, and any paper that defends the bankers will be shut' }
    ] },

  /* ---------- Nazism ---------- */

  { id: 'n-nazi-pamphlet', use: 'teach', tier: 'clean', setting: 'borders', topic: 'a pamphlet about descent', name: 'The pamphlet of the old blood',
    text: "From a pamphlet of the Iron Banner in Dorn: 'There are the Dornlings of the old blood, and there are the others who came later, and they are not equal. Blood decides what a people can do. The old blood built every road and every church in Dorn, and it is higher than the later peoples. Dorn is for the old blood first, and the later peoples will serve it or be kept apart from it. There will be one party in Dorn, the party of the old blood.'",
    outcome: 'nazi', route: { D1: ['nation'], N1: ['blood'], N2: ['aside'] },
    cues: { D1: 'Dorn is for the old blood first',
            N1: ['There are the Dornlings of the old blood, and there are the others who came later, and they are not equal', 'it is higher than the later peoples'],
            N2: 'There will be one party in Dorn, the party of the old blood' } },

  { id: 'n-nazi-notice', use: 'check', tier: 'clean', setting: 'schooling', topic: 'a notice about two kinds of school',
    text: "A notice from the Spear Brotherhood in Vessany: 'Children of the true blood will be taught in the Brotherhood schools. Children of the later peoples will be taught apart, and given the work that suits their lower place. The Brotherhood asks every member to vote for it in the spring.'",
    outcome: 'nazi', route: { D1: ['nation'], N1: ['blood'], N2: ['keep'] },
    cues: { N1: 'Children of the later peoples will be taught apart, and given the work that suits their lower place' },
    segments: [
      { text: 'Children of the true blood will be taught in the Brotherhood schools', note: 'That says who goes to which school. It does not yet say one people is worth less.' },
      { text: 'Children of the later peoples will be taught apart, and given the work that suits their lower place' },
      { text: 'The Brotherhood asks every member to vote for it in the spring', note: 'That is about voting. It does not place one people below another.' }
    ],
    reason: { N1: 'The notice puts one people in a "lower place", with its own schooling and work: {cue:N1}.' } },

  /* ---------- The look-alike pair between the names that push the vote aside ---------- */

  { id: 'n-lk-parade-fasc', use: 'teach', tier: 'clean', setting: 'town', topic: 'a youth parade', name: 'The youth parade: one people',
    text: "At a youth parade in Marren, the Leader said: 'Every child of Marren marches today as one people with one will. The old parties are dissolved, and the papers that spoke for them are shut. Marren has one voice, and it is mine.'",
    outcome: 'fasc', route: { D1: ['nation'], N1: ['whole'], N2: ['aside'] },
    cues: { D1: 'Every child of Marren marches today as one people with one will',
            N1: 'Every child of Marren marches today as one people with one will',
            N2: 'The old parties are dissolved, and the papers that spoke for them are shut' } },

  { id: 'n-lk-parade-nazi', use: 'teach', tier: 'clean', setting: 'town', topic: 'a youth parade', name: 'The youth parade: the first blood',
    text: "At a youth parade in Marren, the Leader said: 'Every child of the first blood marches today, and the later peoples may watch from the side, as is fitting for a lower people. The old parties are dissolved, and the papers that spoke for them are shut. Marren has one voice, and it is mine.'",
    outcome: 'nazi', route: { D1: ['nation'], N1: ['blood'], N2: ['aside'] },
    cues: { D1: 'Every child of the first blood marches today',
            N1: 'Every child of the first blood marches today, and the later peoples may watch from the side, as is fitting for a lower people',
            N2: 'The old parties are dissolved, and the papers that spoke for them are shut' } },

  /* ---------- An exception: what every dictatorship does ---------- */

  { id: 'n-who-chk', use: 'check', tier: 'varied', setting: 'work', topic: 'shipyards signed over to a foreign firm',
    text: "From a leaflet: 'The ministers and the importers have signed our shipyards over to a foreign firm. Our ships should be built in our own yards, by our own people. Cast your vote for the Anchor list.'",
    outcome: 'natpop', route: { D1: ['nation'], N1: ['elitenation'], N2: ['keep'] },
    cues: { N1: ['The ministers and the importers have signed our shipyards over to a foreign firm', 'Our ships should be built in our own yards, by our own people'] },
    reason: { N1: 'The text sets the country\'s own people against a few at the top, the ministers and the importers, and wants its own industry put first: {cue:N1}. It speaks for one part of the country against another, not for everyone alike.' } },

  { id: 'n-elec-chk', use: 'check', tier: 'varied', setting: 'work', topic: 'a harvest address, no vote mentioned',
    text: "From a radio address by the head of the Harvest Board of Tolvar: 'Farmers of every region, we are one country, and this year's harvest is everyone's harvest. Bring in the grain and the whole nation eats.' The address did not mention elections, parties or critics at all.",
    outcome: 'nationalism', route: { D1: ['nation'], N1: ['whole'], N2: ['keep'] },
    cues: { N2: 'The address did not mention elections, parties or critics at all' },
    reason: { N2: 'The address asks for nothing to be taken away: {cue:N2}. With nothing asked, the vote and the critics stay in place.' } },

  /* ---------- The two cases worked from the top ---------- */

  { id: 'n-w-mislead', use: 'teach', tier: 'misleading', setting: 'town', topic: 'a torchlit stadium speech', name: 'The torchlit speech',
    text: "From a speech by the leader of the Iron Lantern party in the national stadium of Calder, before ten thousand people in black shirts carrying torches: 'We will be iron. We will march until the whole of Calder, farmers and clerks, rich and poor, stands as one. Nothing is more sacred than this nation. Our opponents say that we frighten them. Let them stand against us on the ninth of June, and let the voters judge between us.'",
    outcome: 'nationalism', route: { D1: ['nation'], N1: ['whole'], N2: ['keep'] },
    cues: { D1: 'Nothing is more sacred than this nation',
            N1: 'We will march until the whole of Calder, farmers and clerks, rich and poor, stands as one',
            N2: 'Let them stand against us on the ninth of June, and let the voters judge between us' } }
]);
