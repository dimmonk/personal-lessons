// Wealth Preservation, Unit Five, parts two and three (close): the question, the worked story, and the two cards that close the unit
// after the drill. This is an action subject (subject.action is true), so the unit ends with a plan card (lesson standard A11, P26).

FC.cards('wealth', 'u5', [

  /* ---------- The question ---------- */
  { id: 'q-handover', kind: 'question', step: 'H1',
    h: 'The question to ask every time',
    link: 'This card puts the question and its five answers in one place.',
    decides: [
      'The answer comes from what the story shows could go wrong, and not from the size of the money, the age of the owner, or what somebody is selling. Rosalind’s two stories had the same condo, the same savings and the same divorce, and got different answers, because of one sentence about one paper.'
    ],
    how: [
      { do: 'Read the whole story, the last sentence too.', why: 'The sentence that decides it is often the last.' },
      { do: 'First check the three papers: is any one missing, or wrong for the person’s life now?', why: 'If so, the answer is {a:H1.papers}, however big the estate is.' },
      { do: 'Next look for something the owner holds that is about to shoot up in value.', why: 'If there is one, the answer is {a:H1.growth}.' },
      { do: 'Next add up the estate, compare it with the limit, and look for money to spare.', why: 'Above the limit with money to spare, and nothing about to shoot up, is {a:H1.bigestate}.' },
      { do: 'Next look at the people: an heir in trouble with money, a marriage about to start or end, heirs who will not agree.', why: 'That is {a:H1.people}.' },
      { do: 'If none of the four is there, look for the words that show every paper is current.', why: 'That is {a:H1.inorder}.' },
      { do: 'Find the exact words that show your answer.', why: 'If you cannot find them, you do not have an answer yet.' },
      { do: 'Do the sums where there are sums: above the limit, every $1,000,000 more costs $400,000.', why: 'Two figures, such as a house and savings, may need adding first.' }
    ],
    whenBoth: 'Sometimes two answers both seem to fit. Each pair below has one question that tells it apart. Four of the pairs have no card of their own: {o:basicdocs} with {o:governance}, {o:basicdocs} with {o:trust}, {o:gifting} with {o:simple}, and {o:trust} with {o:governance}.' },

  { id: 'check-handover-question', kind: 'check', after: 'H1',
    case: 'c-step',
    ask: { type: 'step', step: 'H1' } },

  /* ---------- A whole story, watched ---------- */
  { id: 'worked-golfclub', kind: 'worked',
    h: 'One whole story, where the loudest thing points the wrong way',
    link: 'Watch one story worked through. The loudest thing in it is not what decides it, so read to the end.',
    case: 'w5-wk-2',
    steps: [
      { step: 'D1',
        reason: [
          'What the story gives you is what Zainab is wondering about: {cue:D1}. That is the moment her money passes to other people.',
          'No fee, loan or fall in prices is in it, and nothing is most of her money, so the answer is {a:D1.handover}.'
        ] },
      { step: 'H1',
        reason: [
          'A friend at the golf club has talked about a family trust, which is the loudest thing in the story. But a friend’s advice is not something that could go wrong, so check the four things one at a time.',
          'Tax: $380,000 is far below the tax-free limit, so the tax is $0. A rise: nothing she holds is about to shoot up in value. The people: her daughters get on well. The papers: {cue:H1}. The will names a man who has died, and so does the form on her IRA.'
        ] }
    ],
    hold: {
      neighbor: 'trust',
      prompt: { kind: 'reason',
        lead: 'A friend at the golf club says she should get a family trust, so the story can look like one about moving money out of the estate. What decides it?',
        choices: [
          { id: 'a', text: 'A friend at the golf club told her she needs a family trust.',
            note: 'True, and it is why this looks like {o:trust}. But a friend’s advice is not something she holds that is about to shoot up in value.' },
          { id: 'b', text: 'Her will and her IRA form both name her husband, who died last year.' },
          { id: 'c', text: 'Her house and savings come to $380,000, far below the limit.',
            note: 'True, and it means a family trust would be wasted, because there is no tax to save. But it does not say what is wrong.' }
        ],
        answer: 'b' },
      reason: [
        'For {o:trust} the story must show this: {needs:trust}. Nothing Zainab holds is about to shoot up in value, and her estate is far below the limit, so a family trust would cost money every year to fix a tax problem she does not have.',
        '{test:basicdocs~trust} Here a will and a form name a man who has died, so the answer is {a:H1.papers}.'
      ]
    },
    impression: {
      resembles: 'm-edith', first: 'm-anselm',
      text: [
        'A second look: does this story remind you of one you know? A friend’s advice about a family trust and a few papers may bring back Anselm and Marit first, and theirs was {o:simple}. So here the likeness and the answer seem to disagree.',
        'When that happens, go back to the question and find the words that answer it: {cue:H1}. Anselm and Marit had the opposite: every paper renewed the spring before. Zainab’s story really looks like Edith’s: a will that names a husband who has died. So the answer stands.'
      ]
    } },

  /* ---------- After the drill ---------- */
  { id: 'recap-handover', kind: 'recap',
    h: 'What to carry away',
    link: 'This card puts the unit in one place.',
    carry: [
      'Before any fix, ask what could go wrong at the handover, and find the words in the story that show it. If you cannot find them, you do not have an answer yet.',
      'Check the papers first. A will, {t:benform} or {t:poa} that is missing, or wrong for the person’s life now, is the answer whatever else the story holds. It is the cheapest thing to fix, and everything else rests on it.',
      'Tax has a limit. Below it, the tax is nothing. Above it, ask first whether something the owner holds is about to shoot up in value: if it is, that rise is the answer. If nothing is, and there is money to spare, it is {a:H1.bigestate}.',
      'A risk in the people is its own answer. It needs words that show it, and it is met by written rules, agreed early.',
      '{a:H1.inorder} is a real answer, and a common one. It needs words that show the papers are current. If you cannot find anything that could go wrong, do not invent it, and do not buy {t:trustword} or a company for a problem the story does not have.',
      'Holding money in {t:trustword} is a tool, not an answer. It is used for {o:trust}, and it can be used for other things.'
    ] },

  { id: 'plan-handover', kind: 'plan', optional: true,
    h: 'A plan, if you want one',
    link: 'This last card is optional, and it is the only one that asks you to decide something. If you want to, write one line you can keep.',
    intro: 'A plan is one sentence in two parts: what you will notice, and what you will then do. The lines below are examples to start from. You can change them or write your own, and nothing is saved until you press the button.',
    cues: [
      { cue: 'someone offers me a family trust or a review of what happens after I die', then: 'ask what could go wrong in my own situation that it fixes, in numbers, and check my three papers first.' },
      { cue: 'there is a marriage, a divorce, a birth or a death in my family', then: 'read the name on my will, on every beneficiary form held by a 401(k) or IRA provider, an insurer or a bank, and on my power of attorney, and change any that no longer fit.' },
      { cue: 'I hold something that could be worth many times more soon', then: 'add up my estate as it is and as it would be after the rise, and ask a specialist lawyer what a move would cost before I do anything.' },
      { cue: 'I know someone who will receive money and I am worried about what they will do with it', then: 'talk to them early, say why, and write the rules into the papers.' }
    ] }
]);
