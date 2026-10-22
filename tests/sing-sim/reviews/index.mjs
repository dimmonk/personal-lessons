// Every script the reviews of the singing scoring wrote to try it (the session scratchpad's c2/ to c9/, r3/, rr/ and its fx- and dist
// scripts), ported so that each
// scenario any reviewer used is run on every test: a fixed-case script keeps each case in tests/sing-cases.lock.json, a statistical one
// holds its rates to floors. One shard per script (a statistical script with shards of its own is split by them).
// Not ported: c9/dbg.mjs and the reviews' dump replays (they only re-scored a saved try from another script, which is ported); c6/real.mjs
// and c9/sim9.mjs live on as taught.mjs and runs.mjs, rebuilt with the same voices and scenarios.
import { reseed } from './h.mjs';
import { setPart } from '../harness.mjs';

const FIXED = ['c2-iv', 'c2-ex', 'c2-match', 'c2-mel', 'c2-l9', 'c2-hold', 'c3-ex', 'c3-hold', 'c3-iv', 'c3-match', 'c3-mel', 'c3-release',
  'c4-new', 'c6-det', 'c7-offstart', 'c7-tempo', 'c8-ex', 'c8-show', 'c8-same2', 'c9-show', 'r1-confirm', 'research3-score', 'rr-ex', 'rr-guess',
  'dist', 'final-score', 'final-recall', 'final-text'];
const STATS = ['c3-cadence', 'c3-wobble', 'c3-voice', 'c4-melwob', 'c5-cad', 'c5-mc', 'c6-scoop', 'c7-tempo2', 'c8-nf', 'c8-same'];
const SPLIT = { 'c7-mysim': (await import('./c7-mysim.mjs')).shards, 'c8-d5sim': (await import('./c8-d5sim.mjs')).shards };

export const shards = [...Object.entries(SPLIT).flatMap(([name, list]) => list.map(s => `${name} ${s}`)), ...STATS, 'fixed'];
export default async function reviews(shard) {
  if (shard === 'fixed') { for (const name of FIXED) { setPart(`reviews: ${name}`); reseed(7); await import(`./${name}.mjs`); } return; }
  const [name, ...rest] = shard.split(' ');
  reseed(7);
  const mod = await import(`./${name}.mjs`);
  if (SPLIT[name]) await mod.default(rest.join(' '));
}
