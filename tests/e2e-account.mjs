// X34 and X35, on a message and a line to write (lesson standard 26.1, 26.1.2, 26.7; new with step 7, 26.10). Each is a function of the environment
// (e2e-env.mjs) that drives the real app in Chromium on the test subject "Told by a friend" (tests/fixtures/fixture-subject/account-*.js) and returns
// its checker; tests/e2e-controls.mjs runs each against the app with a seeded fault and requires exactly that check to go red.
//   X34  the message block in its three forms: a friend's message, a thread you are in (the other person's lines at the left, yours at the right,
//        each named for a reader who cannot see the side) and your own note (a note, not bubbles); who it is from and when come first; the lines
//        come in order and are the lines that can be tapped (yours too), marked after the answer; the checklist with a heading of its own stands
//        beside the account while the help lasts, and its needs are listed under that heading in the feedback; nothing is wider than a phone.
//   X35  a line written against a model, and questions of four asks: the box opens when the ask before it is answered, nothing is given away before
//        the last ask, what is typed survives a repaint and is kept trimmed and no longer than 400 characters, "Not yet" answers with nothing
//        written, the words written are shown beside the model and neither is marked right or wrong, the question is right or wrong by its tap
//        alone, the words are stored with the try and appear in no other place; a question of four asks opens its fourth only after the answers
//        that call for it and has a mark for each ask that opened.
import { britishIn } from './american.mjs';

const next = page => page.locator('#qNext').click();
export const jump = (page, at) => page.evaluate(n => moveLesson(n), at);
const plainWords = async (c, page, env, label) => {
  const jargon = await env.jargonShown(page), british = britishIn(await page.evaluate(() => document.querySelector('#screen').textContent));
  c.check(jargon.length === 0 && british.length === 0, `${label}: shows ${[...jargon, ...british].map(w => `"${w}"`).join(', ')}`);
};

// the question in front of the learner: which one, and the asks still open, with what each wants
export const look = page => page.evaluate(() => {
  const inst = Q.list[Q.at], data = FC.get(Q.subj.id), open = openAsks(inst.item, Q.support, Q.cur.a).filter(a => !(a.id in Q.cur.a));
  const options = a => chooseOptions(data, a);
  return { key: inst.key, redo: !!inst.redo, done: Q.cur.done, answered: Object.keys(Q.cur.a),
    open: open.map(a => ({ id: a.id, kind: a.kind, pick: a.pick || 1,
      right: a.kind === 'tap' ? asList(a.right) : a.kind === 'text' ? [] : options(a).filter(o => o.ok).map(o => o.id),
      wrong: a.kind === 'tap' ? tapSegments(inst.item, a).map(s => s.id).filter(id => !tapRightIds(a, inst.item).includes(id)) : a.kind === 'text' ? [] : options(a).filter(o => !o.ok).map(o => o.id) })) };
});
const tapLine = (page, id) => page.locator(`[data-tap="${id}"]`).click();
const MODEL_ANSWER = 'He ate the leftovers.';
// answers the asks open now, one at a time, all right; `miss` names the ids to tap or choose instead, `write` the words to write in each box
// (a string; null for "Not yet"; nothing: a line of its own)
export async function answerAll(page, { miss = {}, write = {} } = {}) {
  for (let now = await look(page); now.open.length; now = await look(page)) {
    const ask = now.open[0], pick = miss[ask.id] || ask.right;
    if (ask.kind === 'tap') {
      if (pick[0] === 'none') await page.locator('[data-tap-none]').click();
      else { for (const id of pick) await tapLine(page, id); if (ask.pick > 1) await page.locator('[data-tap-answer]').click(); }
    } else if (ask.kind === 'text') {
      const words = ask.id in write ? write[ask.id] : MODEL_ANSWER;
      if (words === null) await page.locator(`[data-write-skip="${ask.id}"]`).click();
      else { await page.locator(`[data-write="${ask.id}"]`).fill(words); await page.locator(`[data-write-answer="${ask.id}"]`).click(); }
    } else await page.locator(`[data-ask="${ask.id}"] [data-opt="${pick[0]}"]`).click();
  }
}

/* ---------- X34: the message block ---------- */
// the steps of the test lesson: 0 the why, 1 the three forms and the checklist, 2 the worked account, 3 the group with the checklist, 4 the group without, 5 the check
const STEP = { forms: 1, worked: 2, helped: 3, plain: 4, check: 5 };
const openAccount = async (env, page) => { await env.openSubject(page, 'account'); await env.clickVisible(page, '#screen [data-l="l1"]'); };

async function theThreeForms(env, c, page) {
  await openAccount(env, page);
  await jump(page, STEP.forms);
  const data = await page.evaluate(() => FC.get('account').lessons.l1.flow[0].show.filter(b => b.kind === 'message'));
  const drawn = await page.evaluate(() => [...document.querySelectorAll('.block-message')].map(m => {
    const rect = e => { const r = e.getBoundingClientRect(); return { left: Math.round(r.left), right: Math.round(r.right) }; };
    return { form: m.dataset.message, cls: m.className, first: m.firstElementChild.className, from: m.querySelector('.msg-from').textContent, detail: m.querySelector('.msg-detail').textContent, box: rect(m),
      lines: [...m.querySelectorAll('.msg-line')].map(l => ({ text: l.textContent.replace(/\s+/g, ' ').trim(), me: l.classList.contains('me'), rect: rect(l), background: getComputedStyle(l).backgroundColor })) };
  }));
  c.check(drawn.map(d => d.form).join() === 'friend,thread,note', `the three forms are not drawn in order (${drawn.map(d => d.form)})`);
  data.forEach((block, i) => {
    const d = drawn[i];
    if (!d) return;
    c.check(d.first === 'msg-head' && d.from === block.from && d.detail === block.detail, `${block.form}: who it is from and when do not come first (${d.first}, ${d.from}, ${d.detail})`);
    const wants = block.lines.map(l => (block.form === 'thread' ? `${l.me ? 'You' : block.from}: ` : '') + l.text);
    c.check(JSON.stringify(d.lines.map(l => l.text)) === JSON.stringify(wants), `${block.form}: the lines are not the lines written, in order (${JSON.stringify(d.lines.map(l => l.text))})`);
    c.check(d.lines.every(l => l.rect.left >= d.box.left && l.rect.right <= d.box.right), `${block.form}: a line is wider than its message`);
  });
  const [friend, thread, note] = drawn;
  c.check(friend.lines.every(l => !l.me && l.rect.left === friend.lines[0].rect.left) && friend.lines.every(l => l.background !== 'rgba(0, 0, 0, 0)'), 'a friend\'s message is not lines at the left, each its own');
  const theirs = thread.lines.filter(l => !l.me), mine = thread.lines.filter(l => l.me);
  c.check(theirs.length === 1 && mine.length === 1 && mine.every(l => l.rect.right > theirs[0].rect.right && l.rect.left > theirs[0].rect.left), `a thread does not keep the other person's lines at the left and yours at the right (${JSON.stringify(thread.lines.map(l => [l.me, l.rect]))})`);
  c.check(thread.lines.every((l, i) => (data[1].lines[i].me ? /^You: /.test(l.text) : /^Jonas: /.test(l.text))), 'a thread does not name who wrote each line');
  c.check(note.cls.includes('msg-note') && note.lines.every(l => l.background === 'rgba(0, 0, 0, 0)' && l.rect.left === note.lines[0].rect.left && l.rect.right === note.lines[0].rect.right), 'a note is not drawn as a note: lines of its own on the page, not bubbles');
  c.check(await page.locator('.block-panel').count() === 1 && await page.locator('.block-panel .m.lab').textContent() === 'What counts as what they did', 'the checklist is not drawn with its own heading on a teaching screen');
  await plainWords(c, page, env, 'the three forms of a message');
}

async function theNarrowestPhone(env, c) {
  const { context, page } = await env.freshPage(c, 360);
  await openAccount(env, page);
  await jump(page, STEP.forms);
  const wide = await page.evaluate(() => [...document.querySelectorAll('.block-message, .msg-line, .block-panel')].filter(e => e.getBoundingClientRect().right > document.documentElement.clientWidth + 1).map(e => e.className));
  c.check(wide.length === 0, `a message or the checklist is wider than a phone at 360px (${wide})`);
  c.check(await env.horizontalOverflow(page) <= 0, 'the teaching screen of messages scrolls sideways at 360px');
  await context.close();
}

async function tappingAMessage(env, c, page) {
  await jump(page, STEP.helped);
  const rules = await page.evaluate(() => FC.get('account').meta.rules.act);
  let now = await look(page);
  c.check(now.key === 'g-1' && now.open.length === 1 && now.open[0].kind === 'tap', `the first question of the group is ${now.key}, with the tap first`);
  c.check(await page.locator('.msg-friend .msg-line [data-tap]').count() === 4, 'the four lines of a friend\'s message are not each a button');
  const panel = await page.evaluate(() => { const p = document.querySelector('.block-panel'); return p && { heading: p.querySelector('.m.lab').textContent, names: p.querySelectorAll('.panel-name').length, needs: [...p.querySelectorAll('[data-need]')].map(e => e.textContent).sort(), above: !!(p.compareDocumentPosition(document.querySelector('.asks')) & Node.DOCUMENT_POSITION_FOLLOWING) }; });
  c.check(!!panel && panel.heading === rules.heading && panel.names === 0 && JSON.stringify(panel.needs) === JSON.stringify(rules.needs.map(n => n.text).sort()) && panel.above, `the group that helps does not show the checklist, above the questions, under its own heading (${JSON.stringify(panel)})`);
  c.check(new RegExp(`${rules.heading} is shown beside the words`).test(await env.screenText(page)) && !/What the label needs/.test(await env.screenText(page)), 'the line over the questions does not name the checklist');
  await plainWords(c, page, env, 'a friend\'s message with the checklist beside it');
  await tapLine(page, 'g-1-c');   // a guess about why: not the line
  c.check(await page.locator('[data-tap]').count() === 0 && await page.locator('.msg-line .tapped').count() === 1, 'after the tap the lines are still buttons, or the line tapped is not shown as chosen');
  const text = await env.screenText(page);
  c.check(await page.locator('.tapped.wrong').count() === 1 && await page.locator('mark.cue').count() === 1 && await page.locator('.mark.no').count() === 1, 'the wrong line is not marked wrong, or the line that says what was done is not marked');
  const has = await page.evaluate(() => ({ heading: document.querySelector('[data-has] .m.lab').textContent, needs: document.querySelectorAll('[data-has] li').length }));
  c.check(has.heading === rules.heading && has.needs === 2 && !/What “What they did” needs/.test(text), `the needs are not listed under the checklist's own heading (${JSON.stringify(has)})`);
  await next(page);
  // a thread: the lines you sent can be tapped, and say what they are
  now = await look(page);
  c.check(now.key === 'g-2' && await page.locator('.msg-thread .msg-line [data-tap]').count() === 3 && await page.locator('.msg-thread .msg-line.me [data-tap]').count() === 2, `the three lines of a thread are not each a button (yours too) (${now.key})`);
  await tapLine(page, 'g-2-b');
  c.check(await page.locator('.msg-line.me .tapped.wrong').count() === 1, 'a line you sent, tapped, is not marked wrong');
  await next(page);
  // a note
  now = await look(page);
  c.check(now.key === 'g-3' && await page.locator('.msg-note .msg-line [data-tap]').count() === 3, `the three lines of a note are not each a button (${now.key})`);
  await answerAll(page);
  c.check(await page.locator('.msg-note .tapped.right').count() === 1 && await page.locator('mark.cue').count() === 1 && await page.locator('.mark.no').count() === 0, 'the right line of a note is not marked right');
  await plainWords(c, page, env, 'a note answered');
  await next(page);
  while (await page.locator('#qNext').count()) { await answerAll(page); await next(page); }   // the two that came back
}

async function theNeedsAfterTheHelpEnds(env, c, page) {
  await env.goOn(page);   // the break
  const first = await look(page);
  c.check(first.key === 'h-1', `the first question of the group without help is ${first.key}`);
  await answerAll(page);   // the tap, and a line written
  const heading = await page.evaluate(() => (document.querySelector('[data-has] .m.lab') || {}).textContent);
  c.check(heading === (await page.evaluate(() => FC.get('account').meta.rules.act.heading)), `the needs are not listed under the checklist's heading in a group without help (${heading})`);
}

export async function X34(env) {
  const c = env.checker('X34'), { context, page } = await env.freshPage(c, 390);
  await theNarrowestPhone(env, c);
  await theThreeForms(env, c, page);
  await tappingAMessage(env, c, page);
  await theNeedsAfterTheHelpEnds(env, c, page);
  await context.close();
  return c;
}

/* ---------- X35: a line to write, and four asks ---------- */
const MODEL = 'Dev ate Maya’s saved lunch.';
const stored = async (env, page) => JSON.parse((await env.storage(page))['pl:account:items'] || '{}');
const triesOf = async (env, page, key) => ((await stored(env, page))[key] || { tries: [] }).tries;

async function theLineToWrite(env, c, page) {
  await openAccount(env, page);
  await jump(page, STEP.plain);
  let now = await look(page);
  c.check(now.key === 'h-1' && now.open.length === 1 && now.open[0].id === 'act', `the first question is ${now.key}, with the tap first`);
  c.check(await page.locator('textarea').count() === 0, 'the box to write in is on the page before the tap is answered');
  await tapLine(page, 'h-1-b');
  now = await look(page);
  c.check(now.open.length === 1 && now.open[0].kind === 'text' && await page.locator('textarea[data-write="say"]').count() === 1, 'the box does not open when the tap is answered');
  c.check(!(await env.screenText(page)).includes(MODEL), 'the model line is on the page before the line is written');
  c.check(await page.locator('[data-write-answer="say"]').isDisabled() && await page.locator('[data-write-skip="say"]').isEnabled(), 'Answer is open with nothing written, or "Not yet" is not there');
  c.check(/stays on this phone/.test(await env.screenText(page)), 'the box does not say that what is written stays on the phone');
  c.check(await page.locator('#qNext').isDisabled(), 'Next is open before the line is written');
  // typing: kept across a repaint, no longer than 400, trimmed when kept
  const box = page.locator('textarea[data-write="say"]');
  await box.fill('He ate it  ');
  c.check(await page.locator('[data-write-answer="say"]').isEnabled(), 'Answer stays shut with words written');
  await page.evaluate(() => paintQueue());
  c.check(await page.locator('textarea[data-write="say"]').inputValue() === 'He ate it  ' && await page.locator('[data-write-answer="say"]').isEnabled(), 'what was typed is lost when the screen is painted again');
  await box.fill('');
  await page.keyboard.type('x'.repeat(450));
  c.check((await box.inputValue()).length === 400, `more than 400 characters can be typed (${(await box.inputValue()).length})`);
  const fits = await page.evaluate(() => { const b = document.querySelector('textarea[data-write]').getBoundingClientRect(); return b.left >= 0 && b.right <= document.documentElement.clientWidth; });
  c.check(fits, 'the box to write in is wider than the phone');
  await box.fill('   He ate   the leftovers I saved. ');
  await page.locator('[data-write-answer="say"]').click();
  const text = await env.screenText(page);
  const marks = await page.evaluate(() => [...document.querySelectorAll('.mark')].map(m => ({ cls: m.className, verd: m.querySelector('.verd').textContent, ans: m.querySelector('.ans').textContent })));
  c.check(marks.length === 3 && marks.filter(m => / no$/.test(m.cls)).length === 0 && marks.filter(m => / note$/.test(m.cls)).length === 2, `the tap is marked right and the two lines beside it are neither right nor wrong (${JSON.stringify(marks)})`);
  c.check(marks[1] && marks[1].verd === 'Your words' && marks[1].ans === 'He ate the leftovers I saved.' && marks[2] && marks[2].verd === 'A model line' && marks[2].ans === MODEL, `the words written are not shown trimmed beside the model line (${JSON.stringify(marks.slice(1))})`);
  c.check(/will not match word for word/.test(text), 'the feedback does not say how to compare the two');
  await plainWords(c, page, env, 'a line written beside its model');
  c.check(await page.locator('textarea:not([disabled])').count() === 0, 'the box can still be written in after the answer');
  const tries = await triesOf(env, page, 'h-1');
  c.check(tries.length === 1 && tries[0].a.say === 'He ate the leftovers I saved.' && JSON.stringify(Object.keys(tries[0].r)) === '["act"]' && tries[0].ok === true, `the try is not stored with the words written and the tap alone scored (${JSON.stringify(tries)})`);
  await next(page);
}

async function fourAsks(env, c, page) {
  let now = await look(page);
  const onScreen = () => page.locator('[data-ask]').evaluateAll(els => els.map(e => e.dataset.ask).join());
  c.check(now.key === 'h-2' && await onScreen() === 'act', `the question of four asks does not open with the tap (${now.key}, ${await onScreen()})`);
  await tapLine(page, 'h-2-b');
  c.check(await onScreen() === 'act,else', 'the second ask does not open when the first is answered');
  await page.locator('[data-ask="else"] [data-opt="busy"]').click();
  c.check(await onScreen() === 'act,else,word', 'the third ask does not open when the second is answered');
  await page.locator('[data-ask="word"] [data-opt="fits"]').click();   // not the answer: the next step opens
  c.check(await onScreen() === 'act,else,word,next', `the fourth ask does not open after the answer that calls for it (${await onScreen()})`);
  await page.locator('[data-ask="next"] [data-opt="find-out"]').click();
  const marks = await page.evaluate(() => [...document.querySelectorAll('.mark')].map(m => / no$/.test(m.className) ? 'no' : 'ok'));
  c.check(marks.join() === 'ok,ok,no,no', `the feedback does not have a mark for each of the four asks (${marks})`);
  const text = await env.screenText(page);
  c.check(/One act is not yet a pattern\./.test(text) && /There is something to name\./.test(text), 'a wrong word and a next step that jumps ahead do not show their own lines');
  const tries = await triesOf(env, page, 'h-2');
  c.check(tries.length === 1 && JSON.stringify(tries[0].a) === '{"act":["h-2-b"],"else":"busy","word":"fits","next":"find-out"}' && JSON.stringify(tries[0].r) === '{"act":"ok","else":"ok","word":"no","next":"jumped-ahead"}' && tries[0].ok === false,
    `a question of four asks is not stored as its four answers and four results (${JSON.stringify(tries)})`);
  await next(page);
}

async function aLineLeftForLater(env, c, page) {
  const now = await look(page);
  c.check(now.key === 'h-3' && now.open.length === 1 && now.open[0].id === 'act', `the next question is ${now.key}`);
  await tapLine(page, 'h-3-b');
  await page.locator('[data-write-skip="say"]').click();
  const text = await env.screenText(page);
  const marks = await page.evaluate(() => [...document.querySelectorAll('.mark')].map(m => / no$/.test(m.className) ? 'no' : / note$/.test(m.className) ? 'note' : 'ok'));
  c.check(marks.join() === 'ok,note,note' && /You did not write one\./.test(text) && /A model line/.test(text), `"Not yet" costs the question a mark, or the model is not shown (${marks})`);
  const tries = await triesOf(env, page, 'h-3');
  c.check(tries.length === 1 && tries[0].a.say === '' && tries[0].ok === true && JSON.stringify(Object.keys(tries[0].r)) === '["act"]', `"Not yet" is not stored as nothing written, with the question right (${JSON.stringify(tries)})`);
  await next(page);
  // the four-ask question that was missed comes back: this time the word is right, so the next step never opens
  const again = await look(page);
  c.check(again.key === 'h-2' && again.redo, `the missed question did not come back (${again.key})`);
  await tapLine(page, 'h-2-b');
  await page.locator('[data-ask="else"] [data-opt="busy"]').click();
  await page.locator('[data-ask="word"] [data-opt="ordinary"]').click();
  c.check(await page.locator('[data-ask]').evaluateAll(els => els.map(e => e.dataset.ask).join()) === 'act,else,word' && await page.locator('[data-feedback]').count() === 1, 'the fourth ask opened after an answer that does not call for it, or the feedback did not open without it');
  c.check(await page.locator('.mark').count() === 3 && await page.locator('.mark.no').count() === 0, 'three asks right is not three marks, all right');
  await next(page);
  c.check(/2 of 3 right the first time/.test(await env.screenText(page)), `the group does not end on "2 of 3 right the first time" (${(await env.screenText(page)).slice(0, 120)})`);
  await env.goOn(page);
}

async function theCheck(env, c, page) {
  let text = await env.screenText(page);
  c.check(/Four new questions/.test(text) && /At least 3 right/.test(text) && /You will not see any answer until the end/.test(text), `the check does not name itself (${text.slice(0, 200)})`);
  await env.goOn(page);
  for (const key of ['c-1', 'c-2', 'c-3', 'c-4']) {
    const now = await look(page);
    c.check(now.key === key && !now.redo, `the check does not ask ${key} next (${now.key})`);
    await answerAll(page, key === 'c-3' ? { write: { say: 'He told me.' } } : {});
    c.check(await page.locator('#qNext').isEnabled(), `${key}: the check leaves Next shut after an answer`);
    await next(page);
  }
  text = await env.screenText(page);
  const rules = await page.locator('.done-screen > table.results tr td:last-child').allTextContents();
  c.check(/4 of 4: passed/.test(text) && rules.join() === 'met', `the check was not passed 4 of 4 (${text.slice(0, 120)})`);
  const answers = await page.evaluate(() => [...document.querySelectorAll('.resitem')].map(r => ({ marks: r.querySelectorAll('.mark').length, text: r.textContent.replace(/\s+/g, ' ') })));
  c.check(answers.length === 4 && answers[2].marks === 3 && /Your words.*He told me\./.test(answers[2].text) && /A model line.*He said it was not happening and left the room\./.test(answers[2].text), `the words written are not shown with the answers at the end of the check (${JSON.stringify(answers.map(a => a.marks))})`);
  c.check(answers[3].marks === 3, 'the question of four asks has not a mark for each ask that opened');
  const tries = (await triesOf(env, page, 'c-3')).filter(t => t.context === 'check');
  c.check(tries.length === 1 && tries[0].a.say === 'He told me.' && tries[0].sup === false && JSON.stringify(Object.keys(tries[0].r)) === '["act"]', 'the words written in the check are not stored with its try');
  // the words are kept in the practice record and nowhere else: not in the log, not in the review's keys, never sent
  const all = await env.storage(page), elsewhere = Object.entries(all).filter(([k]) => k !== 'pl:account:items').filter(([, v]) => /He told me|He ate the leftovers I saved\./.test(v)).map(([k]) => k);
  c.check(elsewhere.length === 0, `the words written are kept somewhere other than the record of tries (${elsewhere})`);
}

async function atTheNarrowestPhone(env, c) {
  const { context, page } = await env.freshPage(c, 360);
  await openAccount(env, page);
  await jump(page, STEP.plain);
  await tapLine(page, 'h-1-b');
  const wide = await page.evaluate(() => [...document.querySelectorAll('.writeask, textarea, .block-message')].filter(e => e.getBoundingClientRect().right > document.documentElement.clientWidth + 1).map(e => e.className));
  c.check(wide.length === 0, `the box to write in is wider than a phone at 360px (${wide})`);
  await context.close();
}

export async function X35(env) {
  const c = env.checker('X35'), { context, page } = await env.freshPage(c, 390);
  await atTheNarrowestPhone(env, c);
  await theLineToWrite(env, c, page);
  await fourAsks(env, c, page);
  await aLineLeftForLater(env, c, page);
  await theCheck(env, c, page);
  await context.close();
  return c;
}

export const ACCOUNT_CHECKS = { X34, X35 };
