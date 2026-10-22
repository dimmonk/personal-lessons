// The pure half of Statistical Claims (docs/subjects/stats/plan.md): the subject record, the shape of every question (what it claims, the line, the
// verdict, and the size typed where a lesson teaches one), the numbers in each question worked out again from its own text, the generators on many
// seeds, the groups and the checks and what passes them. No browser: the app's scripts are loaded as in tests/load-app.mjs.
// Run: node tests/stats-lessons-pure.mjs
import { loadApp } from './load-app.mjs';

const failures = [];
let checks = 0;
const check = (ok, msg) => { checks++; if (!ok) failures.push(msg); };
const same = (a, b, msg) => check(JSON.stringify(a) === JSON.stringify(b), `${msg}: got ${JSON.stringify(a)}, wanted ${JSON.stringify(b)}`);
const app = await loadApp({ fixture: true });
const { FC, chooseOptions, flatRefs, refId, checkResult, segmentsOf, TAP_NONE, itemFromGen, tapRightIds } = app;
const stats = FC.get('stats');
const items = Object.values(stats.items), gens = Object.values(stats.gens), lessons = stats.lessons;
const CLAIM_SLIPS = ['heard-cause', 'heard-link', 'mixed-who', 'mixed-claim'];
const FIT_VERDICT = { holds: 'holds', outruns: 'not-shown', unclear: 'unclear' };
const asList = x => Array.isArray(x) ? x : [x];
const near = (a, b) => Math.abs(a - b) < 1e-6;
const amounts = text => [...text.matchAll(/(\d[\d,]*(?:\.\d+)?)( million)?/g)].map(m => Number(m[1].replace(/,/g, '')) * (m[2] ? 1e6 : 1));
const answerOf = (item, ask) => asList(ask.answer).map(v => typeof v === 'number' ? v : item.values[v]);
const ids = refs => flatRefs(refs).map(refId);

/* ---------- the record ---------- */
{
  same(stats.meta.parts.map(p => p.id), ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'], 'nine parts');
  same(stats.meta.units.flatMap(u => u.parts), stats.meta.parts.map(p => p.id), 'the four units hold the nine parts once, in order');
  same(stats.meta.units.map(u => u.parts.length), [4, 2, 1, 2], 'units of 4, 2, 1 and 2 parts');
  same(Object.keys(lessons).sort(), ['l0', 'l1', 'l2', 'l3', 'l4', 'l5', 'l6', 'l7', 'l8', 'l9'], 'lessons 0 to 9 are built');
  check(stats.meta.complete === true, 'the subject is complete');
  check(lessons.l0.role === 'baseline' && lessons.l0.part === null, 'lesson 0 is the baseline');
  same(['l1', 'l2', 'l3', 'l4', 'l5', 'l6', 'l7', 'l8', 'l9'].map(id => lessons[id].part), ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'], 'lessons 1 to 9 are parts A to I');
  check(Object.values(lessons).every(l => l.status === 'live' && l.rev >= 1), 'every lesson is live, after its reviews');
  same(stats.meta.strands.length, 9, 'a strand for each lesson');
  check(!('claim' in stats.meta.lists), 'the five kinds of claim are gone');
  same(stats.meta.danger, { slip: 'believed', facet: 'fit', risky: 'outruns', real: 'holds' }, 'the baseline counts claims believed that the text does not show');
}

/* ---------- every question ---------- */
const STRAND_OF = { l1: 'claim-number', l2: 'size-count', l3: 'size-risk', l4: 'size-test', l5: 'compare', l6: 'counted', l7: 'cause', l8: 'chart', l9: 'whole' };
// the ask a lesson adds between the line and the verdict: a size (lessons 2 to 4, the chart's change in 8, and in 9 where a claim gives one), or what
// else could explain it (7)
const MIDDLE = { cause: ['other'], chart: ['size'], whole: ['size', null] };
const sizeStrand = s => s.startsWith('size-');
{
  const all = [...items.map(i => ({ item: i, where: `question ${i.id}` })), ...gens.flatMap(g => [3, 11, 29].map(seed => ({ item: itemFromGen(g, seed), where: `${g.id} at seed ${seed}` })))];
  all.filter(({ item }) => item.asks[0].id === 'claim').forEach(({ item, where }) => {
    const asks = item.asks, claim = asks[0], line = asks.find(a => a.id === 'line'), verdict = asks[asks.length - 1], fit = item.facets.fit;
    same([asks[0].id, asks[1].id, asks[asks.length - 1].id], ['claim', 'line', 'verdict'], `${where}: the claim, the line, then the verdict last`);
    const noLine = line.right === TAP_NONE;
    // a chart's numbers are on the chart (lesson 8), and the cause question does not rest on a sentence (lesson 7): those open whatever was tapped
    const opensAnyway = ['chart', 'cause'].includes(item.strand) || (item.strand === 'whole' && asks.length === 4 && !asks[2].when);
    if (noLine && !opensAnyway) same(asks.length, 3, `${where}: with nothing to tap there is nothing to size`);
    if (sizeStrand(item.strand) && fit !== 'unclear' && !noLine) same(asks.length, 4, `${where}: a size is typed in the size lessons when a sentence gives the numbers`);
    if (MIDDLE[item.strand]) check(MIDDLE[item.strand].includes(asks.length === 4 ? asks[2].id : null), `${where}: the asks between the line and the verdict are not its lesson's`);
    else if (!sizeStrand(item.strand)) same(asks.length, 3, `${where}: no size outside the size lessons`);
    if (asks.length === 4 && !opensAnyway) check(asks[2].id === 'size' && asks[2].kind === 'number' && asks[2].when && asks[2].when.ask === 'line', `${where}: the size opens after a sentence is tapped`);
    // what it claims
    const options = chooseOptions(stats, claim), texts = options.map(o => o.text);
    same(options.filter(o => o.ok).length, 1, `${where}: one right wording of the claim`);
    check(options.length >= 3 && new Set(texts).size === texts.length, `${where}: three or more different wordings`);
    check(options.filter(o => !o.ok).every(o => CLAIM_SLIPS.includes(o.slip)), `${where}: every wrong wording names a slip of the claim`);
    check(claim.shuffle === true, `${where}: the wordings are shuffled`);
    // the verdict
    same(chooseOptions(stats, verdict).filter(o => o.ok).map(o => o.id), [FIT_VERDICT[fit]], `${where}: the verdict that goes with how it is sorted`);
    check(chooseOptions(stats, verdict).filter(o => !o.ok).every(o => o.slip), `${where}: every wrong verdict names a slip`);
    const article = item.blocks.find(b => b.kind === 'article'), lines = article.lines;
    if (line.right !== TAP_NONE) {
      same(line.right.length, 1, `${where}: one sentence`);
      check(/\d/.test(lines.find(l => l.id === line.right[0]).text), `${where}: the sentence found has a number in it`);
      check(item.deciding.includes(line.right[0]), `${where}: the sentence found is among the deciding words`);
      check(lines.filter(l => l.id !== line.right[0] && /\d/.test(l.text)).every(l => l.note), `${where}: a sentence with a number in it, other than the one found, says what the number is`);
    } else check(lines.every(l => !/\d/.test(l.text) || l.note), `${where}: a sentence with a number in it, when nothing is found, says what the number is`);
    check(item.deciding.every(id => segmentsOf(article).some(s => s.id === id)), `${where}: every deciding sentence is in the text`);
    if (fit !== 'holds') check(item.deciding.includes('h') || article.form === 'post', `${where}: the headline is among the deciding words when the claim goes further than the text`);
    check(article.form === 'post' ? !article.headline : !!article.headline, `${where}: a headline for every form but a post`);
    check(item.strand && item.reason && item.need, `${where}: a topic, a reason and what you would need`);
  });
}

/* ---------- the numbers, worked out again from the words ---------- */
// the size a claim of lesson 3 gives: a share of the risk ("half as likely", "a third less likely", "40% less often"), or a number of people in 1,000
// ("keeps half of the people", "spares 1 in every 1,000", "1 in 5", "protects 60% of")
const SHARES = { half: 1 / 2, 'a third': 1 / 3, 'a quarter': 1 / 4, 'a fifth': 1 / 5 };
function claimedSize(text) {
  let m;
  if ((m = text.match(/(half|a third|a quarter|a fifth) of (?:the people|all|patients|users)/))) return { people: SHARES[m[1]] * 1000 };
  if ((m = text.match(/protects (\d+)% of/)) || (m = text.match(/^(\d+)% of \w+ are (?:protected|spared|kept)/))) return { people: Number(m[1]) * 10 };
  if ((m = text.match(/(\d+) in (?:every )?([\d,]+)/))) return { people: Number(m[1]) / Number(m[2].replace(/,/g, '')) * 1000 };
  if (/half as likely/.test(text)) return { share: 0.5 };
  if ((m = text.match(/(a third|a quarter|a fifth) less likely/))) return { share: SHARES[m[1]] };
  if ((m = text.match(/(\d+)% less (?:likely|often)/))) return { share: Number(m[1]) / 100 };
  return null;
}
const sizeOf = (item, rightText, lineTexts) => {
  const ask = item.asks.find(a => a.id === 'size');
  if (!ask) return;
  const where = `${item.id}`, answer = answerOf(item, ask), strand = item.strand;
  if (strand === 'size-count') {
    const frame = ask.frame || '';
    if (frame.startsWith('$')) {
      // a sum of money: "$6 million ... over 10 years, and ... 300,000 residents": the sum ÷ the people ÷ the years
      const [total, years, people] = amounts(rightText);
      check(near(total / people / years, answer[0]), `${where}: ${total} for ${people} people over ${years} years is ${total / people / years} a year each, not ${answer[0]}`);
    } else if (/for each/.test(frame)) {
      const [people, total] = amounts(rightText);
      check(near(total / people, answer[0]), `${where}: ${total} for ${people} is ${total / people} each, not ${answer[0]}`);
    } else if (answer.length === 1) {
      const [count, whole] = amounts(rightText);
      check(near(count / whole * 1000, answer[0]), `${where}: ${count} out of ${whole} is ${count / whole * 1000} in 1,000, not ${answer[0]}`);
      const usual = lineTexts.map(t => t.match(/(\d+(?:\.\d+)?) (?:[a-z ]*?)(?:in every|for every|of every) 1,000/)).find(Boolean);
      // the taught rule: more than usual holds when the size is clearly above the usual (half again or more), and not when it is a little above,
      // the same or below
      if (usual && item.facets.fit === 'outruns') check(answer[0] < 1.5 * Number(usual[1]), `${where}: a claim marked as not shown whose count is clearly above the usual`);
      const fewer = /^Fewer/.test(chooseOptions(stats, item.asks[0]).find(o => o.ok).text);
      if (usual && item.facets.fit === 'holds') check(fewer ? answer[0] <= 0.8 * Number(usual[1]) : answer[0] >= 1.5 * Number(usual[1]), `${where}: a sound claim of ${fewer ? 'fewer' : 'more'} than usual whose count is not clearly ${fewer ? 'below' : 'above'} the usual`);
      if (!usual) check(item.facets.fit === 'unclear', `${where}: a count with no usual to compare with can only be one that cannot be told`);
    } else {
      const pcts = [...rightText.matchAll(/(\d+)%/g)].map(m => Number(m[1]) * 10);
      same(answer, pcts, `${where}: percents turned into people in 1,000`);
    }
  } else if (strand === 'size-risk') {
    const pairs = [...rightText.matchAll(/(\d[\d,]*) of (\d[\d,]*)/g)].map(m => Number(m[1].replace(/,/g, '')) / Number(m[2].replace(/,/g, '')) * 1000);
    const inK = [...rightText.matchAll(/(\d+) in every 1,000/g)].map(m => Number(m[1]));
    const sortDown = list => [...list].sort((a, b) => b - a);
    if (pairs.length >= 2) same(sortDown(pairs), sortDown(answer), `${where}: counts in two groups, in 1,000`);
    else if (inK.length >= 2) same(inK, answer, `${where}: before and after as the text gives them`);
    else {
      const pct = lineTexts.map(t => t.match(/(\d+)%/)).find(Boolean);
      check(inK.length === 1 && pct && answer[0] === inK[0] && near(answer[1], inK[0] * (100 - Number(pct[1])) / 100), `${where}: ${inK[0]} less ${pct && pct[1]}% is not ${answer[1]}`);
    }
    check(answer[0] > answer[1], `${where}: a fall`);
    // the taught rule: each size the claim gives is checked against the before and after. A share of the risk against the drop as a share; a
    // number of people against how many fewer have it. It holds when it fits, and does not show it when it claims more.
    const claimed = claimedSize(chooseOptions(stats, item.asks[0]).find(o => o.ok).text), realShare = (answer[0] - answer[1]) / answer[0], realPeople = answer[0] - answer[1];
    check(claimed, `${where}: the claim gives no size to check`);
    if (claimed) {
      const real = claimed.share !== undefined ? realShare : realPeople, said = claimed.share !== undefined ? claimed.share : claimed.people;
      if (item.facets.fit === 'holds') check(Math.abs(said - real) < 0.02 * Math.max(1, real), `${where}: a sound claim of ${said} where the numbers give ${real}`);
      if (item.facets.fit === 'outruns') check(said > real * 1.5, `${where}: a claim of ${said} that the numbers (${real}) do not clearly fall short of`);
    }
  } else if (strand === 'size-test') {
    const w = lineTexts.join(' '), m = w.match(/(\d+) of every 100 [^.]*?(\d+) of every 100/), p = Number(w.match(/(\d+) in every 1,000/)[1]);
    const found = p * Number(m[1]) / 100, flagged = (1000 - p) * Number(m[2]) / 100;
    same(answer, [found, found + flagged], `${where}: the positives and the real ones, counted again`);
    const real = found / (found + flagged);
    check(item.facets.fit === 'holds' ? real >= 0.75 : real <= 0.55, `${where}: ${Math.round(real * 100)}% of the positives are real, which does not fit how it is sorted`);
  }
};
{
  const all = [...items.map(i => [i, i.id]), ...gens.flatMap(g => Array.from({ length: 60 }, (_, seed) => [itemFromGen(g, seed * 7 + 1), `${g.id} at seed ${seed * 7 + 1}`]))];
  all.forEach(([item, name]) => {
    if (!item.asks.some(a => a.id === 'size') || !sizeStrand(item.strand)) return;   // a chart's change and lesson 9's sizes: tests/stats-late-pure.mjs
    const article = item.blocks.find(b => b.kind === 'article'), line = item.asks.find(a => a.id === 'line').right[0];
    const texts = article.lines.map(l => l.text), right = article.lines.find(l => l.id === line).text;
    sizeOf({ ...item, id: name }, right, texts.filter(t => t !== right).concat(right));
  });
  // the four worked sizes of the plan
  same(answerOf(stats.items['w-flu'], stats.items['w-flu'].asks[2]), [3], '1,200 cases in a city of 400,000 is 3 in 1,000');
  same(answerOf(stats.items['w-stroke'], stats.items['w-stroke'].asks[2]), [4, 2], 'a 50% cut in 4 in 1,000 is 2 in 1,000');
  same(answerOf(stats.items['w-test'], stats.items['w-test'].asks[2]), [16, 65], '16 of the 65 who test positive have it');
}
{
  // the other numbers in the claims are what the text says they are
  same(Math.round(1860 / 1980 * 100), 94, 'the deliveries: 1,860 of 1,980 is 94%');
  same(180 / 30, 6, 'the reading scores: 30 of 180 is one in six');
  check(87 / 112 > 0.5 && 31 > 19 && 212 > 170 && 85 > 80 && 6000 / 5000 === 1.2 && 800 < 950 && 800 / 500 === 1.6 && 62 / 40 === 1.55 && 240 / 222 > 1.08 && 762 / 840 > 0.9, 'the stop sign, the crashes, the pets, the commute, the library, the tickets, Lakeview, the books and the dentist say what their numbers say');
  same([340 * 0.95, 400 * 0.82].map(Math.round), [323, 328], 'Marlow: a higher rate, and fewer students passing');
  same([900 * 0.95 + 100 * 0.5, 200 * 0.98 + 800 * 0.6].map(Math.round), [905, 676], 'the two hospitals: 905 and 676 of 1,000 sent home');
  same([2200000 / 10000, 1100000 / 5000], [220, 220], 'the recycling per household: 220 pounds in each town');
  same([138 / 220, 180 / 220].map(x => Math.round(x * 100)), [63, 82], 'Hillcrest and Dale: 63% and 82% overall');
  same([18 / 20, 170 / 200, 120 / 200, 10 / 20], [0.9, 0.85, 0.6, 0.5], 'course by course Hillcrest passes more often');
  same([300 / 150, 120 / 30], [2, 4], 'the bike thefts per 1,000: Westbrook 2, Pinewood 4');
  same([900000 / 6000, 600000 / 3000], [150, 200], 'the corn per acre');
  same(stats.items['w-coffee'].figure.data.rows.map(r => r.count), [25, 22], 'the worked coffee draws the same two counts as its text');
}

/* ---------- the generators, on many seeds ---------- */
{
  gens.forEach(g => {
    const seen = new Set();
    for (let seed = 0; seed < 200; seed++) {
      const item = itemFromGen(g, seed);
      seen.add(JSON.stringify(item.values));
      check(!/\{[A-Za-z]+\}/.test(JSON.stringify(item)), `${g.id} at seed ${seed}: a slot left unfilled`);
    }
    check(seen.size >= 20, `${g.id}: fresh numbers (${seen.size} different questions on 200 seeds)`);
  });
  same(gens.map(g => g.id).sort(), ['g-count-over', 'g-count-under', 'g-risk-fair', 'g-risk-over', 'g-test-high', 'g-test-low'], 'the six generators');
  // every choice a generator lists can come up (three numbers are a range to the engine, so a list of three numbers would never give its last two)
  gens.forEach(g => Object.entries(g.params).forEach(([name, def]) => {
    const isRange = def.length === 3 && def.every(x => typeof x === 'number') && def[2] > 0 && def[0] <= def[1];
    const seen = new Set(Array.from({ length: 400 }, (_, seed) => itemFromGen(g, seed).values[name]));
    if (isRange) check(seen.size === Math.floor((def[1] - def[0]) / def[2] + 1e-9) + 1, `${g.id}: the range ${name} does not give every step (${[...seen]})`);
    else check(def.every(v => seen.has(v)), `${g.id}: the choice ${name} never gives ${def.filter(v => !seen.has(v))}`);
  }));
  // the two forms of each lesson's fresh numbers read alike: the same headline and the same lines, the numbers decide
  [['g-count-over', 'g-count-under'], ['g-risk-fair', 'g-risk-over'], ['g-test-high', 'g-test-low']].forEach(([a, b]) => {
    const words = id => JSON.stringify(stats.gens[id].blocks[0].headline) + JSON.stringify(stats.gens[id].blocks[0].lines.map(l => l.text));
    check(words(a) === words(b), `${a} and ${b} do not read alike`);
  });
  // and no word of a headline predicts the verdict: over 600 seeds of each form, every word a headline uses appears under both verdicts
  [['g-count-over', 'g-count-under'], ['g-risk-fair', 'g-risk-over'], ['g-test-high', 'g-test-low']].forEach(pair => {
    const fitsOf = new Map();
    pair.forEach(id => { for (let seed = 0; seed < 600; seed++) {
      const made = itemFromGen(stats.gens[id], seed), fit = made.facets.fit;
      // the group a test's count is about is named in its headline on purpose (who is tested decides the count, T10), so its words are left out
      const group = new Set(String(made.values.whoText || '').toLowerCase().split(/[^a-z0-9%]+/));
      made.blocks[0].headline.text.toLowerCase().split(/[^a-z0-9%]+/).filter(w => w && !group.has(w)).forEach(w => fitsOf.set(w, (fitsOf.get(w) || new Set()).add(fit)));
    } });
    const tells = [...fitsOf].filter(([, fits]) => fits.size < 2).map(([w]) => w);
    check(!tells.length, `${pair.join(' and ')}: the headline words ${tells.join(', ')} come with one verdict only`);
  });
}

/* ---------- the groups and the checks ---------- */
{
  const byId = stats.items, fitOf = id => (byId[id] || stats.gens[id]).facets.fit;
  const setsOf = l => l.flow.filter(s => s.set).map(s => s.set);
  const refsOf = set => ids(set.items);
  same(setsOf(lessons.l1).map(s => refsOf(s).length), [3, 6], 'lesson 1: a group of three and a group of six');
  same(setsOf(lessons.l2).map(s => refsOf(s).length), [4, 6, 4], 'lesson 2: groups of four, six and four');
  same(setsOf(lessons.l3).map(s => refsOf(s).length), [4, 6, 3], 'lesson 3: groups of four, six and three');
  same(setsOf(lessons.l4).map(s => refsOf(s).length), [4, 6, 3], 'lesson 4: groups of four, six and three');
  same(setsOf(lessons.l5).map(s => flatRefs(s.items).length), [4, 6], 'lesson 5: a group of four (a pair and two) and a group of six');
  // lesson 9 is the whole item unprompted: no help, no worked question, and its group is the mix (docs/subjects/stats/plan.md, L9)
  Object.entries(lessons).filter(([id]) => id !== 'l0' && id !== 'l9').forEach(([id, l]) => {
    const sets = setsOf(l), checkIds = ids(l.check.items);
    same(sets.map(s => s.support || null)[0], { shown: true }, `${id}: help in the first group only`);
    check(sets.slice(1).every(s => !s.support), `${id}: no help after the first group`);
    check(sets.every(s => refsOf(s).every(r => (byId[r] || stats.gens[r]).strand === STRAND_OF[id] || true)), `${id}: groups name questions`);
    check(checkIds.every(c => byId[c].strand === STRAND_OF[id]), `${id}: the check holds questions of its own topic`);
    check(checkIds.every(c => !sets.some(s => refsOf(s).includes(c)) && !l.flow.some(s => s.worked === c)), `${id}: no question of the check is in the lesson`);
    const fits = checkIds.map(fitOf);
    check(fits.includes('holds') && fits.includes('unclear') && fits.includes('outruns'), `${id}: the check holds claims that hold, claims that outrun their text and claims that cannot be told`);
    if (id !== 'l1') sets.slice(1).forEach(s => check(s.mix && s.mix.share === 0.3 && s.mix.from.every(f => f < id), `${id}: later groups mix in earlier lessons`));
    const worked = byId[l.flow.find(s => s.worked).worked];
    same(worked.steps.map(s => s.ask), worked.asks.map(a => a.id), `${id}: the worked question works every ask, in order`);
  });
  same(Object.fromEntries(['l1', 'l2', 'l3', 'l4', 'l5'].map(id => [id, [lessons[id].check.items.length, lessons[id].check.pass[0].right.min]])), { l1: [5, 4], l2: [5, 4], l3: [5, 4], l4: [4, 3], l5: [6, 5] }, 'the checks: 4 of 5, 4 of 5, 4 of 5, 3 of 4, 5 of 6');
  same(ids(lessons.l0.check.items).map(fitOf).sort(), ['holds', 'holds', 'outruns', 'outruns', 'outruns', 'unclear'], 'the baseline: two sound, three that outrun their text, one that cannot be told');
  const inLesson = new Set(Object.values(lessons).flatMap(l => [...l.flow.filter(s => s.worked).map(s => s.worked), ...l.flow.filter(s => s.set).flatMap(s => refsOf(s.set)), ...ids(l.check.items)]));
  same(items.filter(i => !inLesson.has(i.id)).map(i => i.id).sort(), ['r-bags', 'r-bluglo', 'r-cocoa', 'r-debt', 'r-dunmore', 'r-fallguard', 'r-games', 'r-garden', 'r-garden-bp', 'r-gas', 'r-lakeport', 'r-lensguard', 'r-loans', 'r-mainstreet', 'r-milk', 'r-mintel', 'r-northfield', 'r-pool', 'r-rent', 'r-rivermont', 'r-slimright', 'r-solar', 'r-stars', 'r-stopsign', 'r-swab', 'r-westmont', 'r-weston'], 'the questions held in reserve are named by no lesson');
  // no verdict read off a pattern, lesson by lesson (the written questions of its groups and its check):
  ['l1', 'l2', 'l3', 'l4', 'l5', 'l6', 'l7', 'l8', 'l9'].forEach(id => {
    const l = lessons[id], qs = [...setsOf(l).flatMap(refsOf), ...ids(l.check.items)].filter(r => byId[r] && byId[r].asks[0].id === 'claim').map(r => byId[r]);
    const lineOf = q => q.asks.find(a => a.id === 'line').right;
    // "Not given" is not always "cannot tell", and a sentence tapped is sometimes "cannot tell"
    check(qs.some(q => lineOf(q) === TAP_NONE && q.facets.fit !== 'unclear'), `${id}: every "Not given" is a claim that cannot be told`);
    check(qs.some(q => lineOf(q) !== TAP_NONE && q.facets.fit === 'unclear'), `${id}: every claim that cannot be told has "Not given"`);
    // the sentence to tap is not always in the same place
    const places = new Set(qs.filter(q => lineOf(q) !== TAP_NONE).map(q => q.blocks.find(b => b.kind === 'article').lines.findIndex(s => s.id === lineOf(q)[0])));
    check(places.size >= 2, `${id}: the sentence to tap is always the same one in its story`);
    // an ad is not always a claim that fails
    const ads = qs.filter(q => q.blocks.some(b => b.form === 'ad'));
    if (ads.length) check(ads.some(q => q.facets.fit === 'holds'), `${id}: no ad holds up, so "Ad" gives the verdict away`);
  });
  // the claim's wrong wordings give nothing away: no word a wrong wording uses that the headline and the right wording never do ("whole",
  // "across", "every", "never", "because", "made" ...), and picking the wording that shares the most words with the headline is not a way through
  {
    const GIVEAWAY = /\b(whole|across|state|never|because|already|all|every|any|anywhere|everywhere|made)\b/i;
    const words = t => new Set(t.toLowerCase().split(/[^a-z0-9%’']+/).filter(w => w.length > 2));
    const asked = new Set(['l0', 'l1', 'l2', 'l3', 'l4', 'l5'].flatMap(id => [...setsOf(lessons[id]).flatMap(refsOf), ...ids(lessons[id].check.items), ...lessons[id].flow.filter(f => f.worked).map(f => f.worked)]));
    let byCloseness = 0, n = 0;
    items.filter(q => asked.has(q.id) || q.id.startsWith('r-')).forEach(q => {
      const options = chooseOptions(stats, q.asks[0]), right = options.find(o => o.ok), art = q.blocks.find(b => b.kind === 'article');
      const head = (art.headline || art.lines[0]).text;
      options.filter(o => !o.ok).forEach(o => {
        const m = o.text.match(GIVEAWAY);
        check(!m || new RegExp(`\\b${m[1]}\\b`, 'i').test(head + ' ' + right.text), `${q.id}: the wrong wording "${o.text}" gives itself away with "${m && m[1]}"`);
      });
      const hw = words(head), score = o => [...words(o.text)].filter(w => hw.has(w)).length / Math.max(1, words(o.text).size);
      const best = Math.max(...options.map(score)), top = options.filter(o => score(o) === best);
      n++; if (top.length === 1 && top[0].ok) byCloseness++;
    });
    check(byCloseness / n < 0.6, `picking the wording closest to the headline gets ${byCloseness} of ${n} claims right`);
    console.log(`(closest-to-headline wording is right on ${byCloseness} of ${n} claims)`);
  }
  // a cause slip names a cause the text itself offers (T3, T4: the slip is hearing a cause in the text's own words), never one it never mentions:
  // every word of five letters or more in what a heard-cause wording names as the cause (before "makes", "cut" ...) is in the headline or the lines
  {
    const stem = w => { const x = w.toLowerCase().replace(/[’']s$/, ''); return x.length > 5 ? x.replace(/(ing|ed|es|s)$/, '') : x.replace(/s$/, ''); };
    const SKIP = new Set(['having', 'being', 'fewer']);
    const firstSix = new Set(['l0', 'l1', 'l2', 'l3', 'l4', 'l5'].flatMap(id => [...setsOf(lessons[id]).flatMap(refsOf), ...ids(lessons[id].check.items), ...lessons[id].flow.filter(f => f.worked).map(f => f.worked)]));
    ['r-solar', 'r-stopsign', 'r-debt', 'r-rent', 'r-garden', 'r-stars'].forEach(id => firstSix.add(id));
    items.filter(q => firstSix.has(q.id)).forEach(q => {
      const art = q.blocks.find(b => b.kind === 'article'), text = new Set([art.headline, ...art.lines].filter(Boolean).flatMap(l => l.text.split(/[^A-Za-z’']+/)).map(stem));
      chooseOptions(stats, q.asks[0]).filter(o => o.slip === 'heard-cause').forEach(o => {
        const cause = o.text.split(/\b(?:makes?|cuts?|lifts?)\b/)[0];
        const strange = cause === o.text ? [] : cause.split(/[^A-Za-z’']+/).filter(w => w.length >= 5 && !SKIP.has(w.toLowerCase()) && !text.has(stem(w)));
        check(!strange.length, `${q.id}: the cause slip "${o.text}" names what the text never mentions (${strange.join(', ')})`);
      });
    });
  }
  // a gap the lesson calls the pill's doing is beyond luck: more than two standard errors between groups of the stated size (T2, T8; lesson 6)
  {
    const z = (base, after, n) => { const p1 = base / 1000, p2 = after / 1000, se = Math.sqrt(p1 * (1 - p1) / n + p2 * (1 - p2) / n); return (p1 - p2) / se; };
    ['g-risk-fair', 'g-risk-over'].forEach(id => { for (let seed = 0; seed < 1000; seed++) {
      const v = itemFromGen(stats.gens[id], seed).values;
      check(z(v.base, v.after, v.grp) > 2, `${id} at seed ${seed}: ${v.b} against ${v.a} of ${v.grp} could be luck`);
    } });
    // EVERY fixed trial (a coin toss or a lottery in its text), in every lesson and in reserve, is read here; a new one fails until it is added.
    //   share: [n per group, before and after in 1,000]: the gap is more than two standard errors
    //   mean:  [n per group, the two averages]: at least 100 in each group and a gap of 5% or more (the lessons' "a few hundred and a clear gap")
    //   luck:  [n per group]: at most 10 in each group, where the feedback says luck could do it
    //   untold: no group size or no result in the text: the feedback may not say luck is unlikely
    const TRIALS = {
      'p-nasal': ['share', 500, 300, 200], 'q-hip': ['share', 10000, 6, 3], 'p-falls': ['share', 5000, 60, 45], 'q-statin': ['share', 5000, 40, 30],
      'k-warmup': ['share', 1000, 80, 40], 'k-training': ['share', 5000, 40, 30], 'q-brightmind': ['share', 200, 400, 300], 'k-insoles': ['share', 120, 450, 250],
      'r-mintel': ['share', 300, 300, 200], 'q-pravel': ['share', 5000, 60, 45], 'k-lockwell': ['share', 6000, 30, 20], 'r-fallguard': ['share', 4500, 80, 60],
      'b-lozenge': ['mean', 200, 7, 6], 'p-calmira': ['mean', 150, 35, 22], 'q-zentra': ['mean', 150, 20, 10], 'k-hens': ['mean', 180, 280, 294],
      'k-focus': ['luck', 6], 'k-growmax': ['luck', 3],
      'w-stroke': ['untold'], 'p-heart': ['untold'], 'p-serum': ['untold'], 'q-fish': ['untold'], 'q-kelp': ['untold'], 'q-eyes': ['untold'], 'q-serenol': ['untold'], 'r-lensguard': ['untold']
    };
    const textOf = q => q.blocks.flatMap(b => b.kind === 'article' ? [b.headline, ...b.lines].filter(Boolean).map(l => l.text) : []).join(' ');
    const shown = (q, n) => [n, 2 * n].some(v => textOf(q).replace(/(\d),(\d{3})/g, '$1$2').includes(String(v)));
    items.filter(q => /coin toss|coin-toss|lottery/i.test(textOf(q))).forEach(q => check(q.id in TRIALS, `${q.id}: a trial the luck check does not read`));
    Object.entries(TRIALS).forEach(([id, [kind, n, b, a]]) => {
      const q = byId[id], reason = [].concat(q.reason).join(' ');
      if (kind !== 'untold') check(shown(q, n), `${id}: the text does not give ${n} in each group (or ${2 * n} in all)`);
      if (kind === 'share') check(z(b, a, n) > 2, `${id}: ${b} against ${a} in 1,000 with ${n} in each group could be luck`);
      if (kind === 'mean') check(n >= 100 && Math.abs(a - b) / Math.min(a, b) >= 0.05, `${id}: ${b} against ${a} with ${n} in each group is not a clear gap in a big enough trial`);
      if (kind === 'luck') check(n <= 10 && q.facets.fit !== 'holds' && /luck/.test(reason), `${id}: a trial of ${n} in each group is not judged as luck`);
      if (kind === 'untold') check(!/unlikely to be luck|luck is unlikely|make luck unlikely/.test(reason), `${id}: the feedback calls luck unlikely with no size to judge it by`);
    });
  }
  // the same strong words sit on claims that hold and on claims that do not (lessons 2 to 4)
  const headOf = q => (q.blocks.find(b => b.kind === 'article').headline || { text: '' }).text;
  [['size-count', /soar|boom|surge|jump/i], ['size-risk', /halves|slashes/i], ['size-risk', /\bkeeps?\b|\bspares?\b|protects/i], ['size-test', /accurate/i], ['size-test', /usually/i]].forEach(([strand, word]) => {
    const fits = new Set(items.filter(q => q.strand === strand && word.test(headOf(q))).map(q => q.facets.fit));
    check(fits.has('holds') && fits.has('outruns'), `${strand}: ${word} is only on claims that ${[...fits].join(' and ')}`);
  });
  // the pass rules
  const outcome = (id, ok) => ({ facets: byId[id].facets, r: ok ? {} : { verdict: byId[id].facets.fit === 'holds' ? 'doubted' : 'believed' }, ok });
  ['l1', 'l2', 'l3', 'l4', 'l5', 'l6', 'l7', 'l9'].forEach(id => {
    const l = lessons[id], cids = ids(l.check.items), n = cids.length, min = l.check.pass[0].right.min;
    const run = oks => cids.map((c, i) => outcome(c, oks[i]));
    check(checkResult(stats, l.check.pass, run(cids.map(() => true))).passed, `${id}: all right passes`);
    check(checkResult(stats, l.check.pass, run(cids.map((_, i) => i < min))).passed || cids.slice(min).every(c => fitOf(c) === 'holds') , `${id}: the least right passes unless sound claims were turned down`);
    check(!checkResult(stats, l.check.pass, run(cids.map((_, i) => i < min - 1))).passed, `${id}: one fewer than the least does not pass`);
    const turnedDown = cids.map(c => ({ facets: byId[c].facets, r: byId[c].facets.fit === 'holds' ? { verdict: 'doubted' } : {}, ok: byId[c].facets.fit !== 'holds' }));
    check(!checkResult(stats, l.check.pass, turnedDown).passed, `${id}: turning down every sound claim does not pass, whatever else is right`);
  });
  same(checkResult(stats, lessons.l1.check.pass, ids(lessons.l1.check.items).map(c => outcome(c, true))).lines.map(l => l.text), ['At least 4 right', 'At most 1 turned down a claim that holds up'], 'the rules of lesson 1 in words');
}

if (failures.length) {
  console.error(`✗ ${failures.length} of ${checks} Statistical Claims checks failed:`);
  failures.slice(0, 60).forEach(f => console.error('  - ' + f));
  process.exit(1);
}
console.log(`✓ ${checks} Statistical Claims checks passed`);
