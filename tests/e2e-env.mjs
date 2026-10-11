// What the browser checks share: a fresh page with the test subject loaded, the clock that can be set days ahead, a log of every request
// that leaves the page, and the ways to drive a lesson through its visible controls. Nothing here asserts; the checks do.
import { APP_JARGON, abstractIn } from './plain-words.mjs';
import { britishIn } from './american.mjs';

export const WIDTHS = [360, 390, 768, 1200, 1600];

// the page's clock plus a number of days, kept across a reload in the tab (sessionStorage), so a test can move to the day a review is due
const SKEW_SCRIPT = `(() => {
  const Real = Date, skew = () => Number(sessionStorage.getItem('__skew') || 0) * 86400000;
  class Skewed extends Real { constructor(...a) { if (a.length) super(...a); else super(Real.now() + skew()); } static now() { return Real.now() + skew(); } }
  window.Date = Skewed;
})();`;

// Console errors the tests expect and ignore: a request to another host is refused by the test, which logs it separately
const EXPECTED_ERROR = /net::ERR_|Failed to fetch|Load failed/;

export function makeEnv(browser, server) {
  const origin = new URL(server.url).origin;
  const env = { server };

  // A check function reports through one of these: check(ok, message), and its failures with the check's id in front.
  env.checker = id => {
    const failures = [];
    let count = 0;
    return { id, failures, get count() { return count; }, check(ok, msg) { count += 1; if (!ok) failures.push(`${id}: ${msg}`); } };
  };

  env.freshPage = async (c, width = 390) => {
    const context = await browser.newContext({ viewport: { width, height: 800 }, serviceWorkers: 'block' });
    await context.addInitScript(SKEW_SCRIPT);
    const outside = [];
    await context.route('**/*', route => {
      const url = route.request().url();
      if (url.startsWith(origin)) return route.continue();
      outside.push(url);
      return route.abort();
    });
    const page = await context.newPage();
    page.on('pageerror', err => c.check(false, `page error: ${err.message}`));
    page.on('console', msg => { if (msg.type() === 'error' && !EXPECTED_ERROR.test(msg.text())) c.check(false, `console error: ${msg.text()}`); });
    await page.goto(server.url);
    await page.evaluate(() => { localStorage.clear(); sessionStorage.clear(); });
    await page.reload();
    return { context, page, outside };
  };
  // makes it a given day ('2026-11-02') in this tab, whatever the real day is: the weeks of a review depend on the weekday, so a test fixes it
  env.setDay = async (page, day) => {
    const [y, m, d] = day.split('-').map(Number), midnight = date => new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
    const days = Math.round((new Date(y, m - 1, d).getTime() - midnight(new Date())) / 86400000);
    await page.evaluate(n => sessionStorage.setItem('__skew', String(n)), days);
    await page.reload();
  };

  /* ---------- reading the page ---------- */
  env.screenText = async page => (await page.locator('#screen').textContent()).replace(/\s+/g, ' ').trim();
  env.clickVisible = (page, selector) => page.locator(`${selector}:visible`).first().click();
  env.storage = page => page.evaluate(() => Object.fromEntries(Object.keys(localStorage).map(k => [k, localStorage.getItem(k)])));
  env.horizontalOverflow = page => page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  // Text cut off inside a control (the page-level check can't see these). Deliberate ellipses are fine.
  env.clippedText = page => page.evaluate(() => [...document.querySelectorAll('button, .opt, .chip, .tile, .mark, .stat')]
    .filter(el => el.offsetParent !== null && el.scrollWidth > el.clientWidth + 1 && getComputedStyle(el).textOverflow !== 'ellipsis')
    .map(el => `"${el.textContent.trim().replace(/\s+/g, ' ').slice(0, 30)}"`));
  // The words a learner never reads outside a quotation (tests/plain-words.mjs), and the owner's approved wording, are left out.
  env.jargonShown = async page => {
    const text = await page.evaluate(() => {
      const copy = document.querySelector('#screen').cloneNode(true);
      copy.querySelectorAll('blockquote, .passage, [data-owner-words]').forEach(el => el.remove());
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
    for (const back of ['[data-v="library"]', '#leaveReview', '[data-v="subject"]']) {
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
