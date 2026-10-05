// Basic Math, Unit Five, part six: the key's one question, the check on it, and the two cards that close the unit after the drill.
// Basic Math is not an action subject (subject.action is false), so the unit has no plan card (lesson standard A11, P26).
// The app prints, on the question card: the question, what it is for, each answer, why it decides, and for every pair
// already compared the question that tells it apart.

FC.cards('math', 'u5', [

  /* ---------- The key's one question ---------- */
  { id: 'q-c1', kind: 'question', step: 'C1',
    h: 'The one question that tells the five kinds apart',
    link: 'At the foot of each kind’s first card you saw the question with one answer under it. This card puts the question and its five answers in one place and says why it is asked before any working.',
    decides: [
      'The same numbers give very different answers depending on how the choices are made and on what is asked, and a wrong procedure gives a number as neat as the right one. You saw it on the first card of this unit: 9 things and 4 picks give 6,561 when each pick has a full list, 3,024 when each pick uses one up and the order counts, and 126 when each pick uses one up and the order does not count. Nothing in the number says which was meant. Only the question can, and only the words of the problem can answer it.',
      'That is why this question comes before any working, and why every problem in this unit starts with it. In this unit it is the only question after the first one, so its answer leads straight to a name, and the name leads to the procedure. Your answers on the way are your answer to the first question and then your answer to this one.'
    ],
    how: [
      'Read the last sentence of the problem first, because the question is usually there, and find what it asks: how many different results there are, or how likely something is. Mark those words, and then look for the words that say how the choices are made.',
      'If it asks how many, ask whether each choice has a list of its own ({a:C1.lists}) or whether the picks come out of one group. If they come out of one group, ask whether a different order is a different result ({a:C1.order}) or the same one ({a:C1.group}). If it asks how likely, ask whether it is how likely it is that one or more of a set of separate things happens ({a:C1.atleast}) or how likely it is that a result is right ({a:C1.test}).',
      'Put your finger on the words that show it. If you cannot point to them, you do not have an answer yet.'
    ],
    whenBoth: 'No problem in this unit shows two of the answers at once, because each answer asks something different. But some pairs of kinds share a story, or even the same numbers, and those are the pairs that people mix up. Each has been set side by side in this unit, and each has a question that tells it apart.' },

  { id: 'check-c1', kind: 'check', after: 'C1',
    case: 'm5-wd-songs',
    ask: { type: 'step', step: 'C1' } },

  /* ---------- After the drill ---------- */
  { id: 'recap-chance', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now worked problems of all five kinds on your own. This card puts the unit in one place.',
    carry: [
      'Before any working, ask what is being counted, or what chance is wanted, and point to the words that say it. If you cannot point to them, you do not have an answer yet. The question is: {q:C1}',
      'A choice with a full list of its own for each pick leads to {o:multprin}. One group with each pick using someone up leads to {o:perm} when the order counts, and to {o:comb} when it does not. The chance that one or more of a set of separate things happens leads to {o:complement}. A test result and how far to trust it lead to {o:baserate}.',
      'The numbers do not tell you the kind. The same 9 things and 4 picks give 6,561, 3,024 or 126, depending on whether each pick has a full list, or uses one up with the order counting, or uses one up with the order not counting.',
      'For {o:multprin}: name each choice, count its full list, and multiply the counts. Adding the counts would count single items and never a whole result.',
      'For {o:perm}: count the group and the picks, write how many can be picked each time, falling by one for each pick, and multiply them. Every order is counted.',
      'For {o:comb}: count the picks in order, as for {o:perm}, count the orders one chosen group can be put in, and divide the first count by the second, so that each group is counted once. A check: the answer times the number of orders gives the count in order.',
      'For {o:complement}: find the chance that each thing does not happen, multiply those chances for the chance that none happens, and take that away from 1. Do not add the chances. The things must be separate, and what has already happened does not change what is still to come.',
      'For {o:baserate}: imagine a large group, count how many have the thing, count the positive results among those who have it and among those who do not, and divide the right positive results by all of them. A test that is right about people who have the thing is not the same as a result that is right: how rare the thing is decides it.'
    ] },

  { id: 'transfer-chance', kind: 'transfer',
    h: 'Where would you meet this?',
    link: 'The last step is yours, and nothing on this card is marked.',
    ask: [
      'Knowing five procedures is one step. Noticing the moment to use one is a separate step, and only you know where those moments are in your life.',
      'Pick one of the five and name an occasion of your own: a time you counted the ways something could turn out, wondered how likely something was, or were handed the result of a test. The lines under each kind are there to jog your memory.'
    ],
    prompts: [
      { outcome: 'multprin', occasion: 'A time you chose one thing from each of several lists, such as a meal, a phone or a code, and wondered how many different choices there were.' },
      { outcome: 'perm', occasion: 'A time you gave out places or prizes, or fixed the order of things, and wondered how many different orders there were.' },
      { outcome: 'comb', occasion: 'A time you picked a team, a group or a few items from a larger group, in no order, and wondered how many different picks there were.' },
      { outcome: 'complement', occasion: 'A time you wondered how likely it was that something would go wrong at least once in several tries or days.' },
      { outcome: 'baserate', occasion: 'A time you were given a test result or an alert, and had to decide how far to trust it.' }
    ],
    places: ['At home', 'At work', 'Shopping', 'Planning something'] }
]);
