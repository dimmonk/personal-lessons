// Statistical Claims, Unit Three: cases shown inside cards, part four (everyone counted but only a handful; the look-alike cases that
// go with it; and the case asked after the key's question). Field guide: see u3.cases-teach-1.js.

FC.cases('stats', 'u3', [

  /* ---------- Too few to trust ---------- */
  { id: 'cn-school-ranking', use: 'teach', tier: 'clean', setting: 'learning', topic: 'a newspaper ranking of schools by reading', name: 'The reading ranking',
    text: "A county newspaper ranked its elementary schools by the share of sixth graders at the top reading level. Fenwick Elementary came first: 9 of its 10 sixth graders reached the top level, which is 90 in every 100. The paper wrote: 'Fenwick is the best school in the county for reading.' Dalton Elementary, the county's biggest, had 150 of its 200 sixth graders at the top level, which is 75 in every 100.",
    outcome: 'smalln', route: { S1: ['counted'], A1: ['handful'] },
    cues: { S1: ['9 of its 10 sixth graders reached the top level', 'Fenwick is the best school in the county for reading'], A1: '9 of its 10 sixth graders reached the top level' } },

  { id: 'cn-leaderboard', use: 'check', tier: 'clean', setting: 'leisure', topic: 'a game leaderboard and a perfect win rate', name: 'The game leaderboard',
    text: "A word-game app shows a leaderboard of win rates. The top place is held by a player called Moth: 100%, with 5 wins from 5 games. The app's blog says: 'Moth is the best player in the game.'",
    outcome: 'smalln', route: { S1: ['counted'], A1: ['handful'] },
    cues: { S1: ['5 wins from 5 games', 'Moth is the best player in the game'], A1: '5 wins from 5 games' },
    reason: { S1: 'The blog speaks for how good Moth is, but the figure comes from five games: {cue:S1}.',
              A1: 'Every game Moth has played is counted, so nobody is left out. But there are only five: {cue:A1}. One lost game would make it 4 of 5, which is 80 in every 100, and the leaderboard puts a player with five games above players with five hundred.' } },

  /* ---------- The look-alike with the claim that holds: one player, four kicks and eighty ---------- */
  { id: 'cn-penalties-four', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'a school soccer player and 4 penalties', name: 'The penalty taker, four kicks',
    text: "Dana plays for her school's soccer team. She has taken 4 penalty kicks this year and scored all 4. The coach says: 'Dana never misses a penalty.'",
    outcome: 'smalln', route: { S1: ['counted'], A1: ['handful'] },
    cues: { S1: ['taken 4 penalty kicks this year and scored all 4', 'Dana never misses a penalty'], A1: 'taken 4 penalty kicks this year and scored all 4' } },

  { id: 'cn-penalties-eighty', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'a school soccer player and eighty penalties', name: 'The penalty taker, eighty kicks',
    text: "Dana plays for her school's soccer team. Over six seasons she has taken 80 penalty kicks and scored 68. The coach says: 'Dana scores 85 penalties in every 100.'",
    outcome: 'samp_ok', route: { S1: ['holds'], H1: ['group'] },
    cues: { S1: 'Over six seasons she has taken 80 penalty kicks and scored 68', H1: 'Dana scores 85 penalties in every 100' } },

  /* ---------- The case asked after the key's question ---------- */
  { id: 'cn-bakery', use: 'check', tier: 'clean', setting: 'money', topic: 'a new bakery on its first day and three ratings', name: 'The new bakery',
    text: "A new bakery has been open for one day, and three customers have come in. The owner asked each of them for a rating, and all three gave five stars. The sign in the window now says: 'Rated five stars by every customer.'",
    outcome: 'smalln', route: { S1: ['counted'], A1: ['handful'] },
    cues: { S1: ['all three gave five stars', 'Rated five stars by every customer'], A1: 'three customers have come in' },
    reason: { S1: 'The sign makes "five stars by every customer" sound like a verdict on the bakery, but the figure comes from three people: {cue:S1}.',
              A1: 'Nobody was left out, and nobody chose themselves in: every customer there has been is counted. But there are only a handful: {cue:A1}. One two-star rating would turn "every customer" into two of three, and the sign would say nothing.' } }
]);
