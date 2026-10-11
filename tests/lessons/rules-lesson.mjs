// Section 26.7: V72 (a check is its part's), V73 (most of the lesson is doing), V74 (every ask can be scored and explained),
// V75 (generators), V76 (the subject's mix), V77 (banks), V79 (fading). Each reads the subject through model.mjs and the engine's
// own pure functions, so the validator and the app can never hold two ideas of what counts as right.
import { subjectRule, checkEach } from './rule.mjs';
import { wordCount, unique } from './text.mjs';
import { learnerStrings } from './rules-vocab.mjs';

// V73. The time a learner spends reading and the time they spend doing, in seconds. Named once, here.
export const READING_WORDS_PER_MINUTE = 200;
export const DOING_SECONDS = { choose: 15, tap: 15, number: 60, text: 30, order: 25, sing: 20, exchange: 45, form: 60 };
const DRAWN_ITEM_SECONDS = 20;
const GENERATOR_SEEDS = 200;   // V75: how many seeds a generator is run on
const SAMPLE_SEEDS = 5;        // V74: how many instances of a generator are read as questions

// The definitions a list of references stands for, one per question the learner meets: [{ id, def, ref }]
function defsOf(s, refs) {
  return refs.flatMap(r => Array.from({ length: r.n }, () => ({ id: r.id, def: s.def(r.id), ref: r.ref })));
}
const strandsOfRefs = (s, refs) => unique(refs.map(r => s.def(r.id).strand));

/* ---------- V72: a check is its part's ---------- */
function passProblems(s, lv) {
  const check = lv.lesson.check, problems = [];
  const drawn = s.engine.checkIsDrawn(check);
  const defs = drawn ? [] : defsOf(s, lv.checkRefs).map(x => x.def);
  const askIds = new Set(drawn ? Object.values(s.items).flatMap(i => i.asks.map(a => a.id)) : defs.flatMap(d => d.asks.map(a => a.id)));
  const slipIds = (s.meta.lists.slip || []).map(x => x.id);
  check.pass.forEach((rule, i) => {
    const where = `pass rule ${i + 1}`;
    if (!rule.right && !rule.wrong && !rule.slip) problems.push(`${where} says nothing: it needs right, wrong or slip`);
    if (rule.max !== undefined && !rule.slip) problems.push(`${where} has max and no slip`);
    if (rule.ask && !askIds.has(rule.ask)) problems.push(`${where} names the ask "${rule.ask}", which no question of the check has`);
    Object.entries(rule.where || {}).forEach(([f, v]) => {
      const facet = s.meta.facets[f];
      if (!facet || !facet.values.some(x => x.id === v)) problems.push(`${where} counts ${f} "${v}", which the subject does not have`);
    });
    if (rule.slip && !slipIds.includes(rule.slip)) problems.push(`${where} counts the slip "${rule.slip}", which is not in the subject's list of slips`);
    if (!drawn) {
      const counted = defs.filter(d => s.engine.whereMatches(rule.where, d.facets) && (!rule.ask || d.asks.some(a => a.id === rule.ask)));
      if (rule.right && rule.right.min > counted.length) problems.push(`${where} needs ${rule.right.min} right and counts only ${counted.length} question${counted.length === 1 ? '' : 's'}`);
    } else if (rule.right && rule.right.min > check.items.draw.n) problems.push(`${where} needs ${rule.right.min} right and the check draws only ${check.items.draw.n}`);
  });
  return problems;
}
export const V72 = subjectRule('V72', (s, check) => {
  for (const lv of s.lessons) {
    const problems = [];
    if (!s.engine.checkIsDrawn(lv.lesson.check)) {
      const inFlow = new Set([...lv.setRefs.flat().map(r => r.id), ...lv.worked]);
      lv.checkRefs.filter(r => typeof r.ref === 'string' && inFlow.has(r.id)).forEach(r => problems.push(`the check question "${r.id}" is also in the lesson's own groups or worked example`));
    }
    problems.push(...passProblems(s, lv));
    checkEach(check, lv.label, problems);
  }
});

/* ---------- V73: most of the lesson is doing ---------- */
function readingWords(s, lv) {
  const { lesson } = lv;
  const parts = [lesson.why, ...lesson.flow.filter(x => x.show).map(x => ({ title: x.title, show: x.show })),
    ...lv.worked.map(id => { const i = s.items[id]; return { blocks: i.blocks, steps: i.steps, reason: i.reason, need: i.need }; })];
  return parts.flatMap(p => learnerStrings(p, '')).reduce((n, t) => n + wordCount(t.text), 0);
}
function doingSeconds(s, lv) {
  const asksTime = (def, support) => s.engine.askedAsks(def, support).reduce((n, a) => n + (DOING_SECONDS[a.kind] || 0), 0);
  const group = (refs, support) => defsOf(s, refs).reduce((n, x) => n + asksTime(x.def, support), 0);
  const sets = lv.sets.reduce((n, set, i) => n + group(lv.setRefs[i], set.support), 0);
  const check = s.engine.checkIsDrawn(lv.lesson.check) ? lv.lesson.check.items.draw.n * DRAWN_ITEM_SECONDS : group(lv.checkRefs, null);
  return sets + check;
}
export const V73 = subjectRule('V73', (s, check) => {
  for (const lv of s.lessons) {
    const reading = readingWords(s, lv) / READING_WORDS_PER_MINUTE * 60, doing = doingSeconds(s, lv);
    const share = reading + doing ? reading / (reading + doing) : 1;
    check(share <= s.meta.readingShare, `${lv.label}: reading is ${Math.round(share * 100)}% of the lesson, over the subject's ${Math.round(s.meta.readingShare * 100)}% (${Math.round(reading)} seconds of reading, ${Math.round(doing)} of doing)`);
  }
});

/* ---------- V74: every ask can be scored and explained ---------- */
// a typed number: its answer and every trap's value are numbers the question makes, each trap names a slip of the subject, and an estimate
// is typed before the exact answer it is compared with
function numberExplainProblems(s, item, ask, where, ids) {
  const e = s.engine, problems = [];
  try { e.numberAnswers(item, ask); } catch (error) { problems.push(`${where}: ${error.message}`); }
  (ask.traps || []).forEach(t => {
    try { e.numberAnswers(item, { answer: t.value }); } catch (error) { problems.push(`${where}: the trap "${t.slip}": ${error.message}`); }
    if (!ids.includes(t.slip)) problems.push(`${where}: the slip "${t.slip}" is not in the subject's list of slips`);
  });
  const before = item.asks.slice(0, item.asks.indexOf(ask));
  if (ask.estimate && before.some(a => a.kind === 'number' && !a.estimate)) problems.push(`${where}: the estimate comes after an exact answer; it is typed first`);
  return problems;
}
function explainProblems(s, item) {
  const problems = [], ids = s.listIds.slip || [];
  item.asks.forEach(ask => {
    if (ask.kind === 'number') { problems.push(...numberExplainProblems(s, item, ask, `ask ${ask.id}`, ids)); return; }
    const options = s.engine.chooseOptions(s.subject, ask), where = `ask ${ask.id}`;
    if (!options.some(o => o.ok)) problems.push(`${where} has no right option`);
    if (ask.many === undefined && options.filter(o => o.ok).length > 1) problems.push(`${where} has more than one right option and does not take several`);
    options.filter(o => !o.ok && !o.then && !o.slip).forEach(o => problems.push(`${where}: the wrong option "${o.text}" has neither a line of its own nor a slip`));
    options.filter(o => o.slip && !ids.includes(o.slip)).forEach(o => problems.push(`${where}: the slip "${o.slip}" is not in the subject's list of slips`));
  });
  const segments = item.blocks.flatMap(b => s.engine.segmentsOf(b)).map(x => x.id);
  (item.deciding || []).filter(id => !segments.includes(id)).forEach(id => problems.push(`deciding "${id}" is not a segment of the blocks`));
  return problems;
}
export const V74 = subjectRule('V74', (s, check) => {
  Object.values(s.items).forEach(i => checkEach(check, `item ${i.id}`, explainProblems(s, i)));
  Object.values(s.gens).forEach(g => {
    const problems = unique(Array.from({ length: SAMPLE_SEEDS }, (_, k) => k + 1).flatMap(seed => {
      try { return explainProblems(s, s.engine.itemFromGen(g, seed)); } catch (e) { return [`seed ${seed}: ${e.message}`]; }
    }));
    checkEach(check, `generator ${g.id}`, problems);
  });
});

/* ---------- V75: generators ---------- */
const inParam = (def, v, e) => e.isRangeParam(def)
  ? typeof v === 'number' && v >= def[0] - 1e-9 && v <= def[1] + 1e-9 && Math.abs((v - def[0]) / def[2] - Math.round((v - def[0]) / def[2])) < 1e-6
  : def.includes(v);
function generatorProblems(s, gen) {
  const e = s.engine, problems = new Set();
  for (let seed = 1; seed <= GENERATOR_SEEDS; seed++) {
    try {
      const values = e.genValues(gen, seed);
      Object.entries(gen.params).forEach(([name, def]) => { if (!inParam(def, values[name], e)) problems.add(`${name} is ${values[name]}, outside its parameters`); });
      Object.entries(values).forEach(([name, v]) => { if (!(typeof v === 'string' || (typeof v === 'number' && Number.isFinite(v)))) problems.add(`${name} is ${v}, which is not a finite number or a word`); });
      const a = e.itemFromGen(gen, seed), b = e.itemFromGen(gen, seed);
      if (JSON.stringify(a) !== JSON.stringify(b)) problems.add('the same seed does not give the same question');
      a.asks.filter(ask => ask.kind === 'number').forEach(ask => {
        const wanted = e.numberAnswers(a, ask), tol = e.tolOf(ask);
        wanted.forEach(v => { if (!Number.isFinite(v)) problems.add(`ask ${ask.id}: the answer is ${v}`); });
        if (e.numbersMatch(wanted, wanted, tol) !== true) problems.add(`ask ${ask.id}: the answer is not within its own tolerance`);
        (ask.traps || []).forEach(t => {
          const slipValues = e.numberAnswers(a, { answer: t.value });
          if (e.numbersMatch(slipValues, wanted, tol)) problems.add(`the slip "${t.slip}" gives the answer ${wanted.join(', ')}, or lands within its tolerance`);
        });
      });
      a.asks.filter(ask => ask.kind === 'choose').forEach(ask => {
        const options = e.chooseOptions(s.subject, ask), listIds = ask.from ? s.listIds[ask.from] : null;
        if (listIds) e.asList(ask.right).filter(id => !listIds.includes(id)).forEach(id => problems.add(`the right answer "${id}" is not in the list ${ask.from}`));
        options.filter(o => o.slip && o.ok).forEach(o => problems.add(`the slip "${o.slip}" is also the right option`));
        if (ask.answer !== undefined) {
          const answer = values[ask.answer];
          options.filter(o => o.value !== undefined).forEach(o => {
            if (o.slip && values[o.value] === answer) problems.add(`the slip "${o.slip}" gives the answer ${answer}`);
            if (o.ok && values[o.value] !== answer) problems.add(`the right option shows ${values[o.value]}, not the answer ${answer}`);
          });
        }
      });
    } catch (error) { problems.add(error.message); }
  }
  return [...problems];
}
export const V75 = subjectRule('V75', (s, check) => {
  Object.values(s.gens).forEach(g => checkEach(check, `generator ${g.id}`, generatorProblems(s, g)));
});

/* ---------- V76: every group and check holds the subject's mix ---------- */
const isShare = x => x > 0 && x < 1;
const atLeast = (limit, n, total) => isShare(limit) ? n / total >= limit : n >= limit;
const atMost = (limit, n, total) => isShare(limit) ? n / total <= limit : n <= limit;
export function mixProblems(meta, facetsList) {
  const total = facetsList.length, problems = [];
  meta.mix.forEach(m => {
    if ('equal' in m) {
      const have = facetsList.filter(f => f[m.facet] !== undefined);
      if (!have.length) return;
      const counts = meta.facets[m.facet].values.map(v => have.filter(f => f[m.facet] === v.id).length);
      if (new Set(counts).size > 1) problems.push(`${m.facet} is not even across its values (${counts.join(', ')})`);
      return;
    }
    const n = facetsList.filter(f => f[m.facet] === m.value).length;
    if (m.min !== undefined && !atLeast(m.min, n, total)) problems.push(`${n} of ${total} are ${m.facet} "${m.value}", under the least the subject allows (${m.min})`);
    if (m.max !== undefined && !atMost(m.max, n, total)) problems.push(`${n} of ${total} are ${m.facet} "${m.value}", over the most the subject allows (${m.max})`);
  });
  return problems;
}
export const V76 = subjectRule('V76', (s, check) => {
  for (const lv of s.lessons) {
    lv.setRefs.forEach((refs, i) => checkEach(check, `${lv.label} group ${i + 1}`, mixProblems(s.meta, defsOf(s, refs).map(x => x.def.facets))));
    if (!s.engine.checkIsDrawn(lv.lesson.check)) checkEach(check, `${lv.label} check`, mixProblems(s.meta, defsOf(s, lv.checkRefs).map(x => x.def.facets)));
  }
});

/* ---------- V77: banks ---------- */
// A strand that a lesson's check covers comes back as a new question: three times, and once more for each of its questions in a
// retest. A strand with a generator always has one. A strand of a single question comes back as itself.
export const V77 = subjectRule('V77', (s, check) => {
  const used = new Set(s.lessons.flatMap(l => l.usedIds));
  const scheduled = unique(s.lessons.flatMap(lv => s.engine.checkIsDrawn(lv.lesson.check) ? lv.lesson.check.items.draw.strands : strandsOfRefs(s, lv.checkRefs)));
  const problems = [];
  scheduled.forEach(strand => {
    const fixed = Object.values(s.items).filter(i => i.strand === strand);
    if (Object.values(s.gens).some(g => g.strand === strand) || fixed.length <= 1) return;
    const retest = s.lessons.filter(lv => lv.lesson.check.retest && !s.engine.checkIsDrawn(lv.lesson.check))
      .reduce((n, lv) => n + defsOf(s, lv.checkRefs).filter(x => x.def.strand === strand).length, 0);
    const bank = fixed.filter(i => !used.has(i.id)).length, need = s.engine.RETURN_GAPS.length + retest;
    if (bank < need) problems.push(`strand "${strand}" holds ${bank} unseen question${bank === 1 ? '' : 's'} for its ${s.engine.RETURN_GAPS.length} returns${retest ? ` and ${retest} in a retest` : ''}, and needs ${need}`);
  });
  checkEach(check, s.label, problems);
});

/* ---------- V79: fading ---------- */
export const V79 = subjectRule('V79', (s, check) => {
  for (const lv of s.lessons) {
    const problems = [];
    const weights = lv.sets.map(set => s.engine.supportWeight(set.support));
    const strands = lv.setRefs.map(refs => new Set(strandsOfRefs(s, refs)));
    weights.forEach((w, i) => {
      if (!w) return;
      const later = lv.sets.some((_, j) => j > i && weights[j] < w && [...strands[i]].some(x => strands[j].has(x)));
      if (!later) problems.push(`group ${i + 1} has help and no later group of the same topic has less`);
    });
    if (lv.lesson.check.support) problems.push('the check has help; a check never has any');
    checkEach(check, lv.label, problems);
  }
});

export const RULES_LESSON = [V72, V73, V74, V75, V76, V77, V79];
