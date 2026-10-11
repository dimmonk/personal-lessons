// Writes a lesson as a learner meets it, generated from the data by the engine's own functions: docs/learner-view/<subject>-<lesson>.md.
// Read it as a newcomer (the cold read): every screen in order, every question with its options and the feedback each one gets, then the
// end check. Right answers are marked (right) so a reader can follow the feedback; the app never marks them before the answer.
// Run: node tools/learner-view/render-learner-view.mjs <subject> [<lesson>]    (--fixture for the test subject, --stdout to print)
import { mkdir, writeFile } from 'node:fs/promises';
import { loadAll } from './load.mjs';

const paras = text => text == null ? [] : Array.isArray(text) ? text : [text];
const quote = lines => lines.map(l => `> ${l}`).join('\n');

/* ---------- blocks ---------- */
function blockLines(block, deciding = []) {
  if (block.kind === 'pair') {
    return ['| A | B |', '|---|---|', `| ${blockLines(block.a, deciding).join(' ')} | ${blockLines(block.b, deciding).join(' ')} |`, '', `Compare: ${paras(block.compare).join(' ')}`];
  }
  const text = block.lines ? [block.lines.map(s => deciding.includes(s.id) ? `**${s.text}**` : s.text).join(' ')] : paras(block.text);
  if (block.tone === 'wrong') return [`A wrong idea, marked wrong: ${text.slice(0, -1).join(' ') || text.join(' ')}`, ...(text.length > 1 ? [`The right line: ${text[text.length - 1]}`] : [])];
  return text;
}
const blocksText = (blocks, deciding) => blocks.flatMap(b => [...blockLines(b, deciding), '']).join('\n');

/* ---------- a question ---------- */
function askLines(e, data, ask, marks) {
  const options = e.chooseOptions(data.subjects.__current, ask);
  const lines = [`**${paras(ask.prompt).join(' ')}**${ask.many ? ' (choose every one that fits)' : ''}${ask.when ? ' (opens only after a certain answer)' : ''}`];
  options.forEach(o => lines.push(`- ${o.text}${marks && o.ok ? ' (right)' : ''}${marks && !o.ok ? ` — if chosen: ${o.then ? paras(o.then).join(' ') : `a slip: ${o.slip}`}` : ''}`));
  return lines;
}
function questionLines(e, data, inst, support, label) {
  const item = inst.item, lines = [`#### ${label}${inst.seed !== undefined ? ` (made with fresh numbers; this is seed ${inst.seed})` : ''}`, '', blocksText(item.blocks, support && support.shown ? item.deciding : [])];
  if (support && support.shown) lines.push('Help on screen: the words that decide it are marked.', '');
  const shown = e.shownStepIds(item, support);
  if (shown.length) lines.push('Help on screen: the working up to the last steps.', ...item.steps.filter(s => shown.includes(s.id)).map(s => `- ${s.does} ${s.working}`), '');
  e.askedAsks(item, support).forEach(a => lines.push(...askLines(e, data, a, true), ''));
  lines.push(`After the answer: the deciding words are marked${(item.deciding || []).length ? '' : ' (none named)'}. Reason: ${paras(item.reason).join(' ')}`);
  if (item.need) lines.push(`What you would need to see: ${paras(item.need).join(' ')}`);
  if (item.steps) lines.push('The working:', ...item.steps.map(s => `- ${s.does} ${s.working}`));
  return [...lines, ''];
}

/* ---------- a lesson ---------- */
export function renderLesson(loaded, subjectId, lessonId) {
  const e = loaded.engine, data = { ...loaded, subjects: { ...loaded.subjects, __current: loaded.subjects[subjectId] } };
  const subject = loaded.subjects[subjectId], lesson = subject.lessons[lessonId];
  if (!lesson) throw new Error(`${subjectId} has no lesson ${lessonId}`);
  const part = (subject.meta.parts.find(p => p.id === lesson.part) || {}).title;
  const out = [`# ${subject.meta.name}: ${lesson.title}`, '',
    `Revision ${lesson.rev}, ${lesson.status}${lesson.status === 'draft' ? ' (the screen carries the draft line)' : ''}. Part: ${part || 'none'}. Where the subject ends up: ${subject.meta.endResult}`, '',
    '## The why', '', ...paras(lesson.why), ''];
  const instance = ref => e.refId(ref) in subject.items ? { key: e.refId(ref), item: subject.items[e.refId(ref)] } : { key: e.refId(ref), item: e.itemFromGen(subject.gens[e.refId(ref)], 1), seed: 1 };
  let n = 0;
  lesson.flow.forEach((step, i) => {
    const at = `Step ${i + 1}`;
    if (step.show) out.push(`## ${at}: ${step.title}`, '', blocksText(step.show));
    else if (step.worked) {
      const item = subject.items[step.worked];
      out.push(`## ${at}: A worked example`, '', blocksText(item.blocks));
      if (item.asks.length) out.push('Before the working, the learner may commit to a choice (not scored, not stored):', ...askLines(e, data, item.asks[0], false), '');
      out.push('The working, one step at a time:', ...(item.steps || []).map(s => `${'1.'} ${s.does} ${s.working}`), '', `Then the answer: ${item.asks.map(a => e.chooseOptions(subject, a).filter(o => o.ok).map(o => o.text).join('; ')).join(' / ')}. ${paras(item.reason).join(' ')}`, '');
    } else {
      const set = step.set, refs = e.flatRefs(set.items);
      out.push(`## ${at}: Questions`, '', `${refs.reduce((k, r) => k + e.refCount(r), 0)} questions, ${set.order}${set.support ? `, with help (${Object.entries(set.support).map(([k, v]) => v === true ? k : `${k} ${v}`).join(', ')})` : ''}${set.mix ? `, with about ${Math.round(set.mix.share * 100)}% from earlier lessons mixed in, unlabeled` : ''}. A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.`, '');
      refs.forEach(ref => { for (let k = 0; k < e.refCount(ref); k++) out.push(...questionLines(e, data, instance(typeof ref === 'string' ? ref : { ...ref }), set.support, `Question ${++n}`)); });
      out.push('Then a screen: you can stop here, your place is kept.', '');
    }
  });
  const check = lesson.check, size = e.checkSize(check);
  out.push('## The check', '', `${size} new questions, no help. ${check.feedback === 'at-end' ? 'No answer is shown until the end.' : 'The answer is shown after each question.'}${check.retest ? ` It comes back once, on new questions, ${check.retest} days after the first time.` : ''}`, '',
    'To pass:', ...check.pass.map(r => `- ${e.ruleText(subject, r)}`), '');
  if (e.checkIsDrawn(check)) out.push(`The questions are drawn from the topics: ${check.items.draw.strands.join(', ')} (${check.items.draw.n} of them).`, '');
  else e.flatRefs(check.items).forEach(ref => { for (let k = 0; k < e.refCount(ref); k++) out.push(...questionLines(e, data, instance(ref), null, `Check question ${++n}`)); });
  out.push('## The result', '', 'For example "4 of 5: passed" or "3 of 5: not yet", each rule above shown as met or not met, then every answer with its feedback, the missed ones first.', '');
  return out.join('\n');
}

async function main() {
  const args = process.argv.slice(2), flags = new Set(args.filter(a => a.startsWith('--'))), names = args.filter(a => !a.startsWith('--'));
  const [subjectId, lessonId] = names;
  if (!subjectId) { console.error('usage: node tools/learner-view/render-learner-view.mjs <subject> [<lesson>] [--fixture] [--stdout]'); process.exit(1); }
  const loaded = await loadAll({ fixture: flags.has('--fixture') });
  const subject = loaded.subjects[subjectId];
  if (!subject) throw new Error(`unknown subject ${subjectId}`);
  const ids = lessonId ? [lessonId] : Object.keys(subject.lessons);
  if (!ids.length) { console.log(`${subjectId} has no lessons yet`); return; }
  for (const id of ids) {
    const text = renderLesson(loaded, subjectId, id);
    if (flags.has('--stdout')) { console.log(text); continue; }
    const dir = new URL('../../docs/learner-view/', import.meta.url);
    await mkdir(dir, { recursive: true });
    await writeFile(new URL(`${subjectId}-${id}.md`, dir), text);
    console.log(`wrote docs/learner-view/${subjectId}-${id}.md`);
  }
}

import { pathToFileURL } from 'node:url';
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main().catch(error => { console.error(error.message); process.exit(1); });
