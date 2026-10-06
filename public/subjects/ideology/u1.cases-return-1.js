// Political Ideologies, Unit One: fresh cases held back for later days (lesson standard E9, V44), part one.
// One for each answer. An answer that is due comes back as a case the learner has not seen,
// beside a case of the answer they most often take it for. Field guide: see u1.cases-drill-1.js.
// These are also part of the bank that later units draw their earlier-unit items from. Every text here is invented.

FC.cases('ideology', 'u1', [

  /* ---------- working people, against those who own the businesses ---------- */
  { id: 'i-ret-class-app', use: 'return', tier: 'varied', setting: 'work', topic: 'app drivers and a cut in fares',
    text: "The drivers on the Metrocab app say the company's owners have cut every fare by a quarter while its profits doubled. 'There are those who drive and those who own the app,' reads their statement. 'We are done pretending we want the same thing.'",
    route: { D1: ['class'] },
    cues: { D1: ['There are those who drive and those who own the app', 'We are done pretending we want the same thing'] },
    reason: { D1: 'The text names two groups, those who drive and those who own the app, and speaks for the first: {cue:D1}.' },
    not: { outcome: 'none', why: 'A statement about fare cuts could simply report them. This one names two groups with different interests and stands with one.' } },

  /* ---------- the nation, or its ordinary people ---------- */
  { id: 'i-ret-nation-few', use: 'return', tier: 'varied', setting: 'money', topic: 'a few ministers in locked rooms',
    text: "A few ministers decide, in locked rooms, what the ordinary families of this country will pay. We want the country run for those who live in it, and nobody else.",
    route: { D1: ['nation'] },
    cues: { D1: ['A few ministers decide, in locked rooms, what the ordinary families of this country will pay', 'We want the country run for those who live in it'] },
    reason: { D1: 'The text sets the country’s ordinary families against a few at the top, and wants the country run for its own people: {cue:D1}.' },
    not: { outcome: 'class', why: 'The few at the top are ministers, not owners, and the families are the country’s own people, not workers set against owners.' } },

  /* ---------- old ways of faith, family and custom ---------- */
  { id: 'i-ret-trad-carols', use: 'return', tier: 'varied', setting: 'schooling', topic: 'a school nativity the governors want to cut',
    text: "The school nativity and the carol service were handed down by every class before this one, and the governors want to cut them. Tell them that what we inherited should come before what is convenient.",
    route: { D1: ['tradition'] },
    cues: { D1: ['were handed down by every class before this one', 'what we inherited should come before what is convenient'] },
    reason: { D1: 'The text holds up what was inherited as what should come first: {cue:D1}.' },
    not: { outcome: 'rights', why: 'The text says what should come first, and it is what was inherited. It does not say that every person is owed anything.' } },

]);
