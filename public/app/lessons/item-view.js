/* ===================== LESSONS: WHAT AN ITEM LOOKS LIKE ===================== */
// Lesson standard 3.9 (blocks) and 4 (feedback). Pure HTML builders: the blocks an item shows, the asks, and the feedback
// that opens when the last ask is answered. Nothing here stores anything or reads the page.
// ctx for a block: { deciding: [segmentId] } marks those segments with the one highlight (mark.cue); { tap } makes the lines of an open tap ask
// buttons, and after the answer shows which were tapped: tap = { ids: [segmentId], picked: [segmentId], locked, marks, right: [segmentId] };
// { panel: false } hides a panel block (a group without the help `panel`, a check, the review); on a teaching screen it is not set and a panel shows.

/* ---------- blocks ---------- */
// One segment: marked when it decides the answer, a button while a tap ask is open on it, and after that ask is answered the line the learner
// tapped (right or wrong once the answer is shown). Small print (`fine`) is drawn small.
function segmentHtml(seg, ctx){
  const marked = (ctx.deciding || []).includes(seg.id), tap = ctx.tap && ctx.tap.ids.includes(seg.id) ? ctx.tap : null;
  const picked = !!tap && tap.picked.includes(seg.id), fine = seg.fine ? ' fine' : '';
  if(tap && !tap.locked){
    return `<button type="button" class="tapseg${picked ? ' on' : ''}${fine}" data-tap="${esc(seg.id)}" data-seg="${esc(seg.id)}" aria-pressed="${picked}">${marked ? `<mark class="cue">${esc(seg.text)}</mark>` : esc(seg.text)}</button>`;
  }
  const tapped = picked ? (tap.marks ? ` tapped ${tap.right.includes(seg.id) ? 'right' : 'wrong'}` : ' tapped') : '';
  const extra = (tapped + fine).trim();
  return marked ? `<mark class="cue${extra ? ' ' + extra : ''}" data-seg="${esc(seg.id)}">${esc(seg.text)}</mark>` : `<span ${extra ? `class="${extra}" ` : ''}data-seg="${esc(seg.id)}">${esc(seg.text)}</span>`;
}
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
const BLOCK_HTML = { prose: proseHtml, pair: pairHtml, pitch: (block, ctx) => pitchHtml(block, ctx), document: (block, ctx) => documentHtml(block, ctx), figure: block => figureHtml(block),
  ref: (block, ctx) => refHtml(block, ctx), article: (block, ctx) => articleHtml(block, ctx), chart: block => chartHtml(block), panel: (block, ctx) => panelHtml(block, ctx), message: (block, ctx) => messageHtml(block, ctx),
  spoken: (block, ctx) => spokenHtml(block, ctx) };
function blockHtml(block, ctx = {}){
  return (BLOCK_HTML[block.kind] || lessonFail(`unknown block kind ${block.kind}`))(block, ctx);
}
const blocksHtml = (blocks, ctx) => `<div class="blocks">${blockPieces(blocks).map(p => p.tabs ? documentTabsHtml(p.tabs, ctx) : blockHtml(p.block, ctx)).join('')}</div>`;
// every segment of a block, pairs included; the rows of a document are its segments, and the headline of an article is the first of its
const segmentsOf = block => block.kind === 'pair' ? [...segmentsOf(block.a), ...segmentsOf(block.b)]
  : block.kind === 'document' ? block.rows.map(row => ({ id: row.id, text: row.cells.join(' ') }))
  : block.kind === 'article' && block.headline ? [block.headline, ...block.lines] : (block.lines || []);

/* ---------- asks ---------- */
// A made question whose right option would always sit in one place says `shuffle`: its options are shown in an order that depends on its
// seed, the same each time the same question is shown (the order is never stored).
const shownOptions = (options, ask, ctx) => ask.shuffle && ctx && ctx.item && ctx.item.seed !== undefined ? shuffled(options, hashSeed(`${ctx.item.seed}|${ask.id}`)) : options;
// st: { answer, many: [optionId], marks } for this ask. `marks` shows right and wrong on the options (after the item).
function chooseHtml(data, ask, st, ctx){
  const options = shownOptions(chooseOptions(data, ask), ask, ctx), locked = st.answer !== undefined || st.marks || st.locked, picked = ask.many ? (st.answer || st.many || []) : asList(st.answer);
  const buttons = options.map(o => {
    const cls = ['opt', picked.includes(o.id) ? 'sel' : '', st.marks && o.ok ? 'right' : '', st.marks && picked.includes(o.id) && !o.ok ? 'wrong' : ''].filter(Boolean).join(' ');
    return `<button class="${cls}" data-opt="${esc(o.id)}" ${locked ? 'disabled' : ''} aria-pressed="${picked.includes(o.id)}">${esc(o.text)}</button>`;
  }).join('');
  const submit = ask.many && !locked ? `<button class="btn sm" data-answer="${esc(ask.id)}" ${(st.many || []).length ? '' : 'disabled'}>${SAY.answerBtn}</button>` : '';
  return `<div class="stepopen prompt" data-ask="${esc(ask.id)}"><p class="stem">${esc(paras(ask.prompt).join(' '))}</p>
    <span class="forline">${esc(ask.many ? SAY.chooseMany : SAY.chooseOne)}</span><div class="opts">${buttons}</div>${submit}</div>`;
}
// A tap ask: the prompt, and the buttons that are not lines of the text ("Not given", and Answer when several lines are wanted). The lines
// themselves are tapped where they stand, in the blocks above (segmentHtml).
function tapHtml(data, ask, st){
  const answered = st.answer !== undefined, locked = answered || st.marks || st.locked, picked = answered ? asList(st.answer) : (st.many || []), n = tapPick(ask);
  const none = ask.none ? `<button type="button" class="opt${picked.includes(TAP_NONE) ? ' sel' : ''}${st.marks && ask.right === TAP_NONE ? ' right' : ''}${st.marks && picked.includes(TAP_NONE) && ask.right !== TAP_NONE ? ' wrong' : ''}" data-tap-none
    ${locked ? 'disabled' : ''} aria-pressed="${picked.includes(TAP_NONE)}">${esc(paras(ask.none).join(' '))}</button>` : '';
  const submit = n > 1 && !locked ? `<button type="button" class="btn sm" data-tap-answer ${tapReady(ask, picked) ? '' : 'disabled'}>${esc(SAY.answerBtn)}</button>` : '';
  return `<div class="stepopen prompt tapask" data-ask="${esc(ask.id)}"><p class="stem">${esc(paras(ask.prompt).join(' '))}</p>
    <span class="forline">${esc(n > 1 ? SAY.tapMany(n) : SAY.tapOne)}</span>${none ? `<div class="opts">${none}</div>` : ''}${submit}</div>`;
}
const ASK_HTML = { choose: chooseHtml, number: (data, ask, st, ctx) => numberHtml(data, ask, st, ctx), form: (data, ask, st, ctx) => formHtml(data, ask, st, ctx), sing: (data, ask, st) => singAskHtml(data, ask, st),
  tap: (data, ask, st) => tapHtml(data, ask, st), text: (data, ask, st) => isRecallAsk(ask) ? recallAskHtml(data, ask, st) : writeHtml(data, ask, st),
  exchange: (data, ask, st, ctx) => exchangeHtml(data, ask, st, ctx), order: (data, ask, st, ctx) => orderHtml(data, ask, st, ctx) };

/* ---------- the item ---------- */
// The item as it stands: its blocks (deciding words marked when `deciding` is on), then the asks open now, then, once
// `feedback` is given, the feedback. state: { a, many, marks, feedback: html|'' , support, sing, typed, looked, calc }
// `sing` is the view of a sung question (sing-run.js): the strip and the controls are drawn from it. `typed`, `looked` and `calc` are what
// is in the boxes of a typed number, whether its "disagree" line has been shown, and the calculator (number-run.js). `speech` is what a question
// read aloud needs to know (speech-run.js).
function itemHtml(data, inst, state){
  const item = inst.item, support = state.support || null;
  const open = openAsks(item, support, state.a);
  const marked = state.marks || (support && support.shown);
  const ctx = { deciding: marked ? item.deciding || [] : [], sing: state.sing || null, data, scope: `${inst.key}|${inst.seed === undefined ? '' : inst.seed}`, tap: tapContext(item, open, state), speech: state.speech || null,
    panel: !!(support && support.panel) };
  const steps = shownStepsHtml(item, support);
  const hint = (support && support.shown && (item.deciding || []).length ? `<p class="hintline">${esc(SAY.helpMarked)}</p>` : '')
    + (support && support.panel && panelBlocksOf(item).length ? `<p class="hintline">${esc(panelHint(data, item))}</p>` : '');
  const asks = open.map(a => ASK_HTML[a.kind](data, a, { answer: state.a[a.id], many: state.many[a.id], marks: state.marks, locked: !!state.done, sing: state.sing,
    typed: state.typed, looked: state.looked, calc: state.calc }, { item, support, answers: state.a })).join('');
  return `<div class="item" data-item="${esc(inst.key)}" ${inst.seed === undefined ? '' : `data-seed="${inst.seed}"`}>
    ${blocksHtml(item.blocks, ctx)}${hint}${steps}<div class="asks">${asks}</div>${state.feedback || ''}</div>`;
}
// What the blocks need to know about the tap ask that is open on the question (at most one): which lines can be tapped, which were, and which
// are right. The lines are only tappable once the ask is open; before that, and for a question with no tap, it is null.
function tapContext(item, open, state){
  const ask = open.find(a => a.kind === 'tap');
  if(!ask) return null;
  const answered = ask.id in state.a;
  return { ids: tapSegments(item, ask).map(s => s.id), picked: answered ? asList(state.a[ask.id]) : (state.many[ask.id] || []), locked: answered || !!state.marks || !!state.done, marks: !!state.marks, right: tapRightIds(ask) };
}
// the working a set's support shows before the learner answers: the steps that are not left to them
function shownStepsHtml(item, support){
  const shown = shownStepIds(item, support);
  if(!shown.length) return '';
  const list = (item.steps || []).filter(s => shown.includes(s.id));
  return `<div class="answerline"><span class="m lab">${esc(SAY.workingLabel)}</span><ol class="lsteps">${list.map(s => `<li><b>${esc(s.does)}</b> ${esc(s.working)}</li>`).join('')}</ol><p class="hintline">${esc(SAY.helpSteps)}</p></div>`;
}

/* ---------- feedback ---------- */
// In this order (4): each ask's mark; the deciding words (marked in the blocks by itemHtml); the reason; after a miss, one line on
// the learner's own choice; then what the item has of: the consequence of the right action, what you would need to see, the working.
// opts: { claim } offers "my answer means the same" under a missed answer from memory (not in a baseline); { at } is the place of the question in
// the list of answers shown at the end of a run, so the button knows which one it is.
function feedbackHtml(data, inst, support, answers, score, opts = {}){
  const item = inst.item, asked = askedAsks(item, support).filter(a => a.id in answers || score.r[a.id] === 'timeout');
  const marks = asked.map(a => markHtml(data, a, answers[a.id], score.r[a.id], item, answers)).join('');
  const recalled = asked.filter(isRecallAsk);
  const accepted = recalled.map(a => recallListHtml(a, answers[a.id]) + (opts.claim ? recallClaimHtml(a, answers[a.id], score.r[a.id], opts.at) : '')).join('');
  const written = asked.some(a => a.kind === 'text' && !isRecallAsk(a)) ? `<p class="hintline">${esc(SAY.writeCompare)}</p>` : '';
  const misses = asked.filter(a => askIsScored(a) && score.r[a.id] !== 'ok').map(a => missLine(data, a, answers[a.id], score.r[a.id], item)).join('');
  const pushed = asked.filter(a => a.kind === 'exchange' && a.id in answers).map(a => exchangeReviewHtml(a, answers[a.id])).join('');
  const consequences = asked.filter(a => a.kind === 'choose').flatMap(a => chooseOptions(data, a).filter(o => o.ok && o.then).map(o => o.then));
  const picture = item.figure ? `<div class="vblock">${blockHtml(item.figure, { data })}</div>` : '';
  const redrawn = item.redraw === 'from-zero' ? redrawHtml(item) : '';
  const working = (item.steps || []).length ? `<div class="vblock soft">${lessonLabel(SAY.workingLabel)}<ol class="lsteps">${item.steps.map(s => `<li><b>${esc(s.does)}</b> ${esc(s.working)}</li>`).join('')}</ol></div>` : '';
  const block = (label, text) => text.length ? `<div class="vblock">${lessonLabel(label)}${text.map(p => `<p>${esc(p)}</p>`).join('')}</div>` : '';
  return `<div class="feedback" data-feedback><div class="marks">${marks}</div>${accepted}${written}
    ${block(SAY.whyLabel, paras(item.reason))}${misses}${pushed}${block(SAY.consequence, consequences.flatMap(paras))}${block(SAY.needLabel, paras(item.need))}${hasHtml(data, item)}${factHtml(data, item)}${picture}${redrawn}${working}</div>`;
}
// the chart of a question whose axis was cut, drawn again from zero: the same numbers on the scale that does not exaggerate them
function redrawHtml(item){
  const chart = item.blocks.find(b => b.kind === 'chart');
  return `<div class="vblock">${lessonLabel(SAY.redrawLabel)}${chartHtml(chartFromZero(chart))}</div>`;
}
// one ask's mark: right, or the right answer (a choice); the words for how the voice sat (a sung answer)
function markHtml(data, ask, answer, result, item, answers){
  const ok = result === 'ok';
  if(result === 'timeout') return timeoutMarkHtml(data, ask, item);
  if(ask.kind === 'sing') return singMarksHtml(ask, answer, ok);
  if(ask.kind === 'exchange') return exchangeMarkHtml(ask, answer, result);
  if(ask.kind === 'order') return orderMarkHtml(ask, answer, result);
  if(ask.kind === 'number') return numberMarkHtml(ask, answer, result, item, answers);
  if(ask.kind === 'form') return formMarksHtml(data, ask, answer, item);
  if(ask.kind === 'text') return isRecallAsk(ask) ? recallMarkHtml(ask, answer, result) : writeMarkHtml(ask, answer);
  if(ask.kind === 'tap') return `<div class="mark ${ok ? '' : 'no'}"><span class="verd">${esc(ok ? SAY.markRight : SAY.markNo)}</span><span class="ans">${esc(ok ? tapRightText(ask, item) : `${SAY.theAnswer}: ${tapRightText(ask, item)}`)}</span></div>`;
  const right = chooseOptions(data, ask).filter(o => o.ok).map(o => o.text);
  return `<div class="mark ${ok ? '' : 'no'}"><span class="verd">${esc(ok ? SAY.markRight : SAY.markNo)}</span><span class="ans">${esc(ok ? right.join('; ') : `${SAY.theAnswer}: ${right.join('; ')}`)}</span></div>`;
}
// "You chose X. <what happens>" for a wrong answer; a slip with no line of its own is named from the subject's list of slips
function missLine(data, ask, answer, result, item){
  if(result === 'timeout') return `<div class="vblock"><p>${esc(SAY.timerUpLine)}</p></div>`;
  if(ask.kind === 'sing') return singMissHtml(ask, answer);
  if(ask.kind === 'exchange') return '';
  if(ask.kind === 'order') return orderMissHtml(ask, answer);
  if(ask.kind === 'number') return numberMissHtml(data, ask, answer, result);
  if(ask.kind === 'form') return formMissHtml(data, ask, answer, item);
  if(ask.kind === 'tap') return tapMissHtml(data, ask, answer, item);
  if(ask.kind === 'text') return '';
  const options = chooseOptions(data, ask), chosen = asList(answer).map(id => options.find(o => o.id === id)).filter(o => o && !o.ok);
  const lines = chosen.map(o => `<p><b>${esc(SAY.youChose)}: ${esc(o.text)}.</b> ${esc(o.then ? paras(o.then).join(' ') : o.slip ? SAY.slipLine(slipText(data, o.slip)) : '')}</p>`);
  return lines.length ? `<div class="vblock">${lines.join('')}</div>` : '';
}
// "You tapped “…”. <the line's own note> <the slip it names>" for a line that was not the one; "You chose: Not given." when a line was there
function tapMissHtml(data, ask, answer, item){
  const right = tapRightIds(ask), segs = tapSegments(item, ask);
  const lines = asList(answer).filter(id => !right.includes(id)).map(id => {
    if(id === TAP_NONE) return `<p><b>${esc(SAY.youChose)}: ${esc(paras(ask.none).join(' '))}.</b> ${esc(SAY.tapThereIsOne)}</p>`;
    const seg = segs.find(s => s.id === id) || { text: id }, parts = [seg.note, seg.slip ? SAY.slipLine(slipText(data, seg.slip)) : null].filter(Boolean);
    return `<p><b>${esc(SAY.youTapped)}: “${esc(tapClip(seg.text))}”</b> ${esc(parts.length ? parts.join(' ') : SAY.tapNotThat)}</p>`;
  });
  return lines.length ? `<div class="vblock">${lines.join('')}</div>` : '';
}
// an ask that ran out of time: no answer was given, so the mark is the time and the right answer
function timeoutMarkHtml(data, ask, item){
  const right = ask.kind === 'choose' ? chooseOptions(data, ask).filter(o => o.ok).map(o => o.text).join('; ')
    : ask.kind === 'order' ? orderRightText(ask) : ask.kind === 'tap' ? tapRightText(ask, item) : '';
  return `<div class="mark no"><span class="verd">${esc(SAY.timerUp)}</span>${right ? `<span class="ans">${esc(`${SAY.theAnswer}: ${right}`)}</span>` : ''}</div>`;
}
