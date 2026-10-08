// How long one read-through of each unit is, from its learner view (docs/learner-view/): the cards in order, the drill, and
// for each question the feedback of one answer (the right one), not every option's. Reviewer notes, the alternative
// answers' feedback and the later-day return cases are left out. Compared with the old card-format units (git afad69c).
// Run: node tools/measure.mjs [--save before.json] [--before before.json]
import { readFile, writeFile, readdir } from 'node:fs/promises';
import { execSync } from 'node:child_process';

const args = process.argv.slice(2), opt = name => { const i = args.indexOf(name); return i >= 0 ? args[i + 1] : null; };
const words = s => s.split(/\s+/).filter(w => /[A-Za-z0-9]/.test(w)).length;

function onePass(md) {
  const body = md.slice(md.indexOf('## Part'), md.indexOf('## After the unit') > 0 ? md.indexOf('## After the unit') : undefined);
  let skip = false;
  return words(body.split('\n').filter(line => {
    if (/^- If you (miss|chose|tapped)|^- If you chose|^\s+- If you|^\s+- “/.test(line)) { skip = true; return false; }
    if (/^- If you are right/.test(line) || /^\*\*|^#|^> /.test(line) || line.trim() === '') skip = false;
    if (skip && /^\s+/.test(line)) return false;
    return !/^\[reviewers only|^\*Unit .* · rev/.test(line);
  }).join(' '));
}
const oldWords = subject => {
  const src = execSync(`git show afad69c:public/subjects/${subject}/standard0.js`, { encoding: 'utf8', maxBuffer: 1 << 26 });
  const strings = [...src.matchAll(/'((?:[^'\\]|\\.)*)'|`([^`]*)`/g)].map(m => (m[1] ?? m[2]).replace(/<[^>]+>/g, ' '));
  return words(strings.join(' '));
};

// how many units each subject had in the old card format (its whole text, cards, drills and cases, is divided among them)
const OLD_UNITS = { psychology: 6, ideology: 5, math: 7, stats: 7, scams: 7, wealth: 7, civics: 7 };
// a subject that never had the old format (Singing, added 2026-10-08) has no old column
const rows = [], subjects = (await readdir(new URL('../public/subjects/', import.meta.url))).sort();
for (const s of subjects) {
  const meta = await readFile(new URL(`../public/subjects/${s}/subject.js`, import.meta.url), 'utf8');
  const units = meta.match(/units:\s*\[([^\]]*)\]/)[1].replace(/['\s]/g, '').split(',');
  const old = OLD_UNITS[s] ? Math.round(oldWords(s) / OLD_UNITS[s]) : null;
  for (const u of units) {
    const md = await readFile(new URL(`../docs/learner-view/${s}-${u}.md`, import.meta.url), 'utf8');
    rows.push({ unit: `${s}/${u}`, oldPerUnit: old, now: onePass(md) });
  }
}
if (opt('--save')) await writeFile(opt('--save'), JSON.stringify(rows, null, 1));
const before = opt('--before') ? Object.fromEntries(JSON.parse(await readFile(opt('--before'), 'utf8')).map(r => [r.unit, r.now])) : null;
console.log(['unit', 'old (avg per unit)', before ? 'before trim' : '', 'one read-through now'].filter(Boolean).join(' | '));
rows.forEach(r => console.log([r.unit, r.oldPerUnit ?? '–', ...(before ? [before[r.unit]] : []), r.now].join(' | ')));
const med = a => [...a].sort((x, y) => x - y)[Math.floor(a.length / 2)];
console.log(`median | ${med(rows.filter(r => r.oldPerUnit !== null).map(r => r.oldPerUnit))}${before ? ` | ${med(Object.values(before))}` : ''} | ${med(rows.map(r => r.now))}`);
