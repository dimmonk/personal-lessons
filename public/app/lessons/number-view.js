/* ===================== LESSONS: A TYPED NUMBER ON SCREEN ===================== */
// Lesson standard 26.1 and 26.2. The HTML of a `number` ask (the boxes of its frame, the calculator, the "disagree" line), and what it
// leaves in the feedback (its mark, the line about the learner's own answer). Pure string builders: nothing here reads the page.
//   st: { answer?: [numbers], marks, typed?: { [askId]: [text] }, looked?: { [askId]: true }, calc?: { open, st } }
//   ctx: { item, support, answers }

// four columns; the zero is two wide
const CALC_LAYOUT = ['C', 'B', '/', '*', '7', '8', '9', '-', '4', '5', '6', '+', '1', '2', '3', '=', '0', '.'];
const CALC_FACE = { C: 'C', B: '⌫', '/': '÷', '*': '×', '-': '−' };
const calcFace = key => CALC_FACE[key] || key;

function calcHtml(calc){
  const keys = CALC_LAYOUT.map(k => `<button type="button" class="calc-key ${/\d/.test(k) ? 'num' : 'op'} ${k === '0' ? 'wide' : ''}" data-calc-key="${esc(k)}" aria-label="${esc(SAY.calcName[k] || k)}">${esc(calcFace(k))}</button>`).join('');
  return `<div class="calc" data-calc ${calc.open ? '' : 'hidden'}><output class="calc-display" data-calc-display aria-live="polite">${esc(calc.st.shown)}</output>
    <div class="calc-grid">${keys}</div><button type="button" class="btn ghost sm" data-calc-use>${esc(SAY.calcUse)}</button></div>`;
}

// the boxes and the words around them, from the frame: "$__ each" is "$", a box, " each"
function frameHtml(ask, values, locked){
  const parts = frameParts(ask), many = parts.length > 2;
  return parts.map((text, i) => {
    const label = many ? SAY.numberBoxN(i + 1) : ask.estimate ? SAY.numberBoxEstimate : SAY.numberBox;
    const box = i < parts.length - 1
      ? `<input class="numbox" type="text" inputmode="decimal" autocomplete="off" autocapitalize="off" spellcheck="false" enterkeyhint="done" data-slot="${i}"
          value="${esc(values[i] === undefined ? '' : values[i])}" aria-label="${esc(label)}" ${locked ? 'disabled' : ''}>` : '';
    return (text ? `<span class="numtext">${esc(text)}</span>` : '') + box;
  }).join('') + (ask.unit ? `<span class="numtext">${esc(ask.unit)}</span>` : '');
}

function numberHtml(data, ask, st, ctx){
  const answered = st.answer !== undefined, locked = answered || st.marks, estimate = isEstimateAsk(ask);
  const drafts = (st.typed && st.typed[ask.id]) || [], values = answered ? asList(st.answer).map(typedText) : drafts;
  const ready = !locked && values.length === slotCount(ask) && values.every(v => parseTyped(v) !== null);
  const calc = st.calc || { open: false, st: CALC_START };
  const looked = !locked && st.looked && st.looked[ask.id];
  const guess = looked ? estimateTyped(ctx.item, ctx.answers) : null;
  const disagree = looked && guess !== null
    ? `<p class="hintline estcheck" role="status" data-estimate-check>${esc(SAY.estimateDisagree(fmtNumber(guess), fmtNumber(parseTyped(drafts[0]))))}</p>` : '';
  const tools = locked ? '' : `<div class="numacts">${estimate ? '' : `<button type="button" class="btn ghost sm" data-calc-toggle aria-expanded="${calc.open}">${esc(SAY.calculator)}</button>`}
    <button type="button" class="btn sm" data-num-answer="${esc(ask.id)}" ${ready ? '' : 'disabled'}>${esc(SAY.answerBtn)}</button></div>`;
  return `<div class="stepopen prompt numask" data-ask="${esc(ask.id)}" ${estimate ? 'data-estimate' : ''}><p class="stem">${esc(paras(ask.prompt).join(' '))}</p>
    ${locked ? '' : `<span class="forline">${esc(estimate ? SAY.numberEstimateHint : SAY.numberHint)}</span>`}
    <div class="numframe">${frameHtml(ask, values, locked)}</div>${locked || estimate ? '' : calcHtml(calc)}${disagree}${tools}</div>`;
}

/* ---------- what it leaves in the feedback ---------- */
// what the learner typed, in the words of the frame and with the decimals of the answer ("$68.00"); the unit is left off
const typedFrame = (ask, numbers) => frameFilled({ ...ask, unit: undefined }, numbers);

function numberMarkHtml(ask, answer, result, item, answers){
  const ok = result === 'ok', want = numberAnswers(item, ask), typed = asList(answer), exact = frameFilled(ask, want);
  let text;
  if(isEstimateAsk(ask)) text = SAY.estimateLine(typedFrame(ask, typed), exact, estimateOff(typed[0], want[0]));
  else {
    const guess = estimateTyped(item, answers), estimateAsk = (item.asks || []).find(isEstimateAsk);
    text = guess === null ? `${ok ? '' : `${SAY.theAnswer}: `}${exact}` : `${ok ? '' : `${SAY.theAnswer}: `}${exact}. ${SAY.yourEstimate(typedFrame(estimateAsk, [guess]))}`;
  }
  return `<div class="mark ${ok ? '' : 'no'}"><span class="verd">${esc(ok ? SAY.markRight : SAY.markNo)}</span><span class="ans">${esc(text)}</span></div>`;
}
// "You typed $5.20. That is the answer you get when ...": the named slip's own line, else the slip's name from the subject's list
function numberMissHtml(data, ask, answer, result){
  if(isEstimateAsk(ask)) return '';
  const trap = (ask.traps || []).find(t => t.slip === result);
  const line = result === 'no' ? '' : trap && trap.then ? paras(trap.then).join(' ') : SAY.slipLine(slipText(data, result));
  return `<div class="vblock"><p><b>${esc(SAY.youTyped(typedFrame(ask, asList(answer))))}</b> ${esc(line)}</p></div>`;
}
// the right answer, as the worked example and the mark print it
const numberRightText = (ask, item) => frameFilled(ask, numberAnswers(item, ask));
