// Wealth Preservation, Unit Two: drill cases whose story points the wrong way. None of these appears in a card.

FC.cases('wealth', 'u2', [

  /* ---------- Misleading cases: a plain charge that looks sound, and a big flat price that is fine ---------- */
  { id: 'e-r-fee-2', use: 'drill', tier: 'misleading', setting: 'family', topic: 'a "family planner" whose meeting repeats the same funds', echo: 'e-m-nocut',
    text: "Pilar, 56, has $400,000 with a firm that calls itself her 'family planner'. Each year the firm takes 1.2% of the pot, $4,800. Each spring there is a friendly meeting that goes through the same three funds the firm chose in the first year, and a glossy report that lists them with their prices. The firm has never prepared a tax return, checked a will or been asked for advice on anything else.",
    outcome: 'feecore', route: { D1: ['erosion'], E1: ['picking'] },
    cues: { D1: 'Each year the firm takes 1.2% of the pot, $4,800',
            E1: 'a friendly meeting that goes through the same three funds the firm chose in the first year, and a glossy report that lists them with their prices. The firm has never prepared a tax return, checked a will or been asked for advice on anything else' },
    reason: { D1: 'The case is about something that comes out of {t:pot} every year: {cue:D1}. It has no claim, no fall in prices and no handover.',
              E1: 'The meeting and the report only go back over the funds and their prices, and the case says nothing else is done: {cue:E1}. That is a charge for choosing, however friendly the meeting.' },
    not: { outcome: 'nocut', why: 'A planner who meets you each spring can look like the one who earns a flat price. But there the meeting comes with a return, forms and a plan. Here nothing is done that would not otherwise get done, and the charge is a percentage of {t:pot}.' } },

  { id: 'e-r-nocut-4', use: 'drill', tier: 'misleading', setting: 'business', topic: 'a large flat price for the books of two companies',
    text: "Mirela, 59, has $800,000 in index funds and pays her accountant $9,000 a year, a flat price set in writing each January. Her cousin says that is 'more than a fund manager would charge'. For it the accountant files the returns of her two companies, runs their payroll and prepares her own return, none of which would get done without him.",
    outcome: 'nocut', route: { D1: ['erosion'], E1: ['nomore'] },
    cues: { D1: 'pays her accountant $9,000 a year',
            E1: 'a flat price set in writing each January. Her cousin says that is \'more than a fund manager would charge\'. For it the accountant files the returns of her two companies, runs their payroll and prepares her own return, none of which would get done without him' },
    reason: { D1: 'The case is about something that comes out of the money every year: {cue:D1}. It has no fall in prices, no claim and no handover.',
              E1: 'The charge is a flat price, and it pays for named work that the case says would not otherwise get done: {cue:E1}. How large the price sounds is not what decides it.' },
    not: { outcome: 'feecore', why: 'The $9,000 does not pay for choosing investments, which are in index funds already. It pays for returns and payroll that would otherwise be left undone.' } },

]);
