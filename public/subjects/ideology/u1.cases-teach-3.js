// Political Ideologies, Unit One: cases shown inside the look-alike cards.
// The Harrow cannery is told in four voices and the Calder ferry in five, so that two cases on a look-alike card share their
// story and differ only in the words that decide the first question. Every text here is invented.
// Field guide: see u1.cases-teach-1.js.

FC.cases('ideology', 'u1', [

  /* ---------- One event, four voices: the Harrow cannery closes ---------- */
  { id: 'i-can-class', use: 'teach', tier: 'clean', setting: 'town', topic: 'the Harrow cannery closes, told for working people',
    text: "The Harrow cannery closes on Friday and four hundred jobs go with it. The owners are moving the work to a cheaper plant and keeping the profit, while the people who stood at the line for thirty years are left to pay for it. We are on their side.",
    route: { D1: ['class'] },
    cues: { D1: ['The owners are moving the work to a cheaper plant and keeping the profit, while the people who stood at the line for thirty years are left to pay for it', 'We are on their side'] } },

  { id: 'i-can-nation', use: 'teach', tier: 'clean', setting: 'town', topic: 'the Harrow cannery closes, told for the nation',
    text: "The Harrow cannery closes on Friday, and a piece of this country closes with it. We are one people, and when one of our towns is hollowed out the whole nation is smaller. A country that cannot feed itself from its own fields and its own factories is not free, and our first duty is to the nation.",
    route: { D1: ['nation'] },
    cues: { D1: ['We are one people, and when one of our towns is hollowed out the whole nation is smaller', 'our first duty is to the nation'] } },

  { id: 'i-can-tradition', use: 'teach', tier: 'clean', setting: 'town', topic: 'the Harrow cannery closes, told for old ways',
    text: "The Harrow cannery closes on Friday, and the harvest supper that the cannery households have held in the chapel hall for a hundred years may close with it. The faith, the family and the old customs of this town are what held it together, and they should guide how we rebuild: keep the chapel, keep the supper, keep the Sunday rest.",
    route: { D1: ['tradition'] },
    cues: { D1: ['The faith, the family and the old customs of this town are what held it together, and they should guide how we rebuild'] } },

  { id: 'i-can-rights', use: 'teach', tier: 'clean', setting: 'town', topic: 'the Harrow cannery closes, told for what every person is owed',
    text: "The Harrow cannery closes on Friday. Every person who loses a job there is owed a fair hearing, fair notice and a fair start somewhere else, whoever they are and whatever they earned. A society that cannot promise that much to every person has no business closing anything.",
    route: { D1: ['rights'] },
    cues: { D1: ['Every person who loses a job there is owed a fair hearing, fair notice and a fair start somewhere else, whoever they are and whatever they earned'] } },

  /* ---------- One event, five voices: the Calder ferry is cut to one sailing a day ---------- */
  { id: 'i-fer-class', use: 'teach', tier: 'clean', setting: 'work', topic: 'the Calder ferry is cut, told for working people',
    text: "From April the Calder ferry company will run one sailing a day and pay its crews for one. The crews have kept this island joined to the mainland through every winter for wages that have not moved in six years. The people who work the boats and the people who own the line want different things, and we are with the crews.",
    route: { D1: ['class'] },
    cues: { D1: ['The people who work the boats and the people who own the line want different things, and we are with the crews'] } },

  { id: 'i-fer-nation', use: 'teach', tier: 'clean', setting: 'borders', topic: 'the Calder ferry is cut, told for the nation',
    text: "One sailing a day will cut this island off from the rest of its own country. The islanders are as much a part of our nation as anyone, and a nation that leaves its own people behind has stopped being one people. Keep the island joined to the nation.",
    route: { D1: ['nation'] },
    cues: { D1: ['a nation that leaves its own people behind has stopped being one people', 'Keep the island joined to the nation'] } },

  { id: 'i-fer-tradition', use: 'teach', tier: 'clean', setting: 'faith', topic: 'the Calder ferry is cut, told for old ways',
    text: "One sailing a day means no Sunday boat, and the island has crossed to the mainland church on the Sunday boat for two hundred years. The Sunday crossing, the church and the old island customs are what should guide how this ferry is run, not a timetable drawn up by strangers.",
    route: { D1: ['tradition'] },
    cues: { D1: ['The Sunday crossing, the church and the old island customs are what should guide how this ferry is run'] } },

  { id: 'i-fer-rights', use: 'teach', tier: 'clean', setting: 'health', topic: 'the Calder ferry is cut, told for what every person is owed',
    text: "Every islander is owed a way to a hospital and a school on the mainland, whatever their age, income or health. One sailing a day takes that away from the people who can least do without it. Fair treatment for every person on this island means a crossing they can rely on.",
    route: { D1: ['rights'] },
    cues: { D1: ['Every islander is owed a way to a hospital and a school on the mainland, whatever their age, income or health'] } },

  { id: 'i-fer-none', use: 'teach', tier: 'clean', setting: 'town', topic: 'the Calder ferry is cut, as a timetable',
    text: "Calder ferry timetable from 1 April: one sailing a day, leaving the island at 8.15 and returning from the mainland at 5.40. Foot passengers do not need to book. Vehicles must book 48 hours ahead on the number below.",
    route: { D1: ['none'] },
    cues: { D1: ['one sailing a day, leaving the island at 8.15 and returning from the mainland at 5.40', 'Vehicles must book 48 hours ahead on the number below'] } },

  /* ---------- The same noun pointing opposite ways ---------- */
  { id: 'i-race-above', use: 'teach', tier: 'clean', setting: 'borders', topic: 'a pamphlet that ranks races',
    text: "From a pamphlet of the Order of the Old Blood: 'Our race is the oldest and the best, and the others were born to serve it. Those of other blood may live among us only if they know their place beneath us.'",
    route: { D1: ['nation'] },
    cues: { D1: ['Our race is the oldest and the best, and the others were born to serve it'] } },

  { id: 'i-race-held', use: 'teach', tier: 'clean', setting: 'housing', topic: 'a housing hearing on lending',
    text: "At a housing hearing: 'Nothing in the lending rules mentions race. But applicants of one race are sent to the back of the queue year after year, and a rule that treats everyone alike while leaving them there is a rule that has to change. Nobody is above anybody here. Fair treatment is owed to every applicant.'",
    route: { D1: ['rights'] },
    cues: { D1: ['a rule that treats everyone alike while leaving them there is a rule that has to change', 'Fair treatment is owed to every applicant'] } }
]);
