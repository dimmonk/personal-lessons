// X24 and X27, on the test subject "Household papers" (tests/fixtures/fixture-subject/ledger-*.js), in Chromium.
//   X24 (lesson standard 9, own data): the learner's private sheet and dated changes. A lesson that waits for a moment says so, and its step on
//       the learner's own data opens the sheet form when the sheet is empty; a run of eight digits, a word where a number goes and a day in the
//       past are refused with a line under the field and nothing is stored; the costs are the app's arithmetic on what was typed and warn
//       outside the plausible range; a dated change writes a calendar file for its day, "I did it now" and a done mark stick across a reload;
//       the sheet is kept in pl:<subject>:notes alone and appears nowhere outside the subject's own screens and the two files the learner saves;
//       delete asks inline (never a browser dialog) and takes everything off the phone; and no request leaves the app.
//   X27 (new with step 4, 3 to 9): the papers of a household and the form. Every kind of paper is drawn as its data says; a household's papers are
//       tabs, one open at a time, kept across a repaint; a dated value looked up prints its day and source and says when it is old; a form is
//       answered whole (Answer opens only when every field is filled), scored field by field, each missed field with its own line, and stored as
//       numbers and option ids. It leaves to X24 whatever is the learner's own data, and to X3 the layout of screens with answer buttons.
import { britishIn } from './american.mjs';
import * as O from './e2e-own-drive.mjs';

const SECRET = 'Zebra IRA';
const ACCOUNT_NUMBER = '12345678';
const plainWords = async (c, page, env, label) => {   // the words of a screen, where its layout is another check's
  const jargon = await env.jargonShown(page), british = britishIn(await page.evaluate(() => document.querySelector('#screen').textContent));
  c.check(jargon.length === 0 && british.length === 0, `${label}: shows ${[...jargon, ...british].map(w => `"${w}"`).join(', ')}`);
};
const openLedgerLesson = async (env, page) => { await env.openSubject(page, 'ledger'); await env.clickVisible(page, '#screen [data-l="l1"]'); };
const OWN_STEP = 4;   // the place of the step on the learner's own data in "Read the papers": the why, three steps, then this one

/* ---------- X24 ---------- */
async function waitsForAMoment(env, c, page) {
  await env.openSubject(page, 'ledger');
  const subject = await env.screenText(page);
  c.check(/Waiting for: I started a job in the US/.test(subject), 'the lesson that waits for a moment does not say so on the subject screen');
  c.check(await page.locator('[data-own-export]').isDisabled() && await page.locator('[data-own-delete]').isDisabled(), 'export and delete are open when nothing is kept');
  await env.inspect(c, page, 'the subject screen with nothing kept');
  await env.clickVisible(page, '#screen [data-l="l1"]');
  await O.jumpTo(page, OWN_STEP);
  c.check(/This step waits for a moment/.test(await env.screenText(page)) && /I started a job in the US/.test(await env.screenText(page)), 'the step on your own data does not wait for the moment');
  await env.inspect(c, page, 'the step waiting for a moment');
  await page.locator('#ownLater').click();
  c.check((await O.storedNotes(page, 'ledger')) === null, 'coming back later stored something');
  await O.jumpTo(page, OWN_STEP);
  await page.locator('#ownMark').click();
  const notes = await O.storedNotes(page, 'ledger');
  c.check(!!notes && !!notes.triggers && notes.triggers.job === await O.todayIn(page) && Object.keys(notes).join() === 'triggers', 'the moment marked is not stored, with its day, under triggers alone');
}
async function refusals(env, c, page) {
  c.check(await page.locator('[data-own-sheet]').count() === 1 && /Do not type an account number/.test(await env.screenText(page)), 'an empty sheet does not open the sheet form with its warning');
  c.check(await page.locator('#ownSkip').count() === 1, 'the sheet form has no way to say there is no account yet');
  await env.inspect(c, page, 'the empty sheet form');
  const attempt = async (label, patch, expected) => {
    await O.typeAccount(page, 0, { type: 'ira', name: SECRET, balance: '40,000', funds: [{ name: 'Orange Fund', value: '40000', expense: '2.5', kind: 'stocks' }], ...patch });
    await page.locator('#ownSave').click();
    const errors = await O.errorsShown(page), notes = await O.storedNotes(page, 'ledger');
    c.check(errors.length === 1 && expected.test(errors[0]), `${label}: the line under the field is ${JSON.stringify(errors)}`);
    c.check(!notes.sheet, `${label}: something was stored`);
    return page.evaluate(() => document.activeElement.id);
  };
  const focused = await attempt('a balance of eight digits', { balance: ACCOUNT_NUMBER }, /account number/);
  c.check(focused === 'own-accounts-0-balance', `a refused field does not take the cursor (it is ${focused})`);
  await attempt('a name that is a card number', { name: '4111 1111 1111 1111' }, /account number/);
  await attempt('a word where a number goes', { balance: 'a lot' }, /Type a number/);
  await attempt('a yearly cost of 12345678', { funds: [{ name: 'Orange Fund', value: '40000', expense: ACCOUNT_NUMBER }] }, /account number/);
  await env.inspect(c, page, 'the sheet form with a line under a field');
}
async function costs(env, c, page) {
  await O.typeAccount(page, 0, { type: 'ira', name: SECRET, balance: '40,000', fees: '50', funds: [{ name: 'Orange Fund', value: '40000', expense: '2.5', kind: 'stocks' }] });
  await page.locator('[data-add-fund="0"]').click();   // a fund row left blank is dropped
  await page.locator('[data-add-account]').click();     // and so is an account left blank
  await page.locator('#ownSave').click();
  const text = await env.screenText(page);
  c.check(/Zebra IRA \(IRA\)/.test(text) && /\$1,050\.00 a year/.test(text), `the costs are not the app's arithmetic on what was typed (${text.slice(80, 400)})`);
  c.check(/Orange Fund: A yearly cost over 2% is very high/.test(text), 'a yearly cost over the plausible range is not warned about');
  c.check(/Together your accounts cost you \$1,050\.00 a year/.test(text), 'the total of the accounts is not shown in dollars');
  c.check(await page.locator('.block-doc mark.cue').count() >= 1, 'the sample lines to find are not marked beside the costs');
  await env.inspect(c, page, 'what the accounts cost');
  const notes = await O.storedNotes(page, 'ledger');
  const account = ((notes || {}).sheet || { accounts: [] }).accounts[0];
  c.check(!!account && JSON.stringify(Object.keys(account).sort()) === '["balance","fees","holdings","id","name","type"]' && account.balance === 40000 && account.fees === 50
    && notes.sheet.accounts.length === 1 && JSON.stringify(account.holdings) === JSON.stringify([{ name: 'Orange Fund', value: 40000, expense: 2.5, kind: 'stocks' }]), `the sheet is not stored as the 26.3 shape (${JSON.stringify(account)})`);
}
async function datedChange(env, c, page) {
  const today = await O.todayIn(page), future = await O.dayIn(page, 9), after = await O.dayIn(page, 10), past = await O.dayIn(page, -1);
  await O.typeAction(page, { what: 'Call', where: 'On the phone', when: past });
  await page.locator('[data-save-action]').click();
  c.check((await O.errorsShown(page)).some(e => /today or a day to come/.test(e)) && !(await O.storedNotes(page, 'ledger')).actions, 'a day in the past was accepted');
  await O.typeAction(page, { what: 'Switch the Orange Fund to an index fund', where: 'On my plan website', when: future });
  await page.locator('[data-save-action]').click();
  c.check(/Switch the Orange Fund to an index fund/.test(await env.screenText(page)) && /Due /.test(await env.screenText(page)), 'a dated change is not listed with its day');
  const file = await O.download(page, () => page.locator('[data-action-ics]').first().click());
  const lines = file.text.split('\r\n').filter(Boolean);
  c.check(/\.ics$/.test(file.name) && file.text.startsWith('BEGIN:VCALENDAR\r\n') && file.text.endsWith('END:VCALENDAR\r\n'), `the calendar file is not a calendar file (${file.name})`);
  c.check(file.text.includes(`DTSTART;VALUE=DATE:${future.replace(/-/g, '')}\r\n`) && file.text.includes(`DTEND;VALUE=DATE:${after.replace(/-/g, '')}\r\n`), 'the calendar file is not for the day the change is dated');
  c.check(file.text.includes('SUMMARY:Switch the Orange Fund to an index fund') && file.text.includes('LOCATION:On my plan website') && file.text.includes('BEGIN:VALARM'), 'the calendar file does not say what, where, and remind');
  c.check(lines.every(l => l.length <= 75), 'a line of the calendar file is longer than 75');
  await typeNow(page);
  const notes = await O.storedNotes(page, 'ledger');
  c.check(notes.actions.length === 2 && JSON.stringify(Object.keys(notes.actions[0]).sort()) === '["id","what","when","where"]'
    && notes.actions[0].when === future && !('done' in notes.actions[0]), 'a dated change is not stored as { id, what, where, when }');
  c.check(notes.actions[1].done === today && notes.actions[1].when === today && notes.actions[1].what === 'Pay the account fee', '"I did it now" is not stored as done today');
  await env.inspect(c, page, 'the change list');
  return { future, today };
}
async function typeNow(page) {
  await O.typeAction(page, { what: 'Pay the account fee', where: 'At the bank' });
  await page.locator('[data-action-now]').click();
}
async function subjectScreen(env, c, page, { future, today }) {
  await env.clickVisible(page, '[data-v="subject"]');
  const text = await env.screenText(page);
  c.check(/Zebra IRA \(IRA\)/.test(text) && /\$40,000/.test(text) && /\$1,050\.00 a year/.test(text), 'the subject screen does not summarize the account and its cost');
  await env.inspect(c, page, 'the subject screen with the accounts and changes');
  await page.locator('[data-action-done]').first().click();
  const done = (await O.storedNotes(page, 'ledger')).actions;
  c.check(done[0].done === today && done[1].done === today, 'a done mark did not stick');
  await env.reload(page);
  const after = await env.screenText(page), short = await page.evaluate(day => shortDay(day), today);
  c.check(after.includes(`Done ${short}`) && (await page.locator('[data-action-done]').count()) === 0, 'a done mark did not survive a reload');
  c.check(await page.locator('[data-trigger-clear="job"]').count() === 1 && /Marked /.test(after), 'a moment marked is not shown with its day and a way to clear it');
  await page.locator('[data-trigger-mark="account"]').click();
  c.check(Object.keys((await O.storedNotes(page, 'ledger')).triggers).sort().join() === 'account,job', 'a moment marked on the subject screen is not stored');
  await page.locator('[data-trigger-clear="account"]').click();
  c.check(Object.keys((await O.storedNotes(page, 'ledger')).triggers).join() === 'job', 'a moment cleared is still stored');
  void future;
}
// Nothing private on any other screen, in the log, in the record of tries or in the keys that are not notes
async function nothingElsewhere(env, c, page) {
  const seen = [];
  const read = async label => seen.push([label, await env.screenText(page)]);
  await env.toLibrary(page); await read('the library');
  await env.clickVisible(page, '[data-v="review"]'); await read('the review');
  await env.clickVisible(page, '[data-v="progress"]'); await read('progress');
  await env.toLibrary(page);
  await env.clickVisible(page, '[data-v="search"]'); await page.fill('#q', 'Zebr'); await read('a search for part of the name');
  await page.fill('#q', 'Orange F'); await read('a search for the fund');
  const ids = await page.evaluate(() => SUBJECTS.map(s => s.id));
  for (const id of ids.filter(x => x !== 'ledger')) { await env.openSubject(page, id); await read(`the ${id} subject`); }
  await env.openSubject(page, 'ledger');
  await env.clickVisible(page, '#screen [data-l="l1"]');
  for (const at of [0, 1]) { await O.jumpTo(page, at); await read(`the lesson at step ${at + 1}`); }   // its own step is the subject's own screen, and is left out
  seen.forEach(([label, text]) => c.check(!/Zebra|Orange Fund|\$1,050\.00/.test(text), `${label} shows the learner's own accounts`));
  const stored = await env.storage(page);
  Object.entries(stored).filter(([k]) => k !== 'pl:ledger:notes').forEach(([k, v]) => c.check(!/Zebra|Orange Fund/.test(v), `${k} holds the learner's own accounts`));
}
async function leavesAndGoes(env, c, page, dialogs) {
  await env.openSubject(page, 'ledger');
  const mine = await O.download(page, () => page.locator('[data-own-export]').click()), file = JSON.parse(mine.text);
  c.check(/^fieldcraft-ledger-\d{4}-\d\d-\d\d\.json$/.test(mine.name) && file.subject === 'ledger' && file.notes.sheet.accounts[0].name === SECRET && file.notes.actions.length === 2, 'the file of this subject does not hold its accounts and changes');
  await env.clickVisible(page, '[data-v="progress"]');
  const all = JSON.parse((await O.download(page, () => page.locator('#exportLog').click())).text);
  c.check(all.subjects.ledger.notes.sheet.accounts[0].name === SECRET, 'the export of everything leaves out the notes');
  await env.openSubject(page, 'ledger');
  await page.locator('[data-own-delete]').click();
  c.check(/This cannot be undone/.test(await env.screenText(page)) && await page.locator('[data-own-delete-yes]').count() === 1, 'delete does not ask inline first');
  await page.locator('[data-own-delete-no]').click();
  c.check((await O.storedNotes(page, 'ledger')) !== null, 'keeping them still deleted them');
  await page.locator('[data-own-delete]').click();
  await page.locator('[data-own-delete-yes]').click();
  c.check((await O.storedNotes(page, 'ledger')) === null && /Deleted\./.test(await env.screenText(page)) && /No accounts yet/.test(await env.screenText(page)), 'delete did not take everything off the phone');
  c.check(dialogs.length === 0, `the browser asked with a dialog (${dialogs.join(', ')})`);
}

export async function X24(env) {
  const c = env.checker('X24'), { context, page, outside } = await env.freshPage(c, 390), dialogs = [];
  page.on('dialog', d => { dialogs.push(d.type()); d.dismiss(); });
  await waitsForAMoment(env, c, page);
  await refusals(env, c, page);
  await costs(env, c, page);
  const days = await datedChange(env, c, page);
  await subjectScreen(env, c, page, days);
  await nothingElsewhere(env, c, page);
  await leavesAndGoes(env, c, page, dialogs);
  c.check(outside.length === 0, `a request left the app: ${outside.join(', ')}`);
  await context.close();
  return c;
}

/* ---------- X27 ---------- */
const ticked = page => page.locator('[aria-selected="true"]').evaluateAll(tabs => tabs.map(t => t.textContent.trim()));
const drawnDocuments = page => page.evaluate(() => [...document.querySelectorAll('.block-doc')].map(d => ({ form: d.dataset.document, title: d.querySelector('.doc-title').textContent,
  head: [...d.querySelectorAll('th')].map(t => t.textContent), rows: [...d.querySelectorAll('tbody tr')].map(r => [...r.querySelectorAll('td')].map(td => td.textContent)),
  notes: [...d.querySelectorAll('.doc-note')].map(n => n.textContent) })));
const fillForm = async (page, rate, dollars, holds) => {
  await page.locator('[data-field="rate"]').fill(String(rate));
  await page.locator('[data-field="dollars"]').fill(String(dollars));
  if (holds) await page.locator(`[data-fopt="${holds}"]`).click();
};
async function papers(env, c, page) {
  const data = (await page.evaluate(() => FC.get('ledger').lessons.l1.flow[0].show)), docs = data.filter(b => b.kind === 'document');
  const drawn = await drawnDocuments(page);
  c.check(drawn.length === docs.length, `${drawn.length} papers drawn, ${docs.length} in the data`);
  docs.forEach((doc, i) => {
    const got = drawn[i] || {};
    c.check(got.form === doc.form && got.title === doc.title, `paper ${i + 1} is drawn as ${got.form} "${got.title}", not ${doc.form} "${doc.title}"`);
    c.check(JSON.stringify(got.head) === JSON.stringify(doc.head || []), `paper ${i + 1} (${doc.form}): the column heads drawn are not the data's`);
    c.check(JSON.stringify(got.rows) === JSON.stringify(doc.rows.map(r => r.cells)), `paper ${i + 1} (${doc.form}): the cells drawn are not the data's`);
    c.check(JSON.stringify(got.notes) === JSON.stringify(doc.notes || []), `paper ${i + 1} (${doc.form}): the notes drawn are not the data's`);
  });
  c.check(new Set(drawn.map(d => d.form)).size === 7, `the show screen draws ${new Set(drawn.map(d => d.form)).size} kinds of paper, not seven`);
  // a household's papers are tabs: one open, the first at the start
  c.check(await page.locator('.doc-tabs').count() === 1 && JSON.stringify(await page.locator('[data-doc-tab]').allTextContents()) === '["Statement","Fee sheet"]', 'the household papers are not two tabs named for them');
  c.check(await page.locator('[data-doc-panel]:visible').count() === 1 && (await ticked(page)).join() === 'Statement', 'a household of papers does not open on its first paper alone');
  await page.locator('[data-doc-tab="1"]').click();
  c.check(await page.locator('[data-doc-panel="1"]').isVisible() && await page.locator('[data-doc-panel="0"]').isHidden() && (await ticked(page)).join() === 'Fee sheet', 'a tap on a tab does not open that paper and shut the other');
  // a value looked up
  const ref = await page.locator('.block-ref').textContent();
  c.check(/\$1,000/.test(ref) && /Looked up January 2, 2025/.test(ref) && /Source: The test office, table 7/.test(ref), `a value looked up does not print itself, its day and its source (${ref.slice(0, 160)})`);
  c.check(/A value like this changes/.test(ref) && !/more than a year ago/.test(ref), 'a value looked up less than a year ago says it is old');
  await env.inspect(c, page, 'the papers');
}
async function staleValue(env, c, page) {
  await env.setDay(page, '2026-11-02');
  await openLedgerLesson(env, page);
  const ref = await page.locator('.block-ref').textContent();
  c.check(/more than a year ago/.test(ref) && !/A value like this changes/.test(ref), 'a value looked up more than a year ago does not say to look it up again');
  await env.goOn(page);
}
async function workedForm(env, c, page) {
  const text = await env.screenText(page);
  c.check(/Yearly cost of the Growth Fund: 0\.50%/.test(text) && /What it costs you a year: \$250\.00/.test(text) && /What the Growth Fund holds: Stocks/.test(text), 'a worked form does not show the right value of each field');
  c.check(await page.locator('.block-doc mark.cue').count() >= 1, 'the worked form does not mark the lines it comes from');
  await env.inspect(c, page, 'the worked form');
  await env.goOn(page);
}
// a question missed in some fields and right in others: the form is a miss, and each missed field says why in words of its own
async function aMissedForm(env, c, page, wrong) {
  const first = await D_current(page), v = first.values;
  c.check(first.key === 'l-gen' && first.open.length === 1 && first.open[0].kind === 'form', 'the question is not one form of fields');
  const answer = page.locator('[data-form-answer="line"]');
  c.check(await answer.isDisabled(), 'Answer is open before anything is typed');
  await page.locator('[data-field="rate"]').fill(String(wrong.rate ? v.other : v.rate));
  await page.locator('[data-field="dollars"]').fill(String(wrong.dollars ? v.whole : v.cost));
  c.check(await answer.isDisabled(), 'Answer is open with a choice still to make');
  await page.locator(`[data-fopt="${wrong.holds ? 'bonds' : 'stocks'}"]`).click();
  c.check(await answer.isEnabled() && await page.locator(`[data-fopt="${wrong.holds ? 'bonds' : 'stocks'}"]`).getAttribute('aria-pressed') === 'true'
    && await page.locator(`[data-fopt="${wrong.holds ? 'stocks' : 'bonds'}"]`).getAttribute('aria-pressed') === 'false', 'a choice in a form is not marked alone, or the form is not ready when every field is filled');
  await page.locator('[data-field="dollars"]').fill('');
  c.check(await answer.isDisabled(), 'Answer stays open after a field is emptied');
  await page.locator('[data-field="dollars"]').fill(String(wrong.dollars ? v.whole : v.cost));
  await page.locator('[data-doc-tab="1"]').click();   // the learner is reading the fee sheet
  c.check(await page.locator('[data-feedback]').count() === 0 && await page.locator('.mark').count() === 0, 'a mark is on the page before Answer');
  await plainWords(c, page, env, 'a form to fill in');
  await answer.click();
  const text = await env.screenText(page), misses = Object.values(wrong).filter(Boolean).length;
  c.check(await page.locator('.mark.no').count() === misses && await page.locator('.mark').count() === 3, `the three fields are not each marked, ${misses} of them as a miss (${await page.locator('.mark.no').count()} of ${await page.locator('.mark').count()})`);
  if (wrong.rate) c.check(text.includes(`The answer: Yearly cost of the Growth Fund: ${v.rateText}`) && /That is the cost of the Safe Fund\./.test(text), 'a missed number does not show the right value and the line of its own slip');
  if (wrong.dollars) c.check(text.includes(`The answer: What it costs you a year: ${v.costText}`) && /That uses the percent as if it were dollars\./.test(text), 'a missed sum does not show the right value and the line of its own slip');
  if (wrong.holds) c.check(/The fee sheet says Stocks\./.test(text), 'a missed choice does not say what the sheet says');
  c.check((await ticked(page)).join() === 'Fees' && await page.locator('[data-doc-tab] mark.cue').count() === 2, 'the paper the learner was reading did not stay open, or the papers with marked lines are not marked');
  c.check(await page.locator('.block-doc mark.cue').count() >= 2, 'the lines that decide it are not marked after the answer');
  await plainWords(c, page, env, 'the feedback of a form');
  await page.locator('#qNext').click();
  return first;
}
const D_current = page => page.evaluate(() => { const i = Q.list[Q.at]; return { key: i.key, seed: i.seed, redo: !!i.redo, values: i.item.values,
  open: openAsks(i.item, Q.support, Q.cur.a).filter(a => !(a.id in Q.cur.a)).map(a => ({ id: a.id, kind: a.kind })) }; });
async function aRightForm(env, c, page, label) {
  const now = await D_current(page);
  await fillForm(page, now.values.rate, now.values.cost, 'stocks');
  await page.locator('[data-form-answer="line"]').click();
  c.check(await page.locator('.mark').count() === 3 && await page.locator('.mark.no').count() === 0, `${label}: three right fields are not marked right`);
  await page.locator('#qNext').click();
  return now;
}
async function theRecord(env, c, page, [one, two]) {
  const items = JSON.parse((await env.storage(page))['pl:ledger:items'] || '{}'), tries = (items['l-gen'] || { tries: [] }).tries;
  c.check(tries.length === 4 && tries.filter(t => t.ok).length === 2, `the record holds ${tries.length} tries of the form, not two misses and each asked again right`);
  const missOne = tries.find(t => t.seed === one.seed), missTwo = tries.find(t => t.seed === two.seed);
  c.check(!!missOne && missOne.ok === false && missOne.r.line === 'swapped' && !!missTwo && missTwo.ok === false && missTwo.r.line === 'percent-whole', 'a missed form is not stored with the slip of its first missed field');
  c.check(!!missOne && Array.isArray(missOne.a.line.rate) && typeof missOne.a.line.rate[0] === 'number' && Array.isArray(missOne.a.line.dollars) && missOne.a.line.holds === 'bonds' && Object.keys(missOne.a).join() === 'line',
    `a form is not stored as numbers and option ids, one answer under the ask (${JSON.stringify(missOne && missOne.a)})`);
  c.check(tries.every(t => typeof t.seed === 'number' && Object.keys(t.r).join() === 'line' && ['ok', 'swapped', 'percent-whole', 'no'].includes(t.r.line)), 'the result of a form is not one word under the ask');
}

export async function X27(env) {
  const c = env.checker('X27'), { context, page } = await env.freshPage(c, 375);
  await env.setDay(page, '2025-06-01');   // the value looked up is not yet a year old
  await openLedgerLesson(env, page);
  await env.goOn(page);
  await papers(env, c, page);
  await staleValue(env, c, page);
  await workedForm(env, c, page);
  c.check((await env.screenText(page)).includes('Question 1 of 2'), 'the group is not two questions');
  const one = await aMissedForm(env, c, page, { rate: true, dollars: false, holds: true });
  const two = await aMissedForm(env, c, page, { rate: false, dollars: true, holds: false });
  for (const [label, missed] of [['the first miss', one], ['the second miss', two]]) {
    const again = await D_current(page);
    c.check(again.redo && again.seed !== missed.seed && again.values.balanceText !== undefined, `${label} does not come back with new numbers`);
    await aRightForm(env, c, page, `${label}, asked again`);
  }
  c.check(/0 of 2 right the first time/.test(await env.screenText(page)), 'the group does not end on "0 of 2 right the first time"');
  await theRecord(env, c, page, [one, two]);
  await context.close();
  return c;
}

export const OWN_CHECKS = { X24, X27 };
