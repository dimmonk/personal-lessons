// The record as the app kept it before it had an account: localStorage keys under `pl:` on one phone (until October 2026). On the first
// sign-in on a phone that still holds them they are written to the account once, as the store's own writes (app/store.js), and removed
// from the phone once the account has confirmed them. The ids are fixed, so a move that runs twice writes the same documents again.
// Tries of the old lessons, which have no run, are never read (lesson standard 5), so they are not moved.

const SUBJECT_KEY = /^pl:([^:]+):(items|seen|notes)$/;
const MOVING = 'pl:moving';   // the move is written on this phone and waits for the account to confirm it

function read(key){
  try{ return JSON.parse(localStorage.getItem(key)); }
  catch(err){ console.error('Could not read ' + key, err); return null; }
}
const legacyKeys = () => Object.keys(localStorage).filter(k => k.startsWith('pl:') && k !== MOVING);

// one old key as the store's writes; `at` keeps every answer's and event's old order, and puts them all before anything new
function writesOf(key, value, counter){
  const at = () => ++counter.at;
  const match = key.match(SUBJECT_KEY);
  if(match && match[2] === 'items'){
    return Object.entries(value).flatMap(([item, entry]) => (entry.tries || []).filter(t => typeof t.run === 'string')
      .map(t => { const n = at(); return { op: 'set', col: 'tries', id: `legacy-${match[1]}-${n}`, data: { subject: match[1], key: item, at: n, t } }; }));
  }
  if(match) return Object.entries(value).map(([field, v]) => ({ op: 'field', col: 'subjects', id: match[1], path: [match[2], field], value: v }));
  if(key === 'pl:log') return value.map((e, i) => ({ op: 'set', col: 'log', id: `legacy-log-${i}`, data: { at: at(), e } }));
  if(key === 'pl:app' || key === 'pl:recent') return [{ op: 'field', col: 'prefs', id: 'app', path: [key.slice(3)], value }];
  return [];
}

// commit(ops): writes the store's writes to the account; settled(): resolves when the account has confirmed every write
export function moveLegacy(commit, settled){
  const keys = legacyKeys();
  if(!keys.length) return;
  if(!localStorage.getItem(MOVING)){
    const counter = { at: 0 };
    commit(keys.flatMap(key => { const value = read(key); return value === null ? [] : writesOf(key, value, counter); }));
    localStorage.setItem(MOVING, '1');
  }
  settled()
    .then(() => [...keys, MOVING].forEach(k => localStorage.removeItem(k)))
    .catch(err => console.error('The account did not confirm the move from this phone; the old copy is kept', err));
}
