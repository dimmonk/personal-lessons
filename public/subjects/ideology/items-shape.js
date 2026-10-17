// Ideology: the one way a passage is put to the learner (lesson standard 3.5). A passage is quoted, then the deciding questions are asked of it in
// the order the subject teaches them (Question 1 who owns, Question 2 who it is about, Question 3 what drives history, Question 4 what to do with elections, Question 5 the end state),
// then the family the answers point to; an item asks only the questions its lesson has taught. Each wrong answer carries a slip, and the slip names
// the known trap when it is one (race seen without the direction check, methods taken for content, welfare taken for socialism, nationalism taken
// for fascism, too little to tell), so the feedback says which question went wrong and why. It makes plain data and registers nothing.
//
// spec: { id, strand, quote: Text, who?: Text, asks: { own?, unit?, story?, democracy?, end?, family?, marker? } (the right option of each list),
//         turns?: ask (the question the item turns on, its facet; the last asked by default), prompt?: { [ask]: Text } (a question's own words, for a
//         marker), families?: [family id] (the names the family question offers; the lesson's own, so far as it has taught them),
//         steps?, reason: Text, need?: Text }
const IDEO_ASK_ORDER = ['own', 'unit', 'story', 'democracy', 'end', 'family', 'marker'];
// The one naming rule, taught in lesson 1 and kept in every lesson after it: a family is named only when the passage shows that family's
// signature answers; otherwise "too little to tell". The signatures are written here once; each lesson prints the rows of the families it teaches.
const IDEO_SIGNATURE = {
  marxism: 'Marxism: class is the unit and class conflict the engine. Ownership may go unsaid, because Marxism is an analysis.',
  leninism: 'Marxism–Leninism: a party rules for the class, and the state owns the businesses.',
  demsoc: 'Democratic socialism: social ownership, won through elections.',
  socdem: 'Social democracy: private ownership stays, with welfare and regulation.',
  anarchism: 'Anarchism: worker ownership and no state.',
  marketsoc: 'Market socialism: worker-owned or socially owned firms competing in markets.',
  fascism: 'Fascism: the nation, its decline and rebirth, and a leader who replaces elections.',
  nazism: 'Nazism: race, as a natural rank, is the unit.',
  liberal: 'Classical liberalism: the individual, private ownership, a limited state.',
  conservative: 'Conservatism: inherited institutions kept, and changed gradually.',
  reactionary: 'Reaction: an old order that is gone, brought back.',
  natpop: 'National populism: the people and the nation against an elite, pursued inside elections.',
  idegal: 'Identity-egalitarianism: identity groups as an unjust rank to undo.'
};
// the rows of the families a screen teaches, in the order given
const ideoRows = ids => ids.map(id => IDEO_SIGNATURE[id]);
// the names the family question offers in each lesson: the families taught so far, and "too little to tell"
const IDEO_SOCIALIST_NAMES = ['marxism', 'leninism', 'demsoc', 'socdem', 'anarchism', 'marketsoc'];
const IDEO_NAMES = {
  l1: ['marxism', 'nazism', 'idegal', 'liberal', 'fascism', 'too-little'],
  l3: [...IDEO_SOCIALIST_NAMES, 'notsoc', 'too-little'],
  l4: [...IDEO_SOCIALIST_NAMES, 'fascism', 'nazism', 'conservative', 'reactionary', 'too-little'],
  l5: [...IDEO_SOCIALIST_NAMES, 'fascism', 'nazism', 'liberal', 'conservative', 'reactionary', 'idegal', 'too-little']
};
const IDEO_PROMPTS = {
  own: 'Question 1. Who would own the businesses and farms?',
  unit: 'Question 2. Who is the story about?',
  story: 'Question 3. What drives history, in these words?',
  democracy: 'Question 4. What do the words want done with elections and the constitution?',
  end: 'Question 5. Where do the words want things to end up?',
  family: 'So which ideology is it?',
  marker: 'Does this separate fascism from an ordinary dictatorship, or could any dictatorship do it?'
};
// the options of each list (subject.js), kept here as ids so the slips can be worked out without the subject loaded
const IDEO_OPTIONS = {
  own: ['private', 'state', 'workers', 'directed', 'unsaid'],
  unit: ['class', 'nation', 'race-rank', 'identity-equal', 'individual', 'tradition', 'people', 'unsaid'],
  story: ['class-conflict', 'rebirth', 'racial-struggle', 'liberty', 'order', 'sold-out', 'unsaid'],
  democracy: ['fulfil', 'beyond', 'abolish', 'majority', 'dissolve', 'restore', 'unsaid'],
  end: ['classless', 'reborn', 'racial-order', 'open', 'restored', 'equitable', 'unsaid'],
  family: ['marxism', 'leninism', 'demsoc', 'socdem', 'anarchism', 'marketsoc', 'notsoc', 'fascism', 'nazism', 'liberal', 'conservative', 'reactionary', 'natpop', 'idegal', 'too-little'],
  marker: ['marker', 'method']
};
const IDEO_SOCIALIST = ['marxism', 'leninism', 'demsoc', 'anarchism', 'marketsoc'];
const IDEO_RACE = ['nazism', 'fascism'];
// the slip of picking `wrong` when `right` is the answer to the question `ask`
function ideoSlip(ask, right, wrong) {
  if(ask === 'unit' && [right, wrong].every(x => ['race-rank', 'identity-equal'].includes(x))) return 'skipped-direction';
  if(ask === 'family'){
    if(right === 'too-little') return 'overreached';
    if(wrong === 'too-little') return 'hedged';
    if(right === 'idegal' && IDEO_RACE.includes(wrong) || IDEO_RACE.includes(right) && wrong === 'idegal') return 'skipped-direction';
    if(right === 'socdem' && IDEO_SOCIALIST.includes(wrong)) return 'welfare-socialism';
    if(['natpop', 'conservative', 'reactionary'].includes(right) && IDEO_RACE.includes(wrong)) return 'nation-fascism';
    if(right === 'leninism' && IDEO_RACE.includes(wrong) || IDEO_RACE.includes(right) && wrong === 'leninism') return 'by-method';
    return 'wrong-family';
  }
  if(ask === 'marker') return 'by-method';
  return `wrong-${ask}`;
}
function ideoAsk(spec, ask) {
  const right = spec.asks[ask], prompt = (spec.prompt && spec.prompt[ask]) || IDEO_PROMPTS[ask];
  // the family question offers the lesson's own names (all but "not socialist" unless the item says otherwise)
  const offered = ask === 'family' ? (spec.families || IDEO_OPTIONS.family.filter(id => id !== 'notsoc')) : IDEO_OPTIONS[ask];
  return { id: ask, kind: 'choose', prompt, from: ask, right, ...(ask === 'family' ? { only: offered } : {}),
    slips: Object.fromEntries(offered.filter(id => id !== right).map(id => [id, ideoSlip(ask, right, id)])) };
}
function ideoCase(spec) {
  return {
    id: spec.id, strand: spec.strand, facets: { question: spec.turns || IDEO_ASK_ORDER.filter(ask => ask in spec.asks).pop() },
    blocks: [{ kind: 'prose', text: spec.who ? [spec.quote, spec.who] : spec.quote }],
    asks: IDEO_ASK_ORDER.filter(ask => ask in spec.asks).map(ask => ideoAsk(spec, ask)),
    ...(spec.steps ? { steps: spec.steps } : {}),
    reason: spec.reason,
    ...(spec.need ? { need: spec.need } : {})
  };
}
