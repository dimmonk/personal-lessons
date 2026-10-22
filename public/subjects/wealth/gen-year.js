// Wealth, lesson 12 "The whole check, done and repeated": one household's papers, seven tabs, made with fresh numbers (lesson standard 3,
// generators), and the yearly check as one form of ten lines, each "Change it" or "Leave it" by its own lesson's rule (research W1-W3, W61):
//   cash      the US bank savings in months of spending: under three or over six (no bills ahead) is change (lesson 2; the household's
//             accounts in Canada are an RRSP and a TFSA, not bank cash)
//   fee       a fund dearer than another of its kind on the same list (lesson 3)
//   match     a rate under where the match stops (lesson 4)
//   place     bonds in the brokerage account while the 401(k) holds stocks (lesson 5)
//   bet       one company over 10% of everything on the list: every account, bank and Canada included (lesson 6)
//   drift     stocks of the 401(k) and the brokerage account 5 points or more off the mix chosen (lesson 7)
//   cover     what a claim could reach (all but the 401(k), the home less its mortgage) over the liability limit (lesson 8)
//   foreign   the accounts in Canada over $10,000 at their highest (an FBAR), or a TFSA held (lesson 9)
//   heir      the 401(k)'s beneficiary page still naming a former spouse (lesson 10)
//   papers    a will or a durable power of attorney not on file (lesson 10)
// Each line is drawn flagged or sound and far from its line, never near it. `g-year` draws two to four flagged lines (every pattern of the
// ten lines with 2, 3 or 4 set); `g-year-clear` has none, so every line is left. A sound line changed is the slip `changed-sound`; a
// flagged line left is `missed-flag`. The spending rate is not a line here (the household is working); the lesson's check asks it apart.
(() => {
  const whole = dollars => '$' + dollars.toLocaleString('en-US');
  const hundred = x => Math.round(x / 100) * 100;
  const plural = (n, word) => `${n} ${word}${n === 1 ? '' : 's'}`;
  const LINES = ['cash', 'fee', 'match', 'place', 'bet', 'drift', 'cover', 'foreign', 'heir', 'papers'];
  const PATTERNS = Array.from({ length: 1 << LINES.length }, (_, m) => m).filter(m => { const bits = m.toString(2).replace(/0/g, '').length; return bits >= 2 && bits <= 4; });
  const PEOPLE = ['Nora', 'Daniel', 'Mei', 'Omar'];
  const SPOUSES = ['Sam', 'Alex', 'Robin', 'Casey'];
  const EXES = ['Chris', 'Morgan', 'Jamie', 'Taylor'];
  const CHILDREN = ['Lily', 'Noah', 'Ava', 'Leo'];
  const COMPANIES = ['Acme Corp', 'Northwind Systems', 'Corvia Health', 'Tallgrass Energy'];
  const FUNDS = ['Large Company Fund', 'US Equity Fund'];
  const MATCHES = [{ share: 50, upTo: 6 }, { share: 100, upTo: 4 }];
  const PARAMS = {
    whoAt: [0, 3, 1], spouseAt: [0, 3, 1], exAt: [0, 3, 1], childAt: [0, 3, 1], companyAt: [0, 3, 1], heldAt: [0, 1, 1], matchAt: [0, 1, 1],
    monthly: [3000, 6000, 100], cashIdle: [0, 1, 1], shortMonths: [1, 2, 0.5], idleMonths: [7.5, 10, 0.5], okMonths: [3.5, 5, 0.5], dear: [0.6, 1, 0.05], cheap: [0.02, 0.06, 0.01],
    below: [1, 3, 1], above: [0, 4, 1], held: [60000, 200000, 1000], bonds: [30000, 120000, 1000], brok: [40000, 200000, 1000], brokBonds: [15000, 50000, 1000],
    betHigh: [15, 25, 1], betLow: [2, 6, 1], drift: [7, 10, 1], near: [1, 2, 1], up: [0, 1, 1], home: [300000, 600000, 10000], owe: [0.4, 0.7, 0.05],
    foreignHow: [0, 2, 1], rrspHigh: [14000, 30000, 100], rrspLow: [2000, 5000, 100], tfsa: [2000, 3000, 100], dip: [100, 900, 100], married1: [2008, 2013, 1], gap: [3, 6, 1], missingAt: [0, 1, 1]
  };
  function household(pick, mask){
    const on = line => (mask >> LINES.indexOf(line)) & 1;
    const who = PEOPLE[pick('whoAt')], spouse = SPOUSES[pick('spouseAt')], ex = EXES[pick('exAt')], child = CHILDREN[pick('childAt')], company = COMPANIES[pick('companyAt')];
    // cash: short or idle when flagged
    const monthly = pick('monthly'), idle = on('cash') && pick('cashIdle') === 1, months = on('cash') ? (idle ? pick('idleMonths') : pick('shortMonths')) : pick('okMonths'), bank = monthly * months;
    // the 401(k): the stock fund held (the dearer of two of one kind when flagged), the bond fund, the company's stock; the match
    const heldName = FUNDS[pick('heldAt')], otherName = FUNDS[1 - pick('heldAt')], dear = pick('dear'), cheap = pick('cheap');
    const heldCost = on('fee') ? dear : cheap, otherCost = on('fee') ? cheap : dear;
    const match = MATCHES[pick('matchAt')], mine = on('match') ? match.upTo - pick('below') : match.upTo + pick('above');
    const held = pick('held'), bonds = pick('bonds'), brok = pick('brok'), brokBonds = on('place') ? pick('brokBonds') : 0;
    // Canada: an RRSP, and a TFSA when the line is flagged by one; the FBAR on the highest balances together
    const how = pick('foreignHow'), bigRrsp = on('foreign') && how !== 1, tfsa = on('foreign') && how !== 0;
    const rrspHi = bigRrsp ? pick('rrspHigh') : pick('rrspLow'), rrspEnd = rrspHi - pick('dip'), tfsaHi = tfsa ? pick('tfsa') : 0, tfsaEnd = tfsa ? tfsaHi - 100 : 0;
    const abroadHigh = rrspHi + tfsaHi, abroadEnd = rrspEnd + tfsaEnd;
    // one company: its share of everything on the list
    const others = bank + held + bonds + brok + brokBonds + abroadEnd, p = on('bet') ? pick('betHigh') : pick('betLow'), stock = hundred(others * p / (100 - p)), total = others + stock;
    const betShare = Math.round(stock / total * 1000) / 10;
    // the mix: stocks of the 401(k) and the brokerage account against the share chosen
    const stocks = held + stock + brok, share = Math.round(stocks / (stocks + bonds + brokBonds) * 1000) / 10, sign = pick('up') ? 1 : -1;
    const chosen = Math.round(share) - sign * (on('drift') ? pick('drift') : pick('near')), driftPoints = Math.round(Math.abs(share - chosen) * 10) / 10;
    // what a claim could reach (not the 401(k)) against the limit
    const home = pick('home'), owe = hundred(home * pick('owe')), reach = bank + brok + brokBonds + abroadEnd + home - owe;
    const limit = on('cover') ? Math.max(100000, Math.floor(reach / 1.2 / 50000) * 50000) : Math.ceil(reach / 0.8 / 50000) * 50000;
    // the family, the 401(k)'s beneficiary page, the papers
    const married1 = pick('married1'), divorced = married1 + pick('gap'), married2 = divorced + 2;
    const primary = on('heir') ? `${ex}, spouse` : `${spouse}, spouse`, missing = on('papers') ? (pick('missingAt') ? 'poa' : 'will') : '';
    const v = {
      who, spouse, ex, child, company, monthlyText: whole(monthly), bankText: whole(bank), months, heldName, otherName, heldCost, otherCost, mine, matchShare: match.share, upTo: match.upTo,
      heldText: whole(held), bondsText: whole(bonds), stockText: whole(stock), brokText: whole(brok), brokBondsText: whole(brokBonds), totalText: whole(total), betShare, chosen, share, driftPoints,
      rrspHiText: whole(rrspHi), rrspEndText: whole(rrspEnd), tfsaHiText: tfsa ? whole(tfsaHi) : 'None', tfsaEndText: tfsa ? whole(tfsaEnd) : 'None', abroadHigh,
      homeText: whole(home), oweText: whole(owe), reach, reachText: whole(reach), limit, limitText: whole(limit), married1, divorced, married2, primary,
      willText: missing === 'will' ? 'None' : 'Signed 2019', poaText: missing === 'poa' ? 'None' : 'Signed 2019', idle: idle ? 'yes' : 'no'
    };
    const WHY = {
      cash: on('cash') ? (idle ? `${whole(bank)} is ${plural(months, 'month')} of ${whole(monthly)}, past six, with no bills ahead: invest the rest. Change it.`
        : `${whole(bank)} is ${plural(months, 'month')} of ${whole(monthly)}: under three. Change it.`) : `${whole(bank)} is ${plural(months, 'month')} of ${whole(monthly)}: three to six. Leave it.`,
      fee: on('fee') ? `${heldName} costs ${heldCost}%; ${otherName}, the same kind on the same list, costs ${otherCost}%. Change it.` : `${heldName} is the cheaper of the two US stock funds. Leave it.`,
      match: on('match') ? `${mine}% is under the ${match.upTo}% the match runs to. Change it.` : `${mine}% takes the whole match, which runs to ${match.upTo}%. Leave it.`,
      place: on('place') ? `${whole(brokBonds)} of bonds sit in the brokerage account while the 401(k) holds stocks: a swap keeps the mix. Change it.` : 'No bonds sit in the brokerage account. Leave it.',
      bet: on('bet') ? `${company} stock is ${betShare}% of everything (${whole(stock)} of ${whole(total)}), over 10%. Change it.` : `${company} stock is ${betShare}% of everything (${whole(stock)} of ${whole(total)}), under 10%. Leave it.`,
      drift: on('drift') ? `Stocks are ${share}% of the 401(k) and brokerage money against ${chosen}% chosen: ${plural(driftPoints, 'point')} off. Change it.` : `Stocks are ${share}% against ${chosen}% chosen: ${plural(driftPoints, 'point')} off, under 5. Leave it.`,
      cover: on('cover') ? `A claim could reach ${whole(reach)} (not the 401(k)), more than the ${whole(limit)} limit. Change it.` : `A claim could reach ${whole(reach)} (not the 401(k)), under the ${whole(limit)} limit. Leave it.`,
      foreign: on('foreign') ? [bigRrsp ? `The accounts in Canada reached ${whole(abroadHigh)} together, over $10,000: an FBAR is due.` : '', tfsa ? 'A TFSA is held: a flag for a cross-border preparer.' : '', 'Change it.'].filter(Boolean).join(' ')
        : `The RRSP alone, at most ${whole(abroadHigh)}, under $10,000, and no TFSA. Leave it.`,
      heir: on('heir') ? `The 401(k) page still names ${ex}, divorced in ${divorced}. Change it.` : `The 401(k) page names ${spouse}, with ${child} as backup. Leave it.`,
      papers: on('papers') ? (missing === 'will' ? 'No will is on file. Change it.' : 'No durable power of attorney is on file. Change it.') : 'The will and the power of attorney are on file. Leave it.'
    };
    return LINES.reduce((acc, line) => ({ ...acc, [`${line}Call`]: on(line) ? 'change' : 'leave', [`${line}C`]: on(line) ? '' : 'changed-sound',
      [`${line}L`]: on(line) ? 'missed-flag' : '', [`${line}Why`]: WHY[line] }), { ...v, flagged: LINES.filter(on).length,
      reasonText: LINES.map(line => WHY[line]).filter((_, i) => (mask >> i) & 1).join(' ') });
  }
  const docs = [
    { kind: 'document', form: 'table', tab: 'Bank and spending', title: '{who}’s cash and spending', head: ['What', 'Amount'],
      rows: [{ id: 'r1', cells: ['Bank savings (US)', '{bankText}'] }, { id: 'r2', cells: ['What {who} spends in a month', '{monthlyText}'] },
        { id: 'r3', cells: ['Big bills ahead', 'None'] }, { id: 'r4', cells: ['The mix {who} chose', '{chosen}% stocks'] }],
      notes: ['The mix is of the money in the 401(k) and the brokerage account.'] },
    { kind: 'document', form: 'statement', tab: '401(k)', title: '{who}’s 401(k)', head: ['Line', 'Value'],
      rows: [{ id: 'p1', cells: ['{heldName}', '{heldText}'] }, { id: 'p2', cells: ['Bond Fund', '{bondsText}'] }, { id: 'p3', cells: ['{company} Stock Fund', '{stockText}'] },
        { id: 'p4', cells: ['You put in', '{mine}% of pay'] }, { id: 'p5', cells: ['The match', '{matchShare} cents per dollar, on what you put in up to {upTo}% of pay'] }] },
    { kind: 'document', form: 'fees', tab: 'Fee sheet', title: 'The 401(k): what the funds cost', head: ['Fund', 'Kind', 'Expense ratio'],
      rows: [{ id: 'e1', cells: ['{heldName}', 'US stocks', '{heldCost}%'] }, { id: 'e2', cells: ['{otherName}', 'US stocks', '{otherCost}%'] },
        { id: 'e3', cells: ['Bond Fund', 'Bonds', '0.05%'] }, { id: 'e4', cells: ['{company} Stock Fund', 'One company', '0.10%'] }] },
    { kind: 'document', form: 'statement', tab: 'Brokerage', title: '{who}’s brokerage account', head: ['Holding', 'Value'],
      rows: [{ id: 'k1', cells: ['US Stock Market Fund', '{brokText}'] }, { id: 'k2', cells: ['Total Bond Fund', '{brokBondsText}'] }] },
    { kind: 'document', form: 'foreign', tab: 'Canada', title: '{who}’s accounts in Canada, in US dollars', head: ['Account', 'Highest this year', 'December 31'],
      rows: [{ id: 'f1', cells: ['RRSP', '{rrspHiText}', '{rrspEndText}'] }, { id: 'f2', cells: ['TFSA', '{tfsaHiText}', '{tfsaEndText}'] }] },
    { kind: 'document', form: 'table', tab: 'Home and insurance', title: '{who}’s home and liability limits', head: ['What', 'Amount'],
      rows: [{ id: 'h1', cells: ['Home: what it is worth', '{homeText}'] }, { id: 'h2', cells: ['Mortgage owed', '{oweText}'] },
        { id: 'h3', cells: ['Car and home policies: liability limit, each', '{limitText}'] }, { id: 'h4', cells: ['Umbrella policy', 'None'] }] },
    { kind: 'document', form: 'beneficiary', tab: 'Family and papers', title: '{who}’s family, the 401(k)’s beneficiary page, and papers', head: ['When or what', 'Who or when'],
      rows: [{ id: 'b1', cells: ['{married1}', 'Married {ex}'] }, { id: 'b2', cells: ['{divorced}', 'Divorced {ex}'] }, { id: 'b3', cells: ['{married2}', 'Married {spouse}'] },
        { id: 'b4', cells: ['401(k): primary (100%)', '{primary}'] }, { id: 'b5', cells: ['401(k): backup (contingent)', '{child}'] },
        { id: 'b6', cells: ['Will', '{willText}'] }, { id: 'b7', cells: ['Durable power of attorney for money', '{poaText}'] }] }];
  const LABELS = { cash: 'Cash for spending', fee: 'What the 401(k)’s funds cost', match: 'The match', place: 'Where the bonds sit', bet: 'One company’s stock', drift: 'The mix',
    cover: 'Liability cover', foreign: 'Accounts in Canada', heir: 'Beneficiary page', papers: 'Will and power of attorney' };
  const yearAsk = { id: 'year', kind: 'form', prompt: 'Run {who}’s yearly check: for each line, change it or leave it.',
    fields: LINES.map(line => ({ id: line, label: LABELS[line], type: 'choose', from: 'call', right: `{${line}Call}`,
      slips: { change: `{${line}C}`, leave: `{${line}L}` }, then: { change: `{${line}Why}`, leave: `{${line}Why}` } })) };
  const steps = LINES.map(line => ({ id: line, does: `${LABELS[line]}: held against its own rule.`, working: `{${line}Why}` }));
  const DECIDING = ['r1', 'r2', 'r4', 'p1', 'p3', 'p4', 'p5', 'e1', 'e2', 'k1', 'k2', 'f1', 'f2', 'h1', 'h2', 'h3', 'b2', 'b4', 'b6', 'b7'];
  const generator = (id, clear) => ({
    id, strand: 'year', facets: { call: clear ? 'leave' : 'change' }, params: clear ? PARAMS : { ...PARAMS, pattern: [0, PATTERNS.length - 1, 1] },
    make: pick => household(pick, clear ? 0 : PATTERNS[pick('pattern')]), blocks: docs, asks: [yearAsk],
    steps: [...steps.slice(0, -1), { ...steps[steps.length - 1], ask: 'year' }], deciding: DECIDING,
    reason: clear ? 'Every line sits on the right side of its rule: nothing to change this year. Leaving it is the check’s answer too.' : '{reasonText} Every other line is left alone.'
  });
  FC.gen('wealth', [generator('g-year', false), generator('g-year-clear', true)]);

  // the worked household: Nora, three lines flagged (the fund that costs more, the company over 10%, the 401(k) page naming a former
  // spouse), the other seven left. Its numbers are the generator's own at fixed values, written out once so the worked steps read as written.
  const FIXED = { whoAt: 0, spouseAt: 0, exAt: 0, childAt: 0, companyAt: 0, heldAt: 0, matchAt: 0, monthly: 4000, cashIdle: 0, shortMonths: 1.5, idleMonths: 8, okMonths: 4.5,
    dear: 0.85, cheap: 0.04, below: 2, above: 1, held: 90000, bonds: 50000, brok: 60000, brokBonds: 20000, betHigh: 20, betLow: 4, drift: 8, near: 2, up: 1,
    home: 450000, owe: 0.6, foreignHow: 0, rrspHigh: 20000, rrspLow: 4500, tfsa: 2500, dip: 300, married1: 2010, gap: 4, missingAt: 0 };
  const fixed = household(name => FIXED[name], (1 << LINES.indexOf('fee')) | (1 << LINES.indexOf('bet')) | (1 << LINES.indexOf('heir')));
  const fill = node => typeof node === 'string' ? node.replace(/\{(\w+)\}/g, (m, k) => k in fixed ? String(fixed[k]) : m)
    : Array.isArray(node) ? node.map(fill) : node && typeof node === 'object' ? Object.fromEntries(Object.entries(node).map(([k, x]) => [k, fill(x)])) : node;
  const slipsOf = field => Object.fromEntries(Object.entries(field.slips).filter(([, s]) => s));
  const yearFixed = fill(yearAsk);
  FC.items('wealth', [{
    id: 'w-year', strand: 'year', facets: { call: 'change' }, blocks: fill(docs),
    asks: [{ ...yearFixed, fields: yearFixed.fields.map(f => ({ ...f, slips: slipsOf(f) })) }],
    steps: fill([...steps.slice(0, -1), { ...steps[steps.length - 1], ask: 'year' }]), deciding: DECIDING,
    reason: fill('{reasonText} Every other line is left alone.')
  }]);
})();
