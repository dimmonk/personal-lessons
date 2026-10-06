// Civics, Unit Three, part two (close): the worked case, and the card that closes the unit after the drill.
// Civics is not an action subject (subject.action is false), so the unit has no plan card (lesson standard A11, P26).
// The app prints the stem of each hold-back prompt ("Why is this X and not Y? ...") and the heading of the second look.

FC.cards('civics', 'u3', [

  { id: 'worked-mint', kind: 'worked',
    h: 'A whole case, where the story points the wrong way',
    link: 'Before you run a case yourself, watch one being run from the top, in the order the questions are asked. In this case the most noticeable thing in the story is not the thing that decides it. You are not asked anything until the end.',
    case: 'w-mint',
    steps: [
      { step: 'D1',
        reason: 'The case ends on a vote by lawmakers of the whole country: {cue:D1}. The President is expected to sign it, but a signature does not change whose decision it was, so the answer to its first question is {a:D1.congress}.' },
      { step: 'C1',
        reason: 'Congress passed a bill, and what the bill does is give money: {cue:C1}. The government can spend only what Congress has voted, so Congress is deciding whether the government may spend. The bill is also about coins, and money and coins are on the Constitution’s list, so the case shows both a law on a listed matter and a decision about money. When a case shows both, the answer is {a:C1.money}.' }
    ],
    hold: {
      neighbor: 'enumerated',
      prompt: { kind: 'reason',
        lead: 'The bill is about coins, which are on the Constitution’s list, so the case can look like {o:enumerated}.',
        choices: [
          { id: 'a', text: 'The bill is about the mint and its coins.',
            note: 'True, and it is why the case can look like {o:enumerated}. But the bill’s subject fits both names, so it cannot settle which of the two this is.' },
          { id: 'b', text: 'The bill gives $120 million, and the government can spend only what Congress has voted.' },
          { id: 'c', text: 'The President is expected to sign the bill.',
            note: 'True, but that is how the matter goes on after Congress has decided. It does not change what Congress did.' }
        ],
        answer: 'b' },
      reason: [
        'A bill about a listed matter is a law on that matter, and on its own that would point to {o:enumerated}. But the case shows more: Congress is deciding whether the government may spend $120 million. A bill that spends is a law, so it always shows both. When a case shows both, the answer is {a:C1.money}.',
        '{o:enumerated} is for a law that does something else on a listed matter, such as setting a price or a tax, and spends no money.'
      ]
    },
    impression: {
      resembles: 'p-barrier', first: 'e-airfare',
      text: [
        'Now the second look: does this case look like one you know? A bill about money and the mint may bring back the airline-ticket tax first, and that case was {o:enumerated}. So here the likeness and the questions seem to disagree.',
        'When that happens, go back to the question and find the words in the case that answer it. They are {cue:C1}. The ticket tax raised money and spent nothing. This one gives money to buy presses. So the case this one really looks like is the flood barrier: the whole case turns on whether money may be spent, and the answer stands.'
      ]
    } },

  { id: 'recap-congress', kind: 'recap',
    h: 'What to carry away',
    link: 'This card puts the unit in one place.',
    carry: [
      'Say what Congress does, and point to the words in the case that show it. If you cannot point, you do not have an answer yet. The story never decides, and neither does the vote: every law has been through both chambers, and a law can pass every vote and still be {o:beyondcong}.',
      'For a law there are two tests: is the matter on the Constitution’s list, and does the law take a right away?',
      'A bill that spends money is a law too. When a case shows both, the answer is the money, {o:purse}.',
      'Two Senate votes can look alike. One is on a person or a {t:treaty} that the President put forward, {o:confirm}. The other is on a charge against someone who already holds the job, {o:impeach}. And {o:impeach} covers the charge as well as the trial, so a story that stops at the vote in the House has not told you the official is gone.'
    ] }
]);
