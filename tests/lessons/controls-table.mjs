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

// a unit of an older standard, registered but not rebuilt (F5)
const withOldUnit = (id, extra) => (data, h) => h.setIn(data, ['subjects', P, 'units', id], { id, standard: 0, rev: 0, ...extra });
const listedOld = id => input => ({ ...input, standard0: { units: [`${P}/${id}`] }, committedStandard0: { units: [`${P}/${id}`] } });

export const CONTROLS = [
  { rule: 'V0', name: 'a card holds a field the shape does not have',
    data: (d, h) => h.setIn(d, [...card('orient'), 'bogus'], 'x') },
  { rule: 'V1', name: 'a question does not end in a question mark',
    data: (d, h) => h.setIn(d, key('branches', 'reasoning', { code: 'R1' }, 'q'), 'What does the reasoning do') },
  { rule: 'V2', name: 'a card types an outcome name by hand',
    data: (d, h) => h.updateIn(d, [...card('lens'), 'body'], appended('Fair reasoning comes next.')) },
  { rule: 'V3', name: 'a token names a ledger entry that does not exist',
    data: (d, h) => h.updateIn(d, [...card('lens'), 'body'], appended('See {test:nosuch~entry}.')) },
  { rule: 'V4', name: 'a card shows a step code',
    data: (d, h) => h.updateIn(d, [...card('lens'), 'body'], appended('Ask R1 of every case.')) },
  { rule: 'V5', name: 'a card uses an answer before the card that teaches it',
    data: (d, h) => h.updateIn(d, [...card('meet-dissonance'), 'link'], appended('The key answers {a:R1.fixed} elsewhere.')) },
  { rule: 'V6', name: 'no drill item uses the taught term',
    data: (d, h) => h.updateIn(d, ['subjects', P, 'cases', U, { id: 'claim-mismatch' }, 'fault'], v => JSON.parse(JSON.stringify(v).replaceAll('{t:cd}', 'that jolt'))) },
  { rule: 'V7', name: 'a card names an outcome before its meet card',
    data: (d, h) => h.updateIn(d, [...card('meet-dissonance'), 'link'], appended('Later you will need {needs:sunkcost}.')) },
  { rule: 'V8', name: 'a card uses another name for an outcome',
    data: (d, h) => h.updateIn(d, [...card('portrait-fair'), 'self'], appended('Some call this keeping an open mind.')) },
  { rule: 'V9', name: 'a check carries an answer id of its own', only: true,
    data: (d, h) => h.setIn(d, [...card('check-does'), 'ask', 'among'], ['made-up']) },
  { rule: 'V10', name: 'the first card is not orient',
    data: (d, h) => h.updateIn(d, part('p1', 'cards'), c => swap(c, 'orient', 'term-cd')) },
  { rule: 'V11', name: 'a portrait comes after the check',
    data: (d, h) => h.updateIn(d, part('p1', 'cards'), c => swap(c, 'portrait-dissonance', 'check-dissonance')) },
  { rule: 'V12', name: 'a meet card shows a case that is not clean',
    data: (d, h) => h.setIn(d, [...kase('sauce'), 'tier'], 'varied') },
  { rule: 'V13', name: 'an again card shows two cases in one setting',
    data: (d, h) => h.setIn(d, [...kase('driver'), 'setting'], 'work') },
  { rule: 'V14', name: 'a look-alike prompt names a case the card does not show',
    data: (d, h) => h.setIn(d, [...card('look-dissonance-sunkcost'), 'prompt', 'answer'], 'insure') },
  { rule: 'V15', name: 'a ledger test contains an outcome name token',
    data: (d, h) => h.updateIn(d, unit('ledger', { id: 'dissonance~fair' }, 'test'), appended('Is it {o:fair}?')) },
  { rule: 'V16', name: 'no check follows the question card by its step',
    data: (d, h) => h.setIn(d, [...card('check-does'), 'after'], 'fair') },
  { rule: 'V17', name: 'a purpose names a topic of a case',
    data: (d, h) => h.updateIn(d, key('branches', 'reasoning', { code: 'R1' }, 'purpose'), appended('Think of a sauce.')) },
  { rule: 'V18', name: 'a worked card has no single right choice',
    data: (d, h) => h.setIn(d, [...card('worked-longrun'), 'hold', 'prompt', 'answer'], 'nonesuch') },
  { rule: 'V20', name: 'two teaching steps with no check between them',
    data: (d, h) => h.updateIn(d, part('p1', 'cards'), c => { const rest = without(c, 'check-dissonance'); const at = rest.indexOf('meet-sunkcost'); return [...rest.slice(0, at + 1), 'check-dissonance', ...rest.slice(at + 1)]; }) },
  { rule: 'V21', name: 'the link after a check gives away its marked words',
    data: (d, h) => h.updateIn(d, [...card('refute-mismatch'), 'link'], appended('"One order makes no difference to anyone".')) },
  { rule: 'V22', name: 'a refute card has no source',
    data: (d, h) => h.updateIn(d, unit('build', 'wrongIdeas'), w => w.slice(1)) },
  { rule: 'V23', name: 'an exception card has the same name on both sides',
    data: (d, h) => h.setIn(d, [...card('exc-both'), 'looksLike'], 'motivated') },
  { rule: 'V24', name: 'a card continues one that is not before it',
    data: (d, h) => h.setIn(d, [...card('term-cd'), 'continues'], 'meet-fair') },
  { rule: 'V25', name: 'the unit closes with transfer before recap',
    data: (d, h) => h.updateIn(d, part('p4', 'close'), c => [...c].reverse()) },
  { rule: 'V26', name: 'a card is in no part',
    data: (d, h) => h.updateIn(d, part('p1', 'cards'), c => without(c, 'refute-waste')) },
  { rule: 'V27', name: 'a card has no link', only: true,
    data: (d, h) => h.removeIn(d, [...card('lens'), 'link']) },
  { rule: 'V28', name: 'a card points at the next unit',
    data: (d, h) => h.updateIn(d, [...card('lens'), 'body'], appended('You will see this again in the next unit.')) },
  { rule: 'V29', name: 'the validator source limits how many words a text may hold', keepLock: true,
    input: input => ({ ...input, validatorSources: { ...input.validatorSources, 'seeded.mjs': ['if (words.', 'length <= 40) { trim(); }'].join('') } }) },
  { rule: 'V30', name: 'marked words are not in the case text',
    data: (d, h) => h.setIn(d, [...kase('shops'), 'cues', 'R1'], 'words that are not in the text') },
  { rule: 'V31', name: 'a specimen route leaves the wrong outcome',
    data: (d, h) => h.setIn(d, ['subjects', P, 'specimens', 0, 'route', 'R1'], ['follows']) },
  { rule: 'V32', name: 'a drill case is a teaching case',
    data: (d, h) => h.setIn(d, [...kase('insure'), 'use'], 'teach') },
  { rule: 'V33', name: 'a case is set in an area not in subject.settings',
    data: (d, h) => h.setIn(d, [...kase('insure'), 'setting'], 'the moon') },
  { rule: 'V34', name: 'a misleading case in a card before its outcome check',
    data: (d, h) => h.setIn(d, [...kase('driver'), 'tier'], 'misleading') },
  { rule: 'V35', name: 'a route case has no reason for a question',
    data: (d, h) => h.removeIn(d, [...kase('payroll'), 'reason', 'R1']) },
  { rule: 'V36', name: 'a reason opens with a bare verdict',
    data: (d, h) => h.updateIn(d, [...kase('payroll'), 'reason', 'R1'], prepended('Correct.')) },
  { rule: 'V37', name: 'an action subject has no way to mark a legitimate outcome', also: ['V25', 'V44'],
    // action: true also turns on the plan card (V25) and a fourth return per outcome (V44); the fault cannot avoid them
    data: (d, h) => h.setIn(d, meta('action'), true) },
  { rule: 'V38', name: 'the drill stages are out of order',
    data: (d, h) => h.updateIn(d, unit('drill', 'rungs'), r => [r[1], r[0], ...r.slice(2)]) },
  { rule: 'V39', name: 'no question is asked alone in the piece stage',
    data: (d, h) => h.updateIn(d, rung('piece'), r => ({ ...r, items: r.items.map(g => g.map(i => i && i.step ? i.case : i)) })) },
  { rule: 'V40', name: 'a drill group holds a single case',
    data: (d, h) => h.updateIn(d, rung('name'), r => ({ ...r, items: r.items.flatMap(g => g.map(i => [i])) })) },
  { rule: 'V41', name: 'the drill never draws from the assumed unit',
    data: (d, h) => h.updateIn(d, unit('drill', 'rungs'), rs => rs.map(r => ({ ...r, items: r.items.map(g => g.filter(i => !i.earlier)).filter(g => g.length) }))) },
  { rule: 'V42', name: 'the piece stage has no tell item',
    data: (d, h) => h.updateIn(d, rung('piece'), r => ({ ...r, items: r.items.map(g => g.filter(i => !i.tell)).filter(g => g.length) })) },
  { rule: 'V43', name: 'the claim stage asks a case that is not a claim',
    data: (d, h) => h.updateIn(d, rung('claim'), r => ({ ...r, items: [...r.items, ['queue']] })) },
  { rule: 'V44', name: 'a name has fewer fresh cases for later days',
    data: (d, h) => {
      const fewer = h.updateIn(d, unit('drill', 'returns'), r => without(r, 'ret-chair'));
      return h.updateIn(fewer, rung('piece'), r => ({ ...r, items: [...r.items, ['ret-chair']] }));
    } },
  { rule: 'V45', name: 'the unit revision goes up with no history line',
    data: (d, h) => h.setIn(d, unit('rev'), 2) },
  { rule: 'V46', name: 'content changed and the lock was not regenerated', keepLock: true,
    data: (d, h) => h.updateIn(d, meta('blurb'), appended('Changed after the lock was written.')) },
  { rule: 'V46', name: 'deployed content changed without a higher revision', keepLock: true,
    input: input => ({ ...input, committedLock: { standard: 1, subjects: {}, units: { [`${P}/${U}`]: { rev: 1, standard: 1, fp: 'sha256:' + '0'.repeat(64), deployed: '2026-10-20' } } } }) },
  { rule: 'V47', name: 'a script file is over the line limit', keepLock: true,
    input: input => ({ ...input, site: { ...input.site, files: [...input.site.files, { path: 'subjects/psychology/u9.cards-1.js', lines: 801 }] } }) },
  { rule: 'V48', name: 'the standard-0 list gained a unit',
    input: input => ({ ...input, standard0: { units: ['psychology/u9'] }, committedStandard0: { units: [] } }) },
  { rule: 'V48', name: 'a unit assumes a unit that is still at standard 0',
    data: withOldUnit('u1', {}), input: listedOld('u1') },
  { rule: 'V49', name: 'two units share a drill key',
    data: withOldUnit('u3', { drill: { key: 'u2' } }), input: listedOld('u3') },
  { rule: 'V50', name: 'a card uses a word the app avoids',
    data: (d, h) => h.updateIn(d, [...card('lens'), 'body'], appended('This lesson is about reasoning.')) },
  { rule: 'V51', name: 'a second lens card',
    data: (d, h) => {
      const lens = find(d.subjects[P].cards[U], 'lens');
      const added = h.updateIn(d, ['subjects', P, 'cards', U], c => [...c, { ...lens, id: 'lens-again' }]);
      return h.updateIn(added, part('p3', 'cards'), c => [...c, 'lens-again']);
    } },
  { rule: 'V52', name: 'two cases of one outcome share a topic',
    data: (d, h) => h.setIn(d, [...kase('driver'), 'topic'], d.subjects[P].cases[U].find(c => c.id === 'sauce').topic) },
  { rule: 'V53', name: 'a case lists an extra answer that loses to nothing',
    data: (d, h) => h.setIn(d, [...kase('sauce'), 'also'], ['scrutiny']) },
  { rule: 'V54', name: 'no route case echoes a teaching case',
    data: (d, h) => h.updateIn(d, ['subjects', P, 'cases', U], cs => cs.map(({ echo, ...rest }) => rest)) },
  { rule: 'V55', name: 'no ledger entry is first separated by the taught question', also: ['V15'],
    // the ledger step is also what V15 checks against the key's answers, so the same fault turns both red
    data: (d, h) => h.updateIn(d, unit('ledger'), l => l.map(e => ({ ...e, step: 'D1' }))) },
  { rule: 'V56', name: 'two units share a title',
    data: withOldUnit('u3', { title: { text: 'One person’s reasoning' } }), input: listedOld('u3') }
];

// Rules with no control, and why. A rule must be in CONTROLS or here.
export const NO_CONTROL = {};
