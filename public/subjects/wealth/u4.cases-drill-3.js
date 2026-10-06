// Wealth Preservation, Unit Four: cases for drill: the whole question order, misleading cases (a fixed sum, a mix beside living costs).
// Field guide: see u4.cards-1.js. use: 'teach' = shown in a card; 'check' = asked between cards; 'drill' and 'return' are never in a card.

FC.cases('wealth', 'u4', [

  { id: 'r-burn', use: 'drill', tier: 'misleading', setting: 'retirement', topic: 'a sum fixed seven years ago from a shrunken pot', echo: 'tm-meet-live',
    text: "Yusuf retired seven years ago with $720,000 in funds of shares. He set himself $32,000 a year, which was 4.4% of the money then, and has taken exactly that every year since, selling units of the funds each month and keeping no cash. Prices have fallen, and the funds are now worth $450,000.",
    outcome: 'burnrate', route: { D1: ['erosion'], E1: ['fixedsum'] }, also: ['timing'],
    cues: { D1: 'has taken exactly that every year since',
            E1: ['He set himself $32,000 a year', 'the funds are now worth $450,000'] },
    reason: { D1: 'The case shows a sum taken out every year: {cue:D1}. A fall in prices is in the case as well, and when a case shows both, the answer is the sum.',
              E1: 'The sum was fixed when the money was worth more, and it has not moved while the money shrank: {cue:E1}. $32,000 was 4.4% of $720,000 and is now 7.1% of $450,000.' },
    not: { outcome: 'cashbuffer', why: 'Yusuf pays his bills by selling falling funds with no cash set aside, which is how {o:cashbuffer} of this unit looks. But the sum has stayed the same for seven years while the funds shrank, and the question about that comes first.' } },

  { id: 'r-cb3', use: 'drill', tier: 'misleading', setting: 'home', topic: 'a drifted mix with monthly sales to live on', echo: 'tm-meet-mix',
    text: "Sakura, 66, plans 60% in shares and 40% in bonds. Shares are now 69% of her $390,000, which is $269,100. She needs $1,700 a month, and she pays it by selling units of the shares each month. She has no cash set aside.",
    outcome: 'cashbuffer', route: { D1: ['timing'], T1: ['livingcosts'] }, also: ['drifted'],
    cues: { D1: 'She needs $1,700 a month', T1: 'she pays it by selling units of the shares each month. She has no cash set aside' },
    reason: { D1: 'The case is about what a fall would do to money that is spent every month: {cue:D1}. Nothing in it comes out as a charge, rests on one thing, or is about a death or a gift.',
              T1: 'Sakura’s mix has moved, but her bills are paid by selling shares every month with nothing set aside: {cue:T1}. When a case shows both, the answer is the living costs.' },
    not: { outcome: 'rebalance', why: 'Her mix is 9 points above her plan, which is what {o:rebalance} looks like. But shares are being sold every month to pay her bills, and money needed soon comes first.' } },
]);
