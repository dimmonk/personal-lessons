// Wealth Preservation, Unit Five, part two (second half): the word trust, the second of the two tax names, and the exception that
// separates them.

FC.cards('wealth', 'u5', [

  /* ---------- The word the fourth name is built on ---------- */
  { id: 'term-trustword', kind: 'term', term: 'trustword',
    h: 'Money held by someone else for someone else',
    link: 'The second tax name is often carried out with one particular arrangement, and you need to know what it is before you see why anyone uses it. It is not about tax at first. Here it is in its simplest form.',
    case: 't-trustword',
    plain: [
      'Beatrice has $240,000 and a plan: her grandchildren are to have it, but not before each is 25. She cannot make that happen by saying so. So she signs a paper with a firm of lawyers, and the paper sets out the rules. The firm holds the money. It pays each grandchild a third, $80,000, when they turn 25. It may pay tuition on the way. It may not spend the money on anything else.',
      'Three parties are in that arrangement: Beatrice, who put the money in; the firm, which holds it and carries out the rules; and the grandchildren, for whom it is held. Once she has signed, the money is no longer Beatrice’s to spend, and it is not the firm’s either. It is held for the grandchildren, under written terms.'
    ],
    after: ['The firm in the middle has a name. It is the trustee, and what it carries out is the written terms. The whole arrangement is what the word means. Nothing in Beatrice’s case is about tax. This arrangement is a way of deciding who holds money and under what rules, and tax comes into it later.', 'In the US you will hear of two kinds. A revocable living trust is one the owner can change or end at any time; many people use one so that what it holds passes to their family without probate, and it saves no estate tax, because the owner still controls it. An irrevocable trust, like Beatrice’s once it is signed, cannot be undone, and what is in it is no longer the owner’s.'] },

  /* ---------- Move it out of the estate before it grows ---------- */
  { id: 'meet-trust', kind: 'meet', outcome: 'trust',
    link: 'You have the word for the tax and the word for the arrangement. Here is the second tax name, in a case where the estate is not yet large, but one thing in it is about to be.',
    case: 'm-selim', mark: 'H1',
    strip: [
      'A farmer, Selim, with a field worth $1,000,000 and $25,000,000 of everything else, already above the tax-free limit.',
      'The county plans to rezone the field for 120 houses, and once it is rezoned it would be worth about $30,000,000 within three years.',
      'The tax is charged on the estate as it is on the day he dies, and the field would then be a very large part of it.',
      'His papers are in order, and nothing here is about the people.'
    ],
    explain: [
      'First the sums. Today Selim’s estate is $1,000,000 and $25,000,000, which is $26,000,000, already above the limit, so every $1,000,000 more in it costs $400,000. Now let the rezoning come. The field is worth $30,000,000 and the estate $55,000,000. The rise is $29,000,000, and 40% of it is $11,600,000 of new tax.',
      'Now what he can do. The tax is charged on what he owns on the day he dies. If the field is no longer his on that day, it is not in the sum. Suppose he had moved the field out of his estate while it was worth $1,000,000. The move is a gift, and it uses up $1,000,000 of his tax-free limit, measured at what the field was worth on the day. Then the rise from $1,000,000 to $30,000,000 happens to something that is not his, and the $11,600,000 of new tax is not owed. Moving it out is the one thing that touches that rise.',
      'That is why the timing is the whole of the idea. After the rezoning, the field is worth $30,000,000, and moving it out then is a gift of $30,000,000, which is a very different matter. Before, it is a move of $1,000,000. The move is done while the thing is small, and the growth happens outside the estate. Small yearly gifts, as with {o:gifting}, cannot do this: they would take a lifetime and more to move a field.',
      'It is not free. The move is a gift, which uses up part of the tax-free limit and brings gift tax if it is larger than what is left of the limit. Only an arrangement the owner cannot undo, an irrevocable trust, takes the thing out of the estate, so control passes to the trustee for good. Something given away also loses the step-up at death, so a later sale brings tax on the gain that the step-up would have wiped out. It costs money to set up and money every year to keep going. It is worth it only when what it saves is far more than it costs, and it is a job for a specialist attorney. The name does not say to do it. It says to recognize the case: something the owner holds is expected to rise sharply, and the tax on the rise is the larger problem.'
    ],
    feature: { step: 'H1', option: 'growth' },
    name: 'The name for this is {o:trust}. It names what is done and when: the thing is moved out of the estate while it is still worth little, so that the rise happens outside it. The usual way is {t:trustword}, the arrangement you met with Beatrice. The other way is a company the family sets up to own the thing, in which the children hold the shares.' },

  { id: 'again-trust', kind: 'again', outcome: 'trust',
    link: 'Selim’s case gave you what to point to: {needs:trust}. Here is a second case with a different story: not land but a company, and a buyer who has already agreed.',
    first: 'm-selim', second: 'a-cecile', step: 'H1',
    instruction: 'Find what the two cases share. Ignore that one is a field and the other a stake in a firm. Look at one thing only: what shows that something the owner holds is expected to be worth far more.',
    prompt: { kind: 'phrase', answer: 'A larger company has signed an agreement to buy the firm for $50,000,000 in two years if a test passes, and her share would then be worth $30,000,000' },
    shared: [
      'Today Cecile’s estate is $500,000 and $20,000,000, which is $20,500,000, already above the limit. If the sale goes through, her shares are worth $30,000,000 and her estate $50,000,000, and the rise of $29,500,000 brings $11,800,000 of new tax. If the shares had been moved out of her estate while they were worth $500,000, the rise would have happened outside it.',
      'The story is as different as it can be. Selim has land and a plan on a map, Cecile has a stake in a company and an agreement. What they share is something the owner holds, a rise that is expected, and a tax that would be charged on it at a death. That is what {o:trust} names.'
    ] },

  { id: 'portrait-trust', kind: 'portrait', outcome: 'trust',
    link: 'You know what to point to. This card fills in the rest of the picture, so that you can spot {o:trust} in real life, where nobody marks the words for you.',
    typical: [
      'It starts from something that is expected to be worth much more than it is now: land that may be rezoned, a young company, shares in a firm that a buyer wants. There is usually a reason you can point to: a plan, an agreement, an offer.',
      'The estate may be small today. What matters is what it will be after the rise, because the tax is charged on what is there at the end.',
      'Timing is the whole of the idea. The move has to be made before the rise, because after it the thing is already worth the larger sum.',
      'It has costs you can see: set-up fees, yearly fees, the part of the tax-free limit the move uses up, the step-up that is lost, and control that passes to a trustee. It is worth it only when the saving is far more.',
      'It needs a specialist. The rules are complicated, differ from state to state, and change.'
    ],
    not: 'Holding money under written terms, as {t:trustword} does, is not the same as {o:trust}. Beatrice’s condo money is held for her grandchildren in that way, and nothing in it was expected to rise. The arrangement can be used for many reasons. The name is for moving something out of the estate before it grows. And a large estate with nothing expected to rise sharply is the case for {o:gifting}, not this.',
    wild: ['“The field might be rezoned next year.”', '“A buyer is circling the business.”', '“Everyone with a company has a family trust.”', '“Put it in the children’s names before it takes off.”'],
    self: 'In your own life it is the one thing you hold that could be worth many times more in a few years: a stake in a business, land, a stake in something young.',
    ask: '“What do I hold that could be worth many times more than it is now, and would the extra count in my estate when I die?”',
    act: [
      'List what you hold that could be worth many times more, and write down the evidence for the rise: a plan, an agreement, an offer.',
      'Add up the estate as it is today and as it would be after the rise, and work out the tax each time.',
      'Before you move anything, ask a specialist attorney three things: what the move itself costs in tax and fees, what it costs each year, and what control you give up.',
      'Go ahead only if what it saves is far more than it costs, and do it before the rise. Keep the papers current in the meantime.'
    ] },

  { id: 'check-trust', kind: 'check', after: 'trust',
    case: 'c-cormac',
    ask: { type: 'option', step: 'H1', among: ['papers', 'inorder', 'bigestate', 'growth'] } },

  /* ---------- The exception: a big estate and money to spare, with something about to grow ---------- */
  { id: 'exc-vineyard', kind: 'exception', looksLike: 'gifting', is: 'trust', ledger: 'gifting~trust',
    h: 'A big estate, money to spare, and something about to grow',
    link: 'The last card separated the two tax names with tidy cases. Real cases are often less tidy: a sum above the limit, money to spare, and also something about to grow. Here is one.',
    case: 'exc-vineyard-case',
    setup: 'Leopold’s estate is far above the limit, and his investments pay him $500,000 a year more than he spends. That is what you point to for {o:gifting}, and gifts from that spare money would be sensible. Yet this case is {o:trust}.',
    prompt: { kind: 'phrase', answer: 'An appraiser says the vineyard could be worth $20,000,000 within four years' },
    because: [
      'Look at the sizes. Leopold’s estate is $30,000,000 today, far above the limit. If the vineyard rises from $2,000,000 to $20,000,000, that is $18,000,000 more in the estate, and 40% of it is $7,200,000 of new tax. Gifts of $10,000 a year to each of two children for ten years would take $200,000 out of the estate and save $80,000. The rise is ninety times larger than anything the gifts could touch.',
      'The spare money is real, and gifts are still sensible. But when the two are in one case, the thing that decides what to do first is the rise, because it has a deadline: it has to be moved before the value grows. Gifts can go on beside it.'
    ],
    take: 'This is settled one way on purpose, and it is worth knowing that it is a decision. A real adviser might do both. Each case gets one name, by the larger problem, so that two people using the same questions reach the same answer and can each say why.' }
]);
