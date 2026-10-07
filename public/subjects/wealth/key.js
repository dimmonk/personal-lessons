// Wealth Preservation: the key. THE ONLY PLACE this subject's vocabulary is typed (lesson standard K1).
// Outcome names, question text, answer text, and the plain / needs / why / when lines are written here once.
// Cards, checks, drills, feedback and verdicts refer to them by token and never retype them:
//   {o:id} name   {plain:id} plain words   {needs:id} what to look for
//   {q:STEP} question   {a:STEP.option} answer   {when:STEP.option} when to give it   {t:id} term   {means:id} its meaning
//
// Field guide (lesson standard S1, written to section 20: plain, concrete words)
//   outcomes[].n      the one fixed name shown everywhere. Every name but the five "leave it alone" ones is what to do
//                     about the money; the leave-alone names say that nothing needs doing
//   outcomes[].plain  a few ordinary words: the preview map, and the heading of the card that introduces the name
//   outcomes[].needs  what to look for in a story before the name can be used.
//                     Printed under "What to look for" where two names are compared, on the recap and the reference
//                     screen, and in feedback.
//   outcomes[].aka    other words real life uses for the same thing; shown once, on the card that introduces the name
//   outcomes[].legit  true on a name where nothing needs doing (action subject, lesson standard P26)
//   terms[]           taught words that are not key wording; each has one term card in the unit named
//   avoid[]           words this subject's authored text must not use, with what to say instead (P4 requires 2)
//   steps[].q         the question, exactly as it is asked
//   steps[].why       why that question decides
//   options[].n       the answer, exactly as it is shown
//   options[].when    a clause saying what the story shows for this answer. Printed as "Give this answer when <when>."
//                     and in feedback as "This story shows something else: <when>."
//   options[].keeps   the outcome ids this answer leaves possible
//   options[].yieldsTo  the key's tie-break, as data: when a story shows this answer AND the one named, the named one wins
// Step codes (D1, E1, S1, T1, H1) and ids are for the data. They are never shown to the learner (K3).
//
//   gate options also carry plain and needs: the gate's answers are Unit One's families (lesson standard A15).
//                     A family's name is its answer text. It is printed by {a:D1.option}; its plain words and what to
//                     look for are printed by {plain:option} and {needs:option}.
//
// The rule for "nothing is threatening this money" lives in two places in the key, one for each kind of safe story:
//   - the gate's fifth answer, for a story with nothing in it that could lose the money at all (legit, no branch);
//   - the last answer of each branch, for a story with one thing that could lose it, already taken care of.
//     Each of those four names is legit, and its needs line is the stated rule for its kind.
// Each branch asks ONE question: every name in a branch is defined by one thing the story shows, so a second question
// would only repeat the first (K2.2, V55). See docs/rebuild/wealth-plan.md for every change from the old key and why.

FC.key('wealth', {
  outcomes: [
    // Money going out every year: taught by Unit Two.
    { id: 'feecore', group: 'erosion', unit: 'u2',
      n: 'Switch to index funds',
      plain: 'paying a lot every year for someone to pick the investments',
      needs: 'a yearly fee for picking investments, far more than an index fund charges, that pays for nothing else, or grows with the pot while the other work it pays for does not',
      aka: ['a low-cost core', 'passive investing'] },
    { id: 'location', group: 'erosion', unit: 'u2',
      n: 'Right account for each investment',
      plain: 'income taxed every year because it sits in the wrong account',
      needs: 'a taxable account holding investments that pay income every year, taxed each year, and a sheltered account with room to spare or holding ones that pay little',
      aka: ['asset location'] },
    { id: 'defer', group: 'erosion', unit: 'u2',
      n: 'Delay the tax by not selling',
      plain: 'a tax bill from a sale nobody needs to make',
      needs: 'something worth more than was paid for it, a planned sale that would bring a tax bill on the gain, and no real need to sell, since new money could do the same job',
      aka: ['deferring the tax on a gain'] },
    { id: 'harvest', group: 'erosion', unit: 'u2',
      n: 'Use a loss to cut tax',
      plain: 'a gain taxed this year, while another investment sits below what it cost',
      needs: 'something sold this tax year at a taxable gain, and another investment in the taxable account, not yet sold, now worth less than was paid for it',
      aka: ['tax-loss harvesting'] },
    { id: 'burnrate', group: 'erosion', unit: 'u2',
      n: 'Spend a percentage of the pot',
      plain: 'the same sum taken out each year from a pot that has shrunk',
      needs: 'a fixed sum taken out to spend every year, set when the pot was worth more, and now a bigger share of a smaller pot',
      aka: ['a withdrawal rate', 'percentage withdrawals'] },
    { id: 'nocut', group: 'erosion', unit: 'u2', legit: true,
      n: 'Nothing to cut back',
      plain: 'yearly costs that are worth paying, or already as low as they can be',
      needs: 'money going out every year that is worth it or already as low as it can be, like a flat fee for real work, or spending already set as a percentage of the pot',
      aka: ['a cost worth paying'] },

    // One thing that could wipe it out: taught by Unit Three.
    { id: 'diversify', group: 'shock', unit: 'u3',
      n: 'Sell it off bit by bit',
      plain: 'one big holding, free to sell, that the owner does not run',
      needs: 'one company’s shares or one property that is most of what the person owns, nothing stopping them selling it, and no part for them in running it',
      aka: ['staged diversification'] },
    { id: 'hedge', group: 'shock', unit: 'u3',
      n: 'Cap the loss without selling',
      plain: 'one big holding that cannot be sold yet',
      needs: 'one company’s shares that are most of what the person owns, and a rule that stops them selling for a set time, such as shares paid as part of their wages',
      aka: ['hedging', 'a collar'] },
    { id: 'supports', group: 'shock', unit: 'u3',
      n: 'Put the three safety nets in place',
      plain: 'a business the owner runs, without what keeps it from taking everything',
      needs: 'a business the person runs day to day that is most of what they own, and at least one of the three safety nets missing',
      aka: [] },
    { id: 'insure', group: 'shock', unit: 'u3',
      n: 'Insure against a huge claim',
      plain: 'a claim that could cost far more than the insurance pays',
      needs: 'something in the person’s life that could bring a claim against them, like a car or a rented-out property, and a claim that could be far bigger than their insurance',
      aka: ['umbrella insurance', 'risk transfer'] },
    { id: 'entity', group: 'shock', unit: 'u3',
      n: 'One LLC per property or business',
      plain: 'several things that could bring a claim, all held in one name',
      needs: 'several properties or businesses that could each bring a claim, all held in the person’s own name, so that one claim could reach the rest and their home',
      aka: ['ring-fencing', 'entity separation'] },
    { id: 'deleverage', group: 'shock', unit: 'u3',
      n: 'Borrow less, on safer terms',
      plain: 'a loan that could force a sale at the worst moment',
      needs: 'a loan a lender could use to force a sale: one they can demand back at any time, one whose rate can jump, or one that is large next to what it is borrowed against',
      aka: [] },
    { id: 'safe', group: 'shock', unit: 'u3', legit: true,
      n: 'Safe as it stands',
      plain: 'one big thing the pot depends on, already made safe',
      needs: 'the one thing most of the pot depends on already made safe, like a business with all three safety nets in place, or insurance well above any claim that could come',
      aka: [] },

    // Prices falling at the wrong time: taught by Unit Four.
    { id: 'cashbuffer', group: 'timing', unit: 'u4',
      n: 'Years of spending in cash',
      plain: 'living on investments that have to be sold even in a fall',
      needs: 'living costs paid by selling shares or funds whose prices can fall, and no cash set aside to spend from while prices are down',
      aka: ['a cash buffer', 'a spending reserve'] },
    { id: 'ladder', group: 'timing', unit: 'u4',
      n: 'A bond for each bill',
      plain: 'a bill on a known date, paid from investments that can fall',
      needs: 'a bill of a known size due on a known date, and the money for it still in shares or funds whose prices can fall',
      aka: ['a bond ladder'] },
    { id: 'rebalance', group: 'timing', unit: 'u4',
      n: 'Rebalance by a written rule',
      plain: 'a mix that has drifted from its plan',
      needs: 'a mix the person chose, and the mix now well away from it, so that a fall would take more, or less, than they chose',
      aka: ['rebalancing'] },
    { id: 'covered', group: 'timing', unit: 'u4', legit: true,
      n: 'Already covered',
      plain: 'what is needed soon is already safe from a fall',
      needs: 'living costs, a bill or a mix that a fall could hit, already safe: the money needed in cash or bonds that repay in time, or the mix within its plan’s limits',
      aka: [] },

    // Handing it over: taught by Unit Five.
    { id: 'basicdocs', group: 'handover', unit: 'u5',
      n: 'Update the basic paperwork',
      plain: 'a will, a form or a power of attorney out of date or missing',
      needs: 'a will, a beneficiary form or a power of attorney that is missing or out of date, like one written before a marriage, a divorce or a birth',
      aka: ['putting your affairs in order'] },
    { id: 'gifting', group: 'handover', unit: 'u5',
      n: 'Give some away each year',
      plain: 'an estate above the tax-free limit, with money to spare',
      needs: 'an estate above the tax-free limit, more than the owner will need to live on, and nothing in it expected to shoot up in value',
      aka: ['lifetime gifting'] },
    { id: 'trust', group: 'handover', unit: 'u5',
      n: 'Move it out of the estate before it grows',
      plain: 'something about to shoot up in value, which tax at death would catch',
      needs: 'something the owner holds, such as a business or land, that is expected to shoot up in value, and an estate that is or will then be above the tax-free limit',
      aka: ['putting it in a trust', 'a family holding company'] },
    { id: 'governance', group: 'handover', unit: 'u5',
      n: 'Family rules for the money',
      plain: 'the people who will get it, or run it, could lose it',
      needs: 'a risk in the people who will get or run the money, like an heir in a failing marriage or who has struggled with money, or heirs who do not speak to each other',
      aka: ['family governance'] },
    { id: 'simple', group: 'handover', unit: 'u5', legit: true,
      n: 'Nothing more needed',
      plain: 'papers up to date, and nothing else about the handover at stake',
      needs: 'a will, beneficiary forms and a power of attorney all up to date, an estate below the tax-free limit or with nothing at stake, and nothing worrying about the people',
      aka: [] }
  ],

  terms: [
    // Unit One: the words the first question's answers are written in.
    { id: 'pot', unit: 'u1', n: 'the pot',
      means: 'all the money a person has built up and wants to keep: savings, investments, property, a share of a business. Not the pay that arrives each month' },
    { id: 'share', unit: 'u1', n: 'a share',
      means: 'a small part of the ownership of a company, bought and sold at a price that changes every day' },
    { id: 'fund', unit: 'u1', n: 'a fund',
      means: 'a basket of many investments bought in one go, for a yearly fee, whose price rises and falls with what is in it' },
    { id: 'bond', unit: 'u1', n: 'a bond',
      means: 'a loan to a government or a company that pays interest and repays a set amount on a set date. Held to that date, it pays exactly that amount, whatever its price did in between' },
    { id: 'mix', unit: 'u1', n: 'the mix',
      means: 'how the pot is split between shares, bonds and cash, such as 60% shares and 40% bonds. The plan is the split the person chose' },
    { id: 'claim', unit: 'u1', n: 'a claim',
      means: 'a demand, backed by the courts, that someone pay for harm they are said to have caused, such as an injury on their property or in a crash they caused' },
    // Unit Two.
    { id: 'indexfund', unit: 'u2', n: 'an index fund',
      means: 'a fund that simply holds every company on a published list, such as the largest companies in the US, with nobody choosing what to buy, so it charges very little' },
    { id: 'sheltered', unit: 'u2', n: 'a sheltered account',
      means: 'an account the law taxes less, or later, such as a 401(k), an IRA or a Roth IRA, with a yearly limit on what can be paid in. An ordinary brokerage account, taxed in full, is a taxable account' },
    { id: 'gain', unit: 'u2', n: 'a gain',
      means: 'how far something has risen above what was paid for it. Tax on a gain is usually due only when it is sold; until then it is a gain on paper. Sold after more than a year it is a long-term gain, taxed at a lower rate than a short-term gain on something held a year or less' },
    { id: 'compounding', unit: 'u2', n: 'compounding',
      means: 'growth on growth: each year’s growth is worked out on the money plus all the growth already added, so a cost taken every year also takes the growth that money would have earned' },
    // Unit Three.
    { id: 'holding', unit: 'u3', n: 'a holding',
      means: 'one investment someone owns: one company’s shares, one property or one business' },
    { id: 'threesupports', unit: 'u3', n: 'the three safety nets',
      means: 'what makes it safe to keep most of the pot in a business you run: everything else spread across many investments, several years of spending held outside the business, and no loan against its shares' },
    { id: 'company', unit: 'u3', n: 'an LLC',
      means: 'a company, common for small businesses and rental property, that the law treats as a person of its own: it owns things and owes its debts in its own name, so its owners do not normally pay those debts from their own money' },
    // Unit Four.
    { id: 'sequence', unit: 'u4', n: 'sequence risk',
      means: 'the harm done when a fall comes early, while money is being taken out, rather than later: more has to be sold at low prices, and what is sold is not there when prices come back' },
    // Unit Five.
    { id: 'estate', unit: 'u5', n: 'an estate',
      means: 'everything a person owns when they die. The federal estate tax takes a share of the part above a tax-free limit before the heirs get it, so only large estates pay it; some states tax smaller estates too' },
    { id: 'benform', unit: 'u5', n: 'a beneficiary form',
      means: 'a form held by the firm that runs a 401(k) or an IRA, by a life insurer or by a bank, that names who gets that account when its owner dies (a beneficiary designation). It is separate from the will, so changing the will does not change it' },
    { id: 'poa', unit: 'u5', n: 'a power of attorney',
      means: 'a signed document naming someone who may handle your money and affairs if you cannot, for example after a stroke' },
    { id: 'trustword', unit: 'u5', n: 'a trust',
      means: 'a setup in which a person or firm, the trustee, holds money or property for other people under written terms' }
  ],

  // Words the old lessons used that a newcomer could not follow (docs/comprehension-audit/wealth.md), words that meant two
  // things there, the old key's own wordings that this key replaces, and this subject's textbook words (section 20).
  avoid: [
    { word: 'realize', sayInstead: 'sell' },
    { word: 'realized', sayInstead: 'sold' },
    { word: 'unrealized', sayInstead: 'not sold, on paper' },
    { word: 'basis', sayInstead: 'what was paid for it' },
    { word: 'callable', sayInstead: 'can be demanded back' },
    { word: 'wrapper', sayInstead: 'the account or fund it sits in' },
    { word: 'capital', sayInstead: 'the pot' },
    { word: 'portfolio', sayInstead: 'the investments' },
    { word: 'net worth', sayInstead: 'everything the person owns' },
    { word: 'balance sheet', sayInstead: 'everything the person owns' },
    { word: 'allocation', sayInstead: 'the mix' },
    { word: 'equities', sayInstead: 'shares' },
    { word: 'liability', sayInstead: 'a claim, or a bill (the old lessons used it for both)' },
    { word: 'leverage', sayInstead: 'borrowing' },
    { word: 'tail', sayInstead: 'the big loss' },
    { word: 'burn rate', sayInstead: 'the sum taken out each year' },
    { word: 'drawdown', sayInstead: 'the sum taken out each year' },
    { word: 'deferral', sayInstead: 'delaying the tax' },
    { word: 'asset location', sayInstead: 'which account holds what' },
    { word: 'tranche', sayInstead: 'one of the sales' },
    { word: 'entity', sayInstead: 'company, or LLC' },
    { word: 'governance', sayInstead: 'family rules' },
    { word: 'matched', sayInstead: 'already covered, or a bond for each bill' },
    { word: 'exposure', sayInstead: 'what could hurt the pot' },
    { word: 'concentration', sayInstead: 'most of the pot in one thing' },
    { word: 'contributions', sayInstead: 'new money paid in' },
    { word: 'underweight', sayInstead: 'less than the plan' },
    { word: 'benchmark', sayInstead: 'the list an index fund follows' },
    { word: 'main danger', sayInstead: 'what could lose this money (the first question)' },
    { word: 'threat', sayInstead: 'what could lose the money' },
    { word: 'diagnostic', sayInstead: 'the question' },
    { word: 'falsify', sayInstead: 'what would make it a different name' },
    // Added with the plain-words rewrite (section 20): textbook words, and the key's own old wordings.
    { word: 'structure', sayInstead: 'say what it is: a trust, an LLC, a contract' },
    { word: 'arrangement', sayInstead: 'say what it is: a trust, an LLC, the mix' },
    { word: 'asset', sayInstead: 'say what it is: shares, a property, a business' },
    { word: 'assets', sayInstead: 'what the person owns' },
    { word: 'volatility', sayInstead: 'how far prices swing' },
    { word: 'liquidity', sayInstead: 'how fast it can be turned into cash' },
    { word: 'mitigate', sayInstead: 'cut, or make smaller' },
    { word: 'optimize', sayInstead: 'say what changes: pay less tax, pay lower fees' },
    { word: 'erosion', sayInstead: 'money going out every year' },
    { word: 'the three supports', sayInstead: 'the three safety nets' },
    { word: 'a fall in prices it is not ready for', sayInstead: 'prices falling at the wrong time' },
    { word: 'the handover to other people', sayInstead: 'handing it over' }
  ],

  // THE GATE: the first question of the key, taught by Unit One. Its five answers are that unit's families.
  // Tie-breaks are data (yieldsTo): prices falling gives way to one thing that could wipe the pot out, and to the two
  // things taken out every year that a fall only makes worse. The fifth answer needs no tie-break: its "when" already
  // requires that the story show none of the other four.
  gate: {
    code: 'D1', unit: 'u1',
    q: 'What could lose this money?',
    why: 'Each of the four loses money a different way and has a different fix, so this answer decides what to ask next. It tells you where to look, not that something is wrong: in each of the four, the risk may already be taken care of.',
    options: [
      { id: 'erosion', n: 'Money going out every year',
        plain: 'fees, tax or spending that take a bite out of the pot every year',
        needs: 'money going out of the pot every year: fees for funds or advice, tax on the investments, or a sum taken out to spend',
        when: 'money goes out of the pot every year: fees charged by funds or an adviser, tax on the investments, or a sum taken out to spend',
        keeps: ['feecore', 'location', 'defer', 'harvest', 'burnrate', 'nocut'],
        aka: ['a slow leak'] },
      { id: 'shock', n: 'One thing that could wipe it out',
        plain: 'one stock, property, business, lawsuit or loan that could take most of the pot at once',
        needs: 'one thing that could take most of the pot at once: one company or property that is most of it, a claim that could reach everything, or a lender who could force a sale',
        when: 'most of the pot depends on one thing: one company or property that is most of it, a claim that could reach everything they own, or a lender who could force a sale',
        keeps: ['diversify', 'hedge', 'supports', 'insure', 'entity', 'deleverage', 'safe'],
        aka: ['concentration risk'] },
      { id: 'timing', n: 'Prices falling at the wrong time',
        plain: 'share and fund prices falling just when the money is needed',
        needs: 'shares or funds whose prices can fall, and something a fall would hit: living costs paid from them, a bill due on a set date, or a mix drifted from its plan',
        when: 'a fall in prices would hurt because of what the money has to pay for or how it is split: living costs, a bill due on a set date, or a mix drifted from its plan',
        keeps: ['cashbuffer', 'ladder', 'rebalance', 'covered'],
        yieldsTo: [{ option: 'shock', say: 'one thing that most of the pot depends on' },
                   { option: 'erosion', say: 'the same sum taken out every year from a pot that has shrunk, or a sale to fix the mix that would bring a tax bill new money could avoid' }],
        aka: ['bad timing'] },
      { id: 'handover', n: 'Handing it over',
        plain: 'what happens when the owner dies, gets too ill to act, or gives money to family',
        needs: 'a time when the money passes to other people or someone else has to handle it: a death, an illness that stops the owner acting, or gifts to family',
        when: 'the money passes to others when the owner dies, can no longer manage it or gives it away, and the question is who gets it, the tax on it, the papers, or the people',
        keeps: ['basicdocs', 'gifting', 'trust', 'governance', 'simple'],
        aka: [] },
      { id: 'none', n: 'Nothing could lose it', legit: true,
        plain: 'money put away, with nothing in the story that could lose it',
        needs: 'money being kept, and none of the other four: nothing going out that should not, nothing most of it depends on, nothing to pay soon, and no handover coming',
        when: 'money is being kept, and none of the other four show up: no needless fee or tax, nothing most of it depends on, no bill or drifted mix, and no handover coming',
        keeps: [],    // no branch: after this answer the key asks nothing more, and gives no further name
        aka: [] }
    ]
  },

  // A branch is a list of one, two or three questions. Each of these has one: every name in a branch is defined by one
  // thing the story shows, and each answer leads to one name (K2.2).
  branches: {
    // Money going out every year. Unit Two teaches it.
    erosion: [
      { code: 'E1', unit: 'u2',
        q: 'What is taking money out of it?',
        why: 'Each answer has its own fix, and one fix does nothing for another: cheaper funds do not lower a tax bill, and moving investments between accounts does not change how much is spent. So look at what is taking the money out, not at how big the sum is or who is involved.',
        options: [
          { id: 'picking', n: 'A yearly fee for picking investments',
            when: 'a yearly fee for picking investments, far more than an index fund would take, pays for nothing else, or grows with the pot while the other work it pays for does not',
            keeps: ['feecore'] },
          { id: 'incometax', n: 'Yearly tax on income in the taxable account',
            when: 'investments that pay income every year, like rent or interest, are taxed in the taxable account while the sheltered account has room or holds ones that pay little',
            keeps: ['location'] },
          { id: 'needlesssale', n: 'Tax on a sale that does not have to happen',
            when: 'a sale is planned of something now worth more than was paid for it, it would bring a tax bill on the gain, and nothing needs the sale',
            keeps: ['defer'] },
          { id: 'gainloss', n: 'Tax on a gain, with a loss left unsold',
            when: 'something was sold this tax year at a gain that will be taxed, and another investment in the taxable account, not yet sold, is worth less than was paid for it',
            keeps: ['harvest'] },
          { id: 'fixedsum', n: 'The same yearly sum from a pot that has shrunk',
            when: 'a fixed sum is taken out to spend every year, it was set when the pot was worth more, and it is now a bigger share of a smaller pot',
            keeps: ['burnrate'] },
          { id: 'nomore', n: 'Nothing more than it should',
            when: 'what comes out each year is worth it or already as low as it can be, like a flat fee for real work, and none of the other five show up',
            keeps: ['nocut'] }
        ] }
    ],

    // One thing that could wipe it out. Unit Three teaches it.
    shock: [
      { code: 'S1', unit: 'u3',
        q: 'What one thing could take most of it?',
        why: 'The fix depends on what the one thing is and what the person can do about it: whether they can sell it, whether they run it, and whether a claim or a lender could reach everything. One fix leaves the others where they were.',
        options: [
          { id: 'freeheld', n: 'One holding they can sell and do not run',
            when: 'one company’s shares or one property is most of what the person owns, nothing stops them selling it, and they take no part in running it',
            keeps: ['diversify'] },
          { id: 'blocked', n: 'One holding they are not allowed to sell yet',
            when: 'one company’s shares are most of what the person owns, and a rule stops them selling for a set time, such as shares paid as part of their wages',
            keeps: ['hedge'] },
          { id: 'ownrun', n: 'A business they run, missing a safety net',
            when: 'a business the person runs is most of what they own, and at least one of the three safety nets is missing, such as years of spending held outside the business',
            keeps: ['supports'] },
          { id: 'bigclaim', n: 'A claim bigger than their insurance',
            when: 'something in the person’s life could bring a claim against them, like a car or a rented-out property, and that claim could be far bigger than their insurance',
            keeps: ['insure'] },
          { id: 'onename', n: 'Several properties or businesses, all in their own name',
            when: 'the person owns several properties or businesses that could each bring a claim, all held in their own name, so one claim could reach the rest and their home',
            keeps: ['entity'],
            yieldsTo: [{ option: 'bigclaim', say: 'a claim that could be far bigger than the insurance they hold' }] },
          { id: 'riskyloan', n: 'A loan the lender could use to force a sale',
            when: 'a loan’s lender can demand it back at any time, or its rate can jump, or it is large next to what it is borrowed against, so a fall in prices could force a sale',
            keeps: ['deleverage'],
            yieldsTo: [{ option: 'ownrun', say: 'a business they run, with one of the three safety nets missing' }] },
          { id: 'madesafe', n: 'Nothing: it is already safe',
            when: 'the one big thing is already made safe, like a business with all three safety nets in place or insurance well above any claim, and none of the other six show up',
            keeps: ['safe'] }
        ] }
    ],

    // Prices falling at the wrong time. Unit Four teaches it.
    timing: [
      { code: 'T1', unit: 'u4',
        q: 'Why would a fall in prices hurt right now?',
        why: 'Each answer has its own fix, and none of them is a guess about where prices go next. When the money needed soon is already safe, a fall does no lasting harm, because nothing has to be sold while prices are down.',
        options: [
          { id: 'livingcosts', n: 'They live by selling investments that can fall',
            when: 'the person lives on money from selling shares or funds whose prices can fall, and has no cash set aside to spend from while prices are down',
            keeps: ['cashbuffer'] },
          { id: 'datedbill', n: 'A known bill on a known date, paid from investments that can fall',
            when: 'a bill of a known size is due on a known date, and the money for it is still in shares or funds whose prices can fall',
            keeps: ['ladder'] },
          { id: 'drifted', n: 'The mix has drifted from its plan',
            when: 'the person chose a mix, and it has drifted well away from it, so that a fall would take more, or less, than they chose',
            keeps: ['rebalance'],
            yieldsTo: [{ option: 'livingcosts', say: 'living costs paid by selling investments that can fall' },
                       { option: 'datedbill', say: 'a bill of a known size on a known date, with the money for it in investments that can fall' }] },
          { id: 'ready', n: 'It would not: the money needed soon is already safe',
            when: 'the money for living costs or a coming bill is already in cash or in bonds that repay in time, or the mix is within its plan, and none of the other three show up',
            keeps: ['covered'] }
        ] }
    ],

    // Handing it over. Unit Five teaches it. Papers come first: when a story shows papers out of date or missing as
    // well as something else, the key's answer is the papers (the cheapest fix, and the one every other needs).
    handover: [
      { code: 'H1', unit: 'u5',
        q: 'What could go wrong when it is handed over?',
        why: 'Each answer has its own fix, and one fix does nothing for another: new papers do not lower a tax bill, and a gift does not stop heirs falling out. Anything set up for a problem nobody has costs money every year and solves nothing.',
        options: [
          { id: 'papers', n: 'The will or other papers are out of date or missing',
            when: 'the will, a beneficiary form or a power of attorney is missing, names someone it should no longer name, or was written before a marriage, a divorce or a birth',
            keeps: ['basicdocs'] },
          { id: 'bigestate', n: 'Estate tax, with money to spare',
            when: 'the estate is above the tax-free limit for estate tax, the owner has more than they will need, and nothing in it is expected to shoot up in value',
            keeps: ['gifting'],
            yieldsTo: [{ option: 'papers', say: 'papers that are out of date or missing' },
                       { option: 'growth', say: 'something expected to shoot up in value' }] },
          { id: 'growth', n: 'Estate tax on something about to shoot up in value',
            when: 'something the owner holds is expected to shoot up in value, and the estate is or will then be above the tax-free limit, so the rise would be taxed at death',
            keeps: ['trust'],
            yieldsTo: [{ option: 'papers', say: 'papers that are out of date or missing' }] },
          { id: 'people', n: 'The people who will get it or run it',
            when: 'there is a risk in the people, like an heir in a failing marriage or who has struggled with money, or heirs who do not speak to each other',
            keeps: ['governance'],
            yieldsTo: [{ option: 'papers', say: 'papers that are out of date or missing' }] },
          { id: 'inorder', n: 'Nothing: the papers are up to date and nothing else is at stake',
            when: 'the will, beneficiary forms and power of attorney are up to date, the estate is below the tax-free limit or nothing is at stake, and the people raise no worry',
            keeps: ['simple'] }
        ] }
    ]
  }
});
