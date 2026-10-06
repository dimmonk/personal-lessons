// Wealth Preservation, Unit Two: drill cases for the second stage, first part (the whole route alone: a charge, and income taxed every year).
// None of these appears in a card. A case here carries marked words and a reason for the first question as well as for this unit's own,
// because it is asked from the top.

FC.cases('wealth', 'u2', [

  /* ---------- A charge for picking, and a charge for work ---------- */
  { id: 'e-r-fee-1', use: 'drill', tier: 'clean', setting: 'retirement', topic: 'a fund and an adviser charging for an old selection',
    text: "Marlon, 69, has $210,000 in a fund his adviser chose for him. The fund takes 1.3% a year, and the adviser takes a further 0.9% a year, 'for the original selection'. Marlon has not seen the adviser for three years.",
    outcome: 'feecore', route: { D1: ['erosion'], E1: ['picking'] },
    cues: { D1: 'The fund takes 1.3% a year, and the adviser takes a further 0.9% a year',
            E1: "the adviser takes a further 0.9% a year, 'for the original selection'. Marlon has not seen the adviser for three years" },
    reason: { D1: 'Two charges come out of {t:pot} every year: {cue:D1}. The case has no one thing that is most of his money, no bill in a fall, and no death or will in it.',
              E1: 'The adviser is paid every year for a choice made long ago, and nothing else is done for the money: {cue:E1}. 2.2% of $210,000 is $4,620 a year, against $210 for {t:indexfund}.' },
    not: { outcome: 'nocut', why: 'No work that would otherwise get done is shown. The charges are shares of the money, and the adviser has not done anything for three years.' } },

  { id: 'e-r-nocut-1', use: 'drill', tier: 'clean', setting: 'family', topic: 'a planner’s flat price for a spring tax return and a talk before every big decision',
    text: "Nuala, 54, pays a planner $2,400 a year, flat, and the price has not changed since her pot was half its size. For it the planner prepares her return each spring, keeps her beneficiary forms current and talks her through every big spending decision. Nuala says she would not do any of it herself.",
    outcome: 'nocut', route: { D1: ['erosion'], E1: ['nomore'] },
    cues: { D1: 'pays a planner $2,400 a year, flat',
            E1: 'the price has not changed since her pot was half its size. For it the planner prepares her return each spring, keeps her beneficiary forms current and talks her through every big spending decision. Nuala says she would not do any of it herself' },
    reason: { D1: 'The case is about something taken out of {t:pot} every year: {cue:D1}. It has no fall in prices, no one thing that is most of her money, and no handover.',
              E1: 'The charge is a flat price that has not grown with {t:pot}, for named work that would not otherwise get done: {cue:E1}.' },
    not: { outcome: 'feecore', why: 'The charge does not pay for choosing investments. It pays for a return, forms and advice, at a price that does not move with {t:pot}.' } },

  /* ---------- Income taxed every year, and income already sheltered ---------- */
  { id: 'e-r-loc-1', use: 'drill', tier: 'clean', setting: 'work', topic: 'a monthly-income fund in the ordinary account',
    text: "Ewan, 45, has an IRA and an ordinary brokerage account, $60,000 in each. The brokerage account holds an income fund of bonds that pays out $3,300 a year, on which he pays 25% tax, $825, every year. The IRA holds a fund of shares that pays out almost nothing, and both funds charge very little.",
    outcome: 'location', route: { D1: ['erosion'], E1: ['incometax'] },
    cues: { D1: 'on which he pays 25% tax, $825, every year',
            E1: 'The brokerage account holds an income fund of bonds that pays out $3,300 a year, on which he pays 25% tax, $825, every year. The IRA holds a fund of shares that pays out almost nothing' },
    reason: { D1: 'The case is about tax that comes out of the money every year: {cue:D1}. The funds charge very little, and nothing in it is a bill, {t:claim} or a handover.',
              E1: 'The investment that pays out the most sits in the taxed account, and the one that pays out almost nothing sits in the IRA: {cue:E1}. Swapping them would take the $825 a year down to almost nothing.' },
    not: { outcome: 'nocut', why: 'The charges are low, which can make it look as if nothing needs cutting. But the tax is the problem, and it comes from the wrong fund being in the taxed account.' } },

  { id: 'e-r-nocut-2', use: 'drill', tier: 'clean', setting: 'retirement', topic: 'bonds in the IRA and growth shares outside it',
    text: "Haruto, 66, has $120,000 in an IRA and $80,000 in an ordinary brokerage account. His IRA holds a fund of company bonds paying $6,000 a year, untaxed. His brokerage account holds a fund of shares in firms that reinvest their profits, so it pays out only $300 a year, on which he pays $45 tax.",
    outcome: 'nocut', route: { D1: ['erosion'], E1: ['nomore'] },
    cues: { D1: 'on which he pays $45 tax',
            E1: 'His IRA holds a fund of company bonds paying $6,000 a year, untaxed. His brokerage account holds a fund of shares in firms that reinvest their profits, so it pays out only $300 a year' },
    reason: { D1: 'The case is about tax taken from the money every year: {cue:D1}. It is a small sum, and nothing else in the case could lose his money.',
              E1: 'The investment that pays out the most is in the IRA, which is {t:sheltered}, and the one that pays out little is in the taxed account: {cue:E1}. $45 a year is already about as low as it can be.' },
    not: { outcome: 'location', why: 'There is tax every year, but it is on the investment that pays little. For this name, the bond fund would be the one sitting in the brokerage account.' } }
]);
