// A country's land neighbours and its coast, from the whole world's countries and not from the window of a map. A window cuts a country's borders off (Russia on the map of eastern
// Europe has no Norway, China or Mongolia beside it), so the borders are worked out once over every country of Natural Earth's layer: two countries are neighbours when they share an edge of
// their outlines, and an edge that any country shares is a border, never a coast. A neighbour that has no shape in a map's frame is still a neighbour: it is added as a place with no
// shape (`offMap`), named in the feedback and never tappable, as Russia's Arctic Ocean is (window.mjs `beyond`).
import { sharedEdges, neighborsFromEdges } from './topology.mjs';
import { slug, nameOf, NEVER_DRAWN, JOINED } from './specs.mjs';

// Natural Earth draws these two countries meeting at one point, the quadripoint at Kazungula, not along an edge, though Botswana and Zambia have a border there (the shortest of the world's,
// about 150 m, on the Zambezi). Namibia and Zimbabwe meet at the same point and have none.
export const POINT_BORDERS = [['Botswana', 'Zambia']];

const HOST = Object.fromEntries(Object.entries(JOINED).flatMap(([host, joined]) => joined.map(name => [name, host])));

// `specs` are the country specs of a map (their rings are the very arrays of the layer's features); `ignore(feature)` names a country the map has no place for because it is
// made of its divisions (the United States on the map of its states, Canada on the map of its provinces): a border with it is not a neighbour but is still a border.
// Returns { owners, neighbors: { id: [id] }, beyond: [{ id, name }] }: the edge owners, the neighbours of every spec, and the neighbours that are not specs.
export function worldBorders(countries, specs, { ignore = () => false } = {}) {
  const byName = Object.fromEntries(countries.map(f => [f.props.NAME, f])), ringOwner = new Map(specs.flatMap(s => (s.rings || []).map(r => [r, s.id])));
  const placeOf = f => byName[HOST[f.props.NAME]] || f;
  const counts = f => !NEVER_DRAWN.includes(f.props.NAME) && (f.props.TYPE !== 'Dependency' || f.polygons.flat().some(r => ringOwner.has(r)));
  // a country that has a place on the map is that place's polygons only: France's polygon in South America is not France's (it is French Guiana's, or no one's), so Brazil is not
  // France's neighbour; the polygons of a country with no place are the country's
  const shows = new Set(countries.filter(f => f.polygons.flat().some(r => ringOwner.has(r))).map(f => placeOf(f).props.NAME)), elsewhere = id => `${id}~`;
  const owned = new Map();
  for (const f of countries.filter(counts)) {
    const host = placeOf(f), hostId = slug(nameOf(host));
    for (const ring of f.polygons.flat()) {
      const id = ringOwner.get(ring) || (shows.has(host.props.NAME) ? elsewhere(hostId) : hostId);
      const entry = owned.get(id) || { id, kind: 'country', name: nameOf(host), ignored: ignore(host) || id !== hostId && !ringOwner.has(ring), rings: [] };
      owned.set(id, { ...entry, rings: [...entry.rings, ring] });
    }
  }
  const all = [...owned.values()], owners = sharedEdges(all, () => true), next = neighborsFromEdges(all, owners, () => false);
  for (const [a, b] of POINT_BORDERS) {
    const ids = [a, b].map(n => slug(nameOf(placeOf(byName[n])))).filter(id => owned.has(id));
    if (ids.length === 2) { next[ids[0]].add(ids[1]); next[ids[1]].add(ids[0]); }
  }
  const own = new Set(specs.map(s => s.id)), neighbors = {}, beyond = new Map();
  for (const id of own) {
    if (!next[id]) continue;
    neighbors[id] = [...next[id]].filter(n => !owned.get(n).ignored).sort();
    for (const n of neighbors[id]) if (!own.has(n)) beyond.set(n, owned.get(n).name);
  }
  return { owners, neighbors, beyond: [...beyond].map(([id, name]) => ({ id, name })).sort((x, y) => x.id.localeCompare(y.id)) };
}

// the specs of a map with each country spec given its neighbours of the whole world and the world's border edges, and the neighbours beyond the frame added as places with no shape
export function withWorldBorders(countries, specs, opts) {
  const ofCountry = s => s.kind === 'country' && s.layer === 'countries' && s.rings, { owners, neighbors, beyond } = worldBorders(countries, specs.filter(ofCountry), opts);
  return [...specs.map(s => ofCountry(s) ? { ...s, worldNeighbors: neighbors[s.id] || [], coastOwners: owners } : s),
    ...beyond.map(({ id, name }) => ({ id, name, kind: 'country', layer: 'countries', offMap: true }))];
}
