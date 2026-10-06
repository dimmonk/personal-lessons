// Wealth Preservation, Unit Four: cases for later days: a bill on a date and a mix that has moved.
// Field guide: see u4.cards-1.js. use: 'teach' = shown in a card; 'check' = asked between cards; 'drill' and 'return' are never in a card.

FC.cases('wealth', 'u4', [

  { id: 'ret-bill-1', use: 'return', tier: 'varied', setting: 'property', topic: 'an addition paid for when the work is done',
    text: "Kenji has agreed to pay $48,000 to a contractor on July 1, when an addition to his house is finished. The money is in a fund of shares, down 17% since he set it aside.",
    outcome: 'ladder', route: { D1: ['timing'], T1: ['datedbill'] },
    cues: { D1: 'has agreed to pay $48,000 to a contractor on July 1', T1: ['has agreed to pay $48,000 to a contractor on July 1', 'The money is in a fund of shares'] },
    reason: { D1: 'The case is about what a fall would do to money that has a job on a date: {cue:D1}. Nothing in it comes out every year, rests on one thing, or is about a death or a gift.',
              T1: 'The payment is a known size on a known date, and its money sits where its price can fall: {cue:T1}. After a fall of 17% the fund holds about $39,840 of the $48,000.' },
    not: { outcome: 'covered', why: 'There is a bill and a fall, as in {o:covered}. But that name needs the money for the bill already in cash or in bonds that repay by the day, and here it is in shares.' } },

  { id: 'ret-bill-2', use: 'return', tier: 'varied', setting: 'health', topic: 'a clinic fee for dental implants',
    text: "Tomasz has agreed to a course of dental implants. The clinic's fee of $8,500 is due on March 3, five months from now. The money is in a fund of shares, which has fallen by 22% since October.",
    outcome: 'ladder', route: { D1: ['timing'], T1: ['datedbill'] },
    cues: { D1: "The clinic's fee of $8,500 is due on March 3, five months from now", T1: ["The clinic's fee of $8,500 is due on March 3, five months from now", 'The money is in a fund of shares'] },
    reason: { D1: 'The case is about what a fall would do to money that has a job on a date: {cue:D1}. Nothing in it comes out every year, rests on one thing, or is about a death or a gift.',
              T1: 'The fee is a known size on a known date, and its money is held in shares: {cue:T1}. After a fall of 22% the fund holds about $6,630 of the $8,500, and the clinic’s date does not move.' },
    not: { outcome: 'cashbuffer', why: 'Tomasz needs money once, on March 3. The case shows no living costs paid by selling, and nothing is needed from the money after the date.' } },

  { id: 'ret-mix-1', use: 'return', tier: 'varied', setting: 'home', topic: 'family savings after a long rise',
    text: "Hye-jin chose 60% shares and 40% bonds for her family's savings, and allows 5 points either way. After a long rise, shares are $330,000 of $430,000, 77%. She takes nothing out.",
    outcome: 'rebalance', route: { D1: ['timing'], T1: ['drifted'] },
    cues: { D1: "chose 60% shares and 40% bonds for her family's savings", T1: 'shares are $330,000 of $430,000, 77%' },
    reason: { D1: 'The case is about how the money is split against a plan: {cue:D1}. Nothing in it comes out every year, rests on one thing, or is about a death or a gift.',
              T1: 'Hye-jin’s limit is 55% to 65%, and the case says {cue:T1}. That is 17 points above her plan and 12 above her limit, with nothing being sold to pay for anything.' },
    not: { outcome: 'covered', why: 'A mix is only covered when it is still inside the limits the plan allows. Hye-jin’s limit is 5 points, and {t:mix} is 17 points from the plan.' } },

  { id: 'ret-mix-2', use: 'return', tier: 'varied', setting: 'retirement', topic: 'a cautious mix after a deep drop in shares',
    text: "Bruno, 61, chose 40% in shares and 60% in bonds. After a deep fall in shares, shares are $110,000 of $420,000, 26%. He plans to start living on the money in five years, and nothing is due now.",
    outcome: 'rebalance', route: { D1: ['timing'], T1: ['drifted'] },
    cues: { D1: 'chose 40% in shares and 60% in bonds', T1: 'shares are $110,000 of $420,000, 26%' },
    reason: { D1: 'The case is about how the money is split against a plan: {cue:D1}. Nothing in it comes out every year, rests on one thing, or is about a death or a gift.',
              T1: 'Bruno chose 40% in shares, and the case says {cue:T1}. That is 14 points below his plan, so a fall would take less than he chose, and a recovery would lift him less. Nothing is being sold to pay for anything.' },
    not: { outcome: 'cashbuffer', why: 'Bruno does not live on the money yet, and the case shows no sales to pay bills. It shows only a mix that has moved.' } },
]);
