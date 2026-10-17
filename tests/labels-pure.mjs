// The pure half of step 6 (lesson standard 3, 3.9, 3 to 9): a label pinned on a post laid out, the panel and who sees it, each need found or
// missing, the sides kept once and shown side by side, a pass rule counted by side; and what must be true of Ideology's five questions as data:
// every passage asked in order with a slip on each wrong answer, the direction trap and too little to tell named, each lesson's teaching first, its one worked item, a new check and a strand with items held for the review. No browser: the app's
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

/* ---------- Ideology's five questions as data: every lesson that exists ---------- */
{
  const meta = ideology.meta, ids = refs => flatRefs(refs).map(refId), ASK_ORDER = ['own', 'unit', 'story', 'democracy', 'end', 'family', 'marker'];
  const lessons = Object.values(ideology.lessons).filter(l => l.flow && l.flow.length);   // a stub that defines nothing is skipped
  const strandOf = lesson => meta.strands[meta.parts.findIndex(p => p.id === lesson.part)].id;
  const workedOf = lesson => lesson.flow.filter(s => s.worked).map(s => s.worked);
  const taught = new Set(lessons.flatMap(l => [...flowSets(l).flatMap(s => ids(s.items)), ...ids(l.check.items), ...workedOf(l)]));
  check(lessons.some(l => l.id === 'l1'), 'Ideology has its first lesson');
  const slipIds = meta.lists.slip.map(o => o.id);
  Object.entries(ideology.items).forEach(([id, item]) => {
    const asks = item.asks, at = asks.map(a => ASK_ORDER.indexOf(a.id));
    check(asks.length >= 1 && asks.every(a => a.kind === 'choose'), `${id}: every ask is a choose ask`);
    check(at.every((n, k) => n >= 0 && (k === 0 || n > at[k - 1])), `${id}: the asks come in the order ${ASK_ORDER.join(', ')} (${asks.map(a => a.id)})`);
    asks.forEach(ask => {
      const list = (meta.lists[ask.from] || []).map(o => o.id), slips = ask.slips;
      // an ask may offer only part of its list (`only`), as lesson 3 offers the families it teaches; the slips and the traps are those of what is offered
      const offered = ask.only ? list.filter(o => ask.only.includes(o)) : list, wrong = offered.filter(o => o !== ask.right);
      check(ask.from === ask.id && list.length > 0, `${id}/${ask.id}: the ask is drawn from the list of its own name (${ask.from})`);
      check(!ask.only || ask.only.every(o => list.includes(o)), `${id}/${ask.id}: everything it offers is an option of the list`);
      check(offered.includes(ask.right), `${id}/${ask.id}: the right answer "${ask.right}" is an option of the list, and offered`);
      same(Object.keys(slips).sort(), [...wrong].sort(), `${id}/${ask.id}: a slip on every wrong option and no other`);
      check(Object.values(slips).every(s => slipIds.includes(s)), `${id}/${ask.id}: every slip is one the subject names`);
      // the direction trap: the same noun, opposite families
      if (ask.id === 'unit' && ['race-rank', 'identity-equal'].includes(ask.right) && wrong.length) same(slips[ask.right === 'race-rank' ? 'identity-equal' : 'race-rank'], 'skipped-direction', `${id}: the other direction of race is the slip skipped-direction`);
      if (ask.id === 'family' && ask.right === 'idegal') ['nazism', 'fascism'].filter(w => wrong.includes(w)).forEach(w => same(slips[w], 'skipped-direction', `${id}: ${w} for identity-egalitarianism is skipped-direction`));
      if (ask.id === 'family' && ['nazism', 'fascism'].includes(ask.right) && wrong.includes('idegal')) same(slips.idegal, 'skipped-direction', `${id}: identity-egalitarianism for ${ask.right} is skipped-direction`);
      // too little to tell, both ways
      if (ask.id === 'family' && ask.right === 'too-little') check(wrong.every(w => slips[w] === 'overreached'), `${id}: naming a family when the words say too little is overreached`);
      if (ask.id === 'family' && ask.right !== 'too-little' && wrong.includes('too-little')) same(slips['too-little'], 'hedged', `${id}: too little to tell when the words settle it is hedged`);
    });
    check(!!item.reason && meta.facets.question.values.some(v => v.id === item.facets.question) && asks.some(a => a.id === item.facets.question), `${id}: the question it turns on is one of its asks`);
  });
  lessons.forEach(lesson => {
    const lid = lesson.id, strand = strandOf(lesson), setIds = flowSets(lesson).flatMap(s => ids(s.items)), checkIds = ids(lesson.check.items), worked = workedOf(lesson);
    // the way of thinking before any worked item or set
    const firstDoing = lesson.flow.findIndex(s => s.worked || s.set);
    check(firstDoing >= 1 && lesson.flow.slice(0, firstDoing).every(s => s.show && s.show.length), `${lid}: the first steps are teaching screens, before any worked item or set`);
    // one worked item, worked question by question
    same(worked.length, 1, `${lid}: one worked item`);
    const w = ideology.items[worked[0]];
    check(!!w && Array.isArray(w.steps) && w.steps.length >= 1, `${lid}: the worked item has steps`);
    if (w && w.steps) same(w.steps.filter(s => s.ask).map(s => s.ask), w.asks.map(a => a.id), `${lid}: the steps of the worked item name its asks, one each, in order`);
    // the check is made of new passages
    const own = new Set([...setIds, ...worked]);
    check(checkIds.length >= 1 && checkIds.every(id => !own.has(id)), `${lid}: no item of the check is in the lesson's own sets or worked item`);
    const strandAt = id => meta.strands.findIndex(s => s.id === id), here = strandAt(strand);   // from lesson 2 on, a set mixes in earlier material
    check([...setIds, ...checkIds, ...worked].every(id => ideology.items[id] && strandAt(ideology.items[id].strand) >= 0 && strandAt(ideology.items[id].strand) <= here), `${lid}: every item the lesson uses is in its strand (${strand}) or an earlier one`);
    // held back for the review
    const spare = Object.values(ideology.items).filter(item => item.strand === strand && !taught.has(item.id));
    check(spare.length >= 3, `${lid}: the strand ${strand} holds at least 3 items no lesson uses, for the review (${spare.length})`);
  });
}

if (failures.length) {
  console.error(`✗ ${failures.length} of ${checks} label checks failed:`);
  failures.forEach(f => console.error('  - ' + f));
  process.exit(1);
}
console.log(`✓ ${checks} label checks passed`);
