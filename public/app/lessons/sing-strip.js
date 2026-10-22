/* ===================== SINGING: THE STRIP AND THE CONTROLS OF A SUNG QUESTION ===================== */
// Lesson standard 3.9 (the `pitch` block) and 3.8 (the line). The strip shows time across and the learner's voice up, the targets as
// bars and the voice as a line drawn as they sing. It is drawn from a view the sing controller (sing-run.js) builds: these functions only
// turn a view into HTML and a list of points into a path, so nothing here reads the page, the sound system or storage.
// A view: { plan, showLine, bars, path, status, prompt, button, skip, micLine, micOff, hidden, guess }
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
  const guess = view.guess ? `<div class="opts" data-guess-row>${SING_GUESS_WORDS.map(w => `<button class="opt" data-guess="${w}">${esc(SAY.singGuessWord[w])}</button>`).join('')}</div>` : '';
  return `<p class="stem">${esc(view.prompt)}</p><p class="singsay" role="status" aria-live="polite">${esc(view.status)}</p>${guess}${button}${skip}${mic}`;
}
function singAskHtml(data, ask, st){
  return st.sing ? `<div class="stepopen prompt singask" data-ask="${esc(ask.id)}" data-sing-ask>${singControlsHtml(st.sing)}</div>` : '';
}

/* ---------- the result of a try, in words (never numbers) ---------- */
// seconds in tenths, never rounded up: a hold 50 ms short never shows the seconds it needed
const tenths = ms => Math.floor(ms / 100) / 10;
// the marks after a sung answer: one for a note, one for each note of a run, one for a hold, one for the range. Every word comes from singJudge
// (sing-judge.js), the one reading of what each note was.
function singMarksHtml(ask, answer, ok){
  const mark = (good, label, detail) => `<div class="mark ${good ? '' : 'no'}"><span class="verd">${esc(label)}</span>${detail ? `<span class="ans">${esc(detail)}</span>` : ''}</div>`;
  if(ask.task === 'range') return mark(ok, SAY.singRangeSaved);
  if(ask.task === 'warmup') return mark(true, SAY.singWarmupDone);
  const judged = singJudge(ask, answer);
  // what the learner said they heard, beside what was measured: never scored, so it is marked only as agreeing or not
  const said = Number.isInteger(answer.guess) ? [mark(singGuessAgrees(ask, answer), SAY.singGuessSaid(SAY.singGuessWord[singGuessWord(answer.guess)]), singGuessAgrees(ask, answer) ? SAY.singGuessSame : singGuessOtherText(ask, answer))] : [];
  if(ask.task === 'hold'){ const h = judged.last; return [mark(ok, SAY.singHeld(tenths(answer.holdMs), ask.seconds) + singHowText(h)), ...said].join(''); }
  const notes = judged.notes.map((j, i) => judged.notes.length > 1 ? mark(j.good, SAY.singNoteN(i + 1), SAY.singWord[j.key]) : mark(j.good, SAY.singWord[j.key]));
  const long = ask.task === 'melody' ? [mark(answer.holdMs >= SING_MELODY_HOLD_MS, SAY.singHeld(tenths(answer.holdMs), SING_MELODY_HOLD_MS / 1000) + (['offStart', 'steady'].includes(judged.last.id) ? singHowText(judged.last) : ''))] : [];   // the note's own mark already names a drift, a wander or a stop
  const loud = ask.task === 'light' && answer.loud > SING_LOUD_LIMIT ? [mark(false, SAY.singLoud)] : [];
  return [...notes, ...long, ...loud, ...said].join('');
}
// what the app measured, when the learner heard it another way: which way their note really was from what they heard
function singGuessOtherText(ask, answer){
  const m = singMeasured(ask, answer);
  if(!m) return SAY.singGuessUnheard;
  return m.side === null ? SAY.singGuessNeither(SAY.singWord[m.key].toLowerCase()) : SAY.singGuessOther(SAY.singWord[m.key].toLowerCase(), m.side - answer.guess, m.part);
}
// one line on how far off a note was and which way to move, in half-steps (defined in lesson 2 of Singing)
const singVoiceLine = (ask, cents) => { const key = singWordKey(ask, cents); return SAY.singVoice[key](singHalfSteps(cents)); };
// how a held note went, after "Steady for n seconds": its outcome and parts (sing-judge.js)
const singHowText = j => j.id === 'missed' ? '' : SAY.singHeldHow(j.id, j.parts.middle ? j.parts.middle.kind : null, j.parts.endSide, j.parts.begin ? j.parts.begin.kind : null);
// one judged line in words (singJudgeNote's lines)
function singLineText(ask, [kind, value], need){
  switch(kind){
    case 'voice': return singVoiceLine(ask, value);
    case 'start': return SAY.singStartLine(singVoiceLine(ask, value));
    case 'slid': return SAY.singSlidLine(value);
    case 'slidOff': return SAY.singSlidOffLine(value);
    case 'stopped': return SAY.singStoppedLine(tenths(value), need / 1000);
    case 'hunt': return SAY.singHuntLine;
    case 'drift': return SAY.singDriftLine(value);
    case 'further': return SAY.singFurtherLine(value);
    case 'found': return SAY.singFoundLine;
    case 'wander': return SAY.singDriftLine(0);
    case 'held': return SAY.singHeldLine(tenths(value), need / 1000);
    default: return SAY.singVoice.missed();
  }
}
// after a try, the lines of each note that needs one, in the note's own order (singJudge), and a loud light note
function singMissHtml(ask, answer){
  const line = (text, n) => `<p>${n ? `<b>${esc(SAY.singNoteN(n))}.</b> ` : ''}${esc(text)}</p>`, judged = singJudge(ask, answer), many = judged.notes.length > 1;
  const lines = judged.notes.flatMap((j, i) => j.lines.filter(l => l[0] !== 'missed' || many).map((l, k) => line(singLineText(ask, l, j.need), many && k === 0 ? i + 1 : 0)));
  const loud = ask.task === 'light' && answer.loud > SING_LOUD_LIMIT ? [line(SAY.singLoudLine)] : [];
  const all = [...lines, ...loud];
  return all.length ? `<div class="vblock">${all.join('')}</div>` : '';
}
