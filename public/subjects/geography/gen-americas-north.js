// Geography, Canada (part 12): the group of places part 12 asks about, made into questions from the map data `americas-north`, and the three questions the lesson
// shows done. Fourteen places: the ten provinces, the three territories and Hudson Bay. A province has no flag of its own that this subject asks, so the group asks
// three forms (a name to tap, a lit place to name, a neighbor and its water) and there is no flags lesson. The United States and Greenland are on the map but are only
// ever the neighbor a question ends on, never asked.
// Each place's feedback is the way of thinking in three lines (place-gen.js placeReasonOf): the area it sits in (`area`, written here), what touches it and its
// water (the map data's, never written by hand), then `cue`, the one thing that tells it from the place it is mixed up with. A wrong tap on a place that is often
// mixed up carries its slip (the subject's `lists.slip`). The five areas (the Pacific coast, the Prairies, central Canada, the Atlantic provinces, the North) are the
// regions Canada's own government and encyclopedia use (Statistics Canada, "Provinces and territories"; The Canadian Encyclopedia, "Region"); the neighbors, the water,
// the sizes and the shapes are the map data's (Natural Earth v5.1.2).
(() => {
  const WORDS = { tap: 'Tap it on the map.', name: 'What is the lit place called?',
    border: 'Tap one place next to it, a province, a territory or the United States, then the water it touches. If no water touches it, tap Landlocked.' };
  const PACIFIC = 'the Pacific coast, the far west, on its own', PRAIRIES = 'the Prairies, three provinces side by side above the United States';
  const CENTRAL = 'central Canada, the two big provinces in the middle, around the Great Lakes and Hudson Bay';
  const MARITIMES = 'the Atlantic provinces, the three small ones on the east coast', NORTH = 'the North, the three territories above the provinces';
  const place = (id, name, area, cue, accept = [name]) => ({ id, name, accept, area, ...(cue ? { cue } : {}) });
  const PLACES = [
    place('british-columbia', 'British Columbia', PACIFIC, 'It is the only province on the Pacific, the far-west edge of the country.'),
    place('alberta', 'Alberta', `${PRAIRIES}, the western one`, 'Tell it from Saskatchewan: Alberta is the western one, against British Columbia; Saskatchewan is the one in the middle. Neither has a coast.'),
    place('saskatchewan', 'Saskatchewan', `${PRAIRIES}, the middle one`, 'Tell it from Alberta and Manitoba: Saskatchewan is the middle one, with no coast; Alberta is west of it and Manitoba, on Hudson Bay, is east of it.'),
    place('manitoba', 'Manitoba', `${PRAIRIES}, the eastern one`, 'Tell it from Saskatchewan: Manitoba is the eastern one, and the only one of the three with a coast, on Hudson Bay.'),
    place('ontario', 'Ontario', `${CENTRAL}, the western one`, 'Tell it from Quebec: Ontario is the western one, with Manitoba beside it and the Great Lakes on its south; Quebec is the larger one to the east.'),
    place('quebec', 'Quebec', `${CENTRAL}, the eastern one`, 'Tell it from Ontario: Quebec is the larger one, east of Ontario, with New Brunswick, Newfoundland and Labrador and the Gulf of Saint Lawrence beside it.'),
    place('new-brunswick', 'New Brunswick', `${MARITIMES}, the one joined to the mainland`, 'Tell it from Nova Scotia: New Brunswick is the one that touches Quebec and the United States; Nova Scotia hangs off it to the southeast.'),
    place('nova-scotia', 'Nova Scotia', `${MARITIMES}, the peninsula`, 'Tell it from New Brunswick: Nova Scotia is the long peninsula that hangs off New Brunswick into the Atlantic; New Brunswick is the one that touches Quebec and the United States.'),
    place('prince-edward-island', 'Prince Edward Island', `${MARITIMES}, the island`, 'It is the smallest province, a small island in the Gulf of Saint Lawrence, off the coast of New Brunswick and Nova Scotia.',
      ['Prince Edward Island', 'PEI']),
    place('newfoundland-and-labrador', 'Newfoundland and Labrador', 'the Atlantic provinces, the far east, out in the Atlantic',
      'It is the one in two pieces: the island of Newfoundland, out in the Atlantic, and Labrador, the mainland piece to its northwest, which touches Quebec.', ['Newfoundland and Labrador', 'Newfoundland']),
    place('yukon', 'Yukon', `${NORTH}, the far northwest`, 'Tell it from the Northwest Territories: Yukon is the small one in the far northwest, on the Alaska border; the Northwest Territories is east of it.'),
    place('northwest-territories', 'Northwest Territories', `${NORTH}, the middle one`, 'Tell it from Yukon and Nunavut: the Northwest Territories is the middle territory, east of Yukon and west of Nunavut.',
      ['Northwest Territories', 'NWT']),
    place('nunavut', 'Nunavut', `${NORTH}, the eastern one`, 'Tell it from the Northwest Territories: Nunavut is the biggest of all, the eastern territory, with the Arctic islands and a shore on Hudson Bay.')
  ];
  // Hudson Bay is water, so it has no neighbors to be asked for: it has its own reason in place of the three lines (the shores are the map data's water lists: Manitoba, Ontario, Quebec, Nunavut)
  const HUDSON_BAY = { id: 'hudson-bay', name: 'Hudson Bay', accept: ['Hudson Bay'], reason: 'Hudson Bay is the big bay in the north of Canada, with Nunavut, Manitoba, Ontario and Quebec on its shores; James Bay is its small arm at the bottom.' };

  FC.gen('geography', [
    { id: 'g-americas-north', strand: 'americas-north',
      places: { map: 'americas-north', forms: ['tap', 'name', 'border'], words: WORDS,
        slips: { alberta: 'canada-prairies', saskatchewan: 'canada-prairies', manitoba: 'canada-prairies', ontario: 'canada-ontario-quebec', quebec: 'canada-ontario-quebec',
          'new-brunswick': 'canada-maritimes', 'nova-scotia': 'canada-maritimes', 'prince-edward-island': 'canada-maritimes',
          yukon: 'canada-territories', 'northwest-territories': 'canada-territories', nunavut: 'canada-territories' },
        list: [...PLACES, HUDSON_BAY] } }
  ]);

  // the three questions part 12 opens with, each shown done in the steps of the way of thinking (the bigger area first, then what touches it, then its water), each
  // using only what the names screens showed or a lesson before; its closing line is the place's own cue (items-worked-us.js does the same for the other parts)
  const gens = FC.get('geography').gens, GEN = 'g-americas-north', group = gens[GEN].places, STRAND = gens[GEN].strand;
  const lineOf = id => { const entry = group.list.find(p => p.id === id); return entry.reason || entry.cue; };
  const step = (id, does, working) => ({ id, does, working });
  const AREA = 'Area: which bigger area is it in?', TOUCH = 'Touches: what is next to it?', WATER = 'Water: what water is it on?';
  const tap = (id, right, name, steps) => ({ id, strand: STRAND, facets: { form: 'tap' }, blocks: [{ kind: 'prose', text: name }],
    asks: [{ id: 'where', kind: 'place', prompt: WORDS.tap, map: group.map, right }], steps, reason: lineOf(right) });
  const named = (id, lit, steps) => ({ id, strand: STRAND, facets: { form: 'name' },
    blocks: [{ kind: 'prose', text: WORDS.name }, { kind: 'map', region: group.map, lit: [lit] }],
    asks: [{ id: 'name', kind: 'text', prompt: WORDS.name, accept: group.list.find(p => p.id === lit).accept }], steps, reason: lineOf(lit) });
  const border = (id, of, name, steps) => ({ id, strand: STRAND, facets: { form: 'border' }, blocks: [{ kind: 'prose', text: `What borders ${name}?` }],
    asks: [{ id: 'borders', kind: 'place', mode: 'neighbor-water', prompt: WORDS.border, map: group.map, of }], steps, reason: lineOf(of) });
  FC.items('geography', [
    tap('w-tap-saskatchewan', 'saskatchewan', 'Saskatchewan', [
      step('area', AREA, 'Saskatchewan is one of the three Prairie provinces, which lie side by side just above the United States. Start from Montana and North Dakota, which you placed in The West and The Midwest.'),
      step('touch', TOUCH, 'Alberta is the Prairie province against British Columbia, on the west; Manitoba is the one on the east. Saskatchewan is the one in the middle, above the east end of Montana and North Dakota.'),
      step('water', WATER, 'No ocean or bay reaches it: other provinces and territories and the United States lie between it and every coast. It is landlocked. Tap inside it.')]),
    named('w-name-manitoba', 'manitoba', [
      step('area', AREA, 'The lit province is one of the three Prairie provinces, in the row just above the United States.'),
      step('touch', TOUCH, 'It is the eastern one: Saskatchewan is on its west and Ontario on its east, with North Dakota and Minnesota below it, states you placed in The Midwest.'),
      step('water', WATER, 'It has a shore on Hudson Bay, the big bay in the north, and it is the only Prairie province that does. The Prairie province on Hudson Bay is Manitoba.')]),
    border('w-border-nova-scotia', 'nova-scotia', 'Nova Scotia', [
      step('area', AREA, 'Nova Scotia is in the Atlantic provinces, one of the three small provinces on the east coast, southeast of Quebec.'),
      step('touch', TOUCH, 'New Brunswick is the one province it joins by land, on its northwest side: tap New Brunswick.'),
      step('water', WATER, 'It is a peninsula sticking out into the Atlantic Ocean, the ocean on the east side of the whole map, which you met in The continents and the oceans: tap the Atlantic.')])
  ]);
})();
