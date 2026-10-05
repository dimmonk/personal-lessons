// Psychology: subject record. Revision is a real field (it used to be parsed out of an "eyebrow" label).
FC.subject('psychology', {
  name: 'Psychology',
  rev: 1,                 // subject revision; goes up whenever this record, the key or the specimens change (lesson standard R2)
  standard: 1,            // lesson-standard version the subject's key was written to
  action: false,          // true for subjects the learner acts on (Scams, Wealth Preservation, Statistical Claims)
  blurb: 'Tell a bad moment from a stable pattern, and a tactic from a personality, before reaching for a label.',
  units: ['u1', 'u2', 'u3', 'u4', 'u5', 'u6'],   // order of the course; only u2 is rebuilt in this exemplar
  // The areas of life a case can be set in. case.setting must be one of these; case.topic carries the detail.
  // A fixed list is what makes "three settings" and "a different setting" checkable (lesson standard W5.3, V33).
  settings: ['work', 'home', 'money', 'health', 'leisure', 'learning', 'community'],
  // "Where this key stops", shown on the reference screen. Only the lines Unit Two leans on are given here.
  limits: [
    { h: 'The key names reasoning, not people',
      text: 'One sentence from someone shows you one piece of reasoning. It does not tell you what kind of person they are, and the same person will do something different next week.' },
    { h: 'The names overlap in real life',
      text: 'The key gives each case one name by the earliest thing you can point to in it. Researchers do not all draw the lines in the same place, and real cases often mix two of these.' },
    { h: 'Use it on yourself first',
      text: 'These are easier to see in people you disagree with. That is itself one of the five.' }
  ],
  // What changed at each revision (lesson standard R1). One entry for every revision from 1 to rev.
  history: [
    { rev: 1, date: '2026-10-04', change: 'First version under lesson standard 1: the reasoning branch of the key rewritten in plain words, five specimens re-keyed.' }
  ]
});
