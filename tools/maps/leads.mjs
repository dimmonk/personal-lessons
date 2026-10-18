// Where the name of a dot stands. A spec that says `lead: 'auto'` (a city, a small island state) has its name set clear of the others on a phone's map (about 360 pixels
// across) looked at in panels, zoomed 3 times (as the lessons show a crowded region, 3.9): above the dot when that is clear, else the pixels, right and down, with the least overlap. A lesson shows one group of dots at a time (the cities west
// of the Mississippi, a part's capitals), so a spec names its `groups` and a name only has to be clear of the dots and names of its own group; a dot in two groups keeps
// the lead it was given in the first. A city may lie over its state's name (a name over land is how a map names a city); every other name is kept clear of.
export const AUTO_LEAD = 'auto';
const PHONE_PX = 360, LOOK_ZOOM = 3, GLYPH_PX = 6.8, NAME_PAD = 6, NAME_H = 15, DOT_BOX = 12, LEAD_STEPS = [24, 40, 56], ABOVE = [0, -11];
const OPTIONS = [ABOVE, ...LEAD_STEPS.flatMap(d => [[d, 0], [-d, 0], [d, -d * 0.7], [-d, -d * 0.7], [d, d * 0.7], [-d, d * 0.7], [0, -d], [0, d]])];
const overlap = (a, b) => Math.max(0, Math.min(a[2], b[2]) - Math.max(a[0], b[0])) * Math.max(0, Math.min(a[3], b[3]) - Math.max(a[1], b[1]));

export function assignLeads(R, places) {
  const U = R.size[0] / (PHONE_PX * LOOK_ZOOM), toPx = v => v / U, [width, height] = R.size.map(toPx);
  const nameBox = (p, lead) => {
    const w = p.name.length * GLYPH_PX + NAME_PAD, [dx, dy] = lead, x = toPx(p.at[0]) + dx, y = toPx(p.at[1]) + dy, x0 = dx > 0 ? x + 2 : dx < 0 ? x - 2 - w : x - w / 2;
    return [x0, y - NAME_H / 2, x0 + w, y + NAME_H / 2];
  };
  const dotBox = p => { const x = toPx(p.dot[0] / 10), y = toPx(p.dot[1] / 10); return [x - DOT_BOX / 2, y - DOT_BOX / 2, x + DOT_BOX / 2, y + DOT_BOX / 2]; };
  const outside = b => Math.max(0, -b[0]) + Math.max(0, -b[1]) + Math.max(0, b[2] - width) + Math.max(0, b[3] - height);
  const auto = ({ place, spec }) => spec.lead === AUTO_LEAD && place.dot && place.at;
  const named = places.filter(x => x.place.at && R.labelled.includes(x.place.kind) && !auto(x));
  const fixedBox = ({ place }) => nameBox(place, place.lead || [0, place.dot ? ABOVE[1] : 0]);
  const asked = places.filter(auto), groups = [...new Set(asked.flatMap(x => x.spec.groups || [null]))];
  const done = new Map();
  for (const group of groups) {
    const members = asked.filter(x => (x.spec.groups || [null]).includes(group));
    const keepClear = members.some(x => x.place.kind === 'city') ? named.filter(x => !R.land.includes(x.place.kind)) : named;
    const taken = keepClear.map(fixedBox), dots = [...new Map([...places.filter(x => x.place.dot && !auto(x)), ...members].map(x => [x.place, dotBox(x.place)]))];
    for (const x of members) if (done.has(x.place)) taken.push(nameBox(x.place, done.get(x.place)));
    for (const x of members.filter(m => !done.has(m.place))) {
      const cost = lead => { const b = nameBox(x.place, lead); return [...taken, ...dots.filter(([p]) => p !== x.place).map(([, box]) => box)].reduce((n, o) => n + overlap(b, o), 0) + outside(b) * 40 + (lead === ABOVE ? 0 : 1); };
      const best = OPTIONS.reduce((pick, o) => { const c = cost(o); return c < pick.cost - 1e-9 ? { lead: o, cost: c } : pick; }, { lead: ABOVE, cost: cost(ABOVE) }).lead;
      done.set(x.place, best.map(Math.round));
      taken.push(nameBox(x.place, best));
    }
  }
  for (const [place, lead] of done) if (lead[0] !== ABOVE[0] || lead[1] !== ABOVE[1]) place.lead = lead; else delete place.lead;
}
