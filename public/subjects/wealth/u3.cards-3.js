// Wealth Preservation, Unit Three, part two (first half): a claim bigger than the insurance, the word "an LLC", several properties
// or businesses in one name, and the exception in which the answer is the claim. Field guide: see u3.cards-1.js.

FC.cards('wealth', 'u3', [

  /* ---------- A claim bigger than the insurance ---------- */
  { id: 'w3-meet-insure', kind: 'meet', outcome: 'insure',
    link: 'Next, harm that someone could ask you to pay for. Start with a person who has insurance, and a demand that could be bigger.',
    case: 'w3-h-ins-1', mark: 'S1',
    explain: [
      'What matters is the gap between what {t:claim} could be and what the insurance pays: $2,000,000 less $500,000 is $1,500,000, more than the $950,000 Hari owns. A court can order a gap like that paid from his savings and investments and from much of his house, so one accident at the pool could take most of what he has. Whether he would be at fault is for a court to decide. The story shows how big the demand could be.',
      'The fix is more insurance on top of what he has. Extra coverage of $2,000,000 would meet a demand of $2,500,000 from the insurer, not from his house. It usually costs little next to what it covers, so ask for a quote. It will not pay for harm done on purpose, and every policy has exclusions, so read what it leaves out. If his insurance paid more than any claim a lawyer could name, this would be {o:safe}.'
    ],
    spot: [
      { do: 'Find what could bring {t:claim}: the swimming pool that the neighbors’ children use.', why: 'A car, a home, a pool or a rental can all do it.' },
      { do: 'Find what the insurance pays: up to $500,000.', why: 'That is the most the insurer will cover.' },
      { do: 'Find how big {t:claim} could get: a lawyer says “$2,000,000 or more”.', why: 'Use a number from a lawyer or an insurer, not a guess.' },
      { do: 'Subtract: $2,000,000 less $500,000 leaves $1,500,000 uncovered.', why: 'If that gap is far bigger than what you can afford to lose, this is the answer.' }
    ],
    feature: { step: 'S1', option: 'bigclaim' },
    name: 'This is {a:S1.bigclaim}. What to do is {o:insure}: add insurance on top of what you have. It does not say {t:claim} will come, only that if one did, there would be a gap.',
    act: [
      { do: 'Find the limit on each policy that pays if someone sues you: home, car, rental, business.', why: 'Those limits are all the insurer will pay.' },
      { do: 'Put each limit next to the biggest claim a lawyer or insurer thinks is realistic.', why: 'The gap between them is what to close.' },
      { do: 'If the gap is large, get a quote for extra coverage: the amount, the price a year, and what it leaves out.', why: 'You decide with the price in front of you.' },
      { do: 'Check again when something changes: a new driver, a pool, another property.', why: 'Each one can open a new gap.' }
    ] },

  { id: 'w3-check-insure', kind: 'check', after: 'insure',
    case: 'w3-h-ins-chk',
    ask: { type: 'option', step: 'S1', among: ['freeheld', 'blocked', 'ownrun', 'madesafe', 'bigclaim'] } },

  /* ---------- The word "an LLC" ---------- */
  { id: 'w3-term-company', kind: 'term', term: 'company',
    h: 'A business that the law treats as a person',
    link: 'The next answer is about several properties that could each bring {t:claim}, and its fix uses one more word. Here is what the word does.',
    case: 'w3-h-t-company',
    plain: [
      'Ana and Bo have the same rental, the same home and the same loss: $300,000 to find after the insurance. The only difference is whose name the rental is in.',
      'Ana holds hers in her own name, so the order is against Ana and can reach everything she owns that the law does not protect: the rental’s $250,000 and, in most states, her home for the other $50,000.',
      'Bo holds his in a company he set up, of the kind most small landlords use. The law treats a company as a person of its own, so the claim is against the company. It owns the rental and $20,000 in the bank, so it can pay $270,000 and no more. The other $30,000 is not Bo’s to pay, and his home is out of reach.',
      'The company did not make the claim go away. It stopped the claim at the edge of what the company owns. A company costs money to set up and keep, it does not shield an owner from their own wrongdoing, and a lender will often ask the owner to promise personally to repay the company’s loan.'
    ],
    after: 'A company like Bo’s is {t:company}. From here on, when a story says a property or a business is in a company of its own, it means a company like Bo’s: {t:claim} reaches what the company owns and, normally, no further.' },

  /* ---------- Several properties or businesses, all in the owner's own name ---------- */
  { id: 'w3-meet-entity', kind: 'meet', outcome: 'entity',
    link: 'The last answer was about a gap between {t:claim} and the insurance. This one is a different gap: {t:claim} on one property that could reach all the others, because they are all in the same name.',
    case: 'w3-h-ent-1', mark: 'S1',
    explain: [
      'If a tenant is hurt in one of Chioma’s rentals and wins, the order is against Chioma, and everything in her own name is within reach: the other five rentals, the store, her savings and much of her home. One rental is worth $200,000, yet the claim could reach nearly all $1,900,000. Each property could be fine on its own and the risk would still be there.',
      'The fix is to hold each property in {t:company} of its own, as Bo did. Then {t:claim} on one rental reaches that rental, plus whatever cash its company holds, and no more: not the other rentals, not the store, not her home.',
      'There is a price: yearly state fees and filings for each company, possible tax and fees on moving a property into one, and a lender may ask for a personal promise to repay. For one small rental it may not be worth it. For six rentals, a store and a home it often is. If each property were already in a company of its own, this would be {o:safe}.'
    ],
    spot: [
      { do: 'List what could bring {t:claim}: six rentals and a store.', why: 'A tenant or a visitor could be hurt at any of them.' },
      { do: 'Check whose name holds each one: “Every one of them is in her own name”.', why: 'Then one claim can reach all the rest.' },
      { do: 'Check the insurance is not the bigger problem: here the story says nothing about it.', why: 'One claim far bigger than the insurance comes first.' }
    ],
    feature: { step: 'S1', option: 'onename' },
    name: 'This is {a:S1.onename}. What to do is {o:entity}: one company for each property or business, not one company for all of them, which would put {t:claim} on one back in reach of the rest.',
    act: [
      { do: 'List every property and business with its value and whose name holds it.', why: 'That shows what one claim could reach.' },
      { do: 'Check the insurance on each one first.', why: 'Too little insurance is the cheaper fix.' },
      { do: 'Ask an attorney for a written quote for a company for each: the one-off cost, the yearly cost, any tax and fees on moving it, and what each lender requires.', why: 'You need the price before you decide.' },
      { do: 'Go ahead only where the saving is clearly larger than the cost.', why: 'For a small property the companies can cost more than they protect.' },
      { do: 'Keep each company’s money apart from your own.', why: 'Mixing them can undo the protection.' }
    ] },

  { id: 'w3-check-entity', kind: 'check', after: 'entity',
    case: 'w3-h-ent-chk',
    ask: { type: 'option', step: 'S1', among: ['freeheld', 'blocked', 'ownrun', 'madesafe', 'bigclaim', 'onename'] } },

  { id: 'w3-exc-insure', kind: 'exception', looksLike: 'entity', is: 'insure', ledger: 'insure~entity',
    h: 'Several properties in one name, and the answer is still the insurance',
    link: 'Several properties in one name look like {o:entity}. This story has exactly that, and the answer is a different one.',
    case: 'w3-h-exc-ins',
    setup: 'Kwame has five rental houses and his own home, all in his own name. That is what {a:S1.onename} looks like, and it is true. Yet the answer here is {a:S1.bigclaim}, and the fix is {o:insure}.',
    prompt: { kind: 'phrase', answer: 'a tenant badly hurt in a fall there could win $2,000,000' },
    because: [
      'Look at what else the story shows. A lawyer says {t:claim} on the oldest house could reach $2,000,000, and the insurance pays up to $300,000: a gap of $1,700,000. Kwame owns $1,400,000 in all, so this one claim could take nearly everything he has, whether the houses are in one name or not.',
      'Companies would limit how far {t:claim} reaches, as they did for Bo, but they would not pay it. More insurance pays the claim itself and costs less than setting up and running six companies, so it comes first.'
    ] }
]);
