// What the sound tests need in the page and around it. `startRecorder` runs in the page before the app (page.addInitScript), so it sees
// everything the app does with the sound system and the microphone: it counts AudioContexts, records every oscillator with the frequency
// automation it was given and whether it has ended, counts timers, and replaces getUserMedia with one that answers from a MediaStream made
// of oscillators at a pitch the test chooses (window.__fakeMic). The real analyser, pitch finder and needle in the app read that stream.

// Runs in the page. mode: 'grant' | 'deny' | 'none' | 'nodevices' (what getUserMedia answers; 'nodevices' has no media devices at all),
// or 'real' (the browser's own getUserMedia stays, and only records what it is asked and the streams it gives).
export function startRecorder(mode) {
  const log = { contexts: 0, micCalls: 0, constraints: [], streams: [], oscillators: [], timers: [] };
  window.__rec = log;
  const Native = window.AudioContext;
  window.AudioContext = class extends Native { constructor(...args) { super(...args); log.contexts++; } };

  const makeOscillator = BaseAudioContext.prototype.createOscillator;
  BaseAudioContext.prototype.createOscillator = function () {
    const osc = makeOscillator.call(this);
    const rec = { fake: !!this.__fake, offline: this instanceof OfflineAudioContext, events: [], starts: [], stops: [], ended: false };
    for (const method of ['setValueAtTime', 'exponentialRampToValueAtTime', 'linearRampToValueAtTime']) {
      const real = osc.frequency[method].bind(osc.frequency);
      osc.frequency[method] = (v, t) => { rec.events.push({ m: method, v, t }); return real(v, t); };
    }
    const start = osc.start.bind(osc), stop = osc.stop.bind(osc);
    osc.start = t => { rec.starts.push(t); return start(t); };
    osc.stop = t => { rec.stops.push(t); return stop(t); };
    osc.addEventListener('ended', () => { rec.ended = true; });
    log.oscillators.push(rec);
    return osc;
  };

  for (const name of ['setTimeout', 'setInterval']) {
    const real = window[name];
    window[name] = (...args) => { log.timers.push(name); return real(...args); };
  }

  // the microphone: a voice-like sound (the second harmonic stronger than the first) at the pitch the test sets, or silence
  const fake = window.__fakeMic = { hz: 0, level: 0.3, oscillators: [], master: null, set(hz) { fake.hz = hz; fake.apply(); }, apply() {
    if (!fake.master) return;
    fake.oscillators.forEach((osc, i) => { osc.frequency.value = Math.max(1, fake.hz) * (i + 1); });
    fake.master.gain.value = fake.hz ? fake.level : 0;
  } };
  if (mode === 'real') {
    const real = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
    navigator.mediaDevices.getUserMedia = async constraints => {
      log.micCalls++;
      log.constraints.push(JSON.parse(JSON.stringify(constraints)));
      const stream = await real(constraints);
      log.streams.push(stream);
      return stream;
    };
    return;
  }
  if (mode === 'nodevices') { Object.defineProperty(navigator, 'mediaDevices', { value: undefined, configurable: true }); return; }
  navigator.mediaDevices.getUserMedia = async constraints => {
    log.micCalls++;
    log.constraints.push(JSON.parse(JSON.stringify(constraints)));
    if (mode === 'deny') throw new DOMException('Permission denied', 'NotAllowedError');
    if (mode === 'none') throw new DOMException('Requested device not found', 'NotFoundError');
    const ctx = new Native();
    ctx.__fake = true;
    const destination = ctx.createMediaStreamDestination(), master = ctx.createGain();
    const parts = [0.4, 0.6, 0.2];
    fake.oscillators = parts.map(weight => { const osc = ctx.createOscillator(), gain = ctx.createGain(); gain.gain.value = weight / 1.2; osc.connect(gain); gain.connect(master); osc.start(); return osc; });
    master.connect(destination);
    fake.master = master;
    fake.apply();
    log.streams.push(destination.stream);
    return destination.stream;
  };
}

// Reads what the recorder saw.
export const recorded = page => page.evaluate(() => {
  const app = __rec.oscillators.filter(o => !o.fake && !o.offline);
  return {
    contexts: __rec.contexts, oscillators: app.length, fakeOscillators: __rec.oscillators.filter(o => o.fake).length,
    micCalls: __rec.micCalls, constraints: __rec.constraints, timers: __rec.timers.length,
    streams: __rec.streams.length, tracks: __rec.streams.flatMap(s => s.getTracks().map(t => t.readyState))
  };
});
// Waits until every oscillator the app made has ended, whether it ran out or was stopped.
export const allEnded = (page, timeout = 4000) => page.waitForFunction(() => __rec.oscillators.filter(o => !o.fake && !o.offline).every(o => o.ended), null, { timeout });
// Waits until the note tool's one line says exactly this.
export const waitStatus = (page, text, timeout = 6000) => page.waitForFunction(t => { const el = document.querySelector('.notesay'); return !!el && el.textContent === t; }, text, { timeout });

/* ---------- what the data says, worked out here and not by the app ---------- */
const SEMITONES = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
// the frequency of a note name and a number of cents (A4 = 440 Hz)
export function hzOf(note, cents = 0) {
  const [, letter, accidental = '', octave] = /^([A-G])([#b]?)(\d)$/.exec(note);
  const midi = 12 * (Number(octave) + 1) + SEMITONES[letter] + (accidental === '#' ? 1 : accidental === 'b' ? -1 : 0);
  return 440 * 2 ** ((midi - 69) / 12) * 2 ** (cents / 1200);
}
// how many cents a tone is above its note at a time (seconds after the tap): a steady tone's cents, or the straight line of its path
export function expectedCents(tone, seconds) {
  const ms = seconds * 1000 - (tone.at || 0);
  if (!tone.path) return tone.cents || 0;
  const path = tone.path;
  if (ms <= path[0][0]) return path[0][1];
  for (let i = 1; i < path.length; i++) {
    if (ms <= path[i][0]) { const [t0, c0] = path[i - 1], [t1, c1] = path[i]; return c0 + (c1 - c0) * (ms - t0) / (t1 - t0); }
  }
  return path[path.length - 1][1];
}

// A WAV file of a voice-like sound at one pitch (the second harmonic stronger than the first), for Chromium's fake capture device.
export function wavOf(hz, seconds = 4, rate = 48000) {
  const count = rate * seconds, pcm = Buffer.alloc(count * 2);
  for (let i = 0; i < count; i++) {
    const t = 2 * Math.PI * hz * i / rate;
    pcm.writeInt16LE(Math.round((0.4 * Math.sin(t) + 0.6 * Math.sin(2 * t) + 0.2 * Math.sin(3 * t)) / 1.2 * 0.3 * 32767), i * 2);
  }
  const head = Buffer.alloc(44);
  head.write('RIFF', 0); head.writeUInt32LE(36 + pcm.length, 4); head.write('WAVEfmt ', 8); head.writeUInt32LE(16, 16);
  head.writeUInt16LE(1, 20); head.writeUInt16LE(1, 22); head.writeUInt32LE(rate, 24); head.writeUInt32LE(rate * 2, 28);
  head.writeUInt16LE(2, 32); head.writeUInt16LE(16, 34); head.write('data', 36); head.writeUInt32LE(pcm.length, 40);
  return Buffer.concat([head, pcm]);
}
