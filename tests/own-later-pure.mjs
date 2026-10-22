// Wealth's lessons 7 to 12 against their own rules and the app's arithmetic (lesson standard 5.4; research W61, the decision rules written
// before the items). Each worked household typed into the sheet gives the worked answer in the app's work; on thousands of seeds each made
// question's right answer is recomputed from its numbers by the rule, not read from the generator's own labels, and the app's work agrees;
// the works never print "nothing to change" when the sheet lacks what they need; an action saved in a yearly step repeats every year.
// No browser: the app's scripts are loaded as in tests/load-app.mjs. Run: node tests/own-later-pure.mjs
import { loadApp } from './load-app.mjs';

const failures = [];
let checks = 0;
const check = (ok, msg) => { checks++; if (!ok) failures.push(msg); };
const same = (a, b, msg) => check(JSON.stringify(a) === JSON.stringify(b), `${msg}: got ${JSON.stringify(a)}, wanted ${JSON.stringify(b)}`);
const app = await loadApp({ fixture: true });
const { FC, itemFromGen, scoreItem, SAY, parseTyped, ownWork, OWN_WORKS, ownActionFromDraft, ownCalendarFile } = app;
const wealth = FC.get('wealth');
const ctx = { lists: wealth.meta.lists, refs: wealth.meta.refs, limits: wealth.meta.own.sheet.limits, year: 2026 };
const lines = w => w.lines.map(l => l.text);
const flags = w => w.lines.filter(l => l.flag).map(l => l.text);
const money = text => parseTyped(String(text).replace('−', ''));
const seeds = Array.from({ length: 2000 }, (_, k) => k + 1);
const made = (id, seed) => itemFromGen(wealth.gens[id], seed);
const every = (id, test, msg) => { const bad = seeds.find(seed => !test(made(id, seed).values, made(id, seed))); check(bad === undefined, `${id} seed ${bad}: ${msg}`); };
const right = (item, askId) => { const a = item.asks.find(x => x.id === askId); return a.options ? a.options.find(o => o.ok).id : a.right; };
const fund = (name, value, kind) => ({ name, value, expense: 0.05, kind });

/* ---------- the works on each worked household, typed in ---------- */
{
  // lesson 7, Dana: 74.5% stocks against 65%, 9.5 points over, move $10,450
  const dana = { accounts: [{ type: '401k', balance: 80000, fees: 0, holdings: [fund('US Stock Fund', 52000, 'us-stocks'), fund('Bond Fund', 28000, 'bonds')] },
    { type: 'brokerage', balance: 30000, fees: 0, holdings: [fund('US Stock Market Fund', 30000, 'us-stocks')] }, { type: 'bank', balance: 12000, fees: 0, holdings: [] }], mix: { stocks: 65 } };
  const w = ownWork('drift', dana, ctx);
  same(flags(w), [SAY.workDriftOver('9.5', '$10,450', true)], 'the drift work gives the worked answer for Dana');
  check(lines(w).includes(SAY.workDriftWhere) && lines(w).includes(SAY.workDriftBank) && lines(w).at(-1) === SAY.workNotAdvice, 'the drift work says where to trade, that the bank is left out, and that it is not advice');
  same(scoreItem(wealth, wealth.items['w-mix'], null, { share: [74.5], call: 'change', move: [10450], where: 'plan' }).ok, true, 'the worked mix question with its own answers');
  // lesson 8, Grace: $335,000 a claim could reach (the IRA counted, the 401(k) not) against the lower limit, $300,000: $35,000 past it
  const grace = { accounts: [{ type: 'bank', balance: 25000, fees: 0, holdings: [] }, { type: 'brokerage', balance: 140000, fees: 0, holdings: [] }, { type: 'ira', balance: 40000, fees: 0, holdings: [] },
    { type: '401k', balance: 150000, fees: 0, holdings: [] }], cover: { auto: 300000, home: 500000, other: 130000 } };
  const c = ownWork('cover', grace, ctx);
  same(flags(c), [SAY.workCoverShort('$35,000')], 'the cover work gives the worked answer for Grace');
  check(c.docs[0].rows.some(r => r.cells[1] === '$335,000') && [SAY.workCoverPlan, SAY.workCoverIra, SAY.workCoverHome, SAY.workCoverTwo('$300,000')].every(l => lines(c).includes(l)), 'the cover work shows what a claim could reach, says the 401(k) is left out, the IRA and home counted, and the lower limit used');
  same(scoreItem(wealth, wealth.items['w-cover'], null, { reach: [335000], pays: [300000], call: 'change', gap: [35000] }).ok, true, 'the worked cover question with its own answers');
  same(scoreItem(wealth, wealth.items['w-risk'], null, { pay: 'no', fits: 'pass' }).ok, true, 'the worked loss question with its own answers');
  // lesson 9, Priya, single: highest $57,400 (FBAR), December 31 $55,400 (Form 8938 for one filer, not a joint return), the TFSA flagged
  const priya = { accounts: [{ type: 'foreign', name: 'Checking', balance: 2900, highest: 3400, fees: 0, holdings: [] }, { type: 'rrsp', balance: 40500, highest: 42000, fees: 0, holdings: [] },
    { type: 'tfsa', balance: 12000, highest: 12000, fees: 0, holdings: [] }] };
  same(flags(ownWork('foreign', priya, ctx)), [SAY.workForeignFbar('$57,400', '$10,000'), SAY.workForeign8938('$50,000', '$75,000'), SAY.workForeignTfsa], 'the foreign work gives the worked answer for Priya');
  same(scoreItem(wealth, wealth.items['w-foreign'], null, { highest: [57400], fbar: 'yes', form: 'yes', flag: 'third', call: 'change' }).ok, true, 'the worked foreign question with its own answers');
  // lesson 10, Maya: the work holds no names, so it lists what decides each account and holds the total under the estate line
  const heirs = ownWork('heirs', { accounts: [{ type: '401k', balance: 200000, fees: 0, holdings: [] }, { type: 'bank', balance: 20000, fees: 0, holdings: [] }], cover: null }, ctx);
  same([heirs.docs[0].rows[0].cells[2], flags(heirs).length, lines(heirs).includes(SAY.workHeirsCheck), lines(heirs).includes(SAY.workHeirsOther)],
    [SAY.workHeirsBy.page, 0, true, true], 'the heirs work: a 401(k) goes by its page, under the line, what else is owned named as missing');
  same(ownWork('heirs', { accounts: [{ type: 'foreign', balance: 5000, fees: 0, holdings: [] }, { type: 'rrsp', balance: 5000, fees: 0, holdings: [] }], cover: null }, ctx).docs[0].rows.slice(0, 2).map(r => r.cells[2]),
    [SAY.workHeirsBy.abroad, SAY.workHeirsBy.province], 'a bank account abroad goes by the will or a joint owner; an RRSP by its page where the province allows one');
  same(scoreItem(wealth, wealth.items['w-heirs'], null, { pages: { '401k': 'change', ira: 'leave', life: 'change' }, will: 'no' }).ok, true, 'the worked beneficiary question with its own answers');
  // lesson 11, Ruth: $66,000 + $6,000 of tax − $24,000 from $1,000,000 invested (the bank left out) is 4.8%, over the 3.9% looked up
  const ruth = { accounts: [{ type: '401k', balance: 620000, fees: 0, holdings: [] }, { type: 'ira', balance: 280000, fees: 0, holdings: [] }, { type: 'brokerage', balance: 100000, fees: 0, holdings: [] },
    { type: 'bank', balance: 30000, fees: 0, holdings: [] }], spending: { monthly: 5500 }, retire: { income: 24000, tax: 6000 } };
  const r = ownWork('rate', ruth, ctx);
  same([flags(r), r.docs[0].rows.at(-1).cells[1], lines(r).includes(SAY.workRateBank('$30,000'))], [[SAY.workRateHigh('4.8', '3.9')], '4.8%', true], 'the rate work gives the worked answer for Ruth');
  same(scoreItem(wealth, wealth.items['w-rate'], null, { draw: [48000], rate: [4.8], call: 'change', fits: [39000] }).ok, true, 'the worked rate question with its own answers');
  same(flags(ownWork('rate', { ...ruth, spending: { monthly: 4500 } }, ctx)), [], '$54,000 + $6,000 − $24,000 from $1,000,000 is 3.6%, under the line');
  same(flags(ownWork('rate', { ...ruth, spending: { monthly: 3950 }, retire: { income: 8000, tax: 0 } }, ctx)).length, 1, 'held against the rate itself: $39,400 of $1,000,000 is 3.94%, over 3.9, not rounded down to it');
  check(lines(ownWork('rate', { ...ruth, retire: { income: 24000 } }, ctx)).includes(SAY.workRateNoTax), 'no tax typed: said, the rate is higher than shown');
}

/* ---------- a work says when the sheet does not settle it ---------- */
{
  const drift = holdings => ownWork('drift', { accounts: [{ type: '401k', balance: 0, fees: 0, holdings }], mix: { stocks: 65 } }, ctx);
  same([flags(drift([fund('S', 50000, 'us-stocks'), { name: 'X', value: 50000 }])), drift([fund('S', 50000, 'us-stocks'), { name: 'X', value: 50000 }]).open], [[], true], 'a fund not marked: not settled, no move');
  same([flags(drift([fund('T', 100000, 'target'), fund('S', 50000, 'us-stocks')])), drift([fund('T', 100000, 'target'), fund('S', 50000, 'us-stocks')]).open], [[], true], 'a target-date fund beside others: not settled, no move');
  same([lines(drift([fund('T', 100000, 'target')])), drift([fund('T', 100000, 'target')]).open], [[SAY.workDriftTargetOnly('$100,000')], undefined], 'a target-date fund alone: nothing to rebalance');
  check(lines(ownWork('drift', { accounts: [{ type: 'brokerage', balance: 0, fees: 0, holdings: [fund('S', 90000, 'us-stocks'), fund('B', 10000, 'bonds')] }], mix: { stocks: 60 } }, ctx)).includes(SAY.workDriftWhereTaxed), 'no 401(k) or IRA: the trade is named as taxed');
  same(lines(ownWork('cover', { accounts: [{ type: 'bank', balance: 50000, fees: 0, holdings: [] }], cover: { other: 100000 } }, ctx)), [SAY.workCoverNoLimits], 'no limit typed: not settled, not counted as cover');
  check(ownWork('cover', { accounts: [], cover: { auto: 300000, other: -50000 } }, ctx).docs[0].rows.some(r => r.cells[1] === '−$50,000'), 'a home under water prints as a minus, and the reach stops at zero');
  check(lines(ownWork('cover', { accounts: [], cover: { auto: 300000, home: 500000, umbrella: 0 } }, ctx)).includes(SAY.workCoverTwo('$300,000')), 'two different limits: the lower one is named, not dropped');
  check(lines(ownWork('foreign', { accounts: [{ type: 'rrsp', balance: 8000, fees: 0, holdings: [] }] }, ctx)).includes(SAY.workForeignNoHighest), 'no highest typed: named, not silently assumed');
  // the yearly check: a part whose sheet is incomplete is "not settled", never "nothing to change"
  const sheet = { accounts: [{ type: 'brokerage', institution: 'Granite', owner: 'me', balance: 50000, fees: 0, holdings: [{ name: 'X', value: 50000 }] }],
    spending: { monthly: 4000 }, bills: [], match: null, tax: null, mix: { stocks: 60 }, cover: null, retire: null };
  const y = ownWork('yearly', sheet, ctx), status = Object.fromEntries(y.docs[0].rows.map(row => [row.cells[0], row.cells[1]]));
  same([status[SAY.workTitle.drift], status[SAY.workTitle.cover], status[SAY.workTitle.cost], status[SAY.workTitle.heirs]],
    [SAY.workYearOpen, SAY.workYearOpen, SAY.workYearOpen, SAY.workYearHand.heirs], 'the yearly check: unmarked funds and no cover are not settled; beneficiary pages are checked by hand');
  check(!(SAY.workTitle.rate in status) && lines(y).includes(SAY.workYearNoRate), 'the yearly check leaves the spending rate out until income after work is typed, and says so');
  same(OWN_WORKS.yearly.needs.slice().sort(), ['bills', 'cover', 'match', 'mix', 'retire', 'spending', 'tax'], 'the yearly check asks for every group its works need');
}

/* ---------- each made question's answer, by the rule, and the app's own work ---------- */
{
  // lesson 7: the share recomputed from the papers; 5 points or more off is change; the drift work agrees, with the same dollars
  const mixSheet = v => ({ accounts: [{ type: '401k', balance: 0, fees: 0, holdings: [fund('S', money(v.planStocksText), 'us-stocks'), fund('B', money(v.bondsText), 'bonds')] },
    { type: 'brokerage', balance: 0, fees: 0, holdings: [fund('M', money(v.brokText), 'us-stocks')] }], mix: { stocks: v.want } });
  ['g-mix-over', 'g-mix-near', 'g-mix-fall', 'g-mix-calm'].forEach(id => every(id, (v, item) => {
    const stocks = money(v.planStocksText) + money(v.brokText), total = stocks + money(v.bondsText), share = Math.round(stocks / total * 1000) / 10, off = Math.abs(share - v.want);
    const call = off >= 5 ? 'change' : 'leave', w = ownWork('drift', mixSheet(v), ctx);
    return share === v.share && right(item, 'call') === call && (flags(w).length > 0) === (call === 'change') && (call === 'leave' || flags(w)[0].includes(v.moveText)) && (off >= 5.8 || off <= 4.2);
  }, 'the call is not the rule’s, or the app’s drift work disagrees, or the drift sits near the line'));
  every('g-mix-fall', (v, item) => v.share < v.want && item.asks.find(a => a.id === 'where').options.find(o => o.ok).text.includes('buy the US Stock Fund'), 'after a fall the trade moves money into stocks');
  // lesson 8: small is a tenth of the savings or less, large is all of them or more; the same stories come small and large
  ['g-risk-keep', 'g-risk-pass', 'g-risk-avoid'].forEach(id => every(id, (v, item) => {
    const pay = v.cost <= v.savings / 10 ? 'yes' : v.cost >= v.savings ? 'no' : 'near';
    return right(item, 'pay') === pay && right(item, 'fits') === { 'g-risk-keep': 'keep', 'g-risk-pass': 'pass', 'g-risk-avoid': 'avoid' }[id] && (pay === 'yes') === (id === 'g-risk-keep');
  }, 'the loss is near the savings, or its answer is not the rule’s'));
  const storyOf = id => new Set(seeds.slice(0, 400).map(s => made(id, s).values.event.replace(/\$[\d,]+/g, '$').replace(/^(Ana|Grace|Leah|Nadia)/, '')));
  const injury = /sues|claims .* for the injury/;
  every('g-risk-keep', v => !injury.test(v.event), 'a story of hurting someone is never kept: a liability claim has no top');
  every('g-risk-pass', (v, item) => !injury.test(v.event) || right(item, 'fits') === 'pass', 'a story of hurting someone is passed on');
  check([...storyOf('g-risk-avoid')].every(s => storyOf('g-risk-keep').has(s)) && [...storyOf('g-risk-pass')].some(s => storyOf('g-risk-keep').has(s)), 'the bounded stories come small and large, so the kind of story does not give keep away');
  // the claim's own policy, read from the story, plus the umbrella; what a claim could reach counts the IRA and not the 401(k)
  ['g-cover-short', 'g-cover-which', 'g-cover-shield', 'g-cover-umbrella'].forEach(id => every(id, (v, item) => {
    const reach = money(v.bankText) + money(v.brokText) + money(v.iraText) + money(v.homeText) - money(v.oweText), car = /crash/.test(v.claimText);
    const pays = money(car ? v.carText : v.homeLimitText) + (v.umbrellaText === 'None' ? 0 : money(v.umbrellaText)), other = money(car ? v.homeLimitText : v.carText);
    const call = reach > pays ? 'change' : 'leave';
    return reach === v.reach && pays === v.pays && money(v.brokText) > 0 && right(item, 'call') === call && money(v.carText) !== money(v.homeLimitText)
      && (id !== 'g-cover-shield' || reach + money(v.planText) > pays) && (id !== 'g-cover-which' || reach > other) && (id !== 'g-cover-short' || reach < other);
  }, 'the call is not the rule’s, or the look-alike is not one'));
  // lesson 9: the FBAR on the highest sum, Form 8938 on either total against the filing status's lines, the flag by kind of account; the app agrees
  const LINES = { 'Single, filing alone': [50000, 75000], 'Married, filing jointly': [100000, 150000] }, sides = new Set();
  ['g-foreign-tfsa', 'g-foreign-fund', 'g-foreign-rrsp', 'g-foreign-small'].forEach(id => every(id, (v, item) => {
    const hi = money(v.checkHiText) + money(v.rrspHiText) + (v.thirdHiText === '$0' ? 0 : money(v.thirdHiText)), end = money(v.checkEndText) + money(v.rrspEndText) + (v.thirdEndText === '$0' ? 0 : money(v.thirdEndText));
    const [lineEnd, lineAny] = LINES[v.statusText], fbar = hi > 10000 ? 'yes' : 'no', form = end > lineEnd || hi > lineAny ? 'yes' : 'no';
    if (id !== 'g-foreign-small') sides.add(`${end > lineEnd} ${hi > lineAny}`);
    const third = id === 'g-foreign-tfsa' ? [{ type: 'tfsa', balance: money(v.thirdEndText), highest: money(v.thirdHiText), fees: 0, holdings: [] }]
      : id === 'g-foreign-fund' ? [{ type: 'foreign', balance: money(v.thirdEndText), highest: money(v.thirdHiText), fees: 0, holdings: [{ name: 'ETF', value: money(v.thirdEndText) }] }] : [];
    const w = flags(ownWork('foreign', { accounts: [{ type: 'foreign', balance: money(v.checkEndText), highest: money(v.checkHiText), fees: 0, holdings: [] },
      { type: 'rrsp', balance: money(v.rrspEndText), highest: money(v.rrspHiText), fees: 0, holdings: [] }, ...third] }, ctx));
    const appForm = v.statusText.startsWith('Single') ? w.includes(SAY.workForeign8938('$50,000', '$75,000')) : w.includes(SAY.workForeign8938Joint('$100,000', '$150,000'));
    const near = Math.abs(hi - 10000) < 1500 || Math.abs(end - lineEnd) < lineEnd * 0.09 || Math.abs(hi - lineAny) < lineAny * 0.09;
    return hi === v.highest && money(v.rrspEndText) > 0 && money(v.rrspHiText) >= money(v.rrspEndText) && right(item, 'fbar') === fbar && v.form8938 === form
      && (w.some(x => x === SAY.workForeignFbar(v.highestText, '$10,000')) === (fbar === 'yes')) && (appForm === (form === 'yes'))
      && right(item, 'flag') === (third.length ? 'third' : 'none') && item.asks.find(a => a.id === 'call').right === (fbar === 'yes' || third.length ? 'change' : 'leave') && !near;
  }, 'an answer is not the rule’s, or the app’s foreign work disagrees, or a total sits near a line'));
  same([...sides].sort(), ['false false', 'false true', 'true false', 'true true'], 'Form 8938 comes in all four cases: neither total over, only December 31, only the highest, both');
  // lesson 10: each page fixed or left by the rule, from what the page says against the family; one, two or three pages to fix
  const pageState = (v, who, backup) => who.startsWith(v.spouse) && backup !== 'None named' ? 'leave' : 'change';
  ['g-heirs-ex', 'g-heirs-estate', 'g-heirs-blank', 'g-heirs-backup', 'g-heirs-fine'].forEach(id => every(id, (v, item) => {
    const field = f => item.asks[0].fields.find(x => x.id === f).right;
    return field('401k') === pageState(v, v.planWho, v.planBackup) && field('ira') === pageState(v, v.iraWho, v.iraBackup) && field('life') === pageState(v, v.lifeWho, v.lifeBackup)
      && (id === 'g-heirs-fine') === (v.faults === 0);
  }, 'a page’s call is not the rule’s'));
  check([1, 2, 3].every(n => seeds.slice(0, 400).some(s => made('g-heirs-ex', s).values.faults === n)), 'one, two or three pages need a fix, so the odd page out is not the answer');
  ['g-papers-fine', 'g-papers-poa', 'g-papers-will', 'g-papers-large'].forEach(id => every(id, (v, item) => right(item, 'estate') === (money(v.estateText) > 15000000 ? 'yes' : 'no'), 'the estate call is not the line’s'));
  // lesson 11: spending plus tax less income, over the invested accounts, against the value looked up (not its rounding); the rate work agrees
  const line = Number(wealth.meta.refs.find(x => x.id === 'safeRate').value.replace('%', ''));
  ['g-rate-high', 'g-rate-low', 'g-rate-income'].forEach(id => every(id, (v, item) => {
    const draw = money(v.spendText) + money(v.taxText) - money(v.incomeText), pot = money(v.planText) + money(v.iraText) + money(v.brokText), rate = Math.round(draw / pot * 1000) / 10;
    const call = draw / pot * 100 > line ? 'change' : 'leave', w = ownWork('rate', { accounts: [{ type: '401k', balance: money(v.planText), fees: 0, holdings: [] }, { type: 'ira', balance: money(v.iraText), fees: 0, holdings: [] },
      { type: 'brokerage', balance: money(v.brokText), fees: 0, holdings: [] }, { type: 'bank', balance: money(v.bankText), fees: 0, holdings: [] }], spending: { monthly: money(v.spendText) / 12 },
      retire: { income: money(v.incomeText), tax: money(v.taxText) } }, ctx);
    return draw === v.draw && rate === v.rate && right(item, 'call') === call && Math.abs(rate - line) >= 0.5 && (flags(w).length > 0) === (call === 'change')
      && (call === 'change' || v.next === draw * (1 + v.infl / 100));
  }, 'an answer is not the rule’s, or the app’s rate work disagrees, or the rate sits near the line'));
  every('g-rate-income', v => v.spendRate > line + 0.5, 'the look-alike: spending and tax alone would be over the line');
  // lesson 12: each line's call recomputed from the papers by its lesson's rule
  ['g-year', 'g-year-clear'].forEach(id => every(id, (v, item) => {
    const field = f => item.asks[0].fields.find(x => x.id === f).right, months = money(v.bankText) / money(v.monthlyText);
    const rule = {
      cash: months < 3 || months > 6, fee: v.heldCost > v.otherCost, match: v.mine < v.upTo, place: money(v.brokBondsText) > 0, bet: v.betShare > 10, drift: v.driftPoints >= 5,
      cover: v.reach > v.limit, foreign: v.abroadHigh > 10000 || v.tfsaHiText !== 'None', heir: !v.primary.startsWith(v.spouse), papers: v.willText === 'None' || v.poaText === 'None'
    };
    const near = Math.abs(months - 3) < 0.5 || Math.abs(months - 6) < 1 || Math.abs(v.betShare - 10) < 3 || Math.abs(v.driftPoints - 5) < 1.5 || Math.abs(v.abroadHigh - 10000) < 2000;
    return Object.entries(rule).every(([f, flagged]) => field(f) === (flagged ? 'change' : 'leave')) && !near && (id === 'g-year-clear') === !Object.values(rule).some(Boolean)
      && (id === 'g-year-clear' || [2, 3, 4].includes(Object.values(rule).filter(Boolean).length));
  }, 'a line is not its rule’s, or sits near its line, or the count of lines to change is off'));
  check(['cash', 'fee', 'match', 'place', 'bet', 'drift', 'cover', 'foreign', 'heir', 'papers'].every(f => new Set(seeds.slice(0, 400).map(s => made('g-year', s).values[`${f}Call`])).size === 2), 'every line of the yearly check is sometimes to change and sometimes to leave');
}

/* ---------- the yearly step's change repeats every year ---------- */
{
  const form = wealth.meta.own.actions, made = ownActionFromDraft(form, { what: 'Run the yearly check', where: 'This app', when: '2027-01-15' }, '2026-10-22', false, 'x1', 'year');
  same([made.problems, made.action.repeat], [[], 'year'], 'an action saved in a yearly step repeats every year');
  check(/RRULE:FREQ=YEARLY/.test(ownCalendarFile(made.action, '2026-10-22')), 'its calendar file repeats every year');
  same(ownActionFromDraft(form, { what: 'Switch the fund', where: 'Plan site', when: '2027-01-15' }, '2026-10-22', false, 'x2').action.repeat, undefined, 'an action of any other step does not repeat');
}

if (failures.length) {
  console.error(`✗ ${failures.length} of ${checks} checks of lessons 7 to 12 failed:`);
  failures.slice(0, 40).forEach(f => console.error('  - ' + f));
  process.exit(1);
}
console.log(`✓ ${checks} checks of lessons 7 to 12 passed`);
