// Statistical Claims, Unit Two, part two (close): the two cards that close the unit after the drill.
// This is an action subject (subject.action is true), so the unit ends with a plan card.

FC.cards('stats', 'u2', [

  { id: 'recap-holds', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now run the questions on claims that hold. This card puts the unit in one place, in the words used all the way through.',
    carry: [
      'When the first question gives {a:S1.holds}, one question is left: {q:H1} Point to the words, then give the name.',
      'A claim that holds has earned exactly what it says. One figure about one group is not a trend, a fall is not a reason, and a gap is not a cause. Repeat it for what it says and for no more.',
      'A figure from a few people is a little off by luck. The {t:margin} says how far.',
      '{o:cause_ok} is the only name that may say what made the difference, and the words to point to are the ones that say a lottery formed the groups.',
      'The story can hint at more than the claim says. Go by what the claim says.',
      'A claim that looks like these may still go wrong. The first question comes before this one, so run it first and give this unit’s answer only if the first question gives {a:S1.holds}.'
    ] },

  { id: 'plan-holds', kind: 'plan', optional: true,
    h: 'A plan, if you want one',
    link: 'Knowing the question is not the same as asking it at the moment a claim reaches you. This time the claim is one that holds, and the plan is about saying only as much as it has earned.',
    intro: 'You do not have to write one. If you do, it has two halves: the moment, and what you will do. Start from one of the lines below, or write your own. Nothing is saved until you press the button, and it stays on this device.',
    cues: [
      { cue: 'a headline gives me a figure about "everyone" or "the public"', then: 'look for how the people were chosen and how many answered, and repeat the figure only for the group it names' },
      { cue: 'a report shows a number that rose or fell', then: 'check that it was counted the same way each time, and say only that it rose or fell' },
      { cue: 'someone sets two things side by side', then: 'check that they are alike and the numbers are given, and say which is bigger and stop there' },
      { cue: 'a claim says that something works', then: 'look for who decided which group got it, and repeat the cause only if a lottery did' },
      { cue: 'a claim passes every check', then: 'say what it shows, say what it does not show, and pass it on with both' }
    ] }
]);
