// The shared harness of the singing simulations (tests/sing-sim.mjs runs each part in its own worker).
// Every answer the app scores here is checked against the rules that hold for any sung answer, whoever made it up (`invariants`), and a
// part reports its rates with `rate` (each against a floor) and its fixed cases with `fixed` (each kept in tests/sing-cases.lock.json).
import { loadApp } from '../load-app.mjs';

const APP = await loadApp({ fixture: false });
export const strip = h => h.replace(/<[^>]+>/g, ' | ').replace(/(\s*\|\s*)+/g, ' | ').trim();
// how many tries a statistical part makes: its own number times SIM_SCALE (npm test runs a share of it; SIM_SCALE=1 is the reviewers' own)
export const SCALE = Number(process.env.SIM_SCALE || 0.25);
export const tries = n => Math.max(12, Math.round(n * SCALE));

const DIRECTION = { higher: /higher than it sounded/, lower: /lower than it sounded/ };
const NOTE_FIX = { Under: /higher/, Over: /lower/ };
// The rules every scored answer keeps (each broken rule is one line):
//   a guess is agreed with exactly when it is the side the app measured, and when it is not, "You said" points from the guess to that side
//   ("both ways" only for a hunt, which has no side);
//   a hold passes exactly when its mark is a good one, or when it was held for the seconds asked and only then sank or rose (heldThenDrift);
//   "stopped or broke" is said only when the voice never left the note (no time off it);
//   a drift's fix points back to the note (back up after sinking, back down after rising);
//   "Steady for N seconds" never claims more than the voice held;
//   each note marked under (over) is told to sing higher (lower).
export function invariants(ask, ans, app = APP){
  const bad = [], j = app.singJudge(ask, ans), ok = app.singOk(ask, ans);
  for(const g of [-1, 0, 1]){
    const x = { ...ans, guess: g }, m = app.singMeasured(ask, x), agrees = app.singGuessAgrees(ask, x);
    const said = strip(app.singMarksHtml(ask, x, ok)).split('You said')[1] || '';
    const side = m ? m.side : null;
    if(side !== null && side !== undefined && agrees !== (g === side)) bad.push(`guess ${g} agreed ${agrees} with side ${side}`);
    if(/both ways/.test(said) && j.last.id !== 'hunt') bad.push(`"both ways" for ${j.last.id}`);
    if(!agrees && side !== null && side !== undefined && side !== g && !(side > g ? DIRECTION.higher : DIRECTION.lower).test(said)) bad.push(`"You said" for guess ${g} does not point ${side > g ? 'higher' : 'lower'}`);
  }
  const miss = strip(app.singMissHtml(ask, ans)), marks = strip(app.singMarksHtml(ask, ans, ok));
  if(ask.task === 'hold' && ok !== (!!j.last.good || j.last.id === 'heldThenDrift')) bad.push(`hold ok ${ok} but mark ${j.last.id} good ${j.last.good}`);
  if(/stopped or broke/.test(miss) && (ans.left || 0) > 0) bad.push(`"stopped" said with ${ans.left} ms off the note`);
  if(j.last.id === 'drift' && j.last.parts.endSide && !(j.last.parts.endSide < 0 ? /back up|higher/ : /back down|lower/).test(miss)) bad.push('drift fix points the wrong way');
  for(const [, full] of marks.matchAll(/Steady for (\d+(?:\.\d+)?) seconds/g)) if(Number(full) * 1000 > (ans.holdMs || 0) + 1e-6) bad.push(`"Steady for ${full} seconds" after ${ans.holdMs} ms`);
  for(const [, part] of marks.matchAll(/Steady for (\d+(?:\.\d+)?) of/g)) if(Number(part) * 1000 > (ans.holdMs || 0) + 1e-6) bad.push(`"Steady for ${part} of" after ${ans.holdMs} ms`);
  const sections = j.notes.length > 1 ? j.notes.map((_, i) => (miss.split(`Note ${i + 1}.`)[1] || '').split(/ Note \d+\./)[0]) : [miss];
  j.notes.forEach((n, i) => { const end = /(Under|Over)$/.exec(n.key || ''); if(n.id === 'sat' && end && !NOTE_FIX[end[1]].test(sections[i])) bad.push(`note ${i + 1} ${n.key} not told ${end[1] === 'Under' ? 'higher' : 'lower'}`); });
  return bad;
}

// The invariants catch what they are for: a known-good answer breaks none, and the same answer scored by an app whose "You said" line
// points the wrong way (a seeded fault) breaks one. Run once by tests/sing-sim.mjs before the parts.
export async function selfCheck(){
  const ask = { id: 'sing', kind: 'sing', task: 'match', cents: 50 }, plan = { cents: 50, hear: [], bars: [], windows: [{ note: 'D4', fromMs: 0, ms: 1900 }], totalMs: 1900, onset: true, turns: true };
  const readings = Array.from({ length: 30 }, (_, k) => ({ t: 0.3 + k * 0.05, hz: APP.noteToHz('D4') * 2 ** (-75 / 1200), level: 0.2 }));
  const ans = APP.singAnswer(plan, readings, 0);
  const swapped = await loadApp({ fixture: false, seed: (src, text) => src.endsWith('view.js') ? text.replace("${dir > 0 ? 'higher' : 'lower'} than it sounded", "${dir > 0 ? 'lower' : 'higher'} than it sounded") : text });
  const good = invariants(ask, ans), bad = invariants(ask, swapped.singAnswer(plan, readings, 0), swapped);
  return good.length === 0 && bad.length > 0 ? null : `the invariants did not catch a seeded fault (good: ${good.join('; ') || 'none'}; seeded: ${bad.join('; ') || 'none'})`;
}

// The app as the parts see it: every answer singAnswer returns is checked against the invariants the first time it is judged with its ask
const answers = new WeakSet(), checked = new WeakSet();
export const broken = [];
let part = '?';
export const setPart = name => { part = name; };
const check = (ask, ans) => {
  if(!ans || typeof ans !== 'object' || !answers.has(ans) || checked.has(ans)) return;
  checked.add(ans);
  const bad = invariants(ask, ans);
  if(bad.length && broken.length < 200) broken.push(`${part}: ${bad.join('; ')} | ${JSON.stringify({ task: ask.task, cents: ans.cents, left: ans.left, holdMs: ans.holdMs })}`);
};
export const A = new Proxy(APP, { get(target, key){
  const v = target[key];
  if(key === 'singAnswer') return (...args) => { const ans = v(...args); if(ans && typeof ans === 'object') answers.add(ans); return ans; };
  if(['singJudge', 'singOk', 'singMarksHtml', 'singMissHtml'].includes(key)) return (ask, ans, ...rest) => { check(ask, ans); return v(ask, ans, ...rest); };
  return v;
} });

// what a part reports
export const rows = [], fixedCases = {};
export const notes = [];
// a rate, `hits` of `n` tries, against its floor (in %); `why` says why a floor under the standard one is inherent. Below the full scale
// (SIM_SCALE 1) a rate is held to its floor within what chance allows at its number of tries (`held`: the upper end of its 95% one-sided
// Wilson interval reaches the floor); at the full scale, or in a part that always makes its full number of tries (`fullTries`), as measured.
let measured = SCALE >= 1;
export const fullTries = () => { measured = true; };
export function rate(label, hits, n, floor, why = null){
  if(!n) return;
  const p = hits / n, z = 1.645, upper = (p + z * z / (2 * n) + z * Math.sqrt(p * (1 - p) / n + z * z / (4 * n * n))) / (1 + z * z / n);
  rows.push({ part, label, value: Math.round(1000 * p) / 10, n, floor, why, held: (measured ? p : upper) * 100 >= floor - 1e-9 });
}
// a fixed case: what the app made of it, kept in the lock so a change to any reviewer's case is seen
export const keep = (label, text) => { fixedCases[`${part} | ${label}`] = text; };
export function fixed(label, ask, ans){
  if(!ans){ keep(label, 'nothing heard'); return; }
  const j = A.singJudge(ask, ans), ok = A.singOk(ask, ans);
  keep(label, `${ok ? 'pass' : 'fail'} ${j.notes.map(n => `${n.id}:${n.key}`).join(' ')} cents ${ans.cents}`);
}
// a script that printed what it found keeps every line it prints instead, numbered in order (`const console = printed();`)
export const printed = () => { let n = 0; return { log: (...a) => keep(`line ${String(++n).padStart(3, '0')}`, a.map(x => typeof x === 'string' ? x : JSON.stringify(x)).join(' ')) }; };
export const note = text => { notes.push(`${part}: ${text}`); };
