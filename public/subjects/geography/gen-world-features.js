// Geography, the world's water, mountains and deserts: the one group of places part 30 asks about, made into questions in two forms (a name to tap, a lit place to name) from the
// map data `world-features`. Thirteen places, the ones the map's builder lists as what part 30 adds to what the regions place (tools/maps/regions-world.mjs, ADDED): three seas
// and channels (the Mediterranean, the English Channel, the Bering Sea), two straits (Gibraltar, Bering), the Mississippi, four ranges (the Rockies, the Urals, the Atlas, the Alps) and three
// deserts (the Gobi, the Arabian Desert, the Outback). The Mississippi and the Rockies are met again here on the world map, at the scale of the world; the rest are not asked as places in any
// lesson before this one (the regions' own lessons place the others they hold: the Andes, the Amazon, the Danube, the Himalayas, the Nile, the Sahara and so on).
// A feature has no neighbors and no water in the map data to ask a neighbor-and-water question of, so it is asked in two forms only. Each place's feedback is the way of thinking in lines
// written here (area, then what it lies between, then its water, then what tells it from the place it is mixed up with): the continent or ocean it is in or beside first, as a geographer
// finds a feature. Facts: the map data (Natural Earth, public domain) for where each lies; the standard reference works (Encyclopaedia Britannica, the CIA World Factbook "Geography" entries)
// for what each is. The Arabian Desert is Natural Earth's polygon named Rub' al Khali (the Empty Quarter, the sandy south of the desert); the Outback is Natural Earth's Great Sandy, Great
// Victoria and Gibson deserts (it has no Outback of its own): the lines say so.
(() => {
  const WORDS = { tap: 'Tap it on the map.', name: 'What is the lit place called?' };
  const feature = (id, name, accept, area, between, water, cue) => ({ id, name, accept, reason: [`Area: ${area}.`, `Between: ${between}.`, `Water: ${water}.`, ...(cue ? [cue] : [])] });
  const PLACES = [
    feature('mediterranean', 'Mediterranean Sea', ['Mediterranean Sea', 'Mediterranean'],
      'a big sea in the middle of the old world, where Europe, Africa and Asia meet',
      'Europe is on its north, Africa on its south and Asia at its eastern end',
      'it opens to the Atlantic Ocean at the Strait of Gibraltar in the west and to the Red Sea through the Suez Canal in the southeast'),
    feature('english-channel', 'English Channel', ['English Channel', 'Channel'],
      'a narrow sea in the far west of Europe',
      'England is on its north side and France on its south side',
      'it joins the Atlantic Ocean on the west to the North Sea on the east',
      'Tell it from the Strait of Gibraltar: the Channel is the wider waterway in the north, between England and France; Gibraltar is the narrow gap far to the south, between Spain and Morocco.'),
    feature('bering-sea', 'Bering Sea', ['Bering Sea'],
      'a sea at the top of the Pacific, in the far northwest of North America and the far northeast of Asia',
      'Alaska is on its east and Russia\'s far east on its west, with the Aleutian Islands curving across its south',
      'it is the northern part of the Pacific Ocean, and it reaches the Arctic Ocean through the Bering Strait; the world map is cut at the date line, so the Bering Sea shows at the left edge and again at the right edge',
      'Tell it from the Bering Strait: the sea is the wide water; the strait is the narrow gap at its top.'),
    feature('strait-of-gibraltar', 'Strait of Gibraltar', ['Strait of Gibraltar', 'Straits of Gibraltar', 'Gibraltar'],
      'the far southwest of Europe, where Europe comes nearest to Africa',
      'Spain is on its north side and Morocco on its south side',
      'it joins the Atlantic Ocean on the west to the Mediterranean Sea on the east',
      'Tell it from the English Channel: Gibraltar is the narrow gap in the south, between Spain and Morocco; the Channel is the wider waterway in the north, between England and France.'),
    feature('bering-strait', 'Bering Strait', ['Bering Strait', 'Bering Straits'],
      'the far northwest of North America, where it comes nearest to Asia',
      'Russia\'s far east is on its west side and Alaska on its east side',
      'it joins the Bering Sea on its south to the Arctic Ocean on its north; the world map is cut at the date line, which runs through the strait, so look at the left edge, by Alaska\'s western tip',
      'Tell it from the Bering Sea: the strait is the narrow gap; the sea is the wide water south of it.'),
    feature('mississippi-river', 'Mississippi River', ['Mississippi River', 'Mississippi'],
      'the middle of North America, in the United States',
      'it runs straight south from Minnesota, near the Great Lakes, with the Midwest and the South on its banks',
      'it ends in the Gulf of Mexico, the sea at the bottom of the United States'),
    feature('rocky-mountains', 'Rocky Mountains', ['Rocky Mountains', 'Rockies'],
      'the west of North America, inland from the Pacific Ocean',
      'they run from Canada down through the United States to New Mexico, with the Pacific far on their west and the flat Great Plains on their east',
      'no sea touches them; they are high inland',
      'Tell them from the Urals: the Rockies run down the west of North America; the Urals divide Europe from Asia.'),
    feature('urals', 'The Urals', ['The Urals', 'Ural Mountains'],
      'Russia, where Europe meets Asia: the range is the line the two continents are divided on',
      'they run north to south, with Europe on their west and Siberia, in Asia, on their east',
      'the Arctic Ocean is at their northern end',
      'Tell them from the Rockies: the Urals divide Europe from Asia; the Rockies run down the west of North America.'),
    feature('atlas', 'The Atlas Mountains', ['The Atlas Mountains', 'Atlas'],
      'the northwest of Africa',
      'they run across Morocco, Algeria and Tunisia, with the Mediterranean on their north and the Sahara on their south',
      'the Mediterranean lies to the north and the Atlantic Ocean to the west',
      'Tell them from the Alps: the Atlas are in Africa, south of the Mediterranean; the Alps are in Europe, north of Italy.'),
    feature('alps', 'The Alps', ['The Alps'],
      'the middle of southern Europe',
      'they arch from France through Switzerland and northern Italy to Austria, north of Italy and south of Germany',
      'no ocean touches them; the Rhine, the Rhône and the Po rise in them',
      'Tell them from the Atlas: the Alps are in Europe, north of Italy; the Atlas are in Africa, south of the Mediterranean.'),
    feature('gobi', 'The Gobi', ['The Gobi', 'Gobi Desert'],
      'the east of Asia, far from any ocean',
      'it straddles the border between Mongolia on the north and China on the south',
      'none; it is the cold, dry heart of Asia, far from any sea',
      'Tell it from the other two deserts: the Gobi is in the east of Asia, on the Mongolia and China line; the Arabian Desert is in the southwest of Asia; the Outback is in Australia.'),
    feature('arabian-desert', 'The Arabian Desert', ['The Arabian Desert', 'Rub al Khali', 'The Empty Quarter'],
      'Western Asia, on the Arabian Peninsula; the desert covers most of Saudi Arabia, and the map marks its sandy southern heart, the Rub\' al Khali, or Empty Quarter',
      'the Red Sea is on the west of the peninsula and the Persian Gulf on its east',
      'the Arabian Sea lies to the south, while the desert itself is dry for hundreds of miles inland',
      'Tell it from the other two deserts: the Arabian Desert is in the southwest of Asia, on the Arabian Peninsula; the Gobi is in the east of Asia; the Outback is in Australia.'),
    feature('outback', 'The Outback', ['The Outback', 'The Australian Outback'],
      'Australia, the continent that makes up most of Oceania, at its west; the Outback is its dry, empty inland, and the map marks the Great Sandy, Gibson and Great Victoria deserts of it',
      'it lies far from the coast, with the Indian Ocean on the west and the better-watered east coast far beyond',
      'no sea touches the inland desert; the Indian Ocean is to the west and the Southern Ocean to the south',
      'Tell it from the other two deserts: the Outback is in Australia, in the far south of the map; the Gobi is in the east of Asia; the Arabian Desert is in the southwest of Asia.')
  ];
  // the look-alikes: places mixed up with each other (the subject's lists.slip), keyed by place
  const pairs = (slip, ids) => Object.fromEntries(ids.map(id => [id, slip]));

  FC.gen('geography', [
    { id: 'g-world-features', strand: 'world-features',
      places: { map: 'world-features', forms: ['tap', 'name'], words: WORDS,
        slips: { ...pairs('bering-sea-strait', ['bering-sea', 'bering-strait']), ...pairs('alps-atlas', ['alps', 'atlas']), ...pairs('three-deserts', ['gobi', 'arabian-desert', 'outback']),
          ...pairs('gibraltar-channel', ['strait-of-gibraltar', 'english-channel']) },
        list: PLACES } }
  ]);

  // ---------- the worked cases of part 30, each shown done before the learner's first try, in the steps of the way of thinking: the area first (a continent or an ocean), then what the
  // feature lies between, then its water; each uses only what the names screens showed and ends on the place's own lines (the same shapes as items-worked-us.js) ----------
  const gens = FC.get('geography').gens, groupOf = id => gens[id].places;
  const lineOf = (gen, id) => groupOf(gen).list.find(p => p.id === id).reason;
  const step = (id, does, working) => ({ id, does, working });
  const AREA = 'Area: which continent or ocean is it in or beside?', BETWEEN = 'Between: what does it lie between?', WATER = 'Water: what water is it on?';
  const G = 'g-world-features', S = 'world-features', M = groupOf(G).map;
  FC.items('geography', [
    { id: 'w-tap-gibraltar', strand: S, facets: { form: 'tap' }, blocks: [{ kind: 'prose', text: 'Strait of Gibraltar' }],
      asks: [{ id: 'where', kind: 'place', prompt: groupOf(G).words.tap, map: M, right: 'strait-of-gibraltar' }], reason: lineOf(G, 'strait-of-gibraltar'), steps: [
        step('area', AREA, 'A strait is a narrow gap of water between two lands. This one is where Europe comes nearest to Africa, at the far southwest of Europe. Start from the Mediterranean, the sea named on the Mediterranean screen, and follow it west to its far end.'),
        step('between', BETWEEN, 'At that end Spain, which you placed in an earlier part, is on the north side and Morocco, where the Atlas Mountains named on the same screen run, is on the south side. The strait is the gap between them.'),
        step('water', WATER, 'It joins the Mediterranean on the east to the Atlantic Ocean on the west. Tap the gap where the Mediterranean ends.')] },
    { id: 'w-name-mediterranean', strand: S, facets: { form: 'name' }, blocks: [{ kind: 'prose', text: groupOf(G).words.name }, { kind: 'map', region: M, lit: ['mediterranean'] }],
      asks: [{ id: 'name', kind: 'text', prompt: groupOf(G).words.name, accept: groupOf(G).list.find(p => p.id === 'mediterranean').accept }], reason: lineOf(G, 'mediterranean'), steps: [
        step('area', AREA, 'The lit sea is a big one, in the middle of the old world, with Europe above it and Africa below it.'),
        step('between', BETWEEN, 'It is the long sea reaching east from the Strait of Gibraltar, with the Alps near its north shore and the Atlas Mountains near its south shore, as the Mediterranean screen showed.'),
        step('water', WATER, 'It is shut in between the continents and opens to the Atlantic only at Gibraltar, in the west; the Suez Canal leaves it at the southeast. A sea shut in like that, between Europe and Africa, is the Mediterranean.')] },
    { id: 'w-tap-gobi', strand: S, facets: { form: 'tap' }, blocks: [{ kind: 'prose', text: 'The Gobi' }],
      asks: [{ id: 'where', kind: 'place', prompt: groupOf(G).words.tap, map: M, right: 'gobi' }], reason: lineOf(G, 'gobi'), steps: [
        step('area', AREA, 'A desert is found by its continent first. The Gobi is in Asia, the biggest continent, in the east and the middle of it.'),
        step('between', BETWEEN, 'It lies on the border between Mongolia and China, which you placed in earlier parts, above (north of) the Himalayas named on the Asia screen. The Arabian Desert is much farther west.'),
        step('water', WATER, 'No sea touches it: it is far inland, the dry heart of Asia. Tap the desert in the east of Asia, north of the Himalayas.')] }
  ]);
})();
