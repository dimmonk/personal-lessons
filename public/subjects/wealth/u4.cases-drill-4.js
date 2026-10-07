// Wealth Preservation, Unit Four: cases for drill: the whole question order, misleading cases (a tax bill that new money would avoid, a mix far below its plan).
// Field guide: see u4.cards-1.js. use: 'teach' = shown in a card; 'check' = asked between cards; 'drill' and 'return' are never in a card.

FC.cases('wealth', 'u4', [

  { id: 'r-defer', use: 'drill', tier: 'misleading', setting: 'work', topic: 'a drifted mix, a planned sell-off and a maturing bond', echo: 'tm-meet-mix',
    text: "Mairead's plan is 60% in shares and 40% in bonds, and her $500,000 is now 68% in shares, $340,000. Her adviser wants her to sell $35,000 of shares to buy bonds. The shares have risen by $120,000 since she bought them, and the sale would bring a tax bill of about $1,900 on the gain. She has just received $60,000 from a certificate of deposit that has come to its end, and it sits in her checking account with no plans for it. No bill and no living costs are in the story.",
    outcome: 'defer', route: { D1: ['erosion'], E1: ['needlesssale'] }, also: ['timing'],
    cues: { D1: 'the sale would bring a tax bill of about $1,900 on the gain',
            E1: ['the sale would bring a tax bill of about $1,900 on the gain', 'She has just received $60,000 from a certificate of deposit that has come to its end'] },
    reason: { D1: 'The story shows a tax bill from a planned sale: {cue:D1}. A drifted mix is in it too, but when putting it right means a sale whose tax new money could avoid, the tax wins.',
              E1: 'The sale is not needed: {cue:E1}. $60,000 put into bonds would make the total $560,000, with shares at $340,000, which is 60.7%, so the plan is back without a sale.' },
    not: { outcome: 'rebalance', why: 'Her shares are 8 points above her plan, which looks like {o:rebalance}. But the sale would bring a tax bill her new money could avoid, and that comes first.' } },

  { id: 'r-rb2', use: 'drill', tier: 'misleading', setting: 'retirement', topic: 'a mix far below its plan and an adviser who says wait', echo: 'tm-la-split-near',
    text: "Walter, 62, chose 50% in shares and 50% in bonds. Shares have fallen a lot, and are now $130,000 of his $360,000, 36%. His adviser tells him to do nothing, because the market always comes back. He is still working, and no bill is due for years.",
    outcome: 'rebalance', route: { D1: ['timing'], T1: ['drifted'] },
    cues: { D1: 'chose 50% in shares and 50% in bonds', T1: 'are now $130,000 of his $360,000, 36%' },
    reason: { D1: 'The story is about how the money is split against a plan: {cue:D1}. Nothing else in the story is a yearly cost, one big holding, or a death or a gift.',
              T1: 'Walter chose 50% in shares, and the story says shares {cue:T1}. That is 14 points below his plan, with no bill and no living costs, so a mix that has moved is all a fall would find.' },
    not: { outcome: 'covered', why: 'The adviser’s advice to do nothing does not decide it. His shares are 14 points below his plan, far outside any limit of a few points.' } },
]);
