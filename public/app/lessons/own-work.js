/* ===================== LESSONS: THE APP'S ARITHMETIC ON THE LEARNER'S OWN SHEET ===================== */
// Lesson standard 5.4, step 3. An own step on the sheet names the work it shows (`{ own: 'sheet', work }`): what the accounts cost, the
// list and what protects each, the cash against the spending and the bills, the employer match, where each kind of fund sits for tax, the
// biggest single company, and (own-work-later.js, loaded first) the mix against the one chosen, the liability cover against what a claim
// could reach, the accounts outside the US, who decides where each account goes, the spending rate and the whole yearly check. Each is a pure function of the stored sheet: { docs: [document block], lines: [{ text, flag?, strong? }] }, drawn by
// own-view.js. Nothing is scored, stored or sent. The numbers a work compares with are the subject's own: `limits` of its sheet form (the
// thresholds its lessons teach) and its dated `refs` (the values looked up), never written here.
//   OWN_WORKS[id] = { needs: [groupId], reads: { groupId: { fieldId: type } }, fields?: { fieldId: type }, rowFields?: { fieldId: type }, refs: [refId], limits: [name], lists: bool, make }
// `needs` are the groups of the sheet form the work cannot run without (the step opens the form on them while they are not stored);
// `fields` are account fields it reads beyond the ones every sheet has, `rowFields` fund fields beyond them; `lists` says it reads the meaning of the account kinds and fund kinds below.

// What the app reads from the kind of an account (the subject's list `accountType`): how its growth is taxed, what pays if the bank or the
// firm fails, and whether it is outside the US.
const OWN_ACCOUNT = {
  bank: { tax: 'taxable', guard: 'fdic' }, brokerage: { tax: 'taxable', guard: 'sipc' },
  '401k': { tax: 'deferred', guard: 'trust' }, ira: { tax: 'deferred', guard: 'where' }, roth: { tax: 'free', guard: 'where' }, hsa: { tax: 'free', guard: 'where' },
  rrsp: { tax: 'deferred', guard: 'abroad', abroad: true }, tfsa: { tax: 'taxable', guard: 'abroad', abroad: true }, foreign: { tax: 'taxable', guard: 'abroad', abroad: true }
};
// What the app reads from what a fund holds (the subject's list `kind`): stocks, bonds or cash, a fund that mixes them, or something else
const OWN_KIND = { 'us-stocks': 'stocks', 'intl-stocks': 'stocks', 'one-company': 'stocks', bonds: 'bonds', cash: 'cash', target: 'mixed', other: 'other' };

const ownPct = (part, whole) => whole ? Math.round(part / whole * 1000) / 10 : 0;
const ownSum = (list, of) => ownRound(list.reduce((n, x) => n + (of(x) || 0), 0));
const ownTypeText = (lists, account) => (((lists || {}).accountType || []).find(o => o.id === account.type) || { text: account.type }).text;
const ownAccountTitle = (lists, account) => {
  const kind = account.institution ? `${ownTypeText(lists, account)}, ${account.institution}` : ownTypeText(lists, account);
  return account.name ? `${account.name} (${kind})` : kind;
};
// the same bank or firm however it was typed ("Harbor Bank " and "harbor bank"); an account with none typed stands alone
const ownPlaceKey = account => account.institution ? account.institution.trim().toLowerCase().replace(/\s+/g, ' ') : `#${account.id}`;
const ownAccountOf = account => OWN_ACCOUNT[account.type] || { tax: 'taxable', guard: 'where' };
// every number in a value looked up, in order ("$50,000 on the last day; $75,000 at any time" is [50000, 75000])
const ownRefNumbers = (refs, id) => {
  const ref = (refs || []).find(r => r.id === id) || lessonFail(`unknown ref ${id}`);
  return (String(ref.value).match(/\d[\d,]*(\.\d+)?/g) || []).map(parseTyped);
};
// a table of the work: two columns keep their amounts whole on a narrow screen as a statement does; wider ones wrap as a plain table
const ownTable = (title, head, rows) => ({ kind: 'document', form: head.length === 2 ? 'statement' : 'table', title, head, rows: rows.map((cells, i) => ({ id: `r${i}`, ...(cells.strong ? { strong: true } : {}), cells: cells.cells || cells })) });
const ownStrong = cells => ({ strong: true, cells });

/* ---------- what it costs ---------- */
// the arithmetic of one account as a statement: each fund, its yearly cost, the dollars, the fees, the total
function ownCostDocument(lists, account){
  const cost = ownAccountCost(account);
  const rows = [...cost.funds.map((f, i) => ({ id: `fund${i}`, cells: [`${f.name}, ${ownWhole(f.value)}`, f.expense === undefined ? SAY.workNotTyped : `${Number(f.expense.toFixed(3))}%`,
      f.expense === undefined ? SAY.workNotTyped : ownMoney(f.dollars)] })),
    ...(cost.fees ? [{ id: 'fees', cells: [SAY.ownFees, '', ownMoney(cost.fees)] }] : []),
    { id: 'total', strong: true, cells: [SAY.ownThisCosts, '', `${ownMoney(cost.total)} ${SAY.ownAYear}`] }];
  return { kind: 'document', form: 'statement', title: ownAccountTitle(lists, account), head: [SAY.ownFundCol, SAY.ownRateCol, SAY.ownDollarsCol], rows };
}
function ownWorkCost(sheet, ctx){
  const accounts = sheet.accounts, total = ownSheetCost(accounts), balance = ownSheetBalance(accounts);
  const untyped = accounts.some(a => (a.holdings || []).some(h => h.expense === undefined));
  const taxable = accounts.some(a => ownAccountOf(a).tax === 'taxable' && !ownAccountOf(a).abroad && (a.holdings || []).length);
  return { docs: accounts.map(a => ownCostDocument(ctx.lists, a)),
    lines: [{ strong: `${SAY.ownAllCost} ${ownMoney(total)} ${SAY.ownAYear}`, text: `, ${SAY.ownAPercent(balance ? fmtNumber(total / balance * 100) : '0')}.` },
      ...(untyped ? [{ text: SAY.workCostUntyped }] : []), ...(taxable ? [{ text: SAY.workCostTaxable }] : [])] };
}

/* ---------- the list, and what protects each account ---------- */
// FDIC counts one depositor's money by bank and by kind of ownership: accounts in one name at one bank are added up against $250,000,
// and a joint account with one other person against twice that (each owner's share is covered on its own). Other kinds of ownership
// (a trust, a business) have rules the app does not count. SIPC counts each customer's accounts at one firm by separate capacity (alone,
// joint, and so on, each its own), each up to its limit for securities and cash together, of which a smaller limit for cash alone.
const OWN_OWNERS = { me: 1, joint: 2 };
// the accounts that one cover adds up together: by bank or firm, and by kind of ownership; [{ first, owner, balance, cash }]
function ownCoverGroups(accounts, guard){
  const groups = {};
  accounts.filter(a => ownAccountOf(a).guard === guard).forEach(a => {
    const key = `${ownPlaceKey(a)}|${a.owner || ''}`, was = groups[key] || { first: a, owner: a.owner, balance: 0, cash: 0 };
    groups[key] = { ...was, balance: ownRound(was.balance + a.balance), cash: ownRound(was.cash + ownSum(a.holdings || [], h => OWN_KIND[h.kind] === 'cash' ? h.value : 0)) };
  });
  return Object.values(groups);
}
function ownWorkList(sheet, ctx){
  const accounts = sheet.accounts, total = ownSheetBalance(accounts), [fdic] = ownRefNumbers(ctx.refs, 'fdic'), [sipc, sipcCash] = ownRefNumbers(ctx.refs, 'sipc');
  const guards = { fdic: SAY.workGuardFdic(ownWhole(fdic)), sipc: SAY.workGuardSipc(ownWhole(sipc)), trust: SAY.workGuardTrust, where: SAY.workGuardWhere, abroad: SAY.workGuardAbroad };
  const rows = accounts.map(a => [ownAccountTitle(ctx.lists, a), ownWhole(a.balance), `${fmtNumber(ownPct(a.balance, total))}%`, guards[ownAccountOf(a).guard]]);
  const ownerText = id => ((ctx.lists.ownership || []).find(o => o.id === id) || { text: '' }).text;
  const where = g => g.first.institution || ownAccountTitle(ctx.lists, g.first);
  const bankOver = ownCoverGroups(accounts, 'fdic').filter(g => OWN_OWNERS[g.owner] && g.balance > OWN_OWNERS[g.owner] * fdic);
  const banks = bankOver.map(g => ({ flag: true,
    text: SAY.workOverFdic(where(g), ownerText(g.owner), ownWhole(g.balance), ownWhole(ownRound(g.balance - OWN_OWNERS[g.owner] * fdic)), ownWhole(OWN_OWNERS[g.owner] * fdic)) }));
  const firmGroups = ownCoverGroups(accounts, 'sipc').filter(g => g.owner);
  const firms = [...firmGroups.filter(g => g.balance > sipc).map(g => ({ flag: true, text: SAY.workOverSipc(where(g), ownerText(g.owner), ownWhole(g.balance), ownWhole(ownRound(g.balance - sipc))) })),
    ...firmGroups.filter(g => g.cash > sipcCash).map(g => ({ flag: true, text: SAY.workOverSipcCash(where(g), ownerText(g.owner), ownWhole(g.cash), ownWhole(ownRound(g.cash - sipcCash))) }))];
  const covered = accounts.filter(a => a.type === 'bank' || a.type === 'brokerage');
  const unmarked = covered.some(a => !a.institution || !a.owner), other = covered.some(a => a.owner === 'other');
  return { docs: [ownTable(SAY.workListTitle, SAY.workListHead, [...rows, ownStrong([SAY.workTotal, ownWhole(total), '100%', ''])])],
    // a joint account over its limit is moved to another bank; one name may also move into another kind of ownership
    lines: [...banks, ...firms, ...(banks.length ? [{ text: bankOver.every(g => g.owner === 'joint') ? SAY.workListFixBank : SAY.workListFix }] : []), ...(unmarked ? [{ text: SAY.workListUnmarked }] : []), ...(other ? [{ text: SAY.workListOther }] : []),
      { text: SAY.workListFall }, ...(accounts.some(a => ownAccountOf(a).guard === 'where') ? [{ text: SAY.workListWhere }] : [])] };
}

/* ---------- money needed soon ---------- */
// cash you can reach: bank accounts, in the US or abroad (an account outside the US with no funds in it), and cash held in a taxable account in the US (not cash inside a retirement account)
const ownReachableCash = accounts => ownSum(accounts, a => a.type === 'bank' || (a.type === 'foreign' && !(a.holdings || []).length) ? a.balance
  : ownAccountOf(a).tax === 'taxable' && !ownAccountOf(a).abroad ? ownSum(a.holdings || [], h => OWN_KIND[h.kind] === 'cash' ? h.value : 0) : 0);
// The way the lesson decides, on the learner's own numbers. Each big bill due within the limit's years (this year counted, years gone by left
// out) is looked at by where its money is: in a bank account it is put aside, and the months of spending are counted on the rest; in stocks
// it has to move; not put aside yet, it comes before any cash is called more than needed. The months are never below 0.
const ownBillSum = (bills, kept) => ownSum(bills.filter(b => b.kept === kept), b => b.amount);
function ownWorkCash(sheet, ctx){
  const { bufferMonths, idleMonths, soonYears } = ctx.limits, monthly = sheet.spending.monthly, cash = ownReachableCash(sheet.accounts), keptText = id => ((ctx.lists.billKept || []).find(o => o.id === id) || { text: '' }).text;
  const lastYear = ctx.year + soonYears, bills = sheet.bills || [], soon = bills.filter(b => b.year >= ctx.year && b.year <= lastYear);
  const inBank = ownBillSum(soon, 'cash'), notYet = ownBillSum(soon, 'none'), spare = ownRound(Math.max(0, cash - inBank)), months = monthly ? Math.round(spare / monthly * 10) / 10 : 0;
  const docs = [ownTable(SAY.workCashTitle, SAY.workTwoHead, [[SAY.workCashReach, ownWhole(cash)], ...(inBank ? [[SAY.workCashSetApart(lastYear), `−${ownWhole(inBank)}`], [SAY.workCashLeft, ownWhole(spare)]] : []),
      [SAY.workCashMonthly, ownWhole(monthly)], ownStrong([SAY.workCashMonths, fmtNumber(months)])]),
    ...(bills.length ? [ownTable(SAY.workBillsTitle, SAY.workBillsHead, bills.map(b => [b.what, String(b.year), ownWhole(b.amount), b.kept ? keptText(b.kept) : SAY.workNotTyped]))] : [])];
  // no month typed as spent: the months cannot be worked out, so nothing is called short or idle
  const low = ownRound(bufferMonths * monthly), high = ownRound(idleMonths * monthly);
  const call = !monthly ? { text: SAY.workCashNoMonth } : spare < low ? { flag: true, text: SAY.workCashShort(ownWhole(ownRound(low - spare)), bufferMonths) }
    : spare - notYet > high ? { flag: true, text: SAY.workCashIdle(ownWhole(ownRound(spare - notYet - high)), idleMonths) }
    : { text: SAY.workCashEnough(bufferMonths, idleMonths) };
  return { docs, lines: [
    ...soon.filter(b => b.kept === 'stocks').map(b => ({ flag: true, text: SAY.workCashBillStocks(b.what, ownWhole(b.amount), b.year) })),
    ...soon.filter(b => b.kept === 'none').map(b => ({ flag: true, text: SAY.workCashBillNone(b.what, ownWhole(b.amount), b.year) })),
    call,
    ...(cash < inBank ? [{ text: SAY.workCashOverBills }] : []),
    ...(soon.some(b => !b.kept) ? [{ text: SAY.workCashKeptUnknown }] : []),
    ...(bills.some(b => b.year < ctx.year) ? [{ text: SAY.workCashPast }] : []),
    ...(sheet.accounts.some(a => ownAccountOf(a).tax === 'taxable' && a.type !== 'bank' && (a.holdings || []).some(h => !h.kind)) ? [{ text: SAY.workUnmarked }] : [])] };
}

/* ---------- the employer match ---------- */
// A match in one step (`share` cents a dollar up to `upTo`% of pay) or two (then `share2` cents on the `next`% of pay after it, as plans write
// it): the rate that takes it all is where the last step ends. The form keeps the second step's two fields filled together (`together`).
function ownWorkMatch(sheet){
  if(!sheet.match) return { docs: [], lines: [{ text: SAY.workMatchNone }] };
  const { pay, mine, share, upTo, share2, next } = sheet.match, two = share2 !== undefined && next !== undefined && next > 0, top = two ? upTo + next : upTo;
  const matched = r => ownRound(pay * (Math.min(r, upTo) * share + (two ? Math.max(0, Math.min(r, top) - upTo) * share2 : 0)) / 10000);
  const now = matched(mine), full = matched(top), short = ownRound(full - now);
  return { docs: [ownTable(SAY.workMatchTitle, SAY.workTwoHead, [[SAY.workMatchPay, ownWhole(pay)], [SAY.workMatchMine(fmtNumber(mine)), ownWhole(ownRound(pay * mine / 100))],
      [SAY.workMatchNow, ownWhole(now)], ownStrong([SAY.workMatchFull(fmtNumber(top)), ownWhole(full)])])],
    lines: [short > 0 ? { flag: true, text: SAY.workMatchShort(ownWhole(short), fmtNumber(top)) } : { text: SAY.workMatchWhole }, { text: SAY.workMatchVest }] };
}

/* ---------- where each kind of fund sits for tax ---------- */
const ownHeld = (account, kind) => ownSum(account.holdings || [], h => OWN_KIND[h.kind] === kind ? h.value : 0);
// Bonds whose payouts are taxed every year (in a brokerage account) against stocks in an account taxed only when money comes out (a 401(k),
// an IRA): the swap keeps the mix. A Roth IRA or an HSA is shown and not counted for the swap. With the tax rate and last year's bond
// payouts typed, the tax on them a year.
function ownWorkPlacement(sheet, ctx){
  const shown = sheet.accounts.filter(a => a.type !== 'bank' && !ownAccountOf(a).abroad);
  const rows = shown.map(a => [ownAccountTitle(ctx.lists, a), SAY.workTax[ownAccountOf(a).tax], ownWhole(ownHeld(a, 'stocks')), ownWhole(ownHeld(a, 'bonds'))]);
  const taxedBonds = ownSum(shown.filter(a => ownAccountOf(a).tax === 'taxable'), a => ownHeld(a, 'bonds'));
  const shelteredStocks = ownSum(shown.filter(a => ownAccountOf(a).tax === 'deferred'), a => ownHeld(a, 'stocks'));
  const swap = Math.min(taxedBonds, shelteredStocks), tax = sheet.tax || {};
  const taxLine = swap > 0 && tax.rate !== undefined && tax.bondIncome !== undefined
    ? [{ text: SAY.workPlaceTax(ownMoney(tax.bondIncome), fmtNumber(tax.rate), ownMoney(ownRound(tax.bondIncome * tax.rate / 100))) }] : [];
  const free = shown.some(a => ownAccountOf(a).tax === 'free' && ownHeld(a, 'bonds') + ownHeld(a, 'stocks') > 0);
  // a fund with no "What it holds" may be bonds or stocks: then "nothing to move" cannot be said. Bonds taxed every year with no stocks in a
  // 401(k) or IRA to trade places with, and a fund that mixes by age there (mostly stocks, not weighed), each get their own line.
  const unmarked = shown.some(a => (a.holdings || []).some(h => !h.kind));
  const deferred = shown.filter(a => ownAccountOf(a).tax === 'deferred'), mixed = deferred.some(a => ownHeld(a, 'mixed') > 0);
  const none = unmarked ? SAY.workPlaceUnknown : taxedBonds > 0 && deferred.length ? (mixed ? SAY.workPlaceMixed : SAY.workPlaceNoStocks) : SAY.workPlaceFine;
  return { docs: shown.length ? [ownTable(SAY.workPlaceTitle, SAY.workPlaceHead, rows)] : [],
    lines: [...(swap > 0 ? [{ flag: true, text: SAY.workPlaceSwap(ownWhole(taxedBonds), ownWhole(shelteredStocks), ownWhole(swap)) }, ...taxLine, { text: SAY.workPlaceSell }]
      : [{ text: none }]), ...(unmarked && swap > 0 ? [{ text: SAY.workUnmarked }] : []), ...(free ? [{ text: SAY.workPlaceFree }] : []), { text: SAY.workPlaceGains }] };
}

/* ---------- the biggest single company ---------- */
// A holding is one company's stock when its company is typed, or when it is marked so (then its own name stands for the company): the same
// company is added up across every account, however each statement names the holding, against everything on the list.
function ownWorkShare(sheet, ctx){
  const total = ownSheetBalance(sheet.accounts), byCompany = {};
  const company = h => h.company ? h.company.trim() : h.kind === 'one-company' ? h.name.trim() : '';
  sheet.accounts.forEach(a => (a.holdings || []).filter(company).forEach(h => {
    const key = company(h).toLowerCase().replace(/\s+/g, ' '), was = byCompany[key] || { name: company(h), value: 0, plan: false };
    byCompany[key] = { name: was.name, value: ownRound(was.value + h.value), plan: was.plan || ownAccountOf(a).tax !== 'taxable' };
  }));
  const companies = Object.values(byCompany).sort((x, y) => y.value - x.value), limit = ctx.limits.oneBet, over = companies.filter(c => ownPct(c.value, total) > limit);
  const unmarked = sheet.accounts.some(a => (a.holdings || []).some(h => !h.kind && !h.company)), nameOnly = sheet.accounts.some(a => (a.holdings || []).some(h => h.kind === 'one-company' && !h.company));
  return { docs: companies.length ? [ownTable(SAY.workShareTitle, SAY.workShareHead, companies.map(c => [c.name, ownWhole(c.value), `${fmtNumber(ownPct(c.value, total))}%`]))] : [],
    lines: [...over.map(c => ({ flag: true, text: SAY.workShareOver(c.name, fmtNumber(ownPct(c.value, total)), limit, ownWhole(ownRound(c.value - total * limit / 100))) })),
      ...(over.some(c => c.plan) ? [{ text: SAY.workShareWhere }] : []), ...(over.some(c => !c.plan) ? [{ text: SAY.workShareTaxed }] : []),
      ...(companies.length && !over.length ? [{ text: SAY.workShareUnder(limit) }] : []),
      ...(companies.length ? [] : [{ text: SAY.workShareNone }]), ...(nameOnly ? [{ text: SAY.workShareName }] : []), ...(unmarked ? [{ text: SAY.workUnmarked }] : [])] };
}

/* ---------- the core of a business (Strategy) ---------- */
// The learner's own lines, each kind (product, customer, way of selling) in a table of its own so no sale is counted twice: what each line
// earns after its direct cost, largest first, and its share of what all the lines of the kind earn together, losses taken off (lesson 5's share,
// research ST19: it can pass 100%). The line that earns the most is named, with the question only the learner can answer, whether customers come
// for it rather than to a rival (ST4, ST8: the core is the most distinctive and the most profitable); each line that loses money is flagged with
// lesson 5's question, whether the core's customers buy it along with the core. Reads the business, the subject's list lineKind, nothing else.
const ownEarns = line => ownRound(line.revenue - line.cost);
const ownSigned = value => value < 0 ? `−${ownWhole(-value)}` : ownWhole(value);
function ownCoreOf(lines){
  const sorted = [...lines].sort((a, b) => ownEarns(b) - ownEarns(a));
  return { sorted, net: ownSum(sorted, ownEarns), top: sorted.find(l => ownEarns(l) > 0) || null, losing: sorted.filter(l => ownEarns(l) < 0) };
}
function ownWorkCore(business, ctx){
  const kinds = ((ctx.lists || {}).lineKind || []).filter(k => business.lines.some(l => l.kind === k.id));
  const each = kinds.map(k => ({ kind: k, ...ownCoreOf(business.lines.filter(l => l.kind === k.id)) }));
  const shareOf = (e, l) => e.net > 0 ? `${fmtNumber(ownPct(ownEarns(l), e.net))}%` : '';
  return { docs: each.map(e => ownTable(SAY.bizCoreTitle(e.kind.text), SAY.bizCoreHead,
      [...e.sorted.map(l => [l.name, ownSigned(ownEarns(l)), ownEarns(l) > 0 ? shareOf(e, l) : SAY.bizLoses]),
        ownStrong([SAY.bizAll, ownSigned(e.net), ''])])),
    lines: each.flatMap(e => [
      ...(e.top && e.net > 0 && e.sorted.length > 1 ? [{ flag: true, text: SAY.bizTopLine(e.top.name, fmtNumber(ownPct(ownEarns(e.top), e.net))) }] : []),
      ...e.losing.map(l => ({ flag: true, text: SAY.bizLosing(l.name, ownWhole(-ownEarns(l))) })),
      ...(e.net <= 0 ? [{ flag: true, text: SAY.bizNoneEarn }] : [])]) };
}

/* ---------- the works ---------- */
// Each work reads one private form (`on`): the sheet (Wealth) or the business (Strategy). A step names a work of the form it is on (V70).
const OWN_WORKS_EACH = {
  cost: { needs: [], reads: {}, refs: [], limits: [], make: ownWorkCost },
  list: { needs: [], reads: {}, fields: { institution: 'text', owner: 'choose' }, refs: ['fdic', 'sipc'], limits: [], lists: true, make: ownWorkList },
  cash: { needs: ['spending', 'bills'], reads: { spending: { monthly: 'number' }, bills: { what: 'text', amount: 'number', year: 'number', kept: 'choose' } }, refs: [],
    limits: ['bufferMonths', 'idleMonths', 'soonYears'], lists: true, make: ownWorkCash },
  match: { needs: ['match'], reads: { match: { pay: 'number', mine: 'number', share: 'number', upTo: 'number', share2: 'number', next: 'number' } }, refs: [], limits: [], make: ownWorkMatch },
  placement: { needs: ['tax'], reads: { tax: { rate: 'number', bondIncome: 'number' } }, refs: [], limits: [], lists: true, make: ownWorkPlacement },
  share: { needs: [], reads: {}, rowFields: { company: 'text' }, refs: [], limits: ['oneBet'], lists: true, make: ownWorkShare },
  ...OWN_WORKS_LATER   // lessons 7 to 11, own-work-later.js
};
const OWN_ON_SHEET = Object.fromEntries(Object.entries({ ...OWN_WORKS_EACH, yearly: ownYearlyWork(OWN_WORKS_EACH) }).map(([id, work]) => [id, { on: 'sheet', ...work }]));
const OWN_WORKS = { ...OWN_ON_SHEET, core: { on: 'business', needs: [], reads: {}, refs: [], limits: [], lists: true, make: ownWorkCore } };
// the work of a step on what is stored (the sheet, or the business for a work on it): { docs, lines }. `ctx` is { lists, refs, limits, year }. Where a line calls for a look (a flag, often a
// dollar move), one last line says it applies the rule's line to the learner's numbers and is not advice.
function ownWork(workId, held, ctx){
  const work = (OWN_WORKS[workId] || lessonFail(`unknown work ${workId}`)).make(held, ctx);
  return work.lines.some(l => l.flag) ? { ...work, lines: [...work.lines, { text: SAY.workNotAdvice }] } : work;
}
// the groups a work needs that the sheet does not hold yet (a group saved blank is held, as null or an empty list)
const ownMissingGroups = (workId, sheet) => OWN_WORKS[workId].needs.filter(g => (sheet || {})[g] === undefined);
