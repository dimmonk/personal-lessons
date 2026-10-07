// Psychology, Unit Four, part two (close): the key's question, the worked story, and the card that closes the unit after the drill.
// Psychology is not an action subject (subject.action is false), so the unit has no plan card (lesson standard A11, P26).
// The app prints the stem of each hold-back prompt ("Why is this X and not Y? ...") and the heading of the second look.

FC.cards('psychology', 'u4', [

  { id: 'q-pat', kind: 'question', step: 'P1',
    h: 'The one question that sorts all six',
    link: 'Here is the question and its six answers in one place.',
    decides: 'Two people can both be loud, both be quiet, or both be furious when crossed, and still get different names. How loud, how likeable or how much you dislike them tells you nothing. What they keep doing, and what it keeps costing, does.',
    how: [
      { do: 'Count first: years, places and people.', why: 'A week, or one other person, is not this question at all.' },
      { do: 'Find what they keep doing: how they act with others, what they do when something goes against them, what they do when someone seems about to leave.', why: 'That is where the six answers differ.' },
      { do: 'Before any of the first five answers, find the cost.', why: 'No repeated cost means {o:ordpersonality}.' },
      { do: 'Find the exact words that show your answer.', why: 'If you can’t find them, you don’t have an answer yet.' }
    ],
    whenBoth: 'Sometimes two answers both seem to fit. Each pair below has one question that separates it. Four of the pairs have no card of their own: {o:narcgrand} and {o:narcvuln}, {o:narcvuln} and {o:borderline}, {o:narcgrand} and {o:borderline}, {o:narcgrand} and {o:histrionic}.' },

  { id: 'check-pat', kind: 'check', after: 'P1',
    case: 'pa-ward',
    ask: { type: 'step', step: 'P1' } },

  { id: 'worked-bruno', kind: 'worked',
    h: 'One whole story, from the first question to the name',
    link: 'Watch one story worked through, in the order the questions are asked. The most noticeable thing in it is not what decides it.',
    case: 'pa-bruno',
    steps: [
      { step: 'D1',
        reason: 'This follows one man through his whole life: {cue:D1}. That is years and many places, and no single occasion.' },
      { step: 'P1',
        reason: 'Bruno is theatrical in everything, but that does not decide it. What does is {cue:P1}: when someone else is applauded he applauds, and nothing has been lost.' }
    ],
    hold: {
      neighbor: 'histrionic',
      prompt: { kind: 'reason',
        lead: 'Bruno tells every story with his whole body, gives twenty-minute speeches and hugs everyone at a party, so this can look like {o:histrionic}. What decides it?',
        choices: [
          { id: 'a', text: 'He tells every story with his whole body and gives long speeches.',
            note: 'True, and it is why this looks like {o:histrionic}. But being theatrical is common, so it cannot settle it.' },
          { id: 'b', text: 'When another guest is applauded he applauds loudest, and the friends he has had since school still meet him every month.' },
          { id: 'c', text: 'He has run the village Christmas show for twenty years.',
            note: 'True, but that is something he does, not what it has cost. Someone with {o:histrionic} could run a Christmas show too.' }
        ],
        answer: 'b' },
      reason: [
        'Bruno is at the center of attention, but two things {o:histrionic} needs are missing. His show does not get bigger when attention goes elsewhere, because he applauds, and nothing is being lost to it.',
        'It is the same test as Sofia and Tito: {test:histrionic~ordpersonality} Here it has cost very little, so the answer is {a:P1.steady}.'
      ]
    },
    impression: {
      resembles: 'pa-tito', first: 'pa-marguerite',
      text: [
        'A second look: does this remind you of a story you know? A man who tells every story with his whole body and hugs everyone at a party may bring back Marguerite, who was {o:histrionic}.',
        'When a likeness and the answer disagree, go back to the words that answer the question: {cue:P1}. Marguerite’s story has nothing like them. Tito’s does, so the answer stands.'
      ]
    } },

  { id: 'recap-pat', kind: 'recap',
    h: 'What to carry away',
    link: 'Here is the whole unit in one place.',
    carry: [
      'Before any name, count: years, more than one place, more than one relationship. A week, or one other person, is not enough.',
      'Then ask what the person keeps doing, and find the words. For the first five names, find the cost too. No cost means {o:ordpersonality}, the right answer for most people anyone describes.',
      'The two narcissisms both need to be treated as special. Outward, it is anger and scorn. Inward, it is hurt silence and resentment.',
      'When a story shows the scorn of {o:narcgrand} and also everything {o:antisocial} needs, the answer is {o:antisocial}.',
      'Five of the six names describe a {t:pd}, as the word is used here. They describe what a story shows, not a person: only a professional can diagnose, after a long assessment.'
    ] }
]);
