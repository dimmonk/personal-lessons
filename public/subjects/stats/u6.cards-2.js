// Statistical Claims, Unit Six, part one (second half): the second name, a group picked at its worst or best, and the card for a story that shows two answers.
// The arithmetic is shown on the meet card: ten scores measured twice with nothing done, and what happens to the group at each end.

FC.cards('stats', 'u6', [

  /* ---------- Regression to the mean ---------- */
  { id: 'meet-regression', kind: 'meet', outcome: 'regression',
    link: 'Next: a group picked because it was doing badly, and then given something.',
    case: 'k-quizclass', mark: 'K1',
    explain: [
      'The three students were picked because they scored lowest. That alone makes their rise hard to trust. A quiz score is what a student knows plus how the day went, and some of those three had a bad day. The next quiz is a new day, so their scores move back up toward where they usually are, with no tutoring at all.',
      'Here is what happens with no tutoring. A class of ten sat the same quiz two weeks running, with no help in between. The three lowest first scores (40, 46 and 52) averaged 46. The same three scored 50, 55 and 60 the next week, an average of 55: a gain of 9 points with nobody doing anything. The three highest averaged 88, then 82. The whole class stayed at about 67. So the teacher’s 9 points is what any low-scoring group shows, and her figure cannot tell tutoring from no tutoring.'
    ],
    spot: [
      { do: 'Find how the group was picked: the three lowest scorers.', why: 'A group picked for its worst (or best) result is the one that moves back.' },
      { do: 'Find the change afterward: the three went from 46 to 55.', why: 'A move back toward usual is what you would see with nothing done.' },
      { do: 'Check who gets the credit: “The tutoring worked.”', why: 'The move back is being read as the effect of what was done in between.' }
    ],
    feature: { step: 'K1', option: 'extreme' },
    name: 'This is {o:regression}. “The mean” is the plain average, the usual level, and “regression” means going back.',
    act: [
      { do: 'Ask how the group was picked.', why: 'If it was picked for its worst or best result, expect it to move back with nothing done.' },
      { do: 'Ask for a group just as extreme that was left alone, such as three other low scorers with no tutoring.', why: 'Only that group shows how much of the rise is the tutoring.' }
    ] },

  { id: 'check-regression', kind: 'check', after: 'regression',
    case: 'k-heartrate',
    ask: { type: 'option', step: 'K1', among: ['anyway', 'extreme'] } },

  { id: 'exc-extreme', kind: 'exception', looksLike: 'nocontrol', is: 'regression', ledger: 'nocontrol~regression',
    h: 'A group picked at its worst, with nothing to set beside it',
    link: 'Most real stories show both: a group picked at its worst, given something, with no one to compare it with. You have already met one.',
    case: 'k-quizclass',
    setup: 'The teacher never followed students who went without tutoring, and that is the sign of {o:nocontrol}. Yet the class quiz is {o:regression}.',
    prompt: { kind: 'phrase', answer: 'The three lowest scorers, who average 46, get a week of extra tutoring' },
    because: [
      'Both fit: no group went without, and the group was picked at its worst. The answer is {a:K1.extreme} because it says more. “No group went without” only says that something is missing. “Picked at its worst” says why the scores would rise with nothing done.',
      'Most stories like this show both, so expect it often.'
    ],
    take: 'To settle either one you would ask for the same thing: a second group, just as extreme, that was left alone and measured the same way.' }
]);
