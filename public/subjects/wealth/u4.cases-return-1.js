// Wealth Preservation, Unit Four: fresh cases kept back for later days, first file: the first two names (living costs paid by
// selling; a fall that would catch nothing), four cases each. A name that is due returns as a case the learner has not seen, run as a
// whole route, so every case carries marked words and a reason for both questions (the first question of the key, then this unit's).
// Four cases for each name: one for each scheduled return, the fourth at about twelve weeks (E9, an action subject).

FC.cases('wealth', 'u4', [

  /* ---------- Years of spending in cash ---------- */
  { id: 'ret-cash-1', use: 'return', tier: 'varied', setting: 'work', topic: 'living on savings after redundancy',
    text: "Pavel, 59, was made redundant in January. His £330,000 is in funds of shares, and he pays his £1,900 monthly bills by selling about £1,900 of them each month. He has no cash set aside, and prices are down 21% since the start of the year.",
    outcome: 'cashbuffer', route: { D1: ['timing'], T1: ['livingcosts'] },
    cues: { D1: 'he pays his £1,900 monthly bills by selling about £1,900 of them each month', T1: 'he pays his £1,900 monthly bills by selling about £1,900 of them each month. He has no cash set aside' },
    reason: { D1: 'The case is about what a fall in prices would do to money that is drawn on every month: {cue:D1}. Nothing in it comes out as a charge, rests on one thing, or is about a death or a gift.',
              T1: 'Pavel’s bills are paid by selling funds, and nothing is set aside: {cue:T1}. With prices down 21%, each £1,900 takes a bigger slice of the funds than it would have.' },
    not: { outcome: 'covered', why: 'Pavel lives on his money in a year of falling prices, as the people in {o:covered} do. But {o:covered} needs the money for the bills already in cash, and he has none set aside.' },
    wouldChange: 'If Pavel held £68,400 in a savings account, three years of his £1,900 a month, and paid his bills from it, the case would be {a:T1.ready}.' },

  { id: 'ret-cash-2', use: 'return', tier: 'varied', setting: 'family', topic: 'a widow living on one fund',
    text: "Marguerite, 72, is a widow. All £410,000 of her money is in one fund of shares, and she takes £1,650 a month out of it by selling units. She has never kept any cash. Last year the fund fell 26%.",
    outcome: 'cashbuffer', route: { D1: ['timing'], T1: ['livingcosts'] },
    cues: { D1: 'she takes £1,650 a month out of it by selling units', T1: 'she takes £1,650 a month out of it by selling units. She has never kept any cash' },
    reason: { D1: 'The case is about what a fall would do to money that is spent every month: {cue:D1}. Nothing in it comes out as a charge, rests on one thing, or is about a death or a gift.',
              T1: 'Marguerite’s bills are paid by selling units of a fall-prone investment, with no cash to spend from instead: {cue:T1}. After a fall of 26% every month’s sale takes a bigger slice.' },
    not: { outcome: 'ladder', why: 'Marguerite needs money every month and not on one date. The case shows no single bill of a known size.' },
    wouldChange: 'If she also held two years of bills in cash, the cash would be spent first, nothing would be sold while prices were down, and the case would be {a:T1.ready}.' },

  { id: 'ret-cash-3', use: 'return', tier: 'varied', setting: 'home', topic: '3 years off to write a book',
    text: "Priyanka, 44, has stopped work for three years to write a book. She lives on £150,000 in funds of shares, selling about £4,100 of them each month, with no cash put by. Prices have fallen by 16% since she began.",
    outcome: 'cashbuffer', route: { D1: ['timing'], T1: ['livingcosts'] },
    cues: { D1: 'She lives on £150,000 in funds of shares', T1: 'selling about £4,100 of them each month, with no cash put by' },
    reason: { D1: 'The case is about what a fall would do to money that is lived on: {cue:D1}. Nothing in it comes out as a charge, rests on one thing, or is about a death or a gift.',
              T1: 'Priyanka’s bills are paid by selling funds, with nothing set aside to spend from: {cue:T1}. Each month at lower prices means selling more for the same sum.' },
    not: { outcome: 'rebalance', why: 'The case gives no plan for a mix and no mix that has moved. It shows living costs paid by selling, which comes first.' },
    wouldChange: 'If her bills for the three years were already sitting in a savings account, and she paid them from it, nothing would be sold while prices were down, and the case would be {a:T1.ready}.' },

  { id: 'ret-cash-4', use: 'return', tier: 'varied', setting: 'property', topic: 'a field sold and paid out monthly',
    text: "Hamish, 70, sold the farm's top field and put the £500,000 into funds of shares. He takes £2,200 a month from them by selling units, and he has no savings account. Share prices fell by 20% in the spring.",
    outcome: 'cashbuffer', route: { D1: ['timing'], T1: ['livingcosts'] },
    cues: { D1: 'He takes £2,200 a month from them by selling units', T1: 'He takes £2,200 a month from them by selling units, and he has no savings account' },
    reason: { D1: 'The case is about what a fall would do to money that is spent every month: {cue:D1}. Nothing in it comes out as a charge, rests on one thing, or is about a death or a gift.',
              T1: 'Hamish pays his living costs by selling units of funds that can fall, with no cash set aside: {cue:T1}. A 20% fall means selling a quarter more units for the same £2,200.' },
    not: { outcome: 'covered', why: 'Hamish lives on his money in a year of falling prices, as the people in {o:covered} do. But he has no savings account and no bonds, so the money for his bills is not out of a fall’s reach.' },
    wouldChange: 'If £79,200 of the £500,000 sat in a savings account, three years of his £2,200 a month, and he paid from it, the case would be {a:T1.ready}.' },

  /* ---------- Already covered ---------- */
  { id: 'ret-safe-1', use: 'return', tier: 'varied', setting: 'retirement', topic: 'a man who has sold none since the drop',
    text: "Bernard, 68, spends £2,200 a month. £79,200, three years of it, is in a savings account, and he pays his bills from it. His funds of shares fell 28% and he has sold none.",
    outcome: 'covered', route: { D1: ['timing'], T1: ['ready'] },
    cues: { D1: 'Bernard, 68, spends £2,200 a month', T1: '£79,200, three years of it, is in a savings account, and he pays his bills from it' },
    reason: { D1: 'The case is about what a fall would do to money that pays living costs: {cue:D1}. Nothing in it comes out as a charge, rests on one thing, or is about a death or a gift.',
              T1: 'Bernard’s bills are paid from money a fall cannot reach: {cue:T1}. The funds fell by 28% and he has sold none, so nothing he spends has changed.' },
    not: { outcome: 'cashbuffer', why: 'Bernard lives on his money in a year of falling prices, as {o:cashbuffer} describes. But {o:cashbuffer} needs the bills paid by selling with nothing set aside, and he has sold none of his funds.' },
    wouldChange: 'If the savings account were empty and the bills were being paid by selling his funds, the case would be {a:T1.livingcosts}.' },

  { id: 'ret-safe-2', use: 'return', tier: 'varied', setting: 'business', topic: 'a tax bill held in a government bond',
    text: "Soraya must pay £26,000 in tax on 31 January. The money has been in a government bond since the spring that repays £26,000 on 20 January. Share prices have fallen by 24% this year.",
    outcome: 'covered', route: { D1: ['timing'], T1: ['ready'] },
    cues: { D1: 'Soraya must pay £26,000 in tax on 31 January', T1: 'The money has been in a government bond since the spring that repays £26,000 on 20 January' },
    reason: { D1: 'The case is about what a fall would do to money that has a job on a date: {cue:D1}. Nothing in it comes out every year, rests on one thing, or is about a death or a gift.',
              T1: 'The tax money is held where a fall cannot reach it: {cue:T1}. The bond repays the full £26,000 eleven days before the bill is due.' },
    not: { outcome: 'ladder', why: 'There is a bill on a known date, as in {o:ladder}. But that name needs the money for it in shares or funds, and here it is in {t:bond} that repays before the date.' },
    wouldChange: 'If the £26,000 were in {t:fund} of shares, it would now be about £19,760, and the case would be {a:T1.datedbill}.' },

  { id: 'ret-safe-3', use: 'return', tier: 'varied', setting: 'work', topic: 'a pension mix a little off its plan',
    text: "Gareth, 54, chose 70% shares and 30% bonds, and allows 5 points either way. His £600,000 has £405,000 in shares, 67.5%. No bill is due, and he takes nothing out.",
    outcome: 'covered', route: { D1: ['timing'], T1: ['ready'] },
    cues: { D1: 'chose 70% shares and 30% bonds', T1: 'has £405,000 in shares, 67.5%' },
    reason: { D1: 'The case is about how the money is split against a plan: {cue:D1}. Nothing in it comes out every year, rests on one thing, or is about a death or a gift.',
              T1: 'Gareth’s limit is 65% to 75%, and the case says {cue:T1}. That is 2.5 points below his plan and inside the limit, so a fall would take about what he chose.' },
    not: { outcome: 'rebalance', why: 'Every mix moves a little, and this one has moved only a little. It is inside the limit the plan allows, so it has not moved well away from the plan.' },
    wouldChange: 'If shares had been £480,000, which is 80%, {t:mix} would be well outside his limit, and the case would be {a:T1.drifted}.' },

  { id: 'ret-safe-4', use: 'return', tier: 'varied', setting: 'health', topic: 'a rehabilitation centre paid from a savings account',
    text: "Imogen's husband will go into a rehabilitation centre on 8 February, and the centre must be paid £16,500 on admission. She has kept the money in a savings account since the summer. Prices have fallen by 30% since the spring, and her other money, in funds, has fallen with it.",
    outcome: 'covered', route: { D1: ['timing'], T1: ['ready'] },
    cues: { D1: 'the centre must be paid £16,500 on admission', T1: 'She has kept the money in a savings account since the summer' },
    reason: { D1: 'The case is about what a fall would do to money that has a job on a date: {cue:D1}. Nothing in it comes out every year, rests on one thing, or is about a death or a gift.',
              T1: 'The admission fee is held where a fall cannot reach it: {cue:T1}. The 30% fall touches her other money, and not the £16,500.' },
    not: { outcome: 'ladder', why: 'There is a bill on a known date, as in {o:ladder}. But that name needs the money for it in shares or funds, and here it is in a savings account.' },
    wouldChange: 'If the £16,500 had been in funds, it would now be about £11,550, and the case would be {a:T1.datedbill}.' }
]);
