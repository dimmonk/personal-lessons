// Statistical Claims, Unit Six, part one (second half): the second name, a group picked at its worst or best, and the first two look-alike pairs.
// The arithmetic is shown in full on the meet card: ten scores measured twice with nothing done, and what happens to the group at each end.

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
      'The three students were not picked by chance, and they did not ask to be picked. They were picked because they had the three lowest scores on the first quiz. That one fact is enough to make the rise unreliable as a sign of the tutoring.',
      'A quiz score is not only how much a student knows. It is how much they know plus how the day went: a good night’s sleep, a lucky guess, a question they happened to have studied, or the opposite of each. Among the three lowest scorers, some are low partly because of a bad day. The next quiz is a new day. The bad day does not come back, and their scores move up toward where they usually are. That happens with no tutoring at all.',
      'Here is what it looks like when nobody is tutored. Take a class of ten students who sit the same quiz two weeks running and get no help in between. First score, then second score, from the lowest first score to the highest: 40 then 50, 46 then 55, 52 then 60, 60 then 62, 64 then 64, 70 then 66, 74 then 66, 82 then 76, 88 then 82, 94 then 88.',
      'The three lowest first scores are 40, 46 and 52, which add up to 138 and average 46. The same three students scored 50, 55 and 60 the next week, which add up to 165 and average 55. That is a gain of 9 points, and nobody did anything. The three highest first scores are 82, 88 and 94, which average 88, and the same students averaged 82 the next week, a fall of 6. The whole class averaged 67 the first week and 66.9 the second. Nothing in the class changed. The group at the bottom went up and the group at the top went down, because of how they were picked.',
      'So the teacher’s gain of 9 points is exactly what a class with no tutoring shows. This does not show that tutoring did nothing. It shows that this figure cannot tell tutoring from no tutoring. What would tell them apart is a second group of equally low scorers who did not get the tutoring: pick the six lowest, give the tutoring to three of them chosen by a draw, as when names are drawn from a hat, and set how much each group gained side by side.',
      'Like the sleep app, this case has no group of equally low scorers who went without. Both things are true of it, and only one of the two answers can be given.'
    ],
    feature: { step: 'K1', option: 'extreme' },
    name: [
      'The name for this is {o:regression}. "The mean" is the plain average, the usual level. "Regression" means going back. So the name says: back toward the usual level.',
      'When a case shows both this answer and {a:K1.anyway}, the answer is {a:K1.extreme}. It says why the change would have come with no tutoring, where the other answer says only that nothing shows what would have happened.'
    ] },

  { id: 'again-regression', kind: 'again', outcome: 'regression',
    link: 'The class quiz gave you what to point to: {needs:regression}. Here it is on a road, with no student in sight.',
    first: 'k-quizclass', second: 'k-roadsigns', step: 'K1',
    instruction: 'Find what the two cases share. Ignore the story (a class, a city’s roads). Look at one thing only: why these particular students, or these particular intersections, were picked.',
    prompt: { kind: 'phrase', answer: 'picks the five intersections that had the most crashes last year' },
    shared: [
      'In both cases the group was not picked by chance, and nobody chose to be in it. It was picked because it was at its worst: the three lowest scores, the five intersections with the most crashes. In both, something was then done to the group (tutoring, new signs), the group was measured again, and the new figure was nearer the usual level. In both, someone says that what was done caused the change.',
      'Crashes at an intersection are like quiz scores. Part of the count is how dangerous the intersection is, and part is luck: which year the bad accidents happened, who was in a hurry that day. The five intersections with the most crashes last year are partly the five with the worst luck. Luck does not repeat on request. If they had 50 crashes last year because of a run of bad luck, then 30 might be what an ordinary year gives them with no signs at all.',
      'The two stories share nothing else, so this is not about students or about roads. It holds wherever a group is picked because it was at its worst or best, something is done to it, and the change afterward is read as the effect of what was done. That is what {o:regression} names.'
    ] },

  { id: 'portrait-regression', kind: 'portrait', outcome: 'regression',
    link: 'What you point to is how the group was picked. Here is the rest of the picture.',
    typical: [
      'A group is picked because it is at an extreme: the worst scores, the most crashes, the sickest patients, the highest prices, or the best year. Then it is measured again.',
      'A change is seen afterward, and it is a move back toward the usual level: what was low goes up, and what was high comes down.',
      'Something was done in between: tutoring, signs, a new manager, a pill. The claim gives that as the cause of the change.',
      'The more extreme the pick, the more of the extreme was luck, and the more of it comes back. Picking the single worst of a hundred gives a bigger drift back than picking the worst half.',
      'Any figure that mixes a steady part with luck does this: test scores, crash counts, a team’s results, one day’s blood pressure. A pick at an extreme is a pick of the luck as well.',
      'It is a fact about the group as a whole. Some of the three lowest scorers may drop again on the second quiz. The group average is what drifts.'
    ],
    not: [
      'Going back toward the usual level does not mean that what was done was useless. The tutoring may have helped, and the signs may have saved lives. The name says that a drift back would have shown up with nothing done, so the figure cannot tell the two apart.',
      'And picking a group at an extreme is not a mistake. It is a sensible way to find who most needs help. The mistake is reading what comes after as the effect of what was done, with nothing set beside it.'
    ],
    wild: ['"We acted on our worst performers, and they improved."', '"The worst offenders got better once we cracked down."', '"After a record year, things fell back. The new boss must be worse."', '"Sales were awful last quarter, so we changed the plan, and they bounced back."'],
    self: 'In your own life it is the week you felt worst, when you tried a remedy and felt better after, or the day you played your best round of golf, when the next round was worse and you decided you had changed something.',
    ask: '"Why were these ones picked?" If they were picked because they were at their worst or best, ask how much of the change would have come with nothing done.',
    act: [
      'Ask how the group was picked. If it was picked because it was at its worst, or at its best, say so out loud.',
      'Ask for a second group that was equally extreme, was measured twice and was left alone, or for a group picked the same way and then split by a draw.',
      'Do not widen the program, pay a bonus or blame someone on this result alone.'
    ] },

  { id: 'check-regression', kind: 'check', after: 'regression',
    case: 'k-heartrate',
    ask: { type: 'option', step: 'K1', among: ['anyway', 'extreme'] } },

  { id: 'refute-after', kind: 'refute', about: 'nocontrol',
    h: 'A wrong idea about what comes after',
    link: 'The last cards were about results that follow something that was done. People often take the order itself as the proof.',
    idea: '"We did it, and the very next month it got better. That proves it worked."',
    verdict: 'This is wrong. Coming after something is not the same as being caused by it.',
    right: [
      'Something coming after something else shows only that it came after. Many things get better from one month to the next with nothing done: a bad patch ends, a season turns, a group picked at its worst drifts back toward its usual level. Before you give what was done the credit, ask what else was happening that month and what the figure would have done if nothing had been done.',
      'What would show that it worked is a second group in the same position that was left alone and counted in the same way. If that group got better by less, the difference between the two groups is what the thing did. If it got better by the same amount, nothing was shown.'
    ],
    testedBy: ['k-claim-after', 'k-claim-demo'] },

  /* ---------- The first two look-alike pairs ---------- */
  { id: 'look-nocontrol-regression', kind: 'lookalike', ledger: 'nocontrol~regression',
    link: 'These two answers look alike. In both a result comes after something was done, and neither has a group that was left alone. This card shows what separates them.',
    cases: ['k-coach-all', 'k-coach-worst'],
    instruction: 'Both cases are about the same call center and the same coaching program, and in both the complaints fell. Compare one thing: how the agents who got the coaching were picked.',
    prompt: { kind: 'which', option: 'K1.extreme', answer: 'k-coach-worst' },
    difference: [
      'In Case A the coaching went to all 40 agents, and complaints per agent fell from 5.0 to 4.2. Nobody was picked because they were at an extreme, so nothing about the way the group was formed explains the fall. Nothing shows what would have happened anyway. The answer is {a:K1.anyway}, and the case is {o:nocontrol}.',
      'In Case B the coaching went only to the ten agents with the most complaints last month, and their complaints fell from 9.0 to 6.2. Those ten were picked because they were at their worst, so part of the fall would be expected with no coaching at all. The answer is {a:K1.extreme}, and the case is {o:regression}.',
      'The program and the claim are the same in both. In Case A the figure has nothing to set beside it. In Case B it has nothing to set beside it, and the group was also picked at its worst.'
    ] },

  { id: 'exc-extreme', kind: 'exception', looksLike: 'nocontrol', is: 'regression', ledger: 'nocontrol~regression',
    h: 'A group picked at its worst, with nothing to set beside it',
    link: 'The last card separated the pair with two tidy cases. Real cases are often less tidy: a group picked at its worst, given something, with nothing to set beside it. You have already met one.',
    case: 'k-quizclass',
    setup: 'Look again at the class quiz. The teacher has no group of students who went without tutoring, which is what you point to for {o:nocontrol}. Yet this case is {o:regression}.',
    prompt: { kind: 'phrase', answer: 'The three lowest scorers, who average 46, get a week of extra tutoring' },
    because: [
      'Both answers are true of the case. There is no group that went without, and the group was picked at its worst. It gets the answer {a:K1.extreme} because that answer says more. "Nothing shows what would have happened" says only that something is missing. "Picked at its worst" says why a change should be expected with nothing done: the lowest scorers are partly the ones who had a bad day, and a bad day does not come back.',
      'A group that was picked at its worst and given something, with nothing to set beside it, is the usual form of {o:regression}. So this card is not a rare corner. Most of the cases of this name show both answers.'
    ],
    take: 'This is decided this way on purpose, and it is worth knowing that it is a choice. In life the two overlap, and what you would ask for to settle either one is much the same: a second group, as extreme as the first, that was left alone and measured in the same way. Each case gets one name, so that two people using these questions reach the same answer and can each say why.' },

  { id: 'look-nocontrol-fair', kind: 'lookalike', ledger: 'nocontrol~cause_ok',
    link: 'A claim that something worked can have nothing to set beside it, or it can have been tested fairly, which the first question answers with {a:S1.holds}. The two can sound the same. This card puts them side by side.',
    cases: ['k-reading-all', 'k-reading-lottery'],
    instruction: 'Both cases are about the same library and the same summer reading challenge. Compare one thing: whether there is a second group of children, and how the children in each group were decided.',
    prompt: { kind: 'which', option: 'S1.holds', answer: 'k-reading-lottery' },
    difference: [
      'In Case A the library counts the 90 children who joined, and none who did not. There is no second group, so nothing shows what the children would have read anyway. The first answer is {a:S1.cause}, and the second answer, to {q:K1}, is {a:K1.anyway}.',
      'In Case B there are two groups of 60, and a draw from a hat decided who was in which. A draw means that nothing else is likelier to be in one group than the other: not keener readers, not keener parents. Both groups were counted from the library’s own records in the same way. The answer is {a:S1.holds}, because the claim rests on {plain:cause_ok}.',
      'The library and the challenge are the same in both. In Case A the figure has nothing to set beside it. In Case B a second group formed by chance went without, and the difference between the groups is what the claim rests on.'
    ] }
]);
