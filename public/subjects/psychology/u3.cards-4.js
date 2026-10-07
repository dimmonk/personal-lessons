// Psychology, Unit Three, part two (second half): the fourth name, and the normal back-and-forth.
// The normal back-and-forth is taught as a name like the others, with its own cards, because it is the answer most stories get.

FC.cards('psychology', 'u3', [

  /* ---------- Love-bombing ---------- */
  { id: 'meet-lovebomb', kind: 'meet', outcome: 'lovebomb',
    link: 'Fourth: a rush of attention at the very start of a relationship, taken away weeks later.',
    case: 'l-wedding', mark: 'T1',
    explain: [
      'Attention is a good thing. Keen friends and partners give praise, gifts and time, and a fast friendship is not a fault. So the first half on its own proves nothing.',
      'What matters is how much attention there is, compared with how long the two have known each other, and what happens to it later. Callum’s lasts only while Priya does what he wants. When she asks for a weekend alone, it stops and comes back as criticism. First she was made to feel very special, then to feel she lost it by saying no, so she works to get it back.'
    ],
    spot: [
      { do: 'Compare the attention with the time: “the one” on the second date, forty texts a day by the fourth.', why: 'Warm is fine; far more than the time explains is the warning.' },
      { do: 'Watch what happens when she says no: Callum goes silent for four days.', why: 'The attention was never free: it depended on her going along.' },
      { do: 'Listen for the criticism: “I thought you were different from the others who put themselves first.”', why: 'Praise turning into blame is the second half.' },
      { do: 'Call it this only if both halves are there.', why: 'A flood alone is a keen friend; pulling back alone is a cooling relationship.' }
    ],
    feature: { step: 'T1', option: 'floodpull' },
    name: 'This is {o:lovebomb}: a lot of attention arriving all at once, then taken away. It can be a friend, a mentor or a boss, not only a partner.' },

  { id: 'check-lovebomb', kind: 'check', after: 'lovebomb',
    case: 'l-check',
    ask: { type: 'option', step: 'T1', among: ['denymemory', 'reverse', 'ownfault', 'floodpull'] } },

  /* ---------- A normal back-and-forth ---------- */
  { id: 'meet-ordexchange', kind: 'meet', outcome: 'ordexchange',
    link: 'Fifth: none of the four. This is the answer you will use most.',
    case: 'o-bins', mark: 'T1',
    explain: [
      'Priya is fed up, and says so. Sam owns up and offers a fix. That is all there is. Most of what people say to each other is like this: they complain, disagree, defend themselves, forget things, snap, apologize and say kind things.',
      'Once you know four names, it is tempting to find one in everything. Don’t. {o:ordexchange} can be rude, unfair or wrong, and can hurt, and it is still not one of the four. How upset anyone is does not decide it.'
    ],
    spot: [
      { do: 'Find what one person says to the other: Priya complains about the trash.', why: 'A complaint, a disagreement, a defense and praise all count.' },
      { do: 'See how the other answers: Sam says “You’re right, I forgot” and offers to fix it.', why: 'Owning up, or disagreeing plainly, is a normal answer.' },
      { do: 'Check the four one by one: Sam denies nothing, attacks no one, pours on no attention and accuses no one.', why: 'If none of the four is there, this is the answer.' }
    ],
    feature: { step: 'T1', option: 'plain' },
    name: 'This is {o:ordexchange}. It is the answer for any story with none of the other four, however rude or unfair it is.' },

  { id: 'check-ordexchange', kind: 'check', after: 'ordexchange',
    case: 'o-check',
    ask: { type: 'option', step: 'T1', among: ['denymemory', 'reverse', 'ownfault', 'floodpull', 'plain'] } }
]);
