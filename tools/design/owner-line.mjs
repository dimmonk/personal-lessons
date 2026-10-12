// node tools/design/owner-line.mjs <message-file> [--staged | --commit <sha>]
// The gates (the build-subject skill, the record rules and their harness, the record tools, the research notes, the hooks, the push
// workflow, package.json) change only with the owner's word in the commit message: a line "Owner's word: "<their words>" (<where>)".
// Used by the commit-message hook on the staged files, and by the push workflow on every pushed commit. Exits 1 when the line is missing.
import { readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

export const GATED = /^(\.claude\/skills\/build-subject\/|tests\/lessons\/|tests\/validate-lessons\.mjs|tests\/design-pure\.mjs|tests\/fixtures\/fixture-subject\/design\.mjs|tools\/design\/|docs\/research\/|\.githooks\/|\.github\/|package\.json)/;
const LINE = /^Owner's word: ".+" \(.+\)/m;

// A commit's own changes: a plain commit against its parent, a root commit against nothing, and a merge only what it changed itself
// (the difference between the merge and what an automatic remerge of its parents gives: its conflict resolutions and any edit of its
// own, a resolution that undoes one side included), since what a merge brings in was checked on the commits that made it. A merge in
// progress (--staged with MERGE_HEAD) is read the same way: the staged files that differ from both sides.
const git = args => execFileSync('git', args, { stdio: ['ignore', 'pipe', 'pipe'] }).toString();
const lines = s => s.split('\n').filter(Boolean);
function changed(mode, sha) {
  if (mode !== '--commit') {
    const staged = lines(git(['diff', '--cached', '--name-only', '--no-renames']));
    let mergeHead = null;
    try { mergeHead = git(['rev-parse', '-q', '--verify', 'MERGE_HEAD']).trim(); } catch { mergeHead = null; }
    if (!mergeHead) return staged;
    // a merge in progress: its own changes are the staged files that differ from what an automatic merge of the two sides gives
    const auto = git(['merge-tree', '--write-tree', 'HEAD', 'MERGE_HEAD']).trim().split('\n')[0];
    const stagedTree = git(['write-tree']).trim();
    return lines(git(['diff-tree', '-r', '--name-only', '--no-renames', auto, stagedTree]));
  }
  const parents = git(['rev-list', '--parents', '-n', '1', sha]).trim().split(/\s+/).slice(1);
  if (parents.length <= 1) return lines(git(['diff-tree', '--no-commit-id', '--name-only', '--no-renames', '-r', '--root', sha]));
  // the remerge diff names the files the merge changed on its own; the names are the lines that are paths after the headers
  const out = git(['log', '-1', '--remerge-diff', '--name-only', '--no-renames', '--format=', sha]);
  return lines(out).filter(l => !/^[0-9a-f]{40}$/.test(l));
}

// node tools/design/owner-line.mjs <message-file> --commit <sha> --brought <base>
//   for a merge: the gate files it changes against <base> (its first parent) are its own too when any commit it brings in was never
//   checked on push (the workflow passes --brought when the merge brings in commits from before the gates)
const argv = process.argv.slice(2);
const [file, mode = '--staged', sha] = argv;
if (!file) { console.error('usage: node tools/design/owner-line.mjs <message-file> [--staged | --commit <sha> [--brought <base>]]'); process.exit(2); }
const brought = argv.indexOf('--brought') >= 0 ? argv[argv.indexOf('--brought') + 1] : null;
const own = changed(mode, sha);
const gated = [...own, ...(brought ? lines(git(['diff', '--name-only', '--no-renames', brought, sha])) : [])].filter(f => GATED.test(f));
if (gated.length && !LINE.test(readFileSync(file, 'utf8'))) {
  console.error(`${mode === '--commit' ? sha : 'this commit'} changes the gates (${gated.slice(0, 4).join(', ')}${gated.length > 4 ? ', …' : ''}); it needs a line: Owner's word: "<their words>" (<where they said it>)`);
  process.exit(1);
}
