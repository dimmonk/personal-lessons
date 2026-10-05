// Wealth Preservation, Unit Four: cases shown inside cards, part one (the idea, the four names, and the check after each name).
// use: 'teach' = shown in a card with its reasoning; 'check' = asked between cards. Neither may appear in the drill.
// setting is one of subject.settings (an area of life); topic is the story, and no two cases of one name share a topic.
// cues[STEP] is the exact phrase in the text that decides that question (or a list of phrases); the app marks it, always in the same
// style. segments are the tappable pieces for "tap the words" prompts; note is shown if that piece is tapped in error.
// reason[STEP] is the reason for this case's answer to that question. Every case a card shows has a name.

FC.cases('wealth', 'u4', [

  /* ---------- The case that carries the term (no name is asked of it) ---------- */
  { id: 'tm-seq', use: 'teach', tier: 'clean', setting: 'retirement', topic: 'two friends and the order of four years', name: 'Ingrid and Paul',
    text: "Ingrid and Paul retired on the same day, each with £500,000 invested in the same fund of shares. Each takes £25,000 out on the first day of every year to live on. Over their first four years the fund's price changes by the same four amounts: down 20%, down 10%, up 10% and up 20%. For Ingrid they come in that order, falls first. For Paul they come in the opposite order, rises first." },

  /* ---------- Years of spending in cash ---------- */
  { id: 'tm-meet-live', use: 'teach', tier: 'clean', setting: 'retirement', topic: 'a retired man who sells funds every month', name: 'Alan’s monthly sales',
    text: "Alan is 66 and retired two years ago. His £600,000 is all in two funds of shares. He needs £2,000 a month to live on, and he gets it by selling about £2,000 of the funds on the first of every month. He keeps no cash set aside for it. This year prices fell by 30%.",
    outcome: 'cashbuffer', route: { D1: ['timing'], T1: ['livingcosts'] },
    cues: { D1: 'He needs £2,000 a month to live on',
            T1: 'he gets it by selling about £2,000 of the funds on the first of every month. He keeps no cash set aside for it' } },

  { id: 'tm-again-live', use: 'teach', tier: 'clean', setting: 'health', topic: 'a fund sold to live on after an illness', name: 'Noor’s fund',
    text: "Noor is 57. She stopped work after an illness, and there is no pay now. Her £380,000 is all in one fund of shares. She needs £1,800 a month, and she gets it by selling units of the fund on the first of each month, with no cash set aside. Since the spring the fund has fallen by 25%.",
    outcome: 'cashbuffer', route: { D1: ['timing'], T1: ['livingcosts'] },
    cues: { T1: 'she gets it by selling units of the fund on the first of each month, with no cash set aside' },
    segments: [
      { text: 'She stopped work after an illness, and there is no pay now', note: 'That is why she needs money from her savings. It does not yet say where each month’s money comes from.' },
      { text: 'Her £380,000 is all in one fund of shares', note: 'That is where the money is held. The words asked for are the ones that show how the bills are paid.' },
      { text: 'She needs £1,800 a month, and she gets it by selling units of the fund on the first of each month, with no cash set aside' },
      { text: 'Since the spring the fund has fallen by 25%', note: 'That is the fall. It tells you what is catching the money, and not where the bills are paid from.' }
    ] },

  { id: 'tm-chk-live', use: 'check', tier: 'clean', setting: 'business', topic: 'a sold café and a fund', name: 'The sold café',
    text: "Dimitri, 61, sold his café for £420,000 and put all of it into one fund of shares. He has no pay now. Each month he sells £1,500 of the fund to pay his bills, and he has no savings account to turn to. Prices have dropped by 20% this quarter.",
    outcome: 'cashbuffer', route: { D1: ['timing'], T1: ['livingcosts'] },
    cues: { T1: 'Each month he sells £1,500 of the fund to pay his bills, and he has no savings account to turn to' },
    segments: [
      { text: 'Dimitri, 61, sold his café for £420,000 and put all of it into one fund of shares', note: 'That is where the money is held. It does not yet say how the living costs are paid.' },
      { text: 'He has no pay now', note: 'That is why he needs the money. It does not say how the money for the bills is raised.' },
      { text: 'Each month he sells £1,500 of the fund to pay his bills' },
      { text: 'he has no savings account to turn to', note: 'That matters, and the key’s question uses it. This prompt asks only where the money for the bills comes from.' },
      { text: 'Prices have dropped by 20% this quarter', note: 'That is the fall. It tells you what is catching the money, and not where the bills are paid from.' }
    ],
    reason: { T1: 'Dimitri pays his bills by selling units of {t:fund} whose price can fall, and he has nothing set aside to spend from instead: {cue:T1}. With prices down 20%, each £1,500 takes a bigger slice of the fund than it would have, and that slice is not there when prices come back.' } },

  /* ---------- Already covered ---------- */
  { id: 'tm-meet-safe', use: 'teach', tier: 'clean', setting: 'family', topic: 'a savings account spent from in a drop', name: 'Ruth and Gil’s savings account',
    text: "Ruth and Gil, both 68, have £640,000. £75,000 of it is in a savings account, and the rest is in funds of shares. They need £2,000 a month to live on, which is £24,000 a year, so the savings account holds a little over three years of spending. Last year prices fell by 30%. They have paid every bill from the savings account since the fall, and have not sold any of the funds. Their plan is to fill the account up again by selling some of the funds in a year when prices are up.",
    outcome: 'covered', route: { D1: ['timing'], T1: ['ready'] },
    cues: { D1: 'They need £2,000 a month to live on',
            T1: 'They have paid every bill from the savings account since the fall, and have not sold any of the funds' } },

  { id: 'tm-again-safe', use: 'teach', tier: 'clean', setting: 'property', topic: 'roof money already in a savings account', name: 'The new roof',
    text: "Hamza has accepted a quote of £16,000 for a new roof, and the bill is due on 1 March. The money for it has sat in a savings account since October. Over the winter prices fell by 20%, and Hamza's other money, in a fund of shares, fell with them. He has not touched the fund.",
    outcome: 'covered', route: { D1: ['timing'], T1: ['ready'] },
    cues: { T1: 'The money for it has sat in a savings account since October' },
    segments: [
      { text: 'Hamza has accepted a quote of £16,000 for a new roof, and the bill is due on 1 March', note: 'That is the bill. A bill is in other cases too, so it cannot settle this one. The words asked for show where the money for it is held.' },
      { text: 'The money for it has sat in a savings account since October' },
      { text: "Over the winter prices fell by 20%, and Hamza's other money, in a fund of shares, fell with them", note: 'That is the fall, and it is real, but it is about his other money. It says nothing about where the money for the roof is held.' },
      { text: 'He has not touched the fund', note: 'That is true and it helps, but it is about his other money. The words asked for are about the money for the roof.' }
    ] },

  { id: 'tm-chk-safe', use: 'check', tier: 'clean', setting: 'work', topic: 'two years of bills in cash and a bond', name: 'Mina’s two years',
    text: "Mina is 63 and has just left her job. Her living costs are £1,700 a month, £20,400 a year. The first year of them is in a savings account. The second year, £20,400, is in a bond from a government that repays it in full on 1 January, before the second year begins. The rest of her money is in funds of shares, and prices have fallen by 25% this year.",
    outcome: 'covered', route: { D1: ['timing'], T1: ['ready'] },
    cues: { T1: 'The first year of them is in a savings account. The second year, £20,400, is in a bond from a government that repays it in full on 1 January, before the second year begins' },
    reason: { T1: 'Mina’s living costs are covered for two years by money that a fall cannot reach: {cue:T1}. The savings account does not move with prices, and the bond repays the full £20,400 before the money is needed. The 25% fall touches only the funds, and she needs nothing from them.' } },

  /* ---------- A bond for each bill ---------- */
  { id: 'tm-meet-bill', use: 'teach', tier: 'clean', setting: 'family', topic: 'a wedding venue fee', name: 'The wedding venue',
    text: "Tobi and Ada's daughter is getting married next summer. The venue has been booked, and the whole fee, £24,000, is due on 1 June, eleven months from now. The £24,000 that Tobi and Ada have set aside for it is in a fund of shares. Prices have just fallen by 25%.",
    outcome: 'ladder', route: { D1: ['timing'], T1: ['datedbill'] },
    cues: { D1: 'the whole fee, £24,000, is due on 1 June, eleven months from now',
            T1: ['the whole fee, £24,000, is due on 1 June, eleven months from now', 'is in a fund of shares'] } },

  { id: 'tm-again-bill', use: 'teach', tier: 'clean', setting: 'property', topic: 'the final payment on a flat', name: 'The final payment on a flat',
    text: "Lucía has agreed to buy a flat. The final payment of £60,000 is due on 30 November, seven months from now, on the day the sale completes. The money for it is in a fund of shares. Since the spring prices have fallen by 15%.",
    outcome: 'ladder', route: { D1: ['timing'], T1: ['datedbill'] },
    cues: { T1: ['The final payment of £60,000 is due on 30 November', 'The money for it is in a fund of shares'] },
    segments: [
      { text: 'Lucía has agreed to buy a flat', note: 'That is the story. It says nothing about where the money for the payment is held.' },
      { text: 'The final payment of £60,000 is due on 30 November, seven months from now, on the day the sale completes', note: 'That is the bill, and it matters. The words asked for are the ones that show where the money for it is held.' },
      { text: 'The money for it is in a fund of shares' },
      { text: 'Since the spring prices have fallen by 15%', note: 'That is the fall. The words asked for show where the money for the bill is held.' }
    ] },

  { id: 'tm-chk-bill', use: 'check', tier: 'clean', setting: 'business', topic: 'payment for a new oven', name: 'The new oven',
    text: "Sarah runs a small bakery. Under the contract she signed, she must pay £45,000 to the firm that supplied her new oven on 1 October, five months from now. She has kept the money for it in one fund of shares, and the fund has fallen by 18% since she bought it.",
    outcome: 'ladder', route: { D1: ['timing'], T1: ['datedbill'] },
    cues: { T1: ['she must pay £45,000 to the firm that supplied her new oven on 1 October, five months from now', 'She has kept the money for it in one fund of shares'] },
    reason: { T1: 'Sarah’s bill has a set size and a set day, and the money for it is held in something whose price can fall: {cue:T1}. The oven firm is paid £45,000 on 1 October whatever the fund is worth. It is not living costs, because nothing is paid every month, and the case says nothing about a plan for {t:mix}.' } },

  /* ---------- Rebalance by written rule ---------- */
  { id: 'tm-meet-mix', use: 'teach', tier: 'clean', setting: 'work', topic: 'a mix after eight years of rises', name: 'Marek’s retirement savings',
    text: "Marek is 49. When he began saving for retirement he chose a plan: 60% of his money in shares and 40% in bonds. After eight years of rises his savings are £800,000. Shares are now £624,000 of that, 78%. He will not need to take any money out for fifteen years, and he has not changed the mix since he chose it.",
    outcome: 'rebalance', route: { D1: ['timing'], T1: ['drifted'] },
    cues: { D1: 'Shares are now £624,000 of that, 78%', T1: 'Shares are now £624,000 of that, 78%' } },

  { id: 'tm-again-mix', use: 'teach', tier: 'clean', setting: 'home', topic: 'long-term money after two bad years for shares', name: 'Tomas and Eva’s long-term money',
    text: "Tomas and Eva keep £195,000 for the long term. Their plan is 70% in shares and 30% in bonds. After two bad years for shares, shares are £105,000 of the £195,000, 54%. They will not need to take any of it out for twenty years.",
    outcome: 'rebalance', route: { D1: ['timing'], T1: ['drifted'] },
    cues: { T1: 'shares are £105,000 of the £195,000, 54%' },
    segments: [
      { text: 'Tomas and Eva keep £195,000 for the long term. Their plan is 70% in shares and 30% in bonds', note: 'That is the plan they chose. The words asked for show how far {t:mix} has moved from it.' },
      { text: 'After two bad years for shares, shares are £105,000 of the £195,000, 54%' },
      { text: 'They will not need to take any of it out for twenty years', note: 'That tells you nothing is needed soon. It does not show how far {t:mix} has moved.' }
    ] },

  { id: 'tm-chk-mix', use: 'check', tier: 'clean', setting: 'family', topic: 'money kept for children after a long rise', name: 'The children’s money',
    text: "Esther, 41, is keeping £250,000 for her children. Her plan is 80% in shares and 20% in bonds. After a long run of rises, £227,500 of it, 91%, is in shares. She will not need to take any out for twenty years.",
    outcome: 'rebalance', route: { D1: ['timing'], T1: ['drifted'] },
    cues: { T1: '£227,500 of it, 91%, is in shares' },
    reason: { T1: 'Esther chose 80% in shares, and now it is {cue:T1}. That is 11 points above her plan. Nothing is being sold to pay for anything and no bill is in the case, so the only thing the case shows is a mix that has moved well away from the one she chose.' } },

  /* ---------- The check on the key's question ---------- */
  { id: 'tm-chk-why', use: 'check', tier: 'varied', setting: 'work', topic: 'a mix inside its limits', name: 'Walt’s limits',
    text: "Walt is 59 and still works. His plan is 50% in shares and 50% in bonds, and he has said he will put it right if shares move outside 45% to 55%. Shares are now 52% of his £360,000. He will not need to take any money out for ten years.",
    outcome: 'covered', route: { D1: ['timing'], T1: ['ready'] },
    cues: { T1: 'Shares are now 52% of his £360,000' },
    reason: { T1: 'Walt’s limit is 45% to 55%, and the case says {cue:T1}. That is two points from the plan and well inside the limit, so a fall would take about what he chose. No bill and no living costs are in the case, so nothing a fall could catch is left unprotected.' } }
]);
