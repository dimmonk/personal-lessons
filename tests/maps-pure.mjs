// The map data of Geography's parts 8 to 30 (lesson standard 3.11): the regions of the Americas, Europe, Asia and Africa and the world's features, and the cities of the
// United States. Each region holds the places its part asks (a tap on a capital is inside its country), the neighbors and water the build worked out (a landlocked
// country has no water, an island has its sea), the dots, straits and canals of its list, and the cities are dots of the kind `city` found within a radius, named
// clear of the others. No browser. Run: node tests/maps-pure.mjs
import { loadApp } from './load-app.mjs';
import { REGIONS } from '../tools/maps/regions.mjs';
import { waterOf } from '../tools/maps/topology.mjs';
import { limited, PART_OF } from '../tools/maps/limits.mjs';

const projectOf = (region, part = null) => { const R = REGIONS.find(r => r.id === region), p = R.parts.find(x => !part || x.id === part); return (lon, lat) => p.project(lon, lat).map(v => Math.round(v * 10) / 10); };

// a tap on the capital of each country the part asks is inside it: [lon, lat] by place id, then what each region is known for
const CAPITALS = {
  'americas-north': { ontario: [-79.4, 43.7], 'british-columbia': [-123.1, 49.3], quebec: [-71.2, 46.8], alberta: [-114.1, 51.0], manitoba: [-97.1, 49.9], 'nova-scotia': [-63.6, 44.6], yukon: [-135.0, 60.7] },
  'mexico-central': { mexico: [-99.1, 19.4], guatemala: [-90.5, 14.6], honduras: [-87.2, 14.1], nicaragua: [-86.3, 12.1], 'costa-rica': [-84.1, 9.9], panama: [-80.2, 8.6], belize: [-88.8, 17.2], 'el-salvador': [-89.2, 13.7] },
  caribbean: { cuba: [-82.4, 23.1], jamaica: [-76.8, 18.0], haiti: [-72.3, 18.5], 'dominican-republic': [-70.0, 18.5], 'puerto-rico': [-66.1, 18.4], bahamas: [-77.3, 25.0], 'trinidad-and-tobago': [-61.5, 10.6], barbados: [-59.6, 13.1], grenada: [-61.7, 12.1] },
  'south-america': { brazil: [-47.9, -15.8], peru: [-77.0, -12.0], bolivia: [-68.1, -16.5], chile: [-70.7, -33.4], argentina: [-58.4, -34.6], colombia: [-74.1, 4.7], 'french-guiana': [-52.3, 4.9], uruguay: [-56.2, -34.9], paraguay: [-57.6, -25.3], guyana: [-58.2, 6.8], suriname: [-55.2, 5.8], ecuador: [-78.5, -0.2], venezuela: [-66.9, 10.5] },
  'europe-north': { 'united-kingdom': [-1.5, 52.5], ireland: [-7.5, 53.0], iceland: [-19.0, 64.8], norway: [10.7, 60.0], sweden: [15.0, 60.0], finland: [25.0, 62.0], denmark: [9.5, 56.0], estonia: [25.0, 58.8], latvia: [24.1, 56.9], lithuania: [24.0, 55.3] },
  'europe-east': { poland: [19.9, 52.0], czechia: [15.5, 49.8], slovakia: [19.5, 48.7], hungary: [19.1, 47.5], romania: [25.0, 46.0], moldova: [28.5, 47.2], belarus: [27.6, 53.9], ukraine: [31.0, 49.0], russia: [38.0, 55.0] },
  balkans: { slovenia: [14.8, 46.1], croatia: [16.0, 45.5], 'bosnia-and-herzegovina': [17.8, 44.0], serbia: [20.5, 44.0], montenegro: [19.3, 42.7], kosovo: [20.9, 42.6], albania: [20.0, 41.0], 'north-macedonia': [21.7, 41.6], greece: [22.0, 39.5], bulgaria: [25.5, 42.7], cyprus: [33.2, 35.1], malta: [14.4, 35.9] },
  'middle-east': { turkiye: [32.8, 39.9], syria: [38.0, 35.0], israel: [34.9, 31.5], jordan: [36.5, 31.0], iraq: [44.0, 33.0], iran: [53.0, 33.0], lebanon: [35.6, 33.9] },
  'arabia-north-africa': { 'saudi-arabia': [45.0, 24.0], yemen: [47.0, 15.5], oman: [57.0, 21.0], 'united-arab-emirates': [54.4, 24.3], qatar: [51.5, 25.3], bahrain: [50.6, 26.1], kuwait: [47.9, 29.4], egypt: [30.5, 27.0], libya: [17.0, 27.0], tunisia: [9.5, 34.0], algeria: [3.0, 28.0], morocco: [-6.0, 32.0], sudan: [30.0, 15.5] },
  'africa-west': { senegal: [-14.5, 14.7], gambia: [-15.9, 13.45], 'guinea-bissau': [-15.2, 12.0], guinea: [-11.0, 10.5], 'sierra-leone': [-11.8, 8.5], liberia: [-9.4, 6.5], 'cote-divoire': [-5.5, 7.5], ghana: [-1.2, 7.9], togo: [1.0, 8.0], benin: [2.4, 9.3], nigeria: [8.0, 9.0], 'cape-verde': [-23.5, 15.1] },
  'africa-central': { mauritania: [-10.0, 20.0], mali: [-3.0, 17.0], 'burkina-faso': [-1.6, 12.3], niger: [8.0, 16.0], chad: [18.7, 15.0], cameroon: [12.5, 5.5], 'central-african-republic': [20.5, 6.5], gabon: [11.8, -0.8], 'republic-of-the-congo': [15.2, -2.0], 'democratic-republic-of-the-congo': [23.5, -3.0], 'sao-tome-and-principe': [6.7, 0.3] },
  'africa-east': { 'south-sudan': [30.0, 7.0], ethiopia: [39.0, 9.0], eritrea: [38.9, 15.3], djibouti: [42.6, 11.6], somalia: [46.0, 5.0], kenya: [37.9, 0.5], uganda: [32.5, 1.5], rwanda: [29.9, -2.0], burundi: [29.9, -3.4], tanzania: [35.0, -6.0], seychelles: [55.5, -4.6], comoros: [43.3, -11.7] },
  'africa-south': { angola: [17.5, -12.0], mozambique: [35.0, -17.0], namibia: [17.0, -22.0], botswana: [24.0, -22.0], zambia: [27.5, -14.0], zimbabwe: [30.0, -19.0], malawi: [34.0, -13.5], 'south-africa': [24.0, -29.0], lesotho: [28.2, -29.6], eswatini: [31.5, -26.5], madagascar: [47.0, -19.0], mauritius: [57.5, -20.3] },
  'asia-south': { india: [78.0, 22.0], pakistan: [69.0, 30.0], afghanistan: [66.0, 34.0], bangladesh: [90.3, 23.8], 'sri-lanka': [80.7, 7.5], nepal: [84.0, 28.0], bhutan: [90.4, 27.5], maldives: [73.5, 4.2] },
  'asia-central': { kazakhstan: [67.0, 48.0], uzbekistan: [64.0, 41.5], turkmenistan: [59.0, 39.0], kyrgyzstan: [75.0, 41.5], tajikistan: [71.0, 38.5], armenia: [44.5, 40.2], azerbaijan: [47.5, 40.4], georgia: [43.5, 42.0] },
  'asia-east': { china: [103.0, 35.0], mongolia: [103.0, 46.5], 'north-korea': [127.0, 40.0], 'south-korea': [127.8, 36.5], japan: [138.5, 36.0], taiwan: [121.0, 23.8], myanmar: [96.0, 21.0], thailand: [101.0, 15.0], laos: [103.8, 18.5], cambodia: [105.0, 12.7], vietnam: [105.8, 21.0] },
  'asia-islands': { malaysia: [102.0, 4.0], singapore: [103.8, 1.35], brunei: [114.7, 4.6], indonesia: [117.0, -1.0], philippines: [122.0, 12.5], 'timor-leste': [125.9, -8.8], 'papua-new-guinea': [144.0, -6.0], australia: [134.0, -25.0], 'new-zealand': [172.5, -43.5], fiji: [178.0, -17.8], tonga: [-175.2, -21.2], samoa: [-172.0, -13.7], palau: [134.5, 7.5] }
};
// the places a region lists besides its countries: [kind, count of at least]
const FEATURES = { 'americas-north': ['sea', 'hudson-bay'], 'mexico-central': ['canal', 'panama-canal'], 'south-america': ['river', 'amazon-river'], 'middle-east': ['strait', 'bosporus'],
  'arabia-north-africa': ['canal', 'suez-canal'], 'africa-east': ['lake', 'lake-victoria'], 'asia-south': ['river', 'indus-river'], 'asia-central': ['sea', 'caspian-sea'], 'asia-east': ['river', 'yangtze-river'], 'africa-south': ['desert', 'kalahari'] };
// the countries that have no water at all (a sea, an ocean or a big lake, tools/maps/lakes.mjs: Rwanda's Lake Kivu and Chad's Lake Chad are too small), and the islands that must have a sea:
// what the build computed from the outlines
const LANDLOCKED = { 'south-america': ['bolivia', 'paraguay'], 'americas-north': ['alberta', 'saskatchewan'], 'africa-east': ['south-sudan', 'rwanda', 'ethiopia'], 'africa-south': ['zimbabwe', 'botswana', 'lesotho', 'eswatini'],
  'africa-central': ['mali', 'burkina-faso', 'niger', 'chad', 'central-african-republic'], 'asia-south': ['nepal', 'bhutan', 'afghanistan'], 'asia-central': ['uzbekistan', 'tajikistan', 'kyrgyzstan', 'armenia'], 'asia-east': ['mongolia', 'laos'],
  balkans: ['serbia', 'kosovo', 'north-macedonia'], 'europe-east': ['czechia', 'slovakia', 'hungary', 'moldova', 'belarus'] };
const ISLANDS = { 'asia-south': ['maldives', 'sri-lanka'], 'africa-east': ['comoros', 'seychelles'], 'africa-south': ['madagascar', 'mauritius'], caribbean: ['cuba', 'jamaica', 'barbados', 'puerto-rico'], 'africa-west': ['cape-verde'], 'balkans': ['malta', 'cyprus'], 'africa-central': ['sao-tome-and-principe'] };
const DOTS = { caribbean: ['barbados', 'dominica', 'grenada', 'saint-lucia', 'saint-kitts-and-nevis', 'antigua-and-barbuda', 'saint-vincent-and-the-grenadines'], 'asia-islands': ['singapore', 'fiji', 'tonga', 'samoa', 'palau', 'nauru', 'tuvalu'], 'arabia-north-africa': ['qatar', 'bahrain', 'kuwait'],
  balkans: ['malta'], 'africa-west': ['gambia', 'cape-verde'], 'asia-south': ['maldives'], 'africa-east': ['seychelles', 'comoros'], 'africa-south': ['mauritius'], 'middle-east': ['lebanon', 'palestine'] };
const REGIONS_BUILT = Object.keys(CAPITALS).concat(['world-features']);

async function suite(app) {
  const failures = [];
  let checks = 0;
  const check = (ok, msg) => { checks++; if (!ok) failures.push(msg); };
  const same = (a, b, msg) => check(JSON.stringify(a) === JSON.stringify(b), `${msg}: got ${JSON.stringify(a)}, wanted ${JSON.stringify(b)}`);
  const { mapOf, mapPlace, placeContains, placeAt, scorePlace, mapHtml, mapBlockHtml, PLACE_DOT_TAP } = app;
  const place = (map, id) => map.places.find(p => p.id === id);
  const score = (map, right, tap) => scorePlace({}, { id: 'a', kind: 'place', prompt: 'x', map: map.id, right }, tap);

  /* ---------- every region of the list is built, and every place of it holds what a part asks ---------- */
  for (const [id, cities] of Object.entries(CAPITALS)) {
    const map = mapOf(id), project = projectOf(id), asked = Object.keys(cities);
    same(asked.filter(p => !place(map, p)), [], `${id}: every place the part asks is on the map`);
    for (const [p, [lon, lat]] of Object.entries(cities)) {
      if (!place(map, p)) continue;
      const tap = [...project(lon, lat), 1];
      check(score(map, p, tap) === 'ok', `${id}: a tap at ${lon}, ${lat} is in ${p}`);
    }
    for (const [kind, feature] of [FEATURES[id]].filter(Boolean)) check(place(map, feature) && place(map, feature).kind === kind, `${id}: ${feature} is a ${kind}`);
    for (const p of LANDLOCKED[id] || []) same([p, place(map, p) && place(map, p).water], [p, []], `${id}: ${p} is landlocked`);
    for (const p of ISLANDS[id] || []) check(place(map, p) && place(map, p).water.length > 0, `${id}: ${p} is an island with a sea`);
    for (const p of DOTS[id] || []) check(place(map, p) && !!place(map, p).dot, `${id}: ${p} is a dot`);
    const bad = map.places.filter(p => p.lead !== undefined && !(Array.isArray(p.lead) && p.lead.length === 2 && p.lead.every(Number.isInteger)));
    same(bad.map(p => p.id), [], `${id}: every lead is two whole numbers of pixels (no 'auto' left in the file)`);
    check(map.places.every(p => !p.dot || p.at), `${id}: every dot has a name point`);
  }
  same(REGIONS.map(r => r.id).filter(id => !['world', 'us', 'europe-west'].includes(id)).sort(), [...REGIONS_BUILT].sort(), 'the regions of tools/maps are the 18 of parts 12 to 30 and nothing else');

  /* ---------- facts the build worked out from the outlines ---------- */
  const nb = (m, id) => place(mapOf(m), id).neighbors, wt = (m, id) => place(mapOf(m), id).water;
  same(nb('south-america', 'brazil'), ['argentina', 'bolivia', 'colombia', 'french-guiana', 'guyana', 'paraguay', 'peru', 'suriname', 'uruguay', 'venezuela'], 'Brazil touches ten countries and French Guiana');
  same(nb('south-america', 'french-guiana'), ['brazil', 'suriname'], 'French Guiana touches Brazil and Suriname');
  same(nb('mexico-central', 'panama'), ['colombia', 'costa-rica'], 'Panama touches Costa Rica and Colombia');
  same(nb('mexico-central', 'guatemala'), ['belize', 'el-salvador', 'honduras', 'mexico'], 'Guatemala touches four');
  same([nb('americas-north', 'ontario').includes('quebec'), nb('americas-north', 'ontario').includes('manitoba'), nb('americas-north', 'alberta').includes('united-states')], [true, true, true], 'Ontario touches Quebec and Manitoba, Alberta the United States');
  same(wt('americas-north', 'manitoba'), ['hudson-bay', 'lake-winnipeg'], 'Manitoba is on Hudson Bay and Lake Winnipeg');
  same(nb('balkans', 'kosovo'), ['albania', 'montenegro', 'north-macedonia', 'serbia'], 'Kosovo touches four');
  same(wt('middle-east', 'jordan'), ['red-sea'], 'Jordan is on the Red Sea (the Gulf of Aqaba is part of it)');
  same(wt('arabia-north-africa', 'egypt'), ['mediterranean', 'red-sea'], 'Egypt is on the Mediterranean and the Red Sea');
  same(nb('africa-west', 'gambia'), ['senegal'], 'the Gambia touches only Senegal');
  same(nb('africa-east', 'rwanda'), ['burundi', 'democratic-republic-of-the-congo', 'tanzania', 'uganda'], 'Rwanda touches four');
  same(nb('asia-central', 'uzbekistan'), ['afghanistan', 'kazakhstan', 'kyrgyzstan', 'tajikistan', 'turkmenistan'], 'Uzbekistan touches five');
  same(wt('asia-central', 'kazakhstan'), ['caspian-sea', 'lake-balkhash'], 'Kazakhstan is on the Caspian Sea and Lake Balkhash');
  same(nb('asia-east', 'laos'), ['cambodia', 'china', 'myanmar', 'thailand', 'vietnam'], 'Laos touches five');
  same(nb('asia-south', 'nepal'), ['china', 'india'], 'Nepal touches China and India');

  /* ---------- one water rule: a place's water is its seas, its oceans and the big lakes, and Landlocked is right only where there is none of them ---------- */
  const has = (m, id, ...waters) => same(waters.filter(w => !wt(m, id).includes(w)), [], `${m}: ${id}'s water includes ${waters.join(', ')} (it has ${wt(m, id).join(', ') || 'none'})`);
  has('americas-north', 'ontario', 'lake-superior', 'lake-huron', 'lake-erie', 'lake-ontario', 'hudson-bay', 'james-bay');
  has('americas-north', 'new-brunswick', 'atlantic', 'gulf-of-saint-lawrence');                    // the Bay of Fundy is in the Atlantic, as on the map of the United States
  has('americas-north', 'nova-scotia', 'atlantic');
  has('mexico-central', 'guatemala', 'pacific', 'caribbean-sea');                                  // the Gulf of Honduras
  has('arabia-north-africa', 'morocco', 'atlantic', 'mediterranean');                              // the Alboran Sea
  has('africa-west', 'togo', 'gulf-of-guinea'); has('africa-west', 'benin', 'gulf-of-guinea');     // the Bight of Benin
  has('europe-east', 'russia', 'arctic', 'pacific', 'black-sea', 'baltic-sea', 'caspian-sea');     // Russia's far coasts are water with no shape on this map
  has('africa-east', 'uganda', 'lake-victoria'); has('africa-east', 'kenya', 'indian', 'lake-victoria'); has('africa-east', 'tanzania', 'indian', 'lake-victoria', 'lake-tanganyika');
  has('africa-east', 'burundi', 'lake-tanganyika'); has('africa-east', 'malawi', 'lake-malawi'); has('africa-east', 'zambia', 'lake-tanganyika'); has('africa-south', 'zambia', 'lake-tanganyika');
  has('africa-south', 'malawi', 'lake-malawi'); has('africa-south', 'mozambique', 'indian', 'lake-malawi'); has('africa-east', 'democratic-republic-of-the-congo', 'lake-tanganyika');
  has('asia-east', 'russia', 'lake-baikal', 'pacific'); has('europe-north', 'russia', 'lake-ladoga', 'barents-sea');
  has('us', 'alaska', 'arctic', 'pacific'); has('us', 'michigan', 'lake-michigan', 'lake-superior', 'lake-huron'); has('us', 'ohio', 'lake-erie');
  const rings = (m, id) => place(mapOf(m), id).rings.length;
  same([rings('europe-east', 'arctic'), rings('europe-east', 'pacific'), place(mapOf('europe-east'), 'arctic').at], [0, 0, undefined], 'water a country touches beyond the frame is a place with no shape and no name on the map');
  for (const [m, lakes] of Object.entries({ 'africa-south': ['lake-malawi', 'lake-tanganyika'], 'africa-central': ['lake-victoria', 'lake-tanganyika'], 'asia-east': ['lake-baikal'], 'americas-north': ['lake-superior', 'lake-winnipeg', 'great-bear-lake'], 'europe-north': ['lake-ladoga'], 'asia-central': ['lake-balkhash'] })) {
    same(lakes.filter(l => !(place(mapOf(m), l) && place(mapOf(m), l).kind === 'lake' && mapOf(m).draw.includes('lake'))), [], `${m}: the big lakes in its frame are lakes of the map, drawn on the blank map`);
  }
  same(['rwanda', 'south-sudan', 'ethiopia'].filter(id => wt('africa-east', id).length), [], 'a lake too small to be big (Kivu, Tana) is not water: Rwanda and Ethiopia are still landlocked');
  same([nb('africa-east', 'tanzania').includes('democratic-republic-of-the-congo'), nb('africa-east', 'malawi').includes('tanzania'), nb('africa-east', 'tanzania').includes('uganda')], [true, true, true], 'countries face each other across a lake and are neighbors (Tanzania and the Congo across Lake Tanganyika)');
  const usm = mapOf('us'), arc = place(usm, 'arctic');
  check(arc.kind === 'ocean' && arc.rings.length > 0 && !usm.land.includes('ocean') && score(usm, 'arctic', [...projectOf('us', 'alaska')(-150, 71.3), 1]) === 'ok' && score(usm, 'arctic', [...projectOf('us')(-100, 40), 1]) === 'no', 'the Arctic Ocean is drawn in the Alaska inset, along its top, and is not found in the lower 48');
  same([nb('us', 'ohio').includes('canada'), nb('us', 'michigan').includes('canada')], [false, true], 'a border through a lake that has a state on it is not one (Ohio and Canada in Lake Erie), a border on land is (Michigan and Canada at the St. Marys River)');

  /* ---------- neighbours from the whole world: a window does not cut a country's borders off ---------- */
  const ee = mapOf('europe-east'), shapeless = m => m.places.filter(p => m.land.includes(p.kind) && !p.rings.length && !p.dot);
  same(['norway', 'china', 'mongolia', 'north-korea', 'kazakhstan', 'finland', 'estonia'].filter(id => !nb('europe-east', 'russia').includes(id)), [], 'Russia on the map of eastern Europe has the neighbours the window cuts off');
  same(['china', 'mongolia', 'north-korea'].map(id => { const p = place(ee, id); return [p.kind, p.rings.length, p.at, p.dot, p.neighbors, p.water, p.name.length > 0]; }),
    ['china', 'mongolia', 'north-korea'].map(() => ['country', 0, undefined, undefined, undefined, undefined, true]), 'a neighbour beyond the frame is a country with a name and no shape, no neighbours and no water of its own');
  check(score(ee, 'china', [0, 0, 1]) === 'no' && score(ee, 'china', [ee.size[0] / 2, ee.size[1] / 2, 1]) === 'no', 'a neighbour with no shape cannot be tapped');
  for (const m of REGIONS.filter(r => r.borders).map(r => ({ ...mapOf(r.id), id: r.id }))) {
    const ids = new Set(m.places.map(p => p.id)), land = m.places.filter(p => m.land.includes(p.kind) && p.neighbors);
    same(land.flatMap(p => p.neighbors.filter(n => !ids.has(n)).map(n => `${m.id}: ${p.id} > ${n}`)), [], `${m.id}: every neighbour is a place of the map`);
    same(land.flatMap(p => p.neighbors.filter(n => place(m, n).neighbors && !place(m, n).neighbors.includes(p.id)).map(n => `${p.id} > ${n}`)), [], `${m.id}: if A borders B and both show, B borders A`);
    same(shapeless(m).filter(p => !m.places.some(q => q.neighbors && q.neighbors.includes(p.id))).map(p => p.id), [], `${m.id}: a country with no shape is there only as a neighbour of one that shows`);
  }
  same([nb('africa-south', 'botswana').includes('zambia'), nb('africa-south', 'zambia').includes('botswana'), nb('africa-south', 'namibia').includes('zimbabwe')], [true, true, false], 'Botswana and Zambia meet at Kazungula, a border of 150 m that the data draws as a point; Namibia and Zimbabwe meet at the same point and have none');
  same([nb('south-america', 'brazil').includes('french-guiana'), nb('south-america', 'brazil').includes('france'), nb('arabia-north-africa', 'france').includes('brazil'), nb('europe-west', 'france').includes('suriname')], [true, false, false, false], 'France\'s polygon in South America is French Guiana\'s: Brazil is its neighbour, not France\'s');
  same([nb('europe-west', 'poland').includes('belarus'), nb('europe-west', 'poland').includes('russia'), nb('europe-west', 'spain').join()], [true, true, 'andorra,france,portugal'], 'Poland on the map of western Europe has Belarus and Russia beside it, Spain its three');
  same([nb('us', 'mexico').includes('guatemala'), nb('us', 'mexico').includes('belize'), nb('us', 'mexico').includes('united-states'), nb('us', 'canada').includes('united-states')], [true, true, false, false], 'Mexico on the map of the states has Guatemala and Belize; the United States is its states, so it is not a place to be a neighbour');
  check(nb('americas-north', 'british-columbia').includes('alaska') || nb('americas-north', 'yukon').includes('united-states'), 'a province is beside the United States on the map of Canada');
  same([place(mapOf('americas-north'), 'quebec').name, place(mapOf('world-features'), 'quebec')], ['Quebec', undefined], 'Quebec has the plain English name the lessons use, said once in the map data');

  /* ---------- the coast rule, and the limits of S-23 ---------- */
  same(wt('balkans', 'greece'), ['aegean', 'ionian', 'mediterranean'], 'Greece is not on the Adriatic (Natural Earth\'s Adriatic reaches Corfu; S-23 ends it at the line from Leuca to Linguetta)');
  has('balkans', 'albania', 'adriatic', 'ionian');                                                  // Saranda is on the Ionian
  has('balkans', 'albania', 'adriatic'); has('balkans', 'croatia', 'adriatic'); has('balkans', 'italy', 'adriatic', 'ionian'); has('europe-west', 'italy', 'adriatic');
  has('europe-east', 'russia', 'black-sea', 'baltic-sea', 'sea-of-azov', 'caspian-sea'); has('middle-east', 'russia', 'black-sea', 'caspian-sea');   // a long coast keeps its real seas in any window
  for (const m of ['middle-east', 'arabia-north-africa']) {
    has(m, 'israel', 'red-sea', 'mediterranean'); has(m, 'jordan', 'red-sea');                          // the Gulf of Aqaba is the Red Sea: Eilat's 11 km are a coast
  }
  same(['barbados', 'antigua-and-barbuda', 'dominica', 'saint-kitts-and-nevis', 'saint-lucia', 'grenada', 'saint-vincent-and-the-grenadines'].filter(id => !(wt('caribbean', id).includes('atlantic') && wt('caribbean', id).includes('caribbean-sea'))), [],
    'the islands of the Lesser Antilles face the Atlantic and the Caribbean Sea both (the data\'s Caribbean Sea is drawn across the chain)');
  same(wt('caribbean', 'jamaica'), ['caribbean-sea'], 'Jamaica, well off the Atlantic, is on the Caribbean Sea only');
  // a marginal sea is part of its ocean in S-23 (limits.mjs), the ocean being a place of the map; the Mediterranean and its seas are not the Atlantic's
  const partOfs = REGIONS.filter(r => r.borders || r.id === 'world-features').flatMap(r => mapOf(r.id).places.filter(p => p.partOf).map(p => ({ map: r.id, ...p })));
  same(partOfs.filter(p => !(place(mapOf(p.map), p.partOf) && place(mapOf(p.map), p.partOf).kind === 'ocean')).map(p => `${p.map}/${p.id}`), [], 'a sea is part of an ocean that is a place of its map');
  same(partOfs.filter(p => PART_OF[p.partOf] ? !PART_OF[p.partOf].includes(p.id) : true).map(p => p.id), [], 'every partOf in the data is one S-23 gives');
  same(['europe-west/bay-of-biscay/atlantic', 'europe-west/north-sea/atlantic', 'americas-north/labrador-sea/atlantic', 'africa-east/gulf-of-aden/indian', 'caribbean/caribbean-sea/atlantic', 'asia-east/east-china-sea/pacific', 'europe-north/barents-sea/undefined']
    .filter(k => { const [m, id, parent] = k.split('/'); return String(place(mapOf(m), id).partOf) !== parent; }), [], 'the Bay of Biscay, the North Sea, the Labrador Sea, the Gulf of Aden and the others are part of their oceans');
  same(['mediterranean', 'adriatic', 'ionian', 'aegean', 'tyrrhenian', 'gulf-of-lion', 'black-sea', 'caspian-sea', 'sea-of-azov'].flatMap(id => REGIONS.flatMap(r => { const mp = mapOf(r.id).places && mapOf(r.id).places.find(p => p.id === id); return mp && mp.partOf ? [`${r.id}/${id}`] : []; })), [], 'the Mediterranean, its seas, the Black Sea, Azov and the Caspian are part of no ocean');
  {
    // the rule on made-up islands: a circle of coast and a sea box that reaches the east of it, the box 0.12 degrees (the reach) clear of the spot it is meant to touch
    const circle = (r, n = 3600) => Array.from({ length: n }, (_, i) => [r * Math.cos(2 * Math.PI * i / n), r * Math.sin(2 * Math.PI * i / n)]);
    const eastSea = x => ({ id: 'east', kind: 'sea', rings: [[[x + 0.12, -3], [x + 3, -3], [x + 3, 3], [x + 0.12, 3]]] }), owners = new Map();
    same(waterOf({ id: 'small', rings: [circle(0.24)] }, owners, [eastSea(0.234)]), ['east'], 'a sea along 12 km of a 170 km coast, 7% of it, is the place\'s water (Israel at Eilat)');
    same(waterOf({ id: 'big', rings: [circle(2)] }, owners, [eastSea(1.9995)]), [], 'a sea along 10 km of a 1,400 km coast is not (the 15 km floor)');
    same(waterOf({ id: 'big', rings: [circle(2)] }, owners, [eastSea(1.99)]), ['east'], 'a sea along 40 km of it is');
    const far = { id: 'far', kind: 'ocean', rings: [[[1.9, -1], [3, -1], [3, 2], [1.9, 2]]] }, ring = [[0, 0], [1, 0], [1, 1], [0, 1]];
    same(waterOf({ id: 'i', dot: true, rings: [ring] }, owners, [far]), ['far'], 'an island state is on an ocean within the island reach of its shore');
    same(waterOf({ id: 'i', rings: [ring] }, owners, [far]), [], 'a country that is not an island state is not on an ocean that far off');
    // S-23 cuts the Adriatic at the line from Leuca to Linguetta
    const cut = limited('adriatic', { id: 'adriatic', rings: [[[17, 38], [21, 38], [21, 42], [17, 42]].map(p => [...p, 0])] });
    check(cut.rings.length === 1 && cut.rings[0].every(([lon, lat]) => lat >= 39.8 - 1e-9 || lon < 19.4) && !cut.rings[0].some(([lon, lat]) => lon > 19.5 && lat < 40.4), 'the Adriatic is cut at the line from Cape Santa Maria di Leuca to Cape Linguetta');
  }

  /* ---------- straits and canals: an outline, or a point given by hand; a canal is a band ---------- */
  const me = mapOf('middle-east'), bos = place(me, 'bosporus'), hor = place(me, 'strait-of-hormuz');
  same([bos.kind, bos.rings.length > 0, hor.kind, hor.rings.length, !!hor.dot], ['strait', true, 'strait', 0, true], 'the Bosporus has an outline and the Strait of Hormuz only a point');
  const r = me.size[0] * PLACE_DOT_TAP, [hx, hy] = [hor.dot[0] / 10, hor.dot[1] / 10];
  same([score(me, 'strait-of-hormuz', [hx, hy, 1]), score(me, 'strait-of-hormuz', [hx + r * 0.9, hy, 1]), score(me, 'strait-of-hormuz', [hx + r * 1.3, hy, 1]), score(me, 'strait-of-hormuz', [hx + r * 0.5, hy, 4])], ['ok', 'ok', 'no', 'no'], 'Hormuz is found within the radius of its point, and less far when the map is zoomed in');
  check(!mapHtml(me, {}).includes('strait-of-hormuz') && /mp-dot lit" data-place="strait-of-hormuz"/.test(mapHtml(me, { lit: ['strait-of-hormuz'] })), 'a strait with no outline is not on the blank map and shows as its dot once lit');
  const mc = mapOf('mexico-central'), canal = place(mc, 'panama-canal'), pan = projectOf('mexico-central');
  check(canal.line && canal.kind === 'canal' && !mc.draw.includes('canal') && score(mc, 'panama-canal', [...pan(-79.75, 9.12), 1]) === 'ok' && score(mc, 'panama-canal', [...pan(-84, 10), 1]) === 'no', 'the Panama Canal is a line of the kind canal, found beside it and not in Costa Rica');
  const ar = mapOf('arabia-north-africa'), suez = projectOf('arabia-north-africa');
  check(score(ar, 'suez-canal', [...suez(32.55, 30.5), 1]) === 'ok' && score(ar, 'suez-canal', [...suez(30.0, 27.0), 1]) === 'no', 'the Suez Canal is found beside it and not in the desert of Egypt');
  const wf = mapOf('world-features'), wp = projectOf('world-features');
  for (const id of ['bering-strait', 'strait-of-gibraltar', 'bosporus', 'strait-of-hormuz', 'panama-canal', 'suez-canal', 'sahara', 'gobi', 'arabian-desert', 'outback', 'kalahari', 'rocky-mountains', 'andes', 'alps', 'himalayas', 'urals', 'atlas',
    'amazon-river', 'nile-river', 'yangtze-river', 'mississippi-river', 'danube-river', 'mekong-river', 'mediterranean', 'caribbean-sea', 'gulf-of-mexico', 'english-channel', 'black-sea', 'red-sea', 'persian-gulf']) check(!!place(wf, id), `world-features holds ${id}`);
  same(['pacific', 'atlantic', 'indian', 'southern', 'arctic'].filter(id => !place(wf, id)), [], 'and the five oceans');
  check(score(wf, 'bering-strait', [...wp(-168.9, 65.8), 1]) === 'ok' && score(wf, 'sahara', [...wp(10, 25), 1]) === 'ok' && score(wf, 'sahara', [...wp(30, 50), 1]) === 'no', 'the Bering Strait is found at its point, the Sahara at 10 E 25 N and not at 30 E 50 N');

  /* ---------- the cities of the United States: dots of the kind city ---------- */
  const us = mapOf('us'), cities = us.places.filter(p => p.kind === 'city'), at = (lon, lat, part = null) => [...projectOf('us', part)(lon, lat), 1];
  const CAPITAL_IDS = ['montgomery', 'juneau', 'phoenix', 'little-rock', 'sacramento', 'denver', 'hartford', 'dover', 'tallahassee', 'atlanta', 'honolulu', 'boise', 'springfield', 'indianapolis', 'des-moines', 'topeka', 'frankfort', 'baton-rouge', 'augusta', 'annapolis',
    'boston', 'lansing', 'st-paul', 'jackson', 'jefferson-city', 'helena', 'lincoln', 'carson-city', 'concord', 'trenton', 'santa-fe', 'albany', 'raleigh', 'bismarck', 'columbus', 'oklahoma-city', 'salem', 'harrisburg', 'providence', 'columbia', 'pierre',
    'nashville', 'austin', 'salt-lake-city', 'montpelier', 'richmond', 'olympia', 'charleston', 'madison', 'cheyenne'];
  same(CAPITAL_IDS.filter(id => !cities.some(c => c.id === id)), [], 'all fifty state capitals are cities of the map');
  check(cities.length >= 50 + 40 - 14 && cities.length < 100, `the cities are the capitals and about twenty big cities west and twenty east of the Mississippi (${cities.length})`);
  check(cities.every(c => c.dot && c.rings.length === 0 && c.at && !c.line && !c.neighbors && !c.water) && !us.land.includes('city') && !us.draw.includes('city') && !us.labelled.includes('city'), 'a city is a dot with no outline, not ground, not drawn on the blank map and not named by `labels: true`');
  check(new Set(us.places.map(p => p.id)).size === us.places.length && ['new-york-city', 'washington-dc', 'dallas-fort-worth', 'minneapolis-st-paul', 'st-louis'].every(id => cities.some(c => c.id === id)), 'a city never takes the id of a state: New York City and Washington, D.C.');
  const found = { denver: [-104.99, 39.74, 'colorado'], boston: [-71.06, 42.36, 'massachusetts'], chicago: [-87.63, 41.88, 'illinois'], austin: [-97.74, 30.27, 'texas'], seattle: [-122.33, 47.61, 'washington'], atlanta: [-84.39, 33.75, 'georgia'], pierre: [-100.35, 44.37, 'south-dakota'], 'salt-lake-city': [-111.89, 40.76, 'utah'], helena: [-112.04, 46.59, 'montana'] };
  for (const [id, [lon, lat, state]] of Object.entries(found)) {
    const tap = at(lon, lat), asked = place(us, id);
    check(score(us, id, tap) === 'ok' && score(us, state, tap) === 'ok', `a tap on ${id} is on the city and in ${state}`);
    check(Math.hypot(asked.dot[0] / 10 - tap[0], asked.dot[1] / 10 - tap[1]) < 4, `${id}'s dot is where the city is`);
  }
  const hon = place(us, 'honolulu'), anc = place(us, 'anchorage');
  check(score(us, 'honolulu', at(-157.86, 21.31, 'hawaii')) === 'ok' && score(us, 'anchorage', at(-149.9, 61.22, 'alaska')) === 'ok' && hon.dot && anc.dot, 'Honolulu and Anchorage are found on their insets');
  const den = place(us, 'denver'), [dx, dy] = [den.dot[0] / 10, den.dot[1] / 10], rad = us.size[0] * PLACE_DOT_TAP;
  same([score(us, 'denver', [dx + rad * 0.9, dy, 1]), score(us, 'denver', [dx + rad * 1.3, dy, 1]), score(us, 'denver', [dx + rad * 0.5, dy, 4])], ['ok', 'no', 'no'], 'a city is found within the radius of a dot, which shrinks as the map is zoomed in');
  same([placeAt(us, dx, dy, 1, 'city'), placeAt(us, dx, dy, 1, 'state'), placeAt(us, dx + rad * 3, dy, 1, 'city')], ['denver', 'colorado', 'kansas'], 'a tap on a city asked for is named for it, one asked for a state is named for the state, and one off every dot (the plains east of Denver) is the state it is in');
  const blank = mapHtml(us, {}), lit = mapHtml(us, { lit: ['denver'] }), named = mapBlockHtml({ kind: 'map', region: 'us', lit: ['denver'] }, {});
  check(!blank.includes('denver') && /mp-dot lit" data-place="denver"/.test(lit) && />Denver</.test(named) && !/>Cheyenne</.test(named), 'the blank map has no city; a lit city is a dot, and named on its map');
  check(!mapBlockHtml({ kind: 'map', region: 'us', labels: true }, {}).includes('>Denver<'), 'a map that names everything it labels does not name the cities');
  const crowded = ['new-york-city', 'philadelphia', 'baltimore', 'washington-dc', 'boston'].map(id => place(us, id));
  check(crowded.filter(c => c.lead).length >= 3 && crowded.every(c => !c.lead || (Math.abs(c.lead[0]) + Math.abs(c.lead[1]) > 0)), 'the cities of the Northeast corridor that crowd have a lead; none has an empty one');

  /* ---------- the cities of the world map (parts 31 and 32): the pairs a distance and a direction are asked of ---------- */
  const world = mapOf('world'), wcities = world.places.filter(p => p.kind === 'city'), project = projectOf('world');
  const PAIRS = { 'san-diego': [-117.16, 32.72], reno: [-119.85, 39.53], 'los-angeles': [-118.24, 34.05], rome: [12.48, 41.89], philadelphia: [-75.16, 39.95], santiago: [-70.65, -33.45], 'new-york-city': [-74.0, 40.71],
    lima: [-77.04, -12.05], miami: [-80.19, 25.77], paris: [2.35, 48.86], seattle: [-122.33, 47.61] };
  same(Object.keys(PAIRS).filter(id => !wcities.some(c => c.id === id)), [], 'the cities the pairs of parts 31 and 32 name are on the world map');
  check(wcities.length >= 40 && wcities.length <= 45, `the world map holds about 40 cities (${wcities.length})`);
  check(wcities.every(c => c.dot && c.rings.length === 0 && c.at && !c.line && !c.neighbors && !c.water && (c.lead === undefined || (Array.isArray(c.lead) && c.lead.every(Number.isInteger)))), 'a world city is a dot with no outline and a whole-pixel lead, as a city of the United States is');
  check(!world.land.includes('city') && !world.draw.includes('city') && !world.labelled.includes('city') && !mapHtml(world, {}).includes('paris') && /mp-dot lit" data-place="paris"/.test(mapHtml(world, { lit: ['paris'] })), 'a city is not on the blank world map, and is a dot once lit');
  for (const [id, [lon, lat]] of Object.entries(PAIRS)) {
    const dotAt = place(world, id).dot.map(v => v / 10), tap = project(lon, lat);
    check(Math.hypot(dotAt[0] - tap[0], dotAt[1] - tap[1]) < 3 && score(world, id, [...tap, 1]) === 'ok', `${id}'s dot is where the city is, and a tap on it finds it`);
  }
  same(['new-york-city', 'los-angeles', 'san-diego', 'seattle', 'philadelphia', 'miami', 'chicago', 'honolulu', 'anchorage'].filter(id => !(place(us, id) && place(world, id) && place(us, id).name === place(world, id).name)), [], 'a city of both maps is one id and one name on both');
  check(wcities.filter(c => c.lead).length >= 8 && ['new-york-city', 'philadelphia', 'san-diego', 'los-angeles'].every(id => place(world, id).lead), 'the cities that crowd (the American coasts, western Europe) have a lead so their names read');
  return { checks, failures };
}

const run = await suite(await loadApp({ fixture: true }));
if (run.failures.length) {
  console.error(`✗ ${run.failures.length} of ${run.checks} map data checks failed:`);
  run.failures.slice(0, 60).forEach(f => console.error('  - ' + f));
  process.exit(1);
}
console.log(`✓ ${run.checks} map data checks passed`);
