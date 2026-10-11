/* ===================== LESSONS: WHAT AN ITEM LOOKS LIKE ===================== */
// Lesson standard 26.1.2 (blocks) and 26.2 (feedback). Pure HTML builders: the blocks an item shows, the asks, and the feedback
// that opens when the last ask is answered. Nothing here stores anything or reads the page.
// ctx for a block: { deciding: [segmentId] } marks those segments with the one highlight (mark.cue).

/* ---------- blocks ---------- */
const segmentHtml = (seg, ctx) => (ctx.deciding || []).includes(seg.id)
  ? `<mark class="cue" data-seg="${esc(seg.id)}">${esc(seg.text)}</mark>` : `<span data-seg="${esc(seg.id)}">${esc(seg.text)}</span>`;
// the text of a prose block as paragraphs: plain text, or lines that can be marked
function proseParas(block, ctx){
  return block.lines ? [`<p>${block.lines.map(seg => segmentHtml(seg, ctx)).join(' ')}</p>`] : paras(block.text).map(p => `<p>${esc(p)}</p>`);
}
function proseHtml(block, ctx){
  if(block.tone !== 'wrong') return `<div class="block-prose lesson">${proseParas(block, ctx).join('')}</div>`;
  // a wrong idea, marked wrong: every paragraph but the last, then the right line
  const all = block.lines ? block.lines.map(seg => `<p>${segmentHtml(seg, ctx)}</p>`) : proseParas(block, ctx);
  const wrong = all.slice(0, -1), right = all.slice(-1);
  return `<div class="block-prose lesson"><div class="wrongidea"><span class="m lab">${esc(SAY.wrongIdea)}</span>${wrong.join('') || right.join('')}</div>${wrong.length ? right.join('') : ''}</div>`;
}
function pairHtml(block, ctx){
  return `<div class="block-pair"><div class="pairgrid"><div class="pairside">${blockHtml(block.a, ctx)}</div><div class="pairside">${blockHtml(block.b, ctx)}</div></div>
    <p class="compare"><span class="m lab">${esc(SAY.compare)}</span>${esc(paras(block.compare).join(' '))}</p></div>`;
}
const BLOCK_HTML = { prose: proseHtml, pair: pairHtml, pitch: (block, ctx) => pitchHtml(block, ctx), document: (block, ctx) => documentHtml(block, ctx), figure: block => figureHtml(block) };
function blockHtml(block, ctx = {}){
  return (BLOCK_HTML[block.kind] || lessonFail(`unknown block kind ${block.kind}`))(block, ctx);
}
const blocksHtml = (blocks, ctx) => `<div class="blocks">${blocks.map(b => blockHtml(b, ctx)).join('')}</div>`;
// every segment of a block, pairs included; the rows of a document are its segments
const segmentsOf = block => block.kind === 'pair' ? [...segmentsOf(block.a), ...segmentsOf(block.b)]
  : block.kind === 'document' ? block.rows.map(row => ({ id: row.id, text: row.cells.join(' ') })) : (block.lines || []);

/* ---------- asks ---------- */
// st: { answer, many: [optionId], marks } for this ask. `marks` shows right and wrong on the options (after the item).
function chooseHtml(data, ask, st){
  const options = chooseOptions(data, ask), locked = st.answer !== undefined || st.marks, picked = ask.many ? (st.answer || st.many || []) : asList(st.answer);
  const buttons = options.map(o => {
    const cls = ['opt', picked.includes(o.id) ? 'sel' : '', st.marks && o.ok ? 'right' : '', st.marks && picked.includes(o.id) && !o.ok ? 'wrong' : ''].filter(Boolean).join(' ');
    return `<button class="${cls}" data-opt="${esc(o.id)}" ${locked ? 'disabled' : ''} aria-pressed="${picked.includes(o.id)}">${esc(o.text)}</button>`;
  }).join('');
  const submit = ask.many && !locked ? `<button class="btn sm" data-answer="${esc(ask.id)}" ${(st.many || []).length ? '' : 'disabled'}>${SAY.answerBtn}</button>` : '';
  return `<div class="stepopen prompt" data-ask="${esc(ask.id)}"><p class="stem">${esc(paras(ask.prompt).join(' '))}</p>
    <span class="forline">${esc(ask.many ? SAY.chooseMany : SAY.chooseOne)}</span><div class="opts">${buttons}</div>${submit}</div>`;
}
const ASK_HTML = { choose: chooseHtml, number: (data, ask, st, ctx) => numberHtml(data, ask, st, ctx), sing: (data, ask, st) => singAskHtml(data, ask, st) };

/* ---------- the item ---------- */
// The item as it stands: its blocks (deciding words marked when `deciding` is on), then the asks open now, then, once
// `feedback` is given, the feedback. state: { a, many, marks, feedback: html|'' , support, sing, typed, looked, calc }
// `sing` is the view of a sung question (sing-run.js): the strip and the controls are drawn from it. `typed`, `looked` and `calc` are what
// is in the boxes of a typed number, whether its "disagree" line has been shown, and the calculator (number-run.js).
function itemHtml(data, inst, state){
  const item = inst.item, support = state.support || null;
  const open = openAsks(item, support, state.a);
  const marked = state.marks || (support && support.shown);
  const ctx = { deciding: marked ? item.deciding || [] : [], sing: state.sing || null };
  const steps = shownStepsHtml(item, support);
  const hint = support && support.shown && (item.deciding || []).length ? `<p class="hintline">${esc(SAY.helpMarked)}</p>` : '';
  const asks = open.map(a => ASK_HTML[a.kind](data, a, { answer: state.a[a.id], many: state.many[a.id], marks: state.marks, sing: state.sing,
    typed: state.typed, looked: state.looked, calc: state.calc }, { item, support, answers: state.a })).join('');
  return `<div class="item" data-item="${esc(inst.key)}" ${inst.seed === undefined ? '' : `data-seed="${inst.seed}"`}>
    ${blocksHtml(item.blocks, ctx)}${hint}${steps}<div class="asks">${asks}</div>${state.feedback || ''}</div>`;
}
// the working a set's support shows before the learner answers: the steps that are not left to them
function shownStepsHtml(item, support){
  const shown = shownStepIds(item, support);
  if(!shown.length) return '';
  const list = (item.steps || []).filter(s => shown.includes(s.id));
  return `<div class="answerline"><span class="m lab">${esc(SAY.workingLabel)}</span><ol class="lsteps">${list.map(s => `<li><b>${esc(s.does)}</b> ${esc(s.working)}</li>`).join('')}</ol><p class="hintline">${esc(SAY.helpSteps)}</p></div>`;
}

/* ---------- feedback ---------- */
// In this order (26.2): each ask's mark; the deciding words (marked in the blocks by itemHtml); the reason; after a miss, one line on
// the learner's own choice; then what the item has of: the consequence of the right action, what you would need to see, the working.
function feedbackHtml(data, inst, support, answers, score){
  const item = inst.item, asked = askedAsks(item, support).filter(a => a.id in score.r);
  const marks = asked.map(a => markHtml(data, a, answers[a.id], score.r[a.id], item, answers)).join('');
  const misses = asked.filter(a => score.r[a.id] !== 'ok').map(a => missLine(data, a, answers[a.id], score.r[a.id])).join('');
  const consequences = asked.filter(a => a.kind === 'choose').flatMap(a => chooseOptions(data, a).filter(o => o.ok && o.then).map(o => o.then));
  const picture = item.figure ? `<div class="vblock">${blockHtml(item.figure, {})}</div>` : '';
  const working = (item.steps || []).length ? `<div class="vblock soft">${lessonLabel(SAY.workingLabel)}<ol class="lsteps">${item.steps.map(s => `<li><b>${esc(s.does)}</b> ${esc(s.working)}</li>`).join('')}</ol></div>` : '';
  const block = (label, text) => text.length ? `<div class="vblock">${lessonLabel(label)}${text.map(p => `<p>${esc(p)}</p>`).join('')}</div>` : '';
  return `<div class="feedback" data-feedback><div class="marks">${marks}</div>
    ${block(SAY.whyLabel, paras(item.reason))}${misses}${block(SAY.consequence, consequences.flatMap(paras))}${block(SAY.needLabel, paras(item.need))}${picture}${working}</div>`;
}
// one ask's mark: right, or the right answer (a choice); the words for how the voice sat (a sung answer)
function markHtml(data, ask, answer, result, item, answers){
  const ok = result === 'ok';
  if(ask.kind === 'sing') return singMarksHtml(ask, answer, ok);
  if(ask.kind === 'number') return numberMarkHtml(ask, answer, result, item, answers);
  const right = chooseOptions(data, ask).filter(o => o.ok).map(o => o.text);
  return `<div class="mark ${ok ? '' : 'no'}"><span class="verd">${esc(ok ? SAY.markRight : SAY.markNo)}</span><span class="ans">${esc(ok ? right.join('; ') : `${SAY.theAnswer}: ${right.join('; ')}`)}</span></div>`;
}
// "You chose X. <what happens>" for a wrong answer; a slip with no line of its own is named from the subject's list of slips
function missLine(data, ask, answer, result){
  if(ask.kind === 'sing') return singMissHtml(ask, answer);
  if(ask.kind === 'number') return numberMissHtml(data, ask, answer, result);
  const options = chooseOptions(data, ask), chosen = asList(answer).map(id => options.find(o => o.id === id)).filter(o => o && !o.ok);
  const lines = chosen.map(o => `<p><b>${esc(SAY.youChose)}: ${esc(o.text)}.</b> ${esc(o.then ? paras(o.then).join(' ') : o.slip ? SAY.slipLine(slipText(data, o.slip)) : '')}</p>`);
  return lines.length ? `<div class="vblock">${lines.join('')}</div>` : '';
}
