// What the International Hydrographic Organization's "Limits of Oceans and Seas" (S-23, 3rd edition, 1953, the edition in force) says about the water of a map, where Natural Earth's marine
// polygons do not follow it. The text of S-23 is read from the limits it gives each ocean ("excluding the seas it contains") and each sea.

// Marginal seas that S-23 gives to an ocean, by the id a map uses: the seas of the North Atlantic's western, northern and eastern limits (Caribbean Sea, Gulf of Mexico, Gulf of St. Lawrence, the Norwegian Sea,
// the North Sea, the Baltic with its gulfs, the Irish Sea, the English Channel, the Bay of Biscay) and the Gulf of Guinea of its southern limit; the seas of the North Pacific's western, northern and eastern limits
// (Philippine Sea, Japan Sea, Bering Sea, Gulf of California) and the Tasman, Coral and Solomon seas of the South Pacific's; the seas of the Indian Ocean's northern limit (Arabian Sea, Laccadive Sea, Bay of Bengal,
// Andaman Sea, Gulf of Aden, Gulf of Oman, Persian Gulf, Red Sea); the seas S-23 gives the Arctic (Barents, Beaufort). Where S-23 has no sea of its own for an area inside an ocean's limits (the Labrador Sea, the Mozambique
// Channel) the area is the ocean's. The Mediterranean Sea is not the Atlantic's: S-23 gives it a chapter of its own, with the Adriatic, Ionian, Aegean, Tyrrhenian and the others in it, and the Black Sea, Azov
// and Caspian are not an ocean's either. The seas of the East Indian Archipelago (Java, Banda, Celebes, Sulu, Timor, Arafura) are neither the Pacific's nor the Indian Ocean's in S-23.
// A map's sea carries `partOf`, the id of its ocean, when the map has that ocean as a place (pipeline.mjs).
export const PART_OF = {
  atlantic: ['caribbean-sea', 'gulf-of-mexico', 'gulf-of-saint-lawrence', 'labrador-sea', 'norwegian-sea', 'north-sea', 'baltic-sea', 'gulf-of-bothnia', 'gulf-of-finland', 'irish-sea', 'english-channel', 'bay-of-biscay', 'gulf-of-guinea'],
  pacific: ['philippine-sea', 'sea-of-japan', 'east-china-sea', 'yellow-sea', 'south-china-sea', 'bering-sea', 'gulf-of-california', 'tasman-sea', 'coral-sea', 'solomon-sea'],
  indian: ['arabian-sea', 'laccadive-sea', 'bay-of-bengal', 'andaman-sea', 'gulf-of-aden', 'gulf-of-oman', 'persian-gulf', 'red-sea', 'mozambique-channel'],
  arctic: ['barents-sea', 'beaufort-sea']
};
const PARENT = Object.fromEntries(Object.entries(PART_OF).flatMap(([ocean, seas]) => seas.map(sea => [sea, ocean])));
export const partOf = id => PARENT[id] ? { partOf: PARENT[id] } : {};

// Natural Earth's outline of the Adriatic runs on south past the limit S-23 gives it, the line from Cape Santa Maria di Leuca (Italy) to Cape Linguetta (Albania), to Corfu and the
// coast of Albania beyond the Karaburun peninsula, which are the Ionian's. Natural Earth's Indian Ocean runs on east, south of Australia, past the limit S-23 gives it there, the meridian of South East Cape
// in Tasmania (146°55'E) south to Antarctica, to the coasts of New Zealand, which are the South Pacific's. A sea or an ocean is cut at its S-23 limit: the part on the left of the line from the first point to the second is kept.
export const SEA_LIMITS = { adriatic: [[18.36, 39.8], [19.33, 40.43]], indian: [[146.92, -80], [146.92, -43.6]] };

const side = (a, b, p) => (b[0] - a[0]) * (p[1] - a[1]) - (b[1] - a[1]) * (p[0] - a[0]);
// a ring cut to the left of the line a-b (Sutherland-Hodgman)
function keepLeft(ring, a, b) {
  const out = [];
  ring.forEach((p, i) => {
    const q = ring[(i + 1) % ring.length], sp = side(a, b, p), sq = side(a, b, q);
    if (sp >= 0) out.push(p);
    if ((sp >= 0) !== (sq >= 0)) { const t = sp / (sp - sq); out.push([p[0] + (q[0] - p[0]) * t, p[1] + (q[1] - p[1]) * t, 0]); }
  });
  return out;
}
export const limited = (id, spec) => SEA_LIMITS[id] ? { ...spec, rings: spec.rings.map(r => keepLeft(r, ...SEA_LIMITS[id])).filter(r => r.length >= 3) } : spec;
