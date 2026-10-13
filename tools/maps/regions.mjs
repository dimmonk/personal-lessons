// The regions the app has maps for. A region is a name, a projection fitted to a frame, and lists of places taken from Natural Earth by
// name. To add a region, add an entry here (copy the nearest one and change its lists) and run `npm run maps`.
//   land      the kinds of place that are ground; water on top of them is not water (a tap on a coast that the sea's outline overlaps)
//   draw      the kinds drawn on a blank map, in this order (the others show only when lit)
//   labelled  the kinds named on the labelled map
//   borders   which kinds have neighbours and water computed
import { equalEarth, laea, albers } from './geo.mjs';
import { slug, area, water, line, find, splitAtMeridian } from './specs.mjs';

const WIDTH = 1000;

/* ---------- projections fitted to a frame ---------- */
// one projection, its frame the bounding box of a longitude/latitude window, scaled to WIDTH units across
function singlePart(raw, view) {
  const flip = (lon, lat) => { const [x, y] = raw(lon, lat); return [x, -y]; };
  const edge = [];
  for (let lon = view.lon[0]; lon <= view.lon[1]; lon += 0.25) edge.push([lon, view.lat[0]], [lon, view.lat[1]]);
  for (let lat = view.lat[0]; lat <= view.lat[1]; lat += 0.25) edge.push([view.lon[0], lat], [view.lon[1], lat]);
  const xs = edge.map(([lon, lat]) => flip(lon, lat)[0]), ys = edge.map(([lon, lat]) => flip(lon, lat)[1]);
  const [x0, x1, y0, y1] = [Math.min(...xs), Math.max(...xs), Math.min(...ys), Math.max(...ys)], s = WIDTH / (x1 - x0);
  return { size: [WIDTH, (y1 - y0) * s], parts: [{ id: 'main', project: (lon, lat) => { const [x, y] = flip(lon, lat); return [(x - x0) * s, (y - y0) * s]; }, rect: [0, 0, WIDTH, (y1 - y0) * s] }] };
}
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

/* ---------- the world ---------- */
const CONTINENTS = { Africa: 'Africa', Antarctica: 'Antarctica', Asia: 'Asia', Europe: 'Europe', 'North America': 'North America', Oceania: 'Oceania', 'South America': 'South America' };
const OCEANS = [['pacific', 'Pacific Ocean', ['North Pacific Ocean', 'South Pacific Ocean']], ['atlantic', 'Atlantic Ocean', ['North Atlantic Ocean', 'South Atlantic Ocean']],
  ['indian', 'Indian Ocean', ['INDIAN OCEAN']], ['southern', 'Southern Ocean', ['SOUTHERN OCEAN']], ['arctic', 'Arctic Ocean', ['Arctic Ocean']]];
// the big regions are the United Nations' (Natural Earth's SUBREGION), with Russia's part east of the Urals as Northern Asia; South America is a
// continent and its own region, so it is only the continent
const REGION_NAMES = { 'Northern America': 'Northern America', 'Central America': 'Central America', Caribbean: 'The Caribbean',
  'Northern Europe': 'Northern Europe', 'Western Europe': 'Western Europe', 'Eastern Europe': 'Eastern Europe', 'Southern Europe': 'Southern Europe',
  'Northern Africa': 'Northern Africa', 'Western Africa': 'West Africa', 'Middle Africa': 'Central Africa', 'Eastern Africa': 'East Africa', 'Southern Africa': 'Southern Africa',
  'Western Asia': 'Western Asia', 'Central Asia': 'Central Asia', 'Southern Asia': 'South Asia', 'Eastern Asia': 'East Asia', 'South-Eastern Asia': 'Southeast Asia',
  'Australia and New Zealand': 'Australia and New Zealand', Melanesia: 'Melanesia', Micronesia: 'Micronesia', Polynesia: 'Polynesia', 'Northern Asia': 'Northern Asia' };

async function worldSpecs(load) {
  const countries = await load('countries110'), marine = await load('marine110');
  const carriers = [];
  for (const f of countries) {
    const continent = CONTINENTS[f.props.CONTINENT];
    if (!continent) continue;
    if (f.props.NAME === 'Russia') {
      const { west, east } = splitAtMeridian(f, 60);
      carriers.push({ f: west, continent: 'Europe', subregion: 'Eastern Europe', tag: 'russia-west' }, { f: east, continent: 'Asia', subregion: 'Northern Asia', tag: 'russia-east' });
    } else carriers.push({ f, continent, subregion: f.props.SUBREGION, tag: slug(f.props.NAME) });
  }
  const hidden = carriers.map(c => area([c.f], { id: `c-${c.tag}`, name: c.tag, kind: 'country', layer: 'countries', hidden: true }));
  const membersOf = pick => carriers.filter(pick).map(c => `c-${c.tag}`);
  const continents = Object.values(CONTINENTS).map(name => ({ id: slug(name), name, kind: 'continent', members: membersOf(c => c.continent === name) }));
  const regions = Object.entries(REGION_NAMES).filter(([sub]) => carriers.some(c => c.subregion === sub))
    .map(([sub, name]) => ({ id: slug(name), name, kind: 'region', members: membersOf(c => c.subregion === sub) }));
  const oceans = OCEANS.map(([id, name, names]) => water(find(marine, 'name', names), { id, name, kind: 'ocean', layer: 'marine' }));
  return [...hidden, ...continents, ...oceans, ...regions];
}

/* ---------- the United States ---------- */
const CENSUS = {
  west: ['AK', 'AZ', 'CA', 'CO', 'HI', 'ID', 'MT', 'NV', 'NM', 'OR', 'UT', 'WA', 'WY'],
  midwest: ['IL', 'IN', 'IA', 'KS', 'MI', 'MN', 'MO', 'NE', 'ND', 'OH', 'SD', 'WI'],
  south: ['AL', 'AR', 'DE', 'DC', 'FL', 'GA', 'KY', 'LA', 'MD', 'MS', 'NC', 'OK', 'SC', 'TN', 'TX', 'VA', 'WV'],
  northeast: ['CT', 'ME', 'MA', 'NH', 'NJ', 'NY', 'PA', 'RI', 'VT']
};
const LAKES = ['Lake Superior', 'Lake Michigan', 'Lake Huron', 'Lake Erie', 'Lake Ontario'];
const US_RIVERS = ['Mississippi', 'Missouri', 'Ohio', 'Arkansas', 'Colorado', 'Columbia', 'Rio Grande', 'Snake', 'Tennessee', 'Hudson'];

async function usSpecs(load) {
  const states = (await load('states50')).filter(f => f.props.adm0_a3 === 'USA'), countries = await load('countries50');
  const marine = await load('marine50'), lakes = await load('lakes50'), rivers = await load('rivers50'), ranges = await load('regions50'), sierra = await load('regions10');
  const insetOf = { AK: 'alaska', HI: 'hawaii' };   // each state is projected by the part that shows it
  const stateSpecs = states.map(f => area([f], { id: slug(f.props.name), name: f.props.name, kind: 'state', layer: 'states', code: f.props.postal, parts: [insetOf[f.props.postal] || 'lower48'] }));
  const regions = Object.entries(CENSUS).map(([id, codes]) => ({ id, name: { west: 'The West', midwest: 'The Midwest', south: 'The South', northeast: 'The Northeast' }[id], kind: 'region', members: stateSpecs.filter(s => codes.includes(s.code)).map(s => s.id) }));
  const only = { parts: ['lower48'] };
  return [
    ...stateSpecs, ...regions,
    ...['Canada', 'Mexico'].map(n => area(find(countries, 'NAME', n), { id: slug(n), name: n, kind: 'country', layer: 'countries', ...only })),
    ...LAKES.map(n => water(find(lakes, 'name', n), { id: slug(n), name: n, kind: 'lake', layer: 'lakes', ...only })),
    ...US_RIVERS.map(n => line(find(rivers, 'name', n), { id: `${slug(n)}-river`, name: `${n} River`, kind: 'river', layer: 'rivers', ...only })),
    // water is not cut away under the insets (a tap on the sea beside Hawaii is the Pacific), and an ocean takes in the bays and gulfs inside it
    water(find(marine, 'name', ['North Pacific Ocean', 'Gulf of Alaska', 'Bering Sea', 'Bristol Bay', 'Cook Inlet']), { id: 'pacific', name: 'Pacific Ocean', kind: 'ocean', layer: 'marine', ...only, cover: true }),
    water(find(marine, 'name', ['North Atlantic Ocean', 'Gulf of Maine', 'Bay of Fundy', 'Chesapeake Bay', 'Straits of Florida']), { id: 'atlantic', name: 'Atlantic Ocean', kind: 'ocean', layer: 'marine', ...only, cover: true }),
    water(find(marine, 'name', 'Gulf of Mexico'), { id: 'gulf-of-mexico', name: 'Gulf of Mexico', kind: 'sea', layer: 'marine', ...only, cover: true }),
    ...[['ROCKY MOUNTAINS', 'Rocky Mountains', ranges], ['APPALACHIAN MTS.', 'Appalachian Mountains', ranges], ['CASCADE RANGE', 'Cascade Range', ranges], ['SIERRA NEVADA', 'Sierra Nevada', sierra]]
      .map(([n, name, src]) => area(find(src, 'NAME', n), { id: slug(name), name, kind: 'range', layer: 'ranges', ...only }))
  ];
}

/* ---------- western Europe ---------- */
const MICROSTATES = ['Andorra', 'Monaco', 'Liechtenstein', 'San Marino', 'Vatican'];
const nameOf = f => ({ 'Czech Republic': 'Czechia' }[f.props.NAME_EN] || f.props.NAME_EN);
const LEFT_OUT = ['Jersey', 'Guernsey', 'Isle of Man'];   // the crown dependencies are specks beside the countries a lesson asks
const EUROPE_SEAS = [['atlantic', 'Atlantic Ocean', 'North Atlantic Ocean', 'ocean'], ['north-sea', 'North Sea', 'North Sea'], ['baltic-sea', 'Baltic Sea', 'Baltic Sea'],
  ['mediterranean', 'Mediterranean Sea', 'Mediterranean Sea'], ['bay-of-biscay', 'Bay of Biscay', 'Bay of Biscay'], ['english-channel', 'English Channel', 'English Channel'],
  ['irish-sea', 'Irish Sea', 'Irish Sea'], ['adriatic', 'Adriatic Sea', 'Adriatic Sea'], ['tyrrhenian', 'Tyrrhenian Sea', 'Tyrrhenian Sea'], ['ionian', 'Ionian Sea', 'Ionian Sea'],
  ['balearic', 'Balearic Sea', 'Balearic Sea'], ['gulf-of-lion', 'Gulf of Lion', 'Golfe du Lion']];
const EUROPE_VIEW = { lon: [-11.5, 19.5], lat: [35.5, 59.5] };
const inView = (f, v) => f.polygons.some(p => p[0].some(([lon, lat]) => lon >= v.lon[0] && lon <= v.lon[1] && lat >= v.lat[0] && lat <= v.lat[1]));

async function europeSpecs(load) {
  const countries = (await load('countries50')).filter(f => inView(f, EUROPE_VIEW) && !LEFT_OUT.includes(f.props.NAME)), marine = await load('marine50'), ranges = await load('regions50'), pyr = await load('regions10');
  return [
    ...countries.map(f => area([f], { id: slug(nameOf(f)), name: nameOf(f), kind: 'country', layer: 'countries', dot: MICROSTATES.includes(f.props.NAME), optional: true })),
    ...EUROPE_SEAS.map(([id, name, ne, kind = 'sea']) => water(find(marine, 'name', ne), { id, name, kind, layer: 'marine' })),
    area(find(ranges, 'NAME', 'ALPS'), { id: 'alps', name: 'The Alps', kind: 'range', layer: 'ranges' }),
    area(find(pyr, 'NAME', 'PYRENEES'), { id: 'pyrenees', name: 'The Pyrenees', kind: 'range', layer: 'ranges' })
  ];
}

/* ---------- the list ---------- */
const frame = (fitted, extra) => ({ size: fitted.size, parts: fitted.parts, frames: fitted.frames, ...extra });
const world = singlePart(equalEarth(), { lon: [-180, 180], lat: [-90, 90] });
const europe = singlePart(laea(10, 50), EUROPE_VIEW);
const usa = albersUsa();

export const REGIONS = [
  { id: 'world', name: 'The world', ...frame(world), tol: 0.1, load: ['countries110', 'marine110'], specs: worldSpecs,
    land: ['continent'], draw: ['continent'], labelled: ['continent', 'ocean'] },
  { id: 'us', name: 'The United States', ...frame(usa), tol: 0.35, load: ['states50', 'countries50', 'marine50', 'lakes50', 'rivers50', 'regions50', 'regions10'], specs: usSpecs,
    land: ['state', 'country'], draw: ['country', 'state', 'lake', 'river'], labelled: ['state', 'lake', 'river', 'range', 'ocean', 'sea'],
    borders: { land: ['state', 'country'], water: ['ocean', 'sea', 'lake'], across: (a, b) => a.layer !== b.layer && (a.kind === 'state') !== (b.kind === 'state'),
      along: { eps: 8, minKm: 20 }, coast: { eps: 0.25, minKm: 15 } } },
  { id: 'europe-west', name: 'Europe, west', ...frame(europe), tol: 0.35, minVisible: 6, load: ['countries50', 'marine50', 'regions50', 'regions10'], specs: europeSpecs,
    land: ['country'], draw: ['country'], labelled: ['country', 'sea', 'ocean', 'range'],
    borders: { land: ['country'], water: ['ocean', 'sea'], across: () => false, along: { eps: 8, minKm: 20 }, coast: { eps: 0.2, minKm: 15 } } }
];
