// X14, X19, X43 and X44, on the test subject "Quick answers" (tests/fixtures/fixture-subject/interview-*.js), in Chromium. Each is a function of the
// environment (e2e-env.mjs) that drives the real app and returns its checker; tests/e2e-controls.mjs runs each against the app with a seeded fault and
// requires exactly that check to go red.
//   X14 (lesson standard 9, `text`): an answer from memory. What counts as the same (case, punctuation, brackets in or out, "27" and "twenty-seven",
//       one small misspelling, parts in any order, two different answers for "name two") is right and a near miss is wrong; the box (Answer shut until
//       something is typed, Enter sends it, "Not yet" records a try as a miss); the answers the list accepts all shown with the one given marked; "my
//       answer means the same" (counted right in that sitting, logged, listed, its repeat taken off the group, and still not a good day: the question
//       comes back two days later, where a right answer waits a week).
//   X19 (9, `spoken`): a question read aloud. Nothing is spoken until the learner taps; only a voice on the phone is used; with none the words
//       are shown; the next question is read when Next is tapped; a replay; speech stops on leaving; a check read aloud holds its words back behind
//       "Show the words".
//   X43 (new with step 9, 3 to 9): the mock interview, a check drawn at random and read aloud, taken a second time a week later: what its first screen says,
//       that it holds five different questions and leaves out those about the learner's own answers until they are entered, that nothing is shown
//       between questions, the result and every answer at the end, an answer counted on the learner's word, and the second mock, in the review, a
//       different five where there are some.
//   X44 (new with step 9): the learner's own answers and the interview date. The form on the subject screen and as a step of a lesson; required
//       fields, a run of eight digits refused, a date; kept in pl:<subject>:notes alone; the questions read what was entered (two senators with a
//       semicolon); the page to look them up on; export and delete; and the rounds a week apart in the six weeks before the date, in the review.
import { britishIn } from './american.mjs';
import { MONDAY, WEDNESDAY, FRIDAY, NEXT_MONDAY, NEXT_WEDNESDAY, VOICES, stubbed, spoken, cancelled, look, known, WRONG, type, next, more, runRecall, screenText, storedItems,
  storedNotes, storedLog, triesOf } from './e2e-interview-drive.mjs';

const plainWords = async (c, page, env, label) => {   // the words of a screen, where its layout is another check's
  const jargon = await env.jargonShown(page), british = britishIn(await page.evaluate(() => document.querySelector('#screen').textContent));
  c.check(jargon.length === 0 && british.length === 0, `${label}: shows ${[...jargon, ...british].map(w => `"${w}"`).join(', ')}`);
};
const openLesson = async (env, page, id) => { await env.openSubject(page, 'interview'); await env.clickVisible(page, `#screen [data-l="${id}"]`); };
const box = page => page.locator('[data-recall="say"]');
const queueAhead = page => page.evaluate(() => Q.list.slice(Q.at + 1).map(i => i.key + (i.redo ? '*' : '')));
// each mark as "what it says | what it adds"
const marks = page => page.evaluate(() => [...document.querySelectorAll('.marks .mark')].map(m => [...m.children].map(e => e.textContent.replace(/\s+/g, ' ').trim()).join(' | ')));
const accepted = page => page.locator('[data-accepted] li').allTextContents().then(list => list.map(t => t.replace(/\s+/g, ' ').trim()));

/* ---------- X14: what counts as the same ---------- */
// [question, what is typed, the result]: the rules of 3, each as a row
const MATCHING = [
  ['form', 'REPUBLIC!', 'ok'], ['form', '  representative   democracy ', 'ok'], ['form', 'republic and democracy', 'no'], ['form', '', 'no'], ['form', '   ', 'no'],
  ['law', 'constitution', 'ok'], ['law', 'US Constitution', 'ok'], ['law', 'the u.s. constitution', 'ok'], ['law', 'constitutoin', 'ok'], ['law', 'consitution!', 'ok'],
  ['law', 'constitutions amended', 'no'], ['law', 'the supreme law', 'no'],
  ['amend', '27', 'ok'], ['amend', 'twenty-seven', 'ok'], ['amend', 'Twenty seven (27)', 'ok'], ['amend', 'twenty-eight', 'no'], ['amend', '27 amendments', 'no'],
  ['house', 'four hundred thirty-five', 'ok'], ['house', 'four hundred and thirty five', 'ok'], ['house', '435', 'ok'], ['house', '436', 'no'], ['senate', 'one hundred', 'ok'],
  ['declare', 'declaration of independance', 'ok'], ['declare', 'declarashun of independanse', 'no'], ['declare', 'declaration of independence of america', 'no'],
  ['court', 'supreme court', 'ok'], ['court', 'district court', 'no'], ['court', 'supreme', 'no'],
  ['branches', 'judicial, legislative and executive', 'ok'], ['branches', 'president courts congress', 'ok'], ['branches', 'Legislative, executive, and judicial', 'ok'],
  ['branches', 'legislative and executive', 'no'], ['branches', 'legislative executive federal', 'no'], ['branches', 'congress executive judicial', 'no'],
  ['oath', 'defend the constitution and obey the laws of the united states', 'ok'], ['oath', 'obey the laws of the united states, serve in the military', 'ok'],
  ['oath', 'defend the constitution, be loyal to the united states; obey the laws of the united states', 'ok'], ['oath', 'defend the constitution', 'no'],
  ['oath', 'defend the constitution, defend the constitution', 'no'], ['oath', 'defend the constitution and eat cake', 'no'], ['oath', 'give op loyalty to other countries and defend the constitution', 'no'],
  ['power', 'vetoes bills', 'ok'], ['power', 'vetoes bills and signs bills into law', 'ok'], ['power', 'enforce laws', 'ok'], ['power', 'vetos bils', 'no'],
  ['vote', 'citizen', 'ok'], ['vote', 'u.s. citizens', 'ok']
];
async function whatCountsAsTheSame(env, c, page) {
  const got = await page.evaluate(rows => rows.map(([id, words]) => { const d = FC.get('interview'); return scoreItem(d, d.items[id], null, { say: words }).r.say; }), MATCHING);
  MATCHING.forEach(([id, words, want], i) => c.check(got[i] === want, `${id}: ${JSON.stringify(words)} is ${got[i] === 'ok' ? 'right' : 'a miss'}, not ${want === 'ok' ? 'right' : 'a miss'}`));
  const count = await page.evaluate(() => { const d = FC.get('interview'), ask = d.items.oath.asks[0]; return [recallMatch(ask, 'defend the constitution and obey the laws of the united states').used.length, recallMatch(ask, 'defend the constitution, defend the constitution')]; });
  c.check(count[0] === 2 && count[1] === null, `"name two": two different answers are two, and the same answer twice is not (${JSON.stringify(count)})`);
}

/* ---------- X14: the box, the accepted answers, a claim ---------- */
async function theBox(env, c, page) {
  await openLesson(env, page, 'l1');
  await env.goOn(page); await env.goOn(page);   // the why, the teaching screen
  // an answer typed: Answer is shut until something is, Enter sends it, the answers the list accepts follow with the one given marked
  let now = await look(page);
  c.check(now.key === 'form' && await page.locator('[data-recall="say"]').count() === 1 && await page.locator('[data-recall-skip="say"]').count() === 1, 'the first question has no box to type in, or no "Not yet"');
  c.check(await page.locator('[data-recall-answer="say"]').isDisabled(), 'Answer is open with nothing typed');
  await box(page).fill('REPUBLIC!');
  c.check(await page.locator('[data-recall-answer="say"]').isEnabled(), 'Answer stays shut when something is typed');
  await box(page).press('Enter');
  c.check(await page.locator('[data-feedback]').count() === 1, 'Enter does not send the answer');
  c.check(JSON.stringify(await marks(page)) === '["Right | You said: REPUBLIC!"]', `the mark after a right answer is ${JSON.stringify(await marks(page))}`);
  c.check(JSON.stringify(await accepted(page)) === JSON.stringify(['Republic You gave this one', 'Constitution-based federal republic', 'Representative democracy']), `the accepted answers are not all shown with the one given marked (${JSON.stringify(await accepted(page))})`);
  c.check(await page.locator('li.given').count() === 1 && await page.locator('[data-claim]').count() === 0 && await box(page).count() === 0, 'a right answer offers a claim, or still shows the box');
  c.check(/The people choose representatives to make the laws/.test(await screenText(page)), 'the line of meaning does not follow the accepted answers');
  await plainWords(c, page, env, 'a right answer from memory');
  await next(page);
  // "Not yet": a try, as a miss, with every accepted answer shown and no claim
  now = await look(page);
  c.check(now.key === 'law', `the second question is ${now.key}`);
  await page.locator('[data-recall-skip="say"]').click();
  c.check(JSON.stringify(await marks(page)) === '["Not yet"]' && JSON.stringify(await accepted(page)) === '["(U.S.) Constitution"]' && await page.locator('[data-claim]').count() === 0, `Not yet does not show the answers, only the answers and no claim (${JSON.stringify(await marks(page))})`);
  c.check(/Words in brackets are optional/.test(await screenText(page)), 'an accepted answer with a bracket does not say that brackets are optional');
  const law = await triesOf(page, 'interview', 'law');
  c.check(law.length === 1 && law[0].a.say === '' && law[0].r.say === 'no' && law[0].ok === false && law[0].context === 'practice', `Not yet is not stored as a try that is a miss (${JSON.stringify(law)})`);
  await next(page);
  // a miss, then "my answer means the same"
  now = await look(page);
  c.check(now.key === 'amend', `the third question is ${now.key}`);
  await type(page, 'twenty eight');
  c.check(JSON.stringify(await marks(page)) === '["Not this one | You said: twenty eight"]', `the mark after a miss is ${JSON.stringify(await marks(page))}`);
  c.check(await page.locator('li.given').count() === 0 && await page.locator('[data-claim]').count() === 1 && /the question comes back later to be sure/.test(await screenText(page)), 'a miss does not offer "my answer means the same", or marks an answer as given');
  c.check(JSON.stringify(await queueAhead(page)) === '["law*","amend*"]', `the two misses do not wait to come back (${JSON.stringify(await queueAhead(page))})`);
  await page.locator('[data-claim]').click();
  c.check(JSON.stringify(await marks(page)) === '["Counted on your word | You said: twenty eight"]' && await page.locator('[data-claim]').count() === 0 && await page.locator('[data-claimed]').count() === 1, `a claimed answer is not marked as counted on the learner's word (${JSON.stringify(await marks(page))})`);
  c.check(JSON.stringify(await queueAhead(page)) === '["law*"]', `a claimed answer still waits to be asked again (${JSON.stringify(await queueAhead(page))})`);
  const amend = await triesOf(page, 'interview', 'amend');
  c.check(amend.length === 1 && amend[0].r.say === 'claimed' && amend[0].ok === true && amend[0].a.say === 'twenty eight', `the stored try is not the answer, counted right and said to be claimed (${JSON.stringify(amend)})`);
  c.check((await storedLog(page)).filter(e => e.type === 'claim' && e.subject === 'interview' && e.item === 'amend').length === 1, 'a claim is not logged');
  await plainWords(c, page, env, 'a claimed answer');
  await next(page);
  now = await look(page);
  c.check(now.key === 'law' && now.redo, `the miss does not come back (${now.key}${now.redo ? '*' : ''})`);
  await type(page, 'constitution');
  await next(page);
  c.check(/2 of 3 right the first time/.test(await screenText(page)), `an answer counted on the learner's word is not counted right in the group (${(await screenText(page)).slice(0, 200)})`);
  await env.goOn(page);
  // parts in any order are right; one answer for two is a miss that still offers a claim
  now = await look(page);
  c.check(now.key === 'branches', `the first question of the second group is ${now.key}`);
  await type(page, 'judicial, legislative and executive');
  c.check(JSON.stringify(await accepted(page)) === JSON.stringify(['Legislative, executive, and judicial You gave this one', 'Congress, president, and the courts']), `an answer in parts is not marked as the answer given (${JSON.stringify(await accepted(page))})`);
  await next(page);
  c.check((await look(page)).wants === 2 && /Give two different answers/.test(await screenText(page)), 'a question that wants two answers does not say so');
  await type(page, 'defend the constitution');
  c.check(JSON.stringify(await marks(page)) === '["Not this one | You said: defend the constitution"]' && await page.locator('[data-claim]').count() === 1, 'one answer where two are wanted is not a miss with a claim');
  await next(page);
  await type(page, await known(page));
  await next(page);
  c.check(/1 of 2 right the first time/.test(await screenText(page)), 'the second group does not end on "1 of 2 right the first time"');
}

/* ---------- X14: the check, claims among its answers, and the review two days later ---------- */
async function theCheckAndTheReview(env, c, page) {
  await env.goOn(page);   // the check's first screen
  const intro = await screenText(page);
  c.check(/The same five questions again/.test(intro) && /At least 4 right/.test(intro), `the check does not say it asks the same five again (${intro.slice(0, 200)})`);
  await env.goOn(page);
  const asked = await runRecall(page, { miss: ['amend', 'oath'] });
  c.check(asked.length === 5 && new Set(asked.map(a => a.key)).size === 5 && asked.every(a => !a.redo), `the check is not five different questions, each once (${asked.map(a => a.key)})`);
  let text = await screenText(page);
  c.check(/3 of 5: not yet/.test(text), `the result is not "3 of 5: not yet" (${text.slice(0, 120)})`);
  c.check(await page.locator('[data-claim][data-claim-at]').count() === 2, 'the answers listed after the check do not each offer a claim');
  await page.locator('[data-claim][data-claim-at]').first().click();
  text = await screenText(page);
  c.check(/4 of 5: passed/.test(text) && await page.locator('[data-claim][data-claim-at]').count() === 1, `a claim among the answers does not change the result to "4 of 5: passed" (${text.slice(0, 120)})`);
  c.check(await page.locator('[data-claimed-list]').count() === 1 && /How many amendments|Name two promises/.test(await page.locator('[data-claimed-list]').textContent()), 'the answers counted on the learner\'s word are not listed under the result');
  const stored = await storedItems(page, 'interview');
  const claimedKey = Object.keys(stored).find(k => stored[k].tries.some(t => t.context === 'check' && t.r.say === 'claimed'));
  c.check(!!claimedKey && stored[claimedKey].tries.find(t => t.context === 'check').ok === true, 'the claim in the check is not stored on its try');
  // the results screen lists what was counted on the learner's word
  await env.clickVisible(page, '[data-v="subject"]');
  await env.clickVisible(page, '#screen [data-v="results"]');
  c.check(/Counted on your word/.test(await screenText(page)) && /How many amendments does the U.S. Constitution have\?/.test(await screenText(page)), 'the results do not list the answers counted on the learner\'s word');
  // two days later: the review. One answer is missed and claimed: it is not a good day. The others are right.
  await env.setDay(page, WEDNESDAY);
  await env.toLibrary(page);
  const tile = await page.locator('[data-review-tile]').textContent();
  c.check(/5 due/.test(tile), `the review does not hold the five topics two days after the check (${tile.replace(/\s+/g, ' ').slice(0, 120)})`);
  await page.locator('[data-review-start]').first().click();
  await page.locator('#beginBlock').click();
  let claimed = false;
  for (let n = 0; await more(page, n); n++) {
    const now = await look(page);
    if (now.key === 'form' && !claimed) {
      await type(page, WRONG);
      await page.locator('[data-claim]').click();
      claimed = true;
    } else await type(page, await known(page));
    await next(page);
  }
  const schedule = await page.evaluate(() => { const s = strandSchedules(FC.get('interview'), 'interview'); return Object.fromEntries(['form', 'law', 'amend', 'branches', 'oath'].map(k => [k, [s[k].level, s[k].due]])); });
  c.check(JSON.stringify(schedule.form) === JSON.stringify([0, FRIDAY]), `an answer counted on the learner's word was a good day: it comes back ${JSON.stringify(schedule.form)}, not on ${FRIDAY} at level 0`);
  c.check(['law', 'amend', 'branches', 'oath'].every(k => JSON.stringify(schedule[k]) === JSON.stringify([1, NEXT_WEDNESDAY])), `a right answer in the review does not wait a week (${JSON.stringify(schedule)})`);
  c.check((await storedLog(page)).filter(e => e.type === 'claim').length === 3, 'the three claims are not all logged');
}

export async function X14(env) {
  const c = env.checker('X14'), { context, page } = await env.freshPage(c);
  await env.setDay(page, MONDAY);
  await whatCountsAsTheSame(env, c, page);
  await theBox(env, c, page);
  await theCheckAndTheReview(env, c, page);
  await context.close();
  return c;
}

/* ---------- X19: a question read aloud ---------- */
const hearButton = page => page.locator('[data-hear]');
async function nothingUntilATap(env, c, page) {
  await openLesson(env, page, 'l1');
  await env.goOn(page); await env.goOn(page);
  c.check((await look(page)).key === 'form', 'the first question is not the first of the group');
  await page.waitForTimeout(500);
  c.check((await spoken(page)).length === 0, `a question was read aloud before the learner tapped (${JSON.stringify(await spoken(page))})`);
  c.check(await hearButton(page).count() === 1 && /Hear the question/.test(await hearButton(page).textContent()) && await page.locator('[data-spoken-words]').count() === 1, 'a question with a voice has no "Hear the question", or no words');
  await plainWords(c, page, env, 'a question that can be read aloud');
  // a reload puts the learner back in the middle of the group, and nothing is read then either
  await env.reload(page);
  await page.waitForTimeout(300);
  await env.openSubject(page, 'interview');
  await env.clickVisible(page, '#screen #resume');
  c.check((await spoken(page)).length === 0, 'a question was read aloud when the lesson was opened again');
}
async function aTapReadsIt(env, c, page) {
  if (await page.locator('[data-hear]').count() === 0) { await env.goOn(page); await env.goOn(page); }
  const now = await look(page);
  await hearButton(page).click();
  const first = await spoken(page);
  c.check(first.length === 1 && first[0].text === now.question, `tapping "Hear the question" did not read the question (${JSON.stringify(first)})`);
  c.check(first.length === 1 && first[0].voice === 'Phone voice', `a voice that is not on the phone was used (${JSON.stringify(first.map(s => s.voice))})`);
  c.check(/Hear it again/.test(await hearButton(page).textContent()), 'after a question is heard the button does not offer to hear it again');
  await hearButton(page).click();
  c.check((await spoken(page)).length === 2 && (await spoken(page))[1].text === now.question, 'hearing it again did not read it a second time');
  // the next question is read when Next is tapped, once the learner has tapped to hear one
  await box(page).fill('abc');
  await hearButton(page).click();
  c.check(await box(page).inputValue() === 'abc', 'what was typed is lost when the question is read again');
  await type(page, await known(page));
  c.check((await spoken(page)).length === 3, 'a question was read when it was answered, before Next was tapped');
  await next(page);
  const second = await look(page), said = await spoken(page);
  c.check(said.length === 4 && said[3].text === second.question && second.key !== now.key, `the next question was not read when Next was tapped (${JSON.stringify(said.map(s => s.text))})`);
  // leaving stops the voice
  const before = await cancelled(page);
  await env.toLibrary(page);
  c.check((await cancelled(page)) > before, 'leaving the lesson did not stop the voice');
}
async function noVoiceOnThisPhone(env, c, voices, label) {
  const { context, page } = await env.freshPage(c, 390, stubbed(voices));
  await openLesson(env, page, 'l1');
  await env.goOn(page); await env.goOn(page);
  const now = await look(page), text = await screenText(page);
  c.check(await hearButton(page).count() === 0 && await page.locator('[data-no-voice]').count() === 1 && text.includes(now.question), `${label}: a phone with no voice of its own does not show the words and say so`);
  await type(page, await known(page));
  await next(page);
  c.check((await spoken(page)).length === 0, `${label}: something was read aloud with no voice on the phone`);
  await plainWords(c, page, env, `${label}: a question with no voice`);
  // the mock interview holds its words back only when there is a voice to hear them with
  await env.openSubject(page, 'interview');
  await env.clickVisible(page, '#screen [data-l="l3"]');
  await env.goOn(page); await env.goOn(page); await env.goOn(page);
  const mock = await look(page);
  c.check(await page.locator('[data-spoken-words]').count() === 1 && (await page.locator('[data-spoken-words]').textContent()) === mock.question && await page.locator('[data-show-words]').count() === 0, `${label}: the mock interview hides the words of a question that cannot be heard`);
  await context.close();
}
async function aCheckReadAloud(env, c, page) {
  await env.openSubject(page, 'interview');
  await env.clickVisible(page, '#screen [data-l="l3"]');
  await env.goOn(page); await env.goOn(page);   // the why, the screen before the check
  const intro = await screenText(page);
  c.check(/read aloud/.test(intro) && /Show the words/.test(intro) && /uscis\.gov\/citizenship\/testupdates/.test(intro), `the first screen of the mock interview does not say it is read aloud, that the words are held back, and where to check the answers (${intro.slice(0, 260)})`);
  await env.goOn(page);
  const before = (await spoken(page)).length;
  const now = await look(page);
  c.check(await page.locator('[data-spoken-words]').count() === 0 && !(await screenText(page)).includes(now.question) && await page.locator('[data-show-words]').count() === 1 && await hearButton(page).count() === 1, 'a question of the mock interview shows its words before the learner asked');
  c.check((await spoken(page)).length === before, 'the first question of the mock interview was read before the learner tapped');
  await hearButton(page).click();
  const said = await spoken(page);
  c.check(said.length === before + 1 && said[said.length - 1].text === now.question, 'the question of the mock interview was not read when the learner tapped');
  await page.locator('[data-show-words]').click();
  c.check(await page.locator('[data-spoken-words]').count() === 1 && (await page.locator('[data-spoken-words]').textContent()) === now.question && await page.locator('[data-show-words]').count() === 0, 'the words are not shown when the learner asks for them');
  await type(page, await known(page));
  await next(page);
  const second = await look(page);
  c.check(await page.locator('[data-spoken-words]').count() === 0 && !(await screenText(page)).includes(second.question), 'the words of the next question are shown without being asked for');
  c.check((await spoken(page)).slice(-1)[0].text === second.question, 'the next question of the mock interview was not read when Next was tapped');
  await plainWords(c, page, env, 'a question of the mock interview');
  let asked = 1;   // the second question was answered above
  for (let n = 0; await more(page, n); n++) { await type(page, await known(page)); await next(page); asked += 1; }
  c.check(asked >= 1 && await page.locator('.resitem .spoken-words').count() === asked, 'the answers listed after the mock interview do not show the words of every question');
}
export async function X19(env) {
  const c = env.checker('X19');
  const { context, page } = await env.freshPage(c, 390, stubbed(VOICES.both));
  await env.setDay(page, MONDAY);
  await nothingUntilATap(env, c, page);
  await aTapReadsIt(env, c, page);
  await aCheckReadAloud(env, c, page);
  await context.close();
  await noVoiceOnThisPhone(env, c, VOICES.networkOnly, 'only a voice that needs the network');
  await noVoiceOnThisPhone(env, c, VOICES.other, 'only a voice in another language');
  await noVoiceOnThisPhone(env, c, null, 'no speech at all');
  return c;
}

/* ---------- X43: the mock interview ---------- */
const OWN_KEYS = ['senator', 'governor', 'capital'];
const drawsIn = (page, runs) => page.evaluate(n => Array.from({ length: n }, (_, k) => { const d = FC.get('interview'); return drawInstances(d, 'interview', d.lessons.l3.check.items.draw, `x${k}`, [], 'l3').map(i => i.key); }), runs);
async function theDraw(env, c, page) {
  const draws = await drawsIn(page, 15);
  c.check(draws.every(list => list.length === 5 && new Set(list).size === 5), `a draw is not five different questions (${JSON.stringify(draws.find(l => l.length !== 5 || new Set(l).size !== 5))})`);
  const groups = await page.evaluate(() => FC.get('interview').lessons.l3.check.items.draw.map(g => ({ strands: g.strands, n: g.n })));
  c.check(draws.every(list => groups.every(g => list.filter(k => g.strands.includes(k)).length === g.n)), `a draw does not hold exactly the n of each group (${JSON.stringify(groups.map(g => g.n))}): ${JSON.stringify(draws.find(l => !groups.every(g => l.filter(k => g.strands.includes(k)).length === g.n)))}`);
  c.check(new Set(draws.map(l => [...l].sort().join())).size > 4, 'fifteen draws gave fewer than five different sets: the draw is not at random');
  c.check(draws.flat().every(k => !OWN_KEYS.includes(k)), `a question about the learner's own answers was drawn before the learner entered them (${draws.flat().filter(k => OWN_KEYS.includes(k))})`);
  c.check(JSON.stringify(await drawsIn(page, 15)) === JSON.stringify(draws), 'the same run does not draw the same questions');
}
async function theFirstMock(env, c, page) {
  await openLesson(env, page, 'l3');
  await env.goOn(page); await env.goOn(page);
  const intro = await screenText(page);
  c.check(/Five questions drawn at random from the whole list, with no help/.test(intro) && /At least 4 right/.test(intro) && /You will not see any answer until the end/.test(intro), `the first screen of the mock interview does not name a draw of five, its rule and that nothing is shown until the end (${intro.slice(0, 240)})`);
  await env.inspect(c, page, 'the first screen of the mock interview');
  await env.goOn(page);
  const asked = [];
  for (let n = 0; await more(page, n); n++) {
    const now = await look(page);
    asked.push(now);
    await type(page, asked.length === 1 ? WRONG : await known(page));
    await next(page);
  }
  c.check(asked.length === 5 && new Set(asked.map(a => a.key)).size === 5 && asked.every(a => !a.redo && !OWN_KEYS.includes(a.key)), `the mock interview is not five different questions, each once (${asked.map(a => a.key)})`);
  const text = await screenText(page);
  c.check(/4 of 5: passed/.test(text) && /At least 4 right/.test(text), `the mock interview did not end on "4 of 5: passed" with its rule (${text.slice(0, 140)})`);
  c.check(await page.locator('.resitem').count() === 5 && await page.locator('.resitem').first().locator('.mark.no').count() === 1, 'the answers after the mock interview are not all five, the miss first');
  await env.inspect(c, page, 'the result of the mock interview');
  return asked.map(a => a.key);
}
async function theSecondMock(env, c, page, first) {
  await env.setDay(page, NEXT_MONDAY);
  await env.toLibrary(page);
  await page.locator('[data-review-start]').first().click();
  const blocks = await page.evaluate(() => REVIEW.parts.flatMap(p => p.blocks.map(b => b.kind)));
  c.check(blocks.includes('retest'), `the review a week later does not hold the second mock interview (${blocks})`);
  await page.locator('#beginBlock').click();   // the questions that are due come first
  await runRecall(page);
  c.check(await page.locator('#beginBlock').count() === 1 && /A second check of “The mock”/.test(await screenText(page)), 'the second mock interview does not begin with its own intro');
  await page.locator('#beginBlock').click();
  const asked = [];
  for (let n = 0; await more(page, n); n++) {
    const now = await look(page);
    asked.push(now);
    if (asked.length === 1) c.check(await page.evaluate(() => Q.spoken === true && Q.context === 'retest'), 'the second mock interview is not read aloud, with its words held back, as the first was');
    await type(page, asked.length <= 2 ? WRONG : await known(page));
    await next(page);
  }
  const keys = asked.map(a => a.key);
  c.check(keys.length === 5 && new Set(keys).size === 5 && keys.every(k => !first.includes(k)), `the second mock interview is not five questions the first did not ask (${keys} after ${first})`);
  let text = await screenText(page);
  c.check(/3 of 5: not yet/.test(text) && /Second check: The mock/.test(text), `the second mock interview did not end on "3 of 5: not yet" (${text.slice(0, 140)})`);
  c.check(await page.locator('[data-claim][data-claim-at]').count() === 2, 'the answers of the second mock interview do not each offer a claim');
  await page.locator('[data-claim][data-claim-at]').first().click();
  text = await screenText(page);
  c.check(/4 of 5: passed/.test(text) && /Counted on your word/.test(text), `a claim among the answers of the second mock interview does not change its result (${text.slice(0, 140)})`);
  const stored = await storedItems(page, 'interview');
  const retest = Object.values(stored).flatMap(e => e.tries).filter(t => t.context === 'retest');
  c.check(retest.length === 5 && retest.every(t => t.lesson === 'l3') && retest.filter(t => t.r.say === 'claimed').length === 1, `the second mock interview is not stored as five tries of lesson 3, one of them claimed (${JSON.stringify(retest.map(t => t.r))})`);
}
export async function X43(env) {
  const c = env.checker('X43'), { context, page } = await env.freshPage(c, 390, stubbed(VOICES.both));
  await env.setDay(page, MONDAY);
  await theDraw(env, c, page);
  const first = await theFirstMock(env, c, page);
  await theSecondMock(env, c, page, first);
  await context.close();
  return c;
}

/* ---------- X44: the learner's own answers and the interview date ---------- */
const ENTERED = { q23: 'Jane Doe; John Roe', q61: 'Gov Smith', q62: 'Springfield' };
const SECRETS = ['Jane Doe', 'John Roe', 'Gov Smith', 'Springfield'];
const answersNotes = page => storedNotes(page, 'interview');
async function nothingEntered(env, c, page) {
  await env.openSubject(page, 'interview');
  const text = await screenText(page);
  c.check(/Your answers and interview date/.test(text) && (text.match(/Not entered yet/g) || []).length === 4 && /Enter my answers/.test(text), `the subject screen does not show the four answers as not entered, with a way to enter them (${text.slice(-420)})`);
  const link = await page.locator('[data-updates-link]').first().evaluate(a => ({ href: a.getAttribute('href'), target: a.getAttribute('target'), rel: a.getAttribute('rel') }));
  c.check(link.href === 'https://www.uscis.gov/citizenship/testupdates' && link.target === '_blank' && /noopener/.test(link.rel), `the link to the page that posts the answers is ${JSON.stringify(link)}`);
  await env.inspect(c, page, 'the subject screen with no answers entered');
}
async function theStep(env, c, page) {
  await env.clickVisible(page, '#screen [data-l="l2"]');
  await env.goOn(page);   // the why: then the step where they are entered
  const labels = await page.locator('[data-own-answers] .formlabel').allTextContents();
  c.check(JSON.stringify(labels) === JSON.stringify(['Who is one of your state’s U.S. senators now?', 'Who is the governor of your state now?', 'What is the capital of your state?', 'The day of your interview (optional)']), `the form does not ask the questions in the list's words, then the day (${JSON.stringify(labels)})`);
  c.check(await page.locator('#fwd').count() === 0 && await page.locator('#answersSave').count() === 1, 'the step lets the learner go on before they have saved their answers');
  await env.inspect(c, page, 'the step where the answers are entered');
  await page.locator('#answersSave').click();
  const errors = await page.locator('.fielderr').allTextContents();
  c.check(errors.length === 3 && errors.every(e => /Fill this in/.test(e)) && await answersNotes(page) === null, `saving an empty form is not refused with a line under each of the three answers, or stored something (${JSON.stringify(errors)})`);
  c.check(await page.evaluate(() => document.activeElement.id) === 'own-q23', 'a refused form does not put the cursor on the first answer left empty');
  for (const [id, words] of Object.entries(ENTERED)) await page.locator(`#own-${id}`).fill(words);
  await page.locator('#own-interviewDate').fill(await page.evaluate(() => addDays(today(), 20)));
  await page.locator('#answersSave').click();
  const all = await answersNotes(page), notes = (all || {}).answers, today = await page.evaluate(() => today()), date = await page.evaluate(() => addDays(today(), 20));
  c.check(!!all && Object.keys(all).join() === 'answers' && JSON.stringify(Object.keys(notes || {}).sort()) === '["interviewDate","q23","q61","q62","saved"]' && notes.q23 === ENTERED.q23 && notes.q61 === ENTERED.q61 && notes.q62 === ENTERED.q62 && notes.interviewDate === date && notes.saved === today,
    `the answers and the date are not stored under answers alone with the day they were saved (${JSON.stringify(notes)})`);
  const saved = await screenText(page);
  c.check(/Your answers are saved/.test(saved) && /Look them up again before a mock interview/.test(saved) && await page.locator('#fwd').count() === 1, `saving does not say the answers are saved and to look them up again (${saved.slice(0, 200)})`);
  await env.inspect(c, page, 'the answers saved');
  await env.goOn(page);
}
async function readBack(env, c, page) {
  const asked = [];
  const words = { senator: 'John Roe', governor: 'Gov Smith', capital: 'Springfield' };
  for (let n = 0; await more(page, n); n++) {
    const now = await look(page);
    asked.push(now.key + (now.redo ? '*' : ''));
    // the first senator question is missed, to see the two entered; asked again, the second of them is right
    await type(page, now.key === 'senator' && !now.redo ? WRONG : words[now.key]);
    if (now.key === 'senator' && !now.redo) c.check(/Your own answers for this/.test(await screenText(page)) && JSON.stringify(await accepted(page)) === JSON.stringify(['Jane Doe', 'John Roe']), `after a miss the answers of a question about your own are not the two senators entered (${JSON.stringify(await accepted(page))})`);
    if (now.key === 'senator' && now.redo) c.check(JSON.stringify(await marks(page)) === '["Right | You said: John Roe"]', 'the second of two senators entered is not right');
    if (now.key === 'capital') c.check(JSON.stringify(await marks(page)) === '["Right | You said: Springfield"]', 'the capital entered is not right when it is typed as entered');
    await next(page);
  }
  c.check(asked.join() === 'senator,governor,capital,senator*', `the questions of lesson 2 are ${asked}`);
  c.check(/2 of 3 right the first time/.test(await screenText(page)), 'the questions read what was entered, and the group did not end on 2 of 3');
  await env.goOn(page);
  await env.goOn(page);
  await runRecall(page);
  c.check(/3 of 3: passed/.test(await screenText(page)), 'the check of the questions about your own answers is not passed 3 of 3');
}
async function theSubjectScreen(env, c, page) {
  await env.openSubject(page, 'interview');
  const text = await screenText(page);
  const date = await page.evaluate(() => longDay(addDays(today(), 20)));
  c.check(['Jane Doe; John Roe', 'Gov Smith', 'Springfield', date].every(w => text.includes(w)) && !/Not entered yet/.test(text) && /Change my answers/.test(text), `the subject screen does not show the answers and the day of the interview as entered (${text.slice(-420)})`);
  c.check(/Saved Nov 2\. Look them up again before a mock interview/.test(text), 'the subject screen does not say when they were saved and to look them up again');
  await env.inspect(c, page, 'the subject screen with the answers entered');
  // changed on the subject screen, with the form filled in as it was
  await page.locator('[data-answers-edit]').click();
  c.check(await page.locator('#own-q61').inputValue() === 'Gov Smith' && await page.locator('#own-q23').inputValue() === 'Jane Doe; John Roe', 'the form is not filled in with the answers already saved');
  await page.locator('#own-q61').fill('Gov Jones');
  await page.locator('#answersSave').click();
  const notes = ((await answersNotes(page)) || {}).answers || {};
  c.check(notes.q61 === 'Gov Jones' && notes.q23 === ENTERED.q23 && typeof notes.interviewDate === 'string', `a changed answer was not saved with the others (${JSON.stringify(notes)})`);
  await env.clickVisible(page, '#screen [data-v="subject"]');
  c.check(/Gov Jones/.test(await screenText(page)) && !/Gov Smith/.test(await screenText(page)), 'the changed answer is not on the subject screen');
  // a month on, they are old
  await env.setDay(page, '2026-12-04');
  await env.openSubject(page, 'interview');
  c.check(/more than a month ago/.test(await screenText(page)), 'answers saved more than a month ago are not said to be old');
  await env.setDay(page, MONDAY);
}
async function nothingElsewhere(env, c, page) {
  const places = { 'the progress screen': '[data-v="progress"]', 'the review': '[data-v="review"]', 'the library': '[data-v="library"]' };
  for (const [label, selector] of Object.entries(places)) {
    await env.clickVisible(page, selector);
    const text = await screenText(page);
    c.check(SECRETS.every(w => !text.includes(w)), `${label} shows what the learner entered`);
  }
  await env.openSubject(page, 'fixture');
  const other = await screenText(page), log = JSON.stringify(await storedLog(page));
  c.check(SECRETS.every(w => !other.includes(w)), 'another subject shows what the learner entered');
  c.check(SECRETS.every(w => !log.includes(w)), 'the log, which the export of every subject holds, shows what the learner entered');
}
async function theRounds(env, c, page) {
  // lesson 1's check, done today (a Monday): its five topics, and the date of the interview three weeks off (Sunday 22 November)
  await page.evaluate(() => ['form', 'law', 'amend', 'branches', 'oath'].forEach(k => recordTry('interview', k, { run: 'c1', lesson: 'l1', rev: 1, context: 'check', sup: false, a: { say: 'x' }, r: { say: 'ok' }, ok: true })));
  await env.setDay(page, WEDNESDAY);
  await page.evaluate(() => recordTry('interview', 'form', { run: 'r1', lesson: 'l1', rev: 1, context: 'review', sup: false, a: { say: 'x' }, r: { say: 'ok' }, ok: true }));
  const due = () => page.evaluate(() => strandSchedules(FC.get('interview'), 'interview').form.due);
  const rounds = await page.evaluate(() => roundDays(notesOf('interview').answers.interviewDate));
  c.check(JSON.stringify(rounds) === JSON.stringify(['2026-10-11', '2026-10-18', '2026-10-25', '2026-11-01', '2026-11-08', '2026-11-15']), `the rounds are not a week apart, six weeks, ending a week before the date (${JSON.stringify(rounds)})`);
  c.check(await due() === '2026-11-08', `a topic answered right on Wednesday is not due at the next round, Sunday 8 November (${await due()})`);
  await env.setDay(page, '2026-11-23');
  c.check(await due() === '2026-11-11', `after the day of the interview the rounds go on (${await due()})`);
  await env.setDay(page, WEDNESDAY);
  await page.evaluate(() => saveNote('interview', 'answers', { ...notesOf('interview').answers, interviewDate: undefined }));
  c.check(await due() === '2026-11-11', `with no date entered a topic answered right on Wednesday is not due a week on (${await due()})`);
}
async function withoutThem(env, c, page) {
  await page.evaluate(() => saveNote('interview', 'answers', { ...notesOf('interview').answers, q23: 'Jane Doe; John Roe', q61: 'Gov Jones', q62: 'Springfield' }));
  await env.toLibrary(page);
  const tile = () => page.locator('[data-review-tile]').first().textContent().then(t => t.replace(/\s+/g, ' '));
  const strands = () => page.evaluate(() => dueStrands(FC.get('interview'), 'interview', weekEnd()).map(s => s.strand.id).sort());
  c.check((await strands()).filter(k => OWN_KEYS.includes(k)).length === 3, `the topics about your own answers are not due the week after their check (${await strands()})`);
  await page.evaluate(() => deleteNotes('interview'));
  c.check((await strands()).filter(k => OWN_KEYS.includes(k)).length === 0, `a topic about your own answers is due with no answer entered (${await strands()})`);
  await env.toLibrary(page);
  c.check(!/Quick answers/.test(await tile()) || !/senator|governor|capital/i.test(await tile()), 'the review tile shows a question about your own answers');
}
export async function X44(env) {
  const c = env.checker('X44'), { context, page } = await env.freshPage(c, 390);
  await env.setDay(page, MONDAY);
  await nothingEntered(env, c, page);
  await theStep(env, c, page);
  await readBack(env, c, page);
  await theSubjectScreen(env, c, page);
  await nothingElsewhere(env, c, page);
  await theRounds(env, c, page);
  await withoutThem(env, c, page);
  await context.close();
  return c;
}

/* ---------- X3: every screen this step adds, at every width ---------- */
export async function walkInterview(env, c, page, label) {
  const at = name => env.inspect(c, page, `${label}/${name}`);
  await openLesson(env, page, 'l1');
  await env.goOn(page); await env.goOn(page);
  await at('a question to answer from memory');
  await type(page, WRONG); await at('a missed answer, with the accepted answers and the claim');
  await page.locator('[data-claim]').click(); await at('an answer counted on the learner\'s word');
  await next(page);
  await env.openSubject(page, 'interview'); await at('the subject with its own answers');
  await page.locator('[data-answers-edit]').click(); await at('the form for the answers');
  await page.locator('#answersSave').click(); await at('the form with a line under each answer left empty');
  await env.openSubject(page, 'interview');
  await env.clickVisible(page, '#screen [data-l="l3"]');
  await env.goOn(page); await env.goOn(page); await at('the first screen of the mock interview');
  await env.goOn(page); await at('a question of the mock interview, its words held back');
  if (await page.locator('[data-show-words]').count()) { await page.locator('[data-show-words]').click(); await at('a question of the mock interview, its words shown'); }
  await type(page, WRONG);
  for (let n = 0; await more(page, n); n++) { await next(page); if (await page.locator('[data-recall]').count()) await type(page, WRONG); }
  await at('the result of the mock interview, with every answer and the claims');
}

export const INTERVIEW_CHECKS = { X14, X19, X43, X44 };
