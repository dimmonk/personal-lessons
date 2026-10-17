// Geography, the world and the United States: the questions parts 1 to 7 open with, each shown done before the learner's first try, in the steps of the
// way of thinking: the bigger area first, found from what the learner already knows (a lesson before, or the shape of the map), then what touches the
// place, then its water. Each one's words and closing line are its group's (gen-world.js, gen-us-map.js and gen-us-states.js, loaded first), so a place has one line.
(() => {
  const gens = FC.get('geography').gens, groupOf = id => gens[id].places;
  // the worked steps already walk the area, what touches it and the water, so the feedback line under them is the place's own reason or its cue
  const lineOf = (gen, id) => { const entry = groupOf(gen).list.find(p => p.id === id); return entry.reason || entry.cue; };
  const step = (id, does, working) => ({ id, does, working });
  const tap = (id, gen, strand, right, name, steps) => ({ id, strand, facets: { form: 'tap' }, blocks: [{ kind: 'prose', text: name }],
    asks: [{ id: 'where', kind: 'place', prompt: groupOf(gen).words.tap, map: groupOf(gen).map, right }], steps, reason: lineOf(gen, right) });
  const border = (id, gen, strand, of, name, steps) => ({ id, strand, facets: { form: 'border' }, blocks: [{ kind: 'prose', text: `What borders ${name}?` }],
    asks: [{ id: 'borders', kind: 'place', mode: 'neighbor-water', prompt: groupOf(gen).words.border, map: 'us', of }], steps, reason: lineOf(gen, of) });
  const named = (id, gen, strand, lit, accept, steps) => ({ id, strand, facets: { form: 'name' },
    blocks: [{ kind: 'prose', text: groupOf(gen).words.name }, { kind: 'map', region: groupOf(gen).map, lit: [lit] }],
    asks: [{ id: 'name', kind: 'text', prompt: groupOf(gen).words.name, accept }], steps, reason: lineOf(gen, lit) });
  const AREA = 'Area: which bigger area is it in?', TOUCH = 'Touches: what is next to it?', WATER = 'Water: what water is it on?';

  FC.items('geography', [
    tap('w-tap-africa', 'g-world-big', 'world', 'africa', 'Africa', [
      step('area', AREA, 'A continent is the biggest area there is, so start from the whole map: Africa is the big one in the middle.'),
      step('touch', TOUCH, 'Europe, the small continent you just saw named, sits just above it; Asia, the biggest, joins it at the top right.'),
      step('water', WATER, 'The Atlantic, the ocean you just saw between the Americas and Africa, is on its left, and the Indian Ocean on its right. Tap inside Africa.')]),
    named('w-name-west-africa', 'g-world-parts-west', 'world', 'west-africa', ['West Africa'], [
      step('area', AREA, 'The lit part is inside Africa, so it is one of Africa\'s five parts.'),
      step('touch', TOUCH, 'It is the bulge on the left, with Northern Africa above it and Central Africa to its right, as the map of Africa\'s five parts showed.'),
      step('water', WATER, 'It is on the Atlantic, the west side, so it is West Africa.')]),
    named('w-name-southeast-asia', 'g-world-parts-east', 'world', 'southeast-asia', ['Southeast Asia'], [
      step('area', AREA, 'The lit part is inside Asia, the biggest continent, so it is one of Asia\'s six parts.'),
      step('touch', TOUCH, 'It is at the bottom right of Asia, below East Asia and east of South Asia, as the map of Asia\'s parts showed, with its many islands.'),
      step('water', WATER, 'It sits between the Indian Ocean and the Pacific, so it is Southeast Asia.')]),
    tap('w-tap-mississippi', 'g-us-rivers', 'us-map', 'mississippi-river', 'Mississippi River', [
      step('area', AREA, 'The Mississippi runs through the middle of the country, from the Midwest down through the South.'),
      step('touch', TOUCH, 'It starts in Minnesota at the top, by the Canadian border, and runs straight down.'),
      step('water', WATER, 'It ends in the Gulf of Mexico at the bottom. Tap its line in the middle of the map.')]),
    tap('w-tap-gulf-coast', 'g-us-frame', 'us-map', 'gulf-coast', 'The Gulf Coast', [
      step('area', AREA, 'A coast is a shore, the line where the land meets the water. This one is in the South, along the bottom of the country.'),
      step('touch', TOUCH, 'It runs from Texas in the west round to Florida in the east.'),
      step('water', WATER, 'Its water is the Gulf of Mexico, the sea at the bottom of the map. Tap the shore of that sea.')]),
    tap('w-tap-rockies', 'g-us-frame', 'us-map', 'rocky-mountains', 'Rocky Mountains', [
      step('area', AREA, 'A range runs along a region. The Rockies run down the West, its inland half.'),
      step('touch', TOUCH, 'They run from Montana at the Canadian border down to New Mexico, about a third of the way in from the Pacific.'),
      step('water', WATER, 'They touch no sea: they are high inland. Tap the long range in the West.')]),
    tap('w-tap-lake-michigan', 'g-us-frame', 'us-map', 'lake-michigan', 'Lake Michigan', [
      step('area', AREA, 'The Great Lakes sit in the Midwest and the Northeast, on the Canadian border, and run west to east.'),
      step('touch', TOUCH, 'Lake Michigan is the one that hangs down from the border, the only one wholly inside the United States.'),
      step('water', WATER, 'It is itself the water: the long lake pointing south, second from the left. Tap it.')]),
    tap('w-tap-ohio', 'g-us-rivers', 'us-map', 'ohio-river', 'Ohio River', [
      step('area', AREA, 'The Ohio runs through the middle of the country, along the bottom of the Midwest. Find where it ends first.'),
      step('touch', TOUCH, 'It ends in the Mississippi, partway down: the first big river that comes in from the east, below where the Missouri comes in from the west.'),
      step('water', WATER, 'Its water is the Mississippi it runs into, and through it the Gulf of Mexico. From there follow the Ohio back up, east and a little north, toward the Northeast, and tap that line.')]),
    tap('w-tap-nevada', 'g-us-west', 'us-west', 'nevada', 'Nevada', [
      step('area', AREA, 'Nevada is in the West\'s mountain half, inland. Start from the West Coast, placed already.'),
      step('touch', TOUCH, 'The long state down the coast is California; Nevada is the one just east of it, in the middle of the coast.'),
      step('water', WATER, 'No sea or ocean touches it. Tap inside it.')]),
    border('w-border-nevada', 'g-us-west', 'us-west', 'nevada', 'Nevada', [
      step('area', AREA, 'Nevada is inland, in the West\'s mountain half, just east of California.'),
      step('touch', TOUCH, 'California is on its west side: tap California.'),
      step('water', WATER, 'Nevada does not reach the Pacific: California is in between. So it is landlocked: tap Landlocked.')]),
    tap('w-tap-iowa', 'g-us-midwest', 'us-midwest', 'iowa', 'Iowa', [
      step('area', AREA, 'Iowa is in the Midwest, on the Plains side. Start from the Mississippi, placed already.'),
      step('touch', TOUCH, 'Iowa is the state just west of the river, about a third of the way down from Canada.'),
      step('water', WATER, 'It sits between two rivers, the Mississippi on its east and the Missouri on its west, and touches no lake or sea. Tap inside it.')]),
    border('w-border-iowa', 'g-us-midwest', 'us-midwest', 'iowa', 'Iowa', [
      step('area', AREA, 'Iowa is on the Plains side of the Midwest, west of the Mississippi.'),
      step('touch', TOUCH, 'Across the Mississippi to its east is Illinois: tap Illinois.'),
      step('water', WATER, 'Rivers run along it, but no sea, ocean or Great Lake touches it. So it is landlocked: tap Landlocked.')]),
    tap('w-tap-arkansas', 'g-us-south-central', 'us-south-central', 'arkansas', 'Arkansas', [
      step('area', AREA, 'Arkansas is in the South\'s inland row, above the Gulf states. Start from the Mississippi River at the Gulf of Mexico, both placed already.'),
      step('touch', TOUCH, 'Follow the river up from the Gulf: the first state on its west bank is Louisiana; the next one up is Arkansas.'),
      step('water', WATER, 'It has the river on its east side and touches no sea. Tap inside it.')]),
    border('w-border-arkansas', 'g-us-south-central', 'us-south-central', 'arkansas', 'Arkansas', [
      step('area', AREA, 'Arkansas is inland, on the west bank of the Mississippi, above the Gulf states.'),
      step('touch', TOUCH, 'Texas, the biggest state, touches its bottom left corner: tap Texas.'),
      step('water', WATER, 'The Gulf of Mexico does not reach it: a Gulf state is in between. So it is landlocked: tap Landlocked.')]),
    tap('w-tap-south-carolina', 'g-us-south-atlantic', 'us-south-atlantic', 'south-carolina', 'South Carolina', [
      step('area', AREA, 'South Carolina is on the South\'s Atlantic coast. Start from Florida, the long peninsula at the bottom right.'),
      step('touch', TOUCH, 'Go up the Atlantic coast from Florida: the state on top of Florida is the first; the next, the small triangle, is South Carolina.'),
      step('water', WATER, 'It is on the Atlantic. Tap inside it.')]),
    border('w-border-south-carolina', 'g-us-south-atlantic', 'us-south-atlantic', 'south-carolina', 'South Carolina', [
      step('area', AREA, 'South Carolina is on the Atlantic coast, second up from Florida.'),
      step('touch', TOUCH, 'The state above it along the coast is North Carolina: tap North Carolina.'),
      step('water', WATER, 'Its coast is on the Atlantic: tap the Atlantic.')]),
    tap('w-tap-vermont', 'g-us-northeast', 'us-northeast', 'vermont', 'Vermont', [
      step('area', AREA, 'Vermont is in New England, the top right corner. Start from the Hudson River, placed already.'),
      step('touch', TOUCH, 'Follow the Hudson up to its top; Vermont is the narrow state just east of there, along Canada.'),
      step('water', WATER, 'It has no coast. Tap inside it.')]),
    border('w-border-vermont', 'g-us-northeast', 'us-northeast', 'vermont', 'Vermont', [
      step('area', AREA, 'Vermont is in New England, inland, along Canada.'),
      step('touch', TOUCH, 'Canada is along its top: tap Canada.'),
      step('water', WATER, 'Its eastern neighbor reaches the Atlantic, but Vermont does not. So it is landlocked: tap Landlocked.')])
  ]);
})();
