// X17, X18, X37, X38, X39 and X40, on the pressure of a message (lesson standard 3, 3.9, 4, 5, 9; new with step 8, 3 to 9). Each is a
// function of the environment (e2e-env.mjs) that drives the real app in Chromium on the test subject "Under pressure"
// (tests/fixtures/fixture-subject/pressure-*.js) and returns its checker; tests/e2e-controls.mjs runs each against the app with a seeded fault and
// requires exactly that check to go red.
//   X17  timed groups: the countdown runs on the frame clock (the test holds the clock and moves it), a late frame counts a quarter of a second, an answer
//        stops it, a new question and a leave start and stop it, opening the second ask of a question does not start it over, and at zero the question
//        is a timeout (not a slip) and waits for Next; a timed check hides what it would show
//   X18  the exchange: the turns follow the replies, pressure comes back on a reply that holds off, nothing is marked before the end, then the pushing
//        lines are marked and the reply where it could have ended is named; a missed call comes back
//   X37  the message in the forms of a phone: a text, an email with its subject, a pop-up with its title bar and button, a chat, a call, a banner; a link is
//        words and nothing that can be followed
//   X38  steps put in order (mixed, numbered as tapped, started again, scored whole or on the first step) and the busy task (the banner arrives after two
//        sorts and the clock starts then; the sorting is never kept)
//   X39  the plan and the own ways in: written once, kept under its own key, shown before the group that rehearses it and at the start of the review,
//        and nowhere else; the marks keep their day
//   X40  a baseline: measured not passed, held to the end, one closing line, recorded as its own context, never in the results or the schedule
// Layout of the screens that have answer buttons is X3's.
import { britishIn } from './american.mjs';

const MONDAY = '2026-11-02', WEDNESDAY = '2026-11-04';
export const STEP = { why: 0, forms: 1, worked: 2, timed: 3, call: 4, order: 5, busy: 6, plan: 7, setup: 8, planned: 9, check: 10 };
export const jump = (page, at) => page.evaluate(n => moveLesson(n), at);
export const openPressure = async (env, page, lesson = 'l1') => { await env.openSubject(page, 'pressure'); await env.clickVisible(page, `#screen [data-l="${lesson}"]`); };
const now = page => page.evaluate(() => ({ key: Q.list[Q.at].key, left: Q.cur.left, done: Q.cur.done, redo: !!Q.list[Q.at].redo, taps: Q.cur.taps, arrived: Q.cur.arrived, at: Q.at }));
const tapOn = (page, ask, option) => page.locator(`[data-ask="${ask}"] [data-opt="${option}"]`).click();
const nextQ = page => page.locator('#qNext').click();
const triesOf = async (env, page) => Object.entries(JSON.parse((await env.storage(page))['pl:pressure:items'] || '{}')).flatMap(([key, e]) => e.tries.map(t => ({ key, ...t })));
const notesOf = async (env, page) => JSON.parse((await env.storage(page))['pl:pressure:notes'] || 'null');
const plainWords = async (c, page, env, label) => {
  const jargon = await env.jargonShown(page), british = britishIn(await page.evaluate(() => document.querySelector('#screen').textContent));
  c.check(jargon.length === 0 && british.length === 0, `${label}: shows ${[...jargon, ...british].map(w => `"${w}"`).join(', ')}`);
};
// a page whose clock stands still until the test moves it; the timers the app starts are counted (the countdown must start none)
async function heldClock(env, c, width) {
  const r = await env.freshPage(c, width);
  await r.page.clock.install();
  await env.reload(r.page);
  await r.page.clock.pauseAt(new Date(Date.now() + 1000));   // from here time moves only when the test moves it
  await r.page.evaluate(() => { window.__timers = 0; ['setTimeout', 'setInterval'].forEach(n => { const real = window[n]; window[n] = (...a) => { if (!/\/vendor\/firebase\.js/.test(new Error().stack)) window.__timers++; return real(...a); }; }); });
  return r;
}
const timerNow = page => page.evaluate(() => { const t = document.querySelector('[data-timer]'); return t && { role: t.getAttribute('role'), num: t.querySelector('[data-timer-num]').textContent, width: parseFloat(t.querySelector('[data-timer-bar]').style.width) }; });

/* ---------- X3's walk of the screens of step 8, at one width ---------- */
// Every screen the pressure of a message adds, as a learner meets it: the six forms, a timed question and its second ask, the call mid-way and ended, the
// steps in order, the busy task with and without its banner, the plan and the own ways in, the plan before a group, the first screen of a timed check and a
// baseline with its result. Not empty, in plain words, in American English, nothing sideways, nothing cut off (env.inspect).
export async function walkPressure(env, c, page, label) {
  const at = name => env.inspect(c, page, `${label}/${name}`);
  // a tap that does nothing when its control is not there or is shut, so that a fault in what a tap does is its own check's to find, not this one's
  const tapIf = async selector => { const l = page.locator(selector).first(); if (await l.count() && await l.isEnabled()) await l.click(); };
  await openPressure(env, page);
  await jump(page, STEP.forms); await at('the six forms of a message');
  await jump(page, STEP.timed); await at('a timed question');
  await tapIf('[data-ask="act"] [data-opt="check"]'); await at('a timed question, how to check');
  await tapIf('[data-ask="via"] [data-opt="link"]'); await at('a timed question with its feedback');
  await jump(page, STEP.call); await at('a call, the first turn');
  await tapIf('[data-xopt="wait"]'); await at('a call, the pressure turn');
  await tapIf('[data-xopt="give2"]'); await at('a call, lost');
  await jump(page, STEP.order);
  await tapIf('[data-order-step="wait"]'); await at('steps in order, one tapped');
  for (const id of ['pass', 'report']) await tapIf(`[data-order-step="${id}"]`);
  await at('steps in order, answered wrong');
  await jump(page, STEP.busy); await at('the busy task, before the banner');
  await tapIf('[data-busy-bin]'); await tapIf('[data-busy-bin]'); await at('the busy task, with its banner');
  await jump(page, STEP.plan); await at('the plan, empty');
  await jump(page, STEP.setup); await at('the own ways in');
  await jump(page, STEP.check); await at('the first screen of a timed check');
  await env.openSubject(page, 'pressure'); await at('the subject');
  await env.clickVisible(page, '#screen [data-l="l0"]');
  await jump(page, 2); await at('the first screen of the baseline');
  await env.goOn(page);
  for (let i = 0; i < 5; i++) {
    const key = await page.evaluate(() => Q.list[Q.at].key);
    if (i === 0) await at(`a question of the baseline (${key})`);
    if (key === 'b-3') await tapIf('[data-xopt="hang"]');
    else if (key === 'b-4') { for (const id of ['bank', 'pass', 'report']) await tapIf(`[data-order-step="${id}"]`); }
    else await tapIf('[data-ask="act"] [data-opt="leave"]');
    await tapIf('#qNext');
  }
  await at('the result of the baseline');
}

/* ---------- X17: timed groups ---------- */
export async function X17(env) {
  const c = env.checker('X17'), { context, page } = await heldClock(env, c);
  await openPressure(env, page);
  await jump(page, STEP.timed);
  let t = await timerNow(page);
  c.check(!!t && t.role === 'timer' && t.num === '15' && t.width === 100, `a timed question does not open on 15 seconds and a full bar (${JSON.stringify(t)})`);
  await page.clock.runFor(5500);
  t = await timerNow(page);
  c.check(!!t && t.num === '10' && Math.abs(t.width - 63.3) < 1.5, `after five and a half seconds the clock does not show 10 and a bar of 63% (${JSON.stringify(t)})`);
  c.check(await page.evaluate(() => window.__timers) === 0, 'the countdown starts a timer: it is counted on the frame clock');
  // a frame that comes ten seconds late (a page left in the background) counts a quarter of a second, so it does not run out unseen
  const before = (await now(page)).left;
  await page.clock.fastForward(10000);
  const late = before - (await now(page)).left;
  c.check(late > 0 && late <= 0.3, `a frame ten seconds late took ${late} seconds off the clock, more than a quarter of a second or none`);
  // an answer stops it
  const first = (await now(page)).key;
  await tapOn(page, 'act', 'leave');
  c.check(await page.locator('[data-timer]').count() === 0, 'the clock is still on the screen after the answer');
  const frozen = (await now(page)).left;
  await page.clock.runFor(2000);
  c.check((await now(page)).left === frozen && (await now(page)).done, 'the clock kept counting after the answer');
  let tries = await triesOf(env, page);
  c.check(tries.length === 1 && tries[0].key === first && Number.isInteger(tries[0].ms) && tries[0].ms > 5000 && tries[0].ms < 8500 && !Object.values(tries[0].r).includes('timeout'), `an answer is not stored with the time it took and no timeout (${JSON.stringify(tries[0])})`);
  // a new question starts the clock again
  await nextQ(page);
  t = await timerNow(page);
  c.check(!!t && t.num === '15' && t.width === 100, `the next question does not start on 15 seconds (${JSON.stringify(t)})`);
  // at zero: a timeout, and the screen waits
  const second = (await now(page)).key;
  await page.clock.runFor(15500);
  const stopped = await now(page);
  c.check(stopped.key === second && stopped.done && await page.locator('#qNext').isEnabled(), `at zero the question did not stay on screen and wait for Next (${JSON.stringify(stopped)})`);
  c.check(await page.locator('[data-timer-up]').textContent().catch(() => '') === 'Time ran out', 'at zero the screen does not say the time ran out');
  c.check(await page.locator('[data-feedback]').count() === 1 && /Time ran out/.test(await page.locator('.mark.no .verd').first().textContent().catch(() => '')), 'at zero the feedback does not mark the question as out of time');
  const text = await env.screenText(page);
  await page.waitForTimeout(400);
  c.check(text === await env.screenText(page), 'the screen changed by itself after the time ran out');
  tries = await triesOf(env, page);
  const out = tries.find(x => x.key === second);
  c.check(!!out && JSON.stringify(out.r) === '{"act":"timeout"}' && JSON.stringify(out.a) === '{}' && out.ok === false && Math.abs(out.ms - 15000) < 60, `a question out of time is not stored as a timeout with no answer, 15 seconds and a miss (${JSON.stringify(out)})`);
  // the second ask opening does not start the clock over
  await nextQ(page);
  c.check((await now(page)).key === 't-3', 'the third question of the group is not the email');
  await page.clock.runFor(3500);
  await tapOn(page, 'act', 'check');
  t = await timerNow(page);
  c.check(!!t && t.num === '12' && (await now(page)).left < 12, `opening the second ask started the clock over (${JSON.stringify(t)})`);
  await page.clock.runFor(2000);
  await tapOn(page, 'via', 'own');
  tries = await triesOf(env, page);
  const third = tries.find(x => x.key === 't-3');
  c.check(!!third && third.r.act === 'ok' && third.r.via === 'ok' && third.ms > 5000 && third.ms < 6000, `a question of two asks answered in time is not stored with both results and the time of the whole (${JSON.stringify(third)})`);
  // the missed one comes back, and leaving stops the clock
  await nextQ(page);
  c.check((await now(page)).redo === true && (await timerNow(page)) && (await timerNow(page)).num === '15', 'the question that ran out of time did not come back on a new clock');
  const stored = (await triesOf(env, page)).length;
  await env.toLibrary(page);
  await page.clock.runFor(20000);
  c.check((await triesOf(env, page)).length === stored, 'a question left in the middle ran out of time with the learner away');
  // a timed check holds back what it would show
  await openPressure(env, page);
  await jump(page, STEP.check);
  c.check(/You have 20 seconds for each/.test(await env.screenText(page)), 'the first screen of the timed check does not say how long each question has');
  await env.goOn(page);
  t = await timerNow(page);
  c.check(!!t && t.num === '20', `a timed check does not give 20 seconds (${JSON.stringify(t)})`);
  await page.clock.runFor(20500);
  c.check(await page.locator('[data-timer-up]').count() === 1 && /Time ran out/.test(await env.screenText(page)), 'a timed check does not say the time ran out');
  c.check(await page.locator('[data-ask] .opt:not([disabled])').count() === 0 && await page.locator('#qNext').isEnabled(), 'the answers of a question out of time can still be tapped, or Next is shut');
  await context.close();
  return c;
}

/* ---------- X18: the exchange ---------- */
const exchange = page => page.evaluate(() => ({
  opts: [...document.querySelectorAll('[data-xopt]')].map(b => b.dataset.xopt),
  lines: [...document.querySelectorAll('.exchange .msg-line')].map(l => l.textContent.replace(/\s+/g, ' ').trim()),
  push: document.querySelectorAll('.pushnote').length, cue: document.querySelectorAll('.exchange mark.cue').length,
  feedback: document.querySelectorAll('[data-feedback]').length, over: document.querySelectorAll('.exchange-over').length,
  timer: document.querySelectorAll('[data-timer]').length }));
export async function X18(env) {
  const c = env.checker('X18'), { context, page } = await env.freshPage(c);
  await openPressure(env, page);
  await jump(page, STEP.call);
  let x = await exchange(page);
  c.check(JSON.stringify(x.opts) === '["give","wait","hang"]' && x.lines.length === 2 && /Read me the code we just texted you/.test(x.lines[1]), `the call does not open on the caller's two lines and three replies (${JSON.stringify(x)})`);
  c.check(x.push === 0 && x.cue === 0 && x.feedback === 0 && x.timer === 0, 'the first turn marks its pressure, shows feedback or is on a clock before the end');
  // a reply that holds off: the pressure comes back
  await page.locator('[data-xopt="wait"]').click();
  x = await exchange(page);
  c.check(x.lines.length === 4 && /^You: Say you will call the bank back first/.test(x.lines[2]) && /Do not hang up, or the money is gone/.test(x.lines[3]) && JSON.stringify(x.opts) === '["give2","hang2"]',
    `a reply that holds off does not bring the pressure turn after it (${JSON.stringify(x)})`);
  c.check(x.push === 0 && x.cue === 0 && x.feedback === 0 && x.over === 0, 'a turn in the middle shows feedback, marks or says the call is over');
  // give in: the pushing lines are marked at the end
  await page.locator('[data-xopt="give2"]').click();
  x = await exchange(page);
  const text = await env.screenText(page);
  c.check(x.feedback === 1 && x.over === 1 && x.opts.length === 0 && /The call is over/.test(text), 'the call does not end on the reply that ends it');
  c.check(x.push === 2 && x.cue === 3 && await page.locator('.pushlist li').count() === 2, `the pushing turns are not marked at the end, with the lines that pushed (${x.push} notes, ${x.cue} lines)`);
  c.check(/It hurries you and frightens you/.test(text) && /It uses a threat to keep you on the line/.test(text), 'the ways it pushed are not named');
  c.check(/You could have ended it at your first reply: “Hang up and call the number on my card”/.test(text), 'the reply where it could have ended is not named');
  c.check(await page.locator('.mark.no').count() === 1 && /Not this one/.test(await page.locator('.mark.no').textContent()) && /The code let them in/.test(await page.locator('.mark.no').textContent()), 'the call that was lost is not marked, with what happened next');
  let tries = await triesOf(env, page);
  c.check(tries.length === 1 && JSON.stringify(tries[0].a) === '{"call":["wait","give2"]}' && JSON.stringify(tries[0].r) === '{"call":"acted"}' && tries[0].ok === false, `a lost call is not stored as the replies picked and the slip of its end (${JSON.stringify(tries[0])})`);
  await plainWords(c, page, env, 'a call that was lost');
  // the missed call comes back, and ending it at the first chance is named
  await nextQ(page);
  c.check((await now(page)).redo === true, 'the call that was lost did not come back');
  await page.locator('[data-xopt="hang"]').click();
  const text2 = await env.screenText(page);
  c.check(/You ended it as soon as you could/.test(text2) && /Your bank said it had not called/.test(text2) && await page.locator('.mark:not(.no)').count() === 1, 'a call ended at the first chance is not marked right and named so');
  tries = await triesOf(env, page);
  c.check(tries.length === 2 && JSON.stringify(tries[1].a) === '{"call":["hang"]}' && JSON.stringify(tries[1].r) === '{"call":"ok"}', 'a call that ended well is not stored as the reply picked and ok');
  await context.close();
  return c;
}

/* ---------- X37: the forms of a message ---------- */
export async function X37(env) {
  const c = env.checker('X37'), { context, page } = await env.freshPage(c, 390);
  await openPressure(env, page);
  await jump(page, STEP.forms);
  const data = await page.evaluate(() => FC.get('pressure').lessons.l1.flow[0].show);
  const drawn = await page.evaluate(() => [...document.querySelectorAll('.block-message')].map(m => {
    const el = s => m.querySelector(s), box = e => { const r = e.getBoundingClientRect(); return { right: Math.round(r.right), top: Math.round(r.top) }; };
    return { form: m.dataset.message, subject: el('.msg-subject') && el('.msg-subject').textContent.replace(/^Subject: /, ''), link: el('.msg-link span:not(.sr)') && el('.msg-link span:not(.sr)').textContent,
      button: el('.msg-button span:not(.sr)') && el('.msg-button span:not(.sr)').textContent, followable: m.querySelectorAll('a, [href], button, [role="button"], [tabindex]').length,
      height: Math.round(m.getBoundingClientRect().height), headBg: getComputedStyle(el('.msg-head')).backgroundColor, bodyBg: getComputedStyle(el('.msg-line')).backgroundColor,
      lineStyle: getComputedStyle(el('.msg-line')).fontStyle, lines: m.querySelectorAll('.msg-line').length, caller: el('.msg-line .sr') && el('.msg-line .sr').textContent,
      subjectAfterHead: !!(el('.msg-head').compareDocumentPosition(el('.msg-subject') || el('.msg-head')) & Node.DOCUMENT_POSITION_FOLLOWING),
      linkAfterLines: el('.msg-link, .msg-button') ? !!(el('.msg-lines').compareDocumentPosition(el('.msg-link, .msg-button')) & Node.DOCUMENT_POSITION_FOLLOWING) : null,
      sent: [...m.querySelectorAll('.msg-line')].map(l => ({ me: l.classList.contains('me'), ...box(l) })) };
  }));
  c.check(drawn.map(d => d.form).join() === 'sms,email,popup,chat,call,banner', `the six forms are not drawn in order (${drawn.map(d => d.form)})`);
  const [sms, email, popup, chat, call, banner] = drawn;
  const words = (list, form) => list.find(b => b.form === form);
  if (sms) c.check(sms.link === words(data, 'sms').link && sms.linkAfterLines === true && sms.subject === null, `a text does not show its link words after its bubbles (${JSON.stringify([sms.link, sms.linkAfterLines])})`);
  if (email) c.check(email.subject === words(data, 'email').subject && email.subjectAfterHead && email.link === words(data, 'email').link && email.bodyBg === 'rgba(0, 0, 0, 0)', `an email does not show its subject under who it is from, its body as a page and its link words (${JSON.stringify([email.subject, email.subjectAfterHead, email.bodyBg])})`);
  if (popup) c.check(popup.button === words(data, 'popup').link && popup.link === null && popup.headBg !== 'rgba(0, 0, 0, 0)' && popup.linkAfterLines === true, `a pop-up does not show a title bar and its button (${JSON.stringify([popup.button, popup.headBg])})`);
  if (chat) {
    const mine = chat.sent.filter(s => s.me), theirs = chat.sent.filter(s => !s.me);
    c.check(mine.length === 1 && theirs.length === 2 && mine[0].right > theirs[0].right && chat.link === words(data, 'chat').link, `a chat does not keep yours at the right and show its link (${JSON.stringify(chat.sent)})`);
  }
  if (call) c.check(call.lineStyle === 'italic' && call.caller === 'The caller says: ' && call.lines === 2 && call.link === null, `a call is not the caller's words as a transcript (${JSON.stringify([call.lineStyle, call.caller])})`);
  if (banner) c.check(banner.lines === 1 && banner.height < 110 && banner.link === null, `a banner is not one short line (${banner.height}px, ${banner.lines} lines)`);
  c.check(drawn.every(d => d.followable === 0), `a message holds something that can be followed or tapped: ${drawn.filter(d => d.followable).map(d => d.form)}`);
  await plainWords(c, page, env, 'the six forms of a message');
  await context.close();
  const narrow = await env.freshPage(c, 360);
  await openPressure(env, narrow.page);
  await jump(narrow.page, STEP.forms);
  const wide = await narrow.page.evaluate(() => [...document.querySelectorAll('.block-message, .msg-line, .msg-link, .msg-button')].filter(e => e.getBoundingClientRect().right > document.documentElement.clientWidth + 1).map(e => e.className));
  c.check(wide.length === 0 && await env.horizontalOverflow(narrow.page) <= 0, `a message is wider than a phone at 360px (${wide})`);
  await narrow.context.close();
  return c;
}

/* ---------- X38: steps in order, and the busy task ---------- */
export async function X38(env) {
  const c = env.checker('X38'), { context, page } = await heldClock(env, c);
  await openPressure(env, page);
  await jump(page, STEP.order);
  // o-1: all three steps in place; the steps are mixed, numbered as tapped, started again
  const shown = () => page.evaluate(() => [...document.querySelectorAll('[data-order-step]')].map(b => ({ id: b.dataset.orderStep, no: b.querySelector('.orderno') && b.querySelector('.orderno').textContent, off: b.disabled })));
  let steps = await shown();
  c.check(steps.length === 4 && steps.slice(0, 3).map(s => s.id).join() !== 'bank,pass,report', `the steps are offered in the right order (${steps.map(s => s.id)})`);
  c.check(/Tap the three steps in the order you would do them\./.test(await env.screenText(page)), 'the question does not say how many steps to tap');
  await page.locator('[data-order-step="bank"]').click();
  steps = await shown();
  c.check(steps.find(s => s.id === 'bank').no === '1' && steps.find(s => s.id === 'bank').off && await page.locator('[data-order-reset]').count() === 1, 'a tapped step is not numbered and shut');
  await page.locator('[data-order-reset]').click();
  steps = await shown();
  c.check(steps.every(s => !s.no && !s.off) && await page.locator('[data-order-reset]').count() === 0, '"Start again" does not clear the taps');
  await page.locator('[data-order-step="wait"]').click();
  await page.locator('[data-order-step="pass"]').click();
  c.check(await page.locator('[data-feedback]').count() === 0, 'the order is answered before every step is tapped');
  await page.locator('[data-order-step="report"]').click();
  let text = await env.screenText(page);
  c.check(await page.locator('.mark.no').count() === 1 && /The answer: Call my bank on the number on my card, then Change my password on the real site, then Report it/.test(text) && /You put: Wait a few days, then Change my password/.test(text) && /A bank can sometimes stop a payment in the first hours/.test(text), `a wrong order is not marked with the right order, what was put and why it matters`);
  await nextQ(page);
  // o-2: only the first step counts
  c.check((await now(page)).key === 'o-2', 'the second question of the group is not the one scored on its first step');
  await page.locator('[data-order-step="bank"]').click();
  await page.locator('[data-order-step="wait"]').click();
  await page.locator('[data-order-step="report"]').click();
  c.check(await page.locator('.mark:not(.no)').count() === 1 && await page.locator('.mark.no').count() === 0, 'an order with the right first step is not right when the rest is not');
  await nextQ(page);
  c.check((await now(page)).redo === true && (await now(page)).key === 'o-1', 'the order that was missed did not come back');
  for (const id of ['bank', 'pass', 'report']) await page.locator(`[data-order-step="${id}"]`).click();
  const tries = await triesOf(env, page);
  c.check(JSON.stringify(tries.filter(t => t.key === 'o-1').map(t => [t.a.order, t.r.order])) === '[[["wait","pass","report"],"no"],[["bank","pass","report"],"ok"]]', `the orders are not stored as the steps tapped and their result (${JSON.stringify(tries.map(t => [t.key, t.a, t.r]))})`);
  // the busy task
  await jump(page, STEP.busy);
  let t = await timerNow(page);
  c.check(await page.locator('[data-busy]').count() === 1 && await page.locator('.block-message').count() === 0 && t === null && /Nothing sorted yet/.test(await env.screenText(page)), 'the busy task does not open alone, with nothing sorted and no banner or clock');
  await page.clock.runFor(3000);
  c.check((await now(page)).left === 15, 'the clock of a question in the busy task runs before its banner arrives');
  await page.locator('[data-busy-bin]').first().click();
  c.check(await page.locator('.block-message').count() === 0 && /One sorted so far/.test(await env.screenText(page)), 'the banner arrives after one sort');
  await page.locator('[data-busy-bin]').first().click();
  const arrived = await page.evaluate(() => { const b = document.querySelector('.msg-banner'), t = document.querySelector('[data-busy]'); return { banner: !!b, above: !!b && !!(b.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING), task: !!t, ask: document.querySelectorAll('[data-ask="act"]').length }; });
  c.check(arrived.banner && arrived.above && arrived.task && arrived.ask === 1, `the banner does not arrive over the busy task, with its question, after two sorts (${JSON.stringify(arrived)})`);
  t = await timerNow(page);
  c.check(!!t && t.num === '15', `the clock does not start at 15 when the banner arrives (${JSON.stringify(t)})`);
  await page.clock.runFor(2500);
  c.check((await timerNow(page)).num === '13' && await page.locator('[data-busy]').count() === 1, 'the clock does not run while the busy task is in front of the learner');
  await page.locator('[data-busy-bin]').first().click();
  c.check((await now(page)).left < 13 && (await now(page)).left > 12 && /Three sorted so far/.test(await env.screenText(page)), 'sorting while a banner is there stops or restarts the clock');
  await tapOn(page, 'act', 'leave');
  await nextQ(page);
  c.check(await page.locator('.block-message').count() === 0 && await timerNow(page) === null && /Three sorted so far/.test(await env.screenText(page)) && /Where does Eggs go\?/.test(await env.screenText(page)), 'the next question does not wait for two more sorts, with the list carried on');
  const kept = await triesOf(env, page);
  const keys = Object.keys(await env.storage(page)).filter(k => k.startsWith('pl:pressure'));
  c.check(kept.filter(x => x.key.startsWith('y-')).length === 1 && kept.every(x => ['o-1', 'o-2', 'y-1', 'y-2'].includes(x.key) && Object.keys(x.a).every(k => ['act', 'via', 'order'].includes(k))) && keys.every(k => !/sort|busy/i.test(k)), `the sorting was kept: ${JSON.stringify([keys, kept.map(x => x.key)])}`);
  await context.close();
  return c;
}

/* ---------- X39: the plan and the own ways in ---------- */
export async function X39(env) {
  const c = env.checker('X39'), { context, page } = await env.freshPage(c, 390);
  await env.setDay(page, MONDAY);
  await openPressure(env, page);
  // no plan yet: the group goes straight to its first question
  await jump(page, STEP.planned);
  c.check(await page.locator('[data-ask="act"]').count() === 1 && !/before you start/i.test(await env.screenText(page)), 'a group that rehearses the plan shows a plan screen when there is none');
  await jump(page, STEP.plan);
  c.check(await page.locator('[data-own-plan] input').count() === 2 && /One plan, for when a request comes/.test(await env.screenText(page)) && /Only you can see it/.test(await env.screenText(page)), 'the plan step does not show its two boxes and say it stays on the phone');
  await page.locator('#planSave').click();
  c.check(await page.locator('.fielderr').count() === 2 && (await notesOf(env, page)) === null, 'a plan with nothing written is saved or not refused under both boxes');
  await page.fill('#own-cue', 'a text wants a code');
  await page.fill('#own-then', 'hang up and call the number on my card');
  await page.locator('#planSave').click();
  c.check(await page.locator('[data-plan-sentence]').textContent() === 'If a text wants a code, I will hang up and call the number on my card.', 'the saved plan is not shown as one sentence');
  const saved = await notesOf(env, page);
  c.check(saved && JSON.stringify(Object.keys(saved)) === '["plan"]' && JSON.stringify(Object.keys(saved.plan).sort()) === '["cue","saved","then"]' && /^\d{4}-\d\d-\d\d$/.test(saved.plan.saved) && saved.plan.cue === 'a text wants a code', `the plan is not kept as { cue, then, saved } and nothing else (${JSON.stringify(saved)})`);
  await env.inspect(c, page, 'the plan, saved');
  await plainWords(c, page, env, 'the plan step');
  await page.locator('#planChange').click();
  c.check(await page.locator('#own-cue').inputValue() === 'a text wants a code', 'changing the plan does not open it with what was written');
  await page.locator('#planSkip').click();   // leaves the lesson step without saving a change
  // the own ways in
  c.check(await page.locator('[data-setup]').count() === 2 && await page.locator('.setuprow.done').count() === 0, 'the own ways in do not list the two things, none done');
  await page.locator('[data-setup-mark="bank"]').click();
  let notes = await notesOf(env, page);
  c.check(notes.setup && JSON.stringify(Object.keys(notes.setup)) === '["bank"]' && notes.setup.bank === saved.plan.saved && await page.locator('.setuprow.done').count() === 1, `a thing marked done is not kept with its day (${JSON.stringify(notes.setup)})`);
  await page.locator('[data-setup-clear="bank"]').click();
  c.check(Object.keys((await notesOf(env, page)).setup).length === 0 && await page.locator('.setuprow.done').count() === 0, 'a mark taken off stays on');
  await page.locator('[data-setup-mark="app"]').click();
  await env.inspect(c, page, 'the own ways in, one marked');
  // the plan is shown once before the group that rehearses it
  await jump(page, STEP.planned);
  const before = await env.screenText(page);
  c.check(/Your plan, before you start/.test(before) && before.includes('If a text wants a code, I will hang up and call the number on my card.') && await page.locator('[data-ask]').count() === 0, 'the group that rehearses the plan does not show it first');
  await env.inspect(c, page, 'the plan before a group');
  await env.goOn(page);
  c.check(await page.locator('[data-ask="act"]').count() === 1 && !/before you start/i.test(await env.screenText(page)), 'the plan is shown again after the learner has gone on');
  // it is shown on the subject screen, and on no other
  await env.openSubject(page, 'pressure');
  const subject = await env.screenText(page);
  c.check(subject.includes('If a text wants a code, I will hang up and call the number on my card.') && /Done Nov 2/.test(subject) && /Your plan and your own ways in/.test(subject), 'the subject screen does not show the plan and the marks');
  await env.inspect(c, page, 'the subject screen with a plan');
  const elsewhere = [];
  for (const v of ['library', 'review', 'progress']) { await env.clickVisible(page, `[data-v="${v}"]`); if ((await env.screenText(page)).includes('hang up and call')) elsewhere.push(v); }
  await env.toLibrary(page);
  await env.clickVisible(page, '[data-v="search"]');
  await page.fill('#q', 'hang up');
  if (/call the number on my card/.test(await env.screenText(page))) elsewhere.push('search');
  c.check(elsewhere.length === 0, `the plan is shown on: ${elsewhere}`);
  const others = Object.entries(await env.storage(page)).filter(([k, v]) => k !== 'pl:pressure:notes' && v.includes('hang up and call')).map(([k]) => k);
  c.check(others.length === 0, `the plan is kept under: ${others}`);
  // the review: the plan once at the start
  await openPressure(env, page);
  await jump(page, STEP.check);
  await env.goOn(page);
  for (let i = 0; i < 4; i++) { await tapOn(page, 'act', 'leave'); await nextQ(page); }
  await env.setDay(page, WEDNESDAY);
  await env.toLibrary(page);
  await page.locator('[data-review-start]').first().click();
  const intro = await env.screenText(page);
  c.check(/Under pressure/.test(intro) && intro.includes('If a text wants a code, I will hang up and call the number on my card.') && /This is the plan you wrote/.test(intro), `the review does not show the plan at the start of the subject's part (${intro.slice(0, 200)})`);
  await context.close();
  return c;
}

/* ---------- X40: the baseline ---------- */
export async function X40(env) {
  const c = env.checker('X40'), { context, page } = await env.freshPage(c, 390);
  await env.setDay(page, MONDAY);
  await env.openSubject(page, 'pressure');
  const subject = await env.screenText(page);
  c.check(/Start: Before you start/.test(subject) && /Before you start\s*Rev 1 · Not started/.test(subject) && subject.indexOf('Before you start') < subject.indexOf('Act, check or leave'), `the baseline is not the first lesson, with the start button (${subject.slice(0, 300)})`);
  await env.clickVisible(page, '#screen [data-l="l0"]');
  await env.goOn(page); await env.goOn(page);
  const intro = await env.screenText(page);
  c.check(/Five things/.test(intro) && /Nothing here is graded/.test(intro) && /20 seconds/.test(intro) && !/To pass/.test(intro) && await page.locator('.done-screen, .lesson ul').count() === 0, `the baseline does not say what it is, with no rule to pass (${intro.slice(0, 260)})`);
  await env.goOn(page);
  // b-1 a real code (do it), b-2 a scam (do what it says: the failure), b-3 the call (hang up), b-4 the steps (the bank first), b-5 a real statement (leave it)
  const seen = [];
  const play = {
    'b-1': () => tapOn(page, 'act', 'act'), 'b-2': () => tapOn(page, 'act', 'act'), 'b-3': () => page.locator('[data-xopt="hang"]').click(),
    'b-4': async () => { for (const id of ['bank', 'pass', 'report']) { if (await page.locator('#qNext').isEnabled()) break; await page.locator(`[data-order-step="${id}"]`).click(); } }, 'b-5': () => tapOn(page, 'act', 'leave') };
  for (let i = 0; i < 5; i++) {
    const s = await now(page);
    seen.push(s.key);
    if (s.key === 'b-3') c.check(s.left === null && await page.locator('[data-timer]').count() === 0, 'the call of the baseline is on a clock');
    else c.check(s.left !== null && s.left > 19 && s.left <= 20, `a message of the baseline does not have 20 seconds (${s.key}: ${s.left})`);
    await play[s.key]();
    await nextQ(page);
  }
  c.check(seen.join() === 'b-1,b-2,b-3,b-4,b-5', `the baseline is not its five questions in order (${seen})`);
  const done = await env.screenText(page);
  const line = await page.locator('[data-baseline-line]').textContent();
  c.check(/Done/.test(done) && line === 'Of 3 scams, you did what a scam asked on 1. Of 2 real messages, you handled 2 the right way.', `the baseline does not end on its one line (${line})`);
  c.check(await page.locator('table.results').count() === 0 && await page.locator('.resitem').count() === 0 && !/passed|not yet|Every answer/.test(done), 'the baseline is passed or failed, or shows its answers');
  c.check(/This was not graded/.test(done) && await page.locator('#toNext').count() === 1, 'the baseline does not say it was not graded and offer the next lesson');
  await plainWords(c, page, env, 'the result of the baseline');
  // what is kept
  const tries = await triesOf(env, page);
  c.check(tries.length === 5 && tries.every(t => t.context === 'baseline' && t.lesson === 'l0'), `the baseline is not stored as five tries in its own context (${JSON.stringify([...new Set(tries.map(t => t.context))])})`);
  c.check(tries.find(t => t.key === 'b-2').r.act === 'acted' && tries.find(t => t.key === 'b-3').r.call === 'ok', 'the failure of the baseline is not stored as the slip');
  await env.openSubject(page, 'pressure');
  const after = await env.screenText(page);
  c.check(/Before you start\s*Rev 1 · Done Nov 2/.test(after) && /Start: Act, check or leave/.test(after) && await page.locator('[data-again]').count() === 0, `the subject screen does not show the baseline done and offer the next lesson (${after.slice(0, 260)})`);
  await env.clickVisible(page, '#screen [data-v="results"]');
  const results = await env.screenText(page);
  const byLesson = results.slice(results.indexOf('Right the first time, by lesson'), results.indexOf('Right the first time, side by side'));
  c.check(!/Before you start/.test(byLesson) && /Before you start, Nov 2/.test(results) && results.includes('Of 3 scams, you did what a scam asked on 1.'), `the results count the baseline among the lessons, or do not show what it found (${byLesson})`);
  c.check(/Right the first time, side by side\s*Nothing yet/.test(results), 'the baseline is counted in the results of the first tries side by side')
  const due = await page.evaluate(() => ({ strands: dueStrands(FC.get('pressure'), 'pressure', '2099-01-01').length, tile: document.body.textContent }));
  c.check(due.strands === 0, 'the baseline starts the schedule of a topic');
  await env.toLibrary(page);
  c.check(/starts when you finish a lesson/.test(await page.locator('[data-review-tile]').textContent()), 'the baseline starts the review');
  await context.close();
  return c;
}

export const PRESSURE_CHECKS = { X17, X18, X37, X38, X39, X40 };
