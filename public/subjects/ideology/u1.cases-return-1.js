// Political Ideologies, Unit One: fresh cases held back for later days (lesson standard E9, V44), part one.
// Three for each answer: one for each scheduled return. An answer that is due comes back as a case the learner has not seen,
// beside a case of the answer they most often take it for. Field guide: see u1.cases-drill-1.js.
// These are also part of the bank that later units draw their earlier-unit items from. Every text here is invented.

FC.cases('ideology', 'u1', [

  /* ---------- working people, against those who own the businesses ---------- */
  { id: 'i-ret-class-agency', use: 'return', tier: 'clean', setting: 'schooling', topic: 'cleaners and the agency that owns the contract',
    text: "The agency that owns the Hartley College cleaning contract keeps a third of every hour the cleaners work. We, the cleaners, have voted: the agency's owners and the people who clean are on opposite sides, and we stand together.",
    route: { D1: ['class'] },
    cues: { D1: ["the agency's owners and the people who clean are on opposite sides, and we stand together"] },
    reason: { D1: 'The text sets the agency’s owners against the people who clean, and stands with the cleaners: {cue:D1}.' },
    not: { outcome: 'rights', why: 'The cleaners complain of unfairness, but they do not say what every person is owed. They name two sides and stand together on one.' },
    wouldChange: 'If the cleaners had said that everyone who works is owed a fair hour’s pay, whoever employs them, and had named no side, it would be {a:D1.rights}.' },

  { id: 'i-ret-class-app', use: 'return', tier: 'varied', setting: 'work', topic: 'app drivers and a cut in fares',
    text: "The drivers on the Metrocab app say the company's owners have cut every fare by a quarter while its profits doubled. 'There are those who drive and those who own the app,' reads their statement. 'We are done pretending we want the same thing.'",
    route: { D1: ['class'] },
    cues: { D1: ['There are those who drive and those who own the app', 'We are done pretending we want the same thing'] },
    reason: { D1: 'The text names two groups, those who drive and those who own the app, and speaks for the first: {cue:D1}.' },
    not: { outcome: 'none', why: 'A statement about fare cuts could simply report them. This one names two groups with different interests and stands with one.' },
    wouldChange: 'If the statement had only said that fares would change on the first of the month and where to see the new table, it would be {a:D1.none}.' },

  { id: 'i-ret-class-pickers', use: 'return', tier: 'misleading', setting: 'borders', topic: 'fruit pickers and the owners of big farms', echo: 'i-speech-nation',
    text: "They say a strong country needs strong farms. Then the owners of the big farms pay pickers by the box and call the pickers a burden on the nation. The pickers are the country's real strength, and the owners are on the other side of the field.",
    route: { D1: ['class'] },
    cues: { D1: ['the owners of the big farms pay pickers by the box', "the owners are on the other side of the field"] },
    reason: { D1: 'The text uses the words country and nation, and then sorts the people into pickers and owners and stands with the pickers: {cue:D1}.' },
    not: { outcome: 'nation', why: 'The country and the nation are named, but the text does not speak for them as one people. It says that the owners are on the other side.' },
    wouldChange: 'If the text had said that pickers and owners alike are one people, and that the farms belong to the nation, it would be {a:D1.nation}.' },

  /* ---------- the nation, or its ordinary people ---------- */
  { id: 'i-ret-nation-city', use: 'return', tier: 'clean', setting: 'borders', topic: 'a land that belongs to one people',
    text: "This land belongs to those who were born in it and those who chose it, one people with one future. Whatever tears at that, we answer first as one people.",
    route: { D1: ['nation'] },
    cues: { D1: ['one people with one future', 'we answer first as one people'] },
    reason: { D1: 'The text speaks for one people, marked out by its land, and puts it first: {cue:D1}.' },
    not: { outcome: 'class', why: 'Nobody in the text is sorted by wages or by owning a business. It speaks of one people, whatever brought each person there.' },
    wouldChange: 'If the text had asked that the old churches and customs of the land, not the people, should guide what is done, it would be {a:D1.tradition}.' },

  { id: 'i-ret-nation-few', use: 'return', tier: 'varied', setting: 'money', topic: 'a few ministers in locked rooms',
    text: "A few ministers decide, in locked rooms, what the ordinary families of this country will pay. We want the country run for those who live in it, and nobody else.",
    route: { D1: ['nation'] },
    cues: { D1: ['A few ministers decide, in locked rooms, what the ordinary families of this country will pay', 'We want the country run for those who live in it'] },
    reason: { D1: 'The text sets the country’s ordinary families against a few at the top, and wants the country run for its own people: {cue:D1}.' },
    not: { outcome: 'class', why: 'The few at the top are ministers, not owners, and the families are the country’s own people, not workers set against owners.' },
    wouldChange: 'If the few at the top were the owners of the banks and the families were the people who work for them, and the text stood with the workers, it would be {a:D1.class}.' },

  { id: 'i-ret-nation-deny', use: 'return', tier: 'misleading', setting: 'work', topic: 'a worker, an owner and a citizen', echo: 'i-whouse',
    text: "Call yourself a worker or an owner if you must. On the day the country calls, there is only a citizen. Anyone who keeps the old quarrels alive is serving someone else's flag.",
    route: { D1: ['nation'] },
    cues: { D1: ['On the day the country calls, there is only a citizen', "Anyone who keeps the old quarrels alive is serving someone else's flag"] },
    reason: { D1: 'The text names workers and owners only to say that the country comes before both: {cue:D1}.' },
    not: { outcome: 'class', why: 'Workers and owners are named, which is what the first answer looks for. But the text stands with neither. It says there is only a citizen.' },
    wouldChange: 'If the text had said that the workers should stand against the owners whatever the country calls, it would be {a:D1.class}.' },

  /* ---------- old ways of faith, family and custom ---------- */
  { id: 'i-ret-trad-walk', use: 'return', tier: 'clean', setting: 'faith', topic: 'walking the bounds of the fields',
    text: "In our village we have walked the bounds of the fields every spring since before the church had a roof. It was given to us and we will give it on. What was handed down is what a village should be guided by.",
    route: { D1: ['tradition'] },
    cues: { D1: ['It was given to us and we will give it on', 'What was handed down is what a village should be guided by'] },
    reason: { D1: 'The text holds up what was handed down as what should guide: {cue:D1}.' },
    not: { outcome: 'none', why: 'A text about a yearly walk could be a plain notice of the day and time. This one says that what was handed down should guide.' },
    wouldChange: 'If the notice only said that this year’s walk starts at the church at nine, with no word on what should guide anything, it would be {a:D1.none}.' },

  { id: 'i-ret-trad-carols', use: 'return', tier: 'varied', setting: 'schooling', topic: 'a school nativity the governors want to cut',
    text: "The school nativity and the carol service were handed down by every class before this one, and the governors want to cut them. Tell them that what we inherited should come before what is convenient.",
    route: { D1: ['tradition'] },
    cues: { D1: ['were handed down by every class before this one', 'what we inherited should come before what is convenient'] },
    reason: { D1: 'The text holds up what was inherited as what should come first: {cue:D1}.' },
    not: { outcome: 'rights', why: 'The text says what should come first, and it is what was inherited. It does not say that every person is owed anything.' },
    wouldChange: 'If the text had said that every child is owed a place in the service, whatever they believe, it would be {a:D1.rights}.' },

  { id: 'i-ret-trad-free', use: 'return', tier: 'misleading', setting: 'money', topic: 'freedom that grows in old soil', echo: 'i-rights-meet',
    also: ['rights'],
    text: "Everyone should be free to run a shop or a farm without a license, and I say so loudly. But freedom is a plant that grows in old soil: church, home and the customs of our parents. Guide the country by them, or lose both.",
    route: { D1: ['tradition'] },
    cues: { D1: ['freedom is a plant that grows in old soil: church, home and the customs of our parents. Guide the country by them'] },
    reason: { D1: 'The text asks that the country be guided by what the parents taught: {cue:D1}.' },
    not: { outcome: 'rights', why: 'Freedom to run a shop is in the text, and on its own it would be the fourth answer. But the text goes on to say that old ways should guide the country. When a case shows both, the answer is {a:D1.tradition}.' },
    wouldChange: 'If the text had stopped after its first sentence, it would be {a:D1.rights}.' }
]);
