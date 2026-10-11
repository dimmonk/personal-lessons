// The design records of the test subjects (what docs/subjects/<id>/design.md holds between its two lines of three dashes), for V69, V71 and V80.
export const FIXTURE_DESIGN = {
  subject: 'fixture',
  kinds: ['judging'],
  endResult: 'Read a one-line weather forecast and decide, in a few seconds, whether to bring an umbrella.',
  realMoment: 'Standing at the door with a forecast on the phone.',
  test: 'Four new forecasts in mixed order: decide for each; at least 3 of 4 right and no wet forecast missed.',
  practice: 'Decide on forecasts one after another, with the deciding words marked at first and then not, and feedback after each answer.',
  approved: { endResult: '2026-10-10', practice: '2026-10-10', pilot: '2026-10-10' },
  parts: [{ id: '1', title: 'Read the chance' }, { id: '2', title: 'Read the timing' }],
  pilot: 'l1',
  tried: { pilot: { date: '2026-10-10', words: 'Clear on a phone. The marked words helped.' } }
};
export const CHORUS_DESIGN = {
  subject: 'chorus',
  kinds: ['body'],
  endResult: 'Sing back a short run of notes you have just heard.',
  realMoment: 'Singing along with a tune in the car.',
  test: 'Without the line: five notes heard, sung back; at least 4 of 5 on the note.',
  practice: 'Hear a note, sing it back, see the line against the note at first and then without the line.',
  approved: { endResult: '2026-10-10', practice: '2026-10-10', pilot: '2026-10-10' },
  parts: [{ id: '1', title: 'Single notes' }, { id: '2', title: 'Several notes' }],
  pilot: 'l1',
  tried: { pilot: { date: '2026-10-10', words: 'Clear on a phone.' } }
};
export const TILL_DESIGN = {
  subject: 'till',
  kinds: ['procedure'],
  endResult: 'Work out what a receipt comes to, first in your head and then exactly, and notice when a total is far off.',
  realMoment: 'Standing at the register with a cart and a receipt.',
  test: 'Three new sums: an estimate, then the exact total; at least 2 of 3 right.',
  practice: 'Type a rough answer first, then the exact one, with the working shown after each answer and the last steps left to you.',
  approved: { endResult: '2026-10-10', practice: '2026-10-10', pilot: '2026-10-10' },
  parts: [{ id: '1', title: 'Count the cart' }],
  pilot: 'l1',
  tried: { pilot: { date: '2026-10-10', words: 'Clear on a phone.' } }
};
export const LEDGER_DESIGN = {
  subject: 'ledger',
  kinds: ['procedure'],
  endResult: 'Read the papers of a household, say what each fund costs a year, and keep your own accounts and dates.',
  realMoment: 'At the table with a statement, a fee sheet and a pay stub.',
  test: 'Two new accounts: the yearly cost of the fund and what it costs in dollars; both right.',
  practice: 'Fill in the line for a sample account, then the same on your own accounts, with the change dated.',
  approved: { endResult: '2026-10-10', practice: '2026-10-10', pilot: '2026-10-10' },
  parts: [{ id: '1', title: 'Read the papers' }],
  pilot: 'l1',
  tried: { pilot: { date: '2026-10-10', words: 'Clear on a phone.' } }
};
export const FEED_DESIGN = {
  subject: 'feed',
  kinds: ['judging'],
  endResult: 'Read what arrives on your phone and find the line that gives the number.',
  realMoment: 'Reading a post, a story, an ad or a report on the phone.',
  test: 'Two new posts: tap the line that gives the number in each; both right.',
  practice: 'Tap the line that gives the number, with the deciding line marked at first and then not, and feedback after each answer.',
  approved: { endResult: '2026-10-11', practice: '2026-10-11', pilot: '2026-10-11' },
  parts: [{ id: '1', title: 'Find the number' }],
  pilot: 'l1',
  tried: { pilot: { date: '2026-10-11', words: 'Clear on a phone.' } }
};
export const LABELS_DESIGN = {
  subject: 'labels',
  kinds: ['judging'],
  endResult: 'Say whether a label pinned on a post fits the words under it.',
  realMoment: 'Reading a post with a label on it.',
  test: 'Two new posts, one from each side: say whether the label fits and tap the line that decides it; both right.',
  practice: 'Judge labelled posts, with what the label needs beside the words at first and then not, and feedback after each answer.',
  approved: { endResult: '2026-10-11', practice: '2026-10-11', pilot: '2026-10-11' },
  parts: [{ id: '1', title: 'Does the label fit' }],
  pilot: 'l1',
  tried: { pilot: { date: '2026-10-11', words: 'Clear on a phone.' } }
};
export const ACCOUNT_DESIGN = {
  subject: 'account',
  kinds: ['judging'],
  endResult: 'Say what someone did, from the account of it, and what to do next.',
  realMoment: 'A friend writes to you about someone, or you read your own note after an argument.',
  test: 'Four new accounts: tap the line that says what they did in each; at least 3 of 4 right.',
  practice: 'Tap the line that says what they did, with the checklist beside the account at first and then not, and feedback after each answer.',
  approved: { endResult: '2026-10-11', practice: '2026-10-11', pilot: '2026-10-11' },
  parts: [{ id: '1', title: 'What they did' }],
  pilot: 'l1',
  tried: { pilot: { date: '2026-10-11', words: 'Clear on a phone.' } }
};
export const PRESSURE_DESIGN = {
  subject: 'pressure',
  kinds: ['judging', 'habit'],
  endResult: 'Decide what to do with a message that wants something, even while the clock runs and the other side pushes.',
  realMoment: 'A text, a call or a banner arrives while you are busy.',
  test: 'Four new messages and calls: pick what you do with each; no scam acted on and at most one real message mishandled.',
  practice: 'Decide on messages in the form they arrive in, with a clock, a call that pushes back, and feedback after each answer.',
  approved: { endResult: '2026-10-11', practice: '2026-10-11', pilot: '2026-10-11' },
  parts: [{ id: '1', title: 'Act, check or leave' }],
  pilot: 'l1',
  tried: { pilot: { date: '2026-10-11', words: 'Clear on a phone.' } }
};
export const FIXTURE_DESIGNS = { fixture: FIXTURE_DESIGN, chorus: CHORUS_DESIGN, till: TILL_DESIGN, ledger: LEDGER_DESIGN, feed: FEED_DESIGN, labels: LABELS_DESIGN, account: ACCOUNT_DESIGN, pressure: PRESSURE_DESIGN };
// the files of the test subjects, in load order, relative to this folder
export const FIXTURE_FILES = ['subject.js', 'items-chance.js', 'gen-chance.js', 'items-timing.js', 'l1.lesson.js', 'l2.lesson.js',
  'chorus-subject.js', 'chorus-l1.lesson.js', 'chorus-l2.lesson.js', 'till-subject.js', 'till-items.js', 'till-l1.lesson.js',
  'ledger-subject.js', 'ledger-items.js', 'ledger-l1.lesson.js', 'feed-subject.js', 'feed-items.js', 'feed-l1.lesson.js',
  'labels-subject.js', 'labels-items.js', 'labels-l1.lesson.js', 'account-subject.js', 'account-items.js', 'account-l1.lesson.js',
  'pressure-subject.js', 'pressure-items.js', 'pressure-l0.lesson.js', 'pressure-l1.lesson.js'];
// the ids of the test subjects, in the order they load
export const FIXTURE_IDS = ['fixture', 'chorus', 'till', 'ledger', 'feed', 'labels', 'account', 'pressure'];
