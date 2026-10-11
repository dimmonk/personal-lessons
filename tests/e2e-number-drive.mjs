// Driving a typed number from the test side: what the question in front of the learner is, typing into its boxes, tapping Answer, and the
// calculator. Nothing here asserts. The checks of tests/e2e-number.mjs and tests/e2e-math.mjs use it through the visible controls only.

// the question on screen: which one, its numbers (a made question), its kind, and the asks still open
export const current = page => page.evaluate(() => {
  const inst = Q.list[Q.at];
  return { key: inst.key, redo: !!inst.redo, seed: inst.seed, values: inst.item.values || null, kind: (inst.item.facets || {}).kind, done: Q.cur.done,
    open: openAsks(inst.item, Q.support, Q.cur.a).filter(a => !(a.id in Q.cur.a)).map(a => ({ id: a.id, kind: a.kind, estimate: !!a.estimate, blanks: a.kind === 'number' ? slotCount(a) : 0,
      options: a.kind === 'choose' ? chooseOptions(FC.get(Q.subj.id), a).map(o => ({ id: o.id, ok: o.ok })) : [] })) };
});
export const answerButton = (page, askId) => page.locator(`[data-num-answer="${askId}"]`);
export const boxes = (page, askId) => page.locator(`[data-ask="${askId}"] .numbox`);
export async function typeIn(page, askId, values) {
  for (let i = 0; i < values.length; i++) await boxes(page, askId).nth(i).fill(String(values[i]));
}
export async function typeAnswer(page, askId, values) {
  await typeIn(page, askId, values);
  await answerButton(page, askId).click();
}
// a number as a person types it: to the cent
export const cents = x => (Math.round(x * 100) / 100).toFixed(2);
export const disagreeShown = page => page.locator('[data-estimate-check]').count().then(n => n > 0);
export const feedbackShown = page => page.locator('[data-feedback]').count().then(n => n > 0);
export const activeIsBox = page => page.evaluate(() => document.activeElement && document.activeElement.classList.contains('numbox'));
// the calculator: open it, press keys one at a time, read the display, put it in the box
export async function openCalculator(page) {
  if (await page.locator('[data-calc]').isHidden()) await page.locator('[data-calc-toggle]').click();
}
export async function pressKeys(page, keys) {
  for (const k of keys) await page.locator(`[data-calc-key="${k}"]`).click();
}
export const calcDisplay = page => page.locator('[data-calc-display]').textContent();
