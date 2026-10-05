// Wealth Preservation, Unit Five, parts three and four: the key's question as a question, the two worked cases, and the three cards
// that close the unit after the drill. This is an action subject (subject.action is true), so the unit ends with a plan card (lesson
// standard A11, P26). The app prints, on the question card: the question, what it is for, each answer with when it is given and what it
// leads to, why it decides, and for every pair already compared the question that separates it.

FC.cards('wealth', 'u5', [

  /* ---------- The key's question, as a question ---------- */
  { id: 'q-handover', kind: 'question', step: 'H1',
    h: 'The question you have been answering all along',
    link: 'Since Edith’s will you have seen the question at the foot of each new name, with one answer under it. This card puts the question and its five answers in one place, and says why it is asked.',
    decides: [
      'The name comes from what the case shows could go wrong, and not from the size of the money, the age of the owner, or what somebody is selling. Rosalind’s two cases had the same flat, the same savings and the same divorce, and got different names, because of one sentence about one paper.',
      'Something bought for a problem the case does not show, such as a family trust for a family with nothing to answer, costs money every year and answers nothing. And notice what is not asked. It does not ask what has been done. A case about a handover is read for what it shows: a paper, a sum, a rise, a person. The cure is the name, and the name is chosen only once the question has been answered.'
    ],
    how: [
      'Read the whole case, the last sentence included, and look in it for each of the four things that can go wrong, one at a time. For each, ask whether you can put your finger on the words.',
      '{a:H1.papers}: {needs:basicdocs}.',
      '{a:H1.bigestate}: {needs:gifting}.',
      '{a:H1.growth}: {needs:trust}.',
      '{a:H1.people}: {needs:governance}.',
      'If you can point to the words for exactly one, that is the answer. If you can point to none of the four, ask whether you can point to the words that show every paper current: that is {a:H1.inorder}, and what you must be able to point to is this: {needs:simple}. If you cannot point even to that, you do not have an answer yet.',
      'Whichever answer you give, put your finger on the words: the paper and what is wrong with it, the estate and the line, the thing and the rise, or the person and what shows the risk.',
      'Do the sums where there are sums. The line is the same in every case here, so a quick subtraction tells you whether the estate is above it. A case can hide the sum in two figures, a house and a sum of savings, that have to be added first.'
    ],
    whenBoth: 'Some cases show two of the answers at once, and a rule says which answer wins. You have met the two rules for this. Where a case shows a paper that is missing or out of date and anything else, the answer is {a:H1.papers}: it is the cheapest thing, and everything else rests on it. Where a case shows the estate above the line with money to spare and also something about to rise sharply, the answer is {a:H1.growth}, because the rise is the larger problem and has a deadline. Each pair below has been set side by side earlier in this unit, and each has one question that separates it.' },

  { id: 'check-handover-question', kind: 'check', after: 'H1',
    case: 'c-step',
    ask: { type: 'step', step: 'H1' } },

  /* ---------- Two whole cases, watched ---------- */
  { id: 'worked-spare', kind: 'worked',
    h: 'A whole case, from the first question to the name',
    link: 'You have the five names and the question about them. Before you run a case yourself, watch two being run from the top, in the order the questions are asked. You are not asked anything until the end of each.',
    case: 'w5-wk-1',
    steps: [
      { step: 'D1',
        reason: 'The first question comes first, as it does for every case. What the case says is on Fabian’s mind: {cue:D1}. That is the moment money passes to other people. Nothing here comes out of his money every year, no one thing is most of it, and no bill falls due on a date, so the answer is {a:D1.handover}.' },
      { step: 'H1',
        reason: 'Now put the four things to the case one at a time. The papers: his will, forms and power of attorney were renewed last year, so none is missing. The people: his two children get on well. A rise: nothing he owns is expected to change much in value. What the case does show is this: {cue:H1}. £1,350,000 less £500,000 is £850,000, and 40% of that is £340,000, which would be taken at his death. His income is £10,000 a year more than he spends. That is the estate above the line, with money to spare, and nothing about to grow.' }
    ],
    hold: {
      neighbour: 'simple',
      prompt: { kind: 'reason',
        lead: 'Fabian’s papers were all renewed last year and his children get on well, so the case can look like one where nothing needs doing.',
        choices: [
          { id: 'a', text: 'His will, forms and power of attorney were all renewed last year.',
            note: 'True, and it is why the case can look like {o:simple}. But current papers are only half of that name. It also needs the estate below the limit, or nothing in it in question, and this estate is not below the limit.' },
          { id: 'b', text: 'His estate is £1,350,000, which is £850,000 above the limit, and he has £10,000 a year more than he spends.' },
          { id: 'c', text: 'His two children get on well.',
            note: 'True, and it rules out a risk in the people. But it fits both names, so it cannot tell you which of the two this is.' }
        ],
        answer: 'b' },
      reason: [
        'For {o:simple} you must be able to point to this: {needs:simple}. Fabian’s papers are current and the children get on well, but his estate is far above the limit, so something in the case could go wrong at the handover: £340,000 of tax.',
        'It is the question from Ellis. {test:gifting~simple} Here the estate is above the line and there is money to spare, so the answer is {a:H1.bigestate}.'
      ]
    },
    impression: {
      resembles: 'm-harold',
      text: [
        'You have the answer. Now take a second look of a different kind: does this case look like one you know? It should bring back Harold: a widower, the estate above the line, a pension that pays more than he spends, and nothing about to rise.',
        'Here the answer and the likeness agree, so it stands. The question comes first, because it makes you point at words in the case. The likeness is only a second look. When the two disagree, do not pick the one you prefer. Go back to the question and find the words in the case that answer it. The second whole case shows how.'
      ]
    } },

  { id: 'worked-golfclub', kind: 'worked',
    h: 'A second whole case, where the loudest thing points the wrong way',
    link: 'Fabian’s was a clean case: one thing was going on in it. In this second case the most noticeable thing in the story is not what decides it. Watch which words each question picks out.',
    case: 'w5-wk-2',
    steps: [
      { step: 'D1',
        reason: 'What the case gives you is what Zainab is wondering about: {cue:D1}. That is the moment her money passes to other people. No charge, no loan, no one holding and no fall in prices is in the case, so the answer is {a:D1.handover}.' },
      { step: 'H1',
        reason: 'A friend at the golf club has talked about a family trust, which is the loudest thing in the case. But a friend’s advice is not something the case shows could go wrong, so put the four things to it one at a time. Tax: £380,000 is £120,000 below the line, so the tax would be £0. A rise: nothing she holds is expected to rise sharply. The people: her daughters get on well. The papers: {cue:H1}. The will names a man who has died, and so does the pension form. Two of the three papers are out of date, and {t:poa} is not mentioned.' }
    ],
    hold: {
      neighbour: 'trust',
      prompt: { kind: 'reason',
        lead: 'A friend at the golf club says she should get a family trust, so the case can look like one about moving money out of the estate.',
        choices: [
          { id: 'a', text: 'A friend at the golf club told her she should get a family trust.',
            note: 'True, and it is why the case can look like {o:trust}. But a friend’s advice is not something she holds that is expected to rise sharply, so it cannot settle which of the two this is.' },
          { id: 'b', text: 'Her will leaves everything to her husband, who died last year, and the form on her pension names him too.' },
          { id: 'c', text: 'Her house and savings come to £380,000.',
            note: 'True, and it is a reason a family trust would be wasted, because there is no tax to save. But it does not say what is wrong, and that is what decides the name.' }
        ],
        answer: 'b' },
      reason: [
        'For {o:trust} you must be able to point to this: {needs:trust}. Nothing Zainab holds is expected to rise sharply, and her estate is below the line, so a family trust would cost money every year to answer a tax problem she does not have.',
        'It is the question from Florin. {test:basicdocs~trust} Here two papers name a man who has died, so the answer is {a:H1.papers}.'
      ]
    },
    impression: {
      resembles: 'm-edith', first: 'm-anselm',
      text: [
        'Now the second look: does this case look like one you know? A friend’s advice about a family trust, and a couple of papers, may bring back Anselm and Marit first, and Anselm and Marit’s case was {o:simple}. So here the likeness and the answer seem to disagree.',
        'When that happens, go back to the question and find the words in the case that answer it. They are {cue:H1}. Anselm and Marit’s case had the opposite: every paper renewed the spring before. Zainab’s case really looks like Edith’s: a will that names a husband who has died. So the answer stands.'
      ]
    } },

  /* ---------- After the drill ---------- */
  { id: 'recap-handover', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now run the questions on your own. This card puts the unit in one place.',
    carry: [
      'Before any cure, ask what is at risk at the handover, and point to the words in the case that show it. If you cannot point, you do not have an answer yet.',
      'The papers come first. A will, {t:benform} and {t:poa} that are missing, or no longer match the person’s life, are the answer whatever else the case holds, because they are the cheapest thing to put right and everything else rests on them.',
      'A sum has a line. Add up what the owner will leave and set it against the tax-free limit. Below it, the tax is nothing. Above it, ask first whether something in the estate is expected to rise sharply: if it is, that rise is the answer. If nothing is, and there is money to spare, it is {a:H1.bigestate}.',
      'A risk in the people is its own answer. It needs words in the case that show it, and it is met by written rules, agreed early.',
      '{a:H1.inorder} is a real answer, and a common one. It needs words that show the papers current, not words that are missing. If you cannot point to something that could go wrong, do not invent it, and do not buy a structure for a problem the case does not have.',
      'Holding money in {t:trustword} is a tool, not a name. It is used for {o:trust}, and it can be used for other things. What decides the name is what the case is about.',
      'The numbers here are examples. The line, the rate, the yearly gift and the waiting time are set by each country and change. The ways the handover can go wrong stay the same.'
    ] },

  { id: 'transfer-handover', kind: 'transfer',
    h: 'Where would you meet this?',
    link: 'The last step is yours, and nothing on this card is marked.',
    ask: [
      'Knowing the five names is one step. Noticing the moment to use one is a separate step, and only you know where those moments are in your life.',
      'Pick one of the five and name an occasion of your own: something you read, something you were told, or something you did. The lines under each name are there to jog your memory.'
    ],
    prompts: [
      { outcome: 'basicdocs', occasion: 'The last time you looked at who is named on your pension form, your insurance and your will, and whether anyone is named to act for you if you cannot.' },
      { outcome: 'simple', occasion: 'A time when someone offered you a structure, a review or a product for your money after you were gone, and your papers were already in order.' },
      { outcome: 'gifting', occasion: 'Someone you know, or you, with a large house and more income than they spend, and what the tax would take at a death.' },
      { outcome: 'trust', occasion: 'Something you or someone you know holds, such as land, a stake in a business or shares in a young firm, that could be worth many times more in a few years.' },
      { outcome: 'governance', occasion: 'A relative you have said you would not trust with a lump sum, or two people who could never run something together.' }
    ],
    places: ['At home', 'At work', 'In the news', 'In my own head'] },

  { id: 'plan-handover', kind: 'plan', optional: true,
    h: 'A plan, if you want one',
    link: 'This last card is optional, and it is the only one that asks you to decide something. If you want to, write one line you can keep.',
    intro: 'A plan is one sentence in two parts: what you will notice, and what you will then do. The lines below are examples to start from. You can change them or write your own, and nothing is saved until you press the button.',
    cues: [
      { cue: 'someone offers me a family trust, a structure or a review of what happens after I die', then: 'I ask what could go wrong in my own case that it answers, in numbers, and I check my three papers first.' },
      { cue: 'there is a marriage, a divorce, a birth or a death in my family', then: 'I read the name on my will, on every form held by a pension company or a bank, and on my power of attorney, and I change any that no longer fit.' },
      { cue: 'I hold something that could be worth many times more soon', then: 'I add up my estate as it is and as it would be after the rise, and I ask a specialist lawyer what a move would cost before I do anything.' },
      { cue: 'I know someone who will receive money and I am worried about what they will do with it', then: 'I talk to them early, say why, and write the rules into the papers.' }
    ] }
]);
