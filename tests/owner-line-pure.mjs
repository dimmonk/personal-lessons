// The owner-line check (tools/design/owner-line.mjs) on a scratch repository: a gate file renamed out is a change to it; a merge in
// progress with a conflict only in a non-gate file needs no word and does not crash; a gate conflict resolved to one side is the merge's
// own change; a clean merge of two worded gate edits is not. Run: node tests/owner-line-pure.mjs
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';
import { changed, gatedChanges } from '../tools/design/owner-line.mjs';

const dir = mkdtempSync(join(tmpdir(), 'owner-line-'));
const git = (...args) => execFileSync('git', args, { cwd: dir, stdio: ['ignore', 'pipe', 'pipe'] }).toString().trim();
const write = (f, s) => { mkdirSync(join(dir, f, '..'), { recursive: true }); writeFileSync(join(dir, f), s); };
let checks = 0, failures = [];
const ok = (c, what) => { checks += 1; if (!c) failures.push(what); };
const same = (a, b, what) => ok(JSON.stringify(a) === JSON.stringify(b), `${what}: got ${JSON.stringify(a)}, wanted ${JSON.stringify(b)}`);

try {
  git('init', '-q', '-b', 'main'); git('config', 'user.email', 't@t'); git('config', 'user.name', 't'); git('config', 'commit.gpgsign', 'false');
  write('tools/design/owner-line.mjs', 'one\n'); write('README.md', 'r\n'); write('notes.txt', 'a\n');
  git('add', '-A'); git('commit', '-q', '-m', 'base'); const base = git('rev-parse', 'HEAD');
  // a gate file renamed out of its folder is a change to the gate file
  git('mv', 'tools/design/owner-line.mjs', 'elsewhere.mjs'); git('commit', '-q', '-m', 'rename');
  same(gatedChanges('--commit', 'HEAD', null, dir), ['tools/design/owner-line.mjs'], 'a rename out is a change to the gate file');
  git('checkout', '-q', base);
  // two branches: one edits a gate file, one edits a non-gate file; a conflict only in the non-gate file
  git('checkout', '-q', '-b', 'a'); write('notes.txt', 'from a\n'); write('tools/design/owner-line.mjs', 'two\n'); git('commit', '-q', '-am', 'a: Owner\'s word: "yes" (chat)');
  git('checkout', '-q', '-b', 'b', base); write('notes.txt', 'from b\n'); git('commit', '-q', '-am', 'b');
  let merged = true; try { git('merge', '--no-commit', '--no-ff', 'a'); } catch { merged = false; }
  ok(!merged, 'the merge of a and b conflicts on notes.txt');
  write('notes.txt', 'resolved\n'); git('add', 'notes.txt');
  same(gatedChanges('--staged', undefined, null, dir), [], 'a conflict resolved in a non-gate file alone needs no word, and the reading does not crash');
  git('merge', '--abort');
  // a gate conflict resolved to one side is the merge's own change
  git('checkout', '-q', '-b', 'c', base); write('tools/design/owner-line.mjs', 'three\n'); git('commit', '-q', '-am', 'c');
  merged = true; try { git('merge', '--no-commit', '--no-ff', 'a'); } catch { merged = false; }
  ok(!merged, 'the merge of a and c conflicts on the gate file');
  write('tools/design/owner-line.mjs', 'three\n'); git('add', 'tools/design/owner-line.mjs');
  same(gatedChanges('--staged', undefined, null, dir), ['tools/design/owner-line.mjs'], 'a gate conflict resolved to one side is the merge\'s own change');
  git('merge', '--abort');
  // a clean merge of two edits to different gate files is not the merge's own change
  git('checkout', '-q', '-b', 'd', base); write('tools/design/other.mjs', 'x\n'); git('add', '-A'); git('commit', '-q', '-m', 'd: Owner\'s word: "yes" (chat)');
  git('merge', '-q', '--no-edit', '--no-ff', 'a');
  same(gatedChanges('--commit', 'HEAD', null, dir), [], 'a clean merge of two worded gate edits has no own change');
  same(gatedChanges('--commit', 'HEAD', base, dir).sort(), ['tools/design/other.mjs', 'tools/design/owner-line.mjs'], 'with --brought, the gate files changed against the base are held');
  // a plain commit's own changes
  same(changed('--commit', base, dir).sort(), ['README.md', 'notes.txt', 'tools/design/owner-line.mjs'], 'a root commit against nothing');
} finally { rmSync(dir, { recursive: true, force: true }); }

if (failures.length) { console.error(`${failures.length} of ${checks} owner-line checks failed:`); failures.forEach(f => console.error(`  - ${f}`)); process.exit(1); }
console.log(`✓ ${checks} owner-line checks passed on a scratch repository`);
