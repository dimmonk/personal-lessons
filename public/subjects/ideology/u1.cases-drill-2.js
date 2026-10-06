// Political Ideologies, Unit One: drill cases, second stage (the whole route, which in this unit is the first question
// alone), clean and varied cases. Field guide: see u1.cases-drill-1.js.
// wouldChange says what would make the case a different answer, and is shown after a route item.

FC.cases('ideology', 'u1', [

  /* ---------- clean: working people against owners beside the nation ---------- */
  { id: 'i-r-class1', use: 'drill', tier: 'clean', setting: 'schooling', topic: 'dinner staff paid by a catering firm',
    text: "The dinner staff at Oakhill school are paid by a catering firm. The firm's owners cleared a bigger profit than ever, and the staff who serve the children cannot afford the lunches they hand out. We do not pretend the firm and its staff want the same thing, and we are with the staff.",
    route: { D1: ['class'] },
    cues: { D1: ["The firm's owners cleared a bigger profit than ever, and the staff who serve the children cannot afford the lunches they hand out", 'we are with the staff'] },
    reason: { D1: 'The text sets the firm’s owners against the staff who work for it, and takes the side of the staff: {cue:D1}.' },
    not: { outcome: 'nation', why: 'The text speaks of a school and of lunches, and it puts no people or country first. The two sides it names are staff and owners.' },
    wouldChange: 'If the text had only said that dinner staff would be paid on the 28th, with no firm, no owners and no side taken, it would be {a:D1.none}.' },

  { id: 'i-r-nation1', use: 'drill', tier: 'clean', setting: 'town', topic: 'a flag over the town hall',
    text: "Whatever part of this country you come from, you belong to the same people, and the people comes first. The flag over the town hall is the flag over every one of us, and a country that believes in itself cannot be beaten.",
    route: { D1: ['nation'] },
    cues: { D1: ['you belong to the same people, and the people comes first'] },
    reason: { D1: 'The text speaks for one people, marked out by its country, and puts it first: {cue:D1}.' },
    not: { outcome: 'class', why: 'Nobody in the text is sorted by wages or by owning a business. It speaks of one people, whatever part of the country they come from.' },
    wouldChange: 'If the text had said that the old faith and the old customs, not the flag, should guide the country, what it held up would be old ways and the answer would be {a:D1.tradition}.' },

  /* ---------- clean: old ways, rights and no side named ---------- */
  { id: 'i-r-trad1', use: 'drill', tier: 'clean', setting: 'faith', topic: 'fasts and saints’ days in a church newsletter',
    text: "From a church newsletter: 'The Lenten fast, the Easter bells and the saints' days were given to us by the generations before us. We hold to them because they are old, and we ask this country to be guided by them, as it was before the shops and the leagues took the Sundays.'",
    route: { D1: ['tradition'] },
    cues: { D1: ['We hold to them because they are old, and we ask this country to be guided by them'] },
    reason: { D1: 'The text holds up ways handed down from the past and asks the country to be guided by them: {cue:D1}.' },
    not: { outcome: 'nation', why: 'The text speaks of this country, but it asks it to be guided by the fasts, bells and saints’ days. It does not put one people first.' },
    wouldChange: 'If the newsletter only said that the Easter bells would ring at ten and that the hall would be open after, with nothing about what should guide anyone, it would be {a:D1.none}.' },

  { id: 'i-r-rights1', use: 'drill', tier: 'clean', setting: 'money', topic: 'selling what you make without permission',
    text: "A shopkeeper writes in the paper: 'Nobody needs the council's permission to sell what they have made, to say what they think, or to follow their own beliefs. Each person is owed that freedom, and a government that forgets it has forgotten its job.'",
    route: { D1: ['rights'] },
    cues: { D1: ['Each person is owed that freedom, and a government that forgets it has forgotten its job'] },
    reason: { D1: 'The text puts first what each person is owed: {cue:D1}.' },
    not: { outcome: 'class', why: 'The writer is a shopkeeper, which is an owner, but the text does not sort people into owners and workers or take a side between them. It says that each person is owed a freedom.' },
    wouldChange: 'If the shopkeeper had said that the shop’s owners and the shop’s staff want opposite things and sided with the staff, it would be {a:D1.class}.' },

  { id: 'i-r-none1', use: 'drill', tier: 'clean', setting: 'town', topic: 'recycling day moves',
    text: "From the first of June, recycling collection on Hollin Road moves from Mondays to Tuesdays. Put trash cans out by seven in the morning. Missed collections can be reported to the council by phone.",
    route: { D1: ['none'] },
    cues: { D1: ['recycling collection on Hollin Road moves from Mondays to Tuesdays', 'Put trash cans out by seven in the morning'] },
    reason: { D1: 'The text says how one practical matter will be handled: {cue:D1}. It speaks for no side.' },
    not: { outcome: 'rights', why: 'A collection is a service the council provides, but the notice does not say that every household is owed one. It says which day.' },
    wouldChange: 'If it said that every household, however poor, is owed a collection and that the council had broken that promise, it would be {a:D1.rights}.' },

  /* ---------- varied: three different settings and two shapes of the nation ---------- */
  { id: 'i-r-class2', use: 'drill', tier: 'varied', setting: 'housing', topic: 'construction workers and the towers they cannot afford',
    text: "At a rally of construction workers the speaker said: 'We pour the concrete for the towers and cannot afford to sleep in them. The firms that own the towers make their money from our hands. There are two sides in this city, those who build and those who own, and I know where I stand.'",
    route: { D1: ['class'] },
    cues: { D1: ['There are two sides in this city, those who build and those who own, and I know where I stand'] },
    reason: { D1: 'The text names two sides, those who build and those who own, and takes the first: {cue:D1}.' },
    not: { outcome: 'nation', why: 'The text speaks of a city, but it does not speak for the whole city as one people. It splits the city in two.' },
    wouldChange: 'If the speaker had said that everyone who lives in the city is one people with one future, and that the city comes first, it would be {a:D1.nation}.' },

  { id: 'i-r-nation2', use: 'drill', tier: 'varied', setting: 'money', topic: 'a manifesto against officials who answer to no one',
    text: "From a manifesto: 'The ordinary men and women of this country have been paying for decisions made by a few officials who answer to no one. We will take the country back for the people whose country it is, and the country's own people come first.'",
    route: { D1: ['nation'] },
    cues: { D1: ['The ordinary men and women of this country have been paying for decisions made by a few officials who answer to no one', "the country's own people come first"] },
    reason: { D1: 'The text sets the country’s ordinary people against a few at the top, and puts those people first: {cue:D1}.' },
    not: { outcome: 'class', why: 'The few at the top are officials, not owners, and the people are the country’s own people, not workers set against owners.' },
    wouldChange: 'If the few at the top were the owners of the mills and the people were the workers standing against them, it would be {a:D1.class}.' },

  { id: 'i-r-none2', use: 'drill', tier: 'varied', setting: 'borders', topic: 'a customs notice about cash',
    text: "A notice at the customs post: 'Travelers carrying more than 10,000 in cash must declare it at the red desk. Declarations take about ten minutes. Failure to declare may lead to a fine.'",
    route: { D1: ['none'] },
    cues: { D1: ['Travelers carrying more than 10,000 in cash must declare it at the red desk'] },
    reason: { D1: 'The text says how one practical matter is handled: {cue:D1}. It speaks for no people.' },
    not: { outcome: 'nation', why: 'A border is where texts for the nation are often written, but this one only says what a traveler must do.' },
    wouldChange: 'If the notice had said that the border keeps one people together and that this people comes first, it would be {a:D1.nation}.' },

  { id: 'i-r-trad2', use: 'drill', tier: 'varied', setting: 'schooling', topic: 'a school drops morning prayers',
    text: "The school's new schedule drops morning prayers and the harvest assembly. 'These were passed down by every teacher before us,' the chair of the school board wrote. 'The old ways are not a decoration. They are what a school, and a country, should be built on.'",
    route: { D1: ['tradition'] },
    cues: { D1: ['These were passed down by every teacher before us', 'The old ways are not a decoration. They are what a school, and a country, should be built on'] },
    reason: { D1: 'The text holds up ways handed down as what should guide: {cue:D1}.' },
    not: { outcome: 'nation', why: 'The text says “a country”, but it asks for no one people to be put first. What it asks the school and the country to be built on is the old ways.' },
    wouldChange: 'If the chair had written that the schedule broke what every student is owed, whatever their beliefs, it would be {a:D1.rights}.' },

  { id: 'i-r-rights2', use: 'drill', tier: 'varied', setting: 'borders', topic: 'a fair hearing at a border post',
    text: "At the border post a notice reads: 'Everyone who arrives here, whatever their papers and wherever they come from, is owed a fair hearing before anything is decided about them. A person is not a file, and fair treatment comes first.'",
    route: { D1: ['rights'] },
    cues: { D1: ['is owed a fair hearing before anything is decided about them', 'fair treatment comes first'] },
    reason: { D1: 'The text puts first what every person who arrives is owed: {cue:D1}.' },
    not: { outcome: 'nation', why: 'The text is posted at a border, where texts for the nation are often written. It speaks for every person who arrives and puts no one people first.' },
    wouldChange: 'If it said that those who arrive must prove they belong to the one people of this country before they are heard, it would be {a:D1.nation}.' }
]);
