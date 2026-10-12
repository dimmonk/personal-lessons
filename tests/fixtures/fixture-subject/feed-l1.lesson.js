// "On the feed", lesson 1: what arrives on a phone, what the charts look like, a worked story, a group with the lines marked, a group
// without, and a check of one question with the 1,000-people picture in its feedback.
FC.lesson('feed', {
  id: 'l1', part: '1', title: 'Find the number', rev: 1, status: 'live',
  history: [{ rev: 1, date: '2026-10-11', change: 'First version, for the tests.' }],
  why: 'What arrives on your phone has a number somewhere in it. Find the line that gives it.',
  flow: [
    { title: 'What arrives',
      show: [
        { kind: 'article', form: 'news', source: 'Test Ledger · Health', headline: { id: 'h', text: 'Walkers sleep better, study finds' },
          lines: [{ id: 'a1', text: 'People who walked 30 minutes a day slept 40 minutes longer, researchers said.' }, { id: 'a2', text: 'The study followed 300 adults.', para: true }] },
        { kind: 'article', form: 'post', source: 'Sam Lee · @samlee · 2h', lines: [{ id: 'a1', text: 'Everyone is switching to the new gym.' }, { id: 'a2', text: 'Come and see.' }] },
        { kind: 'article', form: 'ad', source: 'Test Tires', headline: { id: 'h', text: 'Stops 30% shorter than the leading tire.' },
          lines: [{ id: 'a1', text: 'Our new tire stops 30% shorter on wet roads.' }, { id: 'f1', text: 'Compared with our old tire, on a test track.', fine: true }] },
        { kind: 'article', form: 'report', source: 'Test Foundation · Summary', headline: { id: 'h', text: 'Walking clubs improve heart health' },
          lines: [{ id: 'a1', text: 'Club members averaged 68 beats a minute.' }, { id: 'a2', text: 'No one was measured before joining.', para: true }] }
      ] },
    { title: 'What the charts and the people look like',
      show: [
        { kind: 'chart', type: 'bars', title: 'Sales by quarter', x: ['Spring', 'Summer', 'Fall'], y: { from: 50, to: 60, step: 2, unit: 'thousand dollars' },
          series: [{ name: '2025', values: [52, 55, 58] }, { name: '2026', values: [54, 56, 60] }], labels: true, source: 'Test Shop' },
        { kind: 'chart', type: 'line', title: 'Share done by day', x: ['Mon', 'Tue', 'Wed', 'Thu'], y: { from: 0, to: 100, step: 25, unit: '% done' },
          series: [{ name: 'This week', values: [40, 55, 70, 90] }, { name: 'Last week', values: [30, 35, 50, 60] }], labels: true, source: 'Test Office' },
        { kind: 'figure', type: 'people', data: { caption: 'Out of 1,000 people', rows: [{ label: 'Without the pill', count: 4 }, { label: 'With the pill', count: 2 }, { label: 'Everyone', count: 1000 }, { label: 'Nobody', count: 0 }] } }
      ] },
    { worked: 'w-feed' },
    { set: { items: ['n-news'], order: 'listed', support: { shown: true } } },
    { set: { items: ['n-post', 'n-two', 'n-bars'], order: 'listed' } }
  ],
  check: { items: ['n-last'], feedback: 'at-end', pass: [{ right: { min: 1 } }] }
});
