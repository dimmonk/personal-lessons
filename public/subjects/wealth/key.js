// Wealth Preservation: the key. THE ONLY PLACE this subject's vocabulary is typed (lesson standard K1).
// Outcome names, question text, answer text, and the plain / needs / purpose / why / when lines are written here once.
// Cards, checks, drills, feedback and verdicts refer to them by token and never retype them:
//   {o:id} name   {plain:id} plain words   {needs:id} what you must be able to point to
//   {q:STEP} question   {a:STEP.option} answer   {when:STEP.option} when to give it   {t:id} term   {means:id} its meaning
//
// Field guide (lesson standard S1)
//   outcomes[].n      the one fixed name shown everywhere. Every name but the five "leave it alone" ones is what to do
//                     about the case; the leave-alone names say that nothing needs doing
//   outcomes[].plain  a few ordinary words: the preview map, and the heading of the card that introduces the name
//   outcomes[].needs  what you must be able to point to in a case before the name can be used.
//                     Printed on the meet card, the recap and the reference screen, and in feedback.
//   outcomes[].aka    other words real life uses for the same thing; shown once, on the card that introduces the name
//   outcomes[].legit  true on a name where nothing in the case needs doing (action subject, lesson standard P26)
//   terms[]           taught words that are not key wording; each has one term card in the unit named
//   avoid[]           words this subject's authored text must not use, with what to say instead (P4 requires 2)
//   steps[].q         the question, exactly as it is asked
//   steps[].purpose   what the question sorts
//   steps[].why       why that distinction decides
//   options[].n       the answer, exactly as it is shown
//   options[].when    what a case must show for this answer. Printed as "Give this answer when <when>."
//   options[].keeps   the outcome ids this answer leaves possible
//   options[].yieldsTo  the key's tie-break, as data: when a case shows this answer AND the one named, the named one wins
// Step codes (D1, E1, S1, T1, H1) and ids are for the data. They are never shown to the learner (K3).
//
//   gate options also carry plain and needs: the gate's answers are Unit One's families (lesson standard A15).
//                     A family's name is its answer text. It is printed by {a:D1.option}; its plain words and what you
//                     must be able to point to are printed by {plain:option} and {needs:option}.
//
// The rule for "nothing is threatening this money" lives in two places in the key, one for each kind of sound case:
//   - the gate's fifth answer, for a case that points to nothing that could lose the money at all (legit, no branch);
//   - the last answer of each branch, for a case that points to one thing that could lose it, and shows it already
//     taken care of. Each of those four names is legit, and its needs line is the stated rule for its kind.
// Each branch asks ONE question: every name in a branch is defined by one thing the case shows, so a second question
// would only repeat the first (K2.2, V55). See docs/rebuild/wealth-plan.md for every change from the old key and why.

FC.key('wealth', {
  outcomes: [
    // Something taken out of it every year: taught by Unit Two.
    { id: 'feecore', group: 'erosion', unit: 'u2',
      n: 'Switch to index funds',
      plain: 'paying a lot every year for someone to pick the investments',
      needs: 'a charge taken from the pot every year for choosing investments (by fund managers, an adviser or both), far more than an index fund charges, and either nothing else in the case that the charge pays for, or other work it pays for that does not grow as the pot grows while the charge does',
      aka: ['a low-cost core', 'passive investing'] },
    { id: 'location', group: 'erosion', unit: 'u2',
      n: 'Right account for each investment',
      plain: 'income taxed every year because it sits in the wrong account',
      needs: 'a sheltered account and a taxable account, investments that pay out income every year held in the taxable account and taxed on that income, and a sheltered account holding investments that pay out little, or with room to spare',
      aka: ['asset location'] },
    { id: 'defer', group: 'erosion', unit: 'u2',
      n: 'Delay the tax by not selling',
      plain: 'a tax bill from a sale nobody needs to make',
      needs: 'something now worth more than was paid for it, a plan to sell some of it that would bring a tax bill on the gain, and nothing in the case that needs the sale: new money could do the same job, or there is no reason to sell',
      aka: ['deferring the tax on a gain'] },
    { id: 'harvest', group: 'erosion', unit: 'u2',
      n: 'Use a loss to cut tax',
      plain: 'a gain taxed this year, while another investment sits below what it cost',
      needs: 'something sold this tax year for more than was paid for it, so that the gain will be taxed, and another investment in the taxable account, not yet sold, now worth less than was paid for it',
      aka: ['tax-loss harvesting'] },
    { id: 'burnrate', group: 'erosion', unit: 'u2',
      n: 'Spend a percentage of the pot',
      plain: 'the same sum taken out each year from a pot that has shrunk',
      needs: 'a fixed sum of money taken out to spend every year, set when the pot was worth more, and now a bigger share of a smaller pot',
      aka: ['a withdrawal rate', 'percentage withdrawals'] },
    { id: 'nocut', group: 'erosion', unit: 'u2', legit: true,
      n: 'Nothing to cut back',
      plain: 'yearly costs that are worth paying, or already as low as they can be',
      needs: 'something taken out of the pot every year, and the case showing it is worth it or already as low as it can be: a charge for work that would not otherwise get done, at a set price that does not grow with the pot; investments that pay out income already in the sheltered account; or spending reset each year as a share of what the pot is worth',
      aka: ['a cost worth paying'] },

    // One thing most of it depends on: taught by Unit Three.
    { id: 'diversify', group: 'shock', unit: 'u3',
      n: 'Sell down on a schedule',
      plain: 'one big holding, free to sell, that the owner does not run',
      needs: 'one company’s shares or one property that is most of what the person owns, nothing stopping them selling it, and no part for them in running it',
      aka: ['staged diversification'] },
    { id: 'hedge', group: 'shock', unit: 'u3',
      n: 'Cap the loss without selling',
      plain: 'one big holding that cannot be sold yet',
      needs: 'one company’s shares that are most of what the person owns, and a rule that stops them selling for a set time, such as after the company first sells its shares to the public, or for shares paid as part of their wages',
      aka: ['hedging', 'a collar'] },
    { id: 'supports', group: 'shock', unit: 'u3',
      n: 'Put the three supports in place',
      plain: 'a business the owner runs, without what makes keeping it safe',
      needs: 'a business the person runs day to day that is most of what they own, and at least one of the three supports missing',
      aka: [] },
    { id: 'insure', group: 'shock', unit: 'u3',
      n: 'Insure the big loss',
      plain: 'a claim that could cost far more than the insurance pays',
      needs: 'something in the person’s life that could bring a claim against them (a car, a home, a pool, a property rented out), and a claim that could be far bigger than the insurance they hold',
      aka: ['umbrella insurance', 'risk transfer'] },
    { id: 'entity', group: 'shock', unit: 'u3',
      n: 'Separate companies for each property or business',
      plain: 'several things that could bring a claim, all held in one name',
      needs: 'several properties or businesses that could each bring a claim, all held in the person’s own name, so that one claim could reach the rest and their home',
      aka: ['ring-fencing', 'entity separation'] },
    { id: 'deleverage', group: 'shock', unit: 'u3',
      n: 'Borrow modestly, on safe terms',
      plain: 'a loan that could force a sale at the worst moment',
      needs: 'a loan a lender could use to force a sale: one they can demand back, or ask more to be put up against, at any time; one whose rate can jump; or one that is large against what it is borrowed against',
      aka: [] },
    { id: 'safe', group: 'shock', unit: 'u3', legit: true,
      n: 'Safe as it stands',
      plain: 'one big thing the pot depends on, already made safe',
      needs: 'one thing that most of the pot depends on, or that could bring a claim or force a sale, and the case showing it already made safe: a business the person runs with all three supports in place, insurance well above any claim the case shows could come, properties or businesses already held in separate companies, or a loan that is modest, at a fixed rate and cannot be demanded back while it is paid',
      aka: [] },

    // A fall in prices it is not ready for: taught by Unit Four.
    { id: 'cashbuffer', group: 'timing', unit: 'u4',
      n: 'Years of spending in cash',
      plain: 'living on investments that have to be sold even in a fall',
      needs: 'living costs paid by selling shares or funds whose prices can fall, and no cash set aside to spend from while prices are down',
      aka: ['a cash buffer', 'a spending reserve'] },
    { id: 'ladder', group: 'timing', unit: 'u4',
      n: 'A bond for each bill',
      plain: 'a bill on a known date, paid from investments that can fall',
      needs: 'a bill of a known size that falls due on a known date, and the money for it still in shares or funds whose prices can fall',
      aka: ['a bond ladder'] },
    { id: 'rebalance', group: 'timing', unit: 'u4',
      n: 'Rebalance by written rule',
      plain: 'a mix that has moved away from its plan',
      needs: 'a mix the person chose, and the case showing it has moved well away from it, so that a fall would take more, or less, than they chose',
      aka: ['rebalancing'] },
    { id: 'covered', group: 'timing', unit: 'u4', legit: true,
      n: 'Already covered',
      plain: 'what is needed soon is already safe from a fall',
      needs: 'living costs, a bill or a mix that a fall could catch out, and the case showing it already safe: the money for the costs or the bill already in cash or in bonds that repay before it is needed, or the mix within the limits its plan allows, so that a fall would force no sale',
      aka: [] },

    // The handover to other people: taught by Unit Five.
    { id: 'basicdocs', group: 'handover', unit: 'u5',
      n: 'Update the basic paperwork',
      plain: 'a will, a form or a power of attorney out of date or missing',
      needs: 'a will, a beneficiary form or a power of attorney that is missing, or out of date: naming someone it should no longer name, or written before a marriage, a divorce, a birth or a death',
      aka: ['putting your affairs in order'] },
    { id: 'gifting', group: 'handover', unit: 'u5',
      n: 'Give some away each year',
      plain: 'an estate above the tax-free limit, with money to spare',
      needs: 'an estate above the tax-free limit, more than the owner will need to live on, and nothing in it expected to rise sharply in value',
      aka: ['lifetime gifting'] },
    { id: 'trust', group: 'handover', unit: 'u5',
      n: 'Move it out of the estate before it grows',
      plain: 'something about to rise sharply in value, which tax at death would catch',
      needs: 'something the owner holds, such as a business or land, that is expected to rise sharply in value, and an estate that is or will then be above the tax-free limit',
      aka: ['putting it in a trust', 'a family holding company'] },
    { id: 'governance', group: 'handover', unit: 'u5',
      n: 'Family rules for the money',
      plain: 'the people who will receive it, or run it, could lose it',
      needs: 'a risk in the people who will receive or run the money: someone who will inherit who is about to marry or is in a failing marriage, someone who has struggled with money or work, heirs who do not speak to each other, or control passing to people who cannot agree',
      aka: ['family governance'] },
    { id: 'simple', group: 'handover', unit: 'u5', legit: true,
      n: 'Nothing more needed',
      plain: 'current papers, and nothing else about the handover in question',
      needs: 'a will, beneficiary forms and a power of attorney that are all current, an estate below the tax-free limit or with nothing in it in question, and nothing in the case about the people',
      aka: [] }
  ],

  terms: [
    // Unit One: the words the first question's answers are written in.
    { id: 'pot', unit: 'u1', n: 'the pot',
      means: 'all the money a person has built up and wants to keep: savings, investments, property, a share of a business. Not the pay that arrives each month' },
    { id: 'share', unit: 'u1', n: 'a share',
      means: 'a small part of the ownership of a company, bought and sold at a price that changes every day' },
    { id: 'fund', unit: 'u1', n: 'a fund',
      means: 'a basket of many investments bought in one go, for a yearly charge, whose price rises and falls with what is in it' },
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
    { id: 'threesupports', unit: 'u3', n: 'the three supports',
      means: 'what makes it safe to keep most of the pot in a business you run: everything else spread across many investments, several years of spending held outside the business, and no loan against its shares' },
    { id: 'company', unit: 'u3', n: 'an LLC',
      means: 'a kind of company, common for small businesses and rental property, that the law treats as a person of its own: it owns things and owes its debts in its own name, so its owners do not normally pay those debts from their own money' },
    // Unit Four.
    { id: 'sequence', unit: 'u4', n: 'sequence risk',
      means: 'the harm done when a fall comes early, while money is being taken out, rather than later: more has to be sold at low prices, and what is sold is not there when prices come back' },
    // Unit Five.
    { id: 'estate', unit: 'u5', n: 'an estate',
      means: 'everything a person owns when they die. The federal estate tax takes a share of the part above a tax-free limit before the people who inherit receive it, so only large estates pay it; some states tax smaller estates too' },
    { id: 'benform', unit: 'u5', n: 'a beneficiary form',
      means: 'a form held by the firm that runs a 401(k) or an IRA, by a life insurer or by a bank, that names who should receive that account when its owner dies (a beneficiary designation). It is separate from the will, so changing the will does not change it' },
    { id: 'poa', unit: 'u5', n: 'a power of attorney',
      means: 'a signed document naming someone who may handle your money and affairs if you cannot, for example after a stroke' },
    { id: 'trustword', unit: 'u5', n: 'a trust',
      means: 'an arrangement in which a person or firm, the trustee, holds money or property for other people under written terms' }
  ],

  // Words the old lessons used that a newcomer could not follow (docs/comprehension-audit/wealth.md), words that meant two
  // things there, and the old key's own wordings that this key replaces.
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
    { word: 'entity', sayInstead: 'company' },
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
    { word: 'falsify', sayInstead: 'what would make it a different name' }
  ],

  // THE GATE: the first question of the key, taught by Unit One. Its five answers are that unit's families.
  // Tie-breaks are data (yieldsTo): a fall in prices gives way to one thing most of the pot depends on, and to the two
  // things taken out every year that a fall only makes worse. The fifth answer needs no tie-break: its "when" already
  // requires that the case show none of the other four.
  gate: {
    code: 'D1', unit: 'u1',
    q: 'What could lose this money?',
    purpose: 'Sorts the four ways money that has been built up can be lost (a little every year, all at once through one thing, in a fall in prices it is not ready for, and when it is handed over) from the case in which nothing could lose it',
    why: 'Each of the four is lost in a different way and is put right by different means, so the question that comes next depends on this answer, and after the fifth answer there is none. This answer says where to look, not that something is wrong: in each of the four there are cases where the thing that could lose the money is in the case, and the case shows it already taken care of.',
    options: [
      { id: 'erosion', n: 'Something taken out of it every year',
        plain: 'small sums going out of what a person has built up, every year',
        needs: 'something taken out of the pot every year: a charge for funds or advice, tax on the investments, or a sum taken out to spend',
        when: 'the case is about something taken out of the pot every year: what funds, an adviser or the firm that holds the investments charge, tax on the investments, or a sum taken out to spend',
        keeps: ['feecore', 'location', 'defer', 'harvest', 'burnrate', 'nocut'],
        aka: ['a slow leak'] },
      { id: 'shock', n: 'One thing most of it depends on',
        plain: 'one thing that could take most of what a person has built up, at once',
        needs: 'one thing that could take most of the pot at once: one company’s shares, one property or one business that is most of it, a claim that could reach everything the person owns, or a loan whose lender could force a sale',
        when: 'the case is about one thing that most of the pot depends on: one company’s shares, one property or one business that makes up most of it, a claim that could reach everything the person owns, or a loan whose lender could demand the money back and force a sale',
        keeps: ['diversify', 'hedge', 'supports', 'insure', 'entity', 'deleverage', 'safe'],
        aka: ['concentration risk'] },
      { id: 'timing', n: 'A fall in prices it is not ready for',
        plain: 'prices falling just when the money is needed',
        needs: 'shares or funds whose prices can fall, and something in the case that a fall would catch out: living costs paid from them, a bill on a date, or a mix that has moved from its plan',
        when: 'the case is about what a fall in the prices of shares and funds would do, because of what the money has to pay for or how it is split: living costs taken out of it, a bill that falls due on a date, or a mix that has moved away from its plan',
        keeps: ['cashbuffer', 'ladder', 'rebalance', 'covered'],
        yieldsTo: [{ option: 'shock', say: 'one thing that most of the pot depends on' },
                   { option: 'erosion', say: 'the same sum taken out every year from a pot that has shrunk, or a sale planned to put the mix back that would bring a tax bill new money could avoid' }],
        aka: ['bad timing'] },
      { id: 'handover', n: 'The handover to other people',
        plain: 'what happens when the money passes on, or someone else has to act for its owner',
        needs: 'a time when the money passes to other people or someone else has to handle it: a death, an illness that stops the owner acting, or gifts to family',
        when: 'the case is about what happens to the pot when its owner dies or can no longer handle it, or when it is passed to family during the owner’s life: who receives it, the tax on it, the papers that say who gets what, and how the people who receive it will behave',
        keeps: ['basicdocs', 'gifting', 'trust', 'governance', 'simple'],
        aka: [] },
      { id: 'none', n: 'Nothing in the case', legit: true,
        plain: 'money put away, with nothing in the case that could lose it',
        needs: 'money being kept, and nothing in the case that could lose it: no charge, tax or spending the case raises, nothing most of it depends on, nothing it has to pay for soon, and no handover in view',
        when: 'the case shows money being kept and none of the things the other four answers ask about: no charge, tax or spending that the case raises, nothing most of the pot depends on, no living costs or bill to pay from it soon and no mix away from its plan, and no handover in view',
        keeps: [],    // no branch: after this answer the key asks nothing more, and gives no further name
        aka: [] }
    ]
  },

  // A branch is a list of one, two or three questions. Each of these has one: every name in a branch is defined by one
  // thing the case shows, and each answer leads to one name (K2.2).
  branches: {
    // Something taken out of it every year. Unit Two teaches it.
    erosion: [
      { code: 'E1', unit: 'u2',
        q: 'What is taking money out of it?',
        purpose: 'Tells apart five things that take more out of the pot each year than they need to, and the case where what comes out is worth it or already as low as it can be',
        why: 'Each of the six answers has its own fix, and a fix for one does nothing for another: cheaper funds do not lower a tax bill, and moving investments between accounts does not change how much is spent. So the name comes from what the case shows taking the money out, not from how large the sum is or who is involved.',
        options: [
          { id: 'picking', n: 'A yearly charge for picking investments',
            when: 'fund managers, an adviser or both take a share of the pot every year for choosing investments, the charge is far more than an index fund would take, and either the case shows no other work the charge pays for, or the charge grows with the pot while the other work it pays for does not',
            keeps: ['feecore'] },
          { id: 'incometax', n: 'Yearly tax on income from investments in the taxable account',
            when: 'the person has a sheltered account and a taxable account, the investments that pay out income every year (interest, payouts from companies, or rent) sit in the taxable account and are taxed every year, and the sheltered account holds investments that pay out little or has room to spare',
            keeps: ['location'] },
          { id: 'needlesssale', n: 'Tax on a sale that does not have to happen',
            when: 'a sale is planned of something now worth more than was paid for it, the sale would bring a tax bill on the gain, and the case shows nothing that needs the sale: new money could do the same job, or there is no reason to sell',
            keeps: ['defer'] },
          { id: 'gainloss', n: 'Tax on this year’s gain, while another investment sits below what it cost',
            when: 'something has been sold this tax year for more than was paid for it, so the gain will be taxed, and another investment in the taxable account, not yet sold, is now worth less than was paid for it',
            keeps: ['harvest'] },
          { id: 'fixedsum', n: 'The same sum taken out every year from a pot that has shrunk',
            when: 'a fixed sum of money is taken out to spend every year, it was set when the pot was worth more, and it is now a bigger share of a smaller pot',
            keeps: ['burnrate'] },
          { id: 'nomore', n: 'Nothing more than it should',
            when: 'what the case shows coming out each year is worth it or already as low as it can be: a charge for work that would not otherwise get done, at a set price that does not grow with the pot; investments that pay out income already in the sheltered account; or spending reset each year as a share of what the pot is worth. The case shows none of the other five',
            keeps: ['nocut'] }
        ] }
    ],

    // One thing most of it depends on. Unit Three teaches it.
    shock: [
      { code: 'S1', unit: 'u3',
        q: 'What one thing could take most of it?',
        purpose: 'Tells apart six ways one thing could take most of the pot at once, and the case where that one thing is already made safe',
        why: 'The fix depends on what the one thing is and what the person can do about it, as the case shows it: whether they can sell it, whether they run it, and whether a claim or a lender could reach everything. A fix for one leaves the others where they were.',
        options: [
          { id: 'freeheld', n: 'One holding they can sell and do not run',
            when: 'one company’s shares or one property is most of what the person owns, nothing stops them selling it, and they take no part in running it',
            keeps: ['diversify'] },
          { id: 'blocked', n: 'One holding they are not allowed to sell yet',
            when: 'one company’s shares are most of what the person owns, and a rule stops them selling for a set time, such as after the company first sells its shares to the public, or for shares paid as part of their wages',
            keeps: ['hedge'] },
          { id: 'ownrun', n: 'A business they run, with a support missing',
            when: 'a business the person runs day to day is most of what they own, and at least one of the three supports is missing: what else they own is not spread across many investments, or there are not several years of spending held outside the business, or there is a loan against its shares',
            keeps: ['supports'] },
          { id: 'bigclaim', n: 'A claim bigger than the insurance they hold',
            when: 'something in the person’s life could bring a claim against them (a car, a home, a pool, a property rented out), and the case shows a claim could be far bigger than the insurance they hold',
            keeps: ['insure'] },
          { id: 'onename', n: 'Several properties or businesses, all in their own name',
            when: 'the person owns several properties or businesses that could each bring a claim, all held in their own name, so one claim could reach the rest and their home',
            keeps: ['entity'],
            yieldsTo: [{ option: 'bigclaim', say: 'a claim that could be far bigger than the insurance they hold' }] },
          { id: 'riskyloan', n: 'A loan the lender could use to force a sale',
            when: 'the case shows a loan whose lender can demand it back, or ask for more to be put up against it, at any time; or whose rate can jump; or that is large against what it is borrowed against, so that a fall in prices could force a sale at the worst moment',
            keeps: ['deleverage'],
            yieldsTo: [{ option: 'ownrun', say: 'a business they run, with one of the three supports missing' }] },
          { id: 'madesafe', n: 'Nothing: it is already made safe',
            when: 'the one thing the case shows is already made safe: a business the person runs with all three supports in place, insurance well above any claim the case shows could come, properties or businesses already held in separate companies, or a loan that is modest, at a fixed rate and cannot be demanded back while it is paid. The case shows none of the other six',
            keeps: ['safe'] }
        ] }
    ],

    // A fall in prices it is not ready for. Unit Four teaches it.
    timing: [
      { code: 'T1', unit: 'u4',
        q: 'Why would a fall in prices hurt this money now?',
        purpose: 'Tells apart three reasons a fall in prices would force a sale at low prices, and the case where a fall would force nothing',
        why: 'Each of the three has its own fix, and none of them is a guess about where prices go next. Which one the case shows decides the name. When what is needed is already safe, a fall does no lasting harm, because nothing has to be sold while prices are down.',
        options: [
          { id: 'livingcosts', n: 'Living costs are paid by selling investments that can fall',
            when: 'the person lives on money taken from the pot, raised by selling shares or funds whose prices can fall, and the case shows no cash set aside to spend from while prices are down',
            keeps: ['cashbuffer'] },
          { id: 'datedbill', n: 'A bill of a known size falls due on a known date, and the money for it can fall',
            when: 'a bill of a known size falls due on a known date, and the money for it is still in shares or funds whose prices can fall',
            keeps: ['ladder'] },
          { id: 'drifted', n: 'The mix has moved away from its plan',
            when: 'the person chose a mix, and the case shows it has moved well away from it, so that a fall would take more, or less, than they chose',
            keeps: ['rebalance'],
            yieldsTo: [{ option: 'livingcosts', say: 'living costs paid by selling investments that can fall' },
                       { option: 'datedbill', say: 'a bill of a known size on a known date, with the money for it in investments that can fall' }] },
          { id: 'ready', n: 'It would not: what is needed is already safe from a fall',
            when: 'the money for living costs or a coming bill is already in cash, or in bonds that repay before it is needed, or the mix is within the limits its plan allows, so a fall would force no sale. The case shows none of the other three',
            keeps: ['covered'] }
        ] }
    ],

    // The handover to other people. Unit Five teaches it. Papers come first: when a case shows papers out of date or
    // missing as well as something else, the key's answer is the papers (the cheapest fix, and the one every other needs).
    handover: [
      { code: 'H1', unit: 'u5',
        q: 'What could go wrong when it is handed over?',
        purpose: 'Tells apart four things that can go wrong when the pot passes to other people or someone has to act for its owner, and the case where nothing more needs doing',
        why: 'Each of the four has its own fix, and a fix for one does nothing for another: new papers do not lower a tax bill, and a gift does not stop heirs falling out. Anything set up for a problem the case does not show costs money every year and solves nothing.',
        options: [
          { id: 'papers', n: 'The papers that say who gets it, or who can act, are out of date or missing',
            when: 'the will, a beneficiary form or a power of attorney is missing, or names someone it should no longer name, or was written before a change such as a marriage, a divorce, a birth or a death',
            keeps: ['basicdocs'] },
          { id: 'bigestate', n: 'Tax on an estate above the tax-free limit, with more than the owner needs',
            when: 'the estate is above the tax-free limit for the estate tax charged at death, the owner has more than they will need to live on, and nothing in it is expected to rise sharply in value',
            keeps: ['gifting'],
            yieldsTo: [{ option: 'papers', say: 'papers that are out of date or missing' },
                       { option: 'growth', say: 'something expected to rise sharply in value' }] },
          { id: 'growth', n: 'Tax on a sharp rise still to come in something the owner holds',
            when: 'something the owner holds, such as a business or land, is expected to rise sharply in value, and the estate is or will then be above the tax-free limit, so the rise would be taxed at death',
            keeps: ['trust'],
            yieldsTo: [{ option: 'papers', say: 'papers that are out of date or missing' }] },
          { id: 'people', n: 'The people who will receive it or run it',
            when: 'the case shows a risk in the people: someone who will inherit who is about to marry or is in a failing marriage, someone who has struggled with money or work, heirs who do not speak to each other, or control that will pass to people who cannot agree',
            keeps: ['governance'],
            yieldsTo: [{ option: 'papers', say: 'papers that are out of date or missing' }] },
          { id: 'inorder', n: 'Nothing: the papers are current and nothing else is in question',
            when: 'the will, the beneficiary forms and the power of attorney are all current, the estate is below the tax-free limit or nothing in it is in question, and the case shows no risk in the people. The case shows none of the other four',
            keeps: ['simple'] }
        ] }
    ]
  }
});
