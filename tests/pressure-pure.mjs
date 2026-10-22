// The pure half of step 8 (lesson standard 3, 3.9, 4, 5, 3 to 9): the six forms of a message laid out, a call that pushes back walked down every
// path, steps put in order, the countdown's arithmetic, the busy task, the plan and the own ways in, a baseline kept apart from every figure; and what
// must be true of Scams' lessons as data: half of every group real, a real message never marked as the failure whatever it contains, a real
// invoice paid the way you already pay, no scam whose best action is to do what it says, invented names only; and of lessons 1 to 6: each lesson's
// questions belong to its own topic, the kind of request has one right answer and its line moves, every answer follows the subject's one rule (only a
// message that wants something is asked what to do; how to check only when checking is right; what else only after leaving it), the way to check has one way
// you already had among wrong ones not all from the message,
// and each call or chat that pushes can be ended at every turn; and of lessons 7 to 12: their calls that push and the real calls you placed, the busy
// task's banners, the real-world test with its retest and reserve, and the first step after each kind of loss. No browser: the app's scripts are loaded as
// in tests/load-app.mjs, with the test subjects (tests/fixtures/fixture-subject).
// Run: node tests/pressure-pure.mjs
import { loadApp } from './load-app.mjs';
import { MESSAGE_FORMS as SHAPE_FORMS } from './lessons/shapes.mjs';

const failures = [];
let checks = 0;
const check = (ok, msg) => { checks++; if (!ok) failures.push(msg); };
const same = (a, b, msg) => check(JSON.stringify(a) === JSON.stringify(b), `${msg}: got ${JSON.stringify(a)}, wanted ${JSON.stringify(b)}`);
const app = await loadApp({ fixture: true });
const { FC, SAY, MESSAGE_FORMS, MESSAGE_LINK_FORMS, MESSAGE_YOURS, messageHtml, scoreExchange, exchangeWalk, exchangePaths, exchangeReach, exchangeLoops, exchangeReview,
  scoreOrder, orderShown, orderReady, orderOpen, orderProblems, orderRightText, TIMER_SECONDS, timerAfter, timerShown, timerShare, timerHtml, BUSY_THINGS, BUSY_BINS, BUSY_TAPS_BEFORE, busyThing, busyHtml,
  planFromDraft, planSentence, setupMarked, setupCleared, setupDone, baselineLine, checkContext, recordTry, completeRuns, lessonDone, dueStrands, chooseOptions,
  scoreChoose, ASK_KINDS, itemHtml, feedbackHtml } = app;
const pressure = FC.get('pressure'), scams = FC.get('scams');

/* ---------- the six forms of a message ---------- */
same(MESSAGE_FORMS, SHAPE_FORMS, 'the forms of a message are the same in the engine and in the validator\'s shape');
same(MESSAGE_FORMS.slice(3), ['sms', 'email', 'popup', 'chat', 'call', 'banner'], 'the forms of a phone, after the three of step 7');
{
  const shown = pressure.lessons.l1.flow[0].show, by = form => shown.find(b => b.form === form), html = form => messageHtml(by(form), {});
  const [sms, email, popup, chat, call, banner] = ['sms', 'email', 'popup', 'chat', 'call', 'banner'].map(html);
  check(sms.includes('class="msg-link"') && sms.indexOf('msg-lines') < sms.indexOf('msg-link') && sms.includes(by('sms').link), 'a text shows its link words after its bubbles');
  check(email.includes('class="msg-subject"') && email.indexOf('msg-head') < email.indexOf('msg-subject') && email.indexOf('msg-subject') < email.indexOf('msg-lines') && email.includes(by('email').subject), 'an email shows its subject under who it is from, before the body');
  check(popup.includes('class="msg-button"') && !popup.includes('class="msg-link"') && popup.includes('Call support'), 'a pop-up shows a button, not a link');
  check(/msg-line me"/.test(chat) && chat.includes('<span class="sr">You: </span>') && chat.includes('<span class="sr">Dana on Fernbrook Market: </span>') && chat.includes('class="msg-link"'), 'a chat keeps yours apart, names each line, and shows its link');
  check(call.includes('<span class="sr">The caller says: </span>') && !call.includes('msg-link') && !/ me"/.test(call), 'a call is the caller\'s words, named for a reader who cannot see it');
  check((banner.match(/class="msg-line[ "]/g) || []).length === 1 && !banner.includes('msg-link'), 'a banner is one short line');
  [sms, email, popup, chat, call, banner].forEach((h, i) => check(!/<a[ >]|href=|<button/.test(h), `the form ${MESSAGE_FORMS[i + 3]} holds nothing that can be followed or tapped`));
  same(MESSAGE_LINK_FORMS, ['sms', 'email', 'popup', 'chat', 'banner'], 'the forms that carry a link or a button');
  same(MESSAGE_YOURS, ['thread', 'chat'], 'the forms that carry lines of your own');
}

/* ---------- a call that pushes back, down every path ---------- */
{
  const ask = pressure.items['x-1'].asks[0], paths = exchangePaths(ask);
  same(paths.map(p => p.path.join('>')), ['give', 'wait>give2', 'wait>hang2', 'hang'], 'the ways through the call');
  paths.forEach(p => same(scoreExchange(pressure, ask, p.path), ask.ends[p.end].ok ? 'ok' : (ask.ends[p.end].slip || 'no'), `the result of ${p.path.join('>')} is the result of its end`));
  same(paths.filter(p => ask.ends[p.end].ok).map(p => p.path.join('>')), ['wait>hang2', 'hang'], 'two ways end it right: at the first chance and after holding off');
  check(scoreExchange(pressure, ask, ['wait']) === 'no' && scoreExchange(pressure, ask, []) === 'no', 'a call not yet ended is not scored right');
  check(scoreExchange(pressure, ask, ['hang2']) === 'no' && scoreExchange(pressure, ask, ['wait', 'hang']) === 'no', 'a reply that is not an option of its turn scores nothing');
  const walk = exchangeWalk(ask, ['wait']);
  check(walk.at === 'two' && walk.end === null && walk.steps.length === 1, 'a reply that holds off goes on to the pressure turn');
  same(exchangeWalk(ask, ['wait', 'give2']).end, 'gave', 'the end reached');
  // the review of a call that was lost: both pushing turns are named, and it could have ended at the first reply
  const lost = exchangeReview(ask, ['wait', 'give2']);
  same(lost.pushed.map(p => p.n), [1, 2], 'the pushing turns on the way');
  check(lost.could && lost.could.n === 1 && lost.could.option.id === 'hang' && lost.could.took === false, 'it could have ended at the first reply, which was not the one taken');
  check(exchangeReview(ask, ['hang']).could.took === true, 'ending it at the first chance is named so');
  const late = exchangeReview(ask, ['wait', 'hang2']);
  check(late.could.n === 1 && late.could.took === false && late.end.ok, 'ending it late is right, and the first chance is still named');
  same([...exchangeReach(ask)].sort(), ['one', 'two'], 'the turns that can be reached');
  check(exchangeLoops(ask) === false && exchangeLoops({ start: 'a', turns: { a: { options: [{ goto: 'b' }] }, b: { options: [{ goto: 'a' }] } } }) === true, 'a loop of turns is found, and none in the call');
  // the baseline's call raises the pressure on every reply that holds off
  const call = scams.items['b-call'].asks[0];
  check(Object.values(call.turns).every(t => t.push) && Object.values(call.turns).flatMap(t => t.options).filter(o => 'goto' in o).every(o => call.turns[o.goto].push), 'every turn of the baseline call pushes, and every reply that holds off meets more of it');
  check(Object.values(call.turns).every(t => t.options.some(o => 'end' in o && call.ends[o.end].ok)), 'at every turn of the baseline call, hanging up is there');
  same(exchangePaths(call).length, 6, 'the ways through the baseline call: three ends at once, three after holding off');
}

/* ---------- steps in order ---------- */
{
  const whole = pressure.items['o-1'].asks[0], first = pressure.items['o-2'].asks[0];
  check(scoreOrder(pressure, whole, ['bank', 'pass', 'report']) === 'ok' && scoreOrder(pressure, whole, ['bank', 'report', 'pass']) === 'no' && scoreOrder(pressure, whole, ['pass', 'bank', 'report']) === 'no', 'an order scored in whole needs every step in its place');
  check(scoreOrder(pressure, first, ['bank', 'wait', 'report']) === 'ok' && scoreOrder(pressure, first, ['pass', 'bank', 'report']) === 'no', 'an order scored on its first step needs only that');
  const closed = pressure.items['b-4'].asks[0];   // every step belongs: answered when all are tapped
  check(orderReady(closed, ['bank', 'pass']) === false && orderReady(closed, ['bank', 'pass', 'report']) === true, 'an order whose steps all belong is ready when all are tapped');
  check(orderOpen(whole) && orderReady(whole, ['bank', 'pass', 'report']) === false && !orderOpen(closed), 'an order with a step that does not belong waits for Answer, whatever the count');
  same(orderRightText(whole), 'Call my bank on the number on my card, then Change my password on the real site, then Report it', 'the right order in words');
  let inOrder = 0;
  for (let k = 0; k < 400; k++) {
    const shown = orderShown(whole, `scope${k}`);
    if (shown.slice(0, 3).map(s => s.id).join() === 'bank,pass,report') inOrder++;
    if (shown.length !== 4 || new Set(shown.map(s => s.id)).size !== 4) inOrder += 1000;
  }
  same(inOrder, 0, 'the steps are never offered in the right order, in 400 sittings');
  check(orderShown(whole, 'a')[0] && JSON.stringify(orderShown(whole, 'a')) === JSON.stringify(orderShown(whole, 'a')), 'the order of the steps is the same each time the same question is shown');
  check(orderProblems(whole).length === 0, 'the fixture order has no problem');
  check(orderProblems({ steps: [{ id: 'a', text: 'A' }, { id: 'a', text: 'B' }], right: ['a', 'x'] }).length >= 2, 'a step named twice and a right order that names a step that is not one are found');
}

/* ---------- the countdown ---------- */
{
  same(TIMER_SECONDS, [15, 20], 'a question has 15 or 20 seconds');
  check(timerAfter(20, 16.7) > 19.98 && timerAfter(20, 16.7) < 19.99, 'a frame takes its own time off');
  same(timerAfter(20, 10000), 19.75, 'a frame ten seconds late takes a quarter of a second');
  same(timerAfter(0.1, 100), 0, 'the clock stops at zero');
  same(timerAfter(5, -50), 5, 'a clock that runs backwards takes nothing off');
  same([20, 19.99, 19.01, 19, 18.4, 0.2, 0].map(timerShown), [20, 20, 20, 19, 19, 1, 0], 'what is shown is the whole seconds left, rounded up');
  same([timerShare(20, 20), timerShare(5, 20), timerShare(0, 20), timerShare(-1, 20)], [100, 25, 0, 0], 'the bar');
  let left = 20, frames = 0;
  while (left > 0 && frames < 5000) { left = timerAfter(left, 1000 / 60); frames++; }
  check(frames >= 1195 && frames <= 1205, `20 seconds of frames at 60 a second is about 1200 frames (${frames})`);
  const html = timerHtml(12.4, 20);
  check(html.includes('role="timer"') && html.includes('data-timer-num>13<') && html.includes('width:62%') && html.includes(SAY.timerSeconds), 'the clock shows 13 seconds left and 62% of the bar');
}

/* ---------- the busy task ---------- */
{
  check(BUSY_THINGS.length >= 12 && BUSY_THINGS.every(([name, bin]) => name && BUSY_BINS.some(b => b.id === bin)), 'the shopping list has things, each with a bin that exists');
  same(BUSY_BINS.map(b => b.id), ['fridge', 'cupboard', 'cleaning'], 'the bins');
  same([busyThing(0).name, busyThing(BUSY_THINGS.length).name], [BUSY_THINGS[0][0], BUSY_THINGS[0][0]], 'the list carries on from its start when it runs out');
  same(BUSY_TAPS_BEFORE, 2, 'the banner arrives after two sorts');
  const h = busyHtml(3, 3, true);
  check(h.includes('data-busy') && (h.match(/data-busy-bin=/g) || []).length === 3 && h.includes(SAY.busyWhere(busyThing(3).name)) && !h.includes(SAY.busyWait), 'a busy task with the banner there shows the thing, three bins, and no wait line');
  check(busyHtml(0, 0, false).includes(SAY.busyWait) && busyHtml(0, 0, false).includes('Nothing sorted yet'), 'a busy task before the banner says a message may arrive');
}

/* ---------- the plan and the own ways in ---------- */
{
  const plan = pressure.meta.own.plan, setup = pressure.meta.own.setup;
  const ok = planFromDraft(plan, { cue: 'a text wants a code', then: 'hang up and call the number on my card' }, '2026-11-02');
  same(ok.problems, [], 'a plan with both boxes filled in');
  same(ok.plan, { cue: 'a text wants a code', then: 'hang up and call the number on my card', saved: '2026-11-02' }, 'a plan is kept as { cue, then, saved }');
  same(planSentence(ok.plan), 'If a text wants a code, I will hang up and call the number on my card.', 'the plan as one sentence');
  same(planSentence({ cue: 'a text wants a code.', then: 'hang up!', saved: 'x' }), 'If a text wants a code, I will hang up.', 'the sentence drops the full stop a learner typed');
  same(planFromDraft(plan, {}, '2026-11-02').problems.map(p => p.path).sort(), ['cue', 'then'], 'a plan with nothing written is refused under both boxes');
  same(planFromDraft(plan, { cue: 'my card is 4242 4242 4242 4242', then: 'call' }, 'd').problems.map(p => p.path), ['cue'], 'a plan with a card number in it is refused');
  same(planFromDraft(plan, { cue: 'x'.repeat(81), then: 'call' }, 'd').problems.map(p => p.path), ['cue'], 'a plan longer than 80 characters is refused');
  const before = { bank: '2026-11-02' }, after = setupMarked(before, 'app', '2026-11-03');
  same([before, after], [{ bank: '2026-11-02' }, { bank: '2026-11-02', app: '2026-11-03' }], 'a mark is added to a new object');
  same(setupCleared(after, 'bank'), { app: '2026-11-03' }, 'a mark is taken off');
  same([setupDone(setup, {}), setupDone(setup, after)], [0, 2], 'the things done');
  check(setupMarked(undefined, 'bank', 'd').bank === 'd' && Object.keys(setupCleared(undefined, 'bank')).length === 0, 'a setup that was never marked is an empty one');
}

/* ---------- a baseline is kept apart ---------- */
{
  const l0 = pressure.lessons.l0, l1 = pressure.lessons.l1;
  same([checkContext(l0), checkContext(l1)], ['baseline', 'check'], 'a baseline is run as the context "baseline", a lesson\'s check as "check"');
  l0.check.items.forEach(id => recordTry('pressure', id, { run: 'r0', lesson: 'l0', rev: 1, context: 'baseline', sup: false, a: {}, r: { act: 'ok' }, ok: true }));
  check(lessonDone(pressure, 'pressure', l0) && completeRuns(pressure, 'pressure', l0).length === 1, 'a baseline is done when its five questions were answered once');
  check(!lessonDone(pressure, 'pressure', l1), 'a baseline does not finish another lesson');
  same(dueStrands(pressure, 'pressure', '2099-12-31'), [], 'a baseline starts the schedule of no topic');
  // the closing line counts the risky ones by the slip, and the real ones by what suits them
  const outcome = (genuine, ok, slip) => ({ facets: { genuine }, ok, r: { act: slip || (ok ? 'ok' : 'no') } });
  same(baselineLine(pressure, [outcome('scam', false, 'acted'), outcome('scam', true), outcome('scam', false), outcome('genuine', true), outcome('genuine', false)]),
    'Of 3 scams, you did what a scam asked on 1. Of 2 real messages, you handled 1 the right way.', 'the one line of the baseline');
  same(baselineLine(scams, []), 'Of 0 scams, you did what a scam asked on 0. Of 0 real messages, you handled 0 the right way.', 'the one line with nothing answered');
}

/* ---------- Scams: what must be true of the baseline, the pilot and lessons 1 to 6 as data ---------- */
{
  const meta = scams.meta, items = scams.items, l0 = scams.lessons.l0, l3 = scams.lessons.l3;
  check(meta.timed === true && meta.danger.slip === 'acted' && meta.danger.risky === 'scam' && meta.danger.real === 'genuine', 'Scams has a clock on its messages and names the failure');
  same(meta.lists.action.map(a => a.id), ['act', 'check', 'leave'], 'the three actions, written once');
  same(meta.lists.slip.map(s => s.id), ['acted', 'their-way', 'habit'], 'the slips');
  same(Object.keys(scams.lessons).sort(), ['l0', 'l1', 'l10', 'l11', 'l12', 'l2', 'l3', 'l4', 'l5', 'l6', 'l7', 'l8', 'l9'], 'the baseline and all twelve lessons are built');
  check(meta.complete === true && meta.parts.length === 12, 'the subject is complete, with twelve parts');
  check(l0.role === 'baseline' && l0.part === null && l3.part === 'C', 'lesson 0 is the baseline, lesson 3 is part C');
  const group = refs => refs.flatMap(r => Array.isArray(r) ? r : [r]);
  const sets = l3.flow.filter(s => s.set).map(s => group(s.set.items)), checkIds = l3.check.items, baseIds = l0.check.items;
  const all = [...sets.flat(), ...checkIds, ...baseIds, l3.flow[1].worked];
  check(new Set(all).size === all.length, 'no message is in two places of the pilot or the baseline');
  same([sets[0].length, sets[1].length, checkIds.length, baseIds.length], [6, 9, 12, 10], 'six in the pairs, nine mixed, twelve in the check, ten in the baseline');
  same(l3.flow.filter(s => s.set).map(s => s.set.seconds || null), [null, 20], 'the pairs are untimed, the mixed group has 20 seconds');
  same([l3.check.seconds, l0.check.seconds, l3.check.feedback, l0.check.feedback], [20, 20, 'at-end', 'at-end'], 'the check and the baseline give 20 seconds and show nothing until the end');
  const real = id => items[id].facets.genuine === 'genuine', facet = id => items[id].facets;
  [['the pairs', sets[0]], ['the mixed group', sets[1]], ['the check', checkIds], ['the baseline', baseIds]].forEach(([name, ids]) => {
    const n = ids.filter(real).length;
    check(n / ids.length >= 0.4 && n / ids.length <= 0.6, `about half of ${name} is real (${n} of ${ids.length})`);
  });
  // each pair is one real and one scam, on the same kind of message
  l3.flow[2].set.items.forEach(pair => check(pair.length === 2 && real(pair[0]) !== real(pair[1]) && facet(pair[0]).channel === facet(pair[1]).channel, `the pair ${pair} is a real message and a scam of one channel`));
  const act = x => (typeof x === 'string' ? items[x] : x).asks[0];
  const right = id => act(id).right;
  // no scam's best action is to do what it says; a real message that wants something is judged by the action that suits it
  Object.values(items).filter(i => i.facets.genuine === 'scam' && i.asks[0].id === 'act').forEach(i => check(right(i.id) !== 'act', `${i.id}: a scam is never right to do what it says`));
  ['g-invoice-real', 'b-invoice'].forEach(id => check(real(id) && right(id) === 'act' && JSON.stringify(act(id).slips) === '{}', `${id}: a real invoice is paid the way you already pay, and doing so is no slip`));
  ['p-code-real', 'b-code', 'g-reset'].forEach(id => check(real(id) && right(id) === 'act', `${id}: a code or a reset you asked for is used where you are`));
  ['p-alert-real', 'g-credit', 'k-alert-real', 'k-credit-real', 'b-alert'].forEach(id => check(real(id) && right(id) === 'check' && act(id).slips.act === 'habit', `${id}: a real alert is checked in your own way, and following its own link is the habit, not the failure`));
  // the failure is made only on scams; a real message never carries it; every scam that can be acted on does
  Object.values(items).forEach(i => {
    const json = JSON.stringify([i.asks, i.blocks]);
    check(!json.includes('"acted"') || i.facets.genuine === 'scam', `${i.id}: a real message carries the failure`);
    if (i.facets.genuine === 'scam' && i.asks[0].id === 'act' && right(i.id) !== 'act') check(act(i).slips.act === 'acted', `${i.id}: doing what a scam says is not named as the failure`);
  });
  // never called a scam: a real message's feedback does not say it was
  const SAYS_SCAM = /\b(this|the|that|it)( message| text| email| call| alert)?( is| was|’s|'s) (a |an )?(scam|fake|fraud|phish)/i;
  Object.values(items).filter(i => i.facets.genuine === 'genuine').forEach(i => {
    const text = JSON.stringify([i.reason, act(i).then, i.steps || []]);
    check(!SAYS_SCAM.test(text), `${i.id}: a real message is called a scam or a fake in its feedback`);
  });
  // the one rule (plan.md, "The rule"): only a message that wants something is an act, check or leave question; "How do you check?" is asked exactly
  // when checking is right, with one way you already had, at least one way the message gave, and three different ways; "What else do you do?" only
  // after leaving it, with telling someone you know in person the one right answer
  const actItems = Object.values(items).filter(i => i.asks[0].id === 'act'), viaOf = i => i.asks.find(a => a.id === 'via'), tellOf = i => i.asks.find(a => a.id === 'tell');
  actItems.forEach(i => {
    check(i.facets.request !== 'none', `${i.id}: a message that wants nothing is asked what to do (doing and leaving it are the same)`);
    check(!!viaOf(i) === (right(i.id) === 'check'), `${i.id}: "How do you check?" is not asked exactly when checking is right`);
    if (tellOf(i)) check(right(i.id) === 'leave' && i.facets.request === 'money' && tellOf(i).when.is.join() === 'leave' && tellOf(i).options.filter(o => o.ok).map(o => o.id).join() === 'tell', `${i.id}: "What else do you do?" is not asked after leaving it, on money, with telling someone the one right answer`);
  });
  actItems.filter(viaOf).forEach(i => {
    const via = viaOf(i);
    check(via.options.length === 3 && via.options.filter(o => o.ok).length === 1 && via.options.some(o => o.slip === 'their-way') && via.when.ask === 'act' && via.when.is.join() === 'check', `${i.id}: how to check has not one way you already had and one the message gave, or opens other than after "check"`);
    check(new Set(via.options.map(o => o.text)).size === 3, `${i.id}: the ways to check are three different ways`);
    check(new Set(via.options.map(o => o.id)).size === 3, `${i.id}: two ways to check are the same move`);
    check(via.options.filter(o => !o.ok).some(o => /\b(my|I)\b/i.test(o.text)), `${i.id}: only the right way to check is worded as the learner's own`);
  });
  // no question offers the same option twice, in its words or in its reason
  Object.values(items).forEach(i => i.asks.filter(a => a.kind === 'choose' && a.options).forEach(a => {
    const norm = t => t.toLowerCase().replace(/\b(calling|call)\b/g, 'call').replace(/[^a-z ]/g, '');
    check(new Set(a.options.map(o => norm(o.text))).size === a.options.length, `${i.id}: "${a.prompt}" offers the same option twice`);
    const thens = a.options.filter(o => o.then).map(o => o.then);
    check(new Set(thens).size === thens.length, `${i.id}: "${a.prompt}" gives two options the same reason, so they are the same move`);
  }));
  check(new Set(actItems.filter(tellOf).map(i => tellOf(i).options.findIndex(o => o.ok))).size >= 3, 'the right "What else do you do?" answer is not in varied places');
  const rotations = new Set(actItems.filter(viaOf).map(i => viaOf(i).options.findIndex(o => o.ok)));
  check(rotations.size === 3, 'the right way to check is in each of the three places across the messages');
  // the line that decides is a line of the message, and every message has the three consequences
  Object.values(items).filter(i => i.asks[0].id === 'act').forEach(i => {
    const lines = i.blocks.flatMap(b => b.lines || []).map(l => l.id);
    check(i.deciding.length >= 1 && i.deciding.every(d => lines.includes(d)), `${i.id}: the deciding line is a line of the message`);
    check(['act', 'check', 'leave'].every(a => act(i).then[a] && act(i).then[a].length > 10), `${i.id}: each action has its consequence`);
  });
  // forms: every channel of the facet is met somewhere, and a message's form matches its channel
  const forms = Object.values(items).flatMap(i => i.blocks.filter(b => b.kind === 'message').map(b => [b.form, i.facets.channel, i.id]));
  forms.forEach(([form, channel, id]) => check(form === channel, `${id}: the message is drawn as ${form} and sorted as ${channel}`));
  same([...new Set(forms.map(f => f[0]))].sort(), ['banner', 'call', 'chat', 'email', 'popup', 'sms'], 'the lessons meet all six forms of a message');
  // the check holds the case with no way of your own, and the pilot a message of each want
  check(act('s-romance') && right('s-romance') === 'leave' && act('s-romance').slips.act === 'acted' && !!tellOf(items['s-romance']) && !!tellOf(items['g-online']), 'the stranger you only know online is left, practised before the check, and doing what she says is the failure');
  same(new Set(Object.values(items).map(i => i.facets.request)).size, 5, 'every kind of request is met');
  // the baseline: a call that pushes back, and what already happened scored on the first step
  check(items['b-call'].asks[0].kind === 'exchange' && items['b-happened'].asks[0].kind === 'order' && items['b-happened'].asks[0].scored === 'first' && items['b-happened'].asks[0].right[0] === 'bank', 'the baseline has the call and the first step after a loss');
  // reserve: three unseen messages for the review of the one topic, held by no lesson
  const used = new Set(all), reserve = Object.keys(items).filter(id => !used.has(id) && items[id].strand === 'act-check-leave');
  same(reserve.sort(), ['r-clinic', 'r-gift', 'r-renew'], 'three messages are held in reserve for the review');
  // invented names: no real company, bank, courier or app; links are on .example and numbers are 555
  const DENY = /\b(chase bank|jpmorgan|wells fargo|bank of america|citibank|citi\b|paypal|venmo|zelle|cash app|western union|amazon|google|apple|microsoft|facebook|instagram|netflix|walmart|target\b|costco|ebay|etsy|craigslist|usps|fedex|\bups\b|dhl|norton|mcafee|geek squad|visa\b|mastercard|whatsapp|telegram|geico|comcast|verizon|at&t|t-mobile|spotify|uber|lyft)\b/i;
  const everything = JSON.stringify(Object.values(items)) + JSON.stringify(scams.lessons) + JSON.stringify(meta);
  check(!DENY.test(everything), `a real brand is named: ${(everything.match(DENY) || [])[0]}`);
  const links = [...everything.matchAll(/"link":"([^"]+)"/g)].map(m => m[1]).filter(l => /\./.test(l) && !/^Call/.test(l));
  check(links.length >= 10 && links.every(l => /\.example(\/|$)/.test(l)), `a link is not on .example: ${links.filter(l => !/\.example(\/|$)/.test(l))}`);
  const numbers = [...everything.matchAll(/1-\d{3}-\d{4}/g)].map(m => m[0]);
  check(numbers.length >= 3 && numbers.every(n => n.startsWith('1-555-')), `a phone number is not a 555 number: ${numbers.filter(n => !n.startsWith('1-555-'))}`);
  // a worked message with its steps and a question that names the step it makes
  check(items['w-locked'].steps.length === 4 && items['w-locked'].steps[3].ask === 'act' && right('w-locked') === 'check', 'the worked text has four steps, the last making the choice');
  // an answer scored by the action: the engine's own scoring of the choice, every action of every message
  Object.values(items).filter(i => i.asks[0].id === 'act').forEach(i => ['act', 'check', 'leave'].forEach(a => {
    const result = scoreChoose(scams, i.asks[0], a), want = a === right(i.id) ? 'ok' : (i.asks[0].slips[a] || 'no');
    check(result === want, `${i.id}: ${a} scores ${result}, wanted ${want}`);
  }));
  // lessons 1 to 6: every question of a lesson belongs to the lesson's own topic, and its practice is half real
  const lessonIds = lesson => [...lesson.flow.filter(x => x.worked).map(x => x.worked), ...lesson.flow.filter(x => x.set).flatMap(x => group(x.set.items)), ...lesson.check.items];
  const TOPICS = { l1: 'want', l2: 'own-way', l3: 'act-check-leave', l4: 'device', l5: 'accounts', l6: 'strangers', l7: 'bills', l8: 'about-you', l9: 'looks', l10: 'pushes', l11: 'all', l12: 'first-hour' };
  Object.entries(TOPICS).forEach(([id, strand]) => lessonIds(scams.lessons[id]).forEach(q => check(items[q].strand === strand, `${q}: a question of lesson ${id.slice(1)} is not in its topic "${strand}"`)));
  same(scams.lessons.l1.check.pass, [{ right: { min: 9 } }], 'the check of lesson 1 wants 9 of 10 right');
  same(scams.lessons.l2.check.pass.map(r => r.slip || r.right.min), [7, 'their-way'], 'the check of lesson 2 wants 7 of 8 right and no check through the sender\'s way');
  // lesson 1: the line that wants something is tapped (or "nothing" is), and the kind of request has one right answer, the one the question is sorted by
  lessonIds(scams.lessons.l1).forEach(q => {
    const [kind, line] = items[q].asks;
    check(line.kind === 'tap' && kind.kind === 'choose' && kind.from === 'want' && kind.right === items[q].facets.request, `${q}: the kind of request is not the one the question is sorted by`);
    check((line.right === 'none') === (kind.right === 'none') && (line.right === 'none' || (items[q].deciding.length === 1 && line.right[0] === items[q].deciding[0])), `${q}: the tapped line is not the deciding line, or "nothing" does not go with no line`);
  });
  // lesson 1: the line that wants something is not always in one place
  const where = lessonIds(scams.lessons.l1).filter(q => items[q].asks[1].right !== 'none').map(q => { const ls = items[q].blocks.flatMap(b => b.lines || []).map(l => l.id), at = ls.indexOf(items[q].asks[1].right[0]); return at === 0 ? 'first' : at === ls.length - 1 ? 'last' : 'middle'; });
  check(['first', 'middle', 'last'].every(w => where.filter(x => x === w).length >= 3), `the line that wants something is not first, in the middle and last at least three times each in lesson 1 (${where})`);
  // lesson 2: one way you already had, at least one the message gave, and in some questions a way that is neither (a number a web search shows)
  [...lessonIds(scams.lessons.l2)].forEach(q => {
    const via = items[q].asks[0];
    check(via.id === 'via' && via.options.length === 3 && via.options.filter(o => o.ok).length === 1 && via.options.some(o => o.slip === 'their-way'), `${q}: how to check has not one way you already had and one the message gave`);
    check(new Set(via.options.map(o => o.text)).size === 3, `${q}: the ways to check are not three different ways`);
  });
  check(new Set(lessonIds(scams.lessons.l2).map(q => items[q].asks[0].options.findIndex(o => o.ok))).size === 3, 'the right way to check is in each of the three places across lesson 2');
  check(lessonIds(scams.lessons.l2).filter(q => items[q].asks[0].options.some(o => !o.ok && !o.slip)).length >= 4, 'lesson 2 does not offer a wrong way that is neither yours nor the message\'s (so the right one is not always the only one not from the message)');
  // the calls and chats that push: pressure at every turn, and the right end open at every turn
  const allExchanges = ['l4', 'l5', 'l6'].flatMap(id => lessonIds(scams.lessons[id]).filter(q => items[q].asks[0].kind === 'exchange'));
  const exchanges = allExchanges.filter(q => items[q].facets.genuine === 'scam');
  same(exchanges.length, 6, 'lessons 4 to 6 each hold two calls or chats that push');
  // a real contact where going along is right, so ending every call is not the answer by habit
  const realExchanges = allExchanges.filter(q => items[q].facets.genuine === 'genuine');
  check(realExchanges.length >= 2 && realExchanges.every(q => { const ex = items[q].asks[0]; return Object.values(ex.turns).flatMap(t => t.options).some(o => o.end && ex.ends[o.end].ok) && Object.values(ex.turns).flatMap(t => t.options).filter(o => o.end && ex.ends[o.end].ok).every(o => !/hang up|stop replying|send nothing/i.test(o.text)); }), 'lessons 4 to 6 do not hold real calls or chats where going along, not ending it, is right');
  exchanges.forEach(q => {
    const ex = items[q].asks[0], turns = Object.values(ex.turns);
    check(items[q].facets.genuine === 'scam' && turns.every(t => t.push && t.options.some(o => o.end && ex.ends[o.end].ok && !ex.ends[o.end].slip)), `${q}: a turn does not push, or ending it right is not there at every turn`);
    check(turns.every(t => t.options.some(o => o.end && !ex.ends[o.end].ok && ex.ends[o.end].slip === 'acted')), `${q}: giving in is not there at every turn, named as the failure`);
    check(Object.values(ex.turns).flatMap(t => t.options).filter(o => 'goto' in o).every(o => ex.turns[o.goto].push), `${q}: holding off does not meet more pressure`);
  });
  ['l4', 'l5', 'l6'].forEach(id => {
    const l = scams.lessons[id], inSets = l.flow.filter(x => x.set).flatMap(x => group(x.set.items)).filter(q => items[q].asks[0].kind === 'exchange' && items[q].facets.genuine === 'scam');
    check(inSets.length === 1 && l.check.items.filter(q => items[q].asks[0].kind === 'exchange').length === 1, `lesson ${id.slice(1)}: one call or chat that pushes in its practice and one in its check`);
    same(l.check.pass, [{ slip: 'acted', max: 0 }, { slip: 'their-way', max: 0 }, { where: { genuine: 'genuine' }, wrong: { max: 1 } }], `lesson ${id.slice(1)}: the check wants no scam acted on, no check through the sender's way and at most one real message wrong`);
  });
  // lessons 7 to 11: every call or chat that pushes can be ended right at every turn and given in to at every turn, and holding off meets more pressure;
  // the real calls you placed (lessons 10 and 11) are won by staying with them; each lesson's check has the real-world bar
  const laterEx = ['l7', 'l8', 'l9', 'l10', 'l11'].flatMap(id => lessonIds(scams.lessons[id])).filter(q => items[q].asks[0].kind === 'exchange');
  laterEx.forEach(q => {
    const ex = items[q].asks[0], turns = Object.values(ex.turns), opts = turns.flatMap(t => t.options);
    check(turns.every(t => t.push) && opts.filter(o => 'goto' in o).every(o => ex.turns[o.goto].push), `${q}: a turn does not push, or holding off does not meet more pressure`);
    if (items[q].facets.genuine === 'scam') check(turns.every(t => t.options.some(o => o.end && ex.ends[o.end].ok) && t.options.some(o => o.end && ex.ends[o.end].slip === 'acted')), `${q}: ending it right, or giving in named as the failure, is not there at every turn`);
    else check(turns.every(t => t.options.some(o => o.end && ex.ends[o.end].ok && !/hang up|stop replying|send nothing/i.test(o.text))) && !JSON.stringify(ex).includes('"acted"'), `${q}: a real call you placed is not won by staying with it, or carries the failure`);
  });
  check(laterEx.filter(q => items[q].facets.genuine === 'genuine').length >= 2, 'lessons 10 and 11 hold real calls where staying with it, not hanging up, is right');
  ['l7', 'l8', 'l9', 'l10', 'l11'].forEach(id => same(scams.lessons[id].check.pass, [{ slip: 'acted', max: 0 }, { slip: 'their-way', max: 0 }, { where: { genuine: 'genuine' }, wrong: { max: 1 } }], `lesson ${id.slice(1)}: the check has the real-world bar`));
  // lesson 10: ten banners over the busy task, half real, each opening on its banner
  const busySet = scams.lessons.l10.flow.find(x => x.set && x.set.over === 'busy').set;
  check(busySet.items.length === 10 && busySet.items.filter(real).length === 5 && busySet.items.every(q => items[q].blocks[0].form === 'banner'), 'lesson 10 does not run ten banners, half real, over the busy task');
  // lesson 11: the real-world test, fourteen new questions, two of them calls, with its four-week retest and a reserve for every question of it
  const l11 = scams.lessons.l11, l11used = new Set(Object.values(scams.lessons).flatMap(lessonIds));
  check(l11.check.retest === 28 && l11.check.items.length === 14 && l11.check.items.filter(q => items[q].asks[0].kind === 'exchange').length === 2 && l11.flow.some(x => x.own === 'plan') && l11.flow.some(x => x.set && x.set.plan), 'lesson 11 is not the plan, then the real-world test with two calls and a retest at four weeks');
  const reserve11 = Object.values(items).filter(i => i.strand === 'all' && !l11used.has(i.id));
  check(reserve11.length >= 17 && l11.check.items.every(q => reserve11.filter(r => JSON.stringify(r.facets) === JSON.stringify(items[q].facets)).length >= l11.check.items.filter(o => JSON.stringify(items[o].facets) === JSON.stringify(items[q].facets)).length), 'lesson 11\'s reserve does not hold three returns and a new question like each of the check\'s fourteen');
  // lesson 12: the first step is the one for the kind of loss, the next two are two of four, and the check wants every first step right
  const FIRST = { money: 'mover', login: 'password', device: 'scan', details: 'idtheft' };
  lessonIds(scams.lessons.l12).concat(Object.keys(items).filter(id => id.startsWith('l12r-'))).forEach(q => {
    const [first, next] = items[q].asks;
    check(first.from === 'first' && first.right === FIRST[items[q].facets.request] && first.only.length === 5, `${q}: the first step is not the one for its kind of loss`);
    check(next.many === true && next.options.length === 4 && next.options.filter(o => o.ok).length === 2, `${q}: the next steps are not two of four`);
    check(items[q].facets.genuine === 'scam' || !JSON.stringify(items[q].asks).includes('"acted"'), `${q}: a real loss carries the failure`);
  });
  same(scams.lessons.l12.check.pass, [{ ask: 'first', wrong: { max: 0 }, of: 'the first step' }], 'lesson 12: the check wants every first step right');
  check(new Set(lessonIds(scams.lessons.l12).map(q => items[q].asks[0].only.indexOf(items[q].asks[0].right))).size >= 3, 'lesson 12: the right first step is not in different places');
  // the asks the engine knows
  check(ASK_KINDS.includes('exchange') && ASK_KINDS.includes('order'), 'the engine builds the call and the order');
}

if (failures.length) { console.error(`✗ ${failures.length} of ${checks} pressure checks failed:`); failures.forEach(f => console.error('  - ' + f)); process.exit(1); }
console.log(`✓ ${checks} pressure checks passed`);
