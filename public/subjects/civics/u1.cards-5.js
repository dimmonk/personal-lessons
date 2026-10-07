// Civics, Unit One, part five: the key's first question as a question, one whole story, and the closing card.
// A quick lesson (lesson standard section 19), rewritten plain (section 20).
// Civics is not an action subject (subject.action is false), so the unit has no plan card (lesson standard A11, P26).
// The app prints, on the question card: the question, each answer with when it is given, why it decides, and for
// every pair already compared the question that separates it.
// Two pairs of kinds have no card of their own: the ledger names this card as the one that teaches them (taughtIn).

FC.cards('civics', 'u1', [

  /* ---------- The first question, as a question ---------- */
  { id: 'q-kind', kind: 'question', step: 'D1',
    h: 'The question to ask every time',
    link: 'Here is the question and its four answers in one place.',
    decides: [
      'Get this wrong and you go looking for limits that do not apply, however carefully you look. That is why it comes first.'
    ],
    how: [
      { do: 'Read to the last sentence before you answer.', why: 'The final call, or the request for one, is usually there.' },
      { do: 'Find what is decided last, or what someone is asked to decide: a vote, an order, a ruling, a refusal, or “asked a judge to settle it”.', why: 'Everything before it is only how the matter got there.' },
      { do: 'Ask who makes that call: {a:D1.congress}, {a:D1.president}, {a:D1.courts} or {a:D1.states}.', why: 'That is your answer, even when the story names another one first.' },
      { do: 'Find the exact words that show it.', why: 'If you cannot find them, you do not have an answer yet.' }
    ],
    whenBoth: 'Many stories name two or three of the four: a law and then the office that applies it, a rule and then a judge asked to block it. A story has only one final call, so do not weigh them against each other. Two pairs have no card of their own, and each is easy to mix up: {a:D1.president} and {a:D1.courts}, and {a:D1.congress} and {a:D1.states}. The test for each pair is below.' },

  /* ---------- One whole story, watched ---------- */
  { id: 'worked-bags', kind: 'worked',
    h: 'One whole story, where the start points the wrong way',
    link: 'Watch one story worked through. The first thing you notice is not what decides it, so read to the end.',
    case: 'w-bags',
    steps: [
      { step: 'D1',
        reason: [
          'It opens with a law the House and the Senate passed. If it stopped there, the final call would be the lawmakers’.',
          'It does not stop there: {cue:D1}. The law is a month old, and now an airline wants a judge to say whether the fine covers bags a partner airline lost. The last thing in the story is a request to a judge.'
        ] }
    ],
    hold: {
      neighbor: 'congress',
      prompt: { kind: 'reason',
        lead: 'The House and the Senate passed the law, so this can look like a vote by lawmakers. What decides it?',
        choices: [
          { id: 'a', text: 'The House and the Senate passed a law that fines an airline for every bag it loses.',
            note: 'True, and it is why this looks like {a:D1.congress}. If the story stopped there, that would be the answer.' },
          { id: 'b', text: 'The story ends with an airline asking a judge whether the fine covers bags a partner airline lost.' },
          { id: 'c', text: 'The law sets a fine of $200 for every bag that the airline loses.',
            note: 'True, and it is part of the law. But the size of a fine does not say whose call it is.' }
        ],
        answer: 'b' },
      reason: [
        'The first half of the story shows a vote, and the second half shows a request to a judge. The question asks for the final call, or the one the story asks for, and that is the judge’s.',
        '{test:congress~courts} The vote is a month old and an airline is now asking a judge, so the answer is {a:D1.courts}.'
      ]
    },
    impression: {
      resembles: 'c-heater', first: 'c-bicycle',
      text: [
        'A second look: does this remind you of a story you know? A new law passed by the House and the Senate may bring back the bicycle-parts tax, which was {a:D1.congress}.',
        'When a likeness and the answer disagree, go back to the words that answer the question: {cue:D1}. The bicycle-parts story has nothing like them, because it ended on the Senate’s vote. The broken heater does, so the answer stands.'
      ]
    } },

  /* ---------- After the drill ---------- */
  { id: 'recap-kind', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now answered the first question on your own.',
    carry: [
      'When a story says “the government”, ask who made the final call, and find the words that show it. If you cannot find them, you do not have an answer yet.',
      'Read to the end. Everything before the final call is only how the matter got there, however loud it is.',
      'A request counts. A story that ends by asking the Senate to vote, an office to rule or a judge to decide has the answer of whoever is asked.',
      'A signature on a law that lawmakers passed leaves the story with {a:D1.congress}. A refusal to sign is {a:D1.president}.',
      'A trial held by the Senate is {a:D1.congress}. A judge in a state court is {a:D1.courts}, not {a:D1.states}.',
      'The same job can be done by an office of the whole country or by a state’s own. Whose office it is decides.'
    ] }
]);
