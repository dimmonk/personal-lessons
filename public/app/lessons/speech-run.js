/* ===================== LESSONS: READING A QUESTION ALOUD ===================== */
// Lesson standard 26.1.2 (the `spoken` block) and 26.7 (X19). The phone's own speech synthesis reads a question. It never speaks by itself: the
// first question of a run is read when the learner taps "Hear the question", and from then on each next question is read when the learner taps
// Next. A reload, a screen opened again, or a run that begins without a tap speaks nothing. Only a voice that runs on the phone is used (speech-view.js).
// Needs the queue (Q, queueItem, paintQueue).

let SPEECH = { armed: false, said: '' };   // armed: the learner tapped to hear a question in this run; said: the words last read
const speechSupported = () => typeof window !== 'undefined' && 'speechSynthesis' in window && typeof window.SpeechSynthesisUtterance === 'function';
const speechVoice = () => speechSupported() ? speechPick(window.speechSynthesis.getVoices()) : null;
function speechStop(){
  if(speechSupported()) window.speechSynthesis.cancel();
}
function speechReset(){
  speechStop();
  SPEECH = { armed: false, said: '' };
}
function speechSay(text){
  const voice = speechVoice();
  if(!voice) return false;
  speechStop();
  const words = new window.SpeechSynthesisUtterance(text);
  words.voice = voice;
  words.lang = voice.lang;
  words.rate = SPEECH_RATE;
  window.speechSynthesis.speak(words);
  SPEECH = { ...SPEECH, said: text };
  return true;
}
const spokenBlockOf = inst => (inst.item.blocks || []).find(b => b.kind === 'spoken') || null;
// what the screen of this question needs to know about speech (null when it has no spoken block)
function speechView(inst, cur){
  const block = spokenBlockOf(inst);
  if(!block) return null;
  return { voice: !!speechVoice(), hide: (!!Q.spoken || block.show === false) && !cur.done, words: !!cur.words, heard: SPEECH.said === block.text };
}
// the next question is read when Next is tapped, once the learner has tapped to hear one
function speakQuestion(){
  const block = Q.at < Q.list.length ? spokenBlockOf(queueItem()) : null;
  if(SPEECH.armed && block) speechSay(block.text);
}
function wireSpeech(){
  on('[data-hear]', () => {
    const block = spokenBlockOf(queueItem());
    if(!block) return;
    SPEECH = { ...SPEECH, armed: true };
    if(speechSay(block.text)) paintQueue();
  });
  on('[data-show-words]', () => { Q.cur = { ...Q.cur, words: true }; paintQueue(); });
}
if(typeof document !== 'undefined'){
  document.addEventListener('visibilitychange', () => { if(document.hidden) speechStop(); });
  // voices can arrive after the page: a question already on the screen is drawn again once there is one to speak with
  if(speechSupported()) window.speechSynthesis.addEventListener('voiceschanged', () => {
    if(typeof Q !== 'undefined' && Q && Q.at < Q.list.length && document.querySelector('[data-spoken]') && !!speechVoice() !== !!document.querySelector('[data-hear]')) paintQueue();
  });
}
