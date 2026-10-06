// Wealth Preservation, Unit Four: cases for teach: the term, the four names and the check after each.
// Field guide: see u4.cards-1.js. use: 'teach' = shown in a card; 'check' = asked between cards; 'drill' and 'return' are never in a card.

FC.cases('wealth', 'u4', [

  { id: 'tm-seq', use: 'teach', tier: 'clean', setting: 'retirement', topic: 'two friends and the order of four years', name: 'Ingrid and Paul',
    text: "Ingrid and Paul retired on the same day, each with $500,000 invested in the same fund of shares. Each takes $25,000 out on the first day of every year to live on. Over their first four years the fund's price changes by the same four amounts: down 20%, down 10%, up 10% and up 20%. For Ingrid they come in that order, falls first. For Paul they come in the opposite order, rises first." },

  { id: 'tm-meet-live', use: 'teach', tier: 'clean', setting: 'retirement', topic: 'a retired man who sells funds every month', name: 'Alan’s monthly sales',
    text: "Alan is 66 and retired two years ago. His $600,000 is all in two funds of shares. He needs $2,000 a month to live on, and he gets it by selling about $2,000 of the funds on the first of every month. He keeps no cash set aside for it. This year prices fell by 30%.",
    outcome: 'cashbuffer', route: { D1: ['timing'], T1: ['livingcosts'] },
    cues: { D1: 'He needs $2,000 a month to live on',
            T1: 'he gets it by selling about $2,000 of the funds on the first of every month. He keeps no cash set aside for it' } },

  { id: 'tm-chk-live', use: 'check', tier: 'clean', setting: 'business', topic: 'a sold café and a fund', name: 'The sold café',
    text: "Dimitri, 61, sold his café for $420,000 and put all of it into one fund of shares. He has no pay now. Each month he sells $1,500 of the fund to pay his bills, and he has no savings account to turn to. Prices have dropped by 20% this quarter.",
    outcome: 'cashbuffer', route: { D1: ['timing'], T1: ['livingcosts'] },
    cues: { T1: 'Each month he sells $1,500 of the fund to pay his bills, and he has no savings account to turn to' },
    segments: [
      { text: 'Dimitri, 61, sold his café for $420,000 and put all of it into one fund of shares', note: 'That is where the money is held. It does not yet say how the living costs are paid.' },
      { text: 'He has no pay now', note: 'That is why he needs the money. It does not say how the money for the bills is raised.' },
      { text: 'Each month he sells $1,500 of the fund to pay his bills' },
      { text: 'he has no savings account to turn to', note: 'That matters, and the question uses it. This prompt asks only where the money for the bills comes from.' },
      { text: 'Prices have dropped by 20% this quarter', note: 'That is the fall. It tells you what is catching the money, and not where the bills are paid from.' }
    ],
    reason: { T1: 'Dimitri pays his bills by selling units of {t:fund} whose price can fall, and he has nothing set aside to spend from instead: {cue:T1}. With prices down 20%, each $1,500 takes a bigger slice of the fund than it would have, and that slice is not there when prices come back.' } },

  { id: 'tm-meet-safe', use: 'teach', tier: 'clean', setting: 'family', topic: 'a savings account spent from in a drop', name: 'Ruth and Gil’s savings account',
    text: "Ruth and Gil, both 68, have $640,000. $75,000 of it is in a savings account, and the rest is in funds of shares. They need $2,000 a month to live on, which is $24,000 a year, so the savings account holds a little over three years of spending. Last year prices fell by 30%. They have paid every bill from the savings account since the fall, and have not sold any of the funds. Their plan is to fill the account up again by selling some of the funds in a year when prices are up.",
    outcome: 'covered', route: { D1: ['timing'], T1: ['ready'] },
    cues: { D1: 'They need $2,000 a month to live on',
            T1: 'They have paid every bill from the savings account since the fall, and have not sold any of the funds' } },

  { id: 'tm-chk-safe', use: 'check', tier: 'clean', setting: 'work', topic: 'two years of bills in cash and a bond', name: 'Mina’s two years',
    text: "Mina is 63 and has just left her job. Her living costs are $1,700 a month, $20,400 a year. The first year of them is in a savings account. The second year, $20,400, is in a US Treasury bond that repays it in full on December 31, before the second year begins. The rest of her money is in funds of shares, and prices have fallen by 25% this year.",
    outcome: 'covered', route: { D1: ['timing'], T1: ['ready'] },
    cues: { T1: 'The first year of them is in a savings account. The second year, $20,400, is in a US Treasury bond that repays it in full on December 31, before the second year begins' },
    reason: { T1: 'Mina’s living costs are covered for two years by money that a fall cannot reach: {cue:T1}. The savings account does not move with prices, and the bond repays the full $20,400 before the money is needed. The 25% fall touches only the funds, and she needs nothing from them.' } },

  { id: 'tm-meet-bill', use: 'teach', tier: 'clean', setting: 'family', topic: 'a wedding venue fee', name: 'The wedding venue',
    text: "Tobi and Ada's daughter is getting married next summer. The venue has been booked, and the whole fee, $24,000, is due on June 1, eleven months from now. The $24,000 that Tobi and Ada have set aside for it is in a fund of shares. Prices have just fallen by 25%.",
    outcome: 'ladder', route: { D1: ['timing'], T1: ['datedbill'] },
    cues: { D1: 'the whole fee, $24,000, is due on June 1, eleven months from now',
            T1: ['the whole fee, $24,000, is due on June 1, eleven months from now', 'is in a fund of shares'] } },

  { id: 'tm-chk-bill', use: 'check', tier: 'clean', setting: 'business', topic: 'payment for a new oven', name: 'The new oven',
    text: "Sarah runs a small bakery. Under the contract she signed, she must pay $45,000 to the firm that supplied her new oven on October 1, five months from now. She has kept the money for it in one fund of shares, and the fund has fallen by 18% since she bought it.",
    outcome: 'ladder', route: { D1: ['timing'], T1: ['datedbill'] },
    cues: { T1: ['she must pay $45,000 to the firm that supplied her new oven on October 1, five months from now', 'She has kept the money for it in one fund of shares'] },
    reason: { T1: 'Sarah’s bill has a set size and a set day, and the money for it is held in something whose price can fall: {cue:T1}. The oven firm is paid $45,000 on October 1 whatever the fund is worth. It is not living costs, because nothing is paid every month, and the case says nothing about a plan for {t:mix}.' } },

  { id: 'tm-meet-mix', use: 'teach', tier: 'clean', setting: 'work', topic: 'a mix after eight years of rises', name: 'Marek’s retirement savings',
    text: "Marek is 49. When he began saving for retirement he chose a plan: 60% of his money in shares and 40% in bonds. After eight years of rises his savings are $800,000. Shares are now $624,000 of that, 78%. He will not need to take any money out for fifteen years, and he has not changed the mix since he chose it.",
    outcome: 'rebalance', route: { D1: ['timing'], T1: ['drifted'] },
    cues: { D1: 'Shares are now $624,000 of that, 78%', T1: 'Shares are now $624,000 of that, 78%' } },

  { id: 'tm-chk-mix', use: 'check', tier: 'clean', setting: 'family', topic: 'money kept for children after a long rise', name: 'The children’s money',
    text: "Esther, 41, is keeping $250,000 for her children. Her plan is 80% in shares and 20% in bonds. After a long run of rises, $227,500 of it, 91%, is in shares. She will not need to take any out for twenty years.",
    outcome: 'rebalance', route: { D1: ['timing'], T1: ['drifted'] },
    cues: { T1: '$227,500 of it, 91%, is in shares' },
    reason: { T1: 'Esther chose 80% in shares, and now it is {cue:T1}. That is 11 points above her plan. Nothing is being sold to pay for anything and no bill is in the case, so the only thing the case shows is a mix that has moved well away from the one she chose.' } },

  { id: 'tm-chk-why', use: 'check', tier: 'varied', setting: 'work', topic: 'a mix inside its limits', name: 'Walt’s limits',
    text: "Walt is 59 and still works. His plan is 50% in shares and 50% in bonds, and he has said he will put it right if shares move outside 45% to 55%. Shares are now 52% of his $360,000. He will not need to take any money out for ten years.",
    outcome: 'covered', route: { D1: ['timing'], T1: ['ready'] },
    cues: { T1: 'Shares are now 52% of his $360,000' },
    reason: { T1: 'Walt’s limit is 45% to 55%, and the case says {cue:T1}. That is two points from the plan and well inside the limit, so a fall would take about what he chose. No bill and no living costs are in the case, so nothing a fall could catch is left unprotected.' } }
]);
