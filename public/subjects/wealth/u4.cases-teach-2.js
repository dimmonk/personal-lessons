// Wealth Preservation, Unit Four: cases shown inside cards, part two. The look-alike pairs (the same person, the same story and
// the same fall, with one thing different underneath), the four exceptions, and the two whole cases.
// The two names taught by Unit Two that look like names of this unit (a sum that never changed; a tax bill on a needless sale) are
// cases of those names: they carry the route of their own branch, and `also` lists the answer of this unit's gate that loses to it.

FC.cases('wealth', 'u4', [

  /* ---------- Look-alike pair: living costs paid by selling, or paid from cash ---------- */
  { id: 'tm-la-couple-sell', use: 'teach', tier: 'clean', setting: 'retirement', topic: 'a couple selling funds to live on', name: 'Colm and Fay, selling',
    text: "Colm and Fay, both 65, have £500,000 in funds of shares. Their living costs are £1,700 a month, and they pay them by selling about £1,700 of the funds on the first of every month. They have no savings account. This year prices fell by 20%.",
    outcome: 'cashbuffer', route: { D1: ['timing'], T1: ['livingcosts'] },
    cues: { T1: 'they pay them by selling about £1,700 of the funds on the first of every month. They have no savings account' } },

  { id: 'tm-la-couple-cash', use: 'teach', tier: 'clean', setting: 'retirement', topic: 'a couple spending a savings account', name: 'Colm and Fay, spending cash',
    text: "Colm and Fay, both 65, have £500,000, of which £62,000 is in a savings account and the rest in funds of shares. Their living costs are £1,700 a month, and they pay them from the savings account. This year prices fell by 20%, and they have not sold any of the funds.",
    outcome: 'covered', route: { D1: ['timing'], T1: ['ready'] },
    cues: { T1: 'they pay them from the savings account. This year prices fell by 20%, and they have not sold any of the funds' } },

  /* ---------- Look-alike pair: a bill whose money is in shares, or in a bond that repays ---------- */
  { id: 'tm-la-care-fund', use: 'teach', tier: 'clean', setting: 'family', topic: 'a care home deposit held in shares', name: 'Mira, deposit in shares',
    text: "Mira must pay a deposit of £18,000 to a care home for her mother on 1 May, six months from now. The money for it is in a fund of shares. Prices have fallen by 20% since the summer.",
    outcome: 'ladder', route: { D1: ['timing'], T1: ['datedbill'] },
    cues: { T1: ['must pay a deposit of £18,000 to a care home for her mother on 1 May', 'The money for it is in a fund of shares'] } },

  { id: 'tm-la-care-bond', use: 'teach', tier: 'clean', setting: 'family', topic: 'a care home deposit held in a bond', name: 'Mira, deposit in a bond',
    text: "Mira must pay a deposit of £18,000 to a care home for her mother on 1 May, six months from now. The money for it is in a bond from a government that repays £18,000 on 30 April. Prices have fallen by 20% since the summer, and the bond's price has moved a little.",
    outcome: 'covered', route: { D1: ['timing'], T1: ['ready'] },
    cues: { T1: 'The money for it is in a bond from a government that repays £18,000 on 30 April' } },

  /* ---------- Look-alike pair: a mix far outside its limit, or inside it ---------- */
  { id: 'tm-la-split-far', use: 'teach', tier: 'clean', setting: 'work', topic: 'a mix far outside its limit', name: 'Oskar, a mix far from the plan',
    text: "Oskar, 52, has £400,000. His plan is 60% in shares and 40% in bonds, and he has said that he will not worry unless shares move more than 5 points either side of 60%. Shares are now £296,000 of the £400,000, 74%. He will not need to take any money out for a long time.",
    outcome: 'rebalance', route: { D1: ['timing'], T1: ['drifted'] },
    cues: { T1: 'Shares are now £296,000 of the £400,000, 74%' } },

  { id: 'tm-la-split-near', use: 'teach', tier: 'clean', setting: 'work', topic: 'a mix inside its limit', name: 'Oskar, a mix near the plan',
    text: "Oskar, 52, has £400,000. His plan is 60% in shares and 40% in bonds, and he has said that he will not worry unless shares move more than 5 points either side of 60%. Shares are now £252,000 of the £400,000, 63%. He will not need to take any money out for a long time.",
    outcome: 'covered', route: { D1: ['timing'], T1: ['ready'] },
    cues: { T1: 'Shares are now £252,000 of the £400,000, 63%' } },

  /* ---------- Look-alike pair: living costs every month, or one bill on one day ---------- */
  { id: 'tm-la-rent-month', use: 'teach', tier: 'clean', setting: 'home', topic: 'rent paid by selling a fund each month', name: 'Femi, rent each month',
    text: "Femi, 59, has lost his job and is living on his £250,000 in one fund of shares. His rent is £1,000 a month, and he pays it by selling £1,000 of the fund each month. He has no cash put by. Prices have fallen by 25%.",
    outcome: 'cashbuffer', route: { D1: ['timing'], T1: ['livingcosts'] },
    cues: { T1: 'he pays it by selling £1,000 of the fund each month. He has no cash put by' } },

  { id: 'tm-la-rent-year', use: 'teach', tier: 'clean', setting: 'home', topic: 'a year of rent paid in advance', name: 'Femi, rent for a year',
    text: "Femi, 59, still works, and his pay covers his bills. His landlord has asked him to pay a year's rent, £12,000, in one payment on 1 March. The money for it is in one fund of shares. Prices have fallen by 25%.",
    outcome: 'ladder', route: { D1: ['timing'], T1: ['datedbill'] },
    cues: { T1: ["pay a year's rent, £12,000, in one payment on 1 March", 'The money for it is in one fund of shares'] } },

  /* ---------- The four exceptions: the answer the case looks like, and the answer the key gives ---------- */
  { id: 'tm-exc-fixedsum', use: 'teach', tier: 'misleading', setting: 'retirement', topic: 'a fixed sum from a pot that has shrunk', name: 'Dolores’s fixed sum',
    text: "Dolores retired six years ago with £900,000 in funds of shares. She set herself £36,000 a year to live on, which was 4% of the money then, and she has taken exactly that every year since, by selling units of the funds each month. She keeps no cash set aside. Prices have fallen, and the funds are now worth £540,000.",
    outcome: 'burnrate', route: { D1: ['erosion'], E1: ['fixedsum'] }, also: ['timing'],
    cues: { D1: 'she has taken exactly that every year since',
            E1: ['She set herself £36,000 a year', 'the funds are now worth £540,000'] },
    segments: [
      { text: 'Dolores retired six years ago with £900,000 in funds of shares', note: 'That is where the money is held and how much there was. It does not yet show what the case is about.' },
      { text: 'She set herself £36,000 a year to live on, which was 4% of the money then, and she has taken exactly that every year since, by selling units of the funds each month' },
      { text: 'She keeps no cash set aside', note: 'That is true, and it is what makes the case look like {o:cashbuffer}. It is not the part that decides it.' },
      { text: 'Prices have fallen, and the funds are now worth £540,000', note: 'That is the fall, and it is the other half of what settles the case. The words asked for are about the sum.' }
    ] },

  { id: 'tm-exc-livingmix', use: 'teach', tier: 'misleading', setting: 'retirement', topic: 'a drifted mix and monthly sales to live on', name: 'Imre’s monthly sales',
    text: "Imre is 68. His plan is 60% in shares and 40% in bonds, and shares are now 71% of his £500,000, which is £355,000. He needs £2,000 a month to live on, and he pays it by selling units of the shares every month, with no cash set aside.",
    outcome: 'cashbuffer', route: { D1: ['timing'], T1: ['livingcosts'] }, also: ['drifted'],
    cues: { D1: 'He needs £2,000 a month to live on',
            T1: 'he pays it by selling units of the shares every month, with no cash set aside' },
    segments: [
      { text: 'His plan is 60% in shares and 40% in bonds, and shares are now 71% of his £500,000, which is £355,000', note: 'That is {t:mix}, and it has moved. It is real, but it is not the part the key puts first.' },
      { text: 'He needs £2,000 a month to live on, and he pays it by selling units of the shares every month, with no cash set aside' }
    ] },

  { id: 'tm-exc-billmix', use: 'teach', tier: 'misleading', setting: 'family', topic: 'a drifted mix and a university payment', name: 'Beata’s university payment',
    text: "Beata's plan is 50% in shares and 50% in bonds, and shares are now 64% of her £300,000, which is £192,000. She works, and her pay covers her bills. Her son's university course begins on 1 September, nine months from now. The first payment, £27,000, is due that day, and the money for it is in the shares.",
    outcome: 'ladder', route: { D1: ['timing'], T1: ['datedbill'] }, also: ['drifted'],
    cues: { D1: "Her son's university course begins on 1 September, nine months from now",
            T1: ['The first payment, £27,000, is due that day', 'the money for it is in the shares'] },
    segments: [
      { text: "Beata's plan is 50% in shares and 50% in bonds, and shares are now 64% of her £300,000, which is £192,000", note: 'That is {t:mix}, and it has moved. It is real, but it is not the part the key puts first.' },
      { text: 'She works, and her pay covers her bills', note: 'That tells you the bills are not paid by selling shares. It is why this is not a case of living costs.' },
      { text: "Her son's university course begins on 1 September, nine months from now. The first payment, £27,000, is due that day, and the money for it is in the shares" }
    ] },

  { id: 'tm-exc-bonus', use: 'teach', tier: 'misleading', setting: 'work', topic: 'a drifted mix, a planned sell-off and a bonus', name: 'Frank’s bonus',
    text: "Frank is 45. His plan is 60% in shares and 40% in bonds, and his £400,000 has drifted to 70% in shares, £280,000. His adviser says to sell £40,000 of the shares now and buy bonds with the money. The shares are worth £90,000 more than Frank paid for them, so the sale would bring a tax bill of about £2,600 on the gain. Frank has just been paid a £60,000 bonus, and has not yet decided what to do with it. No bill and no living costs are in the case.",
    outcome: 'defer', route: { D1: ['erosion'], E1: ['needlesssale'] }, also: ['timing'],
    cues: { D1: 'the sale would bring a tax bill of about £2,600 on the gain',
            E1: ['the sale would bring a tax bill of about £2,600 on the gain', 'Frank has just been paid a £60,000 bonus'] },
    segments: [
      { text: 'His plan is 60% in shares and 40% in bonds, and his £400,000 has drifted to 70% in shares, £280,000', note: 'That is {t:mix}, and it has moved. It is real, but it is not the part that decides the case.' },
      { text: 'His adviser says to sell £40,000 of the shares now and buy bonds with the money. The shares are worth £90,000 more than Frank paid for them, so the sale would bring a tax bill of about £2,600 on the gain', note: 'That is the planned sale and its tax. It matters, but it is only half of what settles the case.' },
      { text: 'Frank has just been paid a £60,000 bonus, and has not yet decided what to do with it' }
    ] },

  /* ---------- The two whole cases: a clean one, then one whose story points the wrong way ---------- */
  { id: 'tm-w-tax', use: 'teach', tier: 'clean', setting: 'business', topic: 'a tax bill with its money in shares', name: 'Imani’s tax bill',
    text: "Imani runs a small design studio. Her accountant has worked out her tax bill for the year: £38,000, due on 31 January, nine months from now. She has set the £38,000 aside, in one fund of shares, since the summer. Prices have been moving up and down by 15% from month to month.",
    outcome: 'ladder', route: { D1: ['timing'], T1: ['datedbill'] },
    cues: { D1: 'Her accountant has worked out her tax bill for the year: £38,000, due on 31 January, nine months from now',
            T1: ['£38,000, due on 31 January, nine months from now', 'She has set the £38,000 aside, in one fund of shares'] } },

  { id: 'tm-w-hilda', use: 'teach', tier: 'misleading', setting: 'retirement', topic: 'a retired woman who has sold none', name: 'Hilda’s three years',
    text: "Hilda is 71 and lives on £2,500 a month from her £700,000. Prices fell by 28% last year, and the papers say they may fall again. Hilda has not sold any of her funds this year. Her next three years of living costs, £90,000, are held outside the funds: £30,000 in a savings account, and two bonds from a government that repay £30,000 each, on 1 January in each of the next two years. The funds hold the rest.",
    outcome: 'covered', route: { D1: ['timing'], T1: ['ready'] },
    cues: { D1: 'Hilda is 71 and lives on £2,500 a month from her £700,000',
            T1: 'Her next three years of living costs, £90,000, are held outside the funds: £30,000 in a savings account, and two bonds from a government that repay £30,000 each, on 1 January in each of the next two years' } }
]);
