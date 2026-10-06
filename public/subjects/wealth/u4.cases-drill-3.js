// Wealth Preservation, Unit Four: drill cases, stage three (the first answer is shown; the learner answers the key's question and gives
// the name) and the first four cases of stage four (the whole route, no help).
// Every question is asked in stage four, starting with the first question of the key, so every case carries marked words and a reason for
// that question too (D1). wouldChange says what would make the case a different name. echo names a teaching case whose story this one
// resembles while its name differs.

FC.cases('wealth', 'u4', [

  /* ---------- Stage three: the first answer is shown; the learner answers the key's question and gives the name ---------- */
  { id: 'f-cb', use: 'drill', tier: 'varied', setting: 'family', topic: 'two years off to care for a father',
    text: "Julien, 34, has left his job for two years to care for his father. He lives on $96,000 in one fund of shares, selling $2,000 of it each month, and he has no savings account. Prices have fallen by 15%.",
    outcome: 'cashbuffer', route: { D1: ['timing'], T1: ['livingcosts'] },
    cues: { D1: 'He lives on $96,000 in one fund of shares', T1: 'selling $2,000 of it each month, and he has no savings account' },
    reason: { D1: 'The case is about what a fall would do to money that is lived on: {cue:D1}. It raises no yearly charge, nothing most of the money rests on, and no death or gift.',
              T1: 'Julien pays his bills by selling a fall-prone investment, with nothing set aside to spend from instead: {cue:T1}. Each month a fall means selling more units for the same $2,000.' },
    not: { outcome: 'covered', why: 'Julien has no savings account and no bonds, so the money for his bills is not out of a fall’s reach. A person with two years of bills in cash would be a different case.' } },

  { id: 'f-cv', use: 'drill', tier: 'varied', setting: 'work', topic: 'a savings account and two bonds for 3 years',
    text: "Priti is 66 and has just finished work. Her pot is $330,000. A year of her spending, $22,000, is in cash in a savings account, and her next two years, $44,000, are in two US Treasury bonds that repay $22,000 on December 31 of each year. Prices have fallen by 26%, and her bills are being paid from the savings account.",
    outcome: 'covered', route: { D1: ['timing'], T1: ['ready'] },
    cues: { D1: 'Priti is 66 and has just finished work',
            T1: 'A year of her spending, $22,000, is in cash in a savings account, and her next two years, $44,000, are in two US Treasury bonds that repay $22,000 on December 31 of each year' },
    reason: { D1: 'The case is about what a fall would do to money that has to pay living costs: {cue:D1}. Nothing in it comes out as a charge, rests on one thing, or is about a death or a gift.',
              T1: 'Three years of her living costs are held where a fall cannot reach them: {cue:T1}. The 26% fall touches the rest of her money and not the money for her bills.' },
    not: { outcome: 'cashbuffer', why: 'Priti has just finished work and lives on her money, which is the setting of {o:cashbuffer}. But her bills are paid from cash and bonds, and nothing has to be sold.' } },

  { id: 'f-ld', use: 'drill', tier: 'varied', setting: 'property', topic: 'buying out a brother’s half of a house',
    text: "Callum and Jo are buying out Jo's brother's half of their house. The $85,000 is due on June 30, thirteen months from now, in the agreement they signed. They have kept the money in one fund of shares, and prices have fallen by 21% since they signed.",
    outcome: 'ladder', route: { D1: ['timing'], T1: ['datedbill'] },
    cues: { D1: 'The $85,000 is due on June 30, thirteen months from now, in the agreement they signed',
            T1: ['The $85,000 is due on June 30, thirteen months from now, in the agreement they signed', 'kept the money in one fund of shares'] },
    reason: { D1: 'The case is about what a fall would do to money that has a job on a date: {cue:D1}. Nothing in it comes out every year, rests on one thing, or is about a death or a gift.',
              T1: 'The payment is a known size on a known date, and its money sits where its price can fall: {cue:T1}. After a fall of 21% the fund holds about $67,150 of the $85,000, and the date is written in the agreement.' },
    not: { outcome: 'rebalance', why: 'The case holds no plan for a mix, and no mix has moved. The case is about one payment with a date, and the money for it is in shares.' } },

  { id: 'f-rb', use: 'drill', tier: 'varied', setting: 'retirement', topic: 'a mix five years before retiring',
    text: "Dev, 60, chose a plan of 50% shares and 50% bonds for the money he will start to live on at 65. After a long run of rises, shares are $330,000 of his $450,000, 73%. Nothing is due, and he takes nothing out yet.",
    outcome: 'rebalance', route: { D1: ['timing'], T1: ['drifted'] },
    cues: { D1: 'a plan of 50% shares and 50% bonds', T1: 'shares are $330,000 of his $450,000, 73%' },
    reason: { D1: 'The case is about how the money is split against a plan: {cue:D1}. Nothing in it comes out every year, rests on one thing, or is about a death or a gift.',
              T1: 'Dev chose 50% in shares, and now {cue:T1}. That is 23 points above his plan, and nothing is being sold or paid for yet, so {t:mix} is all that a fall would find.' },
    not: { outcome: 'ladder', why: 'There is no bill on a date in the case. Dev will start living on the money at 65, but nothing is due now, and the case shows only {t:mix} that has moved.' } },

  /* ---------- Stage four: the whole route, no help (clean) ---------- */
  { id: 'r-cb1', use: 'drill', tier: 'clean', setting: 'work', topic: 'early retirement from a bank',
    text: "Mehmet, 60, took early retirement from his job at the bank. His $540,000 is in funds of shares, and he draws $2,400 a month from it by selling units. He has no cash set aside, and prices have fallen 24% this year.",
    outcome: 'cashbuffer', route: { D1: ['timing'], T1: ['livingcosts'] },
    cues: { D1: 'he draws $2,400 a month from it by selling units', T1: ['he draws $2,400 a month from it by selling units', 'He has no cash set aside'] },
    reason: { D1: 'The case is about what a fall would do to money that is drawn on every month: {cue:D1}. Nothing in it is a charge, rests on one thing, or is about a death or a gift.',
              T1: 'Mehmet’s bills are paid by selling funds, and nothing is set aside: {cue:T1}. With prices down 24%, each $2,400 takes a bigger slice of the funds, and that slice is not there when prices recover.' },
    not: { outcome: 'covered', why: 'Mehmet lives on his money in a year of falling prices, as the people in {o:covered} do. But he has no cash set aside, so the money for his bills is not out of a fall’s reach.' },
    wouldChange: 'If Mehmet held $86,400 in a savings account, which is three years of his $2,400 a month, and paid his bills from it, none of the funds would be sold, and the case would be {a:T1.ready}.' },

  { id: 'r-cv1', use: 'drill', tier: 'clean', setting: 'retirement', topic: 'a woman of seventy-two spending from savings',
    text: "Ottilie, 72, spends $1,500 a month. She keeps $54,000 in a savings account, which is three years of spending, and pays her bills from it. Her $300,000 in funds of shares has fallen by 27%, and she has sold none of it since.",
    outcome: 'covered', route: { D1: ['timing'], T1: ['ready'] },
    cues: { D1: 'Ottilie, 72, spends $1,500 a month', T1: 'She keeps $54,000 in a savings account, which is three years of spending, and pays her bills from it' },
    reason: { D1: 'The case is about what a fall would do to money that pays living costs: {cue:D1}. Nothing in it comes out as a charge, rests on one thing, or is about a death or a gift.',
              T1: 'Her bills are paid from money a fall cannot reach: {cue:T1}. The funds fell by 27% and she has sold none of them, so the fall changed what they are worth and nothing about what she spends.' },
    not: { outcome: 'cashbuffer', why: 'Ottilie lives on her money in a year of falling prices, which is the setting of {o:cashbuffer}. But {o:cashbuffer} needs the bills paid by selling with nothing set aside, and she has sold none of her funds.' },
    wouldChange: 'If the savings account were empty and she were selling units of the funds to pay her bills, the case would be {a:T1.livingcosts}.' },

  { id: 'r-ld1', use: 'drill', tier: 'clean', setting: 'business', topic: 'a new lease paid to a landlord',
    text: "Bashir's café has to pay $18,000 to the landlord on April 1 for a new lease, six months from now. The money is in a fund of shares that has fallen by 14% this year.",
    outcome: 'ladder', route: { D1: ['timing'], T1: ['datedbill'] },
    cues: { D1: 'has to pay $18,000 to the landlord on April 1 for a new lease', T1: ['has to pay $18,000 to the landlord on April 1 for a new lease', 'The money is in a fund of shares'] },
    reason: { D1: 'The case is about what a fall would do to money that has a job on a date: {cue:D1}. Nothing in it comes out every year, rests on one thing, or is about a death or a gift.',
              T1: 'The lease payment is a known size on a known date, and its money sits where its price can fall: {cue:T1}. After a fall of 14% the fund holds about $15,480 of the $18,000, and the landlord’s date does not move.' },
    not: { outcome: 'covered', why: 'There is a bill and a fall, as in {o:covered}. But that name needs the money for the bill already in cash or in bonds that repay by the day, and here it is in shares.' },
    wouldChange: 'If the $18,000 were in {t:bond} from the US government that repays it in full by March 1, the money would be out of a fall’s reach, and the case would be {a:T1.ready}.' },

  { id: 'r-cv2', use: 'drill', tier: 'clean', setting: 'family', topic: 'college tuition held in a savings account',
    text: "Elin must pay $11,000 in college tuition for her daughter on October 1. The money has been in a savings account since the spring, and the bank pays a little interest on it. Prices have fallen by 19% this year, and none of Elin's other money is needed for the tuition.",
    outcome: 'covered', route: { D1: ['timing'], T1: ['ready'] },
    cues: { D1: 'Elin must pay $11,000 in college tuition for her daughter on October 1', T1: 'The money has been in a savings account since the spring' },
    reason: { D1: 'The case is about what a fall would do to money that has a job on a date: {cue:D1}. Nothing in it comes out every year, rests on one thing, or is about a death or a gift.',
              T1: 'The money for the tuition is held where a fall cannot reach it: {cue:T1}. Prices fell by 19%, but a savings account does not move with them, so $11,000 will be there on October 1.' },
    not: { outcome: 'ladder', why: 'The tuition is a bill of a known size on a known date, as in {o:ladder}. But that name needs the money for the bill in shares or funds, and here it is in a savings account.' },
    wouldChange: 'If the $11,000 had been in {t:fund} of shares, it would now be about $8,910, and the case would be {a:T1.datedbill}.' }
]);
