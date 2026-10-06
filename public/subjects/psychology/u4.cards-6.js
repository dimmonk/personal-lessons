// Psychology, Unit Four, part two (close): the key's question, the worked case, and the card that closes the unit after the drill.
// Psychology is not an action subject (subject.action is false), so the unit has no plan card (lesson standard A11, P26).
// The app prints the stem of each hold-back prompt ("Why is this X and not Y? ...") and the heading of the second look.

FC.cards('psychology', 'u4', [

  { id: 'q-pat', kind: 'question', step: 'P1',
    h: 'The question you have been answering all along',
    link: 'This card puts the question and its six answers in one place.',
    decides: 'Two people can both be loud, or both be quiet, or both be furious when they are crossed, and still get different names. Nothing about how loud, how likeable or how much you dislike them tells them apart. Only what the person does, again and again, and what it keeps costing, tells them apart.',
    how: [
      'Find the sentences that show what the person does again and again: how they act with others, what they do when something goes against them, what they do when someone seems about to leave. Then ask which of the six answers those sentences give. You should be able to put your finger on the words.',
      'Before you give any of the first five answers, point to the cost. If you cannot point to a repeated cost, the answer is the sixth. And make sure the case shows years, more than one place and more than one relationship. If it shows a week, or one other person, the first question has already sent you somewhere else.'
    ],
    whenBoth: 'Sometimes two answers both seem to fit. Each pair below has one question that separates it. One of them, {o:narcgrand} and {o:antisocial}, also has a tie-break for the case that shows both. Four pairs have no card of their own, so each is set side by side below: {o:narcgrand} and {o:narcvuln}, {o:narcvuln} and {o:borderline}, {o:narcgrand} and {o:borderline}, {o:narcgrand} and {o:histrionic}.' },

  { id: 'check-pat', kind: 'check', after: 'P1',
    case: 'pa-ward',
    ask: { type: 'step', step: 'P1' } },

  { id: 'worked-bruno', kind: 'worked',
    h: 'A whole case, from the first question to the name',
    link: 'Before you run a case yourself, watch one being run from the top, in the order the questions are asked. The most noticeable thing in the story is not the thing that decides it. You are not asked anything until the end.',
    case: 'pa-bruno',
    steps: [
      { step: 'D1',
        reason: 'What the case gives you is a long view of one person: {cue:D1}. It covers a lifetime and many places, and no single occasion is in it.' },
      { step: 'P1',
        reason: 'Bruno is theatrical in everything, and that is not what decides it. The words that decide it are {cue:P1}. When attention goes to someone else his display does not get bigger: he applauds. And nothing has been lost: friends from school who still meet him, and a village that thanks him every year.' }
    ],
    hold: {
      neighbor: 'histrionic',
      prompt: { kind: 'reason',
        lead: 'Bruno tells every story with his whole body, gives twenty-minute speeches and hugs everyone at a party. That is putting himself at the center of attention, so the case can look like {o:histrionic}.',
        choices: [
          { id: 'a', text: 'He tells every story with his whole body and gives long speeches.',
            note: 'True, and it is why the case can look like {o:histrionic}. But a theatrical way of being is common and ordinary. It cannot settle which of the two this is.' },
          { id: 'b', text: 'When another guest is applauded he applauds loudest, and the friends he has had since school still meet him every month.' },
          { id: 'c', text: 'He has run the village Christmas show for twenty years.',
            note: 'True, but that is something he does, and it is not what it has cost. A person with {o:histrionic} could run a Christmas show too.' }
        ],
        answer: 'b' },
      reason: [
        'For {o:histrionic} you must be able to point to this: {needs:histrionic}. Bruno is at the center of attention, but the other two things are missing. His displays do not get bigger when attention goes to someone else: he applauds. And nothing is being lost to it, so there is no cost to point to.',
        'It is the question from Sofia and Tito. {test:histrionic~ordpersonality} Here it has cost very little, so the answer is {a:P1.steady}.'
      ]
    },
    impression: {
      resembles: 'pa-tito', first: 'pa-marguerite',
      text: [
        'Now the second look: does this case look like one you know? A man who tells every story with his whole body and hugs everyone at a party may bring back Marguerite first, and Marguerite’s case was {o:histrionic}. So here the likeness and the answer seem to disagree.',
        'When that happens, go back to the question and find the words in the case that answer it. They are {cue:P1}. Marguerite’s case has nothing like them: when the room applauded someone else she told the story of her terrible week until the room turned back to her, and her sister stopped inviting her to small gatherings. The case this one really looks like is Tito, dramatic in everything, and thanked for it every year. So the answer stands.'
      ]
    } },

  { id: 'recap-pat', kind: 'recap',
    h: 'What to carry away',
    link: 'This card puts the unit in one place.',
    carry: [
      'Before any name, count: years, more than one place, more than one relationship. If a case shows a week, or one other person, the first question sends you somewhere else.',
      'Then ask what the person does, again and again, and point to the words. Before any of the first five names, point to the cost. If you cannot, the answer is {o:ordpersonality}, and it is the right answer for most of the people anyone describes.',
      'The two narcissisms are one family: a sense of worth that depends on being treated as special. Defended outward, it is anger and scorn. Defended inward, it is hurt and resentment.',
      'When a case shows both the scorn of {o:narcgrand} and everything that {o:antisocial} needs, the answer is {a:P1.uses}.',
      'Five of the six names are for a {t:pd}, as the word is used here. These names describe what a case shows. They are not a diagnosis of a person: only a professional can diagnose, after a long assessment.'
    ] }
]);
