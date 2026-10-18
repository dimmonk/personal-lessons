// Psychology: the one way a story is put to the learner (lesson standard 3.5). A story is told, then the deciding questions are asked of it in the
// order the subject teaches them (Question 1 what is going on, Question 2 one moment or a lasting pattern), then the name its telltale signs
// point to, then what to do about it; an item asks only what its lesson has taught. Questions 3 to 5 (what it does for them, the nearest look-alike,
// what would prove the read wrong) are worked in the steps and the feedback, never asked as a list. Each wrong answer carries a slip, and the slip
// names the known trap when it is one (a moment taken for a pattern, the situation skipped, the order of act and story, admiration and attention,
// one part of DARVO, confidence taken for narcissism, too little to tell), so the feedback says which question went wrong and why. It makes plain
// data and registers nothing.
//
// spec: { id, strand, story: Text, who?: Text, asks: { kind?, span?, name?, act? } (the right option of each list), turns?: ask (the question the
//         item turns on, its facet; the last asked by default), names?: [name id] (the names the name question offers: the lesson's own),
//         acts?: [act id] (the responses the act question offers), steps?, reason: Text, need?: Text }
const PSY_ASK_ORDER = ['kind', 'span', 'name', 'resolve', 'act'];
// The one naming rule, taught in lesson 1 and kept in every lesson after it: a name is given only when the story shows its telltale signs together,
// and a lasting pattern needs years and many people; otherwise "too little to tell". The signs and the response are written here once; each lesson
// prints the rows of the names it teaches.
const PSY_SIGNATURE = {
  dissonance: 'Dissonance: an act clashes with a belief or with the person\'s picture of themselves, and the mind eases the clash after the act: an excuse, a jab at the source, making it not matter, or the belief sliding to fit what was done.',
  confirmation: 'Confirmation bias: evidence for the belief waved through, evidence against it picked apart, by a standard the other side never meets.',
  motivated: 'Motivated reasoning: the answer was chosen first, and the looking came after to back it up.',
  sunk: 'Sunk cost: the reason to go on points back at what is spent ("I have put in so much"), not forward at what the next step is worth.',
  revision: 'An honest change of mind: new evidence came in and the belief moved, even against what the person wanted.',
  anchoring: 'Anchoring: a first number, even a random or self-serving one, pulls the estimate toward it; the guess moves too little away from where it started.',
  hindsight: 'Hindsight: once the outcome is known, it feels like it was obvious all along, and the people who missed it look foolish.',
  catastrophe: 'Catastrophizing: one bad sign becomes the worst outcome, taken as certain.',
  mindread: 'Mind reading: sure of what someone else thinks, with no word from them.',
  allnothing: 'All-or-nothing: one slip turns into "total failure" or "always" and "never".',
  fairworry: 'A fair worry: the facts in the story back the concern, and it points at something you can do.',
  healthy: 'Healthy confidence: proud of what they did, and still warm to others, glad for their wins, able to take criticism.',
  traits: 'Narcissistic traits: some self-centered signs, but not the full pattern (admiration-seeking, low empathy, entitlement) for years and with many people.',
  grandiose: 'Grandiose narcissism: for years, loud superiority, a need to be admired, little empathy, and contempt or rage at anyone who threatens the image.',
  vulnerable: 'Vulnerable narcissism: for years, quiet certainty of being special and unappreciated, cold resentment toward anyone doing better, withdrawal instead of attack.',
  borderline: 'Borderline pattern: for years and with every partner, terror of being left, swings from clinging to fury, self-image that will not hold still.',
  histrionic: 'Histrionic pattern: for years, a need to be noticed, theatrical and warm, happy with any attention, escalating when attention moves elsewhere.',
  antisocial: 'Antisocial pattern: for years, routine lies and use of people, rules ignored, no remorse, and no care what anyone thinks of them.',
  gaslighting: 'Gaslighting: over and over, for a long time, a person\'s memory or senses denied until they start doubting themselves.',
  darvo: 'DARVO: in one exchange, all three: deny the act, attack the person raising it, and recast the accuser as the one at fault.',
  deflect: 'Attack and change the subject: caught out, they bring up something else the accuser did, without the full flip of victim and offender.',
  lovebomb: 'Love-bombing, then the cold turn: fast, intense devotion far beyond how well they know you, then criticism or coldness once you depend on them.',
  projection: 'Projection: they accuse someone else of the very feeling or impulse they show themselves.',
  ordinary: 'Ordinary: a fair reaction, a disagreement, a bad day; nothing that needs a name.'
};
// the response to each name, written here once (lessons 3, 6 and 7 ask it); dissonance has two: your own (choose) and someone else's (face-saving)
const PSY_ACT = {
  dissonance: ['choose', 'face-saving'], confirmation: 'same-bar', motivated: 'decide-test', sunk: 'forward', revision: 'support', anchoring: 'own-first', hindsight: 'then-not-now',
  catastrophe: 'test-thought', mindread: 'test-thought', allnothing: 'test-thought', fairworry: 'plan',
  healthy: 'support', traits: 'find-out', grandiose: 'limit', vulnerable: 'limit', borderline: 'limit', histrionic: 'limit', antisocial: 'protect',
  gaslighting: 'record', darvo: 'one-fact', deflect: 'one-fact', lovebomb: 'slow-down', projection: 'one-fact', ordinary: 'support', 'too-little': 'find-out'
};
// the five questions, said the same way on the first screen of every lesson after lesson 1, so a lesson never cites a question it has not named
const PSY_QUESTIONS = [
  'The five questions, in order: 1. What is going on: a mind talking itself into something, a move made on someone, a lasting way someone is, or an ordinary reaction? 2. One moment, or the same shape over and over? 3. What does it do for them? 4. What is the nearest look-alike, and what one detail separates them? 5. What would prove this read wrong?'
];
// the rows of the names a screen teaches, in the order given
const psyRows = ids => ids.map(id => PSY_SIGNATURE[id]);
// the names the name question offers in each lesson: those taught so far that the lesson works with, "ordinary" and "too little to tell"
const PSY_REASONING = ['dissonance', 'confirmation', 'motivated', 'sunk', 'revision'];
const PSY_TRAPS = ['catastrophe', 'mindread', 'allnothing', 'fairworry'];
const PSY_NARC = ['healthy', 'traits', 'grandiose', 'vulnerable'];
const PSY_LOOKALIKE = ['grandiose', 'vulnerable', 'borderline', 'histrionic', 'antisocial'];
const PSY_MOVES = ['gaslighting', 'darvo', 'deflect', 'lovebomb', 'projection'];
const PSY_NAMES = {
  l2: [...PSY_REASONING, 'ordinary', 'too-little'],
  l2a: ['dissonance', 'motivated', 'revision', 'ordinary', 'too-little'],
  l2b: ['anchoring', 'hindsight', ...PSY_REASONING, 'ordinary', 'too-little'],
  l3: [...PSY_TRAPS, 'ordinary', 'too-little'],
  l4: [...PSY_NARC, 'ordinary', 'too-little'],
  l5: [...PSY_LOOKALIKE, 'ordinary', 'too-little'],
  l6: [...PSY_MOVES, 'ordinary', 'too-little'],
  l7: ['dissonance', 'confirmation', 'motivated', 'sunk', 'revision', 'mindread', 'traits', 'grandiose', 'vulnerable', 'borderline', 'antisocial', ...PSY_MOVES, 'ordinary', 'too-little']
};
const PSY_ACTS = {
  l2a: ['choose', 'face-saving', 'decide-test', 'support', 'find-out'],
  l2b: ['own-first', 'then-not-now', 'forward', 'same-bar', 'support', 'find-out'],
  l3: ['test-thought', 'plan', 'support', 'find-out'],
  l6: ['record', 'one-fact', 'slow-down', 'support', 'help', 'find-out'],
  l7: ['choose', 'same-bar', 'decide-test', 'forward', 'test-thought', 'record', 'one-fact', 'slow-down', 'limit', 'protect', 'help', 'support', 'find-out']
};
const PSY_PROMPTS = {
  kind: 'Question 1. What is going on here?',
  span: 'Question 2. One moment, or a lasting pattern?',
  name: 'So what is it?',
  resolve: 'How is the clash being eased?',
  act: 'What would you do about it?'
};
// the options of each list (subject.js), kept here as ids so the slips can be worked out without the subject loaded
const PSY_OPTIONS = {
  kind: ['reasoning', 'move', 'pattern', 'ordinary'],
  span: ['situation', 'once', 'years', 'unsaid'],
  name: ['dissonance', 'confirmation', 'motivated', 'sunk', 'revision', 'anchoring', 'hindsight', 'catastrophe', 'mindread', 'allnothing', 'fairworry', 'healthy', 'traits', 'grandiose', 'vulnerable', 'borderline', 'histrionic', 'antisocial', 'gaslighting', 'darvo', 'deflect', 'lovebomb', 'projection', 'ordinary', 'too-little'],
  resolve: ['change-belief', 'change-act', 'justify', 'discredit', 'trivialize'],
  act: ['choose', 'same-bar', 'decide-test', 'face-saving', 'own-first', 'then-not-now', 'forward', 'test-thought', 'plan', 'record', 'one-fact', 'slow-down', 'limit', 'protect', 'help', 'support', 'find-out']
};
const PSY_PATTERNS = ['traits', 'grandiose', 'vulnerable', 'borderline', 'histrionic', 'antisocial'];
const PSY_TRAP_NAMES = ['catastrophe', 'mindread', 'allnothing'];
const PSY_BIASES = ['dissonance', 'confirmation', 'motivated', 'sunk'];
const both = (a, b, set) => set.includes(a) && set.includes(b);
// the slip of picking `wrong` when `right` is the answer to the question `ask`
function psySlip(ask, right, wrong) {
  if(ask === 'kind') return right !== 'pattern' && wrong === 'pattern' ? 'moment-as-pattern' : 'wrong-kind';
  if(ask === 'span'){
    if(right === 'situation' && wrong === 'years') return 'skipped-situation';
    if(['once', 'unsaid'].includes(right) && wrong === 'years') return 'moment-as-pattern';
    return 'wrong-span';
  }
  if(ask === 'name'){
    if(right === 'too-little') return 'overreached';
    if(wrong === 'too-little') return 'hedged';
    if(right === 'ordinary' && [...PSY_PATTERNS, ...PSY_MOVES].includes(wrong)) return 'by-dislike';
    if(right === 'healthy' && PSY_PATTERNS.includes(wrong)) return 'confidence';
    if(right === 'traits' && ['grandiose', 'vulnerable'].includes(wrong)) return 'part-as-pattern';
    if(both(right, wrong, ['dissonance', 'motivated'])) return 'timing';
    if(both(right, wrong, ['grandiose', 'vulnerable', 'histrionic', 'borderline'])) return 'admiration-attention';
    if(both(right, wrong, ['darvo', 'deflect'])) return 'part-for-whole';
    if(right === 'revision' && PSY_BIASES.includes(wrong)) return 'change-is-bias';
    if(right === 'fairworry' && PSY_TRAP_NAMES.includes(wrong)) return 'fair-for-trap';
    return 'wrong-name';
  }
  if(ask === 'resolve') return [right, wrong].includes('change-act') ? 'honest-move' : 'wrong-resolve';
  return 'wrong-act';
}
function psyAsk(spec, ask) {
  const right = spec.asks[ask], prompt = PSY_PROMPTS[ask];
  // the name and act questions offer the lesson's own lists; the first two questions offer their whole list
  const offered = ask === 'name' ? (spec.names || PSY_OPTIONS.name) : ask === 'act' ? (spec.acts || PSY_OPTIONS.act) : PSY_OPTIONS[ask];
  return { id: ask, kind: 'choose', prompt, from: ask, right, ...(['name', 'act'].includes(ask) ? { only: offered } : {}),
    slips: Object.fromEntries(offered.filter(id => id !== right).map(id => [id, psySlip(ask, right, id)])) };
}
function psyCase(spec) {
  return {
    id: spec.id, strand: spec.strand, facets: { question: spec.turns || PSY_ASK_ORDER.filter(ask => ask in spec.asks).pop() },
    blocks: [{ kind: 'prose', text: spec.who ? [spec.story, spec.who] : spec.story }],
    asks: PSY_ASK_ORDER.filter(ask => ask in spec.asks).map(ask => psyAsk(spec, ask)),
    ...(spec.steps ? { steps: spec.steps } : {}),
    reason: spec.reason,
    ...(spec.need ? { need: spec.need } : {})
  };
}
