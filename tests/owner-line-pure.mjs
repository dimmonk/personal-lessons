// The owner-line check (tools/design/owner-line.mjs) on a scratch repository: a gate file renamed out is a change to it; a merge in
// progress with a conflict only in a non-gate file needs no word and does not crash; a gate conflict resolved to one side is the merge's
// own change; a clean merge of two worded gate edits is not. Run: node tests/owner-line-pure.mjs
import { mkdtempSync, mkdirSync, writeFileSync, rmSync, symlinkSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';
// the run must reach its last line: an early exit anywhere (in the tool on import, or here) is a failure, not a pass
// registered before the tool is probed or imported, so an exit inside it is caught too
let finished = false;
process.on('exit', code => { if (!finished && code === 0) { console.error('owner-line checks: the run stopped before its end'); process.exitCode = 1; } });

const TOOL = fileURLToPath(new URL('../tools/design/owner-line.mjs', import.meta.url));
// the tool must come back from being imported: an exit at import (any code) would end this run before a single check
const probe = execFileSync('node', ['--input-type=module', '-e', `await import(${JSON.stringify(pathToFileURL(TOOL).href)}); console.log('imported')`], { stdio: ['ignore', 'pipe', 'pipe'] }).toString().trim();
if (probe !== 'imported') { console.error('owner-line checks: the tool exits when it is imported, so nothing it says can be trusted'); process.exit(1); }
const { changed, gatedChanges, OctopusError } = await import('../tools/design/owner-line.mjs');
const run = (args, cwd) => { try { execFileSync('node', [TOOL, ...args], { cwd, stdio: ['ignore', 'pipe', 'pipe'] }); return 0; } catch (error) { return error.status; } };

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
  // the check run as a script: its verdict on a commit with and without the line
  writeFileSync(join(dir, 'msg-none.txt'), 'no line\n'); writeFileSync(join(dir, 'msg-word.txt'), 'x\n\nOwner\'s word: "yes" (chat)\n');
  same(run(['msg-none.txt', '--commit', 'HEAD', '--brought', base], dir), 1, 'the script refuses a gate change without the line');
  same(run(['msg-word.txt', '--commit', 'HEAD', '--brought', base], dir), 0, 'the script passes a gate change with the line');
  same(run(['msg-none.txt', '--commit', 'HEAD'], dir), 0, 'the script passes a clean merge with no own change');
  // a staged rename of a gate file out of its folder is a change to it
  git('checkout', '-q', '-b', 'e', base); git('mv', 'tools/design/owner-line.mjs', 'moved.mjs');
  ok(gatedChanges('--staged', undefined, null, dir).includes('tools/design/owner-line.mjs'), 'a staged rename out is a change to the gate file');
  same(run(['msg-none.txt', '--staged'], dir), 1, 'the script refuses the staged rename without the line');
  git('reset', '-q', '--hard'); 
  // a merge whose own change renames a gate file out
  git('checkout', '-q', '-b', 'f', base); write('other.txt', 'f\n'); git('add', '-A'); git('commit', '-q', '-m', 'f');
  git('merge', '-q', '--no-commit', '--no-ff', 'a'); git('mv', 'tools/design/owner-line.mjs', 'gone.mjs'); git('commit', '-q', '-m', 'evil rename');
  ok(gatedChanges('--commit', 'HEAD', null, dir).includes('tools/design/owner-line.mjs'), 'a merge that renames a gate file out is held for it');
  // an octopus merge is refused
  git('checkout', '-q', '-b', 'g', base); write('g.txt', 'g\n'); git('add', '-A'); git('commit', '-q', '-m', 'g');
  git('checkout', '-q', '-b', 'h', base); write('h.txt', 'h\n'); git('add', '-A'); git('commit', '-q', '-m', 'h');
  git('checkout', '-q', '-b', 'i', base); write('i.txt', 'i\n'); git('add', '-A'); git('commit', '-q', '-m', 'i'); git('merge', '-q', '--no-edit', 'g', 'h');
  same(git('rev-list', '--parents', '-n', '1', 'HEAD').split(/\s+/).length, 4, 'the merge has three parents');
  let octo = false; try { gatedChanges('--commit', 'HEAD', null, dir); } catch (error) { octo = error instanceof OctopusError; }
  ok(octo, 'a merge of more than two parents is refused');
  same(run(['msg-word.txt', '--commit', 'HEAD'], dir), 1, 'the script refuses an octopus merge even with the line');
  // a merge in progress with three heads is refused, through the library from another directory and through the script
  git('checkout', '-q', '-b', 'j', base); write('j.txt', 'j\n'); git('add', '-A'); git('commit', '-q', '-m', 'j');
  git('merge', '--no-commit', '--no-ff', 'g', 'h');
  let octoStaged = false; try { gatedChanges('--staged', undefined, null, dir); } catch (error) { octoStaged = error instanceof OctopusError; }
  ok(octoStaged, 'a merge in progress with three heads is refused (read from the repository at cwd, not the process directory)');
  same(run(['msg-word.txt', '--staged'], dir), 1, 'the script refuses a merge in progress with three heads');
  git('merge', '--abort');
  // --brought does not follow renames: a gate file renamed out in what a merge brings in is held
  git('checkout', '-q', '-b', 'k', base); git('mv', 'tools/design/owner-line.mjs', 'away.mjs'); git('commit', '-q', '-m', 'k: Owner\'s word: "yes" (chat)');
  git('checkout', '-q', '-b', 'l', base); write('l.txt', 'l\n'); git('add', '-A'); git('commit', '-q', '-m', 'l'); git('merge', '-q', '--no-edit', '--no-ff', 'k');
  ok(gatedChanges('--commit', 'HEAD', git('rev-parse', 'HEAD^1'), dir).includes('tools/design/owner-line.mjs'), 'a rename out brought in by a merge is held under --brought');
  // the script run by a symlinked path still checks
  const link = join(dir, 'link-owner-line.mjs'); symlinkSync(TOOL, link);
  let code; try { execFileSync('node', [link, 'msg-none.txt', '--commit', 'HEAD', '--brought', git('rev-parse', 'HEAD^1')], { cwd: dir, stdio: ['ignore', 'pipe', 'pipe'] }); code = 0; } catch (error) { code = error.status; }
  same(code, 1, 'the script run by a symlinked path refuses a gate change without the line');
} finally { rmSync(dir, { recursive: true, force: true }); }

finished = true;
if (failures.length) { console.error(`${failures.length} of ${checks} owner-line checks failed:`); failures.forEach(f => console.error(`  - ${f}`)); process.exit(1); }
console.log(`✓ ${checks} owner-line checks passed on a scratch repository`);
