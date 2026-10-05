// Political Ideologies, Unit Three: cases shown inside cards, part two (the first look-alike pair, then the two names that set
// ordinary people against a few at the top, and the look-alike pairs between them). All texts are invented.

FC.cases('ideology', 'u3', [

  /* ---------- The first look-alike pair: one story, two names ---------- */
  { id: 'n-lk-hospital-nat', use: 'teach', tier: 'clean', setting: 'health', topic: 'a hospital opening', name: 'The hospital opening: the budget debated',
    text: "At the opening of the new national hospital in Aldmere, the prime minister said: 'Every patient who comes through these doors, from every town and every trade, is one of us, and this country looks after its own. The health budget will be debated in parliament next month, and the opposition will have its say on every line of it.'",
    outcome: 'nationalism', route: { D1: ['nation'], N1: ['whole'], N2: ['keep'] },
    cues: { D1: 'this country looks after its own',
            N1: 'Every patient who comes through these doors, from every town and every trade, is one of us',
            N2: 'The health budget will be debated in parliament next month, and the opposition will have its say on every line of it' } },

  { id: 'n-lk-hospital-fasc', use: 'teach', tier: 'clean', setting: 'health', topic: 'a hospital opening', name: 'The hospital opening: critics closed',
    text: "At the opening of the new national hospital in Aldmere, the Leader said: 'Every patient who comes through these doors, from every town and every trade, is one of us, and this country looks after its own. The health budget is mine alone to decide. Doctors and papers that question the Leader's hospitals will be closed, and the opposition has no more place here.'",
    outcome: 'fasc', route: { D1: ['nation'], N1: ['whole'], N2: ['aside'] },
    cues: { D1: 'this country looks after its own',
            N1: 'Every patient who comes through these doors, from every town and every trade, is one of us',
            N2: "Doctors and papers that question the Leader's hospitals will be closed, and the opposition has no more place here" } },

  /* ---------- National populism ---------- */
  { id: 'n-natpop-steel', use: 'teach', tier: 'clean', setting: 'work', topic: 'a steelworks sold abroad', name: 'The steelworks leaflet',
    text: "A leaflet from a movement in Brevia: 'The people who built this country's steelworks have been told by a handful of ministers and bankers that the works must be sold to a foreign firm. Nobody asked us. A Brevian steelworks should belong to Brevia, and its jobs should be Brevian jobs. Vote for us in March and we will take back what they sold.'",
    outcome: 'natpop', route: { D1: ['nation'], N1: ['elitenation'], N2: ['keep'] },
    cues: { D1: 'A Brevian steelworks should belong to Brevia',
            N1: ["The people who built this country's steelworks have been told by a handful of ministers and bankers that the works must be sold to a foreign firm", 'A Brevian steelworks should belong to Brevia, and its jobs should be Brevian jobs'],
            N2: 'Vote for us in March and we will take back what they sold' } },

  { id: 'n-natpop-grain', use: 'teach', tier: 'clean', setting: 'borders', topic: 'a tariff on imported grain', name: 'The grain newsletter',
    text: "From a farmers' newsletter in Calder: 'The ministers and the importers who profit from cheap foreign grain have let our farms go under. Calder's farms should feed Calder. Put an honest tariff on foreign grain, and vote for us to do it.'",
    outcome: 'natpop', route: { D1: ['nation'], N1: ['elitenation'], N2: ['keep'] },
    cues: { D1: "Calder's farms should feed Calder",
            N1: ['The ministers and the importers who profit from cheap foreign grain have let our farms go under', "Calder's farms should feed Calder"],
            N2: 'vote for us to do it' },
    segments: [
      { text: 'The ministers and the importers who profit from cheap foreign grain have let our farms go under', note: 'That names the few at the top. It is half of what you point to. The other half is what the text wants for the country.' },
      { text: "Calder's farms should feed Calder" },
      { text: 'vote for us to do it', note: 'That is how the movement says it will get what it wants: by a vote. It does not say what the country should have.' }
    ] },

  { id: 'n-natpop-radio', use: 'check', tier: 'clean', setting: 'town', topic: 'a national broadcaster',
    text: "From a leaflet of the Lantern list: 'The editors and executives of the national broadcaster, who answer to nobody, fill the evenings with shows made abroad. Our stories should be told in our own language on our own screens. Vote Lantern in May and we will give the broadcaster back to its viewers.'",
    outcome: 'natpop', route: { D1: ['nation'], N1: ['elitenation'], N2: ['keep'] },
    cues: { N1: ['The editors and executives of the national broadcaster, who answer to nobody', 'Our stories should be told in our own language on our own screens'] },
    reason: { N1: 'The text sets the country\'s viewers against a few at the top, the executives "who answer to nobody", and it wants the country\'s own culture put first: {cue:N1}. That is more than speaking for everyone, and more than anger at those at the top.' } },

  /* ---------- Populism with nothing attached ---------- */
  { id: 'n-pop-podcast', use: 'teach', tier: 'clean', setting: 'money', topic: 'a podcast about bankers', name: 'The podcast',
    text: "From a podcast: 'The people at the top, the bankers, the ministers, the ones who always land on their feet, have been playing the rest of us for years. We pay and they collect. This is the moment for ordinary people to throw them out. On polling day, every ordinary person in Tolvar has the power to do it.'",
    outcome: 'pop', route: { D1: ['nation'], N1: ['eliteonly'], N2: ['keep'] },
    cues: { D1: 'every ordinary person in Tolvar',
            N1: ['The people at the top, the bankers, the ministers, the ones who always land on their feet, have been playing the rest of us for years', 'This is the moment for ordinary people to throw them out'],
            N2: 'On polling day, every ordinary person in Tolvar has the power to do it' } },

  { id: 'n-pop-ward', use: 'teach', tier: 'clean', setting: 'health', topic: 'a letter about hospital directors', name: 'The letter about the wards',
    text: "A letter to a newspaper: 'The directors at the top of the health service have gone on, year after year, paying themselves from the public purse while the people on the wards wait. It is the ordinary patients of this country who pay. The next time the ballot comes round, vote the lot of them out.'",
    outcome: 'pop', route: { D1: ['nation'], N1: ['eliteonly'], N2: ['keep'] },
    cues: { D1: 'the ordinary patients of this country',
            N1: 'The directors at the top of the health service have gone on, year after year, paying themselves from the public purse while the people on the wards wait',
            N2: 'vote the lot of them out' },
    segments: [
      { text: 'The directors at the top of the health service have gone on, year after year, paying themselves from the public purse while the people on the wards wait' },
      { text: 'It is the ordinary patients of this country who pay', note: 'That names the ordinary people who pay. It is half of what you point to. The other half is the few at the top.' },
      { text: 'vote the lot of them out', note: 'That says what to do about it, by voting. The words that show who is at the top are in the first sentence.' }
    ] },

  { id: 'n-pop-forum', use: 'check', tier: 'clean', setting: 'housing', topic: 'a forum post about house prices',
    text: "A post on a national forum: 'The ministers and their friends in the building trade have let the price of homes run away. Ordinary people of this country pay and they pocket. Vote every one of them out in May.'",
    outcome: 'pop', route: { D1: ['nation'], N1: ['eliteonly'], N2: ['keep'] },
    cues: { N1: ['The ministers and their friends in the building trade have let the price of homes run away', 'Ordinary people of this country pay and they pocket'] },
    reason: { N1: 'The text sets ordinary people against a few at the top, the ministers and their friends, and stops there: {cue:N1}. It says nothing about the country\'s borders, culture or industry, and nothing about ranking anyone.' } },

  /* ---------- Look-alike pairs between the names that set people against a few at the top ---------- */
  { id: 'n-lk-rail-nat', use: 'teach', tier: 'clean', setting: 'work', topic: 'a rail line closing', name: 'The rail closure: one country',
    text: "The transport minister told parliament: 'The northern line will close, and I know what it means for the north. We are one country, and the south will help carry what the north loses. The closure can be challenged in the courts and at the ballot box, and I expect the opposition to do both.'",
    outcome: 'nationalism', route: { D1: ['nation'], N1: ['whole'], N2: ['keep'] },
    cues: { D1: 'We are one country, and the south will help carry what the north loses',
            N1: 'We are one country, and the south will help carry what the north loses',
            N2: 'The closure can be challenged in the courts and at the ballot box, and I expect the opposition to do both' } },

  { id: 'n-lk-rail-natpop', use: 'teach', tier: 'clean', setting: 'work', topic: 'a rail line closing', name: 'The rail closure: the capital',
    text: "A campaign leaflet: 'The ministers in the capital are closing the northern line, and none of them has ever ridden it. Our railways should be run for our own people, with our own engineers and our own steel. Vote us in on the third and the line will reopen.'",
    outcome: 'natpop', route: { D1: ['nation'], N1: ['elitenation'], N2: ['keep'] },
    cues: { D1: 'Our railways should be run for our own people, with our own engineers and our own steel',
            N1: ['The ministers in the capital are closing the northern line, and none of them has ever ridden it', 'Our railways should be run for our own people, with our own engineers and our own steel'],
            N2: 'Vote us in on the third and the line will reopen' } },

  { id: 'n-lk-bank-natpop', use: 'teach', tier: 'clean', setting: 'money', topic: 'a bank rescue and a foreign buyer', name: 'The bank rescue: the Homeland List',
    text: "From a speech by Joran Pell of the Homeland List: 'The ministers and the bankers they dine with have spent our taxes rescuing a bank, and it has been sold to a foreign group. Our savings should stay in our own banks, run for our own people. Vote Homeland List on Sunday and we will take them back.'",
    outcome: 'natpop', route: { D1: ['nation'], N1: ['elitenation'], N2: ['keep'] },
    cues: { D1: 'Our savings should stay in our own banks, run for our own people',
            N1: ['The ministers and the bankers they dine with have spent our taxes rescuing a bank', 'Our savings should stay in our own banks, run for our own people'],
            N2: 'Vote Homeland List on Sunday and we will take them back' } },

  { id: 'n-lk-bank-pop', use: 'teach', tier: 'clean', setting: 'money', topic: 'a bank rescue and nobody paying', name: 'The bank rescue: the People\'s List',
    text: "From a speech by Joran Pell of the People's List: 'The ministers and the bankers they dine with have spent our taxes rescuing a bank, and not one of them has paid a price. They rescue each other and bill the rest of us. Vote People's List on Sunday and we will throw them out.'",
    outcome: 'pop', route: { D1: ['nation'], N1: ['eliteonly'], N2: ['keep'] },
    cues: { D1: 'They rescue each other and bill the rest of us',
            N1: ['The ministers and the bankers they dine with have spent our taxes rescuing a bank', 'They rescue each other and bill the rest of us'],
            N2: "Vote People's List on Sunday and we will throw them out" } }
]);
