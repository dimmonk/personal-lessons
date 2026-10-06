// Political Ideologies, Unit Four, part two: the two names side by side on one school, and the question that tells them apart.

FC.cards('ideology', 'u4', [

  /* ---------- The two names side by side ---------- */
  { id: 'look-conserv-react', kind: 'lookalike', ledger: 'conserv~react',
    link: 'Both names begin from a text that holds up what was handed down, so they are the pair most likely to be mixed up. Here they are on one school.',
    cases: ['i4-lk-conserv-school', 'i4-lk-react-school'],
    instruction: 'Both cases are about the church school at Marrow Lane, and both hold up its old ways. Compare one thing: does the text ask for what is there to stay, or for what has gone to come back?',
    prompt: { kind: 'which', option: 'T1.restore', answer: 'i4-lk-react-school' },
    difference: [
      'In Case A the school is still a church school. The text says its Sunday hymns and the pastor’s choosing of the principal should guide the school, and asks for them to be kept, with any change slow. Nothing has gone and nothing is asked back. The answer is {a:T1.keep}, and the case is {o:conserv}.',
      'In Case B the school was taken from the church by an act. The text says that was a wrong, and asks for the act to be undone and the school given back. The answer is {a:T1.restore}, and the case is {o:react}.'
    ] },

  /* ---------- The question, as a question ---------- */
  { id: 'q-ways', kind: 'question', step: 'T1',
    h: 'The question you have been answering all along',
    link: 'This card puts the question and its answers in one place, and says why it is asked.',
    decides: 'Unit One’s question, {q:D1}, gave both names the same answer: {a:D1.tradition}. This question is what tells them apart. How fond a text sounds, how old the thing is and how angry the writer is tell you nothing. Only what is asked of the old ways does.',
    how: 'Find the sentence that says what is to be done with the old ways. For the first answer, point to what is still there and to the words that ask for it to be kept, with change slow. For the second you need three things: what has gone, the words that call its going a wrong, and the request for it back. A text can be sad about what has gone and still ask only that what is left be kept. Sadness is not the second answer; only the request is.' },

  { id: 'check-ways', kind: 'check', after: 'T1',
    case: 'i4-check-ways',
    ask: { type: 'step', step: 'T1' } }
]);
