// Basic Math, Unit Five, part four: the fourth kind (the chance that at least one of several things happens).
// The worked examples (kind solved) are in u5.cards-solved-*.js.

FC.cards('math', 'u5', [

  { id: 'meet-complement', kind: 'meet', outcome: 'complement',
    link: 'This one asks for a chance, not a count: how likely is it that something happens at least once?',
    case: 'm5-wd-coin', mark: 'C1',
    explain: [
      'Write out every run of 3 flips: HHH, HHT, HTH, HTT, THH, THT, TTH, TTT. All 8 are equally likely, and every run except TTT has a head. So 7 of the 8 win: 7 ÷ 8 = 0.875, or 87.5%.',
      'There is a quicker way, because only one run loses: TTT. Three tails in a row is 0.5 × 0.5 × 0.5 = 0.125. You either win or lose, so the two chances add up to 1, and the chance of winning is 1 − 0.125 = 0.875. The flips must be separate, so that the chances of tails can be multiplied.'
    ],
    spot: [
      { do: 'Find the separate things that each have a chance: three flips, 0.5 each.', why: 'One flip does not change the next.' },
      { do: 'Look for “at least one”: at least one head in 3 flips.', why: 'One head, two or three all win.' },
      { do: 'Check the question asks how likely, not how many: how likely is it that the game is won?', why: 'The answer is a chance from 0 to 1, not a count.' }
    ],
    feature: { step: 'C1', option: 'atleast' },
    name: 'This is {o:complement}. Work out the chance that none of them happens, and take it away from 1.' },

  { id: 'check-complement', kind: 'check', after: 'complement',
    case: 'm5-wd-ambulance',
    ask: { type: 'phrase', step: 'C1', say: 'Which words show how many of the ambulances have to be out of action? Tap them.',
           answer: 'How likely is it that at least one ambulance is out of action on a given day?' } }
]);
