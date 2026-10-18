// X28 (3 to 9, step 4, a note of 2026-10-11; 2026-10-18): the phone's Back button goes back inside the app, one screen at a time. The app is one
// page, so the history holds one entry per screen on the path from the library ({ fc: 'app', depth }). From the library the learner goes
// to a subject and into a lesson; two presses of Back land on the subject (the lesson's place kept) and then on the library, and the page
// is never anywhere but the app's own origin. Answering a Back never adds an entry: Chrome on Android skips an entry added without a tap,
// so the next Back would leave the app. A screen of the review goes back to the library, and a Back leaves no confirmation of a delete open
// on the subject screen that was left. Every screen below the library names where its back control goes, and keeps it in view when scrolled.
const sameOrigin = (page, origin) => new URL(page.url()).origin === origin;
const depthOf = page => page.evaluate(() => history.state && history.state.fc === 'app' ? history.state.depth : null);
const viewIs = (page, view) => page.waitForFunction(v => APP.view === v, view, { timeout: 4000 }).then(() => true, () => false);
const back = page => page.evaluate(() => history.back());
// counts the entries the page adds, from here on
const PUSH_COUNTER = () => { const push = history.pushState.bind(history); window.__pushes = 0; history.pushState = (...a) => { window.__pushes += 1; return push(...a); }; };
const pushes = page => page.evaluate(() => window.__pushes);

export async function X28(env) {
  const c = env.checker('X28'), { context, page } = await env.freshPage(c, 390);
  const origin = new URL(page.url()).origin;
  await page.evaluate(PUSH_COUNTER);
  c.check(await depthOf(page) === 0, 'the first entry of the app is not marked as the library');
  await env.openSubject(page, 'fixture');
  const atSubject = await page.evaluate(() => history.length);
  c.check(await depthOf(page) === 1, 'leaving the library did not add an entry to the history');
  await env.clickVisible(page, '#screen [data-l="l1"]');
  c.check(await depthOf(page) === 2 && await page.evaluate(() => history.length) === atSubject + 1, 'opening a lesson did not add one entry to the history');
  const back1 = await page.locator('#screen .topbar .back').textContent();
  c.check(/Umbrella days/i.test(back1), `the lesson's back control does not name its subject (${back1})`);
  await page.setViewportSize({ width: 390, height: 240 });   // a short screen, so the lesson's first page scrolls
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  const scrolled = await page.evaluate(() => window.scrollY), top = await page.locator('#screen .topbar .back').evaluate(el => el.getBoundingClientRect().top);
  c.check(scrolled > 100 && top >= 0 && top < 60, `the lesson's back control is not in view once the page is scrolled ${scrolled}px (${top}px from the top)`);
  await page.setViewportSize({ width: 390, height: 800 });
  await env.goOn(page);   // the lesson is open and one step in
  c.check(await page.evaluate(() => history.length) === atSubject + 1 && await depthOf(page) === 2, 'moving inside a lesson added entries to the history');
  const before = await pushes(page);
  await back(page);
  c.check(await viewIs(page, 'subject') && sameOrigin(page, origin), `the first Back from a lesson did not land on its subject (${page.url()})`);
  c.check(/Step 2 of/.test(await env.screenText(page)), 'the lesson did not keep its place after Back');
  await env.inspect(c, page, 'the subject after Back');
  await back(page);
  c.check(await viewIs(page, 'library') && sameOrigin(page, origin), `the second Back did not land on the library (${page.url()})`);
  c.check(/Short lessons that end with doing the real thing/.test(await env.screenText(page)), 'the library is not shown after the second Back');
  c.check(await pushes(page) === before, 'answering Back added an entry to the history, which Chrome on Android would skip');
  // two screens back at once (a long press on Back): the lesson's control and then the subject's are pressed, and still nothing is added
  await env.openSubject(page, 'fixture');
  await env.clickVisible(page, '#screen [data-l="l1"]');
  const beforeTwo = await pushes(page);
  await page.evaluate(() => history.go(-2));
  c.check(await viewIs(page, 'library') && await depthOf(page) === 0, 'going two entries back from a lesson did not land on the library');
  c.check(await pushes(page) === beforeTwo, 'going two entries back added an entry to the history');
  // back to the library by the screen's own control: the added entry is dropped, so the next Back leaves at once
  await env.openSubject(page, 'fixture');
  await env.clickVisible(page, '#screen .topbar [data-v="library"]');
  const dropped = await page.waitForFunction(() => APP.view === 'library' && history.state && history.state.fc === 'app' && history.state.depth === 0, null, { timeout: 4000 }).then(() => true, () => false);
  c.check(dropped, 'after the screen\'s own Library button the added entry was still there, so the next Back would do nothing');
  // a tab of the app, and the review
  await env.clickVisible(page, '[data-v="review"]');
  await back(page);
  c.check(await viewIs(page, 'library') && sameOrigin(page, origin), 'Back from the review tab did not land on the library');
  // a delete asked on a subject screen is not left open by Back
  await page.evaluate(() => saveNote('ledger', 'triggers', { job: today() }));
  await env.openSubject(page, 'ledger');
  await page.locator('[data-own-delete]').click();
  c.check(await page.locator('[data-own-delete-ask]').count() === 1, 'the inline delete did not ask');
  await back(page);
  c.check(await viewIs(page, 'library') && sameOrigin(page, origin), 'Back from a subject with a question open did not land on the library');
  await env.openSubject(page, 'ledger');
  c.check(await page.locator('[data-own-delete-ask]').count() === 0, 'a delete question was still open after Back');
  await context.close();
  return c;
}
export const HISTORY_CHECKS = { X28 };
