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
export const FIXTURE_DESIGNS = { fixture: FIXTURE_DESIGN, chorus: CHORUS_DESIGN };
// the files of the test subjects, in load order, relative to this folder
export const FIXTURE_FILES = ['subject.js', 'items-chance.js', 'gen-chance.js', 'items-timing.js', 'l1.lesson.js', 'l2.lesson.js',
  'chorus-subject.js', 'chorus-l1.lesson.js', 'chorus-l2.lesson.js'];
// the ids of the test subjects, in the order they load
export const FIXTURE_IDS = ['fixture', 'chorus'];
