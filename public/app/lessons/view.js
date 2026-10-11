/* ===================== LESSONS: SMALL HELPERS AND THE APP'S OWN WORDING ===================== */
// Lookups over a subject's registered data, text helpers every screen uses, and SAY: the sentences the app owns, the same in
// every subject, so no lesson types them (lesson standard 26.5). The engine's own names (strand, facet, ask, item, set,
// generator, support) are never shown to the learner (tests/plain-words.mjs).

const paras = text => text == null ? [] : Array.isArray(text) ? text : [text];
const joinWords = (list, last = 'and') => list.length < 2 ? list.join('') : list.slice(0, -1).join(', ') + ` ${last} ` + list[list.length - 1];
const byId = list => Object.fromEntries(list.map(x => [x.id, x]));
const lowerFirst = s => s.charAt(0).toLowerCase() + s.slice(1);
function lessonFail(message){ throw new Error('Lesson data: ' + message); }

// A screen is repainted whole, so focus would fall to <body>. This puts it on the region the learner should hear next.
function focusOn(selector){
  const el = document.querySelector(selector);
  if(!el) return;
  el.setAttribute('tabindex', '-1');
  el.focus({ preventScroll: true });
}
const focusScreenHead = () => focusOn('.eyebrow-row h1, .done-screen h2, #host .lesson, .readhead');

// Small HTML helpers shared by every lesson screen.
const lessonLabel = text => `<span class="m lab">${esc(text)}</span>`;
const textHtml = text => paras(text).map(p => `<p>${esc(p)}</p>`).join('');

const SAY = {
  stakes: 'Nothing here is graded. A miss only decides what comes back.',
  draft: 'Draft: not tried yet',
  notBuilt: 'Not built yet',
  notStarted: 'Not started',
  next: 'Next',
  goOn: 'Go on',
  finish: 'Finish',
  stepOf: (n, total) => `Step ${n} of ${total}`,
  // the why and the teaching screens
  whyHeading: 'Why this',
  showHeading: 'Before you try it',
  workedHeading: 'A worked example',
  workedCommit: 'Before you read on, which do you think it is?',
  workedShow: 'Show the working',
  workedNext: 'Next step',
  workedAnswer: 'The answer',
  compare: 'Compare',
  wrongIdea: 'A wrong idea',
  // a group of questions
  questionOf: (n, total) => `Question ${n} of ${total}`,
  oneMoreTime: 'Asked again',
  breakTitle: 'You can stop here',
  breakLine: 'Your place is kept. Come back to this lesson any time.',
  groupResult: (ok, n) => `${ok} of ${n} right the first time`,
  helpMarked: 'The words that decide it are marked.',
  helpSteps: 'The working is shown up to the last steps. The rest is yours.',
  // an answer
  answerToGoOn: 'Answer above to go on',
  chooseOne: 'Choose one.',
  chooseMany: 'Choose every one that fits, then tap Answer.',
  answerBtn: 'Answer',
  markRight: 'Right',
  markNo: 'Not this one',
  theAnswer: 'The answer',
  whyLabel: 'Why',
  youChose: 'You chose',
  slipLine: text => `That is a common slip: ${lowerFirst(text)}.`,
  needLabel: 'What you would need to see',
  workingLabel: 'The working',
  consequence: 'What happens next',
  // the end check
  checkHeading: 'The check',
  checkIntro: n => `${cap(numWord(n))} new question${n === 1 ? '' : 's'}, with no help. To pass:`,
  checkNoFeedback: 'You will not see any answer until the end.',
  checkStart: 'Start the check',
  checkPassed: (ok, n) => `${ok} of ${n}: passed`,
  checkNotYet: (ok, n) => `${ok} of ${n}: not yet`,
  ruleMet: 'met',
  ruleNotMet: 'not met',
  checkEveryAnswer: 'Every answer, misses first',
  nextLesson: 'On to the next lesson',
  toSubject: 'Back to the subject',
  again: 'Try the check again',
  // the subject screen
  endResultLabel: 'Where this ends up',
  lessonsHeading: 'Lessons',
  resultsHeading: 'Results',
  practiceAgain: 'Practice again',
  resume: 'Resume',
  start: 'Start',
  rev: n => `Rev ${n}`,
  statePassed: (ok, n, day) => `Check passed, ${ok} of ${n}, ${day}`,
  stateNotYet: (ok, n, day) => `Check not yet, ${ok} of ${n}, ${day}`
};
const cap = s => s.charAt(0).toUpperCase() + s.slice(1);
const WORDS = ['no','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve'];
const numWord = n => n < WORDS.length ? WORDS[n] : String(n);
