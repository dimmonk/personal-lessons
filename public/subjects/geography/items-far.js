// Geography, parts 31 to 33: how far apart two places are, a place never heard of placed from a story, and the traps of north and east. The items of part 31 (a pair of cities and its two
// bands), of part 32 (the story places and the trap pairs) and the story places and pairs that part 33 mixes, all made from the tables below, so no distance, direction or region line is
// written twice. Each id says where it is used: `far-us-practice-`, `far-world-practice-`, `far-us-check-`, `far-world-check-` (part 31), `story-practice-`, `story-check-`, `trap-` (part 32),
// `mixed-set-`, `mixed-check-` (part 33) and `w-` for the case shown done; the lessons take their lists by these prefixes, in the order of the tables.
// Design record: docs/subjects/geography/design.md, blocks l31, l32, l33. Research: docs/research/knowing-where-places-are.md G4 and G5 (the traps), G7 (the bands), G8 (the region first).
(() => {
  const SUBJECT = FC.get('geography');
  const WORLD_GENS = ['g-world-big', 'g-world-parts-west', 'g-world-parts-east'];
  const fail = message => { throw new Error(`items-far: ${message}`); };

  /* ---------- the cities: where they are, and how far apart ---------- */
  // Longitude and latitude in degrees (east and north positive) of the cities these parts use, from Natural Earth 5.1.2 (public domain), ne_10m_populated_places_simple, rounded to
  // two places: the same points the dots of the maps `us` and `world` are drawn at (tools/maps/cities.mjs), so a city of both maps is one entry here.
  const LONLAT = {
    'san-francisco': [-122.4, 37.78], 'los-angeles': [-118.23, 34.05], chicago: [-87.64, 41.85], milwaukee: [-87.92, 43.03],
    'san-diego': [-117.15, 32.72], 'new-york-city': [-74, 40.72], boston: [-71.07, 42.33], denver: [-104.99, 39.74], 'salt-lake-city': [-111.93, 40.78],
    atlanta: [-84.37, 33.74], miami: [-80.23, 25.79], seattle: [-122.32, 47.6], detroit: [-83.05, 42.33], cleveland: [-81.7, 41.47],
    'minneapolis-st-paul': [-93.25, 44.98], phoenix: [-112.07, 33.45], portland: [-122.68, 45.52], houston: [-95.35, 29.74],
    'new-orleans': [-90.09, 29.97], austin: [-97.74, 30.27], 'san-antonio': [-98.49, 29.42], 'washington-dc': [-77.01, 38.9],
    'dallas-fort-worth': [-96.79, 32.77], philadelphia: [-75.18, 39.95], reno: [-119.82, 39.53], toronto: [-79.39, 43.66], london: [-0.12, 51.5],
    paris: [2.35, 48.86], madrid: [-3.69, 40.4], rome: [12.48, 41.9], berlin: [13.4, 52.52], moscow: [37.61, 55.75], istanbul: [28.97, 41.02],
    cairo: [31.25, 30.05], lagos: [3.39, 6.45], nairobi: [36.81, -1.28], johannesburg: [28.03, -26.17], 'cape-town': [18.43, -33.92],
    dubai: [55.29, 25.21], beijing: [116.39, 39.9], tokyo: [139.75, 35.69], sydney: [151.21, -33.87], auckland: [174.76, -36.85],
    'buenos-aires': [-58.43, -34.61], santiago: [-70.65, -33.44], lima: [-77.05, -12.05], bogota: [-74.09, 4.6], 'mexico-city': [-99.13, 19.44]
  };
  const at = id => LONLAT[id] || fail(`no longitude and latitude for ${id}`);
  // The great-circle (straight-line, over the Earth's surface) distance by the haversine formula: with latitudes p1, p2 and longitudes l1, l2 in radians,
  // a = sin^2((p2 - p1) / 2) + cos(p1) cos(p2) sin^2((l2 - l1) / 2) and d = 2 R asin(sqrt(a)), R the Earth's mean radius, 6371.0 km = 3958.8 miles (the IUGG mean radius).
  const EARTH_RADIUS_MILES = 3958.8;
  const radians = degrees => degrees * Math.PI / 180;
  function greatCircleMiles(a, b) {
    const [l1, p1] = at(a).map(radians), [l2, p2] = at(b).map(radians);
    const h = Math.sin((p2 - p1) / 2) ** 2 + Math.cos(p1) * Math.cos(p2) * Math.sin((l2 - l1) / 2) ** 2;
    return 2 * EARTH_RADIUS_MILES * Math.asin(Math.sqrt(h));
  }
  // The six bands (lists.distance and lists.travel in subject.js, one entry each, in order): their edges in straight-line miles, and the lesson's rule of thumb for the time. A drive is
  // about 60 miles an hour; a flight is about 500 miles an hour plus an hour on the ground and in the climb. So the edges 500, 1,500, 3,000 and 6,000 miles are flights of 2, 4, 7 and 13
  // hours, and 150 and 500 miles are drives of 2.5 and 8.3 hours ("up to 3" and "3 to 9" with a bend in the road).
  const EDGES = [150, 500, 1500, 3000, 6000];
  const DRIVE_MPH = 60, FLIGHT_MPH = 500, GROUND_HOURS = 1;
  const group = n => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const lists = SUBJECT.meta.lists;
  if (lists.distance.length !== EDGES.length + 1 || lists.travel.length !== EDGES.length + 1) fail('lists.distance and lists.travel need one entry more than there are edges');
  EDGES.forEach((edge, i) => { if (!lists.distance[i].text.includes(group(edge)) && !lists.distance[i + 1].text.includes(group(edge))) fail(`lists.distance does not hold the edge ${edge}`); });
  const bandIndex = miles => EDGES.filter(edge => miles >= edge).length;
  const roundTo10 = n => Math.round(n / 10) * 10;
  const miles10 = miles => group(roundTo10(miles));
  const hours = n => String(Math.round(n * 10) / 10);
  const placeIn = (region, id) => FC.maps[region].places.find(p => p.id === id) || fail(`map ${region} has no place ${id}`);
  const nameOf = id => (FC.maps.world.places.find(p => p.id === id) || FC.maps.us.places.find(p => p.id === id) || fail(`no city ${id}`)).name;
  // The part of a map a pair is shown on: its middle, and the zoom at which the pair spans about a third of the width (or of the height), leaving room for the names, from the whole map to 8 times.
  function viewOf(region, a, b) {
    const map = FC.maps[region], [w, h] = map.size, dot = id => placeIn(region, id).dot.map(v => v / map.q);
    const [x1, y1] = dot(a), [x2, y2] = dot(b), spread = Math.max(Math.abs(x1 - x2) / w, Math.abs(y1 - y2) / h, 0.001);
    const k = Math.min(8, Math.round(0.36 / spread * 10) / 10);
    return k < 1.3 ? null : [Math.round((x1 + x2) / 2), Math.round((y1 + y2) / 2), k];
  }
  const cityMap = (region, ids) => { const view = viewOf(region, ids[0], ids[1]); return { kind: 'map', region, lit: ids, ...(view ? { view } : {}) }; };
  // a wrong band is named by its side: nearer than the pair is, or farther
  const slipsOf = (entries, right) => Object.fromEntries(entries.filter(x => x.id !== right).map((x, i, rest) => [x.id, entries.findIndex(y => y.id === x.id) < entries.findIndex(y => y.id === right) ? 'band-too-near' : 'band-too-far']));

  /* ---------- part 31: a pair of cities, two bands ---------- */
  function travelLine(miles, band) {
    const m = miles10(miles), drive = `By road: ${m} miles at ${DRIVE_MPH} miles an hour is about ${hours(miles / DRIVE_MPH)} hours`;
    const fly = `By air: ${GROUND_HOURS} hour on the ground and in the climb, plus ${m} miles at ${FLIGHT_MPH} miles an hour, is about ${hours(GROUND_HOURS + miles / FLIGHT_MPH)} hours`;
    return band === 0 ? `${drive}, so a drive of up to 3 hours.` : band === 1 ? `${drive}. ${fly}, a short flight.` : `${fly}.`;
  }
  function pairItem(id, [a, b, region, crossing], steps) {
    const miles = greatCircleMiles(a, b), band = bandIndex(miles), from = nameOf(a), to = nameOf(b);
    const rightDistance = lists.distance[band].id, rightTravel = lists.travel[band].id;
    return { id, strand: id.startsWith('mixed') ? 'world-mixed' : 'how-far', facets: {},
      blocks: [{ kind: 'prose', text: `How far is ${from} from ${to}?` }, cityMap(region, [a, b])],
      asks: [
        { id: 'miles', kind: 'choose', prompt: 'About how far apart are they, in a straight line?', from: 'distance', right: rightDistance, slips: slipsOf(lists.distance, rightDistance) },
        { id: 'time', kind: 'choose', prompt: 'How would you get from one to the other, and how long would it take?', from: 'travel', right: rightTravel, slips: slipsOf(lists.travel, rightTravel) }],
      reason: [`${from} to ${to} is about ${miles10(miles)} miles in a straight line, which is the band ${lists.distance[band].text.toLowerCase()}.`, travelLine(miles, band),
        crossing ? `The straight line crosses ${crossing}.` : ''].filter(Boolean).join(' '),
      ...(steps ? { steps: steps({ from, to, miles, band }) } : {}) };
  }
  // The pairs: [city, city, the map they are lit on, what the straight line crosses (only where it is an ocean)]. A pair is asked once in the subject (refused below).
  const on = (region, pairs) => pairs.map(([a, b, crossing]) => [a, b, region, crossing]);
  const PAIRS = {
    'us-practice': on('us', [['chicago', 'milwaukee'], ['new-york-city', 'boston'], ['denver', 'salt-lake-city'], ['atlanta', 'miami'], ['new-york-city', 'chicago'], ['chicago', 'denver'],
      ['seattle', 'atlanta'], ['los-angeles', 'new-york-city']]),
    'world-practice': on('world', [['toronto', 'new-york-city'], ['berlin', 'moscow'], ['london', 'cairo'], ['new-york-city', 'mexico-city'], ['madrid', 'lagos'],
      ['new-york-city', 'london', 'the Atlantic Ocean'], ['tokyo', 'sydney', 'the Pacific Ocean'], ['london', 'sydney']]),
    'us-check': on('us', [['detroit', 'cleveland'], ['minneapolis-st-paul', 'chicago'], ['phoenix', 'denver'], ['portland', 'chicago'], ['seattle', 'boston']]),
    'world-check': on('world', [['toronto', 'chicago'], ['buenos-aires', 'santiago'], ['nairobi', 'cairo'], ['dubai', 'london'], ['auckland', 'los-angeles', 'the Pacific Ocean']]),
    // the questions the review draws on after the lessons (V77): pairs no lesson asks
    bank: [['los-angeles', 'san-diego', 'us'], ['boston', 'miami', 'us'], ['cairo', 'istanbul', 'world'], ['new-york-city', 'tokyo', 'world']],
    'mixed-bank': [['chicago', 'atlanta', 'us']],
    'mixed-set': [['houston', 'new-orleans', 'us'], ['johannesburg', 'nairobi', 'world']],
    'mixed-check': [['los-angeles', 'miami', 'us'], ['moscow', 'beijing', 'world'], ['cape-town', 'sydney', 'world', 'the Indian Ocean']]
  };
  const WORKED_PAIR = ['san-francisco', 'los-angeles', 'us'];
  // the pairs the worked case measures against (its second step prints them), none of them asked
  const ANCHORS = [['austin', 'san-antonio'], ['washington-dc', 'new-york-city'], ['dallas-fort-worth', 'chicago'], ['los-angeles', 'chicago'], ['new-york-city', 'paris'], ['los-angeles', 'sydney']];
  const key = ([a, b]) => [a, b].sort().join('|');
  const everyPair = [...Object.values(PAIRS).flat(), WORKED_PAIR];
  if (new Set(everyPair.map(key)).size !== everyPair.length) fail('a pair of cities is asked twice');
  ANCHORS.forEach(p => { if (everyPair.some(q => key(q) === key(p))) fail(`the anchor ${key(p)} is also a pair that is asked`); });
  // each pair lies at least 8 percent from a band edge, so no answer rests on a rounding
  everyPair.forEach(([a, b]) => { const m = greatCircleMiles(a, b); if (EDGES.some(edge => Math.abs(m - edge) < edge * 0.08)) fail(`${a} to ${b} (${Math.round(m)} miles) is within 8 percent of a band edge`); });

  const anchorsText = ANCHORS.map(([a, b]) => `${nameOf(a)} to ${nameOf(b)} about ${miles10(greatCircleMiles(a, b))}`).join('; ');
  const workedPairSteps = ({ from, to, miles, band }) => [
    { id: 'find', does: 'Find both cities on the map.', working: `${from} and ${to} are both lit and named. Look at the pair, not at each city alone.` },
    { id: 'anchor', does: 'Compare the pair with pairs you know.', working: `Pairs to measure against, in straight-line miles: ${anchorsText}. ${from} to ${to} is farther apart than ${nameOf(ANCHORS[0][0])} to ${nameOf(ANCHORS[0][1])} and than ${nameOf(ANCHORS[1][0])} to ${nameOf(ANCHORS[1][1])}, and much nearer than ${nameOf(ANCHORS[2][0])} to ${nameOf(ANCHORS[2][1])}.` },
    { id: 'band', does: 'Pick the distance band.', working: `The straight line is about ${miles10(miles)} miles: ${lists.distance[band].text.toLowerCase()}.`, ask: 'miles' },
    { id: 'travel', does: 'Turn it into a trip.', working: `${travelLine(miles, band)} So: ${lists.travel[band].text.toLowerCase()}.`, ask: 'time' }];

  /* ---------- part 32: a place never heard of, from the clues a story gives ---------- */
  const regionOf = id => { for (const gen of WORLD_GENS) { const p = SUBJECT.gens[gen].places.list.find(x => x.id === id); if (p) return p; } return fail(`no world region ${id}`); };
  // each: [id, name, the story's words, the deciding words (a part of them), what they name and where it is, the region of the map `world` it is in, the unit is plural]. The region of each
  // was found by a tap at the place's longitude and latitude on the world map (Natural Earth populated places), and the country's region is the United Nations' (the map's own).
  const STORIES = {
    practice: [['tromso', 'Tromsø', 'a town in the north of Norway, inside the Arctic Circle', 'the north of Norway', 'Norway', 'northern-europe'],
      ['timbuktu', 'Timbuktu', 'a town in Mali, on the southern edge of the Sahara', 'Mali, on the southern edge of the Sahara', 'Mali', 'west-africa'],
      ['ushuaia', 'Ushuaia', 'a port at the southern tip of Argentina', 'the southern tip of Argentina', 'Argentina', 'south-america'],
      ['mombasa', 'Mombasa', "Kenya's main port, on the Indian Ocean coast", "Kenya's main port, on the Indian Ocean coast", 'Kenya', 'east-africa'],
      ['fairbanks', 'Fairbanks', 'a town in the interior of Alaska', 'Alaska', 'Alaska, a state of the United States,', 'northern-america'],
      ['kyoto', 'Kyoto', 'a city on Honshu, the biggest island of Japan', 'Honshu, the biggest island of Japan', 'Japan', 'east-asia'],
      ['chiang-mai', 'Chiang Mai', 'a city in the north of Thailand', 'the north of Thailand', 'Thailand', 'southeast-asia'],
      ['perth', 'Perth', 'a city on the Indian Ocean coast of Australia', 'the Indian Ocean coast of Australia', 'Australia', 'australia-and-new-zealand'],
      ['marrakesh', 'Marrakesh', 'a city in Morocco, at the foot of the Atlas Mountains', 'Morocco, at the foot of the Atlas Mountains', 'Morocco', 'northern-africa'],
      ['punjab', 'Punjab', 'a farming region shared by India and Pakistan', 'India and Pakistan', 'India and Pakistan', 'south-asia', true]],
    check: [['lviv', 'Lviv', 'a city in the west of Ukraine, near the Polish border', 'the west of Ukraine', 'Ukraine', 'eastern-europe'],
      ['samarkand', 'Samarkand', 'a city in Uzbekistan, near the border with Tajikistan', 'Uzbekistan', 'Uzbekistan', 'central-asia'],
      ['basra', 'Basra', 'a port city in the far south of Iraq, near the Persian Gulf', 'the far south of Iraq, near the Persian Gulf', 'Iraq', 'western-asia'],
      ['bavaria', 'Bavaria', 'the biggest state of Germany, in the south, next to Austria', 'the biggest state of Germany', 'Germany', 'western-europe'],
      ['port-moresby', 'Port Moresby', 'the capital of Papua New Guinea, on the south coast of the island of New Guinea', 'the capital of Papua New Guinea', 'Papua New Guinea', 'melanesia'],
      ['vladivostok', 'Vladivostok', 'a Russian port on the Pacific, near the borders of China and North Korea', 'a Russian port on the Pacific', 'Russia east of the Ural Mountains', 'northern-asia'],
      ['windhoek', 'Windhoek', 'the capital of Namibia, in the middle of the country', 'the capital of Namibia', 'Namibia', 'southern-africa'],
      ['lubumbashi', 'Lubumbashi', 'a city in the south-east of the Democratic Republic of the Congo, near the Zambian border', 'the Democratic Republic of the Congo', 'The Democratic Republic of the Congo', 'central-africa'],
      ['oaxaca', 'Oaxaca', 'a city in the south of Mexico', 'the south of Mexico', 'Mexico', 'central-america'],
      ['kingston', 'Kingston', 'the capital of Jamaica, an island south of Cuba', 'the capital of Jamaica', 'Jamaica', 'the-caribbean']],
    // the questions the review draws on after the lessons (V77): story places no lesson asks
    bank: [['santo-domingo', 'Santo Domingo', 'the capital of the Dominican Republic, on the south coast of the island of Hispaniola', 'the capital of the Dominican Republic', 'The Dominican Republic', 'the-caribbean'],
      ['lahore', 'Lahore', 'a city in Pakistan, near the border with India', 'Pakistan, near the border with India', 'Pakistan', 'south-asia'],
      ['antananarivo', 'Antananarivo', 'the capital of Madagascar, an island off the east coast of Africa', 'the capital of Madagascar', 'Madagascar', 'east-africa']],
    'mixed-bank': [['ulaanbaatar', 'Ulaanbaatar', 'the capital of Mongolia, between Russia and China', 'the capital of Mongolia', 'Mongolia', 'east-asia'],
      ['akureyri', 'Akureyri', 'a town in the north of Iceland, near the Arctic Circle', 'the north of Iceland', 'Iceland', 'northern-europe']],
    'mixed-set': [['hanoi', 'Hanoi', 'the capital of Vietnam, in the north of the country', 'the capital of Vietnam', 'Vietnam', 'southeast-asia'],
      ['dakar', 'Dakar', 'the capital of Senegal, on the Atlantic coast', 'the capital of Senegal, on the Atlantic coast', 'Senegal', 'west-africa']],
    'mixed-check': [['christchurch', 'Christchurch', 'a city on the east coast of the South Island of New Zealand', 'the South Island of New Zealand', 'New Zealand', 'australia-and-new-zealand'],
      ['tigray', 'Tigray', 'a region in the north of Ethiopia, next to Eritrea', 'the north of Ethiopia', 'Ethiopia', 'east-africa'],
      ['halifax', 'Halifax', "the capital of Nova Scotia, on Canada's Atlantic coast", "Canada's Atlantic coast", 'Nova Scotia, a province of Canada,', 'northern-america']]
  };
  const WORKED_STORY = ['dubrovnik', 'Dubrovnik', 'a port on the Adriatic coast of Croatia', 'the Adriatic coast of Croatia', 'Croatia', 'southern-europe'];
  function storyItem(id, [, name, words, clue, unit, regionId, plural], steps) {
    const region = regionOf(regionId);
    if (!words.includes(clue.replace(/^the /, ''))) fail(`the deciding words of ${name} are not in its story`);
    return { id, strand: id.startsWith('mixed') ? 'world-mixed' : 'never-heard', facets: {},
      blocks: [{ kind: 'prose', text: `A story gives ${name} like this: ${words}.` }],
      asks: [{ id: 'where', kind: 'place', prompt: 'Tap the part of the world where it is.', map: 'world', right: regionId }],
      reason: `The deciding words are "${clue}". ${unit} ${plural ? 'are' : 'is'} in ${region.name}. ${region.reason}`,
      ...(steps ? { steps } : {}) };
  }
  const workedStorySteps = [
    { id: 'clue', does: 'Find the words that place it.', working: 'The story gives Dubrovnik as "a port on the Adriatic coast of Croatia". The name tells you nothing; "Croatia" and "the Adriatic coast" do.' },
    { id: 'unit', does: 'Say where that country, state or coast is.', working: 'Croatia is a country of the Balkans, in the south-east of Europe, across the Adriatic Sea from Italy.' },
    { id: 'region', does: 'Find the part of the world that holds it.', working: 'The Balkans are the south of Europe, so the part is Southern Europe. Tap Southern Europe.', ask: 'where' }];

  /* ---------- part 32: the traps ---------- */
  // Two places named, with no map: north or south of the first, east or west of it. The answers are read off the longitudes and latitudes above (east and north larger, the longitude the
  // short way round), and a pair is refused if either answer rests on less than a degree. `unit` is the larger unit that misleads (G4: people judge two places by the units that hold them;
  // G5: a remembered map is straightened, South America sitting straight below North America and Europe level with the United States; Rome and Philadelphia, and Santiago and New York, are
  // the paper's own pairs); `trap` is the answer that unit gets wrong.
  const TRAPS = [['reno', 'los-angeles', 'Nevada lies east of California', 'ew'], ['rome', 'philadelphia', 'Europe is often pictured level with the United States, or below it', 'ns'],
    ['santiago', 'new-york-city', 'South America is often pictured straight below North America', 'ew'], ['lima', 'miami', 'South America is often pictured straight below North America', 'ew'],
    ['paris', 'seattle', 'Europe is often pictured level with the United States', 'ns'], ['buenos-aires', 'toronto', 'South America is often pictured straight below North America', 'ew'],
    ['bogota', 'mexico-city', 'South America is often pictured straight below North America', 'ew'], ['berlin', 'toronto', 'Europe is often pictured level with the United States', 'ns']];
  const WORKED_TRAP = ['reno', 'san-diego', 'Nevada lies east of California', 'ew'];
  const MIN_DEGREES = 1;
  function directionOf(a, b) {
    const [lonA, latA] = at(a), [lonB, latB] = at(b), dlat = latA - latB, dlon = ((lonA - lonB + 540) % 360) - 180;
    if (Math.abs(dlat) < MIN_DEGREES || Math.abs(dlon) < MIN_DEGREES) fail(`${a} and ${b} are within ${MIN_DEGREES} degree north-south or east-west`);
    return { ns: dlat > 0 ? 'north' : 'south', ew: dlon > 0 ? 'east' : 'west' };
  }
  const degrees = (value, [plus, minus]) => `${Math.abs(value).toFixed(1)}° ${value >= 0 ? plus : minus}`;
  const whereIs = id => `${nameOf(id)} is at ${degrees(at(id)[1], 'NS')} and ${degrees(at(id)[0], 'EW')}`;
  const cap = word => word[0].toUpperCase() + word.slice(1);
  function trapItem(id, [a, b, unit, trap], steps) {
    const first = nameOf(a), second = nameOf(b), way = directionOf(a, b);
    const compare = key => key === 'ns' ? `${first} is at ${degrees(at(a)[1], 'NS')} and ${second} at ${degrees(at(b)[1], 'NS')}.` : `${first} is at ${degrees(at(a)[0], 'EW')} and ${second} at ${degrees(at(b)[0], 'EW')}.`;
    const axis = (key, plus, minus, prompt) => ({ id: key, kind: 'choose', prompt,
      options: [plus, minus].map(word => ({ id: word, text: cap(word), ...(way[key] === word ? { ok: true } : trap === key ? { slip: 'unit-not-place' } : { then: `${compare(key)} ${first} is ${way[key]} of ${second}.` }) })) });
    return { id, strand: 'never-heard', facets: {},
      blocks: [{ kind: 'prose', text: `${first} and ${second}. There is no map: say where the first lies from the second.` }],
      asks: [axis('ns', 'north', 'south', `Is ${first} north or south of ${second}?`), axis('ew', 'east', 'west', `Is ${first} east or west of ${second}?`)],
      reason: `${whereIs(a)}; ${whereIs(b)}. So ${first} is ${way.ns} of ${second} and ${way.ew} of it. ${unit}, yet ${first} lies ${way[trap]} of ${second}: judge two places by the places, not by the units that hold them.`,
      figure: cityMap('world', [a, b]),
      ...(steps ? { steps: steps({ first, second, way }) } : {}) };
  }
  const workedTrapSteps = ({ first, second, way }) => [
    { id: 'unit', does: 'Say what the larger units suggest.', working: `${first} is in Nevada and ${second} is in California, and Nevada lies east of California. So the units say Reno is east.` },
    { id: 'place', does: 'Compare the two places themselves.', working: `${whereIs('reno')}; ${whereIs('san-diego')}. A bigger number of degrees west is farther west: ${degrees(at('reno')[0], 'EW')} is farther west than ${degrees(at('san-diego')[0], 'EW')}.`, ask: 'ew' },
    { id: 'answer', does: 'Answer from the places.', working: `${first} is ${way.ns} of ${second} and ${way.ew} of it. The map after the answer shows both.` }];

  /* ---------- the items ---------- */
  const items = [];
  for (const [set, pairs] of Object.entries(PAIRS)) pairs.forEach(p => items.push(pairItem(`${set.startsWith('mixed') ? '' : 'far-'}${set}-${p[0]}-${p[1]}`, p)));
  for (const [set, stories] of Object.entries(STORIES)) stories.forEach(s => items.push(storyItem(`${set.startsWith('mixed') ? '' : 'story-'}${set}-${s[0]}`, s)));
  TRAPS.forEach(t => items.push(trapItem(`trap-${t[0]}-${t[1]}`, t)));
  items.push(pairItem(`w-far-${WORKED_PAIR[0]}-${WORKED_PAIR[1]}`, WORKED_PAIR, workedPairSteps), storyItem('w-story-dubrovnik', WORKED_STORY, workedStorySteps),
    trapItem(`w-trap-${WORKED_TRAP[0]}-${WORKED_TRAP[1]}`, WORKED_TRAP, workedTrapSteps));
  FC.items('geography', items);
})();
