// Civics, Unit Three, part two (close): the worked story, and the card that closes the unit after the drill.
// Civics is not an action subject (subject.action is false), so the unit has no plan card (lesson standard A11, P26).
// The app prints the stem of each hold-back prompt ("Why is this X and not Y? ...") and the heading of the second look.

FC.cards('civics', 'u3', [

  { id: 'worked-mint', kind: 'worked',
    h: 'One whole story, where the start points the wrong way',
    link: 'Watch one story worked through from the top, in the order the questions are asked. The first thing you notice is not what decides it, so read to the end.',
    case: 'w-mint',
    steps: [
      { step: 'D1',
        reason: 'The story ends on a vote by Congress: {cue:D1}. The President is expected to sign it, but a signature does not change whose decision it was, so the answer is {a:D1.congress}.' },
      { step: 'C1',
        reason: [
          'The bill gives money: {cue:C1}. The government can spend only what Congress has voted, so Congress is deciding what it may spend.',
          'Coins are on the Constitution’s list too, so the story also looks like a law on a listed subject. When a story shows both, the money wins: {a:C1.money}.'
        ] }
    ],
    hold: {
      neighbor: 'enumerated',
      prompt: { kind: 'reason',
        lead: 'The bill is about coins, which are on the Constitution’s list, so this can look like {o:enumerated}.',
        choices: [
          { id: 'a', text: 'The bill is about coins, and coins are on the Constitution’s list.',
            note: 'True, and it is why this looks like {o:enumerated}. But coins fit both names, so they cannot settle it.' },
          { id: 'b', text: 'The bill hands the mint $120 million: Congress is deciding what to spend.' },
          { id: 'c', text: 'The President is expected to sign it, once both votes are done.',
            note: 'True, but signing comes after Congress has decided. It does not change what Congress did.' }
        ],
        answer: 'b' },
      reason: [
        'A bill about a listed subject is a law on that subject, and on its own that would be {o:enumerated}. But this bill also decides whether the government may spend $120 million, and a bill that spends is always a law too. When a story shows both, the money wins: {a:C1.money}.',
        '{o:enumerated} is for a law that sets a rule on a listed subject, like a price or a tax, and spends no money.'
      ]
    },
    impression: {
      resembles: 'p-barrier', first: 'e-airfare',
      text: [
        'A second look: does this remind you of a story you know? A bill about money and the mint may bring back the airline-ticket tax, which was {o:enumerated}.',
        'When a likeness and the answer disagree, go back to the words that answer the question: {cue:C1}. The ticket tax raised money and spent nothing. This bill gives money to buy presses, like the flood barrier story, where everything turned on whether money could be spent. So the answer stands.'
      ]
    } },

  { id: 'recap-congress', kind: 'recap',
    h: 'What to carry away',
    link: 'This puts the unit in one place.',
    carry: [
      'Find the words that show what Congress did. If you cannot find them, you do not have an answer yet. The vote never decides it: every law passes the House and the Senate, and a law can pass every vote and still be {o:beyondcong}.',
      'For a law, run two checks: is the subject on the Constitution’s list, and does the law take a right away?',
      'A bill that spends money is a law too. When a story shows both, the money wins: {o:purse}.',
      'Two Senate votes can look alike. A vote on the President’s pick or a {t:treaty} is {o:confirm}. A vote on a charge against someone already in the job is {o:impeach}, and it covers the charge as well as the trial, so a story that stops at the House vote has not told you the official is gone.',
      'In a headline, “passed a law” needs the two checks, “cut the money” is {o:purse}, “approved the President’s pick” is {o:confirm}, and “voted to charge” is {o:impeach}.'
    ] }
]);
