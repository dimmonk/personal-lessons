/* ===================== LESSONS: RECALLING AN ANSWER, AND CHECKING IT ===================== */
// Lesson standard 26.1 (the `text` ask with accepted answers) and 26.7 (X14), as built in step 9. A question is answered from memory in a few
// words and checked against the answers a published list accepts. Pure: no page and no storage. Needs view.js (paras).
//   ask    { id, kind: 'text', prompt, accept: [Entry] | { own: 'answers.q23' }, count?: n, when? }
//   Entry  'Writes laws'                                        one accepted answer; words in brackets are optional
//          { text: 'Legislative, executive, and judicial', parts: ['Legislative', 'executive', 'judicial'] }
//                                                               one accepted answer made of parts, said in any order; `text` is printed; a part may be
//                                                               a list of wordings, any one of which says it (['Judicial (branch)', 'Judiciary'])
//          { text, as?: [wording], also?: [wording] }           `text` is what is printed. `as` says what it means when its brackets are not
//                                                               optional words ("Resolves disputes (disagreements)": another word, not an extra one);
//                                                               `also` adds clear equivalents the list does not print ("Makes laws" for "Writes laws")
// What counts as the same, after both are cleaned: capital letters, punctuation, "a", "an", "the", "and", "or", "can" and "they" do not matter; a
// number written as words is the number ("twenty-seven" is 27, "twenty second" is 22nd); brackets are optional; a plural or a verb ending is not
// another word ("veto" and "vetoes", "law" and "laws", "carry" and "carries"); and one small misspelling in the whole answer is forgiven (one word
// that is one letter off, in words of four letters or more, never in a number). Anything else is a miss: a word left out, a
// word added, the other branch of government. `count: n` needs n different accepted answers, said once each; more are fine, a repeat is not
// counted twice. A learner whose answer says the same in other words says so (a claim, queue.js); the app never decides that for them.

const RECALL_MAX = 200;             // the most a learner may type for one answer
const RECALL_SLIPS = 1;             // one small misspelling in a whole answer
const RECALL_MIN_WORD = 4;          // a word shorter than this must be exact
const RECALL_OPTIONAL_MAX = 4;      // brackets in one accepted answer
const RECALL_LEFT_OUT = ['a', 'an', 'the', 'and', 'or', 'can', 'they'];
const RECALL_INFLECT_MIN = 3;       // a word shorter than this has no endings to forgive

/* ---------- numbers written as words ---------- */
const RECALL_UNITS = { zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, eleven: 11, twelve: 12, thirteen: 13,
  fourteen: 14, fifteen: 15, sixteen: 16, seventeen: 17, eighteen: 18, nineteen: 19 };
const RECALL_TENS = { twenty: 20, thirty: 30, forty: 40, fifty: 50, sixty: 60, seventy: 70, eighty: 80, ninety: 90 };
const RECALL_ORDINALS = { first: 1, second: 2, third: 3, fourth: 4, fifth: 5, sixth: 6, seventh: 7, eighth: 8, ninth: 9, tenth: 10, eleventh: 11, twelfth: 12,
  thirteenth: 13, fourteenth: 14, fifteenth: 15, sixteenth: 16, seventeenth: 17, eighteenth: 18, nineteenth: 19, twentieth: 20, thirtieth: 30, fortieth: 40,
  fiftieth: 50, sixtieth: 60, seventieth: 70, eightieth: 80, ninetieth: 90 };
// what a word is as part of a number: { v, kind, ordinal } or null. kinds: unit (0 to 9), teen (10 to 19), tens, hundred, thousand
function recallWordNumber(word){
  if(word in RECALL_UNITS) return { v: RECALL_UNITS[word], kind: RECALL_UNITS[word] < 10 ? 'unit' : 'teen', ordinal: false };
  if(word in RECALL_TENS) return { v: RECALL_TENS[word], kind: 'tens', ordinal: false };
  if(word === 'hundred') return { v: 100, kind: 'hundred', ordinal: false };
  if(word === 'thousand') return { v: 1000, kind: 'thousand', ordinal: false };
  if(word in RECALL_ORDINALS) { const v = RECALL_ORDINALS[word]; return { v, kind: v < 10 ? 'unit' : v < 20 ? 'teen' : 'tens', ordinal: true }; }
  return null;
}
// which kind of number word may follow which inside one number ("twenty seven", "four hundred thirty five"; not "two three")
const RECALL_FOLLOWS = { unit: ['hundred', 'thousand'], teen: ['hundred', 'thousand'], tens: ['unit', 'thousand'], hundred: ['unit', 'teen', 'tens', 'thousand'],
  thousand: ['unit', 'teen', 'tens', 'hundred'] };
const recallSuffix = n => n % 100 >= 11 && n % 100 <= 13 ? 'th' : ({ 1: 'st', 2: 'nd', 3: 'rd' })[n % 10] || 'th';
function recallAddWord(run, w){
  if(w.kind === 'hundred') return { ...run, current: (run.current || 1) * 100, last: w.kind, ordinal: w.ordinal };
  if(w.kind === 'thousand') return { total: run.total + (run.current || 1) * 1000, current: 0, last: w.kind, ordinal: w.ordinal };
  return { ...run, current: run.current + w.v, last: w.kind, ordinal: w.ordinal };
}
// words that make a number become that number: ["twenty", "seven"] -> ["27"]; a number said as an ordinal becomes "22nd"
function recallMergeNumbers(words){
  const out = [];
  let run = null;
  const flush = () => { if(run){ const n = run.total + run.current; out.push(run.ordinal ? `${n}${recallSuffix(n)}` : String(n)); run = null; } };
  for(const word of words){
    const w = recallWordNumber(word);
    if(!w){ flush(); out.push(word); continue; }
    if(run && !run.ordinal && (RECALL_FOLLOWS[run.last] || []).includes(w.kind)) run = recallAddWord(run, w);
    else { flush(); run = recallAddWord({ total: 0, current: 0 }, w); }
  }
  flush();
  return out;
}

/* ---------- cleaning ---------- */
// the words of an answer, cleaned: lower case, no accents, no punctuation, "U.S." is "us", "state's" is "states", "1,000" is 1000, numbers as digits
function recallTokens(text){
  const plain = String(text).normalize('NFD').replace(/\p{M}/gu, '').toLowerCase().replace(/[’‘`]/g, "'")
    .replace(/(\d),(?=\d{3}\b)/g, '$1').replace(/[.']/g, '').replace(/&/g, ' and ').replace(/[^a-z0-9\s]/g, ' ');
  return recallMergeNumbers(plain.split(/\s+/).filter(w => w && !RECALL_LEFT_OUT.includes(w)));
}
// every way to say an accepted answer with its bracketed words in or out: [[word]]. A bracket that offers a choice, "(U.S. or national)", can also be
// said with either of its halves.
function recallVariants(text){
  const segments = [];
  let last = 0, found;
  const brackets = /\(([^)]*)\)/g;
  while((found = brackets.exec(text))){ segments.push({ t: text.slice(last, found.index) }, { t: found[1], optional: true }); last = brackets.lastIndex; }
  segments.push({ t: text.slice(last) });
  const optional = segments.filter(s => s.optional);
  if(optional.length > RECALL_OPTIONAL_MAX) lessonFail(`"${text}" has ${optional.length} brackets; at most ${RECALL_OPTIONAL_MAX}`);
  const choices = segments.map(s => s.optional ? ['', s.t, ...(/\sor\s/.test(s.t) ? s.t.split(/\s+or\s+/) : [])] : [s.t]);
  const seen = new Set(), out = [];
  const walk = (at, said) => {
    if(at === choices.length){
      const tokens = recallTokens(said.join(' '));
      if(tokens.length && !seen.has(tokens.join(' '))){ seen.add(tokens.join(' ')); out.push(tokens); }
      return;
    }
    choices[at].forEach(c => walk(at + 1, [...said, c]));
  };
  walk(0, []);
  return out;
}
const recallEntryText = entry => typeof entry === 'string' ? entry : entry.text;
// the wordings an accepted answer is matched against, each with its brackets: what the entry says it means (`as`, else its printed text), and `also`
const recallWordings = entry => typeof entry === 'string' ? [entry] : [...(entry.as || [entry.text]), ...(entry.also || [])];
const uniqueWordings = list => list.filter((w, i) => list.findIndex(x => x.join(' ') === w.join(' ')) === i);
const recallPartVariants = part => uniqueWordings((Array.isArray(part) ? part : [part]).flatMap(recallVariants));
// an accepted answer compiled for matching: { text, variants } or { text, parts: [variants] }
const RECALL_COMPILED = new WeakMap();
function recallCompile(entry){
  if(typeof entry === 'object' && entry !== null && RECALL_COMPILED.has(entry)) return RECALL_COMPILED.get(entry);
  const made = entry.parts ? { text: entry.text, parts: entry.parts.map(recallPartVariants) }
    : { text: recallEntryText(entry), variants: uniqueWordings(recallWordings(entry).flatMap(recallVariants)) };
  if(typeof entry === 'object' && entry !== null) RECALL_COMPILED.set(entry, made);
  return made;
}

/* ---------- matching ---------- */
// one word is one letter off from another: one letter changed, left out, added, or two neighbours swapped
function recallOneOff(a, b){
  if(Math.abs(a.length - b.length) > 1) return false;
  if(a.length === b.length){
    const at = [...a].findIndex((ch, i) => ch !== b[i]);
    if(at === a.length - 1 || a.slice(at + 1) === b.slice(at + 1)) return true;
    return a[at] === b[at + 1] && a[at + 1] === b[at] && a.slice(at + 2) === b.slice(at + 2);
  }
  const [long, short] = a.length > b.length ? [a, b] : [b, a], at = [...short].findIndex((ch, i) => ch !== long[i]);
  return at < 0 || short.slice(at) === long.slice(at + 1);
}
// one word is the other with a plural or verb ending: law and laws, veto and vetoes, carry and carries (never a number, never a very short word)
function recallInflects(a, b){
  if(/\d/.test(a + b) || Math.min(a.length, b.length) < RECALL_INFLECT_MIN) return false;
  const [short, long] = a.length <= b.length ? [a, b] : [b, a];
  return long === short + 's' || long === short + 'es' || (short.endsWith('y') && long === short.slice(0, -1) + 'ies');
}
// the cost (0, or 1 for the small misspelling) of the typed words from `at` being exactly this accepted wording; null when they are not
function recallFit(tokens, at, wording){
  if(at + wording.length > tokens.length) return null;
  let cost = 0;
  for(let i = 0; i < wording.length; i++){
    const typed = tokens[at + i], wanted = wording[i];
    if(typed === wanted || recallInflects(typed, wanted)) continue;
    const forgiven = typed.length >= RECALL_MIN_WORD && wanted.length >= RECALL_MIN_WORD && !/\d/.test(typed + wanted) && recallOneOff(typed, wanted);
    if(!forgiven || ++cost > RECALL_SLIPS) return null;
  }
  return cost;
}
// every way an answer can begin at `at` and be exactly this accepted answer: [{ end, cost }]; an answer made of parts, in any order
function recallParts(tokens, at, parts, left){
  if(!left.length) return [{ end: at, cost: 0 }];
  return left.flatMap(p => parts[p].flatMap(wording => {
    const cost = recallFit(tokens, at, wording);
    return cost === null ? [] : recallParts(tokens, at + wording.length, parts, left.filter(x => x !== p)).map(r => ({ end: r.end, cost: r.cost + cost }));
  }));
}
function recallSpans(tokens, at, entry){
  if(entry.parts) return recallParts(tokens, at, entry.parts, entry.parts.map((_, i) => i));
  return entry.variants.flatMap(wording => { const cost = recallFit(tokens, at, wording); return cost === null ? [] : [{ end: at + wording.length, cost }]; });
}

const recallEntriesOf = ask => ask.accept.map(recallCompile);
const recallNeed = ask => ask.count || 1;
// The best way the typed words are made only of accepted answers: { cost, used: [index of each different accepted answer given] }, or null. At least
// `count` different ones; the same one said twice counts once.
function recallMatch(ask, typed){
  const tokens = recallTokens(typed);
  if(!tokens.length || tokens.length > RECALL_MAX) return null;
  const entries = recallEntriesOf(ask), need = recallNeed(ask);
  let best = null;
  const walk = (at, cost, used) => {
    if(at === tokens.length){ if(used.length >= need && (!best || cost < best.cost)) best = { cost, used }; return; }
    entries.forEach((entry, i) => recallSpans(tokens, at, entry).forEach(span => {
      if(cost + span.cost <= RECALL_SLIPS) walk(span.end, cost + span.cost, used.includes(i) ? used : [...used, i]);
    }));
  };
  walk(0, 0, []);
  return best;
}
const scoreRecall = (data, ask, answer) => recallMatch(ask, answer) ? 'ok' : 'no';
// the accepted answers printed, each with whether the typed words gave it
const recallGiven = (ask, typed) => (recallMatch(ask, typed) || { used: [] }).used;

/* ---------- the learner's own answers ---------- */
// "Answers will vary" questions read what the learner entered in the answers form (26.3): `accept: { own: 'answers.q23' }`. The entry may hold several
// answers, one after another with a semicolon between (two senators).
const recallOwnKey = ask => String(ask.accept.own).replace(/^answers\./, '');
const recallOwnEntries = value => String(value === undefined || value === null ? '' : value).split(/[;\n]/).map(s => s.trim()).filter(Boolean);
const recallIsOwn = ask => ask.kind === 'text' && !!ask.accept && !Array.isArray(ask.accept);
// The question with the learner's entries put in place of `own`: { ...inst, item }, and `ownMissing` when an entry is empty. A made copy; nothing changes.
function recallWithOwn(inst, answers){
  if(!inst.item.asks.some(recallIsOwn)) return inst;
  let missing = false;
  const asks = inst.item.asks.map(ask => {
    if(!recallIsOwn(ask)) return ask;
    const entries = recallOwnEntries((answers || {})[recallOwnKey(ask)]);
    if(!entries.length) missing = true;
    return { ...ask, accept: entries, ownEntry: true };
  });
  return { ...inst, item: { ...inst.item, asks }, ...(missing ? { ownMissing: true } : {}) };
}

// a question that reads the learner's own answers can be asked only when every one of them is entered
const recallDefReady = (def, answers) => !(def.asks || []).some(a => recallIsOwn(a) && !recallOwnEntries((answers || {})[recallOwnKey(a)]).length);

/* ---------- what is wrong with an ask's accepted answers (V70, V74) ---------- */
function recallProblems(ask){
  if(!Array.isArray(ask.accept)) return [];
  const problems = [];
  if(!ask.accept.length) return ['it accepts no answer'];
  let entries = [];
  try { entries = ask.accept.map(recallCompile); } catch (error) { return [error.message]; }
  entries.forEach(e => {
    if (e.parts && e.parts.length < 2) problems.push(`"${e.text}" is said in parts, and has fewer than two`);
    if ((e.parts ? e.parts.some(p => !p.length) : !e.variants.length)) problems.push(`"${e.text}" has no words once it is cleaned`);
  });
  const keys = entries.map(e => e.parts ? [...e.parts.map(p => p[0].join(' '))].sort().join('|') : e.variants.map(v => v.join(' ')).sort().join('|'));
  keys.forEach((k, i) => { if (keys.indexOf(k) !== i) problems.push(`"${entries[i].text}" is accepted twice`); });
  if (recallNeed(ask) > 1 && recallNeed(ask) > new Set(keys).size) problems.push(`it wants ${recallNeed(ask)} answers and accepts only ${new Set(keys).size}`);
  return problems;
}
