// The pure half of step 6 (lesson standard 3, 3.9, 3 to 9): a label pinned on a post laid out, the panel and who sees it, each need found or
// missing, the sides kept once and shown side by side, a pass rule counted by side; and what must be true of Ideology's pilot as data: what each
// verdict, name and need says about the words, both sides in balance, no party, every quoted line really quoted in its reason. No browser: the app's
// scripts are loaded as in tests/load-app.mjs, with the test subjects (tests/fixtures/fixture-subject).
// Run: node tests/labels-pure.mjs
import { loadApp } from './load-app.mjs';
import { LABEL_SIDES as SHAPE_SIDES } from './lessons/shapes.mjs';

const failures = [];
let checks = 0;
const check = (ok, msg) => { checks++; if (!ok) failures.push(msg); };
const same = (a, b, msg) => check(JSON.stringify(a) === JSON.stringify(b), `${msg}: got ${JSON.stringify(a)}, wanted ${JSON.stringify(b)}`);
const app = await loadApp({ fixture: true });
const { FC, scoreItem, itemHtml, feedbackHtml, blockHtml, hasLines, hasHtml, panelHtml, labelledPostHtml, facetSplits, splitsHtml, panelBlocksOf, itemRuleIds, ruleNeeds, labelledPostsOf,
  LABEL_SIDES, ruleText, ruleMet, checkResult, flatRefs, refId, flowSets, SAY, segmentsOf, tapRightIds, tapSegments } = app;
const labels = FC.get('labels'), ideology = FC.get('ideology');

/* ---------- the sides: one list, in the engine and in the validator's shape ---------- */
same(LABEL_SIDES, SHAPE_SIDES, 'the sides a label is thrown from are the same in the engine and in the validator\'s shape');

/* ---------- what a label needs, and what the words show of it ---------- */
{
  const g1 = labels.items['g-1'], g2 = labels.items['g-2'];
  same(panelBlocksOf(g1).length, 1, 'a labelled question has one panel');
  same(itemRuleIds(g1), ['dry'], 'the rules of the panel of a question');
  same(ruleNeeds(labels, ['dry', 'wet']).map(n => n.id), ['dry-sky', 'dry-ground', 'wet-rain'], 'the needs of several rules, in order');
  same(labelledPostsOf(g1).length, 1, 'the posts that carry a label');
  const lines = hasLines(labels, g1);
  same(lines.map(g => g.id), ['dry'], 'one group of needs for one rule');
  same(lines[0].needs.map(n => [n.id, n.found ? n.found.id : null]), [['dry-sky', 'g-1-a'], ['dry-ground', null]], 'a need found in a line, and a need missing');
  same(lines[0].needs[0].found.text, 'The sky is clear.', 'the line that shows a need is the line of the text');
  same(hasLines(labels, g2)[0].needs.map(n => n.found && n.found.id), ['g-2-a'], 'a rule with one need');
  // the feedback lists each need with its mark
  const html = hasHtml(labels, g1);
  check(/data-has="dry"/.test(html) && /class="found" data-need="dry-sky"/.test(html) && /class="missing" data-need="dry-ground"/.test(html), 'the feedback marks a need found and a need missing');
  check(html.includes('“The sky is clear.”') && html.includes(SAY.hasNowhere) && html.includes(SAY.hasHeading('Dry')), 'the feedback quotes the line that shows a need and says when the words do not');
  check(hasHtml(labels, labels.items['w-1']).indexOf('found') > -1 && !/class="missing"/.test(hasHtml(labels, labels.items['w-1'])), 'a label the words earn has every need found');
  same(hasHtml(FC.get('feed'), FC.get('feed').items['n-news']), '', 'a question with no panel has no needs to list');
}

/* ---------- the panel: beside the words while the group helps, on a teaching screen always, nowhere else ---------- */
{
  const g1 = labels.items['g-1'], inst = { key: 'g-1', item: g1 };
  const view = (support, extra = {}) => itemHtml(labels, inst, { a: {}, many: {}, marks: false, support, ...extra });
  const helped = view({ panel: true }), plain = view(null), other = view({ shown: true });
  check(/data-panel="dry"/.test(helped) && helped.includes('The sky has no cloud.') && helped.includes('The ground is dry.') && helped.includes(SAY.helpPanel), 'a group with the help shows the panel and says so');
  check(!/block-panel/.test(plain) && !plain.includes('The sky has no cloud.') && !plain.includes(SAY.helpPanel), 'a group without the help shows no panel');
  check(!/block-panel/.test(other), 'another kind of help does not show the panel');
  const rule = labels.meta.rules.dry;
  check(helped.indexOf(rule.needs[0].text) < helped.indexOf(rule.needs[1].text), 'the needs are listed in the order of the subject\'s record');
  check(panelHtml({ kind: 'panel', rules: ['dry', 'wet'] }, { data: labels }).includes('Rain is falling.'), 'a panel on a teaching screen is drawn when nothing says otherwise');
  same(panelHtml({ kind: 'panel', rules: ['dry'] }, { data: labels, panel: false }), '', 'a panel is not drawn where the help is off');
  // the panel stays out of the feedback of a check but the needs do not
  const score = scoreItem(labels, g1, null, { verdict: 'off', words: ['g-1-b'] });
  const fb = feedbackHtml(labels, inst, null, { verdict: 'off', words: ['g-1-b'] }, score);
  check(!/block-panel/.test(fb) && /data-has="dry"/.test(fb), 'the feedback lists the needs, and does not draw the panel again');
}

/* ---------- the label on a post ---------- */
{
  const post = labels.items['g-1'].blocks[0];
  const html = labelledPostHtml(post, [[post.lines[0]], [post.lines[1]]], [post.lines[2]], {});
  check(html.includes('data-side="left"') && html.includes('A neighbor on the left') && html.includes('It is dry out.') && html.includes(SAY.pinnedOn), 'a labelled post shows who posted, how they are known, their words and what it is pinned on');
  check(html.indexOf('class="art-source"') < html.indexOf('class="art-by"') && html.indexOf('class="art-by"') < html.indexOf('class="art-label"') && html.indexOf('class="art-label"') < html.indexOf('class="art-quoted"'), 'the commenter and their words come before the words they are pinned on');
  check(html.indexOf('art-fine') > html.indexOf('The grass is soaked.'), 'who said the words is small print under them');
  check(!/art-head/.test(html), 'a labelled post has no headline');
  check(/art-labelled/.test(blockHtml(post, {})), 'a post with a label is drawn as one');
  check(!/art-labelled/.test(blockHtml(FC.get('feed').items['n-post'].blocks[0], {})), 'a post with no label is drawn as before');
  // the lines are the words that can be tapped; the commenter's words are not
  same(tapSegments(labels.items['g-1'], labels.items['g-1'].asks[1]).map(s => s.id), ['g-1-a', 'g-1-b', 'g-1-s'], 'the lines that can be tapped are the quoted words, with who said them');
  check(!tapSegments(labels.items['g-1'], labels.items['g-1'].asks[1]).some(s => s.text === post.label.text), 'the commenter\'s own words cannot be tapped');
}

/* ---------- the sides, side by side ---------- */
{
  const out = (side, ok) => ({ facets: { side }, ok });
  same(facetSplits(labels, [out('left', true), out('left', false), out('right', true)]), [{ name: 'Which side of the street', rows: [['Houses on the left', '1 of 2'], ['Houses on the right', '1 of 1']] }], 'the two sides side by side');
  same(facetSplits(labels, [out('left', true), out('left', false)]), [], 'one side alone is compared with nothing');
  same(facetSplits(labels, []), [], 'nothing asked, nothing to compare');
  same(facetSplits(FC.get('feed'), [{ facets: { fit: 'holds' }, ok: true }, { facets: { fit: 'outruns' }, ok: false }]), [], 'a facet the subject does not compare is not shown');
  const html = splitsHtml(facetSplits(labels, [out('left', true), out('right', false)]), 'Pinned labels: ');
  check(html.includes(SAY.splitHeading('Pinned labels: Which side of the street')) && html.includes('<td>Houses on the left</td><td>1 of 1</td>') && html.includes('<td>Houses on the right</td><td>0 of 1</td>'), 'the split is written as a table of values and counts');
  // a pass rule counted by side
  const rules = labels.lessons.l1.check.pass;
  const run = [{ facets: { side: 'left' }, r: {}, ok: true }, { facets: { side: 'left' }, r: {}, ok: true }, { facets: { side: 'right' }, r: {}, ok: false }, { facets: { side: 'right' }, r: {}, ok: true }];
  same(rules.map(r => ruleText(labels, r)), ['At least 3 right', 'At least 1 right among houses on the left', 'At least 1 right among houses on the right'], 'a pass rule by side in words');
  same(checkResult(labels, rules, run).lines.map(l => l.met), [true, true, true], 'a check passed on both sides');
  const lopsided = [{ facets: { side: 'left' }, r: {}, ok: false }, { facets: { side: 'left' }, r: {}, ok: false }, { facets: { side: 'right' }, r: {}, ok: true }, { facets: { side: 'right' }, r: {}, ok: true }];
  same(checkResult(labels, rules, lopsided).lines.map(l => l.met), [false, false, true], 'a side missed entirely is a rule not met');
  check(ruleMet({ where: { side: 'right' }, right: { min: 2 } }, run) === false && ruleMet({ where: { side: 'left' }, right: { min: 2 } }, run) === true, 'a side\'s rule counts only that side');
}

/* ---------- Ideology's pilot as data ---------- */
{
  const meta = ideology.meta, lesson = ideology.lessons.l2, items = ideology.items;
  const ids = refs => flatRefs(refs).map(refId);
  const groups = flowSets(lesson).map(s => ids(s.items)), checkIds = ids(lesson.check.items), workedId = lesson.flow.find(s => s.worked).worked;
  const used = new Set([...groups.flat(), ...checkIds, workedId]), reserve = Object.keys(items).filter(id => !used.has(id));
  same(groups.map(g => g.length), [4, 8], 'the two groups are four and eight questions');
  same([checkIds.length, reserve.length], [6, 4], 'the check is six questions and four are held in reserve');
  same(Object.keys(meta.rules), ['market', 'socdem', 'socialist', 'communist'], 'the four labels of part 2');
  same(meta.lists.name.map(o => o.id), [...Object.keys(meta.rules), 'none'], 'the names a question offers are the rules, then none of them');
  meta.lists.name.filter(o => o.id !== 'none').forEach(o => same(o.text, meta.rules[o.id].name, `the name "${o.id}" is written once`));
  const needIds = Object.values(meta.rules).flatMap(r => r.needs.map(n => n.id));
  check(new Set(needIds).size === needIds.length && Object.values(meta.rules).every(r => r.needs.length >= 2 && r.needs.length <= 4), 'every label has two to four needs, each named once');
  const stems = { socialist: /socialis/i, communist: /communis/i, 'free-market': /free-market/i, capitalist: /capitalis/i, 'social democrat': /social democrat/i };
  const party = /\b(Democrat|Democratic|Republican|GOP|Libertarian|Green Party|Labour|Tory|Party)\b/;
  const every = [workedId, ...groups.flat(), ...checkIds, ...reserve];
  every.forEach(id => {
    const item = items[id], post = item.blocks[0], verdict = item.asks[0], name = item.asks[1], words = item.asks[2];
    const label = (verdict.prompt.match(/“([^”]+)”/) || [])[1], rule = itemRuleIds(item)[0];
    check(item.blocks.length === 2 && post.kind === 'article' && post.form === 'post' && item.blocks[1].kind === 'panel' && item.blocks[1].rules.length === 1, `${id}: a labelled post and the one rule it is judged by`);
    check(post.label.side === item.facets.side && LABEL_SIDES.includes(item.facets.side), `${id}: the side is kept once, in the label and the way the question is sorted`);
    check(stems[label] && stems[label].test(post.label.text), `${id}: the commenter's words carry the label the question names ("${label}")`);
    check(!party.test([post.source, post.label.by, ...post.lines.map(l => l.text)].join(' ')), `${id}: no party is named; party cues come back from lesson 4`);
    check(post.lines.filter(l => l.fine).length === 1 && post.lines[post.lines.length - 1].fine, `${id}: who said it is one line of small print, last`);
    check(post.lines.filter(l => !l.fine).every(l => l.id === item.asks[2].right[0] || item.asks[2].right === 'none' || l.note || (item.deciding.includes(l.id) && !l.note) || l.slip), `${id}: every line that is not the answer says why it is not, or is among the words that decide`);
    same(verdict.right, { earned: 'earned', unearned: 'not-earned', thin: 'too-little' }[item.facets.fit], `${id}: the verdict is the fit`);
    same(name.right, item.facets.fit === 'earned' ? rule : item.facets.fit === 'thin' ? 'none' : name.right, `${id}: the name of an earned label is the label's own, of a thin one none`);
    check(item.facets.fit !== 'unearned' || (name.right !== rule && meta.lists.name.some(o => o.id === name.right)), `${id}: the name that fits instead is another of the names`);
    same(Object.keys(item.has), meta.rules[rule].needs.map(n => n.id), `${id}: each need of the label is accounted for`);
    const found = Object.values(item.has).filter(v => v !== null);
    if (item.facets.fit === 'earned') check(found.length === Object.keys(item.has).length, `${id}: an earned label has every need found`);
    else if (item.facets.fit === 'thin') check(found.length === 0 && words.right === 'none', `${id}: a label on words with too little to tell has nothing found and nothing to tap`);
    else check(found.length < Object.keys(item.has).length && words.right !== 'none', `${id}: a label the words do not earn has a need missing and a sentence that shows it`);
    const quoted = item.deciding.map(d => post.lines.find(l => l.id === d)).filter(Boolean).map(l => l.text.replace(/[.]$/, ''));
    check(quoted.some(q => [].concat(item.reason).join(' ').includes(q)), `${id}: the reason quotes a line that decides it`);
    check(item.facets.fit === 'earned' || !!item.need, `${id}: a label that is not earned says what the words would need`);
  });
  // both sides in balance, everywhere
  const side = id => items[id].facets.side, fit = id => items[id].facets.fit, count = (list, f, v) => list.filter(id => f(id) === v).length;
  [...groups, checkIds, reserve].forEach((list, k) => same([count(list, side, 'left'), count(list, side, 'right')], [list.length / 2, list.length / 2], `group ${k + 1}: labels thrown from each side in equal number`));
  const taught = [...groups.flat(), ...checkIds];
  ['earned', 'unearned', 'thin'].forEach(f => ['left', 'right'].forEach(s => check(taught.some(id => fit(id) === f && side(id) === s), `every side throws a label of each kind (${s}, ${f})`)));
  same(['earned', 'unearned', 'thin'].map(f => count(checkIds, fit, f)), [2, 2, 2], 'the check holds two of each kind');
  same(['earned', 'unearned', 'thin'].map(f => count(reserve, fit, f)).map(n => n > 0), [true, true, true], 'the reserve holds each kind');
  check(new Set(taught.map(id => items[id].blocks[0].lines.map(l => l.text).join())).size === taught.length, 'no two questions have the same words');
  // the names asked for are used: socdem, socialist and none each fit a question
  same([...new Set(taught.filter(id => fit(id) === 'unearned').map(id => items[id].asks[1].right))].sort(), ['none', 'socdem', 'socialist'], 'the names that fit instead cover the social democrat, the socialist and none of the four');
  // the check by side
  same(lesson.check.pass.map(r => [r.where ? r.where.side : null, r.right.min]), [[null, 5], ['left', 2], ['right', 2]], 'the check is 5 of 6, and 2 of 3 from each side');
  check(ideology.meta.facets.side.compare === true, 'Ideology compares the sides at the end of a check and of the review');
  // the worked question is shown with its panel and the step that names the tap
  check(items[workedId].steps.every(s => !s.ask || items[workedId].asks.some(a => a.id === s.ask)) && items[workedId].steps.length === 4, 'the worked example works through four steps');
  // the first group helps with the panel and the second does not
  same(flowSets(lesson).map(s => s.support || null), [{ panel: true }, null], 'the first group shows what the label needs and the second does not');
}

if (failures.length) {
  console.error(`✗ ${failures.length} of ${checks} label checks failed:`);
  failures.forEach(f => console.error('  - ' + f));
  process.exit(1);
}
console.log(`✓ ${checks} label checks passed`);
