// Civics' news questions cannot be answered by a surface cue (lessons 4 to 8, and lesson 13's stories that rest on the past). Each predictor below is a shortcut a learner could take without reasoning,
// scripted as the research review of 2026-10-22 scripted it: the paper's name for the level, the words of the deciding line for the verdict, where the
// deciding line stands, the line that names a law or a court, a check's keyword in the headline or the story for the check at work, a template sentence or
// a paper's name for take-or-check, and where the right search result stands, whether it looks like a paper or says "official"; and the round 2
// review's: the check not said with "no" or "not", "have I checked the source?" alone, a timing word, and the course's own papers in the results. A shortcut fails the test
// when it predicts the answer better than always giving the most common answer does, by more than MARGIN; a cue with many values (a paper's
// name) is scored leaving one out, each story predicted from all the others, so a name met once predicts nothing. Run: node tests/civics-cues.mjs
import { loadApp } from './load-app.mjs';

const MARGIN = 0.15;   // what small banks allow by chance; a cue the review found ran at 0.5 to 0.98 above chance
const { FC } = await loadApp();
const civics = FC.get('civics');
const failures = [];
let checks = 0;

const majority = list => {
  const n = new Map();
  list.forEach(x => n.set(x, (n.get(x) || 0) + 1));
  return [...n.entries()].sort((a, b) => b[1] - a[1] || String(a[0]).localeCompare(String(b[0])))[0]?.[0];
};
// leave one out: the answer most often given to the other rows with the same cue, else to all other rows
const looAccuracy = (rows, cue) => rows.filter((r, i) => {
  const rest = rows.filter((_, j) => j !== i), same = rest.filter(x => cue(x) === cue(r));
  return (same.length ? majority(same.map(x => x.answer)) : majority(rest.map(x => x.answer))) === r.answer;
}).length / rows.length;
// chance: always giving the most common answer (counted on all the rows, so a balanced bank's chance is one in the number of answers)
const baseline = rows => { const top = majority(rows.map(r => r.answer)); return rows.filter(r => r.answer === top).length / rows.length; };
function noBetterThanChance(name, rows, cue) {
  checks++;
  const base = baseline(rows), acc = looAccuracy(rows, cue);
  if (acc > base + MARGIN) failures.push(`${name}: the cue gets ${(acc * 100).toFixed(0)}% on unseen stories, guessing the most common answer ${(base * 100).toFixed(0)}% (${rows.length} stories)`);
  return { name, acc, base };
}
// a predictor that names an answer outright (a line to tap), against the same baseline
function directNoBetter(name, rows, predict) {
  checks++;
  const base = baseline(rows), acc = rows.filter(r => predict(r) === r.answer).length / rows.length;
  if (acc > base + MARGIN) failures.push(`${name}: the shortcut is right on ${(acc * 100).toFixed(0)}%, guessing the most common answer ${(base * 100).toFixed(0)}% (${rows.length} stories)`);
  return { name, acc, base };
}

const items = Object.values(civics.items).filter(i => /^l[4-8]-/.test(i.id));
const ask = (i, id) => i.asks.find(a => a.id === id);
const story = i => i.blocks.find(b => b.kind === 'article');
const linesOf = i => story(i).lines;
const lineText = (i, id) => (linesOf(i).find(l => l.id === id) || {}).text || '';
const lesson = i => i.id.slice(0, 2);
const report = [];

// 1. the paper's name and the level that acted (every news story, and lesson by lesson)
const levelRows = items.filter(i => i.facets.level).map(i => ({ i, answer: i.facets.level }));
report.push(noBetterThanChance('paper name predicts the level, all stories', levelRows, r => story(r.i).source));
['l4', 'l5', 'l6', 'l8'].forEach(l => report.push(noBetterThanChance(`paper name predicts the level, lesson ${l.slice(1)}`, levelRows.filter(r => lesson(r.i) === l), r => story(r.i).source)));

// 2. the words of the deciding line and the verdict
const verdictRows = items.filter(i => ask(i, 'verdict')).map(i => ({ i, answer: ask(i, 'verdict').right }));
const tappedRows = verdictRows.filter(r => r.i.asks.some(a => a.kind === 'tap')).map(r => ({ ...r, line: lineText(r.i, r.i.asks.find(a => a.kind === 'tap').right[0]) }));
const verdictWords = text => /\bjudge\b|\bcourt\b/i.test(text) ? 'court' : /no law/i.test(text) && /allows? or forbids?/i.test(text) ? 'unsettled'
  : /\bonly\b|\bnot\b|cannot|may not|no power|\bno city\b/i.test(text) ? 'not' : /\blets?\b|\bgives?\b|\ballows?\b/i.test(text) ? 'theirs' : 'none';
report.push(noBetterThanChance('words of the deciding line predict the verdict', tappedRows, r => verdictWords(r.line)));
const verdictStoryWords = r => verdictWords(linesOf(r.i).map(l => l.text).join(' '));
report.push(noBetterThanChance('words anywhere in the story predict the verdict', verdictRows, verdictStoryWords));

// 3. where the line to tap stands, and the line that names a law or a court
const tapRows = items.filter(i => i.asks.some(a => a.kind === 'tap' && a.in === 'story')).map(i => ({ i, answer: i.asks.find(a => a.kind === 'tap').right[0] }));
report.push(directNoBetter('the line that names a law, the Constitution or a court is the one to tap', tapRows,
  r => (linesOf(r.i).find(l => /\blaw\b|constitution|\bcourt\b|\bjudge\b/i.test(l.text)) || {}).id));
report.push(directNoBetter('the line to tap is never the first: the second is', tapRows, () => 'l2'));
checks++;
const firsts = tapRows.filter(r => r.answer === 'l1').length;
if (!firsts || !tapRows.some(r => r.answer === 'l3')) failures.push(`the line to tap stands first in ${firsts} stories and third in ${tapRows.filter(r => r.answer === 'l3').length}: it must stand in every place`);

// 4. a check's keyword and the check at work
const stopRows = items.filter(i => ask(i, 'stop')).map(i => ({ i, answer: ask(i, 'stop').right }));
const STOP_WORDS = [['veto', /veto/i], ['amend', /amendment/i], ['higher', /federal law|state law|federal rule|its rules|clash|\bwins\b/i], ['courts', /\bsue|lawsuit|court|judge/i],
  ['voters', /election|ballot|voters/i], ['change', /new law|repeal|write a law|into law|a law to settle|vote is set|vote on a new/i]];
const keywordsIn = text => STOP_WORDS.filter(([, re]) => re.test(text)).map(([id]) => id);
report.push(noBetterThanChance('a keyword in the headline predicts the check', stopRows, r => keywordsIn(story(r.i).headline.text)[0] || 'none'));
const lineKeys = r => linesOf(r.i).slice(1).flatMap(l => keywordsIn(l.text));   // the first line is the act; the checks come after it
report.push(directNoBetter('the first check word after the act is the check', stopRows, r => lineKeys(r)[0]));
report.push(directNoBetter('the last check word in the story is the check', stopRows, r => lineKeys(r).slice(-1)[0]));
// round 2: the check not said with "no" or "not" is the live one (a learner reading for the negation, not for whether it is under way)
const NEGATED = /\bno\b|\bnot\b|never|none|cannot/i, PUT_OFF = /\bno one\b|\bno\b|\bnot\b|never|until 20\d\d|cannot|none|years away|next year/i;
const firstUnnegated = (r, re, from) => { for (const l of linesOf(r.i).slice(from)) { if (re.test(l.text)) continue; const k = keywordsIn(l.text)[0]; if (k) return k; } return 'none'; };
report.push(directNoBetter('the first check word on a line with no "no" or "not" is the check', stopRows, r => firstUnnegated(r, NEGATED, 1)));
report.push(directNoBetter('the first check word on a line not negated or put off is the check', stopRows, r => firstUnnegated(r, PUT_OFF, 1)));
report.push(directNoBetter('the same, counting the first line too', stopRows, r => firstUnnegated(r, PUT_OFF, 0)));
['l6', 'l8'].forEach(l => report.push(directNoBetter(`the first check word on a line with no "no" or "not", lesson ${l.slice(1)}`, stopRows.filter(r => lesson(r.i) === l), r => firstUnnegated(r, NEGATED, 1))));

// 5. take or check: a template sentence, or the paper's name
const sourceItems = Object.values(civics.items).filter(i => ask(i, 'source'));
const seenOf = i => (i.blocks.find(b => b.kind === 'prose') || {}).text || '';
const sourceRows = sourceItems.map(i => ({ i, answer: ask(i, 'source').right }));
report.push(noBetterThanChance('"You looked up" in where it reached you predicts take', sourceRows, r => /^You looked up/.test(seenOf(r.i))));
report.push(noBetterThanChance('"never" in where it reached you predicts check', sourceRows, r => /never/i.test(seenOf(r.i))));
report.push(noBetterThanChance('the paper\'s name predicts take or check', sourceRows, r => story(r.i).source));
report.push(noBetterThanChance('a paper\'s kind of name ("The ...") predicts take or check', sourceRows, r => /^The /.test(story(r.i).source)));
// round 2: "have I checked the source?" alone, in any of its words, and a timing word for the alarm
const checkedBefore = r => /looked up|looked into|checked|for years|typed the county/i.test(seenOf(r.i)) && !/not looked|never|do not know|have not/i.test(seenOf(r.i));
report.push(noBetterThanChance('"I have checked this source" alone, in any words, predicts take or check', sourceRows, checkedBefore));
report.push(noBetterThanChance('a timing word ("tonight", "midnight", "starting") predicts check', sourceRows, r => /tonight|midnight|starting|within a week/i.test([story(r.i).headline ? story(r.i).headline.text : '', ...linesOf(r.i).map(l => l.text)].join(' '))));

// 6. the page of search results
const resultItems = Object.values(civics.items).filter(i => ask(i, 'open'));
const resultRows = resultItems.map(i => ({ i, answer: ask(i, 'open').right[0] }));
const resultLines = i => i.blocks.find(b => b.id === 'results').lines;
report.push(directNoBetter('the right result stands in one place', resultRows, () => majority(resultRows.map(r => r.answer))));
report.push(directNoBetter('the result that looks like a paper is the right one', resultRows, r => (resultLines(r.i).find(l => /^The [A-Z]\w* [A-Z]\w*:/.test(l.text)) || {}).id));
report.push(directNoBetter('the result that says "official" is the right one', resultRows, r => (resultLines(r.i).find(l => /official/i.test(l.text)) || {}).id));
// a result that asks or inspects ("Who funds ...?", "line by line", "full text") is not right for asking alone: the source can ask about itself, or pay to
const ASKS = /\?|who (runs|funds|pays)|line by line|did and did not|full text|transcript|tax filings/i;
report.push(directNoBetter('the result that asks or inspects is the right one', resultRows, r => (resultLines(r.i).find(l => ASKS.test(l.text)) || {}).id));
report.push(directNoBetter('the result from a paper of the course, a newsroom or the official record is the right one', resultRows,
  r => (resultLines(r.i).find(l => /Harbor Gazette|Capital Sun|Valley Courier|Metro Post|Lakeview Times|newsroom|Congress\.gov|transcript/i.test(l.text)) || {}).id));
checks++;
if (resultItems.some(i => resultLines(i).some(l => /\((the|its) [a-z’' ]*(own )?(site|page)\)/i.test(l.text)))) failures.push('a search result is tagged as the source’s own site: only its name may say so');

// 7. lesson 13: a decision of today resting on the past. The line to tap must not be found by its year or by a named law or event alone, and the right
// cause must not be found by its length, its place, or by being the only one earlier than the thing it led to
const pastItems = Object.values(civics.items).filter(i => i.strand === 'past');
const pastRows = pastItems.map(i => ({ i, answer: i.asks.find(a => a.kind === 'tap').right[0] }));
const YEAR = /\b1[6-9]\d\d\b|\b20\d\d\b/, NAMED = /\bAct\b|Amendment|\bv\.|\bWar\b|\blaw\b|\bruling\b|charter|Constitution/;
const withRe = (i, re) => linesOf(i).filter(l => re.test(l.text)).map(l => l.id);
report.push(directNoBetter('lesson 13: the first line with a year is the one to tap', pastRows, r => withRe(r.i, YEAR)[0]));
report.push(directNoBetter('lesson 13: the last line with a year is the one to tap', pastRows, r => withRe(r.i, YEAR).slice(-1)[0]));
report.push(directNoBetter('lesson 13: the only line with a year is the one to tap', pastRows, r => { const y = withRe(r.i, YEAR); return y.length === 1 ? y[0] : undefined; }));
report.push(directNoBetter('lesson 13: the first line naming a law, ruling or war is the one to tap', pastRows, r => withRe(r.i, NAMED)[0]));
report.push(directNoBetter('lesson 13: the last line naming a law, ruling or war is the one to tap', pastRows, r => withRe(r.i, NAMED).slice(-1)[0]));
const causeRows = pastItems.map(i => ({ i, answer: true }));
const causeOpts = i => i.asks.find(a => a.id === 'cause').options;
checks++;
const longest = pastItems.filter(i => { const o = causeOpts(i), max = Math.max(...o.map(x => x.text.length)); return o.find(x => x.ok).text.length === max; }).length / pastItems.length;
if (longest > 0.25 + MARGIN) failures.push(`lesson 13: the longest cause is the right one in ${(longest * 100).toFixed(0)}% of stories (chance 25%)`);
report.push({ name: 'lesson 13: the longest cause is the right one', acc: longest, base: 0.25 });
checks++;
const allLater = pastItems.filter(i => causeOpts(i).filter(o => !o.ok).every(o => o.slip === 'out-of-time')).length;
if (allLater > 0) failures.push(`lesson 13: in ${allLater} stories every wrong cause is a later one, so the dates alone answer`);
checks++;
const throwaway = new Map();
pastItems.forEach(i => causeOpts(i).filter(o => !o.ok).forEach(o => throwaway.set(o.id, (throwaway.get(o.id) || 0) + 1)));
const overused = [...throwaway.entries()].filter(([, n]) => n > pastItems.length / 2);
if (overused.length) failures.push(`lesson 13: a wrong cause offered in more than half the stories, learned to skip on sight: ${overused.map(([id, n]) => `${id} (${n})`).join(', ')}`);
checks++;
const noLater = pastItems.filter(i => !causeOpts(i).some(o => !o.ok && o.slip !== 'out-of-time')).length;
if (noLater) failures.push(`lesson 13: ${noLater} stories have no wrong cause from before, so "a cause comes before" alone answers`);

if (process.argv.includes('--report')) report.forEach(r => console.log(`${(r.acc * 100).toFixed(0).padStart(3)}% vs ${(r.base * 100).toFixed(0).padStart(3)}%  ${r.name}`));
if (failures.length) {
  console.error(`✗ ${failures.length} of ${checks} Civics cue checks failed:`);
  failures.forEach(f => console.error('  - ' + f));
  process.exit(1);
}
console.log(`✓ ${checks} Civics cue checks passed: no surface cue predicts a news answer, or a lesson 13 answer, above chance`);
