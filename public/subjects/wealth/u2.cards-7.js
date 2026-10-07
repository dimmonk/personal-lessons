// Wealth Preservation, Unit Two, part three (second half): the question, and one whole story. The app prints the stem of each hold-back prompt
// ("Why is this X and not Y? ...") and the heading of the second look.

FC.cards('wealth', 'u2', [

  /* ---------- The question ---------- */
  { id: 'q-erosion', kind: 'question', step: 'E1',
    h: 'The question to ask about any yearly cost',
    link: 'Here is the question and its six answers in one place.',
    decides: [
      'Two people can have the same pot and lose the same $3,000 a year, and need opposite things. One pays $3,000 to someone who picked investments and did nothing else. The other pays $3,000 for a tax return, a check of a will and a plan. The answer for the first is {a:E1.picking}. For the second it is {a:E1.nomore}.',
      'Any fix you buy for a story that shows {a:E1.nomore} costs money and fixes nothing.'
    ],
    how: [
      { do: 'Read the whole story first.', why: 'The words that decide it are often in the last sentence.' },
      { do: 'If the money goes to a firm or an adviser, ask what it pays for.', why: 'Picking is {a:E1.picking}, and named work at a set price is {a:E1.nomore}.' },
      { do: 'If it goes to the IRS, ask whether the tax comes every year or only with a sale.', why: 'Every year is {a:E1.incometax}, and with a sale is {a:E1.needlesssale} or {a:E1.gainloss}.' },
      { do: 'If it is the person’s own spending, ask whether the sum is ever reset.', why: 'Never reset is {a:E1.fixedsum}, and reset each year is {a:E1.nomore}.' },
      { do: 'Find the exact words that show your answer.', why: 'If you cannot find them, you do not have an answer yet, so do not invent a problem.' }
    ],
    whenBoth: 'Some stories show two at once. Say your mix has drifted ({a:D1.timing}), and putting it back needs a sale that would bring a tax bill new money could avoid. The answer to the first question is then {a:D1.erosion}, and the answer to this one is {a:E1.needlesssale}. A sum fixed in dollars and left alone while a fall in prices shrinks {t:pot} is handled the same way: the answer here is {a:E1.fixedsum}.' },

  { id: 'check-erosion', kind: 'check', after: 'E1',
    case: 'e-c-step',
    ask: { type: 'step', step: 'E1' } },

  /* ---------- One whole story ---------- */
  { id: 'worked-planner', kind: 'worked',
    h: 'One whole story, where the loudest thing points the wrong way',
    link: 'Watch one story worked through from the top. The first thing you notice is not what decides it.',
    case: 'e-w-rui',
    steps: [
      { step: 'D1',
        reason: 'Money comes out of {t:pot} every year: {cue:D1}. It is the loudest thing in the story, but here it only tells you where to look. There is no one thing that is most of Rui’s money, no bill due in a fall, and no money being handed over.' },
      { step: 'E1',
        reason: 'The friend’s remark is about size: 1.2% of $700,000. The words that answer the question are about what the fee is for: {cue:E1}. The fee is flat, not a percentage of {t:pot}, and it pays for real work. Nobody is paid to pick, because the money is in index funds.' }
    ],
    hold: {
      neighbor: 'feecore',
      prompt: { kind: 'reason',
        lead: 'A friend calls the fee 1.2% of {t:pot} and says Rui is being robbed. A big percentage is how a fee for picking looks, so this can look like a problem to fix. What decides it?',
        choices: [
          { id: 'a', text: 'The fee is $8,400 a year, which is 1.2% of $700,000.',
            note: 'True, and it is why this can look like a fee for picking. But the size says nothing about what the fee pays for.' },
          { id: 'b', text: 'The fee is a flat sum for named work that Rui says he could not do alone.' },
          { id: 'c', text: 'A friend says that is too much and that Rui is being robbed.',
            note: 'True, but it is only a remark. It does not show what the fee pays for.' }
        ],
        answer: 'b' },
      reason: [
        'For {o:feecore}, the story would need this: {needs:feecore}. Rui’s fee is large, but it is not a percentage of {t:pot} for picking and nothing else.',
        'It is the question from the story of Gwen and Ann. {test:feecore~nocut} Here the $8,400 pays for returns, a plan and papers, and the price stays the same whatever {t:pot} does, so the answer is {a:E1.nomore}.'
      ]
    },
    impression: {
      resembles: 'e-m-nocut', first: 'e-m-fee',
      text: [
        'A second look: does this remind you of a story you know? A fee of 1.2% that a friend calls robbery may bring back Mara first, and Mara’s story was {o:feecore}. So the likeness and the answer seem to disagree.',
        'When that happens, go back to the question and find the words that answer it: {cue:E1}. Mara’s story had nothing like them: her adviser had done nothing since the fund was chosen. The story this one really looks like is Kamal’s, a flat price for named work, so the answer stands.'
      ]
    } }
]);
