// Wealth Preservation, Unit Four: drill cases, stage one. None of these appears in a card.
// Stage one: the key's answers are shown, and the learner gives the name. These cases are asked about the unit's own question, so each
// carries marked words and a reason for that question. reason[STEP] is the reason tied to the marked words; it is shown after the answer,
// decisive sentence first. not names the most tempting wrong name for this case and says why it fails.
// Every group holds two cases connected by a look-alike pair of the ledger, and every group is of one tier.

FC.cases('wealth', 'u4', [

  /* ---------- Group one: living costs paid by selling, and living costs paid from cash ---------- */
  { id: 'n-cb1', use: 'drill', tier: 'clean', setting: 'retirement', topic: 'a pot of funds sold a little each month',
    text: "Greta, 63, retired last year. Her £450,000 is in funds of shares, and she has no savings account. She needs £1,500 a month, and she gets it by selling about £1,500 of the funds each month. Prices are down 22% this year.",
    outcome: 'cashbuffer', route: { D1: ['timing'], T1: ['livingcosts'] },
    cues: { T1: 'she has no savings account. She needs £1,500 a month, and she gets it by selling about £1,500 of the funds each month' },
    reason: { T1: 'Greta’s bills are paid by selling funds whose price can fall, and nothing is set aside: {cue:T1}. With prices down 22%, each £1,500 takes a bigger slice of the funds than it would have, and that slice is not there when prices come back.' },
    not: { outcome: 'covered', why: 'Greta lives on her money in a year of falling prices, as the people in {o:covered} do. But {o:covered} needs the money for her bills already in cash, and the case says she has no savings account.' } },

  { id: 'n-cv1', use: 'drill', tier: 'clean', setting: 'family', topic: 'a savings account of 3 years of bills',
    text: "Pedro and Lia, 67, need £1,800 a month. They hold £65,000 in a savings account, which is a little over three years of their spending, and they pay the bills from it. Their other £420,000 is in funds of shares, which have fallen by 25%. They have not sold any of the funds.",
    outcome: 'covered', route: { D1: ['timing'], T1: ['ready'] },
    cues: { T1: 'They hold £65,000 in a savings account, which is a little over three years of their spending, and they pay the bills from it' },
    reason: { T1: 'The bills are paid from money a fall cannot reach: {cue:T1}. The funds fell by a quarter, and because nothing is sold from them, the fall changes what the funds are worth and nothing about what the couple spends.' },
    not: { outcome: 'cashbuffer', why: 'Pedro and Lia live on their money in a year of falling prices, which is the setting of {o:cashbuffer}. But that name needs the bills paid by selling funds with nothing set aside, and here none of the funds has been sold.' } },

  /* ---------- Group two: a bill on a date, in shares, and a bill on a date, in a bond ---------- */
  { id: 'n-ld1', use: 'drill', tier: 'clean', setting: 'business', topic: 'payment for a new van',
    text: "Wanjiru's building firm must pay £52,000 to the dealer for a new van on 15 March, four months from now, as agreed in the order. The money for it is in a fund of shares, which has fallen by 12% since she set it aside.",
    outcome: 'ladder', route: { D1: ['timing'], T1: ['datedbill'] },
    cues: { T1: ['must pay £52,000 to the dealer for a new van on 15 March', 'The money for it is in a fund of shares'] },
    reason: { T1: 'The bill has a set size and a set day, and its money sits in something whose price can fall: {cue:T1}. After a 12% fall the fund holds about £45,760 of the £52,000, and the dealer’s date does not move.' },
    not: { outcome: 'covered', why: 'There is a bill and a fall, as there is in {o:covered}. But that name needs the money for the bill already in cash or in bonds that repay by the day, and here it is in {t:fund} of shares.' } },

  { id: 'n-cv2', use: 'drill', tier: 'clean', setting: 'property', topic: 'a boiler and wiring paid for by a bond',
    text: "Dario must pay £30,000 for a new boiler and rewiring on 1 June. He has put the £30,000 in a bond from a government that repays £30,000 on 15 May. Prices have fallen by 18% since January, and he has no other bill coming.",
    outcome: 'covered', route: { D1: ['timing'], T1: ['ready'] },
    cues: { T1: 'He has put the £30,000 in a bond from a government that repays £30,000 on 15 May' },
    reason: { T1: 'The money for the bill is out of a fall’s reach: {cue:T1}. The bond repays the full £30,000 two weeks before the bill is due, whatever shares have done since January.' },
    not: { outcome: 'ladder', why: 'The bill is of a known size on a known date, as in {o:ladder}. But that name needs its money in shares or funds, and here it is in {t:bond} that repays before the day.' } },

  /* ---------- Group three: a mix that has moved, and living costs paid by selling ---------- */
  { id: 'n-rb1', use: 'drill', tier: 'varied', setting: 'retirement', topic: 'a mix after a long drop in shares',
    text: "Sunil is 55. His plan is 50% in shares and 50% in bonds. After a long fall in shares, shares are £84,000 of his £240,000, 35%. He will not need to take any money out for ten years.",
    outcome: 'rebalance', route: { D1: ['timing'], T1: ['drifted'] },
    cues: { T1: 'shares are £84,000 of his £240,000, 35%' },
    reason: { T1: 'Sunil chose 50% in shares, and now {cue:T1}. That is 15 points below his plan, and nothing is being sold to pay for anything. A fall would take less than he chose, and so would a recovery.' },
    not: { outcome: 'cashbuffer', why: 'Sunil is not living on the money: he need take nothing out for ten years, and no bill is in the case. The case shows only that {t:mix} has moved.' } },

  { id: 'n-cb2', use: 'drill', tier: 'varied', setting: 'business', topic: 'the proceeds of a sold share in a firm',
    text: "Imelda, 48, sold her share of a firm and lives on the £310,000 she was paid, all of it in a fund of shares. She sells £2,500 of the fund each month to pay her bills, and has no savings account. Prices have fallen by 17% since she sold.",
    outcome: 'cashbuffer', route: { D1: ['timing'], T1: ['livingcosts'] },
    cues: { T1: 'She sells £2,500 of the fund each month to pay her bills, and has no savings account' },
    reason: { T1: 'Imelda gets her living money by selling investments, with nothing set aside to spend from instead: {cue:T1}. Every month a fall means selling more units for the same £2,500.' },
    not: { outcome: 'ladder', why: 'Imelda needs money every month, with no end date, and the case shows no single bill of a known size on a known day.' } },

  /* ---------- Group four: a bill on a date, and a mix that is still inside its limits ---------- */
  { id: 'n-ld2', use: 'drill', tier: 'varied', setting: 'family', topic: 'a term of fees at a music school',
    text: "Nikos and Anna's son starts at a music school in September. The first term's fees are £9,500, due on 1 September, ten months from now. They have kept the money for it in one fund of shares, and prices have fallen by 20%.",
    outcome: 'ladder', route: { D1: ['timing'], T1: ['datedbill'] },
    cues: { T1: ["The first term's fees are £9,500, due on 1 September, ten months from now", 'kept the money for it in one fund of shares'] },
    reason: { T1: 'The fees are a known size on a known date, and their money is held where its price can fall: {cue:T1}. After a fall of 20% the fund holds £7,600 of the £9,500, and the school will still want £9,500 on 1 September.' },
    not: { outcome: 'cashbuffer', why: 'The money is needed once, on a date, and not every month. The case shows no living costs paid by selling.' } },

  { id: 'n-cv3', use: 'drill', tier: 'varied', setting: 'work', topic: 'a pension mix inside its limits',
    text: "Tanya's plan is 70% in shares and 30% in bonds, and she allows shares to move 5 points either side. Her pension is £310,000, and shares are now £226,300 of it, 73%. She is 44 and will not need to take any money out for twenty years.",
    outcome: 'covered', route: { D1: ['timing'], T1: ['ready'] },
    cues: { T1: 'shares are now £226,300 of it, 73%' },
    reason: { T1: 'Tanya’s limit is 65% to 75%, and the case says {cue:T1}. That is 3 points above her plan and inside the limit, so a fall would take about what she chose.' },
    not: { outcome: 'ladder', why: 'No bill is due on a date in the case, so there is no bill whose money a fall could catch. The only thing in it is a mix that is still inside its limits.' } }
]);
