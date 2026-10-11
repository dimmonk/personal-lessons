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
  youTyped: text => `You typed ${text}.`,
  needLabel: 'What you would need to see',
  workingLabel: 'The working',
  consequence: 'What happens next',
  // a typed number (26.1): the boxes, the calculator, the estimate
  numberHint: 'Type a number. You can use the calculator.',
  numberEstimateHint: 'A rough answer from your head. No calculator for this one.',
  numberBox: 'Your answer',
  numberBoxEstimate: 'Your estimate',
  numberBoxN: n => `Answer ${n}`,
  calculator: 'Calculator',
  calcUse: 'Put it in the box',
  calcName: { C: 'Clear', B: 'Delete the last digit', '/': 'Divide', '*': 'Multiply', '-': 'Subtract', '+': 'Add', '=': 'Equals', '.': 'Decimal point' },
  estimateDisagree: (guess, typed) => `Your answer (${typed}) and your estimate (${guess}) disagree. Look again, then tap Answer.`,
  yourEstimate: text => `Your estimate was ${text}.`,
  estimateLine: (said, exact, off) => `You said ${said}. The exact answer is ${exact}${off.dir === 'same' ? ', so you were right on it' : `, so you were ${off.pct}% ${off.dir}`}.`,
  // the end check
  checkHeading: 'The check',
  checkIntro: n => `${cap(numWord(n))} new question${n === 1 ? '' : 's'}, with no help. To pass:`,
  checkIntroSung: n => `${cap(numWord(n))} new ${n === 1 ? 'try' : 'tries'}, with no line. To pass:`,
  checkNoFeedback: 'You will not see any answer until the end.',
  checkStart: 'Start the check',
  checkPassed: (ok, n, sung) => `${ok} of ${n}${sung ? ' on the note' : ''}: passed`,
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
  stateNotYet: (ok, n, day) => `Check not yet, ${ok} of ${n}, ${day}`,
  yourRange: 'Your range',
  rangeIs: (low, high) => `${low} to ${high}`,
  // sung questions (26.1.1): the app's words around a try. A learner never sees a music word here: no cents, hertz, half-step, octave or pitch
  singToGoOn: 'Sing above to go on',
  singLabel: { warmup: 'Warm-up', range: 'Find your range', match: 'Match the note', hold: 'Hold the note', slide: 'Slide to the note',
    interval: 'Sing both notes', melody: 'Sing the tune', light: 'Sing it lightly' },
  singTry: (label, n, total) => total > 1 ? `${label} · ${n} of ${total}` : label,
  singPrompt: {
    warmup: () => 'Warm up your voice. Hum a slow slide up and down, or hum through a straw. Keep it easy and quiet. There is nothing to match.',
    range: () => 'Find your range. You will hum a slide up, then a slide down. Keep it easy: stop at the notes that still feel comfortable.',
    match: () => 'Listen to the note, then sing it back on “oo”.',
    hold: task => `Listen to the note, then sing it back on “oo” and keep it steady for ${task.seconds} seconds.`,
    slide: () => 'Listen to the two notes. Then slide smoothly from the first to the second and stay on the second.',
    interval: () => 'Listen to the two notes, then sing them back one after the other on “oo”.',
    melody: task => `Listen to the ${numWord(task.notes)} notes, then sing them back in order on “oo”. Keep the last one steady.`,
    light: () => 'Listen to the note, then sing it back lightly, no louder than you talk.'
  },
  singReason: {
    warmup: 'A gentle hum warms the voice up and makes the notes after it easier. It is not a test.',
    range: 'Every note you practice sits inside the range you just sang, so none is too high or too low.',
    match: 'Hear the note in your head before you sing it. Your voice finds it faster when you know the sound you are aiming for.',
    hold: 'Keep your ear on the note while you hold it. When the sound drifts, bring it back to the note you heard.',
    slide: 'Aim for the second note and let your voice travel there smoothly. The landing is what counts.',
    interval: 'Hear the gap between the two notes in your head first. The second note is where beginners most often fall short.',
    melody: 'Hear the whole tune in your head first, then sing it note by note. The last note is the one to keep steady.',
    light: 'A top note that is easy sounds light. If it comes out loud, ease off the volume and keep the note.'
  },
  singScaleLoud: 'First, listen to the note and sing it loudly. That tells the app how loud is loud for you.',
  singScaleTalk: 'Now listen again and sing the same note at the loudness you talk at.',
  singGo: 'Hear the note',
  singGoMany: 'Hear the notes',
  singStart: 'Start',
  singAgain: 'Try again',
  singSkip: 'Skip the warm-up',
  singStarting: 'Starting the microphone...',
  singListen: 'Listen...',
  singNow: 'Sing now',
  singHum: 'Hum now. The line follows your voice.',
  singUp: 'Slide up to the highest note that is easy, and hold it.',
  singDown: 'Now slide down to the lowest note that is easy, and hold it.',
  singNothing: 'I did not hear you. Check that the microphone is on, then try again.',
  singNarrow: 'I could not find two different easy notes. Slide further each way and hold each end for a moment, then try again.',
  micDenied: 'The microphone is turned off for this page, so your singing cannot be checked. Allow it in your browser settings, then try again.',
  micMissing: 'No microphone is available here, so your singing cannot be checked.',
  micPrivate: 'The microphone listens only while you sing. The sound is checked on this device and thrown away: nothing is recorded or sent anywhere.',
  micIsOn: 'The microphone is on until you finish this group of questions or leave.',
  micTurnOff: 'Turn the microphone off',
  stripLabel: 'Your voice as a line against the note',
  stripHidden: 'No line this time. Listen, sing, and see how you did afterwards.',
  singWord: { on: 'On the note', shadeUnder: 'A shade under', shadeOver: 'A shade over', wellUnder: 'Well under', wellOver: 'Well over', missed: 'Not heard' },
  singVoice: { on: 'Your voice sat on the note.', shadeUnder: 'Your voice sat a shade under the note.', shadeOver: 'Your voice sat a shade over the note.',
    wellUnder: 'Your voice sat well under the note.', wellOver: 'Your voice sat well over the note.', missed: 'That note was not heard.' },
  singNoteN: n => `Note ${n}`,
  singHeld: (seconds, need) => seconds >= need ? `Steady for ${need} seconds` : `Steady for ${seconds} of ${need} seconds`,
  singHeldLine: (seconds, need) => `You stayed on the note for ${seconds} seconds. This one needs ${need}.`,
  singLoud: 'Louder than you talk',
  singLoudLine: 'That was louder than your talking voice. Sing it again with less force and keep the note.',
  singRangeSaved: 'Your range is saved',
  singWarmupDone: 'Warm-up done'
};
const cap = s => s.charAt(0).toUpperCase() + s.slice(1);
const WORDS = ['no','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve'];
const numWord = n => n < WORDS.length ? WORDS[n] : String(n);
