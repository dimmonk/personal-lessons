// The seeded faults, one or more per rule, as pure functions from the test subject's data to faulty data (nothing is written to disk).
// Each control names the rule that must go red and no other (also: rules that cannot be kept green by this fault, with the reason).
// keepLock: leave the lock as it was, so the fault shows up as a difference from it. input: change the rest of the input (the
// last commit's lock, the held list, the design record, the files on disk). green: the fault is one the rule must let through.
const F = 'fixture';
const item = (id, ...rest) => ['subjects', F, 'items', id, ...rest];
const gen = (id, ...rest) => ['subjects', F, 'gens', id, ...rest];
const lesson = (id, ...rest) => ['subjects', F, 'lessons', id, ...rest];
const meta = (...rest) => ['subjects', F, 'meta', ...rest];
// the sung test subject
const sung = (id, ...rest) => ['subjects', 'chorus', 'lessons', id, ...rest];

// V69: the last commit's lock with one lesson's content different, and a design record with the given approvals and words
const changed = (lock, key) => ({ ...lock, lessons: { ...lock.lessons, [key]: { ...lock.lessons[key], fp: 'sha256:' + '1'.repeat(64) } } });
const asDesign = (input, lessonKey, patch) => {
  const { changes, ...rest } = patch;
  return { ...input, designs: { ...input.designs, [F]: { ...input.designs[F], ...rest } }, committedLock: changed(input.lock, lessonKey) };
};
const TRIED = { date: '2026-10-10', words: 'Clear on a phone.' };
const padding = Array.from({ length: 200 }, () => 'The chance is a number.').join(' ');

export const CONTROLS = [
  { rule: 'V4', name: 'a question\'s reason shows its id', data: (d, h) => h.setIn(d, item('c-1', 'reason'), 'The forecast says 80% chance of rain. See c-1.') },
  { rule: 'V36', name: 'a reason opens with praise', data: (d, h) => h.setIn(d, item('c-2', 'reason'), 'Correct. A 20% chance means rain on about two days in ten like this one.') },
  { rule: 'V45', name: 'a lesson at revision 2 with one history entry', data: (d, h) => h.setIn(d, lesson('l2', 'rev'), 2) },
  { rule: 'V45', name: 'a live lesson with no word from the owner', data: (d, h) => h.removeIn(d, lesson('l1', 'tried')) },
  { rule: 'V46', name: 'content that differs from the lock', keepLock: true,
    data: (d, h) => h.setIn(d, lesson('l2', 'why'), 'A forecast also says when. Rain at night does not need an umbrella on your walk at noon.') },
  { rule: 'V46', name: 'a deployed lesson changed with the same revision', keepLock: true,
    input: input => ({ ...input, committedLock: { ...input.lock, lessons: { ...input.lock.lessons, 'fixture/l1': { ...input.lock.lessons['fixture/l1'], fp: 'sha256:' + '2'.repeat(64), deployed: '2026-10-10' } } } }) },
  { rule: 'V47', name: 'a file over the line limit', input: input => ({ ...input, site: { ...input.site, files: input.site.files.map(f => f.path === 'app/state.js' ? { ...f, lines: 801 } : f) } }) },
  { rule: 'V50', name: 'a reason uses the engine\'s own word "item"', data: (d, h) => h.setIn(d, item('c-4', 'reason'), 'This item is under half, so rain is possible, not likely.') },
  { rule: 'V56', name: 'two lessons with one title', data: (d, h) => h.setIn(d, lesson('l2', 'title'), 'Read the chance') },
  { rule: 'V58', name: 'a held finding that no longer fires', input: input => ({ ...input, held: { held: ['V50 fixture: a finding that is not there'] }, committedHeld: { held: ['V50 fixture: a finding that is not there'] } }) },
  { rule: 'V58', name: 'a finding added to the held list since the last commit',
    data: (d, h) => h.setIn(d, item('c-4', 'reason'), 'This item is under half, so rain is possible, not likely.'),
    input: input => ({ ...input, held: { held: ['V50 fixture: item c-4.reason: a word to avoid, "item", in "This item is under half, so rain is possible, not "'] }, committedHeld: { held: [] } }) },
  { rule: 'V60', name: 'a British spelling in a reason', data: (d, h) => h.setIn(d, item('c-5', 'reason'), 'Ninety percent is nearly certain, and the colour of the sky agrees.') },
  { rule: 'V62', name: 'an abstract word in a reason', data: (d, h) => h.setIn(d, item('c-6', 'reason'), 'Ten percent is a small chance, so utilize the free hand.') },
  { rule: 'V69', name: 'no design record', input: input => ({ ...input, designs: {} }) },
  { rule: 'V69', name: 'a lesson changed before the end result was approved',
    input: input => asDesign(input, 'fixture/l1', { approved: { endResult: null, practice: '2026-10-10', pilot: '2026-10-10' } }) },
  { rule: 'V69', name: 'a lesson past the pilot changed before the pilot was tried',
    input: input => asDesign(input, 'fixture/l2', { tried: { pilot: null } }) },
  { rule: 'V69', name: 'a design record whose pilot try is not a date and words', input: input => asDesign(input, 'fixture/l1', { tried: { pilot: 'yes' } }) },
  { rule: 'V69', name: 'the pilot changed before it was tried (allowed)', green: true,
    input: input => asDesign(input, 'fixture/l1', { tried: { pilot: null } }) },
  { rule: 'V70', name: 'an ask of an unknown kind', data: (d, h) => h.setIn(d, item('c-2', 'asks', 0, 'kind'), 'telepathy') },
  { rule: 'V71', name: 'a part with no lesson in a subject that says it is complete', data: (d, h) => h.removeIn(d, lesson('l2')) },
  { rule: 'V72', name: 'a check question that is also in a group', data: (d, h) => h.setIn(d, lesson('l1', 'check', 'items', 0), 'c-1') },
  { rule: 'V73', name: 'a why padded far past the reading share', data: (d, h) => h.setIn(d, lesson('l2', 'why'), padding) },
  { rule: 'V74', name: 'a wrong option with no line of its own and no slip',
    data: (d, h) => h.setIn(d, item('c-3', 'asks', 0, 'then'), { bring: 'You carry it and stay dry if the rain comes.' }) },
  { rule: 'V75', name: 'a slip that gives the answer', data: (d, h) => h.setIn(d, gen('g-chance', 'asks', 0, 'options', 1, 'value'), 'days') },
  { rule: 'V76', name: 'a group with no dry forecast', data: (d, h) => h.setIn(d, lesson('l1', 'flow', 2, 'set', 'items'), ['c-1', 'c-3']) },
  { rule: 'V77', name: 'a topic one question short of its returns', data: (d, h) => h.removeIn(h.removeIn(d, item('b-3')), item('b-4')) },
  { rule: 'V70', name: 'a sung task that is not one', data: (d, h) => h.setIn(d, sung('l1', 'flow', 4, 'set', 'items', 0, 'sing', 'task'), 'whistle') },
  { rule: 'V78', name: 'a hold of 9 seconds', data: (d, h) => h.setIn(d, sung('l1', 'flow', 4, 'set', 'items', 0, 'sing', 'seconds'), 9) },
  { rule: 'V78', name: 'an interval too wide for the narrowest range', data: (d, h) => h.setIn(d, sung('l2', 'flow', 2, 'set', 'items', 0, 'sing'), { task: 'interval', minSemitones: 11, maxSemitones: 12 }) },
  { rule: 'V78', name: 'a lesson that sings with no warm-up first', data: (d, h) => h.removeIn(d, sung('l1', 'flow', 0)) },
  { rule: 'V78', name: 'a warm-up in the check', data: (d, h) => h.setIn(d, sung('l1', 'check', 'items'), [{ sing: { task: 'match' }, n: 2 }, { sing: { task: 'warmup' }, n: 1 }]) },
  { rule: 'V78', also: ['V79'], name: 'a check that shows the line', data: (d, h) => h.setIn(d, sung('l1', 'check', 'support'), { line: true }) },
  { rule: 'V78', name: 'a sung check that shows its result only at the end', data: (d, h) => h.setIn(d, sung('l1', 'check', 'feedback'), 'at-end') },
  { rule: 'V79', name: 'a lesson whose last group still has help', data: (d, h) => h.setIn(d, lesson('l1', 'flow', 3, 'set', 'support'), { shown: true }) },
  { rule: 'V80', name: 'an end result with one word changed',
    data: (d, h) => h.setIn(d, meta('endResult'), 'Read a one-line weather forecast and decide, in a few seconds, whether to bring a raincoat.') },
  { rule: 'V81', name: 'a private form with a field "Account number"',
    data: (d, h) => h.setIn(d, meta('own'), { sheet: { into: 'sheet', fields: [{ id: 'f1', label: 'Account number', type: 'number' }] } }) }
];

// Rules with no seeded fault of their own, and why
export const NO_CONTROL = {};
