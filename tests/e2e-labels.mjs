// X32 and X33, on a label pinned on a post (lesson standard 3.9, 9; new with step 6, 3 to 9). Each is a function of the environment
// (e2e-env.mjs) that drives the real app in Chromium and returns its checker; tests/e2e-controls.mjs runs each against the app with a seeded fault
// and requires exactly that check to go red.
//   X32  the mechanics, on the test subject "Pinned labels" (tests/fixtures/fixture-subject/labels-*.js): a labelled post is drawn (who posted, how
//        they are known, their words, then the words the label is pinned on with who said them last); the panel shows what the label needs on a
//        teaching screen and in a worked example, beside the words in a group that helps, and nowhere else; the feedback lists each need found
//        (with the line) or missing; the end of a check shows the sides side by side and each pass rule by side met or not; so does the review.
//   X33  Ideology's pilot, "Socialist, or not?", walked end to end at 375 px by a learner who taps every answer: the wrong idea, the four labels,
//        one label on two sets of words, the worked example, a first group of four, a second group of eight, the check of part 2 passed 5 of 6,
//        the record, and the review two days later. It asserts only what the walk shows, and leaves the panel, the needs found or missing and the
//        sides side by side to X32, so that a fault in those turns X32 red and no other.
import { britishIn } from './american.mjs';
import { look, answerAll, jump } from './e2e-feed.mjs';

const MONDAY = '2026-11-02', WEDNESDAY = '2026-11-04';
const next = page => page.locator('#qNext').click();
const plainWords = async (c, page, env, label) => {
  const jargon = await env.jargonShown(page), british = britishIn(await page.evaluate(() => document.querySelector('#screen').textContent));
  c.check(jargon.length === 0 && british.length === 0, `${label}: shows ${[...jargon, ...british].map(w => `"${w}"`).join(', ')}`);
};
const textsOf = (page, selector) => page.locator(selector).evaluateAll(els => els.map(e => e.textContent.replace(/\s+/g, ' ').trim()));

/* ---------- X32 ---------- */
// the steps of the test lesson: 0 the why, 1 a labelled post and the panel, 2 the worked post, 3 the group that helps, 4 the group that does not, 5 the check
const STEP = { show: 1, worked: 2, helped: 3, plain: 4, check: 5 };
const openLabels = async (env, page) => { await env.openSubject(page, 'labels'); await env.clickVisible(page, '#screen [data-l="l1"]'); };
const rulesOf = page => page.evaluate(() => FC.get('labels').meta.rules);

async function labelledPost(env, c, page) {
  await openLabels(env, page);
  await jump(page, STEP.show);
  const post = await page.evaluate(() => FC.get('labels').lessons.l1.flow[0].show[0]);
  const drawn = await page.evaluate(() => { const a = document.querySelector('.block-article.art-labelled'); return a && ({ side: a.dataset.side, form: a.dataset.article,
    parts: [...a.children].map(e => e.className), source: a.querySelector('.art-source').textContent, by: a.querySelector('.art-by').textContent, label: a.querySelector('.art-label').textContent,
    pinned: a.querySelector('.art-pinned').textContent, lines: [...a.querySelectorAll('.art-quoted .art-body > p:not(.art-fine)')].map(p => p.textContent.trim()),
    fine: a.querySelector('.art-fine') ? a.querySelector('.art-fine').textContent.trim() : null, fineLast: a.querySelector('.art-quoted .art-body').lastElementChild.classList.contains('art-fine'),
    head: !!a.querySelector('.art-head'), quotedLast: a.lastElementChild.classList.contains('art-quoted') }); });
  c.check(!!drawn, 'a post with a label is not drawn as a labelled post');
  if (!drawn) return;
  c.check(drawn.parts.join() === 'art-source,art-by,art-label,art-quoted', `a labelled post is not drawn as who posted, how they are known, their words, then the words it is pinned on (${drawn.parts})`);
  c.check(drawn.source === post.source && drawn.by === post.label.by && drawn.label === post.label.text, 'a labelled post does not show who posted, how they are known and their words');
  c.check(drawn.side === post.label.side && drawn.form === 'post' && !drawn.head, 'a labelled post is not a post of its own side, or has a headline');
  c.check(JSON.stringify(drawn.lines) === JSON.stringify(post.lines.filter(l => !l.fine).map(l => l.text)), `the words the label is pinned on are not each drawn as a line of their own (${JSON.stringify(drawn.lines)})`);
  c.check(drawn.fine === post.lines.find(l => l.fine).text && drawn.fineLast, 'who said the words is not small print, last under them');
  c.check(/pinned on/i.test(drawn.pinned) && drawn.quotedLast, 'the words the label is pinned on are not under the commenter\'s words, with their heading');
  // the panel on a teaching screen: every rule, its needs in the order of the record
  const rules = await rulesOf(page);
  const panel = await page.evaluate(() => { const p = document.querySelector('.block-panel'); return p && { names: [...p.querySelectorAll('.panel-name')].map(e => e.textContent), needs: [...p.querySelectorAll('[data-need]')].map(e => [e.dataset.need, e.textContent]) }; });
  c.check(!!panel && JSON.stringify(panel.names) === JSON.stringify(Object.values(rules).map(r => r.name)), 'a teaching screen does not print every rule its panel names');
  c.check(!!panel && JSON.stringify(panel.needs) === JSON.stringify(Object.values(rules).flatMap(r => r.needs.map(n => [n.id, n.text]))), `the needs of the panel are not the subject's, in its order (${JSON.stringify(panel && panel.needs)})`);
  await env.inspect(c, page, 'a labelled post and the panel');
}

async function theWorkedPost(env, c, page) {
  await jump(page, STEP.worked);
  await page.locator('[data-commit]').first().click();
  while (await page.locator('#workedMore').count()) await page.locator('#workedMore').click();
  c.check(await page.locator('.block-panel').count() === 1, 'the worked example does not show what the label needs');
  const found = await textsOf(page, '[data-has="dry"] li.found'), missing = await page.locator('[data-has] li.missing').count();
  c.check(found.length === 2 && missing === 0, `a label the words earn does not have both needs found (found ${found.length}, missing ${missing})`);
  c.check(await page.locator('mark.cue').count() === 2, 'the lines that decide a worked example are not marked');
}

async function theGroupThatHelps(env, c, page) {
  await jump(page, STEP.helped);
  const rules = await rulesOf(page);
  const first = await look(page);
  c.check(first.key === 'g-1', `the first question of the group that helps is ${first.key}`);
  const beside = await page.evaluate(() => { const p = document.querySelector('.block-panel'); return p && { rules: p.dataset.panel, needs: [...p.querySelectorAll('[data-need]')].map(e => e.textContent), before: !!(p.compareDocumentPosition(document.querySelector('.asks')) & Node.DOCUMENT_POSITION_FOLLOWING) }; });
  c.check(!!beside && beside.rules === 'dry' && JSON.stringify(beside.needs) === JSON.stringify(rules.dry.needs.map(n => n.text)), `the group that helps does not show what the label needs (${JSON.stringify(beside)})`);
  c.check(!!beside && beside.before, 'what the label needs is not above the questions, beside the words');
  c.check(/What the label needs is shown beside the words/.test(await env.screenText(page)), 'the group that helps does not say what is beside the words');
  c.check(await page.locator('[data-has]').count() === 0, 'what each need found is shown before the answer');
  await plainWords(c, page, env, 'a question with the panel beside the words');
  // a wrong verdict, then the right line: the needs are listed with the line that shows each, and the one the words do not show
  await answerAll(page, { miss: { verdict: ['fits'] } });
  const found = await textsOf(page, '[data-has="dry"] li.found'), missing = await textsOf(page, '[data-has="dry"] li.missing');
  c.check(found.length === 1 && found[0].includes(rules.dry.needs[0].text) && found[0].includes('“The sky is clear.”'), `a need found is not listed with its line (${JSON.stringify(found)})`);
  c.check(missing.length === 1 && missing[0].includes(rules.dry.needs[1].text) && /The words do not say it\./.test(missing[0]), `a need missing is not listed as missing (${JSON.stringify(missing)})`);
  c.check(await page.locator('mark.cue').count() === 2, 'the lines that decide a question are not marked after the answer');
  c.check(await page.locator('.mark.no').count() === 1 && await page.locator('.mark').count() === 2, 'a wrong verdict and a right line are not marked as such');
  await next(page);
  // the second question has its own rule
  const second = await look(page);
  const rain = await page.evaluate(() => [...document.querySelectorAll('.block-panel [data-need]')].map(e => e.dataset.need));
  c.check(second.key === 'g-2' && JSON.stringify(rain) === JSON.stringify(['wet-rain']), `the next question does not show its own rule (${second.key}, ${rain})`);
  await answerAll(page);
  await next(page);
  while (await page.locator('#qNext').count()) { await answerAll(page); await next(page); }   // the two that came back
}

async function theGroupThatDoesNot(env, c, page) {
  await env.goOn(page);   // the break
  let seen = 0;
  while (await page.locator('#qNext').count()) {
    seen++;
    c.check(await page.locator('.block-panel').count() === 0 && await page.locator('[data-need]').count() === 0, `a question of the group without help shows what the label needs (question ${seen})`);
    c.check(!/shown beside the words/.test(await env.screenText(page)), 'a group without help says that something is beside the words');
    await answerAll(page);
    c.check(await page.locator('.block-panel').count() === 0 && await page.locator('[data-has]').count() === 1, 'after the answer the panel is drawn again, or the needs are not listed');
    await next(page);
  }
  c.check(seen === 2, `the group without help is not two questions (${seen})`);
  await env.goOn(page);   // the break: on to the check's first screen
}

// the wrong verdict for a question of the check: c-1 is a label that does not fit, c-3 one that does
const WRONG_VERDICT = { 'c-1': 'fits', 'c-3': 'off' };
const tableRows = (page, selector) => page.locator(`${selector} tr`).evaluateAll(rows => rows.map(r => [...r.children].map(td => td.textContent.trim())));
async function theCheck(env, c, page, { miss }) {
  await env.goOn(page);   // start the check
  const asked = [];
  while (await page.locator('#qNext').count()) {
    const now = await look(page);
    asked.push(now.key);
    c.check(await page.locator('.block-panel').count() === 0 && await page.locator('[data-need]').count() === 0, `a question of the check shows what the label needs (${now.key})`);
    await answerAll(page, miss.includes(now.key) ? { miss: { verdict: [WRONG_VERDICT[now.key]] } } : {});
    await next(page);
  }
  c.check(asked.join() === 'c-1,c-2,c-3,c-4', `the check is not its four questions in order (${asked})`);
  return asked;
}
async function resultsBySide(env, c, page) {
  const rules = await page.evaluate(() => FC.get('labels').lessons.l1.check.pass.length);
  const lines = await tableRows(page, '.done-screen > table.results');
  const splits = await tableRows(page, '[data-split] table.results');
  return { lines, splits, rules, heading: await textsOf(page, '[data-split] .lab') };
}
async function theResult(env, c, page) {
  // one miss on the left: 3 of 4, passed, with each side's rule met
  await theCheck(env, c, page, { miss: ['c-1'] });
  let r = await resultsBySide(env, c, page);
  c.check(/3 of 4: passed/.test(await env.screenText(page)), 'the check is not passed 3 of 4');
  c.check(JSON.stringify(r.lines) === JSON.stringify([['At least 3 right', 'met'], ['At least 1 right among houses on the left', 'met'], ['At least 1 right among houses on the right', 'met']]), `the pass rules by side are not shown in words, met or not (${JSON.stringify(r.lines)})`);
  c.check(await page.locator('[data-split]').count() === 1 && JSON.stringify(r.splits) === JSON.stringify([['Houses on the left', '1 of 2'], ['Houses on the right', '2 of 2']]), `the sides are not shown side by side with what was right on each (${JSON.stringify(r.splits)})`);
  c.check(r.heading.join() === 'Which side of the street, side by side', `the sides' table has no heading that names them (${r.heading})`);
  await plainWords(c, page, env, 'the result with the sides side by side');
  // both on the left missed: not passed, and the rule for the left is the one not met
  await jump(page, STEP.check);   // the check again (a passed check has no button for it)
  await theCheck(env, c, page, { miss: ['c-1', 'c-3'] });
  r = await resultsBySide(env, c, page);
  c.check(/2 of 4: not yet/.test(await env.screenText(page)), 'the check is not 2 of 4, not yet');
  c.check(JSON.stringify(r.lines.map(l => l[1])) === JSON.stringify(['not met', 'not met', 'met']), `a side missed entirely is not the rule that is not met (${JSON.stringify(r.lines)})`);
  c.check(JSON.stringify(r.splits) === JSON.stringify([['Houses on the left', '0 of 2'], ['Houses on the right', '2 of 2']]), `the sides side by side do not show a side missed entirely (${JSON.stringify(r.splits)})`);
  const stored = JSON.parse((await env.storage(page))['pl:labels:items'] || '{}');
  const tries = Object.entries(stored).flatMap(([key, e]) => e.tries.map(t => ({ key, ...t })));
  c.check(tries.filter(t => t.context === 'check').every(t => !t.sup && JSON.stringify(Object.keys(t.a).sort()) === '["verdict","words"]' && Array.isArray(t.a.words)), 'a try of a labelled post is not stored as the verdict and the ids of the lines tapped, without help');
  c.check(tries.filter(t => t.context === 'practice' && ['g-1', 'g-2'].includes(t.key)).every(t => t.sup === true), 'the group that helps is not stored as having help');
}
async function theReview(env, c, page) {
  await env.setDay(page, WEDNESDAY);
  await env.toLibrary(page);
  const tile = await page.locator('[data-review-tile]').textContent();
  c.check(/Two questions are due/.test(tile.replace(/\s+/g, ' ')), `the review does not hold the two topics (${tile.replace(/\s+/g, ' ').slice(0, 120)})`);
  await page.locator('[data-review-start]').first().click();
  await page.locator('#beginBlock').click();
  const asked = [];
  while (await page.locator('#qNext').count()) {
    const now = await look(page);
    asked.push(await page.evaluate(() => ({ strand: Q.list[Q.at].item.strand, side: Q.list[Q.at].item.facets.side })));
    c.check(await page.locator('.block-panel').count() === 0, 'a question of the review shows what the label needs');
    await answerAll(page);
    await next(page);
  }
  c.check(asked.length === 2 && new Set(asked.map(a => a.strand)).size === 2, `the review did not ask one question of each topic (${JSON.stringify(asked)})`);
  // the sides side by side are those of the questions asked: a table only when both sides were asked
  const sides = [...new Set(asked.map(a => a.side))].sort();
  const want = sides.length === 2 ? [['Houses on the left', '1 of 1'], ['Houses on the right', '1 of 1']] : [];
  const rows = await tableRows(page, '[data-split] table.results');
  c.check(await page.locator('[data-split]').count() === (sides.length === 2 ? 1 : 0) && JSON.stringify(rows) === JSON.stringify(want), `the review does not show the sides side by side as asked (${JSON.stringify(asked)} -> ${JSON.stringify(rows)})`);
  if (sides.length === 2) c.check(/Pinned labels: Which side of the street, side by side/.test(await env.screenText(page)), 'the review does not name the subject over its sides');
}
// a labelled post and the panel at the narrowest phone: the screen has no answer buttons, so its layout is this check's
async function atNarrowestPhone(env, c) {
  const { context, page } = await env.freshPage(c, 360);
  await openLabels(env, page);
  await jump(page, STEP.show);
  await env.inspect(c, page, 'a labelled post and the panel at 360px');
  await context.close();
}
export async function X32(env) {
  const c = env.checker('X32'), { context, page } = await env.freshPage(c, 390);
  await atNarrowestPhone(env, c);
  await env.setDay(page, MONDAY);
  await labelledPost(env, c, page);
  await theWorkedPost(env, c, page);
  await theGroupThatHelps(env, c, page);
  await theGroupThatDoesNot(env, c, page);
  await theResult(env, c, page);
  await theReview(env, c, page);
  await context.close();
  return c;
}

/* ---------- X33: Ideology's pilot ---------- */
const KEYS = ['verdict', 'name', 'words'];
async function theTeaching(env, c, page) {
  await env.inspect(c, page, 'the why');
  c.check((await env.screenText(page)).includes('Step 1 of 8'), 'the lesson is not eight steps long (the why, six steps and the check)');
  await env.goOn(page);
  let text = await env.screenText(page);
  c.check(/A wrong idea/.test(text) && /Socialist means the government pays for things/.test(text) && /Earned/.test(text) && /Not earned/.test(text) && /Too little to tell/.test(text), 'the first screen does not give the wrong idea and the three answers');
  await env.inspect(c, page, 'the wrong idea and the three steps');
  await env.goOn(page);
  text = await env.screenText(page);
  c.check(['Free-market (capitalist)', 'Social democrat', 'Socialist', 'Communist'].every(n => text.includes(n)), 'the four labels are not all on their screen');
  await env.inspect(c, page, 'the four labels');
  await env.goOn(page);
  c.check(await page.locator('.art-labelled').count() === 2, 'one label on two sets of words is not two posts');
  c.check(/Only the second has the public owning a main industry/.test(await env.screenText(page)), 'the two posts do not say what to compare');
  await env.inspect(c, page, 'one label, two sets of words');
  await env.goOn(page);
}
async function theWorkedExample(env, c, page) {
  c.check(await page.locator('[data-commit]').count() === 3, 'the worked example does not ask the learner to commit to one of the three answers');
  await page.locator('[data-commit="earned"]').click();   // not scored, not stored
  while (await page.locator('#workedMore').count()) await page.locator('#workedMore').click();
  const text = await env.screenText(page);
  c.check(/The answer.*Not earned/.test(text) && /The answer.*Social democrat/.test(text) && /The answer.*privately owned/.test(text), 'the worked example does not end on its three answers');
  c.check(/stay privately owned/.test(text) && /social democrat idea/i.test(text), 'the working does not name why the label fails and what the words earn');
  c.check(await page.locator('mark.cue').count() >= 2, 'the worked example does not mark the lines that decide it');
  await env.inspect(c, page, 'the worked example, finished');
  await env.goOn(page);
}
async function theFirstGroup(env, c, page) {
  c.check((await env.screenText(page)).includes('Question 1 of 4'), 'the first group is not four questions');
  const order = [];
  const firsts = [];
  for (let i = 0; i < 4; i++) {
    const now = await look(page);
    firsts.push(now.key);
    c.check(now.open.length === 1 && now.open[0].id === 'verdict', `question ${i + 1} does not open with whether the label is earned`);
    c.check(await page.locator('[data-feedback]').count() === 0, 'feedback is on the page before the answer');
    await plainWords(c, page, env, `a question of the first group (${now.key})`);
    if (now.key === 'p-jobs') {
      await answerAll(page, { miss: { verdict: ['earned'] } });   // words with too little to tell, called earned: the name never opens
      const text = await env.screenText(page);
      c.check(/common slip: said the words earn a label they do not show/.test(text) && await page.locator('.mark.no').count() === 1, 'a label believed on words that say too little is not named as a slip');
      order.push(...await page.evaluate(() => Object.keys(Q.cur.a)));
      c.check(order.join() === 'verdict,words', `a verdict of "earned" opened a name (${order})`);
    } else if (now.key === 'p-fortunes') {
      await answerAll(page, { miss: { name: ['socialist'] } });   // right that it is not earned, wrong on the name
      c.check(/common slip: named an idea the words do not earn/.test(await env.screenText(page)) && await page.locator('.mark.no').count() === 1 && await page.locator('.mark').count() === 3, 'a wrong name is not marked and named as a slip beside a right verdict and a right line');
      c.check((await page.evaluate(() => Object.keys(Q.cur.a))).join() === KEYS.join(), 'the asks were not answered verdict, name, then the words');
    } else await answerAll(page);
    await next(page);
  }
  c.check(JSON.stringify(firsts.slice(0, 2).sort()) === '["p-bus","p-fares"]' && firsts.slice(2).join() === 'p-jobs,p-fortunes', `the pair is not asked first, back to back (${firsts})`);
  const back = [];
  while (await page.locator('#qNext').count()) { back.push(await look(page)); await answerAll(page); await next(page); }
  c.check(back.length === 2 && back.every(b => b.redo) && back.map(b => b.key).sort().join() === 'p-fortunes,p-jobs', `the two misses did not both come back (${back.map(b => b.key)})`);
  c.check(/2 of 4 right the first time/.test(await env.screenText(page)), 'the first group does not end on "2 of 4 right the first time"');
  await env.goOn(page);
}
async function theSecondGroup(env, c, page) {
  const asked = [];
  while (await page.locator('#qNext').count()) {
    const now = await look(page);
    asked.push(now);
    c.check(now.open.length === 1 && now.open[0].id === 'verdict', 'a question does not open with whether the label is earned');
    c.check(await page.locator('[data-feedback]').count() === 0, 'feedback is on the page before the answer');
    await plainWords(c, page, env, 'a question to judge');
    if (now.key === 'q-farms' && !now.redo) {
      await answerAll(page, { miss: { verdict: ['not-earned'] } });   // a label the words earn, turned down
      c.check(/common slip: turned down a label the words earn/.test(await env.screenText(page)), 'a label the words earn, turned down, is not named as a slip');
    } else await answerAll(page);
    await next(page);
  }
  const firsts = asked.filter(a => !a.redo);
  c.check(firsts.length === 8 && new Set(firsts.map(a => a.key)).size === 8, `the second group is not eight different questions (${firsts.map(a => a.key)})`);
  c.check(asked.filter(a => a.redo).map(a => a.key).join() === 'q-farms', 'the label turned down does not come back');
  c.check(/7 of 8 right the first time/.test(await env.screenText(page)), 'the second group does not end on "7 of 8 right the first time"');
  await env.goOn(page);
}
async function theCheckOfPartTwo(env, c, page) {
  let text = await env.screenText(page);
  c.check(/Six new questions/.test(text) && /At least 5 right/.test(text) && /At least 2 right among labels thrown from the left/.test(text) && /At least 2 right among labels thrown from the right/.test(text), `the check does not name itself and its rules by side (${text.slice(0, 300)})`);
  await env.inspect(c, page, 'the first screen of the check');
  await env.goOn(page);
  const keys = [];
  for (let i = 0; i < 6; i++) {
    const now = await look(page);
    keys.push(now.key);
    c.check(!now.redo && now.open[0].id === 'verdict', 'a question of the check is not asked once, from the start');
    await answerAll(page, now.key === 'k-rents' ? { miss: { verdict: ['not-earned'] } } : {});
    c.check(await page.locator('#qNext').isEnabled(), 'the check leaves Next shut after an answer');
    await next(page);
  }
  c.check([...keys].sort().join() === 'k-city,k-drugs,k-rents,k-unleash,k-wage,k-water', `the check is not the six questions of part 2 (${keys})`);
  text = await env.screenText(page);
  const rules = await page.locator('.done-screen > table.results tr td:last-child').allTextContents();
  c.check(/5 of 6: passed/.test(text) && rules.length === 3 && rules.every(v => v === 'met'), `the check was not passed with its three rules met (${text.slice(0, 160)})`);
  c.check(await page.locator('.resitem').count() === 6 && await page.locator('.resitem').first().locator('.mark.no').count() >= 1, 'the answers are not all shown with the missed one first');
  await plainWords(c, page, env, 'the result of the check');
}
async function theRecord(env, c, page) {
  await env.clickVisible(page, '[data-v="subject"]');
  const text = await env.screenText(page);
  c.check(/Check passed, 5 of 6/.test(text) && /1 of 6 parts/.test(text) && /Practice again/.test(text), `the subject screen does not show the check passed and one part done (${text.slice(0, 200)})`);
  await env.inspect(c, page, 'the Ideology subject screen after the lesson');
  const stored = await env.storage(page), items = JSON.parse(stored['pl:ideology:items'] || '{}'), seen = JSON.parse(stored['pl:ideology:seen'] || '{}');
  const tries = Object.entries(items).flatMap(([key, e]) => e.tries.map(t => ({ key, ...t }))), inCheck = tries.filter(t => t.context === 'check'), practice = tries.filter(t => t.context === 'practice');
  c.check(inCheck.length === 6 && inCheck.every(t => t.lesson === 'l2' && t.rev === 1 && t.sup === false), 'the check was not stored as six tries of lesson 2 without help');
  c.check(practice.some(t => t.sup === true) && practice.some(t => t.sup === false), 'the practice was not stored with and without help');
  c.check(tries.every(t => Object.keys(t.a).every(k => KEYS.includes(k)) && typeof t.a.verdict === 'string' && Array.isArray(t.a.words) && (!('name' in t.a) || t.a.verdict === 'not-earned')),
    'an answer is not stored as the verdict, the name only after "not earned", and the ids of the lines tapped');
  const slips = new Set(tries.flatMap(t => Object.values(t.r)));
  ['believed', 'wrong-name', 'doubted'].forEach(slip => c.check(slips.has(slip), `the slip "${slip}" is not in the record`));
  c.check(tries.filter(t => t.key === 'p-jobs').some(t => JSON.stringify(t.a.words) === '["none"]'), '"Nothing here decides it" is not stored as the answer "none"');
  c.check(!tries.some(t => t.key === 'w-power'), 'the worked example was stored as a try');
  c.check(JSON.stringify(seen) === JSON.stringify({ l2: { rev: 1, at: 7 } }), `the place saved is not the end of the lesson (${JSON.stringify(seen)})`);
  c.check(await page.evaluate(() => { const d = FC.get('ideology'); return lessonDone(d, 'ideology', d.lessons.l2) && lastCheck(d, 'ideology', d.lessons.l2).passed; }), 'the lesson is not done with the check passed');
}
async function theIdeologyReview(env, c, page) {
  await env.setDay(page, WEDNESDAY);
  await env.toLibrary(page);
  const tile = await page.locator('[data-review-tile]').textContent();
  c.check(/1 due/.test(tile) && /Political Ideologies/.test(tile), `the review does not hold the topic two days after the check (${tile.replace(/\s+/g, ' ').slice(0, 160)})`);
  await page.locator('[data-review-start]').first().click();
  await page.locator('#beginBlock').click();
  const now = await look(page);
  c.check(await page.evaluate(() => Q.list[Q.at].item.strand) === 'economy-labels', `the review asked ${now.key}, which is not a question of the topic that came due`);
  await plainWords(c, page, env, 'a question of the review');
  await answerAll(page);
  await next(page);
}
export async function X33(env) {
  const c = env.checker('X33'), { context, page } = await env.freshPage(c, 375);
  await env.setDay(page, MONDAY);
  await env.openSubject(page, 'ideology');
  const subject = await env.screenText(page);
  c.check(/Socialist, or not\?/.test(subject) && (subject.match(/Not built yet/g) || []).length === 5, 'the subject screen does not list the pilot and the five parts not built yet');
  c.check(subject.includes('Draft: not tried yet'), 'the pilot does not carry the draft line');
  await env.inspect(c, page, 'the Ideology subject screen');
  await env.clickVisible(page, '#screen [data-l="l2"]');
  await theTeaching(env, c, page);
  await theWorkedExample(env, c, page);
  await theFirstGroup(env, c, page);
  await theSecondGroup(env, c, page);
  await theCheckOfPartTwo(env, c, page);
  await theRecord(env, c, page);
  await theIdeologyReview(env, c, page);
  await context.close();
  return c;
}
export const LABEL_CHECKS = { X32, X33 };
