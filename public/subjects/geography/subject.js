// Geography: knowing where a place is when it is named, with no map in sight. Only the pilot (part 16, Europe, west) is built, so the subject is not
// complete. Its record is docs/subjects/geography/design.md; endResult, parts and readingShare are that record's, word for word (V71, V80).
FC.subject('geography', {
  name: 'Geography',
  rev: 1,
  standard: 2,
  history: [{ rev: 1, date: '2026-10-13', change: 'First version: the pilot, Europe, west (part 16).' }],
  endResult: "After this subject you can put a named place on a map with no names, say what it borders and what water it is on, name a place that is lit, tell a country by its flag, and say roughly how far it is from you, when a place is named in the news, by a person or in a travel plan with no map in sight.",
  parts: [
    { id: "1", title: "The world on one map" },
    { id: "2", title: "The map of the United States" },
    { id: "3", title: "The West" },
    { id: "4", title: "The Midwest" },
    { id: "5", title: "The South, from Texas to Kentucky" },
    { id: "6", title: "The South, the Atlantic side" },
    { id: "7", title: "The Northeast" },
    { id: "8", title: "The cities west of the Mississippi" },
    { id: "9", title: "The cities east of the Mississippi" },
    { id: "10", title: "The capitals of the West and the Midwest" },
    { id: "11", title: "The capitals of the South and the Northeast" },
    { id: "12", title: "Canada" },
    { id: "13", title: "Mexico and Central America" },
    { id: "14", title: "The Caribbean" },
    { id: "15", title: "South America" },
    { id: "16", title: "Europe, west" },
    { id: "17", title: "Europe, north" },
    { id: "18", title: "Europe, central and east" },
    { id: "19", title: "Europe, the Balkans and the south" },
    { id: "20", title: "Türkiye, the Levant, Iraq and Iran" },
    { id: "21", title: "Arabia and North Africa" },
    { id: "22", title: "West Africa, the coast" },
    { id: "23", title: "The Sahel and Central Africa" },
    { id: "24", title: "East Africa and the Horn" },
    { id: "25", title: "Southern Africa" },
    { id: "26", title: "South Asia" },
    { id: "27", title: "Central Asia and the Caucasus" },
    { id: "28", title: "East Asia and mainland Southeast Asia" },
    { id: "29", title: "Island Southeast Asia and the Pacific" },
    { id: "30", title: "The world's water, mountains and deserts" },
    { id: "31", title: "How far" },
    { id: "32", title: "Placing a place you have never heard of" },
    { id: "33", title: "The whole world, mixed" }
  ],
  lists: {},
  facets: {
    form: { name: 'How a place is asked', values: [{ id: 'tap', text: 'its name given, the place tapped' }, { id: 'name', text: 'the place lit, its name typed' }, { id: 'flag', text: 'its flag given, the country tapped' }, { id: 'border', text: 'a neighbor and its water tapped' }] }
  },
  mix: [],
  strands: [{ id: 'europe-west', title: 'Western Europe' }],
  // the shapes and names of the maps, and the day they were fetched (a lit place named from memory is answered against them)
  refs: [{ id: 'map-data', text: 'The shapes and names of the map', value: 'Natural Earth, public domain', asOf: '2026-10-12', source: 'https://www.naturalearthdata.com/' }],
  readingShare: 0.1
});
