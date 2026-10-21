// X45: Civics' pilot lesson, "Who does what", end to end on a phone (375 px). Not one of the checks the standard lists in 9: it was added with step 9
// (3 to 9), the way step 8 ran Scams' pilot (X41). The test plays a learner who types every answer: the subject screen (the pilot and the thirteen parts
// not built yet), the why and the map of the three branches, four groups of questions (the three branches with two misses, Congress, the
// president with one miss, the courts), each read aloud when the learner taps and answered from memory, the check (the same 17 again, in a new order,
// 16 to pass), the record, the results, the review two days later (each question comes back as itself) and the form for the learner's own answers.
// It asserts what this walk shows, and leaves to X14 (how an answer is matched, the box, a claim), X19 (when and how a question is read aloud), X43 and
// X44 (the mock interview, the learner's own answers and the date), X22, X23, X1 and X2 what those own, so that a fault in one of those turns that check
// red and no other. It types each answer as the list prints it, bracketed words in, so that a fault in how an answer is matched is X14's alone.
import { britishIn } from './american.mjs';
import { MONDAY, WEDNESDAY, FRIDAY, NEXT_WEDNESDAY, VOICES, stubbed, spoken, look, known, WRONG, type, next, more, screenText, storedItems, storedNotes, storedLog } from './e2e-interview-drive.mjs';

const plainWords = async (c, page, env, label) => {   // the words of a screen, where its layout is another check's
  const jargon = await env.jargonShown(page), british = britishIn(await page.evaluate(() => document.querySelector('#screen').textContent));
  c.check(jargon.length === 0 && british.length === 0, `${label}: shows ${[...jargon, ...british].map(w => `"${w}"`).join(', ')}`);
};
const ONLY_A_PHONE_VOICE = [VOICES.both[1]];
const OFFICIAL = {   // the questions as the list words them (tests/fixtures/uscis-m1778-lesson1.json holds the whole list)
  q16: 'Name the three branches of government.', q15: 'There are three branches of government. Why?', q17: 'The President of the United States is in charge of which branch of government?',
  q52: 'What is the highest court in the United States?'
};
const GROUPS = [['q16', 'q15', 'q17'], ['q18', 'q19', 'q20'], ['q41', 'q42', 'q43', 'q44', 'q45', 'q40', 'q46', 'q47'], ['q50', 'q51', 'q52']];
const ALL = GROUPS.flat();

async function theSubject(env, c, page) {
  await env.openSubject(page, 'civics');
  const text = await screenText(page);
  c.check(/Who does what/.test(text) && (text.match(/Not built yet/g) || []).length === 13, 'the subject screen does not list the pilot and the thirteen parts not built yet');
  c.check(text.includes('Draft: not tried yet'), 'the pilot does not carry the draft line');
  c.check(/Your answers and interview date/.test(text) && (text.match(/Not entered yet/g) || []).length === 9 && /Enter my answers/.test(text), 'the subject screen does not show the eight answers and the interview date as not entered');
  await env.inspect(c, page, 'the Civics subject screen');
}
async function theWhyAndTheMap(env, c, page) {
  await env.clickVisible(page, '#screen [data-l="l1"]');
  let text = await screenText(page);
  c.check(/Step 1 of 7/.test(text) && /up to 20 of the 128 questions/.test(text) && /Twelve right passes/.test(text) && /Nothing is graded/.test(text), 'the why does not say what the interview is: up to 20 of the 128, twelve right to pass, nothing graded here');
  await env.inspect(c, page, 'the why');
  await env.goOn(page);
  const rows = await page.locator('.block-doc tr').allTextContents().then(list => list.map(t => t.replace(/\s+/g, ' ').trim()));
  c.check(rows.length === 4 && /Branch/.test(rows[0]) && /Legislative.*Congress.*Writes laws/.test(rows[1]) && /Executive.*The president.*Signs or vetoes bills and carries out the laws/.test(rows[2]) && /Judicial.*The courts.*Explain the laws/.test(rows[3]), `the map of the three branches is not a table of who does what (${JSON.stringify(rows)})`);
  await env.inspect(c, page, 'the map of the three branches');
  await env.goOn(page);
}
// a group of questions, each read aloud when the learner taps, answered by typing; `answers` says what to type for a key (nothing: the answer as printed;
// a string: that), and `every(now)` runs on the page of each question before it is answered
async function runGroup(env, c, page, label, keys, { answers = {}, every = null, after = null } = {}) {
  const asked = [];
  for (let n = 0; await more(page, n); n++) {
    const now = await look(page);
    asked.push(now);
    c.check(await page.locator('[data-feedback]').count() === 0, `${label}: ${now.key}: feedback is on the page before the answer`);
    if (every) await every(now);
    await type(page, answers[now.key] !== undefined && !now.redo ? answers[now.key] : await known(page));
    if (after) await after(now);
    await next(page);
  }
  return asked;
}
async function theFirstGroup(env, c, page) {
  c.check((await screenText(page)).includes('Question 1 of 3'), 'the first group is not three questions');
  const asked = await runGroup(env, c, page, 'the three branches', GROUPS[0], {
    answers: { q15: WRONG, q17: WRONG },
    // after a miss the list's accepted answers are shown, all three, as printed
    after: async now => {
      if (now.key !== 'q15' || now.redo) return;
      const accepted = await page.locator('[data-accepted] li').allTextContents().then(list => list.map(t => t.replace(/\s+/g, ' ').trim()));
      c.check(JSON.stringify(accepted) === JSON.stringify(['So one part does not become too powerful', 'Checks and balances', 'Separation of powers']), `after a miss the accepted answers are not all shown, as the list prints them (${JSON.stringify(accepted)})`);
    },
    every: async now => {
      if (now.key !== 'q16' || now.redo) return;
      c.check(now.question === OFFICIAL.q16, `the first question is not worded as the list words it (${now.question})`);
      c.check(await page.locator('[data-spoken]').count() === 1 && await page.locator('[data-hear]').count() === 1 && await page.locator('[data-spoken-words]').count() === 1, 'a question has no spoken block with its words and a way to hear it');
      await plainWords(c, page, env, 'a question to answer from memory');
      await page.locator('[data-hear]').click();
      const said = await spoken(page);
      c.check(said.length >= 1 && said[said.length - 1].text === OFFICIAL.q16, `tapping to hear the question did not read it aloud (${JSON.stringify(said)})`);
    }
  });
  c.check(asked.map(a => a.key + (a.redo ? '*' : '')).join() === 'q16,q15,q17,q15*,q17*', `the group did not ask the three questions and bring the two that were not right back (${asked.map(a => a.key + (a.redo ? '*' : ''))})`);
  c.check(/1 of 3 right the first time/.test(await screenText(page)), 'the first group does not end on "1 of 3 right the first time"');
  await env.goOn(page);
}
async function theMissAndWhatItShows(env, c, page) {
  // q18: a right answer, and the line of meaning after it
  const text = await screenText(page);
  c.check(/Question 1 of 3/.test(text), 'the second group is not three questions');
  const before = await page.locator('[data-recall]').count();
  c.check(before === 1, 'the second group opens with no box to type in');
  await type(page, await known(page));
  c.check(/Congress writes the laws\. It is also called the legislative branch\./.test(await screenText(page)), 'the line of meaning does not follow the answer');
  await plainWords(c, page, env, 'a question answered, with its accepted answers');
  await next(page);
}
async function theRestOfTheGroups(env, c, page) {
  const second = await runGroup(env, c, page, 'Congress', GROUPS[1]);
  c.check(second.length === 2 && /3 of 3 right the first time/.test(await screenText(page)), `the second group did not end on "3 of 3 right the first time" (${(await screenText(page)).slice(0, 120)})`);
  await env.goOn(page);
  const third = await runGroup(env, c, page, 'the president', GROUPS[2], { answers: { q44: WRONG } });
  const at = third.findIndex(a => a.key === 'q44' && !a.redo), back = third.findIndex(a => a.key === 'q44' && a.redo);
  c.check(third.length === 9 && at === 3 && back - at >= 4, `the president group is not eight questions with the miss back four or more later (${third.map(a => a.key + (a.redo ? '*' : ''))})`);
  c.check(/7 of 8 right the first time/.test(await screenText(page)), 'the third group does not end on "7 of 8 right the first time"');
  await env.goOn(page);
  const last = await runGroup(env, c, page, 'the courts', GROUPS[3]);
  c.check(last.map(a => a.key).join() === 'q50,q51,q52' && /3 of 3 right the first time/.test(await screenText(page)), 'the last group is not the three questions about the courts');
  await env.goOn(page);
}
async function theCheck(env, c, page) {
  const text = await screenText(page);
  c.check(/The same 17 questions again, in a new order, with no help/.test(text) && /At least 16 right/.test(text) && /You will not see any answer until the end/.test(text), `the check does not name itself and its rule (${text.slice(0, 220)})`);
  await env.inspect(c, page, 'the first screen of the check');
  await env.goOn(page);
  const asked = [];
  for (let n = 0; await more(page, n); n++) {
    const now = await look(page);
    asked.push(now.key);
    await type(page, now.key === 'q51' ? WRONG : await known(page));
    await next(page);
  }
  c.check(asked.length === 17 && [...asked].sort().join() === [...ALL].sort().join(), `the check is not the 17 questions of part 1, each once (${asked})`);
  const listed = await page.evaluate(() => FC.get('civics').lessons.l1.check.items);
  c.check(asked.join() !== listed.join(), 'the check asks the questions in the order they are listed in, not in a mixed order');
  const result = await screenText(page);
  const rules = await page.locator('.done-screen > table.results tr td:last-child').allTextContents();
  c.check(/16 of 17: passed/.test(result) && rules.length === 1 && rules[0] === 'met', `the check was not passed 16 of 17 with its rule met (${result.slice(0, 160)})`);
  c.check(await page.locator('.resitem').count() === 17 && await page.locator('.resitem').first().locator('.mark.no').count() === 1, 'the answers are not all 17, the missed one first');
  await plainWords(c, page, env, 'the result of the check');
}
async function theRecord(env, c, page) {
  await env.clickVisible(page, '[data-v="subject"]');
  const text = await screenText(page);
  c.check(/Check passed, 16 of 17/.test(text) && /1 of 14 lessons/.test(text) && /Practice again/.test(text), `the subject screen does not show the check passed and one part done (${text.slice(0, 220)})`);
  await env.inspect(c, page, 'the Civics subject screen after the lesson');
  const items = await storedItems(page, 'civics'), seen = await page.evaluate(() => seenOf('civics'));
  const engine = await page.evaluate(() => FC.ENGINE);   // the engine of the app as it runs, never a number written here
  const tries = Object.entries(items).flatMap(([key, e]) => e.tries.map(t => ({ key, ...t })));
  const inCheck = tries.filter(t => t.context === 'check'), practice = tries.filter(t => t.context === 'practice');
  c.check(inCheck.length === 17 && inCheck.every(t => t.lesson === 'l1' && t.rev === 1 && t.sup === false && t.engine === engine && typeof t.a.say === 'string' && ['ok', 'no'].includes(t.r.say)), 'the check was not stored as 17 typed answers of lesson 1 without help');
  c.check(practice.length === 17 + 2 + 1 && practice.every(t => typeof t.a.say === 'string'), `the groups were not stored as 20 tries: 17 first tries, the three that came back (${practice.length})`);
  c.check(practice.filter(t => t.key === 'q17').map(t => t.a.say).join('|') === `${WRONG}|Executive branch` && practice.filter(t => t.key === 'q17').map(t => t.r.say).join() === 'no,ok', 'a miss is not stored as the words typed, then the answer that was right');
  c.check(tries.filter(t => t.key === 'q15').map(t => t.r.say).join() === 'no,ok,ok', 'a question missed in the group, then right when it came back, then right in the check, is not stored so');
  c.check(JSON.stringify(seen) === JSON.stringify({ l1: { rev: 1, at: 6 } }), `the place saved is not the end of the lesson (${JSON.stringify(seen)})`);
  c.check(await page.evaluate(() => { const d = FC.get('civics'); return lessonDone(d, 'civics', d.lessons.l1) && lastCheck(d, 'civics', d.lessons.l1).passed; }), 'the lesson is not done with the check passed');
  const log = await storedLog(page);
  c.check(!log.some(e => e.type === 'claim'), 'a claim was logged when none was made');
}
async function theResults(env, c, page) {
  await env.clickVisible(page, '#screen [data-v="results"]');
  const text = await screenText(page);
  c.check(/16 of 17 · passed/.test(text), 'the results do not list the check, 16 of 17 passed');
  c.check(/What comes back, and when/.test(text) && (text.match(/Wednesday, November 4/g) || []).length === 17 && /Who takes over from the president/.test(text), 'the results do not say that each of the 17 questions comes back, on the Wednesday two days after the check');
  await plainWords(c, page, env, 'the results');
}
async function theReview(env, c, page) {
  await env.setDay(page, WEDNESDAY);
  await env.toLibrary(page);
  const tile = await page.locator('[data-review-tile]').textContent();
  c.check(/17 due/.test(tile) && /US Civics/.test(tile), `the review does not hold the 17 questions two days after the check (${tile.replace(/\s+/g, ' ').slice(0, 160)})`);
  await page.locator('[data-review-start]').first().click();
  c.check(/Seventeen questions/.test(await screenText(page)) || /17 questions/.test(await screenText(page)), 'the review does not say it is 17 questions');
  await page.locator('#beginBlock').click();
  const asked = [];
  for (let n = 0; await more(page, n); n++) {
    const now = await look(page);
    asked.push(now.key + (now.redo ? '*' : ''));
    if (asked.length === 1) await plainWords(c, page, env, 'a question of the review');
    await type(page, now.key === 'q41' && !now.redo ? WRONG : await known(page));
    await next(page);
  }
  c.check([...new Set(asked.map(k => k.replace('*', '')))].sort().join() === [...ALL].sort().join() && asked.filter(k => k.endsWith('*')).join() === 'q41*', `the review did not ask each of the 17 questions as itself, and the one missed again (${asked})`);
  const log = await storedLog(page);
  c.check(log.filter(e => e.type === 'repeat' && e.subject === 'civics').length === 17, 'a question that comes back as itself is not logged as a repeat, once each');
  const schedule = await page.evaluate(() => { const s = strandSchedules(FC.get('civics'), 'civics'); return [s.q41, s.q52]; });
  c.check(JSON.stringify(schedule[0]) === JSON.stringify({ lessonId: 'l1', level: 0, due: FRIDAY }) && JSON.stringify(schedule[1]) === JSON.stringify({ lessonId: 'l1', level: 1, due: NEXT_WEDNESDAY }), `after the review the missed question is not due in two days and the others in a week (${JSON.stringify(schedule)})`);
  await env.setDay(page, MONDAY);
}
async function theAnswersForm(env, c, page) {
  await env.openSubject(page, 'civics');
  await page.locator('[data-answers-edit]').click();
  const labels = await page.locator('[data-own-answers] .formlabel').allTextContents();
  c.check(labels.length === 9 && labels[0] === 'Who is one of your state’s U.S. senators now?' && labels[2] === 'What is the name of the Speaker of the House of Representatives now?' && labels[8] === 'The day of your interview (optional)', `the form for the answers that vary does not ask the eight questions in the list's words, then the day (${JSON.stringify(labels)})`);
  c.check(/uscis\.gov\/citizenship\/testupdates/.test(await screenText(page)), 'the form does not name the page that posts the answers');
  await env.inspect(c, page, 'the form for the answers that vary');
  c.check(await storedNotes(page, 'civics') === null, 'opening the form stored something');
}

export async function X45(env) {
  const c = env.checker('X45'), { context, page } = await env.freshPage(c, 375, stubbed(ONLY_A_PHONE_VOICE));
  await env.setDay(page, MONDAY);
  await theSubject(env, c, page);
  await theWhyAndTheMap(env, c, page);
  await theFirstGroup(env, c, page);
  await theMissAndWhatItShows(env, c, page);
  await theRestOfTheGroups(env, c, page);
  await theCheck(env, c, page);
  await theRecord(env, c, page);
  await theResults(env, c, page);
  await theReview(env, c, page);
  await theAnswersForm(env, c, page);
  await context.close();
  return c;
}
export const CIVICS_CHECKS = { X45 };
