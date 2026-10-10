// Drives the real app in Chromium. Run: npm run test:e2e
import { chromium } from 'playwright';
import { startServer } from './static-server.mjs';
import { testUnits, testUnitAt360, testDraftUnits, testMigration } from './e2e-unit.mjs';
import { testLessonEngineReview } from './e2e-review.mjs';
import { testNewScreens } from './e2e-screens.mjs';
import { testKinds } from './e2e-kinds.mjs';
import { testAudio } from './e2e-audio.mjs';
import { APP_JARGON, abstractIn } from './plain-words.mjs';
import { britishIn } from './american.mjs';
import { subjectMeta } from './fixtures/app-data.mjs';

const WIDTHS = [360, 390, 768, 1200, 1600];
const FONT_FAMILIES = ['Bricolage Grotesque', 'Literata', 'JetBrains Mono'];
const failures = [];
let checks = 0;
const check = (ok, msg) => { checks++; if (!ok) failures.push(msg); };

const server = await startServer();
const browser = await chromium.launch();

async function freshPage(width = 390) {
  const context = await browser.newContext({ viewport: { width, height: 800 } });
  const page = await context.newPage();
  page.on('pageerror', err => failures.push(`page error: ${err.message}`));
  page.on('console', msg => { if (msg.type() === 'error') failures.push(`console error: ${msg.text()}`); });
  await page.goto(server.url);
  await page.evaluate(() => localStorage.clear());
  await page.reload();
  return { context, page };
}

// Navigation goes through the visible controls: the tab bar on phones, the rail on desktop.
const clickVisible = (page, selector) => page.locator(`${selector}:visible`).first().click();
const toLibrary = page => clickVisible(page, '[data-v="library"]');
const toSubject = page => clickVisible(page, '#screen [data-v="subject"]');
async function openSubject(page, id) {
  await toLibrary(page);
  await clickVisible(page, `#screen [data-s="${id}"]`);
}
const screenText = async page => (await page.locator('#screen').textContent()).trim();

async function horizontalOverflow(page) {
  return page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
}

// Text cut off inside a control (the page-level check can't see these). Deliberate ellipses are fine.
async function clippedText(page) {
  return page.evaluate(() => [...document.querySelectorAll('button, .opt, .chip, .tile, .mark, .stat')]
    .filter(el => el.offsetParent !== null && el.scrollWidth > el.clientWidth + 1 &&
      getComputedStyle(el).textOverflow !== 'ellipsis')
    .map(el => `"${el.textContent.trim().replace(/\s+/g, ' ').slice(0, 30)}"`));
}

// The words a learner never reads outside a case's own story or a quotation (tests/plain-words.mjs; lesson standard K9).
async function jargonShown(page) {
  const text = await page.evaluate(() => {
    const copy = document.querySelector('#screen').cloneNode(true);
    copy.querySelectorAll('blockquote, .passage, .casename').forEach(el => el.remove());   // a case may say anything
    return copy.textContent;
  });
  const prose = text.replace(/“[^”]*”|"[^"]*"/g, ' ');   // and so may a quotation
  return [...APP_JARGON.filter(w => new RegExp(`\\b${w}(['’]s)?\\b`, 'i').test(prose)), ...abstractIn(prose).map(e => e.word)];
}

async function inspect(page, label) {
  const text = await screenText(page);
  check(text.length > 40, `${label}: screen is empty`);
  const jargon = await jargonShown(page);
  // American English everywhere on screen, case stories included (tests/american.mjs)
  const british = britishIn(await page.evaluate(() => document.querySelector('#screen').textContent));
  check(british.length === 0, `${label}: shows the British form${british.length > 1 ? 's' : ''} ${british.map(w => `"${w}"`).join(', ')}`);
  check(jargon.length === 0, `${label}: shows the maintainers' word${jargon.length > 1 ? 's' : ''} ${jargon.map(w => `"${w}"`).join(', ')}`);
  const over = await horizontalOverflow(page);
  check(over <= 0, `${label}: ${over}px horizontal overflow`);
  const clipped = await clippedText(page);
  check(clipped.length === 0, `${label}: clipped text in ${clipped.join(', ')}`);
}

// 1 + 4. Every screen of every subject renders, with no overflow or clipping at each width.
async function testScreens() {
  for (const width of WIDTHS) {
    const { context, page } = await freshPage(width);
    for (const v of ['library', 'mixed', 'progress']) {
      await clickVisible(page, `[data-v="${v}"]`);
      await inspect(page, `${width}px ${v}`);
    }
    await toLibrary(page);
    await clickVisible(page, '[data-v="search"]');
    await page.fill('#q', 'the');
    await inspect(page, `${width}px search`);
    for (const s of await subjectMeta(page)) {
      const tag = `${width}px ${s.id}`;
      await openSubject(page, s.id);
      await inspect(page, `${tag}/index`);
      for (let u = 0; u < s.units; u++) {
        await clickVisible(page, `#screen [data-u="${u}"]`);
        await inspect(page, `${tag}/unit ${u + 1}`);
        await toSubject(page);
      }
      await clickVisible(page, '#screen [data-v="det"]');
      await inspect(page, `${tag}/det`);
      await toSubject(page);
      for (const ref of ['units', 'caveats']) {
        await clickVisible(page, `#screen [data-ref="${ref}"]`);
        await inspect(page, `${tag}/reference ${ref}`);
        await toSubject(page);
      }
    }
    await context.close();
  }
}

// 6. Name, manifest, service worker, installability and offline load.
async function testPwa() {
  const { context, page } = await freshPage();
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
  check(manifest.name === 'Fieldcraft' && manifest.short_name === 'Fieldcraft' && manifest.display === 'standalone',
    'manifest name/short_name/display wrong');
  for (const icon of [...manifest.icons.map(i => i.src), 'icons/apple-touch-icon.png', 'icons/favicon-32.png', 'icons/favicon.svg']) {
    const status = await page.evaluate(src => fetch(src).then(r => r.status), icon);
    check(status === 200, `${icon} returned ${status}`);
  }
  check(await page.locator('meta[name="apple-mobile-web-app-capable"][content="yes"]').count() === 1, 'missing apple-mobile-web-app-capable');

  await context.setOffline(true);
  await page.reload();
  check((await screenText(page)).length > 40, 'app does not render offline');
  // A lesson card uses all three families (the library alone never asks for the serif).
  await openSubject(page, (await subjectMeta(page))[0].id);
  await clickVisible(page, '#screen [data-u="0"]');
  const fontsOk = await page.evaluate(async (families) => {
    await document.fonts.ready;
    const faces = [...document.fonts];
    return faces.every(f => f.status !== 'error') &&
      families.every(fam => faces.some(f => f.family.replace(/"/g, '') === fam && f.status === 'loaded'));
  }, FONT_FAMILIES);
  check(fontsOk, 'self-hosted fonts not loaded offline');
  await context.close();
}

const unitEnv = { freshPage, check, inspect, clickVisible, openSubject, screenText };

try {
  await testScreens();
  await testUnits(unitEnv);
  await testUnitAt360(unitEnv);
  await testDraftUnits(unitEnv);
  await testMigration(unitEnv);
  await testLessonEngineReview(unitEnv);
  await testNewScreens(unitEnv);
  await testKinds(unitEnv);
  await testAudio(unitEnv);
  await testPwa();
} catch (err) {
  failures.push(`crashed: ${err.stack || err}`);
} finally {
  await browser.close();
  await server.close();
}

if (failures.length) {
  console.error(`✗ ${failures.length} of ${checks} browser checks failed:`);
  failures.forEach(f => console.error('  - ' + f));
  process.exit(1);
}
console.log(`✓ ${checks} browser checks passed`);
