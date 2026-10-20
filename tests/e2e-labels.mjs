// X32 and X33, on a label pinned on a post (lesson standard 3.9, 9; new with step 6, 3 to 9). Each is a function of the environment
// (e2e-env.mjs) that drives the real app in Chromium and returns its checker; tests/e2e-controls.mjs runs each against the app with a seeded fault
// and requires exactly that check to go red.
//   X32  the mechanics, on the test subject "Pinned labels" (tests/fixtures/fixture-subject/labels-*.js): a labelled post is drawn (who posted, how
//        they are known, their words, then the words the label is pinned on with who said them last); the panel shows what the label needs on a
//        teaching screen and in a worked example, beside the words in a group that helps, and nowhere else; the feedback lists each need found
//        (with the line) or missing; the end of a check shows the sides side by side and each pass rule by side met or not; so does the review.
//   X33  Ideology's lesson 1, "The five questions", walked end to end at 375 px by a learner who taps every answer: the three teaching screens, the
//        worked item with its two answers, a first set that asks Question 2 alone (the direction pair missed once, named and asked again), a second
//        set that asks Question 1 alone (a welfare passage taken for state ownership, named and asked again), a third set that asks both, the check
//        of eight passed 7 of 8, the record of the tries, and the review two days later. It asserts only what the walk shows, and leaves the panel,
//        the needs found or missing and the sides side by side to X32, so that a fault in those turns X32 red and no other.
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

/* ---------- X33: Ideology's lesson 1, "The five questions" ---------- */
const OWN_ASK = 'Question 1. Who would own the businesses and farms?', UNIT_ASK = 'Question 2. Who is the story about?';
const askedNow = page => page.locator('.asks .prompt .stem, .asks .stem').allTextContents().then(t => t.map(s => s.replace(/\s+/g, ' ').trim()));
// what the lesson's data says: the size of each set (a pair counts as two questions) and the ids of an item's asks
const setSizes = page => page.evaluate(() => { const d = FC.get('ideology'); return flowSets(d.lessons.l1).map(s => flatRefs(s.items).length); });
const asksOf = (page, key) => page.evaluate(k => FC.get('ideology').items[k].asks.map(a => a.id), key);
// the pair of the lesson's step `at` (its teaching screens count from 1, after the why): both passages and what they compare are on the screen
const pairShown = (page, text, at) => page.evaluate(([n, shown]) => {
  const pair = ((FC.get('ideology').lessons.l1.flow[n] || {}).show || []).find(b => b.kind === 'pair'), clean = s => s.replace(/\s+/g, ' ').trim();
  return !!pair && [pair.a.text, pair.b.text, pair.compare].every(s => shown.includes(clean(s)));
}, [at, text]);
async function theTeaching(env, c, page) {
  await env.inspect(c, page, 'the why');
  c.check((await env.screenText(page)).includes('Step 1 of 10'), 'the lesson is not ten steps long (the why, eight steps and the check)');
  await env.goOn(page);
  let text = await env.screenText(page);
  c.check(/Five questions place almost any ideology/.test(text) && ['1. Who owns, or should own', '2. Who is the story about', '3. What drives history', '4. What does it want done with elections', '5. Where should it all end'].every(q => text.includes(q)) && text.indexOf('1. Who owns') < text.indexOf('2. Who is the story') && text.indexOf('4. What does') < text.indexOf('5. Where'), 'the first screen does not give the five questions in order');
  await env.inspect(c, page, 'the five questions');
  await env.goOn(page);
  text = await env.screenText(page);
  c.check(/Question 1, who owns: ownership, not taxes/.test(text) && /do not change the owner/.test(text) && /the words do not say/.test(text), 'the screen on Question 1 does not say that taxes do not change the owner');
  c.check(/Private owners, directed by the state/.test(text) && await pairShown(page, text, 1), 'the screen on Question 1 does not explain the fourth answer with its pair and what it compares');
  await env.inspect(c, page, 'Question 1, ownership not taxes');
  await env.goOn(page);
  text = await env.screenText(page);
  c.check(/Question 2, who the story is about, and the direction check/.test(text) && /direction/i.test(text) && /Same noun, opposite families/.test(text), 'the screen on Question 2 does not give the direction check');
  c.check(await pairShown(page, text, 2) && /Both are about race/.test(text), 'the two race passages are not set side by side with what they compare');
  await env.inspect(c, page, 'Question 2 with the direction check and its pair');
  await env.goOn(page);
  text = await env.screenText(page);
  c.check(/The one rule for naming: only on the telltale answers/.test(text) && /Otherwise say "too little to tell"/.test(text) && /A party's name or a harsh tone never counts/.test(text), 'the screen on the naming rule does not give the rule and the answer "too little to tell"');
  c.check(['Marxism: class is the unit', 'Nazism: race, as a natural rank', 'Identity-egalitarianism: identity groups', 'Classical liberalism: the individual', 'Fascism: the nation'].every(row => text.includes(row)), 'the naming screen does not print the telltale answers of the five families met so far');
  await env.inspect(c, page, 'the naming rule and the families met so far');
  await env.goOn(page);
}
async function theWorkedItem(env, c, page) {
  c.check(await page.locator('[data-commit]').count() === 5, 'the worked item does not ask the learner to commit to one of the five owners');
  await page.locator('[data-commit="private"]').click();   // not scored, not stored
  await page.locator('#workedMore').click();
  c.check(/Question 1\. Find who would own the businesses/.test(await env.screenText(page)) && !/Question 2\. Find who the story is about/.test(await env.screenText(page)), 'the working does not open on Question 1 alone');
  while (await page.locator('#workedMore').count()) await page.locator('#workedMore').click();
  const text = await env.screenText(page);
  const asks = await asksOf(page, 'w1-manifesto'), steps = await page.evaluate(() => FC.get('ideology').items['w1-manifesto'].steps.map(s => s.ask));
  c.check(asks.slice(0, 2).join() === 'own,unit' && steps.join() === asks.join(), `the steps of the worked item are not one for each of its asks, own then unit (${asks} / ${steps})`);
  c.check(/The answer.*The state/.test(text) && /The answer.*Class: owners against workers/.test(text), 'the worked item does not end on its answers, the state and class');
  c.check(await page.locator('.mark .ans').count() === asks.length, `the worked item does not show one answer for each of its ${asks.length} asks`);
  c.check(/Question 1\. Find who would own the businesses/.test(text) && /Question 2\. Find who the story is about/.test(text), 'the working does not go question by question');
  await env.inspect(c, page, 'the worked item, finished');
  await env.goOn(page);
}
// A set is walked to its end: each question once, and a miss comes back later in the same set, so a question is told apart by `redo`.
async function walkSet(env, c, page, { count, ask, prompt, label, miss, onMiss }) {
  const firsts = [], back = [];
  while (await page.locator('#qNext').count()) {
    const now = await look(page);
    if (now.redo) { back.push(now.key); await answerAll(page); await next(page); continue; }
    firsts.push(now.key);
    const words = JSON.stringify(await askedNow(page));
    c.check(now.open.length === 1 && now.open[0].id === ask && words.includes(prompt), `${now.key}: the ${label} set asks Question ${ask === 'unit' ? 2 : 1} alone (${now.open.map(a => a.id)})`);
    c.check(await page.locator('[data-feedback]').count() === 0, 'feedback is on the page before the answer');
    await plainWords(c, page, env, `a question of the ${label} set (${now.key})`);
    if (now.key === miss) { await answerAll(page, { miss: { [ask]: [onMiss.pick] } }); await onMiss.after(); }
    else await answerAll(page);
    await next(page);
  }
  c.check(firsts.length === count && new Set(firsts).size === count, `the ${label} set is not ${count} different questions (${firsts})`);
  c.check(back.join() === miss, `the miss on ${miss} did not come back once (${back})`);
  return { firsts, back };
}
async function theQuestionTwoSet(env, c, page) {
  const n = (await setSizes(page))[0];
  c.check(n >= 6 && (await env.screenText(page)).includes(`Question 1 of ${n}`), `the first set does not open on "Question 1 of ${n}", the questions it holds`);
  const { firsts } = await walkSet(env, c, page, { count: n, ask: 'unit', prompt: UNIT_ASK, label: 'first', miss: 'u-rank-keep', onMiss: { pick: 'identity-equal', after: async () => {   // the same noun, the other direction
    c.check(/common slip: saw race or identity and skipped the direction check/.test(await env.screenText(page)) && await page.locator('.mark.no').count() === 1, 'the other direction of race is not named as skipping the direction check'); } } });
  c.check(Math.abs(firsts.indexOf('u-rank-keep') - firsts.indexOf('u-rank-undo')) === 1, `the two race passages are not asked back to back (${firsts})`);
  c.check(new RegExp(`${n - 1} of ${n} right the first time`).test(await env.screenText(page)), `the first set does not end on "${n - 1} of ${n} right the first time"`);
  await env.goOn(page);
}
async function theQuestionOneSet(env, c, page) {
  const n = (await setSizes(page))[1];
  c.check(n >= 5 && (await env.screenText(page)).includes(`Question 1 of ${n}`), `the second set does not open on "Question 1 of ${n}", the questions it holds`);
  const { firsts } = await walkSet(env, c, page, { count: n, ask: 'own', prompt: OWN_ASK, label: 'second', miss: 'o-childcare', onMiss: { pick: 'state', after: async () => {   // taxes and free services taken for state ownership
    c.check(/common slip: misread who would own the businesses/.test(await env.screenText(page)) && await page.locator('.mark.no').count() === 1, 'a welfare passage taken for state ownership is not named as the wrong owner'); } } });
  c.check(Math.abs(firsts.indexOf('o-childcare') - firsts.indexOf('o-right')) === 1, `the two welfare passages are not asked back to back (${firsts})`);
  c.check(new RegExp(`${n - 1} of ${n} right the first time`).test(await env.screenText(page)), `the second set does not end on "${n - 1} of ${n} right the first time"`);
  await env.goOn(page);
}
async function theBothQuestionsSet(env, c, page) {
  const n = (await setSizes(page))[2];
  c.check(n >= 4 && (await env.screenText(page)).includes(`Question 1 of ${n}`), `the third set does not open on "Question 1 of ${n}", the questions it holds`);
  for (let i = 0; i < n; i++) {
    const now = await look(page), asks = await asksOf(page, now.key);
    c.check(now.open[0].id === 'own' && asks.slice(0, 2).join() === 'own,unit', `${now.key}: Question 1 does not come first, then Question 2 (${asks})`);
    await answerAll(page);
    c.check(await page.locator('.mark').count() === asks.length && await page.locator('.mark.no').count() === 0, `${now.key}: every answer is not marked right (${asks})`);
    await next(page);
  }
  c.check(!await page.locator('#qNext').count() && new RegExp(`${n} of ${n} right the first time`).test(await env.screenText(page)), `the third set does not end on "${n} of ${n} right the first time"`);
  await env.goOn(page);
}
async function theCheckOfEight(env, c, page) {
  let text = await env.screenText(page);
  c.check(/Eight new/i.test(text) && /At least 7 right/.test(text), `the check does not name itself and its rule (${text.slice(0, 300)})`);
  await env.inspect(c, page, 'the first screen of the check');
  await env.goOn(page);
  const keys = [];
  for (let i = 0; i < 8; i++) {
    const now = await look(page);
    keys.push(now.key);
    c.check(!now.redo && now.open[0].id === 'own' && (await asksOf(page, now.key))[0] === 'own', `${now.key}: a question of the check is not asked once, from Question 1`);
    await answerAll(page, now.key === 'k-tax' ? { miss: { own: ['state'] } } : {});
    c.check(await page.locator('#qNext').isEnabled(), 'the check leaves Next shut after an answer');
    await next(page);
  }
  c.check([...keys].sort().join() === 'k-coop,k-farms,k-hiring,k-plants,k-shop,k-soil,k-tax,k-throne', `the check is not the eight new passages (${keys})`);
  text = await env.screenText(page);
  const rules = await page.locator('.done-screen > table.results tr td:last-child').allTextContents();
  c.check(/7 of 8: passed/.test(text) && rules.length === 1 && rules.every(v => v === 'met'), `the check was not passed 7 of 8 with its rule met (${text.slice(0, 160)})`);
  c.check(await page.locator('.resitem').count() === 8 && await page.locator('.resitem').first().locator('.mark.no').count() >= 1, 'the answers are not all shown with the missed one first');
  await plainWords(c, page, env, 'the result of the check');
}
async function theRecord(env, c, page) {
  await env.clickVisible(page, '[data-v="subject"]');
  const text = await env.screenText(page);
  c.check(/Check passed, 7 of 8/.test(text) && /1 of 7 units/.test(text) && /Practice again/.test(text), `the subject screen does not show the check passed and one part done (${text.slice(0, 200)})`);
  await env.inspect(c, page, 'the Ideology subject screen after the lesson');
  const stored = await env.storage(page), items = JSON.parse(stored['pl:ideology:items'] || '{}'), seen = JSON.parse(stored['pl:ideology:seen'] || '{}');
  const tries = Object.entries(items).flatMap(([key, e]) => e.tries.map(t => ({ key, ...t }))), inCheck = tries.filter(t => t.context === 'check'), practice = tries.filter(t => t.context === 'practice');
  c.check(inCheck.length === 8 && inCheck.every(t => t.lesson === 'l1' && t.rev === 1 && t.sup === false), 'the check was not stored as eight tries of lesson 1 without help');
  c.check(tries.every(t => Object.keys(t.a).every(k => ['own', 'unit', 'family'].includes(k)) && Object.values(t.a).every(v => typeof v === 'string')), 'an answer is not stored as the option chosen for each question asked');
  const heldAsks = await Promise.all(inCheck.map(async t => [t.key, Object.keys(t.a).sort().join(), (await asksOf(page, t.key)).sort().join()]));
  c.check(heldAsks.every(([, held, asked]) => held === asked && held.includes('own')), `a try of the check does not hold an answer to each ask of its question (${JSON.stringify(heldAsks.filter(([, h, a]) => h !== a))})`);
  c.check(practice.filter(t => ['u-class', 'u-rank-keep'].includes(t.key)).every(t => JSON.stringify(Object.keys(t.a)) === '["unit"]'), 'a try of the first set does not hold the unit ask alone');
  const slips = new Set(tries.flatMap(t => Object.values(t.r)));
  ['skipped-direction', 'wrong-own'].forEach(slip => c.check(slips.has(slip), `the slip "${slip}" is not in the record`));
  const direction = tries.filter(t => t.key === 'u-rank-keep');
  c.check(direction.length === 2 && direction[0].a.unit === 'identity-equal' && direction[0].r.unit === 'skipped-direction' && direction[1].a.unit === 'race-rank', `the miss on the direction pair is not stored as a try and its second go (${JSON.stringify(direction.map(t => [t.a, t.r]))})`);
  c.check(tries.filter(t => t.key === 'o-childcare').some(t => t.a.own === 'state' && t.r.own === 'wrong-own'), 'the welfare passage called state ownership is not stored as the wrong owner');
  c.check(!tries.some(t => t.key === 'w1-manifesto'), 'the worked item was stored as a try');
  c.check(JSON.stringify(seen) === JSON.stringify({ l1: { rev: 1, at: 9 } }), `the place saved is not the end of the lesson (${JSON.stringify(seen)})`);
  c.check(await page.evaluate(() => { const d = FC.get('ideology'); return lessonDone(d, 'ideology', d.lessons.l1) && lastCheck(d, 'ideology', d.lessons.l1).passed; }), 'the lesson is not done with the check passed');
}
async function theIdeologyReview(env, c, page) {
  await env.setDay(page, WEDNESDAY);
  await env.toLibrary(page);
  const tile = await page.locator('[data-review-tile]').textContent();
  c.check(/1 due/.test(tile) && /Political Ideologies/.test(tile), `the review does not hold the topic two days after the check (${tile.replace(/\s+/g, ' ').slice(0, 160)})`);
  await page.locator('[data-review-start]').first().click();
  await page.locator('#beginBlock').click();
  const now = await look(page);
  c.check(await page.evaluate(() => Q.list[Q.at].item.strand) === 'five-questions', `the review asked ${now.key}, which is not a question of the strand five-questions`);
  c.check(now.open.length >= 1 && ['own', 'unit'].includes(now.open[0].id), `the review asks ${now.open.map(a => a.id)}, not a question of lesson 1`);
  await plainWords(c, page, env, 'a question of the review');
  await answerAll(page);
  await next(page);
}
export async function X33(env) {
  const c = env.checker('X33'), { context, page } = await env.freshPage(c, 375);
  await env.setDay(page, MONDAY);
  await env.openSubject(page, 'ideology');
  const subject = await env.screenText(page);
  c.check(await page.locator('#screen [data-l="l1"]').count() === 1 && /The five questions/.test(subject), 'the subject screen does not list lesson 1, The five questions');
  c.check(!subject.includes('Draft: not tried yet'), 'lesson 1, passed by its reviews and live, still carries the draft line');
  await env.inspect(c, page, 'the Ideology subject screen');
  await env.clickVisible(page, '#screen [data-l="l1"]');
  await theTeaching(env, c, page);
  await theWorkedItem(env, c, page);
  await theQuestionTwoSet(env, c, page);
  await theQuestionOneSet(env, c, page);
  await theBothQuestionsSet(env, c, page);
  await theCheckOfEight(env, c, page);
  await theRecord(env, c, page);
  await theIdeologyReview(env, c, page);
  await context.close();
  return c;
}
export const LABEL_CHECKS = { X32, X33 };
