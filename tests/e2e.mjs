// Drives the real app in Chromium. Run: npm run test:e2e
//   1. every browser check of 9 built so far (e2e-checks.mjs, and the sound checks of e2e-sing.mjs), on the app with the test subjects loaded;
//   2. the installable app: its name, manifest, service worker, the bar that offers a new version, offline load and fonts;
//   3. every seeded fault (e2e-controls.mjs): the app with one fault in it must turn exactly one check red.
import { chromium } from 'playwright';
import { startServer } from './static-server.mjs';
import { makeEnv, EXPECTED_ERROR } from './e2e-env.mjs';
import { CHECKS } from './e2e-checks.mjs';
import { SOUND_CHECKS, SOUND_LANES } from './e2e-sing.mjs';
import { FAULTS, runWithFault, withLimit } from './e2e-controls.mjs';
import { startEmulators } from './emulators.mjs';

const FONT_FAMILIES = ['Bricolage Grotesque', 'Literata', 'JetBrains Mono'];
const failures = [];
let checks = 0;
// Browser checks run only by name: the ones that exercise the change (the owner's rule: the whole suite only when the owner
// asks, and never as a step before a deploy). `npm run test:e2e -- X33 X36` runs those checks and their seeded faults; PWA names
// the installable-app check; `npm run test:e2e:all` runs everything and is for the owner's request only.
const ARGS = process.argv.slice(2);
const ALL = ARGS.includes('--all');
const PICKED = ARGS.filter(a => !a.startsWith('--'));
if (!ALL && !PICKED.length) {
  console.error('Name the browser checks that exercise your change, e.g. npm run test:e2e -- X33 X36 (PWA for the installable app).\nThe whole suite runs only when the owner asks for it: npm run test:e2e:all');
  process.exit(2);
}
const UNKNOWN = PICKED.filter(id => id !== 'PWA' && !(id in CHECKS));
if (UNKNOWN.length) { console.error(`No browser check is called ${UNKNOWN.join(', ')}. The checks: ${Object.keys(CHECKS).join(' ')} PWA`); process.exit(2); }
const wanted = id => ALL || PICKED.includes(id);
const browser = await chromium.launch();

/* ---------- the checks, on the app as it is ---------- */
async function runChecks() {
  const server = await startServer({ fixture: true });
  const env = makeEnv(browser, server);
  const lane = async list => {
    for (const [id, run] of list) {
      try {
        const c = await withLimit(run(env), id);
        checks += c.count;
        failures.push(...c.failures);
      } catch (error) { failures.push(`${id} crashed: ${error.stack || error}`); }
    }
  };
  try {
    // the sound checks spend their time waiting for real sound, so they run in lanes of their own, at the same time as the rest
    const all = Object.entries(CHECKS).filter(([id]) => wanted(id)), isSound = ([id]) => id in SOUND_CHECKS;
    await Promise.all([lane(all.filter(e => !isSound(e))), ...SOUND_LANES.map(ids => lane(ids.filter(wanted).map(id => [id, CHECKS[id]])))]);
  } finally { await server.close(); }
}

/* ---------- the installable app, without the test subject ---------- */
async function testPwa() {
  // a deploy, played by the server: once `deployed`, it serves a service worker with a new cache name, as a new version of the app would
  let deployed = false;
  const server = await startServer({ transform: (path, body) => deployed && path === 'sw.js' ? body.replace(/const CACHE = 'fieldcraft-v\d+'/, "const CACHE = 'fieldcraft-vtest'") : body });
  const check = (ok, msg) => { checks++; if (!ok) failures.push(`PWA: ${msg}`); };
  const context = await browser.newContext({ viewport: { width: 390, height: 800 } });
  const page = await context.newPage();
  page.on('pageerror', err => failures.push(`PWA: page error: ${err.message}`));
  page.on('console', msg => { if (msg.type() === 'error' && !EXPECTED_ERROR.test(msg.text())) failures.push(`PWA: console error: ${msg.text()}`); });
  const env = makeEnv(browser, server);
  await page.goto(server.url);
  await env.signIn(page);
  check(await page.title() === 'Fieldcraft · Pragmatic knowledge', `title is "${await page.title()}"`);
  const brand = (await page.locator('#screen .topbar .m').first().textContent()).trim();
  check(brand === 'Fieldcraft · Pragmatic knowledge', `library brand is "${brand}"`);

  await page.evaluate(() => navigator.serviceWorker.ready);
  await page.reload();
  await env.recordOpen(page);
  check(await page.evaluate(() => !!navigator.serviceWorker.controller), 'service worker does not control the page');
  check(await page.locator('#updateBar').count() === 0, 'the first service worker taking over offered a new version');

  // a deploy: coming back to the app fetches the new service worker, and once it has taken over, a bar offers the new version
  deployed = true;
  await page.evaluate(() => document.dispatchEvent(new Event('visibilitychange')));
  const offered = await page.locator('#updateBar').waitFor({ timeout: 15000 }).then(() => true, () => false);
  check(offered, 'a new version that took over the page was not offered');
  if (offered) {
    await page.locator('#updateOpen').click();
    await page.waitForLoadState('load');
    await env.recordOpen(page);
    check(await page.locator('#updateBar').count() === 0, 'the bar is still there once the new version is open');
  }

  const cdp = await context.newCDPSession(page);
  const { url, errors } = await cdp.send('Page.getAppManifest');
  check(url.endsWith('manifest.json') && errors.length === 0, `manifest errors: ${JSON.stringify(errors)}`);
  const install = await cdp.send('Page.getInstallabilityErrors');
  check(install.installabilityErrors.length === 0, `not installable: ${JSON.stringify(install.installabilityErrors)}`);

  const manifest = await page.evaluate(() => fetch('manifest.json').then(r => r.json()));
  check(manifest.name === 'Fieldcraft' && manifest.short_name === 'Fieldcraft' && manifest.display === 'standalone', 'manifest name/short_name/display wrong');
  for (const icon of [...manifest.icons.map(i => i.src), 'icons/apple-touch-icon.png', 'icons/favicon-32.png', 'icons/favicon.svg']) {
    const status = await page.evaluate(src => fetch(src).then(r => r.status), icon);
    check(status === 200, `${icon} returned ${status}`);
  }
  check(await page.locator('meta[name="apple-mobile-web-app-capable"][content="yes"]').count() === 1, 'missing apple-mobile-web-app-capable');

  await context.setOffline(true);
  await page.reload();
  const openOffline = await env.recordOpen(page).then(() => true, () => false);
  check(openOffline && (await page.locator('#screen').textContent()).trim().length > 40, 'app does not open offline');
  // a search result quotes the end result in the serif (the library alone never asks for it)
  await page.locator('#screen [data-v="search"]:visible').first().click();
  await page.fill('#q', 'sing');
  const fontsOk = await page.evaluate(async families => {
    await document.fonts.ready;
    const faces = [...document.fonts];
    return faces.every(f => f.status !== 'error') && families.every(fam => faces.some(f => f.family.replace(/"/g, '') === fam && f.status === 'loaded'));
  }, FONT_FAMILIES);
  check(fontsOk, 'self-hosted fonts not loaded offline');
  await context.close();
  await server.close();
}

/* ---------- the seeded faults ---------- */
// Faults in the sound code run the five sound checks, which spend minutes in real time on real sound: a few at a time, after the others,
// so that a busy machine never makes a frame late. The others all run at once, as they always have.
const SOUND_FAULTS_AT_ONCE = 3;
// The others run in a pool too: a fault such as "a question moves on by itself after two and a half seconds" is only exact while a step of a check
// is quicker than that, and forty pages at once on one machine are not.
const QUICK_FAULTS_AT_ONCE = 4;
async function inPool(items, limit, work) {
  const out = [];
  let next = 0;
  await Promise.all(Array.from({ length: limit }, async () => {
    for (let i = next++; i < items.length; i = next++) out[i] = await work(items[i]);
  }));
  return out;
}
async function testFaults() {
  const run = async fault => ({ fault, ...(await runWithFault(browser, fault)) });
  const quick = await inPool(FAULTS.filter(f => wanted(f.check) && !f.only), QUICK_FAULTS_AT_ONCE, run);
  const slow = await inPool(FAULTS.filter(f => wanted(f.check) && f.only), SOUND_FAULTS_AT_ONCE, run);
  const results = [...quick, ...slow];
  for (const { fault, red, errors, unused } of results) {
    checks++;
    const exact = red.length === 1 && red[0] === fault.check && unused.length === 0;
    if (!exact) failures.push(`seeded fault "${fault.name}" should turn exactly ${fault.check} red, and turned [${red.join(', ')}] red${unused.length ? `; the fault was never applied to ${unused.join(', ')}` : ''}${errors.length ? ` (${errors.join('; ')})` : ''}`);
  }
  return results.length;
}

let faultCount = 0;
const stopEmulators = await startEmulators();
try {
  await runChecks();
  if (wanted('PWA')) await testPwa();
  if (!process.env.E2E_SKIP_FAULTS) faultCount = await testFaults();   // a quick local run of the checks alone
} catch (err) {
  failures.push(`crashed: ${err.stack || err}`);
} finally {
  await browser.close();
  await stopEmulators();
}

if (failures.length) {
  console.error(`✗ ${failures.length} of ${checks} browser checks failed:`);
  failures.forEach(f => console.error('  - ' + f));
  process.exit(1);
}
console.log(`✓ ${checks} browser checks passed${faultCount ? ` (${faultCount} seeded faults each turned exactly its own check red)` : ''}`);
