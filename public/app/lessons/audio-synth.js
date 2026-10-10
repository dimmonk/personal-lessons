/* ===================== SOUND: MAKING NOTES ===================== */
// Lesson standard section 21, items 2 and 4. The app makes its own sounds with Web Audio: a sine for each tone, with a quick
// fade in and out. There are no sound files, no setTimeout and no setInterval: every sound is put on the sound system's own
// clock, and a button learns that its sound is over from the last oscillator's "ended" event.
// Nothing here runs at load. The one AudioContext is made on the first tap (audioContext) and never earlier.
// Needs noteToHz, centsToHz, audioToneLengthMs and audioToneEndMs from audio-notes.js.

const AUDIO_FADE_S = 0.03;          // a tone fades in and out over this long
const AUDIO_TONE_GAIN = 0.2;        // one tone's loudness: four of them together stay under 1, so nothing clips
const AUDIO_START_DELAY_S = 0.03;   // a sound starts this long after the tap, so its start is never in the past
const AUDIO_STOP_FADE_S = 0.06;     // a sound stopped by the learner fades out over this long
const AUDIO_NOTE_MS = 1500;         // a picked note sounds this long
const AUDIO_MIC_QUIET_S = 0.25;     // the microphone is ignored this long after the app's own sound ends

// The one sound system and what is sounding. `quietUntil` is a time on the sound clock: the microphone is not read before it.
const AUDIO_STATE = { ctx: null, run: null, quietUntil: 0 };

// The shared AudioContext. It is made here, on the first call, and every call comes from a tap. A suspended context
// (iOS, or a browser that waits for a tap) is resumed in the same tap.
function audioContext(){
  if(!AUDIO_STATE.ctx){
    const Context = typeof window !== 'undefined' ? window.AudioContext || window.webkitAudioContext : null;
    if(!Context) throw new Error('Sound: this browser has no Web Audio, so it cannot make or listen to a note');
    AUDIO_STATE.ctx = new Context();
  }
  const ctx = AUDIO_STATE.ctx;
  if(ctx.state === 'suspended') ctx.resume().catch(err => console.error('Sound: the sound system would not start', err));
  return ctx;
}
function audioQuietUntil(){ return AUDIO_STATE.quietUntil; }

/* ---------- one tone, one example ---------- */
// One tone on the sound clock: a sine at the note (plus its cents), or moving along its path. A path is straight in cents:
// an exponential ramp in hertz is a straight line in cents, because a cent is a fixed ratio.
function scheduleTone(ctx, destination, tone, t0){
  const start = t0 + (tone.at || 0) / 1000, length = audioToneLengthMs(tone) / 1000, end = start + length;
  const base = noteToHz(tone.note), hzAt = cents => centsToHz(base, cents);
  const points = tone.path || [[0, tone.cents || 0]];
  const osc = ctx.createOscillator(), gain = ctx.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(hzAt(points[0][1]), start);
  points.slice(1).forEach(([ms, cents]) => osc.frequency.exponentialRampToValueAtTime(hzAt(cents), start + ms / 1000));
  const fade = Math.min(AUDIO_FADE_S, length / 2);
  gain.gain.setValueAtTime(0, start);
  gain.gain.linearRampToValueAtTime(AUDIO_TONE_GAIN, start + fade);
  gain.gain.setValueAtTime(AUDIO_TONE_GAIN, end - fade);
  gain.gain.linearRampToValueAtTime(0, end);
  osc.connect(gain);
  gain.connect(destination);
  osc.start(start);
  osc.stop(end);
  return { osc, gain };
}

// Fades a sound out and stops it, now. The oscillators' "ended" events then fire as they would at the natural end.
function stopParts(ctx, parts){
  const now = ctx.currentTime;
  parts.forEach(({ osc, gain }) => {
    gain.gain.cancelScheduledValues(now);
    gain.gain.setTargetAtTime(0, now, AUDIO_STOP_FADE_S / 4);
    osc.stop(now + AUDIO_STOP_FADE_S);
  });
}

// Puts an example's tones on the sound clock, starting at t0 (seconds on ctx's clock). `ctx` is an argument so the tests can
// render an example with an OfflineAudioContext and measure what was made. `onEnded` is called once, when the last
// oscillator has ended. Returns { oscillators, endTime, stop }.
function scheduleExample(ctx, destination, example, t0, onEnded){
  const parts = example.play.map(tone => scheduleTone(ctx, destination, tone, t0));
  let remaining = parts.length;
  parts.forEach(({ osc }) => {
    osc.onended = () => { remaining--; if(remaining === 0 && onEnded) onEnded(); };
  });
  return {
    oscillators: parts.map(p => p.osc),
    endTime: t0 + Math.max(...example.play.map(audioToneEndMs)) / 1000,
    stop: () => stopParts(ctx, parts)
  };
}
// One steady note for `ms` milliseconds.
function playNote(ctx, destination, note, ms, t0, onEnded){
  return scheduleExample(ctx, destination, { play: [{ note, ms }] }, t0, onEnded);
}

/* ---------- what is sounding: one thing at a time ---------- */
// Stops whatever sounds. The microphone is ignored for a moment after, so it never hears the tail of the sound.
function stopSounds(){
  const run = AUDIO_STATE.run;
  if(!run) return;
  AUDIO_STATE.run = null;
  run.stop();
  AUDIO_STATE.quietUntil = AUDIO_STATE.ctx.currentTime + AUDIO_STOP_FADE_S + AUDIO_MIC_QUIET_S;
}
// Starts one sound and ends the one before it. `schedule(ctx, destination, t0, onEnded)` puts it on the clock and returns the
// run. `onEnded` is called when the last oscillator ends, whether it ran out or was stopped.
function startSound(schedule, onEnded){
  stopSounds();
  const ctx = audioContext(), t0 = ctx.currentTime + AUDIO_START_DELAY_S;
  const run = schedule(ctx, ctx.destination, t0, () => {
    if(AUDIO_STATE.run === run) AUDIO_STATE.run = null;
    onEnded();
  });
  AUDIO_STATE.run = run;
  AUDIO_STATE.quietUntil = run.endTime + AUDIO_MIC_QUIET_S;
  return run;
}
function startExample(example, onEnded){
  return startSound((ctx, to, t0, done) => scheduleExample(ctx, to, example, t0, done), onEnded);
}
function startNote(note, onEnded){
  return startSound((ctx, to, t0, done) => playNote(ctx, to, note, AUDIO_NOTE_MS, t0, done), onEnded);
}
