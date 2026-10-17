#!/usr/bin/env python3
"""
What production's FUNCTIONS and Firestore RULES do not have yet.

status.sh answers "is production current?" from the deploy stamp, and only a
hosting deploy writes that stamp. Functions and rules deploy on their own and
leave no trace in git, so a hosting-current report says nothing about them —
a project can read "production is current" while its Cloud Functions still
run code main has already replaced.

FUNCTIONS — for every deployed function, gather the source it runs (for a
re-export, its module's transitive imports; for an inline export in
functions/index.js, the top-level declarations it references plus theirs) and
compare the newest commit among them with the function's updateTime.

This is FILE-level, so it over-reports: a function is listed when any file it
imports changed, even if the change never reaches its code path. That is the
safe direction. A listed function means "look before deploying"; an unlisted
one is current.

Export style varies per TMV project's functions/index.js — some use ESM
(`export const foo = onCall(...)`), some use CommonJS
(`exports.foo = onCall(...)`). Both are recognized as top-level declarations
below so this script works unmodified on either.

RULES — compares the live cloud.firestore ruleset with firestore.rules on
origin/main, byte for byte.

Reads origin/main through git plumbing, never the working tree, so a local
edit cannot make production look current. Read-only. Without gcloud
credentials, or without a readable `.firebaserc` project id, it prints a skip
line and exits 0 rather than crashing — this script assumes nothing about a
project's structure beyond `.firebaserc` and `functions/index.js` existing.
"""
import datetime, json, os, re, subprocess, sys, urllib.request

REF, FN = 'origin/main', 'functions'
IDX = f'{FN}/index.js'

def sh(*args):
    r = subprocess.run(args, capture_output=True, text=True)
    if r.returncode != 0:
        raise RuntimeError(f"{args[0]} {args[1]}: {r.stderr.strip()[:160]}")
    return r.stdout

def skip(why):
    print(f'FUNCTIONS\n  (skipped — {why})\n\nRULES\n  (skipped — {why})')
    sys.exit(0)

try:
    PROJECT = json.load(open('.firebaserc'))['projects']['default']
except Exception as e:
    skip(f'cannot read .firebaserc "projects.default": {e}')
try:
    TOKEN = sh('gcloud', 'auth', 'print-access-token').strip()
    listing = sh('gcloud', 'functions', 'list', '--project', PROJECT,
                 '--format=csv[no-heading](name.basename(),updateTime)')
except Exception:
    skip('gcloud not installed or not authenticated')

deployed = {}
for line in listing.splitlines():
    if not line.strip():
        continue
    name, t = line.strip().split(',', 1)
    t = re.sub(r'(\.\d{6})\d*', r'\1', t.replace('Z', '+00:00'))
    deployed[name] = datetime.datetime.fromisoformat(t).timestamp()

FILES = {p for p in sh('git', 'ls-tree', '-r', '--name-only', REF, '--', FN).splitlines()
         if p.endswith('.js') and '/node_modules/' not in f'/{p}'}
_src, _deps, _last = {}, {}, {}

def src(p):
    if p not in _src:
        _src[p] = sh('git', 'show', f'{REF}:{p}')
    return _src[p]

def resolve(base, rel):
    p = os.path.normpath(os.path.join(os.path.dirname(base), rel))
    for c in (p, p + '.js', p + '/index.js'):
        if c in FILES:
            return c
    return None

DEP = re.compile(r"""(?:require\(\s*['"](\.{1,2}/[^'"]+)['"]\s*\)|from\s+['"](\.{1,2}/[^'"]+)['"]|import\s+['"](\.{1,2}/[^'"]+)['"])""")

def deps(p):
    if p not in _deps:
        _deps[p] = {r for m in DEP.finditer(src(p))
                    for r in [resolve(p, m.group(1) or m.group(2) or m.group(3))] if r}
    return _deps[p]

def closure(start):
    seen, stack = set(), [start]
    while stack:
        x = stack.pop()
        if x and x not in seen:
            seen.add(x)
            stack.extend(deps(x))
    seen.discard(IDX)
    return seen

def last(p):
    if p not in _last:
        o = sh('git', 'log', '-1', '--format=%ct', REF, '--', p).strip()
        _last[p] = int(o) if o else 0
    return _last[p]

idx = src(IDX)
lines = idx.split('\n')
line_time = [int(x) for x in re.findall(r'^committer-time (\d+)',
             sh('git', 'blame', '--line-porcelain', REF, '--', IDX), re.M)]

# Declarations: ESM (`export const foo = ...`) and CommonJS
# (`exports.foo = ...`) both mark a top-level, exported binding — TMV
# projects use either style per functions/index.js, so both must resolve to
# the same name/range/exported tracking below.
DECL = re.compile(r"^(?:export\s+)?(?:const|let|var|async\s+function|function|class)\s+(\w+)|^exports\.(\w+)\s*=")
BOUND = re.compile(r"^(?:export\s|const\s|let\s|var\s|async\s+function\s|function\s|class\s|import\s|exports\.)")
tops = [(i, (m.group(1) or m.group(2))) for i, l in enumerate(lines) for m in [DECL.match(l)] if m]
bounds = sorted({i for i, l in enumerate(lines) if BOUND.match(l)}) + [len(lines)]
ranges = {n: (i, next(b for b in bounds if b > i)) for i, n in tops}
exported = {n for i, n in tops if lines[i].startswith('export ') or lines[i].startswith('exports.')}

def names(block):
    return [part.split(' as ')[-1].strip() for part in block.split(',') if part.strip()]

imports, reexp = {}, {}
# ESM named/default imports of local modules.
for m in re.finditer(r"import\s*\{([^}]*)\}\s*from\s*['\"](\.{1,2}/[^'\"]+)['\"]", idx, re.S):
    for n in names(m.group(1)):
        imports[n] = resolve(IDX, m.group(2))
for m in re.finditer(r"import\s+(?:\*\s+as\s+)?(\w+)\s+from\s*['\"](\.{1,2}/[^'\"]+)['\"]", idx):
    imports[m.group(1)] = resolve(IDX, m.group(2))
for m in re.finditer(r"export\s*\{([^}]*)\}\s*from\s*['\"](\.{1,2}/[^'\"]+)['\"]", idx, re.S):
    for n in names(m.group(1)):
        reexp[n] = resolve(IDX, m.group(2))
# CommonJS destructured/plain requires of local modules — the same role as
# the ESM import forms above, for projects whose functions/index.js is
# CommonJS instead.
for m in re.finditer(r"(?:const|let|var)\s*\{([^}]*)\}\s*=\s*require\(\s*['\"](\.{1,2}/[^'\"]+)['\"]\s*\)", idx, re.S):
    for n in names(m.group(1)):
        imports[n] = resolve(IDX, m.group(2))
for m in re.finditer(r"(?:const|let|var)\s+(\w+)\s*=\s*require\(\s*['\"](\.{1,2}/[^'\"]+)['\"]\s*\)", idx):
    imports[m.group(1)] = resolve(IDX, m.group(2))

WORD = re.compile(r'\b[A-Za-z_]\w*\b')

def top_deps(name, seen):
    if name in seen:
        return
    seen.add(name)
    a, b = ranges[name]
    for w in set(WORD.findall('\n'.join(lines[a:b]))):
        if w in ranges and w not in exported:
            top_deps(w, seen)

fmt = lambda t: datetime.datetime.fromtimestamp(t).strftime('%m-%d %H:%M')
stale, unmapped = [], []
for fn, dep_t in sorted(deployed.items()):
    if reexp.get(fn):
        fs = closure(reexp[fn])
        newest = max(fs, key=last)
        t, why = last(newest), newest
    elif fn in ranges:
        seen, t, why = set(), 0, None
        top_deps(fn, seen)
        for d in seen:
            a, b = ranges[d]
            if line_time[a:b] and max(line_time[a:b]) > t:
                t, why = max(line_time[a:b]), f'{IDX} `{d}`'
            for w in set(WORD.findall('\n'.join(lines[a:b]))):
                for f in closure(imports[w]) if imports.get(w) else ():
                    if last(f) > t:
                        t, why = last(f), f
    else:
        unmapped.append(fn)
        continue
    if t > dep_t + 60:
        stale.append((fn, why, t, dep_t))

print('FUNCTIONS')
if not stale:
    print(f'  (all {len(deployed) - len(unmapped)} mapped function(s) current)')
else:
    print(f'  {len(stale)} deployed function(s) predate a change to a file they import.')
    print('  File-level: confirm the change reaches the function, then deploy it by name.')
    for fn, why, t, d in stale:
        print(f'    {fn:36s} source {fmt(t)} ({why})  deployed {fmt(d)}')
    print('  npm run deploy -- --only ' + ','.join(f'functions:{s[0]}' for s in stale))
if unmapped:
    print(f'  !! could not map to source — check by hand: {", ".join(unmapped)}')
print()

print('RULES')
try:
    def get(url):
        req = urllib.request.Request(url, headers={'Authorization': f'Bearer {TOKEN}',
                                                   'x-goog-user-project': PROJECT})
        return json.load(urllib.request.urlopen(req, timeout=20))
    rel = get(f'https://firebaserules.googleapis.com/v1/projects/{PROJECT}/releases')
    fs = next(r for r in rel.get('releases', []) if r['name'].endswith('/cloud.firestore'))
    live = get(f"https://firebaserules.googleapis.com/v1/{fs['rulesetName']}")['source']['files'][0]['content']
    if live == sh('git', 'show', f'{REF}:firestore.rules'):
        print('  current (live ruleset == firestore.rules on origin/main)')
    else:
        lastc = sh('git', 'log', '-1', '--format=%h %ad %s', '--date=short', REF, '--', 'firestore.rules').strip()
        print(f'  DIFFERENT from origin/main (last rules commit: {lastc})')
        print('  npm run deploy -- --only firestore:rules')
except Exception as e:
    print(f'  (skipped — {type(e).__name__}: {str(e)[:120]})')
