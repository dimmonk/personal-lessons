// The regions of Europe beyond its west and of Asia (parts 17 to 21 and 26 to 29 of Geography): each a window of countries, the seas and the features its part names (window.mjs).
import { laea } from './geo.mjs';

const dots = (names, how = 'auto') => Object.fromEntries(names.map(n => [n, how]));

export const EURASIA = [
  // part 17: the British Isles, the Nordic five, the Baltic three
  { id: 'europe-north', name: 'Europe, north', project: laea(10, 60), view: { lon: [-25, 36], lat: [49.5, 71.5] }, tol: 0.3,
    asked: ['United Kingdom', 'Ireland', 'Iceland', 'Norway', 'Sweden', 'Finland', 'Denmark', 'Estonia', 'Latvia', 'Lithuania'], oceans: ['atlantic'],
    seas: [['north-sea', 'North Sea', 'North Sea'], ['baltic-sea', 'Baltic Sea', 'Baltic Sea'], ['norwegian-sea', 'Norwegian Sea', 'Norwegian Sea'], ['irish-sea', 'Irish Sea', 'Irish Sea'],
      ['gulf-of-bothnia', 'Gulf of Bothnia', 'Gulf of Bothnia'], ['gulf-of-finland', 'Gulf of Finland', 'Gulf of Finland'], ['barents-sea', 'Barents Sea', 'Barents Sea'],
      ['english-channel', 'English Channel', 'English Channel']] },
  // part 18: Poland to the west of Russia, the Black Sea
  { id: 'europe-east', name: 'Europe, east', project: laea(30, 52), view: { lon: [12, 56], lat: [41, 62] }, tol: 0.3,
    asked: ['Poland', 'Czechia', 'Slovakia', 'Hungary', 'Romania', 'Moldova', 'Belarus', 'Ukraine', 'Russia'], beyond: ['arctic', 'pacific'],
    seas: [['black-sea', 'Black Sea', 'Black Sea'], ['sea-of-azov', 'Sea of Azov', 'Sea of Azov', 'sea', 'marine10'], ['baltic-sea', 'Baltic Sea', 'Baltic Sea'], ['caspian-sea', 'Caspian Sea', 'Caspian Sea']],
    rivers: [['danube-river', 'Danube River', ['Danube', 'Donau']]], ranges: [['carpathians', 'The Carpathians', 'regions50', 'CARPATHIAN MOUNTAINS']] },
  // part 19: the Balkans, Greece, Bulgaria, Cyprus and Malta; the Adriatic and the Aegean
  { id: 'balkans', name: 'The Balkans', project: laea(23, 40), view: { lon: [12.5, 35.5], lat: [34, 47] }, tol: 0.25,
    asked: ['Slovenia', 'Croatia', 'Bosnia and Herzegovina', 'Serbia', 'Montenegro', 'Kosovo', 'Albania', 'North Macedonia', 'Greece', 'Bulgaria', 'Cyprus', 'Malta'],
    dots: dots(['Malta']), seas: [['adriatic', 'Adriatic Sea', 'Adriatic Sea'], ['aegean', 'Aegean Sea', 'Aegean Sea'], ['ionian', 'Ionian Sea', 'Ionian Sea'],
      ['black-sea', 'Black Sea', 'Black Sea'], ['mediterranean', 'Mediterranean Sea', 'Mediterranean Sea']] },
  // part 20: Türkiye, the Levant, Iraq and Iran; the Bosporus, the Persian Gulf
  { id: 'middle-east', name: 'The Middle East', project: laea(45, 33), view: { lon: [25, 64], lat: [24.5, 42.5] }, tol: 0.25,
    asked: ['Türkiye', 'Syria', 'Lebanon', 'Israel', 'Palestine', 'Jordan', 'Iraq', 'Iran'], dots: dots(['Lebanon', 'Palestine']), coastEps: 0.45,
    seas: [['persian-gulf', 'Persian Gulf', 'Persian Gulf'], ['gulf-of-oman', 'Gulf of Oman', 'Gulf of Oman'], ['black-sea', 'Black Sea', 'Black Sea'], ['caspian-sea', 'Caspian Sea', 'Caspian Sea'],
      ['mediterranean', 'Mediterranean Sea', 'Mediterranean Sea'], ['aegean', 'Aegean Sea', 'Aegean Sea'], ['red-sea', 'Red Sea', 'Red Sea']],
    straits: [['bosporus', 'Bosporus', { ne: 'Bosporus', layer: 'marine10' }], ['strait-of-hormuz', 'Strait of Hormuz', { point: [56.45, 26.55] }]] },
  // part 21: Arabia and North Africa; the Red Sea, the Suez Canal, Hormuz
  { id: 'arabia-north-africa', name: 'Arabia and North Africa', project: laea(25, 25), view: { lon: [-18, 62], lat: [8.5, 38] }, tol: 0.35,
    asked: ['Saudi Arabia', 'Yemen', 'Oman', 'United Arab Emirates', 'Qatar', 'Bahrain', 'Kuwait', 'Egypt', 'Libya', 'Tunisia', 'Algeria', 'Morocco', 'Sudan'],
    dots: dots(['Qatar', 'Bahrain', 'Kuwait']), oceans: ['atlantic'],
    seas: [['red-sea', 'Red Sea', 'Red Sea'], ['mediterranean', 'Mediterranean Sea', 'Mediterranean Sea'], ['persian-gulf', 'Persian Gulf', 'Persian Gulf'], ['gulf-of-oman', 'Gulf of Oman', 'Gulf of Oman'],
      ['arabian-sea', 'Arabian Sea', 'Arabian Sea'], ['gulf-of-aden', 'Gulf of Aden', 'Gulf of Aden']],
    straits: [['strait-of-hormuz', 'Strait of Hormuz', { point: [56.45, 26.55] }]], canals: [['suez-canal', 'Suez Canal', 'Suez Canal']] },
  // part 26: South Asia; the Himalayas, the Indus, the Ganges
  { id: 'asia-south', name: 'South Asia', project: laea(80, 24), view: { lon: [58, 99], lat: [-1.5, 38.5] }, tol: 0.3,
    asked: ['India', 'Pakistan', 'Afghanistan', 'Bangladesh', 'Sri Lanka', 'Nepal', 'Bhutan', 'Maldives'], dots: dots(['Maldives']), oceans: ['indian'],
    seas: [['arabian-sea', 'Arabian Sea', 'Arabian Sea'], ['bay-of-bengal', 'Bay of Bengal', 'Bay of Bengal'], ['laccadive-sea', 'Laccadive Sea', 'Laccadive Sea']],
    rivers: [['indus-river', 'Indus River', ['Indus']], ['ganges-river', 'Ganges River', ['Ganges']]], ranges: [['himalayas', 'The Himalayas', 'regions50', 'HIMALAYAS']] },
  // part 27: Central Asia and the Caucasus; the Caspian Sea
  { id: 'asia-central', name: 'Central Asia and the Caucasus', project: laea(65, 42), view: { lon: [38.5, 90], lat: [34, 55.5] }, tol: 0.3,
    asked: ['Kazakhstan', 'Uzbekistan', 'Turkmenistan', 'Kyrgyzstan', 'Tajikistan', 'Armenia', 'Azerbaijan', 'Georgia'],
    seas: [['caspian-sea', 'Caspian Sea', 'Caspian Sea'], ['black-sea', 'Black Sea', 'Black Sea']], ranges: [['caucasus', 'The Caucasus', 'regions50', 'CAUCASUS MTS.']] },
  // part 28: East Asia and mainland Southeast Asia; the Yangtze, the Mekong
  { id: 'asia-east', name: 'East Asia', project: laea(108, 30), view: { lon: [73, 146.5], lat: [5, 54] }, tol: 0.35, minArea: 0.15,
    asked: ['China', 'Mongolia', 'North Korea', 'South Korea', 'Japan', 'Taiwan', 'Myanmar', 'Thailand', 'Laos', 'Cambodia', 'Vietnam'], oceans: ['pacific'],
    seas: [['south-china-sea', 'South China Sea', 'South China Sea'], ['east-china-sea', 'East China Sea', 'East China Sea'], ['yellow-sea', 'Yellow Sea', 'Yellow Sea'],
      ['sea-of-japan', 'Sea of Japan', 'Sea of Japan'], ['gulf-of-thailand', 'Gulf of Thailand', 'Gulf of Thailand'], ['gulf-of-tonkin', 'Gulf of Tonkin', 'Gulf of Tonkin'],
      ['andaman-sea', 'Andaman Sea', 'Andaman Sea'], ['bay-of-bengal', 'Bay of Bengal', 'Bay of Bengal'], ['philippine-sea', 'Philippine Sea', 'Philippine Sea']],
    straits: [['taiwan-strait', 'Taiwan Strait', { ne: 'Taiwan Strait', layer: 'marine50' }]],
    rivers: [['yangtze-river', 'Yangtze River', ['Yangtze', 'Chang Jiang']], ['mekong-river', 'Mekong River', ['Mekong']]] },
  // part 29: Island Southeast Asia and the Pacific; the island states as dots
  { id: 'asia-islands', name: 'Island Southeast Asia and the Pacific', project: laea(146, -6), view: { lon: [93, 192], lat: [-48, 21] }, tol: 0.3, minArea: 0.15,
    asked: ['Malaysia', 'Singapore', 'Brunei', 'Indonesia', 'Philippines', 'Timor-Leste', 'Papua New Guinea', 'Australia', 'New Zealand', 'Fiji', 'Solomon Islands', 'Vanuatu', 'Samoa', 'Tonga',
      'Kiribati', 'Tuvalu', 'Nauru', 'Marshall Islands', 'Federated States of Micronesia', 'Palau'],
    dots: dots(['Singapore', 'Fiji', 'Samoa', 'Tonga', 'Kiribati', 'Tuvalu', 'Nauru', 'Marshall Islands', 'Federated States of Micronesia', 'Palau', 'Vanuatu', 'Solomon Islands']),
    oceans: ['pacific', 'indian'],
    seas: [['south-china-sea', 'South China Sea', 'South China Sea'], ['philippine-sea', 'Philippine Sea', 'Philippine Sea'], ['coral-sea', 'Coral Sea', 'Coral Sea'], ['tasman-sea', 'Tasman Sea', 'Tasman Sea'],
      ['timor-sea', 'Timor Sea', 'Timor Sea'], ['arafura-sea', 'Arafura Sea', 'Arafura Sea'], ['java-sea', 'Java Sea', 'Java Sea'], ['celebes-sea', 'Celebes Sea', 'Celebes Sea'],
      ['banda-sea', 'Banda Sea', 'Banda Sea'], ['sulu-sea', 'Sulu Sea', 'Sulu Sea'], ['solomon-sea', 'Solomon Sea', 'Solomon Sea']],
    straits: [['strait-of-malacca', 'Strait of Malacca', { ne: 'Strait of Malacca', layer: 'marine50' }], ['makassar-strait', 'Makassar Strait', { ne: 'Makassar Strait', layer: 'marine50' }]] }
];
