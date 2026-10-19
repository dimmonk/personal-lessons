// The pure half of step 9 (lesson standard 3, 3.9, 5, 6, 9, 3 to 9): an answer from memory checked against what a list accepts (case,
// punctuation, articles, one small misspelling, brackets, numbers in words, parts in any order, "name two"), the learner's own answers, a claim, the
// rounds before an interview date, the mock interview's draw, the voice a question is read with, and what must be true of Civics' pilot as data: the
// 17 questions of lesson 1 are the official ones, word for word, each asked once in a group and once in the check. No browser: the app's scripts are
// loaded as in tests/load-app.mjs, with the test subjects (tests/fixtures/fixture-subject), and the clock is set by hand.
// Run: node tests/civics-pure.mjs
import vm from 'node:vm';
import { readFile } from 'node:fs/promises';
import { loadApp } from './load-app.mjs';
import { loadAll } from '../tools/learner-view/load.mjs';
import { renderLesson } from '../tools/learner-view/render-learner-view.mjs';

const failures = [];
let checks = 0;
const check = (ok, msg) => { checks++; if (!ok) failures.push(msg); };
const same = (a, b, msg) => check(JSON.stringify(a) === JSON.stringify(b), `${msg}: got ${JSON.stringify(a)}, wanted ${JSON.stringify(b)}`);

async function fresh() {
  const app = await loadApp({ fixture: true });
  vm.runInContext(`(() => { const Real = Date; globalThis.__now = Real.now();
    globalThis.Date = class extends Real { constructor(...a) { if (a.length) super(...a); else super(globalThis.__now); } static now() { return globalThis.__now; } }; })()`, app.context);
  const on = day => { const [y, m, d] = day.split('-').map(Number); app.context.__now = new Date(y, m - 1, d, 10).getTime(); };
  return { ...app, on };
}
const app = await fresh();
const { FC, scoreItem, recallMatch, recallTokens, recallVariants, recallWithOwn, recallOwnEntries, recallDefReady, recallProblems, speechPick, spokenHtml, feedbackHtml, itemHtml,
  recordTry, claimTry, claimedResults, resultOk, strandSchedules, dueStrands, drawInstances, checkResult, instanceOf, SAY, saveNote, notesOf, isRecallAsk } = app;
const civics = FC.get('civics'), interview = FC.get('interview');
const typed = (data, id, text) => scoreItem(data, data.items[id], null, { say: text }).r.say;
const right = (data, id, text, msg) => same(typed(data, id, text), 'ok', `${id} accepts ${JSON.stringify(text)}${msg ? ` (${msg})` : ''}`);
const wrong = (data, id, text, msg) => same(typed(data, id, text), 'no', `${id} does not accept ${JSON.stringify(text)}${msg ? ` (${msg})` : ''}`);

/* ---------- cleaning an answer ---------- */
same(recallTokens('U.S. Constitution'), ['us', 'constitution'], '"U.S." is one word, "us"');
same(recallTokens('The  Vice-President, (of the United States)!'), ['vice', 'president', 'of', 'united', 'states'], 'capitals, punctuation, hyphens, brackets and "the" do not matter');
same(recallTokens('state’s population'), ['states', 'population'], 'an apostrophe is dropped');
same(recallTokens('Twenty-seven'), ['27'], 'a number in words is the number');
same(recallTokens('twenty second amendment'), ['22nd', 'amendment'], 'an ordinal in words is the ordinal');
same(recallTokens('four hundred and thirty five'), ['435'], 'a number in words with an "and" in it');
same(recallTokens('two three'), ['2', '3'], 'two numbers side by side are two numbers');
same(recallTokens('1,000 people'), ['1000', 'people'], 'a thousands comma is dropped');
same(recallTokens('Constitución'), ['constitucion'], 'an accent is dropped');
same(recallVariants('Citizens eighteen (18) and older (can vote).').map(v => v.join(' ')).sort(), ['citizens 18 18 older can vote', 'citizens 18 18 older', 'citizens 18 older can vote', 'citizens 18 older'].sort(),
  'brackets are in or out, every way');

/* ---------- what counts as the right answer: the pilot's own questions ---------- */
right(civics, 'q52', 'Supreme Court');
right(civics, 'q52', 'SUPREME COURT!!', 'capitals and punctuation');
right(civics, 'q52', '  supreme    court ', 'spaces');
right(civics, 'q52', 'the supreme court', 'an article');
right(civics, 'q52', 'supreem court', 'one small misspelling');
wrong(civics, 'q52', 'supreem cort', 'two misspellings');
wrong(civics, 'q52', 'supreme', 'a word left out');
wrong(civics, 'q52', 'the supreme court of the united states', 'words added');
wrong(civics, 'q52', 'district court', 'another court');
wrong(civics, 'q52', '', 'nothing typed');
wrong(civics, 'q52', '   ', 'only spaces');
right(civics, 'q40', 'vice president', 'the bracket words left out');
right(civics, 'q40', 'The Vice President of the United States', 'the bracket words in');
right(civics, 'q18', 'congress');
right(civics, 'q18', 'US Congress');
right(civics, 'q18', 'u.s. congress', 'a bracket with dots');
right(civics, 'q18', 'the legislative branch');
right(civics, 'q18', 'national legislature', 'a bracket that offers a choice can be said with either half');
right(civics, 'q18', 'US legislature', 'either half');
right(civics, 'q18', 'U.S. or national legislature', 'the whole bracket');
wrong(civics, 'q18', 'executive branch', 'the other branch');
wrong(civics, 'q17', 'legislative branch', 'the other branch');
wrong(civics, 'q17', 'executive', 'the word "branch" left out');
right(civics, 'q17', 'executive branch');
wrong(civics, 'q20', 'declares was', 'a short word must be exact');
right(civics, 'q20', 'declare war', 'one small misspelling counts for a word that is one letter off');
right(civics, 'q20', 'makes the federal budget');
right(civics, 'q19', 'senate and house of representatives');
right(civics, 'q19', 'house and senate', 'parts in any order');
right(civics, 'q19', 'House of Representatives, Senate');
wrong(civics, 'q19', 'senate', 'one part of two');
wrong(civics, 'q19', 'senate and senate', 'a part said twice');
right(civics, 'q16', 'Legislative, executive, and judicial');
right(civics, 'q16', 'judicial, legislative and executive', 'parts in any order');
right(civics, 'q16', 'courts congress president', 'the other wording, in any order');
wrong(civics, 'q16', 'legislative and executive', 'one part left out');
wrong(civics, 'q16', 'legislative, executive, and federal', 'a part that is not one');
wrong(civics, 'q16', 'congress, executive, and judicial', 'parts of two different answers');
right(civics, 'q15', 'checks and balances');
right(civics, 'q15', 'Separation of powers');
right(civics, 'q15', 'so one part does not become too powerful');
wrong(civics, 'q15', 'so no one part gets too powerful', 'the same meaning in other words is not matched (a claim does that)');
right(civics, 'q51', 'resolves disputes about the law', 'brackets out');
right(civics, 'q51', 'Resolves disputes (disagreements) about the law', 'brackets in');
right(civics, 'q51', 'decides if a law goes against the constitution');
right(civics, 'q46', 'federal departments and agencies');

/* ---------- numbers, brackets and "name two": the test subject ---------- */
right(interview, 'amend', '27');
right(interview, 'amend', 'twenty-seven');
right(interview, 'amend', 'Twenty seven');
right(interview, 'amend', 'twenty-seven (27)');
wrong(interview, 'amend', '28');
wrong(interview, 'amend', 'twenty-eight');
right(interview, 'house', '435');
right(interview, 'house', 'four hundred thirty-five');
right(interview, 'house', 'four hundred and thirty five');
wrong(interview, 'house', '534');
right(interview, 'senate', 'one hundred');
right(interview, 'senate', '100');
right(interview, 'law', 'Constitution');
right(interview, 'law', 'US constitution');
right(interview, 'law', 'constitutoin', 'two letters swapped is one small misspelling');
wrong(interview, 'law', 'constitutionally');
right(interview, 'oath', 'defend the constitution and obey the laws of the united states', 'two different answers');
right(interview, 'oath', 'Be loyal to the United States, Give up loyalty to other countries');
right(interview, 'oath', 'obey the laws of the united states; serve in the military; defend the constitution', 'three is more than two');
wrong(interview, 'oath', 'defend the constitution', 'one answer for two');
wrong(interview, 'oath', 'defend the constitution, defend the constitution', 'the same answer twice is one');
wrong(interview, 'oath', 'defend the constitution and eat cake', 'one of two is not an answer');
wrong(interview, 'oath', 'defend the constitution and obey the laws of the unted statez', 'two misspellings');
right(interview, 'power', 'vetoes bills');
right(interview, 'power', 'vetoes bills and signs bills into law', 'two are fine when one is wanted');
right(interview, 'vote', 'u.s. citizens');
right(interview, 'vote', 'citizens');
check(recallMatch(interview.items.oath.asks[0], 'defend the constitution and obey the laws of the united states').used.length === 2, 'two different answers are two');
check(recallMatch(interview.items.oath.asks[0], 'defend the constitution, defend the constitution') === null, 'the same answer twice is not two');
// another thing's name typed exactly is that other answer, not a misspelling of this one; a near miss of this one is still forgiven
const iraq = { id: 'name', kind: 'text', accept: ['Iraq'], reject: ['Iran'] };
check(recallMatch(iraq, 'Iran') === null && recallMatch(iraq, 'Irak').cost === 1 && recallMatch({ ...iraq, reject: [] }, 'Iran').cost === 1, 'a rejected name typed exactly is a miss, a misspelling still forgiven');
check(recallMatch(interview.items.law.asks[0], 'constitutoin').cost === 1 && recallMatch(interview.items.law.asks[0], 'constitution').cost === 0, 'a misspelling costs one, a right word nothing');

/* ---------- the accepted answers are sound ---------- */
for (const data of [civics, interview]) {
  Object.values(data.items).flatMap(i => i.asks).filter(a => a.kind === 'text' && Array.isArray(a.accept)).forEach(a => same(recallProblems(a), [], `${data.meta.id}: the accepted answers of "${a.id}" are sound`));
}
same(recallProblems({ accept: ['Vote', 'vote'] }), ['"vote" is accepted twice'], 'an answer accepted twice is found');
same(recallProblems({ accept: ['Vote'], count: 2 }), ['it wants 2 answers and accepts only 1'], 'a count above the answers is found');
check(recallProblems({ accept: [{ text: 'a', parts: ['One'] }] }).length === 1, 'an answer in one part is found');
check(recallProblems({ accept: ['(the)'] }).length >= 1, 'an answer with no words is found');

/* ---------- the learner's own answers ---------- */
{
  const ask = interview.items.senator, inst = instanceOf(interview, 'senator');
  const none = recallWithOwn(inst, {}), some = recallWithOwn(inst, { q23: 'Jane Doe; John Roe' });
  check(none.ownMissing === true && !recallDefReady(ask, {}) && recallDefReady(ask, { q23: 'x' }), 'a question about the learner\'s own answer is not ready until it is entered');
  same(some.item.asks[0].accept, ['Jane Doe', 'John Roe'], 'two senators, one after another, are two accepted answers');
  check(some.ownMissing === undefined && some.item.asks[0].ownEntry === true, 'the question is marked as reading the learner\'s own answer');
  same(scoreItem(interview, some.item, null, { say: 'john roe' }).r.say, 'ok', 'either senator is right');
  same(scoreItem(interview, some.item, null, { say: 'jane doe' }).r.say, 'ok', 'the other senator is right');
  same(scoreItem(interview, some.item, null, { say: 'jane roe' }).r.say, 'no', 'half of each is not');
  same(recallOwnEntries(' A ;; B\nC '), ['A', 'B', 'C'], 'entries are split at a semicolon or a new line');
  check(ask.asks[0].accept.own === 'answers.q23' && interview.items.senator.asks[0] === ask.asks[0], 'the registered question is never changed');
  check(recallDefReady(interview.items.form, {}), 'a question that reads nothing of the learner\'s is always ready');
}

/* ---------- a claim, and the days a question comes back ---------- */
const attempt = (run, context, ok, extra = {}) => ({ run, lesson: 'l1', rev: 1, context, sup: false, a: { say: 'x' }, r: { say: ok ? 'ok' : 'no' }, ok, ...extra });
{
  same(claimedResults({ say: 'no' }, 'say'), { r: { say: 'claimed' }, ok: true }, 'a claim turns one miss into "claimed", and the question is right');
  same(claimedResults({ say: 'no', other: 'no' }, 'say'), { r: { say: 'claimed', other: 'no' }, ok: false }, 'a question with another miss is still a miss');
  check(resultOk('ok') && resultOk('claimed') && !resultOk('no') && !resultOk('timeout'), 'right is ok or claimed');
  const a = await fresh(), d = a.FC.get('interview');
  a.on('2026-10-01');
  ['form', 'law', 'amend', 'branches', 'oath'].forEach(id => a.recordTry('interview', id, attempt('c1', 'check', true)));
  check(a.completeRuns(d, 'interview', d.lessons.l1).length === 1, 'the check is complete when every question was answered once');
  same(a.strandSchedules(d, 'interview').form, { lessonId: 'l1', level: 0, due: '2026-10-03' }, 'a topic is due two days after its check');
  a.on('2026-10-03');
  a.recordTry('interview', 'form', attempt('r1', 'review', true));
  a.recordTry('interview', 'law', attempt('r1', 'review', false));
  a.recordTry('interview', 'amend', attempt('r1', 'review', false));
  check(a.claimTry('interview', 'law', 'r1', undefined, 'say') !== null, 'a try just made can be claimed');
  check(a.claimTry('interview', 'law', 'r1', undefined, 'say') === null, 'and only once');
  const tries = a.itemsOf('interview').law.tries;
  same(tries.map(t => [t.context, t.ok, t.r.say]), [['check', true, 'ok'], ['review', true, 'claimed']], 'the stored try is counted right and says it was claimed');
  same(a.strandSchedules(d, 'interview').form, { lessonId: 'l1', level: 1, due: '2026-10-10' }, 'a right answer is a good day: the next return is seven days on');
  same(a.strandSchedules(d, 'interview').law, { lessonId: 'l1', level: 0, due: '2026-10-05' }, 'an answer counted on the learner\'s word is not a good day: the question comes back in two days');
  same(a.strandSchedules(d, 'interview').amend, { lessonId: 'l1', level: 0, due: '2026-10-05' }, 'a miss is not a good day either');
  check(a.logOf().some(e => e.type === 'claim' && e.subject === 'interview' && e.item === 'law'), 'a claim is logged');
  check(a.firstTries('interview').filter(({ key }) => key === 'law').every(({ t }) => t.ok), 'a claimed answer counts right in the figures of that run');
  const outcomes = ['form', 'law'].map(key => ({ facets: {}, r: a.itemsOf('interview')[key].tries.slice(-1)[0].r, ok: true }));
  check(a.checkResult(d, [{ ask: 'say', right: { min: 2 } }], outcomes).passed, 'a pass rule that counts one ask counts a claimed answer as right');
}

/* ---------- the rounds before the interview date ---------- */
{
  const a = await fresh(), d = a.FC.get('interview');
  a.on('2026-10-01');
  ['form', 'law', 'amend', 'branches', 'oath'].forEach(id => a.recordTry('interview', id, attempt('c1', 'check', true)));
  same(a.roundDays('2026-11-20'), ['2026-10-09', '2026-10-16', '2026-10-23', '2026-10-30', '2026-11-06', '2026-11-13'], 'the rounds are a week apart, six weeks, the last a week before the date');
  check(a.interviewDay(d, 'interview') === null, 'with no date entered there are no rounds');
  a.saveNote('interview', 'answers', { interviewDate: '2026-11-20', saved: '2026-10-01' });
  check(a.interviewDay(d, 'interview') === '2026-11-20', 'the date entered is read');
  a.on('2026-10-03');
  ['form', 'law', 'amend', 'branches', 'oath'].forEach(id => a.recordTry('interview', id, attempt('r1', 'review', true)));
  same(a.strandSchedules(d, 'interview').form.due, '2026-10-09', 'a topic the week returns to is pulled to the next round, where seven days on is later');
  a.on('2026-10-09');
  ['form', 'law', 'amend', 'branches', 'oath'].forEach(id => a.recordTry('interview', id, attempt('r2', 'review', true)));
  same(a.strandSchedules(d, 'interview').form.due, '2026-10-16', 'after a round the next round is the one a week on, though the schedule would let it rest');
  a.on('2026-10-17');
  ['form', 'law', 'amend', 'branches', 'oath'].forEach(id => a.recordTry('interview', id, attempt('r3', 'review', true)));
  same(a.strandSchedules(d, 'interview').form.due, '2026-10-23', 'a topic that left the schedule comes back for the rounds');
  a.on('2026-11-21');
  check(a.interviewDay(d, 'interview') === null && a.strandSchedules(d, 'interview').form.due === null, 'after the day of the interview there are no more rounds');
  a.saveNote('interview', 'answers', { interviewDate: 'soon' });
  check(a.interviewDay(d, 'interview') === null, 'a date that is not a day is not read');
  const pilot = await fresh();
  check(pilot.FC.get('civics').meta.review.dateField === 'answers.interviewDate', 'Civics counts its rounds from the interview date');
}

/* ---------- the mock interview: a draw at random ---------- */
{
  const a = await fresh(), d = a.FC.get('interview');
  a.on('2026-10-01');
  const draw = d.lessons.l3.check.items.draw;
  const keys = run => a.drawInstances(d, 'interview', draw, run, [], 'l3').map(i => i.key);
  const first = keys('m1');
  check(first.length === 5 && new Set(first).size === 5, 'a mock interview holds five different questions');
  same(keys('m1'), first, 'the same run draws the same questions');
  check(new Set(Array.from({ length: 12 }, (_, k) => keys(`m${k}`).slice().sort().join())).size > 4, 'different runs draw different questions');
  check(first.every(k => !['senator', 'governor', 'capital'].includes(k)) && Array.from({ length: 12 }, (_, k) => keys(`m${k}`)).every(list => list.every(k => !['senator', 'governor', 'capital'].includes(k))),
    'a question about the learner\'s own answers is left out until they are entered');
  a.saveNote('interview', 'answers', { q23: 'A B', q61: 'C D', q62: 'E F' });
  check(Array.from({ length: 30 }, (_, k) => keys(`n${k}`)).some(list => list.includes('senator')), 'and drawn once they are');
  a.saveNote('interview', 'answers', {});
  first.forEach(key => a.recordTry('interview', key, attempt('m1', 'check', true, { lesson: 'l3' })));
  const second = keys('m2');
  check(second.every(k => !first.includes(k)), 'a second mock interview draws questions the first did not ask, while there are some');
  second.forEach(key => a.recordTry('interview', key, attempt('m2', 'check', true, { lesson: 'l3' })));
  check(keys('m3').filter(k => first.includes(k) || second.includes(k)).length >= 0 && keys('m3').length === 5, 'when they run out the draw goes on, and still holds five');
  check(a.checkSize(d.lessons.l3.check) === 5 && a.checkIsDrawn(d.lessons.l3.check), 'a drawn check is the size of its draw');
  const retest = a.retestInstances(d, 'interview', d.lessons.l3, 'rt1').map(i => i.key);
  check(retest.length === 5 && new Set(retest).size === 5, 'the second mock interview is five questions too');
}

/* ---------- the voice a question is read with ---------- */
{
  const net = { name: 'Net', lang: 'en-US', localService: false }, local = { name: 'Local', lang: 'en-GB', localService: true }, us = { name: 'Us', lang: 'en_US', localService: true };
  check(speechPick([net]) === null, 'a voice that needs the network is never used');
  check(speechPick([net, local]) === local, 'a voice on the phone is used');
  check(speechPick([local, us]) === us, 'the US voice comes first');
  check(speechPick([{ name: 'Fr', lang: 'fr-FR', localService: true }]) === null, 'a voice in another language is not used');
  check(speechPick([]) === null && speechPick(undefined) === null, 'no voices, no voice');
}

/* ---------- the question on screen ---------- */
{
  const block = { kind: 'spoken', text: 'Name the three branches of government.' };
  const plain = spokenHtml(block, {});
  check(plain.includes('Name the three branches of government.') && !plain.includes('data-hear'), 'a question outside a run is its words only');
  const heard = spokenHtml(block, { speech: { voice: true, hide: false, words: false, heard: false } });
  check(heard.includes('data-hear') && heard.includes(SAY.hearBtn) && heard.includes('data-spoken-words') && !heard.includes('data-show-words'), 'a question with a voice has a button to hear it, and its words');
  check(spokenHtml(block, { speech: { voice: true, hide: false, words: false, heard: true } }).includes(SAY.hearAgain), 'a question already heard offers to hear it again');
  const hidden = spokenHtml(block, { speech: { voice: true, hide: true, words: false, heard: false } });
  check(!hidden.includes('Name the three') && hidden.includes('data-show-words') && hidden.includes('data-hear'), 'the words of a question held back are not on the page, and can be shown');
  check(spokenHtml(block, { speech: { voice: true, hide: true, words: true, heard: false } }).includes('Name the three') && !spokenHtml(block, { speech: { voice: true, hide: true, words: true, heard: false } }).includes('data-show-words'), 'once shown they stay');
  const none = spokenHtml(block, { speech: { voice: false, hide: true, words: false, heard: false } });
  check(none.includes('Name the three') && !none.includes('data-hear') && none.includes('data-no-voice'), 'with no voice the words are shown, whatever was held back, and the phone is said to have none');
}

/* ---------- the feedback after an answer from memory ---------- */
{
  const inst = instanceOf(civics, 'q16'), item = inst.item;
  const html = (answer, r, claim = true) => feedbackHtml(civics, inst, null, { say: answer }, { r: { say: r }, ok: r !== 'no' }, { claim, at: 3 });
  const hit = html('judicial, executive, legislative', 'ok');
  check(hit.includes('Right') && hit.includes('data-accepted') && (hit.match(/<li/g) || []).length === 2 && (hit.match(/class="given"/g) || []).length === 1 && !hit.includes('data-claim'), 'a right answer: both accepted answers, the one given marked, no claim');
  const miss = html('left right', 'no');
  check(miss.includes('Not this one') && miss.includes('Legislative, executive, and judicial') && miss.includes('Congress, president, and the courts') && (miss.match(/class="given"/g) || []).length === 0, 'a miss: every accepted answer, none marked');
  check(miss.includes('data-claim="say"') && miss.includes('data-claim-at="3"') && miss.includes(SAY.recallClaim), 'a miss offers "my answer means the same", for its place in the list');
  check(!html('left right', 'no', false).includes('data-claim'), 'where claims are not offered (a baseline) there is none');
  check(!html('', 'no').includes('data-claim=') && html('', 'no').includes(SAY.recallNotYet), 'Not yet shows the answers and offers no claim');
  const claimed = html('left right', 'claimed');
  check(claimed.includes('Counted on your word') && claimed.includes('data-claimed') && !claimed.includes('data-claim='), 'a claimed answer says so, once');
  check(!/Words in brackets are optional/.test(hit) && /Words in brackets are optional/.test(feedbackHtml(civics, instanceOf(civics, 'q18'), null, { say: 'x' }, { r: { say: 'no' }, ok: false })), 'the note on brackets is there when an accepted answer has some');
  check(miss.includes(item.reason), 'the line of meaning follows the answers');
  const fact = feedbackHtml(interview, instanceOf(interview, 'news-veto'), null, { who: 'court' }, { r: { who: 'no' }, ok: false });
  check(/data-fact/.test(fact) && fact.includes('Name one power of the president.') && fact.includes('Vetoes bills') && fact.includes('Chief diplomat'), 'a news answer prints the interview question it rests on, with its accepted answers');
  const asked = itemHtml(civics, inst, { a: {}, many: {}, marks: false, support: null, typed: { say: 'abc' }, speech: { voice: true, hide: false, words: false, heard: false } });
  check(asked.includes('data-spoken') && asked.includes('data-recall="say"') && asked.includes('value="abc"') && asked.includes('data-recall-skip="say"') && /data-recall-answer="say"\s*>/.test(asked) && /data-recall-answer="say"\s+disabled/.test(itemHtml(civics, inst, { a: {}, many: {}, marks: false, support: null, typed: {}, speech: null })), 'the question shows its spoken block and a box that keeps what was typed, with Not yet, and Answer only once something is typed');
}

/* ---------- Civics' pilot is the official list ---------- */
{
  const list = JSON.parse(await readFile(new URL('./fixtures/uscis-m1778-lesson1.json', import.meta.url), 'utf8'));
  check(list.form === 'M-1778 (09/25)' && /^https:\/\/www\.uscis\.gov\//.test(list.source) && /^\d{4}-\d\d-\d\d$/.test(list.lookedUp), 'the official list is named, with where it is and the day it was looked up');
  same(list.questions.map(q => q.n), [15, 16, 17, 18, 19, 20, 40, 41, 42, 43, 44, 45, 46, 47, 50, 51, 52], 'the list holds the 17 questions of part 1 of the design (Q15 to 20, 40 to 47, 50 to 52)');
  list.questions.forEach(q => {
    const item = civics.items[`q${q.n}`];
    check(!!item, `Q${q.n} is an item`);
    if (!item) return;
    same(item.blocks.map(b => [b.kind, b.text]), [['spoken', q.question]], `Q${q.n}: the question is the official wording, read aloud`);
    const ask = item.asks[0];
    same(ask.accept.map(e => typeof e === 'string' ? e : e.text), q.answers, `Q${q.n}: the accepted answers are the official ones, in order`);
    check(item.strand === `q${q.n}` && civics.meta.strands.some(s => s.id === item.strand) && item.asks.length === 1 && ask.kind === 'text' && !ask.count, `Q${q.n}: one question, its own topic, one answer wanted`);
    ask.accept.filter(e => typeof e !== 'string').forEach(e => check(e.parts.every(p => e.text.toLowerCase().includes(p.toLowerCase())), `Q${q.n}: "${e.text}" is said in the parts it lists`));
    q.answers.forEach((answer, i) => check(recallMatch(ask, answer.replace(/\s*\([^)]*\)/g, '')) !== null && recallMatch(ask, answer) !== null, `Q${q.n}: the official answer "${answer}" is accepted as printed and without its brackets`));
  });
  const l1 = civics.lessons.l1, sets = l1.flow.filter(s => s.set).map(s => s.set.items), inSets = sets.flat();
  same([...inSets].sort(), list.questions.map(q => `q${q.n}`).sort(), 'the groups ask the 17 questions, each once');
  same([...l1.check.items].sort(), [...inSets].sort(), 'the check asks the same 17 again');
  check(l1.check.recall === true && l1.check.order === 'shuffle' && l1.check.feedback === 'at-end' && l1.check.pass.length === 1 && l1.check.pass[0].right.min === 16, 'the check is mixed, shows nothing until the end, and wants 16 of 17 (9 in 10)');
  check(l1.part === '1' && civics.meta.parts[0].title === 'Who does what' && l1.status === 'draft', 'the pilot is the lesson of part 1, still a draft');
  check(Object.keys(civics.lessons).join() === 'l1', 'only the pilot is built');
  const refs = civics.meta.refs;
  check(refs.some(r => r.source === list.source && r.asOf === list.lookedUp && /M-1778/.test(r.value)), 'the record names the list, its link and the day it was looked up');
  check(civics.meta.strands.length === 17 && civics.meta.own.answers.fields.filter(f => f.type === 'text').map(f => f.id).join() === 'q23,q29,q30,q38,q39,q57,q61,q62'
    && civics.meta.own.answers.fields.find(f => f.id === 'interviewDate').type === 'date', 'the record asks for the eight answers that vary, and the interview date');
  // a typed answer of every kind of the pilot's, run through a whole group as the app does
  const q = list.questions.find(x => x.n === 16);
  check(checkResult(civics, [{ right: { min: 16 } }], Array.from({ length: 17 }, (_, i) => ({ facets: {}, r: { say: i < 16 ? 'ok' : 'no' }, ok: i < 16 }))).passed && !checkResult(civics, [{ right: { min: 16 } }], Array.from({ length: 17 }, (_, i) => ({ facets: {}, r: { say: i < 15 ? 'ok' : 'no' }, ok: i < 15 }))).passed, `16 of 17 passes and 15 does not (${q.n})`);
}

/* ---------- the learner view prints what a learner meets ---------- */
{
  const loaded = await loadAll({ fixture: true });
  const pilot = renderLesson(loaded, 'civics', 'l1');
  check(pilot.includes('Name the three branches of government.') && pilot.includes('Hear the question') && pilot.includes('Executive branch') && pilot.includes('The same 17 questions again') && pilot.includes('My answer means the same'),
    'the learner view of the pilot prints the questions, the way to hear them, the accepted answers, the claim and the check that asks the 17 again');
  const mock = renderLesson(loaded, 'interview', 'l3'), answers = renderLesson(loaded, 'interview', 'l2'), news = renderLesson(loaded, 'interview', 'l4');
  check(/The check is spoken/.test(mock) && /drawn at random/.test(mock) && /Show the words/.test(mock), 'the learner view of the mock interview says it is spoken and drawn at random');
  check(/On your own answers/.test(answers) && answers.includes('uscis.gov/citizenship/testupdates') && /semicolon/.test(answers) && /reads the answer the learner entered/.test(answers), 'the learner view of the answers step names the page, the semicolon and the questions that read them');
  check(/The interview question this rests on: Name one power of the president\./.test(news), 'the learner view of a news answer prints the interview question it rests on');
}

if (failures.length) {
  console.error(`✗ ${failures.length} of ${checks} Civics checks failed:`);
  failures.forEach(f => console.error('  - ' + f));
  process.exit(1);
}
console.log(`✓ ${checks} Civics checks passed`);
