// Section 9: V70 (shape and references), V71 (lessons and the subject's parts), V81 (private forms), V56 (titles).
import { subjectRule, checkEach } from './rule.mjs';
import { checkShape } from './schema.mjs';
import { SUBJECT, TONES, PROSE, MAP_BLOCK, FLAGS_BLOCK, PLACE, PAIR, CHOOSE, NUMBER, FORM_ASK, TAP, TEXT, SPOKEN, EXCHANGE, ORDER, MESSAGE, DOCUMENT, REF_BLOCK, FIGURE, FIGURE_DATA, ARTICLE, PANEL, CHART, ITEM, GEN, PLACE_GEN, LESSON, STEPS, stepKind, SLOTS } from './shapes.mjs';
import { duplicatesOf } from './text.mjs';

const show = problems => problems.map(p => `${p.path} ${p.message}`);

// What 3 describes and the engine has not built yet (10.3). A lesson that uses one is refused, so nothing is written that cannot run.
export const NOT_BUILT = {
  'a private form into lines': 'part F of Psychology'
};

/* ---------- the pieces ---------- */
function blockProblems(block, where, kinds, refIds = [], engine = null, ruleIds = [], headed = [], gens = {}) {
  if (!block || typeof block !== 'object') return [`${where} must be an object`];
  if (!kinds.includes(block.kind)) return [`${where} has a block of kind "${block.kind}", which is not built (built: ${kinds.join(', ')})`];
  if (block.kind === 'pitch') return [`${where} is a pitch block, which only a sung question the app makes from a { sing } task may carry`];
  if (block.kind === 'tones') return [`${where} is a block of example sounds, which sits directly on a teaching screen only: a sound on a question would give its answer away`];
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
    if (data.length) return data;
    return block.type === 'people' ? peopleProblems(block.data, where) : block.type === 'plan' ? planProblems(block.data, where) : [];
  }
  if (block.kind === 'article') return articleProblems(block, where);
  if (block.kind === 'panel') {
    const shape = show(checkShape(block, PANEL, where));
    return shape.length ? shape : [...duplicatesOf(block.rules).map(id => `${where}: the rule "${id}" is named twice`),
      ...block.rules.filter(id => !ruleIds.includes(id)).map(id => `${where}: "${id}" is not one of the subject's rules`),
      ...(block.rules.length > 1 ? block.rules.filter(id => headed.includes(id)).map(id => `${where}: the rule "${id}" has a heading of its own and stands alone in a panel`) : [])];
  }
  if (block.kind === 'message') return messageProblems(block, where, engine);
  if (block.kind === 'spoken') return show(checkShape(block, SPOKEN, where));
  if (block.kind === 'map') {
    const shape = show(checkShape(block, MAP_BLOCK, where));
    return shape.length ? shape : engine.mapBlockProblems(block, engine.maps).map(p => `${where}: ${p}`);
  }
  if (block.kind === 'flags') {
    const shape = show(checkShape(block, FLAGS_BLOCK, where));
    return shape.length ? shape : engine.flagsBlockProblems(block, gens).map(p => `${where}: ${p}`);
  }
  if (block.kind === 'chart') {
    const shape = show(checkShape(block, CHART, where));
    return shape.length ? shape : engine.chartProblems(block).map(p => `${where}: ${p}`);
  }
  return [...show(checkShape(block, PAIR, where)), ...blockProblems(block.a, `${where}.a`, kinds, refIds, engine, ruleIds, headed, gens), ...blockProblems(block.b, `${where}.b`, kinds, refIds, engine, ruleIds, headed, gens)];
}

// Example sounds on a teaching screen (3.9): the shape, the app's own limits on the numbers (audioBlockProblems), at most three sentences of what
// to listen for, and a label for each button that no other button of the block has.
const TONES_SAYS_SENTENCES = 3;
function tonesProblems(block, where, engine) {
  const shape = show(checkShape(block, TONES, where));
  if (shape.length) return shape;
  const sentences = [].concat(block.says).join(' ').split(/(?<=[.!?])\s+/).filter(x => x.trim()).length;
  return [...engine.audioBlockProblems(block).map(p => `${where}: ${p}`),
    ...(sentences > TONES_SAYS_SENTENCES ? [`${where}: what to listen for is ${sentences} sentences; it is at most ${TONES_SAYS_SENTENCES}`] : []),
    ...duplicatesOf(block.examples.map(e => e.label)).map(l => `${where}: two sounds share the label "${l}"`)];
}

// A message: a thread or a chat is the only form with lines of your own (`me`), an email has a subject, only the forms that carry a link or a button
// have one, a banner is one short line, and the lines are not called "none", the answer "Not given".
function messageProblems(block, where, engine) {
  const problems = show(checkShape(block, MESSAGE, where));
  if (problems.length) return problems;
  const yours = engine.MESSAGE_YOURS.includes(block.form);
  if (!block.lines.length) problems.push(`${where}: a message needs at least one line`);
  if (!yours) block.lines.filter(l => l.me).forEach(l => problems.push(`${where}: the line "${l.id}" is one you sent, and only a thread or a chat has lines of your own`));
  if (yours && !block.lines.some(l => !l.me)) problems.push(`${where}: a ${block.form} needs at least one line from the other person`);
  if (block.form === 'email' && !block.subject) problems.push(`${where}: an email has a subject`);
  if (block.subject && block.form !== 'email') problems.push(`${where}: only an email has a subject, not a ${block.form}`);
  if (block.link && !engine.MESSAGE_LINK_FORMS.includes(block.form)) problems.push(`${where}: a ${block.form} has no link or button (${engine.MESSAGE_LINK_FORMS.join(', ')} do)`);
  if (block.form === 'banner' && block.lines.length !== 1) problems.push(`${where}: a banner is one short line, not ${block.lines.length}`);
  block.lines.filter(l => l.id === 'none').forEach(() => problems.push(`${where}: no line may be called "none", the answer "Not given"`));
  return problems;
}

// The 1,000 people: every row is a count of the 1,000, a whole number from 0 to 1,000.
function peopleProblems(data, where) {
  const slot = v => typeof v === 'string' && v.includes('{');   // a generator's slot is read on the questions it makes
  return data.rows.filter(r => !slot(r.count) && !(Number.isInteger(Number(r.count)) && Number(r.count) >= 0 && Number(r.count) <= 1000))
    .map(r => `${where}: "${r.label}" is ${r.count} in 1,000, which is not a whole number between 0 and 1,000`);
}
// A plan is drawn to one scale: every size of a part is a number above zero and every corner at zero or more (a generator's slot, "{w}", is read
// on the questions it makes). A triangle is right-angled, so its two sides and the slant are its own; a circle has one size, its radius.
function planProblems(data, where) {
  const sized = p => p.shape === 'circle' ? ['r'] : ['w', 'h'], slot = v => typeof v === 'string' && v.includes('{');
  return data.parts.flatMap((p, i) => [
    ...sized(p).filter(k => !slot(p[k]) && !(Number(p[k]) > 0)).map(k => `${where}: part ${i + 1} has a size ${k} of "${p[k]}", which is not a number above zero`),
    ...['x', 'y'].filter(k => !slot(p[k]) && !(Number(p[k]) >= 0)).map(k => `${where}: part ${i + 1} has a corner ${k} of "${p[k]}", which is not a number of zero or more`)]);
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
function numberProblems(ask, where, engine) {
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
  (ask.calc || []).filter(x => !engine.CALC_EXTRAS.includes(x)).forEach(x => problems.push(`${where}: "${x}" is not a key the calculator can add (${engine.CALC_EXTRAS.join(', ')})`));
  if (ask.calc && ask.estimate) problems.push(`${where}: an estimate is typed from the head and has no calculator, so no keys to add (calc)`);
  duplicatesOf(ask.calc || []).forEach(x => problems.push(`${where}: the calculator key "${x}" is named twice`));
  return problems;
}

// A form: the shape of 3, and each field the shape of the ask of its own kind (a number with a tolerance and a frame with one blank, a choice
// with a list or options). A field is the ask without its id, kind and prompt, so it is checked as that ask.
function formProblems(ask, where, kinds, listIds) {
  const problems = show(checkShape(ask, FORM_ASK, where));
  if (problems.length) return problems;
  problems.push(...duplicatesOf(ask.fields.map(f => f.id)).map(id => `${where}: field "${id}" appears twice`));
  ask.fields.forEach((f, i) => {
    const { label, type, ...rest } = f, as = { ...rest, kind: type, prompt: label };
    problems.push(...askProblems(as, `${where}.fields[${i}]`, ['number', 'choose'], listIds, null));
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

// A text ask is a line to write against a model, or an answer from memory checked against what a list accepts: exactly one of the two. `count` belongs to a
// list of accepted answers and is two or more (one is what a question wants without it). An answer the learner entered (`own`) names a text field of the
// subject's form into `answers`. (That the accepted answers are sound, and that the question is spoken, are V74's; that the model line is there is V74's too.)
function textProblems(ask, where, meta) {
  const problems = show(checkShape(ask, TEXT, where));
  if (problems.length) return problems;
  if (('model' in ask) === ('accept' in ask)) problems.push(`${where} must have exactly one of model (a line to write) and accept (an answer from memory)`);
  if ('count' in ask && !Array.isArray(ask.accept)) problems.push(`${where}: count belongs to a list of accepted answers`);
  if ('count' in ask && ask.count < 2) problems.push(`${where}: count is two or more; one answer is what a question wants without it`);
  if (ask.accept && !Array.isArray(ask.accept)) {
    const field = String(ask.accept.own).replace(/^answers\./, ''), form = answersFormOf(meta);
    if (!/^answers\./.test(ask.accept.own)) problems.push(`${where}: own names "${ask.accept.own}", which is not an entry of the form into answers (answers.<field>)`);
    else if (!form || !form.fields.some(f => f.id === field && f.type === 'text')) problems.push(`${where}: own names "${ask.accept.own}", and the subject has no text field "${field}" in a form into answers`);
  }
  return problems;
}
// the subject's private form into `answers`, or null
const answersFormOf = meta => meta ? Object.values(meta.own || {}).find(f => f.into === 'answers') || null : null;

// A place ask: the shape, then the region and the places it names, which are the map data's (place.js says what each kind of place ask needs of them)
function placeShapeProblems(ask, where, engine) {
  const problems = show(checkShape(ask, PLACE, where));
  if (problems.length) return problems;
  if (ask.mode === undefined && !('right' in ask)) return [`${where}: a place has a right answer (right)`];
  return engine.placeAskProblems(ask, engine.maps).map(p => `${where}: ${p}`);
}
// An exchange: its turns are a path that always ends. The start and every goto are turns, every end is an end, a turn offers at least two replies
// each of which goes on or ends, every turn can be reached, the turns do not loop, and there is a right end and a wrong one. (That each end is
// explained, and that the other side really pushes, is V74's.)
function exchangeProblems(ask, where, engine) {
  const problems = show(checkShape(ask, EXCHANGE, where));
  if (problems.length) return problems;
  const turns = ask.turns, ends = ask.ends, turnIds = Object.keys(turns);
  if (!turns[ask.start]) return [`${where}: it starts at "${ask.start}", which is not one of its turns`];
  turnIds.forEach(id => {
    const turn = turns[id], ids = turn.options.map(o => o.id);
    if (turn.options.length < 2) problems.push(`${where}: the turn "${id}" offers fewer than two replies`);
    problems.push(...duplicatesOf(ids).map(o => `${where}: the turn "${id}" has the reply "${o}" twice`));
    turn.options.forEach(o => {
      if ('goto' in o && !turns[o.goto]) problems.push(`${where}: the reply "${o.id}" of "${id}" goes to "${o.goto}", which is not a turn`);
      if ('end' in o && !ends[o.end]) problems.push(`${where}: the reply "${o.id}" of "${id}" ends at "${o.end}", which is not an end`);
    });
  });
  if (problems.length) return problems;
  if (engine.exchangeLoops(ask)) problems.push(`${where}: the turns loop back on themselves, so an exchange could go on for ever`);
  else {
    const reach = engine.exchangeReach(ask);
    turnIds.filter(id => !reach.includes(id)).forEach(id => problems.push(`${where}: the turn "${id}" cannot be reached from the start`));
  }
  const used = new Set(turnIds.flatMap(id => turns[id].options.filter(o => 'end' in o).map(o => o.end)));
  Object.keys(ends).filter(id => !used.has(id)).forEach(id => problems.push(`${where}: the end "${id}" is reached by no reply`));
  if (!Object.values(ends).some(e => e.ok)) problems.push(`${where}: no end is the right one`);
  if (!Object.values(ends).some(e => !e.ok)) problems.push(`${where}: no end is a wrong one, so the exchange cannot be lost`);
  problems.push(...duplicatesOf(turnIds.flatMap(id => turns[id].lines.map(l => l.id))).map(id => `${where}: the line "${id}" appears twice among the turns`));
  return problems;
}
// Steps to put in order: the shape, then ids that are steps (order.js)
function orderShapeProblems(ask, where, engine) {
  const problems = show(checkShape(ask, ORDER, where));
  return problems.length ? problems : engine.orderProblems(ask).map(p => `${where}: ${p}`);
}

function askProblems(ask, where, kinds, listIds, engine, meta = null) {
  if (!ask || typeof ask !== 'object') return [`${where} must be an object`];
  if (!kinds.includes(ask.kind)) return [`${where} has an ask of kind "${ask.kind}", which is not built (built: ${kinds.join(', ')})`];
  if (ask.kind === 'sing') return [`${where} is a sing ask, which only a sung question the app makes from a { sing } task may carry`];
  if (ask.kind === 'tap') return tapProblems(ask, where);
  if (ask.kind === 'text') return textProblems(ask, where, meta);
  if (ask.kind === 'exchange') return exchangeProblems(ask, where, engine);
  if (ask.kind === 'order') return orderShapeProblems(ask, where, engine);
  if (ask.kind === 'place') return placeShapeProblems(ask, where, engine);
  if (ask.kind === 'number') return numberProblems(ask, where, engine);
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
  item.blocks.forEach((b, i) => problems.push(...blockProblems(b, `${where}.blocks[${i}]`, engine.BLOCK_KINDS, ctx.refIds, engine, ctx.ruleIds, ctx.headedIds, ctx.gens)));
  problems.push(...labelProblems(item, where, subject, engine));
  const taps = item.asks.filter(a => a.kind === 'tap');
  if (taps.length > 1) problems.push(`${where}: a question has one tap, not ${taps.length}`);
  taps.filter(a => a.in && !item.blocks.some(b => b.id === a.in)).forEach(a => problems.push(`${where}: the tap "${a.id}" names the block "${a.in}", which the question does not have`));
  if (item.redraw && !item.blocks.some(b => b.kind === 'chart' && b.y && b.y.from > 0)) problems.push(`${where}: redraw from zero needs a chart whose axis starts above zero`);
  item.asks.forEach((a, i) => problems.push(...askProblems(a, `${where}.asks[${i}]`, engine.ASK_KINDS, ctx.listIds, engine, subject.meta)));
  const exchanges = item.asks.filter(a => a.kind === 'exchange');
  if (exchanges.length > 1) problems.push(`${where}: a question has one call or chat, not ${exchanges.length}`);
  const askIds = item.asks.map(a => a.id);
  problems.push(...duplicatesOf(askIds).map(id => `${where}: ask "${id}" appears twice`));
  item.asks.forEach((a, i) => { if (a.when && askIds.indexOf(a.when.ask) < 0 || a.when && askIds.indexOf(a.when.ask) >= i) problems.push(`${where}: ask "${a.id}" opens on "${a.when.ask}", which is not an ask before it`); });
  (item.steps || []).forEach(s => { if (s.ask && !askIds.includes(s.ask)) problems.push(`${where}: step "${s.id}" names the ask "${s.ask}", which the item does not have`); });
  const segIds = item.blocks.flatMap(b => engine.segmentsOf(b)).map(s => s.id);
  problems.push(...duplicatesOf(segIds).map(id => `${where}: segment "${id}" appears twice`));
  problems.push(...duplicatesOf([...(item.steps || []).map(s => s.id)]).map(id => `${where}: step "${id}" appears twice`));
  if ('fact' in item) problems.push(...factProblems(item, where, subject));
  if ('figure' in item && (!item.figure || !['figure', 'map', 'flags'].includes(item.figure.kind))) problems.push(`${where}: the picture added to the feedback must be a figure, a map or a flags block`);
  else if ('figure' in item) problems.push(...blockProblems(item.figure, `${where}.figure`, engine.BLOCK_KINDS, ctx.refIds, engine, ctx.ruleIds, ctx.headedIds, ctx.gens));
  return problems;
}

// The interview question a news answer rests on is an item of the subject that asks a question from memory (and is not the question itself)
function factProblems(item, where, subject) {
  const fact = subject.items[item.fact];
  if (!fact) return [`${where}: the interview question "${item.fact}" is not an item of the subject`];
  if (fact.id === item.id) return [`${where}: the question cannot rest on itself`];
  return fact.asks.some(a => a.kind === 'text' && a.accept) ? [] : [`${where}: the interview question "${item.fact}" has no answers from memory to print`];
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
  const id = ctx.engine.refId(ref), gen = ctx.subject.gens[id];
  if (typeof ref === 'string') return ctx.subject.items[id] ? [] : [`${where}: "${id}" is not an item of the subject`];
  if (!gen) return [`${where}: "${id}" is not a generator of the subject`];
  // a reference to a place group names a form or a place of it, and asks no more places than it can offer in that form
  return ctx.engine.isPlaceGen(gen) && ctx.soundGroups.has(id) ? ctx.engine.placeRefProblems(gen, ref, ctx.engine.placeOnlyOf(ctx.subject, id)).map(p => `${where}: ${id}: ${p}`) : [];
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
  // an ask the help leaves to the learner can never open when it waits on an ask the help answers (the given answer is not a choice made)
  if (support.leave) defs.forEach(d => {
    const steps = d.steps || [], given = steps.slice(0, Math.max(0, steps.length - support.leave)).map(s => s.ask).filter(Boolean);
    (d.asks || []).filter(a => !given.includes(a.id) && a.when && given.includes(a.when.ask))
      .forEach(a => problems.push(`${where}: the help answers "${a.when.ask}" of ${d.id}, so "${a.id}", which waits on it, never opens: leave more steps`));
  });
  if (defs.some(engine.isPlaceGen)) { problems.push(`${where}: a group of places takes no help`); return problems; }
  if (support.panel && defs.some(d => !engine.panelBlocksOf(d).length)) problems.push(`${where}: shows what the label needs beside the words, and a question of the group has no panel`);
  return problems;
}

// An own step: the private form it fills in is one of the subject's. A step on the sheet shows a model that is one of its questions, and the subject
// has the form for dated actions the step ends in; a step on the plan or the setup has neither.
function ownStepProblems(step, where, ctx) {
  const { subject } = ctx, own = subject.meta.own || {}, form = own[step.own], problems = [];
  if (!form) { problems.push(`${where}: "${step.own}" is not one of the subject's private forms`); return problems; }
  if (!['sheet', 'plan', 'setup', 'answers'].includes(form.into)) problems.push(`${where}: the form "${step.own}" writes into "${form.into}"; a step fills in the sheet, the plan, the setup or the answers`);
  if (step.model && !subject.items[step.model]) problems.push(`${where}: the model "${step.model}" is not an item of the subject`);
  if (step.model && form.into !== 'sheet') problems.push(`${where}: only a step on the sheet shows a model`);
  if (form.into === 'sheet' && !Object.values(own).some(f => f.into === 'actions')) problems.push(`${where}: the subject has no private form for actions, which the step ends in`);
  if (form.into === 'sheet') problems.push(...workProblems(step, form, where, ctx));
  else if (step.work) problems.push(`${where}: only a step on the sheet names a work`);
  if (step.repeat !== undefined && (step.repeat !== 'year' || form.into !== 'sheet')) problems.push(`${where}: repeat is 'year', on a step on the sheet only (its changes come back every year)`);
  return problems;
}
// A step on the sheet names the work the app shows (own-work.js), and the sheet holds what that work reads: the groups it needs with the
// fields it reads, the account fields beyond the ones every sheet has, the thresholds (`limits`), the dated values (`refs`) and, when it reads
// what an account kind or a fund kind means, only kinds the app knows.
function workProblems(step, form, where, ctx) {
  const { subject, engine } = ctx, work = step.work && engine.OWN_WORKS[step.work];
  if (!step.work) return [`${where}: a step on the sheet names the work the app shows (one of ${Object.keys(engine.OWN_WORKS).join(', ')})`];
  if (!work) return [`${where}: "${step.work}" is not a work the app has (${Object.keys(engine.OWN_WORKS).join(', ')})`];
  const problems = [], groups = form.groups || [];
  Object.entries(work.reads).forEach(([gid, fields]) => {
    const group = groups.find(g => g.id === gid);
    if (!group) { problems.push(`${where}: the work "${step.work}" reads the group "${gid}", which the sheet does not have`); return; }
    Object.entries(fields).forEach(([fid, type]) => {
      const f = group.fields.find(x => x.id === fid);
      if (!f) problems.push(`${where}: the work "${step.work}" reads "${fid}" of the group "${gid}", which it does not have`);
      else if (f.type !== type) problems.push(`${where}: "${fid}" of the group "${gid}" is a ${f.type}, the work reads a ${type}`);
    });
  });
  work.needs.filter(g => !groups.some(x => x.id === g)).forEach(g => problems.push(`${where}: the work "${step.work}" needs the group "${g}", which the sheet does not have`));
  Object.entries(work.fields || {}).forEach(([fid, type]) => {
    const f = form.fields.find(x => x.id === fid);
    if (!f || f.type !== type) problems.push(`${where}: the work "${step.work}" reads the account field "${fid}" (a ${type}), which the sheet does not have`);
  });
  Object.entries(work.rowFields || {}).forEach(([fid, type]) => {
    const f = ((form.rows || {}).fields || []).find(x => x.id === fid);
    if (!f || f.type !== type) problems.push(`${where}: the work "${step.work}" reads the fund field "${fid}" (a ${type}), which the sheet does not have`);
  });
  work.limits.filter(l => typeof (form.limits || {})[l] !== 'number').forEach(l => problems.push(`${where}: the work "${step.work}" compares with the limit "${l}", which the sheet does not give`));
  work.refs.filter(r => !(subject.meta.refs || []).some(x => x.id === r)).forEach(r => problems.push(`${where}: the work "${step.work}" reads the value looked up "${r}", which the subject does not have`));
  if (work.lists) {
    const lists = subject.meta.lists || {};
    (lists.accountType || []).filter(o => !engine.OWN_ACCOUNT[o.id]).forEach(o => problems.push(`${where}: the work "${step.work}" reads what each kind of account means, and the app does not know "${o.id}"`));
    (lists.kind || []).filter(o => !engine.OWN_KIND[o.id]).forEach(o => problems.push(`${where}: the work "${step.work}" reads what each fund holds, and the app does not know "${o.id}"`));
  }
  return problems;
}

function stepProblems(step, where, ctx) {
  const kind = stepKind(step);
  if (!kind) return [`${where} is not a show screen, a worked item, a set or an own step`];
  const problems = show(checkShape(step, STEPS[kind], where));
  if (problems.length) return problems;
  const { subject, engine } = ctx;
  if (kind === 'show') step.show.forEach((b, i) => problems.push(...(b && b.kind === 'tones' ? tonesProblems(b, `${where}.show[${i}]`, engine) : blockProblems(b, `${where}.show[${i}]`, engine.BLOCK_KINDS, ctx.refIds, engine, ctx.ruleIds, ctx.headedIds, ctx.gens))));
  if (kind === 'worked' && !subject.items[step.worked]) problems.push(`${where}: "${step.worked}" is not an item of the subject`);
  if (kind === 'own') problems.push(...ownStepProblems(step, where, ctx));
  if (kind === 'set') {
    const set = step.set;
    engine.flatRefs(set.items).forEach((r, i) => problems.push(...refProblems(r, `${where}.items`, ctx)));
    if (set.seconds !== undefined && !subject.meta.timed) problems.push(`${where} has seconds in a subject that does not time its items`);
    if (set.plan && !Object.values(subject.meta.own || {}).some(f => f.into === 'plan')) problems.push(`${where} shows the saved plan, and the subject has no private form for a plan`);
    if (set.mix) set.mix.from.filter(id => !subject.lessons[id]).forEach(id => problems.push(`${where}.mix: "${id}" is not a lesson of the subject`));
    set.items.filter(Array.isArray).forEach(pair => { if (pair.length !== 2) problems.push(`${where}: a pair holds two items, not ${pair.length}`); });
    problems.push(...supportFitsProblems(set, where, ctx));
  }
  return problems;
}

// A baseline measures and teaches nothing (4): its flow is only screens that say how it goes, it holds its answers to the end, and the subject says
// what its closing line counts (the slip that is the failure, and which kind of question is risky and which real).
function baselineProblems(lesson, where, subject) {
  const problems = [];
  lesson.flow.filter(s => !s.show).forEach(() => problems.push(`${where}: a baseline teaches nothing, so its flow holds only screens that say how it goes`));
  if (lesson.check.feedback !== 'at-end') problems.push(`${where}: a baseline holds its answers to the end`);
  if (lesson.check.retest !== undefined) problems.push(`${where}: a baseline is taken once and is never taken again as a retest`);
  if (!subject.meta.danger) problems.push(`${where}: a baseline ends on one line about the failure, and the subject names no \`danger\` for it to count`);
  return problems;
}

function lessonProblems(lesson, ctx) {
  const where = `lesson ${lesson.id}`;
  const problems = show(checkShape(lesson, LESSON, where));
  if (problems.length) return problems;
  const { subject, engine } = ctx;
  if ((lesson.part === null) !== (lesson.role === 'baseline')) problems.push(`${where}: only a baseline lesson has no part`);
  if (lesson.role === 'baseline') problems.push(...baselineProblems(lesson, where, subject));
  if (lesson.trigger && !((subject.meta.lists || {}).trigger || []).some(t => t.id === lesson.trigger)) problems.push(`${where}: the trigger "${lesson.trigger}" is not in the subject's list of triggers`);
  lesson.flow.forEach((step, i) => problems.push(...stepProblems(step, `${where}.flow[${i}]`, ctx)));
  problems.push(...ownAnswersProblems(lesson, where, ctx));
  const check = lesson.check;
  if (Array.isArray(check.items)) check.items.forEach(r => problems.push(...refProblems(r, `${where}.check.items`, ctx)));
  else if ('gen' in check.items.draw) problems.push(...drawGroupProblems(check.items.draw, `${where}.check`, ctx));
  else check.items.draw.strands.filter(s => !subject.meta.strands.some(x => x.id === s)).forEach(s => problems.push(`${where}.check: "${s}" is not a strand of the subject`));
  if (check.seconds !== undefined && !subject.meta.timed) problems.push(`${where}.check has seconds in a subject that does not time its items`);
  if (check.recall && !Array.isArray(check.items)) problems.push(`${where}.check asks its questions again, and a check that is drawn at random has no questions to ask again`);
  return problems;
}
// A check drawn from a place group: the group is one of the subject's, and the split and the places it keeps to a form are the group's to ask
function drawGroupProblems(draw, where, ctx) {
  const gen = ctx.subject.gens[draw.gen];
  if (!gen) return [`${where}: "${draw.gen}" is not a generator of the subject`];
  if (!ctx.engine.isPlaceGen(gen)) return [`${where}: "${draw.gen}" is not a group of places, and only a group of places is drawn by form`];
  return ctx.soundGroups.has(draw.gen) ? ctx.engine.placeDrawProblems(gen, draw).map(p => `${where}: ${p}`) : [];
}
// A lesson that asks about the learner's own answers (a senator, the capital) has a step before it where they enter them; a drawn check leaves such a
// question out until they are entered.
function ownAnswersProblems(lesson, where, ctx) {
  const { subject, engine } = ctx, forms = Object.entries(subject.meta.own || {}).filter(([, f]) => f.into === 'answers').map(([id]) => id);
  const reads = id => { const d = subject.items[id]; return !!d && d.asks.some(a => engine.recallIsOwn(a)); };
  let entered = false;
  const problems = [];
  lesson.flow.forEach((step, i) => {
    if (step.own && forms.includes(step.own)) entered = true;
    const ids = step.worked ? [step.worked] : step.set ? engine.flatRefs(step.set.items).map(engine.refId) : [];
    ids.filter(reads).forEach(id => { if (!entered) problems.push(`${where}.flow[${i}] asks "${id}", which reads the learner's own answers, before any step where they enter them`); });
  });
  if (Array.isArray(lesson.check.items)) engine.flatRefs(lesson.check.items).map(engine.refId).filter(reads).forEach(id => { if (!entered) problems.push(`${where}.check asks "${id}", which reads the learner's own answers, and no step enters them`); });
  return problems;
}

// The dated values a subject keeps (3 refs): each with the day it was looked up, a real day, and where it came from.
function refsProblems(meta) {
  const refs = meta.refs || [];
  return [...duplicatesOf(refs.map(r => r.id)).map(id => `the subject record: ref "${id}" appears twice`),
    ...refs.filter(r => !engineDay(r.asOf)).map(r => `the subject record: ref "${r.id}" was looked up on "${r.asOf}", which is not a day (YYYY-MM-DD)`)];
}
const engineDay = day => /^\d{4}-\d\d-\d\d$/.test(day) && !Number.isNaN(Date.parse(`${day}T00:00:00Z`)) && new Date(`${day}T00:00:00Z`).toISOString().slice(0, 10) === day;

// The private forms (5): written into a slot the app builds, a choice that reads one of the subject's lists, and the fields the app reads
// from that kind of form. (What a field may not be, an account number or a login, is V81's.)
function ownFormsProblems(meta, engine) {
  const lists = meta.lists || {}, problems = [];
  Object.entries(meta.own || {}).forEach(([id, form]) => {
    const where = `the subject record: private form ${id}`;
    if (!engine.OWN_SLOTS.includes(form.into)) { problems.push(`${where} writes into "${form.into}", which is built in ${NOT_BUILT['a private form into lines']}`); return; }
    const need = engine.OWN_REQUIRED[form.into];
    if (need.allType) form.fields.filter(f => f.type !== need.allType).forEach(f => problems.push(`${where}: "${f.id}" is a ${f.type}; every field of a form into "${form.into}" is marked on a ${need.allType}`));
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
    (form.groups || []).forEach(g => check(g.fields, {}, `field of the group ${g.id}`));
    // fields filled together or not at all: each a field of its group, and optional (a required one is always filled)
    (form.groups || []).forEach(g => (g.together || []).flat().forEach(fid => {
      const f = g.fields.find(x => x.id === fid);
      if (!f) problems.push(`${where}: the group ${g.id} fills "${fid}" together with others, and has no such field`);
      else if (!f.optional) problems.push(`${where}: the group ${g.id} fills "${fid}" together with others, and it is not optional`);
    }));
    problems.push(...duplicatesOf((form.groups || []).map(g => g.id)).map(g => `${where}: the group "${g}" appears twice`));
    if ((form.groups || form.limits) && form.into !== 'sheet') problems.push(`${where} has groups or limits, which only the sheet takes`);
    const kinds = (lists.accountType || []).map(o => o.id);
    form.fields.filter(f => f.for).forEach(f => f.for.filter(k => !kinds.includes(k)).forEach(k => problems.push(`${where}: field "${f.id}" is kept to accounts of the kind "${k}", which the list of account kinds does not have`)));
    [...(form.rows ? form.rows.fields : []), ...(form.groups || []).flatMap(g => g.fields)].filter(f => f.for).forEach(f => problems.push(`${where}: "${f.id}" is kept to some kinds of account, and only an account's own field can be`));
    if (need.rows) { if (!form.rows) problems.push(`${where} has no rows for the funds, which the app reads`); else check(form.rows.fields, need.rows, 'fund field'); }
    else if (form.rows) problems.push(`${where} has rows, which a form into "${form.into}" does not take`);
    if (form.into === 'plan' && !form.words) problems.push(`${where} has no words (title, how, saved, before), which the plan step and the review show`);
    if (form.into !== 'plan' && form.words) problems.push(`${where} has words, which only a form into "plan" takes`);
  });
  return problems;
}

// The interview date the review counts its rounds from (6): `answers.<field>`, a date field of the subject's form into `answers`
function dateFieldProblems(meta) {
  const name = meta.review.dateField, field = name.replace(/^answers\./, ''), form = answersFormOf(meta);
  if (!/^answers\./.test(name)) return [`the subject record: the review reads its date from "${name}", which is not an entry of the form into answers (answers.<field>)`];
  return form && form.fields.some(f => f.id === field && f.type === 'date') ? [] : [`the subject record: the review reads its date from "${name}", and the subject has no date field "${field}" in a form into answers`];
}

/* ---------- V70 ---------- */
// a place group: its shape, then its places against the map data
function groupProblems(gen, ctx) {
  const shape = show(checkShape(gen, PLACE_GEN, `generator ${gen.id}`));
  return shape.length ? shape : ctx.engine.placeGenProblems(gen, ctx.engine.maps).map(p => `generator ${gen.id}: ${p}`);
}
// every question a sound group can make is read as an item of the subject: its ask, its map, its facet and strand
function madeProblems(gen, ctx) {
  if (!ctx.soundGroups.has(gen.id)) return [];
  return ctx.engine.placeItems(gen).flatMap(({ seed, values, ...item }) => itemProblems(item, `generator ${gen.id} (${values.place}, ${values.form})`, ctx, false));
}
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
  if (meta.danger) {
    const d = meta.danger, facet = meta.facets[d.facet];
    if (!(meta.lists.slip || []).some(x => x.id === d.slip)) problems.push(`the subject record: the danger slip "${d.slip}" is not in the list of slips`);
    if (!facet) problems.push(`the subject record: the danger names the facet "${d.facet}", which the subject does not have`);
    else [d.risky, d.real].filter(v => !facet.values.some(x => x.id === v)).forEach(v => problems.push(`the subject record: the danger names "${v}", which is not a value of ${d.facet}`));
  }
  if (meta.review && meta.review.dateField) problems.push(...dateFieldProblems(meta));
  return problems;
}

export const V70 = subjectRule('V70', (s, check) => {
  const problems = subjectProblems(s);
  if (problems.length) { checkEach(check, 'subject', problems); return; }
  const ctx = { subject: s.subject, engine: s.engine, listIds: s.listIds, refIds: (s.meta.refs || []).map(r => r.id), ruleIds: Object.keys(s.meta.rules || {}),
    headedIds: Object.entries(s.meta.rules || {}).filter(([, r]) => r.heading).map(([id]) => id), gens: s.gens };
  const items = Object.values(s.items), gens = Object.values(s.gens), lessons = s.lessonList;
  // a place group is sound when its own shape and its places are, and only then are the questions it makes and the lessons that name it read
  ctx.soundGroups = new Set(s.placeGens.filter(g => !groupProblems(g, ctx).length).map(g => g.id));
  items.forEach(i => checkEach(check, `item ${i.id}`, itemProblems(i, `item ${i.id}`, ctx, false)));
  gens.forEach(g => checkEach(check, `generator ${g.id}`, s.engine.isPlaceGen(g) ? [...groupProblems(g, ctx), ...madeProblems(g, ctx)] : itemProblems(g, `generator ${g.id}`, ctx, true)));
  lessons.forEach(l => checkEach(check, `lesson ${l.id}`, lessonProblems(l, ctx)));
});

/* ---------- V71 ---------- */
const numberOf = id => Number((String(id).match(/(\d+)$/) || [])[1]);
export const V71 = subjectRule('V71', (s, check) => {
  const partIds = s.partIds;
  const problems = [];
  const byPart = {};
  s.lessonList.filter(l => l.part !== null).forEach(l => { byPart[l.part] = [...(byPart[l.part] || []), l.id]; });
  Object.entries(byPart).forEach(([p, ids]) => {
    if (!partIds.includes(p)) ids.forEach(id => problems.push(`lesson ${id} is for part "${p}", which is not a part of the subject`));
    if (ids.length > 1) problems.push(`part "${p}" has more than one lesson: ${ids.join(', ')}`);
  });
  if (s.meta.complete) partIds.filter(p => !byPart[p]).forEach(p => problems.push(`part "${p}" has no lesson, and the subject says it is complete`));
  const ordered = s.sortedLessons.filter(l => l.part !== null).map(l => partIds.indexOf(l.part));
  if (ordered.some((x, i) => i > 0 && x < ordered[i - 1])) problems.push('the lessons are not in part order: lesson numbers must rise with the parts');
  problems.push(...unitProblems(s.meta.units, partIds));
  checkEach(check, 'lessons and parts', problems);
});
// A subject's units, when it has them, hold every part once, in part order, a run each.
function unitProblems(units, partIds) {
  if (!units) return [];
  const listed = units.flatMap(u => u.parts);
  return [
    ...duplicatesOf(units.map(u => u.id)).map(id => `unit "${id}" appears twice`),
    ...units.filter(u => !u.parts.length).map(u => `unit "${u.id}" holds no part`),
    ...listed.filter(p => !partIds.includes(p)).map(p => `a unit holds part "${p}", which is not a part of the subject`),
    ...partIds.filter(p => !listed.includes(p)).map(p => `part "${p}" is in no unit`),
    ...duplicatesOf(listed).map(p => `part "${p}" is in more than one unit`),
    ...(listed.join() !== partIds.filter(p => listed.includes(p)).join() ? ['the units do not hold the parts in their order'] : [])
  ];
}

/* ---------- V81 ---------- */
const PRIVATE_FIELD = /account\s*(number|no\b|#)|acct|routing|iban|swift|\bpassword\b|passcode|\bpin\b|log-?in|username|user\s*name|social\s*security|\bssn\b|card\s*number/i;
export const V81 = subjectRule('V81', (s, check) => {
  const problems = [];
  Object.entries(s.meta.own || {}).forEach(([formId, form]) => {
    if (!SLOTS.includes(form.into)) problems.push(`form ${formId} writes into "${form.into}", which is not a slot of the learner's private data`);
    [...form.fields, ...(form.rows ? form.rows.fields : []), ...(form.groups || []).flatMap(g => g.fields)].forEach(f => {
      if (PRIVATE_FIELD.test(f.label) || PRIVATE_FIELD.test(f.id)) problems.push(`form ${formId} has a field "${f.label}", which would hold an account number, a login, a password or a Social Security number`);
    });
  });
  checkEach(check, 'private forms', problems);
});

/* ---------- V56 ---------- */
export const V56 = subjectRule('V56', (s, check) => {
  checkEach(check, 'lesson titles', duplicatesOf(s.lessonList.map(l => l.title)).map(t => `two lessons are titled "${t}"`));
});

export const RULES_SHAPE = [V70, V71, V81, V56];
