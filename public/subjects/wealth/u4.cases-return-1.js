// Wealth Preservation, Unit Four: cases for later days: living costs and money already safe.
// Field guide: see u4.cards-1.js. use: 'teach' = shown in a card; 'check' = asked between cards; 'drill' and 'return' are never in a card.

FC.cases('wealth', 'u4', [

  { id: 'ret-cash-1', use: 'return', tier: 'varied', setting: 'work', topic: 'living on savings after a layoff',
    text: "Pavel, 59, was laid off in January. His $330,000 is in funds of shares, and he pays his $1,900 monthly bills by selling about $1,900 of them each month. He has no cash set aside, and prices are down 21% since the start of the year.",
    outcome: 'cashbuffer', route: { D1: ['timing'], T1: ['livingcosts'] },
    cues: { D1: 'he pays his $1,900 monthly bills by selling about $1,900 of them each month', T1: 'he pays his $1,900 monthly bills by selling about $1,900 of them each month. He has no cash set aside' },
    reason: { D1: 'A fall would hit money that is spent every month: {cue:D1}. Nothing else in the story is a yearly cost, one big holding, or a death or a gift.',
              T1: 'Pavel pays his bills by selling funds, with nothing set aside: {cue:T1}. With prices down 21%, each $1,900 takes a bigger slice of the funds.' },
    not: { outcome: 'covered', why: 'He has no cash set aside, so the money for his bills is still in funds that can fall.' } },

  { id: 'ret-cash-2', use: 'return', tier: 'varied', setting: 'family', topic: 'a widow living on one fund',
    text: "Marguerite, 72, is a widow. All $410,000 of her money is in one fund of shares, and she takes $1,650 a month out of it by selling units. She has never kept any cash. Last year the fund fell 26%.",
    outcome: 'cashbuffer', route: { D1: ['timing'], T1: ['livingcosts'] },
    cues: { D1: 'she takes $1,650 a month out of it by selling units', T1: 'she takes $1,650 a month out of it by selling units. She has never kept any cash' },
    reason: { D1: 'A fall would hit money that is spent every month: {cue:D1}. Nothing else in the story is a yearly cost, one big holding, or a death or a gift.',
              T1: 'Marguerite pays her bills by selling units of {t:fund} that can fall, with no cash to spend instead: {cue:T1}. After a fall of 26% every month’s sale takes a bigger slice.' },
    not: { outcome: 'ladder', why: 'She needs money every month, not on one date, and the story shows no single bill of a known size.' } },

  { id: 'ret-safe-1', use: 'return', tier: 'varied', setting: 'retirement', topic: 'a man who has sold none since the drop',
    text: "Bernard, 68, spends $2,200 a month. $79,200, three years of it, is in a savings account, and he pays his bills from it. His funds of shares fell 28% and he has sold none.",
    outcome: 'covered', route: { D1: ['timing'], T1: ['ready'] },
    cues: { D1: 'Bernard, 68, spends $2,200 a month', T1: '$79,200, three years of it, is in a savings account, and he pays his bills from it' },
    reason: { D1: 'A fall would hit money that is spent every month: {cue:D1}. Nothing else in the story is a yearly cost, one big holding, or a death or a gift.',
              T1: 'Bernard pays his bills from cash that a fall cannot reach: {cue:T1}. His funds fell by 28% and he has sold none, so nothing he spends has changed.' },
    not: { outcome: 'cashbuffer', why: 'He lives on his money in a year of falling prices, but he has sold none of his funds and has cash set aside.' } },

  { id: 'ret-safe-2', use: 'return', tier: 'varied', setting: 'business', topic: 'a tax bill held in a Treasury bond',
    text: "Soraya must pay $26,000 in tax on April 15. The money has been in a US Treasury bond since last spring that repays $26,000 on March 31. Share prices have fallen by 24% this year.",
    outcome: 'covered', route: { D1: ['timing'], T1: ['ready'] },
    cues: { D1: 'Soraya must pay $26,000 in tax on April 15', T1: 'The money has been in a US Treasury bond since last spring that repays $26,000 on March 31' },
    reason: { D1: 'A fall would hit money that has a bill to pay on a date: {cue:D1}. Nothing else in the story is a yearly cost, one big holding, or a death or a gift.',
              T1: 'The tax money is held where a fall cannot reach it: {cue:T1}. The bond repays the full $26,000 fifteen days before the bill is due.' },
    not: { outcome: 'ladder', why: 'There is a bill on a known date, which looks like {o:ladder}. But its money is in {t:bond} that repays before the date, not in shares or funds.' } },
]);
