// Geography, the United States state by state: the five groups of places parts 3 to 7 ask about, made into questions in three forms (a name to tap,
// a lit state to name, a neighbor and its water) from the map data `us`. A state has no flag in this subject, so no group asks one.
// Each state's feedback is the way of thinking in three lines (place-gen.js placeReasonOf): the area it sits in (`area`, written here), what touches
// it and its water (the map data's, never written by hand), then `cue`, the one thing that tells it from the state it is mixed up with. A wrong tap
// on a state that is often mixed up carries its slip (the subject's `lists.slip`).
(() => {
  const WORDS = { tap: 'Tap it on the map.', name: 'What is the lit state called?', border: 'Tap any one state or country next to it, then the water it touches. If no water touches it, tap Landlocked.' };
  const state = (id, name, area, cue, accept = [name]) => ({ id, name, accept, area, ...(cue ? { cue } : {}) });
  const group = (id, strand, slips, list) => ({ id, strand, places: { map: 'us', forms: ['tap', 'name', 'border'], words: WORDS, slips, list } });
  const PACIFIC = 'the West, its Pacific side', MOUNTAIN = 'the West, its mountain half, inland';
  const LAKES = 'the Midwest, around the Great Lakes', PLAINS = 'the Midwest, out on the Plains';
  const GULF = 'the South, along the Gulf of Mexico', INLAND = 'the South, inland, north of the Gulf states';
  const COAST = 'the South, on the Atlantic coast';
  const NEW_ENGLAND = 'the Northeast, in New England, the top right corner', MID_ATLANTIC = 'the Northeast, its Mid-Atlantic part, below New England';

  FC.gen('geography', [
    group('g-us-west', 'us-west', { wyoming: 'two-rectangles', colorado: 'two-rectangles', idaho: 'idaho-montana', montana: 'idaho-montana' }, [
      state('washington', 'Washington', PACIFIC, 'It is the top corner on the left, and it is a state, not the capital, Washington, D.C., on the other coast.', ['Washington', 'Washington State']),
      state('oregon', 'Oregon', PACIFIC, 'It is the middle one of the three Pacific states, between Washington and California.'),
      state('california', 'California', PACIFIC, 'It is the long one down the Pacific coast, the state with the most people.'),
      // Alaska's north coast is on the Arctic Ocean, which this map does not draw, so it is never asked for its water
      { ...state('alaska', 'Alaska', PACIFIC, 'It is drawn in a box at the bottom left; really it is far to the northwest, beyond Canada, with the Arctic Ocean along its top.'), forms: ['tap', 'name'] },
      state('hawaii', 'Hawaii', PACIFIC, 'It is drawn in a box at the bottom left; really it is far out in the Pacific, southwest of California.'),
      state('montana', 'Montana', MOUNTAIN, 'Tell it from Idaho: Montana is the wide one along Canada; Idaho is the narrow one west of it.'),
      state('idaho', 'Idaho', MOUNTAIN, 'Tell it from Montana: Idaho is narrow, wide at the bottom and thin at the top; Montana is the wide one east of it. Not Iowa, in the middle of the country.'),
      state('wyoming', 'Wyoming', MOUNTAIN, 'Tell it from Colorado: both are rectangles; Wyoming is the northern one, under Montana.'),
      state('nevada', 'Nevada', MOUNTAIN, 'It is the one just east of California, with a slanted west side.'),
      state('utah', 'Utah', MOUNTAIN, 'It is the rectangle with a corner cut out at the top right, where Wyoming sits.'),
      state('colorado', 'Colorado', MOUNTAIN, 'Tell it from Wyoming: both are rectangles; Colorado is the southern one, over New Mexico.'),
      state('arizona', 'Arizona', MOUNTAIN, 'It is the bottom left of the four corner states, east of California and on the Mexican border.'),
      state('new-mexico', 'New Mexico', MOUNTAIN, 'It is the bottom right of the four corner states, next to Texas.')
    ]),
    group('g-us-midwest', 'us-midwest', { illinois: 'illinois-indiana', indiana: 'illinois-indiana', 'north-dakota': 'two-dakotas', 'south-dakota': 'two-dakotas' }, [
      state('ohio', 'Ohio', LAKES, 'It is the eastern end of the Midwest, on Lake Erie, next to Pennsylvania; not the Ohio River, which runs along its bottom.'),
      state('indiana', 'Indiana', LAKES, 'Tell it from Illinois: Indiana is the eastern one of the two, between Illinois and Ohio.'),
      state('illinois', 'Illinois', LAKES, 'Tell it from Indiana: Illinois is the western one, on the Mississippi, with Chicago at its top on Lake Michigan.'),
      state('michigan', 'Michigan', LAKES, 'It is the mitten, with a second piece above it, the only state in two pieces among the lakes.'),
      state('wisconsin', 'Wisconsin', LAKES, 'It is the one west of Lake Michigan, across the water from Michigan\'s mitten.'),
      state('minnesota', 'Minnesota', LAKES, 'It is the top one, on Canada, where the Mississippi starts.'),
      state('iowa', 'Iowa', PLAINS, 'It sits between two rivers, the Mississippi on its east and the Missouri on its west. Not Idaho, far west in the mountains.'),
      state('missouri', 'Missouri', PLAINS, 'It is south of Iowa, where the Missouri River meets the Mississippi.'),
      state('north-dakota', 'North Dakota', PLAINS, 'Tell it from South Dakota: North Dakota is the top one, on the Canadian border.'),
      state('south-dakota', 'South Dakota', PLAINS, 'Tell it from North Dakota: South Dakota is the lower one, over Nebraska.'),
      state('nebraska', 'Nebraska', PLAINS, 'It is under South Dakota, with a notch cut from its bottom left where Colorado sits.'),
      state('kansas', 'Kansas', PLAINS, 'It is the rectangle at the very middle of the lower 48, under Nebraska.')
    ]),
    group('g-us-south-central', 'us-south-central', { mississippi: 'mississippi-alabama', alabama: 'mississippi-alabama', tennessee: 'tennessee-kentucky', kentucky: 'tennessee-kentucky' }, [
      state('texas', 'Texas', GULF, 'It is the biggest state in the lower 48, with Mexico across the Rio Grande.'),
      state('louisiana', 'Louisiana', GULF, 'It is the boot, where the Mississippi River reaches the Gulf.'),
      state('mississippi', 'Mississippi', GULF, 'Tell it from Alabama: Mississippi is the western one, beside the river it is named for and Louisiana. Not the Mississippi River itself.'),
      state('alabama', 'Alabama', GULF, 'Tell it from Mississippi: Alabama is the eastern one, next to Georgia and Florida.'),
      state('oklahoma', 'Oklahoma', INLAND, 'It is the pan with a handle pointing west, on top of Texas.'),
      state('arkansas', 'Arkansas', INLAND, 'It is just west of the Mississippi River, between Oklahoma and Tennessee.'),
      state('tennessee', 'Tennessee', INLAND, 'Tell it from Kentucky: Tennessee is the long, thin one to the south.'),
      state('kentucky', 'Kentucky', INLAND, 'Tell it from Tennessee: Kentucky is the one to the north, on the Ohio River.')
    ]),
    group('g-us-south-atlantic', 'us-south-atlantic', { 'north-carolina': 'two-carolinas', 'south-carolina': 'two-carolinas', virginia: 'two-virginias', 'west-virginia': 'two-virginias', maryland: 'maryland-delaware', delaware: 'maryland-delaware', washington: 'two-washingtons' }, [
      state('florida', 'Florida', COAST, 'It is the long peninsula at the bottom right, with water on three sides.'),
      state('georgia', 'Georgia', COAST, 'It is right on top of Florida, between Alabama and South Carolina.'),
      state('south-carolina', 'South Carolina', COAST, 'Tell it from North Carolina: South Carolina is the smaller triangle to the south.'),
      state('north-carolina', 'North Carolina', COAST, 'Tell it from South Carolina: North Carolina is the wider one to the north, under Virginia.'),
      state('virginia', 'Virginia', COAST, 'Tell it from West Virginia: Virginia is the one on the Atlantic; West Virginia is inland, west of it.'),
      state('west-virginia', 'West Virginia', 'the South, inland, in the Appalachian Mountains', 'Tell it from Virginia: West Virginia is the one with no coast, west of Virginia.'),
      state('maryland', 'Maryland', COAST, 'It wraps around Chesapeake Bay and around D.C.; Delaware is the small strip east of it.'),
      state('delaware', 'Delaware', COAST, 'It is the small strip on the Atlantic, east of Maryland.'),
      state('district-of-columbia', 'Washington, D.C.', 'the South, between Maryland and Virginia; the capital, not a state', 'It is not Washington State, in the far northwest.',
        ['Washington, D.C.', 'DC', 'District of Columbia'])
    ]),
    group('g-us-northeast', 'us-northeast', { vermont: 'vermont-new-hampshire', 'new-hampshire': 'vermont-new-hampshire', 'rhode-island': 'connecticut-rhode-island', connecticut: 'connecticut-rhode-island' }, [
      state('maine', 'Maine', NEW_ENGLAND, 'It is the big one at the very top right, touching only New Hampshire.'),
      state('new-hampshire', 'New Hampshire', NEW_ENGLAND, 'Tell it from Vermont: New Hampshire is narrow at the top and wide at the bottom, with a short coast.'),
      state('vermont', 'Vermont', NEW_ENGLAND, 'Tell it from New Hampshire: Vermont is wide at the top and narrow at the bottom, with no coast.'),
      state('massachusetts', 'Massachusetts', NEW_ENGLAND, 'It is the one across the middle of New England, with the hook of Cape Cod.'),
      state('rhode-island', 'Rhode Island', NEW_ENGLAND, 'Tell it from Connecticut: Rhode Island is the tiny one on the east.'),
      state('connecticut', 'Connecticut', NEW_ENGLAND, 'Tell it from Rhode Island: Connecticut is the bigger one on the west, next to New York.'),
      state('new-york', 'New York', MID_ATLANTIC, 'It reaches from New York City on the Atlantic up to two Great Lakes.', ['New York', 'New York State']),
      state('new-jersey', 'New Jersey', MID_ATLANTIC, 'It is the small one on the Atlantic between New York City and Pennsylvania.'),
      state('pennsylvania', 'Pennsylvania', MID_ATLANTIC, 'It is the wide rectangle under New York, with a short shore on Lake Erie.')
    ])
  ]);
})();
