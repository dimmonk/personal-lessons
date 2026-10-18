// The cities of the `us` map (parts 8 to 11 of Geography): the big cities west and east of the Mississippi and the fifty state capitals, each a dot of the kind `city`
// at its Natural Earth populated place (ne_10m_populated_places_simple), found within the radius of a dot (3.7) and named clear of its neighbours (`lead: 'auto'`,
// pipeline.mjs). A city is one place, so a capital that is also a big city (Denver) is in both lists of a lesson and once on the map.
//   [Natural Earth's name, its state, the name the map says (when it is not Natural Earth's)]
import { slug } from './specs.mjs';

export const CITIES_WEST = [['Los Angeles', 'California'], ['San Francisco', 'California'], ['San Jose', 'California'], ['San Diego', 'California'], ['Sacramento', 'California'],
  ['Seattle', 'Washington'], ['Portland', 'Oregon'], ['Las Vegas', 'Nevada'], ['Phoenix', 'Arizona'], ['Denver', 'Colorado'], ['Salt Lake City', 'Utah'], ['Albuquerque', 'New Mexico'],
  ['Dallas', 'Texas', 'Dallas–Fort Worth'], ['Houston', 'Texas'], ['San Antonio', 'Texas'], ['Austin', 'Texas'], ['Oklahoma City', 'Oklahoma'], ['Kansas City', 'Missouri'],
  ['Omaha', 'Nebraska'], ['Minneapolis', 'Minnesota', 'Minneapolis–St. Paul'], ['St. Louis', 'Missouri'], ['New Orleans', 'Louisiana'], ['Anchorage', 'Alaska'], ['Honolulu', 'Hawaii']];
export const CITIES_EAST = [['Chicago', 'Illinois'], ['Milwaukee', 'Wisconsin'], ['Detroit', 'Michigan'], ['Indianapolis', 'Indiana'], ['Columbus', 'Ohio'], ['Cleveland', 'Ohio'],
  ['Cincinnati', 'Ohio'], ['Pittsburgh', 'Pennsylvania'], ['Nashville', 'Tennessee'], ['Memphis', 'Tennessee'], ['Atlanta', 'Georgia'], ['Charlotte', 'North Carolina'],
  ['Raleigh', 'North Carolina'], ['Miami', 'Florida'], ['Orlando', 'Florida'], ['Tampa', 'Florida'], ['Jacksonville', 'Florida'], ['Washington, D.C.', 'District of Columbia'],
  ['Baltimore', 'Maryland'], ['Philadelphia', 'Pennsylvania'], ['New York', 'New York', 'New York City'], ['Boston', 'Massachusetts'], ['Buffalo', 'New York']];

// the capitals of a part: the 25 of the West and the Midwest, the 25 of the South and the Northeast (a capital that is also a big city is in the group of its list first)
const WEST_MIDWEST = ['Alaska', 'Arizona', 'California', 'Colorado', 'Hawaii', 'Idaho', 'Montana', 'Nevada', 'New Mexico', 'Oregon', 'Utah', 'Washington', 'Wyoming',
  'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Michigan', 'Minnesota', 'Missouri', 'Nebraska', 'North Dakota', 'Ohio', 'South Dakota', 'Wisconsin'];
const tidy = s => s.replace(/\s+/g, ' ').trim();
const PARTS = { Alaska: 'alaska', Hawaii: 'hawaii' };   // the insets of the map; every other state is on the lower 48
// the id of a city: its name, but not a state's (New York, Washington): those are the city's own words
const IDS = { 'New York City': 'new-york-city', 'Washington, D.C.': 'washington-dc' };

export function citySpecs(places) {
  const us = places.filter(f => f.props.adm0_a3 === 'USA');
  const at = (name, state) => {
    const hit = us.find(f => tidy(f.props.name) === name && f.props.adm1name === state);
    if (!hit) throw new Error(`cities: no populated place ${name}, ${state}`);
    return hit;
  };
  const capitals = us.filter(f => f.props.featurecla === 'Admin-1 capital').map(f => [tidy(f.props.name), f.props.adm1name]);
  if (capitals.length !== 50) throw new Error(`cities: ${capitals.length} state capitals in the data, not 50`);
  const isCapital = (n, s) => capitals.some(c => c[0] === n && c[1] === s), listed = (n, s) => [...CITIES_WEST, ...CITIES_EAST].some(c => c[0] === n && c[1] === s);
  const rows = [...CITIES_WEST.map(c => [c, 'west']), ...CITIES_EAST.map(c => [c, 'east']), ...capitals.filter(c => !listed(...c)).map(c => [c, null])];
  return rows.map(([[ne, state, shown], list]) => {
    const name = shown || ne, groups = [list, isCapital(ne, state) ? (WEST_MIDWEST.includes(state) ? 'capitals-west-midwest' : 'capitals-south-northeast') : null].filter(Boolean);
    return { id: IDS[name] || slug(name), name, kind: 'city', layer: 'cities', rings: [], point: at(ne, state).point, dot: true, lead: 'auto', groups, parts: [PARTS[state] || 'lower48'] };
  });
}
