// The seeded faults, one or more per rule, as pure functions from the exemplar data to faulty data (nothing is written to disk).
// Each control names the rule that must go red and no other (also: rules that cannot be kept green by this fault, with the reason).
// only: the rule is run by itself because the shape rule (V0) catches the same fault first and would skip it.
// keepLock: leave the lock as it was for the exemplar, so the fault shows up as a difference from it.
const P = 'psychology';
const U = 'u2';
const card = id => ['subjects', P, 'cards', U, { id }];
const kase = id => ['subjects', P, 'cases', U, { id }];
const unit = (...rest) => ['subjects', P, 'units', U, ...rest];
const part = (id, field) => unit('parts', { id }, field);
const meta = (...rest) => ['subjects', P, 'meta', ...rest];
const key = (...rest) => ['subjects', P, 'key', ...rest];
const rung = ask => ['subjects', P, 'units', U, 'drill', 'rungs', { ask }];

// text with one more sentence on the end, whether the field holds one paragraph or several
const appended = sentence => value => Array.isArray(value) ? [...value, sentence] : `${value} ${sentence}`;
const prepended = sentence => value => Array.isArray(value) ? [sentence, ...value] : `${sentence} ${value}`;
const swap = (list, a, b) => list.map(x => x === a ? b : x === b ? a : x);
const without = (list, x) => list.filter(y => y !== x);
const find = (list, id) => list.find(x => x.id === id);

// A card the trimmed unit no longer carries, added to the unit so that a control can still break its rule (inside a part, after another card).
const withCard = (h, d, partId, afterId, added) => {
  const cards = h.updateIn(d, ['subjects', P, 'cards', U], c => [...c, added]);
  return h.updateIn(cards, part(partId, 'cards'), ids => ids.flatMap(id => id === afterId ? [id, added.id] : [id]));
};
const AGAIN = { id: 'again-dissonance', kind: 'again', outcome: 'dissonance', link: 'Here is a second case.', first: 'sauce', second: 'shops', step: 'R1',
  instruction: 'Find what the two cases share.', prompt: { kind: 'phrase', answer: 'One order makes no difference to anyone' }, shared: 'Both gave a reason afterward for why it is fine.' };
const PORTRAIT = { id: 'portrait-dissonance', kind: 'portrait', outcome: 'dissonance', link: 'Here is the rest of the picture.', typical: ['The act comes first and the reason second.'],
  not: 'Doing something that does not fit a belief is not yet the name.', wild: ['"It hardly counts."'], self: 'You will hear it in your own head.', ask: '"What would I do if that reason were not available?"' };
const REFUTE = { id: 'refute-mismatch', kind: 'refute', about: 'dissonance', h: 'A wrong idea', link: 'A wrong idea is common.', idea: '"He says one thing and does another."',
  verdict: 'This is wrong.', right: 'Saying one thing and doing another is not enough.', testedBy: ['claim-mismatch'] };
const LENS = { id: 'lens', kind: 'lens', h: 'The story never decides the answer', link: 'The story tells you nothing.', body: 'Every case has a story and the reasoning under it.',
  fixed: ['what the reasoning does'], varies: ['the topic'] };
const TRANSFER = { id: 'transfer', kind: 'transfer', h: 'Where would you meet this?', link: 'The last step is yours.', ask: 'Pick one of the five and name an occasion of your own.',
  prompts: ['dissonance', 'sunkcost', 'confbias', 'motivated', 'fair'].map(outcome => ({ outcome, occasion: 'An occasion of your own.' })), places: ['At home'] };


// The units of the fixtures that stand for the other kinds (kind-fixtures.mjs)
const FACT = ['subjects', 'facttest'], PROC = ['subjects', 'proctest'], GATE = ['subjects', 'gatetest'];
const fcard = id => [...FACT, 'cards', 'u1', { id }];
const funit = (...rest) => [...FACT, 'units', 'u1', ...rest];
const pcard = id => [...PROC, 'cards', 'u1', { id }];
const pcase = id => [...PROC, 'cases', 'u1', { id }];
const punit = (...rest) => [...PROC, 'units', 'u1', ...rest];
const fpart = (id, field) => funit('parts', { id }, field);
const ppart = (id, field) => punit('parts', { id }, field);

export const CONTROLS = [
  { rule: 'V0', name: 'a card holds a field the shape does not have',
    data: (d, h) => h.setIn(d, [...card('orient'), 'bogus'], 'x') },
  { rule: 'V0', name: 'the subject lists a unit that has no unit record',
    data: (d, h) => h.updateIn(d, meta('units'), units => [...units, 'u9']) },
  { rule: 'V1', name: 'a question does not end in a question mark',
    data: (d, h) => h.setIn(d, key('branches', 'reasoning', { code: 'R1' }, 'q'), 'What does the reasoning do') },
  { rule: 'V2', name: 'a card types an outcome name by hand',
    data: (d, h) => h.updateIn(d, [...card('meet-sunkcost'), 'explain'], appended('Fair reasoning comes next.')) },
  { rule: 'V3', name: 'a token names a ledger entry that does not exist',
    data: (d, h) => h.updateIn(d, [...card('meet-sunkcost'), 'explain'], appended('See {test:nosuch~entry}.')) },
  { rule: 'V4', name: 'a card shows a step code',
    data: (d, h) => h.updateIn(d, [...card('meet-sunkcost'), 'explain'], appended('Ask R1 of every case.')) },
  { rule: 'V5', name: 'a card uses an answer before the card that teaches it',
    data: (d, h) => h.updateIn(d, [...card('meet-dissonance'), 'link'], appended('This answers {a:R1.fixed} elsewhere.')) },
  { rule: 'V6', name: 'no drill item uses the taught term',
    data: (d, h) => h.updateIn(d, ['subjects', P, 'cases', U, { id: 'claim-mismatch' }, 'fault'], v => JSON.parse(JSON.stringify(v).replaceAll('{t:cd}', 'that jolt'))) },
  { rule: 'V7', name: 'a card names an outcome before its meet card',
    data: (d, h) => h.updateIn(d, [...card('meet-dissonance'), 'link'], appended('Later you will need {needs:sunkcost}.')) },
  { rule: 'V8', name: 'a card uses another name for an outcome',
    data: (d, h) => h.updateIn(d, [...card('meet-fair'), 'explain'], appended('Some call this keeping an open mind.')) },
  { rule: 'V9', name: 'a check carries an answer id of its own', only: true,
    data: (d, h) => h.setIn(d, [...card('check-does'), 'ask', 'among'], ['made-up']) },
  { rule: 'V10', name: 'the first card is not orient',
    data: (d, h) => h.updateIn(d, part('p1', 'cards'), c => swap(c, 'orient', 'term-cd')) },
  { rule: 'V11', name: 'a portrait comes after the check',
    // the trimmed unit has no portrait cards: one is added after the first check
    data: (d, h) => withCard(h, d, 'p1', 'check-dissonance', PORTRAIT) },
  { rule: 'V12', name: 'a meet card shows a case that is not clean',
    data: (d, h) => h.setIn(d, [...kase('sauce'), 'tier'], 'varied') },
  { rule: 'V13', name: 'an again card quotes a first case that has no name',
    // the trimmed unit has no again cards: one is added after the first meet card
    data: (d, h) => h.updateIn(withCard(h, d, 'p1', 'meet-dissonance', AGAIN), kase('sauce'), c => { const { name, ...rest } = c; return rest; }) },
  { rule: 'V13', name: 'an again card shows two cases in one setting',
    data: (d, h) => h.setIn(withCard(h, d, 'p1', 'meet-dissonance', AGAIN), [...kase('shops'), 'setting'], 'work') },
  { rule: 'V14', name: 'a look-alike prompt names a case the card does not show',
    data: (d, h) => h.setIn(d, [...card('look-dissonance-sunkcost'), 'prompt', 'answer'], 'payroll') },
  { rule: 'V15', name: 'a ledger test contains an outcome name token',
    data: (d, h) => h.updateIn(d, unit('ledger', { id: 'dissonance~fair' }, 'test'), appended('Is it {o:fair}?')) },
  { rule: 'V16', name: 'no check follows the question card by its step',
    data: (d, h) => h.setIn(d, [...card('check-does'), 'after'], 'fair') },
  { rule: 'V17', name: 'a purpose names a topic of a case',
    data: (d, h) => h.updateIn(d, key('branches', 'reasoning', { code: 'R1' }, 'purpose'), appended('Think of a sauce.')) },
  { rule: 'V18', name: 'a worked card has no single right choice',
    data: (d, h) => h.setIn(d, [...card('worked-tasting'), 'hold', 'prompt', 'answer'], 'nonesuch') },
  { rule: 'V20', name: 'two teaching steps with no check between them',
    data: (d, h) => h.updateIn(d, part('p1', 'cards'), c => { const rest = without(c, 'check-dissonance'); const at = rest.indexOf('meet-sunkcost'); return [...rest.slice(0, at + 1), 'check-dissonance', ...rest.slice(at + 1)]; }) },
  { rule: 'V21', name: 'the link after a check gives away its marked words',
    data: (d, h) => h.updateIn(d, [...card('meet-sunkcost'), 'link'], appended('"One order makes no difference to anyone".')) },
  { rule: 'V22', name: 'a refute card has no source',
    // the trimmed unit has no refute cards, so no wrong-idea sources either: a refute card is added with none
    data: (d, h) => withCard(h, d, 'p1', 'check-sunkcost', REFUTE) },
  { rule: 'V23', name: 'an exception card has the same name on both sides',
    data: (d, h) => h.setIn(d, [...card('exc-convert'), 'looksLike'], 'dissonance') },
  { rule: 'V24', name: 'a card continues one that is not before it',
    data: (d, h) => h.setIn(d, [...card('term-cd'), 'continues'], 'meet-fair') },
  { rule: 'V25', name: 'the unit closes with transfer before recap',
    // the trimmed unit closes with its recap alone: a transfer card is added ahead of it
    data: (d, h) => h.setIn(h.updateIn(d, ['subjects', P, 'cards', U], c => [...c, TRANSFER]), part('p3', 'close'), ['transfer', 'recap']) },
  { rule: 'V26', name: 'a card is in no part',
    // a card of the unit that no part lists (added, so that no other rule needs the card it would take out)
    data: (d, h) => h.updateIn(d, ['subjects', P, 'cards', U], c => [...c, { ...find(c, 'recap'), id: 'recap-stray' }]) },
  { rule: 'V27', name: 'a card has no link', only: true,
    data: (d, h) => h.removeIn(d, [...card('meet-sunkcost'), 'link']) },
  { rule: 'V28', name: 'a card points at the next unit',
    data: (d, h) => h.updateIn(d, [...card('meet-sunkcost'), 'explain'], appended('You will see this again in the next unit.')) },
  { rule: 'V29', name: 'the validator source limits how many words a text may hold', keepLock: true,
    input: input => ({ ...input, validatorSources: { ...input.validatorSources, 'seeded.mjs': ['if (words.', 'length <= 40) { trim(); }'].join('') } }) },
  { rule: 'V30', name: 'marked words are not in the case text',
    data: (d, h) => h.setIn(d, [...kase('shops'), 'cues', 'R1'], 'words that are not in the text') },
  { rule: 'V31', name: 'a specimen route leaves the wrong outcome',
    data: (d, h) => h.setIn(d, ['subjects', P, 'specimens', 0, 'route', 'R1'], ['follows']) },
  { rule: 'V32', name: 'a drill case is a teaching case',
    data: (d, h) => h.setIn(d, [...kase('queue'), 'use'], 'teach') },
  { rule: 'V33', name: 'a case is set in an area not in subject.settings',
    data: (d, h) => h.setIn(d, [...kase('queue'), 'setting'], 'the moon') },
  { rule: 'V34', name: 'a misleading case in a card before its outcome check',
    // the one card before the first check that shows a case of that outcome is the term card, whose case is given the outcome here
    data: (d, h) => h.updateIn(d, kase('dinner'), c => ({ ...c, outcome: 'dissonance', tier: 'misleading', route: { D1: ['reasoning'], R1: ['addstory'] } })) },
  { rule: 'V35', name: 'a route case has no reason for a question',
    data: (d, h) => h.removeIn(d, [...kase('payroll'), 'reason', 'R1']) },
  { rule: 'V36', name: 'a reason opens with a bare verdict',
    data: (d, h) => h.updateIn(d, [...kase('payroll'), 'reason', 'R1'], prepended('Correct.')) },
  { rule: 'V59', name: 'a portrait in an action subject says nothing about what to do', also: ['V25', 'V37', 'V44'],
    // action: true also turns on the plan card (V25), legitimate cases (V37) and a second return per name (V44)
    data: (d, h) => h.setIn(d, meta('action'), true) },
  { rule: 'V37', name: 'an action subject has no way to mark a legitimate outcome', also: ['V25', 'V44', 'V59'],
    // action: true also turns on the plan card (V25), a second return per name (V44) and what to do on each name (V59); the fault cannot avoid them
    data: (d, h) => h.setIn(d, meta('action'), true) },
  { rule: 'V38', name: 'the drill stages are out of order',
    data: (d, h) => h.updateIn(d, unit('drill', 'rungs'), r => [r[1], r[0], ...r.slice(2)]) },
  { rule: 'V39', name: 'no question is asked alone in the piece stage',
    data: (d, h) => h.updateIn(d, rung('piece'), r => ({ ...r, items: r.items.map(g => g.map(i => i && i.step ? i.case : i)) })) },
  { rule: 'V40', name: 'a drill group holds a single case',
    data: (d, h) => h.updateIn(d, rung('route'), r => ({ ...r, items: r.items.flatMap(g => g.map(i => [i])) })) },
  { rule: 'V41', name: 'the drill never draws from the assumed unit',
    data: (d, h) => h.updateIn(d, unit('drill', 'rungs'), rs => rs.map(r => ({ ...r, items: r.items.map(g => g.filter(i => !i.earlier)).filter(g => g.length) }))) },
  { rule: 'V42', name: 'the piece stage has no tell item',
    data: (d, h) => h.updateIn(d, rung('piece'), r => ({ ...r, items: r.items.map(g => g.filter(i => !i.tell)).filter(g => g.length) })) },
  { rule: 'V43', name: 'the claim stage asks a case that is not a claim',
    data: (d, h) => h.updateIn(d, rung('claim'), r => ({ ...r, items: [...r.items, ['queue']] })) },
  { rule: 'V44', name: 'a name has fewer fresh cases for later days',
    // every return case of one name moves into the drill, so that name has none left for later days
    data: (d, h) => {
      const cases = d.subjects[P].cases[U], outcomeOf = id => cases.find(c => c.id === id).outcome;
      const gone = d.subjects[P].units[U].drill.returns.filter(id => outcomeOf(id) === outcomeOf('ret-chair'));
      const fewer = h.updateIn(d, unit('drill', 'returns'), r => r.filter(id => !gone.includes(id)));
      return h.updateIn(fewer, rung('piece'), r => ({ ...r, items: [...r.items, gone] }));
    } },
  { rule: 'V45', name: 'the unit revision goes up with no history line',
    data: (d, h) => h.setIn(d, unit('rev'), 2) },
  { rule: 'V45', name: 'a unit is of standard 0, which no longer exists',
    data: (d, h) => h.setIn(d, unit('standard'), 0) },
  { rule: 'V46', name: 'content changed and the lock was not regenerated', keepLock: true,
    data: (d, h) => h.updateIn(d, meta('blurb'), appended('Changed after the lock was written.')) },
  { rule: 'V46', name: 'deployed content changed without a higher revision', keepLock: true,
    input: input => ({ ...input, committedLock: { standard: 1, subjects: {}, units: { [`${P}/${U}`]: { rev: input.data.subjects[P].units[U].rev, standard: 1, fp: 'sha256:' + '0'.repeat(64), deployed: '2026-10-20' } } } }) },   // the unit's own revision, deployed with other content
  { rule: 'V47', name: 'a script file is over the line limit', keepLock: true,
    input: input => ({ ...input, site: { ...input.site, files: [...input.site.files, { path: 'subjects/psychology/u9.cards-1.js', lines: 801 }] } }) },
  { rule: 'V49', name: 'two units share a drill key',
    data: (d, h) => h.setIn(d, ['subjects', P, 'units', 'u3', 'drill', 'key'], d.subjects[P].units[U].drill.key) },
  { rule: 'V60', name: 'a case story is spelled the British way',
    data: (d, h) => h.updateIn(d, kase('sauce'), c => ({ ...c, text: `${c.text} The walls were a pale colour.` })) },
  { rule: 'V50', name: 'a card uses a word the app avoids',
    data: (d, h) => h.updateIn(d, [...card('meet-sunkcost'), 'explain'], appended('This lesson is about reasoning.')) },
  { rule: 'V51', name: 'a second lens card',
    // the trimmed unit has no lens card: two are added after the first meet card
    data: (d, h) => withCard(h, withCard(h, d, 'p1', 'meet-dissonance', LENS), 'p1', 'meet-dissonance', { ...LENS, id: 'lens-again' }) },
  { rule: 'V52', name: 'two cases of one outcome share a topic',
    data: (d, h) => h.setIn(d, [...kase('ticket-tout'), 'topic'], d.subjects[P].cases[U].find(c => c.id === 'sauce').topic) },
  { rule: 'V53', name: 'a case lists an extra answer that loses to nothing',
    data: (d, h) => h.setIn(d, [...kase('sauce'), 'also'], ['scrutiny']) },
  { rule: 'V54', name: 'no route case echoes a teaching case',
    data: (d, h) => h.updateIn(d, ['subjects', P, 'cases', U], cs => cs.map(({ echo, ...rest }) => rest)) },
  { rule: 'V55', name: 'no ledger entry is first separated by the taught question', also: ['V15'],
    // the ledger step is also what V15 checks against the key's answers, so the same fault turns both red
    data: (d, h) => h.updateIn(d, unit('ledger'), l => l.map(e => ({ ...e, step: 'D1' }))) },
  { rule: 'V56', name: 'two units share a title',
    data: (d, h) => h.setIn(d, ['subjects', P, 'units', 'u3', 'title'], d.subjects[P].units[U].title) },

  /* ----- section 15: the legit marker, and the rules of the other kinds of unit ----- */
  { rule: 'V0', name: 'an outcome is marked legit with something that is not true',
    data: (d, h) => h.setIn(d, key('outcomes', { id: 'fair' }, 'legit'), 'yes') },
  { rule: 'V0', name: 'a ledger entry of a classification unit names no step',
    data: (d, h) => h.removeIn(d, unit('ledger', { id: 'dissonance~fair' }, 'step')) },
  { rule: 'V37', name: 'a stage of an action subject asks about cases and none is a case where nothing is wrong', also: ['V25', 'V44', 'V59'],
    // action: true also turns on the plan card (V25), a second return per name (V44) and what to do on each name (V59); the fault cannot avoid them
    data: (d, h) => {
      const action = h.setIn(h.setIn(d, meta('action'), true), key('outcomes', { id: 'fair' }, 'legit'), true);
      return h.updateIn(action, rung('route'), r => ({ ...r, items: r.items.map(g => g.filter(i => i !== 'fair')).filter(g => g.length) }));
    } },
  { rule: 'V32', name: 'a baseline case is in no subject.baseline list',
    data: (d, h) => h.updateIn(d, ['subjects', P, 'cases', U], cs => [...cs, { id: 'base-x', use: 'baseline', tier: 'clean', setting: 'work', topic: 'x', text: 'A made-up case.' }]) },
  { rule: 'V58', name: 'a held finding no longer fires', input: input => ({ ...input, held: { held: ['V2 psychology: a line that is no longer typed'] }, committedHeld: { held: ['V2 psychology: a line that is no longer typed'] } }) },
  { rule: 'V58', name: 'a finding was added to the held list', input: input => ({ ...input, held: { held: ['V2 psychology: a new finding'] }, committedHeld: { held: [] } }) },

  { base: 'fact', rule: 'V0', name: 'a fact check names a row that is on another facts card',
    data: (d, h) => h.setIn(d, [...fcard('chk-t-house'), 'ask', 'row'], 'n-house') },
  { base: 'fact', rule: 'V0', name: 'a solved card of a fact unit has a field the shape does not have',
    data: (d, h) => h.setIn(d, [...fcard('facts-terms'), 'bogus'], 'x') },
  { base: 'fact', rule: 'V3', name: 'a {f:} token names a fact that is not in the unit', only: true,
    data: (d, h) => h.updateIn(d, [...fcard('look-terms'), 'difference'], appended('See {f:nosuch}.')) },
  { base: 'fact', rule: 'V10', name: 'the orient card of a fact unit draws a preview map', only: true,
    data: (d, h) => h.setIn(d, [...fcard('orient'), 'map'], { branch: 'x' }) },
  { base: 'fact', rule: 'V25', name: 'a fact unit does not close with its recap',
    data: (d, h) => h.setIn(d, fpart('p2', 'close'), []) },
  { base: 'fact', rule: 'V38', name: 'a fact unit has a stage that is not the fact stage',
    data: (d, h) => h.updateIn(d, funit('drill', 'rungs'), r => [...r, { ask: 'name', items: [[{ fact: 't-house' }]] }]) },
  { base: 'fact', rule: 'V39', name: 'a fact is asked by no item of the fact stage',
    data: (d, h) => h.updateIn(d, funit('drill', 'rungs', { ask: 'fact' }, 'items'), items => items.filter(g => !g.some(i => i.fact === 'n-states'))) },
  { base: 'fact', rule: 'V44', name: 'two facts the ledger pairs are asked in different groups',
    data: (d, h) => h.updateIn(d, funit('drill', 'rungs', { ask: 'fact' }, 'items'), items => items.flatMap(g => g.some(i => i.fact === 't-house') ? g.map(i => [i]) : [g])) },
  { base: 'fact', rule: 'V57', name: 'a fact has no check that asks it from memory',
    data: (d, h) => h.updateIn(h.updateIn(d, fpart('p1', 'cards'), c => without(c, 'chk-t-house')), [...FACT, 'cards', 'u1'], c => c.filter(x => x.id !== 'chk-t-house')) },
  { base: 'fact', rule: 'V57', name: 'two facts of one card have the same answer',
    data: (d, h) => h.setIn(d, [...fcard('facts-terms'), 'rows', { id: 't-senate' }, 'a'], 'Two years') },

  { base: 'procedure', rule: 'V0', name: 'a wrong choice of a problem names no slip',
    data: (d, h) => h.updateIn(d, [...pcase('dl-of1'), 'answer', 'choices'], cs => cs.map(x => x.id === d.subjects.proctest.cases.u1.find(c => c.id === 'dl-of1').answer.right ? x : { id: x.id, text: x.text })) },
  { base: 'procedure', rule: 'V0', name: 'a solved card has no hold',
    data: (d, h) => h.removeIn(d, [...pcard('solved-of-1'), 'hold']) },
  { base: 'procedure', rule: 'V18', name: 'a procedure has one solved card',
    data: (d, h) => h.setIn(d, [...pcard('solved-of-2'), 'outcome'], 'change') },
  { base: 'procedure', rule: 'V18', name: 'the step that carries the idea has a why of its own',
    data: (d, h) => h.setIn(d, [...pcard('solved-of-1'), 'steps', d.subjects.proctest.cards.u1.find(c => c.id === 'solved-of-1').hold.step, 'why'], 'A second copy of the reason.') },
  { base: 'procedure', rule: 'V38', name: 'the stages of a procedure unit are out of order',
    data: (d, h) => h.updateIn(d, punit('drill', 'rungs'), r => [r[1], r[0], r[2]]) },
  { base: 'procedure', rule: 'V39', name: 'a procedure is never the problem of a last item', also: ['V32', 'V40'],
    // the problems taken out are then used by nothing (V32), and what is left of each group is a single problem (V40)
    data: (d, h) => h.updateIn(d, punit('drill', 'rungs', { ask: 'last' }, 'items'), items => items.map(g => g.filter(id => !id.startsWith('dl-ch')))) },
  { base: 'procedure', rule: 'V40', name: 'a group of problems is held together by no look-alike pair',
    data: (d, h) => h.updateIn(d, punit('drill', 'rungs', { ask: 'whole' }, 'items'), items => items.flatMap(g => g.map(id => [id]))) },
  { base: 'procedure', rule: 'V44', name: 'a procedure has too few problems for later days', also: ['V32'],   // the problem left out is then used by nothing
    // every return problem of one procedure is left out
    data: (d, h) => {
      const cases = d.subjects.proctest.cases.u1, outcomeOf = id => cases.find(c => c.id === id).outcome;
      return h.updateIn(d, punit('drill', 'returns'), r => r.filter(id => outcomeOf(id) !== outcomeOf('rt-of3')));
    } },

  { base: 'gate', rule: 'V38', name: 'a gate unit has a name stage',
    data: (d, h) => h.updateIn(d, [...GATE, 'units', 'u1', 'drill', 'rungs'], r => [{ ask: 'name', items: [['d-1']] }, ...r]) }
];

// Rules with no control, and why. A rule must be in CONTROLS or here.
export const NO_CONTROL = {};
