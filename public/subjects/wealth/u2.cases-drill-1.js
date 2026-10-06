// Wealth Preservation, Unit Two: drill cases for the first stage (find the words that decide a charge). None of these appears in a card.
// reason[STEP] is the reason tied to the marked words; it is shown after the answer, decisive sentence first.
// not names the most tempting wrong name for the case and says why it fails for this case.

FC.cases('wealth', 'u2', [

  /* ---------- Find the words ---------- */
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
    not: { outcome: 'feecore', why: 'The $5,500 does not pay for choosing investments. It pays for books, wages and a tax return, at a price that does not grow with his savings.' } }
]);
