// Builds the app's map files from Natural Earth: node tools/maps/build-maps.mjs [region ...]   (npm run maps)
// With no names it builds every region of regions.mjs. The data is fetched once into tools/maps/.cache/ (see sources.mjs); nothing is fetched
// when the app runs. Output: public/maps/<region>.js, one classic script per region, each registering with FC.map. Prints each file's size.
import { REGIONS } from './regions.mjs';
import { loadLayer, sourceNote } from './sources.mjs';
import { buildRegion } from './pipeline.mjs';
import { mapSource, writeMap } from './emit.mjs';

const wanted = process.argv.slice(2).filter(a => !a.startsWith('--'));
const unknown = wanted.filter(id => !REGIONS.some(r => r.id === id));
if (unknown.length) { console.error(`No region called ${unknown.join(', ')}. The regions: ${REGIONS.map(r => r.id).join(', ')}`); process.exit(2); }

const cache = new Map();
const load = name => { if (!cache.has(name)) cache.set(name, loadLayer(name)); return cache.get(name); };

let total = 0;
for (const R of REGIONS.filter(r => !wanted.length || wanted.includes(r.id))) {
  const started = Date.now();
  const built = buildRegion(R, await R.specs(load));
  const bytes = await writeMap(R, mapSource(R, built, sourceNote(R.load)));
  total += bytes;
  console.log(`${R.id.padEnd(12)} ${(bytes / 1024).toFixed(1).padStart(7)} KB  ${String(built.rings.length).padStart(4)} rings  ${String(built.places.length).padStart(3)} places  ${((Date.now() - started) / 1000).toFixed(1)}s`);
}
console.log(`${'total'.padEnd(12)} ${(total / 1024).toFixed(1).padStart(7)} KB`);
