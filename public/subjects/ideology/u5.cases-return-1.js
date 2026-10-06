// Political Ideologies, Unit Five: fresh cases for later days, one for each name. A due name returns as a case the learner has not
// seen, beside a case of the name they most often take it for.
// Every text is invented. No person, party, country or event is real, and no text says what any real person believes.

FC.cases('ideology', 'u5', [
  { id: 'i5-ret-clib-3', use: 'return', tier: 'misleading', setting: 'health', topic: 'a clinic owner who will not change the opening hours', echo: 'i5-x-startrules',
    text: "From a talk by a clinic owner: 'Some say the clinic's hours leave some people out. Every clinic has hours, and the same hours for everyone is what fair means. Each person is free to come, and free to go elsewhere. The government's job is to keep the courts open and the doors honest, and not to change my hours.'",
    outcome: 'clib', route: { D1: ['rights'], R1: ['leave'] },
    cues: { D1: 'Each person is free to come, and free to go elsewhere',
            R1: "The government's job is to keep the courts open and the doors honest, and not to change my hours" },
    reason: { D1: 'The text puts first what each person is free to do: {cue:D1}.',
              R1: 'The text hears the complaint that the hours leave people out, and says the same hours for everyone are fair: {cue:R1}. The government is to keep to the courts and honest dealing.' },
    not: { outcome: 'idegal', why: 'The women’s health statement was also about clinic hours that are the same for every patient. That statement said the hours leave a group behind and asked for them to change. This text says the same hours for everyone are fair, and asks for no change.' } },

  { id: 'i5-ret-modlib-1', use: 'return', tier: 'clean', setting: 'schooling', topic: 'a library in every town',
    text: "From a letter by the Garrow Fair Start Group: 'Each of us has the right to speak and to read what we choose. A right to read means little with no book within reach. We ask the government to pay for a library in every town and a computer for every child who has none, and we will all pay for it together.'",
    outcome: 'modlib', route: { D1: ['rights'], R1: ['start'] },
    cues: { D1: 'Each of us has the right to speak and to read what we choose',
            R1: 'We ask the government to pay for a library in every town and a computer for every child who has none' },
    reason: { D1: 'The text puts first what each person has a right to do: {cue:D1}.',
              R1: 'The government is to pay for libraries and computers that everyone can use: {cue:R1}.' },
    not: { outcome: 'clib', why: 'The text begins with rights, as {o:clib} does. It then asks the government to pay for libraries and computers, which {o:clib} would not.' } },

  { id: 'i5-ret-idegal-3', use: 'return', tier: 'misleading', setting: 'town', topic: 'a trader’s permit day held in the city', echo: 'i5-clib-meet',
    text: "From a statement by the Southgate hill traders: 'Every trader needs the same permit, bought at one office on one day, and nobody should be licensed differently. But the office is in the city, and traders from the hill villages cannot get there on the day, so almost none of them hold a permit. Treating everyone alike has left us out. Hold the permit day in the villages until traders from the hills hold permits as often as anyone.'",
    outcome: 'idegal', route: { D1: ['rights'], R1: ['rules'] },
    cues: { D1: 'until traders from the hills hold permits as often as anyone',
            R1: ['Treating everyone alike has left us out', 'Hold the permit day in the villages'] },
    reason: { D1: 'The text wants fair treatment for the hill traders, and says when that will be so: {cue:D1}.',
              R1: 'A permit that is the same for everyone is said to have left the hill traders out, and the text asks for the permit day to move: {cue:R1}.' },
    not: { outcome: 'clib', why: 'The street-music petition also dealt with a permit. That petition said nobody should need one, and asked the council to keep out. This text accepts the permit, says it leaves one group out, and asks for the way it is given to change.' } }
]);
