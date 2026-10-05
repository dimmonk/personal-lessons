// Political Ideologies, Unit Five: cases shown inside cards, part two (the look-alike pairs and the exceptions where this branch
// gives way). Every text is invented. Field guide: see u5.cases-teach-1.js.
// An exception case is a text that looks like one name and is another. also lists an answer the case shows as well as its own,
// which loses to its own by a tie-break in the key. The three cross-branch exceptions carry a whole route, because the name they
// end on belongs to another branch of the key.

FC.cases('ideology', 'u5', [

  /* ---------- Look-alike: protect and stay out, or protect and give (one clinic, two speakers) ---------- */
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

  /* ---------- Look-alike: a fair start for everyone, or rules said to hold a group back (one housing list) ---------- */
  { id: 'i5-lk-mi-modlib', use: 'teach', tier: 'clean', setting: 'housing', topic: 'building homes for the housing list',
    text: "At a council meeting in Calderwick about the housing list, a councillor said: 'Every person is owed a roof and a fair start in life. The government should build more homes that people can afford to rent, and pay for help for anyone between jobs, and we should all pay for it together.'",
    outcome: 'modlib', route: { D1: ['rights'], R1: ['start'] },
    cues: { D1: 'Every person is owed a roof and a fair start in life',
            R1: 'The government should build more homes that people can afford to rent, and pay for help for anyone between jobs' } },

  { id: 'i5-lk-mi-idegal', use: 'teach', tier: 'clean', setting: 'housing', topic: 'the paperwork the housing list asks for',
    text: "At the same Calderwick council meeting about the housing list, another speaker said: 'The housing list asks every applicant for the same three years of paperwork from one address. It treats everyone alike, and it leaves people who arrived from overseas this year at the back, year after year. Fair treatment means changing what the list asks for until they are housed as often as everyone else.'",
    outcome: 'idegal', route: { D1: ['rights'], R1: ['rules'] },
    cues: { D1: 'until they are housed as often as everyone else',
            R1: ['It treats everyone alike, and it leaves people who arrived from overseas this year at the back, year after year',
                 'Fair treatment means changing what the list asks for'] } },

  /* ---------- Look-alike: the same rules for everyone are enough, or are not (one entry test) ---------- */
  { id: 'i5-lk-ci-clib', use: 'teach', tier: 'clean', setting: 'schooling', topic: 'an entry test left as it is',
    text: "At a school board meeting in Wren Valley, a member said: 'The entry test is the same paper on the same day for every child, and that is exactly as it should be. Each child is free to sit it. The government's job is to keep the test honest and the room fair, and then to leave the school alone.'",
    outcome: 'clib', route: { D1: ['rights'], R1: ['leave'] },
    cues: { D1: 'Each child is free to sit it',
            R1: "The government's job is to keep the test honest and the room fair, and then to leave the school alone" } },

  { id: 'i5-lk-ci-idegal', use: 'teach', tier: 'clean', setting: 'schooling', topic: 'an entry test shutting a group out',
    text: "At the same Wren Valley board meeting, another member said: 'The entry test is the same paper on the same day for every child, and that is the trouble. A child who cannot sit for three hours is shut out by a test that treats everyone alike. We ask the board to change the test until results come out fair for those children too. Nobody should be placed above anybody.'",
    outcome: 'idegal', route: { D1: ['rights'], R1: ['rules'] },
    cues: { D1: 'Nobody should be placed above anybody',
            R1: ['A child who cannot sit for three hours is shut out by a test that treats everyone alike',
                 'We ask the board to change the test until results come out fair for those children too'] } },

  /* ---------- Exceptions: a fair start, and rules that leave a group behind (this branch's own tie-break) ---------- */
  // Looks like a fair start for everyone; is rules said to hold a group back (the fair start shows too, and gives way).
  { id: 'i5-x-startrules', use: 'teach', tier: 'misleading', setting: 'health', topic: 'clinics with the same hours for every patient', name: 'The women’s health statement',
    also: ['start'],
    text: "From a statement by the Sennet Women's Health Group: 'Every woman is owed a fair start in life: a clinic in each district, free screening, and help when she is out of work, all paid for by everyone together. But every clinic keeps the same hours for every patient, nine to five on weekdays, and those hours leave behind women who work nights or care for others by day. Rules that treat every patient alike are not enough. Change the clinics' opening rules until women are seen as often as men.'",
    outcome: 'idegal', route: { D1: ['rights'], R1: ['rules'] },
    cues: { D1: 'Every woman is owed a fair start in life',
            R1: ['Rules that treat every patient alike are not enough', "Change the clinics' opening rules until women are seen as often as men"] },
    segments: [
      { text: 'Every woman is owed a fair start in life: a clinic in each district, free screening, and help when she is out of work, all paid for by everyone together', note: 'That asks the government to give a fair start, and the text does say it. It is the sentence that makes the text look like one that asks for a fair start and nothing more. It is not where the text ends.' },
      { text: 'But every clinic keeps the same hours for every patient, nine to five on weekdays, and those hours leave behind women who work nights or care for others by day', note: 'That says a rule that treats every patient alike leaves a group behind. It is half of what settles it. The other half is what the text asks to be done about it.' },
      { text: 'Rules that treat every patient alike are not enough' },
      { text: "Change the clinics' opening rules until women are seen as often as men", note: 'That says what the statement asks to be changed. The words that say why the same rules for everyone are not enough come before it.' }
    ] },

  /* ---------- Exceptions: the gate's decisions for this answer (rights gives way to working people, old ways, one people) ---------- */
  // Looks like a fair start for everyone; is working people against owners (rights shows too, and gives way).
  { id: 'i5-x-mill', use: 'teach', tier: 'misleading', setting: 'work', topic: 'a mill with two shifts cut, and a school paid for by its profits', name: 'The mill hands’ leaflet',
    also: ['rights'],
    text: "From a leaflet by the Pell Hill mill hands: 'Everyone is owed a fair start: a school, a doctor, and help when the work runs out. The owners of the mill have cut two shifts to save money, and the mill hands pay for it. The mill hands and the owners do not want the same things, and we stand with the mill hands. The mill can stay in its owners' hands. Tax its profits to pay for the school and the clinic.'",
    outcome: 'socdem', route: { D1: ['class'], C1: ['keep'], C2: ['none'] },
    cues: { D1: 'The mill hands and the owners do not want the same things, and we stand with the mill hands',
            C1: "The mill can stay in its owners' hands. Tax its profits to pay for the school and the clinic",
            C2: 'Tax its profits to pay for the school and the clinic' },
    segments: [
      { text: 'Everyone is owed a fair start: a school, a doctor, and help when the work runs out', note: 'That says what every person is owed, and the text does say it. It is the sentence that makes the text look like one about what everyone is owed. It is not where the text ends.' },
      { text: 'The owners of the mill have cut two shifts to save money, and the mill hands pay for it', note: 'That names the owners and the mill hands, and what the cut did to the hands. It is half of what settles it. The other half is whose side the text takes.' },
      { text: 'The mill hands and the owners do not want the same things, and we stand with the mill hands' },
      { text: "The mill can stay in its owners' hands. Tax its profits to pay for the school and the clinic", note: 'That says what the leaflet asks for. It is not what settles the first question.' }
    ] },

  // Looks like each person's freedom; is old ways (rights shows too, and gives way).
  { id: 'i5-x-parish', use: 'teach', tier: 'misleading', setting: 'faith', topic: 'a rector’s column on freedom and the church', name: 'The rector’s column',
    also: ['rights'],
    text: "From the rector's column in the Ashby parish magazine: 'Each person should be free to worship, to speak and to keep what they earn, and the government should stay out of our lives. But freedom without the old ways is thin. The church, the Sunday table and the harvest supper are what hold a free village together, and they should guide us. Let us keep them, and let any change come slowly.'",
    outcome: 'conserv', route: { D1: ['tradition'], T1: ['keep'] },
    cues: { D1: 'The church, the Sunday table and the harvest supper are what hold a free village together, and they should guide us',
            T1: 'Let us keep them, and let any change come slowly' },
    segments: [
      { text: 'Each person should be free to worship, to speak and to keep what they earn, and the government should stay out of our lives', note: 'That asks for each person’s freedom and a government that stays out, and the text does say it. It is the sentence that makes the text look like one that wants each person left free. But the text goes on to say that this is not enough on its own.' },
      { text: 'But freedom without the old ways is thin', note: 'That is the turn of the text. It says freedom needs something more, and it has not yet said what. The words that say it are in the sentence after.' },
      { text: 'The church, the Sunday table and the harvest supper are what hold a free village together, and they should guide us' },
      { text: 'Let us keep them, and let any change come slowly', note: 'That says the old ways are to be kept. It is not what settles the first question.' }
    ] },

  // Looks like what every person is owed; is one people put first (rights shows too, and gives way).
  { id: 'i5-x-onepeople', use: 'teach', tier: 'misleading', setting: 'borders', topic: 'schools and clinics for our own people first', name: 'The speech about one people',
    also: ['rights'],
    text: "From a speech by a candidate in the Harran region: 'Every person is owed a school and a doctor, and the government should pay for both. But we are one people with one past and one future, and what divides us is smaller than what holds us together. Our schools and our clinics are for our own people first, before any stranger's claim. Put your trust in us at the ballot box in May, and judge us there.'",
    outcome: 'nationalism', route: { D1: ['nation'], N1: ['whole'], N2: ['keep'] },
    cues: { D1: "Our schools and our clinics are for our own people first, before any stranger's claim",
            N1: 'we are one people with one past and one future, and what divides us is smaller than what holds us together',
            N2: 'Put your trust in us at the ballot box in May, and judge us there' },
    segments: [
      { text: 'Every person is owed a school and a doctor, and the government should pay for both', note: 'That says what every person is owed, and the text does say it. It is the sentence that makes the text look like one about what everyone is owed. It is not where the text ends.' },
      { text: 'But we are one people with one past and one future, and what divides us is smaller than what holds us together', note: 'That says the text speaks for one people as one. It is half of what settles it. The other half is that the text puts that people first.' },
      { text: "Our schools and our clinics are for our own people first, before any stranger's claim" },
      { text: 'Put your trust in us at the ballot box in May, and judge us there', note: 'That leaves the vote in place. It is not what settles the first question.' }
    ] }
]);
