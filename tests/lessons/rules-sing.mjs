// Section 26.7: V78 (Singing limits). A sung question is named by a task in a lesson ({ sing: { task, ...params }, n }) and made by the app from
// the learner's range, so what a lesson can get wrong is small and all of it is here: the task and its numbers inside the limits of 26.1.1
// (the app's own list, SING_PARAMS, read out of public/app/lessons/sing-task.js, so the validator and the phone cannot disagree), the warm-up
// first in every lesson that sings, a check without the line that shows its result after each try, and every target inside the range
// (S1): each task is made on 200 seeds over ranges from the narrowest allowed to a wide one, and no note may fall outside.
import { subjectRule, checkEach } from './rule.mjs';
import { unique } from './text.mjs';

const SAMPLE_SEEDS = 200;
const SAMPLE_RANGES = [['C3', 'G3'], ['A2', 'E4'], ['E2', 'A5'], ['C2', 'G2'], ['E6', 'B6']].map(([low, high]) => ({ low, high }));

const isSung = ref => typeof ref === 'object' && ref !== null && 'sing' in ref;
const askOf = task => ({ id: 'sing', kind: 'sing', ...task });

// every note a plan plays, shows or listens for, as numbers
const planNotes = (e, plan) => [...plan.hear, ...plan.bars, ...plan.windows.filter(w => w.note)].map(x => e.noteToMidi(x.note));

// The targets of a task over the sample ranges: [] when every one lies inside its range
function targetProblems(e, task) {
  if (e.SING_FREE.includes(task.task)) return [];
  const problems = new Set();
  for (const range of SAMPLE_RANGES) {
    const low = e.noteToMidi(range.low), high = e.noteToMidi(range.high);
    for (let seed = 1; seed <= SAMPLE_SEEDS; seed++) {
      try {
        const out = planNotes(e, e.singPlan(askOf(task), range, seed)).filter(m => m < low || m > high);
        if (out.length) problems.add(`${task.task} puts a note outside the range ${range.low} to ${range.high}`);
      } catch (error) { problems.add(`${task.task} cannot be made for the range ${range.low} to ${range.high} (${error.message})`); }
    }
  }
  return [...problems];
}

function lessonProblems(s, lv) {
  const e = s.engine, lesson = lv.lesson, drawn = e.checkIsDrawn(lesson.check);
  const setRefs = lv.sets.flatMap(set => e.flatRefs(set.items)), checkRefs = drawn ? [] : e.flatRefs(lesson.check.items);
  const sung = [...setRefs, ...checkRefs].filter(isSung);
  if (!sung.length) return [];
  const problems = [];
  unique(sung.map(r => JSON.stringify(r.sing))).map(x => JSON.parse(x)).forEach(task => {
    e.singTaskProblems(task).forEach(p => problems.push(p));
    if (!e.singTaskProblems(task).length) targetProblems(e, task).forEach(p => problems.push(p));
  });
  const first = lesson.flow[0];
  const warmups = first && first.set ? e.flatRefs(first.set.items) : [];
  if (!(warmups.length === 1 && isSung(warmups[0]) && warmups[0].sing.task === 'warmup' && warmups[0].n === 1)) problems.push('a lesson that sings opens with the warm-up: one { sing: { task: "warmup" }, n: 1 } as its first group');
  if ([...setRefs.slice(1), ...checkRefs].some(r => isSung(r) && r.sing.task === 'warmup')) problems.push('the warm-up belongs at the start of the lesson, once, and never in the check');
  if (lesson.check.support && lesson.check.support.line) problems.push('the check shows the line; a check of sung questions never does');
  if (checkRefs.some(isSung) && lesson.check.feedback !== 'after-each') problems.push('a check of sung questions shows its result after each try (feedback "after-each")');
  return problems;
}

export const V78 = subjectRule('V78', (s, check) => {
  for (const lv of s.lessons) checkEach(check, lv.label, lessonProblems(s, lv));
});

export const RULES_SING = [V78];
