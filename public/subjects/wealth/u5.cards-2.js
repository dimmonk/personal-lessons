// Wealth Preservation, Unit Five, part one (second half): the leave-alone name, and the first look-alike pair.

FC.cards('wealth', 'u5', [

  /* ---------- Nothing more needed ---------- */
  { id: 'meet-simple', kind: 'meet', outcome: 'simple',
    link: 'So far the name has been something to put right: a paper that is stale or missing. The papers can also be in good order, and there is a name for that. You need it as much as the first: without it, every case about a will looks like a case with something wrong.',
    case: 'm-anselm', mark: 'H1',
    strip: [
      'One couple, with a house and savings that come to £410,000.',
      'Their wills, pension forms and powers of attorney were all renewed last spring.',
      'The tax-free limit is £500,000, and they are below it.',
      'Their children get on well, and nothing here is about the people who will receive the money.',
      'A stranger at a seminar says they need a family trust. The case gives no problem for a family trust to answer.'
    ],
    explain: [
      'This case is about a handover, and something in it can look like a handover problem: a man at a seminar says every couple their age needs a family trust. So look for what could go wrong, and ask whether you can point to it in the words of the case.',
      'The papers are not the problem. Every one of the three was brought up to date last spring. The tax is not the problem either. The country takes 40% of whatever a person leaves above £500,000, and Anselm and Marit’s £410,000 is £90,000 below that, so the tax on it is 40% of nothing, which is £0. And the people are not the problem: the children get on well, and nothing here suggests any of them will not look after what they receive.',
      'A family trust would cost money to set up and money every year to run. It would be bought to answer a problem that nothing here shows. The honest answer is that nothing more needs doing. That is a real answer, and as common as the others. It does not say that nothing could ever go wrong. It says that in this case, nothing is shown.'
    ],
    feature: { step: 'H1', option: 'inorder' },
    name: 'The name for this is {o:simple}. It says that the papers are current and that nothing else in the case is in question, so there is nothing more to arrange. “More” matters: the papers were already done.' },

  { id: 'again-simple', kind: 'again', outcome: 'simple',
    link: 'The first case gave you what to point to: {needs:simple}. Here is a second case with a different story, with someone much younger and a different person offering something.',
    first: 'm-anselm', second: 'a-nasir', step: 'H1',
    instruction: 'Find what the two cases share. Ignore the difference between a couple of 68 and a single man of 38, and between a stranger’s advice and an accountant’s remark. Look at one thing only: what shows that the papers are current.',
    prompt: { kind: 'phrase', answer: 'In January he wrote a will leaving everything to his sister, changed the form on his workplace pension to name her, and signed a power of attorney in her favour' },
    shared: [
      'In both cases there are three papers, and in both every one of them was written or renewed lately, to match the life the person has now. In both, the estate is far below the £500,000 limit, so no tax would come out. In both, someone mentions a family trust, and in both the case shows nothing for a family trust to answer.',
      'Nasir has no children, no house to speak of and no partner, and Anselm and Marit have a house and two children. That makes no difference. What the two cases share is a set of current papers and nothing else in question. That is what {o:simple} names.'
    ] },

  { id: 'portrait-simple', kind: 'portrait', outcome: 'simple',
    link: 'You know what to point to. This card fills in the rest of the picture, so that you can recognise {o:simple} when the case is quiet.',
    typical: [
      'It is an answer reached by pointing, not by finding nothing. You can put your finger on the words that show each paper is current. A case that says nothing at all about the papers has not shown them current.',
      'It often arrives with an offer: a family trust, a review, a structure, something to buy. The offer is not a problem in the case. It is a sale.',
      'The estate is below the tax-free limit, or nothing in it is in question, and nothing here suggests a person who will receive the money is at risk.',
      'It is cheap: it asks nothing of the owner now. It is also not permanent. A marriage, a birth, a death, a big rise in what the owner has, or a falling-out in the family, and the answer has to be asked again.'
    ],
    not: 'It does not mean that nothing could go wrong in the family’s life. It means that in this case, nothing is shown. It is not the answer when the papers are never mentioned, and it is not the answer when the papers are in perfect order and the case is about heirs who do not speak: that case is about the people.',
    wild: ['“We’ve got it all in order.”', '“Everyone says you need a trust.”', '“Our lawyer did all that last year.”', '“At your age you really need a structure.”', '“We’re well under the limit.”'],
    self: 'In your own life it is the evening you check your papers, find them current, and are then phoned by someone who wants to sell you something for after you are gone.',
    ask: '“Can I point to the words that show each paper is current, and can I point to anything the papers do not answer?”',
    act: [
      'Say no to the offer for now. A structure costs money every year, and nothing here gives it a job.',
      'Ask the person making the offer: “What could go wrong in my case that this answers, in numbers?” If they cannot say, you have your answer.',
      'Write down the date you checked the papers, and set a reminder to look again after the next marriage, divorce, birth or death, or after a big change in what you own.'
    ] },

  { id: 'check-simple', kind: 'check', after: 'simple',
    case: 'c-fenella',
    ask: { type: 'option', step: 'H1', among: ['papers', 'inorder'] } },

  /* ---------- The first look-alike pair ---------- */
  { id: 'look-basicdocs-simple', kind: 'lookalike', ledger: 'basicdocs~simple',
    link: 'You have met both names on their own. They are easy to mix up, because both are about the same three papers and the same kind of person. This card puts them side by side.',
    cases: ['la-form-stale', 'la-form-current'],
    instruction: 'Both cases are about Rosalind, who divorced six years ago and has the same flat and the same savings. Compare one thing: what the case says about the papers.',
    prompt: { kind: 'which', option: 'H1.inorder', answer: 'la-form-current' },
    difference: [
      'In Case A Rosalind divorced six years ago and her pension form still names her former husband. If she died tomorrow, that form would pay the pension to him. The answer is {a:H1.papers}, and the case is {o:basicdocs}.',
      'In Case B she changed the form the month after the divorce, and she rewrote her will and signed {t:poa} at the same time. All three papers match her life, and the estate is £380,000, below the limit. The answer is {a:H1.inorder}, and the case is {o:simple}.',
      'The divorce, the flat and the savings are the same in both. What differs is one sentence about one paper. That is why you can never name a case from its story.'
    ] }
]);
