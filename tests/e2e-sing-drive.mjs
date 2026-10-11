// Driving a sung question from the test side. The page runs the real app with the recorder (tests/fixtures/audio-recorder.mjs): the app's
// sound is recorded oscillator by oscillator, and the microphone answers from a sound this file sets (window.__fakeMic). So a test plays the
// part of the learner: it waits for the note the app played, reads what the app played from the recorded oscillators (not from the app's own
// plan), and sings it back, or something else, at the moment the app's window is open.
// Nothing here asserts.
import { hzOf } from './fixtures/audio-recorder.mjs';

export const centsUp = (hz, cents) => hz * 2 ** (cents / 1200);
export const midiOfHz = hz => 69 + 12 * Math.log2(hz / 440);
const NAMES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
export const noteOfHz = hz => { const m = Math.round(midiOfHz(hz)); return NAMES[m % 12] + (Math.floor(m / 12) - 1); };

export const phase = page => page.evaluate(() => SING && SING.phase);
export const waitPhase = (page, wanted, timeout = 12000) => page.waitForFunction(p => !!SING && (Array.isArray(p) ? p : [p]).includes(SING.phase), wanted, { timeout });
export const waitWindow = (page, index, timeout = 8000) => page.waitForFunction(i => !!SING && SING.phase === 'sing' && SING.windowIdx >= i, index, { timeout });
export const appOscillators = page => page.evaluate(() => __rec.oscillators.filter(o => !o.fake && !o.offline).map(o => ({ events: o.events, starts: o.starts, stops: o.stops, ended: o.ended })));
export const setMic = (page, hz, level) => page.evaluate(([h, l]) => { if (l !== undefined) __fakeMic.level = l; __fakeMic.set(h); }, [hz, level]);
export const sleep = (page, ms) => page.waitForTimeout(ms);

// The notes the app played since `before` oscillators existed, in the order they start: [{ hz, startS, ms }]
export async function playedSince(page, before) {
  const all = await appOscillators(page);
  return all.slice(before).map(o => ({ hz: o.events[0].v, startS: o.starts[0], ms: (o.stops[0] - o.starts[0]) * 1000 }))
    .sort((a, b) => a.startS - b.startS);
}

// Taps the button that plays the target, waits for the notes, and returns them. The sound has begun when its oscillators exist.
export async function tapAndHear(page, button = '#singGo') {
  const before = (await appOscillators(page)).length;
  await page.locator(button).click();
  await page.waitForFunction(n => __rec.oscillators.filter(o => !o.fake && !o.offline).length > n, before, { timeout: 8000 });
  return playedSince(page, before);
}

// One note sung back: waits for the window to open, sings `cents` above `hz` for `seconds`, then stops singing. Resolves when the try has an
// outcome (a result, or nothing heard).
export async function singNote(page, hz, cents, seconds, level) {
  await waitPhase(page, 'sing');
  await setMic(page, centsUp(hz, cents), level);
  await sleep(page, seconds * 1000);
  await setMic(page, 0);
}
export const waitOutcome = (page, timeout = 12000) => waitPhase(page, ['result', 'nothing', 'failed', 'ready'], timeout);

// The words on the screen after a try: the marks of the feedback, or the line the app says when nothing was heard
export const marksText = page => page.evaluate(() => [...document.querySelectorAll('[data-feedback] .mark')].map(m => [...m.children].map(x => x.textContent.trim()).join(' ')));
export const sayText = page => page.evaluate(() => (document.querySelector('.singsay') || { textContent: '' }).textContent.trim());
export const stripState = page => page.evaluate(() => {
  const svg = document.querySelector('.pitchstrip');
  return svg ? { line: svg.dataset.line, bars: svg.querySelectorAll('.bar').length, d: svg.querySelector('.voice').getAttribute('d') || '' } : null;
});
export const storedTries = (page, subject, key) => page.evaluate(([s, k]) => { const items = JSON.parse(localStorage.getItem(`pl:${s}:items`) || '{}'); return (items[k] || { tries: [] }).tries; }, [subject, key]);
export const storedRange = (page, subject) => page.evaluate(s => { const n = JSON.parse(localStorage.getItem(`pl:${s}:notes`) || '{}'); return n.range || null; }, subject);

// A hum with a slide up to `top` and down to `bottom` (half-step numbers), for the range: hold the bottom, slide up, hold the top; then slide down
export async function singRange(page, bottom, top) {
  const hz = m => 440 * 2 ** ((m - 69) / 12);
  await waitWindow(page, 0);
  await setMic(page, hz(bottom)); await sleep(page, 800);
  for (let k = 1; k <= 8; k++) { await setMic(page, hz(bottom + (top - bottom) * k / 8)); await sleep(page, 220); }
  await setMic(page, hz(top)); await sleep(page, 900);
  await waitWindow(page, 1);
  await setMic(page, hz(top)); await sleep(page, 600);
  for (let k = 1; k <= 8; k++) { await setMic(page, hz(top - (top - (bottom + 2)) * k / 8)); await sleep(page, 220); }
  await setMic(page, hz(bottom + 2)); await sleep(page, 1000);
  await setMic(page, 0);
}
export { hzOf };
