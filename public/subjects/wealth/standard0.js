/* ===================== SUBJECT: WEALTH PRESERVATION ===================== */

const WEALTH_OUTCOMES = [
  {id:'feecore',    n:'Low-cost core',                group:'erosion'},
  {id:'location',   n:'Asset location',               group:'erosion'},
  {id:'defer',      n:'Deferral of gains',            group:'erosion'},
  {id:'harvest',    n:'Loss harvesting',              group:'erosion'},
  {id:'burnrate',   n:'Fixed burn rate',              group:'erosion'},
  {id:'acceptcost', n:'A cost worth paying',          group:'erosion'},
  {id:'diversify',  n:'Staged diversification',       group:'shock'},
  {id:'hedge',      n:'Hedging without selling',      group:'shock'},
  {id:'insure',     n:'Risk transfer by insurance',   group:'shock'},
  {id:'entity',     n:'Entity separation',            group:'shock'},
  {id:'deleverage', n:'Leverage discipline',          group:'shock'},
  {id:'retain',     n:'Concentration held deliberately', group:'shock'},
  {id:'cashbuffer', n:'Spending reserve',             group:'timing'},
  {id:'ladder',     n:'Liability matching',           group:'timing'},
  {id:'rebalance',  n:'Mechanical rebalancing',       group:'timing'},
  {id:'matched',    n:'Already matched',              group:'timing'},
  {id:'trust',      n:'Trust or holding structure',   group:'succession'},
  {id:'gifting',    n:'Lifetime gifting',             group:'succession'},
  {id:'governance', n:'Family governance',            group:'succession'},
  {id:'basicdocs',  n:'Basic documents current',      group:'succession'},
  {id:'simple',     n:'No structure needed',          group:'succession'}
];

const WEALTH_GATE = { code:'P1', label:'What threatens the capital here?', options:[
  { id:'erosion',    n:'A leak that compounds',      sub:'fees, tax paid early, spending',
    keeps:['feecore','location','defer','harvest','burnrate','acceptcost'] },
  { id:'shock',      n:'A single event could end it', sub:'concentration, liability, borrowing',
    keeps:['diversify','hedge','insure','entity','deleverage','retain'] },
  { id:'timing',     n:'Being forced to act at the wrong moment', sub:'solvent, but selling into a fall',
    keeps:['cashbuffer','ladder','rebalance','matched'] },
  { id:'succession', n:'The money outlives the arrangement', sub:'transfer, heirs, control',
    keeps:['trust','gifting','governance','basicdocs','simple'] }
]};

const WEALTH_STEPS_BY_GATE = {
  erosion: [
    { code:'E1', label:'Where is the leak', options:[
        {id:'fees',    n:'The cost of the wrapper — fees and spreads',      keeps:['feecore']},
        {id:'taxnow',  n:'Tax paid sooner than it had to be',               keeps:['location','defer','harvest']},
        {id:'spend',   n:'Withdrawals running ahead of the capital',        keeps:['burnrate']},
        {id:'worthit', n:'Nothing is leaking — the charge buys something real', keeps:['acceptcost']}
    ]},
    { code:'E2', label:'What answers it', options:[
        {id:'indexcore', n:'Move the core to something costing a tenth as much', keeps:['feecore']},
        {id:'whichacct', n:'Put the tax-inefficient assets in the sheltered account', keeps:['location']},
        {id:'dontsell',  n:'Stop realising gains that did not need realising',  keeps:['defer']},
        {id:'uselosses', n:'Realise losses deliberately, to offset gains',      keeps:['harvest']},
        {id:'fixedpct',  n:'Fix withdrawals as a share of capital, reviewed yearly', keeps:['burnrate']},
        {id:'nothing_e', n:'Nothing — you would have to do the work regardless', keeps:['acceptcost']}
    ]}
  ],
  shock: [
    { code:'S1', label:'Where is the single point of failure', options:[
        {id:'oneasset',  n:'One holding is most of the balance sheet',      keeps:['diversify','hedge','retain']},
        {id:'liability', n:'One event could create a claim against everything', keeps:['insure','entity']},
        {id:'borrowed',  n:'Borrowed money can force the outcome',          keeps:['deleverage']}
    ]},
    { code:'S2', label:'What is actually done about it', options:[
        {id:'staged',    n:'Sold down on a schedule, accepting the tax',    keeps:['diversify']},
        {id:'capped',    n:'Downside capped without selling',               keeps:['hedge']},
        {id:'eyesopen',  n:'Kept — it is the thing they actually run',      keeps:['retain']},
        {id:'transfer',  n:'The tail is handed to an insurer for a premium',keeps:['insure']},
        {id:'ringfence', n:'Assets separated so one claim cannot reach the rest', keeps:['entity']},
        {id:'terms',     n:'Borrowing kept modest, fixed and not callable', keeps:['deleverage']}
    ]}
  ],
  timing: [
    { code:'T1', label:'What could force the decision', options:[
        {id:'drawdown',  n:'Spending has to come out during a fall',        keeps:['cashbuffer']},
        {id:'datefixed', n:'A known bill lands on a known date',            keeps:['ladder']},
        {id:'drift',     n:'Nothing forces it — the mix has simply drifted',keeps:['rebalance']},
        {id:'nothing_t', n:'Nothing — the money is already where the liability is', keeps:['matched']}
    ]},
    { code:'T2', label:'What removes the force', options:[
        {id:'yearscash', n:'Years of spending held in cash and short bonds',keeps:['cashbuffer']},
        {id:'maturity',  n:'An instrument that matures when the bill arrives', keeps:['ladder']},
        {id:'bands',     n:'A written rule that trades back to target at set bands', keeps:['rebalance']},
        {id:'nothing_t2',n:'Nothing — the match already holds',             keeps:['matched']}
    ]}
  ],
  succession: [
    { code:'U1', label:'What is at risk in the handover', options:[
        {id:'taxdeath',  n:'Tax on the transfer, or the growth that will be taxed', keeps:['trust','gifting']},
        {id:'people',    n:'The heirs, or the people around them',          keeps:['governance']},
        {id:'paperwork', n:'Nothing complex — the basic documents are stale or missing', keeps:['basicdocs']},
        {id:'nothing_u', n:'Nothing — the estate is simple and current',    keeps:['simple']}
    ]},
    { code:'U2', label:'What is put in place', options:[
        {id:'structure', n:'Ownership moved into a structure with a trustee and terms', keeps:['trust']},
        {id:'giveearly', n:'Value moved out during life, while it is still small', keeps:['gifting']},
        {id:'rules',     n:'Agreements, staged distributions, a named decision-maker', keeps:['governance']},
        {id:'basics',    n:'A current will, named beneficiaries, a power of attorney', keeps:['basicdocs']},
        {id:'nothing_u2',n:'Nothing — a will already covers it',            keeps:['simple']}
    ]}
  ]
};

const X1_OPTS = ['A leak that compounds','A single event could end it','Being forced to act at the wrong moment','The money outlives the arrangement'];
const X1_DRILL = [
  {q:'A portfolio of £3m sits in actively managed funds charging 1.6% all-in. Performance is roughly in line with the index before costs.',
   a:'A leak that compounds', w:'Nothing dramatic happens in any single year, which is exactly why it runs for thirty of them. 1.6% of capital is close to half of a 3.5% real return.'},
  {q:'Eighty percent of a family’s net worth is stock in the employer of both spouses, and the mortgage is on a margin loan against it.',
   a:'A single event could end it', w:'One company’s bad quarter takes the shares, the jobs and the collateral at once. Correlated exposures that look like three things are one thing.'},
  {q:'A retiree draws living costs by selling equities each month. The market is down 30% and the sales are larger in units than last year.',
   a:'Being forced to act at the wrong moment', w:'The portfolio is solvent and the holdings are sound. The damage comes from the requirement to sell on a date they did not choose.'},
  {q:'A widowed parent holds everything in sole name, the will predates two grandchildren, and nobody else knows where the accounts are.',
   a:'The money outlives the arrangement', w:'The market risk is fine. The failure is administrative and lands on people at the worst possible moment.'},
  {q:'A business owner takes 9% of the portfolio a year to fund living costs, having assumed the business would be sold by now.',
   a:'A leak that compounds', w:'Spending is a leak like any other, and the only one fully within the household’s control.'},
  {q:'A landlord holds six properties personally, and a tenant injury claim at one of them would reach the other five and the family home.',
   a:'A single event could end it', w:'The properties are fine individually. The exposure is that nothing separates them.'}
];

const X2_OPTS = ['Low-cost core','Asset location','Deferral of gains','Loss harvesting','Fixed burn rate','A cost worth paying'];
const X2_DRILL = [
  {q:'The taxable account holds the index fund and the tax-sheltered account holds the bond fund and the property trust, because the second pair throws off income that would be taxed yearly.',
   a:'Asset location', w:'The same portfolio, in the same proportions, arranged so the tax-inefficient parts sit where tax does not reach them.'},
  {q:'They moved the core holding from a 1.4% active fund to a 0.07% index fund and kept the allocation identical.',
   a:'Low-cost core', w:'The one lever with a guaranteed return: a cost avoided is kept in full, whereas outperformance is a hope.'},
  {q:'Positions with large unrealised gains are held rather than rebalanced through sales, and new contributions are used to bring the allocation back instead.',
   a:'Deferral of gains', w:'Tax not yet paid stays invested and compounds. Directing new money rather than selling is how the allocation is fixed without triggering it.'},
  {q:'In a falling year they sold the losing holding, booked the loss against realised gains elsewhere, and bought a similar but not identical fund the same day.',
   a:'Loss harvesting', w:'The exposure is maintained while the loss is banked. The "similar but not identical" detail is what keeps it from being disallowed.'},
  {q:'Withdrawals are set each January at 3.5% of the portfolio’s value on the first trading day, and the household adjusts spending to that number rather than the reverse.',
   a:'Fixed burn rate', w:'Spending is defined as a share of capital rather than a habit, so it falls automatically in bad years — which is the mechanism that makes it survivable.'},
  {q:'They pay a flat annual fee to an adviser who does the tax planning, the rebalancing and the estate paperwork they would otherwise skip.',
   a:'A cost worth paying', w:'A charge that buys work you would genuinely not do is not a leak. Flat and disclosed is the part that matters — ask how the person is paid.'}
];

const X3_OPTS = ['Staged diversification','Hedging without selling','Risk transfer by insurance','Entity separation','Leverage discipline','Concentration held deliberately'];
const X3_DRILL = [
  {q:'After the IPO lockup, they sell a fixed tranche each quarter for three years regardless of price, paying the tax as it falls due.',
   a:'Staged diversification', w:'Mechanical and price-blind, which is what stops it becoming a timing decision they will not make.'},
  {q:'Rather than sell the founder stake, they buy puts and sell calls around it, capping the downside and the upside for the next two years.',
   a:'Hedging without selling', w:'Used where selling is restricted or the tax is prohibitive. It buys time, at a cost, and does not remove the exposure.'},
  {q:'Each rental property sits in its own limited company, and the family home is in neither.',
   a:'Entity separation', w:'A claim arising at one property meets the assets of that company and stops there.'},
  {q:'They carry a £5m umbrella liability policy costing a few hundred a year on top of the standard cover.',
   a:'Risk transfer by insurance', w:'Cheap precisely because the event is unlikely. This is insurance used correctly — for the tail that would be ruinous, not the loss that would be annoying.'},
  {q:'The mortgage is fixed for ten years at 45% of the property’s value, and no borrowing is secured against the portfolio.',
   a:'Leverage discipline', w:'Fixed, modest and not callable. The failure mode of leverage is not the rate — it is being required to settle at the moment of maximum stress.'},
  {q:'The founder keeps 70% of her wealth in the company she runs day to day, having diversified everything else and holding three years of spending outside it.',
   a:'Concentration held deliberately', w:'You cannot diversify away the business you actively control, and pretending otherwise is not preservation. What makes it defensible is that everything around it is diversified.'}
];

const X4_OPTS = ['Spending reserve','Liability matching','Mechanical rebalancing','Already matched'];
const X4_DRILL = [
  {q:'Three years of living costs sit in cash and short government bonds, and equities are sold only in years the market is up.',
   a:'Spending reserve', w:'The buffer exists so that no month’s spending ever depends on the price that month. It is the single answer to sequence risk.'},
  {q:'School fees due each September are covered by bonds maturing that August, year by year.',
   a:'Liability matching', w:'A known amount on a known date meets an instrument that pays out on that date. No market view is required or taken.'},
  {q:'A written rule trades the portfolio back to target whenever any asset class drifts more than five points from its weight.',
   a:'Mechanical rebalancing', w:'The rule exists to make the decision in advance, when nobody is frightened. Its value is behavioural before it is mathematical.'},
  {q:'A house deposit needed in four months is already sitting in a savings account, and the rest of the portfolio is untouched.',
   a:'Already matched', w:'Nothing needs restructuring. Recognising the cases that need no action is part of the skill.'}
];

const X5_OPTS = ['Trust or holding structure','Lifetime gifting','Family governance','Basic documents current','No structure needed'];
const X5_DRILL = [
  {q:'Shares in the private company were settled into a trust before the growth, so the appreciation accrues outside the founder’s estate.',
   a:'Trust or holding structure', w:'The point is the timing: value is moved while it is small, so the growth happens on the other side of the line.'},
  {q:'Each parent gives the annual tax-free allowance to each child every year, and has done for eleven years.',
   a:'Lifetime gifting', w:'Unspectacular per year and substantial over a decade, using an allowance that does not accumulate if unused.'},
  {q:'Distributions are staged at 25, 30 and 35, a non-family trustee holds a veto, and the children have sat in on the annual review since their teens.',
   a:'Family governance', w:'This addresses the heirs rather than the tax. Most wealth that disappears in the second generation disappears through people, not rates.'},
  {q:'The will is eleven years old, the pension beneficiary form still names a former spouse, and nobody holds a power of attorney.',
   a:'Basic documents current', w:'The beneficiary form usually overrides the will, so this one error can redirect the largest single asset. The cheapest fix in the whole course.'},
  {q:'A couple in their thirties with a mortgage, two pensions and no dependants have current wills and named beneficiaries.',
   a:'No structure needed', w:'Trusts and companies here would cost real money to solve a problem that does not exist. Most people are sold structure long before they need it.'}
];

const WEALTH_ERR = [
  {q:'Rich people don’t pay tax.',
   w:'Mostly they defer it and locate it. Gains that are never realised are never taxed as income, and in step-up regimes the basis resets at death — which is a feature of how the law defines income, not evasion. Saying "they don’t pay" skips the mechanism, and the mechanism is the part you could use.'},
  {q:'You need offshore structures and a private bank to do any of this.',
   w:'Below a few million, structures cost more in fees and filing than they save, and the practices that do most of the work — low fees, a fixed burn rate, current beneficiary forms, a cash buffer — are free or nearly so. Complexity is sold because it is profitable to sell, not because it is load-bearing.'},
  {q:'Diversification is protection against ignorance.',
   w:'A real quotation, applied to the wrong job. Concentration is how nearly every large fortune was built; diversification is how it is kept. Those are different activities with different rules, and the person quoting this is usually still in the first one.'},
  {q:'Seventy percent of wealthy families lose it by the second generation.',
   w:'That figure traces to a single consulting firm’s survey of its own clients, and has been repeated for decades without an independent replication. Run it through the sampling questions — who got counted, and who did the counting — before repeating it.'},
  {q:'I don’t need a cash buffer — I’ll just sell when I need the money.',
   w:'That works until the month you need it is a month the market is down 30%, which is when withdrawals do permanent damage. The buffer is not an investment decision; it is a device for never being forced into one.'},
  {q:'My house is my best investment.',
   w:'It is a leveraged, illiquid, undiversified holding that pays no income and charges maintenance, insurance and tax. It may still be the right thing to own, for reasons that have nothing to do with returns. Compare it to what it actually is, not to a savings account.'},
  {q:'It’s only a 1% fee.',
   w:'Against a 3–4% expected real return, 1% of capital is a quarter to a third of the return, taken annually whether or not the return happens. Over thirty years that is a materially different ending number. Percentages of capital and percentages of return are not the same unit.'},
  {q:'Whole-life insurance is a great investment.',
   w:'It bundles risk transfer with an investment account and a commission. Priced separately, term insurance covers the risk and an index fund does the investing, for a fraction of the total. Bundling is what makes the comparison hard, which is generally why things are bundled.'}
];

const WEALTH_SPECIMENS = [
  {q:'A £4m portfolio has sat with the same wealth manager for fifteen years: 0.9% to the manager, 0.8% average fund charge, and a platform fee on top. Returns have tracked the benchmark before costs and trailed it after. The proposal is to keep the same allocation and move the core holdings to index funds at 0.07%.',
   sub:{P1:['erosion'],E1:['fees'],E2:['indexcore']},outcome:'feecore',
   why:'Nothing here is dramatic in any single year, which is why it survives fifteen of them. Against a long-run real return of 3–4%, 1.7% of capital is roughly half the return, charged annually whether or not the return arrives. It is also the only lever in this course whose benefit is certain — a cost avoided is kept in full, while outperformance is a hope.',
   fals:'If the fee were buying tax work, estate paperwork and a rebalancing rule the household would otherwise skip, this is a cost worth paying rather than a leak. Ask what the fee buys, not what it costs.'},

  {q:'The same household holds index equities, a corporate bond fund and a property trust across a taxable account and a tax-sheltered one. The bonds and the property trust — which distribute income taxed every year — sit in the taxable account, while the equities they intend to hold for twenty years sit in the shelter.',
   sub:{P1:['erosion'],E1:['taxnow'],E2:['whichacct']},outcome:'location',
   why:'The allocation is right and the arrangement is backwards. Assets throwing off annually taxed income belong where tax does not reach them; assets whose return is unrealised appreciation are already sheltered by the act of holding them. Swapping the two changes no market exposure and no risk, and costs nothing.',
   fals:'If both accounts carried the same tax treatment, the question would not arise. This is a practice that exists only because different wrappers are taxed differently.'},

  {q:'A holding bought at £80,000 is now worth £600,000 and has drifted to 14% of the portfolio against a 10% target. Rather than sell £180,000 and realise the gain, the next two years of contributions are directed entirely into the underweight assets until the weights come back.',
   sub:{P1:['erosion'],E1:['taxnow'],E2:['dontsell']},outcome:'defer',
   why:'Tax deferred is capital still working. A gain realised is a permanent transfer out of the portfolio, whereas a gain merely held keeps compounding on the untaxed amount — and in regimes with a basis step-up at death, may never be taxed as income at all. Directing new money is how the allocation is corrected without triggering the event.',
   fals:'Deferral stops being free when the concentration itself becomes the risk. A position at 40% of net worth is a shock problem, and the tax is then a price worth paying to fix it.'},

  {q:'In a year when markets fell, they sold a fund showing a £40,000 loss, set it against gains realised elsewhere that year, and bought a different fund tracking a similar but not identical index the same afternoon. Market exposure was unchanged throughout.',
   sub:{P1:['erosion'],E1:['taxnow'],E2:['uselosses']},outcome:'harvest',
   why:'The loss is converted into a real reduction in this year’s tax while the position in the market is maintained. The "similar but not identical" detail is the whole operation — buy the same fund back too quickly and most tax authorities disallow the loss.',
   fals:'This does not create value on its own; it moves tax forward in time by lowering the basis. The benefit is the use of the money in the meantime, which is worth having and is not the same as a free gain.'},

  {q:'A household with £2.4m invested has been drawing £180,000 a year, set when the portfolio was worth £3.1m and never revisited. The plan is to redefine the draw as 3.5% of the portfolio’s value each January, and to adjust spending to that figure rather than the other way round.',
   sub:{P1:['erosion'],E1:['spend'],E2:['fixedpct']},outcome:'burnrate',
   why:'Spending is the only leak entirely within the household’s control, and a draw fixed in pounds does its worst damage exactly when the portfolio is smallest. Defining it as a share of capital makes it fall automatically in bad years, which is the mechanism that makes it survivable — and it is why endowments, which intend to exist forever, are run this way.',
   fals:'A draw covered by genuinely stable income — a pension, a long lease — is a different case. The rule addresses withdrawals from volatile capital.'},

  {q:'A family pays a flat £9,000 a year to an adviser who runs the annual rebalance, handles the tax filings and the loss harvesting, keeps the estate documents current, and talked them out of selling in two separate falls. They hold index funds and the adviser takes no commission from anything.',
   sub:{P1:['erosion'],E1:['worthit'],E2:['nothing_e']},outcome:'acceptcost',
   why:'Flat, disclosed, and buying work that would otherwise not happen — including the part that is hardest to price, which is being talked out of a decision at the moment it would have done the most damage. A charge is only a leak when nothing arrives in return.',
   fals:'The same service charged as a percentage of assets, or paid for by commission on products sold, changes the analysis entirely: the cost scales with the portfolio while the work does not, and the incentive stops pointing at you.'},

  {q:'After a lockup expires, a founder’s stake is 68% of her net worth. She sets a schedule selling a fixed number of shares each quarter for three years, executed automatically regardless of price, and accepts the tax as it falls due.',
   sub:{P1:['shock'],S1:['oneasset'],S2:['staged']},outcome:'diversify',
   why:'Concentration is how the wealth was made and is the most common way it is lost, and those two facts are not in tension — they describe different stages. The schedule is mechanical and price-blind on purpose: a discretionary plan to sell "when it recovers" is a timing decision, and it is the decision people reliably fail to make.',
   fals:'If she still ran the company day to day, keeping a large stake would be a deliberate retention rather than a failure to diversify — provided everything around it was diversified and liquid.'},

  {q:'An executive cannot sell for two more years under the terms of her award. She buys put options below the current price and sells calls above it, capping her loss and her gain over that window, at a net cost of a little over 1% a year.',
   sub:{P1:['shock'],S1:['oneasset'],S2:['capped']},outcome:'hedge',
   why:'Where selling is restricted or the tax cost is prohibitive, the exposure can be bounded without transferring the asset. It buys survival through a window rather than solving the concentration, and it is not free — the ceiling given up is a real cost, paid whether or not the floor is ever needed.',
   fals:'If she could simply sell, hedging would usually be the more expensive route to a worse outcome. These instruments earn their cost only where a sale is genuinely blocked.'},

  {q:'A family with £6m in assets carries a £5m umbrella liability policy over their home, car and rental cover. It costs a few hundred pounds a year, and the events it covers — a serious injury claim, a catastrophic driving fault — are individually very unlikely.',
   sub:{P1:['shock'],S1:['liability'],S2:['transfer']},outcome:'insure',
   why:'This is insurance used the way it actually works: cheap because the event is rare, bought because the event would be unrecoverable. The discipline is to insure the tail that ends you and self-insure everything you could absorb — which is the reverse of how most households buy cover, extended warranties and low deductibles included.',
   fals:'A policy bundling an investment account into the cover is a different product being sold under the same word, and should be priced as two things.'},

  {q:'Six rental properties are each held in a separate limited company, none of which owns any other. The family home is held personally and outside all of them. A tenant injury claim at one property would meet that company’s assets and stop there.',
   sub:{P1:['shock'],S1:['liability'],S2:['ringfence']},outcome:'entity',
   why:'The exposure was never any individual property — it was that nothing separated them, so a single event could reach everything. Separation converts a claim against the family into a claim against one asset, and is the reason property portfolios are held this way almost universally above a certain size.',
   fals:'Separation is defeated if the entities are not respected in practice — commingled accounts, personal guarantees on the borrowing, or a single insurance policy across all of them will collapse the distinction when it matters.'},

  {q:'A household borrows only against property, fixed for ten years, at 45% of value, with no clause allowing the lender to demand repayment while payments are current. Nothing is borrowed against the investment portfolio.',
   sub:{P1:['shock'],S1:['borrowed'],S2:['terms']},outcome:'deleverage',
   why:'The failure mode of leverage is almost never the interest rate — it is being required to settle at the moment of maximum stress, which is when collateral values and incomes fall together. Fixed, modest and not callable removes the mechanism by which borrowing turns a fall into a permanent loss. A margin loan against a portfolio is the opposite on every count.',
   fals:'Cheap non-callable borrowing against a diversified balance sheet can be entirely rational, including as a way of funding spending without realising gains. The terms carry the judgement, not the existence of debt.'},

  {q:'A founder who runs her company day to day holds 70% of her wealth in it. The other 30% is in a global index fund she never touches, three years of household spending sits in cash outside the business, and the family home carries no borrowing secured against company stock.',
   sub:{P1:['shock'],S1:['oneasset'],S2:['eyesopen']},outcome:'retain',
   why:'You cannot diversify away the business you actively control, and treating that as a failure produces advice nobody follows. What makes the position defensible is everything around it: the non-business assets are diversified, the spending reserve is outside the company, and no borrowing links the two. The concentration is chosen and ring-fenced rather than unexamined.',
   fals:'Remove any of the three supports — spending dependent on company cash flow, or a loan secured on the stock — and this becomes an unmanaged concentration wearing the language of conviction.'},

  {q:'A retired couple keep three years of living costs in cash and short government bonds, replenished from equities only in years the market finished higher. In the two years it did not, they spent from the reserve and sold nothing.',
   sub:{P1:['timing'],T1:['drawdown'],T2:['yearscash']},outcome:'cashbuffer',
   why:'Two portfolios with identical average returns can end very differently depending on the order the returns arrive, if money is being withdrawn — selling into a fall converts a temporary decline into a permanent reduction in the number of units owned. The reserve exists so that no month’s spending ever depends on that month’s price. It is the single most effective answer to sequence risk.',
   fals:'Holding cash costs real return, and the buffer is genuinely a drag in the years nothing goes wrong. That is the premium; the alternative is being a forced seller at the worst moment.'},

  {q:'School fees of £24,000 fall due each September for the next six years. The family holds six government bonds, one maturing each August, in the amounts required.',
   sub:{P1:['timing'],T1:['datefixed'],T2:['maturity']},outcome:'ladder',
   why:'A known amount on a known date is met by an instrument that pays out on that date, so no market view is taken and none is needed. This is the quiet workhorse of preservation: every liability with a date attached can be removed from the risk conversation entirely.',
   fals:'It only works for liabilities that are genuinely fixed in size and date. An open-ended obligation — care costs, a business needing capital at an unknown moment — needs liquidity rather than maturity matching.'},

  {q:'After a strong run, equities have drifted from a 60% target to 71%. A written policy says any asset class more than five points from target is traded back on the next rebalancing date, and it is executed without discussion.',
   sub:{P1:['timing'],T1:['drift'],T2:['bands']},outcome:'rebalance',
   why:'Nothing is forcing action, which is precisely why a rule is needed: drift raises risk silently, and the correction always feels wrong at the moment it is due, since it means selling what has done well. The value of writing it down in advance is behavioural before it is mathematical — it makes the decision when nobody is frightened or euphoric.',
   fals:'In a taxable account, rebalancing by selling can cost more in tax than the risk reduction is worth. Directing new contributions and dividends to the underweight assets achieves the same thing without the event.'},

  {q:'A deposit of £70,000 is needed in four months for a house purchase that is already under offer. It is sitting in an instant-access savings account, and the rest of the household’s portfolio is invested as usual and untouched.',
   sub:{P1:['timing'],T1:['nothing_t'],T2:['nothing_t2']},outcome:'matched',
   why:'Money needed in months is held in something that cannot fall, and money not needed for decades is invested. The match already holds and no restructuring is called for. Recognising the cases that need no action is part of the discipline — most of the damage in this category is done by investing short-dated money to avoid the feeling of it sitting idle.',
   fals:'If the purchase date were genuinely unknown and possibly years away, the answer changes, because the horizon is what determines the right home for the money.'},

  {q:'Before a private company’s value grew, the founder settled his shares into a trust with a professional trustee and fixed terms. The company is now worth many times what it was at the transfer, and that growth has accrued inside the trust rather than in his estate.',
   sub:{P1:['succession'],U1:['taxdeath'],U2:['structure']},outcome:'trust',
   why:'The timing is the entire technique: value is moved across the line while it is small, so all subsequent growth happens on the other side of it. The trustee and the terms also do a second job, deciding who receives what and when — which matters independently of tax, and is why structures are used in places with no estate tax at all.',
   fals:'Trusts are irrevocable in substance, cost real money to run, and hand control to a trustee. Below the threshold where the tax saved exceeds those costs they are a product being sold rather than a solution.'},

  {q:'Two parents each give the annual tax-free allowance to each of their three children every year, and have done so for eleven years. Nothing is dramatic in any single year, and none of it returns to the estate.',
   sub:{P1:['succession'],U1:['taxdeath'],U2:['giveearly']},outcome:'gifting',
   why:'The allowance does not accumulate — an unused year is gone — so the practice is defined by starting early and never skipping. It is the most boring item in this course and, across a decade with several recipients, moves a substantial sum out of an estate with no structure, no professional fees and no loss of flexibility beyond the gift itself.',
   fals:'Gifts made shortly before death are pulled back into the estate in most jurisdictions, and giving away capital you may need is the commonest way this goes wrong. The technique is time, and time is the part that cannot be bought later.'},

  {q:'A family with substantial assets stages distributions at 25, 30 and 35, appoints a non-family trustee holding a veto, requires prenuptial agreements before any marital transfer, and has had the children in the annual review meeting since their mid-teens.',
   sub:{P1:['succession'],U1:['people'],U2:['rules']},outcome:'governance',
   why:'This addresses the heirs rather than the rates, and it is the part most families skip because it is uncomfortable rather than difficult. Wealth that disappears in the second generation typically goes through divorce, a failed business run by someone unprepared, or a single person with unilateral control — none of which a tax structure touches. Staged distribution and an outside veto exist to make an irreversible decision harder to take alone.',
   fals:'Governance imposed without explanation produces the resentment it was meant to prevent. The part doing the work here is the fifteen years of sitting in the meeting, not the veto.'},

  {q:'A widowed parent’s will is eleven years old and predates two grandchildren. The pension beneficiary form still names a former spouse. Nobody holds a power of attorney, and no list of accounts exists anywhere.',
   sub:{P1:['succession'],U1:['paperwork'],U2:['basics']},outcome:'basicdocs',
   why:'The pension beneficiary nomination usually overrides the will entirely, so this single stale form can send the largest asset to the wrong person no matter what the will says. Every item here is fixable in an afternoon for almost nothing, which is what makes it the highest return on effort in the course — and the absent power of attorney is the one that bites while the person is still alive.',
   fals:'Nothing about this is contingent on wealth. The same four documents are the answer at every level of assets.'},

  {q:'A couple in their thirties have a mortgage, two workplace pensions and an index fund. There is no business, no property portfolio and no dependant with particular needs. They have current wills, named beneficiaries on both pensions, and powers of attorney. An adviser has proposed a family trust and a holding company.',
   sub:{P1:['succession'],U1:['nothing_u'],U2:['nothing_u2']},outcome:'simple',
   why:'The documents already do the job, and a trust and company here would add annual filing, accountancy fees and irreversibility to solve a problem that does not exist at this size. Most people are sold structure a decade or more before they need it, because structure is profitable to sell and its uselessness is not visible for years.',
   fals:'A business with outside shareholders, property held in several names, an estate near the tax threshold, or a dependant needing lifelong provision each change this answer — that is when structure starts earning its cost.'}
];

const WEALTH_COURSE = [
{ tag:'One', title:'Keeping is not making',
  cards:[
  {h:'Two different jobs',
   b:`<p class="lead">Almost every large fortune was built by concentration — one business, one holding, one bet, worked at for years. Almost every large fortune that disappears, disappears the same way.</p>
      <p>That is not a contradiction. Building and keeping are different activities with opposite rules, and the mistake that matters is running the wrong one for where you are. Preservation rules applied during accumulation mean you never accumulate; accumulation habits applied to capital you cannot replace are how people end up starting again at fifty-five.</p>
      <p>This course is about the second job only. It assumes the money exists and asks what actually threatens it.</p>
      <div class="note">Throughout, a right label reached by the wrong route counts as a miss. If you cannot say <i>which threat</i> a practice answers, you have memorised a tactic and will apply it to the wrong situation.</div>`},
  {h:'The four threats',
   b:`<table class="k">
      <tr><th>P1</th><td><b>A leak that compounds</b><br>fees, tax paid earlier than required, spending<span class="tell">Never urgent, which is why it runs for thirty years.</span></td></tr>
      <tr><th>P2</th><td><b>A single event that could end it</b><br>concentration, liability, borrowing<span class="tell">Fine every year until the one year it is not.</span></td></tr>
      <tr><th>P3</th><td><b>Being forced to act at the wrong moment</b><br>selling into a fall to fund a bill<span class="tell">Solvent the whole time, and permanently poorer afterwards.</span></td></tr>
      <tr><th>P4</th><td><b>The money outliving the arrangement</b><br>transfer, heirs, control<span class="tell">The market risk was never the problem.</span></td></tr>
      </table>
      <p>Every practice in this course answers exactly one of these. That is how you tell whether you need it.</p>`},
  {h:'Start with the threat, not the product',
   b:`<p>The financial industry is organised around products, so its advice arrives as products: a structure, a wrapper, a policy, a fund. Run backwards from the product and you will always find a reason you need it, because someone was paid to construct one.</p>
      <p>Run forwards from the threat and most of the catalogue disappears. A couple with two pensions and a mortgage has a leak problem and a paperwork problem. They do not have a structure problem, and a trust sold to them solves nothing at an annual cost.</p>
      <div class="warn"><strong>Every category in this course contains an outcome meaning "nothing is needed here."</strong> Four of the twenty-one specimens resolve that way. Recognising them is the part that saves the most money.</div>`},
  {h:'What actually does the work',
   b:`<p>Ranked by how much they matter against how much they cost, the practices that survive at every level of wealth are unglamorous:</p>
      <ul>
        <li><b>Pay less in fees</b> — the only certain return available to anyone.</li>
        <li><b>Define spending as a share of capital</b>, not a habit inherited from a better year.</li>
        <li><b>Keep the basic documents current</b> — will, beneficiary forms, power of attorney.</li>
        <li><b>Hold a spending reserve</b>, so you are never a forced seller.</li>
      </ul>
      <p>None of these require scale, an adviser, or a jurisdiction. Everything else in this course is conditional on size, circumstance and the tax code where you live.</p>`}
  ],
  drill:{kind:'pick', key:'x1'} },

{ tag:'Two', title:'Leaks that compound',
  cards:[
  {h:'The arithmetic that makes this the first unit',
   b:`<p class="lead">A long-run real return of 3–4% is a reasonable planning assumption for a diversified portfolio. Against that, a 1% annual fee is not one percent of anything that matters — it is a quarter to a third of the return, taken every year whether or not the return arrives.</p>
      <p>This is the error the industry depends on: percentages of capital feel small because they are quoted against the capital, while the thing you actually receive is the return. Convert every charge into a share of expected return before judging it.</p>`},
  {h:'The five leaks and their answers',
   b:`<table class="k">
      <tr><th>A</th><td><b>Fees</b> → a low-cost core<span class="tell">A cost avoided is kept in full; outperformance is a hope.</span></td></tr>
      <tr><th>B</th><td><b>Tax on income</b> → asset location<span class="tell">Same portfolio, arranged so the taxed parts sit in the shelter.</span></td></tr>
      <tr><th>C</th><td><b>Tax realised early</b> → deferral<span class="tell">Unrealised gains keep compounding on the untaxed amount.</span></td></tr>
      <tr><th>D</th><td><b>Gains already realised</b> → loss harvesting<span class="tell">Bank the loss, keep the exposure, watch the repurchase rules.</span></td></tr>
      <tr><th>E</th><td><b>Spending</b> → a fixed burn rate<span class="tell">The only leak entirely within your control.</span></td></tr>
      </table>`},
  {h:'Spend a share of capital, not a number',
   b:`<p>A withdrawal fixed in pounds does its worst damage precisely when the portfolio is smallest, because the same sum is a larger share of a fallen balance. Defining the draw as a percentage — reset annually against the actual value — makes spending fall automatically in bad years.</p>
      <p>That automatic fall is the whole mechanism. It is how endowments that intend to exist in perpetuity are run, and it is the difference between a household that adjusts by 8% for one uncomfortable year and one that sells a third of its assets over three.</p>
      <div class="note"><strong>The uncomfortable part is not the arithmetic.</strong> It is that spending must be treated as the output of the portfolio rather than an input to it — which means the lifestyle moves when the capital does.</div>`},
  {h:'Not every cost is a leak',
   b:`<p>A flat fee for work that genuinely would not otherwise happen — the tax filings, the rebalance nobody executes, the estate documents left for eleven years, the conversation that stops a panicked sale — is a cost buying something real.</p>
      <p>What distinguishes it is how the person is paid. A flat fee scales with the work. A percentage of assets scales with the portfolio while the work stays the same, and commission scales with what gets sold to you.</p>
      <div class="warn"><strong>Ask any adviser how they are paid before weighing what they recommend.</strong> It is a short question and it predicts the advice better than anything else you can ask.</div>`}
  ],
  drill:{kind:'pick', key:'x2'} },

{ tag:'Three', title:'The single event',
  cards:[
  {h:'Correlated exposures that look like several things',
   b:`<p class="lead">The classic ruin is not a bad market. It is an employer’s stock, held by two spouses who both work there, pledged as collateral for the mortgage. That reads as three assets and one job. It is one exposure, and a single bad quarter takes all of it at once.</p>
      <p>Before counting holdings, ask what single event would move them together.</p>`},
  {h:'Three failure points, six responses',
   b:`<table class="k">
      <tr><th>A</th><td><b>One holding dominates</b> → sell down on a schedule, cap the downside, or retain it deliberately<span class="tell">Which one depends on whether you control the asset.</span></td></tr>
      <tr><th>B</th><td><b>One event creates a claim on everything</b> → transfer the tail to an insurer, separate the entities<span class="tell">Both, usually. They do different jobs.</span></td></tr>
      <tr><th>C</th><td><b>Borrowing can force the outcome</b> → modest, fixed, not callable<span class="tell">The rate is not the risk. The call is the risk.</span></td></tr>
      </table>`},
  {h:'Diversify mechanically or you will not diversify',
   b:`<p>Everyone holding a concentrated position intends to reduce it — after the next results, above a price, once it recovers. Those are timing decisions, and they are the specific decisions people reliably fail to make, because the position is bound up with how the money was made and often with their own competence.</p>
      <p>So the practice is a fixed schedule, executed regardless of price, with the tax accepted as it falls due. Price-blindness is not a limitation of the method — it is the method.</p>
      <div class="note"><strong>The exception is the business you actively run.</strong> You cannot diversify away an asset you control and work at daily. What makes that defensible is everything around it: diversified non-business assets, a spending reserve held outside the company, and no borrowing secured on the stock.</div>`},
  {h:'Insure the tail, self-insure the rest',
   b:`<p>Insurance is priced so that, on average, you lose money on it. That is not a scandal; it is what paying someone to carry a risk costs. It follows that cover is worth buying only where the loss would be unrecoverable and never where the loss would merely be irritating.</p>
      <p>Most households do the reverse — low deductibles and extended warranties on replaceable objects, and no umbrella liability policy, which costs a few hundred a year and is the one that stops a single accident reaching everything.</p>
      <p>Entity separation does the structural version of the same job. It is also defeated by the same carelessness every time: commingled accounts, personal guarantees, and one insurance policy stretched across everything.</p>`}
  ],
  drill:{kind:'pick', key:'x3'} },

{ tag:'Four', title:'Forced at the wrong moment',
  cards:[
  {h:'Why the order of returns matters',
   b:`<p class="lead">Two portfolios with identical average returns over twenty years can end in very different places, if money is being taken out along the way. Withdraw during a fall and you sell more units to raise the same sum, and those units are permanently gone from the recovery.</p>
      <p>Nothing is wrong with the holdings and nothing is wrong with the average. The damage comes entirely from the requirement to act on a date you did not choose.</p>`},
  {h:'Remove the requirement',
   b:`<table class="k">
      <tr><th>A</th><td><b>Spending during a fall</b> → two to five years of costs in cash and short bonds<span class="tell">So no month’s spending depends on that month’s price.</span></td></tr>
      <tr><th>B</th><td><b>A known bill on a known date</b> → an instrument maturing on that date<span class="tell">No market view required, or taken.</span></td></tr>
      <tr><th>C</th><td><b>Drift, with nothing forcing action</b> → a written rebalancing rule<span class="tell">Decide in advance, when nobody is frightened.</span></td></tr>
      </table>
      <p>And a fourth case worth naming: sometimes the money is already where the liability is, and the correct action is none.</p>`},
  {h:'The reserve is a cost, and that is fine',
   b:`<p>Cash drags in every year that nothing goes wrong, which is most years. People abandon the buffer for exactly this reason, usually after a long calm stretch, and discover its purpose in the year they no longer have it.</p>
      <p>Treat the drag as the premium on an insurance policy against being a forced seller. Judged that way the question is not whether it costs something — it is whether the cover is worth the premium, which for anyone drawing on a portfolio it generally is.</p>
      <div class="warn"><strong>The mirror error is investing money you need soon</strong> to avoid the feeling of it sitting idle. A deposit needed in four months belongs somewhere that cannot fall, whatever the market is doing.</div>`}
  ],
  drill:{kind:'pick', key:'x4'} },

{ tag:'Five', title:'The handover',
  cards:[
  {h:'Where second-generation wealth actually goes',
   b:`<p class="lead">Not usually to markets or to tax. It goes through divorce, through a business run by someone who was never prepared to run it, through a single person with unilateral control making one irreversible decision, and through documents nobody updated.</p>
      <p>None of those are solved by a structure, which is why this unit spends more time on people and paperwork than on tax.</p>`},
  {h:'Five answers, in order of cost',
   b:`<table class="k">
      <tr><th>A</th><td><b>Basic documents current</b> — will, beneficiary forms, power of attorney<span class="tell">An afternoon. The highest return on effort in the course.</span></td></tr>
      <tr><th>B</th><td><b>Lifetime gifting</b> — allowances used every year, starting early<span class="tell">The allowance does not accumulate; a skipped year is gone.</span></td></tr>
      <tr><th>C</th><td><b>Family governance</b> — staged distributions, an outside trustee, prenuptial agreements, heirs in the room<span class="tell">Addresses the failure mode that actually occurs.</span></td></tr>
      <tr><th>D</th><td><b>Trust or holding structure</b> — value moved across while it is small<span class="tell">Timing is the technique. Costs real money to run.</span></td></tr>
      <tr><th>E</th><td><b>Nothing</b> — the estate is simple and current<span class="tell">The correct answer more often than it is given.</span></td></tr>
      </table>`},
  {h:'The beneficiary form beats the will',
   b:`<p>Pensions, life policies and many investment accounts pass by beneficiary nomination, and that nomination generally overrides whatever the will says. A form completed once at the start of a job, never revisited through a divorce and a remarriage, can send the largest single asset to the wrong person entirely.</p>
      <div class="note"><strong>Check every beneficiary nomination you have ever completed.</strong> It costs nothing, takes an hour, and is the most common serious error in this entire course — at every level of wealth, including people with expensive advisers.</div>`},
  {h:'Structure last, and only when it earns its cost',
   b:`<p>Trusts and holding companies are irrevocable in substance, carry annual filing and accountancy costs, and hand control to a trustee. Where the estate is large enough, or a business or a dependant with lifelong needs is involved, they earn all of that comfortably.</p>
      <p>Below that line they are a product, sold early because the sale is profitable and the uselessness takes a decade to become visible. The order of this unit is the order of the work: documents, then gifting, then people, then structure.</p>`}
  ],
  drill:{kind:'pick', key:'x5'} },

{ tag:'Six', title:'What people believe instead',
  cards:[
  {h:'The folklore is expensive in both directions',
   b:`<p class="lead">Money attracts more confident wrong belief than any subject in this app, and it runs in two directions at once. One says the whole thing is a rigged game played offshore, which produces paralysis. The other says a product will fix it, which produces fees.</p>
      <p>Both share a structure: they name no mechanism, so they cannot be checked, and they leave you unable to tell a good arrangement from a bad one.</p>`},
  {h:'Two worth stating plainly',
   b:`<p><b>"Rich people don’t pay tax."</b> Mostly they defer it and locate it, using rules written down and available to anyone with the same assets. Gains never realised are never taxed as income. That is worth understanding precisely, because the understandable version is usable and the folklore version is not.</p>
      <p><b>"You need offshore structures."</b> Below a few million, structures cost more in fees and filing than they save. The practices doing most of the work are free: lower fees, a defined burn rate, current beneficiary forms, a cash buffer.</p>
      <div class="warn"><strong>And one statistic to stop repeating.</strong> "Seventy percent of families lose it in the second generation" traces to a single consulting firm’s survey of its own clients — a self-selected sample, counted by a party selling the solution. The Statistical Claims course has a unit for exactly this.</div>`}
  ],
  drill:{kind:'err'} },

{ tag:'Seven', title:'Full determination',
  cards:[
  {h:'Running the whole key',
   b:`<p class="lead">Now the threats come without labels. Read the situation, decide what is actually threatening the capital, work the two questions under it, and name the practice that answers it.</p>
      <p>Four of the twenty-one specimens resolve to "nothing is needed here." Getting those right matters as much as the rest — a key that always prescribes something is how people end up with a trust, a whole-life policy and a structure they are still paying for in ten years.</p>
      <div class="note">Your name and your route are scored separately. Right practice from the wrong threat counts as a miss, because a practice you cannot trace to a threat is one you will apply where it does nothing.</div>`}
  ],
  drill:{kind:'det'} }
];

const WEALTH = {
  id:'wealth', name:'Wealth Preservation', rev:1,
  blurb:'Name what actually threatens capital — a compounding leak, a single shock, a forced moment, the handover — and the practice that answers it.',
  intro:'Identify what actually threatens the capital — a compounding leak, a single shock, a forced moment, or the handover — and name the practice that answers it. A correct label reached by the wrong route is scored as a miss.',
  outcomes: WEALTH_OUTCOMES,
  determination: { gateCode:'P1', steps:[WEALTH_GATE], stepsByGate:WEALTH_STEPS_BY_GATE },
  determinationIntro:`<p>You are matching a practice to a threat. Decide what actually endangers the capital first, work the two questions under it, and name the practice last.</p>
      <ol>
        <li>Read the situation.</li>
        <li><b>Step 1</b> — which of the four threatens this capital: a leak that compounds, a single event that could end it, being forced to act at the wrong moment, or the money outliving the arrangement?</li>
        <li><b>Steps 2–3</b> — the two questions specific to that threat. They unlock in order and change with your Step 1 answer.</li>
        <li><b>Step 4</b> — now name the practice, and record your determination.</li>
      </ol>
      <p>The strip between the situation and step 1 is a readout, not a control. It crosses off practices your answers have ruled out. Nothing there is tappable.</p>
      <p>Every threat carries an outcome meaning nothing is needed, and four specimens resolve that way. Naming one of those correctly counts for as much as any other.</p>
      <p>Your name and your route are scored separately. Right practice from the wrong threat counts as a miss.</p>
`,
  specimens: WEALTH_SPECIMENS,
  quickDrills: [
    {key:'x1', title:'Which threat', prompt:'What actually threatens this capital?', items:X1_DRILL, opts:X1_OPTS},
    {key:'x2', title:'Leaks', prompt:'Which leak is being answered?', items:X2_DRILL, opts:X2_OPTS},
    {key:'x3', title:'Single events', prompt:'Which response to concentration or liability?', items:X3_DRILL, opts:X3_OPTS},
    {key:'x4', title:'Forced moments', prompt:'What removes the forcing?', items:X4_DRILL, opts:X4_OPTS},
    {key:'x5', title:'The handover', prompt:'Which succession practice — if any?', items:X5_DRILL, opts:X5_OPTS}
  ],
  errDrill: WEALTH_ERR,
  course: WEALTH_COURSE,
  tabs: [
    {key:'course', label:'Course'}, {key:'det', label:'Determination'},
    {key:'x1', label:'Which threat'}, {key:'x2', label:'Leaks'}, {key:'x3', label:'Single events'},
    {key:'x4', label:'Forced moments'}, {key:'x5', label:'The handover'},
    {key:'err', label:'Faulty claims'}, {key:'reference', label:'Reference'}
  ],
  caveats:`<ul>
    <li><b>Scale gates most of this.</b> Trusts, holding companies, hedging and entity separation cost real money to establish and run, and below the point where the saving exceeds the cost they are a product being sold rather than a solution. Four practices survive at every size: lower fees, a defined burn rate, current documents, a cash buffer.</li>
    <li><b>Technique preserves; it does not create.</b> The overwhelming determinant of ending wealth is income and starting capital. Perfect asset location on a small base is still a small base, and no arrangement in this course substitutes for the earning that produced the capital.</li>
    <li><b>Much of the detail is jurisdiction-specific and changes.</b> Basis step-up at death, account types and their shelters, annual gift allowances, estate thresholds and the treatment of trusts all differ by country and are rewritten regularly. The four threats are general; the instruments answering them are local and dated.</li>
    <li><b>"What rich people do" is partly survivorship.</b> We hear the practices of families whose wealth survived, and cannot see the identical arrangements of those it did not. Some of what looks like technique was a rising market or a single concentrated bet that happened to pay — which the Statistical Claims course covers directly.</li>
    <li><b>Concentration built almost every fortune here and is the main way they end.</b> This course teaches preservation, which is a different job from accumulation. Applying these rules while still building may simply mean you never build.</li>
    <li><b>Advisers are paid in ways that shape advice.</b> Flat fee, percentage of assets, or commission on what is sold — ask which before weighing any recommendation, including a recommendation to adopt something in this course.</li>
    <li><b>Not covered:</b> business valuation and sale, pensions and retirement-income products in detail, insurance underwriting, philanthropic structures, cross-border residence and domicile planning, and anything involving illiquid private investments. Each is a specialism and none reduces to a two-question key.</li>
  </ul>`
};
