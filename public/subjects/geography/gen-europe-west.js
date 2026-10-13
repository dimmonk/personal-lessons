// Geography, western Europe: the group of places the pilot (part 16) asks about, made into questions in four forms (a name to tap, a lit place to
// name, a flag to tap, a neighbor and its water) from the map data `europe-west`. Ten countries, from Iberia to Italy, and the five microstates.
// The five microstates are asked only as a name to tap: the lesson's check keeps them to that form (`only`), and the lesson's groups and the review
// follow it (lesson standard 3.4, 3.5), so only the ten countries have a `flagLine`: the one thing that tells the flag from the one it is mistaken for,
// shown beside the flag in the look and at the head of the feedback of a flag question. The seas are not in the group: a neighbor's water is read from the map data.
FC.gen('geography', [{
  id: 'g-europe-west', strand: 'europe-west',
  places: {
    map: 'europe-west', forms: ['tap', 'name', 'flag', 'border'],
    words: { tap: 'Tap it on the map.', name: 'What is the lit place called?', flag: 'Tap the country with this flag.', border: 'Tap a country next to it, then the water it touches. If no water touches it, tap Landlocked.' },
    list: [
      { id: 'portugal', name: 'Portugal', flag: '🇵🇹', flagLine: "Two upright bands, green on the left and a wider band of red, with a gold sphere and a shield where they meet.", accept: ['Portugal'],
        reason: 'Portugal is the country on the Atlantic coast west of Spain, which is its only neighbor, and its capital is Lisbon.' },
      { id: 'spain', name: 'Spain', flag: '🇪🇸', flagLine: "Three flat stripes, red, yellow and red, the yellow one twice as wide, with a shield on the left.", accept: ['Spain'],
        reason: 'Spain is the big country that fills most of the Iberian peninsula between the Atlantic and the Mediterranean, with Portugal to its west and France to its north, and its capital is Madrid.' },
      { id: 'france', name: 'France', flag: '🇫🇷', flagLine: "Three upright stripes, blue, white and red, with the blue on the left.", accept: ['France'],
        reason: 'France is the large country between the Atlantic and the Mediterranean, with Spain to its south and Germany, Switzerland and Italy to its east, and its capital is Paris.' },
      { id: 'belgium', name: 'Belgium', flag: '🇧🇪', flagLine: "Three upright stripes, black, yellow and red. Germany's three stripes lie flat.", accept: ['Belgium'],
        reason: 'Belgium is a small country on the North Sea between France and the Netherlands, and its capital, Brussels, is where the European Union has many of its offices.' },
      { id: 'netherlands', name: 'Netherlands', flag: '🇳🇱', flagLine: "Three flat stripes, red, white and a deep blue. Luxembourg's blue is lighter.", accept: ['Netherlands'],
        reason: 'The Netherlands is the low, flat country on the North Sea, north of Belgium and west of Germany, where much of the land lies below sea level, and its capital is Amsterdam.' },
      { id: 'luxembourg', name: 'Luxembourg', flag: '🇱🇺', flagLine: "Three flat stripes, red, white and a light blue. The Netherlands' blue is deeper.", accept: ['Luxembourg'],
        reason: 'Luxembourg is a tiny country with no coast, squeezed between Belgium, France and Germany.' },
      { id: 'germany', name: 'Germany', flag: '🇩🇪', flagLine: "Three flat stripes, black, red and gold. Belgium's three stripes stand upright.", accept: ['Germany'],
        reason: 'Germany is the large country at the middle of western Europe, with coasts on the North Sea and the Baltic Sea and nine neighbors, from France in the west to Poland in the east, and its capital is Berlin.' },
      { id: 'austria', name: 'Austria', flag: '🇦🇹', flagLine: "Three flat stripes, red, white and red.", accept: ['Austria'],
        reason: 'Austria is the mountain country with no coast that lies east of Switzerland and north of Italy, holds much of the eastern Alps, and has Vienna as its capital.' },
      { id: 'switzerland', name: 'Switzerland', flag: '🇨🇭', flagLine: "A white cross on a red background.", accept: ['Switzerland'],
        reason: 'Switzerland is the mountain country with no coast in the Alps between France, Germany, Austria and Italy, and its capital is Bern.' },
      { id: 'italy', name: 'Italy', flag: '🇮🇹', flagLine: "Three upright stripes, green, white and red, with the green on the left. France has blue where Italy has green.", accept: ['Italy'],
        reason: 'Italy is the boot-shaped country that reaches south from the Alps into the Mediterranean, with the Adriatic Sea on its east side, and its capital is Rome.' },
      { id: 'andorra', name: 'Andorra', flag: '🇦🇩', accept: ['Andorra'],
        reason: 'Andorra is a tiny country high in the Pyrenees mountains, between Spain and France, with no coast.' },
      { id: 'monaco', name: 'Monaco', flag: '🇲🇨', accept: ['Monaco'],
        reason: 'Monaco is a tiny city-country on the Mediterranean coast, with France all around it on land.' },
      { id: 'liechtenstein', name: 'Liechtenstein', flag: '🇱🇮', accept: ['Liechtenstein'],
        reason: 'Liechtenstein is a tiny country with no coast, in the Alps between Switzerland and Austria.' },
      { id: 'san-marino', name: 'San Marino', flag: '🇸🇲', accept: ['San Marino'],
        reason: 'San Marino is a tiny country on a mountain, completely surrounded by Italy, not far from the Adriatic coast.' },
      { id: 'vatican-city', name: 'Vatican City', flag: '🇻🇦', accept: ['Vatican City', 'Vatican'],
        reason: 'Vatican City is the smallest country in the world, a few city blocks inside Rome, and it is where the Pope lives.' }
    ]
  }
}]);
