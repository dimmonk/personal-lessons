// The pure half of step 7 (lesson standard 3, 3.9, 3 to 9): a message laid out in its three forms, a line the learner writes against a model
// (kept, never scored), questions of four asks that open one after the other, a checklist with a heading of its own. No browser: the
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
const account = FC.get('account'), labels = FC.get('labels');

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
  check(open.includes(SAY.writePrivate) && open.includes(SAY.writeHint), 'it says what to do and that only the learner can see what is written');
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

if (failures.length) {
  console.error(`✗ ${failures.length} of ${checks} account checks failed:`);
  failures.forEach(f => console.error('  - ' + f));
  process.exit(1);
}
console.log(`✓ ${checks} account checks passed`);
