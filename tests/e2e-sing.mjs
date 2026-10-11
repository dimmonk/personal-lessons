// The browser checks of lesson standard 26.7 for sound and singing: X8 (nothing sounds and nothing listens before a tap), X10 (the microphone:
// what it is asked for, what it never hears, what it does when it is refused), X11 (only numbers are stored), X12 (the sung screens fit a phone,
// in plain words) and X16 (the sing ask: known pitches fed in as the microphone are scored on and off at 25 cents, an octave away counts, a hold is
// timed, each note of a run is scored, the line is drawn only with the line, the range is stored once and every target lies inside it, the
// microphone is released).
//
// What is real here: the app's own sound code runs in Chromium, and so do its AudioContext, analyser, pitch finder and frame loop. The page's
// getUserMedia answers from a sound this test sets (tests/fixtures/audio-recorder.mjs), so the real analyser reads a real stream. The test plays
// the learner (tests/e2e-sing-drive.mjs): it reads the notes the APP played from the recorded oscillators, not from the app's plan, and sings
// them back, or something else, while the app's window is open. What this cannot do is hear anything, or use a real microphone or speaker.
//
// Every check is a function of the environment (e2e-env.mjs) that returns its checker. tests/e2e-controls.mjs runs each against the app with a
// seeded fault and requires exactly that check to go red.
import { recorded } from './fixtures/audio-recorder.mjs';
import * as D from './e2e-sing-drive.mjs';

const RANGE = { low: 'A2', high: 'E4', set: '2026-10-10' };   // 45 to 64 half-steps
const LOW = 45, HIGH = 64, MIDDLE = [48, 61];
const MUSIC_WORDS = /\b(cents?|hertz|hz|semitones?|half-steps?|octaves?|pitch|frequency|larynx|diaphragm)\b/i;
const frames = (page, n = 3) => page.evaluate(n => new Promise(done => { const tick = left => left ? requestAnimationFrame(() => tick(left - 1)) : done(); tick(n); }), n);
const labelOf = page => page.locator('.qlabel').first().textContent().then(t => t.trim());
// a played note (Hz) lies within [low, high] half-steps
const inside = (hz, [low, high] = [LOW, HIGH]) => { const m = Math.round(D.midiOfHz(hz)); return m >= low && m <= high; };
const near = (got, want, tol) => typeof got === 'number' && Math.abs(got - want) <= tol;

// the app open on a lesson of a sung subject, with the recorder in the page. range: a range stored beforehand (so a try can start at once);
// at: the step the learner left the lesson at (3 is the first group of questions of a lesson that opens with a warm-up and one teaching screen)
async function openSung(env, c, { subject, lesson, width = 390, recorder = 'grant', range = null, at = 0 }) {
  const { context, page } = await env.freshPage(c, width, { recorder });
  if (range || at) {
    await page.evaluate(([s, l, r, a]) => {
      if (r) localStorage.setItem(`pl:${s}:notes`, JSON.stringify({ range: r }));
      if (a) localStorage.setItem(`pl:${s}:seen`, JSON.stringify({ [l]: { rev: 1, at: a } }));
    }, [subject, lesson, range, at]);
    await page.reload();
  }
  await env.clickVisible(page, `#screen [data-s="${subject}"]`);
  await env.clickVisible(page, `#screen [data-l="${lesson}"]`);
  return { context, page };
}
const finish = page => page.locator('#qNext').click();
const skipWarmup = async page => { await page.locator('#singSkip').click(); await finish(page); };
// one try: tap, hear the note, then `how(page, hz, heard)` while the window is open; what was on the screen before, during and after
async function sungTry(page, how) {
  const heard = await D.tapAndHear(page);
  await D.waitPhase(page, 'sing');
  const during = await D.stripState(page);
  await how(page, heard[0].hz, heard);
  await D.waitOutcome(page);
  return { heard, during, phase: await D.phase(page), marks: await D.marksText(page), say: await D.sayText(page), after: await D.stripState(page) };
}
const note = (cents, seconds = 1.4) => (page, hz) => D.singNote(page, hz, cents, seconds);
const mic = page => recorded(page);
// every note of a heard run sung in its own window, each `cents` off for `seconds`
async function singRun(page, heard, cents, seconds) {
  for (let i = 0; i < heard.length; i++) {
    await D.waitWindow(page, i);
    await D.setMic(page, D.centsUp(heard[i].hz, cents[i]));
    await D.sleep(page, seconds[i] * 1000);
  }
  await D.setMic(page, 0);
}
const tries = (page, subject, key) => D.storedTries(page, subject, key);

/* ---------- X8: nothing sounds, nothing listens, until a tap ---------- */
async function untouched(c, page, label) {
  await frames(page);
  await page.waitForTimeout(400);
  const seen = await mic(page), made = await page.evaluate(() => AUDIO_STATE.ctx !== null);
  c.check(seen.contexts === 0 && !made, `${label}: a sound system was made before any tap`);
  c.check(seen.oscillators === 0, `${label}: a sound was scheduled before any tap`);
  c.check(seen.micCalls === 0, `${label}: the microphone was asked for before any tap`);
}
export async function X8(env) {
  const c = env.checker('X8'), { context, page } = await openSung(env, c, { subject: 'singing', lesson: 'l2' });
  await untouched(c, page, 'the why');
  await env.goOn(page);
  await untouched(c, page, 'the warm-up, before its tap');
  await page.locator('#singSkip').click();
  await untouched(c, page, 'a warm-up that was skipped');
  await finish(page);
  await env.goOn(page);
  await untouched(c, page, 'the first group, which opens with the range');
  c.check(await page.locator('#singGo').count() === 1, 'no button to start the range');
  await page.evaluate(() => saveNote('singing', 'range', { low: 'A2', high: 'E4', set: '2026-10-10' }));
  await page.evaluate(() => moveLesson(4));
  await untouched(c, page, 'a question with no line, before its tap');
  await page.evaluate(() => moveLesson(checkStep(LESSON.lesson)));
  await untouched(c, page, 'the first screen of the check');
  await env.goOn(page);
  await untouched(c, page, 'the first question of the check, before its tap');
  const before = await mic(page);
  await D.tapAndHear(page);
  const after = await mic(page);
  c.check(before.contexts === 0 && after.contexts === 1 && after.micCalls === 1 && after.oscillators >= 1, 'a tap on the button did not start the sound and the microphone');
  await context.close();
  return c;
}

/* ---------- X10: the microphone ---------- */
async function refused(env, c, mode, expected, label) {
  const { context, page } = await openSung(env, c, { subject: 'chorus', lesson: 'l1', range: RANGE, at: 3, recorder: mode });
  const asked = (await mic(page)).micCalls;
  await page.locator('#singGo').click();
  await D.waitPhase(page, 'failed');
  c.check((await D.sayText(page)).includes(expected), `${label}: the line does not say why (${await D.sayText(page)})`);
  c.check((await page.locator('#singGo').textContent()).trim() === 'Try again', `${label}: no Try again button`);
  c.check((await mic(page)).oscillators === 0, `${label}: the note played with no microphone to listen`);
  await page.locator('#singGo').click();
  await D.waitPhase(page, 'failed');
  if (mode !== 'nodevices') c.check((await mic(page)).micCalls - asked === 2, `${label}: Try again did not ask again`);
  await context.close();
}
export async function X10(env) {
  const c = env.checker('X10'), { context, page } = await openSung(env, c, { subject: 'chorus', lesson: 'l1', range: RANGE, at: 3 });
  const asked = (await mic(page)).micCalls;   // what was asked for before any tap is X8's to judge; here only what the taps ask for is counted
  // the app's own note is never heard: the target's own sound is fed in while it plays and for most of the quarter second after, and nothing after
  const heard = await D.tapAndHear(page);
  await D.setMic(page, heard[0].hz);
  const quietEnds = heard[0].startS + heard[0].ms / 1000 + 0.23;
  await page.waitForFunction(t => AUDIO_STATE.ctx.currentTime >= t, quietEnds, { timeout: 8000 });
  await D.setMic(page, 0);
  await D.waitOutcome(page);
  const picked = await page.evaluate(() => SING.readings.filter(r => r.hz !== null).length);
  c.check(await D.phase(page) === 'nothing' && picked < 5, `the app heard its own note (${await D.phase(page)}, ${picked} clear readings)`);
  c.check((await tries(page, 'chorus', 'sing-match')).length === 0, 'a note the app played was stored as a try');
  const seen = await mic(page);
  c.check(seen.micCalls - asked === 1 && JSON.stringify(seen.constraints[asked].audio) === JSON.stringify({ echoCancellation: false, noiseSuppression: false, autoGainControl: false }),
    `the microphone was asked for with ${JSON.stringify(seen.constraints[asked])}, ${seen.micCalls - asked} time(s)`);
  // a second try in the same group does not ask again, and still hears the learner
  const again = await sungTry(page, note(0));
  c.check((await mic(page)).micCalls - asked === 1 && again.phase === 'result' && again.marks[0] === 'On the note', 'a second try in a group asked for the microphone again, or did not hear the learner');
  c.check((await mic(page)).timers === 0, 'a try started a timer: the sound and the window run on the sound clock and the frame loop');
  await context.close();
  await refused(env, c, 'deny', 'turned off for this page', 'a microphone that is refused');
  await refused(env, c, 'none', 'No microphone is available', 'a missing microphone');
  await refused(env, c, 'nodevices', 'No microphone is available', 'a browser with no microphone at all');
  return c;
}

/* ---------- X11: only numbers are stored ---------- */
const NUMBER_FIELDS = ['cents', 'holdMs', 'loud', 'span', 'steady'];
export async function X11(env) {
  const c = env.checker('X11'), { context, page } = await openSung(env, c, { subject: 'singing', lesson: 'l2', range: RANGE, at: 3 });
  await sungTry(page, note(0)); await finish(page);
  await sungTry(page, note(-30)); await finish(page);   // a miss comes back, so this one is also stored
  const stored = await env.storage(page);
  const keys = Object.keys(stored);
  keys.forEach(k => c.check(/^pl:(app|log|recent)$|^pl:singing:(items|seen|notes)$/.test(k), `the key "${k}" is not one of the stored keys of 26.3`));
  const items = JSON.parse(stored['pl:singing:items']), all = Object.values(items).flatMap(e => e.tries);
  c.check(all.length >= 2, `${all.length} tries stored`);
  all.forEach(t => {
    const sing = t.a && t.a.sing;
    c.check(sing && Object.keys(sing).every(k => NUMBER_FIELDS.includes(k)), `a sung answer holds more than numbers: ${JSON.stringify(sing)}`);
    c.check(sing && Object.values(sing).every(v => (typeof v === 'number' && Number.isFinite(v)) || (Array.isArray(v) && v.length <= 5 && v.every(x => typeof x === 'number'))), 'a sung answer holds a list or a number that is not a few numbers');
  });
  const longest = (value) => Array.isArray(value) ? Math.max(value.length, ...value.map(longest)) : value && typeof value === 'object' ? Math.max(0, ...Object.values(value).map(longest)) : 0;
  c.check(keys.every(k => { try { return longest(JSON.parse(stored[k])) <= 12 || k === 'pl:log'; } catch { return false; } }), 'a stored list is longer than twelve');
  c.check(JSON.stringify(stored).length < 6000, `${JSON.stringify(stored).length} characters stored for two tries`);
  const elsewhere = await page.evaluate(async () => ({ session: sessionStorage.length, caches: (await caches.keys()).length, databases: indexedDB.databases ? (await indexedDB.databases()).length : 0 }));
  c.check(elsewhere.session === 0 && elsewhere.caches === 0 && elsewhere.databases === 0, `something is stored outside localStorage (${JSON.stringify(elsewhere)})`);
  await context.close();
  return c;
}

/* ---------- X12: the sung screens fit a phone, in plain words ---------- */
async function inspectSung(env, c, page, label) {
  await env.inspect(c, page, label);
  const text = await page.evaluate(() => document.querySelector('#screen').textContent);
  const found = text.match(MUSIC_WORDS);
  c.check(!found, `${label}: shows a music word, "${found && found[0]}"`);
}
export async function X12(env) {
  const c = env.checker('X12');
  for (const width of [360, 390]) {
    const { context, page } = await env.freshPage(c, width, { recorder: 'grant' });
    await env.clickVisible(page, '#screen [data-s="singing"]');
    await inspectSung(env, c, page, `${width}px the subject`);
    await env.clickVisible(page, '#screen [data-l="l2"]');
    await inspectSung(env, c, page, `${width}px the why`);
    await env.goOn(page); await inspectSung(env, c, page, `${width}px the warm-up`);
    await skipWarmup(page); await inspectSung(env, c, page, `${width}px the teaching screen`);
    await env.goOn(page); await inspectSung(env, c, page, `${width}px the range, before its tap`);
    await page.evaluate(() => { saveNote('singing', 'range', { low: 'A2', high: 'E4', set: '2026-10-10' }); moveLesson(3); });
    await inspectSung(env, c, page, `${width}px a question with the line, before its tap`);
    const heard = await D.tapAndHear(page);
    await D.waitPhase(page, 'sing'); await inspectSung(env, c, page, `${width}px a question with the line, while singing`);
    await D.singNote(page, heard[0].hz, 5, 1.4); await D.waitOutcome(page);
    await inspectSung(env, c, page, `${width}px a question with the line, after the result`);
    await page.evaluate(() => moveLesson(4)); await inspectSung(env, c, page, `${width}px a question with no line`);
    await page.evaluate(() => moveLesson(checkStep(LESSON.lesson))); await inspectSung(env, c, page, `${width}px the check's first screen`);
    await env.goOn(page); await inspectSung(env, c, page, `${width}px a question in the check`);
    await env.clickVisible(page, '[data-v="subject"]'); await inspectSung(env, c, page, `${width}px the subject, with its range`);
    c.check((await env.screenText(page)).includes('Your range') && (await page.locator('[data-own="range"]').textContent()).includes('A2 to E4'), `${width}px: the subject does not show the learner's range`);
    await context.close();
  }
  return c;
}

/* ---------- X16: the sing ask ---------- */
// the part on the test subject: every task, the line that fades, the check without it
async function tasksHalf(env, c) {
  const { context, page } = await openSung(env, c, { subject: 'chorus', lesson: 'l1', range: RANGE, at: 3 });
  // leaving in the middle of a try ends the sound and releases the microphone
  await D.tapAndHear(page);
  await D.waitPhase(page, 'hear');
  await env.clickVisible(page, '[data-v="subject"]');
  await D.sleep(page, 300);
  c.check((await mic(page)).tracks.every(t => t === 'ended') && (await D.appOscillators(page)).every(o => o.ended), 'leaving in the middle of a try left a sound playing or the microphone on');
  await env.clickVisible(page, '#screen [data-l="l1"]');
  // a group with the line: on, octave, off, and nothing at all
  const first = await sungTry(page, note(0));
  c.check(first.phase === 'result' && first.marks.join() === 'On the note', `a note sung on the note is "${first.marks}"`);
  c.check(inside(first.heard[0].hz, MIDDLE), `the note played (${D.noteOfHz(first.heard[0].hz)}) is not inside the middle of the range`);
  c.check(first.during && first.during.line === 'on' && first.during.bars === 1, 'the strip does not show the bar while singing with the line');
  c.check(first.after.d.startsWith('M') && first.after.d.includes('L'), 'the line of the voice is not drawn after a try with the line');
  const stored1 = (await tries(page, 'chorus', 'sing-match'))[0];
  c.check(stored1 && stored1.ok === true && stored1.sup === true && stored1.context === 'practice' && stored1.r.sing === 'ok' && near(stored1.a.sing.cents[0], 0, 4), `the stored try is wrong: ${JSON.stringify(stored1)}`);
  c.check(await labelOf(page) === 'Match the note · 1 of 4', `the label reads "${await labelOf(page)}"`);
  await D.sleep(page, 2800);
  c.check(await page.locator('#qNext').isEnabled() && (await D.marksText(page)).length === 1, 'the screen changed by itself after a result');
  await finish(page);
  const inTolerance = await sungTry(page, note(20));
  c.check(inTolerance.marks.join() === 'On the note', `a note 20 off is "${inTolerance.marks}"`);
  await finish(page);
  const over = await sungTry(page, note(40));
  c.check(over.marks.join() === 'A shade over' && await page.locator('.mark.no').count() === 1, `a note 40 over is "${over.marks}"`);
  c.check((await page.locator('.feedback').textContent()).includes('Your voice sat a shade over the note.'), 'no line says how the voice sat after a miss');
  c.check(!(await page.locator('.feedback').textContent()).includes('40'), 'the result shows a number');
  c.check((await tries(page, 'chorus', 'sing-match'))[2].ok === false, 'a note outside the tolerance was stored as right');
  await finish(page);
  const octave = await sungTry(page, (p, hz) => D.singNote(p, hz >= 160 ? hz / 2 : hz * 2, 0, 1.4));
  c.check(octave.marks.join() === 'On the note', `a note an octave away is "${octave.marks}"`);
  c.check(near((await tries(page, 'chorus', 'sing-match'))[3].a.sing.cents[0], 0, 4), 'a note an octave away was stored as far off');
  await finish(page);
  c.check(await labelOf(page) === 'Asked again', `a miss did not come back (${await labelOf(page)})`);
  const silent = await sungTry(page, async () => {});
  const sayLine = await D.sayText(page);
  c.check(silent.phase === 'nothing' && sayLine.includes('I did not hear you') && (await tries(page, 'chorus', 'sing-match')).length === 4 && await page.locator('#qNext').isDisabled(), `silence was not "nothing heard" and no try (${silent.phase}, ${sayLine})`);
  c.check((await page.locator('#singGo').textContent()).trim() === 'Try again', 'there is no Try again after silence');
  const well = await sungTry(page, note(-150));
  c.check(well.marks.join() === 'Well under', `a note 150 under is "${well.marks}"`);
  await finish(page);
  const redone = await sungTry(page, note(5));
  c.check(redone.marks.join() === 'On the note', 'the note asked again was not scored');
  await finish(page);
  await env.goOn(page);   // the break
  // a group without the line: nothing drawn while singing, the result drawn after
  const hidden = await sungTry(page, note(-10));
  c.check(hidden.during && hidden.during.line === 'off' && hidden.during.bars === 0 && hidden.during.d === '', `the strip shows something while singing without the line (${JSON.stringify(hidden.during)})`);
  c.check(hidden.marks.join() === 'On the note' && hidden.after.bars === 1 && hidden.after.d.startsWith('M'), 'the result is not shown after a try without the line');
  c.check((await tries(page, 'chorus', 'sing-match')).pop().sup === false, 'a try without the line was stored as with it');
  await finish(page);
  await sungTry(page, note(0)); await finish(page);
  await env.goOn(page);
  // a hold is timed
  const held = await sungTry(page, note(5, 2.6));
  c.check(held.marks.join() === 'Steady for 2 seconds', `a hold of 2.6 seconds is "${held.marks}"`);
  c.check((await tries(page, 'chorus', 'sing-hold'))[0].a.sing.holdMs >= 2000, 'the hold stored under two seconds');
  await finish(page);
  const broken = await sungTry(page, async (p, hz) => { await D.singNote(p, hz, 0, 0.9); await D.setMic(p, D.centsUp(hz, 60)); await D.sleep(p, 1700); await D.setMic(p, 0); });
  const heldMs = (await tries(page, 'chorus', 'sing-hold'))[1].a.sing.holdMs;
  c.check(/^Steady for [01](\.\d)? of 2 seconds$/.test(broken.marks[0]) && heldMs < 1300 && heldMs > 500 && await page.locator('.mark.no').count() === 1, `a hold that broke off is "${broken.marks}" (${heldMs} ms)`);
  await finish(page);
  await sungTry(page, note(0, 2.6)); await finish(page);
  await env.goOn(page);
  // a slide that lands
  const slid = await sungTry(page, async (p, hz, heard) => {
    const [from, to] = [heard[0].hz, heard[1].hz];
    await D.setMic(p, from); await D.sleep(p, 600);
    for (let k = 1; k <= 5; k++) { await D.setMic(p, from * (to / from) ** (k / 5)); await D.sleep(p, 100); }
    await D.setMic(p, to); await D.sleep(p, 1500); await D.setMic(p, 0);
  });
  const semis = Math.abs(D.midiOfHz(slid.heard[1].hz) - D.midiOfHz(slid.heard[0].hz));
  c.check(slid.marks.join() === 'On the note' && slid.after.bars === 2 && slid.heard.length === 2 && semis >= 1.9 && semis <= 5.1 && inside(slid.heard[1].hz), `a slide that lands is "${slid.marks}" (${semis.toFixed(1)} half-steps, ${slid.heard.length} notes)`);
  await finish(page);
  await env.goOn(page);
  // the check: no line, the result after each try, then the result of the check
  await env.goOn(page);
  c.check(await page.evaluate(() => Q.context === 'check' && Q.support === null), 'the check runs with support or not as a check');
  const check1 = await sungTry(page, note(0));
  c.check(check1.during && check1.during.line === 'off' && check1.during.bars === 0 && check1.during.d === '', `the check draws something while singing (${JSON.stringify(check1.during)})`);
  c.check(check1.marks.join() === 'On the note', 'a check shows its result after each try');
  await finish(page);
  const check2 = await sungTry(page, note(50));
  c.check(check2.marks.join() === 'A shade over', `a check note 50 over is "${check2.marks}"`);
  await finish(page);
  c.check((await env.screenText(page)).includes('1 of 2 on the note: passed'), `the check result reads "${(await env.screenText(page)).slice(60, 200)}"`);
  c.check((await mic(page)).tracks.every(t => t === 'ended'), 'the microphone is still on after the group ended');
  const checkTries = (await tries(page, 'chorus', 'sing-match')).filter(t => t.context === 'check');
  c.check(checkTries.length === 2 && checkTries.every(t => t.sup === false), 'the check stored its two tries without the line');
  await context.close();
  // interval, melody, light
  const second = await openSung(env, c, { subject: 'chorus', lesson: 'l2', range: RANGE });
  await runSecond(env, c, second.page);
  await second.context.close();
}
async function runSecond(env, c, page) {
  await env.goOn(page);
  await skipWarmup(page);
  const heardIn = async () => D.tapAndHear(page);
  // an interval, both notes in their windows
  let heard = await heardIn();
  await singRun(page, heard, [8, -12], [1.0, 1.0]);
  await D.waitOutcome(page);
  let marks = (await D.marksText(page)).join(' | ');
  c.check(marks === 'Note 1 On the note | Note 2 On the note', `an interval sung on both notes is "${marks}"`);
  const stored = (await tries(page, 'chorus', 'sing-interval'))[0];
  c.check(stored.a.sing.cents.length === 2 && stored.a.sing.cents.every(v => Math.abs(v) <= 25) && stored.ok, `the interval was stored as ${JSON.stringify(stored.a)}`);
  c.check(heard.length === 2 && heard.every(h => inside(h.hz)), 'the interval notes are not inside the range');
  await finish(page);
  await env.goOn(page);
  heard = await heardIn();
  await singRun(page, heard, [0, 60], [1.0, 1.0]);
  await D.waitOutcome(page);
  marks = (await D.marksText(page)).join(' | ');
  c.check(marks === 'Note 1 On the note | Note 2 A shade over' && (await page.locator('.feedback').textContent()).includes('Note 2.'), `an interval with the second note off is "${marks}"`);
  await finish(page);
  heard = await heardIn(); await singRun(page, heard, [0, 0], [1.0, 1.0]); await D.waitOutcome(page); await finish(page);
  await env.goOn(page);
  // a melody: each note scored and the last held
  heard = await heardIn();
  await singRun(page, heard, [5, -5, 0], [0.9, 0.9, 2.6]);
  await D.waitOutcome(page);
  marks = (await D.marksText(page)).join(' | ');
  c.check(marks === 'Note 1 On the note | Note 2 On the note | Note 3 On the note | Steady for 2 seconds' && heard.length === 3, `a melody sung well is "${marks}"`);
  c.check((await tries(page, 'chorus', 'sing-melody'))[0].a.sing.holdMs >= 2000, 'the long note stored under two seconds');
  await finish(page);
  await env.goOn(page);
  // a light note: the loud and the talking note first, then the note no louder than talking
  const scale = async level => { const h = await heardIn(); await D.waitPhase(page, 'sing'); await D.singNote(page, h[0].hz, 0, 1.4, level); await D.waitPhase(page, 'ready'); };
  c.check((await env.screenText(page)).includes('sing it loudly'), 'a light question does not first ask for a loud note');
  await scale(0.6);
  c.check((await env.screenText(page)).includes('loudness you talk at'), 'a light question does not then ask for the talking note');
  await scale(0.3);
  const lightOk = await sungTry(page, (p, hz) => D.singNote(p, hz, 0, 1.4, 0.3));
  const light1 = (await tries(page, 'chorus', 'sing-light'))[0].a.sing;
  c.check(lightOk.marks.join() === 'On the note' && light1.loud >= 0.8 && light1.loud <= 1.15, `a light note at talking loudness is "${lightOk.marks}" (${light1.loud} of talking)`);
  await finish(page);
  const loud = await sungTry(page, (p, hz) => D.singNote(p, hz, 0, 1.4, 0.6));
  const light2 = (await tries(page, 'chorus', 'sing-light'))[1];
  c.check(loud.marks.join(' | ') === 'On the note | Louder than you talk' && light2.a.sing.loud > 1.5 && light2.ok === false, `a note sung loudly is "${loud.marks}" (${light2.a.sing.loud})`);
  await finish(page);
  await sungTry(page, (p, hz) => D.singNote(p, hz, 0, 1.4, 0.3)); await finish(page);
  await env.goOn(page);
  await env.goOn(page);
  heard = await heardIn(); await singRun(page, heard, [0, 0], [1.0, 1.0]); await D.waitOutcome(page); await finish(page);
  c.check((await env.screenText(page)).includes('1 of 1 on the note: passed'), 'the check of the second lesson did not pass');
}

// the part on the real lesson: the pilot, start to end
async function pilotHalf(env, c) {
  const { context, page } = await openSung(env, c, { subject: 'singing', lesson: 'l2' });
  await env.goOn(page);   // the why
  // the warm-up: a hum, the line, nothing stored
  await page.locator('#singGo').click();
  await D.waitPhase(page, 'sing');
  await D.setMic(page, 200);
  await D.sleep(page, 2000);
  c.check((await D.stripState(page)).line === 'on' && (await D.stripState(page)).d.startsWith('M'), 'the warm-up hum is not drawn as a line');
  await D.sleep(page, 1500);
  await D.setMic(page, 0);
  await D.waitPhase(page, 'result', 12000);
  c.check((await D.marksText(page)).join() === 'Warm-up done' && Object.keys(JSON.parse(await page.evaluate(() => localStorage.getItem('pl:singing:items') || '{}'))).length === 0, 'the warm-up was stored or did not finish');
  await finish(page);
  await env.goOn(page);   // the teaching screen
  // the range: nothing is stored before it, and it opens the first group
  c.check(await D.storedRange(page, 'singing') === null, 'a range was stored before it was measured');
  c.check(await labelOf(page) === 'Find your range', `the first group does not open with the range (${await labelOf(page)})`);
  await page.locator('#singGo').click();
  await D.singRange(page, LOW, HIGH);
  await D.waitOutcome(page);
  const range = await D.storedRange(page, 'singing');
  c.check(range && Math.abs(noteMidi(range.low) - LOW) <= 1 && Math.abs(noteMidi(range.high) - HIGH) <= 1 && /^\d{4}-\d\d-\d\d$/.test(range.set), `the range stored is ${JSON.stringify(range)}, not A2 to E4`);
  c.check((await D.marksText(page)).join() === 'Your range is saved', 'the range was not reported as saved');
  await finish(page);
  const lowM = noteMidi(range.low), highM = noteMidi(range.high), played = [];
  const group = async (name, line, count, cents) => {
    c.check(await page.evaluate(() => Q.firstTotal) === count && await page.evaluate(() => !!(Q.support && Q.support.line)) === line, `${name}: not ${count} tries ${line ? 'with' : 'without'} the line`);
    for (let i = 0; i < count; i++) {
      c.check(await labelOf(page) === `Match the note · ${i + 1} of ${count}`, `${name}: the label of try ${i + 1} reads "${await labelOf(page)}"`);
      const t = await sungTry(page, note(cents[i % cents.length]));
      played.push(Math.round(D.midiOfHz(t.heard[0].hz)));
      c.check(t.marks.join() === 'On the note', `${name}: try ${i + 1} sung ${cents[i % cents.length]} off is "${t.marks}"`);
      if (i === 0) c.check(t.during && t.during.line === (line ? 'on' : 'off') && t.during.bars === (line ? 1 : 0), `${name}: the strip while singing is ${JSON.stringify(t.during)}`);
      await finish(page);
    }
    await env.goOn(page);   // the break
  };
  await group('the tries with the line', true, 8, [-8, 12, -15, 6, 18, -4, 10, -12]);
  await group('the tries without the line', false, 8, [9, -11, 4, -17, 14, -6, 12, -3]);
  c.check(played.every(m => m >= lowM && m <= highM) && played.some(m => m !== played[0]), `a target fell outside the stored range ${range.low} to ${range.high}, or they never changed (${played.join(' ')})`);
  await env.goOn(page);   // the check's first screen
  const verdicts = [0, 0, 0, 60, 0];
  for (let i = 0; i < 5; i++) {
    const t = await sungTry(page, note(verdicts[i]));
    c.check(t.marks.join() === (verdicts[i] ? 'A shade over' : 'On the note'), `the check: try ${i + 1} is "${t.marks}"`);
    played.push(Math.round(D.midiOfHz(t.heard[0].hz)));
    await finish(page);
  }
  c.check((await env.screenText(page)).includes('4 of 5 on the note: passed') && (await env.screenText(page)).includes('At least 4 on the note') && (await env.screenText(page)).includes('met'), 'the check did not end with "4 of 5 on the note: passed"');
  c.check(played.every(m => m >= lowM && m <= highM), 'a target of the check fell outside the range');
  // the record: the range once, the tries as numbers, the lesson done
  const after = await D.storedRange(page, 'singing');
  c.check(JSON.stringify(after) === JSON.stringify(range), 'the range changed after the tries');
  c.check((await tries(page, 'singing', 'sing-range')).length === 1, 'the range was measured more than once');
  const stored = await env.storage(page);
  const holders = Object.keys(stored).filter(k => /"low"/.test(stored[k]));
  c.check(holders.join() === 'pl:singing:notes', `the range is stored in more than one place: ${holders.join(', ')}`);
  const match = await tries(page, 'singing', 'sing-match');
  c.check(match.filter(t => t.context === 'check').length === 5 && match.filter(t => t.context === 'check').every(t => t.sup === false && t.lesson === 'l2'), 'the check was not stored as five tries without the line');
  c.check(match.some(t => t.context === 'practice' && t.sup === true) && match.some(t => t.context === 'practice' && t.sup === false), 'the practice tries were not stored with and without the line');
  c.check(await page.evaluate(() => { const d = FC.get('singing'); return lessonDone(d, 'singing', d.lessons.l2) && lastCheck(d, 'singing', d.lessons.l2).right === 4; }), 'the lesson is not done with 4 right after the check');
  await env.clickVisible(page, '[data-v="subject"]');
  c.check((await env.screenText(page)).includes('Check passed, 4 of 5'), 'the subject screen does not say the check passed');
  await context.close();
}
const noteMidi = name => ({ C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 }[name[0]] + (name[1] === '#' ? 1 : 0) + 12 * (Number(name.slice(-1)) + 1));

export async function X16(env) {
  const c = env.checker('X16');
  const halves = [tasksHalf, pilotHalf].map(half => half(env, c).catch(error => c.check(false, `${half.name} stopped: ${String(error.stack || error).split('\n').slice(0, 4).join(' / ')}`)));
  await Promise.all(halves);
  return c;
}

export const SOUND_CHECKS = { X8, X10, X11, X12, X16 };
// The sound checks run in two lanes at a time at most: the long one (X16, two pages) and the four short ones one after another. Many more
// audio pages at once make Chromium's headless audio device report errors that have nothing to do with the app.
export const SOUND_LANES = [['X8', 'X10', 'X11', 'X12'], ['X16']];
