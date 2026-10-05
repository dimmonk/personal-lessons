// Wealth Preservation, Unit Four: fresh cases kept back for later days, second file: the last two names (a bill on a date; a split
// that has moved), four cases each. Every case carries marked words and a reason for both questions of its route.

FC.cases('wealth', 'u4', [

  /* ---------- A bond for each bill ---------- */
  { id: 'ret-bill-1', use: 'return', tier: 'varied', setting: 'property', topic: 'an extension paid on completion of the work',
    text: "Kenji has agreed to pay £48,000 to a builder on 1 July, when an extension is finished. The money is in a fund of shares, down 17% since he set it aside.",
    outcome: 'ladder', route: { D1: ['timing'], T1: ['datedbill'] },
    cues: { D1: 'has agreed to pay £48,000 to a builder on 1 July', T1: ['has agreed to pay £48,000 to a builder on 1 July', 'The money is in a fund of shares'] },
    reason: { D1: 'The case is about what a fall would do to money that has a job on a date: {cue:D1}. Nothing in it comes out every year, rests on one thing, or is about a death or a gift.',
              T1: 'The payment is a known size on a known date, and its money sits where its price can fall: {cue:T1}. After a fall of 17% the fund holds about £39,840 of the £48,000.' },
    not: { outcome: 'covered', why: 'There is a bill and a fall, as in {o:covered}. But that name needs the money for the bill already in cash or in bonds that repay by the day, and here it is in shares.' },
    wouldChange: 'If the £48,000 were in {t:bond} from a government that repays it by 1 June, the money would be out of a fall’s reach, and the case would be {a:T1.ready}.' },

  { id: 'ret-bill-2', use: 'return', tier: 'varied', setting: 'health', topic: 'a clinic fee for dental implants',
    text: "Tomasz has agreed to a course of dental implants. The clinic's fee of £8,500 is due on 3 March, five months from now. The money is in a fund of shares, which has fallen by 22% since the autumn.",
    outcome: 'ladder', route: { D1: ['timing'], T1: ['datedbill'] },
    cues: { D1: "The clinic's fee of £8,500 is due on 3 March, five months from now", T1: ["The clinic's fee of £8,500 is due on 3 March, five months from now", 'The money is in a fund of shares'] },
    reason: { D1: 'The case is about what a fall would do to money that has a job on a date: {cue:D1}. Nothing in it comes out every year, rests on one thing, or is about a death or a gift.',
              T1: 'The fee is a known size on a known date, and its money is held in shares: {cue:T1}. After a fall of 22% the fund holds about £6,630 of the £8,500, and the clinic’s date does not move.' },
    not: { outcome: 'cashbuffer', why: 'Tomasz needs money once, on 3 March. The case shows no living costs paid by selling, and nothing is needed from the money after the date.' },
    wouldChange: 'If the £8,500 were in a savings account, a fall could not reach it, and the case would be {a:T1.ready}.' },

  { id: 'ret-bill-3', use: 'return', tier: 'varied', setting: 'retirement', topic: 'the price of a retirement flat on completion',
    text: "Ivana, 64, will move into a retirement flat. The purchase price of £210,000 falls due on completion on 28 April, and the money for it is in funds of shares. Prices have fallen 12% since the summer.",
    outcome: 'ladder', route: { D1: ['timing'], T1: ['datedbill'] },
    cues: { D1: 'The purchase price of £210,000 falls due on completion on 28 April', T1: ['The purchase price of £210,000 falls due on completion on 28 April', 'the money for it is in funds of shares'] },
    reason: { D1: 'The case is about what a fall would do to money that has a job on a date: {cue:D1}. Nothing in it comes out every year, rests on one thing, or is about a death or a gift.',
              T1: 'The price is a known size on a known date, and its money sits where its price can fall: {cue:T1}. After a fall of 12% the funds hold about £184,800 of the £210,000, and completion has a day.' },
    not: { outcome: 'rebalance', why: 'The case gives no plan for a mix and no mix that has moved. It shows one payment with a date, and the money for it is in shares.' },
    wouldChange: 'If the £210,000 were in bonds that repay it before 28 April, the money would be out of a fall’s reach, and the case would be {a:T1.ready}.' },

  { id: 'ret-bill-4', use: 'return', tier: 'varied', setting: 'work', topic: 'a course fee saved for in a share fund',
    text: "Dele, 40, has signed up for a part-time MBA. The £42,000 course fee is due on 1 September, eleven months from now, and his savings for it are in a share fund, down 19%.",
    outcome: 'ladder', route: { D1: ['timing'], T1: ['datedbill'] },
    cues: { D1: 'The £42,000 course fee is due on 1 September, eleven months from now', T1: ['The £42,000 course fee is due on 1 September, eleven months from now', 'his savings for it are in a share fund'] },
    reason: { D1: 'The case is about what a fall would do to money that has a job on a date: {cue:D1}. Nothing in it comes out every year, rests on one thing, or is about a death or a gift.',
              T1: 'The fee is a known size on a known date, and the savings for it are held in a fall-prone investment: {cue:T1}. After a fall of 19% they hold about £34,020 of the £42,000.' },
    not: { outcome: 'covered', why: 'There is a bill and a fall, as in {o:covered}. But that name needs the money for the bill already in cash or in bonds that repay by the day, and here it is in shares.' },
    wouldChange: 'If the savings for the fee were in a savings account, a fall could not reach them, and the case would be {a:T1.ready}.' },

  /* ---------- Rebalance by written rule ---------- */
  { id: 'ret-mix-1', use: 'return', tier: 'varied', setting: 'home', topic: 'family savings after a long rise',
    text: "Hye-jin chose 60% shares and 40% bonds for her family's savings, and allows 5 points either way. After a long rise, shares are £330,000 of £430,000, 77%. She takes nothing out.",
    outcome: 'rebalance', route: { D1: ['timing'], T1: ['drifted'] },
    cues: { D1: "chose 60% shares and 40% bonds for her family's savings", T1: 'shares are £330,000 of £430,000, 77%' },
    reason: { D1: 'The case is about how the money is split against a plan: {cue:D1}. Nothing in it comes out every year, rests on one thing, or is about a death or a gift.',
              T1: 'Hye-jin’s limit is 55% to 65%, and the case says {cue:T1}. That is 17 points above her plan and 12 above her limit, with nothing being sold to pay for anything.' },
    not: { outcome: 'covered', why: 'A mix is only covered when it is still inside the limits the plan allows. Hye-jin’s limit is 5 points, and {t:mix} is 17 points from the plan.' },
    wouldChange: 'If shares were at 63%, {t:mix} would be inside her limit, and the case would be {a:T1.ready}.' },

  { id: 'ret-mix-2', use: 'return', tier: 'varied', setting: 'retirement', topic: 'a cautious mix after a deep drop in shares',
    text: "Bruno, 61, chose 40% in shares and 60% in bonds. After a deep fall in shares, shares are £110,000 of £420,000, 26%. He plans to start living on the money in five years, and nothing is due now.",
    outcome: 'rebalance', route: { D1: ['timing'], T1: ['drifted'] },
    cues: { D1: 'chose 40% in shares and 60% in bonds', T1: 'shares are £110,000 of £420,000, 26%' },
    reason: { D1: 'The case is about how the money is split against a plan: {cue:D1}. Nothing in it comes out every year, rests on one thing, or is about a death or a gift.',
              T1: 'Bruno chose 40% in shares, and the case says {cue:T1}. That is 14 points below his plan, so a fall would take less than he chose, and a recovery would lift him less. Nothing is being sold to pay for anything.' },
    not: { outcome: 'cashbuffer', why: 'Bruno does not live on the money yet, and the case shows no sales to pay bills. It shows only a mix that has moved.' },
    wouldChange: 'If he were already selling units of the shares every month to pay his bills, with no cash set aside, the key’s answer would be {a:T1.livingcosts}.' },

  { id: 'ret-mix-3', use: 'return', tier: 'varied', setting: 'work', topic: 'a young saver’s pension nearly all in shares',
    text: "Fatou, 35, chose 85% shares and 15% bonds for her pension. After years of rises, shares are £291,000 of £300,000, 97%. She will not need it for thirty years.",
    outcome: 'rebalance', route: { D1: ['timing'], T1: ['drifted'] },
    cues: { D1: 'chose 85% shares and 15% bonds for her pension', T1: 'shares are £291,000 of £300,000, 97%' },
    reason: { D1: 'The case is about how the money is split against a plan: {cue:D1}. Nothing in it comes out every year, rests on one thing, or is about a death or a gift.',
              T1: 'Fatou chose 85% in shares, and the case says {cue:T1}. That is 12 points above her plan, with no bill and no living costs in the case, so {t:mix} is all that a fall would find.' },
    not: { outcome: 'covered', why: 'It does not matter that she will not need the money for thirty years. The case shows a mix far from the plan she chose, and the key asks about that.' },
    wouldChange: 'If her plan had been 95% in shares and she allowed 5 points either way, 97% would be inside her limit, and the case would be {a:T1.ready}.' },

  { id: 'ret-mix-4', use: 'return', tier: 'varied', setting: 'business', topic: 'personal savings of a firm owner after a sharp drop',
    text: "Karim, 50, owns a small firm. He chose 50% in shares and 50% in bonds for his own savings. After a sharp fall in shares, shares are £130,000 of his £520,000, 25%. He is not drawing on the savings.",
    outcome: 'rebalance', route: { D1: ['timing'], T1: ['drifted'] },
    cues: { D1: 'chose 50% in shares and 50% in bonds for his own savings', T1: 'shares are £130,000 of his £520,000, 25%' },
    reason: { D1: 'The case is about how the money is split against a plan: {cue:D1}. Nothing in it comes out every year, rests on one thing, or is about a death or a gift.',
              T1: 'Karim chose 50% in shares, and the case says {cue:T1}. That is 25 points below his plan, with nothing being sold to pay for anything.' },
    not: { outcome: 'ladder', why: 'There is no bill on a date in the case. It shows only a mix that has moved, a long way below the one he chose.' },
    wouldChange: 'If a bill of £40,000 were due in four months with its money in the shares, the key’s answer would be {a:T1.datedbill}.' }
]);
