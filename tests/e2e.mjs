// Drives the real app in Chromium. Run: npm run test:e2e
//   1. every browser check of 26.7 built so far (e2e-checks.mjs), on the app with the test subject loaded;
//   2. the installable app: its name, manifest, service worker, offline load and fonts;
//   3. every seeded fault (e2e-controls.mjs): the app with one fault in it must turn exactly one check red.
import { chromium } from 'playwright';
import { startServer } from './static-server.mjs';
import { makeEnv } from './e2e-env.mjs';
import { CHECKS } from './e2e-checks.mjs';
import { FAULTS, runWithFault } from './e2e-controls.mjs';

const FONT_FAMILIES = ['Bricolage Grotesque', 'Literata', 'JetBrains Mono'];
const failures = [];
let checks = 0;
const browser = await chromium.launch();

/* ---------- the checks, on the app as it is ---------- */
async function runChecks() {
  const server = await startServer({ fixture: true });
  const env = makeEnv(browser, server);
  try {
    for (const [id, run] of Object.entries(CHECKS)) {
      try {
        const c = await run(env);
        checks += c.count;
        failures.push(...c.failures);
      } catch (error) { failures.push(`${id} crashed: ${error.stack || error}`); }
    }
  } finally { await server.close(); }
}

/* ---------- the installable app, without the test subject ---------- */
async function testPwa() {
  const server = await startServer();
  const check = (ok, msg) => { checks++; if (!ok) failures.push(`PWA: ${msg}`); };
  const context = await browser.newContext({ viewport: { width: 390, height: 800 } });
  const page = await context.newPage();
  page.on('pageerror', err => failures.push(`PWA: page error: ${err.message}`));
  page.on('console', msg => { if (msg.type() === 'error') failures.push(`PWA: console error: ${msg.text()}`); });
  await page.goto(server.url);
  await page.evaluate(() => localStorage.clear());
  await page.reload();
  check(await page.title() === 'Fieldcraft · Pragmatic knowledge', `title is "${await page.title()}"`);
  const brand = (await page.locator('#screen .topbar .m').first().textContent()).trim();
  check(brand === 'Fieldcraft · Pragmatic knowledge', `library brand is "${brand}"`);

  await page.evaluate(() => navigator.serviceWorker.ready);
  await page.reload();
  check(await page.evaluate(() => !!navigator.serviceWorker.controller), 'service worker does not control the page');

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
  check((await page.locator('#screen').textContent()).trim().length > 40, 'app does not render offline');
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
async function testFaults() {
  const results = await Promise.all(FAULTS.map(async fault => ({ fault, ...(await runWithFault(browser, fault)) })));
  for (const { fault, red, errors, unused } of results) {
    checks++;
    const exact = red.length === 1 && red[0] === fault.check && unused.length === 0;
    if (!exact) failures.push(`seeded fault "${fault.name}" should turn exactly ${fault.check} red, and turned [${red.join(', ')}] red${unused.length ? `; the fault was never applied to ${unused.join(', ')}` : ''}${errors.length ? ` (${errors.join('; ')})` : ''}`);
  }
  return results.length;
}

let faultCount = 0;
try {
  await runChecks();
  await testPwa();
  if (!process.env.E2E_SKIP_FAULTS) faultCount = await testFaults();   // a quick local run of the checks alone
} catch (err) {
  failures.push(`crashed: ${err.stack || err}`);
} finally {
  await browser.close();
}

if (failures.length) {
  console.error(`✗ ${failures.length} of ${checks} browser checks failed:`);
  failures.forEach(f => console.error('  - ' + f));
  process.exit(1);
}
console.log(`✓ ${checks} browser checks passed${faultCount ? ` (${faultCount} seeded faults each turned exactly its own check red)` : ''}`);
