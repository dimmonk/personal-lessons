// Political Ideologies: subject record. Revision is a real field (it used to be parsed out of an "eyebrow" label).
FC.subject('ideology', {
  name: 'Political Ideologies',
  rev: 3,                 // subject revision; goes up whenever this record, the key or the specimens change (lesson standard R2)
  standard: 1,            // lesson-standard version the subject's key was written to
  action: false,          // the learner reads and names texts; nothing here is acted on (lesson standard section 11, P26)
  blurb: 'Read a short political text, work out who it speaks for and what it wants done, and name it from the words in the text that decide it, not from a label someone has thrown at it.',
  // Order of the course (docs/rebuild/ideology-plan.md, part b). u1 teaches the first question; u2 to u5 each teach one
  // of its branches. Until a unit is rebuilt, the old unit in the same position of standard0.js is shown in its place.
  units: ['u1', 'u2', 'u3', 'u4', 'u5'],
  // The areas of life a text's story can be set in. case.setting must be one of these; case.topic carries the detail.
  // A fixed list is what makes "three settings" and "a different setting" checkable (lesson standard W5.3, V33).
  settings: ['work', 'money', 'housing', 'health', 'schooling', 'town', 'borders', 'faith'],
  // "Where this key stops", shown on the reference screen.
  limits: [
    { h: 'This course reads a text, not a person or a party',
      text: 'It names what one short text says. People and parties say different things in different places, and their words, their record and their leaders do not always agree, so informed people reach different conclusions about the same party. This course tells you which questions to put to a text. It gives no verdict on a living party or person.' },
    { h: 'Where the lines fall is argued over',
      text: 'Historians disagree about where some of these names begin and end. Some keep the word fascist for Europe between the two world wars and others use it more widely; whether keeping private owners and taxing them to pay for services counts as socialist is argued both ways. This course draws one line for each name, says where it has drawn it, and goes by what a short text can show: who it sets against whom, what it wants done with the businesses, and what it wants done with elections.' },
    { h: 'These words are also used as insults',
      text: 'In an argument, fascist, socialist, communist or globalist is usually thrown to condemn, not to describe. Describing what a text says and attacking it are different jobs, and this course is only for the first.' },
    { h: 'Short texts often leave things unsaid',
      text: 'A slogan or a short speech may say nothing that decides between two names. There are answers for that, and giving one is a correct reading, not a failure. What it never does is fill a silence with a guess about what the speaker would probably want.' },
    { h: 'Some systems are only lightly covered',
      text: 'Rule by religious authorities, rule by experts, and political traditions outside Europe and North America are covered lightly or not at all. The first question still applies to them, but its answers may not fit.' },
    { h: '“Liberal” means different things',
      text: 'In the United States a liberal is usually someone on the center-left; in much of Europe it is someone who wants a small government and free markets. There is a name for each, and the answer goes by what the text asks for, never by the word.' }
  ],
  // What changed at each revision (lesson standard R1). One entry for every revision from 1 to rev.
  history: [
    { rev: 1, date: '2026-10-05', change: 'First version under lesson standard 1: the key rewritten in plain words. The two flat questions became a first question with five answers, one of them for a text that speaks for no side, and four branches whose questions end every route in one name. Four names were added where a text says nothing more or nothing extreme, so that such texts have somewhere to go.' },
    { rev: 2, date: '2026-10-05', change: 'Plain words: the lesson machinery\'s own names ("key", "route" and so on) replaced with plain ones.' },
    { rev: 3, date: '2026-10-05', change: 'American English: dollars, US words and spelling.' }
  ]
});
