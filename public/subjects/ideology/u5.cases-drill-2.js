// Political Ideologies, Unit Five: drill cases, second stage (the whole route, clean). Every question is asked, starting with the first
// question, so every case carries marked words and a reason for it too.
// Every text is invented. No person, party, country or event is real, and no text says what any real person believes.

FC.cases('ideology', 'u5', [
  { id: 'i5-r-clib1', use: 'drill', tier: 'clean', setting: 'work', topic: 'fares and the number of taxis',
    text: "From a petition by the Quarry Hill taxi drivers: 'Each driver is free to set a fare and each passenger is free to choose a driver. The council's proper jobs are the roads and the courts. It should not set fares, cap the number of cabs or choose who may drive.'",
    outcome: 'clib', route: { D1: ['rights'], R1: ['leave'] },
    cues: { D1: 'Each driver is free to set a fare and each passenger is free to choose a driver',
            R1: "The council's proper jobs are the roads and the courts. It should not set fares, cap the number of cabs or choose who may drive" },
    reason: { D1: 'The text puts first what each driver and each passenger is free to do: {cue:D1}. It sets no side against another.',
              R1: 'The council is to keep to the roads and the courts: {cue:R1}. Nothing is to be given to anyone.' },
    not: { outcome: 'modlib', why: 'The text asks the council to give nothing. A text that asked the government to give everyone a fair start would be {o:modlib}.' } },

  { id: 'i5-r-modlib1', use: 'drill', tier: 'clean', setting: 'health', topic: 'a dentist and an eye test for every child',
    text: "From a leaflet by the Brindle Valley Fair Start Group: 'Each person has the right to speak and to choose how to live, and the government must protect that. A child with a toothache cannot learn or play. We ask the government to pay for a dentist and an eye test for every child, and we will all pay for it together.'",
    outcome: 'modlib', route: { D1: ['rights'], R1: ['start'] },
    cues: { D1: 'Each person has the right to speak and to choose how to live, and the government must protect that',
            R1: 'We ask the government to pay for a dentist and an eye test for every child, and we will all pay for it together' },
    reason: { D1: 'The text puts first what each person has a right to do: {cue:D1}.',
              R1: 'The government is to pay for care that every child can use, and everyone is to pay for it: {cue:R1}.' },
    not: { outcome: 'clib', why: 'The text asks the government to protect rights, as {o:clib} does, and then to pay for a dentist and an eye test for every child, which {o:clib} would not.' } },

  { id: 'i5-r-idegal1', use: 'drill', tier: 'clean', setting: 'town', topic: 'a polling station up a flight of stairs',
    text: "From a letter by the Hythe Disabled Voters' Group: 'The polling station in the old hall is the same for every voter, and it is up a flight of stairs. It treats everyone alike, and it keeps voters who use wheelchairs from voting. We ask the council to change where the vote is held until voters in wheelchairs vote as often as anyone. Nobody is asking to be placed above anyone.'",
    outcome: 'idegal', route: { D1: ['rights'], R1: ['rules'] },
    cues: { D1: 'Nobody is asking to be placed above anyone',
            R1: ['It treats everyone alike, and it keeps voters who use wheelchairs from voting', 'We ask the council to change where the vote is held'] },
    reason: { D1: 'The text wants fair treatment for one group and wants no one placed above another: {cue:D1}.',
              R1: 'A polling station that treats every voter alike is said to keep a group from voting, and the text asks for it to change: {cue:R1}.' },
    not: { outcome: 'clib', why: 'The text names one polling station for every voter, as {o:clib} would be content with. But the text says that this has kept a group from voting, and asks for it to change.' } }
]);
