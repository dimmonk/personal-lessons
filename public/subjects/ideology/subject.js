// Political Ideologies: subject record. Revision is a real field (it used to be parsed out of an "eyebrow" label).
FC.subject('ideology', {
  name: 'Political Ideologies',
  rev: 4,                 // subject revision; goes up whenever this record, the key or the specimens change (lesson standard R2)
  standard: 1,            // lesson-standard version the subject's key was written to
  action: false,          // the learner reads and names texts; nothing here is acted on (lesson standard section 11, P26)
  blurb: 'When someone calls a speech or a post “socialist” or “fascist”, check for yourself: whose side it is on, what it wants done, and which name its own words earn.',
  // Order of the course (docs/rebuild/ideology-plan.md, part b). u1 teaches the first question; u2 to u5 each teach one
  // of its branches. Until a unit is rebuilt, the old unit in the same position of standard0.js is shown in its place.
  units: ['u1', 'u2', 'u3', 'u4', 'u5'],
  // The areas of life a text's story can be set in. case.setting must be one of these; case.topic carries the detail.
  // A fixed list is what makes "three settings" and "a different setting" checkable (lesson standard W5.3, V33).
  settings: ['work', 'money', 'housing', 'health', 'schooling', 'town', 'borders', 'faith'],
  // "Where this key stops", shown on the reference screen.
  limits: [
    { h: 'This reads what was said, not a person or a party',
      text: 'It names what one short speech, post or flyer says. People and parties say different things in different places, and what they say, what they do and what their leaders want do not always match, so well-informed people disagree about the same party. These questions are for something you read or hear. They give no verdict on any living party or person.' },
    { h: 'Experts disagree on where the lines fall',
      text: 'Historians argue over where some of these names start and stop. Some keep the word fascist for Europe between the two world wars, and others use it more widely; whether taxing owners to pay for services counts as socialist is argued both ways. This subject draws one line for each name, says where, and goes by what a few lines can show: who is set against whom, what should happen to the businesses, and what should happen to elections.' },
    { h: 'These words are also thrown as insults',
      text: 'In an argument, fascist, socialist, communist or globalist is usually thrown to condemn, not to describe. Saying what something says and attacking it are different jobs, and this subject is only for the first.' },
    { h: 'A few lines often leave things out',
      text: 'A slogan or a short speech may not say enough to choose between two names. There are answers for that, and giving one is a right answer, not a failure. Never fill the gap with a guess about what the speaker probably wants.' },
    { h: 'Some systems are barely covered',
      text: 'Rule by religious leaders, rule by experts, and political traditions outside Europe and North America get little or no coverage here. The first question still works on them, but its answers may not fit.' },
    { h: '“Liberal” means different things',
      text: 'In the United States a liberal is usually someone on the center-left; in much of Europe it means someone who wants a small government and free markets. There is a name for each, and the answer goes by what the text asks for, never by the label.' }
  ],
  // What changed at each revision (lesson standard R1). One entry for every revision from 1 to rev.
  history: [
    { rev: 1, date: '2026-10-05', change: 'First version under lesson standard 1: the key rewritten in plain words. The two flat questions became a first question with five answers, one of them for a text that speaks for no side, and four branches whose questions end every route in one name. Four names were added where a text says nothing more or nothing extreme, so that such texts have somewhere to go.' },
    { rev: 2, date: '2026-10-05', change: 'Plain words: the lesson machinery\'s own names ("key", "route" and so on) replaced with plain ones.' },
    { rev: 3, date: '2026-10-05', change: 'American English: dollars, US words and spelling.' },
    { rev: 4, date: '2026-10-07', change: 'Plain, concrete writing: the key, the subject notes and the whole stories rewritten in plain words, with plain short names and shorter definitions.' }
  ]
});
