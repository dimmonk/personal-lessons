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

/* ---------- a sung question ---------- */
// A sung question is made by the app from the task a lesson names, at a note drawn from the learner's own range; so it is described by
// what the learner sees and hears, with a sample range to show the shape of the plan. Every sentence the app prints is read from SAY.
const SAMPLE_RANGE = { low: 'A2', high: 'E4' };
const seconds = ms => `${ms / 1000} second${ms === 1000 ? '' : 's'}`;
function singLines(e, ref, support, label) {
  const { SAY } = e, task = ref.sing, kind = task.task, item = e.singItem(task), ask = item.asks[0], plan = e.singPlan(ask, SAMPLE_RANGE, 1);
  const free = e.SING_FREE.includes(kind), line = free || (support && support.line);
  const heard = plan.hear.length ? `the app plays ${plan.hear.length === 1 ? 'the note' : `the ${plan.hear.length} notes`} (${plan.hear.map(h => seconds(h.ms)).join(', ')}), ignoring the microphone while it plays and for a quarter of a second after, then` : 'then';
  const windows = plan.windows.map(w => seconds(w.ms)).join(' + ');
  const strip = line ? `the strip shows ${plan.bars.length ? 'the note as a bar and ' : ''}the voice as a line, drawn as it is sung` : `an empty strip with the words "${SAY.stripHidden}"`;
  const lines = [`#### ${label}: ${item.label} (a sung question${free ? '; nothing to match' : "; the notes are made fresh from the learner's range, inside it"})`, '', `**${paras(ask.prompt).join(' ')}**`, '',
    `- Before the tap: one button, "${free ? SAY.singStart : plan.hear.length > 1 ? SAY.singGoMany : SAY.singGo}". The microphone is off and nothing sounds. The screen says: ${SAY.micPrivate}`,
    `- On the tap: the microphone turns on (it stays on for the group), ${heard} the learner sings in a window of ${windows}${plan.holdNeedMs ? `, and must stay on the note for ${seconds(plan.holdNeedMs)}` : ''}.`,
    `- While singing: ${strip}.`];
  if (kind === 'light') lines.push(`- Before the first of these in a group: two notes to set the scale, neither scored. "${SAY.singScaleLoud}" then "${SAY.singScaleTalk}"`);
  if (kind === 'range') lines.push(`- The two windows say: "${SAY.singUp}" then "${SAY.singDown}" The lowest and highest steady notes are saved as the learner's range, once. If they are closer than a fifth: "${SAY.singNarrow}" and nothing is saved.`);
  if (kind === 'warmup') lines.push(`- It is not scored, stored or counted, and there is a "${SAY.singSkip}" link. It ends with "${SAY.singWarmupDone}".`);
  else if (kind === 'range') lines.push(`- After the try: "${SAY.singRangeSaved}". Reason: ${item.reason}`);
  else lines.push(`- After the try, in words: ${Object.values(SAY.singWord).filter(w => w !== SAY.singWord.missed).join(', ')}${kind === 'hold' || kind === 'melody' ? ', and how long the note stayed steady' : ''}. The strip then shows ${plan.bars.length ? 'the note and ' : ''}the voice, with or without the line. Reason: ${item.reason}`);
  if (kind !== 'warmup') lines.push(`- Nothing heard: "${SAY.singNothing}" The try is not counted and can be made again.${kind === 'range' ? '' : ' A miss comes back three tries later with a new note.'}`);
  lines.push(kind === 'warmup' ? '- Stored: nothing.' : `- Stored: numbers only (${kind === 'range' ? 'how much range was found' : 'how far off each note was, in whole hundredths of a half-step'}); no sound is recorded or sent anywhere.`, '');
  return lines;
}
const isSung = ref => typeof ref === 'object' && ref !== null && 'sing' in ref;
// the sung questions of a group, each described once and its repeats named; `from` tries have been asked before it
function sungRefLines(e, refs, support, label, from) {
  let at = from;
  return refs.flatMap(ref => {
    const first = `${label} ${at + 1}`, n = e.refCount(ref), lines = singLines(e, ref, support, first);
    const more = n > 1 ? [`${label.replace(/y$/, 'ies')} ${at + 2} to ${at + n}: the same question, each with a new note drawn from the range.`, ''] : [];
    at += n;
    return [...lines, ...more];
  });
}
// a group that needs the learner's range opens with the range exercise when none is stored: described once in a lesson
function rangeFirst(e, refs, shown) {
  if (shown.done || !refs.some(r => isSung(r) && e.SING_NEEDS_RANGE.includes(r.sing.task))) return [];
  shown.done = true;
  return ['When no range is stored yet, this group opens with the range exercise, and the group follows it:', '', ...singLines(e, { sing: { task: 'range' }, n: 1 }, null, 'First')];
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
  const rangeShown = { done: false }, needsRange = ref => isSung(ref) && e.SING_NEEDS_RANGE.includes(ref.sing.task);
  lesson.flow.forEach((step, i) => {
    const at = `Step ${i + 1}`;
    if (step.show) out.push(`## ${at}: ${step.title}`, '', blocksText(step.show));
    else if (step.worked) {
      const item = subject.items[step.worked];
      out.push(`## ${at}: A worked example`, '', blocksText(item.blocks));
      if (item.asks.length) out.push('Before the working, the learner may commit to a choice (not scored, not stored):', ...askLines(e, data, item.asks[0], false), '');
      out.push('The working, one step at a time:', ...(item.steps || []).map(s => `${'1.'} ${s.does} ${s.working}`), '', `Then the answer: ${item.asks.map(a => e.chooseOptions(subject, a).filter(o => o.ok).map(o => o.text).join('; ')).join(' / ')}. ${paras(item.reason).join(' ')}`, '');
    } else {
      const set = step.set, refs = e.flatRefs(set.items), sung = refs.some(isSung), count = refs.reduce((k, r) => k + e.refCount(r), 0);
      const help = set.support ? `, with help (${Object.entries(set.support).map(([k, v]) => v === true ? (k === 'line' ? 'the line and the notes drawn while singing' : k) : `${k} ${v}`).join(', ')})` : '';
      if (sung) {
        out.push(`## ${at}: ${refs.every(r => isSung(r) && r.sing.task === 'warmup') ? 'Warm-up' : 'Tries'}`, '', refs.every(r => isSung(r) && r.sing.task === 'warmup') ? 'A hum with the line drawn. It is not scored and can be skipped.' : `${count} ${count === 1 ? 'try' : 'tries'}, ${set.order}${help}. A missed try comes back at least three tries later, with a new note, until it is on the note.`, '');
        out.push(...rangeFirst(e, refs, rangeShown), ...sungRefLines(e, refs, set.support, 'Try', n));
        n += count;
        if (!refs.every(r => isSung(r) && r.sing.task === 'warmup')) out.push('Then a screen: you can stop here, your place is kept.', '');
        else out.push('Then the next step: a warm-up has no break screen.', '');
        rangeShown.done ||= refs.some(needsRange);
        return;
      }
      out.push(`## ${at}: Questions`, '', `${count} questions, ${set.order}${help}${set.mix ? `, with about ${Math.round(set.mix.share * 100)}% from earlier lessons mixed in, unlabeled` : ''}. A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.`, '');
      refs.forEach(ref => { for (let k = 0; k < e.refCount(ref); k++) out.push(...questionLines(e, data, instance(typeof ref === 'string' ? ref : { ...ref }), set.support, `Question ${++n}`)); });
      out.push('Then a screen: you can stop here, your place is kept.', '');
    }
  });
  const check = lesson.check, size = e.checkSize(check);
  out.push('## The check', '', `${e.checkIsSung(check) ? `${size} new tries, with no line.` : `${size} new questions, no help.`} ${check.feedback === 'at-end' ? 'No answer is shown until the end.' : e.checkIsSung(check) ? 'The result, in words, is shown after each try.' : 'The answer is shown after each question.'}${check.retest ? ` It comes back once, on new questions, ${check.retest} days after the first time.` : ''}`, '',
    'To pass:', ...check.pass.map(r => `- ${e.ruleText(subject, r, e.rightWord(check))}`), '');
  if (e.checkIsDrawn(check)) out.push(`The questions are drawn from the topics: ${check.items.draw.strands.join(', ')} (${check.items.draw.n} of them).`, '');
  else if (e.checkIsSung(check)) out.push(...rangeFirst(e, e.flatRefs(check.items), rangeShown), ...sungRefLines(e, e.flatRefs(check.items), null, 'Check try', n));
  else e.flatRefs(check.items).forEach(ref => { for (let k = 0; k < e.refCount(ref); k++) out.push(...questionLines(e, data, instance(ref), null, `Check question ${++n}`)); });
  out.push('## The result', '', e.checkIsSung(check) ? 'For example "4 of 5 on the note: passed" or "3 of 5: not yet", each rule above shown as met or not met. The result of each try was shown as it was sung.' : 'For example "4 of 5: passed" or "3 of 5: not yet", each rule above shown as met or not met, then every answer with its feedback, the missed ones first.', '');
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
