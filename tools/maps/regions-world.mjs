// The world map of part 30: the continents and oceans of the world map as the base, and over them the seas, straits, canals, rivers, ranges and deserts of the world.
// Every one the regional maps (parts 12 to 29) place is here under the same id (gathered from their lists, so a name is written once), so a part 30 question
// can be about one placed earlier; the ones part 30 adds are listed below.
import { equalEarth } from './geo.mjs';
import { singlePart, WORLD_VIEW } from './fit.mjs';
import { worldBaseSpecs } from './world-specs.mjs';
import { waterSpecs, featureSpecs } from './window.mjs';
import { AMERICAS } from './regions-americas.mjs';
import { EURASIA } from './regions-eurasia.mjs';
import { AFRICA } from './regions-africa.mjs';

// what part 30 adds to what the regions place: the Bering Strait (no outline in the data: a point by hand), Gibraltar and the Channel, the Rockies, the Urals, the
// Atlas, the Alps, the deserts, the Mississippi
const ADDED = {
  seas: [['bering-sea', 'Bering Sea', 'Bering Sea'], ['english-channel', 'English Channel', 'English Channel'], ['mediterranean', 'Mediterranean Sea', 'Mediterranean Sea']],
  straits: [['strait-of-gibraltar', 'Strait of Gibraltar', { ne: 'Strait of Gibraltar', layer: 'marine50' }], ['bering-strait', 'Bering Strait', { point: [-168.9, 65.8] }]],
  rivers: [['mississippi-river', 'Mississippi River', ['Mississippi']]],
  ranges: [['rocky-mountains', 'Rocky Mountains', 'regions50', 'ROCKY MOUNTAINS'], ['urals', 'The Urals', 'regions50', 'URAL MOUNTAINS'], ['atlas', 'The Atlas Mountains', 'regions50', 'ATLAS MOUNTAINS'],
    ['alps', 'The Alps', 'regions50', 'ALPS'], ['gobi', 'The Gobi', 'regions50', 'GOBI DESERT', 'desert'], ['arabian-desert', 'The Arabian Desert', 'regions50', 'RUB’ AL KHALI', 'desert'],
    // Natural Earth has no outback: it is the three deserts of the Australian interior
    ['outback', 'The Outback', 'regions50', ['GREAT SANDY DESERT', 'GREAT VICTORIA DESERT', 'Gibson Desert'], 'desert']]
};
const WINDOWS = [...AMERICAS, ...EURASIA, ...AFRICA];
const gathered = key => [...ADDED[key] || [], ...WINDOWS.flatMap(w => w[key] || [])].filter((e, i, all) => all.findIndex(x => x[0] === e[0]) === i);
const cfg = { seas: gathered('seas'), straits: gathered('straits'), rivers: gathered('rivers'), canals: gathered('canals'), ranges: gathered('ranges'),
  lakes: gathered('lakes').filter(l => l[0] === 'lake-victoria') };
const world = singlePart(equalEarth(), WORLD_VIEW);
const LAYERS = ['countries110', 'marine110', 'marine50', 'marine10', 'rivers50', 'lakes50', 'regions50'];

export const WORLD_FEATURES = {
  id: 'world-features', name: 'The world: water, mountains and deserts', ...world, tol: 0.1, load: LAYERS,
  async specs(load) { return [...await worldBaseSpecs(load), ...await waterSpecs(cfg, load), ...await featureSpecs(cfg, load)]; },
  land: ['continent'], draw: ['continent', 'lake', 'river'], labelled: ['continent', 'ocean', 'sea', 'strait', 'lake', 'river', 'canal', 'range', 'desert', 'region']
};
