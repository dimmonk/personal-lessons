/* ===================== SOUND: LISTENING THROUGH THE MICROPHONE ===================== */
// Lesson standard section 21, item 5. The microphone half of the note tool. It starts only on a tap, reads the sound on the
// browser's frame loop (no timers), finds the pitch (audio-pitch.js), and tells the card what it hears. Nothing it reads is
// recorded, stored or sent anywhere: each stretch of sound is looked at and dropped.
// Nothing here runs at load, and nothing here touches the page: the card passes in the functions that paint (audio-card.js).
// Needs audioContext, audioQuietUntil (audio-synth.js), detectPitch, pitchHistory, steadyReading (audio-pitch.js) and
// centsToNote, noteVerdict (audio-notes.js).

const METER_READ_MS = 50;     // the sound is looked at this often, at most (checked against the frame's time, not a timer)
const METER_FFT_SIZE = 4096;  // samples looked at each time
const METER_CONSTRAINTS = { audio: { echoCancellation: false, noiseSuppression: false, autoGainControl: false } };

// What is running: { token, live, target }. `live` is replaced, never changed in place, when its readings change.
// `target` is the note being sung against: it can change while a start is still waiting for permission.
// `token` goes up on every start and stop, so a start that is still waiting for permission can tell it was cancelled.
const METER = { token: 0, live: null, target: null };

// 'denied' | 'missing': why the microphone cannot be used, from the error getUserMedia refused with
function micFailureKind(err){
  const name = err && err.name;
  if(name === 'NotAllowedError' || name === 'SecurityError') return 'denied';
  if(name === 'NotFoundError' || name === 'OverconstrainedError' || name === 'NotReadableError') return 'missing';
  console.error('Sound: the microphone could not be opened', err);
  return 'missing';
}
const meterIsOn = () => METER.live !== null;

// The sound the analyser holds now, as numbers between -1 and 1. Old Safari has no float read, so it gets the byte one.
function meterSamples(live){
  if(live.bytes){
    live.analyser.getByteTimeDomainData(live.bytes);
    return Float32Array.from(live.bytes, b => (b - 128) / 128);
  }
  live.analyser.getFloatTimeDomainData(live.floats);
  return live.floats;
}

// What one look at the microphone says: { state: 'quiet' | 'listening' | 'steady', cents?, verdict? }, and the history after it.
function meterLook(live, ctx){
  if(ctx.currentTime < audioQuietUntil()) return { view: { state: 'quiet' }, history: [] };   // the app's own note: not the learner
  const found = detectPitch(meterSamples(live), ctx.sampleRate);
  const history = pitchHistory(live.history, found ? centsToNote(found.hz, METER.target) : null);
  const cents = steadyReading(history);
  return { view: cents === null ? { state: 'listening' } : { state: 'steady', cents, verdict: noteVerdict(cents) }, history };
}

function meterFrame(token, stamp){
  const live = METER.live;
  if(!live || METER.token !== token) return;
  const next = requestAnimationFrame(at => meterFrame(token, at));
  if(stamp - live.lastRead < METER_READ_MS){ METER.live = { ...live, raf: next }; return; }
  const { view, history } = meterLook(live, AUDIO_STATE.ctx);
  METER.live = { ...live, raf: next, lastRead: stamp, history };
  live.handlers.onView(view);
}

// Turns the microphone on and starts reading, against the note `target`. `handlers` = { onView(view), onStop(), onFail('denied' | 'missing') }.
// Called from a tap: the sound system is made (or resumed) in the same tap.
async function startMeter(target, handlers){
  stopMeter();
  const token = ++METER.token;
  METER.target = target;
  const devices = navigator.mediaDevices;
  if(!devices || typeof devices.getUserMedia !== 'function'){ handlers.onFail('missing'); return; }
  const ctx = audioContext();
  let stream;
  try{
    stream = await devices.getUserMedia(METER_CONSTRAINTS);
  }catch(err){
    if(METER.token === token) handlers.onFail(micFailureKind(err));
    return;
  }
  if(METER.token !== token){ stream.getTracks().forEach(track => track.stop()); return; }   // stopped while it was asking
  const source = ctx.createMediaStreamSource(stream), analyser = ctx.createAnalyser(), sink = ctx.createGain();
  analyser.fftSize = METER_FFT_SIZE;
  analyser.smoothingTimeConstant = 0;
  sink.gain.value = 0;   // the analyser is pulled through a silent output, so it always runs and the learner never hears the microphone
  source.connect(analyser);
  analyser.connect(sink);
  sink.connect(ctx.destination);
  const floats = typeof analyser.getFloatTimeDomainData === 'function' ? new Float32Array(analyser.fftSize) : null;
  stream.getAudioTracks().forEach(track => { track.onended = () => { if(METER.token === token){ stopMeter(); handlers.onFail('missing'); } }; });
  METER.live = { stream, source, analyser, sink, floats, bytes: floats ? null : new Uint8Array(analyser.fftSize), history: [], lastRead: -Infinity, handlers };
  METER.live = { ...METER.live, raf: requestAnimationFrame(at => meterFrame(token, at)) };
}

// A new note was picked: what was heard before says nothing about it.
function setMeterTarget(target){
  METER.target = target;
  if(METER.live) METER.live = { ...METER.live, history: [] };
}

// Turns the microphone off: every track stopped, the source disconnected, the frame loop cancelled. Safe to call at any time.
function stopMeter(){
  METER.token++;
  const live = METER.live;
  if(!live) return;
  METER.live = null;
  cancelAnimationFrame(live.raf);
  live.stream.getTracks().forEach(track => track.stop());
  live.source.disconnect();
  live.analyser.disconnect();
  live.sink.disconnect();
  live.handlers.onStop();
}
