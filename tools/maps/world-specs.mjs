// The places of the world map: continents, oceans and the United Nations' big regions, built from Natural Earth's 110m countries and marine polygons.
import { slug, area, water, find, splitAtMeridian } from './specs.mjs';
import { worldCitySpecs } from './cities.mjs';
import { limited } from './limits.mjs';

const CONTINENTS = { Africa: 'Africa', Antarctica: 'Antarctica', Asia: 'Asia', Europe: 'Europe', 'North America': 'North America', Oceania: 'Oceania', 'South America': 'South America' };
// An ocean on the world map is its water with the seas of it that Natural Earth's 110m layer cuts out as polygons of their own, which would otherwise be water
// of no ocean: the Beaufort Sea is the Arctic's (S-23, limits.mjs), the Weddell and Ross seas the Southern Ocean's (the IHO's 2000 draft of S-23, which
// gives the Southern Ocean its limit at 60°S), the Labrador Sea the Atlantic's, the Gulf of Alaska and the Sea of Okhotsk the Pacific's. Hudson Bay and
// Baffin Bay are left as water of no ocean: S-23 gives them limits of their own and they are not asked.
const OCEANS = [['pacific', 'Pacific Ocean', ['North Pacific Ocean', 'South Pacific Ocean', 'Gulf of Alaska', 'Sea of Okhotsk']],
  ['atlantic', 'Atlantic Ocean', ['North Atlantic Ocean', 'South Atlantic Ocean', 'Labrador Sea']],
  ['indian', 'Indian Ocean', ['INDIAN OCEAN']], ['southern', 'Southern Ocean', ['SOUTHERN OCEAN', 'Weddell Sea', 'Ross Sea']], ['arctic', 'Arctic Ocean', ['Arctic Ocean', 'Beaufort Sea']]];
// the big regions are the United Nations' (Natural Earth's SUBREGION), with Russia's part east of the Urals as Northern Asia; South America is a
// continent and its own region, so it is only the continent
const REGION_NAMES = { 'Northern America': 'Northern America', 'Central America': 'Central America', Caribbean: 'The Caribbean',
  'Northern Europe': 'Northern Europe', 'Western Europe': 'Western Europe', 'Eastern Europe': 'Eastern Europe', 'Southern Europe': 'Southern Europe',
  'Northern Africa': 'Northern Africa', 'Western Africa': 'West Africa', 'Middle Africa': 'Central Africa', 'Eastern Africa': 'East Africa', 'Southern Africa': 'Southern Africa',
  'Western Asia': 'Western Asia', 'Central Asia': 'Central Asia', 'Southern Asia': 'South Asia', 'Eastern Asia': 'East Asia', 'South-Eastern Asia': 'Southeast Asia',
  'Australia and New Zealand': 'Australia and New Zealand', Melanesia: 'Melanesia', Micronesia: 'Micronesia', Polynesia: 'Polynesia', 'Northern Asia': 'Northern Asia' };

async function worldParts(load) {
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
  const oceans = OCEANS.map(([id, name, names]) => limited(id, water(find(marine, 'name', names), { id, name, kind: 'ocean', layer: 'marine' })));
  return { hidden, continents, oceans, regions };
}
// the world map's places: the countries (hidden), the continents, the oceans, the United Nations' regions and the cities of parts 31 and 32
export const worldSpecs = async load => { const p = await worldParts(load); return [...p.hidden, ...p.continents, ...p.oceans, ...p.regions, ...worldCitySpecs(await load('places10'))]; };
// the same without the regions: the base a map of the world's features (regions-world.mjs) is drawn over
export const worldBaseSpecs = async load => { const p = await worldParts(load); return [...p.hidden, ...p.continents, ...p.oceans]; };

