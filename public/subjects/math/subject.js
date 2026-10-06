// Basic Math: subject record. Revision is a real field (it used to be parsed out of an "eyebrow" label).
FC.subject('math', {
  name: 'Basic Math',
  rev: 3,                 // subject revision; goes up whenever this record, the key or the specimens change (lesson standard R2)
  standard: 1,            // lesson-standard version the subject's key was written to
  action: false,          // true only for subjects the learner acts on (Scams, Wealth Preservation, Statistical Claims)
  blurb: 'Take a problem with numbers in it from everyday life, such as a recipe for four stretched to seven, a loan, a ladder against a wall or a lottery ticket. Work out what kind of problem it is from what it asks, then solve it with the procedure for that kind, every number shown.',
  // Order of the course. u1 teaches the key's first question (a gate unit, kind C); u2 to u6 are procedure units (kind P),
  // one for each of the first question's answers, in the key's order. Every unit is rebuilt, so the app's own run of the whole
  // key on the specimens (specimens.js) is the last stage of the course, and the old "Running the whole key" is gone.
  units: ['u1', 'u2', 'u3', 'u4', 'u5', 'u6'],
  // The areas of life a problem can be set in. case.setting must be one of these; case.topic carries the detail.
  // A fixed list is what makes "three settings" and "a different setting" checkable (lesson standard W5.3, V33).
  settings: ['home', 'money', 'shopping', 'work', 'travel', 'cooking', 'building', 'leisure', 'health'],
  // "Where this key stops", shown on the reference screen.
  limits: [
    { h: 'The questions sort kinds of problem, not every sum',
      text: 'It covers the kinds of problem this course teaches. An everyday sum, a percentage of an amount, or putting numbers into a calculation you already have is not in it: there is nothing to choose, so do the sum. A chance that is only a share of equally likely ways, such as 5 tickets out of 200, is one division and is not in it either.' },
    { h: 'Some lines between kinds are a decision, not a fact',
      text: 'A rate for each hour, day, month or year is treated as an amount changing over time, and a rate for each thing as a missing number, though the arithmetic can be the same. A model, a map or a shadow is treated as the same shape at different sizes, though it is also a rate. A count of days round a week is treated as whole numbers, though it runs over time. These lines are drawn so that every problem has one set of answers, and each is taught as a case that looks like one kind and is the other.' },
    { h: 'Every answer rests on what the problem assumes',
      text: 'A rate that really stays the same, separate tries that really are separate, growth that really can carry on: the arithmetic cannot check these, and a problem quietly assumes them. Nothing multiplies for ever. A rumor runs out of people who have not heard it, and a model that runs past what it assumes is wrong even when every sum in it is right.' },
    { h: 'Shortcuts and rounded figures are close, not exact',
      text: 'The rule of 72 for doubling, the root of a number worked out to two decimal places, and 3.14 for pi are all rounded. Round only at the end of a calculation, and say that the answer is about that much.' }
  ],
  // What changed at each revision (lesson standard R1). One entry for every revision from 1 to rev.
  history: [
    { rev: 1, date: '2026-10-05', change: 'First version under lesson standard 1: the whole key rewritten in plain words. The first question keeps five answers, each now saying what the problem gives; each answer leads to one question, or to two where the second does work of its own. One kind of problem was split into two, one was added for an amount that changed once, and one became a taught word instead of a kind. All six units are rebuilt, the old course data is removed, and the old Unit Seven, “Running the whole key”, is replaced by the full determination on thirty-five new specimens, one or more for every name.' },
    { rev: 2, date: '2026-10-05', change: 'Plain words: the lesson machinery\'s own names ("key", "route" and so on) replaced with plain ones.' },
    { rev: 3, date: '2026-10-05', change: 'American English: US words and spelling.' }
  ]
});
