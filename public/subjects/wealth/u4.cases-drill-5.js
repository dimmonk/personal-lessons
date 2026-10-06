// Wealth Preservation, Unit Four: cases for drill: the whole question order, misleading cases (a bill beside a mix, a scary headline).
// Field guide: see u4.cards-1.js. use: 'teach' = shown in a card; 'check' = asked between cards; 'drill' and 'return' are never in a card.

FC.cases('wealth', 'u4', [

  { id: 'r-ld3', use: 'drill', tier: 'misleading', setting: 'business', topic: 'a drifted mix and an insurance premium', echo: 'tm-meet-mix',
    text: "Zofia's plan is 60% in shares and 40% in bonds, and shares are now 69% of her $250,000, which is $172,500. Her firm's insurance premium of $30,000 falls due on February 1, four months from now, and she has been keeping the money for it in the shares. She works, and her pay covers her bills.",
    outcome: 'ladder', route: { D1: ['timing'], T1: ['datedbill'] }, also: ['drifted'],
    cues: { D1: "Her firm's insurance premium of $30,000 falls due on February 1, four months from now",
            T1: ['premium of $30,000 falls due on February 1, four months from now', 'she has been keeping the money for it in the shares'] },
    reason: { D1: 'The case is about what a fall would do to money that has a job on a date: {cue:D1}. Nothing in it comes out every year, rests on one thing, or is about a death or a gift.',
              T1: 'The premium is a known size on a known date, and its money sits in shares: {cue:T1}. Her mix has moved too, and when a case shows both, the answer is the bill.' },
    not: { outcome: 'rebalance', why: 'Her mix is 9 points above her plan, which is what {o:rebalance} looks like. But a bill of $30,000 falls due on a known date with its money in shares, and money needed soon comes first.' } },

  { id: 'r-cv4', use: 'drill', tier: 'misleading', setting: 'property', topic: 'closing money in a bond, with scary headlines', echo: 'tm-meet-bill',
    text: "Nadia must pay $120,000 on September 1 at the closing of her condo purchase. She has the money in a US Treasury bond that repays $120,000 on August 15, about two weeks earlier. Prices have fallen by 22% since the spring, and the papers are full of warnings.",
    outcome: 'covered', route: { D1: ['timing'], T1: ['ready'] },
    cues: { D1: 'Nadia must pay $120,000 on September 1 at the closing of her condo purchase', T1: 'She has the money in a US Treasury bond that repays $120,000 on August 15, about two weeks earlier' },
    reason: { D1: 'The case is about what a fall would do to money that has a job on a date: {cue:D1}. Nothing in it comes out every year, rests on one thing, or is about a death or a gift.',
              T1: 'The money for the bill is held where a fall cannot reach it: {cue:T1}. The warnings are about shares, and the bond repays the full $120,000 before the bill is due.' },
    not: { outcome: 'ladder', why: 'The case shows a large bill on a known date and a fall, which is the setting of {o:ladder}. But that name needs the money for the bill in shares or funds, and here it is in {t:bond} that repays before the date.' } },
]);
