// Section 26.7: V70 (shape and references), V71 (lessons and the design record's parts), V80 (the end result mirrors the design
// record), V81 (private forms), V56 (titles).
import { subjectRule, checkEach } from './rule.mjs';
import { checkShape } from './schema.mjs';
import { SUBJECT, PROSE, PAIR, CHOOSE, ITEM, GEN, LESSON, STEPS, stepKind, SLOTS } from './shapes.mjs';
import { duplicatesOf } from './text.mjs';

const show = problems => problems.map(p => `${p.path} ${p.message}`);

// What 26.1 describes and the engine has not built yet (26.8). A lesson that uses one is refused, so nothing is written that cannot run.
export const NOT_BUILT = {
  'a baseline lesson': 'step 8 (Scams)', 'an own step': 'step 4 (Wealth)', 'a timed group': 'step 8 (Scams)', 'a busy task': 'step 8 (Scams)',
  'a saved plan': 'step 8 (Scams)', 'a spoken check': 'step 9 (Civics)', 'a check with a time': 'step 8 (Scams)',
  'a subject that times its items': 'step 8 (Scams)', 'the interview date': 'step 9 (Civics)',
  'a panel or estimate prompt': 'steps 3, 6 and 7', 'requirements found or missing': 'steps 6 and 7', 'an interview fact': 'step 9 (Civics)',
  'a picture added to feedback': 'steps 3 and 5'
};

/* ---------- the pieces ---------- */
function blockProblems(block, where, kinds) {
  if (!block || typeof block !== 'object') return [`${where} must be an object`];
  if (!kinds.includes(block.kind)) return [`${where} has a block of kind "${block.kind}", which is not built (built: ${kinds.join(', ')})`];
  if (block.kind === 'pitch') return [`${where} is a pitch block, which only a sung question the app makes from a { sing } task may carry`];
  if (block.kind === 'prose') {
    return [...show(checkShape(block, PROSE, where)), ...('text' in block) === ('lines' in block) ? [`${where} must have exactly one of text and lines`] : []];
  }
  return [...show(checkShape(block, PAIR, where)), ...blockProblems(block.a, `${where}.a`, kinds), ...blockProblems(block.b, `${where}.b`, kinds)];
}

function askProblems(ask, where, kinds, listIds) {
  if (!ask || typeof ask !== 'object') return [`${where} must be an object`];
  if (!kinds.includes(ask.kind)) return [`${where} has an ask of kind "${ask.kind}", which is not built (built: ${kinds.join(', ')})`];
  if (ask.kind === 'sing') return [`${where} is a sing ask, which only a sung question the app makes from a { sing } task may carry`];
  const problems = show(checkShape(ask, CHOOSE, where));
  if (('options' in ask) === ('from' in ask)) problems.push(`${where} must have exactly one of options and from`);
  if ('from' in ask) {
    if (!listIds[ask.from]) problems.push(`${where}: "${ask.from}" is not one of the subject's lists`);
    else {
      const ids = listIds[ask.from];
      [...(Array.isArray(ask.right) ? ask.right : [ask.right]), ...(ask.only || [])].filter(Boolean).filter(id => !ids.includes(id) && !/\{/.test(id))
        .forEach(id => problems.push(`${where}: "${id}" is not in the list ${ask.from}`));
      if (!('right' in ask)) problems.push(`${where} draws on a list and has no right answer`);
    }
  }
  if ('options' in ask) problems.push(...duplicatesOf(ask.options.map(o => o.id)).map(id => `${where}: option "${id}" appears twice`));
  return problems;
}

function itemProblems(item, where, ctx, isGen) {
  const problems = show(checkShape(item, isGen ? GEN : ITEM, where));
  if (problems.length) return problems;
  const { subject, engine } = ctx;
  if (!subject.meta.strands.some(s => s.id === item.strand)) problems.push(`${where}: strand "${item.strand}" is not one of the subject's strands`);
  Object.entries(item.facets).forEach(([f, v]) => {
    const facet = subject.meta.facets[f];
    if (!facet) problems.push(`${where}: facet "${f}" is not one of the subject's facets`);
    else if (!facet.values.some(x => x.id === v)) problems.push(`${where}: "${v}" is not a value of the facet ${f}`);
  });
  item.blocks.forEach((b, i) => problems.push(...blockProblems(b, `${where}.blocks[${i}]`, engine.BLOCK_KINDS)));
  item.asks.forEach((a, i) => problems.push(...askProblems(a, `${where}.asks[${i}]`, engine.ASK_KINDS, ctx.listIds)));
  const askIds = item.asks.map(a => a.id);
  problems.push(...duplicatesOf(askIds).map(id => `${where}: ask "${id}" appears twice`));
  item.asks.forEach((a, i) => { if (a.when && askIds.indexOf(a.when.ask) < 0 || a.when && askIds.indexOf(a.when.ask) >= i) problems.push(`${where}: ask "${a.id}" opens on "${a.when.ask}", which is not an ask before it`); });
  (item.steps || []).forEach(s => { if (s.ask && !askIds.includes(s.ask)) problems.push(`${where}: step "${s.id}" names the ask "${s.ask}", which the item does not have`); });
  const segIds = item.blocks.flatMap(b => engine.segmentsOf(b)).map(s => s.id);
  problems.push(...duplicatesOf(segIds).map(id => `${where}: segment "${id}" appears twice`));
  problems.push(...duplicatesOf([...(item.steps || []).map(s => s.id)]).map(id => `${where}: step "${id}" appears twice`));
  const unbuilt = [...('has' in item ? ['requirements found or missing'] : []), ...('fact' in item ? ['an interview fact'] : []), ...(('redraw' in item || 'figure' in item) ? ['a picture added to feedback'] : [])];
  unbuilt.forEach(n => problems.push(`${where} uses ${n}, which is built in ${NOT_BUILT[n]}`));
  return problems;
}

function refProblems(ref, where, ctx) {
  if (typeof ref === 'object' && ref !== null && 'sing' in ref) {   // the limits of the task are V78's
    return [...(ctx.engine.SING_TASKS.includes(ref.sing.task) ? [] : [`${where}: "${ref.sing.task}" is not a sung task (${ctx.engine.SING_TASKS.join(', ')})`]),
      ...(ref.n >= 1 ? [] : [`${where}: a sung task is asked at least once`])];
  }
  const id = ctx.engine.refId(ref);
  if (typeof ref === 'string') return ctx.subject.items[id] ? [] : [`${where}: "${id}" is not an item of the subject`];
  return ctx.subject.gens[id] ? [] : [`${where}: "${id}" is not a generator of the subject`];
}

function supportProblems(support, where) {
  if (!support) return [];
  const unbuilt = ['panel', 'estimateCheck'].filter(k => support[k]);
  return unbuilt.length ? [`${where} uses ${unbuilt.join(', ')}, which is built in ${NOT_BUILT['a panel or estimate prompt']}`] : [];
}

function stepProblems(step, where, ctx) {
  const kind = stepKind(step);
  if (!kind) return [`${where} is not a show screen, a worked item, a set or an own step`];
  const problems = show(checkShape(step, STEPS[kind], where));
  if (problems.length) return problems;
  const { subject, engine } = ctx;
  if (kind === 'show') step.show.forEach((b, i) => problems.push(...blockProblems(b, `${where}.show[${i}]`, engine.BLOCK_KINDS)));
  if (kind === 'worked' && !subject.items[step.worked]) problems.push(`${where}: "${step.worked}" is not an item of the subject`);
  if (kind === 'own') problems.push(`${where} is an own step, which is built in ${NOT_BUILT['an own step']}`);
  if (kind === 'set') {
    const set = step.set;
    engine.flatRefs(set.items).forEach((r, i) => problems.push(...refProblems(r, `${where}.items`, ctx)));
    problems.push(...supportProblems(set.support, `${where}.support`));
    if (set.seconds !== undefined && !subject.meta.timed) problems.push(`${where} has seconds in a subject that does not time its items`);
    if (set.seconds !== undefined) problems.push(`${where} is timed, which is built in ${NOT_BUILT['a timed group']}`);
    if (set.over) problems.push(`${where} runs a busy task, which is built in ${NOT_BUILT['a busy task']}`);
    if (set.plan) problems.push(`${where} shows a saved plan, which is built in ${NOT_BUILT['a saved plan']}`);
    if (set.mix) set.mix.from.filter(id => !subject.lessons[id]).forEach(id => problems.push(`${where}.mix: "${id}" is not a lesson of the subject`));
    set.items.filter(Array.isArray).forEach(pair => { if (pair.length !== 2) problems.push(`${where}: a pair holds two items, not ${pair.length}`); });
  }
  return problems;
}

function lessonProblems(lesson, ctx) {
  const where = `lesson ${lesson.id}`;
  const problems = show(checkShape(lesson, LESSON, where));
  if (problems.length) return problems;
  const { subject, engine } = ctx;
  if ((lesson.part === null) !== (lesson.role === 'baseline')) problems.push(`${where}: only a baseline lesson has no part`);
  if (lesson.role === 'baseline') problems.push(`${where} is a baseline lesson, which is built in ${NOT_BUILT['a baseline lesson']}`);
  lesson.flow.forEach((step, i) => problems.push(...stepProblems(step, `${where}.flow[${i}]`, ctx)));
  const check = lesson.check;
  if (Array.isArray(check.items)) check.items.forEach(r => problems.push(...refProblems(r, `${where}.check.items`, ctx)));
  else check.items.draw.strands.filter(s => !subject.meta.strands.some(x => x.id === s)).forEach(s => problems.push(`${where}.check: "${s}" is not a strand of the subject`));
  problems.push(...supportProblems(check.support, `${where}.check.support`));
  if (check.seconds !== undefined) problems.push(`${where}.check has a time, which is built in ${NOT_BUILT['a check with a time']}`);
  if (check.spoken) problems.push(`${where}.check is spoken, which is built in ${NOT_BUILT['a spoken check']}`);
  return problems;
}

/* ---------- V70 ---------- */
function subjectProblems(s) {
  const { subject, meta, engine } = s;
  const problems = show(checkShape({ ...meta }, SUBJECT, 'the subject record'));
  if (problems.length) return problems;
  problems.push(...duplicatesOf(meta.parts.map(p => p.id)).map(id => `the subject record: part "${id}" appears twice`));
  problems.push(...duplicatesOf(meta.strands.map(x => x.id)).map(id => `the subject record: strand "${id}" appears twice`));
  Object.entries(meta.lists).forEach(([name, list]) => problems.push(...duplicatesOf(list.map(o => o.id)).map(id => `the subject record: list ${name} holds "${id}" twice`)));
  Object.entries(meta.facets).forEach(([name, f]) => problems.push(...duplicatesOf(f.values.map(v => v.id)).map(id => `the subject record: facet ${name} holds "${id}" twice`)));
  meta.mix.forEach((m, i) => {
    const facet = meta.facets[m.facet];
    if (!facet) problems.push(`the subject record: mix[${i}] names the facet "${m.facet}", which the subject does not have`);
    else if ('value' in m && !facet.values.some(v => v.id === m.value)) problems.push(`the subject record: mix[${i}] names "${m.value}", which is not a value of ${m.facet}`);
  });
  if (!(meta.readingShare > 0 && meta.readingShare < 1)) problems.push('the subject record: readingShare must be above 0 and below 1');
  if (meta.timed) problems.push(`the subject record times its items, which is built in ${NOT_BUILT['a subject that times its items']}`);
  if (meta.review && meta.review.dateField) problems.push(`the subject record uses the interview date, which is built in ${NOT_BUILT['the interview date']}`);
  return problems;
}

export const V70 = subjectRule('V70', (s, check) => {
  const problems = subjectProblems(s);
  if (problems.length) { checkEach(check, 'subject', problems); return; }
  const ctx = { subject: s.subject, engine: s.engine, listIds: s.listIds };
  const items = Object.values(s.items), gens = Object.values(s.gens), lessons = s.lessonList;
  items.forEach(i => checkEach(check, `item ${i.id}`, itemProblems(i, `item ${i.id}`, ctx, false)));
  gens.forEach(g => checkEach(check, `generator ${g.id}`, itemProblems(g, `generator ${g.id}`, ctx, true)));
  lessons.forEach(l => checkEach(check, `lesson ${l.id}`, lessonProblems(l, ctx)));
});

/* ---------- V71 ---------- */
const numberOf = id => Number((String(id).match(/(\d+)$/) || [])[1]);
export const V71 = subjectRule('V71', (s, check) => {
  const design = s.design, partIds = s.partIds;
  const problems = [];
  const byPart = {};
  s.lessonList.filter(l => l.part !== null).forEach(l => { byPart[l.part] = [...(byPart[l.part] || []), l.id]; });
  Object.entries(byPart).forEach(([p, ids]) => {
    if (!partIds.includes(p)) ids.forEach(id => problems.push(`lesson ${id} is for part "${p}", which is not a part of the design record`));
    if (ids.length > 1) problems.push(`part "${p}" has more than one lesson: ${ids.join(', ')}`);
  });
  if (s.meta.complete) partIds.filter(p => !byPart[p]).forEach(p => problems.push(`part "${p}" has no lesson, and the subject says it is complete`));
  const ordered = s.sortedLessons.filter(l => l.part !== null).map(l => partIds.indexOf(l.part));
  if (ordered.some((x, i) => i > 0 && x < ordered[i - 1])) problems.push('the lessons are not in part order: lesson numbers must rise with the parts');
  if (design && !design.error) {
    const mine = JSON.stringify(s.meta.parts), theirs = JSON.stringify(design.parts);
    if (mine !== theirs) problems.push('the subject record\'s parts are not the design record\'s parts, word for word');
    const built = s.lessonList.filter(l => l.role !== 'baseline');
    if (built.length && !s.subject.lessons[design.pilot]) problems.push(`the design record's pilot "${design.pilot}" is not a lesson of the subject`);
  }
  checkEach(check, 'lessons and parts', problems);
});

/* ---------- V80 ---------- */
export const V80 = subjectRule('V80', (s, check) => {
  const design = s.design;
  if (!design || design.error) { check(true, ''); return; }   // V69 owns a missing or unreadable record
  check(s.meta.endResult === design.endResult, 'the subject\'s end result is not the design record\'s end result, word for word');
});

/* ---------- V81 ---------- */
const PRIVATE_FIELD = /account\s*(number|no\b|#)|acct|routing|iban|swift|\bpassword\b|passcode|\bpin\b|log-?in|username|user\s*name|social\s*security|\bssn\b|card\s*number/i;
export const V81 = subjectRule('V81', (s, check) => {
  const problems = [];
  Object.entries(s.meta.own || {}).forEach(([formId, form]) => {
    if (!SLOTS.includes(form.into)) problems.push(`form ${formId} writes into "${form.into}", which is not a slot of the learner's private data`);
    form.fields.forEach(f => {
      if (PRIVATE_FIELD.test(f.label) || PRIVATE_FIELD.test(f.id)) problems.push(`form ${formId} has a field "${f.label}", which would hold an account number, a login, a password or a Social Security number`);
    });
  });
  checkEach(check, 'private forms', problems);
});

/* ---------- V56 ---------- */
export const V56 = subjectRule('V56', (s, check) => {
  checkEach(check, 'lesson titles', duplicatesOf(s.lessonList.map(l => l.title)).map(t => `two lessons are titled "${t}"`));
});

export const RULES_SHAPE = [V70, V71, V80, V81, V56];
