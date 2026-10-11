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
  { rule: 'V36', name: 'a trap\'s line opens with a bare verdict', data: (d, h) => h.setIn(d, tillGen('t-cart', 'asks', 1, 'traps', 0, 'then'), 'Wrong. That is the answer you get when the roast chicken is left out.') },
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
  { rule: 'V70', name: 'a number with no tolerance', data: (d, h) => h.removeIn(d, tillGen('t-cart', 'asks', 1, 'tol')) },
  { rule: 'V70', name: 'a frame with two blanks and a one-number answer', data: (d, h) => h.setIn(d, tillItem('t-recipe', 'asks', 0, 'answer'), 3) },
  { rule: 'V70', name: 'the estimate check on a group with no estimate to compare', data: (d, h) => h.setIn(d, tillLesson('l1', 'flow', 4, 'set', 'support'), { estimateCheck: true }) },
  { rule: 'V70', name: 'a document of a form that is not one', data: (d, h) => h.setIn(d, tillLesson('l1', 'flow', 0, 'show', 0, 'form'), 'menu') },
  { rule: 'V70', name: 'a bar part with no percent', data: (d, h) => h.removeIn(d, tillLesson('l1', 'flow', 1, 'show', 1, 'data', 'parts', 0, 'pct')) },
  { rule: 'V71', name: 'a part with no lesson in a subject that says it is complete', data: (d, h) => h.removeIn(d, lesson('l2')) },
  { rule: 'V72', name: 'a check question that is also in a group', data: (d, h) => h.setIn(d, lesson('l1', 'check', 'items', 0), 'c-1') },
  { rule: 'V73', name: 'a why padded far past the reading share', data: (d, h) => h.setIn(d, lesson('l2', 'why'), padding) },
  { rule: 'V74', name: 'a wrong option with no line of its own and no slip',
    data: (d, h) => h.setIn(d, item('c-3', 'asks', 0, 'then'), { bring: 'You carry it and stay dry if the rain comes.' }) },
  { rule: 'V74', name: 'a number whose answer names a value the question never makes', data: (d, h) => h.setIn(d, tillItem('t-leave', 'asks', 1, 'answer'), 'balance') },
  { rule: 'V74', name: 'a trap that names a slip the subject does not have', data: (d, h) => h.setIn(d, tillItem('t-leave', 'asks', 1, 'traps', 0, 'slip'), 'mystery') },
  { rule: 'V74', name: 'an estimate asked after the exact answer', data: (d, h) => h.updateIn(d, tillGen('t-cart', 'asks'), asks => [asks[1], asks[0]]) },
  { rule: 'V75', name: 'a number slip that lands on the answer', data: (d, h) => h.setIn(d, tillGen('t-cart', 'asks', 1, 'traps', 0, 'value'), 'total') },
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
    data: (d, h) => h.updateIn(d, ledgerMeta('own', 'sheet', 'fields'), fields => [...fields, { id: 'acct', label: 'Account number', type: 'number' }]) },
  { rule: 'V81', name: 'a fund row with a field "Online banking password"',
    data: (d, h) => h.updateIn(d, ledgerMeta('own', 'sheet', 'rows', 'fields'), fields => [...fields, { id: 'secret', label: 'Online banking password', type: 'text', optional: true }]) },
  // papers, a form, the private sheet, the dated changes (step 4)
  { rule: 'V70', name: 'a form field with no tolerance', data: (d, h) => h.removeIn(d, ledgerItem('l-sheet', 'asks', 0, 'fields', 0, 'tol')) },
  { rule: 'V70', name: 'a ref block that names a ref the subject does not have', data: (d, h) => h.setIn(d, ledgerLesson('l1', 'flow', 0, 'show', 7, 'ref'), 'nope') },
  { rule: 'V70', name: 'an own step that names a private form the subject does not have', data: (d, h) => h.setIn(d, ledgerLesson('l1', 'flow', 3, 'own'), 'nothing') },
  { rule: 'V70', name: 'a private form that leaves out a field the app reads', data: (d, h) => h.removeIn(d, ledgerMeta('own', 'sheet', 'fields', 2)) },
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
  { rule: 'V74', name: 'a written line with no model line to compare with', data: (d, h) => h.removeIn(d, accountItem('h-1', 'asks', 1, 'model')) },
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
  { rule: 'V50', name: 'a checklist heading uses the engine\'s own word "item"', data: (d, h) => h.setIn(d, accountMeta('rules', 'act', 'heading'), 'What counts as an item') }
];

// Rules with no seeded fault of their own, and why
export const NO_CONTROL = {};
