// Wealth Preservation, Unit Five, part two (second half): the word trust, the second of the two tax names, and the exception that
// separates them.

FC.cards('wealth', 'u5', [

  /* ---------- The word the fourth name is built on ---------- */
  { id: 'term-trustword', kind: 'term', term: 'trustword',
    h: 'Money held by someone else for someone else',
    link: 'The second tax problem is often fixed with one tool. Here it is in its simplest form, before any tax comes into it.',
    case: 't-trustword',
    plain: [
      'Beatrice cannot make her grandchildren wait until 25 just by asking. The paper does it: the firm is the trustee, the paper’s rules are the terms, each grandchild gets $80,000 at 25, and until then the firm may spend the money on tuition and nothing else.',
      'That is {t:trustword}: money held for other people under written terms. Nothing here is about tax. It is only a way of deciding who holds money and under what rules.'
    ],
    after: 'A revocable living trust can be changed or ended by the owner at any time, and it saves no estate tax, because the owner still controls it. An irrevocable trust cannot be undone, and what is in it is no longer the owner’s.' },

  /* ---------- Move it out of the estate before it grows ---------- */
  { id: 'meet-trust', kind: 'meet', outcome: 'trust',
    link: 'The second tax problem, in a story where one thing the owner holds is about to become very valuable.',
    case: 'm-selim', mark: 'H1',
    explain: [
      'Today Selim’s estate is $26,000,000, already above the limit. If the rezoning comes, the field is worth $30,000,000 and the estate $55,000,000. The rise of $29,000,000 brings $11,600,000 of new tax.',
      'The tax is charged on what he owns on the day he dies, so if the field is not his that day, it is not in the sum. He moves the field out of his estate now, while it is worth $1,000,000. The move is a gift, and it uses up $1,000,000 of his tax-free limit. Then the rise happens to something that is not his. Timing is the whole idea: after the rezoning, moving it out would be a gift of $30,000,000. Small yearly gifts, as in {o:gifting}, could never move a field.',
      'It is not free. Only an irrevocable trust, which the owner cannot undo, takes something out of the estate, so control passes to a trustee for good. It costs money to set up and every year to run, and it needs a specialist lawyer. It is worth it only when the tax saved is far more.'
    ],
    spot: [
      { do: 'Find something the owner holds that is expected to be worth many times more: Selim’s field, zoned for 120 houses.', why: 'A business or land is the usual example.' },
      { do: 'Find the evidence it will happen: the county’s new plan, and a developer who says $30,000,000 within three years.', why: 'A hope is not enough; a plan or an offer is.' },
      { do: 'Add up the estate before and after the rise: $26,000,000 now, $55,000,000 after.', why: 'The difference shows how much new tax the rise brings.' },
      { do: 'Check the papers are current: Selim’s were renewed last year.', why: 'If a paper is out of date, fix that first.' }
    ],
    feature: { step: 'H1', option: 'growth' },
    name: 'This is {o:trust}: the thing is moved out of the estate while it is still worth little, so the rise happens outside it. The usual way is {t:trustword}, or a company the family sets up to own it.',
    act: [
      { do: 'List what you hold that could soon be worth many times more, and write down the evidence: a plan, an agreement, an offer.', why: 'Without evidence there is nothing to act on.' },
      { do: 'Before you move anything, ask a specialist lawyer what the move costs in tax and fees, what it costs each year, and what control you give up.', why: 'The saving has to be far bigger than all three.' },
      { do: 'If the saving is far bigger, move it before the rise.', why: 'After the rise, the same move is a much bigger gift.' }
    ] },

  { id: 'check-trust', kind: 'check', after: 'trust',
    case: 'c-cormac',
    ask: { type: 'option', step: 'H1', among: ['papers', 'inorder', 'bigestate', 'growth'] } },

  /* ---------- The exception: a big estate and money to spare, with something about to grow ---------- */
  { id: 'exc-vineyard', kind: 'exception', looksLike: 'gifting', is: 'trust', ledger: 'gifting~trust',
    h: 'A big estate, money to spare, and something about to shoot up in value',
    link: 'Real stories are often messier: everything the owner leaves is above the limit, there is money to spare, and something is about to shoot up in value.',
    case: 'exc-vineyard-case',
    setup: 'Leopold’s estate is far above the limit, and his investments pay him $500,000 a year more than he spends. That is what you look for in {o:gifting}, and gifts from that spare money would be sensible. Yet this story is {o:trust}.',
    prompt: { kind: 'phrase', answer: 'An appraiser says the vineyard could be worth $20,000,000 within four years' },
    because: [
      'Leopold’s estate is $30,000,000 today. If the vineyard rises from $2,000,000 to $20,000,000, that is $18,000,000 more, and 40% of it is $7,200,000 of new tax. Gifts of $10,000 a year to each of two children for ten years would take out $200,000 and save $80,000. The rise is ninety times bigger than anything the gifts could touch.',
      'The spare money is real, and gifts can go on beside the fix. But the rise comes first, because it has a deadline: it has to be moved before the value grows.'
    ] }
]);
