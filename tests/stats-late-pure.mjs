// The pure half of Statistical Claims, lessons 6 to 9 (docs/subjects/stats/plan.md): who was counted (the margins stated agree with the sample sizes
// taught), what else could explain it (the cause question's options and the verdict rule), the chart's numbers (each change worked out again from the
// chart, its traps, cut scales on both verdicts), and the whole item (each size worked out again from its own sentence, the six questions said from
// memory, the second check's bank, the plan in the subject's words). What lessons 1 to 5 share with these (the standing questions, the patterns no
// verdict may be read from) is in tests/stats-lessons-pure.mjs. No browser: the app's scripts are loaded as in tests/load-app.mjs.
// Run: node tests/stats-late-pure.mjs
import { loadApp } from './load-app.mjs';

const failures = [];
let checks = 0;
const check = (ok, msg) => { checks++; if (!ok) failures.push(msg); };
const same = (a, b, msg) => check(JSON.stringify(a) === JSON.stringify(b), `${msg}: got ${JSON.stringify(a)}, wanted ${JSON.stringify(b)}`);
const app = await loadApp({ fixture: true });
const { FC, chooseOptions, flatRefs, refId, checkResult, TAP_NONE, recallMatch } = app;
const stats = FC.get('stats'), lessons = stats.lessons, byId = stats.items;
const LATE = ['counted', 'cause', 'chart', 'whole'];
const late = Object.values(byId).filter(i => LATE.includes(i.strand) && i.asks[0].id === 'claim');
const ids = refs => flatRefs(refs).map(refId);
const setsOf = l => l.flow.filter(s => s.set).map(s => s.set);
const inLesson = id => { const l = lessons[id]; return [...setsOf(l).flatMap(s => ids(s.items)), ...ids(l.check.items)].map(r => byId[r]).filter(q => q && q.asks[0].id === 'claim'); };
const articleOf = q => q.blocks.find(b => b.kind === 'article');
const chartOf = q => q.blocks.find(b => b.kind === 'chart');
const textOf = q => articleOf(q).lines.map(l => l.text).join(' ');
const tapped = q => { const r = q.asks.find(a => a.id === 'line').right; return r === TAP_NONE ? null : articleOf(q).lines.find(l => l.id === r[0]).text; };
const nums = t => [...t.matchAll(/\d[\d,]*(?:\.\d+)?/g)].map(m => Number(m[0].replace(/,/g, '')));
const rightOf = (q, ask) => chooseOptions(stats, ask).find(o => o.ok);
// the words worded once in items-asks.js, read from the questions that are known to use them
const STATS_NOTHING_ELSE = rightOf(byId['p-calmira'], byId['p-calmira'].asks.find(a => a.id === 'other')).text;
const STATS_NOT_SAID = rightOf(byId['p-desks'], byId['p-desks'].asks.find(a => a.id === 'other')).text;
const STATS_WHOLE_LINE = byId['q-elmwood'].asks.find(a => a.id === 'line').prompt;
check(/^Only luck/.test(STATS_NOTHING_ELSE) && /^Cannot say/.test(STATS_NOT_SAID) && /number it rests on/.test(STATS_WHOLE_LINE), 'the shared wordings are not where they were');

/* ---------- the record ---------- */
{
  same(['l6', 'l7', 'l8', 'l9'].map(id => [lessons[id].part, lessons[id].status, lessons[id].rev]), [['F', 'live', 1], ['G', 'live', 1], ['H', 'live', 1], ['I', 'live', 1]], 'lessons 6 to 9 are live, parts F to I');
  same(['l6', 'l7', 'l8', 'l9'].map(id => [lessons[id].check.items.length, lessons[id].check.pass[0].right.min]), [[6, 5], [6, 5], [5, 4], [8, 7]], 'the checks: 5 of 6, 5 of 6, 4 of 5, 7 of 8');
  same(lessons.l9.check.retest, 28, 'the whole check comes back four weeks later');
  ['l6', 'l7', 'l8', 'l9'].forEach(id => check(ids(lessons[id].check.items).every(c => byId[c].strand === { l6: 'counted', l7: 'cause', l8: 'chart', l9: 'whole' }[id]), `${id}: the check holds questions of its own topic`));
  const words = (stats.meta.own.plan || {}).words || {};
  check(['title', 'how', 'saved', 'before'].every(k => typeof words[k] === 'string' && words[k].length > 10), 'the plan has its own words in the subject');
  check(!/message|request|code/.test(Object.values(words).join(' ')), 'the plan speaks of another subject\'s moment');
  same(lessons.l9.flow.map(s => s.show ? 'show' : s.set ? 'set' : s.own ? `own:${s.own}` : 'other'), ['show', 'set', 'own:plan'], 'lesson 9: how it goes, the group, then the optional plan');
}

/* ---------- the claim's wordings give nothing away (as tests/stats-lessons-pure.mjs holds lessons 0 to 5) ---------- */
{
  const GIVEAWAY = /\b(whole|across|state|never|because|already|all|every|any|anywhere|everywhere|made)\b/i;
  const words = t => new Set(t.toLowerCase().split(/[^a-z0-9%’']+/).filter(w => w.length > 2));
  let byCloseness = 0;
  late.forEach(q => {
    const options = chooseOptions(stats, q.asks[0]), right = options.find(o => o.ok), art = articleOf(q), head = (art.headline || art.lines[0]).text;
    options.filter(o => !o.ok).forEach(o => {
      const m = o.text.match(GIVEAWAY);
      check(!m || new RegExp(`\\b${m[1]}\\b`, 'i').test(head + ' ' + right.text), `${q.id}: the wrong wording "${o.text}" gives itself away with "${m && m[1]}"`);
    });
    const hw = words(head), score = o => [...words(o.text)].filter(w => hw.has(w)).length / Math.max(1, words(o.text).size);
    const best = Math.max(...options.map(score)), top = options.filter(o => score(o) === best);
    if (top.length === 1 && top[0].ok) byCloseness++;
  });
  check(byCloseness / late.length < 0.6, `picking the wording closest to the headline gets ${byCloseness} of ${late.length} claims right`);
}

/* ---------- lesson 6: who was counted ---------- */
{
  // a margin stated agrees with the sample size taught: about 100 ÷ √n points
  late.forEach(q => {
    const t = textOf(q), m = t.match(/off by about (\d+) points/), n = t.match(/(?:called|polled|asked|picked) ([\d,]+) /);
    if (m) check(n && Math.abs(Number(m[1]) - 100 / Math.sqrt(Number(n[1].replace(/,/g, '')))) < 0.8, `${q.id}: a margin of ${m[1]} points with ${n && n[1]} people`);
  });
  // "picked at random" sits on claims that hold and on claims that do not
  const random = new Set(['l6', 'l9'].flatMap(inLesson).filter(q => /at random/.test(textOf(q))).map(q => q.facets.fit));
  check(random.has('holds') && random.has('outruns'), `"picked at random" is only on claims that ${[...random]}`);
}

/* ---------- lesson 7: could anything else explain it ---------- */
{
  const cause = late.filter(q => q.strand === 'cause');
  const split = q => /coin toss|lottery/.test(textOf(q));
  const rightOther = q => rightOf(q, q.asks.find(a => a.id === 'other')).text;
  cause.forEach(q => {
    const other = q.asks.find(a => a.id === 'other'), options = chooseOptions(stats, other);
    same(options.filter(o => o.ok).length, 1, `${q.id}: one right answer to what else could explain it`);
    check(other.shuffle === true && options.length === 3, `${q.id}: three options, shuffled`);
    const r = rightOther(q);
    // nothing else is right exactly when the text says the groups were split by chance; "cannot say" exactly when the claim cannot be told
    check((r === STATS_NOTHING_ELSE) === split(q), `${q.id}: "nothing else" is right ${r === STATS_NOTHING_ELSE ? 'without' : 'with'} a split by chance`);
    if (r === STATS_NOT_SAID) same(q.facets.fit, 'unclear', `${q.id}: the groups' forming not said, and the claim can be told`);
    // the verdict rule: a claim that one thing makes another happen holds only on groups split by chance
    const claimSays = rightOf(q, q.asks[0]).text, causeClaim = !/^(People|Adults|Children|Neighborhoods|Workers) (who|with)/.test(claimSays);
    if (q.facets.fit === 'holds' && causeClaim) check(split(q), `${q.id}: a claim of cause holds without a split by chance`);
  });
  const fitsWhere = test => new Set(cause.filter(q => lessonsHold(q) && test(rightOther(q))).map(q => q.facets.fit));
  function lessonsHold(q) { return ['l7'].some(id => inLesson(id).includes(q)); }
  const nothing = fitsWhere(r => r === STATS_NOTHING_ELSE), named = fitsWhere(r => r !== STATS_NOTHING_ELSE && r !== STATS_NOT_SAID);
  check(nothing.has('holds') && nothing.has('outruns') && nothing.has('unclear'), `"nothing else" is right only on claims that ${[...nothing]}`);
  check(named.has('holds') && named.has('outruns'), `another explanation is right only on claims that ${[...named]}`);
  check(cause.some(q => chooseOptions(stats, q.asks.find(a => a.id === 'other')).some(o => !o.ok && o.text === STATS_NOT_SAID)), '"cannot say" is never a wrong option, so its words give it away');
  same(ids(lessons.l7.check.items).filter(c => byId[c].facets.fit === 'holds' && /coin toss|lottery/.test(textOf(byId[c]))).length, 2, 'the check holds two sound trials');
}

/* ---------- lesson 8: the chart's numbers ---------- */
{
  const charted = late.filter(q => q.asks.some(a => a.id === 'size') && !q.asks.find(a => a.id === 'size').when);
  charted.forEach(q => {
    const ask = q.asks.find(a => a.id === 'size'), c = chartOf(q), answer = ask.answer;
    // the numbers of the change are on the chart, or in the sentence that gives them
    const shown = [...(c ? c.series[0].values : []), ...nums(textOf(q))];
    const pair = shown.flatMap(a => shown.map(b => [a, b])).find(([a, b]) => Math.abs(Math.abs(b - a) / a * 100 - answer) < 1e-9 && (a !== b || answer === 0));
    check(pair || answer === 0, `${q.id}: no two numbers shown give a change of ${answer}%`);
    check(Math.abs(answer - Math.round(answer)) < 1e-9, `${q.id}: the change ${answer}% is not a whole percent`);
    ask.traps.forEach(t => check(Math.abs(Math.round(t.value) - Math.round(answer)) >= 1, `${q.id}: the trap "${t.slip}" lands on the answer`));
    check(new Set(ask.traps.map(t => Math.round(t.value))).size === ask.traps.length, `${q.id}: two traps give the same number`);
    if (c) {
      check(!!q.redraw === c.y.from > 0, `${q.id}: a cut scale is redrawn from zero, and only a cut one`);
      // the bars read for their height is a trap when the scale is cut and both ends of the change are on the chart
      const height = ask.traps.find(t => t.slip === 'read-height'), onChart = pair && pair.every(v => c.series[0].values.includes(v));
      check(!height === !(c.y.from > 0 && onChart), `${q.id}: the bars read for their height is a trap exactly when the scale is cut and the change is on it`);
      if (height && c.type === 'bars' && pair) { const [a, b] = pair; check(height.value === Math.round(Math.abs(b - a) / (a - c.y.from) * 100), `${q.id}: the height trap is not what the bars look like`); }
    }
  });
  const charts = inLesson('l8').filter(chartOf), cut = q => chartOf(q).y.from > 0;
  ['holds', 'outruns'].forEach(fit => {
    check(charts.some(q => cut(q) && q.facets.fit === fit), `no cut scale on a claim that ${fit}`);
    check(charts.some(q => !cut(q) && q.facets.fit === fit), `no scale from zero on a claim that ${fit}`);
  });
  const outcome = (c, ok, sizeOk) => ({ facets: byId[c].facets, r: { ...(ok ? {} : { verdict: byId[c].facets.fit === 'holds' ? 'doubted' : 'believed' }), ...(sizeOk ? { size: 'ok' } : { size: 'no' }) }, ok: ok && sizeOk });
  const cids = ids(lessons.l8.check.items), pass = lessons.l8.check.pass;
  check(checkResult(stats, pass, cids.map(c => outcome(c, true, true))).passed, 'l8: all right passes');
  check(!checkResult(stats, pass, cids.map((c, i) => outcome(c, true, i > 1))).passed, 'l8: three of five changes right does not pass');
}

/* ---------- lesson 9: the whole item ---------- */
{
  const l9 = lessons.l9, set = setsOf(l9)[0];
  check(setsOf(l9).every(s => !s.support), 'lesson 9 gives no help');
  same(ids(set.items).slice(-1), ['q-moves'], 'lesson 9 asks the six questions from memory after its ten claims');
  check(/1\. What does it claim.*2\. How big is it.*3\. Compared with what.*4\. Who was counted.*5\. Could anything else explain it.*6\. The verdict/.test(l9.flow[0].show[0].text.join(' ')), 'lesson 9 does not list the six questions before it asks for them');
  check(late.filter(q => q.strand === 'whole').every(q => q.asks.find(a => a.id === 'line').prompt === STATS_WHOLE_LINE), 'every whole question asks for its line in the same words');
  same(ids(set.items).length, 11, 'the six questions and ten mixed questions');
  same(new Set(ids(set.items).slice(0, -1).map(c => byId[c].facets.fit)).size, 3, 'the group mixes all three verdicts');
  // each size worked out again from the sentence tapped
  late.filter(q => q.strand === 'whole' && q.asks.some(a => a.id === 'size' && a.when)).forEach(q => {
    const ask = q.asks.find(a => a.id === 'size'), t = tapped(q), answer = [].concat(ask.answer);
    if (ask.frame.startsWith('from')) same(answer, [...t.matchAll(/(\d+) in every 1,000/g)].map(m => Number(m[1])).sort((a, b) => b - a), `${q.id}: the risk before and after`);
    else if (ask.frame.includes('test positive')) {
      const [p] = t.match(/(\d+) in every 1,000/).slice(1).map(Number), [sens, fpr] = [...t.matchAll(/(\d+) of every 100/g)].map(m => Number(m[1]));
      const found = p * sens / 100; same(answer, [found, found + (1000 - p) * fpr / 100], `${q.id}: the positives counted again`);
    } else {
      const [count, whole] = nums(t); check(Math.abs(count / whole * 1000 - answer[0]) < 1e-9, `${q.id}: ${count} of ${whole} is not ${answer[0]} in 1,000`);
      const usual = textOf(q).match(/about (\d+(?:\.\d+)?) [a-z ]*?(?:for every|in every) 1,000/);
      if (usual) check(q.facets.fit === 'holds' ? answer[0] > Number(usual[1]) : true, `${q.id}: a sound claim of more than usual that is not above the usual`);
    }
  });
  // the six questions from memory: said plainly they count, five are enough, and other words are not counted
  const moves = byId['q-moves'].asks[0];
  check(!!recallMatch(moves, 'what it claims, how big is it, compared with what, who was counted, could anything else explain it, the verdict'), 'the six questions said plainly are not accepted');
  check(!!recallMatch(moves, 'what does it claim and its number, how big, compared with what, who was counted and how, anything else explain it'), 'five of the six are not enough');
  check(!recallMatch(moves, 'what it claims, how big is it, compared with what, who was counted'), 'four of the six are accepted');
  check(!recallMatch(moves, 'is it true, who said it, is it a big number, can I trust it, is it new'), 'other questions are accepted');
  // the wordings the lessons' own screens and reasons use are each accepted (taught: true says the answers are the lessons' words)
  ['what does it claim, and what number does it rest on', 'what it claims and the number it rests on', 'how big is it, out of how many', 'how big is it out of how many over how long',
    'compared with what', 'compared to what', 'is it fair', 'who was counted', 'who counted', 'who was asked', 'could anything else explain it', 'what else could explain it',
    'the verdict: does the text show it', 'what is the verdict', 'does it hold up']
    .forEach(w => check(recallMatch({ ...moves, count: 1 }, w), `the six questions: "${w}" is not accepted`));
  // the second check four weeks on: after the three returns, the bank still holds a new question of each kind the check asks
  const used = new Set(Object.values(lessons).flatMap(l => [...l.flow.filter(s => s.worked).map(s => s.worked), ...setsOf(l).flatMap(s => ids(s.items)), ...ids(l.check.items)]));
  const bank = Object.values(byId).filter(i => i.strand === 'whole' && !used.has(i.id)), after = bank.slice(3);
  same(bank.slice(0, 3).map(i => i.facets.fit).sort(), ['holds', 'outruns', 'unclear'], 'the first three in reserve are one of each, for the returns');
  ['holds', 'outruns', 'unclear'].forEach(fit => {
    const want = ids(l9.check.items).filter(c => byId[c].facets.fit === fit).length;
    check(after.filter(i => i.facets.fit === fit).length >= want, `the bank holds too few claims that are ${fit} for the second check (${want} wanted)`);
  });
}

/* ---------- nothing in a form predicts the verdict ---------- */
{
  // the right wording of the claim is not the longest more often than chance would make it
  const longest = late.filter(q => { const o = chooseOptions(stats, q.asks[0]), max = Math.max(...o.map(x => x.text.length)); return o.filter(x => x.text.length === max).length === 1 && o.find(x => x.ok).text.length === max; });
  check(longest.length / late.length < 0.4, `the right wording is the longest in ${longest.length} of ${late.length} claims`);
  // a trial in a check does not always hold: lessons 7 and 9 each have one that falls short
  const trial = q => /coin toss|lottery/.test(textOf(q));
  ['l7', 'l9'].forEach(id => { const fits = new Set(ids(lessons[id].check.items).map(c => byId[c]).filter(trial).map(q => q.facets.fit)); check(fits.has('holds') && fits.size > 1, `${id}: every trial in the check is ${[...fits]}`); });
  // an "ever" claim is not always one that cannot be told, and not every claim that cannot be told is about "ever"
  const ever = q => /\bever\b|record|since it opened|since the app began|any year/.test(rightOf(q, q.asks[0]).text);
  const charts = late.filter(q => q.strand === 'chart' || (q.strand === 'whole' && chartOf(q)));
  check(new Set(charts.filter(ever).map(q => q.facets.fit)).size >= 2, 'every "ever" chart claim has one verdict');
  check(charts.some(q => q.facets.fit === 'unclear' && !ever(q)), 'every chart that cannot be told is an "ever" claim');
  // the box for a change never says which way it went
  late.filter(q => q.asks.some(a => a.id === 'size' && !a.when)).forEach(q => same(q.asks.find(a => a.id === 'size').frame, '__%', `${q.id}: the change's box gives its direction`));
}

/* ---------- numbers taught on a screen are not the check's ---------- */
{
  ['l6', 'l7', 'l8', 'l9'].forEach(id => {
    const taught = new Set(lessons[id].flow.filter(s => s.show).flatMap(s => s.show).flatMap(b => [].concat(b.text || [], b.a ? b.a.lines.map(l => l.text) : [], b.b ? b.b.lines.map(l => l.text) : [])).flatMap(nums).filter(n => n >= 20 && n !== 100 && n !== 1000));
    ids(lessons[id].check.items).forEach(c => {
      const q = byId[c], shown = [...nums(textOf(q)), ...(chartOf(q) ? chartOf(q).series[0].values : [])];
      check(!shown.some(n => taught.has(n)), `${id}: the check question ${c} repeats a number of the lesson's teaching screens (${shown.filter(n => taught.has(n))})`);
    });
  });
}

if (failures.length) {
  console.error(`✗ ${failures.length} of ${checks} Statistical Claims (lessons 6 to 9) checks failed:`);
  failures.slice(0, 60).forEach(f => console.error('  - ' + f));
  process.exit(1);
}
console.log(`✓ ${checks} Statistical Claims (lessons 6 to 9) checks passed`);
