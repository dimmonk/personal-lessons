// Statistical Claims, Unit One, part two (end): the key's first question as a question. Its tie-break (the earlier part wins when a claim
// goes wrong in more than one) is taught here and shown in the whole case on the next card. The app prints, on the question card: the
// question, what it is for, each answer with when it is given, why it decides, and for every pair already compared the question that
// separates it and the key's tie-break.

FC.cards('stats', 'u1', [

  { id: 'q-gate', kind: 'question', step: 'S1',
    h: 'The question you have been answering all along',
    link: 'This card puts the question and its five answers in one place, as they are always asked, and says why it comes before anything else.',
    decides: [
      'A claim can only be judged on how it is put together, and its parts rest on one another. If the people counted are not a fair picture, a careful look at what the figure counts or what it is set beside is a careful look at something that cannot hold. If you take a rise in a figure for a rise in the real thing, when the counting changed, you go looking for the cause of something that did not happen. That is why this question comes first.'
    ],
    how: [
      'Read the whole claim before you answer, the last sentence included: the sentence that says how the people were picked, or that something changed, is often the last one. Then put the parts to the claim in order, and stop at the first that goes wrong.',
      'First, look at {a:S1.counted}: {needs:counted}. If the case shows that, this is the answer, whatever else is in the case.',
      'Second, look at {a:S1.measure}: {needs:measure}. If the case shows that, and the first did not, this is the answer.',
      'Third, look at {a:S1.compare}: {needs:compare}.',
      'Fourth, look at {a:S1.cause}: {needs:cause}.',
      'If you have put each of the four to the claim and none of them fits, what is left is {a:S1.holds}: {needs:holds}.',
      'Whichever answer you give, put your finger on the words that show it. For the last answer, point to the words that show each part holding. If you cannot point, you do not have an answer yet.'
    ],
    whenBoth: 'Some cases show two of the five at once, such as a claim that a program works that is built on the members who stayed in it. The order above is how that is chosen: each part gives way to every part before it, because everything after it rests on it. The pairs below each have one question that tells them apart.' },

  { id: 'check-gate', kind: 'check', after: 'S1',
    case: 'gate-buses',
    ask: { type: 'step', step: 'S1' } }
]);
