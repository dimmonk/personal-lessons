// Statistical Claims, Unit One, part two (end): the key's first question as a question. Its tie-break (the earlier part wins when a claim
// goes wrong in more than one) is taught here and shown in the whole story on the next card. The app prints, on the question card: the
// question, each answer with when it is given, why it decides, and for every pair already compared the question that
// separates it and the key's tie-break.

FC.cards('stats', 'u1', [

  { id: 'q-gate', kind: 'question', step: 'S1',
    h: 'The question to ask first',
    link: 'Here is the question and its five answers in one place.',
    decides: [
      'If the people counted are the wrong people, a careful look at how the number was counted is a careful look at something that cannot hold. If you take a rise in a number for a real rise when the counting changed, you go hunting for the cause of something that never happened.'
    ],
    how: [
      { do: 'Read the whole claim before you answer.', why: 'The sentence that says how people were picked, or that something changed, is often the last one.' },
      { do: 'First look at the people behind the number: {a:S1.counted}.', why: 'If they are the wrong people, nothing built on them can hold.' },
      { do: 'Then look at the counting: {a:S1.measure}.', why: 'The right people can still be counted with a clock that moved.' },
      { do: 'Then look at what it is set beside: {a:S1.compare}.', why: 'A percentage or a total can be right and still hide what you need.' },
      { do: 'Then look for a claim of cause: {a:S1.cause}.', why: 'A claim of cause is only as sound as the numbers under it.' },
      { do: 'None of the four fits? It is {a:S1.holds}.', why: 'Then every part checks out, as far as the claim goes.' },
      { do: 'Find the exact words that show your answer.', why: 'If you cannot find them, you do not have an answer yet.' }
    ],
    whenBoth: 'Some claims go wrong in two places at once, such as a claim that a program works that is built on the members who stayed in it. Use the order above: the earlier part wins, because everything after it rests on it. The test for each pair is below.' },

  { id: 'check-gate', kind: 'check', after: 'S1',
    case: 'gate-buses',
    ask: { type: 'step', step: 'S1' } }
]);
