// Driving the learner's own data from the test side: the sheet of accounts, the dated change and the files that leave the page. Nothing here
// asserts. The checks of tests/e2e-own.mjs and tests/e2e-wealth.mjs use it through the visible controls only.
import { readFile } from 'node:fs/promises';

export const todayIn = page => page.evaluate(() => today());
export const dayIn = (page, n) => page.evaluate(days => addDays(today(), days), n);
// to the step on the learner's own data of a lesson (its place in the flow), the way a learner who has done the questions arrives
export const jumpTo = (page, at) => page.evaluate(n => moveLesson(n), at);
export const storedNotes = async (page, subject) => JSON.parse(await page.evaluate(id => localStorage.getItem(`pl:${id}:notes`), subject) || 'null');

const box = (page, path) => page.locator(`#own-${path.replace(/\./g, '-')}`);
// one account of the sheet form: { type, name?, balance, fees?, funds: [{ name, value, expense, kind? }] }; fund rows past the first are added with the button
export async function typeAccount(page, at, account) {
  await box(page, `accounts.${at}.type`).selectOption(account.type);
  if (account.name !== undefined) await box(page, `accounts.${at}.name`).fill(account.name);
  await box(page, `accounts.${at}.balance`).fill(account.balance);
  if (account.fees !== undefined) await box(page, `accounts.${at}.fees`).fill(account.fees);
  for (let j = 0; j < (account.funds || []).length; j++) {
    if (j > 0) await page.locator(`[data-add-fund="${at}"]`).click();
    const f = account.funds[j], p = `accounts.${at}.holdings.${j}`;
    await box(page, `${p}.name`).fill(f.name);
    await box(page, `${p}.value`).fill(f.value);
    await box(page, `${p}.expense`).fill(f.expense);
    if (f.kind) await box(page, `${p}.kind`).selectOption(f.kind);
  }
}
// the dated change: what, where and a day
export async function typeAction(page, { what, where, when }) {
  if (what !== undefined) await page.locator('#own-what').fill(what);
  if (where !== undefined) await page.locator('#own-where').fill(where);
  if (when !== undefined) await page.locator('#own-when').fill(when);
}
// taps a control that saves a file and returns it: { name, text }
export async function download(page, click) {
  const wait = page.waitForEvent('download');
  await click();
  const file = await wait;
  return { name: file.suggestedFilename(), text: await readFile(await file.path(), 'utf8') };
}
export const errorsShown = page => page.locator('.fielderr').allTextContents();
