// Wealth Preservation, Unit One: fresh cases held back for later days (lesson standard E9, V44), part two: the handover to other
// people, and nothing in the case. Field guide: see u1.cases-return-1.js.

FC.cases('wealth', 'u1', [

  { id: 'x-handover-1', use: 'return', tier: 'clean', setting: 'retirement', topic: 'a form that would let a daughter act',
    text: "Ibrahim, 73, has never signed a form that would let his daughter pay his bills if he had a stroke. His IRA and savings come to $260,000.",
    route: { D1: ['handover'] },
    cues: { D1: 'has never signed a form that would let his daughter pay his bills if he had a stroke' },
    reason: { D1: 'The case is about someone being able to act for the owner if he cannot, and the paper is missing: {cue:D1}. The loss would come once, when it was needed.' },
    not: { outcome: 'erosion', why: 'Nothing comes out of his money every year in the case. What it raises is who could act for him, once, if he were ill.' } },

  { id: 'x-handover-2', use: 'return', tier: 'varied', setting: 'family', topic: 'tax on an estate left to one son',
    text: "Lorraine, 84, will leave her only son an estate of $30,000,000, mostly her house and her investments. The federal estate tax takes 40% of whatever a person leaves above a tax-free limit, and she is far above it.",
    route: { D1: ['handover'] },
    cues: { D1: 'The federal estate tax takes 40% of whatever a person leaves above a tax-free limit, and she is far above it' },
    reason: { D1: 'The case is about what tax would take when the money passes to her son: {cue:D1}. Every $1,000,000 she leaves above the limit would cost $400,000 before her son receives it.' },
    not: { outcome: 'erosion', why: 'Nothing comes out of her money every year in the case. The tax it raises falls once, after her death.' } },

  { id: 'x-none-1', use: 'return', tier: 'clean', setting: 'family', topic: 'a first savings plan for twelve years',
    text: "Sasha, 27, puts $150 a month into a savings plan and does not expect to touch it for twelve years. She has a steady job and no debts.",
    route: { D1: ['none'] },
    cues: { D1: 'does not expect to touch it for twelve years' },
    reason: { D1: 'The case shows money being put away for years: {cue:D1}. Nothing in it comes out of the money, rests on one thing, falls due on a date or changes hands.' },
    not: { outcome: 'timing', why: 'Prices could fall, but nothing is waiting for the money, so a fall catches nothing. There is no bill, no living costs and no plan that has drifted.' } },

  { id: 'x-none-2', use: 'return', tier: 'varied', setting: 'work', topic: 'a letter offering a paid review',
    text: "Piet, 50, got a letter from a firm offering a wealth review for $500. He has $90,000 in a 401(k) spread over thousands of companies, which he will not touch until 65, and he has no other money worries.",
    route: { D1: ['none'] },
    cues: { D1: ['which he will not touch until 65', 'no other money worries'] },
    reason: { D1: 'The case shows money being kept, with nothing that raises one of the four: {cue:D1}. The letter is a firm offering a service, and the $500 is its price for a review he has not bought.' },
    not: { outcome: 'erosion', why: 'The $500 is a price for a review he has not bought. It is not taken out of his money, and nothing comes out of it.' } }
]);
