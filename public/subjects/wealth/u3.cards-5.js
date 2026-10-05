// Wealth Preservation, Unit Three, part three (first half): a claim bigger than the insurance, and its look-alike pair with the
// answer for what is already made safe. Field guide: see u3.cards-1.js.

FC.cards('wealth', 'u3', [

  { id: 'w3-meet-insure', kind: 'meet', outcome: 'insure',
    link: 'The next answers are about harm that one person could be ordered to pay for, the other thing the key’s first answer covers besides holdings. It starts with the simplest case: someone with insurance, and a demand that could be bigger.',
    case: 'w3-h-ins-1', mark: 'S1',
    strip: [
      'There is one person, Hari, with a house worth £700,000 and £250,000 in savings and a pension: £950,000 in all.',
      'Something in his life could bring {t:claim} against him: a swimming pool that the neighbours’ children use.',
      'His insurance has a limit: it pays up to £500,000 if someone is hurt on his property.',
      'A demand could be much bigger than that: a lawyer says a serious injury to a child can lead to a demand for £2,000,000 or more.'
    ],
    explain: [
      'You met {t:claim} in Unit One: a demand, backed by the courts, that someone pay for harm they are said to have caused. What matters here is the gap between what {t:claim} could be and what insurance would pay. Hari’s insurance pays up to £500,000. A serious injury to a child could lead to a demand for £2,000,000. The gap is £2,000,000 less £500,000, which is £1,500,000.',
      'The gap has to come from somewhere, and a court can order it paid from whatever Hari owns. All he owns is £950,000. So £1,500,000 is more than everything he has: one accident at the pool could take the house, the savings and the pension. Whether Hari would be found at fault is for a court to say. What the case shows is the size of what could be demanded.',
      'The fix is to buy more insurance that sits on top of what he has. Extra cover of this kind is sold for a set sum a year, and the price is usually small next to what it covers, but prices differ by place and by person, so the first step is to ask for a quote. With £2,000,000 of extra cover on top of his £500,000, Hari could meet a demand of £2,500,000 from the insurer and not from the house.',
      'It is a cure that costs little and leaves everything else as it is. That is why it comes before anything more complicated: it pays the claim itself.',
      'Insurance is not unlimited and it is not for everything. It will not pay for harm done on purpose, and policies have exclusions, so the extra cover has to be read for what it leaves out.'
    ],
    feature: { step: 'S1', option: 'bigclaim' },
    name: [
      'The key’s answer is {a:S1.bigclaim}, and the name of what to do about it is {o:insure}. In the name, “the big loss” is the part of {t:claim} that the insurance you hold would leave unpaid, and “insure” is what to do about it.',
      'The name does not say that {t:claim} will come. It says that if one did, there would be a gap.'
    ] },

  { id: 'w3-again-insure', kind: 'again', outcome: 'insure',
    link: 'The pool gave you what to point to: {needs:insure}. Here is a second case, with a car and a young driver, in which the same gap appears in a different place.',
    first: 'w3-h-ins-1', second: 'w3-h-ins-2', step: 'S1',
    instruction: 'Find what the two cases share. Ignore the difference between a pool and a car, and ignore who could be hurt. Look at one thing only: which words show the size of {t:claim} that could come?',
    prompt: { kind: 'phrase', answer: 'a crash that leaves a young person unable to work for life can lead to a demand for £5,000,000' },
    shared: [
      'Hari’s pool and Alicia’s car share one shape. Each person has something in their life that could bring {t:claim} against them. Each holds insurance with a limit: £500,000 for Hari, £1,000,000 for Alicia. And each could face a demand far above the limit: £2,000,000 and £5,000,000.',
      'Alicia owns a house worth £500,000 and has £150,000 in savings, £650,000 in all. Her gap, £5,000,000 less £1,000,000, is £4,000,000, more than six times everything she has. Hari’s gap is £1,500,000 against £950,000. In neither case has anything gone wrong yet.',
      'That is what {a:S1.bigclaim} names: something that could bring {t:claim}, and {t:claim} that could be far bigger than the insurance held. It holds for pools, cars, rented properties and businesses alike.'
    ] },

  { id: 'w3-portrait-insure', kind: 'portrait', outcome: 'insure',
    link: 'You now know what to point to for {a:S1.bigclaim}. Here is the rest of the picture.',
    typical: [
      'The case names something that brings other people into contact with the owner’s risk: a pool, a car, a young driver, a dog, a rented flat, a staircase.',
      'It gives two numbers, or the means to get them: the limit of the insurance, and the size {t:claim} could reach. The gap between them is what to point to.',
      'The claim is a possibility and not an event. Nothing has been demanded yet, and the person is often unaware that the insurance has a limit.',
      'The harm that makes {t:claim} need not be the owner’s fault in any way they would recognise. A visitor falls on a stair that was always there.',
      'The size of {t:claim} can be set by what the injured person could never earn again, not by what the owner has.'
    ],
    not: [
      'Having a lot of insurance is not this answer. Having insurance with a limit far below what {t:claim} could be is. If the cover is well above any claim the case shows could come, the case is {o:safe}.',
      'And {t:claim} here is not only a lawsuit that has started. It is the demand that could come.'
    ],
    wild: ['"I’m covered."', '"My policy pays up to half a million."', '"Our children’s friends are round all summer."', '"My son has just passed his test."', '"The tenant slipped on the stairs."'],
    self: 'In your own life, look at the documents for your house, your car and any property you let: the line that says what the policy pays if someone else is harmed. Then ask what the worst realistic claim would be.',
    ask: '“What is the most this policy pays if someone is hurt, and what is the biggest claim anyone could make?” If the second number is far larger than the first, you are probably looking at this answer.',
    act: [
      'First, find the limit on each policy that would answer {t:claim} by someone else (home, car, rented property, business) and write it next to the biggest claim an insurer or a lawyer thinks realistic.',
      'Second, ask a broker or an insurer for a quote for extra cover for harm to others that sits on top of what you have: the amount, the price a year, and what it leaves out.',
      'Third, buy cover that is well above the biggest realistic claim, and keep the policies underneath it in force, because extra cover usually depends on them.',
      'Fourth, check again once a year, and whenever something changes: a new driver, a pool, another property, a new business.'
    ] },

  { id: 'w3-check-insure', kind: 'check', after: 'insure',
    case: 'w3-h-ins-chk',
    ask: { type: 'option', step: 'S1', among: ['freeheld', 'blocked', 'ownrun', 'madesafe', 'bigclaim'] } },

  { id: 'w3-look-insure-safe', kind: 'lookalike', ledger: 'insure~safe',
    link: 'You have now met two answers in which insurance is in the case. They are easy to mix up, because the same dog and the same house can turn up in both. This card puts them side by side, with the same person in both.',
    cases: ['w3-h-la-is-a', 'w3-h-la-is-b'],
    instruction: 'Both cases are about Dana, who owns a house worth £650,000 and a large dog that visitors often meet, and both mention a lawyer’s view that a serious bite could lead to a demand for £1,500,000. Compare one thing: how the insurance limit compares with that figure.',
    prompt: { kind: 'which', option: 'S1.bigclaim', answer: 'w3-h-la-is-a' },
    difference: [
      'In Case A the insurance pays up to £250,000 and a demand could be £1,500,000: a gap of £1,250,000, which is nearly twice the value of Dana’s house. The key’s answer is {a:S1.bigclaim}, and the name is {o:insure}.',
      'In Case B the demand could still be £1,500,000, but the insurance pays up to £2,500,000, which is £1,000,000 more than the demand. Nothing could be left unpaid, so no claim could reach the house. The key’s answer is {a:S1.madesafe}, and the name is {o:safe}: the thing that could bring {t:claim} is already made safe, and there is nothing to buy.',
      'The dog, the house, the lawyer and the possible demand are the same in both. Only the insurance limit changes, and it is the comparison that decides, not the presence of a risk.'
    ] }
]);
