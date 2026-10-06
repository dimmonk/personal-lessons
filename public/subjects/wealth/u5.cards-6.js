// Wealth Preservation, Unit Five, parts two and three (close): the question, the worked case, and the two cards that close the unit
// after the drill. This is an action subject (subject.action is true), so the unit ends with a plan card (lesson standard A11, P26).

FC.cards('wealth', 'u5', [

  /* ---------- The question ---------- */
  { id: 'q-handover', kind: 'question', step: 'H1',
    h: 'The question you have been answering all along',
    link: 'This card puts the question and its five answers in one place.',
    decides: [
      'The name comes from what the case shows could go wrong, and not from the size of the money, the age of the owner, or what somebody is selling. Rosalind’s two cases had the same condo, the same savings and the same divorce, and got different names, because of one sentence about one paper.'
    ],
    how: [
      'Read the whole case, the last sentence included, and look in it for each of the four things that can go wrong, one at a time. For each, ask whether you can put your finger on the words.',
      '{a:H1.papers}: {needs:basicdocs}.',
      '{a:H1.bigestate}: {needs:gifting}.',
      '{a:H1.growth}: {needs:trust}.',
      '{a:H1.people}: {needs:governance}.',
      'If you can point to the words for exactly one, that is the answer. If you can point to none of the four, ask whether you can point to the words that show every paper current: that is {a:H1.inorder}, and what you must be able to point to is this: {needs:simple}. If you cannot point even to that, you do not have an answer yet.',
      'Do the sums where there are sums. Where a sum is above the limit, every $1,000,000 more costs $400,000. A case can hide what matters in two figures, such as a house and a sum of savings, that have to be added first.'
    ],
    whenBoth: 'Sometimes two answers both seem to fit. Each pair below has one question that separates it. Four of the pairs have no card of their own: {o:basicdocs} with {o:governance}, {o:basicdocs} with {o:trust}, {o:gifting} with {o:simple}, and {o:trust} with {o:governance}.' },

  { id: 'check-handover-question', kind: 'check', after: 'H1',
    case: 'c-step',
    ask: { type: 'step', step: 'H1' } },

  /* ---------- A whole case, watched ---------- */
  { id: 'worked-golfclub', kind: 'worked',
    h: 'A whole case, from the first question to the name',
    link: 'Before you run a case yourself, watch one being run from the top, in the order the questions are asked. In this case the most noticeable thing in the story is not what decides it. You are not asked anything until the end.',
    case: 'w5-wk-2',
    steps: [
      { step: 'D1',
        reason: 'What the case gives you is what Zainab is wondering about: {cue:D1}. That is the moment her money passes to other people. No charge, loan or fall in prices is in the case, and no one holding is most of it, so the answer is {a:D1.handover}.' },
      { step: 'H1',
        reason: 'A friend at the golf club has talked about a family trust, which is the loudest thing in the case. But a friend’s advice is not something the case shows could go wrong, so put the four things to it one at a time. Tax: $380,000 is far below the tax-free limit, so the tax would be $0. A rise: nothing she holds is expected to rise sharply. The people: her daughters get on well. The papers: {cue:H1}. The will names a man who has died, and so does the form on her IRA.' }
    ],
    hold: {
      neighbor: 'trust',
      prompt: { kind: 'reason',
        lead: 'A friend at the golf club says she should get a family trust, so the case can look like one about moving money out of the estate.',
        choices: [
          { id: 'a', text: 'A friend at the golf club told her she should get a family trust.',
            note: 'True, and it is why the case can look like {o:trust}. But a friend’s advice is not something she holds that is expected to rise sharply, so it cannot settle which of the two this is.' },
          { id: 'b', text: 'Her will leaves everything to her husband, who died last year, and the beneficiary form on her IRA names him too.' },
          { id: 'c', text: 'Her house and savings come to $380,000.',
            note: 'True, and it is a reason a family trust would be wasted, because there is no tax to save. But it does not say what is wrong, and that is what decides the name.' }
        ],
        answer: 'b' },
      reason: [
        'For {o:trust} you must be able to point to this: {needs:trust}. Nothing Zainab holds is expected to rise sharply, and her estate is far below the limit, so a family trust would cost money every year to answer a tax problem she does not have.',
        '{test:basicdocs~trust} Here a will and a form name a man who has died, so the answer is {a:H1.papers}.'
      ]
    },
    impression: {
      resembles: 'm-edith', first: 'm-anselm',
      text: [
        'Now the second look: does this case look like one you know? A friend’s advice about a family trust and a few papers may bring back Anselm and Marit first, and theirs was {o:simple}. So here the likeness and the answer seem to disagree.',
        'When that happens, go back to the question and find the words in the case that answer it: {cue:H1}. Anselm and Marit had the opposite: every paper renewed the spring before. Zainab’s case really looks like Edith’s: a will that names a husband who has died. So the answer stands.'
      ]
    } },

  /* ---------- After the drill ---------- */
  { id: 'recap-handover', kind: 'recap',
    h: 'What to carry away',
    link: 'This card puts the unit in one place.',
    carry: [
      'Before any cure, ask what is at risk at the handover, and point to the words in the case that show it. If you cannot point, you do not have an answer yet.',
      'The papers come first. A will, {t:benform} and {t:poa} that are missing, or no longer match the person’s life, are the answer whatever else the case holds, because they are the cheapest thing to put right and everything else rests on them.',
      'A sum has a limit. Below it, the tax is nothing. Above it, ask first whether something in the estate is expected to rise sharply: if it is, that rise is the answer. If nothing is, and there is money to spare, it is {a:H1.bigestate}.',
      'A risk in the people is its own answer. It needs words in the case that show it, and it is met by written rules, agreed early.',
      '{a:H1.inorder} is a real answer, and a common one. It needs words that show the papers current. If you cannot point to something that could go wrong, do not invent it, and do not buy a structure for a problem the case does not have.',
      'Holding money in {t:trustword} is a tool, not a name. It is used for {o:trust}, and it can be used for other things.'
    ] },

  { id: 'plan-handover', kind: 'plan', optional: true,
    h: 'A plan, if you want one',
    link: 'This last card is optional, and it is the only one that asks you to decide something. If you want to, write one line you can keep.',
    intro: 'A plan is one sentence in two parts: what you will notice, and what you will then do. The lines below are examples to start from. You can change them or write your own, and nothing is saved until you press the button.',
    cues: [
      { cue: 'someone offers me a family trust, a structure or a review of what happens after I die', then: 'I ask what could go wrong in my own case that it answers, in numbers, and I check my three papers first.' },
      { cue: 'there is a marriage, a divorce, a birth or a death in my family', then: 'I read the name on my will, on every beneficiary form held by a 401(k) or IRA provider, an insurer or a bank, and on my power of attorney, and I change any that no longer fit.' },
      { cue: 'I hold something that could be worth many times more soon', then: 'I add up my estate as it is and as it would be after the rise, and I ask a specialist lawyer what a move would cost before I do anything.' },
      { cue: 'I know someone who will receive money and I am worried about what they will do with it', then: 'I talk to them early, say why, and write the rules into the papers.' }
    ] }
]);
