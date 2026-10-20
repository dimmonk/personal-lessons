// A fifth made-up subject, used only by the tests: reading what arrives on a phone. It exercises the article block in its four forms (a news
// story, a post, an ad with small print, a report), the tap ask (one line, two lines, "Not given", a block named by `in`, the lines marked at
// the start), the chart (bars on a cut axis, a line from zero, redrawn from zero in the feedback) and the 1,000-people figure. Never shipped.
FC.subject('feed', {
  name: 'On the feed',
  field: 'skills',
  rev: 1,
  standard: 2,
  history: [{ rev: 1, date: '2026-10-11', change: 'Made for the tests of the articles, the tap, the charts and the people figure.' }],
  endResult: 'Read what arrives on your phone and find the line that gives the number.',
  parts: [{ id: '1', title: 'Find the number' }],
  complete: true,
  lists: {
    verdict: [{ id: 'holds', text: 'Holds up' }, { id: 'not-shown', text: 'Does not show it' }],
    slip: [{ id: 'doubted', text: 'turned down a claim that holds up' }, { id: 'wrong-line', text: 'tapped the line about something else' }]
  },
  facets: { fit: { name: 'What the text shows', values: [{ id: 'holds', text: 'claims that hold up' }, { id: 'outruns', text: 'claims the text does not show' }] } },
  mix: [],
  strands: [{ id: 'finds', title: 'Finding the line' }, { id: 'last', title: 'The last question' }],
  readingShare: 0.9
});
