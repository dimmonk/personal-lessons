// Browser checks for sound (lesson standard section 21, X8 to X12): the "Hear it" and "Try it" blocks on a card, the sounds the app makes,
// and the note tool that listens through the microphone. Proved on a small fixture unit that lives in tests/fixtures/audio-unit.mjs and is
// registered in the page, never in public/, and played through the real unit player. Every group of checks has negative controls: a fault
// seeded into the engine that must turn exactly its own checks red and no other.
//
// What is real here: the app's own sound code runs in Chromium and its AudioContext runs (headless Chromium has a silent output). The
// microphone path runs for real up to the stream: the page's getUserMedia is replaced by one that returns a MediaStream made of oscillators
// at a pitch the test chooses (tests/fixtures/audio-recorder.mjs), so the real analyser, the real pitch finder and the real needle read it.
// What this cannot do is hear anything, or use a real microphone or a phone's speaker.
//
// Run alone: node tests/e2e-audio.mjs. To wire it into tests/e2e.mjs: import { testAudio } and call await testAudio(unitEnv).
// Each function takes `env` from e2e.mjs: { freshPage, check }.
import { mkdir, mkdtemp, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { registerAudioUnit, AUDIO_DESIGNS } from './fixtures/audio-unit.mjs';
import { gotoCard, gotoDrill } from './fixtures/walk.mjs';
import { startRecorder, recorded, allEnded, waitStatus, expectedCents, hzOf, wavOf } from './fixtures/audio-recorder.mjs';
import { startServer } from './static-server.mjs';
import { APP_JARGON, abstractIn } from './plain-words.mjs';
import { britishIn } from './american.mjs';

const SHOT_DIR = process.env.FC_SHOTS || null;
const CARDS_WITH_SOUND = ['term-notecheck', 'meet-onnote', 'meet-flat', 'meet-sharp', 'meet-scooping', 'meet-guessing', 'q-p1'];
const D4 = hzOf('D4');
const safe = async fn => { try { return !!(await fn()); } catch { return false; } };   // a seeded fault may break a step: that step's check is then red

async function shot(page, name) {
  if (!SHOT_DIR) return;
  await mkdir(SHOT_DIR, { recursive: true });
  const size = page.viewportSize(), height = await page.evaluate(() => document.documentElement.scrollHeight);
  await page.setViewportSize({ width: size.width, height: Math.max(size.height, height) });
  await page.screenshot({ path: `${SHOT_DIR}/${name}.png` });
  await page.setViewportSize(size);
}
// the fixture unit open in the player, with the recorder in the page. mode: what the microphone answers (see startRecorder)
async function openAudioUnit(env, { mode = 'grant', width = 390, card = null } = {}) {
  const { context, page } = await env.freshPage(width);
  await page.addInitScript(startRecorder, mode);
  await page.reload();
  const id = await page.evaluate(registerAudioUnit, AUDIO_DESIGNS);
  await page.evaluate(id => { SUBJECTS.push(buildSubject(id, SUBJECTS.length)); }, id);
  if (env.fault) await env.fault(page);
  await page.evaluate(id => { const subj = SUBJECTS.find(s => s.id === id); openUnit(subj, 0); }, id);
  if (card) await gotoCard(page, card);
  await page.evaluate(() => { __rec.timers.length = 0; });
  return { context, page, id };
}
const frames = (page, n = 2) => page.evaluate(n => new Promise(done => { const tick = left => left ? requestAnimationFrame(() => tick(left - 1)) : done(); tick(n); }), n);
// the keys in storage, and the log without the unit player's own 'start' events (entering the unit again logs one)
const storageNow = page => page.evaluate(() => ({ keys: Object.keys(localStorage).sort(), log: (JSON.parse(localStorage.getItem('pl:log')) || []).filter(e => e.type !== 'start') }));
const lineOf = (page, answer) => page.evaluate(ref => { const [code, id] = ref.split('.'); return UNIT_RUN.v.option(code, id).n; }, answer);
const sayOf = (page, key) => page.evaluate(k => SAY[k], key);
const statusOf = page => page.locator('.notesay').first().textContent();
const pressed = (page, scope, n) => page.locator(`${scope} [data-tone="${n}"]`).getAttribute('aria-pressed');
const appOscillators = page => page.evaluate(() => __rec.oscillators.filter(o => !o.fake && !o.offline));

/* ---------- X8: nothing sounds, and nothing is asked for, until a tap ---------- */
async function probeBeforeTap(env) {
  const { context, page } = await openAudioUnit(env);
  const out = {}, shown = [];
  for (const id of await page.evaluate(() => UNIT_RUN.v.cardOrder)) {
    await gotoCard(page, id);
    await frames(page);
    shown.push([id, await page.locator('[data-audio]').count()]);
  }
  await gotoDrill(page);
  await frames(page);
  out.blocksShown = shown.every(([id, n]) => n === (CARDS_WITH_SOUND.includes(id) ? 1 : 0));
  const seen = await recorded(page);
  out.noContextBeforeTap = seen.contexts === 0 && await page.evaluate(() => AUDIO_STATE.ctx === null);
  out.nothingScheduled = seen.oscillators === 0;
  out.micNotAsked = seen.micCalls === 0;
  await context.close();
  return out;
}
const beforeTapControls = [
  { name: 'a sound that starts when its card opens', red: ['nothingScheduled', 'noContextBeforeTap'], seed: page => page.evaluate(() => { const o = wireAudio; wireAudio = (root, card, v) => { o(root, card, v); if (card.audio && card.audio.kind === 'tones') startExample(card.audio.examples[0], () => {}); }; }) },
  { name: 'a sound system made when a card opens', red: ['noContextBeforeTap'], seed: page => page.evaluate(() => { const o = audioHtml; audioHtml = (ctx, card) => { if (card.audio) audioContext(); return o(ctx, card); }; }) },
  { name: 'a microphone asked for when a card opens', red: ['noContextBeforeTap', 'micNotAsked'], seed: page => page.evaluate(() => { const o = wireAudio; wireAudio = (root, card, v) => { o(root, card, v); if (card.audio && card.audio.kind === 'notecheck') startMeter('D4', { onView() {}, onStop() {}, onFail() {} }); }; }) }
];

/* ---------- X9: the sounds are what the data says, measured on the rendered samples ---------- */
// One tone rendered alone by scheduleExample into an OfflineAudioContext and measured with detectPitch at chosen times. Returns cents against the tone's own note.
function renderAndMeasure(page, tone, times) {
  return page.evaluate(async ({ tone, times }) => {
    const rate = 44100, seconds = audioToneEndMs(tone) / 1000 + 0.2;
    const ctx = new OfflineAudioContext(1, Math.ceil(rate * seconds), rate);
    scheduleExample(ctx, ctx.destination, { play: [tone] }, 0);
    const data = (await ctx.startRendering()).getChannelData(0), ref = noteToHz(tone.note);
    return times.map(t => { const at = Math.round(t * rate), got = detectPitch(data.subarray(at, at + 2048), rate); return got ? centsBetween(got.hz, ref) : null; });
  }, { tone, times });
}
const WINDOW_S = 2048 / 44100;   // each reading looks at this much sound, so it sits at the middle of it
// each reading is where the data's path puts the tone at the middle of the window, within a tolerance that grows where the path glides
async function measuresAsData(page, tone, times) {
  const got = await renderAndMeasure(page, tone, times);
  return got.every((cents, i) => {
    const mid = times[i] + WINDOW_S / 2, want = expectedCents(tone, mid), slope = Math.abs(expectedCents(tone, mid + 0.01) - expectedCents(tone, mid - 0.01)) / 0.02;
    return cents !== null && Math.abs(cents - want) <= 8 + 0.04 * slope;
  });
}
const rmsBetween = `(data, rate, a, b) => { const from = Math.round(a * rate), to = Math.round(b * rate); let sum = 0; for (let i = from; i < to; i++) sum += data[i] * data[i]; return Math.sqrt(sum / (to - from)); }`;
async function probeRendered(env) {
  const { context, page } = await openAudioUnit(env);
  const out = {}, D = AUDIO_DESIGNS;
  // a shade under: the second note starts 30 under the first and arrives on it
  out.flatFirst = await safe(() => measuresAsData(page, D.flat[0], [0.3, 2, 3.5]));
  out.flatSecond = await safe(async () => {
    const got = await renderAndMeasure(page, D.flat[1], [0.5, 1.2, 3.5]);
    return Math.abs(got[0] + 30) <= 5 && Math.abs(got[1] + 30) <= 5 && Math.abs(got[2]) <= 5 && await measuresAsData(page, D.flat[1], [0.5, 1.2, 2.2, 3.5]);
  });
  out.sharpSecond = await safe(async () => { const got = await renderAndMeasure(page, D.sharp[1], [0.5, 3.5]); return Math.abs(got[0] - 30) <= 5 && Math.abs(got[1]) <= 5; });
  out.matching = await safe(async () => (await Promise.all(D.matching.map(t => renderAndMeasure(page, t, [0.3, 2.5])))).flat().every(c => c !== null && Math.abs(c) <= 3));
  // scooping: each note starts 300 under and is back on the note by 0.6 s; the second is an F, 1.8 s later
  out.scoopRises = await safe(async () => {
    const got = await renderAndMeasure(page, D.scooping[0], [0, 0.6, 1.0]);
    return got[0] !== null && got[0] < -240 && got[0] > -310 && Math.abs(got[1]) <= 5 && Math.abs(got[2]) <= 5 && await measuresAsData(page, D.scooping[0], [0, 0.1, 0.2, 0.3, 0.6]);
  });
  out.scoopSecondNote = await safe(async () => (await measuresAsData(page, D.scooping[1], [1.8, 2.0, 2.4, 3.0])) && Math.abs((await renderAndMeasure(page, D.scooping[1], [2.8]))[0]) <= 5);
  out.hunting = await safe(() => measuresAsData(page, D.hunting[0], [0.02, 0.3, 0.7, 1.2, 1.7, 2.2, 3.0]));
  // the whole example: four tones together do not clip, and the ends of a tone are faded in and out (no click)
  out.noClipping = await safe(() => page.evaluate(async () => {
    const rate = 44100, ctx = new OfflineAudioContext(1, rate * 2, rate), tone = { note: 'D4', ms: 1000 };
    scheduleExample(ctx, ctx.destination, { play: [tone, tone, tone, tone] }, 0.1);
    const data = (await ctx.startRendering()).getChannelData(0), peak = data.reduce((m, x) => Math.max(m, Math.abs(x)), 0);
    return peak < 1 && peak > 0.3;
  }));
  out.fades = await safe(() => page.evaluate(async ([designs, rmsSource]) => {
    const rms = eval(rmsSource), rate = 44100, ctx = new OfflineAudioContext(1, rate * 6, rate);
    scheduleExample(ctx, ctx.destination, { play: designs.scooping }, 0.5);   // the second tone ends 3.3 s after the start
    const data = (await ctx.startRendering()).getChannelData(0), middle = rms(data, rate, 0.8, 1.2);
    return rms(data, rate, 0, 0.49) < 1e-4 && middle > 0.05 && rms(data, rate, 0.5, 0.51) < 0.5 * middle && rms(data, rate, 3.79, 3.8) < 0.5 * middle && rms(data, rate, 3.9, 5.9) < 1e-4;
  }, [AUDIO_DESIGNS, rmsBetween]));
  await context.close();
  return out;
}
const PATH_KEYS = ['flatSecond', 'sharpSecond', 'scoopRises', 'scoopSecondNote', 'hunting'];
const renderedControls = [
  { name: 'a path that is ignored', red: PATH_KEYS, seed: page => page.evaluate(() => { const o = scheduleTone; scheduleTone = (ctx, to, tone, t0) => o(ctx, to, { note: tone.note, at: tone.at, ms: audioToneLengthMs(tone) }, t0); }) },
  { name: 'cents that are not applied', red: PATH_KEYS, seed: page => page.evaluate(() => { centsToHz = hz => hz; }) },
  { name: 'tones as loud as the sound system allows', red: ['noClipping', 'fades'], seed: page => page.evaluate(() => { const o = scheduleTone; scheduleTone = (ctx, to, tone, t0) => { const made = o(ctx, to, tone, t0); made.gain.gain.cancelScheduledValues(0); made.gain.gain.setValueAtTime(1, 0); return made; }; }) },
  { name: 'tones with no fade', red: ['fades'], seed: page => page.evaluate(() => { const o = scheduleTone; scheduleTone = (ctx, to, tone, t0) => { const made = o(ctx, to, tone, t0); made.gain.gain.cancelScheduledValues(0); made.gain.gain.setValueAtTime(0.2, 0); return made; }; }) }
];

/* ---------- X9: a real tap, and every way a sound is ended ---------- */
async function playThen(page, card, trigger, scope = '') {
  await gotoCard(page, card);
  await page.click(`${scope} [data-tone="0"]`);
  await page.waitForFunction(() => __rec.oscillators.some(o => !o.fake && !o.offline && !o.ended));
  await trigger();
  await allEnded(page, 2500);
  return await page.evaluate(() => AUDIO_STATE.run === null);
}
async function probeTap(env) {
  const { context, page, id } = await openAudioUnit(env, { card: 'meet-flat' });
  const out = {}, before = await storageNow(page);
  // the data is what plays: two oscillators at D4, one steady, one 30 cents under that moves to D4
  await page.click('[data-tone="0"]');
  await page.waitForFunction(() => __rec.oscillators.filter(o => !o.fake && !o.offline).length === 2);
  const [steady, moving] = (await appOscillators(page)).map(({ events, starts, stops }) => ({ events, start: starts[0], stops }));
  const near = (got, want, tol = 0.2) => Math.abs(got - want) <= tol;
  out.steadyTone = steady.events.length === 1 && near(steady.events[0].v, D4, 0.01) && near(steady.stops[0] - steady.start, 4, 0.001);
  out.movingTone = moving.events.length === 4 && near(moving.events[0].v, hzOf('D4', -30), 0.01) && moving.events[0].m === 'setValueAtTime'
    && [[1.8, -30], [2.8, 0], [4, 0]].every(([s, c], i) => moving.events[i + 1].m === 'exponentialRampToValueAtTime' && near(moving.events[i + 1].v, hzOf('D4', c), 0.01) && near(moving.events[i + 1].t - moving.start, s, 0.001));
  out.startsFromTap = steady.start > 0 && near(steady.start, moving.start, 1e-9);
  out.playingShown = await safe(async () => (await pressed(page, '', 0)) === 'true' && /playing/i.test(await page.locator('[data-tone="0"]').innerText()));
  // tapping again stops it, and the button goes back when the last oscillator has ended
  await page.click('[data-tone="0"]');
  out.tapAgainStops = await safe(async () => { await allEnded(page); await page.waitForFunction(() => document.querySelector('[data-tone="0"]').getAttribute('aria-pressed') === 'false', null, { timeout: 2000 }); return !/playing/i.test(await page.locator('[data-tone="0"]').innerText()); });
  // starting another stops the first: one sound at a time
  await gotoCard(page, 'q-p1');
  const made = (await appOscillators(page)).length;
  await page.click('[data-tone="0"]');
  await page.waitForFunction(() => __rec.oscillators.filter(o => !o.fake && !o.offline && !o.ended).length === 2);
  await page.click('[data-tone="2"]');
  out.oneAtATime = await safe(async () => {
    await page.waitForFunction(n => __rec.oscillators.filter(o => !o.fake && !o.offline).length === n + 4 && __rec.oscillators.filter(o => !o.fake && !o.offline && !o.ended).length === 2, made, { timeout: 2000 });
    return (await pressed(page, '', 0)) === 'false' && (await pressed(page, '', 2)) === 'true' && (await pressed(page, '', 1)) === 'false';
  });
  // every way a sound is ended
  out.nextStops = await safe(() => playThen(page, 'meet-flat', () => page.click('#fwd')));
  out.backStops = await safe(() => playThen(page, 'meet-sharp', () => page.click('#back')));
  out.jumpStops = await safe(() => playThen(page, 'meet-flat', () => page.evaluate(() => document.querySelector('[data-jump="1"]').click())));
  out.repaintStops = await safe(() => playThen(page, 'meet-flat', () => page.evaluate(() => paintUnit())));
  const hide = () => page.evaluate(() => { Object.defineProperty(document, 'hidden', { configurable: true, get: () => true }); document.dispatchEvent(new Event('visibilitychange')); });
  out.hiddenStops = await safe(() => playThen(page, 'meet-flat', hide));
  await page.evaluate(() => { delete document.hidden; });
  out.pagehideStops = await safe(() => playThen(page, 'meet-flat', () => page.evaluate(() => window.dispatchEvent(new Event('pagehide')))));
  out.leaveStops = await safe(() => playThen(page, 'meet-flat', () => page.click('#screen [data-v="subject"]')));
  // a card opened in a sheet works there too, and closing the sheet ends the sound
  await page.evaluate(id => { openUnit(SUBJECTS.find(s => s.id === id), 0); }, id);
  out.sheetWorks = await safe(async () => {
    await gotoCard(page, 'orient');
    await page.evaluate(() => openCardSheet(UNIT_RUN.v, 'meet-scooping', null));
    await page.click('.sheet [data-tone="0"]');
    await page.waitForFunction(() => __rec.oscillators.some(o => !o.fake && !o.offline && !o.ended));
    const playing = (await pressed(page, '.sheet', 0)) === 'true';
    await page.click('[data-close-sheet]');
    await allEnded(page, 2500);
    return playing && !(await page.locator('.sheet').count()) && await page.evaluate(() => AUDIO_STATE.run === null);
  });
  out.sheetOpenStops = await safe(async () => {
    await gotoCard(page, 'meet-flat');
    await page.click('[data-tone="0"]');
    await page.waitForFunction(() => __rec.oscillators.some(o => !o.fake && !o.offline && !o.ended));
    await page.evaluate(() => openCardSheet(UNIT_RUN.v, 'meet-scooping', null));
    await allEnded(page, 2500);
    await page.click('[data-close-sheet]');
    return true;
  });
  out.storesNothing = JSON.stringify(before) === JSON.stringify(await storageNow(page));
  out.noTimers = (await recorded(page)).timers === 0;
  await context.close();
  return out;
}
const tapControls = [
  { name: 'a sound not stopped on Next', red: ['nextStops'], seed: page => page.evaluate(() => { const o = stopAudio; let inNext = false; document.addEventListener('click', e => { inNext = !!(e.target.closest && e.target.closest('#fwd')); }, true); stopAudio = () => { if (!inNext) o(); }; }) },
  { name: 'a sound not stopped when the page is hidden', red: ['hiddenStops', 'pagehideStops'], seed: page => page.evaluate(() => { watchPageHidden = () => {}; }) },
  { name: 'a sound left going when a card sheet closes', red: ['sheetWorks'], seed: page => page.evaluate(() => { const o = openCardSheet; openCardSheet = (v, id, opener) => { o(v, id, opener); document.querySelector('.sheet [data-close-sheet]').onclick = () => { document.querySelector('.sheet').remove(); document.querySelector('.app').inert = false; document.body.style.overflow = ''; }; }; }) },
  { name: 'a button that never goes back', red: ['tapAgainStops', 'oneAtATime'], seed: page => page.evaluate(() => { const o = paintSoundButton; paintSoundButton = (btn, playing) => { if (playing) o(btn, true); }; }) },
  { name: 'a sound system that writes to storage', red: ['storesNothing'], seed: page => page.evaluate(() => { const o = audioContext; audioContext = () => { localStorage.setItem('pl:audio', '1'); return o(); }; }) },
  { name: 'a timer in the sound code', red: ['noTimers'], seed: page => page.evaluate(() => { const o = startExample; startExample = (ex, done) => { setTimeout(() => {}, 5000); return o(ex, done); }; }) }
];

/* ---------- X9: a sound that runs its whole length ends by itself, and the button goes back ---------- */
async function probeRunsOut(env) {
  const { context, page } = await openAudioUnit(env, { card: 'meet-onnote' });
  await page.click('[data-tone="0"]');
  const out = { runsOut: false };
  out.runsOut = await safe(async () => {
    await page.waitForFunction(() => __rec.oscillators.filter(o => !o.fake && !o.offline).length === 2);
    const playing = (await pressed(page, '', 0)) === 'true';
    await page.waitForFunction(() => document.querySelector('[data-tone="0"]').getAttribute('aria-pressed') === 'false', null, { timeout: 6000 });
    return playing && (await appOscillators(page)).every(o => o.ended);
  });
  await context.close();
  return out;
}

/* ---------- X10: the note tool listens, and says under, on or over ---------- */
const VERDICTS = [   // cents from D4, and what the tool must say
  ['reportsOn', [0], 'on'], ['reportsUnder', [-50], 'under'], ['reportsOver', [50], 'over'], ['octaveCounts', [-1200, 1200], 'on'],
  ['nearEdgeOn', [-20, 20], 'on'], ['nearEdgeOff', [-40, 40], 'edge']
];
const markerLeft = page => page.evaluate(() => { const m = document.querySelector('.pitchmeter .marker'); return m.classList.contains('idle') ? null : parseFloat(m.style.left); });
// feeds the microphone a sound `cents` from D, starting from silence so that what is read is this sound, and says whether the tool settles on `line`
async function feedAndSettle(page, cents, line) {
  await page.evaluate(() => __fakeMic.set(0));
  await waitStatus(page, await sayOf(page, 'micListening'), 5000);
  await page.evaluate(hz => __fakeMic.set(hz), hzOf('D4', cents));
  await waitStatus(page, line, 5000);
  await frames(page, 12);   // a verdict that is only passing through on the way to another one does not hold
  return (await statusOf(page)) === line;
}
// whether the microphone stream made at this position is switched off and the app holds nothing
const released = (page, at) => page.evaluate(at => __rec.streams[at].getTracks().every(t => t.readyState === 'ended') && METER.live === null, at);
const waitReleased = (page, at) => page.waitForFunction(at => __rec.streams[at].getTracks().every(t => t.readyState === 'ended'), at, { timeout: 3000 });
// picks D and starts the microphone; returns the position of the stream it was given
async function micOn(page, scope = '') {
  const at = (await recorded(page)).streams;
  await page.click(`${scope} [data-note="D4"]`);
  await page.click(`${scope} [data-mic]`);
  await page.waitForFunction(n => __rec.streams.length === n + 1 && METER.live !== null, at);
  return at;
}
async function micReleasedBy(page, trigger, card = 'term-notecheck') {
  await gotoCard(page, card);
  const at = await micOn(page);
  await trigger();
  await waitReleased(page, at);
  return await released(page, at);
}
async function probeMic(env) {
  const { context, page, id } = await openAudioUnit(env, { card: 'term-notecheck' });
  const out = {}, before = await storageNow(page);
  const lines = { under: await lineOf(page, 'P1.under'), on: await lineOf(page, 'P1.match'), over: await lineOf(page, 'P1.over') };
  const [waitLine, listening, pickFirst] = await Promise.all(['micWait', 'micListening', 'micPickFirst'].map(k => sayOf(page, k)));
  // Start with no note picked asks for nothing
  await page.click('[data-mic]');
  out.pickFirst = await safe(async () => (await statusOf(page)) === pickFirst && (await recorded(page)).micCalls === 0);
  // a note picked and the microphone started: the microphone is asked for on that tap, with echo cancelling, noise suppression and gain control off
  await page.click('[data-note="D4"]');
  await page.click('[data-mic]');
  await page.waitForFunction(() => __rec.streams.length === 1);
  const seen = await recorded(page);
  out.asksOnTap = seen.micCalls === 1 && JSON.stringify(seen.constraints[0]) === JSON.stringify({ audio: { echoCancellation: false, noiseSuppression: false, autoGainControl: false } });
  out.micToggles = await safe(async () => /Stop the microphone/.test(await page.locator('[data-mic]').innerText()));
  out.listensInSilence = await safe(async () => { await waitStatus(page, listening, 4000); return (await markerLeft(page)) === null; });
  // each known pitch, fed in as the microphone
  const sides = [];
  for (const [key, list, verdict] of VERDICTS) {
    out[key] = true;
    for (const cents of list) {
      const line = verdict === 'edge' ? lines[cents < 0 ? 'under' : 'over'] : lines[verdict];
      out[key] = out[key] && await safe(() => feedAndSettle(page, cents, line));
      if (key === 'reportsUnder' || key === 'reportsOver') sides.push(await markerLeft(page));
    }
  }
  out.needleSides = sides[0] !== null && sides[0] < 35 && sides[1] !== null && sides[1] > 65;
  out.needleMiddle = await safe(async () => { await feedAndSettle(page, 0, lines.on); const left = await markerLeft(page); return left > 40 && left < 60; });
  // silence goes back to listening
  await page.evaluate(() => __fakeMic.set(0));
  out.silenceListens = await safe(async () => { await waitStatus(page, listening, 4000); return (await markerLeft(page)) === null; });
  // the app's own note is not heard: a sound that would read over keeps playing in the microphone while a note is tapped, and no verdict shows
  await page.evaluate(hz => __fakeMic.set(hz), hzOf('D4', 50));
  await page.waitForFunction(all => all.includes(document.querySelector('.notesay').textContent), Object.values(lines), { timeout: 5000 });
  await frames(page, 12);
  const shown = await statusOf(page);   // what the tool says for a sound 50 over the note, whatever its words
  await page.evaluate(() => {
    window.__echo = { t0: performance.now(), seen: [] };
    new MutationObserver(() => window.__echo.seen.push([performance.now() - window.__echo.t0, document.querySelector('.notesay').textContent])).observe(document.querySelector('.notesay'), { childList: true, characterData: true, subtree: true });
  });
  await page.click('[data-note="D4"]');
  await page.evaluate(() => { window.__echo.t0 = performance.now(); });
  await page.waitForFunction(() => performance.now() - window.__echo.t0 > 1600);
  out.ignoresOwnNote = await safe(async () => {
    const seenNow = await page.evaluate(() => window.__echo.seen), quietShown = seenNow.some(([, text]) => text === waitLine);
    const verdictDuring = seenNow.filter(([t]) => t > 200 && t < 1450).some(([, text]) => Object.values(lines).includes(text));
    await waitStatus(page, shown, 4000);   // and once the note and the quarter second after it are over, it listens again
    return quietShown && !verdictDuring;
  });
  // a new note picked is the one sung against: the same sound, 50 over D, is now far under G
  out.newNoteIsTheTarget = await safe(async () => {
    await page.click('[data-note="G4"]');
    await page.waitForFunction(old => document.querySelector('.notesay').textContent !== old, shown, { timeout: 3000 });
    await waitStatus(page, lines.under, 6000);
    return (await page.locator('[data-note="G4"]').getAttribute('aria-pressed')) === 'true' && (await page.locator('[data-note="D4"]').getAttribute('aria-pressed')) === 'false';
  });
  // Stop turns the microphone off
  await page.click('[data-mic]');
  out.releasedOnStop = await safe(async () => { await waitReleased(page, 0); return (await released(page, 0)) && /Start the microphone/.test(await page.locator('[data-mic]').innerText()) && (await statusOf(page)) === ''; });
  // and so does everything else that leaves the card
  out.releasedOnNext = await safe(() => micReleasedBy(page, () => page.click('#fwd')));
  out.releasedOnBack = await safe(() => micReleasedBy(page, () => page.click('#back')));
  out.releasedOnJump = await safe(() => micReleasedBy(page, () => page.evaluate(() => document.querySelector('[data-jump="2"]').click())));
  out.releasedOnRepaint = await safe(() => micReleasedBy(page, () => page.evaluate(() => paintUnit())));
  out.releasedWhenHidden = await safe(async () => {
    const released = await micReleasedBy(page, () => page.evaluate(() => { Object.defineProperty(document, 'hidden', { configurable: true, get: () => true }); document.dispatchEvent(new Event('visibilitychange')); }));
    await page.evaluate(() => { delete document.hidden; });
    return released;
  });
  out.releasedOnPagehide = await safe(() => micReleasedBy(page, () => page.evaluate(() => window.dispatchEvent(new Event('pagehide')))));
  out.releasedOnLeave = await safe(() => micReleasedBy(page, () => page.click('#screen [data-v="subject"]')));
  await page.evaluate(id => { openUnit(SUBJECTS.find(s => s.id === id), 0); }, id);
  // a card sheet carries the tool too, and closing it turns the microphone off
  out.sheetMic = await safe(async () => {
    await gotoCard(page, 'orient');
    await page.evaluate(() => openCardSheet(UNIT_RUN.v, 'term-notecheck', null));
    const at = await micOn(page, '.sheet');
    await page.evaluate(hz => __fakeMic.set(hz), D4);
    await waitStatus(page, lines.on, 5000);
    await page.click('[data-close-sheet]');
    await waitReleased(page, at);
    return await released(page, at);
  });
  out.storesNothing = JSON.stringify(before) === JSON.stringify(await storageNow(page));
  out.noTimers = (await recorded(page)).timers === 0;
  await context.close();
  return out;
}
const micControls = [
  { name: 'the verdict reversed for under and over', red: ['reportsUnder', 'reportsOver', 'nearEdgeOff', 'newNoteIsTheTarget'], seed: page => page.evaluate(() => { const o = noteVerdict; noteVerdict = c => ({ under: 'over', over: 'under', on: 'on' })[o(c)]; }) },
  { name: 'a note an octave away that does not count', red: ['octaveCounts'], seed: page => page.evaluate(() => { centsToNote = (hz, note) => centsBetween(hz, noteToHz(note)); }) },
  { name: 'the microphone not released on Stop', red: ['releasedOnStop'], seed: page => page.evaluate(() => { const o = stopMeter; let leaky = false; document.addEventListener('click', e => { const mic = e.target.closest && e.target.closest('[data-mic]'); leaky = !!mic && /Stop/.test(mic.textContent); requestAnimationFrame(() => { leaky = false; }); }, true); stopMeter = () => { if (!leaky) return o(); METER.token++; const live = METER.live; if (!live) return; METER.live = null; cancelAnimationFrame(live.raf); live.handlers.onStop(); }; }) },
  { name: 'the microphone not released on Next', red: ['releasedOnNext'], seed: page => page.evaluate(() => { const o = stopMeter; let inNext = false; document.addEventListener('click', e => { inNext = !!(e.target.closest && e.target.closest('#fwd')); requestAnimationFrame(() => { inNext = false; }); }, true); stopMeter = () => { if (!inNext) o(); }; }) },
  { name: 'the microphone not released when the page is hidden', red: ['releasedWhenHidden', 'releasedOnPagehide'], seed: page => page.evaluate(() => { watchPageHidden = () => {}; }) },
  { name: 'the app hearing its own note', red: ['ignoresOwnNote'], seed: page => page.evaluate(() => { audioQuietUntil = () => 0; }) },
  { name: 'a note that does not change the target', red: ['newNoteIsTheTarget'], seed: page => page.evaluate(() => { setMeterTarget = () => {}; }) },
  { name: 'a microphone reading written to storage', red: ['storesNothing'], seed: page => page.evaluate(() => { const o = noteVerdict; noteVerdict = c => { localStorage.setItem('pl:heard', String(c)); return o(c); }; }) }
];

/* ---------- X10: a refused or missing microphone, and the older read of the sound ---------- */
async function probeMicRefused(env) {
  const out = {};
  for (const [mode, name, say] of [['deny', 'denied', 'micDenied'], ['none', 'missing', 'micMissing'], ['nodevices', 'noDevices', 'micMissing']]) {
    const { context, page } = await openAudioUnit(env, { mode, card: 'term-notecheck' });
    const line = await sayOf(page, say), start = await sayOf(page, 'micStart');
    await page.click('[data-note="D4"]');
    await page.click('[data-mic]');
    out[`${name}Line`] = await safe(async () => { await waitStatus(page, line, 3000); return (await page.locator('[data-mic]').innerText()).includes(start) && (await markerLeft(page)) === null; });
    // the notes still play
    const made = (await appOscillators(page)).length;
    await page.click('[data-note="E4"]');
    out[`${name}NotesPlay`] = await safe(async () => { await page.waitForFunction(n => __rec.oscillators.filter(o => !o.fake && !o.offline).length === n + 1, made, { timeout: 2000 }); return await page.evaluate(() => AUDIO_STATE.run !== null); });
    await context.close();
  }
  // an old browser with no float read of the sound: the byte read gives the same answer
  const { context, page } = await openAudioUnit(env, { card: 'term-notecheck' });
  await page.evaluate(() => { AnalyserNode.prototype.getFloatTimeDomainData = undefined; });
  await micOn(page);
  const lines = { on: await lineOf(page, 'P1.match'), over: await lineOf(page, 'P1.over') };
  out.byteRead = await safe(async () => (await feedAndSettle(page, 0, lines.on)) && (await feedAndSettle(page, 50, lines.over)));
  await context.close();
  return out;
}
const refusedControls = [
  { name: 'a refusal that is not shown', red: ['deniedLine'], seed: page => page.evaluate(() => { const o = micFailureKind; micFailureKind = err => err && err.name === 'NotAllowedError' ? 'missing' : o(err); }) },
  { name: 'a microphone start that fails without a word', red: ['noDevicesLine'], seed: page => page.evaluate(() => { const o = startMeter; startMeter = (target, handlers) => navigator.mediaDevices ? o(target, handlers) : undefined; }) }
];

/* ---------- X10 through the browser's own getUserMedia: Chromium's fake capture device plays a file of D ---------- */
// Nothing is replaced here: the real permission path, the real constraints and a real MediaStream reach the real analyser.
async function probeRealDevice() {
  const { chromium } = await import('playwright');
  const dir = await mkdtemp(join(tmpdir(), 'fieldcraft-audio-')), server = await startServer(), out = {};
  await writeFile(join(dir, 'd4.wav'), wavOf(hzOf('D4')));
  const browser = await chromium.launch({ args: ['--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream', `--use-file-for-fake-audio-capture=${join(dir, 'd4.wav')}`] });
  try {
    const context = await browser.newContext({ viewport: { width: 390, height: 800 }, permissions: ['microphone'] });
    const page = await context.newPage();
    await page.addInitScript(startRecorder, 'real');
    await page.goto(server.url);
    await page.evaluate(() => localStorage.clear());
    await page.reload();
    const id = await page.evaluate(registerAudioUnit, AUDIO_DESIGNS);
    await page.evaluate(id => { SUBJECTS.push(buildSubject(id, SUBJECTS.length)); openUnit(SUBJECTS.find(s => s.id === id), 0); }, id);
    await gotoCard(page, 'term-notecheck');
    const lines = { under: await lineOf(page, 'P1.under'), on: await lineOf(page, 'P1.match') };
    await page.click('[data-note="D4"]');
    await page.click('[data-mic]');
    out.realDeviceOn = await safe(async () => { await waitStatus(page, lines.on, 15000); return true; });
    // the file is D: against E it is under
    await page.click('[data-note="E4"]');
    out.realDeviceUnder = await safe(async () => { await waitStatus(page, lines.under, 8000); return true; });
    const seen = await recorded(page);
    out.realDeviceAsked = seen.micCalls === 1 && JSON.stringify(seen.constraints[0]) === JSON.stringify({ audio: { echoCancellation: false, noiseSuppression: false, autoGainControl: false } });
    await page.click('[data-mic]');
    out.realDeviceReleased = await safe(async () => { await waitReleased(page, 0); return await released(page, 0); });
    await context.close();
  } finally {
    await browser.close();
    await server.close();
    await rm(dir, { recursive: true, force: true });
  }
  return out;
}

/* ---------- X12: no overflow and no clipped text at 360 and 390 px, and the words are plain ---------- */
async function layoutProblems(page, label) {
  return page.evaluate(label => {
    const out = [], vw = document.documentElement.clientWidth, over = document.documentElement.scrollWidth - vw;
    if (over > 0) out.push(`${label}: ${over}px sideways overflow`);
    for (const el of document.querySelectorAll('#cardbody *, .sheet *')) {
      const r = el.getBoundingClientRect();
      if (r.width && (r.right > vw + 0.5 || r.left < -0.5)) out.push(`${label}: <${el.tagName.toLowerCase()}> spans ${Math.round(r.left)}..${Math.round(r.right)}`);
    }
    for (const el of document.querySelectorAll('button, .soundlabel, .notesay, .audiohint, .audiostep'))
      if (el.offsetParent !== null && (el.scrollWidth > el.clientWidth + 1 || el.scrollHeight > el.clientHeight + 1) && getComputedStyle(el).textOverflow !== 'ellipsis') out.push(`${label}: cut off "${el.textContent.trim().slice(0, 24)}"`);
    return out.slice(0, 3);
  }, label);
}
const JARGON_IN_SOUND = /\b(octaves?|cents?|hertz|semitones?|frequency|pitch)\b/i;
async function probeLayout(env) {
  const problems = [], words = [];
  for (const width of [360, 390]) {
    const { context, page } = await openAudioUnit(env, { width });
    for (const id of CARDS_WITH_SOUND) {
      await gotoCard(page, id);
      const look = async state => problems.push(...await layoutProblems(page, `${width}px ${id} ${state}`));
      await look('idle');
      const text = (await page.locator('[data-audio]').innerText()).replace(/“[^”]*”/g, ' ');
      words.push(...[...APP_JARGON.filter(w => new RegExp(`\\b${w}\\b`, 'i').test(text)), ...abstractIn(text).map(e => e.word), ...britishIn(text), ...(JARGON_IN_SOUND.test(text) ? [JARGON_IN_SOUND.exec(text)[0]] : [])].map(w => `${id}: "${w}"`));
      if (id === 'term-notecheck') {
        await micOn(page);
        for (const [cents, key] of [[-50, 'P1.under'], [0, 'P1.match'], [50, 'P1.over']]) { await feedAndSettle(page, cents, await lineOf(page, key)); await look(`verdict ${cents}`); }
        await page.click('[data-mic]');
      } else {
        await page.click('[data-tone="0"]');
        await page.waitForFunction(() => document.querySelector('[data-tone="0"]').getAttribute('aria-pressed') === 'true');
        await look('playing');
        await page.click('[data-tone="0"]');
      }
    }
    await gotoCard(page, 'meet-scooping');
    await page.evaluate(() => openCardSheet(UNIT_RUN.v, 'q-p1', null));
    problems.push(...await layoutProblems(page, `${width}px sheet`));
    await context.close();
  }
  return { noSidewaysScroll: problems.length === 0, plainWords: words.length === 0, detail: [...problems, ...words].slice(0, 4).join(' | ') };
}
const layoutControls = [
  { name: 'a sound block wider than the screen', red: ['noSidewaysScroll'], seed: page => page.evaluate(() => { const o = tonesHtml; tonesHtml = (ctx, audio) => o(ctx, audio) + '<div style="width:700px;height:4px"></div>'; }) },
  { name: 'a sentence with a word a beginner does not know', red: ['plainWords'], seed: page => page.evaluate(() => { SAY.notePick = 'Pick a note. Its pitch will sound.'; }) }
];

/* ---------- screenshots for looking at, when FC_SHOTS is set ---------- */
async function takeShots(env) {
  if (!SHOT_DIR) return;
  const { context, page } = await openAudioUnit(env, { card: 'term-notecheck' });
  await shot(page, 'term-note-tool-idle');
  await micOn(page);
  for (const [cents, key, name] of [[-50, 'P1.under', 'under'], [0, 'P1.match', 'on'], [50, 'P1.over', 'over']]) { await feedAndSettle(page, cents, await lineOf(page, key)); await shot(page, `term-note-tool-${name}`); }
  await page.click('[data-mic]');
  await gotoCard(page, 'meet-flat');
  await shot(page, 'tones-idle');
  await page.click('[data-tone="0"]');
  await page.waitForFunction(() => document.querySelector('[data-tone="0"]').getAttribute('aria-pressed') === 'true');
  await shot(page, 'tones-playing');
  await page.click('[data-tone="0"]');
  await gotoCard(page, 'q-p1');
  await page.click('[data-tone="1"]');
  await page.waitForFunction(() => document.querySelector('[data-tone="1"]').getAttribute('aria-pressed') === 'true');
  await shot(page, 'tones-four-examples-playing');
  await page.evaluate(() => openCardSheet(UNIT_RUN.v, 'meet-scooping', null));
  await page.click('.sheet [data-tone="0"]');
  await shot(page, 'sheet-tones-playing');
  await page.click('[data-close-sheet]');
  await page.evaluate(() => openCardSheet(UNIT_RUN.v, 'term-notecheck', null));
  await micOn(page, '.sheet');
  await feedAndSettle(page, 50, await lineOf(page, 'P1.over'));
  await shot(page, 'sheet-note-tool-over');
  await context.close();
}

/* ---------- the runner ---------- */
const sameSet = (a, b) => JSON.stringify([...a].sort()) === JSON.stringify([...b].sort());
async function group(env, name, probe, controls) {
  const positive = await probe(env);
  for (const [key, ok] of Object.entries(positive)) if (key !== 'detail') env.check(ok === true, `${name}: ${key} failed${positive.detail && ok !== true ? ' (' + positive.detail + ')' : ''}`);
  for (const c of process.env.AUDIO_NO_CONTROLS ? [] : controls) {
    let result;
    try { result = await probe({ ...env, fault: c.seed }); }
    catch (err) { env.check(false, `${name}, negative control "${c.name}" crashed: ${err.message.split('\n')[0]}`); continue; }
    const red = Object.keys(result).filter(k => k !== 'detail' && !result[k]);
    env.check(sameSet(red, c.red), `${name}, negative control "${c.name}": expected [${c.red.join(', ')}] to go red, got [${red.join(', ') || 'none'}]`);
  }
}
export async function testAudio(env) {
  const groups = [['before a tap', probeBeforeTap, beforeTapControls], ['rendered sounds', probeRendered, renderedControls], ['a tap', probeTap, tapControls],
    ['a sound that runs out', probeRunsOut, []], ['the microphone', probeMic, micControls], ['a refused microphone', probeMicRefused, refusedControls], ['a real microphone device', probeRealDevice, []], ['360 and 390px', probeLayout, layoutControls]];
  for (const [name, probe, controls] of groups) {
    if (process.env.AUDIO_GROUP && !name.includes(process.env.AUDIO_GROUP)) continue;   // while working on one group
    try { await group(env, name, probe, controls); }
    catch (err) { env.check(false, `${name} crashed: ${err.message.split('\n')[0]}`); }
  }
  try { await takeShots(env); }
  catch (err) { env.check(false, `screenshots crashed: ${err.message.split('\n')[0]}`); }
}

/* ---------- standalone ---------- */
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const { chromium } = await import('playwright');
  const { startServer } = await import('./static-server.mjs');
  const failures = []; let checks = 0;
  const check = (ok, msg) => { checks++; if (!ok) failures.push(msg); };
  const server = await startServer(), browser = await chromium.launch();
  const freshPage = async (width = 390) => {
    const context = await browser.newContext({ viewport: { width, height: 800 } });
    const page = await context.newPage();
    page.setDefaultTimeout(5000);
    page.on('pageerror', err => failures.push(`page error: ${err.message}`));
    page.on('console', msg => { if (msg.type() === 'error') failures.push(`console error: ${msg.text()}`); });
    await page.goto(server.url);
    await page.evaluate(() => localStorage.clear());
    await page.reload();
    return { context, page };
  };
  try { await testAudio({ freshPage, check }); }
  catch (err) { failures.push(`crashed: ${err.stack || err}`); }
  await browser.close(); await server.close();
  if (failures.length) { console.error(`✗ ${failures.length} of ${checks} sound checks failed:`); failures.forEach(f => console.error('  - ' + f)); process.exit(1); }
  console.log(`✓ ${checks} sound checks passed`);
}
