// Political Ideologies, Unit One: drill cases, second stage (the whole route, which in this unit is the first question
// alone), clean cases. Field guide: see u1.cases-drill-1.js.

FC.cases('ideology', 'u1', [

  /* ---------- clean: working people against owners beside the nation ---------- */
  { id: 'i-r-class1', use: 'drill', tier: 'clean', setting: 'schooling', topic: 'dinner staff paid by a catering firm',
    text: "The dinner staff at Oakhill school are paid by a catering firm. The firm's owners cleared a bigger profit than ever, and the staff who serve the children cannot afford the lunches they hand out. We do not pretend the firm and its staff want the same thing, and we are with the staff.",
    route: { D1: ['class'] },
    cues: { D1: ["The firm's owners cleared a bigger profit than ever, and the staff who serve the children cannot afford the lunches they hand out", 'we are with the staff'] },
    reason: { D1: 'The text sets the firm’s owners against the staff who work for it, and takes the side of the staff: {cue:D1}.' },
    not: { outcome: 'nation', why: 'The text speaks of a school and of lunches, and it puts no people or country first. The two sides it names are staff and owners.' } },

  { id: 'i-r-nation1', use: 'drill', tier: 'clean', setting: 'town', topic: 'a flag over the town hall',
    text: "Whatever part of this country you come from, you belong to the same people, and the people comes first. The flag over the town hall is the flag over every one of us, and a country that believes in itself cannot be beaten.",
    route: { D1: ['nation'] },
    cues: { D1: ['you belong to the same people, and the people comes first'] },
    reason: { D1: 'The text speaks for one people, marked out by its country, and puts it first: {cue:D1}.' },
    not: { outcome: 'class', why: 'Nobody in the text is sorted by wages or by owning a business. It speaks of one people, whatever part of the country they come from.' } },

  /* ---------- clean: old ways, rights and no side named ---------- */
  { id: 'i-r-trad1', use: 'drill', tier: 'clean', setting: 'faith', topic: 'fasts and saints’ days in a church newsletter',
    text: "From a church newsletter: 'The Lenten fast, the Easter bells and the saints' days were given to us by the generations before us. We hold to them because they are old, and we ask this country to be guided by them, as it was before the shops and the leagues took the Sundays.'",
    route: { D1: ['tradition'] },
    cues: { D1: ['We hold to them because they are old, and we ask this country to be guided by them'] },
    reason: { D1: 'The text holds up ways handed down from the past and asks the country to be guided by them: {cue:D1}.' },
    not: { outcome: 'nation', why: 'The text speaks of this country, but it asks it to be guided by the fasts, bells and saints’ days. It does not put one people first.' } },

  { id: 'i-r-rights1', use: 'drill', tier: 'clean', setting: 'money', topic: 'selling what you make without permission',
    text: "A shopkeeper writes in the paper: 'Nobody needs the council's permission to sell what they have made, to say what they think, or to follow their own beliefs. Each person is owed that freedom, and a government that forgets it has forgotten its job.'",
    route: { D1: ['rights'] },
    cues: { D1: ['Each person is owed that freedom, and a government that forgets it has forgotten its job'] },
    reason: { D1: 'The text puts first what each person is owed: {cue:D1}.' },
    not: { outcome: 'class', why: 'The writer is a shopkeeper, which is an owner, but the text does not sort people into owners and workers or take a side between them. It says that each person is owed a freedom.' } },

  { id: 'i-r-none1', use: 'drill', tier: 'clean', setting: 'town', topic: 'recycling day moves',
    text: "From the first of June, recycling collection on Hollin Road moves from Mondays to Tuesdays. Put trash cans out by seven in the morning. Missed collections can be reported to the council by phone.",
    route: { D1: ['none'] },
    cues: { D1: ['recycling collection on Hollin Road moves from Mondays to Tuesdays', 'Put trash cans out by seven in the morning'] },
    reason: { D1: 'The text says how one practical matter will be handled: {cue:D1}. It speaks for no side.' },
    not: { outcome: 'rights', why: 'A collection is a service the council provides, but the notice does not say that every household is owed one. It says which day.' } },
]);
