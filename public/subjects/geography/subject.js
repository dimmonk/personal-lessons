// Geography: knowing where a place is when it is named, with no map in sight. Parts 1 to 7b, 16 and 16b (Europe, west) are built, so the subject is not
// complete. Its plan is docs/subjects/geography/design.md. Every lesson opens with the way of thinking (the area a place sits in, what touches it, its
// water) and finds its worked cases by it, so the reading allowance is a quarter of a lesson: the method is never cut to fit the share (build-subject, 4).
FC.subject('geography', {
  name: 'Geography',
  rev: 1,
  standard: 2,
  history: [{ rev: 1, date: '2026-10-13', change: 'First version: the pilot, Europe, west (part 16).' }],
  endResult: "After this subject you can put a named place on a map with no names, say what it borders and what water it is on, name a place that is lit, tell a country by its flag, and say roughly how far it is from you, when a place is named in the news, by a person or in a travel plan with no map in sight.",
  parts: [
    { id: "1", title: "The continents and the oceans" },
    { id: "1b", title: "The parts of the Americas, Europe and Africa" },
    { id: "1c", title: "The parts of Asia and Oceania" },
    { id: "2", title: "The frame of the United States" },
    { id: "2b", title: "The big rivers" },
    { id: "3", title: "The West" },
    { id: "4", title: "The Midwest" },
    { id: "5", title: "The South, from Texas to Kentucky" },
    { id: "6", title: "The South, the Atlantic side" },
    { id: "7", title: "The Northeast" },
    { id: "7b", title: "The lower 48, mixed" },
    { id: "8", title: "The cities west of the Mississippi" },
    { id: "9", title: "The cities east of the Mississippi" },
    { id: "10", title: "The capitals of the West and the Midwest" },
    { id: "11", title: "The capitals of the South and the Northeast" },
    { id: "12", title: "Canada" },
    { id: "13", title: "Mexico and Central America" },
    { id: "14", title: "The Caribbean" },
    { id: "15", title: "South America" },
    { id: "16", title: "Europe, west" },
    { id: "16b", title: "The flags of western Europe" },
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
  // the places most often mixed up, each named and told apart (a wrong tap on one carries its slip)
  lists: {
    slip: [
      { id: 'two-rectangles', text: 'Wyoming and Colorado are both rectangles: Wyoming is the northern one, under Montana; Colorado is the southern one, over New Mexico' },
      { id: 'idaho-montana', text: 'Idaho and Montana sit side by side: Idaho is the narrow one on the west; Montana is the wide one along Canada' },
      { id: 'illinois-indiana', text: 'Illinois and Indiana look alike: Illinois is the western one, on the Mississippi; Indiana is east of it' },
      { id: 'two-dakotas', text: 'The two Dakotas: North Dakota is the top one, on Canada; South Dakota is under it' },
      { id: 'mississippi-alabama', text: 'Mississippi and Alabama look alike: Mississippi is the western one, by the river; Alabama is east of it' },
      { id: 'tennessee-kentucky', text: 'Tennessee and Kentucky lie one on the other: Kentucky is the northern one, on the Ohio River; Tennessee is the long one under it' },
      { id: 'two-carolinas', text: 'The two Carolinas: North Carolina is the wider one on top; South Carolina is the triangle under it' },
      { id: 'two-virginias', text: 'The two Virginias: Virginia touches the Atlantic; West Virginia is inland, west of it' },
      { id: 'maryland-delaware', text: 'Maryland and Delaware: Maryland wraps around Chesapeake Bay and around D.C.; Delaware is the small strip east of it on the Atlantic; West Virginia, inland and with no coast, is west of Maryland' },
      { id: 'two-washingtons', text: 'Washington State is in the far northwest; Washington, D.C., the capital, is on the Atlantic side between Maryland and Virginia' },
      { id: 'vermont-new-hampshire', text: 'Vermont and New Hampshire are the same shape, each the other way up: Vermont is wide at the top and has no coast; New Hampshire is wide at the bottom and has a short coast' },
      { id: 'missouri-mississippi', text: 'The Missouri and the Mississippi meet at St. Louis: the Mississippi runs straight down the middle to the Gulf; the Missouri comes in from the northwest, across the Plains' },
      { id: 'ohio-tennessee', text: 'The Ohio and the Tennessee: the Ohio is the long river that runs west from the Northeast to the Mississippi; the Tennessee is the shorter one below it that loops south and then back north into the Ohio' },
      { id: 'snake-columbia', text: 'The Snake and the Columbia: the Columbia is the big one that ends at the Pacific; the Snake is the one that bends across from the east and runs into it' },
      { id: 'two-short-ranges', text: 'The two short ranges near the Pacific: the Cascades run north to south near the top, the Sierra Nevada lower down, along the east side of California' },
      { id: 'two-ranges', text: 'The two long ranges: the Rockies run down the West; the Appalachians run down the East, behind the Atlantic coast' },
      { id: 'two-centrals', text: 'Central America is the narrow land between North and South America; Central Asia is the middle of Asia, east of the Caspian Sea' },
      { id: 'connecticut-rhode-island', text: 'Connecticut and Rhode Island: Rhode Island is the tiny one on the east; Connecticut is the bigger one next to New York' },
      { id: 'spain-portugal', text: 'Spain and Portugal share the Iberian peninsula: Portugal is the narrow strip on the Atlantic side, in the west; Spain is the large country that fills the rest' },
      { id: 'low-countries', text: 'Belgium, the Netherlands and Luxembourg sit together: the Netherlands is the northern one, on the North Sea; Belgium is the middle one, next to France; Luxembourg is the tiny one inland, with no coast' },
      { id: 'austria-switzerland', text: 'Austria and Switzerland are both mountain countries with no coast: Switzerland is the smaller one in the west, the only one that touches France; Austria is the longer one in the east; tiny Liechtenstein sits between them' },
      { id: 'andorra-monaco', text: 'Andorra and Monaco are both tiny: Andorra is up in the mountains between Spain and France; Monaco is on the Mediterranean coast' },
      { id: 'inside-italy', text: 'San Marino and Vatican City are both tiny countries inside Italy: Vatican City is in Rome, on the west side; San Marino is on the east side, near the Adriatic' },
      { id: 'flags-red-white-blue', text: 'The flags of the Netherlands and Luxembourg are both flat red, white and blue stripes: the Netherlands has the deeper blue; Luxembourg has the lighter blue' },
      { id: 'flags-black-yellow-red', text: 'The flags of Belgium and Germany both have black, yellow and red: Belgium has upright stripes with yellow in the middle; Germany has flat stripes with red in the middle' },
      { id: 'flags-blue-white-red', text: 'The flags of France and Italy both have three upright stripes with white in the middle: France has blue on the left; Italy has green on the left and red on the right' }
    ]
  },
  facets: {
    form: { name: 'How a place is asked', values: [{ id: 'tap', text: 'its name given, the place tapped' }, { id: 'name', text: 'the place lit, its name typed' }, { id: 'flag', text: 'its flag given, the country tapped' }, { id: 'border', text: 'a neighbor and its water tapped' }] }
  },
  mix: [],
  strands: [
    { id: 'world', title: 'The world' }, { id: 'us-map', title: 'The United States, as a whole' }, { id: 'us-west', title: 'The West' }, { id: 'us-midwest', title: 'The Midwest' },
    { id: 'us-south-central', title: 'The South, Texas to Kentucky' }, { id: 'us-south-atlantic', title: 'The South, the Atlantic side' }, { id: 'us-northeast', title: 'The Northeast' },
    { id: 'europe-west', title: 'Western Europe' }, { id: 'europe-west-flags', title: 'The flags of western Europe' }
  ],
  // the shapes and names of the maps, and the day they were fetched (a lit place named from memory is answered against them)
  refs: [{ id: 'map-data', text: 'The shapes and names of the map', value: 'Natural Earth, public domain', asOf: '2026-10-12', source: 'https://www.naturalearthdata.com/' }],
  readingShare: 0.25
});
