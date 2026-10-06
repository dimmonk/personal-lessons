// Wealth Preservation, Unit Four: drill cases, stage four (the whole route, no help), second part: cases of a different setting and tier
// (varied, then misleading). The two cases of a name taught by Unit Two carry that name's route, and `also` lists the answer of this
// unit's gate that loses to it by the key's tie-break.

FC.cases('wealth', 'u4', [

  /* ---------- Varied ---------- */
  { id: 'r-rb1', use: 'drill', tier: 'varied', setting: 'work', topic: 'a 401(k) mix after a long rise',
    text: "Chidi, 46, set out 60% of his 401(k) in shares and 40% in bonds, and allows himself 5 points either way. After a long rise, shares are $560,000 of his $700,000, 80%. He is not selling anything, and no bill is due for years.",
    outcome: 'rebalance', route: { D1: ['timing'], T1: ['drifted'] },
    cues: { D1: 'set out 60% of his 401(k) in shares and 40% in bonds', T1: 'shares are $560,000 of his $700,000, 80%' },
    reason: { D1: 'The case is about how the money is split against a plan: {cue:D1}. Nothing in it comes out every year, rests on one thing, or is about a death or a gift.',
              T1: 'Chidi’s limit is 55% to 65%, and the case says {cue:T1}. That is 20 points above the plan and 15 above the limit, with no bill and no living costs in the case.' },
    not: { outcome: 'covered', why: 'A mix is only covered when it is still inside the limits the plan allows. Chidi’s limit is 5 points, and {t:mix} is 20 points from the plan.' },
    wouldChange: 'If shares were at 63%, {t:mix} would be inside his limit, and the case would be {a:T1.ready}.' },

  { id: 'r-cv3', use: 'drill', tier: 'varied', setting: 'family', topic: 'a mix near its plan in a saver’s pot',
    text: "Luciana, 51, chose 40% in shares and 60% in bonds, and allows shares to move 5 points either side. Her $480,000 now has $204,000 in shares, 42.5%. She is not living on it yet, and no bill is due.",
    outcome: 'covered', route: { D1: ['timing'], T1: ['ready'] },
    cues: { D1: 'chose 40% in shares and 60% in bonds', T1: 'now has $204,000 in shares, 42.5%' },
    reason: { D1: 'The case is about how the money is split against a plan: {cue:D1}. Nothing in it comes out every year, rests on one thing, or is about a death or a gift.',
              T1: 'Luciana’s limit is 35% to 45%, and the case says {cue:T1}. That is 2.5 points above the plan, inside the limit, so a fall would take about what she chose.' },
    not: { outcome: 'rebalance', why: 'Every mix moves a little, and this one has moved only a little. It is still well inside the limit the plan allows, so it has not moved well away from the plan.' },
    wouldChange: 'If shares were at 52%, {t:mix} would be well outside her limit, and the case would be {a:T1.drifted}.' },

  { id: 'r-cb2', use: 'drill', tier: 'varied', setting: 'property', topic: 'a sold house paid out in monthly sales',
    text: "Orla sold the house she inherited and lives on the $420,000, all in funds of shares. She sells $3,000 of the funds every month to pay for her apartment and everything else, and has no savings account. Prices fell by 19% last quarter.",
    outcome: 'cashbuffer', route: { D1: ['timing'], T1: ['livingcosts'] },
    cues: { D1: 'She sells $3,000 of the funds every month to pay for her apartment and everything else', T1: 'She sells $3,000 of the funds every month to pay for her apartment and everything else, and has no savings account' },
    reason: { D1: 'The case is about what a fall would do to money that is spent every month: {cue:D1}. Nothing in it comes out as a charge, rests on one thing, or is about a death or a gift.',
              T1: 'Orla’s bills are paid by selling funds, with nothing set aside to spend from instead: {cue:T1}. Each month at lower prices means selling more units for the same $3,000.' },
    not: { outcome: 'ladder', why: 'Orla needs money every month, with no end date. The case shows no single bill of a known size on a known day.' },
    wouldChange: 'If Orla had no monthly costs to pay from the funds, and the only thing due were one bill of $30,000 on March 1 with its money in them, the case would be {a:T1.datedbill}.' },

  { id: 'r-ld2', use: 'drill', tier: 'varied', setting: 'family', topic: 'a signed note to repay a brother',
    text: "Alberto, 69, has promised to repay his brother $40,000 on July 1, eight months from now, and has signed a note saying so. The money for it is in one fund of shares, and the fund is down 17% since the note was signed.",
    outcome: 'ladder', route: { D1: ['timing'], T1: ['datedbill'] },
    cues: { D1: 'repay his brother $40,000 on July 1, eight months from now', T1: ['repay his brother $40,000 on July 1, eight months from now', 'The money for it is in one fund of shares'] },
    reason: { D1: 'The case is about what a fall would do to money that has a job on a date: {cue:D1}. Nothing in it comes out every year, rests on one thing, or is about a death or a gift.',
              T1: 'The repayment is a known size on a known date, and its money sits where its price can fall: {cue:T1}. After a fall of 17% the fund holds about $33,200 of the $40,000, and the note’s date does not move.' },
    not: { outcome: 'cashbuffer', why: 'Alberto needs money once, on July 1. The case shows no living costs paid by selling, and nothing is needed from the money after the date.' },
    wouldChange: 'If Alberto held the $40,000 in {t:bond} from the US government that repays it by June 1, the money would be out of a fall’s reach, and the case would be {a:T1.ready}.' },

  /* ---------- Misleading ---------- */
  { id: 'r-burn', use: 'drill', tier: 'misleading', setting: 'retirement', topic: 'a sum fixed seven years ago from a shrunken pot', echo: 'tm-meet-live',
    text: "Yusuf retired seven years ago with $720,000 in funds of shares. He set himself $32,000 a year, which was 4.4% of the money then, and has taken exactly that every year since, selling units of the funds each month and keeping no cash. Prices have fallen, and the funds are now worth $450,000.",
    outcome: 'burnrate', route: { D1: ['erosion'], E1: ['fixedsum'] }, also: ['timing'],
    cues: { D1: 'has taken exactly that every year since',
            E1: ['He set himself $32,000 a year', 'the funds are now worth $450,000'] },
    reason: { D1: 'The case shows a sum taken out every year: {cue:D1}. A fall in prices is in the case as well, and when a case shows both, the answer is the sum.',
              E1: 'The sum was fixed when the money was worth more, and it has not moved while the money shrank: {cue:E1}. $32,000 was 4.4% of $720,000 and is now 7.1% of $450,000.' },
    not: { outcome: 'cashbuffer', why: 'Yusuf pays his bills by selling falling funds with no cash set aside, which is how {o:cashbuffer} of this unit looks. But the sum has stayed the same for seven years while the funds shrank, and the question about that comes first.' },
    wouldChange: 'If Yusuf had reset the sum each year to 4.4% of what the funds were worth, the sum would no longer be the trouble, and the case would be {a:T1.livingcosts}.' },

  { id: 'r-cb3', use: 'drill', tier: 'misleading', setting: 'home', topic: 'a drifted mix with monthly sales to live on', echo: 'tm-meet-mix',
    text: "Sakura, 66, plans 60% in shares and 40% in bonds. Shares are now 69% of her $390,000, which is $269,100. She needs $1,700 a month, and she pays it by selling units of the shares each month. She has no cash set aside.",
    outcome: 'cashbuffer', route: { D1: ['timing'], T1: ['livingcosts'] }, also: ['drifted'],
    cues: { D1: 'She needs $1,700 a month', T1: 'she pays it by selling units of the shares each month. She has no cash set aside' },
    reason: { D1: 'The case is about what a fall would do to money that is spent every month: {cue:D1}. Nothing in it comes out as a charge, rests on one thing, or is about a death or a gift.',
              T1: 'Sakura’s mix has moved, but her bills are paid by selling shares every month with nothing set aside: {cue:T1}. When a case shows both, the answer is the living costs.' },
    not: { outcome: 'rebalance', why: 'Her mix is 9 points above her plan, which is what {o:rebalance} looks like. But shares are being sold every month to pay her bills, and money needed soon comes first.' },
    wouldChange: 'If her bills were paid from a savings account and no shares were being sold, {t:mix} alone would be the case, and it would be {a:T1.drifted}.' }
]);
