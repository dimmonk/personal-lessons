// Statistical Claims, Unit Six, part one (second half): the second name, a group picked at its worst or best, and the card for a case that shows two answers.
// The arithmetic is shown on the meet card: ten scores measured twice with nothing done, and what happens to the group at each end.

FC.cards('stats', 'u6', [

  /* ---------- Regression to the mean ---------- */
  { id: 'meet-regression', kind: 'meet', outcome: 'regression',
    link: 'The last answer was about a result with nothing to set beside it. The next is about a group that was picked for a reason that, by itself, is enough to move the result. Here is a class, a quiz and a week of tutoring.',
    case: 'k-quizclass', mark: 'K1',
    strip: [
      'Three students were picked because they had the three lowest scores on the first quiz.',
      'Something was done to them: a week of tutoring.',
      'Their scores went up on the next quiz, which was equally hard.',
      'The claim says the tutoring caused the rise.'
    ],
    explain: [
      'The three students were picked because they had the three lowest scores on the first quiz. That one fact makes the rise unreliable as a sign of the tutoring.',
      'A quiz score is how much a student knows plus how the day went. Among the three lowest scorers, some are low partly because of a bad day. The next quiz is a new day. The bad day does not come back, and their scores move up toward where they usually are, with no tutoring at all.',
      'Here is a class of ten that sat the same quiz two weeks running with no help in between. The three lowest first scores (40, 46 and 52) average 46. The same three students scored 50, 55 and 60 the next week, an average of 55. That is a gain of 9 points, and nobody did anything. The three highest first scores average 88, and the same students averaged 82 the next week. The class as a whole stayed at about 67.',
      'So the teacher’s gain of 9 points is just what a class with no tutoring shows. This does not show that tutoring did nothing. It shows that this figure cannot tell tutoring from no tutoring. What would tell them apart is a second group of equally low scorers who did not get the tutoring.'
    ],
    feature: { step: 'K1', option: 'extreme' },
    name: [
      'The name for this is {o:regression}. "The mean" is the plain average, the usual level. "Regression" means going back. So the name says: back toward the usual level.'
    ],
    act: 'Ask how the group was picked. If it was picked because it was at its worst or best, ask for an equally extreme group that was left alone before you give what was done the credit.' },

  { id: 'check-regression', kind: 'check', after: 'regression',
    case: 'k-heartrate',
    ask: { type: 'option', step: 'K1', among: ['anyway', 'extreme'] } },

  { id: 'exc-extreme', kind: 'exception', looksLike: 'nocontrol', is: 'regression', ledger: 'nocontrol~regression',
    h: 'A group picked at its worst, with nothing to set beside it',
    link: 'Real cases are often untidy: a group picked at its worst, given something, with nothing to set beside it. You have already met one.',
    case: 'k-quizclass',
    setup: 'Look again at the class quiz. The teacher has no group of students who went without tutoring, which is what you point to for {o:nocontrol}. Yet this case is {o:regression}.',
    prompt: { kind: 'phrase', answer: 'The three lowest scorers, who average 46, get a week of extra tutoring' },
    because: [
      'Both answers are true of the case. There is no group that went without, and the group was picked at its worst. It gets the answer {a:K1.extreme} because that answer says more. "Nothing shows what would have happened" says only that something is missing. "Picked at its worst" says why a change should be expected with nothing done.',
      'Most cases of this name show both answers, so this is not a rare corner.'
    ],
    take: 'In life the two overlap, and what you would ask for to settle either one is much the same: a second group, as extreme as the first, that was left alone and measured in the same way.' }
]);
