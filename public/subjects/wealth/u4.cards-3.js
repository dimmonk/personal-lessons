// Wealth Preservation, Unit Four, part one (third piece): the one exception about a name from Unit Two that looks like the first name
// here, and the third name (a bill on a date) with its check and its look-alike pair. Field guide: see u4.cards-1.js.

FC.cards('wealth', 'u4', [

  { id: 'exc-fixedsum', kind: 'exception', ledger: 'burnrate~cashbuffer', looksLike: 'cashbuffer', is: 'burnrate',
    h: 'A fall, a fixed sum and a shrunken pot',
    link: 'The first question has already put a fall and a sum that never changed side by side, and gave the answer {a:D1.erosion}. Here is such a case next to {o:cashbuffer}.',
    case: 'tm-exc-fixedsum',
    setup: 'Dolores pays her bills by selling units of her funds every month, with no cash set aside, and prices have fallen. That is what {o:cashbuffer} looks like. Yet the answer for this case is {a:D1.erosion}, and the next question gives {a:E1.fixedsum}.',
    prompt: { kind: 'phrase', answer: 'she has taken exactly that every year since' },
    because: [
      '$36,000 was 4% of $900,000. It has not changed, though the funds are now worth $540,000, and $36,000 is about 6.7% of them. Every year the same sum comes out, a bigger share of a smaller amount. Alan’s $24,000 was a fair share of what he had; his trouble was raising each month’s bills from falling funds.',
      'Cash would not fix Dolores’s case: three years of $36,000 in cash would only move the problem three years later. What has to change is the sum, set each year as a percentage of what is left and not as a figure fixed years ago.'
    ],
    take: 'The case shows two things at once: bills raised from falling funds, and a fixed sum from funds that have shrunk. When a case shows both, the answer is the second.' },

  /* ---------- The third name: a bill on a known date, with its money in shares ---------- */
  { id: 'meet-ladder', kind: 'meet', outcome: 'ladder',
    link: 'The first two names are about money that is spent every month. The third is about a single payment, and where the money for it is held.',
    case: 'tm-meet-bill', mark: 'T1',
    strip: [
      'There is one bill, $24,000, due on a known date, June 1. Its size and its date do not move, whatever the market does.',
      'The money for it, $24,000, is held in shares, whose price can fall.',
      'Prices have fallen by 25%, so the $24,000 is now $18,000. Nothing else is in the case: no monthly living costs, and nothing about a plan.'
    ],
    explain: [
      'On June 1, $24,000 must be there. After the fall the fund holds $18,000, which is $6,000 short. By June 1 prices may have come back, or they may have fallen further, and nobody can say. What is certain is that the bill will be $24,000 on that day. An amount that can move is being used to meet an amount that cannot.',
      'The alternative is to put the bill’s money where its worth on the day is known: {t:bond} from a borrower very unlikely to fail to pay, such as the US government, that repays $24,000 on June 1 or just before. Held to that date, it pays exactly that, whatever its price did on the way. Such {t:bond} might cost about $23,200 today, and the $800 difference is the interest it earns. That is a price paid for certainty: the same $23,200 in shares might have grown by more, or by less.',
      'If there were several bills on several dates, such as tuition every September for six years, the same idea gives one bond for each bill, each repaying that bill’s amount on that bill’s date.'
    ],
    feature: { step: 'T1', option: 'datedbill' },
    name: 'The name for this is {o:ladder}. It says what to do: one bond for each bill, with each bond repaying on the date its bill is due.',
    act: 'List every bill of a known size on a known date over the next several years, and find where its money is held today. If it is in shares or funds, buy {t:bond} that repays the amount on or just before the date, from a borrower very unlikely to fail to pay, such as the US government (a Treasury bond), and hold it to that date. Check the price and the repayment date before you buy. The bond earns its fixed interest and no more, which may be less than shares earn in a good year. Money that is not tied to a date stays where it is.' },

  { id: 'check-ladder', kind: 'check', after: 'ladder',
    case: 'tm-chk-bill',
    ask: { type: 'option', step: 'T1', among: ['livingcosts', 'ready', 'datedbill'] } },

  { id: 'look-ladder-covered', kind: 'lookalike', ledger: 'ladder~covered',
    link: 'These two names are easy to mix up, because in both the bill is the same and the date is the same.',
    cases: ['tm-la-care-fund', 'tm-la-care-bond'],
    instruction: 'Both cases are about Mira, who must pay $18,000 to an assisted-living home on May 1, in a year when prices have fallen by a fifth. Compare one thing: what the money for the bill is held in.',
    prompt: { kind: 'which', option: 'T1.datedbill', answer: 'tm-la-care-fund' },
    difference: [
      'In Case A the $18,000 is in shares. After a fall of 20% it is $14,400, which is $3,600 short, and the home’s date does not move. The answer is {a:T1.datedbill}, and the case is {o:ladder}.',
      'In Case B the $18,000 is in {t:bond} from the US government that repays $18,000 on April 30. The bond’s price moved a little during the year, and that does not matter, because Mira will hold it to the day it repays the full $18,000. The answer is {a:T1.ready}, and the case is {o:covered}. What separates the two is whether the money for the bill is held in something whose worth on the day can change.'
    ] }
]);
