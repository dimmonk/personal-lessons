// Wealth Preservation, Unit One: fresh cases held back for later days (lesson standard E9, V44), part two: the handover to other
// people, and nothing in the case. Field guide: see u1.cases-return-1.js.

FC.cases('wealth', 'u1', [

  /* ---------- The handover to other people ---------- */
  { id: 'x-handover-1', use: 'return', tier: 'clean', setting: 'retirement', topic: 'a form that would let a daughter act',
    text: "Ibrahim, 73, has never signed a form that would let his daughter pay his bills if he had a stroke. His IRA and savings come to $260,000.",
    route: { D1: ['handover'] },
    cues: { D1: 'has never signed a form that would let his daughter pay his bills if he had a stroke' },
    reason: { D1: 'The case is about someone being able to act for the owner if he cannot, and the paper is missing: {cue:D1}. The loss would come once, when it was needed.' },
    not: { outcome: 'erosion', why: 'Nothing comes out of his money every year in the case. What it raises is who could act for him, once, if he were ill.' },
    wouldChange: 'If the form had been signed last year, the case would still be {a:D1.handover}: a case about who can act keeps that answer even when the paper is in order.' },

  { id: 'x-handover-2', use: 'return', tier: 'varied', setting: 'family', topic: 'tax on an estate left to one son',
    text: "Lorraine, 84, will leave her only son an estate of $30,000,000, mostly her house and her investments. The federal estate tax takes 40% of whatever a person leaves above a tax-free limit, and she is far above it.",
    route: { D1: ['handover'] },
    cues: { D1: 'The federal estate tax takes 40% of whatever a person leaves above a tax-free limit, and she is far above it' },
    reason: { D1: 'The case is about what tax would take when the money passes to her son: {cue:D1}. Every $1,000,000 she leaves above the limit would cost $400,000 before her son receives it.' },
    not: { outcome: 'erosion', why: 'Nothing comes out of her money every year in the case. The tax it raises falls once, after her death.' },
    wouldChange: 'If the estate were $300,000, far below the limit, and the case said nothing about wills, it would be {a:D1.none}, because nothing would raise a handover.' },

  { id: 'x-handover-3', use: 'return', tier: 'varied', setting: 'family', topic: 'a daughter who lent her savings twice',
    text: "Niall, 70, will leave $600,000 to his daughter. She has twice lent her savings to boyfriends who never paid them back, and she is about to marry a third.",
    route: { D1: ['handover'] },
    cues: { D1: 'twice lent her savings to boyfriends who never paid them back' },
    reason: { D1: 'The case shows a risk in the person who will receive the money: {cue:D1}. What is at stake comes once, when the money reaches her.' },
    not: { outcome: 'none', why: 'The fifth answer is for a case that says nothing about a death or who gets the money. This case is about who will receive $600,000 and what she may do with it.' },
    wouldChange: 'If the case said only that Niall has $600,000 and will not need it for twenty years, it would be {a:D1.none}.' },

  { id: 'x-handover-4', use: 'return', tier: 'misleading', setting: 'family', topic: 'an article about trusts, and an old will', echo: 'w-friend',
    text: "Greer, 66, has read an article about trusts and asks her friend whether she needs one. Her will, written in 1991, leaves everything to a sister who died in 2020. She has $380,000.",
    route: { D1: ['handover'] },
    cues: { D1: 'Her will, written in 1991, leaves everything to a sister who died in 2020' },
    reason: { D1: 'Someone reading an article about trusts brings back a case with nothing to name. Read on: {cue:D1}. The will names a person who has died, so the paper is out of date, and what is at stake comes once, when Greer dies.' },
    not: { outcome: 'none', why: 'An article about a cure is not a reason in a case, but here the case also has a real paper that is out of date. There are words to point to.' },
    wouldChange: 'If her will had been written last year, and the case said only that she had read an article and asked a friend, it would still be {a:D1.handover}: a case about a will keeps that answer.' },

  /* ---------- Nothing in the case ---------- */
  { id: 'x-none-1', use: 'return', tier: 'clean', setting: 'family', topic: 'a first savings plan for twelve years',
    text: "Sasha, 27, puts $150 a month into a savings plan and does not expect to touch it for twelve years. She has a steady job and no debts.",
    route: { D1: ['none'] },
    cues: { D1: 'does not expect to touch it for twelve years' },
    reason: { D1: 'The case shows money being put away for years: {cue:D1}. Nothing in it comes out of the money, rests on one thing, falls due on a date or changes hands.' },
    not: { outcome: 'timing', why: 'Prices could fall, but nothing is waiting for the money, so a fall catches nothing. There is no bill, no living costs and no plan that has drifted.' },
    wouldChange: 'If Sasha needed the savings for a down payment on a condo three months away, it would be {a:D1.timing}.' },

  { id: 'x-none-2', use: 'return', tier: 'varied', setting: 'work', topic: 'a letter offering a paid review',
    text: "Piet, 50, got a letter from a firm offering a wealth review for $500. He has $90,000 in a 401(k) spread over thousands of companies, which he will not touch until 65, and he has no other money worries.",
    route: { D1: ['none'] },
    cues: { D1: ['which he will not touch until 65', 'no other money worries'] },
    reason: { D1: 'The case shows money being kept, with nothing that raises one of the four: {cue:D1}. The letter is a firm offering a service, and the $500 is its price for a review he has not bought.' },
    not: { outcome: 'erosion', why: 'The $500 is a price for a review he has not bought. It is not taken out of his money, and nothing comes out of it.' },
    wouldChange: 'If Piet had been told that the 401(k) takes 1.9% a year, there would be words to point to, and the case would be {a:D1.erosion}.' },

  { id: 'x-none-3', use: 'return', tier: 'varied', setting: 'retirement', topic: 'a rainy-day reserve that has never been needed',
    text: "Dorothea, 75, has Social Security and a pension from her years as a teacher that pay all her bills, and $200,000 in a bank account that she does not plan to spend. She keeps it for a rainy day and has never needed it.",
    route: { D1: ['none'] },
    cues: { D1: ['Social Security and a pension from her years as a teacher that pay all her bills', 'she does not plan to spend'] },
    reason: { D1: 'The case shows money being kept, with nothing waiting for it: {cue:D1}. A bank account cannot fall in price, and nothing comes out, rests on one thing or changes hands.' },
    not: { outcome: 'handover', why: 'She is 75, but age alone raises nothing. The case is not about a will, a form, a gift or a death.' },
    wouldChange: 'If the case said that she meant to give $50,000 a year to her grandchildren, it would be about gifts to family, and it would be {a:D1.handover}.' },

  { id: 'x-none-4', use: 'return', tier: 'misleading', setting: 'business', topic: 'a small café and a worry about protecting it', echo: 'w-farm',
    text: "Corinne, 44, owns a small café with a partner. The café is worth $40,000, and the rest of what she owns, $400,000, is a 401(k) in a fund of thousands of companies and a house with nothing owed on it. She asks whether she should do something to protect the café.",
    route: { D1: ['none'] },
    cues: { D1: 'The café is worth $40,000, and the rest of what she owns, $400,000' },
    reason: { D1: 'A business owner brings back a case about a demand that could reach everything. Read on: {cue:D1}. The café is about 9% of what she owns, the rest is spread, and no demand or loan is in the case. No one thing is most of it.' },
    not: { outcome: 'shock', why: 'She owns a business, which is why the case looks like the third answer. But the café is $40,000 of $440,000, so it is not most of what she has, and no claim or loan is in the case.' },
    wouldChange: 'If the café were worth $340,000 and the rest $100,000, most of what she owns would be one business, and it would be {a:D1.shock}.' }
]);
