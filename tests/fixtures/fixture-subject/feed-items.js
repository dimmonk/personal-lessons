// "On the feed": the questions of the test subject. A news story with a block named by `in`; a post with nothing to find; an ad with small print
// and two lines to tap; a report with a chart on a cut axis that is redrawn from zero; a post with a line chart and a tap whose wrong line
// has a slip; a story with the 1,000-people figure.
(() => {
  const line = (id, text, extra = {}) => ({ id, text, ...extra });
  const verdict = (right, wrong) => ({ id: 'verdict', kind: 'choose', prompt: 'Does the text show it?', from: 'verdict', right, then: { [wrong]: 'Read the lines marked after the answer.' } });
  FC.items('feed', [
    { id: 'w-feed', strand: 'finds', facets: { fit: 'holds' },
      blocks: [{ kind: 'article', form: 'news', source: 'Test Ledger · Health', headline: line('h', 'Walkers sleep better, study finds'),
        lines: [line('a1', 'People who walked 30 minutes a day slept 40 minutes longer, researchers said.'), line('a2', 'The study followed 300 adults.', { para: true })] }],
      asks: [{ id: 'line', kind: 'tap', prompt: 'Tap the sentence that gives the number.', none: 'Not given', right: ['a1'] }, verdict('holds', 'not-shown')],
      steps: [{ id: 'find', does: 'Find the number.', working: 'It is in the first sentence: 40 minutes longer.', ask: 'line' }],
      deciding: ['h', 'a1'], reason: 'The first sentence gives the number, 40 minutes longer, and the headline says no more than that.' },
    { id: 'n-news', strand: 'finds', facets: { fit: 'holds' },
      blocks: [
        { kind: 'article', id: 'story', form: 'news', source: 'Test Ledger · City', headline: line('h', 'Bus riders up 12% this spring'),
          lines: [line('a1', 'The transit office counted 12% more riders this spring than last.'), line('a2', 'The new line opened in March.', { note: 'That is when the line opened, not how many riders there are.' }),
            line('a3', 'Officials said more buses will run next year.', { para: true })] },
        { kind: 'prose', id: 'side', lines: [line('b1', 'Riders pay $2 a trip.'), line('b2', 'Passes cost $60 a month.')] }],
      asks: [{ id: 'line', kind: 'tap', prompt: 'Tap the sentence that gives the number.', in: 'story', none: 'Not given', right: ['a1'] }, verdict('holds', 'not-shown')],
      deciding: ['h', 'a1'], reason: 'The first sentence gives the number, 12% more riders, and the headline says the same.' },
    { id: 'n-post', strand: 'finds', facets: { fit: 'outruns' },
      blocks: [{ kind: 'article', form: 'post', source: 'Sam Lee · @samlee · 2h',
        lines: [line('a1', 'Everyone is switching to the new gym.', { note: 'That is a claim with no number in it.' }), line('a2', 'Come and see.')] }],
      asks: [{ id: 'line', kind: 'tap', prompt: 'Tap the sentence that gives the number.', none: 'Not given', right: 'none' }, verdict('not-shown', 'holds')],
      deciding: ['a1'], reason: 'The post gives no number, so there is nothing to tap.' },
    { id: 'n-two', strand: 'finds', facets: { fit: 'outruns' },
      blocks: [{ kind: 'article', form: 'ad', source: 'Test Tires', headline: line('h', 'Stops 30% shorter than the leading tire.'),
        lines: [line('a1', 'Our new tire stops 30% shorter on wet roads.'), line('a2', 'Ask your dealer.'), line('f1', 'Compared with our old tire, on a test track.', { fine: true })] }],
      asks: [{ id: 'line', kind: 'tap', prompt: 'Tap the two sentences that decide it.', pick: 2, right: ['a1', 'f1'] }, verdict('not-shown', 'holds')],
      deciding: ['h', 'a1', 'f1'], reason: 'The number and the small print together show the headline compares with the maker’s own tire.' },
    { id: 'n-bars', strand: 'finds', facets: { fit: 'outruns' },
      blocks: [
        { kind: 'article', form: 'report', source: 'Test Foundation · Summary', headline: line('h', 'Walking clubs improve heart health'),
          lines: [line('a1', 'Club members averaged 68 beats a minute. Non-members averaged 70.'), line('a2', 'No one was measured before joining.')] },
        { kind: 'chart', type: 'bars', title: 'Average resting heart rate', x: ['Club members', 'Non-members'], y: { from: 66, to: 70, step: 1, unit: 'beats a minute' },
          series: [{ values: [68, 70] }], labels: true, source: 'Test Foundation' }],
      asks: [{ id: 'line', kind: 'tap', prompt: 'Tap the sentence that gives the number.', none: 'Not given', right: ['a1'] }, verdict('not-shown', 'holds')],
      deciding: ['h', 'a1', 'a2'], redraw: 'from-zero', reason: 'The gap is 2 beats a minute, and the chart starts at 66.' },
    { id: 'n-last', strand: 'last', facets: { fit: 'holds' },
      blocks: [
        { kind: 'article', form: 'post', source: 'Ana Ruiz · @anaruiz · 1h', lines: [line('a1', 'We reached 90% on Thursday.'), line('a2', 'The week before it was 60%.', { slip: 'wrong-line', note: 'That is last week’s number.' })] },
        { kind: 'chart', type: 'line', title: 'Share done by day', x: ['Mon', 'Tue', 'Wed', 'Thu'], y: { from: 0, to: 100, step: 25, unit: '% done' },
          series: [{ name: 'This week', values: [40, 55, 70, 90] }, { name: 'Last week', values: [30, 35, 50, 60] }], source: 'Ana Ruiz' }],
      asks: [{ id: 'line', kind: 'tap', prompt: 'Tap the sentence that gives this week’s number.', none: 'Not given', right: ['a1'] }],
      deciding: ['a1'], figure: { kind: 'figure', type: 'people', data: { caption: 'Out of 1,000 people', rows: [{ label: 'Without', count: 5 }, { label: 'With', count: 3 }] } },
      reason: 'This week’s number is in the first sentence. The second is last week’s.' }
  ]);
})();
