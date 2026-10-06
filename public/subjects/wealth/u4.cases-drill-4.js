// Wealth Preservation, Unit Four: cases for drill: the whole question order, misleading cases (a tax bill that new money would avoid, a mix far below its plan).
// Field guide: see u4.cards-1.js. use: 'teach' = shown in a card; 'check' = asked between cards; 'drill' and 'return' are never in a card.

FC.cases('wealth', 'u4', [

  { id: 'r-defer', use: 'drill', tier: 'misleading', setting: 'work', topic: 'a drifted mix, a planned sell-off and a maturing bond', echo: 'tm-meet-mix',
    text: "Mairead's plan is 60% in shares and 40% in bonds, and her $500,000 is now 68% in shares, $340,000. Her adviser wants her to sell $35,000 of shares to buy bonds. The shares have risen by $120,000 since she bought them, and the sale would bring a tax bill of about $1,900 on the gain. She has just received $60,000 from a certificate of deposit that has come to its end, and it sits in her checking account with no plans for it. No bill and no living costs are in the case.",
    outcome: 'defer', route: { D1: ['erosion'], E1: ['needlesssale'] }, also: ['timing'],
    cues: { D1: 'the sale would bring a tax bill of about $1,900 on the gain',
            E1: ['the sale would bring a tax bill of about $1,900 on the gain', 'She has just received $60,000 from a certificate of deposit that has come to its end'] },
    reason: { D1: 'The case shows a tax bill from a planned sale: {cue:D1}. A mix that has moved is in the case as well, and when putting it back means a sale that would bring a tax bill that new money could avoid, the answer is the tax.',
              E1: 'The sale is not needed: {cue:E1}. $60,000 put into bonds would make the total $560,000, with shares at $340,000, which is 60.7%, so the plan is restored without a sale.' },
    not: { outcome: 'rebalance', why: 'Her mix is 8 points above her plan, which is what {o:rebalance} looks like. But the sale would bring a tax bill that her new money could avoid, and that comes first.' } },

  { id: 'r-rb2', use: 'drill', tier: 'misleading', setting: 'retirement', topic: 'a mix far below its plan and an adviser who says wait', echo: 'tm-la-split-near',
    text: "Walter, 62, chose 50% in shares and 50% in bonds. Shares have fallen a lot, and are now $130,000 of his $360,000, 36%. His adviser tells him to do nothing, because the market always comes back. He is still working, and no bill is due for years.",
    outcome: 'rebalance', route: { D1: ['timing'], T1: ['drifted'] },
    cues: { D1: 'chose 50% in shares and 50% in bonds', T1: 'are now $130,000 of his $360,000, 36%' },
    reason: { D1: 'The case is about how the money is split against a plan: {cue:D1}. Nothing in it comes out every year, rests on one thing, or is about a death or a gift.',
              T1: 'Walter chose 50% in shares, and the case says shares {cue:T1}. That is 14 points below his plan, with no bill and no living costs in the case, so {t:mix} is all that a fall would find.' },
    not: { outcome: 'covered', why: 'The adviser’s advice to do nothing is not what decides the answer. What decides it is {t:mix}, and 14 points below the plan is well outside any limit of a few points.' } },
]);
