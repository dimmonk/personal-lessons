// X26: Wealth's pilot lesson, "What it costs a year, in dollars", end to end on a phone (375 px). Not one of the checks the standard lists in 26.7:
// it was added with step 4 (26.10), the way step 3 ran Math's pilot. The test plays a learner who types every answer: the rule and the worked
// account (the household's papers as tabs); a first group with the last steps left to the learner, one dollar figure typed as a percent used for
// dollars (a named slip) and the question coming back with new numbers; a second group, one switch to the wrong kind of fund (a named slip);
// the step on the learner's own data, which opens the sheet form because the sheet is empty, then the costs and a dated change with its
// calendar file; the check, passed, with every rule; the subject screen; and the record.
// It asserts what this walk shows, and leaves to X24 and X27 what those own (the refusals, the contents of the calendar file, the privacy of
// the sheet, the tabs and the form), to X3 the layout of screens with answer buttons, and to X1, X2, X5, X13, X21 and X23 what they own, so that a
// fault in one of those turns that check red and no other.
import { britishIn } from './american.mjs';
import * as D from './e2e-number-drive.mjs';
import * as O from './e2e-own-drive.mjs';

const next = page => page.locator('#qNext').click();
const plainWords = async (c, page, env, label) => {   // the words of a screen, where its layout is another check's
  const jargon = await env.jargonShown(page), british = britishIn(await page.evaluate(() => document.querySelector('#screen').textContent));
  c.check(jargon.length === 0 && british.length === 0, `${label}: shows ${[...jargon, ...british].map(w => `"${w}"`).join(', ')}`);
};
// the question in front of the learner: which one, its numbers, how it is sorted, and the asks still open
const look = page => page.evaluate(() => { const i = Q.list[Q.at]; return { key: i.key, redo: !!i.redo, seed: i.seed, values: i.item.values, facets: i.item.facets,
  open: openAsks(i.item, Q.support, Q.cur.a).filter(a => !(a.id in Q.cur.a)).map(a => ({ id: a.id, kind: a.kind })) }; });
// answers every ask still open as a learner who reads the fee sheet would; `opts` says which to get wrong
async function answerAll(env, page, opts = {}) {
  for (let now = await look(page); now.open.length; now = await look(page)) {
    const open = now.open[0];
    if (open.id === 'rates') {
      await page.locator('[data-field="r1"]').fill(String(now.values.rate1));
      await page.locator('[data-field="r2"]').fill(String(now.values.rate2));
      await page.locator('[data-form-answer="rates"]').click();
    } else if (open.id === 'cost') await D.typeAnswer(page, 'cost', [D.cents(opts.cost ? opts.cost(now.values) : now.values.total)]);
    else if (open.id === 'call') await env.tap(page, 'call', now.facets.call);
    else if (open.id === 'switch') await env.tap(page, 'switch', opts.switchTo || 'same');
  }
}

async function theRuleAndTheWorkedAccount(env, c, page) {
  await env.inspect(c, page, 'the why');
  c.check((await env.screenText(page)).includes('Step 1 of 7'), 'the lesson is not seven steps long (the why, five steps and the check)');
  await env.goOn(page);
  let text = await env.screenText(page);
  c.check(/A wrong idea/.test(text) && /same kind/.test(text) && /÷ 100/.test(text), 'the rule does not give the arithmetic, the same-kind test and the wrong idea');
  await env.inspect(c, page, 'the rule');
  await env.goOn(page);
  while (await page.locator('#workedMore').count()) await page.locator('#workedMore').click();
  text = await env.screenText(page);
  c.check(/\$38,400 × 0\.95% = \$364\.80/.test(text) && /Together \$469\.62 a year/.test(text), 'the working is not shown step by step in dollars');
  c.check(/The answer.*0\.95%.*0\.07%/.test(text) && /\$469\.62 a year/.test(text) && /Change it/.test(text) && /Index 500 Fund/.test(text), 'the worked account does not end on its four answers');
  c.check(await page.locator('.doc-tabs [data-doc-tab]').count() === 2 && await page.locator('.block-doc mark.cue').count() >= 3, 'the statement and the fee sheet are not two tabs with the deciding lines marked');
  await env.inspect(c, page, 'the worked account, finished');
  await env.goOn(page);
}
async function theFirstGroup(env, c, page) {
  c.check((await env.screenText(page)).includes('Question 1 of 1'), 'the first group is not one account');
  const first = await look(page);
  c.check(first.key === 'g-cost-leave' && first.open.length === 1 && first.open[0].id === 'cost', 'the first account does not leave only the dollars and the decision to the learner');
  c.check(/Find each fund’s yearly cost on the fee sheet\./.test(await env.screenText(page)) && /The working is shown up to the last steps/.test(await env.screenText(page)), 'the first group does not show the working up to the last steps');
  await plainWords(c, page, env, 'an account with its first steps shown');
  await D.typeAnswer(page, 'cost', [D.cents(first.values.percentWhole)]);   // each percent used as if it were dollars
  c.check((await look(page)).open[0].id === 'call', 'the decision does not open after the dollars');
  await env.tap(page, 'call', 'leave');
  const text = await env.screenText(page);
  const typed = await page.evaluate(x => '$' + fmtNumber(x, 2), first.values.percentWhole);
  c.check(/That uses each percent as if it were dollars/.test(text) && text.includes(`You typed ${typed}`), 'the slip of using percents as dollars is not named');
  c.check(await page.locator('.mark.no').count() === 1 && await page.locator('.mark').count() === 2, 'a missed figure and a right decision are not marked as such');
  c.check(await page.locator('.block-doc mark.cue').count() >= 2 && /The working/.test(text), 'the lines that decide it are not marked, or the working is not shown');
  await plainWords(c, page, env, 'a missed account with its feedback');
  await next(page);
  const again = await look(page);
  c.check(again.redo && again.key === 'g-cost-leave' && again.seed !== first.seed && again.values.total !== first.values.total, 'the missed account does not come back with new numbers');
  await answerAll(env, page);
  await next(page);
  c.check(/You can stop here/.test(await env.screenText(page)) && /0 of 1 right the first time/.test(await env.screenText(page)), 'the first group does not end on "0 of 1 right the first time"');
  await env.goOn(page);
}
async function theSecondGroup(env, c, page) {
  let slipped = false, asked = [];
  while (await page.locator('#qNext').count()) {
    const now = await look(page);
    asked.push(now);
    c.check(await page.locator('.block-doc mark.cue').count() === 0 && await page.locator('[data-feedback]').count() === 0, 'a line is marked or a mark shown before the answer');
    c.check(now.open[0].id === 'rates' && now.open.length === 1, 'an account alone does not start with the fee sheet to read');
    await plainWords(c, page, env, 'an account to judge');
    if (now.facets.call === 'change' && !slipped && !now.redo) {
      slipped = true;
      await answerAll(env, page, { switchTo: 'bonds' });
      const text = await env.screenText(page);
      c.check(/holds bonds, not/.test(text), 'switching to the cheapest fund of a different kind does not say what is different');
      c.check(await page.locator('.mark.no').count() === 1, 'the wrong fund to switch to is not the one miss');
    } else await answerAll(env, page);
    await next(page);
  }
  const firsts = asked.filter(a => !a.redo), redone = asked.filter(a => a.redo);
  c.check(firsts.length === 2 && new Set(firsts.map(a => a.facets.call)).size === 2, `the second group is not one account to change and one to leave alone (${firsts.map(a => a.facets.call)})`);
  c.check(redone.length === 1 && redone[0].facets.call === 'change', 'the account missed does not come back as the same kind of account');
  c.check(/1 of 2 right the first time/.test(await env.screenText(page)), 'the second group does not end on "1 of 2 right the first time"');
  await env.goOn(page);
}
async function theOwnAccounts(env, c, page) {
  const text = await env.screenText(page);
  c.check(/Step 6 of 7/.test(text) && await page.locator('[data-own-sheet]').count() === 1 && /Do not type an account number/.test(text), 'the step on your own accounts does not open the sheet form when the sheet is empty');
  await env.inspect(c, page, 'the empty sheet form');
  await O.typeAccount(page, 0, { type: '401k', name: 'Work 401(k)', balance: '51,000', fees: '96',
    funds: [{ name: 'Summit Growth Fund', value: '38400', expense: '0.95', kind: 'us-stocks' }, { name: 'Total Bond Index Fund', value: '12600', expense: '0.07', kind: 'bonds' }] });
  await page.locator('#ownSave').click();
  const costs = await env.screenText(page);
  c.check(/Work 401\(k\) \(401\(k\) from a job\)/.test(costs) && /\$364\.80/.test(costs) && /\$8\.82/.test(costs) && /\$469\.62 a year/.test(costs), `the costs of the typed account are not the dollars of the working (${costs.slice(0, 400)})`);
  c.check(await page.locator('.ownwarn').count() === 0 && /0\.92% of what is in them/.test(costs), 'the account in range is warned about, or its share of the balance is not shown');
  c.check(await page.locator('.doc-tabs').count() === 1 && await page.locator('.block-doc mark.cue').count() >= 3, 'the sample lines to find on your own papers are not shown marked');
  await env.inspect(c, page, 'what your account costs');
  const future = await O.dayIn(page, 7);
  await O.typeAction(page, { what: 'Switch Summit Growth Fund to Index 500 Fund', where: 'On my plan website', when: future });
  await page.locator('[data-save-action]').click();
  c.check(/Switch Summit Growth Fund to Index 500 Fund/.test(await env.screenText(page)) && /Due /.test(await env.screenText(page)), 'the dated change is not listed with its day');
  const file = await O.download(page, () => page.locator('[data-action-ics]').first().click());
  c.check(/\.ics$/.test(file.name) && file.text.startsWith('BEGIN:VCALENDAR'), 'the change has no calendar file');
  await env.inspect(c, page, 'the dated change');
  const notes = await O.storedNotes(page, 'wealth');
  c.check(Object.keys(notes).sort().join() === 'actions,sheet' && notes.sheet.accounts.length === 1 && notes.actions.length === 1, 'your accounts and the change are not kept under the sheet and the actions alone');
  await env.goOn(page);
}
async function theCheck(env, c, page) {
  let text = await env.screenText(page);
  c.check(/Three new questions/.test(text) && /At least 3 right \(what the account costs a year, to within a tenth\)/.test(text) && /At least 3 right \(change it or leave it\)/.test(text)
    && /None wrong among accounts to leave alone/.test(text) && /None wrong \(the fund to switch to\)/.test(text), `the check does not name itself and its rules (${text.slice(0, 300)})`);
  await env.inspect(c, page, 'the first screen of the check');
  await env.goOn(page);
  const kinds = [];
  for (let i = 0; i < 3; i++) {
    const now = await look(page);
    kinds.push(now.facets.call);
    c.check(now.open[0].id === 'rates' && !now.redo, 'a question of the check is not an account alone');
    await answerAll(env, page);
    c.check(await page.locator('#qNext').isEnabled(), 'the check leaves Next shut after an answer');
    await next(page);
  }
  c.check(kinds.filter(k => k === 'leave').length === 1 && kinds.filter(k => k === 'change').length === 2, `the check is not two accounts to change and one to leave alone (${kinds})`);
  text = await env.screenText(page);
  const rules = await page.locator('table.results tr td:last-child').allTextContents();
  c.check(/3 of 3: passed/.test(text) && rules.length === 4 && rules.every(v => v === 'met'), `the check was not passed with every rule met (${text.slice(0, 160)})`);
  c.check(await page.locator('.resitem').count() === 3, 'the answers are not all shown after the result');
  await plainWords(c, page, env, 'the result of the check');
}
async function theRecord(env, c, page) {
  await env.clickVisible(page, '[data-v="subject"]');
  const text = await env.screenText(page);
  c.check(/Check passed, 3 of 3/.test(text) && /1 of 8 parts/.test(text) && /Practice again/.test(text) && /Work 401\(k\) \(401\(k\) from a job\)/.test(text), `the subject screen does not show the check passed and the account (${text.slice(0, 200)})`);
  await env.inspect(c, page, 'the Wealth subject screen after the lesson');
  const stored = await env.storage(page), items = JSON.parse(stored['pl:wealth:items'] || '{}'), seen = JSON.parse(stored['pl:wealth:seen'] || '{}');
  const tries = Object.entries(items).flatMap(([key, e]) => e.tries.map(t => ({ key, ...t }))), inCheck = tries.filter(t => t.context === 'check'), practice = tries.filter(t => t.context === 'practice');
  c.check(inCheck.length === 3 && inCheck.every(t => t.lesson === 'l2' && t.rev === 1 && t.sup === false && t.ok), 'the check was not stored as three right tries of lesson 2 without help');
  c.check(practice.some(t => t.sup === true) && practice.some(t => t.sup === false), 'the practice was not stored with and without help');
  c.check(tries.some(t => t.r.cost === 'percent-as-dollars') && tries.some(t => t.r.switch === 'wrong-kind') && tries.every(t => typeof t.seed === 'number'), 'the two slips and the seed of each made account are not in the record');
  c.check(tries.every(t => Object.values(t.a.rates || { r1: [0] }).every(v => Array.isArray(v) && typeof v[0] === 'number') && (t.a.cost === undefined || (Array.isArray(t.a.cost) && typeof t.a.cost[0] === 'number'))
    && (t.a.call === undefined || typeof t.a.call === 'string')), 'an answer is not stored as the numbers typed and the option chosen');
  c.check(!/Work 401|Summit/.test(JSON.stringify(items)), 'the record of tries holds the learner\'s own accounts');
  c.check(JSON.stringify(seen) === JSON.stringify({ l2: { rev: 1, at: 6 } }), `the place saved is not the end of the lesson (${JSON.stringify(seen)})`);
  c.check(await page.evaluate(() => { const d = FC.get('wealth'); return lessonDone(d, 'wealth', d.lessons.l2) && lastCheck(d, 'wealth', d.lessons.l2).passed; }), 'the lesson is not done with the check passed');
}

export async function X26(env) {
  const c = env.checker('X26'), { context, page } = await env.freshPage(c, 375);
  await env.openSubject(page, 'wealth');
  const subject = await env.screenText(page);
  c.check(/What it costs a year, in dollars/.test(subject) && (subject.match(/Not built yet/g) || []).length === 7, 'the subject screen does not list the pilot and the seven parts not built yet');
  c.check(subject.includes('Draft: not tried yet') && /Your accounts and dates/.test(subject) && /I started a job in the US/.test(subject), 'the pilot does not carry the draft line, or the subject has no place for your accounts and moments');
  await env.inspect(c, page, 'the Wealth subject screen');
  await env.clickVisible(page, '#screen [data-l="l2"]');
  await theRuleAndTheWorkedAccount(env, c, page);
  await theFirstGroup(env, c, page);
  await theSecondGroup(env, c, page);
  await theOwnAccounts(env, c, page);
  await theCheck(env, c, page);
  await theRecord(env, c, page);
  await context.close();
  return c;
}
export const WEALTH_CHECKS = { X26 };
