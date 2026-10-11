// "Pinned labels": the questions of the test subject. A label about the weather pinned on a few lines, thrown from the houses on the left or
// on the right. Each has the rule it is judged by (dry or wet) in a panel, the lines that show each need, and a verdict and a tap.
(() => {
  const line = (id, text, extra = {}) => ({ id, text, ...extra });
  const speaker = id => line(id, 'Said by a forecaster at the radio station.', { fine: true, note: 'That says who said it, not what it says.', slip: 'took-speaker' });
  // spec: { id, strand, side, fit, rule, word, lines, tap, has, deciding }
  const labelled = s => ({
    id: s.id, strand: s.strand, facets: { side: s.side, fit: s.fit },
    blocks: [
      { kind: 'article', form: 'post', source: `Comment · @${s.side}_house`, label: { text: `It is ${s.word} out.`, by: `A neighbor on the ${s.side}`, side: s.side }, lines: [...s.lines, speaker(`${s.id}-s`)] },
      { kind: 'panel', rules: [s.rule] }],
    asks: [
      { id: 'verdict', kind: 'choose', prompt: `Does the label “${s.word}” fit?`, from: 'verdict', right: s.fit, then: { [s.fit === 'fits' ? 'off' : 'fits']: 'Read the lines marked after the answer.' } },
      { id: 'words', kind: 'tap', prompt: 'Tap the line that decides it.', right: [s.tap] }],
    has: s.has, deciding: s.deciding, reason: `The lines decide it: ${s.lines.find(l => l.id === s.tap).text}`
  });
  const dryFits = (id, strand, side) => labelled({ id, strand, side, fit: 'fits', rule: 'dry', word: 'dry',
    lines: [line(`${id}-a`, 'The sky is clear all morning.'), line(`${id}-b`, 'The grass is dry.', { note: 'That is about the grass, not the sky.' })],
    tap: `${id}-b`, has: { 'dry-sky': `${id}-a`, 'dry-ground': `${id}-b` }, deciding: [`${id}-a`, `${id}-b`] });
  const dryOff = (id, strand, side) => labelled({ id, strand, side, fit: 'off', rule: 'dry', word: 'dry',
    lines: [line(`${id}-a`, 'The sky is clear.'), line(`${id}-b`, 'The grass is soaked.')],
    tap: `${id}-b`, has: { 'dry-sky': `${id}-a`, 'dry-ground': null }, deciding: [`${id}-a`, `${id}-b`] });
  const wetFits = (id, strand, side) => labelled({ id, strand, side, fit: 'fits', rule: 'wet', word: 'wet',
    lines: [line(`${id}-a`, 'Rain is falling on the town.'), line(`${id}-b`, 'Umbrellas are out.')],
    tap: `${id}-a`, has: { 'wet-rain': `${id}-a` }, deciding: [`${id}-a`] });
  const wetOff = (id, strand, side) => labelled({ id, strand, side, fit: 'off', rule: 'wet', word: 'wet',
    lines: [line(`${id}-a`, 'No rain is forecast today.'), line(`${id}-b`, 'Clouds may come later.')],
    tap: `${id}-a`, has: { 'wet-rain': null }, deciding: [`${id}-a`] });
  FC.items('labels', [
    dryFits('w-1', 'one', 'left'),
    dryOff('g-1', 'one', 'left'), wetFits('g-2', 'one', 'right'),
    dryFits('h-1', 'one', 'left'), wetOff('h-2', 'one', 'right'),
    dryOff('c-1', 'one', 'left'), wetFits('c-2', 'one', 'right'), dryFits('c-3', 'two', 'left'), wetOff('c-4', 'two', 'right'),
    dryFits('ra-1', 'one', 'left'), wetOff('ra-2', 'one', 'right'), dryOff('ra-3', 'one', 'left'),
    wetFits('rb-1', 'two', 'right'), dryOff('rb-2', 'two', 'left'), wetOff('rb-3', 'two', 'right')
  ]);
})();
