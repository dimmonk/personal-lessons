// Psychology: subject record. Revision is a real field (it used to be parsed out of an "eyebrow" label).
FC.subject('psychology', {
  name: 'Psychology',
  rev: 4,                 // subject revision; goes up whenever this record, the key or the specimens change (lesson standard R2)
  standard: 1,            // lesson-standard version the subject's key was written to
  action: false,          // true for subjects the learner acts on (Scams, Wealth Preservation, Statistical Claims)
  blurb: 'Before you reach for a label like “narcissist” or “manipulative”, work out what kind of case you are looking at, and name it from the words in the case that decide it.',
  units: ['u1', 'u2', 'u3', 'u4'],   // order of the course: the gate, then one unit per branch of the key
  // The areas of life a case can be set in. case.setting must be one of these; case.topic carries the detail.
  // A fixed list is what makes "three settings" and "a different setting" checkable (lesson standard W5.3, V33).
  settings: ['work', 'home', 'money', 'health', 'leisure', 'learning', 'community'],
  // "Where this key stops", shown on the reference screen.
  limits: [
    { h: 'These questions do not diagnose anyone',
      text: 'The questions sort a short account of what someone said or did. It gives no medical diagnosis: the names for lasting ways of being are ones professionals use only after long assessment, and here they name what a case shows, not a person. One of the first answers is there so that an ordinary hard week has somewhere to go. If you are worried about someone’s safety, or your own, that is a matter for a professional and not for a set of questions.' },
    { h: 'The questions name reasoning, not people',
      text: 'One sentence from someone shows you one piece of reasoning. It does not tell you what kind of person they are, and the same person will do something different next week.' },
    { h: 'The names overlap in real life',
      text: 'Each case gets one name by the earliest thing you can point to in it. Researchers do not all draw the lines in the same place, and real cases often mix two of these.' },
    { h: 'Use it on yourself first',
      text: 'These are easier to see in people you disagree with. That is itself one of the five.' }
  ],
  // What changed at each revision (lesson standard R1). One entry for every revision from 1 to rev.
  history: [
    { rev: 1, date: '2026-10-04', change: 'First version under lesson standard 1: the reasoning branch of the key rewritten in plain words, five specimens re-keyed.' },
    { rev: 2, date: '2026-10-05', change: 'Blurb reworded so it no longer types key answers by hand.' },
    { rev: 3, date: '2026-10-05', change: 'Whole key rewritten in plain words: the first question has four answers, including a passing moment; the branches for something one person does to another and for a lasting way someone is each ask one question, and each has a name for cases where nothing is wrong. Unit One rebuilt as the gate unit.' },
    { rev: 4, date: '2026-10-05', change: 'Plain words: the lesson machinery\'s own names ("key", "route" and so on) replaced with plain ones.' }
  ]
});
