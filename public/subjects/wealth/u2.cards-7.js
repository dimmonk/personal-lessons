// Wealth Preservation, Unit Two, part three (second half): the question, and one whole case. The app prints the stem of each hold-back prompt
// ("Why is this X and not Y? ...") and the heading of the second look.

FC.cards('wealth', 'u2', [

  /* ---------- The question ---------- */
  { id: 'q-erosion', kind: 'question', step: 'E1',
    h: 'The question you have been answering all along',
    link: 'This card puts the question and its six answers in one place, and says why it is asked.',
    decides: [
      'Two people with the same pot and the same yearly loss of $3,000 can need opposite things. One pays $3,000 to someone who chose investments and did nothing else. The other pays $3,000 for a tax return, a check of a will and a plan. The size is the same and the people are the same. The answer for the first is {a:E1.picking} and for the second {a:E1.nomore}. Only what the money is for tells them apart.',
      'That is why the question is what is taking the money out, and not how large the sum is, who is paid, or whether it sounds fair. Applied to a case that shows {a:E1.nomore}, any of the fixes costs money and fixes nothing.'
    ],
    how: [
      'Read the whole case. Then look for the words that show what comes out, and ask the question of them. You should be able to put your finger on the words: a charge and what it pays for, a tax bill and what it is on, or a sum and what it was set against. If you cannot, you do not yet have an answer.',
      'A quick first step is to see where the money goes. To a firm or an adviser, the answer is {a:E1.picking} or {a:E1.nomore}. To the IRS, it is one of the three about tax. If it is the person’s own spending, it is {a:E1.fixedsum} or, again, {a:E1.nomore}. That narrows the choice. It does not make it: the words in the case do.',
      'A sound case, the sixth answer, is not a case with nothing coming out. Something comes out, and the case shows it is worth it or already as low as it can be. If you can point to the words that show that, the answer is {a:E1.nomore}. If you cannot point to words for any of the six, do not invent a problem.'
    ],
    whenBoth: 'Each pair that seems to fit has been set side by side, and each has one question that separates it. One more thing from the first question. When a case shows {a:D1.timing} and also a sale to put {t:mix} back where the sale itself would bring a tax bill that new money could do without, the answer to the first question is {a:D1.erosion}, and the answer to this one is {a:E1.needlesssale}. A sum fixed in dollars and left unchanged while a fall in prices shrinks {t:pot} is treated the same way, and the answer here is {a:E1.fixedsum}.' },

  { id: 'check-erosion', kind: 'check', after: 'E1',
    case: 'e-c-step',
    ask: { type: 'step', step: 'E1' } },

  /* ---------- One whole case ---------- */
  { id: 'worked-planner', kind: 'worked',
    h: 'A whole case, where the loudest thing points the wrong way',
    link: 'Watch one case run from the top, in the order the questions are asked. The first thing you notice in it is not the thing that decides it.',
    case: 'e-w-rui',
    steps: [
      { step: 'D1',
        reason: 'What the case gives you is a sum that comes out of {t:pot} every year: {cue:D1}. It is the loudest thing in the case, but at this question it only tells you where to look. Nothing in it is one thing that is most of Rui’s money, a bill in a fall, or a handover.' },
      { step: 'E1',
        reason: 'The friend’s remark is about size: 1.2% of $700,000. The words that answer the question are about what the charge is for: {cue:E1}. It is a flat sum, not a percentage of {t:pot}, and it pays for returns, a spending plan and the papers of a late mother that Rui says he could not sort alone. No commission is taken, and nobody is paid for choosing: the money is in index funds.' }
    ],
    hold: {
      neighbor: 'feecore',
      prompt: { kind: 'reason',
        lead: 'A friend has called the charge 1.2% of {t:pot} and said Rui is being robbed. A big percentage is how a charge for choosing looks, so the case can look like a problem to fix.',
        choices: [
          { id: 'a', text: 'The charge is 1.2% of $700,000, which is $8,400 a year.',
            note: 'True, and it is why the case can look like a charge for choosing. But the size says nothing about what the charge pays for.' },
          { id: 'b', text: 'The charge is a flat sum for named work that Rui says he could not do alone.' },
          { id: 'c', text: 'Rui’s friend thinks he is being robbed.',
            note: 'True, but it is only a remark. It does not show what the charge pays for.' }
        ],
        answer: 'b' },
      reason: [
        'For {o:feecore} you must be able to point to this: {needs:feecore}. Rui’s charge is large, but it is not a percentage of {t:pot} for choosing investments and nothing else. It pays for named work that would not otherwise get done, at a price that is flat.',
        'It is the question from Gwen and Ann. {test:feecore~nocut} Here the $8,400 pays for returns, a plan and papers, and the price stays the same whatever {t:pot} does, so the answer is {a:E1.nomore}.'
      ]
    },
    impression: {
      resembles: 'e-m-nocut', first: 'e-m-fee',
      text: [
        'Now the second look: does this case look like one you know? A charge of 1.2% that a friend calls robbery may bring back Mara first, and Mara’s case was {o:feecore}. So here the likeness and the answer seem to disagree.',
        'When that happens, go back to the question and find the words in the case that answer it. They are {cue:E1}. Mara’s case had nothing like them: her adviser had done nothing else since the fund was chosen. The case this one really looks like is Kamal’s, a flat price for named work, and the answer stands.'
      ]
    } }
]);
