/* ===================== LESSONS: THE APP'S ARITHMETIC FOR THE LATER CHECKS ===================== */
// Lesson standard 5.4, step 3: the works of Wealth's lessons 7 to 12 on the stored sheet, each a pure function of it giving
// { docs: [document block], lines: [{ text, flag?, strong? }] }, the same shape as the works in own-work.js: the mix against the one chosen
// (`drift`), what a claim could reach against the liability cover (`cover`), the accounts outside the US (`foreign`), who decides where each
// account goes (`heirs`), the spending rate (`rate`), and the whole yearly check (`yearly`, every work above on one sheet). Each work gives the
// answer its lesson's worked household gives when that household is typed in (tests/own-later-pure.mjs), never drops a field the learner
// typed without a line saying so, and says "nothing to change" only when what is typed shows it. Loaded before own-work.js, which gathers
// these works into OWN_WORKS beside the earlier ones; the helpers they call (ownSum, ownWhole, ownTable, OWN_ACCOUNT, OWN_KIND...) are
// own-work.js's, read when a work runs.

/* ---------- the mix against the one chosen (lesson 7) ---------- */
// Stocks, bonds and cash held in funds of the invested accounts (bank accounts are the buffer of lesson 2, left out and said so); the stock
// share against the share chosen; 5 points or more off moves the drift's dollars. A fund that mixes by age holds its own split, which the
// sheet does not show: alone it rebalances itself (nothing to change); beside other funds the split cannot be settled (`open`, no move). A
// fund with no "What it holds" also leaves the split unsettled: no move is ever printed on a part of the money.
function ownWorkDrift(sheet, ctx){
  const invested = sheet.accounts.filter(a => a.type !== 'bank'), funds = invested.flatMap(a => a.holdings || []);
  const part = kind => ownSum(funds, h => OWN_KIND[h.kind] === kind ? h.value : 0);
  const stocks = part('stocks'), bonds = part('bonds'), cash = part('cash'), base = ownRound(stocks + bonds + cash), want = sheet.mix.stocks, band = ctx.limits.band;
  const target = part('mixed'), other = part('other'), unmarked = funds.some(h => !h.kind), banks = sheet.accounts.some(a => a.type === 'bank');
  const asides = [...(other ? [{ text: SAY.workDriftOther(ownWhole(other)) }] : []), ...(banks ? [{ text: SAY.workDriftBank }] : [])];
  if(unmarked) return { docs: [], open: true, lines: [{ text: SAY.workUnmarked }, { text: SAY.workDriftOpen }, ...asides] };
  if(target && !base) return { docs: [], lines: [{ text: SAY.workDriftTargetOnly(ownWhole(target)) }, ...asides] };
  if(target) return { docs: [], open: true, lines: [{ text: SAY.workDriftTargetBeside(ownWhole(target)) }, ...asides] };
  if(!base) return { docs: [], open: true, lines: [{ text: SAY.workDriftNone }, ...asides] };
  const share = ownPct(stocks, base), drift = Math.round((share - want) * 10) / 10, move = ownRound(Math.abs(drift) / 100 * base);
  const sheltered = invested.some(a => ownAccountOf(a).tax === 'deferred' || ownAccountOf(a).tax === 'free');
  return { docs: [ownTable(SAY.workDriftTitle, SAY.workTwoHead, [[SAY.workDriftStocks, ownWhole(stocks)], [SAY.workDriftBonds, ownWhole(bonds)], [SAY.workDriftCash, ownWhole(cash)],
      ownStrong([SAY.workDriftShare(fmtNumber(want)), `${fmtNumber(share)}%`])])],
    lines: [...(Math.abs(drift) >= band ? [{ flag: true, text: SAY.workDriftOver(fmtNumber(Math.abs(drift)), ownWhole(move), drift > 0) }, { text: sheltered ? SAY.workDriftWhere : SAY.workDriftWhereTaxed }]
      : [{ text: SAY.workDriftUnder(band, fmtNumber(Math.abs(drift))) }]), ...asides] };
}

/* ---------- a loss you could not pay (lesson 8) ---------- */
// What a claim against you could reach: every account but a 401(k), which federal law shields from most claims (ERISA's anti-alienation
// rule), plus what else you own less what you owe (never below zero). An IRA is shielded in bankruptcy up to a federal cap and by many states,
// and part of a home by state homestead rules that vary: both are counted, to be safe, and said so. Against it, the most one claim is paid:
// the lower of the car and home liability limits (either claim can come) plus an umbrella on top.
const OWN_SHIELDED = ['401k'];
function ownWorkCover(sheet){
  if(!sheet.cover) return { docs: [], open: true, lines: [{ text: SAY.workCoverNone }] };
  const c = sheet.cover, total = ownSheetBalance(sheet.accounts), shielded = ownSum(sheet.accounts, a => OWN_SHIELDED.includes(a.type) ? a.balance : 0);
  const reach = ownRound(Math.max(0, total - shielded + (c.other || 0))), limits = [c.auto, c.home].filter(x => x !== undefined);
  const limit = limits.length ? Math.min(...limits) : 0, cover = ownRound(limit + (c.umbrella || 0));
  const rows = [[SAY.workCoverAccounts, ownWhole(total)], ...(shielded ? [[SAY.workCoverShielded, `−${ownWhole(shielded)}`]] : []),
    ...(c.other !== undefined ? [[SAY.workCoverOther, c.other < 0 ? `−${ownWhole(-c.other)}` : ownWhole(c.other)]] : []), ownStrong([SAY.workCoverReach, ownWhole(reach)]),
    [SAY.workCoverLimit, ownWhole(limit)], ...(c.umbrella ? [[SAY.workCoverUmbrella, ownWhole(c.umbrella)]] : []), ownStrong([SAY.workCoverPays, ownWhole(cover)])];
  if(!limits.length && !c.umbrella) return { docs: [ownTable(SAY.workCoverTitle, SAY.workTwoHead, rows)], open: true, lines: [{ text: SAY.workCoverNoLimits }] };
  return { docs: [ownTable(SAY.workCoverTitle, SAY.workTwoHead, rows)],
    lines: [...(reach > cover ? [{ flag: true, text: SAY.workCoverShort(ownWhole(ownRound(reach - cover))) }, { text: SAY.workCoverWays }] : [{ text: SAY.workCoverEnough }]),
      ...(limits.length === 2 && c.auto !== c.home ? [{ text: SAY.workCoverTwo(ownWhole(limit)) }] : []),
      ...(shielded ? [{ text: SAY.workCoverPlan }] : []), ...(sheet.accounts.some(a => a.type === 'ira' || a.type === 'roth') ? [{ text: SAY.workCoverIra }] : []),
      ...(c.other === undefined ? [{ text: SAY.workCoverOtherMissing }] : [{ text: SAY.workCoverHome }])] };
}

/* ---------- accounts outside the US (lesson 9) ---------- */
// The FBAR on the sum of each account's highest balance in the year; Form 8938 on the year-end sum or the highest sum against the lines for
// one filer and for a joint return; a TFSA, and a fund held outside an RRSP, flagged; an RRSP's growth deferred and still counted in the sums.
function ownWorkForeign(sheet, ctx){
  const abroad = sheet.accounts.filter(a => ownAccountOf(a).abroad);
  if(!abroad.length) return { docs: [], lines: [{ text: SAY.workForeignNone }] };
  const [fbar] = ownRefNumbers(ctx.refs, 'fbar'), [endOne, anyOne, endTwo, anyTwo] = ownRefNumbers(ctx.refs, 'form8938');
  const highestOf = a => a.highest === undefined ? a.balance : Math.max(a.highest, a.balance);
  const highest = ownSum(abroad, highestOf), now = ownSum(abroad, a => a.balance);
  const rows = abroad.map(a => [ownAccountTitle(ctx.lists, a), ownWhole(a.balance), ownWhole(highestOf(a))]);
  const lines = [highest > fbar ? { flag: true, text: SAY.workForeignFbar(ownWhole(highest), ownWhole(fbar)) } : { text: SAY.workForeignUnder(ownWhole(fbar)) },
    ...(now > endOne || highest > anyOne ? [{ flag: true, text: SAY.workForeign8938(ownWhole(endOne), ownWhole(anyOne)) }] : []),
    ...(now > endTwo || highest > anyTwo ? [{ flag: true, text: SAY.workForeign8938Joint(ownWhole(endTwo), ownWhole(anyTwo)) }] : []),
    ...(abroad.some(a => a.type === 'tfsa') ? [{ flag: true, text: SAY.workForeignTfsa }] : []),
    ...(abroad.some(a => a.type === 'rrsp') ? [{ text: SAY.workForeignRrsp }] : []),
    ...(abroad.some(a => a.type !== 'rrsp' && (a.holdings || []).length) ? [{ flag: true, text: SAY.workForeignFunds }] : []),
    ...(abroad.some(a => a.highest === undefined) ? [{ text: SAY.workForeignNoHighest }] : []),
    { text: SAY.workForeignAsk }];
  return { docs: [ownTable(SAY.workForeignTitle, SAY.workForeignHead, [...rows, ownStrong([SAY.workTotal, ownWhole(now), ownWhole(highest)])])], lines };
}

/* ---------- who decides where each account goes (lesson 10) ---------- */
// The app holds no names: it lists each account with what decides who gets it (its beneficiary page, or the will), and holds everything
// on the list, with what else is owned less what is owed when typed, against the estate tax line looked up.
const OWN_HEIR_PAGE = { '401k': 'page', ira: 'page', roth: 'page', hsa: 'page', brokerage: 'maybe', bank: 'maybe', rrsp: 'province', tfsa: 'province', foreign: 'abroad' };
function ownWorkHeirs(sheet, ctx){
  const [line] = ownRefNumbers(ctx.refs, 'estateTax'), other = (sheet.cover || {}).other;
  const estate = ownRound(ownSheetBalance(sheet.accounts) + (other || 0));
  const rows = sheet.accounts.map(a => [ownAccountTitle(ctx.lists, a), ownWhole(a.balance), SAY.workHeirsBy[a.owner === 'joint' ? 'joint' : OWN_HEIR_PAGE[a.type] || 'maybe']]);
  return { docs: [ownTable(SAY.workHeirsTitle, SAY.workHeirsHead, [...rows, ownStrong([SAY.workTotal, ownWhole(estate), ''])])],
    lines: [{ text: SAY.workHeirsCheck }, estate > line ? { flag: true, text: SAY.workHeirsOver(ownWhole(estate), ownWhole(line)) } : { text: SAY.workHeirsUnder(ownWhole(line)) },
      ...(other === undefined ? [{ text: SAY.workHeirsOther }] : []), ...(sheet.accounts.some(a => ownAccountOf(a).abroad) ? [{ text: SAY.workHeirsAbroad }] : []),
      { text: SAY.workHeirsPapers }] };
}

/* ---------- the spending rate (lesson 11) ---------- */
// A year's spending less the income that keeps coming is what the invested accounts must give; over them (bank cash is the buffer, left out
// and said so), against the starting rate looked up for this year.
function ownWorkRate(sheet, ctx){
  const [line] = ownRefNumbers(ctx.refs, 'safeRate'), retire = sheet.retire || {}, yearly = ownRound(sheet.spending.monthly * 12), income = retire.income || 0, tax = retire.tax || 0;
  const draw = ownRound(Math.max(0, yearly + tax - income)), invested = sheet.accounts.filter(a => a.type !== 'bank'), pot = ownSum(invested, a => a.balance);
  const banks = ownSum(sheet.accounts.filter(a => a.type === 'bank'), a => a.balance);
  if(!pot) return { docs: [], open: true, lines: [{ text: SAY.workRateNoPot }] };
  // the line is held against the rate itself, not its rounding (3.94% is over 3.9%)
  // shown to two places when a tenth would print the line itself (3.94% is not "3.9% above 3.9%")
  const exact = draw / pot * 100, rate = ownPct(draw, pot) === line && exact !== line ? Math.round(exact * 100) / 100 : ownPct(draw, pot);
  return { docs: [ownTable(SAY.workRateTitle, SAY.workTwoHead, [[SAY.workRateYearly, ownWhole(yearly)], [SAY.workRateTax, ownWhole(tax)], [SAY.workRateIncome, `−${ownWhole(income)}`],
      [SAY.workRateDraw, ownWhole(draw)], [SAY.workRatePot, ownWhole(pot)], ownStrong([SAY.workRateShare, `${fmtNumber(rate)}%`])])],
    lines: [exact > line ? { flag: true, text: SAY.workRateHigh(fmtNumber(rate), fmtNumber(line)) } : { text: SAY.workRateUnder(fmtNumber(line)) },
      { text: SAY.workRateNext }, ...(retire.tax === undefined ? [{ text: SAY.workRateNoTax }] : []), ...(banks ? [{ text: SAY.workRateBank(ownWhole(banks)) }] : []),
      ...(sheet.retire ? [] : [{ text: SAY.workRateNoIncome }])] };
}

/* ---------- the whole yearly check (lesson 12) ---------- */
// Every work in the order of the lessons, on one sheet: a table of what each found and every flagged line. A part is "look at it" when its
// work flags a line; "not settled" when the sheet lacks what it needs (the work says so: `open`, or one of the lines a work prints when a fund,
// an account or a bill is not marked); "check by hand" for a part the sheet cannot settle at all (whether a cheaper fund of the same kind is on
// the plan's list; what each beneficiary page says), unless it flags; else "nothing to change". The spending rate runs only when the sheet holds
// income after work (near retiring). Its needs, reads, refs and limits are those of the works it runs, so the step asks for every group they
// need and the validator reads the sheet against all of them.
const OWN_YEARLY_ORDER = ['list', 'cash', 'cost', 'match', 'placement', 'share', 'drift', 'cover', 'foreign', 'heirs', 'rate'];
const OWN_YEARLY_HAND = ['cost', 'heirs'];
const ownUnsettled = lines => [SAY.workUnmarked, SAY.workPlaceUnknown, SAY.workListUnmarked, SAY.workCashKeptUnknown, SAY.workCostUntyped].some(text => lines.some(l => l.text === text));
const ownUnion = lists => [...new Set(lists.flat())];
const ownMerged = records => records.reduce((all, r) => Object.entries(r || {}).reduce((acc, [k, v]) => ({ ...acc, [k]: { ...(acc[k] || {}), ...v } }), all), {});
function ownYearlyWork(works){
  const parts = OWN_YEARLY_ORDER.map(id => [id, works[id] || lessonFail(`the yearly check runs ${id}, which is not a work`)]), each = parts.map(([, w]) => w);
  const statusOf = r => r.lines.some(l => l.flag) ? SAY.workYearLook : r.open || ownUnsettled(r.lines) ? SAY.workYearOpen : OWN_YEARLY_HAND.includes(r.id) ? SAY.workYearHand[r.id] : SAY.workYearLeave;
  const make = (sheet, ctx) => {
    const run = parts.filter(([id]) => id !== 'rate' || sheet.retire).map(([id, w]) => { const r = w.make(sheet, ctx); return { id, lines: r.lines, open: !!r.open }; });
    const looks = run.filter(r => r.lines.some(l => l.flag)), unsettled = run.filter(r => !looks.includes(r) && (r.open || ownUnsettled(r.lines)));
    return { docs: [ownTable(SAY.workYearTitle, SAY.workYearHead, run.map(r => [SAY.workTitle[r.id], statusOf(r)]))],
      lines: [{ text: SAY.workYearCount(looks.length, run.length) }, ...looks.flatMap(r => r.lines.filter(l => l.flag)),
        ...(unsettled.length ? [{ text: SAY.workYearUnsettled(unsettled.map(r => SAY.workTitle[r.id]).join('; ')) }] : []),
        ...(sheet.retire ? [] : [{ text: SAY.workYearNoRate }])] };
  };
  return { needs: ownUnion(each.map(w => w.needs)), reads: ownMerged(each.map(w => w.reads)), fields: Object.assign({}, ...each.map(w => w.fields || {})),
    rowFields: Object.assign({}, ...each.map(w => w.rowFields || {})), refs: ownUnion(each.map(w => w.refs)), limits: ownUnion(each.map(w => w.limits)), lists: true, make };
}

const OWN_WORKS_LATER = {
  drift: { needs: ['mix'], reads: { mix: { stocks: 'number' } }, refs: [], limits: ['band'], lists: true, make: ownWorkDrift },
  cover: { needs: ['cover'], reads: { cover: { auto: 'number', home: 'number', umbrella: 'number', other: 'number' } }, refs: [], limits: [], lists: true, make: ownWorkCover },
  foreign: { needs: [], reads: {}, fields: { highest: 'number' }, refs: ['fbar', 'form8938'], limits: [], lists: true, make: ownWorkForeign },
  heirs: { needs: [], reads: { cover: { other: 'number' } }, refs: ['estateTax'], limits: [], lists: true, make: ownWorkHeirs },
  rate: { needs: ['spending', 'retire'], reads: { spending: { monthly: 'number' }, retire: { income: 'number', tax: 'number' } }, refs: ['safeRate'], limits: [], make: ownWorkRate }
};
