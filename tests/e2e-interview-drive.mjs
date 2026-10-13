// Driving the questions answered from memory from the test side: the phone's speech synthesis stubbed, what a learner who knows the answer types, and a
// run of questions answered right or wrong. Nothing here asserts. The checks of tests/e2e-interview.mjs and tests/e2e-civics.mjs use it through the
// visible controls only (and read the queue's own state to know which question is in front of the learner).

// Days: reviews run Monday to Sunday, so the checks that move through days start on a Monday and name the days they move to.
export const MONDAY = '2026-11-02', WEDNESDAY = '2026-11-04', FRIDAY = '2026-11-06', NEXT_MONDAY = '2026-11-09', NEXT_WEDNESDAY = '2026-11-11';

/* ---------- the phone's speech synthesis, stubbed ---------- */
// Runs in the page before the app's own scripts. `voices` is a list of { name, lang, localService }, or null for a phone with no speech at all. Every
// utterance is recorded, so a check can say what was read, with which voice, and when.
export function speechStub(voices) {
  window.__speech = { spoken: [], cancelled: 0 };
  if (!voices) {   // a phone with no speech at all: not even the browser's own
    Object.defineProperty(window, 'speechSynthesis', { value: undefined, configurable: true });
    window.SpeechSynthesisUtterance = undefined;
    return;
  }
  window.SpeechSynthesisUtterance = class { constructor(text) { this.text = text; this.voice = null; this.lang = ''; this.rate = 1; } };
  const synth = { getVoices: () => voices, speak: u => window.__speech.spoken.push({ text: u.text, voice: u.voice && u.voice.name, rate: u.rate }),
    cancel() { window.__speech.cancelled += 1; }, addEventListener() {}, removeEventListener() {} };
  Object.defineProperty(window, 'speechSynthesis', { value: synth, configurable: true });
}
export const VOICES = {
  both: [{ name: 'Network voice', lang: 'en-US', localService: false }, { name: 'Phone voice', lang: 'en-US', localService: true }],
  networkOnly: [{ name: 'Network voice', lang: 'en-US', localService: false }],
  other: [{ name: 'Voix', lang: 'fr-FR', localService: true }]
};
export const stubbed = voices => ({ init: { script: speechStub, arg: voices } });
export const spoken = page => page.evaluate(() => window.__speech.spoken);
export const cancelled = page => page.evaluate(() => window.__speech.cancelled);

/* ---------- looking at the question in front of the learner ---------- */
export const look = page => page.evaluate(() => {
  const inst = Q.list[Q.at], ask = inst.item.asks.find(isRecallAsk);
  return { key: inst.key, redo: !!inst.redo, done: Q.cur.done, at: Q.at, total: Q.list.length, question: recallQuestionText(inst.item), wants: ask ? recallNeed(ask) : 0 };
});
// What a learner who knows it types: the first answers the list accepts, as printed with the bracketed words in (nothing a fault in how brackets, capitals
// or numbers are read could turn into a miss), two of them with "and" between when the question wants two.
export const known = page => page.evaluate(() => {
  const ask = Q.list[Q.at].item.asks.find(isRecallAsk);
  return ask.accept.slice(0, recallNeed(ask)).map(e => recallEntryText(e).replace(/[()]/g, '')).join(' and ');
});
export const WRONG = 'purple monkey dishwasher';

/* ---------- answering ---------- */
export async function type(page, words) {
  await page.locator('[data-recall]').fill(words);
  await page.locator('[data-recall-answer]').click();
}
export const next = page => page.locator('#qNext').click();
// Is there another question to answer? Bounded, so that a fault that makes every answer a miss (and every miss come back) ends a check instead of
// leaving it asking for ever: `i` is how many have been answered, and no run here is longer than QUESTIONS_MAX.
export const QUESTIONS_MAX = 60;
export const more = async (page, i) => i < QUESTIONS_MAX && await page.locator('#qNext').count() > 0;
// runs a group of questions or a check to its end, each question right, or wrong the first time its id is in `miss` (a miss comes back, and is then right);
// `every(now, wrong)` runs after each answer, with the feedback (or nothing, in a check) on the page. Returns what was asked.
export async function runRecall(page, { miss = [], every = null } = {}) {
  const asked = [];
  const missed = new Set();
  for (let i = 0; await more(page, i); i++) {
    const now = await look(page), wrong = miss.includes(now.key) && !now.redo && !missed.has(now.key);
    if (wrong) missed.add(now.key);
    await type(page, wrong ? WRONG : await known(page));
    if (every) await every(now, wrong);
    asked.push({ ...now, wrong });
    await next(page);
  }
  return asked;
}
// the text of the screen the learner is on
export const screenText = page => page.evaluate(() => document.querySelector('#screen').textContent.replace(/\s+/g, ' ').trim());
export const storedItems = (page, subject) => page.evaluate(id => itemsOf(id), subject);
export const storedNotes = (page, subject) => page.evaluate(id => Object.keys(notesOf(id)).length ? notesOf(id) : null, subject);
export const storedLog = page => page.evaluate(() => logOf());
export const triesOf = async (page, subject, key) => ((await storedItems(page, subject))[key] || { tries: [] }).tries;
