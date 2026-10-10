/* ===================== SOUND: FINDING THE PITCH OF A SOUND (pure) ===================== */
// The McLeod pitch method (McLeod and Wyvill, "A smarter way to find pitch"): the normalized square difference function
// of the samples, a peak chosen from it, and a parabola through the peak for a fraction of a sample. Pure: it takes the
// samples and the sample rate and touches nothing else, so it can be measured on made-up signals (tests/audio-pure.mjs).
// It needs RANGE_LOW_HZ and RANGE_HIGH_HZ from audio-notes.js.

const PITCH_CLARITY_MIN = 0.85;     // a reading with a clearer peak than this counts; the peak of a pure tone is 1
const PITCH_RMS_MIN = 0.005;        // quieter than this is silence, not a voice
const PITCH_PEAK_RATIO = 0.93;      // McLeod's k: the first peak within this share of the highest one is the pitch
const PITCH_MEDIAN_OF = 5;          // the verdict uses the middle of this many readings
const PITCH_MIN_READINGS = 3;       // and needs at least this many of them to be clear

// the normalized square difference function for lags 0 to maxLag: 1 is a perfect repeat, -1 an upside-down one
function pitchNsdf(samples, maxLag){
  const span = samples.length - maxLag;
  let fixed = 0;
  for(let i = 0; i < span; i++) fixed += samples[i] * samples[i];
  let shifted = fixed;   // the energy of the same window, moved along by the lag
  const nsdf = new Float64Array(maxLag + 1);
  for(let lag = 0; lag <= maxLag; lag++){
    if(lag > 0) shifted += samples[span - 1 + lag] * samples[span - 1 + lag] - samples[lag - 1] * samples[lag - 1];
    let product = 0;
    for(let i = 0; i < span; i++) product += samples[i] * samples[i + lag];
    const energy = fixed + shifted;
    nsdf[lag] = energy > 0 ? 2 * product / energy : 0;
  }
  return nsdf;
}

// the highest point of each stretch where the function is above zero, in order (skipping the first stretch, around lag 0)
function pitchPeaks(nsdf){
  const last = nsdf.length - 1, peaks = [];
  let at = 0;
  while(at < last && nsdf[at] > 0) at++;
  while(at < last && nsdf[at] <= 0) at++;
  let best = -1;
  for(; at < last; at++){
    if(nsdf[at] <= 0){
      if(best >= 0) peaks.push(best);
      best = -1;
    }else if(nsdf[at] > nsdf[at - 1] && nsdf[at] >= nsdf[at + 1] && (best < 0 || nsdf[at] > nsdf[best])) best = at;
  }
  return best >= 0 ? [...peaks, best] : peaks;
}

// the top of the parabola through a peak and the two points beside it: { lag, height }
function pitchRefine(nsdf, at){
  const a = nsdf[at - 1], b = nsdf[at], c = nsdf[at + 1], curve = a - 2 * b + c;
  if(curve === 0) return { lag: at, height: b };
  const shift = (a - c) / (2 * curve);
  return { lag: at + shift, height: b - (a - c) * shift / 4 };
}

const pitchRms = samples => Math.sqrt(samples.reduce((sum, x) => sum + x * x, 0) / samples.length);

// The pitch of a stretch of sound: { hz, clarity }, or null when it is too quiet, not clear enough, or outside
// RANGE_LOW_HZ to RANGE_HIGH_HZ. A sound above the range has its true repeat shorter than the shortest lag looked at,
// and is refused rather than read an octave down.
function detectPitch(samples, sampleRate){
  const shortest = Math.floor(sampleRate / RANGE_HIGH_HZ), longest = Math.ceil(sampleRate / RANGE_LOW_HZ);
  if(samples.length < 2 * longest) throw new RangeError(`Sound: ${samples.length} samples is too few to hear ${RANGE_LOW_HZ} Hz at ${sampleRate} Hz (need ${2 * longest})`);
  if(pitchRms(samples) < PITCH_RMS_MIN) return null;
  const nsdf = pitchNsdf(samples, longest + 1);
  const peaks = pitchPeaks(nsdf);
  if(!peaks.length) return null;
  const highest = Math.max(...peaks.map(p => nsdf[p]));
  const chosen = peaks.find(p => nsdf[p] >= PITCH_PEAK_RATIO * highest);
  if(chosen < shortest || chosen > longest) return null;
  const { lag, height } = pitchRefine(nsdf, chosen);
  return height >= PITCH_CLARITY_MIN ? { hz: sampleRate / lag, clarity: Math.min(1, height) } : null;
}

/* ---------- the middle of the last few readings ---------- */
function medianOf(values){
  if(!values.length) throw new RangeError('Sound: the middle of no readings');
  const sorted = [...values].sort((x, y) => x - y), mid = sorted.length >> 1;
  return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}
// the last readings with a new one added (a reading is a number, or null when the sound was not clear)
const pitchHistory = (history, reading, size = PITCH_MEDIAN_OF) => [...history, reading].slice(-size);
// the middle of the clear readings in the history, or null until enough of them are clear
function steadyReading(history){
  const clear = history.filter(x => x !== null);
  return clear.length >= PITCH_MIN_READINGS ? medianOf(clear) : null;
}
