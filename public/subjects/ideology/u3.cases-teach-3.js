// Political Ideologies, Unit Three: cases shown inside cards, part three (the exceptions, the last name, the two cases the
// key's questions are checked on, and the two cases worked from the top). All texts are invented.
// A case a worked card shows carries no reason of its own: the card's steps hold it, so there is one copy.

FC.cases('ideology', 'u3', [

  /* ---------- An exception: a text that blames a few at the top and still ends the vote ---------- */
  { id: 'n-x-elitefasc', use: 'teach', tier: 'misleading', setting: 'money', topic: 'a broadcast about the bankers', name: 'The broadcast against the bankers', also: ['whole'],
    text: "From a broadcast by the leader of the Black Lantern movement in Calder: 'The bankers and ministers in the capital have sold this country's farms and mills to foreigners and left our people poor. Calder is one people with one will, and the movement is its voice. When we take power, there will be no more elections to be bought by the rich, the other parties will be closed, and any paper that defends the bankers will be shut.'",
    outcome: 'fasc', route: { D1: ['nation'], N1: ['elitenation'], N2: ['aside'] },
    cues: { D1: 'Calder is one people with one will, and the movement is its voice',
            N1: "The bankers and ministers in the capital have sold this country's farms and mills to foreigners",
            N2: 'there will be no more elections to be bought by the rich, the other parties will be closed' },
    segments: [
      { text: "The bankers and ministers in the capital have sold this country's farms and mills to foreigners and left our people poor", note: 'That is half of what you point to for {o:natpop}: a few at the top, and the country\'s own industry put first. It does not say what happens to the vote.' },
      { text: 'Calder is one people with one will, and the movement is its voice', note: 'That speaks for the whole nation as one. It is another answer to the first question, and it does not say what happens to the vote.' },
      { text: 'When we take power, there will be no more elections to be bought by the rich, the other parties will be closed, and any paper that defends the bankers will be shut' }
    ] },

  /* ---------- Nazism ---------- */
  { id: 'n-nazi-pamphlet', use: 'teach', tier: 'clean', setting: 'borders', topic: 'a pamphlet about descent', name: 'The pamphlet of the old blood',
    text: "From a pamphlet of the Iron Banner in Dorn: 'There are the Dornlings of the old blood, and there are the others who came later, and they are not equal. Blood decides what a people can do. The old blood built every road and every church in Dorn, and it is higher than the later peoples. Dorn is for the old blood first, and the later peoples will serve it or be kept apart from it. There will be one party in Dorn, the party of the old blood.'",
    outcome: 'nazi', route: { D1: ['nation'], N1: ['blood'], N2: ['aside'] },
    cues: { D1: 'Dorn is for the old blood first',
            N1: ['There are the Dornlings of the old blood, and there are the others who came later, and they are not equal', 'it is higher than the later peoples'],
            N2: 'There will be one party in Dorn, the party of the old blood' } },

  { id: 'n-nazi-flyer', use: 'teach', tier: 'clean', setting: 'housing', topic: 'a flyer about homes', name: 'The flyer about homes',
    text: "From a flyer of the League of the First Hearth in Marren: 'The people of the Hearth, of the first blood, are born to lead. The later peoples are born to follow. Homes in Marren will go to the Hearth first, and the later peoples will live apart, in their own streets. The League will ask for your vote in March.'",
    outcome: 'nazi', route: { D1: ['nation'], N1: ['blood'], N2: ['keep'] },
    cues: { D1: 'Homes in Marren will go to the Hearth first',
            N1: 'The people of the Hearth, of the first blood, are born to lead. The later peoples are born to follow',
            N2: 'The League will ask for your vote in March' },
    segments: [
      { text: 'The people of the Hearth, of the first blood, are born to lead. The later peoples are born to follow' },
      { text: 'Homes in Marren will go to the Hearth first, and the later peoples will live apart, in their own streets', note: 'That is what the League would do with its ranking. It is not the words that do the ranking.' },
      { text: 'The League will ask for your vote in March', note: 'That is about voting. It leaves the vote in place, and it does not change the answer to the first question.' }
    ] },

  { id: 'n-nazi-notice', use: 'check', tier: 'clean', setting: 'schooling', topic: 'a notice about two kinds of school',
    text: "A notice from the Spear Brotherhood in Vessany: 'Children of the true blood will be taught in the Brotherhood schools. Children of the later peoples will be taught apart, and given the work that suits their lower place. The Brotherhood asks every member to vote for it in the spring.'",
    outcome: 'nazi', route: { D1: ['nation'], N1: ['blood'], N2: ['keep'] },
    cues: { N1: 'Children of the later peoples will be taught apart, and given the work that suits their lower place' },
    segments: [
      { text: 'Children of the true blood will be taught in the Brotherhood schools', note: 'That says who goes to which school. It does not yet say that one people is worth more than another.' },
      { text: 'Children of the later peoples will be taught apart, and given the work that suits their lower place' },
      { text: 'The Brotherhood asks every member to vote for it in the spring', note: 'That is about voting. It is not the words that place one people below another.' }
    ],
    reason: { N1: 'The text puts the later peoples in a "lower place" and gives their children different schooling and different work for it: {cue:N1}. That is people sorted by blood into higher and lower, with the text\'s own people above.' } },

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
  { id: 'n-x-methods', use: 'teach', tier: 'misleading', setting: 'town', topic: 'a decree of the Grey Council', name: 'The decree of the Grey Council',
    text: "From a decree of the Grey Council of Merrow: 'All parties but the Council's are banned. Newspapers will print only what the Council's office approves. The Council keeps a list of those who speak against it, and its officers will call on them at night. The people of the old Merrow blood are higher than the settlers and will rule them. No settler may hold office.'",
    outcome: 'nazi', route: { D1: ['nation'], N1: ['blood'], N2: ['aside'] },
    cues: { D1: 'The people of the old Merrow blood are higher than the settlers and will rule them',
            N1: 'The people of the old Merrow blood are higher than the settlers and will rule them',
            N2: ["All parties but the Council's are banned", "Newspapers will print only what the Council's office approves"] },
    segments: [
      { text: "All parties but the Council's are banned. Newspapers will print only what the Council's office approves", note: 'These are things nearly every dictatorship does. They answer the second question, and they say nothing about whom the text speaks for.' },
      { text: 'The Council keeps a list of those who speak against it, and its officers will call on them at night', note: 'That frightens critics, which many dictatorships do. It does not rank any people above another.' },
      { text: 'The people of the old Merrow blood are higher than the settlers and will rule them. No settler may hold office' }
    ] },

  /* ---------- The cases the two question cards are checked on ---------- */
  { id: 'n-who-chk', use: 'check', tier: 'varied', setting: 'work', topic: 'shipyards signed over to a foreign firm',
    text: "From a leaflet: 'The ministers and the importers have signed our shipyards over to a foreign firm. Our ships should be built in our own yards, by our own people. Cast your vote for the Anchor list.'",
    outcome: 'natpop', route: { D1: ['nation'], N1: ['elitenation'], N2: ['keep'] },
    cues: { N1: ['The ministers and the importers have signed our shipyards over to a foreign firm', 'Our ships should be built in our own yards, by our own people'] },
    reason: { N1: 'The text sets the country\'s own people against a few at the top, the ministers and the importers, and wants the country\'s own industry put first: {cue:N1}. It speaks for a part of the country against another, not for everyone alike, and it ranks nobody by blood.' } },

  { id: 'n-elec-chk', use: 'check', tier: 'varied', setting: 'work', topic: 'a harvest address, no vote mentioned',
    text: "From a radio address by the head of the Harvest Board of Tolvar: 'Farmers of every region, we are one country, and this year's harvest is everyone's harvest. Bring in the grain and the whole nation eats.' The address did not mention elections, parties or critics at all.",
    outcome: 'nationalism', route: { D1: ['nation'], N1: ['whole'], N2: ['keep'] },
    cues: { N2: 'The address did not mention elections, parties or critics at all' },
    reason: { N2: 'The text asks for nothing to be taken away: {cue:N2}. The question is what the text would do about the vote and about its critics, and a text that does not ask for them to go has not asked for them to go.' } },

  /* ---------- The two cases worked from the top ---------- */
  { id: 'n-w-clean', use: 'teach', tier: 'clean', setting: 'housing', topic: 'old streets pulled down for towers', name: 'The old streets flyer',
    text: "From a flyer by the Homeland Table in Corvale: 'The planners and the big developers have been tearing down the old streets of Corvale to put up towers for people who live abroad. The people who have lived here for generations are being priced out. Corvale's old streets and Corvale's way of life should be kept for Corvale's people. Come to the town meeting on Thursday, and vote on the third.'",
    outcome: 'natpop', route: { D1: ['nation'], N1: ['elitenation'], N2: ['keep'] },
    cues: { D1: "Corvale's old streets and Corvale's way of life should be kept for Corvale's people",
            N1: ['The planners and the big developers have been tearing down the old streets of Corvale', "Corvale's old streets and Corvale's way of life should be kept for Corvale's people"],
            N2: 'Come to the town meeting on Thursday, and vote on the third' } },

  { id: 'n-w-mislead', use: 'teach', tier: 'misleading', setting: 'town', topic: 'a torchlit stadium speech', name: 'The torchlit speech',
    text: "From a speech by the leader of the Iron Lantern party in the national stadium of Calder, before ten thousand people in black shirts carrying torches: 'We will be iron. We will march until the whole of Calder, farmers and clerks, rich and poor, stands as one. Nothing is more sacred than this nation. Our opponents say that we frighten them. Let them stand against us on the ninth of June, and let the voters judge between us.'",
    outcome: 'nationalism', route: { D1: ['nation'], N1: ['whole'], N2: ['keep'] },
    cues: { D1: 'Nothing is more sacred than this nation',
            N1: 'We will march until the whole of Calder, farmers and clerks, rich and poor, stands as one',
            N2: 'Let them stand against us on the ninth of June, and let the voters judge between us' } }
]);
