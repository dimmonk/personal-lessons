// Basic Math, Unit Five, part four: the fourth kind (the chance that at least one of several things happens).
// The worked examples (kind solved) are in u5.cards-solved-*.js.

FC.cards('math', 'u5', [

  { id: 'meet-complement', kind: 'meet', outcome: 'complement',
    link: 'The first three kinds counted results. The fourth kind asks for a chance instead: how likely it is that one or more of a set of separate things happens. It is found by working out the opposite.',
    case: 'm5-wd-coin', mark: 'C1',
    strip: [
      'There are 3 separate things that can happen: three flips of a fair coin. Each flip has a chance of 0.5 of landing heads, and one flip does not change the next.',
      'The game is won if at least one flip lands heads: one head, two or three would all win.',
      'The question asks how likely that is, a chance, and not a count of results.'
    ],
    explain: [
      'Write out every run of 3 flips, with H for heads and T for tails: HHH, HHT, HTH, HTT, THH, THT, TTH, TTT. That is 8 runs, all equally likely. Every one of them has at least one head except TTT. So 7 of the 8 runs win, and the chance of winning is 7 ÷ 8 = 0.875, which is 87.5%.',
      'Notice what was easy. Counting the winning runs was a chore, but there is only one losing run, TTT. Each flip is tails with a chance of 0.5, and the flips are separate, so the chance of three tails in a row is 0.5 × 0.5 × 0.5 = 0.125, which is 1 in 8.',
      'The game is either won or lost, so the chance of winning and the chance of losing add up to 1: the chance of winning is 1 − 0.125 = 0.875. That is how this kind works: to find the chance that at least one thing happens, find the chance that none of them happens, which is the opposite, and take it away from 1. The things must be separate, because that is what allows the chances of “none” to be multiplied.'
    ],
    feature: { step: 'C1', option: 'atleast' },
    name: 'A problem like this is {o:complement}. “The opposite” of at least one thing happening is that none of them happens, and the procedure works that out and takes it away from 1.' },

  { id: 'check-complement', kind: 'check', after: 'complement',
    case: 'm5-wd-ambulance',
    ask: { type: 'phrase', step: 'C1', say: 'Which words show what has to be found about the separate things? Tap them.',
           answer: 'How likely is it that at least one ambulance is out of action on a given day?' } }
]);
