// The seeded faults, one or more per rule, as pure functions from the test subject's data to faulty data (nothing is written to disk).
// Each control names the rule that must go red and no other (also: rules that cannot be kept green by this fault, with the reason).
// keepLock: leave the lock as it was, so the fault shows up as a difference from it. input: change the rest of the input (the
// last commit's lock, the held list, the files on disk). green: the fault is one the rule must let through.
const F = 'fixture';
const item = (id, ...rest) => ['subjects', F, 'items', id, ...rest];
const gen = (id, ...rest) => ['subjects', F, 'gens', id, ...rest];
const lesson = (id, ...rest) => ['subjects', F, 'lessons', id, ...rest];
const meta = (...rest) => ['subjects', F, 'meta', ...rest];
// the sung test subject
const sung = (id, ...rest) => ['subjects', 'chorus', 'lessons', id, ...rest];
// the test subject of typed numbers, documents and figures
const tillItem = (id, ...rest) => ['subjects', 'till', 'items', id, ...rest];
const tillGen = (id, ...rest) => ['subjects', 'till', 'gens', id, ...rest];
const tillLesson = (id, ...rest) => ['subjects', 'till', 'lessons', id, ...rest];
// the test subject of papers, a form, the private sheet and the dated changes
const ledgerItem = (id, ...rest) => ['subjects', 'ledger', 'items', id, ...rest];
const ledgerGen = (id, ...rest) => ['subjects', 'ledger', 'gens', id, ...rest];
const ledgerLesson = (id, ...rest) => ['subjects', 'ledger', 'lessons', id, ...rest];
const ledgerMeta = (...rest) => ['subjects', 'ledger', 'meta', ...rest];
// the test subject of articles, the tap, the charts and the 1,000 people
const feedItem = (id, ...rest) => ['subjects', 'feed', 'items', id, ...rest];
const feedLesson = (id, ...rest) => ['subjects', 'feed', 'lessons', id, ...rest];
// the test subject of labels pinned on posts, the panel and the sides
const labelsItem = (id, ...rest) => ['subjects', 'labels', 'items', id, ...rest];
const labelsLesson = (id, ...rest) => ['subjects', 'labels', 'lessons', id, ...rest];
const labelsMeta = (...rest) => ['subjects', 'labels', 'meta', ...rest];
// the test subject of messages, the written line and questions of four asks
const accountItem = (id, ...rest) => ['subjects', 'account', 'items', id, ...rest];
const accountLesson = (id, ...rest) => ['subjects', 'account', 'lessons', id, ...rest];
const accountMeta = (...rest) => ['subjects', 'account', 'meta', ...rest];
// the test subject of the six forms of a message, timed groups, a call that pushes back, steps in order, the busy task, the plan and the baseline
const pressureItem = (id, ...rest) => ['subjects', 'pressure', 'items', id, ...rest];
const pressureLesson = (id, ...rest) => ['subjects', 'pressure', 'lessons', id, ...rest];
const pressureMeta = (...rest) => ['subjects', 'pressure', 'meta', ...rest];

// the test subject of answers from memory, questions read aloud, the learner's own answers and the mock interview
const interviewItem = (id, ...rest) => ['subjects', 'interview', 'items', id, ...rest];
const interviewLesson = (id, ...rest) => ['subjects', 'interview', 'lessons', id, ...rest];
const interviewMeta = (...rest) => ['subjects', 'interview', 'meta', ...rest];

// the test subject of the map block and the place ask
const atlasItem = (id, ...rest) => ['subjects', 'atlas', 'items', id, ...rest];
const atlasLesson = (id, ...rest) => ['subjects', 'atlas', 'lessons', id, ...rest];
const atlasGen = (id, ...rest) => ['subjects', 'atlas', 'gens', id, ...rest];
const atlasMeta = (...rest) => ['subjects', 'atlas', 'meta', ...rest];

const padding = Array.from({ length: 200 }, () => 'The chance is a number.').join(' ');

export const CONTROLS = [
  { rule: 'V4', name: 'a question\'s reason shows its id', data: (d, h) => h.setIn(d, item('c-1', 'reason'), 'The forecast says 80% chance of rain. See c-1.') },
  { rule: 'V36', name: 'a reason opens with praise', data: (d, h) => h.setIn(d, item('c-2', 'reason'), 'Correct. A 20% chance means rain on about two days in ten like this one.') },
  { rule: 'V36', name: 'a trap\'s line opens with a bare verdict', data: (d, h) => h.setIn(d, tillGen('t-cart', 'asks', 1, 'traps', 0, 'then'), 'Wrong. That is the answer you get when the roast chicken is left out.') },
  { rule: 'V45', name: 'a lesson at revision 2 with one history entry', data: (d, h) => h.setIn(d, lesson('l2', 'rev'), 2) },
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
  { rule: 'V70', name: 'an ask of an unknown kind', data: (d, h) => h.setIn(d, item('c-2', 'asks', 0, 'kind'), 'telepathy') },
  { rule: 'V70', name: 'a number with no tolerance', data: (d, h) => h.removeIn(d, tillGen('t-cart', 'asks', 1, 'tol')) },
  { rule: 'V70', name: 'a frame with two blanks and a one-number answer', data: (d, h) => h.setIn(d, tillItem('t-recipe', 'asks', 0, 'answer'), 3) },
  { rule: 'V70', name: 'the estimate check on a group with no estimate to compare', data: (d, h) => h.setIn(d, tillLesson('l1', 'flow', 4, 'set', 'support'), { estimateCheck: true }) },
  { rule: 'V70', name: 'a document of a form that is not one', data: (d, h) => h.setIn(d, tillLesson('l1', 'flow', 0, 'show', 0, 'form'), 'menu') },
  { rule: 'V75', name: 'a rough answer\'s slip too close to the answer to be told from it', data: (d, h) => h.setIn(d, tillGen('t-cart', 'asks', 0, 'traps'), [{ slip: 'left-out', value: 'total' }]) },
  { rule: 'V74', name: 'a wild answer named by a slip the subject does not have', data: (d, h) => h.setIn(d, tillGen('t-cart', 'asks', 1, 'wild'), 'mystery') },
  { rule: 'V70', name: 'a calculator key that the calculator cannot add', data: (d, h) => h.setIn(d, tillGen('t-cart', 'asks', 1, 'calc'), ['pow', 'log']) },
  { rule: 'V70', name: 'a calculator key named twice', data: (d, h) => h.setIn(d, tillGen('t-cart', 'asks', 1, 'calc'), ['mem', 'mem']) },
  { rule: 'V70', name: 'keys added to the calculator of an estimate', data: (d, h) => h.setIn(d, tillGen('t-cart', 'asks', 0, 'calc'), ['sqrt']) },
  { rule: 'V70', name: 'a circle in a plan with no radius', data: (d, h) => h.removeIn(d, tillLesson('l1', 'flow', 1, 'show', 3, 'data', 'parts', 1, 'r')) },
  { rule: 'V70', name: 'a triangle in a plan with a side of zero', data: (d, h) => h.setIn(d, tillLesson('l1', 'flow', 1, 'show', 3, 'data', 'parts', 2, 'w'), 0) },
  { rule: 'V70', name: 'a rectangle in a plan that writes words for a slant it does not have', data: (d, h) => h.setIn(d, tillLesson('l1', 'flow', 1, 'show', 2, 'data', 'parts', 0, 'say'), { slant: '?' }) },
  { rule: 'V70', name: 'a bar part with no percent', data: (d, h) => h.removeIn(d, tillLesson('l1', 'flow', 1, 'show', 1, 'data', 'parts', 0, 'pct')) },
  { rule: 'V71', name: 'a part with no lesson in a subject that says it is complete', data: (d, h) => h.removeIn(d, lesson('l2')) },
  { rule: 'V71', name: 'a part in no unit', data: (d, h) => h.setIn(d, meta('units'), [{ id: 'a', title: 'Chance', parts: ['1'] }]) },
  { rule: 'V71', name: 'units that hold the parts out of order', data: (d, h) => h.setIn(d, meta('units'), [{ id: 'b', title: 'Timing', parts: ['2'] }, { id: 'a', title: 'Chance', parts: ['1'] }]) },
  { rule: 'V72', name: 'a check question that is also in a group', data: (d, h) => h.setIn(d, lesson('l1', 'check', 'items', 0), 'c-1') },
  { rule: 'V73', name: 'a why padded far past the reading share', data: (d, h) => h.setIn(d, lesson('l2', 'why'), padding) },
  { rule: 'V74', name: 'a wrong option with no line of its own and no slip',
    data: (d, h) => h.setIn(d, item('c-3', 'asks', 0, 'then'), { bring: 'You carry it and stay dry if the rain comes.' }) },
  { rule: 'V74', name: 'a number whose answer names a value the question never makes', data: (d, h) => h.setIn(d, tillItem('t-leave', 'asks', 1, 'answer'), 'balance') },
  { rule: 'V74', name: 'a trap that names a slip the subject does not have', data: (d, h) => h.setIn(d, tillItem('t-leave', 'asks', 1, 'traps', 0, 'slip'), 'mystery') },
  { rule: 'V74', name: 'an estimate asked after the exact answer', data: (d, h) => h.updateIn(d, tillGen('t-cart', 'asks'), asks => [asks[1], asks[0]]) },
  { rule: 'V75', name: 'a number slip that lands on the answer', data: (d, h) => h.setIn(d, tillGen('t-cart', 'asks', 1, 'traps', 0, 'value'), 'total') },
  { rule: 'V75', name: 'a slip that gives the answer', data: (d, h) => h.setIn(d, gen('g-chance', 'asks', 0, 'options', 1, 'value'), 'days') },
  { rule: 'V75', name: 'three choices written as a list, which the engine reads as a range of one value', data: (d, h) => h.setIn(d, gen('g-chance', 'params', 'pct'), [10, 20, 30]) },
  { rule: 'V76', name: 'a group with no dry forecast', data: (d, h) => h.setIn(d, lesson('l1', 'flow', 2, 'set', 'items'), ['c-1', 'c-3']) },
  { rule: 'V77', name: 'a topic one question short of its returns', data: (d, h) => h.removeIn(h.removeIn(d, item('b-3')), item('b-4')) },
  { rule: 'V70', name: 'a sung task that is not one', data: (d, h) => h.setIn(d, sung('l1', 'flow', 4, 'set', 'items', 0, 'sing', 'task'), 'whistle') },
  { rule: 'V78', name: 'a hold of 9 seconds', data: (d, h) => h.setIn(d, sung('l1', 'flow', 4, 'set', 'items', 0, 'sing', 'seconds'), 9) },
  { rule: 'V78', name: 'an interval too wide for the narrowest range', data: (d, h) => h.setIn(d, sung('l2', 'flow', 2, 'set', 'items', 0, 'sing'), { task: 'interval', minSemitones: 11, maxSemitones: 12 }) },
  { rule: 'V78', name: 'a lesson that sings with no warm-up first', data: (d, h) => h.removeIn(d, sung('l1', 'flow', 0)) },
  { rule: 'V78', name: 'a warm-up in the check', data: (d, h) => h.setIn(d, sung('l1', 'check', 'items'), [{ sing: { task: 'match' }, n: 2 }, { sing: { task: 'warmup' }, n: 1 }]) },
  { rule: 'V78', also: ['V79'], name: 'a check that shows the line', data: (d, h) => h.setIn(d, sung('l1', 'check', 'support'), { line: true }) },
  { rule: 'V70', name: 'an example sound longer than the app plays', data: (d, h) => h.setIn(d, sung('l1', 'flow', 1, 'show', 1, 'examples', 0, 'play', 0, 'ms'), 9000) },
  { rule: 'V70', name: 'example sounds inside a pair, off the teaching screen itself', data: (d, h) => h.setIn(d, sung('l1', 'flow', 1, 'show'), [{ kind: 'pair', a: { kind: 'prose', text: 'One.' }, b: { kind: 'tones', says: 'Listen.', examples: [{ label: 'A match', play: [{ note: 'D4', ms: 1500 }] }] }, compare: 'Compare them.' }]) },
  { rule: 'V70', name: 'two example sounds with one label', data: (d, h) => h.setIn(d, sung('l1', 'flow', 1, 'show', 1, 'examples', 1, 'label'), 'A match') },
  { rule: 'V78', name: 'a group that asks what you heard with the line on', data: (d, h) => h.setIn(d, sung('l1', 'flow', 2, 'set', 'guess'), true) },
  { rule: 'V78', name: 'a warm-up that asks what you heard', data: (d, h) => h.setIn(d, sung('l1', 'flow', 0, 'set', 'guess'), true) },
  { rule: 'V78', name: 'a group that holds its results to the end without asking what you heard', data: (d, h) => h.setIn(d, sung('l1', 'flow', 2, 'set', 'feedback'), 'at-end') },
  { rule: 'V78', name: 'a melody slowed past its limit', data: (d, h) => h.setIn(d, sung('l2', 'flow', 3, 'set', 'items', 0, 'sing', 'noteMs'), 2000) },
  { rule: 'V78', name: 'a sung check that comes back on the same day', data: (d, h) => h.setIn(d, sung('l1', 'check', 'retest'), 0) },
  { rule: 'V78', name: 'a sung check that shows its result only at the end', data: (d, h) => h.setIn(d, sung('l1', 'check', 'feedback'), 'at-end') },
  { rule: 'V79', name: 'a lesson whose last group still has help', data: (d, h) => h.setIn(d, lesson('l1', 'flow', 3, 'set', 'support'), { shown: true }) },
  { rule: 'V81', name: 'a private form with a field "Account number"',
    data: (d, h) => h.updateIn(d, ledgerMeta('own', 'sheet', 'fields'), fields => [...fields, { id: 'acct', label: 'Account number', type: 'number' }]) },
  { rule: 'V81', name: 'a fund row with a field "Online banking password"',
    data: (d, h) => h.updateIn(d, ledgerMeta('own', 'sheet', 'rows', 'fields'), fields => [...fields, { id: 'secret', label: 'Online banking password', type: 'text', optional: true }]) },
  // papers, a form, the private sheet, the dated changes (step 4)
  { rule: 'V70', name: 'a form field with no tolerance', data: (d, h) => h.removeIn(d, ledgerItem('l-sheet', 'asks', 0, 'fields', 0, 'tol')) },
  { rule: 'V70', name: 'a ref block that names a ref the subject does not have', data: (d, h) => h.setIn(d, ledgerLesson('l1', 'flow', 0, 'show', 7, 'ref'), 'nope') },
  { rule: 'V70', name: 'an own step that names a private form the subject does not have', data: (d, h) => h.setIn(d, ledgerLesson('l1', 'flow', 3, 'own'), 'nothing') },
  { rule: 'V70', name: 'a private form that leaves out a field the app reads', data: (d, h) => h.removeIn(d, ledgerMeta('own', 'sheet', 'fields', 2)) },
  { rule: 'V70', name: 'a step on the sheet that names no work', data: (d, h) => h.removeIn(d, ledgerLesson('l1', 'flow', 3, 'work')) },
  { rule: 'V70', name: 'a step on the sheet that names a work the app does not have', data: (d, h) => h.setIn(d, ledgerLesson('l1', 'flow', 3, 'work'), 'magic') },
  { rule: 'V70', name: 'a work whose groups, limits and kinds the sheet does not have', data: (d, h) => h.setIn(d, ledgerLesson('l1', 'flow', 3, 'work'), 'cash') },
  { rule: 'V70', name: 'a work that reads a fund field the sheet does not have', data: (d, h) => h.setIn(d, ledgerLesson('l1', 'flow', 3, 'work'), 'share') },
  { rule: 'V70', name: 'a question whose help answers the ask another one waits on', data: (d, h) => h.setIn(d, tillItem('t-leave', 'asks', 1, 'when'), { ask: 'cut', is: ['x'] }) },
  { rule: 'V70', name: 'a step on the sheet that repeats on another beat than a year', data: (d, h) => h.setIn(d, ledgerLesson('l1', 'flow', 3, 'repeat'), 'month') },
  { rule: 'V70', name: 'an account field kept to a kind of account the subject does not list',
    data: (d, h) => h.setIn(d, ledgerMeta('own', 'sheet', 'fields', 1, 'for'), ['moon']) },
  { rule: 'V81', name: 'a group of the sheet with a field "Routing number"',
    data: (d, h) => h.setIn(d, ledgerMeta('own', 'sheet', 'groups'), [{ id: 'bank', label: 'Your bank', fields: [{ id: 'routing', label: 'Routing number', type: 'text' }] }]) },
  { rule: 'V70', name: 'a lesson that waits for a moment the subject does not list', data: (d, h) => h.setIn(d, ledgerLesson('l1', 'trigger'), 'moon') },
  { rule: 'V70', name: 'a dated value looked up on a day that is not one', data: (d, h) => h.setIn(d, ledgerMeta('refs', 0, 'asOf'), '2025-02-30') },
  { rule: 'V74', name: 'a form field whose answer names a value the question never makes', data: (d, h) => h.setIn(d, ledgerItem('l-sheet', 'asks', 0, 'fields', 1, 'answer'), 'balance') },
  { rule: 'V74', name: 'a form field trap that names a slip the subject does not have', data: (d, h) => h.setIn(d, ledgerItem('l-sheet', 'asks', 0, 'fields', 0, 'traps', 0, 'slip'), 'mystery') },
  { rule: 'V75', name: 'a form field slip that lands on the answer', data: (d, h) => h.setIn(d, ledgerGen('l-gen', 'asks', 0, 'fields', 0, 'traps', 0, 'value'), 'rate') },
  { rule: 'V36', name: 'a form field trap opens with a bare verdict', data: (d, h) => h.setIn(d, ledgerItem('l-sheet', 'asks', 0, 'fields', 0, 'traps', 0, 'then'), 'Wrong. That is the cost of the Safe Fund.') },
  { rule: 'V50', name: 'a private form label uses the engine\'s own word "item"', data: (d, h) => h.setIn(d, ledgerMeta('own', 'sheet', 'rows', 'fields', 0, 'label'), 'Name of the item') },
  // articles, the tap, the charts and the 1,000 people (step 5)
  { rule: 'V70', name: 'an article of a form that is not one', data: (d, h) => h.setIn(d, feedLesson('l1', 'flow', 0, 'show', 0, 'form'), 'tweet') },
  { rule: 'V70', name: 'a post with a headline', data: (d, h) => h.setIn(d, feedLesson('l1', 'flow', 0, 'show', 1, 'headline'), { id: 'h', text: 'Everyone is switching' }) },
  { rule: 'V70', name: 'an ad with no headline', data: (d, h) => h.removeIn(d, feedLesson('l1', 'flow', 0, 'show', 2, 'headline')) },
  { rule: 'V70', name: 'a chart value off its axis', data: (d, h) => h.setIn(d, feedItem('n-bars', 'blocks', 1, 'series', 0, 'values', 0), 80) },
  { rule: 'V70', name: 'a chart label wider than the space under its bar', data: (d, h) => h.setIn(d, feedItem('n-bars', 'blocks', 1, 'x', 0), 'The members of the clubs') },
  { rule: 'V70', name: 'a row of 1,001 people in 1,000', data: (d, h) => h.setIn(d, feedLesson('l1', 'flow', 1, 'show', 2, 'data', 'rows', 0, 'count'), 1001) },
  { rule: 'V70', name: 'a count of people written as a number that is not whole', data: (d, h) => h.setIn(d, feedLesson('l1', 'flow', 1, 'show', 2, 'data', 'rows', 0, 'count'), '12.5') },
  { rule: 'V70', name: 'a redraw from zero of a chart that starts at zero', data: (d, h) => h.setIn(d, feedItem('n-last', 'redraw'), 'from-zero') },
  { rule: 'V70', name: 'a tap that names a block the question does not have', data: (d, h) => h.setIn(d, feedItem('n-news', 'asks', 0, 'in'), 'nowhere') },
  { rule: 'V70', name: 'a tap whose answer is "none" with no words for the button', data: (d, h) => h.removeIn(d, feedItem('n-post', 'asks', 0, 'none')) },
  { rule: 'V74', name: 'a tap whose right line is not a line of the text', data: (d, h) => h.setIn(d, feedItem('n-news', 'asks', 0, 'right'), ['zz']) },
  { rule: 'V74', name: 'a tap whose right line is not among the deciding words', data: (d, h) => h.setIn(d, feedItem('n-news', 'deciding'), ['h']) },
  { rule: 'V74', name: 'a tap that wants two lines and names one', data: (d, h) => h.setIn(d, feedItem('n-two', 'asks', 0, 'right'), ['a1']) },
  { rule: 'V74', name: 'a tapped line that names a slip the subject does not have', data: (d, h) => h.setIn(d, feedItem('n-last', 'blocks', 0, 'lines', 1, 'slip'), 'mystery') },
  { rule: 'V36', name: 'a tapped line\'s note opens with praise', data: (d, h) => h.setIn(d, feedItem('n-news', 'blocks', 0, 'lines', 1, 'note'), 'Correct. That is when the line opened.') },
  // labels pinned on posts, the panel, each need found or missing, the sides (step 6)
  { rule: 'V70', name: 'a label on a news story, which only a post carries', data: (d, h) => h.setIn(d, labelsLesson('l1', 'flow', 0, 'show', 0, 'form'), 'news') },
  { rule: 'V70', name: 'a label thrown from a side that is neither left nor right', data: (d, h) => h.setIn(d, labelsItem('g-1', 'blocks', 0, 'label', 'side'), 'centre') },
  { rule: 'V70', name: 'a panel that names a rule the subject does not have', data: (d, h) => h.setIn(d, labelsItem('g-1', 'blocks', 1, 'rules', 0), 'sunny') },
  { rule: 'V70', name: 'a panel that names one rule twice', data: (d, h) => h.setIn(d, labelsItem('g-1', 'blocks', 1, 'rules'), ['dry', 'dry']) },
  { rule: 'V70', name: 'a labelled post in a question with no panel', data: (d, h) => h.removeIn(d, labelsItem('c-1', 'blocks', 1)) },
  { rule: 'V70', name: 'a label thrown from the right on a question sorted as from the left', data: (d, h) => h.setIn(d, labelsItem('c-1', 'facets', 'side'), 'right') },
  { rule: 'V70', name: 'the help that shows the panel on a group whose questions have none', data: (d, h) => h.setIn(d, lesson('l1', 'flow', 2, 'set', 'support'), { panel: true }) },
  { rule: 'V70', name: 'two rules that share the id of a need', data: (d, h) => h.setIn(d, labelsMeta('rules', 'wet', 'needs', 0, 'id'), 'dry-sky') },
  { rule: 'V70', name: 'a facet whose compare is not true or false', data: (d, h) => h.setIn(d, labelsMeta('facets', 'side', 'compare'), 'yes') },
  { rule: 'V74', name: 'a panel with a need the question never accounts for', data: (d, h) => h.removeIn(d, labelsItem('g-1', 'has', 'dry-ground')) },
  { rule: 'V74', name: 'a question that accounts for a need its panel does not have', data: (d, h) => h.setIn(d, labelsItem('g-1', 'has', 'wet-rain'), null) },
  { rule: 'V74', name: 'a need found in a line the text does not have', data: (d, h) => h.setIn(d, labelsItem('g-1', 'has', 'dry-sky'), 'nowhere') },
  { rule: 'V74', name: 'a need found in a line that is not among the deciding words', data: (d, h) => h.setIn(d, labelsItem('g-1', 'deciding'), ['g-1-b']) },
  { rule: 'V74', name: 'a question with no panel that says where the needs of a label are found', data: (d, h) => h.setIn(d, feedItem('n-news', 'has'), { x: null }) },
  { rule: 'V76', name: 'a group with a label from one side and none from the other', data: (d, h) => h.setIn(d, labelsLesson('l1', 'flow', 3, 'set', 'items'), ['h-1']) },
  { rule: 'V79', name: 'a lesson whose last group still shows the panel', data: (d, h) => h.setIn(d, labelsLesson('l1', 'flow', 3, 'set', 'support'), { panel: true }) },
  { rule: 'V50', name: 'a need that uses the engine\'s word "item"', data: (d, h) => h.setIn(d, labelsMeta('rules', 'dry', 'needs', 0, 'text'), 'The item has no cloud.') },
  { rule: 'V4', name: 'a need that shows its own id', data: (d, h) => h.setIn(d, labelsMeta('rules', 'dry', 'needs', 1, 'text'), 'The dry-ground is dry.') },
  // messages, the written line, a checklist with a heading, questions of four asks (step 7)
  { rule: 'V70', name: 'a message of a form that is not one', data: (d, h) => h.setIn(d, accountLesson('l1', 'flow', 0, 'show', 0, 'form'), 'telegram') },
  { rule: 'V70', name: 'a line you sent in a message from a friend', data: (d, h) => h.setIn(d, accountLesson('l1', 'flow', 0, 'show', 0, 'lines', 0, 'me'), true) },
  { rule: 'V70', name: 'a thread with no line from the other person',
    data: (d, h) => h.setIn(d, accountLesson('l1', 'flow', 0, 'show', 1, 'lines'), [{ id: 't-b', text: 'That is the third time.', me: true }]) },
  { rule: 'V70', name: 'a message with no lines', data: (d, h) => h.setIn(d, accountLesson('l1', 'flow', 0, 'show', 2, 'lines'), []) },
  { rule: 'V70', name: 'a written line that uses accepted answers', data: (d, h) => h.setIn(d, accountItem('h-1', 'asks', 1, 'accept'), ['the leftovers']) },
  { rule: 'V70', name: 'a rule with a heading of its own beside another rule in one panel',
    data: (d, h) => h.setIn(h.setIn(d, accountMeta('rules', 'side'), { name: 'Another', needs: [{ id: 'side-one', text: 'It has one thing.' }] }), accountLesson('l1', 'flow', 0, 'show', 3, 'rules'), ['act', 'side']) },
  { rule: 'V74', name: 'a written line whose model line is blank', data: (d, h) => h.setIn(d, accountItem('h-1', 'asks', 1, 'model'), ' ') },
  { rule: 'V74', name: 'a question whose only ask is a written line',
    data: (d, h) => h.updateIn(d, accountItem('h-1', 'asks'), asks => [asks[1]]) },
  { rule: 'V50', name: 'a model line uses the engine\'s own word "item"', data: (d, h) => h.setIn(d, accountItem('h-1', 'asks', 1, 'model'), 'This item is the leftovers he ate.') },
  { rule: 'V60', name: 'a model line in British spelling', data: (d, h) => h.setIn(d, accountItem('h-1', 'asks', 1, 'model'), 'He ate the favourite leftovers I saved for lunch.') },
  // the six forms of a message, timed groups, a call that pushes back, steps in order, the busy task, the plan, the baseline (step 8)
  { rule: 'V70', name: 'a link on an incoming call', data: (d, h) => h.setIn(d, pressureLesson('l1', 'flow', 0, 'show', 4, 'link'), 'call-back.example') },
  { rule: 'V70', name: 'an email with no subject', data: (d, h) => h.removeIn(d, pressureLesson('l1', 'flow', 0, 'show', 1, 'subject')) },
  { rule: 'V70', name: 'a subject on a text', data: (d, h) => h.setIn(d, pressureLesson('l1', 'flow', 0, 'show', 0, 'subject'), 'Locked') },
  { rule: 'V70', name: 'a banner of two lines', data: (d, h) => h.updateIn(d, pressureLesson('l1', 'flow', 0, 'show', 5, 'lines'), lines => [...lines, { id: 'f-z', text: 'And more.' }]) },
  { rule: 'V70', name: 'a line you sent in a call', data: (d, h) => h.setIn(d, pressureLesson('l1', 'flow', 0, 'show', 4, 'lines', 0, 'me'), true) },
  { rule: 'V70', name: 'a reply that goes to a turn the call does not have', data: (d, h) => h.setIn(d, pressureItem('x-1', 'asks', 0, 'turns', 'one', 'options', 1, 'goto'), 'nowhere') },
  { rule: 'V70', name: 'a call whose turns loop back', data: (d, h) => h.setIn(d, pressureItem('x-1', 'asks', 0, 'turns', 'two', 'options', 0), { id: 'again', text: 'Say it again', goto: 'one' }) },
  { rule: 'V70', name: 'a call with no right end', data: (d, h) => h.setIn(d, pressureItem('x-1', 'asks', 0, 'ends', 'hung', 'ok'), false) },
  { rule: 'V70', name: 'a turn the call can never reach', data: (d, h) => h.setIn(d, pressureItem('x-1', 'asks', 0, 'turns', 'three'), { lines: [{ id: 'x3a', text: 'Hello?' }], options: [{ id: 'a', text: 'Hang up', end: 'hung' }, { id: 'b', text: 'Stay', end: 'gave' }] }) },
  { rule: 'V70', name: 'a right order that names a step that is not one', data: (d, h) => h.setIn(d, pressureItem('o-1', 'asks', 0, 'right', 1), 'nope') },
  { rule: 'V70', name: 'a private form for the plan that leaves out the cue', data: (d, h) => h.removeIn(d, pressureMeta('own', 'plan', 'fields', 0)) },
  { rule: 'V70', name: 'a private form for the plan with no words of its own around it', data: (d, h) => h.removeIn(d, pressureMeta('own', 'plan', 'words')) },
  { rule: 'V70', name: 'words around a plan on a form that is not the plan', data: (d, h) => h.setIn(d, pressureMeta('own', 'setup', 'words'), { title: 'T', how: 'H', saved: 'S', before: 'B' }) },
  { rule: 'V70', name: 'a setup field that is not a day', data: (d, h) => h.setIn(d, pressureMeta('own', 'setup', 'fields', 0, 'type'), 'text') },
  { rule: 'V70', name: 'a step on the plan, and a group that shows it, in a subject with no private form for one', data: (d, h) => h.removeIn(d, pressureMeta('own', 'plan')) },
  { rule: 'V70', name: 'a baseline whose flow holds a group of questions', data: (d, h) => h.updateIn(d, pressureLesson('l0', 'flow'), flow => [...flow, { set: { items: ['t-1'], order: 'listed' } }]) },
  { rule: 'V70', name: 'a baseline that shows its answers as it goes', data: (d, h) => h.setIn(d, pressureLesson('l0', 'check', 'feedback'), 'after-each') },
  { rule: 'V70', name: 'a check of 25 seconds', data: (d, h) => h.setIn(d, pressureLesson('l1', 'check', 'seconds'), 25) },
  { rule: 'V70', name: 'seconds in a subject that does not time its items', data: (d, h) => h.setIn(d, pressureMeta('timed'), false) },
  { rule: 'V70', name: 'a danger slip the subject does not list', data: (d, h) => h.setIn(d, pressureMeta('danger', 'slip'), 'nothing') },
  { rule: 'V74', name: 'a call in which nobody pushes', data: (d, h) => h.removeIn(h.removeIn(d, pressureItem('x-1', 'asks', 0, 'turns', 'one', 'push')), pressureItem('x-1', 'asks', 0, 'turns', 'two', 'push')) },
  { rule: 'V74', name: 'a call that ends on a slip the subject does not have', data: (d, h) => h.setIn(d, pressureItem('x-1', 'asks', 0, 'ends', 'gave', 'slip'), 'mystery') },
  { rule: 'V74', name: 'the right end of a call that carries a slip', data: (d, h) => h.setIn(d, pressureItem('x-1', 'asks', 0, 'ends', 'hung', 'slip'), 'acted') },
  { rule: 'V82', name: 'a real message whose wrong option is marked as the failure', data: (d, h) => h.setIn(d, pressureItem('t-1', 'asks', 0, 'slips', 'check'), 'acted') },
  { rule: 'V82', name: 'the failure moved to a slip that real messages make', data: (d, h) => h.setIn(d, pressureMeta('danger', 'slip'), 'habit') },
  { rule: 'V83', name: 'a typed line in a timed group', data: (d, h) => h.updateIn(d, pressureItem('t-3', 'asks'), asks => [...asks, { id: 'say', kind: 'text', prompt: 'Say what you would do.', model: 'I would check in the app.' }]) },
  { rule: 'V83', name: 'a busy group that is not timed', data: (d, h) => h.removeIn(d, pressureLesson('l1', 'flow', 5, 'set', 'seconds')) },
  { rule: 'V83', name: 'a busy group whose question is not a banner', data: (d, h) => h.setIn(d, pressureLesson('l1', 'flow', 5, 'set', 'items'), ['t-3', 'y-2']) },
  { rule: 'V50', name: 'a reply of a call uses the engine\'s own word "item"', data: (d, h) => h.setIn(d, pressureItem('x-1', 'asks', 0, 'turns', 'one', 'options', 0, 'text'), 'Read out the item') },
  // answers from memory, questions read aloud, the learner's own answers, the mock interview (step 9)
  { rule: 'V70', name: 'a text ask that is a line to write and an answer from memory', data: (d, h) => h.setIn(d, interviewItem('form', 'asks', 0, 'model'), 'The people choose.') },
  { rule: 'V70', name: 'a text ask with neither a model nor accepted answers', data: (d, h) => h.removeIn(d, interviewItem('form', 'asks', 0, 'accept')) },
  { rule: 'V70', name: 'a count of one answer', data: (d, h) => h.setIn(d, interviewItem('oath', 'asks', 0, 'count'), 1) },
  { rule: 'V70', name: 'an own answer that names a field the subject does not have', data: (d, h) => h.setIn(d, interviewItem('senator', 'asks', 0, 'accept', 'own'), 'answers.q99') },
  { rule: 'V70', name: 'an interview date read from a field that is not a date', data: (d, h) => h.setIn(d, interviewMeta('review', 'dateField'), 'answers.q23') },
  { rule: 'V70', name: 'a spoken block with no words', data: (d, h) => h.removeIn(d, interviewItem('form', 'blocks', 0, 'text')) },
  { rule: 'V70', name: 'a check drawn at random that asks its questions again', data: (d, h) => h.setIn(d, interviewLesson('l3', 'check', 'recall'), true) },
  { rule: 'V70', name: 'a draw group that draws none', data: (d, h) => h.setIn(d, interviewLesson('l3', 'check', 'items', 'draw', 1, 'n'), 0) },
  { rule: 'V70', name: 'a strand in two draw groups', data: (d, h) => h.updateIn(d, interviewLesson('l3', 'check', 'items', 'draw', 1, 'strands'), list => [...list, 'form']) },
  { rule: 'V70', name: 'a draw group of a strand the subject does not have', data: (d, h) => h.updateIn(d, interviewLesson('l3', 'check', 'items', 'draw', 0, 'strands'), list => [...list, 'nowhere']) },
  { rule: 'V70', name: 'a lesson that asks about the learner\'s own answers before a step enters them', data: (d, h) => h.updateIn(d, interviewLesson('l2', 'flow'), flow => [flow[1], flow[0]]) },
  { rule: 'V70', name: 'an interview fact that is not an item of the subject', data: (d, h) => h.setIn(d, interviewItem('news-veto', 'fact'), 'nowhere') },
  { rule: 'V70', name: 'an interview fact that has no answer from memory to print', data: (d, h) => h.setIn(d, interviewItem('news-veto', 'fact'), 'news-sign') },
  { rule: 'V72', name: 'a draw group that draws more than its topics hold', data: (d, h) => h.setIn(d, interviewLesson('l3', 'check', 'items', 'draw', 0, 'n'), 7) },
  { rule: 'V72', name: 'a check that asks again a question the lesson never asked', data: (d, h) => h.setIn(d, interviewLesson('l1', 'check', 'items', 0), 'declare') },
  { rule: 'V72', name: 'a check read aloud that can ask a question with no spoken block', data: (d, h) => h.updateIn(d, interviewLesson('l3', 'check', 'items', 'draw', 0, 'strands'), list => [...list, 'news']) },
  { rule: 'V74', name: 'a question that wants two answers and accepts one', data: (d, h) => h.setIn(d, interviewItem('oath', 'asks', 0, 'accept'), ['Be loyal to the United States']) },
  { rule: 'V74', name: 'an answer accepted twice', data: (d, h) => h.updateIn(d, interviewItem('form', 'asks', 0, 'accept'), list => [...list, 'republic']) },
  { rule: 'V74', name: 'an answer said in parts that has one part', data: (d, h) => h.setIn(d, interviewItem('branches', 'asks', 0, 'accept', 0, 'parts'), ['Legislative']) },
  { rule: 'V74', name: 'a question from memory with no spoken block', data: (d, h) => h.setIn(d, interviewItem('vote', 'blocks'), [{ kind: 'prose', text: 'Who can vote in federal elections?' }]) },
  { rule: 'V81', name: 'a private form into the answers with a field "Social Security number"',
    data: (d, h) => h.updateIn(d, interviewMeta('own', 'answers', 'fields'), fields => [...fields, { id: 'ssn', label: 'Social Security number', type: 'text', optional: true }]) },
  { rule: 'V84', name: 'questions from a published list and no source for it', data: (d, h) => h.removeIn(d, interviewMeta('refs')) },
  { rule: 'V50', name: 'a checklist heading uses the engine\'s own word "item"', data: (d, h) => h.setIn(d, accountMeta('rules', 'act', 'heading'), 'What counts as an item') },
  // the map block and the place ask
  { rule: 'V70', name: 'a map block of a region the map data does not have', data: (d, h) => h.setIn(d, atlasLesson('l1', 'flow', 0, 'show', 0, 'region'), 'narnia') },
  { rule: 'V70', name: 'a map block that lights a place the region does not have', data: (d, h) => h.setIn(d, atlasItem('n-cedar', 'blocks', 0, 'lit', 0), 'narnia') },
  { rule: 'V70', name: 'a map block whose labels are neither true nor a list of places', data: (d, h) => h.setIn(d, atlasLesson('l1', 'flow', 0, 'show', 0, 'labels'), 'yes') },
  { rule: 'V70', name: 'a map block that lights one place twice', data: (d, h) => h.setIn(d, atlasItem('n-cedar', 'blocks', 0, 'lit'), ['cedar', 'cedar']) },
  { rule: 'V70', name: 'a place ask on a region the map data does not have', data: (d, h) => h.setIn(d, atlasItem('t-birch', 'asks', 0, 'map'), 'narnia') },
  { rule: 'V70', name: 'a place ask whose right answer is not a place of the map', data: (d, h) => h.setIn(d, atlasItem('t-birch', 'asks', 0, 'right'), 'narnia') },
  { rule: 'V70', name: 'a place ask with no right answer', data: (d, h) => h.removeIn(d, atlasItem('t-birch', 'asks', 0, 'right')) },
  { rule: 'V70', name: 'a place ask that names its right answer twice', data: (d, h) => h.setIn(d, atlasItem('t-birch', 'asks', 0, 'right'), ['birch', 'birch']) },
  { rule: 'V70', name: 'a place ask whose slip is keyed by a place the map does not have', data: (d, h) => h.setIn(d, atlasItem('t-birch', 'asks', 0, 'slips'), { narnia: 'next-door' }) },
  { rule: 'V70', name: 'a place ask in a mode that is not built', data: (d, h) => h.setIn(d, atlasItem('b-alder', 'asks', 0, 'mode'), 'distance') },
  { rule: 'V70', name: 'a neighbor and its water of a place that is not ground', data: (d, h) => h.setIn(d, atlasItem('b-alder', 'asks', 0, 'of'), 'sea') },
  { rule: 'V70', name: 'a neighbor and its water of a place the map does not have', data: (d, h) => h.setIn(d, atlasItem('b-alder', 'asks', 0, 'of'), 'narnia') },
  { rule: 'V70', name: 'a neighbor and its water that has a right answer of its own', data: (d, h) => h.setIn(d, atlasItem('b-alder', 'asks', 0, 'right'), 'birch') },
  { rule: 'V70', name: 'a picture added to the feedback that is neither a figure, a map nor flags', data: (d, h) => h.setIn(d, atlasItem('t-birch', 'figure'), { kind: 'prose', text: 'Birch.' }) },
  { rule: 'V70', name: 'a map block whose view is off the map', data: (d, h) => h.setIn(d, atlasLesson('l1', 'flow', 0, 'show', 1, 'view'), [999, 60, 3]) },
  { rule: 'V70', name: 'a flags block of a place the group does not have', data: (d, h) => h.setIn(d, atlasLesson('l1', 'flow', 0, 'show', 2, 'places'), ['narnia']) },
  { rule: 'V70', name: 'a flags block of a place that has no flag', data: (d, h) => h.setIn(d, atlasLesson('l1', 'flow', 0, 'show', 2, 'places'), ['speck']) },
  { rule: 'V70', name: 'a flags block of a group that is not there', data: (d, h) => h.setIn(d, atlasLesson('l1', 'flow', 0, 'show', 2, 'gen'), 'narnia') },
  { rule: 'V74', name: 'a flag above the question that asks for it, with the country\'s name beside it', data: (d, h) => h.setIn(d, atlasItem('t-birch', 'blocks'), [{ kind: 'flags', gen: 'g-isles', places: ['birch'], names: true }]) },
  { rule: 'V74', name: 'a map with the right place lit above the question that asks for it', data: (d, h) => h.setIn(d, atlasItem('t-birch', 'blocks'), [{ kind: 'map', region: 'isles', lit: ['birch'] }]) },
  { rule: 'V74', name: 'a map with a neighbor of the place asked about lit above its neighbors and water', data: (d, h) => h.setIn(d, atlasItem('b-alder', 'blocks'), [{ kind: 'map', region: 'isles', lit: ['birch'] }]) },
  { rule: 'V74', name: 'a place ask whose slip the subject does not list', data: (d, h) => h.setIn(d, atlasItem('t-birch', 'asks', 0, 'slips'), { alder: 'nowhere' }) },
  { rule: 'V74', name: 'a lit place named from memory under a spoken block as well', data: (d, h) => h.updateIn(d, atlasItem('n-cedar', 'blocks'), blocks => [...blocks, { kind: 'spoken', text: 'What is the lit country called?' }]) },
  { rule: 'V74', name: 'a lit place named from memory with no place lit', data: (d, h) => h.removeIn(d, atlasItem('n-cedar', 'blocks', 0, 'lit')) },
  { rule: 'V83', name: 'a place ask in a timed group', data: (d, h) => h.setIn(h.setIn(d, atlasMeta('timed'), true), atlasLesson('l1', 'flow', 3, 'set', 'seconds'), 15) },
  // a group of places made into questions, and a check drawn from it by form
  { rule: 'V70', name: 'a group of places of a region the map data does not have', data: (d, h) => h.setIn(d, atlasGen('g-isles', 'places', 'map'), 'narnia') },
  { rule: 'V70', name: 'a group that lists a place the map does not have', data: (d, h) => h.setIn(d, atlasGen('g-isles', 'places', 'list', 0, 'id'), 'narnia') },
  { rule: 'V70', name: 'a group that lists one place twice', data: (d, h) => h.updateIn(d, atlasGen('g-isles', 'places', 'list'), list => [...list, list[0]]) },
  { rule: 'V70', name: 'a group asked in a form that is not one of the four', data: (d, h) => h.updateIn(d, atlasGen('g-isles', 'places', 'forms'), forms => [...forms, 'dance']) },
  { rule: 'V70', name: 'a group asked in a form it has no words for', data: (d, h) => h.removeIn(d, atlasGen('g-isles', 'places', 'words', 'border')) },
  { rule: 'V70', name: 'a place of a group with no reason', data: (d, h) => h.removeIn(d, atlasGen('g-isles', 'places', 'list', 0, 'reason')) },
  { rule: 'V70', name: 'a place of a group with no accepted spellings', data: (d, h) => h.setIn(d, atlasGen('g-isles', 'places', 'list', 0, 'accept'), []) },
  { rule: 'V70', name: 'a group whose slip is keyed by a place the map does not have', data: (d, h) => h.setIn(d, atlasGen('g-isles', 'places', 'slips'), { narnia: 'next-door' }) },
  { rule: 'V70', name: 'a group in a strand the subject does not have', data: (d, h) => h.setIn(d, atlasGen('g-isles', 'strand'), 'narnia') },
  { rule: 'V70', name: 'a group asked in a form that is not a value of the subject\'s facet', data: (d, h) => h.updateIn(d, atlasMeta('facets', 'form', 'values'), values => values.filter(v => v.id !== 'flag')) },
  { rule: 'V70', name: 'a check drawn from a group in a form the group does not ask', data: (d, h) => h.setIn(d, atlasLesson('l2', 'check', 'items', 'draw', 'split'), { tap: 2, dance: 1 }) },
  { rule: 'V70', name: 'a check drawn from a group whose split asks nothing', data: (d, h) => h.setIn(d, atlasLesson('l2', 'check', 'items', 'draw', 'split'), { tap: 0, name: 0 }) },
  { rule: 'V70', name: 'a check drawn from a group that keeps a place the group does not have', data: (d, h) => h.setIn(d, atlasLesson('l2', 'check', 'items', 'draw', 'only'), { tap: ['narnia'] }) },
  { rule: 'V70', name: 'a check drawn from a group that keeps a place to a form it cannot be asked in', data: (d, h) => h.setIn(d, atlasLesson('l2', 'check', 'items', 'draw', 'only'), { flag: ['speck'] }) },
  { rule: 'V70', name: 'a check drawn from a group that asks more of a form than the group has places for', data: (d, h) => h.setIn(d, atlasLesson('l2', 'check', 'items', 'draw', 'split'), { flag: 4 }) },
  { rule: 'V70', name: 'a check drawn from a generator the subject does not have', data: (d, h) => h.setIn(d, atlasLesson('l2', 'check', 'items', 'draw', 'gen'), 'narnia') },
  { rule: 'V70', name: 'a group named in a lesson with a form it does not ask', data: (d, h) => h.setIn(d, atlasLesson('l2', 'flow', 1, 'set', 'items', 0, 'with'), { form: 'dance' }) },
  { rule: 'V70', name: 'a group named in a lesson for more places than it can offer in that form', data: (d, h) => h.setIn(d, atlasLesson('l2', 'flow', 1, 'set', 'items', 1, 'n'), 4) },
  { rule: 'V70', name: 'a group named in a lesson with a place it does not have', data: (d, h) => h.setIn(d, atlasLesson('l2', 'flow', 1, 'set', 'items', 0, 'with'), { place: 'narnia' }) },
  { rule: 'V76', name: 'a check drawn from a group whose split is over the most of a form the subject allows',
    data: (d, h) => h.setIn(h.setIn(d, atlasMeta('mix'), [{ facet: 'form', value: 'flag', max: 0.5 }]), atlasLesson('l2', 'check', 'items', 'draw', 'split'), { tap: 1, flag: 3 }) },
  { rule: 'V72', name: 'a pass rule that needs more of a form than the drawn check asks', data: (d, h) => h.setIn(d, atlasLesson('l2', 'check', 'pass'), [{ where: { form: 'flag' }, right: { min: 2 } }]) },
  { rule: 'V72', name: 'a pass rule that counts a form the subject does not have', data: (d, h) => h.setIn(d, atlasLesson('l2', 'check', 'pass'), [{ where: { form: 'dance' }, right: { min: 1 } }]) },
  { rule: 'V74', name: 'a group that lists one spelling of a place twice', data: (d, h) => h.setIn(d, atlasGen('g-isles', 'places', 'list', 0, 'accept'), ['Alder', 'alder']) },
  { rule: 'V74', name: 'a group whose slip the subject does not list', data: (d, h) => h.setIn(d, atlasGen('g-isles', 'places', 'slips'), { alder: 'nowhere' }) },
  { rule: 'V83', name: 'a group of places in a timed group', data: (d, h) => h.setIn(h.setIn(d, atlasMeta('timed'), true), atlasLesson('l2', 'flow', 1, 'set', 'seconds'), 15) }
];

// Rules with no seeded fault of their own, and why
export const NO_CONTROL = {};
// The number of controls is pinned: a control taken away shows as a count below this.
export const CONTROL_COUNT = CONTROLS.length;
export const PINNED_CONTROL_COUNT = 189;
