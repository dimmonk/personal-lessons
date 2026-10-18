// Where the map data comes from: Natural Earth (public domain), the GeoJSON of the nvkelso/natural-earth-vector repository at a fixed tag.
// Each layer is fetched once into tools/maps/.cache/<tag>/ (ignored by git) and read from there on every later build, so a build is the same
// from the same tag and needs no network after the first. Nothing is fetched when the app runs: the app ships only what the build wrote.
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';

export const NE_TAG = 'v5.1.2';
const BASE = `https://raw.githubusercontent.com/nvkelso/natural-earth-vector/${NE_TAG}/geojson/`;
const CACHE = new URL(`./.cache/${NE_TAG}/`, import.meta.url);

// the layers a region may use, by the name a region's lists give them
export const LAYERS = {
  countries110: 'ne_110m_admin_0_countries', countries50: 'ne_50m_admin_0_countries',
  states50: 'ne_50m_admin_1_states_provinces',
  marine110: 'ne_110m_geography_marine_polys', marine50: 'ne_50m_geography_marine_polys',
  lakes50: 'ne_50m_lakes', rivers50: 'ne_50m_rivers_lake_centerlines',
  regions50: 'ne_50m_geography_regions_polys', regions10: 'ne_10m_geography_regions_polys',
  marine10: 'ne_10m_geography_marine_polys', places10: 'ne_10m_populated_places_simple'
};

async function fetchLayer(file) {
  const target = new URL(`${file}.geojson`, CACHE);
  if (existsSync(target)) return readFile(target, 'utf8');
  const response = await fetch(`${BASE}${file}.geojson`);
  if (!response.ok) throw new Error(`Natural Earth ${NE_TAG}: ${file}.geojson answered ${response.status}`);
  const text = await response.text();
  await mkdir(CACHE, { recursive: true });
  await writeFile(target, text);
  return text;
}

// A ring of GeoJSON without its repeated last point, as [lon, lat, pin]
const ringOf = coords => {
  const ring = coords.map(([lon, lat]) => [lon, lat, 0]);
  const last = ring[ring.length - 1], first = ring[0];
  return last[0] === first[0] && last[1] === first[1] ? ring.slice(0, -1) : ring;
};
// polygons: [[outer, ...holes]]; lines: [[point, ...]]; point: [lon, lat] (a populated place)
function featureOf(f) {
  const g = f.geometry, props = f.properties || {};
  if (!g) return { props, polygons: [], lines: [] };
  if (g.type === 'Point') return { props, polygons: [], lines: [], point: g.coordinates.slice(0, 2) };
  if (g.type === 'Polygon') return { props, polygons: [g.coordinates.map(ringOf)], lines: [] };
  if (g.type === 'MultiPolygon') return { props, polygons: g.coordinates.map(p => p.map(ringOf)), lines: [] };
  if (g.type === 'LineString') return { props, polygons: [], lines: [g.coordinates.map(([lon, lat]) => [lon, lat, 0])] };
  if (g.type === 'MultiLineString') return { props, polygons: [], lines: g.coordinates.map(l => l.map(([lon, lat]) => [lon, lat, 0])) };
  throw new Error(`geometry ${g.type} is not read`);
}

export async function loadLayer(name) {
  if (!LAYERS[name]) throw new Error(`no layer called ${name}`);
  return JSON.parse(await fetchLayer(LAYERS[name])).features.map(featureOf);
}
export const sourceNote = names => `Natural Earth ${NE_TAG} (public domain): ${names.map(n => LAYERS[n].replace(/^ne_/, '')).join(', ')}`;
