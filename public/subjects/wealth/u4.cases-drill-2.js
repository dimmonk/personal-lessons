// Wealth Preservation, Unit Four: cases for drill: the whole question order, no help (clean, then varied).
// Field guide: see u4.cards-1.js. use: 'teach' = shown in a card; 'check' = asked between cards; 'drill' and 'return' are never in a card.

FC.cases('wealth', 'u4', [

  { id: 'r-cb1', use: 'drill', tier: 'clean', setting: 'work', topic: 'early retirement from a bank',
    text: "Mehmet, 60, took early retirement from his job at the bank. His $540,000 is in funds of shares, and he draws $2,400 a month from it by selling units. He has no cash set aside, and prices have fallen 24% this year.",
    outcome: 'cashbuffer', route: { D1: ['timing'], T1: ['livingcosts'] },
    cues: { D1: 'he draws $2,400 a month from it by selling units', T1: ['he draws $2,400 a month from it by selling units', 'He has no cash set aside'] },
    reason: { D1: 'The case is about what a fall would do to money that is drawn on every month: {cue:D1}. Nothing in it is a charge, rests on one thing, or is about a death or a gift.',
              T1: 'Mehmet’s bills are paid by selling funds, and nothing is set aside: {cue:T1}. With prices down 24%, each $2,400 takes a bigger slice of the funds, and that slice is not there when prices recover. This is {t:sequence}.' },
    not: { outcome: 'covered', why: 'Mehmet lives on his money in a year of falling prices, as the people in {o:covered} do. But he has no cash set aside, so the money for his bills is not out of a fall’s reach.' } },

  { id: 'r-cv1', use: 'drill', tier: 'clean', setting: 'retirement', topic: 'a woman of seventy-two spending from savings',
    text: "Ottilie, 72, spends $1,500 a month. She keeps $54,000 in a savings account, which is three years of spending, and pays her bills from it. Her $300,000 in funds of shares has fallen by 27%, and she has sold none of it since.",
    outcome: 'covered', route: { D1: ['timing'], T1: ['ready'] },
    cues: { D1: 'Ottilie, 72, spends $1,500 a month', T1: 'She keeps $54,000 in a savings account, which is three years of spending, and pays her bills from it' },
    reason: { D1: 'The case is about what a fall would do to money that pays living costs: {cue:D1}. Nothing in it comes out as a charge, rests on one thing, or is about a death or a gift.',
              T1: 'Her bills are paid from money a fall cannot reach: {cue:T1}. The funds fell by 27% and she has sold none of them, so the fall changed what they are worth and nothing about what she spends.' },
    not: { outcome: 'cashbuffer', why: 'Ottilie lives on her money in a year of falling prices, which is the setting of {o:cashbuffer}. But {o:cashbuffer} needs the bills paid by selling with nothing set aside, and she has sold none of her funds.' } },

  { id: 'r-ld1', use: 'drill', tier: 'clean', setting: 'business', topic: 'a new lease paid to a landlord',
    text: "Bashir's café has to pay $18,000 to the landlord on April 1 for a new lease, six months from now. The money is in a fund of shares that has fallen by 14% this year.",
    outcome: 'ladder', route: { D1: ['timing'], T1: ['datedbill'] },
    cues: { D1: 'has to pay $18,000 to the landlord on April 1 for a new lease', T1: ['has to pay $18,000 to the landlord on April 1 for a new lease', 'The money is in a fund of shares'] },
    reason: { D1: 'The case is about what a fall would do to money that has a job on a date: {cue:D1}. Nothing in it comes out every year, rests on one thing, or is about a death or a gift.',
              T1: 'The lease payment is a known size on a known date, and its money sits where its price can fall: {cue:T1}. After a fall of 14% the fund holds about $15,480 of the $18,000, and the landlord’s date does not move.' },
    not: { outcome: 'covered', why: 'There is a bill and a fall, as in {o:covered}. But that name needs the money for the bill already in cash or in bonds that repay by the day, and here it is in shares.' } },

  { id: 'r-rb1', use: 'drill', tier: 'varied', setting: 'work', topic: 'a 401(k) mix after a long rise',
    text: "Chidi, 46, set out 60% of his 401(k) in shares and 40% in bonds, and allows himself 5 points either way. After a long rise, shares are $560,000 of his $700,000, 80%. He is not selling anything, and no bill is due for years.",
    outcome: 'rebalance', route: { D1: ['timing'], T1: ['drifted'] },
    cues: { D1: 'set out 60% of his 401(k) in shares and 40% in bonds', T1: 'shares are $560,000 of his $700,000, 80%' },
    reason: { D1: 'The case is about how the money is split against a plan: {cue:D1}. Nothing in it comes out every year, rests on one thing, or is about a death or a gift.',
              T1: 'Chidi’s limit is 55% to 65%, and the case says {cue:T1}. That is 20 points above the plan and 15 above the limit, with no bill and no living costs in the case.' },
    not: { outcome: 'covered', why: 'A mix is only covered when it is still inside the limits the plan allows. Chidi’s limit is 5 points, and {t:mix} is 20 points from the plan.' } },

  { id: 'r-cv3', use: 'drill', tier: 'varied', setting: 'family', topic: 'a mix near its plan in a saver’s pot',
    text: "Luciana, 51, chose 40% in shares and 60% in bonds, and allows shares to move 5 points either side. Her $480,000 now has $204,000 in shares, 42.5%. She is not living on it yet, and no bill is due.",
    outcome: 'covered', route: { D1: ['timing'], T1: ['ready'] },
    cues: { D1: 'chose 40% in shares and 60% in bonds', T1: 'now has $204,000 in shares, 42.5%' },
    reason: { D1: 'The case is about how the money is split against a plan: {cue:D1}. Nothing in it comes out every year, rests on one thing, or is about a death or a gift.',
              T1: 'Luciana’s limit is 35% to 45%, and the case says {cue:T1}. That is 2.5 points above the plan, inside the limit, so a fall would take about what she chose.' },
    not: { outcome: 'rebalance', why: 'Every mix moves a little, and this one has moved only a little. It is still well inside the limit the plan allows, so it has not moved well away from the plan.' } },
]);
