/* ===================== SOUND: THE BLOCKS ON A CARD ===================== */
// Lesson standard section 21, items 1 to 7. A card may carry one `audio` block: `tones` (buttons that each play a short made-up
// sound) or `notecheck` (pick a note, hear it, sing it, and see whether the voice is under it, on it or over it). cards.js asks
// for the block's HTML (audioHtml) and unit.js and taught.js wire it (wireAudio). Sound only ever starts on a tap. Nothing is
// recorded, stored, scored or logged: the block has no state beyond what is on the screen in front of the learner.
// Needs SAY, lessonLabel, lessonFail, on, icon (the app), and the sound and microphone files of this folder.

/* ---------- stopping everything ---------- */
// Stops every sound and switches the microphone off. Called on every repaint of the unit, on every move to another screen,
// when a card sheet opens and closes, and when the page is hidden.
function stopAudio(){
  stopSounds();
  stopMeter();
}
let AUDIO_WATCHING = false;
// Armed by the first tap, so nothing here touches the page at load. A page that goes into the background stops all sound.
function watchPageHidden(){
  if(AUDIO_WATCHING) return;
  AUDIO_WATCHING = true;
  document.addEventListener('visibilitychange', () => { if(document.hidden) stopAudio(); });
  window.addEventListener('pagehide', stopAudio);
}

/* ---------- the HTML ---------- */
function tonesHtml(ctx, audio){
  const buttons = audio.examples.map((ex, i) => {
    if(typeof ex.label !== 'string') lessonFail(`card ${ctx.cardId}: sound example ${i + 1} has no label`);
    return `<button class="soundbtn" data-tone="${i}" aria-pressed="false"><span class="soundicon">${icon('play', 18)}</span>`
      + `<span class="soundlabel">${ctx.T.t(ex.label)}</span><span class="soundstate"></span></button>`;
  }).join('');
  return `<div class="lsec audioblock" data-audio="tones" role="group" aria-label="${esc(SAY.audioHear)}">${lessonLabel(SAY.audioHear)}`
    + `<div class="audiosays">${ctx.T.PP(audio.says)}</div><div class="soundrow">${buttons}</div></div>`;
}
function noteCheckHtml(ctx, audio){
  const zone = onNoteZone();
  const list = audio.notes || DEFAULT_NOTES, columns = list.length <= 5 ? list.length : Math.ceil(list.length / 2);   // seven notes sit four and three, not five and two
  const notes = list.map(n => `<button class="notebtn" data-note="${esc(n)}" aria-pressed="false">${esc(n.slice(0, -1))}</button>`).join('');
  return `<div class="lsec audioblock" data-audio="notecheck" role="group" aria-label="${esc(SAY.audioTry)}">${lessonLabel(SAY.audioTry)}`
    + `<div class="audiosays">${ctx.T.PP(audio.says)}</div>`
    + `<p class="audiostep">${esc(SAY.notePick)}</p><div class="notebtns" style="--cols:${columns}">${notes}</div>`
    + `<button class="micbtn" data-mic>${icon('mic', 18)}<span>${esc(SAY.micStart)}</span></button>`
    + `<p class="audiohint">${esc(SAY.micPrivate)}</p>`
    + `<p class="audiostep">${esc(SAY.noteSing)}</p><p class="audiohint">${esc(SAY.noteAnyRange)}</p>`
    + `<div class="pitchmeter" aria-hidden="true"><i class="zone" style="left:${zone.from}%;width:${zone.to - zone.from}%"></i><b class="marker idle" style="left:50%"></b></div>`
    + `<p class="notesay" role="status"></p></div>`;
}
// The block's HTML, or '' when the card has no sound. Its numbers are checked here as well as by the validator.
function audioHtml(ctx, card){
  if(!card.audio) return '';
  const problems = audioBlockProblems(card.audio);
  if(problems.length) lessonFail(`card ${card.id}: ${problems.join('; ')}`);
  return card.audio.kind === 'tones' ? tonesHtml(ctx, card.audio) : noteCheckHtml(ctx, card.audio);
}

/* ---------- tones: one button per example ---------- */
function paintSoundButton(btn, playing){
  btn.setAttribute('aria-pressed', String(playing));
  btn.querySelector('.soundicon').innerHTML = icon(playing ? 'stop' : 'play', 18);
  btn.querySelector('.soundstate').textContent = playing ? SAY.audioPlaying : '';
  if(playing) btn.title = SAY.audioStop; else btn.removeAttribute('title');
}
function wireTones(block, audio){
  let current = null;   // { btn }: the sound playing now, and the button it belongs to
  on('[data-tone]', btn => {
    watchPageHidden();
    if(current && current.btn === btn){ stopSounds(); return; }   // the button goes back when its sound has ended
    const before = current, mine = { btn };
    current = mine;
    if(before) paintSoundButton(before.btn, false);
    paintSoundButton(btn, true);
    startExample(audio.examples[Number(btn.dataset.tone)], () => {
      if(current === mine) current = null;
      paintSoundButton(btn, false);
    });
  }, block);
}

/* ---------- the note tool ---------- */
// the three lines the tool can answer with, from the key's own words for the answers named in `answers`
function noteCheckLines(v, answers){
  const line = ref => { const at = ref.indexOf('.'); return v.option(ref.slice(0, at), ref.slice(at + 1)).n; };
  return { under: line(answers.under), on: line(answers.on), over: line(answers.over) };
}
function paintMicButton(btn, listening){
  btn.querySelector('span').textContent = listening ? SAY.micStop : SAY.micStart;
  btn.classList.toggle('on', listening);
}
function wireNoteCheck(block, audio, v){
  const lines = noteCheckLines(v, audio.answers), status = block.querySelector('.notesay');
  const mic = block.querySelector('[data-mic]'), marker = block.querySelector('.pitchmeter .marker');
  const noteButtons = [...block.querySelectorAll('[data-note]')];
  let target = null, micOn = false;
  // the line is written only when it changes, so a screen reader hears each change once
  const say = text => { if(status.textContent !== text) status.textContent = text; };
  const needle = cents => {
    marker.classList.toggle('idle', cents === null);
    if(cents !== null) marker.style.left = needlePercent(cents) + '%';
  };
  const micOff = text => { micOn = false; paintMicButton(mic, false); needle(null); say(text); };
  const show = view => {
    needle(view.state === 'steady' ? view.cents : null);
    say(view.state === 'steady' ? lines[view.verdict] : view.state === 'quiet' ? SAY.micWait : SAY.micListening);
  };
  on('[data-note]', btn => {
    watchPageHidden();
    target = btn.dataset.note;
    noteButtons.forEach(b => b.setAttribute('aria-pressed', String(b === btn)));
    setMeterTarget(target);
    startNote(target, () => {});
  }, block);
  on('[data-mic]', () => {
    watchPageHidden();
    if(micOn){ stopMeter(); micOff(''); return; }
    if(target === null){ say(SAY.micPickFirst); return; }
    micOn = true;
    paintMicButton(mic, true);
    say(SAY.micListening);
    startMeter(target, {
      onView: show,
      onStop: () => micOff(''),
      onFail: kind => micOff(kind === 'denied' ? SAY.micDenied : SAY.micMissing)
    });
  }, block);
}

// Makes the card's sound block work. `root` holds the block (the unit's screen or a card sheet), `v` is the unit's view.
function wireAudio(root, card, v){
  if(!card.audio) return;
  const block = root.querySelector('[data-audio]');
  if(!block) lessonFail(`card ${card.id}: its sound block is not on the page`);
  if(card.audio.kind === 'tones') wireTones(block, card.audio);
  else wireNoteCheck(block, card.audio, v);
}
