/* ===================== LESSONS: A QUESTION READ ALOUD, ON SCREEN ===================== */
// Lesson standard 3.9 (the `spoken` block) and 9 (X19), as built in step 9. A question the phone reads aloud with its own speech synthesis,
// with its words shown or behind "Show the words" (the mock interview), and a replay. Pure string builders and the choice of a voice: nothing here
// reads the page or speaks (speech-run.js does). Speech starts only when the learner taps; only a voice that runs on the phone is used, because a
// voice that needs the network would send the question away; with none, the words are shown.
//   block   { kind: 'spoken', text }
//   speech  what the screen knows (queue.js): { voice: a local voice exists, hide: the words are held back, words: the learner asked for them, heard: it was spoken }
//           undefined where nothing is spoken (the answers listed at the end of a check, a teaching screen): the words only

const SPEECH_RATE = 0.95;
// The voice the app speaks with: one that runs on this phone, in English, the US one first; null when there is none.
function speechPick(voices){
  const local = (voices || []).filter(v => v.localService && /^en([-_]|$)/i.test(v.lang || ''));
  return local.find(v => /^en[-_]US$/i.test(v.lang)) || local[0] || null;
}
function spokenHtml(block, ctx){
  const sp = ctx.speech;
  if(!sp) return `<div class="block-spoken" data-spoken><p class="spoken-words">${esc(block.text)}</p></div>`;
  const hidden = sp.voice && sp.hide && !sp.words;
  const words = hidden ? '' : `<p class="spoken-words" data-spoken-words>${esc(block.text)}</p>`;
  const hear = sp.voice ? `<button type="button" class="btn ghost sm" data-hear>${icon('play', 14)}${esc(sp.heard ? SAY.hearAgain : SAY.hearBtn)}</button>` : '';
  const show = hidden ? `<button type="button" class="btn ghost sm" data-show-words>${esc(SAY.showWords)}</button>` : '';
  return `<div class="block-spoken" data-spoken>${words}<div class="spoken-tools numacts">${hear}${show}</div>
    ${sp.voice ? '' : `<p class="hintline" data-no-voice>${esc(SAY.noVoice)}</p>`}</div>`;
}
