// The design record of the fixture subject (what docs/subjects/<id>/design.md holds between its two lines of three dashes), for V69, V71 and V80.
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
// the files of the fixture subject, in load order, relative to this folder
export const FIXTURE_FILES = ['subject.js', 'items-chance.js', 'gen-chance.js', 'items-timing.js', 'l1.lesson.js', 'l2.lesson.js'];
