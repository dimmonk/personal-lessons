// Wealth Preservation, Unit Four: drill cases, stage four (the whole route, no help), third part: the last four misleading cases.
// Two of them are the pairs the key settles by a tie-break (a tax bill that new money would avoid; a bill that comes before a split that
// has moved), and one is a sound case whose story looks like {o:ladder}.

FC.cases('wealth', 'u4', [

  { id: 'r-defer', use: 'drill', tier: 'misleading', setting: 'work', topic: 'a drifted mix, a planned sell-off and a maturing bond', echo: 'tm-meet-mix',
    text: "Mairead's plan is 60% in shares and 40% in bonds, and her $500,000 is now 68% in shares, $340,000. Her adviser wants her to sell $35,000 of shares to buy bonds. The shares have risen by $120,000 since she bought them, and the sale would bring a tax bill of about $1,900 on the gain. She has just received $60,000 from a certificate of deposit that has come to its end, and it sits in her checking account with no plans for it. No bill and no living costs are in the case.",
    outcome: 'defer', route: { D1: ['erosion'], E1: ['needlesssale'] }, also: ['timing'],
    cues: { D1: 'the sale would bring a tax bill of about $1,900 on the gain',
            E1: ['the sale would bring a tax bill of about $1,900 on the gain', 'She has just received $60,000 from a certificate of deposit that has come to its end'] },
    reason: { D1: 'The case shows a tax bill from a planned sale: {cue:D1}. A mix that has moved is in the case as well, and when putting it back means a sale that would bring a tax bill that new money could avoid, the answer is the tax.',
              E1: 'The sale is not needed: {cue:E1}. $60,000 put into bonds would make the total $560,000, with shares at $340,000, which is 60.7%, so the plan is restored without a sale.' },
    not: { outcome: 'rebalance', why: 'Her mix is 8 points above her plan, which is what {o:rebalance} looks like. But the sale would bring a tax bill that her new money could avoid, and that comes first.' },
    wouldChange: 'If the shares were in {t:sheltered}, so that the sale brought no tax, or if she had no new money to use, the sale would be the fix, and the case would be {a:T1.drifted}.' },

  { id: 'r-rb2', use: 'drill', tier: 'misleading', setting: 'retirement', topic: 'a mix far below its plan and an adviser who says wait', echo: 'tm-la-split-near',
    text: "Walter, 62, chose 50% in shares and 50% in bonds. Shares have fallen a lot, and are now $130,000 of his $360,000, 36%. His adviser tells him to do nothing, because the market always comes back. He is still working, and no bill is due for years.",
    outcome: 'rebalance', route: { D1: ['timing'], T1: ['drifted'] },
    cues: { D1: 'chose 50% in shares and 50% in bonds', T1: 'are now $130,000 of his $360,000, 36%' },
    reason: { D1: 'The case is about how the money is split against a plan: {cue:D1}. Nothing in it comes out every year, rests on one thing, or is about a death or a gift.',
              T1: 'Walter chose 50% in shares, and the case says shares {cue:T1}. That is 14 points below his plan, with no bill and no living costs in the case, so {t:mix} is all that a fall would find.' },
    not: { outcome: 'covered', why: 'The adviser’s advice to do nothing is not what decides the answer. What decides it is {t:mix}, and 14 points below the plan is well outside any limit of a few points.' },
    wouldChange: 'If the plan had allowed 15 points either way, {t:mix} would be inside its limit, and the case would be {a:T1.ready}.' },

  { id: 'r-ld3', use: 'drill', tier: 'misleading', setting: 'business', topic: 'a drifted mix and an insurance premium', echo: 'tm-meet-mix',
    text: "Zofia's plan is 60% in shares and 40% in bonds, and shares are now 69% of her $250,000, which is $172,500. Her firm's insurance premium of $30,000 falls due on February 1, four months from now, and she has been keeping the money for it in the shares. She works, and her pay covers her bills.",
    outcome: 'ladder', route: { D1: ['timing'], T1: ['datedbill'] }, also: ['drifted'],
    cues: { D1: "Her firm's insurance premium of $30,000 falls due on February 1, four months from now",
            T1: ['premium of $30,000 falls due on February 1, four months from now', 'she has been keeping the money for it in the shares'] },
    reason: { D1: 'The case is about what a fall would do to money that has a job on a date: {cue:D1}. Nothing in it comes out every year, rests on one thing, or is about a death or a gift.',
              T1: 'The premium is a known size on a known date, and its money sits in shares: {cue:T1}. Her mix has moved too, and when a case shows both, the answer is the bill.' },
    not: { outcome: 'rebalance', why: 'Her mix is 9 points above her plan, which is what {o:rebalance} looks like. But a bill of $30,000 falls due on a known date with its money in shares, and money needed soon comes first.' },
    wouldChange: 'If the premium’s money were in a savings account and the only thing in the case were {t:mix}, the case would be {a:T1.drifted}.' },

  { id: 'r-cv4', use: 'drill', tier: 'misleading', setting: 'property', topic: 'closing money in a bond, with scary headlines', echo: 'tm-meet-bill',
    text: "Nadia must pay $120,000 on September 1 at the closing of her condo purchase. She has the money in a US Treasury bond that repays $120,000 on August 15, about two weeks earlier. Prices have fallen by 22% since the spring, and the papers are full of warnings.",
    outcome: 'covered', route: { D1: ['timing'], T1: ['ready'] },
    cues: { D1: 'Nadia must pay $120,000 on September 1 at the closing of her condo purchase', T1: 'She has the money in a US Treasury bond that repays $120,000 on August 15, about two weeks earlier' },
    reason: { D1: 'The case is about what a fall would do to money that has a job on a date: {cue:D1}. Nothing in it comes out every year, rests on one thing, or is about a death or a gift.',
              T1: 'The money for the bill is held where a fall cannot reach it: {cue:T1}. The warnings are about shares, and the bond repays the full $120,000 before the bill is due.' },
    not: { outcome: 'ladder', why: 'The case shows a large bill on a known date and a fall, which is the setting of {o:ladder}. But that name needs the money for the bill in shares or funds, and here it is in {t:bond} that repays before the date.' },
    wouldChange: 'If the $120,000 were in {t:fund} of shares, it would now be about $93,600, and the case would be {a:T1.datedbill}.' }
]);
