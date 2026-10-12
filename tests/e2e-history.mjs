// X28 (3 to 9, step 4, a note of 2026-10-11): the phone's Back button goes back inside the app. The app is one page, so the installed app used to
// leave on the first Back. From the library the learner goes to a subject and into a lesson; two presses of Back land on the subject (the
// lesson's place kept) and then on the library, and the page is never anywhere but the app's own origin. A screen of the review goes back to
// the library, and a Back leaves no confirmation of a delete open on the subject screen that was left.
const sameOrigin = (page, origin) => new URL(page.url()).origin === origin;
const stateOf = page => page.evaluate(() => history.state && history.state.fc);
const viewIs = (page, view) => page.waitForFunction(v => APP.view === v, view, { timeout: 4000 }).then(() => true, () => false);
const back = page => page.evaluate(() => history.back());

export async function X28(env) {
  const c = env.checker('X28'), { context, page } = await env.freshPage(c, 390);
  const origin = new URL(page.url()).origin;
  c.check(await stateOf(page) === 'base', 'the first entry of the app is not marked as the base');
  await env.openSubject(page, 'fixture');
  const atSubject = await page.evaluate(() => history.length);
  c.check(await stateOf(page) === 'in', 'leaving the library did not add an entry to the history');
  await env.clickVisible(page, '#screen [data-l="l1"]');
  await env.goOn(page);   // the lesson is open and one step in
  c.check(await page.evaluate(() => history.length) === atSubject && await stateOf(page) === 'in', 'moving inside the app added more entries to the history');
  await back(page);
  c.check(await viewIs(page, 'subject') && sameOrigin(page, origin), `the first Back from a lesson did not land on its subject (${page.url()})`);
  c.check(/Step 2 of/.test(await env.screenText(page)), 'the lesson did not keep its place after Back');
  await env.inspect(c, page, 'the subject after Back');
  await back(page);
  c.check(await viewIs(page, 'library') && sameOrigin(page, origin), `the second Back did not land on the library (${page.url()})`);
  c.check(/Short lessons that end with doing the real thing/.test(await env.screenText(page)), 'the library is not shown after the second Back');
  // back to the library by the screen's own control: the added entry is dropped, so the next Back leaves at once
  await env.openSubject(page, 'fixture');
  await env.clickVisible(page, '#screen .topbar [data-v="library"]');
  const dropped = await page.waitForFunction(() => APP.view === 'library' && history.state && history.state.fc === 'base', null, { timeout: 4000 }).then(() => true, () => false);
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
