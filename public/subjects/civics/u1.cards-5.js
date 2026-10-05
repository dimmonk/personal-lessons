// Civics, Unit One, parts five and six: the key's first question as a question, the two worked cases, and the
// two cards that close the unit after the drill.
// Civics is not an action subject (subject.action is false), so the unit has no plan card (lesson standard A11, P26).
// The app prints, on the question card: the question, what it is for, each answer with when it is given, why it
// decides, and for every pair already compared the question that separates it.

FC.cards('civics', 'u1', [

  /* ---------- The key's first question, as a question ---------- */
  { id: 'q-kind', kind: 'question', step: 'D1',
    h: 'The question you have been answering all along',
    link: 'Since the bicycle-parts tax you have seen the key’s question at the foot of each new kind, with one answer under it. This card puts the question and its four answers in one place, as the key shows them, and says why the key asks it before anything else.',
    decides: [
      'A rule or a ruling can only be judged once you know whose it is. A law Congress passed is held back by one set of limits, a rule from an office by another, a judge’s ruling by a third, and a city’s rule by a fourth. If you take an office’s rule for a vote by lawmakers, you go looking for limits that do not apply to it. Getting the kind wrong means asking the wrong questions next, however carefully you ask them.',
      'That is why this question comes first, before any finer name, and why every case in this subject starts with it. In this unit it is the only question, so its answer is the name. In the rest of the subject, each of the four answers is followed by one or two more questions, and those lead to a finer name. The answers you give on the way to a name are called your route: this first answer, and then the answers to the questions after it. Once a route has more than one answer, two things are marked separately: the name you give a case, and your route to it. A right name reached by a wrong answer to this first question counts as a miss, which is why this question gets a whole unit of practice.'
    ],
    how: [
      'Read the whole case, the last sentence included. The last sentence is usually where the decision is, or where the case asks for one. Then do three things, in order.',
      'First, find the last thing in the case that is decided, or that someone is asked to decide. It may be a vote, an order, a ruling or a refusal. It may be a request: “asked the Senate to vote”, “asked a judge to settle it”, “asked the council to set a curfew”. Everything before it is how the matter got there, and some of that can be dull and some of it very striking.',
      'Second, ask who makes that decision, or is asked to. Then give the answer that matches: {a:D1.congress}, {a:D1.president}, {a:D1.courts}, or {a:D1.states}.',
      'Third, put your finger on the words that show it: the vote, the order, the ruling or the request, and the name of whoever it belongs to. If you cannot point to them, you do not have an answer yet.',
      'Four things are worth keeping in mind. A signature on a law the lawmakers passed does not move the decision away from them. A trial held in the Senate is a vote by senators. A request is the decision the case asks for, even before it is made. And a judge in a state’s court is a judge.'
    ],
    whenBoth: 'Some cases name two or three of the four. You have met the common shapes: a law and then the office that applies it, a rule and then a judge asked to block it, an agreement with another country and then the Senate, a trial held by the Senate, a judge in a state’s court. In each, the key does not weigh the parts against one another. It asks for the last decision, or the one the case asks for, and a case has one. Each pair below has been set side by side earlier in this unit, and each has one question that separates it.' },

  { id: 'check-kind', kind: 'check', after: 'D1',
    case: 'k-lakeroad',
    ask: { type: 'step', step: 'D1' } },

  /* ---------- Two whole cases, watched ---------- */
  { id: 'worked-doll', kind: 'worked',
    h: 'A whole case, from the question to the answer',
    link: 'You have the four kinds and the key’s question about them. Before the drill, watch two cases being run from the top. You are not asked anything until the end of each.',
    case: 'w-doll',
    steps: [
      { step: 'D1',
        reason: [
          'The unit taught three things to do, in order, to answer this question. First, find the last thing in the case that is decided. The case begins with a law that Congress passed last year, and that was a decision, but an old one: it is how the matter reached where it is. The last thing decided is what happened on Tuesday: {cue:D1}.',
          'Second, ask who made it. It is an office of the government of the whole country: it is federal, and it is an {t:agency} with inspectors of its own. It is not the House or the Senate, not a judge, and not a state or a city.',
          'Third, the words to point to are the order, and the name of the office that gave it. The case ends there, so the answer is the second kind.'
        ] }
    ],
    hold: {
      neighbour: 'congress',
      prompt: { kind: 'reason',
        lead: 'Congress passed the law, so the case can look like a vote by lawmakers.',
        choices: [
          { id: 'a', text: 'Congress passed a law that every toy must be tested for lead.',
            note: 'True, and it is why the case can look like {a:D1.congress}. But the law was passed last year, and the case is about what an office did on Tuesday. A law that is already passed is how the matter got here, not the last decision.' },
          { id: 'b', text: 'The last thing decided in the case is an order from a federal office to a company, and no vote follows it.' },
          { id: 'c', text: 'The doll failed the test.',
            note: 'True, and it is why the office acted. But a test result is not a decision, and it does not say who decides.' }
        ],
        answer: 'b' },
      reason: [
        'For {a:D1.congress} you must be able to point to this: {needs:congress}. The law was passed by lawmakers, and that is in the story. But the votes are behind the case, not in it: they were last year, and nobody is voting or being asked to vote on Tuesday.',
        'It is the question from the food-label law. {test:congress~president} Here an office decided something, so the key’s answer is {a:D1.president}.'
      ]
    },
    impression: {
      resembles: 'c-seatbelt',
      text: [
        'The key has given its answer. Now take a second look of a different kind: does this case look like one you know? It should bring back the seat belts. There too, an office decided something about what every new car, or here every toy, must pass, and its inspectors were to check.',
        'Here the key and the likeness agree, so the answer stands. The key’s question comes first, because it makes you point at words in the case. The likeness is only a second look. When the two disagree, do not pick the one you prefer. Go back to the key’s question and find the words in the case that answer it. The second whole case shows how.'
      ]
    } },

  { id: 'worked-bags', kind: 'worked',
    h: 'A second whole case, where the opening points the wrong way',
    link: 'The doll case was a clean one: the order was the last thing in it. In this second case the first thing you notice is not the thing that decides it. Read to the end before you answer.',
    case: 'w-bags',
    steps: [
      { step: 'D1',
        reason: [
          'The case opens with a law that the House and the Senate passed, a law that fines an airline for every bag it loses. If it ended there, you would be looking at a vote by lawmakers.',
          'It does not end there. Read on: {cue:D1}. The law is a month old, and now an airline wants a judge to say whether the fine reaches a certain kind of lost bag. The last thing in the case is a request to a judge.'
        ] }
    ],
    hold: {
      neighbour: 'congress',
      prompt: { kind: 'reason',
        lead: 'The House and the Senate passed the law, so the case can look like a vote by lawmakers.',
        choices: [
          { id: 'a', text: 'The House and the Senate passed a law that fines an airline for every bag it loses.',
            note: 'True, and it is why the case can look like {a:D1.congress}. If the case ended there, that would be the answer. It does not end there.' },
          { id: 'b', text: 'The case ends with an airline asking a judge whether the fine applies to bags lost by a partner airline.' },
          { id: 'c', text: 'The fine is $200 for every bag.',
            note: 'True, and it is part of the law. But the size of a fine does not say who makes the last decision.' }
        ],
        answer: 'b' },
      reason: [
        'A vote by lawmakers is what you point to for {a:D1.congress}, and the first half of this case shows one. The second half shows the case being put to a judge. The key does not weigh the two. It asks for the last decision, or the one the case asks for, and that is the judge’s.',
        'It is the question from the drone law. {test:congress~courts} Here the law is a month old and an airline is asking a judge about it, so the key’s answer is {a:D1.courts}.'
      ]
    },
    impression: {
      resembles: 'c-fence', first: 'c-bicycle',
      text: [
        'Now the second look: does this case look like one you know? A new law, passed by the House and the Senate, may bring back the bicycle-parts tax first, and that case was {a:D1.congress}. So here the likeness and the key seem to disagree.',
        'When that happens, go back to the key’s question and find the words in the case that answer it. They are {cue:D1}. The bicycle-parts case has nothing like them: it ended with the Senate’s vote. The boundary fence does: someone asked a judge to settle it. So the case this one really looks like is the fence, and the key’s answer stands.'
      ]
    } },

  /* ---------- After the drill ---------- */
  { id: 'recap-kind', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now answered the key’s first question on your own. This card puts the unit in one place, in the key’s words.',
    carry: [
      'Before anything else, ask whose decision the story ends on, and point to the words that show it. If you cannot point, you do not have an answer yet.',
      'Read to the end. Everything before the last decision is how the matter got there, however loud it is.',
      'A request counts. A case that ends by asking the Senate to vote, an office to rule or a judge to decide has the answer of whoever is asked.',
      'A signature on a law that lawmakers passed leaves the case with {a:D1.congress}. A refusal to sign is {a:D1.president}.',
      'A trial held by the Senate is {a:D1.congress}. A judge in a state’s court is {a:D1.courts}, not {a:D1.states}.',
      'The same work can be done by an office of the whole country or by a state’s own: whose office it is decides.',
      'Every case in this subject starts with this question. Your answer to it is the first part of your route to a name.'
    ] },

  { id: 'transfer-kind', kind: 'transfer',
    h: 'Where would you meet this?',
    link: 'The last step is yours, and nothing on this card is marked.',
    ask: [
      'Knowing the four kinds is one step. Noticing the moment to ask the question is a separate step, and only you know where those moments are in your life.',
      'Pick one of the four and name an occasion of your own: something you read, something that affected you, or something you were told. The lines under each kind are there to jog your memory.'
    ],
    prompts: [
      { family: 'congress', occasion: 'A vote you read about in the news, and what it was a vote on.' },
      { family: 'president', occasion: 'A form, a notice or an inspection from a federal office, or something the President ordered.' },
      { family: 'courts', occasion: 'A dispute, a ruling or a trial you heard about, and what the judge was asked.' },
      { family: 'states', occasion: 'A rule of your own city, county or state that you meet in a day: where to park, what you need to drive, when something is open.' }
    ],
    places: ['At home', 'At work', 'In the news', 'In my own head'] }
]);
