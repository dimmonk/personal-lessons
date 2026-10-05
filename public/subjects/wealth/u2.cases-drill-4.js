// Wealth Preservation, Unit Two: drill cases for stage three (the first answer is shown, the learner finishes the route and names it)
// and the reverse items of stage two (one for each name). None of these appears in a card.
// A finish case carries marked words and a reason for the first question as well as for this unit's own, because it is asked from the top.
// A reverse item gives the name and asks what you would expect: every choice is what one of the taught names sounds like (voice),
// so no choice is a false statement.

FC.cases('wealth', 'u2', [

  /* ---------- Stage three: the first answer is shown; the learner answers the key's question and gives the name ---------- */
  { id: 'e-f-burn', use: 'drill', tier: 'varied', setting: 'family', topic: 'a sum set at a fair share, then a gift to a son',
    text: "Lena, 67, set her spending at £36,000 a year when her pot was £900,000, which was 4%. Since then she has given £100,000 to her son, and her pot is now £650,000. She still takes £36,000 a year, which is now about 5.5% of it.",
    outcome: 'burnrate', route: { D1: ['erosion'], E1: ['fixedsum'] },
    cues: { D1: 'She still takes £36,000 a year',
            E1: 'set her spending at £36,000 a year when her pot was £900,000, which was 4%. Since then she has given £100,000 to her son, and her pot is now £650,000. She still takes £36,000 a year, which is now about 5.5% of it' },
    reason: { D1: 'The case is about a sum that comes out of {t:pot} every year to live on: {cue:D1}. It has no bill due in a fall, and no one thing that is most of her money.',
              E1: 'The sum was set when {t:pot} was bigger and has not been reset: {cue:E1}. The gift made {t:pot} smaller, and the same £36,000 is now a bigger share of it.' },
    not: { outcome: 'nocut', why: 'A sum spent every year is sound only when it is reset as a percentage of {t:pot}. Lena set a number of pounds when {t:pot} was £250,000 bigger.' } },

  { id: 'e-f-pct', use: 'drill', tier: 'varied', setting: 'home', topic: 'a percentage worked out every January after a bad spell',
    text: "Oskar, 70, takes 3.5% of what his pot is worth each January and rounds it to the nearest £500. Last year that was £24,000. This year the pot is down 12%, so he takes £21,000 and holds the garden project over until next year.",
    outcome: 'nocut', route: { D1: ['erosion'], E1: ['nomore'] },
    cues: { D1: 'takes 3.5% of what his pot is worth each January',
            E1: 'takes 3.5% of what his pot is worth each January and rounds it to the nearest £500. Last year that was £24,000. This year the pot is down 12%, so he takes £21,000' },
    reason: { D1: 'The case is about a sum taken out of {t:pot} every year to spend: {cue:D1}. Nothing in it is due on a date, and no one thing is most of his money.',
              E1: 'The sum is worked out again every January from what {t:pot} is worth that month: {cue:E1}. A smaller pot gives a smaller sum, so he never takes a bigger share than he chose.' },
    not: { outcome: 'burnrate', why: 'His pot is down, which is how a fixed sum goes wrong, but Oskar does not keep a fixed sum. He takes the same share, so the amount fell with {t:pot}.' } },

  { id: 'e-f-def', use: 'drill', tier: 'varied', setting: 'work', topic: 'a magazine’s advice to sell before the autumn',
    text: "Kasia, 62, owns a fund she bought for £40,000 that is now worth £52,000. A magazine says to 'sell before the autumn'. She needs no cash. Selling would bring tax of 20% on the £12,000 gain, £2,400.",
    outcome: 'defer', route: { D1: ['erosion'], E1: ['needlesssale'] },
    cues: { D1: 'Selling would bring tax of 20% on the £12,000 gain, £2,400',
            E1: "'sell before the autumn'. She needs no cash. Selling would bring tax of 20% on the £12,000 gain, £2,400" },
    reason: { D1: 'The case is about a tax bill that would come out of {t:pot}: {cue:D1}. It has no claim, no handover and no one thing that is most of her money.',
              E1: 'A sale is suggested that would bring tax on {t:gain}, and nothing needs it: {cue:E1}. A magazine telling people to sell is not a bill or a need.' },
    not: { outcome: 'harvest', why: 'No sale has been made this year, and nothing else in the case is worth less than it cost, so there is no loss to set against the gain.' } },

  { id: 'e-f-har', use: 'drill', tier: 'varied', setting: 'property', topic: 'a fund sold at a gain and shares which fell',
    text: "Sven, 58, sold a fund this year for £9,000 more than he paid, so he will owe tax of £1,800 on that gain. In the same account he still holds shares that cost £8,000 and are now worth £5,000, which he has not sold.",
    outcome: 'harvest', route: { D1: ['erosion'], E1: ['gainloss'] },
    cues: { D1: 'he will owe tax of £1,800 on that gain',
            E1: 'so he will owe tax of £1,800 on that gain. In the same account he still holds shares that cost £8,000 and are now worth £5,000, which he has not sold' },
    reason: { D1: 'The case is about tax that will come out of {t:pot} this year: {cue:D1}. It has no handover and no one thing that is most of what he owns.',
              E1: 'The case shows {t:gain} made this year that will be taxed, and shares he has not sold are worth less than he paid: {cue:E1}. Selling them would set a £3,000 loss against the £9,000 gain.' },
    not: { outcome: 'defer', why: 'The sale has already happened, so there is no sale to hold off. What the case shows is a loss waiting in the same account.' } },

  /* ---------- Reverse items: the name is given, the learner says what to expect ---------- */
  { id: 'e-rev-feecore', use: 'drill', kind: 'reverse', outcome: 'feecore', expect: 'hear',
    options: [
      { text: '"It\'s only 1% a year, and our team picks the funds for you."', voice: 'feecore' },
      { text: '"He prepares my return and checks my will, for a flat fee."', voice: 'nocut' },
      { text: '"I am not selling yet. The tax on the gain would be £1,200."', voice: 'defer' },
      { text: '"We take the same £40,000 every year, whatever the pot is worth."', voice: 'burnrate' }
    ],
    why: 'It is a percentage of {t:pot} taken every year, and the only thing it is for is choosing the funds.' },

  { id: 'e-rev-nocut', use: 'drill', kind: 'reverse', outcome: 'nocut', expect: 'find',
    options: [
      { text: 'She pays 1% of her pot a year and has not heard from the adviser in three years.', voice: 'feecore' },
      { text: 'He pays £3,000 a year, flat, and the planner does his return, his will check and his spending plan.', voice: 'nocut' },
      { text: 'Her bond fund is in the ordinary account and the interest is taxed every year.', voice: 'location' },
      { text: 'He is about to sell a fund that has risen, with no bill to pay.', voice: 'defer' }
    ],
    why: 'That detail shows a charge that pays for named work at a set price that does not grow with {t:pot}. That is what makes the charge sound rather than a problem.' },

  { id: 'e-rev-location', use: 'drill', kind: 'reverse', outcome: 'location', expect: 'hear',
    options: [
      { text: '"The fund pays me £3,000 a year, and the tax office takes a quarter of it."', voice: 'location' },
      { text: '"I am not selling. The tax on the gain would be £6,000."', voice: 'defer' },
      { text: '"I sold one in March at a profit, and I still hold one that is worth less than I paid."', voice: 'harvest' },
      { text: '"I take 3.5% of whatever the pot is worth each January."', voice: 'nocut' }
    ],
    why: 'The tax is charged on what the fund pays out, once a year, and nothing is sold. The fund that pays out the most is held in the taxed account.' },

  { id: 'e-rev-defer', use: 'drill', kind: 'reverse', outcome: 'defer', expect: 'find',
    options: [
      { text: 'She has already sold one fund at a gain this year.', voice: 'harvest' },
      { text: 'Nothing needs the sale, and it would bring £2,000 of tax.', voice: 'defer' },
      { text: 'The interest is taxed every year with no sale at all.', voice: 'location' },
      { text: 'The adviser takes 0.9% a year for a choice made long ago.', voice: 'feecore' }
    ],
    why: 'That detail is a planned sale that nobody needs, and the tax bill on its gain. Not selling keeps the tax from being paid.' },

  { id: 'e-rev-harvest', use: 'drill', kind: 'reverse', outcome: 'harvest', expect: 'hear',
    options: [
      { text: '"I have not sold a thing, so I have not paid any tax."', voice: 'defer' },
      { text: '"I sold the winner in March. I still hold one fund that is worth less than I paid."', voice: 'harvest' },
      { text: '"The tax comes every year, even when I sell nothing."', voice: 'location' },
      { text: '"Our spending was set at 4% of the pot and has never changed."', voice: 'burnrate' }
    ],
    why: 'A sale this year made {t:gain} that will be taxed. Another investment, not sold, is worth less than was paid for it.' },

  { id: 'e-rev-burnrate', use: 'drill', kind: 'reverse', outcome: 'burnrate', expect: 'find',
    options: [
      { text: 'She works out 4% of the pot each January and takes that.', voice: 'nocut' },
      { text: 'He still takes the same £45,000 now the pot is smaller.', voice: 'burnrate' },
      { text: 'The fund takes 1.2% a year for choosing the shares.', voice: 'feecore' },
      { text: 'He sold a fund at a gain and still holds another that has fallen.', voice: 'harvest' }
    ],
    why: 'That detail shows the same number of pounds still being spent while the savings under it have become smaller, so it is a bigger share than when it was set.' }
]);
