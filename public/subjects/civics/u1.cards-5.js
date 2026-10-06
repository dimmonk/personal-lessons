// Civics, Unit One, part five: the key's first question as a question, one whole case, and the closing card.
// A quick lesson (lesson standard section 19).
// Civics is not an action subject (subject.action is false), so the unit has no plan card (lesson standard A11, P26).
// The app prints, on the question card: the question, what it is for, each answer with when it is given, why it
// decides, and for every pair already compared the question that separates it.
// Two pairs of kinds have no card of their own: the ledger names this card as the one that teaches them (taughtIn).

FC.cards('civics', 'u1', [

  /* ---------- The first question, as a question ---------- */
  { id: 'q-kind', kind: 'question', step: 'D1',
    h: 'The question you have been answering all along',
    link: 'This card puts the question and its four answers in one place, and says why it is asked before anything else.',
    decides: [
      'Get the kind wrong and you go looking for limits that do not apply, however carefully you look. That is why this question comes first.'
    ],
    how: [
      'Read the whole case, the last sentence included. Find the last thing in it that is decided, or that someone is asked to decide: a vote, an order, a ruling, a refusal, or a request such as “asked the Senate to vote” or “asked a judge to settle it”. Everything before it is how the matter got there.',
      'Then ask who makes that decision, or is asked to, and give the matching answer: {a:D1.congress}, {a:D1.president}, {a:D1.courts}, or {a:D1.states}. Put your finger on the words that show it. If you cannot point to them, you do not have an answer yet.'
    ],
    whenBoth: 'Some cases name two or three of the four: a law and then the office that applies it, a rule and then a judge asked to block it, a trial held by the Senate, a judge in a state’s court. You do not weigh the parts against one another: a case has one last decision. Two pairs have no card of their own here, and each is easy to mix up: {a:D1.president} and {a:D1.courts}, {a:D1.congress} and {a:D1.states}. The test for each is printed below.' },

  /* ---------- One whole case, watched ---------- */
  { id: 'worked-bags', kind: 'worked',
    h: 'A whole case, where the opening points the wrong way',
    link: 'Watch one case run from the question to the answer. The first thing you notice in it is not the thing that decides it. Read to the end before you answer.',
    case: 'w-bags',
    steps: [
      { step: 'D1',
        reason: [
          'The case opens with a law that the House and the Senate passed, a law that fines an airline for every bag it loses. If it ended there, you would be looking at a vote by lawmakers.',
          'It does not end there. Read on: {cue:D1}. The law is a month old, and now an airline wants a judge to say whether the fine reaches a certain kind of lost bag. The last thing in the case is a request to a judge.'
        ] }
    ],
    hold: {
      neighbor: 'congress',
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
        'A vote by lawmakers is what you point to for {a:D1.congress}, and the first half of this case shows one. The second half shows the case being put to a judge. The question does not weigh the two. It asks for the last decision, or the one the case asks for, and that is the judge’s.',
        '{test:congress~courts} Here the law is a month old and an airline is asking a judge about it, so the answer is {a:D1.courts}.'
      ]
    },
    impression: {
      resembles: 'c-heater', first: 'c-bicycle',
      text: [
        'Now the second look: does this case look like one you know? A new law, passed by the House and the Senate, may bring back the bicycle-parts tax first, and that case was {a:D1.congress}. So here the likeness and the questions seem to disagree.',
        'When that happens, go back to the question and find the words in the case that answer it. They are {cue:D1}. The bicycle-parts case has nothing like them: it ended with the Senate’s vote. The broken heater does: the matter was put to a judge. So the case this one really looks like is the heater, and the answer stands.'
      ]
    } },

  /* ---------- After the drill ---------- */
  { id: 'recap-kind', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now answered the first question on your own.',
    carry: [
      'Before anything else, ask whose decision the story ends on, and point to the words that show it. If you cannot point, you do not have an answer yet.',
      'Read to the end. Everything before the last decision is how the matter got there, however loud it is.',
      'A request counts. A case that ends by asking the Senate to vote, an office to rule or a judge to decide has the answer of whoever is asked.',
      'A signature on a law that lawmakers passed leaves the case with {a:D1.congress}. A refusal to sign is {a:D1.president}.',
      'A trial held by the Senate is {a:D1.congress}. A judge in a state’s court is {a:D1.courts}, not {a:D1.states}.',
      'The same work can be done by an office of the whole country or by a state’s own: whose office it is decides.'
    ] }
]);
