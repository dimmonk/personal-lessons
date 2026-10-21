// What the browser checks share: a fresh page with the test subject loaded, the clock that can be set days ahead, a log of every request
// that leaves the page, and the ways to drive a lesson through its visible controls. Nothing here asserts; the checks do.
import { APP_JARGON, abstractIn } from './plain-words.mjs';
import { britishIn } from './american.mjs';
import { startRecorder } from './fixtures/audio-recorder.mjs';
import { isEmulatorUrl, newProjectId, testConfigModule } from './emulators.mjs';

export const WIDTHS = [360, 390, 768, 1200, 1600];

// the page's clock plus a number of milliseconds, kept across a reload in the tab (sessionStorage), so a test can move to the day a review is due
const SKEW_SCRIPT = `(() => {
  const Real = Date, skew = () => Number(sessionStorage.getItem('__skew') || 0);
  class Skewed extends Real { constructor(...a) { if (a.length) super(...a); else super(Real.now() + skew()); } static now() { return Real.now() + skew(); } }
  window.Date = Skewed;
})();`;

// Console errors the tests expect and ignore: a request to another host is refused by the test, which logs it separately; with no
// connection, a request fails and Firestore says it works offline; and a page whose clock a check has moved (setDay) sees the
// account's times as in the future
export const EXPECTED_ERROR = /net::ERR_|Failed to fetch|Load failed|Could not reach Cloud Firestore backend|Detected an update time that is in the future/;

export function makeEnv(browser, server) {
  const origin = new URL(server.url).origin;
  const env = { server };

  // A check function reports through one of these: check(ok, message), and its failures with the check's id in front.
  env.checker = id => {
    const failures = [];
    let count = 0;
    return { id, failures, get count() { return count; }, check(ok, msg) { count += 1; if (!ok) failures.push(`${id}: ${msg}`); } };
  };

  // opts.recorder: a mode of startRecorder (tests/fixtures/audio-recorder.mjs); the sound system and the microphone are then watched, and the
  // microphone answers from a sound the test chooses. opts.init: { script, arg }, run in the page before the app's own scripts.
  // opts.project: the account of an earlier page (its `project`), as a phone with its site data cleared, or a second device, would open it;
  // opts.beforeSignIn(page): run on the sign-in screen, before signing in; opts.colorScheme: the phone's own setting, 'light' or 'dark' (dark if not given)
  env.freshPage = async (c, width = 390, opts = {}) => {
    const context = await browser.newContext({ viewport: { width, height: 800 }, serviceWorkers: 'block', colorScheme: opts.colorScheme || 'dark' });
    await context.addInitScript(SKEW_SCRIPT);
    if (opts.recorder) await context.addInitScript(startRecorder, opts.recorder);
    if (opts.init) await context.addInitScript(opts.init.script, opts.init.arg);   // a script run in the page before the app's own: the phone's speech synthesis, stubbed
    // every page has an account of its own: a demo project on the local emulators (tests/emulators.mjs), which the checks may reach
    const project = opts.project || newProjectId();
    const outside = [], config = new URL('app/firebase-config.js', server.url).href, configBody = testConfigModule(project);
    await context.route('**/*', route => {
      const url = route.request().url();
      if (url === config) return route.fulfill({ contentType: 'text/javascript', body: configBody });
      if (url.startsWith(origin) || isEmulatorUrl(url)) return route.continue();
      outside.push(url);
      return route.abort();
    });
    const page = await context.newPage();
    page.on('pageerror', err => c.check(false, `page error: ${err.message}`));
    page.on('console', msg => { if (msg.type() === 'error' && !EXPECTED_ERROR.test(msg.text())) c.check(false, `console error: ${msg.text()}`); });
    await page.goto(server.url);
    if (opts.beforeSignIn) { await page.locator('#signIn').waitFor(); await opts.beforeSignIn(page); }
    await env.signIn(page);
    return { context, page, outside, project };
  };
  // makes it a given day ('2026-11-02') in this tab, whatever the real day is: the weeks of a review depend on the weekday, so a test fixes it.
  // The page's clock is put at noon of that day, so a change of clocks between now and then (the first Sunday of November) cannot move it a day.
  env.setDay = async (page, day) => {
    const [y, m, d] = day.split('-').map(Number), ms = new Date(y, m - 1, d, 12).getTime() - Date.now();
    await page.evaluate(n => sessionStorage.setItem('__skew', String(n)), ms);
    await env.reload(page);
  };
  // signs in on the sign-in screen with the emulator's made-up Google account (as the learner would with theirs), and waits for the record
  env.signIn = async page => {
    await page.locator('#signIn').waitFor();
    await page.evaluate(async () => {
      const fb = await import('/vendor/firebase.js');
      await fb.signInWithCredential(fb.getAuth(), fb.GoogleAuthProvider.credential(JSON.stringify({ sub: 'learner', email: 'learner@example.com', email_verified: true })));
    });
    await env.recordOpen(page);
  };
  env.recordOpen = page => page.locator('html[data-record="open"]').waitFor({ state: 'attached' });
  // the page opened again once everything written is saved to the account, as a learner closing the app and opening it later
  env.reload = async page => {
    await page.evaluate(async () => { const fb = await import('/vendor/firebase.js'); await fb.waitForPendingWrites(fb.getFirestore()); });
    await page.reload();
    await env.recordOpen(page);
  };

  /* ---------- reading the page ---------- */
  env.screenText = async page => (await page.locator('#screen').textContent()).replace(/\s+/g, ' ').trim();
  env.clickVisible = (page, selector) => page.locator(`${selector}:visible`).first().click();
  // the record as the app holds it, by the names it had before the account (pl:<subject>:items, :seen, :notes, pl:log, pl:app, pl:recent),
  // each as JSON; a part with nothing in it is left out
  env.storage = page => page.evaluate(() => {
    const out = {}, put = (key, value) => { if (value && Object.keys(value).length) out[key] = JSON.stringify(value); };
    new Set([...Object.keys(RECORD.subjects), ...Object.values(RECORD.tries).map(d => d.subject)]).forEach(id => {
      put(`pl:${id}:items`, itemsOf(id)); put(`pl:${id}:seen`, seenOf(id)); put(`pl:${id}:notes`, notesOf(id));
    });
    put('pl:log', logOf()); put('pl:app', storePref('app', null)); put('pl:recent', storePref('recent', null));
    return out;
  });
  env.horizontalOverflow = page => page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  // Text cut off inside a control (the page-level check can't see these). Deliberate ellipses are fine.
  env.clippedText = page => page.evaluate(() => [...document.querySelectorAll('button, .opt, .chip, .tile, .mark, .stat')]
    .filter(el => el.offsetParent !== null && el.scrollWidth > el.clientWidth + 1 && getComputedStyle(el).textOverflow !== 'ellipsis')
    .map(el => `"${el.textContent.trim().replace(/\s+/g, ' ').slice(0, 30)}"`));
  // The words a learner never reads outside a quotation (tests/plain-words.mjs), and the owner's approved wording, are left out. A news story, a post, an ad,
  // a report and a chart are quotations too (V50 leaves them alone), though their English is still checked.
  env.jargonShown = async page => {
    const text = await page.evaluate(() => {
      const copy = document.querySelector('#screen').cloneNode(true);
      copy.querySelectorAll('blockquote, .passage, [data-owner-words], .block-article, .block-chart, .block-message, .block-spoken, .acceptlist').forEach(el => el.remove());   // quoted material: a story, a post, an ad, a chart, a question and the answers a list accepts say what they say
      return copy.textContent;
    });
    const prose = text.replace(/“[^”]*”|"[^"]*"/g, ' ');
    return [...APP_JARGON.filter(w => new RegExp(`\\b${w}(['’]s)?\\b`, 'i').test(prose)), ...abstractIn(prose).map(e => e.word)];
  };
  // one screen as a learner meets it: not empty, in plain words, in American English, nothing sideways, nothing cut off
  env.inspect = async (c, page, label) => {
    c.check((await env.screenText(page)).length > 40, `${label}: screen is empty`);
    const jargon = await env.jargonShown(page);
    c.check(jargon.length === 0, `${label}: shows the maintainers' word${jargon.length > 1 ? 's' : ''} ${jargon.map(w => `"${w}"`).join(', ')}`);
    const british = britishIn(await page.evaluate(() => document.querySelector('#screen').textContent));
    c.check(british.length === 0, `${label}: shows the British form${british.length > 1 ? 's' : ''} ${british.map(w => `"${w}"`).join(', ')}`);
    const over = await env.horizontalOverflow(page);
    c.check(over <= 0, `${label}: ${over}px horizontal overflow`);
    const clipped = await env.clippedText(page);
    c.check(clipped.length === 0, `${label}: clipped text in ${clipped.join(', ')}`);
  };

  /* ---------- driving the app ---------- */
  // the library from wherever the learner is: its own control where there is one, else back out of the lesson or the review
  env.toLibrary = async page => {
    for (const back of ['[data-v="library"]', '[data-v="subject"]']) {
      if (await page.locator(`${back}:visible`).count()) {
        await env.clickVisible(page, back);
        if (back === '[data-v="library"]') return;
      }
    }
    await env.clickVisible(page, '[data-v="library"]');
  };
  env.openSubject = async (page, id) => { await env.toLibrary(page); await env.clickVisible(page, `#screen [data-s="${id}"]`); };
  env.openLesson = async (page, id) => { await env.openSubject(page, 'fixture'); await env.clickVisible(page, `#screen [data-l="${id}"]`); };
  env.goOn = page => page.locator('#fwd').click();
  // the first ask still open on the question in front of the learner: { id, right: [optionIds], wrong: [optionIds], many }
  env.openAsk = page => page.evaluate(() => {
    if (!Q || Q.at >= Q.list.length || Q.cur.done) return null;
    const item = Q.list[Q.at].item, open = openAsks(item, Q.support, Q.cur.a), ask = open[open.length - 1];
    if (!ask || ask.id in Q.cur.a) return null;
    const options = chooseOptions(FC.get(Q.subj.id), ask);
    return { id: ask.id, right: options.filter(o => o.ok).map(o => o.id), wrong: options.filter(o => !o.ok).map(o => o.id), many: !!ask.many };
  });
  env.questionKey = page => page.evaluate(() => Q.list[Q.at].key);
  env.tap = (page, ask, option) => page.locator(`[data-ask="${ask}"] [data-opt="${option}"]`).click();
  // answers every open ask of the question in front of the learner, all right or all wrong
  env.answerQuestion = async (page, right = true) => {
    for (let info = await env.openAsk(page); info; info = await env.openAsk(page)) {
      if (info.many) { for (const id of info.right) await env.tap(page, info.id, id); await page.locator(`[data-answer="${info.id}"]`).click(); }
      else await env.tap(page, info.id, right ? info.right[0] : info.wrong[0]);
    }
  };
  // runs a group of questions or a check to its end; `miss` lists the question ids to get wrong (a miss is asked again, right)
  env.runQueue = async (page, { miss = [], every = null } = {}) => {
    const done = [];
    const missed = new Set();
    while (await page.locator('#qNext').count()) {
      const key = await env.questionKey(page), again = await page.evaluate(() => !!Q.list[Q.at].redo);
      const wrong = miss.includes(key) && !again && !missed.has(key);
      if (wrong) missed.add(key);
      await env.answerQuestion(page, !wrong);
      if (every) await every(key, wrong);
      done.push({ key, ok: !wrong });
      await page.locator('#qNext').click();
    }
    return done;
  };
  // from the why of a lesson to the first question of its first group: why, teaching screens, worked example
  env.throughTeaching = async (page, lesson) => {
    const flow = await page.evaluate(id => FC.get('fixture').lessons[id].flow.map(s => s.show ? 'show' : s.worked ? 'worked' : 'set'), lesson);
    await env.goOn(page);   // the why
    for (const kind of flow) {
      if (kind === 'set') return;
      if (kind === 'show') await env.goOn(page);
      else await env.workedExample(page);
    }
  };
  // a worked example: commit to a choice when there is one, then every step, then on
  env.workedExample = async page => {
    const commit = page.locator('[data-commit]');
    if (await commit.count()) await commit.first().click();
    while (await page.locator('#workedMore').count()) await page.locator('#workedMore').click();
    await env.goOn(page);
  };
  // the whole of a lesson: teaching, every group, the check. Returns what was asked in each part.
  env.playLesson = async (page, lesson, { missCheck = [], missSets = [] } = {}) => {
    await env.openLesson(page, lesson);
    const flow = await page.evaluate(id => FC.get('fixture').lessons[id].flow.map(s => s.show ? 'show' : s.worked ? 'worked' : 'set'), lesson);
    const asked = { sets: [], check: [] };
    await env.goOn(page);   // the why
    for (const kind of flow) {
      if (kind === 'show') await env.goOn(page);
      else if (kind === 'worked') await env.workedExample(page);
      else { asked.sets.push(await env.runQueue(page, { miss: missSets })); await env.goOn(page); }   // the questions, then the break
    }
    await env.goOn(page);   // the check's first screen
    asked.check = await env.runQueue(page, { miss: missCheck });
    return asked;
  };
  return env;
}
