// The pure half of step 4 (lesson standard 26.1, 26.3, 26.10): a form scored field by field, the papers of a household drawn as tabs, a value
// looked up, what the learner's own data must be and how it is worked out, the calendar file, and the numbers Wealth's accounts are made of.
// No browser: the app's scripts are loaded as in tests/load-app.mjs, with the test subjects (tests/fixtures/fixture-subject).
// Run: node tests/own-pure.mjs
import { loadApp } from './load-app.mjs';

const failures = [];
let checks = 0;
const check = (ok, msg) => { checks++; if (!ok) failures.push(msg); };
const same = (a, b, msg) => check(JSON.stringify(a) === JSON.stringify(b), `${msg}: got ${JSON.stringify(a)}, wanted ${JSON.stringify(b)}`);
const app = await loadApp({ fixture: true });
const { FC, itemFromGen, scoreItem, scoreForm, formFieldResults, formDraftReady, formAnswerFrom, formHtml, formMarksHtml, formMissHtml, documentTabsHtml, blockPieces, refHtml,
  ownDigitRun, ownValidDay, ownFieldProblem, ownSheetFromDraft, ownDraftsFromSheet, ownAccountCost, ownSheetCost, ownBalanceGaps, ownWarnings, ownDraftWarnings, ownActionFromDraft,
  ownMarkDone, ownCalendarFile, ownCalendarName, SAY, parseTyped, scoreChoose, scoreNumber, numbersMatch, numberAnswers, tolOf, formFieldAsk, OWN_REQUIRED, OWN_SLOTS } = app;
const ledger = FC.get('ledger'), wealth = FC.get('wealth');
const ask = item => item.asks.find(a => a.id === 'line');

/* ---------- a form is scored field by field ---------- */
{
  const item = ledger.items['l-sheet'], form = ask(item), right = { rate: [0.5], dollars: [250], holds: 'stocks' };
  same(scoreForm(ledger, form, right, item), 'ok', 'every field right');
  same(formFieldResults(ledger, form, right, item), { rate: 'ok', dollars: 'ok', holds: 'ok' }, 'each field right');
  same(scoreForm(ledger, form, { ...right, rate: [0.1] }, item), 'swapped', 'a named slip in one field names the form');
  same(scoreForm(ledger, form, { ...right, dollars: [25000] }, item), 'percent-whole', 'a named slip in the dollars');
  same(scoreForm(ledger, form, { ...right, holds: 'bonds' }, item), 'no', 'a wrong choice with no slip is a plain miss');
  same(scoreForm(ledger, form, { ...right, rate: [0.1], holds: 'bonds' }, item), 'swapped', 'the first slip wins over a plain miss');
  same(scoreForm(ledger, form, { rate: [0.5], dollars: [250] }, item), 'no', 'a field not answered is a miss');
  same(formFieldResults(ledger, form, { rate: [0.5] }, item), { rate: 'ok', dollars: 'no', holds: 'no' }, 'a field not answered is a miss, the others still count');
  check(scoreForm(ledger, form, { ...right, rate: [0.504] }, item) === 'ok' && scoreForm(ledger, form, { ...right, rate: [0.51] }, item) === 'no', 'a field keeps its own tolerance (half a hundredth of a percent)');
  check(scoreForm(ledger, form, { ...right, dollars: [250.004] }, item) === 'ok' && scoreForm(ledger, form, { ...right, dollars: [250.02] }, item) === 'no', 'a field keeps its own rounding (to the cent)');
  const r = scoreItem(ledger, item, null, { line: { ...right, rate: [0.1] } });
  same([r.r, r.ok], [{ line: 'swapped' }, false], 'a form is one result under its ask, and a miss makes the question a miss');
  check(scoreItem(ledger, item, null, { line: right }).ok === true, 'a right form makes the question right');
  // what is typed
  const drafts = { rate: '0.5', dollars: '250' };
  check(!formDraftReady(form, drafts) && !formDraftReady(form, { ...drafts, holds: '' }) && formDraftReady(form, { ...drafts, holds: 'stocks' }), 'a form can be answered only when every box holds a number and every choice an option');
  check(!formDraftReady(form, { rate: '0.5', dollars: 'abc', holds: 'stocks' }) && !formDraftReady(form, { rate: '', dollars: '1', holds: 'stocks' }), 'a box with no number, or empty, keeps the form shut');
  same(formAnswerFrom(form, { rate: '0.50', dollars: '$250.00', holds: 'stocks' }), right, 'the answer stored is the numbers and the option id');
  // a made form
  const made = itemFromGen(ledger.gens['l-gen'], 7), v = made.values, line = ask(made);
  same(scoreForm(ledger, line, { rate: [v.rate], dollars: [v.cost], holds: 'stocks' }, made), 'ok', 'a made form: the right answers');
  same(scoreForm(ledger, line, { rate: [v.rate], dollars: [v.whole], holds: 'stocks' }, made), 'percent-whole', 'a made form: the slip is the number the question makes');
  // on screen
  const open = formHtml(ledger, form, { typed: {}, marks: false }, { item });
  check(/data-field="rate"/.test(open) && /data-field="dollars"/.test(open) && /data-fopt="stocks"/.test(open) && /data-form-answer="line" disabled/.test(open), 'a form shows a box for each number, the options of each choice and a shut Answer');
  check(!/class="mark/.test(open) && !/class="opt right/.test(open), 'a form shows no mark before it is answered');
  check(/data-form-answer="line" >/.test(formHtml(ledger, form, { typed: { line: { ...drafts, holds: 'stocks' } }, marks: false }, { item })), 'the Answer of a form opens when it is ready');
  const marks = formMarksHtml(ledger, form, { ...right, rate: [0.1] }, item);
  check((marks.match(/class="mark no"/g) || []).length === 1 && (marks.match(/class="mark "/g) || []).length === 2 && /The answer: Yearly cost of the Growth Fund: 0\.50%/.test(marks), 'a form is marked field by field, the missed one with the right value');
  const miss = formMissHtml(ledger, form, { ...right, rate: [0.1], dollars: [25000], holds: 'bonds' }, item);
  check(/That is the cost of the Safe Fund/.test(miss) && /uses the percent as if it were dollars/.test(miss) && /The fee sheet says Stocks/.test(miss), 'each missed field says why in words of its own');
  const locked = formHtml(ledger, form, { answer: right, typed: {}, marks: true }, { item });
  check(/disabled/.test(locked) && /opt sel right/.test(locked) && !/data-form-answer/.test(locked), 'an answered form is locked, with the right option marked');
}

/* ---------- a household's papers are tabs; a value looked up ---------- */
{
  const doc = (tab, id) => ({ kind: 'document', form: 'statement', ...(tab ? { tab } : {}), title: tab || 'Plain', rows: [{ id, cells: ['A', '$1'] }] });
  same(blockPieces([doc('One', 'a'), doc('Two', 'b'), { kind: 'prose', text: 'x' }, doc('Three', 'c')]).map(p => p.tabs ? p.tabs.length : 'block'), [2, 'block', 1], 'adjacent tabbed papers are one group, a block between ends it');
  same(blockPieces([doc(null, 'a'), doc(null, 'b')]).map(p => p.tabs ? 'tabs' : 'block'), ['block', 'block'], 'papers with no tab are not grouped');
  const group = [doc('One', 'a'), doc('Two', 'b')], html = documentTabsHtml(group, { deciding: [] });
  check((html.match(/role="tab"/g) || []).length === 2 && (html.match(/role="tabpanel"/g) || []).length === 2 && (html.match(/ hidden>/g) || []).length === 1 && /aria-selected="true">One</.test(html), 'a group opens on its first paper alone');
  check(/aria-selected="true"><mark class="cue">Two<\/mark>/.test(documentTabsHtml(group, { deciding: ['b'] })), 'a group opens on the paper with a marked line, and marks its tab');
  check(/aria-selected="true">Two</.test(documentTabsHtml(group, { deciding: [], scope: 's1' }, void 0)) === false, 'without a choice of its own a group opens on the first paper');
  const stale = { data: { meta: { refs: [{ id: 'r', text: 'A limit', value: '$5', asOf: '2020-01-02', source: 'The office' }] } } };
  const old = refHtml({ kind: 'ref', ref: 'r' }, stale), today = new Date().toISOString().slice(0, 10);
  check(/Looked up January 2, 2020/.test(old) && /Source: The office/.test(old) && /more than a year ago/.test(old), 'a value looked up long ago prints its day and source and says to look again');
  const fresh = refHtml({ kind: 'ref', ref: 'r' }, { data: { meta: { refs: [{ id: 'r', text: 'A limit', value: '$5', asOf: today, source: 'The office' }] } } });
  check(/A value like this changes/.test(fresh) && !/more than a year ago/.test(fresh), 'a value looked up today is not called old');
  let message = '';
  try { refHtml({ kind: 'ref', ref: 'nope' }, stale); } catch (error) { message = error.message; }
  check(/unknown ref/.test(message), 'a ref the subject does not have is refused, not drawn');
}

/* ---------- what the learner may type ---------- */
{
  same(['12345678', '1234567', '1234 5678', '123-45-6789', '1,234,567', '$1,250.50', '4111 1111 1111 1111', '0.45', '2026-10-17'].map(ownDigitRun),
    [true, false, true, true, false, false, true, false, true], 'a run of eight or more digits is an account number; money with its commas is not');
  same(['2026-10-17', '2026-02-29', '2025-02-30', '2024-02-29', '10/17/2026', ''].map(ownValidDay), [true, false, false, true, false, false], 'a day is a real day');
  const lists = { accountType: [{ id: 'ira', text: 'IRA' }] };
  const num = { id: 'n', label: 'N', type: 'number' }, txt = { id: 't', label: 'T', type: 'text' }, sel = { id: 's', label: 'S', type: 'choose', list: 'accountType' }, day = { id: 'd', label: 'D', type: 'date' };
  same([ownFieldProblem(num, '', lists), ownFieldProblem({ ...num, optional: true }, '', lists), ownFieldProblem(num, '40,000', lists), ownFieldProblem(num, '-5', lists), ownFieldProblem(num, 'a lot', lists), ownFieldProblem(num, '12345678', lists)],
    [SAY.ownRequired, '', '', SAY.ownNumber, SAY.ownNumber, SAY.ownDigits], 'a number field');
  same([ownFieldProblem(txt, 'Work 401(k)', lists), ownFieldProblem(txt, '4111 1111 1111 1111', lists), ownFieldProblem(txt, 'x'.repeat(81), lists)], ['', SAY.ownDigits, SAY.ownLong], 'a text field');
  same([ownFieldProblem(sel, 'ira', lists), ownFieldProblem(sel, 'other', lists), ownFieldProblem(sel, '', lists)], ['', SAY.ownChoose, SAY.ownRequired], 'a choice reads its list');
  same([ownFieldProblem(day, '2026-10-17', lists), ownFieldProblem(day, '2026-13-01', lists)], ['', SAY.ownDate], 'a day field is not an account number even though it is eight digits');
}

/* ---------- the sheet: from drafts to stored accounts, and its arithmetic ---------- */
{
  const form = ledger.meta.own.sheet, lists = ledger.meta.lists;
  const draft = { id: 'a1', type: 'ira', name: 'My IRA', balance: '40,000', fees: '50', holdings: [{ name: 'Orange Fund', value: '40000', expense: '2.5', kind: 'stocks' }, { name: '', value: '', expense: '', kind: '' }] };
  const saved = ownSheetFromDraft(form, lists, [draft, { id: 'a2', type: '', name: '', balance: '', fees: '', holdings: [{ name: '', value: '', expense: '', kind: '' }] }]);
  same(saved.problems, [], 'a good account has no problem, and a wholly blank fund row and a blank account are dropped');
  same(saved.accounts, [{ id: 'a1', type: 'ira', name: 'My IRA', balance: 40000, fees: 50, holdings: [{ name: 'Orange Fund', value: 40000, expense: 2.5, kind: 'stocks' }] }], 'the accounts as stored (26.3)');
  const bare = ownSheetFromDraft(form, lists, [{ id: 'a3', type: 'bank', name: '', balance: '1200', fees: '', holdings: [] }]);
  same(bare.accounts, [{ id: 'a3', type: 'bank', balance: 1200, fees: 0, holdings: [] }], 'a blank name is left out and blank fees are 0');
  const bad = ownSheetFromDraft(form, lists, [{ ...draft, balance: '12345678', holdings: [{ name: 'F', value: '10', expense: 'cheap', kind: '' }] }]);
  same(bad.problems.map(p => p.path), ['accounts.0.balance', 'accounts.0.holdings.0.expense'], 'each problem is under the field it belongs to');
  same(ownSheetFromDraft(form, lists, [{ id: 'a4', type: '', name: '', balance: '', fees: '', holdings: [] }]).problems.map(p => p.text), [SAY.ownNothingYet], 'a sheet with nothing in it asks for an account');
  same(ownDraftsFromSheet(form, saved.accounts)[0], { id: 'a1', type: 'ira', name: 'My IRA', balance: '40000', fees: '50', holdings: [{ name: 'Orange Fund', value: '40000', expense: '2.5', kind: 'stocks' }] }, 'stored accounts become drafts of text again');
  // the arithmetic
  const account = saved.accounts[0], cost = ownAccountCost(account);
  same([cost.funds[0].dollars, cost.fees, cost.total], [1000, 50, 1050], 'a fund costs its value times its yearly cost over 100; the account adds its fees');
  same(ownAccountCost({ balance: 5, holdings: [{ name: 'F', value: 12600, expense: 0.07 }, { name: 'G', value: 38400, expense: 0.95 }], fees: 96 }).total, 469.62, 'the worked account of Wealth: 8.82 + 364.80 + 96');
  same(ownSheetCost([account, { ...account, id: 'b' }]), 2100, 'the accounts together');
  same(ownBalanceGaps([{ balance: 1000, holdings: [{ value: 1000 }] }, { balance: 1000, holdings: [{ value: 1030 }] }, { balance: 1000, holdings: [] }]).map(g => g.i), [1], 'funds that miss the balance by more than 2% are noticed, no funds or a close match are not');
  same(ownWarnings(form, saved.accounts).map(w => [w.path, w.who]), [['accounts.0.holdings.0.expense', 'Orange Fund']], 'a yearly cost over the plausible range warns, naming the fund');
  same(ownWarnings(form, [{ ...account, holdings: [{ ...account.holdings[0], expense: 0.2 }] }]), [], 'a yearly cost inside the range does not');
  same(ownDraftWarnings(form, lists, [draft]).map(w => w.path), ['accounts.0.holdings.0.expense'], 'the same warning from the drafts, by place');
}

/* ---------- dated actions ---------- */
{
  const form = ledger.meta.own.actions, draft = { what: 'Switch the fund', where: 'On my plan website', when: '2026-10-17' };
  const dated = ownActionFromDraft(form, draft, '2026-10-10', false, 'x1');
  same([dated.problems, dated.action], [[], { id: 'x1', what: 'Switch the fund', where: 'On my plan website', when: '2026-10-17' }], 'a dated change');
  same(ownActionFromDraft(form, draft, '2026-10-10', true, 'x2').action, { id: 'x2', what: 'Switch the fund', where: 'On my plan website', when: '2026-10-10', done: '2026-10-10' }, 'done now is done today');
  same(ownActionFromDraft(form, { ...draft, when: '2026-10-09' }, '2026-10-10', false, 'x').problems.map(p => p.text), [SAY.ownPast], 'a day in the past is refused');
  same(ownActionFromDraft(form, { ...draft, when: '2026-10-10' }, '2026-10-10', false, 'x').problems, [], 'today is allowed');
  same(ownActionFromDraft(form, { what: '', where: 'x', when: '' }, '2026-10-10', false, 'x').problems.map(p => p.path), ['what', 'when'], 'a change needs what and a day');
  same(ownActionFromDraft(form, { what: 'Pay', where: 'Bank', when: '' }, '2026-10-10', true, 'x').problems, [], 'done now needs no day');
  same(ownMarkDone([{ id: 'a' }, { id: 'b' }], 'b', '2026-10-10'), [{ id: 'a' }, { id: 'b', done: '2026-10-10' }], 'a done mark is put on one action and the list is new');
}

/* ---------- the calendar file ---------- */
{
  const action = { id: 'x1', what: 'Switch the fund, then stop; call', where: 'On my plan website', when: '2026-12-31' };
  const text = ownCalendarFile(action, '2026-10-10'), lines = text.split('\r\n');
  check(text.startsWith('BEGIN:VCALENDAR\r\nVERSION:2.0\r\n') && text.endsWith('END:VEVENT\r\nEND:VCALENDAR\r\n') && !/[^\r]\n/.test(text), 'a calendar file with CRLF lines, from BEGIN to END');
  check(text.includes('DTSTART;VALUE=DATE:20261231\r\n') && text.includes('DTEND;VALUE=DATE:20270101\r\n') && text.includes('DTSTAMP:20261010T000000Z\r\n') && text.includes('UID:x1@fieldcraft.web.app\r\n'), 'an all-day event on the day, ending on the next, across a year end');
  check(text.includes('SUMMARY:Switch the fund\\, then stop\\; call\r\n') && text.includes('LOCATION:On my plan website\r\n'), 'a comma and a semicolon are escaped');
  check(text.includes('BEGIN:VALARM') && text.includes('TRIGGER;RELATED=START:PT9H') && !text.includes('RRULE'), 'a reminder at nine, and no repeat for a change that happens once');
  check(ownCalendarFile({ ...action, repeat: 'year' }, '2026-10-10').includes('RRULE:FREQ=YEARLY\r\n'), 'a yearly action repeats every year');
  check(lines.every(l => l.length <= 75), 'no line is longer than 75');
  const long = ownCalendarFile({ ...action, what: 'Switch the Orange Fund to an index fund and then check the statement', where: 'On the website of my plan, in the Investments tab' }, '2026-10-10');
  check(long.split('\r\n').every(l => l.length <= 75) && long.replace(/\r\n /g, '').includes('DESCRIPTION:Switch the Orange Fund to an index fund and then check the statement. Where: On the website of my plan\\, in the Investments tab.'), 'a long line is folded at 75 and joins back to the same text');
  same([ownCalendarName(action), ownCalendarName({ ...action, what: '!!!' })], ['switch-the-fund-then-stop-call-2026-12-31.ics', 'reminder-2026-12-31.ics'], 'a file named for the change and its day');
}

/* ---------- Wealth: the numbers its accounts are made of ---------- */
{
  const seeds = Array.from({ length: 20000 }, (_, k) => k + 1);
  const gen = id => wealth.gens[id], parsed = text => parseTyped(text);
  const HELD = { 'g-cost-change': 2, 'g-cost-leave': 2, 'g-cost-active': 2, 'g-cost-three': 3, 'g-cost-target': 1 };
  const feeLabel = { 'g-cost-change': 'each quarter', 'g-cost-leave': 'a year', 'g-cost-active': 'of your account a year', 'g-cost-three': 'each quarter', 'g-cost-target': 'a year' };
  const walk = (id, wantChange) => seeds.forEach(seed => {
    const item = itemFromGen(gen(id), seed), v = item.values, cost = item.asks.find(a => a.id === 'cost'), rates = item.asks.find(a => a.id === 'rates'), n = HELD[id];
    const heldRows = Array.from({ length: n }, (_, i) => ({ name: v[`sn${i + 1}`], value: parsed(v[`sb${i + 1}`]), rate: v[`sr${i + 1}`] }));
    const account = { balance: 0, holdings: heldRows.map(h => ({ value: h.value, expense: h.rate })), fees: v.feeDollars };
    if (Math.abs(ownAccountCost(account).total - v.total) > 0.005) check(false, `${id} seed ${seed}: the generator's total ${v.total} is not the app's arithmetic ${ownAccountCost(account).total}`);
    if (rates.fields.length !== n) check(false, `${id} seed ${seed}: ${rates.fields.length} rates asked for ${n} funds held`);
    rates.fields.forEach(f => { const wanted = numberAnswers(item, formFieldAsk(f)); if (!numbersMatch(wanted, wanted, tolOf(f))) check(false, `${id} seed ${seed}: a rate is not within its own tolerance`); });
    // a slip is never within the tolerance of the answer it replaces
    [...cost.traps].forEach(t => { if (numbersMatch(numberAnswers(item, { answer: t.value }), numberAnswers(item, cost), tolOf(cost))) check(false, `${id} seed ${seed}: the slip ${t.slip} lands within a tenth of the answer`); });
    if (n > 1) rates.fields.forEach(f => f.traps.forEach(t => { if (numbersMatch(numberAnswers(item, { answer: t.value }), numberAnswers(item, f), tolOf(f))) check(false, `${id} seed ${seed}: reading the other row lands on the answer`); }));
    // the fee papers: every fund of the papers has its category and its net ratio; a fund held has a cheaper one in its category exactly when the account is to change
    const rows = Array.from({ length: id === 'g-cost-target' ? 6 : 7 }, (_, i) => ({ name: v[`rn${i + 1}`], cat: v[`rc${i + 1}`], net: parseFloat(v[`rr${i + 1}`]), gross: parseFloat(v[`rg${i + 1}`]) }));
    if (rows.some(r => !(r.gross >= r.net))) check(false, `${id} seed ${seed}: a gross ratio is below its net ratio`);
    const cheaper = h => { const row = rows.find(r => r.name === h.name); return rows.filter(r => r.cat === row.cat && r.net < row.net - 1e-9); };
    const toChange = heldRows.filter(h => cheaper(h).length);
    if (wantChange ? toChange.length !== 1 : toChange.length !== 0) check(false, `${id} seed ${seed}: the account is not one to ${wantChange ? 'change, in one fund' : 'leave alone'}`);
    if (!(v.total > 60 && v.total < 1600)) check(false, `${id} seed ${seed}: a total of ${v.total} is not an account's`);
    const rs = heldRows.map(h => h.rate);
    if (rs.some((r, i) => rs.some((q, j) => i !== j && Math.abs(r - q) < 0.0099))) check(false, `${id} seed ${seed}: two rates held are too close to tell apart`);
    if (!new RegExp(feeLabel[id] + '$').test(v.feeCells2)) check(false, `${id} seed ${seed}: the account's fee is not written the way ${id} writes it (${v.feeCells2})`);
    if (wantChange) {
      const sw = item.asks.find(a => a.id === 'switch'), right = sw.options.filter(o => o.ok), held = toChange[0], best = cheaper(held).sort((a, b) => a.net - b.net)[0];
      if (right.length !== 1 || right[0].text !== best.name) check(false, `${id} seed ${seed}: the fund to switch to is not the cheapest of its own category`);
      if (sw.options.filter(o => o.slip === 'wrong-kind').length !== 1 || /Fund$/.test(sw.options.find(o => o.slip === 'wrong-kind').text) === false) check(false, `${id} seed ${seed}: the fund of another category that costs less is not the named slip`);
      const wrongKind = rows.find(r => r.name === sw.options.find(o => o.slip === 'wrong-kind').text);
      if (wrongKind.cat === rows.find(r => r.name === held.name).cat || wrongKind.net >= held.rate) check(false, `${id} seed ${seed}: the fund of another category is in the same category, or costs more than the fund held`);
    }
  });
  Object.keys(HELD).forEach(id => walk(id, id === 'g-cost-change' || id === 'g-cost-three'));
  check(true, 'the numbers of 20,000 accounts of each kind are the app\'s arithmetic, with slips outside the tolerance and the right fund in the right category');
  // no word in a name tells how much it costs: of the funds that cost least in their category over many accounts, a good share are not called "Index"
  {
    const nameOf = seed => { const v = itemFromGen(gen('g-cost-change'), seed).values; return /Index|500|100|Total/.test(v.lowName); };
    const share = seeds.slice(0, 2000).filter(nameOf).length / 2000;
    check(share > 0.1 && share < 0.9, `the name of the fund that costs least in its category is not a clue to which it is (${share})`);
  }
  // a fee comes three ways across the lesson: a flat amount a year, a charge each quarter, a percent of the whole account
  same(Object.values(wealth.gens).map(g => g.asks.find(a => a.id === 'cost').traps.map(t => t.slip).includes('quarter-once')).sort(), [false, false, false, true, true], 'the quarterly fee, counted once, is a named slip of exactly the two accounts that charge one');
  // the worked account is the same account with its numbers fixed
  const w = wealth.items['w-statement'], answers = { rates: { r1: [0.95], r2: [0.07] }, cost: [469.62], call: 'change', switch: 'same' };
  same(scoreItem(wealth, w, null, answers).ok, true, 'the worked account scored with its own answers');
  same(ownAccountCost({ holdings: [{ value: 38400, expense: 0.95 }, { value: 12600, expense: 0.07 }], fees: 96 }).total, 469.62, 'the worked account costs 469.62 a year by the app\'s arithmetic, with its fee of 24 a quarter counted four times');
  same(Math.round(38400 * (0.95 - 0.04)) / 100, 349.44, 'and switching saves 349.44');
  same([scoreItem(wealth, w, null, { ...answers, cost: [364.8 + 8.82] }).r.cost, scoreItem(wealth, w, null, { ...answers, cost: [38400 * 0.95 + 12600 * 0.07 + 96] }).r.cost], ['no', 'no'], 'the worked account: without the fee, or with the percents as dollars, is wrong (the worked account names no slip)');
  same(scoreItem(wealth, w, null, { ...answers, switch: 'side' }).r.switch, 'wrong-kind', 'the worked account: the cheaper fund of another category is the named slip');
}

/* ---------- the forms a subject may keep ---------- */
same(OWN_SLOTS, ['sheet', 'actions', 'plan', 'setup', 'answers'], 'the private forms built (the plan and the setup came with step 8, the answers with step 9)');
same(Object.keys(OWN_REQUIRED), OWN_SLOTS, 'what the app reads is named for each form built');
same(Object.keys(wealth.meta.own).sort(), ['actions', 'sheet'], 'Wealth keeps a sheet of accounts and the dated changes');

if (failures.length) {
  console.error(`✗ ${failures.length} of ${checks} own-data checks failed:`);
  failures.slice(0, 40).forEach(f => console.error('  - ' + f));
  process.exit(1);
}
console.log(`✓ ${checks} own-data checks passed`);
