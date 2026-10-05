// Psychology, Unit Four, parts five and six: the key's question, the two whole cases, and the two cards that close the unit after the drill.
// Psychology is not an action subject (subject.action is false), so the unit has no plan card (lesson standard A11, P26).
// The app prints the stem of each hold-back prompt ("Why is this X and not Y? ...") and the heading of the second look.

FC.cards('psychology', 'u4', [

  { id: 'q-pat', kind: 'question', step: 'P1',
    h: 'The question you have been answering all along',
    link: 'Since Dennis you have seen the question at the foot of each new name, with one answer under it. This card puts the question and its six answers in one place, and says why it is asked.',
    decides: 'So two people can both be loud, or both be quiet, or both be furious when they are crossed, and still get different names. One person can be {o:narcgrand} and another {o:ordpersonality}, with the same boast. Nothing about how loud, how likeable or how much you dislike them tells them apart. Only what the person does, again and again, and what it keeps costing, tells them apart.',
    how: [
      'Find the sentences that show what the person does again and again: how they act with others, what they do when something goes against them, what they do when someone seems about to leave. Then ask which of the six answers those sentences give. You should be able to put your finger on the words.',
      'Before you give any of the first five answers, point to the cost. If you cannot point to a repeated cost, the answer is the sixth. And before you give any of the six, make sure the case shows years, more than one place and more than one relationship. If it shows a week, or one other person, the first question has already sent you somewhere else.',
      'Read what is missing as well as what is there. For {o:narcvuln}, nothing is shouted: the evidence is a count of what is owed, and a silence. For {o:antisocial}, part of the evidence is a missing feeling: no regret.'
    ],
    whenBoth: 'Sometimes two answers both seem to fit. Each pair below has been set side by side earlier in this unit, and each has one question that separates it. One of them, {o:narcgrand} and {o:antisocial}, also has a tie-break for the case that shows both.' },

  { id: 'check-pat', kind: 'check', after: 'P1',
    case: 'pa-ward',
    ask: { type: 'step', step: 'P1' } },

  { id: 'worked-rafe', kind: 'worked',
    h: 'A whole case, from the first question to the name',
    link: 'You have the six names and the question about them. Before you run a case yourself, watch two being run from the top, in the order the questions are asked. You are not asked anything until the end of each.',
    case: 'pa-rafe',
    steps: [
      { step: 'D1',
        reason: 'What the case gives you is a long view of one person: {cue:D1}. It is not one conversation between two people, and it is not one occasion. It is how a person is across years, places and relationships.' },
      { step: 'P1',
        reason: 'The words that decide it are {cue:P1}. The first is rules broken and people used: placements invoiced that never happened, fees charged for jobs that did not exist. The second shows no regret when someone is in tears. The third shows people hurt: a regulator, and partners who will not speak to him.' }
    ],
    hold: {
      neighbour: 'narcgrand',
      prompt: { kind: 'reason',
        lead: 'Rafe tells clients he is the best in the business, so the case can look like {o:narcgrand}.',
        choices: [
          { id: 'a', text: 'Rafe tells clients that he is the best in the business.',
            note: 'True, and it is why the case can look like {o:narcgrand}. But nothing in the case shows him turning angry or scornful when he is not treated as special. Saying you are the best is not enough.' },
          { id: 'b', text: 'He tells candidates that a job exists so that they will pay a fee, and he shows no regret when one rings him in tears.' },
          { id: 'c', text: 'He is warm and quick to make friends.',
            note: 'True, but a warm manner is how he gets his way. It tells you nothing about which name applies: a charming person can be any of the six.' }
        ],
        answer: 'b' },
      reason: [
        'For {o:narcgrand} you must be able to point to this: {needs:narcgrand}. Rafe says he is the best, but that is all that is there. He does not turn scornful when someone fails to treat him as special. What he does is lie to people and use them, and shrug.',
        'It is the question from the two landlords. {test:narcgrand~antisocial} Here the case shows the rules broken and the lack of regret, so the answer is {a:P1.uses}.'
      ]
    },
    impression: {
      resembles: 'pa-callum',
      text: [
        'You have the answer. Now take a second look of a different kind: does this case look like one you know? It should bring back the garage owner: cars and customers there, placements and candidates here, and the same shrug when someone is hurt.',
        'Here the answer and the likeness agree, so the answer stands. The question comes first, because it makes you point at words in the case. The likeness is only a second look. When the two disagree, do not pick the one you prefer. Go back to the question and find the words in the case that answer it. The second whole case shows how.'
      ]
    } },

  { id: 'worked-bruno', kind: 'worked',
    h: 'A second whole case, where the story points the wrong way',
    link: 'The recruitment agent was a clean case: one thing was going on, and nothing in the story pulled the other way. In this second case the most noticeable thing in the story is not the thing that decides it. Watch which words each question picks out.',
    case: 'pa-bruno',
    steps: [
      { step: 'D1',
        reason: 'What the case gives you is a long view of one person: {cue:D1}. It covers a lifetime and many places, and no single occasion is in it.' },
      { step: 'P1',
        reason: 'Bruno is theatrical in everything, and that is not what decides it. The words that decide it are {cue:P1}. When attention goes to someone else his display does not get bigger: he applauds. And nothing has been lost: friends from school who still meet him, and a village that thanks him every year.' }
    ],
    hold: {
      neighbour: 'histrionic',
      prompt: { kind: 'reason',
        lead: 'Bruno tells every story with his whole body, gives twenty-minute speeches and hugs everyone at a party. That is putting himself at the centre of attention, so the case can look like {o:histrionic}.',
        choices: [
          { id: 'a', text: 'He tells every story with his whole body and gives long speeches.',
            note: 'True, and it is why the case can look like {o:histrionic}. But a theatrical way of being is common and ordinary. It cannot settle which of the two this is.' },
          { id: 'b', text: 'When another guest is applauded he applauds loudest, and the friends he has had since school still meet him every month.' },
          { id: 'c', text: 'He has run the village pantomime for twenty years.',
            note: 'True, but that is something he does, and it is not what it has cost. A person with {o:histrionic} could run a pantomime too.' }
        ],
        answer: 'b' },
      reason: [
        'For {o:histrionic} you must be able to point to this: {needs:histrionic}. Bruno is at the centre of attention, but the other two things are missing. His displays do not get bigger when attention goes to someone else: he applauds. And nothing is being lost to it, so there is no cost to point to.',
        'It is the question from Sofia and Tito. {test:histrionic~ordpersonality} Here it has cost very little, so the answer is {a:P1.steady}.'
      ]
    },
    impression: {
      resembles: 'pa-tito', first: 'pa-marguerite',
      text: [
        'Now the second look: does this case look like one you know? A man who tells every story with his whole body and hugs everyone at a party may bring back Marguerite first, and Marguerite’s case was {o:histrionic}. So here the likeness and the answer seem to disagree.',
        'When that happens, go back to the question and find the words in the case that answer it. They are {cue:P1}. Marguerite’s case has nothing like them: when the room applauded someone else she told the story of her terrible week until the room turned back to her, and her sister stopped inviting her to small gatherings. The case this one really looks like is the fete host: dramatic in everything, and thanked for it every year. So the answer stands.'
      ]
    } },

  { id: 'recap-pat', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now gone from the first question to the name on your own. This card puts the unit in one place.',
    carry: [
      'Before any name, count: years, more than one place, more than one relationship. If a case shows a week, or one other person, the first question sends you somewhere else.',
      'Then ask what the person does, again and again, and point to the words. Before any of the first five names, point to the cost. If you cannot, the answer is {o:ordpersonality}, and it is the right answer for most of the people anyone describes.',
      'The two narcissisms are one family. Both come from a sense of worth that depends on being treated as special. Defended outward, it is anger and scorn. Defended inward, it is hurt and resentment. A loud person and a quiet one can belong to the same family.',
      'When a case shows both the scorn of {o:narcgrand} and everything that {o:antisocial} needs, the answer is {a:P1.uses}.',
      'Five of the six names are for a {t:pd}, as the word is used here. The sixth is the answer when there is no repeated cost. These names describe what a case shows. They are not a diagnosis of a person, and only a professional can diagnose, after a long assessment. "She said something cruel and then cried" is a sentence about a moment, and it is not a case.'
    ] },

  { id: 'transfer-pat', kind: 'transfer',
    h: 'Where would you meet this?',
    link: 'The last step is yours, and nothing on this card is marked.',
    ask: [
      'Knowing the six names is one step. Noticing the moment to use one is a separate step, and only you know where those moments are in your life.',
      'Pick one of the six and name an occasion of your own: a person you have heard described this way, or a label you have heard used. The lines under each name are there to jog your memory.'
    ],
    prompts: [
      { outcome: 'narcgrand', occasion: 'Someone you have heard described as having a huge ego: how many years, and how many places, do you actually know about?' },
      { outcome: 'narcvuln', occasion: 'Someone who goes quiet and cold for weeks when someone else is thanked, and what you know of the rest of their life.' },
      { outcome: 'borderline', occasion: 'A time you heard a break-up or a run of messages described with a medical label for clinging, and how much of the person’s years the speaker had seen.' },
      { outcome: 'histrionic', occasion: 'Someone who is dramatic in every room: what has it cost them, and what has it not cost them?' },
      { outcome: 'antisocial', occasion: 'A person described to you with a medical label for being cold and cruel: did the account show years, several people and no regret, or one story?' },
      { outcome: 'ordpersonality', occasion: 'A person you know who is loud, shy or blunt in the same way everywhere, and whom people value anyway.' }
    ],
    places: ['At home', 'At work', 'In the news', 'In my own head'] }
]);
