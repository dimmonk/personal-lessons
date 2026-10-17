// Geography, the world on one map: the three groups of places parts 1, 1b and 1c ask about, made into questions in two forms (a name to tap, a lit place to
// name) from the map data `world`: the seven continents and the five oceans (part 1), then the parts of the continents that later parts use: those of
// North America, Europe and Africa (part 1b), and those of Asia and Oceania (part 1c).
// Each place's line names the unit it sits in and what is beside it: the one line the feedback shows (lesson standard 3.5).
(() => {
  const place = (id, name, reason, accept = [name]) => ({ id, name, accept, reason });

  FC.gen('geography', [
    { id: 'g-world-big', strand: 'world', places: { map: 'world', forms: ['tap', 'name'], words: { tap: 'Tap it on the map.', name: 'What is the lit place called?' },
      list: [
      place('north-america', 'North America', 'North America is the continent at the top left of the map, from Canada and Alaska down to Panama, between the Pacific and the Atlantic.'),
      place('south-america', 'South America', 'South America is the continent below North America, joined to it at Panama, between the Pacific and the Atlantic.'),
      place('europe', 'Europe', 'Europe is the small continent north of Africa and west of Asia, joined to Asia on land, with the Atlantic to its west.'),
      place('africa', 'Africa', 'Africa is the big continent at the middle of the map, south of Europe across the Mediterranean, between the Atlantic and the Indian Ocean.'),
      place('asia', 'Asia', 'Asia is the biggest continent, east of Europe and Africa, from the Arctic down to the Indian Ocean and across to the Pacific.'),
      place('oceania', 'Oceania', 'Oceania is Australia, New Zealand and the islands around them, at the bottom right of the map, between the Indian Ocean and the Pacific.'),
      place('antarctica', 'Antarctica', 'Antarctica is the frozen continent at the bottom of the map, around the South Pole, with the Southern Ocean all around it.'),
      place('pacific', 'Pacific Ocean', 'The Pacific is the biggest ocean, between the Americas on one side and Asia and Oceania on the other; on this map it shows at both edges.', ['Pacific Ocean', 'Pacific']),
      place('atlantic', 'Atlantic Ocean', 'The Atlantic is the ocean between the Americas to its west and Europe and Africa to its east.', ['Atlantic Ocean', 'Atlantic']),
      place('indian', 'Indian Ocean', 'The Indian Ocean is the ocean south of Asia, between Africa to its west and Australia to its east.', ['Indian Ocean', 'Indian']),
      place('arctic', 'Arctic Ocean', 'The Arctic is the small frozen ocean at the very top of the map, around the North Pole, north of North America, Europe and Asia.', ['Arctic Ocean', 'Arctic']),
      place('southern', 'Southern Ocean', 'The Southern Ocean is the ocean all around Antarctica, at the bottom of the map.', ['Southern Ocean', 'Southern', 'Antarctic Ocean'])
    ] } },
    { id: 'g-world-parts-west', strand: 'world', places: { map: 'world', forms: ['tap', 'name'], words: { tap: 'Tap it on the map.', name: 'What is the lit part called?' },
      slips: { 'central-asia': 'two-centrals' }, list: [
      place('northern-america', 'Northern America', 'Northern America is the top of North America: Canada, the United States and Greenland, with Central America below it.'),
      place('central-america', 'Central America', 'Central America is the narrow part of North America from Mexico down to Panama, between the Pacific and the Caribbean Sea.'),
      place('the-caribbean', 'The Caribbean', 'The Caribbean is the islands of North America in the Caribbean Sea, east of Central America and south of Florida.', ['The Caribbean']),
      place('northern-europe', 'Northern Europe', 'Northern Europe is the top of Europe: the British Isles, the Nordic countries and the Baltic states, with Western Europe below it.'),
      place('western-europe', 'Western Europe', 'Western Europe is the part of Europe from France to Germany and the Alps, between Northern Europe and Southern Europe, with Eastern Europe to its east.'),
      place('southern-europe', 'Southern Europe', 'Southern Europe is the part of Europe on the Mediterranean, from Spain and Portugal through Italy to Greece and the Balkans.'),
      place('eastern-europe', 'Eastern Europe', 'Eastern Europe is the part of Europe east of Western Europe, from Poland to Russia, with Asia beyond it.'),
      place('northern-africa', 'Northern Africa', 'Northern Africa is the top of Africa on the Mediterranean, from Morocco to Egypt, with the Sahara in it and West Africa below it.', ['Northern Africa', 'North Africa']),
      place('west-africa', 'West Africa', 'West Africa is the bulge of Africa on the Atlantic, south of Northern Africa and west of Central Africa.'),
      place('central-africa', 'Central Africa', 'Central Africa is the middle of Africa, east of West Africa and west of East Africa, with Southern Africa below it.'),
      place('east-africa', 'East Africa', 'East Africa is the side of Africa on the Indian Ocean, from the Horn down to Mozambique, east of Central Africa.'),
      place('southern-africa', 'Southern Africa', 'Southern Africa is the bottom of Africa, from Namibia and Botswana down to South Africa, between the Atlantic and the Indian Ocean.'),
    ] } },
    { id: 'g-world-parts-east', strand: 'world', places: { map: 'world', forms: ['tap', 'name'], words: { tap: 'Tap it on the map.', name: 'What is the lit part called?' },
      slips: { 'central-america': 'two-centrals' }, list: [
      place('western-asia', 'Western Asia', 'Western Asia is the part of Asia next to Europe and Africa, from Türkiye through Arabia to Iran, also called the Middle East.', ['Western Asia', 'West Asia', 'Middle East']),
      place('central-asia', 'Central Asia', 'Central Asia is the middle of Asia, from the Caspian Sea east to China, south of Northern Asia and north of South Asia.'),
      place('south-asia', 'South Asia', 'South Asia is the part of Asia around India that points down into the Indian Ocean, south of the Himalayas.'),
      place('east-asia', 'East Asia', 'East Asia is the part of Asia from China to Japan and Korea, on the Pacific, with Southeast Asia below it.'),
      place('southeast-asia', 'Southeast Asia', 'Southeast Asia is the part of Asia south of China, from Myanmar and Vietnam down to the islands of Indonesia and the Philippines.', ['Southeast Asia', 'South East Asia']),
      place('northern-asia', 'Northern Asia', 'Northern Asia is the top of Asia, the Russian part, from Europe to the Pacific along the Arctic Ocean.', ['Northern Asia', 'North Asia', 'Siberia']),
      place('australia-and-new-zealand', 'Australia and New Zealand', 'Australia and New Zealand are the two countries of Oceania south of the islands of Melanesia, between the Indian Ocean and the Pacific.', ['Australia and New Zealand']),
      place('melanesia', 'Melanesia', 'Melanesia is the islands of Oceania north and east of Australia, from New Guinea to Fiji.')
    ] } }
  ]);
})();
