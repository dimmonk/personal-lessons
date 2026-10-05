// Political Ideologies, Unit One: drill cases, first stage (the key's first question on its own, on clean cases) and the
// reverse items. Every drill case is new: none of them appears in a card. Each carries the words that decide the first
// question (cues.D1), the reason for its answer (reason.D1), and not: the nearest wrong answer and why it fails here.
// These cases, with the route-stage cases and the return cases, are the bank that later units draw their earlier-unit
// items from. Every text here is invented.

FC.cases('ideology', 'u1', [

  /* ---------- working people against owners, beside no side named ---------- */
  { id: 'i-p-class', use: 'drill', tier: 'clean', setting: 'housing', topic: 'builders who cannot rent the flats they build',
    text: "Our members lay every brick of the Larkfield flats and cannot afford to rent one. The developer who owns the site will sell them for twice what they cost to build. This newsletter will say, as often as it takes, which of the two sides it is on: the people who build, not the people who sell.",
    route: { D1: ['class'] },
    cues: { D1: ['The developer who owns the site will sell them for twice what they cost to build', 'which of the two sides it is on: the people who build, not the people who sell'] },
    reason: { D1: 'The text sorts people into those who build and those who own and sell, and takes the first side: {cue:D1}.' },
    not: { outcome: 'rights', why: 'The text does complain of unfairness, but it does not say what every person is owed. It names two sides and stands with one of them.' } },

  { id: 'i-p-none', use: 'drill', tier: 'clean', setting: 'work', topic: 'a rota notice for warehouse staff',
    text: "Notice to all warehouse staff: from the first of the month, shift swaps must be requested through the rota desk at least two days ahead. Requests made on the day cannot be accepted. Questions to the shift supervisor.",
    route: { D1: ['none'] },
    cues: { D1: 'from the first of the month, shift swaps must be requested through the rota desk at least two days ahead' },
    reason: { D1: 'The text says how one practical matter will be handled: {cue:D1}. It is addressed to staff and takes no side between staff and owners.' },
    not: { outcome: 'class', why: 'The notice is about a workplace, and workers are the people it is written to, but nothing in it sets them against anyone. It tells them how to ask for a swap.' } },

  /* ---------- what every person is owed, beside the nation ---------- */
  { id: 'i-p-rights', use: 'drill', tier: 'clean', setting: 'health', topic: 'the same attention for every patient',
    text: "Every patient who comes through the door of this hospital is owed the same attention, whatever they earn, whoever they voted for and wherever their grandparents came from. That is the promise this hospital makes, and it comes before every line of the budget.",
    route: { D1: ['rights'] },
    cues: { D1: ['Every patient who comes through the door of this hospital is owed the same attention, whatever they earn, whoever they voted for and wherever their grandparents came from'] },
    reason: { D1: 'The text puts first what every person is owed: {cue:D1}. It takes the side of no group against another.' },
    not: { outcome: 'class', why: 'The text mentions what patients earn only to say that it makes no difference. It sorts nobody into workers and owners.' } },

  { id: 'i-p-nation', use: 'drill', tier: 'clean', setting: 'money', topic: 'a few insiders spending the country’s money',
    text: "The people who live and work in this country have paid for every bridge and every school, and they have been told to wait while a few insiders in the capital decide how their money is spent. This country belongs to its own people, and its own people will run it.",
    route: { D1: ['nation'] },
    cues: { D1: ['a few insiders in the capital decide how their money is spent', 'This country belongs to its own people, and its own people will run it'] },
    reason: { D1: 'The text speaks for the country’s own people against a few at the top, and puts those people first: {cue:D1}.' },
    not: { outcome: 'rights', why: 'The text speaks of the people of one country, and what they are owed is that they run it themselves. It does not say that every person is owed anything.' } },

  /* ---------- old ways, beside the nation ---------- */
  { id: 'i-p-tradition', use: 'drill', tier: 'clean', setting: 'town', topic: 'the church bells and the council',
    text: "The town clock has struck the hours since before anyone's grandparents were born, and the Sunday bells have rung with it. We were given those bells and that church, and we mean to keep them. They are what a town should be run by, and no council vote should switch them off.",
    route: { D1: ['tradition'] },
    cues: { D1: ['We were given those bells and that church, and we mean to keep them', 'They are what a town should be run by'] },
    reason: { D1: 'The text holds up what was handed down as what should guide: {cue:D1}.' },
    not: { outcome: 'none', why: 'A text about bells and a council vote could be a plain notice. This one goes further and says the old ways should decide how the town is run.' } },

  { id: 'i-p-nation2', use: 'drill', tier: 'clean', setting: 'borders', topic: 'a small country that means to stay one',
    text: "We are a small country and we mean to stay one: one people, one flag, one future. A people that stops believing in itself is swallowed, and we will not be swallowed.",
    route: { D1: ['nation'] },
    cues: { D1: ['one people, one flag, one future', 'A people that stops believing in itself is swallowed'] },
    reason: { D1: 'The text speaks for one people and puts it first: {cue:D1}.' },
    not: { outcome: 'tradition', why: 'The text speaks of a flag and a future. It holds up no faith, home life or custom as the guide, so it is the people itself that comes first.' } },

  /* ---------- reverse items: the answer is given; which detail would you expect? ---------- */
  { id: 'i-rev-class', use: 'drill', kind: 'reverse', outcome: 'class', expect: 'hear',
    options: [
      { text: '"The ones who stack the shelves and the ones who own the shop will never want the same thing, and I am with the ones who stack."', voice: 'class' },
      { text: '"We are one people, and what belongs to our country belongs to all of us."', voice: 'nation' },
      { text: '"What our grandparents handed down is what should guide us."', voice: 'tradition' },
      { text: '"Every person is owed the same fair hearing, whoever they are."', voice: 'rights' },
      { text: '"Applications close on Friday. Forms are at the front desk."', voice: 'none' }
    ],
    why: 'It sorts people into those who work and those who own, and takes the side of the first. Nobody in the other four is sorted that way.' },

  { id: 'i-rev-nation', use: 'drill', kind: 'reverse', outcome: 'nation', expect: 'find',
    options: [
      { text: 'A leaflet that says the firm and its staff have opposite interests, and sides with the staff.', voice: 'class' },
      { text: 'A speech that says everyone born in this country is one people, and that the people comes first.', voice: 'nation' },
      { text: 'A sermon that says the old customs, handed down, should decide how things are run.', voice: 'tradition' },
      { text: 'A letter that says every person is owed a fair hearing, whoever they are.', voice: 'rights' },
      { text: 'A sign that says the library closes at five on Saturdays.', voice: 'none' }
    ],
    why: 'It speaks for one people, marked out by its country, and puts that people first. The others sort people by their jobs, speak for the past, say what each person is owed, or only give information.' },

  { id: 'i-rev-tradition', use: 'drill', kind: 'reverse', outcome: 'tradition', expect: 'hear',
    options: [
      { text: '"The bosses own the yard and we do the work. We know which side we are on."', voice: 'class' },
      { text: '"Our country, our people, first."', voice: 'nation' },
      { text: '"The faith and the customs we were given are what a country should be guided by."', voice: 'tradition' },
      { text: '"Nobody should need a licence to say what they think."', voice: 'rights' },
      { text: '"The bus now stops at the corner of Mill Road."', voice: 'none' }
    ],
    why: 'It holds up what was handed down, a faith and its customs, as what should guide. The other four sort workers from owners, put one people first, say what a person is owed, or only inform.' },

  { id: 'i-rev-rights', use: 'drill', kind: 'reverse', outcome: 'rights', expect: 'find',
    options: [
      { text: 'A union statement that the drivers and the company owners want different things.', voice: 'class' },
      { text: 'A rally speech that this land is for its own people.', voice: 'nation' },
      { text: 'A parish letter that the old festivals should come before the timetable.', voice: 'tradition' },
      { text: 'A speech that every child is owed a school and a doctor, whatever the family earns.', voice: 'rights' },
      { text: 'A notice that the clinic opens at eight.', voice: 'none' }
    ],
    why: 'It says what every person is owed, and puts that first. It takes no side between groups, and holds up neither one people nor the past.' },

  { id: 'i-rev-none', use: 'drill', kind: 'reverse', outcome: 'none', expect: 'hear',
    options: [
      { text: '"The mill owners got richer and the weavers got poorer, and I am with the weavers."', voice: 'class' },
      { text: '"This is our land and our people, and we come first."', voice: 'nation' },
      { text: '"The old ways are what should guide us."', voice: 'tradition' },
      { text: '"Each person is owed the freedom to say what they think."', voice: 'rights' },
      { text: '"The bridge is closed until 14 March. Use the Mill Lane crossing."', voice: 'none' }
    ],
    why: 'It says only what will happen and where to go, and it speaks for no side. In the other four, a side is named or a thing is held up as first.' }
]);
