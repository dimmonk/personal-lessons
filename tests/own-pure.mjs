// The pure half of step 4 (lesson standard 3, 5, 3 to 9): a form scored field by field, the papers of a household drawn as tabs, a value
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
  ownMarkDone, ownCalendarFile, ownCalendarName, SAY, parseTyped, scoreChoose, scoreNumber, numbersMatch, numberAnswers, tolOf, formFieldAsk, OWN_REQUIRED, OWN_SLOTS,
  OWN_WORKS, OWN_ACCOUNT, OWN_KIND, ownWork, ownMissingGroups, ownGroupsFromDraft, ownGroupDrafts, ownFieldsFor, ownWorkHtml, ownGroupsSummaryHtml } = app;
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
  const walk = (id, wantChange) => seeds.forEach(seed => {
    const item = itemFromGen(gen(id), seed), v = item.values, cost = item.asks.find(a => a.id === 'cost'), rates = item.asks.find(a => a.id === 'rates');
    const account = { balance: 0, holdings: [{ value: parsed(v.bal1Text), expense: v.rate1 }, { value: parsed(v.bal2Text), expense: v.rate2 }], fees: v.fee };
    if (Math.abs(ownAccountCost(account).total - v.total) > 0.005) check(false, `${id} seed ${seed}: the generator's total ${v.total} is not the app's arithmetic ${ownAccountCost(account).total}`);
    const wanted = numberAnswers(item, formFieldAsk(rates.fields[0]));
    if (!numbersMatch(wanted, wanted, tolOf(rates.fields[0]))) check(false, `${id} seed ${seed}: a rate is not within its own tolerance`);
    // a slip is never within the tolerance of the answer it replaces
    [...cost.traps].forEach(t => { if (numbersMatch(numberAnswers(item, { answer: t.value }), numberAnswers(item, cost), tolOf(cost))) check(false, `${id} seed ${seed}: the slip ${t.slip} lands within a tenth of the answer`); });
    rates.fields.forEach(f => f.traps.forEach(t => { if (numbersMatch(numberAnswers(item, { answer: t.value }), numberAnswers(item, f), tolOf(f))) check(false, `${id} seed ${seed}: reading the other row lands on the answer`); }));
    // change: one fund held costs more than the cheapest of its kind, the dear one more again; leave: both held are the cheapest of their kinds
    const held = [v.rate1, v.rate2].map(r => Math.round(r * 100)).sort((x, y) => x - y), pct = t => Math.round(parseFloat(t) * 100);
    const cheapest = [pct(v.stockCheapText), pct(v.bondCheapText)].sort((x, y) => x - y);
    const ok = wantChange ? pct(v.cheapRateText) < pct(v.heldRateText) && pct(v.heldRateText) < pct(v.dearRateText) && held.includes(pct(v.heldRateText)) && held.join() !== cheapest.join()
      : held.join() === cheapest.join();
    if (!ok) check(false, `${id} seed ${seed}: the account is not one to ${wantChange ? 'change' : 'leave alone'}`);
    if (!(v.total > 80 && v.total < 900)) check(false, `${id} seed ${seed}: a total of ${v.total} is not an account's`);
    if (!(Math.abs(v.rate1 - v.rate2) >= 0.0199)) check(false, `${id} seed ${seed}: the two rates are too close to tell apart`);
    if (wantChange) {
      const sw = item.asks.find(a => a.id === 'switch');
      if (sw.options.filter(o => o.ok).length !== 1 || sw.options.find(o => o.ok).text !== v.cheapName) check(false, `${id} seed ${seed}: the fund to switch to is not one right option`);
    }
  });
  walk('g-cost-change', true);
  walk('g-cost-leave', false);
  check(true, 'the numbers of 20,000 accounts of each kind are the app\'s arithmetic, with slips outside the tolerance and the right fund');
  // the worked account is the same account with its numbers fixed
  const w = wealth.items['w-statement'], answers = { rates: { r1: [0.95], r2: [0.07] }, cost: [469.62], call: 'change', switch: 'same' };
  same(scoreItem(wealth, w, null, answers).ok, true, 'the worked account scored with its own answers');
  same(ownAccountCost({ holdings: [{ value: 38400, expense: 0.95 }, { value: 12600, expense: 0.07 }], fees: 96 }).total, 469.62, 'the worked account costs 469.62 a year by the app\'s arithmetic');
  same(Math.round(38400 * (0.95 - 0.04)) / 100, 349.44, 'and switching saves 349.44');
  same([scoreItem(wealth, w, null, { ...answers, cost: [364.8 + 8.82] }).r.cost, scoreItem(wealth, w, null, { ...answers, cost: [38400 * 0.95 + 12600 * 0.07 + 96] }).r.cost], ['no', 'no'], 'the worked account: without the fee, or with the percents as dollars, is wrong (the worked account names no slips)');
  same(scoreItem(wealth, w, null, { ...answers, switch: 'other' }).r.switch, 'wrong-kind', 'the worked account: the cheapest fund of a different kind is the named slip');
}

/* ---------- the sheet's groups and the account fields kept to some kinds ---------- */
{
  const form = wealth.meta.own.sheet, lists = wealth.meta.lists;
  same(ownFieldsFor(form.fields, 'bank').map(f => f.id), ['type', 'name', 'institution', 'owner', 'balance', 'fees'], 'a bank account has its bank and owner, and no field for its highest balance');
  same(ownFieldsFor(form.fields, 'brokerage').map(f => f.id), ['type', 'name', 'institution', 'owner', 'balance', 'fees'], 'a brokerage account has its firm and owner (SIPC counts each capacity)');
  same(ownFieldsFor(form.fields, 'tfsa').map(f => f.id), ['type', 'name', 'balance', 'fees', 'highest'], 'an account outside the US has one');
  same(ownSheetFromDraft(form, lists, [{ id: 'a', type: 'bank', name: '', institution: 'Harbor', owner: 'me', balance: '900', fees: '', highest: 'lots', holdings: [] }]).problems, [], 'a field that does not apply to the kind is not read');
  same(ownSheetFromDraft(form, lists, [{ id: 'a', type: 'bank', name: '', balance: '900', fees: '', holdings: [] }]).problems.map(p => p.path), ['accounts.0.institution', 'accounts.0.owner'], 'a bank account needs its bank and whose name it is in');
  same(ownSheetFromDraft(form, lists, [{ id: 'a', type: 'ira', balance: '900', fees: '', holdings: [{ name: 'F', value: '900', expense: '', kind: '', company: '' }] }]).accounts[0].holdings, [{ name: 'F', value: 900 }], 'a fund’s yearly cost may be left blank');
  same(ownSheetFromDraft(form, lists, [{ id: 'a', type: 'tfsa', name: '', balance: '900', fees: '', highest: '12345678', holdings: [] }]).problems.map(p => p.path), ['accounts.0.highest'], 'one that applies is read and refused like any other');
  const drafts = ownGroupDrafts(form, ['spending', 'bills', 'match'], {});
  same(drafts, { spending: { monthly: '' }, bills: [{ what: '', amount: '', year: '', kept: '' }], match: { pay: '', mine: '', share: '', upTo: '', share2: '', next: '' } }, 'groups not held yet start blank, a list with one blank row');
  same(ownGroupDrafts(form, ['bills'], { bills: [{ what: 'Roof', amount: 15000, year: 2029 }] }).bills, [{ what: 'Roof', amount: '15000', year: '2029', kept: '' }], 'a held list becomes text again');
  const saved = ownGroupsFromDraft(form, lists, { spending: { monthly: '4,200' }, bills: [{ what: 'Car', amount: '20000', year: '2028', kept: 'cash' }, { what: '', amount: '', year: '' }], match: { pay: '', mine: '', share: '', upTo: '' } });
  same(saved, { groups: { spending: { monthly: 4200 }, bills: [{ what: 'Car', amount: 20000, year: 2028, kept: 'cash' }], match: null }, problems: [] }, 'a blank row is dropped, a blank optional group is kept as null');
  same(ownGroupsFromDraft(form, lists, { spending: { monthly: '' } }).problems.map(p => p.path), ['groups.spending.monthly'], 'a group that is not optional asks for its fields');
  const half = { pay: '54000', mine: '4', share: '100', upTo: '3', share2: '50', next: '' };
  same(ownGroupsFromDraft(form, lists, { match: half }).problems, [{ path: 'groups.match.next', text: SAY.ownTogether }], 'a second step of the match half filled asks for the rest');
  same(ownGroupsFromDraft(form, lists, { match: { ...half, next: '2' } }).groups.match, { pay: 54000, mine: 4, share: 100, upTo: 3, share2: 50, next: 2 }, 'both filled are kept');
  const mctx = { lists, refs: wealth.meta.refs, limits: form.limits, year: 2026 };
  same(ownWork('match', { accounts: [], match: { pay: 54000, mine: 4, share: 100, upTo: 3, share2: 50, next: 2 } }, mctx).lines.filter(l => l.flag).map(l => l.text), [SAY.workMatchShort('$270', '5')], 'the next 2% after 3%: 5% takes it all, $270 a year left');
  same(ownGroupsFromDraft(form, lists, { bills: [{ what: 'Car', amount: '12345678', year: '2028', kept: 'cash' }] }).problems.map(p => [p.path, p.text]), [['groups.bills.0.amount', SAY.ownDigits]], 'a row of a group refuses an account number');
  same(ownGroupsFromDraft(form, lists, { bills: [{ what: '', amount: '', year: '' }] }).groups, { bills: [] }, 'no bills is an empty list, so the step does not ask again');
  same([ownMissingGroups('cash', { accounts: [] }), ownMissingGroups('cash', { spending: { monthly: 1 }, bills: [] }), ownMissingGroups('match', { match: null })], [['spending', 'bills'], [], []], 'a group is missing only when never saved');
  // V81 and the private forms: no group field may hold an account number
  check(form.groups.flatMap(g => g.fields).every(f => !/account\s*number|password|login/i.test(f.label)), 'no group field asks for an account number or a login');
}

/* ---------- the app's arithmetic on the learner's own sheet ---------- */
{
  const ctx = { lists: wealth.meta.lists, refs: wealth.meta.refs, limits: wealth.meta.own.sheet.limits, year: 2026 };
  const lines = w => w.lines.map(l => l.text);
  const flags = w => w.lines.filter(l => l.flag).map(l => l.text);
  const cells = (w, d = 0) => w.docs[d].rows.map(r => r.cells);
  same(Object.keys(OWN_WORKS), ['cost', 'list', 'cash', 'match', 'placement', 'share', 'drift', 'cover', 'foreign', 'heirs', 'rate', 'yearly', 'core'], 'the works built');
  same(Object.keys(OWN_WORKS).map(id => OWN_WORKS[id].on), [...Array(12).fill('sheet'), 'business'], 'each work says the form it reads: the sheet, or the business');
  check(wealth.meta.lists.accountType.every(o => OWN_ACCOUNT[o.id]) && wealth.meta.lists.kind.every(o => OWN_KIND[o.id]), 'the app knows every kind of account and fund Wealth lists');
  // what it costs: the same arithmetic as before, the total line in two parts
  const cost = ownWork('cost', { accounts: [{ type: 'ira', balance: 40000, fees: 50, holdings: [{ name: 'Orange Fund', value: 40000, expense: 2.5 }] }] }, ctx);
  same([cost.docs.length, cost.lines[0].strong, cost.lines[0].text, cost.lines.length], [1, 'Together your accounts cost you $1,050.00 a year', ', 2.63% of what is in them.', 1], 'the cost work');
  const untyped = ownWork('cost', { accounts: [{ type: 'brokerage', balance: 30000, fees: 0, holdings: [{ name: 'A', value: 20000, expense: 0.5 }, { name: 'B', value: 10000 }] }] }, ctx);
  same([untyped.lines[0].strong, cells(untyped)[1].slice(1), lines(untyped).slice(1)], ['Together your accounts cost you $100.00 a year', [SAY.workNotTyped, SAY.workNotTyped], [SAY.workCostUntyped, SAY.workCostTaxable]],
    'a fund with no yearly cost adds nothing and is named; a brokerage account’s funds bring the line on tax');
  // the list: shares, the cover of each kind, FDIC by bank and by kind of ownership, SIPC by firm, a fall never covered
  const bank = (balance, institution, owner) => ({ type: 'bank', institution, owner, balance, fees: 0, holdings: [] });
  const list = ownWork('list', { accounts: [{ ...bank(26400, 'Harbor Bank', 'me'), name: 'Checking' }, bank(236000, 'harbor bank ', 'me'), { type: 'brokerage', institution: 'Northpoint', balance: 60000, fees: 0, holdings: [] },
    { type: '401k', balance: 77600, fees: 0, holdings: [] }, { type: 'ira', balance: 0, fees: 0, holdings: [] }] }, ctx);
  same(cells(list).map(c => c.slice(1)), [['$26,400', '6.6%', 'FDIC, up to $250,000'], ['$236,000', '59%', 'FDIC, up to $250,000'], ['$60,000', '15%', 'SIPC, up to $500,000'], ['$77,600', '19.4%', SAY.workGuardTrust],
    ['$0', '0%', SAY.workGuardWhere], ['$400,000', '100%', '']], 'each account with its balance, share and cover; a 401(k) held in trust');
  same(flags(list), [SAY.workOverFdic('Harbor Bank', 'In my name alone', '$262,400', '$12,400', '$250,000')], 'two accounts in one name at one bank, however the bank is typed, are added up against the limit');
  check(lines(list).includes(SAY.workListFix) && lines(list).includes(SAY.workListFall) && lines(list).at(-1) === SAY.workNotAdvice, 'the fix, the fall and the line that it is not advice');
  same(flags(ownWork('list', { accounts: [bank(200000, 'Harbor Bank', 'me'), bank(200000, 'Cedar Bank', 'me')] }, ctx)), [], 'two banks are counted apart');
  same(flags(ownWork('list', { accounts: [bank(200000, 'Harbor Bank', 'me'), bank(200000, 'Harbor Bank', 'joint')] }, ctx)), [], 'one name and joint are two kinds of ownership');
  check(lines(ownWork('list', { accounts: [bank(520000, 'Harbor Bank', 'joint')] }, ctx)).includes(SAY.workListFixBank), 'a joint account over its limit is told to use another bank');
  same(flags(ownWork('list', { accounts: [bank(520000, 'Harbor Bank', 'joint')] }, ctx)), [SAY.workOverFdic('Harbor Bank', 'Joint, with one other person', '$520,000', '$20,000', '$500,000')], 'a joint account with one other person is covered for two owners');
  const odd = ownWork('list', { accounts: [bank(400000, 'Harbor Bank', 'other'), { type: 'bank', balance: 300000, fees: 0, holdings: [] }] }, ctx);
  same([flags(odd), lines(odd).includes(SAY.workListOther), lines(odd).includes(SAY.workListUnmarked)], [[], true, true], 'another kind of ownership is not counted, and an account with no bank or owner is named');
  // SIPC: each capacity at a firm on its own (alone, joint), each against $500,000, and its cash against $250,000
  const brok = (balance, owner, cash = 0) => ({ type: 'brokerage', institution: 'Granite', owner, balance, fees: 0, holdings: cash ? [{ name: 'Cash', value: cash, kind: 'cash' }] : [] });
  same(flags(ownWork('list', { accounts: [brok(300000, 'me'), brok(300000, 'joint')] }, ctx)), [], 'an account alone and a joint one at one firm are two capacities');
  same(flags(ownWork('list', { accounts: [brok(300000, 'me'), brok(260000, 'me')] }, ctx)), [SAY.workOverSipc('Granite', 'In my name alone', '$560,000', '$60,000')], 'two accounts in one capacity at one firm are added up');
  same(flags(ownWork('list', { accounts: [brok(450000, 'me', 450000)] }, ctx)), [SAY.workOverSipcCash('Granite', 'In my name alone', '$450,000', '$200,000')], 'cash past SIPC’s limit for cash is flagged');
  // cash: the bills due within five years kept in a bank put aside first (this year counted, past years left out), the months on the rest
  const cashSheet = (bank, bills) => ({ accounts: [{ type: 'bank', balance: bank, fees: 0, holdings: [] }, { type: 'brokerage', balance: 5000, fees: 0, holdings: [{ name: 'Sweep', value: 1000, expense: 0, kind: 'cash' }, { name: 'Index', value: 4000, expense: 0.04, kind: 'us-stocks' }] }, { type: '401k', balance: 9000, fees: 0, holdings: [{ name: 'Money market', value: 9000, expense: 0.1, kind: 'cash' }] }], spending: { monthly: 4000 }, bills });
  const short = ownWork('cash', cashSheet(27000, [{ what: 'Car', amount: 20000, year: 2029, kept: 'cash' }, { what: 'College', amount: 90000, year: 2040, kept: 'stocks' }, { what: 'Old', amount: 5000, year: 2024, kept: 'cash' }]), ctx);
  same(cells(short), [[SAY.workCashReach, '$28,000'], [SAY.workCashSetApart(2031), '−$20,000'], [SAY.workCashLeft, '$8,000'], [SAY.workCashMonthly, '$4,000'], [SAY.workCashMonths, '2']],
    'cash you can reach counts the bank and a brokerage account’s cash, not a 401(k)’s; the bills due soon are put aside first');
  same(cells(short, 1)[1], ['College', '2040', '$90,000', 'In stocks or a stock fund'], 'each bill with where its money is');
  same(flags(short), [SAY.workCashShort('$4,000', 3)], 'three months of spending against what is left');
  check(lines(short).includes(SAY.workCashPast), 'a bill whose year has gone by is named');
  same(flags(ownWork('cash', cashSheet(19000, []), ctx)), [], 'between three and six months with no bill is enough');
  const noMonth = ownWork('cash', { ...cashSheet(39000, []), spending: { monthly: 0 } }, ctx);
  same([flags(noMonth), lines(noMonth)[0]], [[], SAY.workCashNoMonth], 'no month typed: nothing called short or idle');
  same(flags(ownWork('cash', cashSheet(39000, []), ctx)), [SAY.workCashIdle('$16,000', 6)], 'far past six months is idle');
  same(flags(ownWork('cash', cashSheet(49000, [{ what: 'Down payment', amount: 30000, year: 2026, kept: 'cash' }]), ctx)), [], 'a bill due this year, its money in the bank: the rest is enough, not idle');
  // the lesson's own worked household (Leo, w-cash) typed as a learner would: the app gives the lesson's answer
  const leo = ownWork('cash', { accounts: [{ type: 'bank', institution: 'Harbor Bank', owner: 'me', balance: 18900, fees: 0, holdings: [] }], spending: { monthly: 4200 },
    bills: [{ what: 'Home down payment', amount: 45000, year: 2029, kept: 'stocks' }] }, ctx);
  same([cells(leo).at(-1)[1], flags(leo)], ['4.5', [SAY.workCashBillStocks('Home down payment', '$45,000', 2029)]], 'Leo: 4.5 months, enough, and the down payment moved out of stocks, as the lesson says');
  const notYet = ownWork('cash', cashSheet(39000, [{ what: 'Car', amount: 20000, year: 2028, kept: 'none' }]), ctx);
  same(flags(notYet), [SAY.workCashBillNone('Car', '$20,000', 2028)], 'a bill not put aside yet is flagged, and the cash it needs is not called idle');
  const over = ownWork('cash', cashSheet(5000, [{ what: 'Car', amount: 20000, year: 2028, kept: 'cash' }]), ctx);
  same([cells(over).find(r => r[0] === SAY.workCashMonths)[1], lines(over).includes(SAY.workCashOverBills)], ['0', true], 'never fewer than 0 months, and the balances questioned');
  check(lines(ownWork('cash', cashSheet(19000, [{ what: 'Car', amount: 1000, year: 2028 }]), ctx)).includes(SAY.workCashKeptUnknown), 'a bill due soon with no place for its money is named');
  // the match: the employer's money left, and none when the rate reaches the cap
  const match = (mine, share) => ownWork('match', { accounts: [], match: { pay: 64000, mine, share, upTo: 6 } }, ctx);
  same(flags(match(3, 50)), [SAY.workMatchShort('$960', '6')], 'the worked pay stub: $960 a year left');
  const steps = mine => ownWork('match', { accounts: [], match: { pay: 50000, mine, share: 100, upTo: 3, share2: 50, next: 2 } }, ctx);
  same([flags(steps(4)), flags(steps(3)), flags(steps(5))], [[SAY.workMatchShort('$250', '5')], [SAY.workMatchShort('$500', '5')], []], 'a match in two steps: the second step left at 3% and 4%, all of it at 5%');
  check(lines(match(6, 50)).includes(SAY.workMatchVest), 'the match says to check vesting and a true-up');
  same([flags(match(8, 100)), lines(match(6, 50))], [[], [SAY.workMatchWhole, SAY.workMatchVest]], 'at or past the cap, the whole match');
  same(lines(ownWork('match', { accounts: [], match: null }, ctx)), [SAY.workMatchNone], 'no match typed');
  // where each fund sits: bonds taxed every year while a 401(k) or IRA holds stocks; a Roth or an HSA not counted for the swap
  const placeSheet = tax => ({ accounts: [{ type: 'brokerage', balance: 59000, fees: 0, holdings: [{ name: 'Bonds', value: 24000, expense: 0.05, kind: 'bonds' }, { name: 'S', value: 35000, expense: 0.04, kind: 'us-stocks' }] },
    { type: '401k', balance: 52000, fees: 0, holdings: [{ name: 'S', value: 52000, expense: 0.04, kind: 'us-stocks' }] }, { type: 'bank', balance: 3000, fees: 0, holdings: [] }], tax });
  const place = ownWork('placement', placeSheet(null), ctx);
  same([cells(place).length, flags(place)], [2, [SAY.workPlaceSwap('$24,000', '$52,000', '$24,000')]], 'the worked household: swap the bonds, the bank left out');
  same(lines(ownWork('placement', placeSheet({ rate: 22, bondIncome: 960 }), ctx))[1], SAY.workPlaceTax('$960.00', '22', '$211.20'), 'with the rate and the payout typed, the tax a year on it');
  const roth = ownWork('placement', { accounts: [{ type: 'brokerage', balance: 1, fees: 0, holdings: [{ name: 'B', value: 1, expense: 0, kind: 'bonds' }] }, { type: 'roth', balance: 1, fees: 0, holdings: [{ name: 'S', value: 1, expense: 0, kind: 'us-stocks' }] }] }, ctx);
  same([flags(roth), lines(roth).includes(SAY.workPlaceFree)], [[], true], 'stocks in a Roth IRA are not counted for a swap');
  same(flags(ownWork('placement', { accounts: [{ type: 'brokerage', balance: 1, fees: 0, holdings: [{ name: 'S', value: 1, expense: 0, kind: 'us-stocks' }] }, { type: 'ira', balance: 1, fees: 0, holdings: [{ name: 'B', value: 1, expense: 0, kind: 'bonds' }] }] }, ctx)), [], 'bonds already sheltered: nothing to move');
  const allBonds = ownWork('placement', { accounts: [{ type: 'brokerage', balance: 24000, fees: 0, holdings: [{ name: 'B', value: 24000, kind: 'bonds' }] }, { type: '401k', balance: 52000, fees: 0, holdings: [{ name: 'B2', value: 52000, kind: 'bonds' }] }] }, ctx);
  const mixedPlan = ownWork('placement', { accounts: [{ type: 'brokerage', balance: 24000, fees: 0, holdings: [{ name: 'B', value: 24000, kind: 'bonds' }] }, { type: '401k', balance: 52000, fees: 0, holdings: [{ name: 'T', value: 52000, kind: 'target' }] }] }, ctx);
  same([lines(allBonds)[0], lines(mixedPlan)[0]], [SAY.workPlaceNoStocks, SAY.workPlaceMixed], 'bonds taxed with a 401(k) of bonds only, or of a mixed fund: said so, never “Nothing to move”');
  const blank = ownWork('placement', { accounts: [{ type: 'brokerage', balance: 59000, fees: 0, holdings: [{ name: 'Bond', value: 24000 }, { name: 'Stock', value: 35000 }] }, { type: '401k', balance: 52000, fees: 0, holdings: [{ name: 'S', value: 52000 }] }] }, ctx);
  same([lines(blank).includes(SAY.workPlaceFine), lines(blank).includes(SAY.workPlaceUnknown)], [false, true], 'funds with no “What it holds” never get “Nothing to move”');
  // one company across accounts, grouped by the company typed (the statements name it differently), against everything on the list
  const shareSheet = { accounts: [{ type: '401k', balance: 66000, fees: 0, holdings: [{ name: 'Acme Corp Stock Fund', value: 14000, expense: 0.1, kind: 'one-company', company: 'Acme Corp' }, { name: 'Large Company Fund', value: 52000, expense: 0.04, kind: 'us-stocks' }] },
    { type: 'brokerage', balance: 34000, fees: 0, holdings: [{ name: 'Acme shares, from work', value: 16000, expense: 0, kind: 'one-company', company: ' acme  corp' }, { name: 'Total', value: 18000, expense: 0.03 }] }, { type: 'bank', balance: 15000, fees: 0, holdings: [] }] };
  const share = ownWork('share', shareSheet, ctx);
  same([cells(share), flags(share)], [[['Acme Corp', '$30,000', '26.1%']], [SAY.workShareOver('Acme Corp', '26.1', 10, '$18,500')]], 'the worked household: one company across accounts, 26.1%, sell about $18,500');
  same(lines(ownWork('share', { accounts: [{ type: 'brokerage', balance: 100, fees: 0, holdings: [{ name: 'Acme', value: 40, kind: 'one-company', company: 'Acme' }, { name: 'F', value: 60, kind: 'us-stocks' }] }] }, ctx)).includes(SAY.workShareTaxed), true, 'a company held only in a brokerage account: the line on tax, not the 401(k) one');
  check(lines(share).includes(SAY.workShareWhere) && lines(share).includes(SAY.workUnmarked) && lines(share).at(-1) === SAY.workNotAdvice, 'where to sell first, a fund with no kind named, and not advice');
  const named = ownWork('share', { accounts: [{ type: 'ira', balance: 100, fees: 0, holdings: [{ name: 'Acme Stock Fund', value: 5, expense: 0, kind: 'one-company' }] }] }, ctx);
  same([cells(named), lines(named).includes(SAY.workShareName)], [[['Acme Stock Fund', '$5', '5%']], true], 'a holding marked one company with no company typed stands for itself, and is named');
  same(lines(ownWork('share', { accounts: [{ type: 'ira', balance: 10, fees: 0, holdings: [{ name: 'I', value: 10, expense: 0, kind: 'us-stocks' }] }] }, ctx)), [SAY.workShareNone], 'no one company: an index fund is not one bet');
  // the works of lessons 7 to 12 (drift, cover, foreign, heirs, rate, yearly) are held in tests/own-later-pure.mjs
}
{
  const ctx = { lists: wealth.meta.lists, refs: wealth.meta.refs, limits: wealth.meta.own.sheet.limits, year: 2026 };
  // drawn: tables, the flags apart, nothing of another subject
  const html = ownWorkHtml(wealth.meta.own.sheet, 'list', { accounts: [{ type: 'bank', institution: 'Harbor', owner: 'me', balance: 300000, fees: 0, holdings: [] }] }, ctx);
  check(/data-own-work="list"/.test(html) && (html.match(/data-own-flag/g) || []).length === 1 && /\$300,000/.test(html), 'the work drawn: its table and its one flag');
  const summary = ownGroupsSummaryHtml(wealth, { accounts: [], spending: { monthly: 4200 }, bills: [{ what: 'Car', amount: 20000, year: 2028 }], match: null });
  check(/What you spend in a month: \$4,200/.test(summary) && /How much: \$20,000; The year it is due: 2028/.test(summary) && !/match/i.test(summary), 'the subject screen lists the groups filled in, and not a blank one');
}

/* ---------- Wealth's made questions agree with the app's arithmetic, and are what they claim to be ---------- */
{
  const seeds = Array.from({ length: 3000 }, (_, k) => k + 1), gen = id => wealth.gens[id], money = text => parseTyped(String(text).replace('−', ''));
  const every = (id, test, msg) => { const bad = seeds.find(seed => !test(itemFromGen(gen(id), seed).values)); check(bad === undefined, `${id} seed ${bad}: ${msg}`); };
  const ctx = { lists: wealth.meta.lists, refs: wealth.meta.refs, limits: wealth.meta.own.sheet.limits, year: 2026 };
  const flags = w => w.lines.filter(l => l.flag).map(l => l.text), bank = (balance, institution, owner) => ({ type: 'bank', institution, owner, balance, fees: 0, holdings: [] });
  every('g-list-change', v => v.bankTotal > 250000 && v.two < 250000 && v.one < 250000 && v.over > 0, 'the two bank accounts are each under the limit and together over it');
  every('g-list-banks', v => v.bankTotal > 250000 && v.one < 250000 && v.two < 250000, 'two banks, each under the limit, together over it');
  every('g-list-joint', v => v.bankTotal > 250000 && v.one < 250000 && v.two < 250000, 'one name and joint, each under its limit, together over it');
  every('g-list-leave', v => v.bankTotal <= 250000 && v.brok < 500000, 'every account sits under its limit');
  every('g-list-change', v => v.total === v.bankTotal + v.brok + v.plan, 'everything is the three totals');
  // the app's own list work agrees with each household's call
  const listCall = (id, owner2, second) => seeds.slice(0, 300).forEach(seed => {
    const v = itemFromGen(gen(id), seed).values, w = ownWork('list', { accounts: [bank(v.one, v.bankName, 'me'), bank(v.two, second ? v.bank2Name : v.bankName, owner2)] }, ctx);
    if ((flags(w).length > 0) !== (id === 'g-list-change')) check(false, `${id} seed ${seed}: the app's list work does not agree with the household's call`);
  });
  listCall('g-list-change', 'me', false); listCall('g-list-banks', 'me', true); listCall('g-list-joint', 'joint', false); listCall('g-list-leave', 'me', false);
  const months = v => money(v.cashText) / money(v.monthlyText);
  every('g-cash-short', v => months(v) < 3 && Math.abs(months(v) - v.months) < 1e-9, 'the cash is under three months, and the answer is the cash over a month');
  every('g-cash-idle', v => months(v) > 6, 'idle cash is past six months');
  every('g-cash-stocks', v => months(v) >= 3 && months(v) <= 6 && v.years <= 5, 'the stock case has enough cash and a bill within five years');
  every('g-cash-fine', v => months(v) >= 3 && months(v) <= 6 && v.years > 5, 'the fine case has enough cash and its bill more than five years off');
  every('g-cash-short', v => Math.abs(v.checkingMonths - v.months) > 0.1 && Math.abs(v.savingsMonths - v.months) > 0.1, 'one account alone is never within the tolerance');
  every('g-cash-held', v => months(v) >= 3 && months(v) <= 6 && v.years <= 5 && Math.abs(v.withBill - v.months) > 0.1, 'the bill in savings: the rest is enough, and counting the bill is a different answer');
  const left = v => parseTyped(v.leftText);
  every('g-match-short', v => left(v) > 0 && v.mine < v.upTo, 'a short rate leaves money');
  every('g-match-full', v => left(v) === 0 && v.mine >= v.upTo, 'a rate at or past the cap leaves nothing');
  every('g-match-steps', v => left(v) > 0 && v.mine < 5 && v.mine >= 3, 'a match in steps, the rate inside the second step');
  every('g-match-short', v => Math.abs(parseTyped(v.deferText) / parseTyped(v.periodText) * 100 - v.mine) < 0.05, 'the stub’s dollars are the rate');
  same(new Set(seeds.slice(0, 60).map(s => itemFromGen(gen('g-match-short'), s).values.share)).size, 3, 'the employer’s share is drawn from all three');
  seeds.slice(0, 500).forEach(seed => {
    const v = itemFromGen(gen('g-match-short'), seed).values, w = ownWork('match', { accounts: [], match: { pay: money(v.salaryText), mine: v.mine, share: v.share, upTo: v.upTo } }, ctx);
    if (!w.lines[0].text.includes(v.leftText.replace(/\.00$/, ''))) check(false, `g-match-short seed ${seed}: the question's $${v.left} is not the app's own arithmetic (${w.lines[0].text})`);
    const t = itemFromGen(gen('g-match-steps'), seed).values, ws = ownWork('match', { accounts: [], match: { pay: money(t.salaryText), mine: t.mine, share: 100, upTo: 3, share2: 50, next: 2 } }, ctx);
    if (!ws.lines[0].text.includes(t.leftText.replace(/\.00$/, ''))) check(false, `g-match-steps seed ${seed}: the question's $${t.left} is not the app's own arithmetic (${ws.lines[0].text})`);
  });
  every('g-share-over', v => v.share > 10 && v.sell > 0, 'the over case is past 10% and has something to sell');
  every('g-share-under', v => v.share < 10, 'the under case is under 10%');
  every('g-share-index', v => v.share < 10 && v.withFund > 10, 'the index case is one company under 10%, with a fund that would pass it if counted');
  ['g-share-over', 'g-share-under', 'g-share-index'].forEach(id => every(id, v => Math.abs(v.planOnly - v.share) > 1 && Math.abs(v.workOnly - v.share) > 1 && Math.abs(v.planOnly - v.workOnly) > 1,
    'one account alone is never within a point of the whole, nor of the other account'));
  every('g-sell-wait', v => v.held < 12 && v.saved > v.extra, 'a gain short of a year: waiting saves more tax than the dearer fund costs meanwhile');
  every('g-sell-plan', v => v.saved === 0, 'inside a 401(k): waiting saves nothing');
  every('g-sell-now', v => v.extra > v.saved + 5 && v.saved > 0, 'a small gain on a big dearer fund: waiting costs more than it saves, so the comparison decides');
  every('g-sell-wait', v => Math.abs(v.yearCost - v.extra) > 1 && Math.abs(v.gainBase - v.extra) > 1, 'a whole year of the gap, or the gap on the gain, is never the cost of waiting');
  every('g-place-swap', v => v.gainTax < v.saved && Math.abs(v.gainAtRate - v.gainTax) > 0.5, 'the bonds’ one-time gain tax is under a year’s saving, and the wrong rate is a different answer');
  same([...new Set(seeds.slice(0, 60).map(s => itemFromGen(gen('g-place-swap'), s).values.rate))].sort((x, y) => x - y), [22, 24], 'beside a 15% long-term rate, the top rate is 22% or 24%, never 12% (2026 brackets)');
  same([...new Set(seeds.slice(0, 60).map(s => itemFromGen(gen('g-loss-ok'), s).values.rate))].sort((x, y) => x - y), [12, 22, 24], 'a loss against other income is drawn at all three rates');
  every('g-loss-wash', v => v.days <= 30 && v.saved === 0, 'a buy-back within 30 days: no loss this year');
  every('g-loss-ok', v => v.days > 30 && v.saved > 0 && parseTyped(v.lossText) <= 3000, 'a buy-back past 30 days: the loss counts, under the $3,000 limit');
  // the worked questions score right with their own answers
  const right = (id, a) => same(scoreItem(wealth, wealth.items[id], null, a).ok, true, `the worked question ${id} with its own answers`);
  right('w-list', { list: { bank: [262400], bankGuard: 'fdic', brok: [60000], brokGuard: 'sipc', plan: [94500], planGuard: 'none' }, total: [416900], fall: 'nobody', call: 'change', over: [12400], fix: 'other-bank' });
  right('w-cash', { months: [4.5], call: 'stocks' });
  right('w-match', { mine: [3], rate: [6], left: [960], call: 'change' });
  right('w-place', { where: 'yes', call: 'change', saved: [211.2] });
  right('w-share', { share: [26.1], call: 'change', sell: [18500], from: 'plan' });
  same(scoreItem(wealth, wealth.items['w-list'], null, { list: { bank: [262400], bankGuard: 'fdic', brok: [60000], brokGuard: 'sipc', plan: [94500], planGuard: 'none' }, total: [416900], fall: 'sipc', call: 'change', over: [12400], fix: 'other-bank' }).r.fall, 'insured-fall', 'SIPC for a fall is the named slip');
  same(scoreItem(wealth, wealth.items['w-list'], null, { list: { bank: [262400], bankGuard: 'fdic', brok: [60000], brokGuard: 'sipc', plan: [94500], planGuard: 'none' }, total: [416900], fall: 'nobody', call: 'change', over: [12400], fix: 'same-bank' }).r.fix, 'per-account-limit', 'a second account at the same bank is the named slip');
  same(scoreItem(wealth, wealth.items['o-1'], null, { steps: ['starter', 'match', 'debt', 'fill', 'ira', 'more', 'brokerage'] }).ok, true, 'the worked order leaves out the HSA');
  same(scoreItem(wealth, wealth.items['o-1'], null, { steps: ['match', 'starter', 'debt', 'fill', 'ira', 'more', 'brokerage'] }).ok, false, 'the match before a month of cash is out of order');
  same(scoreItem(wealth, wealth.items['o-4'], null, { steps: ['match', 'debt', 'fill', 'ira', 'more', 'brokerage'] }).ok, true, 'two months of cash: the match, then the card, then cash to three months');
}

/* ---------- the forms a subject may keep ---------- */
same(OWN_SLOTS, ['sheet', 'actions', 'plan', 'setup', 'answers', 'business'], 'the private forms built (the plan and the setup came with step 8, the answers with step 9, the business with Strategy)');
same(Object.keys(OWN_REQUIRED), OWN_SLOTS, 'what the app reads is named for each form built');
same(Object.keys(wealth.meta.own).sort(), ['actions', 'sheet'], 'Wealth keeps a sheet of accounts and the dated changes');

/* ---------- the learner's own business (Strategy, lesson 5) ---------- */
{
  const { ownLinesFromDraft, ownDraftsFromLines, ownCoreOf, businessEditorHtml } = app;
  const strategy = FC.get('strategy'), form = strategy.meta.own.business, lists = strategy.meta.lists;
  const ctx = { lists, refs: [], limits: {}, year: 2026 };
  // the form: a line refuses an account number and a word for a number; a blank line is dropped; no line at all asks for one
  const typed = ownLinesFromDraft(form, lists, [
    { name: 'Wedding cakes', kind: 'product', revenue: '48,000', cost: '18000' },
    { name: '', kind: '', revenue: '', cost: '' },
    { name: 'Market stall', kind: 'channel', revenue: 'lots', cost: '12345678' }]);
  same(typed.problems.map(p => [p.path, p.text]), [['lines.2.revenue', SAY.ownNumber], ['lines.2.cost', SAY.ownDigits]], 'a line refuses a word for a number and an account number, under its own field');
  same(ownLinesFromDraft(form, lists, [{ name: 'Cakes', kind: 'product', revenue: '100', cost: '40' }]).lines, [{ name: 'Cakes', kind: 'product', revenue: 100, cost: 40 }], 'a line is kept as typed, numbers as numbers');
  same(ownLinesFromDraft(form, lists, [{ name: '', kind: '', revenue: '', cost: '' }]).problems.map(p => p.path), ['lines.0.name'], 'with no line typed, the form asks for one');
  same(ownDraftsFromLines(form, [{ name: 'Cakes', kind: 'product', revenue: 100, cost: 40 }]).map(d => [d.name, d.kind, d.revenue, d.cost]), [['Cakes', 'product', '100', '40']], 'the stored lines come back into the form as typed');
  check(form.fields.every(f => !/account\s*number|password|login/i.test(f.label)), 'no business field asks for an account number or a login');
  // the core: each kind on its own table, largest first, a share of what the earning lines make, a loser flagged, the fewest top lines over half named
  const business = { lines: [
    { name: 'Bread', kind: 'product', revenue: 60000, cost: 52000 }, { name: 'Wedding cakes', kind: 'product', revenue: 48000, cost: 18000 },
    { name: 'Birthday cakes', kind: 'product', revenue: 30000, cost: 16000 }, { name: 'Catering', kind: 'product', revenue: 20000, cost: 23000 },
    { name: 'Market stall', kind: 'channel', revenue: 15000, cost: 9000 }, { name: 'The shop', kind: 'channel', revenue: 143000, cost: 100000 }] };
  const core = ownWork('core', business, ctx);
  same(core.docs.map(d => d.title), ['Your lines: a product or service', 'Your lines: a way you sell (a shop, a website, a market)'], 'a table for each kind of line typed, in the list’s order');
  same(core.docs[0].rows.map(r => r.cells), [['Wedding cakes', '$30,000', '57.7%'], ['Birthday cakes', '$14,000', '26.9%'], ['Bread', '$8,000', '15.4%'], ['Catering', '−$3,000', SAY.bizLoses], [SAY.bizAll, '$49,000', '']],
    'each line earns its revenue less its direct cost, largest first, with its share of what the earning lines make; a loser says so; the total counts it');
  same(core.lines.filter(l => l.flag).map(l => l.text), [SAY.bizCoreLine(1, 4, 'Wedding cakes', '57.7'), SAY.bizLosing('Catering', '$3,000'), SAY.bizCoreLine(1, 2, 'The shop', '87.8')],
    'the fewest top lines over half are named for each kind, and the line that loses money is flagged');
  check(core.lines.at(-1).text === SAY.workNotAdvice, 'the work ends by saying it is not advice');
  same(ownCoreOf([{ name: 'A', revenue: 10, cost: 5 }, { name: 'B', revenue: 10, cost: 5 }]).core.map(l => l.name), ['A', 'B'], 'two lines that earn alike: neither alone is more than half');
  same(ownWork('core', { lines: [{ name: 'A', kind: 'customer', revenue: 10, cost: 5 }, { name: 'B', kind: 'customer', revenue: 10, cost: 5 }] }, ctx).lines.map(l => l.text), [SAY.bizCoreEven], 'lines that earn about evenly name no core');
  same(ownWork('core', { lines: [{ name: 'A', kind: 'customer', revenue: 5, cost: 9 }] }, ctx).lines.filter(l => l.flag).map(l => l.text), [SAY.bizLosing('A', '$4'), SAY.bizNoneEarn], 'lines that earn nothing together are flagged');
  check(/data-line="0"/.test(businessEditorHtml(form, lists, ownDraftsFromLines(form, []), [])) && /data-add-line/.test(businessEditorHtml(form, lists, ownDraftsFromLines(form, []), [])), 'the business form starts with one blank line and a button for another');
}

if (failures.length) {
  console.error(`✗ ${failures.length} of ${checks} own-data checks failed:`);
  failures.slice(0, 40).forEach(f => console.error('  - ' + f));
  process.exit(1);
}
console.log(`✓ ${checks} own-data checks passed`);
