// Wealth Preservation, Unit Four, part one (third piece): the one exception about a name from Unit Two that looks like the first name
// here, and the third name (a bill on a date) with its check and its look-alike pair. Field guide: see u4.cards-1.js.

FC.cards('wealth', 'u4', [

  { id: 'exc-fixedsum', kind: 'exception', ledger: 'burnrate~cashbuffer', looksLike: 'cashbuffer', is: 'burnrate',
    h: 'Bills paid by selling, but the same sum for years',
    link: 'The first question has a different answer for a sum that never changed. Here is such a story, next to {o:cashbuffer}.',
    case: 'tm-exc-fixedsum',
    setup: 'Dolores sells units of her funds every month to pay her bills, with no cash set aside, and prices have fallen. That looks like {o:cashbuffer}. Yet the first question gives {a:D1.erosion}, and the one after it gives {a:E1.fixedsum}.',
    prompt: { kind: 'phrase', answer: 'she has taken exactly that every year since' },
    because: [
      '$36,000 was 4% of her $900,000. It has not changed, but her funds are now worth $540,000, so $36,000 is about 6.7% of them. Every year the same sum comes out of a smaller pot. Alan’s $24,000 was a fair share of what he had, and his only trouble was raising each month’s bills on bad days.',
      'More cash would not fix Dolores’s story: three years of $36,000 in cash would only move the problem three years later. What has to change is the sum. Set it each year as a percentage of what is left, not as a figure fixed years ago.'
    ],
    take: 'The story shows two things: bills raised from falling funds, and a fixed sum from funds that have shrunk. When it shows both, the answer is the second.' },

  /* ---------- The third name: a bill on a known date, with its money in shares ---------- */
  { id: 'meet-ladder', kind: 'meet', outcome: 'ladder',
    link: 'The first two names are about money spent every month. This one is about a single payment, and where its money is kept.',
    case: 'tm-meet-bill', mark: 'T1',
    explain: [
      'On June 1, Tobi and Ada must have $24,000. After the fall their fund holds $18,000, which is $6,000 short. By June 1 prices may have come back or fallen further, and nobody can say. What is certain is that the bill will still be $24,000. An amount that can move is being asked to cover an amount that cannot.',
      'The fix is to put the bill’s money where its worth on the day is known: {t:bond} from a borrower very unlikely to fail to pay, such as the US government, that repays $24,000 on or just before June 1. Held to that date, it pays exactly that, whatever its price did on the way. It might cost about $23,200 today, and the $800 difference is the interest it earns. That is a price paid for certainty: the same $23,200 in shares might have grown by more, or by less. With several bills on several dates, such as tuition every September for six years, you buy one bond for each bill, repaying on that bill’s date.'
    ],
    spot: [
      { do: 'Find the bill: $24,000, due on June 1.', why: 'Its size and its date do not move, whatever the market does.' },
      { do: 'Find where its money is held: in {t:fund} of shares.', why: 'Shares can be worth less on the day than they are today.' },
      { do: 'Check it is one payment, not living costs every month.', why: 'Bills every month call for cash, and one bill on one day calls for {t:bond}.' }
    ],
    feature: { step: 'T1', option: 'datedbill' },
    name: 'This is {o:ladder}. Each bond repays on the day its bill is due.',
    act: [
      { do: 'List every bill of a known size on a known date over the next several years.', why: 'Each one needs its own answer.' },
      { do: 'Find where each bill’s money is held today.', why: 'Only money in shares or funds is at risk.' },
      { do: 'For each one held in shares or funds, buy a Treasury bond that repays the amount on or just before the date, and hold it to that date.', why: 'The US government is very unlikely to fail to pay, and the amount is fixed.' },
      { do: 'Check the price and the repayment date before you buy.', why: 'The repayment must land before the bill is due.' },
      { do: 'Leave money that is not tied to a date where it is.', why: 'Bonds pay only fixed interest, which can be less than shares earn in a good year.' }
    ] },

  { id: 'check-ladder', kind: 'check', after: 'ladder',
    case: 'tm-chk-bill',
    ask: { type: 'option', step: 'T1', among: ['livingcosts', 'ready', 'datedbill'] } },

  { id: 'look-ladder-covered', kind: 'lookalike', ledger: 'ladder~covered',
    link: 'These two are easy to mix up, because the bill and the date are the same in both.',
    cases: ['tm-la-care-fund', 'tm-la-care-bond'],
    instruction: 'Both stories are about Mira, who must pay $18,000 to an assisted-living home on May 1, in a year when prices have fallen by a fifth. Compare one thing: what the money for the bill is held in.',
    prompt: { kind: 'which', option: 'T1.datedbill', answer: 'tm-la-care-fund' },
    difference: [
      'In Story A the $18,000 is in shares. After a fall of 20% it is $14,400, which is $3,600 short, and the home’s date does not move. That is {o:ladder}.',
      'In Story B the $18,000 is in {t:bond} from the US government that repays $18,000 on April 30. The bond’s price moved a little during the year, but that does not matter, because Mira holds it until it repays the full amount. That is {o:covered}.',
      'What separates the two is whether the bill’s money sits in something whose worth on the day can change.'
    ] }
]);
