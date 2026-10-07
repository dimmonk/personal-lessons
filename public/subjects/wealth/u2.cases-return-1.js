// Wealth Preservation, Unit Two: fresh cases kept back for later days (first file: the charge for picking investments, the charge worth
// paying, and income taxed every year in the wrong account; two cases for each name, as in an action subject).
// A due name returns as a case the learner has not seen, beside a case of the name they most often take it for.

FC.cases('wealth', 'u2', [

  /* ---------- A yearly charge for picking investments ---------- */
  { id: 'e-ret-fee-1', use: 'return', tier: 'clean', setting: 'work', topic: 'a workplace 401(k) plan with a fund range and an adviser',
    text: "Callum, 44, has $150,000 in a managed fund through his employer's 401(k) plan. The fund's managers take 1.5% a year. The plan's adviser takes another 0.5% a year for 'recommending the fund range', and has done nothing else for him.",
    outcome: 'feecore', route: { D1: ['erosion'], E1: ['picking'] },
    cues: { D1: "The fund's managers take 1.5% a year", E1: "The plan's adviser takes another 0.5% a year for 'recommending the fund range', and has done nothing else for him" },
    reason: { D1: 'Something comes out of {t:pot} every year: {cue:D1}. There is no claim, no bill and no handover.',
              E1: 'Two fees, 2% together, are for picking, and the adviser has done nothing else: {cue:E1}. 2% of $150,000 is $3,000 a year, against $150 for {t:indexfund}.' },
    not: { outcome: 'nocut', why: 'No named work that would not otherwise get done is shown, and both fees are shares of the money.' } },

  { id: 'e-ret-fee-4', use: 'return', tier: 'misleading', setting: 'property', topic: 'a star manager who beat the list for two years',
    text: "Arvid, 66, sold his house and put $500,000 in a fund run by a 'star manager' who has beaten the list the fund follows for the last two years. The fund charges 1.9% a year, $9,500, and the brochure lists no other work the charge pays for. Arvid says, 'She has earned it.'",
    outcome: 'feecore', route: { D1: ['erosion'], E1: ['picking'] },
    cues: { D1: 'The fund charges 1.9% a year, $9,500', E1: 'beaten the list the fund follows for the last two years. The fund charges 1.9% a year, $9,500, and the brochure lists no other work the charge pays for' },
    reason: { D1: 'A fee comes out of {t:pot} every year: {cue:D1}. There is no fall in prices, no claim and no handover.',
              E1: 'The fee pays for picking and nothing else: {cue:E1}. Two good years do not change that, and the fee is certain where the beating is not.' },
    not: { outcome: 'nocut', why: 'A good record can look like value for money. But nothing is done that would not otherwise get done, and the fee grows with {t:pot}.' } },

  /* ---------- Nothing to cut back ---------- */
  { id: 'e-ret-nocut-3', use: 'return', tier: 'varied', setting: 'family', topic: 'a percentage taken every February after good returns',
    text: "Bronwen, 70, takes 4% of her pot each February. A year ago the pot was $500,000 and she took $20,000. This year it is $560,000, so she takes $22,400 and gives her grandchildren more at Christmas.",
    outcome: 'nocut', route: { D1: ['erosion'], E1: ['nomore'] },
    cues: { D1: 'takes 4% of her pot each February', E1: 'takes 4% of her pot each February. A year ago the pot was $500,000 and she took $20,000. This year it is $560,000, so she takes $22,400' },
    reason: { D1: 'A sum comes out of {t:pot} every year to spend: {cue:D1}. Nothing here is a bill, {t:claim} or a handover.',
              E1: 'The sum is worked out again each year as the same share of what {t:pot} is worth: {cue:E1}. It rose because {t:pot} rose, and it would have fallen with it.' },
    not: { outcome: 'burnrate', why: 'The sum changed from $20,000 to $22,400, so it is a percentage of {t:pot}, not a fixed number of dollars.' } },

  { id: 'e-ret-nocut-4', use: 'return', tier: 'misleading', setting: 'health', topic: 'a flat price which is a loud percentage of a small pot',
    text: "Idris, 72, has $300,000 and pays a firm $5,400 a year, a flat price. His son says that is 1.8% of the pot, 'far too much'. For it the firm handles his wife's care payments, claims the benefits she is owed and keeps her legal forms in order, none of which Idris could do while he is looking after her.",
    outcome: 'nocut', route: { D1: ['erosion'], E1: ['nomore'] },
    cues: { D1: 'pays a firm $5,400 a year, a flat price', E1: "a flat price. His son says that is 1.8% of the pot, 'far too much'. For it the firm handles his wife's care payments, claims the benefits she is owed and keeps her legal forms in order, none of which Idris could do while he is looking after her" },
    reason: { D1: 'Something comes out of the money every year: {cue:D1}. Nothing here is a fall in prices, {t:claim} or a handover.',
              E1: 'The fee is flat and pays for named work that would not otherwise get done: {cue:E1}. Its size as a percentage of {t:pot} does not decide it.' },
    not: { outcome: 'feecore', why: 'A big percentage can look like a fee for picking. But nothing here is for picking investments, and the price does not move with {t:pot}.' } },

  /* ---------- Right account for each investment ---------- */
  { id: 'e-ret-loc-1', use: 'return', tier: 'clean', setting: 'home', topic: 'a high-interest fund in the ordinary account of a bus driver',
    text: "Petra, 41, a bus driver, has $28,000 in an ordinary brokerage account, in a fund that pays out 5% interest, $1,400 a year, and she pays 25% tax on it, $350, every year. Her IRA, $28,000, is in a fund of shares that pays out about $150 a year.",
    outcome: 'location', route: { D1: ['erosion'], E1: ['incometax'] },
    cues: { D1: 'she pays 25% tax on it, $350, every year', E1: 'a fund that pays out 5% interest, $1,400 a year, and she pays 25% tax on it, $350, every year. Her IRA, $28,000, is in a fund of shares that pays out about $150 a year' },
    reason: { D1: 'Tax comes out of the money every year: {cue:D1}. There is no fall in prices, no claim and no handover.',
              E1: 'The fund that pays out the most sits in the taxed account, and the one that pays out little sits in the IRA: {cue:E1}. Swapping them would take the tax down to about $20 a year.' },
    not: { outcome: 'nocut', why: 'The fees are small, but the tax is not: the larger payout is the one in the taxed account.' } },

  { id: 'e-ret-loc-2', use: 'return', tier: 'varied', setting: 'business', topic: 'a dividend fund and a landscaping firm',
    text: "Duncan, 49, runs a landscaping company. His ordinary brokerage account holds $60,000 in a fund of shares chosen for generous payouts, $3,600 a year, and he pays 15% tax on it, $540, every year. His IRA holds a fund of shares in startup firms that pays out nothing at all.",
    outcome: 'location', route: { D1: ['erosion'], E1: ['incometax'] },
    cues: { D1: 'he pays 15% tax on it, $540, every year', E1: 'a fund of shares chosen for generous payouts, $3,600 a year, and he pays 15% tax on it, $540, every year. His IRA holds a fund of shares in startup firms that pays out nothing at all' },
    reason: { D1: 'Tax comes out of the money every year: {cue:D1}. There is no claim, no fall in prices and no handover.',
              E1: 'The fund that pays out the most sits in the taxed account, and the one that pays out nothing sits in the IRA: {cue:E1}.' },
    not: { outcome: 'defer', why: 'No sale is planned. The tax comes on what the fund pays out, every year.' } }
]);
