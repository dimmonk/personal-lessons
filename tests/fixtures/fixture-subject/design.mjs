// The design records of the test subjects (what docs/subjects/<id>/design.md holds between its two lines of three dashes), in the shape
// the build-subject skill asks for and V69, V71 and V80 read; with the stand-in reviews and the research note the records cite.
import { fingerprint } from '../../lessons/fingerprint.mjs';

// the one research note of the test subjects, and its findings
export const FIXTURE_RESEARCH = { 'umbrella-days': ['U1', 'U2', 'U3'] };
// the stand-in reviews of the test subjects: { [subjectId]: { 'reviews/<lesson>.md': verdict } }
export const FIXTURE_REVIEWS = { fixture: { 'reviews/l2.md': 'passes' } };

const approved = (text, date, words) => ({ date, words, fp: fingerprint(text) });
const owner = (date, words = 'Clear on a phone.') => ({ by: 'owner', date, words });
const PRINCIPLES = [
  { id: 'U1', note: 'umbrella-days', decides: true, read: 'full' },
  { id: 'U2', note: 'umbrella-days', decides: false, read: 'abstract' }
];

// A record from the parts that differ between the test subjects. `parts` is [{ id, title, check }]; `lessons` is { id: part }; every lesson's
// block does the practice and gets its feedback; `tried` is the owner's try of each lesson that was tried.
function record(subject, kinds, text, parts, lessons, pilot, tried, date = '2026-10-10') {
  const checks = Object.fromEntries(parts.map(p => [p.id, p.check]));
  return {
    subject, asked: text.asked || [{ id: 'the-thing', words: 'teach me to do the thing', when: '2026-10-09', where: 'the brief', owner: null, kept: parts[0].id, dropped: false }],
    kinds, principles: PRINCIPLES,
    goal: text.goal, topics: parts.map(p => p.title.toLowerCase()), endResult: text.endResult, realMoment: text.realMoment, test: text.test, out: text.out || 'Everything the end result does not name.',
    practice: text.practice, feedback: text.feedback || 'From the app, after each answer: right or wrong and the reason.', delivery: text.delivery || [],
    readingShare: text.readingShare, form: text.form || 'The real moment\'s own form: the input as it arrives, the answer the learner would give.',
    parts: parts.map(p => ({ ...p, topics: [p.title.toLowerCase()] })), lessons: Object.fromEntries(Object.entries(lessons).map(([id, part]) => [id, { part, does: text.does || text.practice, feedback: text.feedback || 'Right or wrong and the reason, after each answer.', check: checks[part], why: ['U1'] }])),
    pilot, approved: { goal: approved({ goal: text.goal, topics: parts.map(p => p.title.toLowerCase()) }, date, 'approve all, keep going'), practice: approved(text.practice, date, 'approve all, keep going') },
    tried, opened: ['docs/research/umbrella-days.md']
  };
}

export const FIXTURE_DESIGN = record('fixture', ['judging'], {
  goal: 'After this you can look at a one-line forecast on your phone and decide in a few seconds whether to take an umbrella, without being caught out by a chance written as a percent or a time of day that does not touch your walk. It leaves out reading radar maps and the weather of other days.',
  endResult: 'Read a one-line weather forecast and decide, in a few seconds, whether to bring an umbrella.',
  realMoment: 'Standing at the door with a forecast on the phone.',
  test: 'Four new forecasts in mixed order: decide for each; at least 3 of 4 right and no wet forecast missed.',
  practice: 'Decide on forecasts one after another, with the deciding words marked at first and then not, and feedback after each answer.',
  readingShare: 0.4
}, [
  { id: '1', title: 'Read the chance', check: 'Four new forecasts: decide for each; at least 3 of 4 right and no wet forecast missed.' },
  { id: '2', title: 'Read the timing', check: 'Three new forecasts with a time of day: decide for each; at least 2 of 3 right.' }
], { l1: '1', l2: '2' }, 'l1', {
  l1: owner('2026-10-10', 'Clear on a phone. The marked words helped.'),
  l2: { by: 'stand-in', date: '2026-10-11', review: 'reviews/l2.md', waived: 'keep going, do not wait on my read' }
});

export const CHORUS_DESIGN = record('chorus', ['body'], {
  goal: 'After this you can hear a short run of notes and sing it back on pitch, in the car or along with a record, without a line on a screen to help. It leaves out reading music and songs with words.',
  endResult: 'Sing back a short run of notes you have just heard.',
  realMoment: 'Singing along with a tune in the car.',
  test: 'Without the line: five notes heard, sung back; at least 4 of 5 on the note.',
  practice: 'Hear a note, sing it back, see the line against the note at first and then without the line.',
  feedback: 'The app listens and says on the note, a shade under or over, right after the try.',
  delivery: ['play a note and hear the voice', 'draw the pitch line'],
  form: 'A sung try, scored on pitch after the note is heard; never a question about singing.',
  readingShare: 0.3
}, [
  { id: '1', title: 'Single notes', check: 'Without the line: four notes heard and sung back; at least 3 of 4 on the note.' },
  { id: '2', title: 'Several notes', check: 'Without the line: five notes heard, sung back; at least 4 of 5 on the note.' }
], { l1: '1', l2: '2' }, 'l1', { l1: owner('2026-10-10'), l2: owner('2026-10-10') });

export const TILL_DESIGN = record('till', ['procedure'], {
  goal: 'After this you can stand at a register with a cart and know roughly what it comes to before the total appears, then work it out exactly and notice when a printed total is far off. It leaves out tax rules and budgeting.',
  endResult: 'Work out what a receipt comes to, first in your head and then exactly, and notice when a total is far off.',
  realMoment: 'Standing at the register with a cart and a receipt.',
  test: 'Three new sums: an estimate, then the exact total; at least 2 of 3 right.',
  practice: 'Type a rough answer first, then the exact one, with the working shown after each answer and the last steps left to you.',
  delivery: ['a typed number with a tolerance', 'an estimate box before the exact answer', 'a calculator'],
  form: 'A typed number: the estimate first, then the exact total, on fresh prices each time.',
  readingShare: 0.6
}, [{ id: '1', title: 'Count the cart', check: 'Three new sums: an estimate, then the exact total; at least 2 of 3 right.' }], { l1: '1' }, 'l1', { l1: owner('2026-10-10') });

export const LEDGER_DESIGN = record('ledger', ['procedure'], {
  goal: 'After this you can sit at the table with a statement, a fee sheet and a pay stub, say what each fund costs you a year in dollars, and keep your own accounts and the dates of the changes you make. It leaves out choosing investments.',
  endResult: 'Read the papers of a household, say what each fund costs a year, and keep your own accounts and dates.',
  realMoment: 'At the table with a statement, a fee sheet and a pay stub.',
  test: 'Two new accounts: the yearly cost of the fund and what it costs in dollars; both right.',
  practice: 'Fill in the line for a sample account, then the same on your own accounts, with the change dated.',
  delivery: ['sample documents drawn from data', 'a private form that is saved and never scored', 'a calendar file for a dated change'],
  form: 'A form filled from a document, then the same form on the learner\'s own papers.',
  readingShare: 0.9
}, [{ id: '1', title: 'Read the papers', check: 'Two new accounts: the yearly cost of the fund and what it costs in dollars; both right.' }], { l1: '1' }, 'l1', { l1: owner('2026-10-10') });

export const FEED_DESIGN = record('feed', ['judging'], {
  goal: 'After this you can read a post, a story, an ad or a report on your phone and put your finger on the one line that gives the number the claim rests on, or see that none does. It leaves out judging whether the number is sound.',
  endResult: 'Read what arrives on your phone and find the line that gives the number.',
  realMoment: 'Reading a post, a story, an ad or a report on the phone.',
  test: 'Two new posts: tap the line that gives the number in each; both right.',
  practice: 'Tap the line that gives the number, with the deciding line marked at first and then not, and feedback after each answer.',
  delivery: ['an article drawn as it arrives', 'a tap on a line, with "Not given"'],
  form: 'A tap on the line of a real-looking article, or "Not given".',
  readingShare: 0.9
}, [{ id: '1', title: 'Find the number', check: 'Two new posts: tap the line that gives the number in each; both right.' }], { l1: '1' }, 'l1', { l1: owner('2026-10-11') }, '2026-10-11');

export const LABELS_DESIGN = record('labels', ['judging'], {
  goal: 'After this you can read a post with a label pinned on it and say whether the words under it earn the label, and tap the line that decides it, whichever side threw the label. It leaves out the history of the labels.',
  endResult: 'Say whether a label pinned on a post fits the words under it.',
  realMoment: 'Reading a post with a label on it.',
  test: 'Two new posts, one from each side: say whether the label fits and tap the line that decides it; both right.',
  practice: 'Judge labelled posts, with what the label needs beside the words at first and then not, and feedback after each answer.',
  delivery: ['a post with a label and the side it came from', 'the panel of what a label needs, which fades'],
  form: 'A verdict on a labelled post and a tap on its deciding line.',
  readingShare: 0.9
}, [{ id: '1', title: 'Does the label fit', check: 'Two new posts, one from each side: say whether the label fits and tap the line that decides it; both right.' }], { l1: '1' }, 'l1', { l1: owner('2026-10-11') }, '2026-10-11');

export const ACCOUNT_DESIGN = record('account', ['judging'], {
  goal: 'After this, when a friend writes to you about someone, or you read your own note after an argument, you can say what the person actually did, apart from the word that was reached for, and what to do next. It leaves out diagnosing anyone.',
  endResult: 'Say what someone did, from the account of it, and what to do next.',
  realMoment: 'A friend writes to you about someone, or you read your own note after an argument.',
  test: 'Four new accounts: tap the line that says what they did in each; at least 3 of 4 right.',
  practice: 'Tap the line that says what they did, with the checklist beside the account at first and then not, and feedback after each answer.',
  delivery: ['a message as a friend sends it, a thread, a note', 'a written line that is kept and never scored'],
  form: 'A tap on the line that is the act, in an account as it arrives, then a next step chosen.',
  readingShare: 0.9
}, [{ id: '1', title: 'What they did', check: 'Four new accounts: tap the line that says what they did in each; at least 3 of 4 right.' }], { l1: '1' }, 'l1', { l1: owner('2026-10-11') }, '2026-10-11');

export const PRESSURE_DESIGN = record('pressure', ['judging', 'habit'], {
  goal: 'After this, when a text, a call or a banner arrives while you are busy and wants something from you, you decide what to do with it in the seconds you have, even while the other side pushes, without falling for a scam or mishandling a real message. It leaves out recovering money already sent.',
  endResult: 'Decide what to do with a message that wants something, even while the clock runs and the other side pushes.',
  realMoment: 'A text, a call or a banner arrives while you are busy.',
  test: 'Four new messages and calls: pick what you do with each; no scam acted on and at most one real message mishandled.',
  practice: 'Decide on messages in the form they arrive in, with a clock, a call that pushes back, and feedback after each answer.',
  delivery: ['messages in six forms', 'a clock on a set', 'a call whose turns follow the replies', 'a busy task with banners over it'],
  form: 'An action chosen on a message as it arrives, on a clock; a reply chosen on a call that pushes.',
  readingShare: 0.9
}, [{ id: '1', title: 'Act, check or leave', check: 'Four new messages and calls: pick what you do with each; no scam acted on and at most one real message mishandled.' }], { l1: '1' }, 'l1', { l1: owner('2026-10-11') }, '2026-10-11');

export const INTERVIEW_DESIGN = record('interview', ['facts'], {
  goal: 'After this you can answer a list of short questions from memory when an officer asks them out loud, typed or said, including the ones whose answers depend on where you live, and you keep those answers up to date. It leaves out the questions the list does not hold.',
  endResult: 'Answer a list of short questions from memory, out loud and typed, and keep the answers that depend on you.',
  realMoment: 'An officer asks the questions out loud.',
  test: 'A mock interview of five questions drawn at random, read aloud; at least 4 of 5 right, taken a week apart.',
  practice: 'Hear or read each question and type the answer from memory, with the accepted answers shown after.',
  delivery: ['a question read aloud by the phone', 'a typed answer matched against accepted answers', 'the learner\'s own answers kept privately'],
  form: 'A question heard, an answer typed from memory, checked against the list\'s accepted answers.',
  readingShare: 0.9
}, [
  { id: '1', title: 'Short answers', check: 'Every question of the part asked once more from memory; at least 4 of 5 right.' },
  { id: '2', title: 'Your own answers', check: 'The learner\'s own answers asked back; all right.' },
  { id: '3', title: 'The mock', check: 'A mock interview of five questions drawn at random, read aloud; at least 4 of 5 right, taken a week apart.' },
  { id: '4', title: 'A news story', check: 'Two new stories: who decided and whether it was theirs to decide; both right.' }
], { l1: '1', l2: '2', l3: '3', l4: '4' }, 'l1', { l1: owner('2026-10-11'), l2: owner('2026-10-11'), l3: owner('2026-10-11'), l4: owner('2026-10-11') }, '2026-10-11');

export const FIXTURE_DESIGNS = { fixture: FIXTURE_DESIGN, chorus: CHORUS_DESIGN, till: TILL_DESIGN, ledger: LEDGER_DESIGN, feed: FEED_DESIGN, labels: LABELS_DESIGN, account: ACCOUNT_DESIGN, pressure: PRESSURE_DESIGN, interview: INTERVIEW_DESIGN };
// the files of the test subjects, in load order, relative to this folder
export const FIXTURE_FILES = ['subject.js', 'items-chance.js', 'gen-chance.js', 'items-timing.js', 'l1.lesson.js', 'l2.lesson.js',
  'chorus-subject.js', 'chorus-l1.lesson.js', 'chorus-l2.lesson.js', 'till-subject.js', 'till-items.js', 'till-l1.lesson.js',
  'ledger-subject.js', 'ledger-items.js', 'ledger-l1.lesson.js', 'feed-subject.js', 'feed-items.js', 'feed-l1.lesson.js',
  'labels-subject.js', 'labels-items.js', 'labels-l1.lesson.js', 'account-subject.js', 'account-items.js', 'account-l1.lesson.js',
  'pressure-subject.js', 'pressure-items.js', 'pressure-l0.lesson.js', 'pressure-l1.lesson.js',
  'interview-subject.js', 'interview-items.js', 'interview-l1.lesson.js', 'interview-l2.lesson.js', 'interview-l3.lesson.js', 'interview-l4.lesson.js'];
// the ids of the test subjects, in the order they load
export const FIXTURE_IDS = ['fixture', 'chorus', 'till', 'ledger', 'feed', 'labels', 'account', 'pressure', 'interview'];
