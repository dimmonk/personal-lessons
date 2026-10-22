// Section 9: V72 (a check is its part's), V73 (most of the lesson is doing), V74 (every ask can be scored and explained),
// V75 (generators), V76 (the subject's mix), V77 (banks), V79 (fading). Each reads the subject through model.mjs and the engine's
// own pure functions, so the validator and the app can never hold two ideas of what counts as right.
import { subjectRule, checkEach } from './rule.mjs';
import { wordCount, unique, duplicatesOf } from './text.mjs';
import { learnerStrings } from './rules-vocab.mjs';

// V73. The time a learner spends reading and the time they spend doing, in seconds. Named once, here.
export const READING_WORDS_PER_MINUTE = 200;
export const DOING_SECONDS = { choose: 15, tap: 15, place: 15, number: 60, text: 30, order: 25, sing: 20, exchange: 45, form: 60 };
const DRAWN_ITEM_SECONDS = 20;
const GENERATOR_SEEDS = 200;   // V75: how many seeds a generator is run on
const SAMPLE_SEEDS = 5;        // V74: how many instances of a generator are read as questions

// The definitions a list of references stands for, one per question the learner meets: [{ id, def, ref }]. A reference to a place group stands for
// questions of the group in the form it names (or each of its forms in turn), since the group itself has no asks of its own to read.
function defsOf(s, refs) {
  return refs.flatMap(r => Array.from({ length: r.n }, (_, k) => ({ id: r.id, def: s.engine.isPlaceGen(s.def(r.id)) ? placeQuestionFor(s, r.ref, k) : s.def(r.id), ref: r.ref })));
}
function placeQuestionFor(s, ref, k) {
  const made = s.refDefs({ id: ref.gen, ref });
  return made[k % made.length];
}
const strandsOfRefs = (s, refs) => unique(refs.map(r => s.def(r.id).strand));

/* ---------- V72: a check is its part's ---------- */
function passProblems(s, lv) {
  const check = lv.lesson.check, problems = [];
  const drawn = s.engine.checkIsDrawn(check);
  const draw = drawn ? check.items.draw : null, group = draw && 'gen' in draw;
  const defs = drawn ? [] : defsOf(s, lv.checkRefs).map(x => x.def);
  const askIds = new Set(group ? s.placeMadeOf(draw.gen).flatMap(x => x.item.asks.map(a => a.id)) : drawn ? Object.values(s.items).flatMap(i => i.asks.map(a => a.id)) : defs.flatMap(d => d.asks.map(a => a.id)));
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
    } else if (group) {
      // the questions a draw from a place group asks: as many of each form as the split says, each with the group's facets and its form
      const gen = s.gens[draw.gen], asked = Object.entries(draw.split).filter(([form]) => s.placeMadeOf(draw.gen).some(x => x.form === form
        && s.engine.whereMatches(rule.where, x.item.facets) && (!rule.ask || x.item.asks.some(a => a.id === rule.ask)))).reduce((n, [, k]) => n + k, 0);
      if (rule.right && rule.right.min > asked) problems.push(`${where} needs ${rule.right.min} right and the check draws only ${asked} that it counts`);
    } else if (rule.right && rule.right.min > check.items.draw.n) problems.push(`${where} needs ${rule.right.min} right and the check draws only ${check.items.draw.n}`);
  });
  return problems;
}
// A check that asks a part's questions again (`recall`: the questions of a published list are recalled, not found anew; Civics) holds only questions the
// lesson's own groups asked, each once. Any other check holds none of them. A spoken check is read aloud, so each question it can ask has a spoken block.
function recallCheckProblems(s, lv) {
  const check = lv.lesson.check, drawn = s.engine.checkIsDrawn(check), inFlow = new Set(lv.setRefs.flat().map(r => r.id)), problems = [];
  if (!drawn && check.recall) {
    lv.checkRefs.filter(r => !inFlow.has(r.id)).forEach(r => problems.push(`the check asks "${r.id}" again, and none of the lesson's groups asked it`));
    duplicatesOf(lv.checkRefs.map(r => r.id)).forEach(id => problems.push(`the check asks "${id}" twice`));
  } else if (!drawn) {
    const worked = new Set(lv.worked);
    lv.checkRefs.filter(r => typeof r.ref === 'string' && (inFlow.has(r.id) || worked.has(r.id))).forEach(r => problems.push(`the check question "${r.id}" is also in the lesson's own groups or worked example`));
  }
  if (check.spoken) {
    const defs = drawn ? s.itemLike.filter(d => s.engine.drawStrands(s.subject, check.items.draw).includes(d.strand)) : defsOf(s, lv.checkRefs).map(x => x.def);
    defs.filter(d => !d.blocks.some(b => b.kind === 'spoken')).forEach(d => problems.push(`the check is read aloud, and the question "${d.id}" has no spoken block`));
  }
  return problems;
}
export const V72 = subjectRule('V72', (s, check) => {
  for (const lv of s.lessons) {
    const problems = [...recallCheckProblems(s, lv), ...passProblems(s, lv)];
    checkEach(check, lv.label, problems);
  }
});

/* ---------- V73: most of the lesson is doing ---------- */
// the words a panel prints on a teaching screen come from the subject's rules, and are read like any other
const panelWords = (s, blocks) => blocks.flatMap(b => b.kind === 'panel' ? b.rules.map(id => s.meta.rules[id]) : []);
// the names that a flags block prints beside its flags are read on a teaching screen too
const flagWords = (s, blocks) => blocks.filter(b => b.kind === 'flags' && b.names).flatMap(b => b.places.map(id => s.gens[b.gen].places.list.find(p => p.id === id).name));
const wordsOf = parts => parts.flatMap(p => learnerStrings(p, '')).reduce((n, t) => n + wordCount(t.text), 0);
function readingWords(s, lv) {
  const { lesson } = lv;
  return wordsOf([lesson.why, ...lesson.flow.filter(x => x.show).map(x => ({ title: x.title, show: x.show, printed: [...panelWords(s, x.show), ...flagWords(s, x.show)] }))]);
}
// a worked case is shown practice, the real action done step by step for the learner (build-subject, 2 and 4), so its time is doing, at reading speed
const workedSeconds = (s, lv) => wordsOf(lv.worked.map(id => { const i = s.items[id]; return { blocks: i.blocks, steps: i.steps, reason: i.reason, need: i.need }; })) / READING_WORDS_PER_MINUTE * 60;
function doingSeconds(s, lv) {
  const asksTime = (def, support) => s.engine.askedAsks(def, support).reduce((n, a) => n + (DOING_SECONDS[a.kind] || 0), 0);
  // a timed group gives each question its seconds (the learner has no more, and a call or chat that is not timed counts as its own time)
  const group = (refs, support, seconds) => defsOf(s, refs).reduce((n, x) => n + (seconds && !x.def.asks.some(a => a.kind === 'exchange') ? seconds : asksTime(x.def, support)), 0);
  const sets = lv.sets.reduce((n, set, i) => n + group(lv.setRefs[i], set.support, set.seconds), 0);
  const check = s.engine.checkIsDrawn(lv.lesson.check) ? s.engine.drawSize(lv.lesson.check.items.draw) * DRAWN_ITEM_SECONDS : group(lv.checkRefs, null, lv.lesson.check.seconds);
  const own = lv.lesson.flow.filter(step => step.own).length * DOING_SECONDS.form;   // the step on the learner's own data is doing, not reading
  return sets + check + own + workedSeconds(s, lv);
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
// a tap: the lines it wants are lines of the text that can be tapped, there are as many as it asks for, and they are among the words that decide
// the question (so the answer is marked in the text once it is given); a line that carries a slip names one of the subject's slips
function tapExplainProblems(s, item, ask, where, slipIds) {
  const e = s.engine, problems = [], lines = e.tapSegments(item, ask), ids = lines.map(l => l.id), right = e.tapRightIds(ask);
  if (!lines.length) problems.push(`${where}: there is nothing to tap in ${ask.in ? `the block "${ask.in}"` : 'the question'}`);
  if (ask.right === 'none') { if (!ask.none) problems.push(`${where}: nothing to find, and no words for the button`); }
  else {
    right.filter(id => !ids.includes(id)).forEach(id => problems.push(`${where}: the right line "${id}" is not a line that can be tapped`));
    if (right.length !== e.tapPick(ask)) problems.push(`${where}: it wants ${e.tapPick(ask)} line${e.tapPick(ask) === 1 ? '' : 's'} and the answer is ${right.length}`);
    right.filter(id => !(item.deciding || []).includes(id)).forEach(id => problems.push(`${where}: the right line "${id}" is not among the deciding words, so it would not be marked after the answer`));
  }
  if (ask.pick > ids.length) problems.push(`${where}: it wants ${ask.pick} lines and the text has ${ids.length}`);
  lines.filter(l => l.slip && !slipIds.includes(l.slip)).forEach(l => problems.push(`${where}: the line "${l.id}" names the slip "${l.slip}", which is not in the subject's list of slips`));
  lines.filter(l => l.slip && right.includes(l.id)).forEach(l => problems.push(`${where}: the right line "${l.id}" carries the slip "${l.slip}"`));
  return problems;
}
// A line to write has a model line to compare with. It is never scored, so the question also holds an ask that is. An answer from memory has accepted
// answers that are sound (recall.js: none twice, none empty, enough for its count).
function textExplainProblems(s, ask, where) {
  if ('accept' in ask) return s.engine.recallProblems(ask).map(p => `${where}: ${p}`);
  const model = Array.isArray(ask.model) ? ask.model.join(' ') : ask.model;
  return typeof model === 'string' && model.trim() ? [] : [`${where} has no model line to compare with`];
}
// A question with a panel names what the label needs, and says for each need where the words show it, or that they do not: every need of its
// rules and no other, each found line a line of the text and among the deciding words (so it is marked after the answer).
function hasExplainProblems(s, item) {
  const e = s.engine, panels = e.panelBlocksOf(item), problems = [];
  if (!panels.length) return 'has' in item ? ['it says where the needs of a label are found, and has no panel naming the label'] : [];
  if (!('has' in item)) return ['it has a panel and does not say, for each need, where the words show it or that they do not'];
  const needs = e.ruleNeeds(s.subject, e.itemRuleIds(item)).map(n => n.id), ids = Object.keys(item.has);
  needs.filter(id => !ids.includes(id)).forEach(id => problems.push(`has: the need "${id}" of its panel is not accounted for`));
  ids.filter(id => !needs.includes(id)).forEach(id => problems.push(`has: "${id}" is not a need of its panel`));
  const lines = item.blocks.flatMap(b => e.segmentsOf(b)).map(x => x.id);
  Object.entries(item.has).filter(([, line]) => line !== null).forEach(([id, line]) => {
    if (!lines.includes(line)) problems.push(`has: the need "${id}" is found in "${line}", which is not a line of the text`);
    else if (!(item.deciding || []).includes(line)) problems.push(`has: the need "${id}" is found in "${line}", which is not among the deciding words, so it would not be marked after the answer`);
  });
  return problems;
}
// A place: the slips it names are the subject's, and the map in the question never shows what is asked for (a lit place that is the right one, or a
// neighbor or the water of the place asked about, would give the tap away)
function placeExplainProblems(s, item, ask, where, slipIds) {
  const problems = [], e = s.engine, map = e.maps[ask.map];
  Object.values(ask.slips || {}).filter(id => !slipIds.includes(id)).forEach(id => problems.push(`${where}: the slip "${id}" is not in the subject's list of slips`));
  if (!map) return problems;
  const given = ask.mode === 'neighbor-water' ? [...(map.places.find(p => p.id === ask.of) || {}).neighbors || [], ...(map.places.find(p => p.id === ask.of) || {}).water || []] : e.placeRightIds(ask);
  item.blocks.filter(b => b.kind === 'map' && b.region === ask.map).forEach(b => (b.lit || []).filter(id => given.includes(id))
    .forEach(id => problems.push(`${where}: the map above it has "${id}" lit, which is the answer`)));
  // a flag asked for is shown bare: with the country's name beside it the tap would be given away
  item.blocks.filter(b => b.kind === 'flags' && b.names).forEach(b => b.places.filter(id => given.includes(id))
    .forEach(id => problems.push(`${where}: the flags above it name "${id}", which is the answer`)));
  return problems;
}
// An exchange is explained: every end says what happened next (the shape needs it) and a wrong end that names a slip names one the subject has, the
// other side really pushes (at least one turn says how), and a reply that holds off can run into more pressure. An order says why the order matters
// (the shape needs it).
function exchangeExplainProblems(s, ask, where, slipIds) {
  const problems = [], turns = Object.values(ask.turns);
  Object.entries(ask.ends).filter(([, e]) => e.slip && !slipIds.includes(e.slip)).forEach(([id, e]) => problems.push(`${where}: the end "${id}" names the slip "${e.slip}", which is not in the subject's list of slips`));
  Object.entries(ask.ends).filter(([, e]) => e.slip && e.ok).forEach(([id]) => problems.push(`${where}: the right end "${id}" carries a slip`));
  if (!turns.some(t => t.push)) problems.push(`${where}: no turn pushes, so it is not a call or chat that pushes back`);
  if (!turns.some(t => t.options.some(o => 'goto' in o && ask.turns[o.goto].push))) problems.push(`${where}: no reply that holds off runs into more pressure`);
  return problems;
}

// the asks a question really holds: a form's fields are asks of their own kinds
const flatAsks = (s, item) => item.asks.flatMap(a => a.kind === 'form' ? a.fields.map(f => ({ ...s.engine.formFieldAsk(f), id: `${a.id}.${f.id}` })) : [a]);
function explainProblems(s, item) {
  const problems = [], ids = s.listIds.slip || [];
  flatAsks(s, item).forEach(ask => {
    if (ask.kind === 'number') { problems.push(...numberExplainProblems(s, item, ask, `ask ${ask.id}`, ids)); return; }
    if (ask.kind === 'tap') { problems.push(...tapExplainProblems(s, item, ask, `ask ${ask.id}`, ids)); return; }
    if (ask.kind === 'text') { problems.push(...textExplainProblems(s, ask, `ask ${ask.id}`)); return; }
    if (ask.kind === 'exchange') { problems.push(...exchangeExplainProblems(s, ask, `ask ${ask.id}`, ids)); return; }
    if (ask.kind === 'order') return;
    if (ask.kind === 'place') { problems.push(...placeExplainProblems(s, item, ask, `ask ${ask.id}`, ids)); return; }
    const options = s.engine.chooseOptions(s.subject, ask), where = `ask ${ask.id}`;
    if (!options.some(o => o.ok)) problems.push(`${where} has no right option`);
    if (ask.many === undefined && options.filter(o => o.ok).length > 1) problems.push(`${where} has more than one right option and does not take several`);
    options.filter(o => !o.ok && !o.then && !o.slip).forEach(o => problems.push(`${where}: the wrong option "${o.text}" has neither a line of its own nor a slip`));
    options.filter(o => o.slip && !ids.includes(o.slip)).forEach(o => problems.push(`${where}: the slip "${o.slip}" is not in the subject's list of slips`));
  });
  if (!flatAsks(s, item).some(a => s.engine.askIsScored(a))) problems.push('it has no ask that can be scored: a line written against a model is never marked');
  // a question answered from memory is read, or heard: its words are in a spoken block (and only one), never in the prompt, which a spoken check would give away
  // (or a map with a place lit: the lit place is the question, and the words asked about it are the prompt)
  const recalled = flatAsks(s, item).some(a => a.kind === 'text' && 'accept' in a), spokenBlocks = item.blocks.filter(b => b.kind === 'spoken').length;
  const litMaps = item.blocks.filter(b => b.kind === 'map' && (b.lit || []).length).length;
  if (recalled && litMaps === 0 && spokenBlocks !== 1) problems.push(`it asks a question from memory and has ${spokenBlocks} spoken blocks; the question is one`);
  if (recalled && litMaps > 0 && (spokenBlocks > 0 || litMaps > 1)) problems.push(`it asks a question from memory about a lit place and has ${litMaps} lit maps and ${spokenBlocks} spoken blocks; the question is the one lit map`);
  const segments = item.blocks.flatMap(b => s.engine.segmentsOf(b)).map(x => x.id);
  (item.deciding || []).filter(id => !segments.includes(id)).forEach(id => problems.push(`deciding "${id}" is not a segment of the blocks`));
  problems.push(...hasExplainProblems(s, item));
  return problems;
}
export const V74 = subjectRule('V74', (s, check) => {
  Object.values(s.items).forEach(i => checkEach(check, `item ${i.id}`, explainProblems(s, i)));
  s.placeMade.forEach(x => checkEach(check, x.name, explainProblems(s, x.item)));
  s.numberGens.forEach(g => {
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
  // three numbers are a range [min, max, step] (lesson standard 3.5); one whose step reaches past its max gives only its min, which is a list of
  // three choices written by mistake ([3, 5, 10] is always 3)
  Object.entries(gen.params).forEach(([name, def]) => {
    if (e.isRangeParam(def) && def[2] > def[1] - def[0]) problems.add(`${name} is [${def.join(', ')}], which the engine reads as a range that only ever gives ${def[0]}: write choices as a list of two, or four or more, or a range whose step fits`);
  });
  for (let seed = 1; seed <= GENERATOR_SEEDS; seed++) {
    try {
      const values = e.genValues(gen, seed);
      Object.entries(gen.params).forEach(([name, def]) => { if (!inParam(def, values[name], e)) problems.add(`${name} is ${values[name]}, outside its parameters`); });
      Object.entries(values).forEach(([name, v]) => { if (!(typeof v === 'string' || (typeof v === 'number' && Number.isFinite(v)))) problems.add(`${name} is ${v}, which is not a finite number or a word`); });
      const a = e.itemFromGen(gen, seed), b = e.itemFromGen(gen, seed);
      if (JSON.stringify(a) !== JSON.stringify(b)) problems.add('the same seed does not give the same question');
      flatAsks(s, a).filter(ask => ask.kind === 'number').forEach(ask => {
        const wanted = e.numberAnswers(a, ask), tol = e.tolOf(ask);
        wanted.forEach(v => { if (!Number.isFinite(v)) problems.add(`ask ${ask.id}: the answer is ${v}`); });
        if (e.numbersMatch(wanted, wanted, tol) !== true) problems.add(`ask ${ask.id}: the answer is not within its own tolerance`);
        (ask.traps || []).forEach(t => {
          const slipValues = e.numberAnswers(a, { answer: t.value });
          if (e.numbersMatch(slipValues, wanted, tol)) problems.add(`the slip "${t.slip}" gives the answer ${wanted.join(', ')}, or lands within its tolerance`);
        });
      });
      flatAsks(s, a).filter(ask => ask.kind === 'choose').forEach(ask => {
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
// A place group has no numbers to draw: a seed names a pair of place and form. On every pair and on 200 seeds, the same seed makes the same question,
// the question is the pair the seed names, and a seed made for a pair names that pair.
function placeGroupSeedProblems(s, gen) {
  const e = s.engine, problems = new Set(), pairs = e.placePairs(gen);
  for (let seed = 0; seed < Math.max(GENERATOR_SEEDS, 2 * pairs.length); seed++) {
    try {
      const a = e.itemFromGen(gen, seed), b = e.itemFromGen(gen, seed), pair = pairs[seed % pairs.length];
      if (JSON.stringify(a) !== JSON.stringify(b)) problems.add('the same seed does not give the same question');
      if (a.values.place !== pair.place || a.values.form !== pair.form) problems.add(`seed ${seed} makes ${a.values.place} as ${a.values.form}, not the pair it names (${pair.place}, ${pair.form})`);
    } catch (error) { problems.add(error.message); }
  }
  pairs.forEach(({ place, form }) => { if (e.itemFromGen(gen, e.placeSeedOf(gen, place, form, 3)).values.form !== form) problems.add(`the seed made for ${place} as ${form} makes another question`); });
  return [...problems];
}
export const V75 = subjectRule('V75', (s, check) => {
  s.numberGens.forEach(g => checkEach(check, `generator ${g.id}`, generatorProblems(s, g)));
  s.placeGens.forEach(g => checkEach(check, `generator ${g.id}`, placeGroupSeedProblems(s, g)));
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
    const drawn = s.engine.checkIsDrawn(lv.lesson.check), draw = drawn ? lv.lesson.check.items.draw : null;
    if (!drawn) checkEach(check, `${lv.label} check`, mixProblems(s.meta, defsOf(s, lv.checkRefs).map(x => x.def.facets)));
    // a check drawn from a place group holds the mix its split fixes: as many of each form as the split says, each with that form's facets
    else if ('gen' in draw) checkEach(check, `${lv.label} check`, mixProblems(s.meta, Object.entries(draw.split).flatMap(([form, n]) => Array.from({ length: n }, () => s.placeMadeOf(draw.gen).find(x => x.form === form).item.facets))));
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
