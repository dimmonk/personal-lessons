// Wealth Preservation, Unit Four: cases for teach: the look-alike pairs, the three exceptions and the whole case.
// Field guide: see u4.cards-1.js. use: 'teach' = shown in a card; 'check' = asked between cards; 'drill' and 'return' are never in a card.

FC.cases('wealth', 'u4', [

  { id: 'tm-la-couple-sell', use: 'teach', tier: 'clean', setting: 'retirement', topic: 'a couple selling funds to live on', name: 'Colm and Fay, selling',
    text: "Colm and Fay, both 65, have $500,000 in funds of shares. Their living costs are $1,700 a month, and they pay them by selling about $1,700 of the funds on the first of every month. They have no savings account. This year prices fell by 20%.",
    outcome: 'cashbuffer', route: { D1: ['timing'], T1: ['livingcosts'] },
    cues: { T1: 'they pay them by selling about $1,700 of the funds on the first of every month. They have no savings account' } },

  { id: 'tm-la-couple-cash', use: 'teach', tier: 'clean', setting: 'retirement', topic: 'a couple spending a savings account', name: 'Colm and Fay, spending cash',
    text: "Colm and Fay, both 65, have $500,000, of which $62,000 is in a savings account and the rest in funds of shares. Their living costs are $1,700 a month, and they pay them from the savings account. This year prices fell by 20%, and they have not sold any of the funds.",
    outcome: 'covered', route: { D1: ['timing'], T1: ['ready'] },
    cues: { T1: 'they pay them from the savings account. This year prices fell by 20%, and they have not sold any of the funds' } },

  { id: 'tm-la-care-fund', use: 'teach', tier: 'clean', setting: 'family', topic: 'an assisted-living deposit held in shares', name: 'Mira, deposit in shares',
    text: "Mira must pay a deposit of $18,000 to an assisted-living home for her mother on May 1, six months from now. The money for it is in a fund of shares. Prices have fallen by 20% since the summer.",
    outcome: 'ladder', route: { D1: ['timing'], T1: ['datedbill'] },
    cues: { T1: ['must pay a deposit of $18,000 to an assisted-living home for her mother on May 1', 'The money for it is in a fund of shares'] } },

  { id: 'tm-la-care-bond', use: 'teach', tier: 'clean', setting: 'family', topic: 'an assisted-living deposit held in a bond', name: 'Mira, deposit in a bond',
    text: "Mira must pay a deposit of $18,000 to an assisted-living home for her mother on May 1, six months from now. The money for it is in a US Treasury bond that repays $18,000 on April 30. Prices have fallen by 20% since the summer, and the bond's price has moved a little.",
    outcome: 'covered', route: { D1: ['timing'], T1: ['ready'] },
    cues: { T1: 'The money for it is in a US Treasury bond that repays $18,000 on April 30' } },

  { id: 'tm-la-split-far', use: 'teach', tier: 'clean', setting: 'work', topic: 'a mix far outside its limit', name: 'Oskar, a mix far from the plan',
    text: "Oskar, 52, has $400,000. His plan is 60% in shares and 40% in bonds, and he has said that he will not worry unless shares move more than 5 points either side of 60%. Shares are now $296,000 of the $400,000, 74%. He will not need to take any money out for a long time.",
    outcome: 'rebalance', route: { D1: ['timing'], T1: ['drifted'] },
    cues: { T1: 'Shares are now $296,000 of the $400,000, 74%' } },

  { id: 'tm-la-split-near', use: 'teach', tier: 'clean', setting: 'work', topic: 'a mix inside its limit', name: 'Oskar, a mix near the plan',
    text: "Oskar, 52, has $400,000. His plan is 60% in shares and 40% in bonds, and he has said that he will not worry unless shares move more than 5 points either side of 60%. Shares are now $252,000 of the $400,000, 63%. He will not need to take any money out for a long time.",
    outcome: 'covered', route: { D1: ['timing'], T1: ['ready'] },
    cues: { T1: 'Shares are now $252,000 of the $400,000, 63%' } },

  { id: 'tm-exc-fixedsum', use: 'teach', tier: 'misleading', setting: 'retirement', topic: 'a fixed sum from a pot that has shrunk', name: 'Dolores’s fixed sum',
    text: "Dolores retired six years ago with $900,000 in funds of shares. She set herself $36,000 a year to live on, which was 4% of the money then, and she has taken exactly that every year since, by selling units of the funds each month. She keeps no cash set aside. Prices have fallen, and the funds are now worth $540,000.",
    outcome: 'burnrate', route: { D1: ['erosion'], E1: ['fixedsum'] }, also: ['timing'],
    cues: { D1: 'she has taken exactly that every year since',
            E1: ['She set herself $36,000 a year', 'the funds are now worth $540,000'] },
    segments: [
      { text: 'Dolores retired six years ago with $900,000 in funds of shares', note: 'That is where the money sits and how much there was. It does not yet show what the story is about.' },
      { text: 'She set herself $36,000 a year to live on, which was 4% of the money then, and she has taken exactly that every year since, by selling units of the funds each month' },
      { text: 'She keeps no cash set aside', note: 'True, and it is why this looks like {o:cashbuffer}. It is not the part that decides it.' },
      { text: 'Prices have fallen, and the funds are now worth $540,000', note: 'That is the fall, only half of what settles it. The words asked for are about the sum.' }
    ] },

  { id: 'tm-exc-livingmix', use: 'teach', tier: 'misleading', setting: 'retirement', topic: 'a drifted mix and monthly sales to live on', name: 'Imre’s monthly sales',
    text: "Imre is 68. His plan is 60% in shares and 40% in bonds, and shares are now 71% of his $500,000, which is $355,000. He needs $2,000 a month to live on, and he pays it by selling units of the shares every month, with no cash set aside.",
    outcome: 'cashbuffer', route: { D1: ['timing'], T1: ['livingcosts'] }, also: ['drifted'],
    cues: { D1: 'He needs $2,000 a month to live on',
            T1: 'he pays it by selling units of the shares every month, with no cash set aside' },
    segments: [
      { text: 'His plan is 60% in shares and 40% in bonds, and shares are now 71% of his $500,000, which is $355,000', note: 'That is {t:mix}, and it has moved. It is real, but it is not what comes first.' },
      { text: 'He needs $2,000 a month to live on, and he pays it by selling units of the shares every month, with no cash set aside' }
    ] },

  { id: 'tm-exc-bonus', use: 'teach', tier: 'misleading', setting: 'work', topic: 'a drifted mix, a planned sell-off and a bonus', name: 'Frank’s bonus',
    text: "Frank is 45. His plan is 60% in shares and 40% in bonds, and his $400,000 has drifted to 70% in shares, $280,000. His adviser says to sell $40,000 of the shares now and buy bonds with the money. The shares are worth $90,000 more than Frank paid for them, so the sale would bring a tax bill of about $1,900 on the gain. Frank has just been paid a $60,000 bonus, and has not yet decided what to do with it. No bill and no living costs are in the story.",
    outcome: 'defer', route: { D1: ['erosion'], E1: ['needlesssale'] }, also: ['timing'],
    cues: { D1: 'the sale would bring a tax bill of about $1,900 on the gain',
            E1: ['the sale would bring a tax bill of about $1,900 on the gain', 'Frank has just been paid a $60,000 bonus'] },
    segments: [
      { text: 'His plan is 60% in shares and 40% in bonds, and his $400,000 has drifted to 70% in shares, $280,000', note: 'That is {t:mix}, and it has moved. It is real, but it does not decide the story.' },
      { text: 'His adviser says to sell $40,000 of the shares now and buy bonds with the money. The shares are worth $90,000 more than Frank paid for them, so the sale would bring a tax bill of about $1,900 on the gain', note: 'That is the planned sale and its tax. It matters, but it is only half of what settles it.' },
      { text: 'Frank has just been paid a $60,000 bonus, and has not yet decided what to do with it' }
    ] },

  { id: 'tm-w-hilda', use: 'teach', tier: 'misleading', setting: 'retirement', topic: 'a retired woman who has sold none', name: 'Hilda’s three years',
    text: "Hilda is 71 and lives on $2,500 a month from her $700,000. Prices fell by 28% last year, and the papers say they may fall again. Hilda has not sold any of her funds this year. Her next three years of living costs, $90,000, are held outside the funds: $30,000 in a savings account, and two US Treasury bonds that repay $30,000 each, on December 31 of each of the next two years. The funds hold the rest.",
    outcome: 'covered', route: { D1: ['timing'], T1: ['ready'] },
    cues: { D1: 'Hilda is 71 and lives on $2,500 a month from her $700,000',
            T1: 'Her next three years of living costs, $90,000, are held outside the funds: $30,000 in a savings account, and two US Treasury bonds that repay $30,000 each, on December 31 of each of the next two years' } }
]);
