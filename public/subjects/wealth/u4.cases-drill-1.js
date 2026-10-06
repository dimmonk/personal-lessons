// Wealth Preservation, Unit Four: cases for drill: the question on its own, one new case at a time.
// Field guide: see u4.cards-1.js. use: 'teach' = shown in a card; 'check' = asked between cards; 'drill' and 'return' are never in a card.

FC.cases('wealth', 'u4', [

  { id: 'p-cb1', use: 'drill', tier: 'clean', setting: 'home', topic: 'a job loss and monthly sales',
    text: "Rashid, 58, lost his job six months ago and is living on his $200,000 in funds of shares. He pays his $1,600 monthly costs by selling $1,600 of the funds each month, and has no cash set aside.",
    outcome: 'cashbuffer', route: { D1: ['timing'], T1: ['livingcosts'] },
    cues: { T1: 'He pays his $1,600 monthly costs by selling $1,600 of the funds each month, and has no cash set aside' },
    reason: { T1: 'Rashid’s monthly costs are paid by selling funds, and nothing is set aside to spend from instead: {cue:T1}. If prices fall, every one of those monthly sales is made at the low price.' },
    not: { outcome: 'covered', why: 'He has no cash set aside. The money for his bills is in funds whose price can fall, and none of it is out of a fall’s reach.' } },

  { id: 'p-cv1', use: 'drill', tier: 'clean', setting: 'retirement', topic: 'a woman who has not sold since the drop',
    text: "Gwen, 70, takes $2,100 a month from her $510,000. $75,600 of it, three years of her spending, is in a savings account, and she pays the bills from it. Her funds of shares have fallen by 30%, and she has sold none.",
    outcome: 'covered', route: { D1: ['timing'], T1: ['ready'] },
    cues: { T1: '$75,600 of it, three years of her spending, is in a savings account, and she pays the bills from it' },
    reason: { T1: 'Gwen’s bills are paid from money that a fall cannot reach: {cue:T1}. The 30% fall changes what her funds are worth, and she needs nothing from them for now.' },
    not: { outcome: 'cashbuffer', why: 'Gwen is living on her money in a year of falling prices, as {o:cashbuffer} describes. But her bills are paid from cash and none of her funds has been sold.' } },

  { id: 'p-ld1', use: 'drill', tier: 'clean', setting: 'health', topic: 'a hip operation paid on the day',
    text: "Kwame, 62, needs a hip operation. After his insurance pays its part, the hospital has quoted him $14,000, payable on the day of the operation, October 20, five months from now. The money for it is in a fund of shares, down 16% since the summer.",
    outcome: 'ladder', route: { D1: ['timing'], T1: ['datedbill'] },
    cues: { T1: ['quoted him $14,000, payable on the day of the operation, October 20', 'The money for it is in a fund of shares'] },
    reason: { T1: 'The bill is a known size on a known date, and its money sits in shares: {cue:T1}. After a 16% fall the fund holds about $11,760 of the $14,000, and the hospital’s date does not move.' },
    not: { outcome: 'covered', why: 'There is a bill, but the money for it is in {t:fund} of shares and not in cash or in {t:bond} that repays before the day.' } },

  { id: 'p-rb1', use: 'drill', tier: 'varied', setting: 'work', topic: 'a retirement-savings mix after eleven years of rises',
    text: "Ngozi, 38, chose 70% shares and 30% bonds for the money she is putting away for retirement. After eleven years of rises, shares are $442,000 of her $520,000, 85%. She will not need any of it for twenty-five years.",
    outcome: 'rebalance', route: { D1: ['timing'], T1: ['drifted'] },
    cues: { T1: 'shares are $442,000 of her $520,000, 85%' },
    reason: { T1: 'Ngozi chose 70% in shares, and now {cue:T1}. That is 15 points above her plan, with no living costs and no bill in the case, so {t:mix} is the only thing that a fall would find.' },
    not: { outcome: 'covered', why: 'A mix is only covered when it is still inside the limits the plan allows. 15 points above the plan is well outside any limit of a few points.' } },
]);
