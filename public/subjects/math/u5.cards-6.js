// Basic Math, Unit Five, part six: the key's one question, the check on it, and the card that closes the unit after the drill.
// Basic Math is not an action subject (subject.action is false), so the unit has no plan card (lesson standard A11, P26).
// The app prints, on the question card: the question, each answer, why it decides, and for every pair
// already compared the question that tells it apart. Three pairs of kinds have no look-alike card of their own: the ledger names
// this card as the one that teaches them (taughtIn).

FC.cards('math', 'u5', [

  { id: 'q-c1', kind: 'question', step: 'C1',
    h: 'The question to ask before any counting',
    link: 'Here is the question and its five answers in one place.',
    decides: [
      'The wrong steps give a number just as neat as the right ones, and nothing in the number tells you something is wrong. Only the words of the problem do.'
    ],
    how: [
      { do: 'Read the last sentence first.', why: 'It usually says what you are asked: how many results there are, or how likely something is.' },
      { do: 'If it asks how many, check whether each pick has a list of its own: that is {o:multprin}.', why: 'Then picking from one list uses nothing up on the others.' },
      { do: 'If the picks all come out of one group, ask whether a different order is a different result: if it is, that is {o:perm}.', why: 'Gold for Ana and silver for Ben is not gold for Ben and silver for Ana.' },
      { do: 'If the same people in any order are one result, that is {o:comb}.', why: 'A team is the same team in any order.' },
      { do: 'If it asks how likely, check whether you need one or more of several separate things: that is {o:complement}.', why: 'Then you work out the chance that none of them happens.' },
      { do: 'If a test has already given a result and you must decide how far to trust it, that is {o:baserate}.', why: 'How rare the thing is decides the answer.' },
      { do: 'Find the exact words that show your answer.', why: 'If you cannot find them, you do not have an answer yet.' }
    ],
    whenBoth: 'Some problems look like two at once, such as {o:multprin} and {o:comb}, or {o:complement} and {o:multprin} or {o:baserate}. The test for each pair is below.' },

  { id: 'check-c1', kind: 'check', after: 'C1',
    case: 'm5-wd-songs',
    ask: { type: 'step', step: 'C1' } },

  { id: 'recap-chance', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now worked all five kinds of problem on your own.',
    carry: [
      'Before you work anything out, ask what is being counted or what chance is wanted, and find the words that say it. The question is: {q:C1}',
      'When each choice has a full list of its own, it is {o:multprin}: multiply the list sizes.',
      'When the picks come out of one group, and a different order is a different result, it is {o:perm}: multiply counts that fall by one each time.',
      'When the same people in any order are one result, it is {o:comb}: count the picks in order, then divide by the number of orders one group can come in.',
      'If you are asked how likely it is that one or more things happen, it is {o:complement}: multiply the chances that each does not happen, and take that away from 1. Do not add the chances.',
      'If a test has given a result and you must decide how far to trust it, it is {o:baserate}: imagine a big group, count the right and the wrong positives, and divide the right ones by all of them. How rare the thing is decides it.'
    ] }
]);
