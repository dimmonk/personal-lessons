// Wealth Preservation, Unit Two: drill cases for the first two stages. None of these appears in a card.
// Stage one: the key's answer is shown and the learner gives the name. Stage two: the key's question alone, on a new case.
// reason[STEP] is the reason tied to the marked words; it is shown after the answer, decisive sentence first.
// not names the most tempting wrong name for the case and says why it fails for this case.

FC.cases('wealth', 'u2', [

  /* ---------- Stage one: the key's answer is shown, the learner gives the name ---------- */
  { id: 'e-d-fee', use: 'drill', tier: 'clean', setting: 'home', topic: 'three layers of charges in a bank’s fund',
    text: "Hamid, 38, has $90,000 in a 'balanced' fund sold to him by a bank. The fund takes 1.0% a year, the account that holds it charges 0.4%, and the bank's adviser takes 0.6% for having recommended it. Nobody has done anything else for him since.",
    outcome: 'feecore', route: { D1: ['erosion'], E1: ['picking'] },
    cues: { E1: "The fund takes 1.0% a year, the account that holds it charges 0.4%, and the bank's adviser takes 0.6% for having recommended it. Nobody has done anything else for him since" },
    reason: { E1: 'Three charges, 2% together, come out of {t:pot} every year, and the only job any of them is for is choosing the fund: {cue:E1}. 2% of $90,000 is $1,800 a year, against about $90 for {t:fund} that follows a published list.' },
    not: { outcome: 'nocut', why: 'No work that would otherwise be left undone is shown, and every charge is a percentage of the money, so all three grow when the money does.' } },

  { id: 'e-d-flat', use: 'drill', tier: 'clean', setting: 'health', topic: 'a widow’s planner who steps in when she is in the hospital',
    text: "Ruth, 71, a widow, pays a planner $2,000 a year, a flat price that has stayed the same for six years. For it the planner prepares her tax return, pays her bills on the days when she is in the hospital, and reviews her will and her forms each fall. Her $260,000 is in index funds.",
    outcome: 'nocut', route: { D1: ['erosion'], E1: ['nomore'] },
    cues: { E1: 'a flat price that has stayed the same for six years. For it the planner prepares her tax return, pays her bills on the days when she is in the hospital, and reviews her will and her forms each fall' },
    reason: { E1: 'The charge is a flat price that has not moved in six years, and it pays for named work Ruth would otherwise leave undone: {cue:E1}. Nothing in it is taken as a percentage of her money.' },
    not: { outcome: 'feecore', why: 'The $2,000 does not pay for choosing investments, which are already in index funds. It pays for work that would not otherwise get done, at a price that does not grow with {t:pot}.' } },

  { id: 'e-d-inc', use: 'drill', tier: 'clean', setting: 'work', topic: 'a high-payout fund of energy shares in the ordinary account',
    text: "Osei, 40, has $35,000 in an IRA and $35,000 in an ordinary brokerage account. The brokerage account holds a fund of shares in energy companies chosen for their high payouts, $2,100 a year, and Osei pays 15% tax on it, $315, every year. His IRA holds a fund of shares in newer companies that pay out almost nothing.",
    outcome: 'location', route: { D1: ['erosion'], E1: ['incometax'] },
    cues: { E1: 'a fund of shares in energy companies chosen for their high payouts, $2,100 a year, and Osei pays 15% tax on it, $315, every year' },
    reason: { E1: 'The fund that pays out the most sits in the account that is taxed in full, and the tax comes every year: {cue:E1}. The IRA holds the fund that pays out almost nothing, so it has room for the one that pays more.' },
    not: { outcome: 'defer', why: 'Nothing is planned to be sold. The tax is charged on what the fund pays out every year, whether or not Osei sells anything.' } },

  { id: 'e-d-sale', use: 'drill', tier: 'clean', setting: 'business', topic: 'a bank salesman’s push to move out of a fund',
    text: "Dalia, 59, owns a fund she bought for $60,000, and it is now worth $75,000. A salesman at her bank says she should 'move into something newer' and wants her to sell it all. She needs no cash. Selling would bring tax of 15% on the $15,000 gain, $2,250.",
    outcome: 'defer', route: { D1: ['erosion'], E1: ['needlesssale'] },
    cues: { E1: "wants her to sell it all. She needs no cash. Selling would bring tax of 15% on the $15,000 gain, $2,250" },
    reason: { E1: 'A sale is proposed that would bring tax on {t:gain}, and nothing needs it: {cue:E1}. A salesman saying something is newer is a reason for him to sell, not a need of hers.' },
    not: { outcome: 'harvest', why: 'No sale has been made this year and no other investment is worth less than it cost, so there is no loss to set against the gain.' } },

  { id: 'e-d-offset', use: 'drill', tier: 'clean', setting: 'retirement', topic: 'a July sale at a gain and a fund which fell',
    text: "Tariq, 52, sold shares in July for $7,000 more than he paid, so he will owe tax of $1,050 on that gain. In the same ordinary account a fund he has not sold cost $10,000 and is now worth $6,500.",
    outcome: 'harvest', route: { D1: ['erosion'], E1: ['gainloss'] },
    cues: { E1: 'so he will owe tax of $1,050 on that gain. In the same ordinary account a fund he has not sold cost $10,000 and is now worth $6,500' },
    reason: { E1: 'The case shows {t:gain} made this year that will be taxed, and another investment he has not sold is worth less than it cost: {cue:E1}. Selling the fallen fund would set its $3,500 loss against the $7,000 gain.' },
    not: { outcome: 'defer', why: 'Nobody is planning a sale that is not needed. The sale has happened, and there is a loss waiting in the same account that can be set against it.' } },

  { id: 'e-d-shelter', use: 'drill', tier: 'clean', setting: 'property', topic: 'a rent-income fund held in the IRA',
    text: "Joy, 47, has $60,000 in an IRA and $40,000 in an ordinary brokerage account. The IRA holds a fund that owns shops and passes the rent on, $3,000 a year, on which she pays no tax. The brokerage account holds a fund of shares in growing firms that pays out about $400 a year, and she pays $60 tax on that.",
    outcome: 'nocut', route: { D1: ['erosion'], E1: ['nomore'] },
    cues: { E1: 'The IRA holds a fund that owns shops and passes the rent on, $3,000 a year, on which she pays no tax. The brokerage account holds a fund of shares in growing firms that pays out about $400 a year' },
    reason: { E1: 'The fund that pays out the most is in the IRA, which is {t:sheltered} where it is not taxed, and the fund that pays out little is in the ordinary account: {cue:E1}. The tax Joy pays, $60 a year, is already about as low as it can be.' },
    not: { outcome: 'location', why: 'The investments are in the right accounts already. For this name, the larger payout would be held in the taxed account instead.' } },

  { id: 'e-d-sum', use: 'drill', tier: 'clean', setting: 'health', topic: 'a sum set at an early retirement after an illness',
    text: "Anil, 64, retired early with $900,000 after an illness and set his spending at $45,000 a year, which was 5% of it. He has never reset the figure. His pot is now $720,000 after he paid for a year of treatment out of it, so the $45,000 is 6.25% of what is left.",
    outcome: 'burnrate', route: { D1: ['erosion'], E1: ['fixedsum'] },
    cues: { E1: 'set his spending at $45,000 a year, which was 5% of it. He has never reset the figure. His pot is now $720,000 after he paid for a year of treatment out of it, so the $45,000 is 6.25% of what is left' },
    reason: { E1: 'The sum was fixed when {t:pot} was worth more and has never been reset: {cue:E1}. The same $45,000 is now a bigger share of a smaller pot.' },
    not: { outcome: 'nocut', why: 'Spending is sound when it is reset each year as a percentage of what {t:pot} is worth. Anil set a number of dollars and left it.' } },

  { id: 'e-d-pct', use: 'drill', tier: 'clean', setting: 'retirement', topic: 'a percentage of the pot worked out every January',
    text: "Marisol, 63, takes 3.5% of whatever her pot is worth each January. Last January it was $600,000 and she took $21,000. This January it is $540,000, so she takes $18,900 and puts off buying a new car.",
    outcome: 'nocut', route: { D1: ['erosion'], E1: ['nomore'] },
    cues: { E1: 'takes 3.5% of whatever her pot is worth each January. Last January it was $600,000 and she took $21,000. This January it is $540,000, so she takes $18,900' },
    reason: { E1: 'The sum is worked out again each year from what {t:pot} is worth now: {cue:E1}. When {t:pot} shrinks, the amount she takes shrinks with it, so it is never a bigger share of a smaller pot.' },
    not: { outcome: 'burnrate', why: 'A fixed sum set earlier would be $21,000 again, now 3.9% of $540,000. Marisol reset the sum to the share instead.' } },

  /* ---------- Stage two: the key's question alone, on a new case ---------- */
  { id: 'e-p-fee', use: 'drill', tier: 'clean', setting: 'family', topic: 'a private bank’s selection charge',
    text: "Ines, 50, has $120,000 with a private bank whose managers pick her shares for 1.8% of the pot every year. When she asked what else the 1.8% covers, the bank said, 'Our selection, which is what clients pay for.'",
    outcome: 'feecore', route: { D1: ['erosion'], E1: ['picking'] },
    cues: { E1: "1.8% of the pot every year. When she asked what else the 1.8% covers, the bank said, 'Our selection, which is what clients pay for.'" },
    reason: { E1: "The bank's own answer names one job and no other: {cue:E1}. $2,160 a year, 1.8% of $120,000, pays for choosing, against $120 for {t:fund} that follows a published list." },
    not: { outcome: 'nocut', why: 'No other work is shown, and the charge is a percentage of the money, not a set price for named work.' } },

  { id: 'e-p-flat', use: 'drill', tier: 'clean', setting: 'business', topic: 'an accountant’s flat price for a plumber',
    text: "Gus, 49, runs a plumbing firm and pays an accountant $5,500 a year, a flat price agreed in writing, to keep the firm's books, pay its staff and file his own tax return. Without the accountant none of that would get done on time. The price has not changed in four years, though Gus's own savings have doubled.",
    outcome: 'nocut', route: { D1: ['erosion'], E1: ['nomore'] },
    cues: { E1: "a flat price agreed in writing, to keep the firm's books, pay its staff and file his own tax return. Without the accountant none of that would get done on time. The price has not changed in four years, though Gus's own savings have doubled" },
    reason: { E1: 'The charge is a flat price for named work, and the case says that work would not otherwise get done: {cue:E1}. Doubling his savings has not moved the price.' },
    not: { outcome: 'feecore', why: 'The $5,500 does not pay for choosing investments. It pays for books, wages and a tax return, at a price that does not grow with his savings.' } },

  { id: 'e-p-inc', use: 'drill', tier: 'varied', setting: 'retirement', topic: 'a bond fund’s interest in the ordinary account of a retired woman',
    text: "Gloria, 68, has $90,000 in an IRA and $90,000 in an ordinary brokerage account. The brokerage account holds a bond fund that pays out $4,500 of interest a year, and she pays 25% tax on it, $1,125, every year. Her IRA holds a fund of shares that pays out about $900 a year.",
    outcome: 'location', route: { D1: ['erosion'], E1: ['incometax'] },
    cues: { E1: 'The brokerage account holds a bond fund that pays out $4,500 of interest a year, and she pays 25% tax on it, $1,125, every year' },
    reason: { E1: 'The investment that pays out five times as much sits in the account taxed in full: {cue:E1}. The IRA holds the one that pays out $900 a year, so the two could swap places.' },
    not: { outcome: 'nocut', why: 'The investments are in the wrong accounts, not the right ones: the bigger payout is the one being taxed every year.' } },

  { id: 'e-p-shelter', use: 'drill', tier: 'varied', setting: 'home', topic: 'a loans fund in the IRA and a growth fund outside it',
    text: "Chidi, 36, keeps a fund of loans to companies in his IRA, where its $1,800 of interest a year is not taxed. In his brokerage account he holds a fund of shares in growing firms that pays out $200 a year, on which he pays $30 tax.",
    outcome: 'nocut', route: { D1: ['erosion'], E1: ['nomore'] },
    cues: { E1: 'a fund of loans to companies in his IRA, where its $1,800 of interest a year is not taxed. In his brokerage account he holds a fund of shares in growing firms that pays out $200 a year' },
    reason: { E1: 'The investment that pays out the most is in the sheltered account and the one that pays out little is in the taxed one: {cue:E1}. $30 a year of tax is already about as low as it can be.' },
    not: { outcome: 'location', why: 'Nothing is in the wrong account. Funds of company loans paying $1,800 a year in the brokerage account would be the case for this name.' } },

  { id: 'e-p-gain', use: 'drill', tier: 'varied', setting: 'work', topic: 'a brother-in-law’s hunch about a fund near its top',
    text: "Leo, 61, holds a fund he bought for $50,000 that is now worth $62,000. His brother-in-law says it 'must be near the top', and Leo is about to sell it all. He has no bill to pay and no need for the cash. Selling would bring tax of 15% on the $12,000 gain, $1,800.",
    outcome: 'defer', route: { D1: ['erosion'], E1: ['needlesssale'] },
    cues: { E1: 'about to sell it all. He has no bill to pay and no need for the cash. Selling would bring tax of 15% on the $12,000 gain, $1,800' },
    reason: { E1: 'A sale is about to be made that would bring tax on {t:gain}, and nothing needs it: {cue:E1}. A hunch that a price is near its top is not a bill or a need.' },
    not: { outcome: 'harvest', why: 'No other investment in the case is below what it cost, and nothing has been sold yet this year, so there is no loss to set against the gain.' } },

  { id: 'e-p-loss', use: 'drill', tier: 'varied', setting: 'family', topic: 'a May sale and shares still held below cost',
    text: "Bea, 44, sold a fund in May for $4,000 more than she paid, so she will owe tax of $600 on that gain. In the same brokerage account she still holds shares she has not sold, which cost $6,000 and are now worth $4,500.",
    outcome: 'harvest', route: { D1: ['erosion'], E1: ['gainloss'] },
    cues: { E1: 'so she will owe tax of $600 on that gain. In the same brokerage account she still holds shares she has not sold, which cost $6,000 and are now worth $4,500' },
    reason: { E1: 'The case shows {t:gain} made this year that will be taxed, and shares she has not sold are worth less than she paid: {cue:E1}. Selling them would set a $1,500 loss against the $4,000 gain.' },
    not: { outcome: 'defer', why: 'The sale was made in May, so there is no unneeded sale to hold off. What the case shows is a loss waiting beside {t:gain}.' } }
]);
