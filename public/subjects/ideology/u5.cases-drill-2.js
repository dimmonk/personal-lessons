// Political Ideologies, Unit Five: drill cases for the third stage (finish: the first answer is shown, the learner finishes the
// route and names it) and the first group of the fourth stage (the whole route, no help). Every case carries marked words and a
// reason for every question it can be asked, starting with the first question of the key. All texts are invented.

FC.cases('ideology', 'u5', [

  /* ---------- Stage three: finish the route (clean, then varied) ---------- */
  { id: 'i5-f-clib', use: 'drill', tier: 'clean', setting: 'schooling', topic: 'teaching children at home',
    text: "From a letter by the Elm Row Home Teachers: 'Every parent is free to teach their own children at home, and every child is free to learn what the parents choose. The government should keep the courts open and punish real neglect, and otherwise leave home teaching to the people who do it.'",
    outcome: 'clib', route: { D1: ['rights'], R1: ['leave'] },
    cues: { D1: 'Every parent is free to teach their own children at home',
            R1: 'The government should keep the courts open and punish real neglect, and otherwise leave home teaching to the people who do it' },
    reason: { D1: 'The text puts first what every parent is free to do: {cue:D1}.',
              R1: 'The government is to keep the courts open, punish neglect and leave the rest alone: {cue:R1}.' },
    not: { outcome: 'modlib', why: 'The text talks of schooling, but it asks the government to give nothing. A text that asked it to pay for a school for every child would be {o:modlib}.' } },

  { id: 'i5-f-modlib', use: 'drill', tier: 'clean', setting: 'town', topic: 'a bus to every village',
    text: "From a letter by Council Member Rhona Pike: 'Every person is free to go where they like, and the government must protect that. But a person with no bus can go nowhere. We ask the government to pay for a bus to every village, so that everyone has somewhere to start from, and we will all pay for it together.'",
    outcome: 'modlib', route: { D1: ['rights'], R1: ['start'] },
    cues: { D1: 'Every person is free to go where they like, and the government must protect that',
            R1: 'We ask the government to pay for a bus to every village, so that everyone has somewhere to start from' },
    reason: { D1: 'The text puts first what every person is free to do: {cue:D1}.',
              R1: 'The government is to pay for something that reaches everyone: {cue:R1}.' },
    not: { outcome: 'clib', why: 'The text begins by asking the government to protect a freedom, as {o:clib} does. It then asks the government to pay for a bus, which {o:clib} would not.' } },

  { id: 'i5-f-idegal', use: 'drill', tier: 'clean', setting: 'housing', topic: 'apartments rented to whoever lines up first',
    text: "From a report by the Linden Disability Forum: 'The housing authority rents every apartment to whoever lines up at its office at nine on Monday. The rule is the same for everyone, and it leaves behind people who cannot stand in a line. A rule that treats everyone alike has left them behind. We ask the housing authority to change how apartments are rented until disabled applicants are housed as often as anyone. Nobody is asking to be placed above anyone.'",
    outcome: 'idegal', route: { D1: ['rights'], R1: ['rules'] },
    cues: { D1: 'Nobody is asking to be placed above anyone',
            R1: ['A rule that treats everyone alike has left them behind', 'We ask the housing authority to change how apartments are rented'] },
    reason: { D1: 'The text wants fair treatment for one group and wants no one placed above another: {cue:D1}.',
              R1: 'A rule that treats everyone alike is said to leave a group behind, and the text asks for it to change: {cue:R1}. That is a request for {t:equity}.' },
    not: { outcome: 'clib', why: 'The text names a rule that is the same for everyone, as {o:clib} would. But {o:clib} says that is enough. This text says it has left a group behind.' } },

  { id: 'i5-f-modlib2', use: 'drill', tier: 'varied', setting: 'borders', topic: 'language classes in every town',
    text: "At a hearing in Orrow, a clerk said: 'Every person is free to speak their own language at home, and the government must protect that. But a person who cannot speak the language of the office cannot ask for anything. We ask the government to pay for classes in every town, free for anyone who arrived this year, and we will all pay for it.'",
    outcome: 'modlib', route: { D1: ['rights'], R1: ['start'] },
    cues: { D1: 'Every person is free to speak their own language at home, and the government must protect that',
            R1: 'We ask the government to pay for classes in every town, free for anyone who arrived this year, and we will all pay for it' },
    reason: { D1: 'The text puts first what every person is free to do: {cue:D1}.',
              R1: 'The government is to pay for classes that anyone can use, and everyone is to pay for them: {cue:R1}.' },
    not: { outcome: 'idegal', why: 'The text speaks of people who arrived this year, which can look like a group held back. But it names no rule that treats everyone alike and leaves them behind. It asks the government to pay for classes.' } },

  { id: 'i5-f-idegal2', use: 'drill', tier: 'varied', setting: 'work', topic: 'a farm grant and a title deed',
    text: "From the Pennard Farm Women's Circle: 'The farm grant asks every applicant for the title deed to the land. The rule is the same for all. In this valley the deeds are held in the names of fathers and sons, and the rule has left women who farm behind. We ask for the grant to accept a lease or a family letter until women farmers are paid as often as men.'",
    outcome: 'idegal', route: { D1: ['rights'], R1: ['rules'] },
    cues: { D1: 'until women farmers are paid as often as men',
            R1: ['the rule has left women who farm behind', 'We ask for the grant to accept a lease or a family letter'] },
    reason: { D1: 'The text wants fair treatment for women farmers, and says when that will be so: {cue:D1}.',
              R1: 'A rule that is the same for all is said to have left a group behind, and the text asks for the grant to accept something else: {cue:R1}.' },
    not: { outcome: 'modlib', why: 'The text asks the government for no school, no doctor and no help for everyone. It names one grant rule that leaves women farmers behind, and asks for that to change.' } },

  /* ---------- Stage four: the whole route (clean) ---------- */
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
