/* ===================== SUBJECT: WEALTH PRESERVATION ===================== */

const WEALTH_OUTCOMES = [
  {id:'feecore',    n:'Switch to index funds',                  group:'erosion'},
  {id:'location',   n:'Right account for each investment',      group:'erosion'},
  {id:'defer',      n:'Delay the tax by not selling',           group:'erosion'},
  {id:'harvest',    n:'Use a loss to cut tax',                  group:'erosion'},
  {id:'burnrate',   n:'Spend a percentage of the pot',          group:'erosion'},
  {id:'acceptcost', n:'A cost worth paying',                    group:'erosion'},
  {id:'diversify',  n:'Sell down on a schedule',                group:'shock'},
  {id:'hedge',      n:'Cap the loss without selling',           group:'shock'},
  {id:'insure',     n:'Insure the big loss',                    group:'shock'},
  {id:'entity',     n:'Separate companies for separate assets', group:'shock'},
  {id:'deleverage', n:'Borrow modestly, on safe terms',         group:'shock'},
  {id:'retain',     n:'Keep the big holding on purpose',        group:'shock'},
  {id:'cashbuffer', n:'Years of spending in cash',              group:'timing'},
  {id:'ladder',     n:'A bond for each bill',                   group:'timing'},
  {id:'rebalance',  n:'Rebalance by written rule',              group:'timing'},
  {id:'matched',    n:'Already covered',                        group:'timing'},
  {id:'trust',      n:'A trust or holding company',             group:'succession'},
  {id:'gifting',    n:'Give some away each year',               group:'succession'},
  {id:'governance', n:'Family rules for the money',             group:'succession'},
  {id:'basicdocs',  n:'Update the basic paperwork',             group:'succession'},
  {id:'simple',     n:'Nothing more needed',                    group:'succession'}
];

const WEALTH_GATE = { code:'P1', label:'What is the main danger to this money?', options:[
  { id:'erosion',    n:'A slow leak',                      sub:'fees, extra tax, overspending',
    keeps:['feecore','location','defer','harvest','burnrate','acceptcost'] },
  { id:'shock',      n:'One event could wreck it',         sub:'one big holding, a lawsuit, borrowed money',
    keeps:['diversify','hedge','insure','entity','deleverage','retain'] },
  { id:'timing',     n:'Bad timing',                       sub:'a bill or a fall in prices at the wrong moment, or a drifting mix',
    keeps:['cashbuffer','ladder','rebalance','matched'] },
  { id:'succession', n:'It is lost in the handover',       sub:'passing it on: tax, heirs, paperwork',
    keeps:['trust','gifting','governance','basicdocs','simple'] }
]};

const WEALTH_STEPS_BY_GATE = {
  erosion: [
    { code:'E1', label:'Where is the money leaking out?', options:[
        {id:'fees',    n:'In fees: what the funds, adviser and platform charge',  keeps:['feecore']},
        {id:'taxnow',  n:'In tax: paid sooner or more often than it had to be',   keeps:['location','defer','harvest']},
        {id:'spend',   n:'In withdrawals: more is taken out than the pot can carry', keeps:['burnrate']},
        {id:'worthit', n:'Nowhere: the charge pays for something real',           keeps:['acceptcost']}
    ]},
    { code:'E2', label:'What fixes that leak?', options:[
        {id:'indexcore', n:'Swap costly funds for index funds that charge far less', keeps:['feecore']},
        {id:'whichacct', n:'Hold the investments that pay taxable income inside the sheltered account', keeps:['location']},
        {id:'dontsell',  n:'Hold the gains instead of selling, so the tax is not yet due', keeps:['defer']},
        {id:'uselosses', n:'Sell something at a loss on purpose, to cancel tax on gains', keeps:['harvest']},
        {id:'fixedpct',  n:'Take out a percentage of the pot, reset every year',  keeps:['burnrate']},
        {id:'nothing_e', n:'Nothing: the charge pays for work that would not otherwise get done', keeps:['acceptcost']}
    ]}
  ],
  shock: [
    { code:'S1', label:'Where is the single weak point?', options:[
        {id:'oneasset',  n:'One holding is most of what you own',                keeps:['diversify','hedge','retain']},
        {id:'liability', n:'One event could bring a claim against everything you own', keeps:['insure','entity']},
        {id:'borrowed',  n:'Borrowed money could force a sale at the worst moment', keeps:['deleverage']}
    ]},
    { code:'S2', label:'What is being done about it?', options:[
        {id:'staged',    n:'Selling it down on a schedule and paying the tax',   keeps:['diversify']},
        {id:'capped',    n:'The loss is capped, and nothing is sold',            keeps:['hedge']},
        {id:'eyesopen',  n:'It is kept on purpose, because they run it',         keeps:['retain']},
        {id:'transfer',  n:'The big loss is passed to an insurer for a payment', keeps:['insure']},
        {id:'ringfence', n:'The assets are split up so one claim cannot reach the rest', keeps:['entity']},
        {id:'terms',     n:'The borrowing is modest, at a fixed rate, and cannot be called in', keeps:['deleverage']}
    ]}
  ],
  timing: [
    { code:'T1', label:'What could force a bad move with this money?', options:[
        {id:'drawdown',  n:'Living costs have to be taken out of investments that can fall', keeps:['cashbuffer']},
        {id:'datefixed', n:'A bill of a known size falls due on a known date',   keeps:['ladder']},
        {id:'drift',     n:'Nothing forces it: the mix has slowly drifted from the plan', keeps:['rebalance']},
        {id:'nothing_t', n:'Nothing: the money for the bill is already safe in cash', keeps:['matched']}
    ]},
    { code:'T2', label:'What takes the pressure off?', options:[
        {id:'yearscash', n:'Several years of spending held in cash and short bonds', keeps:['cashbuffer']},
        {id:'maturity',  n:'A bond that matures just before each bill is due',   keeps:['ladder']},
        {id:'bands',     n:'A written rule that trades the mix back to the plan when it drifts too far', keeps:['rebalance']},
        {id:'nothing_t2',n:'Nothing: it is already covered',                     keeps:['matched']}
    ]}
  ],
  succession: [
    { code:'U1', label:'What is at risk when this money is passed on?', options:[
        {id:'taxdeath',  n:'Tax on what is passed on, or on the growth still to come', keeps:['trust','gifting']},
        {id:'people',    n:'The people: how heirs behave, or who holds control', keeps:['governance']},
        {id:'paperwork', n:'Only the paperwork: the basic documents are out of date or missing', keeps:['basicdocs']},
        {id:'nothing_u', n:'Nothing: the case is simple and the documents are current', keeps:['simple']}
    ]},
    { code:'U2', label:'What has been put in place?', options:[
        {id:'structure', n:'The shares or assets are moved into a trust or company with a trustee and fixed terms', keeps:['trust']},
        {id:'giveearly', n:'Gifts made during life, a little at a time, while the sums are small', keeps:['gifting']},
        {id:'rules',     n:'Family agreements: payouts in stages, an outside decision-maker, rules about marriage', keeps:['governance']},
        {id:'basics',    n:'The will, beneficiary forms and power of attorney are brought up to date', keeps:['basicdocs']},
        {id:'nothing_u2',n:'Nothing new: the documents already in place cover it', keeps:['simple']}
    ]}
  ]
};

const X1_OPTS = ['A slow leak','One event could wreck it','Bad timing','It is lost in the handover'];
const X1_DRILL = [
  {q:'A retired nurse has £450,000 in a pension fund. She has never read the statements. They show the fund charging 1.4% a year and the platform another 0.3%, and the fund has done no better than the market as a whole.',
   a:'A slow leak', w:'The question that decides it is “What is the main danger to this money?” The detail is the two yearly charges, 1.4% and 0.3%, which together take about 1.7% of the pot every year with nothing better to show for it. Nothing happens in any one year, which is what makes it a slow leak. It is not bad timing, because no bill or fall is mentioned.'},
  {q:'A farmer holds the farm, all the machinery and the family home in her own name. A worker was badly hurt in a tractor accident last month and has started a legal claim.',
   a:'One event could wreck it', w:'The question that decides it is “What is the main danger to this money?” The detail is “all … in her own name” together with a legal claim. One claim can reach everything held in one name, so a single event could take most of it. Nothing is draining away slowly here.'},
  {q:'A couple must pay £60,000 of university costs in two years. The money is all in shares, and shares have just fallen 25%.',
   a:'Bad timing', w:'The question that decides it is “What is the main danger to this money?” The detail is a bill of a known size on a known date (“£60,000 of university costs in two years”) with the money sitting in shares that are down. The shares are not the problem. Having to sell them at the wrong moment is.'},
  {q:'A landlord in her seventies owns four flats in her own name and has no will. Her three adult children are not speaking to each other. She says, “They can sort it out between them.”',
   a:'It is lost in the handover', w:'The question that decides it is “What is the main danger to this money?” The details are “no will” and children “not speaking to each other”. The danger arrives when the flats pass to the next people, through missing paperwork and a family that cannot agree. No leak, single event or bill is described.'},
  {q:'Every January a man takes £50,000 from an investment pot to live on. Six years ago the pot was £900,000. Now it is £640,000, and he has never changed the £50,000.',
   a:'A slow leak', w:'The question that decides it is “What is the main danger to this money?” The detail is “never changed the £50,000”: that is now 7.8% of the pot, up from 5.6%. Use the test from the cards: is the problem how much comes out, or that it had to come out on a bad day? Nothing says a sale was forced on a bad day, so the problem is the size of the withdrawal, and that is a leak.'},
  {q:'A couple put £280,000, nearly everything they own apart from their home, into one flat that they rent out. A single tenant, a care home company, pays all of the rent. The care home’s licence comes up for review next year, and they have been told it may not be renewed.',
   a:'One event could wreck it', w:'The question that decides it is “What is the main danger to this money?” The detail is that “nearly everything they own apart from their home” sits in one flat, so one holding is most of what they own. “A single tenant … pays all of the rent”, so the licence review is the one event that could stop the income and leave them with a flat nobody is paying for. Nothing is draining away slowly.'},
  {q:'A 55-year-old’s plan is 60% shares and 40% bonds. After five good years her shares are 74% of the pot. She has not looked at the split, and she plans to retire in three years.',
   a:'Bad timing', w:'The question that decides it is “What is the main danger to this money?” The detail is 74% against a plan of 60%: the mix has drifted, so a fall would hit harder than she planned, and with retirement three years away she would have little time to recover. No fees, claim or paperwork problem is mentioned.'},
  {q:'A man’s will leaves everything to his wife. His pension, worth more than all his other savings together, still has the form he filled in at 30 naming his first wife as the person who receives it.',
   a:'It is lost in the handover', w:'The question that decides it is “What is the main danger to this money?” The detail is the pension form that still names his first wife. A form like that usually overrides the will, so the largest asset goes to the wrong person whatever the will says. The danger arrives when the money changes hands.'}
];


const X2_OPTS = ['Switch to index funds','Right account for each investment','Delay the tax by not selling','Use a loss to cut tax','Spend a percentage of the pot','A cost worth paying'];
const X2_DRILL = [
  {q:'A man’s £180,000 sits in three funds where managers choose the investments. Their charges are 1.2%, 1.5% and 1.1% a year, and over ten years each has trailed the index it tries to beat. He says, “At least someone is looking after it.”',
   a:'Switch to index funds', w:'Where is the money leaking out? The detail is the three yearly charges of 1.1% to 1.5% with results that trailed the index, so the answer is “In fees: what the funds, adviser and platform charge”. What fixes that leak? “Swap costly funds for index funds that charge far less.” The charge buys a hope of beating the market, not work he would otherwise skip, so it is not A cost worth paying.'},
  {q:'A retired couple read the fact sheet for their main fund and found it charges 1.35% a year. They moved the money inside their pension into a fund that copies a broad share index and charges 0.07%. Their mix is unchanged.',
   a:'Switch to index funds', w:'Where is the money leaking out? The detail is the 1.35% yearly charge found on the fact sheet, which is a fee. What fixes that leak? The 0.07% index fund in the same markets. Doing it inside the pension, a sheltered account, also meant the sale brought no tax bill.'},
  {q:'Hana has a pension and an ordinary taxable account. The taxable account holds a high-dividend shares fund that pays out about £4,000 a year, and she pays tax on those dividends every year. Her pension holds a global shares fund that pays out almost nothing and that she plans to leave alone for twenty years.',
   a:'Right account for each investment', w:'Where is the money leaking out? The detail is “pays tax on those dividends every year” on a fund held in the taxable account, so the answer is “In tax: paid sooner or more often than it had to be”. What fixes that leak? Hold the investments that pay taxable income inside the sheltered account, here by swapping the places of the two funds. No sale is being proposed and the tax is on income, not on a gain, so this is not Delay the tax by not selling.'},
  {q:'A couple keep a property fund, which pays out rent every quarter, and a bond fund in their pension. Their taxable account holds one fund that pays almost no income, bought to be kept for decades.',
   a:'Right account for each investment', w:'Where is the money leaking out? The case is about tax, and the detail is which funds sit where. The two funds that pay out income, the property fund and the bond fund, are inside the pension, so that income is not taxed each year, and the fund that pays almost nothing is in the taxable account. That avoids the leak “In tax: paid sooner or more often than it had to be”. What fixes that leak? Hold the investments that pay taxable income inside the sheltered account, which is exactly what this couple has done.'},
  {q:'Leila’s plan is 60% shares, but one shares fund she bought for £12,000 has grown to £36,000 and has pushed her up to 66%. Her adviser says to sell £6,000 of it and buy bonds. Leila pays £700 a month into her investments.',
   a:'Delay the tax by not selling', w:'Where is the money leaking out? A sale of a fund that has tripled would realise a gain, about £4,000 of the £6,000 sold, and bring a tax bill of about £800 at 20%. That is the answer “In tax: paid sooner or more often than it had to be”. What fixes that leak? The detail “pays £700 a month into her investments” means new money can buy the bonds, so she can hold the gain instead of selling.'},
  {q:'A man’s fund is worth £60,000 and cost him £25,000. His adviser suggests selling half to “lock in profits”. He works out the tax on that sale would be about £3,500, declines, and leaves the fund invested.',
   a:'Delay the tax by not selling', w:'Where is the money leaking out? The detail is a tax bill of about £3,500 on a sale nobody has to make, so the answer is “In tax: paid sooner or more often than it had to be”. What fixes that leak? He holds the gain instead of selling, so the tax is not yet due and the money stays invested.'},
  {q:'Omar realised a £6,000 gain in March when he sold a fund. In October he sees that another fund in his taxable account is worth £8,000 less than he paid for it. He wants to cancel the tax on the March gain but still wants to own shares in that market.',
   a:'Use a loss to cut tax', w:'Where is the money leaking out? The detail is a gain realised this year that will be taxed, so the answer is “In tax: paid sooner or more often than it had to be”. What fixes that leak? A holding sitting £8,000 below cost can be sold to cancel the gain, and a similar but not identical fund can be bought so he stays in the market.'},
  {q:'A man sold shares in one bank for a £12,000 loss in December. In the same week he bought a fund holding banks from across the whole market. His accountant said the loss would cancel two-thirds of the £18,000 gain he realised in June.',
   a:'Use a loss to cut tax', w:'Where is the money leaking out? The detail is a gain from June that would be taxed. What fixes that leak? He sold a holding below its cost to cancel it, and bought something similar but not identical, a fund of many banks and not the same bank, which keeps him in the market without breaking the buy-back rule.'},
  {q:'A woman retired with £600,000 and has spent £30,000 a year since, as she planned. Prices have fallen and her pot is now £450,000. She says, “I can’t cut back. I have never spent less than £30,000.”',
   a:'Spend a percentage of the pot', w:'Where is the money leaking out? The detail is “never spent less than £30,000”: a fixed amount that is now 6.7% of the shrunken pot, up from 5% at the start. The answer is “In withdrawals: more is taken out than the pot can carry”. What fixes that leak? Take out a percentage of the pot, reset every year.'},
  {q:'Each January a couple check what their pot is worth and take 3.8% of it as their spending for the year. After a year when prices fell, they took £4,000 less than the year before and cut back on holidays.',
   a:'Spend a percentage of the pot', w:'Where is the money leaking out? The case is about the amount taken out each year, so the question is about withdrawals. The detail is “3.8% of it … each January”: the amount is a percentage of what the pot is worth, so it fell by £4,000 when prices fell. What fixes that leak? Take out a percentage of the pot, reset every year.'},
  {q:'A widow pays a flat £2,000 a year to a planner who prepares her tax return, keeps her will and beneficiary forms up to date, and phones her when prices fall to stop her selling in a panic. Her money is in index funds. She wonders whether to stop paying because “it is a lot of money”.',
   a:'A cost worth paying', w:'Where is the money leaking out? The details are “flat”, the named work she would otherwise leave undone, and index funds with no hidden charge, so the answer is “Nowhere: the charge pays for something real”. What fixes that leak? Nothing: the charge pays for work that would not otherwise get done. She should keep paying.'},
  {q:'A family business owner pays a flat £3,000 a year to an accountant who handles the company’s filings and the family’s tax returns. The price has not changed in six years even though the business has doubled in value. The accountant takes no commission on anything.',
   a:'A cost worth paying', w:'Where is the money leaking out? The detail is a flat fee that stayed the same while the business doubled, so the price follows the work and not the size of the money. With no commission, the interests line up. The answer is “Nowhere: the charge pays for something real”, so there is nothing to fix.'}
];


const X3_OPTS = ['Sell down on a schedule','Cap the loss without selling','Insure the big loss','Separate companies for separate assets','Borrow modestly, on safe terms','Keep the big holding on purpose'];
const X3_DRILL = [
  {q:'Tariq sold his family’s carpet business to a listed company and was paid in that company’s shares, now worth £620,000, about 65% of everything he owns. He is free to sell them, but keeps saying he will sell “after the next results”. His adviser writes a plan: sell £30,000 of the shares on the first day of each month, whatever the price, with the tax set aside each time.',
   a:'Sell down on a schedule', w:'Where is the single weak point? “One holding is most of what you own”: £620,000 is about 65%. What is being done about it? That question decides it. The detail “£30,000 … on the first day of each month … whatever the price” is selling it down on a schedule and paying the tax. He is free to sell, so contracts to cap the loss are not needed.'},
  {q:'A man inherited his father’s shares in one company, worth £210,000, about 70% of everything he owns. He does not work for the company and can sell whenever he likes. He says, “Dad never sold, and I would feel wrong selling.”',
   a:'Sell down on a schedule', w:'Where is the single weak point? “One holding is most of what you own”: 70%. What is being done about it? Nothing yet, so ask the three questions on the choosing card. He does not run the company and he can sell, which points to selling down on a schedule. The feeling about his father is exactly the sort of reason people never get round to a timing decision, and a fixed schedule takes the decision away.'},
  {q:'A software engineer received shares worth £400,000, about 75% of everything she owns. Company rules say she cannot sell any for 18 months, and selling after that would bring a large tax bill. She is looking at buying a contract that lets her sell at 85% of today’s price, paid for by selling a contract that hands her shares over at 140%.',
   a:'Cap the loss without selling', w:'Where is the single weak point? “One holding is most of what you own”: 75%. What is being done about it? That question decides it. The detail “cannot sell any for 18 months” means a sale is blocked, and the floor at 85% paid for by the ceiling at 140% is a put and a call. That is capping the loss while nothing is sold.'},
  {q:'A director holds shares worth £900,000, most of what he owns, and he is barred from selling until the company’s accounts are published next year. He buys a put that lets him sell at £800,000, and sells a call that obliges him to hand the shares over at £1.1m. The net cost is about £7,000.',
   a:'Cap the loss without selling', w:'Where is the single weak point? “One holding is most of what you own”. What is being done about it? The detail “barred from selling” plus a put as the floor and a call as the ceiling is “The loss is capped, and nothing is sold”. It buys him time until he is allowed to sell, and it costs a little.'},
  {q:'A family with a swimming pool, three teenage drivers and £2.2m of assets have home and car policies with a £500,000 liability limit. They pay for extended warranties on every appliance and have chosen low deductibles on everything. They have no cover above £500,000.',
   a:'Insure the big loss', w:'Where is the single weak point? “One event could bring a claim against everything you own”: a pool and three new drivers could produce a claim far above £500,000. What is being done about it? Their money goes to insurance for small losses they could pay from savings, and none to the big one. The fix is to pass the big loss to an insurer for a payment, and drop the small cover.'},
  {q:'A couple decided that any loss under £2,000 they would simply pay from savings, so they raised the deductible on their home and car cover and dropped the warranties on phones and appliances. With the money saved they bought a £3m policy that pays above the limits of their other policies, after a visitor was hurt in their garden.',
   a:'Insure the big loss', w:'Where is the single weak point? “One event could bring a claim against everything you own”: a visitor was hurt and a claim could be large. What is being done about it? The detail is the £3m policy above the other limits, paid for by self-insuring small losses. That is “The big loss is passed to an insurer for a payment”.'},
  {q:'A builder owns a van business, two commercial units that he rents out, and his family home, all in his own name. One unit’s tenant runs a gym, and he worries a serious injury there could reach the van business and his home. His lawyer suggests putting each unit in its own limited company, each with its own bank account, with no personal guarantee from him on their loans.',
   a:'Separate companies for separate assets', w:'Where is the single weak point? “One event could bring a claim against everything you own”: all in his own name, with a gym injury as the possible event. What is being done about it? That question decides it. The detail is each unit in its own company with separate bank accounts and no personal guarantee, so a claim reaches only that unit. That is “The assets are split up so one claim cannot reach the rest”.'},
  {q:'A restaurateur opened his second restaurant in a new limited company, not the one that owns the first. The two have separate bank accounts and separate accountants, and he has not guaranteed either company’s debts personally. When a customer sued the second restaurant, the first was untouched.',
   a:'Separate companies for separate assets', w:'Where is the single weak point? “One event could bring a claim against everything you own”: a customer’s claim was the event. What is being done about it? The detail “a new limited company”, with separate bank accounts and no personal guarantee, is the assets being split up so one claim cannot reach the rest. The three ways this fails, mixing money, personal guarantees and shared cover, were all avoided.'},
  {q:'A dentist has £400,000 in shares. Her broker offers a loan of £240,000 against them, at a low interest rate, to pay for building a new surgery. The agreement says the broker can demand repayment or extra security at any time, and will sell her shares if she cannot provide it.',
   a:'Borrow modestly, on safe terms', w:'Where is the single weak point? “Borrowed money could force a sale at the worst moment”: the broker can demand repayment “at any time” and would sell her shares, which would happen when prices have fallen. That makes the loan callable, and £240,000 against £400,000 is 60%, which is not modest. The fix is borrowing that is modest, at a fixed rate, and cannot be called in, such as an ordinary fixed-rate mortgage on the surgery building.'},
  {q:'A couple’s only borrowing is a £150,000 mortgage on a house worth £400,000, fixed at the same rate for fifteen years. The bank cannot ask for the money back while they pay on time. They have no loan against their investments.',
   a:'Borrow modestly, on safe terms', w:'Where is the single weak point? “Borrowed money could force a sale at the worst moment” is the question being answered. What is being done about it? The details are £150,000 against £400,000 (modest, well under half the house’s value), “fixed at the same rate for fifteen years”, and “cannot ask for the money back”. That is “The borrowing is modest, at a fixed rate, and cannot be called in”.'},
  {q:'Lucía owns 85% of a printing company with 40 staff and runs it every day. It is almost everything she has. She says, “Selling down would mean giving up the thing I do.” She also holds £150,000 in a fund spread across many companies and £90,000 in cash held outside the company, which is three years of her household’s spending. Her house loan is secured on the house.',
   a:'Keep the big holding on purpose', w:'Where is the single weak point? “One holding is most of what you own”: 85%. What is being done about it? That question decides it. She runs it every day, the rest is spread across many companies, three years of spending sits outside the company, and the loan is on the house and not on the company’s shares. All three supports are there, so it is “kept on purpose, because they run it”.'},
  {q:'A vet owns most of the practice where she works every day, and it is most of what she owns. Her pension is in a fund spread across many companies. She keeps three years of household spending in a bank account that is not the practice’s, and has no loan secured on her shares in the practice. She has no plan to sell and says she does not need one.',
   a:'Keep the big holding on purpose', w:'Where is the single weak point? “One holding is most of what you own”. What is being done about it? The details are that she works there every day, the pension is spread, three years of spending is held outside the practice, and nothing is borrowed against the shares. With all three supports it is a choice and not an oversight: “It is kept on purpose, because they run it”.'}
];


const X4_OPTS = ['Years of spending in cash','A bond for each bill','Rebalance by written rule','Already covered'];
const X4_DRILL = [
  {q:'A man of 61 who retired early lives on £2,000 a month taken from a £360,000 pot that is almost all in one shares fund. The fund has just fallen 22%, and each month he has to sell more units to raise the same £2,000. He is worried it will carry on.',
   a:'Years of spending in cash', w:'What could force a bad move with this money? The detail is “£2,000 a month” taken from “one shares fund”, with more units sold each month after the fall. The answer is “Living costs have to be taken out of investments that can fall”. What takes the pressure off? Several years of spending held in cash and short bonds, so a fall does not force him to sell units cheaply.'},
  {q:'Nina, 63, will stop work in a year. Her adviser is moving £90,000 of her shares, over the next twelve months, into a savings account and a short bond fund. That will cover three years of what she plans to spend, and her plan is to live off it in any year when prices fall.',
   a:'Years of spending in cash', w:'What could force a bad move with this money? Once she stops work, her living costs would come out of shares that can fall: “Living costs have to be taken out of investments that can fall”. What takes the pressure off? The details are “three years of what she plans to spend” held in a savings account and a short bond fund, and “live off it in any year when prices fall”. That is several years of spending held in cash and short bonds.'},
  {q:'A self-employed man must pay a £35,000 tax bill on 31 January in two years and another £35,000 the year after. The amounts and dates are fixed by his accountant’s schedule. All his savings are in shares.',
   a:'A bond for each bill', w:'What could force a bad move with this money? The details are “£35,000 … in two years” and the same again a year later, with the amounts and dates fixed, and the money in shares that could be down on those dates. The answer is “A bill of a known size falls due on a known date”. What takes the pressure off? A bond that matures just before each bill is due.'},
  {q:'A couple rent a workshop under a contract that lets them buy the building for £70,000 on a date fixed in the contract, in just under five years. They have put £70,000 into a government bond that repays in just under five years.',
   a:'A bond for each bill', w:'What could force a bad move with this money? A bill of a known size (£70,000) on a known date (fixed in the contract). What takes the pressure off? The detail “a government bond that repays in just under five years” is a bond that matures just before the bill is due, so the money will be there whatever prices do. It is not Already covered, because the bill is years away and the money was not simply sitting in cash.'},
  {q:'Dara’s plan is 50% shares and 50% bonds, and she wrote down that she would act if either part were more than five points off. After a year of falling bond prices her bonds have dropped to 43% of the pot. On the review date she sells some shares, buys bonds, and is back at 50/50.',
   a:'Rebalance by written rule', w:'What could force a bad move with this money? Nothing is forcing a sale: the detail is that the mix has moved to 43/57 against a plan of 50/50. What takes the pressure off? “wrote down that she would act if either part were more than five points off” is a written rule that trades the mix back to the plan when it drifts too far, and she followed it on the review date.'},
  {q:'Raúl’s plan is 60% shares and 40% bonds, but he has never checked it. After five strong years shares are 75% of his pot. He is 58 and plans to stop work at 60. Nobody needs the money this year, and he says, “It’s doing great, why touch it?”',
   a:'Rebalance by written rule', w:'What could force a bad move with this money? Nothing forces it: the detail “75%” against a plan of 60% means the mix has slowly drifted, and a fall two years before retirement would hurt more than he planned. What takes the pressure off? A written rule that trades the mix back to the plan when it drifts too far. His “why touch it?” is the feeling the written rule exists to overrule.'},
  {q:'Fatima must pay £8,000 to her builder in April, three months from now. The money is in a savings account. Her other investments, which she will not need for twenty years, are in shares and she has not touched them.',
   a:'Already covered', w:'What could force a bad move with this money? The detail is “in a savings account” with the bill only three months away, so nothing could force a sale. The answer is “Nothing: the money for the bill is already safe in cash”. What takes the pressure off? Nothing: it is already covered. Nothing needs restructuring.'},
  {q:'A man sold a flat and will pay £150,000 for his next one when the sale completes in six weeks. The money is in his bank account. A friend tells him he is “wasting” it and should put it into shares for six weeks.',
   a:'Already covered', w:'What could force a bad move with this money? The details are “six weeks” and “in his bank account”: the money for a near bill is already safe in cash. The only danger in the case is the friend’s advice, which would put short-dated money into something that can fall. The answer is Already covered, and the right move is to leave it alone.'}
];


const X5_OPTS = ['A trust or holding company','Give some away each year','Family rules for the money','Update the basic paperwork','Nothing more needed'];
const X5_DRILL = [
  {q:'Marcus, 51, married his second wife four years ago. His will still leaves everything to his first wife. The form for his workplace pension, which is worth more than his house, names her too. He has no power of attorney.',
   a:'Update the basic paperwork', w:'What is at risk when this money is passed on? The details are a will and a pension form that still name his first wife, and “no power of attorney”. No tax or family problem is described, so the answer is “Only the paperwork: the basic documents are out of date or missing”. What has been put in place? The fix is to bring the will, the form and the power of attorney up to date. The form matters most, because it usually overrides the will.'},
  {q:'A man had a stroke at 66. His wife could not reach his accounts, because only he was named on them and he had never signed a power of attorney. She needed a court order to pay the household bills from his money, and it took five months.',
   a:'Update the basic paperwork', w:'What is at risk when this money is passed on? The detail is “had never signed a power of attorney”: the problem is someone having to act for the owner, and the answer is “Only the paperwork: the basic documents are out of date or missing”. What has been put in place? A power of attorney would have been put in place by an afternoon of paperwork, and it was not.'},
  {q:'Walter, 62, is a widower with an estate of £2.4m, well above his country’s tax threshold. He has never given anything away. His accountant points out that each of his two sons could receive the yearly allowance now, and again every year. He sets up an automatic payment to each son at the start of every tax year and keeps a note of every payment.',
   a:'Give some away each year', w:'What is at risk when this money is passed on? The detail “an estate of £2.4m, well above his country’s tax threshold” points to tax on what is passed on. What has been put in place? “The yearly allowance … every year”, paid automatically with a written note of each payment, is gifts made during life, a little at a time. It needs no lawyer, company or yearly fee.'},
  {q:'A widow, 80, with a large estate gave each of her three grandchildren the yearly allowance every April for six years. Her adviser kept a list of every gift. She has plenty of income left to live on.',
   a:'Give some away each year', w:'What is at risk when this money is passed on? A large estate means tax on what is passed on, so the answer is “Tax on what is passed on, or on the growth still to come”. What has been put in place? “Every April for six years” is the yearly allowance used again and again, and “plenty of income left” shows she kept what she needs, which is the main way this goes wrong.'},
  {q:'Sunita, 70, will leave £1.5m to her two daughters, aged 24 and 27. The older is about to marry, and the younger has twice left a job after a few weeks. Sunita’s lawyer drafts terms: each daughter receives a third of her share at 30, a third at 35 and the rest at 40, and before the wedding the older daughter’s fiancé will sign an agreement that her share stays out of any divorce settlement.',
   a:'Family rules for the money', w:'What is at risk when this money is passed on? The details are a daughter “about to marry” and another who “has twice left a job”, which are about how heirs behave and what could happen to the money, not about tax. The answer is “The people: how heirs behave, or who holds control”. What has been put in place? Payouts in stages at 30, 35 and 40, and a signed agreement about divorce: family agreements.'},
  {q:'A family firm’s founder dies. His three children each inherit a third of the shares, and each has a vote. Two want to sell and one wants to keep it. They have not spoken since the funeral, and the firm cannot make decisions. Their father never discussed his plans with any of them.',
   a:'Family rules for the money', w:'What is at risk when this money is passed on? The details are “each has a vote”, “not spoken since the funeral” and “never discussed his plans”: the danger is how heirs behave and who holds control, so the answer is “The people”. A will and a trust would not have fixed this. What would have: agreements about decisions, an outside decision-maker, and talking early, which is family rules for the money.'},
  {q:'Oluwaseun, 50, owns 30% of a start-up that is worth £250,000 on paper, and she expects an offer of about £8m for it in three years. Her country taxes estates above £1m at 40%. A specialist lawyer advises moving her shares into a trust with a professional trustee before the offer, and says the move itself needs checking for tax.',
   a:'A trust or holding company', w:'What is at risk when this money is passed on? The details are an estate threshold of £1m at 40% and a value that will jump from £250,000 to £8m: “tax on … the growth still to come”. What has been put in place? Moving the shares into a trust with a professional trustee before the growth, so the rise happens outside her estate. The warning that the move itself needs checking is the cost side of this answer.'},
  {q:'The Adeyemi family set up a holding company ten years ago to buy a block of flats. The parents are the directors and the children are the shareholders. The flats have since tripled in value, and the parents’ own estate, which is above their country’s tax threshold, does not include that growth.',
   a:'A trust or holding company', w:'What is at risk when this money is passed on? An estate above the tax threshold, and growth that would have made it bigger: “tax on what is passed on, or on the growth still to come”. What has been put in place? A holding company owned by the children, set up before the flats grew. That is assets moved into a company so later growth is outside the parents’ estate, and the parents keep control as directors.'},
  {q:'A single man, 45, has no children, rents his flat, has a workplace pension and £30,000 in savings. He updated his will, which leaves everything to his sister, and his beneficiary form last year, and his sister holds his power of attorney. A website tells him that everyone should have a trust.',
   a:'Nothing more needed', w:'What is at risk when this money is passed on? He has a small and simple estate and the documents are current, so the answer is “Nothing: the case is simple and the documents are current”. What has been put in place? The will, the form and the power of attorney already cover it: “Nothing new”. A trust would add yearly costs to solve no problem he has.'},
  {q:'A retired couple, 75 and 77, have a house worth £450,000 and £80,000 in savings, well below the tax threshold. Their will, beneficiary forms and powers of attorney were all renewed this spring. Their two children get on well and know where everything is. A bank adviser suggests a family holding company “for peace of mind”.',
   a:'Nothing more needed', w:'What is at risk when this money is passed on? “Well below the tax threshold”, “all renewed this spring” and children who “get on well” rule out tax, paperwork and people. The answer is “Nothing: the case is simple and the documents are current”. What has been put in place? The current documents already cover it, so the holding company is a product being sold, not a fix.'}
];

const WEALTH_ERR = [
  {q:'Rich people don’t pay tax.',
   w:'The question it skips is “Where is the money leaking out?”, and the answer it ignores is “In tax: paid sooner or more often than it had to be”. Wealthy people do pay tax. What they often do is pay it later, by not selling investments that have gone up (Delay the tax by not selling), and pay less of it by keeping income-paying investments in sheltered accounts (Right account for each investment). The claim names no mechanism, and the mechanism is the part you could use.'},
  {q:'You need offshore structures and a private bank to do any of this.',
   w:'The question it skips is “What is the main danger to this money?” It sells a fix before naming a danger. Below a few million, structures such as a trust or holding company cost more in yearly fees and filing than they save, and the fixes that do most of the work are cheap or free: Switch to index funds, Spend a percentage of the pot, Years of spending in cash and Update the basic paperwork. Complexity is often sold because it is profitable to sell, not because it carries the load.'},
  {q:'Diversification is protection against ignorance.',
   w:'The question it skips is “What is the main danger to this money?” The line is a real saying and it is true for building: concentrating is how most people go from a little to a lot. Once the money matters, the danger is “One event could wreck it”, and spreading it out is how that is answered, for example Sell down on a schedule. Building and keeping are different jobs with different rules. The exception is an owner who runs the business: Keep the big holding on purpose, with its three supports.'},
  {q:'Seventy percent of wealthy families lose it by the second generation.',
   w:'The question it skips is “What is at risk when this money is passed on?” The claim says money is lost without saying how: tax, the people, or the paperwork. The number is also shaky. As far as anyone has traced it, it comes from one consulting firm’s survey of its own clients, not from an independent count. Ask who counted, who was counted, and who sells the cure. What is safe to say is that handovers fail in three ways and each has a fix.'},
  {q:'I don’t need a cash buffer. I’ll just sell when I need the money.',
   w:'The question it skips is “What could force a bad move with this money?” The answer “Living costs have to be taken out of investments that can fall” is exactly this person’s situation. It works until the month you need the money is a month when prices are down 30%, and then you sell more units for the same sum and they are gone for the recovery. The fix is Years of spending in cash. It is not an investment decision. It is a way never to be forced into one.'},
  {q:'My house is my best investment.',
   w:'The question it skips is “Where is the single weak point?” A home is one holding, often most of what a household owns (“One holding is most of what you own”), usually bought with a large loan (“Borrowed money could force a sale at the worst moment”). It cannot be sold a bit at a time, pays no income, and costs upkeep, insurance and tax. It may still be the right thing to own, for reasons that have nothing to do with returns, such as having somewhere to live. Compare it with what it is, not with a savings account.'},
  {q:'It’s only a 1% fee.',
   w:'The question it skips is “Where is the money leaking out?” The answer “In fees: what the funds, adviser and platform charge” is exactly where it leaks. A fee is a share of the pot, but what you receive is the return. Against 4% growth a year, 1% is a quarter of it, taken every year whether or not the return arrives, and on £100,000 over thirty years that is about £81,600 (£324,000 against £243,000). Divide the fee by the growth you expect before judging it. The fix is Switch to index funds, unless the charge is A cost worth paying.'},
  {q:'Whole-life insurance is a great investment.',
   w:'The question it skips is “Where is the money leaking out?” Whole-life insurance bundles three things: cover that pays out when you die, a savings account inside the policy, and a commission to the seller. Priced separately, term insurance covers the risk and an index fund does the investing, usually for much less in total. Bundling is what makes the comparison hard. Ask what each part costs. A commission pays for what is sold to you, so it is not A cost worth paying.'},
  {q:'I’ll sort out my will when I’m older.',
   w:'The question it skips is “What is at risk when this money is passed on?” The answer “Only the paperwork: the basic documents are out of date or missing” applies at any age, because a handover starts with an accident or an illness as well as with old age. A power of attorney is for the day you cannot act for yourself, and a beneficiary form can send a pension to an ex-partner at 40 as easily as at 80. The fix is Update the basic paperwork, and it takes an afternoon.'},
  {q:'A good adviser picks funds that beat the market, so a high fee is worth it.',
   w:'The question it skips is “Where is the money leaking out?” The answer “In fees: what the funds, adviser and platform charge” fits. A fund’s charge is certain and the extra return is a hope, and many costly funds do not beat the market once the charge is paid. The test from the cards: if you stopped paying, what important thing would stop happening? Stopping a fee for picking funds would not stop a tax return being filed or a will being updated, so it is not A cost worth paying. The fix is Switch to index funds.'}
];

const WEALTH_SPECIMENS = [
  {q:'A £4m portfolio has sat with the same wealth manager for fifteen years: 0.9% to the manager, 0.8% average fund charge, and a platform fee on top. Returns have tracked the benchmark before costs and trailed it after. The proposal is to keep the same allocation and move the core holdings to index funds at 0.07%.',
   sub:{P1:['erosion'],E1:['fees'],E2:['indexcore']},outcome:'feecore',
   why:'First question, “What is the main danger to this money?” Nothing dramatic is described: the case is about charges that come out every year, so the answer is “A slow leak”. Second question, “Where is the money leaking out?” The detail is “0.9% to the manager, 0.8% average fund charge, and a platform fee”, which is “In fees: what the funds, adviser and platform charge”. Third question, “What fixes that leak?” The detail is “move the core holdings to index funds at 0.07%”, which is “Swap costly funds for index funds that charge far less”. The name is Switch to index funds. A cost avoided is kept in full, while the extra return an expensive fund promises is only a hope.',
   fals:'If the fee were also buying tax work, estate paperwork and a rebalancing rule the household would otherwise skip, the answer would be A cost worth paying. Ask what the fee buys, not just what it costs.'},

  {q:'A household holds index equities, a corporate bond fund and a property trust across a taxable account and a tax-sheltered one. The bonds and the property trust — which distribute income taxed every year — sit in the taxable account, while the equities they intend to hold for twenty years sit in the shelter.',
   sub:{P1:['erosion'],E1:['taxnow'],E2:['whichacct']},outcome:'location',
   why:'First question, “What is the main danger to this money?” The case is about tax paid in every ordinary year, with no single event, bill or handover: “A slow leak”. Second question, “Where is the money leaking out?” The detail is that the bonds and the property trust “distribute income taxed every year” and sit in the taxable account, so tax is paid more often than it had to be: “In tax: paid sooner or more often than it had to be”. Third question, “What fixes that leak?” The income-paying holdings belong inside the sheltered account, which is “Hold the investments that pay taxable income inside the sheltered account”. The name is Right account for each investment. Swapping the two changes no risk and no market exposure.',
   fals:'If both accounts were taxed the same way, there would be nothing to fix. This fix exists only because the two kinds of account are taxed differently.'},

  {q:'A holding bought at £80,000 is now worth £600,000 and has drifted to 14% of the portfolio against a 10% target. Rather than sell £180,000 and realise the gain, the next two years of contributions are directed entirely into the underweight assets until the weights come back.',
   sub:{P1:['erosion'],E1:['taxnow'],E2:['dontsell']},outcome:'defer',
   why:'First question, “What is the main danger to this money?” The mix has drifted, which could point to “Bad timing”, but the case’s own words are worried about a tax bill: “Rather than sell £180,000 and realise the gain”. Tax that did not have to be paid is “A slow leak”. Second question, “Where is the money leaking out?” A sale would realise a large gain and trigger tax that nobody has to trigger: “In tax: paid sooner or more often than it had to be”. Third question, “What fixes that leak?” “Contributions are directed … into the underweight assets”, so nothing is sold: “Hold the gains instead of selling, so the tax is not yet due”. The name is Delay the tax by not selling. The tax is delayed and not removed, and meanwhile it stays invested.',
   fals:'If this one holding became most of what the household owns, say 40%, the risk would matter more than the tax. It would become “One event could wreck it”, and paying the tax would be the price of fixing it.'},

  {q:'In a year when markets fell, a couple sold a fund showing a £40,000 loss, set it against gains realised elsewhere that year, and bought a different fund tracking a similar but not identical index the same afternoon. Market exposure was unchanged throughout.',
   sub:{P1:['erosion'],E1:['taxnow'],E2:['uselosses']},outcome:'harvest',
   why:'First question, “What is the main danger to this money?” The case is about reducing this year’s tax, with no event, bill or handover: “A slow leak”. Second question, “Where is the money leaking out?” The detail is “gains realised elsewhere that year”, which would be taxed, so the leak is “In tax: paid sooner or more often than it had to be”. Third question, “What fixes that leak?” They “sold a fund showing a £40,000 loss, set it against gains”, which is “Sell something at a loss on purpose, to cancel tax on gains”. The name is Use a loss to cut tax. “Similar but not identical” is the detail that keeps the loss from being disallowed under the buy-back rule.',
   fals:'This does not create money on its own. The new holding has a lower cost, so there is more gain to tax later. The benefit is the delay, which is worth having but is not a free gain.'},

  {q:'A household with £2.4m invested has been drawing £180,000 a year, set when the portfolio was worth £3.1m and never revisited. The plan is to redefine the draw as 3.5% of the portfolio’s value each January, and to adjust spending to that figure rather than the other way round.',
   sub:{P1:['erosion'],E1:['spend'],E2:['fixedpct']},outcome:'burnrate',
   why:'First question, “What is the main danger to this money?” Money is draining out each year through the amount taken, with no single event or bill: “A slow leak”. Second question, “Where is the money leaking out?” The detail is “£180,000 a year, set when the portfolio was worth £3.1m and never revisited”: that is now 7.5% of £2.4m, so it is “In withdrawals: more is taken out than the pot can carry”. Third question, “What fixes that leak?” “3.5% of the portfolio’s value each January” is “Take out a percentage of the pot, reset every year”. The name is Spend a percentage of the pot. At 3.5% the household would spend £84,000 this year, and the number would move with the pot.',
   fals:'A draw covered by stable income that does not come from the pot, such as a pension or a long lease, is a different case. This fix is for withdrawals from money that can fall.'},

  {q:'A family pays a flat £9,000 a year to an adviser who runs the annual rebalance, handles the tax filings and the loss harvesting, keeps the estate documents current, and talked them out of selling in two separate falls. They hold index funds and the adviser takes no commission from anything.',
   sub:{P1:['erosion'],E1:['worthit'],E2:['nothing_e']},outcome:'acceptcost',
   why:'First question, “What is the main danger to this money?” The case lists several kinds of work, but the thing being judged is a charge, so the question is whether it is a leak: “A slow leak”. Second question, “Where is the money leaking out?” The details are “a flat £9,000”, “takes no commission” and named work the family would otherwise skip, so the answer is “Nowhere: the charge pays for something real”. Third question, “What fixes that leak?” There is nothing to fix: “Nothing: the charge pays for work that would not otherwise get done”. The name is A cost worth paying. It includes the part that is hardest to price, being talked out of a sale at the moment it would have done the most damage.',
   fals:'The same service charged as a percentage of assets, or paid for by commission, changes the answer. The cost would grow with the pot while the work did not, and the adviser’s interest would stop pointing at you.'},

  {q:'After a lockup expires, a founder’s stake is 68% of her net worth. She sets a schedule selling a fixed number of shares each quarter for three years, executed automatically regardless of price, and accepts the tax as it falls due.',
   sub:{P1:['shock'],S1:['oneasset'],S2:['staged']},outcome:'diversify',
   why:'First question, “What is the main danger to this money?” One company’s shares are most of what she owns, so one event could wreck it: “One event could wreck it”. Second question, “Where is the single weak point?” The detail is “68% of her net worth”: “One holding is most of what you own”. Third question, “What is being done about it?” “A fixed number of shares each quarter for three years … regardless of price”, with the tax accepted, is “Selling it down on a schedule and paying the tax”. The name is Sell down on a schedule. The schedule is automatic and ignores price on purpose, because a plan to sell “when it recovers” is a timing guess people rarely carry out.',
   fals:'If she still ran the company day to day, keeping a large stake would be a choice and the answer would be Keep the big holding on purpose, provided the three supports were in place.'},

  {q:'An executive cannot sell for two more years under the terms of her award. Her company shares are about 70% of everything she owns. She buys put options below the current price and sells calls above it, capping her loss and her gain over that window, at a net cost of a little over 1% a year.',
   sub:{P1:['shock'],S1:['oneasset'],S2:['capped']},outcome:'hedge',
   why:'First question, “What is the main danger to this money?” One holding could wreck her finances: “One event could wreck it”. Second question, “Where is the single weak point?” The detail is “about 70% of everything she owns”: “One holding is most of what you own”. Third question, “What is being done about it?” She “cannot sell for two more years”, so she buys puts as a floor and sells calls as a ceiling, “capping her loss and her gain”: “The loss is capped, and nothing is sold”. The name is Cap the loss without selling. It buys time through the window and does not solve the weak point, and it has a cost: the net 1% a year and the gains given up above the ceiling.',
   fals:'If she could simply sell, capping the loss would usually be the more expensive route to a worse result. These contracts earn their cost only where a sale is blocked.'},

  {q:'A family with £6m in assets carries a £5m umbrella liability policy over their home, car and rental cover. It costs a few hundred pounds a year, and the events it covers — a serious injury claim, a catastrophic driving fault — are individually very unlikely.',
   sub:{P1:['shock'],S1:['liability'],S2:['transfer']},outcome:'insure',
   why:'First question, “What is the main danger to this money?” A single serious claim could take much of £6m: “One event could wreck it”. Second question, “Where is the single weak point?” The events named, “a serious injury claim, a catastrophic driving fault”, are claims that could reach everything they own: “One event could bring a claim against everything you own”. Third question, “What is being done about it?” A “£5m umbrella liability policy” for “a few hundred pounds a year” is a payment to an insurer: “The big loss is passed to an insurer for a payment”. The name is Insure the big loss. It is cheap because the event is rare, and bought because the event would be unrecoverable.',
   fals:'A policy that bundles an investment account into the cover is a different product sold under the same word, and should be priced as two things. And if the household could pay the loss from savings, the cover would not be needed.'},

  {q:'Six rental properties are each held in a separate limited company, none of which owns any other. The family home is held personally and outside all of them. A tenant injury claim at one property would meet that company’s assets and stop there.',
   sub:{P1:['shock'],S1:['liability'],S2:['ringfence']},outcome:'entity',
   why:'First question, “What is the main danger to this money?” A tenant injury claim is a single event that could be large: “One event could wreck it”. Second question, “Where is the single weak point?” The danger is a claim reaching everything, which is “One event could bring a claim against everything you own” when assets sit in one name. Third question, “What is being done about it?” “Each held in a separate limited company” with the home outside is “The assets are split up so one claim cannot reach the rest”. The name is Separate companies for separate assets. The claim “would meet that company’s assets and stop there”.',
   fals:'Separation fails if the companies are not kept apart in practice: mixed-together bank accounts, personal guarantees on the loans, or one insurance policy across all of them can make the separation collapse when it matters.'},

  {q:'A household borrows only against property, fixed for ten years, at 45% of value, with no clause allowing the lender to demand repayment while payments are current. Nothing is borrowed against the investment portfolio.',
   sub:{P1:['shock'],S1:['borrowed'],S2:['terms']},outcome:'deleverage',
   why:'First question, “What is the main danger to this money?” The case is about borrowing, which could force a sale: “One event could wreck it”. Second question, “Where is the single weak point?” Borrowed money is the issue, so “Borrowed money could force a sale at the worst moment”. Third question, “What is being done about it?” The details are “45% of value” (modest), “fixed for ten years” (a fixed rate) and “no clause allowing the lender to demand repayment” (cannot be called in): “The borrowing is modest, at a fixed rate, and cannot be called in”. The name is Borrow modestly, on safe terms. The danger of borrowing is rarely the interest rate. It is a lender who can demand money back just when prices are low.',
   fals:'Cheap, safe-terms borrowing against a spread-out set of assets can be entirely sensible. The terms carry the judgement, not the existence of a loan. A margin loan against a share portfolio would be the opposite on every count.'},

  {q:'A founder who runs her company day to day holds 70% of her wealth in it. The other 30% is in a global index fund she never touches, three years of household spending sits in cash outside the business, and the family home carries no borrowing secured against company stock.',
   sub:{P1:['shock'],S1:['oneasset'],S2:['eyesopen']},outcome:'retain',
   why:'First question, “What is the main danger to this money?” One company is most of her wealth: “One event could wreck it”. Second question, “Where is the single weak point?” The detail is “70% of her wealth”: “One holding is most of what you own”. Third question, “What is being done about it?” She “runs her company day to day”, and all three supports are named: the rest is in “a global index fund”, “three years of household spending sits in cash outside the business”, and “no borrowing secured against company stock”. That is “It is kept on purpose, because they run it”. The name is Keep the big holding on purpose.',
   fals:'Take away any one of the three supports, such as spending that depends on the company’s cash or a loan secured on its shares, and this becomes a concentration nobody has dealt with, wearing the language of conviction.'},

  {q:'A retired couple keep three years of living costs in cash and short government bonds, replenished from equities only in years the market finished higher. In the two years it did not, they spent from the reserve and sold nothing.',
   sub:{P1:['timing'],T1:['drawdown'],T2:['yearscash']},outcome:'cashbuffer',
   why:'First question, “What is the main danger to this money?” The holdings are not the issue; the issue is when money has to come out: “Bad timing”. Second question, “What could force a bad move with this money?” The detail is that they live on this pot, so “Living costs have to be taken out of investments that can fall”. Third question, “What takes the pressure off?” “Three years of living costs in cash and short government bonds” is “Several years of spending held in cash and short bonds”. The name is Years of spending in cash. The use rule is in the case: spend from it and sell nothing in a down year, and refill from shares in an up year.',
   fals:'Holding cash costs return, and it is a drag in the years when nothing goes wrong. That is its price, like the premium on an insurance policy, and the alternative is being a forced seller at the worst moment.'},

  {q:'School fees of £24,000 fall due each September for the next six years. The family holds six government bonds, one maturing each August, in the amounts required.',
   sub:{P1:['timing'],T1:['datefixed'],T2:['maturity']},outcome:'ladder',
   why:'First question, “What is the main danger to this money?” The case is about bills landing on dates: “Bad timing”. Second question, “What could force a bad move with this money?” The detail is “£24,000 … each September for the next six years”, a bill of a known size on a known date, so “A bill of a known size falls due on a known date”. The bills are years away and the money is held in bonds, not sitting in cash, so it is not “already safe in cash”. Third question, “What takes the pressure off?” “Six government bonds, one maturing each August” is “A bond that matures just before each bill is due”. The name is A bond for each bill.',
   fals:'It works only for bills that are fixed in size and date. An open-ended cost, such as care fees, or a business needing cash at an unknown moment, needs money you can reach quickly instead.'},

  {q:'After a strong run, equities have drifted from a 60% target to 71%. A written policy says any asset class more than five points from target is traded back on the next rebalancing date, and it is executed without discussion.',
   sub:{P1:['timing'],T1:['drift'],T2:['bands']},outcome:'rebalance',
   why:'First question, “What is the main danger to this money?” The pot is riskier than chosen, a matter of timing and the mix: “Bad timing”. Second question, “What could force a bad move with this money?” No bill or need is described. The detail is “drifted from a 60% target to 71%”: “Nothing forces it: the mix has slowly drifted from the plan”. Third question, “What takes the pressure off?” “A written policy says any asset class more than five points from target is traded back” is “A written rule that trades the mix back to the plan when it drifts too far”. The name is Rebalance by written rule. “Executed without discussion” is the point: the correction always feels wrong, so the rule decides it in advance.',
   fals:'In a taxable account, selling to rebalance can cost more in tax than the risk it removes. Directing new savings and income to the underweight assets achieves the same thing without a tax bill.'},

  {q:'A deposit of £70,000 is needed in four months for a house purchase that is already under offer. It is sitting in an instant-access savings account, and the rest of the household’s portfolio is invested as usual and untouched.',
   sub:{P1:['timing'],T1:['nothing_t'],T2:['nothing_t2']},outcome:'matched',
   why:'First question, “What is the main danger to this money?” The case is about a dated bill, which is “Bad timing”, unless the money is already safe. Second question, “What could force a bad move with this money?” The details are “needed in four months” and “sitting in an instant-access savings account”: “Nothing: the money for the bill is already safe in cash”. Third question, “What takes the pressure off?” Nothing is needed: “Nothing: it is already covered”. The name is Already covered. Compare A bond for each bill: that would be for a bill years away with the money still invested. Here the money is already in cash.',
   fals:'If the purchase date were unknown and possibly years away, the answer would change, because how long the money must wait decides where it belongs.'},

  {q:'Before a private company’s value grew, the founder settled his shares into a trust with a professional trustee and fixed terms. The company is now worth many times what it was at the transfer, and that growth has accrued inside the trust rather than in his estate.',
   sub:{P1:['succession'],U1:['taxdeath'],U2:['structure']},outcome:'trust',
   why:'First question, “What is the main danger to this money?” The case is about what happens to the money when it passes on: “It is lost in the handover”. Second question, “What is at risk when this money is passed on?” The detail is growth “rather than in his estate”: the estate is what may be taxed, and the growth would have enlarged it, so “Tax on what is passed on, or on the growth still to come”. Third question, “What has been put in place?” “Settled his shares into a trust with a professional trustee and fixed terms” is “The shares or assets are moved into a trust or company with a trustee and fixed terms”. The name is A trust or holding company. Timing is the technique: it was done before the growth.',
   fals:'A trust is hard or impossible to undo, costs money to run, and hands control to a trustee. Below the size where the tax saved exceeds those costs, it is a product being sold and not a solution.'},

  {q:'Two parents each give the annual tax-free allowance to each of their three children every year, and have done so for eleven years. Nothing is dramatic in any single year, and none of it returns to the estate.',
   sub:{P1:['succession'],U1:['taxdeath'],U2:['giveearly']},outcome:'gifting',
   why:'First question, “What is the main danger to this money?” The case is about passing money on over the years: “It is lost in the handover”. Second question, “What is at risk when this money is passed on?” The case is about shrinking the estate, since “none of it returns to the estate”: “Tax on what is passed on, or on the growth still to come”. Third question, “What has been put in place?” “each give the annual tax-free allowance … every year, and have done so for eleven years” is “Gifts made during life, a little at a time, while the sums are small”. The name is Give some away each year. Eleven years across several recipients moves a large sum with no structure and no yearly fees.',
   fals:'Gifts made shortly before death are pulled back into the estate in many countries, and giving away money you may need is the commonest way this goes wrong. The allowance does not build up, so a skipped year is lost.'},

  {q:'A family with substantial assets stages distributions at 25, 30 and 35, appoints a non-family trustee holding a veto, requires prenuptial agreements before any marital transfer, and has had the children in the annual review meeting since their mid-teens.',
   sub:{P1:['succession'],U1:['people'],U2:['rules']},outcome:'governance',
   why:'First question, “What is the main danger to this money?” The case is about what happens when the money reaches the next generation: “It is lost in the handover”. Second question, “What is at risk when this money is passed on?” Nothing here is about tax. Every detail is about people: payouts by age, a veto, marriage, children in the meeting. So “The people: how heirs behave, or who holds control”. Third question, “What has been put in place?” “stages distributions at 25, 30 and 35”, “a non-family trustee holding a veto” and “prenuptial agreements” are “Family agreements: payouts in stages, an outside decision-maker, rules about marriage”. The name is Family rules for the money. A trustee with a veto appears here too, which is why the second question, tax or people, decides.',
   fals:'Rules imposed with no explanation produce the resentment they were meant to prevent. The part that does the work here is the years of sitting in the meeting, more than the veto.'},

  {q:'A widowed parent’s will is eleven years old and predates two grandchildren. The pension beneficiary form still names a former spouse. Nobody holds a power of attorney, and no list of accounts exists anywhere.',
   sub:{P1:['succession'],U1:['paperwork'],U2:['basics']},outcome:'basicdocs',
   why:'First question, “What is the main danger to this money?” Nothing is wrong with markets, fees or loans. What could go wrong is when the money passes on or someone has to act: “It is lost in the handover”. Second question, “What is at risk when this money is passed on?” The details are “eleven years old”, “still names a former spouse” and “nobody holds a power of attorney”: no tax or family dispute is described, only stale documents, so “Only the paperwork: the basic documents are out of date or missing”. Third question, “What has been put in place?” The fix is to bring the three documents up to date: “The will, beneficiary forms and power of attorney are brought up to date”. The name is Update the basic paperwork. The form usually overrides the will, so the stale form is the most dangerous item.',
   fals:'Nothing here depends on wealth. The same documents are the answer at every level of assets.'},

  {q:'A couple in their thirties have a mortgage, two workplace pensions and an index fund. There is no business, no property portfolio and no dependant with particular needs. They have current wills, named beneficiaries on both pensions, and powers of attorney. An adviser has proposed a family trust and a holding company.',
   sub:{P1:['succession'],U1:['nothing_u'],U2:['nothing_u2']},outcome:'simple',
   why:'First question, “What is the main danger to this money?” The only question in the case is about passing money on, so “It is lost in the handover”. Second question, “What is at risk when this money is passed on?” The details are “no business, no property portfolio and no dependant with particular needs” and “current wills, named beneficiaries … and powers of attorney”: nothing you can point to in tax, people or paperwork, so “Nothing: the case is simple and the documents are current”. Third question, “What has been put in place?” The documents already do the job: “Nothing new: the documents already in place cover it”. The name is Nothing more needed. The proposed trust and company would add yearly costs and loss of control to solve a problem that does not exist.',
   fals:'A business with outside shareholders, property held in several names, an estate near the tax threshold, or a dependant, such as a disabled child, who needs support for life would each change this answer. That is when structure starts to earn its cost.'}
];

const WEALTH_COURSE = [

{ tag:'One', title:'Keeping is not making',
  cards:[
  {h:'What this unit is for',
   b:`<p class="lead">By the end of this unit you can read a short account of someone’s money and say what the main danger to it is. Every other unit in this subject builds on that one skill.</p>
      <p>You already hear these accounts. A friend’s parents lost money in a business. A neighbour had to sell shares in a bad year to pay for a new roof. A relative died and the family argued for years. Each one is a different danger and each has a different fix. Money advice usually goes wrong because it sells a fix before anyone has named the danger.</p>
      <p>In this subject, <b>“this money”</b> means everything a person has built up and wants to keep: savings, investments, property, a share of a business. It does not mean income, the pay that arrives each month.</p>
      <p>The subject uses one set of questions, called <b>the key</b>. This unit teaches the first question: <b>What is the main danger to this money?</b> It has four possible answers. Each later unit takes one answer and teaches the two questions that come after it, which lead to a named fix. Every card and every drill uses the key’s exact words, so a name you learn here is the name you see everywhere else.</p>
      <p>Every idea in this subject is taught in the same six parts: <b>What it is</b>, <b>Example</b>, <b>Sounds like</b> (or <b>Looks like</b>), <b>Catch it</b> (the one question to ask yourself), <b>What to do</b>, and <b>Don’t confuse it with</b>.</p>`},

  {h:'Money words used throughout',
   b:`<p>Short meanings for the words this subject leans on. Later units add their own, each explained where it first appears.</p>
      <ul>
        <li><b>The pot.</b> All of this money counted together: what you would have if you added up the savings, investments and anything else you hold to keep. Advisers call the investments in it your <b>portfolio</b>, and what you own minus what you owe your <b>net worth</b>.</li>
        <li><b>A share.</b> A small slice of ownership in a company. Its price goes up and down every day. Advisers also call shares <b>equities</b>.</li>
        <li><b>A bond.</b> A loan you make to a government or a company. It pays you <b>interest</b>, a regular payment for the use of your money, and promises to repay the amount on a set date.</li>
        <li><b>A fund.</b> A basket that holds many shares or bonds, so you buy a slice of the basket in one go instead of choosing each one. The slices are called <b>units</b>, and a unit’s price rises and falls with what is in the basket.</li>
        <li><b>Cash.</b> Money in a bank or savings account. Its value does not rise and fall from day to day the way shares and funds do.</li>
        <li><b>The mix.</b> How the pot is split between shares, bonds and cash, for example 60% shares and 40% bonds. Advisers call that split your <b>allocation</b>.</li>
        <li><b>Inflation.</b> The general rise in prices. £100 buys less each year. A <b>real</b> return means growth <i>after</i> allowing for inflation, so it is growth in what the money can actually buy.</li>
        <li><b>A platform.</b> The website or firm that holds your investments for you. It usually charges its own fee.</li>
        <li><b>A broker.</b> A firm that buys and sells investments on your instructions.</li>
        <li><b>An adviser.</b> A person or firm you pay to recommend what to do with money. A <b>wealth manager</b> is an adviser who also runs the investments for you.</li>
        <li><b>A pension.</b> A long-term account for retirement. Many countries tax it less than ordinary savings.</li>
      </ul>`},

  {h:'Keeping is a different job from making',
   b:`<p class="lead">Building money and keeping money follow opposite rules, and the mistake that matters is using the wrong set for where you are.</p>
      <p>To build, people usually <b>concentrate</b>: they put a large share of what they have into one thing, such as one business, one property or one employer’s shares. Concentration is how most people get from a little to a lot, because it gives one bet the chance to grow large. It also means one bet can fail large.</p>
      <p>Once the money matters, because a family depends on it or because you could not earn it again, the job changes. Now you are trying not to lose what you have. The four dangers in this unit are the ways that happens, and each has its own fix.</p>
      <p>Using the wrong set is costly in both directions. A 25-year-old who protects everything never builds anything. A 58-year-old who still has everything in one company can end up starting again at 65.</p>
      <p>One limit to know now: nothing in this subject turns a small pot into a large one. How much you earn and how much you start with matter far more. These ideas stop a pot from shrinking for avoidable reasons.</p>
      <p><b>What to do.</b> Ask yourself which job you are doing today. If you are still building, concentrating can be a reasonable bet. If the money now matters, because people depend on it or you could not earn it again, switch to the keeping questions in the next cards.</p>`},

  {h:'A slow leak',
   b:`<p><b>What it is.</b> Money draining away a little at a time, every year, through things that never feel urgent. It has three usual sources: <b>fees</b> (what the funds, the adviser and the platform charge), <b>tax</b> paid sooner or more often than it had to be, and <b>withdrawals</b> (taking out more to spend than the pot can keep up with). No single year looks bad. The damage comes from compounding.</p>
      <p><b>Compounding</b> means growth that earns growth. £100 growing 4% a year becomes £104, and next year the 4% is worked out on £104. Do that for thirty years and £100,000 becomes about £324,000. (The 4% here is a real return, after inflation, used as an illustration. Nobody can promise a return.) Now take away a 1% yearly cost, so the pot grows 3% instead. The same £100,000 becomes about £243,000. A cost that sounds like “only one percent” has taken about a quarter of the final amount. The money taken each year is also money that stops growing.</p>
      <p><b>Example.</b> A couple have £300,000 in funds that charge 1.5% a year. That is £4,500 a year, taken from the funds before they see a statement. No bill ever arrives, so they never feel it.</p>
      <p><b>Sounds like.</b> “It’s only one percent.” “The adviser looks after all that.” “We take out about the same each year; it’s what we’re used to.”</p>
      <p><b>Catch it.</b> Is money going out every year in small amounts, with no single bad moment? If so, the key’s answer is <b>A slow leak</b>.</p>
      <p><b>What to do.</b> Add up every yearly cost: fund fees, adviser fee, platform fee, and the tax you pay on the investments. Then work out each as a share of the pot and compare it with the growth you hope for. A 1% cost against 4% growth is a quarter of the growth. Unit two teaches the six answers that follow.</p>
      <p><b>Don’t confuse it with</b> <b>Bad timing</b>. Taking out too much each year is a slow leak. Being forced to sell on one bad day to pay a bill is bad timing. The test: is the problem how much comes out, or that it had to come out on a bad day?</p>`},

  {h:'One event could wreck it',
   b:`<p><b>What it is.</b> Most of the money is tied to one thing, so a single event can take most of it at once. It comes in three forms. <b>One holding is most of what you own</b>, such as one company’s shares or one business. <b>A claim against everything:</b> a <b>liability</b> is something you could be legally made to pay, such as damages after someone is hurt, and if all you own sits in one name, one claim can reach all of it. <b>Borrowed money:</b> a lender can force you to sell at the worst moment.</p>
      <p><b>Example.</b> A man owns a small café. Almost everything he has, apart from his home, is in it. The lease ends next year and the landlord may not renew. That is one fact that could remove his income and most of his savings together.</p>
      <p><b>Sounds like.</b> “It’s a great company.” “It has never let us down.” “It’s simpler to keep it all in one name.”</p>
      <p><b>Catch it.</b> Could one thing, on one day, take most of this money? If yes, the key’s answer is <b>One event could wreck it</b>. A list that looks like several things can still be one: a job, shares in the same employer and a loan against those shares all fall together.</p>
      <p><b>What to do.</b> Find the single event that would hit several things at the same time. Unit three teaches the six fixes that follow.</p>
      <p><b>Don’t confuse it with</b> <b>A slow leak</b>. A leak does damage in every ordinary year. This does none, until the one year it does everything. Also not <b>Bad timing</b>: there the holdings are sound and the damage comes from when you must sell. Here the event is the damage.</p>`},

  {h:'Bad timing',
   b:`<p><b>What it is.</b> The investments are sound and nothing is wrong with them, but money has to move at a bad moment. Two usual causes. A <b>bill or living cost</b> falls due when prices are low, so you must sell cheap to pay it. Or the <b>mix has drifted</b>: shares rose faster than bonds, so the pot is riskier than you chose, and a fall hurts more than you planned.</p>
      <p>Why a forced sale in a fall does lasting harm: to raise £10,000 when a fund has dropped from £1.00 to £0.70 a unit, you sell about 14,300 units instead of 10,000. When prices recover, those extra units are gone and cannot take part.</p>
      <p><b>Example.</b> A retired couple pay for living costs by selling a few shares each month. The market falls 30%. They must sell more shares for the same money, and those shares are not there for the recovery.</p>
      <p><b>Sounds like.</b> “We just sell a bit each month.” “The deposit is due in March; the shares will probably be fine.” “I haven’t looked at the split in years.”</p>
      <p><b>Catch it.</b> Are the holdings sound, but a date or a need forces a move at a bad moment? If so, the key’s answer is <b>Bad timing</b>.</p>
      <p><b>What to do.</b> List the dated bills and the living costs the pot has to fund, and check where the money for them sits. Unit four teaches the two questions that follow.</p>
      <p><b>Don’t confuse it with</b> <b>A slow leak</b> (how much comes out, not when) or <b>One event could wreck it</b> (what you own, not when you must sell it).</p>`},

  {h:'It is lost in the handover',
   b:`<p><b>What it is.</b> The money is lost not in markets but when it moves to someone else, or when someone has to act for its owner. It goes wrong in three ways: <b>tax</b> on what is passed on, <b>people</b> (heirs who fall out, spend it badly or hold control alone) and <b>paperwork</b> (documents that are out of date or missing, so the money goes to the wrong person or nobody can reach it). The key documents are a <b>will</b> (says who gets what), a <b>beneficiary form</b> (a form with a pension company, insurer or bank that names who receives that account, and which usually overrides the will) and a <b>power of attorney</b> (names someone to handle your affairs if you cannot). A handover can follow a death. It can also follow illness, when someone must make decisions on your behalf.</p>
      <p>Two words you will see. Your <b>estate</b> is everything you own when you die. Your <b>heirs</b> are the people who inherit it.</p>
      <p><b>Example.</b> A farmer dies and leaves a farm worth £3m to his daughter. His country taxes the part of an estate above £1m at 40%, so the bill is £800,000. His daughter has almost no cash, so she sells a third of the land to pay it. The farm was well run, and no market had anything to do with the loss.</p>
      <p><b>Sounds like.</b> “The children will sort it out.” “It’s all in my head.” “We don’t talk about that.” “We have never worked out what the tax would be.”</p>
      <p><b>Catch it.</b> Does the danger arrive when this money changes hands, or when someone has to act for its owner? If so, the key’s answer is <b>It is lost in the handover</b>.</p>
      <p><b>What to do.</b> Check the cheapest thing first, the paperwork. Then ask whether the estate is big enough for tax to matter, and whether the people who will inherit could handle it. Unit five teaches the two questions that follow.</p>
      <p><b>Don’t confuse it with</b> the market dangers above. The money can be perfectly invested and still be lost this way.</p>`},

  {h:'The four dangers side by side',
   b:`<p>The first question of the key is <b>What is the main danger to this money?</b> These are its four answers, in the key’s exact words. The key prints a short reminder under each answer, listing the usual forms the danger takes. The reminders are in the middle column, and each form has its own card above.</p>
      <table class="k pair">
      <tr><th>The key’s answer</th><th>The reminder under it</th><th>Quick test</th></tr>
      <tr><td><b>A slow leak</b></td><td>fees, extra tax, overspending</td><td>Does it drip out every year?</td></tr>
      <tr><td><b>One event could wreck it</b></td><td>one big holding, a lawsuit, borrowed money</td><td>Could one thing take most of it in a day?</td></tr>
      <tr><td><b>Bad timing</b></td><td>a bill or a fall in prices at the wrong moment, or a drifting mix</td><td>Is it about when money must move?</td></tr>
      <tr><td><b>It is lost in the handover</b></td><td>passing it on: tax, heirs, paperwork</td><td>Does it happen when someone else takes over?</td></tr>
      </table>
      <p>When a case shows more than one, pick the one the case’s own words are worried about: the plan, the decision or the complaint it describes. Do not pick every risk a clever person could invent.</p>
      <p><b>What to do.</b> Before you look for a fix, say the danger in the key’s words. If you cannot choose between two, ask what the person in the case is actually worried about.</p>`},

  {h:'Four things that help at every size',
   b:`<p>Four fixes work whatever the size of the pot, and each answers a different danger. Each gets its own card in a later unit, under the name given here.</p>
      <ul>
        <li><b>Switch to index funds</b> (cheaper funds) answers <b>A slow leak</b>.</li>
        <li><b>Spend a percentage of the pot</b>, so spending shrinks when the pot shrinks, also answers <b>A slow leak</b>.</li>
        <li><b>Years of spending in cash</b> answers <b>Bad timing</b>.</li>
        <li><b>Update the basic paperwork</b> answers <b>It is lost in the handover</b>.</li>
      </ul>
      <p><b>One event could wreck it</b> has no single cheap fix, because the right answer depends on what the weak point is and how big it is. That is why it gets six answers in unit three.</p>
      <p><b>What to do this week.</b> For each of the four dangers, write one line about your own money, even if it is only “nothing yet”. Most people find that the first line takes a minute, and the paperwork line takes an afternoon.</p>`},

  {h:'When nothing is wrong',
   b:`<p>Not every case needs a fix. Each of the four dangers has one answer that means “leave it alone”, and getting those right saves as much money as the fixes do.</p>
      <p><b>What it is.</b> You still pick the danger the case is worried about first. It is the later questions that can come back with “nothing needs doing”: the charge turns out to buy real work, the big holding is kept on purpose by the person who runs it, the money for the bill is already safe in cash, or the paperwork is current and the case is simple.</p>
      <p>Four names mean “leave it alone”: <b>A cost worth paying</b>, <b>Keep the big holding on purpose</b>, <b>Already covered</b> and <b>Nothing more needed</b>. Each is taught, with its own test, in the unit for its danger.</p>
      <p><b>Catch it.</b> Can you point to the problem in the words of the case? If you cannot, do not invent one.</p>
      <p><b>What to do.</b> When someone offers you a product or a structure, ask “what problem does this solve for me, in numbers?” Advice that always prescribes something is selling.</p>`},

  {h:'Worked example: Dev’s first year of retirement',
   b:`<p>The case. Dev is 63 and has just retired. He has £800,000 in savings and investments, nearly all in shares. He plans to take £30,000 a year to live on. His friend retired two years ago and had to sell shares at a loss last winter to pay her bills. Dev wants to avoid that.</p>
      <p>The question: <b>What is the main danger to this money?</b> Take the four answers one at a time.</p>
      <ol>
        <li><b>A slow leak?</b> Is something draining the pot every year? He takes £30,000 from £800,000, which is 3.75%, and the case mentions no fees or extra tax. No.</li>
        <li><b>One event could wreck it?</b> Is one holding, one claim or one loan most of it? The shares are spread across the market and no loan or claim is mentioned. No.</li>
        <li><b>Bad timing?</b> Dev will live on a pot that is nearly all shares, so some shares must be sold every year whatever their price. His friend’s story, “had to sell shares at a loss last winter to pay her bills”, is exactly what he wants to avoid. Yes.</li>
        <li><b>It is lost in the handover?</b> Nothing about heirs, tax on death or paperwork. No.</li>
      </ol>
      <p>The key’s answer is <b>Bad timing</b>. The next question for that branch is “What could force a bad move with this money?”, and unit four teaches it.</p>`}
  ],
  drill:{kind:'pick', key:'x1'} },

{ tag:'Two', title:'A slow leak',
  cards:[
  {h:'What this unit is for',
   b:`<p class="lead">By the end of this unit you can look at a case where money is draining away slowly, say where it is leaking out, and name the fix.</p>
      <p>This is the danger most households have and least notice. Nothing dramatic happens. A fee comes out of a fund, a sale triggers a tax bill, or the same amount is taken out of the pot year after year, and the pot is a little smaller than it should be, every year, for decades.</p>
      <p>Unit one gave the first question of the key: <b>What is the main danger to this money?</b> This unit starts from its answer <b>A slow leak</b>, and teaches the two questions that come next:</p>
      <ul>
        <li><b>Where is the money leaking out?</b></li>
        <li><b>What fixes that leak?</b></li>
      </ul>
      <p>The six fixes, under the names used everywhere in this subject, are <b>Switch to index funds</b>, <b>Right account for each investment</b>, <b>Delay the tax by not selling</b>, <b>Use a loss to cut tax</b>, <b>Spend a percentage of the pot</b> and <b>A cost worth paying</b>. The last one means a charge that is not a leak, so nothing needs fixing.</p>`},

  {h:'Words used in this unit',
   b:`<p>Read these once. Each comes back on the cards that need it.</p>
      <ul>
        <li><b>Index fund.</b> A fund that simply copies a published list of companies (an <i>index</i>, for example the 500 largest US companies), with nobody choosing what to buy. With no research team and little trading it can charge very little, often 0.05% to 0.2% a year. A fund where managers choose investments to try to beat the market is <b>actively managed</b> and often charges 0.75% to 1.5% a year or more.</li>
        <li><b>Sheltered account.</b> An account the law treats kindly for tax, so what you earn inside it is taxed less, or later. Examples are a pension, an ISA in the UK, and a 401(k) or IRA in the US. The names and rules differ by country. A <b>taxable account</b> is an ordinary investment account with no such treatment.</li>
        <li><b>Income from an investment.</b> Money it pays out while you hold it: <i>interest</i> from bonds and savings, <i>dividends</i> (a company’s payout to its shareholders), rent from a property fund. In a taxable account this is usually taxed every year.</li>
        <li><b>A gain and a loss.</b> A gain is how far something has risen above what you paid for it. A loss is how far it has fallen below.</li>
        <li><b>Realise.</b> To sell, so that a gain or a loss becomes real for tax. A gain you still hold is <b>unrealised</b>: it exists on paper and no tax is due yet. Tax on a rise in price is normally due only when the gain is realised.</li>
        <li><b>A withdrawal.</b> Money taken out of the pot to spend.</li>
      </ul>`},

  {h:'Switch to index funds',
   b:`<p><b>What it is.</b> Replacing funds that charge a lot with index funds that charge very little, keeping the same kind of investments. Advisers call this keeping the “core” of the pot low-cost. It works because a fund’s charge is certain and is taken every year, while the extra performance an expensive fund promises is only a hope, and many expensive funds do not beat the market once their charges are paid.</p>
      <p><b>Example.</b> £100,000 grows for thirty years at 4% a year before charges. In a fund charging 1.2% a year it ends at about £229,000. In an index fund charging 0.1% it ends at about £315,000. The difference, about £86,000, comes from the charge alone.</p>
      <p><b>Sounds like.</b> “Our manager beat the market a few years back.” “I don’t pay anything; the charge is built into the fund.” “We have always been in these funds.”</p>
      <p><b>Catch it.</b> Does the case show a yearly charge for running the investments, taking a large slice of the growth the pot can reasonably expect? In the key, the answer to <b>Where is the money leaking out?</b> is <b>In fees: what the funds, adviser and platform charge</b>. The answer to <b>What fixes that leak?</b> is <b>Swap costly funds for index funds that charge far less</b>.</p>
      <p><b>What to do.</b> Add up every yearly charge: the fund’s charge (look for “ongoing charge” or “expense ratio” on its fact sheet), any adviser fee, and the platform fee. Divide the total by the growth you expect: 1% against 4% growth is a quarter of the growth. If it is high, move to an index fund covering the same markets. Check the tax first. Selling a fund in a taxable account can realise a gain and bring a tax bill, so make the switch inside a sheltered account, or in the taxable account where the gain is small, or send new money into the cheaper fund.</p>
      <p><b>Don’t confuse it with</b> <b>A cost worth paying</b>. A charge for tax filings or estate paperwork buys work you would otherwise skip. A fund’s charge for picking investments buys a hope. The test: if you stopped paying, what important thing would stop happening?</p>`},

  {h:'Right account for each investment',
   b:`<p><b>What it is.</b> If you have both a sheltered account and a taxable account, which investment sits in which account changes your tax, even when the overall mix is exactly the same. The rule: the investments that pay out the most taxable income each year (bond funds, property funds, high-dividend funds) go in the sheltered account, where that income is taxed less or not at all. Investments you hold for the long term mainly for their price rise go in the taxable account, because a price rise is not taxed until you sell. Advisers call this <b>asset location</b>: not what you own, but where you keep it.</p>
      <p><b>Example.</b> Ana has £50,000 in a bond fund paying 4% interest, which is £2,000 a year, and £50,000 in a global shares fund she plans to hold for twenty years. She also has a £50,000 sheltered account and a £50,000 taxable account. With the bond fund in the taxable account and a 30% tax rate, she pays £600 of tax on the interest every year. With the two swapped, that interest is taxed less or not at all, and the shares’ growth is not taxed until she sells. She owns the same investments at the same risk.</p>
      <p><b>Sounds like.</b> “I put the same mix in every account.” “The bond fund is in the taxable account because that is where there was room.”</p>
      <p><b>Catch it.</b> Is tax being paid every year on income that a sheltered account could have kept from tax? The answer to <b>Where is the money leaking out?</b> is <b>In tax: paid sooner or more often than it had to be</b>. The answer to <b>What fixes that leak?</b> is <b>Hold the investments that pay taxable income inside the sheltered account</b>.</p>
      <p><b>What to do.</b> List each account and what it holds. Beside each holding, write the yearly income it pays. Move the highest-income holdings towards the sheltered account, within that account’s limits and your country’s rules. Selling inside a sheltered account triggers no tax, but selling in the taxable account might, so check before you sell there.</p>
      <p><b>Don’t confuse it with</b> <b>Delay the tax by not selling</b>. That one is about when you sell. This one is about where an investment is held. It does nothing if you only have one kind of account.</p>`},

  {h:'Delay the tax by not selling',
   b:`<p><b>What it is.</b> Tax on a rise in price is normally due only when you sell, which is when the gain is realised. If you do not sell, the tax is not yet due, and the money that would have gone to tax stays invested and keeps growing. The tax is still owed if you sell later, so it is delayed, not removed. (In some countries the tax on a gain is wiped out at death. The rule is called a <b>step-up</b>: what you paid is reset to the value at death. It varies by country.) Advisers call this <b>deferral</b>.</p>
      <p>The saving comes from the delay. Money that would have left now keeps earning in the meantime.</p>
      <p><b>Example.</b> A household holds a fund bought for £20,000 that is now worth £50,000. The mix has drifted from plan, and they want to <b>rebalance</b>, which means trading back to plan by selling some of what has grown and buying some of what has lagged. Their way is to sell £10,000 of the fund. That sale realises a gain of £6,000 (the part they sell cost £4,000), and at 20% tax the bill is £1,200. Instead, they put next year’s £10,000 of new savings into the investments they hold too little of. The mix comes back to plan with no sale, and the £1,200 stays invested.</p>
      <p><b>Sounds like.</b> “Let’s take some profit.” “Sell a bit of the winners to rebalance.”</p>
      <p><b>Catch it.</b> Is a sale about to trigger tax that nobody has to trigger? The answer to <b>Where is the money leaking out?</b> is <b>In tax: paid sooner or more often than it had to be</b>. The answer to <b>What fixes that leak?</b> is <b>Hold the gains instead of selling, so the tax is not yet due</b>.</p>
      <p><b>What to do.</b> Before selling anything that has gone up, ask whether the sale is needed or whether new money can do the job. Send new savings and income payments to what you hold too little of. Sell when there is a real reason to.</p>
      <p><b>Don’t confuse it with</b> <b>Right account for each investment</b> (where to hold things, not when to sell). It is also not the whole story: if one holding has grown to be most of what you own, the risk matters more than the tax, and paying the tax is the price of fixing it, as unit three explains. Unit four teaches a written rule for putting the mix back to plan, which is about safety. Here the aim is only to avoid a tax bill.</p>`},
  {h:'Use a loss to cut tax',
   b:`<p><b>What it is.</b> Selling an investment that has fallen below what you paid, so the loss counts for tax and can be set against gains you made elsewhere this year, lowering this year’s tax. You then buy a similar investment straight away, so you stay invested. Advisers call this <b>loss harvesting</b>.</p>
      <p>There is a rule to respect, often called the <b>buy-back rule</b>. Many countries ignore the loss if you buy back the same investment within about a month. So buy something similar but not identical, such as a different fund that follows a similar list of companies.</p>
      <p><b>Example.</b> Earlier this year Sam sold a fund and realised a £3,000 gain. Another fund he bought for £10,000 is now worth £7,000. He sells it, which realises a £3,000 loss that cancels the gain, and at a 20% tax rate saves £600. The same afternoon he buys a different fund covering similar companies, so his place in the market is unchanged.</p>
      <p><b>Sounds like.</b> “It’s down, so I’ll hold on until it comes back.” “I don’t sell at a loss.”</p>
      <p><b>Catch it.</b> Is there a gain being taxed this year, and a holding sitting below what was paid for it? The answer to <b>Where is the money leaking out?</b> is <b>In tax: paid sooner or more often than it had to be</b>. The answer to <b>What fixes that leak?</b> is <b>Sell something at a loss on purpose, to cancel tax on gains</b>.</p>
      <p><b>What to do.</b> Near the end of the tax year, list the holdings in your taxable account that are below what you paid. Check your country’s rule on buying the same thing back. Sell the loser, buy the similar one, and keep a record. Do not bother for tiny losses, and it does nothing in a sheltered account, where there is no tax to cut.</p>
      <p>One honest limit: it does not create money. The new holding has a lower cost, so there is more gain, and more tax, when you sell it later. The benefit is the delay, which is the same benefit as the last card.</p>
      <p><b>Don’t confuse it with</b> <b>Delay the tax by not selling</b>. There you hold a winner and leave it alone. Here you sell a loser on purpose. Both reduce the tax you pay now.</p>`},

  {h:'Spend a percentage of the pot',
   b:`<p><b>What it is.</b> Setting each year’s spending as a fixed percentage of what the pot is worth that year, reset every January, instead of a fixed number of pounds. When prices fall, the pot is smaller, so the amount you take falls with it. Planners call the percentage a <b>withdrawal rate</b>. The point is that spending follows the pot, not the other way round.</p>
      <p>Planners often start between 3% and 4% a year for money that has to last thirty years. The right figure depends on your country, your age and how long the money must last, so treat it as the method’s starting point and not as a promise.</p>
      <p><b>Example.</b> A pot of £1,000,000 at 3.5% gives £35,000 to spend. After a 20% fall the pot is £800,000, and 3.5% gives £28,000, which is £7,000 less. A fixed £35,000 is now 4.4% of the smaller pot, a bigger bite from less money, just before the recovery.</p>
      <p><b>Sounds like.</b> “We need £50,000 a year whatever happens.” “We have always taken about this much.”</p>
      <p><b>Catch it.</b> Does the same amount come out every year, whatever the pot is worth? The answer to <b>Where is the money leaking out?</b> is <b>In withdrawals: more is taken out than the pot can carry</b>. The answer to <b>What fixes that leak?</b> is <b>Take out a percentage of the pot, reset every year</b>.</p>
      <p><b>What to do.</b> Divide this year’s withdrawals by the pot: that is your current rate. Pick a rate. Each January multiply it by the pot’s value and spend that. If it is less than you need, the gap is the real problem and deserves a straight look: earn more, spend less, or accept a smaller pot later. The uncomfortable part is not the arithmetic. It is that your lifestyle moves when the pot does.</p>
      <p><b>Don’t confuse it with</b> income that does not come from the pot, such as a pension that pays a fixed amount for life. That is not a withdrawal from something that can fall. Also not <b>Years of spending in cash</b> (unit four), which is about where the money you will spend is kept. This card is about how much you take.</p>`},

  {h:'A cost worth paying',
   b:`<p><b>What it is.</b> Not every charge is a leak. A charge is worth paying when it buys work you would not otherwise do, and when the price follows the work and not the size of the pot. The work can be paperwork, such as tax returns, or it can be stopping you from a costly mistake, such as talking you out of selling in a panic when prices fall. This is one of the four “leave it alone” answers: nothing needs fixing.</p>
      <p>Three ways an adviser can be paid, because the way matters. A <b>flat fee</b> is a set sum for the work, such as £1,500 a year. A <b>percentage of assets</b> is a share of the pot every year, such as 1%. A <b>commission</b> is a payment the adviser gets from a company when you buy its product. A flat fee grows with the work. A percentage grows with the pot while the work stays the same. A commission is paid for what is sold to you, so the adviser’s interest points away from yours.</p>
      <p><b>Example.</b> Priya pays an accountant £1,500 a year. The accountant files her tax return, checks her accounts and reminds her to update her beneficiary forms, all things she would otherwise leave undone. On a £1,000,000 pot that is 0.15%. A fee of 1% of assets for the same work would be £10,000 a year, and £20,000 if the pot doubled with no extra work.</p>
      <p><b>Sounds like.</b> “She does the boring parts so I do not have to.” “It is a fixed fee and it is written down.”</p>
      <p><b>Catch it.</b> Can you name the work this charge pays for that you would not otherwise do, and is the price tied to that work? The answer to <b>Where is the money leaking out?</b> is <b>Nowhere: the charge pays for something real</b>. The answer to <b>What fixes that leak?</b> is <b>Nothing: the charge pays for work that would not otherwise get done</b>.</p>
      <p><b>What to do.</b> Ask two questions and get the answers in writing: “How are you paid?” and “What do I get for it?” If both answers are clear and the price does not rise just because the pot does, keep paying.</p>
      <p><b>Don’t confuse it with</b> <b>Switch to index funds</b>. A fund charging 1.4% to choose investments buys a hope of beating the market, and the work it does is not something you would otherwise skip. The test: if you stopped paying, what important thing would stop happening? For a service, something real. For that fund, nothing.</p>`},

  {h:'The slow-leak answers side by side',
   b:`<p>Two questions of the key come after <b>A slow leak</b>: <b>Where is the money leaking out?</b> and <b>What fixes that leak?</b> Here are their answers in the key’s exact words, with the name each leads to.</p>
      <table class="k pair">
      <tr><th>Where is the money leaking out?</th><th>What fixes that leak?</th><th>The name</th></tr>
      <tr><td>In fees: what the funds, adviser and platform charge</td><td>Swap costly funds for index funds that charge far less</td><td><b>Switch to index funds</b></td></tr>
      <tr><td>In tax: paid sooner or more often than it had to be</td><td>Hold the investments that pay taxable income inside the sheltered account</td><td><b>Right account for each investment</b></td></tr>
      <tr><td>In tax: paid sooner or more often than it had to be</td><td>Hold the gains instead of selling, so the tax is not yet due</td><td><b>Delay the tax by not selling</b></td></tr>
      <tr><td>In tax: paid sooner or more often than it had to be</td><td>Sell something at a loss on purpose, to cancel tax on gains</td><td><b>Use a loss to cut tax</b></td></tr>
      <tr><td>In withdrawals: more is taken out than the pot can carry</td><td>Take out a percentage of the pot, reset every year</td><td><b>Spend a percentage of the pot</b></td></tr>
      <tr><td>Nowhere: the charge pays for something real</td><td>Nothing: the charge pays for work that would not otherwise get done</td><td><b>A cost worth paying</b></td></tr>
      </table>
      <p><b>Choosing between the three tax fixes.</b> Is a sale about to realise a gain that nobody has to realise? <b>Delay the tax by not selling.</b> Is there a holding below what you paid and a gain to cancel this year? <b>Use a loss to cut tax.</b> Is income being taxed every year in the wrong account? <b>Right account for each investment.</b></p>`},

  {h:'Worked example: Meera and Ken',
   b:`<p>The case. Meera and Ken are both 62 and had £1,200,000 seven years ago. They decided then to take £48,000 a year to live on, and they have never changed it. After two poor years the pot is £1,050,000. Their money is in index funds charging 0.1%. A tax adviser charges them a flat £1,200 a year to file their return.</p>
      <p><b>What is the main danger to this money?</b> No single event, bill or handover problem is described. Money is draining every year, and nothing dramatic is happening. The key’s answer is <b>A slow leak</b>.</p>
      <p><b>Where is the money leaking out?</b> Check each answer against the words of the case.</p>
      <ul>
        <li><b>In fees</b>? The funds charge 0.1%, which is very low. No.</li>
        <li><b>In tax</b>? Nothing says tax is paid early or in the wrong account. No.</li>
        <li><b>Nowhere</b>? The flat £1,200 for the tax return is a cost worth paying, but it is not the issue in this case. It is not the leak.</li>
        <li><b>In withdrawals</b>? “They have never changed it.” £48,000 was 4.0% of £1,200,000 when set, and is 4.6% of £1,050,000 now. The pot has shrunk and the amount has not. Yes.</li>
      </ul>
      <p>The key’s answer is <b>In withdrawals: more is taken out than the pot can carry</b>.</p>
      <p><b>What fixes that leak?</b> <b>Take out a percentage of the pot, reset every year</b>. At 3.5% of £1,050,000 they would spend £36,750 this year, and the figure would move up or down with the pot.</p>
      <p>The name is <b>Spend a percentage of the pot</b>. The £1,200 flat fee belongs to a different answer, <b>A cost worth paying</b>, and shows why the key asks the questions in order: the first thing a case mentions is not always the thing that is wrong.</p>`}
  ],
  drill:{kind:'pick', key:'x2'} },

{ tag:'Three', title:'One event could wreck it',
  cards:[
  {h:'What this unit is for',
   b:`<p class="lead">By the end of this unit you can look at a case where one thing could wreck the money, say where the single weak point is, and name the fix.</p>
      <p>You see this danger in the news more than any other: the person who lost everything with the company they worked for, the landlord sued for more than they own, the family forced to sell when a loan was called in. None of these were slow. They were one event, on one day.</p>
      <p>Unit one gave the first question of the key: <b>What is the main danger to this money?</b> This unit starts from its answer <b>One event could wreck it</b>, and teaches the two questions that come next:</p>
      <ul>
        <li><b>Where is the single weak point?</b></li>
        <li><b>What is being done about it?</b></li>
      </ul>
      <p>The six fixes, under the names used everywhere in this subject, are <b>Sell down on a schedule</b>, <b>Cap the loss without selling</b>, <b>Keep the big holding on purpose</b>, <b>Insure the big loss</b>, <b>Separate companies for separate assets</b> and <b>Borrow modestly, on safe terms</b>. One of them, <b>Keep the big holding on purpose</b>, is a “leave it alone” answer.</p>`},

  {h:'Finding the single weak point',
   b:`<p>The key’s question is <b>Where is the single weak point?</b> It has three answers. Each one is a different way for a single event to reach most of the money.</p>
      <p><b>One holding is most of what you own.</b> A <b>holding</b> is one investment you own: one company’s shares, one property, one business. If it is most of what you own, whatever hits it hits you. A list that looks like several things can still be one. Both spouses work for the same company, own its shares, and have borrowed against the shares to buy the house. That reads as a job, savings and a loan. It is one <b>exposure</b>, meaning one thing that can hurt you, because a single bad quarter at the company hits all three together. Ask what single event would move everything at once.</p>
      <p><b>One event could bring a claim against everything you own.</b> A <b>liability</b> is something you could be legally made to pay, such as damages after someone is hurt on your property or in your car. If everything you own sits in one name, one claim can reach all of it.</p>
      <p><b>Borrowed money could force a sale at the worst moment.</b> Borrowing to hold more than your own money would buy is called <b>leverage</b>. It becomes the weak point when the lender can demand repayment, or more security, just when prices have fallen. <b>Collateral</b> is whatever the lender is allowed to take if you do not repay.</p>
      <p><b>What to do.</b> Ask the three questions of your own money. What is my biggest single holding, as a share of everything I own? Is everything I own in one name, with no insurance above my ordinary policies? Does any loan let the lender demand money back or more security?</p>`},

  {h:'Sell down on a schedule',
   b:`<p><b>What it is.</b> Reducing a large holding by selling a fixed amount on fixed dates, whatever the price, and paying the tax as it falls due. Advisers call this staged diversification. To <b>diversify</b> means to spread money across many different investments so that no single one can wreck it.</p>
      <p>The schedule is the whole point. Everyone with a large holding means to reduce it “after the next results”, “once it gets back to a better price”, “when the time is right”. Those are guesses about timing, and people reliably fail to act on them, because the holding is tied up with how they made the money and with their sense of their own judgement. A schedule removes the decision.</p>
      <p><b>Example.</b> Jonas has £500,000 of shares in his employer, 60% of everything he owns. He sets up a sale of one-twelfth each quarter for three years, about £42,000 a time. Each time, the money from the sale buys a broad fund spread across many companies, and he sets aside money for the tax.</p>
      <p><b>Sounds like.</b> “I’ll sell when it gets back to £50.” “I’ll wait for the results.” “It has been very good to me.”</p>
      <p><b>Catch it.</b> Is one holding most of what the person owns, and can they sell it? The answer to <b>Where is the single weak point?</b> is <b>One holding is most of what you own</b>. The answer to <b>What is being done about it?</b> is <b>Selling it down on a schedule and paying the tax</b>.</p>
      <p><b>What to do.</b> Fix the size of each sale and the dates now, in writing. Arrange automatic sales if your broker allows it. Put aside the tax. Put the money from each sale in a broad fund and not in another single holding. If you work for the company, check the rules on when you are allowed to sell.</p>
      <p><b>Don’t confuse it with</b> <b>Cap the loss without selling</b> (used only when you cannot sell) and <b>Keep the big holding on purpose</b> (used when you run the thing yourself every day).</p>`},

  {h:'Cap the loss without selling',
   b:`<p><b>What it is.</b> Using two contracts so that a holding cannot fall below a set price, without selling it. Advisers call this a <b>hedge</b>. A <b>put option</b> is a contract that lets you sell a share at a set price, the <i>floor</i>, whatever it is worth by then. You pay a price for it, called a <b>premium</b>. A <b>call option</b> that you <i>sell</i> is a promise to hand your shares over at a higher price, the <i>ceiling</i>, if the buyer wants them. You receive a payment for that promise, and it roughly pays for the put. The result is a floor and a ceiling: protection from big falls in exchange for giving up big gains.</p>
      <p>Why not simply sell? Some people cannot. A <b>lockup</b> is a period after a company first sells shares to the public when the people who already own them, such as founders and staff, are not allowed to sell. Some employees are given shares with a rule against selling for a few years. Or the tax on selling would be so large that selling is not worth it. Capping the loss buys time. It does not remove the weak point, and it has a cost: the premium, or the gains you give up above the ceiling.</p>
      <p><b>Example.</b> Mina holds shares worth £100,000 that she cannot sell for two years. She buys a put that lets her sell at £90,000 and sells a call that obliges her to hand them over at £125,000. Over the two years the worst she can lose is about £10,000, and the most she can gain is about £25,000. Between those prices she simply owns the shares.</p>
      <p><b>Sounds like.</b> “I can’t sell until the lockup ends.” “I need protection but I’m not allowed to sell.”</p>
      <p><b>Catch it.</b> Is one holding most of what the person owns, and are they unable to sell it, or would the tax on selling be so large that selling is not worth it? The answer to <b>Where is the single weak point?</b> is <b>One holding is most of what you own</b>. The answer to <b>What is being done about it?</b> is <b>The loss is capped, and nothing is sold</b>.</p>
      <p><b>What to do.</b> Use it only when a sale is blocked or the tax on selling would be so large that selling is not worth it. Get specialist advice and read the contract. Plan what happens when the window ends, which is usually a move to selling down on a schedule.</p>
      <p><b>Don’t confuse it with</b> <b>Sell down on a schedule</b>. If you could simply sell, capping the loss is usually the more expensive road to a worse result. Also not <b>Insure the big loss</b>: there an insurer carries the risk. Here you still own the shares and build the floor yourself.</p>`},

  {h:'Keep the big holding on purpose',
   b:`<p><b>What it is.</b> When a person runs the business day to day, selling most of it would mean giving up what they do. So they keep the big holding deliberately, but safely. Advisers call this concentration held deliberately. It works only when three supports are in place. First, everything else they own is spread across many investments. Second, they hold several years of spending outside the business, so a bad year for the company never forces them to sell. Third, no loan is secured on the company’s shares. This is a “leave it alone” answer: the right move is to keep it, with the supports.</p>
      <p><b>Example.</b> Tomás runs a chain of bakeries that is 80% of what he owns. His pension and savings are in funds spread across hundreds of companies. About three years of household spending sits in a savings account that is not the business’s. His house loan is secured on the house and not on the business.</p>
      <p><b>Sounds like.</b> “I’m not selling the business.” “It’s what I know.” “I run it myself.”</p>
      <p><b>Catch it.</b> Does the person actively run the big holding, and are all three supports there? The answer to <b>Where is the single weak point?</b> is <b>One holding is most of what you own</b>. The answer to <b>What is being done about it?</b> is <b>It is kept on purpose, because they run it</b>.</p>
      <p><b>What to do.</b> Check each support. If one is missing, for example the home loan is secured on the company’s shares, fix that first. Without all three it is no longer a choice, only a big holding nobody has dealt with.</p>
      <p><b>Don’t confuse it with</b> simply not having got round to selling. The test is whether it is deliberate and supported. Also not <b>Sell down on a schedule</b>, which suits someone who does not run the thing and could sell it.</p>`},

  {h:'Choosing for one big holding',
   b:`<p>Three of the six fixes answer the same weak point: <b>One holding is most of what you own</b>. Ask these questions in order.</p>
      <ol>
        <li><b>Do they run it day to day?</b> If yes, and the three supports are in place, the answer is <b>Keep the big holding on purpose</b>.</li>
        <li><b>If not, can they sell it?</b> If yes, the answer is <b>Sell down on a schedule</b>.</li>
        <li><b>If they cannot sell it, or the tax would be so large that selling is not worth it,</b> the answer is <b>Cap the loss without selling</b>.</li>
      </ol>
      <p>What the case says about these three facts decides which of the three it is.</p>
      <p><b>What to do.</b> If you own a big holding, answer the three questions about it in this order and write the answers down. The order matters: someone who runs the business keeps it on purpose, someone who is free to sell sells it down, and only someone who is blocked from selling needs contracts to cap the loss.</p>`},
  {h:'Insure the big loss',
   b:`<p><b>What it is.</b> Paying an insurer to carry the loss that would ruin you, and carrying the small losses yourself. Advisers call this risk transfer. Insurance is priced so that, on average, you pay in more than you get back, because the insurer has costs and needs a profit. That is what it costs to hand a risk to someone else. So it is worth buying only against a loss you could not recover from. That rare, huge loss at the far end of what can happen is often called <b>the tail</b>. For everything you could pay from savings, you <b>self-insure</b>, which means you decide to pay it yourself. The price of cover is called a <b>premium</b>. A <b>deductible</b> is the first part of any claim that you pay yourself.</p>
      <p><b>Example.</b> Neil owns a house and savings worth £1.5m and drives to work. He has standard home and car cover and nothing above it. If he caused a serious crash, a claim could be far above his car policy’s limit and would reach his house and savings. He adds a £2m <b>umbrella liability policy</b>, extra cover that pays above the limits of his other policies, for about £250 a year. He also stops paying for warranties on phones and laptops, which he could replace from savings.</p>
      <p><b>Sounds like.</b> “I’ve never claimed, so insurance is a waste.” Or the opposite mistake: “Take the extended warranty, just in case.”</p>
      <p><b>Catch it.</b> Could a single accident or claim cost more than the household could survive, and is the answer to pay someone else to carry it? The answer to <b>Where is the single weak point?</b> is <b>One event could bring a claim against everything you own</b>. The answer to <b>What is being done about it?</b> is <b>The big loss is passed to an insurer for a payment</b>.</p>
      <p><b>What to do.</b> List the events that would cost more than you could absorb, and liability above all. Check that each is covered, to a limit large enough to matter. Drop cover on anything you could pay for from savings.</p>
      <p><b>Don’t confuse it with</b> <b>Separate companies for separate assets</b>. Insurance pays the claim. Separate companies limit what a claim can reach. A household with real exposure usually uses both, because they do different jobs.</p>`},

  {h:'Separate companies for separate assets',
   b:`<p><b>What it is.</b> Holding each asset that could attract a claim, such as each rental property, in its own limited company, so a claim at one reaches only that company’s assets and not the home or the other properties. A <b>limited company</b> is a legal person that owns things in its own name and is responsible for its own debts. Its owners are normally not personally liable for those debts beyond what they put in. Advisers call this entity separation, or ring-fencing, meaning fencing one thing off from the rest.</p>
      <p><b>Example.</b> Ravi owns three rental houses in his own name, and the family home. A tenant is badly hurt and sues. The claim can reach all three houses and the home. If each house were in its own company, the claim would reach only that company’s house.</p>
      <p>It fails in three well-known ways. <b>Commingling</b>: money moves between the companies, or between a company and the owner, as if they were one pot, and a court may treat them as one. A <b>personal guarantee</b>: the owner promises personally to repay a company’s loan, so the lender can come to the owner. <b>One insurance policy stretched across everything</b>: one claim then uses up the cover for all. And it costs money: each company means yearly filings, accounts and fees, so it pays off only when the assets are large enough that limiting a claim is worth more than the running costs.</p>
      <p><b>Sounds like.</b> “It is all in my name; it’s simpler.” “Just put them all in one company.”</p>
      <p><b>Catch it.</b> Could one claim reach everything because nothing separates the assets, and are the assets split up so one claim cannot reach the rest? The answer to <b>Where is the single weak point?</b> is <b>One event could bring a claim against everything you own</b>. The answer to <b>What is being done about it?</b> is <b>The assets are split up so one claim cannot reach the rest</b>.</p>
      <p><b>What to do.</b> Take advice from a lawyer and an accountant. Keep each company’s money and records strictly apart. Check every loan for a personal guarantee.</p>
      <p><b>Don’t confuse it with</b> <b>Insure the big loss</b>. An insurer pays the claim. The companies limit how far a claim can reach. Both are usually needed.</p>`},

  {h:'Borrow modestly, on safe terms',
   b:`<p><b>What it is.</b> Borrowing is not the danger. Borrowing on terms that can force a sale is. Advisers call the safe version leverage discipline. Safe terms have three parts. <b>Modest</b>: the loan is a fraction of the value of what it is secured on, for example a mortgage of under about half the property’s value. <b>Fixed</b>: the interest rate is set for years. <b>Cannot be called in</b>: the lender cannot demand repayment while you keep paying on time. A loan the lender can demand back is called <b>callable</b>. The usual example is a <b>margin loan</b>, a loan from a broker secured on your shares: when the shares fall, the broker demands more security or sells your shares for you, at the bottom. The rate is not the risk. The call is the risk.</p>
      <p><b>Example.</b> Ines wants to buy a flat. Plan A is a margin loan of £200,000 against her £300,000 share portfolio, at a low interest rate. If shares fall 35%, the portfolio is worth £195,000, below the loan, and the lender forces sales at the bottom. Plan B is a fixed ten-year mortgage for 40% of the flat’s value, with no clause letting the lender demand the money back while she pays. Plan B costs a little more in interest and cannot force a sale.</p>
      <p><b>Sounds like.</b> “The rate on the margin loan is so much lower.” “I can always sell if the bank gets nervous.”</p>
      <p><b>Catch it.</b> Could a lender’s demand, and not the owner’s own choice, force a sale at the worst moment? The answer to <b>Where is the single weak point?</b> is <b>Borrowed money could force a sale at the worst moment</b>. The answer to <b>What is being done about it?</b> is <b>The borrowing is modest, at a fixed rate, and cannot be called in</b>.</p>
      <p><b>What to do.</b> For each loan check three things: how big it is against the value behind it, whether the rate and term are fixed, and whether the lender can demand repayment. Read the terms and ask. Avoid borrowing against an investment portfolio.</p>
      <p><b>Don’t confuse it with</b> a rule against all borrowing. This is the safe way to borrow. It also shows up as one of the three supports under <b>Keep the big holding on purpose</b>: no loan secured on the company’s shares.</p>`},

  {h:'The one-event answers side by side',
   b:`<p>Two questions of the key come after <b>One event could wreck it</b>: <b>Where is the single weak point?</b> and <b>What is being done about it?</b> Here are their answers in the key’s exact words, with the name each leads to.</p>
      <table class="k pair">
      <tr><th>Where is the single weak point?</th><th>What is being done about it?</th><th>The name</th></tr>
      <tr><td>One holding is most of what you own</td><td>Selling it down on a schedule and paying the tax</td><td><b>Sell down on a schedule</b></td></tr>
      <tr><td>One holding is most of what you own</td><td>The loss is capped, and nothing is sold</td><td><b>Cap the loss without selling</b></td></tr>
      <tr><td>One holding is most of what you own</td><td>It is kept on purpose, because they run it</td><td><b>Keep the big holding on purpose</b></td></tr>
      <tr><td>One event could bring a claim against everything you own</td><td>The big loss is passed to an insurer for a payment</td><td><b>Insure the big loss</b></td></tr>
      <tr><td>One event could bring a claim against everything you own</td><td>The assets are split up so one claim cannot reach the rest</td><td><b>Separate companies for separate assets</b></td></tr>
      <tr><td>Borrowed money could force a sale at the worst moment</td><td>The borrowing is modest, at a fixed rate, and cannot be called in</td><td><b>Borrow modestly, on safe terms</b></td></tr>
      </table>
      <p>Three answers share the first weak point, and the choice between them is the one on the card before: do they run it, can they sell it. Two share the second, and usually both are needed, but the key asks which one the case shows.</p>`},

  {h:'Worked example: Kofi and the stair',
   b:`<p>The case. Kofi, 52, owns two houses that he rents out, and the one he lives in, all in his own name. Last month a tenant nearly sued him after falling on a worn stair. His solicitor said a serious claim could be £2m, against £500,000 of liability cover on his landlord policy. On the solicitor’s advice Kofi buys a £2m umbrella liability policy that sits above his existing policies, for about £280 a year. He does not change who owns the houses.</p>
      <p><b>What is the main danger to this money?</b> A tenant’s fall and a possible £2m claim: one event, not a slow drain, a bad moment or a handover. The key’s answer is <b>One event could wreck it</b>.</p>
      <p><b>Where is the single weak point?</b> Check the three answers.</p>
      <ul>
        <li><b>One holding is most of what you own?</b> He owns three houses, not one. No.</li>
        <li><b>Borrowed money could force a sale?</b> No loan is mentioned. No.</li>
        <li><b>One event could bring a claim against everything you own?</b> “All in his own name” and a claim of £2m against £500,000 of cover. A serious claim could reach all three houses. Yes.</li>
      </ul>
      <p><b>What is being done about it?</b> Look at what Kofi does. “Buys a £2m umbrella liability policy … for about £280 a year” is a payment to an insurer to carry the big loss. “He does not change who owns the houses” rules out splitting the assets up. The key’s answer is <b>The big loss is passed to an insurer for a payment</b>.</p>
      <p>The name is <b>Insure the big loss</b>. Separate companies would also have helped, and a careful adviser might add them, but the key asks what the case shows being done.</p>`}
  ],
  drill:{kind:'pick', key:'x3'} },

{ tag:'Four', title:'Bad timing',
  cards:[
  {h:'What this unit is for',
   b:`<p class="lead">By the end of this unit you can look at a case where the investments are sound but money has to move at a bad moment, say what could force that move, and name the fix.</p>
      <p>You see it when a family has to sell shares in a crash to pay a bill, or when someone near retirement finds their pot is far riskier than they chose. In both, nothing is wrong with what they own. The damage comes from when they have to act.</p>
      <p>Unit one gave the first question of the key: <b>What is the main danger to this money?</b> This unit starts from its answer <b>Bad timing</b>, and teaches the two questions that come next:</p>
      <ul>
        <li><b>What could force a bad move with this money?</b></li>
        <li><b>What takes the pressure off?</b></li>
      </ul>
      <p>The four fixes, under the names used everywhere in this subject, are <b>Years of spending in cash</b>, <b>A bond for each bill</b>, <b>Rebalance by written rule</b> and <b>Already covered</b>. The last one is a “leave it alone” answer.</p>`},

  {h:'Why the order of returns matters',
   b:`<p class="lead">Two pots can have exactly the same returns, in a different order, and end in very different places, if money is being taken out along the way.</p>
      <p>A <b>return</b> is how much an investment rose or fell in a year, as a percentage. Take a pot of £500,000. At the start of each year £30,000 comes out to live on. Over three years the investments return −30%, +15% and +15%, in one order or the other.</p>
      <ul>
        <li><b>The fall comes first</b> (−30%, +15%, +15%): the pot ends at about £361,000.</li>
        <li><b>The fall comes last</b> (+15%, +15%, −30%): the pot ends at about £390,000.</li>
        <li><b>Nothing is taken out</b>: either order ends at about £463,000.</li>
      </ul>
      <p>When the fall comes first, the later withdrawals come out of a pot that has already dropped, so more units are sold at low prices, and those units are not there when prices recover. The same returns, a different order, and £29,000 less. Advisers call this <b>sequence risk</b>, the risk from the order of returns.</p>
      <p>Nothing is wrong with the investments. The damage comes entirely from needing to take money out on a date you did not choose.</p>
      <p><b>What to do.</b> Nobody can predict the order, so do not try. Make sure the money you will need soon is not sitting in something that can fall. The next cards give the fixes: one for living costs, one for a dated bill, and one for a mix that has drifted.</p>`},

  {h:'Years of spending in cash',
   b:`<p><b>What it is.</b> Holding several years of living costs in cash and short bonds, so that the money for this year’s spending does not depend on the market this year. <b>Cash</b> here means money in a savings or similar account. A <b>short bond</b> is a bond that repays in a year or two, so its price moves very little. Advisers call this a <b>spending reserve</b> or a cash buffer.</p>
      <p>The rule for using it: in a year when the market has fallen, spend from this cash and sell no investments. In a year when it has risen, sell some investments to refill the cash. Two to five years is common. Past falls have often taken a few years to recover, and some have taken longer, so the amount is sized to cover an ordinary bad patch and not the worst one in history.</p>
      <p>It has a cost. Cash earns less than shares in the years when nothing goes wrong, which is most years. Think of that drag as the premium on an insurance policy against being forced to sell cheap. People tend to give up on holding this cash after a long calm stretch, and find out why they needed it in the first bad year after.</p>
      <p><b>Example.</b> Yasmin, 66, needs £24,000 a year from her investments on top of a state pension. She holds £48,000, two years, in a savings account and short bonds, and the rest in shares. When prices fall 25%, she spends from the cash and sells nothing. After a rise she sells some shares to top it back up.</p>
      <p><b>Sounds like.</b> “I’ll just sell some shares when I need cash.” “Cash earns nothing; it’s a waste.”</p>
      <p><b>Catch it.</b> Does spending have to come out of investments that can fall? The answer to <b>What could force a bad move with this money?</b> is <b>Living costs have to be taken out of investments that can fall</b>. The answer to <b>What takes the pressure off?</b> is <b>Several years of spending held in cash and short bonds</b>.</p>
      <p><b>What to do.</b> Work out your yearly spending beyond any income that does not come from the pot, and multiply it by the number of years you choose. Build it up over time. Set the rule in writing: a down year, spend from it; an up year, refill it.</p>
      <p><b>Don’t confuse it with</b> <b>Already covered</b> (one bill whose money is already safe), <b>A bond for each bill</b> (bills of a known size and date) and <b>Spend a percentage of the pot</b> (how much you take out, where this card is about where the money you will spend is kept).</p>`},

  {h:'A bond for each bill',
   b:`<p><b>What it is.</b> A <b>bond</b> repays a set amount on a set date, called its maturity, and a bond held to that date pays exactly that amount whatever its price did in between. So a bill of a known size on a known date, months or years away, can be matched by a bond that matures just before it. No view about the market is needed. A row of such bonds, one for each bill, is called a <b>ladder</b>. Advisers call this <b>liability matching</b>. Here a <b>liability</b> simply means a bill you know you will have to pay on a known date. That is a different use of the word from unit three, where it meant a legal claim.</p>
      <p><b>Example.</b> A couple’s fixed-rate mortgage ends in four years and they must then pay off the last £50,000 in one go. They buy a government bond that repays £50,000 a few months before that date. Whatever shares do in the meantime, the money will be there.</p>
      <p><b>Sounds like.</b> “The shares will probably be back up by then.” “We know the date; we just have not planned for it.”</p>
      <p><b>Catch it.</b> Is there a bill of a known size on a known date, with the money for it still in investments that can fall? The answer to <b>What could force a bad move with this money?</b> is <b>A bill of a known size falls due on a known date</b>. The answer to <b>What takes the pressure off?</b> is <b>A bond that matures just before each bill is due</b>.</p>
      <p><b>What to do.</b> List every dated bill over the next five to ten years, with its amount and date. For each, buy a bond, or a fund that holds bonds to a set date, that matures just before it is due. It works only for bills fixed in size and date. A cost with no fixed size or date, such as care fees or a business needing cash at an unknown moment, needs money you can reach quickly, which is a different job.</p>
      <p><b>Don’t confuse it with</b> <b>Years of spending in cash</b> (a store of cash for ongoing living costs, spent and refilled) and <b>Already covered</b> (a near bill whose money is already in cash). The difference: here the bill is a few years away and the money is still invested.</p>`},

  {h:'Rebalance by written rule',
   b:`<p><b>What it is.</b> Keeping the mix close to the plan with a rule written down in advance. The <b>mix</b> is how the pot is split between shares, bonds and cash, for example 60% shares and 40% bonds. The <b>plan</b> is the split you chose for the amount of risk you want, which advisers also call the <b>target</b>. <b>Drift</b> is what happens when shares rise faster than bonds: shares become a bigger slice, say 68% instead of 60%, and the pot is riskier than you chose, so a fall would hurt more than you planned.</p>
      <p>The rule says how far the mix may move before you correct it, for example “if any part is more than five points from plan, trade back to plan on the next review date”. A point means one percentage point, so with a 60% plan, anything above 65% or below 55% is more than five points away. The five points is the <b>band</b>. Trading back means selling some of what has risen and buying some of what has lagged. That feels wrong every time, because it means selling what has done well, and it falls due when people are either euphoric or frightened. That is why it is written down in advance. Advisers call this <b>mechanical rebalancing</b>: by rule, not by mood.</p>
      <p><b>Example.</b> Lena’s plan is 70% shares and 30% bonds with a band of five points. After a strong year shares are 77%. On the next review date, 1 January, the rule says to sell some shares and buy bonds until she is back to 70/30.</p>
      <p><b>Sounds like.</b> “It’s been doing so well, why would I sell?” “I haven’t looked at the split in years.”</p>
      <p><b>Catch it.</b> Is nothing forcing a sale, but the mix has slowly moved away from the plan? The answer to <b>What could force a bad move with this money?</b> is <b>Nothing forces it: the mix has slowly drifted from the plan</b>. The answer to <b>What takes the pressure off?</b> is <b>A written rule that trades the mix back to the plan when it drifts too far</b>.</p>
      <p><b>What to do.</b> Write down the plan and the band. Check on a fixed date once or twice a year, or when a part passes its band. Trade back. In a taxable account, selling can cost more in tax than the risk is worth, so use new savings and income payments to buy what you hold too little of first.</p>
      <p><b>Don’t confuse it with</b> <b>Delay the tax by not selling</b>. That one aims to avoid a tax bill. This one aims to hold the risk steady. They meet when you rebalance with new money. Also not <b>Years of spending in cash</b>, which deals with where spending money comes from.</p>`},

  {h:'Already covered',
   b:`<p><b>What it is.</b> When the money for a coming bill is already somewhere it cannot fall, such as a savings account, there is nothing to fix. This is a “leave it alone” answer. The rule behind it: money needed in the next few months belongs in cash, and money not needed for many years can be invested. The mistake this card protects against is investing short-dated money to avoid the feeling of cash sitting idle.</p>
      <p><b>Example.</b> Tara will pay £12,000 for a car in five months. The money sits in a savings account and her investments are untouched.</p>
      <p><b>Sounds like.</b> “It is just sitting there earning almost nothing.” “It’s for the car in the spring.”</p>
      <p><b>Catch it.</b> Is the money for the bill already somewhere it cannot fall? The answer to <b>What could force a bad move with this money?</b> is <b>Nothing: the money for the bill is already safe in cash</b>. The answer to <b>What takes the pressure off?</b> is <b>Nothing: it is already covered</b>.</p>
      <p><b>What to do.</b> Leave it where it is, and resist the urge to put it to work. If the date is far away or unknown, the answer changes.</p>
      <p><b>Don’t confuse it with</b> <b>Years of spending in cash</b> (a standing store of cash for living costs, spent and refilled) and <b>A bond for each bill</b> (bills years away, with the money still invested). The test: is the money for this bill already safe?</p>`},

  {h:'The bad-timing answers side by side',
   b:`<p>Two questions of the key come after <b>Bad timing</b>: <b>What could force a bad move with this money?</b> and <b>What takes the pressure off?</b> Here are their answers in the key’s exact words, with the name each leads to.</p>
      <table class="k pair">
      <tr><th>What could force a bad move with this money?</th><th>What takes the pressure off?</th><th>The name</th></tr>
      <tr><td>Living costs have to be taken out of investments that can fall</td><td>Several years of spending held in cash and short bonds</td><td><b>Years of spending in cash</b></td></tr>
      <tr><td>A bill of a known size falls due on a known date</td><td>A bond that matures just before each bill is due</td><td><b>A bond for each bill</b></td></tr>
      <tr><td>Nothing forces it: the mix has slowly drifted from the plan</td><td>A written rule that trades the mix back to the plan when it drifts too far</td><td><b>Rebalance by written rule</b></td></tr>
      <tr><td>Nothing: the money for the bill is already safe in cash</td><td>Nothing: it is already covered</td><td><b>Already covered</b></td></tr>
      </table>
      <p><b>The two that look alike.</b> Both <b>A bond for each bill</b> and <b>Already covered</b> are about a dated bill. The difference is whether the money is already safe. Still in investments that can fall: <b>A bond for each bill</b>. Already in cash: <b>Already covered</b>.</p>`},

  {h:'Worked example: the Wus’ two bills',
   b:`<p>The case. Pei and Will Wu, both 45, have £500,000, nearly all in shares. In three years they must pay £45,000 for their son’s wedding, and in six years £30,000 for a new roof. They have no other dated bills. They both still work, and their living costs are paid from their salaries. They keep saying, “The shares will be fine by then.”</p>
      <p><b>What is the main danger to this money?</b> The investments are not the problem and nothing is draining or wrecking them. The worry is dated bills and shares that might be down on those dates. The key’s answer is <b>Bad timing</b>.</p>
      <p><b>What could force a bad move with this money?</b> Check each answer against the case.</p>
      <ul>
        <li><b>Living costs taken from investments?</b> Their salaries pay for living costs. No.</li>
        <li><b>Nothing forces it: the mix has drifted?</b> Nothing is said about the mix. No.</li>
        <li><b>Nothing: the money for the bill is already safe in cash?</b> The money is in shares. No.</li>
        <li><b>A bill of a known size falls due on a known date?</b> “£45,000” in three years and “£30,000” in six. Yes.</li>
      </ul>
      <p>The key’s answer is <b>A bill of a known size falls due on a known date</b>.</p>
      <p><b>What takes the pressure off?</b> <b>A bond that matures just before each bill is due</b>: one bond for £45,000 maturing in just under three years, and another for £30,000 maturing in just under six.</p>
      <p>The name is <b>A bond for each bill</b>.</p>`}
  ],
  drill:{kind:'pick', key:'x4'} },

{ tag:'Five', title:'It is lost in the handover',
  cards:[
  {h:'What this unit is for',
   b:`<p class="lead">By the end of this unit you can look at a case where money is about to be passed on, or someone may have to act for its owner, say what is at risk, and name the fix.</p>
      <p>You see this when a family finds that a pension went to an ex-spouse, when siblings stop speaking over a will, or when a stroke leaves nobody able to touch the accounts. It is also where people are most often sold things they do not need.</p>
      <p>Unit one gave the first question of the key: <b>What is the main danger to this money?</b> This unit starts from its answer <b>It is lost in the handover</b>, and teaches the two questions that come next:</p>
      <ul>
        <li><b>What is at risk when this money is passed on?</b></li>
        <li><b>What has been put in place?</b></li>
      </ul>
      <p>The five fixes, under the names used everywhere in this subject, are <b>Update the basic paperwork</b>, <b>Give some away each year</b>, <b>Family rules for the money</b>, <b>A trust or holding company</b> and <b>Nothing more needed</b>. The last one is a “leave it alone” answer.</p>`},

  {h:'Where a handover goes wrong',
   b:`<p>The key’s question is <b>What is at risk when this money is passed on?</b> It has four answers. Each shows up in the words of a case.</p>
      <p><b>Tax on what is passed on, or on the growth still to come.</b> Your <b>estate</b> is everything you own when you die. In many countries an estate above a set threshold is taxed, and the heirs (the people who inherit) pay it out of what they receive. “Growth still to come” matters because anything you still own when you die counts in the estate at its value then, so something that will keep rising will make the estate, and the tax, larger. Moving it out early takes its future growth out of the estate. The words to look for: estate, threshold, a business or land that will grow.</p>
      <p><b>The people: how heirs behave, or who holds control.</b> The danger is not tax or paperwork but what people do with money: an heir’s divorce sending a share to an ex-spouse, a child who is not ready to run a business, one person holding all the control and making a decision that cannot be undone, a family that never talks about money. The words to look for: divorce, argue, who decides, not ready.</p>
      <p><b>Only the paperwork: the basic documents are out of date or missing.</b> A <b>will</b> says who gets what. A <b>beneficiary form</b> names who receives a pension or an account, and usually overrides the will. A <b>power of attorney</b> names someone to handle your affairs if you cannot, for example after a stroke. The words to look for: an old will, a form naming someone who has died or divorced, no power of attorney.</p>
      <p><b>Nothing: the case is simple and the documents are current.</b> No tax problem you can point to, no people problem, no stale paperwork. The words to look for: a small or simple estate, current documents, and an adviser selling something.</p>
      <p><b>What to do.</b> Read the case for those words before you reach for a fix. Tax words point to the first answer, people words to the second and stale-document words to the third. If you find none of them, it is the fourth.</p>`},

  {h:'Update the basic paperwork',
   b:`<p><b>What it is.</b> Making sure three documents are right and findable: the will, the beneficiary forms and the power of attorney. A will says who gets what. A beneficiary form, held by a pension company, insurer or bank, names who receives that account when you die, and it usually overrides the will, so a form that is out of date can send your largest asset to the wrong person whatever the will says. A power of attorney lets someone you trust handle your money if you are ill or injured. Without one, the family may need a court order, which takes time and money. Add a list of your accounts so someone can find everything. Advisers call this keeping the basic documents current.</p>
      <p><b>Example.</b> Grace, 38, wrote a will leaving everything to her partner. Since then she has had a child. Her life insurance form still names her late father. She has no power of attorney and nobody knows her passwords. If anything happened to her, the money from the insurance would go to her late father’s estate and not her child.</p>
      <p><b>Sounds like.</b> “I’ll do it when I’m older.” “It’s all in the filing cabinet somewhere.” “My wife knows.”</p>
      <p><b>Catch it.</b> Is the problem only that documents are old or missing? The answer to <b>What is at risk when this money is passed on?</b> is <b>Only the paperwork: the basic documents are out of date or missing</b>. The answer to <b>What has been put in place?</b> is <b>The will, beneficiary forms and power of attorney are brought up to date</b>.</p>
      <p><b>What to do.</b> It takes an afternoon. List every pension, life policy and account. For each, find the beneficiary form with the company that holds it and check that the person named is still the right one. Check the date of the will against your life events: marriage, divorce, a child, a death. Make a power of attorney. Write down where everything is. Do it again after any life event. The forms are free, and a will and a power of attorney cost a modest fee.</p>
      <p><b>Don’t confuse it with</b> <b>Nothing more needed</b>. There the documents are current. Here they are stale or missing. Fix these first, before any structure.</p>`},

  {h:'Give some away each year',
   b:`<p><b>What it is.</b> Giving money to family during your life, in amounts small enough to be free of gift tax, every year, starting early. Many countries let a person give away a limited amount each year without it counting for tax. That is the <b>yearly allowance</b>, which is also called the annual allowance, the annual tax-free allowance or the annual exemption. It does not build up: a year you skip is gone. Countries count it differently, some per giver and some per person receiving, so check yours. Each gift reduces your estate, the thing that may be taxed at death. Advisers call this lifetime gifting.</p>
      <p>Two limits. In many countries, gifts made shortly before death are pulled back into the estate and taxed as if never given. And giving away money you may need yourself is the commonest way this goes wrong.</p>
      <p><b>Example.</b> Rosa and Ahmed each give their daughter £3,000 a year, the yearly allowance where they live. After twelve years that is £72,000 out of their estate, with no lawyer, no company and no yearly fees. At an estate tax rate of 40%, that is £28,800 of tax avoided, provided their estate is above the country’s threshold.</p>
      <p><b>Sounds like.</b> “We’ll leave it all when we go.” “Giving it now would feel odd.”</p>
      <p><b>Catch it.</b> Is the risk tax on what will be passed on, and is the plan to give small regular amounts while alive? The answer to <b>What is at risk when this money is passed on?</b> is <b>Tax on what is passed on, or on the growth still to come</b>. The answer to <b>What has been put in place?</b> is <b>Gifts made during life, a little at a time, while the sums are small</b>.</p>
      <p><b>What to do.</b> Find your country’s yearly allowance and use it every year, starting early. Keep a record of each gift. Keep enough for your own needs. Check the rule on gifts close to death.</p>
      <p><b>Don’t confuse it with</b> <b>A trust or holding company</b>. A trust is a container, with a <b>trustee</b> (a person or firm that holds assets for others under written terms) and fixed terms. It costs money to run, and suits large or fast-growing assets. Gifts are simple and cheap, but limited in size.</p>`},

  {h:'Family rules for the money',
   b:`<p><b>What it is.</b> Agreements and habits that deal with the people, not the tax. Four common ones. <b>Payouts in stages</b>: instead of everything at once, heirs receive a share at set ages, such as a third at 25, 30 and 35. <b>An outside decision-maker</b>: a trusted professional, often a <b>trustee</b> (a person or firm who holds assets for others under written terms), who has a <b>veto</b>, the power to say no, over big decisions. <b>Rules about marriage</b>: a <b>prenuptial agreement</b> is a contract signed before marriage that says what happens to certain assets if the marriage ends. And <b>talking early</b>: heirs sit in on the yearly money meeting from their teens. Advisers call this family governance. It deals with the ways a handover goes wrong through people: a divorce, an heir who is not ready, one person with sole control.</p>
      <p><b>Example.</b> Joan and Femi want to leave a holiday home and savings to their three children. They agree that the house cannot be sold unless all three agree. The savings are paid out at 30, but a family adviser they trust can hold payments back if a child is in serious debt trouble. Each child has joined the yearly family money meeting since turning 18.</p>
      <p><b>Sounds like.</b> “They’re sensible; they will work it out.” “We don’t talk about money.” “Why would he need a prenup?”</p>
      <p><b>Catch it.</b> Is the danger in how heirs behave or who holds control, and not in tax? The answer to <b>What is at risk when this money is passed on?</b> is <b>The people: how heirs behave, or who holds control</b>. The answer to <b>What has been put in place?</b> is <b>Family agreements: payouts in stages, an outside decision-maker, rules about marriage</b>.</p>
      <p><b>What to do.</b> Start the conversation early. Write the agreements down. Choose the outside decision-maker with care. Explain the reasons, because rules imposed without explanation produce the resentment they were meant to prevent.</p>
      <p><b>Don’t confuse it with</b> <b>A trust or holding company</b>. A trustee with a veto can appear in both. The key’s question separates them: if the case is about tax on what is passed on, it is a trust. If it is about people and control, it is family rules.</p>`},
  {h:'A trust or holding company',
   b:`<p><b>What it is.</b> Moving assets into a legal container before they grow, so that the later growth happens outside your estate, and so that written terms say who gets what and when. A <b>trust</b> is an arrangement in which a trustee holds assets for the <b>beneficiaries</b>, the people they are held for, under written terms. A <b>holding company</b> is a company that owns other assets or shares. A family can set one up so that the children own its shares from the start while the parents stay in charge as its directors, and whatever the company buys then grows in value outside the parents’ estate. In both, timing is the technique: the value is moved while it is small, so everything it grows by afterwards stays outside the estate. The trustee and the terms also decide who receives what and when, which matters even where there is no estate tax.</p>
      <p>The limits are real. A trust is usually hard or impossible to undo: once the assets are in, you cannot take them back. There are yearly filings and accounting fees. Control passes to a trustee. The move itself can have a tax cost in some countries. It earns its cost where the estate is large enough that the tax saved is more than the running cost, or where a business, or a dependant, such as a disabled child, who will need support for life, is involved.</p>
      <p><b>Example.</b> Imran owns land worth £400,000. If planning permission is granted, which he expects within two years, it would be worth £4m. He transfers the land into a trust with a professional trustee now. If the permission comes, the £3.6m rise happens inside the trust and not in his estate.</p>
      <p><b>Sounds like.</b> “Everyone with money has a trust.” “My accountant says we should set up a structure.” “It will protect it from everything.”</p>
      <p><b>Catch it.</b> Is tax on a large estate, or on growth still to come, the risk, with assets moved into a container under set terms? The answer to <b>What is at risk when this money is passed on?</b> is <b>Tax on what is passed on, or on the growth still to come</b>. The answer to <b>What has been put in place?</b> is <b>The shares or assets are moved into a trust or company with a trustee and fixed terms</b>.</p>
      <p><b>What to do.</b> Do this last, after the paperwork, the gifts and the family rules. Take advice from a specialist lawyer. Ask three questions: what tax does it save, what does it cost each year, and what control do I give up? Go ahead only if the saving is clearly more than the cost.</p>
      <p><b>Don’t confuse it with</b> <b>Give some away each year</b> (small, simple, no container) and <b>Family rules for the money</b> (about the people, not the tax).</p>`},

  {h:'Nothing more needed',
   b:`<p><b>What it is.</b> A “leave it alone” answer. When the estate is small compared with your country’s tax threshold, nothing unusual is going on (no business, no dependant with special needs, no tangled family) and the basic documents are current, a trust or a company would add yearly costs and a loss of control to solve a problem that does not exist. Structure is often sold early because it is profitable to sell, and its uselessness does not show for years.</p>
      <p>What changes the answer: a business with outside shareholders, property held in several names, an estate near or above the threshold, or a dependant, such as a disabled child, who will need support for life.</p>
      <p><b>Example.</b> Mr Lindqvist, 72, is a widower with a house, £120,000 in savings and one pension. He updated his will and his pension form last year. At a seminar, a salesman tells him he needs a family trust “to protect the house”.</p>
      <p><b>Sounds like.</b> “At your age you really need a trust.” “Everyone is doing it.”</p>
      <p><b>Catch it.</b> Is the case simple, are the documents current, and can you point to no tax, people or paperwork problem? The answer to <b>What is at risk when this money is passed on?</b> is <b>Nothing: the case is simple and the documents are current</b>. The answer to <b>What has been put in place?</b> is <b>Nothing new: the documents already in place cover it</b>.</p>
      <p><b>What to do.</b> Do not buy structure. Ask the person selling it: “What problem does this solve for me, in numbers?” Look again when your situation changes.</p>
      <p><b>Don’t confuse it with</b> <b>Update the basic paperwork</b>. Both involve a will, but here the documents are already current. If they are stale or missing, the answer is the paperwork, not nothing.</p>`},

  {h:'The handover answers side by side',
   b:`<p>Two questions of the key come after <b>It is lost in the handover</b>: <b>What is at risk when this money is passed on?</b> and <b>What has been put in place?</b> Here are their answers in the key’s exact words, with the name each leads to.</p>
      <table class="k pair">
      <tr><th>What is at risk when this money is passed on?</th><th>What has been put in place?</th><th>The name</th></tr>
      <tr><td>Only the paperwork: the basic documents are out of date or missing</td><td>The will, beneficiary forms and power of attorney are brought up to date</td><td><b>Update the basic paperwork</b></td></tr>
      <tr><td>Tax on what is passed on, or on the growth still to come</td><td>Gifts made during life, a little at a time, while the sums are small</td><td><b>Give some away each year</b></td></tr>
      <tr><td>The people: how heirs behave, or who holds control</td><td>Family agreements: payouts in stages, an outside decision-maker, rules about marriage</td><td><b>Family rules for the money</b></td></tr>
      <tr><td>Tax on what is passed on, or on the growth still to come</td><td>The shares or assets are moved into a trust or company with a trustee and fixed terms</td><td><b>A trust or holding company</b></td></tr>
      <tr><td>Nothing: the case is simple and the documents are current</td><td>Nothing new: the documents already in place cover it</td><td><b>Nothing more needed</b></td></tr>
      </table>
      <p><b>Choosing, in order.</b> Are the basic documents out of date or missing? Fix them first: <b>Update the basic paperwork</b>. If they are current, is tax on what is passed on the risk? Small regular sums while alive: <b>Give some away each year</b>. A large estate, a business or fast-growing assets: <b>A trust or holding company</b>. Is the danger the people? <b>Family rules for the money</b>. None of these? <b>Nothing more needed</b>.</p>`},

  {h:'Worked example: Hilary’s afternoon',
   b:`<p>The case. Hilary, 60, owns a house worth £700,000, a pension worth £400,000 and £200,000 in savings. Her country charges no tax on estates of this size. Her two children get on well. Her will was written in 2009, before her second grandchild was born. Her pension form still names her late husband, and she has no power of attorney. At a seminar a salesman told her she needs a family trust. Her solicitor has booked her in to rewrite the will, change the pension form and make a power of attorney.</p>
      <p><b>What is the main danger to this money?</b> Nothing is draining, wrecking or forcing anything. The question is what happens when the money passes on or she cannot act. The key’s answer is <b>It is lost in the handover</b>.</p>
      <p><b>What is at risk when this money is passed on?</b> Check each answer against the case.</p>
      <ul>
        <li><b>Tax on what is passed on?</b> “No tax on estates of this size.” No.</li>
        <li><b>The people?</b> “Her two children get on well.” No.</li>
        <li><b>Nothing: simple and current?</b> The documents are not current. No.</li>
        <li><b>Only the paperwork?</b> A will from 2009, a form naming her late husband, no power of attorney. Yes.</li>
      </ul>
      <p>The key’s answer is <b>Only the paperwork: the basic documents are out of date or missing</b>.</p>
      <p><b>What has been put in place?</b> The solicitor rewrites the will, changes the pension form and makes a power of attorney. The key’s answer is <b>The will, beneficiary forms and power of attorney are brought up to date</b>.</p>
      <p>The name is <b>Update the basic paperwork</b>. The salesman’s trust would add yearly costs to solve a tax problem she does not have.</p>`}
  ],
  drill:{kind:'pick', key:'x5'} },

{ tag:'Six', title:'What people believe instead',
  cards:[
  {h:'What this unit is for',
   b:`<p class="lead">By the end of this unit you can hear a confident claim about money and say two things: which question of the key it skips, and what it gets wrong.</p>
      <p>Money attracts more confident wrong beliefs than almost any other subject, and they cost you in both directions. One says the whole thing is a rigged game played offshore, which leads to doing nothing. The other says a product will fix it, which leads to fees. You will hear both at dinner, at work, and from people who are selling something.</p>
      <p>In the drill that follows this unit you will see one claim at a time. Say what is wrong with it, and which question of the key it fails to engage, before you reveal the answer. The questions are the ones you have already met: <b>What is the main danger to this money?</b> and the questions that come after each of its four answers.</p>`},

  {h:'Two checks for any claim about money',
   b:`<p><b>Check one: has the claim named a danger?</b> The first question of the key is <b>What is the main danger to this money?</b> A claim that offers a fix without saying which danger it answers is a sale, not a piece of knowledge. Run the claim forwards from the danger and most of the catalogue of products disappears.</p>
      <p><b>Check two: has it named a mechanism?</b> A <b>mechanism</b> is the how: the step-by-step way something works. “Tax is due when you sell, so people who do not sell have not yet paid” is a mechanism. “Rich people don’t pay tax” is not. A claim with no mechanism cannot be checked, and it leaves you unable to use what it says.</p>
      <p><b>A third check for numbers.</b> A statistic comes from someone counting something. Ask three things: who did the counting, who was counted, and who is selling the cure.</p>
      <p>The next cards take the claims that need new facts, one at a time. Each says what is true in the claim, what is wrong, and which question it skips.</p>
      <p><b>What to do.</b> Next time you hear a confident claim about money, ask both questions out loud: which danger does it answer, and how does it work?</p>`},

  {h:'My house is my best investment',
   b:`<p><b>What is true in it.</b> A home often rises in value over the long run, and it saves you rent. For many people it is the largest thing they own.</p>
      <p><b>What is wrong.</b> As an investment, a home is one holding, often most of what a household owns, so it is exactly the case “One holding is most of what you own”. It is usually bought with a large loan, so “Borrowed money could force a sale at the worst moment” applies too. You cannot sell a bedroom when you need £10,000. It pays no income, and it costs upkeep, insurance and tax. It may still be the right thing to own, for reasons that have nothing to do with returns, such as having somewhere to live.</p>
      <p><b>The question it skips.</b> <b>Where is the single weak point?</b></p>
      <p><b>What to say instead.</b> Compare the home with what it actually is: one large, borrowed, hard-to-sell holding. Do not compare it with a savings account.</p>`},

  {h:'Whole-life insurance is a great investment',
   b:`<p><b>What is true in it.</b> Insurance that pays out when you die is useful if people depend on your income. A whole-life policy also builds up a cash value inside it.</p>
      <p><b>What is wrong.</b> A whole-life policy bundles three things: cover that pays out when you die, a savings account inside the policy, and a commission to whoever sold it. <b>Term insurance</b> covers only a set number of years and pays out only if you die in that time. Priced separately, term insurance covers the risk and an index fund does the saving, usually for much less in total. Bundling is what makes the comparison hard.</p>
      <p><b>The question it skips.</b> <b>Where is the money leaking out?</b> Part of what you pay is fees and a commission, and a commission pays for what is sold to you, not for work you would otherwise skip, so it is not <b>A cost worth paying</b>.</p>
      <p><b>What to say instead.</b> Ask what each part costs, one at a time. Buy the cover you need as term insurance, and do the investing in index funds.</p>`},

  {h:'Rich people don’t pay tax',
   b:`<p><b>What is true in it.</b> Wealthy people often pay a lower share of what they own in tax than you would guess.</p>
      <p><b>What is wrong.</b> They do pay tax. What they usually do is pay it later, and pay less of it, using rules open to anyone with the same kind of assets. A gain is taxed only when you sell, so not selling delays it: that is <b>Delay the tax by not selling</b>. Holding the investments that pay taxable income inside a sheltered account is <b>Right account for each investment</b>. In some countries the tax on a gain is also wiped out at death. Saying “they don’t pay” skips the mechanism, and the mechanism is the part you could use.</p>
      <p><b>The question it skips.</b> <b>Where is the money leaking out?</b> The answer is <b>In tax: paid sooner or more often than it had to be</b>.</p>
      <p><b>What to say instead.</b> “Tax on a gain is due when you sell, so they avoid selling, and they keep income-paying investments in sheltered accounts.”</p>`},

  {h:'You need offshore structures and a private bank',
   b:`<p><b>What is true in it.</b> A trust, a holding company or an account abroad can be the right tool for a large estate, a business, or a person with complicated needs.</p>
      <p><b>What is wrong.</b> Below a few million, structures cost more in yearly fees and filing than they save. The things that do most of the work are cheap or free: <b>Switch to index funds</b>, <b>Spend a percentage of the pot</b>, <b>Years of spending in cash</b> and <b>Update the basic paperwork</b>. Complexity is often sold because it is profitable to sell, not because it carries the load.</p>
      <p><b>The question it skips.</b> <b>What is the main danger to this money?</b> It names a fix before it names a danger.</p>
      <p><b>What to say instead.</b> “What danger does that answer for me, and what does it cost each year?” If the answer is vague, the structure is a product.</p>`},

  {h:'Seventy percent of wealthy families lose it by the second generation',
   b:`<p><b>What is true in it.</b> Handovers do go wrong, and they go wrong in three ways you have met: tax, people and paperwork.</p>
      <p><b>What is wrong.</b> The number is shaky. As far as anyone has traced it, it comes from one consulting firm’s survey of its own clients, not from an independent count. Apply the third check. Who did the counting? A firm that sells the cure. Who was counted? Its own clients, which is not a fair sample of all families. The claim also says that money is lost without saying how.</p>
      <p><b>The question it skips.</b> <b>What is at risk when this money is passed on?</b> Tax, the people, or the paperwork? Each has a different fix.</p>
      <p><b>What to say instead.</b> “Handovers fail in three ways, and each has a fix. Which one is this?”</p>`},

  {h:'Diversification is protection against ignorance',
   b:`<p><b>What is true in it.</b> It is a real saying, and it is true for building. Concentrating is how most people go from a little to a lot, because a big bet can grow large, as unit one explained.</p>
      <p><b>What is wrong.</b> It applies the rules of building to the job of keeping. Once the money matters and cannot easily be replaced, the danger is <b>One event could wreck it</b>, and spreading the money out is how that danger is answered: <b>Sell down on a schedule</b>. There is one exception, an owner who runs the business: <b>Keep the big holding on purpose</b>, with its three supports. The person quoting the line is usually still in the building job.</p>
      <p><b>The question it skips.</b> <b>What is the main danger to this money?</b></p>
      <p><b>What to say instead.</b> “That is true while I am building. Now I am trying to keep it.”</p>`},

  {h:'Four claims you have already met',
   b:`<p>Four other claims in the drill were dealt with in earlier units. Here is each, with the question it skips.</p>
      <ul>
        <li><b>“It’s only a 1% fee.”</b> Skips <b>Where is the money leaking out?</b> A fee is a share of the pot, but what you receive is the return. Against 4% growth a year, 1% is a quarter of it. On £100,000 over thirty years, that is about £81,600: £324,000 against £243,000. Divide the fee by the growth you expect.</li>
        <li><b>“A good adviser picks funds that beat the market, so a high fee is worth it.”</b> Skips <b>Where is the money leaking out?</b> A fund’s charge is certain and the extra return is a hope. The test from <b>A cost worth paying</b>: if you stopped paying, what important thing would stop happening?</li>
        <li><b>“I don’t need a cash buffer. I’ll just sell when I need the money.”</b> Skips <b>What could force a bad move with this money?</b> The answer <b>Living costs have to be taken out of investments that can fall</b> is this person’s situation. <b>Years of spending in cash</b> is the fix.</li>
        <li><b>“I’ll sort out my will when I’m older.”</b> Skips <b>What is at risk when this money is passed on?</b> A handover starts with an accident or illness as well as old age. <b>Update the basic paperwork</b> takes an afternoon.</li>
      </ul>`},

  {h:'Worked example: “My adviser is free”',
   b:`<p>The claim. “Don’t worry about fees. My adviser doesn’t charge me anything. The funds pay them.”</p>
      <p><b>Check one: has it named a danger?</b> It does not say what danger anything answers, so we start with the key’s first question, <b>What is the main danger to this money?</b> The claim is about cost, which points to <b>A slow leak</b>.</p>
      <p><b>Check two: has it named a mechanism?</b> It does: “The funds pay them.” That is the mechanism, and it is a commission, a payment from the funds to the adviser for putting you in them. The charge does not disappear. It is built into the fund’s yearly charge, which comes out of the pot.</p>
      <p><b>The question it skips.</b> <b>Where is the money leaking out?</b> The answer is <b>In fees: what the funds, adviser and platform charge</b>. A commission pays for what is sold to you, and not for work you would otherwise skip, so it is not <b>A cost worth paying</b>.</p>
      <p><b>What to say instead.</b> “How are you paid, and what do I get for it?” With a flat fee, you can see what you pay and what it buys. With a commission, you pay without seeing it, and the adviser’s interest points at the product.</p>`}
  ],
  drill:{kind:'err'} },

{ tag:'Seven', title:'The whole key',
  cards:[
  {h:'What this unit is for',
   b:`<p class="lead">By the end of this unit you can take a case with no hints, ask the key’s three questions in order, and name the fix.</p>
      <p>Until now each unit gave you the danger and asked the next two questions. In real life nobody tells you the danger. You read a situation and have to find it yourself. In the full determination you will see a case, answer three questions one at a time, and then name the fix.</p>
      <ol>
        <li>The first question: <b>What is the main danger to this money?</b></li>
        <li>The second question, which changes with the danger.</li>
        <li>The third question, which also changes with the danger.</li>
        <li>The name of the fix, chosen from the names the first three answers have left.</li>
      </ol>
      <p>On the screen, a strip between the case and the questions lists all 21 names and crosses off the ones your answers have ruled out. It is a readout and nothing there is tappable. The names that remain are the ones your route allows.</p>
      <p>Your name and your <b>route</b> are scored separately. The route is the answers you gave to the questions on the way to the name. A right name reached by the wrong route counts as a miss, because a fix you cannot trace to a danger is one you will use where it does nothing. Every danger has an answer that means “leave it alone”, and getting those right counts as much as any other.</p>`},

  {h:'The whole key on one page',
   b:`<p>The first question is always <b>What is the main danger to this money?</b> Its four answers, and what each one asks next:</p>
      <table class="k pair">
      <tr><th>If the answer is</th><th>then ask</th><th>and the name is one of</th></tr>
      <tr><td><b>A slow leak</b></td><td>Where is the money leaking out?<br>What fixes that leak?</td><td>Switch to index funds<br>Right account for each investment<br>Delay the tax by not selling<br>Use a loss to cut tax<br>Spend a percentage of the pot<br>A cost worth paying</td></tr>
      <tr><td><b>One event could wreck it</b></td><td>Where is the single weak point?<br>What is being done about it?</td><td>Sell down on a schedule<br>Cap the loss without selling<br>Keep the big holding on purpose<br>Insure the big loss<br>Separate companies for separate assets<br>Borrow modestly, on safe terms</td></tr>
      <tr><td><b>Bad timing</b></td><td>What could force a bad move with this money?<br>What takes the pressure off?</td><td>Years of spending in cash<br>A bond for each bill<br>Rebalance by written rule<br>Already covered</td></tr>
      <tr><td><b>It is lost in the handover</b></td><td>What is at risk when this money is passed on?<br>What has been put in place?</td><td>Update the basic paperwork<br>Give some away each year<br>Family rules for the money<br>A trust or holding company<br>Nothing more needed</td></tr>
      </table>
      <p>The answers to each of those questions, in the key’s exact words, are on the side-by-side card of units two to five. Go back to that card when an answer on the screen is not clear.</p>`},

  {h:'The four “leave it alone” names',
   b:`<p>A key that always prescribes something is how people end up with a structure and a policy they are still paying for ten years later. Each danger has one name that means “leave it alone”. Here is the test for each.</p>
      <ul>
        <li><b>A cost worth paying</b> (a slow leak). If you stopped paying, would something important stop happening, and does the price follow the work and not the size of the pot?</li>
        <li><b>Keep the big holding on purpose</b> (one event could wreck it). Does the person run it day to day, with the rest spread out, years of spending held outside it, and no loan secured on it?</li>
        <li><b>Already covered</b> (bad timing). Is the money for the near bill already sitting in cash?</li>
        <li><b>Nothing more needed</b> (lost in the handover). Is the case simple and are the documents current, with nothing you can point to in tax, people or paperwork?</li>
      </ul>
      <p>If a case’s words let you tick the test, name it. Do not look for a problem that is not there.</p>`},

  {h:'When two names look alike',
   b:`<p>Seven sets of names are easy to mix up. In each, a single question separates them.</p>
      <table class="k pair">
      <tr><th>These look alike</th><th>The question that separates them</th></tr>
      <tr><td>Spending too much (<b>A slow leak</b>) and being forced to sell in a fall (<b>Bad timing</b>)</td><td>Is the problem how much comes out, or that it had to come out on a bad day?</td></tr>
      <tr><td><b>Delay the tax by not selling</b> and <b>Rebalance by written rule</b></td><td>Is the case worried about a tax bill, or about the mix drifting from the plan?</td></tr>
      <tr><td><b>A bond for each bill</b> and <b>Already covered</b></td><td>Is the money for the bill still in investments that can fall, or already safe in cash?</td></tr>
      <tr><td><b>Sell down on a schedule</b>, <b>Cap the loss without selling</b> and <b>Keep the big holding on purpose</b></td><td>Do they run it every day? If not, can they sell it?</td></tr>
      <tr><td><b>Insure the big loss</b> and <b>Separate companies for separate assets</b></td><td>Is an insurer paying for the loss, or are the assets split so a claim cannot reach them?</td></tr>
      <tr><td><b>A trust or holding company</b> and <b>Family rules for the money</b></td><td>Is the risk tax on what is passed on, or the behaviour of the heirs?</td></tr>
      <tr><td><b>A cost worth paying</b> and <b>Switch to index funds</b></td><td>If you stopped paying, what important thing would stop happening?</td></tr>
      </table>`},

  {h:'Words the cases use',
   b:`<p>The cases in the determination are written the way people and advisers write, so a few words you have not needed yet will appear. Here is what they mean in the words of this subject.</p>
      <ul>
        <li><b>Benchmark.</b> The market list a fund is measured against, the same thing as an index. A fund that <b>tracks</b> the benchmark follows it closely. To <b>trail</b> it is to do worse than it.</li>
        <li><b>Core holdings.</b> The main investments that make up most of the pot.</li>
        <li><b>Target.</b> The share the plan gives to each part of the mix. To be <b>underweight</b> is to hold less of something than the plan says. <b>Contributions</b> are new money paid in. An <b>asset class</b> is a kind of investment, such as shares or bonds.</li>
        <li><b>A corporate bond fund</b> holds bonds issued by companies. <b>A property trust</b> is a fund that owns property and pays out most of the rent as income. To <b>distribute</b> is to pay out. <b>Government bonds</b> are bonds issued by a government.</li>
        <li><b>A stake</b> is the share of a company someone owns. An <b>award</b> is shares given to an employee as pay, often with a rule against selling for some years.</li>
        <li><b>Rental cover</b> is insurance for a property you rent out. An <b>instant-access savings account</b> is one you can take money out of at once.</li>
        <li><b>To settle shares into a trust</b> is to put them into a trust. A <b>marital transfer</b> is money or property moved to a husband or wife. A <b>workplace pension</b> is a pension through your employer.</li>
        <li><b>Index equities</b> are shares held through an index fund. <b>Stock</b> means shares in a company.</li>
        <li><b>The draw</b> is the amount taken out of the pot each year, the same thing as the withdrawals on the unit two cards. <b>Weights</b> are the shares each part has in the mix.</li>
        <li><b>Replenished</b> means refilled, <b>executed</b> means carried out, and <b>accrued</b> means built up. A <b>distribution</b> is a payout, so <b>staged distributions</b> are payouts in stages.</li>
      </ul>`},

  {h:'Worked example: Frank’s bonus',
   b:`<p>The case. Frank, 62, has a plan of 65% shares and 35% bonds for the £140,000 he holds in a taxable account. He wrote down a rule: if either part is more than five points from plan, trade back to plan on the next review date, using new money first so that he does not sell investments that have gone up. After a strong year, shares are 73% of that £140,000. On the review date he puts his £15,000 bonus into bonds and ends at 66% shares and 34% bonds.</p>
      <p><b>What is the main danger to this money?</b> There is no fee, tax bill, claim, loan or handover problem in the words of the case. The pot is riskier than he chose, and the case is about when and how he corrects that. The key’s answer is <b>Bad timing</b>.</p>
      <p><b>What could force a bad move with this money?</b> Check each answer.</p>
      <ul>
        <li><b>Living costs taken out of investments that can fall?</b> Nothing about spending. No.</li>
        <li><b>A bill of a known size on a known date?</b> No bill. No.</li>
        <li><b>Nothing: the money for the bill is already safe in cash?</b> No bill at all. No.</li>
        <li><b>Nothing forces it: the mix has slowly drifted from the plan?</b> “Shares are 73%” against a plan of 65%. Yes.</li>
      </ul>
      <p>The key’s answer is <b>Nothing forces it: the mix has slowly drifted from the plan</b>.</p>
      <p><b>What takes the pressure off?</b> “wrote down a rule: if either part is more than five points from plan, trade back”. The key’s answer is <b>A written rule that trades the mix back to the plan when it drifts too far</b>.</p>
      <p>The name is <b>Rebalance by written rule</b>. It is not <b>Delay the tax by not selling</b>, even though he used new money to avoid a sale. The case is not worried about a tax bill. It is worried about the mix, and the new money is only how the rule was carried out.</p>`},

  {h:'Using the key on your own money',
   b:`<p>You can run the key on your own situation with a few numbers and an afternoon.</p>
      <ul>
        <li><b>A slow leak.</b> Add up the yearly charges: the fund’s ongoing charge (on its fact sheet), any adviser fee and the platform fee. Divide that total by 4%, the growth figure used in this subject’s examples, to see what share of the expected growth it takes. Divide a year’s withdrawals by the pot. Note any gains you realised and any holdings below what you paid.</li>
        <li><b>One event could wreck it.</b> Work out your biggest holding as a share of everything you own. Check what liability cover you have above your car and home policies. Read the terms of every loan: is it fixed, and can the lender call it in?</li>
        <li><b>Bad timing.</b> List your dated bills for the next five years. Work out how many years of spending are in cash and short bonds. Compare your mix with your plan.</li>
        <li><b>It is lost in the handover.</b> Find the date on your will. Find each beneficiary form with the company that holds the account. Check that someone holds a power of attorney for you, and that someone knows where everything is.</li>
      </ul>
      <p>Write the result as one line per danger, such as “fees 1.1%, about a quarter of expected growth” or “will from 2011, pension form names my ex”. Then fix the line that hurts most.</p>`}
  ],
  drill:{kind:'det'} },

];


const WEALTH = {
  id:'wealth', name:'Wealth Preservation', rev:1,
  blurb:'Say what the main danger to someone’s savings and investments is (a slow leak, one event, bad timing or being lost in the handover), then name the fix that answers it.',
  intro:'Read a money situation, say what the main danger to it is, find the weak point, and name the fix that answers it. A right name reached by the wrong route is scored as a miss.',
  outcomes: WEALTH_OUTCOMES,
  determination: { gateCode:'P1', steps:[WEALTH_GATE], stepsByGate:WEALTH_STEPS_BY_GATE },
  determinationIntro:`<p>You are matching a fix to a danger. Decide what the main danger to the money is first, answer the two questions under it, and name the fix last.</p>
      <ol>
        <li>Read the situation.</li>
        <li>First question: <b>What is the main danger to this money?</b> The four answers are a slow leak, one event that could wreck it, bad timing, and being lost in the handover.</li>
        <li>Second and third questions: the two that belong to the danger you chose. They unlock in order and change with your first answer.</li>
        <li>Last, name the fix, and record your answer.</li>
      </ol>
      <p>The strip between the situation and the questions is a readout, not a control. It crosses off the names your answers have ruled out. Nothing there is tappable.</p>
      <p>Every danger has an answer that means leave it alone, and four cases resolve that way. Naming one of those correctly counts for as much as any other.</p>
      <p>Your name and your route are scored separately. A right name reached by the wrong route counts as a miss.</p>
`,
  specimens: WEALTH_SPECIMENS,
  quickDrills: [
    {key:'x1', title:'Which danger', prompt:'What is the main danger to this money?', items:X1_DRILL, opts:X1_OPTS},
    {key:'x2', title:'A slow leak', prompt:'Which name fits this case?', items:X2_DRILL, opts:X2_OPTS},
    {key:'x3', title:'One event', prompt:'Which name fits this case?', items:X3_DRILL, opts:X3_OPTS},
    {key:'x4', title:'Bad timing', prompt:'Which name fits this case?', items:X4_DRILL, opts:X4_OPTS},
    {key:'x5', title:'The handover', prompt:'Which name fits this case?', items:X5_DRILL, opts:X5_OPTS}
  ],
  errDrill: WEALTH_ERR,
  falsLabel:'What would change this answer',
  course: WEALTH_COURSE,
  tabs: [
    {key:'course', label:'Course'}, {key:'det', label:'Determination'},
    {key:'x1', label:'Which danger'}, {key:'x2', label:'A slow leak'}, {key:'x3', label:'One event'},
    {key:'x4', label:'Bad timing'}, {key:'x5', label:'The handover'},
    {key:'err', label:'Faulty claims'}, {key:'reference', label:'Reference'}
  ],
  caveats:`<ul>
    <li><b>Size decides most of this.</b> Trusts, holding companies, capping a loss with contracts, and separate companies all cost real money to set up and run. Below the size where the saving is bigger than the cost, they are a product being sold and not a solution. Four fixes work at every size: <b>Switch to index funds</b>, <b>Spend a percentage of the pot</b>, <b>Years of spending in cash</b> and <b>Update the basic paperwork</b>.</li>
    <li><b>These ideas keep money; they do not create it.</b> How much you earn and how much you start with matter far more than anything here. The best arrangement of a small pot is still a small pot, and nothing in this subject replaces the earning that produced the money. Building money and keeping money follow different rules, and applying the keeping rules while you are still building may mean you never build.</li>
    <li><b>Much of the detail is local and changes.</b> What counts as a sheltered account, whether the tax on a gain is wiped out at death, the yearly gift allowance, the estate tax threshold, how a trust is taxed, and how long the buy-back rule lasts all differ by country and are rewritten regularly. The four dangers are general. The tools that answer them are local and dated, so check yours.</li>
    <li><b>What rich people do is partly luck.</b> We hear about the arrangements of families whose money survived, and cannot see identical arrangements that failed. Some of what looks like technique was a rising market or a single concentrated bet that happened to pay.</li>
    <li><b>Advisers are paid in ways that shape their advice.</b> A flat fee, a percentage of your assets, or a commission on what they sell. Ask which before weighing any recommendation, including a recommendation to adopt something in this subject.</li>
    <li><b>The numbers are examples.</b> The 4% growth, the 3.5% withdrawal, the three years of cash and the 45% loan are there to show how each idea works. They are starting points to test against your own country, age and plans, not promises.</li>
    <li><b>Not covered:</b> valuing or selling a business, pensions and retirement-income products in detail, how insurance is priced, charitable giving structures, living or being domiciled in more than one country, and anything involving investments you cannot easily sell. Each is a specialism, and none reduces to three questions.</li>
  </ul>`
};

FC.legacy('wealth', WEALTH);

