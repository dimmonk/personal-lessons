// A region made of the countries that lie in a window of the world: `windowRegion(cfg)` is one entry of REGIONS (regions.mjs). The window is a longitude/latitude
// rectangle laid out WIDTH units across by a projection; the places are the countries (and provinces) that have ground in the frame, then the seas, straits,
// canals, rivers, lakes, ranges and deserts the part names, each taken from Natural Earth by name. Western Europe (regions.mjs) is the pilot of this shape.
//   cfg  { id, name, project, view: { lon: [w, e], lat: [s, n] }, tol?, minVisible?, minArea?,
//          asked: [country names the part asks]  (a name missing from the data stops the build; every other country in the frame is a neighbour, dropped when only a sliver shows)
//          skip?: [names left out], dots?: { name: [dx, dy] | 'auto' }  (an island state or microstate is a dot: its name stands `lead` pixels from it, 'auto' = clear of the others),
//          split?: { name: [id, name] }  (a country whose polygons in the frame are a place of their own: France's in South America are French Guiana),
//          provinces?: 'CAN'  (the first-level divisions of a country, in place of the country),
//          oceans?: [key], seas?: [[id, name, ne, kind?, layer?]], straits?: [[id, name, { ne, layer? } | { point: [lon, lat] }]],
//          canals?: [[id, name, ne]], rivers?: [[id, name, [ne]]], lakes?: [[id, name, ne]], ranges?: [[id, name, layer, NE, kind?]] }
import { slug, area, water, line, find, nameOf, JOINED, NEVER_DRAWN, polygonsIn } from './specs.mjs';
import { singlePart } from './fit.mjs';

const OCEANS = {
  atlantic: ['Atlantic Ocean', ['North Atlantic Ocean', 'South Atlantic Ocean']], pacific: ['Pacific Ocean', ['North Pacific Ocean', 'South Pacific Ocean']],
  indian: ['Indian Ocean', ['INDIAN OCEAN']], arctic: ['Arctic Ocean', ['Arctic Ocean']], southern: ['Southern Ocean', ['SOUTHERN OCEAN']]
};
const KINDS = { sea: 'sea', ocean: 'ocean', strait: 'strait' };
const LAND = ['country', 'province'];
// Natural Earth's Red Sea ends at 28.1 N, short of the Gulf of Aqaba, where Jordan, Israel, Egypt and Saudi Arabia have a shore: the gulf is added to the sea (hand-drawn, a little wider than the
// gulf as the data's seas are, since the land is taken out of a sea) so that a shore on it is on the Red Sea
const SEA_PATCHES = { 'red-sea': [[[34.3, 27.8], [35.1, 27.8], [35.25, 28.5], [35.1, 29.6], [34.85, 29.65], [34.65, 28.9], [34.3, 28.1]]] };
const patched = (id, spec) => SEA_PATCHES[id] ? { ...spec, rings: [...spec.rings, ...SEA_PATCHES[id].map(r => r.map(([lon, lat]) => [lon, lat, 0]))] } : spec;

// the countries of the frame as specs: asked ones must show, the others are neighbours
function countrySpecs(cfg, countries, inFrame) {
  const asked = new Set(cfg.asked), skip = new Set(cfg.skip || []), split = cfg.split || {}, dots = cfg.dots || {};
  const byName = Object.fromEntries(countries.map(f => [f.props.NAME, f])), joinedInto = new Set(Object.values(JOINED).flat());
  const displayed = f => nameOf(f);
  const missing = [...asked].filter(n => !countries.some(f => displayed(f) === n));
  if (missing.length) throw new Error(`${cfg.id}: no country called ${missing.join(', ')} (the names are Natural Earth's English, as nameOf says them)`);
  const specs = [];
  for (const f of countries) {
    if (joinedInto.has(f.props.NAME) || NEVER_DRAWN.includes(f.props.NAME) || skip.has(displayed(f)) || f.props.ADM0_A3 === cfg.provinces) continue;
    if (f.props.TYPE === 'Dependency' && !asked.has(displayed(f))) continue;
    const joined = (JOINED[f.props.NAME] || []).map(n => byName[n]).filter(Boolean);
    const whole = { ...f, polygons: [f, ...joined].flatMap(x => x.polygons) }, here = polygonsIn(whole, inFrame);
    if (!here.polygons.length) { if (asked.has(displayed(f))) throw new Error(`${cfg.id}: ${displayed(f)} has nothing in the frame`); continue; }
    const [id, name] = split[displayed(f)] || [slug(displayed(f)), displayed(f)], dot = displayed(f) in dots;
    specs.push(area([here], { id, name, kind: 'country', layer: 'countries', optional: !asked.has(displayed(f)) && !split[displayed(f)], dot,
      ...(dot ? { lead: dots[displayed(f)] } : {}) }));
  }
  const strayDots = Object.keys(dots).filter(n => !specs.some(s => s.name === n));
  if (strayDots.length) throw new Error(`${cfg.id}: ${strayDots.join(', ')} is a dot but not a place of the frame`);
  return specs;
}
const provinceSpecs = (cfg, states) => states.filter(f => f.props.adm0_a3 === cfg.provinces)
  .map(f => area([f], { id: slug(f.props.name), name: f.props.name, kind: 'province', layer: 'states', code: f.props.postal }));

export async function waterSpecs(cfg, load) {
  const marine = await load('marine50'), out = [];
  for (const key of cfg.oceans || []) { const [name, ne] = OCEANS[key]; out.push(water(find(marine, 'name', ne), { id: key, name, kind: 'ocean', layer: 'marine', optional: true })); }
  for (const [id, name, ne, kind = 'sea', layer = 'marine50'] of cfg.seas || []) out.push(patched(id, water(find(await load(layer), 'name', ne), { id, name, kind: KINDS[kind], layer: 'marine' })));
  for (const [id, name, how] of cfg.straits || []) {
    if (how.point) out.push({ id, name, kind: 'strait', layer: 'marine', rings: [], point: how.point, dot: true, lead: how.lead });
    else out.push(water(find(await load(how.layer || 'marine10'), 'name', how.ne), { id, name, kind: 'strait', layer: 'marine', dot: true, lead: how.lead }));
  }
  return out;
}
export async function featureSpecs(cfg, load) {
  const out = [];
  if (cfg.canals || cfg.rivers) {
    const rivers = await load('rivers50');
    for (const [id, name, ne] of cfg.canals || []) out.push(line(find(rivers, 'name', ne), { id, name, kind: 'canal', layer: 'rivers' }));
    for (const [id, name, ne] of cfg.rivers || []) out.push(line(find(rivers, 'name', ne), { id, name, kind: 'river', layer: 'rivers' }));
  }
  if (cfg.lakes) { const lakes = await load('lakes50'); for (const [id, name, ne] of cfg.lakes) out.push(water(find(lakes, 'name', ne), { id, name, kind: 'lake', layer: 'lakes' })); }
  for (const [id, name, layer, ne, kind = 'range'] of cfg.ranges || []) out.push(area(find(await load(layer), 'NAME', ne), { id, name, kind, layer: 'ranges' }));
  return out;
}

export function windowRegion(cfg) {
  const fitted = singlePart(cfg.project, cfg.view), part = fitted.parts[0], [x0, y0, x1, y1] = part.rect;
  const inFrame = (lon, lat) => { const [x, y] = part.project(lon, lat); return x >= x0 && x <= x1 && y >= y0 && y <= y1; };
  const layers = ['countries50', 'marine50', ...(cfg.provinces ? ['states50'] : []), ...(cfg.straits || []).filter(s => s[2].ne).map(s => s[2].layer || 'marine10'), ...(cfg.seas || []).map(s => s[4] || 'marine50'),
    ...(cfg.rivers || cfg.canals ? ['rivers50'] : []), ...(cfg.lakes ? ['lakes50'] : []), ...(cfg.ranges || []).map(r => r[2])].filter((l, i, all) => all.indexOf(l) === i);
  const land = cfg.provinces ? LAND : ['country'];
  return {
    id: cfg.id, name: cfg.name, size: fitted.size, parts: fitted.parts, frames: [], tol: cfg.tol || 0.35, minVisible: cfg.minVisible || 6, ...(cfg.minArea ? { minArea: cfg.minArea } : {}),
    load: layers, land, draw: [...land, 'lake', 'river'], labelled: [...land, 'sea', 'strait', 'ocean', 'range', 'desert', 'lake', 'river', 'canal'],
    borders: { land, water: ['ocean', 'sea'], across: cfg.provinces ? (a, b) => a.layer !== b.layer && (a.kind === 'province') !== (b.kind === 'province') : () => false,
      along: { eps: 8, minKm: 20 }, coast: { eps: cfg.coastEps || 0.2, minKm: 15 } },
    async specs(load) {
      const countries = await load('countries50');
      const places = [...(cfg.provinces ? provinceSpecs(cfg, await load('states50')) : []), ...countrySpecs(cfg, countries, inFrame)];
      return [...places, ...await waterSpecs(cfg, load), ...await featureSpecs(cfg, load)];
    }
  };
}
