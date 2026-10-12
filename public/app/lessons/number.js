/* ===================== LESSONS: TYPED NUMBERS ===================== */
// Lesson standard 26.1 (the `number` ask), 26.2 (the estimate, and "your answer and your estimate disagree"). Pure: no page and no
// storage, so the player, the validator and the tests all score a typed number the same way.
//   ask   { id, kind: 'number', prompt, frame?: 'from __ in 1,000 to __ in 1,000', unit?, places?, answer: value | [value, ...],
//           tol: { abs?, rel? } | { round } | { band: [least, most] }, estimate?: true, traps?: [{ slip, value, then? }], when? }
//   A value is a number, or the name of a number the question makes (a generator's `make`). One value per blank of the frame.
//   An answer is stored as the list of numbers typed, one per blank. The result is 'ok', the id of the slip it matches, or 'no'.
//   An estimate is its own ask, placed before the exact one: it has no calculator and, with no `tol`, is right within half to double.

const NUMBER_BAND = [0.5, 2];        // an estimate with no tolerance of its own: right from half to double the exact answer
const NUMBER_EPS = 1e-9;
const FRAME_BLANK = '__';

/* ---------- what is typed ---------- */
// "$1,234.50", "12.5", " 7 ", "40%", "-3" -> a number; anything else (words, a stray comma, nothing) -> null
function parseTyped(text){
  const s = String(text).trim().replace(/^(-?)\$/, '$1').replace(/%$/, '').trim();
  const grouped = /^-?\d{1,3}(,\d{3})+(\.\d*)?$/.test(s), plain = /^-?(\d+(\.\d*)?|\.\d+)$/.test(s);
  return grouped || plain ? Number(s.replace(/,/g, '')) : null;
}
// A number as the learner reads it: thousands marked, whole numbers whole. `places` fixes the decimals (money: 2).
function fmtNumber(value, places){
  const fixed = places !== undefined;
  return value.toLocaleString('en-US', { minimumFractionDigits: fixed ? places : 0, maximumFractionDigits: fixed ? places : 2 });
}
const typedText = value => String(value);   // a number back into a box: no thousands marks, so it can be edited

/* ---------- the frame and the answer ---------- */
const frameParts = ask => (ask.frame || FRAME_BLANK).split(FRAME_BLANK);
const slotCount = ask => frameParts(ask).length - 1;
// the number a value stands for in a question: a number as it is, a name read from what the question made
function numberValue(item, value){
  const v = typeof value === 'number' ? value : (item.values || {})[value];
  return typeof v === 'number' && Number.isFinite(v) ? v : lessonFail(`${item.id}: "${value}" is not a number the question makes`);
}
const numberAnswers = (item, ask) => asList(ask.answer).map(v => numberValue(item, v));
// the frame with numbers in its blanks: "$26.17", "from 40 in 1,000 to 60 in 1,000", with the unit after
function frameFilled(ask, numbers){
  const parts = frameParts(ask), text = parts.map((p, i) => p + (i < numbers.length ? fmtNumber(numbers[i], ask.places) : '')).join('');
  return ask.unit ? `${text} ${ask.unit}` : text;
}

/* ---------- scoring ---------- */
const isEstimateAsk = ask => ask.kind === 'number' && !!ask.estimate;
const tolOf = ask => ask.tol || (ask.estimate ? { band: NUMBER_BAND } : lessonFail(`${ask.id}: a number has no tolerance`));
// `round` is the stated rounding: both numbers rounded to the same step must be the same. `band` is from least to most times the
// answer. `abs` and `rel` are distances; a number within either is right.
function withinTol(typed, answer, tol){
  const distance = Math.abs(typed - answer);
  if('round' in tol) return Math.round(typed / tol.round + NUMBER_EPS) === Math.round(answer / tol.round + NUMBER_EPS);
  if('band' in tol) return typed >= tol.band[0] * answer - NUMBER_EPS && typed <= tol.band[1] * answer + NUMBER_EPS;
  return ('abs' in tol && distance <= tol.abs + NUMBER_EPS) || ('rel' in tol && distance <= tol.rel * Math.abs(answer) + NUMBER_EPS);
}
const numbersMatch = (typed, want, tol) => typed.length === want.length && want.every((v, i) => typeof typed[i] === 'number' && withinTol(typed[i], v, tol));
// 'ok', the id of the slip whose value the answer matches, or 'no'
function scoreNumber(data, ask, answer, item){
  const typed = asList(answer), tol = tolOf(ask);
  if(numbersMatch(typed, numberAnswers(item, ask), tol)) return 'ok';
  const slip = (ask.traps || []).find(t => numbersMatch(typed, numberAnswers(item, { answer: t.value }), tol));
  return slip ? slip.slip : 'no';
}

/* ---------- the estimate ---------- */
// The estimate the learner typed before this exact answer: the first estimate ask of the item that has been answered
function estimateTyped(item, answers){
  const ask = (item.asks || []).find(a => isEstimateAsk(a) && a.id in answers);
  return ask ? asList(answers[ask.id])[0] : null;
}
// "Your answer and your estimate disagree" (26.2): the answer is more than double, or less than half, of the learner's own estimate.
// Only in practice (the caller passes the group's support), only on an exact ask, never on the estimate itself.
const estimateCheckOn = support => !!(support && support.estimateCheck);
function estimatesDisagree(item, support, ask, answers, typed){
  if(!estimateCheckOn(support) || isEstimateAsk(ask)) return false;
  const guess = estimateTyped(item, answers);
  return guess !== null && (typed[0] > guess * 2 || typed[0] < guess / 2);
}
// how far a typed estimate is from the exact answer: { pct: whole percent, dir: 'over' | 'under' | 'same' }
function estimateOff(typed, exact){
  const dir = typed > exact ? 'over' : typed < exact ? 'under' : 'same';
  return { pct: exact === 0 ? 0 : Math.round(Math.abs(typed - exact) / Math.abs(exact) * 100), dir };
}

/* ---------- the calculator ---------- */
// A four-function calculator that follows the usual order of operations: × and ÷ before + and −, as on a phone held sideways and as in
// the sum a receipt writes ("5 × $11.09 + 3 × $9.09"). The keys pressed so far are kept as `tokens`, [number, operator, number, ...], and
// worked out whole at "=", so no sum of products needs a memory key. State is replaced at every press, never changed.
//   { shown: '0', tokens: [], fresh: true, error: false }     `fresh`: the next digit starts a number (and an operator key replaces the last)
const CALC_START = { shown: '0', tokens: [], fresh: true, error: false };
const CALC_OPS = ['+', '-', '*', '/'];
const CALC_MAX_DIGITS = 12;
const CALC_ERROR = { ...CALC_START, shown: 'Error', error: true };
const calcIsMul = op => op === '*' || op === '/';
// one operation, to twelve figures; null for dividing by nothing
function calcOp(a, op, b){
  const out = op === '+' ? a + b : op === '-' ? a - b : op === '*' ? a * b : b === 0 ? NaN : a / b;
  return Number.isFinite(out) ? Number(out.toPrecision(12)) : null;
}
// [number, operator, number, ...] worked out with × and ÷ first; null for an error
function calcFold(tokens){
  let total = 0, addOp = '+', term = tokens[0];
  for(let i = 1; i <= tokens.length; i += 2){
    const op = tokens[i];
    if(op && calcIsMul(op)){ term = calcOp(term, op, tokens[i + 1]); if(term === null) return null; continue; }
    total = calcOp(total, addOp, term);
    addOp = op; term = tokens[i + 1];
  }
  return total;
}
// what the display shows once an operator has been pressed: the running total after + or −, the product so far after × or ÷
function calcRunning(tokens){
  const done = tokens.slice(0, -1), op = tokens[tokens.length - 1];
  if(!calcIsMul(op)) return calcFold(done);
  let from = 0;
  done.forEach((t, i) => { if(i % 2 === 1 && !calcIsMul(t)) from = i + 1; });
  return calcFold(done.slice(from));
}
function calcPress(st, key){
  const base = st.error ? CALC_START : st;
  if(key === 'C') return CALC_START;
  if(key === 'B'){
    if(base.fresh) return base;
    const next = base.shown.slice(0, -1);
    return { ...base, shown: next === '' || next === '-' ? '0' : next };
  }
  if(/^\d$/.test(key)){
    if(base.fresh) return { ...base, shown: key, fresh: false };
    if(base.shown.replace(/[-.]/g, '').length >= CALC_MAX_DIGITS) return base;
    return { ...base, shown: base.shown === '0' ? key : base.shown + key };
  }
  if(key === '.'){
    if(base.fresh) return { ...base, shown: '0.', fresh: false };
    return base.shown.includes('.') ? base : { ...base, shown: base.shown + '.' };
  }
  if(CALC_OPS.includes(key)){
    const waiting = base.tokens.length > 0 && base.fresh;   // an operator was the last key: this one replaces it
    const tokens = waiting ? [...base.tokens.slice(0, -1), key] : [...base.tokens, Number(base.shown), key];
    const running = calcRunning(tokens);
    return running === null ? CALC_ERROR : { shown: String(running), tokens, fresh: true, error: false };
  }
  if(key === '='){
    if(base.tokens.length === 0 || base.fresh) return base;
    const done = calcFold([...base.tokens, Number(base.shown)]);
    return done === null ? CALC_ERROR : { shown: String(done), tokens: [], fresh: true, error: false };
  }
  return base;
}
// the number on the display, or null (an error)
const calcValue = st => st.error ? null : Number(st.shown);
