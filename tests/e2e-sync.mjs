// The browser checks of the account (app/sync.js, app/store.js): X49, a lesson played with no connection is kept on the phone, goes to the
// account when the phone is back online, and comes back whole on a phone whose site data was cleared; X50, the record an older copy of the
// app kept on the phone (localStorage, under pl:) is moved into the account on the first sign-in, and then removed from the phone.

const SAVED = 'Everything is saved to your account.';
const WAITING = 'Saved on this phone. It goes to your account when you are back online.';
const syncLine = page => page.locator('[data-sync-line]').textContent();
const progressHead = page => page.locator('#screen .mast h1').textContent();
// the record without the screen last shown (each page shows its own), with every object's keys in one order: the account gives a map's keys
// back sorted, which is the same record
const sortedKeys = v => Array.isArray(v) ? v.map(sortedKeys) : v && typeof v === 'object' ? Object.fromEntries(Object.keys(v).sort().map(k => [k, sortedKeys(v[k])])) : v;
const recordOf = async (env, page) => Object.fromEntries(Object.entries(await env.storage(page)).filter(([k]) => k !== 'pl:app' && k !== 'pl:recent')
  .map(([k, v]) => [k, JSON.stringify(sortedKeys(JSON.parse(v)))]));

/* ---------- X49: offline, then back online, then a cleared phone ---------- */
async function X49(env) {
  const c = env.checker('X49'), { context, page, project } = await env.freshPage(c);
  await context.setOffline(true);
  await env.playLesson(page, 'l1');
  await env.toLibrary(page);
  await env.clickVisible(page, '[data-v="progress"]');
  c.check((await syncLine(page)).includes(WAITING), `offline, the Progress screen does not say the answers wait on the phone: "${await syncLine(page)}"`);
  const head = await progressHead(page), record = await recordOf(env, page);
  c.check(Object.keys(record).some(k => k.endsWith(':items')), 'the answers given offline are not in the record');

  await context.setOffline(false);
  const saved = await page.waitForFunction(text => document.querySelector('[data-sync-line]').textContent.includes(text), SAVED, { timeout: 20000 }).then(() => true, () => false);
  c.check(saved, `back online, the line does not say everything is saved: "${await syncLine(page)}"`);
  await context.close();

  // the same account on a phone with nothing on it: the record comes back whole
  const cleared = await env.freshPage(c, 390, { project });
  c.check(JSON.stringify(await recordOf(env, cleared.page)) === JSON.stringify(record), 'the record on a cleared phone is not the one saved');
  await env.clickVisible(cleared.page, '[data-v="progress"]');
  c.check(await progressHead(cleared.page) === head, `the Progress screen on a cleared phone reads "${await progressHead(cleared.page)}", not "${head}"`);
  c.check((await syncLine(cleared.page)).includes(SAVED), 'on a cleared phone, the line does not say everything is saved');
  await cleared.context.close();
  return c;
}

/* ---------- X50: the record of an older copy of the app moved into the account ---------- */
const TRY = { d: '2026-10-01', run: 'm1', lesson: 'l1', rev: 1, engine: 1, context: 'practice', sup: false, a: { q: 'x' }, r: { q: 'ok' }, ok: true };
const OLD_TRY = { d: '2026-09-01', rev: 4, engine: 5, mode: 'name', context: 'unit', steps: {}, name: 'x', ok: true };
const LEGACY = {
  'pl:fixture:items': { 'u1/q1': { tries: [OLD_TRY, TRY, { ...TRY, run: 'm2', ok: false }] } },
  'pl:fixture:seen': { l1: { rev: 1, at: 2 } },
  'pl:fixture:notes': { plan: { when: 'a call comes', then: 'hang up' } },
  'pl:log': [{ d: '2026-10-01', type: 'start', subject: 'fixture', lesson: 'l1', rev: 1 }, { d: '2026-10-02', type: 'return', subject: 'fixture' }],
  'pl:app': { view: 'subject', subjectId: 'fixture', filter: 'all', sort: 'recent' },
  'pl:recent': { fixture: 1760000000000 }
};
const plant = page => page.evaluate(keys => Object.entries(keys).forEach(([k, v]) => localStorage.setItem(k, JSON.stringify(v))), LEGACY);

async function X50(env) {
  const c = env.checker('X50'), { context, page, project } = await env.freshPage(c, 390, { beforeSignIn: plant });
  const stored = await env.storage(page);
  c.check(stored['pl:fixture:items'] === JSON.stringify({ 'u1/q1': { tries: [TRY, { ...TRY, run: 'm2', ok: false }] } }), `the answers were not moved in order, without the old lessons' try: ${stored['pl:fixture:items']}`);
  ['pl:fixture:seen', 'pl:fixture:notes', 'pl:log', 'pl:recent'].forEach(k => c.check(stored[k] === JSON.stringify(LEGACY[k]), `${k} was not moved as it was: ${stored[k]}`));
  c.check(await page.evaluate(() => APP.view === 'subject' && APP.subjectId === 'fixture'), 'the app did not open on the screen the older copy last showed');
  const movedRecord = await recordOf(env, page);
  const oldKeys = () => Object.keys(localStorage).filter(k => k.startsWith('pl:'));
  const gone = await page.waitForFunction(`(${oldKeys})().length === 0`, null, { timeout: 20000 }).then(() => true, () => false);
  c.check(gone, `the old copy is still on the phone once the account has it: ${await page.evaluate(`(${oldKeys})().join(', ')`)}`);
  await context.close();

  const cleared = await env.freshPage(c, 390, { project });
  c.check(JSON.stringify(await recordOf(env, cleared.page)) === JSON.stringify(movedRecord), 'the moved record does not come back on a cleared phone');
  await cleared.context.close();
  return c;
}

export const SYNC_CHECKS = { X49, X50 };
