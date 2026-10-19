// The big lakes: one rule for every country and province map. The water a place touches is its seas, its oceans and the big lakes that lie on it or against its shore (the
// Great Lakes, Lake Victoria, Lake Tanganyika, Lake Malawi), as the `us` map has always counted them for the states. A lake is big when its outline holds at least
// BIG_LAKE_KM2 square kilometres in Natural Earth's lakes layer; a smaller lake or a reservoir is a place's scenery, not its water, so a country whose only water is one
// (Rwanda on Lake Kivu, Chad on Lake Chad) is still landlocked. The Caspian is a sea in Natural Earth's marine layer and is listed with the seas of a part.
import { slug } from './specs.mjs';
import { ringArea } from './geo.mjs';

export const BIG_LAKE_KM2 = 15000;
const KM_PER_DEG = 111.195;

// an outline's area in square kilometres, from its degrees (a degree of longitude is shorter the farther from the equator)
const outlineKm2 = ring => Math.abs(ringArea(ring)) * KM_PER_DEG ** 2 * Math.cos(ring.reduce((n, p) => n + p[1], 0) / ring.length * Math.PI / 180);
const featureKm2 = f => f.polygons.reduce((n, polygon) => n + outlineKm2(polygon[0]), 0);

// the big lakes of a layer, as one entry for each name: [{ id, name, features }] (a name the layer gives twice, Lake Volta, is one lake of the size of its biggest piece)
export function bigLakes(lakes) {
  const byName = new Map();
  for (const f of lakes.filter(x => x.props.name)) byName.set(f.props.name, [...(byName.get(f.props.name) || []), f]);
  return [...byName].map(([name, features]) => ({ id: slug(name), name, features, km2: Math.max(...features.map(featureKm2)) })).filter(l => l.km2 >= BIG_LAKE_KM2);
}
