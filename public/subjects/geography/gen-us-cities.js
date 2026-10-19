// Geography, the big cities of the United States: the two groups of places lessons 8 and 9 ask about, made into questions in two forms (a name to tap,
// a lit city to name) from the map data `us`, whose cities are dots with no outline; and the four cases that open those lessons, shown done (at the end of the file). 47 cities: 24 west of the Mississippi (lesson 8) and 23 east of it (lesson 9),
// by the state each is in (the river is the dividing line; Minnesota, Iowa, Missouri, Arkansas, Louisiana and every state beyond them are west). A dot has no
// neighbors and no water in the map data, so a city has no neighbor question, and its feedback is written here, not made by placeReasonOf (which would print
// "nothing on land; it is islands" for a dot): the state and the part of it first (Area), then the water it is on, then the one thing that tells it from the
// city it is mixed up with. The way of thinking for a city is the geographer's (docs/research/knowing-where-places-are.md G4, G8): the state, then where in the
// state (its part, the coast, the river), because memory for places is hierarchical and a learner who is wrong is wrong within the right state.
// Facts: which state a city is in and where in the state (the dot is inside that state and in that part of it on the map data; checked against the US Census
// Bureau's list of cities), the water it stands on (the USGS Geographic Names Information System and the cities' own official sites); where a fact is a
// learner's confusion (Kansas City is mostly in Missouri; Portland, Oregon, not Maine), it rests on the same lists. Capitals are gen-us-capitals.js.
// A wrong tap on a city that is often mixed up carries its slip (the subject's `lists.slip`).
(() => {
  const WORDS = { tap: 'Tap the city on the map.', name: 'What is the lit city called?' };
  // a city: its state and the part of it, the water it is on, and what tells it from the one it is mixed up with
  const city = (id, name, area, water, cue, accept = [name]) => ({ id, name, accept, reason: [`Area: ${area}.`, `Water: ${water}.`, cue] });
  const group = (id, slips, list) => ({ id, strand: 'us-cities', places: { map: 'us', forms: ['tap', 'name'], words: WORDS, slips, list } });
  const slipOf = (id, ids) => Object.fromEntries(ids.map(p => [p, id]));

  FC.gen('geography', [
    group('g-us-cities-west', {
      ...slipOf('bay-cities', ['san-francisco', 'san-jose', 'sacramento']), ...slipOf('california-south', ['los-angeles', 'san-diego']),
      ...slipOf('seattle-portland', ['seattle', 'portland']), ...slipOf('vegas-phoenix', ['las-vegas', 'phoenix', 'albuquerque']),
      ...slipOf('denver-salt-lake', ['denver', 'salt-lake-city']), ...slipOf('texas-four', ['dallas-fort-worth', 'houston', 'san-antonio', 'austin']),
      ...slipOf('river-cities', ['kansas-city', 'st-louis', 'omaha'])
    }, [
      city('los-angeles', 'Los Angeles', 'California, in the south of the state, well down the coast', 'the Pacific Ocean',
        'Tell it from San Diego: Los Angeles is the bigger city; San Diego is the last one before the Mexican border, in the very bottom corner.', ['Los Angeles', 'LA']),
      city('san-francisco', 'San Francisco', 'California, in the north of the state, at the tip of a peninsula', 'the Pacific Ocean on one side and San Francisco Bay on the other',
        "Tell it from San Jose: San Francisco is on the ocean at the bay's mouth; San Jose is at the bay's far south end.", ['San Francisco', 'SF']),
      city('san-jose', 'San Jose', 'California, in the north of the state, southeast of San Francisco', "San Francisco Bay, at its south end; the ocean is out of sight to the west",
        'Tell it from San Francisco: San Jose is at the bay\'s south end, not on the ocean; San Francisco is on the ocean at the bay\'s mouth.'),
      city('san-diego', 'San Diego', 'California, in the far south of the state, in the bottom corner on the Mexican border', 'the Pacific Ocean',
        'Tell it from Los Angeles: San Diego is the one in the very bottom corner, on the Mexican border.'),
      city('sacramento', 'Sacramento', 'California, inland in the north-center of the state, northeast of San Francisco', 'no sea: it is inland, on the Sacramento River',
        'Tell it from San Francisco: Sacramento is inland, northeast of the bay.'),
      city('seattle', 'Seattle', 'Washington, in the northwest of the state', 'Puget Sound, an inlet of the Pacific Ocean',
        'Tell it from Portland: Seattle is the northern one, in Washington; Portland is in Oregon, south of the Columbia River.'),
      city('portland', 'Portland', 'Oregon, in the northwest of the state, close to the Washington line', 'the Willamette River, near where it joins the Columbia River; the Pacific is a short way west',
        'Portland, Oregon, not Portland, Maine: this one is in the northwest; the other is on the Atlantic coast, in the Northeast.'),
      city('las-vegas', 'Las Vegas', 'Nevada, in the far south of the state, in the desert', "no sea: it is inland, with the Colorado River's Lake Mead a little east of it",
        'Tell it from Phoenix: Las Vegas is the northern one, in Nevada; Phoenix is in Arizona, to the southeast.', ['Las Vegas', 'Vegas']),
      city('phoenix', 'Phoenix', 'Arizona, in the south-center of the state, in the desert', 'no sea: it is inland, on the Salt River',
        'Tell it from Las Vegas: Phoenix is the southern one, in Arizona; Las Vegas is in Nevada.'),
      city('denver', 'Denver', 'Colorado, in the north-center of the state, where the Plains meet the Rockies', 'no sea: it is inland, on the South Platte River',
        'Tell it from Salt Lake City: Denver is east of the Rockies, on the Plains; Salt Lake City is west of them.'),
      city('salt-lake-city', 'Salt Lake City', 'Utah, in the north of the state, at the foot of the mountains', 'the Great Salt Lake, just to its northwest; the ocean is far away',
        'Tell it from Denver: Salt Lake City is west of the Rockies, by the Great Salt Lake; Denver is east of them.', ['Salt Lake City', 'SLC']),
      city('albuquerque', 'Albuquerque', 'New Mexico, in the center of the state', 'no sea: it is inland, on the Rio Grande',
        'Tell it from Phoenix: Albuquerque is the one farther east, in New Mexico, on the Rio Grande.'),
      city('dallas-fort-worth', 'Dallas–Fort Worth', 'Texas, in the north of the state, on the plains', 'no sea: it is inland, a long way from the Gulf, on the Trinity River',
        'Tell it from Houston: Dallas–Fort Worth is the northern one, inland; Houston is in the southeast, near the Gulf. It is two cities side by side, Dallas on the east and Fort Worth on the west.',
        ['Dallas–Fort Worth', 'Dallas', 'Fort Worth', 'DFW']),
      city('houston', 'Houston', 'Texas, in the southeast of the state, near the coast', 'the Gulf of Mexico, about fifty miles to the southeast, through Galveston Bay',
        'Tell it from New Orleans: Houston is in Texas; New Orleans is east of it, in Louisiana.'),
      city('san-antonio', 'San Antonio', 'Texas, in the south of the state, inland', 'no sea: it is inland, on the San Antonio River',
        'Tell it from Austin: San Antonio is the southern one of the two, southwest of Austin.'),
      city('austin', 'Austin', 'Texas, in the center of the state, inland', 'no sea: it is inland, on the Colorado River of Texas, not the big Colorado of the West',
        'Tell it from San Antonio: Austin is the northern one of the two, northeast of San Antonio.'),
      city('oklahoma-city', 'Oklahoma City', 'Oklahoma, in the center of the state, on the Plains', 'no sea: it is inland, on the North Canadian River',
        'It is the big city in the middle of Oklahoma, the state just above Texas.', ['Oklahoma City', 'OKC']),
      city('kansas-city', 'Kansas City', 'Missouri, on the western edge of the state, at the Kansas line', 'the Missouri River, where the Kansas River joins it',
        'Kansas City is mostly in Missouri, not in Kansas; the smaller Kansas City, Kansas, is just across the state line.', ['Kansas City', 'KC']),
      city('omaha', 'Omaha', 'Nebraska, on the eastern edge of the state', 'the Missouri River, which is the Iowa line here',
        'Tell it from Kansas City: Omaha is the northern one, in Nebraska; Kansas City is in Missouri.'),
      city('minneapolis-st-paul', 'Minneapolis–St. Paul', 'Minnesota, in the southeast of the state', 'the Mississippi River, near where the Minnesota River joins it',
        'This dot is the metro of two cities side by side, Minneapolis and St. Paul; St. Paul, the smaller, is the state capital.',
        ['Minneapolis–St. Paul', 'Minneapolis', 'Twin Cities']),
      city('st-louis', 'St. Louis', 'Missouri, on the eastern edge of the state', 'the Mississippi River, just below where the Missouri River joins it',
        'Tell it from Kansas City: St. Louis is the one on the Mississippi at the east edge of Missouri; Kansas City is at the west edge.', ['St. Louis', 'Saint Louis']),
      city('new-orleans', 'New Orleans', 'Louisiana, in the southeast of the state, near the river\'s mouth', 'the Mississippi River, not far from where it reaches the Gulf of Mexico',
        'Tell it from Houston: New Orleans is the Gulf port in Louisiana, on the river; Houston is in Texas.'),
      city('anchorage', 'Anchorage', 'Alaska, on the south coast, drawn in the box at the bottom left', 'Cook Inlet, an arm of the Gulf of Alaska, which is the north Pacific',
        "It is Alaska's biggest city."),
      city('honolulu', 'Honolulu', 'Hawaii, on the island of Oahu, drawn in the box at the bottom left', 'the Pacific Ocean',
        "It is on Oahu, the island where most of Hawaii's people live.")
    ]),
    group('g-us-cities-east', {
      ...slipOf('chicago-milwaukee', ['chicago', 'milwaukee']), ...slipOf('detroit-cleveland', ['detroit']), ...slipOf('ohio-three', ['columbus', 'cleveland', 'cincinnati']),
      ...slipOf('nashville-memphis', ['nashville', 'memphis']), ...slipOf('florida-four', ['miami', 'orlando', 'tampa', 'jacksonville']),
      ...slipOf('carolina-two', ['charlotte', 'raleigh']), ...slipOf('corridor', ['washington-dc', 'baltimore', 'philadelphia', 'new-york-city', 'boston']),
      ...slipOf('pennsylvania-two', ['pittsburgh']), ...slipOf('new-york-two', ['buffalo'])
    }, [
      city('chicago', 'Chicago', 'Illinois, in the northeast corner of the state', 'Lake Michigan, at its southwest end',
        'Tell it from Milwaukee: Chicago is the southern one, in Illinois; Milwaukee is up the lakeshore, in Wisconsin.'),
      city('milwaukee', 'Milwaukee', 'Wisconsin, in the southeast corner of the state', 'Lake Michigan, on its west shore',
        'Tell it from Chicago: Milwaukee is the northern one, in Wisconsin; Chicago is at the bottom of the lake, in Illinois.'),
      city('detroit', 'Detroit', 'Michigan, in the southeast of the lower peninsula, the mitten', 'the Detroit River, between Lake St. Clair and Lake Erie, with Canada across it',
        'Tell it from Cleveland: Detroit is in Michigan, on the river that joins two lakes; Cleveland is in Ohio, on Lake Erie itself.'),
      city('indianapolis', 'Indianapolis', 'Indiana, in the center of the state', 'no sea or lake: it is inland, on the White River',
        'Tell it from Chicago: Indianapolis is in the middle of Indiana, well south of the lake.'),
      city('columbus', 'Columbus', 'Ohio, in the center of the state', 'no sea or lake: it is inland, on the Scioto River',
        "Tell it from Cleveland and Cincinnati: Columbus is the middle one of Ohio's three big cities; Cleveland is on the lake in the north; Cincinnati is on the river in the southwest."),
      city('cleveland', 'Cleveland', 'Ohio, in the north of the state', 'Lake Erie, on its south shore, at the mouth of the Cuyahoga River',
        "Tell it from Columbus and Cincinnati: Cleveland is the northern one of Ohio's three big cities, on the lake."),
      city('cincinnati', 'Cincinnati', 'Ohio, in the southwest corner of the state, at the Kentucky line', 'the Ohio River, which is the Kentucky line here',
        "Tell it from Columbus and Cleveland: Cincinnati is the southwestern one of Ohio's three big cities, on the river."),
      city('pittsburgh', 'Pittsburgh', 'Pennsylvania, in the southwest of the state', 'the Ohio River, which begins here where the Allegheny and Monongahela rivers meet',
        'Tell it from Philadelphia: Pittsburgh is in the west of Pennsylvania; Philadelphia is in the east.'),
      city('nashville', 'Nashville', 'Tennessee, in the north-center of the state', 'no sea: it is inland, on the Cumberland River',
        'Tell it from Memphis: Nashville is in the middle of the state; Memphis is in the far southwest corner.'),
      city('memphis', 'Memphis', 'Tennessee, in the far southwest corner of the state, by the Arkansas and Mississippi lines', 'the Mississippi River, on its east bank',
        'Tell it from Nashville: Memphis is in the far southwest corner, on the Mississippi; Nashville is in the middle of the state.'),
      city('atlanta', 'Atlanta', 'Georgia, in the north of the state', 'no sea: it is inland, in the foothills of the Appalachians, a long way from the coast',
        'Tell it from Charlotte: Atlanta is in Georgia, to the southwest; Charlotte is in North Carolina.'),
      city('charlotte', 'Charlotte', 'North Carolina, in the south of the state, near the South Carolina line', 'no sea: it is inland, with the Catawba River just to the west',
        'Tell it from Raleigh: Charlotte is the one in the southwest, near South Carolina; Raleigh is in the middle of the state, farther east.'),
      city('raleigh', 'Raleigh', 'North Carolina, in the center-east of the state, inland', 'no sea: it is inland, with the Atlantic farther east',
        'Tell it from Charlotte: Raleigh is the one in the center-east; Charlotte is in the southwest, near South Carolina.'),
      city('miami', 'Miami', 'Florida, at the southeast tip of the peninsula', 'the Atlantic Ocean, at Biscayne Bay',
        'Tell it from Tampa: Miami is on the Atlantic side; Tampa is on the Gulf side.'),
      city('orlando', 'Orlando', 'Florida, in the center of the peninsula', 'no sea: it is inland, among lakes',
        'Tell it from Miami and Tampa: Orlando is the inland one, in the middle; Miami is on the Atlantic and Tampa is on the Gulf.'),
      city('tampa', 'Tampa', 'Florida, on the west coast of the peninsula', 'Tampa Bay, on the Gulf of Mexico',
        'Tell it from Miami: Tampa is on the Gulf side; Miami is on the Atlantic side.'),
      city('jacksonville', 'Jacksonville', 'Florida, in the northeast corner of the state, near the Georgia line', 'the St. Johns River, close to the Atlantic coast',
        'It is the northern city of Florida, near the Georgia line, close to where the St. Johns River reaches the coast.'),
      city('washington-dc', 'Washington, D.C.', 'between Maryland and Virginia, in no state', 'the Potomac River',
        'Washington, D.C., is the nation\'s capital, not a state, and not Washington State, in the far northwest.', ['Washington, D.C.', 'DC', 'Washington']),
      city('baltimore', 'Baltimore', 'Maryland, in the north-center of the state, northeast of Washington, D.C.', 'the Patapsco River, where it opens into Chesapeake Bay',
        'Tell it from Philadelphia: Baltimore is the first big city north of Washington, D.C.; Philadelphia is the next one up, in Pennsylvania.'),
      city('philadelphia', 'Philadelphia', 'Pennsylvania, in the southeast corner of the state, at the New Jersey line', 'the Delaware River, which is the New Jersey line here',
        'Tell it from Pittsburgh: Philadelphia is in the east of Pennsylvania, in the corridor between Baltimore and New York City.'),
      city('new-york-city', 'New York City', 'New York, at the southern tip of the state, on the coast', 'the Atlantic Ocean, at the mouth of the Hudson River',
        'New York City is only the southern tip of New York State, which reaches up to two Great Lakes.', ['New York City', 'New York', 'NYC']),
      city('boston', 'Boston', 'Massachusetts, in the east of the state, in New England (the six small states of the northeast corner)', 'Massachusetts Bay, on the Atlantic Ocean',
        'Tell it from New York City: Boston is the top end of the corridor, in New England; New York City is below it.'),
      city('buffalo', 'Buffalo', 'New York, at the far west end of the state', 'Lake Erie, at its east end, where the Niagara River leaves it',
        'Tell it from New York City: Buffalo is at the opposite end of New York State, on Lake Erie, not on the coast.')
    ])
  ]);

  // The cases that open parts 8 and 9, each shown done in the three steps of the way of thinking (the state, the part of it, the water), before the learner's
  // first try. Each uses only what the lesson's screens showed and places the learner already has; the closing line is the city's own cue (the last line of its reason).
  const groupOf = id => FC.get('geography').gens[id].places;
  const cueOf = (gen, id) => { const lines = groupOf(gen).list.find(p => p.id === id).reason; return lines[lines.length - 1]; };
  const step = (id, does, working) => ({ id, does, working });
  const STATE = 'Area: which state is it in?', PART = 'Touches: where in the state, and next to what?', WATER = 'Water: what water is it on?';
  const tap = (id, gen, right, name, steps) => ({ id, strand: 'us-cities', facets: { form: 'tap' }, blocks: [{ kind: 'prose', text: name }],
    asks: [{ id: 'where', kind: 'place', prompt: groupOf(gen).words.tap, map: 'us', right }], steps, reason: cueOf(gen, right) });
  const named = (id, gen, lit, accept, steps) => ({ id, strand: 'us-cities', facets: { form: 'name' },
    blocks: [{ kind: 'prose', text: groupOf(gen).words.name }, { kind: 'map', region: 'us', lit: [lit] }],
    asks: [{ id: 'name', kind: 'text', prompt: groupOf(gen).words.name, accept }], steps, reason: cueOf(gen, lit) });

  FC.items('geography', [
    tap('w-tap-houston', 'g-us-cities-west', 'houston', 'Houston', [
      step('area', STATE, 'Houston is in Texas, the big state along the Gulf, which you placed in The South, from Texas to Kentucky.'),
      step('touch', PART, 'In Texas it is in the southeast, the part nearest Louisiana, not up north with Dallas–Fort Worth.'),
      step('water', WATER, 'The Gulf of Mexico, the sea along the bottom of the country, is a short way to its southeast. Tap the southeast of Texas, near the Gulf.')]),
    named('w-name-kansas-city', 'g-us-cities-west', 'kansas-city', ['Kansas City'], [
      step('area', STATE, 'The lit dot is in Missouri, west of the Mississippi, which you placed in The Midwest.'),
      step('touch', PART, 'It is on the western edge of Missouri, at the Kansas line, not at the eastern edge on the Mississippi, where St. Louis is.'),
      step('water', WATER, 'It is on the Missouri River, which comes in from the northwest. The city has a Kansas name but is mostly in Missouri: Kansas City.')]),
    tap('w-tap-pittsburgh', 'g-us-cities-east', 'pittsburgh', 'Pittsburgh', [
      step('area', STATE, 'Pittsburgh is in Pennsylvania, the wide state south of New York, which you placed in The Northeast.'),
      step('touch', PART, 'In Pennsylvania it is in the southwest, the side nearest Ohio, not over in the east where Philadelphia is.'),
      step('water', WATER, 'Two rivers meet there to make the Ohio River, the long river that runs west to the Mississippi, which you met in The big rivers. Tap the southwest of Pennsylvania.')]),
    named('w-name-tampa', 'g-us-cities-east', 'tampa', ['Tampa'], [
      step('area', STATE, 'The lit dot is in Florida, the long peninsula at the bottom right, which you placed in The South, the Atlantic side.'),
      step('touch', PART, 'It is about halfway down the peninsula, on the west side, not on the Atlantic side where Miami is.'),
      step('water', WATER, 'Its water is Tampa Bay, on the Gulf of Mexico. The city on the Gulf side of Florida is Tampa.')])
  ]);
})();
