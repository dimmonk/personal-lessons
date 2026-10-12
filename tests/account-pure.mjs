// The pure half of step 7 (lesson standard 26.1, 26.1.2, 26.10): a message laid out in its three forms, a line the learner writes against a model
// (kept, never scored), questions of four asks that open one after the other, a checklist with a heading of its own; and what must be true of
// Psychology's pilot as data: what each line of an account is, where the lines that say what was done are, both ways of saying it again, the
// next step when nothing was done, the safety wording only where a pattern of control appears and nothing that diagnoses. No browser: the
// app's scripts are loaded as in tests/load-app.mjs, with the test subjects (tests/fixtures/fixture-subject).
// Run: node tests/account-pure.mjs
import { loadApp } from './load-app.mjs';
import { MESSAGE_FORMS as SHAPE_FORMS } from './lessons/shapes.mjs';

const failures = [];
let checks = 0;
const check = (ok, msg) => { checks++; if (!ok) failures.push(msg); };
const same = (a, b, msg) => check(JSON.stringify(a) === JSON.stringify(b), `${msg}: got ${JSON.stringify(a)}, wanted ${JSON.stringify(b)}`);
const app = await loadApp({ fixture: true });
const { FC, scoreItem, openAsks, itemAnswered, itemHtml, feedbackHtml, blockHtml, messageHtml, writeHtml, writeMarkHtml, panelHtml, hasHtml, panelHint, hasLines,
  MESSAGE_FORMS, TEXT_MAX, writtenWords, textReady, askIsScored, SAY, tapSegments, tapRightIds, segmentsOf, flowSets, flatRefs, refId, itemRuleIds, checkResult,
  askedAsks, chooseOptions, ASK_KINDS, BLOCK_KINDS } = app;
const account = FC.get('account'), psychology = FC.get('psychology'), labels = FC.get('labels');

/* ---------- the forms of a message: one list, in the engine and in the validator's shape ---------- */
same(MESSAGE_FORMS, SHAPE_FORMS, 'the forms of a message are the same in the engine and in the validator\'s shape');
check(BLOCK_KINDS.includes('message') && ASK_KINDS.includes('text'), 'the engine builds the message block and the text ask');

/* ---------- a message drawn in its three forms ---------- */
{
  const friend = account.items['g-1'].blocks[0], thread = account.items['g-2'].blocks[0], note = account.items['g-3'].blocks[0];
  const html = { friend: messageHtml(friend, {}), thread: messageHtml(thread, {}), note: messageHtml(note, {}) };
  Object.entries({ friend, thread, note }).forEach(([form, block]) => {
    const h = html[form];
    check(h.includes(`data-message="${form}"`) && h.includes(`msg-${form}`), `${form}: drawn as its own form`);
    check(h.indexOf('msg-from') < h.indexOf('msg-detail') && h.indexOf('msg-detail') < h.indexOf('msg-lines'), `${form}: who it is from, when, then the lines`);
    check(h.includes(block.from) && h.includes(block.detail), `${form}: shows who it is from and when`);
    same((h.match(/class="msg-line[ "]/g) || []).length, block.lines.length, `${form}: one line for each line of the message`);
    const order = block.lines.map(l => h.indexOf(l.text.replace(/’/g, '’')));
    check(order.every((at, i) => at > -1 && (i === 0 || at > order[i - 1])), `${form}: the lines come in the order written`);
  });
  check(!/ me"/.test(html.friend) && !/ me"/.test(html.note) && /msg-line me"/.test(html.thread), 'only a thread has lines of your own');
  check(html.thread.includes(`<span class="sr">${SAY.msgYou}: </span>`) && html.thread.includes('<span class="sr">Jonas: </span>'), 'a thread names who wrote each line for a reader who cannot see the side');
  check(!/class="sr"/.test(html.friend) && !/class="sr"/.test(html.note), 'a friend\'s message and a note name no one line by line');
  check(/class="block-message msg-note"/.test(html.note) && !/msg-note[^>]*>.*msg-line me/.test(html.note), 'a note is drawn as a note, not as a thread');
  // the lines are segments: tappable and markable, like every other block
  same(segmentsOf(thread).map(s => s.id), thread.lines.map(l => l.id), 'the lines of a message are its segments');
  const tapCtx = { tap: { ids: ['g-2-a', 'g-2-b'], picked: [], locked: false, marks: false, right: ['g-2-a'] } };
  check(/<button type="button" class="tapseg" data-tap="g-2-a"/.test(messageHtml(thread, tapCtx)) && !/data-tap="g-2-c"/.test(messageHtml(thread, tapCtx)), 'a line of a message becomes a button while a tap is open on it');
  check(/<mark class="cue"[^>]*data-seg="g-2-a"/.test(messageHtml(thread, { deciding: ['g-2-a'] })), 'a line of a message can be marked after the answer');
  check(blockHtml(thread, {}) === html.thread, 'a message block is drawn by blockHtml');
  same(tapSegments(account.items['g-2'], account.items['g-2'].asks[0]).map(s => s.id), ['g-2-a', 'g-2-b', 'g-2-c'], 'the lines that can be tapped are every line of the message, yours too');
}

/* ---------- a line to write against a model ---------- */
{
  same([writtenWords('  He  ate\nthe   leftovers.  '), writtenWords(''), writtenWords('   ')], ['He ate the leftovers.', '', ''], 'what is written is trimmed and its spaces collapsed');
  same(writtenWords('x'.repeat(TEXT_MAX + 50)).length, TEXT_MAX, 'what is written is no longer than the most allowed');
  check(textReady('a') && !textReady('') && !textReady(' \n '), 'Answer opens only when something is written');
  const g1 = account.items['h-1'], writeAsk = g1.asks[1];
  check(!askIsScored(writeAsk) && askIsScored(g1.asks[0]), 'a line written against a model is never scored, a tap is');
  // the item is right when the tap is, whatever was written (or not)
  const right = ['h-1-b'], wrong = ['h-1-a'];
  same(scoreItem(account, g1, null, { act: right, say: 'anything at all' }), { r: { act: 'ok' }, ok: true }, 'a right tap and a line written: right, and the line has no result');
  same(scoreItem(account, g1, null, { act: right, say: '' }), { r: { act: 'ok' }, ok: true }, '"Not yet" does not cost the question');
  same(scoreItem(account, g1, null, { act: wrong, say: 'He ate the leftovers I saved for lunch.' }).ok, false, 'a good line does not save a wrong tap');
  same(Object.keys(scoreItem(account, g1, null, { act: right, say: 'x' }).r), ['act'], 'the result names only the asks that were scored');
  same(openAsks(g1, null, {}).map(a => a.id), ['act'], 'the line to write is not open before the tap is answered');
  same(openAsks(g1, null, { act: right }).map(a => a.id), ['act', 'say'], 'the line to write opens when the tap is answered');
  check(!itemAnswered(g1, null, { act: right }) && itemAnswered(g1, null, { act: right, say: '' }), 'the question is not answered until the line is written or "Not yet" is tapped');
  // what is drawn
  const open = writeHtml(account, writeAsk, { answer: undefined, marks: false, typed: {} });
  check(/<textarea class="writebox"[^>]*maxlength="400"[^>]*data-write="say"[^>]*><\/textarea>/.test(open) && open.includes(SAY.writeNotYet) && open.includes(`>${SAY.answerBtn}<`) && /data-write-answer="say" disabled/.test(open), 'the line to write has a box, "Not yet", and an Answer that is shut until something is written');
  check(open.includes(SAY.writePrivate) && open.includes(SAY.writeHint), 'it says what to do and that what is written stays on the phone');
  const drafted = writeHtml(account, writeAsk, { answer: undefined, marks: false, typed: { say: 'He ate it' } });
  check(drafted.includes('>He ate it</textarea>') && !/data-write-answer="say" disabled/.test(drafted), 'what was typed is kept in the box and opens Answer');
  const done = writeHtml(account, writeAsk, { answer: 'He ate it', marks: false, typed: {} });
  check(/disabled>He ate it<\/textarea>/.test(done) && !/data-write-skip/.test(done), 'a written line is shown locked, with no buttons');
  check(!/<textarea/.test(writeHtml(account, writeAsk, { answer: '', marks: false, typed: {} })), 'a "Not yet" leaves no box');
  const marks = writeMarkHtml(writeAsk, 'He ate it'), noMarks = writeMarkHtml(writeAsk, '');
  check(marks.includes(SAY.writeYours) && marks.includes('He ate it') && marks.includes(SAY.writeModel) && marks.includes(writeAsk.model), 'the feedback shows the words written beside the model line');
  check(!/class="mark( no)?"/.test(marks) && (marks.match(/mark note/g) || []).length === 2, 'neither the words nor the model are marked right or wrong');
  check(noMarks.includes(SAY.writeNone) && noMarks.includes(writeAsk.model), 'a "Not yet" shows that nothing was written, and the model');
  const fb = feedbackHtml(account, { key: 'h-1', item: g1 }, null, { act: right, say: 'He ate it' }, scoreItem(account, g1, null, { act: right, say: 'He ate it' }));
  check(fb.includes(SAY.writeCompare) && fb.indexOf(SAY.writeYours) < fb.indexOf(SAY.writeCompare), 'the feedback says how to compare the two');
  check(!/class="mark no"/.test(fb), 'a right tap with a line written has no mark that says "not this one"');
  const missed = feedbackHtml(account, { key: 'h-1', item: g1 }, null, { act: wrong, say: '' }, scoreItem(account, g1, null, { act: wrong, say: '' }));
  check((missed.match(/class="mark no"/g) || []).length === 1 && missed.includes(SAY.youTapped), 'a wrong tap is the one mark that says so, and names the line that was tapped');
  check(!itemHtml(account, { key: 'h-1', item: g1 }, { a: { act: right }, many: {}, marks: false, support: null, typed: {}, feedback: '' }).includes('data-feedback'), 'no feedback before the line is written');
}

/* ---------- four asks that open one after the other ---------- */
{
  const four = account.items['h-2'];
  same(four.asks.map(a => [a.id, a.kind]), [['act', 'tap'], ['else', 'choose'], ['word', 'choose'], ['next', 'choose']], 'a question of four asks: the line, what else, the word, the next step');
  const ids = a => openAsks(four, null, a).map(x => x.id);
  same(ids({}), ['act'], 'only the first ask is open at the start');
  same(ids({ act: ['h-2-b'] }), ['act', 'else'], 'the second opens when the first is answered');
  same(ids({ act: ['h-2-b'], else: 'busy' }), ['act', 'else', 'word'], 'the third opens when the second is answered');
  same(ids({ act: ['h-2-b'], else: 'busy', word: 'ordinary' }), ['act', 'else', 'word'], 'the fourth does not open after an answer that does not call for it');
  same(ids({ act: ['h-2-b'], else: 'busy', word: 'fits' }), ['act', 'else', 'word', 'next'], 'the fourth opens after the answers it is for');
  const done = a => itemAnswered(four, null, a);
  check(done({ act: ['h-2-b'], else: 'busy', word: 'ordinary' }) && !done({ act: ['h-2-b'], else: 'busy', word: 'fits' }), 'the question is answered when every ask that opened is answered');
  same(scoreItem(account, four, null, { act: ['h-2-b'], else: 'busy', word: 'ordinary' }), { r: { act: 'ok', else: 'ok', word: 'ok' }, ok: true }, 'three asks right, the fourth never opened: right');
  same(scoreItem(account, four, null, { act: ['h-2-b'], else: 'busy', word: 'fits', next: 'find-out' }).r, { act: 'ok', else: 'ok', word: 'no', next: 'jumped-ahead' }, 'a wrong word and a next step that jumps ahead are named');
  same(scoreItem(account, four, null, { act: ['h-2-b'], else: 'cruel', word: 'ordinary' }).ok, false, 'one wrong ask in four makes the question wrong');
  const fb = feedbackHtml(account, { key: 'h-2', item: four }, null, { act: ['h-2-b'], else: 'cruel', word: 'ordinary' }, scoreItem(account, four, null, { act: ['h-2-b'], else: 'cruel', word: 'ordinary' }));
  check((fb.match(/class="mark[ "]/g) || []).length === 3 && (fb.match(/class="mark no"/g) || []).length === 1, 'the feedback has one mark for each ask that opened, and the wrong one says so');
}

/* ---------- a checklist with a heading of its own ---------- */
{
  const act = account.meta.rules.act, g1 = account.items['g-1'];
  const shown = panelHtml({ kind: 'panel', rules: ['act'] }, { data: account });
  check(shown.includes(`>${act.heading}<`) && !/panel-name/.test(shown) && act.needs.every(n => shown.includes(n.text)), 'a checklist with a heading shows its heading and its needs, and no rule name');
  check(!shown.includes(SAY.panelHeading), 'the checklist heading stands in place of "What the label needs"');
  same(panelHtml({ kind: 'panel', rules: ['act'] }, { data: account, panel: false }), '', 'a checklist is not drawn where the help is off');
  const dry = panelHtml({ kind: 'panel', rules: ['dry'] }, { data: labels });
  check(dry.includes(SAY.panelHeading) && /panel-name/.test(dry), 'a rule with no heading is drawn as before');
  same(hasLines(account, g1)[0].heading, act.heading, 'the heading goes with the needs found or missing');
  const has = hasHtml(account, g1);
  check(has.includes(`>${act.heading}<`) && !has.includes('What “What they did” needs') && has.includes('class="found"'), 'the needs found or missing are listed under the heading');
  same([panelHint(account, g1), panelHint(labels, labels.items['g-1'])], [SAY.helpPanelNamed(act.heading), SAY.helpPanel], 'the line over the questions names the checklist, or says the label as before');
}

/* ---------- Psychology's pilot as data ---------- */
{
  const meta = psychology.meta, lesson = psychology.lessons.l1, items = psychology.items;
  const ids = refs => flatRefs(refs).map(refId);
  const groups = flowSets(lesson).map(s => ids(s.items)), checkIds = ids(lesson.check.items), workedId = lesson.flow.find(s => s.worked).worked;
  const used = new Set([...groups.flat(), ...checkIds, workedId]), reserve = Object.keys(items).filter(id => !used.has(id));
  same(groups.map(g => g.length), [4, 10], 'the two groups are four and ten accounts');
  same([checkIds.length, reserve.length], [6, 4], 'the check is six accounts and four are held in reserve');
  same(lesson.flow.map(s => s.show ? 'show' : s.worked ? 'worked' : 'set'), ['show', 'worked', 'set', 'set'], 'the lesson is a teaching screen, a worked account and two groups');
  same(flowSets(lesson).map(s => s.support || null), [{ panel: true }, null], 'the first group has the checklist beside the account and the second does not');
  same(lesson.check.pass, [{ right: { min: 5 } }], 'the check is 5 of 6');
  same(meta.lists.step.map(o => o.id), ['find-out', 'watch', 'limit', 'help'], 'the four next steps');
  same(Object.keys(meta.rules), ['act'], 'one checklist: what counts as what they did');
  same(meta.facets.account.values.map(v => v.id), ['ordinary', 'word', 'unclear', 'control'], 'the four ways an account can read, in the words of the design');
  same(meta.facets.account.values.map(v => v.text), ['an ordinary moment', 'the word fits', 'can’t tell yet', 'a pattern of control'], 'the four judgments are worded as the design words them');
  const every = [workedId, ...groups.flat(), ...checkIds, ...reserve];
  const kind = id => items[id].facets.account, count = (list, k) => list.filter(id => kind(id) === k).length;
  const form = id => items[id].blocks[0].form, forms = list => [...new Set(list.map(form))].sort();
  const slipIds = meta.lists.slip.map(s => s.id);
  every.forEach(id => {
    const item = items[id], message = item.blocks[0], tap = item.asks[0], none = tap.right === 'none', act = none ? [] : tap.right;
    check(item.blocks.length === 2 && message.kind === 'message' && item.blocks[1].kind === 'panel' && item.blocks[1].rules.join() === 'act', `${id}: a message and the one checklist`);
    check(MESSAGE_FORMS.includes(message.form) && message.lines.length >= 4 && message.lines.length <= 6, `${id}: a message of four to six lines`);
    check(message.form === 'thread' || !message.lines.some(l => l.me), `${id}: only a thread has lines of your own`);
    check(tap.id === 'act' && tap.kind === 'tap' && tap.none === 'Nothing here says what they did', `${id}: the first ask is the tap, with "Nothing here says what they did" always offered`);
    check(item.asks.length <= 2, `${id}: lesson 1 asks at most two things of an account`);
    check(act.length === tap.pick || (act.length === 1 && tap.pick === undefined) || none, `${id}: the tap wants as many lines as say what was done`);
    check(act.length <= 2 && (act.length < 2 || tap.pick === 2), `${id}: one line or two say what was done`);
    check(none ? Object.values(item.has).every(v => v === null) : Object.values(item.has).every(v => JSON.stringify(v) === JSON.stringify(act)), `${id}: what counts as what they did is found in every line that says it, or in none`);
    check(none ? item.deciding.length >= 2 : JSON.stringify(item.deciding) === JSON.stringify(act), `${id}: the words marked after the answer`);
    // every line that does not say what was done says what it is instead, as a slip of tapping it
    message.lines.filter(l => !act.includes(l.id)).forEach(l => check(!!l.note && slipIds.includes(l.slip), `${id}.${l.id}: a line that is not the act says what it is and names the slip of tapping it`));
    message.lines.filter(l => act.includes(l.id)).forEach(l => check(!l.note && !l.slip, `${id}.${l.id}: a line that says what was done has no note and no slip`));
    // the reason quotes the line that says what was done
    const reason = [].concat(item.reason).join(' ');
    if (none) check(/^None of these lines says something/.test(reason) && !!item.need && item.asks[1].id === 'next' && item.asks[1].right === 'find-out', `${id}: nothing was done: the reason says so, says what would be needed, and the next step is to find out`);
    else act.forEach(a => check(reason.includes(message.lines.find(l => l.id === a).text.replace(/\.$/, '')), `${id}: the reason quotes the line that says what was done (${a})`));
    // a thread's act lines are the other person's; the learner's own lines are never the act
    if (message.form === 'thread') check(act.every(a => !message.lines.find(l => l.id === a).me), `${id}: in a thread the lines that say what was done are the other person's`);
    // never a diagnosis, never a party's name: the words the app writes (not the quoted ones) hold neither
    const written = [reason, [].concat(item.need || ''), ...(item.steps || []).map(s => s.working), ...message.lines.map(l => l.note || ''), ...item.asks.slice(1).flatMap(a => [a.prompt, a.model || '', ...(a.options || []).flatMap(o => [o.text, o.then || '']), ...Object.values(a.then || {})]), ...[].concat(item.notice || [])].flat().join(' ');
    check(!/narcissis|gaslight|sociopath|psychopath|abuser|abusive|disorder|diagnos|bipolar|borderline/i.test(written), `${id}: nothing the app writes diagnoses anyone`);
    check(!/Hotline|1-800|88788/.test(written) === (kind(id) !== 'control'), `${id}: the helpline is named in an account of control and nowhere else`);
  });
  // the unclear accounts with nothing done: two in the practice, one in the check, one in reserve
  const nothing = every.filter(id => items[id].asks[0].right === 'none');
  same(nothing.sort(), ['a-toxic', 'b-trip', 'k-fake', 'r-cold'], 'the accounts that say nothing the person did: two in the practice (one without the checklist), one in the check, one in reserve');
  nothing.forEach(id => same(items[id].asks[1].then && Object.keys(items[id].asks[1].then).sort(), ['help', 'limit', 'watch'], `${id}: each next step that is not the right one has its own line`));
  // saying it again: pick it in the first group, write it in the second, once in the worked account
  const says = id => (items[id].asks[1] || {}).id === 'say' ? items[id].asks[1].kind : null;
  same(groups.map(g => g.filter(says).map(says)), [['choose', 'choose'], ['text', 'text', 'text']], 'two to pick in the first group, three to write in the second');
  same(says(workedId), 'choose', 'the worked account picks the fair line');
  every.filter(id => says(id) === 'choose').forEach(id => {
    const options = items[id].asks[1].options;
    check(options.length === 4 && options.filter(o => o.ok).length === 1, `${id}: four ways to say it, one of them fair`);
    same(options.filter(o => !o.ok).map(o => o.slip).sort(), ['kept-label', 'softened', 'swapped-guess'], `${id}: the three that are not fair are named as the slips they are`);
  });
  const place = ['a-karaoke', 'a-cancel'].map(id => items[id].asks[1].options.findIndex(o => o.ok));
  check(new Set(place).size > 1, 'the fair line is not always in the same place');
  every.filter(id => says(id) === 'text').forEach(id => {
    const ask = items[id].asks[1], act = items[id].blocks[0].lines.find(l => l.id === items[id].asks[0].right[0]).text.toLowerCase().match(/[a-z]+/g);
    check(typeof ask.model === 'string' && ask.model.length > 10 && ask.model.toLowerCase().match(/[a-z]+/g).filter(w => w.length > 3 && act.includes(w)).length >= 3, `${id}: the model line says what the account says was done`);
  });
  // the mix: about half ordinary in every group and the check, a pattern of control once in the practice and not in the check, the words fit twice in the second group and in the check
  [groups[0], groups[1], checkIds].forEach((list, k) => same(count(list, 'ordinary') / list.length, 0.5, `group ${k + 1}: half the accounts are ordinary moments`));
  same(['ordinary', 'word', 'unclear', 'control'].map(k => count(groups[1], k)), [5, 3, 1, 1], 'the second group: five ordinary, three where the word fits, one that cannot be told, one pattern of control');
  same(['ordinary', 'word', 'unclear', 'control'].map(k => count(checkIds, k)), [3, 2, 1, 0], 'the check: three ordinary, two where the word fits, one that cannot be told');
  same(['ordinary', 'word', 'unclear', 'control'].map(k => count(groups[0], k)), [2, 0, 2, 0], 'the first group: two ordinary and two that cannot be told');
  check(reserve.every(id => kind(id) !== 'control') && count(reserve, 'ordinary') === 2, 'the reserve holds no pattern of control, so a review never asks one cold');
  [groups[0], groups[1], checkIds, reserve].forEach((list, k) => check(forms(list).length >= (k === 0 ? 2 : 3), `group ${k + 1}: accounts in more than one form`));
  same(forms(checkIds), ['friend', 'note', 'thread'], 'the check has every form');
  same(every.filter(id => kind(id) === 'control'), ['b-phone'], 'one pattern of control in the whole lesson');
  // what is said about control is calm, accurate and names where to turn
  const control = [].concat(items['b-phone'].reason).join(' '), notice = [].concat(items['b-phone'].notice).join(' ');
  check(/safety matter/.test(control) && notice.includes('National Domestic Violence Hotline') && notice.includes('1-800-799-7233') && notice.includes('text START to 88788') && /A friend can call too/.test(notice) && /phone or computer they cannot see/.test(notice), 'the control account names the hotline, its number and text line, says a friend can call, and warns about a phone that is watched');
  check([].concat(items['b-phone'].notice)[0] === 'If you are in danger now, call 911.' && /in the US/.test(notice) && /Outside the US/.test(notice), 'the notice puts "call 911" first and says the hotline is for the US, and where to look elsewhere');
  check(!/abus|victim|manipulat/i.test(control + notice.replace('If you are in danger now', '')), 'the control account does not name or diagnose anyone');
  check(every.filter(id => items[id].notice).join() === 'b-phone', 'the notice is on the account of control and nowhere else');
  // the feedback: the notice first and in a block of its own; the checklist only after a miss or when nothing says what they did
  {
    const phone = items['b-phone'], right = { act: ['h3', 'h4'] }, fb = feedbackHtml(psychology, { key: 'b-phone', item: phone }, null, right, scoreItem(psychology, phone, null, right));
    check(fb.indexOf('data-notice') > -1 && fb.indexOf('data-notice') < fb.indexOf('class="marks"') && fb.indexOf('call 911') < fb.indexOf('class="marks"'), 'the notice comes before the marks in the feedback');
    same(fb.match(/data-notice/g).length, 1, 'the notice is one block');
    const other = items['b-jacket'], okFb = feedbackHtml(psychology, { key: 'b-jacket', item: other }, null, { act: ['d1'], say: ['Dana spilled coffee on your jacket.'] }, { r: { act: 'ok', say: 'ok' }, ok: true });
    check(!/data-notice/.test(okFb), 'an account with no notice has none');
    check(!/data-has/.test(okFb), 'after a right answer the checklist is not listed again');
    const miss = feedbackHtml(psychology, { key: 'b-jacket', item: other }, null, { act: ['d2'], say: ['x'] }, { r: { act: 'took-label', say: 'ok' }, ok: false });
    check(/data-has="act"/.test(miss), 'after a miss the checklist is listed');
    const nothing = items['b-trip'], noneFb = feedbackHtml(psychology, { key: 'b-trip', item: nothing }, null, { act: ['none'], next: 'find-out' }, { r: { act: 'ok', next: 'ok' }, ok: true });
    check(/data-has="act"/.test(noneFb) && /class="missing"/.test(noneFb), 'an account with nothing in it lists what is missing even after a right answer');
    // two lines that say what was done: both needs are found in both lines, not one in each
    const two = hasLines(psychology, items['b-money'])[0].needs.map(n => n.found.map(f => f.id));
    same(two, [['c2', 'c3'], ['c2', 'c3']], 'when two lines say what was done, each need is found in both');
  }
  // a line that mixes what someone did with a reading of it is in the practice and in the check, with the fair way to say it
  const mixed = id => items[id].blocks[0].lines.filter(l => items[id].asks[0].right.includes(l.id)).some(l => /ignored|humiliated|snapped/.test(l.text));
  check(groups[1].some(mixed) && checkIds.some(mixed), 'a line that mixes what was done with a reading of it is in the second group and in the check');
  // surface cues vary: the label does not always start with "so", a guess does not always say "obviously", and the line that says what was done is not always second
  const lines = every.flatMap(id => items[id].blocks[0].lines);
  check(lines.filter(l => l.slip === 'took-label' && !/\bso\b/.test(l.text)).length >= lines.filter(l => l.slip === 'took-label' && /\bso\b/.test(l.text)).length, 'a label is as often without "so" as with it');
  check(lines.filter(l => l.slip === 'took-guess' && !/obviously|clearly|just know|figures/i.test(l.text)).length >= 12, 'guesses are not all marked by "obviously" or "clearly"');
  check(new Set(every.map(id => items[id].blocks[0].lines.findIndex(l => !l.slip))).size >= 4, 'the line that says what was done is in several places, not always the second');
  check(items['b-phone'].asks[0].pick === 2, 'the control account asks for the two acts');
  // no person is named twice, and no two accounts have the same words
  const who = every.map(id => items[id].asks[0].prompt);
  same(who.length, new Set(who).size, 'no two accounts ask about the same person');
  check(new Set(every.map(id => items[id].blocks[0].lines.map(l => l.text).join())).size === every.length, 'no two accounts have the same words');
  // the worked account
  const w = items[workedId];
  check(w.steps.length === 3 && w.steps.every(s => !s.ask || w.asks.some(a => a.id === s.ask)) && w.steps.filter(s => s.ask).length === 2, 'the worked account works through three steps, two of them tied to an ask');
}

if (failures.length) {
  console.error(`✗ ${failures.length} of ${checks} account checks failed:`);
  failures.forEach(f => console.error('  - ' + f));
  process.exit(1);
}
console.log(`✓ ${checks} account checks passed`);
