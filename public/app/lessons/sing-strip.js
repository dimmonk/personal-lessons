/* ===================== SINGING: THE STRIP AND THE CONTROLS OF A SUNG QUESTION ===================== */
// Lesson standard 26.1.2 (the `pitch` block) and 26.1.1 (the line). The strip shows time across and the learner's voice up, the targets as
// bars and the voice as a line drawn as they sing. It is drawn from a view the sing controller (sing-run.js) builds: these functions only
// turn a view into HTML and a list of points into a path, so nothing here reads the page, the sound system or storage.
// A view: { plan, showLine, bars, path, status, prompt, button, skip, micLine, micOff, hidden }
// Needs esc, SAY, noteToMidi, hzToMidi, RANGE_LOW_HZ, RANGE_HIGH_HZ (audio-notes.js) and the SING_ constants (sing-task.js, sing-score.js).

const STRIP = { w: 300, h: 140, pad: 8, barMin: 8 };

// The pitch axis of a strip, as [least, most] on the half-step scale. A question with targets is drawn around them, so the bar sits in
// the middle and the line's distance from it is what shows; a hum with no target is drawn across the whole voice.
function stripAxis(plan){
  if(!plan.bars.length) return [Math.floor(hzToMidi(RANGE_LOW_HZ)), Math.ceil(hzToMidi(RANGE_HIGH_HZ))];
  const midis = plan.bars.map(b => noteToMidi(b.note)), least = Math.min(...midis), most = Math.max(...midis);
  const half = Math.max(5, (most - least) / 2 + 3), middle = (least + most) / 2;
  return [middle - half, middle + half];
}
const stripX = (plan, ms) => STRIP.pad + Math.max(0, Math.min(1, ms / plan.totalMs)) * (STRIP.w - 2 * STRIP.pad);
function stripY(plan, midi){
  const [least, most] = stripAxis(plan), clamped = Math.max(least, Math.min(most, midi));
  return STRIP.h - STRIP.pad - (clamped - least) / (most - least) * (STRIP.h - 2 * STRIP.pad);
}
const round1 = x => Math.round(x * 10) / 10;

// Where the voice is drawn: a reading folded to the octave nearest the bar it is being sung against, so a voice an octave away still
// lands on the line (the same folding the score uses). A hum with no target is drawn where it is.
function stripMidi(plan, ms, hz){
  const midi = hzToMidi(hz);
  if(!plan.bars.length) return midi;
  const bar = plan.bars.find(b => ms >= b.fromMs && ms < b.fromMs + b.ms) || plan.bars[plan.bars.length - 1], target = noteToMidi(bar.note);
  return target + ((((midi - target + 6) % 12) + 12) % 12 - 6);
}
// the path of the voice: a point for every clear reading, a new stretch after a gap
function voicePath(plan, points){
  let prev = null;
  return points.map(p => {
    const joined = prev !== null && p.ms - prev <= SING_RUN_GAP_S * 1000 * 2;
    prev = p.ms;
    return `${joined ? 'L' : 'M'}${round1(stripX(plan, p.ms))} ${round1(stripY(plan, p.midi))}`;
  }).join(' ');
}
function barsSvg(plan){
  const [least, most] = stripAxis(plan), perHalfStep = (STRIP.h - 2 * STRIP.pad) / (most - least);
  return plan.bars.map(b => {
    const thick = Math.max(STRIP.barMin, 2 * plan.cents / 100 * perHalfStep), y = stripY(plan, noteToMidi(b.note));
    return `<rect class="bar" x="${round1(stripX(plan, b.fromMs))}" y="${round1(y - thick / 2)}" width="${round1(stripX(plan, b.fromMs + b.ms) - stripX(plan, b.fromMs))}" height="${round1(thick)}"></rect>`;
  }).join('');
}

function stripHtml(view){
  const bars = view.bars ? barsSvg(view.plan) : '';
  return `<svg class="pitchstrip" data-line="${view.showLine ? 'on' : 'off'}" viewBox="0 0 ${STRIP.w} ${STRIP.h}" role="img" aria-label="${esc(SAY.stripLabel)}">
    <line class="mid" x1="${STRIP.pad}" x2="${STRIP.w - STRIP.pad}" y1="${STRIP.h / 2}" y2="${STRIP.h / 2}"></line>${bars}<path class="voice" d="${esc(view.path)}"></path></svg>
    ${view.hidden ? `<p class="hintline">${esc(SAY.stripHidden)}</p>` : ''}`;
}
// the pitch block: the strip, drawn from the view the controller built for this question (none in a static view such as the learner view)
function pitchHtml(block, ctx){
  return ctx.sing ? `<div class="block-pitch" data-sing-strip>${stripHtml(ctx.sing)}</div>` : '';
}

// the prompt, the one live line, the button and the lines about the microphone
function singControlsHtml(view){
  const button = view.button ? `<button class="btn sm" id="singGo" ${view.button.disabled ? 'disabled' : ''}>${esc(view.button.label)}</button>` : '';
  const skip = view.skip ? `<button class="linkish" id="singSkip">${esc(SAY.singSkip)}</button>` : '';
  const mic = view.micLine ? `<p class="hintline">${esc(view.micLine)}</p>${view.micOff ? `<button class="linkish" id="singMicOff">${esc(SAY.micTurnOff)}</button>` : ''}` : '';
  return `<p class="stem">${esc(view.prompt)}</p><p class="singsay" role="status" aria-live="polite">${esc(view.status)}</p>${button}${skip}${mic}`;
}
function singAskHtml(data, ask, st){
  return st.sing ? `<div class="stepopen prompt singask" data-ask="${esc(ask.id)}" data-sing-ask>${singControlsHtml(st.sing)}</div>` : '';
}

/* ---------- the result of a try, in words (never numbers) ---------- */
const tenths = ms => Math.round(ms / 100) / 10;
// the marks after a sung answer: one for a note, one for each note of a run, one for a hold, one for the range
function singMarksHtml(ask, answer, ok){
  const mark = (good, label, detail) => `<div class="mark ${good ? '' : 'no'}"><span class="verd">${esc(label)}</span>${detail ? `<span class="ans">${esc(detail)}</span>` : ''}</div>`;
  if(ask.task === 'range') return mark(ok, SAY.singRangeSaved);
  if(ask.task === 'warmup') return mark(true, SAY.singWarmupDone);
  if(ask.task === 'hold') return mark(ok, SAY.singHeld(tenths(answer.holdMs), ask.seconds));
  const words = answer.cents.map(c => ({ key: singWordKey(ask, c), good: singOnNote(ask, c) }));
  const notes = words.map((w, i) => words.length > 1 ? mark(w.good, SAY.singNoteN(i + 1), SAY.singWord[w.key]) : mark(w.good, SAY.singWord[w.key]));
  const long = ask.task === 'melody' ? [mark(answer.holdMs >= SING_MELODY_HOLD_MS, SAY.singHeld(tenths(answer.holdMs), SING_MELODY_HOLD_MS / 1000))] : [];
  const loud = ask.task === 'light' && answer.loud > SING_LOUD_LIMIT ? [mark(false, SAY.singLoud)] : [];
  return [...notes, ...long, ...loud].join('');
}
// after a miss, one line on what the voice did
function singMissHtml(ask, answer){
  const line = (text, n) => `<p>${n ? `<b>${esc(SAY.singNoteN(n))}.</b> ` : ''}${esc(text)}</p>`;
  if(ask.task === 'hold') return `<div class="vblock">${line(SAY.singHeldLine(tenths(answer.holdMs), ask.seconds))}</div>`;
  const off = answer.cents.map((c, i) => ({ c, i })).filter(x => !singOnNote(ask, x.c))
    .map(x => line(SAY.singVoice[singWordKey(ask, x.c)], answer.cents.length > 1 ? x.i + 1 : 0));
  const long = ask.task === 'melody' && answer.holdMs < SING_MELODY_HOLD_MS ? [line(SAY.singHeldLine(tenths(answer.holdMs), SING_MELODY_HOLD_MS / 1000))] : [];
  const loud = ask.task === 'light' && answer.loud > SING_LOUD_LIMIT ? [line(SAY.singLoudLine)] : [];
  const lines = [...off, ...long, ...loud];
  return lines.length ? `<div class="vblock">${lines.join('')}</div>` : '';
}
