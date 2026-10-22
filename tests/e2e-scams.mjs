// X41 and X42: Scams' pilot lesson, "Act, check or leave", and its baseline, "Before you start", end to end on a phone (375 px). Not among the checks the standard
// lists in 9: they were added with step 8 (3 to 9), the way step 7 ran Psychology's pilot (X36). The test plays a learner who taps every answer.
//   X41  the pilot: the three questions, the worked text, a first group of three pairs (a real code and one that is not asked for, a parcel notice and the
//        courier you have no account with, a real alert and a fake one) with a wrong answer in each kind (did what a scam asked, checked through the message's
//        own link, did what a real message said when it was not started), a second group of nine on a clock (the last kind someone known only online), the
//        check of part C passed 11 of 12 with the one real message, a payment agreed at dinner, left wrong, the record, the results with real beside scam, and the review two days later
//   X42  the baseline: ten things, the messages on a clock and the call not, the call ended by hanging up, the steps after a loss, a scam done on purpose,
//        and a real invoice and a code you asked for handled the right way: the old baseline marked both as something wrong
// Each asserts what its walk shows, and leaves to X17 (the clock), X18 (the call), X37 (the forms of a message), X38 (the steps in order), X40 (the baseline's
// record and screens), X23 (a check's silence) and X22 (the review's unseen question) what those own, so that a fault in them turns that check red and no other.
import { britishIn } from './american.mjs';

const MONDAY = '2026-11-02', WEDNESDAY = '2026-11-04';
const nextQ = page => page.locator('#qNext').click();
const plainWords = async (c, page, env, label) => {
  const jargon = await env.jargonShown(page), british = britishIn(await page.evaluate(() => document.querySelector('#screen').textContent));
  c.check(jargon.length === 0 && british.length === 0, `${label}: shows ${[...jargon, ...british].map(w => `"${w}"`).join(', ')}`);
};
const here = page => page.evaluate(() => ({ key: Q.list[Q.at].key, left: Q.cur.left, redo: !!Q.list[Q.at].redo, kind: Q.list[Q.at].item.asks.map(a => a.kind).join() }));
const tapAct = (page, option) => page.locator(`[data-ask="act"] [data-opt="${option}"]`).click();
const tapVia = (page, option) => page.locator(`[data-ask="via"] [data-opt="${option}"]`).click();
const tapTell = (page, option) => page.locator(`[data-ask="tell"] [data-opt="${option}"]`).click();
// answers the message in front of the learner; `act` is what they choose, `via` how they check (the way they already had, or the message's own), and,
// after leaving a message from someone known only online who wants money, what else (telling someone they know in person)
async function answer(page, act, via = 'own') {
  await tapAct(page, act);
  if (act === 'check' && await page.locator('[data-ask="via"]').count()) await tapVia(page, via);
  if (act === 'leave' && await page.locator('[data-ask="tell"]').count()) await tapTell(page, 'tell');
}
const BEST = {   // what the subject's one rule gives for each message of the pilot, its check, its reserve and the baseline
  'p-code-real': 'act', 'p-code-fake': 'leave', 'p-ship-real': 'check', 'p-ship-fee': 'leave', 'p-alert-real': 'check', 'p-alert-fake': 'check',
  'g-invoice-real': 'act', 'g-invoice-new': 'check', 'g-popup': 'leave', 'g-boss': 'check', 'g-promo': 'leave', 'g-reset': 'act', 'g-credit': 'check', 'g-call': 'check', 'g-online': 'leave',
  'k-callback': 'act', 'k-payback': 'act', 'k-promo': 'leave', 'k-alert-real': 'check', 'k-credit-real': 'check', 'k-dental': 'check',
  's-held': 'check', 's-final': 'check', 's-buyer': 'leave', 's-grandson': 'check', 's-suspended': 'check', 's-romance': 'leave',
  'r-gift': 'leave', 'r-renew': 'check', 'r-clinic': 'check',
  'b-payback': 'act', 'b-invoice': 'act', 'b-code': 'act', 'b-alert': 'check', 'b-parcel': 'check', 'b-popup': 'leave', 'b-buyer': 'leave', 'b-manager': 'check' };
const best = key => BEST[key];

/* ---------- X41: the pilot ---------- */
async function theThreeQuestions(env, c, page) {
  await env.inspect(c, page, 'the why');
  c.check((await env.screenText(page)).includes('Step 1 of 6'), 'the lesson is not six steps long (the why, four steps and the check)');
  await env.goOn(page);
  const text = await env.screenText(page);
  c.check(/What does it want\?/.test(text) && /Did I start it\?/.test(text) && /do I have an account with them, or know the person\?/.test(text) && /Never the link, number or reply the message gives you/.test(text), 'the first screen does not give the three questions of the rule and the rule for the way in');
  c.check(/Then do what it says/.test(text) && /Then check first, through a way I already had/.test(text) && /If I have neither, leave it/.test(text) && /tell someone I know in person/.test(text), 'the first screen does not say when to do, check and leave, and what else after leaving someone known only online');
  await env.inspect(c, page, 'the three questions');
  await env.goOn(page);
}
async function theWorkedText(env, c, page) {
  c.check(await page.locator('[data-commit]').count() === 3 && /which do you think it is/.test(await env.screenText(page)), 'the worked text does not ask for a choice first, from the three actions');
  c.check(await page.locator('[data-timer]').count() === 0, 'the worked text is on a clock');
  await page.locator('[data-commit="check"]').click();
  while (await page.locator('#workedMore').count()) await page.locator('#workedMore').click();
  const text = await env.screenText(page);
  c.check(/It wants you to confirm your sign-in through its link, now/.test(text) && /You did not\. You did nothing with your card today/.test(text) && /it uses the name of your bank, Calderwood/.test(text) && /Check first, in the Calderwood app\. Leave the link alone/.test(text), 'the worked text does not say its four steps, one at a time');
  c.check(/The answer.*Check first, a way I already had/.test(text) && /So you check, in the app you already have/.test(text) && await page.locator('mark.cue').count() >= 1, 'the worked text does not end on the answer, why, and the marked line that wants something');
  await plainWords(c, page, env, 'the worked text, finished');
  await env.goOn(page);
}
async function theFirstGroup(env, c, page) {
  c.check((await env.screenText(page)).includes('Question 1 of 6') && await page.locator('[data-timer]').count() === 0, 'the first group is not six questions without a clock');
  const PAIRS = [['p-code-real', 'p-code-fake'], ['p-ship-real', 'p-ship-fee'], ['p-alert-real', 'p-alert-fake']];
  // a wrong answer of each kind: a scam acted on, a check through the message's own link, a real message done the way it said
  const wrong = { 'p-code-fake': ['act'], 'p-ship-real': ['check', 'theirs'], 'p-alert-real': ['act'] };
  const firsts = [], back = [], texts = {};
  for (let guard = 0; await page.locator('#qNext').count() && guard < 20; guard++) {
    const s = await here(page);
    c.check(/^choose(,choose)*$/.test(s.kind) && (s.kind === 'choose,choose') === (best(s.key) === 'check'), `${s.key}: not one message with "What do you do?", and "How do you check?" exactly when checking is right`);
    await plainWords(c, page, env, `the message ${s.key}`);
    if (s.redo) { back.push(s.key); await answer(page, best(s.key)); }
    else {
      firsts.push(s.key);
      const [act, via] = wrong[s.key] || [best(s.key), 'own'];
      await answer(page, act, via);
      texts[s.key] = await env.screenText(page);
    }
    await nextQ(page);
  }
  c.check(PAIRS.every((pair, i) => [firsts[2 * i], firsts[2 * i + 1]].sort().join() === [...pair].sort().join()), `the six messages are not three pairs asked one after the other (${firsts})`);
  c.check(/You chose: Do what it says\. They typed your code into your account’s sign-in/.test(texts['p-code-fake']) && /A code is only for you to type on a page you opened yourself/.test(texts['p-code-fake']) && /What happens next\s*Nothing was shared/.test(texts['p-code-fake']), 'doing what a scam said is not shown with what happened next, why, and what leaving it would have done');
  c.check(/You chose: The page the link opens on my phone\. The link came with the message, so the sender decides where it goes/.test(texts['p-ship-real']), 'checking through the message\'s own link is not shown for what it is');
  c.check(/You chose: Do what it says\. This time the link was real/.test(texts['p-alert-real']) && /The app shows the charge/.test(texts['p-alert-real']) && !/was a scam|is a scam/.test(texts['p-alert-real']), 'a real alert followed by its own link is not shown as a habit that was lucky, without calling the real message a scam');
  c.check(/you have no account with Quillfeather/.test(texts['p-ship-fee']), 'the courier you have no account with is not explained by that step of the rule');
  c.check(back.length === 3 && [...back].sort().join() === 'p-alert-real,p-code-fake,p-ship-real', `the three misses did not all come back (${back})`);
  c.check(/3 of 6 right the first time/.test(await env.screenText(page)), 'the first group does not end on "3 of 6 right the first time"');
  await env.goOn(page);
}
async function theSecondGroup(env, c, page) {
  const asked = [], texts = {};
  c.check((await env.screenText(page)).includes('Question 1 of 9'), 'the second group is not nine questions');
  for (let guard = 0; await page.locator('#qNext').count() && guard < 20; guard++) {
    const s = await here(page);
    asked.push(s);
    const clock = await page.evaluate(() => { const t = document.querySelector('[data-timer]'); return t && t.getAttribute('role'); });
    c.check(clock === 'timer' && s.left > 19.5, `${s.key}: the question is not on a 20 second clock (${clock}, ${s.left})`);
    await plainWords(c, page, env, `the message ${s.key}`);
    if (!s.redo && s.key === 'g-boss') await answer(page, 'act');   // a scam acted on: gift cards sent to a "boss"
    else if (!s.redo && s.key === 'g-credit') await answer(page, 'check', 'theirs');   // the number in the text, called
    else await answer(page, best(s.key));
    texts[s.key + (s.redo ? '*' : '')] = await env.screenText(page);
    c.check(await page.locator('[data-timer]').count() === 0, `${s.key}: the clock is still on after the answer`);
    await nextQ(page);
  }
  const firsts = asked.filter(a => !a.redo);
  c.check(firsts.length === 9 && new Set(firsts.map(a => a.key)).size === 9, `the second group is not nine different messages (${firsts.map(a => a.key)})`);
  const genuine = await page.evaluate(() => ['g-invoice-real', 'g-promo', 'g-reset', 'g-credit'].map(id => FC.get('scams').items[id].facets.genuine).join());
  c.check(genuine === 'genuine,genuine,genuine,genuine' && asked.filter(a => a.redo).map(a => a.key).sort().join() === 'g-boss,g-credit', `half the second group is not real, or the misses did not come back (${asked.map(a => a.key + (a.redo ? '*' : ''))})`);
  c.check(/The gift cards were emptied within minutes/.test(texts['g-boss']) && /Priya says she sent nothing/.test(texts['g-boss*'] || ''), 'the boss\'s gift cards are not shown with what happened, and what checking would have shown');
  c.check(/You paid \$1,860 into the account on the quote, the way you agreed/.test(texts['g-invoice-real']) && !/common slip/.test(texts['g-invoice-real']) && /Right/.test(texts['g-invoice-real']), 'the real invoice is not shown as paid the way you already pay, and right');
  c.check(/What else do you do\?/.test(texts['g-online'] || '') && /Right/.test(texts['g-online'] || ''), 'someone known only online who wants money is not left with telling someone you know in person, before the check');
  c.check(/7 of 9 right the first time/.test(await env.screenText(page)), 'the second group does not end on "7 of 9 right the first time"');
  await env.goOn(page);
}
async function theCheck(env, c, page) {
  let text = await env.screenText(page);
  c.check(/Twelve new questions/.test(text) && /None did what a scam asked/.test(text) && /None checked through the link, number or reply the message gave/.test(text) && /At most 1 wrong among real messages/.test(text) && /You will not see any answer until the end/.test(text) && /You have 20 seconds for each/.test(text), `the check does not name itself and its three rules (${text.slice(0, 260)})`);
  await env.inspect(c, page, 'the first screen of the check');
  await env.goOn(page);
  const keys = [];
  for (let i = 0; i < 12; i++) {
    const s = await here(page);
    keys.push(s.key);
    c.check(!s.redo && s.left > 19.5 && await page.locator('[data-timer]').count() === 1, `${s.key}: a question of the check is not asked once, on a clock`);
    if (s.key === 'k-payback') await answer(page, 'leave');   // a payment agreed at dinner left unpaid: the one real message mishandled
    else await answer(page, best(s.key));
    c.check(await page.locator('#qNext').isEnabled(), 'the check leaves Next shut after an answer');
    await nextQ(page);
  }
  c.check([...keys].sort().join() === 'k-alert-real,k-callback,k-credit-real,k-dental,k-payback,k-promo,s-buyer,s-final,s-grandson,s-held,s-romance,s-suspended', `the check is not the twelve messages of part C (${keys})`);
  text = await env.screenText(page);
  const rules = await page.locator('.done-screen > table.results tr').allTextContents();
  c.check(/11 of 12: passed/.test(text) && rules.length === 3 && rules.every(r => /met$/.test(r) && !/not met$/.test(r)), `the check was not passed 11 of 12 with its three rules met (${text.slice(0, 160)})`);
  c.check(await page.locator('.resitem').count() === 12 && await page.locator('.resitem').first().locator('.mark.no').count() >= 1, 'the answers are not all shown with the missed one first');
  c.check(/Real or a scam, side by side/.test(text) && /Real messages\s*\d of 6/.test(text) && /Scams\s*\d of 6/.test(text), `the real messages are not shown beside the scams (${text.slice(text.indexOf('Real or a scam'), text.indexOf('Real or a scam') + 90)})`);
  c.check(/Rosa is still waiting for the \$45 you promised/.test(text) && /You started it: you agreed the amount and the way to pay at dinner/.test(text), 'the agreed payment that was left is not shown with what it cost and the step of the rule that decided it');
  await plainWords(c, page, env, 'the result of the check');
}
async function theRecord(env, c, page) {
  await env.clickVisible(page, '[data-v="subject"]');
  const text = await env.screenText(page);
  c.check(/Check passed, 11 of 12/.test(text) && /1 of 12 lessons/.test(text) && /Practice again/.test(text), `the subject screen does not show the check passed and one part done (${text.slice(0, 220)})`);
  await env.inspect(c, page, 'the Scams subject screen after the lesson');
  const stored = await env.storage(page), items = JSON.parse(stored['pl:scams:items'] || '{}'), seen = JSON.parse(stored['pl:scams:seen'] || '{}');
  const tries = Object.entries(items).flatMap(([key, e]) => e.tries.map(t => ({ key, ...t })));
  const inCheck = tries.filter(t => t.context === 'check'), practice = tries.filter(t => t.context === 'practice');
  c.check(inCheck.length === 12 && inCheck.every(t => t.lesson === 'l3' && t.rev === 4 && t.sup === false && Number.isInteger(t.ms) && t.ms < 20000), 'the check was not stored as twelve tries of lesson 3, each with the time it took');
  c.check(practice.filter(t => t.key.startsWith('p-')).every(t => !('ms' in t)) && practice.filter(t => t.key.startsWith('g-')).every(t => Number.isInteger(t.ms)), 'the first group (no clock) holds a time, or the second (a clock) does not');
  const slips = new Set(tries.flatMap(t => Object.values(t.r)));
  ['acted', 'their-way', 'habit'].forEach(slip => c.check(slips.has(slip), `the slip "${slip}" is not in the record`));
  c.check(tries.every(t => Object.keys(t.a).every(k => ['act', 'via', 'tell'].includes(k)) && (t.a.act === 'check' || !('via' in t.a)) && (t.a.act === 'leave' || !('tell' in t.a))), 'an answer is not stored as the action, how it was checked only after a check, and what else only after leaving it');
  c.check(!tries.some(t => t.key === 'w-locked'), 'the worked text was stored as a try');
  c.check(JSON.stringify(seen) === JSON.stringify({ l3: { rev: 4, at: 5 } }), `the place saved is not the end of the lesson (${JSON.stringify(seen)})`);
  c.check(await page.evaluate(() => { const d = FC.get('scams'); return lessonDone(d, 'scams', d.lessons.l3) && lastCheck(d, 'scams', d.lessons.l3).passed; }), 'the lesson is not done with the check passed');
}
async function theResults(env, c, page) {
  await env.clickVisible(page, '#screen [data-v="results"]');
  const text = await env.screenText(page);
  ['real messages', 'scams'].forEach(v => c.check(text.includes(`Real or a scam: ${v}`), `the results do not show how "${v}" went, side by side`));
  ['a text', 'an email', 'a pop-up', 'a chat', 'a call'].forEach(v => c.check(text.includes(`How it arrives: ${v}`), `the results do not show how messages that arrive as "${v}" went`));
  ['money', 'a sign-in or a code', 'your details', 'your phone or computer'].forEach(v => c.check(text.includes(`What it wants: ${v}`), `the results do not show how messages that want "${v}" went`));
  c.check(/did what a scam asked/.test(text) && /checked through the link, number or reply the message gave/.test(text) && /did what a real message said, the way it said/.test(text), 'the results do not list the slips made');
  c.check(/Act, check or leave/.test(text.slice(text.indexOf('What comes back, and when'))), 'the results do not say when the topic comes back');
  await plainWords(c, page, env, 'the results');
}
async function theReview(env, c, page) {
  await env.setDay(page, WEDNESDAY);
  await env.toLibrary(page);
  const tile = await page.locator('[data-review-tile]').textContent();
  c.check(/1 due/.test(tile) && /Scams/.test(tile), `the review does not hold the topic two days after the check (${tile.replace(/\s+/g, ' ').slice(0, 160)})`);
  await page.locator('[data-review-start]').first().click();
  c.check(/Each question has 20 seconds/.test(await env.screenText(page)), 'the review of a subject with a clock does not say so');
  await page.locator('#beginBlock').click();
  const s = await here(page);
  c.check(await page.evaluate(() => Q.list[Q.at].item.strand) === 'act-check-leave' && s.left > 19.5, `the review asked ${s.key}, which is not a message of the topic that came due on a clock`);
  await plainWords(c, page, env, 'a message of the review');
  await answer(page, best(s.key) || 'check');
  await nextQ(page);
}

export async function X41(env) {
  const c = env.checker('X41'), { context, page } = await env.freshPage(c, 375);
  await env.setDay(page, MONDAY);
  await env.openSubject(page, 'scams');
  const subject = await env.screenText(page);
  c.check(/Act, check or leave/.test(subject) && (subject.match(/Not built yet/g) || []).length === 0 && /The first hour/.test(subject) && /Before you start/.test(subject) && /Know the scripts/.test(subject), 'the subject screen does not list the baseline and all twelve lessons under their units, with no part left unbuilt');
  c.check(!subject.includes('Draft: not tried yet'), 'a Scams lesson still carries the draft line, though every one passed its reviews and is live');
  await env.inspect(c, page, 'the Scams subject screen');
  await env.clickVisible(page, '#screen [data-l="l3"]');
  await theThreeQuestions(env, c, page);
  await theWorkedText(env, c, page);
  await theFirstGroup(env, c, page);
  await theSecondGroup(env, c, page);
  await theCheck(env, c, page);
  await theRecord(env, c, page);
  await theResults(env, c, page);
  await theReview(env, c, page);
  await context.close();
  return c;
}

/* ---------- X42: the baseline ---------- */
export async function X42(env) {
  const c = env.checker('X42'), { context, page } = await env.freshPage(c, 375);
  await env.setDay(page, MONDAY);
  await env.openSubject(page, 'scams');
  await env.clickVisible(page, '#screen [data-l="l0"]');
  await env.inspect(c, page, 'the why of the baseline');
  await env.goOn(page);
  await env.inspect(c, page, 'how the baseline goes');
  await env.goOn(page);
  await env.inspect(c, page, 'the first screen of the baseline');
  await env.goOn(page);
  const seen = [];
  for (let i = 0; i < 10; i++) {
    const s = await here(page);
    seen.push(s.key);
    await plainWords(c, page, env, `the baseline's ${s.key}`);
    if (s.key === 'b-call') {
      c.check(await page.locator('[data-xopt]').count() === 3 && /fraud team at Calderwood Bank/.test(await env.screenText(page)), 'the call does not open on the caller and three replies');
      await page.locator('[data-xopt="hang"]').click();
    } else if (s.key === 'b-happened') {
      c.check(/Tap the steps you would do, in order, leaving out any that do not belong, then Answer\./.test(await env.screenText(page)) && await page.locator('[data-order-step]').count() === 4, 'the steps after a loss are not four to choose from, leaving one out');
      for (const id of ['bank', 'pass', 'report']) await page.locator(`[data-order-step="${id}"]`).click();
      await page.locator('[data-order-answer]').click();
    } else {
      c.check(s.left > 19 && s.left <= 20, `${s.key}: a message of the baseline is not on a 20 second clock (${s.left})`);
      if (s.key === 'b-manager') await answer(page, 'act');   // the one scam done on purpose: gift cards sent to a "manager"
      else await answer(page, best(s.key));
    }
    await nextQ(page);
  }
  c.check([...seen].sort().join() === 'b-alert,b-buyer,b-call,b-code,b-happened,b-invoice,b-manager,b-parcel,b-payback,b-popup', `the baseline is not its ten questions (${seen})`);
  const line = await page.locator('[data-baseline-line]').textContent();
  c.check(/^Of \d+ scams, you did what a scam asked on \d+\. Of 4 real messages, you handled 4 the right way\.$/.test(line), `the baseline's one line does not say that all four real messages, an invoice and a code among them, were handled the right way (${line})`);
  const tries = await page.evaluate(() => Object.entries(itemsOf('scams')).flatMap(([key, e]) => e.tries.map(t => ({ key, ...t }))));
  c.check(tries.length === 10 && tries.find(t => t.key === 'b-manager').r.act === 'acted' && tries.find(t => t.key === 'b-invoice').ok === true && tries.find(t => t.key === 'b-code').ok === true && tries.find(t => t.key === 'b-call').r.call === 'ok', 'the baseline is not stored as ten tries, the real invoice and the code right, the call ended well and the scam acted on named as the slip');
  c.check(JSON.stringify(tries.find(t => t.key === 'b-call').a) === '{"call":["hang"]}' && tries.find(t => t.key === 'b-happened').a.order[0] === 'bank', 'the call and the steps are not stored as the replies and the steps picked');
  await plainWords(c, page, env, 'the result of the baseline');
  await context.close();
  return c;
}

export const SCAMS_CHECKS = { X41, X42 };
