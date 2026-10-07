// Statistical Claims, Unit Six, part two (first half): two groups that picked their own side. Confounding, with its arithmetic, and the check that follows it.

FC.cards('stats', 'u6', [

  /* ---------- Confounding ---------- */
  { id: 'meet-confound', kind: 'meet', outcome: 'confound',
    link: 'Next: two groups side by side, where people picked their own side.',
    case: 'k-shake', mark: 'K1',
    explain: [
      'The lifters who bought the shake are mostly frequent trainers: 75 of the 100 train four or more days a week, against 45 of the other 300. Frequent training builds a strong squat on its own, whatever you drink afterward. So the shake and the big gain both come with frequent training, and the figures cannot say which one did the work.',
      'Compare lifters who train alike. Among the 120 who train four or more days a week, shake buyers gained 85 pounds and the others 83. Among the 280 who train less, buyers gained 25 and the others 23. The company’s 38 pounds shrinks to 2. About 36 of the 38 was the training. The shake may be worth 2 pounds, but the company’s figure cannot show even that.'
    ],
    spot: [
      { do: 'Find the two groups: 100 lifters who bought the shake and 300 who did not.', why: 'The claim sets one group beside the other.' },
      { do: 'Check who put them there: each lifter chose whether to buy.', why: 'When people choose, the groups can differ in more than the thing.' },
      { do: 'Look for something else that differs: 75 of the 100 buyers train four or more days a week, against 45 of the 300.', why: 'If that could produce the result by itself, the claim has not shown the thing did.' }
    ],
    feature: { step: 'K1', option: 'behind' },
    name: 'This is {o:confound}. To “confound” is to mix up: the shake and the training are mixed up in the figures.',
    act: [
      { do: 'Name one other way the two groups differ, such as how often they train.', why: 'That is the thing that could have produced the result.' },
      { do: 'Ask for people who are alike in that other thing, or for a test where a draw formed the groups.', why: 'Then the only difference left is the thing itself.' },
      { do: 'If the claim does not rule it out, do not act on the claim.', why: 'It has not earned your belief yet.' }
    ] },

  { id: 'check-confound', kind: 'check', after: 'confound',
    case: 'k-bankapp',
    ask: { type: 'option', step: 'K1', among: ['anyway', 'extreme', 'behind'] } }
]);
