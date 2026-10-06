// Wealth Preservation, Unit Three, part three (second half): the word "an LLC", several properties or businesses in one
// name, its look-alike pair with the claim bigger than the insurance, and the exception in which the answer is the claim.
// Field guide: see u3.cards-1.js.

FC.cards('wealth', 'u3', [

  /* ---------- The word "an LLC" ---------- */
  { id: 'w3-term-company', kind: 'term', term: 'company',
    h: 'A business that the law treats as a person',
    link: 'The next answer is about several properties or businesses that could each bring {t:claim}, and its remedy leans on one more word. Here it is in a case that shows what the word does.',
    case: 'w3-h-t-company',
    plain: [
      'Ana and Bo each own a small house worth $250,000 that they rent out, and each lives in a home worth $500,000. In each rental house a tenant is badly hurt in a fall, and wins $400,000. Each owner’s insurance pays $100,000, which leaves $300,000 to find. The two owners have the same rental, the same home and the same loss. What differs is whose name the rental is in.',
      'Ana owns her rental in her own name. A court order against Ana is an order against Ana, and it can reach everything she owns in her name that the law does not protect. $300,000 is more than the rental’s $250,000, so in most states the court can reach her home for the other $50,000.',
      'Bo’s rental belongs to a company he set up, of the kind most small landlords use. The law treats a company as a person of its own: it owns things and owes its debts in its own name. The tenant’s claim is against the company, and the company owns the rental and $20,000 in the bank, $270,000 in all. The company can pay $270,000 and no more, and the remaining $30,000 is not Bo’s to pay. His home is in his own name, so it is out of reach.',
      'Bo loses the rental. Ana loses the rental and $50,000 of her home. The company did not make the claim go away. It stopped the claim at the edge of what the company owns.',
      'Two limits, so that the picture is true. A company does not shield an owner from their own wrongdoing, and a lender will often ask the owner to promise personally to repay the company’s loan, which puts the owner’s own money back in reach. And a company costs money: it has to be set up, and in most states it pays a fee and files a report every year.'
    ],
    after: 'A company of this kind is {t:company}. From here on, when a case says a property or a business is in a company of its own, it means a company like Bo’s: a claim reaches what the company owns and, normally, no further.' },

  /* ---------- Several properties or businesses, all in the owner's own name ---------- */
  { id: 'w3-meet-entity', kind: 'meet', outcome: 'entity',
    link: 'The last answer was about a gap between what a demand could be and what the insurance pays. The next is about a different gap: a demand on one property or business that could reach all the others, because they are all in the same name.',
    case: 'w3-h-ent-1', mark: 'S1',
    strip: [
      'There is one person, Chioma, with $1,900,000: six rental houses, a store and her own home, and $60,000 in savings.',
      'Each rental house and the store could bring {t:claim}: any of them could be the place where a tenant or a visitor is hurt.',
      'Every one of them is in her own name.',
      'The case does not say what any insurance pays.'
    ],
    explain: [
      'Look at the picture from a claimant’s side. If a tenant is hurt in one of Chioma’s rental houses and wins, the order is against Chioma. Everything she owns in her own name is within reach: the other five rentals, the store, her savings and much of her home. As far as a court order is concerned, her $1,900,000 sits in one place. One rental is worth $200,000. The claim could reach nearly all $1,900,000.',
      'That is what the answer is about: not that any one property is risky, but that all of them are held in a way that lets {t:claim} on one reach the rest. The properties could each be fine, and the shape would still be there.',
      'The fix is to hold each property, or each business, in {t:company} of its own, as Bo did. Then {t:claim} on one rental is paid from what that company owns. If every rental is in its own company, {t:claim} on the house on Mill Road reaches $200,000 and no more: not the other five rentals, not the store, not her home. $1,900,000 at stake comes down to $200,000 at most, plus whatever cash that company holds.',
      'There is a price, and the answer is right only where the saving is larger than the price. Each company has to be set up and kept, with yearly state fees and filings, and moving a property into a company can bring its own taxes and fees. A lender may ask for a personal promise to repay. For one small rental the price may be more than it is worth. For six rentals, a store and a home, it often is not.'
    ],
    feature: { step: 'S1', option: 'onename' },
    name: [
      'The answer is {a:S1.onename}, and the name of what to do about it is {o:entity}. The name says what the fix is, and the “each” in it is the point: one company for each property or business, and not one company for all of them.',
      'One company for all of them would put {t:claim} on one back in reach of the rest.'
    ] },

  { id: 'w3-again-entity', kind: 'again', outcome: 'entity',
    link: 'The last case was about rental houses. Here is a second case, with no rentals in it, in which the same one-name shape is in three small businesses.',
    first: 'w3-h-ent-1', second: 'w3-h-ent-2', step: 'S1',
    instruction: 'Find what the two cases share. Ignore the difference between rental houses and businesses, and ignore what each business sells. Look at one thing only: which words show how the properties or businesses are held?',
    prompt: { kind: 'phrase', answer: 'each started in his own name and not through a company' },
    shared: [
      'Chioma’s rentals and Ewan’s café, bike shop and gym share one shape: more than one place where someone could be hurt, and every one of them held in the owner’s own name. Chioma’s $1,900,000 and Ewan’s $1,100,000 are each within reach of any one claim.',
      'Ewan’s three businesses add something to Chioma’s picture. Each of them has customers and staff, and each could be sued on its own. In his own name they share one pot. The gym is worth $280,000 and the café $170,000, and {t:claim} on the gym could reach the café, the bike shop, his house worth $450,000 and his $80,000 of savings: $1,100,000 in all.',
      'That is what {a:S1.onename} names. It holds for rental houses, stores and businesses, whatever they sell.'
    ] },

  { id: 'w3-portrait-entity', kind: 'portrait', outcome: 'entity',
    link: 'You now know what to point to for {a:S1.onename}. Here is the rest of the picture.',
    typical: [
      'The person owns several things, not one, and each could be where something goes wrong: a tenant, a customer, a worker, a guest.',
      'They are held in the owner’s own name, often because that is how they were bought. Nobody chose it. It was simply never changed.',
      'Often the case counts the owner’s home among what {t:claim} could reach, which is what makes it feel personal.',
      'Each one may be small, and the problem is the sum that sits within reach of any one.',
      'Nothing has gone wrong. The case is about the shape.'
    ],
    not: [
      'One property that could bring {t:claim}, with insurance far below it, is {o:insure}. There the gap is the problem and not how things are held.',
      'And properties already held in separate companies are not this answer. With each in a company of its own, {t:claim} on one stops at that company’s edge, and the case is {o:safe}. The words to look for are the words that say who holds each one.'
    ],
    wild: ['"It’s all in my name."', '"I bought them one at a time, as myself."', '"The tenants are fine. I’ve never had a claim."', '"My house is in my name too."'],
    self: 'In your own life, look at the deeds and the accounts: whose name is on each property or business. If every one has your own name on it, any one could bring {t:claim} that reaches the rest.',
    ask: '“If something went wrong in this one, what else could the claim reach?” If the answer is everything, because everything is in one name, you are probably looking at this answer.',
    act: [
      'First, list every property and business, with its value and the name it is held in, and mark your own home.',
      'Second, check the insurance on each. Cover that is too small is the cheaper first fix, and when it is in the case the answer is {a:S1.bigclaim}.',
      'Third, ask an attorney for a written quote for putting each into its own company: the one-off cost, the yearly cost, any tax and fees on moving it, and what each lender would require, such as a personal promise to repay.',
      'Fourth, set the yearly cost against what each company would keep out of reach, and go ahead only where the saving is clearly larger. Below some size it is not worth it.',
      'Fifth, keep each company’s money and affairs apart from your own: a company run as if it were the owner’s purse can lose its protection.'
    ] },

  { id: 'w3-check-entity', kind: 'check', after: 'entity',
    case: 'w3-h-ent-chk',
    ask: { type: 'option', step: 'S1', among: ['freeheld', 'blocked', 'ownrun', 'madesafe', 'bigclaim', 'onename'] } },

  { id: 'w3-look-insure-entity', kind: 'lookalike', ledger: 'insure~entity',
    link: 'These two answers both come from the same two things: claims, and what {t:claim} could reach. They are easy to mix up. This card puts them side by side, with the same person in both.',
    cases: ['w3-h-la-ie-a', 'w3-h-la-ie-b'],
    instruction: 'Both cases are about Maureen, who rents out houses. Compare one thing: whether the case shows {t:claim} bigger than the insurance, or only how the properties are held.',
    prompt: { kind: 'which', option: 'S1.bigclaim', answer: 'w3-h-la-ie-a' },
    difference: [
      'In Case A she has one rental house. A lawyer says a tenant badly hurt on its stairs could win $1,200,000, and her insurance pays up to $250,000: a gap of $950,000. The answer is {a:S1.bigclaim}, and the name is {o:insure}. With one rental there is nothing to separate it from.',
      'In Case B she has five rental houses and her own home, all in her own name, and the case says nothing about {t:claim} bigger than the insurance. A demand on one could reach the other four and her home. The answer is {a:S1.onename}, and the name is {o:entity}.',
      'The first case is about the size of one claim. The second is about the reach of any claim. A case can show both at once, and when it does, the answer is the first.'
    ] },

  { id: 'w3-exc-insure', kind: 'exception', looksLike: 'entity', is: 'insure', ledger: 'insure~entity',
    h: 'Several properties in one name, and the answer is still the insurance',
    link: 'A case with several properties in one name looks like {o:entity}. This card shows a case in which the properties are exactly that, and the answer is a different one.',
    case: 'w3-h-exc-ins',
    setup: 'Kwame has five rental houses and his own home, all in his own name. That is what {o:entity} usually looks like, and it is true. Yet the answer for this case is {a:S1.bigclaim}, and the name is {o:insure}.',
    prompt: { kind: 'phrase', answer: 'a tenant badly hurt in a fall there could win $2,000,000' },
    because: [
      'Look at what the case shows besides the properties. A lawyer says {t:claim} on the oldest house could reach $2,000,000, and the landlord’s insurance pays up to $300,000. The gap is $1,700,000. Kwame owns $1,400,000 in all, so this one claim could take nearly everything he has, whether the houses are in one name or not.',
      'Companies would cut the reach of {t:claim}, as they did for Bo. But they would not pay it, and the house with the stairs would still be in the claim’s way. More coverage would pay it. It is the cheaper first fix, because its cost is a premium and not a set of companies, and it deals with the size of the claim, which is what threatens most of what he has.',
      'This is a decision and not a fact of nature: real advisers differ about which to do first. The answer is the claim bigger than the insurance, because insurance pays the claim itself and costs less than setting up and running six companies.'
    ],
    take: 'The insurance comes first. When it is well above the biggest claim, what is left to say about the properties depends on the case as it then stands.' }
]);
