// Helpers a region's lists use to say what its places are. A spec is the raw material of one place:
//   { id, name, kind, layer, rings | lines, members?, dot?, line?, parts?, hidden?, optional?, label? }
// `rings` are longitude/latitude rings (outer rings and holes together: a tap is inside when it is inside an odd number of them), `members`
// build a place out of other specs' outlines (a continent out of its countries), `hidden` keeps a spec out of the file as a place of its own
// (its outline is still stored, for the places built from it), `parts` limits the projection parts it shows in (the insets of a map).
import { clipRing, bboxOf } from './geo.mjs';
import { coastLines } from './topology.mjs';

export const slug = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/['’.]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
export const ringsOf = feature => feature.polygons.flat();
export const find = (features, prop, value) => {
  const hits = features.filter(f => (Array.isArray(value) ? value : [value]).includes(f.props[prop]));
  if (!hits.length) throw new Error(`no feature with ${prop} = ${value}`);
  return hits;
};
export const area = (features, o) => ({ ...o, rings: features.flatMap(ringsOf) });
// water that holds other water (the Sargasso Sea inside the Atlantic): the outer outline only, so a tap anywhere in it counts
export const water = (features, o) => ({ ...o, rings: features.flatMap(f => f.polygons.map(p => p[0])) });
export const line = (features, o) => ({ ...o, line: true, lines: features.flatMap(f => f.lines) });
// a coast is the shore of some places (states, countries) along one water, found from their outlines: `owners` are the edges the layer shares (topology.mjs sharedEdges)
export const coast = (members, water, owners, eps, o) => ({ ...o, line: true, lines: coastLines(members, owners, water, eps) });

// Russia lies in two continents: its polygons west of the Urals (60° E) are Europe, the rest Asia
export function splitAtMeridian(feature, lon) {
  const west = [], east = [];
  for (const polygon of feature.polygons) {
    const box = bboxOf(polygon[0]);
    if (box[2] <= lon) west.push(polygon);
    else if (box[0] >= lon || box[2] <= -100) east.push(polygon);
    else {
      const cut = rect => polygon.map(r => clipRing(r, rect)).filter(r => r.length);
      const w = cut([-181, -91, lon, 91]), e = cut([lon, -91, 181, 91]);
      if (w.length) west.push(w);
      if (e.length) east.push(e);
    }
  }
  return { west: { ...feature, polygons: west }, east: { ...feature, polygons: east } };
}

/* ---------- the names a country goes by, and the places a window of countries is made of ---------- */
// Natural Earth's English names, with the few the app says another way
const COUNTRY_NAMES = { 'Czech Republic': 'Czechia', Turkey: 'Türkiye', 'Ivory Coast': "Côte d'Ivoire", 'East Timor': 'Timor-Leste', 'The Bahamas': 'Bahamas',
  'United States of America': 'United States', "People's Republic of China": 'China', 'The Gambia': 'Gambia' };
export const nameOf = f => COUNTRY_NAMES[f.props.NAME_EN] || f.props.NAME_EN;
// places Natural Earth draws as a country that the app counts as part of another: the polygons are joined to the one they belong to
export const JOINED = { Cyprus: ['N. Cyprus'], Somalia: ['Somaliland'] };
// features of the countries layer that are not places of a map (a speck of a dependency, a special region beside a country)
export const NEVER_DRAWN = ['Hong Kong', 'Macao', 'Aruba', 'Curaçao', 'Sint Maarten', 'Falkland Is.', 'Fr. S. Antarctic Lands', 'Antarctica', 'Åland', 'Br. Indian Ocean Ter.', 'Siachen Glacier', 'Jersey', 'Guernsey', 'Isle of Man', 'Faeroe Is.'];
export const polygonsIn = (feature, inFrame) => ({ ...feature, polygons: feature.polygons.filter(p => p[0].some(([lon, lat]) => inFrame(lon, lat))) });
