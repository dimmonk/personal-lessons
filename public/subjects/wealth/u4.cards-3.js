// Wealth Preservation, Unit Four, part one (third piece) and part two (first piece): what the second name is like, the first look-alike
// pair, the first exception (a name from Unit Two that looks like the first name here), and the third name (a bill on a date).
// Field guide: see u4.cards-1.js.

FC.cards('wealth', 'u4', [

  { id: 'portrait-covered', kind: 'portrait', outcome: 'covered',
    link: 'You know what to point to for {o:covered}. Because this name is partly made of what is not wrong, the rest of the picture matters more than usual.',
    typical: [
      'The case names something that a fall could catch: living costs, a bill on a date, or a plan for {t:mix}. The sound case is the one that also shows it already dealt with.',
      'The money for the bills is somewhere a fall cannot reach: cash, a savings account, or bonds that repay by the day it is needed.',
      'The case may say that prices fell, even by a lot. The fall is not the point. Nothing has to be sold because of it.',
      'There is a how long. The cash covers some years of bills, or the bond repays on or before the date the bill is due.',
      'A mix, if one is mentioned, is inside the limits the person set, so a fall would take about what they chose.',
      'Often the person is calm, and may be asked by someone else whether they ought to be doing something. The case gives them no reason to.'
    ],
    not: [
      'This is not the name for money that is simply sitting in cash. Cash that nothing is waiting for is not what this name needs. The case must show living costs, a bill or a plan that a fall could catch, and the money for it already out of reach.',
      'It is also not a promise that nothing can go wrong. If the cash is smaller than the bills, or the bond repays after the bill is due, the case shows a gap, and the answer is a different one. The name is about the case in front of you, and what it shows.'
    ],
    wild: ['"We haven’t sold anything since the crash."', '"The tuition money is sitting in the bank."', '"It’s inside the range I set, so I’m leaving it."', '"I’ve got two years of bills in the savings account."', '"The bond pays out in March, and the bill is due in April."'],
    self: 'In your own life it is the sentence that ends a worry: "that money is already in the bank", or "the bond pays out before the bill is due". Say where the money is held and what could happen to its price before the day.',
    ask: '"Where is the money for this held, and what could its price do before it is needed?" If it is somewhere a fall cannot reach, and the case shows it, you are probably looking at this name.',
    act: [
      'Say so, and leave it alone. Write one line: what the money is for, where it is held, and when it is due or needed.',
      'Check the one fact that makes the case sound: that the cash is in place and is not due to run out before the need, that the bond repays before the bill is due, or that {t:mix} is inside its limits.',
      'Put a date on your calendar to look again: when the cash has been spent down to a year of bills, a month before the bond repays, or on the day your plan says you check {t:mix}.',
      'If someone offers you a product to protect you from a fall that you can already ride out, ask which part of your case it answers. If you can point to nothing, decline.'
    ] },

  { id: 'check-covered', kind: 'check', after: 'covered',
    case: 'tm-chk-safe',
    ask: { type: 'option', step: 'T1', among: ['livingcosts', 'ready'] } },

  { id: 'look-cashbuffer-covered', kind: 'lookalike', ledger: 'cashbuffer~covered',
    link: 'You have met both names on their own. They are easy to mix up, because in both the people live on their money and prices have fallen. This card puts them side by side.',
    cases: ['tm-la-couple-sell', 'tm-la-couple-cash'],
    instruction: 'Both cases are about Colm and Fay, who have $500,000 and the same living costs, in the same year of falling prices. Compare one thing: where each month’s bills are paid from.',
    prompt: { kind: 'which', option: 'T1.livingcosts', answer: 'tm-la-couple-sell' },
    difference: [
      'In Case A every month’s bills are paid by selling about $1,700 of the funds. With prices down 20%, each sale takes a bigger slice of the funds than it would have, and nothing is set aside to spend from instead. The answer is {a:T1.livingcosts}, and the case is {o:cashbuffer}.',
      'In Case B the bills are paid from a savings account of $62,000, a little over three years of $20,400, and none of the funds has been sold. The fall changed what the funds are worth, and changed nothing about what was sold. The answer is {a:T1.ready}, and the case is {o:covered}.',
      'The couple, the money and the fall are the same in both cases. What separates them is where the bills are paid from. That is why you can never name a case from the fall alone.'
    ] },

  /* ---------- The first exception: a fall, a fixed sum and a shrunken pot ---------- */
  { id: 'exc-fixedsum', kind: 'exception', ledger: 'burnrate~cashbuffer', looksLike: 'cashbuffer', is: 'burnrate',
    h: 'A fall, a fixed sum and a shrunken pot',
    link: 'The first question put a fall and a sum that never changed side by side once before, and gave the answer {a:D1.erosion}. With the first name of this unit in front of you, here is a second such case, so that you can see exactly what separates the two.',
    case: 'tm-exc-fixedsum',
    setup: 'Dolores pays her bills by selling units of her funds every month, with no cash set aside, and prices have fallen. That is what {o:cashbuffer} looks like. Yet the answer for this case is {a:D1.erosion}, and the next question gives {a:E1.fixedsum}.',
    prompt: { kind: 'phrase', answer: 'she has taken exactly that every year since' },
    because: [
      'Look at what the case says about the sum. $36,000 was 4% of $900,000. It has not changed, though the funds are now worth $540,000, and $36,000 is now about 6.7% of them. Every year the same sum comes out, and every year it is a bigger share of a smaller amount.',
      'Compare Alan. His $24,000 was 4% of $600,000 and was a fair share of what he had. His trouble was that each month’s bills had to be raised from falling funds. Dolores’s trouble is the size of the sum, and the fall only explains why the funds shrank.',
      'Suppose Dolores put $108,000 of her funds into cash, which is three years of $36,000. She would pay from the cash and sell nothing for three years. But the cash would be gone at the end of them, and the same $36,000 would still be a bigger share of a smaller amount than she chose. The cash would only move the problem three years later. What has to change is the sum: it has to be set each year as a percentage of what is left, and not as a figure fixed years ago.',
      'So the case shows two things at once: bills raised from falling funds, and a fixed sum from funds that have shrunk. When a case shows both, the answer is the second.'
    ],
    take: [
      'Which answer wins is a decision, and in life the two run into each other: a fall makes a fixed sum worse, and a fixed sum makes a fall worse. Each case gets one answer, so that two people using the same questions reach the same one and can each say why.',
      'The test above settles it: is the sum a fair share of what is left, or has it stayed the same while what is left shrank? Here it has stayed the same. If the sum had always been a fair share of the funds, with nothing else wrong, the answer would be {a:T1.livingcosts}.'
    ] },

  /* ---------- The third name: a bill on a known date, with its money in shares ---------- */
  { id: 'meet-ladder', kind: 'meet', outcome: 'ladder',
    link: 'The first two names are about money that is spent every month. The third is about a single payment, and where the money for it is held.',
    case: 'tm-meet-bill', mark: 'T1',
    strip: [
      'There is one bill, $24,000, due on a known date, June 1.',
      'Its size and its date do not move, whatever the market does.',
      'The money for it, $24,000, is held in shares, whose price can fall.',
      'Prices have fallen by 25%, so the $24,000 is now $18,000. Nothing else is in the case: no monthly living costs, and nothing about a plan.'
    ],
    explain: [
      'What is different from Alan is that nothing here is spent every month. There is one payment, and its size and its date both belong to the venue and not to the market. On June 1, $24,000 must be there.',
      'Here are the numbers. After a fall of 25%, the fund holds $18,000, which is $6,000 short. By June 1 prices may have come back, or they may have fallen further, and nobody can say. What is certain is that the bill will be $24,000 on that day. An amount that can move is being used to meet an amount that cannot.',
      'The alternative is to put the bill’s money where its worth on the day is known. That is {t:bond} from a borrower very unlikely to fail to pay, such as the US government, that repays $24,000 on June 1 or just before. Held to that date, it pays exactly that, whatever its price did on the way, which is what {t:bond} is. Such {t:bond} might cost about $23,200 today, and the $800 difference is the interest it earns by the date. That is a price paid for certainty: the same $23,200 in shares might have grown by more, or by less.',
      'If there were several bills on several dates, such as private school tuition every September for six years, the same idea gives one bond for each bill, each repaying that bill’s amount on that bill’s date.'
    ],
    feature: { step: 'T1', option: 'datedbill' },
    name: [
      'The name for this is {o:ladder}. It says what to do: one bond for each bill, with each bond repaying on the date its bill is due.',
      'The name does not say that prices will fall before June 1. It says that the bill will not wait for them to recover.'
    ] },

  { id: 'again-ladder', kind: 'again', outcome: 'ladder',
    link: 'The wedding gave you what to point to: {needs:ladder}. Here is a second case with a different story, and a much bigger bill.',
    first: 'tm-meet-bill', second: 'tm-again-bill', step: 'T1',
    instruction: 'Find what the two cases share. Ignore the story (a wedding, a condo) and ignore the size of the bill. Look at one thing only: where the money for the bill is held, and whether the bill’s date can move.',
    prompt: { kind: 'phrase', answer: 'The money for it is in a fund of shares' },
    shared: [
      'Both cases have a bill of a known size on a known date, $24,000 on June 1 and $60,000 on November 30. Both keep the money for it in shares, and in both prices have fallen.',
      'Here are Lucía’s numbers. After a fall of 15%, her $60,000 is $51,000, which is $9,000 short of the payment. She has seven months for prices to recover, and the payment is still $60,000 on November 30 whatever they do.',
      'The two stories share nothing else, and the bills are not alike in size. So this is not about weddings or condos. It holds wherever a bill of a known size is due on a known date and its money is in shares or funds. That is what {o:ladder} names.'
    ] }
]);
