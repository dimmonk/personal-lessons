// Wealth Preservation, Unit Two: fresh cases kept back for later days (first file: the charge for picking investments, the charge worth
// paying, and income taxed every year in the wrong account; four cases for each name, one for each scheduled return, E9).
// A due name returns as a case the learner has not seen, beside a case of the name they most often take it for.

FC.cases('wealth', 'u2', [

  /* ---------- A yearly charge for picking investments ---------- */
  { id: 'e-ret-fee-1', use: 'return', tier: 'clean', setting: 'work', topic: 'a workplace 401(k) plan with a fund range and an adviser',
    text: "Callum, 44, has $150,000 in a managed fund through his employer's 401(k) plan. The fund's managers take 1.5% a year. The plan's adviser takes another 0.5% a year for 'recommending the fund range', and has done nothing else for him.",
    outcome: 'feecore', route: { D1: ['erosion'], E1: ['picking'] },
    cues: { D1: "The fund's managers take 1.5% a year", E1: "The plan's adviser takes another 0.5% a year for 'recommending the fund range', and has done nothing else for him" },
    reason: { D1: 'The case is about something that comes out of {t:pot} every year: {cue:D1}. It has no claim, no bill and no handover.',
              E1: 'Two charges, 2% together, are for choosing, and the case says the adviser has done nothing else: {cue:E1}. 2% of $150,000 is $3,000 a year, against $150 for {t:fund} that follows a published list.' },
    not: { outcome: 'nocut', why: 'No named work that would not otherwise get done is shown, and both charges are shares of the money.' } },

  { id: 'e-ret-fee-2', use: 'return', tier: 'varied', setting: 'business', topic: 'a restaurateur’s private banker and a house view',
    text: "Gianni, 51, owns a restaurant and has $320,000 with a private banker, who picks his shares for 1.4% a year, $4,480. The banker's yearly letter says the charge is for 'our house view on where to invest' and lists nothing else.",
    outcome: 'feecore', route: { D1: ['erosion'], E1: ['picking'] },
    cues: { D1: 'who picks his shares for 1.4% a year, $4,480', E1: "The banker's yearly letter says the charge is for 'our house view on where to invest' and lists nothing else" },
    reason: { D1: 'The case is about a charge that comes out of the money every year: {cue:D1}. Nothing in it is a fall in prices, {t:claim} or a handover.',
              E1: 'The banker names one job for the charge and no other: {cue:E1}. It is a percentage of {t:pot}, so it grows when {t:pot} does, and {t:fund} that follows a list charges about $320 a year for the same money.' },
    not: { outcome: 'nocut', why: 'The letter lists no work that would not otherwise get done. A flat price for named work would look different.' } },

  { id: 'e-ret-fee-3', use: 'return', tier: 'clean', setting: 'health', topic: 'a fund of funds with three layers of charges',
    text: "Naledi, 58, a nurse, has $95,000 in a 'fund of funds'. The funds inside it take 0.9% a year, the fund of funds takes another 0.5%, and the account that holds it charges 0.4%. None of the three does anything but choose or hold investments.",
    outcome: 'feecore', route: { D1: ['erosion'], E1: ['picking'] },
    cues: { D1: 'The funds inside it take 0.9% a year, the fund of funds takes another 0.5%, and the account that holds it charges 0.4%', E1: 'None of the three does anything but choose or hold investments' },
    reason: { D1: 'Three layers of charges come out of {t:pot} every year: {cue:D1}. The case has no fall in prices, no claim and no handover.',
              E1: 'The case says what the charges are for: {cue:E1}. Together they are 1.8%, $1,710 a year, and nothing is paid for that would not otherwise get done.' },
    not: { outcome: 'nocut', why: 'No work such as a tax return or a plan is shown, and every layer is a percentage of the money.' } },

  { id: 'e-ret-fee-4', use: 'return', tier: 'misleading', setting: 'property', topic: 'a star manager who beat the list for two years',
    text: "Arvid, 66, sold his house and put $500,000 in a fund run by a 'star manager' who has beaten the list the fund follows for the last two years. The fund charges 1.9% a year, $9,500, and the brochure lists no other work the charge pays for. Arvid says, 'She has earned it.'",
    outcome: 'feecore', route: { D1: ['erosion'], E1: ['picking'] },
    cues: { D1: 'The fund charges 1.9% a year, $9,500', E1: 'beaten the list the fund follows for the last two years. The fund charges 1.9% a year, $9,500, and the brochure lists no other work the charge pays for' },
    reason: { D1: 'The case is about a charge that comes out of {t:pot} every year: {cue:D1}. It has no fall in prices, no claim and no handover.',
              E1: 'The charge pays for choosing, and the case says it pays for nothing else: {cue:E1}. Two good years do not change what a charge of $9,500 every year pays for, and the charge is certain where the beating is not.' },
    not: { outcome: 'nocut', why: 'A good record can look like value for money. But nothing is done that would not otherwise get done, and the charge grows with {t:pot}.' } },

  /* ---------- Nothing to cut back ---------- */
  { id: 'e-ret-nocut-1', use: 'return', tier: 'clean', setting: 'property', topic: 'a flat fee for a landlord’s tax return and records',
    text: "Lorna, 63, rents out three apartments and pays a specialist $3,600 a year, a flat price agreed for five years. For it the specialist prepares the rental part of her tax return, keeps the records for each apartment and answers her letters from the IRS, which Lorna says she would not do herself. Her savings are in index funds.",
    outcome: 'nocut', route: { D1: ['erosion'], E1: ['nomore'] },
    cues: { D1: 'pays a specialist $3,600 a year, a flat price agreed for five years', E1: 'a flat price agreed for five years. For it the specialist prepares the rental part of her tax return, keeps the records for each apartment and answers her letters from the IRS, which Lorna says she would not do herself' },
    reason: { D1: 'The case is about something that comes out of the money every year: {cue:D1}. Nothing in it is a fall in prices, {t:claim} or a handover.',
              E1: 'The charge is a flat price for named work that would not otherwise get done: {cue:E1}.' },
    not: { outcome: 'feecore', why: 'The $3,600 does not pay for choosing investments. It pays for a tax return and records, at a price that stays the same.' } },

  { id: 'e-ret-nocut-2', use: 'return', tier: 'clean', setting: 'home', topic: 'a bond fund in the IRA of a young father',
    text: "Matteo, 38, keeps a bond fund in his IRA, where its $1,500 of interest a year is not taxed. In his brokerage account he holds a fund of shares in growing firms that pays out $300 a year, and he pays $45 tax on it. Both funds charge very little.",
    outcome: 'nocut', route: { D1: ['erosion'], E1: ['nomore'] },
    cues: { D1: 'he pays $45 tax on it', E1: 'keeps a bond fund in his IRA, where its $1,500 of interest a year is not taxed. In his brokerage account he holds a fund of shares in growing firms that pays out $300 a year' },
    reason: { D1: 'The case is about tax that comes out of the money every year: {cue:D1}. It is a small sum, and nothing else in the case could lose the money.',
              E1: 'The investment that pays out the most is in the IRA, and the one that pays out little is in the taxed account: {cue:E1}. $45 a year is about as low as it can be.' },
    not: { outcome: 'location', why: 'There is tax every year, but on the fund that pays out little. The bond fund is already in the IRA.' } },

  { id: 'e-ret-nocut-3', use: 'return', tier: 'varied', setting: 'family', topic: 'a percentage taken every February after good returns',
    text: "Bronwen, 70, takes 4% of her pot each February. A year ago the pot was $500,000 and she took $20,000. This year it is $560,000, so she takes $22,400 and gives her grandchildren more at Christmas.",
    outcome: 'nocut', route: { D1: ['erosion'], E1: ['nomore'] },
    cues: { D1: 'takes 4% of her pot each February', E1: 'takes 4% of her pot each February. A year ago the pot was $500,000 and she took $20,000. This year it is $560,000, so she takes $22,400' },
    reason: { D1: 'The case is about a sum taken out of {t:pot} every year to spend: {cue:D1}. Nothing in it is a bill, {t:claim} or a handover.',
              E1: 'The sum is worked out again each year as the same share of what {t:pot} is worth: {cue:E1}. It rose because {t:pot} rose, and it would have fallen with it.' },
    not: { outcome: 'burnrate', why: 'The sum changed from $20,000 to $22,400. It is a percentage of {t:pot}, not a fixed number of dollars.' } },

  { id: 'e-ret-nocut-4', use: 'return', tier: 'misleading', setting: 'health', topic: 'a flat price which is a loud percentage of a small pot',
    text: "Idris, 72, has $300,000 and pays a firm $5,400 a year, a flat price. His son says that is 1.8% of the pot, 'far too much'. For it the firm handles his wife's care payments, claims the benefits she is owed and keeps her legal forms in order, none of which Idris could do while he is looking after her.",
    outcome: 'nocut', route: { D1: ['erosion'], E1: ['nomore'] },
    cues: { D1: 'pays a firm $5,400 a year, a flat price', E1: "a flat price. His son says that is 1.8% of the pot, 'far too much'. For it the firm handles his wife's care payments, claims the benefits she is owed and keeps her legal forms in order, none of which Idris could do while he is looking after her" },
    reason: { D1: 'The case is about something that comes out of the money every year: {cue:D1}. Nothing in it is a fall in prices, {t:claim} or a handover.',
              E1: 'The charge is a flat price for named work that would not otherwise get done: {cue:E1}. How large it is as a percentage of {t:pot} does not decide it.' },
    not: { outcome: 'feecore', why: 'A big percentage can look like a charge for picking. But nothing here is for choosing investments, and the price does not move with {t:pot}.' } },

  /* ---------- Right account for each investment ---------- */
  { id: 'e-ret-loc-1', use: 'return', tier: 'clean', setting: 'home', topic: 'a high-interest fund in the ordinary account of a bus driver',
    text: "Petra, 41, a bus driver, has $28,000 in an ordinary brokerage account, in a fund that pays out 5% interest, $1,400 a year, and she pays 25% tax on it, $350, every year. Her IRA, $28,000, is in a fund of shares that pays out about $150 a year.",
    outcome: 'location', route: { D1: ['erosion'], E1: ['incometax'] },
    cues: { D1: 'she pays 25% tax on it, $350, every year', E1: 'a fund that pays out 5% interest, $1,400 a year, and she pays 25% tax on it, $350, every year. Her IRA, $28,000, is in a fund of shares that pays out about $150 a year' },
    reason: { D1: 'The case is about tax that comes out of the money every year: {cue:D1}. It has no fall in prices, no claim and no handover.',
              E1: 'The fund that pays out the most sits in the taxed account, and the one that pays out little sits in the IRA: {cue:E1}. Swapping them would take the tax down to about $20 a year.' },
    not: { outcome: 'nocut', why: 'The charges are small, but the tax is not: the larger payout is the one in the taxed account.' } },

  { id: 'e-ret-loc-2', use: 'return', tier: 'varied', setting: 'business', topic: 'a dividend fund and a landscaping firm',
    text: "Duncan, 49, runs a landscaping company. His ordinary brokerage account holds $60,000 in a fund of shares chosen for generous payouts, $3,600 a year, and he pays 15% tax on it, $540, every year. His IRA holds a fund of shares in startup firms that pays out nothing at all.",
    outcome: 'location', route: { D1: ['erosion'], E1: ['incometax'] },
    cues: { D1: 'he pays 15% tax on it, $540, every year', E1: 'a fund of shares chosen for generous payouts, $3,600 a year, and he pays 15% tax on it, $540, every year. His IRA holds a fund of shares in startup firms that pays out nothing at all' },
    reason: { D1: 'The case is about tax that comes out of the money every year: {cue:D1}. It has no claim, no fall in prices and no handover.',
              E1: 'The fund that pays out the most sits in the taxed account, and the one that pays out nothing sits in the IRA: {cue:E1}.' },
    not: { outcome: 'defer', why: 'No sale is planned. The tax comes on what the fund pays out, every year.' } },

  { id: 'e-ret-loc-3', use: 'return', tier: 'clean', setting: 'retirement', topic: 'a rent-and-bonds fund taxed annually in retirement',
    text: "Alma, 68, has $150,000 in an ordinary brokerage account, in a fund of office rents and company bonds that pays out $7,500 a year, and she pays 25% tax on it, $1,875, every year. Her IRA, $150,000, is in a fund of shares that pays out about $1,000 a year.",
    outcome: 'location', route: { D1: ['erosion'], E1: ['incometax'] },
    cues: { D1: 'she pays 25% tax on it, $1,875, every year', E1: 'a fund of office rents and company bonds that pays out $7,500 a year, and she pays 25% tax on it, $1,875, every year. Her IRA, $150,000, is in a fund of shares that pays out about $1,000 a year' },
    reason: { D1: 'The case is about tax that comes out of the money every year: {cue:D1}. It has no fall in prices, no claim and no handover.',
              E1: 'The investment that pays out the most sits in the taxed account and the one that pays out little in the IRA: {cue:E1}. The IRA has room for the larger payout.' },
    not: { outcome: 'nocut', why: 'There is nothing sound about where the funds sit: the larger payout is in the taxed account.' } },

  { id: 'e-ret-loc-4', use: 'return', tier: 'misleading', setting: 'property', topic: 'swapping two funds with a small sale',
    text: "Kenji, 53, holds a bond fund in his ordinary brokerage account that pays out $2,000 of interest a year, and he pays 25% tax on it, $500, every year. His IRA holds a fund of shares that pays out almost nothing. His adviser says that to swap the two funds, Kenji would sell the bond fund, which is worth $40,500 and cost $40,000, a gain of $500 that would bring $75 of tax.",
    outcome: 'location', route: { D1: ['erosion'], E1: ['incometax'] },
    cues: { D1: 'he pays 25% tax on it, $500, every year', E1: 'a bond fund in his ordinary brokerage account that pays out $2,000 of interest a year, and he pays 25% tax on it, $500, every year. His IRA holds a fund of shares that pays out almost nothing' },
    reason: { D1: 'The case is about tax that comes out of the money every year: {cue:D1}. It has no claim, no fall in prices and no handover.',
              E1: 'The fund that pays out the most sits in the taxed account, and the tax comes every year on what it pays: {cue:E1}. The sale is the way to stop that $500 a year, and its own tax is $75 once.' },
    not: { outcome: 'defer', why: 'A sale and a tax on {t:gain} are in the case, which can look like a sale nobody needs. But this sale has a job: it stops $500 of tax every year, at a cost of $75 once.' },
    wouldChange: 'It would be a different name if the sale had no job to do, so that not selling cost nothing.' }
]);
