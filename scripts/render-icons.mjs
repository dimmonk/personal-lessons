// Rasterizes public/icons/*.svg into the PNG sizes the manifest and iOS need.
import { chromium } from 'playwright';
import { readFile } from 'node:fs/promises';

const OUT = new URL('../public/icons/', import.meta.url);
const TARGETS = [
  { src: 'icon.svg', out: 'icon-512.png', size: 512 },
  { src: 'icon.svg', out: 'icon-192.png', size: 192 },
  // Maskable: same mark, scaled into Android's 80% safe circle.
  { src: 'icon.svg', out: 'icon-maskable-512.png', size: 512, maskable: true },
  { src: 'icon.svg', out: 'apple-touch-icon.png', size: 180 },
  { src: 'favicon.svg', out: 'favicon-32.png', size: 32, transparent: true },
];

const browser = await chromium.launch();
try {
  for (const t of TARGETS) {
    const svg = await readFile(new URL(t.src, OUT), 'utf8');
    const page = await browser.newPage({ viewport: { width: t.size, height: t.size } });
    const sized = svg.replace('<svg ', `<svg width="${t.size}" height="${t.size}" `);
    const img = t.maskable
      ? sized.replace('<g id="mark">', '<g id="mark" transform="translate(256 256) scale(0.78) translate(-256 -256)">')
      : sized;
    await page.setContent(`<html><body style="margin:0;background:transparent">${img}</body></html>`);
    await page.screenshot({ path: new URL(t.out, OUT).pathname, omitBackground: !!t.transparent });
    await page.close();
    console.log(`wrote ${t.out}`);
  }
} finally {
  await browser.close();
}
