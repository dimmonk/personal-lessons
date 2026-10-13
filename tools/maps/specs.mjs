// Helpers a region's lists use to say what its places are. A spec is the raw material of one place:
//   { id, name, kind, layer, rings | lines, members?, dot?, line?, parts?, hidden?, optional?, label? }
// `rings` are longitude/latitude rings (outer rings and holes together: a tap is inside when it is inside an odd number of them), `members`
// build a place out of other specs' outlines (a continent out of its countries), `hidden` keeps a spec out of the file as a place of its own
// (its outline is still stored, for the places built from it), `parts` limits the projection parts it shows in (the insets of a map).
import { clipRing, bboxOf } from './geo.mjs';

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
