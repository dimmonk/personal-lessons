// Wealth Preservation, Unit Three, part two (first half): a claim bigger than the insurance, the word "an LLC", several properties
// or businesses in one name, and the exception in which the answer is the claim. Field guide: see u3.cards-1.js.

FC.cards('wealth', 'u3', [

  /* ---------- A claim bigger than the insurance ---------- */
  { id: 'w3-meet-insure', kind: 'meet', outcome: 'insure',
    link: 'The next answers are about harm that one person could be ordered to pay for. It starts with the simplest case: someone with insurance, and a demand that could be bigger.',
    case: 'w3-h-ins-1', mark: 'S1',
    strip: [
      'There is one person, Hari, with a house worth $700,000 and $250,000 in savings and investments: $950,000 in all.',
      'Something in his life could bring {t:claim} against him: a swimming pool that the neighbors’ children use.',
      'His insurance has a limit: it pays up to $500,000 if someone is hurt on his property.',
      'A demand could be much bigger than that: a lawyer says a serious injury to a child can lead to a demand for $2,000,000 or more.'
    ],
    explain: [
      'What matters is the gap between what {t:claim} could be and what the insurance pays: $2,000,000 less $500,000 is $1,500,000, more than the $950,000 Hari owns. A court can order a gap like that paid from whatever the law does not protect, and savings and investments like his are in reach, so one accident at the pool could take them and much of the house. Whether he would be found at fault is for a court. The case shows the size of what could be demanded.',
      'The fix is more insurance on top of what he has. Extra coverage of $2,000,000 would meet a demand of $2,500,000 from the insurer and not from the house. It usually costs little next to what it covers, so the first step is to ask for a quote. It will not pay for harm done on purpose, and policies have exclusions, so read what it leaves out. If his insurance paid $2,500,000, above any claim a lawyer could name, the case would be {o:safe}.'
    ],
    feature: { step: 'S1', option: 'bigclaim' },
    name: 'The answer is {a:S1.bigclaim}, and the name of what to do about it is {o:insure}. “The big loss” is the part of {t:claim} that the insurance you hold would leave unpaid, and “insure” is what to do about it. The name does not say {t:claim} will come, only that if one did, there would be a gap.',
    act: 'Find the limit on each policy that would answer {t:claim} by someone else (home, car, rented property, business) and put it next to the biggest claim a lawyer or insurer thinks realistic. If the claim is far larger, get a quote for extra coverage on top: the amount, the price a year, and what it leaves out. Check again when something changes: a new driver, a pool, another property.' },

  { id: 'w3-check-insure', kind: 'check', after: 'insure',
    case: 'w3-h-ins-chk',
    ask: { type: 'option', step: 'S1', among: ['freeheld', 'blocked', 'ownrun', 'madesafe', 'bigclaim'] } },

  /* ---------- The word "an LLC" ---------- */
  { id: 'w3-term-company', kind: 'term', term: 'company',
    h: 'A business that the law treats as a person',
    link: 'The next answer is about several properties or businesses that could each bring {t:claim}, and its remedy leans on one more word. Here it is in a case that shows what the word does.',
    case: 'w3-h-t-company',
    plain: [
      'The two owners have the same rental, the same home and the same loss: $300,000 to find after the insurance. What differs is whose name the rental is in.',
      'Ana holds hers in her own name, so the order is against Ana and can reach everything she owns that the law does not protect: the rental’s $250,000, and in most states her home for the other $50,000.',
      'Bo holds his in a company he set up, of the kind most small landlords use. The law treats a company as a person of its own, so the claim is against the company, which owns the rental and $20,000 in the bank. It can pay $270,000 and no more, and the other $30,000 is not Bo’s to pay. His home is out of reach.',
      'The company did not make the claim go away. It stopped the claim at the edge of what the company owns. A company does cost money to set up and keep, it does not shield an owner from their own wrongdoing, and a lender will often ask the owner to promise personally to repay the company’s loan.'
    ],
    after: 'A company of this kind is {t:company}. From here on, when a case says a property or a business is in a company of its own, it means a company like Bo’s: {t:claim} reaches what the company owns and, normally, no further.' },

  /* ---------- Several properties or businesses, all in the owner's own name ---------- */
  { id: 'w3-meet-entity', kind: 'meet', outcome: 'entity',
    link: 'The last answer was about a gap between {t:claim} and the insurance. This one is about a different gap: a demand on one property that could reach all the others, because they are all in the same name.',
    case: 'w3-h-ent-1', mark: 'S1',
    strip: [
      'There is one person, Chioma, with $1,900,000: six rental houses, a store and her own home, and $60,000 in savings.',
      'Each rental house and the store could bring {t:claim}: any of them could be where a tenant or a visitor is hurt.',
      'Every one of them is in her own name.',
      'The case does not say what any insurance pays.'
    ],
    explain: [
      'If a tenant is hurt in one of Chioma’s rentals and wins, the order is against Chioma, and everything in her own name is within reach: the other five rentals, the store, her savings and much of her home. One rental is worth $200,000, and the claim could reach nearly all $1,900,000. Each property could be fine and the shape would still be there.',
      'The fix is to hold each property in {t:company} of its own, as Bo did. Then {t:claim} on the house on Mill Road reaches $200,000, plus whatever cash that company holds, and no more: not the other rentals, not the store, not her home.',
      'There is a price: yearly state fees and filings for each company, possible tax and fees on moving a property into one, and a lender may ask for a personal promise to repay. For one small rental the price may be more than it is worth. For six rentals, a store and a home it often is not. If each property were already in a company of its own, the case would be {o:safe}.'
    ],
    feature: { step: 'S1', option: 'onename' },
    name: 'The answer is {a:S1.onename}, and the name of what to do about it is {o:entity}. The “each” is the point: one company for each property or business, and not one company for all of them, which would put {t:claim} on one back in reach of the rest.',
    act: 'List every property and business with its value and whose name holds it. Check the insurance on each first: too little is the cheaper first fix. Then ask an attorney for a written quote for a company for each: the one-off cost, the yearly cost, any tax and fees on moving it, and what each lender would require. Go ahead only where the saving is clearly larger than the cost, and keep each company’s money apart from your own.' },

  { id: 'w3-check-entity', kind: 'check', after: 'entity',
    case: 'w3-h-ent-chk',
    ask: { type: 'option', step: 'S1', among: ['freeheld', 'blocked', 'ownrun', 'madesafe', 'bigclaim', 'onename'] } },

  { id: 'w3-exc-insure', kind: 'exception', looksLike: 'entity', is: 'insure', ledger: 'insure~entity',
    h: 'Several properties in one name, and the answer is still the insurance',
    link: 'A case with several properties in one name looks like {o:entity}. This case has exactly that, and the answer is a different one.',
    case: 'w3-h-exc-ins',
    setup: 'Kwame has five rental houses and his own home, all in his own name. That is what {o:entity} usually looks like, and it is true. Yet the answer for this case is {a:S1.bigclaim}, and the name is {o:insure}.',
    prompt: { kind: 'phrase', answer: 'a tenant badly hurt in a fall there could win $2,000,000' },
    because: [
      'Look at what else the case shows. A lawyer says {t:claim} on the oldest house could reach $2,000,000, and the insurance pays up to $300,000: a gap of $1,700,000. Kwame owns $1,400,000 in all, so this one claim could take nearly everything he has, whether the houses are in one name or not.',
      'Companies would cut the reach of {t:claim}, as they did for Bo, but they would not pay it. More coverage pays the claim itself, and costs less than setting up and running six companies, so it comes first.'
    ] }
]);
