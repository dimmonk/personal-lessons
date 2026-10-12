// node tools/design/owner-line.mjs <message-file> [--staged | --commit <sha> [--brought <base>]]
// The gates (the build-subject skill, the record rules and their harness, the record tools, the research notes, the hooks, the push
// workflow, package.json) change only with the owner's word in the commit message: a line "Owner's word: "<their words>" (<where>)".
// Used by the commit-message hook on the staged files, and by the push workflow on every pushed commit, with the copy of this file that
// main held before the push (never the pushed commit's own). Exits 1 when the line is missing.
//
// A commit's own changes: a plain commit against its parent, a root commit against nothing, a merge only what it changed itself (its
// remerge diff: what differs from an automatic remerge of its parents, a resolution that undoes one side included), since what a merge
// brings in was checked on the commits that made it; with --brought <base>, a merge that brings in commits never checked (the workflow
// passes it) is held for every gate file it changes against <base> too. A merge in progress (--staged with MERGE_HEAD) is the staged
// tree against the automatic merge of the two sides. Renames are never followed: a gate file renamed out is a change to it.
import { readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { pathToFileURL } from 'node:url';

export const GATED = /^(\.claude\/skills\/build-subject\/|tests\/lessons\/|tests\/validate-lessons\.mjs|tests\/design-pure\.mjs|tests\/owner-line-pure\.mjs|tests\/fixtures\/fixture-subject\/design\.mjs|tools\/design\/|docs\/research\/|\.githooks\/|\.github\/|package\.json)/;
export const LINE = /^Owner's word: ".+" \(.+\)/m;

const git = (args, cwd) => execFileSync('git', args, { cwd, stdio: ['ignore', 'pipe', 'pipe'] }).toString();
const lines = s => s.split('\n').filter(Boolean);
const isSha = l => /^[0-9a-f]{40}$/.test(l);

// the tree an automatic merge of two commits gives; a merge with conflicts still names its tree on the first line (exit 1)
function autoMergeTree(a, b, cwd) {
  try { return git(['merge-tree', '--write-tree', a, b], cwd).trim().split('\n')[0]; }
  catch (error) {
    const out = error.stdout ? error.stdout.toString().trim().split('\n')[0] : '';
    if (isSha(out)) return out;
    throw error;
  }
}

export function changed(mode, sha, cwd = process.cwd()) {
  if (mode !== '--commit') {
    const staged = lines(git(['diff', '--cached', '--name-only', '--no-renames'], cwd));
    let mergeHead = null;
    try { mergeHead = git(['rev-parse', '-q', '--verify', 'MERGE_HEAD'], cwd).trim(); } catch { mergeHead = null; }
    if (!mergeHead) return staged;
    const auto = autoMergeTree('HEAD', 'MERGE_HEAD', cwd), stagedTree = git(['write-tree'], cwd).trim();
    return lines(git(['diff-tree', '-r', '--name-only', '--no-renames', auto, stagedTree], cwd));
  }
  const parents = git(['rev-list', '--parents', '-n', '1', sha], cwd).trim().split(/\s+/).slice(1);
  if (parents.length <= 1) return lines(git(['diff-tree', '--no-commit-id', '--name-only', '--no-renames', '-r', '--root', sha], cwd));
  return lines(git(['log', '-1', '--remerge-diff', '--name-only', '--no-renames', '--format=', sha], cwd)).filter(l => !isSha(l));
}

// the gate files a commit (or the staged change) must carry the owner's word for
export function gatedChanges(mode, sha, brought, cwd = process.cwd()) {
  const own = changed(mode, sha, cwd);
  const broughtIn = brought ? lines(git(['diff', '--name-only', '--no-renames', brought, sha], cwd)) : [];
  return [...new Set([...own, ...broughtIn])].filter(f => GATED.test(f));
}

function main(argv) {
  const [file, mode = '--staged', sha] = argv;
  if (!file) { console.error('usage: node tools/design/owner-line.mjs <message-file> [--staged | --commit <sha> [--brought <base>]]'); process.exit(2); }
  const brought = argv.indexOf('--brought') >= 0 ? argv[argv.indexOf('--brought') + 1] : null;
  const gated = gatedChanges(mode, sha, brought);
  if (gated.length && !LINE.test(readFileSync(file, 'utf8'))) {
    console.error(`${mode === '--commit' ? sha : 'this commit'} changes the gates (${gated.slice(0, 4).join(', ')}${gated.length > 4 ? ', …' : ''}); it needs a line: Owner's word: "<their words>" (<where they said it>)`);
    process.exit(1);
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main(process.argv.slice(2));
