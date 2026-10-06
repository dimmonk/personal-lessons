// Statistical Claims, Unit Six, part two (first half): two groups that put themselves where they are. Confounding, with its arithmetic, and the check that follows it.

FC.cards('stats', 'u6', [

  /* ---------- Confounding ---------- */
  { id: 'meet-confound', kind: 'meet', outcome: 'confound',
    link: 'So far the figures came from one group, measured before and after something was done. The next name is about two groups set side by side: people who did something and people who did not. The first thing to ask about two such groups is who decided which group each person was in.',
    case: 'k-shake', mark: 'K1',
    strip: [
      'Two groups are set side by side: 100 lifters who bought the shake and 300 who did not.',
      'Nobody formed the groups. Each lifter chose whether to buy the shake.',
      'There is a real difference in the result: an average gain of 70 pounds against 32.',
      'Something else differs between the groups: how often the lifters train.'
    ],
    explain: [
      'The lifters who chose the shake are mostly frequent trainers: 75 of the 100 train four or more days a week, against 45 of the other 300. Frequent training can build a strong squat on its own, whatever a lifter drinks afterward. So the shake and the big gain both go along with frequent training. Something else, here how often people train, goes with the thing and could produce the result on its own.',
      'Compare lifters who train alike. Among the 120 who train four or more days a week, the shake buyers gained an average of 85 pounds and the others 83. Among the 280 who train less, buyers gained 25 and the others 23. The company’s 38 pounds shrinks to 2. About 36 of the 38 was the training, and at most 2 was the shake. The shake may well be worth 2 pounds. The company’s figure cannot show it, and it certainly does not show 38.'
    ],
    feature: { step: 'K1', option: 'behind' },
    name: [
      'The name for this is {o:confound}. To "confound" is to mix up. The shake and the training are mixed up together in the figures: the lifters who have one mostly have the other, so the figures cannot say which of them produced the gain.',
      'The words that carry this kind of claim are "so", "makes", "because" and "which is why", set after a figure for two groups.'
    ],
    act: 'Name one other way the two groups differ that could produce the same result. If you can, and the claim does not rule it out, do not act on the claim. Ask for people who are alike in that other thing, or for a test in which a draw formed the groups.' },

  { id: 'check-confound', kind: 'check', after: 'confound',
    case: 'k-bankapp',
    ask: { type: 'option', step: 'K1', among: ['anyway', 'extreme', 'behind'] } }
]);
