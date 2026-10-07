// Political Ideologies, Unit Four, part two: the two names side by side on one school, and the question that tells them apart.

FC.cards('ideology', 'u4', [

  /* ---------- The two names side by side ---------- */
  { id: 'look-conserv-react', kind: 'lookalike', ledger: 'conserv~react',
    link: 'These two are the easiest to mix up, because both love what was handed down. Here they are about one school.',
    cases: ['i4-lk-conserv-school', 'i4-lk-react-school'],
    instruction: 'Both stories are about the church school at Marrow Lane, and both want its old ways to guide it. Compare one thing: does the text ask for what is there to stay, or for what has gone to come back?',
    prompt: { kind: 'which', option: 'T1.restore', answer: 'i4-lk-react-school' },
    difference: [
      'In Story A the school is still a church school, with its Sunday hymns and the pastor choosing the principal. The text asks to keep them, with slow change. Nothing is gone and nothing is asked back. That is {o:conserv}.',
      'In Story B the school was taken from the church by an act. The text calls that a wrong and asks for the act to be undone and the school given back. That is {o:react}.',
      'How strongly each text feels does not decide it. What it asks for does.'
    ] },

  /* ---------- The question, as a question ---------- */
  { id: 'q-ways', kind: 'question', step: 'T1',
    h: 'The question to ask about old ways',
    link: 'Here is the question and its two answers in one place.',
    decides: [
      'Unit One’s question, {q:D1}, gave both names the same answer: {a:D1.tradition}. This question is what tells them apart.',
      'How fond a text sounds, how old the thing is and how angry the writer is tell you nothing. Only what the text asks for does.'
    ],
    how: [
      { do: 'Find the sentence that says what to do with what the text holds up.', why: 'That sentence is the request, and the request decides.' },
      { do: 'Still there? Look for words that ask to keep it and change it slowly: {a:T1.keep}.', why: 'Nothing has gone, so nothing is asked back.' },
      { do: 'Gone? Look for all three: what was lost, words calling its loss a wrong, and the request for it back: {a:T1.restore}.', why: 'Miss one and it is not this answer.' },
      { do: 'Mourning what is gone, but asking only to keep what is left? That is {a:T1.keep}.', why: 'Sadness is not a request.' },
      { do: 'Find the exact words that show your answer.', why: 'If you can’t find them, you don’t have an answer yet.' }
    ] },

  { id: 'check-ways', kind: 'check', after: 'T1',
    case: 'i4-check-ways',
    ask: { type: 'step', step: 'T1' } }
]);
