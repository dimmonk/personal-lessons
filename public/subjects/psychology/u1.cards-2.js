// Psychology, Unit One, part two: the second kind (something one person does to another) and the first look-alike pair.
// The app prints "how to tell them apart" and the side-by-side table; neither is typed here.

FC.cards('psychology', 'u1', [

  /* ---------- Something done to someone ---------- */
  { id: 'meet-tactic', kind: 'meet', family: 'tactic',
    link: 'Second: one person saying or doing something to another, about them.',
    case: 'g-deadline', mark: 'D1',
    explain: [
      'Carla is not explaining a choice of her own. Her words are aimed at Ben: first that he got the date wrong, then that he is the disorganized one. And they work: Ben goes back to his desk doubting himself.',
      'This is not a verdict. Praise or an apology counts too. Whether it was fair is the next question, not this one.'
    ],
    spot: [
      { do: 'Find the target: Ben.', why: 'There is always a person on the receiving end.' },
      { do: 'Check the words are about him: he is the disorganized one.', why: 'Words about the speaker’s own choice would be {a:D1.reasoning}.' },
      { do: 'Look at what it did to him: he checks his own calendar.', why: 'The effect on the target shows where the words landed.' }
    ],
    feature: { step: 'D1', option: 'tactic' },
    name: 'This is {a:D1.tactic}. Take Ben out of the story and nothing is left.' },

  { id: 'check-tactic', kind: 'check', after: 'tactic',
    case: 'g-phonecall',
    ask: { type: 'option', step: 'D1', among: ['reasoning', 'tactic'] } },

  /* ---------- The first pair people mix up ---------- */
  { id: 'look-reasoning-tactic', kind: 'lookalike', ledger: 'reasoning~tactic',
    link: 'Both of these can sound like someone explaining themselves. The test is who the words are about.',
    cases: ['g-birthday-brother', 'g-birthday-wife'],
    instruction: 'Both stories are about Dev and the birthday he forgot. Compare one thing: who his words are about, and who hears them.',
    prompt: { kind: 'which', option: 'D1.tactic', answer: 'g-birthday-wife' },
    difference: [
      'In Story A, Dev explains what he did, and the explanation is about Dev: a month of long days. His brother just listens. That is {a:D1.reasoning}.',
      'In Story B, Dev tells his wife she is too sensitive. The words are about her, said to her, and she ends up apologizing. That is {a:D1.tactic}.',
      'How bad it sounds does not decide it. Who the words are about does.'
    ] }
]);
