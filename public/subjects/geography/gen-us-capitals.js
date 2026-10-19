// Geography, the state capitals: the two groups of places lessons 10 and 11 ask about, made into questions in two forms (a capital's name to tap, as its dot
// inside its state; and a state lit, its capital typed) from the map data `us`. 25 capitals of the West and the Midwest (lesson 10) and 25 of the South and the
// Northeast (lesson 11), the states grouped as the lessons on the states group them (Delaware and Maryland are in the South). Washington, D.C., is the nation's
// capital, not a state's, and is a big city in gen-us-cities.js. A capital is the name the news uses for a state's government ("Sacramento passed a law");
// it is rarely the state's biggest city, so each one's cue says which bigger city it is mixed up with. Which city is a state's capital: the states' own
// official lists (each state government's site), as the National Governors Association lists them; which city is a state's biggest: the US Census Bureau's
// 2020 count. A capital also in gen-us-cities.js (Sacramento, Phoenix, Denver, Salt Lake City, Honolulu, Columbus and Indianapolis; Austin, Oklahoma City,
// Nashville, Atlanta, Raleigh and Boston) is the same dot, asked again here as a capital. Minneapolis–St. Paul is the metro (one dot in the cities group); St. Paul,
// next to Minneapolis, is the capital (its own dot here).
// A capital's `lights` is its state: the name question lights the state, not the capital's dot (place-gen.js). Like a city, a capital's feedback is written
// here, since a dot has no neighbors or water in the map data: what it is (the capital of the state), where in the state, then the cue.
// A wrong tap on a capital or a city that is often mixed up with it carries its slip (the subject's `lists.slip`).
// The four cases that open lessons 10 and 11, shown done, are at the end of the file.
(() => {
  const WORDS = { tap: 'Tap this state capital on the map.', name: 'What is the capital of the lit state?' };
  const capital = (id, name, state, stateName, part, cue, accept = [name]) => ({ id, name, accept, lights: state, reason: [`${name} is the capital of ${stateName}.`, `Area: ${part}.`, cue] });
  const group = (id, slips, list) => ({ id, strand: 'us-capitals', places: { map: 'us', forms: ['tap', 'name'], words: WORDS, slips, list } });
  const slipOf = (id, ids) => Object.fromEntries(ids.map(p => [p, id]));
  const BIGGEST = 'It is also the state\'s biggest city.';

  FC.gen('geography', [
    group('g-us-capitals-west', {
      ...slipOf('springfield-chicago', ['springfield', 'chicago']), ...slipOf('jefferson-kansas-city', ['jefferson-city', 'kansas-city']),
      ...slipOf('carson-vegas', ['carson-city', 'las-vegas']), ...slipOf('sacramento-la', ['sacramento', 'los-angeles', 'san-francisco']),
      ...slipOf('dakota-capitals', ['bismarck', 'pierre']), ...slipOf('northwest-capitals', ['olympia', 'salem', 'seattle', 'portland']),
      ...slipOf('lincoln-omaha', ['lincoln', 'omaha']), ...slipOf('great-lakes-capitals', ['madison', 'lansing', 'milwaukee', 'detroit'])
    }, [
      capital('olympia', 'Olympia', 'washington', 'Washington', 'the west of the state, at the south end of Puget Sound',
        'Tell it from Seattle: Olympia is the capital, south of Seattle at the end of the Sound; Seattle is the bigger city.'),
      capital('salem', 'Salem', 'oregon', 'Oregon', 'the northwest of the state, on the Willamette River, south of Portland',
        'Tell it from Portland: Salem is the capital, south of Portland; Portland is the bigger city.'),
      capital('sacramento', 'Sacramento', 'california', 'California', 'inland in the north-center of the state, northeast of San Francisco',
        'Tell it from Los Angeles and San Francisco: Sacramento is the capital, inland; the bigger cities are on the coast.'),
      capital('juneau', 'Juneau', 'alaska', 'Alaska', 'the southeast of the state, on the narrow strip of coast called the panhandle (drawn in the box at the bottom left)',
        'Tell it from Anchorage: Juneau is the capital, far to the southeast, with no road to the rest of the state; Anchorage is the biggest city, on the south coast.'),
      capital('honolulu', 'Honolulu', 'hawaii', 'Hawaii', 'the island of Oahu (drawn in the box at the bottom left)', BIGGEST),
      capital('boise', 'Boise', 'idaho', 'Idaho', 'the southwest of the state, near the Oregon line, on the Boise River', BIGGEST),
      capital('helena', 'Helena', 'montana', 'Montana', 'the west-center of the state, in the Rocky Mountains',
        "Helena is a small capital; Montana's biggest city is Billings, in the south."),
      capital('cheyenne', 'Cheyenne', 'wyoming', 'Wyoming', 'the far southeast corner of the state, just north of the Colorado line',
        'Tell it from Denver: Cheyenne is the capital of Wyoming, just north of the line; Denver is in Colorado.'),
      capital('carson-city', 'Carson City', 'nevada', 'Nevada', 'the far west of the state, near the California line',
        'Tell it from Las Vegas: Carson City is the small capital in the far west; Las Vegas is the big city in the south.'),
      capital('salt-lake-city', 'Salt Lake City', 'utah', 'Utah', 'the north of the state, by the Great Salt Lake', BIGGEST, ['Salt Lake City', 'SLC']),
      capital('denver', 'Denver', 'colorado', 'Colorado', 'the north-center of the state, where the Plains meet the Rockies', BIGGEST),
      capital('phoenix', 'Phoenix', 'arizona', 'Arizona', 'the south-center of the state, in the desert', BIGGEST),
      capital('santa-fe', 'Santa Fe', 'new-mexico', 'New Mexico', 'the north-center of the state, northeast of Albuquerque',
        'Tell it from Albuquerque: Santa Fe is the capital, northeast of Albuquerque; Albuquerque is the bigger city.'),
      capital('columbus', 'Columbus', 'ohio', 'Ohio', 'the center of the state', BIGGEST),
      capital('indianapolis', 'Indianapolis', 'indiana', 'Indiana', 'the center of the state', BIGGEST),
      capital('springfield', 'Springfield', 'illinois', 'Illinois', 'the middle of the state, far from Lake Michigan',
        'Springfield, not Chicago: Chicago is the big city in the northeast corner, on the lake; the capital is in the middle of the state.'),
      capital('lansing', 'Lansing', 'michigan', 'Michigan', 'the south of the lower peninsula, in the middle of the mitten',
        'Tell it from Detroit: Lansing is the capital, northwest of Detroit; Detroit is the bigger city, in the southeast.'),
      capital('madison', 'Madison', 'wisconsin', 'Wisconsin', 'the south of the state, between two lakes',
        'Tell it from Milwaukee: Madison is the capital, inland and west of Milwaukee; Milwaukee is the bigger city, on Lake Michigan.'),
      capital('st-paul', 'St. Paul', 'minnesota', 'Minnesota', 'the southeast of the state, on the Mississippi River, next to Minneapolis',
        'St. Paul is the capital; Minneapolis, next door, is the bigger city. The dot you met in The cities west of the Mississippi was the metro, Minneapolis–St. Paul.', ['St. Paul', 'Saint Paul']),
      capital('des-moines', 'Des Moines', 'iowa', 'Iowa', 'the center of the state', BIGGEST),
      capital('jefferson-city', 'Jefferson City', 'missouri', 'Missouri', 'the middle of the state, on the Missouri River',
        'Jefferson City, not Kansas City: Kansas City is the big city on the western edge; the capital is in the middle, on the Missouri River.'),
      capital('bismarck', 'Bismarck', 'north-dakota', 'North Dakota', 'the south-center of the state, on the Missouri River',
        'Tell it from Pierre: Bismarck is the capital of North Dakota, the northern one; Pierre is the capital of South Dakota. Both are on the Missouri River.'),
      capital('pierre', 'Pierre', 'south-dakota', 'South Dakota', 'the center of the state, on the Missouri River',
        "Tell it from Bismarck: Pierre is the capital of South Dakota, the southern one. South Dakota's biggest city is Sioux Falls, in the southeast."),
      capital('lincoln', 'Lincoln', 'nebraska', 'Nebraska', 'the southeast of the state, inland',
        'Tell it from Omaha: Lincoln is the capital, southwest of Omaha; Omaha is the bigger city, on the Missouri River.'),
      capital('topeka', 'Topeka', 'kansas', 'Kansas', 'the northeast of the state, on the Kansas River',
        'Topeka is the capital of Kansas, west of Kansas City; Kansas City, mostly in Missouri, is not the capital.')
    ]),
    group('g-us-capitals-east', {
      ...slipOf('albany-nyc', ['albany', 'new-york-city']), ...slipOf('tallahassee-miami', ['tallahassee', 'miami']),
      ...slipOf('harrisburg-philadelphia', ['harrisburg', 'philadelphia']), ...slipOf('austin-texas', ['austin', 'houston', 'dallas-fort-worth', 'san-antonio']),
      ...slipOf('baton-rouge-new-orleans', ['baton-rouge', 'new-orleans']), ...slipOf('annapolis-baltimore', ['annapolis', 'baltimore']),
      ...slipOf('columbia-charleston', ['columbia', 'charleston']), ...slipOf('raleigh-charlotte', ['raleigh', 'charlotte']),
      ...slipOf('jackson-jacksonville', ['jackson', 'jacksonville'])
    }, [
      capital('austin', 'Austin', 'texas', 'Texas', 'the center of the state',
        'Tell it from Houston, Dallas–Fort Worth and San Antonio: Austin is the capital; those three are bigger cities.'),
      capital('oklahoma-city', 'Oklahoma City', 'oklahoma', 'Oklahoma', 'the center of the state, on the Plains', BIGGEST, ['Oklahoma City', 'OKC']),
      capital('little-rock', 'Little Rock', 'arkansas', 'Arkansas', 'the center of the state, on the Arkansas River', BIGGEST),
      capital('baton-rouge', 'Baton Rouge', 'louisiana', 'Louisiana', 'the southeast of the state, on the Mississippi River',
        'Tell it from New Orleans: Baton Rouge is the capital, upriver to the northwest; New Orleans is the bigger city, near the Gulf.'),
      capital('jackson', 'Jackson', 'mississippi', 'Mississippi', 'the center-west of the state',
        'Tell it from Jacksonville: Jackson is the capital of Mississippi, and its biggest city; Jacksonville is in the northeast corner of Florida.'),
      capital('montgomery', 'Montgomery', 'alabama', 'Alabama', 'the south-center of the state, on the Alabama River',
        'Montgomery is the capital, in the middle of the state, not on the Gulf coast.'),
      capital('nashville', 'Nashville', 'tennessee', 'Tennessee', 'the north-center of the state, on the Cumberland River',
        'Tell it from Memphis: Nashville is the capital, in the middle of the state; Memphis is in the far southwest corner.'),
      capital('frankfort', 'Frankfort', 'kentucky', 'Kentucky', 'the north-center of the state, on the Kentucky River',
        "Frankfort is a small capital; Kentucky's biggest city is Louisville, west of it on the Ohio River."),
      capital('tallahassee', 'Tallahassee', 'florida', 'Florida', 'the far north of the state, in the Panhandle, near the Georgia line',
        'Tell it from Miami: Tallahassee is the capital, far to the north; Miami is the big city at the southeast tip.'),
      capital('atlanta', 'Atlanta', 'georgia', 'Georgia', 'the north of the state', BIGGEST),
      capital('columbia', 'Columbia', 'south-carolina', 'South Carolina', 'the center of the state, inland',
        'Columbia, not Charleston: Charleston, South Carolina, is a coastal city but not the capital; Columbia is in the middle of the state.'),
      capital('raleigh', 'Raleigh', 'north-carolina', 'North Carolina', 'the center-east of the state, inland',
        'Tell it from Charlotte: Raleigh is the capital, in the center-east; Charlotte is the bigger city, in the southwest.'),
      capital('richmond', 'Richmond', 'virginia', 'Virginia', 'the east-center of the state, on the James River, south of Washington, D.C.',
        "Richmond is the capital; Virginia's biggest city is Virginia Beach, on the coast."),
      capital('charleston', 'Charleston', 'west-virginia', 'West Virginia', 'the west of the state, on the Kanawha River',
        'Charleston, West Virginia, not Charleston, South Carolina: this is the capital, and the biggest city of its state; the one on the South Carolina coast is not a capital.'),
      capital('annapolis', 'Annapolis', 'maryland', 'Maryland', 'the center of the state, on Chesapeake Bay, a short way south of Baltimore',
        'Tell it from Baltimore: Annapolis is the capital, a short way south of Baltimore on the bay; Baltimore is the bigger city.'),
      capital('dover', 'Dover', 'delaware', 'Delaware', 'the center of the state, a short way from Delaware Bay',
        "Dover is the capital; Delaware's biggest city is Wilmington, in the north."),
      capital('augusta', 'Augusta', 'maine', 'Maine', 'the south of the state, inland, on the Kennebec River',
        'Tell it from Portland: Augusta is the capital, inland; Portland, Maine, is the bigger city, on the coast.'),
      capital('concord', 'Concord', 'new-hampshire', 'New Hampshire', 'the south-center of the state, on the Merrimack River',
        "Concord is the capital; New Hampshire's biggest city is Manchester, south of it."),
      capital('montpelier', 'Montpelier', 'vermont', 'Vermont', 'the north-center of the state, inland',
        "Montpelier is a very small capital; Vermont's biggest city is Burlington, on Lake Champlain."),
      capital('boston', 'Boston', 'massachusetts', 'Massachusetts', 'the east of the state, on the coast', BIGGEST),
      capital('providence', 'Providence', 'rhode-island', 'Rhode Island', 'the east of the state, at the head of Narragansett Bay', BIGGEST),
      capital('hartford', 'Hartford', 'connecticut', 'Connecticut', 'the north-center of the state, on the Connecticut River',
        "Hartford is the capital, inland; Connecticut's biggest city, Bridgeport, is on the coast."),
      capital('albany', 'Albany', 'new-york', 'New York', 'the east of the state, on the Hudson River, far north of New York City',
        'Albany, not New York City: New York City is the big city at the southern tip; the capital is up the Hudson River.'),
      capital('trenton', 'Trenton', 'new-jersey', 'New Jersey', 'the west-center of the state, on the Delaware River, across from Pennsylvania',
        "Trenton is the capital, between Philadelphia and New York City; New Jersey's biggest city is Newark."),
      capital('harrisburg', 'Harrisburg', 'pennsylvania', 'Pennsylvania', 'the south-center of the state, on the Susquehanna River',
        'Harrisburg, not Philadelphia: Philadelphia is the big city in the southeast corner; the capital is inland, to the west of it.')
    ])
  ]);

  // The cases that open lessons 10 and 11, each shown done in the three steps of the way of thinking (the state, the part of it, the water), before the learner's
  // first try. Each uses only what the lesson's screens showed and places the learner already has; the closing line is the capital's own cue.
  const groupOf = id => FC.get('geography').gens[id].places;
  const cueOf = (gen, id) => { const lines = groupOf(gen).list.find(p => p.id === id).reason; return lines[lines.length - 1]; };
  const step = (id, does, working) => ({ id, does, working });
  const STATE = 'Area: which state is it in?', PART = 'Touches: where in the state, and next to what?', WATER = 'Water: what water is it on?';
  const tap = (id, gen, right, name, steps) => ({ id, strand: 'us-capitals', facets: { form: 'tap' }, blocks: [{ kind: 'prose', text: name }],
    asks: [{ id: 'where', kind: 'place', prompt: groupOf(gen).words.tap, map: 'us', right }], steps, reason: cueOf(gen, right) });
  const named = (id, gen, capitalId, lit, accept, steps) => ({ id, strand: 'us-capitals', facets: { form: 'name' },
    blocks: [{ kind: 'prose', text: groupOf(gen).words.name }, { kind: 'map', region: 'us', lit: [lit] }],
    asks: [{ id: 'name', kind: 'text', prompt: groupOf(gen).words.name, accept }], steps, reason: cueOf(gen, capitalId) });

  FC.items('geography', [
    tap('w-tap-sacramento', 'g-us-capitals-west', 'sacramento', 'Sacramento', [
      step('area', STATE, 'California\'s government sits in Sacramento: "Sacramento passed a law" means California. California is the long state down the Pacific coast, which you placed in The West.'),
      step('touch', PART, 'It is not Los Angeles or San Francisco, the coast cities of The cities west of the Mississippi. The capital is inland, in the north-center of the state, northeast of San Francisco.'),
      step('water', WATER, 'It stands on the Sacramento River, a river too small to show on this map, away from the ocean. Tap that dot.')]),
    named('w-name-california', 'g-us-capitals-west', 'sacramento', 'california', ['Sacramento'], [
      step('area', STATE, 'The lit state is the long one down the Pacific coast: California.'),
      step('touch', PART, 'Its big cities, Los Angeles, San Francisco and San Diego, are on the coast, and the capital is none of them. It is inland, northeast of San Francisco.'),
      step('water', WATER, 'It is on the Sacramento River, and the city has the river\'s name: Sacramento.')]),
    tap('w-tap-albany', 'g-us-capitals-east', 'albany', 'Albany', [
      step('area', STATE, 'New York\'s government sits in Albany: "Albany passed a budget" means New York State, the big state west of Vermont, from the Atlantic up to two Great Lakes, which you placed in The Northeast.'),
      step('touch', PART, 'It is not New York City, at the state\'s southern tip. The capital is far to the north of it, in the east of the state.'),
      step('water', WATER, 'It stands on the Hudson River, the river that comes down to New York City. Follow the river up and tap that dot.')]),
    named('w-name-new-york', 'g-us-capitals-east', 'albany', 'new-york', ['Albany'], [
      step('area', STATE, 'The lit state reaches from the Atlantic up to two Great Lakes: New York.'),
      step('touch', PART, 'The famous city, New York City, is at its southern tip, and the capital is not there. It is far to the north, in the east of the state.'),
      step('water', WATER, 'It is up the Hudson River from New York City. The capital is Albany.')])
  ]);
})();
