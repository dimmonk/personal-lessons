// Political Ideologies, Unit Five: cases shown inside cards, part two (two look-alike pairs and the four exceptions where a
// fair start or the same-rules answer gives way). Field guide: see u5.cases-teach-1.js.
// Every text is invented. No person, party, country or event is real, and no text says what any real person believes.
// An exception case is a text that looks like one name and is another; also lists an answer it shows as well, which loses by the key's tie-break.

FC.cases('ideology', 'u5', [

  { id: 'i5-lk-cm-clib', use: 'teach', tier: 'clean', setting: 'health', topic: 'a clinic left to those who run it',
    text: "At a meeting in Marrow about the new clinic, one speaker said: 'Every person is free to choose their own doctor and to pay for their own care. The government should keep the courts open and see that contracts are kept, and otherwise leave the clinic to those who run it.'",
    outcome: 'clib', route: { D1: ['rights'], R1: ['leave'] },
    cues: { D1: 'Every person is free to choose their own doctor and to pay for their own care',
            R1: 'The government should keep the courts open and see that contracts are kept, and otherwise leave the clinic to those who run it' } },

  { id: 'i5-lk-cm-modlib', use: 'teach', tier: 'clean', setting: 'health', topic: 'a clinic paid for together',
    text: "At the same meeting in Marrow about the new clinic, another speaker said: 'Every person is free to choose their own doctor. But freedom to choose means little when there is no clinic to go to, so the government should pay for one in every district, and we should all pay for it through our taxes.'",
    outcome: 'modlib', route: { D1: ['rights'], R1: ['start'] },
    cues: { D1: 'Every person is free to choose their own doctor',
            R1: 'the government should pay for one in every district, and we should all pay for it through our taxes' } },

  { id: 'i5-lk-mi-modlib', use: 'teach', tier: 'clean', setting: 'housing', topic: 'building homes for the housing waitlist',
    text: "At a council meeting in Calderwick about the housing waitlist, a council member said: 'Every person is owed a roof and a fair start in life. The government should build more homes that people can afford to rent, and pay for help for anyone between jobs, and we should all pay for it together.'",
    outcome: 'modlib', route: { D1: ['rights'], R1: ['start'] },
    cues: { D1: 'Every person is owed a roof and a fair start in life',
            R1: 'The government should build more homes that people can afford to rent, and pay for help for anyone between jobs' } },

  { id: 'i5-lk-mi-idegal', use: 'teach', tier: 'clean', setting: 'housing', topic: 'the paperwork the housing waitlist asks for',
    text: "At the same Calderwick council meeting about the housing waitlist, another speaker said: 'The housing waitlist asks every applicant for the same three years of paperwork from one address. It treats everyone alike, and it leaves people who arrived from overseas this year at the back, year after year. Fair treatment means changing what the list asks for until they are housed as often as everyone else.'",
    outcome: 'idegal', route: { D1: ['rights'], R1: ['rules'] },
    cues: { D1: 'until they are housed as often as everyone else',
            R1: ['It treats everyone alike, and it leaves people who arrived from overseas this year at the back, year after year',
                 'Fair treatment means changing what the list asks for'] } },

  { id: 'i5-x-startrules', use: 'teach', tier: 'misleading', setting: 'health', topic: 'clinics with the same hours for every patient', name: 'The women’s health statement',
    also: ['start'],
    text: "From a statement by the Sennet Women's Health Group: 'Every woman is owed a fair start in life: a clinic in each district, free screening, and help when she is out of work, all paid for by everyone together. But every clinic keeps the same hours for every patient, nine to five on weekdays, and those hours leave behind women who work nights or care for others by day. Rules that treat every patient alike are not enough. Change the clinics' opening rules until women are seen as often as men.'",
    outcome: 'idegal', route: { D1: ['rights'], R1: ['rules'] },
    cues: { D1: 'Every woman is owed a fair start in life',
            R1: ['Rules that treat every patient alike are not enough', "Change the clinics' opening rules until women are seen as often as men"] },
    segments: [
      { text: 'Every woman is owed a fair start in life: a clinic in each district, free screening, and help when she is out of work, all paid for by everyone together', note: 'That asks the government for a fair start, and the text does say it. But it is not where the text ends.' },
      { text: 'But every clinic keeps the same hours for every patient, nine to five on weekdays, and those hours leave behind women who work nights or care for others by day', note: 'That says the same hours leave a group behind, but not yet what the text wants done about it.' },
      { text: 'Rules that treat every patient alike are not enough' },
      { text: "Change the clinics' opening rules until women are seen as often as men", note: 'That is what the statement asks to change. The words that say why the same rules are not enough come before it.' }
    ] },

  { id: 'i5-x-mill', use: 'teach', tier: 'misleading', setting: 'work', topic: 'a mill with two shifts cut, and a school paid for by its profits', name: 'The mill hands’ leaflet',
    also: ['rights'],
    text: "From a leaflet by the Pell Hill mill hands: 'Everyone is owed a fair start: a school, a doctor, and help when the work runs out. The owners of the mill have cut two shifts to save money, and the mill hands pay for it. The mill hands and the owners do not want the same things, and we stand with the mill hands. The mill can stay in its owners' hands. Tax its profits to pay for the school and the clinic.'",
    outcome: 'socdem', route: { D1: ['class'], C1: ['keep'], C2: ['none'] },
    cues: { D1: 'The mill hands and the owners do not want the same things, and we stand with the mill hands',
            C1: "The mill can stay in its owners' hands. Tax its profits to pay for the school and the clinic",
            C2: 'Tax its profits to pay for the school and the clinic' },
    segments: [
      { text: 'Everyone is owed a fair start: a school, a doctor, and help when the work runs out', note: 'That says what everyone is owed, and the text does say it. But it is not where the text ends.' },
      { text: 'The owners of the mill have cut two shifts to save money, and the mill hands pay for it', note: 'That names the owners and the mill hands, but not yet whose side the text takes.' },
      { text: 'The mill hands and the owners do not want the same things, and we stand with the mill hands' },
      { text: "The mill can stay in its owners' hands. Tax its profits to pay for the school and the clinic", note: 'That says what the leaflet asks for. It does not settle the first question.' }
    ] },

  { id: 'i5-x-parish', use: 'teach', tier: 'misleading', setting: 'faith', topic: 'a rector’s column on freedom and the church', name: 'The rector’s column',
    also: ['rights'],
    text: "From the rector's column in the Ashby parish newsletter: 'Each person should be free to worship, to speak and to keep what they earn, and the government should stay out of our lives. But freedom without the old ways is thin. The church, the Sunday table and the harvest supper are what hold a free village together, and they should guide us. Let us keep them, and let any change come slowly.'",
    outcome: 'conserv', route: { D1: ['tradition'], T1: ['keep'] },
    cues: { D1: 'The church, the Sunday table and the harvest supper are what hold a free village together, and they should guide us',
            T1: 'Let us keep them, and let any change come slowly' },
    segments: [
      { text: 'Each person should be free to worship, to speak and to keep what they earn, and the government should stay out of our lives', note: 'That asks for each person’s freedom and a government that stays out, and the text does say it. But the text goes on to say freedom is not enough on its own.' },
      { text: 'But freedom without the old ways is thin', note: 'That is the turn of the text, but it has not yet said what freedom needs. The next sentence does.' },
      { text: 'The church, the Sunday table and the harvest supper are what hold a free village together, and they should guide us' },
      { text: 'Let us keep them, and let any change come slowly', note: 'That says to keep them and change slowly. It does not settle the first question.' }
    ] },

  { id: 'i5-x-onepeople', use: 'teach', tier: 'misleading', setting: 'borders', topic: 'schools and clinics for our own people first', name: 'The speech about one people',
    also: ['rights'],
    text: "From a speech by a candidate in the Harran region: 'Every person is owed a school and a doctor, and the government should pay for both. But we are one people with one past and one future, and what divides us is smaller than what holds us together. Our schools and our clinics are for our own people first, before any stranger's claim. Put your trust in us at the ballot box in May, and judge us there.'",
    outcome: 'nationalism', route: { D1: ['nation'], N1: ['whole'], N2: ['keep'] },
    cues: { D1: "Our schools and our clinics are for our own people first, before any stranger's claim",
            N1: 'we are one people with one past and one future, and what divides us is smaller than what holds us together',
            N2: 'Put your trust in us at the ballot box in May, and judge us there' },
    segments: [
      { text: 'Every person is owed a school and a doctor, and the government should pay for both', note: 'That says what every person is owed, and the text does say it. But it is not where the text ends.' },
      { text: 'But we are one people with one past and one future, and what divides us is smaller than what holds us together', note: 'That says the text speaks for one people as one, but not yet that it puts them first.' },
      { text: "Our schools and our clinics are for our own people first, before any stranger's claim" },
      { text: 'Put your trust in us at the ballot box in May, and judge us there', note: 'That leaves the vote in place. It does not settle the first question.' }
    ] }
]);
