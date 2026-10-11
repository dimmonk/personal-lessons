// Section 26.7: V70 (shape and references), V71 (lessons and the design record's parts), V80 (the end result mirrors the design
// record), V81 (private forms), V56 (titles).
import { subjectRule, checkEach } from './rule.mjs';
import { checkShape } from './schema.mjs';
import { SUBJECT, PROSE, PAIR, CHOOSE, NUMBER, FORM_ASK, TAP, TEXT, MESSAGE, DOCUMENT, REF_BLOCK, FIGURE, FIGURE_DATA, ARTICLE, PANEL, CHART, ITEM, GEN, LESSON, STEPS, stepKind, SLOTS } from './shapes.mjs';
import { duplicatesOf } from './text.mjs';

const show = problems => problems.map(p => `${p.path} ${p.message}`);

// What 26.1 describes and the engine has not built yet (26.8). A lesson that uses one is refused, so nothing is written that cannot run.
export const NOT_BUILT = {
  'a baseline lesson': 'step 8 (Scams)', 'a private form into answers, a plan, a setup or lines': 'steps 7 to 9', 'a timed group': 'step 8 (Scams)', 'a busy task': 'step 8 (Scams)',
  'a saved plan': 'step 8 (Scams)', 'a spoken check': 'step 9 (Civics)', 'a check with a time': 'step 8 (Scams)',
  'a subject that times its items': 'step 8 (Scams)', 'the interview date': 'step 9 (Civics)',
  'an interview fact': 'step 9 (Civics)', 'a text ask with accepted answers': 'step 9 (Civics)'
};

/* ---------- the pieces ---------- */
function blockProblems(block, where, kinds, refIds = [], engine = null, ruleIds = [], headed = []) {
  if (!block || typeof block !== 'object') return [`${where} must be an object`];
  if (!kinds.includes(block.kind)) return [`${where} has a block of kind "${block.kind}", which is not built (built: ${kinds.join(', ')})`];
  if (block.kind === 'pitch') return [`${where} is a pitch block, which only a sung question the app makes from a { sing } task may carry`];
  if (block.kind === 'ref') {
    const shape = show(checkShape(block, REF_BLOCK, where));
    return shape.length ? shape : refIds.includes(block.ref) ? [] : [`${where}: "${block.ref}" is not one of the subject's refs`];
  }
  if (block.kind === 'prose') {
    return [...show(checkShape(block, PROSE, where)), ...('text' in block) === ('lines' in block) ? [`${where} must have exactly one of text and lines`] : []];
  }
  if (block.kind === 'document') return show(checkShape(block, DOCUMENT, where));
  if (block.kind === 'figure') {
    const shape = show(checkShape(block, FIGURE, where));
    if (shape.length) return shape;
    const data = show(checkShape(block.data, FIGURE_DATA[block.type], `${where}.data`));
    return data.length || block.type !== 'people' ? data : peopleProblems(block.data, where);
  }
  if (block.kind === 'article') return articleProblems(block, where);
  if (block.kind === 'panel') {
    const shape = show(checkShape(block, PANEL, where));
    return shape.length ? shape : [...duplicatesOf(block.rules).map(id => `${where}: the rule "${id}" is named twice`),
      ...block.rules.filter(id => !ruleIds.includes(id)).map(id => `${where}: "${id}" is not one of the subject's rules`),
      ...(block.rules.length > 1 ? block.rules.filter(id => headed.includes(id)).map(id => `${where}: the rule "${id}" has a heading of its own and stands alone in a panel`) : [])];
  }
  if (block.kind === 'message') return messageProblems(block, where);
  if (block.kind === 'chart') {
    const shape = show(checkShape(block, CHART, where));
    return shape.length ? shape : engine.chartProblems(block).map(p => `${where}: ${p}`);
  }
  return [...show(checkShape(block, PAIR, where)), ...blockProblems(block.a, `${where}.a`, kinds, refIds, engine, ruleIds, headed), ...blockProblems(block.b, `${where}.b`, kinds, refIds, engine, ruleIds, headed)];
}

// A message: a thread is the only form with lines of your own (`me`), and the lines are not called "none", the answer "Not given".
function messageProblems(block, where) {
  const problems = show(checkShape(block, MESSAGE, where));
  if (problems.length) return problems;
  if (!block.lines.length) problems.push(`${where}: a message needs at least one line`);
  if (block.form !== 'thread') block.lines.filter(l => l.me).forEach(l => problems.push(`${where}: the line "${l.id}" is one you sent, and only a thread has lines of your own`));
  if (block.form === 'thread' && !block.lines.some(l => !l.me)) problems.push(`${where}: a thread needs at least one line from the other person`);
  block.lines.filter(l => l.id === 'none').forEach(() => problems.push(`${where}: no line may be called "none", the answer "Not given"`));
  return problems;
}

// The 1,000 people: every row is a count of the 1,000, a whole number from 0 to 1,000.
function peopleProblems(data, where) {
  return data.rows.filter(r => r.count < 0 || r.count > 1000).map(r => `${where}: "${r.label}" is ${r.count} in 1,000, which is not between 0 and 1,000`);
}
// An article: a headline for the forms that have one (a post has none), a label only on a post, lines whose ids are all different from the
// answer "none", at least one line that is not small print.
function articleProblems(block, where) {
  const problems = [];
  problems.push(...show(checkShape(block, ARTICLE, where)));
  if (problems.length) return problems;
  if (block.label && block.form !== 'post') problems.push(`${where}: only a post carries a label, not a ${block.form}`);
  if (block.form === 'post' && block.headline) problems.push(`${where}: a post has no headline`);
  if (block.form !== 'post' && !block.headline) problems.push(`${where}: a ${block.form} needs a headline`);
  if (!block.lines.some(l => !l.fine)) problems.push(`${where}: an article needs at least one line that is not small print`);
  [...(block.headline ? [block.headline] : []), ...block.lines].filter(l => l.id === 'none').forEach(() => problems.push(`${where}: no line may be called "none", the answer "Not given"`));
  return problems;
}

// A typed number: its frame has one blank for each value of the answer, each trap's value has as many, and the tolerance is one of the
// kinds number.js knows (an estimate may leave it out: it is then right from half to double).
const TOL_KEYS = ['abs', 'rel', 'round', 'band'];
function numberProblems(ask, where) {
  const problems = show(checkShape(ask, NUMBER, where));
  if (problems.length) return problems;
  const blanks = (ask.frame || '__').split('__').length - 1, count = v => Array.isArray(v) ? v.length : 1;
  if (blanks < 1) problems.push(`${where}: the frame has no blank ("__") to type in`);
  else if (count(ask.answer) !== blanks) problems.push(`${where}: the frame has ${blanks} blank${blanks === 1 ? '' : 's'} and the answer has ${count(ask.answer)} value${count(ask.answer) === 1 ? '' : 's'}`);
  (ask.traps || []).forEach(t => { if (count(t.value) !== blanks) problems.push(`${where}: the trap "${t.slip}" has ${count(t.value)} value${count(t.value) === 1 ? '' : 's'}, the frame ${blanks} blank${blanks === 1 ? '' : 's'}`); });
  const tol = ask.tol;
  if (!tol) { if (!ask.estimate) problems.push(`${where}: a number needs a tolerance (tol)`); }
  else {
    const keys = Object.keys(tol);
    if (!keys.length) problems.push(`${where}: tol names no tolerance (${TOL_KEYS.join(', ')})`);
    if (keys.includes('round') && keys.length > 1) problems.push(`${where}: a rounding (round) stands alone; abs and rel may stand together`);
    if (keys.includes('band') && (keys.length > 1 || tol.band.length !== 2 || !(tol.band[0] > 0 && tol.band[0] < tol.band[1]))) problems.push(`${where}: a band is two numbers, the least above 0 and the most above it, and stands alone`);
    if (keys.some(k => typeof tol[k] === 'number' && !(tol[k] > 0))) problems.push(`${where}: a tolerance is above 0`);
  }
  return problems;
}

// A form: the shape of 26.1, and each field the shape of the ask of its own kind (a number with a tolerance and a frame with one blank, a choice
// with a list or options). A field is the ask without its id, kind and prompt, so it is checked as that ask.
function formProblems(ask, where, kinds, listIds) {
  const problems = show(checkShape(ask, FORM_ASK, where));
  if (problems.length) return problems;
  problems.push(...duplicatesOf(ask.fields.map(f => f.id)).map(id => `${where}: field "${id}" appears twice`));
  ask.fields.forEach((f, i) => {
    const { label, type, ...rest } = f, as = { ...rest, kind: type, prompt: label };
    problems.push(...askProblems(as, `${where}.fields[${i}]`, ['number', 'choose'], listIds));
  });
  return problems;
}

// A tap: the shape, a block named by `in` that the question has and that has lines, and the words of the "not there" button when that is the answer.
// (That the right lines are lines of the block, and the slips they name, are V74's: they need the question's blocks.)
function tapProblems(ask, where) {
  const problems = show(checkShape(ask, TAP, where));
  if (problems.length) return problems;
  if (ask.right === 'none' && !ask.none) problems.push(`${where}: the answer is "none", and the ask has no words for the button (none)`);
  if (typeof ask.right === 'string' && ask.right !== 'none') problems.push(`${where}: right is a list of lines, or "none"`);
  if (ask.pick !== undefined && (ask.pick < 1 || ask.pick > 4)) problems.push(`${where}: a tap wants one to four lines`);
  if (ask.right === 'none' && ask.pick !== undefined && ask.pick > 1) problems.push(`${where}: "none" is one answer, not ${ask.pick} lines`);
  return problems;
}

// A line to write: the shape, and nothing that is built later (accepted answers come with Civics). That it has a model line is V74's.
function textProblems(ask, where) {
  const problems = show(checkShape(ask, TEXT, where));
  if (problems.length) return problems;
  if ('accept' in ask || 'count' in ask) problems.push(`${where} uses accepted answers, which is built in ${NOT_BUILT['a text ask with accepted answers']}`);
  return problems;
}

function askProblems(ask, where, kinds, listIds) {
  if (!ask || typeof ask !== 'object') return [`${where} must be an object`];
  if (!kinds.includes(ask.kind)) return [`${where} has an ask of kind "${ask.kind}", which is not built (built: ${kinds.join(', ')})`];
  if (ask.kind === 'sing') return [`${where} is a sing ask, which only a sung question the app makes from a { sing } task may carry`];
  if (ask.kind === 'tap') return tapProblems(ask, where);
  if (ask.kind === 'text') return textProblems(ask, where);
  if (ask.kind === 'number') return numberProblems(ask, where);
  if (ask.kind === 'form') return formProblems(ask, where, kinds, listIds);
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
  item.blocks.forEach((b, i) => problems.push(...blockProblems(b, `${where}.blocks[${i}]`, engine.BLOCK_KINDS, ctx.refIds, engine, ctx.ruleIds, ctx.headedIds)));
  problems.push(...labelProblems(item, where, subject, engine));
  const taps = item.asks.filter(a => a.kind === 'tap');
  if (taps.length > 1) problems.push(`${where}: a question has one tap, not ${taps.length}`);
  taps.filter(a => a.in && !item.blocks.some(b => b.id === a.in)).forEach(a => problems.push(`${where}: the tap "${a.id}" names the block "${a.in}", which the question does not have`));
  if (item.redraw && !item.blocks.some(b => b.kind === 'chart' && b.y && b.y.from > 0)) problems.push(`${where}: redraw from zero needs a chart whose axis starts above zero`);
  item.asks.forEach((a, i) => problems.push(...askProblems(a, `${where}.asks[${i}]`, engine.ASK_KINDS, ctx.listIds)));
  const askIds = item.asks.map(a => a.id);
  problems.push(...duplicatesOf(askIds).map(id => `${where}: ask "${id}" appears twice`));
  item.asks.forEach((a, i) => { if (a.when && askIds.indexOf(a.when.ask) < 0 || a.when && askIds.indexOf(a.when.ask) >= i) problems.push(`${where}: ask "${a.id}" opens on "${a.when.ask}", which is not an ask before it`); });
  (item.steps || []).forEach(s => { if (s.ask && !askIds.includes(s.ask)) problems.push(`${where}: step "${s.id}" names the ask "${s.ask}", which the item does not have`); });
  const segIds = item.blocks.flatMap(b => engine.segmentsOf(b)).map(s => s.id);
  problems.push(...duplicatesOf(segIds).map(id => `${where}: segment "${id}" appears twice`));
  problems.push(...duplicatesOf([...(item.steps || []).map(s => s.id)]).map(id => `${where}: step "${id}" appears twice`));
  const unbuilt = [...('fact' in item ? ['an interview fact'] : [])];
  unbuilt.forEach(n => problems.push(`${where} uses ${n}, which is built in ${NOT_BUILT[n]}`));
  if ('figure' in item && (!item.figure || item.figure.kind !== 'figure')) problems.push(`${where}: the figure added to the feedback must be a figure block`);
  else if ('figure' in item) problems.push(...blockProblems(item.figure, `${where}.figure`, engine.BLOCK_KINDS, ctx.refIds, engine, ctx.ruleIds, ctx.headedIds));
  return problems;
}

// A label pinned on words is judged against what the label needs, so its question names the rules in a panel; and the side the label is
// thrown from is kept once: when the subject sorts its questions by `side`, the question's side is the label's.
function labelProblems(item, where, subject, engine) {
  const posts = engine.labelledPostsOf(item), problems = [];
  if (posts.length && !engine.panelBlocksOf(item).length) problems.push(`${where}: a label is pinned on words and the question has no panel naming what the label needs`);
  if (posts.length > 1) problems.push(`${where}: a question holds one labelled post, not ${posts.length}`);
  if (subject.meta.facets.side) {
    posts.filter(b => item.facets.side !== b.label.side).forEach(b => problems.push(`${where}: the label is thrown from the ${b.label.side}, and the question is sorted as "${item.facets.side}"`));
  }
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

// Help that needs something in the questions it is given to: the "disagree" line needs an estimate and an exact answer to compare, and
// leaving the last steps to the learner needs steps to leave.
function supportFitsProblems(set, where, ctx) {
  const support = set.support, { subject, engine } = ctx;
  if (!support) return [];
  const defs = engine.flatRefs(set.items).map(r => subject.items[engine.refId(r)] || subject.gens[engine.refId(r)]).filter(Boolean);
  const problems = [];
  const numbers = d => (d.asks || []).filter(a => a.kind === 'number');
  if (support.estimateCheck && !defs.some(d => numbers(d).some(a => a.estimate) && numbers(d).some(a => !a.estimate))) {
    problems.push(`${where}: the group turns on the estimate check and none of its questions has an estimate and an exact answer`);
  }
  if (support.leave && defs.some(d => !(d.steps || []).length)) problems.push(`${where}: leaves the last steps to the learner, and a question of the group has no steps`);
  if (support.panel && defs.some(d => !engine.panelBlocksOf(d).length)) problems.push(`${where}: shows what the label needs beside the words, and a question of the group has no panel`);
  return problems;
}

// An own step: the private form it fills in is one of the subject's, writes into the sheet, and the model it shows is one of its questions; the
// subject has the form for dated actions the step ends in.
function ownStepProblems(step, where, ctx) {
  const { subject } = ctx, own = subject.meta.own || {}, form = own[step.own], problems = [];
  if (!form) problems.push(`${where}: "${step.own}" is not one of the subject's private forms`);
  else if (form.into !== 'sheet') problems.push(`${where}: the form "${step.own}" writes into "${form.into}"; the step on the learner's own data fills in the sheet`);
  if (step.model && !subject.items[step.model]) problems.push(`${where}: the model "${step.model}" is not an item of the subject`);
  if (!Object.values(own).some(f => f.into === 'actions')) problems.push(`${where}: the subject has no private form for actions, which the step ends in`);
  return problems;
}

function stepProblems(step, where, ctx) {
  const kind = stepKind(step);
  if (!kind) return [`${where} is not a show screen, a worked item, a set or an own step`];
  const problems = show(checkShape(step, STEPS[kind], where));
  if (problems.length) return problems;
  const { subject, engine } = ctx;
  if (kind === 'show') step.show.forEach((b, i) => problems.push(...blockProblems(b, `${where}.show[${i}]`, engine.BLOCK_KINDS, ctx.refIds, engine, ctx.ruleIds, ctx.headedIds)));
  if (kind === 'worked' && !subject.items[step.worked]) problems.push(`${where}: "${step.worked}" is not an item of the subject`);
  if (kind === 'own') problems.push(...ownStepProblems(step, where, ctx));
  if (kind === 'set') {
    const set = step.set;
    engine.flatRefs(set.items).forEach((r, i) => problems.push(...refProblems(r, `${where}.items`, ctx)));
    if (set.seconds !== undefined && !subject.meta.timed) problems.push(`${where} has seconds in a subject that does not time its items`);
    if (set.seconds !== undefined) problems.push(`${where} is timed, which is built in ${NOT_BUILT['a timed group']}`);
    if (set.over) problems.push(`${where} runs a busy task, which is built in ${NOT_BUILT['a busy task']}`);
    if (set.plan) problems.push(`${where} shows a saved plan, which is built in ${NOT_BUILT['a saved plan']}`);
    if (set.mix) set.mix.from.filter(id => !subject.lessons[id]).forEach(id => problems.push(`${where}.mix: "${id}" is not a lesson of the subject`));
    set.items.filter(Array.isArray).forEach(pair => { if (pair.length !== 2) problems.push(`${where}: a pair holds two items, not ${pair.length}`); });
    problems.push(...supportFitsProblems(set, where, ctx));
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
  if (lesson.trigger && !((subject.meta.lists || {}).trigger || []).some(t => t.id === lesson.trigger)) problems.push(`${where}: the trigger "${lesson.trigger}" is not in the subject's list of triggers`);
  lesson.flow.forEach((step, i) => problems.push(...stepProblems(step, `${where}.flow[${i}]`, ctx)));
  const check = lesson.check;
  if (Array.isArray(check.items)) check.items.forEach(r => problems.push(...refProblems(r, `${where}.check.items`, ctx)));
  else check.items.draw.strands.filter(s => !subject.meta.strands.some(x => x.id === s)).forEach(s => problems.push(`${where}.check: "${s}" is not a strand of the subject`));
  if (check.seconds !== undefined) problems.push(`${where}.check has a time, which is built in ${NOT_BUILT['a check with a time']}`);
  if (check.spoken) problems.push(`${where}.check is spoken, which is built in ${NOT_BUILT['a spoken check']}`);
  return problems;
}

// The dated values a subject keeps (26.1 refs): each with the day it was looked up, a real day, and where it came from.
function refsProblems(meta) {
  const refs = meta.refs || [];
  return [...duplicatesOf(refs.map(r => r.id)).map(id => `the subject record: ref "${id}" appears twice`),
    ...refs.filter(r => !engineDay(r.asOf)).map(r => `the subject record: ref "${r.id}" was looked up on "${r.asOf}", which is not a day (YYYY-MM-DD)`)];
}
const engineDay = day => /^\d{4}-\d\d-\d\d$/.test(day) && !Number.isNaN(Date.parse(`${day}T00:00:00Z`)) && new Date(`${day}T00:00:00Z`).toISOString().slice(0, 10) === day;

// The private forms (26.3): written into a slot the app builds, a choice that reads one of the subject's lists, and the fields the app reads
// from that kind of form. (What a field may not be, an account number or a login, is V81's.)
function ownFormsProblems(meta, engine) {
  const lists = meta.lists || {}, problems = [];
  Object.entries(meta.own || {}).forEach(([id, form]) => {
    const where = `the subject record: private form ${id}`;
    if (!engine.OWN_SLOTS.includes(form.into)) { problems.push(`${where} writes into "${form.into}", which is built in ${NOT_BUILT['a private form into answers, a plan, a setup or lines']}`); return; }
    const need = engine.OWN_REQUIRED[form.into];
    const check = (fields, wanted, label) => {
      problems.push(...duplicatesOf(fields.map(f => f.id)).map(f => `${where}: ${label} "${f}" appears twice`));
      Object.entries(wanted).forEach(([fid, type]) => {
        const f = fields.find(x => x.id === fid);
        if (!f) problems.push(`${where} has no ${label} "${fid}", which the app reads`);
        else if (f.type !== type) problems.push(`${where}: ${label} "${fid}" is a ${f.type}, the app reads a ${type}`);
      });
      fields.filter(f => f.type === 'choose').forEach(f => { if (!lists[f.list]) problems.push(`${where}: ${label} "${f.id}" reads the list "${f.list}", which the subject does not have`); });
      fields.filter(f => f.type !== 'choose' && f.list).forEach(f => problems.push(`${where}: ${label} "${f.id}" is not a choice and names a list`));
    };
    check(form.fields, need.fields, 'field');
    if (need.rows) { if (!form.rows) problems.push(`${where} has no rows for the funds, which the app reads`); else check(form.rows.fields, need.rows, 'fund field'); }
    else if (form.rows) problems.push(`${where} has rows, which a form into "${form.into}" does not take`);
  });
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
  problems.push(...duplicatesOf(Object.values(meta.rules || {}).flatMap(r => r.needs.map(n => n.id))).map(id => `the subject record: the need "${id}" appears twice among the rules`));
  meta.mix.forEach((m, i) => {
    const facet = meta.facets[m.facet];
    if (!facet) problems.push(`the subject record: mix[${i}] names the facet "${m.facet}", which the subject does not have`);
    else if ('value' in m && !facet.values.some(v => v.id === m.value)) problems.push(`the subject record: mix[${i}] names "${m.value}", which is not a value of ${m.facet}`);
  });
  if (!(meta.readingShare > 0 && meta.readingShare < 1)) problems.push('the subject record: readingShare must be above 0 and below 1');
  problems.push(...refsProblems(meta), ...ownFormsProblems(meta, engine));
  if (meta.timed) problems.push(`the subject record times its items, which is built in ${NOT_BUILT['a subject that times its items']}`);
  if (meta.review && meta.review.dateField) problems.push(`the subject record uses the interview date, which is built in ${NOT_BUILT['the interview date']}`);
  return problems;
}

export const V70 = subjectRule('V70', (s, check) => {
  const problems = subjectProblems(s);
  if (problems.length) { checkEach(check, 'subject', problems); return; }
  const ctx = { subject: s.subject, engine: s.engine, listIds: s.listIds, refIds: (s.meta.refs || []).map(r => r.id), ruleIds: Object.keys(s.meta.rules || {}),
    headedIds: Object.entries(s.meta.rules || {}).filter(([, r]) => r.heading).map(([id]) => id) };
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
    [...form.fields, ...(form.rows ? form.rows.fields : [])].forEach(f => {
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
