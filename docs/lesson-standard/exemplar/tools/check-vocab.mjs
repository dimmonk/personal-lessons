// Section 8 of docs/lesson-standard.md, first half: shapes (V0) and one vocabulary (V1 to V9, V28, V36, V50).
// Rule numbers are the standard's. Each rule fails naming the card or case and the field.
import { TOKEN, paras, cuesOf } from './load.mjs';

// every string in a value, with the path it came from
export function* strings(value, path = '') {
  if (typeof value === 'string') yield [path, value];
  else if (value && typeof value === 'object') for (const [k, x] of Object.entries(value)) yield* strings(x, `${path}.${k}`);
}
// fields that hold ids, codes and enums, never prose
const STRUCTURAL = /\.(id|kind|use|tier|setting|topic|case|first|second|outcome|ledger|step|mark|after|looksLike|is|about|answer|voice|neighbour|resembles|option|taughtIn|branch|term|expect|echo|continues|type|name|demo)$/;
const STRUCTURAL_IN = /\.(route|cues|segments\.\d+\.text|pair|among|testedBy|cases|also|feature|map)(\.|$)/;
// fields that quote what people say; they may hold key wording and words to avoid (S5, V2)
const QUOTED = /\.(text|idea|wild\.\d+|options\.\d+\.text)$/;
export const prose = obj => [...strings(obj)].filter(([p]) => !STRUCTURAL.test(p) && !STRUCTURAL_IN.test(p) && !QUOTED.test(p));
const norm = s => s.toLowerCase().replace(/[’']/g, '').replace(/[^a-z0-9£ ]+/g, ' ').replace(/\s+/g, ' ').trim();
const words = s => new Set(norm(s).split(' ').filter(w => w.length > 3));

const CARD = {
  orient: [['h', 'canDo', 'everyday', 'map'], ['add']],
  term: [['term', 'h', 'link', 'case', 'plain'], ['after']],
  meet: [['outcome', 'link', 'case', 'mark', 'strip', 'explain', 'feature', 'name'], []],
  again: [['outcome', 'link', 'first', 'second', 'step', 'instruction', 'prompt', 'shared'], ['h']],
  lens: [['h', 'link', 'body', 'fixed', 'varies'], []],
  portrait: [['outcome', 'link', 'typical', 'not', 'wild', 'self', 'ask'], ['h']],
  check: [['after', 'case', 'ask'], []],
  lookalike: [['ledger', 'link', 'cases', 'instruction', 'prompt', 'difference'], ['h']],
  exception: [['ledger', 'looksLike', 'is', 'h', 'link', 'case', 'setup', 'prompt', 'because'], ['take']],
  refute: [['about', 'h', 'link', 'idea', 'verdict', 'right', 'testedBy'], []],
  question: [['step', 'h', 'link', 'decides', 'how'], ['whenBoth']],
  worked: [['h', 'link', 'case', 'steps', 'hold', 'impression'], []],
  recap: [['h', 'link', 'carry'], []],
  transfer: [['h', 'link', 'ask', 'prompts', 'places'], []],
  plan: [['optional', 'h', 'link', 'intro', 'cues'], []]
};
const CASE = {
  story: [['use', 'tier', 'setting', 'topic', 'text'], ['name', 'outcome', 'route', 'cues', 'segments', 'reason', 'not', 'miss', 'wouldChange', 'echo', 'also']],
  reverse: [['use', 'kind', 'outcome', 'expect', 'options', 'why'], []],
  claim: [['use', 'text', 'ask', 'fault', 'corrected'], ['context']]
};
const filled = x => x !== undefined && x !== null && x !== '' && !(Array.isArray(x) && x.length === 0);

export function checkVocab({ subject, v, check, cards, allCases, scanned }) {
  const { unit, key } = v;

  /* V0: every object matches its shape exactly */
  const shape = (obj, [req, opt], rule, label, base = ['id', 'kind', 'continues']) => {
    req.forEach(f => check(filled(obj[f]), rule, `${label}: required field "${f}" is missing or empty`));
    Object.keys(obj).forEach(f => check([...base, ...req, ...opt].includes(f), rule, `${label}: unknown field "${f}"`));
  };
  cards.forEach(c => { check(!!CARD[c.kind], 'V0', `${c.id}: unknown card kind ${c.kind}`); if (CARD[c.kind]) shape(c, CARD[c.kind], 'V0', `card ${c.id}`); });
  for (const c of [...allCases, ...subject.specimens]) {
    const kind = c.kind === 'reverse' ? 'reverse' : c.use === 'claim' ? 'claim' : 'story';
    const [req, opt] = CASE[kind];
    shape(c, [subject.specimens.includes(c) ? req.filter(f => f !== 'use') : req, opt], 'V0', `case ${c.id}`, ['id']);
    check(c.use === undefined || ['teach', 'check', 'drill', 'return', 'claim'].includes(c.use), 'V0', `case ${c.id}: use "${c.use}"`);
    if (kind === 'story') {
      check(['clean', 'varied', 'misleading'].includes(c.tier), 'V0', `case ${c.id}: tier "${c.tier}"`);
      check(subject.meta.settings.includes(c.setting), 'V33', `case ${c.id}: setting "${c.setting}" is not in subject.settings`);
    }
  }
  check(['C', 'F', 'P'].includes(unit.kind) && ['draft', 'live'].includes(unit.status), 'V0', 'unit.kind or unit.status is not a known value');
  const ids = [...Object.values(subject.cases).flat(), ...subject.specimens].map(c => c.id);
  check(new Set(ids).size === ids.length, 'V0', `case ids must be unique within the subject: ${ids.filter((x, i) => ids.indexOf(x) !== i)}`);
  cards.filter(c => ['again', 'exception'].includes(c.kind)).forEach(c => check(typeof c.prompt.answer === 'string' && c.prompt.kind === 'phrase', 'V0', `${c.id}: a tap prompt needs its answer in data`));

  /* V1: the key is complete, and no name is two names joined */
  for (const o of key.outcomes) check(['n', 'plain', 'needs', 'group', 'unit'].every(f => typeof o[f] === 'string' && o[f]) && Array.isArray(o.aka), 'V1', `outcome ${o.id}: missing n, plain, needs, aka, group or unit`);
  for (const s of v.steps) {
    check(/\?$/.test(s.q) && !!s.purpose && !!s.why, 'V1', `${s.code}: q must end in "?", and purpose and why are required`);
    for (const o of s.options) {
      check(!!o.n && !!o.when && Array.isArray(o.keeps), 'V1', `${s.code}.${o.id}: missing n, when or keeps`);
      (o.yieldsTo || []).forEach(y => check(s.options.some(x => x.id === y.option) && !!y.say, 'V1', `${s.code}.${o.id}: yieldsTo must name an answer of the same question and say what the case also shows`));
    }
    check(new Set(s.options.map(o => o.n)).size === s.options.length, 'V1', `${s.code}: two answers share wording`);
  }
  check(new Set(key.outcomes.map(o => o.n)).size === key.outcomes.length, 'V1', 'two outcomes share a name');
  for (const n of [...key.outcomes.map(o => o.n), ...v.steps.flatMap(s => s.options.map(o => o.n))]) check(!/[\/(\[→–—]| - /.test(n), 'V1', `"${n}" holds a slash, a bracket, a dash or an arrow`);
  check(Array.isArray(subject.meta.settings) && subject.meta.settings.length >= 3, 'V1', 'subject.settings must list the areas of life cases are set in');

  /* V2: no key line typed by hand, whatever its capitals or punctuation; and no near-copy of one */
  const keyLines = [...key.outcomes.flatMap(o => [o.n, o.plain, o.needs]), ...(key.terms || []).flatMap(t => [t.n, t.means]),
    ...v.steps.flatMap(s => [s.q, s.purpose, s.why, ...s.options.flatMap(o => [o.n, o.when])])].map(line => ({ line, n: norm(line), w: words(line) }));
  /* V50: words this subject, and the app, must not use in authored text (K9, key.avoid) */
  const APP_AVOID = ['lesson', 'rung', 'screen', 'provisional', 'deciding feature'];
  const avoid = [...(key.avoid || []).map(a => a.word), ...APP_AVOID].map(w => new RegExp(`(^| )${norm(w)}( |$)`));
  const PRAISE = /^\W*(great|well done|good job|nice work|excellent|not quite|oops|correct|incorrect|right|wrong)\W*($|[!.]\s)/i;
  for (const [path, s] of scanned.flatMap(([label, obj]) => prose(obj).map(([p, t]) => [label + p, t]))) {
    const bare = norm(s.replace(TOKEN, ' '));
    keyLines.forEach(k => check(!bare.includes(k.n), 'V2', `key wording typed by hand at ${path}: "${k.line.slice(0, 50)}"`));
    for (const sentence of s.replace(TOKEN, ' ').split(/(?<=[.?!:])\s+/)) {
      const got = words(sentence);
      keyLines.filter(k => k.w.size >= 6).forEach(k => check([...k.w].filter(x => got.has(x)).length / k.w.size < 0.75, 'V2', `near-copy of a key line at ${path}: "${sentence.slice(0, 60)}" ~ "${k.line.slice(0, 40)}"`));
    }
    avoid.forEach((re, i) => check(!re.test(bare), 'V50', `a word to avoid at ${path}: ${re.source.replace(/\(\^\| \)|\( \|\$\)/g, '"')} in "${s.slice(0, 50)}"`));
    check(!/\b[A-Z]\d\b/.test(s.replace(TOKEN, '')) && !/\b[a-z]+[~_][a-z]+\b/.test(s.replace(TOKEN, '')), 'V4', `a code or an id shown at ${path}`);
    check(!/later card|next unit|in Unit (Three|Four|Five|Six|Seven)|you will meet this in|Lesson \d/i.test(s), 'V28', `forward pointer at ${path}: "${s.slice(0, 60)}"`);
    (key.outcomes.flatMap(o => o.aka)).forEach(aka => check(!bare.includes(norm(aka)), 'V8', `another name ("${aka}") used at ${path}; only the meet card prints it`));
    /* V3: every token resolves */
    for (const [, kind, ref] of s.matchAll(TOKEN)) {
      let ok = true;
      try {
        if (['o', 'plain', 'needs'].includes(kind)) v.outcome(ref); else if (kind === 'q') v.step(ref);
        else if (['a', 'when'].includes(kind)) v.option(...ref.split('.')); else if (['t', 'means'].includes(kind)) v.term(ref);
        else if (kind === 'test') v.ledger(ref);
      } catch (e) { ok = false; }
      check(ok, 'V3', `${path}: {${kind}:${ref}} does not resolve`);
    }
    check(!/\{[a-z]+:[^}]*\}/.test(s.replace(TOKEN, '')), 'V3', `${path}: an unknown token`);
  }
  // {cue:STEP} only in a field of a case (or of the card that owns the case) that has marked words for that step
  const cueOwner = [...allCases.map(c => [c, c]), ...subject.specimens.map(c => [c, c]), ...cards.filter(k => k.case && v.cases[k.case]).map(k => [k, v.cases[k.case]])];
  for (const [obj, c] of cueOwner) for (const [path, s] of prose(obj)) for (const [, kind, ref] of s.matchAll(TOKEN)) {
    if (kind === 'cue') check(cuesOf(c, ref).length > 0, 'V3', `${obj.id}${path}: {cue:${ref}} but case ${c.id} has no marked words for it`);
  }
  cards.filter(k => !(k.case && v.cases[k.case])).forEach(k => prose(k).forEach(([path, s]) => check(!/\{cue:/.test(s), 'V3', `${k.id}${path}: {cue:} on a card with no case`)));

  /* V36: no praise, no bare verdict, in any feedback field */
  for (const c of [...allCases, ...subject.specimens]) for (const [path, s] of prose({ reason: c.reason, not: c.not, miss: c.miss, fault: c.fault, corrected: c.corrected, why: c.why, notes: (c.segments || []).map(x => x.note || '') })) {
    check(!PRAISE.test(s.trim()), 'V36', `${c.id}${path}: praise or a bare verdict`);
  }
  /* V9: no item carries its own list of names or answers */
  cards.filter(c => c.kind === 'check' && c.ask.among).forEach(c => check(c.ask.among.every(id => v.step(c.ask.step).options.some(o => o.id === id)), 'V9', `${c.id}: among must hold option ids only`));
}
