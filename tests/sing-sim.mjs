// Singing: every sung scenario any review has used, sung through the app's own scoring and judging (lesson standard 3.8).
// The parts, each in tests/sing-sim/ and each run in its own worker:
//   taught.mjs  every outcome a lesson teaches, sung by a simulated beginner at three reading rates and with a harsher voice;
//   runs.mjs    two notes and tunes sung to the played rhythm at the singer's own tempo (0.75x to 1.5x), legato or detached with gaps of
//               50 to 250 ms, with one wrong, repeated, held-over or left-out note at every position, by a clean, an ordinary and a harsh voice;
//   reviews/    each confirmation review's own scripts, ported as written: their fixed cases kept in tests/sing-cases.lock.json, their
//               statistical runs held to floors.
// Every answer any part scores is also checked against the rules every answer keeps (harness.mjs `invariants`).
// Each rate must reach its floor (95% unless a part states a lower one and why): as measured at SIM_SCALE=1, the reviews' own numbers of
// tries; within what chance allows at the default SIM_SCALE (0.25), which npm test runs; SIM_TABLE=1 prints every rate; --lock rewrites the fixed cases' lock after
// a change to the scoring was checked (npm run lock does it too). Run: node tests/sing-sim.mjs [--lock] [part filter].
import { Worker, isMainThread, parentPort, workerData } from 'node:worker_threads';
import { availableParallelism } from 'node:os';
import { readFile, writeFile } from 'node:fs/promises';

const PARTS = ['taught.mjs', 'runs.mjs', 'reviews/index.mjs'];   // the longest shards first
const LOCK = new URL('./sing-cases.lock.json', import.meta.url);

if (!isMainThread) {
  const h = await import('./sing-sim/harness.mjs');
  const { part, shard } = workerData;
  h.setPart(shard ? `${part.replace(/\.mjs$/, '').replace('/index', '')}: ${shard}` : part);
  const mod = await import(`./sing-sim/${part}`);
  await mod.default(shard);
  parentPort.postMessage({ rows: h.rows, fixedCases: h.fixedCases, broken: h.broken, notes: h.notes });
} else {
  const args = process.argv.slice(2), writeLock = args.includes('--lock'), only = args.find(a => !a.startsWith('--'));
  const h = await import('./sing-sim/harness.mjs'), self = await h.selfCheck();
  if (self) { console.error(`✗ ${self}`); process.exit(1); }
  const every = [];
  for (const part of PARTS) {
    const { shards } = await import(`./sing-sim/${part}`);
    every.push(...(shards || [null]).map(shard => ({ part, shard })));
  }
  // --lock runs only the fixed cases and writes what the app now makes of them
  const tasks = writeLock ? [{ part: 'reviews/index.mjs', shard: 'fixed' }] : every.filter(t => !only || `${t.part} ${t.shard}`.includes(only));
  const rows = [], fixedCases = {}, broken = [], notes = [], errors = [];
  let next = 0;
  const work = () => new Promise(done => {
    const go = () => {
      if (next >= tasks.length) return done();
      const task = tasks[next++], w = new Worker(new URL(import.meta.url), { workerData: task });
      let answered = false;
      w.on('message', m => { answered = true; rows.push(...m.rows); Object.assign(fixedCases, m.fixedCases); broken.push(...m.broken); notes.push(...m.notes); });
      w.on('error', e => { errors.push(`${task.part} ${task.shard ?? ''}: ${e.stack || e}`); });
      w.on('exit', code => { if (!answered && !errors.some(e => e.startsWith(`${task.part} ${task.shard ?? ''}:`))) errors.push(`${task.part} ${task.shard ?? ''}: worker exited ${code} without a report`); go(); });
    };
    go();
  });
  await Promise.all(Array.from({ length: Math.max(1, Math.min(tasks.length, availableParallelism() - 1)) }, work));

  const failures = [...errors.map(e => `error: ${e}`), ...broken.map(b => `invariant: ${b}`)];
  rows.filter(r => !r.held).forEach(r => failures.push(`${r.part} | ${r.label} ${r.value}% of ${r.n} (floor ${r.floor}%)`));
  // the fixed cases against their lock (when they ran)
  let lockNote = '';
  if (tasks.some(t => t.shard === 'fixed')) {
    const sorted = Object.fromEntries(Object.entries(fixedCases).sort(([a], [b]) => a.localeCompare(b)));
    if (writeLock) { await writeFile(LOCK, JSON.stringify(sorted, null, 1) + '\n'); lockNote = `; lock rewritten with ${Object.keys(sorted).length} fixed cases`; }
    else {
      const kept = JSON.parse(await readFile(LOCK, 'utf8').catch(() => '{}'));
      for (const [k, v] of Object.entries(sorted)) if (kept[k] !== v) failures.push(`fixed case changed: ${k}\n      was: ${kept[k] ?? '(not in the lock)'}\n      now: ${v}`);
      for (const k of Object.keys(kept)) if (!(k in sorted)) failures.push(`fixed case gone: ${k}`);
      lockNote = `; ${Object.keys(sorted).length} fixed cases as locked`;
    }
  }
  if (process.env.SIM_TABLE) { rows.forEach(r => console.log(`${String(r.value).padStart(5)}% (floor ${r.floor}) ${r.part} | ${r.label} (${r.n})`)); notes.forEach(n => console.log(n)); }
  const whys = [...new Set(rows.filter(r => r.floor < 95 && r.why).map(r => `floor ${r.floor}%: ${r.why}`))];
  if (process.env.SIM_TABLE) whys.forEach(w => console.log('  ' + w));
  const lowest = group => { const g = rows.filter(r => r.label.startsWith(group)); return g.length ? Math.min(...g.map(r => r.value)) : null; };
  const voices = ['clean', 'ordinary', 'harsh'].map(v => `${v} ${lowest(`${v} |`)}%`).join(', ');
  if (failures.length) {
    console.error(`✗ ${failures.length} singing simulation failures:`);
    failures.slice(0, 80).forEach(f => console.error('  - ' + f));
    if (failures.length > 80) console.error(`  ... and ${failures.length - 80} more`);
    process.exit(1);
  }
  console.log(writeLock ? `✓ sing-cases.lock.json${lockNote.replace(/^; lock/, '')}` : `✓ ${rows.length} simulated sung rates at their floors (${h.SCALE >= 1 ? 'as measured' : `SIM_SCALE ${h.SCALE}: within what chance allows`}; lowest on the runs: ${voices}), every scored answer within the rules${lockNote}`);
}
