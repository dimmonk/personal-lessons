// Wealth Preservation, Unit Five, part two (second half): the word trust, the second of the two tax names, and the exception that
// separates them.

FC.cards('wealth', 'u5', [

  /* ---------- The word the fourth name is built on ---------- */
  { id: 'term-trustword', kind: 'term', term: 'trustword',
    h: 'Money held by someone else for someone else',
    link: 'The second tax name is often carried out with one particular arrangement. Here it is in its simplest form, before any tax comes into it.',
    case: 't-trustword',
    plain: [
      'Beatrice cannot make her grandchildren wait until 25 by saying so, so she signs a paper with a firm of lawyers. The firm is the trustee and the paper’s rules are the terms. Each grandchild gets $80,000 at 25, and the firm may spend the money on nothing else but tuition. The whole arrangement is what the word “trust” means: the money is held for the grandchildren under written terms. Nothing here is about tax. It is a way of deciding who holds money and under what rules.'
    ],
    after: 'A revocable living trust can be changed or ended by the owner at any time, and it saves no estate tax, because the owner still controls it. An irrevocable trust cannot be undone, and what is in it is no longer the owner’s.' },

  /* ---------- Move it out of the estate before it grows ---------- */
  { id: 'meet-trust', kind: 'meet', outcome: 'trust',
    link: 'The second tax name, in a case where one thing the owner holds is about to become very valuable.',
    case: 'm-selim', mark: 'H1',
    strip: [
      'A farmer, Selim, with a field worth $1,000,000 and $25,000,000 of everything else, already above the tax-free limit.',
      'The county plans to rezone the field for 120 houses, and once it is rezoned it would be worth about $30,000,000 within three years.',
      'His papers are in order, and nothing here is about the people.'
    ],
    explain: [
      'Today Selim’s estate is $26,000,000, already above the limit. If the rezoning comes, the field is worth $30,000,000 and the estate $55,000,000. The rise of $29,000,000 brings $11,600,000 of new tax.',
      'The tax is charged on what he owns on the day he dies. If the field is not his on that day, it is not in the sum. So he moves the field out of his estate while it is worth $1,000,000. The move is a gift, and it uses up $1,000,000 of his tax-free limit. Then the rise happens to something that is not his. Timing is the whole idea: after the rezoning, moving it out is a gift of $30,000,000. Small yearly gifts, as with {o:gifting}, could never move a field.',
      'It is not free. Only an arrangement the owner cannot undo, an irrevocable trust, takes the thing out of the estate, so control passes to a trustee for good. It costs money to set up and every year to run, and it needs a specialist attorney. It is worth it only when the tax saved is far more. The name does not say to do it. It says to recognize the case: something the owner holds is expected to rise sharply, and the tax on the rise is the larger problem.'
    ],
    feature: { step: 'H1', option: 'growth' },
    name: 'The name for this is {o:trust}. It names what is done and when: the thing is moved out of the estate while it is still worth little, so that the rise happens outside it. The usual way is {t:trustword}. The other is a company the family sets up to own it.',
    act: [
      'List what you hold that could be worth many times more soon, and write down the evidence: a plan, an agreement, an offer.',
      'Before you move anything, ask a specialist attorney what the move costs in tax and fees, what it costs each year, and what control you give up. Go ahead only if the saving is far more, and do it before the rise.'
    ] },

  { id: 'check-trust', kind: 'check', after: 'trust',
    case: 'c-cormac',
    ask: { type: 'option', step: 'H1', among: ['papers', 'inorder', 'bigestate', 'growth'] } },

  /* ---------- The exception: a big estate and money to spare, with something about to grow ---------- */
  { id: 'exc-vineyard', kind: 'exception', looksLike: 'gifting', is: 'trust', ledger: 'gifting~trust',
    h: 'A big estate, money to spare, and something about to grow',
    link: 'Real cases are often less tidy: a sum above the limit, money to spare, and also something about to grow.',
    case: 'exc-vineyard-case',
    setup: 'Leopold’s estate is far above the limit, and his investments pay him $500,000 a year more than he spends. That is what you point to for {o:gifting}, and gifts from that spare money would be sensible. Yet this case is {o:trust}.',
    prompt: { kind: 'phrase', answer: 'An appraiser says the vineyard could be worth $20,000,000 within four years' },
    because: [
      'Leopold’s estate is $30,000,000 today. If the vineyard rises from $2,000,000 to $20,000,000, that is $18,000,000 more, and 40% of it is $7,200,000 of new tax. Gifts of $10,000 a year to each of two children for ten years would take $200,000 out and save $80,000. The rise is ninety times larger than anything the gifts could touch.',
      'The spare money is real, and gifts can go on beside it. But the rise comes first, because it has a deadline: it has to be moved before the value grows.'
    ] }
]);
