// The regions the app has maps for. A region is a name, a projection fitted to a frame, and lists of places taken from Natural Earth by
// name. To add a region, add an entry here (copy the nearest one and change its lists) and run `npm run maps`. A region of the countries in a window of the world is
// a config of window.mjs (regions-americas.mjs, regions-eurasia.mjs, regions-africa.mjs), not an entry written out here.
//   land      the kinds of place that are ground; water on top of them is not water (a tap on a coast that the sea's outline overlaps)
//   draw      the kinds drawn on a blank map, in this order (the others show only when lit)
//   labelled  the kinds named on the labelled map
//   borders   which kinds have neighbours and water computed
import { winkelTripel, laea, albers } from './geo.mjs';
import { citySpecs } from './cities.mjs';
import { WIDTH, WORLD_VIEW, singlePart } from './fit.mjs';
import { worldSpecs } from './world-specs.mjs';
import { windowRegion } from './window.mjs';
import { slug, area, water, line, coast, find, nameOf } from './specs.mjs';
import { sharedEdges } from './topology.mjs';
import { withWorldBorders } from './world-borders.mjs';
import { partOf, limited } from './limits.mjs';
import { AMERICAS } from './regions-americas.mjs';
import { EURASIA } from './regions-eurasia.mjs';
import { AFRICA } from './regions-africa.mjs';
import { WORLD_FEATURES } from './regions-world.mjs';

/* ---------- the United States: a projection of its own, Albers USA ---------- */
// the United States as d3's albersUsa lays it out: the lower 48, Alaska and Hawaii on insets at the lower left; one frame
function albersUsa() {
  const k = 1070, s = WIDTH / (0.91 * k), at = (x, y) => [(x + 0.455 * k) * s, (y + 0.238 * k) * s];
  const part = (id, o, rect) => {
    const f = albers({ ...o, translate: o.translate });
    return { id, project: (lon, lat) => { const [x, y] = f(lon, lat); return at(x, y); }, rect: [at(rect[0], rect[1]), at(rect[2], rect[3])].flat() };
  };
  const lower48 = part('lower48', { lon0: -96, parallels: [29.5, 45.5], center: [-96.6, 38.7], scale: k, translate: [0, 0] }, [-0.455 * k, -0.238 * k, 0.455 * k, 0.238 * k]);
  const alaska = part('alaska', { lon0: -154, parallels: [55, 65], center: [-156, 58.5], scale: 0.35 * k, translate: [-0.307 * k, 0.201 * k] }, [-0.425 * k, 0.12 * k, -0.214 * k, 0.234 * k]);
  const hawaii = part('hawaii', { lon0: -157, parallels: [8, 18], center: [-160, 19.9], scale: k, translate: [-0.205 * k, 0.212 * k] }, [-0.214 * k, 0.166 * k, -0.115 * k, 0.234 * k]);
  const box = p => { const [x0, y0, x1, y1] = p.rect; return { id: p.id, x: x0, y: y0, w: x1 - x0, h: y1 - y0 }; };
  // the lower 48's neighbours and water stop at the insets: what lies under an inset is covered by it
  return { size: [WIDTH, 0.476 * k * s], parts: [{ ...lower48, cut: [alaska.rect, hawaii.rect] }, alaska, hawaii], frames: [alaska, hawaii].map(box) };
}

/* ---------- the United States ---------- */
const CENSUS = {
  west: ['AK', 'AZ', 'CA', 'CO', 'HI', 'ID', 'MT', 'NV', 'NM', 'OR', 'UT', 'WA', 'WY'],
  midwest: ['IL', 'IN', 'IA', 'KS', 'MI', 'MN', 'MO', 'NE', 'ND', 'OH', 'SD', 'WI'],
  south: ['AL', 'AR', 'DE', 'DC', 'FL', 'GA', 'KY', 'LA', 'MD', 'MS', 'NC', 'OK', 'SC', 'TN', 'TX', 'VA', 'WV'],
  northeast: ['CT', 'ME', 'MA', 'NH', 'NJ', 'NY', 'PA', 'RI', 'VT']
};
const LAKES = ['Lake Superior', 'Lake Michigan', 'Lake Huron', 'Lake Erie', 'Lake Ontario'];
// the states whose shore on each water is that water's coast (the lower 48; Alaska and Hawaii are on insets)
const COASTS = {
  west: ['california', 'oregon', 'washington'],
  east: ['maine', 'new-hampshire', 'massachusetts', 'rhode-island', 'connecticut', 'new-york', 'new-jersey', 'delaware', 'maryland', 'virginia', 'north-carolina', 'south-carolina', 'georgia', 'florida'],
  gulf: ['florida', 'alabama', 'mississippi', 'louisiana', 'texas']
};
const US_COAST_EPS = 0.25;   // degrees: as far from the water's outline as a coast edge may lie (the distance a state's water is found at, `borders.coast.eps` below)
const US_RIVERS = ['Mississippi', 'Missouri', 'Ohio', 'Arkansas', 'Colorado', 'Columbia', 'Rio Grande', 'Snake', 'Tennessee', 'Hudson'];

async function usSpecs(load) {
  const states = (await load('states50')).filter(f => f.props.adm0_a3 === 'USA'), countries = await load('countries50');
  const marine = await load('marine50'), lakes = await load('lakes50'), rivers = await load('rivers50'), ranges = await load('regions50'), sierra = await load('regions10');
  const insetOf = { AK: 'alaska', HI: 'hawaii' };   // each state is projected by the part that shows it
  const stateSpecs = states.map(f => area([f], { id: slug(f.props.name), name: f.props.name, kind: 'state', layer: 'states', code: f.props.postal, parts: [insetOf[f.props.postal] || 'lower48'] }));
  const regions = Object.entries(CENSUS).map(([id, codes]) => ({ id, name: { west: 'The West', midwest: 'The Midwest', south: 'The South', northeast: 'The Northeast' }[id], kind: 'region', members: stateSpecs.filter(s => codes.includes(s.code)).map(s => s.id) }));
  const only = { parts: ['lower48'] };
  // water is not cut away under the insets (a tap on the sea beside Hawaii is the Pacific), and an ocean takes in the bays and gulfs inside it
  const pacific = water(find(marine, 'name', ['North Pacific Ocean', 'Gulf of Alaska', 'Bering Sea', 'Bristol Bay', 'Cook Inlet']), { id: 'pacific', name: 'Pacific Ocean', kind: 'ocean', layer: 'marine', ...only, cover: true });
  const atlantic = water(find(marine, 'name', ['North Atlantic Ocean', 'Gulf of Maine', 'Bay of Fundy', 'Chesapeake Bay', 'Straits of Florida']), { id: 'atlantic', name: 'Atlantic Ocean', kind: 'ocean', layer: 'marine', ...only, cover: true });
  const gulf = water(find(marine, 'name', 'Gulf of Mexico'), { id: 'gulf-of-mexico', name: 'Gulf of Mexico', kind: 'sea', layer: 'marine', ...partOf('gulf-of-mexico'), ...only, cover: true });
  // Alaska's north shore is on the Arctic Ocean (with the Beaufort and Chukchi seas inside it): drawn in the Alaska inset, where the Pacific is not
  const arctic = water(find(marine, 'name', ['Arctic Ocean', 'Beaufort Sea', 'Chukchi Sea']), { id: 'arctic', name: 'Arctic Ocean', kind: 'ocean', layer: 'marine', parts: ['alaska'], cover: true });
  // the three coasts of the lower 48: the shore of the states along each water (a line, tapped within a band of it, 3.7)
  const owners = sharedEdges(stateSpecs, () => true);
  const coasts = [['west-coast', 'The West Coast', COASTS.west, pacific], ['east-coast', 'The East Coast', COASTS.east, atlantic], ['gulf-coast', 'The Gulf Coast', COASTS.gulf, gulf]]
    .map(([id, name, ids, on]) => coast(stateSpecs.filter(s => ids.includes(s.id)), on, owners, US_COAST_EPS, { id, name, kind: 'coast', layer: 'coasts', ...only }));
  return [
    ...stateSpecs, ...regions,
    ...withWorldBorders(countries, ['Canada', 'Mexico'].map(n => area(find(countries, 'NAME', n), { id: slug(n), name: n, kind: 'country', layer: 'countries', ...only })), { ignore: f => f.props.NAME === 'United States of America' }),
    ...LAKES.map(n => water(find(lakes, 'name', n), { id: slug(n), name: n, kind: 'lake', layer: 'lakes', ...only })),
    ...US_RIVERS.map(n => line(find(rivers, 'name', n), { id: `${slug(n)}-river`, name: `${n} River`, kind: 'river', layer: 'rivers', ...only })),
    pacific, atlantic, gulf, arctic, ...coasts,
    ...[['ROCKY MOUNTAINS', 'Rocky Mountains', ranges], ['APPALACHIAN MTS.', 'Appalachian Mountains', ranges], ['CASCADE RANGE', 'Cascade Range', ranges], ['SIERRA NEVADA', 'Sierra Nevada', sierra]]
      .map(([n, name, src]) => area(find(src, 'NAME', n), { id: slug(name), name, kind: 'range', layer: 'ranges', ...only })),
    ...citySpecs(await load('places10'))
  ];
}

/* ---------- western Europe ---------- */
// the five microstates are dots, each with the pixels its name stands from its dot, right and down (the app draws a line between): chosen so that no two names touch
// on a phone with western Europe in three panels (the pilot's look) and each name lies over the land or sea nearest its dot
const MICROSTATES = { Andorra: [-40, 24], Monaco: [-28, 26], Liechtenstein: [-30, -24], 'San Marino': [34, -12], Vatican: [-34, 22] };
const LEFT_OUT = ['Jersey', 'Guernsey', 'Isle of Man'];   // the crown dependencies are specks beside the countries a lesson asks
const EUROPE_SEAS = [['atlantic', 'Atlantic Ocean', 'North Atlantic Ocean', 'ocean'], ['north-sea', 'North Sea', 'North Sea'], ['baltic-sea', 'Baltic Sea', 'Baltic Sea'],
  ['mediterranean', 'Mediterranean Sea', 'Mediterranean Sea'], ['bay-of-biscay', 'Bay of Biscay', 'Bay of Biscay'], ['english-channel', 'English Channel', 'English Channel'],
  ['irish-sea', 'Irish Sea', 'Irish Sea'], ['adriatic', 'Adriatic Sea', 'Adriatic Sea'], ['tyrrhenian', 'Tyrrhenian Sea', 'Tyrrhenian Sea'], ['ionian', 'Ionian Sea', 'Ionian Sea'],
  ['balearic', 'Balearic Sea', 'Balearic Sea'], ['gulf-of-lion', 'Gulf of Lion', 'Golfe du Lion']];
const EUROPE_VIEW = { lon: [-11.5, 19.5], lat: [35.5, 59.5] };
const inView = (f, v) => f.polygons.some(p => p[0].some(([lon, lat]) => lon >= v.lon[0] && lon <= v.lon[1] && lat >= v.lat[0] && lat <= v.lat[1]));
// the polygons of a country that have ground in the frame: France's in South America and the Indian Ocean are not France's on this map
const inFrameOnly = f => ({ ...f, polygons: f.polygons.filter(p => p[0].some(([lon, lat]) => { const [x, y] = europe.parts[0].project(lon, lat), [x0, y0, x1, y1] = europe.parts[0].rect; return x >= x0 && x <= x1 && y >= y0 && y <= y1; })) });

async function europeSpecs(load) {
  const all = await load('countries50'), countries = all.filter(f => inView(f, EUROPE_VIEW) && !LEFT_OUT.includes(f.props.NAME)), marine = await load('marine50'), ranges = await load('regions50'), pyr = await load('regions10');
  return [
    ...withWorldBorders(all, countries.map(f => area([inFrameOnly(f)], { id: slug(nameOf(f)), name: nameOf(f), kind: 'country', layer: 'countries', dot: f.props.NAME in MICROSTATES, ...(f.props.NAME in MICROSTATES ? { lead: MICROSTATES[f.props.NAME] } : {}), optional: true }))),
    ...EUROPE_SEAS.map(([id, name, ne, kind = 'sea']) => limited(id, water(find(marine, 'name', ne), { id, name, kind, layer: 'marine', ...partOf(id) }))),
    // a strait is water too narrow for a finger: its outline, and a point at its middle that is tapped within a radius (3.7, as a microstate is)
    water(find(marine, 'name', 'Strait of Gibraltar'), { id: 'strait-of-gibraltar', name: 'Strait of Gibraltar', kind: 'strait', layer: 'marine', dot: true }),
    area(find(ranges, 'NAME', 'ALPS'), { id: 'alps', name: 'The Alps', kind: 'range', layer: 'ranges' }),
    area(find(pyr, 'NAME', 'PYRENEES'), { id: 'pyrenees', name: 'The Pyrenees', kind: 'range', layer: 'ranges' })
  ];
}

/* ---------- the list ---------- */
const frame = (fitted, extra) => ({ size: fitted.size, parts: fitted.parts, frames: fitted.frames, ...extra });
const world = singlePart(winkelTripel(), WORLD_VIEW);
const europe = singlePart(laea(10, 50), EUROPE_VIEW);
const usa = albersUsa();

export const REGIONS = [
  { id: 'world', name: 'The world', ...frame(world), tol: 0.1, load: ['countries110', 'marine110', 'places10'], specs: worldSpecs,
    land: ['continent'], draw: ['continent'], labelled: ['continent', 'ocean'] },
  { id: 'us', name: 'The United States', ...frame(usa), tol: 0.35, load: ['states50', 'countries50', 'marine50', 'lakes50', 'rivers50', 'regions50', 'regions10', 'places10'], specs: usSpecs,
    land: ['state', 'country'], draw: ['country', 'state', 'lake', 'river'], labelled: ['state', 'lake', 'river', 'coast', 'range', 'ocean', 'sea'],
    borders: { land: ['state', 'country'], water: ['ocean', 'sea', 'lake'], across: (a, b) => a.layer !== b.layer && (a.kind === 'state') !== (b.kind === 'state'),
      along: { eps: 8, minKm: 20 }, coast: { eps: 0.25, minKm: 15 } } },
  { id: 'europe-west', name: 'Europe, west', ...frame(europe), tol: 0.35, minVisible: 6, load: ['countries50', 'marine50', 'regions50', 'regions10'], specs: europeSpecs,
    land: ['country'], draw: ['country'], labelled: ['country', 'sea', 'strait', 'ocean', 'range'],
    borders: { land: ['country'], water: ['ocean', 'sea'], across: () => false, along: { eps: 8, minKm: 20 }, coast: { eps: 0.2, minKm: 15 } } },
  ...[...AMERICAS, ...EURASIA, ...AFRICA].map(windowRegion),
  WORLD_FEATURES
];
