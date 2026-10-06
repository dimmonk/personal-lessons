// Basic Math, Unit Five, part six: the key's one question, the check on it, and the card that closes the unit after the drill.
// Basic Math is not an action subject (subject.action is false), so the unit has no plan card (lesson standard A11, P26).
// The app prints, on the question card: the question, what it is for, each answer, why it decides, and for every pair
// already compared the question that tells it apart. Three pairs of kinds have no look-alike card of their own: the ledger names
// this card as the one that teaches them (taughtIn).

FC.cards('math', 'u5', [

  { id: 'q-c1', kind: 'question', step: 'C1',
    h: 'The one question that tells the five kinds apart',
    link: 'At the foot of each kind’s first card you saw the question with one answer under it. This card puts the question and its five answers in one place and says why it is asked before any working.',
    decides: [
      'A wrong procedure gives a number as neat as the right one, and nothing in the number says which was meant. Only the words of the problem do.'
    ],
    how: [
      'Read the last sentence of the problem first, because the question is usually there, and find what it asks: how many different results there are, or how likely something is. Mark those words, and then look for the words that say how the choices are made.',
      'If it asks how many, ask whether each choice has a list of its own ({a:C1.lists}) or whether the picks come out of one group. If they come out of one group, ask whether a different order is a different result ({a:C1.order}) or the same one ({a:C1.group}). If it asks how likely, ask whether it is how likely it is that one or more of a set of separate things happens ({a:C1.atleast}) or how likely it is that a result is right ({a:C1.test}).'
    ],
    whenBoth: 'A problem can seem to be both {o:multprin} and {o:comb}, or both {o:complement} and {o:multprin} or {o:baserate}. The line for each pair below says what settles it.' },

  { id: 'check-c1', kind: 'check', after: 'C1',
    case: 'm5-wd-songs',
    ask: { type: 'step', step: 'C1' } },

  { id: 'recap-chance', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now worked problems of all five kinds on your own. This card puts the unit in one place.',
    carry: [
      'Before any working, ask what is being counted, or what chance is wanted, and point to the words that say it. The question is: {q:C1}',
      'A choice with a full list of its own for each pick leads to {o:multprin}. One group with each pick using someone up leads to {o:perm} when the order counts, and to {o:comb} when it does not. The chance that one or more of a set of separate things happens leads to {o:complement}. A test result and how far to trust it lead to {o:baserate}.',
      'For {o:multprin}: name each choice, count its full list, and multiply the counts.',
      'For {o:perm}: write how many can be picked each time, falling by one for each pick, and multiply them.',
      'For {o:comb}: count the picks in order, as for {o:perm}, then divide by the number of orders one chosen group can be put in.',
      'For {o:complement}: multiply the chances that each thing does not happen, and take that away from 1. Do not add the chances.',
      'For {o:baserate}: imagine a large group, count the right and the wrong positive results, and divide the right ones by all of them. How rare the thing is decides it.'
    ] }
]);
