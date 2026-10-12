// node tools/design/owner-line.mjs <message-file> [--staged | --commit <sha>]
// The gates (the build-subject skill, the record rules and their harness, the record tools, the research notes, the hooks, the push
// workflow, package.json) change only with the owner's word in the commit message: a line "Owner's word: "<their words>" (<where>)".
// Used by the commit-message hook on the staged files, and by the push workflow on every pushed commit. Exits 1 when the line is missing.
import { readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

export const GATED = /^(\.claude\/skills\/build-subject\/|tests\/lessons\/|tests\/validate-lessons\.mjs|tests\/design-pure\.mjs|tests\/fixtures\/fixture-subject\/design\.mjs|tools\/design\/|docs\/research\/|\.githooks\/|\.github\/|package\.json)/;
const LINE = /^Owner's word: ".+" \(.+\)/m;

// a commit's changes are read against its first parent, so a merge that brings a gate change in shows it; a root commit against nothing
function changed(mode, sha) {
  if (mode !== '--commit') return execFileSync('git', ['diff', '--cached', '--name-only']).toString().split('\n').filter(Boolean);
  let parent = null;
  try { parent = execFileSync('git', ['rev-parse', '-q', '--verify', `${sha}^1`], { stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim(); } catch { parent = null; }
  const args = parent ? ['diff', '--name-only', parent, sha] : ['diff-tree', '--no-commit-id', '--name-only', '-r', '--root', sha];
  return execFileSync('git', args).toString().split('\n').filter(Boolean);
}

const [file, mode = '--staged', sha] = process.argv.slice(2);
if (!file) { console.error('usage: node tools/design/owner-line.mjs <message-file> [--staged | --commit <sha>]'); process.exit(2); }
const gated = changed(mode, sha).filter(f => GATED.test(f));
if (gated.length && !LINE.test(readFileSync(file, 'utf8'))) {
  console.error(`${mode === '--commit' ? sha : 'this commit'} changes the gates (${gated.slice(0, 4).join(', ')}${gated.length > 4 ? ', …' : ''}); it needs a line: Owner's word: "<their words>" (<where they said it>)`);
  process.exit(1);
}
