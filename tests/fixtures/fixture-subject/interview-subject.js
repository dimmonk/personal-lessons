// An eighth made-up subject, used only by the tests: a short list of questions answered from memory. It exercises the text ask with accepted answers
// (case, punctuation, one misspelling, brackets, numbers in words, parts in any order, two different answers for "name two", the learner's own answers),
// the spoken block, a check that asks the same questions again, the learner's own answers and interview date, and the mock interview: a check drawn at
// random, read aloud with its words held back, and taken a second time a week later. Never shipped.
FC.subject('interview', {
  name: 'Quick answers',
  rev: 1,
  standard: 2,
  history: [{ rev: 1, date: '2026-10-11', change: 'Made for the tests of answers from memory, questions read aloud, the learner\'s own answers and the mock interview.' }],
  endResult: 'Answer a list of short questions from memory, out loud and typed, and keep the answers that depend on you.',
  parts: [{ id: '1', title: 'Short answers' }, { id: '2', title: 'Your own answers' }, { id: '3', title: 'The mock' }, { id: '4', title: 'A news story' }],
  complete: true,
  lists: {},
  facets: {},
  mix: [],
  strands: [
    { id: 'form', title: 'The form of government' }, { id: 'law', title: 'The supreme law' }, { id: 'amend', title: 'The amendments' },
    { id: 'branches', title: 'The three branches' }, { id: 'oath', title: 'The oath' }, { id: 'declare', title: 'The founding document' },
    { id: 'senate', title: 'The Senate' }, { id: 'term', title: 'A senator\'s term' }, { id: 'house', title: 'The House' },
    { id: 'power', title: 'A power of the president' }, { id: 'court', title: 'The highest court' }, { id: 'vote', title: 'Who can vote' },
    { id: 'senator', title: 'Your senator' }, { id: 'governor', title: 'Your governor' }, { id: 'capital', title: 'Your capital' },
    { id: 'news', title: 'Who stopped it' }, { id: 'sign', title: 'Who signed it' }
  ],
  refs: [{ id: 'list', text: 'The list the questions come from', value: 'M-1778 (09/25)', asOf: '2026-10-11',
    source: 'https://www.uscis.gov/sites/default/files/document/questions-and-answers/2025-Civics-Test-128-Questions-and-Answers.pdf' }],
  review: { dateField: 'answers.interviewDate' },
  own: {
    answers: { into: 'answers', fields: [
      { id: 'q23', label: 'Who is one of your state’s U.S. senators now?', type: 'text', hint: 'Both names, with a semicolon between' },
      { id: 'q61', label: 'Who is the governor of your state now?', type: 'text' },
      { id: 'q62', label: 'What is the capital of your state?', type: 'text' },
      { id: 'interviewDate', label: 'The day of your interview', type: 'date', optional: true }] }
  },
  readingShare: 0.9
});
