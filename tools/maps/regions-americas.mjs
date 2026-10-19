// The regions of the Americas beyond the United States (part 12 to 15 of Geography): each a window of countries, the seas and the features its part names (window.mjs).
import { laea } from './geo.mjs';
import { conic } from './fit.mjs';

// the configs of window.mjs (regions.mjs makes a region of each)
export const AMERICAS = [
  // part 12: Canada's ten provinces and three territories, Hudson Bay, with the United States and Greenland beside them
  { id: 'americas-north', name: 'Canada', project: conic(-96, 50, 70), view: { lon: [-142, -50], lat: [41.5, 83.5] }, tol: 0.6, minArea: 0.3, minVisible: 40,
    asked: ['United States', 'Greenland'], provinces: 'CAN', oceans: ['pacific', 'atlantic', 'arctic'],
    seas: [['hudson-bay', 'Hudson Bay', 'Hudson Bay'], ['james-bay', 'James Bay', 'James Bay'], ['gulf-of-saint-lawrence', 'Gulf of Saint Lawrence', 'Gulf of Saint Lawrence'],
      ['baffin-bay', 'Baffin Bay', 'Baffin Bay'], ['beaufort-sea', 'Beaufort Sea', 'Beaufort Sea'], ['labrador-sea', 'Labrador Sea', 'Labrador Sea']] },
  // part 13: Mexico and the seven countries of the isthmus, the Panama Canal, the Caribbean Sea and the Gulf of Mexico
  { id: 'mexico-central', name: 'Mexico and Central America', project: laea(-88, 17), view: { lon: [-119, -74], lat: [6, 33] }, tol: 0.35,
    asked: ['Mexico', 'Guatemala', 'Belize', 'Honduras', 'El Salvador', 'Nicaragua', 'Costa Rica', 'Panama', 'Colombia', 'United States'], oceans: ['pacific', 'atlantic'],
    seas: [['gulf-of-mexico', 'Gulf of Mexico', 'Gulf of Mexico'], ['caribbean-sea', 'Caribbean Sea', 'Caribbean Sea'], ['gulf-of-california', 'Gulf of California', 'Golfo de California']],
    canals: [['panama-canal', 'Panama Canal', 'Panama Canal']] },
  // part 14: the big islands, the small island states as dots
  { id: 'caribbean', name: 'The Caribbean', project: laea(-72, 19), view: { lon: [-87, -58], lat: [9, 28.5] }, tol: 0.25,
    asked: ['Cuba', 'Bahamas', 'Jamaica', 'Haiti', 'Dominican Republic', 'Puerto Rico', 'Trinidad and Tobago', 'Antigua and Barbuda', 'Barbados', 'Dominica', 'Grenada',
      'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines'],
    skip: ['France', 'Netherlands', 'United Kingdom'],
    dots: Object.fromEntries(['Antigua and Barbuda', 'Barbados', 'Dominica', 'Grenada', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines'].map(n => [n, 'auto'])),
    oceans: ['atlantic'], seas: [['caribbean-sea', 'Caribbean Sea', 'Caribbean Sea'], ['gulf-of-mexico', 'Gulf of Mexico', 'Gulf of Mexico']] },
  // part 15: the twelve countries and French Guiana, the Andes and the Amazon
  { id: 'south-america', name: 'South America', project: laea(-60, -15), view: { lon: [-82, -33], lat: [-56.5, 13] }, tol: 0.35,
    asked: ['Colombia', 'Venezuela', 'Guyana', 'Suriname', 'Ecuador', 'Peru', 'Bolivia', 'Brazil', 'Paraguay', 'Uruguay', 'Argentina', 'Chile'],
    split: { France: ['french-guiana', 'French Guiana'] }, skip: ['Falkland Islands', 'Netherlands', 'Grenada'], oceans: ['pacific', 'atlantic'],
    seas: [['caribbean-sea', 'Caribbean Sea', 'Caribbean Sea']], rivers: [['amazon-river', 'Amazon River', ['Amazonas']]],
    ranges: [['andes', 'The Andes', 'regions50', 'ANDES']] }
];
