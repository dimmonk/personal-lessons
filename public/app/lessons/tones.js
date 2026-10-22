/* ===================== SOUND: EXAMPLE SOUNDS ON A TEACHING SCREEN ===================== */
// Lesson standard 3.9 (the `tones` block). A teaching screen may carry a few buttons, each playing a short sound the app makes (a note, two
// notes that match, a note that starts low and slides up, a voice that hunts for its note), under a sentence (`says`) that says what to listen
// for. The numbers of a block are checked by audioBlockProblems (audio-notes.js), the same function the validator reads. A block sits on a
// teaching screen only, never on a question, because a sound on a question would give its answer away.
// Sound starts only on a tap: nothing here runs at load or when the screen opens. A second tap on the button that is playing stops it; a tap
// on another stops the first. Moving to another step or screen stops it (moveLesson and go call stopAudio), and so does hiding the page.
// Needs esc, icon, lessonLabel, textHtml, SAY (the app), startExample and stopSounds (audio-synth.js), watchPageHidden (sing-run.js).

function tonesHtml(block){
  const problems = audioBlockProblems(block);
  if(problems.length) lessonFail(`a tones block: ${problems.join('; ')}`);
  const buttons = block.examples.map((ex, i) => `<button class="opt tone" data-tone="${i}" aria-pressed="false"><span class="toneicon">${icon('play', 18)}</span><span>${esc(ex.label)}</span></button>`).join('');
  return `<div class="block-tones lesson" data-tones role="group" aria-label="${esc(SAY.tonesHeading)}">${lessonLabel(SAY.tonesHeading)}${textHtml(block.says)}
    <div class="opts">${buttons}</div><p class="hintline" data-tone-state role="status" aria-live="polite"></p></div>`;
}

// Makes the example sounds of a teaching screen play on a tap. `blocks` are the screen's blocks, in the order they are drawn.
function wireTones(blocks){
  const tones = blocks.filter(b => b.kind === 'tones'), els = [...document.querySelectorAll('[data-tones]')];
  els.forEach((el, k) => { if(tones[k]) wireToneBlock(el, tones[k]); });
}
function wireToneBlock(el, block){
  let playing = null;   // the button whose sound is playing now
  const state = el.querySelector('[data-tone-state]');
  const paint = (btn, on) => {
    btn.setAttribute('aria-pressed', String(on));
    btn.querySelector('.toneicon').innerHTML = icon(on ? 'stop' : 'play', 18);
    state.textContent = on ? SAY.tonesPlaying : '';
  };
  el.querySelectorAll('[data-tone]').forEach(btn => btn.addEventListener('click', () => {
    watchPageHidden();
    if(playing === btn){ stopSounds(); return; }   // its button goes back when the sound has ended
    if(playing) paint(playing, false);
    playing = btn;
    paint(btn, true);
    startExample(block.examples[Number(btn.dataset.tone)], () => { if(playing === btn){ playing = null; paint(btn, false); } });
  }));
}
