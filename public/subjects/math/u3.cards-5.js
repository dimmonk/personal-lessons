// Basic Math, Unit Three, part five: the key's one question, the check on it, and the recap that closes the unit after the drill.
// Basic Math is not an action subject (subject.action is false), so the unit has no plan card (lesson standard A11, P26).
// The app prints, on the question card: the question, each answer with when it is given, why it decides, and for every pair
// already compared the question that tells it apart.

FC.cards('math', 'u3', [

  /* ---------- The key's one question ---------- */
  { id: 'q-a1', kind: 'question', step: 'A1',
    h: 'The one question that tells the four types apart',
    link: 'Here is the question and its four answers in one place.',
    decides: [
      'The wrong steps give a number that looks just as neat as the right one, and nothing in the number says it is wrong. Only the question can tell you which steps to use, and only the words of the problem can answer it. That is why you ask it before any working.'
    ],
    how: [
      { do: 'Read the last sentence first, to see which number is missing.', why: 'The question is usually there.' },
      { do: 'Find what the rest of the problem gives you.', why: 'That is what the missing number has to fit.' },
      { do: 'A rule and its result? That is {a:A1.formula}.', why: 'You undo the rule, last thing first.' },
      { do: 'So much for so many, and a new amount? That is {a:A1.rate}.', why: 'You scale the rate to the new amount.' },
      { do: 'Two missing numbers and two facts? That is {a:A1.totals}.', why: 'You use one fact to leave one missing number.' },
      { do: 'The missing number multiplied by itself? That is {a:A1.itself}.', why: 'It needs steps of its own.' },
      { do: 'Find the exact words that show your answer.', why: 'If you cannot find them, you do not have an answer yet.' }
    ],
    whenBoth: 'Some problems show two answers at once. A price for each thing with a fixed charge on top is {a:A1.formula}, not {a:A1.rate}. A rule and its result with the missing number in it twice is {a:A1.itself}, not {a:A1.formula}.' },

  { id: 'check-a1', kind: 'check', after: 'A1',
    case: 'm3-step-dye',
    ask: { type: 'step', step: 'A1' } },

  /* ---------- After the drill ---------- */
  { id: 'recap-unknown', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now worked problems of all four types on your own.',
    carry: [
      'Before any working, ask what the problem gives that the missing number has to fit, and find the words that say it. The question is: {q:A1}',
      'A rule and its result is {o:rearr}. So much for so many and a new amount is {o:prop}. Two missing numbers and two facts is {o:simul}. A missing number multiplied by itself is {o:quad}.',
      'The numbers do not tell you the type. The same 28 m² rug can be {o:rearr}, if you are asked for a length from a width, or {o:quad}, if you are asked for a width when the length is 3 m more.',
      'Two types can pass for another. A price for each thing with a fixed charge on top is {o:rearr}, not {o:prop}. A rule with the missing number in it twice is {o:quad}, not {o:rearr}, even when it comes with a result.',
      'For {o:rearr}: list what is done to the missing number, undo each thing starting with the last, and check by running the {t:formula} forward.',
      'For {o:prop}: find how many times as big the new amount is, make the other number that many times as big, and check that more of one means more of the other.',
      'For {o:simul}: use the count fact to leave one missing number in the totals fact, solve it, find the other number from the count fact, and check both facts.',
      'For {o:quad}: write the equation as x² + b × x = c, add half of b, {t:squared}, to both sides, take the {t:sqroot}, keep both answers, take away half of b, and throw out any answer the problem rules out.'
    ] }
]);
