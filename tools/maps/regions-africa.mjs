// The four regions of Africa (parts 22 to 25 of Geography): each a window of countries, the seas and the features its part names (window.mjs).
import { laea } from './geo.mjs';

const dots = names => Object.fromEntries(names.map(n => [n, 'auto']));

export const AFRICA = [
  // part 22: the coast from Senegal to Nigeria in order, then Cape Verde; the Gulf of Guinea
  { id: 'africa-west', name: 'West Africa', project: laea(-4, 10), view: { lon: [-26.5, 17], lat: [2.5, 27] }, tol: 0.25,
    asked: ['Senegal', 'Gambia', 'Guinea-Bissau', 'Guinea', 'Sierra Leone', 'Liberia', "Côte d'Ivoire", 'Ghana', 'Togo', 'Benin', 'Nigeria', 'Cape Verde'], dots: dots(['Gambia', 'Cape Verde']),
    oceans: ['atlantic'], seas: [['gulf-of-guinea', 'Gulf of Guinea', 'Gulf of Guinea']] },
  // part 23: the Sahel from Mauritania to Chad, then Cameroon to the two Congos; the Sahara, the Sahel and the Congo River
  { id: 'africa-central', name: 'The Sahel and Central Africa', project: laea(14, 6), view: { lon: [-18, 32], lat: [-14, 27] }, tol: 0.3,
    asked: ['Mauritania', 'Mali', 'Burkina Faso', 'Niger', 'Chad', 'Cameroon', 'Central African Republic', 'Equatorial Guinea', 'Gabon', 'Republic of the Congo', 'Democratic Republic of the Congo',
      'São Tomé and Príncipe'], dots: dots(['São Tomé and Príncipe']), oceans: ['atlantic'], seas: [['gulf-of-guinea', 'Gulf of Guinea', 'Gulf of Guinea']],
    rivers: [['congo-river', 'Congo River', ['Congo', 'Lualaba']]],
    ranges: [['sahara', 'The Sahara', 'regions50', 'SAHARA', 'desert'], ['sahel', 'The Sahel', 'regions50', 'SAHEL', 'region']] },
  // part 24: the Horn, the Great Lakes states, Kenya and Tanzania; the Nile and Lake Victoria
  { id: 'africa-east', name: 'East Africa and the Horn', project: laea(38, 3), view: { lon: [22, 58], lat: [-14, 20] }, tol: 0.25,
    asked: ['South Sudan', 'Ethiopia', 'Eritrea', 'Djibouti', 'Somalia', 'Kenya', 'Uganda', 'Rwanda', 'Burundi', 'Tanzania', 'Seychelles', 'Comoros'], dots: dots(['Seychelles', 'Comoros']),
    skip: ['France'], oceans: ['indian'], seas: [['red-sea', 'Red Sea', 'Red Sea'], ['gulf-of-aden', 'Gulf of Aden', 'Gulf of Aden'], ['mozambique-channel', 'Mozambique Channel', 'Mozambique Channel']],
    rivers: [['nile-river', 'Nile River', ['Nile', 'Bahr el Jebel', 'El Bahr el Abyad', 'El Bahr el Azraq', 'Victoria Nile', 'Albert Nile', 'Atbara']]] },
  // part 25: Angola and Mozambique, the inland states, South Africa with the two inside and beside it, Madagascar and Mauritius; the Kalahari
  { id: 'africa-south', name: 'Southern Africa', project: laea(32, -20), view: { lon: [8, 60], lat: [-36, -3] }, tol: 0.25,
    asked: ['Angola', 'Mozambique', 'Namibia', 'Botswana', 'Zambia', 'Zimbabwe', 'Malawi', 'South Africa', 'Lesotho', 'Eswatini', 'Madagascar', 'Mauritius'], dots: dots(['Mauritius']),
    skip: ['France'], oceans: ['atlantic', 'indian'], seas: [['mozambique-channel', 'Mozambique Channel', 'Mozambique Channel']], ranges: [['kalahari', 'The Kalahari', 'regions50', 'KALAHARI DESERT', 'desert']] }
];
